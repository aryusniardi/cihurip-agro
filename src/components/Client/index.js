import React from "react"
import styled from "styled-components"
import Img from "gatsby-image"
import { graphql, useStaticQuery } from "gatsby"

const Client = () => {
    const data = useStaticQuery(graphql`
      query {
        allFile(
          filter: {
            ext: { regex: "/(jpg)|(png)|(jpeg)/" }
            name: {
              in: [
                "Picture3"
                "Picture4"
                "Picture5"
                "Picture7"
                "Picture8"
                "Picture9"
                "Picture10"
              ]
            }
          }
        ) {
          edges {
            node {
              childImageSharp {
                fluid {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    `)

      const mitra = [
        { name: "Pemkot Kota Cimahi" },
        { name: "Dinas Pangan dan Pertanian" },
        { name: "BBPP" },
        { name: "Bulog" },
        { name: "PT. Mitra Desa Bersama Ligung" },
        { name: "Kelompok Tani" },
        { name: "Hijau Nagari Indonesia" },
      ]

  return (
    <PartnerContainer>
      <TopLine>
        <span>Partner</span> Kami
      </TopLine>
      <Wrapper>
        {data.allFile.edges.map((item, index) => (
          <PartnerBox>
            <PartnerLink href="/" target="_blank" rel="noreferrer">
              <PartnerImage
                alt={mitra[index].name}
                fluid={item.node.childImageSharp.fluid}
              />
            </PartnerLink>
            <PartnerTitle>{mitra[index].name}</PartnerTitle>
          </PartnerBox>
        ))}
      </Wrapper>
    </PartnerContainer>
  )
}

export default Client

const PartnerContainer = styled.div`
  min-height: 100%;
  background: #fff;
  color: #1c1d1d;
  line-height: 1.41;
  padding: 5rem calc((100vw - 1300px) / 2);
`

const TopLine = styled.h1`
  color: #1c1d1d;
  line-height: 1.41;
  font-size: clamp(1.5rem, 6vw, 4rem);
  padding-left: 2rem;
  margin-bottom: 0.75rem;
  font-weight: bold;

  span {
    color: #889655;
  }
`
const Wrapper = styled.div`
  display: grid;
  grid-auto-column: 30%;
  grid-gap: 20px;
  justify-content: center;
  grid-template-columns: repeat(5, 1fr);

  @media screen and (max-width: 768px) {
    justify-content: center;
    grid-template-columns: repeat(3, 1fr);
  }
`

const PartnerBox = styled.div`
  height: 100%;
  width: 100%;
  padding: 2rem;
  display: flex;
  flex-direction: column;
`

const PartnerLink = styled.a`
  cursor: pointer;
`

const PartnerImage = styled(Img)`
  object-fit: cover;
`

const PartnerTitle = styled.div`
  color: #1c1d1d;
  line-height: 1.41;
  font-size: clamp(0.75rem, 2.5vw, 1.2rem);
  font-weight: bold;
  word-wrap: break-word;
  margin-top: auto;
  text-align: center;
`
