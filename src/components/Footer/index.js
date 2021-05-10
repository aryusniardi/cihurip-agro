import React from "react"
import styled from "styled-components"
import Logo from "../../images/Logo - Cihurip Agro@4x.png"

const Footer = () => {
  return (
    <FooterContainer>
      <FooterBrandingWrapper>
        <FooterBrandingAnchor href="/">
          <FooterLogo src={Logo} alt="AnTrash Indonesia" />
        </FooterBrandingAnchor>
        <FooterBranding>
          <span>
            Puri Cipageran Indah 1 Blok H1 no 83, Cimahi
            <br />
            Indonesia
          </span>
        </FooterBranding>
        <FooterBranding>
          <span>
            Phone
            <a href="https://api.whatsapp.com/send?phone=+6283820260709">
              083820260709
            </a>
            <br />
            Instagram{" "}
            <a href="https://www.instagram.com/cihurip_agro/">
              Cihurip Agro
            </a>
          </span>
        </FooterBranding>
      </FooterBrandingWrapper>

      {/* <FooterContentList>
          <ContentList>
            <li>Company</li>
            <li>
              <a href="https://www.geeksforgeeks.org/about/">About Us</a>
            </li>
            <li>
              <a href="https://www.geeksforgeeks.org/careers/">Careers</a>
            </li>
            <li>
              <a href="https://www.geeksforgeeks.org/privacy-policy/">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="https://www.geeksforgeeks.org/about/contact-us/">
                Contact Us
              </a>
            </li>
          </ContentList>
        </FooterContentList> */}
    </FooterContainer>
  )
}

export default Footer

const FooterContainer = styled.div`
  display: flex;
  flex-direction: row;
  padding: 0 2rem;
  padding-bottom: 2rem;

  @media screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
`

const FooterBrandingWrapper = styled.div`
  display: flex;
  flex-direction: column;

  @media screen and (max-width: 768px) {
    align-items: center;
    text-align: center;
  }
`

const FooterBrandingAnchor = styled.a`
  outline: 0;
  text-decoration: none;
`

const FooterBranding = styled.div`
  color: #696969;
  display: flex;
  flex-direction: row;
  align-content: flex-start;
  justify-content: start;
  margin-bottom: 10px;
  font-weight: 600;
  font-size: clamp(0.5rem, 3vw, 1rem);
  line-height: 1.41;

  span {
    padding-left: 2rem;
    margin-top: auto;
    margin-bottom: auto;
    text-decoration: none;
    color: inherit;

    @media screen and (max-width: 768px) {
      padding: 0;
    }
  }

  a {
    padding-left: 2rem;
    text-decoration: none;
    color: inherit;

    @media screen and (max-width: 768px) {
      padding: 0;
    }
  }
`

const FooterLogo = styled.img`
  display: flex;
  margin: auto;
  max-width: 230px;
  padding: 2rem;
  padding-bottom: 0;

  @media screen and (max-width: 768px) {
    margin-top: 2rem;
  }
`

// const FooterContentList = styled.div`
//   display: flex;
//   flex-grow: 1;
//   flex-direction: row;
//   justify-content: space-between;

//   @media screen and (max-width: 768px) {
//     flex-wrap: wrap;
//   }
// `

// const ContentList = styled.div`
//   display: flex;
//   list-style: none;
//   flex-direction: column;
//   margin-block-start: 2rem;
//   margin-block-end: 2rem;
//   margin-inline-start: 0;
//   margin-inline-end: 0;
//   padding-inline-start: 40px;

//   @media screen and (max-width: 768px) {
//     padding: 0;
//     flex-basis: 50%;
//     align-items: center;
//   }

//   li:first-child {
//     color: #889655;
//     font-size: clamp(0.6rem, 3vw, 1.4rem);
//     font-weight: 600;
//     padding-bottom: 10px;
//   }

//   li {
//     font-size: clamp(0.5rem, 3vw, 1rem);
//     font-weight: 600;
//     padding-bottom: 10px;

//     a {
//       text-decoration: none;
//       color: #696969;
//     }
//   }
// `
