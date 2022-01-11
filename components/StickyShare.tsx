import styled from 'styled-components';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import TelegramIcon from '@material-ui/icons/Telegram';
import TwitterIcon from '@material-ui/icons/Twitter';
import FacebookIcon from '@material-ui/icons/Facebook';
import MailOutlineRoundedIcon from '@material-ui/icons/MailOutlineRounded';
import LinkRoundedIcon from '@material-ui/icons/LinkRounded';
import Typography from '@mui/material/Typography';

export const StickyShareContainer = styled.div`
  width: ${props => `${props.width}`};
  height: ${props => `${props.height}`};
  margin: ${props => `${props.margins}`};
  position: sticky;
  top: 1em;
  padding: 10px 0;
  border-radius: 8px;
  text-align:center;
  @media only screen and (max-width: 885px) {
    display: none;
  }
`;

const ShareContent = styled.div`
    position: absolute;
    top: 0;
    right: 30px;
    span{
        color: ${({theme}) => theme.colors.text_3};
    }
`;

const ShareList = styled.div`
    display: flex;
    flex-direction: column;
`;

const ShareItem = styled.a`
    padding: 4px;
    border-radius: 50%;
    background-color: ${({theme}) => theme.colors.secondary};
    color: ${({theme}) => theme.colors.text_3};
    box-shadow: 1px 2px 7px 0px rgb(0 0 0 / 15%);
    width: 40px;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 1em;
    #share-icon {
        transform: scale(-1,1);
    }
    &:hover{
        color: ${({theme}) => theme.colors.primary_hover};
    }
`;

type StickyShareProps = {
    width: string
    height: string
    margins: string
    background: string
    title: string
    id: number
    link: string
}

export default function StickyShare(props: StickyShareProps) {
  return (
    <StickyShareContainer>
      <ShareContent>
          <Typography variant="button" display="block" component="div" gutterBottom>
            <span>SHARE</span>
          </Typography>
          <ShareList>
              <ShareItem title="Compartilhar pelo WhatsApp" target="_blank" href={`https://api.whatsapp.com/send?text=${props.title} ${props.link}?utm_source=whatsapp&utm_medium=social`}>
                  <WhatsAppIcon/>
              </ShareItem>
              <ShareItem title="Compartilhar pelo LinkedIn" target="_blank" href={`https://www.linkedin.com/sharing/share-offsite/?url=${props.link}`}>
                  <LinkedInIcon/>
              </ShareItem>
              <ShareItem title="Compartilhar pelo Telegram" target="_blank" href={`https://t.me/share/url?url=${props.link}&text=${props.title}`}>
                  <TelegramIcon/>
              </ShareItem>
              <ShareItem title="Compartilhar pelo Twitter" target="_blank" href={`https://twitter.com/intent/tweet?url=${props.link}&text=${props.title}`}>
                  <TwitterIcon/>
              </ShareItem>
              <ShareItem title="Compartilhar pelo Facebook" target="_blank" href={`https://facebook.com/sharer/sharer.php?u=${props.link}`}>
                  <FacebookIcon/>
              </ShareItem>
              <ShareItem title="Compartilhar por E-mail" target="_blank" href={`mailto:?subject=${props.title}&body=${props.title} ${props.link}`}>
                  <MailOutlineRoundedIcon/>
              </ShareItem>
              <ShareItem title="Copiar link" onClick={(evt) => { evt.preventDefault(); navigator.clipboard.writeText(window.location.href) }}>
                  <LinkRoundedIcon/>
              </ShareItem>
          </ShareList>
      </ShareContent>
    </StickyShareContainer>
  );
}