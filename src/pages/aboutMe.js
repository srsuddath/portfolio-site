import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import { StaticImage } from "gatsby-plugin-image"

import SEO from "../global/seo"
import Layout from "../global/layout"

const AboutMePage = () => (
  <Layout>
    <SEO title="About Me" />
    <Wrapper>
      <div className="menu-bar">
        <Link to="/" className="menu-bar-link">
          Home
        </Link>
        <Link to="/portfolio/" className="menu-bar-link">
          Portfolio
        </Link>
        <Link to="/aboutMe/" className="selected-page menu-bar-link">
          About Me
        </Link>
      </div>
      <div className="card">
        <StaticImage
          src="../images/profilePic.png"
          alt="My Headshot"
          layout="fixed"
          width={350}
          height={350}
        />
        <div className="about">
          <p>
            Sam Suddath is a creative and driven software engineer based out of
            Tampa, Florida. He graduated from the University of South Florida in
            December of 2015 with his Bachelor's of Science in Computer Science.
          </p>
          <p>
            After graduation, Sam started his career as a Junior Software
            Engineer for Lockheed Martin in Marietta, GA. After his year at
            Lockheed Martin, he moved back to Tampa for an Avionics Software
            Engineering position at CAE USA, where he worked for just over three
            years.
          </p>
          <p>
            Since then, Sam has enjoyed a successful career as a Senior Frontend
            Engineer, working for startups like Homebar.io and massive
            open-source entities like VA.gov. He has built React and Redux apps
            for sites with millions of visitors per month, and always enjoys
            tackling the next technical challenge.
          </p>
          <p>
            When he isn't coding, Sam enjoys spending time with his wife Liz and
            daughter Charlotte, writing and DM'ing for his D&D campaign, and
            tackling handy-man projects around the house.
          </p>
        </div>
      </div>
    </Wrapper>
  </Layout>
)

const Wrapper = styled.div`
  display: flex;
  min-width: 100%;
  min-height: 100vh;
  margin: 0;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  font-size: 16px;
  flex-grow: 1;

  .menu-bar {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    text-align: center;
    padding: 10px 10px;
    width: 100%;
    max-height: 55px;
    flex-grow: 1;
    margin-bottom: 40px;
    -webkit-box-shadow: 0px 3px 3px rgba(0, 0, 0, 0.15);
    -moz-box-shadow: 0px 3px 3px rgba(0, 0, 0, 0.15);
    box-shadow: 0px 3px 3px rgba(0, 0, 0, 0.15);
    background: linear-gradient(-45deg, #0ddaf5 1%, #2958f5);
  }

  .menu-bar-link {
    color: #ffffff;
    font-size: 1.2rem;
    font-weight: 300;
  }

  img {
    margin-top: 40px;
    -webkit-box-shadow: 0px 6px 6px rgba(0, 0, 0, 0.15);
    -moz-box-shadow: 0px 6px 6px rgba(0, 0, 0, 0.15);
    box-shadow: 0px 6px 6px rgba(0, 0, 0, 0.15);
  }

  @media only screen and (min-width: 751px) {
    /* For desktop: */
    .card {
      display: flex;
      background: #f4f7fb;
      min-width: 500px;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      border-radius: 5px;
      margin-bottom: 70px;
      -webkit-box-shadow: 0px 6px 6px rgba(0, 0, 0, 0.15);
      -moz-box-shadow: 0px 6px 6px rgba(0, 0, 0, 0.15);
      box-shadow: 0px 6px 6px rgba(0, 0, 0, 0.15);
    }

    a {
      margin: 5px 9px 5px;
      color: black;
      text-decoration: none;
      width: 105px;
      text-align: center;
    }

    .about {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      width: 500px;
      margin: 20px 40px 20px;
      padding: 10px 0 10px;
    }
    p {
      text-align: center;
      margin-block-start: 8px;
      margin-block-end: 8px;
      color: #525f7f;
    }
  }
  @media only screen and (max-width: 750px) {
    /* For mobile: */

    .card {
      display: flex;
      background: #f4f7fb;
      max-width: 85%;
      margin-left: 25px;
      margin-right: 25px;
      padding: 15px 10px 20px 10px;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      border-radius: 5px;
      margin-bottom: 35px;
      -webkit-box-shadow: 0px 6px 6px rgba(0, 0, 0, 0.15);
      -moz-box-shadow: 0px 6px 6px rgba(0, 0, 0, 0.15);
      box-shadow: 0px 6px 6px rgba(0, 0, 0, 0.15);
    }

    a {
      margin: 5px 9px 5px;
      color: black;
      text-decoration: none;
      width: 105px;
      text-align: center;
    }

    .about {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      width: 85%;
      margin: 20px 40px 20px;
      padding: 10px 0 10px;
    }
    p {
      text-align: center;
      margin-block-start: 8px;
      margin-block-end: 8px;
      color: #444444;
    }
  }
`

export default AboutMePage
