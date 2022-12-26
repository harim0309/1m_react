import React, {useRef} from 'react';
import '../style/navigation.scss'
import ImgComponent from './ImageComponent';
import { useNavigate, Link, useLocation } from "react-router-dom";

const Navigation = () => {

    // const home = useRef(true);

    const location = useLocation().pathname;

    const navigate = useNavigate();

    const goToSearch = () => {
        navigate('/search');
        // home(false);
    }  

    const goToHome = () => {
        navigate('/Index');
        // home(true);
    }

    // const homeon = () =>{
    //     location.includes("Index");
    //     // home(true);
    // }

  return (
    <div className='navigationWrap'>
        <ImgComponent onClick={goToHome} src={'icon01_on.png'}  class={location.includes("Index") ? 'home selected' : 'home'}  />
        <ImgComponent src={'icon02_on.png'} class={'calendar'} />
        <ImgComponent src={'icon03_on.png'} class={'live'} />
        <ImgComponent onClick={goToSearch} src={'icon04_on.png'} class={location.includes("search") ? 'search selected' : 'search'}  />
        <ImgComponent src={'icon05_on.png'} class={'my'} />
    </div>
  )
}

export default Navigation;
