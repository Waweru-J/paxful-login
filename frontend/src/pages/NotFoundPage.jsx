
import { Link } from "react-router-dom";
import { FaExclamationTriangle } from "react-icons/fa";

const NotFoundPage = () => {
  return (
    <div className="text-center py-20">
      <FaExclamationTriangle className="text-red-500 text-6xl mx-auto" />
      <h1 className="text-4xl font-bold mt-4">Page Not Found</h1>
      <p className="text-gray-600 mt-2">The page youre looking for doesnt exist.</p>
      <Link
        to="/"
        className="mt-6 inline-block bg-blue-600 text-white py-2 px-6 rounded"
      >
        Go Back Home
      </Link>
    </div>
  );
};

export default NotFoundPage;
