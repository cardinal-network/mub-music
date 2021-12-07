import * as React from 'react';
import styled from 'styled-components';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import Rating from '@mui/material/Rating';
import Avatar from '@mui/material/Avatar';

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
    h3{
      color: ${({ theme }) => theme.colors.text_4};
      font-weight: 400;
      margin: 5px 0 10px 0;
    }
    h4{
      color: ${({ theme }) => theme.colors.primary};
      font-size: 1rem;
      font-weight: 500;
    }
    h5{
      color: ${({ theme }) => theme.colors.subtitle};
      font-size: 1rem;
      font-weight: 500;
    }
  }
  .MuiPaper-root{
    box-shadow: none;
  }
  img{
    opacity: 0.5;
  }
`;

const CardRatingArea = styled.div`
  position: absolute;
  top: 12px;
  left: 14px;
  svg{
    fill: ${({ theme }) => theme.colors.primary};
  }
`;

const CardAvatarArea = styled.div`
  position: absolute;
  top: 45%;
  right: 12px;
`;

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
`;

export default function ProductCard({ cardImage, cardCategorySlug, cardCategory, cardTitle, cardTitleTypography, cardPrice, cardSlug }) {
  return (
    <>
      <a href={`${process.env.NEXT_PUBLIC_ENV_DOMAIN}/products/${cardCategorySlug}/${cardSlug}`}>
        <CardAreaContainer>
            <Card>
                <CardActionArea>
                    <CardMedia
                    component="img"
                    height={400 / 2.5}
                    image={cardImage}
                    alt={cardTitle}
                    />
                    <CardRatingArea>
                      <Rating name="read-only" value={3} readOnly />
                    </CardRatingArea>
                    <CardAvatarArea>
                      <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" sx={{ width: 45, height: 45 }} />
                    </CardAvatarArea>
                    <CardContent sx={{ minHeight: 120 }}>
                      <Typography variant="h5">{cardCategory}</Typography>
                      <Typography gutterBottom variant={cardTitleTypography} component="div">
                          <h3 dangerouslySetInnerHTML={{
                          __html: cardTitle,
                          }} />
                      </Typography>
                      <Typography variant="h4">{cardPrice}</Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
        </CardAreaContainer>
      </a>
    </>
  );
}