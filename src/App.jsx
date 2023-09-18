import { About, Client, Header, Hero, Services } from './components';
import './sass/styles.scss';

const  App = () => {
  return (
    <>
      <Header/>
      <Hero/>
      <Client/>
      <Services/>
      <About/>
    </>
  )
}

export default App