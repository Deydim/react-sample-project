import React from 'react';
import {Link, useRouteMatch, useParams} from 'react-router-dom';
import {CategoryLinks} from "../Menu/CategoryLinks.js";
import categoryLinks from "../../JSON/categoryLinks";


export const CategoryMenu = ({list}) => {
  const {lang, catType} = useParams();
  const {path, url} = useRouteMatch();

  const createHref = ({href}) => {
    let url = path;
    catType && (url = url.replace(":lang", lang).replace(":catType", href).replace("/:catLink",""))
    !catType && (url = url.replace(":lang", lang) + "/" + href)
    return url;
  };

  return ( 
    list.map((ListItem,i) => {
      let href = createHref(ListItem);
      return (
        <li 
          key={i}
          className={url.includes("/"+ListItem.href) ? "main-cat " + "active" : "main-cat "}
        > 
          <Link
            to = {href}
            title={ListItem.title}
          >
            {ListItem.aValue}
          </Link>
        
          <div className="sub-menu"><div className="container-fluid"><div className="row"><div className="col-md-3 col-lg-2"> <div className="bordered-menu"> <div className="menu-title">запазени филтри</div> <div className="filter-container d-block"> <div className="selection-info-wrapper "> <div className="my-selection-info selection-info "> <div className="info-text"> Филтрирайте и запазете избраните филтри, за да следите лесно всеки ден за нови продукти, които съответстват с Вашия запазен филтър.<br></br> <a href="/bg/site/personal-filters" className="text-underline see-hire"> Вижте още </a> </div> </div> <div className="my-selection-info save-selection-info hidden"> <div className="info-text"> Запазете избраните филтри и създайте свой собствен "Запазен филтър" с клик върху иконата с плюс. </div> </div> </div> </div> </div> </div><div className="col-md-6 col-lg-4"><div className="bordered-menu">
          <div className="menu-title">
            {ListItem.value}
          </div>
        
          <ul className="menu-list col2" rel="categories">
        
            <CategoryLinks list={categoryLinks[ListItem.href]} baseURL={href + "/"} />
          
            </ul> </div> </div> 
            <div className="col-md-3 col-lg-2"> <div className="bordered-menu"> <div className="menu-title">Промоции</div> <ul className="menu-list">
              <li><Link to={href+"?promo=5-20"}>От -5% до -20%</Link></li>
              <li><Link to={href+"?promo=20-40"}>От -20% до -40%</Link></li>
              <li><Link to={href+"?promo=40-60"}>От -40% до -60%</Link></li>
              <li><Link to={href+"?promo=60-75"}>От -60% до -75%</Link></li>
              <li><Link to={href+"?promo=75-100"}>-75% +</Link></li>
          </ul> </div> </div> <div className="col-md-3 col-lg-2"> <div className="bordered-menu"> <div className="menu-title">Марки</div> <ul className="menu-list brands">
          <li>
            <Link to= {href +"?brand_range=LUXURY"}>
              Luxury марки </Link>
          </li>
          <li>
            <Link to= {href +"?brand_range=MID"}>
              Mid Range марки </Link>
          </li>
          <li>
            <Link to={href +"?brand_range=BUDGET"}>
              Budget марки </Link>
          </li>
          <li className="mt-5">
            <Link to={lang + "/brands/catalogue"} className="text-underline">
              Вижте всички марки </Link>
          </li> 
          </ul></div> </div> </div> </div> </div> 
        </li>
      )
    })
  )
}