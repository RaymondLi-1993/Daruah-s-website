import { ParallaxBanner, ParallaxProvider} from 'react-scroll-parallax';
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
              <h1 className="text-8xl text-white font-thin">Daurah Bernadette</h1>
            </div>
          ),
        },
      ]}
      className="h-full"
    >
      <div className="absolute inset-0 flex items-center justify-center">
        <h1 className="text-8xl text-white font-thin"></h1>
      </div>
    </ParallaxBanner>
        <div style={{backgroundImage:`url(${Background})`}} className="w-full flex flex-row h-3/5 p-3 bg-cover bg-no-repeat">
          <div className="w-1/2 h-full p-5">
                <div className="relative">
                    <div className="w-2/5 h-full m-auto p-2 absolute inset-0 bg-white rounded-xl blur"></div>
                    <img className="w-2/5 h-4/6 m-auto p-2 rounded-lg relative" src={Hero}/> 
                </div>       
                <p className="p-12 leading-normal text-base font-sans font-semibold text-white">Daurah is currently releasing a project consisting of 4 singles called ‘soft spot demos’. all completely produced and performed by her. The project shows the journey of self-discovery through the inner turmoils that come from heartbreak. Join Daurah Bernadette on this journey by tuning in here.</p>  
          </div>
   
          <div className="w-1/2 h-2/3 flex justify-center items-center p-5 opacity-75">
          <iframe className="w-full h-full rounded-lg shadow-xl" src="https://open.spotify.com/embed/artist/0dW3wt00zZKptwhSgOtLOt?utm_source=generator&theme=0"  allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe>
          </div>
        </div>
    <ParallaxBanner
      layers={[{ image: `${Scene}`, speed: -20}]}
      className="h-60"
    />
    </ParallaxProvider>
    </div>
}


export default ParallaxComp;