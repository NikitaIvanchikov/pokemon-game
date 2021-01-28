import Header from './components/Header/Header';
import Layout from './components/Layout/Layout';
import Footer from './components/Footer/Footer';




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
      urlBg = 'https://s3.us-west-2.amazonaws.com/secure.notion-static.com/e4337cf5-3f3b-4436-b045-8aff91da2cac/bg1.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAT73L2G45O3KS52Y5%2F20210128%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20210128T182428Z&X-Amz-Expires=86400&X-Amz-Signature=f4bacf573d152ebd8fb44f929f4fcf2c2731d76f9df973fdb4d75cb631787c5c&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22bg1.jpg%22'
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
      urlBg = 'https://s3.us-west-2.amazonaws.com/secure.notion-static.com/3e62948f-bef9-4af8-b2f6-c0a97abc27a7/bg3.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAT73L2G45O3KS52Y5%2F20210128%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20210128T174937Z&X-Amz-Expires=86400&X-Amz-Signature=f08b5a83e553f968e06c054aed043a1b8cb8b7b3174288e8f4a44e68505825ec&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22bg3.jpg%22'
      />
      <Footer/>
    </div>
  );
}

export default App;
