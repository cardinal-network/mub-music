import * as React from 'react';
import styled from 'styled-components';
import MenuIcon from '@material-ui/icons/Menu';

const NavContainer = styled.nav`
  padding: 25px 0 0 0;
  float: right;
  @media (max-width: 1100px){
    padding: 22px 0 0 0;
  }
`;

const NavUl = styled.ul`
  display: flex;
  flex-direction: row;
  @media (max-width: 1100px){
    display: flex;
  }
`;

const NavLi = styled.li`
  display: flex;
  padding: 0 0 0 25px;
  a{
      color: #fff;
      font-weight: 500;
      text-decoration: none;
      &:hover{
        color: ${({ theme }) => theme.colors.primary_hover};
      }
  }
  @media (max-width: 1100px){
    display: none;
  }
`;

const NavLiMobile = styled.li`
  display: none;
  padding: 0 20px;
  color: #fff;
  @media (max-width: 1100px){
    display: block;
    position: absolute;
    right: 0;
  }
`;

export default function Nav() {
  return (
    <NavContainer>
        <NavUl>
            <NavLi><a href="/">Home</a></NavLi>
            <NavLi><a href="/news/lifestyle">Lifestyle</a></NavLi>
            <NavLi><a href="/news/music-business">Music Business</a></NavLi>
            <NavLi><a href="/news/music-history">Music History</a></NavLi>
            <NavLi><a href="/news/people">People</a></NavLi>
            <NavLi><a href="/news/releases">Releases</a></NavLi>
            <NavLiMobile><MenuIcon/></NavLiMobile>
        </NavUl>
    </NavContainer>
  );
}