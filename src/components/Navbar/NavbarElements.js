import styled from 'styled-components'
import {Link} from 'gatsby'

export const Nav = styled.nav`
  background: transparent;
  height: 80px;
  display: flex;
  justify-content: space-between;
  padding: 0.5rem calc((100vw - 1300px) / 2);
  z-index: 100;
  position: relative;
`

export const NavLogo = styled.img`
  height: 100%;
  margin-right: 10px;
  
  @media screen and (max-width: 768px) {
      height: 100%;
    }
`

export const NavLink = styled(Link)`
  color: #323232;
  display: flex;
  align-items: center;
  text-decoration: none;
  height: 100%;
  cursor: pointer;
  margin-left: 20px;
  font-size: 1.8rem;

  @media screen and (max-width: 768px) {
      font-size: 1.2rem;
  }
`