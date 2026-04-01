import { useState, useEffect } from "react";
import PageTemplate from "../components/templates/PageTemplate";
import SectionLayout from "../components/organism/SectionLayout";
import Input from "../components/atoms/Input";
import TextArea from "../components/atoms/TextArea";
import Button from "../components/atoms/Button";

export default function Contact({ setToken }) {
  const [userEmail, setUserEmail] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const emailYangLogin = localStorage.getItem("userEmail");

    fetch(`${import.meta.env.VITE_API_URL}/api/me?email=${emailYangLogin}`)
      .then(res => res.json())
      .then(data => {
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
      const res = await fetch(`${import.meta.env.VITE_API_URL}/api/contact`, {
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
    <PageTemplate setToken={setToken}>
      <SectionLayout id="contact" title="Contact Us">
        <div className="max-w-3xl mx-auto px-6">
          <form
            onSubmit={handleSubmit}
            className="bg-[#020617] text-white border-2 border-[#51a2ff] p-8 rounded-lg"
          >
            <Input label="Name" name="name" placeholder="Nama kamu" required />

            <Input
              label="Email Anda"
              name="email"
              value={userEmail}
              readOnly
              className="bg-gray-800 border-gray-600 text-gray-400"
            />
            <p className="text-xs text-blue-400 mt-1">
              {loading
                ? "Mengambil email akun..."
                : "*Email otomatis dari akun login"}
            </p>

            <TextArea
              label="Message"
              name="message"
              rows={6}
              placeholder="Tulis pesan..."
              required
            />

            <div className="text-center">
              <Button type="submit" full disabled={loading}>
                {loading ? "Loading..." : "Send Message"}
              </Button>
            </div>
          </form>
        </div>
      </SectionLayout>
    </PageTemplate>
  );
}
