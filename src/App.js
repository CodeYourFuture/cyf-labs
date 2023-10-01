import './App.css';
import Header from './components/Header';
import Trainee from './components/Trainee';
import Skills from './components/Skills';
import Footer from './components/Footer';

function App() {
  return (
    <main className="App">
      <Header />
      <article className='cyf'>

        <section className="about-program">
          <p>
            CodeYourFuture graduates will work wonders for your organisation.
          </p>
          <p>
            To complete our{' '}
            <b>
              <a href="https://curriculum.codeyourfuture.io/">Software Development Programme</a>
            </b>
            , a CodeYourFuture graduate spends approximately <strong>800 hours</strong> developing their technical and employability skills.
          </p>
        </section>

        <Skills />

        <article className="about-trainees">
          <h2>About Our Trainees</h2>
          <figure>
            <Trainee text="Female" percent={40} />
            <Trainee text="Minority Ethnic background" percent={78} />
            <Trainee text="Refugee / Asylum Seeker background" percent={53} />
            <Trainee text="Live below the poverty line" percent={83} />
          </figure>
        </article>

        <section>
          <p>We'd love to have a conversation about how we can meet your hiring needs.</p>
          <p>Please email us at <a href="mailto:contact@codeyourfuture.io">contact@codeyourfuture.io</a></p>
        </section>
      </article>
      <Footer />

    </main>
  );
}

export default App;
