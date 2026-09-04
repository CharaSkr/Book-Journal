import { useState } from "react";
import { useNavigate } from "react-router-dom";
import useAuthStore from "../stores/authStore";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const login = useAuthStore((state) => state.login);

  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();

    if (email === "admin@bookjournal.com" && password === "123456") {
      login();
      navigate("/dashboard");
    } else {
      setError("Invalid email or password");
    }
  };

  return (
    <main className="min-h-[calc(100vh-73px)] flex items-center justify-center px-6">
      <div className="w-full max-w-md">
        <h1 className="text-3xl font-bold text-center mb-2">Welcome back</h1>

        <p className="text-gray-600 text-center mb-8">
          Log in to your Book Journal
        </p>

        {error && <p className="text-red-600 text-sm mb-4">{error}</p>}

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block text-sm font-medium mb-2">Email</label>

            <input
              type="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              className="w-full border rounded-lg px-4 py-3"
              placeholder="you@example.com"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">Password</label>

            <input
              type="password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              className="w-full border rounded-lg px-4 py-3"
              placeholder="••••••••"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-black text-white py-3 rounded-lg font-medium hover:bg-gray-800"
          >
            Login
          </button>
        </form>
      </div>
    </main>
  );
}

export default Login;
