import styled from 'styled-components';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import TelegramIcon from '@material-ui/icons/Telegram';
import TwitterIcon from '@material-ui/icons/Twitter';
import FacebookIcon from '@material-ui/icons/Facebook';
import MailOutlineRoundedIcon from '@material-ui/icons/MailOutlineRounded';
import LinkRoundedIcon from '@material-ui/icons/LinkRounded';
import Typography from '@mui/material/Typography';

export const FixShareContainer = styled.div`
  width: ${props => `${props.width}`};
  height: ${props => `${props.height}`};
  margin: ${props => `${props.margins}`};
  position: relative;
  padding: 10px 0;
  border-radius: 8px;
  text-align:center;
  @media only screen and (min-width: 885px) {
    display: none;
  }
`;

const ShareContent = styled.div`
    width:100%;
    display: flex;
    align-items: center;
    flex-direction: column;
    span{
        color: ${({theme}) => theme.colors.text_3};
    }
`;

const ShareList = styled.div`
    display: flex;
    flex-direction: row;
`;

const ShareItem = styled.a`
    padding: 2px;
    margin: 0 10px;
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
    @media only screen and (max-width: 460px) {
        padding: 6px;
        margin: 0 8px;
        width: auto;
        height: auto;
    }
    @media only screen and (max-width: 390px) {
        padding: 6px;
        margin: 0 5px;
        width: auto;
        height: auto;
    }
    @media only screen and (max-width: 330px) {
        padding: 6px;
        margin: 0 3px;
        width: auto;
        height: auto;
    }
`;

type FixShareProps = {
    width: string
    height: string
    margins: string
    background: string
    title: string
    id: number
    link: string
}

export default function FixShare(props: FixShareProps) {
  return (
    <FixShareContainer>
      <ShareContent>
          <div>
            <Typography variant="button" display="block" component="div" gutterBottom mt={1.5} mr={1}>
                <span>SHARE:</span>
            </Typography>
          </div>
          <ShareList>
            <ShareItem title="Compartilhar pelo WhatsApp" target="_blank" href={`https://api.whatsapp.com/send?text=${props.title} ${props.link}?utm_source=whatsapp&utm_medium=social&utm_campaign=barra-compartilhamento via Exame`}>
                <WhatsAppIcon/>
            </ShareItem>
            <ShareItem title="Compartilhar pelo LinkedIn" target="_blank" href={`https://www.linkedin.com/sharing/share-offsite/?url=${props.link}`}>
                <LinkedInIcon/>
            </ShareItem>
            <ShareItem title="Compartilhar pelo Telegram" target="_blank" href={`https://t.me/share/url?url=${props.link}&text=${props.title}`}>
                <TelegramIcon/>
            </ShareItem>
            <ShareItem title="Compartilhar pelo Twitter" target="_blank" href={`https://twitter.com/intent/tweet?url=${props.link}&text=${props.title}&via=exame`}>
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
    </FixShareContainer>
  );
}