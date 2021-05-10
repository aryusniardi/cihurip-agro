import styled from 'styled-components'
import Img from "gatsby-image"

export const AboutContainer = styled.div`
  width: 100%;
  color: #323232;
  padding: 5rem calc((100vw - 1300px) / 2);
  height: 100%;
  min-height: 100vh;
  display: flex;
  align-items: center;
`

export const ContentWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  padding: 0 2rem;
  height: 100%;

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`

export const ColumnOne = styled.div`
  display: fluid;
  justify-content: center;
  align-items: center;
`

export const ColumnTwo = styled.div`
  padding: 2rem;
  justify-content: center;
  align-self: center;
  align-items: center;
`

export const Images = styled(Img)`
  object-fit: cover;
`

export const Content = styled.div`
  padding-top: 3rem;
  padding-right: 2rem;
  color: #1c1d1d;

  h3 {
    margin-bottom: 1rem;
    line-height: 3.41rem;
    font-size: clamp(1.25rem, 6vw, 3.5rem);
    font-weight: bold;

    span {
      color: #889655;
    }
  }

  p {
    font-size: clamp(0.75rem, 3vw, 1.5rem);
    line-height: 2.41rem;
  }
`