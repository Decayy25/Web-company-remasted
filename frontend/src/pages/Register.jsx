import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import img from "../assets/img/profile.png";
import AuthForm from "../components/organism/AuthForm";
import Card from "../components/atoms/Card";
import SectionLayout from "../components/organism/SectionLayout";
import Title from "../components/atoms/Title";

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
      const res = await fetch(`${import.meta.env.VITE_API_URL}/api/auth/register`, {
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

  const fields = [
    {
      label: "Username",
      name: "username",
      type: "text",
      value: formData.username,
      onChange: handleChange,
      placeholder: "Enter your username",
      required: true
    },
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
    <SectionLayout id="register" title="Create an account" subtitle="Daftar untuk mendapatkan akses pengguna baru">
      <div className="flex justify-center">
        <Card className="w-full max-w-md p-8 border border-blue-500/30">
          <div className="flex flex-col items-center gap-4 mb-8">
            <img alt="Register" src={img} className="h-28 w-28 rounded-full object-cover" />
            <Title center>Register</Title>
          </div>

          <AuthForm fields={fields} onSubmit={handleSubmit} buttonText="Create an account" />

          <p className="text-sm text-gray-300 mt-6 text-center">
            Already have an account?{' '}
            <Link to="/login" className="text-blue-400 hover:underline">
              Login here
            </Link>
          </p>
        </Card>
      </div>
    </SectionLayout>
  );
}