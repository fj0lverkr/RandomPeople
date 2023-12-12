import Person from "../model/Person";
import PeopleTile from "./PeopleTile";
import PersonModal from "./PersonModal";
import { effect, signal } from "@preact/signals-react";

//TODO: make grid more responsive.

const people = signal<Person[]>(await fetchRandomPeople());
const dataSeed = signal("");
const selectedPerson = signal<Person>(people.value[0]);

async function fetchRandomPeople() {
  const peopleList: Promise<Person[]> = new Promise((resolve) => {
    const list: Person[] = [];
    fetch("https://randomuser.me/api/?results=12")
      .then((response) => {
        return response.json();
      })
      .then((data: any) => {
        for (var i = 0; i < data.results.length; i++) {
          let person = new Person(data.results[i]);
          person.generatedBySeed = data.info.seed;
          list.push(person);
        }
        resolve(list);
      });
  });
  return peopleList;
}

effect(() => {
  dataSeed.value = people.value[0].generatedBySeed;
});

const PeopleGrid = () => {
  const handleTileOnClick = (clickedPerson: Person) => {
    selectedPerson.value = clickedPerson;
  };
  return (
    <>
      {people.value.length === 0 && <p>No data was fetched...</p>}
      <PersonModal person={selectedPerson.value} />
      <div className="container mt-4">
        <div className="row g-3">
          {people.value.map((person) => (
            <div className="col-3" key={person.login.uuid}>
              <PeopleTile personObject={person} onClick={handleTileOnClick} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

let seed = dataSeed.value;
export { PeopleGrid, seed };
