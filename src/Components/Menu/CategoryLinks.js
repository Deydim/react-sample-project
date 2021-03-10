import React from 'react';
import {Link} from 'react-router-dom';

export const CategoryLinks = ({list, baseURL}) => {
  return (
    list.map((ListItem, i) => {
      return (
        <li
          key={i}
        >
          <Link
            to={baseURL + ListItem.aHref}
          >
            {ListItem.value}
            <span className="count" > 
              ({ListItem.count})
            </span>
          </Link>
        </li>
      )
    })
  )
}