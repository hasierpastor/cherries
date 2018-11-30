import React from 'react'
import Styled from 'styled-components'
<<<<<<< HEAD
import { ProductPageInfoContainer } from '../components'
=======
import NavBar from './NavBar'
import ProductPageInfoContainer from './atoms/ProductPageInfoContainer'
import ProductPageProductOrder from './atoms/ProductPageProductOrder'
>>>>>>> 9ef1dc50a1fb8eae7fd865ba4a2acb65bf9339cd
import { graphql } from 'gatsby'

const Container = Styled.div`
  align-items: center;
  animation: fadein 1s; 
  @keyframes fadein {
        from { opacity: 0; }
        to   { opacity: 1; }
    }
`

const ProductPageContainer = ({ data }) => {
  return (
    <Container>
      {/* Image Component Goes Here */}
      <ProductPageInfoContainer />
    </Container>
  )
}

// Query contentful for products limiting to fresh picks (top four most recently created products)
// Passed into ProductList component
// Eventually may connect to shopify for sales-driven data
export const query = graphql`
  {
    allContentfulProductPage(
      sort: { fields: [createdAt], order: DESC }
      limit: 4
    ) {
      edges {
        node {
          id
          createdAt
          title
          price
          images {
            file {
              url
            }
          }
        }
      }
    }
  }
`

export default ProductPageContainer