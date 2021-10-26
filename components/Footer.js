import * as React from 'react';
import styled from 'styled-components';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';

const FooterContainer = styled.footer`
  background: #222222;
  color: #fff;
  p{
      color: #aaa;
  }
  a{
      color: #fff;
  }
`

const FooterCopyContainer = styled.div`
  width: 100%;
  background: #000;
  color: #fff;
  padding: 35px 0;
  text-align: center;
  p{
      color: #aaa;
  }
  a{
      color: #fff;
  }
`

export default function Footer() {
  return (
    <FooterContainer>
        <FooterCopyContainer>
            <Container maxWidth="lg">
                <Box sx={{ width: '100%' }}>
                    <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                        <Grid item xs={12}>
                            <p>© Copyright © Mub Music - All Rights Reserved.</p>
                        </Grid>
                    </Grid>
                </Box>
            </Container>
        </FooterCopyContainer>
    </FooterContainer>
  );
}