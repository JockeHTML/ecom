import "./styles/App.css";
import { ContextProvider } from "./Context/Context";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import About from "./Components/About/About";
import Users from "./Components/Users/Users";
import Home from "./Components/Home/Home";
import Footer from "./Components/Footer/Footer";
import Nav from "./Components/Nav/Nav";
import Cart from "./Components/Cart/Cart";
import {
  createTheme,
  ThemeProvider,
  responsiveFontSizes,
} from "@mui/material/styles";

let theme = createTheme({
  palette: {
    primary: {
      main: "#2c5784",
      info: "#ffffff",
    },
  },
  typography: {
    fontFamily: "Poppins",
  },
});
theme = responsiveFontSizes(theme);

function App() {
  return (
    <ThemeProvider theme={theme}>
      <ContextProvider>
        <Router>
          <main className="App">
            <Nav />
            <Switch>
              <Route path="/about">
                <About />
              </Route>
              <Route path="/users">
                <Users />
              </Route>
              <Route path="/cart">
                <Cart />
              </Route>
              <Route path="/">
                <Home />
              </Route>
            </Switch>
          </main>
        </Router>
      </ContextProvider>
    </ThemeProvider>
  );
}

export default App;
