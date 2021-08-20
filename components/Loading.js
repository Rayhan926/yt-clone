import ScaleLoader from "react-spinners/ScaleLoader";
function Loading() {
  return (
    <div className="absolute top-0 left-0 w-full h-full z-10 flex justify-center items-center bg-white bg-opacity-90">
      <ScaleLoader color="red" />
    </div>
  );
}

export default Loading;
