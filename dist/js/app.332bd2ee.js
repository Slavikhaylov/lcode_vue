(function(){"use strict";var t={9684:function(t,n,e){var o=e(9242),r=e(3396);const s={class:"app"};function a(t,n,e,o,a,i){const u=(0,r.up)("post-form"),c=(0,r.up)("post-list");return(0,r.wg)(),(0,r.iD)("div",s,[(0,r.Wm)(u,{onCreate:i.createPost},null,8,["onCreate"]),(0,r.Wm)(c,{posts:a.posts},null,8,["posts"])])}const i={action:"#"};function u(t,n,e,s,a,u){return(0,r.wg)(),(0,r.iD)("form",i,[(0,r._)("button",{onClick:n[0]||(n[0]=(...t)=>u.createPost&&u.createPost(...t)),type:"submit"},"add"),(0,r.wy)((0,r._)("input",{"onUpdate:modelValue":n[1]||(n[1]=t=>a.post.text=t),onInput:n[2]||(n[2]=t=>a.post.text=t.target.value),type:"text"},null,544),[[o.nr,a.post.text]])])}var c={name:"PostForm",data(){return{post:{text:""}}},methods:{createPost(){this.post.id=Date.now(),this.$emit("create",this.post),this.post={text:""}}}},d=e(89);const p=(0,d.Z)(c,[["render",u]]);var f=p,l=e(7139);function v(t,n,e,o,s,a){return(0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(e.posts,(t=>((0,r.wg)(),(0,r.iD)("div",{class:"posts",key:t.id},(0,l.zw)(t.text),1)))),128)}var h={name:"PostList",props:{posts:{type:Array,required:!0}}};const m=(0,d.Z)(h,[["render",v],["__scopeId","data-v-695ddeff"]]);var b=m,w={components:{PostList:b,PostForm:f},data(){return{posts:[{id:1,text:"sadsadasd1"},{id:2,text:"sadsadassdad2"},{id:3,text:"sadsadassadasdd3"},{id:4,text:"sadsadsadasdsaasd4"}]}},methods:{createPost(t){this.posts.push(t)}}};const x=(0,d.Z)(w,[["render",a]]);var y=x;(0,o.ri)(y).mount("#app")}},n={};function e(o){var r=n[o];if(void 0!==r)return r.exports;var s=n[o]={exports:{}};return t[o](s,s.exports,e),s.exports}e.m=t,function(){var t=[];e.O=function(n,o,r,s){if(!o){var a=1/0;for(d=0;d<t.length;d++){o=t[d][0],r=t[d][1],s=t[d][2];for(var i=!0,u=0;u<o.length;u++)(!1&s||a>=s)&&Object.keys(e.O).every((function(t){return e.O[t](o[u])}))?o.splice(u--,1):(i=!1,s<a&&(a=s));if(i){t.splice(d--,1);var c=r();void 0!==c&&(n=c)}}return n}s=s||0;for(var d=t.length;d>0&&t[d-1][2]>s;d--)t[d]=t[d-1];t[d]=[o,r,s]}}(),function(){e.n=function(t){var n=t&&t.__esModule?function(){return t["default"]}:function(){return t};return e.d(n,{a:n}),n}}(),function(){e.d=function(t,n){for(var o in n)e.o(n,o)&&!e.o(t,o)&&Object.defineProperty(t,o,{enumerable:!0,get:n[o]})}}(),function(){e.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){e.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)}}(),function(){var t={143:0};e.O.j=function(n){return 0===t[n]};var n=function(n,o){var r,s,a=o[0],i=o[1],u=o[2],c=0;if(a.some((function(n){return 0!==t[n]}))){for(r in i)e.o(i,r)&&(e.m[r]=i[r]);if(u)var d=u(e)}for(n&&n(o);c<a.length;c++)s=a[c],e.o(t,s)&&t[s]&&t[s][0](),t[s]=0;return e.O(d)},o=self["webpackChunklcode_vue"]=self["webpackChunklcode_vue"]||[];o.forEach(n.bind(null,0)),o.push=n.bind(null,o.push.bind(o))}();var o=e.O(void 0,[998],(function(){return e(9684)}));o=e.O(o)})();
//# sourceMappingURL=app.332bd2ee.js.map