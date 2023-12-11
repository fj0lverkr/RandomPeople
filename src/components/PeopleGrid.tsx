import Person from "../model/Person";
import PeopleTile from "./PeopleTile";

interface Props {
  people: any[];
}

//TODO: make grid responsive.

const PeopleGrid = ({ people }: Props) => {
  return (
    <>
      {people.length === 0 && <p>No data was fetched...</p>}
      <div className="container mt-4 pt-4">
        <div className="row g-4">
          {people.map((person: Person) => (
            <div className="col-3" key={person.login.uuid}>
              <PeopleTile personObject={person} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default PeopleGrid;
