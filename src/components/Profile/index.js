import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import {
  AboutContainer,
  ContentWrapper,
  ColumnOne,
  ColumnTwo,
  Images,
  Content,
} from './ProfileElements'

const Profile = () => {
  const data = useStaticQuery(graphql`
      query {
        allFile(
          filter: {
            ext: { regex: "/(jpg)|(png)|(jpeg)/" }
            name: { in: ["Logo - Cihurip Agro@4x"] }
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

    return (
      <AboutContainer>
        <ContentWrapper>
          <ColumnOne>
            <Content>
              <h3>
                Tentang <span>Cihurip Agro</span>!
              </h3>
              <p>
                CIHURIP AGRO, merupakan UMKM yang berdiri sebagai wadah untuk
                mengakomodasi hasil riset dan pengembangan produk untuk
                mendukung usaha dibidang pertanian, sebagai bentuk partisipasi
                didalam mendukung program pangan nasional untuk membantu para
                petani Menjaga & menaikkan hasil pertaniannya sehingga mampu
                meningkatkan kesejahteraannya.
              </p>
            </Content>
          </ColumnOne>
          <ColumnTwo>
            {data.allFile.edges.map((item, index) => (
              <Images key={index} fluid={item.node.childImageSharp.fluid} />
            ))}
          </ColumnTwo>
        </ContentWrapper>
      </AboutContainer>
    )
}

export default Profile