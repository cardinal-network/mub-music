export default function NewsSitemap() {};

export const getServerSideProps = async ({ res }) => {
    const baseUrl = {
        development: "http://localhost:3000",
        production: "https://mubmusic.com",
      }[process.env.NODE_ENV];

    const reqPosts = await fetch(`https://mubdmn-dev.crdps.xyz/wp-json/wp/v2/posts`);
    const postsData = await reqPosts.json();

    const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:news="http://www.google.com/schemas/sitemap-news/0.9" xmlns:image="http://www.google.com/schemas/sitemap-image/1.1" xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9 http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">
        ${postsData.map(({slug, categories, date, title, tags_data, fimg_url}) => {
            return(
                `
                <url>
                    <loc>${baseUrl}/news/${categories[0].category_slug}/${slug}</loc>
                    <news:news>
                        <news:publication>
                            <news:name>Exame</news:name>
                            <news:language>pt</news:language>
                        </news:publication>
                        <news:publication_date>${date}</news:publication_date>
                        <news:title>${title.rendered}</news:title>
                        <news:keywords>${tags_data.map((item) => item.name).join(', ')}</news:keywords>
                    </news:news>
                    <image:image>
                        <image:loc>${fimg_url.replace(/&/g, '&amp;')}</image:loc>
                    </image:image>
                    <lastmod>${date}</lastmod>
                </url>
                `
            )
        }).join('')}
      </urlset>
    `;

    res.setHeader("Content-Type", "text/xml");
    res.write(sitemap);
    res.end();

    return {
      props: {},
    };
  };