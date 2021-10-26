import React from "react";
import { Link } from "react-router-dom";
import fusion from "fusion-analytics-js";

export default function MyPorfile() {
  fusion.init(
    "<YOUR-FUSION-TOKEN>",
    "https://fusion-event-collector.herokuapp.com",
    true
  );
  fusion.register({ ice_cream: "vanilla-chocolate" });
  fusion.track("icecream");
  fusion.unregister("ice_cream");
  fusion.track("no-icecream");
  fusion.track("Pageview");
  return (
    <div>
      <h1>This is my profile</h1>
      <Link to="/">Go back to home</Link>
    </div>
  );
}
