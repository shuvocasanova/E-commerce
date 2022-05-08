import styled from "styled-components";
import Product from "./Product";
import { popularProducts } from "../data";

const Container = styled.div`
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const Products = () => {
  return (
    <Container>
      {popularProducts?.map((popularProduct) => (
        <Product popularProduct={popularProduct} key={popularProduct.id} />
      ))}
    </Container>
  );
};

export default Products;
