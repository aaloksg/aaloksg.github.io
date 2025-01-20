import{_ as ht}from"./SectionLayout.vue_vue_type_script_setup_true_lang-BCFPMxQl.js";import{o as z,c as R,a as P,d as et,g as O,y as dt,z as yt,e as nt,u as Z,m as ft,M as mt,F as xt,b as _t,w as vt}from"./index-B4VHvsbu.js";/*!
MIT License

Copyright (c) 2011 Max Kueng, George Crabtree
 
Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
"Software"), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:
 
The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.
 
THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/(function(p){if(typeof exports=="object")module.exports=p();else if(typeof define=="function"&&define.amd)define(p);else{var r;typeof window<"u"?r=window:typeof global<"u"?r=global:typeof self<"u"&&(r=self),r.Victor=p()}})(function(){return function p(r,a,e){function l(s,t){if(!a[s]){if(!r[s]){var n=typeof require=="function"&&require;if(!t&&n)return n(s,!0);if(i)return i(s,!0);throw new Error("Cannot find module '"+s+"'")}var h=a[s]={exports:{}};r[s][0].call(h.exports,function(d){var y=r[s][1][d];return l(y||d)},h,h.exports,p,r,a,e)}return a[s].exports}for(var i=typeof require=="function"&&require,o=0;o<e.length;o++)l(e[o]);return l}({1:[function(p,r,a){r.exports=e;function e(t,n){if(!(this instanceof e))return new e(t,n);this.x=t||0,this.y=n||0}e.fromArray=function(t){return new e(t[0]||0,t[1]||0)},e.fromObject=function(t){return new e(t.x||0,t.y||0)},e.prototype.addX=function(t){return this.x+=t.x,this},e.prototype.addY=function(t){return this.y+=t.y,this},e.prototype.add=function(t){return this.x+=t.x,this.y+=t.y,this},e.prototype.addScalar=function(t){return this.x+=t,this.y+=t,this},e.prototype.addScalarX=function(t){return this.x+=t,this},e.prototype.addScalarY=function(t){return this.y+=t,this},e.prototype.subtractX=function(t){return this.x-=t.x,this},e.prototype.subtractY=function(t){return this.y-=t.y,this},e.prototype.subtract=function(t){return this.x-=t.x,this.y-=t.y,this},e.prototype.subtractScalar=function(t){return this.x-=t,this.y-=t,this},e.prototype.subtractScalarX=function(t){return this.x-=t,this},e.prototype.subtractScalarY=function(t){return this.y-=t,this},e.prototype.divideX=function(t){return this.x/=t.x,this},e.prototype.divideY=function(t){return this.y/=t.y,this},e.prototype.divide=function(t){return this.x/=t.x,this.y/=t.y,this},e.prototype.divideScalar=function(t){return t!==0?(this.x/=t,this.y/=t):(this.x=0,this.y=0),this},e.prototype.divideScalarX=function(t){return t!==0?this.x/=t:this.x=0,this},e.prototype.divideScalarY=function(t){return t!==0?this.y/=t:this.y=0,this},e.prototype.invertX=function(){return this.x*=-1,this},e.prototype.invertY=function(){return this.y*=-1,this},e.prototype.invert=function(){return this.invertX(),this.invertY(),this},e.prototype.multiplyX=function(t){return this.x*=t.x,this},e.prototype.multiplyY=function(t){return this.y*=t.y,this},e.prototype.multiply=function(t){return this.x*=t.x,this.y*=t.y,this},e.prototype.multiplyScalar=function(t){return this.x*=t,this.y*=t,this},e.prototype.multiplyScalarX=function(t){return this.x*=t,this},e.prototype.multiplyScalarY=function(t){return this.y*=t,this},e.prototype.normalize=function(){var t=this.length();return t===0?(this.x=1,this.y=0):this.divide(e(t,t)),this},e.prototype.norm=e.prototype.normalize,e.prototype.limit=function(t,n){return Math.abs(this.x)>t&&(this.x*=n),Math.abs(this.y)>t&&(this.y*=n),this},e.prototype.randomize=function(t,n){return this.randomizeX(t,n),this.randomizeY(t,n),this},e.prototype.randomizeX=function(t,n){var h=Math.min(t.x,n.x),d=Math.max(t.x,n.x);return this.x=i(h,d),this},e.prototype.randomizeY=function(t,n){var h=Math.min(t.y,n.y),d=Math.max(t.y,n.y);return this.y=i(h,d),this},e.prototype.randomizeAny=function(t,n){return Math.round(Math.random())?this.randomizeX(t,n):this.randomizeY(t,n),this},e.prototype.unfloat=function(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this},e.prototype.toFixed=function(t){return typeof t>"u"&&(t=8),this.x=this.x.toFixed(t),this.y=this.y.toFixed(t),this},e.prototype.mixX=function(t,n){return typeof n>"u"&&(n=.5),this.x=(1-n)*this.x+n*t.x,this},e.prototype.mixY=function(t,n){return typeof n>"u"&&(n=.5),this.y=(1-n)*this.y+n*t.y,this},e.prototype.mix=function(t,n){return this.mixX(t,n),this.mixY(t,n),this},e.prototype.clone=function(){return new e(this.x,this.y)},e.prototype.copyX=function(t){return this.x=t.x,this},e.prototype.copyY=function(t){return this.y=t.y,this},e.prototype.copy=function(t){return this.copyX(t),this.copyY(t),this},e.prototype.zero=function(){return this.x=this.y=0,this},e.prototype.dot=function(t){return this.x*t.x+this.y*t.y},e.prototype.cross=function(t){return this.x*t.y-this.y*t.x},e.prototype.projectOnto=function(t){var n=(this.x*t.x+this.y*t.y)/(t.x*t.x+t.y*t.y);return this.x=n*t.x,this.y=n*t.y,this},e.prototype.horizontalAngle=function(){return Math.atan2(this.y,this.x)},e.prototype.horizontalAngleDeg=function(){return o(this.horizontalAngle())},e.prototype.verticalAngle=function(){return Math.atan2(this.x,this.y)},e.prototype.verticalAngleDeg=function(){return o(this.verticalAngle())},e.prototype.angle=e.prototype.horizontalAngle,e.prototype.angleDeg=e.prototype.horizontalAngleDeg,e.prototype.direction=e.prototype.horizontalAngle,e.prototype.rotate=function(t){var n=this.x*Math.cos(t)-this.y*Math.sin(t),h=this.x*Math.sin(t)+this.y*Math.cos(t);return this.x=n,this.y=h,this},e.prototype.rotateDeg=function(t){return t=s(t),this.rotate(t)},e.prototype.rotateTo=function(t){return this.rotate(t-this.angle())},e.prototype.rotateToDeg=function(t){return t=s(t),this.rotateTo(t)},e.prototype.rotateBy=function(t){var n=this.angle()+t;return this.rotate(n)},e.prototype.rotateByDeg=function(t){return t=s(t),this.rotateBy(t)},e.prototype.distanceX=function(t){return this.x-t.x},e.prototype.absDistanceX=function(t){return Math.abs(this.distanceX(t))},e.prototype.distanceY=function(t){return this.y-t.y},e.prototype.absDistanceY=function(t){return Math.abs(this.distanceY(t))},e.prototype.distance=function(t){return Math.sqrt(this.distanceSq(t))},e.prototype.distanceSq=function(t){var n=this.distanceX(t),h=this.distanceY(t);return n*n+h*h},e.prototype.length=function(){return Math.sqrt(this.lengthSq())},e.prototype.lengthSq=function(){return this.x*this.x+this.y*this.y},e.prototype.magnitude=e.prototype.length,e.prototype.isZero=function(){return this.x===0&&this.y===0},e.prototype.isEqualTo=function(t){return this.x===t.x&&this.y===t.y},e.prototype.toString=function(){return"x:"+this.x+", y:"+this.y},e.prototype.toArray=function(){return[this.x,this.y]},e.prototype.toObject=function(){return{x:this.x,y:this.y}};var l=180/Math.PI;function i(t,n){return Math.floor(Math.random()*(n-t+1)+t)}function o(t){return t*l}function s(t){return t/l}},{}]},{},[1])(1)});function J(p,r,a){var e=p,l=a,i=r.clone(),o,s="#ffffff",t="ff",n=()=>{o=document.createElementNS("http://www.w3.org/2000/svg","circle"),o.setAttributeNS(null,"cx",i.x),o.setAttributeNS(null,"cy",i.y),o.setAttributeNS(null,"r",l),m(s),e.appendChild(o)},h=()=>{o=null,e=null},d=c=>{l=c<1?1:c,o.setAttributeNS(null,"r",l)},y=c=>{t=c,m(s)},m=c=>{s=c,o.style.fill=`${s}${t}`},_=c=>{i.x=c.x,i.y=c.y,o.setAttributeNS(null,"cx",i.x),o.setAttributeNS(null,"cy",i.y)};return n(),{cleanUp:h,get color(){return s},get position(){return i},set position(c){_(c)},set color(c){m(c)},set alpha(c){y(c)},get radius(){return l},set radius(c){d(c)},get svgElement(){return o}}}function gt(p,r){var a=p,e=r.circleRadius,l=r.circleCenter,i=r.bouncingCircleCenter,o=r.direction.clone(),s=r.color,t=l.clone().add(o.clone().multiply(new Victor(e,e))),n,h=2,d=!1,y=0,m=25,_=.5,c="BB",q=s+c,f,b,M=()=>{y+=_,f.setAttributeNS(null,"stroke-width",y),y<=m?b=requestAnimationFrame(M):T()},D=()=>{y=h,q=s+c,f=document.createElementNS("http://www.w3.org/2000/svg","polyline"),f.setAttributeNS(null,"fill","none"),f.setAttributeNS(null,"stroke-width",y),f.setAttributeNS(null,"stroke",q),f.setAttributeNS(null,"cursor","auto"),C(),a.insertBefore(f,r.insertBefore||n)},T=()=>{d=!1,a.removeChild(f),f=null,cancelAnimationFrame(b),b=void 0},E=()=>{d||(d=!0,D(),b=requestAnimationFrame(M))},A=()=>{n=document.createElementNS("http://www.w3.org/2000/svg","polyline"),n.setAttributeNS(null,"fill","none"),n.setAttributeNS(null,"stroke-width",h),n.setAttributeNS(null,"stroke",s),n.setAttributeNS(null,"cursor","auto"),C(),r.insertBefore?a.insertBefore(n,r.insertBefore):a.appendChild(n)},X=()=>`${i.x},${i.y} ${t.x},${t.y}`,C=()=>{n.setAttributeNS(null,"points",X()),f==null||f.setAttributeNS(null,"points",X())},k=v=>{e=v,t=l.clone().add(o.clone().multiply(new Victor(e,e)))},g=()=>{d&&T(),a.removeChild(n),n=null,a=null},U=v=>{s=v,n.setAttributeNS(null,"stroke",s)};return A(),{cleanUp:g,resize:k,get position(){return _position},get end(){return t},set position(v){_setPosition(v)},set color(v){U(v)},get color(){return s},get radius(){return e},set radius(v){_setRadius(v)},redraw:C,get svgElement(){return n},explode:E}}function wt(p,r,a){var e=p,l=r.clone(),i,o=a,s=10,t=0,n=25,h=.5,d="AA",y=a+d,m=()=>{i=document.createElementNS("http://www.w3.org/2000/svg","circle"),i.setAttributeNS(null,"cx",l.x),i.setAttributeNS(null,"cy",l.y),i.setAttributeNS(null,"r",s),i.setAttributeNS(null,"stroke-width",t),i.setAttributeNS(null,"stroke",y),i.setAttributeNS(null,"cursor","auto"),i.style.fill=`${o}`,e.appendChild(i)},_=()=>{t+=h,i.setAttributeNS(null,"stroke-width",t),t<=n?requestAnimationFrame(_):c()},c=()=>{e.removeChild(i),i=null,e=null};return m(),requestAnimationFrame(_),{cleanUp:c}}function At(){var p=[],r,a=.5,e=()=>{p.push(new Audio("projects/CircleThreader/sounds/ding1.mp3")),p.push(new Audio("projects/CircleThreader/sounds/ding2.mp3")),p.push(new Audio("projects/CircleThreader/sounds/ding3.mp3")),p.forEach(t=>{t.loop=!1,t.volume=a})},l=t=>{p.forEach(n=>{n.volume=t})},i=t=>{t&&(t.pause(),t.currentTime=0)},o=t=>{i(r),r=p[t]??p[0],r.play()},s=()=>{i(r);var t=Math.floor(Math.random()*p.length);r=p[t],r.play()};return e(),{playDing:o,playRandomDing:s,mute:()=>{l(0)},unmute:()=>{l(a)}}}function tt(p){var r=p,a=0,e=0,l=0,i=new Victor(0,0),o,s,t,n=[],h,d=new Victor(0,1),y=0,m,_,c={},q=-1,f=20,b=5,M=20,D,T=50,E=!1,A=0,X=20,C=.4,k,g,U=()=>{a=r.clientHeight,e=r.clientWidth,W(),h=l/1e3,i.x=e/2,i.y=a/2,s=new J(r,i,l),s.color="#424242",s.svgElement.setAttributeNS(null,"cursor","auto"),t=new J(r,i,10),t.color="#c45911",r.style.cursor="pointer",r.style.touchAction="none",v()},v=()=>{t.svgElement.addEventListener("pointerdown",$)},$=u=>{u.preventDefault(),E&&H(),window.addEventListener("pointerup",F),window.addEventListener("pointermove",V),window.addEventListener("blur",F),c.x=u.clientX,c.y=u.clientY},B=()=>{window.removeEventListener("pointerup",F),window.removeEventListener("pointermove",V),window.removeEventListener("blur",F)},F=u=>{u.preventDefault(),B()},V=u=>{u.preventDefault();var x=u.clientX-c.x,w=u.clientY-c.y;c.x=u.clientX,c.y=u.clientY;var S=t.position.clone().add(new Victor(x,w));d.x=x,d.y=w,d.normalize(),j(S)&&(B(),E||Q())},rt=u=>{Math.abs(u.x)<.001&&(u.x=0),Math.abs(u.y)<.001&&(u.y=0)},it=()=>{var u=l/250,x=l/1e3;h=Math.random()*(u-x)+x},L=()=>{var u=Math.floor(Math.random()*256).toString(16);return u.length<2?`0${u}`:u},ot=()=>{var u=L(),x=L(),w=L();return`#${u}${x}${w}`},W=()=>{l=Math.min(a,e)/2-f,D=l-b},st=()=>{k=t.color+"AA"},ut=()=>{a=r.clientHeight,e=r.clientWidth,i.x=e/2,i.y=a/2,s.position=i,t.position=i,W(),n.forEach(u=>u.resize(l))},lt=()=>{if(t.radius=t.radius+q*b,t.radius<M){t.radius=M,q=1;return}if(t.radius>=D){t.radius=D,q=-1;return}},j=u=>{var x=u.distance(i)+t.radius,w=!1;if(x>=l){w=!0,t.color=ot();var S=u.clone();S.subtract(i),S.normalize();var N=S.clone();lt(),u=i.clone(),N.multiply(new Victor(l-t.radius,l-t.radius)),u.add(N);var Y=new gt(r,{circleRadius:l,circleCenter:s.position,bouncingCircleCenter:t.position,direction:S.clone(),color:t.color,insertBefore:t.svgElement});n.push(Y),Y.explode(),new wt(r,Y.end,Y.color),g.playRandomDing(),d.rotateDeg(Math.floor(Math.random()*40+80)),rt(d),it()}return t.position=u,n.forEach(pt=>pt.redraw()),w},I=()=>{var u=Date.now(),x=u-y;if(x<T){m=requestAnimationFrame(I);return}y=u;var w=x*h,S=t.position.clone(),N=d.clone();N.multiply(new Victor(w,w)),S.add(N),j(S),m=requestAnimationFrame(I)},K=()=>{A+=C,A>X&&(A=0),t.svgElement.setAttributeNS(null,"stroke-width",A),_=requestAnimationFrame(K)},G=()=>{st(),A=0,t.svgElement.setAttributeNS(null,"stroke",k),t.svgElement.setAttributeNS(null,"stroke-width",A),_=requestAnimationFrame(K)},at=()=>{t.svgElement.setAttributeNS(null,"stroke-width",0),A=0,cancelAnimationFrame(_)},Q=()=>{at(),E=!0,y=Date.now(),m=requestAnimationFrame(I)},H=()=>{E=!1,cancelAnimationFrame(m),G()},ct=()=>{t.svgElement.removeEventListener("pointerdown",$),B(),cancelAnimationFrame(m),cancelAnimationFrame(_),o.disconnect(),o=null,s.cleanUp(),r=null,s=null,t.cleanUp(),t=null,n.forEach(u=>u.cleanUp()),n=[]};return U(),g=new At,G(),o=new ResizeObserver(ut),o.observe(r),{cleanUp:ct,toggle:()=>{E?H():Q()},stop:()=>{E&&H()},mute:()=>{g==null||g.mute()},unmute:()=>{g==null||g.unmute()}}}const St={xmlns:"http://www.w3.org/2000/svg",width:"48",height:"48",viewBox:"0 -960 960 960"};function Et(p,r){return z(),R("svg",St,r[0]||(r[0]=[P("path",{d:"M684.39-176.13q-14.74 10.3-30.69 18.89-15.96 8.59-33.13 15.46-13.13 6.13-26.48.28t-18.35-19.54q-4.44-10.44-.35-21.16 4.09-10.71 13.83-16.84 13.3-4.44 25.11-10.59 11.8-6.15 23.1-15.02L483.74-380.04v158.78q0 26.78-24.44 36.83-24.43 10.04-43.52-9.05L263.96-345.87H135.09q-16.96 0-28.29-11.33-11.32-11.32-11.32-28.28v-189.04q0-16.96 11.32-28.57 11.33-11.61 28.29-11.61h116.95L57.56-811.44q-10.13-10.13-9.63-23.47.5-13.35 10.63-23.48 10.14-10.13 23.77-10.13t23.76 10.13l735.69 744.17q10.13 10.13 10.13 23.48t-10.13 23.48q-10.13 10.7-24.26 10.7t-24.26-10.7zM784.3-481q0-92.43-52.21-167.37-52.22-74.93-136.65-110.06-13.14-5-18.14-17.14-5-12.13 1.14-24.82 5.56-13.13 18.91-18.2 13.35-5.06 27.48.5 101.56 42.13 163.63 133.05 62.06 90.91 62.06 204.04 0 38-7.5 74.43-7.5 36.44-22.93 70.87-8.57 18.7-21.2 22.77-12.63 4.06-24.76-1.5-12.13-5-18.48-15.64-6.35-10.63-.35-23.32 14.44-28.87 21.44-61.31 7-32.43 7.56-66.3M589.57-631.39q38.56 25.82 59.76 65.19 21.19 39.37 21.19 86.2 0 6.3-.28 12.74-.28 6.43-1.15 12.74-1.44 12.82-13.83 16.67t-22.65-6.98L575-502.43q-6.13-6.14-8.7-13.11-2.56-6.98-2.56-14.68v-85.91q0-10.7 8.35-15.76 8.35-5.07 17.48.5m-210.14-70q-6.13-6.13-6.13-14.39t6.13-14.4l36.35-36.34q19.09-19.09 43.52-9.05 24.44 10.05 24.44 36.27v94.91q0 13.39-12.61 18.02T449.26-631zm24.53 382.95v-142.08l-73.83-74.39H174.7v109.82h122.6zm-36.92-178.99"},null,-1)]))}const bt={render:Et},qt={xmlns:"http://www.w3.org/2000/svg",width:"48",height:"48",viewBox:"0 -960 960 960"};function Mt(p,r){return z(),R("svg",qt,r[0]||(r[0]=[P("path",{d:"M791.3-481q0-92.87-52.21-167.59-52.22-74.71-136.65-109.84-13.14-5.24-18.14-17.25-5-12.02 1.14-24.44 5.56-13.4 18.91-18.47 13.35-5.06 27.48.42 102.13 42.78 163.91 133.81t61.78 203.26-61.78 203.36-163.91 133.91q-14.13 5.48-27.48.42-13.35-5.07-18.91-18.36-6.14-12.31-1.14-24.64t18.14-17.72q84.43-34.57 136.65-109.28Q791.3-388.13 791.3-481M270.69-345.87H142.65q-17.52 0-28.85-11.33-11.32-11.32-11.32-28.28v-189.04q0-16.89 11.32-28.53 11.33-11.65 28.85-11.65h128.04l152.66-151.82q18.52-19.09 43.24-9.05 24.71 10.05 24.71 36.27v518.04q0 26.89-24.71 36.88-24.72 9.99-43.24-9.1zM677.52-480q0 52.57-26.85 95.41-26.84 42.85-75.54 65.98-9.13 4.57-16.48-1-7.35-5.56-7.35-15.21v-291.36q0-9.65 7.35-14.93t16.48-.72q48.7 23.13 75.54 66.7 26.85 43.56 26.85 95.13m-266-155.56L305.87-534.91H182.26v109.82h123.61l105.65 101.65zM294.61-480"},null,-1)]))}const Dt={render:Mt},Ct={class:"flex items-center gap-1"},Nt=et({name:"CircleThreader",__name:"CircleThreader",setup(p){const r=O(),a=O(!1),e=O(),l=()=>{var i,o;a.value?(a.value=!1,(i=e.value)==null||i.unmute()):(a.value=!0,(o=e.value)==null||o.mute())};return dt(()=>r.value,()=>{r.value&&(e.value=new tt(r.value),e.value.unmute(),r.value.addEventListener("dblclick",()=>{var i,o;(i=e.value)==null||i.stop(),(o=e.value)==null||o.cleanUp(),e.value=new tt(r.value)}))}),yt(()=>{var i;(i=e.value)==null||i.cleanUp()}),(i,o)=>(z(),R(xt,null,[P("div",Ct,[o[0]||(o[0]=P("h2",{class:"text-xl"},"Circle Threader",-1)),nt(mt,{icon:a.value?Z(bt):Z(Dt),class:"h-9 w-9 cursor-pointer text-primary hover:text-accent",onClick:ft(l,["stop"])},null,8,["icon"])]),o[1]||(o[1]=P("p",{class:"text-sm text-muted"},"Hit the ball against the boundary.",-1)),(z(),R("svg",{ref_key:"svgElementRef",ref:r,id:"circle-threader-svg",class:"h-full w-full"},null,512))],64))}}),Tt=et({name:"FunProjects",__name:"FunProjects",setup(p){return(r,a)=>(z(),_t(ht,{title:"Projects for fun"},{default:vt(()=>[nt(Nt)]),_:1}))}});export{Tt as default};
