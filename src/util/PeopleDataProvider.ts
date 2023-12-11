import { useEffect, useState } from "react";
import Person from "../model/Person";

const GetPeopleData = () => {
  const [people, setPeople] = useState<Person[][]>([]);
  const [seed, setSeed] = useState("");

  const fetchRandomPeople = () => {
    fetch("https://randomuser.me/api/?results=10")
      .then((response) => {
        return response.json();
      })
      .then((data: any) => {
        let peopleGrid = [];
        let peopleRow = [];
        for (var i = 0; i < data.results.length; i++) {
          let person = new Person(data.results[i]);
          peopleRow.push(person);
          if ((i + 1) % 5 === 0) {
            peopleGrid.push(peopleRow);
            peopleRow = [];
          }
        }
        setPeople(peopleGrid);
        setSeed(data.info.seed);
        console.log(peopleGrid);
      });
  };

  useEffect(() => {
    //Note that React.StrictMode causes this to trigger twice as it renders twice (when running in dev)
    fetchRandomPeople();
  }, []);
  return { people, seed };
};

export default GetPeopleData;
