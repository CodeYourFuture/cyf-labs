import './App.css';
import Trainee from './components/Trainee';


function App() {
  return (
    <main className="App">
      <img src="./logo.svg" alt='' />
      <section className='trainees'>
        <Trainee text="Female" percent={40} />
        <Trainee text="Minority Ethnic background" percent={78} />
        <Trainee text="Refugee / Asylum Seeker background" percent={53} />
        <Trainee text="Live below the poverty line" percent={83} />
      </section>
    </main>
  );
}

export default App;
