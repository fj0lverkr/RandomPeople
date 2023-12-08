import { useEffect, useState } from "react";

export default function PeopleGrid() {
  const [people, setPeople] = useState<any[]>([]);
  const [seed, setSeed] = useState("");

  const fetchRandomPeople = () => {
    fetch("https://randomuser.me/api/?results=12")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data);
        var peopleGrid = [];
        var peopleRow = [];
        for (var i = 0; i < data.results.length; i++) {
          peopleRow.push(data.results[i]);
          if ((i + 1) % 3 === 0) {
            peopleGrid.push(peopleRow);
            peopleRow = [];
          }
        }
        setPeople(peopleGrid);
        console.log(peopleGrid);
        setSeed(data.info.seed);
      });
  };

  useEffect(() => {
    fetchRandomPeople();
  }, []);

  return (
    <>
      {people.length === 0 && <p>No data was fetched...</p>}
      <div className="container text-center grid gap-0 column-gap-3">
        {people.map((grid, index) => (
          <div className="row p-2" id="row0" key={index}>
            {grid.map((row: any) => (
              <div className="col" key={row.login.uuid}>
                <img
                  className="rounded-circle shadow-4-strong mx-auto d-block"
                  src={row.picture.large}
                />
                {row.name.first} {row.name.last}
              </div>
            ))}
          </div>
        ))}
      </div>
      <footer className="bg-info text-center text-lg-start fixed-bottom">
        <div className="container p-2">
          Seed used: {seed} | Data fetched from{" "}
          <a href="https://randomuser.me/">https://randomuser.me/</a>
        </div>
      </footer>
    </>
  );
}
