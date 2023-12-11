import { MouseEvent } from "react";
interface Props {
  personObject: any;
}
const PeopleTile = ({ personObject }: Props) => {
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
  return (
    <>
      <div
        role="button"
        className="card shadow-sm"
        onMouseEnter={handleMouseHoverEvent}
        onMouseLeave={handleMouseHoverEvent}
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
