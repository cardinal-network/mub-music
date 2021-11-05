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
  padding: 20px 0;
`

export default function Header() {
  return (
    <>
    <Head>
        <meta name="viewport" content="width-device-width, initial-scale=1.0" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://mubmusic.com/" />
        <meta property="og:site_name" content="mubmusic" />
        <meta property="og:image" content="images/favicon-1.ico?w=64" />
        <meta property="og:locale" content="en" />
        <link rel="shortcut icon" href="/images/favicon.ico?w=64" type="image/x-icon" />
        <link rel="preconnect" href="https://mubdmn-dev.crdps.xyz/"></link>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-MRZND74GE5"></script>
        <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9820473628183581" crossorigin="anonymous"></script>
        <script type="text/javascript" dangerouslySetInnerHTML={{ 
            __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', 'G-MRZND74GE5');
            `
        }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ 
            __html: `
			{
                "@context": "https://schema.org",
                "@type": "NewsMediaOrganization",
                "name": "Mub Music",
                "alternateName": "MubMusic",
                "url": "https://mubmusic.com/",
                "logo": "https://mubmusic.com/_next/image?url=%2Fmub-logo-icon.png&w=96&q=75",
                "sameAs": [
                    "https://www.instagram.com/wpnews/",
                ]
                }          
            `
        }} />
    </Head>
    <HeaderContainer>
        <Container maxWidth="lg">
            <Box sx={{ width: '100%' }}>
                <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                    <Grid item xs={6} sm={6} md={3}>
                        <a href="/">
                            <Image
                            src="/images/logo.png"
                            alt="Mub Music logo"
                            width={172}
                            height={25}
                            />
                        </a>
                    </Grid>
                    <Grid item xs={6} sm={6} md={9}>
                        <Nav />
                    </Grid>
                </Grid>
            </Box>
        </Container>
    </HeaderContainer>
    </>
  );
}