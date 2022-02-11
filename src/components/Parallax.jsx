import { ParallaxBanner, ParallaxProvider} from 'react-scroll-parallax';
import NavBar from "./navBar";
import AboutMe from "./aboutMe";
import ContactMe from "./contactMe";
import Scene from "../Images/scenery.jpg";
import Daurah from "../Images/daurah.jpg";
import Hero from "../Images/Hero.jpg"
import Background from "../Images/background.jpg"

const ParallaxComp = () => {
    return <div className="w-full h-full">
      <ParallaxProvider>
      <ParallaxBanner
      layers={[
        { image: `${Daurah}`, speed: 20 },
        {
          speed: -15,
          children: (
            <div className="absolute inset-0 flex items-center justify-center">
              <h1 className="md:text-8xl text-center text-6xl text-pineMist font-thin font-Nanum">Daurah Bernadette</h1>
            </div>
          ),
        },
      ]}
      className="h-full"
    >
    </ParallaxBanner>
    <NavBar />
        <div style={{backgroundImage:`url(${Background})`}} className="md:flex-row md:h-3/5 w-full flex flex-col p-3 bg-cover bg-no-repeat h-full">
          <div className="w-full h-1/2 md:w-1/2 md:h-full p-5">
                <div className="relative">
                    <div className="lg:w-60 lg:h-60 w-0 h-0 invisible md:visible m-auto p-5 absolute inset-0 bg-black rounded-xl blur-sm"></div>
                    <img alt="Daurah" className="lg:w-60 lg:h-60 w-0 h-0 invisible md:visible m-auto p-2 rounded-lg relative" src={Hero}/> 
                </div>   
                <div className="relative">
                <div className="h-60 lg:h-40 mt-5 absolute inset-0 bg-black rounded-lg blur-xl"></div>  
                <p className="p-5 pb-2 leading-loose text-base font-sans relative text-white">Daurah is currently releasing a project consisting of 4 singles called ‘soft spot demos’. all completely produced and performed by her. The project shows the journey of self-discovery through the inner turmoils that come from heartbreak. Join Daurah Bernadette on this journey by tuning in here.</p>
                </div>    
                  
          </div>
   
          <div className="w-full h-1/2 md:w-1/2 md:h-full p-5">
          <iframe title="spotify player" className="w-full h-full rounded-lg shadow-xl opacity-75" src="https://open.spotify.com/embed/artist/0dW3wt00zZKptwhSgOtLOt?utm_source=generator&theme=0"  allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe>
          </div>
        </div>
    <ParallaxBanner
      layers={[{ image: `${Scene}`, speed: -20}]}
      className="h-60"
    />
    </ParallaxProvider>
    <AboutMe/>
    <ContactMe />
    </div>
}


export default ParallaxComp;
