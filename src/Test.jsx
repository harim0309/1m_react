import React, {useState} from 'react';
import axios from 'axios';

const Test = () => {
    const [music, setMusic] = useState('');
    const [artist, setArtist] = useState('');
    const [result, setResult] = useState({});
    const API_KEY = "dcdac51fa9a12bd66fb3bf5bdc2cc20d";

    // const url = `http://www.last.fm/music/2.0/?method=track.search&track=${music}&api_key=${API_KEY}`;
    const url = `https://ws.audioscrobbler.com/2.0/?method=track.search&track=${music}&artist=${artist}&api_key=${API_KEY}&format=json`
    // const url = `https://ws.audioscrobbler.com/2.0/?method=track.search&track=${music}&artist=${artist}&api_key=${API_KEY}&format=json`

    const searchMusic = async (e) => {
        if(e.key === 'Enter') {
          try {
            const data = await axios({
              method: 'get',
              url: url,
            })
            setResult(data);
            console.log(data);
            console.log('!');
          } 
          catch(err) {
            alert(err);
          }
        }
      }

// axios.request(options).then(function (response) {
// 	console.log(response.data);
// }).catch(function (error) {
// 	console.error(error);
// });

  return (
    <>
    <div>Test</div>
    <input 
    value={music}
    onChange={(e) => setMusic(e.target.value)}
    onKeyDown={searchMusic}
    ></input>
    {/* {result && <div>{result.data.results.trackmatches.track.name}</div>} */}
    {Object.keys(result).length !== 0 && (
          <div>
            {/* <p className="title">{result.data.results.trackmatches.track[0].name}</p> */}
            {/* <h1>{result.data.results.trackmatches.track[0].image[0]['#text']}</h1> */}
            {result.data.results.trackmatches.track.map((trackimg)=>(<p key={trackimg.imgid}>{trackimg.image[0]['#text']}</p>))}
            {result.data.results.trackmatches.track.map((title)=>(<p key={title.nameid}>{title.name}</p>))}
            <hr />
            {result.data.results.trackmatches.track.map((trackartist)=>(<p key={trackartist.artistid}>{trackartist.artist}</p>))}
            <hr />
            {result.data.results.trackmatches.track.map((tracklistener)=>(<p key={tracklistener.listenersid}>{tracklistener.listeners}</p>))}
            <hr />
            {result.data.results.trackmatches.track.map((title)=>(<div key={title.imgid}>{title.image[0].text}</div>))}
          </div>
    )}
    </>
  )
}

export default Test;