import Hero from "../components/Hero";
import About from "../components/About";
import Areas from "../components/Areas";
import Roster from "../components/Roster";
import Projects from "../components/Projects";
import News from "../components/News";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import { NEWS_VISIBLE } from "../content";

export default function Home() {
  return (
    <main
      style={{
        background: "#F7F7F4",
        color: "#1E1E1E",
      }}
    >
      <Hero />
      <About />
      <Areas />
      <Roster />
      <Projects />
      {NEWS_VISIBLE && <News />}
      <Contact />
      <Footer />
    </main>
  );
}
