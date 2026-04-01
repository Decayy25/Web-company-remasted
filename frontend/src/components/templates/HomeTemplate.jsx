import PageTemplate from "./PageTemplate";
import HeroSection from "../organism/HeroSection";

export default function HomeTemplate({ children, setToken }) {
  return (
    <PageTemplate setToken={setToken}>
      <HeroSection />
      <div className="container mx-auto px-6">{children}</div>
    </PageTemplate>
  );
}
