import React from "react"
import styled from "styled-components"
import Img from "gatsby-image"
import { graphql, useStaticQuery } from "gatsby"

const Features = () => {
  const data = useStaticQuery(graphql`
    query {
      allFile(
        filter: {
          ext: { regex: "/(jpg)|(png)|(jpeg)/" }
          name: { in: ["Picture1", "Picture2"] }
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

  const feature = [
    {
      title: "Usaha di Bidang Pupuk",
      desc:
        "Pupuk Cihurip telah melalui masa uji coba di berbagai daerah dengan  karakteristik kesuburan tanah yang berbeda beda dengan hasil yang bagus.!",
    },
    {
      title: "Usaha di bidang Hasil Bumi",
      desc: "Cihurip Agro telah bermitra dengan kelompok tani yang menggunakan Pupuk Hayati Cihurip serta menampung hasil Panennya dengan harga tinggi.",
    },
  ]

  return (
    <FeatureContainer>
      <TopLine>
        Apa yang kita <span>Lakukan</span>
      </TopLine>
      {data.allFile.edges.map((item, index) =>
        index % 2 === 0 ? (
          <ContentWrapper key={index}>
            <ColumnOne>
              <Feature>
                <h3>{feature[index].title}</h3>
                <p>{feature[index].desc}</p>
              </Feature>
            </ColumnOne>
            <ColumnTwo>
              <Images fluid={item.node.childImageSharp.fluid} />
            </ColumnTwo>
          </ContentWrapper>
        ) : (
          <ContentWrapper key={index}>
            <ColumnTwo>
              <Images fluid={item.node.childImageSharp.fluid} />
            </ColumnTwo>
            <ColumnOne>
              <Feature>
                <h3>{feature[index].title}</h3>
                <p>{feature[index].desc}</p>
              </Feature>
            </ColumnOne>
          </ContentWrapper>
        )
      )}
    </FeatureContainer>
  )
}

export default Features

const FeatureContainer = styled.div`
  width: 100%;
  background: #fff;
  color: #323232;
  padding: 5rem calc((100vw - 1300px) / 2);
  height: 100%;
`

const TopLine = styled.h1`
  color: #1c1d1d;
  line-height: 1.41;
  font-size: clamp(1.5rem, 6vw, 4rem);
  padding-left: 2rem;
  margin-bottom: 0.75rem;
  font-weight: bold;
  text-transform: capitalize;

  span {
    color: #889655;
  }
`

const ContentWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  padding: 0 2rem;

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`

const ColumnOne = styled.div`
  display: fluid;
  justify-content: center;
  align-items: center;
`

const Feature = styled.div`
  padding-top: 3rem;
  padding-right: 2rem;
  color: #1c1d1d;
  line-height: 1.41;

  h3 {
    margin-bottom: 1rem;
    font-size: clamp(1.25rem, 6vw, 3.5rem);
    font-weight: bold;
    color: #889655;
    font-style: italic;
  }

  p {
    font-size: clamp(0.75rem, 3vw, 1.5rem);
  }
`

const ColumnTwo = styled.div`
  max-height: 80vh;
  justify-content: center;
  align-self: center;
  align-items: center;
  padding: 4rem;

  @media screen and (max-width: 768px) {
    display: none;
  }
`

const Images = styled(Img)`
  object-fit: cover;
`
