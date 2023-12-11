import { MouseEvent } from "react";
import Person from "../model/Person";

interface Props {
  personObject: any;
  onClick: (p: Person) => void;
}
const PeopleTile = ({ personObject, onClick }: Props) => {
  const handleMouseHoverEvent = (e: MouseEvent<HTMLDivElement>) => {
    e.preventDefault();
    if (e.type === "mouseenter") {
      e.currentTarget.classList.remove("shadow-sm");
      e.currentTarget.classList.add("shadow");
    } else {
      e.currentTarget.classList.remove("shadow");
      e.currentTarget.classList.add("shadow-sm");
    }
  };
  const handleTileClicked = (e: MouseEvent<HTMLDivElement>) => {
    e.preventDefault();
    onClick(personObject);
  };
  return (
    <>
      <div
        role="button"
        className="card shadow-sm"
        onMouseEnter={handleMouseHoverEvent}
        onMouseLeave={handleMouseHoverEvent}
        onClick={handleTileClicked}
        data-bs-toggle="modal"
        data-bs-target="#personDataModal"
      >
        <div className="card-body text-center">
          <img
            className="rounded-circle shadow-4-strong mx-auto d-block"
            src={personObject.picture.large}
          />
          <p className="font-mulish mt-1">
            {personObject.name.first} {personObject.name.last}
          </p>
        </div>
      </div>
    </>
  );
};

export default PeopleTile;
