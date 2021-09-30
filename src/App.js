import React from "react";
import { BrowserRouter,Switch,Route } from "react-router-dom";
import Header from "./Components/Header/Header";
import Inventory from "./Components/Inventory/Inventory";
import Main from "./Components/Main/Main";
import NotFound from "./Components/NotFound/NotFound";
import Orders from "./Components/Orders/Orders";

function App() {
  return (
    <div>
      <Header></Header>
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Main></Main>
          </Route>
          <Route exact path="/shop">
            <Main></Main>
          </Route>
          <Route exact path="/orders">
            <Orders></Orders>
          </Route>
          <Route exact path="/inventory">
            <Inventory></Inventory>
          </Route>
          <Route path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
