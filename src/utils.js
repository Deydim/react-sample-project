//better to parse URL as object and deal with params in it 
//and then join to search query string to avoid bugs with men/women overlapping

export const createURL =  (name, item, search, pathname) => { 
  let query = new URLSearchParams(search);
  let queryString,
      nameValue;
  if (query.has(name) && query.get(name) === item) {
    query.delete(name);
    queryString = query.toString();
    queryString = unescape(queryString);
  }
  else if (query.has(name) && query.get(name).includes(item)) {
    nameValue = query.get(name);
    let queryArray = nameValue.split(",");
    nameValue = queryArray.filter(element => element !== item).join(",");
    query.set(name, nameValue);
    queryString = query.toString();
    queryString = unescape(queryString);
  }
  else if (query.has(name) && !query.get(name).includes(item)) {
    nameValue = query.get(name);
    query.set(name, nameValue + "," +item);
    queryString = query.toString();
    queryString = unescape(queryString);
  }
  else if (!query.has(name)){
    query.set(name, item); 
    queryString = query.toString();
    queryString = unescape(queryString);
  }
  return pathname + "?" + queryString;
};