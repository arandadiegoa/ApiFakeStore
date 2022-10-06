import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Catalogo from "../components/Catalogo/Catalogo";
import Header from "../components/Common/Header/Header";
import { fetchAllProducts } from "../services/product.svc";
import {
  getProducts,
  selectProductsState,
  setCurrentPage,
  setNewProducts,
  setProducts,
} from "../state/productsSlice";

const Home = () => {
  const productsState = useSelector(selectProductsState);
  const dispatch = useDispatch();

  //Destructurar
  const { productsList, newProducts, currentPage, isLoading, limit } =
    productsState;

  //valor computado-> porque depende de products
  //Armar el redondeo para arriba, nro entero

  let cantPage = Math.ceil(productsList.length / limit); // Cantidad de paginas en total

  useEffect(() => {
    dispatch(getProducts());
  }, []);

  const handleReset = () => {
    dispatch(setNewProducts(data.slice(0, limit)));
    dispatch(setCurrentPage(1));
  };

  //Revisamos el render, que no actualizaba el setCurrentPage similar al concepto("asincrono")
  const handleClickNext = () => {
    //creamos una variable para tener el valor al instante.
    let incrementPage = currentPage + 1;
    if (incrementPage <= cantPage) {
      dispatch(setCurrentPage(incrementPage));
      dispatch(
        setNewProducts(
          productsList.slice(
            limit * incrementPage - limit,
            limit * incrementPage
          )
        )
      );
    }
  };

  const handleClickPrevious = () => {
    let decrementPage = currentPage - 1;
    if (decrementPage > 0) {
      setCurrentPage(decrementPage);
      setNewProducts(
        productsList.slice(limit * decrementPage - limit, limit * decrementPage)
      );
    }
  };

  //Armar un boton con sort

  return (
    <div>
      <Header />

      {isLoading && <h1>Loading...</h1>}

      <Catalogo
        newProducts={newProducts}
        handleReset={handleReset}
        handleClickNext={handleClickNext}
        handleClickPrevious={handleClickPrevious}
        cantPage={cantPage}
        currentPage={currentPage}
        productsList={productsList}
      />
    </div>
  );
};

export default Home;
