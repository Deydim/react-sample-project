import React from 'react';
import ReactDOM from 'react-dom';
import {Link} from 'react-router-dom';

import upperMenu from "../../JSON/upperMenu";
import categoryLinks from "../../JSON/categoryLinks";
import categoryMainData from "../../JSON/categoryMainData";
import filterMain from "../../JSON/filterMain";
import catSelectedSizes from "../../JSON/catSelectedSizes";
//js below
import {CategoriesFilter} from "../../Components/Filters/CategoriesFilter";
import {BrandsFilter} from "../../Components/Filters/BrandsFilter";

const filterComponentRegistry = {   //used for dynamically calling from string
  CategoriesFilter: CategoriesFilter,
  BrandsFilter: BrandsFilter,
  SizesFilter: SizesFilter,
  ColorFilter: ColorFilter,
  ConditionFilter: ConditionFilter,
  SeasonsFilter: SeasonsFilter,
  AddedFilter: AddedFilter,
  PromoFilter: PromoFilter,
  PriceFilter: PriceFilter,
  ListTags: ListTags
};

export const getComponentByName = (props) => filterComponentRegistry[props];

function SizesFilter (props) {      // code splitting here can be implemented with router too
  let ListItem= props.catSelected;
  let List = catSelectedSizes.List;
  
  return (
    <div className='filter-container clearfix' dangerouslySetInnerHTML={ { __html: List[ListItem] } }></div>
  )
}

function ColorFilter () {
  return (
    <div className="filter-container"> <a className="colors filter-hidden-input" href="javascript:;" title="Червен"> <span className="color-icon"><span id="color_1"></span> </span> <span className="color-title"> Червен                                                    </span> </a> <input type="hidden" name="color" value="1" disabled/> <a className="colors filter-hidden-input" href="javascript:;" title="Оранжев"> <span className="color-icon"><span id="color_2"></span> </span> <span className="color-title"> Оранжев                                                    </span> </a> <input type="hidden" name="color" value="2" disabled/> <a className="colors filter-hidden-input" href="javascript:;" title="Жълт"> <span className="color-icon"><span id="color_3"></span> </span> <span className="color-title"> Жълт                                                    </span> </a> <input type="hidden" name="color" value="3" disabled/> <a className="colors filter-hidden-input" href="javascript:;" title="Зелен"> <span className="color-icon"><span id="color_4"></span> </span> <span className="color-title"> Зелен                                                    </span> </a> <input type="hidden" name="color" value="4" disabled/> <a className="colors filter-hidden-input" href="javascript:;" title="Син"> <span className="color-icon"><span id="color_5"></span> </span> <span className="color-title"> Син                                                    </span> </a> <input type="hidden" name="color" value="5" disabled/> <a className="colors filter-hidden-input" href="javascript:;" title="Лилав"> <span className="color-icon"><span id="color_6"></span> </span> <span className="color-title"> Лилав                                                    </span> </a> <input type="hidden" name="color" value="6" disabled/> <a className="colors filter-hidden-input" href="javascript:;" title="Кафяв"> <span className="color-icon"><span id="color_7"></span> </span> <span className="color-title"> Кафяв                                                    </span> </a> <input type="hidden" name="color" value="7" disabled/> <a className="colors filter-hidden-input" href="javascript:;" title="Сив"> <span className="color-icon"><span id="color_8"></span> </span> <span className="color-title"> Сив                                                    </span> </a> <input type="hidden" name="color" value="8" disabled/> <a className="colors filter-hidden-input" href="javascript:;" title="Бежов"> <span className="color-icon"><span id="color_9"></span> </span> <span className="color-title"> Бежов                                                    </span> </a> <input type="hidden" name="color" value="9" disabled/> <a className="colors filter-hidden-input" href="javascript:;" title="Многоцветен"> <span className="color-icon"><span id="color_10"></span> </span> <span className="color-title"> Многоцветен                                                    </span> </a> <input type="hidden" name="color" value="10" disabled/> <a className="colors filter-hidden-input" href="javascript:;" title="Златист"> <span className="color-icon"><span id="color_11"></span> </span> <span className="color-title"> Златист                                                    </span> </a> <input type="hidden" name="color" value="11" disabled/> <a className="colors filter-hidden-input" href="javascript:;" title="Сребрист"> <span className="color-icon"><span id="color_12"></span> </span> <span className="color-title"> Сребрист                                                    </span> </a> <input type="hidden" name="color" value="12" disabled/> <a className="colors filter-hidden-input" href="javascript:;" title="Черен"> <span className="color-icon"><span id="color_13"></span> </span> <span className="color-title"> Черен                                                    </span> </a> <input type="hidden" name="color" value="13" disabled/> <a className="colors filter-hidden-input" href="javascript:;" title="Бял"> <span className="color-icon"><span id="color_14"></span> </span> <span className="color-title"> Бял                                                    </span> </a> <input type="hidden" name="color" value="14" disabled/> <a className="colors filter-hidden-input" href="javascript:;" title="Розов"> <span className="color-icon"><span id="color_16"></span> </span> <span className="color-title"> Розов                                                    </span> </a> <input type="hidden" name="color" value="16" disabled/> <a className="colors filter-hidden-input" href="javascript:;" title="Пепел от рози"> <span className="color-icon"><span id="color_17"></span> </span> <span className="color-title"> Пепел от рози                                                    </span> </a> <input type="hidden" name="color" value="17" disabled/> </div>
  )
}

function ConditionFilter () {
  return (
    <div className="filter-container clearfix"> <div className="filter-items"> <a className="condition-new filter-hidden-input" href="javascript:;" title="Нов продукт, с етикет"> <span className="filter-icon">&nbsp;</span> <span className="new-label mr-1"></span> Нов продукт                                            </a> <input type="hidden" id="new" name="new" value="1" disabled/> </div> <div className="filter-items"> <a className="condition-new filter-hidden-input" href="javascript:;" title="Нов, неупотребяван продукт, без етикет"> <span className="filter-icon">&nbsp;</span> Нов продукт, без етикет                                                </a> <input type="hidden" id="new" name="new" value="2" disabled/> </div> <div className="filter-items"> <a className="filter-hidden-input" href="javascript:;" title="Без никакви следи от употреба"> <span className="filter-icon">&nbsp;</span> <span className="conditions-icons-list"> <i className="star-icon-fill"></i> <i className="star-icon-fill"></i> <i className="star-icon-fill"></i> <i className="star-icon-fill"></i> <i className="star-icon-fill"></i> </span> </a> <input type="hidden" id="condition_5" name="condition" value="5" disabled/> </div> <div className="filter-items"> <a className="filter-hidden-input" href="javascript:;" title="В много добро състояние"> <span className="filter-icon">&nbsp;</span> <span className="conditions-icons-list"> <i className="star-icon-fill"></i> <i className="star-icon-fill"></i> <i className="star-icon-fill"></i> <i className="star-icon-fill"></i> <i className="star-icon"></i> </span> </a> <input type="hidden" id="condition_4" name="condition" value="4" disabled/> </div> </div>
  )
}

function SeasonsFilter () {
  return (
    <div className="filter-container clearfix"> <div className="filter-items"> <a className="seasons filter-hidden-input" href="javascript:;" title="Пролет/Есен"> <span className="filter-icon">&nbsp;</span> <span className="condition-img"></span> Пролет/Есен                                                    </a> <input type="hidden" id="season" name="season" value="1" disabled/> </div> <div className="filter-items"> <a className="seasons filter-hidden-input" href="javascript:;" title="Зима"> <span className="filter-icon">&nbsp;</span> <span className="condition-img"></span> Зима                                                    </a> <input type="hidden" id="season" name="season" value="4" disabled/> </div> </div>
  )
}

function AddedFilter () {
  return (
    <div className="filter-container clearfix"> <div className="filter-items"> <a href="javascript:;" className="filter-hidden-input" title="Филтрирайте най-нови продукти"> <span className="filter-icon">&nbsp;</span> <span className="filter-label">Днес</span> </a> <input type="hidden" id="last_today" value="1" name="last" disabled                                                       className="filter-date-added" /> </div> <div className="filter-items"> <a href="javascript:;" className="filter-hidden-input" title="Филтрирайте най-нови продукти"> <span className="filter-icon">&nbsp;</span> <span className="filter-label">Последните 3 дни</span> </a> <input type="hidden" id="last_3_days" value="2" name="last" disabled                                                       className="filter-date-added" /> </div> </div>
  )
}
function PromoFilter () {
  return (
    <div className="filter-container clearfix"> <div className="filter-items"> <a href="javascript:;" className="filter-hidden-input " title="От -5% до -20%"> <span className="filter-icon">&nbsp;</span> <span className="filter-label">От -5% до -20%</span> </a> <input type="hidden" id="promo-filter-5-20" value="5-20" name="promo" disabled /> </div><div className="filter-items"> <a href="javascript:;" className="filter-hidden-input " title="От -20% до -40%"> <span className="filter-icon">&nbsp;</span> <span className="filter-label">От -20% до -40%</span> </a> <input type="hidden" id="promo-filter-20-40" value="20-40" name="promo" disabled /> </div><div className="filter-items"> <a href="javascript:;" className="filter-hidden-input " title="От -40% до -60%"> <span className="filter-icon">&nbsp;</span> <span className="filter-label">От -40% до -60%</span> </a> <input type="hidden" id="promo-filter-40-60" value="40-60" name="promo" disabled /> </div><div className="filter-items"> <a href="javascript:;" className="filter-hidden-input " title="От -60% до -75%"> <span className="filter-icon">&nbsp;</span> <span className="filter-label">От -60% до -75%</span> </a> <input type="hidden" id="promo-filter-60-75" value="60-75" name="promo" disabled /> </div><div className="filter-items"> <a href="javascript:;" className="filter-hidden-input " title="-75% +"> <span className="filter-icon">&nbsp;</span> <span className="filter-label">-75% +</span> </a> <input type="hidden" id="promo-filter-75-100" value="75-100" name="promo" disabled /> </div> </div>
  );
}

function PriceFilter () {
  return (
    <div className="filter-container clearfix"> <div className="filter-items"> <a href="javascript:;" className="filter-hidden-input" title="До 5 лв."> <span className="filter-icon">&nbsp;</span> <span className="filter-label">До 5 лв.</span> </a> <input type="hidden" id="price-filter-1" value="1" name="price" disabled className="filter-price"/> </div> <div className="filter-items"> <a href="javascript:;" className="filter-hidden-input" title="От 5 лв. до 10 лв."> <span className="filter-icon">&nbsp;</span> <span className="filter-label">От 5 лв. до 10 лв.</span> </a> <input type="hidden" id="price-filter-2" value="2" name="price" disabled                                                           className="filter-price"/> </div> <div className="filter-items"> <a href="javascript:;" className="filter-hidden-input" title="От 10 лв. до 50 лв."> <span className="filter-icon">&nbsp;</span> <span className="filter-label">От 10 лв. до 50 лв.</span> </a> <input type="hidden" id="price-filter-3" value="3" name="price" disabled                                                           className="filter-price"/> </div> <div className="filter-items"> <a href="javascript:;" className="filter-hidden-input" title="От 50 лв. до 100 лв."> <span className="filter-icon">&nbsp;</span> <span className="filter-label">От 50 лв. до 100 лв.</span> </a> <input type="hidden" id="price-filter-4" value="4" name="price" disabled                                                           className="filter-price"/> </div> <div className="filter-items"> <a href="javascript:;" className="filter-hidden-input" title="Над 100 лв."> <span className="filter-icon">&nbsp;</span> <span className="filter-label">Над 100 лв.</span> </a> <input type="hidden" id="price-filter-5" value="5" name="price" disabled                                                           className="filter-price"/> </div> </div>
  );
}

function ListTags () {
  return null;
}