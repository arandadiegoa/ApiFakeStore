import { useSelector } from "react-redux";
import { selectProductsState } from "../../state/productsSlice";
import Paginator from "../Paginator/Paginator";
import ProductCard from "../ProductCard";
import { ProductsContainer } from "./Catalogo.styled";

const Catalogo = ({
  handleReset,
  handleClickNext,
  handleClickPrevious,
  cantPage,
}) => {
  const { newProducts } = useSelector(selectProductsState);

  return (
    <div>
      <ProductsContainer>
        {newProducts?.length > 0 &&
          newProducts.map((product) => (
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

      <Paginator
        handleClick={handleReset}
        handleClickNext={handleClickNext}
        handleClickPrevious={handleClickPrevious}
        cantPage={cantPage}
      />
    </div>
  );
};

export default Catalogo;
