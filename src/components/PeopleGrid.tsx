import Person from "../model/Person";
import PeopleTile from "./PeopleTile";
import PersonModal from "./PersonModal";
import { effect, signal } from "@preact/signals-react";

//TODO: make grid more responsive.

const state = {
  people: signal(await fetchRandomPeople(8)),
  seed: signal(""),
};
const selectedPerson = signal<Person>(state.people.value[0]);

async function fetchRandomPeople(numResults: number) {
  const peopleList: Promise<Person[]> = new Promise((resolve) => {
    const list: Person[] = [];
    fetch("https://randomuser.me/api/?results=" + numResults)
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
  state.seed.value = state.people.value[0].generatedBySeed;
});

const PeopleGrid = () => {
  const handleTileOnClick = (clickedPerson: Person) => {
    selectedPerson.value = clickedPerson;
  };

  const swapPersonOnClicked = async (rowNumber: number) => {
    const tempArray: Person[] = Object.assign([], state.people.value);
    const newPeople: Person[] = await fetchRandomPeople(1);
    tempArray[rowNumber] = newPeople[0];
    state.people.value = Object.assign([], tempArray);
  };

  return (
    <>
      {state.people.value.length === 0 && <p>No data was fetched...</p>}
      <PersonModal person={selectedPerson.value} />
      <div className="container mt-4">
        <div className="row g-3">
          {state.people.value.map((person, index) => (
            <div className="col-3" key={person.login.uuid}>
              <PeopleTile
                personObject={person}
                itemIndex={index}
                onClick={handleTileOnClick}
                onSwapClick={swapPersonOnClicked}
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

let seed = state.seed.value;
export { PeopleGrid, seed };
