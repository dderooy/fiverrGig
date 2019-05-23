import React from 'react'
import PropTypes from 'prop-types'
import AboutPic from '../images/about.jpg'
import NetlifyForm from './NetlifyForm'

class Main extends React.Component {
  render() {
    let close = (
      <div
        className="close"
        onClick={() => {
          this.props.onCloseArticle()
        }}
      />
    )

    return (
      <div
        ref={this.props.setWrapperRef}
        id="main"
        style={this.props.timeout ? { display: 'flex' } : { display: 'none' }}
      >
        <article
          id="skills"
          className={`${this.props.article === 'skills' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Skills</h2>

          <div className="grid-container">
            <div className="grid-item">
              <ul className="actions vertical">
                <li>
                  <h3>Selling Stuff:</h3>
                  <span className="icon fa-home" />
                  <span className="icon fa-car" />
                </li>
                <li>
                  <p>Real Estate Guru </p>
                </li>
                <li>
                  <p>Car Sales Professional</p>
                </li>
              </ul>
            </div>
            <div className="grid-item">
              <ul className="actions vertical">
                <li>
                  <h3>Managing Stuff:</h3>
                  <span className="icon fa-users" />
                </li>
                <li>
                  <p>PMP credentials</p>
                </li>
                <li>
                  <p>Company Director</p>
                </li>
                <li>
                  <p>1000% Gains</p>
                </li>
              </ul>
            </div>
            <div className="grid-item">
              <ul className="actions vertical">
                <li>
                  <h3>Building Stuff:</h3>
                  <span className="icon fa-wrench" />
                  <span className="icon fa-pencil" />
                </li>
                <li>
                  <p>Buildings</p>
                </li>
                <li>
                  <p>Cool Code stuff</p>
                </li>
                <li>
                  <p></p>
                </li>
                <li>
                  <p></p>
                </li>
              </ul>
            </div>
            <div className="grid-item">
              <ul className="actions vertical">
                <li>
                  <h3>Researching Stuff:</h3>
                  <span className="icon fa-book" />
                </li>
                <li>
                  <p>Science</p>
                </li>
                <li>
                  <p>new produts</p>
                </li>
              </ul>
            </div>
          </div>

          {close}
        </article>

        <article
          id="about"
          className={`${this.props.article === 'about' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">About</h2>
          <span className="image left">
            <img src={AboutPic} alt="" />
          </span>
          <p>
            John Doe is a solid dude who does solid stuff. He has been doing solid stuff since 1990 and is a total boss now. 
          </p>
          <p>
            John Doe is passionate about work and doing cool things. 
          </p>
          <p></p>
          {close}
        </article>

        <article
          id="contact"
          className={`${this.props.article === 'contact' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Contact</h2>
          <NetlifyForm onChangeArticle={this.props.onChangeArticle} />
          <ul className="icons">
            <li>
              <a href="https://github.com" className="icon fa-github">
                <span className="label">GitHub</span>
              </a>
            </li>
            <li>
              <a href="https://facebook.com" className="icon fa-facebook">
                <span className="label">Facebook</span>
              </a>
            </li>
            <li>
              <a href="https://linkedin.com" className="icon fa-linkedin">
                <span className="label">LinkedIn</span>
              </a>
            </li>
            <li>
              <a href="https://instagram.com" className="icon fa-instagram">
                <span className="label">Intagram</span>
              </a>
            </li>
          </ul>
          {close}
        </article>

        <article
          id="success"
          className={`${this.props.article === 'success' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">
            Thanks for reaching out <span className="icon fa-thumbs-o-up" />
          </h2>
          <p className="align-center">Your message has been received</p>
          {close}
        </article>
      </div>
    )
  }
}

Main.propTypes = {
  route: PropTypes.object,
  article: PropTypes.string,
  articleTimeout: PropTypes.bool,
  onChangeArticle: PropTypes.func,
  onCloseArticle: PropTypes.func,
  timeout: PropTypes.bool,
  setWrapperRef: PropTypes.func.isRequired,
}

export default Main
