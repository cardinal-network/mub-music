import * as React from 'react';
import styled from 'styled-components';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

const CardAreaContainer = styled.div`
  width: 100%;
  .MuiPaper-root{
    background: none;
  }
  .MuiCardContent-root{
    background: ${({ theme }) => theme.colors.secondary};
    border: 1px solid ${({ theme }) => theme.colors.secondary};
    .MuiTypography-h6{
      font-weight: 700;
      line-height: 1.3;
    }
    h4{
      color: ${({ theme }) => theme.colors.text_4};
      font-weight: 500;
    }
  }
  .MuiPaper-root{
    box-shadow: none;
  }
`;

const CardCategoryArea = styled.span`
  font-size: 16px;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.text_4};
`;

const CardDateArea = styled.span`
  font-size: 14px;
  font-weight: 400;
  color: ${({ theme }) => theme.colors.text_3};
`;

export default function HighlightNewsCard({ cardHeight, cardMinHeight, cardImage, cardCategorySlug, cardCategory, cardTitle, cardDate, cardTitleTypography, cardExcerpt, cardSlug }) {
  return (
    <>
      <a href={`news/${cardCategorySlug}/${cardSlug}`}>
        <CardAreaContainer>
            <Card>
                <CardActionArea>
                    <CardMedia
                    component="img"
                    height={cardHeight / 2.5}
                    image={cardImage}
                    alt={cardTitle}
                    />
                    <CardContent sx={{ minHeight: cardMinHeight }}>
                      <Typography variant="body1">
                          <CardCategoryArea>{cardCategory}</CardCategoryArea>
                      </Typography>
                      <Typography variant="body1" mb={1}>
                          <CardDateArea>Published at {cardDate}</CardDateArea>
                      </Typography>
                      <Typography gutterBottom variant={cardTitleTypography} component="div">
                          <h4 dangerouslySetInnerHTML={{
                          __html: cardTitle,
                          }} />
                      </Typography>
                      <Typography variant="body1" color="text.secondary">
                          <p dangerouslySetInnerHTML={{
                          __html: cardExcerpt,
                          }} />
                      </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
        </CardAreaContainer>
      </a>
    </>
  );
}