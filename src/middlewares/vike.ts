import type { Context } from 'hono'
import { minify } from 'html-minifier-terser'
import { renderPage } from 'vike/server'

export default async function vike(c: Context) {
  const method = c.req.method
  const pageContext = await renderPage({
    urlOriginal: c.req.url,
    headersOriginal: c.req.header(),
    method,
  })
  const response = pageContext.httpResponse
  let htmlBody: string
  try {
    htmlBody = await minify(response.body, {
      collapseWhitespace: true,
      minifyJS: true,
      removeComments: true,
    })
  }
  catch (error) {
    console.error('Error during HTML minification:', error)
    htmlBody = response.body
  }
  c.status(response.statusCode)
  response.headers.forEach(([key, value]) => {
    c.header(key, value)
  })
  return c.body(htmlBody)
}
