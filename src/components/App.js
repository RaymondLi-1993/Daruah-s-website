import NavBar from "./navBar";
import ParallaxComp from "./Parallax";
import AboutMe from "./aboutMe";

function App() {
  return (
    <div className="w-screen h-screen m-0 p-0">
      <NavBar />
      <ParallaxComp />
      <div className="h-5/6 w-full"></div>
      <AboutMe/>
    </div>
  );
}

export default App;
