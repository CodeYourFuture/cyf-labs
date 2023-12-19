import "./App.css";
import Header from "./components/Header";
import Trainee from "./components/Trainee";
import Skills from "./components/Skills";
import Footer from "./components/Footer";
import Program from "./components/Program";

function App() {
  return (
    <main className="App">
      <Header />
      <article className="cyf">
        <Program />
        <h2>CodeYourFuture graduates have the following work-ready skills:</h2>
        <Skills />
        <h2>About Our Trainees</h2>

        <section className="about-trainees">
          <figure>
            <Trainee text="Female" percent={40} />
            <Trainee text="Minority Ethnic background" percent={78} />
            <Trainee text="Refugee / Asylum Seeker background" percent={53} />
            <Trainee text="Live below the poverty line" percent={83} />
          </figure>
        </section>

        <section>
          <p>We'd love to have a conversation about how we can meet your hiring needs.</p>
          <p>Please email us at <a href="mailto:contact@codeyourfuture.io"><strong>contact@codeyourfuture.io</strong></a></p>
        </section>
      </article>
      <Footer />
    </main>
  );
}

export default App;
