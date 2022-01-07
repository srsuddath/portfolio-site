import React from "react"
import { Link } from "gatsby"
import Layout from "../global/layout"
import styled from "styled-components"

const default404 = () => (
  <Layout>
    <Wrapper>
      <div>
        Sorry you didn't find what you were looking for{" "}
        <Link to="/" className="menu-bar-link">
          try heading back to the home page
        </Link>
      </div>
    </Wrapper>
  </Layout>
)

const Wrapper = styled.div`
  display: flex;
  min-width: 100%;
  min-height: 100vh;
  margin-top: 60px;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
`

export default default404
