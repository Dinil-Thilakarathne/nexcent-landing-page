import { About, Achievement, Calendar, Client, Header, Hero, Services } from './components';
import './sass/styles.scss';

const  App = () => {
  return (
    <>
      <Header/>
      <Hero/>
      <Client/>
      <Services/>
      <About/>
      <Achievement/>
      <Calendar/>
    </>
  )
}

export default App