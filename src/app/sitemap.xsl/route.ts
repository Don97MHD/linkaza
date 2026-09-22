const stylesheet = `<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0"
  xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
  xmlns:sitemap="http://www.sitemaps.org/schemas/sitemap/0.9"
  xmlns:xhtml="http://www.w3.org/1999/xhtml">
  <xsl:output method="html" encoding="UTF-8" indent="yes" />
  <xsl:template match="/">
    <html lang="en">
      <head>
        <title>Linkaza Sitemap</title>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <style>
          body { margin: 0; padding: 32px; background: #f7faf4; color: #163f32; font-family: Arial, sans-serif; }
          main { max-width: 1120px; margin: 0 auto; }
          h1 { margin: 0 0 8px; font-size: 30px; }
          p { margin: 0 0 24px; color: #5f746d; }
          table { width: 100%; border-collapse: collapse; background: #fff; border: 1px solid #dfe8dc; border-radius: 14px; overflow: hidden; }
          th, td { padding: 12px 14px; border-bottom: 1px solid #e7eee4; text-align: left; vertical-align: top; font-size: 14px; }
          th { background: #114c3b; color: #fff; font-size: 13px; letter-spacing: .04em; text-transform: uppercase; }
          tr:last-child td { border-bottom: 0; }
          a { color: #0f684f; text-decoration: none; word-break: break-all; }
          a:hover { text-decoration: underline; }
          .count { display: inline-flex; margin-bottom: 16px; padding: 6px 10px; border-radius: 999px; background: #e8f4df; color: #114c3b; font-size: 13px; }
        </style>
      </head>
      <body>
        <main>
          <h1>Linkaza XML Sitemap</h1>
          <p>This sitemap is formatted for browser review. Search engines read the underlying XML.</p>
          <div class="count">
            <xsl:value-of select="count(sitemap:urlset/sitemap:url)" />
            <xsl:text> URLs</xsl:text>
          </div>
          <table>
            <thead>
              <tr>
                <th>URL</th>
                <th>Arabic alternate</th>
                <th>English alternate</th>
                <th>x-default</th>
              </tr>
            </thead>
            <tbody>
              <xsl:for-each select="sitemap:urlset/sitemap:url">
                <tr>
                  <td><a href="{sitemap:loc}"><xsl:value-of select="sitemap:loc" /></a></td>
                  <td><a href="{xhtml:link[@hreflang='ar']/@href}"><xsl:value-of select="xhtml:link[@hreflang='ar']/@href" /></a></td>
                  <td><a href="{xhtml:link[@hreflang='en']/@href}"><xsl:value-of select="xhtml:link[@hreflang='en']/@href" /></a></td>
                  <td><a href="{xhtml:link[@hreflang='x-default']/@href}"><xsl:value-of select="xhtml:link[@hreflang='x-default']/@href" /></a></td>
                </tr>
              </xsl:for-each>
            </tbody>
          </table>
        </main>
      </body>
    </html>
  </xsl:template>
</xsl:stylesheet>
`;

export function GET() {
  return new Response(stylesheet, {
    headers: {
      'Content-Type': 'text/xsl; charset=utf-8',
      'Cache-Control': 'public, max-age=3600',
    },
  });
}
