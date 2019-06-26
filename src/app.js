import React from 'react';
import Header from './components/header/header.js';
import Footer from './components/footer/footer.js';
import Counter from './components/counter/counter.js';
import style from  './scss/index.scss'
class App extends React.Component {
  render() {
    return (
      <div className="wrapper">
        <Header />
        <div className="wrapper2">
          <Counter />
          <Footer />
        </div>
     </div>
    );
  }
}

export default App;
