import { Link, useNavigate } from "react-router-dom";
function AlgorithmSelector({ isSolved, setIsSolving, setAlgorithm }) {
  return (
    <div>
      {isSolved ? null : (
        <div className="w-max mx-auto mt-5 flex">
          <button
            onClick={(e) => {
              setAlgorithm("backTracking");
              setIsSolving(true);
            }}
            className="m-2 text-white bg-red-500 px-8 py-2 text-xl rounded-lg shadow-lg hover:bg-indigo-900 cursor-pointer mx-1"
          >
            Back tracking
          </button>

          <button
            onClick={(e) => {
              setAlgorithm("backTrackingWithMRV");
              setIsSolving(true);
            }}
            className="m-2 text-white bg-red-500 px-8 py-2 text-xl rounded-lg shadow-lg hover:bg-indigo-900 cursor-pointer mx-1"
          >
            Back tracking + MRV
          </button>
            
          
        </div>
      )}
      <div className="w-max mx-auto mt-5 flex">
      <button className="text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">
            <Link to="/Puzzle3clue">Clue & Guide</Link>{" "}
          </button>
          <button className="text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">
            <Link to="/contestpage">Puzzle Page</Link>{" "}
          </button>
          </div>
    </div>
  );
}

export default AlgorithmSelector;
