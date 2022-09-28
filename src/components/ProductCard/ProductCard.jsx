import { CardContainer, Img } from "./ProductCard.style";

const ProductCard = ({ id, title, price, category, description, image }) => {
  return (
    <CardContainer>
      <Img src={image} alt="" />
      <ul>
        <h5>{title}</h5>
        <h3>${price}</h3>
        <li>Id:{id}</li>
        <li>Category: {category}</li>
        <li>Description: {description}</li>
      </ul>
    </CardContainer>
  );
};

export default ProductCard;
