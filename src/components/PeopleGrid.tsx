import { useEffect } from "react";
import Person from "../model/Person";
import PeopleTile from "./PeopleTile";
import PersonModal from "./PersonModal";
import { signal } from "@preact/signals-react";

interface Props {
  onSeedChange: (seed: string) => void;
}

const state = {
  people: signal(await fetchRandomPeople(8)),
  selectedPerson: signal<Person | undefined>(undefined),
};

const seed = signal("");

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

const PeopleGrid = ({ onSeedChange }: Props) => {
  useEffect(() => {
    seed.value = state.people.value[0].generatedBySeed;
  }, [state.people.value]);

  useEffect(() => onSeedChange(seed.value), [seed.value]);

  const handleTileOnClick = (clickedPerson: Person) => {
    state.selectedPerson.value = clickedPerson;
  };

  const swapPersonOnClicked = async (rowNumber: string) => {
    const newPeople: Person[] = await fetchRandomPeople(1);
    state.people.value = state.people.value.map((person) => {
      if (person.UUID === rowNumber) {
        person = newPeople[0];
      }
      return { ...person, generatedBySeed: newPeople[0].generatedBySeed };
    });
  };

  return (
    <>
      {state.people.value.length === 0 && <p>No data was fetched...</p>}
      <PersonModal person={state.selectedPerson.value} />
      <div className="container mt-4">
        <div className="row g-3">
          {state.people.value.map((person) => (
            <div className="col-3" key={person.UUID}>
              <PeopleTile
                personObject={person}
                itemIndex={person.UUID}
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

export default PeopleGrid;
