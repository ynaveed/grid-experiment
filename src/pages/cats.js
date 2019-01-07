import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'

// import catOne from '../images/cat/catOne.png'
// import catTwo from '../images/cat/catTwo.jpg'
// import catThree from '../images/cat/catThree.jpg'
// import catFour from '../images/cat/catFour.jpg'
// import catFive from '../images/cat/catFive.jpeg'
// import catSix from '../images/cat/catSix.jpg'
// import catSeven from '../images/cat/catSeven.jpg'
// import catEight from '../images/cat/catEight.jpg'
// import catNine from '../images/cat/catNine.jpeg'
// import catTen from '../images/cat/catTen.jpeg'

import SEO from '../components/seo'
import Img from 'gatsby-image'
import styled from 'styled-components'

const GridContainer = styled.div`
  display: grid;
  grid-gap: 10px;
//   grid-template-columns: repeat(4, 1fr);
    grid-template-columns: repeat('auto-fill', minmax(200px, fr));
`;

const GridItem = styled.div`
    
`;


const CatPage = ({ data }) => (
    <Layout>
        <SEO title="Cat Page" keywords={[`gatsby`, `application`, `react`]} />

        <GridContainer>
            {data.allFile.edges.map(img => {
                return <GridItem><Img fluid={img.node.childImageSharp.fluid} /></GridItem>
            })}
        </GridContainer>

    </Layout>
)

export default CatPage;

export const query = graphql`
  query ImagesQuery {
      # the filter is usefull if you have multiple source-filesystem instances
      # the name "images" is set in the gatsby-config
    allFile(filter: {sourceInstanceName: {eq: "images"}}) {
      edges {
        node {
            childImageSharp {
            # Specify the image processing specifications right in the query.
            # Makes it trivial to update as your page's design changes.
            fluid(maxWidth: 700) {
            # Choose either the fragment including a small base64ed image, a traced placeholder SVG, or one without.
            ...GatsbyImageSharpFluid_noBase64
            }
          }
      }
    }
  }
}
`;
