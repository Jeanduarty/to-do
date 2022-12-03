import styled from "styled-components";

export const TasksListContainer = styled.main`
  max-width: 46.625rem;
  padding: 0 0.5rem;
  margin: 4rem auto;
`;

export const InfoTasksContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const TasksCreated = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;

  strong {
    color: ${(props) => props.theme.blue};
    font-weight: bold;
    font-size: 0.875rem;
  }

  span {
    color: ${(props) => props.theme["gray-200"]};
    border-radius: 999px;
    background-color: ${(props) => props.theme["gray-400"]};
    font-size: 0.75rem;
    font-weight: bold;
    padding: 2px 8px;
  }
`;

export const TasksProgress = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;

  strong {
    color: ${(props) => props.theme.purple};
    font-weight: bold;
    font-size: 0.875rem;
  }

  span {
    color: ${(props) => props.theme["gray-200"]};
    border-radius: 999px;
    background-color: ${(props) => props.theme["gray-400"]};
    font-size: 0.75rem;
    font-weight: bold;
    padding: 2px 8px;
  }
`;
