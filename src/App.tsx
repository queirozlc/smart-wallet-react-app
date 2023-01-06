import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./styles/global";
import { defaultTheme } from "./styles/themes/default";

import Login from "./pages/Login";
import Header from "./components/Header";

function App() {
  return (
    <div>
      <ThemeProvider theme={defaultTheme}>
        <GlobalStyle />
        <Login />
      </ThemeProvider>
    </div>
  );
}

export default App;
