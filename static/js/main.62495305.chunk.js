(this["webpackJsonpreact-training"]=this["webpackJsonpreact-training"]||[]).push([[0],{29:function(e,t,a){},69:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),c=a(16),s=a.n(c),o=a(7),i=a(4),l=a.n(i),u=a(6),d=a(17),p=a(18),m=a(19),h=a(23),j=a(22),b=(a(29),a(0)),O=function(e){var t=e.onSetQuery,a=e.query,n=e.onGetPictures;return Object(b.jsx)("header",{className:"Searchbar",children:Object(b.jsxs)("form",{className:"SearchForm",onSubmit:n,children:[Object(b.jsx)("button",{type:"submit",className:"SearchForm-button",children:Object(b.jsx)("span",{className:"SearchForm-button-label",children:"Search"})}),Object(b.jsx)("input",{onInput:t,name:"query",className:"SearchForm-input",value:a,type:"text",autoComplete:"off",autoFocus:!0,placeholder:"Search images and photos"})]})})},g=function(e){var t=e.pictures,a=e.onOpenModal;return Object(b.jsx)(b.Fragment,{children:t.map((function(e){var t=e.webformatURL,n=e.id,r=e.largeImageURL,c=e.tags;return Object(b.jsx)("li",{className:"ImageGalleryItem",onClick:a,children:Object(b.jsx)("img",{src:t,"data-source":r,alt:c,className:"ImageGalleryItem-image"})},n)}))})},f=function(e){var t=e.pictures,a=e.onOpenModal;return Object(b.jsx)("ul",{className:"ImageGallery",children:Object(b.jsx)(g,{onOpenModal:a,pictures:t})})},y=function(e){var t=e.modalImg,a=e.onCloseModal;return Object(b.jsx)("div",{className:"Overlay",onClick:a,children:Object(b.jsx)("div",{className:"Modal",children:Object(b.jsx)("img",{src:t,alt:""})})})},x=(a(20),function(e){var t=e.onLoadMore;return Object(b.jsx)("button",{type:"button",className:"Button",onClick:t,children:" Load More"})});var v=function(){window.scrollTo({top:document.querySelector(".ImageGallery").scrollHeight,behavior:"smooth"})},M=a(21),S=a.n(M),I=function(e,t){return S()({method:"GET",url:"https://pixabay.com/api/?key=&key=15900106-2c235e732bb321ca7ec900d93&q=".concat(e,"&page=").concat(t,"&per_page=12")})},N=function(e){Object(h.a)(a,e);var t=Object(j.a)(a);function a(){var e;Object(p.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={page:1,query:"",pictures:[],isModalOpen:!1,modalImg:""},e.handleSetQuery=function(t){e.setState(Object(d.a)({},t.target.name,t.target.value))},e.handleGetPictures=function(){var t=Object(u.a)(l.a.mark((function t(a){var n,r,c,s;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a.preventDefault(),n=e.state,r=n.page,c=n.query,t.next=4,I(c,r);case 4:s=t.sent,e.setState({pictures:s.data.hits});case 6:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e.handleOpenModal=function(t){e.setState({isModalOpen:!0,modalImg:t.target.dataset.source})},e.handleCloseModal=function(t){"IMG"!==t.target.nodeName&&e.setState({isModalOpen:!1,modalImg:""})},e.handleLoadMore=Object(u.a)(l.a.mark((function t(){var a,n,r,c;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a=e.state,n=a.page,r=a.query,t.next=3,I(r,n+1);case 3:c=t.sent,e.setState((function(e){return{pictures:[].concat(Object(o.a)(e.pictures),Object(o.a)(c.data.hits)),page:e.page+1}})),v();case 6:case"end":return t.stop()}}),t)}))),e}return Object(m.a)(a,[{key:"render",value:function(){return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)(O,{onSetQuery:this.handleSetQuery,query:this.state.query,onGetPictures:this.handleGetPictures}),!1,Object(b.jsx)(f,{onOpenModal:this.handleOpenModal,pictures:this.state.pictures}),this.state.isModalOpen&&Object(b.jsx)(y,{modalImg:this.state.modalImg,onCloseModal:this.handleCloseModal}),Object(b.jsx)(x,{onLoadMore:this.handleLoadMore})]})}}]),a}(n.Component);s.a.render(Object(b.jsx)(r.a.StrictMode,{children:Object(b.jsx)(N,{})}),document.getElementById("root"))}},[[69,1,2]]]);
//# sourceMappingURL=main.62495305.chunk.js.map