import React from "react";
import Background from "../Images/background.jpg"



const AboutMe = () => {
    return  <div style={{backgroundImage:`url(${Background})`}} className="w-full bg-cover h-4/6 p-3">
        <h1 className="text-white text-center font-bold text-5xl pt-10 h-1/6">About Daurah</h1>
        <div className="w-full h-5/6 flex flex-row items-center justify-center">
            <iframe className="w-1/3 h-5/6" src="https://www.youtube.com/embed/r4GIsGA38yM?start=2" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" ></iframe>  
            <p className="text-white prose-base font-bold w-2/6 p-5 leading-loose">Self-taught guitarist and jazz-trained singer/songwriter Daurah Bernadette creates soulful, heartfelt melodic enchantments. In 2019, she released her first self-produced single, Say Nothing (Baked), which brought to light her multi-instrumental talents. Since then, she has released various covers and beats on all streaming platforms. She is known for her sultry harmonies, intimate lyrics, and incorporation of various audio samples. Daurah Bernadette's dynamic tracks encompass a variety of genres, including indie-pop, alternative rock, neo-soul, R&B, Hip Hop, folk, etc. Her influences include Erykah Badu, Solange, Hiatus Kaiyote, The Weepies, Tegan and Sara, The Internet, and Emily King. Daurah Bernadette continues to produce and release music regularly, most of which is created in her own bedroom.</p>
        </div>
    </div>
}
export default AboutMe;