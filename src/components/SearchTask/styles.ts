import styled from "styled-components";

export const SearchTaskContainer = styled.div`
  max-width: 46.625rem;
  padding: 0 0.5rem;

  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;

  margin: -27px auto 0;

  input {
    flex: 1;
    padding: 1rem;

    color: ${(props) => props.theme["gray-100"]};
    background: ${(props) => props.theme["gray-500"]};

    border: 0;
    border-radius: 8px;
    box-shadow: 0 0 0 1px ${(props) => props.theme["gray-700"]};

    &:focus {
      box-shadow: 0 0 0 1px ${(props) => props.theme["purple-dark"]};
    }
  }

  button {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    border-radius: 8px;
    border: 0;

    line-height: 1.4;
    font-size: 0.875rem;

    color: ${(props) => props.theme["gray-100"]};
    background: ${(props) => props.theme["blue--dark"]};
    font-weight:bold;

    padding: 1rem;

    transition: background 0.2s;
    cursor: pointer;

    :hover {
      background: ${(props) => props.theme["blue"]};
    }

    svg {
      color: ${(props) => props.theme["gray-100"]};
    }
  }
`;
