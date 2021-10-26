import * as React from 'react';
import styled from 'styled-components';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import AccessTimeIcon from '@material-ui/icons/AccessTime';

const CardAreaContainer = styled.div`
  width: 100%;
  margin: 20px 0 0 0;
  button{
    height: 100%;
  }
  .MuiPaper-root{
    background-color: rgba(0,0,0,0);
  }
  .MuiCardContent-root{
    background-color: rgba(0,0,0,0);
    background-image: linear-gradient(rgba(0,0,0,0),rgb(0,0,0));
    padding: 30px 5% 25px 5%;
    z-index: 9;
    position: absolute;
    bottom: 0;
    color: #fff;
    text-shadow: 0px 0px 10px rgb(0 0 0 / 20%);
    width: 90.1%;
    font-weight: 500;
    p{
      color: #fff;
    }
    .MuiTypography-h3, .MuiTypography-h4, .MuiTypography-h5{
      font-weight: 500;
    }
  }
  @media (max-width: 884px){
    h2{
      font-size: 28px;
    }
    .cardExcerpt{
      display: none;
    }
  }
`;

const CardCategoryArea = styled.span`
  background: ${({ theme }) => theme.colors.primary};
  padding: 6px 10px;
  border-radius: 4px;
  font-size: 14.5px;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.text_1};
`;

const CardDateArea = styled.span`
  font-size: 14px;
  font-weight: 500;
  color: #fff;
  svg{
    margin-bottom: -6px;
    margin-right: 5px;
  }
`;

export default function HighlightNewsCard({ cardHeight, cardImage, cardCategorySlug, cardCategory, cardTitle, cardTitleTypography, cardDate, cardExcerpt, cardSlug }) {
  return (
    <>
      <a href={`news/${cardCategorySlug}/${cardSlug}`}>
        <CardAreaContainer>
            <Card sx={{ maxWidth: 784, height: cardHeight }}>
                <CardActionArea>
                    <CardMedia
                    component="img"
                    height="100%"
                    image={cardImage}
                    alt={cardTitle}
                    />
                    <CardContent>
                      <Typography gutterBottom component="div" mb={1}>
                          <CardCategoryArea>{cardCategory}</CardCategoryArea>
                      </Typography>
                      <Typography gutterBottom variant={cardTitleTypography} mb={1} component="div">
                          <h2 dangerouslySetInnerHTML={{
                          __html: cardTitle,
                          }} />
                      </Typography>
                      <Typography gutterBottom component="div">
                          <CardDateArea><AccessTimeIcon/> Published at {cardDate}</CardDateArea>
                      </Typography>
                      <Typography className={"cardExcerpt"} variant="body1" mt={1} color="text.secondary">
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