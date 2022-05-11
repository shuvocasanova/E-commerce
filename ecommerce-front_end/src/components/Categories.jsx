import styled from "styled-components";
import { categories } from "../data";
import CategoryItem from "./CategoryItem";
import { mobile, tablet } from "../responsive";


const Container = styled.div`
  display: flex;
  padding: 20px;
  justify-content: space-between;
  ${mobile({ padding: "0px", flexDirection: "column" })}
  ${tablet({ padding: "0px", flexDirection: "column" })}
`;


const Categories = () => {
  return (
    <Container>
      {categories?.map((category) => (
        <CategoryItem category={category} key={category.id}/>
      ))}
    </Container>
  );
};

export default Categories;
