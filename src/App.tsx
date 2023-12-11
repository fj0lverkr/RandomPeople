import BottomBar from "./components/BottomBar";
import PeopleGrid from "./components/PeopleGrid";
import GetPeopleData from "./util/PeopleDataProvider";

//fontawesome
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faFacebook,
  faLinkedin,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";

const App = () => {
  const { people, seed } = GetPeopleData();
  return (
    <>
      <div className="container">
        <h1 className="font-adamina display-1">Random People</h1>
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
