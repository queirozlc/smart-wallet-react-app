import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./styles/global";
import { defaultTheme } from "./styles/themes/default";

import Login from "./pages/Login";
import Cadastro from "./pages/Cadastro";

function App() {
  return (
    <div>
      <ThemeProvider theme={defaultTheme}>
        <GlobalStyle />
        <Cadastro />
      </ThemeProvider>
    </div>
  );
}

export default App;
