import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./styles/global";
import { defaultTheme } from "./styles/themes/default";

import { AuthProvider } from "./util/AuthProvider";
import Rotas from "./routes";

import 'toastr/build/toastr.css';
import 'toastr/build/toastr.min.js';


function App() {

  return (
    <AuthProvider>
      <ThemeProvider theme={defaultTheme}>
        <GlobalStyle />
        <Rotas />
      </ThemeProvider>
    </AuthProvider>
  );
}

export default App;
