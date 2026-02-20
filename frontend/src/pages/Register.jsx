import { useState } from "react";
import { useNavigate } from "react-router-dom";
import img from "../assets/img/profile.png";

export default function Register() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: ""
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("http://localhost:5050/api/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          username: formData.username,
          email: formData.email,
          password: formData.password
        })
      });

      const data = await res.json();

      if (res.ok) {
        alert("Register berhasil");
        navigate("/login");
      } else {
        alert(data.message || "Register gagal");
      }
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <section className="bg-gray-50 dark:bg-gray-900">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen">
        <img className="w-10 h-10 mb-4" src={img} alt="logo" />

        <div className="w-full bg-white rounded-lg shadow sm:max-w-md dark:bg-gray-800">
          <div className="p-6 space-y-4">
            <h2 className="text-xl font-bold text-gray-900 dark:text-white">
              Create an account
            </h2>

            <form className="space-y-4" onSubmit={handleSubmit}>
            <div>
                <label htmlFor="username" className="block mb-2 text-sm font-medium">
                  username
                </label>
                <input
                  type="text"
                  name="username"
                  required
                  value={formData.username}
                  onChange={handleChange}
                  className="w-full p-2.5 rounded-lg bg-[#1a1b26] text-white"
                />
              </div>

              <div>
                <label htmlFor="email" className="block mb-2 text-sm font-medium">
                  Your email
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full p-2.5 rounded-lg bg-[#1a1b26] text-white"
                />
              </div>

              <div>
                <label htmlFor="password" className="block mb-2 text-sm font-medium">
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  required
                  value={formData.password}
                  onChange={handleChange}
                  className="w-full p-2.5 rounded-lg bg-[#1a1b26] text-white"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-2.5 rounded-lg"
              >
                Create an account
              </button>

              <p className="text-sm text-gray-400">
                Already have an account?{" "}
                <span
                  className="text-blue-400 cursor-pointer"
                  onClick={() => navigate("/login")}
                >
                  Login here
                </span>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}