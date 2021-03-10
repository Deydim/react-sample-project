import React from 'react';

export const PagFooter = () => {

  return (
  <div id="product-list-pager-bottom" className="pagination-wrapper d-flex justify-content-end mb-4">
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
  );
};