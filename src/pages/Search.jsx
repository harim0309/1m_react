import React, {useState, useCallback} from 'react';
import '../style/search.scss';
import styled from 'styled-components';

import ArtistLiveWrap from '../components/indexcomponents/ArtistLiveWrap';
import ImgComponent from '../components/ImageComponent';
import SearchInputComponent from '../components/searchcomponents/SearchInputComponent';

import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { apiAdd } from '../module/api';

import '../module/api'

const Search = () => {

  const [musicinput, setMusicInput] = useState('');
  console.log("🚀 ~ file: Search.jsx:44 ~ Search ~ musicinput", musicinput)

  const dispatch = useDispatch();

  const musicadd = useCallback(
    (musicinput) => dispatch(apiAdd(musicinput)),
    [dispatch]
  );


  const searchMusic = (e) => {
    if (e.key === 'Enter') {
      musicadd(musicinput);
      getApi();
      
      // setMusicInput(musicinput);
    }
  }

  // Redux
  const music = useSelector((state) => state.api.title) // 검색할 변수

  //API 호출  

  const API_KEY = "dcdac51fa9a12bd66fb3bf5bdc2cc20d";

  console.log("🚀 ~ file: Search.jsx:19 ~ Search ~ music", music);
  
  const url = `https://ws.audioscrobbler.com/2.0/?method=track.search&track=${musicinput}&api_key=${API_KEY}&format=json`;
  console.log(url);
  const [result, setResult] = useState({});

  const getApi = async () => {
      try {
        const data = await axios({
          method: 'get',
          url: url,
        })
        setResult(data);
        console.log(url);
        console.log(data);
      } 
      catch(err) {
        alert(err);
      }
    }

  // keyword select

  const [type, setType] = useState([]);

  const putType = (text) => {
    const newArray = type.filter(function (txtdata) {
      return txtdata !== text;
    });

    !type.includes(text)
      ? setType([...type, text])
      : setType(type.filter((item) => item !== text));
  };

  return (
    <div className='searchWrap'>
      <div className='liveWrap'>
            <ul>
              <ArtistLiveWrap artist={'artist01.png'} class={'artistWrapOn'}></ArtistLiveWrap>
                <ArtistLiveWrap artist={'artist02.png'} class={'artistWrap'}></ArtistLiveWrap>
                <ArtistLiveWrap artist={'artist03.png'} class={'artistWrap'}></ArtistLiveWrap>
                <ArtistLiveWrap artist={'artist04.png'} class={'artistWrap'}></ArtistLiveWrap>
                <ArtistLiveWrap artist={'artist05.png'} class={'artistWrap'}></ArtistLiveWrap>
            </ul>
        </div>
        <div className="search">
          <SearchInputComponent setMusicInput={setMusicInput} musicinput={musicinput} searchMusic={searchMusic} />
          <div className="dropdown">

          </div>
          <ul className="keywords">
            <div>
              <Keyword 
              onclick={()=>putType('발라드')}
              class={type.includes("발라드") ? 'keywordSelected' : 'keyword'} txt={'발라드'}/>
              <Keyword 
              onclick={()=>putType('BTS')}
              class={type.includes("BTS") ? 'keywordSelected' : 'keyword'} 
              txt={'BTS'}/>
              <Keyword 
              onclick={()=>putType('iKON')}
              class={type.includes("iKON") ? 'keywordSelected' : 'keyword'} 
              txt={'iKON'}/>
              <Keyword 
              onclick={()=>putType('산책')}
              class={type.includes("산책") ? 'keywordSelected' : 'keyword'} 
              txt={'산책'}/>
              <Keyword 
              onclick={()=>putType('어쿠스틱')}
              class={type.includes("어쿠스틱") ? 'keywordSelected' : 'keyword'} 
              txt={'어쿠스틱'}/>
              <Keyword 
              onclick={()=>putType('신곡')}
              class={type.includes("신곡") ? 'keywordSelected' : 'keyword'} 
              txt={'신곡'}/>
              <Keyword 
              onclick={()=>putType('아침')}
              class={type.includes("아침") ? 'keywordSelected' : 'keyword'} 
              txt={'아침'}/>
              <Keyword 
              onclick={()=>putType('비오는날')}
              class={type.includes("비오는날") ? 'keywordSelected' : 'keyword'} 
              txt={'비오는날'}/>
              <Keyword 
              onclick={()=>putType('운동')}
              class={type.includes("운동") ? 'keywordSelected' : 'keyword'} 
              txt={'운동'}/>
              <Keyword 
              onclick={()=>putType('힙합')}
              class={type.includes("힙합") ? 'keywordSelected' : 'keyword'} 
              txt={'힙합'}/>
              <Keyword 
              onclick={()=>putType('인디밴드')}
              class={type.includes("인디밴드") ? 'keywordSelected' : 'keyword'} 
              txt={'인디밴드'}/>
            </div>
          </ul>
        </div>
        {music && (<div className="top100">
        <TitleP>Music</TitleP>
            <div className="top100Wrap">
              <Top100Component result={result} />
              {/* <Top100Component src={'top10001.png'} num={'2'} title={'너도 아는'} artist={'폴킴'} />
              <Top100Component src={'top10001.png'} num={'3'} title={'안녕'} artist={'김재환'} />
              <Top100Component src={'top10001.png'} num={'4'} title={'헤픈 우연'} artist={'헤이즈'} /> */}
            </div>
        </div>)}
    </div>
  )
}

export default Search;

const TitleP = styled.p`
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
`

const Top100Component = ({result,num}) => {

  return (
      <div className='top100Component'>
        
        {Object.keys(result).length !== 0 && (
          <div className='wrap01'>
          {result.data.results.trackmatches.track.map((track)=>(
            <div className='wrap02'>
              <div className="left">
                <img src ={track.image[0]['#text']} key={track.imgid}></img>
                <p className="num">{num}</p>
                <p className="title" key={track.nameid}>{track.name}</p>
              </div>
              <p className="right" key={track.artistid}>{track.artist}</p>
            </div>
          ))}
          </div>)
          }
          
      </div>
      
    )
  }

const Keyword = (props) => {
  return (
    <li className={props.class} onClick={props.onclick}>
      <span># {props.txt}</span>
    </li>
  )
}