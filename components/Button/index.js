import styled from "styled-components";

export const Button = ({ setProduct, product }) => {
  return (
    <StyledButton
      onClick={() => {
        setProduct(product);
      }}
    >
      Buy
    </StyledButton>
  );
};

const StyledButton = styled.button`
  appearance: none;
  border: none;
  background: hotpink;
  padding: 0.5rem;
`;
