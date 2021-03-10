import React from 'react';
import {Link, useLocation} from 'react-router-dom';
import {createURL} from '../../utils.js';
import topBrandList from '../../JSON/topBrandList.json';

export function BrandsFilter () {
  const {search, pathname} = useLocation();
  return (
  <div className="filter-container">
    <div className="row no-gutters">
      <div className="col-md-6 brand-filter filter-content">
        <div className="filter-title">Търсете марка</div>
        <div className="clearfix brand-search">
          <input type="text" placeholder="Въведете марка" id="brand-search" /></div>
        <div id='brand-search-list' className="clearfix brand-search-list"></div>
        <div className="clearfix top-brands">
          <div className="filter-title"> Типове марки <a href="#brand-type" className="brand-type-icon"></a></div>
          
          {[["Luxury","LUXURY"],["Mid Range","MID"],["Budget","BUDGET"]].map((Items, i)=>{
              return (
              <div className="filter-items" key = {i}>
                <Link 
                  to = {createURL ("brands_range", Items[1], search, pathname)}
                  className={search.includes(Items[1]) ? "show-brands-group filter-hidden-input active" : "show-brands-group filter-hidden-input"}
                  title={"Продукти от "+Items[0]+" марки"}>
                  <span className="filter-icon">
                    &nbsp;
                  </span>
                  <span className="filter-label">
                    {Items[0]} марки
                  </span>
                </Link>  
              </div>
            );
          })}

        </div>
        <div id='brand-top-list'>
          <div className="filter-title">Най-продавани</div>
            <div className="clearfix brand-top-list">

              {topBrandList.map(({name, id}, i)=>{
                id = id.toString();
                return (
                  <div key ={i} className="filter-items">
                    <Link 
                      to = {createURL("brand", id, search, pathname)}
                      className = {search.includes(id) ? "active" : ""}
                      data-id={id} 
                      data-name={name} 
                      title={name}
                    >
                      <span className="filter-icon"></span>
                      <span className="filter-label">
                        {name}
                      </span>
                    </Link>
                  </div>
                ) 
              })}
            </div>
          </div>
        </div>
        <div className="col-md-6 brands-selected-container ">
          <div className="brands-selected filter-content">
            <div className="filter-title">Вашата селекция</div>
            <ul className="brands-types ">
              <li className="luxury-brand-li  hidden" id="brand-luxury" title="Luxury марки"><span
                  className="brand-name">Luxury марки</span><a className="delete-brand" data-hide="show-all-luxury-brands"
                  href="javascript:;"></a></li>
              <li className="top-brand-li hidden" id="brand-top" title="Mid Range марки"><span className="brand-name">Mid
                  Range марки</span><a className="delete-brand" data-hide="show-all-top-brands" href="javascript:;"></a>
              </li>
              <li className="budget-brand-li hidden" id="brand-budget" title="Budget марки"><span
                  className="brand-name">Budget марки</span><a className="delete-brand is-budget-brand"
                  data-hide="show-all-budget-brands" href="javascript:;"></a></li>
            </ul>
            <ul id="selected-brands"></ul>
            <div id="no-brands-selected" className=""> Търсете любимите си марки или изберете от нашите топ предложения
          </div>
        </div>
        <div className="brands-selected-clear title"><a className="hidden" href="javascript:;"
            id="clear-selected-brands"> Изчистете </a></div>
      </div>
    </div>
  </div>
  )
}