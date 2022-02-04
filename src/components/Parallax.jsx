import { ParallaxBanner} from 'react-scroll-parallax';
import Scene from "../Images/scenery.jpg";
import Daurah from "../Images/daurah.jpg";

const ParallaxComp = () => {
    return <div className="w-full h-full">
      <ParallaxBanner
      layers={[
        { image: `${Daurah}`, speed: 25 },
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
        <div className=" bg-pineMist w-full h-3/5"></div>
        <ParallaxBanner
      layers={[{ image: `${Scene}`, speed: -10}]}
      className="h-2/5"
    />
       
        <div className=" bg-earth w-full h-1/2"></div>
    </div>
    
}


export default ParallaxComp;