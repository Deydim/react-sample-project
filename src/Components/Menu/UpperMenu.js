import React from 'react';
import { Link, useParams, useRouteMatch } from 'react-router-dom';

export const UpperMenu = ({list}) => {
  const {path, url} = useRouteMatch();
  const paramsArray = useParams ();
  const catType = paramsArray.catType;
  let params = Object.keys(paramsArray);
  return (
    list.map((ListItem, i) => {
      return (
        <li
          key={ListItem.class}
          title={ListItem.title}
          //below code selects item by position in json instead of by value
          className={(url.includes(ListItem.href) && ListItem.class !== Object.values(list)[0].class) || (ListItem.class === Object.values(list)[0].class && path.includes(params[0] + "/:" +params[1])) 
            ? ListItem.class + " active" 
            : ListItem.class}
        >
          <Link
            to= {ListItem.href + (catType ? "/" + catType : "")} 
            className={"section-tab"}
          >
            {ListItem.value}
          </Link>
        </li>
      )
    })
  )
}