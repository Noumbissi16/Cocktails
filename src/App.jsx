import gsap from "gsap";
import About from "./components/About";
import Art from "./components/Art";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import Menu from "./components/Menu";
import { SplitText, ScrollTrigger} from "gsap/all"

gsap.registerPlugin(SplitText, ScrollTrigger);
function App() {

  return (
    <main>
      <Navbar />
      <Menu />
      {/* <About /> */}
      {/* <Contact /> */}
      {/* <Art /> */}
    </main>
  );
}

export default App;
