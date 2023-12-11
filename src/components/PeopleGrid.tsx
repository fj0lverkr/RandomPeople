import { useState } from "react";
import Person from "../model/Person";
import PeopleTile from "./PeopleTile";
import PersonModal from "./PersonModal";

interface Props {
  people: Person[];
}

//TODO: make grid more responsive.

const PeopleGrid = ({ people }: Props) => {
  const [selectedPerson, setSelectedPerson] = useState<Person>(people[0]);
  const handleTileOnClick = (clickedPerson: Person) => {
    setSelectedPerson(clickedPerson);
  };
  return (
    <>
      {people.length === 0 && <p>No data was fetched...</p>}
      <PersonModal person={selectedPerson} />
      <div className="container mt-4">
        <div className="row g-3">
          {people.map((person) => (
            <div className="col-3" key={person.login.uuid}>
              <PeopleTile personObject={person} onClick={handleTileOnClick} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default PeopleGrid;
