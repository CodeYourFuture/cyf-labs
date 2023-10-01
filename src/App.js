import './App.css';
import Trainee from './components/Trainee';


function App() {
  return (
    <div className="App">
      <img src="./logo.svg" alt='' />
      <div className='trainees'>
        <Trainee text="Female" percent={40} />
        <Trainee text="Minority Ethnic background" percent={78} />
        <Trainee text="Refugee / Asylum Seeker background" percent={53} />
        <Trainee text="Live below the poverty line" percent={83} />
      </div>

    </div>
  );
}

export default App;
