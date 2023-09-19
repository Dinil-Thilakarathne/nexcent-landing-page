import { About, Achievement, Calendar, Client, Customer, Header, Hero, Services } from './components';
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
      <Customer/>
    </>
  )
}

export default App