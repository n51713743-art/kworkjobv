import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { MarqueeBand } from "./components/MarqueeBand";
import { About } from "./components/About";
import { Services } from "./components/Services";
import { Results } from "./components/Results";
import { Team } from "./components/Team";
import { Testimonials } from "./components/Testimonials";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-surface">
      <Header />
      <main>
        <Hero />
        <MarqueeBand />
        <About />
        <Services />
        <Results />
        <Team />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
