import React from "react";
import Home2 from "./Home2";
import Home1 from "./Home1";


function Home() {
  return (
    <div className="background">
      <Home1 style={{ zindex: "1" }}/>
      <Home2 />
    </div>
    
  );
}

export default Home;
