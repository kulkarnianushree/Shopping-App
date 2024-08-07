import ProductItem from './ProductItem';
import classes from './Products.module.css';

const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {props.data.map((product)=>(
          <ProductItem
            title={product.title}
            price={product.price}
            description={product.description}
          />
        ))}



      </ul>
    </section>
  );
};

export default Products;
