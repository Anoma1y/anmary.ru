"use strict";var _createClass=function(){function t(t,e){for(var i=0;i<e.length;i++){var a=e[i];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(t,a.key,a)}}return function(e,i,a){return i&&t(e.prototype,i),a&&t(e,a),e}}();function _classCallCheck(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}var Catalog=function(){function t(e,i){_classCallCheck(this,t),this.total_pages,this.items,this.currentPage=1,this.url=e,this.method=i,this.total_items=1,this.item_on_page=1,this.countItems=document.getElementById("countItems"),this.countItemsPerPage=0,this.animationAOS=["fade-up","fade-in","fade-right","fade-left","fade-up-right","fade-up-left","fade-down-right","fade-down-left"],this.state={categoryFilter:[],brandFilter:[],seasonFilter:[],isSaleFilter:"",minPrice:0,maxPrice:0,sortBy:"sortByNewest",searchValue:""}}return _createClass(t,[{key:"randomInteger",value:function(t,e){return Math.round(t-.5+Math.random()*(e-t+1))}},{key:"init",value:function(){this.getData(this.currentPage,this.state)}},{key:"receivingВata",value:function(t,e){var i=this;return new Promise(function(a,n){"POST"==i.method?$.ajax({url:i.url,method:i.method,data:{page:t,state:e}}).done(a).fail(n):"GET"==i.method&&$.ajax({url:i.url,method:i.method}).done(a).fail(n)})}},{key:"getData",value:async function(t,e){var i=this;if("POST"==this.method)try{var a=await this.receivingВata(t,e);this.items=$.parseJSON(a),this.total_items=this.items.total_item,this.item_on_page=this.items.record_per_page,this.currentPage=this.items.current_page,$(".catalog-items-list").html(""),void 0!=this.items.item?(this.itemsRender(this.items.item),this.countItemsPerPage=Object.keys(this.items.item).length,this.countItems.innerText=this.currentCountItems(this.countItemsPerPage,this.currentPage,this.item_on_page,this.total_items),$(".paginations").pagination({items:this.total_items,itemsOnPage:this.item_on_page,cssStyle:"dark-theme",prevText:"",nextText:"",hrefTextPrefix:"",currentPage:this.currentPage,onPageClick:function(t){i.getData(t,i.state)}})):this.items.length>=1?this.itemsRender(this.items):this.countItemsRender(0)}catch(t){throw this.countItemsRender("Error"),new Error(t)}else if("GET"==this.method){a=await this.receivingВata(t,e);console.log($.parseJSON(a))}}},{key:"itemsRender",value:function(t){var e=!0,i=!1,a=void 0;try{for(var n,r=t[Symbol.iterator]();!(e=(n=r.next()).done);e=!0){var s=n.value,o="",c="";1==s.is_sale?(o='<p class="item-old-price">'+s.price+' руб.</p><p class="item-sale-price">'+s.sale_price+" руб.</p>",c='<div class="item-sale-percent"><p>'+s.percentSale+"%</p></div>"):o="<p>"+s.price+" руб.</p>",$(".catalog-items-list").append('\n                    <div class="catalog-item" data-aos="'+this.animationAOS[this.randomInteger(0,7)]+'" data-aos-duration="500">\n                        <div class="shadow"></div>\n                        <img src="'+s.image+'" alt="Item-'+s.id+'">\n                        '+c+'\n                        <div class="image_overlay"></div>\n                        <div class="add_to_cart product_opacity">Добавить в корзину</div>\n                        <div class="add_to_compare product_opacity">Отложить</div>\n                        <div class="product-info">         \n                            <div class="info-container">\n                                <div class="info-container-header">\n                                    <div class="product-name">\n                                        <a href="../product/'+s.id+'">\n                                        <p class="product-title">'+s.name+" "+s.article+'</p>\n                                        <p class="product-brand">'+s.brand_name+'</p>\n                                        </a> \n                                    </div>\n                                    <div class="product-price">'+o+'</div>\n                                </div>\n                                <div class="product-hide-info">\n                                    <strong>Размер</strong>\n                                    <div class="product-size">'+s.size+'</div>\n                                    <strong>Состав</strong>\n                                    <div class="product-compositions">\n                                        '+s.composition+"\n                                    </div>\n                                </div>                       \n                            </div>                         \n                        </div>\n                    </div>\n                ")}}catch(t){i=!0,a=t}finally{try{!e&&r.return&&r.return()}finally{if(i)throw a}}}},{key:"countItemsRender",value:function(t){"Error"==t?($(".catalog-items-list").html(""),$(".catalog-items-list").append("<h1>Список пуст</h1>"),this.countItems.innerText=0):0==t&&($(".catalog-items-list").append("<h1>Список пуст</h1>"),this.countItems.innerText=0)}},{key:"currentCountItems",value:function(t,e,i,a){if(0!=this.countItemsPerPage){var n=i*(e-1)+1;return"Показано с "+n+" по "+(n-1+t)+" из "+a}return"0"}}]),t}(),Filter=function(){function t(e){_classCallCheck(this,t),this.minPrice=document.getElementById("minPrice"),this.maxPrice=document.getElementById("maxPrice"),this.categoryList=document.getElementsByName("categoryList"),this.brandList=document.getElementsByName("brandList"),this.seasonList=document.getElementsByName("seasonList"),this.searchInput=document.getElementById("searchFilter_input"),this.searchBtn=document.getElementById("searchFilterBtn"),this.filterIsSale=document.getElementById("filterIsSale"),this.sortingList=document.getElementsByName("sortBy"),this.checkPrice=this.checkPrice.bind(this),this.obj=e}return _createClass(t,[{key:"init",value:function(){try{this.checkUndefined(this.minPrice,this.maxPrice)&&(this.obj.state.minPrice=minPrice.value,this.obj.state.maxPrice=maxPrice.value,this.filterPrice()),this.checkUndefined(this.categoryList,this.brandList,this.seasonList)&&this.filterCategory(),this.checkUndefined(this.searchInput,this.searchBtn)&&this.filterSearch(),this.checkUndefined(this.filterIsSale)&&this.filterSale(),this.checkUndefined(this.sortingList)&&this.sorting()}catch(t){console.log(t)}}},{key:"checkUndefined",value:function(){for(var t=arguments.length,e=Array(t),i=0;i<t;i++)e[i]=arguments[i];var a=!0,n=!1,r=void 0;try{for(var s,o=e[Symbol.iterator]();!(a=(s=o.next()).done);a=!0){return void 0!=s.value}}catch(t){n=!0,r=t}finally{try{!a&&o.return&&o.return()}finally{if(n)throw r}}}},{key:"checkPrice",value:function(t){return!(""==t||!t.match(/^\d+$/))}},{key:"sorting",value:function(){var t=this,e=!0,i=!1,a=void 0;try{for(var n,r=this.sortingList[Symbol.iterator]();!(e=(n=r.next()).done);e=!0){n.value.addEventListener("change",function(e){t.obj.state.sortBy=e.target.value,t.obj.currentPage=1,setTimeout(function(){t.obj.getData(t.obj.currentPage,t.obj.state)},500)},!1)}}catch(t){i=!0,a=t}finally{try{!e&&r.return&&r.return()}finally{if(i)throw a}}}},{key:"filterPrice",value:function(){var t=this;this.minPrice.addEventListener("change",function(e){var i=e.target.value;t.checkPrice(i)&&(t.obj.state.minPrice=i,setTimeout(function(){t.obj.getData(t.obj.currentPage,t.obj.state)},500))},!1),this.maxPrice.addEventListener("change",function(e){var i=e.target.value;t.checkPrice(i)&&(t.obj.state.maxPrice=i,setTimeout(function(){t.obj.getData(t.obj.currentPage,t.obj.state)},500))},!1)}},{key:"filterCategory",value:function(){var t=this,e=!0,i=!1,a=void 0;try{for(var n,r=this.categoryList[Symbol.iterator]();!(e=(n=r.next()).done);e=!0){n.value.addEventListener("change",function(e){var i=e.target;if(i.checked)t.obj.currentPage=1,t.obj.state.categoryFilter.push(i.value),setTimeout(function(){t.obj.getData(t.obj.currentPage,t.obj.state)},500);else if(!i.checked){t.obj.currentPage=1;var a=t.obj.state.categoryFilter.indexOf(i.value);t.obj.state.categoryFilter.splice(a,1),setTimeout(function(){t.obj.getData(t.obj.currentPage,t.obj.state)},500)}},!1)}}catch(t){i=!0,a=t}finally{try{!e&&r.return&&r.return()}finally{if(i)throw a}}var s=!0,o=!1,c=void 0;try{for(var l,u=this.brandList[Symbol.iterator]();!(s=(l=u.next()).done);s=!0){l.value.addEventListener("change",function(e){var i=e.target;if(i.checked)t.obj.currentPage=1,t.obj.state.brandFilter.push(i.value),setTimeout(function(){t.obj.getData(t.obj.currentPage,t.obj.state)},500);else if(!i.checked){t.obj.currentPage=1;var a=t.obj.state.brandFilter.indexOf(i.value);t.obj.state.brandFilter.splice(a,1),setTimeout(function(){t.obj.getData(t.obj.currentPage,t.obj.state)},500)}},!1)}}catch(t){o=!0,c=t}finally{try{!s&&u.return&&u.return()}finally{if(o)throw c}}var h=!0,d=!1,m=void 0;try{for(var g,f=this.seasonList[Symbol.iterator]();!(h=(g=f.next()).done);h=!0){g.value.addEventListener("change",function(e){var i=e.target;if(i.checked)t.obj.currentPage=1,t.obj.state.seasonFilter.push(i.value),setTimeout(function(){t.obj.getData(t.obj.currentPage,t.obj.state)},500);else if(!i.checked){t.obj.currentPage=1;var a=t.obj.state.seasonFilter.indexOf(i.value);t.obj.state.seasonFilter.splice(a,1),setTimeout(function(){t.obj.getData(t.obj.currentPage,t.obj.state)},500)}},!1)}}catch(t){d=!0,m=t}finally{try{!h&&f.return&&f.return()}finally{if(d)throw m}}}},{key:"filterSearch",value:function(){var t=this;this.searchBtn.addEventListener("click",function(){var e=t.searchInput.value;0==e.length?(t.obj.state.searchValue="",t.obj.currentPage=1,setTimeout(function(){t.obj.getData(t.obj.currentPage,t.obj.state)},500)):e.length>=3&&e.length<=20&&(e.match(/[^a-zA-Zа-яА-Я0-9]/g)||(t.obj.state.searchValue="%"+e+"%",t.obj.currentPage=1,setTimeout(function(){t.obj.getData(t.obj.currentPage,t.obj.state)},500)))})}},{key:"filterSale",value:function(){var t=this;this.filterIsSale.addEventListener("change",function(e){var i=e.target;i.checked?(t.obj.state.isSaleFilter=1,t.obj.currentPage=1,setTimeout(function(){t.obj.getData(t.obj.currentPage,t.obj.state)},500)):i.checked||(t.obj.state.isSaleFilter="",t.obj.currentPage=1,setTimeout(function(){t.obj.getData(t.obj.currentPage,t.obj.state)},500))},!1)}}]),t}();