import Person from "../model/Person";
import blank from "../assets/blank.jpg";

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
              <h1
                className="modal-title fs-5 font-adamina"
                id="personDataLabel"
              >
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
            <div className="modal-body font-mulish">
              <div className="grid">
                <div className="row">
                  <div className="col-4">
                    <img src={person?.picture.large ?? blank} />
                  </div>
                  <div className="col-8">
                    <p>
                      {person?.name.title ?? ""} {person?.name.first ?? ""}{" "}
                      {person?.name.last ?? ""}
                    </p>

                    <a
                      href={
                        "https://maps.google.com/?ll=" +
                        (person?.location.coordinates.latitude ?? "") +
                        "," +
                        (person?.location.coordinates.longitude ?? "")
                      }
                      target="_blank"
                    >
                      <p>
                        {person?.location.street.name ?? ""}{" "}
                        {person?.location.street.streetnumber ?? ""}
                        <br />
                        {person?.location.postcode ?? ""}
                        {", "}
                        {person?.location.city ?? ""}
                        <br />
                        {person?.location.state ?? ""}{" "}
                        {person?.location.country ?? ""}
                      </p>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PersonModal;
