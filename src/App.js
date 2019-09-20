import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import Header from './components/header.components';
import Footer from './components/footer.components';
import About from './components/about.components';
import Resume from './components/resume.components';
import Contact from './components/contact.components';
function App() {
  return (
    <div>
      <Header/>
      <About/>
      <Resume/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
