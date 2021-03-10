import React from 'react';
import filterMain from '../JSON/filterMain';
import {getComponentByName} from "../Components/Filters/filterComponents.js";
import {Link, useParams, useLocation} from 'react-router-dom';

export function FilterContainer() {
  const params = useParams();
  const {search} = useLocation();
  if (!params.catType) return null; //same as router component
  const list = filterMain.List;
  let classname;
  const checkCategoryFilter = classname => params.catLink ? classname + " filtered" : classname;
  const checkQueryFilter = (queries, classname) => {
    if (queries) {
      queries && 
      queries.forEach(element => {
        search.includes(element) && (classname = classname + " filtered")
      })
    }
  return classname;
  };
  return (
    <div id="filters-top-wrapper" className="filters-top-wrapper"> <div id="filters-top" className="filters-top" data-sticky_column> <div className="container-fluid"> <div className="border-container d-flex justify-content-between w-100"> <ul className="top-filter-ul flex-1 clearfix">

    {list.map((ListItem,i) => {
      let DynFilter = getComponentByName(ListItem.funcName);
      if (ListItem.funcName === "CategoriesFilter") {
        classname = checkCategoryFilter (ListItem.liClass);
      }
      else {
        classname = checkQueryFilter (ListItem.queries, ListItem.liClass);
      }
      return (
        <li 
          key = {i}
          id = {ListItem.liId}
          className = {classname}
        >
          <Link
            id = {ListItem.aId}
            to = ""
          >
            <span> {ListItem.value}</span>
          </Link>
          <DynFilter catSelected={params.catType}/>
        </li>
      )
    })}
    <li className="filters-top-item hidden"> <div className="filter-container filters-last"> <input type="checkbox" id="final" name="final" value="1" className="filter-hidden-input" /> </div> </li>
    </ul><div className="pb-1"> <a href="javascript:;" id="clear-filters" className="clear-filters site-btn" title="Изчистете филтрите" style={{display: 'block'}}> Изчистете филтрите </a> </div></div></div></div></div>
  )
}