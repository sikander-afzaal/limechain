import React from "react";
import Choose from "./Choose";
import Hero from "./Hero";
function Index() {
  return (
    <div>
      <div className="bg-hero-pattern bg-cover">
        <Hero />
        <Choose />
      </div>
    </div>
  );
}

export default Index;
