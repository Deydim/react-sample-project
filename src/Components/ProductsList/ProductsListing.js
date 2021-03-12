import React, { Suspense } from 'react';
import sample_productsList from '../../JSON/sampleProductList'
import useFetch from 'fetch-suspense';


export const ProductsListing = ({productsData}) => {
  return (
    <ul className="product-listing row list-unstyled">
      {productsData.map((item,i)=> {
        return (
      <li key = {i} className="col-6 col-sm-4 col-md-3 col-lg-2 product-item product-data d-flex ">
        <div className="product-box">
          <div className="product-box-content">
            <div className="product-box-hover">
              <a className="product-photos" 
                href={"/Something_for_URL_unique_id="+ item.id +".html"} 
                // actual ajax: "remixshop.com/api/product/view?id=15469588" // build some url for SEO purposes
                title={item.title} // title
                // title="Дамски панталон New Look" // title
              >
               <img className="img-fluid"
                  src={"https://media.remix.eu/" + item.image_path + item.image_name}
                  // src="https://media.remix.eu/files/52-2019/312_Damski-pantalon-New-Look-107485579a.jpg"
                    // media server + image_path + image_name;
                  data-img={"https://media.remix.eu/" + item.image_path + item.image_name.replace("a.jpg","b.jpg")}
                  // data-img="https://media.remix.eu/files/52-2019/312_Damski-pantalon-New-Look-107485579b.jpg"
                  // replace "a" with "b" from src attribute
                  alt={item.title} // same as title
                  /> 
               
              </a>

            </div>
            <div className="product-detail-info">
              <div className="discount-wrapper">

                {/* Span below rendered only if "isNew": true from json */}
                {
                item.isNew &&
                <span className="condition new">
                  <span className="new-label" title="Нов продукт"></span>
                </span>
                }
                {/*End of span  */}

                <span className="favourite  fav-button-add show-tooltip" 
                  title={"Любим продукт на "+item.product_likes+" клиенти"} // product_likes: 8, can be 0
                  // title={"Любим продукт на 8 клиенти"} // product_likes: 8, can be 0
                >
                  <span className="fav-icon"></span>
                  <span className="fav-count ">
                    {/* 8  //product_likes: 8  */}
                    {item.product_likes}
                  </span>
                </span>
              </div>

              <div className="cornerWrapper">
                {/*  span below sets badge if Outlet or Sale*/}
                {item.outlet &&
                <span 
                  className="outlet-badge has-tooltip" //"outlet": true, "sale": false
                  title="Outlet продукт"
                >
                </span>
                }
                {item.sale &&
                <span 
                  className="voucher_badge" //"outlet": true, "sale": false
                  title="Sale продукт"
                >
                </span>
                }
                {/* end of spanс  */}
              </div>
              <div 
                className={"product-info mc"+ item.main_category}  // mc + main_category
                // className="product-info mc10000"  // mc + main_category
              >
                <a 
                  href={"/Something_for_URL_unique_id="+ i +".html"} //same as href above
                  // href="https://remixshop.com/bg/womens-clothes-trousers-new-look-pr15465988.html" //same as href above
                  title={item.brand} // brand:
                  className="product-brand">
                  {/* New Look //brand: */}
                  {item.brand}
                </a>
                <span className="product-size">
                  {item.size_label}
                  {/* L // size label or size_name or size_label */}
                </span> 
              </div>
              <div className="product-price">
                <div className="cont-flex">
    {/* missing when no promo */}
    { !!item.promo &&
                  <div className="hidden">
                    <div className="tooltip-content custom-tooltip text-nowrap">
                      <div>
                        {
                        ((item.outlet && item.sale) || (item.sale)) ? `Промоционална отстъпка: -${item.promo}` ?
                        (item.outlet && !item.sale) && `Промоционална отстъпка: -${item.promo}` :
                        (!item.outlet && !item.sale) && `Ежедневна отстъпка: -${item.promo}`: false
                        }
                        {/* Outlet отстъпка: -35% {/* promo: 35; sale = промо отстъпка; без sale/outlet = ежедневна отстъпка */  } */}

                        {/* with sale div below missing */}
                        <div>
                          <a href="/bg/site/falling-prices">
                            Вижте ПАДАЩИ ЦЕНИ И ПРОМОЦИИ </a>
                        </div>
                        {/* end of missing div */}
                      </div>
                    </div>
                  </div>
      }
      {/* end of missing when no promo  */}
                  <div className="price-item d-flex justify-content-between align-items-center">
                    <span className="price-title">
                      Начална цена </span>
                    <span className= {item.promo ? "old-price" : ""}>
                    
                      {/* No classname in span when no promo */}
                      <span>{item.price_original}&nbsp;лв.</span>   {/* price: with no promo, maybe price_source or price_orig with promo*/}
                      {/* <span>44,00&nbsp;лв.</span>   price: with no promo, maybe price_source or price_orig with promo */}
                    </span>
                  </div>
                  {/* div below missing when no promo */}
                  {item.promo &&
                  <div className="price-item d-flex justify-content-between align-items-center promo-item">
                    <span className="promo">
                      {item.promo + "%"} {/*promo: */}
                      {/* -35%   //promo: */}
                    </span>
                    <span className="new-price">
                      {item.price}&nbsp;лв. </span> {/*price: */}
                      {/* 28,60&nbsp;лв. </span> price: */}
                  </div>
                  }
                  {/* end of missing div */}
                </div>
              </div>
            </div>
            <div className="product-button">

              <a title="Добавете в кошницата и резервирайте за 15 мин."
                className={"timer-btn list-add-remove-btn site-btn show-tooltip product-button-"+item.id} 
                //here id is added to class
                href="javascript:;"
              >
                <span className="text">Добавете</span> 
                <div className="count-background" style={{width: "0%"}}></div>
                <time className="timers">
                  <span className="timer " style={{display: "none"}}>
                    <span className="countdown3 countdown hasCountdown"><span
                        className="countdown_row countdown_amount">00:00</span></span>
                  </span>
                </time>
              </a>
            </div>

          </div>

        </div>
      </li>
        );
      })};
    </ul>
  )
}
export const FetchProductList = () => {
  // const response = useFetch('https://remixshop.com/bg/api/product/list?promo[]=35', { method: 'GET', mode: 'cors',});
  const response = useFetch('https://cors-anywhere.herokuapp.com/https://remixshop.com/bg/api/product/list?promo[]=35', { method: 'GET', mode: 'cors',});
  // const response = sample_productsList;
  return (
    <ProductsListing productsData = {response.products}/>
  );
}