import { Menu } from "./Components/Footer/Menu.js";
import { Router } from "./Routes/Router.js";
import GlobalStyle from "./globalStyles.js";

function App() {
  return (
    <>
      <GlobalStyle />
      <Router />
      <Menu />{" "}
    </>
  );
}

export default App;
