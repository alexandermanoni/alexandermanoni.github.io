// home

import Contact from "./contact/Contact";
import Plans from "./plans/Plans";
import Summary from "./summary/Summary";

export default function HomeScreen() {
  return (
    <div className="
      mx-auto
      w-[650px]
      cursor-default
      space-y-4
      pt-4
    ">
      <div className="
        text-2xl antialiased font-semibold
      ">
        Peter's Drum Lessons
      </div>
      <Summary />
      <Plans />
      <Contact />
    </div>
  );
}