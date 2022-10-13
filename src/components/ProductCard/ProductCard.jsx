import { CardContainer, Img, List, Title } from "./ProductCard.style";

const ProductCard = ({ product }) => {
  //product por props, y luego la destructuracion
  const { image, title, id, category, description, rating, price } = product;

  return (
    <CardContainer>
      <Img src={image} alt="" />
      <List>
        <Title>{title}</Title>
        <h2>${price}</h2>
        <li>Id:{id}</li>
        <li>Category: {category}</li>
        <li>Description: {description}</li>
        <li>Rating: {rating?.rate} </li>
      </List>
    </CardContainer>
  );
};

export default ProductCard;
