import { findIconDefinition } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import CSS from "csstype";

interface Props {
  urlFacebook: string;
  urlLinkedIn: string;
  urlGithub: string;
  source: string;
  seed: string;
}

const BottomBar = ({
  urlFacebook,
  urlLinkedIn,
  urlGithub,
  source,
  seed,
}: Props) => {
  const footerStyle: CSS.Properties = {
    backgroundColor: "#f1f1f1",
  };

  const bottomStyle: CSS.Properties = {
    backgroundColor: "rgba(0, 0, 0, 0.2)",
  };

  const facebookIcon = findIconDefinition({
    prefix: "fab",
    iconName: "facebook",
  });

  const linkedInIcon = findIconDefinition({
    prefix: "fab",
    iconName: "linkedin",
  });

  const ghIcon = findIconDefinition({
    prefix: "fab",
    iconName: "github",
  });

  return (
    <footer
      className="text-center text-white fixed-bottom font-mulish"
      style={footerStyle}
    >
      <div className="container pt-1">
        <section className="mb-1">
          <a
            className="btn btn-link btn-floating btn-md text-dark"
            href={urlFacebook}
            target="_blank"
            role="button"
            data-mdb-ripple-color="dark"
          >
            <FontAwesomeIcon icon={facebookIcon} />
          </a>
          <a
            className="btn btn-link btn-floating btn-md text-dark"
            href={urlLinkedIn}
            target="_blank"
            role="button"
            data-mdb-ripple-color="dark"
          >
            <FontAwesomeIcon icon={linkedInIcon} />
          </a>
          <a
            className="btn btn-link btn-floating btn-md text-dark"
            href={urlGithub}
            target="_blank"
            role="button"
            data-mdb-ripple-color="dark"
          >
            <FontAwesomeIcon icon={ghIcon} />
          </a>
        </section>
      </div>
      <div className="text-center text-dark px-3 py-1" style={bottomStyle}>
        <small>
          Seed used: {seed} | Data fetched from{" "}
          <a href={source} target="_blank">
            {source}
          </a>
        </small>
      </div>
    </footer>
  );
};

export default BottomBar;
