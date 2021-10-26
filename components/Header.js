import * as React from 'react';
import styled from 'styled-components';
import Head from "next/head";
import Image from 'next/image';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Nav from './Nav';

const HeaderContainer = styled.header`
  background: ${({ theme }) => theme.colors.secondary};
`

export default function Header() {
  return (
    <>
    <Head>
        <meta name="viewport" content="width-device-width, initial-scale=1.0" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://mubmusic.com/" />
        <meta property="og:site_name" content="wpnews" />
        <meta property="og:image" content="images/favicon-1.ico?w=64" />
        <meta property="og:locale" content="en" />
        <link rel="shortcut icon" href="/images/favicon.ico?w=64" type="image/x-icon" />
        <link rel="preconnect" href="https://mubdmn-dev.crdps.xyz/"></link>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ 
            __html: `
			{
                "@context": "https://schema.org",
                "@type": "NewsMediaOrganization",
                "name": "WPNews",
                "alternateName": "Wordpress News",
                "url": "https://mubdmn-dev.crdps.xyz/",
                "logo": "/logo.png",
                "sameAs": [
                    "https://www.facebook.com/wpnews",
                    "https://twitter.com/wpnews",
                    "https://www.instagram.com/wpnews/",
                    "https://www.youtube.com/user/wpnews",
                    "http://www.linkedin.com/company/wpnews"
                ]
                }          
            `
        }} />
    </Head>
    <HeaderContainer>
        <Container maxWidth="lg">
            <Box sx={{ width: '100%' }}>
                <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                    <Grid item xs={3}>
                        <a href="/">
                            <Image
                            src="/images/logo.png"
                            alt="WpNews logo"
                            width={167}
                            height={70}
                            />
                        </a>
                    </Grid>
                    <Grid item xs={9}>
                        <Nav />
                    </Grid>
                </Grid>
            </Box>
        </Container>
    </HeaderContainer>
    </>
  );
}