(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{101:function(e,a,t){},102:function(e,a,t){},104:function(e,a,t){"use strict";t.r(a);var n=t(0),s=t.n(n),r=t(19),c=t.n(r),i=(t(60),t(2)),l=t(3),o=t(8),m=t(5),u=t(4),p=(t(31),t(18)),d=t(12),h=t.n(d),g=function(){function e(){Object(i.a)(this,e);var a=h.a.create({baseURL:"".concat("https://meu-roteiro.herokuapp.com/api"),withCredentials:!0});this.service=a}return Object(l.a)(e,[{key:"login",value:function(e,a){return this.service.post("/login",{username:e,password:a}).then((function(e){return e.data}))}},{key:"signup",value:function(e,a,t,n){return this.service.post("/signup",{username:e,password:a,name:t,email:n}).then((function(e){return e.data}))}},{key:"loggedin",value:function(){return this.service.get("/loggedin").then((function(e){return e.data}))}},{key:"logout",value:function(){return this.service.get("/logout").then((function(e){return e.data}))}}]),e}(),E=t(7),v=function(e){Object(m.a)(t,e);var a=Object(u.a)(t);function t(e){var n;return Object(i.a)(this,t),(n=a.call(this,e)).state={username:"",password:"",name:"",email:""},n.service=new g,n.handleFormSubmit=n.handleFormSubmit.bind(Object(o.a)(n)),n.handleChange=n.handleChange.bind(Object(o.a)(n)),n}return Object(l.a)(t,[{key:"handleFormSubmit",value:function(e){var a=this;e.preventDefault();var t=this.state.username,n=this.state.password,s=this.state.name,r=this.state.email;this.service.signup(t,n,s,r).then((function(e){a.setState({username:"",password:"",name:"",email:""}),a.props.getTheUser(e),a.props.history.push("/")})).catch((function(e){return console.log(e)}))}},{key:"handleChange",value:function(e){var a=e.target,t=a.name,n=a.value;this.setState(Object(p.a)({},t,n))}},{key:"render",value:function(){return s.a.createElement("div",{className:"login"},s.a.createElement("div",{className:"form"},s.a.createElement("h1",null,"Cadastre-se"),s.a.createElement("form",{onSubmit:this.handleFormSubmit},s.a.createElement("input",{className:"input",type:"text",name:"username",placeholder:"Username",onChange:this.handleChange}),s.a.createElement("br",null),s.a.createElement("input",{className:"input",type:"password",name:"password",placeholder:"Senha",onChange:this.handleChange}),s.a.createElement("br",null),s.a.createElement("input",{className:"input",type:"text",name:"name",placeholder:"Nome",onChange:this.handleChange}),s.a.createElement("br",null),s.a.createElement("input",{className:"input",type:"text",name:"email",placeholder:"Email",onChange:this.handleChange}),s.a.createElement("br",null),s.a.createElement("button",{className:"button"},"Enviar"),s.a.createElement("br",null),s.a.createElement("span",{className:"span"},"J\xe1 possui uma conta?"),s.a.createElement(E.b,{to:"/login",className:"entrar"}," Entre"))),s.a.createElement("div",{className:"image"}))}}]),t}(n.Component),f=(t(83),function(e){Object(m.a)(t,e);var a=Object(u.a)(t);function t(e){var n;return Object(i.a)(this,t),(n=a.call(this,e)).state={username:"",password:""},n.service=new g,n.handleFormSubmit=n.handleFormSubmit.bind(Object(o.a)(n)),n.handleChange=n.handleChange.bind(Object(o.a)(n)),n}return Object(l.a)(t,[{key:"handleFormSubmit",value:function(e){var a=this;e.preventDefault();var t=this.state.username,n=this.state.password;this.service.login(t,n).then((function(e){var t="/";a.setState({username:"",password:""}),a.props.getTheUser(e),a.props.location.state&&(t=a.props.location.state.from.pathname),a.props.history.push(t)})).catch((function(e){return console.log(e)}))}},{key:"handleChange",value:function(e){var a=e.target,t=a.name,n=a.value;this.setState(Object(p.a)({},t,n))}},{key:"render",value:function(){return s.a.createElement("div",{className:"login"},s.a.createElement("div",{className:"form"},s.a.createElement("h1",null,"Entrar"),s.a.createElement("form",{onSubmit:this.handleFormSubmit},s.a.createElement("input",{className:"input",type:"text",name:"username",placeholder:"Username",value:this.state.username,onChange:this.handleChange}),s.a.createElement("br",null),s.a.createElement("input",{className:"input",type:"password",name:"password",value:this.state.password,placeholder:"Senha",onChange:this.handleChange}),s.a.createElement("br",null),s.a.createElement("input",{className:"button",type:"submit",value:"Entrar"}),s.a.createElement("br",null),s.a.createElement("span",{className:"span"},"Ainda n\xe3o possui uma conta?"),s.a.createElement("br",null),s.a.createElement(E.b,{to:"/signup",className:"entrar signup"}," Cadastre-se"))),s.a.createElement("div",{className:"image"}))}}]),t}(n.Component)),N=t(9),b=function(){function e(){Object(i.a)(this,e);var a=h.a.create({baseURL:"".concat("https://meu-roteiro.herokuapp.com/api"),withCredentials:!0});this.script=a}return Object(l.a)(e,[{key:"cities",value:function(e,a){return this.script.get("/cities",{name:e,image:a}).then((function(e){return e.data}))}},{key:"city",value:function(e,a){return this.script.get("/city",{name:e,photos:a}).then((function(e){return e.data}))}}]),e}(),y=t(44),S=t.n(y),k=t(50),j=(t(42),function(e){Object(m.a)(t,e);var a=Object(u.a)(t);function t(){var e;Object(i.a)(this,t);for(var n=arguments.length,s=new Array(n),r=0;r<n;r++)s[r]=arguments[r];return(e=a.call.apply(a,[this].concat(s))).state={search:"",value:""},e.handleInputChange=function(a){e.setState({search:a.target.value,value:a.target.value})},e.handleSelectSuggest=function(a,t){e.setState({search:"",value:a.formatted_address})},e.handleNoResult=function(){},e.handleStatusUpdate=function(e){},e}return Object(l.a)(t,[{key:"render",value:function(){var e=this,a=this.state,t=a.search,n=a.value,r=n.split(","),c=r[0].toLowerCase().split(" ").join("_").normalize("NFD").replace(/[\u0300-\u036f]/g,""),i=r[r.length-1].toLowerCase().split(" ").join("_").normalize("NFD").replace(/[\u0300-\u036f]/g,"").split("").slice(1).join("");return s.a.createElement(S.a,{params:{key:"AIzaSyBy3BVRyJG8wifzSQDbh9V064SRcU42D4I",libraries:"places,geocode"},render:function(a){return a&&s.a.createElement(k.a,{googleMaps:a,autocompletionRequest:{input:t},onNoResult:e.handleNoResult,onSelectSuggest:e.handleSelectSuggest,onStatusUpdate:e.handleStatusUpdate,textNoResults:"My custom no results text",customRender:function(e){return s.a.createElement("div",{className:"customWrapper"},e?e.description:"My custom no results text")}},s.a.createElement("div",{className:"searchSpace"},s.a.createElement("input",{className:"search-input",type:"text",name:"search",value:n,placeholder:"Buscar cidades",onChange:e.handleInputChange}),s.a.createElement("div",{className:"search"},s.a.createElement(E.b,{to:"/city?value=".concat(c,"+").concat(i),className:"searchicon"},s.a.createElement("i",{className:"fas fa-search",style:{marginLeft:"0"}})))))}})}}]),t}(s.a.Component)),C=function(e){Object(m.a)(t,e);var a=Object(u.a)(t);function t(e){var n;return Object(i.a)(this,t),(n=a.call(this,e)).state={loggedInUser:n.props.userInSession,isLogged:n.props.isLogged},n.service=new g,n.logoutUser=n.logoutUser.bind(Object(o.a)(n)),n}return Object(l.a)(t,[{key:"componentDidUpdate",value:function(e){this.props.userInSession!==e.userInSession&&this.setState({isLogged:this.props.userInSession})}},{key:"logoutUser",value:function(){var e=this;this.service.logout().then((function(){e.setState({loggedInUser:null}),e.props.getTheUser(null)}))}},{key:"render",value:function(){return this.state.loggedInUser?s.a.createElement("nav",null,s.a.createElement("div",{className:"navbar-menu"},s.a.createElement("div",{className:"navbar-start"},s.a.createElement(E.c,{to:"/",className:"link"},"P\xe1gina inicial"),s.a.createElement(E.c,{to:"/profile/"+this.state.loggedInUser._id,className:"link"},"Meus roteiros"),s.a.createElement(E.c,{className:"navbar-item link",activeClassName:"is-active",to:"/cities"},"Encontre uma cidade"),s.a.createElement("button",{className:"logout-btn",onClick:this.logoutUser},"Sair")))):s.a.createElement("nav",null,s.a.createElement("div",{className:"navbar-menu"},s.a.createElement("div",{className:"navbar-start"},s.a.createElement(E.c,{className:"navbar-item link",activeClassName:"is-active",to:"/cities"},"Encontre uma cidade"),s.a.createElement(E.c,{to:"/login",className:"link"},"Login"),s.a.createElement(E.c,{className:"navbar-item link borda",activeClassName:"is-active",to:"/signup"},"Cadastre-se"))))}}]),t}(n.Component),O=[{continent:"Am\xe9rica",cities:[{city:"nova_iorque",country:"eua",name:"Nova Iorque",img:"new.jpg"},{city:"toronto",country:"canada",name:"Toronto",img:"toronto.jpg"},{city:"rio_de_janeiro",country:"brasil",name:"Rio de Janeiro",img:"rio.jpeg"},{city:"buenos_aires",country:"argentina",name:"Buenos Aires",img:"buenos.jpeg"}]},{continent:"Europa",cities:[{city:"paris",country:"franca",name:"Paris",img:"paris.jpg"},{city:"londres",country:"reino_unido",name:"Londres",img:"london.jpg"},{city:"milao",country:"italia",name:"Mil\xe3o",img:"milan.jpg"},{city:"barcelona",country:"espanha",name:"Barcelona",img:"barcelona.jpg"}]},{continent:"Oceania",cities:[{city:"sydney",country:"australia",name:"Sydney",img:"sydney.jpg"},{city:"milford_sound",country:"nova_zelandia",name:"Milford Sound",img:"milford.jpg"},{city:"honolulu",country:"eua",name:"Honolulu",img:"honolulu.jpg"},{city:"bora_bora",country:"polinesia_francesa",name:"Bora Bora",img:"bora.jpg"}]},{continent:"Africa",cities:[{city:"cidade_do_cabo",country:"africa_do_sul",name:"Cidade do Cabo",img:"cabo.jpg"},{city:"casablanca",country:"marrocos",name:"Casablanca",img:"casablanca.jpg"},{city:"cairo",country:"egito",name:"Cairo",img:"cairo.jpg"},{city:"ngorongoro",country:"tanzania",name:"Ngorongoro",img:"de.jpg"}]},{continent:"\xc1sia",cities:[{city:"bangkok",country:"tailandia",name:"Bangkok",img:"bangkok.jpg"},{city:"cingapura",country:"cingapura",name:"Cingapura",img:"singapura.jpg"},{city:"hong_kong",country:"china",name:"Hong Kong",img:"hong.jpg"},{city:"toquio",country:"japao",name:"T\xf3quio",img:"toquio.jpg"}]}],I=function(e){Object(m.a)(t,e);var a=Object(u.a)(t);function t(e){var n;return Object(i.a)(this,t),(n=a.call(this,e)).state={},n}return Object(l.a)(t,[{key:"render",value:function(){return s.a.createElement("div",{className:"cities"},s.a.createElement("div",{className:"cities-header"},s.a.createElement("img",{src:"/image/logo.png",className:"meuRoteiro-icon"}),s.a.createElement("div",{className:"cities-clouds"}),s.a.createElement(C,{userInSession:this.props.user,isLogged:this.props.isLogged})),s.a.createElement("div",{className:"continentesBody"},s.a.createElement("div",{className:"search-title"},s.a.createElement("div",{className:"citiesTitle"},s.a.createElement("h1",null,"Para onde \xe9 a sua"),s.a.createElement("h1",{className:"vermelho"},"viagem?")),s.a.createElement(j,{props:this.props,className:"auto"})),s.a.createElement("div",{className:"citiesTitle visitadas"},s.a.createElement("h2",{className:"vermelho"},"Cidades mais visitadas"),s.a.createElement("h2",null," por continente")),s.a.createElement("div",{className:"continentes"},O.map((function(e,a){var t=e.continent,n=e.cities;return console.log(t),s.a.createElement("div",{className:"continent"},s.a.createElement("h3",null,t),s.a.createElement("div",{className:"country"},n.map((function(e,a){var t=e.city,n=e.name,r=e.country,c=e.img;return s.a.createElement("div",{className:"city",key:a},s.a.createElement("div",{className:"cityInfo"},s.a.createElement(E.b,{to:"/city?value=".concat(t,"+").concat(r)},s.a.createElement("img",{className:"cityImg",src:"/image/".concat(c)}),s.a.createElement("h1",{className:"cityName"},n))))}))))})))))}}]),t}(n.Component),_=(n.Component,t(13)),U=(t(101),function(e){Object(m.a)(t,e);var a=Object(u.a)(t);function t(e){var n;return Object(i.a)(this,t),(n=a.call(this,e)).addScriptHandler=function(e){var a=n.props,t=a.museums,s=a.restaurants,r=(a.myScript,a.enterntainment),c=a.tourist,i=a.aquarium,l=a.bakery,o=a.cafe,m=a.movie_theater,u=a.zoo,p=a.park,d=a.library,h=[].concat(Object(_.a)(t),Object(_.a)(s),Object(_.a)(r),Object(_.a)(c),Object(_.a)(i),Object(_.a)(l),Object(_.a)(o),Object(_.a)(m),Object(_.a)(u),Object(_.a)(p),Object(_.a)(d)),g=[];h.forEach((function(a,t){if(a===e)return g.push(e)})),console.log(g,"script"),n.getItinerate(g)},n.state={user:""},n.addScriptHandler=n.addScriptHandler.bind(Object(o.a)(n)),n.getItinerate=n.getItinerate.bind(Object(o.a)(n)),n}return Object(l.a)(t,[{key:"getItinerate",value:function(e){var a=this,t=e;console.log(this.props.user,"user city");var n=this.props.user;h.a.post("".concat("https://meu-roteiro.herokuapp.com/api","/city"),{scriptState:t,user:n}).then((function(){console.log(t,"scriptstate"),a.setState({scriptState:t,user:n},(function(){a.props.myScript(e)}))})).catch((function(e){return console.log(e)}))}},{key:"handleClick",value:function(e){console.log("cliquei"),this.addScriptHandler(e)}},{key:"componentDidMount",value:function(){this.props.getCity(),this.getItinerate(),this.addScriptHandler()}},{key:"render",value:function(){var e=this;console.log(this.props,"newnamescript");var a=this.props.location.search.split("=")[1].split("+")[0].split("_").map((function(e){return e.substring(0,1).toUpperCase()+e.substring(1)})).join(" ");return s.a.createElement("div",{className:"singleCity"},s.a.createElement("div",{className:"singleCity-header"},s.a.createElement("img",{src:"/image/logo.png",className:"meuRoteiro-icon"}),s.a.createElement("div",{className:"singleCity-clouds"}),s.a.createElement(C,{isLogged:this.props.isLogged,userInSession:this.props.user})),s.a.createElement("div",{className:"categoriasBody"},s.a.createElement("div",null,s.a.createElement("span",{className:"citySpan"},"Para onde \xe9 a sua"),s.a.createElement("span",{className:"vermelho"},"viagem?"),s.a.createElement(j,{props:this.props,className:"auto"})),s.a.createElement("h1",{className:"city-name"},a),s.a.createElement("div",{className:"primeiros"},s.a.createElement("div",{className:"categoria"},s.a.createElement("div",{className:"categoriaInfo"},s.a.createElement("i",{className:"fas fa-place-of-worship categoriaIcon"}),s.a.createElement("h2",{className:"categoriaName"},"Museus")),s.a.createElement("div",null,this.props.museums.map((function(a,t){return s.a.createElement("div",{key:t,className:"cityPlace"},s.a.createElement("div",{className:"place"},s.a.createElement("img",{src:a.icon,alt:"img",className:"cityIcon"}),s.a.createElement("div",{className:"placeInfo"},s.a.createElement("h2",{className:"placeName"},a.name),s.a.createElement("h3",{className:"placeSub"},"Rating:",a.rating),s.a.createElement("h3",{className:"placeSub"},"Endere\xe7o:",a.formatted_address.split(",")[0]))),s.a.createElement("div",{className:"placeButton"},s.a.createElement("button",{className:"placeBtn",onClick:function(){return e.handleClick(a)}},"+")))})))),s.a.createElement("div",{className:"categoria"},s.a.createElement("div",{className:"categoriaInfo"},s.a.createElement("i",{className:"fas fa-utensils categoriaIcon"}),s.a.createElement("h2",{className:"categoriaName"},"Restaurantes")),s.a.createElement("div",null,this.props.restaurants.map((function(a,t){if(t<10)return s.a.createElement("div",{key:t,className:"cityPlace"},s.a.createElement("div",{className:"place"},s.a.createElement("img",{src:a.icon,alt:"img",className:"cityIcon"}),s.a.createElement("div",{className:"placeInfo"},s.a.createElement("h2",{className:"placeName"},a.name),s.a.createElement("h3",{className:"placeSub"},"Rating:",a.rating),s.a.createElement("h3",{className:"placeSub"},"Endere\xe7o:",a.formatted_address.split(",")[0]))),s.a.createElement("div",{className:"placeButton"},s.a.createElement("button",{className:"placeBtn",onClick:function(){return e.handleClick(a)}},"+")))}))),s.a.createElement("div",null,this.props.bakery.map((function(a,t){if(t<5)return s.a.createElement("div",{key:t,className:"cityPlace"},s.a.createElement("div",{className:"place"},s.a.createElement("img",{src:a.icon,alt:"img",className:"cityIcon"}),s.a.createElement("div",{className:"placeInfo"},s.a.createElement("h2",{className:"placeName"},a.name),s.a.createElement("h3",{className:"placeSub"},"Rating:",a.rating),s.a.createElement("h3",{className:"placeSub"},"Endere\xe7o:",a.formatted_address.split(",")[0]))),s.a.createElement("div",{className:"placeButton"},s.a.createElement("button",{className:"placeBtn",onClick:function(){return e.handleClick(a)}},"+")))}))),s.a.createElement("div",null,this.props.cafe.map((function(a,t){if(t<5)return s.a.createElement("div",{key:t,className:"cityPlace"},s.a.createElement("div",{className:"place"},s.a.createElement("img",{src:a.icon,alt:"img",className:"cityIcon"}),s.a.createElement("div",{className:"placeInfo"},s.a.createElement("h2",{className:"placeName"},a.name),s.a.createElement("h3",{className:"placeSub"},"Rating:",a.rating),s.a.createElement("h3",{className:"placeSub"},"Endere\xe7o:",a.formatted_address.split(",")[0]))),s.a.createElement("div",{className:"placeButton"},s.a.createElement("button",{className:"placeBtn",onClick:function(){return e.handleClick(a)}},"+")))}))))),s.a.createElement("div",{className:"ultimos"},s.a.createElement("div",{className:"categoria"},s.a.createElement("div",{className:"categoriaInfo"},s.a.createElement("i",{className:"fas fa-archway categoriaIcon"}),s.a.createElement("h2",{className:"categoriaName"},"Atra\xe7\u014des Tur\xedsticas")),s.a.createElement("div",null,this.props.tourist.map((function(a,t){return s.a.createElement("div",{key:t,className:"cityPlace"},s.a.createElement("div",{className:"place"},s.a.createElement("img",{src:a.icon,alt:"img",className:"cityIcon"}),s.a.createElement("div",{className:"placeInfo"},s.a.createElement("h2",{className:"placeName"},a.name),s.a.createElement("h3",{className:"placeSub"},"Rating:",a.rating),s.a.createElement("h3",{className:"placeSub"},"Endere\xe7o:",a.formatted_address.split(",")[0]))),s.a.createElement("div",{className:"placeButton"},s.a.createElement("button",{className:"placeBtn",onClick:function(){return e.handleClick(a)}},"+")))})))),s.a.createElement("div",{className:"categoria"},s.a.createElement("div",{className:"categoriaInfo"},s.a.createElement("i",{className:"fas fa-theater-masks categoriaIcon"}),s.a.createElement("h2",{className:"categoriaName"},"Entretenimento")),s.a.createElement("div",null,this.props.enterntainment.map((function(a,t){if(t<10)return s.a.createElement("div",{key:t,className:"cityPlace"},s.a.createElement("div",{className:"place"},s.a.createElement("img",{src:a.icon,alt:"img",className:"cityIcon"}),s.a.createElement("div",{className:"placeInfo"},s.a.createElement("h2",{className:"placeName"},a.name),s.a.createElement("h3",{className:"placeSub"},"Rating:",a.rating),s.a.createElement("h3",{className:"placeSub"},"Endere\xe7o:",a.formatted_address.split(",")[0]))),s.a.createElement("div",{className:"placeButton"},s.a.createElement("button",{className:"placeBtn",onClick:function(){return e.handleClick(a)}},"+")))}))),s.a.createElement("div",null,this.props.aquarium.map((function(a,t){if(t>4)return s.a.createElement("div",{key:t,className:"cityPlace"},s.a.createElement("div",{className:"place"},s.a.createElement("img",{src:a.icon,alt:"img",className:"cityIcon"}),s.a.createElement("div",{className:"placeInfo"},s.a.createElement("h2",{className:"placeName"},a.name),s.a.createElement("h3",{className:"placeSub"},"Rating:",a.rating),s.a.createElement("h3",{className:"placeSub"},"Endere\xe7o:",a.formatted_address.split(",")[0]))),s.a.createElement("div",{className:"placeButton"},s.a.createElement("button",{className:"placeBtn",onClick:function(){return e.handleClick(a)}},"+")))}))),s.a.createElement("div",null,this.props.movie_theater.map((function(a,t){if(t<4)return s.a.createElement("div",{key:t,className:"cityPlace"},s.a.createElement("div",{className:"place"},s.a.createElement("img",{src:a.icon,alt:"img",className:"cityIcon"}),s.a.createElement("div",{className:"placeInfo"},s.a.createElement("h2",{className:"placeName"},a.name),s.a.createElement("h3",{className:"placeSub"},"Rating:",a.rating),s.a.createElement("h3",{className:"placeSub"},"Endere\xe7o:",a.formatted_address.split(",")[0]))),s.a.createElement("div",{className:"placeButton"},s.a.createElement("button",{className:"placeBtn",onClick:function(){return e.handleClick(a)}},"+")))}))),s.a.createElement("div",null,this.props.zoo.map((function(a,t){if(t<2)return s.a.createElement("div",{key:t,className:"cityPlace"},s.a.createElement("div",{className:"place"},s.a.createElement("img",{src:a.icon,alt:"img",className:"cityIcon"}),s.a.createElement("div",{className:"placeInfo"},s.a.createElement("h2",{className:"placeName"},a.name),s.a.createElement("h3",{className:"placeSub"},"Rating:",a.rating),s.a.createElement("h3",{className:"placeSub"},"Endere\xe7o:",a.formatted_address.split(",")[0]))),s.a.createElement("div",{className:"placeButton"},s.a.createElement("button",{className:"placeBtn",onClick:function(){return e.handleClick(a)}},"+")))}))),s.a.createElement("div",null,this.props.park.map((function(a,t){if(t<4)return s.a.createElement("div",{key:t,className:"cityPlace"},s.a.createElement("div",{className:"place"},s.a.createElement("img",{src:a.icon,alt:"img",className:"cityIcon"}),s.a.createElement("div",{className:"placeInfo"},s.a.createElement("h2",{className:"placeName"},a.name),s.a.createElement("h3",{className:"placeSub"},"Rating:",a.rating),s.a.createElement("h3",{className:"placeSub"},"Endere\xe7o:",a.formatted_address.split(",")[0]))),s.a.createElement("div",{className:"placeButton"},s.a.createElement("button",{className:"placeBtn",onClick:function(){return e.handleClick(a)}},"+")))}))),s.a.createElement("div",null,this.props.library.map((function(a,t){if(t<2)return s.a.createElement("div",{key:t,className:"cityPlace"},s.a.createElement("div",{className:"place"},s.a.createElement("img",{src:a.icon,alt:"img",className:"cityIcon"}),s.a.createElement("div",{className:"placeInfo"},s.a.createElement("h2",{className:"placeName"},a.name),s.a.createElement("h3",{className:"placeSub"},"Rating:",a.rating),s.a.createElement("h3",{className:"placeSub"},"Endere\xe7o:",a.formatted_address.split(",")[0]))),s.a.createElement("div",{className:"placeButton"},s.a.createElement("button",{className:"placeBtn",onClick:function(){return e.handleClick(a)}},"+")))})))))))}}]),t}(n.Component)),w=(t(102),function(e){Object(m.a)(t,e);var a=Object(u.a)(t);function t(e){var n;return Object(i.a)(this,t),(n=a.call(this,e)).state={itinerate:[],user:"",active:!1,name:"",city:"",rating:"",address:"",id:""},n.getItinerateHandler=n.getItinerateHandler.bind(Object(o.a)(n)),n.deleteHandler=n.deleteHandler.bind(Object(o.a)(n)),n.toggleClass=n.toggleClass.bind(Object(o.a)(n)),n.handleChange=n.handleChange.bind(Object(o.a)(n)),n.handleFormSubmit=n.handleFormSubmit.bind(Object(o.a)(n)),n}return Object(l.a)(t,[{key:"toggleClass",value:function(e){var a=this;this.state.itinerate.map((function(t,n){return t._id===e?a.setState({active:!a.state.active}):t}))}},{key:"getItinerateHandler",value:function(){var e=this;h.a.get("".concat("https://meu-roteiro.herokuapp.com/api","/itinerate"),{withCredentials:!0}).then((function(a){e.setState({itinerate:a.data})}))}},{key:"deleteHandler",value:function(e){var a=this,t=this.state.itinerate,n=Object(_.a)(t),s=[];n.splice(e,1),t.map((function(a,t){t===e&&s.push(a)})),h.a.post("".concat("https://meu-roteiro.herokuapp.com/api","/itinerate"),{newItinerate:s}).then((function(){a.setState({itinerate:n})}))}},{key:"componentDidMount",value:function(){this.getItinerateHandler()}},{key:"componentWillMount",value:function(){var e=this;this.state.itinerate.map((function(a){e.state.name=a.name,e.state.rating=a.rating,e.state.city=a.city,e.state.adress=a.formatted_address})),this.setState(this.state)}},{key:"handleFormSubmit",value:function(e){var a=this,t=this.state.name,n=this.state.city,s=this.state.rating,r=this.state.formatted_address,c=this.props.loggedInUser._id,i=this.state.itinerate.map((function(e){return e._id}));e.preventDefault(),h.a.put("".concat("https://meu-roteiro.herokuapp.com/api","/itinerate"),{name:t,city:n,rating:s,address:r,user:c,id:i},{withCredentials:!0}).then((function(){a.props.history.push("/profile/".concat(c))}))}},{key:"handleChange",value:function(e){var a=e.target,t=a.name,n=a.value;this.setState(Object(p.a)({},t,n))}},{key:"render",value:function(){var e=this;return s.a.createElement("div",{className:"apagar"},s.a.createElement("div",{className:"logo"},s.a.createElement("img",{src:"/image/logo.png",className:"meuRoteiro-icon"})),s.a.createElement("div",{className:"cities-header"},s.a.createElement("div",{className:"cities-clouds"}),s.a.createElement(C,{isLogged:this.props.isLogged,userInSession:this.props.loggedInUser})),s.a.createElement("div",{className:"profile-body"},s.a.createElement("h1",null,this.props.loggedInUser.name),s.a.createElement("i",{className:"fas fa-sticky-note script-icon"}),s.a.createElement("div",{className:"roteiro"},this.state.itinerate.filter((function(a){return a.user===e.props.loggedInUser._id})).sort((function(e,a){return e.city.localeCompare(a.city)})).map((function(a,t){return s.a.createElement("div",{key:a._id,className:"roteiro-info"},s.a.createElement("div",{className:"margin"},s.a.createElement("div",{className:"roteiro-details"},s.a.createElement("p",{className:"placeName"},a.city),s.a.createElement("p",{className:"placeCity"},a.name),s.a.createElement("p",{className:"placeSub"},"Endere\xe7o: ",a.formatted_address),s.a.createElement("p",{className:"placeSub"},"Rating: ",a.rating)),s.a.createElement("div",{className:"roteiro-btns"},s.a.createElement("button",{onClick:function(){return e.deleteHandler(t)},className:"roteiro-btn"},s.a.createElement("i",{className:"fas fa-trash-alt roteiro-icon"}))),s.a.createElement("div",null,s.a.createElement("p",{className:"linhaRoteiro"},"_____________________"))),e.state.active&&s.a.createElement("form",{onSubmit:e.handleFormSubmit},s.a.createElement("input",{type:"text",name:"city",placeholder:a.city,value:e.state.city,onChange:e.handleChange}),s.a.createElement("input",{type:"text",name:"name",placeholder:a.name,value:e.state.name,onChange:e.handleChange}),s.a.createElement("input",{type:"text",name:"formatted_address",placeholder:a.formatted_address,value:e.state.formatted_address,onChange:e.handleChange}),s.a.createElement("p",{name:"id",value:a._id}),s.a.createElement("input",{className:"button",type:"submit",value:"Submit"})))})))))}}]),t}(n.Component)),B=t(53),L=function(e){var a=e.component,t=e.user,n=e.getCity,r=e.newNameScript,c=Object(B.a)(e,["component","user","getCity","newNameScript"]);return s.a.createElement(N.b,Object.assign({exact:!0,path:"/profile/:id"},c,{render:function(e){return t?s.a.createElement(a,Object.assign({},e,{loggedInUser:t,newNameScript:r,getCity:n})):s.a.createElement(N.a,{to:{pathname:"/",state:{from:e.location}}})}}))},x=t(107),R=function(e){Object(m.a)(t,e);var a=Object(u.a)(t);function t(e){return Object(i.a)(this,t),a.call(this,e)}return Object(l.a)(t,[{key:"render",value:function(){return s.a.createElement("div",{className:"header"},s.a.createElement(C,{isLogged:this.props.isLogged,userInSession:this.props.userInSession}),s.a.createElement(x.a,null,s.a.createElement(x.a.Item,null,s.a.createElement("div",{className:"clouds"}),s.a.createElement("div",{className:"carousel-text"},s.a.createElement("h1",{className:"infoText"},"Encontre o roteiro perfeito para sua viagem"),s.a.createElement(E.b,{to:this.props.isLogged?"/cities":"/login",className:"principal-link"},s.a.createElement("button",{className:"infobtn"},"montar roteiro ",s.a.createElement("i",{class:"fas fa-arrow-right"})))),s.a.createElement("img",{className:"d-block w-100",src:"/image/foto-1-banner.png",alt:"First slide"}),s.a.createElement(x.a.Caption,null)),s.a.createElement(x.a.Item,null,s.a.createElement("div",{className:"clouds"}),s.a.createElement("div",{className:"carousel-text"},s.a.createElement("h1",{className:"infoText"},"Encontre o roteiro perfeito para sua viagem"),s.a.createElement(E.b,{to:this.props.isLogged?"/cities":"/login",className:"principal-link"},s.a.createElement("button",{className:"infobtn"},"montar roteiro ",s.a.createElement("i",{class:"fas fa-arrow-right"})))),s.a.createElement("img",{className:"d-block w-100",src:"/image/foto-2-banner.png",alt:"Third slide"}),s.a.createElement(x.a.Caption,null)),s.a.createElement(x.a.Item,null,s.a.createElement("div",{className:"clouds"}),s.a.createElement("div",{className:"carousel-text"},s.a.createElement("h1",{className:"infoText"},"Encontre o roteiro perfeito para sua viagem"),s.a.createElement(E.b,{to:this.props.isLogged?"/cities":"/login",className:"principal-link"},s.a.createElement("button",{className:"infobtn"},"montar roteiro ",s.a.createElement("i",{class:"fas fa-arrow-right"})))),s.a.createElement("img",{className:"d-block w-100",src:"/image/foto-3-banner.png",alt:"Third slide"}),s.a.createElement(x.a.Caption,null))))}}]),t}(n.Component),T=function(e){Object(m.a)(t,e);var a=Object(u.a)(t);function t(){return Object(i.a)(this,t),a.apply(this,arguments)}return Object(l.a)(t,[{key:"render",value:function(){return s.a.createElement("div",null,s.a.createElement("div",{className:"cards"},s.a.createElement("div",{className:"singleCard"},s.a.createElement("div",{className:"pontilhado flex"},s.a.createElement("div",{className:"cardInfo mv1"},s.a.createElement("h2",null,"Procure seu destino"),s.a.createElement("p",null,"Procure pela cidade que voc\xea ir\xe1 visitar e veja os lugares mais bem pontuados pelos visitantes."))),s.a.createElement("img",{src:"/image/ico-home-2.png",className:"icon1"})),s.a.createElement("div",{className:"singleCard flexend"},s.a.createElement("img",{src:"/image/ico-home-3.png",className:"icon2"}),s.a.createElement("div",{className:"pontilhado flexend"},s.a.createElement("div",{className:"cardInfo mv2 as"},s.a.createElement("h2",null,"Encontre Itiner\xe1rios"),s.a.createElement("div",{className:"linha"}),s.a.createElement("p",null,"Cada cidade tem uma lista de lugares que s\xe3o considerados parada obrigat\xf3ria pelos visitantes. Veja uma lista de itiner\xe1rios e escolha os melhoras para sua viagem!")))),s.a.createElement("div",{className:"singleCard"},s.a.createElement("div",{className:"pontilhado"},s.a.createElement("div",{className:"cardInfo mv1"},s.a.createElement("h2",null,"Monte seu roteiro"),s.a.createElement("p",null,"Salve os melhores itiner\xe1rios no seu roteiro e prepare-se para a viagem!"))),s.a.createElement("img",{src:"/image/ico-home-1.png",className:"icon1"}))))}}]),t}(n.Component),q=function(e){Object(m.a)(t,e);var a=Object(u.a)(t);function t(e){return Object(i.a)(this,t),a.call(this,e)}return Object(l.a)(t,[{key:"render",value:function(){return s.a.createElement("div",{className:"principal"},s.a.createElement("div",{className:"principalText"},s.a.createElement("h1",null,"Como"),s.a.createElement("h1",{className:"rosa"},"funciona?")),s.a.createElement(T,null),s.a.createElement(E.b,{to:this.props.isLogged?"/cities":"/login"},s.a.createElement("button",{className:"principalBtn"},"Come\xe7ar")))}}]),t}(n.Component),z=function(e){Object(m.a)(t,e);var a=Object(u.a)(t);function t(){return Object(i.a)(this,t),a.apply(this,arguments)}return Object(l.a)(t,[{key:"render",value:function(){return s.a.createElement("div",{className:"footer"})}}]),t}(n.Component),P=function(e){Object(m.a)(t,e);var a=Object(u.a)(t);function t(e){return Object(i.a)(this,t),a.call(this,e)}return Object(l.a)(t,[{key:"render",value:function(){return s.a.createElement("div",null,s.a.createElement(R,{userInSession:this.props.userInSession,getUser:this.props.getTheUser,isLogged:this.props.isLogged}),"/>",s.a.createElement(q,{isLogged:this.props.isLogged}),s.a.createElement(z,null))}}]),t}(n.Component),F=(t(103),function(e){Object(m.a)(t,e);var a=Object(u.a)(t);function t(e){var n;return Object(i.a)(this,t),(n=a.call(this,e)).state={loggedInUser:null,museums:[],restaurants:[],enterntainment:[],tourist:[],aquarium:[],bakery:[],cafe:[],movie_theater:[],zoo:[],park:[],library:[],newScript:[],newNameScript:[]},n.service=new g,n.script=new b,n.getTheUser=n.getTheUser.bind(Object(o.a)(n)),n.handleLogout=n.handleLogout.bind(Object(o.a)(n)),n.getCity=n.getCity.bind(Object(o.a)(n)),n.myScript=n.myScript.bind(Object(o.a)(n)),n}return Object(l.a)(t,[{key:"getCity",value:function(){var e=this;h.a.get("".concat("https://meu-roteiro.herokuapp.com/api","/city"),{withCredentials:!0}).then((function(a){e.setState({restaurants:a.data.restaurantUnits.results}),e.setState({museums:a.data.museumUnits.results}),e.setState({enterntainment:a.data.enterUnits.results}),e.setState({tourist:a.data.touristUnits.results}),e.setState({aquarium:a.data.aquariumUnits.results}),e.setState({bakery:a.data.bakeryUnits.results}),e.setState({cafe:a.data.cafeUnits.results}),e.setState({movie_theater:a.data.movie_theaterUnits.results}),e.setState({zoo:a.data.zooUnits.results}),e.setState({park:a.data.parkUnits.results}),e.setState({library:a.data.libraryUnits.results})})).catch((function(e){return console.log(e)}))}},{key:"fetchUser",value:function(){var e=this;null===this.state.loggedInUser&&this.service.loggedin().then((function(a){e.setState({loggedInUser:a})})).catch((function(a){e.setState({loggedInUser:!1})}))}},{key:"getTheUser",value:function(e){this.setState({loggedInUser:e})}},{key:"myScript",value:function(e){var a=[];a.push(e),this.setState({newNameScript:a})}},{key:"handleLogout",value:function(){var e=this;this.service.logout().then((function(){console.log(e.history),e.setState({loggedInUser:null})})).catch()}},{key:"componentDidMount",value:function(){}},{key:"render",value:function(){var e=this;return console.log(this.state.loggedInUser,"user"),this.fetchUser(),this.state.loggedInUser?s.a.createElement("div",{className:"App"},s.a.createElement(N.d,null,s.a.createElement(N.b,{exact:!0,path:"/",component:function(){return s.a.createElement(P,{isLogged:!0,userInSession:e.state.loggedInUser,getUser:e.props.getTheUser})}}),s.a.createElement(N.b,{exact:!0,path:"/cities",render:function(a){return s.a.createElement(I,Object.assign({isLogged:!0,user:e.state.loggedInUser},a))}}),s.a.createElement(N.b,{exact:!0,path:"/city",render:function(a){return s.a.createElement(U,Object.assign({isLogged:!0,getCity:e.getCity,getTheUser:e.getTheUser,myScript:e.myScript,museums:e.state.museums,enterntainment:e.state.enterntainment,restaurants:e.state.restaurants,tourist:e.state.tourist,aquarium:e.state.aquarium,bakery:e.state.bakery,cafe:e.state.cafe,movie_theater:e.state.movie_theater,zoo:e.state.zoo,park:e.state.park,library:e.state.library,newScript:e.state.newScript,newNameScript:e.state.newNameScript,user:e.state.loggedInUser},a))}}),s.a.createElement(L,{user:this.state.loggedInUser,newNameScript:this.state.newNameScript,getCity:this.getCity,museums:this.state.museums,enterntainment:this.state.enterntainment,restaurants:this.state.restaurants,tourist:this.state.tourist,aquarium:this.state.aquarium,bakery:this.state.bakery,cafe:this.state.cafe,movie_theater:this.state.movie_theater,zoo:this.state.zoo,park:this.state.park,library:this.state.library,exact:!0,path:"/profile/:id",component:w}))):s.a.createElement("div",null,s.a.createElement(N.d,null,s.a.createElement(N.b,{exact:!0,path:"/",component:function(){return s.a.createElement(P,{isLogged:!1})}}),s.a.createElement(N.b,{exact:!0,path:"/login",render:function(a){return s.a.createElement(f,Object.assign({getTheUser:e.getTheUser},a))}}),s.a.createElement(N.b,{exact:!0,path:"/signup",render:function(a){return s.a.createElement(v,Object.assign({getTheUser:e.getTheUser},a))}}),s.a.createElement(N.b,{exact:!0,path:"/cities",render:function(a){return s.a.createElement(I,Object.assign({},a,{user:e.state.loggedInUser,isLogged:!1}))}}),s.a.createElement(N.b,{exact:!0,path:"/city",render:function(a){return s.a.createElement(U,Object.assign({isLogged:!1,getCity:e.getCity,myScript:e.myScript,getTheUser:e.getTheUser,museums:e.state.museums,enterntainment:e.state.enterntainment,restaurants:e.state.restaurants,tourist:e.state.tourist,aquarium:e.state.aquarium,bakery:e.state.bakery,cafe:e.state.cafe,movie_theater:e.state.movie_theater,zoo:e.state.zoo,park:e.state.park,library:e.state.library,newScript:e.state.newScript,newNameScript:e.state.newNameScript,user:e.state.loggedInUser},a))}})))}}]),t}(n.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(s.a.createElement(s.a.StrictMode,null,s.a.createElement(E.a,null,s.a.createElement(F,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},31:function(e,a,t){},42:function(e,a,t){},55:function(e,a,t){e.exports=t(104)},60:function(e,a,t){},83:function(e,a,t){}},[[55,1,2]]]);
//# sourceMappingURL=main.40a447b7.chunk.js.map