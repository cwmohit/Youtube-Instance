(this.webpackJsonpreact=this.webpackJsonpreact||[]).push([[0],{20:function(e,t,a){e.exports=a(47)},26:function(e,t,a){},46:function(e,t,a){},47:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),i=a(17),c=a.n(i),o=a(7),s=a.n(o),l=a(18),m=a(3),u=a(4),d=a(6),v=a(5),p=(a(26),a(27),a(48),function(e){Object(d.a)(a,e);var t=Object(v.a)(a);function a(){var e;Object(m.a)(this,a);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(e=t.call.apply(t,[this].concat(r))).state={term:""},e.onInputChange=function(t){e.setState({term:t.target.value})},e.onFormSubmit=function(t){t.preventDefault(),e.props.onFormSubmit(e.state.term)},e}return Object(u.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"search-bar ui segment"},r.a.createElement("form",{onSubmit:this.onFormSubmit,className:"ui form"},r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"Video Search"),r.a.createElement("input",{type:"text",class:"form-control",value:this.state.term,onChange:this.onInputChange}))))}}]),a}(n.Component)),f=a(19),b=a.n(f).a.create({baseURL:"https://www.googleapis.com/youtube/v3",params:{part:"snippet",type:"video",maxResults:5,key:"AIzaSyDEwAOngVYzzbgb6jubW9EHkB4FDswQis8"}});a(46);function h(e){var t=e.video,a=e.onVideoSelect;return r.a.createElement("div",{onClick:function(){return a(t)},className:"video-item item"},r.a.createElement("img",{className:"ui image",alt:t.snippet.title,src:t.snippet.thumbnails.medium.url}),r.a.createElement("div",{className:"content"},r.a.createElement("div",{className:"header"},t.snippet.title)))}function E(e){var t=e.videos,a=e.onVideoSelect,n=t.map((function(e){return r.a.createElement(h,{key:e.id.videoId,onVideoSelect:a,video:e})}));return r.a.createElement("div",{className:"ui relaxed divided list"},n)}function g(e){var t=e.video;if(!t)return r.a.createElement("div",null,"Loading...");var a="https://www.youtube.com/embed/".concat(t.id.videoId);return r.a.createElement("div",null,r.a.createElement("div",{className:"ui embed"},r.a.createElement("iframe",{title:"video player",src:a})),r.a.createElement("div",{className:"ui segment"},r.a.createElement("h4",{className:"ui header"},t.snippet.title),r.a.createElement("p",null," ",t.snippet.description)))}var y=function(e){Object(d.a)(a,e);var t=Object(v.a)(a);function a(){var e;Object(m.a)(this,a);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(e=t.call.apply(t,[this].concat(r))).state={videos:[],selectedVideo:null},e.onTermSubmit=function(){var t=Object(l.a)(s.a.mark((function t(a){var n;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,b.get("/search",{params:{q:a}});case 2:n=t.sent,console.log(n),e.setState({videos:n.data.items,selectedVideo:n.data.items[0]});case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e.onVideoSelect=function(t){e.setState({selectedVideo:t})},e}return Object(u.a)(a,[{key:"componentDidMount",value:function(){this.onTermSubmit("building")}},{key:"render",value:function(){return r.a.createElement("div",{className:"ui container"},r.a.createElement(p,{onFormSubmit:this.onTermSubmit}),r.a.createElement("div",{className:"row",style:{margin:"0"}},r.a.createElement("div",{className:"col-lg-8 my-2"},r.a.createElement(g,{video:this.state.selectedVideo})),r.a.createElement("div",{className:"col-lg-4 my-2"},r.a.createElement(E,{onVideoSelect:this.onVideoSelect,videos:this.state.videos}))))}}]),a}(n.Component),S=document.getElementById("root");c.a.render(r.a.createElement(y,null),S)}},[[20,1,2]]]);
//# sourceMappingURL=main.fb95dc5d.chunk.js.map