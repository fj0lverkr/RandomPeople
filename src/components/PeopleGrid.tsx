interface Props {
  people: any[];
}

//TODO: make grid responsive.
//TODO: move card to individual component.

const PeopleGrid = ({ people }: Props) => {
  return (
    <>
      {people.length === 0 && <p>No data was fetched...</p>}
      <div className="container text-center grid gap-0 column-gap-3 mt-4 pt-4">
        {people.map((grid, index) => (
          <div className="row p-2" id="row0" key={index}>
            {grid.map((row: any) => (
              <div className="col" key={row.login.uuid}>
                <div className="card">
                  <div className="card-body">
                    <img
                      className="rounded-circle shadow-4-strong mx-auto d-block"
                      src={row.picture.large}
                    />
                    <p className="font-mulish">
                      {row.name.first} {row.name.last}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </>
  );
};

export default PeopleGrid;
