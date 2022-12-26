import React from 'react';
import styled from 'styled-components';
import ImageComponent from '../ImageComponent'

const RecWrapComponent = (props) => {
  return (
    <RecWrap>
        <img src={process.env.PUBLIC_URL + '/img/' + props.src}></img>
        <Black></Black>
        <div className='des'>
            <p>{props.txt1}</p>
            <p>{props.txt2}</p>
            <p>{props.txt3}</p>
        </div>
    </RecWrap>
  )
}

export default RecWrapComponent;

const RecWrap = styled.div`
    width: 95%;
    border-radius: 15px;
    position: relative;
`

const Black = styled.div`
    background: linear-gradient(0deg, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4));
    width: 100%;
    height: 100%;
    border-radius: 15px;
    position: absolute;
    z-index: 1;
    top: 0;
    left: 0;
`