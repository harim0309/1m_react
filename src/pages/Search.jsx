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
  console.log("π ~ file: Search.jsx:44 ~ Search ~ musicinput", musicinput)

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
  const music = useSelector((state) => state.api.title) // κ²μν  λ³μ

  //API νΈμΆ  

  const API_KEY = "dcdac51fa9a12bd66fb3bf5bdc2cc20d";

  console.log("π ~ file: Search.jsx:19 ~ Search ~ music", music);
  
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
              onclick={()=>putType('λ°λΌλ')}
              class={type.includes("λ°λΌλ") ? 'keywordSelected' : 'keyword'} txt={'λ°λΌλ'}/>
              <Keyword 
              onclick={()=>putType('BTS')}
              class={type.includes("BTS") ? 'keywordSelected' : 'keyword'} 
              txt={'BTS'}/>
              <Keyword 
              onclick={()=>putType('iKON')}
              class={type.includes("iKON") ? 'keywordSelected' : 'keyword'} 
              txt={'iKON'}/>
              <Keyword 
              onclick={()=>putType('μ°μ±')}
              class={type.includes("μ°μ±") ? 'keywordSelected' : 'keyword'} 
              txt={'μ°μ±'}/>
              <Keyword 
              onclick={()=>putType('μ΄μΏ μ€ν±')}
              class={type.includes("μ΄μΏ μ€ν±") ? 'keywordSelected' : 'keyword'} 
              txt={'μ΄μΏ μ€ν±'}/>
              <Keyword 
              onclick={()=>putType('μ κ³‘')}
              class={type.includes("μ κ³‘") ? 'keywordSelected' : 'keyword'} 
              txt={'μ κ³‘'}/>
              <Keyword 
              onclick={()=>putType('μμΉ¨')}
              class={type.includes("μμΉ¨") ? 'keywordSelected' : 'keyword'} 
              txt={'μμΉ¨'}/>
              <Keyword 
              onclick={()=>putType('λΉμ€λλ ')}
              class={type.includes("λΉμ€λλ ") ? 'keywordSelected' : 'keyword'} 
              txt={'λΉμ€λλ '}/>
              <Keyword 
              onclick={()=>putType('μ΄λ')}
              class={type.includes("μ΄λ") ? 'keywordSelected' : 'keyword'} 
              txt={'μ΄λ'}/>
              <Keyword 
              onclick={()=>putType('νν©')}
              class={type.includes("νν©") ? 'keywordSelected' : 'keyword'} 
              txt={'νν©'}/>
              <Keyword 
              onclick={()=>putType('μΈλλ°΄λ')}
              class={type.includes("μΈλλ°΄λ") ? 'keywordSelected' : 'keyword'} 
              txt={'μΈλλ°΄λ'}/>
            </div>
          </ul>
        </div>
        {music && (<div className="top100">
        <TitleP>Music</TitleP>
            <div className="top100Wrap">
              <Top100Component result={result} />
              {/* <Top100Component src={'top10001.png'} num={'2'} title={'λλ μλ'} artist={'ν΄ν΄'} />
              <Top100Component src={'top10001.png'} num={'3'} title={'μλ'} artist={'κΉμ¬ν'} />
              <Top100Component src={'top10001.png'} num={'4'} title={'ν€ν μ°μ°'} artist={'ν€μ΄μ¦'} /> */}
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