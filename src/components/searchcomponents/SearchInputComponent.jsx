import React, {useState,useCallback,useRef,useEffect} from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import axios from 'axios';
import { useDispatch} from 'react-redux';
import {apiAdd} from '../../module/api'

const SearchInputComponent = ({musicinput,setMusicInput,searchMusic}) => {

  const inputRef = useRef(null);
    
  useEffect(() => {
      inputRef.current.focus();
  }, []);

  // const dispatch = useDispatch();
  
  // const setMusic = useCallback(
  //   (music) => dispatch(apiAdd(music)),
  //   [dispatch],
  // );

  return (
        <div className="inputWrap">
            <input type="text" placeholder='검색어를 입력하세요' 
                // value={music}
                onChange={(e) => setMusicInput(e.target.value)}
                onKeyDown={searchMusic}
                ref={inputRef}
            />
            <FontAwesomeIcon icon={faSearch} className="searchicon"/>
          </div>
  )
}

export default SearchInputComponent