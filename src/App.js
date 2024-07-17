import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';

function App() {
  const products = [
    {title:'Test',price:6,description:'This is a first product - amazing!',id:1},
  ]
  return (
    <Layout>
      <Cart />
      <Products data = {products}/>
    </Layout>
  );
}

export default App;
