import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch, Redirect} from 'react-router-dom';
//import * as serviceWorker from './serviceWorker';
import {MenuContainer} from "./Components/MenuContainer.js";
import {FilterContainer} from "./Components/FilterContainer.js";
import {BreadCrumbs} from "./Components/BreadCrumbs.js";
import {ProductsListContainer} from "./Components/ProductsListContainer.js";

//serviceWorker.unregister();

const All = () => {
  return (
  <Fragment>
    <MenuContainer/>
    <main className="main-container">      {/* Both HTML lines may be extracted to Layout component*/}
      <section className="listing-page">
        <BreadCrumbs/>
        <FilterContainer/>
        <Switch>
          <Route path = "/:lang/outlet">
            <ProductsListContainer/>
          </Route>
        </Switch>
      </section>
    </main>
  </Fragment>
  );
} 
  
const RouteAll = () => {
  return (
    <BrowserRouter>
      <Switch>      
        <Route path="/:lang/secondhand/:catType/:catLink" component = {() => <All/>}/>
        <Route path="/:lang/outlet/:catType/:catLink" component = {() => <All/>}/>
        <Route path="/:lang/sale/:catType/:catLink" component = {() => <All/>}/>
        <Route path="/:lang/outlet/:catType" component = {() => <All/>}/>
        <Route path="/:lang/secondhand/:catType" component = {() => <All/>}/>
        <Route path="/:lang/sale/:catType" component = {() => <All/>}/>
        <Route path="/:lang/outlet" component = {() => <All/>}/>
        <Route path="/:lang/secondhand" component = {() => <All/>}/>
        <Route path="/:lang/sale" component = {() => <All/>}/>
        <Route path="/:lang/:catType/:catLink" component = {() => <All/>}/>  
        <Route path="/:lang/:catType" component = {() => <All/>}/>
        <Route path="/:lang" component = {() => <All/>}/> 
        <Route path="/" component = {() => <Redirect to={"/bg"} />}/> 
      </Switch>
      </BrowserRouter>
  )
}

ReactDOM.render(
  <RouteAll />,
  document.getElementById('root')
);
