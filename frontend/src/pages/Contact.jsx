import { useState, useEffect } from "react";

export default function Contact({ setToken }) {
  const [userEmail, setUserEmail] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const emailYangLogin = localStorage.getItem("userEmail");

    if (!emailYangLogin) {
      setUserEmail("Not Logged In");
      setLoading(false);
      return;
    }

    fetch(`http://localhost:5050/api/me?email=${emailYangLogin}`)
      .then(res => res.json())
      .then(data => {
        console.log("USER DATA:", data);
        setUserEmail(data?.email || "Not Logged In");
        setLoading(false);
      })
      .catch(err => {
        console.error("Fetch error:", err);
        setUserEmail("Not Logged In");
        setLoading(false);
      });
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!userEmail || userEmail === "Not Logged In") {
      alert("Silakan login dulu!");
      return;
    }

    const name = e.target.name.value;
    const message = e.target.message.value;

    try {
      const res = await fetch("http://localhost:5050/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          name,
          email: userEmail,
          message
        })
      });

      const data = await res.json();

      console.log("SERVER RESPONSE:", data);

      if (!res.ok) {
        alert("Server error ❌");
        return;
      }

      if (data.success) {
        alert("Pesan terkirim ✅");
        e.target.reset();
      } else {
        alert("Gagal kirim ❌");
      }

    } catch (err) {
      console.error("Submit error:", err);
      alert("Server tidak terhubung!");
    }
  };

  return (
    <section id="contact" className="py-20 bg-[#020617]">
      <h2 className="text-3xl font-bold text-center mb-10 text-white">
        Contact Us
      </h2>

      <div className="max-w-3xl mx-auto px-6">
        <form
          onSubmit={handleSubmit}
          className="bg-[#020617] text-white border-2 border-[#51a2ff] p-8 rounded-lg"
        >
          {/* Name */}
          <div className="mb-6">
            <label className="block text-gray-300 mb-2 font-semibold">
              Name
            </label>
            <input
              name="name"
              required
              className="w-full px-4 py-2 border rounded-lg text-white"
            />
          </div>

          <div className="mb-6">
            <label className="block text-gray-300 mb-2 font-semibold">
              Email Anda
            </label>
            <input
              value={userEmail}
              readOnly
              className="w-full px-4 py-2 bg-gray-800 border border-gray-600 rounded-lg text-gray-400"
            />
            <p className="text-xs text-blue-400 mt-1">
              {loading
                ? "Mengambil email akun..."
                : "*Email otomatis dari akun login"}
            </p>
          </div>

          {/* Message */}
          <div className="mb-6">
            <label className="block text-gray-300 mb-2 font-semibold">
              Message
            </label>
            <textarea
              name="message"
              rows="5"
              required
              className="w-full px-4 py-2 border rounded-lg text-[#D1D5DB]"
            />
          </div>

          <div className="text-center">
            <button
              disabled={loading}
              className="bg-blue-500 px-6 py-2 rounded-lg hover:bg-blue-600 transition"
            >
              {loading ? "Loading..." : "Send Message"}
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
