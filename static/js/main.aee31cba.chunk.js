(this.webpackJsonpcalculator=this.webpackJsonpcalculator||[]).push([[0],[,,,function(module,__webpack_exports__,__webpack_require__){"use strict";var C_Users_niksein_Desktop_calculator_calculator_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(4),C_Users_niksein_Desktop_calculator_calculator_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(5),C_Users_niksein_Desktop_calculator_calculator_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(8),C_Users_niksein_Desktop_calculator_calculator_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(6),C_Users_niksein_Desktop_calculator_calculator_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(9),react__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(0),react__WEBPACK_IMPORTED_MODULE_5___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__),_App_css__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__(16),_App_css__WEBPACK_IMPORTED_MODULE_6___default=__webpack_require__.n(_App_css__WEBPACK_IMPORTED_MODULE_6__),_components_calDisplay__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__(7),App=function(_React$Component){function App(){var _getPrototypeOf2,_this;Object(C_Users_niksein_Desktop_calculator_calculator_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__.a)(this,App);for(var _len=arguments.length,args=new Array(_len),_key=0;_key<_len;_key++)args[_key]=arguments[_key];return _this=Object(C_Users_niksein_Desktop_calculator_calculator_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__.a)(this,(_getPrototypeOf2=Object(C_Users_niksein_Desktop_calculator_calculator_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__.a)(App)).call.apply(_getPrototypeOf2,[this].concat(args))),_this.state={display:"",secondDisplay:"",sign:""},_this.logic=function(){var e=_this.state.SeconDisplay;"+"!==e&&"-"!==e&&"/"!==e&&"*"!==e||console.log("mark")},_this.maths=function(event){var value=event.target.getAttribute("value");switch(_this.logic(),value){case"+":case"-":case"*":case"/":_this.setState((function(e){return{sign:value,secondDisplay:e.display+value,display:""}}));break;case"equals":_this.setState((function(prevstate){return{secondDisplay:prevstate.secondDisplay+prevstate.display,display:eval(prevstate.secondDisplay+prevstate.display)}}));break;case"clear":_this.setState({display:"",secondDisplay:"",sign:""});break;case"display":break;default:_this.setState((function(e){return{display:e.display+value}}))}},_this}return Object(C_Users_niksein_Desktop_calculator_calculator_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__.a)(App,_React$Component),Object(C_Users_niksein_Desktop_calculator_calculator_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__.a)(App,[{key:"render",value:function(){return console.log(this.state.secondDisplay),react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div",{className:"App"},react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_components_calDisplay__WEBPACK_IMPORTED_MODULE_7__.a,{maths:this.maths,display:this.state.display,secondDisplay:this.state.secondDisplay}))}}]),App}(react__WEBPACK_IMPORTED_MODULE_5___default.a.Component);__webpack_exports__.a=App},,,,function(e,_,a){"use strict";var t=a(0),s=a.n(t);a(17);_.a=function(e){return s.a.createElement("div",{onClick:e.maths,className:"cal"},s.a.createElement("div",{className:" box box-0",value:"0"},"0"),s.a.createElement("div",{className:"box box-1",value:"1"},"1"),s.a.createElement("div",{className:"box box-2",value:"2"},"2"),s.a.createElement("div",{className:"box box-3",value:"3"},"3"),s.a.createElement("div",{className:"box box-4",value:"4"},"4"),s.a.createElement("div",{className:"box box-5",value:"5"},"5"),s.a.createElement("div",{className:"box box-6",value:"6"},"6"),s.a.createElement("div",{className:"box box-7",value:"7"},"7"),s.a.createElement("div",{className:"box box-8",value:"8"},"8"),s.a.createElement("div",{className:"box box-9",value:"9"},"9"),s.a.createElement("div",{className:"box box-dot",value:"."},"."),s.a.createElement("div",{className:"box box-add",value:"+"},"+"),s.a.createElement("div",{className:"box box-minus",value:"-"},"-"),s.a.createElement("div",{className:"box box-multiply",value:"*"},"*"),s.a.createElement("div",{className:"box box-division",value:"/"},"/"),s.a.createElement("div",{className:"box box-clear",value:"clear"},"clear"),s.a.createElement("div",{className:"box box-display",value:"display"},s.a.createElement("span",{id:"second"},e.secondDisplay),s.a.createElement("span",{id:"first"},e.display)),s.a.createElement("div",{className:"box box-equals",value:"equals"},"="))}},,,function(e,_,a){e.exports=a(18)},,,,,function(e,_,a){},function(e,_,a){},function(e,_,a){},function(e,_,a){"use strict";a.r(_);var t=a(0),s=a.n(t),l=a(2),c=a.n(l),r=(a(15),a(3));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(s.a.createElement(r.a,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[10,1,2]]]);
//# sourceMappingURL=main.aee31cba.chunk.js.map