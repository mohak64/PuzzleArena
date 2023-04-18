function getText(setIsLoadingFile, isLoadingFile, isSolved, isSolving) {
  if (isSolving) return "";
  if (!isSolved && !isLoadingFile)
    return (
      <div>
        Set the board by clicking on blocks or click{" "}
        <span
          onClick={(e) => {
            setIsLoadingFile(true);
          }}
          className="text-indigo-600 font-bold cursor-pointer"
        >
          here
        </span>{" "}
        to load from file
      </div>
    );
  if (!isSolved && isLoadingFile) return <div>Paste file content</div>;
  return <div>Solved!</div>;
}

function Header({ setIsLoadingFile, isLoadingFile, isSolved, isSolving }) {
  return (
    <div>
      <div>
        <h1 className=" mt-4 text-center text-3xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-6xl">
          <span className="text-transparent bg-clip-text bg-gradient-to-r to-red-600 from-purple-400">
            Sudoku solver
          </span>
        </h1>
      </div>
      <div className="text-center text-xl mt-3 text-gray-600 w-max mx-auto">
        {getText(setIsLoadingFile, isLoadingFile, isSolved, isSolving)}
        <span className="text-lg text-red-600 font-mono">
          This app may fail on wrong input!
        </span>
      </div>
    </div>
  );
}

export default Header;
