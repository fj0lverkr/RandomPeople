import Person from "../model/Person";

interface Props {
  person?: Person;
}

const PersonModal = ({ person }: Props) => {
  return (
    <>
      <div
        className="modal fade"
        id="personDataModal"
        aria-labelledby="personDataLabel"
        aria-hidden="true"
        tabIndex={-1}
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="personDataLabel">
                {person?.name.title ?? "No person selected yet"}{" "}
                {person?.name.first ?? ""} {person?.name.last ?? ""}
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">...</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PersonModal;
