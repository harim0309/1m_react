import React, { useState } from 'react';
import ImgComponent from '../components/ImageComponent';
import ArtistLiveWrap from '../components/indexcomponents/ArtistLiveWrap';
import BannerComponent from '../components/indexcomponents/BannerComponent';
import RecWrapComponent from '../components/indexcomponents/RecWrapComponent';
import Splash from './Splash';
import '../style/index.scss';
import styled from 'styled-components';

const Index = () => {

    const [splash,setSplash] = useState(true);

        setTimeout(()=>{
            setSplash(false)
            console.log('!');
        }, 2000)


  return (
    <div className='indexWrap'>
        {splash && <Splash></Splash>}
        <div className='liveWrap'>
            <ul>
                <ArtistLiveWrap artist={'artist01.png'} class={'artistWrapOn'}></ArtistLiveWrap>
                <ArtistLiveWrap artist={'artist02.png'} class={'artistWrap'}></ArtistLiveWrap>
                <ArtistLiveWrap artist={'artist03.png'} class={'artistWrap'}></ArtistLiveWrap>
                <ArtistLiveWrap artist={'artist04.png'} class={'artistWrap'}></ArtistLiveWrap>
                <ArtistLiveWrap artist={'artist05.png'} class={'artistWrap'}></ArtistLiveWrap>
            </ul>
        </div>
        <div className='lengthWrap'>
            <div className="top">
                <TitleP>우리사이 거리</TitleP>
                <ImgComponent src={'rightarrow.png'} class={'topRight'}/>
            </div>
            <div className="bottom"></div>
        </div>
        <div className="recWrap">
            <TitleP>우리 더 가까워 질까요?</TitleP>
            <div className="albumWrap">
                <RecWrapComponent src={'albumimg01.png'} txt1={'잔잔한 플레이리스트'} txt2={'10CM의 새벽감성'} txt3={'#5M이하  #잔잔한'} />
            </div>
            <div className="dots"></div>
        </div>
        <div className="banner">
            <BannerComponent txt={'1년전 내가 자주 들은'} artist={'IU'} title={'라일락'} class={'IU'} gra={'IUGra'}/>
        </div>
        <div className="closerWrap">
            <TitleP>폴킴과 거리 줄이기</TitleP>
            <div className="closer">
                <CloserMusicComponent src={'closerimg01.png'} txt1={'#아직들어보지않은'} txt2={'Gloomy Sunday'} />
                <CloserMusicComponent src={'closerimg02.png'} txt1={'#아직들어보지않은 #최근발매한'} txt2={'너도 아는'} />
                <CloserMusicComponent src={'closerimg03.png'} txt1={'#최근인기있는'} txt2={'나의 봄의 이유'} />
                <CloserMusicComponent src={'closerimg04.png'} txt1={'#아직들어보지않은 #팬추천'} txt2={'휴가'} />
                <CloserMusicComponent src={'closerimg05.png'} txt1={'#최근인기있는'} txt2={'사랑은 타이밍'} />
            </div>
        </div>
    </div>
  )
}

export default Index;

const TitleP = styled.p`
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
`

const CloserMusicComponent = (props) => {
return (
    <div className='closermusiccomponent'>
        <ImgComponent src={props.src} />
        <div className="right">
            <p className="top">{props.txt1}</p>
            <p className="bottom">{props.txt2}</p>
        </div>
    </div>
)
}