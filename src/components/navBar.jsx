import React from "react";
import {Instagram, TikTok, Spotify, AppleMusic, Youtube} from "../components/Icons/socialmedia";

const NavBar = () => {
    return <div className="w-full h-12 bg-pineMist">
        <div className="m-auto w-96 flex justify-evenly">
        <Instagram /> 
        <TikTok />
        <Spotify />
        <AppleMusic />   
        <Youtube />
        </div>
    </div>
}


export default NavBar;