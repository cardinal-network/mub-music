import styled from 'styled-components';

export const AdContainer = styled.div`
  background: ${({ theme }) => theme.colors.secondary};
  width: ${props => `${props.width}`};
  height: ${props => `${props.height}`};
  margin: ${props => `${props.margins}`};
  padding: 10px 0;
  border-radius: 8px;
  text-align:center;
  &::before {
    content: "ADVERTISEMENT";
    font-size:11px;
    color: ${({ theme }) => theme.colors.text_2};
  }
`;

export const StickyAdContainer = styled.div`
  background: ${({ theme }) => theme.colors.secondary};
  width: ${props => `${props.width}`};
  height: ${props => `${props.height}`};
  margin: ${props => `${props.margins}`};
  position: sticky;
  top: 1em;
  padding: 10px 0;
  border-radius: 8px;
  text-align:center;
  &::before {
    content: "ADVERTISEMENT";
    font-size:11px;
    color: ${({ theme }) => theme.colors.text_2};
  }
`;

export const MainAdContainer = styled.div`
  background: ${({ theme }) => theme.colors.secondary};
  max-width: 100%;
  height: 250px;
  padding: 32px;
  overflow-x: hidden;
`;

export const PixelAdDiv = styled.div`
  width: 1px;
  height: 1px;
`;