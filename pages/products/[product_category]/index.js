import styled from 'styled-components';
import Head from "next/head";
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Header from '../../../components/Header';
import Footer from '../../../components/Footer';
import ProductCard from '../../../components/ProductCard';
import { AdContainer, StickyAdContainer } from '../../../components/AdContainer';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Typography from '@mui/material/Typography';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import formatHtmlText from '../../../utils/formatHtmlText';

const ProductPageMain = styled.main`
  margin: 0 0 40px 0;
  .MuiAccordion-rounded {
    border-radius: 6px;
    margin: 10px 0;
    background: ${({ theme }) => theme.colors.text_1};
    color: ${({ theme }) => theme.colors.text_4};
    h5{
      font-weight: 500;
      font-size: 1rem;
    }
    svg{
      fill: ${({ theme }) => theme.colors.text_4};
    }
  }
`;

const TitleArea = styled.div`
  margin-top: 20px;
  h1{
    color: ${({ theme }) => theme.colors.text_4};
  }
  p, span{
    color: ${({ theme }) => theme.colors.text_3};
  }
`

const BreadcrumbArea = styled.div`
  padding: 5px 0;
  .MuiBreadcrumbs-separator{
    color: ${({ theme }) => theme.colors.text_3};
  }
  a{
    color: ${({ theme }) => theme.colors.text_3};
    &:hover{
      color: ${({theme}) => theme.colors.primary_hover};
    }
  }
`

export default function ProductCategory({ prodCatData, prodData, prodSubCatData, prodBrandData, prodPriceAverageData }) {
  return (
    <>
      <Head>
      <title>{ prodCatData.title.rendered } | Mub Music - Music World News</title>
      <meta name="description" content={`Buy ${prodCatData.title.rendered} | Mub Music - Music World News`} />
        <meta property="og:title" content="Mub Music - Music World News" key="title" />
        <meta property="og:description" content="Mub Music - Music World News" />
        <meta name="twitter:text:title" content="Index Page" />
        <link rel="preload" href="" as="image" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{
            __html: `
              {
                "@context": "https://schema.org/",
                "@type": "BreadcrumbList",
                "itemListElement": [{
                  "@type": "ListItem",
                  "position": 1,
                  "name": "Home",
                  "item": "${process.env.NEXT_PUBLIC_ENV_DOMAIN}"
                },{
                "@type": "ListItem",
                "position": 2,
                "name": "",
                "item": ""
                },{
                "@type": "ListItem",
                "position": 3,
                "name": "",
                "item": ""
                }]
              }
            `,
          }}
        />
        <script type="application/ld+json" dangerouslySetInnerHTML={{
            __html: `
              {
                "@context": "https://schema.org",
                "@type": "ProductCollection",
                "headline": "",
                "image": "",
                "publisher": [{
                  "@type": "Organization",
                  "name": "mubmusic.com"
                }],
                "isPartOf": [{
                  "@type": ["CreativeWork", "Product"],
                  "name" : "mubmusic.com",
                  "productID": "mubmusic.com:basic"
                }]
              }
            `,
          }}
        />
      </Head>
      <Header />
      <ProductPageMain>
        <Container maxWidth="lg">
          <Box sx={{ width: '100%'}}>
              <Grid container>
                <Grid xs={12} sm={12} mt={3} md={3} pr={4}>
                  <Accordion>
                    <AccordionSummary
                      expandIcon={<ExpandMoreIcon />}
                      aria-controls="panel1a-content"
                      id="panel1a-header"
                    >
                      <Typography variant="h5">Subcategories</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <FormControl component="fieldset">
                        <RadioGroup name="radio-buttons-group">
                          {prodSubCatData.map(({id, title, slug, count}) => {
                            return (
                              <FormControlLabel value={slug} control={<Radio />} label={`${title} (${count})`} key={id} />
                            )
                          })}
                        </RadioGroup>
                      </FormControl>
                    </AccordionDetails>
                  </Accordion>
                  <Accordion>
                    <AccordionSummary
                      expandIcon={<ExpandMoreIcon />}
                      aria-controls="panel1a-content"
                      id="panel1a-header"
                    >
                      <Typography variant="h5">Brands</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <RadioGroup name="radio-buttons-group">
                        {prodBrandData.map(({id, title, slug, count}) => {
                          return (
                            <FormControlLabel value={slug} control={<Radio />} label={`${title} (${count})`} key={id} />
                          )
                        })}
                      </RadioGroup>
                    </AccordionDetails>
                  </Accordion>
                  <Accordion>
                    <AccordionSummary
                      expandIcon={<ExpandMoreIcon />}
                      aria-controls="panel1a-content"
                      id="panel1a-header"
                    >
                      <Typography variant="h5">Price</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <RadioGroup name="radio-buttons-group">
                        {prodPriceAverageData.map(({id, title, slug, count}) => {
                          return (
                            <FormControlLabel value={slug} control={<Radio />} label={`${title} (${count})`} key={id} />
                          )
                        })}
                      </RadioGroup>
                    </AccordionDetails>
                  </Accordion>
                  <Accordion>
                    <AccordionSummary
                      expandIcon={<ExpandMoreIcon />}
                      aria-controls="panel1a-content"
                      id="panel1a-header"
                    >
                    <Typography variant="h5">Rating</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <Typography>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                        malesuada lacus ex, sit amet blandit leo lobortis eget.
                      </Typography>
                    </AccordionDetails>
                  </Accordion>
                  <StickyAdContainer
                    id="ad-1-970x250"
                    width={`100%`}
                    height={`300px`}
                    margins={`30px 0 20px 0`}
                    background={`#F5F5F7`}
                    dangerouslySetInnerHTML={{
                      __html: ``,
                    }}
                  />
                </Grid>
                <Grid xs={12} sm={12} md={9} pt={2}>
                    <TitleArea>
                      <Grid xs={12}>
                        <Typography gutterBottom variant={"h5"} mb={1} component="div">
                          <h2 className="title-border">{prodCatData.title.rendered}</h2>
                        </Typography>
                        <BreadcrumbArea>
                          <Breadcrumbs separator="›" aria-label="breadcrumb">
                            <a underline="hover" key="1" color="inherit" href="/">
                              Home
                            </a>
                            <a
                              underline="hover"
                              key="2"
                              color="inherit"
                              href="/products/"
                            >
                              Products
                            </a>
                            <Typography key="3" color="text.primary">
                            { prodCatData.title.rendered }
                            </Typography>
                          </Breadcrumbs>
                        </BreadcrumbArea>
                      </Grid>
                    </TitleArea>
                    <Grid container rowSpacing={2} columnSpacing={{ xs: 2, sm: 2, md: 2 }} mt={1}>
                        {prodData.map(({id, ACF, title, slug}) => {
                          return (
                            <Grid item xs={12} sm={6} md={4} key={id}>
                              <ProductCard 
                              cardCategory={ACF.subcategory_id.post_title}
                              cardCategorySlug={ACF.subcategory_id.post_name}
                              cardImage={ACF.product_thumb_image}
                              cardTitle={title.rendered}
                              cardTitleTypography={"h6"}
                              cardSlug={slug}
                              cardPrice={ACF.product_price_average_id.post_title}
                              />
                            </Grid>
                          )
                        })}
                    </Grid>
                </Grid>
              </Grid>
          </Box>
        </Container>
      </ProductPageMain>
      <Footer/>
    </>
  );
}

export const getStaticProps = async (context) => {
  const resProdCat = await fetch(`https://mubdmn-dev.crdps.xyz/wp-json/wp/v2/product_category?slug=${context.params.product_category}`);
  const prodCatJson = await resProdCat.json();
  
  const resProd = await fetch(`https://mubdmn-dev.crdps.xyz/wp-json/wp/v2/products?category_id=${prodCatJson[0].id}`);
  const resProdSubCat = await fetch(`https://mubdmn-dev.crdps.xyz/sbc-lc/?ct=${prodCatJson[0].id}`);
  const resProdBrand = await fetch(`https://mubdmn-dev.crdps.xyz/brd-lc/?ct=${prodCatJson[0].id}`);
  const resProdPriceAverage = await fetch(`https://mubdmn-dev.crdps.xyz/prvg-lc/?ct=${prodCatJson[0].id}`);

  const prodJson = await resProd.json();
  const prodSubCatJson = await resProdSubCat.json();
  const prodBrandJson = await resProdBrand.json();
  const prodPriceAverageJson = await resProdPriceAverage.json();

  return {
    revalidate: 500,
    props: {
      prodCatData: prodCatJson[0],
      prodData: prodJson,
      prodSubCatData: prodSubCatJson,
      prodBrandData: prodBrandJson,
      prodPriceAverageData: prodPriceAverageJson
    },
  };
};

export async function getStaticPaths() {
    const reqCat = await fetch("https://mubdmn-dev.crdps.xyz/wp-json/wp/v2/product_category");
    const catJson = await reqCat.json();
    const paths = catJson.map((product_category) => {
      return {
        params: {
            product_category: product_category.slug
        },
      };
    });
  
    return {
      paths,
      fallback: "blocking",
    };
}