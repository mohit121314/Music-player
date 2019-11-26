import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import albumData from './../data/albums';
import './Library.css';
import styled from "styled-components";

const Wrap = styled.div`
background-color: #F5F5F5;
width:100%
height:100%;
`;

class Library extends Component {
  constructor(props){
    super(props);
    this.state = {albums: albumData}
  }
  render () {
    return (
      <Wrap>
      <section className="library">
      {
        this.state.albums.map((album,index) =>
          <Link to={`/album/${album.slug}`} key={index} className="album-link">
            <img className="album-cover" src={album.albumCover} alt={album.title} />
            <div className="album-info" id="album-cover">{album.title}</div>
            <div className="album-info">{album.artist}</div>
            <div className="album-info" id="album-songs">{album.songs.length} songs</div>
          </Link>
          )
      }
      </section>
      </Wrap>
    );
  }
}

export default Library;
