import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
background-color: #bfbfbf;
width:100%
height:100%;
 
`;

const Head = styled.h1`
  font-family: verdana;
  font-size: 300%;
  text-align: center;
  :hover {
    color: #b30059
    ;
  }
`;

const Image = styled.img`
width:500px;
 height:500px;
 margin-left:34%;
`;

const Landing = () => (
  <Wrapper>
    <Head>Turn The Music Up</Head>
    <Image src="http://www.mundialbeisbol2010.org/wp-content/uploads/2018/05/o-music-heart-facebook.jpg"/>

  </Wrapper>
);

export default Landing;
