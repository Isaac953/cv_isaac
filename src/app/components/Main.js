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
import { Atestado_01 } from "./cards/14_atestado_01/Atestado_01";
import { Atestado_02 } from "./cards/14_atestado_02/Atestado_02";
import { Atestado_03 } from "./cards/14_atestado_02/Atestado_03";
import { Atestado_04 } from "./cards/14_atestado_02/Atestado_04";
import { Atestado_05 } from "./cards/14_atestado_02/Atestado_05";
import { Atestado_06 } from "./cards/14_atestado_02/Atestado_06";
import { Atestado_07 } from "./cards/14_atestado_02/Atestado_07";
import { Atestado_08 } from "./cards/14_atestado_02/Atestado_08";
import { Atestado_09 } from "./cards/14_atestado_02/Atestado_09";
import { Atestado_10 } from "./cards/14_atestado_02/Atestado_10";
import { Atestado_11 } from "./cards/14_atestado_02/Atestado_11";
import { Atestado_12 } from "./cards/14_atestado_02/Atestado_12";
import { Atestado_13 } from "./cards/14_atestado_02/Atestado_13";
import { Atestado_14 } from "./cards/14_atestado_02/Atestado_14";
import { Atestado_15 } from "./cards/14_atestado_02/Atestado_15";
import { Atestado_16 } from "./cards/14_atestado_02/Atestado_16";
import { Atestado_17 } from "./cards/14_atestado_02/Atestado_17";
import { Atestado_18 } from "./cards/14_atestado_02/Atestado_18";
import { Atestado_19 } from "./cards/14_atestado_02/Atestado_19";
import { Atestado_20 } from "./cards/14_atestado_02/Atestado_20";

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

      <section className="main__page marginb">
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

      <section className="main__page2 marginb">
        <hr className="hr-bg2"></hr>
        <Atestado_01 />
      </section>
      <section className="main__page2 marginb">
        <Atestado_02 />
      </section>
      <section className="main__page2 marginb">
        <Atestado_03 />
      </section>
      <section className="main__page2 marginb">
        <Atestado_04 />
      </section>
      <section className="main__page2 marginb">
        <Atestado_05 />
      </section>
      <section className="main__page2 marginb">
        <Atestado_06 />
      </section>
      <section className="main__page2 marginb">
        <Atestado_07 />
      </section>
      <section className="main__page2 marginb">
        <Atestado_08 />
      </section>
      <section className="main__page2 marginb">
        <Atestado_09 />
      </section>
      <section className="main__page2 marginb">
        <Atestado_10 />
      </section>
      <section className="main__page2 marginb">
        <Atestado_11 />
      </section>
      <section className="main__page2 marginb">
        <Atestado_12 />
      </section>
      <section className="main__page2 marginb">
        <Atestado_13 />
      </section>
      <section className="main__page2 marginb">
        <Atestado_14 />
      </section>
      <section className="main__page2 marginb">
        <Atestado_15 />
      </section>
      <section className="main__page2 marginb">
        <Atestado_16 />
      </section>
      <section className="main__page2 marginb">
        <Atestado_17 />
      </section>
      <section className="main__page2 marginb">
        <Atestado_18 />
      </section>
      <section className="main__page2 marginb">
        <Atestado_19 />
      </section>
      <section className="main__page2 marginb">
        <Atestado_20 />
      </section>
    </main>
  );
};
