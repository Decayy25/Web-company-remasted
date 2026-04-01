import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import img from "../assets/img/profile.png";
import AuthForm from "../components/organism/AuthForm";
import Card from "../components/atoms/Card";
import SectionLayout from "../components/organism/SectionLayout";
import Title from "../components/atoms/Title";

export default function Login({ setToken }) {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
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
      const response = await fetch(`${import.meta.env.VITE_API_URL}/api/auth/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
      });

      const data = await response.json();

      if (response.ok && data.token) {
        localStorage.setItem("token", data.token);
        localStorage.setItem("userEmail", data.email);
        setToken(data.token);
        navigate("/");
      } else {
        alert(data.message || "Login gagal");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const fields = [
    {
      label: "Email address",
      name: "email",
      type: "email",
      value: formData.email,
      onChange: handleChange,
      placeholder: "Enter your email",
      required: true
    },
    {
      label: "Password",
      name: "password",
      type: "password",
      value: formData.password,
      onChange: handleChange,
      placeholder: "Enter your password",
      required: true
    }
  ];

  return (
    <SectionLayout id="login" title="Sign in to your account" subtitle="Masuk untuk mengelola akses aplikasi siswa dan admin">
      <div className="flex justify-center">
        <Card className="w-full max-w-md p-8 border border-blue-500/30">
          <div className="flex flex-col items-center gap-4 mb-8">
            <img alt="Login" src={img} className="h-28 w-28 rounded-full object-cover" />
            <Title center>Login</Title>
          </div>

          <AuthForm fields={fields} onSubmit={handleSubmit} buttonText="Sign in" />

          <p className="text-sm text-gray-300 mt-6 text-center">
            Belum punya akun?{' '}
            <Link to="/register" className="text-blue-400 hover:underline">
              Register here
            </Link>
          </p>
        </Card>
      </div>
    </SectionLayout>
  );
}