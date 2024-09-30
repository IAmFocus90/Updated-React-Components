import { useEffect, useState } from "react";
import "./styles.css";

export default function LoadMOreData() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [count, setCount] = useState(0);
  const [disabled, setDisabled] = useState(false);

  const fetchData = async () => {
    try {
      setLoading(true);
      const response = await fetch(
        `https://dummyjson.com/products?limit=20&skip=${
          count === 0 ? 0 : count * 20
        }`
      );
      const data = await response.json();
      if (data && data.products && data.products.length) {
        setProducts((state) => [...state, ...data.products]);
        setLoading(false);
        console.log(data);
      }
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, [count]);

  useEffect(() => {
    if (products && products.length === 100) {
      setDisabled(true);
    }
  }, [count]);

  if (loading) {
    return <div>Loading Data Please Wait!</div>;
  }

  return (
    <div className="Load-data-container">
      <div className="products-container">
        {products && products.length
          ? products.map((product) => {
              return (
                <div className="product" key={product.id}>
                  <img src={product.thumbnail} alt={product.title} />
                  <p>{product.title}</p>
                  <p>${product.price}</p>
                </div>
              );
            })
          : null}
      </div>
      <div className="button-container">
        <button disabled={disabled} onClick={() => setCount(count + 1)}>
          Load More Data
        </button>
        {disabled ? <div>No More data To Load!</div> : null}
      </div>
    </div>
  );
}
