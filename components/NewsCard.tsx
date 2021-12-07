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

type NewsCardProps = {
  width: string
  cardHeight: number
  cardMinHeight: number
  cardImage: string
  cardCategorySlug: string
  cardCategory: string
  cardTitle: string
  cardTitleTypography: string
  cardDate: string
  cardExcerpt: string
  cardSlug: string
}

export default function NewsCard(props: NewsCardProps) {
  return (
    <>
      <a href={`${process.env.NEXT_PUBLIC_ENV_DOMAIN}/news/${props.cardCategorySlug}/${props.cardSlug}`}>
        <CardAreaContainer>
            <Card>
                <CardActionArea>
                    <CardMedia
                    component="img"
                    height={props.cardHeight / 2.5}
                    image={props.cardImage}
                    alt={props.cardTitle}
                    />
                    <CardContent sx={{ minHeight: props.cardMinHeight }}>
                      <Typography variant="body1">
                          <CardCategoryArea>{props.cardCategory}</CardCategoryArea>
                      </Typography>
                      <Typography variant="body1" mb={1}>
                          <CardDateArea>Published at {props.cardDate}</CardDateArea>
                      </Typography>
                      <Typography gutterBottom variant={props.cardTitleTypography} component="div">
                          <h4 dangerouslySetInnerHTML={{
                          __html: props.cardTitle,
                          }} />
                      </Typography>
                      <Typography variant="body1" color="text.secondary">
                          <p dangerouslySetInnerHTML={{
                          __html: props.cardExcerpt,
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