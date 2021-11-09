import styled from 'styled-components';
import Head from "next/head";
import Header from '../../../components/Header';
import Footer from '../../../components/Footer';
import NewsCard from '../../../components/NewsCard';
import { AdContainer } from '../../../components/AdContainer';
import formatDates from '../../../utils/formatDates';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const HomePageLatest = styled.div`
  padding: 40px 0;
`

export default function Home({ catData, postData }) {
  return (
    <>
        <Head>
        <title>{catData.name} | Mub Music - Music World News</title>
        <meta name="description" content={catData.description} />
        <meta property="og:title" content={catData.name} key="title" />
        <meta property="og:description" content={catData.description} />
        <meta name="twitter:text:title" content={catData.name} />
        </Head>
        <Header />
        <main>
            <Container maxWidth="lg">
                <Box sx={{ width: '100%'}}>
                    <HomePageLatest>
                        <Grid container rowSpacing={2} mb={3} columnSpacing={{ xs: 2, sm: 2, md: 2 }}>
                            <Grid item xs={12}>
                                <Typography variant="h5" gutterBottom component="div">
                                    <h3 className="title-border">Latest {catData.name} News</h3>
                                </Typography>
                            </Grid>
                            <Grid item xs={12} sm={12} md={9}>
                                <Grid container rowSpacing={2} columnSpacing={{ xs: 2, sm: 2, md: 2 }}>
                                    {postData.map(({fimg_url, categories, title, modified, slug}) => {
                                    return (
                                        <Grid item xs={12} sm={6} md={4}>
                                        <NewsCard 
                                        cardCategorySlug={categories[0].category_slug}
                                        cardHeight={300}
                                        cardMinHeight={165}
                                        cardImage={fimg_url}
                                        cardTitle={title.rendered.replace(
                                            new RegExp("#[^>]*;|amp;", "g"),
                                            ""
                                        )}
                                        cardTitleTypography={"h6"}
                                        cardDate={formatDates(modified)}
                                        cardSlug={slug}
                                        />
                                        </Grid>
                                    )
                                    })}
                                </Grid>
                            </Grid>
                            <Grid item xs={12} sm={12} md={3}>
                                <aside>
                                    <AdContainer
                                        id="ad-1-970x250"
                                        width={`100%`}
                                        height={`635px`}
                                        margins={`0`}
                                        background={`#F5F5F7`}
                                        dangerouslySetInnerHTML={{
                                        __html: ``,
                                        }}
                                    />
                                </aside>
                            </Grid>
                        </Grid>
                    </HomePageLatest>
                </Box>
            </Container>
        </main>
        <Footer/>
    </>
  );
}

export const getStaticProps = async (context) => {
  const reqCat = await fetch(`https://mubdmn-dev.crdps.xyz/wp-json/wp/v2/categories?slug=${context.params.category}`);
  const catJson = await reqCat.json();
  const catData = catJson[0];

  const reqPosts = await fetch(`https://mubdmn-dev.crdps.xyz/wp-json/wp/v2/posts?categories=${catData.id}&_fields=id,modified,link,title,content,excerpt,categories,slug,featured_media,fimg_url&per_page=20`);
  const postData = await reqPosts.json();

  return {
    revalidate: 300,
    props: {
      catData,
      postData
    },
  };
};

export async function getStaticPaths() {
    const reqCat = await fetch("https://mubdmn-dev.crdps.xyz/wp-json/wp/v2/categories");
    const catJson = await reqCat.json();
    const paths = catJson.map((category) => {
      return {
        params: {
          category: category.slug
        },
      };
    });
  
    return {
      paths,
      fallback: "blocking",
    };
}