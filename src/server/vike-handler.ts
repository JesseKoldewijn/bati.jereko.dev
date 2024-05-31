import { renderPage } from "vike/server";

export async function vikeHandler<
	Context extends Record<string | number | symbol, unknown>,
>(request: Request, context?: Context): Promise<Response> {
	const cookies = request.headers.get("Cookie");
	const cookieArray =
		cookies
			?.split(";")
			.map((c) => c.split("="))
			.flat() ?? [];
	const cookieObject = cookieArray.reduce(
		(acc, [key, value]) => {
			acc[key] = value;
			return acc;
		},
		{} as Record<string, string>
	);

	const readOnlyCookieMap = new Map(
		Object.entries(cookieObject)
	) as ReadonlyMap<string, string>;

	const ctx = {
		cookies: readOnlyCookieMap,
		...context,
	};
	const pageContextInit = { ...(ctx ?? {}), urlOriginal: request.url };
	const pageContext = await renderPage(pageContextInit);
	const response = pageContext.httpResponse;

	return new Response(response?.getReadableWebStream(), {
		status: response?.statusCode,
		headers: response?.headers,
	});
}
