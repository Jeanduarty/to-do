import { ThemeProvider } from "styled-components";
import { Header } from "./components/Header";
import { SearchTask } from "./components/SearchTask";
import { TaskList } from "./components/TaskList";
import { TasksProvider } from "./contexts/TasksContext";
import { GlobalStyle } from "./styles/global";
import { defaultTheme } from "./styles/themes/default";

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <TasksProvider>
        <Header />
        <SearchTask />
        <TaskList />

        <GlobalStyle />
      </TasksProvider>
    </ThemeProvider>
  );
}
