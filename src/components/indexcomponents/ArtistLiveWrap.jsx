import React from 'react';
import styled from 'styled-components';

const ArtistLiveWrap = (props) => {
  return (
    // <ArtistWrap>
    //     <img src={process.env.PUBLIC_URL + '/img/' + props.artist}/>
    // </ArtistWrap>
    <div className={props.class}>
      <p className='live'>Live</p>
      <div className='artistWrapOn2'>
        <img src={process.env.PUBLIC_URL + '/img/' + props.artist}/>
      </div>
    </div>
  )
}

export default ArtistLiveWrap;

