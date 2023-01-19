import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./styles/global";
import { defaultTheme } from "./styles/themes/default";

import Rotas from "./routes";

import 'toastr/build/toastr.css';
import 'toastr/build/toastr.min.js';


function App() {

  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <Rotas />
    </ThemeProvider>
  );
}

export default App;
