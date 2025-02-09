import styles from "./style";

//import useScripts from "./useScripts";

import {
  Hero,
  AboutUs,
  NavBar,
  Tracks,
  Sponsors,
  FAQ,
  Footer,
  Timeline,
  PrizeSection,
} from "./components";

//import { useEffect } from "react";
<link />;

const App = () => (
  <div className=" bg-primary w-full overflow-hidden">
    <div className={` ${styles.paddingX} ${styles.flexCenter}`}>
      <div className={` ${styles.boxWidth} top-0 fixed mx-auto z-50`}>
        <NavBar />
      </div>
    </div>
    <div className={`bg-primary ${styles.flexStart}`}>
      <div className={`sec ${styles.boxWidth}`}>
        <Hero />
      </div>
    </div>
    <div className={` ${styles.paddingX} ${styles.flexStart}`}>
      <div className={`${styles.boxWidth} w-full`}>
        <div className={`${styles.paddingY} bg-primary `} id="aboutus">
          <AboutUs />
        </div>
        <div className="sec bg-primary " id="tracks">
          <Tracks />
        </div>
        <div className="sec bg-primary" id="prizes">
          <PrizeSection />
        </div>
        <div className="sec bg-primary" id="timeline">
          <Timeline />
        </div>
        <div className="sec bg-primary" id="sponsors">
          <Sponsors />
        </div>
        <div className="sec bg-primary" id="faq">
          <FAQ />
        </div>
        <div className="sec bg-primary" id="footer">
          <Footer />
        </div>
      </div>
    </div>
  </div>
);
export default App;
