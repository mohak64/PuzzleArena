import view from "../../public/viewfinder.png";

export const Instructions = ({ onDismiss: dismiss }) => {
  return (
    <div
      className="position-fixed w-100 h-100 d-flex flex-column justify-content-center"
      style={{ zIndex: 2000, backgroundColor: "rgba(0,0,0,0.6)" }}
    >
      <div
        className="card align-self-center"
        style={{ width: "80%", maxWidth: "500px" }}
      >
        <div className="card-header d-flex justify-content-between">
          <span>Instructions</span>
          <button
            type="button"
            className="btn-close"
            aria-label="Close"
            onClick={() => dismiss()}
          >
            <svg
              aria-hidden="true"
              class="w-5 h-5 ml-2 -mr-1"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </button>
        </div>
        <div className="card-body justify-start">
          <ol>
            <li>
            • Use the map's pan/zoom functions to frame your guess location
              within the viewfinder circle.
            </li>
            <li className="d-flex flex-column">
              <img className="align-self-center" alt="" src={view} />
            </li>
            <li>
            • Circle color indicates whether you're getting hotter or colder!
            </li>
            <li>• Feel free to ask for a hint -- it won't cost you a thing.</li>
            <li>
            • You can also opt to "Reveal", but beware it counts against your
              score.
            </li>
          </ol>
        </div>
      </div>
    </div>
  );
};
