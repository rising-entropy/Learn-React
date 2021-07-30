import ProductItem from './ProductItem';
import classes from './Products.module.css';

const DUMMY_PRODUCTS = [
  {
    id: 'p1',
    price: 6,
    title: 'My First Book',
    description: '1st I ever Wrote'
  },
  {
    id: 'p2',
    price: 5,
    title: 'My Second Book',
    description: '2nd I ever Wrote'
  }
]

const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {DUMMY_PRODUCTS.map((product, index)=>(
          <ProductItem
          key={product.id}
          title={product.title}
          price={product.price}
          description={product.description}
          id={product.id}
        />
        ))}
      </ul>
    </section>
  );
};

export default Products;
