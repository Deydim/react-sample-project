import React from 'react';
import ReactDOM from 'react-dom';
import {Link, useParams, useRouteMatch} from 'react-router-dom';

export function BreadCrumbs () {
  let {path, url} = useRouteMatch();
  let params = useParams();
  let lang = params.lang;
  params = Object.keys(params);
  url = url.split("/").slice(2,url.length);
  let BaseURL = ("/"+lang);
  let productsPrefix = path.includes(params[0] + "/:" + params[1]) ? "Всичко" : false;
  return (
    <div  className = "container-fluid no-gutters-mobile" > < div  className = "grey-wrapper d-flex" id = "grey-wrapper" > < div id = "lnd-wrapper" className = "flex-1" > < div className = "lnd-wrapper" > < div className = "lnd-content" > < ul  className = "custom-breadcrumb mt-0" >
      {productsPrefix &&
        <li><Link to = {BaseURL}> {productsPrefix} </Link> </li>
      }
      {url.map((URL_Item,i) => {
        return (
          <li 
            key = {i}
          >
            <Link to={BaseURL += "/"+URL_Item}>
              {URL_Item}
            </Link>
          </li>
        )
        }
      )}
    </ul></div> </div> </div></div></div>
    
  )
}