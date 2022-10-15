import { useEffect } from "react";
import {
  Container,
  ContainerCategories,
  Li,
  Nav,
  Navbar,
} from "./Header.styled";
import Logo from "./logo";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  getCategories,
  selectCategoryState,
} from "../../../state/categorySlice";
import useProfile from "../../../Hooks/useProfile";

const Header = () => {
  const profile = useProfile();
  const categoriesState = useSelector(selectCategoryState);
  const dispatch = useDispatch();

  //Destructurar para que sea mas legible el codigo -> linea 40
  const { categoryList, isLoading } = categoriesState;

  useEffect(() => {
    dispatch(getCategories());
  }, []);

  return (
    <div>
      {isLoading && <h1>Loading....</h1>}
      <Nav className="navbar navbar-expand-lg bg-light">
        <Container>
          <Navbar className="navbar-brand" href="/">
            <Logo />
            ApiKakeStore
          </Navbar>
          <ContainerCategories>
            {categoryList.length > 0 &&
              categoryList.map((category, index) => (
                <Link to={`/category/${category}`} key={index}>
                  <Li>{category}</Li>
                </Link>
              ))}
            {!profile.isLogged && <Link to={`/login`}>Login</Link>}

            {profile.isLogged && (
              <div>
                <Link to={`/cart`}>Cart</Link>
                <button onClick={profile.handleLogout}>Logout</button>
              </div>
            )}

            {profile.id}
            {profile.user}
          </ContainerCategories>
        </Container>
      </Nav>
    </div>
  );
};

export default Header;
