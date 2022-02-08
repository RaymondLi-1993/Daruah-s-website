import React from "react";
import Background from "../Images/background.jpg"
import Aboutme from "../Images/aboutMe.jpg"


const AboutMe = () => {
    return  <div style={{backgroundImage:`url(${Background})`}} className="w-full bg-cover h-5/6 p-3">
        <h1 className="text-white text-center">About me</h1>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/r4GIsGA38yM?start=2" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        {/* <div className="w-full h-full flex justify-evenly items-center">
            <div className="w-1/3 h-full flex justify-end items-center">
            </div>
            <div className="w-2/3 h-full flex items-center justify-center">
            <p className="text-white prose-base font-bold w-1/3">Self-taught guitarist and jazz-trained singer/songwriter Daurah Bernadette creates soulful, heartfelt melodic enchantments. In 2019, she released her first self-produced single, Say Nothing (Baked), which brought to light her multi-instrumental talents. Since then, she has released various covers and beats on all streaming platforms. She is known for her sultry harmonies, intimate lyrics, and incorporation of various audio samples. Daurah Bernadette's dynamic tracks encompass a variety of genres, including indie-pop, alternative rock, neo-soul, R&B, Hip Hop, folk, etc. Her influences include Erykah Badu, Solange, Hiatus Kaiyote, The Weepies, Tegan and Sara, The Internet, and Emily King. Daurah Bernadette continues to produce and release music regularly, most of which is created in her own bedroom.</p>
            <img src={Aboutme} className="w-3/6 h-2/3 p-3"></img>
            
            </div>
        </div> */}
    </div>
}
export default AboutMe;