import Header from "../organism/Header";
import Footer from "../organism/Footer";

export default function PageTemplate({ children, setToken }) {
  return (
    <div className="min-h-screen bg-[#020617] text-white">
      <Header setToken={setToken} />
      <main className="min-h-[calc(100vh-140px)]">{children}</main>
      <Footer />
    </div>
  );
}
