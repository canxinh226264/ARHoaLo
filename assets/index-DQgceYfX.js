(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function e(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(i){if(i.ep)return;i.ep=!0;const r=e(i);fetch(i.href,r)}})();/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const zl="169",Tp=0,Fh=1,Rp=2,Qd=1,Cp=2,ui=3,xi=0,tn=1,an=2,Di=0,Fs=1,Pr=2,Uh=3,kh=4,Pp=5,$i=100,Lp=101,Ip=102,Dp=103,Np=104,Fp=200,Up=201,kp=202,Op=203,zc=204,Hc=205,Bp=206,zp=207,Hp=208,Gp=209,Vp=210,Wp=211,qp=212,Xp=213,jp=214,Gc=0,Vc=1,Wc=2,Hs=3,qc=4,Xc=5,jc=6,Yc=7,Zd=0,Yp=1,Kp=2,Ni=0,$p=1,Jp=2,Qp=3,Zp=4,tm=5,em=6,nm=7,Oh="attached",im="detached",tf=300,Gs=301,Vs=302,Kc=303,$c=304,mo=306,ts=1e3,pi=1001,to=1002,Je=1003,ef=1004,Rr=1005,on=1006,Wa=1007,Xn=1008,Kn=1009,nf=1010,sf=1011,Br=1012,Hl=1013,es=1014,Nn=1015,Kr=1016,Gl=1017,Vl=1018,Ws=1020,rf=35902,af=1021,of=1022,En=1023,cf=1024,lf=1025,Us=1026,qs=1027,Wl=1028,ql=1029,Xl=1030,jl=1031,Yl=1033,qa=33776,Xa=33777,ja=33778,Ya=33779,Jc=35840,Qc=35841,Zc=35842,tl=35843,el=36196,nl=37492,il=37496,sl=37808,rl=37809,al=37810,ol=37811,cl=37812,ll=37813,hl=37814,ul=37815,dl=37816,fl=37817,pl=37818,ml=37819,gl=37820,bl=37821,Ka=36492,vl=36494,xl=36495,hf=36283,_l=36284,yl=36285,Ml=36286,zr=2300,Hr=2301,Lo=2302,Bh=2400,zh=2401,Hh=2402,sm=2500,rm=0,uf=1,Sl=2,am=3200,om=3201,df=0,cm=1,Pi="",Fe="srgb",He="srgb-linear",Kl="display-p3",go="display-p3-linear",eo="linear",me="srgb",no="rec709",io="p3",cs=7680,Gh=519,lm=512,hm=513,um=514,ff=515,dm=516,fm=517,pm=518,mm=519,wl=35044,Wn=35048,Vh="300 es",mi=2e3,so=2001;class Qs{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const i=this._listeners[t];if(i!==void 0){const r=i.indexOf(e);r!==-1&&i.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const n=this._listeners[t.type];if(n!==void 0){t.target=this;const i=n.slice(0);for(let r=0,a=i.length;r<a;r++)i[r].call(this,t);t.target=null}}}const Ge=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Wh=1234567;const ks=Math.PI/180,Xs=180/Math.PI;function Tn(){const s=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Ge[s&255]+Ge[s>>8&255]+Ge[s>>16&255]+Ge[s>>24&255]+"-"+Ge[t&255]+Ge[t>>8&255]+"-"+Ge[t>>16&15|64]+Ge[t>>24&255]+"-"+Ge[e&63|128]+Ge[e>>8&255]+"-"+Ge[e>>16&255]+Ge[e>>24&255]+Ge[n&255]+Ge[n>>8&255]+Ge[n>>16&255]+Ge[n>>24&255]).toLowerCase()}function Ue(s,t,e){return Math.max(t,Math.min(e,s))}function $l(s,t){return(s%t+t)%t}function gm(s,t,e,n,i){return n+(s-t)*(i-n)/(e-t)}function bm(s,t,e){return s!==t?(e-s)/(t-s):0}function Lr(s,t,e){return(1-e)*s+e*t}function vm(s,t,e,n){return Lr(s,t,1-Math.exp(-e*n))}function xm(s,t=1){return t-Math.abs($l(s,t*2)-t)}function _m(s,t,e){return s<=t?0:s>=e?1:(s=(s-t)/(e-t),s*s*(3-2*s))}function ym(s,t,e){return s<=t?0:s>=e?1:(s=(s-t)/(e-t),s*s*s*(s*(s*6-15)+10))}function Mm(s,t){return s+Math.floor(Math.random()*(t-s+1))}function Sm(s,t){return s+Math.random()*(t-s)}function wm(s){return s*(.5-Math.random())}function Am(s){s!==void 0&&(Wh=s);let t=Wh+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function Em(s){return s*ks}function Tm(s){return s*Xs}function Rm(s){return(s&s-1)===0&&s!==0}function Cm(s){return Math.pow(2,Math.ceil(Math.log(s)/Math.LN2))}function Pm(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function Lm(s,t,e,n,i){const r=Math.cos,a=Math.sin,o=r(e/2),c=a(e/2),l=r((t+n)/2),h=a((t+n)/2),u=r((t-n)/2),d=a((t-n)/2),f=r((n-t)/2),g=a((n-t)/2);switch(i){case"XYX":s.set(o*h,c*u,c*d,o*l);break;case"YZY":s.set(c*d,o*h,c*u,o*l);break;case"ZXZ":s.set(c*u,c*d,o*h,o*l);break;case"XZX":s.set(o*h,c*g,c*f,o*l);break;case"YXY":s.set(c*f,o*h,c*g,o*l);break;case"ZYZ":s.set(c*g,c*f,o*h,o*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function Dn(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function oe(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}const Tt={DEG2RAD:ks,RAD2DEG:Xs,generateUUID:Tn,clamp:Ue,euclideanModulo:$l,mapLinear:gm,inverseLerp:bm,lerp:Lr,damp:vm,pingpong:xm,smoothstep:_m,smootherstep:ym,randInt:Mm,randFloat:Sm,randFloatSpread:wm,seededRandom:Am,degToRad:Em,radToDeg:Tm,isPowerOfTwo:Rm,ceilPowerOfTwo:Cm,floorPowerOfTwo:Pm,setQuaternionFromProperEuler:Lm,normalize:oe,denormalize:Dn};class it{constructor(t=0,e=0){it.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,i=t.elements;return this.x=i[0]*e+i[3]*n+i[6],this.y=i[1]*e+i[4]*n+i[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Ue(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),i=Math.sin(e),r=this.x-t.x,a=this.y-t.y;return this.x=r*n-a*i+t.x,this.y=r*i+a*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class zt{constructor(t,e,n,i,r,a,o,c,l){zt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,i,r,a,o,c,l)}set(t,e,n,i,r,a,o,c,l){const h=this.elements;return h[0]=t,h[1]=i,h[2]=o,h[3]=e,h[4]=r,h[5]=c,h[6]=n,h[7]=a,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,r=this.elements,a=n[0],o=n[3],c=n[6],l=n[1],h=n[4],u=n[7],d=n[2],f=n[5],g=n[8],b=i[0],m=i[3],p=i[6],y=i[1],v=i[4],_=i[7],M=i[2],E=i[5],S=i[8];return r[0]=a*b+o*y+c*M,r[3]=a*m+o*v+c*E,r[6]=a*p+o*_+c*S,r[1]=l*b+h*y+u*M,r[4]=l*m+h*v+u*E,r[7]=l*p+h*_+u*S,r[2]=d*b+f*y+g*M,r[5]=d*m+f*v+g*E,r[8]=d*p+f*_+g*S,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],a=t[4],o=t[5],c=t[6],l=t[7],h=t[8];return e*a*h-e*o*l-n*r*h+n*o*c+i*r*l-i*a*c}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],a=t[4],o=t[5],c=t[6],l=t[7],h=t[8],u=h*a-o*l,d=o*c-h*r,f=l*r-a*c,g=e*u+n*d+i*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const b=1/g;return t[0]=u*b,t[1]=(i*l-h*n)*b,t[2]=(o*n-i*a)*b,t[3]=d*b,t[4]=(h*e-i*c)*b,t[5]=(i*r-o*e)*b,t[6]=f*b,t[7]=(n*c-l*e)*b,t[8]=(a*e-n*r)*b,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,i,r,a,o){const c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*a+l*o)+a+t,-i*l,i*c,-i*(-l*a+c*o)+o+e,0,0,1),this}scale(t,e){return this.premultiply(Io.makeScale(t,e)),this}rotate(t){return this.premultiply(Io.makeRotation(-t)),this}translate(t,e){return this.premultiply(Io.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<9;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const Io=new zt;function pf(s){for(let t=s.length-1;t>=0;--t)if(s[t]>=65535)return!0;return!1}function Gr(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function Im(){const s=Gr("canvas");return s.style.display="block",s}const qh={};function $a(s){s in qh||(qh[s]=!0,console.warn(s))}function Dm(s,t,e){return new Promise(function(n,i){function r(){switch(s.clientWaitSync(t,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:i();break;case s.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}function Nm(s){const t=s.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function Fm(s){const t=s.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const Xh=new zt().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),jh=new zt().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),rr={[He]:{transfer:eo,primaries:no,luminanceCoefficients:[.2126,.7152,.0722],toReference:s=>s,fromReference:s=>s},[Fe]:{transfer:me,primaries:no,luminanceCoefficients:[.2126,.7152,.0722],toReference:s=>s.convertSRGBToLinear(),fromReference:s=>s.convertLinearToSRGB()},[go]:{transfer:eo,primaries:io,luminanceCoefficients:[.2289,.6917,.0793],toReference:s=>s.applyMatrix3(jh),fromReference:s=>s.applyMatrix3(Xh)},[Kl]:{transfer:me,primaries:io,luminanceCoefficients:[.2289,.6917,.0793],toReference:s=>s.convertSRGBToLinear().applyMatrix3(jh),fromReference:s=>s.applyMatrix3(Xh).convertLinearToSRGB()}},Um=new Set([He,go]),Zt={enabled:!0,_workingColorSpace:He,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(s){if(!Um.has(s))throw new Error(`Unsupported working color space, "${s}".`);this._workingColorSpace=s},convert:function(s,t,e){if(this.enabled===!1||t===e||!t||!e)return s;const n=rr[t].toReference,i=rr[e].fromReference;return i(n(s))},fromWorkingColorSpace:function(s,t){return this.convert(s,this._workingColorSpace,t)},toWorkingColorSpace:function(s,t){return this.convert(s,t,this._workingColorSpace)},getPrimaries:function(s){return rr[s].primaries},getTransfer:function(s){return s===Pi?eo:rr[s].transfer},getLuminanceCoefficients:function(s,t=this._workingColorSpace){return s.fromArray(rr[t].luminanceCoefficients)}};function Os(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function Do(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let ls;class km{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{ls===void 0&&(ls=Gr("canvas")),ls.width=t.width,ls.height=t.height;const n=ls.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=ls}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=Gr("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const i=n.getImageData(0,0,t.width,t.height),r=i.data;for(let a=0;a<r.length;a++)r[a]=Os(r[a]/255)*255;return n.putImageData(i,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Os(e[n]/255)*255):e[n]=Os(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let Om=0;class mf{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Om++}),this.uuid=Tn(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let a=0,o=i.length;a<o;a++)i[a].isDataTexture?r.push(No(i[a].image)):r.push(No(i[a]))}else r=No(i);n.url=r}return e||(t.images[this.uuid]=n),n}}function No(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?km.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Bm=0;class Le extends Qs{constructor(t=Le.DEFAULT_IMAGE,e=Le.DEFAULT_MAPPING,n=pi,i=pi,r=on,a=Xn,o=En,c=Kn,l=Le.DEFAULT_ANISOTROPY,h=Pi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Bm++}),this.uuid=Tn(),this.name="",this.source=new mf(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=a,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=c,this.offset=new it(0,0),this.repeat=new it(1,1),this.center=new it(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new zt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==tf)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case ts:t.x=t.x-Math.floor(t.x);break;case pi:t.x=t.x<0?0:1;break;case to:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case ts:t.y=t.y-Math.floor(t.y);break;case pi:t.y=t.y<0?0:1;break;case to:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Le.DEFAULT_IMAGE=null;Le.DEFAULT_MAPPING=tf;Le.DEFAULT_ANISOTROPY=1;class ne{constructor(t=0,e=0,n=0,i=1){ne.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=i}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,i){return this.x=t,this.y=e,this.z=n,this.w=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,r=this.w,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*i+a[12]*r,this.y=a[1]*e+a[5]*n+a[9]*i+a[13]*r,this.z=a[2]*e+a[6]*n+a[10]*i+a[14]*r,this.w=a[3]*e+a[7]*n+a[11]*i+a[15]*r,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,i,r;const c=t.elements,l=c[0],h=c[4],u=c[8],d=c[1],f=c[5],g=c[9],b=c[2],m=c[6],p=c[10];if(Math.abs(h-d)<.01&&Math.abs(u-b)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+b)<.1&&Math.abs(g+m)<.1&&Math.abs(l+f+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const v=(l+1)/2,_=(f+1)/2,M=(p+1)/2,E=(h+d)/4,S=(u+b)/4,C=(g+m)/4;return v>_&&v>M?v<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(v),i=E/n,r=S/n):_>M?_<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(_),n=E/i,r=C/i):M<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(M),n=S/r,i=C/r),this.set(n,i,r,e),this}let y=Math.sqrt((m-g)*(m-g)+(u-b)*(u-b)+(d-h)*(d-h));return Math.abs(y)<.001&&(y=1),this.x=(m-g)/y,this.y=(u-b)/y,this.z=(d-h)/y,this.w=Math.acos((l+f+p-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class zm extends Qs{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new ne(0,0,t,e),this.scissorTest=!1,this.viewport=new ne(0,0,t,e);const i={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:on,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const r=new Le(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];const a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let i=0,r=this.textures.length;i<r;i++)this.textures[i].image.width=t,this.textures[i].image.height=e,this.textures[i].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,i=t.textures.length;n<i;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new mf(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class ns extends zm{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class gf extends Le{constructor(t=null,e=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=Je,this.minFilter=Je,this.wrapR=pi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class Hm extends Le{constructor(t=null,e=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=Je,this.minFilter=Je,this.wrapR=pi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Kt{constructor(t=0,e=0,n=0,i=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=i}static slerpFlat(t,e,n,i,r,a,o){let c=n[i+0],l=n[i+1],h=n[i+2],u=n[i+3];const d=r[a+0],f=r[a+1],g=r[a+2],b=r[a+3];if(o===0){t[e+0]=c,t[e+1]=l,t[e+2]=h,t[e+3]=u;return}if(o===1){t[e+0]=d,t[e+1]=f,t[e+2]=g,t[e+3]=b;return}if(u!==b||c!==d||l!==f||h!==g){let m=1-o;const p=c*d+l*f+h*g+u*b,y=p>=0?1:-1,v=1-p*p;if(v>Number.EPSILON){const M=Math.sqrt(v),E=Math.atan2(M,p*y);m=Math.sin(m*E)/M,o=Math.sin(o*E)/M}const _=o*y;if(c=c*m+d*_,l=l*m+f*_,h=h*m+g*_,u=u*m+b*_,m===1-o){const M=1/Math.sqrt(c*c+l*l+h*h+u*u);c*=M,l*=M,h*=M,u*=M}}t[e]=c,t[e+1]=l,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,n,i,r,a){const o=n[i],c=n[i+1],l=n[i+2],h=n[i+3],u=r[a],d=r[a+1],f=r[a+2],g=r[a+3];return t[e]=o*g+h*u+c*f-l*d,t[e+1]=c*g+h*d+l*u-o*f,t[e+2]=l*g+h*f+o*d-c*u,t[e+3]=h*g-o*u-c*d-l*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,i){return this._x=t,this._y=e,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,i=t._y,r=t._z,a=t._order,o=Math.cos,c=Math.sin,l=o(n/2),h=o(i/2),u=o(r/2),d=c(n/2),f=c(i/2),g=c(r/2);switch(a){case"XYZ":this._x=d*h*u+l*f*g,this._y=l*f*u-d*h*g,this._z=l*h*g+d*f*u,this._w=l*h*u-d*f*g;break;case"YXZ":this._x=d*h*u+l*f*g,this._y=l*f*u-d*h*g,this._z=l*h*g-d*f*u,this._w=l*h*u+d*f*g;break;case"ZXY":this._x=d*h*u-l*f*g,this._y=l*f*u+d*h*g,this._z=l*h*g+d*f*u,this._w=l*h*u-d*f*g;break;case"ZYX":this._x=d*h*u-l*f*g,this._y=l*f*u+d*h*g,this._z=l*h*g-d*f*u,this._w=l*h*u+d*f*g;break;case"YZX":this._x=d*h*u+l*f*g,this._y=l*f*u+d*h*g,this._z=l*h*g-d*f*u,this._w=l*h*u-d*f*g;break;case"XZY":this._x=d*h*u-l*f*g,this._y=l*f*u-d*h*g,this._z=l*h*g+d*f*u,this._w=l*h*u+d*f*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,i=Math.sin(n);return this._x=t.x*i,this._y=t.y*i,this._z=t.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],i=e[4],r=e[8],a=e[1],o=e[5],c=e[9],l=e[2],h=e[6],u=e[10],d=n+o+u;if(d>0){const f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(h-c)*f,this._y=(r-l)*f,this._z=(a-i)*f}else if(n>o&&n>u){const f=2*Math.sqrt(1+n-o-u);this._w=(h-c)/f,this._x=.25*f,this._y=(i+a)/f,this._z=(r+l)/f}else if(o>u){const f=2*Math.sqrt(1+o-n-u);this._w=(r-l)/f,this._x=(i+a)/f,this._y=.25*f,this._z=(c+h)/f}else{const f=2*Math.sqrt(1+u-n-o);this._w=(a-i)/f,this._x=(r+l)/f,this._y=(c+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Ue(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const i=Math.min(1,e/n);return this.slerp(t,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,i=t._y,r=t._z,a=t._w,o=e._x,c=e._y,l=e._z,h=e._w;return this._x=n*h+a*o+i*l-r*c,this._y=i*h+a*c+r*o-n*l,this._z=r*h+a*l+n*c-i*o,this._w=a*h-n*o-i*c-r*l,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,i=this._y,r=this._z,a=this._w;let o=a*t._w+n*t._x+i*t._y+r*t._z;if(o<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,o=-o):this.copy(t),o>=1)return this._w=a,this._x=n,this._y=i,this._z=r,this;const c=1-o*o;if(c<=Number.EPSILON){const f=1-e;return this._w=f*a+e*this._w,this._x=f*n+e*this._x,this._y=f*i+e*this._y,this._z=f*r+e*this._z,this.normalize(),this}const l=Math.sqrt(c),h=Math.atan2(l,o),u=Math.sin((1-e)*h)/l,d=Math.sin(e*h)/l;return this._w=a*u+this._w*d,this._x=n*u+this._x*d,this._y=i*u+this._y*d,this._z=r*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(i*Math.sin(t),i*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class R{constructor(t=0,e=0,n=0){R.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Yh.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Yh.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,i=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*i,this.y=r[1]*e+r[4]*n+r[7]*i,this.z=r[2]*e+r[5]*n+r[8]*i,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,r=t.elements,a=1/(r[3]*e+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*i+r[12])*a,this.y=(r[1]*e+r[5]*n+r[9]*i+r[13])*a,this.z=(r[2]*e+r[6]*n+r[10]*i+r[14])*a,this}applyQuaternion(t){const e=this.x,n=this.y,i=this.z,r=t.x,a=t.y,o=t.z,c=t.w,l=2*(a*i-o*n),h=2*(o*e-r*i),u=2*(r*n-a*e);return this.x=e+c*l+a*u-o*h,this.y=n+c*h+o*l-r*u,this.z=i+c*u+r*h-a*l,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,i=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*i,this.y=r[1]*e+r[5]*n+r[9]*i,this.z=r[2]*e+r[6]*n+r[10]*i,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,i=t.y,r=t.z,a=e.x,o=e.y,c=e.z;return this.x=i*c-r*o,this.y=r*a-n*c,this.z=n*o-i*a,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Fo.copy(this).projectOnVector(t),this.sub(Fo)}reflect(t){return this.sub(Fo.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Ue(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,i=this.z-t.z;return e*e+n*n+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const i=Math.sin(e)*t;return this.x=i*Math.sin(n),this.y=Math.cos(e)*t,this.z=i*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),i=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=i,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Fo=new R,Yh=new Kt;class Jn{constructor(t=new R(1/0,1/0,1/0),e=new R(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(Pn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(Pn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=Pn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,Pn):Pn.fromBufferAttribute(r,a),Pn.applyMatrix4(t.matrixWorld),this.expandByPoint(Pn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),ta.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),ta.copy(n.boundingBox)),ta.applyMatrix4(t.matrixWorld),this.union(ta)}const i=t.children;for(let r=0,a=i.length;r<a;r++)this.expandByObject(i[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Pn),Pn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(ar),ea.subVectors(this.max,ar),hs.subVectors(t.a,ar),us.subVectors(t.b,ar),ds.subVectors(t.c,ar),Mi.subVectors(us,hs),Si.subVectors(ds,us),Bi.subVectors(hs,ds);let e=[0,-Mi.z,Mi.y,0,-Si.z,Si.y,0,-Bi.z,Bi.y,Mi.z,0,-Mi.x,Si.z,0,-Si.x,Bi.z,0,-Bi.x,-Mi.y,Mi.x,0,-Si.y,Si.x,0,-Bi.y,Bi.x,0];return!Uo(e,hs,us,ds,ea)||(e=[1,0,0,0,1,0,0,0,1],!Uo(e,hs,us,ds,ea))?!1:(na.crossVectors(Mi,Si),e=[na.x,na.y,na.z],Uo(e,hs,us,ds,ea))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Pn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Pn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(ii[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),ii[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),ii[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),ii[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),ii[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),ii[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),ii[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),ii[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(ii),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const ii=[new R,new R,new R,new R,new R,new R,new R,new R],Pn=new R,ta=new Jn,hs=new R,us=new R,ds=new R,Mi=new R,Si=new R,Bi=new R,ar=new R,ea=new R,na=new R,zi=new R;function Uo(s,t,e,n,i){for(let r=0,a=s.length-3;r<=a;r+=3){zi.fromArray(s,r);const o=i.x*Math.abs(zi.x)+i.y*Math.abs(zi.y)+i.z*Math.abs(zi.z),c=t.dot(zi),l=e.dot(zi),h=n.dot(zi);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>o)return!1}return!0}const Gm=new Jn,or=new R,ko=new R;class Qn{constructor(t=new R,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):Gm.setFromPoints(t).getCenter(n);let i=0;for(let r=0,a=t.length;r<a;r++)i=Math.max(i,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(i),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;or.subVectors(t,this.center);const e=or.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),i=(n-this.radius)*.5;this.center.addScaledVector(or,i/n),this.radius+=i}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(ko.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(or.copy(t.center).add(ko)),this.expandByPoint(or.copy(t.center).sub(ko))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const si=new R,Oo=new R,ia=new R,wi=new R,Bo=new R,sa=new R,zo=new R;class bo{constructor(t=new R,e=new R(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,si)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=si.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(si.copy(this.origin).addScaledVector(this.direction,e),si.distanceToSquared(t))}distanceSqToSegment(t,e,n,i){Oo.copy(t).add(e).multiplyScalar(.5),ia.copy(e).sub(t).normalize(),wi.copy(this.origin).sub(Oo);const r=t.distanceTo(e)*.5,a=-this.direction.dot(ia),o=wi.dot(this.direction),c=-wi.dot(ia),l=wi.lengthSq(),h=Math.abs(1-a*a);let u,d,f,g;if(h>0)if(u=a*c-o,d=a*o-c,g=r*h,u>=0)if(d>=-g)if(d<=g){const b=1/h;u*=b,d*=b,f=u*(u+a*d+2*o)+d*(a*u+d+2*c)+l}else d=r,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*c)+l;else d=-r,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*c)+l;else d<=-g?(u=Math.max(0,-(-a*r+o)),d=u>0?-r:Math.min(Math.max(-r,-c),r),f=-u*u+d*(d+2*c)+l):d<=g?(u=0,d=Math.min(Math.max(-r,-c),r),f=d*(d+2*c)+l):(u=Math.max(0,-(a*r+o)),d=u>0?r:Math.min(Math.max(-r,-c),r),f=-u*u+d*(d+2*c)+l);else d=a>0?-r:r,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,u),i&&i.copy(Oo).addScaledVector(ia,d),f}intersectSphere(t,e){si.subVectors(t.center,this.origin);const n=si.dot(this.direction),i=si.dot(si)-n*n,r=t.radius*t.radius;if(i>r)return null;const a=Math.sqrt(r-i),o=n-a,c=n+a;return c<0?null:o<0?this.at(c,e):this.at(o,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,i,r,a,o,c;const l=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return l>=0?(n=(t.min.x-d.x)*l,i=(t.max.x-d.x)*l):(n=(t.max.x-d.x)*l,i=(t.min.x-d.x)*l),h>=0?(r=(t.min.y-d.y)*h,a=(t.max.y-d.y)*h):(r=(t.max.y-d.y)*h,a=(t.min.y-d.y)*h),n>a||r>i||((r>n||isNaN(n))&&(n=r),(a<i||isNaN(i))&&(i=a),u>=0?(o=(t.min.z-d.z)*u,c=(t.max.z-d.z)*u):(o=(t.max.z-d.z)*u,c=(t.min.z-d.z)*u),n>c||o>i)||((o>n||n!==n)&&(n=o),(c<i||i!==i)&&(i=c),i<0)?null:this.at(n>=0?n:i,e)}intersectsBox(t){return this.intersectBox(t,si)!==null}intersectTriangle(t,e,n,i,r){Bo.subVectors(e,t),sa.subVectors(n,t),zo.crossVectors(Bo,sa);let a=this.direction.dot(zo),o;if(a>0){if(i)return null;o=1}else if(a<0)o=-1,a=-a;else return null;wi.subVectors(this.origin,t);const c=o*this.direction.dot(sa.crossVectors(wi,sa));if(c<0)return null;const l=o*this.direction.dot(Bo.cross(wi));if(l<0||c+l>a)return null;const h=-o*wi.dot(zo);return h<0?null:this.at(h/a,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class _t{constructor(t,e,n,i,r,a,o,c,l,h,u,d,f,g,b,m){_t.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,i,r,a,o,c,l,h,u,d,f,g,b,m)}set(t,e,n,i,r,a,o,c,l,h,u,d,f,g,b,m){const p=this.elements;return p[0]=t,p[4]=e,p[8]=n,p[12]=i,p[1]=r,p[5]=a,p[9]=o,p[13]=c,p[2]=l,p[6]=h,p[10]=u,p[14]=d,p[3]=f,p[7]=g,p[11]=b,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new _t().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,i=1/fs.setFromMatrixColumn(t,0).length(),r=1/fs.setFromMatrixColumn(t,1).length(),a=1/fs.setFromMatrixColumn(t,2).length();return e[0]=n[0]*i,e[1]=n[1]*i,e[2]=n[2]*i,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*a,e[9]=n[9]*a,e[10]=n[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,i=t.y,r=t.z,a=Math.cos(n),o=Math.sin(n),c=Math.cos(i),l=Math.sin(i),h=Math.cos(r),u=Math.sin(r);if(t.order==="XYZ"){const d=a*h,f=a*u,g=o*h,b=o*u;e[0]=c*h,e[4]=-c*u,e[8]=l,e[1]=f+g*l,e[5]=d-b*l,e[9]=-o*c,e[2]=b-d*l,e[6]=g+f*l,e[10]=a*c}else if(t.order==="YXZ"){const d=c*h,f=c*u,g=l*h,b=l*u;e[0]=d+b*o,e[4]=g*o-f,e[8]=a*l,e[1]=a*u,e[5]=a*h,e[9]=-o,e[2]=f*o-g,e[6]=b+d*o,e[10]=a*c}else if(t.order==="ZXY"){const d=c*h,f=c*u,g=l*h,b=l*u;e[0]=d-b*o,e[4]=-a*u,e[8]=g+f*o,e[1]=f+g*o,e[5]=a*h,e[9]=b-d*o,e[2]=-a*l,e[6]=o,e[10]=a*c}else if(t.order==="ZYX"){const d=a*h,f=a*u,g=o*h,b=o*u;e[0]=c*h,e[4]=g*l-f,e[8]=d*l+b,e[1]=c*u,e[5]=b*l+d,e[9]=f*l-g,e[2]=-l,e[6]=o*c,e[10]=a*c}else if(t.order==="YZX"){const d=a*c,f=a*l,g=o*c,b=o*l;e[0]=c*h,e[4]=b-d*u,e[8]=g*u+f,e[1]=u,e[5]=a*h,e[9]=-o*h,e[2]=-l*h,e[6]=f*u+g,e[10]=d-b*u}else if(t.order==="XZY"){const d=a*c,f=a*l,g=o*c,b=o*l;e[0]=c*h,e[4]=-u,e[8]=l*h,e[1]=d*u+b,e[5]=a*h,e[9]=f*u-g,e[2]=g*u-f,e[6]=o*h,e[10]=b*u+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Vm,t,Wm)}lookAt(t,e,n){const i=this.elements;return dn.subVectors(t,e),dn.lengthSq()===0&&(dn.z=1),dn.normalize(),Ai.crossVectors(n,dn),Ai.lengthSq()===0&&(Math.abs(n.z)===1?dn.x+=1e-4:dn.z+=1e-4,dn.normalize(),Ai.crossVectors(n,dn)),Ai.normalize(),ra.crossVectors(dn,Ai),i[0]=Ai.x,i[4]=ra.x,i[8]=dn.x,i[1]=Ai.y,i[5]=ra.y,i[9]=dn.y,i[2]=Ai.z,i[6]=ra.z,i[10]=dn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,r=this.elements,a=n[0],o=n[4],c=n[8],l=n[12],h=n[1],u=n[5],d=n[9],f=n[13],g=n[2],b=n[6],m=n[10],p=n[14],y=n[3],v=n[7],_=n[11],M=n[15],E=i[0],S=i[4],C=i[8],I=i[12],x=i[1],A=i[5],U=i[9],B=i[13],O=i[2],X=i[6],H=i[10],J=i[14],k=i[3],et=i[7],st=i[11],rt=i[15];return r[0]=a*E+o*x+c*O+l*k,r[4]=a*S+o*A+c*X+l*et,r[8]=a*C+o*U+c*H+l*st,r[12]=a*I+o*B+c*J+l*rt,r[1]=h*E+u*x+d*O+f*k,r[5]=h*S+u*A+d*X+f*et,r[9]=h*C+u*U+d*H+f*st,r[13]=h*I+u*B+d*J+f*rt,r[2]=g*E+b*x+m*O+p*k,r[6]=g*S+b*A+m*X+p*et,r[10]=g*C+b*U+m*H+p*st,r[14]=g*I+b*B+m*J+p*rt,r[3]=y*E+v*x+_*O+M*k,r[7]=y*S+v*A+_*X+M*et,r[11]=y*C+v*U+_*H+M*st,r[15]=y*I+v*B+_*J+M*rt,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],i=t[8],r=t[12],a=t[1],o=t[5],c=t[9],l=t[13],h=t[2],u=t[6],d=t[10],f=t[14],g=t[3],b=t[7],m=t[11],p=t[15];return g*(+r*c*u-i*l*u-r*o*d+n*l*d+i*o*f-n*c*f)+b*(+e*c*f-e*l*d+r*a*d-i*a*f+i*l*h-r*c*h)+m*(+e*l*u-e*o*f-r*a*u+n*a*f+r*o*h-n*l*h)+p*(-i*o*h-e*c*u+e*o*d+i*a*u-n*a*d+n*c*h)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const i=this.elements;return t.isVector3?(i[12]=t.x,i[13]=t.y,i[14]=t.z):(i[12]=t,i[13]=e,i[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],a=t[4],o=t[5],c=t[6],l=t[7],h=t[8],u=t[9],d=t[10],f=t[11],g=t[12],b=t[13],m=t[14],p=t[15],y=u*m*l-b*d*l+b*c*f-o*m*f-u*c*p+o*d*p,v=g*d*l-h*m*l-g*c*f+a*m*f+h*c*p-a*d*p,_=h*b*l-g*u*l+g*o*f-a*b*f-h*o*p+a*u*p,M=g*u*c-h*b*c-g*o*d+a*b*d+h*o*m-a*u*m,E=e*y+n*v+i*_+r*M;if(E===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const S=1/E;return t[0]=y*S,t[1]=(b*d*r-u*m*r-b*i*f+n*m*f+u*i*p-n*d*p)*S,t[2]=(o*m*r-b*c*r+b*i*l-n*m*l-o*i*p+n*c*p)*S,t[3]=(u*c*r-o*d*r-u*i*l+n*d*l+o*i*f-n*c*f)*S,t[4]=v*S,t[5]=(h*m*r-g*d*r+g*i*f-e*m*f-h*i*p+e*d*p)*S,t[6]=(g*c*r-a*m*r-g*i*l+e*m*l+a*i*p-e*c*p)*S,t[7]=(a*d*r-h*c*r+h*i*l-e*d*l-a*i*f+e*c*f)*S,t[8]=_*S,t[9]=(g*u*r-h*b*r-g*n*f+e*b*f+h*n*p-e*u*p)*S,t[10]=(a*b*r-g*o*r+g*n*l-e*b*l-a*n*p+e*o*p)*S,t[11]=(h*o*r-a*u*r-h*n*l+e*u*l+a*n*f-e*o*f)*S,t[12]=M*S,t[13]=(h*b*i-g*u*i+g*n*d-e*b*d-h*n*m+e*u*m)*S,t[14]=(g*o*i-a*b*i-g*n*c+e*b*c+a*n*m-e*o*m)*S,t[15]=(a*u*i-h*o*i+h*n*c-e*u*c-a*n*d+e*o*d)*S,this}scale(t){const e=this.elements,n=t.x,i=t.y,r=t.z;return e[0]*=n,e[4]*=i,e[8]*=r,e[1]*=n,e[5]*=i,e[9]*=r,e[2]*=n,e[6]*=i,e[10]*=r,e[3]*=n,e[7]*=i,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],i=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,i))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),i=Math.sin(e),r=1-n,a=t.x,o=t.y,c=t.z,l=r*a,h=r*o;return this.set(l*a+n,l*o-i*c,l*c+i*o,0,l*o+i*c,h*o+n,h*c-i*a,0,l*c-i*o,h*c+i*a,r*c*c+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,i,r,a){return this.set(1,n,r,0,t,1,a,0,e,i,1,0,0,0,0,1),this}compose(t,e,n){const i=this.elements,r=e._x,a=e._y,o=e._z,c=e._w,l=r+r,h=a+a,u=o+o,d=r*l,f=r*h,g=r*u,b=a*h,m=a*u,p=o*u,y=c*l,v=c*h,_=c*u,M=n.x,E=n.y,S=n.z;return i[0]=(1-(b+p))*M,i[1]=(f+_)*M,i[2]=(g-v)*M,i[3]=0,i[4]=(f-_)*E,i[5]=(1-(d+p))*E,i[6]=(m+y)*E,i[7]=0,i[8]=(g+v)*S,i[9]=(m-y)*S,i[10]=(1-(d+b))*S,i[11]=0,i[12]=t.x,i[13]=t.y,i[14]=t.z,i[15]=1,this}decompose(t,e,n){const i=this.elements;let r=fs.set(i[0],i[1],i[2]).length();const a=fs.set(i[4],i[5],i[6]).length(),o=fs.set(i[8],i[9],i[10]).length();this.determinant()<0&&(r=-r),t.x=i[12],t.y=i[13],t.z=i[14],Ln.copy(this);const l=1/r,h=1/a,u=1/o;return Ln.elements[0]*=l,Ln.elements[1]*=l,Ln.elements[2]*=l,Ln.elements[4]*=h,Ln.elements[5]*=h,Ln.elements[6]*=h,Ln.elements[8]*=u,Ln.elements[9]*=u,Ln.elements[10]*=u,e.setFromRotationMatrix(Ln),n.x=r,n.y=a,n.z=o,this}makePerspective(t,e,n,i,r,a,o=mi){const c=this.elements,l=2*r/(e-t),h=2*r/(n-i),u=(e+t)/(e-t),d=(n+i)/(n-i);let f,g;if(o===mi)f=-(a+r)/(a-r),g=-2*a*r/(a-r);else if(o===so)f=-a/(a-r),g=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=l,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=h,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=f,c[14]=g,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,i,r,a,o=mi){const c=this.elements,l=1/(e-t),h=1/(n-i),u=1/(a-r),d=(e+t)*l,f=(n+i)*h;let g,b;if(o===mi)g=(a+r)*u,b=-2*u;else if(o===so)g=r*u,b=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-d,c[1]=0,c[5]=2*h,c[9]=0,c[13]=-f,c[2]=0,c[6]=0,c[10]=b,c[14]=-g,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<16;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const fs=new R,Ln=new _t,Vm=new R(0,0,0),Wm=new R(1,1,1),Ai=new R,ra=new R,dn=new R,Kh=new _t,$h=new Kt;class We{constructor(t=0,e=0,n=0,i=We.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=i}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,i=this._order){return this._x=t,this._y=e,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const i=t.elements,r=i[0],a=i[4],o=i[8],c=i[1],l=i[5],h=i[9],u=i[2],d=i[6],f=i[10];switch(e){case"XYZ":this._y=Math.asin(Ue(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(d,l),this._z=0);break;case"YXZ":this._x=Math.asin(-Ue(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(Ue(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-a,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-Ue(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-a,l));break;case"YZX":this._z=Math.asin(Ue(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-Ue(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,l),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Kh.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Kh,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return $h.setFromEuler(this),this.setFromQuaternion($h,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}We.DEFAULT_ORDER="XYZ";class bf{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let qm=0;const Jh=new R,ps=new Kt,ri=new _t,aa=new R,cr=new R,Xm=new R,jm=new Kt,Qh=new R(1,0,0),Zh=new R(0,1,0),tu=new R(0,0,1),eu={type:"added"},Ym={type:"removed"},ms={type:"childadded",child:null},Ho={type:"childremoved",child:null};class ge extends Qs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:qm++}),this.uuid=Tn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=ge.DEFAULT_UP.clone();const t=new R,e=new We,n=new Kt,i=new R(1,1,1);function r(){n.setFromEuler(e,!1)}function a(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new _t},normalMatrix:{value:new zt}}),this.matrix=new _t,this.matrixWorld=new _t,this.matrixAutoUpdate=ge.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=ge.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new bf,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return ps.setFromAxisAngle(t,e),this.quaternion.multiply(ps),this}rotateOnWorldAxis(t,e){return ps.setFromAxisAngle(t,e),this.quaternion.premultiply(ps),this}rotateX(t){return this.rotateOnAxis(Qh,t)}rotateY(t){return this.rotateOnAxis(Zh,t)}rotateZ(t){return this.rotateOnAxis(tu,t)}translateOnAxis(t,e){return Jh.copy(t).applyQuaternion(this.quaternion),this.position.add(Jh.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Qh,t)}translateY(t){return this.translateOnAxis(Zh,t)}translateZ(t){return this.translateOnAxis(tu,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(ri.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?aa.copy(t):aa.set(t,e,n);const i=this.parent;this.updateWorldMatrix(!0,!1),cr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ri.lookAt(cr,aa,this.up):ri.lookAt(aa,cr,this.up),this.quaternion.setFromRotationMatrix(ri),i&&(ri.extractRotation(i.matrixWorld),ps.setFromRotationMatrix(ri),this.quaternion.premultiply(ps.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(eu),ms.child=t,this.dispatchEvent(ms),ms.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Ym),Ho.child=t,this.dispatchEvent(Ho),Ho.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),ri.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),ri.multiply(t.parent.matrixWorld)),t.applyMatrix4(ri),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(eu),ms.child=t,this.dispatchEvent(ms),ms.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,i=this.children.length;n<i;n++){const a=this.children[n].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const i=this.children;for(let r=0,a=i.length;r<a;r++)i[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(cr,t,Xm),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(cr,jm,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const i=this.children;for(let r=0,a=i.length;r<a;r++)i[r].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.visibility=this._visibility,i.active=this._active,i.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.geometryCount=this._geometryCount,i.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(i.boundingSphere={center:i.boundingSphere.center.toArray(),radius:i.boundingSphere.radius}),this.boundingBox!==null&&(i.boundingBox={min:i.boundingBox.min.toArray(),max:i.boundingBox.max.toArray()}));function r(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(t.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const c=o.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){const u=c[l];r(t.shapes,u)}else r(t.shapes,c)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let c=0,l=this.material.length;c<l;c++)o.push(r(t.materials,this.material[c]));i.material=o}else i.material=r(t.materials,this.material);if(this.children.length>0){i.children=[];for(let o=0;o<this.children.length;o++)i.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){i.animations=[];for(let o=0;o<this.animations.length;o++){const c=this.animations[o];i.animations.push(r(t.animations,c))}}if(e){const o=a(t.geometries),c=a(t.materials),l=a(t.textures),h=a(t.images),u=a(t.shapes),d=a(t.skeletons),f=a(t.animations),g=a(t.nodes);o.length>0&&(n.geometries=o),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),f.length>0&&(n.animations=f),g.length>0&&(n.nodes=g)}return n.object=i,n;function a(o){const c=[];for(const l in o){const h=o[l];delete h.metadata,c.push(h)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const i=t.children[n];this.add(i.clone())}return this}}ge.DEFAULT_UP=new R(0,1,0);ge.DEFAULT_MATRIX_AUTO_UPDATE=!0;ge.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const In=new R,ai=new R,Go=new R,oi=new R,gs=new R,bs=new R,nu=new R,Vo=new R,Wo=new R,qo=new R,Xo=new ne,jo=new ne,Yo=new ne;class gn{constructor(t=new R,e=new R,n=new R){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,i){i.subVectors(n,e),In.subVectors(t,e),i.cross(In);const r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(t,e,n,i,r){In.subVectors(i,e),ai.subVectors(n,e),Go.subVectors(t,e);const a=In.dot(In),o=In.dot(ai),c=In.dot(Go),l=ai.dot(ai),h=ai.dot(Go),u=a*l-o*o;if(u===0)return r.set(0,0,0),null;const d=1/u,f=(l*c-o*h)*d,g=(a*h-o*c)*d;return r.set(1-f-g,g,f)}static containsPoint(t,e,n,i){return this.getBarycoord(t,e,n,i,oi)===null?!1:oi.x>=0&&oi.y>=0&&oi.x+oi.y<=1}static getInterpolation(t,e,n,i,r,a,o,c){return this.getBarycoord(t,e,n,i,oi)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,oi.x),c.addScaledVector(a,oi.y),c.addScaledVector(o,oi.z),c)}static getInterpolatedAttribute(t,e,n,i,r,a){return Xo.setScalar(0),jo.setScalar(0),Yo.setScalar(0),Xo.fromBufferAttribute(t,e),jo.fromBufferAttribute(t,n),Yo.fromBufferAttribute(t,i),a.setScalar(0),a.addScaledVector(Xo,r.x),a.addScaledVector(jo,r.y),a.addScaledVector(Yo,r.z),a}static isFrontFacing(t,e,n,i){return In.subVectors(n,e),ai.subVectors(t,e),In.cross(ai).dot(i)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,i){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[i]),this}setFromAttributeAndIndices(t,e,n,i){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,i),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return In.subVectors(this.c,this.b),ai.subVectors(this.a,this.b),In.cross(ai).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return gn.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return gn.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,i,r){return gn.getInterpolation(t,this.a,this.b,this.c,e,n,i,r)}containsPoint(t){return gn.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return gn.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,i=this.b,r=this.c;let a,o;gs.subVectors(i,n),bs.subVectors(r,n),Vo.subVectors(t,n);const c=gs.dot(Vo),l=bs.dot(Vo);if(c<=0&&l<=0)return e.copy(n);Wo.subVectors(t,i);const h=gs.dot(Wo),u=bs.dot(Wo);if(h>=0&&u<=h)return e.copy(i);const d=c*u-h*l;if(d<=0&&c>=0&&h<=0)return a=c/(c-h),e.copy(n).addScaledVector(gs,a);qo.subVectors(t,r);const f=gs.dot(qo),g=bs.dot(qo);if(g>=0&&f<=g)return e.copy(r);const b=f*l-c*g;if(b<=0&&l>=0&&g<=0)return o=l/(l-g),e.copy(n).addScaledVector(bs,o);const m=h*g-f*u;if(m<=0&&u-h>=0&&f-g>=0)return nu.subVectors(r,i),o=(u-h)/(u-h+(f-g)),e.copy(i).addScaledVector(nu,o);const p=1/(m+b+d);return a=b*p,o=d*p,e.copy(n).addScaledVector(gs,a).addScaledVector(bs,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const vf={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ei={h:0,s:0,l:0},oa={h:0,s:0,l:0};function Ko(s,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?s+(t-s)*6*e:e<1/2?t:e<2/3?s+(t-s)*6*(2/3-e):s}class Et{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const i=t;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Fe){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Zt.toWorkingColorSpace(this,e),this}setRGB(t,e,n,i=Zt.workingColorSpace){return this.r=t,this.g=e,this.b=n,Zt.toWorkingColorSpace(this,i),this}setHSL(t,e,n,i=Zt.workingColorSpace){if(t=$l(t,1),e=Ue(e,0,1),n=Ue(n,0,1),e===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+e):n+e-n*e,a=2*n-r;this.r=Ko(a,r,t+1/3),this.g=Ko(a,r,t),this.b=Ko(a,r,t-1/3)}return Zt.toWorkingColorSpace(this,i),this}setStyle(t,e=Fe){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const a=i[1],o=i[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=i[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Fe){const n=vf[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Os(t.r),this.g=Os(t.g),this.b=Os(t.b),this}copyLinearToSRGB(t){return this.r=Do(t.r),this.g=Do(t.g),this.b=Do(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Fe){return Zt.fromWorkingColorSpace(Ve.copy(this),t),Math.round(Ue(Ve.r*255,0,255))*65536+Math.round(Ue(Ve.g*255,0,255))*256+Math.round(Ue(Ve.b*255,0,255))}getHexString(t=Fe){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Zt.workingColorSpace){Zt.fromWorkingColorSpace(Ve.copy(this),e);const n=Ve.r,i=Ve.g,r=Ve.b,a=Math.max(n,i,r),o=Math.min(n,i,r);let c,l;const h=(o+a)/2;if(o===a)c=0,l=0;else{const u=a-o;switch(l=h<=.5?u/(a+o):u/(2-a-o),a){case n:c=(i-r)/u+(i<r?6:0);break;case i:c=(r-n)/u+2;break;case r:c=(n-i)/u+4;break}c/=6}return t.h=c,t.s=l,t.l=h,t}getRGB(t,e=Zt.workingColorSpace){return Zt.fromWorkingColorSpace(Ve.copy(this),e),t.r=Ve.r,t.g=Ve.g,t.b=Ve.b,t}getStyle(t=Fe){Zt.fromWorkingColorSpace(Ve.copy(this),t);const e=Ve.r,n=Ve.g,i=Ve.b;return t!==Fe?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(t,e,n){return this.getHSL(Ei),this.setHSL(Ei.h+t,Ei.s+e,Ei.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Ei),t.getHSL(oa);const n=Lr(Ei.h,oa.h,e),i=Lr(Ei.s,oa.s,e),r=Lr(Ei.l,oa.l,e);return this.setHSL(n,i,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,i=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*i,this.g=r[1]*e+r[4]*n+r[7]*i,this.b=r[2]*e+r[5]*n+r[8]*i,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Ve=new Et;Et.NAMES=vf;let Km=0;class Un extends Qs{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Km++}),this.uuid=Tn(),this.name="",this.type="Material",this.blending=Fs,this.side=xi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=zc,this.blendDst=Hc,this.blendEquation=$i,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Et(0,0,0),this.blendAlpha=0,this.depthFunc=Hs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Gh,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=cs,this.stencilZFail=cs,this.stencilZPass=cs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const i=this[e];if(i===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Fs&&(n.blending=this.blending),this.side!==xi&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==zc&&(n.blendSrc=this.blendSrc),this.blendDst!==Hc&&(n.blendDst=this.blendDst),this.blendEquation!==$i&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Hs&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Gh&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==cs&&(n.stencilFail=this.stencilFail),this.stencilZFail!==cs&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==cs&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(r){const a=[];for(const o in r){const c=r[o];delete c.metadata,a.push(c)}return a}if(e){const r=i(t.textures),a=i(t.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const i=e.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class Qe extends Un{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Et(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new We,this.combine=Zd,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const Ce=new R,ca=new it;class Te{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=wl,this.updateRanges=[],this.gpuType=Nn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[t+i]=e.array[n+i];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)ca.fromBufferAttribute(this,e),ca.applyMatrix3(t),this.setXY(e,ca.x,ca.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Ce.fromBufferAttribute(this,e),Ce.applyMatrix3(t),this.setXYZ(e,Ce.x,Ce.y,Ce.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Ce.fromBufferAttribute(this,e),Ce.applyMatrix4(t),this.setXYZ(e,Ce.x,Ce.y,Ce.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Ce.fromBufferAttribute(this,e),Ce.applyNormalMatrix(t),this.setXYZ(e,Ce.x,Ce.y,Ce.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Ce.fromBufferAttribute(this,e),Ce.transformDirection(t),this.setXYZ(e,Ce.x,Ce.y,Ce.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=Dn(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=oe(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Dn(e,this.array)),e}setX(t,e){return this.normalized&&(e=oe(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Dn(e,this.array)),e}setY(t,e){return this.normalized&&(e=oe(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Dn(e,this.array)),e}setZ(t,e){return this.normalized&&(e=oe(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Dn(e,this.array)),e}setW(t,e){return this.normalized&&(e=oe(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=oe(e,this.array),n=oe(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,i){return t*=this.itemSize,this.normalized&&(e=oe(e,this.array),n=oe(n,this.array),i=oe(i,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this}setXYZW(t,e,n,i,r){return t*=this.itemSize,this.normalized&&(e=oe(e,this.array),n=oe(n,this.array),i=oe(i,this.array),r=oe(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==wl&&(t.usage=this.usage),t}}class xf extends Te{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class _f extends Te{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class te extends Te{constructor(t,e,n){super(new Float32Array(t),e,n)}}let $m=0;const _n=new _t,$o=new ge,vs=new R,fn=new Jn,lr=new Jn,Ne=new R;class _e extends Qs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:$m++}),this.uuid=Tn(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(pf(t)?_f:xf)(t,1):this.index=t,this}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new zt().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(t),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return _n.makeRotationFromQuaternion(t),this.applyMatrix4(_n),this}rotateX(t){return _n.makeRotationX(t),this.applyMatrix4(_n),this}rotateY(t){return _n.makeRotationY(t),this.applyMatrix4(_n),this}rotateZ(t){return _n.makeRotationZ(t),this.applyMatrix4(_n),this}translate(t,e,n){return _n.makeTranslation(t,e,n),this.applyMatrix4(_n),this}scale(t,e,n){return _n.makeScale(t,e,n),this.applyMatrix4(_n),this}lookAt(t){return $o.lookAt(t),$o.updateMatrix(),this.applyMatrix4($o.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(vs).negate(),this.translate(vs.x,vs.y,vs.z),this}setFromPoints(t){const e=[];for(let n=0,i=t.length;n<i;n++){const r=t[n];e.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new te(e,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Jn);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new R(-1/0,-1/0,-1/0),new R(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,i=e.length;n<i;n++){const r=e[n];fn.setFromBufferAttribute(r),this.morphTargetsRelative?(Ne.addVectors(this.boundingBox.min,fn.min),this.boundingBox.expandByPoint(Ne),Ne.addVectors(this.boundingBox.max,fn.max),this.boundingBox.expandByPoint(Ne)):(this.boundingBox.expandByPoint(fn.min),this.boundingBox.expandByPoint(fn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Qn);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new R,1/0);return}if(t){const n=this.boundingSphere.center;if(fn.setFromBufferAttribute(t),e)for(let r=0,a=e.length;r<a;r++){const o=e[r];lr.setFromBufferAttribute(o),this.morphTargetsRelative?(Ne.addVectors(fn.min,lr.min),fn.expandByPoint(Ne),Ne.addVectors(fn.max,lr.max),fn.expandByPoint(Ne)):(fn.expandByPoint(lr.min),fn.expandByPoint(lr.max))}fn.getCenter(n);let i=0;for(let r=0,a=t.count;r<a;r++)Ne.fromBufferAttribute(t,r),i=Math.max(i,n.distanceToSquared(Ne));if(e)for(let r=0,a=e.length;r<a;r++){const o=e[r],c=this.morphTargetsRelative;for(let l=0,h=o.count;l<h;l++)Ne.fromBufferAttribute(o,l),c&&(vs.fromBufferAttribute(t,l),Ne.add(vs)),i=Math.max(i,n.distanceToSquared(Ne))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,i=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Te(new Float32Array(4*n.count),4));const a=this.getAttribute("tangent"),o=[],c=[];for(let C=0;C<n.count;C++)o[C]=new R,c[C]=new R;const l=new R,h=new R,u=new R,d=new it,f=new it,g=new it,b=new R,m=new R;function p(C,I,x){l.fromBufferAttribute(n,C),h.fromBufferAttribute(n,I),u.fromBufferAttribute(n,x),d.fromBufferAttribute(r,C),f.fromBufferAttribute(r,I),g.fromBufferAttribute(r,x),h.sub(l),u.sub(l),f.sub(d),g.sub(d);const A=1/(f.x*g.y-g.x*f.y);isFinite(A)&&(b.copy(h).multiplyScalar(g.y).addScaledVector(u,-f.y).multiplyScalar(A),m.copy(u).multiplyScalar(f.x).addScaledVector(h,-g.x).multiplyScalar(A),o[C].add(b),o[I].add(b),o[x].add(b),c[C].add(m),c[I].add(m),c[x].add(m))}let y=this.groups;y.length===0&&(y=[{start:0,count:t.count}]);for(let C=0,I=y.length;C<I;++C){const x=y[C],A=x.start,U=x.count;for(let B=A,O=A+U;B<O;B+=3)p(t.getX(B+0),t.getX(B+1),t.getX(B+2))}const v=new R,_=new R,M=new R,E=new R;function S(C){M.fromBufferAttribute(i,C),E.copy(M);const I=o[C];v.copy(I),v.sub(M.multiplyScalar(M.dot(I))).normalize(),_.crossVectors(E,I);const A=_.dot(c[C])<0?-1:1;a.setXYZW(C,v.x,v.y,v.z,A)}for(let C=0,I=y.length;C<I;++C){const x=y[C],A=x.start,U=x.count;for(let B=A,O=A+U;B<O;B+=3)S(t.getX(B+0)),S(t.getX(B+1)),S(t.getX(B+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Te(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let d=0,f=n.count;d<f;d++)n.setXYZ(d,0,0,0);const i=new R,r=new R,a=new R,o=new R,c=new R,l=new R,h=new R,u=new R;if(t)for(let d=0,f=t.count;d<f;d+=3){const g=t.getX(d+0),b=t.getX(d+1),m=t.getX(d+2);i.fromBufferAttribute(e,g),r.fromBufferAttribute(e,b),a.fromBufferAttribute(e,m),h.subVectors(a,r),u.subVectors(i,r),h.cross(u),o.fromBufferAttribute(n,g),c.fromBufferAttribute(n,b),l.fromBufferAttribute(n,m),o.add(h),c.add(h),l.add(h),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(b,c.x,c.y,c.z),n.setXYZ(m,l.x,l.y,l.z)}else for(let d=0,f=e.count;d<f;d+=3)i.fromBufferAttribute(e,d+0),r.fromBufferAttribute(e,d+1),a.fromBufferAttribute(e,d+2),h.subVectors(a,r),u.subVectors(i,r),h.cross(u),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Ne.fromBufferAttribute(t,e),Ne.normalize(),t.setXYZ(e,Ne.x,Ne.y,Ne.z)}toNonIndexed(){function t(o,c){const l=o.array,h=o.itemSize,u=o.normalized,d=new l.constructor(c.length*h);let f=0,g=0;for(let b=0,m=c.length;b<m;b++){o.isInterleavedBufferAttribute?f=c[b]*o.data.stride+o.offset:f=c[b]*h;for(let p=0;p<h;p++)d[g++]=l[f++]}return new Te(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new _e,n=this.index.array,i=this.attributes;for(const o in i){const c=i[o],l=t(c,n);e.setAttribute(o,l)}const r=this.morphAttributes;for(const o in r){const c=[],l=r[o];for(let h=0,u=l.length;h<u;h++){const d=l[h],f=t(d,n);c.push(f)}e.morphAttributes[o]=c}e.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,c=a.length;o<c;o++){const l=a[o];e.addGroup(l.start,l.count,l.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(t[l]=c[l]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const c in n){const l=n[c];t.data.attributes[c]=l.toJSON(t.data)}const i={};let r=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],h=[];for(let u=0,d=l.length;u<d;u++){const f=l[u];h.push(f.toJSON(t.data))}h.length>0&&(i[c]=h,r=!0)}r&&(t.data.morphAttributes=i,t.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(t.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone(e));const i=t.attributes;for(const l in i){const h=i[l];this.setAttribute(l,h.clone(e))}const r=t.morphAttributes;for(const l in r){const h=[],u=r[l];for(let d=0,f=u.length;d<f;d++)h.push(u[d].clone(e));this.morphAttributes[l]=h}this.morphTargetsRelative=t.morphTargetsRelative;const a=t.groups;for(let l=0,h=a.length;l<h;l++){const u=a[l];this.addGroup(u.start,u.count,u.materialIndex)}const o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());const c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const iu=new _t,Hi=new bo,la=new Qn,su=new R,ha=new R,ua=new R,da=new R,Jo=new R,fa=new R,ru=new R,pa=new R;class Qt extends ge{constructor(t=new _e,e=new Qe){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){const o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(t,e){const n=this.geometry,i=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;e.fromBufferAttribute(i,t);const o=this.morphTargetInfluences;if(r&&o){fa.set(0,0,0);for(let c=0,l=r.length;c<l;c++){const h=o[c],u=r[c];h!==0&&(Jo.fromBufferAttribute(u,t),a?fa.addScaledVector(Jo,h):fa.addScaledVector(Jo.sub(e),h))}e.add(fa)}return e}raycast(t,e){const n=this.geometry,i=this.material,r=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),la.copy(n.boundingSphere),la.applyMatrix4(r),Hi.copy(t.ray).recast(t.near),!(la.containsPoint(Hi.origin)===!1&&(Hi.intersectSphere(la,su)===null||Hi.origin.distanceToSquared(su)>(t.far-t.near)**2))&&(iu.copy(r).invert(),Hi.copy(t.ray).applyMatrix4(iu),!(n.boundingBox!==null&&Hi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Hi)))}_computeIntersections(t,e,n){let i;const r=this.geometry,a=this.material,o=r.index,c=r.attributes.position,l=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,d=r.groups,f=r.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,b=d.length;g<b;g++){const m=d[g],p=a[m.materialIndex],y=Math.max(m.start,f.start),v=Math.min(o.count,Math.min(m.start+m.count,f.start+f.count));for(let _=y,M=v;_<M;_+=3){const E=o.getX(_),S=o.getX(_+1),C=o.getX(_+2);i=ma(this,p,t,n,l,h,u,E,S,C),i&&(i.faceIndex=Math.floor(_/3),i.face.materialIndex=m.materialIndex,e.push(i))}}else{const g=Math.max(0,f.start),b=Math.min(o.count,f.start+f.count);for(let m=g,p=b;m<p;m+=3){const y=o.getX(m),v=o.getX(m+1),_=o.getX(m+2);i=ma(this,a,t,n,l,h,u,y,v,_),i&&(i.faceIndex=Math.floor(m/3),e.push(i))}}else if(c!==void 0)if(Array.isArray(a))for(let g=0,b=d.length;g<b;g++){const m=d[g],p=a[m.materialIndex],y=Math.max(m.start,f.start),v=Math.min(c.count,Math.min(m.start+m.count,f.start+f.count));for(let _=y,M=v;_<M;_+=3){const E=_,S=_+1,C=_+2;i=ma(this,p,t,n,l,h,u,E,S,C),i&&(i.faceIndex=Math.floor(_/3),i.face.materialIndex=m.materialIndex,e.push(i))}}else{const g=Math.max(0,f.start),b=Math.min(c.count,f.start+f.count);for(let m=g,p=b;m<p;m+=3){const y=m,v=m+1,_=m+2;i=ma(this,a,t,n,l,h,u,y,v,_),i&&(i.faceIndex=Math.floor(m/3),e.push(i))}}}}function Jm(s,t,e,n,i,r,a,o){let c;if(t.side===tn?c=n.intersectTriangle(a,r,i,!0,o):c=n.intersectTriangle(i,r,a,t.side===xi,o),c===null)return null;pa.copy(o),pa.applyMatrix4(s.matrixWorld);const l=e.ray.origin.distanceTo(pa);return l<e.near||l>e.far?null:{distance:l,point:pa.clone(),object:s}}function ma(s,t,e,n,i,r,a,o,c,l){s.getVertexPosition(o,ha),s.getVertexPosition(c,ua),s.getVertexPosition(l,da);const h=Jm(s,t,e,n,ha,ua,da,ru);if(h){const u=new R;gn.getBarycoord(ru,ha,ua,da,u),i&&(h.uv=gn.getInterpolatedAttribute(i,o,c,l,u,new it)),r&&(h.uv1=gn.getInterpolatedAttribute(r,o,c,l,u,new it)),a&&(h.normal=gn.getInterpolatedAttribute(a,o,c,l,u,new R),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const d={a:o,b:c,c:l,normal:new R,materialIndex:0};gn.getNormal(ha,ua,da,d.normal),h.face=d,h.barycoord=u}return h}class as extends _e{constructor(t=1,e=1,n=1,i=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:i,heightSegments:r,depthSegments:a};const o=this;i=Math.floor(i),r=Math.floor(r),a=Math.floor(a);const c=[],l=[],h=[],u=[];let d=0,f=0;g("z","y","x",-1,-1,n,e,t,a,r,0),g("z","y","x",1,-1,n,e,-t,a,r,1),g("x","z","y",1,1,t,n,e,i,a,2),g("x","z","y",1,-1,t,n,-e,i,a,3),g("x","y","z",1,-1,t,e,n,i,r,4),g("x","y","z",-1,-1,t,e,-n,i,r,5),this.setIndex(c),this.setAttribute("position",new te(l,3)),this.setAttribute("normal",new te(h,3)),this.setAttribute("uv",new te(u,2));function g(b,m,p,y,v,_,M,E,S,C,I){const x=_/S,A=M/C,U=_/2,B=M/2,O=E/2,X=S+1,H=C+1;let J=0,k=0;const et=new R;for(let st=0;st<H;st++){const rt=st*A-B;for(let At=0;At<X;At++){const wt=At*x-U;et[b]=wt*y,et[m]=rt*v,et[p]=O,l.push(et.x,et.y,et.z),et[b]=0,et[m]=0,et[p]=E>0?1:-1,h.push(et.x,et.y,et.z),u.push(At/S),u.push(1-st/C),J+=1}}for(let st=0;st<C;st++)for(let rt=0;rt<S;rt++){const At=d+rt+X*st,wt=d+rt+X*(st+1),j=d+(rt+1)+X*(st+1),Q=d+(rt+1)+X*st;c.push(At,wt,Q),c.push(wt,j,Q),k+=6}o.addGroup(f,k,I),f+=k,d+=J}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new as(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function js(s){const t={};for(const e in s){t[e]={};for(const n in s[e]){const i=s[e][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=i.clone():Array.isArray(i)?t[e][n]=i.slice():t[e][n]=i}}return t}function Ye(s){const t={};for(let e=0;e<s.length;e++){const n=js(s[e]);for(const i in n)t[i]=n[i]}return t}function Qm(s){const t=[];for(let e=0;e<s.length;e++)t.push(s[e].clone());return t}function yf(s){const t=s.getRenderTarget();return t===null?s.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Zt.workingColorSpace}const Zm={clone:js,merge:Ye};var tg=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,eg=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Rn extends Un{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=tg,this.fragmentShader=eg,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=js(t.uniforms),this.uniformsGroups=Qm(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const i in this.uniforms){const a=this.uniforms[i].value;a&&a.isTexture?e.uniforms[i]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[i]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[i]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[i]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[i]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[i]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[i]={type:"m4",value:a.toArray()}:e.uniforms[i]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class Mf extends ge{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new _t,this.projectionMatrix=new _t,this.projectionMatrixInverse=new _t,this.coordinateSystem=mi}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Ti=new R,au=new it,ou=new it;class Ke extends Mf{constructor(t=50,e=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=Xs*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(ks*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Xs*2*Math.atan(Math.tan(ks*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){Ti.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Ti.x,Ti.y).multiplyScalar(-t/Ti.z),Ti.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Ti.x,Ti.y).multiplyScalar(-t/Ti.z)}getViewSize(t,e){return this.getViewBounds(t,au,ou),e.subVectors(ou,au)}setViewOffset(t,e,n,i,r,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(ks*.5*this.fov)/this.zoom,n=2*e,i=this.aspect*n,r=-.5*i;const a=this.view;if(this.view!==null&&this.view.enabled){const c=a.fullWidth,l=a.fullHeight;r+=a.offsetX*i/c,e-=a.offsetY*n/l,i*=a.width/c,n*=a.height/l}const o=this.filmOffset;o!==0&&(r+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const xs=-90,_s=1;class ng extends ge{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new Ke(xs,_s,t,e);i.layers=this.layers,this.add(i);const r=new Ke(xs,_s,t,e);r.layers=this.layers,this.add(r);const a=new Ke(xs,_s,t,e);a.layers=this.layers,this.add(a);const o=new Ke(xs,_s,t,e);o.layers=this.layers,this.add(o);const c=new Ke(xs,_s,t,e);c.layers=this.layers,this.add(c);const l=new Ke(xs,_s,t,e);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,i,r,a,o,c]=e;for(const l of e)this.remove(l);if(t===mi)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(t===so)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const l of e)this.add(l),l.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,a,o,c,l,h]=this.children,u=t.getRenderTarget(),d=t.getActiveCubeFace(),f=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;const b=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,i),t.render(e,r),t.setRenderTarget(n,1,i),t.render(e,a),t.setRenderTarget(n,2,i),t.render(e,o),t.setRenderTarget(n,3,i),t.render(e,c),t.setRenderTarget(n,4,i),t.render(e,l),n.texture.generateMipmaps=b,t.setRenderTarget(n,5,i),t.render(e,h),t.setRenderTarget(u,d,f),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class Sf extends Le{constructor(t,e,n,i,r,a,o,c,l,h){t=t!==void 0?t:[],e=e!==void 0?e:Gs,super(t,e,n,i,r,a,o,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class ig extends ns{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},i=[n,n,n,n,n,n];this.texture=new Sf(i,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:on}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},i=new as(5,5,5),r=new Rn({name:"CubemapFromEquirect",uniforms:js(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:tn,blending:Di});r.uniforms.tEquirect.value=e;const a=new Qt(i,r),o=e.minFilter;return e.minFilter===Xn&&(e.minFilter=on),new ng(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e,n,i){const r=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,n,i);t.setRenderTarget(r)}}const Qo=new R,sg=new R,rg=new zt;class Yi{constructor(t=new R(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,i){return this.normal.set(t,e,n),this.constant=i,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const i=Qo.subVectors(n,e).cross(sg.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(i,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(Qo),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const r=-(t.start.dot(this.normal)+this.constant)/i;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||rg.getNormalMatrix(t),i=this.coplanarPoint(Qo).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Gi=new Qn,ga=new R;class Jl{constructor(t=new Yi,e=new Yi,n=new Yi,i=new Yi,r=new Yi,a=new Yi){this.planes=[t,e,n,i,r,a]}set(t,e,n,i,r,a){const o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(n),o[3].copy(i),o[4].copy(r),o[5].copy(a),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=mi){const n=this.planes,i=t.elements,r=i[0],a=i[1],o=i[2],c=i[3],l=i[4],h=i[5],u=i[6],d=i[7],f=i[8],g=i[9],b=i[10],m=i[11],p=i[12],y=i[13],v=i[14],_=i[15];if(n[0].setComponents(c-r,d-l,m-f,_-p).normalize(),n[1].setComponents(c+r,d+l,m+f,_+p).normalize(),n[2].setComponents(c+a,d+h,m+g,_+y).normalize(),n[3].setComponents(c-a,d-h,m-g,_-y).normalize(),n[4].setComponents(c-o,d-u,m-b,_-v).normalize(),e===mi)n[5].setComponents(c+o,d+u,m+b,_+v).normalize();else if(e===so)n[5].setComponents(o,u,b,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Gi.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Gi.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Gi)}intersectsSprite(t){return Gi.center.set(0,0,0),Gi.radius=.7071067811865476,Gi.applyMatrix4(t.matrixWorld),this.intersectsSphere(Gi)}intersectsSphere(t){const e=this.planes,n=t.center,i=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const i=e[n];if(ga.x=i.normal.x>0?t.max.x:t.min.x,ga.y=i.normal.y>0?t.max.y:t.min.y,ga.z=i.normal.z>0?t.max.z:t.min.z,i.distanceToPoint(ga)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function wf(){let s=null,t=!1,e=null,n=null;function i(r,a){e(r,a),n=s.requestAnimationFrame(i)}return{start:function(){t!==!0&&e!==null&&(n=s.requestAnimationFrame(i),t=!0)},stop:function(){s.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){s=r}}}function ag(s){const t=new WeakMap;function e(o,c){const l=o.array,h=o.usage,u=l.byteLength,d=s.createBuffer();s.bindBuffer(c,d),s.bufferData(c,l,h),o.onUploadCallback();let f;if(l instanceof Float32Array)f=s.FLOAT;else if(l instanceof Uint16Array)o.isFloat16BufferAttribute?f=s.HALF_FLOAT:f=s.UNSIGNED_SHORT;else if(l instanceof Int16Array)f=s.SHORT;else if(l instanceof Uint32Array)f=s.UNSIGNED_INT;else if(l instanceof Int32Array)f=s.INT;else if(l instanceof Int8Array)f=s.BYTE;else if(l instanceof Uint8Array)f=s.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)f=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:d,type:f,bytesPerElement:l.BYTES_PER_ELEMENT,version:o.version,size:u}}function n(o,c,l){const h=c.array,u=c.updateRanges;if(s.bindBuffer(l,o),u.length===0)s.bufferSubData(l,0,h);else{u.sort((f,g)=>f.start-g.start);let d=0;for(let f=1;f<u.length;f++){const g=u[d],b=u[f];b.start<=g.start+g.count+1?g.count=Math.max(g.count,b.start+b.count-g.start):(++d,u[d]=b)}u.length=d+1;for(let f=0,g=u.length;f<g;f++){const b=u[f];s.bufferSubData(l,b.start*h.BYTES_PER_ELEMENT,h,b.start,b.count)}c.clearUpdateRanges()}c.onUploadCallback()}function i(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);const c=t.get(o);c&&(s.deleteBuffer(c.buffer),t.delete(o))}function a(o,c){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const h=t.get(o);(!h||h.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const l=t.get(o);if(l===void 0)t.set(o,e(o,c));else if(l.version<o.version){if(l.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,o,c),l.version=o.version}}return{get:i,remove:r,update:a}}class $n extends _e{constructor(t=1,e=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:i};const r=t/2,a=e/2,o=Math.floor(n),c=Math.floor(i),l=o+1,h=c+1,u=t/o,d=e/c,f=[],g=[],b=[],m=[];for(let p=0;p<h;p++){const y=p*d-a;for(let v=0;v<l;v++){const _=v*u-r;g.push(_,-y,0),b.push(0,0,1),m.push(v/o),m.push(1-p/c)}}for(let p=0;p<c;p++)for(let y=0;y<o;y++){const v=y+l*p,_=y+l*(p+1),M=y+1+l*(p+1),E=y+1+l*p;f.push(v,_,E),f.push(_,M,E)}this.setIndex(f),this.setAttribute("position",new te(g,3)),this.setAttribute("normal",new te(b,3)),this.setAttribute("uv",new te(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new $n(t.width,t.height,t.widthSegments,t.heightSegments)}}var og=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,cg=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,lg=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,hg=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,ug=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,dg=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,fg=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,pg=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,mg=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,gg=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,bg=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,vg=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,xg=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,_g=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,yg=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Mg=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,Sg=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,wg=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Ag=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Eg=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Tg=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Rg=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Cg=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,Pg=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Lg=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Ig=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Dg=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Ng=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Fg=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Ug=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,kg="gl_FragColor = linearToOutputTexel( gl_FragColor );",Og=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Bg=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,zg=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Hg=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Gg=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Vg=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Wg=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,qg=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Xg=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,jg=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Yg=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Kg=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,$g=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Jg=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Qg=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,Zg=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,t0=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,e0=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,n0=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,i0=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,s0=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,r0=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,a0=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,o0=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,c0=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,l0=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,h0=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,u0=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,d0=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,f0=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,p0=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,m0=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,g0=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,b0=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,v0=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,x0=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,_0=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,y0=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,M0=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,S0=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,w0=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,A0=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,E0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,T0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,R0=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,C0=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,P0=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,L0=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,I0=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,D0=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,N0=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,F0=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,U0=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,k0=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,O0=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,B0=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,z0=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,H0=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,G0=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,V0=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,W0=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,q0=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,X0=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,j0=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Y0=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,K0=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,$0=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,J0=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Q0=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Z0=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,tb=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,eb=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,nb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,ib=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,sb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,rb=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const ab=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,ob=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,cb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,lb=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,hb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,ub=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,db=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,fb=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,pb=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,mb=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,gb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,bb=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,vb=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,xb=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,_b=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,yb=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Mb=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Sb=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,wb=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Ab=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Eb=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Tb=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Rb=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Cb=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Pb=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Lb=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Ib=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Db=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Nb=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Fb=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Ub=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,kb=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Ob=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Bb=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Bt={alphahash_fragment:og,alphahash_pars_fragment:cg,alphamap_fragment:lg,alphamap_pars_fragment:hg,alphatest_fragment:ug,alphatest_pars_fragment:dg,aomap_fragment:fg,aomap_pars_fragment:pg,batching_pars_vertex:mg,batching_vertex:gg,begin_vertex:bg,beginnormal_vertex:vg,bsdfs:xg,iridescence_fragment:_g,bumpmap_pars_fragment:yg,clipping_planes_fragment:Mg,clipping_planes_pars_fragment:Sg,clipping_planes_pars_vertex:wg,clipping_planes_vertex:Ag,color_fragment:Eg,color_pars_fragment:Tg,color_pars_vertex:Rg,color_vertex:Cg,common:Pg,cube_uv_reflection_fragment:Lg,defaultnormal_vertex:Ig,displacementmap_pars_vertex:Dg,displacementmap_vertex:Ng,emissivemap_fragment:Fg,emissivemap_pars_fragment:Ug,colorspace_fragment:kg,colorspace_pars_fragment:Og,envmap_fragment:Bg,envmap_common_pars_fragment:zg,envmap_pars_fragment:Hg,envmap_pars_vertex:Gg,envmap_physical_pars_fragment:Zg,envmap_vertex:Vg,fog_vertex:Wg,fog_pars_vertex:qg,fog_fragment:Xg,fog_pars_fragment:jg,gradientmap_pars_fragment:Yg,lightmap_pars_fragment:Kg,lights_lambert_fragment:$g,lights_lambert_pars_fragment:Jg,lights_pars_begin:Qg,lights_toon_fragment:t0,lights_toon_pars_fragment:e0,lights_phong_fragment:n0,lights_phong_pars_fragment:i0,lights_physical_fragment:s0,lights_physical_pars_fragment:r0,lights_fragment_begin:a0,lights_fragment_maps:o0,lights_fragment_end:c0,logdepthbuf_fragment:l0,logdepthbuf_pars_fragment:h0,logdepthbuf_pars_vertex:u0,logdepthbuf_vertex:d0,map_fragment:f0,map_pars_fragment:p0,map_particle_fragment:m0,map_particle_pars_fragment:g0,metalnessmap_fragment:b0,metalnessmap_pars_fragment:v0,morphinstance_vertex:x0,morphcolor_vertex:_0,morphnormal_vertex:y0,morphtarget_pars_vertex:M0,morphtarget_vertex:S0,normal_fragment_begin:w0,normal_fragment_maps:A0,normal_pars_fragment:E0,normal_pars_vertex:T0,normal_vertex:R0,normalmap_pars_fragment:C0,clearcoat_normal_fragment_begin:P0,clearcoat_normal_fragment_maps:L0,clearcoat_pars_fragment:I0,iridescence_pars_fragment:D0,opaque_fragment:N0,packing:F0,premultiplied_alpha_fragment:U0,project_vertex:k0,dithering_fragment:O0,dithering_pars_fragment:B0,roughnessmap_fragment:z0,roughnessmap_pars_fragment:H0,shadowmap_pars_fragment:G0,shadowmap_pars_vertex:V0,shadowmap_vertex:W0,shadowmask_pars_fragment:q0,skinbase_vertex:X0,skinning_pars_vertex:j0,skinning_vertex:Y0,skinnormal_vertex:K0,specularmap_fragment:$0,specularmap_pars_fragment:J0,tonemapping_fragment:Q0,tonemapping_pars_fragment:Z0,transmission_fragment:tb,transmission_pars_fragment:eb,uv_pars_fragment:nb,uv_pars_vertex:ib,uv_vertex:sb,worldpos_vertex:rb,background_vert:ab,background_frag:ob,backgroundCube_vert:cb,backgroundCube_frag:lb,cube_vert:hb,cube_frag:ub,depth_vert:db,depth_frag:fb,distanceRGBA_vert:pb,distanceRGBA_frag:mb,equirect_vert:gb,equirect_frag:bb,linedashed_vert:vb,linedashed_frag:xb,meshbasic_vert:_b,meshbasic_frag:yb,meshlambert_vert:Mb,meshlambert_frag:Sb,meshmatcap_vert:wb,meshmatcap_frag:Ab,meshnormal_vert:Eb,meshnormal_frag:Tb,meshphong_vert:Rb,meshphong_frag:Cb,meshphysical_vert:Pb,meshphysical_frag:Lb,meshtoon_vert:Ib,meshtoon_frag:Db,points_vert:Nb,points_frag:Fb,shadow_vert:Ub,shadow_frag:kb,sprite_vert:Ob,sprite_frag:Bb},ot={common:{diffuse:{value:new Et(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new zt},alphaMap:{value:null},alphaMapTransform:{value:new zt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new zt}},envmap:{envMap:{value:null},envMapRotation:{value:new zt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new zt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new zt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new zt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new zt},normalScale:{value:new it(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new zt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new zt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new zt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new zt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Et(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Et(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new zt},alphaTest:{value:0},uvTransform:{value:new zt}},sprite:{diffuse:{value:new Et(16777215)},opacity:{value:1},center:{value:new it(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new zt},alphaMap:{value:null},alphaMapTransform:{value:new zt},alphaTest:{value:0}}},Hn={basic:{uniforms:Ye([ot.common,ot.specularmap,ot.envmap,ot.aomap,ot.lightmap,ot.fog]),vertexShader:Bt.meshbasic_vert,fragmentShader:Bt.meshbasic_frag},lambert:{uniforms:Ye([ot.common,ot.specularmap,ot.envmap,ot.aomap,ot.lightmap,ot.emissivemap,ot.bumpmap,ot.normalmap,ot.displacementmap,ot.fog,ot.lights,{emissive:{value:new Et(0)}}]),vertexShader:Bt.meshlambert_vert,fragmentShader:Bt.meshlambert_frag},phong:{uniforms:Ye([ot.common,ot.specularmap,ot.envmap,ot.aomap,ot.lightmap,ot.emissivemap,ot.bumpmap,ot.normalmap,ot.displacementmap,ot.fog,ot.lights,{emissive:{value:new Et(0)},specular:{value:new Et(1118481)},shininess:{value:30}}]),vertexShader:Bt.meshphong_vert,fragmentShader:Bt.meshphong_frag},standard:{uniforms:Ye([ot.common,ot.envmap,ot.aomap,ot.lightmap,ot.emissivemap,ot.bumpmap,ot.normalmap,ot.displacementmap,ot.roughnessmap,ot.metalnessmap,ot.fog,ot.lights,{emissive:{value:new Et(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Bt.meshphysical_vert,fragmentShader:Bt.meshphysical_frag},toon:{uniforms:Ye([ot.common,ot.aomap,ot.lightmap,ot.emissivemap,ot.bumpmap,ot.normalmap,ot.displacementmap,ot.gradientmap,ot.fog,ot.lights,{emissive:{value:new Et(0)}}]),vertexShader:Bt.meshtoon_vert,fragmentShader:Bt.meshtoon_frag},matcap:{uniforms:Ye([ot.common,ot.bumpmap,ot.normalmap,ot.displacementmap,ot.fog,{matcap:{value:null}}]),vertexShader:Bt.meshmatcap_vert,fragmentShader:Bt.meshmatcap_frag},points:{uniforms:Ye([ot.points,ot.fog]),vertexShader:Bt.points_vert,fragmentShader:Bt.points_frag},dashed:{uniforms:Ye([ot.common,ot.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Bt.linedashed_vert,fragmentShader:Bt.linedashed_frag},depth:{uniforms:Ye([ot.common,ot.displacementmap]),vertexShader:Bt.depth_vert,fragmentShader:Bt.depth_frag},normal:{uniforms:Ye([ot.common,ot.bumpmap,ot.normalmap,ot.displacementmap,{opacity:{value:1}}]),vertexShader:Bt.meshnormal_vert,fragmentShader:Bt.meshnormal_frag},sprite:{uniforms:Ye([ot.sprite,ot.fog]),vertexShader:Bt.sprite_vert,fragmentShader:Bt.sprite_frag},background:{uniforms:{uvTransform:{value:new zt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Bt.background_vert,fragmentShader:Bt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new zt}},vertexShader:Bt.backgroundCube_vert,fragmentShader:Bt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Bt.cube_vert,fragmentShader:Bt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Bt.equirect_vert,fragmentShader:Bt.equirect_frag},distanceRGBA:{uniforms:Ye([ot.common,ot.displacementmap,{referencePosition:{value:new R},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Bt.distanceRGBA_vert,fragmentShader:Bt.distanceRGBA_frag},shadow:{uniforms:Ye([ot.lights,ot.fog,{color:{value:new Et(0)},opacity:{value:1}}]),vertexShader:Bt.shadow_vert,fragmentShader:Bt.shadow_frag}};Hn.physical={uniforms:Ye([Hn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new zt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new zt},clearcoatNormalScale:{value:new it(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new zt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new zt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new zt},sheen:{value:0},sheenColor:{value:new Et(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new zt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new zt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new zt},transmissionSamplerSize:{value:new it},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new zt},attenuationDistance:{value:0},attenuationColor:{value:new Et(0)},specularColor:{value:new Et(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new zt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new zt},anisotropyVector:{value:new it},anisotropyMap:{value:null},anisotropyMapTransform:{value:new zt}}]),vertexShader:Bt.meshphysical_vert,fragmentShader:Bt.meshphysical_frag};const ba={r:0,b:0,g:0},Vi=new We,zb=new _t;function Hb(s,t,e,n,i,r,a){const o=new Et(0);let c=r===!0?0:1,l,h,u=null,d=0,f=null;function g(y){let v=y.isScene===!0?y.background:null;return v&&v.isTexture&&(v=(y.backgroundBlurriness>0?e:t).get(v)),v}function b(y){let v=!1;const _=g(y);_===null?p(o,c):_&&_.isColor&&(p(_,1),v=!0);const M=s.xr.getEnvironmentBlendMode();M==="additive"?n.buffers.color.setClear(0,0,0,1,a):M==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(s.autoClear||v)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function m(y,v){const _=g(v);_&&(_.isCubeTexture||_.mapping===mo)?(h===void 0&&(h=new Qt(new as(1,1,1),new Rn({name:"BackgroundCubeMaterial",uniforms:js(Hn.backgroundCube.uniforms),vertexShader:Hn.backgroundCube.vertexShader,fragmentShader:Hn.backgroundCube.fragmentShader,side:tn,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(M,E,S){this.matrixWorld.copyPosition(S.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(h)),Vi.copy(v.backgroundRotation),Vi.x*=-1,Vi.y*=-1,Vi.z*=-1,_.isCubeTexture&&_.isRenderTargetTexture===!1&&(Vi.y*=-1,Vi.z*=-1),h.material.uniforms.envMap.value=_,h.material.uniforms.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=v.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(zb.makeRotationFromEuler(Vi)),h.material.toneMapped=Zt.getTransfer(_.colorSpace)!==me,(u!==_||d!==_.version||f!==s.toneMapping)&&(h.material.needsUpdate=!0,u=_,d=_.version,f=s.toneMapping),h.layers.enableAll(),y.unshift(h,h.geometry,h.material,0,0,null)):_&&_.isTexture&&(l===void 0&&(l=new Qt(new $n(2,2),new Rn({name:"BackgroundMaterial",uniforms:js(Hn.background.uniforms),vertexShader:Hn.background.vertexShader,fragmentShader:Hn.background.fragmentShader,side:xi,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=_,l.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,l.material.toneMapped=Zt.getTransfer(_.colorSpace)!==me,_.matrixAutoUpdate===!0&&_.updateMatrix(),l.material.uniforms.uvTransform.value.copy(_.matrix),(u!==_||d!==_.version||f!==s.toneMapping)&&(l.material.needsUpdate=!0,u=_,d=_.version,f=s.toneMapping),l.layers.enableAll(),y.unshift(l,l.geometry,l.material,0,0,null))}function p(y,v){y.getRGB(ba,yf(s)),n.buffers.color.setClear(ba.r,ba.g,ba.b,v,a)}return{getClearColor:function(){return o},setClearColor:function(y,v=1){o.set(y),c=v,p(o,c)},getClearAlpha:function(){return c},setClearAlpha:function(y){c=y,p(o,c)},render:b,addToRenderList:m}}function Gb(s,t){const e=s.getParameter(s.MAX_VERTEX_ATTRIBS),n={},i=d(null);let r=i,a=!1;function o(x,A,U,B,O){let X=!1;const H=u(B,U,A);r!==H&&(r=H,l(r.object)),X=f(x,B,U,O),X&&g(x,B,U,O),O!==null&&t.update(O,s.ELEMENT_ARRAY_BUFFER),(X||a)&&(a=!1,_(x,A,U,B),O!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,t.get(O).buffer))}function c(){return s.createVertexArray()}function l(x){return s.bindVertexArray(x)}function h(x){return s.deleteVertexArray(x)}function u(x,A,U){const B=U.wireframe===!0;let O=n[x.id];O===void 0&&(O={},n[x.id]=O);let X=O[A.id];X===void 0&&(X={},O[A.id]=X);let H=X[B];return H===void 0&&(H=d(c()),X[B]=H),H}function d(x){const A=[],U=[],B=[];for(let O=0;O<e;O++)A[O]=0,U[O]=0,B[O]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:A,enabledAttributes:U,attributeDivisors:B,object:x,attributes:{},index:null}}function f(x,A,U,B){const O=r.attributes,X=A.attributes;let H=0;const J=U.getAttributes();for(const k in J)if(J[k].location>=0){const st=O[k];let rt=X[k];if(rt===void 0&&(k==="instanceMatrix"&&x.instanceMatrix&&(rt=x.instanceMatrix),k==="instanceColor"&&x.instanceColor&&(rt=x.instanceColor)),st===void 0||st.attribute!==rt||rt&&st.data!==rt.data)return!0;H++}return r.attributesNum!==H||r.index!==B}function g(x,A,U,B){const O={},X=A.attributes;let H=0;const J=U.getAttributes();for(const k in J)if(J[k].location>=0){let st=X[k];st===void 0&&(k==="instanceMatrix"&&x.instanceMatrix&&(st=x.instanceMatrix),k==="instanceColor"&&x.instanceColor&&(st=x.instanceColor));const rt={};rt.attribute=st,st&&st.data&&(rt.data=st.data),O[k]=rt,H++}r.attributes=O,r.attributesNum=H,r.index=B}function b(){const x=r.newAttributes;for(let A=0,U=x.length;A<U;A++)x[A]=0}function m(x){p(x,0)}function p(x,A){const U=r.newAttributes,B=r.enabledAttributes,O=r.attributeDivisors;U[x]=1,B[x]===0&&(s.enableVertexAttribArray(x),B[x]=1),O[x]!==A&&(s.vertexAttribDivisor(x,A),O[x]=A)}function y(){const x=r.newAttributes,A=r.enabledAttributes;for(let U=0,B=A.length;U<B;U++)A[U]!==x[U]&&(s.disableVertexAttribArray(U),A[U]=0)}function v(x,A,U,B,O,X,H){H===!0?s.vertexAttribIPointer(x,A,U,O,X):s.vertexAttribPointer(x,A,U,B,O,X)}function _(x,A,U,B){b();const O=B.attributes,X=U.getAttributes(),H=A.defaultAttributeValues;for(const J in X){const k=X[J];if(k.location>=0){let et=O[J];if(et===void 0&&(J==="instanceMatrix"&&x.instanceMatrix&&(et=x.instanceMatrix),J==="instanceColor"&&x.instanceColor&&(et=x.instanceColor)),et!==void 0){const st=et.normalized,rt=et.itemSize,At=t.get(et);if(At===void 0)continue;const wt=At.buffer,j=At.type,Q=At.bytesPerElement,at=j===s.INT||j===s.UNSIGNED_INT||et.gpuType===Hl;if(et.isInterleavedBufferAttribute){const ct=et.data,Ut=ct.stride,Pt=et.offset;if(ct.isInstancedInterleavedBuffer){for(let Xt=0;Xt<k.locationSize;Xt++)p(k.location+Xt,ct.meshPerAttribute);x.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=ct.meshPerAttribute*ct.count)}else for(let Xt=0;Xt<k.locationSize;Xt++)m(k.location+Xt);s.bindBuffer(s.ARRAY_BUFFER,wt);for(let Xt=0;Xt<k.locationSize;Xt++)v(k.location+Xt,rt/k.locationSize,j,st,Ut*Q,(Pt+rt/k.locationSize*Xt)*Q,at)}else{if(et.isInstancedBufferAttribute){for(let ct=0;ct<k.locationSize;ct++)p(k.location+ct,et.meshPerAttribute);x.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=et.meshPerAttribute*et.count)}else for(let ct=0;ct<k.locationSize;ct++)m(k.location+ct);s.bindBuffer(s.ARRAY_BUFFER,wt);for(let ct=0;ct<k.locationSize;ct++)v(k.location+ct,rt/k.locationSize,j,st,rt*Q,rt/k.locationSize*ct*Q,at)}}else if(H!==void 0){const st=H[J];if(st!==void 0)switch(st.length){case 2:s.vertexAttrib2fv(k.location,st);break;case 3:s.vertexAttrib3fv(k.location,st);break;case 4:s.vertexAttrib4fv(k.location,st);break;default:s.vertexAttrib1fv(k.location,st)}}}}y()}function M(){C();for(const x in n){const A=n[x];for(const U in A){const B=A[U];for(const O in B)h(B[O].object),delete B[O];delete A[U]}delete n[x]}}function E(x){if(n[x.id]===void 0)return;const A=n[x.id];for(const U in A){const B=A[U];for(const O in B)h(B[O].object),delete B[O];delete A[U]}delete n[x.id]}function S(x){for(const A in n){const U=n[A];if(U[x.id]===void 0)continue;const B=U[x.id];for(const O in B)h(B[O].object),delete B[O];delete U[x.id]}}function C(){I(),a=!0,r!==i&&(r=i,l(r.object))}function I(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:o,reset:C,resetDefaultState:I,dispose:M,releaseStatesOfGeometry:E,releaseStatesOfProgram:S,initAttributes:b,enableAttribute:m,disableUnusedAttributes:y}}function Vb(s,t,e){let n;function i(l){n=l}function r(l,h){s.drawArrays(n,l,h),e.update(h,n,1)}function a(l,h,u){u!==0&&(s.drawArraysInstanced(n,l,h,u),e.update(h,n,u))}function o(l,h,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,h,0,u);let f=0;for(let g=0;g<u;g++)f+=h[g];e.update(f,n,1)}function c(l,h,u,d){if(u===0)return;const f=t.get("WEBGL_multi_draw");if(f===null)for(let g=0;g<l.length;g++)a(l[g],h[g],d[g]);else{f.multiDrawArraysInstancedWEBGL(n,l,0,h,0,d,0,u);let g=0;for(let b=0;b<u;b++)g+=h[b];for(let b=0;b<d.length;b++)e.update(g,n,d[b])}}this.setMode=i,this.render=r,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=c}function Wb(s,t,e,n){let i;function r(){if(i!==void 0)return i;if(t.has("EXT_texture_filter_anisotropic")===!0){const S=t.get("EXT_texture_filter_anisotropic");i=s.getParameter(S.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function a(S){return!(S!==En&&n.convert(S)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(S){const C=S===Kr&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(S!==Kn&&n.convert(S)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&S!==Nn&&!C)}function c(S){if(S==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";S="mediump"}return S==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=e.precision!==void 0?e.precision:"highp";const h=c(l);h!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",h,"instead."),l=h);const u=e.logarithmicDepthBuffer===!0,d=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control");if(d===!0){const S=t.get("EXT_clip_control");S.clipControlEXT(S.LOWER_LEFT_EXT,S.ZERO_TO_ONE_EXT)}const f=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),g=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),b=s.getParameter(s.MAX_TEXTURE_SIZE),m=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),p=s.getParameter(s.MAX_VERTEX_ATTRIBS),y=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),v=s.getParameter(s.MAX_VARYING_VECTORS),_=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),M=g>0,E=s.getParameter(s.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:a,textureTypeReadable:o,precision:l,logarithmicDepthBuffer:u,reverseDepthBuffer:d,maxTextures:f,maxVertexTextures:g,maxTextureSize:b,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:y,maxVaryings:v,maxFragmentUniforms:_,vertexTextures:M,maxSamples:E}}function qb(s){const t=this;let e=null,n=0,i=!1,r=!1;const a=new Yi,o=new zt,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){const f=u.length!==0||d||n!==0||i;return i=d,n=u.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,d){e=h(u,d,0)},this.setState=function(u,d,f){const g=u.clippingPlanes,b=u.clipIntersection,m=u.clipShadows,p=s.get(u);if(!i||g===null||g.length===0||r&&!m)r?h(null):l();else{const y=r?0:n,v=y*4;let _=p.clippingState||null;c.value=_,_=h(g,d,v,f);for(let M=0;M!==v;++M)_[M]=e[M];p.clippingState=_,this.numIntersection=b?this.numPlanes:0,this.numPlanes+=y}};function l(){c.value!==e&&(c.value=e,c.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(u,d,f,g){const b=u!==null?u.length:0;let m=null;if(b!==0){if(m=c.value,g!==!0||m===null){const p=f+b*4,y=d.matrixWorldInverse;o.getNormalMatrix(y),(m===null||m.length<p)&&(m=new Float32Array(p));for(let v=0,_=f;v!==b;++v,_+=4)a.copy(u[v]).applyMatrix4(y,o),a.normal.toArray(m,_),m[_+3]=a.constant}c.value=m,c.needsUpdate=!0}return t.numPlanes=b,t.numIntersection=0,m}}function Xb(s){let t=new WeakMap;function e(a,o){return o===Kc?a.mapping=Gs:o===$c&&(a.mapping=Vs),a}function n(a){if(a&&a.isTexture){const o=a.mapping;if(o===Kc||o===$c)if(t.has(a)){const c=t.get(a).texture;return e(c,a.mapping)}else{const c=a.image;if(c&&c.height>0){const l=new ig(c.height);return l.fromEquirectangularTexture(s,a),t.set(a,l),a.addEventListener("dispose",i),e(l.texture,a.mapping)}else return null}}return a}function i(a){const o=a.target;o.removeEventListener("dispose",i);const c=t.get(o);c!==void 0&&(t.delete(o),c.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}class Ql extends Mf{constructor(t=-1,e=1,n=1,i=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=i,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,i,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let r=n-t,a=n+t,o=i+e,c=i-e;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,a=r+l*this.view.width,o-=h*this.view.offsetY,c=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const Ds=4,cu=[.125,.215,.35,.446,.526,.582],Ji=20,Zo=new Ql,lu=new Et;let tc=null,ec=0,nc=0,ic=!1;const Ki=(1+Math.sqrt(5))/2,ys=1/Ki,hu=[new R(-Ki,ys,0),new R(Ki,ys,0),new R(-ys,0,Ki),new R(ys,0,Ki),new R(0,Ki,-ys),new R(0,Ki,ys),new R(-1,1,-1),new R(1,1,-1),new R(-1,1,1),new R(1,1,1)];class Al{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,i=100){tc=this._renderer.getRenderTarget(),ec=this._renderer.getActiveCubeFace(),nc=this._renderer.getActiveMipmapLevel(),ic=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,n,i,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=fu(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=du(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(tc,ec,nc),this._renderer.xr.enabled=ic,t.scissorTest=!1,va(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Gs||t.mapping===Vs?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),tc=this._renderer.getRenderTarget(),ec=this._renderer.getActiveCubeFace(),nc=this._renderer.getActiveMipmapLevel(),ic=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:on,minFilter:on,generateMipmaps:!1,type:Kr,format:En,colorSpace:He,depthBuffer:!1},i=uu(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=uu(t,e,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=jb(r)),this._blurMaterial=Yb(r,t,e)}return i}_compileMaterial(t){const e=new Qt(this._lodPlanes[0],t);this._renderer.compile(e,Zo)}_sceneToCubeUV(t,e,n,i){const o=new Ke(90,1,e,n),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,d=h.toneMapping;h.getClearColor(lu),h.toneMapping=Ni,h.autoClear=!1;const f=new Qe({name:"PMREM.Background",side:tn,depthWrite:!1,depthTest:!1}),g=new Qt(new as,f);let b=!1;const m=t.background;m?m.isColor&&(f.color.copy(m),t.background=null,b=!0):(f.color.copy(lu),b=!0);for(let p=0;p<6;p++){const y=p%3;y===0?(o.up.set(0,c[p],0),o.lookAt(l[p],0,0)):y===1?(o.up.set(0,0,c[p]),o.lookAt(0,l[p],0)):(o.up.set(0,c[p],0),o.lookAt(0,0,l[p]));const v=this._cubeSize;va(i,y*v,p>2?v:0,v,v),h.setRenderTarget(i),b&&h.render(g,o),h.render(t,o)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=d,h.autoClear=u,t.background=m}_textureToCubeUV(t,e){const n=this._renderer,i=t.mapping===Gs||t.mapping===Vs;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=fu()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=du());const r=i?this._cubemapMaterial:this._equirectMaterial,a=new Qt(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=t;const c=this._cubeSize;va(e,0,0,3*c,2*c),n.setRenderTarget(e),n.render(a,Zo)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const i=this._lodPlanes.length;for(let r=1;r<i;r++){const a=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=hu[(i-r-1)%hu.length];this._blur(t,r-1,r,a,o)}e.autoClear=n}_blur(t,e,n,i,r){const a=this._pingPongRenderTarget;this._halfBlur(t,a,e,n,i,"latitudinal",r),this._halfBlur(a,t,n,n,i,"longitudinal",r)}_halfBlur(t,e,n,i,r,a,o){const c=this._renderer,l=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,u=new Qt(this._lodPlanes[i],l),d=l.uniforms,f=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*Ji-1),b=r/g,m=isFinite(r)?1+Math.floor(h*b):Ji;m>Ji&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Ji}`);const p=[];let y=0;for(let S=0;S<Ji;++S){const C=S/b,I=Math.exp(-C*C/2);p.push(I),S===0?y+=I:S<m&&(y+=2*I)}for(let S=0;S<p.length;S++)p[S]=p[S]/y;d.envMap.value=t.texture,d.samples.value=m,d.weights.value=p,d.latitudinal.value=a==="latitudinal",o&&(d.poleAxis.value=o);const{_lodMax:v}=this;d.dTheta.value=g,d.mipInt.value=v-n;const _=this._sizeLods[i],M=3*_*(i>v-Ds?i-v+Ds:0),E=4*(this._cubeSize-_);va(e,M,E,3*_,2*_),c.setRenderTarget(e),c.render(u,Zo)}}function jb(s){const t=[],e=[],n=[];let i=s;const r=s-Ds+1+cu.length;for(let a=0;a<r;a++){const o=Math.pow(2,i);e.push(o);let c=1/o;a>s-Ds?c=cu[a-s+Ds-1]:a===0&&(c=0),n.push(c);const l=1/(o-2),h=-l,u=1+l,d=[h,h,u,h,u,u,h,h,u,u,h,u],f=6,g=6,b=3,m=2,p=1,y=new Float32Array(b*g*f),v=new Float32Array(m*g*f),_=new Float32Array(p*g*f);for(let E=0;E<f;E++){const S=E%3*2/3-1,C=E>2?0:-1,I=[S,C,0,S+2/3,C,0,S+2/3,C+1,0,S,C,0,S+2/3,C+1,0,S,C+1,0];y.set(I,b*g*E),v.set(d,m*g*E);const x=[E,E,E,E,E,E];_.set(x,p*g*E)}const M=new _e;M.setAttribute("position",new Te(y,b)),M.setAttribute("uv",new Te(v,m)),M.setAttribute("faceIndex",new Te(_,p)),t.push(M),i>Ds&&i--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function uu(s,t,e){const n=new ns(s,t,e);return n.texture.mapping=mo,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function va(s,t,e,n,i){s.viewport.set(t,e,n,i),s.scissor.set(t,e,n,i)}function Yb(s,t,e){const n=new Float32Array(Ji),i=new R(0,1,0);return new Rn({name:"SphericalGaussianBlur",defines:{n:Ji,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:Zl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Di,depthTest:!1,depthWrite:!1})}function du(){return new Rn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Zl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Di,depthTest:!1,depthWrite:!1})}function fu(){return new Rn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Zl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Di,depthTest:!1,depthWrite:!1})}function Zl(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function Kb(s){let t=new WeakMap,e=null;function n(o){if(o&&o.isTexture){const c=o.mapping,l=c===Kc||c===$c,h=c===Gs||c===Vs;if(l||h){let u=t.get(o);const d=u!==void 0?u.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==d)return e===null&&(e=new Al(s)),u=l?e.fromEquirectangular(o,u):e.fromCubemap(o,u),u.texture.pmremVersion=o.pmremVersion,t.set(o,u),u.texture;if(u!==void 0)return u.texture;{const f=o.image;return l&&f&&f.height>0||h&&f&&i(f)?(e===null&&(e=new Al(s)),u=l?e.fromEquirectangular(o):e.fromCubemap(o),u.texture.pmremVersion=o.pmremVersion,t.set(o,u),o.addEventListener("dispose",r),u.texture):null}}}return o}function i(o){let c=0;const l=6;for(let h=0;h<l;h++)o[h]!==void 0&&c++;return c===l}function r(o){const c=o.target;c.removeEventListener("dispose",r);const l=t.get(c);l!==void 0&&(t.delete(c),l.dispose())}function a(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:a}}function $b(s){const t={};function e(n){if(t[n]!==void 0)return t[n];let i;switch(n){case"WEBGL_depth_texture":i=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=s.getExtension(n)}return t[n]=i,i}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const i=e(n);return i===null&&$a("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function Jb(s,t,e,n){const i={},r=new WeakMap;function a(u){const d=u.target;d.index!==null&&t.remove(d.index);for(const g in d.attributes)t.remove(d.attributes[g]);for(const g in d.morphAttributes){const b=d.morphAttributes[g];for(let m=0,p=b.length;m<p;m++)t.remove(b[m])}d.removeEventListener("dispose",a),delete i[d.id];const f=r.get(d);f&&(t.remove(f),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,e.memory.geometries--}function o(u,d){return i[d.id]===!0||(d.addEventListener("dispose",a),i[d.id]=!0,e.memory.geometries++),d}function c(u){const d=u.attributes;for(const g in d)t.update(d[g],s.ARRAY_BUFFER);const f=u.morphAttributes;for(const g in f){const b=f[g];for(let m=0,p=b.length;m<p;m++)t.update(b[m],s.ARRAY_BUFFER)}}function l(u){const d=[],f=u.index,g=u.attributes.position;let b=0;if(f!==null){const y=f.array;b=f.version;for(let v=0,_=y.length;v<_;v+=3){const M=y[v+0],E=y[v+1],S=y[v+2];d.push(M,E,E,S,S,M)}}else if(g!==void 0){const y=g.array;b=g.version;for(let v=0,_=y.length/3-1;v<_;v+=3){const M=v+0,E=v+1,S=v+2;d.push(M,E,E,S,S,M)}}else return;const m=new(pf(d)?_f:xf)(d,1);m.version=b;const p=r.get(u);p&&t.remove(p),r.set(u,m)}function h(u){const d=r.get(u);if(d){const f=u.index;f!==null&&d.version<f.version&&l(u)}else l(u);return r.get(u)}return{get:o,update:c,getWireframeAttribute:h}}function Qb(s,t,e){let n;function i(d){n=d}let r,a;function o(d){r=d.type,a=d.bytesPerElement}function c(d,f){s.drawElements(n,f,r,d*a),e.update(f,n,1)}function l(d,f,g){g!==0&&(s.drawElementsInstanced(n,f,r,d*a,g),e.update(f,n,g))}function h(d,f,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,r,d,0,g);let m=0;for(let p=0;p<g;p++)m+=f[p];e.update(m,n,1)}function u(d,f,g,b){if(g===0)return;const m=t.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<d.length;p++)l(d[p]/a,f[p],b[p]);else{m.multiDrawElementsInstancedWEBGL(n,f,0,r,d,0,b,0,g);let p=0;for(let y=0;y<g;y++)p+=f[y];for(let y=0;y<b.length;y++)e.update(p,n,b[y])}}this.setMode=i,this.setIndex=o,this.render=c,this.renderInstances=l,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function Zb(s){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(e.calls++,a){case s.TRIANGLES:e.triangles+=o*(r/3);break;case s.LINES:e.lines+=o*(r/2);break;case s.LINE_STRIP:e.lines+=o*(r-1);break;case s.LINE_LOOP:e.lines+=o*r;break;case s.POINTS:e.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function i(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:i,update:n}}function tv(s,t,e){const n=new WeakMap,i=new ne;function r(a,o,c){const l=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=h!==void 0?h.length:0;let d=n.get(o);if(d===void 0||d.count!==u){let I=function(){S.dispose(),n.delete(o),o.removeEventListener("dispose",I)};d!==void 0&&d.texture.dispose();const f=o.morphAttributes.position!==void 0,g=o.morphAttributes.normal!==void 0,b=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],p=o.morphAttributes.normal||[],y=o.morphAttributes.color||[];let v=0;f===!0&&(v=1),g===!0&&(v=2),b===!0&&(v=3);let _=o.attributes.position.count*v,M=1;_>t.maxTextureSize&&(M=Math.ceil(_/t.maxTextureSize),_=t.maxTextureSize);const E=new Float32Array(_*M*4*u),S=new gf(E,_,M,u);S.type=Nn,S.needsUpdate=!0;const C=v*4;for(let x=0;x<u;x++){const A=m[x],U=p[x],B=y[x],O=_*M*4*x;for(let X=0;X<A.count;X++){const H=X*C;f===!0&&(i.fromBufferAttribute(A,X),E[O+H+0]=i.x,E[O+H+1]=i.y,E[O+H+2]=i.z,E[O+H+3]=0),g===!0&&(i.fromBufferAttribute(U,X),E[O+H+4]=i.x,E[O+H+5]=i.y,E[O+H+6]=i.z,E[O+H+7]=0),b===!0&&(i.fromBufferAttribute(B,X),E[O+H+8]=i.x,E[O+H+9]=i.y,E[O+H+10]=i.z,E[O+H+11]=B.itemSize===4?i.w:1)}}d={count:u,texture:S,size:new it(_,M)},n.set(o,d),o.addEventListener("dispose",I)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)c.getUniforms().setValue(s,"morphTexture",a.morphTexture,e);else{let f=0;for(let b=0;b<l.length;b++)f+=l[b];const g=o.morphTargetsRelative?1:1-f;c.getUniforms().setValue(s,"morphTargetBaseInfluence",g),c.getUniforms().setValue(s,"morphTargetInfluences",l)}c.getUniforms().setValue(s,"morphTargetsTexture",d.texture,e),c.getUniforms().setValue(s,"morphTargetsTextureSize",d.size)}return{update:r}}function ev(s,t,e,n){let i=new WeakMap;function r(c){const l=n.render.frame,h=c.geometry,u=t.get(c,h);if(i.get(u)!==l&&(t.update(u),i.set(u,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",o)===!1&&c.addEventListener("dispose",o),i.get(c)!==l&&(e.update(c.instanceMatrix,s.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,s.ARRAY_BUFFER),i.set(c,l))),c.isSkinnedMesh){const d=c.skeleton;i.get(d)!==l&&(d.update(),i.set(d,l))}return u}function a(){i=new WeakMap}function o(c){const l=c.target;l.removeEventListener("dispose",o),e.remove(l.instanceMatrix),l.instanceColor!==null&&e.remove(l.instanceColor)}return{update:r,dispose:a}}class Af extends Le{constructor(t,e,n,i,r,a,o,c,l,h=Us){if(h!==Us&&h!==qs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===Us&&(n=es),n===void 0&&h===qs&&(n=Ws),super(null,i,r,a,o,c,h,n,l),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=o!==void 0?o:Je,this.minFilter=c!==void 0?c:Je,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}const Ef=new Le,pu=new Af(1,1),Tf=new gf,Rf=new Hm,Cf=new Sf,mu=[],gu=[],bu=new Float32Array(16),vu=new Float32Array(9),xu=new Float32Array(4);function Zs(s,t,e){const n=s[0];if(n<=0||n>0)return s;const i=t*e;let r=mu[i];if(r===void 0&&(r=new Float32Array(i),mu[i]=r),t!==0){n.toArray(r,0);for(let a=1,o=0;a!==t;++a)o+=e,s[a].toArray(r,o)}return r}function Ie(s,t){if(s.length!==t.length)return!1;for(let e=0,n=s.length;e<n;e++)if(s[e]!==t[e])return!1;return!0}function De(s,t){for(let e=0,n=t.length;e<n;e++)s[e]=t[e]}function vo(s,t){let e=gu[t];e===void 0&&(e=new Int32Array(t),gu[t]=e);for(let n=0;n!==t;++n)e[n]=s.allocateTextureUnit();return e}function nv(s,t){const e=this.cache;e[0]!==t&&(s.uniform1f(this.addr,t),e[0]=t)}function iv(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ie(e,t))return;s.uniform2fv(this.addr,t),De(e,t)}}function sv(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(s.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Ie(e,t))return;s.uniform3fv(this.addr,t),De(e,t)}}function rv(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ie(e,t))return;s.uniform4fv(this.addr,t),De(e,t)}}function av(s,t){const e=this.cache,n=t.elements;if(n===void 0){if(Ie(e,t))return;s.uniformMatrix2fv(this.addr,!1,t),De(e,t)}else{if(Ie(e,n))return;xu.set(n),s.uniformMatrix2fv(this.addr,!1,xu),De(e,n)}}function ov(s,t){const e=this.cache,n=t.elements;if(n===void 0){if(Ie(e,t))return;s.uniformMatrix3fv(this.addr,!1,t),De(e,t)}else{if(Ie(e,n))return;vu.set(n),s.uniformMatrix3fv(this.addr,!1,vu),De(e,n)}}function cv(s,t){const e=this.cache,n=t.elements;if(n===void 0){if(Ie(e,t))return;s.uniformMatrix4fv(this.addr,!1,t),De(e,t)}else{if(Ie(e,n))return;bu.set(n),s.uniformMatrix4fv(this.addr,!1,bu),De(e,n)}}function lv(s,t){const e=this.cache;e[0]!==t&&(s.uniform1i(this.addr,t),e[0]=t)}function hv(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ie(e,t))return;s.uniform2iv(this.addr,t),De(e,t)}}function uv(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ie(e,t))return;s.uniform3iv(this.addr,t),De(e,t)}}function dv(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ie(e,t))return;s.uniform4iv(this.addr,t),De(e,t)}}function fv(s,t){const e=this.cache;e[0]!==t&&(s.uniform1ui(this.addr,t),e[0]=t)}function pv(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ie(e,t))return;s.uniform2uiv(this.addr,t),De(e,t)}}function mv(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ie(e,t))return;s.uniform3uiv(this.addr,t),De(e,t)}}function gv(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ie(e,t))return;s.uniform4uiv(this.addr,t),De(e,t)}}function bv(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i);let r;this.type===s.SAMPLER_2D_SHADOW?(pu.compareFunction=ff,r=pu):r=Ef,e.setTexture2D(t||r,i)}function vv(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTexture3D(t||Rf,i)}function xv(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTextureCube(t||Cf,i)}function _v(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTexture2DArray(t||Tf,i)}function yv(s){switch(s){case 5126:return nv;case 35664:return iv;case 35665:return sv;case 35666:return rv;case 35674:return av;case 35675:return ov;case 35676:return cv;case 5124:case 35670:return lv;case 35667:case 35671:return hv;case 35668:case 35672:return uv;case 35669:case 35673:return dv;case 5125:return fv;case 36294:return pv;case 36295:return mv;case 36296:return gv;case 35678:case 36198:case 36298:case 36306:case 35682:return bv;case 35679:case 36299:case 36307:return vv;case 35680:case 36300:case 36308:case 36293:return xv;case 36289:case 36303:case 36311:case 36292:return _v}}function Mv(s,t){s.uniform1fv(this.addr,t)}function Sv(s,t){const e=Zs(t,this.size,2);s.uniform2fv(this.addr,e)}function wv(s,t){const e=Zs(t,this.size,3);s.uniform3fv(this.addr,e)}function Av(s,t){const e=Zs(t,this.size,4);s.uniform4fv(this.addr,e)}function Ev(s,t){const e=Zs(t,this.size,4);s.uniformMatrix2fv(this.addr,!1,e)}function Tv(s,t){const e=Zs(t,this.size,9);s.uniformMatrix3fv(this.addr,!1,e)}function Rv(s,t){const e=Zs(t,this.size,16);s.uniformMatrix4fv(this.addr,!1,e)}function Cv(s,t){s.uniform1iv(this.addr,t)}function Pv(s,t){s.uniform2iv(this.addr,t)}function Lv(s,t){s.uniform3iv(this.addr,t)}function Iv(s,t){s.uniform4iv(this.addr,t)}function Dv(s,t){s.uniform1uiv(this.addr,t)}function Nv(s,t){s.uniform2uiv(this.addr,t)}function Fv(s,t){s.uniform3uiv(this.addr,t)}function Uv(s,t){s.uniform4uiv(this.addr,t)}function kv(s,t,e){const n=this.cache,i=t.length,r=vo(e,i);Ie(n,r)||(s.uniform1iv(this.addr,r),De(n,r));for(let a=0;a!==i;++a)e.setTexture2D(t[a]||Ef,r[a])}function Ov(s,t,e){const n=this.cache,i=t.length,r=vo(e,i);Ie(n,r)||(s.uniform1iv(this.addr,r),De(n,r));for(let a=0;a!==i;++a)e.setTexture3D(t[a]||Rf,r[a])}function Bv(s,t,e){const n=this.cache,i=t.length,r=vo(e,i);Ie(n,r)||(s.uniform1iv(this.addr,r),De(n,r));for(let a=0;a!==i;++a)e.setTextureCube(t[a]||Cf,r[a])}function zv(s,t,e){const n=this.cache,i=t.length,r=vo(e,i);Ie(n,r)||(s.uniform1iv(this.addr,r),De(n,r));for(let a=0;a!==i;++a)e.setTexture2DArray(t[a]||Tf,r[a])}function Hv(s){switch(s){case 5126:return Mv;case 35664:return Sv;case 35665:return wv;case 35666:return Av;case 35674:return Ev;case 35675:return Tv;case 35676:return Rv;case 5124:case 35670:return Cv;case 35667:case 35671:return Pv;case 35668:case 35672:return Lv;case 35669:case 35673:return Iv;case 5125:return Dv;case 36294:return Nv;case 36295:return Fv;case 36296:return Uv;case 35678:case 36198:case 36298:case 36306:case 35682:return kv;case 35679:case 36299:case 36307:return Ov;case 35680:case 36300:case 36308:case 36293:return Bv;case 36289:case 36303:case 36311:case 36292:return zv}}class Gv{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=yv(e.type)}}class Vv{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Hv(e.type)}}class Wv{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const i=this.seq;for(let r=0,a=i.length;r!==a;++r){const o=i[r];o.setValue(t,e[o.id],n)}}}const sc=/(\w+)(\])?(\[|\.)?/g;function _u(s,t){s.seq.push(t),s.map[t.id]=t}function qv(s,t,e){const n=s.name,i=n.length;for(sc.lastIndex=0;;){const r=sc.exec(n),a=sc.lastIndex;let o=r[1];const c=r[2]==="]",l=r[3];if(c&&(o=o|0),l===void 0||l==="["&&a+2===i){_u(e,l===void 0?new Gv(o,s,t):new Vv(o,s,t));break}else{let u=e.map[o];u===void 0&&(u=new Wv(o),_u(e,u)),e=u}}}class Ja{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){const r=t.getActiveUniform(e,i),a=t.getUniformLocation(e,r.name);qv(r,a,this)}}setValue(t,e,n,i){const r=this.map[e];r!==void 0&&r.setValue(t,n,i)}setOptional(t,e,n){const i=e[n];i!==void 0&&this.setValue(t,n,i)}static upload(t,e,n,i){for(let r=0,a=e.length;r!==a;++r){const o=e[r],c=n[o.id];c.needsUpdate!==!1&&o.setValue(t,c.value,i)}}static seqWithValue(t,e){const n=[];for(let i=0,r=t.length;i!==r;++i){const a=t[i];a.id in e&&n.push(a)}return n}}function yu(s,t,e){const n=s.createShader(t);return s.shaderSource(n,e),s.compileShader(n),n}const Xv=37297;let jv=0;function Yv(s,t){const e=s.split(`
`),n=[],i=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let a=i;a<r;a++){const o=a+1;n.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return n.join(`
`)}function Kv(s){const t=Zt.getPrimaries(Zt.workingColorSpace),e=Zt.getPrimaries(s);let n;switch(t===e?n="":t===io&&e===no?n="LinearDisplayP3ToLinearSRGB":t===no&&e===io&&(n="LinearSRGBToLinearDisplayP3"),s){case He:case go:return[n,"LinearTransferOETF"];case Fe:case Kl:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",s),[n,"LinearTransferOETF"]}}function Mu(s,t,e){const n=s.getShaderParameter(t,s.COMPILE_STATUS),i=s.getShaderInfoLog(t).trim();if(n&&i==="")return"";const r=/ERROR: 0:(\d+)/.exec(i);if(r){const a=parseInt(r[1]);return e.toUpperCase()+`

`+i+`

`+Yv(s.getShaderSource(t),a)}else return i}function $v(s,t){const e=Kv(t);return`vec4 ${s}( vec4 value ) { return ${e[0]}( ${e[1]}( value ) ); }`}function Jv(s,t){let e;switch(t){case $p:e="Linear";break;case Jp:e="Reinhard";break;case Qp:e="Cineon";break;case Zp:e="ACESFilmic";break;case em:e="AgX";break;case nm:e="Neutral";break;case tm:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+s+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const xa=new R;function Qv(){Zt.getLuminanceCoefficients(xa);const s=xa.x.toFixed(4),t=xa.y.toFixed(4),e=xa.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Zv(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Cr).join(`
`)}function tx(s){const t=[];for(const e in s){const n=s[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function ex(s,t){const e={},n=s.getProgramParameter(t,s.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const r=s.getActiveAttrib(t,i),a=r.name;let o=1;r.type===s.FLOAT_MAT2&&(o=2),r.type===s.FLOAT_MAT3&&(o=3),r.type===s.FLOAT_MAT4&&(o=4),e[a]={type:r.type,location:s.getAttribLocation(t,a),locationSize:o}}return e}function Cr(s){return s!==""}function Su(s,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function wu(s,t){return s.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const nx=/^[ \t]*#include +<([\w\d./]+)>/gm;function El(s){return s.replace(nx,sx)}const ix=new Map;function sx(s,t){let e=Bt[t];if(e===void 0){const n=ix.get(t);if(n!==void 0)e=Bt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return El(e)}const rx=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Au(s){return s.replace(rx,ax)}function ax(s,t,e,n){let i="";for(let r=parseInt(t);r<parseInt(e);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function Eu(s){let t=`precision ${s.precision} float;
	precision ${s.precision} int;
	precision ${s.precision} sampler2D;
	precision ${s.precision} samplerCube;
	precision ${s.precision} sampler3D;
	precision ${s.precision} sampler2DArray;
	precision ${s.precision} sampler2DShadow;
	precision ${s.precision} samplerCubeShadow;
	precision ${s.precision} sampler2DArrayShadow;
	precision ${s.precision} isampler2D;
	precision ${s.precision} isampler3D;
	precision ${s.precision} isamplerCube;
	precision ${s.precision} isampler2DArray;
	precision ${s.precision} usampler2D;
	precision ${s.precision} usampler3D;
	precision ${s.precision} usamplerCube;
	precision ${s.precision} usampler2DArray;
	`;return s.precision==="highp"?t+=`
#define HIGH_PRECISION`:s.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function ox(s){let t="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===Qd?t="SHADOWMAP_TYPE_PCF":s.shadowMapType===Cp?t="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===ui&&(t="SHADOWMAP_TYPE_VSM"),t}function cx(s){let t="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case Gs:case Vs:t="ENVMAP_TYPE_CUBE";break;case mo:t="ENVMAP_TYPE_CUBE_UV";break}return t}function lx(s){let t="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case Vs:t="ENVMAP_MODE_REFRACTION";break}return t}function hx(s){let t="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case Zd:t="ENVMAP_BLENDING_MULTIPLY";break;case Yp:t="ENVMAP_BLENDING_MIX";break;case Kp:t="ENVMAP_BLENDING_ADD";break}return t}function ux(s){const t=s.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function dx(s,t,e,n){const i=s.getContext(),r=e.defines;let a=e.vertexShader,o=e.fragmentShader;const c=ox(e),l=cx(e),h=lx(e),u=hx(e),d=ux(e),f=Zv(e),g=tx(r),b=i.createProgram();let m,p,y=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Cr).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Cr).join(`
`),p.length>0&&(p+=`
`)):(m=[Eu(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Cr).join(`
`),p=[Eu(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+l:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Ni?"#define TONE_MAPPING":"",e.toneMapping!==Ni?Bt.tonemapping_pars_fragment:"",e.toneMapping!==Ni?Jv("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Bt.colorspace_pars_fragment,$v("linearToOutputTexel",e.outputColorSpace),Qv(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Cr).join(`
`)),a=El(a),a=Su(a,e),a=wu(a,e),o=El(o),o=Su(o,e),o=wu(o,e),a=Au(a),o=Au(o),e.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,m=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",e.glslVersion===Vh?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Vh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const v=y+m+a,_=y+p+o,M=yu(i,i.VERTEX_SHADER,v),E=yu(i,i.FRAGMENT_SHADER,_);i.attachShader(b,M),i.attachShader(b,E),e.index0AttributeName!==void 0?i.bindAttribLocation(b,0,e.index0AttributeName):e.morphTargets===!0&&i.bindAttribLocation(b,0,"position"),i.linkProgram(b);function S(A){if(s.debug.checkShaderErrors){const U=i.getProgramInfoLog(b).trim(),B=i.getShaderInfoLog(M).trim(),O=i.getShaderInfoLog(E).trim();let X=!0,H=!0;if(i.getProgramParameter(b,i.LINK_STATUS)===!1)if(X=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(i,b,M,E);else{const J=Mu(i,M,"vertex"),k=Mu(i,E,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(b,i.VALIDATE_STATUS)+`

Material Name: `+A.name+`
Material Type: `+A.type+`

Program Info Log: `+U+`
`+J+`
`+k)}else U!==""?console.warn("THREE.WebGLProgram: Program Info Log:",U):(B===""||O==="")&&(H=!1);H&&(A.diagnostics={runnable:X,programLog:U,vertexShader:{log:B,prefix:m},fragmentShader:{log:O,prefix:p}})}i.deleteShader(M),i.deleteShader(E),C=new Ja(i,b),I=ex(i,b)}let C;this.getUniforms=function(){return C===void 0&&S(this),C};let I;this.getAttributes=function(){return I===void 0&&S(this),I};let x=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return x===!1&&(x=i.getProgramParameter(b,Xv)),x},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(b),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=jv++,this.cacheKey=t,this.usedTimes=1,this.program=b,this.vertexShader=M,this.fragmentShader=E,this}let fx=0;class px{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,i=this._getShaderStage(e),r=this._getShaderStage(n),a=this._getShaderCacheForMaterial(t);return a.has(i)===!1&&(a.add(i),i.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new mx(t),e.set(t,n)),n}}class mx{constructor(t){this.id=fx++,this.code=t,this.usedTimes=0}}function gx(s,t,e,n,i,r,a){const o=new bf,c=new px,l=new Set,h=[],u=i.logarithmicDepthBuffer,d=i.reverseDepthBuffer,f=i.vertexTextures;let g=i.precision;const b={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function m(x){return l.add(x),x===0?"uv":`uv${x}`}function p(x,A,U,B,O){const X=B.fog,H=O.geometry,J=x.isMeshStandardMaterial?B.environment:null,k=(x.isMeshStandardMaterial?e:t).get(x.envMap||J),et=k&&k.mapping===mo?k.image.height:null,st=b[x.type];x.precision!==null&&(g=i.getMaxPrecision(x.precision),g!==x.precision&&console.warn("THREE.WebGLProgram.getParameters:",x.precision,"not supported, using",g,"instead."));const rt=H.morphAttributes.position||H.morphAttributes.normal||H.morphAttributes.color,At=rt!==void 0?rt.length:0;let wt=0;H.morphAttributes.position!==void 0&&(wt=1),H.morphAttributes.normal!==void 0&&(wt=2),H.morphAttributes.color!==void 0&&(wt=3);let j,Q,at,ct;if(st){const nn=Hn[st];j=nn.vertexShader,Q=nn.fragmentShader}else j=x.vertexShader,Q=x.fragmentShader,c.update(x),at=c.getVertexShaderID(x),ct=c.getFragmentShaderID(x);const Ut=s.getRenderTarget(),Pt=O.isInstancedMesh===!0,Xt=O.isBatchedMesh===!0,he=!!x.map,jt=!!x.matcap,L=!!k,ln=!!x.aoMap,Wt=!!x.lightMap,$t=!!x.bumpMap,It=!!x.normalMap,fe=!!x.displacementMap,Ft=!!x.emissiveMap,P=!!x.metalnessMap,w=!!x.roughnessMap,z=x.anisotropy>0,K=x.clearcoat>0,Z=x.dispersion>0,Y=x.iridescence>0,yt=x.sheen>0,lt=x.transmission>0,mt=z&&!!x.anisotropyMap,Jt=K&&!!x.clearcoatMap,tt=K&&!!x.clearcoatNormalMap,gt=K&&!!x.clearcoatRoughnessMap,Dt=Y&&!!x.iridescenceMap,Nt=Y&&!!x.iridescenceThicknessMap,bt=yt&&!!x.sheenColorMap,qt=yt&&!!x.sheenRoughnessMap,kt=!!x.specularMap,de=!!x.specularColorMap,D=!!x.specularIntensityMap,ft=lt&&!!x.transmissionMap,q=lt&&!!x.thicknessMap,$=!!x.gradientMap,ut=!!x.alphaMap,pt=x.alphaTest>0,Yt=!!x.alphaHash,Re=!!x.extensions;let en=Ni;x.toneMapped&&(Ut===null||Ut.isXRRenderTarget===!0)&&(en=s.toneMapping);const ee={shaderID:st,shaderType:x.type,shaderName:x.name,vertexShader:j,fragmentShader:Q,defines:x.defines,customVertexShaderID:at,customFragmentShaderID:ct,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:g,batching:Xt,batchingColor:Xt&&O._colorsTexture!==null,instancing:Pt,instancingColor:Pt&&O.instanceColor!==null,instancingMorph:Pt&&O.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:Ut===null?s.outputColorSpace:Ut.isXRRenderTarget===!0?Ut.texture.colorSpace:He,alphaToCoverage:!!x.alphaToCoverage,map:he,matcap:jt,envMap:L,envMapMode:L&&k.mapping,envMapCubeUVHeight:et,aoMap:ln,lightMap:Wt,bumpMap:$t,normalMap:It,displacementMap:f&&fe,emissiveMap:Ft,normalMapObjectSpace:It&&x.normalMapType===cm,normalMapTangentSpace:It&&x.normalMapType===df,metalnessMap:P,roughnessMap:w,anisotropy:z,anisotropyMap:mt,clearcoat:K,clearcoatMap:Jt,clearcoatNormalMap:tt,clearcoatRoughnessMap:gt,dispersion:Z,iridescence:Y,iridescenceMap:Dt,iridescenceThicknessMap:Nt,sheen:yt,sheenColorMap:bt,sheenRoughnessMap:qt,specularMap:kt,specularColorMap:de,specularIntensityMap:D,transmission:lt,transmissionMap:ft,thicknessMap:q,gradientMap:$,opaque:x.transparent===!1&&x.blending===Fs&&x.alphaToCoverage===!1,alphaMap:ut,alphaTest:pt,alphaHash:Yt,combine:x.combine,mapUv:he&&m(x.map.channel),aoMapUv:ln&&m(x.aoMap.channel),lightMapUv:Wt&&m(x.lightMap.channel),bumpMapUv:$t&&m(x.bumpMap.channel),normalMapUv:It&&m(x.normalMap.channel),displacementMapUv:fe&&m(x.displacementMap.channel),emissiveMapUv:Ft&&m(x.emissiveMap.channel),metalnessMapUv:P&&m(x.metalnessMap.channel),roughnessMapUv:w&&m(x.roughnessMap.channel),anisotropyMapUv:mt&&m(x.anisotropyMap.channel),clearcoatMapUv:Jt&&m(x.clearcoatMap.channel),clearcoatNormalMapUv:tt&&m(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:gt&&m(x.clearcoatRoughnessMap.channel),iridescenceMapUv:Dt&&m(x.iridescenceMap.channel),iridescenceThicknessMapUv:Nt&&m(x.iridescenceThicknessMap.channel),sheenColorMapUv:bt&&m(x.sheenColorMap.channel),sheenRoughnessMapUv:qt&&m(x.sheenRoughnessMap.channel),specularMapUv:kt&&m(x.specularMap.channel),specularColorMapUv:de&&m(x.specularColorMap.channel),specularIntensityMapUv:D&&m(x.specularIntensityMap.channel),transmissionMapUv:ft&&m(x.transmissionMap.channel),thicknessMapUv:q&&m(x.thicknessMap.channel),alphaMapUv:ut&&m(x.alphaMap.channel),vertexTangents:!!H.attributes.tangent&&(It||z),vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!H.attributes.color&&H.attributes.color.itemSize===4,pointsUvs:O.isPoints===!0&&!!H.attributes.uv&&(he||ut),fog:!!X,useFog:x.fog===!0,fogExp2:!!X&&X.isFogExp2,flatShading:x.flatShading===!0,sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:u,reverseDepthBuffer:d,skinning:O.isSkinnedMesh===!0,morphTargets:H.morphAttributes.position!==void 0,morphNormals:H.morphAttributes.normal!==void 0,morphColors:H.morphAttributes.color!==void 0,morphTargetsCount:At,morphTextureStride:wt,numDirLights:A.directional.length,numPointLights:A.point.length,numSpotLights:A.spot.length,numSpotLightMaps:A.spotLightMap.length,numRectAreaLights:A.rectArea.length,numHemiLights:A.hemi.length,numDirLightShadows:A.directionalShadowMap.length,numPointLightShadows:A.pointShadowMap.length,numSpotLightShadows:A.spotShadowMap.length,numSpotLightShadowsWithMaps:A.numSpotLightShadowsWithMaps,numLightProbes:A.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:x.dithering,shadowMapEnabled:s.shadowMap.enabled&&U.length>0,shadowMapType:s.shadowMap.type,toneMapping:en,decodeVideoTexture:he&&x.map.isVideoTexture===!0&&Zt.getTransfer(x.map.colorSpace)===me,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===an,flipSided:x.side===tn,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionClipCullDistance:Re&&x.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Re&&x.extensions.multiDraw===!0||Xt)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()};return ee.vertexUv1s=l.has(1),ee.vertexUv2s=l.has(2),ee.vertexUv3s=l.has(3),l.clear(),ee}function y(x){const A=[];if(x.shaderID?A.push(x.shaderID):(A.push(x.customVertexShaderID),A.push(x.customFragmentShaderID)),x.defines!==void 0)for(const U in x.defines)A.push(U),A.push(x.defines[U]);return x.isRawShaderMaterial===!1&&(v(A,x),_(A,x),A.push(s.outputColorSpace)),A.push(x.customProgramCacheKey),A.join()}function v(x,A){x.push(A.precision),x.push(A.outputColorSpace),x.push(A.envMapMode),x.push(A.envMapCubeUVHeight),x.push(A.mapUv),x.push(A.alphaMapUv),x.push(A.lightMapUv),x.push(A.aoMapUv),x.push(A.bumpMapUv),x.push(A.normalMapUv),x.push(A.displacementMapUv),x.push(A.emissiveMapUv),x.push(A.metalnessMapUv),x.push(A.roughnessMapUv),x.push(A.anisotropyMapUv),x.push(A.clearcoatMapUv),x.push(A.clearcoatNormalMapUv),x.push(A.clearcoatRoughnessMapUv),x.push(A.iridescenceMapUv),x.push(A.iridescenceThicknessMapUv),x.push(A.sheenColorMapUv),x.push(A.sheenRoughnessMapUv),x.push(A.specularMapUv),x.push(A.specularColorMapUv),x.push(A.specularIntensityMapUv),x.push(A.transmissionMapUv),x.push(A.thicknessMapUv),x.push(A.combine),x.push(A.fogExp2),x.push(A.sizeAttenuation),x.push(A.morphTargetsCount),x.push(A.morphAttributeCount),x.push(A.numDirLights),x.push(A.numPointLights),x.push(A.numSpotLights),x.push(A.numSpotLightMaps),x.push(A.numHemiLights),x.push(A.numRectAreaLights),x.push(A.numDirLightShadows),x.push(A.numPointLightShadows),x.push(A.numSpotLightShadows),x.push(A.numSpotLightShadowsWithMaps),x.push(A.numLightProbes),x.push(A.shadowMapType),x.push(A.toneMapping),x.push(A.numClippingPlanes),x.push(A.numClipIntersection),x.push(A.depthPacking)}function _(x,A){o.disableAll(),A.supportsVertexTextures&&o.enable(0),A.instancing&&o.enable(1),A.instancingColor&&o.enable(2),A.instancingMorph&&o.enable(3),A.matcap&&o.enable(4),A.envMap&&o.enable(5),A.normalMapObjectSpace&&o.enable(6),A.normalMapTangentSpace&&o.enable(7),A.clearcoat&&o.enable(8),A.iridescence&&o.enable(9),A.alphaTest&&o.enable(10),A.vertexColors&&o.enable(11),A.vertexAlphas&&o.enable(12),A.vertexUv1s&&o.enable(13),A.vertexUv2s&&o.enable(14),A.vertexUv3s&&o.enable(15),A.vertexTangents&&o.enable(16),A.anisotropy&&o.enable(17),A.alphaHash&&o.enable(18),A.batching&&o.enable(19),A.dispersion&&o.enable(20),A.batchingColor&&o.enable(21),x.push(o.mask),o.disableAll(),A.fog&&o.enable(0),A.useFog&&o.enable(1),A.flatShading&&o.enable(2),A.logarithmicDepthBuffer&&o.enable(3),A.reverseDepthBuffer&&o.enable(4),A.skinning&&o.enable(5),A.morphTargets&&o.enable(6),A.morphNormals&&o.enable(7),A.morphColors&&o.enable(8),A.premultipliedAlpha&&o.enable(9),A.shadowMapEnabled&&o.enable(10),A.doubleSided&&o.enable(11),A.flipSided&&o.enable(12),A.useDepthPacking&&o.enable(13),A.dithering&&o.enable(14),A.transmission&&o.enable(15),A.sheen&&o.enable(16),A.opaque&&o.enable(17),A.pointsUvs&&o.enable(18),A.decodeVideoTexture&&o.enable(19),A.alphaToCoverage&&o.enable(20),x.push(o.mask)}function M(x){const A=b[x.type];let U;if(A){const B=Hn[A];U=Zm.clone(B.uniforms)}else U=x.uniforms;return U}function E(x,A){let U;for(let B=0,O=h.length;B<O;B++){const X=h[B];if(X.cacheKey===A){U=X,++U.usedTimes;break}}return U===void 0&&(U=new dx(s,A,x,r),h.push(U)),U}function S(x){if(--x.usedTimes===0){const A=h.indexOf(x);h[A]=h[h.length-1],h.pop(),x.destroy()}}function C(x){c.remove(x)}function I(){c.dispose()}return{getParameters:p,getProgramCacheKey:y,getUniforms:M,acquireProgram:E,releaseProgram:S,releaseShaderCache:C,programs:h,dispose:I}}function bx(){let s=new WeakMap;function t(a){return s.has(a)}function e(a){let o=s.get(a);return o===void 0&&(o={},s.set(a,o)),o}function n(a){s.delete(a)}function i(a,o,c){s.get(a)[o]=c}function r(){s=new WeakMap}return{has:t,get:e,remove:n,update:i,dispose:r}}function vx(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.material.id!==t.material.id?s.material.id-t.material.id:s.z!==t.z?s.z-t.z:s.id-t.id}function Tu(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.z!==t.z?t.z-s.z:s.id-t.id}function Ru(){const s=[];let t=0;const e=[],n=[],i=[];function r(){t=0,e.length=0,n.length=0,i.length=0}function a(u,d,f,g,b,m){let p=s[t];return p===void 0?(p={id:u.id,object:u,geometry:d,material:f,groupOrder:g,renderOrder:u.renderOrder,z:b,group:m},s[t]=p):(p.id=u.id,p.object=u,p.geometry=d,p.material=f,p.groupOrder=g,p.renderOrder=u.renderOrder,p.z=b,p.group=m),t++,p}function o(u,d,f,g,b,m){const p=a(u,d,f,g,b,m);f.transmission>0?n.push(p):f.transparent===!0?i.push(p):e.push(p)}function c(u,d,f,g,b,m){const p=a(u,d,f,g,b,m);f.transmission>0?n.unshift(p):f.transparent===!0?i.unshift(p):e.unshift(p)}function l(u,d){e.length>1&&e.sort(u||vx),n.length>1&&n.sort(d||Tu),i.length>1&&i.sort(d||Tu)}function h(){for(let u=t,d=s.length;u<d;u++){const f=s[u];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:e,transmissive:n,transparent:i,init:r,push:o,unshift:c,finish:h,sort:l}}function xx(){let s=new WeakMap;function t(n,i){const r=s.get(n);let a;return r===void 0?(a=new Ru,s.set(n,[a])):i>=r.length?(a=new Ru,r.push(a)):a=r[i],a}function e(){s=new WeakMap}return{get:t,dispose:e}}function _x(){const s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new R,color:new Et};break;case"SpotLight":e={position:new R,direction:new R,color:new Et,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new R,color:new Et,distance:0,decay:0};break;case"HemisphereLight":e={direction:new R,skyColor:new Et,groundColor:new Et};break;case"RectAreaLight":e={color:new Et,position:new R,halfWidth:new R,halfHeight:new R};break}return s[t.id]=e,e}}}function yx(){const s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new it};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new it};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new it,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[t.id]=e,e}}}let Mx=0;function Sx(s,t){return(t.castShadow?2:0)-(s.castShadow?2:0)+(t.map?1:0)-(s.map?1:0)}function wx(s){const t=new _x,e=yx(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new R);const i=new R,r=new _t,a=new _t;function o(l){let h=0,u=0,d=0;for(let I=0;I<9;I++)n.probe[I].set(0,0,0);let f=0,g=0,b=0,m=0,p=0,y=0,v=0,_=0,M=0,E=0,S=0;l.sort(Sx);for(let I=0,x=l.length;I<x;I++){const A=l[I],U=A.color,B=A.intensity,O=A.distance,X=A.shadow&&A.shadow.map?A.shadow.map.texture:null;if(A.isAmbientLight)h+=U.r*B,u+=U.g*B,d+=U.b*B;else if(A.isLightProbe){for(let H=0;H<9;H++)n.probe[H].addScaledVector(A.sh.coefficients[H],B);S++}else if(A.isDirectionalLight){const H=t.get(A);if(H.color.copy(A.color).multiplyScalar(A.intensity),A.castShadow){const J=A.shadow,k=e.get(A);k.shadowIntensity=J.intensity,k.shadowBias=J.bias,k.shadowNormalBias=J.normalBias,k.shadowRadius=J.radius,k.shadowMapSize=J.mapSize,n.directionalShadow[f]=k,n.directionalShadowMap[f]=X,n.directionalShadowMatrix[f]=A.shadow.matrix,y++}n.directional[f]=H,f++}else if(A.isSpotLight){const H=t.get(A);H.position.setFromMatrixPosition(A.matrixWorld),H.color.copy(U).multiplyScalar(B),H.distance=O,H.coneCos=Math.cos(A.angle),H.penumbraCos=Math.cos(A.angle*(1-A.penumbra)),H.decay=A.decay,n.spot[b]=H;const J=A.shadow;if(A.map&&(n.spotLightMap[M]=A.map,M++,J.updateMatrices(A),A.castShadow&&E++),n.spotLightMatrix[b]=J.matrix,A.castShadow){const k=e.get(A);k.shadowIntensity=J.intensity,k.shadowBias=J.bias,k.shadowNormalBias=J.normalBias,k.shadowRadius=J.radius,k.shadowMapSize=J.mapSize,n.spotShadow[b]=k,n.spotShadowMap[b]=X,_++}b++}else if(A.isRectAreaLight){const H=t.get(A);H.color.copy(U).multiplyScalar(B),H.halfWidth.set(A.width*.5,0,0),H.halfHeight.set(0,A.height*.5,0),n.rectArea[m]=H,m++}else if(A.isPointLight){const H=t.get(A);if(H.color.copy(A.color).multiplyScalar(A.intensity),H.distance=A.distance,H.decay=A.decay,A.castShadow){const J=A.shadow,k=e.get(A);k.shadowIntensity=J.intensity,k.shadowBias=J.bias,k.shadowNormalBias=J.normalBias,k.shadowRadius=J.radius,k.shadowMapSize=J.mapSize,k.shadowCameraNear=J.camera.near,k.shadowCameraFar=J.camera.far,n.pointShadow[g]=k,n.pointShadowMap[g]=X,n.pointShadowMatrix[g]=A.shadow.matrix,v++}n.point[g]=H,g++}else if(A.isHemisphereLight){const H=t.get(A);H.skyColor.copy(A.color).multiplyScalar(B),H.groundColor.copy(A.groundColor).multiplyScalar(B),n.hemi[p]=H,p++}}m>0&&(s.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=ot.LTC_FLOAT_1,n.rectAreaLTC2=ot.LTC_FLOAT_2):(n.rectAreaLTC1=ot.LTC_HALF_1,n.rectAreaLTC2=ot.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=d;const C=n.hash;(C.directionalLength!==f||C.pointLength!==g||C.spotLength!==b||C.rectAreaLength!==m||C.hemiLength!==p||C.numDirectionalShadows!==y||C.numPointShadows!==v||C.numSpotShadows!==_||C.numSpotMaps!==M||C.numLightProbes!==S)&&(n.directional.length=f,n.spot.length=b,n.rectArea.length=m,n.point.length=g,n.hemi.length=p,n.directionalShadow.length=y,n.directionalShadowMap.length=y,n.pointShadow.length=v,n.pointShadowMap.length=v,n.spotShadow.length=_,n.spotShadowMap.length=_,n.directionalShadowMatrix.length=y,n.pointShadowMatrix.length=v,n.spotLightMatrix.length=_+M-E,n.spotLightMap.length=M,n.numSpotLightShadowsWithMaps=E,n.numLightProbes=S,C.directionalLength=f,C.pointLength=g,C.spotLength=b,C.rectAreaLength=m,C.hemiLength=p,C.numDirectionalShadows=y,C.numPointShadows=v,C.numSpotShadows=_,C.numSpotMaps=M,C.numLightProbes=S,n.version=Mx++)}function c(l,h){let u=0,d=0,f=0,g=0,b=0;const m=h.matrixWorldInverse;for(let p=0,y=l.length;p<y;p++){const v=l[p];if(v.isDirectionalLight){const _=n.directional[u];_.direction.setFromMatrixPosition(v.matrixWorld),i.setFromMatrixPosition(v.target.matrixWorld),_.direction.sub(i),_.direction.transformDirection(m),u++}else if(v.isSpotLight){const _=n.spot[f];_.position.setFromMatrixPosition(v.matrixWorld),_.position.applyMatrix4(m),_.direction.setFromMatrixPosition(v.matrixWorld),i.setFromMatrixPosition(v.target.matrixWorld),_.direction.sub(i),_.direction.transformDirection(m),f++}else if(v.isRectAreaLight){const _=n.rectArea[g];_.position.setFromMatrixPosition(v.matrixWorld),_.position.applyMatrix4(m),a.identity(),r.copy(v.matrixWorld),r.premultiply(m),a.extractRotation(r),_.halfWidth.set(v.width*.5,0,0),_.halfHeight.set(0,v.height*.5,0),_.halfWidth.applyMatrix4(a),_.halfHeight.applyMatrix4(a),g++}else if(v.isPointLight){const _=n.point[d];_.position.setFromMatrixPosition(v.matrixWorld),_.position.applyMatrix4(m),d++}else if(v.isHemisphereLight){const _=n.hemi[b];_.direction.setFromMatrixPosition(v.matrixWorld),_.direction.transformDirection(m),b++}}}return{setup:o,setupView:c,state:n}}function Cu(s){const t=new wx(s),e=[],n=[];function i(h){l.camera=h,e.length=0,n.length=0}function r(h){e.push(h)}function a(h){n.push(h)}function o(){t.setup(e)}function c(h){t.setupView(e,h)}const l={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:i,state:l,setupLights:o,setupLightsView:c,pushLight:r,pushShadow:a}}function Ax(s){let t=new WeakMap;function e(i,r=0){const a=t.get(i);let o;return a===void 0?(o=new Cu(s),t.set(i,[o])):r>=a.length?(o=new Cu(s),a.push(o)):o=a[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}class Ex extends Un{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=am,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class Tx extends Un{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const Rx=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Cx=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function Px(s,t,e){let n=new Jl;const i=new it,r=new it,a=new ne,o=new Ex({depthPacking:om}),c=new Tx,l={},h=e.maxTextureSize,u={[xi]:tn,[tn]:xi,[an]:an},d=new Rn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new it},radius:{value:4}},vertexShader:Rx,fragmentShader:Cx}),f=d.clone();f.defines.HORIZONTAL_PASS=1;const g=new _e;g.setAttribute("position",new Te(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const b=new Qt(g,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Qd;let p=this.type;this.render=function(E,S,C){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||E.length===0)return;const I=s.getRenderTarget(),x=s.getActiveCubeFace(),A=s.getActiveMipmapLevel(),U=s.state;U.setBlending(Di),U.buffers.color.setClear(1,1,1,1),U.buffers.depth.setTest(!0),U.setScissorTest(!1);const B=p!==ui&&this.type===ui,O=p===ui&&this.type!==ui;for(let X=0,H=E.length;X<H;X++){const J=E[X],k=J.shadow;if(k===void 0){console.warn("THREE.WebGLShadowMap:",J,"has no shadow.");continue}if(k.autoUpdate===!1&&k.needsUpdate===!1)continue;i.copy(k.mapSize);const et=k.getFrameExtents();if(i.multiply(et),r.copy(k.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(r.x=Math.floor(h/et.x),i.x=r.x*et.x,k.mapSize.x=r.x),i.y>h&&(r.y=Math.floor(h/et.y),i.y=r.y*et.y,k.mapSize.y=r.y)),k.map===null||B===!0||O===!0){const rt=this.type!==ui?{minFilter:Je,magFilter:Je}:{};k.map!==null&&k.map.dispose(),k.map=new ns(i.x,i.y,rt),k.map.texture.name=J.name+".shadowMap",k.camera.updateProjectionMatrix()}s.setRenderTarget(k.map),s.clear();const st=k.getViewportCount();for(let rt=0;rt<st;rt++){const At=k.getViewport(rt);a.set(r.x*At.x,r.y*At.y,r.x*At.z,r.y*At.w),U.viewport(a),k.updateMatrices(J,rt),n=k.getFrustum(),_(S,C,k.camera,J,this.type)}k.isPointLightShadow!==!0&&this.type===ui&&y(k,C),k.needsUpdate=!1}p=this.type,m.needsUpdate=!1,s.setRenderTarget(I,x,A)};function y(E,S){const C=t.update(b);d.defines.VSM_SAMPLES!==E.blurSamples&&(d.defines.VSM_SAMPLES=E.blurSamples,f.defines.VSM_SAMPLES=E.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),E.mapPass===null&&(E.mapPass=new ns(i.x,i.y)),d.uniforms.shadow_pass.value=E.map.texture,d.uniforms.resolution.value=E.mapSize,d.uniforms.radius.value=E.radius,s.setRenderTarget(E.mapPass),s.clear(),s.renderBufferDirect(S,null,C,d,b,null),f.uniforms.shadow_pass.value=E.mapPass.texture,f.uniforms.resolution.value=E.mapSize,f.uniforms.radius.value=E.radius,s.setRenderTarget(E.map),s.clear(),s.renderBufferDirect(S,null,C,f,b,null)}function v(E,S,C,I){let x=null;const A=C.isPointLight===!0?E.customDistanceMaterial:E.customDepthMaterial;if(A!==void 0)x=A;else if(x=C.isPointLight===!0?c:o,s.localClippingEnabled&&S.clipShadows===!0&&Array.isArray(S.clippingPlanes)&&S.clippingPlanes.length!==0||S.displacementMap&&S.displacementScale!==0||S.alphaMap&&S.alphaTest>0||S.map&&S.alphaTest>0){const U=x.uuid,B=S.uuid;let O=l[U];O===void 0&&(O={},l[U]=O);let X=O[B];X===void 0&&(X=x.clone(),O[B]=X,S.addEventListener("dispose",M)),x=X}if(x.visible=S.visible,x.wireframe=S.wireframe,I===ui?x.side=S.shadowSide!==null?S.shadowSide:S.side:x.side=S.shadowSide!==null?S.shadowSide:u[S.side],x.alphaMap=S.alphaMap,x.alphaTest=S.alphaTest,x.map=S.map,x.clipShadows=S.clipShadows,x.clippingPlanes=S.clippingPlanes,x.clipIntersection=S.clipIntersection,x.displacementMap=S.displacementMap,x.displacementScale=S.displacementScale,x.displacementBias=S.displacementBias,x.wireframeLinewidth=S.wireframeLinewidth,x.linewidth=S.linewidth,C.isPointLight===!0&&x.isMeshDistanceMaterial===!0){const U=s.properties.get(x);U.light=C}return x}function _(E,S,C,I,x){if(E.visible===!1)return;if(E.layers.test(S.layers)&&(E.isMesh||E.isLine||E.isPoints)&&(E.castShadow||E.receiveShadow&&x===ui)&&(!E.frustumCulled||n.intersectsObject(E))){E.modelViewMatrix.multiplyMatrices(C.matrixWorldInverse,E.matrixWorld);const B=t.update(E),O=E.material;if(Array.isArray(O)){const X=B.groups;for(let H=0,J=X.length;H<J;H++){const k=X[H],et=O[k.materialIndex];if(et&&et.visible){const st=v(E,et,I,x);E.onBeforeShadow(s,E,S,C,B,st,k),s.renderBufferDirect(C,null,B,st,E,k),E.onAfterShadow(s,E,S,C,B,st,k)}}}else if(O.visible){const X=v(E,O,I,x);E.onBeforeShadow(s,E,S,C,B,X,null),s.renderBufferDirect(C,null,B,X,E,null),E.onAfterShadow(s,E,S,C,B,X,null)}}const U=E.children;for(let B=0,O=U.length;B<O;B++)_(U[B],S,C,I,x)}function M(E){E.target.removeEventListener("dispose",M);for(const C in l){const I=l[C],x=E.target.uuid;x in I&&(I[x].dispose(),delete I[x])}}}const Lx={[Gc]:Vc,[Wc]:jc,[qc]:Yc,[Hs]:Xc,[Vc]:Gc,[jc]:Wc,[Yc]:qc,[Xc]:Hs};function Ix(s){function t(){let D=!1;const ft=new ne;let q=null;const $=new ne(0,0,0,0);return{setMask:function(ut){q!==ut&&!D&&(s.colorMask(ut,ut,ut,ut),q=ut)},setLocked:function(ut){D=ut},setClear:function(ut,pt,Yt,Re,en){en===!0&&(ut*=Re,pt*=Re,Yt*=Re),ft.set(ut,pt,Yt,Re),$.equals(ft)===!1&&(s.clearColor(ut,pt,Yt,Re),$.copy(ft))},reset:function(){D=!1,q=null,$.set(-1,0,0,0)}}}function e(){let D=!1,ft=!1,q=null,$=null,ut=null;return{setReversed:function(pt){ft=pt},setTest:function(pt){pt?at(s.DEPTH_TEST):ct(s.DEPTH_TEST)},setMask:function(pt){q!==pt&&!D&&(s.depthMask(pt),q=pt)},setFunc:function(pt){if(ft&&(pt=Lx[pt]),$!==pt){switch(pt){case Gc:s.depthFunc(s.NEVER);break;case Vc:s.depthFunc(s.ALWAYS);break;case Wc:s.depthFunc(s.LESS);break;case Hs:s.depthFunc(s.LEQUAL);break;case qc:s.depthFunc(s.EQUAL);break;case Xc:s.depthFunc(s.GEQUAL);break;case jc:s.depthFunc(s.GREATER);break;case Yc:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}$=pt}},setLocked:function(pt){D=pt},setClear:function(pt){ut!==pt&&(s.clearDepth(pt),ut=pt)},reset:function(){D=!1,q=null,$=null,ut=null}}}function n(){let D=!1,ft=null,q=null,$=null,ut=null,pt=null,Yt=null,Re=null,en=null;return{setTest:function(ee){D||(ee?at(s.STENCIL_TEST):ct(s.STENCIL_TEST))},setMask:function(ee){ft!==ee&&!D&&(s.stencilMask(ee),ft=ee)},setFunc:function(ee,nn,ni){(q!==ee||$!==nn||ut!==ni)&&(s.stencilFunc(ee,nn,ni),q=ee,$=nn,ut=ni)},setOp:function(ee,nn,ni){(pt!==ee||Yt!==nn||Re!==ni)&&(s.stencilOp(ee,nn,ni),pt=ee,Yt=nn,Re=ni)},setLocked:function(ee){D=ee},setClear:function(ee){en!==ee&&(s.clearStencil(ee),en=ee)},reset:function(){D=!1,ft=null,q=null,$=null,ut=null,pt=null,Yt=null,Re=null,en=null}}}const i=new t,r=new e,a=new n,o=new WeakMap,c=new WeakMap;let l={},h={},u=new WeakMap,d=[],f=null,g=!1,b=null,m=null,p=null,y=null,v=null,_=null,M=null,E=new Et(0,0,0),S=0,C=!1,I=null,x=null,A=null,U=null,B=null;const O=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let X=!1,H=0;const J=s.getParameter(s.VERSION);J.indexOf("WebGL")!==-1?(H=parseFloat(/^WebGL (\d)/.exec(J)[1]),X=H>=1):J.indexOf("OpenGL ES")!==-1&&(H=parseFloat(/^OpenGL ES (\d)/.exec(J)[1]),X=H>=2);let k=null,et={};const st=s.getParameter(s.SCISSOR_BOX),rt=s.getParameter(s.VIEWPORT),At=new ne().fromArray(st),wt=new ne().fromArray(rt);function j(D,ft,q,$){const ut=new Uint8Array(4),pt=s.createTexture();s.bindTexture(D,pt),s.texParameteri(D,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(D,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let Yt=0;Yt<q;Yt++)D===s.TEXTURE_3D||D===s.TEXTURE_2D_ARRAY?s.texImage3D(ft,0,s.RGBA,1,1,$,0,s.RGBA,s.UNSIGNED_BYTE,ut):s.texImage2D(ft+Yt,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,ut);return pt}const Q={};Q[s.TEXTURE_2D]=j(s.TEXTURE_2D,s.TEXTURE_2D,1),Q[s.TEXTURE_CUBE_MAP]=j(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),Q[s.TEXTURE_2D_ARRAY]=j(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),Q[s.TEXTURE_3D]=j(s.TEXTURE_3D,s.TEXTURE_3D,1,1),i.setClear(0,0,0,1),r.setClear(1),a.setClear(0),at(s.DEPTH_TEST),r.setFunc(Hs),Wt(!1),$t(Fh),at(s.CULL_FACE),L(Di);function at(D){l[D]!==!0&&(s.enable(D),l[D]=!0)}function ct(D){l[D]!==!1&&(s.disable(D),l[D]=!1)}function Ut(D,ft){return h[D]!==ft?(s.bindFramebuffer(D,ft),h[D]=ft,D===s.DRAW_FRAMEBUFFER&&(h[s.FRAMEBUFFER]=ft),D===s.FRAMEBUFFER&&(h[s.DRAW_FRAMEBUFFER]=ft),!0):!1}function Pt(D,ft){let q=d,$=!1;if(D){q=u.get(ft),q===void 0&&(q=[],u.set(ft,q));const ut=D.textures;if(q.length!==ut.length||q[0]!==s.COLOR_ATTACHMENT0){for(let pt=0,Yt=ut.length;pt<Yt;pt++)q[pt]=s.COLOR_ATTACHMENT0+pt;q.length=ut.length,$=!0}}else q[0]!==s.BACK&&(q[0]=s.BACK,$=!0);$&&s.drawBuffers(q)}function Xt(D){return f!==D?(s.useProgram(D),f=D,!0):!1}const he={[$i]:s.FUNC_ADD,[Lp]:s.FUNC_SUBTRACT,[Ip]:s.FUNC_REVERSE_SUBTRACT};he[Dp]=s.MIN,he[Np]=s.MAX;const jt={[Fp]:s.ZERO,[Up]:s.ONE,[kp]:s.SRC_COLOR,[zc]:s.SRC_ALPHA,[Vp]:s.SRC_ALPHA_SATURATE,[Hp]:s.DST_COLOR,[Bp]:s.DST_ALPHA,[Op]:s.ONE_MINUS_SRC_COLOR,[Hc]:s.ONE_MINUS_SRC_ALPHA,[Gp]:s.ONE_MINUS_DST_COLOR,[zp]:s.ONE_MINUS_DST_ALPHA,[Wp]:s.CONSTANT_COLOR,[qp]:s.ONE_MINUS_CONSTANT_COLOR,[Xp]:s.CONSTANT_ALPHA,[jp]:s.ONE_MINUS_CONSTANT_ALPHA};function L(D,ft,q,$,ut,pt,Yt,Re,en,ee){if(D===Di){g===!0&&(ct(s.BLEND),g=!1);return}if(g===!1&&(at(s.BLEND),g=!0),D!==Pp){if(D!==b||ee!==C){if((m!==$i||v!==$i)&&(s.blendEquation(s.FUNC_ADD),m=$i,v=$i),ee)switch(D){case Fs:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Pr:s.blendFunc(s.ONE,s.ONE);break;case Uh:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case kh:s.blendFuncSeparate(s.ZERO,s.SRC_COLOR,s.ZERO,s.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}else switch(D){case Fs:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Pr:s.blendFunc(s.SRC_ALPHA,s.ONE);break;case Uh:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case kh:s.blendFunc(s.ZERO,s.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}p=null,y=null,_=null,M=null,E.set(0,0,0),S=0,b=D,C=ee}return}ut=ut||ft,pt=pt||q,Yt=Yt||$,(ft!==m||ut!==v)&&(s.blendEquationSeparate(he[ft],he[ut]),m=ft,v=ut),(q!==p||$!==y||pt!==_||Yt!==M)&&(s.blendFuncSeparate(jt[q],jt[$],jt[pt],jt[Yt]),p=q,y=$,_=pt,M=Yt),(Re.equals(E)===!1||en!==S)&&(s.blendColor(Re.r,Re.g,Re.b,en),E.copy(Re),S=en),b=D,C=!1}function ln(D,ft){D.side===an?ct(s.CULL_FACE):at(s.CULL_FACE);let q=D.side===tn;ft&&(q=!q),Wt(q),D.blending===Fs&&D.transparent===!1?L(Di):L(D.blending,D.blendEquation,D.blendSrc,D.blendDst,D.blendEquationAlpha,D.blendSrcAlpha,D.blendDstAlpha,D.blendColor,D.blendAlpha,D.premultipliedAlpha),r.setFunc(D.depthFunc),r.setTest(D.depthTest),r.setMask(D.depthWrite),i.setMask(D.colorWrite);const $=D.stencilWrite;a.setTest($),$&&(a.setMask(D.stencilWriteMask),a.setFunc(D.stencilFunc,D.stencilRef,D.stencilFuncMask),a.setOp(D.stencilFail,D.stencilZFail,D.stencilZPass)),fe(D.polygonOffset,D.polygonOffsetFactor,D.polygonOffsetUnits),D.alphaToCoverage===!0?at(s.SAMPLE_ALPHA_TO_COVERAGE):ct(s.SAMPLE_ALPHA_TO_COVERAGE)}function Wt(D){I!==D&&(D?s.frontFace(s.CW):s.frontFace(s.CCW),I=D)}function $t(D){D!==Tp?(at(s.CULL_FACE),D!==x&&(D===Fh?s.cullFace(s.BACK):D===Rp?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):ct(s.CULL_FACE),x=D}function It(D){D!==A&&(X&&s.lineWidth(D),A=D)}function fe(D,ft,q){D?(at(s.POLYGON_OFFSET_FILL),(U!==ft||B!==q)&&(s.polygonOffset(ft,q),U=ft,B=q)):ct(s.POLYGON_OFFSET_FILL)}function Ft(D){D?at(s.SCISSOR_TEST):ct(s.SCISSOR_TEST)}function P(D){D===void 0&&(D=s.TEXTURE0+O-1),k!==D&&(s.activeTexture(D),k=D)}function w(D,ft,q){q===void 0&&(k===null?q=s.TEXTURE0+O-1:q=k);let $=et[q];$===void 0&&($={type:void 0,texture:void 0},et[q]=$),($.type!==D||$.texture!==ft)&&(k!==q&&(s.activeTexture(q),k=q),s.bindTexture(D,ft||Q[D]),$.type=D,$.texture=ft)}function z(){const D=et[k];D!==void 0&&D.type!==void 0&&(s.bindTexture(D.type,null),D.type=void 0,D.texture=void 0)}function K(){try{s.compressedTexImage2D.apply(s,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Z(){try{s.compressedTexImage3D.apply(s,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Y(){try{s.texSubImage2D.apply(s,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function yt(){try{s.texSubImage3D.apply(s,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function lt(){try{s.compressedTexSubImage2D.apply(s,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function mt(){try{s.compressedTexSubImage3D.apply(s,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Jt(){try{s.texStorage2D.apply(s,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function tt(){try{s.texStorage3D.apply(s,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function gt(){try{s.texImage2D.apply(s,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Dt(){try{s.texImage3D.apply(s,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Nt(D){At.equals(D)===!1&&(s.scissor(D.x,D.y,D.z,D.w),At.copy(D))}function bt(D){wt.equals(D)===!1&&(s.viewport(D.x,D.y,D.z,D.w),wt.copy(D))}function qt(D,ft){let q=c.get(ft);q===void 0&&(q=new WeakMap,c.set(ft,q));let $=q.get(D);$===void 0&&($=s.getUniformBlockIndex(ft,D.name),q.set(D,$))}function kt(D,ft){const $=c.get(ft).get(D);o.get(ft)!==$&&(s.uniformBlockBinding(ft,$,D.__bindingPointIndex),o.set(ft,$))}function de(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),l={},k=null,et={},h={},u=new WeakMap,d=[],f=null,g=!1,b=null,m=null,p=null,y=null,v=null,_=null,M=null,E=new Et(0,0,0),S=0,C=!1,I=null,x=null,A=null,U=null,B=null,At.set(0,0,s.canvas.width,s.canvas.height),wt.set(0,0,s.canvas.width,s.canvas.height),i.reset(),r.reset(),a.reset()}return{buffers:{color:i,depth:r,stencil:a},enable:at,disable:ct,bindFramebuffer:Ut,drawBuffers:Pt,useProgram:Xt,setBlending:L,setMaterial:ln,setFlipSided:Wt,setCullFace:$t,setLineWidth:It,setPolygonOffset:fe,setScissorTest:Ft,activeTexture:P,bindTexture:w,unbindTexture:z,compressedTexImage2D:K,compressedTexImage3D:Z,texImage2D:gt,texImage3D:Dt,updateUBOMapping:qt,uniformBlockBinding:kt,texStorage2D:Jt,texStorage3D:tt,texSubImage2D:Y,texSubImage3D:yt,compressedTexSubImage2D:lt,compressedTexSubImage3D:mt,scissor:Nt,viewport:bt,reset:de}}function Pu(s,t,e,n){const i=Dx(n);switch(e){case af:return s*t;case cf:return s*t;case lf:return s*t*2;case Wl:return s*t/i.components*i.byteLength;case ql:return s*t/i.components*i.byteLength;case Xl:return s*t*2/i.components*i.byteLength;case jl:return s*t*2/i.components*i.byteLength;case of:return s*t*3/i.components*i.byteLength;case En:return s*t*4/i.components*i.byteLength;case Yl:return s*t*4/i.components*i.byteLength;case qa:case Xa:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case ja:case Ya:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case Qc:case tl:return Math.max(s,16)*Math.max(t,8)/4;case Jc:case Zc:return Math.max(s,8)*Math.max(t,8)/2;case el:case nl:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case il:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case sl:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case rl:return Math.floor((s+4)/5)*Math.floor((t+3)/4)*16;case al:return Math.floor((s+4)/5)*Math.floor((t+4)/5)*16;case ol:return Math.floor((s+5)/6)*Math.floor((t+4)/5)*16;case cl:return Math.floor((s+5)/6)*Math.floor((t+5)/6)*16;case ll:return Math.floor((s+7)/8)*Math.floor((t+4)/5)*16;case hl:return Math.floor((s+7)/8)*Math.floor((t+5)/6)*16;case ul:return Math.floor((s+7)/8)*Math.floor((t+7)/8)*16;case dl:return Math.floor((s+9)/10)*Math.floor((t+4)/5)*16;case fl:return Math.floor((s+9)/10)*Math.floor((t+5)/6)*16;case pl:return Math.floor((s+9)/10)*Math.floor((t+7)/8)*16;case ml:return Math.floor((s+9)/10)*Math.floor((t+9)/10)*16;case gl:return Math.floor((s+11)/12)*Math.floor((t+9)/10)*16;case bl:return Math.floor((s+11)/12)*Math.floor((t+11)/12)*16;case Ka:case vl:case xl:return Math.ceil(s/4)*Math.ceil(t/4)*16;case hf:case _l:return Math.ceil(s/4)*Math.ceil(t/4)*8;case yl:case Ml:return Math.ceil(s/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function Dx(s){switch(s){case Kn:case nf:return{byteLength:1,components:1};case Br:case sf:case Kr:return{byteLength:2,components:1};case Gl:case Vl:return{byteLength:2,components:4};case es:case Hl:case Nn:return{byteLength:4,components:1};case rf:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}function Nx(s,t,e,n,i,r,a){const o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new it,h=new WeakMap;let u;const d=new WeakMap;let f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(P,w){return f?new OffscreenCanvas(P,w):Gr("canvas")}function b(P,w,z){let K=1;const Z=Ft(P);if((Z.width>z||Z.height>z)&&(K=z/Math.max(Z.width,Z.height)),K<1)if(typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&P instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&P instanceof ImageBitmap||typeof VideoFrame<"u"&&P instanceof VideoFrame){const Y=Math.floor(K*Z.width),yt=Math.floor(K*Z.height);u===void 0&&(u=g(Y,yt));const lt=w?g(Y,yt):u;return lt.width=Y,lt.height=yt,lt.getContext("2d").drawImage(P,0,0,Y,yt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+Z.width+"x"+Z.height+") to ("+Y+"x"+yt+")."),lt}else return"data"in P&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+Z.width+"x"+Z.height+")."),P;return P}function m(P){return P.generateMipmaps&&P.minFilter!==Je&&P.minFilter!==on}function p(P){s.generateMipmap(P)}function y(P,w,z,K,Z=!1){if(P!==null){if(s[P]!==void 0)return s[P];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+P+"'")}let Y=w;if(w===s.RED&&(z===s.FLOAT&&(Y=s.R32F),z===s.HALF_FLOAT&&(Y=s.R16F),z===s.UNSIGNED_BYTE&&(Y=s.R8)),w===s.RED_INTEGER&&(z===s.UNSIGNED_BYTE&&(Y=s.R8UI),z===s.UNSIGNED_SHORT&&(Y=s.R16UI),z===s.UNSIGNED_INT&&(Y=s.R32UI),z===s.BYTE&&(Y=s.R8I),z===s.SHORT&&(Y=s.R16I),z===s.INT&&(Y=s.R32I)),w===s.RG&&(z===s.FLOAT&&(Y=s.RG32F),z===s.HALF_FLOAT&&(Y=s.RG16F),z===s.UNSIGNED_BYTE&&(Y=s.RG8)),w===s.RG_INTEGER&&(z===s.UNSIGNED_BYTE&&(Y=s.RG8UI),z===s.UNSIGNED_SHORT&&(Y=s.RG16UI),z===s.UNSIGNED_INT&&(Y=s.RG32UI),z===s.BYTE&&(Y=s.RG8I),z===s.SHORT&&(Y=s.RG16I),z===s.INT&&(Y=s.RG32I)),w===s.RGB_INTEGER&&(z===s.UNSIGNED_BYTE&&(Y=s.RGB8UI),z===s.UNSIGNED_SHORT&&(Y=s.RGB16UI),z===s.UNSIGNED_INT&&(Y=s.RGB32UI),z===s.BYTE&&(Y=s.RGB8I),z===s.SHORT&&(Y=s.RGB16I),z===s.INT&&(Y=s.RGB32I)),w===s.RGBA_INTEGER&&(z===s.UNSIGNED_BYTE&&(Y=s.RGBA8UI),z===s.UNSIGNED_SHORT&&(Y=s.RGBA16UI),z===s.UNSIGNED_INT&&(Y=s.RGBA32UI),z===s.BYTE&&(Y=s.RGBA8I),z===s.SHORT&&(Y=s.RGBA16I),z===s.INT&&(Y=s.RGBA32I)),w===s.RGB&&z===s.UNSIGNED_INT_5_9_9_9_REV&&(Y=s.RGB9_E5),w===s.RGBA){const yt=Z?eo:Zt.getTransfer(K);z===s.FLOAT&&(Y=s.RGBA32F),z===s.HALF_FLOAT&&(Y=s.RGBA16F),z===s.UNSIGNED_BYTE&&(Y=yt===me?s.SRGB8_ALPHA8:s.RGBA8),z===s.UNSIGNED_SHORT_4_4_4_4&&(Y=s.RGBA4),z===s.UNSIGNED_SHORT_5_5_5_1&&(Y=s.RGB5_A1)}return(Y===s.R16F||Y===s.R32F||Y===s.RG16F||Y===s.RG32F||Y===s.RGBA16F||Y===s.RGBA32F)&&t.get("EXT_color_buffer_float"),Y}function v(P,w){let z;return P?w===null||w===es||w===Ws?z=s.DEPTH24_STENCIL8:w===Nn?z=s.DEPTH32F_STENCIL8:w===Br&&(z=s.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):w===null||w===es||w===Ws?z=s.DEPTH_COMPONENT24:w===Nn?z=s.DEPTH_COMPONENT32F:w===Br&&(z=s.DEPTH_COMPONENT16),z}function _(P,w){return m(P)===!0||P.isFramebufferTexture&&P.minFilter!==Je&&P.minFilter!==on?Math.log2(Math.max(w.width,w.height))+1:P.mipmaps!==void 0&&P.mipmaps.length>0?P.mipmaps.length:P.isCompressedTexture&&Array.isArray(P.image)?w.mipmaps.length:1}function M(P){const w=P.target;w.removeEventListener("dispose",M),S(w),w.isVideoTexture&&h.delete(w)}function E(P){const w=P.target;w.removeEventListener("dispose",E),I(w)}function S(P){const w=n.get(P);if(w.__webglInit===void 0)return;const z=P.source,K=d.get(z);if(K){const Z=K[w.__cacheKey];Z.usedTimes--,Z.usedTimes===0&&C(P),Object.keys(K).length===0&&d.delete(z)}n.remove(P)}function C(P){const w=n.get(P);s.deleteTexture(w.__webglTexture);const z=P.source,K=d.get(z);delete K[w.__cacheKey],a.memory.textures--}function I(P){const w=n.get(P);if(P.depthTexture&&P.depthTexture.dispose(),P.isWebGLCubeRenderTarget)for(let K=0;K<6;K++){if(Array.isArray(w.__webglFramebuffer[K]))for(let Z=0;Z<w.__webglFramebuffer[K].length;Z++)s.deleteFramebuffer(w.__webglFramebuffer[K][Z]);else s.deleteFramebuffer(w.__webglFramebuffer[K]);w.__webglDepthbuffer&&s.deleteRenderbuffer(w.__webglDepthbuffer[K])}else{if(Array.isArray(w.__webglFramebuffer))for(let K=0;K<w.__webglFramebuffer.length;K++)s.deleteFramebuffer(w.__webglFramebuffer[K]);else s.deleteFramebuffer(w.__webglFramebuffer);if(w.__webglDepthbuffer&&s.deleteRenderbuffer(w.__webglDepthbuffer),w.__webglMultisampledFramebuffer&&s.deleteFramebuffer(w.__webglMultisampledFramebuffer),w.__webglColorRenderbuffer)for(let K=0;K<w.__webglColorRenderbuffer.length;K++)w.__webglColorRenderbuffer[K]&&s.deleteRenderbuffer(w.__webglColorRenderbuffer[K]);w.__webglDepthRenderbuffer&&s.deleteRenderbuffer(w.__webglDepthRenderbuffer)}const z=P.textures;for(let K=0,Z=z.length;K<Z;K++){const Y=n.get(z[K]);Y.__webglTexture&&(s.deleteTexture(Y.__webglTexture),a.memory.textures--),n.remove(z[K])}n.remove(P)}let x=0;function A(){x=0}function U(){const P=x;return P>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+P+" texture units while this GPU supports only "+i.maxTextures),x+=1,P}function B(P){const w=[];return w.push(P.wrapS),w.push(P.wrapT),w.push(P.wrapR||0),w.push(P.magFilter),w.push(P.minFilter),w.push(P.anisotropy),w.push(P.internalFormat),w.push(P.format),w.push(P.type),w.push(P.generateMipmaps),w.push(P.premultiplyAlpha),w.push(P.flipY),w.push(P.unpackAlignment),w.push(P.colorSpace),w.join()}function O(P,w){const z=n.get(P);if(P.isVideoTexture&&It(P),P.isRenderTargetTexture===!1&&P.version>0&&z.__version!==P.version){const K=P.image;if(K===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(K.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{wt(z,P,w);return}}e.bindTexture(s.TEXTURE_2D,z.__webglTexture,s.TEXTURE0+w)}function X(P,w){const z=n.get(P);if(P.version>0&&z.__version!==P.version){wt(z,P,w);return}e.bindTexture(s.TEXTURE_2D_ARRAY,z.__webglTexture,s.TEXTURE0+w)}function H(P,w){const z=n.get(P);if(P.version>0&&z.__version!==P.version){wt(z,P,w);return}e.bindTexture(s.TEXTURE_3D,z.__webglTexture,s.TEXTURE0+w)}function J(P,w){const z=n.get(P);if(P.version>0&&z.__version!==P.version){j(z,P,w);return}e.bindTexture(s.TEXTURE_CUBE_MAP,z.__webglTexture,s.TEXTURE0+w)}const k={[ts]:s.REPEAT,[pi]:s.CLAMP_TO_EDGE,[to]:s.MIRRORED_REPEAT},et={[Je]:s.NEAREST,[ef]:s.NEAREST_MIPMAP_NEAREST,[Rr]:s.NEAREST_MIPMAP_LINEAR,[on]:s.LINEAR,[Wa]:s.LINEAR_MIPMAP_NEAREST,[Xn]:s.LINEAR_MIPMAP_LINEAR},st={[lm]:s.NEVER,[mm]:s.ALWAYS,[hm]:s.LESS,[ff]:s.LEQUAL,[um]:s.EQUAL,[pm]:s.GEQUAL,[dm]:s.GREATER,[fm]:s.NOTEQUAL};function rt(P,w){if(w.type===Nn&&t.has("OES_texture_float_linear")===!1&&(w.magFilter===on||w.magFilter===Wa||w.magFilter===Rr||w.magFilter===Xn||w.minFilter===on||w.minFilter===Wa||w.minFilter===Rr||w.minFilter===Xn)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(P,s.TEXTURE_WRAP_S,k[w.wrapS]),s.texParameteri(P,s.TEXTURE_WRAP_T,k[w.wrapT]),(P===s.TEXTURE_3D||P===s.TEXTURE_2D_ARRAY)&&s.texParameteri(P,s.TEXTURE_WRAP_R,k[w.wrapR]),s.texParameteri(P,s.TEXTURE_MAG_FILTER,et[w.magFilter]),s.texParameteri(P,s.TEXTURE_MIN_FILTER,et[w.minFilter]),w.compareFunction&&(s.texParameteri(P,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(P,s.TEXTURE_COMPARE_FUNC,st[w.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(w.magFilter===Je||w.minFilter!==Rr&&w.minFilter!==Xn||w.type===Nn&&t.has("OES_texture_float_linear")===!1)return;if(w.anisotropy>1||n.get(w).__currentAnisotropy){const z=t.get("EXT_texture_filter_anisotropic");s.texParameterf(P,z.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(w.anisotropy,i.getMaxAnisotropy())),n.get(w).__currentAnisotropy=w.anisotropy}}}function At(P,w){let z=!1;P.__webglInit===void 0&&(P.__webglInit=!0,w.addEventListener("dispose",M));const K=w.source;let Z=d.get(K);Z===void 0&&(Z={},d.set(K,Z));const Y=B(w);if(Y!==P.__cacheKey){Z[Y]===void 0&&(Z[Y]={texture:s.createTexture(),usedTimes:0},a.memory.textures++,z=!0),Z[Y].usedTimes++;const yt=Z[P.__cacheKey];yt!==void 0&&(Z[P.__cacheKey].usedTimes--,yt.usedTimes===0&&C(w)),P.__cacheKey=Y,P.__webglTexture=Z[Y].texture}return z}function wt(P,w,z){let K=s.TEXTURE_2D;(w.isDataArrayTexture||w.isCompressedArrayTexture)&&(K=s.TEXTURE_2D_ARRAY),w.isData3DTexture&&(K=s.TEXTURE_3D);const Z=At(P,w),Y=w.source;e.bindTexture(K,P.__webglTexture,s.TEXTURE0+z);const yt=n.get(Y);if(Y.version!==yt.__version||Z===!0){e.activeTexture(s.TEXTURE0+z);const lt=Zt.getPrimaries(Zt.workingColorSpace),mt=w.colorSpace===Pi?null:Zt.getPrimaries(w.colorSpace),Jt=w.colorSpace===Pi||lt===mt?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,w.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,w.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Jt);let tt=b(w.image,!1,i.maxTextureSize);tt=fe(w,tt);const gt=r.convert(w.format,w.colorSpace),Dt=r.convert(w.type);let Nt=y(w.internalFormat,gt,Dt,w.colorSpace,w.isVideoTexture);rt(K,w);let bt;const qt=w.mipmaps,kt=w.isVideoTexture!==!0,de=yt.__version===void 0||Z===!0,D=Y.dataReady,ft=_(w,tt);if(w.isDepthTexture)Nt=v(w.format===qs,w.type),de&&(kt?e.texStorage2D(s.TEXTURE_2D,1,Nt,tt.width,tt.height):e.texImage2D(s.TEXTURE_2D,0,Nt,tt.width,tt.height,0,gt,Dt,null));else if(w.isDataTexture)if(qt.length>0){kt&&de&&e.texStorage2D(s.TEXTURE_2D,ft,Nt,qt[0].width,qt[0].height);for(let q=0,$=qt.length;q<$;q++)bt=qt[q],kt?D&&e.texSubImage2D(s.TEXTURE_2D,q,0,0,bt.width,bt.height,gt,Dt,bt.data):e.texImage2D(s.TEXTURE_2D,q,Nt,bt.width,bt.height,0,gt,Dt,bt.data);w.generateMipmaps=!1}else kt?(de&&e.texStorage2D(s.TEXTURE_2D,ft,Nt,tt.width,tt.height),D&&e.texSubImage2D(s.TEXTURE_2D,0,0,0,tt.width,tt.height,gt,Dt,tt.data)):e.texImage2D(s.TEXTURE_2D,0,Nt,tt.width,tt.height,0,gt,Dt,tt.data);else if(w.isCompressedTexture)if(w.isCompressedArrayTexture){kt&&de&&e.texStorage3D(s.TEXTURE_2D_ARRAY,ft,Nt,qt[0].width,qt[0].height,tt.depth);for(let q=0,$=qt.length;q<$;q++)if(bt=qt[q],w.format!==En)if(gt!==null)if(kt){if(D)if(w.layerUpdates.size>0){const ut=Pu(bt.width,bt.height,w.format,w.type);for(const pt of w.layerUpdates){const Yt=bt.data.subarray(pt*ut/bt.data.BYTES_PER_ELEMENT,(pt+1)*ut/bt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,q,0,0,pt,bt.width,bt.height,1,gt,Yt,0,0)}w.clearLayerUpdates()}else e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,q,0,0,0,bt.width,bt.height,tt.depth,gt,bt.data,0,0)}else e.compressedTexImage3D(s.TEXTURE_2D_ARRAY,q,Nt,bt.width,bt.height,tt.depth,0,bt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else kt?D&&e.texSubImage3D(s.TEXTURE_2D_ARRAY,q,0,0,0,bt.width,bt.height,tt.depth,gt,Dt,bt.data):e.texImage3D(s.TEXTURE_2D_ARRAY,q,Nt,bt.width,bt.height,tt.depth,0,gt,Dt,bt.data)}else{kt&&de&&e.texStorage2D(s.TEXTURE_2D,ft,Nt,qt[0].width,qt[0].height);for(let q=0,$=qt.length;q<$;q++)bt=qt[q],w.format!==En?gt!==null?kt?D&&e.compressedTexSubImage2D(s.TEXTURE_2D,q,0,0,bt.width,bt.height,gt,bt.data):e.compressedTexImage2D(s.TEXTURE_2D,q,Nt,bt.width,bt.height,0,bt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):kt?D&&e.texSubImage2D(s.TEXTURE_2D,q,0,0,bt.width,bt.height,gt,Dt,bt.data):e.texImage2D(s.TEXTURE_2D,q,Nt,bt.width,bt.height,0,gt,Dt,bt.data)}else if(w.isDataArrayTexture)if(kt){if(de&&e.texStorage3D(s.TEXTURE_2D_ARRAY,ft,Nt,tt.width,tt.height,tt.depth),D)if(w.layerUpdates.size>0){const q=Pu(tt.width,tt.height,w.format,w.type);for(const $ of w.layerUpdates){const ut=tt.data.subarray($*q/tt.data.BYTES_PER_ELEMENT,($+1)*q/tt.data.BYTES_PER_ELEMENT);e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,$,tt.width,tt.height,1,gt,Dt,ut)}w.clearLayerUpdates()}else e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,tt.width,tt.height,tt.depth,gt,Dt,tt.data)}else e.texImage3D(s.TEXTURE_2D_ARRAY,0,Nt,tt.width,tt.height,tt.depth,0,gt,Dt,tt.data);else if(w.isData3DTexture)kt?(de&&e.texStorage3D(s.TEXTURE_3D,ft,Nt,tt.width,tt.height,tt.depth),D&&e.texSubImage3D(s.TEXTURE_3D,0,0,0,0,tt.width,tt.height,tt.depth,gt,Dt,tt.data)):e.texImage3D(s.TEXTURE_3D,0,Nt,tt.width,tt.height,tt.depth,0,gt,Dt,tt.data);else if(w.isFramebufferTexture){if(de)if(kt)e.texStorage2D(s.TEXTURE_2D,ft,Nt,tt.width,tt.height);else{let q=tt.width,$=tt.height;for(let ut=0;ut<ft;ut++)e.texImage2D(s.TEXTURE_2D,ut,Nt,q,$,0,gt,Dt,null),q>>=1,$>>=1}}else if(qt.length>0){if(kt&&de){const q=Ft(qt[0]);e.texStorage2D(s.TEXTURE_2D,ft,Nt,q.width,q.height)}for(let q=0,$=qt.length;q<$;q++)bt=qt[q],kt?D&&e.texSubImage2D(s.TEXTURE_2D,q,0,0,gt,Dt,bt):e.texImage2D(s.TEXTURE_2D,q,Nt,gt,Dt,bt);w.generateMipmaps=!1}else if(kt){if(de){const q=Ft(tt);e.texStorage2D(s.TEXTURE_2D,ft,Nt,q.width,q.height)}D&&e.texSubImage2D(s.TEXTURE_2D,0,0,0,gt,Dt,tt)}else e.texImage2D(s.TEXTURE_2D,0,Nt,gt,Dt,tt);m(w)&&p(K),yt.__version=Y.version,w.onUpdate&&w.onUpdate(w)}P.__version=w.version}function j(P,w,z){if(w.image.length!==6)return;const K=At(P,w),Z=w.source;e.bindTexture(s.TEXTURE_CUBE_MAP,P.__webglTexture,s.TEXTURE0+z);const Y=n.get(Z);if(Z.version!==Y.__version||K===!0){e.activeTexture(s.TEXTURE0+z);const yt=Zt.getPrimaries(Zt.workingColorSpace),lt=w.colorSpace===Pi?null:Zt.getPrimaries(w.colorSpace),mt=w.colorSpace===Pi||yt===lt?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,w.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,w.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,mt);const Jt=w.isCompressedTexture||w.image[0].isCompressedTexture,tt=w.image[0]&&w.image[0].isDataTexture,gt=[];for(let $=0;$<6;$++)!Jt&&!tt?gt[$]=b(w.image[$],!0,i.maxCubemapSize):gt[$]=tt?w.image[$].image:w.image[$],gt[$]=fe(w,gt[$]);const Dt=gt[0],Nt=r.convert(w.format,w.colorSpace),bt=r.convert(w.type),qt=y(w.internalFormat,Nt,bt,w.colorSpace),kt=w.isVideoTexture!==!0,de=Y.__version===void 0||K===!0,D=Z.dataReady;let ft=_(w,Dt);rt(s.TEXTURE_CUBE_MAP,w);let q;if(Jt){kt&&de&&e.texStorage2D(s.TEXTURE_CUBE_MAP,ft,qt,Dt.width,Dt.height);for(let $=0;$<6;$++){q=gt[$].mipmaps;for(let ut=0;ut<q.length;ut++){const pt=q[ut];w.format!==En?Nt!==null?kt?D&&e.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+$,ut,0,0,pt.width,pt.height,Nt,pt.data):e.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+$,ut,qt,pt.width,pt.height,0,pt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):kt?D&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+$,ut,0,0,pt.width,pt.height,Nt,bt,pt.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+$,ut,qt,pt.width,pt.height,0,Nt,bt,pt.data)}}}else{if(q=w.mipmaps,kt&&de){q.length>0&&ft++;const $=Ft(gt[0]);e.texStorage2D(s.TEXTURE_CUBE_MAP,ft,qt,$.width,$.height)}for(let $=0;$<6;$++)if(tt){kt?D&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,0,0,gt[$].width,gt[$].height,Nt,bt,gt[$].data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,qt,gt[$].width,gt[$].height,0,Nt,bt,gt[$].data);for(let ut=0;ut<q.length;ut++){const Yt=q[ut].image[$].image;kt?D&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+$,ut+1,0,0,Yt.width,Yt.height,Nt,bt,Yt.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+$,ut+1,qt,Yt.width,Yt.height,0,Nt,bt,Yt.data)}}else{kt?D&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,0,0,Nt,bt,gt[$]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,qt,Nt,bt,gt[$]);for(let ut=0;ut<q.length;ut++){const pt=q[ut];kt?D&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+$,ut+1,0,0,Nt,bt,pt.image[$]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+$,ut+1,qt,Nt,bt,pt.image[$])}}}m(w)&&p(s.TEXTURE_CUBE_MAP),Y.__version=Z.version,w.onUpdate&&w.onUpdate(w)}P.__version=w.version}function Q(P,w,z,K,Z,Y){const yt=r.convert(z.format,z.colorSpace),lt=r.convert(z.type),mt=y(z.internalFormat,yt,lt,z.colorSpace);if(!n.get(w).__hasExternalTextures){const tt=Math.max(1,w.width>>Y),gt=Math.max(1,w.height>>Y);Z===s.TEXTURE_3D||Z===s.TEXTURE_2D_ARRAY?e.texImage3D(Z,Y,mt,tt,gt,w.depth,0,yt,lt,null):e.texImage2D(Z,Y,mt,tt,gt,0,yt,lt,null)}e.bindFramebuffer(s.FRAMEBUFFER,P),$t(w)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,K,Z,n.get(z).__webglTexture,0,Wt(w)):(Z===s.TEXTURE_2D||Z>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&Z<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,K,Z,n.get(z).__webglTexture,Y),e.bindFramebuffer(s.FRAMEBUFFER,null)}function at(P,w,z){if(s.bindRenderbuffer(s.RENDERBUFFER,P),w.depthBuffer){const K=w.depthTexture,Z=K&&K.isDepthTexture?K.type:null,Y=v(w.stencilBuffer,Z),yt=w.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,lt=Wt(w);$t(w)?o.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,lt,Y,w.width,w.height):z?s.renderbufferStorageMultisample(s.RENDERBUFFER,lt,Y,w.width,w.height):s.renderbufferStorage(s.RENDERBUFFER,Y,w.width,w.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,yt,s.RENDERBUFFER,P)}else{const K=w.textures;for(let Z=0;Z<K.length;Z++){const Y=K[Z],yt=r.convert(Y.format,Y.colorSpace),lt=r.convert(Y.type),mt=y(Y.internalFormat,yt,lt,Y.colorSpace),Jt=Wt(w);z&&$t(w)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,Jt,mt,w.width,w.height):$t(w)?o.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Jt,mt,w.width,w.height):s.renderbufferStorage(s.RENDERBUFFER,mt,w.width,w.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function ct(P,w){if(w&&w.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(s.FRAMEBUFFER,P),!(w.depthTexture&&w.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(w.depthTexture).__webglTexture||w.depthTexture.image.width!==w.width||w.depthTexture.image.height!==w.height)&&(w.depthTexture.image.width=w.width,w.depthTexture.image.height=w.height,w.depthTexture.needsUpdate=!0),O(w.depthTexture,0);const K=n.get(w.depthTexture).__webglTexture,Z=Wt(w);if(w.depthTexture.format===Us)$t(w)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,K,0,Z):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,K,0);else if(w.depthTexture.format===qs)$t(w)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,K,0,Z):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,K,0);else throw new Error("Unknown depthTexture format")}function Ut(P){const w=n.get(P),z=P.isWebGLCubeRenderTarget===!0;if(w.__boundDepthTexture!==P.depthTexture){const K=P.depthTexture;if(w.__depthDisposeCallback&&w.__depthDisposeCallback(),K){const Z=()=>{delete w.__boundDepthTexture,delete w.__depthDisposeCallback,K.removeEventListener("dispose",Z)};K.addEventListener("dispose",Z),w.__depthDisposeCallback=Z}w.__boundDepthTexture=K}if(P.depthTexture&&!w.__autoAllocateDepthBuffer){if(z)throw new Error("target.depthTexture not supported in Cube render targets");ct(w.__webglFramebuffer,P)}else if(z){w.__webglDepthbuffer=[];for(let K=0;K<6;K++)if(e.bindFramebuffer(s.FRAMEBUFFER,w.__webglFramebuffer[K]),w.__webglDepthbuffer[K]===void 0)w.__webglDepthbuffer[K]=s.createRenderbuffer(),at(w.__webglDepthbuffer[K],P,!1);else{const Z=P.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Y=w.__webglDepthbuffer[K];s.bindRenderbuffer(s.RENDERBUFFER,Y),s.framebufferRenderbuffer(s.FRAMEBUFFER,Z,s.RENDERBUFFER,Y)}}else if(e.bindFramebuffer(s.FRAMEBUFFER,w.__webglFramebuffer),w.__webglDepthbuffer===void 0)w.__webglDepthbuffer=s.createRenderbuffer(),at(w.__webglDepthbuffer,P,!1);else{const K=P.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Z=w.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,Z),s.framebufferRenderbuffer(s.FRAMEBUFFER,K,s.RENDERBUFFER,Z)}e.bindFramebuffer(s.FRAMEBUFFER,null)}function Pt(P,w,z){const K=n.get(P);w!==void 0&&Q(K.__webglFramebuffer,P,P.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),z!==void 0&&Ut(P)}function Xt(P){const w=P.texture,z=n.get(P),K=n.get(w);P.addEventListener("dispose",E);const Z=P.textures,Y=P.isWebGLCubeRenderTarget===!0,yt=Z.length>1;if(yt||(K.__webglTexture===void 0&&(K.__webglTexture=s.createTexture()),K.__version=w.version,a.memory.textures++),Y){z.__webglFramebuffer=[];for(let lt=0;lt<6;lt++)if(w.mipmaps&&w.mipmaps.length>0){z.__webglFramebuffer[lt]=[];for(let mt=0;mt<w.mipmaps.length;mt++)z.__webglFramebuffer[lt][mt]=s.createFramebuffer()}else z.__webglFramebuffer[lt]=s.createFramebuffer()}else{if(w.mipmaps&&w.mipmaps.length>0){z.__webglFramebuffer=[];for(let lt=0;lt<w.mipmaps.length;lt++)z.__webglFramebuffer[lt]=s.createFramebuffer()}else z.__webglFramebuffer=s.createFramebuffer();if(yt)for(let lt=0,mt=Z.length;lt<mt;lt++){const Jt=n.get(Z[lt]);Jt.__webglTexture===void 0&&(Jt.__webglTexture=s.createTexture(),a.memory.textures++)}if(P.samples>0&&$t(P)===!1){z.__webglMultisampledFramebuffer=s.createFramebuffer(),z.__webglColorRenderbuffer=[],e.bindFramebuffer(s.FRAMEBUFFER,z.__webglMultisampledFramebuffer);for(let lt=0;lt<Z.length;lt++){const mt=Z[lt];z.__webglColorRenderbuffer[lt]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,z.__webglColorRenderbuffer[lt]);const Jt=r.convert(mt.format,mt.colorSpace),tt=r.convert(mt.type),gt=y(mt.internalFormat,Jt,tt,mt.colorSpace,P.isXRRenderTarget===!0),Dt=Wt(P);s.renderbufferStorageMultisample(s.RENDERBUFFER,Dt,gt,P.width,P.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+lt,s.RENDERBUFFER,z.__webglColorRenderbuffer[lt])}s.bindRenderbuffer(s.RENDERBUFFER,null),P.depthBuffer&&(z.__webglDepthRenderbuffer=s.createRenderbuffer(),at(z.__webglDepthRenderbuffer,P,!0)),e.bindFramebuffer(s.FRAMEBUFFER,null)}}if(Y){e.bindTexture(s.TEXTURE_CUBE_MAP,K.__webglTexture),rt(s.TEXTURE_CUBE_MAP,w);for(let lt=0;lt<6;lt++)if(w.mipmaps&&w.mipmaps.length>0)for(let mt=0;mt<w.mipmaps.length;mt++)Q(z.__webglFramebuffer[lt][mt],P,w,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+lt,mt);else Q(z.__webglFramebuffer[lt],P,w,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+lt,0);m(w)&&p(s.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(yt){for(let lt=0,mt=Z.length;lt<mt;lt++){const Jt=Z[lt],tt=n.get(Jt);e.bindTexture(s.TEXTURE_2D,tt.__webglTexture),rt(s.TEXTURE_2D,Jt),Q(z.__webglFramebuffer,P,Jt,s.COLOR_ATTACHMENT0+lt,s.TEXTURE_2D,0),m(Jt)&&p(s.TEXTURE_2D)}e.unbindTexture()}else{let lt=s.TEXTURE_2D;if((P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(lt=P.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),e.bindTexture(lt,K.__webglTexture),rt(lt,w),w.mipmaps&&w.mipmaps.length>0)for(let mt=0;mt<w.mipmaps.length;mt++)Q(z.__webglFramebuffer[mt],P,w,s.COLOR_ATTACHMENT0,lt,mt);else Q(z.__webglFramebuffer,P,w,s.COLOR_ATTACHMENT0,lt,0);m(w)&&p(lt),e.unbindTexture()}P.depthBuffer&&Ut(P)}function he(P){const w=P.textures;for(let z=0,K=w.length;z<K;z++){const Z=w[z];if(m(Z)){const Y=P.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:s.TEXTURE_2D,yt=n.get(Z).__webglTexture;e.bindTexture(Y,yt),p(Y),e.unbindTexture()}}}const jt=[],L=[];function ln(P){if(P.samples>0){if($t(P)===!1){const w=P.textures,z=P.width,K=P.height;let Z=s.COLOR_BUFFER_BIT;const Y=P.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,yt=n.get(P),lt=w.length>1;if(lt)for(let mt=0;mt<w.length;mt++)e.bindFramebuffer(s.FRAMEBUFFER,yt.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+mt,s.RENDERBUFFER,null),e.bindFramebuffer(s.FRAMEBUFFER,yt.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+mt,s.TEXTURE_2D,null,0);e.bindFramebuffer(s.READ_FRAMEBUFFER,yt.__webglMultisampledFramebuffer),e.bindFramebuffer(s.DRAW_FRAMEBUFFER,yt.__webglFramebuffer);for(let mt=0;mt<w.length;mt++){if(P.resolveDepthBuffer&&(P.depthBuffer&&(Z|=s.DEPTH_BUFFER_BIT),P.stencilBuffer&&P.resolveStencilBuffer&&(Z|=s.STENCIL_BUFFER_BIT)),lt){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,yt.__webglColorRenderbuffer[mt]);const Jt=n.get(w[mt]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,Jt,0)}s.blitFramebuffer(0,0,z,K,0,0,z,K,Z,s.NEAREST),c===!0&&(jt.length=0,L.length=0,jt.push(s.COLOR_ATTACHMENT0+mt),P.depthBuffer&&P.resolveDepthBuffer===!1&&(jt.push(Y),L.push(Y),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,L)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,jt))}if(e.bindFramebuffer(s.READ_FRAMEBUFFER,null),e.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),lt)for(let mt=0;mt<w.length;mt++){e.bindFramebuffer(s.FRAMEBUFFER,yt.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+mt,s.RENDERBUFFER,yt.__webglColorRenderbuffer[mt]);const Jt=n.get(w[mt]).__webglTexture;e.bindFramebuffer(s.FRAMEBUFFER,yt.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+mt,s.TEXTURE_2D,Jt,0)}e.bindFramebuffer(s.DRAW_FRAMEBUFFER,yt.__webglMultisampledFramebuffer)}else if(P.depthBuffer&&P.resolveDepthBuffer===!1&&c){const w=P.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[w])}}}function Wt(P){return Math.min(i.maxSamples,P.samples)}function $t(P){const w=n.get(P);return P.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&w.__useRenderToTexture!==!1}function It(P){const w=a.render.frame;h.get(P)!==w&&(h.set(P,w),P.update())}function fe(P,w){const z=P.colorSpace,K=P.format,Z=P.type;return P.isCompressedTexture===!0||P.isVideoTexture===!0||z!==He&&z!==Pi&&(Zt.getTransfer(z)===me?(K!==En||Z!==Kn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",z)),w}function Ft(P){return typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement?(l.width=P.naturalWidth||P.width,l.height=P.naturalHeight||P.height):typeof VideoFrame<"u"&&P instanceof VideoFrame?(l.width=P.displayWidth,l.height=P.displayHeight):(l.width=P.width,l.height=P.height),l}this.allocateTextureUnit=U,this.resetTextureUnits=A,this.setTexture2D=O,this.setTexture2DArray=X,this.setTexture3D=H,this.setTextureCube=J,this.rebindTextures=Pt,this.setupRenderTarget=Xt,this.updateRenderTargetMipmap=he,this.updateMultisampleRenderTarget=ln,this.setupDepthRenderbuffer=Ut,this.setupFrameBufferTexture=Q,this.useMultisampledRTT=$t}function Fx(s,t){function e(n,i=Pi){let r;const a=Zt.getTransfer(i);if(n===Kn)return s.UNSIGNED_BYTE;if(n===Gl)return s.UNSIGNED_SHORT_4_4_4_4;if(n===Vl)return s.UNSIGNED_SHORT_5_5_5_1;if(n===rf)return s.UNSIGNED_INT_5_9_9_9_REV;if(n===nf)return s.BYTE;if(n===sf)return s.SHORT;if(n===Br)return s.UNSIGNED_SHORT;if(n===Hl)return s.INT;if(n===es)return s.UNSIGNED_INT;if(n===Nn)return s.FLOAT;if(n===Kr)return s.HALF_FLOAT;if(n===af)return s.ALPHA;if(n===of)return s.RGB;if(n===En)return s.RGBA;if(n===cf)return s.LUMINANCE;if(n===lf)return s.LUMINANCE_ALPHA;if(n===Us)return s.DEPTH_COMPONENT;if(n===qs)return s.DEPTH_STENCIL;if(n===Wl)return s.RED;if(n===ql)return s.RED_INTEGER;if(n===Xl)return s.RG;if(n===jl)return s.RG_INTEGER;if(n===Yl)return s.RGBA_INTEGER;if(n===qa||n===Xa||n===ja||n===Ya)if(a===me)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===qa)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Xa)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===ja)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Ya)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===qa)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Xa)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===ja)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Ya)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Jc||n===Qc||n===Zc||n===tl)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Jc)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Qc)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Zc)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===tl)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===el||n===nl||n===il)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===el||n===nl)return a===me?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===il)return a===me?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===sl||n===rl||n===al||n===ol||n===cl||n===ll||n===hl||n===ul||n===dl||n===fl||n===pl||n===ml||n===gl||n===bl)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===sl)return a===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===rl)return a===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===al)return a===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===ol)return a===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===cl)return a===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===ll)return a===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===hl)return a===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===ul)return a===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===dl)return a===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===fl)return a===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===pl)return a===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===ml)return a===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===gl)return a===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===bl)return a===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Ka||n===vl||n===xl)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===Ka)return a===me?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===vl)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===xl)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===hf||n===_l||n===yl||n===Ml)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===Ka)return r.COMPRESSED_RED_RGTC1_EXT;if(n===_l)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===yl)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Ml)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Ws?s.UNSIGNED_INT_24_8:s[n]!==void 0?s[n]:null}return{convert:e}}class Ux extends Ke{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class Ee extends ge{constructor(){super(),this.isGroup=!0,this.type="Group"}}const kx={type:"move"};class rc{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ee,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ee,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new R,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new R),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ee,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new R,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new R),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let i=null,r=null,a=null;const o=this._targetRay,c=this._grip,l=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(l&&t.hand){a=!0;for(const b of t.hand.values()){const m=e.getJointPose(b,n),p=this._getHandJoint(l,b);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const h=l.joints["index-finger-tip"],u=l.joints["thumb-tip"],d=h.position.distanceTo(u.position),f=.02,g=.005;l.inputState.pinching&&d>f+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!l.inputState.pinching&&d<=f-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));o!==null&&(i=e.getPose(t.targetRaySpace,n),i===null&&r!==null&&(i=r),i!==null&&(o.matrix.fromArray(i.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,i.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(i.linearVelocity)):o.hasLinearVelocity=!1,i.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(i.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(kx)))}return o!==null&&(o.visible=i!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new Ee;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}const Ox=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Bx=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class zx{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){const i=new Le,r=t.properties.get(i);r.__webglTexture=e.texture,(e.depthNear!=n.depthNear||e.depthFar!=n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new Rn({vertexShader:Ox,fragmentShader:Bx,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Qt(new $n(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Hx extends Qs{constructor(t,e){super();const n=this;let i=null,r=1,a=null,o="local-floor",c=1,l=null,h=null,u=null,d=null,f=null,g=null;const b=new zx,m=e.getContextAttributes();let p=null,y=null;const v=[],_=[],M=new it;let E=null;const S=new Ke;S.layers.enable(1),S.viewport=new ne;const C=new Ke;C.layers.enable(2),C.viewport=new ne;const I=[S,C],x=new Ux;x.layers.enable(1),x.layers.enable(2);let A=null,U=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(j){let Q=v[j];return Q===void 0&&(Q=new rc,v[j]=Q),Q.getTargetRaySpace()},this.getControllerGrip=function(j){let Q=v[j];return Q===void 0&&(Q=new rc,v[j]=Q),Q.getGripSpace()},this.getHand=function(j){let Q=v[j];return Q===void 0&&(Q=new rc,v[j]=Q),Q.getHandSpace()};function B(j){const Q=_.indexOf(j.inputSource);if(Q===-1)return;const at=v[Q];at!==void 0&&(at.update(j.inputSource,j.frame,l||a),at.dispatchEvent({type:j.type,data:j.inputSource}))}function O(){i.removeEventListener("select",B),i.removeEventListener("selectstart",B),i.removeEventListener("selectend",B),i.removeEventListener("squeeze",B),i.removeEventListener("squeezestart",B),i.removeEventListener("squeezeend",B),i.removeEventListener("end",O),i.removeEventListener("inputsourceschange",X);for(let j=0;j<v.length;j++){const Q=_[j];Q!==null&&(_[j]=null,v[j].disconnect(Q))}A=null,U=null,b.reset(),t.setRenderTarget(p),f=null,d=null,u=null,i=null,y=null,wt.stop(),n.isPresenting=!1,t.setPixelRatio(E),t.setSize(M.width,M.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(j){r=j,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(j){o=j,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||a},this.setReferenceSpace=function(j){l=j},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return u},this.getFrame=function(){return g},this.getSession=function(){return i},this.setSession=async function(j){if(i=j,i!==null){if(p=t.getRenderTarget(),i.addEventListener("select",B),i.addEventListener("selectstart",B),i.addEventListener("selectend",B),i.addEventListener("squeeze",B),i.addEventListener("squeezestart",B),i.addEventListener("squeezeend",B),i.addEventListener("end",O),i.addEventListener("inputsourceschange",X),m.xrCompatible!==!0&&await e.makeXRCompatible(),E=t.getPixelRatio(),t.getSize(M),i.renderState.layers===void 0){const Q={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(i,e,Q),i.updateRenderState({baseLayer:f}),t.setPixelRatio(1),t.setSize(f.framebufferWidth,f.framebufferHeight,!1),y=new ns(f.framebufferWidth,f.framebufferHeight,{format:En,type:Kn,colorSpace:t.outputColorSpace,stencilBuffer:m.stencil})}else{let Q=null,at=null,ct=null;m.depth&&(ct=m.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,Q=m.stencil?qs:Us,at=m.stencil?Ws:es);const Ut={colorFormat:e.RGBA8,depthFormat:ct,scaleFactor:r};u=new XRWebGLBinding(i,e),d=u.createProjectionLayer(Ut),i.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),y=new ns(d.textureWidth,d.textureHeight,{format:En,type:Kn,depthTexture:new Af(d.textureWidth,d.textureHeight,at,void 0,void 0,void 0,void 0,void 0,void 0,Q),stencilBuffer:m.stencil,colorSpace:t.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(c),l=null,a=await i.requestReferenceSpace(o),wt.setContext(i),wt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return b.getDepthTexture()};function X(j){for(let Q=0;Q<j.removed.length;Q++){const at=j.removed[Q],ct=_.indexOf(at);ct>=0&&(_[ct]=null,v[ct].disconnect(at))}for(let Q=0;Q<j.added.length;Q++){const at=j.added[Q];let ct=_.indexOf(at);if(ct===-1){for(let Pt=0;Pt<v.length;Pt++)if(Pt>=_.length){_.push(at),ct=Pt;break}else if(_[Pt]===null){_[Pt]=at,ct=Pt;break}if(ct===-1)break}const Ut=v[ct];Ut&&Ut.connect(at)}}const H=new R,J=new R;function k(j,Q,at){H.setFromMatrixPosition(Q.matrixWorld),J.setFromMatrixPosition(at.matrixWorld);const ct=H.distanceTo(J),Ut=Q.projectionMatrix.elements,Pt=at.projectionMatrix.elements,Xt=Ut[14]/(Ut[10]-1),he=Ut[14]/(Ut[10]+1),jt=(Ut[9]+1)/Ut[5],L=(Ut[9]-1)/Ut[5],ln=(Ut[8]-1)/Ut[0],Wt=(Pt[8]+1)/Pt[0],$t=Xt*ln,It=Xt*Wt,fe=ct/(-ln+Wt),Ft=fe*-ln;if(Q.matrixWorld.decompose(j.position,j.quaternion,j.scale),j.translateX(Ft),j.translateZ(fe),j.matrixWorld.compose(j.position,j.quaternion,j.scale),j.matrixWorldInverse.copy(j.matrixWorld).invert(),Ut[10]===-1)j.projectionMatrix.copy(Q.projectionMatrix),j.projectionMatrixInverse.copy(Q.projectionMatrixInverse);else{const P=Xt+fe,w=he+fe,z=$t-Ft,K=It+(ct-Ft),Z=jt*he/w*P,Y=L*he/w*P;j.projectionMatrix.makePerspective(z,K,Z,Y,P,w),j.projectionMatrixInverse.copy(j.projectionMatrix).invert()}}function et(j,Q){Q===null?j.matrixWorld.copy(j.matrix):j.matrixWorld.multiplyMatrices(Q.matrixWorld,j.matrix),j.matrixWorldInverse.copy(j.matrixWorld).invert()}this.updateCamera=function(j){if(i===null)return;let Q=j.near,at=j.far;b.texture!==null&&(b.depthNear>0&&(Q=b.depthNear),b.depthFar>0&&(at=b.depthFar)),x.near=C.near=S.near=Q,x.far=C.far=S.far=at,(A!==x.near||U!==x.far)&&(i.updateRenderState({depthNear:x.near,depthFar:x.far}),A=x.near,U=x.far);const ct=j.parent,Ut=x.cameras;et(x,ct);for(let Pt=0;Pt<Ut.length;Pt++)et(Ut[Pt],ct);Ut.length===2?k(x,S,C):x.projectionMatrix.copy(S.projectionMatrix),st(j,x,ct)};function st(j,Q,at){at===null?j.matrix.copy(Q.matrixWorld):(j.matrix.copy(at.matrixWorld),j.matrix.invert(),j.matrix.multiply(Q.matrixWorld)),j.matrix.decompose(j.position,j.quaternion,j.scale),j.updateMatrixWorld(!0),j.projectionMatrix.copy(Q.projectionMatrix),j.projectionMatrixInverse.copy(Q.projectionMatrixInverse),j.isPerspectiveCamera&&(j.fov=Xs*2*Math.atan(1/j.projectionMatrix.elements[5]),j.zoom=1)}this.getCamera=function(){return x},this.getFoveation=function(){if(!(d===null&&f===null))return c},this.setFoveation=function(j){c=j,d!==null&&(d.fixedFoveation=j),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=j)},this.hasDepthSensing=function(){return b.texture!==null},this.getDepthSensingMesh=function(){return b.getMesh(x)};let rt=null;function At(j,Q){if(h=Q.getViewerPose(l||a),g=Q,h!==null){const at=h.views;f!==null&&(t.setRenderTargetFramebuffer(y,f.framebuffer),t.setRenderTarget(y));let ct=!1;at.length!==x.cameras.length&&(x.cameras.length=0,ct=!0);for(let Pt=0;Pt<at.length;Pt++){const Xt=at[Pt];let he=null;if(f!==null)he=f.getViewport(Xt);else{const L=u.getViewSubImage(d,Xt);he=L.viewport,Pt===0&&(t.setRenderTargetTextures(y,L.colorTexture,d.ignoreDepthValues?void 0:L.depthStencilTexture),t.setRenderTarget(y))}let jt=I[Pt];jt===void 0&&(jt=new Ke,jt.layers.enable(Pt),jt.viewport=new ne,I[Pt]=jt),jt.matrix.fromArray(Xt.transform.matrix),jt.matrix.decompose(jt.position,jt.quaternion,jt.scale),jt.projectionMatrix.fromArray(Xt.projectionMatrix),jt.projectionMatrixInverse.copy(jt.projectionMatrix).invert(),jt.viewport.set(he.x,he.y,he.width,he.height),Pt===0&&(x.matrix.copy(jt.matrix),x.matrix.decompose(x.position,x.quaternion,x.scale)),ct===!0&&x.cameras.push(jt)}const Ut=i.enabledFeatures;if(Ut&&Ut.includes("depth-sensing")){const Pt=u.getDepthInformation(at[0]);Pt&&Pt.isValid&&Pt.texture&&b.init(t,Pt,i.renderState)}}for(let at=0;at<v.length;at++){const ct=_[at],Ut=v[at];ct!==null&&Ut!==void 0&&Ut.update(ct,Q,l||a)}rt&&rt(j,Q),Q.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:Q}),g=null}const wt=new wf;wt.setAnimationLoop(At),this.setAnimationLoop=function(j){rt=j},this.dispose=function(){}}}const Wi=new We,Gx=new _t;function Vx(s,t){function e(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,yf(s)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function i(m,p,y,v,_){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(m,p):p.isMeshToonMaterial?(r(m,p),u(m,p)):p.isMeshPhongMaterial?(r(m,p),h(m,p)):p.isMeshStandardMaterial?(r(m,p),d(m,p),p.isMeshPhysicalMaterial&&f(m,p,_)):p.isMeshMatcapMaterial?(r(m,p),g(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),b(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(a(m,p),p.isLineDashedMaterial&&o(m,p)):p.isPointsMaterial?c(m,p,y,v):p.isSpriteMaterial?l(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,e(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===tn&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,e(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===tn&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,e(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,e(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const y=t.get(p),v=y.envMap,_=y.envMapRotation;v&&(m.envMap.value=v,Wi.copy(_),Wi.x*=-1,Wi.y*=-1,Wi.z*=-1,v.isCubeTexture&&v.isRenderTargetTexture===!1&&(Wi.y*=-1,Wi.z*=-1),m.envMapRotation.value.setFromMatrix4(Gx.makeRotationFromEuler(Wi)),m.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,e(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,m.aoMapTransform))}function a(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform))}function o(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function c(m,p,y,v){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*y,m.scale.value=v*.5,p.map&&(m.map.value=p.map,e(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function l(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function h(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function u(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function d(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function f(m,p,y){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===tn&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=y.texture,m.transmissionSamplerSize.value.set(y.width,y.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function b(m,p){const y=t.get(p).light;m.referencePosition.value.setFromMatrixPosition(y.matrixWorld),m.nearDistance.value=y.shadow.camera.near,m.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function Wx(s,t,e,n){let i={},r={},a=[];const o=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function c(y,v){const _=v.program;n.uniformBlockBinding(y,_)}function l(y,v){let _=i[y.id];_===void 0&&(g(y),_=h(y),i[y.id]=_,y.addEventListener("dispose",m));const M=v.program;n.updateUBOMapping(y,M);const E=t.render.frame;r[y.id]!==E&&(d(y),r[y.id]=E)}function h(y){const v=u();y.__bindingPointIndex=v;const _=s.createBuffer(),M=y.__size,E=y.usage;return s.bindBuffer(s.UNIFORM_BUFFER,_),s.bufferData(s.UNIFORM_BUFFER,M,E),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,v,_),_}function u(){for(let y=0;y<o;y++)if(a.indexOf(y)===-1)return a.push(y),y;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(y){const v=i[y.id],_=y.uniforms,M=y.__cache;s.bindBuffer(s.UNIFORM_BUFFER,v);for(let E=0,S=_.length;E<S;E++){const C=Array.isArray(_[E])?_[E]:[_[E]];for(let I=0,x=C.length;I<x;I++){const A=C[I];if(f(A,E,I,M)===!0){const U=A.__offset,B=Array.isArray(A.value)?A.value:[A.value];let O=0;for(let X=0;X<B.length;X++){const H=B[X],J=b(H);typeof H=="number"||typeof H=="boolean"?(A.__data[0]=H,s.bufferSubData(s.UNIFORM_BUFFER,U+O,A.__data)):H.isMatrix3?(A.__data[0]=H.elements[0],A.__data[1]=H.elements[1],A.__data[2]=H.elements[2],A.__data[3]=0,A.__data[4]=H.elements[3],A.__data[5]=H.elements[4],A.__data[6]=H.elements[5],A.__data[7]=0,A.__data[8]=H.elements[6],A.__data[9]=H.elements[7],A.__data[10]=H.elements[8],A.__data[11]=0):(H.toArray(A.__data,O),O+=J.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,U,A.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function f(y,v,_,M){const E=y.value,S=v+"_"+_;if(M[S]===void 0)return typeof E=="number"||typeof E=="boolean"?M[S]=E:M[S]=E.clone(),!0;{const C=M[S];if(typeof E=="number"||typeof E=="boolean"){if(C!==E)return M[S]=E,!0}else if(C.equals(E)===!1)return C.copy(E),!0}return!1}function g(y){const v=y.uniforms;let _=0;const M=16;for(let S=0,C=v.length;S<C;S++){const I=Array.isArray(v[S])?v[S]:[v[S]];for(let x=0,A=I.length;x<A;x++){const U=I[x],B=Array.isArray(U.value)?U.value:[U.value];for(let O=0,X=B.length;O<X;O++){const H=B[O],J=b(H),k=_%M,et=k%J.boundary,st=k+et;_+=et,st!==0&&M-st<J.storage&&(_+=M-st),U.__data=new Float32Array(J.storage/Float32Array.BYTES_PER_ELEMENT),U.__offset=_,_+=J.storage}}}const E=_%M;return E>0&&(_+=M-E),y.__size=_,y.__cache={},this}function b(y){const v={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(v.boundary=4,v.storage=4):y.isVector2?(v.boundary=8,v.storage=8):y.isVector3||y.isColor?(v.boundary=16,v.storage=12):y.isVector4?(v.boundary=16,v.storage=16):y.isMatrix3?(v.boundary=48,v.storage=48):y.isMatrix4?(v.boundary=64,v.storage=64):y.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",y),v}function m(y){const v=y.target;v.removeEventListener("dispose",m);const _=a.indexOf(v.__bindingPointIndex);a.splice(_,1),s.deleteBuffer(i[v.id]),delete i[v.id],delete r[v.id]}function p(){for(const y in i)s.deleteBuffer(i[y]);a=[],i={},r={}}return{bind:c,update:l,dispose:p}}class qx{constructor(t={}){const{canvas:e=Im(),context:n=null,depth:i=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1}=t;this.isWebGLRenderer=!0;let d;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");d=n.getContextAttributes().alpha}else d=a;const f=new Uint32Array(4),g=new Int32Array(4);let b=null,m=null;const p=[],y=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Fe,this.toneMapping=Ni,this.toneMappingExposure=1;const v=this;let _=!1,M=0,E=0,S=null,C=-1,I=null;const x=new ne,A=new ne;let U=null;const B=new Et(0);let O=0,X=e.width,H=e.height,J=1,k=null,et=null;const st=new ne(0,0,X,H),rt=new ne(0,0,X,H);let At=!1;const wt=new Jl;let j=!1,Q=!1;const at=new _t,ct=new _t,Ut=new R,Pt=new ne,Xt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let he=!1;function jt(){return S===null?J:1}let L=n;function ln(T,N){return e.getContext(T,N)}try{const T={alpha:!0,depth:i,stencil:r,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${zl}`),e.addEventListener("webglcontextlost",$,!1),e.addEventListener("webglcontextrestored",ut,!1),e.addEventListener("webglcontextcreationerror",pt,!1),L===null){const N="webgl2";if(L=ln(N,T),L===null)throw ln(N)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(T){throw console.error("THREE.WebGLRenderer: "+T.message),T}let Wt,$t,It,fe,Ft,P,w,z,K,Z,Y,yt,lt,mt,Jt,tt,gt,Dt,Nt,bt,qt,kt,de,D;function ft(){Wt=new $b(L),Wt.init(),kt=new Fx(L,Wt),$t=new Wb(L,Wt,t,kt),It=new Ix(L),$t.reverseDepthBuffer&&It.buffers.depth.setReversed(!0),fe=new Zb(L),Ft=new bx,P=new Nx(L,Wt,It,Ft,$t,kt,fe),w=new Xb(v),z=new Kb(v),K=new ag(L),de=new Gb(L,K),Z=new Jb(L,K,fe,de),Y=new ev(L,Z,K,fe),Nt=new tv(L,$t,P),tt=new qb(Ft),yt=new gx(v,w,z,Wt,$t,de,tt),lt=new Vx(v,Ft),mt=new xx,Jt=new Ax(Wt),Dt=new Hb(v,w,z,It,Y,d,c),gt=new Px(v,Y,$t),D=new Wx(L,fe,$t,It),bt=new Vb(L,Wt,fe),qt=new Qb(L,Wt,fe),fe.programs=yt.programs,v.capabilities=$t,v.extensions=Wt,v.properties=Ft,v.renderLists=mt,v.shadowMap=gt,v.state=It,v.info=fe}ft();const q=new Hx(v,L);this.xr=q,this.getContext=function(){return L},this.getContextAttributes=function(){return L.getContextAttributes()},this.forceContextLoss=function(){const T=Wt.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){const T=Wt.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return J},this.setPixelRatio=function(T){T!==void 0&&(J=T,this.setSize(X,H,!1))},this.getSize=function(T){return T.set(X,H)},this.setSize=function(T,N,G=!0){if(q.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}X=T,H=N,e.width=Math.floor(T*J),e.height=Math.floor(N*J),G===!0&&(e.style.width=T+"px",e.style.height=N+"px"),this.setViewport(0,0,T,N)},this.getDrawingBufferSize=function(T){return T.set(X*J,H*J).floor()},this.setDrawingBufferSize=function(T,N,G){X=T,H=N,J=G,e.width=Math.floor(T*G),e.height=Math.floor(N*G),this.setViewport(0,0,T,N)},this.getCurrentViewport=function(T){return T.copy(x)},this.getViewport=function(T){return T.copy(st)},this.setViewport=function(T,N,G,V){T.isVector4?st.set(T.x,T.y,T.z,T.w):st.set(T,N,G,V),It.viewport(x.copy(st).multiplyScalar(J).round())},this.getScissor=function(T){return T.copy(rt)},this.setScissor=function(T,N,G,V){T.isVector4?rt.set(T.x,T.y,T.z,T.w):rt.set(T,N,G,V),It.scissor(A.copy(rt).multiplyScalar(J).round())},this.getScissorTest=function(){return At},this.setScissorTest=function(T){It.setScissorTest(At=T)},this.setOpaqueSort=function(T){k=T},this.setTransparentSort=function(T){et=T},this.getClearColor=function(T){return T.copy(Dt.getClearColor())},this.setClearColor=function(){Dt.setClearColor.apply(Dt,arguments)},this.getClearAlpha=function(){return Dt.getClearAlpha()},this.setClearAlpha=function(){Dt.setClearAlpha.apply(Dt,arguments)},this.clear=function(T=!0,N=!0,G=!0){let V=0;if(T){let F=!1;if(S!==null){const nt=S.texture.format;F=nt===Yl||nt===jl||nt===ql}if(F){const nt=S.texture.type,dt=nt===Kn||nt===es||nt===Br||nt===Ws||nt===Gl||nt===Vl,vt=Dt.getClearColor(),xt=Dt.getClearAlpha(),Ct=vt.r,Lt=vt.g,Mt=vt.b;dt?(f[0]=Ct,f[1]=Lt,f[2]=Mt,f[3]=xt,L.clearBufferuiv(L.COLOR,0,f)):(g[0]=Ct,g[1]=Lt,g[2]=Mt,g[3]=xt,L.clearBufferiv(L.COLOR,0,g))}else V|=L.COLOR_BUFFER_BIT}N&&(V|=L.DEPTH_BUFFER_BIT,L.clearDepth(this.capabilities.reverseDepthBuffer?0:1)),G&&(V|=L.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),L.clear(V)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",$,!1),e.removeEventListener("webglcontextrestored",ut,!1),e.removeEventListener("webglcontextcreationerror",pt,!1),mt.dispose(),Jt.dispose(),Ft.dispose(),w.dispose(),z.dispose(),Y.dispose(),de.dispose(),D.dispose(),yt.dispose(),q.dispose(),q.removeEventListener("sessionstart",Th),q.removeEventListener("sessionend",Rh),Oi.stop()};function $(T){T.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),_=!0}function ut(){console.log("THREE.WebGLRenderer: Context Restored."),_=!1;const T=fe.autoReset,N=gt.enabled,G=gt.autoUpdate,V=gt.needsUpdate,F=gt.type;ft(),fe.autoReset=T,gt.enabled=N,gt.autoUpdate=G,gt.needsUpdate=V,gt.type=F}function pt(T){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function Yt(T){const N=T.target;N.removeEventListener("dispose",Yt),Re(N)}function Re(T){en(T),Ft.remove(T)}function en(T){const N=Ft.get(T).programs;N!==void 0&&(N.forEach(function(G){yt.releaseProgram(G)}),T.isShaderMaterial&&yt.releaseShaderCache(T))}this.renderBufferDirect=function(T,N,G,V,F,nt){N===null&&(N=Xt);const dt=F.isMesh&&F.matrixWorld.determinant()<0,vt=Sp(T,N,G,V,F);It.setMaterial(V,dt);let xt=G.index,Ct=1;if(V.wireframe===!0){if(xt=Z.getWireframeAttribute(G),xt===void 0)return;Ct=2}const Lt=G.drawRange,Mt=G.attributes.position;let ae=Lt.start*Ct,pe=(Lt.start+Lt.count)*Ct;nt!==null&&(ae=Math.max(ae,nt.start*Ct),pe=Math.min(pe,(nt.start+nt.count)*Ct)),xt!==null?(ae=Math.max(ae,0),pe=Math.min(pe,xt.count)):Mt!=null&&(ae=Math.max(ae,0),pe=Math.min(pe,Mt.count));const ye=pe-ae;if(ye<0||ye===1/0)return;de.setup(F,V,vt,G,xt);let hn,se=bt;if(xt!==null&&(hn=K.get(xt),se=qt,se.setIndex(hn)),F.isMesh)V.wireframe===!0?(It.setLineWidth(V.wireframeLinewidth*jt()),se.setMode(L.LINES)):se.setMode(L.TRIANGLES);else if(F.isLine){let St=V.linewidth;St===void 0&&(St=1),It.setLineWidth(St*jt()),F.isLineSegments?se.setMode(L.LINES):F.isLineLoop?se.setMode(L.LINE_LOOP):se.setMode(L.LINE_STRIP)}else F.isPoints?se.setMode(L.POINTS):F.isSprite&&se.setMode(L.TRIANGLES);if(F.isBatchedMesh)if(F._multiDrawInstances!==null)se.renderMultiDrawInstances(F._multiDrawStarts,F._multiDrawCounts,F._multiDrawCount,F._multiDrawInstances);else if(Wt.get("WEBGL_multi_draw"))se.renderMultiDraw(F._multiDrawStarts,F._multiDrawCounts,F._multiDrawCount);else{const St=F._multiDrawStarts,ke=F._multiDrawCounts,re=F._multiDrawCount,Cn=xt?K.get(xt).bytesPerElement:1,os=Ft.get(V).currentProgram.getUniforms();for(let un=0;un<re;un++)os.setValue(L,"_gl_DrawID",un),se.render(St[un]/Cn,ke[un])}else if(F.isInstancedMesh)se.renderInstances(ae,ye,F.count);else if(G.isInstancedBufferGeometry){const St=G._maxInstanceCount!==void 0?G._maxInstanceCount:1/0,ke=Math.min(G.instanceCount,St);se.renderInstances(ae,ye,ke)}else se.render(ae,ye)};function ee(T,N,G){T.transparent===!0&&T.side===an&&T.forceSinglePass===!1?(T.side=tn,T.needsUpdate=!0,Zr(T,N,G),T.side=xi,T.needsUpdate=!0,Zr(T,N,G),T.side=an):Zr(T,N,G)}this.compile=function(T,N,G=null){G===null&&(G=T),m=Jt.get(G),m.init(N),y.push(m),G.traverseVisible(function(F){F.isLight&&F.layers.test(N.layers)&&(m.pushLight(F),F.castShadow&&m.pushShadow(F))}),T!==G&&T.traverseVisible(function(F){F.isLight&&F.layers.test(N.layers)&&(m.pushLight(F),F.castShadow&&m.pushShadow(F))}),m.setupLights();const V=new Set;return T.traverse(function(F){if(!(F.isMesh||F.isPoints||F.isLine||F.isSprite))return;const nt=F.material;if(nt)if(Array.isArray(nt))for(let dt=0;dt<nt.length;dt++){const vt=nt[dt];ee(vt,G,F),V.add(vt)}else ee(nt,G,F),V.add(nt)}),y.pop(),m=null,V},this.compileAsync=function(T,N,G=null){const V=this.compile(T,N,G);return new Promise(F=>{function nt(){if(V.forEach(function(dt){Ft.get(dt).currentProgram.isReady()&&V.delete(dt)}),V.size===0){F(T);return}setTimeout(nt,10)}Wt.get("KHR_parallel_shader_compile")!==null?nt():setTimeout(nt,10)})};let nn=null;function ni(T){nn&&nn(T)}function Th(){Oi.stop()}function Rh(){Oi.start()}const Oi=new wf;Oi.setAnimationLoop(ni),typeof self<"u"&&Oi.setContext(self),this.setAnimationLoop=function(T){nn=T,q.setAnimationLoop(T),T===null?Oi.stop():Oi.start()},q.addEventListener("sessionstart",Th),q.addEventListener("sessionend",Rh),this.render=function(T,N){if(N!==void 0&&N.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(_===!0)return;if(T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),N.parent===null&&N.matrixWorldAutoUpdate===!0&&N.updateMatrixWorld(),q.enabled===!0&&q.isPresenting===!0&&(q.cameraAutoUpdate===!0&&q.updateCamera(N),N=q.getCamera()),T.isScene===!0&&T.onBeforeRender(v,T,N,S),m=Jt.get(T,y.length),m.init(N),y.push(m),ct.multiplyMatrices(N.projectionMatrix,N.matrixWorldInverse),wt.setFromProjectionMatrix(ct),Q=this.localClippingEnabled,j=tt.init(this.clippingPlanes,Q),b=mt.get(T,p.length),b.init(),p.push(b),q.enabled===!0&&q.isPresenting===!0){const nt=v.xr.getDepthSensingMesh();nt!==null&&To(nt,N,-1/0,v.sortObjects)}To(T,N,0,v.sortObjects),b.finish(),v.sortObjects===!0&&b.sort(k,et),he=q.enabled===!1||q.isPresenting===!1||q.hasDepthSensing()===!1,he&&Dt.addToRenderList(b,T),this.info.render.frame++,j===!0&&tt.beginShadows();const G=m.state.shadowsArray;gt.render(G,T,N),j===!0&&tt.endShadows(),this.info.autoReset===!0&&this.info.reset();const V=b.opaque,F=b.transmissive;if(m.setupLights(),N.isArrayCamera){const nt=N.cameras;if(F.length>0)for(let dt=0,vt=nt.length;dt<vt;dt++){const xt=nt[dt];Ph(V,F,T,xt)}he&&Dt.render(T);for(let dt=0,vt=nt.length;dt<vt;dt++){const xt=nt[dt];Ch(b,T,xt,xt.viewport)}}else F.length>0&&Ph(V,F,T,N),he&&Dt.render(T),Ch(b,T,N);S!==null&&(P.updateMultisampleRenderTarget(S),P.updateRenderTargetMipmap(S)),T.isScene===!0&&T.onAfterRender(v,T,N),de.resetDefaultState(),C=-1,I=null,y.pop(),y.length>0?(m=y[y.length-1],j===!0&&tt.setGlobalState(v.clippingPlanes,m.state.camera)):m=null,p.pop(),p.length>0?b=p[p.length-1]:b=null};function To(T,N,G,V){if(T.visible===!1)return;if(T.layers.test(N.layers)){if(T.isGroup)G=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(N);else if(T.isLight)m.pushLight(T),T.castShadow&&m.pushShadow(T);else if(T.isSprite){if(!T.frustumCulled||wt.intersectsSprite(T)){V&&Pt.setFromMatrixPosition(T.matrixWorld).applyMatrix4(ct);const dt=Y.update(T),vt=T.material;vt.visible&&b.push(T,dt,vt,G,Pt.z,null)}}else if((T.isMesh||T.isLine||T.isPoints)&&(!T.frustumCulled||wt.intersectsObject(T))){const dt=Y.update(T),vt=T.material;if(V&&(T.boundingSphere!==void 0?(T.boundingSphere===null&&T.computeBoundingSphere(),Pt.copy(T.boundingSphere.center)):(dt.boundingSphere===null&&dt.computeBoundingSphere(),Pt.copy(dt.boundingSphere.center)),Pt.applyMatrix4(T.matrixWorld).applyMatrix4(ct)),Array.isArray(vt)){const xt=dt.groups;for(let Ct=0,Lt=xt.length;Ct<Lt;Ct++){const Mt=xt[Ct],ae=vt[Mt.materialIndex];ae&&ae.visible&&b.push(T,dt,ae,G,Pt.z,Mt)}}else vt.visible&&b.push(T,dt,vt,G,Pt.z,null)}}const nt=T.children;for(let dt=0,vt=nt.length;dt<vt;dt++)To(nt[dt],N,G,V)}function Ch(T,N,G,V){const F=T.opaque,nt=T.transmissive,dt=T.transparent;m.setupLightsView(G),j===!0&&tt.setGlobalState(v.clippingPlanes,G),V&&It.viewport(x.copy(V)),F.length>0&&Qr(F,N,G),nt.length>0&&Qr(nt,N,G),dt.length>0&&Qr(dt,N,G),It.buffers.depth.setTest(!0),It.buffers.depth.setMask(!0),It.buffers.color.setMask(!0),It.setPolygonOffset(!1)}function Ph(T,N,G,V){if((G.isScene===!0?G.overrideMaterial:null)!==null)return;m.state.transmissionRenderTarget[V.id]===void 0&&(m.state.transmissionRenderTarget[V.id]=new ns(1,1,{generateMipmaps:!0,type:Wt.has("EXT_color_buffer_half_float")||Wt.has("EXT_color_buffer_float")?Kr:Kn,minFilter:Xn,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Zt.workingColorSpace}));const nt=m.state.transmissionRenderTarget[V.id],dt=V.viewport||x;nt.setSize(dt.z,dt.w);const vt=v.getRenderTarget();v.setRenderTarget(nt),v.getClearColor(B),O=v.getClearAlpha(),O<1&&v.setClearColor(16777215,.5),v.clear(),he&&Dt.render(G);const xt=v.toneMapping;v.toneMapping=Ni;const Ct=V.viewport;if(V.viewport!==void 0&&(V.viewport=void 0),m.setupLightsView(V),j===!0&&tt.setGlobalState(v.clippingPlanes,V),Qr(T,G,V),P.updateMultisampleRenderTarget(nt),P.updateRenderTargetMipmap(nt),Wt.has("WEBGL_multisampled_render_to_texture")===!1){let Lt=!1;for(let Mt=0,ae=N.length;Mt<ae;Mt++){const pe=N[Mt],ye=pe.object,hn=pe.geometry,se=pe.material,St=pe.group;if(se.side===an&&ye.layers.test(V.layers)){const ke=se.side;se.side=tn,se.needsUpdate=!0,Lh(ye,G,V,hn,se,St),se.side=ke,se.needsUpdate=!0,Lt=!0}}Lt===!0&&(P.updateMultisampleRenderTarget(nt),P.updateRenderTargetMipmap(nt))}v.setRenderTarget(vt),v.setClearColor(B,O),Ct!==void 0&&(V.viewport=Ct),v.toneMapping=xt}function Qr(T,N,G){const V=N.isScene===!0?N.overrideMaterial:null;for(let F=0,nt=T.length;F<nt;F++){const dt=T[F],vt=dt.object,xt=dt.geometry,Ct=V===null?dt.material:V,Lt=dt.group;vt.layers.test(G.layers)&&Lh(vt,N,G,xt,Ct,Lt)}}function Lh(T,N,G,V,F,nt){T.onBeforeRender(v,N,G,V,F,nt),T.modelViewMatrix.multiplyMatrices(G.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),F.onBeforeRender(v,N,G,V,T,nt),F.transparent===!0&&F.side===an&&F.forceSinglePass===!1?(F.side=tn,F.needsUpdate=!0,v.renderBufferDirect(G,N,V,F,T,nt),F.side=xi,F.needsUpdate=!0,v.renderBufferDirect(G,N,V,F,T,nt),F.side=an):v.renderBufferDirect(G,N,V,F,T,nt),T.onAfterRender(v,N,G,V,F,nt)}function Zr(T,N,G){N.isScene!==!0&&(N=Xt);const V=Ft.get(T),F=m.state.lights,nt=m.state.shadowsArray,dt=F.state.version,vt=yt.getParameters(T,F.state,nt,N,G),xt=yt.getProgramCacheKey(vt);let Ct=V.programs;V.environment=T.isMeshStandardMaterial?N.environment:null,V.fog=N.fog,V.envMap=(T.isMeshStandardMaterial?z:w).get(T.envMap||V.environment),V.envMapRotation=V.environment!==null&&T.envMap===null?N.environmentRotation:T.envMapRotation,Ct===void 0&&(T.addEventListener("dispose",Yt),Ct=new Map,V.programs=Ct);let Lt=Ct.get(xt);if(Lt!==void 0){if(V.currentProgram===Lt&&V.lightsStateVersion===dt)return Dh(T,vt),Lt}else vt.uniforms=yt.getUniforms(T),T.onBeforeCompile(vt,v),Lt=yt.acquireProgram(vt,xt),Ct.set(xt,Lt),V.uniforms=vt.uniforms;const Mt=V.uniforms;return(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(Mt.clippingPlanes=tt.uniform),Dh(T,vt),V.needsLights=Ap(T),V.lightsStateVersion=dt,V.needsLights&&(Mt.ambientLightColor.value=F.state.ambient,Mt.lightProbe.value=F.state.probe,Mt.directionalLights.value=F.state.directional,Mt.directionalLightShadows.value=F.state.directionalShadow,Mt.spotLights.value=F.state.spot,Mt.spotLightShadows.value=F.state.spotShadow,Mt.rectAreaLights.value=F.state.rectArea,Mt.ltc_1.value=F.state.rectAreaLTC1,Mt.ltc_2.value=F.state.rectAreaLTC2,Mt.pointLights.value=F.state.point,Mt.pointLightShadows.value=F.state.pointShadow,Mt.hemisphereLights.value=F.state.hemi,Mt.directionalShadowMap.value=F.state.directionalShadowMap,Mt.directionalShadowMatrix.value=F.state.directionalShadowMatrix,Mt.spotShadowMap.value=F.state.spotShadowMap,Mt.spotLightMatrix.value=F.state.spotLightMatrix,Mt.spotLightMap.value=F.state.spotLightMap,Mt.pointShadowMap.value=F.state.pointShadowMap,Mt.pointShadowMatrix.value=F.state.pointShadowMatrix),V.currentProgram=Lt,V.uniformsList=null,Lt}function Ih(T){if(T.uniformsList===null){const N=T.currentProgram.getUniforms();T.uniformsList=Ja.seqWithValue(N.seq,T.uniforms)}return T.uniformsList}function Dh(T,N){const G=Ft.get(T);G.outputColorSpace=N.outputColorSpace,G.batching=N.batching,G.batchingColor=N.batchingColor,G.instancing=N.instancing,G.instancingColor=N.instancingColor,G.instancingMorph=N.instancingMorph,G.skinning=N.skinning,G.morphTargets=N.morphTargets,G.morphNormals=N.morphNormals,G.morphColors=N.morphColors,G.morphTargetsCount=N.morphTargetsCount,G.numClippingPlanes=N.numClippingPlanes,G.numIntersection=N.numClipIntersection,G.vertexAlphas=N.vertexAlphas,G.vertexTangents=N.vertexTangents,G.toneMapping=N.toneMapping}function Sp(T,N,G,V,F){N.isScene!==!0&&(N=Xt),P.resetTextureUnits();const nt=N.fog,dt=V.isMeshStandardMaterial?N.environment:null,vt=S===null?v.outputColorSpace:S.isXRRenderTarget===!0?S.texture.colorSpace:He,xt=(V.isMeshStandardMaterial?z:w).get(V.envMap||dt),Ct=V.vertexColors===!0&&!!G.attributes.color&&G.attributes.color.itemSize===4,Lt=!!G.attributes.tangent&&(!!V.normalMap||V.anisotropy>0),Mt=!!G.morphAttributes.position,ae=!!G.morphAttributes.normal,pe=!!G.morphAttributes.color;let ye=Ni;V.toneMapped&&(S===null||S.isXRRenderTarget===!0)&&(ye=v.toneMapping);const hn=G.morphAttributes.position||G.morphAttributes.normal||G.morphAttributes.color,se=hn!==void 0?hn.length:0,St=Ft.get(V),ke=m.state.lights;if(j===!0&&(Q===!0||T!==I)){const xn=T===I&&V.id===C;tt.setState(V,T,xn)}let re=!1;V.version===St.__version?(St.needsLights&&St.lightsStateVersion!==ke.state.version||St.outputColorSpace!==vt||F.isBatchedMesh&&St.batching===!1||!F.isBatchedMesh&&St.batching===!0||F.isBatchedMesh&&St.batchingColor===!0&&F.colorTexture===null||F.isBatchedMesh&&St.batchingColor===!1&&F.colorTexture!==null||F.isInstancedMesh&&St.instancing===!1||!F.isInstancedMesh&&St.instancing===!0||F.isSkinnedMesh&&St.skinning===!1||!F.isSkinnedMesh&&St.skinning===!0||F.isInstancedMesh&&St.instancingColor===!0&&F.instanceColor===null||F.isInstancedMesh&&St.instancingColor===!1&&F.instanceColor!==null||F.isInstancedMesh&&St.instancingMorph===!0&&F.morphTexture===null||F.isInstancedMesh&&St.instancingMorph===!1&&F.morphTexture!==null||St.envMap!==xt||V.fog===!0&&St.fog!==nt||St.numClippingPlanes!==void 0&&(St.numClippingPlanes!==tt.numPlanes||St.numIntersection!==tt.numIntersection)||St.vertexAlphas!==Ct||St.vertexTangents!==Lt||St.morphTargets!==Mt||St.morphNormals!==ae||St.morphColors!==pe||St.toneMapping!==ye||St.morphTargetsCount!==se)&&(re=!0):(re=!0,St.__version=V.version);let Cn=St.currentProgram;re===!0&&(Cn=Zr(V,N,F));let os=!1,un=!1,Ro=!1;const Se=Cn.getUniforms(),yi=St.uniforms;if(It.useProgram(Cn.program)&&(os=!0,un=!0,Ro=!0),V.id!==C&&(C=V.id,un=!0),os||I!==T){$t.reverseDepthBuffer?(at.copy(T.projectionMatrix),Nm(at),Fm(at),Se.setValue(L,"projectionMatrix",at)):Se.setValue(L,"projectionMatrix",T.projectionMatrix),Se.setValue(L,"viewMatrix",T.matrixWorldInverse);const xn=Se.map.cameraPosition;xn!==void 0&&xn.setValue(L,Ut.setFromMatrixPosition(T.matrixWorld)),$t.logarithmicDepthBuffer&&Se.setValue(L,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),(V.isMeshPhongMaterial||V.isMeshToonMaterial||V.isMeshLambertMaterial||V.isMeshBasicMaterial||V.isMeshStandardMaterial||V.isShaderMaterial)&&Se.setValue(L,"isOrthographic",T.isOrthographicCamera===!0),I!==T&&(I=T,un=!0,Ro=!0)}if(F.isSkinnedMesh){Se.setOptional(L,F,"bindMatrix"),Se.setOptional(L,F,"bindMatrixInverse");const xn=F.skeleton;xn&&(xn.boneTexture===null&&xn.computeBoneTexture(),Se.setValue(L,"boneTexture",xn.boneTexture,P))}F.isBatchedMesh&&(Se.setOptional(L,F,"batchingTexture"),Se.setValue(L,"batchingTexture",F._matricesTexture,P),Se.setOptional(L,F,"batchingIdTexture"),Se.setValue(L,"batchingIdTexture",F._indirectTexture,P),Se.setOptional(L,F,"batchingColorTexture"),F._colorsTexture!==null&&Se.setValue(L,"batchingColorTexture",F._colorsTexture,P));const Co=G.morphAttributes;if((Co.position!==void 0||Co.normal!==void 0||Co.color!==void 0)&&Nt.update(F,G,Cn),(un||St.receiveShadow!==F.receiveShadow)&&(St.receiveShadow=F.receiveShadow,Se.setValue(L,"receiveShadow",F.receiveShadow)),V.isMeshGouraudMaterial&&V.envMap!==null&&(yi.envMap.value=xt,yi.flipEnvMap.value=xt.isCubeTexture&&xt.isRenderTargetTexture===!1?-1:1),V.isMeshStandardMaterial&&V.envMap===null&&N.environment!==null&&(yi.envMapIntensity.value=N.environmentIntensity),un&&(Se.setValue(L,"toneMappingExposure",v.toneMappingExposure),St.needsLights&&wp(yi,Ro),nt&&V.fog===!0&&lt.refreshFogUniforms(yi,nt),lt.refreshMaterialUniforms(yi,V,J,H,m.state.transmissionRenderTarget[T.id]),Ja.upload(L,Ih(St),yi,P)),V.isShaderMaterial&&V.uniformsNeedUpdate===!0&&(Ja.upload(L,Ih(St),yi,P),V.uniformsNeedUpdate=!1),V.isSpriteMaterial&&Se.setValue(L,"center",F.center),Se.setValue(L,"modelViewMatrix",F.modelViewMatrix),Se.setValue(L,"normalMatrix",F.normalMatrix),Se.setValue(L,"modelMatrix",F.matrixWorld),V.isShaderMaterial||V.isRawShaderMaterial){const xn=V.uniformsGroups;for(let Po=0,Ep=xn.length;Po<Ep;Po++){const Nh=xn[Po];D.update(Nh,Cn),D.bind(Nh,Cn)}}return Cn}function wp(T,N){T.ambientLightColor.needsUpdate=N,T.lightProbe.needsUpdate=N,T.directionalLights.needsUpdate=N,T.directionalLightShadows.needsUpdate=N,T.pointLights.needsUpdate=N,T.pointLightShadows.needsUpdate=N,T.spotLights.needsUpdate=N,T.spotLightShadows.needsUpdate=N,T.rectAreaLights.needsUpdate=N,T.hemisphereLights.needsUpdate=N}function Ap(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return M},this.getActiveMipmapLevel=function(){return E},this.getRenderTarget=function(){return S},this.setRenderTargetTextures=function(T,N,G){Ft.get(T.texture).__webglTexture=N,Ft.get(T.depthTexture).__webglTexture=G;const V=Ft.get(T);V.__hasExternalTextures=!0,V.__autoAllocateDepthBuffer=G===void 0,V.__autoAllocateDepthBuffer||Wt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),V.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(T,N){const G=Ft.get(T);G.__webglFramebuffer=N,G.__useDefaultFramebuffer=N===void 0},this.setRenderTarget=function(T,N=0,G=0){S=T,M=N,E=G;let V=!0,F=null,nt=!1,dt=!1;if(T){const xt=Ft.get(T);if(xt.__useDefaultFramebuffer!==void 0)It.bindFramebuffer(L.FRAMEBUFFER,null),V=!1;else if(xt.__webglFramebuffer===void 0)P.setupRenderTarget(T);else if(xt.__hasExternalTextures)P.rebindTextures(T,Ft.get(T.texture).__webglTexture,Ft.get(T.depthTexture).__webglTexture);else if(T.depthBuffer){const Mt=T.depthTexture;if(xt.__boundDepthTexture!==Mt){if(Mt!==null&&Ft.has(Mt)&&(T.width!==Mt.image.width||T.height!==Mt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");P.setupDepthRenderbuffer(T)}}const Ct=T.texture;(Ct.isData3DTexture||Ct.isDataArrayTexture||Ct.isCompressedArrayTexture)&&(dt=!0);const Lt=Ft.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(Array.isArray(Lt[N])?F=Lt[N][G]:F=Lt[N],nt=!0):T.samples>0&&P.useMultisampledRTT(T)===!1?F=Ft.get(T).__webglMultisampledFramebuffer:Array.isArray(Lt)?F=Lt[G]:F=Lt,x.copy(T.viewport),A.copy(T.scissor),U=T.scissorTest}else x.copy(st).multiplyScalar(J).floor(),A.copy(rt).multiplyScalar(J).floor(),U=At;if(It.bindFramebuffer(L.FRAMEBUFFER,F)&&V&&It.drawBuffers(T,F),It.viewport(x),It.scissor(A),It.setScissorTest(U),nt){const xt=Ft.get(T.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_CUBE_MAP_POSITIVE_X+N,xt.__webglTexture,G)}else if(dt){const xt=Ft.get(T.texture),Ct=N||0;L.framebufferTextureLayer(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,xt.__webglTexture,G||0,Ct)}C=-1},this.readRenderTargetPixels=function(T,N,G,V,F,nt,dt){if(!(T&&T.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let vt=Ft.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&dt!==void 0&&(vt=vt[dt]),vt){It.bindFramebuffer(L.FRAMEBUFFER,vt);try{const xt=T.texture,Ct=xt.format,Lt=xt.type;if(!$t.textureFormatReadable(Ct)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!$t.textureTypeReadable(Lt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}N>=0&&N<=T.width-V&&G>=0&&G<=T.height-F&&L.readPixels(N,G,V,F,kt.convert(Ct),kt.convert(Lt),nt)}finally{const xt=S!==null?Ft.get(S).__webglFramebuffer:null;It.bindFramebuffer(L.FRAMEBUFFER,xt)}}},this.readRenderTargetPixelsAsync=async function(T,N,G,V,F,nt,dt){if(!(T&&T.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let vt=Ft.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&dt!==void 0&&(vt=vt[dt]),vt){const xt=T.texture,Ct=xt.format,Lt=xt.type;if(!$t.textureFormatReadable(Ct))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!$t.textureTypeReadable(Lt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(N>=0&&N<=T.width-V&&G>=0&&G<=T.height-F){It.bindFramebuffer(L.FRAMEBUFFER,vt);const Mt=L.createBuffer();L.bindBuffer(L.PIXEL_PACK_BUFFER,Mt),L.bufferData(L.PIXEL_PACK_BUFFER,nt.byteLength,L.STREAM_READ),L.readPixels(N,G,V,F,kt.convert(Ct),kt.convert(Lt),0);const ae=S!==null?Ft.get(S).__webglFramebuffer:null;It.bindFramebuffer(L.FRAMEBUFFER,ae);const pe=L.fenceSync(L.SYNC_GPU_COMMANDS_COMPLETE,0);return L.flush(),await Dm(L,pe,4),L.bindBuffer(L.PIXEL_PACK_BUFFER,Mt),L.getBufferSubData(L.PIXEL_PACK_BUFFER,0,nt),L.deleteBuffer(Mt),L.deleteSync(pe),nt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(T,N=null,G=0){T.isTexture!==!0&&($a("WebGLRenderer: copyFramebufferToTexture function signature has changed."),N=arguments[0]||null,T=arguments[1]);const V=Math.pow(2,-G),F=Math.floor(T.image.width*V),nt=Math.floor(T.image.height*V),dt=N!==null?N.x:0,vt=N!==null?N.y:0;P.setTexture2D(T,0),L.copyTexSubImage2D(L.TEXTURE_2D,G,0,0,dt,vt,F,nt),It.unbindTexture()},this.copyTextureToTexture=function(T,N,G=null,V=null,F=0){T.isTexture!==!0&&($a("WebGLRenderer: copyTextureToTexture function signature has changed."),V=arguments[0]||null,T=arguments[1],N=arguments[2],F=arguments[3]||0,G=null);let nt,dt,vt,xt,Ct,Lt;G!==null?(nt=G.max.x-G.min.x,dt=G.max.y-G.min.y,vt=G.min.x,xt=G.min.y):(nt=T.image.width,dt=T.image.height,vt=0,xt=0),V!==null?(Ct=V.x,Lt=V.y):(Ct=0,Lt=0);const Mt=kt.convert(N.format),ae=kt.convert(N.type);P.setTexture2D(N,0),L.pixelStorei(L.UNPACK_FLIP_Y_WEBGL,N.flipY),L.pixelStorei(L.UNPACK_PREMULTIPLY_ALPHA_WEBGL,N.premultiplyAlpha),L.pixelStorei(L.UNPACK_ALIGNMENT,N.unpackAlignment);const pe=L.getParameter(L.UNPACK_ROW_LENGTH),ye=L.getParameter(L.UNPACK_IMAGE_HEIGHT),hn=L.getParameter(L.UNPACK_SKIP_PIXELS),se=L.getParameter(L.UNPACK_SKIP_ROWS),St=L.getParameter(L.UNPACK_SKIP_IMAGES),ke=T.isCompressedTexture?T.mipmaps[F]:T.image;L.pixelStorei(L.UNPACK_ROW_LENGTH,ke.width),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,ke.height),L.pixelStorei(L.UNPACK_SKIP_PIXELS,vt),L.pixelStorei(L.UNPACK_SKIP_ROWS,xt),T.isDataTexture?L.texSubImage2D(L.TEXTURE_2D,F,Ct,Lt,nt,dt,Mt,ae,ke.data):T.isCompressedTexture?L.compressedTexSubImage2D(L.TEXTURE_2D,F,Ct,Lt,ke.width,ke.height,Mt,ke.data):L.texSubImage2D(L.TEXTURE_2D,F,Ct,Lt,nt,dt,Mt,ae,ke),L.pixelStorei(L.UNPACK_ROW_LENGTH,pe),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,ye),L.pixelStorei(L.UNPACK_SKIP_PIXELS,hn),L.pixelStorei(L.UNPACK_SKIP_ROWS,se),L.pixelStorei(L.UNPACK_SKIP_IMAGES,St),F===0&&N.generateMipmaps&&L.generateMipmap(L.TEXTURE_2D),It.unbindTexture()},this.copyTextureToTexture3D=function(T,N,G=null,V=null,F=0){T.isTexture!==!0&&($a("WebGLRenderer: copyTextureToTexture3D function signature has changed."),G=arguments[0]||null,V=arguments[1]||null,T=arguments[2],N=arguments[3],F=arguments[4]||0);let nt,dt,vt,xt,Ct,Lt,Mt,ae,pe;const ye=T.isCompressedTexture?T.mipmaps[F]:T.image;G!==null?(nt=G.max.x-G.min.x,dt=G.max.y-G.min.y,vt=G.max.z-G.min.z,xt=G.min.x,Ct=G.min.y,Lt=G.min.z):(nt=ye.width,dt=ye.height,vt=ye.depth,xt=0,Ct=0,Lt=0),V!==null?(Mt=V.x,ae=V.y,pe=V.z):(Mt=0,ae=0,pe=0);const hn=kt.convert(N.format),se=kt.convert(N.type);let St;if(N.isData3DTexture)P.setTexture3D(N,0),St=L.TEXTURE_3D;else if(N.isDataArrayTexture||N.isCompressedArrayTexture)P.setTexture2DArray(N,0),St=L.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}L.pixelStorei(L.UNPACK_FLIP_Y_WEBGL,N.flipY),L.pixelStorei(L.UNPACK_PREMULTIPLY_ALPHA_WEBGL,N.premultiplyAlpha),L.pixelStorei(L.UNPACK_ALIGNMENT,N.unpackAlignment);const ke=L.getParameter(L.UNPACK_ROW_LENGTH),re=L.getParameter(L.UNPACK_IMAGE_HEIGHT),Cn=L.getParameter(L.UNPACK_SKIP_PIXELS),os=L.getParameter(L.UNPACK_SKIP_ROWS),un=L.getParameter(L.UNPACK_SKIP_IMAGES);L.pixelStorei(L.UNPACK_ROW_LENGTH,ye.width),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,ye.height),L.pixelStorei(L.UNPACK_SKIP_PIXELS,xt),L.pixelStorei(L.UNPACK_SKIP_ROWS,Ct),L.pixelStorei(L.UNPACK_SKIP_IMAGES,Lt),T.isDataTexture||T.isData3DTexture?L.texSubImage3D(St,F,Mt,ae,pe,nt,dt,vt,hn,se,ye.data):N.isCompressedArrayTexture?L.compressedTexSubImage3D(St,F,Mt,ae,pe,nt,dt,vt,hn,ye.data):L.texSubImage3D(St,F,Mt,ae,pe,nt,dt,vt,hn,se,ye),L.pixelStorei(L.UNPACK_ROW_LENGTH,ke),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,re),L.pixelStorei(L.UNPACK_SKIP_PIXELS,Cn),L.pixelStorei(L.UNPACK_SKIP_ROWS,os),L.pixelStorei(L.UNPACK_SKIP_IMAGES,un),F===0&&N.generateMipmaps&&L.generateMipmap(St),It.unbindTexture()},this.initRenderTarget=function(T){Ft.get(T).__webglFramebuffer===void 0&&P.setupRenderTarget(T)},this.initTexture=function(T){T.isCubeTexture?P.setTextureCube(T,0):T.isData3DTexture?P.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?P.setTexture2DArray(T,0):P.setTexture2D(T,0),It.unbindTexture()},this.resetState=function(){M=0,E=0,S=null,It.reset(),de.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return mi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=t===Kl?"display-p3":"srgb",e.unpackColorSpace=Zt.workingColorSpace===go?"display-p3":"srgb"}}class Pf extends ge{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new We,this.environmentIntensity=1,this.environmentRotation=new We,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class Lf{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=wl,this.updateRanges=[],this.version=0,this.uuid=Tn()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let i=0,r=this.stride;i<r;i++)this.array[t+i]=e.array[n+i];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Tn()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(e,this.stride);return n.setUsage(this.usage),n}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Tn()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const qe=new R;class Vr{constructor(t,e,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)qe.fromBufferAttribute(this,e),qe.applyMatrix4(t),this.setXYZ(e,qe.x,qe.y,qe.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)qe.fromBufferAttribute(this,e),qe.applyNormalMatrix(t),this.setXYZ(e,qe.x,qe.y,qe.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)qe.fromBufferAttribute(this,e),qe.transformDirection(t),this.setXYZ(e,qe.x,qe.y,qe.z);return this}getComponent(t,e){let n=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(n=Dn(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=oe(n,this.array)),this.data.array[t*this.data.stride+this.offset+e]=n,this}setX(t,e){return this.normalized&&(e=oe(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=oe(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=oe(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=oe(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=Dn(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=Dn(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=Dn(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=Dn(e,this.array)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=oe(e,this.array),n=oe(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,i){return t=t*this.data.stride+this.offset,this.normalized&&(e=oe(e,this.array),n=oe(n,this.array),i=oe(i,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=i,this}setXYZW(t,e,n,i,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=oe(e,this.array),n=oe(n,this.array),i=oe(i,this.array),r=oe(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=i,this.data.array[t+3]=r,this}clone(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[i+r])}return new Te(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new Vr(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[i+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class If extends Un{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Et(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}let Ms;const hr=new R,Ss=new R,ws=new R,As=new it,ur=new it,Df=new _t,_a=new R,dr=new R,ya=new R,Lu=new it,ac=new it,Iu=new it;class Xx extends ge{constructor(t=new If){if(super(),this.isSprite=!0,this.type="Sprite",Ms===void 0){Ms=new _e;const e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new Lf(e,5);Ms.setIndex([0,1,2,0,2,3]),Ms.setAttribute("position",new Vr(n,3,0,!1)),Ms.setAttribute("uv",new Vr(n,2,3,!1))}this.geometry=Ms,this.material=t,this.center=new it(.5,.5)}raycast(t,e){t.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Ss.setFromMatrixScale(this.matrixWorld),Df.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),ws.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Ss.multiplyScalar(-ws.z);const n=this.material.rotation;let i,r;n!==0&&(r=Math.cos(n),i=Math.sin(n));const a=this.center;Ma(_a.set(-.5,-.5,0),ws,a,Ss,i,r),Ma(dr.set(.5,-.5,0),ws,a,Ss,i,r),Ma(ya.set(.5,.5,0),ws,a,Ss,i,r),Lu.set(0,0),ac.set(1,0),Iu.set(1,1);let o=t.ray.intersectTriangle(_a,dr,ya,!1,hr);if(o===null&&(Ma(dr.set(-.5,.5,0),ws,a,Ss,i,r),ac.set(0,1),o=t.ray.intersectTriangle(_a,ya,dr,!1,hr),o===null))return;const c=t.ray.origin.distanceTo(hr);c<t.near||c>t.far||e.push({distance:c,point:hr.clone(),uv:gn.getInterpolation(hr,_a,dr,ya,Lu,ac,Iu,new it),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}}function Ma(s,t,e,n,i,r){As.subVectors(s,e).addScalar(.5).multiply(n),i!==void 0?(ur.x=r*As.x-i*As.y,ur.y=i*As.x+r*As.y):ur.copy(As),s.copy(t),s.x+=ur.x,s.y+=ur.y,s.applyMatrix4(Df)}const Du=new R,Nu=new ne,Fu=new ne,jx=new R,Uu=new _t,Sa=new R,oc=new Qn,ku=new _t,cc=new bo;class Yx extends Qt{constructor(t,e){super(t,e),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=Oh,this.bindMatrix=new _t,this.bindMatrixInverse=new _t,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const t=this.geometry;this.boundingBox===null&&(this.boundingBox=new Jn),this.boundingBox.makeEmpty();const e=t.getAttribute("position");for(let n=0;n<e.count;n++)this.getVertexPosition(n,Sa),this.boundingBox.expandByPoint(Sa)}computeBoundingSphere(){const t=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new Qn),this.boundingSphere.makeEmpty();const e=t.getAttribute("position");for(let n=0;n<e.count;n++)this.getVertexPosition(n,Sa),this.boundingSphere.expandByPoint(Sa)}copy(t,e){return super.copy(t,e),this.bindMode=t.bindMode,this.bindMatrix.copy(t.bindMatrix),this.bindMatrixInverse.copy(t.bindMatrixInverse),this.skeleton=t.skeleton,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}raycast(t,e){const n=this.material,i=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),oc.copy(this.boundingSphere),oc.applyMatrix4(i),t.ray.intersectsSphere(oc)!==!1&&(ku.copy(i).invert(),cc.copy(t.ray).applyMatrix4(ku),!(this.boundingBox!==null&&cc.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(t,e,cc)))}getVertexPosition(t,e){return super.getVertexPosition(t,e),this.applyBoneTransform(t,e),e}bind(t,e){this.skeleton=t,e===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),e=this.matrixWorld),this.bindMatrix.copy(e),this.bindMatrixInverse.copy(e).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const t=new ne,e=this.geometry.attributes.skinWeight;for(let n=0,i=e.count;n<i;n++){t.fromBufferAttribute(e,n);const r=1/t.manhattanLength();r!==1/0?t.multiplyScalar(r):t.set(1,0,0,0),e.setXYZW(n,t.x,t.y,t.z,t.w)}}updateMatrixWorld(t){super.updateMatrixWorld(t),this.bindMode===Oh?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===im?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(t,e){const n=this.skeleton,i=this.geometry;Nu.fromBufferAttribute(i.attributes.skinIndex,t),Fu.fromBufferAttribute(i.attributes.skinWeight,t),Du.copy(e).applyMatrix4(this.bindMatrix),e.set(0,0,0);for(let r=0;r<4;r++){const a=Fu.getComponent(r);if(a!==0){const o=Nu.getComponent(r);Uu.multiplyMatrices(n.bones[o].matrixWorld,n.boneInverses[o]),e.addScaledVector(jx.copy(Du).applyMatrix4(Uu),a)}}return e.applyMatrix4(this.bindMatrixInverse)}}class Nf extends ge{constructor(){super(),this.isBone=!0,this.type="Bone"}}class th extends Le{constructor(t=null,e=1,n=1,i,r,a,o,c,l=Je,h=Je,u,d){super(null,a,o,c,l,h,i,r,u,d),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Ou=new _t,Kx=new _t;class eh{constructor(t=[],e=[]){this.uuid=Tn(),this.bones=t.slice(0),this.boneInverses=e,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){const t=this.bones,e=this.boneInverses;if(this.boneMatrices=new Float32Array(t.length*16),e.length===0)this.calculateInverses();else if(t.length!==e.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,i=this.bones.length;n<i;n++)this.boneInverses.push(new _t)}}calculateInverses(){this.boneInverses.length=0;for(let t=0,e=this.bones.length;t<e;t++){const n=new _t;this.bones[t]&&n.copy(this.bones[t].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let t=0,e=this.bones.length;t<e;t++){const n=this.bones[t];n&&n.matrixWorld.copy(this.boneInverses[t]).invert()}for(let t=0,e=this.bones.length;t<e;t++){const n=this.bones[t];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){const t=this.bones,e=this.boneInverses,n=this.boneMatrices,i=this.boneTexture;for(let r=0,a=t.length;r<a;r++){const o=t[r]?t[r].matrixWorld:Kx;Ou.multiplyMatrices(o,e[r]),Ou.toArray(n,r*16)}i!==null&&(i.needsUpdate=!0)}clone(){return new eh(this.bones,this.boneInverses)}computeBoneTexture(){let t=Math.sqrt(this.bones.length*4);t=Math.ceil(t/4)*4,t=Math.max(t,4);const e=new Float32Array(t*t*4);e.set(this.boneMatrices);const n=new th(e,t,t,En,Nn);return n.needsUpdate=!0,this.boneMatrices=e,this.boneTexture=n,this}getBoneByName(t){for(let e=0,n=this.bones.length;e<n;e++){const i=this.bones[e];if(i.name===t)return i}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(t,e){this.uuid=t.uuid;for(let n=0,i=t.bones.length;n<i;n++){const r=t.bones[n];let a=e[r];a===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",r),a=new Nf),this.bones.push(a),this.boneInverses.push(new _t().fromArray(t.boneInverses[n]))}return this.init(),this}toJSON(){const t={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};t.uuid=this.uuid;const e=this.bones,n=this.boneInverses;for(let i=0,r=e.length;i<r;i++){const a=e[i];t.bones.push(a.uuid);const o=n[i];t.boneInverses.push(o.toArray())}return t}}class Fn extends Te{constructor(t,e,n,i=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){const t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}}const Es=new _t,Bu=new _t,wa=[],zu=new Jn,$x=new _t,fr=new Qt,pr=new Qn;class Fi extends Qt{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new Fn(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,$x)}computeBoundingBox(){const t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new Jn),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Es),zu.copy(t.boundingBox).applyMatrix4(Es),this.boundingBox.union(zu)}computeBoundingSphere(){const t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new Qn),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Es),pr.copy(t.boundingSphere).applyMatrix4(Es),this.boundingSphere.union(pr)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){const n=e.morphTargetInfluences,i=this.morphTexture.source.data.data,r=n.length+1,a=t*r+1;for(let o=0;o<n.length;o++)n[o]=i[a+o]}raycast(t,e){const n=this.matrixWorld,i=this.count;if(fr.geometry=this.geometry,fr.material=this.material,fr.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),pr.copy(this.boundingSphere),pr.applyMatrix4(n),t.ray.intersectsSphere(pr)!==!1))for(let r=0;r<i;r++){this.getMatrixAt(r,Es),Bu.multiplyMatrices(n,Es),fr.matrixWorld=Bu,fr.raycast(t,wa);for(let a=0,o=wa.length;a<o;a++){const c=wa[a];c.instanceId=r,c.object=this,e.push(c)}wa.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new Fn(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,e){const n=e.morphTargetInfluences,i=n.length+1;this.morphTexture===null&&(this.morphTexture=new th(new Float32Array(i*this.count),i,this.count,Wl,Nn));const r=this.morphTexture.source.data.data;let a=0;for(let l=0;l<n.length;l++)a+=n[l];const o=this.geometry.morphTargetsRelative?1:1-a,c=i*t;r[c]=o,r.set(n,c+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}}class ro extends Un{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Et(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const ao=new R,oo=new R,Hu=new _t,mr=new bo,Aa=new Qn,lc=new R,Gu=new R;class nh extends ge{constructor(t=new _e,e=new ro){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[0];for(let i=1,r=e.count;i<r;i++)ao.fromBufferAttribute(e,i-1),oo.fromBufferAttribute(e,i),n[i]=n[i-1],n[i]+=ao.distanceTo(oo);t.setAttribute("lineDistance",new te(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){const n=this.geometry,i=this.matrixWorld,r=t.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Aa.copy(n.boundingSphere),Aa.applyMatrix4(i),Aa.radius+=r,t.ray.intersectsSphere(Aa)===!1)return;Hu.copy(i).invert(),mr.copy(t.ray).applyMatrix4(Hu);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=this.isLineSegments?2:1,h=n.index,d=n.attributes.position;if(h!==null){const f=Math.max(0,a.start),g=Math.min(h.count,a.start+a.count);for(let b=f,m=g-1;b<m;b+=l){const p=h.getX(b),y=h.getX(b+1),v=Ea(this,t,mr,c,p,y);v&&e.push(v)}if(this.isLineLoop){const b=h.getX(g-1),m=h.getX(f),p=Ea(this,t,mr,c,b,m);p&&e.push(p)}}else{const f=Math.max(0,a.start),g=Math.min(d.count,a.start+a.count);for(let b=f,m=g-1;b<m;b+=l){const p=Ea(this,t,mr,c,b,b+1);p&&e.push(p)}if(this.isLineLoop){const b=Ea(this,t,mr,c,g-1,f);b&&e.push(b)}}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){const o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function Ea(s,t,e,n,i,r){const a=s.geometry.attributes.position;if(ao.fromBufferAttribute(a,i),oo.fromBufferAttribute(a,r),e.distanceSqToSegment(ao,oo,lc,Gu)>n)return;lc.applyMatrix4(s.matrixWorld);const c=t.ray.origin.distanceTo(lc);if(!(c<t.near||c>t.far))return{distance:c,point:Gu.clone().applyMatrix4(s.matrixWorld),index:i,face:null,faceIndex:null,barycoord:null,object:s}}const Vu=new R,Wu=new R;class Qa extends nh{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[];for(let i=0,r=e.count;i<r;i+=2)Vu.fromBufferAttribute(e,i),Wu.fromBufferAttribute(e,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+Vu.distanceTo(Wu);t.setAttribute("lineDistance",new te(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Jx extends nh{constructor(t,e){super(t,e),this.isLineLoop=!0,this.type="LineLoop"}}class Ff extends Un{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Et(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const qu=new _t,Tl=new bo,Ta=new Qn,Ra=new R;class Uf extends ge{constructor(t=new _e,e=new Ff){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){const n=this.geometry,i=this.matrixWorld,r=t.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Ta.copy(n.boundingSphere),Ta.applyMatrix4(i),Ta.radius+=r,t.ray.intersectsSphere(Ta)===!1)return;qu.copy(i).invert(),Tl.copy(t.ray).applyMatrix4(qu);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=n.index,u=n.attributes.position;if(l!==null){const d=Math.max(0,a.start),f=Math.min(l.count,a.start+a.count);for(let g=d,b=f;g<b;g++){const m=l.getX(g);Ra.fromBufferAttribute(u,m),Xu(Ra,m,c,i,t,e,this)}}else{const d=Math.max(0,a.start),f=Math.min(u.count,a.start+a.count);for(let g=d,b=f;g<b;g++)Ra.fromBufferAttribute(u,g),Xu(Ra,g,c,i,t,e,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){const o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function Xu(s,t,e,n,i,r,a){const o=Tl.distanceSqToPoint(s);if(o<e){const c=new R;Tl.closestPointToPoint(s,c),c.applyMatrix4(n);const l=i.ray.origin.distanceTo(c);if(l<i.near||l>i.far)return;r.push({distance:l,distanceToRay:Math.sqrt(o),point:c,index:t,face:null,faceIndex:null,barycoord:null,object:a})}}class co extends Le{constructor(t,e,n,i,r,a,o,c,l){super(t,e,n,i,r,a,o,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Zn{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){const n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let n,i=this.getPoint(0),r=0;e.push(0);for(let a=1;a<=t;a++)n=this.getPoint(a/t),r+=n.distanceTo(i),e.push(r),i=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){const n=this.getLengths();let i=0;const r=n.length;let a;e?a=e:a=t*n[r-1];let o=0,c=r-1,l;for(;o<=c;)if(i=Math.floor(o+(c-o)/2),l=n[i]-a,l<0)o=i+1;else if(l>0)c=i-1;else{c=i;break}if(i=c,n[i]===a)return i/(r-1);const h=n[i],d=n[i+1]-h,f=(a-h)/d;return(i+f)/(r-1)}getTangent(t,e){let i=t-1e-4,r=t+1e-4;i<0&&(i=0),r>1&&(r=1);const a=this.getPoint(i),o=this.getPoint(r),c=e||(a.isVector2?new it:new R);return c.copy(o).sub(a).normalize(),c}getTangentAt(t,e){const n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e){const n=new R,i=[],r=[],a=[],o=new R,c=new _t;for(let f=0;f<=t;f++){const g=f/t;i[f]=this.getTangentAt(g,new R)}r[0]=new R,a[0]=new R;let l=Number.MAX_VALUE;const h=Math.abs(i[0].x),u=Math.abs(i[0].y),d=Math.abs(i[0].z);h<=l&&(l=h,n.set(1,0,0)),u<=l&&(l=u,n.set(0,1,0)),d<=l&&n.set(0,0,1),o.crossVectors(i[0],n).normalize(),r[0].crossVectors(i[0],o),a[0].crossVectors(i[0],r[0]);for(let f=1;f<=t;f++){if(r[f]=r[f-1].clone(),a[f]=a[f-1].clone(),o.crossVectors(i[f-1],i[f]),o.length()>Number.EPSILON){o.normalize();const g=Math.acos(Ue(i[f-1].dot(i[f]),-1,1));r[f].applyMatrix4(c.makeRotationAxis(o,g))}a[f].crossVectors(i[f],r[f])}if(e===!0){let f=Math.acos(Ue(r[0].dot(r[t]),-1,1));f/=t,i[0].dot(o.crossVectors(r[0],r[t]))>0&&(f=-f);for(let g=1;g<=t;g++)r[g].applyMatrix4(c.makeRotationAxis(i[g],f*g)),a[g].crossVectors(i[g],r[g])}return{tangents:i,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class ih extends Zn{constructor(t=0,e=0,n=1,i=1,r=0,a=Math.PI*2,o=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=i,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=c}getPoint(t,e=new it){const n=e,i=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=i;for(;r>i;)r-=i;r<Number.EPSILON&&(a?r=0:r=i),this.aClockwise===!0&&!a&&(r===i?r=-i:r=r-i);const o=this.aStartAngle+t*r;let c=this.aX+this.xRadius*Math.cos(o),l=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){const h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),d=c-this.aX,f=l-this.aY;c=d*h-f*u+this.aX,l=d*u+f*h+this.aY}return n.set(c,l)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class Qx extends ih{constructor(t,e,n,i,r,a){super(t,e,n,n,i,r,a),this.isArcCurve=!0,this.type="ArcCurve"}}function sh(){let s=0,t=0,e=0,n=0;function i(r,a,o,c){s=r,t=o,e=-3*r+3*a-2*o-c,n=2*r-2*a+o+c}return{initCatmullRom:function(r,a,o,c,l){i(a,o,l*(o-r),l*(c-a))},initNonuniformCatmullRom:function(r,a,o,c,l,h,u){let d=(a-r)/l-(o-r)/(l+h)+(o-a)/h,f=(o-a)/h-(c-a)/(h+u)+(c-o)/u;d*=h,f*=h,i(a,o,d,f)},calc:function(r){const a=r*r,o=a*r;return s+t*r+e*a+n*o}}}const Ca=new R,hc=new sh,uc=new sh,dc=new sh;class Ir extends Zn{constructor(t=[],e=!1,n="centripetal",i=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=i}getPoint(t,e=new R){const n=e,i=this.points,r=i.length,a=(r-(this.closed?0:1))*t;let o=Math.floor(a),c=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:c===0&&o===r-1&&(o=r-2,c=1);let l,h;this.closed||o>0?l=i[(o-1)%r]:(Ca.subVectors(i[0],i[1]).add(i[0]),l=Ca);const u=i[o%r],d=i[(o+1)%r];if(this.closed||o+2<r?h=i[(o+2)%r]:(Ca.subVectors(i[r-1],i[r-2]).add(i[r-1]),h=Ca),this.curveType==="centripetal"||this.curveType==="chordal"){const f=this.curveType==="chordal"?.5:.25;let g=Math.pow(l.distanceToSquared(u),f),b=Math.pow(u.distanceToSquared(d),f),m=Math.pow(d.distanceToSquared(h),f);b<1e-4&&(b=1),g<1e-4&&(g=b),m<1e-4&&(m=b),hc.initNonuniformCatmullRom(l.x,u.x,d.x,h.x,g,b,m),uc.initNonuniformCatmullRom(l.y,u.y,d.y,h.y,g,b,m),dc.initNonuniformCatmullRom(l.z,u.z,d.z,h.z,g,b,m)}else this.curveType==="catmullrom"&&(hc.initCatmullRom(l.x,u.x,d.x,h.x,this.tension),uc.initCatmullRom(l.y,u.y,d.y,h.y,this.tension),dc.initCatmullRom(l.z,u.z,d.z,h.z,this.tension));return n.set(hc.calc(c),uc.calc(c),dc.calc(c)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(i.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const i=this.points[e];t.points.push(i.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(new R().fromArray(i))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function ju(s,t,e,n,i){const r=(n-t)*.5,a=(i-e)*.5,o=s*s,c=s*o;return(2*e-2*n+r+a)*c+(-3*e+3*n-2*r-a)*o+r*s+e}function Zx(s,t){const e=1-s;return e*e*t}function t_(s,t){return 2*(1-s)*s*t}function e_(s,t){return s*s*t}function Dr(s,t,e,n){return Zx(s,t)+t_(s,e)+e_(s,n)}function n_(s,t){const e=1-s;return e*e*e*t}function i_(s,t){const e=1-s;return 3*e*e*s*t}function s_(s,t){return 3*(1-s)*s*s*t}function r_(s,t){return s*s*s*t}function Nr(s,t,e,n,i){return n_(s,t)+i_(s,e)+s_(s,n)+r_(s,i)}class kf extends Zn{constructor(t=new it,e=new it,n=new it,i=new it){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=i}getPoint(t,e=new it){const n=e,i=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(Nr(t,i.x,r.x,a.x,o.x),Nr(t,i.y,r.y,a.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class a_ extends Zn{constructor(t=new R,e=new R,n=new R,i=new R){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=i}getPoint(t,e=new R){const n=e,i=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(Nr(t,i.x,r.x,a.x,o.x),Nr(t,i.y,r.y,a.y,o.y),Nr(t,i.z,r.z,a.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class Of extends Zn{constructor(t=new it,e=new it){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new it){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new it){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Bf extends Zn{constructor(t=new R,e=new R){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new R){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new R){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class zf extends Zn{constructor(t=new it,e=new it,n=new it){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new it){const n=e,i=this.v0,r=this.v1,a=this.v2;return n.set(Dr(t,i.x,r.x,a.x),Dr(t,i.y,r.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class o_ extends Zn{constructor(t=new R,e=new R,n=new R){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new R){const n=e,i=this.v0,r=this.v1,a=this.v2;return n.set(Dr(t,i.x,r.x,a.x),Dr(t,i.y,r.y,a.y),Dr(t,i.z,r.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Hf extends Zn{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new it){const n=e,i=this.points,r=(i.length-1)*t,a=Math.floor(r),o=r-a,c=i[a===0?a:a-1],l=i[a],h=i[a>i.length-2?i.length-1:a+1],u=i[a>i.length-3?i.length-1:a+2];return n.set(ju(o,c.x,l.x,h.x,u.x),ju(o,c.y,l.y,h.y,u.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(i.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const i=this.points[e];t.points.push(i.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(new it().fromArray(i))}return this}}var Yu=Object.freeze({__proto__:null,ArcCurve:Qx,CatmullRomCurve3:Ir,CubicBezierCurve:kf,CubicBezierCurve3:a_,EllipseCurve:ih,LineCurve:Of,LineCurve3:Bf,QuadraticBezierCurve:zf,QuadraticBezierCurve3:o_,SplineCurve:Hf});class c_ extends Zn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){const t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){const n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Yu[n](e,t))}return this}getPoint(t,e){const n=t*this.getLength(),i=this.getCurveLengths();let r=0;for(;r<i.length;){if(i[r]>=n){const a=i[r]-n,o=this.curves[r],c=o.getLength(),l=c===0?0:1-a/c;return o.getPointAt(l,e)}r++}return null}getLength(){const t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const t=[];let e=0;for(let n=0,i=this.curves.length;n<i;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){const e=[];let n;for(let i=0,r=this.curves;i<r.length;i++){const a=r[i],o=a.isEllipseCurve?t*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?t*a.points.length:t,c=a.getPoints(o);for(let l=0;l<c.length;l++){const h=c[l];n&&n.equals(h)||(e.push(h),n=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const i=t.curves[e];this.curves.push(i.clone())}return this.autoClose=t.autoClose,this}toJSON(){const t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){const i=this.curves[e];t.curves.push(i.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const i=t.curves[e];this.curves.push(new Yu[i.type]().fromJSON(i))}return this}}class Ku extends c_{constructor(t){super(),this.type="Path",this.currentPoint=new it,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){const n=new Of(this.currentPoint.clone(),new it(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,i){const r=new zf(this.currentPoint.clone(),new it(t,e),new it(n,i));return this.curves.push(r),this.currentPoint.set(n,i),this}bezierCurveTo(t,e,n,i,r,a){const o=new kf(this.currentPoint.clone(),new it(t,e),new it(n,i),new it(r,a));return this.curves.push(o),this.currentPoint.set(r,a),this}splineThru(t){const e=[this.currentPoint.clone()].concat(t),n=new Hf(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,i,r,a){const o=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(t+o,e+c,n,i,r,a),this}absarc(t,e,n,i,r,a){return this.absellipse(t,e,n,n,i,r,a),this}ellipse(t,e,n,i,r,a,o,c){const l=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+l,e+h,n,i,r,a,o,c),this}absellipse(t,e,n,i,r,a,o,c){const l=new ih(t,e,n,i,r,a,o,c);if(this.curves.length>0){const u=l.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(l);const h=l.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){const t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}}class rh extends _e{constructor(t=1,e=1,n=1,i=32,r=1,a=!1,o=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:i,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:c};const l=this;i=Math.floor(i),r=Math.floor(r);const h=[],u=[],d=[],f=[];let g=0;const b=[],m=n/2;let p=0;y(),a===!1&&(t>0&&v(!0),e>0&&v(!1)),this.setIndex(h),this.setAttribute("position",new te(u,3)),this.setAttribute("normal",new te(d,3)),this.setAttribute("uv",new te(f,2));function y(){const _=new R,M=new R;let E=0;const S=(e-t)/n;for(let C=0;C<=r;C++){const I=[],x=C/r,A=x*(e-t)+t;for(let U=0;U<=i;U++){const B=U/i,O=B*c+o,X=Math.sin(O),H=Math.cos(O);M.x=A*X,M.y=-x*n+m,M.z=A*H,u.push(M.x,M.y,M.z),_.set(X,S,H).normalize(),d.push(_.x,_.y,_.z),f.push(B,1-x),I.push(g++)}b.push(I)}for(let C=0;C<i;C++)for(let I=0;I<r;I++){const x=b[I][C],A=b[I+1][C],U=b[I+1][C+1],B=b[I][C+1];t>0&&(h.push(x,A,B),E+=3),e>0&&(h.push(A,U,B),E+=3)}l.addGroup(p,E,0),p+=E}function v(_){const M=g,E=new it,S=new R;let C=0;const I=_===!0?t:e,x=_===!0?1:-1;for(let U=1;U<=i;U++)u.push(0,m*x,0),d.push(0,x,0),f.push(.5,.5),g++;const A=g;for(let U=0;U<=i;U++){const O=U/i*c+o,X=Math.cos(O),H=Math.sin(O);S.x=I*H,S.y=m*x,S.z=I*X,u.push(S.x,S.y,S.z),d.push(0,x,0),E.x=X*.5+.5,E.y=H*.5*x+.5,f.push(E.x,E.y),g++}for(let U=0;U<i;U++){const B=M+U,O=A+U;_===!0?h.push(O,O+1,B):h.push(O+1,O,B),C+=3}l.addGroup(p,C,_===!0?1:2),p+=C}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new rh(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class ah extends _e{constructor(t=[],e=[],n=1,i=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:i};const r=[],a=[];o(i),l(n),h(),this.setAttribute("position",new te(r,3)),this.setAttribute("normal",new te(r.slice(),3)),this.setAttribute("uv",new te(a,2)),i===0?this.computeVertexNormals():this.normalizeNormals();function o(y){const v=new R,_=new R,M=new R;for(let E=0;E<e.length;E+=3)f(e[E+0],v),f(e[E+1],_),f(e[E+2],M),c(v,_,M,y)}function c(y,v,_,M){const E=M+1,S=[];for(let C=0;C<=E;C++){S[C]=[];const I=y.clone().lerp(_,C/E),x=v.clone().lerp(_,C/E),A=E-C;for(let U=0;U<=A;U++)U===0&&C===E?S[C][U]=I:S[C][U]=I.clone().lerp(x,U/A)}for(let C=0;C<E;C++)for(let I=0;I<2*(E-C)-1;I++){const x=Math.floor(I/2);I%2===0?(d(S[C][x+1]),d(S[C+1][x]),d(S[C][x])):(d(S[C][x+1]),d(S[C+1][x+1]),d(S[C+1][x]))}}function l(y){const v=new R;for(let _=0;_<r.length;_+=3)v.x=r[_+0],v.y=r[_+1],v.z=r[_+2],v.normalize().multiplyScalar(y),r[_+0]=v.x,r[_+1]=v.y,r[_+2]=v.z}function h(){const y=new R;for(let v=0;v<r.length;v+=3){y.x=r[v+0],y.y=r[v+1],y.z=r[v+2];const _=m(y)/2/Math.PI+.5,M=p(y)/Math.PI+.5;a.push(_,1-M)}g(),u()}function u(){for(let y=0;y<a.length;y+=6){const v=a[y+0],_=a[y+2],M=a[y+4],E=Math.max(v,_,M),S=Math.min(v,_,M);E>.9&&S<.1&&(v<.2&&(a[y+0]+=1),_<.2&&(a[y+2]+=1),M<.2&&(a[y+4]+=1))}}function d(y){r.push(y.x,y.y,y.z)}function f(y,v){const _=y*3;v.x=t[_+0],v.y=t[_+1],v.z=t[_+2]}function g(){const y=new R,v=new R,_=new R,M=new R,E=new it,S=new it,C=new it;for(let I=0,x=0;I<r.length;I+=9,x+=6){y.set(r[I+0],r[I+1],r[I+2]),v.set(r[I+3],r[I+4],r[I+5]),_.set(r[I+6],r[I+7],r[I+8]),E.set(a[x+0],a[x+1]),S.set(a[x+2],a[x+3]),C.set(a[x+4],a[x+5]),M.copy(y).add(v).add(_).divideScalar(3);const A=m(M);b(E,x+0,y,A),b(S,x+2,v,A),b(C,x+4,_,A)}}function b(y,v,_,M){M<0&&y.x===1&&(a[v]=y.x-1),_.x===0&&_.z===0&&(a[v]=M/2/Math.PI+.5)}function m(y){return Math.atan2(y.z,-y.x)}function p(y){return Math.atan2(-y.y,Math.sqrt(y.x*y.x+y.z*y.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ah(t.vertices,t.indices,t.radius,t.details)}}const Pa=new R,La=new R,fc=new R,Ia=new gn;class $u extends _e{constructor(t=null,e=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:t,thresholdAngle:e},t!==null){const i=Math.pow(10,4),r=Math.cos(ks*e),a=t.getIndex(),o=t.getAttribute("position"),c=a?a.count:o.count,l=[0,0,0],h=["a","b","c"],u=new Array(3),d={},f=[];for(let g=0;g<c;g+=3){a?(l[0]=a.getX(g),l[1]=a.getX(g+1),l[2]=a.getX(g+2)):(l[0]=g,l[1]=g+1,l[2]=g+2);const{a:b,b:m,c:p}=Ia;if(b.fromBufferAttribute(o,l[0]),m.fromBufferAttribute(o,l[1]),p.fromBufferAttribute(o,l[2]),Ia.getNormal(fc),u[0]=`${Math.round(b.x*i)},${Math.round(b.y*i)},${Math.round(b.z*i)}`,u[1]=`${Math.round(m.x*i)},${Math.round(m.y*i)},${Math.round(m.z*i)}`,u[2]=`${Math.round(p.x*i)},${Math.round(p.y*i)},${Math.round(p.z*i)}`,!(u[0]===u[1]||u[1]===u[2]||u[2]===u[0]))for(let y=0;y<3;y++){const v=(y+1)%3,_=u[y],M=u[v],E=Ia[h[y]],S=Ia[h[v]],C=`${_}_${M}`,I=`${M}_${_}`;I in d&&d[I]?(fc.dot(d[I].normal)<=r&&(f.push(E.x,E.y,E.z),f.push(S.x,S.y,S.z)),d[I]=null):C in d||(d[C]={index0:l[y],index1:l[v],normal:fc.clone()})}}for(const g in d)if(d[g]){const{index0:b,index1:m}=d[g];Pa.fromBufferAttribute(o,b),La.fromBufferAttribute(o,m),f.push(Pa.x,Pa.y,Pa.z),f.push(La.x,La.y,La.z)}this.setAttribute("position",new te(f,3))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}}class Gf extends Ku{constructor(t){super(t),this.uuid=Tn(),this.type="Shape",this.holes=[]}getPointsHoles(t){const e=[];for(let n=0,i=this.holes.length;n<i;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const i=t.holes[e];this.holes.push(i.clone())}return this}toJSON(){const t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){const i=this.holes[e];t.holes.push(i.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const i=t.holes[e];this.holes.push(new Ku().fromJSON(i))}return this}}const l_={triangulate:function(s,t,e=2){const n=t&&t.length,i=n?t[0]*e:s.length;let r=Vf(s,0,i,e,!0);const a=[];if(!r||r.next===r.prev)return a;let o,c,l,h,u,d,f;if(n&&(r=p_(s,t,r,e)),s.length>80*e){o=l=s[0],c=h=s[1];for(let g=e;g<i;g+=e)u=s[g],d=s[g+1],u<o&&(o=u),d<c&&(c=d),u>l&&(l=u),d>h&&(h=d);f=Math.max(l-o,h-c),f=f!==0?32767/f:0}return Wr(r,a,e,o,c,f,0),a}};function Vf(s,t,e,n,i){let r,a;if(i===A_(s,t,e,n)>0)for(r=t;r<e;r+=n)a=Ju(r,s[r],s[r+1],a);else for(r=e-n;r>=t;r-=n)a=Ju(r,s[r],s[r+1],a);return a&&xo(a,a.next)&&(Xr(a),a=a.next),a}function is(s,t){if(!s)return s;t||(t=s);let e=s,n;do if(n=!1,!e.steiner&&(xo(e,e.next)||ve(e.prev,e,e.next)===0)){if(Xr(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function Wr(s,t,e,n,i,r,a){if(!s)return;!a&&r&&x_(s,n,i,r);let o=s,c,l;for(;s.prev!==s.next;){if(c=s.prev,l=s.next,r?u_(s,n,i,r):h_(s)){t.push(c.i/e|0),t.push(s.i/e|0),t.push(l.i/e|0),Xr(s),s=l.next,o=l.next;continue}if(s=l,s===o){a?a===1?(s=d_(is(s),t,e),Wr(s,t,e,n,i,r,2)):a===2&&f_(s,t,e,n,i,r):Wr(is(s),t,e,n,i,r,1);break}}}function h_(s){const t=s.prev,e=s,n=s.next;if(ve(t,e,n)>=0)return!1;const i=t.x,r=e.x,a=n.x,o=t.y,c=e.y,l=n.y,h=i<r?i<a?i:a:r<a?r:a,u=o<c?o<l?o:l:c<l?c:l,d=i>r?i>a?i:a:r>a?r:a,f=o>c?o>l?o:l:c>l?c:l;let g=n.next;for(;g!==t;){if(g.x>=h&&g.x<=d&&g.y>=u&&g.y<=f&&Ns(i,o,r,c,a,l,g.x,g.y)&&ve(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function u_(s,t,e,n){const i=s.prev,r=s,a=s.next;if(ve(i,r,a)>=0)return!1;const o=i.x,c=r.x,l=a.x,h=i.y,u=r.y,d=a.y,f=o<c?o<l?o:l:c<l?c:l,g=h<u?h<d?h:d:u<d?u:d,b=o>c?o>l?o:l:c>l?c:l,m=h>u?h>d?h:d:u>d?u:d,p=Rl(f,g,t,e,n),y=Rl(b,m,t,e,n);let v=s.prevZ,_=s.nextZ;for(;v&&v.z>=p&&_&&_.z<=y;){if(v.x>=f&&v.x<=b&&v.y>=g&&v.y<=m&&v!==i&&v!==a&&Ns(o,h,c,u,l,d,v.x,v.y)&&ve(v.prev,v,v.next)>=0||(v=v.prevZ,_.x>=f&&_.x<=b&&_.y>=g&&_.y<=m&&_!==i&&_!==a&&Ns(o,h,c,u,l,d,_.x,_.y)&&ve(_.prev,_,_.next)>=0))return!1;_=_.nextZ}for(;v&&v.z>=p;){if(v.x>=f&&v.x<=b&&v.y>=g&&v.y<=m&&v!==i&&v!==a&&Ns(o,h,c,u,l,d,v.x,v.y)&&ve(v.prev,v,v.next)>=0)return!1;v=v.prevZ}for(;_&&_.z<=y;){if(_.x>=f&&_.x<=b&&_.y>=g&&_.y<=m&&_!==i&&_!==a&&Ns(o,h,c,u,l,d,_.x,_.y)&&ve(_.prev,_,_.next)>=0)return!1;_=_.nextZ}return!0}function d_(s,t,e){let n=s;do{const i=n.prev,r=n.next.next;!xo(i,r)&&Wf(i,n,n.next,r)&&qr(i,r)&&qr(r,i)&&(t.push(i.i/e|0),t.push(n.i/e|0),t.push(r.i/e|0),Xr(n),Xr(n.next),n=s=r),n=n.next}while(n!==s);return is(n)}function f_(s,t,e,n,i,r){let a=s;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&M_(a,o)){let c=qf(a,o);a=is(a,a.next),c=is(c,c.next),Wr(a,t,e,n,i,r,0),Wr(c,t,e,n,i,r,0);return}o=o.next}a=a.next}while(a!==s)}function p_(s,t,e,n){const i=[];let r,a,o,c,l;for(r=0,a=t.length;r<a;r++)o=t[r]*n,c=r<a-1?t[r+1]*n:s.length,l=Vf(s,o,c,n,!1),l===l.next&&(l.steiner=!0),i.push(y_(l));for(i.sort(m_),r=0;r<i.length;r++)e=g_(i[r],e);return e}function m_(s,t){return s.x-t.x}function g_(s,t){const e=b_(s,t);if(!e)return t;const n=qf(e,s);return is(n,n.next),is(e,e.next)}function b_(s,t){let e=t,n=-1/0,i;const r=s.x,a=s.y;do{if(a<=e.y&&a>=e.next.y&&e.next.y!==e.y){const d=e.x+(a-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(d<=r&&d>n&&(n=d,i=e.x<e.next.x?e:e.next,d===r))return i}e=e.next}while(e!==t);if(!i)return null;const o=i,c=i.x,l=i.y;let h=1/0,u;e=i;do r>=e.x&&e.x>=c&&r!==e.x&&Ns(a<l?r:n,a,c,l,a<l?n:r,a,e.x,e.y)&&(u=Math.abs(a-e.y)/(r-e.x),qr(e,s)&&(u<h||u===h&&(e.x>i.x||e.x===i.x&&v_(i,e)))&&(i=e,h=u)),e=e.next;while(e!==o);return i}function v_(s,t){return ve(s.prev,s,t.prev)<0&&ve(t.next,s,s.next)<0}function x_(s,t,e,n){let i=s;do i.z===0&&(i.z=Rl(i.x,i.y,t,e,n)),i.prevZ=i.prev,i.nextZ=i.next,i=i.next;while(i!==s);i.prevZ.nextZ=null,i.prevZ=null,__(i)}function __(s){let t,e,n,i,r,a,o,c,l=1;do{for(e=s,s=null,r=null,a=0;e;){for(a++,n=e,o=0,t=0;t<l&&(o++,n=n.nextZ,!!n);t++);for(c=l;o>0||c>0&&n;)o!==0&&(c===0||!n||e.z<=n.z)?(i=e,e=e.nextZ,o--):(i=n,n=n.nextZ,c--),r?r.nextZ=i:s=i,i.prevZ=r,r=i;e=n}r.nextZ=null,l*=2}while(a>1);return s}function Rl(s,t,e,n,i){return s=(s-e)*i|0,t=(t-n)*i|0,s=(s|s<<8)&16711935,s=(s|s<<4)&252645135,s=(s|s<<2)&858993459,s=(s|s<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,s|t<<1}function y_(s){let t=s,e=s;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==s);return e}function Ns(s,t,e,n,i,r,a,o){return(i-a)*(t-o)>=(s-a)*(r-o)&&(s-a)*(n-o)>=(e-a)*(t-o)&&(e-a)*(r-o)>=(i-a)*(n-o)}function M_(s,t){return s.next.i!==t.i&&s.prev.i!==t.i&&!S_(s,t)&&(qr(s,t)&&qr(t,s)&&w_(s,t)&&(ve(s.prev,s,t.prev)||ve(s,t.prev,t))||xo(s,t)&&ve(s.prev,s,s.next)>0&&ve(t.prev,t,t.next)>0)}function ve(s,t,e){return(t.y-s.y)*(e.x-t.x)-(t.x-s.x)*(e.y-t.y)}function xo(s,t){return s.x===t.x&&s.y===t.y}function Wf(s,t,e,n){const i=Na(ve(s,t,e)),r=Na(ve(s,t,n)),a=Na(ve(e,n,s)),o=Na(ve(e,n,t));return!!(i!==r&&a!==o||i===0&&Da(s,e,t)||r===0&&Da(s,n,t)||a===0&&Da(e,s,n)||o===0&&Da(e,t,n))}function Da(s,t,e){return t.x<=Math.max(s.x,e.x)&&t.x>=Math.min(s.x,e.x)&&t.y<=Math.max(s.y,e.y)&&t.y>=Math.min(s.y,e.y)}function Na(s){return s>0?1:s<0?-1:0}function S_(s,t){let e=s;do{if(e.i!==s.i&&e.next.i!==s.i&&e.i!==t.i&&e.next.i!==t.i&&Wf(e,e.next,s,t))return!0;e=e.next}while(e!==s);return!1}function qr(s,t){return ve(s.prev,s,s.next)<0?ve(s,t,s.next)>=0&&ve(s,s.prev,t)>=0:ve(s,t,s.prev)<0||ve(s,s.next,t)<0}function w_(s,t){let e=s,n=!1;const i=(s.x+t.x)/2,r=(s.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&i<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==s);return n}function qf(s,t){const e=new Cl(s.i,s.x,s.y),n=new Cl(t.i,t.x,t.y),i=s.next,r=t.prev;return s.next=t,t.prev=s,e.next=i,i.prev=e,n.next=e,e.prev=n,r.next=n,n.prev=r,n}function Ju(s,t,e,n){const i=new Cl(s,t,e);return n?(i.next=n.next,i.prev=n,n.next.prev=i,n.next=i):(i.prev=i,i.next=i),i}function Xr(s){s.next.prev=s.prev,s.prev.next=s.next,s.prevZ&&(s.prevZ.nextZ=s.nextZ),s.nextZ&&(s.nextZ.prevZ=s.prevZ)}function Cl(s,t,e){this.i=s,this.x=t,this.y=e,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function A_(s,t,e,n){let i=0;for(let r=t,a=e-n;r<e;r+=n)i+=(s[a]-s[r])*(s[r+1]+s[a+1]),a=r;return i}class Fr{static area(t){const e=t.length;let n=0;for(let i=e-1,r=0;r<e;i=r++)n+=t[i].x*t[r].y-t[r].x*t[i].y;return n*.5}static isClockWise(t){return Fr.area(t)<0}static triangulateShape(t,e){const n=[],i=[],r=[];Qu(t),Zu(n,t);let a=t.length;e.forEach(Qu);for(let c=0;c<e.length;c++)i.push(a),a+=e[c].length,Zu(n,e[c]);const o=l_.triangulate(n,i);for(let c=0;c<o.length;c+=3)r.push(o.slice(c,c+3));return r}}function Qu(s){const t=s.length;t>2&&s[t-1].equals(s[0])&&s.pop()}function Zu(s,t){for(let e=0;e<t.length;e++)s.push(t[e].x),s.push(t[e].y)}class oh extends ah{constructor(t=1,e=0){const n=(1+Math.sqrt(5))/2,i=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(i,r,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new oh(t.radius,t.detail)}}class ch extends _e{constructor(t=.5,e=1,n=32,i=1,r=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:n,phiSegments:i,thetaStart:r,thetaLength:a},n=Math.max(3,n),i=Math.max(1,i);const o=[],c=[],l=[],h=[];let u=t;const d=(e-t)/i,f=new R,g=new it;for(let b=0;b<=i;b++){for(let m=0;m<=n;m++){const p=r+m/n*a;f.x=u*Math.cos(p),f.y=u*Math.sin(p),c.push(f.x,f.y,f.z),l.push(0,0,1),g.x=(f.x/e+1)/2,g.y=(f.y/e+1)/2,h.push(g.x,g.y)}u+=d}for(let b=0;b<i;b++){const m=b*(n+1);for(let p=0;p<n;p++){const y=p+m,v=y,_=y+n+1,M=y+n+2,E=y+1;o.push(v,_,E),o.push(_,M,E)}}this.setIndex(o),this.setAttribute("position",new te(c,3)),this.setAttribute("normal",new te(l,3)),this.setAttribute("uv",new te(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ch(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}}class lh extends _e{constructor(t=new Gf([new it(0,.5),new it(-.5,-.5),new it(.5,-.5)]),e=12){super(),this.type="ShapeGeometry",this.parameters={shapes:t,curveSegments:e};const n=[],i=[],r=[],a=[];let o=0,c=0;if(Array.isArray(t)===!1)l(t);else for(let h=0;h<t.length;h++)l(t[h]),this.addGroup(o,c,h),o+=c,c=0;this.setIndex(n),this.setAttribute("position",new te(i,3)),this.setAttribute("normal",new te(r,3)),this.setAttribute("uv",new te(a,2));function l(h){const u=i.length/3,d=h.extractPoints(e);let f=d.shape;const g=d.holes;Fr.isClockWise(f)===!1&&(f=f.reverse());for(let m=0,p=g.length;m<p;m++){const y=g[m];Fr.isClockWise(y)===!0&&(g[m]=y.reverse())}const b=Fr.triangulateShape(f,g);for(let m=0,p=g.length;m<p;m++){const y=g[m];f=f.concat(y)}for(let m=0,p=f.length;m<p;m++){const y=f[m];i.push(y.x,y.y,0),r.push(0,0,1),a.push(y.x,y.y)}for(let m=0,p=b.length;m<p;m++){const y=b[m],v=y[0]+u,_=y[1]+u,M=y[2]+u;n.push(v,_,M),c+=3}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON(),e=this.parameters.shapes;return E_(e,t)}static fromJSON(t,e){const n=[];for(let i=0,r=t.shapes.length;i<r;i++){const a=e[t.shapes[i]];n.push(a)}return new lh(n,t.curveSegments)}}function E_(s,t){if(t.shapes=[],Array.isArray(s))for(let e=0,n=s.length;e<n;e++){const i=s[e];t.shapes.push(i.uuid)}else t.shapes.push(s.uuid);return t}class hh extends _e{constructor(t=1,e=32,n=16,i=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:i,phiLength:r,thetaStart:a,thetaLength:o},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const c=Math.min(a+o,Math.PI);let l=0;const h=[],u=new R,d=new R,f=[],g=[],b=[],m=[];for(let p=0;p<=n;p++){const y=[],v=p/n;let _=0;p===0&&a===0?_=.5/e:p===n&&c===Math.PI&&(_=-.5/e);for(let M=0;M<=e;M++){const E=M/e;u.x=-t*Math.cos(i+E*r)*Math.sin(a+v*o),u.y=t*Math.cos(a+v*o),u.z=t*Math.sin(i+E*r)*Math.sin(a+v*o),g.push(u.x,u.y,u.z),d.copy(u).normalize(),b.push(d.x,d.y,d.z),m.push(E+_,1-v),y.push(l++)}h.push(y)}for(let p=0;p<n;p++)for(let y=0;y<e;y++){const v=h[p][y+1],_=h[p][y],M=h[p+1][y],E=h[p+1][y+1];(p!==0||a>0)&&f.push(v,_,E),(p!==n-1||c<Math.PI)&&f.push(_,M,E)}this.setIndex(f),this.setAttribute("position",new te(g,3)),this.setAttribute("normal",new te(b,3)),this.setAttribute("uv",new te(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new hh(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class jr extends Un{constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Et(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Et(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=df,this.normalScale=new it(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new We,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class ti extends jr{constructor(t){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new it(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Ue(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(e){this.ior=(1+.4*e)/(1-.4*e)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Et(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Et(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Et(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(t)}get anisotropy(){return this._anisotropy}set anisotropy(t){this._anisotropy>0!=t>0&&this.version++,this._anisotropy=t}get clearcoat(){return this._clearcoat}set clearcoat(t){this._clearcoat>0!=t>0&&this.version++,this._clearcoat=t}get iridescence(){return this._iridescence}set iridescence(t){this._iridescence>0!=t>0&&this.version++,this._iridescence=t}get dispersion(){return this._dispersion}set dispersion(t){this._dispersion>0!=t>0&&this.version++,this._dispersion=t}get sheen(){return this._sheen}set sheen(t){this._sheen>0!=t>0&&this.version++,this._sheen=t}get transmission(){return this._transmission}set transmission(t){this._transmission>0!=t>0&&this.version++,this._transmission=t}copy(t){return super.copy(t),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=t.anisotropy,this.anisotropyRotation=t.anisotropyRotation,this.anisotropyMap=t.anisotropyMap,this.clearcoat=t.clearcoat,this.clearcoatMap=t.clearcoatMap,this.clearcoatRoughness=t.clearcoatRoughness,this.clearcoatRoughnessMap=t.clearcoatRoughnessMap,this.clearcoatNormalMap=t.clearcoatNormalMap,this.clearcoatNormalScale.copy(t.clearcoatNormalScale),this.dispersion=t.dispersion,this.ior=t.ior,this.iridescence=t.iridescence,this.iridescenceMap=t.iridescenceMap,this.iridescenceIOR=t.iridescenceIOR,this.iridescenceThicknessRange=[...t.iridescenceThicknessRange],this.iridescenceThicknessMap=t.iridescenceThicknessMap,this.sheen=t.sheen,this.sheenColor.copy(t.sheenColor),this.sheenColorMap=t.sheenColorMap,this.sheenRoughness=t.sheenRoughness,this.sheenRoughnessMap=t.sheenRoughnessMap,this.transmission=t.transmission,this.transmissionMap=t.transmissionMap,this.thickness=t.thickness,this.thicknessMap=t.thicknessMap,this.attenuationDistance=t.attenuationDistance,this.attenuationColor.copy(t.attenuationColor),this.specularIntensity=t.specularIntensity,this.specularIntensityMap=t.specularIntensityMap,this.specularColor.copy(t.specularColor),this.specularColorMap=t.specularColorMap,this}}function Fa(s,t,e){return!s||!e&&s.constructor===t?s:typeof t.BYTES_PER_ELEMENT=="number"?new t(s):Array.prototype.slice.call(s)}function T_(s){return ArrayBuffer.isView(s)&&!(s instanceof DataView)}function R_(s){function t(i,r){return s[i]-s[r]}const e=s.length,n=new Array(e);for(let i=0;i!==e;++i)n[i]=i;return n.sort(t),n}function td(s,t,e){const n=s.length,i=new s.constructor(n);for(let r=0,a=0;a!==n;++r){const o=e[r]*t;for(let c=0;c!==t;++c)i[a++]=s[o+c]}return i}function Xf(s,t,e,n){let i=1,r=s[0];for(;r!==void 0&&r[n]===void 0;)r=s[i++];if(r===void 0)return;let a=r[n];if(a!==void 0)if(Array.isArray(a))do a=r[n],a!==void 0&&(t.push(r.time),e.push.apply(e,a)),r=s[i++];while(r!==void 0);else if(a.toArray!==void 0)do a=r[n],a!==void 0&&(t.push(r.time),a.toArray(e,e.length)),r=s[i++];while(r!==void 0);else do a=r[n],a!==void 0&&(t.push(r.time),e.push(a)),r=s[i++];while(r!==void 0)}class $r{constructor(t,e,n,i){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){const e=this.parameterPositions;let n=this._cachedIndex,i=e[n],r=e[n-1];n:{t:{let a;e:{i:if(!(t<i)){for(let o=n+2;;){if(i===void 0){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=i,i=e[++n],t<i)break t}a=e.length;break e}if(!(t>=r)){const o=e[1];t<o&&(n=2,r=o);for(let c=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(i=r,r=e[--n-1],t>=r)break t}a=n,n=0;break e}break n}for(;n<a;){const o=n+a>>>1;t<e[o]?a=o:n=o+1}if(i=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,i)}return this.interpolate_(n,r,t,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){const e=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=t*i;for(let a=0;a!==i;++a)e[a]=n[r+a];return e}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class C_ extends $r{constructor(t,e,n,i){super(t,e,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Bh,endingEnd:Bh}}intervalChanged_(t,e,n){const i=this.parameterPositions;let r=t-2,a=t+1,o=i[r],c=i[a];if(o===void 0)switch(this.getSettings_().endingStart){case zh:r=t,o=2*e-n;break;case Hh:r=i.length-2,o=e+i[r]-i[r+1];break;default:r=t,o=n}if(c===void 0)switch(this.getSettings_().endingEnd){case zh:a=t,c=2*n-e;break;case Hh:a=1,c=n+i[1]-i[0];break;default:a=t-1,c=e}const l=(n-e)*.5,h=this.valueSize;this._weightPrev=l/(e-o),this._weightNext=l/(c-n),this._offsetPrev=r*h,this._offsetNext=a*h}interpolate_(t,e,n,i){const r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=t*o,l=c-o,h=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,f=this._weightNext,g=(n-e)/(i-e),b=g*g,m=b*g,p=-d*m+2*d*b-d*g,y=(1+d)*m+(-1.5-2*d)*b+(-.5+d)*g+1,v=(-1-f)*m+(1.5+f)*b+.5*g,_=f*m-f*b;for(let M=0;M!==o;++M)r[M]=p*a[h+M]+y*a[l+M]+v*a[c+M]+_*a[u+M];return r}}class P_ extends $r{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t,e,n,i){const r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=t*o,l=c-o,h=(n-e)/(i-e),u=1-h;for(let d=0;d!==o;++d)r[d]=a[l+d]*u+a[c+d]*h;return r}}class L_ extends $r{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t){return this.copySampleValue_(t-1)}}class ei{constructor(t,e,n,i){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=Fa(e,this.TimeBufferType),this.values=Fa(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(t){const e=t.constructor;let n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:Fa(t.times,Array),values:Fa(t.values,Array)};const i=t.getInterpolation();i!==t.DefaultInterpolation&&(n.interpolation=i)}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new L_(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new P_(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new C_(this.times,this.values,this.getValueSize(),t)}setInterpolation(t){let e;switch(t){case zr:e=this.InterpolantFactoryMethodDiscrete;break;case Hr:e=this.InterpolantFactoryMethodLinear;break;case Lo:e=this.InterpolantFactoryMethodSmooth;break}if(e===void 0){const n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return zr;case this.InterpolantFactoryMethodLinear:return Hr;case this.InterpolantFactoryMethodSmooth:return Lo}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){const e=this.times;for(let n=0,i=e.length;n!==i;++n)e[n]+=t}return this}scale(t){if(t!==1){const e=this.times;for(let n=0,i=e.length;n!==i;++n)e[n]*=t}return this}trim(t,e){const n=this.times,i=n.length;let r=0,a=i-1;for(;r!==i&&n[r]<t;)++r;for(;a!==-1&&n[a]>e;)--a;if(++a,r!==0||a!==i){r>=a&&(a=Math.max(a,1),r=a-1);const o=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let t=!0;const e=this.getValueSize();e-Math.floor(e)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),t=!1);const n=this.times,i=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),t=!1);let a=null;for(let o=0;o!==r;o++){const c=n[o];if(typeof c=="number"&&isNaN(c)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,o,c),t=!1;break}if(a!==null&&a>c){console.error("THREE.KeyframeTrack: Out of order keys.",this,o,c,a),t=!1;break}a=c}if(i!==void 0&&T_(i))for(let o=0,c=i.length;o!==c;++o){const l=i[o];if(isNaN(l)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,o,l),t=!1;break}}return t}optimize(){const t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===Lo,r=t.length-1;let a=1;for(let o=1;o<r;++o){let c=!1;const l=t[o],h=t[o+1];if(l!==h&&(o!==1||l!==t[0]))if(i)c=!0;else{const u=o*n,d=u-n,f=u+n;for(let g=0;g!==n;++g){const b=e[u+g];if(b!==e[d+g]||b!==e[f+g]){c=!0;break}}}if(c){if(o!==a){t[a]=t[o];const u=o*n,d=a*n;for(let f=0;f!==n;++f)e[d+f]=e[u+f]}++a}}if(r>0){t[a]=t[r];for(let o=r*n,c=a*n,l=0;l!==n;++l)e[c+l]=e[o+l];++a}return a!==t.length?(this.times=t.slice(0,a),this.values=e.slice(0,a*n)):(this.times=t,this.values=e),this}clone(){const t=this.times.slice(),e=this.values.slice(),n=this.constructor,i=new n(this.name,t,e);return i.createInterpolant=this.createInterpolant,i}}ei.prototype.TimeBufferType=Float32Array;ei.prototype.ValueBufferType=Float32Array;ei.prototype.DefaultInterpolation=Hr;class tr extends ei{constructor(t,e,n){super(t,e,n)}}tr.prototype.ValueTypeName="bool";tr.prototype.ValueBufferType=Array;tr.prototype.DefaultInterpolation=zr;tr.prototype.InterpolantFactoryMethodLinear=void 0;tr.prototype.InterpolantFactoryMethodSmooth=void 0;class jf extends ei{}jf.prototype.ValueTypeName="color";class Ys extends ei{}Ys.prototype.ValueTypeName="number";class I_ extends $r{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t,e,n,i){const r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=(n-e)/(i-e);let l=t*o;for(let h=l+o;l!==h;l+=4)Kt.slerpFlat(r,0,a,l-o,a,l,c);return r}}class Ks extends ei{InterpolantFactoryMethodLinear(t){return new I_(this.times,this.values,this.getValueSize(),t)}}Ks.prototype.ValueTypeName="quaternion";Ks.prototype.InterpolantFactoryMethodSmooth=void 0;class er extends ei{constructor(t,e,n){super(t,e,n)}}er.prototype.ValueTypeName="string";er.prototype.ValueBufferType=Array;er.prototype.DefaultInterpolation=zr;er.prototype.InterpolantFactoryMethodLinear=void 0;er.prototype.InterpolantFactoryMethodSmooth=void 0;class $s extends ei{}$s.prototype.ValueTypeName="vector";class D_{constructor(t="",e=-1,n=[],i=sm){this.name=t,this.tracks=n,this.duration=e,this.blendMode=i,this.uuid=Tn(),this.duration<0&&this.resetDuration()}static parse(t){const e=[],n=t.tracks,i=1/(t.fps||1);for(let a=0,o=n.length;a!==o;++a)e.push(F_(n[a]).scale(i));const r=new this(t.name,t.duration,e,t.blendMode);return r.uuid=t.uuid,r}static toJSON(t){const e=[],n=t.tracks,i={name:t.name,duration:t.duration,tracks:e,uuid:t.uuid,blendMode:t.blendMode};for(let r=0,a=n.length;r!==a;++r)e.push(ei.toJSON(n[r]));return i}static CreateFromMorphTargetSequence(t,e,n,i){const r=e.length,a=[];for(let o=0;o<r;o++){let c=[],l=[];c.push((o+r-1)%r,o,(o+1)%r),l.push(0,1,0);const h=R_(c);c=td(c,1,h),l=td(l,1,h),!i&&c[0]===0&&(c.push(r),l.push(l[0])),a.push(new Ys(".morphTargetInfluences["+e[o].name+"]",c,l).scale(1/n))}return new this(t,-1,a)}static findByName(t,e){let n=t;if(!Array.isArray(t)){const i=t;n=i.geometry&&i.geometry.animations||i.animations}for(let i=0;i<n.length;i++)if(n[i].name===e)return n[i];return null}static CreateClipsFromMorphTargetSequences(t,e,n){const i={},r=/^([\w-]*?)([\d]+)$/;for(let o=0,c=t.length;o<c;o++){const l=t[o],h=l.name.match(r);if(h&&h.length>1){const u=h[1];let d=i[u];d||(i[u]=d=[]),d.push(l)}}const a=[];for(const o in i)a.push(this.CreateFromMorphTargetSequence(o,i[o],e,n));return a}static parseAnimation(t,e){if(!t)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const n=function(u,d,f,g,b){if(f.length!==0){const m=[],p=[];Xf(f,m,p,g),m.length!==0&&b.push(new u(d,m,p))}},i=[],r=t.name||"default",a=t.fps||30,o=t.blendMode;let c=t.length||-1;const l=t.hierarchy||[];for(let u=0;u<l.length;u++){const d=l[u].keys;if(!(!d||d.length===0))if(d[0].morphTargets){const f={};let g;for(g=0;g<d.length;g++)if(d[g].morphTargets)for(let b=0;b<d[g].morphTargets.length;b++)f[d[g].morphTargets[b]]=-1;for(const b in f){const m=[],p=[];for(let y=0;y!==d[g].morphTargets.length;++y){const v=d[g];m.push(v.time),p.push(v.morphTarget===b?1:0)}i.push(new Ys(".morphTargetInfluence["+b+"]",m,p))}c=f.length*a}else{const f=".bones["+e[u].name+"]";n($s,f+".position",d,"pos",i),n(Ks,f+".quaternion",d,"rot",i),n($s,f+".scale",d,"scl",i)}}return i.length===0?null:new this(r,c,i,o)}resetDuration(){const t=this.tracks;let e=0;for(let n=0,i=t.length;n!==i;++n){const r=this.tracks[n];e=Math.max(e,r.times[r.times.length-1])}return this.duration=e,this}trim(){for(let t=0;t<this.tracks.length;t++)this.tracks[t].trim(0,this.duration);return this}validate(){let t=!0;for(let e=0;e<this.tracks.length;e++)t=t&&this.tracks[e].validate();return t}optimize(){for(let t=0;t<this.tracks.length;t++)this.tracks[t].optimize();return this}clone(){const t=[];for(let e=0;e<this.tracks.length;e++)t.push(this.tracks[e].clone());return new this.constructor(this.name,this.duration,t,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}}function N_(s){switch(s.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return Ys;case"vector":case"vector2":case"vector3":case"vector4":return $s;case"color":return jf;case"quaternion":return Ks;case"bool":case"boolean":return tr;case"string":return er}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+s)}function F_(s){if(s.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const t=N_(s.type);if(s.times===void 0){const e=[],n=[];Xf(s.keys,e,n,"value"),s.times=e,s.values=n}return t.parse!==void 0?t.parse(s):new t(s.name,s.times,s.values,s.interpolation)}const Li={enabled:!1,files:{},add:function(s,t){this.enabled!==!1&&(this.files[s]=t)},get:function(s){if(this.enabled!==!1)return this.files[s]},remove:function(s){delete this.files[s]},clear:function(){this.files={}}};class U_{constructor(t,e,n){const i=this;let r=!1,a=0,o=0,c;const l=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this.itemStart=function(h){o++,r===!1&&i.onStart!==void 0&&i.onStart(h,a,o),r=!0},this.itemEnd=function(h){a++,i.onProgress!==void 0&&i.onProgress(h,a,o),a===o&&(r=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(h){i.onError!==void 0&&i.onError(h)},this.resolveURL=function(h){return c?c(h):h},this.setURLModifier=function(h){return c=h,this},this.addHandler=function(h,u){return l.push(h,u),this},this.removeHandler=function(h){const u=l.indexOf(h);return u!==-1&&l.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=l.length;u<d;u+=2){const f=l[u],g=l[u+1];if(f.global&&(f.lastIndex=0),f.test(h))return g}return null}}}const k_=new U_;class nr{constructor(t){this.manager=t!==void 0?t:k_,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){const n=this;return new Promise(function(i,r){n.load(t,i,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}}nr.DEFAULT_MATERIAL_NAME="__DEFAULT";const ci={};class O_ extends Error{constructor(t,e){super(t),this.response=e}}class Yf extends nr{constructor(t){super(t)}load(t,e,n,i){t===void 0&&(t=""),this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const r=Li.get(t);if(r!==void 0)return this.manager.itemStart(t),setTimeout(()=>{e&&e(r),this.manager.itemEnd(t)},0),r;if(ci[t]!==void 0){ci[t].push({onLoad:e,onProgress:n,onError:i});return}ci[t]=[],ci[t].push({onLoad:e,onProgress:n,onError:i});const a=new Request(t,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),o=this.mimeType,c=this.responseType;fetch(a).then(l=>{if(l.status===200||l.status===0){if(l.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||l.body===void 0||l.body.getReader===void 0)return l;const h=ci[t],u=l.body.getReader(),d=l.headers.get("X-File-Size")||l.headers.get("Content-Length"),f=d?parseInt(d):0,g=f!==0;let b=0;const m=new ReadableStream({start(p){y();function y(){u.read().then(({done:v,value:_})=>{if(v)p.close();else{b+=_.byteLength;const M=new ProgressEvent("progress",{lengthComputable:g,loaded:b,total:f});for(let E=0,S=h.length;E<S;E++){const C=h[E];C.onProgress&&C.onProgress(M)}p.enqueue(_),y()}},v=>{p.error(v)})}}});return new Response(m)}else throw new O_(`fetch for "${l.url}" responded with ${l.status}: ${l.statusText}`,l)}).then(l=>{switch(c){case"arraybuffer":return l.arrayBuffer();case"blob":return l.blob();case"document":return l.text().then(h=>new DOMParser().parseFromString(h,o));case"json":return l.json();default:if(o===void 0)return l.text();{const u=/charset="?([^;"\s]*)"?/i.exec(o),d=u&&u[1]?u[1].toLowerCase():void 0,f=new TextDecoder(d);return l.arrayBuffer().then(g=>f.decode(g))}}}).then(l=>{Li.add(t,l);const h=ci[t];delete ci[t];for(let u=0,d=h.length;u<d;u++){const f=h[u];f.onLoad&&f.onLoad(l)}}).catch(l=>{const h=ci[t];if(h===void 0)throw this.manager.itemError(t),l;delete ci[t];for(let u=0,d=h.length;u<d;u++){const f=h[u];f.onError&&f.onError(l)}this.manager.itemError(t)}).finally(()=>{this.manager.itemEnd(t)}),this.manager.itemStart(t)}setResponseType(t){return this.responseType=t,this}setMimeType(t){return this.mimeType=t,this}}class B_ extends nr{constructor(t){super(t)}load(t,e,n,i){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const r=this,a=Li.get(t);if(a!==void 0)return r.manager.itemStart(t),setTimeout(function(){e&&e(a),r.manager.itemEnd(t)},0),a;const o=Gr("img");function c(){h(),Li.add(t,this),e&&e(this),r.manager.itemEnd(t)}function l(u){h(),i&&i(u),r.manager.itemError(t),r.manager.itemEnd(t)}function h(){o.removeEventListener("load",c,!1),o.removeEventListener("error",l,!1)}return o.addEventListener("load",c,!1),o.addEventListener("error",l,!1),t.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),r.manager.itemStart(t),o.src=t,o}}class z_ extends nr{constructor(t){super(t)}load(t,e,n,i){const r=new Le,a=new B_(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(t,function(o){r.image=o,r.needsUpdate=!0,e!==void 0&&e(r)},n,i),r}}class _o extends ge{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Et(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}}class H_ extends _o{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(ge.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Et(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}}const pc=new _t,ed=new R,nd=new R;class uh{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new it(512,512),this.map=null,this.mapPass=null,this.matrix=new _t,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Jl,this._frameExtents=new it(1,1),this._viewportCount=1,this._viewports=[new ne(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;ed.setFromMatrixPosition(t.matrixWorld),e.position.copy(ed),nd.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(nd),e.updateMatrixWorld(),pc.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(pc),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(pc)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class G_ extends uh{constructor(){super(new Ke(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(t){const e=this.camera,n=Xs*2*t.angle*this.focus,i=this.mapSize.width/this.mapSize.height,r=t.distance||e.far;(n!==e.fov||i!==e.aspect||r!==e.far)&&(e.fov=n,e.aspect=i,e.far=r,e.updateProjectionMatrix()),super.updateMatrices(t)}copy(t){return super.copy(t),this.focus=t.focus,this}}class V_ extends _o{constructor(t,e,n=0,i=Math.PI/3,r=0,a=2){super(t,e),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(ge.DEFAULT_UP),this.updateMatrix(),this.target=new ge,this.distance=n,this.angle=i,this.penumbra=r,this.decay=a,this.map=null,this.shadow=new G_}get power(){return this.intensity*Math.PI}set power(t){this.intensity=t/Math.PI}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.angle=t.angle,this.penumbra=t.penumbra,this.decay=t.decay,this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}const id=new _t,gr=new R,mc=new R;class W_ extends uh{constructor(){super(new Ke(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new it(4,2),this._viewportCount=6,this._viewports=[new ne(2,1,1,1),new ne(0,1,1,1),new ne(3,1,1,1),new ne(1,1,1,1),new ne(3,0,1,1),new ne(1,0,1,1)],this._cubeDirections=[new R(1,0,0),new R(-1,0,0),new R(0,0,1),new R(0,0,-1),new R(0,1,0),new R(0,-1,0)],this._cubeUps=[new R(0,1,0),new R(0,1,0),new R(0,1,0),new R(0,1,0),new R(0,0,1),new R(0,0,-1)]}updateMatrices(t,e=0){const n=this.camera,i=this.matrix,r=t.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),gr.setFromMatrixPosition(t.matrixWorld),n.position.copy(gr),mc.copy(n.position),mc.add(this._cubeDirections[e]),n.up.copy(this._cubeUps[e]),n.lookAt(mc),n.updateMatrixWorld(),i.makeTranslation(-gr.x,-gr.y,-gr.z),id.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(id)}}class Kf extends _o{constructor(t,e,n=0,i=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new W_}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}}class q_ extends uh{constructor(){super(new Ql(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class $f extends _o{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(ge.DEFAULT_UP),this.updateMatrix(),this.target=new ge,this.shadow=new q_}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class Ur{static decodeText(t){if(console.warn("THREE.LoaderUtils: decodeText() has been deprecated with r165 and will be removed with r175. Use TextDecoder instead."),typeof TextDecoder<"u")return new TextDecoder().decode(t);let e="";for(let n=0,i=t.length;n<i;n++)e+=String.fromCharCode(t[n]);try{return decodeURIComponent(escape(e))}catch{return e}}static extractUrlBase(t){const e=t.lastIndexOf("/");return e===-1?"./":t.slice(0,e+1)}static resolveURL(t,e){return typeof t!="string"||t===""?"":(/^https?:\/\//i.test(e)&&/^\//.test(t)&&(e=e.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(t)||/^data:.*,.*$/i.test(t)||/^blob:.*$/i.test(t)?t:e+t)}}class X_ extends nr{constructor(t){super(t),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(t){return this.options=t,this}load(t,e,n,i){t===void 0&&(t=""),this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const r=this,a=Li.get(t);if(a!==void 0){if(r.manager.itemStart(t),a.then){a.then(l=>{e&&e(l),r.manager.itemEnd(t)}).catch(l=>{i&&i(l)});return}return setTimeout(function(){e&&e(a),r.manager.itemEnd(t)},0),a}const o={};o.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",o.headers=this.requestHeader;const c=fetch(t,o).then(function(l){return l.blob()}).then(function(l){return createImageBitmap(l,Object.assign(r.options,{colorSpaceConversion:"none"}))}).then(function(l){return Li.add(t,l),e&&e(l),r.manager.itemEnd(t),l}).catch(function(l){i&&i(l),Li.remove(t),r.manager.itemError(t),r.manager.itemEnd(t)});Li.add(t,c),r.manager.itemStart(t)}}const dh="\\[\\]\\.:\\/",j_=new RegExp("["+dh+"]","g"),fh="[^"+dh+"]",Y_="[^"+dh.replace("\\.","")+"]",K_=/((?:WC+[\/:])*)/.source.replace("WC",fh),$_=/(WCOD+)?/.source.replace("WCOD",Y_),J_=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",fh),Q_=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",fh),Z_=new RegExp("^"+K_+$_+J_+Q_+"$"),ty=["material","materials","bones","map"];class ey{constructor(t,e,n){const i=n||ce.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,i)}getValue(t,e){this.bind();const n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(t,e)}setValue(t,e){const n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,r=n.length;i!==r;++i)n[i].setValue(t,e)}bind(){const t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){const t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}}class ce{constructor(t,e,n){this.path=e,this.parsedPath=n||ce.parseTrackName(e),this.node=ce.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new ce.Composite(t,e,n):new ce(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(j_,"")}static parseTrackName(t){const e=Z_.exec(t);if(e===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);const n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){const r=n.nodeName.substring(i+1);ty.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){const n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){const n=function(r){for(let a=0;a<r.length;a++){const o=r[a];if(o.name===e||o.uuid===e)return o;const c=n(o.children);if(c)return c}return null},i=n(t.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)t[e++]=n[i]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=t[e++]}_setValue_array_setNeedsUpdate(t,e){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node;const e=this.parsedPath,n=e.objectName,i=e.propertyName;let r=e.propertyIndex;if(t||(t=ce.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let l=e.objectIndex;switch(n){case"materials":if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===l){l=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(l!==void 0){if(t[l]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[l]}}const a=t[i];if(a===void 0){const l=e.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+l+"."+i+" but it wasn't found.",t);return}let o=this.Versioning.None;this.targetObject=t,t.needsUpdate!==void 0?o=this.Versioning.NeedsUpdate:t.matrixWorldNeedsUpdate!==void 0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(r!==void 0){if(i==="morphTargetInfluences"){if(!t.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}c=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(c=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=i;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}ce.Composite=ey;ce.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};ce.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};ce.prototype.GetterByBindingType=[ce.prototype._getValue_direct,ce.prototype._getValue_array,ce.prototype._getValue_arrayElement,ce.prototype._getValue_toArray];ce.prototype.SetterByBindingTypeAndVersioning=[[ce.prototype._setValue_direct,ce.prototype._setValue_direct_setNeedsUpdate,ce.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[ce.prototype._setValue_array,ce.prototype._setValue_array_setNeedsUpdate,ce.prototype._setValue_array_setMatrixWorldNeedsUpdate],[ce.prototype._setValue_arrayElement,ce.prototype._setValue_arrayElement_setNeedsUpdate,ce.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[ce.prototype._setValue_fromArray,ce.prototype._setValue_fromArray_setNeedsUpdate,ce.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:zl}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=zl);class ny{constructor(t){this.stream=null,this.mirrored=!1,this.selfie=!1,this.facing="environment",this.ready=!1,this.grids=new Map,this.video=t,t.setAttribute("playsinline",""),t.muted=!0,t.autoplay=!0}async countCameras(){try{return(await navigator.mediaDevices.enumerateDevices()).filter(e=>e.kind==="videoinput").length}catch{return 0}}async flip(){const t=this.facing;this.stop();try{await this.start(t==="user"?"environment":"user")}catch(e){throw await this.start(t).catch(()=>{}),e}}async start(t=this.facing){if(!window.isSecureContext)throw"insecure";if(!navigator.mediaDevices?.getUserMedia)throw"unsupported";try{this.stream=await navigator.mediaDevices.getUserMedia({audio:!1,video:{facingMode:{ideal:t},width:{ideal:1280},height:{ideal:720},frameRate:{ideal:30,max:30}}})}catch(r){const a=r?.name;throw a==="NotAllowedError"||a==="SecurityError"?"denied":a==="NotFoundError"||a==="OverconstrainedError"?"notfound":"unknown"}this.video.srcObject=this.stream,await this.video.play().catch(()=>{}),await new Promise(r=>{if(this.video.videoWidth)return r();this.video.addEventListener("loadedmetadata",()=>r(),{once:!0})});const n=this.stream.getVideoTracks()[0].getSettings().facingMode,i=matchMedia("(pointer: coarse)").matches;this.facing=t,this.selfie=i&&(n==="user"||!n&&t==="user"),this.mirrored=!i&&(n==="user"||!n),this.video.classList.toggle("mirrored",this.mirrored),this.ready=!0}stop(){this.stream?.getTracks().forEach(t=>t.stop()),this.stream=null,this.ready=!1}layout(){const t=window.innerWidth,e=window.innerHeight,n=this.video.videoWidth||t,i=this.video.videoHeight||e,r=Math.max(t/n,e/i);return{vw:n,vh:i,sw:t,sh:e,scale:r,ox:(n*r-t)/2,oy:(i*r-e)/2}}displayVFov(t){const e=this.layout(),n=t*Math.PI/360,r=e.vw>=e.vh?Math.tan(n)*(e.vh/e.vw):Math.tan(n),a=e.sh/(e.vh*e.scale);return 2*Math.atan(r*a)*180/Math.PI}videoFocalPx(t){const e=this.video.videoWidth||1280,n=this.video.videoHeight||720,i=t*Math.PI/360,r=e>=n?Math.tan(i)*(n/e):Math.tan(i);return n/2/r}videoToNdc(t,e,n=this.layout()){const r=(this.mirrored?1-t:t)*n.vw*n.scale-n.ox,a=e*n.vh*n.scale-n.oy;return[r/n.sw*2-1,1-a/n.sh*2]}sampleGrid(t,e){if(!this.ready)return null;let n=this.grids.get(t*65536+e);n||(n=document.createElement("canvas"),n.width=t,n.height=e,this.grids.set(t*65536+e,n));const i=n.getContext("2d",{willReadFrequently:!0});if(!i)return null;const r=this.layout();return i.imageSmoothingQuality="high",i.save(),this.mirrored&&(i.translate(t,0),i.scale(-1,1)),i.drawImage(this.video,r.ox/r.scale,r.oy/r.scale,r.sw/r.scale,r.sh/r.scale,0,0,t,e),i.restore(),i.getImageData(0,0,t,e).data}captureJpeg(t=768,e=.72){if(!this.ready)return null;const n=this.layout(),i=n.sw/n.scale,r=n.sh/n.scale,a=Math.min(1,t/Math.max(i,r)),o=document.createElement("canvas");o.width=Math.round(i*a),o.height=Math.round(r*a);const c=o.getContext("2d");return c?(c.drawImage(this.video,n.ox/n.scale,n.oy/n.scale,i,r,0,0,o.width,o.height),o.toDataURL("image/jpeg",e).split(",")[1]??null):null}sampleLight(){if(!this.ready)return null;this.probe||(this.probe=document.createElement("canvas"),this.probe.width=8,this.probe.height=8);const t=this.probe.getContext("2d",{willReadFrequently:!0});if(!t)return null;t.drawImage(this.video,0,0,8,8);const e=t.getImageData(0,0,8,8).data;let n=0,i=0,r=0;for(let o=0;o<e.length;o+=4)n+=e[o],i+=e[o+1],r+=e[o+2];const a=e.length/4;return n/=a*255,i/=a*255,r/=a*255,{lum:.2126*n+.7152*i+.0722*r,r:n,g:i,b:r}}}const iy=new R(0,0,1),sy=new Kt(-Math.sqrt(.5),0,0,Math.sqrt(.5)),Ua=new We,gc=new Kt;class ry{constructor(){this.quaternion=new Kt,this.angularVel=new R,this.hasOrientation=!1,this.permission="unsupported",this.dragMode=!1,this.dragBlocked=!1,this.raw=new Kt,this.yawOffset=0,this.pendingRecenter=!0,this.lastEventAt=0,this.alpha=0,this.beta=90,this.gamma=0,this.dragYaw=-Math.PI/2,this.dragPitch=0,this.prevQ=new Kt,this.steps=0,this.accLP=9.81,this.accBase=9.81,this.lastStepAt=0,this.stepArmed=!0,this.recenterHeading=0}async requestPermission(){const t=window.DeviceOrientationEvent,e=window.DeviceMotionEvent;try{if(t&&typeof t.requestPermission=="function"){const n=await t.requestPermission();e&&typeof e.requestPermission=="function"&&await e.requestPermission().catch(()=>"denied"),this.permission=n==="granted"?"granted":"denied"}else"DeviceOrientationEvent"in window&&(this.permission="granted")}catch{this.permission="denied"}return this.permission==="granted"&&this.listen(),this.permission}listen(){window.addEventListener("deviceorientation",t=>{t.alpha==null&&t.beta==null||(this.alpha=t.alpha??0,this.beta=t.beta??0,this.gamma=t.gamma??0,this.lastEventAt=performance.now(),this.hasOrientation=!0)}),window.addEventListener("devicemotion",t=>{const e=t.accelerationIncludingGravity;if(!e||e.x==null)return;const n=Math.hypot(e.x??0,e.y??0,e.z??0);this.detectStep(n)})}detectStep(t){this.accLP+=(t-this.accLP)*.35,this.accBase+=(t-this.accBase)*.02;const e=this.accLP-this.accBase,n=performance.now();this.stepArmed&&e>1.2&&n-this.lastStepAt>320?(this.steps++,this.lastStepAt=n,this.stepArmed=!1,this.onStep?.()):e<.3&&(this.stepArmed=!0)}enableDrag(t){this.dragMode=!0;let e=null,n=0,i=0;t.addEventListener("pointerdown",r=>{this.hasOrientation||this.dragBlocked||(e=r.pointerId,n=r.clientX,i=r.clientY)}),window.addEventListener("pointermove",r=>{e===r.pointerId&&(this.dragYaw+=(r.clientX-n)*.005,this.dragPitch=Tt.clamp(this.dragPitch+(r.clientY-i)*.005,-1.45,1.45),n=r.clientX,i=r.clientY)}),window.addEventListener("pointerup",r=>{e===r.pointerId&&(e=null)})}setDragPitch(t){this.dragPitch=t}recenter(t=0){this.pendingRecenter=!0,this.recenterHeading=t,this.hasOrientation||(this.dragYaw=-Math.PI/2-t)}get stale(){return this.hasOrientation&&performance.now()-this.lastEventAt>2e3}update(t){if(this.prevQ.copy(this.quaternion),this.hasOrientation){const e=Math.PI/180,n=(screen.orientation?.angle??window.orientation??0)*e;if(Ua.set(this.beta*e,this.alpha*e,-this.gamma*e,"YXZ"),this.raw.setFromEuler(Ua).multiply(sy).multiply(gc.setFromAxisAngle(iy,-n)),this.pendingRecenter){const i=new R(0,0,-1).applyQuaternion(this.raw);this.yawOffset=Math.atan2(i.z,i.x)-this.recenterHeading,this.pendingRecenter=!1}gc.setFromAxisAngle(new R(0,1,0),this.yawOffset),this.quaternion.copy(gc).multiply(this.raw)}else this.pendingRecenter=!1,Ua.set(this.dragPitch,this.dragYaw,0,"YXZ"),this.quaternion.setFromEuler(Ua);if(t>0){const e=this.prevQ.clone().invert().multiply(this.quaternion),n=2*Math.acos(Tt.clamp(e.w,-1,1)),i=Math.sqrt(1-e.w*e.w)||1;this.angularVel.set(e.x/i,e.y/i,e.z/i).multiplyScalar(Math.min(n/t,20))}}pitchDeg(){const t=new R(0,0,-1).applyQuaternion(this.quaternion);return Math.asin(Tt.clamp(t.y,-1,1))*180/Math.PI}}class ay{constructor(t){this.scene=new Pf,this.pixelRatio=2,this.gl=new qx({canvas:t,alpha:!0,antialias:!1,powerPreference:"high-performance",preserveDrawingBuffer:!1}),this.gl.setClearColor(0,0),this.gl.outputColorSpace=Fe,this.camera=new Ke(60,innerWidth/innerHeight,.03,80),this.scene.add(this.camera),this.resize()}setPixelRatio(t){this.pixelRatio=t,this.resize()}setVFov(t){Math.abs(this.camera.fov-t)>.05&&(this.camera.fov=t,this.camera.updateProjectionMatrix())}resize(){const t=innerWidth,e=innerHeight;this.gl.setPixelRatio(Math.min(window.devicePixelRatio||1,this.pixelRatio)),this.gl.setSize(t,e,!1),this.camera.aspect=t/e,this.camera.updateProjectionMatrix()}render(){this.gl.render(this.scene,this.camera)}}const An={cobalt:"#00539B",cream:"#FCFAF0",petalDeep:"#FF8FB1",branch:"#4A3B36",glow:"#FFE7B8"},Pl=.12,oy={high:{pixelRatio:2,maxFalling:600,maxResting:900,handHz:20,sparkles:!0,branchDetail:1},medium:{pixelRatio:1.5,maxFalling:420,maxResting:650,handHz:16,sparkles:!0,branchDetail:.8},low:{pixelRatio:1,maxFalling:280,maxResting:420,handHz:12,sparkles:!1,branchDetail:.55}};class cy{constructor(){this.level="high",this.batterySaver=!1,this.fps=60,this.frames=0,this.acc=0,this.goodFor=0,this.order=["low","medium","high"]}get settings(){return oy[this.batterySaver?"low":this.level]}setBatterySaver(t){this.batterySaver=t,this.onChange?.(t?"low":this.level)}tick(t){if(this.frames++,this.acc+=t,this.acc<2)return;this.fps=this.frames/this.acc,this.frames=0;const e=this.acc;if(this.acc=0,this.batterySaver)return;const n=this.order.indexOf(this.level);this.fps<27&&n>0?(this.level=this.order[n-1],this.goodFor=0,this.onChange?.(this.level)):this.fps>50?(this.goodFor+=e,this.goodFor>8&&n<2&&(this.level=this.order[n+1],this.goodFor=0,this.onChange?.(this.level))):this.goodFor=0}}const ly={length:26,width:2.5,wallHeight:2.77,stoneWallHeight:2.4},hy={eyeHeightMin:1.2,eyeHeightMax:1.8,eyeHeightDefault:1.45,strideMeters:.62},uy={longEdgeFovDeg:67},dy=[{id:"F",side:"orange",x0:0,x1:2,width:2,height:2.4,y0:.2,landmark:!0,note:"Lời giới thiệu"},{id:"A1",side:"orange",x0:2,x1:4.5,width:2.5,height:2.4,y0:.2,landmark:!0,note:"Phần A (chia 4 đoạn làm mốc)"},{id:"A2",side:"orange",x0:4.5,x1:7,width:2.5,height:2.4,y0:.2,landmark:!0,note:"Phần A (chia 4 đoạn làm mốc)"},{id:"A3",side:"orange",x0:7,x1:9.5,width:2.5,height:2.4,y0:.2,landmark:!0,note:"Phần A (chia 4 đoạn làm mốc)"},{id:"A4",side:"orange",x0:9.5,x1:12,width:2.5,height:2.4,y0:.2,landmark:!0,note:"Phần A (chia 4 đoạn làm mốc)"},{id:"C1",side:"orange",x0:12,x1:13,width:1,height:2.4,y0:.2,note:"nền xanh đặc – không làm mốc"},{id:"C2",side:"orange",x0:13,x1:14,width:1,height:2.4,y0:.2},{id:"C3",side:"orange",x0:14,x1:15,width:1,height:2.4,y0:.2},{id:"C4",side:"orange",x0:15,x1:16,width:1,height:2.4,y0:.2,landmark:!0},{id:"C5",side:"orange",x0:16,x1:17,width:1,height:2.4,y0:.2},{id:"C6",side:"orange",x0:17,x1:18,width:1,height:2.4,y0:.2},{id:"C7",side:"orange",x0:18,x1:19,width:1,height:2.4,y0:.2},{id:"C8",side:"orange",x0:19,x1:20,width:1,height:2.4,y0:.2,landmark:!0},{id:"C9",side:"orange",x0:20,x1:21,width:1,height:2.4,y0:.2},{id:"D11",side:"orange",x0:21,x1:26,width:5,height:2.4,y0:.2,landmark:!0,note:"Khu tương tác, bảng Tết Nguyên Đán 1953"},{id:"B1",side:"stone",x0:0,x1:.85,width:.85,height:2.4,y0:.3},{id:"B2",side:"stone",x0:.85,x1:3.85,width:3,height:2.4,y0:.3,landmark:!0},{id:"B3",side:"stone",x0:3.85,x1:4.7,width:.85,height:1.8,y0:.3},{id:"B4",side:"stone",x0:4.7,x1:5.2,width:.5,height:1.2,y0:1,note:"tab năm – không làm mốc"},{id:"B5",side:"stone",x0:5.2,x1:6.2,width:1,height:2,y0:.3},{id:"B6",side:"stone",x0:6.2,x1:7.2,width:1,height:1.6,y0:.3},{id:"B7",side:"stone",x0:7.2,x1:7.7,width:.5,height:1.2,y0:1,note:"tab năm – không làm mốc"},{id:"B8",side:"stone",x0:7.7,x1:8.7,width:1,height:2,y0:.3},{id:"B9",side:"stone",x0:8.7,x1:9.7,width:1,height:1.6,y0:.3},{id:"B10",side:"stone",x0:9.7,x1:10.2,width:.5,height:1.2,y0:1,note:"tab năm – không làm mốc"},{id:"B11",side:"stone",x0:10.2,x1:11.2,width:1,height:2,y0:.3},{id:"B12",side:"stone",x0:11.2,x1:11.7,width:.5,height:1.2,y0:1,note:"tab năm – không làm mốc"},{id:"B13",side:"stone",x0:11.7,x1:12.7,width:1,height:2,y0:.3},{id:"B14",side:"stone",x0:12.7,x1:13.7,width:1,height:1.6,y0:.3},{id:"B15",side:"stone",x0:13.7,x1:14.7,width:1,height:2,y0:.3},{id:"B16",side:"stone",x0:14.7,x1:15.7,width:1,height:1.6,y0:.3},{id:"B17",side:"stone",x0:15.7,x1:16.2,width:.5,height:1.2,y0:1,note:"tab năm – không làm mốc"},{id:"B18",side:"stone",x0:16.2,x1:17.2,width:1,height:2,y0:.3},{id:"B19",side:"stone",x0:17.2,x1:17.7,width:.5,height:1.2,y0:1,note:"tab năm – không làm mốc"},{id:"B20",side:"stone",x0:17.7,x1:18.7,width:1,height:2,y0:.3},{id:"B21",side:"stone",x0:18.7,x1:19.7,width:1,height:1.6,y0:.3},{id:"B22",side:"stone",x0:19.7,x1:20.2,width:.5,height:1.2,y0:1,note:"tab năm – không làm mốc"},{id:"B23",side:"stone",x0:20.2,x1:21.2,width:1,height:2,y0:.3},{id:"B24",side:"stone",x0:21.2,x1:21.7,width:.5,height:1.2,y0:1,note:"tab năm – không làm mốc"},{id:"B25",side:"stone",x0:21.7,x1:22.7,width:1,height:2,y0:.3},{id:"B26",side:"stone",x0:22.7,x1:23.2,width:.5,height:1.2,y0:1,note:"tab năm – không làm mốc"},{id:"B27",side:"stone",x0:23.2,x1:24.2,width:1,height:2,y0:.3},{id:"B28",side:"stone",x0:24.2,x1:25.2,width:1,height:1.6,y0:.3}],fy=[{id:"floor",type:"plane",axis:"y",value:0,restSurface:!0},{id:"wall-orange",type:"plane",axis:"z",value:1.25,normal:-1},{id:"wall-stone",type:"plane",axis:"z",value:-1.25,normal:1},{id:"gable-entry",type:"plane",axis:"x",value:0,normal:1},{id:"gable-end",type:"plane",axis:"x",value:26,normal:-1},{id:"table-D14",type:"aabb",min:[22,0,.55],max:[25,1,1.25],restSurface:!0,note:"Bàn D14 3 x 0,7 x cao 1,0 m"},{id:"real-peach-tree",type:"cylinder",center:[23.5,0,.9],radius:1.3,yMin:1,yMax:4,soft:!0,note:"Cây đào thật cao 3 m trên bàn – vùng hoa ảo mờ đi [vị trí x CẦN ĐO, hồ sơ ghi ≈24]"}],py={corridor:ly,user:hy,camera:uy,panels:dy,colliders:fy},Ae=py,my=Ae.corridor.width,Me=my/2,Gn=Ae.corridor.length,sd=Ae.panels.filter(s=>s.landmark);function gy(s){return(s.x0+s.x1)/2}class by{constructor(){this.position=new R(.6,Ae.user.eyeHeightDefault,0),this.sigma=.5,this.lastFix=null,this.enabled=!0,this.bounded=!1,this.target=this.position.clone()}onStep(t){if(!this.enabled)return;const e=new R(t.x,0,t.z);if(e.lengthSq()<.04)return;e.normalize();const n=Ae.user.strideMeters;this.target.x+=e.x*n*(this.bounded?.95:1),this.target.z+=e.z*n*(this.bounded?.25:1),this.clamp(),this.sigma=Math.min(3,this.sigma+.06)}fixAtPanel(t){this.target.x=gy(t);const e=Math.min(1,Ae.corridor.width-.6);this.target.z=t.side==="orange"?Me-e:-Me+e,this.clamp(),this.position.copy(this.target),this.sigma=.3,this.lastFix=t.id}fixAbsolute(t,e,n,i=1){const r=Tt.clamp(i,0,1);this.target.x=Tt.lerp(this.target.x,t,r),this.target.z=Tt.lerp(this.target.z,e,r),n!==void 0&&(this.target.y=Tt.clamp(n,Ae.user.eyeHeightMin,Ae.user.eyeHeightMax)),this.clamp(),this.sigma=.25}setX(t){this.target.x=t,this.clamp(),this.position.copy(this.target)}setEyeHeight(t){this.target.y=Tt.clamp(t,Ae.user.eyeHeightMin,Ae.user.eyeHeightMax)}clamp(){this.bounded&&(this.target.x=Tt.clamp(this.target.x,.3,Gn-.3),this.target.z=Tt.clamp(this.target.z,-Me+.35,Me-.35))}update(t){this.position.lerp(this.target,1-Math.exp(-t*6))}}const Oe={minNormalY:.97,minCameraHeight:.9,maxCameraHeight:2.4,mergeTolerance:.06,minSamples:10,minSpan:.5,strongSamples:30,strongSpan:1,floorTolerance:.1,cameraWindow:10,evidenceWindow:3,maxGap:.6,minSpread:.35},vy=16;class xy{constructor(){this.tiers=[],this.camera=[],this.now=0}reset(){this.tiers.length=0,this.camera.length=0,this.now=0}observeCamera(t,e){if(!Number.isFinite(t)||!Number.isFinite(e))return;this.now=e,this.tiers=this.tiers.filter(i=>e-i.last<=Oe.maxGap);const n=this.camera[this.camera.length-1];for(!n||e-n.t>=.25?this.camera.push({y:t,t:e}):t>n.y&&(n.y=t);this.camera.length&&e-this.camera[0].t>Oe.cameraWindow;)this.camera.shift()}addHit(t,e,n,i,r){if(![t,e,n,i,r].every(Number.isFinite)||e<Oe.minNormalY)return!1;let a=null,o=Oe.mergeTolerance;for(const c of this.tiers){const l=Math.abs(c.y-t);l<=o&&(o=l,a=c)}if(a)n-a.countedAt>=.025&&(a.n++,a.countedAt=n),a.y+=(t-a.y)/Math.min(a.n,200),a.last=n,a.points=a.points.filter(c=>n-c.t<=Oe.evidenceWindow),a.points.some(c=>Math.hypot(c.x-i,c.z-r)<.12)||a.points.push({x:i,z:r,t:n});else{if(this.tiers.length>=vy){let c=0;for(let l=1;l<this.tiers.length;l++)this.tiers[l].last<this.tiers[c].last&&(c=l);this.tiers.splice(c,1)}this.tiers.push({y:t,n:1,first:n,last:n,countedAt:n,points:[{x:i,z:r,t:n}]})}return!0}get cameraY(){let t=-1/0;for(const e of this.camera)e.y>t&&(t=e.y);return t}lowest(t,e){const n=this.cameraY;let i=null;for(const r of this.tiers){if(this.now-r.last>Oe.maxGap||r.n<t||r.last-r.first<e)continue;const a=r.points.filter(c=>this.now-c.t<=Oe.evidenceWindow);if(a.length<3||!a.some(c=>a.some(l=>Math.hypot(c.x-l.x,c.z-l.z)>=Oe.minSpread)))continue;const o=n-r.y;o<Oe.minCameraHeight||o>Oe.maxCameraHeight||(i===null||r.y<i)&&(i=r.y)}return i}get floorY(){return this.lowest(Oe.minSamples,Oe.minSpan)}get confirmedFloorY(){return this.lowest(Oe.strongSamples,Oe.strongSpan)}classify(t){const e=this.floorY;return e!==null?t>e+Oe.floorTolerance?"raised":t>=e-Oe.floorTolerance?"floor":"pending":this.cameraY-t<Oe.minCameraHeight?"raised":"pending"}}const _y=[[0,0],[-.35,-.2],[.35,-.2]],yy=8,My=.35,Sy=2,wy=.6,rd=16579312,Ay=14832959;class Ey{constructor(t,e,n){this.renderer=t,this.world=e,this.supported=!1,this.session=null,this.placed=!1,this.status="scanning",this.detector=new xy,this.sources=[],this.refSpace=null,this.anchor=null,this.anchorGen=0,this.anchorPending=!1,this.placement=new _t,this.placedPos=new R,this.placedQ=new Kt,this.floorY=0,this.correctAfter=0,this.wantStatus="scanning",this.wantSince=0,this.camPos=new R,this.camFwd=new R(0,0,-1),this.canPlace=!1,this.ceilingHits=[];const i=new ch(.07,.09,40).rotateX(-Math.PI/2);this.reticleMat=new Qe({color:rd,transparent:!0,opacity:.9}),this.reticle=new Qt(i,this.reticleMat),this.reticle.matrixAutoUpdate=!1,this.reticle.visible=!1,n.add(this.reticle)}async detect(){try{this.supported=!!(navigator.xr&&await navigator.xr.isSessionSupported("immersive-ar"))}catch{this.supported=!1}return this.supported}async start(t){if(!navigator.xr)return!1;const e=await navigator.xr.requestSession("immersive-ar",{requiredFeatures:["hit-test"],optionalFeatures:["dom-overlay","anchors"],domOverlay:{root:t}});this.session=e,this.renderer.xr.enabled=!0,this.renderer.xr.setFramebufferScaleFactor(wy),this.renderer.xr.setReferenceSpaceType("local"),await this.renderer.xr.setSession(e),this.refSpace=this.renderer.xr.getReferenceSpace();const n=await e.requestReferenceSpace("viewer");return this.sources=await this.createSources(e,n),this.resetPlacement(),t.addEventListener("beforexrselect",i=>{i.target?.closest?.("button, a, input, label, .sheet-backdrop, .ob")&&i.preventDefault()}),e.addEventListener("select",()=>this.onSelect()),e.addEventListener("end",()=>{for(const i of this.sources)i.source.cancel();this.sources=[],this.dropAnchor(),this.session=null,this.renderer.xr.enabled=!1,this.world.matrixAutoUpdate=!0,this.world.matrix.identity(),this.world.position.set(0,0,0),this.world.quaternion.identity(),this.world.visible=!0,this.reticle.visible=!1,this.onEnd?.()}),!0}async createSources(t,e){const n=([r,a])=>{const o=new XRRay({x:0,y:0,z:0,w:1},{x:r,y:a,z:-1,w:0});return Promise.resolve(t.requestHitTestSource?.({space:e,offsetRay:o})).catch(()=>{})};return(await Promise.all(_y.map(n))).flatMap((r,a)=>r?[{source:r,center:a===0}]:[])}resetPlacement(){this.placed=!1,this.canPlace=!1,this.reticle.visible=!1,this.detector.reset(),this.dropAnchor(),this.world.matrixAutoUpdate=!1,this.world.visible=!1,this.wantStatus="scanning",this.status="scanning",this.onStatus?.("scanning")}replace(){this.session&&this.resetPlacement()}onSelect(){if(this.placed)return;if(!this.canPlace||!this.reticle.visible){this.status==="notFloor"&&this.onRejected?.();return}const t=Math.atan2(-this.camFwd.z,this.camFwd.x);this.placedPos.setFromMatrixPosition(this.reticle.matrix),this.placedQ.setFromAxisAngle(new R(0,1,0),t),this.floorY=this.placedPos.y,this.placed=!0,this.applyPlacement(),this.world.visible=!0,this.reticle.visible=!1,this.correctAfter=0,this.setStatus("placed"),this.onPlaced?.()}applyPlacement(){this.placement.compose(this.placedPos,this.placedQ,new R(1,1,1)),this.world.matrix.copy(this.placement),this.world.matrixWorldNeedsUpdate=!0,this.dropAnchor(),this.anchorPending=!0}dropAnchor(){this.anchorGen++,this.anchorPending=!1,this.anchor?.delete?.(),this.anchor=null}createAnchor(t){this.anchorPending=!1;const e=this.anchorGen,{x:n,y:i,z:r}=this.placedPos;try{t.createAnchor?.(new XRRigidTransform({x:n,y:i,z:r}),this.refSpace)?.then(a=>{e===this.anchorGen?this.anchor=a:a.delete?.()}).catch(()=>{})}catch{}}frame(t,e=performance.now()){if(!t||!this.refSpace)return;const n=e/1e3,i=t.getViewerPose(this.refSpace);if(!i||i.emulatedPosition){this.canPlace=!1,this.reticle.visible=!1;return}if(i){const{position:a,orientation:o}=i.transform;this.camPos.set(a.x,a.y,a.z),this.camFwd.set(0,0,-1).applyQuaternion(new Kt(o.x,o.y,o.z,o.w)),this.detector.observeCamera(a.y,n)}const r=this.scan(t,n);if(!this.placed)this.updateReticle(r,n);else if(this.correctFloor(n),this.anchorPending&&this.createAnchor(t),this.anchor){const a=t.getPose(this.anchor.anchorSpace,this.refSpace);if(a){const{x:o,y:c,z:l}=a.transform.position;this.world.matrix.compose(new R(o,c,l),this.placedQ,new R(1,1,1)),this.world.matrixWorldNeedsUpdate=!0}}}get ceilingHeight(){if(!this.placed||this.ceilingHits.length<10)return null;const t=[...this.ceilingHits].sort((n,i)=>n-i),e=t[t.length>>1]-this.floorY;return e>=2.1&&e<=7?e:null}scan(t,e){let n=null;return this.sources.forEach(({source:i,center:r})=>{t.getHitTestResults(i).slice(0,1).forEach(a=>{const o=a.getPose(this.refSpace);if(!o)return;const{position:c,orientation:l}=o.transform,h=1-2*(l.x*l.x+l.z*l.z);if(Math.hypot(c.x-this.camPos.x,c.z-this.camPos.z)>yy)return;if(h<-.92&&c.y>this.camPos.y+.3){this.ceilingHits.push(c.y),this.ceilingHits.length>60&&this.ceilingHits.shift();return}const u=this.detector.addHit(c.y,h,e,c.x,c.z);r&&u&&(n=new R(c.x,c.y,c.z))})}),n}updateReticle(t,e){const n=this.detector.floorY,i=t?this.detector.classify(t.y):null;let r=null,a="scanning";i==="raised"?(r=t,a="notFloor"):i==="floor"&&(r=t.setY(n),a="ready"),this.canPlace=a==="ready",this.reticle.visible=!!r,r&&this.reticle.matrix.makeTranslation(r.x,r.y,r.z),this.reticleMat.color.setHex(a==="notFloor"?Ay:rd),a!==this.wantStatus&&(this.wantStatus=a,this.wantSince=e),(e-this.wantSince>=My||a==="ready")&&this.setStatus(a)}correctFloor(t){if(t<this.correctAfter)return;const e=this.detector.confirmedFloorY;if(e===null)return;const i=e-this.floorY<-.12;i&&(this.floorY=this.placedPos.y=e,this.applyPlacement(),i&&(this.correctAfter=t+Sy,this.onFloorChanged?.()))}setStatus(t){this.wantStatus=t,t!==this.status&&(this.status=t,this.onStatus?.(t))}end(){this.session?.end().catch(()=>{})}}const ht=36,Gt=64,Ty=.6,Ry=2.8,Cy=10,Py=150,Jf=Math.floor(Gt*.82),ad=5,ka=6,od=35,Ly=.55,Iy=.7,br=.15,Dy=3,Ny=8,vr=Tt.clamp,xr=new R;function Fy(s,t,e,n){for(let i=0;i<Gt;i++){const r=1-(i+.5)/Gt*2;for(let a=0;a<ht;a++)xr.set((a+.5)/ht*2-1,r,.5).applyMatrix4(t).applyQuaternion(e).normalize(),s[i*ht+a]=xr.y<-.02?n/-xr.y*Math.hypot(xr.x,xr.z):1/0}}class Uy{constructor(){this.mask=new Float32Array(ht*Gt),this.Y=new Float32Array(ht*Gt),this.Cb=new Float32Array(ht*Gt),this.Cr=new Float32Array(ht*Gt),this.target=new Uint8Array(ht*Gt),this.scratch=new Uint8Array(ht*Gt),this.stack=new Int32Array(ht*Gt),this.model=null,this.candidate=null,this.candidateTime=0}get ready(){return!!this.model}reset(){this.model=null,this.candidate=null,this.candidateTime=0,this.mask.fill(0)}update(t,e,n){this.toYCbCr(t);const i=this.pickSeeds(e);if(n=vr(n,0,.25),i.length>=Cy?this.learn(i,n):(this.candidate=null,this.candidateTime=0),!this.model)return;this.grow(i,e);const r=1-Math.exp(-n*Ny);for(let a=0;a<this.mask.length;a++)this.mask[a]=this.target[a]?this.mask[a]+(1-this.mask[a])*r:0}sample(t,e){if(!this.model||!Number.isFinite(t)||!Number.isFinite(e)||Math.abs(t)>1||Math.abs(e)>1)return 0;const n=vr((t*.5+.5)*ht-.5,0,ht-1.001),i=vr((.5-e*.5)*Gt-.5,0,Gt-1.001),r=n|0,a=i|0,o=n-r,c=i-a,l=a*ht+r,h=this.mask,u=h[l]+(h[l+1]-h[l])*o,d=h[l+ht]+(h[l+ht+1]-h[l+ht])*o;return u+(d-u)*c}toYCbCr(t){for(let e=0;e<Gt;e++)for(let n=0;n<ht;n++){let i=0,r=0,a=0,o=0;for(let l=Math.max(0,e-1);l<=Math.min(Gt-1,e+1);l++)for(let h=Math.max(0,n-1);h<=Math.min(ht-1,n+1);h++){const u=(l*ht+h)*4;i+=t[u],r+=t[u+1],a+=t[u+2],o++}i/=o,r/=o,a/=o;const c=e*ht+n;this.Y[c]=.299*i+.587*r+.114*a,this.Cb[c]=-.169*i-.331*r+.5*a,this.Cr[c]=.5*i-.419*r-.081*a}}pickSeeds(t){const e=[];for(let n=Math.floor(Gt*.55);n<Jf;n++)for(let i=Math.floor(ht*.18);i<ht*.82;i++){const r=n*ht+i;t[r]>=Ty&&t[r]<=Ry&&e.push(r)}return e}learn(t,e){const{Y:n,Cb:i,Cr:r}=this,a=(M,E,S,C)=>Math.abs(i[M]-S)<ka&&Math.abs(r[M]-C)<ka&&Math.abs(n[M]-E)<od,o=Math.max(1,Math.floor(t.length/Py));let c=-1,l=0;for(let M=0;M<t.length;M+=o){const E=t[M];let S=0;for(let C=0;C<t.length;C+=o)a(t[C],n[E],i[E],r[E])&&S++;S>l&&(l=S,c=E)}if(c<0)return;let h=n[c],u=i[c],d=r[c],f=0,g=0,b=0,m=0;for(let M=0;M<4;M++){let E=0,S=0,C=0;f=g=b=m=0;for(const I of t)a(I,h,u,d)&&(f++,E+=n[I],S+=i[I],C+=r[I],g+=n[I]*n[I],b+=i[I]*i[I],m+=r[I]*r[I]);if(!f)return;h=E/f,u=S/f,d=C/f}if(f/t.length<Ly){this.candidate=null,this.candidateTime=0;return}const p=Math.sqrt(Math.max(0,g/f-h*h)),y=Math.sqrt(Math.max(0,Math.max(b/f-u*u,m/f-d*d))),v={y:h,cb:u,cr:d,tolY:vr(p*2.5,30,70),tolC:vr(y*2.5,6,14)},_=this.model;if(_&&Math.abs(_.cb-u)<_.tolC&&Math.abs(_.cr-d)<_.tolC&&Math.abs(_.y-h)<_.tolY)this.candidate=null,this.candidateTime=0,_.y+=(h-_.y)*br,_.cb+=(u-_.cb)*br,_.cr+=(d-_.cr)*br,_.tolY+=(v.tolY-_.tolY)*br,_.tolC+=(v.tolC-_.tolC)*br;else{const M=this.candidate;(!M||Math.abs(M.cb-u)>ka||Math.abs(M.cr-d)>ka||Math.abs(M.y-h)>od)&&(this.candidate=v,this.candidateTime=0),this.candidateTime+=e,this.candidateTime>=(_?Dy:Iy)&&(this.model=v,this.mask.fill(0),this.candidate=null,this.candidateTime=0)}}matches(t){const e=this.model;return Math.abs(this.Cb[t]-e.cb)<e.tolC&&Math.abs(this.Cr[t]-e.cr)<e.tolC&&Math.abs(this.Y[t]-e.y)<e.tolY}grow(t,e){const{target:n,stack:i,scratch:r}=this;n.fill(0);let a=0;for(const c of t)this.matches(c)&&(n[c]=1,i[a++]=c);const o=c=>{n[c]||!Number.isFinite(e[c])||e[c]>ad||!this.matches(c)||(n[c]=1,i[a++]=c)};for(;a>0;){const c=i[--a],l=c%ht;l>0&&o(c-1),l<ht-1&&o(c+1),c>=ht&&o(c-ht),c<ht*(Gt-1)&&o(c+ht)}r.set(n);for(let c=0;c<n.length;c++){if(r[c]||!Number.isFinite(e[c])||e[c]>ad||!this.matches(c))continue;const l=c%ht;(l>0?r[c-1]:0)+(l<ht-1?r[c+1]:0)+(c>=ht?r[c-ht]:0)+(c<ht*(Gt-1)?r[c+ht]:0)>=3&&(n[c]=1)}}}const _r=.2,sn=48,cd=sn/2,ld=4.5,bc=.7,ky=1.6,Oy=.35,By=10,hd=1,zy=-.25,yr=new R;class Hy{constructor(t=By){this.forgetAfter=t,this.score=new Float32Array(sn*sn),this.shiftBuf=new Float32Array(sn*sn),this.body=new Uint8Array(ht*Gt),this.bodyStack=new Int32Array(ht*Gt),this.cx=0,this.cz=0}reset(){this.score.fill(0),this.cx=this.cz=0}index(t,e){const n=Math.floor(t/_r)-this.cx+cd,i=Math.floor(e/_r)-this.cz+cd;return n<0||i<0||n>=sn||i>=sn?-1:i*sn+n}recenter(t,e){const n=Math.floor(t/_r),i=Math.floor(e/_r),r=n-this.cx,a=i-this.cz;if(!(Math.abs(r)<6&&Math.abs(a)<6)){this.shiftBuf.fill(0);for(let o=0;o<sn;o++)for(let c=0;c<sn;c++){const l=c-r,h=o-a;l>=0&&h>=0&&l<sn&&h<sn&&(this.shiftBuf[h*sn+l]=this.score[o*sn+c])}this.score.set(this.shiftBuf),this.cx=n,this.cz=i}}markBody(t){const{body:e,bodyStack:n}=this;e.fill(0);let i=0;const r=a=>{e[a]||t[a]>.6||(e[a]=1,n[i++]=a)};for(let a=0;a<ht;a++)r((Gt-1)*ht+a);for(;i>0;){const a=n[--i],o=a%ht;o>0&&r(a-1),o<ht-1&&r(a+1),a>=ht&&r(a-ht),a<ht*(Gt-1)&&r(a+ht)}}observe(t,e,n,i,r){const a=Math.exp(-r/this.forgetAfter);for(let o=0;o<this.score.length;o++)this.score[o]*=a;this.markBody(t);for(let o=0;o<Gt;o++){const c=1-(o+.5)/Gt*2;for(let l=0;l<ht;l++){const h=t[o*ht+l],u=h>.6;if(!u&&(h>.3||o>=Jf)||(yr.set((l+.5)/ht*2-1,c,.5).applyMatrix4(e).applyQuaternion(n).normalize(),yr.y>=-.02))continue;const d=i.y/-yr.y,f=yr.x*d,g=yr.z*d,b=Math.hypot(f,g);if(b>ld||!u&&(b<bc||b<ky&&this.body[o*ht+l]))continue;const m=this.index(i.x+f,i.z+g);m>=0&&(this.score[m]+=((u?1:-1)-this.score[m])*Oy)}}}wallAlong(t,e,n,i,r=ld){const a=_r*.5;let o=-1;for(let c=bc;c<=r;c+=a){const l=this.index(t+n*c,e+i*c);if(l<0)break;if(this.score[l]<zy){if(o<0&&(o=c),c-o>=hd)return o}else o=-1}return o>=0&&r-o<hd+a?o:null}isInside(t,e,n,i){const r=Math.hypot(n-t,i-e);if(r<bc)return!0;const a=this.wallAlong(t,e,(n-t)/r,(i-e)/r);return a===null||r<a}}const pn=240,yn=120,ud=.55,ir=Math.PI/180,Gy=-6*ir,Vy=-2*ir,Wy=6*ir,qy=12*ir,Xy=58*ir,jy=72*ir,lo=Tt.smoothstep,dd=new R,Yy=new Kt,Ky=new _t;function Ts(s,t,e,n,i){const r=Math.min(n,t-1.001),a=Math.min(i,e-1.001),o=r|0,c=a|0,l=r-o,h=a-c,u=c*t+o,d=s[u]+(s[u+1]-s[u])*l,f=s[u+t]+(s[u+t+1]-s[u+t])*l;return(d+(f-d)*h)/255}const fd=(s,t)=>s*(1-lo(t,Gy,Vy)),pd=(s,t,e)=>Math.max(s,t*lo(e,Xy,jy))*lo(e,Wy,qy);class $y{constructor(){this.floorMask=new Float32Array(ht*Gt),this.ceilMask=new Float32Array(ht*Gt),this.frames=0,this.floor=new Float32Array(pn*yn),this.ceil=new Float32Array(pn*yn),this.data=new Uint8Array(pn*yn*2),this.sinEl=new Float32Array(yn),this.cosEl=new Float32Array(yn),this.sinAz=new Float32Array(pn),this.cosAz=new Float32Array(pn),this.elev=new Float32Array(yn);for(let t=0;t<yn;t++)this.elev[t]=((t+.5)/yn-.5)*Math.PI,this.sinEl[t]=Math.sin(this.elev[t]),this.cosEl[t]=Math.cos(this.elev[t]);for(let t=0;t<pn;t++){const e=((t+.5)/pn-.5)*Math.PI*2;this.sinAz[t]=Math.sin(e),this.cosAz[t]=Math.cos(e)}this.texture=new th(this.data,pn,yn,Xl,Kn),this.texture.wrapS=ts,this.texture.wrapT=pi,this.texture.minFilter=this.texture.magFilter=on,this.texture.generateMipmaps=!1,this.texture.needsUpdate=!0}get ready(){return this.frames>0}reset(){this.frames&&(this.frames=0,this.floor.fill(0),this.ceil.fill(0),this.data.fill(0),this.floorMask.fill(0),this.ceilMask.fill(0),this.texture.needsUpdate=!0)}integrate(t,e,n,i){const r=e.elements,a=r[0],o=r[5],c=Ky.makeRotationFromQuaternion(Yy.copy(i).invert()).elements,{floor:l,ceil:h,data:u,sinEl:d,cosEl:f,sinAz:g,cosAz:b,elev:m}=this,p=t.w-1,y=t.h-1;for(let v=0;v<yn;v++){const _=d[v],M=f[v],E=m[v];for(let S=0;S<pn;S++){const C=M*g[S],I=-M*b[S],x=c[2]*C+c[6]*_+c[10]*I;if(x>-.05)continue;const A=a*(c[0]*C+c[4]*_+c[8]*I)/-x;if(A<-1||A>1)continue;const U=o*(c[1]*C+c[5]*_+c[9]*I)/-x;if(U<-1||U>1)continue;const B=(A*.5+.5)*p,O=(.5-U*.5)*y,X=v*pn+S;l[X]+=(fd(Ts(t.floor,t.w,t.h,B,O),E)-l[X])*ud,h[X]+=(pd(Ts(t.ceil,t.w,t.h,B,O),Ts(t.wall,t.w,t.h,B,O),E)-h[X])*ud,u[X*2]=l[X]*255,u[X*2+1]=h[X]*255}}this.texture.needsUpdate=!0,this.frames++,this.buildMasks(t,n,i)}buildMasks(t,e,n){for(let i=0;i<Gt;i++){const r=1-(i+.5)/Gt*2,a=(i+.5)/Gt*(t.h-1);for(let o=0;o<ht;o++){const c=(o+.5)/ht*(t.w-1);dd.set((o+.5)/ht*2-1,r,.5).applyMatrix4(e).applyQuaternion(n).normalize();const l=Math.asin(Tt.clamp(dd.y,-1,1)),h=i*ht+o;this.floorMask[h]=fd(Ts(t.floor,t.w,t.h,c,a),l),this.ceilMask[h]=pd(Ts(t.ceil,t.w,t.h,c,a),Ts(t.wall,t.w,t.h,c,a),l)}}}cell(t,e,n){const i=Math.hypot(t,e,n)||1,r=Math.floor((Math.atan2(t,-n)/(Math.PI*2)+.5)*pn),a=Math.floor((Math.asin(Tt.clamp(e/i,-1,1))/Math.PI+.5)*yn);return Math.min(yn-1,a)*pn+Math.min(pn-1,r)}sample(t,e,n,i,r){return lo(this.floor[this.cell(n,i,r)],.35,.65)}}const Qf=129,Zf=225;class Jy{constructor(){this.status="idle",this.busy=!1,this.lastMs=0,this.worker=null,this.generation=0,this.sentGeneration=0,this.pose={proj:new _t,projInv:new _t,q:new Kt,pos:new R}}start(){if(this.status==="idle"){this.status="loading";try{this.worker=new Worker(new URL(""+new URL("surface-worker-Cac_EYd0.js",import.meta.url).href,import.meta.url),{type:"module"})}catch{this.status="error";return}this.worker.onmessage=t=>this.receive(t.data),this.worker.onerror=t=>this.fail(t.message),this.worker.postMessage({type:"init",url:new URL("./models/surface/model.json",document.baseURI).href})}}fail(t){console.warn("[nhận diện sàn/trần]",t),this.status="error",this.busy=!1,this.worker?.terminate(),this.worker=null}receive(t){t.type==="ready"?this.status="ready":t.type==="error"?this.fail(t.message):t.type==="result"&&(this.busy=!1,this.lastMs=t.ms??0,this.sentGeneration===this.generation&&this.onResult?.(t.frame,this.pose))}invalidate(){this.generation++}segment(t,e){if(this.status!=="ready"||this.busy||!this.worker)return;this.busy=!0,this.sentGeneration=this.generation,this.pose.proj.copy(e.projectionMatrix),this.pose.projInv.copy(e.projectionMatrixInverse),this.pose.q.copy(e.quaternion),this.pose.pos.copy(e.position);const n=t.buffer;this.worker.postMessage({type:"frame",rgba:n,w:Qf,h:Zf},[n])}}const _i={uSurface:{value:null},uClip:{value:0}},ph=`
  uniform sampler2D uSurface;
  uniform float uClip;
  float ceilingMask(vec3 worldPos) {
    if (uClip < 0.001) return 1.0;
    vec3 d = normalize(worldPos - cameraPosition);
    vec2 uv = vec2(atan(d.x, -d.z) / 6.2831853 + 0.5, asin(clamp(d.y, -1.0, 1.0)) / 3.1415927 + 0.5);
    return mix(1.0, smoothstep(0.35, 0.7, texture2D(uSurface, uv).g), uClip);
  }
`;function Ll(s){return s.onBeforeCompile=t=>{t.uniforms.uSurface=_i.uSurface,t.uniforms.uClip=_i.uClip,t.vertexShader=t.vertexShader.replace("#include <common>",`#include <common>
${ph}
varying float vCeiling;`).replace("#include <project_vertex>",`#include <project_vertex>
        vec4 ceilingWorld = vec4(transformed, 1.0);
        #ifdef USE_INSTANCING
          ceilingWorld = instanceMatrix * ceilingWorld;
        #endif
        vCeiling = ceilingMask((modelMatrix * ceilingWorld).xyz);`),t.fragmentShader=t.fragmentShader.replace("#include <common>",`#include <common>
varying float vCeiling;`).replace("#include <dithering_fragment>",`#include <dithering_fragment>
gl_FragColor.a *= vCeiling;`)},s.customProgramCacheKey=()=>"ceiling-clip",s}const ho=2.8,Qy=2.1,Zy=7,Jr=Math.PI/180,tM=55*Jr,md=5*Jr,eM=10*Jr,nM=60*Jr,iM=12,sM=22,gd=7,rM=.5,aM=240,oM=20,cM=2,lM=15*Jr,hM=.2,uM=.7,Rs=new R,kn=ht*Gt;class dM{constructor(){this.height=ho,this.measured=!1,this.samples=[],this.Y=new Float32Array(kn),this.Cb=new Float32Array(kn),this.Cr=new Float32Array(kn),this.elev=new Float32Array(kn),this.hx=new Float32Array(kn),this.hz=new Float32Array(kn),this.region=new Uint8Array(kn),this.stack=new Int32Array(kn)}reset(){this.height=ho,this.measured=!1,this.samples.length=0}update(t,e,n,i,r){const{Y:a,Cb:o,Cr:c,elev:l,region:h,stack:u}=this;this.computeRays(e,n);const d=[];for(let M=0;M<kn;M++){const E=M*4,S=t[E],C=t[E+1],I=t[E+2];a[M]=.299*S+.587*C+.114*I,o[M]=-.169*S-.331*C+.5*I,c[M]=.5*S-.419*C-.081*I,l[M]>=tM&&d.push(M)}if(d.length<iM)return;const f=(M,E,S,C)=>Math.abs(a[M]-E)<sM&&Math.abs(o[M]-S)<gd&&Math.abs(c[M]-C)<gd;let g=d[0],b=0;for(let M=0;M<d.length;M+=Math.max(1,d.length>>5)){let E=0;for(const S of d)f(S,a[d[M]],o[d[M]],c[d[M]])&&E++;E>b&&(b=E,g=d[M])}if(b/d.length<rM)return;const m=a[g],p=o[g],y=c[g];h.fill(0);let v=0;for(const M of d)f(M,m,p,y)&&(h[M]=1,u[v++]=M);const _=M=>{h[M]||l[M]<md||!f(M,m,p,y)||(h[M]=1,u[v++]=M)};for(;v>0;){const M=u[--v],E=M%ht;E>0&&_(M-1),E<ht-1&&_(M+1),M>=ht&&_(M-ht),M<ht*(Gt-1)&&_(M+ht)}this.measure(i,r)}updateMask(t,e,n,i,r){this.computeRays(e,n);for(let a=0;a<kn;a++)this.region[a]=t[a]>.5&&this.elev[a]>=md?1:0;this.measure(i,r)}computeRays(t,e){for(let n=0;n<Gt;n++){const i=1-(n+.5)/Gt*2;for(let r=0;r<ht;r++){const a=n*ht+r;Rs.set((r+.5)/ht*2-1,i,.5).applyMatrix4(t).applyQuaternion(e).normalize(),this.elev[a]=Math.asin(Tt.clamp(Rs.y,-1,1));const o=Math.hypot(Rs.x,Rs.z)||1;this.hx[a]=Rs.x/o,this.hz[a]=Rs.z/o}}}measure(t,e){const{elev:n,hx:i,hz:r,region:a}=this;for(let o=0;o<ht;o++)for(let c=1;c<Gt;c++){const l=(c-1)*ht+o,h=c*ht+o;if(!a[l]||a[h])continue;const u=(n[l]+n[h])/2;if(u<eM||u>nM)break;const d=e(i[h],r[h]);if(d!==null){const f=t+d*Math.tan(u);f>=Qy&&f<=Zy&&this.push(f,Math.round(Math.atan2(i[h],r[h])/lM))}break}this.estimate()}push(t,e){this.samples.push({h:t,bin:e}),this.samples.length>aM&&this.samples.shift()}estimate(){if(this.samples.length<oM)return;const t=new Map;for(const i of this.samples){const r=t.get(i.bin);r?r.push(i.h):t.set(i.bin,[i.h])}if(t.size<cM)return;const e=[...t.values()].map(i=>i.sort((r,a)=>r-a)[i.length>>1]).sort((i,r)=>i-r),n=e[Math.floor((e.length-1)*uM)];this.height=this.measured?this.height+(n-this.height)*hM:n,this.measured=!0}}const fM="modulepreload",pM=function(s,t){return new URL(s,t).href},bd={},tp=function(t,e,n){let i=Promise.resolve();if(e&&e.length>0){const a=document.getElementsByTagName("link"),o=document.querySelector("meta[property=csp-nonce]"),c=o?.nonce||o?.getAttribute("nonce");i=Promise.allSettled(e.map(l=>{if(l=pM(l,n),l in bd)return;bd[l]=!0;const h=l.endsWith(".css"),u=h?'[rel="stylesheet"]':"";if(!!n)for(let g=a.length-1;g>=0;g--){const b=a[g];if(b.href===l&&(!h||b.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${l}"]${u}`))return;const f=document.createElement("link");if(f.rel=h?"stylesheet":fM,h||(f.as="script"),f.crossOrigin="",f.href=l,c&&f.setAttribute("nonce",c),document.head.appendChild(f),h)return new Promise((g,b)=>{f.addEventListener("load",g),f.addEventListener("error",()=>b(new Error(`Unable to preload CSS for ${l}`)))})}))}function r(a){const o=new Event("vite:preloadError",{cancelable:!0});if(o.payload=a,window.dispatchEvent(o),!o.defaultPrevented)throw a}return i.then(a=>{for(const o of a||[])o.status==="rejected"&&r(o.reason);return t().catch(r)})};class vd{constructor(){this.y=0,this.init=!1}filter(t,e){return this.y=this.init?e*t+(1-e)*this.y:t,this.init=!0,this.y}get value(){return this.y}reset(){this.init=!1}}class vc{constructor(t=1.2,e=.6,n=1){this.minCutoff=t,this.beta=e,this.dCutoff=n,this.x=new vd,this.dx=new vd,this.last=-1}alpha(t,e){return 1/(1+1/(2*Math.PI*t)/e)}filter(t,e){const n=this.last<0,i=n?1/30:Math.max(.001,e-this.last);this.last=e;const r=this.x.value,a=n?0:(t-r)/i,o=this.dx.filter(a,this.alpha(this.dCutoff,i)),c=this.minCutoff+this.beta*Math.abs(o);return this.x.filter(t,this.alpha(c,i))}reset(){this.x.reset(),this.dx.reset(),this.last=-1}}class mM{constructor(t=1.2,e=.6){this.f=[new vc,new vc,new vc],this.f.forEach(n=>{n.minCutoff=t,n.beta=e})}filter(t,e,n,i,r){return r.x=this.f[0].filter(t,i),r.y=this.f[1].filter(e,i),r.z=this.f[2].filter(n,i),r}reset(){this.f.forEach(t=>t.reset())}}const gM=[[0,1,2,3,4],[0,5,6,7,8],[9,10,11,12],[13,14,15,16],[0,17,18,19,20]],bM=[[5,9],[9,13],[13,17],[0,5],[0,17],[1,5]],xd=[8,12,16,20];class vM{constructor(){this.status="off",this.active=!1,this.grabbing=!1,this.hz=18,this.paused=!1,this.points=Array.from({length:21},()=>new R),this.palm=new R,this.palmVel=new R,this.cupCenter=new R,this.palmQuat=new Kt,this.depth=0,this.landmarker=null,this.filters=Array.from({length:21},()=>new mM(1.4,.8)),this.vel=Array.from({length:21},()=>new R),this.prev=Array.from({length:21},()=>new R),this.lastDetect=0,this.lastSeen=0,this.lastVideoTime=-1,this.detectAt=0,this.cols=[],this.pts=Array.from({length:21},()=>new R),this.busy=!1}async init(){if(!(this.status==="loading"||this.status==="ready")){this.status="loading";try{const t=await tp(()=>import("./vision_bundle-7Scx6tXS.js"),[],import.meta.url),e=new URL("./",document.baseURI).href,n={wasmLoaderPath:e+"mediapipe/vision_wasm_internal.js",wasmBinaryPath:e+"mediapipe/vision_wasm_internal.wasm"},i=r=>t.HandLandmarker.createFromOptions(n,{baseOptions:{modelAssetPath:e+"models/hand_landmarker.task",delegate:r},runningMode:"VIDEO",numHands:2,minHandDetectionConfidence:.55,minHandPresenceConfidence:.5,minTrackingConfidence:.5});try{this.landmarker=await i("GPU")}catch{this.landmarker=await i("CPU")}this.status="ready"}catch(t){console.warn("[hand] không tải được Hand Landmarker",t),this.status="error"}}}update(t,e,n){if(this.landmarker&&e.ready&&!this.busy&&!this.paused&&t-this.lastDetect>=1e3/this.hz){const a=e.video;if(a.currentTime!==this.lastVideoTime&&a.readyState>=2){this.lastVideoTime=a.currentTime,this.lastDetect=t,this.busy=!0;try{const o=this.landmarker.detectForVideo(a,t);this.consume(o.landmarks,t,e,n)}catch(o){console.warn("[hand]",o)}this.busy=!1}}const i=this.active;if(this.active&&t-this.lastSeen>300&&(this.active=!1,this.grabbing=!1,this.filters.forEach(a=>a.reset())),i!==this.active&&this.onChange?.(this.active,this.grabbing),!this.active)return;const r=Math.min(.08,(t-this.detectAt)/1e3);for(let a=0;a<21;a++)this.pts[a].copy(this.points[a]).addScaledVector(this.vel[a],r);this.buildColliders()}consume(t,e,n,i){if(!t||!t.length)return;const r=n.layout(),a=Math.tan(Tt.degToRad(i.fov/2)),o=a*i.aspect,c=r.sh/2/a;let l=null,h=0;const u=(x,A,U)=>Math.hypot((x[A].x-x[U].x)*r.vw*r.scale,(x[A].y-x[U].y)*r.vh*r.scale);for(const x of t){const A=Math.max(u(x,0,9),u(x,5,17)*1.25);A>h&&(h=A,l=x)}if(!l)return;const d=c*.09/Math.max(1,u(l,0,9)),f=c*.072/Math.max(1,u(l,5,17)),g=Math.min(d,f);if(g>.9||g<.08)return;this.depth=g;const b=g*r.vw*r.scale/c,m=e/1e3;i.updateMatrixWorld();const p={x:0,y:0,z:0},y=!this.active,v=y?1:Math.max(.02,(e-this.detectAt)/1e3);for(let x=0;x<21;x++){const A=l[x],[U,B]=n.videoToNdc(A.x,A.y,r),O=Math.max(.05,g+A.z*b),X=new R(U*o*O,B*a*O,-O).applyMatrix4(i.matrixWorld);this.filters[x].filter(X.x,X.y,X.z,m,p),this.prev[x].copy(this.points[x]),this.points[x].set(p.x,p.y,p.z),y?this.vel[x].set(0,0,0):this.vel[x].subVectors(this.points[x],this.prev[x]).divideScalar(v).clampLength(0,4)}this.detectAt=e,this.lastSeen=e;const _=this.active;this.active=!0;const M=this.points,E=M[0].distanceTo(M[9])||.09;let S=0;for(const x of xd)S+=M[x].distanceTo(M[0]);S/=xd.length*E;const C=M[4].distanceTo(M[8])/E,I=this.grabbing;this.grabbing?this.grabbing=!(S>1.62&&C>.42):this.grabbing=S<1.38||C<.28,(I!==this.grabbing||!_)&&(this.grabbing&&navigator.vibrate&&navigator.vibrate(12),this.onChange?.(this.active,this.grabbing))}buildColliders(){const t=this.pts,e=[];this.palm.set(0,0,0);for(const c of[0,5,9,13,17,9])this.palm.add(t[c]);this.palm.divideScalar(6),this.palmVel.set(0,0,0);for(const c of[0,5,9,13,17])this.palmVel.add(this.vel[c]);this.palmVel.divideScalar(5),e.push({kind:"sphere",c:this.palm.clone(),r:.042,vel:this.palmVel.clone(),palm:!0});const n=(c,l,h)=>e.push({kind:"capsule",a:t[c].clone(),b:t[l].clone(),r:h,vel:this.vel[c].clone().add(this.vel[l]).multiplyScalar(.5)});for(const c of gM)for(let l=1;l<c.length;l++)n(c[l-1],c[l],.011);for(const[c,l]of bM)n(c,l,.014);this.cols=e;const i=new R;for(const c of[4,8,12,16,20])i.add(t[c]);i.divideScalar(5),this.cupCenter.copy(this.palm).lerp(i,.45);const r=new R().subVectors(t[17],t[5]).normalize(),a=new R().subVectors(t[9],t[0]).normalize(),o=new R().crossVectors(r,a).normalize();r.crossVectors(a,o),this.palmQuat.setFromRotationMatrix(new _t().makeBasis(r,a,o))}colliders(){return this.active?this.cols:[]}cup(){return this.active?{center:this.cupCenter,radius:.06,quaternion:this.palmQuat,grabbing:this.grabbing,vel:this.palmVel}:null}get renderPoints(){return this.pts}}const Ci=class Ci{constructor(t){const e=Ci.SEGS.length*2+Ci.PALM.length;this.pos=new Float32Array(e*9);const n=new _e;n.setAttribute("position",new Te(this.pos,3).setUsage(Wn)),this.mesh=new Qt(n,new Qe({colorWrite:!1,depthWrite:!0,side:an})),this.mesh.renderOrder=-1,this.mesh.frustumCulled=!1,this.mesh.visible=!1,t.add(this.mesh)}update(t,e){if(this.mesh.visible=t.active,!t.active)return;const n=t.renderPoints;let i=0;const r=g=>{this.pos[i++]=g.x,this.pos[i++]=g.y,this.pos[i++]=g.z},a=new R,o=new R,c=new R,l=new R,h=new R,u=new R,d=new R;for(const[g,b]of Ci.SEGS){const m=n[g],p=n[b];c.subVectors(p,m);const y=c.length()||1e-4;c.divideScalar(y),o.subVectors(e,m).normalize(),a.crossVectors(c,o).normalize().multiplyScalar(.012);const v=.008;l.copy(m).addScaledVector(c,-v).add(a),h.copy(m).addScaledVector(c,-v).sub(a),u.copy(p).addScaledVector(c,v).add(a),d.copy(p).addScaledVector(c,v).sub(a),r(l),r(h),r(u),r(h),r(d),r(u)}for(const[g,b,m]of Ci.PALM)r(n[g]),r(n[b]),r(n[m]);const f=this.mesh.geometry.getAttribute("position");f.needsUpdate=!0}};Ci.SEGS=[[1,2],[2,3],[3,4],[5,6],[6,7],[7,8],[9,10],[10,11],[11,12],[13,14],[14,15],[15,16],[17,18],[18,19],[19,20]],Ci.PALM=[[0,1,5],[0,5,9],[0,9,13],[0,13,17],[1,2,5]];let Il=Ci;class xM{constructor(){this.kind="manual"}async start(){}stop(){}get panels(){return sd}confirm(t){const e=sd.find(n=>n.id===t);e&&this.onFix?.({panel:e,yawToNormal:0,distance:1,confidence:1})}}const Dl=4,_M=2,rn={petalPink:[0,1,2,3],blossomPink:[4,5],blossomBrand:6,petalBrand:7};let Oa=null;function mh(s,t,e,n,i){s.beginPath(),s.moveTo(0,e*.5),s.bezierCurveTo(-t*i,e*.25,-t*.62,-e*.28,-t*.32,-e*.47),s.quadraticCurveTo(-t*.12,-e*.52,0,-e*(.5-n)),s.quadraticCurveTo(t*.12,-e*.52,t*.32,-e*.47),s.bezierCurveTo(t*.62,-e*.28,t*i,e*.25,0,e*.5),s.closePath()}function yM(s,t,e,n,i){const r=["#FFD3E1","#FFC1D6","#FFCBDB","#FFB8CE"][i],a=["#FF9DBC","#FF8FB1","#F58AAE","#FF8FB1"][i],o=n*[.62,.7,.58,.66][i],c=n*[.86,.8,.9,.84][i];s.save(),s.translate(t,e),s.rotate([0,.15,-.1,.06][i]),mh(s,o,c,[.1,.07,.12,.05][i],[.55,.62,.5,.58][i]);const l=s.createRadialGradient(0,c*.42,2,0,-c*.1,c*.75);l.addColorStop(0,a),l.addColorStop(.45,r),l.addColorStop(1,"#FFF1F5"),s.fillStyle=l,s.fill(),s.globalAlpha=.18,s.strokeStyle=a,s.lineWidth=n*.01;for(let h=-2;h<=2;h++)s.beginPath(),s.moveTo(0,c*.45),s.quadraticCurveTo(h*o*.12,0,h*o*.2,-c*.38),s.stroke();s.restore()}function xc(s,t,e,n,i,r){s.save(),s.translate(t,e),s.rotate(r*.6);for(let a=0;a<5;a++){s.save(),s.rotate(a/5*Math.PI*2),s.translate(0,-n*.22);const o=n*.42,c=n*.46;if(mh(s,o,c,.08,.6),i)s.fillStyle=An.cream,s.fill(),s.lineWidth=n*.028,s.strokeStyle=An.cobalt,s.stroke(),s.lineWidth=n*.012,s.beginPath(),s.moveTo(0,c*.4),s.lineTo(0,-c*.05),s.stroke();else{const l=s.createRadialGradient(0,c*.45,1,0,0,c*.7);l.addColorStop(0,r?"#F27FA6":"#FF8FB1"),l.addColorStop(.5,"#FFC1D6"),l.addColorStop(1,"#FFF0F5"),s.fillStyle=l,s.fill()}s.restore()}for(let a=0;a<12;a++){const o=a/12*Math.PI*2+r,c=n*(.1+a%3*.025);s.strokeStyle=i?An.cobalt:"#C2456F",s.lineWidth=n*.01,s.beginPath(),s.moveTo(0,0),s.lineTo(Math.cos(o)*c,Math.sin(o)*c),s.stroke(),s.fillStyle=i?An.cobalt:"#F6C34A",s.beginPath(),s.arc(Math.cos(o)*c,Math.sin(o)*c,n*.018,0,Math.PI*2),s.fill()}s.fillStyle=i?An.cobalt:"#B8335F",s.beginPath(),s.arc(0,0,n*.035,0,Math.PI*2),s.fill(),s.restore()}function MM(s,t,e,n){s.save(),s.translate(t,e);const i=n*.6,r=n*.84;mh(s,i,r,.09,.56),s.fillStyle=An.cream,s.fill(),s.lineWidth=n*.035,s.strokeStyle=An.cobalt,s.stroke(),s.lineWidth=n*.014,s.beginPath(),s.moveTo(0,r*.42),s.quadraticCurveTo(i*.05,0,0,-r*.25),s.stroke(),s.restore()}function yo(){if(Oa)return Oa;const s=256,t=document.createElement("canvas");t.width=s*Dl,t.height=s*_M;const e=t.getContext("2d");for(let c=0;c<4;c++)yM(e,s*c+s/2,s/2,s*.92,c);xc(e,s*0+s/2,s+s/2,s*.95,!1,0),xc(e,s*1+s/2,s+s/2,s*.95,!1,1),xc(e,s*2+s/2,s+s/2,s*.95,!0,0),MM(e,s*3+s/2,s+s/2,s*.92);const n=new co(t);n.colorSpace=Fe,n.generateMipmaps=!0,n.minFilter=Xn,n.anisotropy=2;const i=document.createElement("canvas");i.width=i.height=64;const r=i.getContext("2d"),a=r.createRadialGradient(32,32,2,32,32,30);a.addColorStop(0,"rgba(40,20,30,0.55)"),a.addColorStop(1,"rgba(40,20,30,0)"),r.fillStyle=a,r.fillRect(0,0,64,64);const o=new co(i);return Oa={canvas:t,texture:n,shadow:o},Oa}function SM(s){return{sx:s%Dl*256,sy:Math.floor(s/Dl)*256,s:256}}class wM{constructor(){this.strength=.22,this.base=new R(.05,0,.02),this.gusts=[],this.t=0}addGust(t,e,n=.5,i=.7){this.gusts.length>12&&this.gusts.shift(),this.gusts.push({pos:t.clone(),vel:e.clone().clampLength(0,3),radius:n,life:i,maxLife:i})}update(t){this.t+=t;for(let e=this.gusts.length-1;e>=0;e--){const n=this.gusts[e];n.life-=t,n.pos.addScaledVector(n.vel,t*.6),n.radius+=t*.5,n.life<=0&&this.gusts.splice(e,1)}}sample(t,e,n,i){const r=this.t,a=this.strength;i.set(this.base.x+a*(Math.sin(.7*t+.9*r)+.6*Math.sin(1.3*n-.6*r+1.7)),a*.35*Math.sin(.8*e+1.1*r+t),this.base.z+a*(Math.sin(.9*n+.5*r+2.1)+.5*Math.sin(1.7*t+.8*r)));for(const o of this.gusts){const c=t-o.pos.x,l=e-o.pos.y,h=n-o.pos.z,u=c*c+l*l+h*h,d=o.radius*o.radius;if(u<d){const f=(1-u/d)*(o.life/o.maxLife);i.addScaledVector(o.vel,f)}}return i}}const AM=new R,Ba=new R;function _d(s,t,e){if(s.kind==="sphere")return e.copy(s.c),t.distanceTo(s.c);Ba.subVectors(s.b,s.a);const n=Ba.lengthSq()||1e-6,i=Tt.clamp(AM.subVectors(t,s.a).dot(Ba)/n,0,1);return e.copy(s.a).addScaledVector(Ba,i),t.distanceTo(e)}const mn=Ae.colliders.find(s=>s.id==="table-D14"),qi=Ae.colliders.find(s=>s.id==="real-peach-tree");function za(s,t){return mn&&mn.min&&mn.max&&s>=mn.min[0]&&s<=mn.max[0]&&t>=mn.min[2]&&t<=mn.max[2]?mn.max[1]:0}function EM(s,t){if(!mn||!mn.min||!mn.max)return!1;const[e,n,i]=mn.min,[r,a,o]=mn.max;if(s.x<e||s.x>r||s.z<i||s.z>o||s.y<n||s.y>a-.02)return!1;const c=s.x-e,l=r-s.x,h=s.z-i,u=Math.min(c,l,h);return u===c?(s.x=e-.005,t.x=Math.min(t.x,0)):u===l?(s.x=r+.005,t.x=Math.max(t.x,0)):(s.z=i-.005,t.z=Math.min(t.z,0)),!0}function TM(s){if(!qi||!qi.center||s.y<(qi.yMin??0)||s.y>(qi.yMax??99))return 1;const t=Math.hypot(s.x-qi.center[0],s.z-qi.center[2]),e=qi.radius??1;return Tt.smoothstep(t,e*.7,e*1.05)*.85+.15}function RM(s){const t=Me-Math.abs(s);return Tt.smoothstep(t,.04,.38)}function gh(s,t=!1){return new Rn({defines:t?{CEILING_ONLY:""}:{},uniforms:{map:{value:s},uLight:{value:new Et(1,1,1)},uOpacity:{value:1},uCurl:{value:.18},uSurface:_i.uSurface,uClip:_i.uClip},vertexShader:`
      #ifdef CEILING_ONLY
      ${ph}
      #endif
      attribute float aCell;
      attribute vec4 aTint;
      uniform float uCurl;
      varying vec2 vUv;
      varying vec4 vTint;
      varying float vFacing;
      void main() {
        vec3 p = position;
        p.z += uCurl * (p.x * p.x * 2.2) - uCurl * 0.25 * (p.y + 0.5) * (p.y + 0.5);
        vec2 cell = vec2(mod(aCell, 4.0), 1.0 - floor(aCell / 4.0));
        vUv = (uv + cell) / vec2(4.0, 2.0);
        vec4 mv = modelViewMatrix * instanceMatrix * vec4(p, 1.0);
        vec3 n = normalize(normalMatrix * mat3(instanceMatrix) * vec3(0.0, 0.0, 1.0));
        vFacing = abs(dot(n, normalize(-mv.xyz)));
        vTint = aTint;
        #ifdef CEILING_ONLY
        vTint.a *= ceilingMask((modelMatrix * instanceMatrix * vec4(p, 1.0)).xyz);
        #endif
        gl_Position = projectionMatrix * mv;
      }
    `,fragmentShader:`
      uniform sampler2D map;
      uniform vec3 uLight;
      uniform float uOpacity;
      varying vec2 vUv;
      varying vec4 vTint;
      varying float vFacing;
      void main() {
        vec4 t = texture2D(map, vUv);
        float a = t.a * vTint.a * uOpacity;
        if (a < 0.04) discard;
        float glow = 0.86 + 0.28 * pow(1.0 - vFacing, 2.0);
        gl_FragColor = vec4(t.rgb * vTint.rgb * uLight * glow, a);
        #include <colorspace_fragment>
      }
    `,transparent:!0,depthWrite:!1,depthTest:!0,side:an})}const CM=new R,Mr=new R,Cs=new R,Sr=new Kt,yd=new We,Xe=new R,Ha=new _t,wr=new _t().makeScale(0,0,0),li=new R,Md=.3;class PM{constructor(t,e={}){this.wind=new wM,this.density=1,this.speed=1,this.maxFalling=600,this.maxResting=900,this.readingMode=!1,this.reduceMotion=!1,this.lookUp=0,this.lookDown=0,this.enabled=!0,this.bounded=!0,this.room=null,this.sources=[],this.emitters=[],this.floorMask=null,this.heldCount=0,this.t=0,this.cursor=0,this.fallingCount=0,this.restingCount=0,this.stack=new Map,this.emitAcc=0,this.prevGrabbing=!1,this.firstFill=!0,this.handAcc=0;const n=this.cap=e.capacity??1600;this.pos=new Float32Array(n*3),this.vel=new Float32Array(n*3),this.rot=new Float32Array(n*3),this.spin=new Float32Array(n*3),this.size=new Float32Array(n),this.state=new Uint8Array(n),this.alpha=new Float32Array(n),this.phase=new Float32Array(n),this.cell=new Float32Array(n),this.tint=new Float32Array(n*4),this.born=new Float32Array(n),this.hold=new Float32Array(n*3),this.noCatch=new Float32Array(n);const{texture:i,shadow:r}=yo(),a=new $n(1,1,4,4);this.cellAttr=new Fn(this.cell,1),this.tintAttr=new Fn(this.tint,4),this.cellAttr.setUsage(Wn),this.tintAttr.setUsage(Wn),a.setAttribute("aCell",this.cellAttr),a.setAttribute("aTint",this.tintAttr),this.material=gh(i),this.mesh=new Fi(a,this.material,n),this.mesh.instanceMatrix.setUsage(Wn),this.mesh.frustumCulled=!1,this.mesh.renderOrder=2;const o=new $n(1,1).rotateX(-Math.PI/2),c=new Qe({map:r,transparent:!0,depthWrite:!1,opacity:.32,color:0});this.shadows=new Fi(o,c,n),this.shadows.instanceMatrix.setUsage(Wn),this.shadows.frustumCulled=!1,this.shadows.renderOrder=1;for(let l=0;l<n;l++)this.mesh.setMatrixAt(l,wr),this.shadows.setMatrixAt(l,wr);t.add(this.shadows,this.mesh)}setLight(t){this.material.uniforms.uLight.value.copy(t)}setVisible(t){this.mesh.visible=t,this.shadows.visible=t}clear(){this.state.fill(0),this.stack.clear(),this.firstFill=!0}stats(){return{falling:this.fallingCount,resting:this.restingCount,held:this.heldCount}}alloc(){for(let t=0;t<this.cap;t++){const e=(this.cursor+t)%this.cap;if(this.state[e]===0)return this.cursor=(e+1)%this.cap,e}return-1}spawn(t,e,n,i=0,r=-.3,a=0){const o=this.alloc();if(o<0)return-1;const c=o*3;this.pos[c]=t,this.pos[c+1]=e,this.pos[c+2]=n,this.vel[c]=i,this.vel[c+1]=r,this.vel[c+2]=a,this.rot[c]=Math.random()*6.28,this.rot[c+1]=Math.random()*6.28,this.rot[c+2]=Math.random()*6.28;const l=this.reduceMotion?.6:1.6;this.spin[c]=(Math.random()-.5)*l*2,this.spin[c+1]=(Math.random()-.5)*l,this.spin[c+2]=(Math.random()-.5)*l*2;const h=Math.random();let u,d;h<Pl?(u=Math.random()<.55?rn.petalBrand:rn.blossomBrand,d=u===rn.blossomBrand?.066:.044):h<Pl+.16?(u=rn.blossomPink[Math.random()*2|0],d=.056+Math.random()*.016):(u=rn.petalPink[Math.random()*4|0],d=.036+Math.random()*.016),this.cell[o]=u,this.size[o]=d;const f=u===rn.petalBrand||u===rn.blossomBrand,g=f?1:.94+Math.random()*.1;return this.tint[o*4]=g,this.tint[o*4+1]=f?1:g*(.95+Math.random()*.06),this.tint[o*4+2]=f?1:g*(.96+Math.random()*.06),this.tint[o*4+3]=1,this.alpha[o]=0,this.phase[o]=Math.random()*100,this.born[o]=this.t,this.state[o]=1,o}stackKey(t,e){return Math.round(t/.12)<<12^Math.round((e+10)/.12)}rest(t,e){const n=t*3,i=this.stackKey(this.pos[n],this.pos[n+2]),r=(this.stack.get(i)??0)+1;this.stack.set(i,r),this.pos[n+1]=e+.003+Math.min(r*.0032,.045)+Math.random()*.002,this.rot[n]=-Math.PI/2+(Math.random()-.5)*.5,this.rot[n+2]=(Math.random()-.5)*.5,this.vel[n]=this.vel[n+1]=this.vel[n+2]=0,this.state[t]=2,this.born[t]=this.t}unrest(t){const e=t*3,n=this.stackKey(this.pos[e],this.pos[e+2]),i=this.stack.get(n)??0;i<=1?this.stack.delete(n):this.stack.set(n,i-1)}spawnAround(t,e,n){const i=Mr.set(e.x,0,e.z);i.lengthSq()<.01&&i.set(1,0,0),i.normalize();const r=Xe.set(-i.z,0,i.x);let a=t.x,o=t.z;for(let h=0;h<6;h++){const u=.6+Math.random()*5.2*(1-h/6),d=(Math.random()-.5)*3.2*(1-h/6);if(a=t.x+i.x*u+r.x*d,o=t.z+i.z*u+r.z*d,!this.room||this.room.isInside(a,o))break}this.bounded&&(a=Tt.clamp(a,.1,Gn-.1),o=Tt.clamp(o,-Me+.12,Me-.12));const c=this.room?.ceilingY,l=c!==void 0?n?.3+Math.random()*(c-.3):c-Math.random()*.4:n?.3+Math.random()*3:2.5+Math.random()*.9;this.spawn(a,l,o,0,-.25*this.speed,0)}update(t,e,n,i){if(t=Math.min(t,.05),this.t+=t,this.wind.update(t),!this.enabled){this.setVisible(!1);return}this.setVisible(!0);const r=this.readingMode?.45:1,a=1+this.lookUp*.4-this.lookDown*.35,o=Math.round(this.maxFalling*this.density*r*a*(this.reduceMotion?.6:1));if(this.firstFill){for(let M=0;M<o*.7;M++)this.spawnAround(n,i,!0);for(let M=0;M<this.maxResting*.4;M++){const E=Math.random()*Math.PI*2;let S=.4+Math.pow(Math.random(),.7)*4.5;const C=this.bounded?.6:1;let I=n.x+Math.cos(E)*S,x=n.z+Math.sin(E)*S*C;for(let U=0;U<4&&this.room&&!this.room.isInside(I,x);U++)S*=.7,I=n.x+Math.cos(E)*S,x=n.z+Math.sin(E)*S*C;this.bounded&&(I=Tt.clamp(I,.1,Gn-.1),x=Tt.clamp(x,-Me+.1,Me-.1));const A=this.spawn(I,0,x);A>=0&&(this.rest(A,this.bounded?za(I,x):0),this.born[A]=this.t-5-Math.random()*5)}this.firstFill=!1}let c=Math.min(30,Math.max(0,o-this.fallingCount));for(const M of this.emitters)if(!(!M.points.length||M.rate<=0))for(this.emitAcc+=M.rate*t;this.emitAcc>=1&&c>0;){this.emitAcc-=1,c--;let E=M.points[Math.random()*M.points.length|0];for(let S=0;S<6&&Math.abs(E.x-n.x)>7;S++)E=M.points[Math.random()*M.points.length|0];this.spawn(E.x+(Math.random()-.5)*.1,E.y-.03,E.z+(Math.random()-.5)*.1,0,-.15,0)}const l=Math.ceil(o/90);for(let M=0;M<Math.min(c,l);M++)this.spawnAround(n,i,!1);const h=[];let u=null;for(const M of this.sources){if(!M.active)continue;h.push(...M.colliders());const E=M.cup?.();E&&(u=E)}const d=!!u?.grabbing,f=d&&!this.prevGrabbing,g=!d&&this.prevGrabbing;this.prevGrabbing=d;const b=u?Sr.copy(u.quaternion).invert().clone():null;let m=0;if(u)for(this.handAcc+=t*(d?.6:1.8);this.handAcc>=1;){this.handAcc-=1;const M=u.center;this.spawn(M.x+(Math.random()-.5)*.1,M.y+.28+Math.random()*.18,M.z+(Math.random()-.5)*.1,0,-.2,0)}this.fallingCount=0,this.restingCount=0,this.heldCount=0;let p=1/0,y=-1;const v=.42*this.speed,_=this.reduceMotion?.12:.32;for(let M=0;M<this.cap;M++){const E=this.state[M];if(E===0)continue;const S=M*3,C=CM.set(this.pos[S],this.pos[S+1],this.pos[S+2]);let I=this.alpha[M];if(E===1){this.fallingCount++,I=Math.min(1,I+t*1.5);const O=this.phase[M]+this.t;this.wind.sample(C.x,C.y,C.z,Mr);const X=Mr.x+Math.sin(O*1.7)*_,H=Mr.y-v*(.75+.25*Math.sin(O*2.3)),J=Mr.z+Math.cos(O*1.3)*_,k=Math.min(1,t*2.2);let et=0,st=0,rt=1;if(u&&!d){const wt=u.center.x-C.x,j=u.center.z-C.z,Q=C.y-u.center.y,at=wt*wt+j*j;Q>-.04&&Q<.75&&at<.2&&(rt=.25,et=wt*3.5,st=j*3.5)}this.vel[S]+=(X*rt+et-this.vel[S])*k,this.vel[S+1]+=(H-this.vel[S+1])*k,this.vel[S+2]+=(J*rt+st-this.vel[S+2])*k;for(const wt of h){const j=_d(wt,C,Cs),Q=this.size[M]*.45;if(j<wt.r+Q){if(wt.kind==="sphere"&&wt.palm&&u&&!d&&C.y>wt.c.y+.01&&wt.vel.lengthSq()<.36&&this.t>this.noCatch[M]&&this.heldCount+m<14){this.capture(M,C,u.center,b),m++;break}const at=Xe.subVectors(C,Cs);at.lengthSq()<1e-8&&at.set(0,1,0),at.normalize(),C.copy(Cs).addScaledVector(at,wt.r+Q+.002);const ct=this.vel[S]*at.x+this.vel[S+1]*at.y+this.vel[S+2]*at.z;ct<0&&(this.vel[S]-=ct*at.x*1.3,this.vel[S+1]-=ct*at.y*1.3,this.vel[S+2]-=ct*at.z*1.3),this.vel[S]+=wt.vel.x*.75,this.vel[S+1]+=wt.vel.y*.75,this.vel[S+2]+=wt.vel.z*.75,this.spin[S]+=(Math.random()-.5)*3}}if(this.state[M]===3){this.pos[S]=C.x,this.pos[S+1]=C.y,this.pos[S+2]=C.z;continue}C.x+=this.vel[S]*t,C.y+=this.vel[S+1]*t,C.z+=this.vel[S+2]*t,Xe.set(this.vel[S],this.vel[S+1],this.vel[S+2]),this.bounded&&EM(C,Xe)&&(this.vel[S]=Xe.x,this.vel[S+2]=Xe.z),this.rot[S]+=this.spin[S]*t,this.rot[S+1]+=this.spin[S+1]*t,this.rot[S+2]+=this.spin[S+2]*t;const At=this.bounded?za(C.x,C.z):0;if(C.y<=At+.004&&(C.y=At,this.pos[S]=C.x,this.pos[S+2]=C.z,this.rest(M,At),C.y=this.pos[S+1]),this.bounded?(Math.abs(C.z)>Me-.02||C.x<0||C.x>Gn)&&(this.state[M]=4):this.room&&!this.room.isInside(C.x,C.z)&&(this.state[M]=4),(Math.abs(C.x-n.x)>10||Math.abs(C.z-n.z)>10||C.y>6)&&(this.state[M]=0),u&&d&&this.state[M]===1&&this.t>this.noCatch[M]&&this.heldCount+m<14){const wt=f?u.radius*1.8:u.radius;C.distanceTo(u.center)<wt&&(this.capture(M,C,u.center,b),m++)}}else if(E===2){this.restingCount++,I=Math.min(1,I+t*2),this.t-this.born[M]<p&&(p=this.t-this.born[M]),(y<0||this.born[M]<this.born[y])&&(y=M);for(const O of h){const X=_d(O,C,Cs),H=O.vel.length();if(X<O.r+.03&&(H>.12||X<O.r*.8)){this.unrest(M);const J=Xe.subVectors(C,Cs).setY(0);J.lengthSq()<1e-6&&J.set(Math.random()-.5,0,Math.random()-.5),J.normalize();const k=.5+Math.min(1.4,H)*.9+Math.random()*.3;this.vel[S]=O.vel.x*.9+J.x*.5,this.vel[S+1]=k,this.vel[S+2]=O.vel.z*.9+J.z*.5,this.spin[S]=(Math.random()-.5)*8,this.spin[S+2]=(Math.random()-.5)*8,C.y+=.02,this.state[M]=1;break}}this.state[M]===2&&u&&f&&C.distanceTo(u.center)<u.radius*1.3&&this.heldCount+m<14&&(this.unrest(M),this.capture(M,C,u.center,b),m++),(Math.abs(C.x-n.x)>9||Math.abs(C.z-n.z)>9)&&(this.state[M]=4)}else if(E===3){const O=!!u&&!d&&u.vel.lengthSq()>1;if(!u||g||O){this.state[M]=1;const X=u?.vel;this.vel[S]=(X?.x??0)*.8+(Math.random()-.5)*.3,this.vel[S+1]=(X?.y??0)*.8+.55+Math.random()*.3,this.vel[S+2]=(X?.z??0)*.8+(Math.random()-.5)*.3,this.spin[S]=(Math.random()-.5)*6,this.noCatch[M]=this.t+1.2}else this.heldCount++,Xe.set(this.hold[S],this.hold[S+1],this.hold[S+2]).applyQuaternion(u.quaternion),C.copy(u.center).add(Xe),this.rot[S+1]+=t*.4}else E===4&&(I-=t*1.5,I<=0&&(this.pos[S+1]<1.2&&this.vel[S+1]===0&&this.unrest(M),this.state[M]=0,I=0));if(this.pos[S]=C.x,this.pos[S+1]=C.y,this.pos[S+2]=C.z,this.alpha[M]=I,this.state[M]===0){this.mesh.setMatrixAt(M,wr),this.shadows.setMatrixAt(M,wr);continue}let x=I;this.bounded&&(x*=RM(C.z)*TM(C));const A=C.distanceTo(n);x*=Tt.smoothstep(A,.12,.4);let U=1;if(this.floorMask&&C.y<Md&&this.state[M]!==3&&(!this.bounded||za(C.x,C.z)===0)&&(li.copy(C).applyMatrix4(e),U=Tt.lerp(this.floorMask.sample(li.x,li.y,C.x-n.x,C.y-n.y,C.z-n.z),1,Tt.smoothstep(C.y,.05,Md)),x*=U),this.readingMode&&this.state[M]!==3){li.copy(C).applyMatrix4(e);const O=li.x*li.x*1.4+li.y*li.y;li.z<1&&(x*=Tt.lerp(.12,1,Tt.smoothstep(O,.2,.75)))}this.tint[M*4+3]=x,yd.set(this.rot[S],this.rot[S+1],this.rot[S+2]),Sr.setFromEuler(yd);const B=this.size[M];if(Ha.compose(C,Sr,Xe.set(B,B,B)),this.mesh.setMatrixAt(M,Ha),U>.3&&(this.state[M]===2||this.state[M]===4&&C.y<1.1)){const O=this.bounded?za(C.x,C.z):0;Sr.identity(),Ha.compose(Cs.set(C.x+.004,O+.0015,C.z+.004),Sr,Xe.set(B*1.25,1,B*1.25)),this.shadows.setMatrixAt(M,Ha)}else this.shadows.setMatrixAt(M,wr)}if(this.restingCount>this.maxResting&&y>=0){let M=Math.min(12,this.restingCount-this.maxResting);for(let E=0;E<this.cap&&M>0;E++)this.state[E]===2&&this.t-this.born[E]>4&&(this.state[E]=4,M--)}m>0&&this.onGrab?.(m),this.mesh.instanceMatrix.needsUpdate=!0,this.shadows.instanceMatrix.needsUpdate=!0,this.tintAttr.needsUpdate=!0,this.cellAttr.needsUpdate=!0}capture(t,e,n,i){const r=t*3;Xe.subVectors(e,n).clampLength(0,.045).applyQuaternion(i),this.hold[r]=Xe.x,this.hold[r+1]=Xe.y,this.hold[r+2]=Xe.z,this.state[t]=3,this.alpha[t]=1}burst(t,e,n=.6){for(let i=0;i<e;i++){const r=Math.random()*Math.PI*2,a=Math.random()*.4;this.spawn(t.x+Math.cos(r)*.05,t.y,t.z+Math.sin(r)*.05,Math.cos(r)*a,n*Math.random(),Math.sin(r)*a)}}}const Ls=6,Nl=2,Ar=Ls*Nl,Sd=.35,uo=6,On=256;function LM(s){const t=document.createElement("canvas");t.width=t.height=On;const e=t.getContext("2d"),n=On/uo,i=u=>(u+uo/2)*n,r=document.createElement("canvas");r.width=r.height=32;const a=r.getContext("2d"),o=a.createRadialGradient(16,16,0,16,16,16);o.addColorStop(0,"rgba(0,0,0,1)"),o.addColorStop(1,"rgba(0,0,0,0)"),a.fillStyle=o,a.fillRect(0,0,32,32),e.globalAlpha=.16;const c=.42*n;for(const u of s.spots)e.drawImage(r,i(u.x)-c/2,i(u.z)-c/2,c,c);e.globalAlpha=.5,e.strokeStyle="#000",e.lineCap="round";for(const u of s.limbs)e.lineWidth=u.width*n,e.beginPath(),u.pts.forEach((d,f)=>f?e.lineTo(i(d.x),i(d.z)):e.moveTo(i(d.x),i(d.z))),e.stroke();e.globalAlpha=1,e.globalCompositeOperation="destination-in";const l=e.createRadialGradient(On/2,On/2,On*.3,On/2,On/2,On/2);l.addColorStop(0,"rgba(0,0,0,1)"),l.addColorStop(1,"rgba(0,0,0,0)"),e.fillStyle=l,e.fillRect(0,0,On,On);const h=new co(t);return h.colorSpace=Fe,h.anisotropy=4,Ll(new Qe({map:h,transparent:!0,depthWrite:!1,side:an,opacity:0}))}function wd(s){let t=s>>>0||1;return()=>(t^=t<<13,t^=t>>>17,t^=t<<5,(t>>>0)%1e5/1e5)}function _c(s,t,e,n,i,r,a){const o=s.computeFrenetFrames(t,!1),c=[],l=[],h=[],u=[],d=s.getLength();for(let g=0;g<=t;g++){const b=g/t,m=s.getPointAt(b),p=Tt.lerp(n,i,Math.pow(b,.8)),y=Tt.smoothstep(a+b*d,.05,r);for(let v=0;v<=e;v++){const _=v/e*Math.PI*2,M=new R().addScaledVector(o.normals[g],Math.cos(_)).addScaledVector(o.binormals[g],Math.sin(_));c.push(m.x+M.x*p,m.y+M.y*p,m.z+M.z*p),l.push(M.x,M.y,M.z),h.push(y)}}for(let g=0;g<t;g++)for(let b=0;b<e;b++){const m=g*(e+1)+b,p=m+e+1;u.push(m,p,m+1,p,p+1,m+1)}const f=new _e;return f.setAttribute("position",new te(c,3)),f.setAttribute("normal",new te(l,3)),f.setAttribute("aFade",new te(h,1)),f.setIndex(u),f}function IM(s){const t=[],e=[],n=[],i=[];let r=0;for(const o of s){const c=o.getAttribute("position"),l=o.getAttribute("normal"),h=o.getAttribute("aFade");for(let d=0;d<c.count;d++)t.push(c.getX(d),c.getY(d),c.getZ(d)),e.push(l.getX(d),l.getY(d),l.getZ(d)),n.push(h.getX(d));const u=o.getIndex();for(let d=0;d<u.count;d++)i.push(u.getX(d)+r);r+=c.count}const a=new _e;return a.setAttribute("position",new te(t,3)),a.setAttribute("normal",new te(e,3)),a.setAttribute("aFade",new te(n,1)),a.setIndex(i),a}const yc=new Rn({uniforms:{uColor:{value:new Et(An.branch)},uOpacity:{value:0},uLight:{value:new Et(1,1,1)},uSurface:_i.uSurface,uClip:_i.uClip},vertexShader:`
    ${ph}
    attribute float aFade; varying float vFade; varying vec3 vN;
    void main(){ vFade = aFade * ceilingMask((modelMatrix * vec4(position, 1.0)).xyz); vN = normalize(mat3(modelMatrix) * normal);
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0); }`,fragmentShader:`
    uniform vec3 uColor; uniform float uOpacity; uniform vec3 uLight; varying float vFade; varying vec3 vN;
    void main(){ float l = 0.62 + 0.38 * clamp(vN.y * 0.5 + 0.5, 0.0, 1.0);
      float a = vFade * uOpacity; if (a < 0.02) discard;
      gl_FragColor = vec4(uColor * l * uLight, a);
      #include <colorspace_fragment>
    }`,transparent:!0,depthWrite:!0});class DM{constructor(t){this.group=new Ee,this.emitter={points:[],rate:0},this.budMat=Ll(new Qe({color:14702719,transparent:!0,opacity:0})),this.leafMat=Ll(new Qe({color:8825182,transparent:!0,opacity:0,side:an})),this.sways=[],this.blossoms=[],this.details=[],this.holders=[],this.t=0,this.visibility=0,this.clipTarget=0,this.blossomMat=gh(yo().texture,!0),this.blossomMat.uniforms.uCurl.value=0,this.blossomMat.depthWrite=!1;const e={limbs:[],spots:[]};for(let i=0;i<Ls;i++)for(let r=0;r<Ls;r++){const a=11+(i*Ls+r)*7,o=wd(a+1),c=(r-Ls/2+.5)*Nl+(o()-.5)*.7,l=(i-Ls/2+.5)*Nl+(o()-.5)*.7;this.build(c,l,a,(i+r)%2?1:-1,2.3+r%3*.25,i===0&&r===0?e:null)}this.shade=LM(e);const n=new $n(uo,uo,12,12).rotateX(-Math.PI/2);this.holders.forEach((i,r)=>{const a=new Qt(n,this.shade);a.position.y=Sd,a.rotation.y=r*1.57,a.renderOrder=-1,i.group.add(a)}),this.group.visible=!1,t.add(this.group)}setDetail(t){for(const e of this.blossoms)e.mesh.count=Math.round(e.full*Tt.clamp(t,.55,1));for(const e of this.details)e.visible=t>.7}layout(t,e,n,i){const r=a=>((a+Ar/2)%Ar+Ar)%Ar-Ar/2;this.emitter.points.length=0;for(const a of this.holders){const o=t+r(a.baseX-t),c=e+r(a.baseZ-e);if(a.group.position.set(o,n-Sd,c),a.target=i(o,c+a.midZ)?1:0,!!a.target)for(let l=0;l<a.local.length;l++)this.emitter.points.push(a.world[l].copy(a.local[l]).add(a.group.position))}}build(t,e,n,i,r,a){const o=wd(n),c=new Ee,l=new Ee;c.add(l),this.group.add(c),this.sways.push({g:l,seed:n});const h=[];this.holders.push({group:c,baseX:t,baseZ:e,midZ:i*r*.5,scale:1,target:1,local:h,world:[]});const u=o()<.5?1:-1,d=(k,et,st)=>new R(k,et,st),f=new Ir([d(0,0,0),d(u*.15,.12,i*.5),d(u*(.35+o()*.25),.22+o()*.12,i*r*.55),d(u*(.6+o()*.35),.12+o()*.15,i*r*.82),d(u*(.85+o()*.35),-.12+o()*.12,i*r)]),g=[_c(f,40,7,.085,.012,.55,0)],b=[],m=f.getLength(),p=(k,et)=>{a?.limbs.push({pts:k.getPoints(8),width:et})};p(f,.11);const y=(k,et,st,rt)=>{for(let At=0;At<rt;At++){const wt=.3+At/rt*.65+o()*.04,j=k.getPointAt(Math.min(wt,.97)),Q=(At%2?1:-1)*(.22+o()*.3),at=new Ir([j.clone(),j.clone().add(d(Q*.5+u*.06,-.03+o()*.1,i*(.08+o()*.12))),j.clone().add(d(Q+u*.1,-.14-o()*.2,i*(.18+o()*.28)))]);g.push(_c(at,8,4,.016,.004,.55,st+wt*et));for(let ct=0;ct<=8;ct++)b.push(at.getPointAt(.1+ct/8*.9))}},v=5+Math.floor(o()*2);for(let k=0;k<v;k++){const et=.24+k/v*.58+o()*.05,st=f.getPointAt(et),rt=k%2?1:-1,At=.95+o()*.6,wt=new Ir([st.clone(),st.clone().add(d(rt*At*.45,.05+o()*.06,i*At*.12)),st.clone().add(d(rt*At*.8,-.02-o()*.08,i*At*.25)),st.clone().add(d(rt*At,-.14-o()*.14,i*At*.34))]);g.push(_c(wt,18,5,.04,.008,.55,et*m)),p(wt,.06),y(wt,wt.getLength(),et*m,6+Math.floor(o()*2))}y(f,m,0,7);for(let k=0;k<16;k++)b.push(f.getPointAt(.34+k/15*.66));a&&a.spots.push(...b);const _=new Qt(IM(g),yc);for(const k of g)k.dispose();_.renderOrder=0,l.add(_);for(let k=b.length-1;k>0;k--){const et=Math.floor(o()*(k+1));[b[k],b[et]]=[b[et],b[k]]}const M=Math.round(b.length*2.8),E=new $n(1,1),S=new Float32Array(M),C=new Float32Array(M*4);E.setAttribute("aCell",new Fn(S,1)),E.setAttribute("aTint",new Fn(C,4));const I=new Fi(E,this.blossomMat,M);I.renderOrder=3;const x=new _t,A=new Kt,U=new We,B=new oh(1,0),O=new Fi(B,this.budMat,Math.ceil(b.length/2)),X=new Gf;X.moveTo(0,0),X.quadraticCurveTo(.45,.5,0,1),X.quadraticCurveTo(-.45,.5,0,0);const H=new Fi(new lh(X,4),this.leafMat,Math.ceil(b.length/3));let J=0;for(let k=0;k<M;k++){const st=b[k%b.length].clone().add(new R((o()-.5)*.2,(o()-.5)*.1,(o()-.5)*.2));U.set(Math.PI/2+(o()-.5)*1.2,o()*6.28,(o()-.5)*1.2),A.setFromEuler(U);const rt=o()<Pl,At=rt?.14:.12+o()*.065;x.compose(st,A,new R(At,At,At)),I.setMatrixAt(k,x),S[k]=rt?rn.blossomBrand:rn.blossomPink[o()*2|0],C.set([1,1,1,1],k*4),k%3===0&&h.push(st.clone())}for(let k=0;k<b.length;k++){const et=b[k].clone().add(new R((o()-.5)*.1,-.01,(o()-.5)*.1)),st=.007+o()*.004;if(x.compose(et,A.identity(),new R(st,st*1.3,st)),k%2===0&&O.setMatrixAt(k/2,x),k%3===0&&J<H.count){U.set(o()*1.2-.3,o()*6.28,o()*1.5),A.setFromEuler(U);const rt=.07+o()*.04;x.compose(et,A,new R(rt,rt,rt)),H.setMatrixAt(J++,x)}}H.count=J;for(const k of[I,O,H])k.computeBoundingSphere(),k.boundingSphere.radius+=.25;this.holders[this.holders.length-1].world=h.map(()=>new R),this.blossoms.push({mesh:I,full:M}),this.details.push(O,H),l.add(I,O,H)}update(t,e,n,i,r){this.t+=t,this.visibility+=(e-this.visibility)*Math.min(1,t*4);const a=this.visibility;_i.uClip.value+=(this.clipTarget-_i.uClip.value)*Math.min(1,t*3),this.group.visible=a>.01,yc.uniforms.uOpacity.value=a,yc.uniforms.uLight.value.copy(i),this.blossomMat.uniforms.uOpacity.value=a,this.blossomMat.uniforms.uLight.value.copy(i),this.budMat.opacity=a,this.leafMat.opacity=a*.9,this.shade.opacity=a*.38;for(const c of this.holders)c.scale+=(c.target-c.scale)*Math.min(1,t*4),c.group.visible=c.scale>.01,c.group.scale.setScalar(Math.max(.001,c.scale));const o=r?.004:.015;for(const c of this.sways)c.g.rotation.x=Math.sin(this.t*.9+c.seed)*o,c.g.rotation.y=Math.sin(this.t*.6+c.seed*2)*o*.7;this.emitter.rate=a>.3?(3+7*n)*a:0}}class NM{constructor(t){this.root=new Ee,t.add(this.root),this.petals=new PM(this.root,{capacity:1600}),this.petals.bounded=!1,this.branches=new DM(this.root),this.petals.emitters.push(this.branches.emitter),this.guide=FM(),this.guide.visible=!1,this.root.add(this.guide)}setVisible(t){this.root.visible=t,this.petals.enabled=t}}function FM(){const s=new Ee,t=new ro({color:An.cobalt,transparent:!0,opacity:.55}),e=new ro({color:An.cobalt,transparent:!0,opacity:.2}),n=Ae.corridor.wallHeight,i=(o,c,l,h,u,d,f=t)=>{const g=new $u(new as(h-o,u-c,d-l)),b=new Qa(g,f);b.position.set((o+h)/2,(c+u)/2,(l+d)/2),s.add(b)},r=[];for(let o=0;o<=Gn;o+=1)r.push(o,0,-Me,o,0,Me);r.push(0,0,-Me,Gn,0,-Me,0,0,Me,Gn,0,Me,0,0,0,Gn,0,0);const a=new _e;a.setAttribute("position",new te(r,3)),s.add(new Qa(a,e)),i(0,0,Me,Gn,n,Me+.02,e),i(0,0,-Me-.02,Gn,Ae.corridor.stoneWallHeight,-Me,e);for(const o of Ae.panels){const c=o.side==="orange"?Me-.01:-Me+.05;i(o.x0+.01,o.y0,c-.005,o.x1-.01,o.y0+o.height,c+.005)}for(const o of Ae.colliders)if(o.type==="aabb"&&o.min&&o.max&&i(o.min[0],o.min[1],o.min[2],o.max[0],o.max[1],o.max[2]),o.type==="cylinder"&&o.center&&o.radius){const c=new Qa(new $u(new rh(o.radius,o.radius,(o.yMax??3)-(o.yMin??0),16,1,!0)),e);c.position.set(o.center[0],((o.yMax??3)+(o.yMin??0))/2,o.center[2]),s.add(c)}return s}class UM{constructor(t){this.frame=new Ee,this.fp=[],this.parallax=new it,this.t=0,this.frameW=.2,this.frameH=.35,t.add(this.frame);const{texture:e}=yo(),n=gh(e);n.depthTest=!1,n.uniforms.uCurl.value=.12;const i=30,r=new $n(1,1,2,2);r.setAttribute("aCell",new Fn(new Float32Array(i),1)),r.setAttribute("aTint",new Fn(new Float32Array(i*4).fill(1),4)),this.framePetals=new Fi(r,n,i),this.framePetals.frustumCulled=!1,this.framePetals.renderOrder=10;const a=r.getAttribute("aCell");for(let u=0;u<i;u++){const d=Math.random(),f=d<.12?rn.petalBrand:d<.25?rn.blossomPink[Math.random()*2|0]:rn.petalPink[Math.random()*4|0];a.setX(u,f),this.fp.push(this.edgeSpawn({x:0,y:0,vx:0,vy:0,rot:0,vr:0,s:0,cell:f},!0))}this.frame.add(this.framePetals);const o=18,c=new $n(1,1,2,2),l=new Float32Array(o),h=new Float32Array(o*4).fill(1);c.setAttribute("aCell",new Fn(l,1)),c.setAttribute("aTint",new Fn(h,4)),this.frameClusters=new Fi(c,n,o),this.frameClusters.frustumCulled=!1,this.frameClusters.renderOrder=9;for(let u=0;u<o;u++)l[u]=u%7===0?rn.blossomBrand:rn.blossomPink[u%2];this.frame.add(this.frameClusters),this.layoutFrame(t)}layoutFrame(t){const n=Math.tan(Tt.degToRad(t.fov/2))*.5,i=n*t.aspect,r=[[-i,n,.9],[i,n,-.7],[i,-n*.7,2.6]],a=new _t,o=new Kt,c=new We,l=h=>Math.sin(h*12.9898)*43758.5453%1;for(let h=0;h<this.frameClusters.count;h++){const[u,d,f]=r[h%3],g=Math.floor(h/3),b=.012+g*.01,m=f+(l(h)-.5)*1.6,p=u-Math.sign(u)*Math.abs(Math.cos(m))*b*1.4+(l(h+7)-.5)*.02,y=d-Math.sign(d)*Math.abs(Math.sin(m))*b*1.4+(l(h+3)-.5)*.02;c.set((l(h+1)-.5)*.5,(l(h+2)-.5)*.5,l(h+4)*6.28),o.setFromEuler(c);const v=.018+Math.abs(l(h+5))*.016-g*.0015;a.compose(new R(p,y,-.5),o,new R(v,v,v)),this.frameClusters.setMatrixAt(h,a)}this.frameClusters.instanceMatrix.needsUpdate=!0,this.frameW=i,this.frameH=n}edgeSpawn(t,e=!1){const n=Math.random(),i=this.frameW||.2,r=this.frameH||.35;return n<.45?(t.x=-i*(.82+Math.random()*.25),t.y=e?(Math.random()*2-1)*r:r*1.05):n<.9?(t.x=i*(.82+Math.random()*.25),t.y=e?(Math.random()*2-1)*r:r*1.05):(t.x=(Math.random()*2-1)*i,t.y=r*(.85+Math.random()*.25)),t.vx=(Math.random()-.5)*.01,t.vy=-.012-Math.random()*.014,t.rot=Math.random()*6.28,t.vr=(Math.random()-.5)*1.5,t.s=.009+Math.random()*.009,t}setVisible(t){this.frame.visible=t}update(t,e,n){this.t+=t;const i=n?.002:.008,r=Tt.clamp(-e.y*i,-.02,.02),a=Tt.clamp(e.x*i,-.02,.02);this.parallax.x+=(r-this.parallax.x)*Math.min(1,t*5),this.parallax.y+=(a-this.parallax.y)*Math.min(1,t*5),this.frame.position.set(this.parallax.x,this.parallax.y,0);const o=new _t,c=new Kt,l=new We,h=n?.4:1,u=this.frameW,d=this.frameH;for(let f=0;f<this.fp.length;f++){const g=this.fp[f];g.x+=(g.vx+Math.sin(this.t*1.3+f)*.006)*t*h,g.y+=g.vy*t*h,g.rot+=g.vr*t*h;const b=g.x/(u*.62),m=g.y/(d*.7),p=b*b+m*m;p<1&&(g.x+=Math.sign(g.x||1)*(1-p)*t*.08),(g.y<-d*1.1||Math.abs(g.x)>u*1.2)&&this.edgeSpawn(g),l.set(Math.sin(g.rot)*.8,g.rot*.5,g.rot),c.setFromEuler(l),o.compose(new R(g.x,g.y,-.5),c,new R(g.s,g.s,g.s)),this.framePetals.setMatrixAt(f,o)}this.framePetals.instanceMatrix.needsUpdate=!0}}const fo=63710088e-1,bi=Math.PI/180,kM=.6,Ad=3,OM=.1,BM=120;function ep(s,t,e,n){return{e:(t-n)*bi*fo*Math.cos(e*bi),n:(s-e)*bi*fo}}const Ed=new We,zM=new Kt(-Math.sqrt(.5),0,0,Math.sqrt(.5)),HM=new Kt,GM=new R(0,0,1),Mc=new R;function VM(s,t,e,n,i){return Ed.set(e*bi,t*bi,-n*bi,"YXZ"),s.setFromEuler(Ed).multiply(zM).multiply(HM.setFromAxisAngle(GM,-i))}function np(s){return Mc.set(0,0,-1).applyQuaternion(s),Math.atan2(Mc.x,-Mc.z)}function WM(s,t,e,n){const i=VM(new Kt,s,t,e,n);return kr(np(i))}function kr(s){return Math.atan2(Math.sin(s),Math.cos(s))}class qM{constructor(){this.x=0,this.y=0,this.outlierFor=0,this.samples=0}reset(){this.x=this.y=0,this.outlierFor=0,this.samples=0}add(t,e,n){const i=t-e;let r=this.samples<BM?2:6;if(this.ready){const o=Math.abs(kr(i-this.angle));if(o>kM||this.outlierFor>=Ad){if(this.outlierFor+=n,this.outlierFor<Ad)return;r=1,o<OM&&(this.outlierFor=0)}else this.outlierFor=0}const a=this.samples<5?1/(this.samples+1):1-Math.exp(-n/r);this.x+=(Math.sin(i)-this.x)*a,this.y+=(Math.cos(i)-this.y)*a,this.samples++}get ready(){return this.samples>=5}get angle(){return Math.atan2(this.x,this.y)}}function Sc(s,t,e,n=new it){const i=Math.sin(e),r=Math.cos(e);return n.set(t*i+s*r,-t*r+s*i)}function XM(s,t,e){const n=Math.sin(e),i=Math.cos(e);return{e:s*i+t*n,n:s*n-t*i}}function ip(s,t,e,n){return{lat:e+t/(bi*fo),lng:n+s/(bi*fo*Math.cos(e*bi))}}const jM="Điểm đến của dải sáng dẫn đường. Toạ độ lấy từ điểm ghim 'Cổng Parabol' trên Apple Maps (đường Giải Phóng, Bách Khoa, Hà Nội) – nên kiểm tra lại tại chỗ. arriveRadius: cách cổng bao nhiêu mét thì coi là đã tới (GPS điện thoại thường lệch 5–15 m).",YM="Cổng Parabol, ĐH Bách khoa Hà Nội",KM="Parabol Gate, Hanoi University of Science and Technology",$M="Cổng Parabol",JM="Parabol Gate",QM=21.005112,ZM=105.84155,tS=12,sp={_doc:jM,nameVi:YM,nameEn:KM,shortVi:$M,shortEn:JM,lat:QM,lng:ZM,arriveRadius:tS},eS="Tuyến đường đi bộ theo phố cho dải sáng dẫn đường, lấy từ OpenRouteService (dữ liệu OpenStreetMap). Key miễn phí tạo tại https://account.heigit.org; đặt key vào source/.env.local dạng VITE_ORS_KEY=... rồi chạy npm run build:site. Thử lần lượt các profile: đi bộ trước, xe đạp làm dự phòng (diễn đàn ORS có báo lỗi treo với foot-walking từ 10/2026). Không lấy được tuyến thì dải sáng tạm theo hướng chim bay và tự thử lại. preference: shortest lấy tuyến ngắn nhất.",nS="https://api.heigit.org/openrouteservice/v2/directions",iS=["foot-walking","cycling-regular"],sS="shortest",rS=12e3,aS=15,oS=3,cS=10,Qi={_doc:eS,url:nS,profiles:iS,preference:sS,timeoutMs:rS,offRouteMeters:aS,rerouteAfterSeconds:oS,minSecondsBetweenRequests:cS},Ze=sp,je=96,wc=12,lS=.35,Ac=.3,hS=.33,uS=6,dS=4,fS=12,pS=.45,mS=.5,gS=2.6,Td=1,Ec=2.4,bS=1.4,vS=6,xS=1.6,Tc=18,_S=.15,yS=.15,MS=4,SS=.5,wS=4,AS=40,ES=8,TS=1e3,RS=6,CS=30,Ga=90,PS=.07,Bn=new R;function Rd(s){return Bn.set(0,0,-1).applyQuaternion(s),Math.hypot(Bn.x,Bn.z)>.3||Bn.set(0,1,0).applyQuaternion(s),Math.atan2(Bn.x,-Bn.z)}class LS{constructor(t){this.root=new Ee,this.position=new it,this.target=new it,this.north=new qM,this.phase="idle",this.floorNow=1,this.floorTo=1,this.accuracy=NaN,this.hasFix=!1,this.lastSetup={floorNow:1,floorTo:1},this.routeState="none",this.route=null,this.routeAskedAt=-1/0,this.routePending=!1,this.offRouteFor=0,this.firstFixAt=0,this.e=0,this.n=0,this.shownE=0,this.shownN=0,this.variance=0,this.originE=0,this.originN=0,this.leadSide=0,this.leadLength=0,this.resampledAngle=0,this.path=[],this.shown=new Float32Array(je*2),this.wanted=new Float32Array(je*2),this.hasShown=!1,this.sparkSeed=new Float32Array(Ga*3),this.sparklesOn=!0,this.pointScale=40,this.t=0,this.planAt=0,t.add(this.root);const e=new _e,n=[];for(let c=0;c<je-1;c++){const l=c*2;n.push(l,l+1,l+2,l+1,l+3,l+2)}this.posAttr=new Te(new Float32Array(je*2*3),3),this.uvAttr=new Te(new Float32Array(je*2*2),2),this.alphaAttr=new Te(new Float32Array(je*2),1),this.posAttr.setUsage(Wn),this.uvAttr.setUsage(Wn),this.alphaAttr.setUsage(Wn),e.setAttribute("position",this.posAttr),e.setAttribute("uv",this.uvAttr),e.setAttribute("aAlpha",this.alphaAttr),e.setIndex(n),this.mat=new Rn({uniforms:{uTime:{value:0},uPink:{value:new Et(An.petalDeep)},uGold:{value:new Et(An.glow)}},vertexShader:`
        attribute float aAlpha; varying vec2 vUv; varying float vA;
        void main(){ vUv = uv; vA = aAlpha; gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0); }`,fragmentShader:`
        uniform float uTime; uniform vec3 uPink, uGold; varying vec2 vUv; varying float vA;
        void main(){
          float x = abs(vUv.y - 0.5) * 2.0;
          float core = exp(-x * x * 12.0);
          float halo = exp(-x * x * 3.0) * 0.4;
          float flow = 0.72 + 0.28 * sin((vUv.x - uTime * 1.1) * 3.0);
          vec3 c = mix(uPink, uGold, core * 0.8);
          float a = (core * flow + halo) * vA;
          gl_FragColor = vec4(c * a, a);
          #include <colorspace_fragment>
        }`,transparent:!0,depthWrite:!1,depthTest:!1,blending:Pr}),this.ribbon=new Qt(e,this.mat),this.ribbon.frustumCulled=!1,this.ribbon.renderOrder=4,this.root.add(this.ribbon);const i=document.createElement("canvas");i.width=64,i.height=128;const r=i.getContext("2d"),a=r.createRadialGradient(32,84,1,32,84,31);a.addColorStop(0,"rgba(255,231,184,0.95)"),a.addColorStop(1,"rgba(255,193,214,0)"),r.fillStyle=a,r.fillRect(0,0,64,128),this.marker=new Xx(new If({map:new co(i),transparent:!0,depthWrite:!1,depthTest:!1,blending:Pr})),this.marker.scale.set(1.6,3.2,1),this.marker.material.opacity=.75,this.root.add(this.marker);const o=new _e;this.sparkPos=new Te(new Float32Array(Ga*3),3),this.sparkAlpha=new Te(new Float32Array(Ga),1),this.sparkPos.setUsage(Wn),this.sparkAlpha.setUsage(Wn),o.setAttribute("position",this.sparkPos),o.setAttribute("aAlpha",this.sparkAlpha);for(let c=0;c<this.sparkSeed.length;c++)this.sparkSeed[c]=Math.random();this.sparkMat=new Rn({uniforms:{uPx:{value:40}},vertexShader:`
        attribute float aAlpha; uniform float uPx; varying float vA;
        void main(){ vA = aAlpha; vec4 mv = modelViewMatrix * vec4(position, 1.0); gl_PointSize = uPx * 9.0 / -mv.z; gl_Position = projectionMatrix * mv; }`,fragmentShader:`
        varying float vA;
        void main(){ float a = smoothstep(0.5, 0.0, length(gl_PointCoord - 0.5)) * vA; if (a < 0.02) discard; gl_FragColor = vec4(vec3(1.0, 0.93, 0.8) * a, a); }`,transparent:!0,depthWrite:!1,depthTest:!1,blending:Pr}),this.sparks=new Uf(o,this.sparkMat),this.sparks.frustumCulled=!1,this.sparks.renderOrder=5,this.root.add(this.sparks),this.setVisible(!1)}setVisible(t){this.root.visible=t}setSparkles(t){this.sparklesOn=t}get remaining(){return Math.hypot(this.e,this.n)}get distanceLeft(){const t=this.route;if(!t)return this.remaining;const e=this.projectOnRoute();let n=e.off+e.point.distanceTo(t[e.seg+1]);for(let i=e.seg+2;i<t.length;i++)n+=t[i-1].distanceTo(t[i]);return n}get hasRoute(){return!!this.route}get userEnu(){return{e:this.e,n:this.n}}get routeEnu(){return this.route?this.route.map(t=>({e:t.x,n:t.y})):null}heading(t){return kr(Rd(t)-this.north.angle)}setRoute(t){this.routePending=!1,t&&t.length>=2?(this.route=t.map(e=>new it(e.e,e.n)),this.route[this.route.length-1].length()>1&&this.route.push(new it(0,0)),this.routeState="ok"):this.route?this.routeState="ok":this.routeState="failed",this.offRouteFor=0,this.path=[]}projectOnRoute(){const t=this.route,e=new it(this.e,this.n);let n={seg:0,point:t[0].clone(),off:1/0};const i=new it,r=new it;for(let a=0;a<t.length-1;a++){i.subVectors(t[a+1],t[a]);const o=i.lengthSq(),c=o?Tt.clamp(r.subVectors(e,t[a]).dot(i)/o,0,1):0,l=t[a].clone().addScaledVector(i,c),h=l.distanceTo(e);h<n.off&&(n={seg:a,point:l,off:h})}return n}routeAhead(t){const e=this.route,n=this.projectOnRoute(),i=[n.point];for(let d=n.seg+1;d<e.length;d++)i.push(e[d]);const r=d=>Sc(d.x-this.originE,d.y-this.originN,t);let a=RS,o=1,c=i[i.length-1];for(;o<i.length;o++){const d=i[o-1].distanceTo(i[o]);if(d>=a){c=i[o-1].clone().lerp(i[o],d?a/d:0);break}a-=d}const l=[];let h=0,u=c;for(;o<i.length&&h<CS;o++)h+=u.distanceTo(i[o]),l.push(r(i[o])),u=i[o];return{carrot:r(c),rest:l}}checkRoute(t){if(!this.hasFix||!this.onNeedRoute||this.routePending)return;const e=this.t-this.routeAskedAt>=Qi.minSecondsBetweenRequests;let n;if(this.route){const i=Math.max(Qi.offRouteMeters,(Number.isFinite(this.accuracy)?this.accuracy:0)*1.5);this.offRouteFor=this.projectOnRoute().off>i?this.offRouteFor+t:0,n=this.offRouteFor>=Qi.rerouteAfterSeconds&&e}else this.routeState==="failed"?n=e:n=this.accuracy<=AS||this.t-this.firstFixAt>=ES;n&&(this.routeAskedAt=this.t,this.routePending=!0,this.routeState==="none"&&(this.routeState="loading"),this.offRouteFor=0,this.onNeedRoute(this.e,this.n))}start(t){this.lastSetup=t,this.floorNow=t.floorNow,this.floorTo=t.floorTo,this.path=[],this.hasShown=!1,this.phase=t.floorNow!==t.floorTo?"floor":this.hasFix&&this.north.ready?"walk":"locating"}stop(){this.phase="idle",this.hasFix=!1,this.route=null,this.routeState="none",this.routeAskedAt=-1/0,this.routePending=!1,this.accuracy=NaN,this.north.reset()}gpsFix(t){const e=(t.accuracy*SS)**2;if(!this.hasFix)this.e=this.shownE=t.e,this.n=this.shownN=t.n,this.originE=t.e,this.originN=t.n,this.variance=e,this.firstFixAt=this.t,this.hasFix=!0;else{const n=this.variance/(this.variance+e);this.e+=(t.e-this.e)*n,this.n+=(t.n-this.n)*n,this.variance*=1-n}this.accuracy=t.accuracy}step(t){if(!this.hasFix||!this.north.ready||this.phase==="floor")return;const e=Math.hypot(t.x,t.z);if(e<.2)return;const n=XM(t.x/e,t.z/e,this.north.angle);this.e+=n.e*Ae.user.strideMeters,this.n+=n.n*Ae.user.strideMeters,this.variance+=yS}update(t,e,n,i=performance.now()){this.t+=t,this.mat.uniforms.uTime.value=this.t,this.hasFix&&(this.variance+=MS*t),n&&i-n.at<TS&&(Bn.set(0,0,-1).applyQuaternion(e.quaternion),Math.abs(Bn.y)<.85&&this.north.add(np(e.quaternion),n.value,t));const r=this.north.angle,a=1-Math.exp(-t*wS);this.shownE+=(this.e-this.shownE)*a,this.shownN+=(this.n-this.shownN)*a,Sc(this.shownE-this.originE,this.shownN-this.originN,r,this.position),Sc(-this.originE,-this.originN,r,this.target),this.phase==="locating"&&this.hasFix&&this.north.ready&&(this.phase="walk"),(this.phase==="walk"||this.phase==="locating")&&this.checkRoute(t),this.phase==="walk"&&this.remaining<=sp.arriveRadius&&(this.phase="arrived",this.onArrive?.());const o=this.phase==="walk";this.ribbon.visible=o,this.sparks.visible=o&&this.sparklesOn,this.sparkMat.uniforms.uPx.value=this.pointScale,this.marker.visible=o||this.phase==="arrived";const c=this.position.distanceTo(this.target),l=c>wc?this.position.clone().lerp(this.target,wc/c):this.target;if(this.marker.position.set(l.x,1.2,l.y),!o)return;this.planAt+=t;const h=Rd(e.quaternion);!this.path.length||this.planAt>=hS?(this.path=this.computePath(r),this.planAt=0,this.resample(h)):Math.abs(kr(h-this.resampledAngle))>_S&&this.resample(h),this.draw(t)}computePath(t){if(!this.route)return[this.position.clone(),this.target.clone()];const{carrot:e,rest:n}=this.routeAhead(t);return[this.position.clone(),e,...n]}along(t,e){let n=e;for(let i=1;i<t.length;i++){const r=t[i-1].distanceTo(t[i]);if(r>=n)return{p:t[i-1].clone().lerp(t[i],r?n/r:0),i};n-=r}return{p:t[t.length-1].clone(),i:t.length}}leadIn(t,e){if(t.length<2)return null;const n=t[0],i=this.along(t,xS),r=Math.atan2(i.p.x-n.x,-(i.p.y-n.y));let a=kr(r-e);if(Math.abs(a)<mS)return this.leadSide=0,null;Math.abs(a)>gS&&this.leadSide&&Math.sign(a)!==this.leadSide&&(a-=Math.sign(a)*Math.PI*2),this.leadSide=Math.sign(a);const o=[],c=Math.sin(e),l=-Math.cos(e);for(let h=0;h<4;h++){const u=Td+(Ec-Td)*h/4;o.push(new it(n.x+c*u,n.y+l*u))}for(let h=0;h<=Tc;h++){const u=h/Tc,d=e+a*u,f=Ec+(bS-Ec)*u;o.push(new it(n.x+Math.sin(d)*f,n.y-Math.cos(d)*f))}return o.push(i.p,...t.slice(i.i)),o}resample(t){if(this.resampledAngle=t,this.path.length<2)return;const e=this.leadIn(this.path,t),n=e??this.path;if(this.leadLength=0,e)for(let u=1;u<=Tc+4;u++)this.leadLength+=e[u].distanceTo(e[u-1]);const i=[];for(const u of n){const d=i[i.length-1];(!d||Math.hypot(d.x-u.x,d.z-u.y)>.02)&&i.push(new R(u.x,0,u.y))}if(i.length<2)return;const r=i.length===2?new Bf(i[0],i[1]):new Ir(i,!1,"centripetal"),a=r.getLength(),o=e?0:Math.min(lS,a*.5),c=e?this.leadLength+vS:wc,l=Math.max(.01,Math.min(a,c)-o),h=new R;for(let u=0;u<je;u++)r.getPointAt((o+u/(je-1)*l)/a,h),this.wanted[u*2]=h.x,this.wanted[u*2+1]=h.z;this.hasShown||(this.shown.set(this.wanted),this.hasShown=!0)}draw(t){const e=1-Math.exp(-t*uS),n=this.shown,i=this.wanted;for(let l=0;l<n.length;l++)n[l]+=(i[l]-n[l])*e;const r=this.posAttr.array,a=this.uvAttr.array,o=this.alphaAttr.array;let c=0;for(let l=0;l<je;l++){const h=n[l*2],u=n[l*2+1],d=n[Math.max(0,l-1)*2],f=n[Math.max(0,l-1)*2+1],g=n[Math.min(je-1,l+1)*2],b=n[Math.min(je-1,l+1)*2+1];let m=g-d,p=b-f;const y=Math.hypot(m,p)||1;m/=y,p/=y,l&&(c+=Math.hypot(h-d,u-f));const v=Math.hypot(h-this.position.x,u-this.position.y);let _=1-(1-pS)*Tt.smoothstep(v,dS,fS);_*=(this.leadLength?1:Math.min(1,l/3))*Math.min(1,(je-1-l)/6+(l===je-1?0:.1));for(let M=0;M<2;M++){const E=M?1:-1,S=l*2+M;r[S*3]=h-p*Ac*E,r[S*3+1]=.012,r[S*3+2]=u+m*Ac*E,a[S*2]=c,a[S*2+1]=M,o[S]=_}}this.posAttr.needsUpdate=this.uvAttr.needsUpdate=this.alphaAttr.needsUpdate=!0,this.drawSparks()}drawSparks(){if(!this.sparks.visible)return;const t=this.shown,e=this.sparkSeed,n=this.sparkPos.array,i=this.sparkAlpha.array;for(let r=0;r<Ga;r++){const a=e[r*3],o=e[r*3+1],c=e[r*3+2],l=(a+this.t*PS)%1,h=l*(je-1),u=Math.min(je-2,Math.floor(h)),d=h-u,f=t[u*2],g=t[u*2+1],b=t[u*2+2],m=t[u*2+3],p=Math.hypot(b-f,m-g)||1,y=(o-.5)*Ac*1.2;n[r*3]=f+(b-f)*d-(m-g)/p*y,n[r*3+1]=.03+.06*Math.abs(Math.sin(this.t*2+c*30)),n[r*3+2]=g+(m-g)*d+(b-f)/p*y,i[r]=Math.min(1,l*12)*(1-l)*(.4+.6*Math.abs(Math.sin(this.t*3+c*50)))}this.sparkPos.needsUpdate=this.sparkAlpha.needsUpdate=!0}}const Cd=Math.PI/180,Pd={enableHighAccuracy:!0,maximumAge:0,timeout:3e4},IS=4e3;class DS{constructor(t,e){this.lat0=t,this.lng0=e,this.compass=null,this.compassAccuracy=NaN,this.compassAt=0,this.fixAt=0,this.watch=null,this.staleTimer=0,this.polling=!1,this.onVisible=()=>{document.hidden||this.watchGps()},this.onAbs=n=>this.absolute(n),this.onRel=n=>this.webkit(n)}start(){if(this.stop(),!window.isSecureContext)return this.onError?.("insecure");if(!navigator.geolocation)return this.onError?.("unavailable");this.watchGps(),this.staleTimer=window.setInterval(()=>this.pollIfStale(),1e3),document.addEventListener("visibilitychange",this.onVisible),window.addEventListener("deviceorientationabsolute",this.onAbs),window.addEventListener("deviceorientation",this.onRel)}stop(){this.watch!==null&&navigator.geolocation?.clearWatch(this.watch),this.watch=null,clearInterval(this.staleTimer),document.removeEventListener("visibilitychange",this.onVisible),window.removeEventListener("deviceorientationabsolute",this.onAbs),window.removeEventListener("deviceorientation",this.onRel),this.compass=null,this.fixAt=0}watchGps(){this.watch!==null&&navigator.geolocation.clearWatch(this.watch),this.watch=navigator.geolocation.watchPosition(t=>this.fix(t),t=>this.fail(t),Pd)}fix(t){const{e,n}=ep(t.coords.latitude,t.coords.longitude,this.lat0,this.lng0);this.fixAt=performance.now(),this.onFix?.({e,n,accuracy:t.coords.accuracy||50})}fail(t){t.code===t.PERMISSION_DENIED?this.onError?.("denied"):this.fixAt||this.onError?.("unavailable")}pollIfStale(){this.polling||!this.fixAt||document.hidden||performance.now()-this.fixAt<IS||(this.polling=!0,navigator.geolocation.getCurrentPosition(t=>{this.polling=!1,this.watch!==null&&this.fix(t)},()=>{this.polling=!1},Pd))}screenAngle(){return(screen.orientation?.angle??window.orientation??0)*Cd}absolute(t){t.alpha==null||t.beta==null||t.gamma==null||(this.compass=WM(t.alpha,t.beta,t.gamma,this.screenAngle()),this.compassAccuracy=NaN,this.compassAt=performance.now())}webkit(t){const e=t.webkitCompassHeading;if(typeof e!="number"||Number.isNaN(e))return;const n=t.webkitCompassAccuracy??NaN;n<0||(this.compass=e*Cd,this.compassAccuracy=n,this.compassAt=performance.now())}}const NS={VITE_ORS_KEY:"eyJvcmciOiI1YjNjZTM1OTc4NTExMTAwMDFjZjYyNDgiLCJpZCI6IjM3OGUyNzdhYjJmOTQ1Njc4MTVhOTI2ZmYxNGRiZDBhIiwiaCI6Im11cm11cjY0In0="};function rp(){return(NS?.VITE_ORS_KEY??"").trim()}function FS(s,t,e){const n=s?.features?.[0],i=n?.geometry?.coordinates;if(!Array.isArray(i)||i.length<2)return null;const r=[];for(const a of i){if(!Array.isArray(a)||!Number.isFinite(a[0])||!Number.isFinite(a[1]))return null;r.push(ep(a[1],a[0],t.lat,t.lng))}return{points:r,distance:n?.properties?.summary?.distance??NaN,profile:e}}async function US(s,t,e=rp(),n=fetch){if(!e)return null;for(const i of Qi.profiles){const r=new AbortController,a=setTimeout(()=>r.abort(),Qi.timeoutMs);try{const o=await n(`${Qi.url}/${i}/geojson`,{method:"POST",headers:{Authorization:e,"Content-Type":"application/json",Accept:"application/geo+json, application/json"},body:JSON.stringify({coordinates:[[s.lng,s.lat],[t.lng,t.lat]],preference:Qi.preference,instructions:!1}),signal:r.signal});if(!o.ok)continue;const c=FS(await o.json(),t,i);if(c)return c}catch{}finally{clearTimeout(a)}}return null}const ap={vi:{exhibitionLine:"Trưng bày chuyên đề tại Di tích Nhà tù Hỏa Lò",occasion:"Nhân kỷ niệm 97 năm ngày thành lập Đảng và chào xuân Đinh Mùi 2027",start:"Bắt đầu trải nghiệm",offlineReady:"Đã tải xong, dùng được cả khi mất mạng",offlineLoading:"Đang tải trước để dùng offline",permTitle:"Trước khi bắt đầu",permCamera:"Camera",permCameraBody:"Để vẽ hoa đào lên khung cảnh trước mặt. Hình ảnh chỉ xử lý trên điện thoại, không gửi đi đâu.",permMotion:"Cảm biến chuyển động",permMotionBody:"Để hoa đứng yên trong không gian khi bạn xoay điện thoại.",whereTitle:"Bạn đang ở đâu?",whereIn:"Trong hành lang trưng bày",whereOut:"Ngoài cổng, cần chỉ đường",xrOption:"Dùng AR nâng cao của Android (hoa bám sàn chính xác hơn, tạm tắt nhận diện tay)",allow:"Cho phép và bắt đầu",back:"Quay lại",ob1:"Khum tay lại để hứng một cánh hoa. Xoè tay ra để thả.",ob2:"Ngẩng điện thoại lên để thấy cành đào đang rụng hoa.",ob3:"Hướng xuống sàn hoặc mặt bàn rồi đưa tay gạt lớp hoa.",next:"Tiếp",done:"Bắt đầu",skip:"Bỏ qua",safety:"Hãy chú ý xung quanh khi nhìn màn hình.",handSeen:"Đã thấy tay",handHolding:"Đang giữ hoa",handLoading:"Đang chuẩn bị nhận diện tay",modeIndoor:"Trong hành lang",modeOutdoor:"Ngoài cổng",reading:"Chế độ đọc",readingOn:"Đã bật chế độ đọc: ít hoa ở giữa màn hình",readingOff:"Đã tắt chế độ đọc",menu:"Tuỳ chọn",capture:"Chụp ảnh",sound:"Âm thanh",battery:"Tiết kiệm pin",reduceMotion:"Giảm chuyển động",density:"Mật độ hoa",guide:"Hiện khung hành lang (kiểm tra vị trí)",recenter:"Căn lại hướng",recenterHint:"Quay mặt vào trong hành lang, hướng về khu cây đào, rồi bấm.",recentered:"Đã căn lại hướng",standAt:"Tôi đang đứng trước…",standAtHint:"Hướng camera thẳng vào panel đó rồi chọn tên panel.",fixed:"Đã căn vị trí theo panel",tutorial:"Xem hướng dẫn",language:"English",close:"Đóng",savePhoto:"Lưu ảnh",sharePhoto:"Chia sẻ",photoReady:"Ảnh của bạn",arrived:"Tôi đã vào triển lãm",arrivedShort:"Đã vào",lost:"Hướng camera về bảng triển lãm để định vị lại",errDenied:"Chưa có quyền dùng camera. Mở cài đặt trình duyệt, cho phép camera cho trang này rồi tải lại.",errInsecure:"Trang cần mở qua https:// để dùng camera. Hãy quét lại mã QR tại pano.",errNoCam:"Không tìm thấy camera. Bạn vẫn xem được hoa: kéo màn hình để nhìn quanh.",errNoSensor:"Điện thoại không gửi dữ liệu cảm biến. Kéo màn hình để nhìn quanh.",errSensorDenied:"Chưa có quyền cảm biến chuyển động. Kéo màn hình để nhìn quanh, hoặc tải lại trang và chọn Cho phép.",errLowLight:"Chỗ này hơi tối nên nhận diện tay có thể chậm. Đưa tay gần nguồn sáng hơn.",errHand:"Không tải được nhận diện tay. Hoa vẫn rơi bình thường.",help:"Trợ giúp",helpBody:"Khum tay để hứng hoa, xoè tay để thả. Ngẩng lên để xem cành đào, cúi xuống để gạt hoa trên sàn. Hướng camera vào panel để hiện thẻ thông tin, bấm nút loa trên thẻ để nghe đọc bằng ngôn ngữ đang chọn. Hướng camera vào ảnh chậu tôn hoặc thùng gỗ để xem hiện vật 3D, kéo để xoay, chụm hai ngón để phóng to. Nút cạnh nút chụp đổi sang camera trước để chụp ảnh selfie.",privacy:'Video chỉ xử lý trên điện thoại của bạn. Chỉ khi bạn hỏi đáp, câu hỏi (và ảnh nếu bạn bật "kèm ảnh") mới được gửi tới Google Gemini để trả lời.',xrPlace:"Đứng ở lối vào cổng G1, hướng camera xuống sàn rồi chạm vào vòng tròn",xrPlaced:"Đã đặt hành lang",xrScan:"Đang tìm mặt sàn: hướng camera xuống sàn và lia chậm sang hai bên",xrNotFloor:"Đây có vẻ là mặt bàn hoặc đồ vật, không phải sàn. Hãy hướng camera xuống sàn.",xrFloorFixed:"Đã nhận ra mặt sàn thật và đặt lại hoa",xrReplace:"Đặt lại mặt sàn",floorScan:"Để app đo phòng: hướng camera xuống sàn trống gần chân, giữ yên khoảng 1 giây, rồi lia từ từ từ chân tường lên trần.",exitXr:"Thoát AR nâng cao",modeGuide:"Dải sáng",guideMenu:"Dẫn đường tới Cổng Parabol (thử nghiệm)",guideTitle:"Dẫn đường tới Cổng Parabol",guideHint:"Ứng dụng dùng GPS và la bàn của điện thoại. Dải sáng chỉ đúng hướng đi theo đường phố (bản đồ OpenStreetMap), có thể đi xuyên qua tường trên màn hình. Đứng ngoài trời, cầm máy dọc để GPS bắt nhanh hơn.",guideFloorNow:"Bạn đang ở tầng",guideFloorTo:"Cổng ở tầng",guideGo:"Bắt đầu dẫn đường",guideBadInput:"Hãy nhập số tầng hợp lệ.",guideLocating:"Đang tìm vị trí GPS và hướng la bàn…",guideLeft:(s,t)=>`${s} · còn ${t}`,guideGps:s=>`GPS ±${s} m`,guideArrived:s=>`Đã tới ${s}`,guideChange:"Đặt lại",guideExit:"Thoát dẫn đường",guideGoDown:s=>`Xuống tầng ${s} bằng cầu thang`,guideGoUp:s=>`Lên tầng ${s} bằng cầu thang`,guideStairs:"Đừng nhìn màn hình khi đang đi cầu thang.",guideFloorDone:s=>`Đã tới tầng ${s}`,guideGpsDenied:"Chưa có quyền vị trí. Hãy cho phép vị trí cho trang này trong cài đặt trình duyệt rồi thử lại.",guideGpsNone:"Không lấy được vị trí GPS trên máy này.",guideNoCompass:"Chưa có dữ liệu la bàn nên chưa biết hướng. Hãy lắc nhẹ điện thoại theo hình số 8 để hiệu chỉnh.",guideRouting:"đang tìm đường",guideBeeline:"theo hướng chim bay",guideRouteFail:"Không lấy được tuyến đường theo phố, tạm chỉ theo hướng chim bay.",guideNoKey:"Chưa cài key OpenRouteService nên dải sáng chỉ theo hướng chim bay (xem README-SUA-AR.md).",artHint:"Kéo để xoay, chụm hai ngón để phóng to. Chạm hai lần để đặt lại.",artInspect:"Xem kỹ",artReset:"Đặt lại",artClose:"Đóng",artScan:"Hướng camera vào panel để đọc thông tin, vào ảnh chậu tôn hoặc thùng gỗ để xem hiện vật 3D. Bấm biểu tượng hỏi đáp ở góc dưới bên trái để hỏi thêm.",askChip:"Hỏi đáp",askTitle:"Hỏi đáp",askNote:"Trợ lý ảo dùng Google Gemini, có thể chưa chính xác. Câu hỏi và ảnh bạn gửi được chuyển tới Google.",askAboutNow:"Đang hỏi về:",askAbout:s=>`Kể thêm về ${s}`,askMeaning:s=>`${s} có ý nghĩa gì?`,askWhatIsThis:"Đây là cái gì?",askToilet:"Nhà vệ sinh ở đâu?",askOverview:"Trưng bày này nói về điều gì?",askPlaceholder:"Nhập câu hỏi…",askSend:"Gửi",askMic:"Hỏi bằng giọng nói",askPhoto:"Kèm ảnh camera",askSpeak:"Đọc to câu trả lời",askThinking:"Đang trả lời…",askOffline:"Đang mất mạng nên chưa hỏi được. Hoa đào vẫn chạy bình thường.",askBusy:"Trợ lý đang quá tải, bạn thử lại sau ít phút nhé.",askNoKey:"Trợ lý chưa được bật (cần đặt GEMINI_API_KEY trên Vercel).",askFailed:"Chưa trả lời được, bạn thử lại nhé.",askMore:"Hỏi thêm",enterWelcome:'Chào mừng bạn tới trưng bày "Đón Gió Xuân"',modeSwitchTo:s=>`Chuyển sang: ${s}`,modeNow:s=>`Chế độ: ${s}`,flipCamera:"Đổi camera trước / sau",flipFail:"Không mở được camera này, đang dùng lại camera cũ.",readAloud:"Đọc to nội dung",readStop:"Dừng đọc",readNoTts:"Trình duyệt này không đọc to được. Hãy mở trang bằng Chrome hoặc Safari.",readNoVoice:"Điện thoại chưa có giọng đọc tiếng Việt nên giọng có thể sai. Có thể cài thêm trong Cài đặt > Chuyển văn bản thành giọng nói."},en:{exhibitionLine:"A thematic exhibition at the Hỏa Lò Prison Relic",occasion:"97th anniversary of the founding of the Communist Party of Vietnam, welcoming the Spring of 2027",start:"Begin the experience",offlineReady:"Downloaded. Works without a connection",offlineLoading:"Downloading for offline use",permTitle:"Before you begin",permCamera:"Camera",permCameraBody:"To draw peach blossoms over the scene in front of you. Video stays on your phone and is never uploaded.",permMotion:"Motion sensors",permMotionBody:"So the blossoms stay put in the room as you turn your phone.",whereTitle:"Where are you?",whereIn:"Inside the exhibition corridor",whereOut:"Outside the gate, show me the way",xrOption:"Use Android enhanced AR (blossoms sit on the floor more accurately; hand tracking paused)",allow:"Allow and begin",back:"Back",ob1:"Cup your hand to catch a petal. Open it to let go.",ob2:"Tilt your phone up to see blossoming peach branches.",ob3:"Point at the floor or the table and sweep the petals with your hand.",next:"Next",done:"Begin",skip:"Skip",safety:"Mind your surroundings while looking at the screen.",handSeen:"Hand found",handHolding:"Holding petals",handLoading:"Preparing hand tracking",modeIndoor:"In the corridor",modeOutdoor:"Outside",reading:"Reading mode",readingOn:"Reading mode on: fewer petals in the middle of the screen",readingOff:"Reading mode off",menu:"Options",capture:"Take photo",sound:"Sound",battery:"Battery saver",reduceMotion:"Reduce motion",density:"Petal density",guide:"Show corridor outline (check alignment)",recenter:"Reset direction",recenterHint:"Face into the corridor, toward the peach tree, then tap.",recentered:"Direction reset",standAt:"I am standing at…",standAtHint:"Point the camera straight at that panel, then choose its name.",fixed:"Position set from panel",tutorial:"Show the guide",language:"Tiếng Việt",close:"Close",savePhoto:"Save photo",sharePhoto:"Share",photoReady:"Your photo",arrived:"I am inside the exhibition",arrivedShort:"Inside",lost:"Point the camera at an exhibition panel to re-align",errDenied:"Camera access is off. Allow the camera for this site in your browser settings, then reload.",errInsecure:"This page needs https:// to use the camera. Scan the QR code on the panel again.",errNoCam:"No camera found. You can still see the blossoms: drag the screen to look around.",errNoSensor:"Your phone is not sending motion data. Drag the screen to look around.",errSensorDenied:"Motion access is off. Drag the screen to look around, or reload and choose Allow.",errLowLight:"It is a little dark here, so hand tracking may lag. Move your hand closer to the light.",errHand:"Hand tracking could not load. Blossoms still fall as usual.",help:"Help",helpBody:"Cup your hand to catch petals, open it to let go. Look up for the branches, look down to sweep the floor. Point the camera at a panel to show its card, then tap the speaker on the card to hear it read in the language you chose. Point the camera at the photo of the metal basin or the wooden crate to see it in 3D; drag to rotate, pinch to zoom. The button next to the shutter switches to the front camera for selfies.",privacy:"Video is processed only on your phone. Only when you ask a question is the question (and a photo, if you turn it on) sent to Google Gemini for an answer.",xrPlace:"Stand at the G1 gate entrance, point the camera at the floor, then tap the ring",xrPlaced:"Corridor placed",xrScan:"Looking for the floor: point the camera at the floor and pan slowly from side to side",xrNotFloor:"This looks like a table or an object, not the floor. Point the camera at the floor.",xrFloorFixed:"Found the real floor and reset the blossoms",xrReplace:"Reset the floor",floorScan:"To measure the room: point at clear floor near your feet, hold for about a second, then pan slowly from the base of a wall up to the ceiling.",exitXr:"Leave enhanced AR",modeGuide:"Light path",guideMenu:"Guide me to the Parabol Gate (trial)",guideTitle:"Guide to the Parabol Gate",guideHint:"Uses your phone GPS and compass. The light points along the streets (OpenStreetMap) and may pass through walls on screen. Stand outdoors and hold the phone upright for a faster GPS fix.",guideFloorNow:"You are on floor",guideFloorTo:"The gate is on floor",guideGo:"Start guiding",guideBadInput:"Please enter valid floor numbers.",guideLocating:"Finding GPS position and compass heading…",guideLeft:(s,t)=>`${s} · ${t} to go`,guideGps:s=>`GPS ±${s} m`,guideArrived:s=>`You have reached ${s}`,guideChange:"Reset",guideExit:"Stop guiding",guideGoDown:s=>`Go down to floor ${s} by the stairs`,guideGoUp:s=>`Go up to floor ${s} by the stairs`,guideStairs:"Do not look at the screen while using the stairs.",guideFloorDone:s=>`I am on floor ${s}`,guideGpsDenied:"Location access is off. Allow location for this site in your browser settings, then try again.",guideGpsNone:"GPS location is not available on this device.",guideNoCompass:"No compass data yet, so the direction is unknown. Move your phone in a figure-8 to calibrate it.",guideRouting:"finding the route",guideBeeline:"straight-line direction",guideRouteFail:"Could not get a street route, showing the straight-line direction for now.",guideNoKey:"No OpenRouteService key is set, so the light shows the straight-line direction (see README-SUA-AR.md).",artHint:"Drag to rotate, pinch to zoom. Double-tap to reset.",artInspect:"Look closer",artReset:"Reset",artClose:"Close",artScan:"Point your camera at a panel to read about it, or at the photo of the metal basin or wooden crate to see it in 3D. Tap the chat icon at the bottom left for more.",askChip:"Ask",askTitle:"Ask the guide",askNote:"The virtual guide uses Google Gemini and may be inaccurate. Your questions and photos are sent to Google.",askAboutNow:"Asking about:",askAbout:s=>`Tell me more about ${s}`,askMeaning:s=>`What does ${s} mean?`,askWhatIsThis:"What is this?",askToilet:"Where is the toilet?",askOverview:"What is this exhibition about?",askPlaceholder:"Type a question…",askSend:"Send",askMic:"Ask by voice",askPhoto:"Include a camera photo",askSpeak:"Read the answer aloud",askThinking:"Answering…",askOffline:"You are offline, so the guide cannot answer. The blossoms still work.",askBusy:"The guide is busy, please try again in a few minutes.",askNoKey:"The guide is not enabled yet (GEMINI_API_KEY must be set on Vercel).",askFailed:"Could not answer, please try again.",askMore:"Ask more",enterWelcome:'Welcome to the "Welcoming The Spring Breeze" exhibition',modeSwitchTo:s=>`Switch to: ${s}`,modeNow:s=>`Mode: ${s}`,flipCamera:"Switch front / back camera",flipFail:"Could not open that camera, so the previous one is back on.",readAloud:"Read aloud",readStop:"Stop reading",readNoTts:"This browser cannot read aloud. Please open the page in Chrome or Safari.",readNoVoice:"Your phone has no English voice installed, so the reading may sound wrong. You can add one in Settings > Text-to-speech."}};let Mo=(()=>{try{const s=localStorage.getItem("dgx-lang");if(s==="vi"||s==="en")return s}catch{}return navigator.language?.toLowerCase().startsWith("vi"),"vi"})();const op=new Set;function W(s){return ap[Mo][s]}function Ui(s){return ap[Mo==="vi"?"en":"vi"][s]}function $e(){return Mo}function cp(s){Mo=s;try{localStorage.setItem("dgx-lang",s)}catch{}document.documentElement.lang=s,op.forEach(t=>t())}function bh(s){op.add(s)}const Mn=(s,t="0 0 24 24")=>`<svg viewBox="${t}" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${s}</svg>`,Sn={camera:Mn('<path d="M4 8h3l2-2.5h6L17 8h3v11H4z"/><circle cx="12" cy="13" r="3.6"/>'),motion:Mn('<rect x="8" y="4" width="8" height="16" rx="2"/><path d="M4.5 9.5a8 8 0 0 0 0 5M19.5 9.5a8 8 0 0 1 0 5"/>'),hand:Mn('<path d="M8 12V6.5a1.4 1.4 0 0 1 2.8 0V11M10.8 10.5V5a1.4 1.4 0 0 1 2.8 0v5.5M13.6 10.5V6.2a1.4 1.4 0 0 1 2.8 0v6.3M16.4 11.5a1.4 1.4 0 0 1 2.8 0V15a6 6 0 0 1-6 6h-1.4a6 6 0 0 1-4.6-2.2L4.6 15.4a1.4 1.4 0 0 1 2.1-1.8L8 15"/>'),door:Mn('<path d="M6 20V4h12v16M3.5 20h17"/><path d="M14.5 12h.01"/>'),pin:Mn('<path d="M12 20.5s-6-5.2-6-10.3a6 6 0 0 1 12 0c0 5.1-6 10.3-6 10.3z"/><circle cx="12" cy="10.2" r="2.2"/>'),chat:Mn('<path d="M4 6.5h16v10.5H10l-4 3.5V17H4z"/><path d="M8.5 11.7h.01M12 11.7h.01M15.5 11.7h.01"/>'),gear:Mn(`<path d="${kS()}"/><circle cx="12" cy="12" r="3"/>`),globe:Mn('<circle cx="12" cy="12" r="8.5"/><path d="M3.5 12h17M12 3.5c2.4 2.5 3.6 5.3 3.6 8.5s-1.2 6-3.6 8.5c-2.4-2.5-3.6-5.3-3.6-8.5s1.2-6 3.6-8.5z"/>'),play:Mn('<circle cx="12" cy="12" r="8.5"/><path d="M10.2 8.6l5.2 3.4-5.2 3.4z"/>'),help:Mn('<circle cx="12" cy="12" r="8.5"/><path d="M9.5 9.5a2.6 2.6 0 0 1 5 .9c0 1.8-2.5 2.2-2.5 3.9M12 16.9h.01"/>'),flip:Mn('<path d="M4 8h3l2-2.5h6L17 8h3v11H4z"/><path d="M8.9 12.6a3.2 3.2 0 0 1 5.6-1.8M15.1 13.4a3.2 3.2 0 0 1-5.6 1.8"/><path d="M14.8 8.9l-.3 1.9-1.9-.3M9.2 17.1l.3-1.9 1.9.3"/>'),speaker:Mn('<path d="M4 9.5h3.5L12 6v12l-4.5-3.5H4z"/><path d="M15.5 9.2a4 4 0 0 1 0 5.6M18 6.8a7.4 7.4 0 0 1 0 10.4"/>')};function kS(){const n=[];for(let i=0;i<8;i++){const r=i/8*Math.PI*2;for(const[a,o]of[[-.26,6.6],[-.17,9],[.17,9],[.26,6.6]]){const c=r+a;n.push(`${(12+Math.sin(c)*o).toFixed(2)} ${(12-Math.cos(c)*o).toFixed(2)}`)}}return`M${n.join("L")}Z`}const hi=(s,t,e=0,n="")=>`<path class="${n}" transform="translate(${s} ${t}) rotate(${e})" d="M0 7C-5 3 -5 -4 -2 -7L0 -5.5 2 -7C5 -4 5 3 0 7z" fill="#FFC1D6" stroke="#FF8FB1" stroke-width="1"/>`,OS=[`<svg viewBox="0 0 132 112" aria-hidden="true"><style>
    .f1{animation:f1 2.6s ease-in infinite}@keyframes f1{0%{transform:translate(66px,2px) rotate(-20deg);opacity:0}15%{opacity:1}70%{transform:translate(66px,66px) rotate(40deg);opacity:1}100%{transform:translate(66px,68px) rotate(40deg);opacity:1}}
  </style>
  <g fill="#FCFAF0" stroke="#00539B" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <path d="M66 96c-16 0-30-8-36-22l-6-16c-1-4 4-6 6-3l5 8-3-16c-1-4 5-5 6-1l3 13-1-17c0-4 6-4 6 0l1 17 1-14c0-4 6-4 6 0l1 26c3 6 7 12 12 14z"/>
    <path d="M66 96c16 0 30-8 36-22l6-16c1-4-4-6-6-3l-5 8 3-16c1-4-5-5-6-1l-3 13 1-17c0-4-6-4-6 0l-1 17-1-14c0-4-6-4-6 0l-1 26c-3 6-7 12-12 14z"/>
  </g>
  <g class="f1">${hi(0,0)}</g></svg>`,`<svg viewBox="0 0 132 112" aria-hidden="true"><style>
    .p2{transform-origin:66px 96px;animation:p2 2.8s ease-in-out infinite}@keyframes p2{0%,20%{transform:rotate(0)}50%,85%{transform:rotate(-38deg)}100%{transform:rotate(0)}}
    .b2{animation:b2 2.8s ease-in-out infinite}@keyframes b2{0%,30%{opacity:0}50%,85%{opacity:1}100%{opacity:0}}
  </style>
  <g class="b2" fill="none" stroke="#4A3B36" stroke-width="2" stroke-linecap="round"><path d="M8 12c26 4 50 2 74 12M40 15c4 6 10 8 16 8"/></g>
  <g class="b2">${hi(30,18,10)}${hi(58,22,-20)}${hi(80,26,30)}</g>
  <g class="p2" fill="#FCFAF0" stroke="#00539B" stroke-width="2"><rect x="52" y="52" width="28" height="48" rx="5"/><circle cx="66" cy="94" r="1.6" fill="#00539B"/></g></svg>`,`<svg viewBox="0 0 132 112" aria-hidden="true"><style>
    .h3{animation:h3 2.4s ease-in-out infinite}@keyframes h3{0%,100%{transform:translateX(-18px)}50%{transform:translateX(18px)}}
    .s3{animation:s3 2.4s ease-out infinite}@keyframes s3{0%,40%{transform:translate(0,0) rotate(0)}70%{transform:translate(16px,-22px) rotate(90deg)}100%{transform:translate(22px,-4px) rotate(140deg)}}
  </style>
  <path d="M10 92h112" stroke="#00539B" stroke-width="2" stroke-linecap="round"/>
  ${hi(36,88,80)}${hi(52,89,100)}${hi(90,88,70)}${hi(104,89,95)}
  <g class="s3">${hi(70,86,85)}</g>
  <g class="h3" fill="none" stroke="#00539B" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M50 78c4-8 14-12 24-10l14 4c4 1 4 6 0 7l-12-1"/><path d="M60 70l-4-14M68 68l-2-16M76 69l1-14"/></g></svg>`],Ld=s=>new URL(`./brand/${s}`,document.baseURI).href;function jn(s,t="",e=""){const n=document.createElement(s);return t&&(n.className=t),e&&(n.innerHTML=e),n}function BS(s,t){const e=jn("section","gate");e.setAttribute("aria-label","Đón Gió Xuân");const n=()=>{const i=$e()==="vi";e.innerHTML=`
      <div class="gate__top">
        <div class="lang-switch" role="group" aria-label="Ngôn ngữ / Language">
          <button type="button" data-l="vi" aria-pressed="${i}">Tiếng Việt</button>
          <button type="button" data-l="en" aria-pressed="${!i}">English</button>
        </div>
      </div>
      <div class="gate__stage">
        <img class="gate__blossom" src="${Ld("blossom.webp")}" alt="" />
        <div class="gate__sign">
          <p class="gate__kicker">Trưng bày | <span class="en">Exhibition</span></p>
          <img class="gate__title" src="${Ld("title.webp")}" alt="Đón Gió Xuân – Welcoming The Spring Breeze" />
          <p class="gate__line">${W("exhibitionLine")}</p>
          <p class="gate__line en">${Ui("exhibitionLine")}</p>
          <button class="btn" type="button" data-start>${W("start")}<small>${Ui("start")}</small></button>
        </div>
      </div>
      <p class="gate__foot">${W("occasion")}<span class="gate__status" data-status></span></p>`,e.querySelectorAll("[data-l]").forEach(r=>r.addEventListener("click",()=>cp(r.dataset.l))),e.querySelector("[data-start]").addEventListener("click",t)};return n(),bh(n),s.appendChild(e),{el:e,setStatus(i){const r=e.querySelector("[data-status]");r&&(r.textContent=i)},leave(){e.classList.add("leaving"),setTimeout(()=>e.remove(),650)}}}function zS(s,t,e){return new Promise(n=>{const i=jn("div","sheet-backdrop");i.innerHTML=`
      <div class="sheet" role="dialog" aria-modal="true" aria-labelledby="perm-h">
        <h2 id="perm-h">${W("permTitle")}</h2>
        <p class="en">${Ui("permTitle")}</p>
        <div class="perm-item">${Sn.camera}<div><h3>${W("permCamera")}</h3><p>${W("permCameraBody")}</p></div></div>
        <div class="perm-item">${Sn.motion}<div><h3>${W("permMotion")}</h3><p>${W("permMotionBody")}</p></div></div>
        <h3 style="margin:14px 0 2px;font-weight:500;font-size:var(--s-md)">${W("whereTitle")}</h3>
        <div class="choice" role="radiogroup">
          <label><input type="radio" name="where" value="indoor" checked /> ${W("whereIn")}</label>
          <label><input type="radio" name="where" value="outdoor" /> ${W("whereOut")}</label>
        </div>
        ${t?`<label class="check"><input type="checkbox" data-xr /> <span>${W("xrOption")}</span></label>`:""}
        <div class="actions">
          <button class="btn" type="button" data-ok>${W("allow")}<small>${Ui("allow")}</small></button>
          <button class="link" type="button" data-back>${W("back")}</button>
        </div>
      </div>`,s.appendChild(i),i.querySelector("[data-ok]").focus();const r=a=>{i.remove(),n(a)};i.querySelector("[data-ok]").addEventListener("click",()=>{const a=i.querySelector("input[name=where]:checked").value,o=!!i.querySelector("[data-xr]")?.checked;e({mode:a,xr:o}),r({mode:a,xr:o})}),i.querySelector("[data-back]").addEventListener("click",()=>r(null))})}function lp(s){return new Promise(t=>{const e=["ob1","ob2","ob3"];let n=0;const i=jn("section","ob");i.setAttribute("role","dialog"),i.setAttribute("aria-live","polite");const r=()=>{i.innerHTML=`
        ${OS[n]}
        <p>${W(e[n])}</p>
        <p class="en">${Ui(e[n])}</p>
        <div class="ob__bar">
          <button class="link" type="button" data-skip>${W("skip")}</button>
          <div class="ob__dots" aria-hidden="true">${e.map((o,c)=>`<i class="${c===n?"on":""}"></i>`).join("")}</div>
          <button class="btn" type="button" data-next>${n<2?W("next"):W("done")}</button>
        </div>`,i.querySelector("[data-next]").addEventListener("click",()=>{n<2?(n++,r()):a()}),i.querySelector("[data-skip]").addEventListener("click",a)},a=()=>{i.remove();try{localStorage.setItem("dgx-onboarded","1")}catch{}t()};r(),s.appendChild(i)})}function HS(){try{return localStorage.getItem("dgx-onboarded")==="1"}catch{return!1}}let Id=0;function xe(s,t,e=3200,n=!1){s.querySelectorAll(".toast").forEach(r=>r.remove());const i=jn("div","toast"+(n?" warn":""),t);i.setAttribute("role","status"),s.appendChild(i),clearTimeout(Id),Id=window.setTimeout(()=>i.remove(),e)}function Rc(s,t,e){const n=jn("div","sheet-backdrop");n.innerHTML=`<div class="sheet" role="dialog" aria-modal="true">${t}</div>`;const i=()=>n.remove();return n.addEventListener("click",r=>{r.target===n&&i()}),s.appendChild(n),e?.(n.querySelector(".sheet"),i),i}const GS="[CẦN BỔ SUNG]",VS=200;function vh(){return typeof window<"u"&&"speechSynthesis"in window&&window.speechSynthesis&&typeof SpeechSynthesisUtterance<"u"?window.speechSynthesis:null}function WS(s){return s==="vi"?"vi-VN":"en-US"}function qS(s,t){const e=(t==="vi"?s.titleVi:s.titleEn).replace(/\s+[·–—]\s+/g,". "),n=(t==="vi"?s.descVi:s.descEn).trim();return n&&!n.startsWith(GS)?`${e}.
${n}`:`${e}.`}function XS(s,t=VS){const e=[],n=i=>{const r=i.trim();r&&e.push(r)};for(const i of s.split(/(?<=[.!?…:;])\s+|\n+/)){if(i.length<=t){n(i);continue}let r="";for(const a of i.split(/(?<=,)\s+|\s+/))r&&r.length+a.length+1>t&&(n(r),r=""),r=r?`${r} ${a}`:a;n(r)}return e}let xh=0,Bs=null;function Cc(s){if(s!==xh||!Bs)return;const t=Bs;Bs=null,t()}function hp(s,t,e){const n=vh();if(!n)return"unsupported";So();const i=++xh;Bs=e??null;const r=WS(t),a=n.getVoices(),o=a.find(l=>l.lang?.replace("_","-").toLowerCase()===r.toLowerCase())??a.find(l=>l.lang?.toLowerCase().startsWith(t)),c=XS(s);return c.forEach((l,h)=>{const u=new SpeechSynthesisUtterance(l);u.lang=r,o&&(u.voice=o),h===c.length-1&&(u.onend=()=>Cc(i),u.onerror=()=>Cc(i)),n.speak(u)}),c.length||Cc(i),a.length&&!o?"no-voice":"ok"}function So(){xh++,vh()?.cancel();const s=Bs;Bs=null,s?.()}const jS=['Trưng bày chuyên đề "Đón Gió Xuân – Welcoming The Spring Breeze" tại Di tích Nhà tù Hỏa Lò, Hà Nội.',"Trưng bày nhân kỷ niệm 97 năm ngày thành lập Đảng và chào xuân Đinh Mùi 2027.","Trưng bày nằm trong một hành lang dài khoảng 26 m. Khi đi vào, tường cam bên phải có các panel F, A1–A4, C1–C9 và D11; tường đá bên trái có các panel B.","Cuối hành lang (khu D) có bàn D14 và một cây đào thật; panel D11 là bảng Tết Nguyên Đán 1953.","Trong ứng dụng: chiếu camera vào panel để xem thông tin, vào ảnh chậu tôn hoặc thùng gỗ để xem hiện vật 3D; ngẩng lên để thấy cành đào, khum tay để hứng cánh hoa.","Dẫn đường thử nghiệm trong ứng dụng đưa khách tới Cổng Parabol, Đại học Bách khoa Hà Nội (đường Giải Phóng).","Nhà vệ sinh: [CẦN BỔ SUNG]","Giờ mở cửa: [CẦN BỔ SUNG]","Giá vé: [CẦN BỔ SUNG]","Lối ra, lối thoát hiểm: [CẦN BỔ SUNG]","Gửi đồ, wifi, nơi nghỉ chân: [CẦN BỔ SUNG]"],YS={factsVi:jS},KS="./api/ask",$S=25e3;function JS(s){const t=[...YS.factsVi];t.push("Các panel và hiện vật ứng dụng nhận ra được:");for(const e of s.items)t.push(`- ${e.titleVi}${e.descVi?`: ${e.descVi}`:""}`);return s.current&&t.push(`Khách đang xem: ${s.current.titleVi} (${s.current.titleEn}). ${s.current.descVi||"[CẦN BỔ SUNG]"}`),s.status&&t.push(`Tình trạng hiện tại: ${s.status}`),t.join(`
`)}async function QS(s,t=fetch){if(typeof navigator<"u"&&navigator.onLine===!1)return{error:"offline"};const e=new AbortController,n=setTimeout(()=>e.abort(),$S);try{const i=await t(KS,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({question:s.question,lang:s.lang,context:s.context,history:s.history.slice(-6),image:s.image??void 0}),signal:e.signal});if(i.status===429)return{error:"busy"};if(i.status===503)return{error:"no-key"};if(!i.ok)return{error:"failed"};const r=await i.json();return r.answer?{answer:r.answer}:{error:"failed"}}catch{return{error:navigator.onLine===!1?"offline":"failed"}}finally{clearTimeout(n)}}const Va=s=>s.replace(/[&<>"]/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"})[t]);class ZS{constructor(t,e){this.root=t,this.deps=e,this.history=[],this.log=[],this.back=null,this.busy=!1,this.withPhoto=!1,this.rec=null}get isOpen(){return!!this.back}open(t,e=!1){this.close(),this.withPhoto=e&&!!this.deps.photo;const n=jn("div","sheet-backdrop");n.innerHTML='<div class="sheet ask" role="dialog" aria-modal="true" aria-labelledby="ask-h"></div>',n.addEventListener("click",i=>{i.target===n&&this.close()}),this.root.appendChild(n),this.back=n,this.render(),t?this.send(t):n.querySelector(".ask__input")?.focus()}close(){this.rec?.stop(),this.back&&So(),this.back?.remove(),this.back=null}suggestions(){const t=this.deps.current(),e=$e()==="vi",n=[];if(t){const i=e?t.titleVi:t.titleEn;n.push(W("askAbout")(i),W("askMeaning")(i))}return n.push(W("askWhatIsThis"),W("askToilet"),W("askOverview")),n}render(){const t=this.back?.querySelector(".sheet");if(!t)return;const e=this.deps.current(),n=$e()==="vi",i=!!vh(),r=window,a=!!(r.SpeechRecognition||r.webkitSpeechRecognition);t.innerHTML=`
      <div class="ask__head"><h2 id="ask-h">${W("askTitle")}</h2>
        <button class="ask__x" type="button" data-x aria-label="${W("close")}">×</button></div>
      <p class="fine ask__note">${W("askNote")}</p>
      ${e?`<p class="ask__about">${W("askAboutNow")} <b>${Va(n?e.titleVi:e.titleEn)}</b></p>`:""}
      <div class="ask__log" aria-live="polite">${this.log.map(l=>`<div class="ask__msg ask__msg--${l.who}">${l.photo?"📷 ":""}${Va(l.text)}${l.who==="bot"&&i?` <button class="ask__say" type="button" data-say aria-label="${W("askSpeak")}">🔊</button>`:""}</div>`).join("")}${this.busy?`<div class="ask__msg ask__msg--bot ask__typing">${W("askThinking")}</div>`:""}</div>
      <div class="ask__chips">${this.suggestions().map(l=>`<button class="ask__chip" type="button" data-q="${Va(l)}">${Va(l)}</button>`).join("")}</div>
      <form class="ask__bar">
        <input class="ask__input" type="text" enterkeyhint="send" maxlength="300" placeholder="${W("askPlaceholder")}" aria-label="${W("askPlaceholder")}" ${this.busy?"disabled":""}/>
        ${a?`<button class="ask__icon" type="button" data-mic aria-label="${W("askMic")}" title="${W("askMic")}">🎤</button>`:""}
        <button class="ask__icon" type="button" data-photo aria-pressed="${this.withPhoto}" aria-label="${W("askPhoto")}" title="${W("askPhoto")}">📷</button>
        <button class="btn ask__send" type="submit" ${this.busy?"disabled":""}>${W("askSend")}</button>
      </form>`;const o=t.querySelector(".ask__log");o.scrollTop=o.scrollHeight,t.querySelector("[data-x]").addEventListener("click",()=>this.close()),t.querySelectorAll("[data-q]").forEach(l=>l.addEventListener("click",()=>this.send(l.dataset.q,l.dataset.q===W("askWhatIsThis")?!0:void 0)));const c=this.log.filter(l=>l.who==="bot");t.querySelectorAll("[data-say]").forEach((l,h)=>l.addEventListener("click",()=>this.say(c[h].text))),t.querySelector("[data-photo]").addEventListener("click",()=>{this.withPhoto=!this.withPhoto,this.render()}),t.querySelector("[data-mic]")?.addEventListener("click",()=>this.listen()),t.querySelector("form").addEventListener("submit",l=>{l.preventDefault();const h=t.querySelector(".ask__input").value.trim();h&&this.send(h)})}errorText(t){return W(t==="offline"?"askOffline":t==="busy"?"askBusy":t==="no-key"?"askNoKey":"askFailed")}async send(t,e){if(this.busy||!t.trim())return;const i=e??this.withPhoto?this.deps.photo():null;this.log.push({who:"me",text:t,photo:!!i}),this.busy=!0,this.render();const r=$e()==="vi"?"vi":"en",a=JS({items:this.deps.items,current:this.deps.current(),status:this.deps.status()}),o=await QS({question:t,lang:r,context:a,history:this.history,image:i});this.busy=!1,"answer"in o?(this.history.push({q:t,a:o.answer}),this.log.push({who:"bot",text:o.answer}),this.deps.speak()&&this.say(o.answer)):this.log.push({who:"err",text:this.errorText(o.error)}),this.back&&this.render()}say(t){hp(t,$e())}listen(){const t=window,e=t.SpeechRecognition||t.webkitSpeechRecognition;if(!e||this.busy)return;this.rec?.stop();const n=new e;n.lang=$e()==="vi"?"vi-VN":"en-US",n.interimResults=!1;const i=this.back?.querySelector("[data-mic]");i?.classList.add("on"),n.onresult=r=>{const a=r.results[0]?.[0]?.transcript?.trim();a&&this.send(a)},n.onend=n.onerror=()=>i?.classList.remove("on"),this.rec=n;try{n.start()}catch{i?.classList.remove("on")}}}const di=256,_h=17,tw=(s,t,e)=>`https://tile.openstreetmap.org/${s}/${t}/${e}.png`,ew=48;function Pc(s,t=_h){const e=di*2**t,n=Math.sin(s.lat*Math.PI/180);return{x:(s.lng+180)/360*e,y:(.5-Math.log((1+n)/(1-n))/(4*Math.PI))*e}}function nw(s,t=_h){return 156543.03392*Math.cos(s*Math.PI/180)/2**t}class iw{constructor(t){this.tiles=new Map,this.view=null,this.large=!1,this.dirty=!0,this.el=jn("div","minimap"),this.el.hidden=!0,this.el.innerHTML='<canvas aria-hidden="true"></canvas><a class="minimap__credit" href="https://www.openstreetmap.org/copyright" target="_blank" rel="noopener">© OpenStreetMap</a>',this.canvas=this.el.querySelector("canvas"),this.canvas.addEventListener("click",()=>{this.large=!this.large,this.el.classList.toggle("minimap--large",this.large),this.dirty=!0,this.draw()}),t.appendChild(this.el)}setVisible(t){this.el.hidden=!t}update(t){this.view=t,this.dirty=!0,this.draw()}tile(t,e,n){const i=2**t,r=`${t}/${(e%i+i)%i}/${n}`;let a=this.tiles.get(r);return a||(this.tiles.size>=ew&&this.tiles.delete(this.tiles.keys().next().value),a=new Image,a.decoding="async",a.onload=()=>{this.dirty=!0,this.draw()},a.src=tw(t,(e%i+i)%i,n),this.tiles.set(r,a)),a}draw(){const t=this.view;if(!t||this.el.hidden||!this.dirty)return;this.dirty=!1;const e=this.canvas.clientWidth||132,n=Math.min(2,window.devicePixelRatio||1),i=Math.round(e*n);this.canvas.width!==i&&(this.canvas.width=this.canvas.height=i);const r=this.canvas.getContext("2d");if(!r)return;const a=Pc(t.me);r.setTransform(1,0,0,1,0,0),r.fillStyle="#efe9da",r.fillRect(0,0,i,i),r.save(),r.translate(i/2,i/2),r.scale(n,n),r.rotate(-t.heading);const o=Math.ceil(e*.75);for(let f=Math.floor((a.y-o)/di);f<=Math.floor((a.y+o)/di);f++)for(let g=Math.floor((a.x-o)/di);g<=Math.floor((a.x+o)/di);g++){const b=this.tile(_h,g,f);b.complete&&b.naturalWidth&&r.drawImage(b,g*di-a.x,f*di-a.y,di,di)}const c=(t.route??[t.me,t.dest]).map(f=>{const g=Pc(f);return[g.x-a.x,g.y-a.y]});r.lineJoin=r.lineCap="round";for(const[f,g]of[[7,"rgba(255,255,255,0.9)"],[4,t.route?"#e2557f":"rgba(226,85,127,0.7)"]])r.lineWidth=f,r.strokeStyle=g,r.setLineDash(t.route?[]:[6,6]),r.beginPath(),c.forEach(([b,m],p)=>p?r.lineTo(b,m):r.moveTo(b,m)),r.stroke();r.setLineDash([]);const l=Pc(t.dest);r.fillStyle="#f5a93a",r.strokeStyle="#00539b",r.lineWidth=2,r.beginPath(),r.arc(l.x-a.x,l.y-a.y,6,0,Math.PI*2),r.fill(),r.stroke(),r.restore(),r.save(),r.translate(i/2,i/2),r.scale(n,n);const h=Number.isFinite(t.accuracy)?t.accuracy/nw(t.me.lat):0;h>6&&(r.fillStyle="rgba(10,127,198,0.15)",r.beginPath(),r.arc(0,0,Math.min(h,e/2),0,Math.PI*2),r.fill()),r.fillStyle="#0a7fc6",r.strokeStyle="#fff",r.lineWidth=2,r.beginPath(),r.moveTo(0,-9),r.lineTo(7,7),r.lineTo(0,3),r.lineTo(-7,7),r.closePath(),r.fill(),r.stroke();const u=Math.sin(-t.heading)*(e/2-11),d=-Math.cos(-t.heading)*(e/2-11);r.fillStyle="rgba(252,250,240,0.9)",r.beginPath(),r.arc(u,d,9,0,Math.PI*2),r.fill(),r.fillStyle="#00539b",r.font="600 11px sans-serif",r.textAlign="center",r.textBaseline="middle",r.fillText("N",u,d+.5),r.restore()}}const sw="markers/artifacts.mind",rw=[{id:"bucket",targetIndex:0,model:"models/hienvat/bucket.glb",image:"source/markers-src/artifact-bucket@3x.jpg",physicalWidth:.3,size:.8,offset:[0,0,.28],titleVi:"Chậu tôn có quai",titleEn:"Metal basin with handles",descVi:"",descEn:"",kind:"model"},{id:"crate",targetIndex:1,model:"models/hienvat/crate.glb",image:"source/markers-src/artifact-crate@3x.jpg",physicalWidth:.3,size:.8,offset:[0,0,.28],titleVi:"Thùng gỗ",titleEn:"Wooden crate",descVi:"",descEn:"",kind:"model"},{id:"panel-F",kind:"info",targetIndex:2,image:"source/markers-src/panel-F@400.jpg",physicalWidth:2,titleVi:"Panel F · Lời giới thiệu",titleEn:"Panel F · Introduction",descVi:`Mỗi độ xuân sang, đất trời giao hòa, cây cối đâm chồi nảy lộc, lòng người lại hân hoan đón chờ những khởi đầu mới. Trong không khí ấy, mùa xuân còn gắn liền với những sự kiện lịch sử trọng đại của Đảng, của đất nước.

Trong hành trình đi tìm mùa xuân cho đất nước, nhiều chiến sĩ cách mạng đã từng đón Tết giữa chốn ngục tù tăm tối. Tại Nhà tù Hỏa Lò, các hoạt động mừng xuân do Chi bộ Đảng tổ chức như: chào cờ, sáng tác thơ ca, diễn kịch… đã trở thành điểm tựa tinh thần, giúp người tù vơi đi nỗi nhớ nhà và thêm vững tin vào con đường đã chọn.

Trưng bày chuyên đề “Đón gió xuân” không chỉ tái hiện những cái Tết đặc biệt sau song sắt, mà còn tiếp tục nối dài mạch xuân qua hình ảnh các phiên chợ Tết truyền thống của người Hà Nội.`,descEn:`Each spring, when heaven and earth are in harmony, trees sprout and grow, people eagerly welcome fresh beginnings. In that atmosphere, spring is also closely associated with the significant historical milestones of the Party and the nation.

On the journey to seek spring for the nation, many revolutionaries once celebrated the Lunar New Year within the darkness of prison walls. At Hoa Lo Prison, spring and New Year celebrations organized by the Party cell such as flag salutes, poetry and song compositions, and theatrical performances became a source of spiritual strength, easing the prisoners’ longing for home and strengthening their faith in the path they had chosen.

The thematic exhibition “Welcoming the Spring Breeze” not only recreates special Tet holidays behind bars, but also carries forward the festive spirit of spring through the images of Hanoi’s traditional Tet markets.`},{id:"panel-A1",kind:"info",targetIndex:3,image:"source/markers-src/panel-A1@400.jpg",physicalWidth:2.5,titleVi:"Panel A1 · Phần A, đoạn 1",titleEn:"Panel A1 · Section A, part 1",descVi:"[CẦN BỔ SUNG] Nội dung panel do BTC cung cấp.",descEn:"[CẦN BỔ SUNG] Panel text to be provided by the organisers."},{id:"panel-A2",kind:"info",targetIndex:4,image:"source/markers-src/panel-A2@400.jpg",physicalWidth:2.5,titleVi:"Panel A2 · Phần A, đoạn 2",titleEn:"Panel A2 · Section A, part 2",descVi:"[CẦN BỔ SUNG] Nội dung panel do BTC cung cấp.",descEn:"[CẦN BỔ SUNG] Panel text to be provided by the organisers."},{id:"panel-A3",kind:"info",targetIndex:5,image:"source/markers-src/panel-A3@400.jpg",physicalWidth:2.5,titleVi:"Panel A3 · Phần A, đoạn 3",titleEn:"Panel A3 · Section A, part 3",descVi:"[CẦN BỔ SUNG] Nội dung panel do BTC cung cấp.",descEn:"[CẦN BỔ SUNG] Panel text to be provided by the organisers."},{id:"panel-A4",kind:"info",targetIndex:6,image:"source/markers-src/panel-A4@400.jpg",physicalWidth:2.5,titleVi:"Panel A4 · Phần A, đoạn 4",titleEn:"Panel A4 · Section A, part 4",descVi:"[CẦN BỔ SUNG] Nội dung panel do BTC cung cấp.",descEn:"[CẦN BỔ SUNG] Panel text to be provided by the organisers."},{id:"panel-B2",kind:"info",targetIndex:7,image:"source/markers-src/panel-B2@400.jpg",physicalWidth:3,titleVi:"Panel B2 · Chi bộ Đảng",titleEn:"Panel B2 · The Party cell",descVi:"Sau khi Đảng Cộng sản Việt Nam ra đời năm 1930, thực dân Pháp tìm mọi biện pháp để đàn áp phong trào cách mạng. Chúng tăng cường bắt, giam các chiến sĩ cách mạng và quần chúng yêu nước, trong đó có các đồng chí là cán bộ lãnh đạo của Đảng. Khi vào tù, các đồng chí đã nghĩ ngay đến việc thành lập Chi bộ Đảng. Năm 1931 – 1932, Chi bộ Đảng Nhà tù Hỏa Lò được thành lập do đồng chí Hạ Bá Cang (Hoàng Quốc Việt) làm Bí thư.",descEn:"After the Communist Party of Vietnam was founded in 1930, the French colonialist authorities sought every way to suppress the revolutionary movement. They intensified the arrest and imprisonment of revolutionary soldiers and patriots, including Party leaders. Once in prison, the comrades immediately thought of forming a Party cell. During 1931–1932, the Hoa Lo Prison Party Cell was established, with comrade Ha Ba Cang (Hoang Quoc Viet) serving as Secretary."},{id:"panel-C4",kind:"info",targetIndex:8,image:"source/markers-src/panel-C4@400.jpg",physicalWidth:1,titleVi:"Panel C4 · Chợ Tết xưa",titleEn:"Panel C4 · Tết market in the past",descVi:"[CẦN BỔ SUNG] Nội dung panel do BTC cung cấp.",descEn:"[CẦN BỔ SUNG] Panel text to be provided by the organisers."},{id:"panel-C8",kind:"info",targetIndex:9,image:"source/markers-src/panel-C8@400.jpg",physicalWidth:1,titleVi:"Panel C8 · Chợ Tết nay",titleEn:"Panel C8 · Tết market today",descVi:"[CẦN BỔ SUNG] Nội dung panel do BTC cung cấp.",descEn:"[CẦN BỔ SUNG] Panel text to be provided by the organisers."},{id:"panel-D11",kind:"info",targetIndex:10,image:"source/markers-src/panel-D11@400.jpg",physicalWidth:5,titleVi:"Panel D11 · Bàn quà, cây đào – bảng Tết Nguyên Đán 1953",titleEn:"Panel D11 · Gift table and peach tree – the 1953 Lunar New Year board",descVi:`Bữa tiệc tàu bay

Giám ngục Hỏa Lò hạn chế các gia đình tiếp tế thức ăn, thuốc chữa bệnh, thuốc lá… cho người thân trong tù. Do vậy, một số gia đình đã ném quà qua tường cao vào nhà tù, ném đúng vào giờ ra sân chơi và nhắm trúng đích là gốc cây bàng. Những quà nhận được kiểu này, người tù gọi là hàng “tàu bay”.

Có lần, người bên ngoài ném vào thư chúc Tết, bánh kẹo, thuốc lá… cho anh em bên trong liên hoan mừng xuân, chỉ một số ít người biết được và kín đáo gọi đây là “Bữa tiệc tàu bay”.`,descEn:`Flying feast

The Hoa Lo Prison administration restricted families from supplying food, medicine, cigarettes, and other necessities to their imprisoned relatives. As a result, some families threw packages over the high walls into the prison yard, timing them to coincide with recreation hours and aiming for the base of the almond tree. Prisoners called these received items “flying goods.”

At times, people outside would toss in New Year’s greeting letters, sweets, and tobacco for the inmates inside to celebrate spring together. Only a few people knew about it, and they discreetly referred to it as a “Flying feast.”`},{id:"gate-G1",kind:"enter",targetIndex:11,image:"source/markers-src/panel-G1@400.jpg",physicalWidth:2,titleVi:"Cổng triển lãm G1",titleEn:"Exhibition gate G1",descVi:"",descEn:""},{id:"gate-G2",kind:"enter",targetIndex:12,image:"source/markers-src/panel-G2@400.jpg",physicalWidth:.6,titleVi:"Biển tên trưng bày G2",titleEn:"Exhibition sign G2",descVi:"",descEn:""}],up={targets:sw,items:rw},aw=2,ow=2500;class cw{constructor(t,e,n,i){this.feed=t,this.targets=e,this.targetsUrl=n,this.longEdgeFovDeg=i,this.status="off",this.paused=!1,this.current=-1,this.stats={frames:0,matches:0,tracks:0,err:""},this.matrix=new _t,this.controller=null,this.running=!1,this.dims=[],this.mvt=null,this.trackIdx=-1,this.warm=0,this.miss=0,this.showing=-1,this.hitIdx=-1,this.hits=0,this.seenAt=0,this.raw=new _t,this.hasPose=!1,this.pos=new R,this.quat=new Kt,this.scl=new R,this.tPos=new R,this.tQuat=new Kt,this.tScl=new R}async start(){if(!(this.status==="loading"||this.status==="ready")&&this.feed.ready){this.status="loading";try{const{Controller:t}=await tp(async()=>{const{Controller:l}=await import("./mindar-image.prod-D0hmC17B.js");return{Controller:l}},[],import.meta.url),e=this.feed.video,n=e.videoWidth,i=e.videoHeight;e.width=n,e.height=i;const r=new t({inputWidth:n,inputHeight:i,maxTrack:1}),a=this.feed.videoFocalPx(this.longEdgeFovDeg);r.projectionTransform=[[a,0,n/2],[0,a,i/2],[0,0,1]];const o=new URL(this.targetsUrl,document.baseURI).href,{dimensions:c}=await r.addImageTargets(o);this.dims=c,r.dummyRun(e),this.controller=r,this.status="ready",this.loop()}catch(t){console.warn("[artifact] không khởi động được nhận diện ảnh",t),this.status="error"}}}stop(){this.running=!1}async loop(){if(this.running)return;this.running=!0;const t=this.controller,e=this.targets.map(i=>i.targetIndex);let n=0;for(;this.running;){const r=this.trackIdx>=0?50:125;await new Promise(l=>requestAnimationFrame(()=>l()));const a=performance.now();if(this.paused||!this.feed.ready||document.hidden||a-n<r)continue;n=a;const o=this.feed.video;if(o.readyState<2)continue;o.width!==o.videoWidth&&(o.width=o.videoWidth,o.height=o.videoHeight);let c=null;try{if(c=t.inputLoader.loadInput(o),this.stats.frames++,this.trackIdx<0){const h=await t._detectAndMatch(c,e);h.targetIndex!==-1&&(this.stats.matches++,this.targets.find(u=>u.targetIndex===h.targetIndex)?.poseless?this.poselessHit(h.targetIndex,a):(this.trackIdx=h.targetIndex,this.mvt=h.modelViewTransform,this.warm=0))}if(this.trackIdx>=0&&this.mvt){const h=await t._trackAndUpdate(c,this.mvt,this.trackIdx);h?(this.stats.tracks++,this.mvt=h,this.miss=0,this.warm++,this.updateMatrix(t._glModelViewMatrix(h,this.trackIdx),this.trackIdx),this.showing!==this.trackIdx&&this.warm>=3&&(this.showing=this.trackIdx,this.current=this.trackIdx,this.hasPose=!1,this.onFound?.(this.trackIdx))):(this.trackIdx=-1,this.mvt=null)}const l=this.showing>=0&&!!this.targets.find(h=>h.targetIndex===this.showing)?.poseless;if(l&&a-this.seenAt>ow){const h=this.showing;this.showing=-1,this.current=-1,this.hits=0,this.onLost?.(h)}else if(!l&&this.trackIdx<0&&this.showing>=0&&(this.miss++,this.miss>4)){const h=this.showing;this.showing=-1,this.current=-1,this.onLost?.(h)}}catch(l){console.warn("[artifact]",l),this.stats.err=String(l)}finally{c?.dispose()}}}poselessHit(t,e){this.hits=t===this.hitIdx?this.hits+1:1,this.hitIdx=t,t===this.showing&&(this.seenAt=e),this.hits>=aw&&this.showing!==t&&(this.showing=t,this.current=t,this.seenAt=e,this.hasPose=!1,this.onFound?.(t))}updateMatrix(t,e){const[n,i]=this.dims[e],a=(this.targets.find(c=>c.targetIndex===e)?.physicalWidth??.3)/n,o=new _t().compose(new R(n/2,i/2,0),new Kt,new R(n,n,n));if(this.raw.fromArray(t).premultiply(new _t().makeScale(a,a,a)).multiply(o),this.feed.mirrored){const c=new _t().makeScale(-1,1,1);this.raw.premultiply(c).multiply(c)}this.raw.decompose(this.tPos,this.tQuat,this.tScl),this.hasPose||(this.pos.copy(this.tPos),this.quat.copy(this.tQuat),this.scl.copy(this.tScl),this.hasPose=!0)}smooth(t){if(!this.hasPose)return;const e=1-Math.exp(-t*14);this.pos.lerp(this.tPos,e),this.quat.slerp(this.tQuat,e),this.scl.lerp(this.tScl,e),this.matrix.compose(this.pos,this.quat,this.scl)}get poseReady(){return this.hasPose}}function Dd(s,t){if(t===rm)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),s;if(t===Sl||t===uf){let e=s.getIndex();if(e===null){const a=[],o=s.getAttribute("position");if(o!==void 0){for(let c=0;c<o.count;c++)a.push(c);s.setIndex(a),e=s.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),s}const n=e.count-2,i=[];if(t===Sl)for(let a=1;a<=n;a++)i.push(e.getX(0)),i.push(e.getX(a)),i.push(e.getX(a+1));else for(let a=0;a<n;a++)a%2===0?(i.push(e.getX(a)),i.push(e.getX(a+1)),i.push(e.getX(a+2))):(i.push(e.getX(a+2)),i.push(e.getX(a+1)),i.push(e.getX(a)));i.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");const r=s.clone();return r.setIndex(i),r.clearGroups(),r}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",t),s}class lw extends nr{constructor(t){super(t),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(e){return new pw(e)}),this.register(function(e){return new mw(e)}),this.register(function(e){return new ww(e)}),this.register(function(e){return new Aw(e)}),this.register(function(e){return new Ew(e)}),this.register(function(e){return new bw(e)}),this.register(function(e){return new vw(e)}),this.register(function(e){return new xw(e)}),this.register(function(e){return new _w(e)}),this.register(function(e){return new fw(e)}),this.register(function(e){return new yw(e)}),this.register(function(e){return new gw(e)}),this.register(function(e){return new Sw(e)}),this.register(function(e){return new Mw(e)}),this.register(function(e){return new uw(e)}),this.register(function(e){return new Tw(e)}),this.register(function(e){return new Rw(e)})}load(t,e,n,i){const r=this;let a;if(this.resourcePath!=="")a=this.resourcePath;else if(this.path!==""){const l=Ur.extractUrlBase(t);a=Ur.resolveURL(l,this.path)}else a=Ur.extractUrlBase(t);this.manager.itemStart(t);const o=function(l){i?i(l):console.error(l),r.manager.itemError(t),r.manager.itemEnd(t)},c=new Yf(this.manager);c.setPath(this.path),c.setResponseType("arraybuffer"),c.setRequestHeader(this.requestHeader),c.setWithCredentials(this.withCredentials),c.load(t,function(l){try{r.parse(l,a,function(h){e(h),r.manager.itemEnd(t)},o)}catch(h){o(h)}},n,o)}setDRACOLoader(t){return this.dracoLoader=t,this}setKTX2Loader(t){return this.ktx2Loader=t,this}setMeshoptDecoder(t){return this.meshoptDecoder=t,this}register(t){return this.pluginCallbacks.indexOf(t)===-1&&this.pluginCallbacks.push(t),this}unregister(t){return this.pluginCallbacks.indexOf(t)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(t),1),this}parse(t,e,n,i){let r;const a={},o={},c=new TextDecoder;if(typeof t=="string")r=JSON.parse(t);else if(t instanceof ArrayBuffer)if(c.decode(new Uint8Array(t,0,4))===dp){try{a[Vt.KHR_BINARY_GLTF]=new Cw(t)}catch(u){i&&i(u);return}r=JSON.parse(a[Vt.KHR_BINARY_GLTF].content)}else r=JSON.parse(c.decode(t));else r=t;if(r.asset===void 0||r.asset.version[0]<2){i&&i(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const l=new Gw(r,{path:e||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});l.fileLoader.setRequestHeader(this.requestHeader);for(let h=0;h<this.pluginCallbacks.length;h++){const u=this.pluginCallbacks[h](l);u.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),o[u.name]=u,a[u.name]=!0}if(r.extensionsUsed)for(let h=0;h<r.extensionsUsed.length;++h){const u=r.extensionsUsed[h],d=r.extensionsRequired||[];switch(u){case Vt.KHR_MATERIALS_UNLIT:a[u]=new dw;break;case Vt.KHR_DRACO_MESH_COMPRESSION:a[u]=new Pw(r,this.dracoLoader);break;case Vt.KHR_TEXTURE_TRANSFORM:a[u]=new Lw;break;case Vt.KHR_MESH_QUANTIZATION:a[u]=new Iw;break;default:d.indexOf(u)>=0&&o[u]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+u+'".')}}l.setExtensions(a),l.setPlugins(o),l.parse(n,i)}parseAsync(t,e){const n=this;return new Promise(function(i,r){n.parse(t,e,i,r)})}}function hw(){let s={};return{get:function(t){return s[t]},add:function(t,e){s[t]=e},remove:function(t){delete s[t]},removeAll:function(){s={}}}}const Vt={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class uw{constructor(t){this.parser=t,this.name=Vt.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const t=this.parser,e=this.parser.json.nodes||[];for(let n=0,i=e.length;n<i;n++){const r=e[n];r.extensions&&r.extensions[this.name]&&r.extensions[this.name].light!==void 0&&t._addNodeRef(this.cache,r.extensions[this.name].light)}}_loadLight(t){const e=this.parser,n="light:"+t;let i=e.cache.get(n);if(i)return i;const r=e.json,c=((r.extensions&&r.extensions[this.name]||{}).lights||[])[t];let l;const h=new Et(16777215);c.color!==void 0&&h.setRGB(c.color[0],c.color[1],c.color[2],He);const u=c.range!==void 0?c.range:0;switch(c.type){case"directional":l=new $f(h),l.target.position.set(0,0,-1),l.add(l.target);break;case"point":l=new Kf(h),l.distance=u;break;case"spot":l=new V_(h),l.distance=u,c.spot=c.spot||{},c.spot.innerConeAngle=c.spot.innerConeAngle!==void 0?c.spot.innerConeAngle:0,c.spot.outerConeAngle=c.spot.outerConeAngle!==void 0?c.spot.outerConeAngle:Math.PI/4,l.angle=c.spot.outerConeAngle,l.penumbra=1-c.spot.innerConeAngle/c.spot.outerConeAngle,l.target.position.set(0,0,-1),l.add(l.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+c.type)}return l.position.set(0,0,0),l.decay=2,fi(l,c),c.intensity!==void 0&&(l.intensity=c.intensity),l.name=e.createUniqueName(c.name||"light_"+t),i=Promise.resolve(l),e.cache.add(n,i),i}getDependency(t,e){if(t==="light")return this._loadLight(e)}createNodeAttachment(t){const e=this,n=this.parser,r=n.json.nodes[t],o=(r.extensions&&r.extensions[this.name]||{}).light;return o===void 0?null:this._loadLight(o).then(function(c){return n._getNodeRef(e.cache,o,c)})}}class dw{constructor(){this.name=Vt.KHR_MATERIALS_UNLIT}getMaterialType(){return Qe}extendParams(t,e,n){const i=[];t.color=new Et(1,1,1),t.opacity=1;const r=e.pbrMetallicRoughness;if(r){if(Array.isArray(r.baseColorFactor)){const a=r.baseColorFactor;t.color.setRGB(a[0],a[1],a[2],He),t.opacity=a[3]}r.baseColorTexture!==void 0&&i.push(n.assignTexture(t,"map",r.baseColorTexture,Fe))}return Promise.all(i)}}class fw{constructor(t){this.parser=t,this.name=Vt.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(t,e){const i=this.parser.json.materials[t];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=i.extensions[this.name].emissiveStrength;return r!==void 0&&(e.emissiveIntensity=r),Promise.resolve()}}class pw{constructor(t){this.parser=t,this.name=Vt.KHR_MATERIALS_CLEARCOAT}getMaterialType(t){const n=this.parser.json.materials[t];return!n.extensions||!n.extensions[this.name]?null:ti}extendMaterialParams(t,e){const n=this.parser,i=n.json.materials[t];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],a=i.extensions[this.name];if(a.clearcoatFactor!==void 0&&(e.clearcoat=a.clearcoatFactor),a.clearcoatTexture!==void 0&&r.push(n.assignTexture(e,"clearcoatMap",a.clearcoatTexture)),a.clearcoatRoughnessFactor!==void 0&&(e.clearcoatRoughness=a.clearcoatRoughnessFactor),a.clearcoatRoughnessTexture!==void 0&&r.push(n.assignTexture(e,"clearcoatRoughnessMap",a.clearcoatRoughnessTexture)),a.clearcoatNormalTexture!==void 0&&(r.push(n.assignTexture(e,"clearcoatNormalMap",a.clearcoatNormalTexture)),a.clearcoatNormalTexture.scale!==void 0)){const o=a.clearcoatNormalTexture.scale;e.clearcoatNormalScale=new it(o,o)}return Promise.all(r)}}class mw{constructor(t){this.parser=t,this.name=Vt.KHR_MATERIALS_DISPERSION}getMaterialType(t){const n=this.parser.json.materials[t];return!n.extensions||!n.extensions[this.name]?null:ti}extendMaterialParams(t,e){const i=this.parser.json.materials[t];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=i.extensions[this.name];return e.dispersion=r.dispersion!==void 0?r.dispersion:0,Promise.resolve()}}class gw{constructor(t){this.parser=t,this.name=Vt.KHR_MATERIALS_IRIDESCENCE}getMaterialType(t){const n=this.parser.json.materials[t];return!n.extensions||!n.extensions[this.name]?null:ti}extendMaterialParams(t,e){const n=this.parser,i=n.json.materials[t];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],a=i.extensions[this.name];return a.iridescenceFactor!==void 0&&(e.iridescence=a.iridescenceFactor),a.iridescenceTexture!==void 0&&r.push(n.assignTexture(e,"iridescenceMap",a.iridescenceTexture)),a.iridescenceIor!==void 0&&(e.iridescenceIOR=a.iridescenceIor),e.iridescenceThicknessRange===void 0&&(e.iridescenceThicknessRange=[100,400]),a.iridescenceThicknessMinimum!==void 0&&(e.iridescenceThicknessRange[0]=a.iridescenceThicknessMinimum),a.iridescenceThicknessMaximum!==void 0&&(e.iridescenceThicknessRange[1]=a.iridescenceThicknessMaximum),a.iridescenceThicknessTexture!==void 0&&r.push(n.assignTexture(e,"iridescenceThicknessMap",a.iridescenceThicknessTexture)),Promise.all(r)}}class bw{constructor(t){this.parser=t,this.name=Vt.KHR_MATERIALS_SHEEN}getMaterialType(t){const n=this.parser.json.materials[t];return!n.extensions||!n.extensions[this.name]?null:ti}extendMaterialParams(t,e){const n=this.parser,i=n.json.materials[t];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[];e.sheenColor=new Et(0,0,0),e.sheenRoughness=0,e.sheen=1;const a=i.extensions[this.name];if(a.sheenColorFactor!==void 0){const o=a.sheenColorFactor;e.sheenColor.setRGB(o[0],o[1],o[2],He)}return a.sheenRoughnessFactor!==void 0&&(e.sheenRoughness=a.sheenRoughnessFactor),a.sheenColorTexture!==void 0&&r.push(n.assignTexture(e,"sheenColorMap",a.sheenColorTexture,Fe)),a.sheenRoughnessTexture!==void 0&&r.push(n.assignTexture(e,"sheenRoughnessMap",a.sheenRoughnessTexture)),Promise.all(r)}}class vw{constructor(t){this.parser=t,this.name=Vt.KHR_MATERIALS_TRANSMISSION}getMaterialType(t){const n=this.parser.json.materials[t];return!n.extensions||!n.extensions[this.name]?null:ti}extendMaterialParams(t,e){const n=this.parser,i=n.json.materials[t];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],a=i.extensions[this.name];return a.transmissionFactor!==void 0&&(e.transmission=a.transmissionFactor),a.transmissionTexture!==void 0&&r.push(n.assignTexture(e,"transmissionMap",a.transmissionTexture)),Promise.all(r)}}class xw{constructor(t){this.parser=t,this.name=Vt.KHR_MATERIALS_VOLUME}getMaterialType(t){const n=this.parser.json.materials[t];return!n.extensions||!n.extensions[this.name]?null:ti}extendMaterialParams(t,e){const n=this.parser,i=n.json.materials[t];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],a=i.extensions[this.name];e.thickness=a.thicknessFactor!==void 0?a.thicknessFactor:0,a.thicknessTexture!==void 0&&r.push(n.assignTexture(e,"thicknessMap",a.thicknessTexture)),e.attenuationDistance=a.attenuationDistance||1/0;const o=a.attenuationColor||[1,1,1];return e.attenuationColor=new Et().setRGB(o[0],o[1],o[2],He),Promise.all(r)}}class _w{constructor(t){this.parser=t,this.name=Vt.KHR_MATERIALS_IOR}getMaterialType(t){const n=this.parser.json.materials[t];return!n.extensions||!n.extensions[this.name]?null:ti}extendMaterialParams(t,e){const i=this.parser.json.materials[t];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=i.extensions[this.name];return e.ior=r.ior!==void 0?r.ior:1.5,Promise.resolve()}}class yw{constructor(t){this.parser=t,this.name=Vt.KHR_MATERIALS_SPECULAR}getMaterialType(t){const n=this.parser.json.materials[t];return!n.extensions||!n.extensions[this.name]?null:ti}extendMaterialParams(t,e){const n=this.parser,i=n.json.materials[t];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],a=i.extensions[this.name];e.specularIntensity=a.specularFactor!==void 0?a.specularFactor:1,a.specularTexture!==void 0&&r.push(n.assignTexture(e,"specularIntensityMap",a.specularTexture));const o=a.specularColorFactor||[1,1,1];return e.specularColor=new Et().setRGB(o[0],o[1],o[2],He),a.specularColorTexture!==void 0&&r.push(n.assignTexture(e,"specularColorMap",a.specularColorTexture,Fe)),Promise.all(r)}}class Mw{constructor(t){this.parser=t,this.name=Vt.EXT_MATERIALS_BUMP}getMaterialType(t){const n=this.parser.json.materials[t];return!n.extensions||!n.extensions[this.name]?null:ti}extendMaterialParams(t,e){const n=this.parser,i=n.json.materials[t];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],a=i.extensions[this.name];return e.bumpScale=a.bumpFactor!==void 0?a.bumpFactor:1,a.bumpTexture!==void 0&&r.push(n.assignTexture(e,"bumpMap",a.bumpTexture)),Promise.all(r)}}class Sw{constructor(t){this.parser=t,this.name=Vt.KHR_MATERIALS_ANISOTROPY}getMaterialType(t){const n=this.parser.json.materials[t];return!n.extensions||!n.extensions[this.name]?null:ti}extendMaterialParams(t,e){const n=this.parser,i=n.json.materials[t];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],a=i.extensions[this.name];return a.anisotropyStrength!==void 0&&(e.anisotropy=a.anisotropyStrength),a.anisotropyRotation!==void 0&&(e.anisotropyRotation=a.anisotropyRotation),a.anisotropyTexture!==void 0&&r.push(n.assignTexture(e,"anisotropyMap",a.anisotropyTexture)),Promise.all(r)}}class ww{constructor(t){this.parser=t,this.name=Vt.KHR_TEXTURE_BASISU}loadTexture(t){const e=this.parser,n=e.json,i=n.textures[t];if(!i.extensions||!i.extensions[this.name])return null;const r=i.extensions[this.name],a=e.options.ktx2Loader;if(!a){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return e.loadTextureImage(t,r.source,a)}}class Aw{constructor(t){this.parser=t,this.name=Vt.EXT_TEXTURE_WEBP,this.isSupported=null}loadTexture(t){const e=this.name,n=this.parser,i=n.json,r=i.textures[t];if(!r.extensions||!r.extensions[e])return null;const a=r.extensions[e],o=i.images[a.source];let c=n.textureLoader;if(o.uri){const l=n.options.manager.getHandler(o.uri);l!==null&&(c=l)}return this.detectSupport().then(function(l){if(l)return n.loadTextureImage(t,a.source,c);if(i.extensionsRequired&&i.extensionsRequired.indexOf(e)>=0)throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");return n.loadTexture(t)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(t){const e=new Image;e.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",e.onload=e.onerror=function(){t(e.height===1)}})),this.isSupported}}class Ew{constructor(t){this.parser=t,this.name=Vt.EXT_TEXTURE_AVIF,this.isSupported=null}loadTexture(t){const e=this.name,n=this.parser,i=n.json,r=i.textures[t];if(!r.extensions||!r.extensions[e])return null;const a=r.extensions[e],o=i.images[a.source];let c=n.textureLoader;if(o.uri){const l=n.options.manager.getHandler(o.uri);l!==null&&(c=l)}return this.detectSupport().then(function(l){if(l)return n.loadTextureImage(t,a.source,c);if(i.extensionsRequired&&i.extensionsRequired.indexOf(e)>=0)throw new Error("THREE.GLTFLoader: AVIF required by asset but unsupported.");return n.loadTexture(t)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(t){const e=new Image;e.src="data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAABcAAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAEAAAABAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAMAAAAABNjb2xybmNseAACAAIABoAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAAB9tZGF0EgAKCBgABogQEDQgMgkQAAAAB8dSLfI=",e.onload=e.onerror=function(){t(e.height===1)}})),this.isSupported}}class Tw{constructor(t){this.name=Vt.EXT_MESHOPT_COMPRESSION,this.parser=t}loadBufferView(t){const e=this.parser.json,n=e.bufferViews[t];if(n.extensions&&n.extensions[this.name]){const i=n.extensions[this.name],r=this.parser.getDependency("buffer",i.buffer),a=this.parser.options.meshoptDecoder;if(!a||!a.supported){if(e.extensionsRequired&&e.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return r.then(function(o){const c=i.byteOffset||0,l=i.byteLength||0,h=i.count,u=i.byteStride,d=new Uint8Array(o,c,l);return a.decodeGltfBufferAsync?a.decodeGltfBufferAsync(h,u,d,i.mode,i.filter).then(function(f){return f.buffer}):a.ready.then(function(){const f=new ArrayBuffer(h*u);return a.decodeGltfBuffer(new Uint8Array(f),h,u,d,i.mode,i.filter),f})})}else return null}}class Rw{constructor(t){this.name=Vt.EXT_MESH_GPU_INSTANCING,this.parser=t}createNodeMesh(t){const e=this.parser.json,n=e.nodes[t];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;const i=e.meshes[n.mesh];for(const l of i.primitives)if(l.mode!==wn.TRIANGLES&&l.mode!==wn.TRIANGLE_STRIP&&l.mode!==wn.TRIANGLE_FAN&&l.mode!==void 0)return null;const a=n.extensions[this.name].attributes,o=[],c={};for(const l in a)o.push(this.parser.getDependency("accessor",a[l]).then(h=>(c[l]=h,c[l])));return o.length<1?null:(o.push(this.parser.createNodeMesh(t)),Promise.all(o).then(l=>{const h=l.pop(),u=h.isGroup?h.children:[h],d=l[0].count,f=[];for(const g of u){const b=new _t,m=new R,p=new Kt,y=new R(1,1,1),v=new Fi(g.geometry,g.material,d);for(let _=0;_<d;_++)c.TRANSLATION&&m.fromBufferAttribute(c.TRANSLATION,_),c.ROTATION&&p.fromBufferAttribute(c.ROTATION,_),c.SCALE&&y.fromBufferAttribute(c.SCALE,_),v.setMatrixAt(_,b.compose(m,p,y));for(const _ in c)if(_==="_COLOR_0"){const M=c[_];v.instanceColor=new Fn(M.array,M.itemSize,M.normalized)}else _!=="TRANSLATION"&&_!=="ROTATION"&&_!=="SCALE"&&g.geometry.setAttribute(_,c[_]);ge.prototype.copy.call(v,g),this.parser.assignFinalMaterial(v),f.push(v)}return h.isGroup?(h.clear(),h.add(...f),h):f[0]}))}}const dp="glTF",Er=12,Nd={JSON:1313821514,BIN:5130562};class Cw{constructor(t){this.name=Vt.KHR_BINARY_GLTF,this.content=null,this.body=null;const e=new DataView(t,0,Er),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(t.slice(0,4))),version:e.getUint32(4,!0),length:e.getUint32(8,!0)},this.header.magic!==dp)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const i=this.header.length-Er,r=new DataView(t,Er);let a=0;for(;a<i;){const o=r.getUint32(a,!0);a+=4;const c=r.getUint32(a,!0);if(a+=4,c===Nd.JSON){const l=new Uint8Array(t,Er+a,o);this.content=n.decode(l)}else if(c===Nd.BIN){const l=Er+a;this.body=t.slice(l,l+o)}a+=o}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class Pw{constructor(t,e){if(!e)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=Vt.KHR_DRACO_MESH_COMPRESSION,this.json=t,this.dracoLoader=e,this.dracoLoader.preload()}decodePrimitive(t,e){const n=this.json,i=this.dracoLoader,r=t.extensions[this.name].bufferView,a=t.extensions[this.name].attributes,o={},c={},l={};for(const h in a){const u=Fl[h]||h.toLowerCase();o[u]=a[h]}for(const h in t.attributes){const u=Fl[h]||h.toLowerCase();if(a[h]!==void 0){const d=n.accessors[t.attributes[h]],f=zs[d.componentType];l[u]=f.name,c[u]=d.normalized===!0}}return e.getDependency("bufferView",r).then(function(h){return new Promise(function(u,d){i.decodeDracoFile(h,function(f){for(const g in f.attributes){const b=f.attributes[g],m=c[g];m!==void 0&&(b.normalized=m)}u(f)},o,l,He,d)})})}}class Lw{constructor(){this.name=Vt.KHR_TEXTURE_TRANSFORM}extendTexture(t,e){return(e.texCoord===void 0||e.texCoord===t.channel)&&e.offset===void 0&&e.rotation===void 0&&e.scale===void 0||(t=t.clone(),e.texCoord!==void 0&&(t.channel=e.texCoord),e.offset!==void 0&&t.offset.fromArray(e.offset),e.rotation!==void 0&&(t.rotation=e.rotation),e.scale!==void 0&&t.repeat.fromArray(e.scale),t.needsUpdate=!0),t}}class Iw{constructor(){this.name=Vt.KHR_MESH_QUANTIZATION}}class fp extends $r{constructor(t,e,n,i){super(t,e,n,i)}copySampleValue_(t){const e=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=t*i*3+i;for(let a=0;a!==i;a++)e[a]=n[r+a];return e}interpolate_(t,e,n,i){const r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=o*2,l=o*3,h=i-e,u=(n-e)/h,d=u*u,f=d*u,g=t*l,b=g-l,m=-2*f+3*d,p=f-d,y=1-m,v=p-d+u;for(let _=0;_!==o;_++){const M=a[b+_+o],E=a[b+_+c]*h,S=a[g+_+o],C=a[g+_]*h;r[_]=y*M+v*E+m*S+p*C}return r}}const Dw=new Kt;class Nw extends fp{interpolate_(t,e,n,i){const r=super.interpolate_(t,e,n,i);return Dw.fromArray(r).normalize().toArray(r),r}}const wn={POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6},zs={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},Fd={9728:Je,9729:on,9984:ef,9985:Wa,9986:Rr,9987:Xn},Ud={33071:pi,33648:to,10497:ts},Lc={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},Fl={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},Ri={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},Fw={CUBICSPLINE:void 0,LINEAR:Hr,STEP:zr},Ic={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function Uw(s){return s.DefaultMaterial===void 0&&(s.DefaultMaterial=new jr({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:xi})),s.DefaultMaterial}function Xi(s,t,e){for(const n in e.extensions)s[n]===void 0&&(t.userData.gltfExtensions=t.userData.gltfExtensions||{},t.userData.gltfExtensions[n]=e.extensions[n])}function fi(s,t){t.extras!==void 0&&(typeof t.extras=="object"?Object.assign(s.userData,t.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+t.extras))}function kw(s,t,e){let n=!1,i=!1,r=!1;for(let l=0,h=t.length;l<h;l++){const u=t[l];if(u.POSITION!==void 0&&(n=!0),u.NORMAL!==void 0&&(i=!0),u.COLOR_0!==void 0&&(r=!0),n&&i&&r)break}if(!n&&!i&&!r)return Promise.resolve(s);const a=[],o=[],c=[];for(let l=0,h=t.length;l<h;l++){const u=t[l];if(n){const d=u.POSITION!==void 0?e.getDependency("accessor",u.POSITION):s.attributes.position;a.push(d)}if(i){const d=u.NORMAL!==void 0?e.getDependency("accessor",u.NORMAL):s.attributes.normal;o.push(d)}if(r){const d=u.COLOR_0!==void 0?e.getDependency("accessor",u.COLOR_0):s.attributes.color;c.push(d)}}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(c)]).then(function(l){const h=l[0],u=l[1],d=l[2];return n&&(s.morphAttributes.position=h),i&&(s.morphAttributes.normal=u),r&&(s.morphAttributes.color=d),s.morphTargetsRelative=!0,s})}function Ow(s,t){if(s.updateMorphTargets(),t.weights!==void 0)for(let e=0,n=t.weights.length;e<n;e++)s.morphTargetInfluences[e]=t.weights[e];if(t.extras&&Array.isArray(t.extras.targetNames)){const e=t.extras.targetNames;if(s.morphTargetInfluences.length===e.length){s.morphTargetDictionary={};for(let n=0,i=e.length;n<i;n++)s.morphTargetDictionary[e[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function Bw(s){let t;const e=s.extensions&&s.extensions[Vt.KHR_DRACO_MESH_COMPRESSION];if(e?t="draco:"+e.bufferView+":"+e.indices+":"+Dc(e.attributes):t=s.indices+":"+Dc(s.attributes)+":"+s.mode,s.targets!==void 0)for(let n=0,i=s.targets.length;n<i;n++)t+=":"+Dc(s.targets[n]);return t}function Dc(s){let t="";const e=Object.keys(s).sort();for(let n=0,i=e.length;n<i;n++)t+=e[n]+":"+s[e[n]]+";";return t}function Ul(s){switch(s){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function zw(s){return s.search(/\.jpe?g($|\?)/i)>0||s.search(/^data\:image\/jpeg/)===0?"image/jpeg":s.search(/\.webp($|\?)/i)>0||s.search(/^data\:image\/webp/)===0?"image/webp":"image/png"}const Hw=new _t;class Gw{constructor(t={},e={}){this.json=t,this.extensions={},this.plugins={},this.options=e,this.cache=new hw,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,i=-1,r=!1,a=-1;if(typeof navigator<"u"){const o=navigator.userAgent;n=/^((?!chrome|android).)*safari/i.test(o)===!0;const c=o.match(/Version\/(\d+)/);i=n&&c?parseInt(c[1],10):-1,r=o.indexOf("Firefox")>-1,a=r?o.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||n&&i<17||r&&a<98?this.textureLoader=new z_(this.options.manager):this.textureLoader=new X_(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new Yf(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(t){this.extensions=t}setPlugins(t){this.plugins=t}parse(t,e){const n=this,i=this.json,r=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(a){return a._markDefs&&a._markDefs()}),Promise.all(this._invokeAll(function(a){return a.beforeRoot&&a.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(a){const o={scene:a[0][i.scene||0],scenes:a[0],animations:a[1],cameras:a[2],asset:i.asset,parser:n,userData:{}};return Xi(r,o,i),fi(o,i),Promise.all(n._invokeAll(function(c){return c.afterRoot&&c.afterRoot(o)})).then(function(){for(const c of o.scenes)c.updateMatrixWorld();t(o)})}).catch(e)}_markDefs(){const t=this.json.nodes||[],e=this.json.skins||[],n=this.json.meshes||[];for(let i=0,r=e.length;i<r;i++){const a=e[i].joints;for(let o=0,c=a.length;o<c;o++)t[a[o]].isBone=!0}for(let i=0,r=t.length;i<r;i++){const a=t[i];a.mesh!==void 0&&(this._addNodeRef(this.meshCache,a.mesh),a.skin!==void 0&&(n[a.mesh].isSkinnedMesh=!0)),a.camera!==void 0&&this._addNodeRef(this.cameraCache,a.camera)}}_addNodeRef(t,e){e!==void 0&&(t.refs[e]===void 0&&(t.refs[e]=t.uses[e]=0),t.refs[e]++)}_getNodeRef(t,e,n){if(t.refs[e]<=1)return n;const i=n.clone(),r=(a,o)=>{const c=this.associations.get(a);c!=null&&this.associations.set(o,c);for(const[l,h]of a.children.entries())r(h,o.children[l])};return r(n,i),i.name+="_instance_"+t.uses[e]++,i}_invokeOne(t){const e=Object.values(this.plugins);e.push(this);for(let n=0;n<e.length;n++){const i=t(e[n]);if(i)return i}return null}_invokeAll(t){const e=Object.values(this.plugins);e.unshift(this);const n=[];for(let i=0;i<e.length;i++){const r=t(e[i]);r&&n.push(r)}return n}getDependency(t,e){const n=t+":"+e;let i=this.cache.get(n);if(!i){switch(t){case"scene":i=this.loadScene(e);break;case"node":i=this._invokeOne(function(r){return r.loadNode&&r.loadNode(e)});break;case"mesh":i=this._invokeOne(function(r){return r.loadMesh&&r.loadMesh(e)});break;case"accessor":i=this.loadAccessor(e);break;case"bufferView":i=this._invokeOne(function(r){return r.loadBufferView&&r.loadBufferView(e)});break;case"buffer":i=this.loadBuffer(e);break;case"material":i=this._invokeOne(function(r){return r.loadMaterial&&r.loadMaterial(e)});break;case"texture":i=this._invokeOne(function(r){return r.loadTexture&&r.loadTexture(e)});break;case"skin":i=this.loadSkin(e);break;case"animation":i=this._invokeOne(function(r){return r.loadAnimation&&r.loadAnimation(e)});break;case"camera":i=this.loadCamera(e);break;default:if(i=this._invokeOne(function(r){return r!=this&&r.getDependency&&r.getDependency(t,e)}),!i)throw new Error("Unknown type: "+t);break}this.cache.add(n,i)}return i}getDependencies(t){let e=this.cache.get(t);if(!e){const n=this,i=this.json[t+(t==="mesh"?"es":"s")]||[];e=Promise.all(i.map(function(r,a){return n.getDependency(t,a)})),this.cache.add(t,e)}return e}loadBuffer(t){const e=this.json.buffers[t],n=this.fileLoader;if(e.type&&e.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+e.type+" buffer type is not supported.");if(e.uri===void 0&&t===0)return Promise.resolve(this.extensions[Vt.KHR_BINARY_GLTF].body);const i=this.options;return new Promise(function(r,a){n.load(Ur.resolveURL(e.uri,i.path),r,void 0,function(){a(new Error('THREE.GLTFLoader: Failed to load buffer "'+e.uri+'".'))})})}loadBufferView(t){const e=this.json.bufferViews[t];return this.getDependency("buffer",e.buffer).then(function(n){const i=e.byteLength||0,r=e.byteOffset||0;return n.slice(r,r+i)})}loadAccessor(t){const e=this,n=this.json,i=this.json.accessors[t];if(i.bufferView===void 0&&i.sparse===void 0){const a=Lc[i.type],o=zs[i.componentType],c=i.normalized===!0,l=new o(i.count*a);return Promise.resolve(new Te(l,a,c))}const r=[];return i.bufferView!==void 0?r.push(this.getDependency("bufferView",i.bufferView)):r.push(null),i.sparse!==void 0&&(r.push(this.getDependency("bufferView",i.sparse.indices.bufferView)),r.push(this.getDependency("bufferView",i.sparse.values.bufferView))),Promise.all(r).then(function(a){const o=a[0],c=Lc[i.type],l=zs[i.componentType],h=l.BYTES_PER_ELEMENT,u=h*c,d=i.byteOffset||0,f=i.bufferView!==void 0?n.bufferViews[i.bufferView].byteStride:void 0,g=i.normalized===!0;let b,m;if(f&&f!==u){const p=Math.floor(d/f),y="InterleavedBuffer:"+i.bufferView+":"+i.componentType+":"+p+":"+i.count;let v=e.cache.get(y);v||(b=new l(o,p*f,i.count*f/h),v=new Lf(b,f/h),e.cache.add(y,v)),m=new Vr(v,c,d%f/h,g)}else o===null?b=new l(i.count*c):b=new l(o,d,i.count*c),m=new Te(b,c,g);if(i.sparse!==void 0){const p=Lc.SCALAR,y=zs[i.sparse.indices.componentType],v=i.sparse.indices.byteOffset||0,_=i.sparse.values.byteOffset||0,M=new y(a[1],v,i.sparse.count*p),E=new l(a[2],_,i.sparse.count*c);o!==null&&(m=new Te(m.array.slice(),m.itemSize,m.normalized)),m.normalized=!1;for(let S=0,C=M.length;S<C;S++){const I=M[S];if(m.setX(I,E[S*c]),c>=2&&m.setY(I,E[S*c+1]),c>=3&&m.setZ(I,E[S*c+2]),c>=4&&m.setW(I,E[S*c+3]),c>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}m.normalized=g}return m})}loadTexture(t){const e=this.json,n=this.options,r=e.textures[t].source,a=e.images[r];let o=this.textureLoader;if(a.uri){const c=n.manager.getHandler(a.uri);c!==null&&(o=c)}return this.loadTextureImage(t,r,o)}loadTextureImage(t,e,n){const i=this,r=this.json,a=r.textures[t],o=r.images[e],c=(o.uri||o.bufferView)+":"+a.sampler;if(this.textureCache[c])return this.textureCache[c];const l=this.loadImageSource(e,n).then(function(h){h.flipY=!1,h.name=a.name||o.name||"",h.name===""&&typeof o.uri=="string"&&o.uri.startsWith("data:image/")===!1&&(h.name=o.uri);const d=(r.samplers||{})[a.sampler]||{};return h.magFilter=Fd[d.magFilter]||on,h.minFilter=Fd[d.minFilter]||Xn,h.wrapS=Ud[d.wrapS]||ts,h.wrapT=Ud[d.wrapT]||ts,i.associations.set(h,{textures:t}),h}).catch(function(){return null});return this.textureCache[c]=l,l}loadImageSource(t,e){const n=this,i=this.json,r=this.options;if(this.sourceCache[t]!==void 0)return this.sourceCache[t].then(u=>u.clone());const a=i.images[t],o=self.URL||self.webkitURL;let c=a.uri||"",l=!1;if(a.bufferView!==void 0)c=n.getDependency("bufferView",a.bufferView).then(function(u){l=!0;const d=new Blob([u],{type:a.mimeType});return c=o.createObjectURL(d),c});else if(a.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+t+" is missing URI and bufferView");const h=Promise.resolve(c).then(function(u){return new Promise(function(d,f){let g=d;e.isImageBitmapLoader===!0&&(g=function(b){const m=new Le(b);m.needsUpdate=!0,d(m)}),e.load(Ur.resolveURL(u,r.path),g,void 0,f)})}).then(function(u){return l===!0&&o.revokeObjectURL(c),fi(u,a),u.userData.mimeType=a.mimeType||zw(a.uri),u}).catch(function(u){throw console.error("THREE.GLTFLoader: Couldn't load texture",c),u});return this.sourceCache[t]=h,h}assignTexture(t,e,n,i){const r=this;return this.getDependency("texture",n.index).then(function(a){if(!a)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(a=a.clone(),a.channel=n.texCoord),r.extensions[Vt.KHR_TEXTURE_TRANSFORM]){const o=n.extensions!==void 0?n.extensions[Vt.KHR_TEXTURE_TRANSFORM]:void 0;if(o){const c=r.associations.get(a);a=r.extensions[Vt.KHR_TEXTURE_TRANSFORM].extendTexture(a,o),r.associations.set(a,c)}}return i!==void 0&&(a.colorSpace=i),t[e]=a,a})}assignFinalMaterial(t){const e=t.geometry;let n=t.material;const i=e.attributes.tangent===void 0,r=e.attributes.color!==void 0,a=e.attributes.normal===void 0;if(t.isPoints){const o="PointsMaterial:"+n.uuid;let c=this.cache.get(o);c||(c=new Ff,Un.prototype.copy.call(c,n),c.color.copy(n.color),c.map=n.map,c.sizeAttenuation=!1,this.cache.add(o,c)),n=c}else if(t.isLine){const o="LineBasicMaterial:"+n.uuid;let c=this.cache.get(o);c||(c=new ro,Un.prototype.copy.call(c,n),c.color.copy(n.color),c.map=n.map,this.cache.add(o,c)),n=c}if(i||r||a){let o="ClonedMaterial:"+n.uuid+":";i&&(o+="derivative-tangents:"),r&&(o+="vertex-colors:"),a&&(o+="flat-shading:");let c=this.cache.get(o);c||(c=n.clone(),r&&(c.vertexColors=!0),a&&(c.flatShading=!0),i&&(c.normalScale&&(c.normalScale.y*=-1),c.clearcoatNormalScale&&(c.clearcoatNormalScale.y*=-1)),this.cache.add(o,c),this.associations.set(c,this.associations.get(n))),n=c}t.material=n}getMaterialType(){return jr}loadMaterial(t){const e=this,n=this.json,i=this.extensions,r=n.materials[t];let a;const o={},c=r.extensions||{},l=[];if(c[Vt.KHR_MATERIALS_UNLIT]){const u=i[Vt.KHR_MATERIALS_UNLIT];a=u.getMaterialType(),l.push(u.extendParams(o,r,e))}else{const u=r.pbrMetallicRoughness||{};if(o.color=new Et(1,1,1),o.opacity=1,Array.isArray(u.baseColorFactor)){const d=u.baseColorFactor;o.color.setRGB(d[0],d[1],d[2],He),o.opacity=d[3]}u.baseColorTexture!==void 0&&l.push(e.assignTexture(o,"map",u.baseColorTexture,Fe)),o.metalness=u.metallicFactor!==void 0?u.metallicFactor:1,o.roughness=u.roughnessFactor!==void 0?u.roughnessFactor:1,u.metallicRoughnessTexture!==void 0&&(l.push(e.assignTexture(o,"metalnessMap",u.metallicRoughnessTexture)),l.push(e.assignTexture(o,"roughnessMap",u.metallicRoughnessTexture))),a=this._invokeOne(function(d){return d.getMaterialType&&d.getMaterialType(t)}),l.push(Promise.all(this._invokeAll(function(d){return d.extendMaterialParams&&d.extendMaterialParams(t,o)})))}r.doubleSided===!0&&(o.side=an);const h=r.alphaMode||Ic.OPAQUE;if(h===Ic.BLEND?(o.transparent=!0,o.depthWrite=!1):(o.transparent=!1,h===Ic.MASK&&(o.alphaTest=r.alphaCutoff!==void 0?r.alphaCutoff:.5)),r.normalTexture!==void 0&&a!==Qe&&(l.push(e.assignTexture(o,"normalMap",r.normalTexture)),o.normalScale=new it(1,1),r.normalTexture.scale!==void 0)){const u=r.normalTexture.scale;o.normalScale.set(u,u)}if(r.occlusionTexture!==void 0&&a!==Qe&&(l.push(e.assignTexture(o,"aoMap",r.occlusionTexture)),r.occlusionTexture.strength!==void 0&&(o.aoMapIntensity=r.occlusionTexture.strength)),r.emissiveFactor!==void 0&&a!==Qe){const u=r.emissiveFactor;o.emissive=new Et().setRGB(u[0],u[1],u[2],He)}return r.emissiveTexture!==void 0&&a!==Qe&&l.push(e.assignTexture(o,"emissiveMap",r.emissiveTexture,Fe)),Promise.all(l).then(function(){const u=new a(o);return r.name&&(u.name=r.name),fi(u,r),e.associations.set(u,{materials:t}),r.extensions&&Xi(i,u,r),u})}createUniqueName(t){const e=ce.sanitizeNodeName(t||"");return e in this.nodeNamesUsed?e+"_"+ ++this.nodeNamesUsed[e]:(this.nodeNamesUsed[e]=0,e)}loadGeometries(t){const e=this,n=this.extensions,i=this.primitiveCache;function r(o){return n[Vt.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(o,e).then(function(c){return kd(c,o,e)})}const a=[];for(let o=0,c=t.length;o<c;o++){const l=t[o],h=Bw(l),u=i[h];if(u)a.push(u.promise);else{let d;l.extensions&&l.extensions[Vt.KHR_DRACO_MESH_COMPRESSION]?d=r(l):d=kd(new _e,l,e),i[h]={primitive:l,promise:d},a.push(d)}}return Promise.all(a)}loadMesh(t){const e=this,n=this.json,i=this.extensions,r=n.meshes[t],a=r.primitives,o=[];for(let c=0,l=a.length;c<l;c++){const h=a[c].material===void 0?Uw(this.cache):this.getDependency("material",a[c].material);o.push(h)}return o.push(e.loadGeometries(a)),Promise.all(o).then(function(c){const l=c.slice(0,c.length-1),h=c[c.length-1],u=[];for(let f=0,g=h.length;f<g;f++){const b=h[f],m=a[f];let p;const y=l[f];if(m.mode===wn.TRIANGLES||m.mode===wn.TRIANGLE_STRIP||m.mode===wn.TRIANGLE_FAN||m.mode===void 0)p=r.isSkinnedMesh===!0?new Yx(b,y):new Qt(b,y),p.isSkinnedMesh===!0&&p.normalizeSkinWeights(),m.mode===wn.TRIANGLE_STRIP?p.geometry=Dd(p.geometry,uf):m.mode===wn.TRIANGLE_FAN&&(p.geometry=Dd(p.geometry,Sl));else if(m.mode===wn.LINES)p=new Qa(b,y);else if(m.mode===wn.LINE_STRIP)p=new nh(b,y);else if(m.mode===wn.LINE_LOOP)p=new Jx(b,y);else if(m.mode===wn.POINTS)p=new Uf(b,y);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+m.mode);Object.keys(p.geometry.morphAttributes).length>0&&Ow(p,r),p.name=e.createUniqueName(r.name||"mesh_"+t),fi(p,r),m.extensions&&Xi(i,p,m),e.assignFinalMaterial(p),u.push(p)}for(let f=0,g=u.length;f<g;f++)e.associations.set(u[f],{meshes:t,primitives:f});if(u.length===1)return r.extensions&&Xi(i,u[0],r),u[0];const d=new Ee;r.extensions&&Xi(i,d,r),e.associations.set(d,{meshes:t});for(let f=0,g=u.length;f<g;f++)d.add(u[f]);return d})}loadCamera(t){let e;const n=this.json.cameras[t],i=n[n.type];if(!i){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?e=new Ke(Tt.radToDeg(i.yfov),i.aspectRatio||1,i.znear||1,i.zfar||2e6):n.type==="orthographic"&&(e=new Ql(-i.xmag,i.xmag,i.ymag,-i.ymag,i.znear,i.zfar)),n.name&&(e.name=this.createUniqueName(n.name)),fi(e,n),Promise.resolve(e)}loadSkin(t){const e=this.json.skins[t],n=[];for(let i=0,r=e.joints.length;i<r;i++)n.push(this._loadNodeShallow(e.joints[i]));return e.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",e.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(i){const r=i.pop(),a=i,o=[],c=[];for(let l=0,h=a.length;l<h;l++){const u=a[l];if(u){o.push(u);const d=new _t;r!==null&&d.fromArray(r.array,l*16),c.push(d)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',e.joints[l])}return new eh(o,c)})}loadAnimation(t){const e=this.json,n=this,i=e.animations[t],r=i.name?i.name:"animation_"+t,a=[],o=[],c=[],l=[],h=[];for(let u=0,d=i.channels.length;u<d;u++){const f=i.channels[u],g=i.samplers[f.sampler],b=f.target,m=b.node,p=i.parameters!==void 0?i.parameters[g.input]:g.input,y=i.parameters!==void 0?i.parameters[g.output]:g.output;b.node!==void 0&&(a.push(this.getDependency("node",m)),o.push(this.getDependency("accessor",p)),c.push(this.getDependency("accessor",y)),l.push(g),h.push(b))}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(c),Promise.all(l),Promise.all(h)]).then(function(u){const d=u[0],f=u[1],g=u[2],b=u[3],m=u[4],p=[];for(let y=0,v=d.length;y<v;y++){const _=d[y],M=f[y],E=g[y],S=b[y],C=m[y];if(_===void 0)continue;_.updateMatrix&&_.updateMatrix();const I=n._createAnimationTracks(_,M,E,S,C);if(I)for(let x=0;x<I.length;x++)p.push(I[x])}return new D_(r,void 0,p)})}createNodeMesh(t){const e=this.json,n=this,i=e.nodes[t];return i.mesh===void 0?null:n.getDependency("mesh",i.mesh).then(function(r){const a=n._getNodeRef(n.meshCache,i.mesh,r);return i.weights!==void 0&&a.traverse(function(o){if(o.isMesh)for(let c=0,l=i.weights.length;c<l;c++)o.morphTargetInfluences[c]=i.weights[c]}),a})}loadNode(t){const e=this.json,n=this,i=e.nodes[t],r=n._loadNodeShallow(t),a=[],o=i.children||[];for(let l=0,h=o.length;l<h;l++)a.push(n.getDependency("node",o[l]));const c=i.skin===void 0?Promise.resolve(null):n.getDependency("skin",i.skin);return Promise.all([r,Promise.all(a),c]).then(function(l){const h=l[0],u=l[1],d=l[2];d!==null&&h.traverse(function(f){f.isSkinnedMesh&&f.bind(d,Hw)});for(let f=0,g=u.length;f<g;f++)h.add(u[f]);return h})}_loadNodeShallow(t){const e=this.json,n=this.extensions,i=this;if(this.nodeCache[t]!==void 0)return this.nodeCache[t];const r=e.nodes[t],a=r.name?i.createUniqueName(r.name):"",o=[],c=i._invokeOne(function(l){return l.createNodeMesh&&l.createNodeMesh(t)});return c&&o.push(c),r.camera!==void 0&&o.push(i.getDependency("camera",r.camera).then(function(l){return i._getNodeRef(i.cameraCache,r.camera,l)})),i._invokeAll(function(l){return l.createNodeAttachment&&l.createNodeAttachment(t)}).forEach(function(l){o.push(l)}),this.nodeCache[t]=Promise.all(o).then(function(l){let h;if(r.isBone===!0?h=new Nf:l.length>1?h=new Ee:l.length===1?h=l[0]:h=new ge,h!==l[0])for(let u=0,d=l.length;u<d;u++)h.add(l[u]);if(r.name&&(h.userData.name=r.name,h.name=a),fi(h,r),r.extensions&&Xi(n,h,r),r.matrix!==void 0){const u=new _t;u.fromArray(r.matrix),h.applyMatrix4(u)}else r.translation!==void 0&&h.position.fromArray(r.translation),r.rotation!==void 0&&h.quaternion.fromArray(r.rotation),r.scale!==void 0&&h.scale.fromArray(r.scale);return i.associations.has(h)||i.associations.set(h,{}),i.associations.get(h).nodes=t,h}),this.nodeCache[t]}loadScene(t){const e=this.extensions,n=this.json.scenes[t],i=this,r=new Ee;n.name&&(r.name=i.createUniqueName(n.name)),fi(r,n),n.extensions&&Xi(e,r,n);const a=n.nodes||[],o=[];for(let c=0,l=a.length;c<l;c++)o.push(i.getDependency("node",a[c]));return Promise.all(o).then(function(c){for(let h=0,u=c.length;h<u;h++)r.add(c[h]);const l=h=>{const u=new Map;for(const[d,f]of i.associations)(d instanceof Un||d instanceof Le)&&u.set(d,f);return h.traverse(d=>{const f=i.associations.get(d);f!=null&&u.set(d,f)}),u};return i.associations=l(r),r})}_createAnimationTracks(t,e,n,i,r){const a=[],o=t.name?t.name:t.uuid,c=[];Ri[r.path]===Ri.weights?t.traverse(function(d){d.morphTargetInfluences&&c.push(d.name?d.name:d.uuid)}):c.push(o);let l;switch(Ri[r.path]){case Ri.weights:l=Ys;break;case Ri.rotation:l=Ks;break;case Ri.position:case Ri.scale:l=$s;break;default:switch(n.itemSize){case 1:l=Ys;break;case 2:case 3:default:l=$s;break}break}const h=i.interpolation!==void 0?Fw[i.interpolation]:Hr,u=this._getArrayFromAccessor(n);for(let d=0,f=c.length;d<f;d++){const g=new l(c[d]+"."+Ri[r.path],e.array,u,h);i.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(g),a.push(g)}return a}_getArrayFromAccessor(t){let e=t.array;if(t.normalized){const n=Ul(e.constructor),i=new Float32Array(e.length);for(let r=0,a=e.length;r<a;r++)i[r]=e[r]*n;e=i}return e}_createCubicSplineTrackInterpolant(t){t.createInterpolant=function(n){const i=this instanceof Ks?Nw:fp;return new i(this.times,this.values,this.getValueSize()/3,n)},t.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}}function Vw(s,t,e){const n=t.attributes,i=new Jn;if(n.POSITION!==void 0){const o=e.json.accessors[n.POSITION],c=o.min,l=o.max;if(c!==void 0&&l!==void 0){if(i.set(new R(c[0],c[1],c[2]),new R(l[0],l[1],l[2])),o.normalized){const h=Ul(zs[o.componentType]);i.min.multiplyScalar(h),i.max.multiplyScalar(h)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const r=t.targets;if(r!==void 0){const o=new R,c=new R;for(let l=0,h=r.length;l<h;l++){const u=r[l];if(u.POSITION!==void 0){const d=e.json.accessors[u.POSITION],f=d.min,g=d.max;if(f!==void 0&&g!==void 0){if(c.setX(Math.max(Math.abs(f[0]),Math.abs(g[0]))),c.setY(Math.max(Math.abs(f[1]),Math.abs(g[1]))),c.setZ(Math.max(Math.abs(f[2]),Math.abs(g[2]))),d.normalized){const b=Ul(zs[d.componentType]);c.multiplyScalar(b)}o.max(c)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}i.expandByVector(o)}s.boundingBox=i;const a=new Qn;i.getCenter(a.center),a.radius=i.min.distanceTo(i.max)/2,s.boundingSphere=a}function kd(s,t,e){const n=t.attributes,i=[];function r(a,o){return e.getDependency("accessor",a).then(function(c){s.setAttribute(o,c)})}for(const a in n){const o=Fl[a]||a.toLowerCase();o in s.attributes||i.push(r(n[a],o))}if(t.indices!==void 0&&!s.index){const a=e.getDependency("accessor",t.indices).then(function(o){s.setIndex(o)});i.push(a)}return Zt.workingColorSpace!==He&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${Zt.workingColorSpace}" not supported.`),fi(s,t),Vw(s,t,e),Promise.all(i).then(function(){return t.targets!==void 0?kw(s,t.targets,e):s})}var Ww=function(){var s="b9H79Tebbbe8Fv9Gbb9Gvuuuuueu9Giuuub9Geueu9Giuuueuikqbeeedddillviebeoweuec:q;iekr;leDo9TW9T9VV95dbH9F9F939H79T9F9J9H229F9Jt9VV7bb8A9TW79O9V9Wt9F9KW9J9V9KW9wWVtW949c919M9MWVbeY9TW79O9V9Wt9F9KW9J9V9KW69U9KW949c919M9MWVbdE9TW79O9V9Wt9F9KW9J9V9KW69U9KW949tWG91W9U9JWbiL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9p9JtblK9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9r919HtbvL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWVT949Wbol79IV9Rbrq:P8Yqdbk;3sezu8Jjjjjbcj;eb9Rgv8Kjjjjbc9:hodnadcefal0mbcuhoaiRbbc:Ge9hmbavaialfgrad9Radz1jjjbhwcj;abad9UhoaicefhldnadTmbaoc;WFbGgocjdaocjd6EhDcbhqinaqae9pmeaDaeaq9RaqaDfae6Egkcsfgocl4cifcd4hxdndndndnaoc9WGgmTmbcbhPcehsawcjdfhzalhHinaraH9Rax6midnaraHaxfgl9RcK6mbczhoinawcj;cbfaogifgoc9WfhOdndndndndnaHaic9WfgAco4fRbbaAci4coG4ciGPlbedibkaO9cb83ibaOcwf9cb83ibxikaOalRblalRbbgAco4gCaCciSgCE86bbaocGfalclfaCfgORbbaAcl4ciGgCaCciSgCE86bbaocVfaOaCfgORbbaAcd4ciGgCaCciSgCE86bbaoc7faOaCfgORbbaAciGgAaAciSgAE86bbaoctfaOaAfgARbbalRbegOco4gCaCciSgCE86bbaoc91faAaCfgARbbaOcl4ciGgCaCciSgCE86bbaoc4faAaCfgARbbaOcd4ciGgCaCciSgCE86bbaoc93faAaCfgARbbaOciGgOaOciSgOE86bbaoc94faAaOfgARbbalRbdgOco4gCaCciSgCE86bbaoc95faAaCfgARbbaOcl4ciGgCaCciSgCE86bbaoc96faAaCfgARbbaOcd4ciGgCaCciSgCE86bbaoc97faAaCfgARbbaOciGgOaOciSgOE86bbaoc98faAaOfgORbbalRbiglco4gAaAciSgAE86bbaoc99faOaAfgORbbalcl4ciGgAaAciSgAE86bbaoc9:faOaAfgORbbalcd4ciGgAaAciSgAE86bbaocufaOaAfgoRbbalciGglalciSglE86bbaoalfhlxdkaOalRbwalRbbgAcl4gCaCcsSgCE86bbaocGfalcwfaCfgORbbaAcsGgAaAcsSgAE86bbaocVfaOaAfgORbbalRbegAcl4gCaCcsSgCE86bbaoc7faOaCfgORbbaAcsGgAaAcsSgAE86bbaoctfaOaAfgORbbalRbdgAcl4gCaCcsSgCE86bbaoc91faOaCfgORbbaAcsGgAaAcsSgAE86bbaoc4faOaAfgORbbalRbigAcl4gCaCcsSgCE86bbaoc93faOaCfgORbbaAcsGgAaAcsSgAE86bbaoc94faOaAfgORbbalRblgAcl4gCaCcsSgCE86bbaoc95faOaCfgORbbaAcsGgAaAcsSgAE86bbaoc96faOaAfgORbbalRbvgAcl4gCaCcsSgCE86bbaoc97faOaCfgORbbaAcsGgAaAcsSgAE86bbaoc98faOaAfgORbbalRbogAcl4gCaCcsSgCE86bbaoc99faOaCfgORbbaAcsGgAaAcsSgAE86bbaoc9:faOaAfgORbbalRbrglcl4gAaAcsSgAE86bbaocufaOaAfgoRbbalcsGglalcsSglE86bbaoalfhlxekaOal8Pbb83bbaOcwfalcwf8Pbb83bbalczfhlkdnaiam9pmbaiczfhoaral9RcL0mekkaiam6mialTmidnakTmbawaPfRbbhOcbhoazhiinaiawcj;cbfaofRbbgAce4cbaAceG9R7aOfgO86bbaiadfhiaocefgoak9hmbkkazcefhzaPcefgPad6hsalhHaPad9hmexvkkcbhlasceGmdxikalaxad2fhCdnakTmbcbhHcehsawcjdfhminaral9Rax6mialTmdalaxfhlawaHfRbbhOcbhoamhiinaiawcj;cbfaofRbbgAce4cbaAceG9R7aOfgO86bbaiadfhiaocefgoak9hmbkamcefhmaHcefgHad6hsaHad9hmbkaChlxikcbhocehsinaral9Rax6mdalTmealaxfhlaocefgoad6hsadao9hmbkaChlxdkcbhlasceGTmekc9:hoxikabaqad2fawcjdfakad2z1jjjb8Aawawcjdfakcufad2fadz1jjjb8Aakaqfhqalmbkc9:hoxekcbc99aral9Radcaadca0ESEhokavcj;ebf8Kjjjjbaok;yzeHu8Jjjjjbc;ae9Rgv8Kjjjjbc9:hodnaeci9UgrcHfal0mbcuhoaiRbbgwc;WeGc;Ge9hmbawcsGgDce0mbavc;abfcFecjez:jjjjb8AavcUf9cu83ibavc8Wf9cu83ibavcyf9cu83ibavcaf9cu83ibavcKf9cu83ibavczf9cu83ibav9cu83iwav9cu83ibaialfc9WfhqaicefgwarfhodnaeTmbcmcsaDceSEhkcbhxcbhmcbhDcbhicbhlindnaoaq9nmbc9:hoxikdndnawRbbgrc;Ve0mbavc;abfalarcl4cu7fcsGcitfgPydlhsaPydbhzdnarcsGgPak9pmbavaiarcu7fcsGcdtfydbaxaPEhraPThPdndnadcd9hmbabaDcetfgHaz87ebaHcdfas87ebaHclfar87ebxekabaDcdtfgHazBdbaHclfasBdbaHcwfarBdbkaxaPfhxavc;abfalcitfgHarBdbaHasBdlavaicdtfarBdbavc;abfalcefcsGglcitfgHazBdbaHarBdlaiaPfhialcefhlxdkdndnaPcsSmbamaPfaPc987fcefhmxekaocefhrao8SbbgPcFeGhHdndnaPcu9mmbarhoxekaocvfhoaHcFbGhHcrhPdninar8SbbgOcFbGaPtaHVhHaOcu9kmearcefhraPcrfgPc8J9hmbxdkkarcefhokaHce4cbaHceG9R7amfhmkdndnadcd9hmbabaDcetfgraz87ebarcdfas87ebarclfam87ebxekabaDcdtfgrazBdbarclfasBdbarcwfamBdbkavc;abfalcitfgramBdbarasBdlavaicdtfamBdbavc;abfalcefcsGglcitfgrazBdbaramBdlaicefhialcefhlxekdnarcpe0mbaxcefgOavaiaqarcsGfRbbgPcl49RcsGcdtfydbaPcz6gHEhravaiaP9RcsGcdtfydbaOaHfgsaPcsGgOEhPaOThOdndnadcd9hmbabaDcetfgzax87ebazcdfar87ebazclfaP87ebxekabaDcdtfgzaxBdbazclfarBdbazcwfaPBdbkavaicdtfaxBdbavc;abfalcitfgzarBdbazaxBdlavaicefgicsGcdtfarBdbavc;abfalcefcsGcitfgzaPBdbazarBdlavaiaHfcsGgicdtfaPBdbavc;abfalcdfcsGglcitfgraxBdbaraPBdlalcefhlaiaOfhiasaOfhxxekaxcbaoRbbgzEgAarc;:eSgrfhsazcsGhCazcl4hXdndnazcs0mbascefhOxekashOavaiaX9RcsGcdtfydbhskdndnaCmbaOcefhxxekaOhxavaiaz9RcsGcdtfydbhOkdndnarTmbaocefhrxekaocdfhrao8SbegHcFeGhPdnaHcu9kmbaocofhAaPcFbGhPcrhodninar8SbbgHcFbGaotaPVhPaHcu9kmearcefhraocrfgoc8J9hmbkaAhrxekarcefhrkaPce4cbaPceG9R7amfgmhAkdndnaXcsSmbarhPxekarcefhPar8SbbgocFeGhHdnaocu9kmbarcvfhsaHcFbGhHcrhodninaP8SbbgrcFbGaotaHVhHarcu9kmeaPcefhPaocrfgoc8J9hmbkashPxekaPcefhPkaHce4cbaHceG9R7amfgmhskdndnaCcsSmbaPhoxekaPcefhoaP8SbbgrcFeGhHdnarcu9kmbaPcvfhOaHcFbGhHcrhrdninao8SbbgPcFbGartaHVhHaPcu9kmeaocefhoarcrfgrc8J9hmbkaOhoxekaocefhokaHce4cbaHceG9R7amfgmhOkdndnadcd9hmbabaDcetfgraA87ebarcdfas87ebarclfaO87ebxekabaDcdtfgraABdbarclfasBdbarcwfaOBdbkavc;abfalcitfgrasBdbaraABdlavaicdtfaABdbavc;abfalcefcsGcitfgraOBdbarasBdlavaicefgicsGcdtfasBdbavc;abfalcdfcsGcitfgraABdbaraOBdlavaiazcz6aXcsSVfgicsGcdtfaOBdbaiaCTaCcsSVfhialcifhlkawcefhwalcsGhlaicsGhiaDcifgDae6mbkkcbc99aoaqSEhokavc;aef8Kjjjjbaok:llevu8Jjjjjbcz9Rhvc9:hodnaecvfal0mbcuhoaiRbbc;:eGc;qe9hmbav9cb83iwaicefhraialfc98fhwdnaeTmbdnadcdSmbcbhDindnaraw6mbc9:skarcefhoar8SbbglcFeGhidndnalcu9mmbaohrxekarcvfhraicFbGhicrhldninao8SbbgdcFbGaltaiVhiadcu9kmeaocefhoalcrfglc8J9hmbxdkkaocefhrkabaDcdtfaicd4cbaice4ceG9R7avcwfaiceGcdtVgoydbfglBdbaoalBdbaDcefgDae9hmbxdkkcbhDindnaraw6mbc9:skarcefhoar8SbbglcFeGhidndnalcu9mmbaohrxekarcvfhraicFbGhicrhldninao8SbbgdcFbGaltaiVhiadcu9kmeaocefhoalcrfglc8J9hmbxdkkaocefhrkabaDcetfaicd4cbaice4ceG9R7avcwfaiceGcdtVgoydbfgl87ebaoalBdbaDcefgDae9hmbkkcbc99arawSEhokaok:Lvoeue99dud99eud99dndnadcl9hmbaeTmeindndnabcdfgd8Sbb:Yab8Sbbgi:Ygl:l:tabcefgv8Sbbgo:Ygr:l:tgwJbb;:9cawawNJbbbbawawJbbbb9GgDEgq:mgkaqaicb9iEalMgwawNakaqaocb9iEarMgqaqNMM:r:vglNJbbbZJbbb:;aDEMgr:lJbbb9p9DTmbar:Ohixekcjjjj94hikadai86bbdndnaqalNJbbbZJbbb:;aqJbbbb9GEMgq:lJbbb9p9DTmbaq:Ohdxekcjjjj94hdkavad86bbdndnawalNJbbbZJbbb:;awJbbbb9GEMgw:lJbbb9p9DTmbaw:Ohdxekcjjjj94hdkabad86bbabclfhbaecufgembxdkkaeTmbindndnabclfgd8Ueb:Yab8Uebgi:Ygl:l:tabcdfgv8Uebgo:Ygr:l:tgwJb;:FSawawNJbbbbawawJbbbb9GgDEgq:mgkaqaicb9iEalMgwawNakaqaocb9iEarMgqaqNMM:r:vglNJbbbZJbbb:;aDEMgr:lJbbb9p9DTmbar:Ohixekcjjjj94hikadai87ebdndnaqalNJbbbZJbbb:;aqJbbbb9GEMgq:lJbbb9p9DTmbaq:Ohdxekcjjjj94hdkavad87ebdndnawalNJbbbZJbbb:;awJbbbb9GEMgw:lJbbb9p9DTmbaw:Ohdxekcjjjj94hdkabad87ebabcwfhbaecufgembkkk;siliui99iue99dnaeTmbcbhiabhlindndnJ;Zl81Zalcof8UebgvciV:Y:vgoal8Ueb:YNgrJb;:FSNJbbbZJbbb:;arJbbbb9GEMgw:lJbbb9p9DTmbaw:OhDxekcjjjj94hDkalclf8Uebhqalcdf8UebhkabavcefciGaiVcetfaD87ebdndnaoak:YNgwJb;:FSNJbbbZJbbb:;awJbbbb9GEMgx:lJbbb9p9DTmbax:Ohkxekcjjjj94hkkabavcdfciGaiVcetfak87ebdndnaoaq:YNgoJb;:FSNJbbbZJbbb:;aoJbbbb9GEMgx:lJbbb9p9DTmbax:Ohqxekcjjjj94hqkabavcufciGaiVcetfaq87ebdndnJbbjZararN:tawawN:taoaoN:tgrJbbbbarJbbbb9GE:rJb;:FSNJbbbZMgr:lJbbb9p9DTmbar:Ohqxekcjjjj94hqkabavciGaiVcetfaq87ebalcwfhlaiclfhiaecufgembkkk9mbdnadcd4ae2geTmbinababydbgdcwtcw91:Yadce91cjjj;8ifcjjj98G::NUdbabclfhbaecufgembkkk9teiucbcbydj1jjbgeabcifc98GfgbBdj1jjbdndnabZbcztgd9nmbcuhiabad9RcFFifcz4nbcuSmekaehikaik;LeeeudndnaeabVciGTmbabhixekdndnadcz9pmbabhixekabhiinaiaeydbBdbaiclfaeclfydbBdbaicwfaecwfydbBdbaicxfaecxfydbBdbaiczfhiaeczfheadc9Wfgdcs0mbkkadcl6mbinaiaeydbBdbaeclfheaiclfhiadc98fgdci0mbkkdnadTmbinaiaeRbb86bbaicefhiaecefheadcufgdmbkkabk;aeedudndnabciGTmbabhixekaecFeGc:b:c:ew2hldndnadcz9pmbabhixekabhiinaialBdbaicxfalBdbaicwfalBdbaiclfalBdbaiczfhiadc9Wfgdcs0mbkkadcl6mbinaialBdbaiclfhiadc98fgdci0mbkkdnadTmbinaiae86bbaicefhiadcufgdmbkkabkkkebcjwklz9Kbb",t="b9H79TebbbeKl9Gbb9Gvuuuuueu9Giuuub9Geueuikqbbebeedddilve9Weeeviebeoweuec:q;Aekr;leDo9TW9T9VV95dbH9F9F939H79T9F9J9H229F9Jt9VV7bb8A9TW79O9V9Wt9F9KW9J9V9KW9wWVtW949c919M9MWVbdY9TW79O9V9Wt9F9KW9J9V9KW69U9KW949c919M9MWVblE9TW79O9V9Wt9F9KW9J9V9KW69U9KW949tWG91W9U9JWbvL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9p9JtboK9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9r919HtbrL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWVT949Wbwl79IV9RbDq;t9tqlbzik9:evu8Jjjjjbcz9Rhbcbheincbhdcbhiinabcwfadfaicjuaead4ceGglE86bbaialfhiadcefgdcw9hmbkaec:q:yjjbfai86bbaecitc:q1jjbfab8Piw83ibaecefgecjd9hmbkk;h8JlHud97euo978Jjjjjbcj;kb9Rgv8Kjjjjbc9:hodnadcefal0mbcuhoaiRbbc:Ge9hmbavaialfgrad9Rad;8qbbcj;abad9UhoaicefhldnadTmbaoc;WFbGgocjdaocjd6EhwcbhDinaDae9pmeawaeaD9RaDawfae6Egqcsfgoc9WGgkci2hxakcethmaocl4cifcd4hPabaDad2fhscbhzdnincehHalhOcbhAdninaraO9RaP6miavcj;cbfaAak2fhCaOaPfhlcbhidnakc;ab6mbaral9Rc;Gb6mbcbhoinaCaofhidndndndndnaOaoco4fRbbgXciGPlbedibkaipxbbbbbbbbbbbbbbbbpklbxikaialpbblalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLgQcdp:meaQpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogLpxiiiiiiiiiiiiiiiip8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklbalclfaYpQbfaKc:q:yjjbfRbbfhlxdkaialpbbwalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogLpxssssssssssssssssp8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklbalcwfaYpQbfaKc:q:yjjbfRbbfhlxekaialpbbbpklbalczfhlkdndndndndnaXcd4ciGPlbedibkaipxbbbbbbbbbbbbbbbbpklzxikaialpbblalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLgQcdp:meaQpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogLpxiiiiiiiiiiiiiiiip8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklzalclfaYpQbfaKc:q:yjjbfRbbfhlxdkaialpbbwalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogLpxssssssssssssssssp8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklzalcwfaYpQbfaKc:q:yjjbfRbbfhlxekaialpbbbpklzalczfhlkdndndndndnaXcl4ciGPlbedibkaipxbbbbbbbbbbbbbbbbpklaxikaialpbblalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLgQcdp:meaQpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogLpxiiiiiiiiiiiiiiiip8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklaalclfaYpQbfaKc:q:yjjbfRbbfhlxdkaialpbbwalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogLpxssssssssssssssssp8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklaalcwfaYpQbfaKc:q:yjjbfRbbfhlxekaialpbbbpklaalczfhlkdndndndndnaXco4Plbedibkaipxbbbbbbbbbbbbbbbbpkl8WxikaialpbblalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLgQcdp:meaQpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogLpxiiiiiiiiiiiiiiiip8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgXcitc:q1jjbfpbibaXc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgXcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spkl8WalclfaYpQbfaXc:q:yjjbfRbbfhlxdkaialpbbwalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogLpxssssssssssssssssp8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgXcitc:q1jjbfpbibaXc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgXcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spkl8WalcwfaYpQbfaXc:q:yjjbfRbbfhlxekaialpbbbpkl8Walczfhlkaoc;abfhiaocjefak0meaihoaral9Rc;Fb0mbkkdndnaiak9pmbaici4hoinaral9RcK6mdaCaifhXdndndndndnaOaico4fRbbaocoG4ciGPlbedibkaXpxbbbbbbbbbbbbbbbbpklbxikaXalpbblalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLgQcdp:meaQpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogLpxiiiiiiiiiiiiiiiip8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklbalclfaYpQbfaKc:q:yjjbfRbbfhlxdkaXalpbbwalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogLpxssssssssssssssssp8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklbalcwfaYpQbfaKc:q:yjjbfRbbfhlxekaXalpbbbpklbalczfhlkaocdfhoaiczfgiak6mbkkalTmbaAci6hHalhOaAcefgohAaoclSmdxekkcbhlaHceGmdkdnakTmbavcjdfazfhiavazfpbdbhYcbhXinaiavcj;cbfaXfgopblbgLcep9TaLpxeeeeeeeeeeeeeeeegQp9op9Hp9rgLaoakfpblbg8Acep9Ta8AaQp9op9Hp9rg8ApmbzeHdOiAlCvXoQrLgEaoamfpblbg3cep9Ta3aQp9op9Hp9rg3aoaxfpblbg5cep9Ta5aQp9op9Hp9rg5pmbzeHdOiAlCvXoQrLg8EpmbezHdiOAlvCXorQLgQaQpmbedibedibedibediaYp9UgYp9AdbbaiadfgoaYaQaQpmlvorlvorlvorlvorp9UgYp9AdbbaoadfgoaYaQaQpmwDqkwDqkwDqkwDqkp9UgYp9AdbbaoadfgoaYaQaQpmxmPsxmPsxmPsxmPsp9UgYp9AdbbaoadfgoaYaEa8EpmwDKYqk8AExm35Ps8E8FgQaQpmbedibedibedibedip9UgYp9AdbbaoadfgoaYaQaQpmlvorlvorlvorlvorp9UgYp9AdbbaoadfgoaYaQaQpmwDqkwDqkwDqkwDqkp9UgYp9AdbbaoadfgoaYaQaQpmxmPsxmPsxmPsxmPsp9UgYp9AdbbaoadfgoaYaLa8ApmwKDYq8AkEx3m5P8Es8FgLa3a5pmwKDYq8AkEx3m5P8Es8Fg8ApmbezHdiOAlvCXorQLgQaQpmbedibedibedibedip9UgYp9AdbbaoadfgoaYaQaQpmlvorlvorlvorlvorp9UgYp9AdbbaoadfgoaYaQaQpmwDqkwDqkwDqkwDqkp9UgYp9AdbbaoadfgoaYaQaQpmxmPsxmPsxmPsxmPsp9UgYp9AdbbaoadfgoaYaLa8ApmwDKYqk8AExm35Ps8E8FgQaQpmbedibedibedibedip9UgYp9AdbbaoadfgoaYaQaQpmlvorlvorlvorlvorp9UgYp9AdbbaoadfgoaYaQaQpmwDqkwDqkwDqkwDqkp9UgYp9AdbbaoadfgoaYaQaQpmxmPsxmPsxmPsxmPsp9UgYp9AdbbaoadfhiaXczfgXak6mbkkazclfgzad6mbkasavcjdfaqad2;8qbbavavcjdfaqcufad2fad;8qbbaqaDfhDc9:hoalmexikkc9:hoxekcbc99aral9Radcaadca0ESEhokavcj;kbf8Kjjjjbaokwbz:bjjjbk;uzeHu8Jjjjjbc;ae9Rgv8Kjjjjbc9:hodnaeci9UgrcHfal0mbcuhoaiRbbgwc;WeGc;Ge9hmbawcsGgDce0mbavc;abfcFecje;8kbavcUf9cu83ibavc8Wf9cu83ibavcyf9cu83ibavcaf9cu83ibavcKf9cu83ibavczf9cu83ibav9cu83iwav9cu83ibaialfc9WfhqaicefgwarfhodnaeTmbcmcsaDceSEhkcbhxcbhmcbhDcbhicbhlindnaoaq9nmbc9:hoxikdndnawRbbgrc;Ve0mbavc;abfalarcl4cu7fcsGcitfgPydlhsaPydbhzdnarcsGgPak9pmbavaiarcu7fcsGcdtfydbaxaPEhraPThPdndnadcd9hmbabaDcetfgHaz87ebaHcdfas87ebaHclfar87ebxekabaDcdtfgHazBdbaHclfasBdbaHcwfarBdbkaxaPfhxavc;abfalcitfgHarBdbaHasBdlavaicdtfarBdbavc;abfalcefcsGglcitfgHazBdbaHarBdlaiaPfhialcefhlxdkdndnaPcsSmbamaPfaPc987fcefhmxekaocefhrao8SbbgPcFeGhHdndnaPcu9mmbarhoxekaocvfhoaHcFbGhHcrhPdninar8SbbgOcFbGaPtaHVhHaOcu9kmearcefhraPcrfgPc8J9hmbxdkkarcefhokaHce4cbaHceG9R7amfhmkdndnadcd9hmbabaDcetfgraz87ebarcdfas87ebarclfam87ebxekabaDcdtfgrazBdbarclfasBdbarcwfamBdbkavc;abfalcitfgramBdbarasBdlavaicdtfamBdbavc;abfalcefcsGglcitfgrazBdbaramBdlaicefhialcefhlxekdnarcpe0mbaxcefgOavaiaqarcsGfRbbgPcl49RcsGcdtfydbaPcz6gHEhravaiaP9RcsGcdtfydbaOaHfgsaPcsGgOEhPaOThOdndnadcd9hmbabaDcetfgzax87ebazcdfar87ebazclfaP87ebxekabaDcdtfgzaxBdbazclfarBdbazcwfaPBdbkavaicdtfaxBdbavc;abfalcitfgzarBdbazaxBdlavaicefgicsGcdtfarBdbavc;abfalcefcsGcitfgzaPBdbazarBdlavaiaHfcsGgicdtfaPBdbavc;abfalcdfcsGglcitfgraxBdbaraPBdlalcefhlaiaOfhiasaOfhxxekaxcbaoRbbgzEgAarc;:eSgrfhsazcsGhCazcl4hXdndnazcs0mbascefhOxekashOavaiaX9RcsGcdtfydbhskdndnaCmbaOcefhxxekaOhxavaiaz9RcsGcdtfydbhOkdndnarTmbaocefhrxekaocdfhrao8SbegHcFeGhPdnaHcu9kmbaocofhAaPcFbGhPcrhodninar8SbbgHcFbGaotaPVhPaHcu9kmearcefhraocrfgoc8J9hmbkaAhrxekarcefhrkaPce4cbaPceG9R7amfgmhAkdndnaXcsSmbarhPxekarcefhPar8SbbgocFeGhHdnaocu9kmbarcvfhsaHcFbGhHcrhodninaP8SbbgrcFbGaotaHVhHarcu9kmeaPcefhPaocrfgoc8J9hmbkashPxekaPcefhPkaHce4cbaHceG9R7amfgmhskdndnaCcsSmbaPhoxekaPcefhoaP8SbbgrcFeGhHdnarcu9kmbaPcvfhOaHcFbGhHcrhrdninao8SbbgPcFbGartaHVhHaPcu9kmeaocefhoarcrfgrc8J9hmbkaOhoxekaocefhokaHce4cbaHceG9R7amfgmhOkdndnadcd9hmbabaDcetfgraA87ebarcdfas87ebarclfaO87ebxekabaDcdtfgraABdbarclfasBdbarcwfaOBdbkavc;abfalcitfgrasBdbaraABdlavaicdtfaABdbavc;abfalcefcsGcitfgraOBdbarasBdlavaicefgicsGcdtfasBdbavc;abfalcdfcsGcitfgraABdbaraOBdlavaiazcz6aXcsSVfgicsGcdtfaOBdbaiaCTaCcsSVfhialcifhlkawcefhwalcsGhlaicsGhiaDcifgDae6mbkkcbc99aoaqSEhokavc;aef8Kjjjjbaok:llevu8Jjjjjbcz9Rhvc9:hodnaecvfal0mbcuhoaiRbbc;:eGc;qe9hmbav9cb83iwaicefhraialfc98fhwdnaeTmbdnadcdSmbcbhDindnaraw6mbc9:skarcefhoar8SbbglcFeGhidndnalcu9mmbaohrxekarcvfhraicFbGhicrhldninao8SbbgdcFbGaltaiVhiadcu9kmeaocefhoalcrfglc8J9hmbxdkkaocefhrkabaDcdtfaicd4cbaice4ceG9R7avcwfaiceGcdtVgoydbfglBdbaoalBdbaDcefgDae9hmbxdkkcbhDindnaraw6mbc9:skarcefhoar8SbbglcFeGhidndnalcu9mmbaohrxekarcvfhraicFbGhicrhldninao8SbbgdcFbGaltaiVhiadcu9kmeaocefhoalcrfglc8J9hmbxdkkaocefhrkabaDcetfaicd4cbaice4ceG9R7avcwfaiceGcdtVgoydbfgl87ebaoalBdbaDcefgDae9hmbkkcbc99arawSEhokaok:EPliuo97eue978Jjjjjbca9Rhidndnadcl9hmbdnaec98GglTmbcbhvabhdinadadpbbbgocKp:RecKp:Sep;6egraocwp:RecKp:Sep;6earp;Geaoczp:RecKp:Sep;6egwp;Gep;Kep;LegDpxbbbbbbbbbbbbbbbbp:2egqarpxbbbjbbbjbbbjbbbjgkp9op9rp;Kegrpxbb;:9cbb;:9cbb;:9cbb;:9cararp;MeaDaDp;Meawaqawakp9op9rp;Kegrarp;Mep;Kep;Kep;Jep;Negwp;Mepxbbn0bbn0bbn0bbn0gqp;KepxFbbbFbbbFbbbFbbbp9oaopxbbbFbbbFbbbFbbbFp9op9qarawp;Meaqp;Kecwp:RepxbFbbbFbbbFbbbFbbp9op9qaDawp;Meaqp;Keczp:RepxbbFbbbFbbbFbbbFbp9op9qpkbbadczfhdavclfgval6mbkkalae9pmeaiaeciGgvcdtgdVcbczad9R;8kbaiabalcdtfglad;8qbbdnavTmbaiaipblbgocKp:RecKp:Sep;6egraocwp:RecKp:Sep;6earp;Geaoczp:RecKp:Sep;6egwp;Gep;Kep;LegDpxbbbbbbbbbbbbbbbbp:2egqarpxbbbjbbbjbbbjbbbjgkp9op9rp;Kegrpxbb;:9cbb;:9cbb;:9cbb;:9cararp;MeaDaDp;Meawaqawakp9op9rp;Kegrarp;Mep;Kep;Kep;Jep;Negwp;Mepxbbn0bbn0bbn0bbn0gqp;KepxFbbbFbbbFbbbFbbbp9oaopxbbbFbbbFbbbFbbbFp9op9qarawp;Meaqp;Kecwp:RepxbFbbbFbbbFbbbFbbp9op9qaDawp;Meaqp;Keczp:RepxbbFbbbFbbbFbbbFbp9op9qpklbkalaiad;8qbbskdnaec98GgxTmbcbhvabhdinadczfglalpbbbgopxbbbbbbFFbbbbbbFFgkp9oadpbbbgDaopmlvorxmPsCXQL358E8FpxFubbFubbFubbFubbp9op;6eaDaopmbediwDqkzHOAKY8AEgoczp:Sep;6egrp;Geaoczp:Reczp:Sep;6egwp;Gep;Kep;Legopxb;:FSb;:FSb;:FSb;:FSawaopxbbbbbbbbbbbbbbbbp:2egqawpxbbbjbbbjbbbjbbbjgmp9op9rp;Kegwawp;Meaoaop;Mearaqaramp9op9rp;Kegoaop;Mep;Kep;Kep;Jep;Negrp;Mepxbbn0bbn0bbn0bbn0gqp;Keczp:Reawarp;Meaqp;KepxFFbbFFbbFFbbFFbbp9op9qgwaoarp;Meaqp;KepxFFbbFFbbFFbbFFbbp9ogopmwDKYqk8AExm35Ps8E8Fp9qpkbbadaDakp9oawaopmbezHdiOAlvCXorQLp9qpkbbadcafhdavclfgvax6mbkkaxae9pmbaiaeciGgvcitgdfcbcaad9R;8kbaiabaxcitfglad;8qbbdnavTmbaiaipblzgopxbbbbbbFFbbbbbbFFgkp9oaipblbgDaopmlvorxmPsCXQL358E8FpxFubbFubbFubbFubbp9op;6eaDaopmbediwDqkzHOAKY8AEgoczp:Sep;6egrp;Geaoczp:Reczp:Sep;6egwp;Gep;Kep;Legopxb;:FSb;:FSb;:FSb;:FSawaopxbbbbbbbbbbbbbbbbp:2egqawpxbbbjbbbjbbbjbbbjgmp9op9rp;Kegwawp;Meaoaop;Mearaqaramp9op9rp;Kegoaop;Mep;Kep;Kep;Jep;Negrp;Mepxbbn0bbn0bbn0bbn0gqp;Keczp:Reawarp;Meaqp;KepxFFbbFFbbFFbbFFbbp9op9qgwaoarp;Meaqp;KepxFFbbFFbbFFbbFFbbp9ogopmwDKYqk8AExm35Ps8E8Fp9qpklzaiaDakp9oawaopmbezHdiOAlvCXorQLp9qpklbkalaiad;8qbbkk;4wllue97euv978Jjjjjbc8W9Rhidnaec98GglTmbcbhvabhoinaiaopbbbgraoczfgwpbbbgDpmlvorxmPsCXQL358E8Fgqczp:Segkclp:RepklbaopxbbjZbbjZbbjZbbjZpx;Zl81Z;Zl81Z;Zl81Z;Zl81Zakpxibbbibbbibbbibbbp9qp;6ep;NegkaraDpmbediwDqkzHOAKY8AEgrczp:Reczp:Sep;6ep;MegDaDp;Meakarczp:Sep;6ep;Megxaxp;Meakaqczp:Reczp:Sep;6ep;Megqaqp;Mep;Kep;Kep;Lepxbbbbbbbbbbbbbbbbp:4ep;Jepxb;:FSb;:FSb;:FSb;:FSgkp;Mepxbbn0bbn0bbn0bbn0grp;KepxFFbbFFbbFFbbFFbbgmp9oaxakp;Mearp;Keczp:Rep9qgxaqakp;Mearp;Keczp:ReaDakp;Mearp;Keamp9op9qgkpmbezHdiOAlvCXorQLgrp5baipblbpEb:T:j83ibaocwfarp5eaipblbpEe:T:j83ibawaxakpmwDKYqk8AExm35Ps8E8Fgkp5baipblbpEd:T:j83ibaocKfakp5eaipblbpEi:T:j83ibaocafhoavclfgval6mbkkdnalae9pmbaiaeciGgvcitgofcbcaao9R;8kbaiabalcitfgwao;8qbbdnavTmbaiaipblbgraipblzgDpmlvorxmPsCXQL358E8Fgqczp:Segkclp:RepklaaipxbbjZbbjZbbjZbbjZpx;Zl81Z;Zl81Z;Zl81Z;Zl81Zakpxibbbibbbibbbibbbp9qp;6ep;NegkaraDpmbediwDqkzHOAKY8AEgrczp:Reczp:Sep;6ep;MegDaDp;Meakarczp:Sep;6ep;Megxaxp;Meakaqczp:Reczp:Sep;6ep;Megqaqp;Mep;Kep;Kep;Lepxbbbbbbbbbbbbbbbbp:4ep;Jepxb;:FSb;:FSb;:FSb;:FSgkp;Mepxbbn0bbn0bbn0bbn0grp;KepxFFbbFFbbFFbbFFbbgmp9oaxakp;Mearp;Keczp:Rep9qgxaqakp;Mearp;Keczp:ReaDakp;Mearp;Keamp9op9qgkpmbezHdiOAlvCXorQLgrp5baipblapEb:T:j83ibaiarp5eaipblapEe:T:j83iwaiaxakpmwDKYqk8AExm35Ps8E8Fgkp5baipblapEd:T:j83izaiakp5eaipblapEi:T:j83iKkawaiao;8qbbkk:Pddiue978Jjjjjbc;ab9Rhidnadcd4ae2glc98GgvTmbcbhdabheinaeaepbbbgocwp:Recwp:Sep;6eaocep:SepxbbjZbbjZbbjZbbjZp:UepxbbjFbbjFbbjFbbjFp9op;Mepkbbaeczfheadclfgdav6mbkkdnaval9pmbaialciGgdcdtgeVcbc;abae9R;8kbaiabavcdtfgvae;8qbbdnadTmbaiaipblbgocwp:Recwp:Sep;6eaocep:SepxbbjZbbjZbbjZbbjZp:UepxbbjFbbjFbbjFbbjFp9op;Mepklbkavaiae;8qbbkk9teiucbcbydj1jjbgeabcifc98GfgbBdj1jjbdndnabZbcztgd9nmbcuhiabad9RcFFifcz4nbcuSmekaehikaikkkebcjwklz9Tbb",e=new Uint8Array([0,97,115,109,1,0,0,0,1,4,1,96,0,0,3,3,2,0,0,5,3,1,0,1,12,1,0,10,22,2,12,0,65,0,65,0,65,0,252,10,0,0,11,7,0,65,0,253,15,26,11]),n=new Uint8Array([32,0,65,2,1,106,34,33,3,128,11,4,13,64,6,253,10,7,15,116,127,5,8,12,40,16,19,54,20,9,27,255,113,17,42,67,24,23,146,148,18,14,22,45,70,69,56,114,101,21,25,63,75,136,108,28,118,29,73,115]);if(typeof WebAssembly!="object")return{supported:!1};var i=WebAssembly.validate(e)?t:s,r,a=WebAssembly.instantiate(o(i),{}).then(function(p){r=p.instance,r.exports.__wasm_call_ctors()});function o(p){for(var y=new Uint8Array(p.length),v=0;v<p.length;++v){var _=p.charCodeAt(v);y[v]=_>96?_-97:_>64?_-39:_+4}for(var M=0,v=0;v<p.length;++v)y[M++]=y[v]<60?n[y[v]]:(y[v]-60)*64+y[++v];return y.buffer.slice(0,M)}function c(p,y,v,_,M,E){var S=r.exports.sbrk,C=v+3&-4,I=S(C*_),x=S(M.length),A=new Uint8Array(r.exports.memory.buffer);A.set(M,x);var U=p(I,v,_,x,M.length);if(U==0&&E&&E(I,C,_),y.set(A.subarray(I,I+v*_)),S(I-S(0)),U!=0)throw new Error("Malformed buffer data: "+U)}var l={NONE:"",OCTAHEDRAL:"meshopt_decodeFilterOct",QUATERNION:"meshopt_decodeFilterQuat",EXPONENTIAL:"meshopt_decodeFilterExp"},h={ATTRIBUTES:"meshopt_decodeVertexBuffer",TRIANGLES:"meshopt_decodeIndexBuffer",INDICES:"meshopt_decodeIndexSequence"},u=[],d=0;function f(p){var y={object:new Worker(p),pending:0,requests:{}};return y.object.onmessage=function(v){var _=v.data;y.pending-=_.count,y.requests[_.id][_.action](_.value),delete y.requests[_.id]},y}function g(p){for(var y="var instance; var ready = WebAssembly.instantiate(new Uint8Array(["+new Uint8Array(o(i))+"]), {}).then(function(result) { instance = result.instance; instance.exports.__wasm_call_ctors(); });self.onmessage = workerProcess;"+c.toString()+m.toString(),v=new Blob([y],{type:"text/javascript"}),_=URL.createObjectURL(v),M=0;M<p;++M)u[M]=f(_);URL.revokeObjectURL(_)}function b(p,y,v,_,M){for(var E=u[0],S=1;S<u.length;++S)u[S].pending<E.pending&&(E=u[S]);return new Promise(function(C,I){var x=new Uint8Array(v),A=d++;E.pending+=p,E.requests[A]={resolve:C,reject:I},E.object.postMessage({id:A,count:p,size:y,source:x,mode:_,filter:M},[x.buffer])})}function m(p){a.then(function(){var y=p.data;try{var v=new Uint8Array(y.count*y.size);c(r.exports[y.mode],v,y.count,y.size,y.source,r.exports[y.filter]),self.postMessage({id:y.id,count:y.count,action:"resolve",value:v},[v.buffer])}catch(_){self.postMessage({id:y.id,count:y.count,action:"reject",value:_})}})}return{ready:a,supported:!0,useWorkers:function(p){g(p)},decodeVertexBuffer:function(p,y,v,_,M){c(r.exports.meshopt_decodeVertexBuffer,p,y,v,_,r.exports[l[M]])},decodeIndexBuffer:function(p,y,v,_){c(r.exports.meshopt_decodeIndexBuffer,p,y,v,_)},decodeIndexSequence:function(p,y,v,_){c(r.exports.meshopt_decodeIndexSequence,p,y,v,_)},decodeGltfBuffer:function(p,y,v,_,M,E){c(r.exports[h[M]],p,y,v,_,r.exports[l[E]])},decodeGltfBufferAsync:function(p,y,v,_,M){return u.length>0?b(p,y,v,h[_],l[M]):a.then(function(){var E=new Uint8Array(p*y);return c(r.exports[h[_]],E,p,y,v,r.exports[l[M]]),E})}}}();class qw extends Pf{constructor(){super();const t=new as;t.deleteAttribute("uv");const e=new jr({side:tn}),n=new jr,i=new Kf(16777215,900,28,2);i.position.set(.418,16.199,.3),this.add(i);const r=new Qt(t,e);r.position.set(-.757,13.219,.717),r.scale.set(31.713,28.305,28.591),this.add(r);const a=new Qt(t,n);a.position.set(-10.906,2.009,1.846),a.rotation.set(0,-.195,0),a.scale.set(2.328,7.905,4.651),this.add(a);const o=new Qt(t,n);o.position.set(-5.607,-.754,-.758),o.rotation.set(0,.994,0),o.scale.set(1.97,1.534,3.955),this.add(o);const c=new Qt(t,n);c.position.set(6.167,.857,7.803),c.rotation.set(0,.561,0),c.scale.set(3.927,6.285,3.687),this.add(c);const l=new Qt(t,n);l.position.set(-2.017,.018,6.124),l.rotation.set(0,.333,0),l.scale.set(2.002,4.566,2.064),this.add(l);const h=new Qt(t,n);h.position.set(2.291,-.756,-2.621),h.rotation.set(0,-.286,0),h.scale.set(1.546,1.552,1.496),this.add(h);const u=new Qt(t,n);u.position.set(-2.193,-.369,-5.547),u.rotation.set(0,.516,0),u.scale.set(3.875,3.487,2.986),this.add(u);const d=new Qt(t,Ps(50));d.position.set(-16.116,14.37,8.208),d.scale.set(.1,2.428,2.739),this.add(d);const f=new Qt(t,Ps(50));f.position.set(-16.109,18.021,-8.207),f.scale.set(.1,2.425,2.751),this.add(f);const g=new Qt(t,Ps(17));g.position.set(14.904,12.198,-1.832),g.scale.set(.15,4.265,6.331),this.add(g);const b=new Qt(t,Ps(43));b.position.set(-.462,8.89,14.52),b.scale.set(4.38,5.441,.088),this.add(b);const m=new Qt(t,Ps(20));m.position.set(3.235,11.486,-12.541),m.scale.set(2.5,2,.1),this.add(m);const p=new Qt(t,Ps(100));p.position.set(0,20,0),p.scale.set(1,.1,1),this.add(p)}dispose(){const t=new Set;this.traverse(e=>{e.isMesh&&(t.add(e.geometry),t.add(e.material))});for(const e of t)e.dispose()}}function Ps(s){const t=new Qe;return t.color.setScalar(s),t}class Xw{constructor(t,e,n,i){this.scene=t,this.camera=e,this.renderer=n,this.items=i,this.mode="hidden",this.active=null,this.reduceMotion=!1,this.anchor=new Ee,this.stage=new Ee,this.spin=new Ee,this.inspectHolder=new Ee,this.lights=new Ee,this.models=new Map,this.loading=new Map,this.envMap=null,this.appear=0,this.targetAppear=0,this.frozenAt=0,this.rotX=0,this.rotY=0,this.velY=0,this.velX=0,this.zoom=1,this.lastTouch=0,this.pointers=new Map,this.pinchDist=0,this.pinchAngle=0,this.tapStart={t:0,x:0,y:0},this.lastTap=0,this.envIntensity=1,this.anchor.matrixAutoUpdate=!1,this.anchor.add(this.stage),this.stage.add(this.spin),this.anchor.visible=!1,e.add(this.anchor),this.inspectHolder.position.set(0,.035,-.45),e.add(this.inspectHolder);const r=new H_(16774890,7035466,1.1),a=new $f(16777215,1.6);a.position.set(.6,1,.8),this.lights.add(r,a),e.add(this.lights)}ensureEnv(){if(this.envMap)return this.envMap;const t=new Al(this.renderer);return this.envMap=t.fromScene(new qw,.04).texture,t.dispose(),this.envMap}preload(){for(const t of this.items)this.load(t)}load(t){const e=this.loading.get(t.id);if(e)return e;const n=new lw;n.setMeshoptDecoder(Ww);const i=new URL(t.model,document.baseURI).href,r=this.ensureEnv(),a=n.loadAsync(i).then(o=>{const c=o.scene,l=new Jn().setFromObject(c),h=l.getSize(new R),u=l.getCenter(new R),d=1/Math.max(h.x,h.y,h.z),f=new Ee;return c.position.sub(u),f.add(c),f.scale.setScalar(d),c.traverse(g=>{const b=g.material;b&&"envMap"in b&&(b.envMap=r,b.envMapIntensity=.9,b.needsUpdate=!0),g.renderOrder=4}),this.models.set(t.id,f),f}).catch(o=>(console.warn("[artifact] không tải được model",t.model,o),null));return this.loading.set(t.id,a),a}async show(t){const e=this.items.find(i=>i.targetIndex===t);if(!e||this.mode==="inspect")return;const n=await this.load(e);n&&(this.active?.id!==e.id&&(this.spin.clear(),this.spin.add(n),this.resetView(),this.appear=0,this.active=e),this.anchor.parent!==this.camera&&this.camera.add(this.anchor),this.stage.position.set(...e.offset),this.stage.rotation.set(.32,0,0),this.stage.scale.setScalar(e.size),this.anchor.visible=!0,this.targetAppear=1,this.setMode("anchored"))}lose(t,e){this.mode==="anchored"&&(this.anchor.matrix.multiplyMatrices(t,e),this.scene.add(this.anchor),this.frozenAt=performance.now(),this.setMode("frozen"))}inspect(){if(!this.active)return;this.inspectHolder.add(this.spin),this.spin.position.set(0,0,0);const t=this.camera,e=2*Math.tan(Tt.degToRad(t.fov/2))*.45*t.aspect;this.inspectHolder.scale.setScalar(Math.min(.2,e*.6)),this.inspectHolder.rotation.set(.25,0,0),this.anchor.visible=!1,this.appear=Math.min(this.appear,.3),this.targetAppear=1,this.setMode("inspect")}close(){this.stage.add(this.spin),this.targetAppear=0,this.setMode("hidden")}resetView(){this.rotX=0,this.rotY=0,this.velX=this.velY=0,this.zoom=1}get visible(){return this.mode!=="hidden"}setMode(t){t!==this.mode&&(this.mode=t,this.onChange?.(t==="hidden"?null:this.active,t))}setLight(t){this.envIntensity=Tt.lerp(.55,1.1,Tt.clamp(t/.5,0,1))}attachGestures(t,e){t.addEventListener("pointerdown",i=>{!e()||!this.visible||(this.pointers.set(i.pointerId,{x:i.clientX,y:i.clientY}),t.setPointerCapture?.(i.pointerId),this.pointers.size===1&&(this.tapStart={t:performance.now(),x:i.clientX,y:i.clientY}),this.pointers.size===2&&this.pinchInit(),this.velX=this.velY=0)}),t.addEventListener("pointermove",i=>{const r=this.pointers.get(i.pointerId);if(!r)return;const a=i.clientX-r.x,o=i.clientY-r.y;if(r.x=i.clientX,r.y=i.clientY,this.lastTouch=performance.now(),this.pointers.size===1)this.rotY+=a*.011,this.rotX=Tt.clamp(this.rotX+o*.011,-1.2,1.2),this.velY=a*.011*60,this.velX=o*.011*60;else if(this.pointers.size===2){const[c,l]=[...this.pointers.values()],h=Math.hypot(c.x-l.x,c.y-l.y),u=Math.atan2(l.y-c.y,l.x-c.x);this.pinchDist>0&&(this.zoom=Tt.clamp(this.zoom*(h/this.pinchDist),.5,3));let d=u-this.pinchAngle;d>Math.PI&&(d-=Math.PI*2),d<-Math.PI&&(d+=Math.PI*2),this.rotY-=d,this.pinchDist=h,this.pinchAngle=u}});const n=i=>{if(!this.pointers.has(i.pointerId))return;this.pointers.delete(i.pointerId),this.pointers.size===1&&this.pinchInit();const r=performance.now(),a=Math.hypot(i.clientX-this.tapStart.x,i.clientY-this.tapStart.y);this.pointers.size===0&&r-this.tapStart.t<250&&a<10&&(r-this.lastTap<320?(this.resetView(),this.lastTap=0):this.lastTap=r)};t.addEventListener("pointerup",n),t.addEventListener("pointercancel",n)}pinchInit(){const t=[...this.pointers.values()];if(t.length<2){this.pinchDist=0;return}this.pinchDist=Math.hypot(t[0].x-t[1].x,t[0].y-t[1].y),this.pinchAngle=Math.atan2(t[1].y-t[0].y,t[1].x-t[0].x)}update(t,e){this.mode==="anchored"&&e&&this.anchor.matrix.copy(e),this.mode==="frozen"&&performance.now()-this.frozenAt>2500&&(this.targetAppear=0,this.appear<.02&&(this.camera.add(this.anchor),this.anchor.visible=!1,this.setMode("hidden")));const n=this.reduceMotion?12:5;if(this.appear+=(this.targetAppear-this.appear)*Math.min(1,t*n),this.mode==="hidden"&&this.appear<.02){this.anchor.visible=!1,this.spin.visible=!1;return}if(this.spin.visible=!0,!(this.pointers.size>0)){this.rotY+=this.velY*t,this.rotX=Tt.clamp(this.rotX+this.velX*t,-1.2,1.2);const a=Math.exp(-t*3.5);this.velY*=a,this.velX*=a,!this.reduceMotion&&performance.now()-this.lastTouch>3e3&&Math.abs(this.velY)<.05&&(this.rotY+=t*.3)}const r=jw(Tt.clamp(this.appear,0,1));this.spin.rotation.set(this.rotX,this.rotY,0,"XYZ"),this.spin.scale.setScalar(Math.max(.001,r*this.zoom)),this.spin.position.y=this.mode==="inspect"?0:(1-this.appear)*-.25;for(const a of this.models.values())a.traverse(o=>{const c=o.material;c&&"envMapIntensity"in c&&(c.envMapIntensity=this.envIntensity)})}}function jw(s){return 1+2.4*Math.pow(s-1,3)+1.4*Math.pow(s-1,2)}class Yw{constructor(t,e,n){this.root=t,this.s=e,this.h=n,this.artState={item:null,mode:"hidden"},this.artHandlers=null,this.handState="off",this.dropdown=null,this.speaking=!1,this.canFlip=!1,this.selfie=!1,this.xrActive=!1,this.guide={phase:"idle",floorNow:1,floorTo:1,remaining:0,accuracy:NaN,routeState:"none"},this.guideShown="",this.onMenuKey=i=>{i.key==="Escape"&&(this.closeMenu(),this.menuBtn.focus())},this.el=jn("div","hud"),this.el.innerHTML=`
      <div class="hud__top">
        <div class="chip chip--hand" aria-live="polite">${Sn.hand}<span></span></div>
        <div class="hud__right">
          <button class="round round--top" type="button" data-menu aria-haspopup="menu" aria-expanded="false">${Sn.gear}</button>
          <button class="round round--top" type="button" data-mode></button>
        </div>
      </div>
      <div class="wayfind" hidden></div>
      <div class="artcard" hidden></div>
      <div class="hud__bottom">
        <button class="round round--left" type="button" data-ask>${Sn.chat}</button>
        <button class="shutter" type="button" data-shot></button>
        <button class="round round--right" type="button" data-flip hidden>${Sn.flip}</button>
      </div>`,this.handChip=this.el.querySelector(".chip--hand"),this.modeBtn=this.el.querySelector("[data-mode]"),this.menuBtn=this.el.querySelector("[data-menu]"),this.flipBtn=this.el.querySelector("[data-flip]"),this.way=this.el.querySelector(".wayfind"),this.art=this.el.querySelector(".artcard"),this.el.querySelector("[data-shot]").addEventListener("click",()=>n.capture()),this.modeBtn.addEventListener("click",()=>n.setMode(this.s.mode==="indoor"?"outdoor":"indoor")),this.menuBtn.addEventListener("click",()=>this.dropdown?this.closeMenu():this.openMenu()),this.flipBtn.addEventListener("click",()=>this.h.flipCamera?.()),this.el.querySelector("[data-ask]").addEventListener("click",()=>this.h.ask?.()),t.appendChild(this.el),bh(()=>this.refresh()),this.refresh()}update(t){this.s=t,this.refresh()}setHand(t){t!==this.handState&&(this.handState=t,this.refreshHand())}setArtifact(t,e){this.artState={item:t,mode:e},this.refreshArt()}setSpeaking(t){t!==this.speaking&&(this.speaking=t,this.refreshArt())}setCamera(t,e){this.canFlip=t,this.selfie=e,this.refresh()}refreshArt(){const{item:t,mode:e}=this.artState,n=!!t&&e!=="hidden";if(this.art.hidden=!n,this.el.classList.toggle("has-art",n),!n||!t)return;const i=$e()==="vi",r=i?t.titleVi:t.titleEn,a=i?t.titleEn:t.titleVi,o=i?t.descVi:t.descEn,c=e==="inspect",l=e==="info";this.art.classList.toggle("artcard--info",l),this.art.innerHTML=`
      <strong>${r}</strong>
      <span class="en">${a}</span>
      ${o?`<p>${o}</p>`:""}
      ${l?"":`<span class="hint">${W("artHint")}</span>`}
      <div class="row">
        ${l?`<button class="round round--sm" type="button" data-a="speak" aria-pressed="${this.speaking}" aria-label="${this.speaking?W("readStop"):W("readAloud")}" title="${this.speaking?W("readStop"):W("readAloud")}">${Sn.speaker}</button>`:""}
        <button class="btn btn--ghost" type="button" data-a="ask">${W("askMore")}</button>
        ${l?`<button class="btn" type="button" data-a="close">${W("artClose")}</button>`:c?`<button class="btn btn--ghost" type="button" data-a="reset">${W("artReset")}</button>
             <button class="btn" type="button" data-a="close">${W("artClose")}</button>`:`<button class="btn" type="button" data-a="inspect">${W("artInspect")}</button>`}
      </div>`,this.art.querySelectorAll("[data-a]").forEach(h=>h.addEventListener("click",()=>{const u=h.dataset.a;this.artHandlers?.[u]()}))}refreshHand(){const t=this.handChip.querySelector("span"),e=this.handState;this.handChip.classList.toggle("show",e!=="off"&&this.s.mode==="indoor"),this.handChip.classList.toggle("hold",e==="hold"),t.textContent=e==="hold"?W("handHolding"):e==="loading"?W("handLoading"):e==="seen"?W("handSeen"):""}setGuide(t){if(this.guide={...t},this.s.mode==="indoor")return;this.guideKey()!==this.guideShown&&this.refreshWay()}guideKey(){const t=this.guide;return`${$e()}|${this.s.mode}|${t.phase}|${this.guideText()}`}guideText(){const t=this.guide,e=$e()==="vi",n=e?Ze.shortVi:Ze.shortEn,i=Number.isFinite(t.accuracy)&&t.accuracy>20?` · ${W("guideGps")(Math.round(t.accuracy))}`:"";if(t.phase==="locating")return W("guideLocating")+(Number.isFinite(t.accuracy)?` · ${W("guideGps")(Math.round(t.accuracy))}`:"");if(t.phase==="floor")return t.floorTo<t.floorNow?W("guideGoDown")(t.floorTo):W("guideGoUp")(t.floorTo);if(t.phase==="arrived")return W("guideArrived")(n);if(t.routeState==="loading")return`${n} · ${W("guideRouting")}…`;const r=t.routeState==="failed"?` · ${W("guideBeeline")}`:"",a=t.remaining,o=a>=1e3?`${(a/1e3).toFixed(1).replace(".",e?",":".")} km`:`${a>=100?Math.round(a/10)*10:Math.round(a)} m`;return W("guideLeft")(n,o)+r+i}refreshGuide(){const t=this.guide;this.way.hidden=t.phase==="idle",this.guideShown=this.guideKey();const e=this.s.mode==="outdoor",n=t.phase==="floor"?`<button class="btn" type="button" data-gfloor>${W("guideFloorDone")(t.floorTo)}</button>`:e?`<button class="btn" type="button" data-in aria-label="${W("arrived")}" title="${W("arrived")}">${W("arrivedShort")}</button>`:`<button class="btn btn--ghost" type="button" data-gchange>${W("guideChange")}</button>`;this.way.innerHTML=`
      <span class="wayfind__text" aria-live="polite">${this.guideText()}</span>
      ${n}
      ${e?"":`<button class="wayfind__x" type="button" data-gexit aria-label="${W("guideExit")}" title="${W("guideExit")}">×</button>`}`,this.way.querySelector("[data-in]")?.addEventListener("click",()=>this.h.arrived()),this.way.querySelector("[data-gchange]")?.addEventListener("click",()=>this.h.guideOpen?.()),this.way.querySelector("[data-gfloor]")?.addEventListener("click",()=>this.h.guideFloorDone?.()),this.way.querySelector("[data-gexit]")?.addEventListener("click",()=>this.h.guideExit?.())}openGuideSetup(t,e){const n=(r,a,o)=>`<label class="opt"><span>${r}</span><input type="number" inputmode="numeric" data-g="${a}" value="${o}" min="-5" max="100" step="1" style="width:5.5em;font:inherit;padding:6px 8px;text-align:right"/></label>`,i=$e()==="vi";Rc(this.root,`<h2>${W("guideTitle")}</h2><p class="en">${Ui("guideTitle")}</p>
       <p>${i?Ze.nameVi:Ze.nameEn}</p><p class="fine">${W("guideHint")}</p>
       ${n(W("guideFloorNow"),"floorNow",t.floorNow)}
       ${n(W("guideFloorTo"),"floorTo",t.floorTo)}
       <p class="fine" data-gerr hidden>${W("guideBadInput")}</p>
       <div class="actions"><button class="btn" type="button" data-ok>${W("guideGo")}</button><button class="link" type="button" data-x>${W("close")}</button></div>`,(r,a)=>{const o=c=>parseFloat(r.querySelector(`[data-g="${c}"]`).value);r.querySelector("[data-ok]").addEventListener("click",()=>{const c={floorNow:o("floorNow"),floorTo:o("floorTo")};if(!Number.isInteger(c.floorNow)||!Number.isInteger(c.floorTo)){r.querySelector("[data-gerr]").hidden=!1;return}a(),e(c)}),r.querySelector("[data-x]").addEventListener("click",a)})}refreshWay(){this.way.classList.toggle("wayfind--compact",this.s.mode!=="indoor"),this.s.mode==="indoor"?this.way.hidden=!0:this.refreshGuide()}refresh(){const t=this.s.mode==="indoor",e=this.el.querySelector("[data-ask]");e.setAttribute("aria-label",W("askChip")),e.title=W("askChip");const n=W(t?"modeOutdoor":"modeIndoor");this.modeBtn.innerHTML=t?Sn.pin:Sn.door,this.modeBtn.setAttribute("aria-label",W("modeSwitchTo")(n)),this.modeBtn.title=W("modeSwitchTo")(n),this.el.querySelector("[data-shot]").setAttribute("aria-label",W("capture")),this.menuBtn.setAttribute("aria-label",W("menu")),this.menuBtn.title=W("menu"),this.flipBtn.hidden=!this.canFlip||this.xrActive,this.flipBtn.setAttribute("aria-label",W("flipCamera")),this.flipBtn.title=W("flipCamera"),this.flipBtn.setAttribute("aria-pressed",String(this.selfie)),this.refreshHand(),this.refreshWay(),this.refreshArt()}openMenu(){this.closeMenu();const t=jn("div","dropdown-scrim"),e=jn("div","dropdown");e.setAttribute("role","menu"),e.setAttribute("aria-label",W("menu")),e.innerHTML=`
      <button class="dropdown__item" type="button" role="menuitem" data-lang lang="${$e()==="vi"?"en":"vi"}">${Sn.globe}<span>${W("language")}</span></button>
      <button class="dropdown__item" type="button" role="menuitem" data-tut>${Sn.play}<span>${W("tutorial")}</span></button>
      <button class="dropdown__item" type="button" role="menuitem" data-help>${Sn.help}<span>${W("help")}</span></button>`,t.addEventListener("click",()=>this.closeMenu()),e.querySelector("[data-lang]").addEventListener("click",()=>{this.closeMenu(),cp($e()==="vi"?"en":"vi")}),e.querySelector("[data-tut]").addEventListener("click",()=>{this.closeMenu(),this.h.tutorial()}),e.querySelector("[data-help]").addEventListener("click",()=>{this.closeMenu(),this.openHelp()}),this.root.append(t,e),this.dropdown={menu:e,scrim:t},this.menuBtn.setAttribute("aria-expanded","true"),document.addEventListener("keydown",this.onMenuKey),e.querySelector(".dropdown__item")?.focus({preventScroll:!0})}closeMenu(){this.dropdown&&(this.dropdown.menu.remove(),this.dropdown.scrim.remove(),this.dropdown=null,this.menuBtn.setAttribute("aria-expanded","false"),document.removeEventListener("keydown",this.onMenuKey))}openHelp(){Rc(this.root,`<h2>${W("help")}</h2><p class="en">${Ui("help")}</p><p>${W("helpBody")}</p><p class="fine">${W("privacy")}</p>
       <div class="actions"><button class="btn btn--ghost" type="button" data-x>${W("close")}</button></div>`,(t,e)=>t.querySelector("[data-x]").addEventListener("click",e))}showPhoto(t,e){const n=!!(navigator.canShare&&navigator.canShare({files:[new File([e],"don-gio-xuan.jpg",{type:"image/jpeg"})]}));Rc(this.root,`<h2>${W("photoReady")}</h2><p class="en">${Ui("photoReady")}</p>
       <img class="photo" src="${t}" alt="${W("photoReady")}" />
       <div class="actions">
         ${n?`<button class="btn" type="button" data-share>${W("sharePhoto")}</button>`:""}
         <a class="btn ${n?"btn--ghost":""}" href="${t}" download="don-gio-xuan.jpg" style="text-decoration:none">${W("savePhoto")}</a>
         <button class="link" type="button" data-x>${W("close")}</button>
       </div>`,(i,r)=>{i.querySelector("[data-x]").addEventListener("click",()=>{r(),URL.revokeObjectURL(t)}),i.querySelector("[data-share]")?.addEventListener("click",()=>{navigator.share({files:[new File([e],"don-gio-xuan.jpg",{type:"image/jpeg"})],title:"Đón Gió Xuân"}).catch(()=>{})})})}}function Kw(s,t,e=!1){return new Promise(n=>{const i=s.getContext("2d"),r=Math.min(2,devicePixelRatio||1);s.width=innerWidth*r,s.height=innerHeight*r,i.scale(r,r);const{canvas:a}=yo(),o=innerWidth,c=innerHeight,l=o/2,h=c/2,u=Math.hypot(o,c)*.6,d=e?0:140,f=Array.from({length:d},(y,v)=>({a:Math.random()*Math.PI*2,r0:u*(.7+Math.random()*.5),s:18+Math.random()*26,cell:v%9===0?7:v%6===0?4:v%4,spin:(Math.random()-.5)*8,delay:Math.random()*.25})),g=e?500:1500,b=performance.now();let m=!1;const p=y=>{const v=Math.min(1,(y-b)/g);i.clearRect(0,0,o,c);const _=Math.sin(Math.PI*v);i.fillStyle=`rgba(252,250,240,${(e?1:.85)*_})`,i.fillRect(0,0,o,c);for(const M of f){const E=Math.min(1,Math.max(0,(v-M.delay)/(1-M.delay))),S=E<.5?2*E*E:1-Math.pow(-2*E+2,2)/2,C=M.r0*(1-Math.sin(S*Math.PI)*.85),I=M.a+S*Math.PI*2.4,x=l+Math.cos(I)*C,A=h+Math.sin(I)*C,U=SM(M.cell);i.save(),i.globalAlpha=Math.sin(Math.PI*E),i.translate(x,A),i.rotate(I+M.spin*S),i.drawImage(a,U.sx,U.sy,U.s,U.s,-M.s/2,-M.s/2,M.s,M.s),i.restore()}!m&&v>=.5&&(m=!0,t()),v<1?requestAnimationFrame(p):(i.clearRect(0,0,o,c),n())};requestAnimationFrame(p)})}let Tr=null;function pp(){try{Tr??(Tr=new(window.AudioContext||window.webkitAudioContext));const s=Tr.currentTime;for(const[t,e]of[[1318.5,0],[1760,.07]]){const n=Tr.createOscillator(),i=Tr.createGain();n.type="sine",n.frequency.value=t,i.gain.setValueAtTime(0,s+e),i.gain.linearRampToValueAtTime(.035,s+e+.01),i.gain.exponentialRampToValueAtTime(1e-4,s+e+.6),n.connect(i).connect(Tr.destination),n.start(s+e),n.stop(s+e+.65)}}catch{}}const sr=s=>document.getElementById(s),ie=sr("ui"),$w=sr("fx"),yh=new URLSearchParams(location.search),mp=yh.has("debug"),le=new ny(sr("cam")),Be=new ry,Ot=new ay(sr("gl")),gi=new Ee;Ot.scene.add(gi);const ue=new NM(gi),wo=new UM(Ot.camera),Ht=new LS(Ot.scene),Yn=new DS(Ze.lat,Ze.lng);Yn.onFix=s=>Ht.gpsFix(s);Ht.onNeedRoute=(s,t)=>{const e=ip(s,t,Ze.lat,Ze.lng),n=Ht.routeState==="loading";US(e,Ze).then(i=>{Rt.mode!=="indoor"&&(Ht.setRoute(i?.points??null),!i&&n&&xe(ie,rp()?W("guideRouteFail"):W("guideNoKey"),6e3,!0))})};Yn.onError=s=>{Rt.mode!=="indoor"&&xe(ie,W(s==="denied"?"guideGpsDenied":s==="insecure"?"errInsecure":"guideGpsNone"),7e3,!0)};const we=new vM,gp=new Il(gi),Ii=new by,Vn=new cy,ze=new Ey(Ot.gl,gi,Ot.scene),Jw=new xM,qn=new Uy,Od=new Float32Array(ht*Gt),vi=new Hy(180),Zi=new dM,bn=new $y,zn=new Jy;_i.uSurface.value=bn.texture;let Bd=0;zn.onResult=(s,t)=>{bn.integrate(s,t.proj,t.projInv,t.q);const e=performance.now(),n=Math.min(2,(e-Bd)/1e3);Bd=e;const i=t.pos;vi.recenter(i.x,i.z),vi.observe(bn.floorMask,t.projInv,t.q,i,n),Zi.updateMask(bn.ceilMask,t.projInv,t.q,i.y,(r,a)=>vi.wallAlong(i.x,i.z,r,a)),Js&&Mp(Js)};const kl=new R;ue.petals.room={ceilingY:ho,isInside:(s,t)=>vi.isInside(kl.x,kl.z,s,t)};function Qw(){vi.reset(),Zi.reset(),bn.reset(),zn.invalidate()}ue.petals.sources.push(we);const Ao=up.items,Zw=Ao.filter(s=>(s.kind??"model")==="model"),cn=new cw(le,Ao.map(s=>({targetIndex:s.targetIndex,physicalWidth:s.physicalWidth,poseless:s.kind==="info"||s.kind==="enter"})),up.targets,Ae.camera.longEdgeFovDeg),Pe=new Xw(Ot.scene,Ot.camera,Ot.gl,Zw);let ss=null,Yr=!1;function Mh(){ss=null,be?.setArtifact(null,"hidden"),So(),Yr&&(Yr=!1,wh.change({reading:!1}))}let Eo=!1;function t1(){Eo=!1,be?.setSpeaking(!1),Yr&&(Yr=!1,Rt.reading=!1,rs())}function bp(){const s=Ah();if(!s)return;const t=$e(),e=hp(qS(s,t),t,t1);if(e==="unsupported"){xe(ie,W("readNoTts"),5e3,!0);return}e==="no-voice"&&xe(ie,W("readNoVoice"),6e3,!0),Eo=!0,be?.setSpeaking(!0),Rt.reading||(Yr=!0,Rt.reading=!0,rs())}bh(()=>{Eo&&bp()});cn.onFound=s=>{const t=Ao.find(e=>e.targetIndex===s);if(t){if(t.kind==="enter"){Rt.mode!=="indoor"&&r1();return}if(Rt.mode==="indoor")if(t.kind==="info"){if(Pe.visible)return;ss=t,be?.setArtifact(t,"info"),navigator.vibrate&&navigator.vibrate(8)}else ss&&Mh(),Pe.show(s)}};cn.onLost=()=>{Ot.camera.updateMatrixWorld(),Pe.lose(Ot.camera.matrixWorld,cn.matrix)};Pe.onChange=(s,t)=>{const e=t!=="hidden";Be.dragBlocked=e,we.paused=e,cn.paused=t==="inspect",ue.petals.readingMode=Rt.reading||e,be?.setArtifact(s,t),e&&navigator.vibrate&&navigator.vibrate(8)};Pe.attachGestures(sr("gl"),()=>Rt.mode==="indoor");let zd=!1;const e1=matchMedia("(prefers-reduced-motion: reduce)").matches,Rt={mode:"indoor",reading:!1,sound:!1,battery:!1,reduceMotion:e1,density:1,guide:yh.has("guide")};let be=null,Sh=!1,vn=!1;const Za=BS(ie,n1);"serviceWorker"in navigator&&(Za.setStatus(W("offlineLoading")),navigator.serviceWorker.register("./sw.js").then(()=>navigator.serviceWorker.ready).then(()=>Za.setStatus(W("offlineReady"))).catch(()=>Za.setStatus("")));ze.detect();let vp=null,xp=null;async function n1(){const s=await zS(ie,ze.supported,t=>{t.xr||(xp=Be.requestPermission(),vp=le.start())});s&&(Rt.mode=s.mode,Za.leave(),be=new Yw(ie,Rt,wh),be.artHandlers={inspect:()=>Pe.inspect(),reset:()=>Pe.resetView(),ask:()=>{const t=Ah();t&&Eh.open(W("askAbout")($e()==="vi"?t.titleVi:t.titleEn))},speak:()=>Eo?So():bp(),close:()=>{if(ss){Mh();return}Pe.close(),cn.current>=0&&setTimeout(()=>Pe.show(cn.current),350)}},rs(),s.xr?await i1():await Ol(),Sh=!0,Ot.gl.setAnimationLoop(d1),!HS()&&Rt.mode==="indoor"&&await lp(ie),ze.session||xe(ie,Rt.mode==="indoor"&&vn?`${W("floorScan")} ${W("safety")}`:W("safety"),6500))}async function Ol(){qn.reset(),document.body.classList.remove("xr");try{await(vp??le.start()),vn=!0,le.countCameras().then(t=>be?.setCamera(t!==1,le.selfie))}catch(t){const e=t;vn=!1,document.body.classList.add("no-camera"),Rt.guide=!0,rs(),xe(ie,W(e==="denied"?"errDenied":e==="insecure"?"errInsecure":"errNoCam"),7e3,!0)}const s=await(xp??Be.requestPermission());Be.enableDrag(sr("gl")),s==="denied"?xe(ie,W("errSensorDenied"),6e3,!0):setTimeout(()=>{!Be.hasOrientation&&vn&&xe(ie,W("errNoSensor"),5e3,!0)},1500),ki(Rt.mode,!1),vn&&(be?.setHand("loading"),we.init().then(()=>{be?.setHand(we.active?"seen":"off"),we.status==="error"&&xe(ie,W("errHand"),4e3,!0),Bl()}))}function Bl(){!vn||ze.session||(Pe.preload(),cn.start().then(()=>{cn.status==="ready"&&!zd&&(zd=!0,setTimeout(()=>xe(ie,W("artScan"),6e3),6e3))}))}async function i1(){document.body.classList.add("xr"),be&&(be.xrActive=!0),ki("indoor",!1);const s={scanning:"xrScan",notFloor:"xrNotFloor",ready:"xrPlace"};ze.onStatus=t=>{t!=="placed"&&xe(ie,W(s[t]),12e4,t==="notFloor")},ze.onRejected=()=>xe(ie,W("xrNotFloor"),12e4,!0),ze.onPlaced=()=>{ue.petals.clear(),xe(ie,`${W("xrPlaced")}. ${W("safety")}`,5e3)},ze.onFloorChanged=()=>{ue.petals.clear(),xe(ie,W("xrFloorFixed"),5e3)},ze.onEnd=()=>{be&&(be.xrActive=!1),rs(),Ol()};try{await ze.start(ie),rs()}catch{be&&(be.xrActive=!1),await Ol()}}function ki(s,t=!0){const e=()=>{Rt.mode=s,ue.setVisible(s==="indoor"),wo.setVisible(s==="outdoor"),Ht.setVisible(s!=="indoor"),s==="indoor"?(Ht.stop(),Yn.stop(),po.setVisible(!1),Qw()):s==="outdoor"&&(Ht.start({floorNow:1,floorTo:1}),Yn.start(),yp()),gp.mesh.visible=!1,s==="indoor"?(cn.paused=!1,we.status==="ready"&&Bl(),Ii.setX(.6),Be.recenter(0),ue.petals.clear()):(cn.paused=!1,we.status==="ready"&&Bl(),Pe.visible&&Pe.close(),ss&&Mh()),be?.update(Rt)};t&&s==="indoor"?Kw($w,e,Rt.reduceMotion):e()}function rs(){const s=ue.petals;s.readingMode=Rt.reading||Pe.visible,Pe.reduceMotion=Rt.reduceMotion,s.density=Rt.density,s.reduceMotion=Rt.reduceMotion,document.body.classList.toggle("reduce-motion",Rt.reduceMotion),Vn.setBatterySaver(Rt.battery||!!ze.session),_p(),ue.guide.visible=Rt.guide,be?.update(Rt)}function _p(){const s=Vn.settings;Ot.setPixelRatio(s.pixelRatio),ue.petals.maxFalling=s.maxFalling,ue.petals.maxResting=s.maxResting,ue.branches.setDetail(s.branchDetail),we.hz=s.handHz,Ht.setSparkles(s.sparkles&&!Rt.battery)}Vn.onChange=_p;const wh={capture:c1,setMode:s=>{ki(s,!0),xe(ie,W("modeNow")(W(s==="indoor"?"modeIndoor":"modeOutdoor")),1800)},flipCamera:s1,change(s){const t=s.reading!==void 0&&s.reading!==Rt.reading;Object.assign(Rt,s),rs(),t&&xe(ie,Rt.reading?W("readingOn"):W("readingOff"),2400)},tutorial(){lp(ie)},arrived(){ki("indoor",!0)},guideOpen:a1,guideFloorDone(){Ht.start({floorNow:Ht.floorTo,floorTo:Ht.floorTo})},guideExit(){ki("indoor",!0)},ask:s=>Eh.open(s)};let Nc=!1;async function s1(){if(!(!vn||ze.session||Nc)){Nc=!0;try{await le.flip()}catch{xe(ie,W("flipFail"),4e3,!0)}Nc=!1,document.body.classList.toggle("selfie",le.selfie),be?.setCamera(!0,le.selfie)}}function r1(){ki("indoor",!0),xe(ie,W("enterWelcome"),4e3),navigator.vibrate&&navigator.vibrate([10,60,10])}function Ah(){return ss||(Pe.visible?Pe.active:null)}const Eh=new ZS(ie,{items:Ao.filter(s=>s.kind!=="enter"),current:Ah,status:()=>Rt.mode!=="indoor"&&Ht.hasFix?`Khách đang được dẫn đường tới ${Ze.nameVi}, còn khoảng ${Math.round(Ht.distanceLeft)} m.`:Rt.mode==="indoor"?"Khách đang ở trong hành lang trưng bày.":"Khách đang ở ngoài cổng di tích.",photo:()=>vn?le.captureJpeg():null,speak:()=>Rt.sound}),po=new iw(ie);let Hd=0;function a1(){be?.openGuideSetup(Ht.lastSetup,s=>{Rt.mode!=="guide"&&ki("guide",!1),Ht.hasFix||Yn.start(),Ht.start(s),s.floorNow!==s.floorTo&&xe(ie,W("guideStairs"),4e3),yp()})}function yp(){setTimeout(()=>{Rt.mode!=="indoor"&&Yn.compass===null&&xe(ie,W("guideNoCompass"),7e3,!0)},4e3)}Ht.onArrive=()=>{xe(ie,W("guideArrived")($e()==="vi"?Ze.shortVi:Ze.shortEn),5e3),Rt.sound&&pp()};Jw.onFix=s=>{Rt.mode==="indoor"&&(Ii.fixAtPanel(s.panel),Be.recenter(s.panel.side==="orange"?Math.PI/2:-Math.PI/2),xe(ie,`${W("fixed")} ${s.panel.id}`,2200))};const Fc=new R;Be.onStep=()=>{Fc.set(0,0,-1).applyQuaternion(le.selfie?Be.quaternion:Ot.camera.quaternion),Rt.mode==="indoor"?Ii.onStep(Fc):Ht.step(Fc)};we.onChange=(s,t)=>{we.status==="ready"&&be?.setHand(s?t?"hold":"seen":"off")};ue.petals.onGrab=()=>{Rt.sound&&pp()};class o1{constructor(){this.active=!0,this.t=0,this.c=new R,this.v=new R,this.q=new Kt,this.grabbing=!1,this.mesh=new Qt(new hh(.045,16,12),new Qe({color:688070,wireframe:!0,transparent:!0,opacity:.6}))}update(t,e){this.t+=t;const n=this.c.clone(),i=new R(Math.sin(this.t*.9)*.12,-.05+Math.cos(this.t*1.3)*.06,-.42);this.c.copy(i.applyMatrix4(e.matrixWorld)),this.v.subVectors(this.c,n).divideScalar(Math.max(t,.001)),this.q.copy(e.quaternion),this.grabbing=this.t%9>6,this.mesh.position.copy(this.c)}colliders(){return[{kind:"sphere",c:this.c,r:.045,vel:this.v,palm:!0}]}cup(){return{center:this.c,radius:.07,quaternion:this.q,grabbing:this.grabbing,vel:this.v}}}const Or=yh.get("demo")==="hand"?new o1:null;Or&&(ue.petals.sources.push(Or),gi.add(Or.mesh));const Is=new Image;Is.src=new URL("./brand/title-cream.webp",document.baseURI).href;function c1(){const s=Math.min(2,devicePixelRatio||1),t=Math.round(innerWidth*s),e=Math.round(innerHeight*s),n=document.createElement("canvas");n.width=t,n.height=e;const i=n.getContext("2d");if(vn&&le.ready){const o=le.layout();i.save(),le.mirrored&&(i.translate(t,0),i.scale(-1,1)),i.drawImage(le.video,-o.ox*s,-o.oy*s,o.vw*o.scale*s,o.vh*o.scale*s),i.restore()}else{const o=i.createLinearGradient(0,0,0,e);o.addColorStop(0,"#f3efe2"),o.addColorStop(1,"#cfc6b1"),i.fillStyle=o,i.fillRect(0,0,t,e)}Ot.render(),i.drawImage(Ot.gl.domElement,0,0,t,e);const r=i.createLinearGradient(0,e*.78,0,e);if(r.addColorStop(0,"rgba(0,58,110,0)"),r.addColorStop(1,"rgba(0,58,110,0.55)"),i.fillStyle=r,i.fillRect(0,e*.78,t,e*.22),Is.complete&&Is.naturalWidth){const o=Math.min(t*.42,420*s),c=o*Is.naturalHeight/Is.naturalWidth;i.drawImage(Is,20*s,e-c-22*s,o,c)}i.fillStyle="rgba(252,250,240,0.9)",i.font=`italic ${14*s}px "EB Garamond", serif`,i.textAlign="right",i.fillText("Di tích Nhà tù Hỏa Lò · Xuân 2027",t-18*s,e-24*s);const a=document.createElement("div");a.className="flash",document.body.appendChild(a),setTimeout(()=>a.remove(),500),n.toBlob(o=>{!o||!be||be.showPhoto(URL.createObjectURL(o),o)},"image/jpeg",.9)}let Gd=performance.now(),Vd=0,Uc=0,Wd=!1,qd=0;const kc=new Et(1,1,1),ji=new R,Oc=new R,Xd=new _t,jd=new Kt,l1=new Kt().setFromAxisAngle(new R(0,1,0),Math.PI),Yd=mp?document.body.appendChild(Object.assign(document.createElement("div"),{className:"debug"})):null,h1=100,u1=1.2;let Kd=0,Bc=0,$d=0;const Jd=new Kt,Js=mp?document.body.appendChild(Object.assign(document.createElement("canvas"),{width:ht,height:Gt})):null;Js&&(Js.style.cssText="position:fixed;left:8px;top:8px;width:72px;height:128px;z-index:60;opacity:.75;pointer-events:none;image-rendering:pixelated;background:#000");function Mp(s){const t=s.getContext("2d");if(!t)return;const e=t.createImageData(ht,Gt),n=bn.ready;(n?bn.floorMask:qn.mask).forEach((i,r)=>{e.data[r*4+1]=i*255,e.data[r*4+2]=n?bn.ceilMask[r]*255:0,e.data[r*4+3]=255}),t.putImageData(e,0,0)}function d1(s,t){if(!Sh)return;const e=Math.min(.1,(s-Gd)/1e3);Gd=s;const n=!!ze.session;let i=Ot.camera;n?(ze.frame(t,s),i=Ot.gl.xr.getCamera()):(Be.update(e),Ii.update(e),Ot.camera.quaternion.copy(Be.quaternion),le.selfie&&Ot.camera.quaternion.multiply(l1),Rt.mode==="indoor"?Ot.camera.position.copy(Ii.position):Ot.camera.position.set(Ht.position.x,Ae.user.eyeHeightDefault,Ht.position.y),le.ready&&Ot.setVFov(le.displayVFov(Ae.camera.longEdgeFovDeg)),Ot.camera.updateMatrixWorld()),gi.updateMatrixWorld(),ji.setFromMatrixPosition(i.matrixWorld),gi.worldToLocal(ji),gi.getWorldQuaternion(jd).invert(),Oc.set(0,0,-1).applyQuaternion(i.getWorldQuaternion(new Kt)).applyQuaternion(jd);const r=Math.asin(Tt.clamp(Oc.y,-1,1))*180/Math.PI;if(s-Vd>500&&vn&&!n){Vd=s;const c=le.sampleLight();if(c){const l=Tt.lerp(.62,1.04,Tt.smoothstep(c.lum,.05,.55)),h=Math.max(c.r,c.g,c.b,.001);kc.setRGB(l*(.88+.12*(c.r/h)),l*(.88+.12*(c.g/h)),l*(.88+.12*(c.b/h))),ue.petals.setLight(kc),Pe.setLight(c.lum),Uc=c.lum<.08?Uc+.5:0,Uc>4&&!Wd&&Rt.mode==="indoor"&&(Wd=!0,xe(ie,W("errLowLight"),5e3,!0))}}const a=!n&&vn&&Rt.mode==="indoor",o=a&&le.ready&&Be.hasOrientation&&!Be.stale&&!le.mirrored&&!le.selfie;if(a&&!o&&!le.selfie&&(qn.reset(),bn.reset()),o&&zn.start(),o&&zn.status==="ready"){const c=Vn.batterySaver?1200:Vn.level==="low"?700:300;if(!zn.busy&&s-$d>=c&&Be.angularVel.length()<u1){const l=le.sampleGrid(Qf,Zf);l&&($d=s,zn.segment(l,Ot.camera))}}else if(o&&(s-Bc>=h1||Jd.angleTo(Ot.camera.quaternion)>.08)){const c=le.sampleGrid(ht,Gt);if(c){const l=Math.min(.5,(s-Bc)/1e3);Fy(Od,Ot.camera.projectionMatrixInverse,Ot.camera.quaternion,Ot.camera.position.y),qn.update(c,Od,l);const h=Ot.camera.position;vi.recenter(h.x,h.z),qn.ready&&vi.observe(qn.mask,Ot.camera.projectionMatrixInverse,Ot.camera.quaternion,h,l),Zi.update(c,Ot.camera.projectionMatrixInverse,Ot.camera.quaternion,h.y,(u,d)=>vi.wallAlong(h.x,h.z,u,d)),Bc=s,Jd.copy(Ot.camera.quaternion),Js&&Mp(Js)}}if(Rt.mode==="indoor"){const c=Tt.smoothstep(r,32,52),l=Tt.smoothstep(-r,25,50),h=Tt.smoothstep(r,-42,-12)*(Rt.reading?.55:1),u=n?ze.ceilingHeight??ho:Zi.height;kl.copy(ji),ue.petals.room.ceilingY=u,s-Kd>250&&(Kd=s,ue.branches.layout(ji.x,ji.z,u,ue.petals.room.isInside)),ue.branches.clipTarget=a&&bn.ready?1:0,ue.branches.update(e,h,c,kc,Rt.reduceMotion),ue.petals.lookUp=c,ue.petals.lookDown=l,!n&&vn&&(we.update(s,le,Ot.camera),cn.smooth(e),Pe.update(e,cn.poseReady?cn.matrix:null),gp.update(we,ji),we.active&&we.palmVel.length()>1&&s-qd>120&&(qd=s,ue.petals.wind.addGust(we.palm,we.palmVel.clone().multiplyScalar(.5),.45,.6))),Or&&Or.update(e,Ot.camera),ue.petals.floorMask=a?bn.ready?bn:le.selfie?null:qn:null,(!n||ze.placed)&&(Xd.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse).multiply(gi.matrixWorld),ue.petals.update(e,Xd,ji,Oc))}else{Ht.pointScale=Ot.gl.getPixelRatio()*innerHeight*.02,Ht.update(e,Ot.camera,Yn.compass===null||le.selfie?null:{value:Yn.compass,at:Yn.compassAt}),Rt.mode==="outdoor"&&wo.update(e,Be.angularVel,Rt.reduceMotion);const c=Ht.hasFix&&(Ht.phase==="walk"||Ht.phase==="locating"||Ht.phase==="arrived");if(po.setVisible(c),c&&s-Hd>100){Hd=s;const l=h=>ip(h.e,h.n,Ze.lat,Ze.lng);po.update({me:l(Ht.userEnu),heading:Ht.north.ready?Ht.heading(Be.quaternion):0,route:Ht.routeEnu?.map(l)??null,dest:Ze,accuracy:Ht.accuracy})}be?.setGuide({phase:Ht.phase,floorNow:Ht.floorNow,floorTo:Ht.floorTo,remaining:Ht.distanceLeft,accuracy:Ht.accuracy,routeState:Ht.routeState})}if(Vn.tick(e),Ot.render(),Yd&&Math.floor(s/250)!==Math.floor((s-e*1e3)/250)){const c=ue.petals.stats();Yd.textContent=`fps ${Vn.fps.toFixed(0)} · ${Vn.batterySaver?"low*":Vn.level}
rơi ${c.falling} · đọng ${c.resting} · giữ ${c.held}
x ${Ii.position.x.toFixed(2)} z ${Ii.position.z.toFixed(2)} · pitch ${r.toFixed(0)}°
trần ${Zi.height.toFixed(2)} m${Zi.measured?"":" (mặc định)"}
AI ${zn.status}${zn.lastMs?` · ${zn.lastMs.toFixed(0)} ms`:""}
tay ${we.status}${we.active?` · ${we.depth.toFixed(2)} m${we.grabbing?" · nắm":""}`:""}`}}addEventListener("resize",()=>{qn.reset(),Ot.resize(),wo.layoutFrame(Ot.camera)});document.addEventListener("visibilitychange",()=>{!Sh||ze.session||(document.hidden?(qn.reset(),le.stop()):vn&&le.start().catch(()=>{}))});window.__dgx={indoor:ue,outdoor:wo,sensors:Be,localizer:Ii,hand:we,settings:Rt,setMode:ki,quality:Vn,R:Ot,floorVision:qn,artTracker:cn,artViewer:Pe,guide:Ht,handlers:wh,geo:Yn,askPanel:Eh,minimap:po,roomMap:vi,ceiling:Zi,surfaces:bn,segmenter:zn};
