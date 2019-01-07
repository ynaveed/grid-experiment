import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import Image from '../components/image'
import SEO from '../components/seo'
import styled from 'styled-components'

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: [first] 100px [second] 100px [third] 100px [fourth] 200px [fifth] 100px;
  grid-template-rows: [first] 100px [second] 100px [third] 100px [fourth] auto;
`;

const ItemFirst = styled.div`
  grid-column-start: second;
  grid-column-end: fifth;
  grid-row-start: 1;
  grid-row-end: 3;
  background-color: #ddd;
`;

const ItemSecond = styled.div`
  grid-column-start: 3;
  grid-column-end: 4;
  grid-row-start: 3
  grid-row-end: 4;
  background-color: #393939;
`;

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    
    <GridContainer>
      <ItemFirst />
      <ItemSecond />
    </GridContainer>
    
  </Layout>
)

export default IndexPage
