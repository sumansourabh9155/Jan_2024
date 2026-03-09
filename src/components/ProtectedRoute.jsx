import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";

const ProtectedRoute = ({ children, correctPassword }) => {
  const [password, setPassword] = useState("");
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password === correctPassword) {
      setIsAuthenticated(true);
    } else {
      navigate(-1); // redirect to previous page
    }
  };

  if (isAuthenticated) return children;

  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center space-y-4 px-4">
      <Helmet>
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>
      <h2 className="text-xl font-semibold">Enter Password to Access</h2>
      <form onSubmit={handleSubmit} className="space-y-4 w-full max-w-xs">
        <input
          type="password"
          placeholder="Password"
          value={password}
          className="w-full p-2 rounded bg-gray-900 border border-gray-600 text-white"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button
          type="submit"
          className="w-full bg-white text-black py-2 rounded hover:opacity-80 transition"
        >
          Unlock
        </button>
      </form>
    </div>
  );
};

export default ProtectedRoute;
