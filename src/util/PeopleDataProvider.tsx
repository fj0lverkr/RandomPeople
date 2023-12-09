import { useEffect, useState } from "react";

export default function GetPeopleData() {
  const [people, setPeople] = useState<any[]>([]);
  const [seed, setSeed] = useState("");

  const fetchRandomPeople = () => {
    fetch("https://randomuser.me/api/?results=15")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data);
        var peopleGrid = [];
        var peopleRow = [];
        for (var i = 0; i < data.results.length; i++) {
          peopleRow.push(data.results[i]);
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
}
