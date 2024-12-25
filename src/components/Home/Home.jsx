// home

import Contact from "./contact/Contact";
import Plans from "./plans/Plans";
import Summary from "./summary/Summary";

export default function HomeScreen() {
  return (
    <div>
      <Summary />
      <Plans />
      <Contact />
    </div>
  );
}