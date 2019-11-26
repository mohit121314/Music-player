import React, { Component } from "react";
import { Route, Link } from "react-router-dom";
import "./App.css";
import Library from "./components/Library";
import Landing from "./components/Landing";
import Album from "./components/Album";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  // width: 100%;
  // @media screen and (min-width: 700px) {
  //   max-width: 1600px;
  //   padding: 0 4% 0 6%;
  //   margin-bottom: 40px;
  //   margin: 0 auto;
  // }
`;

const Subwrap = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
  overflow: hidden;
  border: 1px solid #e7e7e7;
  background-color: #f3f3f3;
`;

const List = styled.li`
  float: left;
`;

class App extends Component {
  render() {
    return (
      <Wrapper>
        <Subwrap>
          <List>
            <Link className="link" to="/">
              Home
            </Link>
          </List>
          <List>
            <Link className="link" to="/library">
              Library
            </Link>
          </List>
        </Subwrap>
        <main className="main">
          <Route exact path="/" component={Landing} />
          <Route path="/library" component={Library} />
          <Route path="/album/:slug" component={Album} />
        </main>
      </Wrapper>
    );
  }
}

export default App;
