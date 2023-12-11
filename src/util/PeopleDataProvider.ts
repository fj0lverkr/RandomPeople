import { useEffect, useState } from "react";
import Person from "../model/Person";

const getPeopleData = () => {
  const [people, setPeople] = useState<Person[]>([]);
  const [seed, setSeed] = useState("");

  const fetchRandomPeople = () => {
    fetch("https://randomuser.me/api/?results=12")
      .then((response) => {
        return response.json();
      })
      .then((data: any) => {
        let peopleList = [];
        for (var i = 0; i < data.results.length; i++) {
          let person = new Person(data.results[i]);
          peopleList.push(person);
        }
        setPeople(peopleList);
        setSeed(data.info.seed);
        console.log(peopleList);
      });
  };

  useEffect(() => {
    //Note that React.StrictMode causes this to trigger twice as it renders twice (when running in dev)
    fetchRandomPeople();
  }, []);
  return { people, seed };
};

export default getPeopleData;
