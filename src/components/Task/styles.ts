import styled from "styled-components";

import * as ToggleGroup from "@radix-ui/react-toggle-group";

export const TasksListGroupContainer = styled(ToggleGroup.Root)`
  margin-top: 1.5rem;
`;

export const TaskContainer = styled.div`
  display: flex;
  background-color: ${(props) => props.theme["gray-500"]};
  border: 1px solid ${(props) => props.theme["gray-400"]};

  border-radius: 9px;

  padding: 1rem;

  transition: transform 0.2s;
  
  &:not(:first-child) {
    margin-top: 0.75rem;
  }

  &:hover {
    transform: scale(1.005);
  }

  & > svg{
    margin-top: -1px;

    cursor: pointer;
  }
`

export const TaskItem = styled(ToggleGroup.Item)`
  display: flex;
  gap: 0.75rem;

  width: 100%;

  background-color: transparent;
  border: 0;

  text-align: left;

  span {
    flex: 1;
    align-items:flex-start;

    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;

    color: ${(props) => props.theme["gray-100"]};

    max-width: 39.5rem;

    font-size: 0.975rem;
    line-height: 1.4;
    margin-top: -3px;
  }

  svg {
    margin-top: 2px;
    line-height: 1.9;

    cursor: pointer;
  }

  &[aria-pressed="true"] div > svg {
    opacity: 1;
    background-color: ${(props) => props.theme["purple-dark"]};

    &:hover {
    background: ${(props) => props.theme.purple};
  }
  }

  &[aria-pressed="true"] span {
    color: ${(props) => props.theme["gray-300"]};
    text-decoration-line: line-through;
  }
`;

export const TaskChecked = styled.div`
  display: flex;
  align-items: stretch;
  justify-content: center;

  width: .9rem;
  height: .9rem;
  border-radius: 50%;
  margin-top: 2px;

  background-color: transparent;
  border: 0;
  box-shadow: 0 0 0 1.3px ${(props) => props.theme.blue};

  cursor: pointer;

  svg {
    font-size: 0.75rem;
    opacity: 0;

    margin: 0;

    border-radius: 50%;
    width: 100%;
    height: 100%;
  }
`;
