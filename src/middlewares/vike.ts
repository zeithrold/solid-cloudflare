import type { Context } from 'hono'
import { stream } from 'hono/streaming'
import { renderPage } from 'vike/server'

export default async function vike(c: Context) {
  const method = c.req.method
  const pageContext = await renderPage({
    urlOriginal: c.req.url,
    headersOriginal: c.req.header(),
    method,
  })
  const { writable, readable } = new TransformStream()
  const response = pageContext.httpResponse
  response.pipe(writable)
  c.status(response.statusCode)
  response.headers.forEach(([key, value]) => {
    c.header(key, value)
  })
  return stream(c, async (stream) => {
    return stream.pipe(readable)
  })
}
