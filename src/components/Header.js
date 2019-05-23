import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby';

const Header = ({h1, h2, onOpenArticle, timeout}) => (
  <header id="header" style={timeout ? { display: 'none' } : {}}>
    <div className="logo">
      <span className="icon fa-code" />
    </div>
    <div className="content">
      <div className="inner">
        <h1>{h1}</h1>
        <p>{h2}</p>
      </div>
    </div>
    <nav>
      <ul>
        <li>
          <a
            href="#/"
            onClick={() => {
              onOpenArticle('skills')
            }}
          >
            Skills
          </a>
        </li>
        <li>
          <a
            href="#/"
            onClick={() => {
              onOpenArticle('about')
            }}
          >
            About
          </a>
        </li>
        <li>
          <a
            href="#/"
            onClick={() => {
              onOpenArticle('contact')
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

const HeaderWithQuery = props => (
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
    render={data => <Header {...data.site.siteMetadata} {...props}/>}
  />
);

export default HeaderWithQuery;
