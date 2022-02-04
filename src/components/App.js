import { ParallaxProvider } from 'react-scroll-parallax';
import NavBar from "./navBar";
import ParallaxComp from "./Parallax";


function App() {
  return (
    <div className="w-screen h-screen m-0 p-0">
      <NavBar />
      <ParallaxProvider>
      <ParallaxComp />
      </ParallaxProvider>

    </div>
  );
}

export default App;
