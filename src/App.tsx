import { useState } from "react";
import BottomBar from "./components/BottomBar";
import PeopleGrid from "./components/PeopleGrid";

//fontawesome
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faFacebook,
  faLinkedin,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";

const App = () => {
  const [seed, setSeed] = useState("");

  const onSetSeed = (newSeed: string) => {
    setSeed(newSeed);
  };
  return (
    <>
      <div className="container">
        <h1 className="font-adamina display-1">Random People</h1>
        <p className="lead font-mulish ms-4 mt-4">
          A simple demo app made using React, TypeScript and Bootstrap 5.
        </p>
        <p className="font-mulish ms-4">
          Showcase of getting some complex data from a REST endpoint, presenting
          it to the user and allowing some user interaction.
        </p>
        <PeopleGrid onSeedChange={onSetSeed} />
      </div>
      <BottomBar
        urlFacebook="https://www.facebook.com/nils.nahooy"
        urlGithub="https://github.com/fj0lverkr"
        urlLinkedIn="https://www.linkedin.com/in/nilsnahooy/"
        source="https://randomuser.me/"
        seed={seed}
      />
    </>
  );
};
export default App;
library.add(faFacebook, faLinkedin, faGithub);
