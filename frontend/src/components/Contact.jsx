import React, { useState, useEffect } from "react";

export default function Contact() {
    const [userEmail, setUserEmail] = useState("Loading...");
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const emailYangLogin = localStorage.getItem("emailAktif");

        if (emailYangLogin) {
            // 2. Fetch data spesifik user ini saja
            fetch(`http://127.0.0.1:5050/api/me?email=${emailYangLogin}`)
                .then(res => res.json())
                .then(data => {
                    if (data && data.email) {
                        setUserEmail(data.email);
                    }
                    setLoading(false);
                })
                .catch(err => {
                    console.error("Error fetching account:", err);
                    setLoading(false);
                });
        } else {
            setUserEmail("Not Logged In");
            setLoading(false);
        }
    }, []);

    return (
        <section id="contact" className="py-20 bg-[#020617]">
            <h2 className="text-3xl font-bold text-center mb-10 text-white">Contact Us</h2>
            <div className="max-w-3xl mx-auto px-6">
                <form className="bg-[#020617] text-white border-3 border-[#51a2ff] p-8 rounded-lg" id="contact-form">
                    
                    {/* Input Name */}
                    <div className="mb-6">
                        <label htmlFor="name" className="block text-gray-300 font-semibold mb-2">Name</label>
                        <input type="text" id="name" name="name" required className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 text-black" />
                    </div>

                    {/* Input Email (Otomatis) */}
                    <div className="mb-6">
                        <label className="block text-gray-300 font-semibold mb-2">Email Anda</label>
                        <input 
                            type="email" 
                            value={userEmail} 
                            readOnly 
                            className="w-full px-4 py-2 bg-gray-800 border border-gray-600 rounded-lg text-gray-400 cursor-not-allowed"
                        />
                        <p className="text-xs text-blue-400 mt-1">
                            {loading ? "Mencari akun..." : "*Email otomatis terisi dari akun Anda"}
                        </p>
                    </div>
                    
                    {/* Input Message */}
                    <div className="mb-6">
                        <label htmlFor="message" className="block text-gray-300 font-semibold mb-2">Message</label>
                        <textarea id="message" name="message" rows="5" required className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 text-black"></textarea>
                    </div>

                    <div className="text-center">
                        <button type="submit" className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition duration-300">
                            Send Message
                        </button>
                    </div>
                </form>
            </div>
        </section>
    );
}