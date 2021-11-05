import styled from 'styled-components';
import Head from "next/head";
import Header from '../../../../components/Header';
import Footer from '../../../../components/Footer';
import Image from 'next/image';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { AdContainer, StickyAdContainer } from '../../../../components/AdContainer';
import StickyShare from '../../../../components/StickyShare';
import FixShare from '../../../../components/FixShare';
import formatDates from '../../../../utils/formatDates';
import formatHtmlText from '../../../../utils/formatHtmlText';

const ArticlePageMain = styled.main`
  margin: 20px 0;
`;

const TitleArea = styled.div`
  h1{
    color: ${({ theme }) => theme.colors.text_4};
  }
  p, span{
    color: ${({ theme }) => theme.colors.text_3};
  }
`;

const ImageArea = styled.div`
  width: 100%;
  height: 400px;
  position: relative;
`;

const NewsBody = styled.div`
  p {
    padding-top: 24px;
    padding-bottom: 16px;
    line-height: 36px;
    font-size: 17px;
    font-weight: 400;
    color: ${({ theme }) => theme.colors.text_3};
    iframe {
      display: flex;
      align-items: center;
      margin: 0 auto;
      max-width: 100%;
    }
    div {
      margin: 0 auto;
      max-width: 100%;
    }
    img {
      display: flex;
      align-items: center;
      margin: 0 auto;
      max-width: 100%;
    }
  }
  span{
    line-height: 28px;
    font-size: 15px;
    color: ${({ theme }) => theme.colors.text_2};
  }
  ul {
    list-style-type: disc;
    padding-left: 50px;
    padding-top: 24px;
  }
  a {
    color: ${({ theme }) => theme.colors.primary};
    font-weight: 600;
    text-decoration: underline;
  }
  hr {
    margin-top: 24px;
  }
  h2 {
    font-size: 28px;
    font-weight: bold;
    padding-top: 24px;
    color: ${({ theme }) => theme.colors.text_4};
  }
  h3 {
    font-size: 24px;
    font-weight: bold;
    padding-top: 24px;
    color: ${({ theme }) => theme.colors.text_4};
  }
  .widget-news-list {
    list-style-type: none;
    padding: 0px;
  }
  strong {
    font-weight: bold;
  }
  blockquote {
    display: flex;
    align-items: center;
    margin: 0 auto !important;
  }
  .widget-news {
    a {
      text-decoration: none;
      h3 {
        font: normal normal 800 18px/28px "Poppins";
        padding: 0;
      }
    }
  }
  figure{
    img{
      width: 100%;
      height: 100%;
    }
  }
  .aligncenter,
  .alignleft,
  .alignright,
  .size-full,
  .size-large {
    width: 100% !important;
    height: auto;
    margin: 0 auto !important;
    padding-top: 24px;
    text-align: center;
  }
  .wp-caption-text {
    margin: 0;
    padding: 15px 0;
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
    font-weight: 400;
    font-size: 15px;
    line-height: 26px;
    color: ${({ theme }) => theme.colors.text_3};
  }
  .quote-box {
    overflow: hidden;
    margin: 30px -15px;
    padding: 30px;
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
    border-top: 1px solid rgba(0, 0, 0, 0.1);
  }
  .quote-box p {
    font-size: 26px;
    font-weight: 700;
    line-height: 30px;
    letter-spacing: -0.6px;
    color: #000;
    padding: 0;
  }
  .item-share-list {
    display: flex;
    justify-content: flex-end;
    margin-top: 24px;
    a {
      padding: 4px;
    }
  }
  .widget-box {
    position: relative;
    &::before {
      display: block;
      position: absolute;
      top: 0;
      left: 0;
      content: "";
      width: 75px;
      height: 5px;
      background: ${({ theme }) => theme.colors.primary};
      margin-top: 10px;
    }
  }
  b {
    font-weight: bold;
  }
`;

export default function ArticlePage({ postData, seoData }) {
  return (
    <>
      <Head>
        <title>{seoData.title} | Mub Music - Music World News</title>
        <meta name="description" content={seoData.excerpt} />
        <meta property="og:title" content={seoData.title} key="title" />
        <meta property="og:description" content={seoData.excerpt}/>
        <link rel="preload" href={postData[0].fimg_url} as="image" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ 
        __html: `
            {
              "@context": "https://schema.org",
              "@type": "NewsArticle",
              "mainEntityOfPage": {
                "@type": "WebPage",
                "@id": "https://mubmusic.com/news/${postData[0].categories[0].category_slug}/${postData[0].slug}"
              },
              "headline": "${seoData.title}",
              "description": "${seoData.excerpt}"
              "image": "${postData[0].fimg_url}",
              "datePublished": "${postData[0].date}",
              "dateModified": "${postData[0].modified}",
              "author": {
                "@type": "Person",
                "name": "${postData[0].author_meta[0].display_name}"
              },
              "publisher": {
                "@type": "Organization",
                "name": "Elite Strategies",
                "logo": {
                  "@type": "ImageObject",
                  "url": "https://mubmusic.com/_next/image?url=%2Fmub-logo-icon.png&w=96&q=75"
                }
              },
            }          
        `
        }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ 
        __html: `
            {
              "@context": "https://schema.org/",
              "@type": "BreadcrumbList",
              "itemListElement": [{
                  "@type": "ListItem",
                  "position": 1,
                  "name": "Home",
                  "item": "https://mubmusic.com"
                  },
                  {
                  "@type": "ListItem",
                  "position": 2,
                  "name": "News",
                  "item": "https://mubmusic.com/news"
                  },
                  {
                  "@type": "ListItem",
                  "position": 3,
                  "name": "${postData[0].categories[0].category_name}",
                  "item": "https://mubmusic.com/news/${postData[0].categories[0].category_slug}"
                  },
                  {
                  "@type": "ListItem",
                  "position": 4,
                  "name": "${seoData.title}",
                  "item": "https://mubmusic.com/${postData[0].categories[0].category_slug}/${postData[0].slug}"
              }]       
        `
        }} />
      </Head>
      <Header />
      <ArticlePageMain>
        <Container maxWidth="lg">
          <Box sx={{ width: '100%'}}>
              <Grid container>
                <Grid xs={12} sm={12} md={3} p={2}>
                  <StickyShare
                    width={`100%`}
                    height={`300px`}
                    margins={`35px 0 20px 0`}
                    background={`#F5F5F7`}
                    title={postData[0].title.rendered}
                    id={postData[0].id}
                    link={postData[0].link}
                  />
                </Grid>
                <Grid xs={12} sm={12} md={6} p={2}>
                    <TitleArea>
                      <Grid xs={12}>
                        <Typography gutterBottom variant="button" mb={1} component="div">
                          <span>{postData[0].categories[0].category_name}</span>
                        </Typography>
                        <Typography gutterBottom variant={"h3"} mb={1} component="div">
                          <h1>{postData[0].title.rendered.replace(new RegExp("#[^>]*;|amp;", "g"), "")}</h1>
                        </Typography>
                        <Typography gutterBottom variant={"body1"} mb={1} component="div" dangerouslySetInnerHTML={{
                          __html: postData[0].excerpt.rendered,
                        }} />
                        <Typography gutterBottom variant={"body2"} mb={2} component="div">
                          <span>By {postData[0].author_meta[0].display_name} at {formatDates(postData[0].modified)}</span>
                        </Typography>
                      </Grid>
                    </TitleArea>
                    <Grid xs={12}>
                      <ImageArea>
                        <Image
                          src={postData[0].fimg_url}
                          alt={postData[0].excerpt.rendered.replace(/<\/?p[^>]*>/g, "")}
                          layout="fill"
                          objectFit="cover"
                        />
                        <Typography gutterBottom variant={"caption"} align="center" mt={1} component="div" color="#999">
                          <span>Lorem ipsum</span>
                        </Typography>
                      </ImageArea>
                    </Grid>
                    <Grid xs={12}>
                      <NewsBody
                      className="article-content"
                      dangerouslySetInnerHTML={{
                        __html: postData[0].content.rendered,
                      }}
                      />
                    </Grid>
                    <FixShare
                    width={`100%`}
                    height={`300px`}
                    margins={`35px 0 20px 0`}
                    background={`#F5F5F7`}
                    title={postData[0].title.rendered}
                    id={postData[0].id}
                    link={postData[0].link}
                    />
                </Grid>
                <Grid xs={12} sm={12} md={3} p={2}>
                  <StickyAdContainer
                    id="ad-1-970x250"
                    width={`100%`}
                    height={`300px`}
                    margins={`35px 0 20px 0`}
                    background={`#F5F5F7`}
                    dangerouslySetInnerHTML={{
                      __html: ``,
                    }}
                  />
                </Grid>
              </Grid>
          </Box>
        </Container>
      </ArticlePageMain>
      <Footer/>
    </>
  );
}

export const getStaticProps = async (context) => {
  const reqPosts = await fetch(`https://mubdmn-dev.crdps.xyz/wp-json/wp/v2/posts?slug=${context.params.slug}`);
  const postData = await reqPosts.json();
  const seoData = {
    title: formatHtmlText(postData[0].title.rendered),
    excerpt: formatHtmlText(postData[0].excerpt.rendered)
  };

  return {
    revalidate: 300,
    props: {
      seoData,
      postData
    },
  };
};

export async function getStaticPaths() {
  const reqStaticPosts = await fetch("https://mubdmn-dev.crdps.xyz/wp-json/wp/v2/posts/");
  const staticPostsJson = await reqStaticPosts.json();
  const paths = staticPostsJson.map((post) => {
    return {
      params: {
        category: post.categories[0].category_name,
        slug: post.slug,
      },
    };
  });

  return {
    paths,
    fallback: "blocking",
  };
}