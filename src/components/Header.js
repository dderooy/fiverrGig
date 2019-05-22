import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby';

const Header = props => (
  <header id="header" style={props.timeout ? { display: 'none' } : {}}>
    <div className="logo">
      <span className="icon fa-code" />
    </div>
    <div className="content">
      <div className="inner">
        <h1>{props.h1}</h1>
        <p>{props.h2}</p>
      </div>
    </div>
    <nav>
      <ul>
        <li>
          <a
            href="#/"
            onClick={() => {
              props.onOpenArticle('skills')
            }}
          >
            Skills
          </a>
        </li>
        <li>
          <a
            href="#/"
            onClick={() => {
              props.onOpenArticle('about')
            }}
          >
            About
          </a>
        </li>
        <li>
          <a
            href="#/"
            onClick={() => {
              props.onOpenArticle('contact')
            }}
          >
            Contact
          </a>
        </li>
      </ul>
    </nav>
  </header>
)

Header.propTypes = {
  onOpenArticle: PropTypes.func,
  timeout: PropTypes.bool,
  h1: PropTypes.string, 
  h2: PropTypes.string
}

const HeaderWithQuery = () => (
  <StaticQuery
    query={graphql`
      query HeaderQuery {
        site {
          siteMetadata {
            h1
            h2
          }
        }
      }
    `}
    render={data => <Header {...data.site.siteMetadata} />}
  />
);

export default HeaderWithQuery;
