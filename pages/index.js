import styled from 'styled-components';
import Head from "next/head";
import Header from '../components/Header';
import Footer from '../components/Footer';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import HighlightNewsCard from '../components/HighlightNewsCard';
import NewsCard from '../components/NewsCard';
import { AdContainer } from '../components/AdContainer';
import formatDates from '../utils/formatDates';

const HomePageHighlight = styled.div`
  padding: 0;
`

const HomePageTrending = styled.div`
  padding: 10px 0;
`

const HomePageLatest = styled.div`
  padding: 0 0 40px 0;
`

export default function Home({ highlightsPosts, trendingPosts, firstLatestHighlightPosts, firstLatestPosts, secondLatestPosts, thirdLatestPosts }) {
  return (
    <>
      <Head>
      <title>Mub Music - Music World News</title>
      <meta name="description" content="Mub Music - Music World News" />
        <meta property="og:title" content="Mub Music - Music World News" key="title" />
        <meta property="og:description" content="Mub Music - Music World News" />
        <meta name="twitter:text:title" content="Index Page" />
        <link rel="preload" href={highlightsPosts[0].fimg_url} as="image" />
      </Head>
      <Header />
      <main>
        <Container maxWidth="lg">
            <Box sx={{ width: '100%', marginBottom: 3 }}>
              <HomePageHighlight>
                <Grid container rowSpacing={1} spacing={2}>
                    <Grid item xs={12} sm={12} md={8} >
                      <HighlightNewsCard 
                      cardHeight={600}
                      cardImage={highlightsPosts[0].fimg_url}
                      cardCategory={highlightsPosts[0].categories[0].category_name}
                      cardCategorySlug={highlightsPosts[0].categories[0].category_slug}
                      cardTitle={highlightsPosts[0].title.rendered}
                      cardTitleTypography={"h3"}
                      cardDate={formatDates(highlightsPosts[0].modified)}
                      cardExcerpt={highlightsPosts[0].excerpt.rendered}
                      cardSlug={highlightsPosts[0].slug}
                      />
                    </Grid>
                    <Grid item xs={12} sm={12} md={4}>
                      <HighlightNewsCard 
                      cardHeight={319.5} 
                      cardImage={highlightsPosts[1].fimg_url}
                      cardCategory={highlightsPosts[1].categories[0].category_name}
                      cardCategorySlug={highlightsPosts[1].categories[0].category_slug}
                      cardTitle={highlightsPosts[1].title.rendered}
                      cardTitleTypography={"h5"}
                      cardDate={formatDates(highlightsPosts[1].modified)}
                      cardSlug={highlightsPosts[1].slug}
                      />
                      <HighlightNewsCard 
                      cardHeight={260}
                      cardImage={highlightsPosts[2].fimg_url}
                      cardCategory={highlightsPosts[2].categories[0].category_name}
                      cardCategorySlug={highlightsPosts[2].categories[0].category_slug}
                      cardTitle={highlightsPosts[2].title.rendered}
                      cardTitleTypography={"h5"}
                      cardDate={formatDates(highlightsPosts[2].modified)}
                      cardSlug={highlightsPosts[2].slug}
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <AdContainer
                        id="ad-0-970x250"
                        width={`100%`}
                        height={`300px`}
                        margins={`35px 0 0 0`}
                        background={`#F5F5F7`}
                        dangerouslySetInnerHTML={{
                          __html: `
                          <ins class="adsbygoogle"
                          style="display:block"
                          data-ad-client="ca-pub-9820473628183581"
                          data-ad-slot="4578178371"
                          data-ad-format="auto"
                          data-full-width-responsive="true"></ins>
                          <script>(adsbygoogle = window.adsbygoogle || []).push({});</script>
                          `
                        }}
                      />
                    </Grid>
                </Grid>
              </HomePageHighlight>
            </Box>
            <Box sx={{ width: '100%'}}>
              <HomePageTrending>
                <Grid container columnSpacing={{ xs: 2, sm: 2, md: 2 }}>
                  <Grid item xs={12}>
                    <Typography variant="h5" gutterBottom component="div">
                      <h4 className="title-border">Trending</h4>
                    </Typography>
                  </Grid>
                  {trendingPosts.map(({fimg_url, categories, title, modified, slug}) => {
                    return (
                      <Grid item xs={12} sm={6} md={3} key={slug}>
                        <HighlightNewsCard 
                        cardHeight={300}
                        cardImage={fimg_url}
                        cardCategory={categories[0].category_name}
                        cardCategorySlug={categories[0].category_slug}
                        cardTitle={title.rendered}
                        cardTitleTypography={"h6"}
                        cardDate={formatDates(modified)}
                        cardSlug={slug}
                        />
                      </Grid>
                    )
                  })}
                </Grid>
                <Grid item xs={12}>
                  <AdContainer
                    id="ad-1-970x250"
                    width={`100%`}
                    height={`300px`}
                    margins={`35px 0 20px 0`}
                    background={`#F5F5F7`}
                    dangerouslySetInnerHTML={{
                      __html: `
                      <ins class="adsbygoogle"
                      style="display:block"
                      data-ad-client="ca-pub-9820473628183581"
                      data-ad-slot="8041946519"
                      data-ad-format="auto"
                      data-full-width-responsive="true"></ins>
                      <script>(adsbygoogle = window.adsbygoogle || []).push({});</script>
                      `,
                    }}
                  />
                </Grid>
              </HomePageTrending>
            </Box>
            <Box sx={{ width: '100%'}}>
              <HomePageLatest>
                <Grid container rowSpacing={2} mb={3} columnSpacing={{ xs: 2, sm: 2, md: 2 }}>
                  <Grid item xs={12}>
                    <Grid container rowSpacing={2} columnSpacing={{ xs: 2, sm: 2, md: 2 }}>
                      <Grid item xs={12}>
                        <Typography variant="h5" gutterBottom component="div">
                          <h3 className="title-border">Latest News</h3>
                        </Typography>
                      </Grid>
                      <Grid item xs={12} sm={12} md={5}>
                        <Grid container rowSpacing={2} columnSpacing={{ xs: 2, sm: 2, md: 2 }}>
                          <Grid item xs={12}>
                            <NewsCard 
                            cardHeight={1080}
                            cardMinHeight={145}
                            cardImage={firstLatestHighlightPosts[0].fimg_url}
                            cardCategory={firstLatestHighlightPosts[0].categories[0].category_name}
                            cardCategorySlug={firstLatestHighlightPosts[0].categories[0].category_slug}
                            cardTitle={firstLatestHighlightPosts[0].title.rendered}
                            cardTitleTypography={"h5"}
                            cardDate={formatDates(firstLatestHighlightPosts[0].modified)}
                            cardSlug={firstLatestHighlightPosts[0].slug}
                            />
                          </Grid>
                        </Grid>
                      </Grid>
                      <Grid item xs={12} sm={12} md={7}>
                        <Grid container rowSpacing={2} columnSpacing={{ xs: 2, sm: 2, md: 2 }}>
                          {firstLatestPosts.map(({fimg_url, categories, title, modified, slug}) => {
                            return (
                              <Grid item xs={12} sm={6} md={6} key={slug}>
                                <NewsCard 
                                cardCategory={categories[0].category_name}
                                cardCategorySlug={categories[0].category_slug}
                                cardHeight={300}
                                cardMinHeight={145}
                                cardImage={fimg_url}
                                cardTitle={title.rendered}
                                cardTitleTypography={"h6"}
                                cardDate={formatDates(modified)}
                                cardSlug={slug}
                                />
                              </Grid>
                            )
                          })}
                        </Grid>
                      </Grid>
                    </Grid>
                  </Grid>
                  <Grid item xs={12}>
                    <AdContainer
                      id="ad-1-970x250"
                      width={`100%`}
                      height={`300px`}
                      margins={`20px 0 20px 0`}
                      background={`#F5F5F7`}
                      dangerouslySetInnerHTML={{
                        __html: `
                        <ins class="adsbygoogle"
                        style="display:block"
                        data-ad-client="ca-pub-9820473628183581"
                        data-ad-slot="2994661634"
                        data-ad-format="auto"
                        data-full-width-responsive="true"></ins>
                        <script>(adsbygoogle = window.adsbygoogle || []).push({});</script>
                        `,
                      }}
                    />
                  </Grid>
                </Grid>
                <Grid container rowSpacing={2} mb={3} columnSpacing={{ xs: 2, sm: 2, md: 2 }}>
                  <Grid item xs={12} sm={12} md={9}>
                    <Grid container rowSpacing={2} columnSpacing={{ xs: 2, sm: 2, md: 2 }}>
                      {secondLatestPosts.map(({fimg_url, categories, title, modified, slug}) => {
                        return (
                          <Grid item xs={12} sm={6} md={4} key={slug}>
                            <NewsCard 
                            cardCategory={categories[0].category_name}
                            cardCategorySlug={categories[0].category_slug}
                            cardHeight={300}
                            cardMinHeight={165}
                            cardImage={fimg_url}
                            cardTitle={title.rendered}
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
                            __html: `
                            <ins class="adsbygoogle"
                            style="display:block"
                            data-ad-client="ca-pub-9820473628183581"
                            data-ad-slot="1668109857"
                            data-ad-format="auto"
                            data-full-width-responsive="true"></ins>
                            <script>(adsbygoogle = window.adsbygoogle || []).push({});</script>
                            `,
                          }}
                        />
                      </aside>
                    </Grid>
                </Grid>
                <Grid container rowSpacing={2} columnSpacing={{ xs: 2, sm: 2, md: 2 }}>
                  <Grid item xs={12}>
                    <AdContainer
                      id="ad-1-970x250"
                      width={`100%`}
                      height={`300px`}
                      margins={`10px 0 20px 0`}
                      background={`#F5F5F7`}
                      dangerouslySetInnerHTML={{
                        __html: `
                        <ins class="adsbygoogle"
                        style="display:block"
                        data-ad-client="ca-pub-9820473628183581"
                        data-ad-slot="1952015038"
                        data-ad-format="auto"
                        data-full-width-responsive="true"></ins>
                        <script>(adsbygoogle = window.adsbygoogle || []).push({});</script>
                        `,
                      }}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <Grid container rowSpacing={2} columnSpacing={{ xs: 2, sm: 2, md: 2 }}>
                      {thirdLatestPosts.map(({fimg_url, categories, title, modified, slug}) => {
                        return (
                          <Grid item xs={12} sm={6} md={3} key={slug}>
                            <NewsCard 
                            cardCategory={categories[0].category_name}
                            cardCategorySlug={categories[0].category_slug}
                            cardHeight={300}
                            cardMinHeight={165}
                            cardImage={fimg_url}
                            cardTitle={title.rendered}
                            cardTitleTypography={"h6"}
                            cardDate={formatDates(modified)}
                            cardSlug={slug}
                            />
                          </Grid>
                        )
                      })}
                    </Grid>
                  </Grid>
                  <Grid item xs={12}>
                    <AdContainer
                      id="ad-1-970x250"
                      width={`100%`}
                      height={`300px`}
                      margins={`25px 0 10px 0`}
                      background={`#F5F5F7`}
                      dangerouslySetInnerHTML={{
                        __html: `
                        <ins class="adsbygoogle"
                        style="display:block"
                        data-ad-client="ca-pub-9820473628183581"
                        data-ad-slot="2937793647"
                        data-ad-format="auto"
                        data-full-width-responsive="true"></ins>
                        <script>(adsbygoogle = window.adsbygoogle || []).push({});</script>
                        `,
                      }}
                    />
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

export const getStaticProps = async () => {
  const reqPosts = await fetch("https://mubdmn-dev.crdps.xyz/wp-json/wp/v2/posts?_fields=id,modified,link,title,content,excerpt,categories,slug,featured_media,fimg_url&per_page=26");
  const PostData = await reqPosts.json();

  const highlightsPosts = PostData.slice(0, 3);
  const trendingPosts = PostData.slice(3, 7);
  const firstLatestHighlightPosts = PostData.slice(7, 9);
  const firstLatestPosts = PostData.slice(8, 12);
  const secondLatestPosts = PostData.slice(12, 18);
  const thirdLatestPosts = PostData.slice(18, 26);

  return {
    revalidate: 180,
    props: {
      highlightsPosts,
      trendingPosts,
      firstLatestHighlightPosts,
      firstLatestPosts,
      secondLatestPosts,
      thirdLatestPosts
    },
  };
};