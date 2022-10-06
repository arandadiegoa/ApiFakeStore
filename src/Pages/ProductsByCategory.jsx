import { useEffect, useState } from "react";
import Catalogo from "../components/Catalogo/Catalogo";
import Header from "../components/Common/Header/Header";
import { fetchCategoryProducts } from "../services/category.svc";
import { useParams } from "react-router-dom";

const ProductsByCategory = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  //Este estado es copia de los productos..para poder manipular
  const [newProducts, setNewProducts] = useState([]);

  //Para poder hacer la cuenta de limitar productos en la home
  // Contador - Pagina actual del usuario
  const [currentPage, setCurrentPage] = useState(1);

  let { name } = useParams();

  //valor computado-> porque depende de products
  //Armar el redondeo para arriba, nro entero
  const limit = 6; // Cantidad de productos por page
  let cantPage = Math.ceil(products.length / limit); // Cantidad de paginas en total

  //llamo a la funcion con useEffect
  const getProductsCategory = async () => {
    setIsLoading(true);

    const { error, data } = await fetchCategoryProducts(name);

    setIsLoading(false);

    if (!error) {
      setProducts(data);
      setNewProducts(data.slice(0, limit));
    } else {
      console.log("Existe un error");
    }
  };

  useEffect(() => {
    getProductsCategory();
  }, [name]);

  const handleReset = () => {
    setNewProducts(products.slice(0, limit));
    setCurrentPage(1);
  };

  //Revisamos el render, que no actualizaba el setCurrentPage similar al concepto("asincrono")
  const handleClickNext = () => {
    //creamos una variable para tener el valor al instante.
    let incrementPage = currentPage + 1;
    if (incrementPage <= cantPage) {
      setCurrentPage(incrementPage);
      setNewProducts(
        products.slice(limit * incrementPage - limit, limit * incrementPage)
      );
    }
  };

  const handleClickPrevious = () => {
    let decrementPage = currentPage - 1;
    if (decrementPage > 0) {
      setCurrentPage(decrementPage);
      setNewProducts(
        products.slice(limit * decrementPage - limit, limit * decrementPage)
      );
    }
  };

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
        products={products}
      />
    </div>
  );
};

export default ProductsByCategory;
