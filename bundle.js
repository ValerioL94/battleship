(()=>{var n={28:(n,r,e)=>{"use strict";e.d(r,{Z:()=>p});var t=e(537),o=e.n(t),a=e(645),i=e.n(a),s=e(667),A=e.n(s),d=new URL(e(880),e.b),c=i()(o()),l=A()(d);c.push([n.id,`html,\nbody {\n  border: 0;\n  margin: 0;\n  padding: 0;\n  height: 100%;\n  font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande',\n    'Lucida Sans', Arial, sans-serif;\n}\n\n#container {\n  display: grid;\n  height: 100%;\n  grid-template-rows: 100px auto 50px;\n  background-image: url(${l});\n  background-size: cover;\n}\n\nheader {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 30px;\n  background-color: rgba(170, 187, 199, 0.8);\n  border-bottom: 1px solid;\n}\n\nmain {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n#start {\n  background-color: rgba(255, 255, 255, 0.75);\n}\n#modalWrapper {\n  display: flex;\n  gap: 10px;\n}\nform {\n  display: flex;\n  gap: 10px;\n  padding: 25px;\n  font-size: 1.5em;\n  font-weight: 600;\n}\nform > input[type='text'] {\n  font-size: 0.8em;\n}\n#confirm {\n  width: 80px;\n  border-radius: 5px;\n  font-weight: 600;\n  font-size: 0.7em;\n  background-color: rgba(174, 202, 222, 0.8);\n  cursor: pointer;\n}\n#shipsContainer {\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n  padding: 0 25px 25px;\n}\n.ship {\n  height: 50px;\n  padding: 5px;\n  box-sizing: border-box;\n}\n#carrier {\n  width: 250px;\n}\n#battleship {\n  width: 200px;\n}\n#cruiser {\n  width: 150px;\n}\n#submarine {\n  width: 150px;\n}\n#destroyer {\n  width: 100px;\n}\n.ship.hide {\n  transition: 0.01s;\n  transform: translateX(-9999px);\n}\n#content {\n  display: flex;\n  gap: 50px;\n}\n#content.hide {\n  display: none;\n}\n\n.side {\n  height: 600px;\n  width: 600px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n\n.side > h2 {\n  padding: 5px;\n  background-color: rgba(245, 245, 245, 0.5);\n  width: 500px;\n  text-align: center;\n  box-sizing: border-box;\n}\n#player > h2 {\n  color: blue;\n}\n#opponent > h2 {\n  color: red;\n}\n.board {\n  display: grid;\n  grid-template-rows: repeat(10, 50px);\n  grid-template-columns: repeat(10, 50px);\n}\n\n.board,\n.board > .cell {\n  cursor: crosshair;\n  border: 1px solid black;\n  background-color: rgb(245, 245, 245, 0.3);\n}\n\n#playerBoard > .cell.playerHit {\n  background-color: blue;\n}\n\n#opponent > .board.disabled {\n  pointer-events: none;\n}\n#opponent > .board > div:hover {\n  border: dotted red 3px;\n}\n#opponent > .board > .cell.opponentHit {\n  background-color: red;\n  pointer-events: none;\n}\n.board > .cell.miss {\n  background-color: grey;\n  pointer-events: none;\n}\n\n#gameOver {\n  height: 200px;\n  width: 400px;\n  text-align: center;\n  border-radius: 10px;\n}\n#gameOver::backdrop {\n  background-color: rgba(0, 0, 0, 0.5);\n}\n#gameOver > button {\n  height: 50px;\n  width: 100px;\n  font-weight: 600;\n  font-size: 20px;\n  border-radius: 10px;\n  background-color: rgba(170, 187, 199, 0.8);\n}\n\nfooter {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 10px;\n  font-weight: 600;\n  border-top: 1px solid;\n  background-color: rgba(170, 187, 199, 0.8);\n}\nfooter > a > img {\n  height: 30px;\n  transition: transform 0.5s;\n}\nfooter > a > img:hover {\n  transform: scale(1.2);\n}\n`,"",{version:3,sources:["webpack://./src/styles.css"],names:[],mappings:"AAAA;;EAEE,SAAS;EACT,SAAS;EACT,UAAU;EACV,YAAY;EACZ;oCACkC;AACpC;;AAEA;EACE,aAAa;EACb,YAAY;EACZ,mCAAmC;EACnC,yDAA6C;EAC7C,sBAAsB;AACxB;;AAEA;EACE,aAAa;EACb,mBAAmB;EACnB,uBAAuB;EACvB,eAAe;EACf,0CAA0C;EAC1C,wBAAwB;AAC1B;;AAEA;EACE,aAAa;EACb,mBAAmB;EACnB,uBAAuB;AACzB;AACA;EACE,2CAA2C;AAC7C;AACA;EACE,aAAa;EACb,SAAS;AACX;AACA;EACE,aAAa;EACb,SAAS;EACT,aAAa;EACb,gBAAgB;EAChB,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,WAAW;EACX,kBAAkB;EAClB,gBAAgB;EAChB,gBAAgB;EAChB,0CAA0C;EAC1C,eAAe;AACjB;AACA;EACE,aAAa;EACb,sBAAsB;EACtB,SAAS;EACT,oBAAoB;AACtB;AACA;EACE,YAAY;EACZ,YAAY;EACZ,sBAAsB;AACxB;AACA;EACE,YAAY;AACd;AACA;EACE,YAAY;AACd;AACA;EACE,YAAY;AACd;AACA;EACE,YAAY;AACd;AACA;EACE,YAAY;AACd;AACA;EACE,iBAAiB;EACjB,8BAA8B;AAChC;AACA;EACE,aAAa;EACb,SAAS;AACX;AACA;EACE,aAAa;AACf;;AAEA;EACE,aAAa;EACb,YAAY;EACZ,aAAa;EACb,sBAAsB;EACtB,mBAAmB;AACrB;;AAEA;EACE,YAAY;EACZ,0CAA0C;EAC1C,YAAY;EACZ,kBAAkB;EAClB,sBAAsB;AACxB;AACA;EACE,WAAW;AACb;AACA;EACE,UAAU;AACZ;AACA;EACE,aAAa;EACb,oCAAoC;EACpC,uCAAuC;AACzC;;AAEA;;EAEE,iBAAiB;EACjB,uBAAuB;EACvB,yCAAyC;AAC3C;;AAEA;EACE,sBAAsB;AACxB;;AAEA;EACE,oBAAoB;AACtB;AACA;EACE,sBAAsB;AACxB;AACA;EACE,qBAAqB;EACrB,oBAAoB;AACtB;AACA;EACE,sBAAsB;EACtB,oBAAoB;AACtB;;AAEA;EACE,aAAa;EACb,YAAY;EACZ,kBAAkB;EAClB,mBAAmB;AACrB;AACA;EACE,oCAAoC;AACtC;AACA;EACE,YAAY;EACZ,YAAY;EACZ,gBAAgB;EAChB,eAAe;EACf,mBAAmB;EACnB,0CAA0C;AAC5C;;AAEA;EACE,aAAa;EACb,mBAAmB;EACnB,uBAAuB;EACvB,SAAS;EACT,gBAAgB;EAChB,qBAAqB;EACrB,0CAA0C;AAC5C;AACA;EACE,YAAY;EACZ,0BAA0B;AAC5B;AACA;EACE,qBAAqB;AACvB",sourcesContent:["html,\r\nbody {\r\n  border: 0;\r\n  margin: 0;\r\n  padding: 0;\r\n  height: 100%;\r\n  font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande',\r\n    'Lucida Sans', Arial, sans-serif;\r\n}\r\n\r\n#container {\r\n  display: grid;\r\n  height: 100%;\r\n  grid-template-rows: 100px auto 50px;\r\n  background-image: url(images/battleships.jpg);\r\n  background-size: cover;\r\n}\r\n\r\nheader {\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  font-size: 30px;\r\n  background-color: rgba(170, 187, 199, 0.8);\r\n  border-bottom: 1px solid;\r\n}\r\n\r\nmain {\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n}\r\n#start {\r\n  background-color: rgba(255, 255, 255, 0.75);\r\n}\r\n#modalWrapper {\r\n  display: flex;\r\n  gap: 10px;\r\n}\r\nform {\r\n  display: flex;\r\n  gap: 10px;\r\n  padding: 25px;\r\n  font-size: 1.5em;\r\n  font-weight: 600;\r\n}\r\nform > input[type='text'] {\r\n  font-size: 0.8em;\r\n}\r\n#confirm {\r\n  width: 80px;\r\n  border-radius: 5px;\r\n  font-weight: 600;\r\n  font-size: 0.7em;\r\n  background-color: rgba(174, 202, 222, 0.8);\r\n  cursor: pointer;\r\n}\r\n#shipsContainer {\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 10px;\r\n  padding: 0 25px 25px;\r\n}\r\n.ship {\r\n  height: 50px;\r\n  padding: 5px;\r\n  box-sizing: border-box;\r\n}\r\n#carrier {\r\n  width: 250px;\r\n}\r\n#battleship {\r\n  width: 200px;\r\n}\r\n#cruiser {\r\n  width: 150px;\r\n}\r\n#submarine {\r\n  width: 150px;\r\n}\r\n#destroyer {\r\n  width: 100px;\r\n}\r\n.ship.hide {\r\n  transition: 0.01s;\r\n  transform: translateX(-9999px);\r\n}\r\n#content {\r\n  display: flex;\r\n  gap: 50px;\r\n}\r\n#content.hide {\r\n  display: none;\r\n}\r\n\r\n.side {\r\n  height: 600px;\r\n  width: 600px;\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n}\r\n\r\n.side > h2 {\r\n  padding: 5px;\r\n  background-color: rgba(245, 245, 245, 0.5);\r\n  width: 500px;\r\n  text-align: center;\r\n  box-sizing: border-box;\r\n}\r\n#player > h2 {\r\n  color: blue;\r\n}\r\n#opponent > h2 {\r\n  color: red;\r\n}\r\n.board {\r\n  display: grid;\r\n  grid-template-rows: repeat(10, 50px);\r\n  grid-template-columns: repeat(10, 50px);\r\n}\r\n\r\n.board,\r\n.board > .cell {\r\n  cursor: crosshair;\r\n  border: 1px solid black;\r\n  background-color: rgb(245, 245, 245, 0.3);\r\n}\r\n\r\n#playerBoard > .cell.playerHit {\r\n  background-color: blue;\r\n}\r\n\r\n#opponent > .board.disabled {\r\n  pointer-events: none;\r\n}\r\n#opponent > .board > div:hover {\r\n  border: dotted red 3px;\r\n}\r\n#opponent > .board > .cell.opponentHit {\r\n  background-color: red;\r\n  pointer-events: none;\r\n}\r\n.board > .cell.miss {\r\n  background-color: grey;\r\n  pointer-events: none;\r\n}\r\n\r\n#gameOver {\r\n  height: 200px;\r\n  width: 400px;\r\n  text-align: center;\r\n  border-radius: 10px;\r\n}\r\n#gameOver::backdrop {\r\n  background-color: rgba(0, 0, 0, 0.5);\r\n}\r\n#gameOver > button {\r\n  height: 50px;\r\n  width: 100px;\r\n  font-weight: 600;\r\n  font-size: 20px;\r\n  border-radius: 10px;\r\n  background-color: rgba(170, 187, 199, 0.8);\r\n}\r\n\r\nfooter {\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  gap: 10px;\r\n  font-weight: 600;\r\n  border-top: 1px solid;\r\n  background-color: rgba(170, 187, 199, 0.8);\r\n}\r\nfooter > a > img {\r\n  height: 30px;\r\n  transition: transform 0.5s;\r\n}\r\nfooter > a > img:hover {\r\n  transform: scale(1.2);\r\n}\r\n"],sourceRoot:""}]);const p=c},645:n=>{"use strict";n.exports=function(n){var r=[];return r.toString=function(){return this.map((function(r){var e="",t=void 0!==r[5];return r[4]&&(e+="@supports (".concat(r[4],") {")),r[2]&&(e+="@media ".concat(r[2]," {")),t&&(e+="@layer".concat(r[5].length>0?" ".concat(r[5]):""," {")),e+=n(r),t&&(e+="}"),r[2]&&(e+="}"),r[4]&&(e+="}"),e})).join("")},r.i=function(n,e,t,o,a){"string"==typeof n&&(n=[[null,n,void 0]]);var i={};if(t)for(var s=0;s<this.length;s++){var A=this[s][0];null!=A&&(i[A]=!0)}for(var d=0;d<n.length;d++){var c=[].concat(n[d]);t&&i[c[0]]||(void 0!==a&&(void 0===c[5]||(c[1]="@layer".concat(c[5].length>0?" ".concat(c[5]):""," {").concat(c[1],"}")),c[5]=a),e&&(c[2]?(c[1]="@media ".concat(c[2]," {").concat(c[1],"}"),c[2]=e):c[2]=e),o&&(c[4]?(c[1]="@supports (".concat(c[4],") {").concat(c[1],"}"),c[4]=o):c[4]="".concat(o)),r.push(c))}},r}},667:n=>{"use strict";n.exports=function(n,r){return r||(r={}),n?(n=String(n.__esModule?n.default:n),/^['"].*['"]$/.test(n)&&(n=n.slice(1,-1)),r.hash&&(n+=r.hash),/["'() \t\n]|(%20)/.test(n)||r.needQuotes?'"'.concat(n.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):n):n}},537:n=>{"use strict";n.exports=function(n){var r=n[1],e=n[3];if(!e)return r;if("function"==typeof btoa){var t=btoa(unescape(encodeURIComponent(JSON.stringify(e)))),o="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(t),a="/*# ".concat(o," */");return[r].concat([a]).join("\n")}return[r].join("\n")}},379:n=>{"use strict";var r=[];function e(n){for(var e=-1,t=0;t<r.length;t++)if(r[t].identifier===n){e=t;break}return e}function t(n,t){for(var a={},i=[],s=0;s<n.length;s++){var A=n[s],d=t.base?A[0]+t.base:A[0],c=a[d]||0,l="".concat(d," ").concat(c);a[d]=c+1;var p=e(l),u={css:A[1],media:A[2],sourceMap:A[3],supports:A[4],layer:A[5]};if(-1!==p)r[p].references++,r[p].updater(u);else{var h=o(u,t);t.byIndex=s,r.splice(s,0,{identifier:l,updater:h,references:1})}i.push(l)}return i}function o(n,r){var e=r.domAPI(r);return e.update(n),function(r){if(r){if(r.css===n.css&&r.media===n.media&&r.sourceMap===n.sourceMap&&r.supports===n.supports&&r.layer===n.layer)return;e.update(n=r)}else e.remove()}}n.exports=function(n,o){var a=t(n=n||[],o=o||{});return function(n){n=n||[];for(var i=0;i<a.length;i++){var s=e(a[i]);r[s].references--}for(var A=t(n,o),d=0;d<a.length;d++){var c=e(a[d]);0===r[c].references&&(r[c].updater(),r.splice(c,1))}a=A}}},569:n=>{"use strict";var r={};n.exports=function(n,e){var t=function(n){if(void 0===r[n]){var e=document.querySelector(n);if(window.HTMLIFrameElement&&e instanceof window.HTMLIFrameElement)try{e=e.contentDocument.head}catch(n){e=null}r[n]=e}return r[n]}(n);if(!t)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");t.appendChild(e)}},216:n=>{"use strict";n.exports=function(n){var r=document.createElement("style");return n.setAttributes(r,n.attributes),n.insert(r,n.options),r}},565:(n,r,e)=>{"use strict";n.exports=function(n){var r=e.nc;r&&n.setAttribute("nonce",r)}},795:n=>{"use strict";n.exports=function(n){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var r=n.insertStyleElement(n);return{update:function(e){!function(n,r,e){var t="";e.supports&&(t+="@supports (".concat(e.supports,") {")),e.media&&(t+="@media ".concat(e.media," {"));var o=void 0!==e.layer;o&&(t+="@layer".concat(e.layer.length>0?" ".concat(e.layer):""," {")),t+=e.css,o&&(t+="}"),e.media&&(t+="}"),e.supports&&(t+="}");var a=e.sourceMap;a&&"undefined"!=typeof btoa&&(t+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),r.styleTagTransform(t,n,r.options)}(r,n,e)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(r)}}}},589:n=>{"use strict";n.exports=function(n,r){if(r.styleSheet)r.styleSheet.cssText=n;else{for(;r.firstChild;)r.removeChild(r.firstChild);r.appendChild(document.createTextNode(n))}}},112:(n,r,e)=>{var t={"./battleship.png":418,"./battleships.jpg":880,"./carrier.png":783,"./cruiser.png":744,"./destroyer.png":274,"./github.svg":926,"./submarine.png":564};function o(n){var r=a(n);return e(r)}function a(n){if(!e.o(t,n)){var r=new Error("Cannot find module '"+n+"'");throw r.code="MODULE_NOT_FOUND",r}return t[n]}o.keys=function(){return Object.keys(t)},o.resolve=a,n.exports=o,o.id=112},418:(n,r,e)=>{"use strict";n.exports=e.p+"images/battleship.png"},880:(n,r,e)=>{"use strict";n.exports=e.p+"images/battleships.jpg"},783:(n,r,e)=>{"use strict";n.exports=e.p+"images/carrier.png"},744:(n,r,e)=>{"use strict";n.exports=e.p+"images/cruiser.png"},274:(n,r,e)=>{"use strict";n.exports=e.p+"images/destroyer.png"},926:(n,r,e)=>{"use strict";n.exports=e.p+"images/github.svg"},564:(n,r,e)=>{"use strict";n.exports=e.p+"images/submarine.png"}},r={};function e(t){var o=r[t];if(void 0!==o)return o.exports;var a=r[t]={id:t,exports:{}};return n[t](a,a.exports,e),a.exports}e.m=n,e.n=n=>{var r=n&&n.__esModule?()=>n.default:()=>n;return e.d(r,{a:r}),r},e.d=(n,r)=>{for(var t in r)e.o(r,t)&&!e.o(n,t)&&Object.defineProperty(n,t,{enumerable:!0,get:r[t]})},e.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"==typeof window)return window}}(),e.o=(n,r)=>Object.prototype.hasOwnProperty.call(n,r),(()=>{var n;e.g.importScripts&&(n=e.g.location+"");var r=e.g.document;if(!n&&r&&(r.currentScript&&(n=r.currentScript.src),!n)){var t=r.getElementsByTagName("script");if(t.length)for(var o=t.length-1;o>-1&&!n;)n=t[o--].src}if(!n)throw new Error("Automatic publicPath is not supported in this browser");n=n.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),e.p=n})(),e.b=document.baseURI||self.location.href,e.nc=void 0,(()=>{"use strict";var n=e(379),r=e.n(n),t=e(795),o=e.n(t),a=e(569),i=e.n(a),s=e(565),A=e.n(s),d=e(216),c=e.n(d),l=e(589),p=e.n(l),u=e(28),h={};h.styleTagTransform=p(),h.setAttributes=A(),h.insert=i().bind(null,"head"),h.domAPI=o(),h.insertStyleElement=c(),r()(u.Z,h),u.Z&&u.Z.locals&&u.Z.locals;class g{constructor(n){this.name=n,this.shots=[]}shoot(n){this.isValid(n)&&this.shots.push(n)}shootRandomly(){const n=[];for(n[0]=Math.floor(10*Math.random()),n[1]=Math.floor(10*Math.random());!this.isValid(n);)n[0]=Math.floor(10*Math.random()),n[1]=Math.floor(10*Math.random());this.shots.push(n)}isValid(n){for(let r=0;r<this.shots.length;r++)if(this.shots[r][0]===n[0]&&this.shots[r][1]===n[1])return!1;return!0}}class C{constructor(n){this.length=n,this.hitsTaken=0}hit(){this.hitsTaken+=1}isSunk(){return this.hitsTaken===this.length}}class f{constructor(){this.board=new Array(10).fill(null).map((()=>new Array(10).fill(null))),this.ships=[]}placeShip(n,r){if("carrier"===n){const n=new C(5);r||(r=this.randomCoords(n));for(let e=0;e<n.length;e++)this.board[r[0]][r[1]+e]=n;this.ships.push(n)}if("battleship"===n){const n=new C(4);r||(r=this.randomCoords(n));for(let e=0;e<n.length;e++)this.board[r[0]][r[1]+e]=n;this.ships.push(n)}if("cruiser"===n){const n=new C(3);r||(r=this.randomCoords(n));for(let e=0;e<n.length;e++)this.board[r[0]][r[1]+e]=n;this.ships.push(n)}if("submarine"===n){const n=new C(3);r||(r=this.randomCoords(n));for(let e=0;e<n.length;e++)this.board[r[0]][r[1]+e]=n;this.ships.push(n)}if("destroyer"===n){const n=new C(2);r||(r=this.randomCoords(n));for(let e=0;e<n.length;e++)this.board[r[0]][r[1]+e]=n;this.ships.push(n)}}placeShipsRandomly(){this.placeShip("carrier"),this.placeShip("battleship"),this.placeShip("cruiser"),this.placeShip("submarine"),this.placeShip("destroyer")}randomCoords(n){let r=Math.floor(10*Math.random()),e=Math.floor(Math.random()*(11-n.length));for(;!this.isValid([r,e],n);)r=Math.floor(10*Math.random()),e=Math.floor(Math.random()*(11-n.length));return[r,e]}isValid(n,r){const e=n[0],t=n[1];if(this.board[e][t-1]&&null!==this.board[e][t-1]||this.board[e][t+r.length]&&null!==this.board[e][t+r.length])return!1;for(let n=0;n<r.length;n++)if(null!==this.board[e][t+n])return!1;return!0}receiveAttack(n){return null!==this.board[n[0]][n[1]]&&(this.board[n[0]][n[1]].hit(),!0)}isGameOver(){for(let n=0;n<5;n++)if(!this.ships[n].isSunk())return!1;return!0}}const m=(()=>{let n,r,e,t;const o=document.querySelector("#opponent>.board");return o.addEventListener("click",(a=>{const i=[a.target.dataset.row,a.target.dataset.column];if(i[0]&&i[1]){if(n.shoot(i),t.receiveAttack(i)?b.displayShot("opponent",i,!0):b.displayShot("opponent",i,!1),t.isGameOver())return b.gameOver(n.name);o.classList.add("disabled"),setTimeout((()=>{!function(){r.shootRandomly();const n=r.shots[r.shots.length-1];if(e.receiveAttack(n)?b.displayShot("player",n,!0):b.displayShot("player",n,!1),e.isGameOver())return b.gameOver(r.name);o.classList.remove("disabled")}()}),500)}})),{initPlayers:function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"Captain AI";n=new g(`Captain ${e}`),r=new g(t)},initBoards:function(n){e=new f,n.forEach((n=>{e.placeShip(n.id,n.coords)})),t=new f,t.placeShipsRandomly()}}})(),b=(()=>{const n=document.getElementById("player"),r=document.querySelector("#player > h2"),e=document.querySelector("#opponent > h2"),t=document.getElementById("start"),o=document.getElementById("confirm"),a=document.getElementById("playerName"),i=document.getElementById("playerBoard"),s=document.getElementById("content"),A=document.getElementById("shipsContainer"),d=document.querySelectorAll(".ship");o.addEventListener("click",(()=>{t.close(),n.appendChild(i),m.initPlayers(a.value),function(n){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"Captain AI";r.textContent=n,e.textContent=t}(`Captain ${a.value}`),m.initBoards(c),s.classList.remove("hide"),d.forEach((n=>{n.draggable=!1}))}));const c=[];i.addEventListener("dragover",(n=>{n.preventDefault()})),i.addEventListener("drop",(n=>{if(n.preventDefault(),"cell"===n.target.className){n.target.style.border="";const r=n.dataTransfer.getData("text"),e=document.getElementById(r);if(parseInt(n.target.dataset.column)+parseInt(e.dataset.size)>10)return;if(!function(n,r){let e=n,t=n.nextElementSibling;for(let n=0;n<=r.dataset.size;n++){if(e.childElementCount>0)return!1;e=t,t=t.nextElementSibling}return!0}(n.target,e))return;if(n.target.appendChild(e),c.length>0)for(let n=0;n<c.length;n++)c[n].id===e.id&&c.splice(n,1);c.push({id:e.id,coords:[parseInt(n.target.dataset.row),parseInt(n.target.dataset.column)]}),e.style.position="absolute",1===A.childElementCount?o.disabled=!1:o.disabled=!0}})),i.addEventListener("dragenter",(function(n){"cell"===n.target.className&&(n.target.style.border="3px dotted blue")})),i.addEventListener("dragleave",(function(n){"cell"===n.target.className&&(n.target.style.border="")})),d.forEach((n=>{n.addEventListener("dragstart",(n=>{"ship"===n.target.className&&(n.dataTransfer.setData("text",n.target.id),n.target.classList.add("hide"))})),n.addEventListener("dragend",(n=>{n.target.classList.remove("hide")}))}));const l=document.getElementById("gameOver");return document.getElementById("restart").addEventListener("click",(()=>{l.close(),location.reload()})),{newGame:function(){t.showModal(),o.disabled=!0},displayShot:function(n,r,e){const t=document.querySelector(`#${n} >.board >.cell[data-row="${r[0]}"][data-column="${r[1]}"]`);e?t.classList.add(`${n}Hit`):t.classList.add("miss")},gameOver:function(n){const r=document.querySelector("#gameOver>h1");l.showModal(),r.textContent=`${n} has won!`}}})();var E;(E=e(112)).keys().forEach(E),b.newGame()})()})();
//# sourceMappingURL=bundle.js.map