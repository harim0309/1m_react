import React from 'react'
import ImgComponent from '../ImageComponent';

const BannerComponent = (props) => {
  return (
    <div className={props.class}>
        <div className="txtwrap">
            <p>{props.txt}</p>
            <div><span className='artist'>{props.artist}</span><span>{props.title}</span></div>
        </div>
        <div id='gra' className={props.gra}></div>
        <ImgComponent src={'banner01.png'} />
    </div>
  )
}

export default BannerComponent;