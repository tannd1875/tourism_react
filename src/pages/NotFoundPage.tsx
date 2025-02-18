import { Link } from "react-router-dom";

const NotFoundPage = () => {
  return (
    <div className="text-2xl text-black mt-40 ml-20">
      Page not found! Redirect to
      <Link
        to="/"
        className="italic ml-2 text-blue-500 hover:underline hover:cursor-pointer"
      >
        Home page
      </Link>
    </div>
  );
};

export default NotFoundPage;
