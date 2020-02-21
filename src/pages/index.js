import React from "react"
import AniLink from "gatsby-plugin-transition-link/AniLink";
import Layout from '../components/Layout'
import Banner from '../components/Banner'
import About from '../components/Home/About'
import Services from '../components/Home/Services'
import StyledHero from '../components/StyledHero'
import {graphql} from 'gatsby'

export default ({data}) => (
<Layout>
<StyledHero home="true" img={data.defaultBcg.childImageSharp.fluid}>
  <Banner title="continue exploring" info="Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.">
  <AniLink fade to="/tours" className="btn-white">explore tours</AniLink>
  </Banner>
  </StyledHero>
  <About />
  <Services />
</Layout>
)
export const query=graphql`
query {
  defaultBcg:file(relativePath:{eq:"defaultBcg.jpeg"}){
    childImageSharp{
      fluid(maxWidth: 4160, quality: 90){
        ...GatsbyImageSharpFluid_withWebp
      }
    }
  }
}
`
//react fragments????wtf is that
