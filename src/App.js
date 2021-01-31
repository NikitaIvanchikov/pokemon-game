import Header from './components/Header/Header';
import Layout from './components/Layout/Layout';
import Footer from './components/Footer/Footer';

import bg1 from './App/bg1.jpg';
import bg3 from './App/bg3.jpg';


function App() {
  return (
    <div className="App">
      <Header
      title = 'This is new Title'
      descr = 'New Description'
      />
      <Layout
      id = {1}
      title = 'This is new Title'
      descr = 'New Description'
      urlBg = {bg1}
      />
      <Layout
      id = {2}
      title = 'This is new Title'
      descr = 'New Description'
      colorBg = 'blue'
      />
      <Layout
      id  = {3}
      title = 'This is new Title'
      descr = 'New Description'
      urlBg = {bg3}
      />
      <Footer/>
    </div>
  );
}

export default App;
