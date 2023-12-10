import PeopleTile from "./PeopleTile";

interface Props {
  people: any[];
}

//TODO: make grid responsive.

const PeopleGrid = ({ people }: Props) => {
  return (
    <>
      {people.length === 0 && <p>No data was fetched...</p>}
      <div className="container text-center grid gap-0 column-gap-3 mt-4 pt-4">
        {people.map((grid, index) => (
          <div className="row p-2" id="row0" key={index}>
            {grid.map((row: any) => (
              <div className="col" key={row.login.uuid}>
                <PeopleTile personObject={row} />
              </div>
            ))}
          </div>
        ))}
      </div>
    </>
  );
};

export default PeopleGrid;
