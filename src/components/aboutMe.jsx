import React from "react";
import Background from "../Images/background.jpg"



const AboutMe = () => {
    return  <div style={{backgroundImage:`url(${Background})`}} className="md:h-4/6 h-full w-full bg-cover p-3">
        <h1 className="lg:text-5xl text-4xl text-white text-center font-bold pt-5 h-1/6 font-Nanum">About Daurah</h1>
        <div className="w-full md:h-5/6 flex flex-col md:flex-row md:items-center md:justify-evenly">
        <div className="md:w-3/6">
        <div className="relative">
             <div className="h-76 mt-5 absolute inset-0 bg-black rounded-lg blur-xl"></div> 
             <p className="md:leading-snug lg:text-lg text-white text-left prose-base p-5 font-sans font-semibold text-sm relative">Self-taught guitarist and jazz-trained singer/songwriter Daurah Bernadette creates soulful, heartfelt melodic enchantments. In 2019, she released her first self-produced single, Say Nothing (Baked), which brought to light her multi-instrumental talents. Since then, she has released various covers and beats on all streaming platforms. She is known for her sultry harmonies, intimate lyrics, and incorporation of various audio samples. Daurah Bernadette's dynamic tracks encompass a variety of genres, including indie-pop, alternative rock, neo-soul, R&B, Hip Hop, folk, etc. Her influences include Erykah Badu, Solange, Hiatus Kaiyote, The Weepies, Tegan and Sara, The Internet, and Emily King. Daurah Bernadette continues to produce and release music regularly, most of which is created in her own bedroom.</p>  
        </div>       
        </div>        
            <iframe className="lg:w-5/12 md:w-3/6 md:h-5/6 w-96 h-64 self-center" src="https://www.youtube.com/embed/r4GIsGA38yM?start=2" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" ></iframe>
        </div>
    </div>
}
export default AboutMe;