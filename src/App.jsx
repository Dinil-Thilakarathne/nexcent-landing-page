import { About, Achievement, Blog, Calendar, Client, Customer, Footer, Header, Hero, Services } from './components';
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
      <Blog/>
      <Footer/>
    </>
  )
}

export default App