import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Catalogo from "../components/Catalogo/Catalogo";
import Header from "../components/Common/Header/Header";
import {
  decrementPage,
  getProducts,
  incrementPage,
  reset,
  selectProductsState,
} from "../state/productsSlice";
import { animateScroll as scroll } from "react-scroll";

const Home = () => {
  const productsState = useSelector(selectProductsState);
  const dispatch = useDispatch();

  //Destructurar
  const { isLoading } = productsState;

  useEffect(() => {
    dispatch(getProducts());
  }, []);

  const onClickUp = () => {
    scroll.scrollToTop();
  };

  const handleReset = () => {
    dispatch(reset());
    onClickUp();
  };

  //Revisamos el render, que no actualizaba el setCurrentPage similar al concepto("asincrono")
  const handleClickNext = () => {
    dispatch(incrementPage());
    onClickUp();
  };

  const handleClickPrevious = () => {
    dispatch(decrementPage());
    onClickUp();
  };

  //Armar un boton con sort

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

export default Home;
