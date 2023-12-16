import { MouseEvent } from "react";
import Person from "../model/Person";

interface Props {
  personObject: Person;
  itemIndex: string;
  onClick: (p: Person) => void;
  onSwapClick: (i: string) => void;
}
const PeopleTile = ({
  personObject,
  itemIndex,
  onClick,
  onSwapClick,
}: Props) => {
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
  const handleTileClicked = () => {
    onClick(personObject);
  };

  const handleButtonClicked = (e: MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    onSwapClick(itemIndex);
  };

  return (
    <>
      <div
        className="card shadow-sm cursor-pointer"
        onMouseEnter={handleMouseHoverEvent}
        onMouseLeave={handleMouseHoverEvent}
      >
        <div
          className="card-body text-center"
          onClick={handleTileClicked}
          data-bs-toggle="modal"
          data-bs-target="#personDataModal"
        >
          <img
            className="rounded-circle shadow-4-strong mx-auto d-block"
            src={personObject.picture.large}
          />
          <p className="font-mulish mt-1">
            {personObject.name.first} {personObject.name.last}
          </p>
        </div>
        <button
          type="button"
          className="btn btn-outline-dark btn-sm mx-5 mb-2"
          onClick={handleButtonClicked}
        >
          Swap me
        </button>
      </div>
    </>
  );
};

export default PeopleTile;
