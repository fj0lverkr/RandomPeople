interface Props {
  personObject: any;
}
const PeopleTile = ({ personObject }: Props) => {
  return (
    <>
      <div className="card">
        <div className="card-body">
          <img
            className="rounded-circle shadow-4-strong mx-auto d-block"
            src={personObject.picture.large}
          />
          <p className="font-mulish">
            {personObject.name.first} {personObject.name.last}
          </p>
        </div>
      </div>
    </>
  );
};

export default PeopleTile;
