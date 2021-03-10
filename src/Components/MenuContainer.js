import React from 'react';

//JSON BELOW:
import upperMenu from "../JSON/upperMenu";
import categoryMainData from "../JSON/categoryMainData";


//JS BELLOW:
import {UpperMenu} from "../Components/Menu/UpperMenu.js";
import {CategoryMenu} from "../Components/Menu/CategoryMenu.js";

export const MenuContainer = () => {
  return (
    <header id="main-header" className="main-header">
      <div className="header-first">
      <div className="container-fluid">
      <div className="d-flex">
        <a href="https://remixshop.com/bg" id="home-page-link"
          title="Начало"
          className="logo ">
        </a>
        <nav className="main-nav">
          <div className="d-flex flex-wrap justify-content-between align-items-center">
            <ul className="section-navigation navigation">
              <UpperMenu list={upperMenu} />
            </ul>
            {/* <ul className="header-actions d-flex justify-content-end align-items-center list-unstyled m-0">
              <li className="sell-link">
                <Link to="/bg/sell" id="sourcing-button" title="Продайте на Remix">Продайте на Remix</Link>
              </li>
              <li id="header-menu-holder" className="user">
                <Link to="" title="вход" id="login-button" className="login" rel ="nofollow">вход</Link>
              </li>
            </ul> */}
          </div>
          <div className="main-navigation-wrapper d-flex flex-wrap justify-content-between align-items-center">
            <ul id="main-navigation-products" data-section="products" className="main-navigation navigation flex-wrap">
              <CategoryMenu list={categoryMainData} />
            </ul>
          </div>
        </nav>
      </div>
      </div>
      </div>
    </header>
  )
}
