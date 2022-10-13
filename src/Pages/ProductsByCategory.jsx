import { useEffect } from "react";
import Catalogo from "../components/Catalogo/Catalogo";
import Header from "../components/Common/Header/Header";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  decrementPage,
  getProductsByCategory,
  incrementPage,
  reset,
  selectProductsState,
} from "../state/productsSlice";

const ProductsByCategory = () => {
  //Destructurar
  const { isLoading } = useSelector(selectProductsState);
  const dispatch = useDispatch();

  let { name } = useParams();

  useEffect(() => {
    dispatch(getProductsByCategory(name));
  }, [name]);

  const handleReset = () => {
    dispatch(reset());
  };

  //Revisamos el render, que no actualizaba el setCurrentPage similar al concepto("asincrono")
  const handleClickNext = () => {
    dispatch(incrementPage());
  };

  const handleClickPrevious = () => {
    dispatch(decrementPage());
  };

  return (
    <div>
      <Header />
      {isLoading && <h1>Loading...</h1>}
      <Catalogo
        handleReset={handleReset}
        handleClickNext={handleClickNext}
        handleClickPrevious={handleClickPrevious}
      />
    </div>
  );
};

export default ProductsByCategory;
