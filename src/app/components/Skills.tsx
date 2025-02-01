import React from "react";

const Skills = () => {
  return (
    <>
   
<div className="skills-wrapper">
    <h1>
        My Skills
    </h1>
</div>



      {/* cards */}
      <div className="parent">
        {/* left 4cards */}
        <div className="main-box glass">

          {/* card1  */}
          {/* html  */}
          <div className="box1 glass1">
            {/* html icon */}
            <div className="logo">
              <img src="/images/html2.webp" alt="html" />
            </div>
            {/* prgressbar  */}
            <div className="soft-prog">
              <div className="softwere">HTML - 90%</div>
              <div className="progress">
                <div
                  className="progress-bar progress-bar-striped progress-bar-animated"
                 
                  style={{ width: "90%" }} 
                >
                </div>
              </div>
            </div>
            {/* prgressbar  ends*/}
          </div>

        {/* card2  */}
          <div className="box1 glass1">
            {/* html icon */}
            <div className="logo next">
              <img src="/images/next3.png" alt="html" />
            </div>
            {/* prgressbar  */}
            <div className="soft-prog">
              <div className="softwere">Next.js - 70%</div>
              <div className="progress">
                <div
                  className="progress-bar progress-bar-striped progress-bar-animated"
                 
                  style={{ width: "70%" }} 
                >
                </div>
              </div>
            </div>
            {/* prgressbar  ends*/}
          </div>

          {/* card3  */}
          {/* css  */}
          <div className="box1 glass1">
            {/* html icon */}
            <div className="logo">
              <img src="/images/css.webp" alt="html" />
            </div>
            {/* prgressbar  */}
            <div className="soft-prog">
              <div className="softwere">CSS - 75%</div>
              <div className="progress">
                <div
                  className="progress-bar progress-bar-striped progress-bar-animated"
                 
                  style={{ width: "75%" }} 
                >
                </div>
              </div>
            </div>
            {/* prgressbar  ends*/}
          </div>

          {/* card4  */}
          <div className="box1 glass1">
            {/* html icon */}
            <div className="logo">
              <img src="/images/tailwind.webp" alt="html" />
            </div>
            {/* prgressbar  */}
            <div className="soft-prog">
              <div className="softwere">Tailwind CSS - 75%</div>
              <div className="progress">
                <div
                  className="progress-bar progress-bar-striped progress-bar-animated"
                 
                  style={{ width: "75%" }} 
                >
                </div>
              </div>
            </div>
            {/* prgressbar  ends*/}
                    </div>




          {/* card1  */}
          {/* bootstrap */}
          <div className="box1 glass1">
            {/* html icon */}
            <div className="logo boot">
              <img src="/images/boots.png" alt="html" />
            </div>
            {/* prgressbar  */}
            <div className="soft-prog">
              <div className="softwere">BootStrap - 45%</div>
              <div className="progress">
                <div
                  className="progress-bar progress-bar-striped progress-bar-animated"
                 
                  style={{ width: "45%" }} 
                >
                </div>
              </div>
            </div>
            {/* prgressbar  ends*/}
          </div>

        {/* card2  */}
          <div className="box1 glass1">
            {/* html icon */}
            <div className="logo">
              <img src="/images/figma.webp" alt="html" />
            </div>
            {/* prgressbar  */}
            <div className="soft-prog">
              <div className="softwere">Figma - 70%</div>
              <div className="progress">
                <div
                  className="progress-bar progress-bar-striped progress-bar-animated"
                 
                  style={{ width: "70%" }} 
                >
                </div>
              </div>
            </div>
            {/* prgressbar  ends*/}
          </div>

          {/* card3  */}
          {/* javascript */}
          <div className="box1 glass1">
            {/* html icon */}
            <div className="logo">
              <img src="/images/JAVA.webp" alt="html" />
            </div>
            {/* prgressbar  */}
            <div className="soft-prog">
              <div className="softwere">JavaScript - 50%</div>
              <div className="progress">
                <div
                  className="progress-bar progress-bar-striped progress-bar-animated"
                 
                  style={{ width: "50%" }} 
                >
                </div>
              </div>
            </div>
            {/* prgressbar  ends*/}
                    </div>

          {/* card4  */}
          <div className="box1 glass1">
            {/* html icon */}
            <div className="logo">
              <img src="/images/ts.webp" alt="html" />
            </div>
            {/* prgressbar  */}
            <div className="soft-prog">
              <div className="softwere">TypeScript - 75%</div>
              <div className="progress">
                <div
                  className="progress-bar progress-bar-striped progress-bar-animated"
                 
                  style={{ width: "75%" }} 
                >
                </div>
              </div>
            </div>
            {/* prgressbar  ends*/}
          </div>
                  

        </div>

 

      </div>
      {/* cards end*/}

     
    </>
  );
};

export default Skills;
