import { useDispatch, useSelector } from "react-redux";
import { login } from "./../redux/actions/auth.action";
import Image from "next/image";
import Loading from "./Loading";
function LoginPage() {
  const loading = useSelector((store) => store.auth.loading);
  const dispatch = useDispatch();
  const handleLogin = () => {
    dispatch(login());
  };

  return (
    <div
      className="w-full bg-gray-200  flex justify-center items-center"
      style={{ minHeight: "100vh" }}
    >
      <div className="bg-white overflow-hidden relative shadow rounded-md px-7 py-10 w-[90%] sm:max-w-sm flex justify-center items-center flex-col">
        {loading && <Loading />}
        <div className="w-[145px] sm:w-[180px]">
          <Image src="/img/yt-play.png" width="320" height="225" />
        </div>
        <h1 className="text-gray-900 font-bold text-2xl mt-3 text-center">
          YouTube Clone
        </h1>
        <button
          className="bg-red-600 hover:bg-red-700 duration-150 text-lg mt-3 text-white font-medium text-center py-2 px-5 w-[85%] sm:w-64 rounded"
          onClick={handleLogin}
        >
          Login with Google
        </button>

        <p className="text-gray-600 text-center mt-5">
          This project is made with React, Redux, Firebase Auth, Next Js,
          Tailwind Css & Youtube Data Api.{" "}
          <span className="text-black font-semibold">
            <span className="text-red-600">❤</span> By Saymon
          </span>
        </p>
        <div className="flex items-center flex-col">
          <p className="text-gray-600 text-center mt-5">
            Feel free to login and play with this clone.
          </p>
          <span className="bg-yellow-200 text-black font-medium">
            Your data will never be collected.
          </span>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
