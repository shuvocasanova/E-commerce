import styled from "styled-components";
import { categories } from "../data";
import CategoryItem from "./CategoryItem";


const Container = styled.div`
  display: flex;
  padding: 20px;
  justify-content: space-between;
`;


const Categories = () => {
  return (
    <Container>
      {categories?.map((category) => (
        <CategoryItem category={category} />
      ))}
    </Container>
  );
};

export default Categories;
