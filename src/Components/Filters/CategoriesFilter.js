import React from 'react';
import {Link, useParams, useRouteMatch, useLocation} from 'react-router-dom';
import filterMain from '../../JSON/filterMain';
import categoryLinks from "../../JSON/categoryLinks";
import categoryMainData from "../../JSON/categoryMainData";

export function CategoriesFilter() {
  const {search} = useLocation();
  const {lang, catType, catLink} = useParams();
  const {path} = useRouteMatch();
    // const catMain = categoryMainData.filter((arr) => arr.href === catType)[0]; // selects the relevant obj from categoryMainData.json
  return (
    <div className="filter-container"><div id="left-column-nav"><div className="filters-category"><div className="filter-items"><ul  className="sub-categories overview">
      {categoryLinks[catType].map((ListItem,i) => {
        return (
          <li key={i}>
            <Link 
              to={() => {
                let catLinkUpdate = "/" + catLink;
                let aHref = "+" + ListItem.aHref;
                catLinkUpdate === "/" + ListItem.aHref &&
                  (catLinkUpdate = aHref = "")
                catLinkUpdate && 
                  (catLinkUpdate.includes ("+" + ListItem.aHref) || catLinkUpdate.includes ("/" + ListItem.aHref)) && 
                  (catLinkUpdate = catLinkUpdate.replace("+" + ListItem.aHref,"")) &&
                  (catLinkUpdate = catLinkUpdate.replace(ListItem.aHref + "+","")) &&
                  (catLinkUpdate = catLinkUpdate.replace(ListItem.aHref,"")) &&
                  (aHref = "")
                let singleSelected = path.replace (":lang", lang).replace(":catType", catType).replace("/:catLink", "") +"/" + ListItem.aHref;
                let multipleSelected = path.replace (":lang", lang).replace(":catType", catType).replace("/:catLink",catLinkUpdate + aHref);
                return catLink
                        ? multipleSelected + search
                        : singleSelected + search
              }}

              className={
                catLink && 
                (catLink.includes("+" + ListItem.aHref) || ("/" + catLink).includes("/" + ListItem.aHref)) 
                  ? "sub-cat active" 
                  : "sub-cat"
              }
              title={"Филтрирайте по " + ListItem.value}
            >      
                <span className="filter-icon">&nbsp;</span><span className="filter-label">
              {ListItem.value}
                </span>
                <span className="filter-cnt">
                {"("+ ListItem.count +")"}
                </span>
            </Link>
          </li>
        )
      })}
    </ul>
  {/* <div className="pb-1"> <a href="javascript:;" id="clear-filters" className="clear-filters site-btn" title="Изчистете филтрите" style={{display: "none"}}> Изчистете филтрите </a> </div> */}
  </div></div></div></div>
  )
}