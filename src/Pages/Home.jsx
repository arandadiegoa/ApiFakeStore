import Header from "../components/Common/Header/Header";
import ProductCard from "../components/ProductCard";
import { ProductsContainer } from "./Home.styled";

const Home = () => {

  //llamo a la funcion con useEffect

  //el resultado en useState

  const product = {
    titulo: "Producto 123",
    imagen:
      "https://electroluxar.vtexassets.com/arquivos/ids/162337-800-800?v=637965285638770000&width=800&height=800&aspect=true",
    categoria: "Heladera",
    precio: 1259.55,
  };

  return (
    <div>
      <Header />
      <ProductsContainer>
        <ProductCard product={product} />
        <ProductCard product={product} />
      </ProductsContainer>
    </div>
  );
};

export default Home;
