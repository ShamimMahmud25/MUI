import Home from "./Components/Home";
import {
  Routes,
  Route
} from "react-router-dom";
import Page1 from "./Components/Page1";
import Page2 from "./Components/Page2";
import Page3 from "./Components/Page3";
import Page4 from "./Components/Page4";
import Page5 from "./Components/Page5";
import Page6 from "./Components/Page6";
import Page7 from "./Components/Page7";
import Page8 from "./Components/Page8";
import Page9 from "./Components/Page9";
import Layout from "./Components/HelpingComponent/Layout";
function App() {
  return (
    <Layout>
    <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/page1" element={<Page1/>}/>
        <Route path="/page2" element={<Page2/>}/>
        <Route path="/page3" element={<Page3/>}/>
        <Route path="/page4" element={<Page4/>}/>
        <Route path="/page5" element={<Page5/>}/>
        <Route path="/page6" element={<Page6/>}/>
        <Route path="/page7" element={<Page7/>}/>
        <Route path="/page8" element={<Page8/>}/>
        <Route path="/page9" element={<Page9/>}/>
  
    </Routes>
    </Layout>
  );
}

export default App;
