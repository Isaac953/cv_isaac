"use client";

import React, { useState, useEffect, useLayoutEffect, useRef } from "react";
import "./Layout.scss";
import { Photo } from "./cards/01_photo/Photo";
import { Contact } from "./cards/02_contact/Contact";
import { Profile } from "./cards/03_profile/Profile";
import { About } from "./cards/04_about/About";
import { SoftSkills } from "./cards/05_softskils/SoftSkills";
import { Works } from "./cards/06_works/Works";
import { Works2 } from "./cards/06_works/Works2";
import { Languages } from "./cards/07_languages/Languages";
import { Education } from "./cards/08_education/Education";
import { Frontend } from "./cards/09_frontend/Frontend";
import { Backend } from "./cards/10_backend/Backend";
import { Database } from "./cards/11_database/Database";
import { Certifications } from "./cards/12_certifications/Certifications";
import { Programs } from "./cards/13_programs/Programs";

export const Main = () => {
  // const [height, setHeight] = useState(0);
  let container = useRef(null);
  let [heightDiv, setHeight] = useState(null);
  useLayoutEffect(() => setHeight(container.current.offsetHeight), []);

  useEffect(() => {
    let newHeight = container.current.offsetHeight;
    const updateWindowDimensions = () => {
      // const newHeight = window.innerHeight;
      // setHeight(newHeight);
      // console.log("updating height");

      console.log(newHeight);
      if (newHeight >= 1195) {
        newHeight = 1200;
        setHeight(newHeight);
        console.log(newHeight);
        console.log("updating height");
      } else if (newHeight < 1195 && newHeight >= 893) {
        newHeight = 900;
        setHeight(newHeight);
        console.log(newHeight);
        console.log("updating height");
      } else if (newHeight < 893 && newHeight >= 839) {
        newHeight = 880;
        setHeight(newHeight);
        console.log(newHeight);
        console.log("updating height");
      }
      // setHeight(newHeight);
      // console.log("updating height");
    };
    window.addEventListener("resize", updateWindowDimensions);
    return () => window.removeEventListener("resize", updateWindowDimensions);
  }, []);

  // console.log("give height", heightDiv);

  return (
    // <main className="main" style={{ height: heightDiv }}>
    <main className="main">
      {/* {heightDiv} */}
      <section className="main__page marginb">
        <section className="main__page--contact">
          <Photo />
          <hr className="hr-wh"></hr>
          <Contact />
          <hr className="hr-wh"></hr>
          <Languages />
          <hr className="hr-wh"></hr>
          <SoftSkills />
          <hr className="hr-wh"></hr>
        </section>
        <section className="main__page--experience" ref={container}>
          <Profile />
          <hr className="hr-bg"></hr>
          <About />
          <hr className="hr-bg"></hr>
          <Works />
        </section>
      </section>

      <section className="main__page marginb">
        <section className="main__page--contact">
          <hr className="hr-wh margint"></hr>
        </section>
        <section className="main__page--experience" ref={container}>
          <hr className="hr-bg margint"></hr>
          <Works2 />
        </section>
      </section>

      <section className="main__page marginb2">
        <section className="main__page--contact">
          <hr className="hr-wh margint"></hr>
          <Frontend />
          <hr className="hr-wh"></hr>
          <Backend />
          <hr className="hr-wh"></hr>
          <Database />
        </section>
        <section className="main__page--experience" ref={container}>
          <hr className="hr-bg margint"></hr>
          <Education />
          <hr className="hr-bg"></hr>
          <Certifications />
          <hr className="hr-bg"></hr>
          <Programs />
        </section>
      </section>
    </main>
  );
};
