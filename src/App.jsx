import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import Header from '../component/header.jsx';
import Introduction from '../component/introduction.jsx';
import OurServices from '../component/our-services.jsx';
import ProductInformation from '../component/product-information.jsx';
import Faq from '../component/faq.jsx';
import Footer from '../component/footer.jsx';

function App() {
  return (
    <>
      <div id="container" className="w-full min-h-screen flex flex-col items-center gap-2 bg-pink-100 bg-opacity-50">
        <Header></Header>
        <main className="border-2 border-red-200 p-1 w-full gap-5">
          <Introduction/>
          <OurServices/>
          <ProductInformation/>
          <Faq/>
        </main>
        <Footer></Footer>
      </div>
    </>
  )
}

export default App;