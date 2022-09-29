import { CardContainer, Img, List, Title } from "./ProductCard.style";

const ProductCard = ({
  id,
  title,
  price,
  category,
  description,
  image,
  rating,
}) => {
  return (
    <CardContainer>
      <Img src={image} alt="" />
      <List>
        <Title>{title}</Title>
        <h2>${price}</h2>
        <li>Id:{id}</li>
        <li>Category: {category}</li>
        <li>Description: {description}</li>
        <li>Rating: {rating} </li>
      </List>
    </CardContainer>
  );
};

export default ProductCard;
