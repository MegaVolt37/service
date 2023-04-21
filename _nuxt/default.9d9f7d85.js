import{_ as L}from"./nuxt-link.177252fd.js";import{f as b,l as v,m as Q,h as w,o as r,b as i,e,j as k,t as y,u as p,p as V,w as M,v as R,F as q,r as S,c as z,k as C,a as N,q as A,s as T,x as D,y as F,z as H,i as h,A as B,B as j}from"./entry.064657c4.js";const O={class:"select__title"},P={class:"select__list"},U=["onClick"],E=b({__name:"Select",setup(l){const n=v(Q({useScope:"global"})),{t,locale:c,setLocale:_}=n.value,a=[{key:"en",title:t("language.en")},{key:"ru",title:t("language.ru")}];let s=v(c),o=v(!1);const m=w(()=>a.find(u=>u.key==s.value)),g=w(()=>o.value?"transform: rotateZ(45deg); margin-top: 4px;":""),x=u=>{_(u),s.value=u},f=u=>{o.value=u};return(u,d)=>{var I;return r(),i("div",{class:"select",onMousemove:d[0]||(d[0]=$=>f(!0)),onMouseleave:d[1]||(d[1]=$=>f(!1))},[e("div",O,[k(y((I=p(m))==null?void 0:I.title)+" ",1),e("span",{style:V(p(g))},null,4)]),M(e("ul",P,[(r(),i(q,null,S(a,$=>e("li",{class:"select__item",key:$.key,onClick:Le=>x($.key)},y($.title),9,U)),64))],512),[[R,p(o)]])],32)}}});const G={class:"cart__item"},X=e("button",null,"X",-1),Y=["src","alt"],Z={class:"choiser"},J=["value"],K=b({__name:"Cart_Item",props:{item:{required:!0,type:Object}},emits:["subtractQuantity","submit"],setup(l,{emit:n}){const{item:t}=l,c=()=>{if((t==null?void 0:t.quantity)>1){let s=t.quantity;s--,n("subtractQuantity",{item:t,quantity:s})}},_=()=>{let s=t.quantity;s++,n("subtractQuantity",{item:t,quantity:s})},a=s=>{s?n("subtractQuantity",{item:t,quantity:s}):n("subtractQuantity",{item:t,quantity:1})};return(s,o)=>{var m,g,x,f,u;return r(),i("div",G,[X,e("img",{class:"",src:(m=l.item)==null?void 0:m.product.images[0],alt:(g=l.item)==null?void 0:g.product.name,width:"100",height:"100"},null,8,Y),e("div",null,y((x=l.item)==null?void 0:x.product.name),1),e("div",Z,[e("span",{onClick:c},"-"),e("input",{type:"tel",value:(f=l.item)==null?void 0:f.quantity,onInput:o[0]||(o[0]=d=>a(+d.target.value)),onBlur:o[1]||(o[1]=d=>a(+d.target.value))},null,40,J),e("span",{onClick:_},"+")]),e("div",null,y(new Intl.NumberFormat(void 0,{style:"currency",currency:"RUB"}).format((u=l.item)==null?void 0:u.product.price)),1)])}}});const W={class:"panel__cart"},ee={class:"btn__header",role:"button"},te={key:0,class:"cart__items"},se={key:1,class:"cart__footer"},ne=e("span",null,"100",-1),ae=b({__name:"Cart",setup(l){const n=v([{id:1,product:{id:1,name:"wdad",description:"wdad",price:130,rating:0,images:["https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/800px-Image_created_with_a_mobile_phone.png"]},quantity:3},{id:2,product:{id:2,name:"wda13d",description:"wda4d",price:1130,rating:0,images:["https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/800px-Image_created_with_a_mobile_phone.png"]},quantity:1}]),t=v(!1),c=_=>{const{item:a,quantity:s}=_;a.quantity=s};return(_,a)=>(r(),i("div",W,[e("span",ee,y(_.$t("cart")),1),p(t)?(r(),i("div",te,[(r(!0),i(q,null,S(p(n),(s,o)=>(r(),z(K,{key:o,item:s,onSubtractQuantity:c},null,8,["item"]))),128))])):C("",!0),p(t)?(r(),i("div",se,[e("span",null,y(_.$t("total"))+":",1),ne])):C("",!0)]))}});const oe={props:{fill:{type:String,default:"#000000"}}},ce={version:"1.0",xmlns:"http://www.w3.org/2000/svg",width:"1280.000000pt",height:"1276.000000pt",viewBox:"0 0 1280.000000 1276.000000",preserveAspectRatio:"xMidYMid meet"},_e=["fill"],re=e("path",{d:`M4600 12749 c-1217 -85 -2313 -580 -3160 -1429 -788 -790 -1271\r
      -1788 -1404 -2905 -153 -1278 200 -2564 983 -3585 181 -237 501 -570 726 -759\r
      316 -263 641 -473 1020 -657 537 -261 1052 -404 1715 -476 183 -19 720 -16\r
      925 5 703 75 1359 282 1948 614 l98 56 87 -85 c48 -46 805 -782 1683 -1634\r
      877 -853 1618 -1571 1646 -1596 227 -202 530 -311 818 -295 180 10 292 40 460\r
      122 132 65 213 125 323 239 341 355 427 879 217 1323 -62 132 -134 231 -260\r
      359 -60 61 -829 808 -1707 1658 -879 851 -1598 1551 -1598 1555 0 5 25 51 55\r
      102 135 226 282 545 377 814 182 516 271 993 285 1540 20 806 -143 1565 -491\r
      2280 -239 491 -521 893 -896 1279 -379 389 -794 695 -1275 942 -789 404 -1704\r
      594 -2575 533z m502 -1973 c478 -20 1000 -194 1425 -475 1366 -904 1746 -2702\r
      857 -4061 -221 -338 -521 -638 -864 -863 -892 -586 -2052 -635 -2983 -127\r
      -736 401 -1266 1079 -1468 1877 -68 269 -83 398 -83 713 0 236 3 296 23 420\r
      49 316 127 569 260 845 151 314 327 560 576 810 463 465 1049 757 1695 845 90\r
      13 355 28 405 23 17 -1 87 -5 157 -7z`},null,-1),ie=[re];function le(l,n,t,c,_,a){return r(),i("svg",ce,[e("g",{transform:"translate(0.000000,1276.000000) scale(0.100000,-0.100000)",fill:t.fill,stroke:"none"},ie,8,_e)])}const ue=N(oe,[["render",le]]),de={class:"search"},he=["placeholder"],pe=["name"],me=b({__name:"Search",setup(l){const n=A(),t=T(),c=v(""),_=w({get(){return c.value},set(a){if(c.value=a,a)t.push({query:{...n.query,search:a}});else{const{search:s,...o}=n.query;t.replace({query:o})}}});return D(()=>{n.query.search&&(c.value=n.query.search)}),(a,s)=>(r(),i("div",de,[M(e("input",{class:"",type:"text",placeholder:a.$t("placeholders.search"),"onUpdate:modelValue":s[0]||(s[0]=o=>H(_)?_.value=o:null)},null,8,he),[[F,p(_)]]),e("button",{class:"",name:a.$t("placeholders.search")},[h(ue,{fill:"#008D64"})],8,pe)]))}});const ve={class:"header"},ye={class:"container"},ge={class:"header__top"},fe={class:"header__logo"},$e=e("img",{src:"",alt:"Logo",width:"50",height:"50"},null,-1),be={class:"header__search"},xe={class:"header__panel"},we=e("div",{class:"header__login"},[e("span",{class:"btn__header"},"logout/login")],-1),ke={class:"header__lang"},qe={class:"header__bottom"},Se={class:"header__nav"},Ie={class:"header__nav-list"},Ce=b({__name:"Header",setup(l){const n=v(Q({useScope:"global"})),{t}=n.value,c=w(()=>[{name:t("home"),href:"/"},{name:t("contacts"),href:"/contacts"}]);return(_,a)=>{const s=L,o=E;return r(),i("header",ve,[e("div",ye,[e("div",ge,[e("div",fe,[h(s,{to:"/",class:""},{default:B(()=>[$e,k(" Pay ")]),_:1})]),e("div",be,[h(me)]),e("div",xe,[h(ae)]),we,e("div",ke,[h(o)])]),e("div",qe,[e("nav",Se,[e("ul",Ie,[(r(!0),i(q,null,S(p(c),(m,g)=>(r(),i("li",{class:"header__nav-link",key:g},[h(s,{to:m.href},{default:B(()=>[k(y(m.name),1)]),_:2},1032,["to"])]))),128))])])])])])}}});const Be={},Qe={class:"layout"},Me={class:"page"};function Ne(l,n){const t=Ce,c=j;return r(),i("div",Qe,[h(t),e("div",Me,[h(c)])])}const ze=N(Be,[["render",Ne]]);export{ze as default};
