import React from 'react';

export const SortPagHeader = () => {

  return (
    <div className="list-page-wrapper d-flex justify-content-between align-items-center">
  <div className="shown d-flex align-items-center">
    <span className="text">
      Сортиране по:
    </span>
    <div className="filters-top-item filters-sorting float-none d-inline-block ml-1 mr-3">
      <a id="filter-by" href="javascript:;" ></a>
      <div className="filter-container filters-sort">
        <ul>
          <li><a href="javascript:;" className="filter-sort-link " data-value="publish_date.desc" data-default="1">Дата на
              публикуване</a></li>
          <li><a href="javascript:;" className="filter-sort-link " data-value="price" data-default="0">Цена (възходящ
              ред)</a></li>
          <li><a href="javascript:;" className="filter-sort-link " data-value="price.desc" data-default="0">Цена (низходящ
              ред)</a></li>
          <li><a href="javascript:;" className="filter-sort-link " data-value="product_likes.desc"
              data-default="0">Най-харесвани продукти</a></li>
        </ul>
      </div>
    </div>
    <span className="text">
      <span className="shownText"></span> 2&nbsp;161 - 2&nbsp;190 от 289&nbsp;684 резултата
    </span>
  </div>
  <div className="pages-selector-wrapper"><span>Брой продукти:</span>
    <ul id="page-size-selector" className="pagination d-inline-flex m-0 ml-1">
      <li id="products-count" className="page-item active"><a className="page-link" data-value="30" href="javascript:;">30</a>
      </li>
      <li id="products-count" className="page-item "><a className="page-link" data-value="60" href="javascript:;">60</a></li>
      <li id="products-count" className="page-item "><a className="page-link" data-value="120" href="javascript:;">120</a>
      </li>
    </ul>
  </div>
  <div className="pagination-wrapper" id="product-list-pager">
    <ul className="pagination m-0" id="htmlHasNoDiv">
      <li className="d-none"><a className="page-link" href="/bg/womens-clothes">&lt;&lt; Първо</a></li>
      <li className="previous"><a className="page-link" href="/bg/womens-clothes?page=72">&lt;</a></li>
      <li className="page-item"><a className="page-link" href="/bg/womens-clothes?page=71">71</a></li>
      <li className="page-item"><a className="page-link" href="/bg/womens-clothes?page=72">72</a></li>
      <li className="page-item active"><a className="page-link" href="/bg/womens-clothes?page=73">73</a></li>
      <li className="page-item"><a className="page-link" href="/bg/womens-clothes?page=74">74</a></li>
      <li className="page-item"><a className="page-link" href="/bg/womens-clothes?page=75">75</a></li>
      <li className="next"><a className="page-link" href="/bg/womens-clothes?page=74">&gt;</a></li>
      <li className="d-none"><a className="page-link" href="/bg/womens-clothes?page=9657">Последна</a></li>
    </ul>
  </div>
</div>
  );
};