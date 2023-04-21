
import { Link, useNavigate } from "react-router-dom";
export const Intro = ({
  className,
  style,
  title,
  description,
  hero,
  onDismiss: dismiss,
}) => {
  className = className + " d-flex justify-content-center align-items-center";
  return (
    <div id="intro" className={className} style={style}>
      <div
        id="inner"
        className="d-flex flex-column-reverse flex-md-row h-100 w-100 justify-content-center align-items-center p-3 p-md-4"
      >
        <div
          className="flex-grow-1 flex-shrink-0 d-flex flex-column overflow-hidden m-2 m-md-3"
          style={{
            maxWidth: "600px",
            flexBasis: "50%",
            backgroundColor: "rgba(255,255,255,0.8)",
          }}
        >
          <div className="overflow-hidden">
            <h1 className="display-3 fw-bold mb-3">{title}</h1>
            <h2
              className=""
              style={{ fontFamily: "Literata", fontWeight: 300 }}
            >
              {description}
            </h2>
          </div>
          <button
            type="button"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded align-self-start mt-3 mt-md-5"
            onClick={() => dismiss()}
          >
            Get started! >>
          </button>
          
        </div>
        <div
          className="flex-grow-1 h-100 w-100 m-2 m-md-3"
          style={{
            flexBasis: "50%",
            maxWidth: "600px",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            backgroundSize: "cover",
            maxHeight: "500px",
          }}
        >
          <img src="https://esri.github.io/treasure-hunt-app/statue_of_liberty.jpg"></img>
        </div>
      </div>
    </div> /*intro*/
  );
};
