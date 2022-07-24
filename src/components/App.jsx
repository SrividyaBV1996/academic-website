import React from "react";
import {
  HashRouter,
  Routes,
  Route,
} from "react-router-dom";
import Bio from "./BioComponent";
import Header from "./common/Header";
import Home from "./Home";
import Publications from "./PublicationsComponent/index";
import TalksAndSeminars from "./TalksAndSeminars";
import TeachingComponent from "./TeachingComponent";
import { MathJaxContext } from "better-react-mathjax";
import BlogsComponent from "./BlogsComponent";
import RamanAndHisInnerClock from "./BlogsComponent/RamanAndHisInnerClockBlog";
import PhdLifeBlog from "./BlogsComponent/PhdLifeBlog";

const App = () => {
  const config = {
    loader: { load: ["[tex]/html"] },
    tex: {
      packages: { "[+]": ["html"] },
      inlineMath: [
        ["$", "$"],
        ["\\(", "\\)"]
      ],
      displayMath: [
        ["$$", "$$"],
        ["\\[", "\\]"]
      ]
    }
  };

  document.addEventListener("scroll", () => {
    var mybutton = document.getElementById("myBtn");
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      mybutton.style.display = "block";
    } else {
      mybutton.style.display = "none";
    }
  });

  const goToTop = () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  };

  return (
    <MathJaxContext version={3} config={config}>
      <HashRouter>
        <Header />
          <div className="contentContainer">
            <div className="container col-md-12 col-lg-8">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/publications" element={<Publications />} />
                <Route path="/talksAndSeminars" element={<TalksAndSeminars />} />
                <Route path="/teaching" element={<TeachingComponent />} />
                <Route path="/bio" element={<Bio />} />
                <Route path="/blogs" element={<BlogsComponent />} />
                <Route path="/blogs/raman-and-his-inner-clock" element={<RamanAndHisInnerClock />} />
                <Route path="/blogs/what-1756-days-of-phd-life-has-taught-me" element={<PhdLifeBlog />} />
              </Routes>
            </div>
          </div>
          <button type="button" onClick={() => goToTop()} id="myBtn" className="topButton"><i class="fas fa-angle-up"></i></button>
      </HashRouter>
    </MathJaxContext>
  );
};

export default App;