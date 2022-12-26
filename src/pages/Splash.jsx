import React from 'react';
import styled from 'styled-components';
import ImgComponent from '../components/ImageComponent';


const Splash = () => {

  return (
    <SplashWrap>
        <ImgComponent src={'logo.png'} class={'splashimg'}></ImgComponent>
    </SplashWrap>
  )
// }, 2000)
}

export default Splash;

const SplashWrap = styled.div`
    width: 100vw;
    height: 100vh;
    background: linear-gradient(180deg, #251741 0%, #0C0911 100%);
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    z-index: 8  ;
`