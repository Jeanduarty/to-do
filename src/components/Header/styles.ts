import styled from "styled-components";

export const HeaderContainer = styled.header`
  height: 12.5rem;
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: center;

  background-color: ${(props) => props.theme["gray-700"]};

`;
