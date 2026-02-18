import { useState } from "react";
import { useNavigate } from "react-router-dom";
import img from "../assets/img/profile.png";

export default function Login() {
    const navigate = useNavigate();
    
    // 1. State untuk simpan input user
    const [formData, setFormData] = useState({
        email: "",
        password: ""
    });

    // 2. Handle perubahan input ketikan
    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault(); 

        try {
            // Kirim data ke backend (POST, bukan GET)
            const response = await fetch("http://localhost:5050/api/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            });

            const data = await response.json();

            if (response.ok && data.token) {
                // Simpan token
                localStorage.setItem("token", data.token);
                localStorage.setItem("userEmail", data.email);
                
                // Pindah halaman dengan cara React yang benar
                navigate("/contact"); 
            } else {
                alert(data.message || "Login gagal");
            }
        } catch (error) {
            console.error("Error:", error);
        }
    };

    return (
        <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8 mt-10">
            {/* ... Bagian Logo ... */}
            <img alt="Your Company" src={img} className="mx-auto h-32 w-auto"/>
            <h2 className="mt-10 text-center text-2xl/9 font-bold tracking-tight text-white">Sign in to your account</h2>
            <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                <form className="space-y-6" onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="email" className="block text-sm/6 font-medium text-gray-100">Email address</label>
                        <div className="mt-2">
                            <input
                                id="email"
                                name="email"
                                type="email"
                                required
                                // Tambahkan value dan onChange
                                value={formData.email}
                                onChange={handleChange}
                                className="block w-full rounded-md bg-white/5 px-3 py-1.5 text-base text-white..."
                            />
                        </div>
                    </div>

                    <div>
                        <div className="flex items-center justify-between">
                            <label htmlFor="password" className="block text-sm/6 font-medium text-gray-100">Password</label>
                        </div>
                        <div className="mt-2">
                            <input
                                id="password"
                                name="password"
                                type="password"
                                required
                                value={formData.password}
                                onChange={handleChange}
                                className="block w-full rounded-md bg-white/5 px-3 py-1.5 text-base text-white..."
                            />
                        </div>
                    </div>

                    <div>
                        <button type="submit" className="...">Sign in</button>
                    </div>
                </form>
            </div>
        </div>
    );
}