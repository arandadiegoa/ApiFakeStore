import { useSelector } from "react-redux";
import { selectProductsState } from "../../state/productsSlice";
import { Button, Span } from "./Paginator.styled";

const Paginator = ({
  handleClick,
  handleClickNext,
  handleClickPrevious,
}) => {
  const { currentPage, productsList, cantPage } = useSelector(selectProductsState);

  return (
    <div className="container">
      {currentPage !== 1 && <Button onClick={handleClick}>Reset</Button>}

      {currentPage > 1 && (
        <Button onClick={handleClickPrevious}>Previous</Button>
      )}

      {currentPage < cantPage && (
        <Button onClick={handleClickNext}>Next</Button>
      )}
      <Span className="container">
        <h3>Total Products : {productsList.length}</h3>
        <h3>Total Page: {cantPage}</h3>
        <h3>Pagina: {currentPage} </h3>
      </Span>
    </div>
  );
};

export default Paginator;
