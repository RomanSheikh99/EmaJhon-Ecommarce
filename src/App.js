import React from "react";
import { BrowserRouter,Switch,Route } from "react-router-dom";
import Header from "./Components/Header/Header";
import Inventory from "./Components/Inventory/Inventory";
import Login from "./Components/Login/Login";
import Main from "./Components/Main/Main";
import NotFound from "./Components/NotFound/NotFound";
import Orders from "./Components/Orders/Orders";
import PlaceOrder from "./Components/PlaceOrder/PlaceOrder";
import PrivateRoute from "./Components/PrivateRoute/PrivateRoute";
import Profile from "./Components/Profile/Profile";
import Register from "./Components/Register/Register";
import AuthProvider from "./context/authProvider";

function App() {
  return (
    <div>
      <AuthProvider>
      <BrowserRouter>
      <Header></Header>
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
          <PrivateRoute exact path="/placeorder">
            <PlaceOrder></PlaceOrder>
          </PrivateRoute>
          <Route exact path="/register">
            <Register></Register>
          </Route>
          <Route exact path="/login">
            <Login></Login>
          </Route>
          <Route exact path="/profile">
            <Profile></Profile>
          </Route>
          <Route path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
      </BrowserRouter>
      </AuthProvider>
      
    </div>
  );
}

export default App;
