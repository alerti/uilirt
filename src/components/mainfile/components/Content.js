import React from "react";
import "./Content.scss";
import love from "../../../assets/love.png";

function Content() {
  return (
    <div className="content__words">
      <img src={love} alt="love" />
      <p>
      If each day a flower climbs up to your lips to seek me, ah my love, ah my
      own, in me all that fire is repeated, in me nothing is extinguished or
      forgotten, my love feeds on your love, beloved, and as long as you live it
      will be in your arms without leaving mine.
      </p>
      <div>
        Now. Time hates love, wants love poor but love spins gold, gold, gold
        from straw.
      </div>
      <div>
       ~ Your babe.
      </div>
    </div>
  );
}

export default Content;
