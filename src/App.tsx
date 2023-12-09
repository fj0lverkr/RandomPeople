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
      <div className="mx-5 px-5 mt-4">
        <h1 className="mx-5 my-4 font-adamina display-1">Random People</h1>
      </div>
      <PeopleGrid people={people} />
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
