import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./styles/global";
import { defaultTheme } from "./styles/themes/default";

import Rotas from "./routes";

import 'toastr/build/toastr.css';
import 'toastr/build/toastr.min.js';
import AuthProvider from "./util/context/provider";


function App() {

  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <AuthProvider>
        <Rotas />
      </AuthProvider>
    </ThemeProvider>
  );
}

export default App;
