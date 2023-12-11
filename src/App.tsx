import BottomBar from "./components/BottomBar";
import PeopleGrid from "./components/PeopleGrid";
import getPeopleData from "./util/PeopleDataProvider";

//fontawesome
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faFacebook,
  faLinkedin,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";

const App = () => {
  const { people, seed } = getPeopleData();
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
        <PeopleGrid people={people} />
      </div>
      <BottomBar
        urlFacebook="https://www.facebook.com/nils.nahooy"
        urlGithub="https://github.com/fj0lverkr"
        urlLinkedIn="https://www.linkedin.com/in/nilsnahooy/"
        seed={seed}
        source="https://randomuser.me/"
      />
    </>
  );
};
export default App;
library.add(faFacebook, faLinkedin, faGithub);
