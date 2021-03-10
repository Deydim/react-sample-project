import React, {Suspense, useState, useRef, useEffect} from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Link, useRouteMatch, useParams, useLocation, Redirect } from 'react-router-dom';
import useFetch from 'fetch-suspense';
// import './css/index.css';

import upperMenu from "../JSON/upperMenu";
import categoryMainData from "../JSON/categoryMainData";

import {SortPagHeader} from "../Components/ProductsList/SortPagHeader.js";
import {ProductsListing} from "../Components/ProductsList/ProductsListing.js";
import {PagFooter} from "../Components/ProductsList/PagFooter.js";
import {CategoryMenu} from "../Components/Menu/CategoryMenu.js";

export const ProductsListContainer = () => {
  return(
    <div className="container-fluid" id="product-list-content">
      <SortPagHeader />
        <Suspense fallback={"LOADING..."}>
          <FetchProductsListing/>
        </Suspense>
      <PagFooter />
    </div>
  );
};

const FetchProductsListing = () => {
  const response = useFetch('https://cors-anywhere.herokuapp.com/https://remixshop.com/bg/api/product/list?page_size=120', { method: 'GET' });
  return (
    <ProductsListing productsData = {response.products}/>
  );
}