(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{itcR:function(t,e,i){"use strict";i.r(e),i.d(e,"MoviesModule",function(){return v});var n=i("ofXK"),o=i("3Pt+"),r=i("fXoL"),s=i("sUQ5"),c=i("tyNb");const a=function(t){return[t]};let b=(()=>{class t{constructor(t,e){this.router=t,this.activatedRoute=e,this.prefixImg="https://image.tmdb.org/t/p/original"}ngOnInit(){}details(t){localStorage.setItem("id",JSON.stringify(t)),this.router.navigate(["details/"+t],{relativeTo:this.activatedRoute,state:t})}}return t.\u0275fac=function(e){return new(e||t)(r.Jb(c.b),r.Jb(c.a))},t.\u0275cmp=r.Db({type:t,selectors:[["app-card"]],inputs:{card:"card"},decls:2,vars:4,consts:[[1,"card",3,"click"],[3,"src","alt"]],template:function(t,e){1&t&&(r.Ob(0,"div",0),r.Yb("click",function(){return e.details(e.card.id)}),r.Kb(1,"img",1),r.Nb()),2&t&&(r.xb(1),r.fc("src",r.jc(2,a,e.prefixImg+e.card.poster_path),r.rc)("alt",e.card.title))},styles:[".card[_ngcontent-%COMP%]{margin:10px;width:200px;height:300px;display:flex;border:none;outline:none;justify-content:center;align-items:center;text-align:center;border-radius:10px;overflow:hidden}.card[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:100%;height:100%;object-fit:contain;transition:transform .5s}.card[_ngcontent-%COMP%]:hover   img[_ngcontent-%COMP%]{transform:scale(1.1)}"]}),t})();function l(t,e){1&t&&(r.Ob(0,"h1"),r.Kb(1,"img",2),r.Nb())}function g(t,e){1&t&&(r.Ob(0,"h1"),r.Kb(1,"img",2),r.Nb())}function p(t,e){1&t&&r.Kb(0,"app-card",13),2&t&&r.fc("card",e.$implicit)}const d=function(t){return{"background-image":t}};function h(t,e){if(1&t){const t=r.Pb();r.Ob(0,"div",3),r.Ob(1,"div",4),r.Ob(2,"form",5),r.Yb("ngSubmit",function(){return r.pc(t),r.ac().submit()}),r.Kb(3,"input",6),r.Ob(4,"button",7),r.yc(5,"search"),r.Nb(),r.Nb(),r.Ob(6,"a"),r.Ob(7,"button",8),r.Yb("click",function(){return r.pc(t),r.ac().nextPage(-1)}),r.yc(8,"prev"),r.Nb(),r.Ob(9,"button",8),r.Yb("click",function(){return r.pc(t),r.ac().nextPage(1)}),r.yc(10,"next"),r.Nb(),r.Nb(),r.Nb(),r.wc(11,g,2,0,"h1",0),r.Ob(12,"div",9),r.wc(13,p,1,1,"app-card",10),r.Nb(),r.Ob(14,"div",11),r.Ob(15,"button",8),r.Yb("click",function(){return r.pc(t),r.ac().firstPage()}),r.yc(16,"first"),r.Nb(),r.Ob(17,"button",8),r.Yb("click",function(){return r.pc(t),r.ac().nextPage(-1)}),r.yc(18,"prev"),r.Nb(),r.Ob(19,"a",12),r.yc(20),r.Nb(),r.Ob(21,"button",8),r.Yb("click",function(){return r.pc(t),r.ac().nextPage(1)}),r.yc(22,"next"),r.Nb(),r.Ob(23,"button",8),r.Yb("click",function(){return r.pc(t),r.ac().lastPage()}),r.yc(24,"last"),r.Nb(),r.Nb(),r.Nb()}if(2&t){const t=r.ac();r.fc("ngStyle",r.jc(13,d,"linear-gradient(rgba(0,0,0,0.8), rgba(0,0,0,0.3)), url("+t.headerBGUrl+")")),r.xb(2),r.fc("formGroup",t.form),r.xb(1),r.fc("formControl",t.title),r.xb(4),r.fc("disabled",1===t.movies.page),r.xb(2),r.fc("disabled",500===t.movies.page),r.xb(2),r.fc("ngIf",0===t.movies.results.length),r.xb(2),r.fc("ngForOf",t.movies.results),r.xb(2),r.fc("disabled",1===t.movies.page),r.xb(2),r.fc("disabled",1===t.movies.page),r.xb(3),r.Bc("",t.movies.page," of ",t.movies.total_pages,""),r.xb(1),r.fc("disabled",500===t.movies.page),r.xb(2),r.fc("disabled",500===t.movies.page)}}let m=(()=>{class t{constructor(t){this.moviesService=t,this.prefixImg="https://image.tmdb.org/t/p/original",this.title=new o.b("",[]),this.form=new o.d({title:this.title})}ngOnInit(){this.moviesService.getAllMovie(1).subscribe(t=>{this.movies=t,this.headerBGUrl="https://image.tmdb.org/t/p/original"+t.results[1].backdrop_path})}nextPage(t){this.moviesService.getAllMovie(this.movies.page+t).subscribe(t=>{this.movies=t,this.headerBGUrl="https://image.tmdb.org/t/p/original"+t.results[1].backdrop_path})}firstPage(){this.moviesService.getAllMovie(1).subscribe(t=>{this.movies=t,this.headerBGUrl="https://image.tmdb.org/t/p/original"+t.results[1].backdrop_path})}lastPage(){this.moviesService.getAllMovie(this.movies.total_pages).subscribe(t=>{this.movies=t,this.headerBGUrl="https://image.tmdb.org/t/p/original"+t.results[1].backdrop_path})}submit(){console.log(this.form.value),""===this.title.value?this.moviesService.getAllMovie(this.movies.total_pages).subscribe(t=>{this.movies=t,this.headerBGUrl="https://image.tmdb.org/t/p/original"+t.results[1].backdrop_path}):this.moviesService.getSearchMovie(this.title.value).subscribe(t=>{this.movies=t,this.headerBGUrl="https://image.tmdb.org/t/p/original"+t.results[1].backdrop_path})}}return t.\u0275fac=function(e){return new(e||t)(r.Jb(s.a))},t.\u0275cmp=r.Db({type:t,selectors:[["app-movies"]],decls:2,vars:2,consts:[[4,"ngIf"],["class","movies",3,"ngStyle",4,"ngIf"],["src","https://i.gifer.com/8p7m.gif","alt",""],[1,"movies",3,"ngStyle"],[1,"nav_bar"],[3,"formGroup","ngSubmit"],["type","text",3,"formControl"],[1,"pagination_btn"],[1,"pagination_btn",3,"disabled","click"],[1,"movie_list"],[3,"card",4,"ngFor","ngForOf"],[1,"pagination"],[1,"total_pages"],[3,"card"]],template:function(t,e){1&t&&(r.wc(0,l,2,0,"h1",0),r.wc(1,h,25,15,"div",1)),2&t&&(r.fc("ngIf",!e.movies),r.xb(1),r.fc("ngIf",e.movies))},directives:[n.j,n.k,o.n,o.j,o.e,o.a,o.i,o.c,n.i,b],styles:[".movies[_ngcontent-%COMP%]{background-position:top;background-size:cover;width:100%;top:0;left:0;min-height:100vh;height:100%;flex-direction:column;padding-top:60px}.movies[_ngcontent-%COMP%], h1[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center;text-align:center}h1[_ngcontent-%COMP%]{background:#15181f;height:100vh;width:100vw}.movie_banner[_ngcontent-%COMP%]{width:100%;height:60vh}.movie_list[_ngcontent-%COMP%]{height:100%;width:60%;display:flex;flex-direction:row;justify-content:center;align-items:center;flex-wrap:wrap}"]}),t})();var u=i("LYaK");const f=[{path:"",component:m},{path:"details/:id",loadChildren:()=>i.e(0).then(i.bind(null,"c+5D")).then(t=>t.DetailsModule)}];let v=(()=>{class t{}return t.\u0275mod=r.Hb({type:t}),t.\u0275inj=r.Gb({factory:function(e){return new(e||t)},imports:[[n.b,c.d.forChild(f),u.b,o.l]]}),t})()}}]);