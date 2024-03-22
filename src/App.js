import image from './assets/principal-pic.jpeg'
import './App.css';
import Social from './components/social';
import Technology from './components/technology';

function App() {
  return (
    <div className="container">
      <div className='background-image'></div>
      <div className='content'>
        <div className='box'>
          <div>
            <section className='title'>
              <p className='name glitch'>
                Larissa Vidal
              </p>
            </section>
            <div className='sub-title '>
              {'< Fullstack Developer />'}
            </div>
          </div>

          <div className='description'>
          Especialista em desenvolvimento de aplicações móveis e web, com ênfase no backend usando Node.js, Javascript e Typescript. Proficiente em React.
          </div>

          <Technology/>

          <div className='contacts'>
            <div>Você pode me encontrar por aqui...</div>
            <Social></Social>
          </div>
        </div>
      </div>
      <div className='principal-pic'>
        <div className='pic-container'>
          <img src={image} alt="logo" />
        </div>
      </div>
    </div>
  );
}

export default App;
        



