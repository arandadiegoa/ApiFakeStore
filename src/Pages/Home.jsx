import { useEffect, useState } from "react";
import Header from "../components/Common/Header/Header";
import Paginator from "../components/Paginator/Paginator";
import ProductCard from "../components/ProductCard";
import { fetchAllProducts } from "../services/product.svc";
import { ProductsContainer } from "./Home.styled";

const Home = () => {
  const [products, setProducts] = useState(undefined);
  const [isLoading, setIsLoading] = useState(true);

  //llamo a la funcion con useEffect
  const getProducts = async () => {
    const { error, data } = await fetchAllProducts();
    if (!error) {
      setProducts(data);
    } else {
      console.log("Existe un error");
    }
  };

  useEffect(() => {
    setTimeout(() => {
      getProducts();
      setIsLoading(false);
    }, 1000);
  }, []);

  return (
    <div>
      <Header />
      {isLoading && <h1>Loading...</h1>}
      <ProductsContainer>
        {products?.length > 0 &&
          products.map((product) => (
            <ProductCard
              key={product.id}
              image={product.image}
              id={product.id}
              title={product.title}
              price={product.price}
              category={product.category}
              description={product.description}
              rating={product.rating?.rate}
            />
          ))}
      </ProductsContainer>
      <Paginator />
    </div>
  );
};

export default Home;
