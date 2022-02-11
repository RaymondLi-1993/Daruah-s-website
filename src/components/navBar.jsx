import React, {useEffect, useState} from "react";
import {Instagram, TikTok, Spotify, AppleMusic, Youtube} from "../components/Icons/socialmedia";

const NavBar = () => {

  const [scrolling, setScrolling] = useState(false);


  useEffect(() => {
    function onScroll() {
      let currentPosition = window.pageYOffset; // or use document.documentElement.scrollTop;
      if (currentPosition > 0) {
        // downscroll code
        setScrolling(currentPosition);
      } 
    }
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, [setScrolling]);

    return <div className={`m-auto w-96 flex justify-evenly fixed inset-x-0 z-50 ${scrolling > 35 ?"opacity-70":"opacity-100"}`}>
                 <a href="https://www.instagram.com/daurahbernadette/" target="_blank" rel="noopener noreferrer"><Instagram /></a>
                 <a href="https://www.tiktok.com/@daurah.bernadette" target="_blank" rel="noopener noreferrer"><TikTok /></a>  
                 <a href="https://open.spotify.com/artist/0dW3wt00zZKptwhSgOtLOt" target="_blank" rel="noopener noreferrer"><Spotify /></a>  
                 <a href="https://music.apple.com/us/artist/daurah-bernadette/1527734391" target="_blank" rel="noopener noreferrer"><AppleMusic /></a>  
                 <a href="https://www.youtube.com/channel/UCSxRi6XGDLETnpshGfE5y7Q" target="_blank" rel="noopener noreferrer"><Youtube /></a>
             </div>
          
}


export default NavBar;