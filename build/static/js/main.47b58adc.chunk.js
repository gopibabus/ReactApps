(this["webpackJsonpreact-app"]=this["webpackJsonpreact-app"]||[]).push([[0],Array(23).concat([function(e,t,a){e.exports=a.p+"static/media/0.db9097e8.jpg"},function(e,t,a){e.exports=a.p+"static/media/1.fbff4784.jpg"},function(e,t,a){e.exports=a.p+"static/media/2.c4ea9528.jpg"},function(e,t,a){e.exports=a.p+"static/media/3.62a781c8.jpg"},function(e,t,a){e.exports=a.p+"static/media/4.0f8ca81e.jpg"},function(e,t,a){e.exports=a.p+"static/media/5.1b557aa7.jpg"},function(e,t,a){e.exports=a.p+"static/media/6.c80394c2.jpg"},function(e,t,a){e.exports=a(51)},,,,,function(e,t,a){},,,function(e,t,a){},,,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(21),l=a.n(c),i=(a(35),a(36),a(37),a(1)),o=a(2),s=a(4),u=a(3),m=a(11),p=a(5),d=(a(38),function(e){Object(s.a)(a,e);var t=Object(u.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){return r.a.createElement("h1",{className:"container text-center"},"Home")}}]),a}(n.Component)),b=function(e){Object(s.a)(a,e);var t=Object(u.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){return r.a.createElement("nav",{className:"navbar navbar-expand-sm navbar-dark bg-dark mb-4"},r.a.createElement("div",{className:"container"},r.a.createElement(m.b,{className:"navbar-brand",to:"/"},"React Apps"),r.a.createElement("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarNav"},r.a.createElement("span",{className:"navbar-toggler-icon"})),r.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarNav"},r.a.createElement("ul",{className:"navbar-nav ml-auto"},r.a.createElement("li",{className:"nav-item"},r.a.createElement(m.b,{className:"nav-link",to:"/counter"},"Counter")),r.a.createElement("li",{className:"nav-item"},r.a.createElement(m.b,{className:"nav-link",to:"/movies"},"Movies")),r.a.createElement("li",{className:"nav-item"},r.a.createElement(m.b,{className:"nav-link",to:"/hangman"},"Hangman")),r.a.createElement("li",{className:"nav-item"},r.a.createElement(m.b,{className:"nav-link",to:"/pokegame"},"Pokegame")),r.a.createElement("li",{className:"nav-item"},r.a.createElement(m.b,{className:"nav-link",to:"/colorbox"},"ColorBox")),r.a.createElement("li",{className:"nav-item"},r.a.createElement(m.b,{className:"nav-link",to:"/coin-flipper"},"Coin Flipper"))))))}}]),a}(n.Component),h=a(15),f=a(10),v=function(e){Object(s.a)(a,e);var t=Object(u.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"componentDidUpdate",value:function(e,t){console.log("Counter - componentDidUpdate"),console.log("prevProps",e),console.log("prevState",t)}},{key:"componentWillUnmount",value:function(){console.log("Counter - componentWillUnmount")}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-1"},r.a.createElement("span",{className:this.getBadgeClasses()},this.formatCount())),r.a.createElement("div",{className:"col"},r.a.createElement("button",{onClick:function(){return e.props.onIncrement(e.props.counter)},className:"btn btn-secondary btn-sm"},"+"),r.a.createElement("button",{onClick:function(){return e.props.onDecrement(e.props.counter)},className:"btn btn-secondary btn-sm m-2",disabled:0===this.props.counter.value?"disabled":""},"-"),r.a.createElement("button",{onClick:function(){return e.props.onDelete(e.props.counter.id)},className:"btn btn-danger btn-sm"},"Delete")))}},{key:"getBadgeClasses",value:function(){var e="badge m-2 badge-";return e+=0===this.props.counter.value?"warning":"primary"}},{key:"formatCount",value:function(){var e=this.props.counter.value;return 0===e?"Zero":e}}]),a}(n.Component),g=function(e){Object(s.a)(a,e);var t=Object(u.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){var e=this.props,t=e.onReset,a=e.counters,n=e.onDelete,c=e.onIncrement,l=e.onDecrement;return r.a.createElement("div",null,r.a.createElement("button",{onClick:t,className:"btn btn-sm btn-primary m-2"},"Reset"),a.map((function(e){return r.a.createElement(v,{key:e.id,onDelete:n,onIncrement:c,onDecrement:l,counter:e})})))}}]),a}(n.Component),E=function(e){var t=e.totalCounters;return r.a.createElement("nav",{className:"navbar navbar-light bg-light"},r.a.createElement("a",{href:"https://google.com",className:"navbar-brand"},"Navbar",r.a.createElement("span",{className:"badge badge-pill badge-secondary"},t)))},k=function(e){Object(s.a)(a,e);var t=Object(u.a)(a);function a(){var e;return Object(i.a)(this,a),(e=t.call(this)).state={counters:[{id:1,value:4},{id:2,value:0},{id:3,value:0},{id:4,value:0}]},e.handleIncrement=function(t){var a=Object(f.a)(e.state.counters),n=a.indexOf(t);a[n]=Object(h.a)({},t),a[n].value++,e.setState({counters:a})},e.handleDecrement=function(t){var a=Object(f.a)(e.state.counters),n=a.indexOf(t);a[n]=Object(h.a)({},t),a[n].value--,e.setState({counters:a})},e.handleReset=function(){var t=e.state.counters.map((function(e){return e.value=0,e}));e.setState({counters:t})},e.handleDelete=function(t){var a=e.state.counters.filter((function(e){return e.id!==t}));e.setState({counters:a})},console.log("App- Constructor"),e}return Object(o.a)(a,[{key:"componentDidMount",value:function(){console.log("App - componentDidMount")}},{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(E,{totalCounters:this.state.counters.filter((function(e){return e.value>0})).length}),r.a.createElement("main",{className:"container"},r.a.createElement(g,{counters:this.state.counters,onReset:this.handleReset,onIncrement:this.handleIncrement,onDecrement:this.handleDecrement,onDelete:this.handleDelete})))}}]),a}(n.Component);var y=[{_id:"5b21ca3eeb7f6fbccd471815",title:"Terminator",genre:{_id:"5b21ca3eeb7f6fbccd471818",name:"Action"},numberInStock:6,dailyRentalRate:2.5,publishDate:"2018-01-03T19:04:28.809Z",liked:!0},{_id:"5b21ca3eeb7f6fbccd471816",title:"Die Hard",genre:{_id:"5b21ca3eeb7f6fbccd471818",name:"Action"},numberInStock:5,dailyRentalRate:2.5},{_id:"5b21ca3eeb7f6fbccd471817",title:"Get Out",genre:{_id:"5b21ca3eeb7f6fbccd471820",name:"Thriller"},numberInStock:8,dailyRentalRate:3.5},{_id:"5b21ca3eeb7f6fbccd471819",title:"Trip to Italy",genre:{_id:"5b21ca3eeb7f6fbccd471814",name:"Comedy"},numberInStock:7,dailyRentalRate:3.5},{_id:"5b21ca3eeb7f6fbccd47181a",title:"Airplane",genre:{_id:"5b21ca3eeb7f6fbccd471814",name:"Comedy"},numberInStock:7,dailyRentalRate:3.5},{_id:"5b21ca3eeb7f6fbccd47181b",title:"Wedding Crashers",genre:{_id:"5b21ca3eeb7f6fbccd471814",name:"Comedy"},numberInStock:7,dailyRentalRate:3.5},{_id:"5b21ca3eeb7f6fbccd47181e",title:"Gone Girl",genre:{_id:"5b21ca3eeb7f6fbccd471820",name:"Thriller"},numberInStock:7,dailyRentalRate:4.5},{_id:"5b21ca3eeb7f6fbccd47181f",title:"The Sixth Sense",genre:{_id:"5b21ca3eeb7f6fbccd471820",name:"Thriller"},numberInStock:4,dailyRentalRate:3.5},{_id:"5b21ca3eeb7f6fbccd471821",title:"The Avengers",genre:{_id:"5b21ca3eeb7f6fbccd471818",name:"Action"},numberInStock:7,dailyRentalRate:3.5}];function j(){return y}var O=function(e){var t="fa fa-heart";return e.liked||(t+="-o"),r.a.createElement("i",{onClick:e.onClick,className:t,style:{cursor:"pointer"}})},C=function(e){Object(s.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={movies:j()},e.handleDelete=function(t){var a=e.state.movies.filter((function(e){return e._id!==t._id}));e.setState({movies:a})},e.handleLike=function(t){var a=Object(f.a)(e.state.movies),n=a.indexOf(t);a[n]=Object(h.a)({},a[n]),a[n].liked=!a[n].liked,e.setState({movies:a})},e}return Object(o.a)(a,[{key:"render",value:function(){var e=this;return 0===this.state.movies.length?r.a.createElement("p",null,"There are no movies in database!!"):r.a.createElement(r.a.Fragment,null,r.a.createElement("p",null,"Showing ",this.state.movies.length," movies in database!!"),r.a.createElement("table",{className:"table"},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,"Title"),r.a.createElement("th",null,"Genre"),r.a.createElement("th",null,"Stock"),r.a.createElement("th",null,"Rate"),r.a.createElement("th",null),r.a.createElement("th",null))),r.a.createElement("tbody",null,this.state.movies.map((function(t){return r.a.createElement("tr",{key:t._id},r.a.createElement("td",null,t.title),r.a.createElement("td",null,t.genre.name),r.a.createElement("td",null,t.numberInStock),r.a.createElement("td",null,t.dailyRentalRate),r.a.createElement("td",null,r.a.createElement(O,{liked:t.liked,onClick:function(){return e.handleLike(t)}})),r.a.createElement("td",null,r.a.createElement("button",{onClick:function(){return e.handleDelete(t)},className:"btn btn-sm btn-danger"},"Delete")))})))))}}]),a}(n.Component),N=function(e){Object(s.a)(a,e);var t=Object(u.a)(a);function a(){var e;return Object(i.a)(this,a),e=t.call(this),console.log("App- Constructor"),e}return Object(o.a)(a,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(C,null))}}]),a}(n.Component),x=a(12),_=(a(44),a(23)),S=a.n(_),R=a(24),D=a.n(R),P=a(25),I=a.n(P),w=a(26),T=a.n(w),A=a(27),B=a.n(A),W=a(28),F=a.n(W),H=a(29),M=a.n(H),G=function(e){Object(s.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).state={nWrong:0,guessed:new Set,answer:"apple"},n.handleGuess=n.handleGuess.bind(Object(x.a)(n)),n}return Object(o.a)(a,[{key:"guessedWord",value:function(){var e=this;return this.state.answer.split("").map((function(t){return e.state.guessed.has(t)?t:"_"}))}},{key:"handleGuess",value:function(e){var t=e.target.value;this.setState((function(e){return{guessed:e.guessed.add(t),nWrong:e.nWrong+(e.answer.includes(t)?0:1)}}))}},{key:"generateButtons",value:function(){var e=this;return"abcdefghijklmnopqrstuvwxyz".split("").map((function(t){return r.a.createElement("button",{value:t,onClick:e.handleGuess,disabled:e.state.guessed.has(t)},t)}))}},{key:"render",value:function(){return r.a.createElement("div",{className:"Hangman container text-center"},r.a.createElement("h1",null,"Hangman"),r.a.createElement("img",{src:this.props.images[this.state.nWrong]}),r.a.createElement("p",{className:"Hangman-word"},this.guessedWord()),r.a.createElement("p",{className:"Hangman-btns"},this.generateButtons()))}}]),a}(n.Component);G.defaultProps={maxWrong:6,images:[S.a,D.a,I.a,T.a,B.a,F.a,M.a]};var J=G,L=(a(45),function(e){Object(s.a)(a,e);var t=Object(u.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){var e,t="".concat("https://assets.pokemon.com/assets/cms2/img/pokedex/detail/").concat((e=this.props.id)<=999?"00".concat(e).slice(-3):e,".png");return r.a.createElement("div",{className:"Pokecard"},r.a.createElement("h1",{className:"Pokecard-title"},this.props.name),r.a.createElement("div",{className:"Pokecard-image"},r.a.createElement("img",{src:t,alt:this.props.name})),r.a.createElement("div",{className:"Pokecard-data"},"Type: ",this.props.type),r.a.createElement("div",{className:"Pokecard-data"},"EXP: ",this.props.exp))}}]),a}(n.Component)),U=(a(46),function(e){Object(s.a)(a,e);var t=Object(u.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){var e;return e=this.props.isWinner?r.a.createElement("h1",{className:"Pokedex-winner"},"Winning hand!!!!"):r.a.createElement("h1",{className:"Pokedex-loser"},"Losing hand!!!!"),r.a.createElement("div",{className:"Pokedex"},e,r.a.createElement("h4",null,"Total Experience: ",this.props.exp),r.a.createElement("div",{className:"Pokedex-cards"},this.props.pokemon.map((function(e){return r.a.createElement(L,{id:e.id,name:e.name,type:e.type,exp:e.base_experience})}))))}}]),a}(n.Component)),q=(a(47),function(e){Object(s.a)(a,e);var t=Object(u.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){for(var e=[],t=Object(f.a)(this.props.pokemon);e.length<t.length;){var a=Math.floor(Math.random()*t.length),n=t.splice(a,1)[0];e.push(n)}var c=e.reduce((function(e,t){return e+t.base_experience}),0),l=t.reduce((function(e,t){return e+t.base_experience}),0);return r.a.createElement("div",{className:"Pokegame"},r.a.createElement(U,{pokemon:e,exp:c,isWinner:c>l}),r.a.createElement(U,{pokemon:t,exp:l,isWinner:l>c}))}}]),a}(n.Component));q.defaultProps={pokemon:[{id:4,name:"Charmander",type:"fire",base_experience:62},{id:7,name:"Squirtle",type:"water",base_experience:63},{id:11,name:"Metapod",type:"bug",base_experience:72},{id:12,name:"Butterfree",type:"flying",base_experience:178},{id:25,name:"Pikachu",type:"electric",base_experience:112},{id:39,name:"Jigglypuff",type:"normal",base_experience:95},{id:94,name:"Gengar",type:"poison",base_experience:225},{id:133,name:"Eevee",type:"normal",base_experience:65}]};var z=q;a(48);function Z(e){return e[Math.floor(Math.random()*e.length)]}var K=function(e){Object(s.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).state={color:Z(n.props.allColors)},n.handleClick=n.handleClick.bind(Object(x.a)(n)),n}return Object(o.a)(a,[{key:"pickColor",value:function(){var e;do{e=Z(this.props.allColors)}while(e===this.state.color);this.setState({color:e})}},{key:"handleClick",value:function(){this.pickColor()}},{key:"render",value:function(){return r.a.createElement("div",{className:"Box",style:{backgroundColor:this.state.color},onClick:this.handleClick})}}]),a}(n.Component);K.defaultProps={allColors:["Yellow","Blue","Red","Green","Black","Brown","Azure","Ivory","Teal","Silver","Purple","Navy blue","Pea green","Gray","Orange","Maroon","Charcoal","Aquamarine","Coral","Fuchsia","Wheat","Lime","Crimson","Khaki","Hot pink","Magenta","Olden","Plum","Olive","Cyan"]};var X=K,Y=(a(49),function(e){Object(s.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).state={},n}return Object(o.a)(a,[{key:"render",value:function(){var e=Array.from({length:this.props.numBoxes}).map((function(){return r.a.createElement(X,null)}));return r.a.createElement("div",{className:"BoxContainer container text-center"},r.a.createElement("h1",null,"Color Flipper"),r.a.createElement("div",{className:"BoxContainer-boxes"},e))}}]),a}(n.Component));Y.defaultProps={numBoxes:18};var Q=Y,V=(a(50),function(e){Object(s.a)(a,e);var t=Object(u.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"Coin"},r.a.createElement("img",{src:this.props.info.imgSrc,alt:this.props.info.side}))}}]),a}(n.Component)),$=function(e){Object(s.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).state={currCoin:null,nFlips:0,nHeads:0,nTails:0},n.handleClick=n.handleClick.bind(Object(x.a)(n)),n}return Object(o.a)(a,[{key:"flipCoin",value:function(){var e=Z(this.props.coins);this.setState((function(t){return{currCoin:e,nFlips:t.nFlips+1,nHeads:t.nHeads+("heads"===e.side?1:0),nTails:t.nTails+("tails"===e.side?1:0)}}))}},{key:"handleClick",value:function(){this.flipCoin()}},{key:"render",value:function(){return r.a.createElement("div",{className:"CoinFlipper container text-center"},r.a.createElement("h2",null,"Let's Flip a coin!!!"),this.state.currCoin&&r.a.createElement(V,{info:this.state.currCoin}),r.a.createElement("button",{onClick:this.handleClick},"Flip Me!!!"),r.a.createElement("p",null,"Out of ",this.state.nFlips," flips, there have been ",this.state.nHeads," ","heads and ",this.state.nTails," tails"))}}]),a}(n.Component);$.defaultProps={coins:[{side:"heads",imgSrc:"https://i.postimg.cc/5jcwNHm2/head.png"},{side:"tails",imgSrc:"https://i.postimg.cc/gJJyMbJm/tail.png"}]};var ee=$,te=function(e){Object(s.a)(a,e);var t=Object(u.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){return r.a.createElement(m.a,null,r.a.createElement("div",{className:"App"},r.a.createElement(b,null),r.a.createElement("div",{className:"container"},r.a.createElement(p.a,{path:"/",exact:!0,component:d}),r.a.createElement(p.a,{path:"/counter",exact:!0,component:k}),r.a.createElement(p.a,{path:"/movies",exact:!0,component:N}),r.a.createElement(p.a,{path:"/hangman",exact:!0,component:J}),r.a.createElement(p.a,{path:"/pokegame",exact:!0,component:z}),r.a.createElement(p.a,{path:"/colorbox",exact:!0,component:Q}),r.a.createElement(p.a,{path:"/coin-flipper",exact:!0,component:ee}))))}}]),a}(n.Component);l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(te,null)),document.getElementById("root"))}]),[[30,1,2]]]);
//# sourceMappingURL=main.47b58adc.chunk.js.map