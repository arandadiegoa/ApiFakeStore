import { CardContainer, Img } from "./ProductCard.style";

const ProductCard = ({ product }) => {
  const { titulo, precio, categoria, imagen } = product;

  return (
    <CardContainer>
      <Img src={imagen} alt="" />
      <ul>
        <h2>{titulo}</h2>
        <li>{precio}</li>
        <li>{categoria}</li>
      </ul>
    </CardContainer>
  );
};

export default ProductCard;
