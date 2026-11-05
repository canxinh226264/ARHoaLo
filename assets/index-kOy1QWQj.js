(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function t(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(i){if(i.ep)return;i.ep=!0;const r=t(i);fetch(i.href,r)}})();/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const qc="169",qd=0,Ll=1,jd=2,Tu=1,Yd=2,Yn=3,Zn=0,Jt=1,tn=2,mi=0,ls=1,ir=2,Il=3,Dl=4,Kd=5,Pi=100,$d=101,Jd=102,Qd=103,Zd=104,ef=200,tf=201,nf=202,sf=203,Yo=204,Ko=205,rf=206,af=207,of=208,cf=209,lf=210,hf=211,uf=212,df=213,ff=214,$o=0,Jo=1,Qo=2,ps=3,Zo=4,ec=5,tc=6,nc=7,Ru=0,pf=1,mf=2,gi=0,gf=1,bf=2,vf=3,xf=4,_f=5,yf=6,Mf=7,Nl="attached",Sf="detached",Cu=300,ms=301,gs=302,ic=303,sc=304,Fa=306,bs=1e3,ui=1001,Aa=1002,Vt=1003,Pu=1004,er=1005,un=1006,ma=1007,In=1008,ei=1009,Lu=1010,Iu=1011,ur=1012,jc=1013,Di=1014,vn=1015,yr=1016,Yc=1017,Kc=1018,vs=1020,Du=35902,Nu=1021,Uu=1022,fn=1023,Fu=1024,Ou=1025,hs=1026,xs=1027,$c=1028,Jc=1029,ku=1030,Qc=1031,Zc=1033,ga=33776,ba=33777,va=33778,xa=33779,rc=35840,ac=35841,oc=35842,cc=35843,lc=36196,hc=37492,uc=37496,dc=37808,fc=37809,pc=37810,mc=37811,gc=37812,bc=37813,vc=37814,xc=37815,_c=37816,yc=37817,Mc=37818,Sc=37819,wc=37820,Ac=37821,_a=36492,Ec=36494,Tc=36495,Bu=36283,Rc=36284,Cc=36285,Pc=36286,dr=2300,fr=2301,Ya=2302,Ul=2400,Fl=2401,Ol=2402,wf=2500,Af=0,zu=1,Lc=2,Ef=3200,Tf=3201,Hu=0,Rf=1,hi="",Lt="srgb",Bt="srgb-linear",el="display-p3",Oa="display-p3-linear",Ea="linear",ht="srgb",Ta="rec709",Ra="p3",ki=7680,kl=519,Cf=512,Pf=513,Lf=514,Gu=515,If=516,Df=517,Nf=518,Uf=519,Ic=35044,tr=35048,Bl="300 es",$n=2e3,Ca=2001;class As{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const i=this._listeners[e];if(i!==void 0){const r=i.indexOf(t);r!==-1&&i.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const i=n.slice(0);for(let r=0,a=i.length;r<a;r++)i[r].call(this,e);e.target=null}}}const zt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let zl=1234567;const us=Math.PI/180,_s=180/Math.PI;function _n(){const s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(zt[s&255]+zt[s>>8&255]+zt[s>>16&255]+zt[s>>24&255]+"-"+zt[e&255]+zt[e>>8&255]+"-"+zt[e>>16&15|64]+zt[e>>24&255]+"-"+zt[t&63|128]+zt[t>>8&255]+"-"+zt[t>>16&255]+zt[t>>24&255]+zt[n&255]+zt[n>>8&255]+zt[n>>16&255]+zt[n>>24&255]).toLowerCase()}function It(s,e,t){return Math.max(e,Math.min(t,s))}function tl(s,e){return(s%e+e)%e}function Ff(s,e,t,n,i){return n+(s-e)*(i-n)/(t-e)}function Of(s,e,t){return s!==e?(t-s)/(e-s):0}function sr(s,e,t){return(1-t)*s+t*e}function kf(s,e,t,n){return sr(s,e,1-Math.exp(-t*n))}function Bf(s,e=1){return e-Math.abs(tl(s,e*2)-e)}function zf(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*(3-2*s))}function Hf(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*s*(s*(s*6-15)+10))}function Gf(s,e){return s+Math.floor(Math.random()*(e-s+1))}function Vf(s,e){return s+Math.random()*(e-s)}function Wf(s){return s*(.5-Math.random())}function Xf(s){s!==void 0&&(zl=s);let e=zl+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function qf(s){return s*us}function jf(s){return s*_s}function Yf(s){return(s&s-1)===0&&s!==0}function Kf(s){return Math.pow(2,Math.ceil(Math.log(s)/Math.LN2))}function $f(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function Jf(s,e,t,n,i){const r=Math.cos,a=Math.sin,o=r(t/2),c=a(t/2),l=r((e+n)/2),h=a((e+n)/2),u=r((e-n)/2),d=a((e-n)/2),f=r((n-e)/2),g=a((n-e)/2);switch(i){case"XYX":s.set(o*h,c*u,c*d,o*l);break;case"YZY":s.set(c*d,o*h,c*u,o*l);break;case"ZXZ":s.set(c*u,c*d,o*h,o*l);break;case"XZX":s.set(o*h,c*g,c*f,o*l);break;case"YXY":s.set(c*f,o*h,c*g,o*l);break;case"ZYZ":s.set(c*g,c*f,o*h,o*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function En(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function it(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}const Ce={DEG2RAD:us,RAD2DEG:_s,generateUUID:_n,clamp:It,euclideanModulo:tl,mapLinear:Ff,inverseLerp:Of,lerp:sr,damp:kf,pingpong:Bf,smoothstep:zf,smootherstep:Hf,randInt:Gf,randFloat:Vf,randFloatSpread:Wf,seededRandom:Xf,degToRad:qf,radToDeg:jf,isPowerOfTwo:Yf,ceilPowerOfTwo:Kf,floorPowerOfTwo:$f,setQuaternionFromProperEuler:Jf,normalize:it,denormalize:En};class oe{constructor(e=0,t=0){oe.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(It(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),i=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*n-a*i+e.x,this.y=r*i+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Oe{constructor(e,t,n,i,r,a,o,c,l){Oe.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,i,r,a,o,c,l)}set(e,t,n,i,r,a,o,c,l){const h=this.elements;return h[0]=e,h[1]=i,h[2]=o,h[3]=t,h[4]=r,h[5]=c,h[6]=n,h[7]=a,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,r=this.elements,a=n[0],o=n[3],c=n[6],l=n[1],h=n[4],u=n[7],d=n[2],f=n[5],g=n[8],b=i[0],m=i[3],p=i[6],y=i[1],v=i[4],_=i[7],w=i[2],T=i[5],M=i[8];return r[0]=a*b+o*y+c*w,r[3]=a*m+o*v+c*T,r[6]=a*p+o*_+c*M,r[1]=l*b+h*y+u*w,r[4]=l*m+h*v+u*T,r[7]=l*p+h*_+u*M,r[2]=d*b+f*y+g*w,r[5]=d*m+f*v+g*T,r[8]=d*p+f*_+g*M,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],a=e[4],o=e[5],c=e[6],l=e[7],h=e[8];return t*a*h-t*o*l-n*r*h+n*o*c+i*r*l-i*a*c}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],a=e[4],o=e[5],c=e[6],l=e[7],h=e[8],u=h*a-o*l,d=o*c-h*r,f=l*r-a*c,g=t*u+n*d+i*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const b=1/g;return e[0]=u*b,e[1]=(i*l-h*n)*b,e[2]=(o*n-i*a)*b,e[3]=d*b,e[4]=(h*t-i*c)*b,e[5]=(i*r-o*t)*b,e[6]=f*b,e[7]=(n*c-l*t)*b,e[8]=(a*t-n*r)*b,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,r,a,o){const c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*a+l*o)+a+e,-i*l,i*c,-i*(-l*a+c*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(Ka.makeScale(e,t)),this}rotate(e){return this.premultiply(Ka.makeRotation(-e)),this}translate(e,t){return this.premultiply(Ka.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Ka=new Oe;function Vu(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function pr(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function Qf(){const s=pr("canvas");return s.style.display="block",s}const Hl={};function ya(s){s in Hl||(Hl[s]=!0,console.warn(s))}function Zf(s,e,t){return new Promise(function(n,i){function r(){switch(s.clientWaitSync(e,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:i();break;case s.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}function ep(s){const e=s.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function tp(s){const e=s.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const Gl=new Oe().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Vl=new Oe().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Is={[Bt]:{transfer:Ea,primaries:Ta,luminanceCoefficients:[.2126,.7152,.0722],toReference:s=>s,fromReference:s=>s},[Lt]:{transfer:ht,primaries:Ta,luminanceCoefficients:[.2126,.7152,.0722],toReference:s=>s.convertSRGBToLinear(),fromReference:s=>s.convertLinearToSRGB()},[Oa]:{transfer:Ea,primaries:Ra,luminanceCoefficients:[.2289,.6917,.0793],toReference:s=>s.applyMatrix3(Vl),fromReference:s=>s.applyMatrix3(Gl)},[el]:{transfer:ht,primaries:Ra,luminanceCoefficients:[.2289,.6917,.0793],toReference:s=>s.convertSRGBToLinear().applyMatrix3(Vl),fromReference:s=>s.applyMatrix3(Gl).convertLinearToSRGB()}},np=new Set([Bt,Oa]),Je={enabled:!0,_workingColorSpace:Bt,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(s){if(!np.has(s))throw new Error(`Unsupported working color space, "${s}".`);this._workingColorSpace=s},convert:function(s,e,t){if(this.enabled===!1||e===t||!e||!t)return s;const n=Is[e].toReference,i=Is[t].fromReference;return i(n(s))},fromWorkingColorSpace:function(s,e){return this.convert(s,this._workingColorSpace,e)},toWorkingColorSpace:function(s,e){return this.convert(s,e,this._workingColorSpace)},getPrimaries:function(s){return Is[s].primaries},getTransfer:function(s){return s===hi?Ea:Is[s].transfer},getLuminanceCoefficients:function(s,e=this._workingColorSpace){return s.fromArray(Is[e].luminanceCoefficients)}};function ds(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function $a(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let Bi;class ip{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Bi===void 0&&(Bi=pr("canvas")),Bi.width=e.width,Bi.height=e.height;const n=Bi.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=Bi}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=pr("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const i=n.getImageData(0,0,e.width,e.height),r=i.data;for(let a=0;a<r.length;a++)r[a]=ds(r[a]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(ds(t[n]/255)*255):t[n]=ds(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let sp=0;class Wu{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:sp++}),this.uuid=_n(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let a=0,o=i.length;a<o;a++)i[a].isDataTexture?r.push(Ja(i[a].image)):r.push(Ja(i[a]))}else r=Ja(i);n.url=r}return t||(e.images[this.uuid]=n),n}}function Ja(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?ip.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let rp=0;class At extends As{constructor(e=At.DEFAULT_IMAGE,t=At.DEFAULT_MAPPING,n=ui,i=ui,r=un,a=In,o=fn,c=ei,l=At.DEFAULT_ANISOTROPY,h=hi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:rp++}),this.uuid=_n(),this.name="",this.source=new Wu(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=a,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=c,this.offset=new oe(0,0),this.repeat=new oe(1,1),this.center=new oe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Oe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Cu)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case bs:e.x=e.x-Math.floor(e.x);break;case ui:e.x=e.x<0?0:1;break;case Aa:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case bs:e.y=e.y-Math.floor(e.y);break;case ui:e.y=e.y<0?0:1;break;case Aa:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}At.DEFAULT_IMAGE=null;At.DEFAULT_MAPPING=Cu;At.DEFAULT_ANISOTROPY=1;class Ze{constructor(e=0,t=0,n=0,i=1){Ze.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*i+a[12]*r,this.y=a[1]*t+a[5]*n+a[9]*i+a[13]*r,this.z=a[2]*t+a[6]*n+a[10]*i+a[14]*r,this.w=a[3]*t+a[7]*n+a[11]*i+a[15]*r,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,r;const c=e.elements,l=c[0],h=c[4],u=c[8],d=c[1],f=c[5],g=c[9],b=c[2],m=c[6],p=c[10];if(Math.abs(h-d)<.01&&Math.abs(u-b)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+b)<.1&&Math.abs(g+m)<.1&&Math.abs(l+f+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const v=(l+1)/2,_=(f+1)/2,w=(p+1)/2,T=(h+d)/4,M=(u+b)/4,C=(g+m)/4;return v>_&&v>w?v<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(v),i=T/n,r=M/n):_>w?_<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(_),n=T/i,r=C/i):w<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(w),n=M/r,i=C/r),this.set(n,i,r,t),this}let y=Math.sqrt((m-g)*(m-g)+(u-b)*(u-b)+(d-h)*(d-h));return Math.abs(y)<.001&&(y=1),this.x=(m-g)/y,this.y=(u-b)/y,this.z=(d-h)/y,this.w=Math.acos((l+f+p-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class ap extends As{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new Ze(0,0,e,t),this.scissorTest=!1,this.viewport=new Ze(0,0,e,t);const i={width:e,height:t,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:un,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const r=new At(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];const a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let i=0,r=this.textures.length;i<r;i++)this.textures[i].image.width=e,this.textures[i].image.height=t,this.textures[i].image.depth=n;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,i=e.textures.length;n<i;n++)this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new Wu(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Ni extends ap{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class Xu extends At{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Vt,this.minFilter=Vt,this.wrapR=ui,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class op extends At{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Vt,this.minFilter=Vt,this.wrapR=ui,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class at{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,r,a,o){let c=n[i+0],l=n[i+1],h=n[i+2],u=n[i+3];const d=r[a+0],f=r[a+1],g=r[a+2],b=r[a+3];if(o===0){e[t+0]=c,e[t+1]=l,e[t+2]=h,e[t+3]=u;return}if(o===1){e[t+0]=d,e[t+1]=f,e[t+2]=g,e[t+3]=b;return}if(u!==b||c!==d||l!==f||h!==g){let m=1-o;const p=c*d+l*f+h*g+u*b,y=p>=0?1:-1,v=1-p*p;if(v>Number.EPSILON){const w=Math.sqrt(v),T=Math.atan2(w,p*y);m=Math.sin(m*T)/w,o=Math.sin(o*T)/w}const _=o*y;if(c=c*m+d*_,l=l*m+f*_,h=h*m+g*_,u=u*m+b*_,m===1-o){const w=1/Math.sqrt(c*c+l*l+h*h+u*u);c*=w,l*=w,h*=w,u*=w}}e[t]=c,e[t+1]=l,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,i,r,a){const o=n[i],c=n[i+1],l=n[i+2],h=n[i+3],u=r[a],d=r[a+1],f=r[a+2],g=r[a+3];return e[t]=o*g+h*u+c*f-l*d,e[t+1]=c*g+h*d+l*u-o*f,e[t+2]=l*g+h*f+o*d-c*u,e[t+3]=h*g-o*u-c*d-l*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,i=e._y,r=e._z,a=e._order,o=Math.cos,c=Math.sin,l=o(n/2),h=o(i/2),u=o(r/2),d=c(n/2),f=c(i/2),g=c(r/2);switch(a){case"XYZ":this._x=d*h*u+l*f*g,this._y=l*f*u-d*h*g,this._z=l*h*g+d*f*u,this._w=l*h*u-d*f*g;break;case"YXZ":this._x=d*h*u+l*f*g,this._y=l*f*u-d*h*g,this._z=l*h*g-d*f*u,this._w=l*h*u+d*f*g;break;case"ZXY":this._x=d*h*u-l*f*g,this._y=l*f*u+d*h*g,this._z=l*h*g+d*f*u,this._w=l*h*u-d*f*g;break;case"ZYX":this._x=d*h*u-l*f*g,this._y=l*f*u+d*h*g,this._z=l*h*g-d*f*u,this._w=l*h*u+d*f*g;break;case"YZX":this._x=d*h*u+l*f*g,this._y=l*f*u+d*h*g,this._z=l*h*g-d*f*u,this._w=l*h*u-d*f*g;break;case"XZY":this._x=d*h*u-l*f*g,this._y=l*f*u-d*h*g,this._z=l*h*g+d*f*u,this._w=l*h*u+d*f*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],i=t[4],r=t[8],a=t[1],o=t[5],c=t[9],l=t[2],h=t[6],u=t[10],d=n+o+u;if(d>0){const f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(h-c)*f,this._y=(r-l)*f,this._z=(a-i)*f}else if(n>o&&n>u){const f=2*Math.sqrt(1+n-o-u);this._w=(h-c)/f,this._x=.25*f,this._y=(i+a)/f,this._z=(r+l)/f}else if(o>u){const f=2*Math.sqrt(1+o-n-u);this._w=(r-l)/f,this._x=(i+a)/f,this._y=.25*f,this._z=(c+h)/f}else{const f=2*Math.sqrt(1+u-n-o);this._w=(a-i)/f,this._x=(r+l)/f,this._y=(c+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(It(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,i=e._y,r=e._z,a=e._w,o=t._x,c=t._y,l=t._z,h=t._w;return this._x=n*h+a*o+i*l-r*c,this._y=i*h+a*c+r*o-n*l,this._z=r*h+a*l+n*c-i*o,this._w=a*h-n*o-i*c-r*l,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,i=this._y,r=this._z,a=this._w;let o=a*e._w+n*e._x+i*e._y+r*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=n,this._y=i,this._z=r,this;const c=1-o*o;if(c<=Number.EPSILON){const f=1-t;return this._w=f*a+t*this._w,this._x=f*n+t*this._x,this._y=f*i+t*this._y,this._z=f*r+t*this._z,this.normalize(),this}const l=Math.sqrt(c),h=Math.atan2(l,o),u=Math.sin((1-t)*h)/l,d=Math.sin(t*h)/l;return this._w=a*u+this._w*d,this._x=n*u+this._x*d,this._y=i*u+this._y*d,this._z=r*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(i*Math.sin(e),i*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class R{constructor(e=0,t=0,n=0){R.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Wl.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Wl.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*i,this.y=r[1]*t+r[4]*n+r[7]*i,this.z=r[2]*t+r[5]*n+r[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,r=e.elements,a=1/(r[3]*t+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*i+r[12])*a,this.y=(r[1]*t+r[5]*n+r[9]*i+r[13])*a,this.z=(r[2]*t+r[6]*n+r[10]*i+r[14])*a,this}applyQuaternion(e){const t=this.x,n=this.y,i=this.z,r=e.x,a=e.y,o=e.z,c=e.w,l=2*(a*i-o*n),h=2*(o*t-r*i),u=2*(r*n-a*t);return this.x=t+c*l+a*u-o*h,this.y=n+c*h+o*l-r*u,this.z=i+c*u+r*h-a*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*i,this.y=r[1]*t+r[5]*n+r[9]*i,this.z=r[2]*t+r[6]*n+r[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,i=e.y,r=e.z,a=t.x,o=t.y,c=t.z;return this.x=i*c-r*o,this.y=r*a-n*c,this.z=n*o-i*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Qa.copy(this).projectOnVector(e),this.sub(Qa)}reflect(e){return this.sub(Qa.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(It(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Qa=new R,Wl=new at;class Nn{constructor(e=new R(1/0,1/0,1/0),t=new R(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Sn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Sn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=Sn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,Sn):Sn.fromBufferAttribute(r,a),Sn.applyMatrix4(e.matrixWorld),this.expandByPoint(Sn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Ar.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Ar.copy(n.boundingBox)),Ar.applyMatrix4(e.matrixWorld),this.union(Ar)}const i=e.children;for(let r=0,a=i.length;r<a;r++)this.expandByObject(i[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Sn),Sn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ds),Er.subVectors(this.max,Ds),zi.subVectors(e.a,Ds),Hi.subVectors(e.b,Ds),Gi.subVectors(e.c,Ds),ni.subVectors(Hi,zi),ii.subVectors(Gi,Hi),vi.subVectors(zi,Gi);let t=[0,-ni.z,ni.y,0,-ii.z,ii.y,0,-vi.z,vi.y,ni.z,0,-ni.x,ii.z,0,-ii.x,vi.z,0,-vi.x,-ni.y,ni.x,0,-ii.y,ii.x,0,-vi.y,vi.x,0];return!Za(t,zi,Hi,Gi,Er)||(t=[1,0,0,0,1,0,0,0,1],!Za(t,zi,Hi,Gi,Er))?!1:(Tr.crossVectors(ni,ii),t=[Tr.x,Tr.y,Tr.z],Za(t,zi,Hi,Gi,Er))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Sn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Sn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(zn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),zn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),zn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),zn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),zn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),zn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),zn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),zn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(zn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const zn=[new R,new R,new R,new R,new R,new R,new R,new R],Sn=new R,Ar=new Nn,zi=new R,Hi=new R,Gi=new R,ni=new R,ii=new R,vi=new R,Ds=new R,Er=new R,Tr=new R,xi=new R;function Za(s,e,t,n,i){for(let r=0,a=s.length-3;r<=a;r+=3){xi.fromArray(s,r);const o=i.x*Math.abs(xi.x)+i.y*Math.abs(xi.y)+i.z*Math.abs(xi.z),c=e.dot(xi),l=t.dot(xi),h=n.dot(xi);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>o)return!1}return!0}const cp=new Nn,Ns=new R,eo=new R;class Un{constructor(e=new R,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):cp.setFromPoints(e).getCenter(n);let i=0;for(let r=0,a=e.length;r<a;r++)i=Math.max(i,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Ns.subVectors(e,this.center);const t=Ns.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(Ns,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(eo.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Ns.copy(e.center).add(eo)),this.expandByPoint(Ns.copy(e.center).sub(eo))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Hn=new R,to=new R,Rr=new R,si=new R,no=new R,Cr=new R,io=new R;class ka{constructor(e=new R,t=new R(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Hn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Hn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Hn.copy(this.origin).addScaledVector(this.direction,t),Hn.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){to.copy(e).add(t).multiplyScalar(.5),Rr.copy(t).sub(e).normalize(),si.copy(this.origin).sub(to);const r=e.distanceTo(t)*.5,a=-this.direction.dot(Rr),o=si.dot(this.direction),c=-si.dot(Rr),l=si.lengthSq(),h=Math.abs(1-a*a);let u,d,f,g;if(h>0)if(u=a*c-o,d=a*o-c,g=r*h,u>=0)if(d>=-g)if(d<=g){const b=1/h;u*=b,d*=b,f=u*(u+a*d+2*o)+d*(a*u+d+2*c)+l}else d=r,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*c)+l;else d=-r,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*c)+l;else d<=-g?(u=Math.max(0,-(-a*r+o)),d=u>0?-r:Math.min(Math.max(-r,-c),r),f=-u*u+d*(d+2*c)+l):d<=g?(u=0,d=Math.min(Math.max(-r,-c),r),f=d*(d+2*c)+l):(u=Math.max(0,-(a*r+o)),d=u>0?r:Math.min(Math.max(-r,-c),r),f=-u*u+d*(d+2*c)+l);else d=a>0?-r:r,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,u),i&&i.copy(to).addScaledVector(Rr,d),f}intersectSphere(e,t){Hn.subVectors(e.center,this.origin);const n=Hn.dot(this.direction),i=Hn.dot(Hn)-n*n,r=e.radius*e.radius;if(i>r)return null;const a=Math.sqrt(r-i),o=n-a,c=n+a;return c<0?null:o<0?this.at(c,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,r,a,o,c;const l=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return l>=0?(n=(e.min.x-d.x)*l,i=(e.max.x-d.x)*l):(n=(e.max.x-d.x)*l,i=(e.min.x-d.x)*l),h>=0?(r=(e.min.y-d.y)*h,a=(e.max.y-d.y)*h):(r=(e.max.y-d.y)*h,a=(e.min.y-d.y)*h),n>a||r>i||((r>n||isNaN(n))&&(n=r),(a<i||isNaN(i))&&(i=a),u>=0?(o=(e.min.z-d.z)*u,c=(e.max.z-d.z)*u):(o=(e.max.z-d.z)*u,c=(e.min.z-d.z)*u),n>c||o>i)||((o>n||n!==n)&&(n=o),(c<i||i!==i)&&(i=c),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,Hn)!==null}intersectTriangle(e,t,n,i,r){no.subVectors(t,e),Cr.subVectors(n,e),io.crossVectors(no,Cr);let a=this.direction.dot(io),o;if(a>0){if(i)return null;o=1}else if(a<0)o=-1,a=-a;else return null;si.subVectors(this.origin,e);const c=o*this.direction.dot(Cr.crossVectors(si,Cr));if(c<0)return null;const l=o*this.direction.dot(no.cross(si));if(l<0||c+l>a)return null;const h=-o*si.dot(io);return h<0?null:this.at(h/a,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class _e{constructor(e,t,n,i,r,a,o,c,l,h,u,d,f,g,b,m){_e.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,i,r,a,o,c,l,h,u,d,f,g,b,m)}set(e,t,n,i,r,a,o,c,l,h,u,d,f,g,b,m){const p=this.elements;return p[0]=e,p[4]=t,p[8]=n,p[12]=i,p[1]=r,p[5]=a,p[9]=o,p[13]=c,p[2]=l,p[6]=h,p[10]=u,p[14]=d,p[3]=f,p[7]=g,p[11]=b,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new _e().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,i=1/Vi.setFromMatrixColumn(e,0).length(),r=1/Vi.setFromMatrixColumn(e,1).length(),a=1/Vi.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,i=e.y,r=e.z,a=Math.cos(n),o=Math.sin(n),c=Math.cos(i),l=Math.sin(i),h=Math.cos(r),u=Math.sin(r);if(e.order==="XYZ"){const d=a*h,f=a*u,g=o*h,b=o*u;t[0]=c*h,t[4]=-c*u,t[8]=l,t[1]=f+g*l,t[5]=d-b*l,t[9]=-o*c,t[2]=b-d*l,t[6]=g+f*l,t[10]=a*c}else if(e.order==="YXZ"){const d=c*h,f=c*u,g=l*h,b=l*u;t[0]=d+b*o,t[4]=g*o-f,t[8]=a*l,t[1]=a*u,t[5]=a*h,t[9]=-o,t[2]=f*o-g,t[6]=b+d*o,t[10]=a*c}else if(e.order==="ZXY"){const d=c*h,f=c*u,g=l*h,b=l*u;t[0]=d-b*o,t[4]=-a*u,t[8]=g+f*o,t[1]=f+g*o,t[5]=a*h,t[9]=b-d*o,t[2]=-a*l,t[6]=o,t[10]=a*c}else if(e.order==="ZYX"){const d=a*h,f=a*u,g=o*h,b=o*u;t[0]=c*h,t[4]=g*l-f,t[8]=d*l+b,t[1]=c*u,t[5]=b*l+d,t[9]=f*l-g,t[2]=-l,t[6]=o*c,t[10]=a*c}else if(e.order==="YZX"){const d=a*c,f=a*l,g=o*c,b=o*l;t[0]=c*h,t[4]=b-d*u,t[8]=g*u+f,t[1]=u,t[5]=a*h,t[9]=-o*h,t[2]=-l*h,t[6]=f*u+g,t[10]=d-b*u}else if(e.order==="XZY"){const d=a*c,f=a*l,g=o*c,b=o*l;t[0]=c*h,t[4]=-u,t[8]=l*h,t[1]=d*u+b,t[5]=a*h,t[9]=f*u-g,t[2]=g*u-f,t[6]=o*h,t[10]=b*u+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(lp,e,hp)}lookAt(e,t,n){const i=this.elements;return on.subVectors(e,t),on.lengthSq()===0&&(on.z=1),on.normalize(),ri.crossVectors(n,on),ri.lengthSq()===0&&(Math.abs(n.z)===1?on.x+=1e-4:on.z+=1e-4,on.normalize(),ri.crossVectors(n,on)),ri.normalize(),Pr.crossVectors(on,ri),i[0]=ri.x,i[4]=Pr.x,i[8]=on.x,i[1]=ri.y,i[5]=Pr.y,i[9]=on.y,i[2]=ri.z,i[6]=Pr.z,i[10]=on.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,r=this.elements,a=n[0],o=n[4],c=n[8],l=n[12],h=n[1],u=n[5],d=n[9],f=n[13],g=n[2],b=n[6],m=n[10],p=n[14],y=n[3],v=n[7],_=n[11],w=n[15],T=i[0],M=i[4],C=i[8],D=i[12],x=i[1],A=i[5],F=i[9],B=i[13],k=i[2],j=i[6],G=i[10],X=i[14],z=i[3],te=i[7],ne=i[11],re=i[15];return r[0]=a*T+o*x+c*k+l*z,r[4]=a*M+o*A+c*j+l*te,r[8]=a*C+o*F+c*G+l*ne,r[12]=a*D+o*B+c*X+l*re,r[1]=h*T+u*x+d*k+f*z,r[5]=h*M+u*A+d*j+f*te,r[9]=h*C+u*F+d*G+f*ne,r[13]=h*D+u*B+d*X+f*re,r[2]=g*T+b*x+m*k+p*z,r[6]=g*M+b*A+m*j+p*te,r[10]=g*C+b*F+m*G+p*ne,r[14]=g*D+b*B+m*X+p*re,r[3]=y*T+v*x+_*k+w*z,r[7]=y*M+v*A+_*j+w*te,r[11]=y*C+v*F+_*G+w*ne,r[15]=y*D+v*B+_*X+w*re,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],i=e[8],r=e[12],a=e[1],o=e[5],c=e[9],l=e[13],h=e[2],u=e[6],d=e[10],f=e[14],g=e[3],b=e[7],m=e[11],p=e[15];return g*(+r*c*u-i*l*u-r*o*d+n*l*d+i*o*f-n*c*f)+b*(+t*c*f-t*l*d+r*a*d-i*a*f+i*l*h-r*c*h)+m*(+t*l*u-t*o*f-r*a*u+n*a*f+r*o*h-n*l*h)+p*(-i*o*h-t*c*u+t*o*d+i*a*u-n*a*d+n*c*h)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],a=e[4],o=e[5],c=e[6],l=e[7],h=e[8],u=e[9],d=e[10],f=e[11],g=e[12],b=e[13],m=e[14],p=e[15],y=u*m*l-b*d*l+b*c*f-o*m*f-u*c*p+o*d*p,v=g*d*l-h*m*l-g*c*f+a*m*f+h*c*p-a*d*p,_=h*b*l-g*u*l+g*o*f-a*b*f-h*o*p+a*u*p,w=g*u*c-h*b*c-g*o*d+a*b*d+h*o*m-a*u*m,T=t*y+n*v+i*_+r*w;if(T===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const M=1/T;return e[0]=y*M,e[1]=(b*d*r-u*m*r-b*i*f+n*m*f+u*i*p-n*d*p)*M,e[2]=(o*m*r-b*c*r+b*i*l-n*m*l-o*i*p+n*c*p)*M,e[3]=(u*c*r-o*d*r-u*i*l+n*d*l+o*i*f-n*c*f)*M,e[4]=v*M,e[5]=(h*m*r-g*d*r+g*i*f-t*m*f-h*i*p+t*d*p)*M,e[6]=(g*c*r-a*m*r-g*i*l+t*m*l+a*i*p-t*c*p)*M,e[7]=(a*d*r-h*c*r+h*i*l-t*d*l-a*i*f+t*c*f)*M,e[8]=_*M,e[9]=(g*u*r-h*b*r-g*n*f+t*b*f+h*n*p-t*u*p)*M,e[10]=(a*b*r-g*o*r+g*n*l-t*b*l-a*n*p+t*o*p)*M,e[11]=(h*o*r-a*u*r-h*n*l+t*u*l+a*n*f-t*o*f)*M,e[12]=w*M,e[13]=(h*b*i-g*u*i+g*n*d-t*b*d-h*n*m+t*u*m)*M,e[14]=(g*o*i-a*b*i-g*n*c+t*b*c+a*n*m-t*o*m)*M,e[15]=(a*u*i-h*o*i+h*n*c-t*u*c-a*n*d+t*o*d)*M,this}scale(e){const t=this.elements,n=e.x,i=e.y,r=e.z;return t[0]*=n,t[4]*=i,t[8]*=r,t[1]*=n,t[5]*=i,t[9]*=r,t[2]*=n,t[6]*=i,t[10]*=r,t[3]*=n,t[7]*=i,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),i=Math.sin(t),r=1-n,a=e.x,o=e.y,c=e.z,l=r*a,h=r*o;return this.set(l*a+n,l*o-i*c,l*c+i*o,0,l*o+i*c,h*o+n,h*c-i*a,0,l*c-i*o,h*c+i*a,r*c*c+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,r,a){return this.set(1,n,r,0,e,1,a,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){const i=this.elements,r=t._x,a=t._y,o=t._z,c=t._w,l=r+r,h=a+a,u=o+o,d=r*l,f=r*h,g=r*u,b=a*h,m=a*u,p=o*u,y=c*l,v=c*h,_=c*u,w=n.x,T=n.y,M=n.z;return i[0]=(1-(b+p))*w,i[1]=(f+_)*w,i[2]=(g-v)*w,i[3]=0,i[4]=(f-_)*T,i[5]=(1-(d+p))*T,i[6]=(m+y)*T,i[7]=0,i[8]=(g+v)*M,i[9]=(m-y)*M,i[10]=(1-(d+b))*M,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){const i=this.elements;let r=Vi.set(i[0],i[1],i[2]).length();const a=Vi.set(i[4],i[5],i[6]).length(),o=Vi.set(i[8],i[9],i[10]).length();this.determinant()<0&&(r=-r),e.x=i[12],e.y=i[13],e.z=i[14],wn.copy(this);const l=1/r,h=1/a,u=1/o;return wn.elements[0]*=l,wn.elements[1]*=l,wn.elements[2]*=l,wn.elements[4]*=h,wn.elements[5]*=h,wn.elements[6]*=h,wn.elements[8]*=u,wn.elements[9]*=u,wn.elements[10]*=u,t.setFromRotationMatrix(wn),n.x=r,n.y=a,n.z=o,this}makePerspective(e,t,n,i,r,a,o=$n){const c=this.elements,l=2*r/(t-e),h=2*r/(n-i),u=(t+e)/(t-e),d=(n+i)/(n-i);let f,g;if(o===$n)f=-(a+r)/(a-r),g=-2*a*r/(a-r);else if(o===Ca)f=-a/(a-r),g=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=l,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=h,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=f,c[14]=g,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,i,r,a,o=$n){const c=this.elements,l=1/(t-e),h=1/(n-i),u=1/(a-r),d=(t+e)*l,f=(n+i)*h;let g,b;if(o===$n)g=(a+r)*u,b=-2*u;else if(o===Ca)g=r*u,b=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-d,c[1]=0,c[5]=2*h,c[9]=0,c[13]=-f,c[2]=0,c[6]=0,c[10]=b,c[14]=-g,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const Vi=new R,wn=new _e,lp=new R(0,0,0),hp=new R(1,1,1),ri=new R,Pr=new R,on=new R,Xl=new _e,ql=new at;class Xt{constructor(e=0,t=0,n=0,i=Xt.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const i=e.elements,r=i[0],a=i[4],o=i[8],c=i[1],l=i[5],h=i[9],u=i[2],d=i[6],f=i[10];switch(t){case"XYZ":this._y=Math.asin(It(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(d,l),this._z=0);break;case"YXZ":this._x=Math.asin(-It(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(It(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-a,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-It(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-a,l));break;case"YZX":this._z=Math.asin(It(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-It(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,l),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Xl.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Xl,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return ql.setFromEuler(this),this.setFromQuaternion(ql,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Xt.DEFAULT_ORDER="XYZ";class qu{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let up=0;const jl=new R,Wi=new at,Gn=new _e,Lr=new R,Us=new R,dp=new R,fp=new at,Yl=new R(1,0,0),Kl=new R(0,1,0),$l=new R(0,0,1),Jl={type:"added"},pp={type:"removed"},Xi={type:"childadded",child:null},so={type:"childremoved",child:null};class dt extends As{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:up++}),this.uuid=_n(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=dt.DEFAULT_UP.clone();const e=new R,t=new Xt,n=new at,i=new R(1,1,1);function r(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new _e},normalMatrix:{value:new Oe}}),this.matrix=new _e,this.matrixWorld=new _e,this.matrixAutoUpdate=dt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=dt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new qu,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Wi.setFromAxisAngle(e,t),this.quaternion.multiply(Wi),this}rotateOnWorldAxis(e,t){return Wi.setFromAxisAngle(e,t),this.quaternion.premultiply(Wi),this}rotateX(e){return this.rotateOnAxis(Yl,e)}rotateY(e){return this.rotateOnAxis(Kl,e)}rotateZ(e){return this.rotateOnAxis($l,e)}translateOnAxis(e,t){return jl.copy(e).applyQuaternion(this.quaternion),this.position.add(jl.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Yl,e)}translateY(e){return this.translateOnAxis(Kl,e)}translateZ(e){return this.translateOnAxis($l,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Gn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Lr.copy(e):Lr.set(e,t,n);const i=this.parent;this.updateWorldMatrix(!0,!1),Us.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Gn.lookAt(Us,Lr,this.up):Gn.lookAt(Lr,Us,this.up),this.quaternion.setFromRotationMatrix(Gn),i&&(Gn.extractRotation(i.matrixWorld),Wi.setFromRotationMatrix(Gn),this.quaternion.premultiply(Wi.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Jl),Xi.child=e,this.dispatchEvent(Xi),Xi.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(pp),so.child=e,this.dispatchEvent(so),so.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Gn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Gn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Gn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Jl),Xi.child=e,this.dispatchEvent(Xi),Xi.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){const a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const i=this.children;for(let r=0,a=i.length;r<a;r++)i[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Us,e,dp),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Us,fp,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const i=this.children;for(let r=0,a=i.length;r<a;r++)i[r].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.visibility=this._visibility,i.active=this._active,i.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.geometryCount=this._geometryCount,i.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(i.boundingSphere={center:i.boundingSphere.center.toArray(),radius:i.boundingSphere.radius}),this.boundingBox!==null&&(i.boundingBox={min:i.boundingBox.min.toArray(),max:i.boundingBox.max.toArray()}));function r(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const c=o.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){const u=c[l];r(e.shapes,u)}else r(e.shapes,c)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let c=0,l=this.material.length;c<l;c++)o.push(r(e.materials,this.material[c]));i.material=o}else i.material=r(e.materials,this.material);if(this.children.length>0){i.children=[];for(let o=0;o<this.children.length;o++)i.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let o=0;o<this.animations.length;o++){const c=this.animations[o];i.animations.push(r(e.animations,c))}}if(t){const o=a(e.geometries),c=a(e.materials),l=a(e.textures),h=a(e.images),u=a(e.shapes),d=a(e.skeletons),f=a(e.animations),g=a(e.nodes);o.length>0&&(n.geometries=o),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),f.length>0&&(n.animations=f),g.length>0&&(n.nodes=g)}return n.object=i,n;function a(o){const c=[];for(const l in o){const h=o[l];delete h.metadata,c.push(h)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const i=e.children[n];this.add(i.clone())}return this}}dt.DEFAULT_UP=new R(0,1,0);dt.DEFAULT_MATRIX_AUTO_UPDATE=!0;dt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const An=new R,Vn=new R,ro=new R,Wn=new R,qi=new R,ji=new R,Ql=new R,ao=new R,oo=new R,co=new R,lo=new Ze,ho=new Ze,uo=new Ze;class dn{constructor(e=new R,t=new R,n=new R){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),An.subVectors(e,t),i.cross(An);const r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(e,t,n,i,r){An.subVectors(i,t),Vn.subVectors(n,t),ro.subVectors(e,t);const a=An.dot(An),o=An.dot(Vn),c=An.dot(ro),l=Vn.dot(Vn),h=Vn.dot(ro),u=a*l-o*o;if(u===0)return r.set(0,0,0),null;const d=1/u,f=(l*c-o*h)*d,g=(a*h-o*c)*d;return r.set(1-f-g,g,f)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,Wn)===null?!1:Wn.x>=0&&Wn.y>=0&&Wn.x+Wn.y<=1}static getInterpolation(e,t,n,i,r,a,o,c){return this.getBarycoord(e,t,n,i,Wn)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,Wn.x),c.addScaledVector(a,Wn.y),c.addScaledVector(o,Wn.z),c)}static getInterpolatedAttribute(e,t,n,i,r,a){return lo.setScalar(0),ho.setScalar(0),uo.setScalar(0),lo.fromBufferAttribute(e,t),ho.fromBufferAttribute(e,n),uo.fromBufferAttribute(e,i),a.setScalar(0),a.addScaledVector(lo,r.x),a.addScaledVector(ho,r.y),a.addScaledVector(uo,r.z),a}static isFrontFacing(e,t,n,i){return An.subVectors(n,t),Vn.subVectors(e,t),An.cross(Vn).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return An.subVectors(this.c,this.b),Vn.subVectors(this.a,this.b),An.cross(Vn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return dn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return dn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,i,r){return dn.getInterpolation(e,this.a,this.b,this.c,t,n,i,r)}containsPoint(e){return dn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return dn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,i=this.b,r=this.c;let a,o;qi.subVectors(i,n),ji.subVectors(r,n),ao.subVectors(e,n);const c=qi.dot(ao),l=ji.dot(ao);if(c<=0&&l<=0)return t.copy(n);oo.subVectors(e,i);const h=qi.dot(oo),u=ji.dot(oo);if(h>=0&&u<=h)return t.copy(i);const d=c*u-h*l;if(d<=0&&c>=0&&h<=0)return a=c/(c-h),t.copy(n).addScaledVector(qi,a);co.subVectors(e,r);const f=qi.dot(co),g=ji.dot(co);if(g>=0&&f<=g)return t.copy(r);const b=f*l-c*g;if(b<=0&&l>=0&&g<=0)return o=l/(l-g),t.copy(n).addScaledVector(ji,o);const m=h*g-f*u;if(m<=0&&u-h>=0&&f-g>=0)return Ql.subVectors(r,i),o=(u-h)/(u-h+(f-g)),t.copy(i).addScaledVector(Ql,o);const p=1/(m+b+d);return a=b*p,o=d*p,t.copy(n).addScaledVector(qi,a).addScaledVector(ji,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const ju={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ai={h:0,s:0,l:0},Ir={h:0,s:0,l:0};function fo(s,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?s+(e-s)*6*t:t<1/2?e:t<2/3?s+(e-s)*6*(2/3-t):s}class Ae{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Lt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Je.toWorkingColorSpace(this,t),this}setRGB(e,t,n,i=Je.workingColorSpace){return this.r=e,this.g=t,this.b=n,Je.toWorkingColorSpace(this,i),this}setHSL(e,t,n,i=Je.workingColorSpace){if(e=tl(e,1),t=It(t,0,1),n=It(n,0,1),t===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+t):n+t-n*t,a=2*n-r;this.r=fo(a,r,e+1/3),this.g=fo(a,r,e),this.b=fo(a,r,e-1/3)}return Je.toWorkingColorSpace(this,i),this}setStyle(e,t=Lt){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const a=i[1],o=i[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=i[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Lt){const n=ju[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=ds(e.r),this.g=ds(e.g),this.b=ds(e.b),this}copyLinearToSRGB(e){return this.r=$a(e.r),this.g=$a(e.g),this.b=$a(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Lt){return Je.fromWorkingColorSpace(Ht.copy(this),e),Math.round(It(Ht.r*255,0,255))*65536+Math.round(It(Ht.g*255,0,255))*256+Math.round(It(Ht.b*255,0,255))}getHexString(e=Lt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Je.workingColorSpace){Je.fromWorkingColorSpace(Ht.copy(this),t);const n=Ht.r,i=Ht.g,r=Ht.b,a=Math.max(n,i,r),o=Math.min(n,i,r);let c,l;const h=(o+a)/2;if(o===a)c=0,l=0;else{const u=a-o;switch(l=h<=.5?u/(a+o):u/(2-a-o),a){case n:c=(i-r)/u+(i<r?6:0);break;case i:c=(r-n)/u+2;break;case r:c=(n-i)/u+4;break}c/=6}return e.h=c,e.s=l,e.l=h,e}getRGB(e,t=Je.workingColorSpace){return Je.fromWorkingColorSpace(Ht.copy(this),t),e.r=Ht.r,e.g=Ht.g,e.b=Ht.b,e}getStyle(e=Lt){Je.fromWorkingColorSpace(Ht.copy(this),e);const t=Ht.r,n=Ht.g,i=Ht.b;return e!==Lt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(e,t,n){return this.getHSL(ai),this.setHSL(ai.h+e,ai.s+t,ai.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(ai),e.getHSL(Ir);const n=sr(ai.h,Ir.h,t),i=sr(ai.s,Ir.s,t),r=sr(ai.l,Ir.l,t);return this.setHSL(n,i,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,i=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*i,this.g=r[1]*t+r[4]*n+r[7]*i,this.b=r[2]*t+r[5]*n+r[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Ht=new Ae;Ae.NAMES=ju;let mp=0;class Rn extends As{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:mp++}),this.uuid=_n(),this.name="",this.type="Material",this.blending=ls,this.side=Zn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Yo,this.blendDst=Ko,this.blendEquation=Pi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ae(0,0,0),this.blendAlpha=0,this.depthFunc=ps,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=kl,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ki,this.stencilZFail=ki,this.stencilZPass=ki,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==ls&&(n.blending=this.blending),this.side!==Zn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Yo&&(n.blendSrc=this.blendSrc),this.blendDst!==Ko&&(n.blendDst=this.blendDst),this.blendEquation!==Pi&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==ps&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==kl&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ki&&(n.stencilFail=this.stencilFail),this.stencilZFail!==ki&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==ki&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(r){const a=[];for(const o in r){const c=r[o];delete c.metadata,a.push(c)}return a}if(t){const r=i(e.textures),a=i(e.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const i=t.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class $t extends Rn{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ae(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Xt,this.combine=Ru,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const St=new R,Dr=new oe;class Et{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Ic,this.updateRanges=[],this.gpuType=vn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Dr.fromBufferAttribute(this,t),Dr.applyMatrix3(e),this.setXY(t,Dr.x,Dr.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)St.fromBufferAttribute(this,t),St.applyMatrix3(e),this.setXYZ(t,St.x,St.y,St.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)St.fromBufferAttribute(this,t),St.applyMatrix4(e),this.setXYZ(t,St.x,St.y,St.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)St.fromBufferAttribute(this,t),St.applyNormalMatrix(e),this.setXYZ(t,St.x,St.y,St.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)St.fromBufferAttribute(this,t),St.transformDirection(e),this.setXYZ(t,St.x,St.y,St.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=En(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=it(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=En(t,this.array)),t}setX(e,t){return this.normalized&&(t=it(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=En(t,this.array)),t}setY(e,t){return this.normalized&&(t=it(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=En(t,this.array)),t}setZ(e,t){return this.normalized&&(t=it(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=En(t,this.array)),t}setW(e,t){return this.normalized&&(t=it(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=it(t,this.array),n=it(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=it(t,this.array),n=it(n,this.array),i=it(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e*=this.itemSize,this.normalized&&(t=it(t,this.array),n=it(n,this.array),i=it(i,this.array),r=it(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Ic&&(e.usage=this.usage),e}}class Yu extends Et{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class Ku extends Et{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class Xe extends Et{constructor(e,t,n){super(new Float32Array(e),t,n)}}let gp=0;const mn=new _e,po=new dt,Yi=new R,cn=new Nn,Fs=new Nn,Ct=new R;class bt extends As{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:gp++}),this.uuid=_n(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Vu(e)?Ku:Yu)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new Oe().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return mn.makeRotationFromQuaternion(e),this.applyMatrix4(mn),this}rotateX(e){return mn.makeRotationX(e),this.applyMatrix4(mn),this}rotateY(e){return mn.makeRotationY(e),this.applyMatrix4(mn),this}rotateZ(e){return mn.makeRotationZ(e),this.applyMatrix4(mn),this}translate(e,t,n){return mn.makeTranslation(e,t,n),this.applyMatrix4(mn),this}scale(e,t,n){return mn.makeScale(e,t,n),this.applyMatrix4(mn),this}lookAt(e){return po.lookAt(e),po.updateMatrix(),this.applyMatrix4(po.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Yi).negate(),this.translate(Yi.x,Yi.y,Yi.z),this}setFromPoints(e){const t=[];for(let n=0,i=e.length;n<i;n++){const r=e[n];t.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new Xe(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Nn);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new R(-1/0,-1/0,-1/0),new R(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){const r=t[n];cn.setFromBufferAttribute(r),this.morphTargetsRelative?(Ct.addVectors(this.boundingBox.min,cn.min),this.boundingBox.expandByPoint(Ct),Ct.addVectors(this.boundingBox.max,cn.max),this.boundingBox.expandByPoint(Ct)):(this.boundingBox.expandByPoint(cn.min),this.boundingBox.expandByPoint(cn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Un);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new R,1/0);return}if(e){const n=this.boundingSphere.center;if(cn.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){const o=t[r];Fs.setFromBufferAttribute(o),this.morphTargetsRelative?(Ct.addVectors(cn.min,Fs.min),cn.expandByPoint(Ct),Ct.addVectors(cn.max,Fs.max),cn.expandByPoint(Ct)):(cn.expandByPoint(Fs.min),cn.expandByPoint(Fs.max))}cn.getCenter(n);let i=0;for(let r=0,a=e.count;r<a;r++)Ct.fromBufferAttribute(e,r),i=Math.max(i,n.distanceToSquared(Ct));if(t)for(let r=0,a=t.length;r<a;r++){const o=t[r],c=this.morphTargetsRelative;for(let l=0,h=o.count;l<h;l++)Ct.fromBufferAttribute(o,l),c&&(Yi.fromBufferAttribute(e,l),Ct.add(Yi)),i=Math.max(i,n.distanceToSquared(Ct))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,i=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Et(new Float32Array(4*n.count),4));const a=this.getAttribute("tangent"),o=[],c=[];for(let C=0;C<n.count;C++)o[C]=new R,c[C]=new R;const l=new R,h=new R,u=new R,d=new oe,f=new oe,g=new oe,b=new R,m=new R;function p(C,D,x){l.fromBufferAttribute(n,C),h.fromBufferAttribute(n,D),u.fromBufferAttribute(n,x),d.fromBufferAttribute(r,C),f.fromBufferAttribute(r,D),g.fromBufferAttribute(r,x),h.sub(l),u.sub(l),f.sub(d),g.sub(d);const A=1/(f.x*g.y-g.x*f.y);isFinite(A)&&(b.copy(h).multiplyScalar(g.y).addScaledVector(u,-f.y).multiplyScalar(A),m.copy(u).multiplyScalar(f.x).addScaledVector(h,-g.x).multiplyScalar(A),o[C].add(b),o[D].add(b),o[x].add(b),c[C].add(m),c[D].add(m),c[x].add(m))}let y=this.groups;y.length===0&&(y=[{start:0,count:e.count}]);for(let C=0,D=y.length;C<D;++C){const x=y[C],A=x.start,F=x.count;for(let B=A,k=A+F;B<k;B+=3)p(e.getX(B+0),e.getX(B+1),e.getX(B+2))}const v=new R,_=new R,w=new R,T=new R;function M(C){w.fromBufferAttribute(i,C),T.copy(w);const D=o[C];v.copy(D),v.sub(w.multiplyScalar(w.dot(D))).normalize(),_.crossVectors(T,D);const A=_.dot(c[C])<0?-1:1;a.setXYZW(C,v.x,v.y,v.z,A)}for(let C=0,D=y.length;C<D;++C){const x=y[C],A=x.start,F=x.count;for(let B=A,k=A+F;B<k;B+=3)M(e.getX(B+0)),M(e.getX(B+1)),M(e.getX(B+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Et(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let d=0,f=n.count;d<f;d++)n.setXYZ(d,0,0,0);const i=new R,r=new R,a=new R,o=new R,c=new R,l=new R,h=new R,u=new R;if(e)for(let d=0,f=e.count;d<f;d+=3){const g=e.getX(d+0),b=e.getX(d+1),m=e.getX(d+2);i.fromBufferAttribute(t,g),r.fromBufferAttribute(t,b),a.fromBufferAttribute(t,m),h.subVectors(a,r),u.subVectors(i,r),h.cross(u),o.fromBufferAttribute(n,g),c.fromBufferAttribute(n,b),l.fromBufferAttribute(n,m),o.add(h),c.add(h),l.add(h),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(b,c.x,c.y,c.z),n.setXYZ(m,l.x,l.y,l.z)}else for(let d=0,f=t.count;d<f;d+=3)i.fromBufferAttribute(t,d+0),r.fromBufferAttribute(t,d+1),a.fromBufferAttribute(t,d+2),h.subVectors(a,r),u.subVectors(i,r),h.cross(u),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Ct.fromBufferAttribute(e,t),Ct.normalize(),e.setXYZ(t,Ct.x,Ct.y,Ct.z)}toNonIndexed(){function e(o,c){const l=o.array,h=o.itemSize,u=o.normalized,d=new l.constructor(c.length*h);let f=0,g=0;for(let b=0,m=c.length;b<m;b++){o.isInterleavedBufferAttribute?f=c[b]*o.data.stride+o.offset:f=c[b]*h;for(let p=0;p<h;p++)d[g++]=l[f++]}return new Et(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new bt,n=this.index.array,i=this.attributes;for(const o in i){const c=i[o],l=e(c,n);t.setAttribute(o,l)}const r=this.morphAttributes;for(const o in r){const c=[],l=r[o];for(let h=0,u=l.length;h<u;h++){const d=l[h],f=e(d,n);c.push(f)}t.morphAttributes[o]=c}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,c=a.length;o<c;o++){const l=a[o];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const c in n){const l=n[c];e.data.attributes[c]=l.toJSON(e.data)}const i={};let r=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],h=[];for(let u=0,d=l.length;u<d;u++){const f=l[u];h.push(f.toJSON(e.data))}h.length>0&&(i[c]=h,r=!0)}r&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const i=e.attributes;for(const l in i){const h=i[l];this.setAttribute(l,h.clone(t))}const r=e.morphAttributes;for(const l in r){const h=[],u=r[l];for(let d=0,f=u.length;d<f;d++)h.push(u[d].clone(t));this.morphAttributes[l]=h}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let l=0,h=a.length;l<h;l++){const u=a[l];this.addGroup(u.start,u.count,u.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Zl=new _e,_i=new ka,Nr=new Un,eh=new R,Ur=new R,Fr=new R,Or=new R,mo=new R,kr=new R,th=new R,Br=new R;class $e extends dt{constructor(e=new bt,t=new $t){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){const o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){const n=this.geometry,i=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(i,e);const o=this.morphTargetInfluences;if(r&&o){kr.set(0,0,0);for(let c=0,l=r.length;c<l;c++){const h=o[c],u=r[c];h!==0&&(mo.fromBufferAttribute(u,e),a?kr.addScaledVector(mo,h):kr.addScaledVector(mo.sub(t),h))}t.add(kr)}return t}raycast(e,t){const n=this.geometry,i=this.material,r=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Nr.copy(n.boundingSphere),Nr.applyMatrix4(r),_i.copy(e.ray).recast(e.near),!(Nr.containsPoint(_i.origin)===!1&&(_i.intersectSphere(Nr,eh)===null||_i.origin.distanceToSquared(eh)>(e.far-e.near)**2))&&(Zl.copy(r).invert(),_i.copy(e.ray).applyMatrix4(Zl),!(n.boundingBox!==null&&_i.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,_i)))}_computeIntersections(e,t,n){let i;const r=this.geometry,a=this.material,o=r.index,c=r.attributes.position,l=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,d=r.groups,f=r.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,b=d.length;g<b;g++){const m=d[g],p=a[m.materialIndex],y=Math.max(m.start,f.start),v=Math.min(o.count,Math.min(m.start+m.count,f.start+f.count));for(let _=y,w=v;_<w;_+=3){const T=o.getX(_),M=o.getX(_+1),C=o.getX(_+2);i=zr(this,p,e,n,l,h,u,T,M,C),i&&(i.faceIndex=Math.floor(_/3),i.face.materialIndex=m.materialIndex,t.push(i))}}else{const g=Math.max(0,f.start),b=Math.min(o.count,f.start+f.count);for(let m=g,p=b;m<p;m+=3){const y=o.getX(m),v=o.getX(m+1),_=o.getX(m+2);i=zr(this,a,e,n,l,h,u,y,v,_),i&&(i.faceIndex=Math.floor(m/3),t.push(i))}}else if(c!==void 0)if(Array.isArray(a))for(let g=0,b=d.length;g<b;g++){const m=d[g],p=a[m.materialIndex],y=Math.max(m.start,f.start),v=Math.min(c.count,Math.min(m.start+m.count,f.start+f.count));for(let _=y,w=v;_<w;_+=3){const T=_,M=_+1,C=_+2;i=zr(this,p,e,n,l,h,u,T,M,C),i&&(i.faceIndex=Math.floor(_/3),i.face.materialIndex=m.materialIndex,t.push(i))}}else{const g=Math.max(0,f.start),b=Math.min(c.count,f.start+f.count);for(let m=g,p=b;m<p;m+=3){const y=m,v=m+1,_=m+2;i=zr(this,a,e,n,l,h,u,y,v,_),i&&(i.faceIndex=Math.floor(m/3),t.push(i))}}}}function bp(s,e,t,n,i,r,a,o){let c;if(e.side===Jt?c=n.intersectTriangle(a,r,i,!0,o):c=n.intersectTriangle(i,r,a,e.side===Zn,o),c===null)return null;Br.copy(o),Br.applyMatrix4(s.matrixWorld);const l=t.ray.origin.distanceTo(Br);return l<t.near||l>t.far?null:{distance:l,point:Br.clone(),object:s}}function zr(s,e,t,n,i,r,a,o,c,l){s.getVertexPosition(o,Ur),s.getVertexPosition(c,Fr),s.getVertexPosition(l,Or);const h=bp(s,e,t,n,Ur,Fr,Or,th);if(h){const u=new R;dn.getBarycoord(th,Ur,Fr,Or,u),i&&(h.uv=dn.getInterpolatedAttribute(i,o,c,l,u,new oe)),r&&(h.uv1=dn.getInterpolatedAttribute(r,o,c,l,u,new oe)),a&&(h.normal=dn.getInterpolatedAttribute(a,o,c,l,u,new R),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const d={a:o,b:c,c:l,normal:new R,materialIndex:0};dn.getNormal(Ur,Fr,Or,d.normal),h.face=d,h.barycoord=u}return h}class Fi extends bt{constructor(e=1,t=1,n=1,i=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:r,depthSegments:a};const o=this;i=Math.floor(i),r=Math.floor(r),a=Math.floor(a);const c=[],l=[],h=[],u=[];let d=0,f=0;g("z","y","x",-1,-1,n,t,e,a,r,0),g("z","y","x",1,-1,n,t,-e,a,r,1),g("x","z","y",1,1,e,n,t,i,a,2),g("x","z","y",1,-1,e,n,-t,i,a,3),g("x","y","z",1,-1,e,t,n,i,r,4),g("x","y","z",-1,-1,e,t,-n,i,r,5),this.setIndex(c),this.setAttribute("position",new Xe(l,3)),this.setAttribute("normal",new Xe(h,3)),this.setAttribute("uv",new Xe(u,2));function g(b,m,p,y,v,_,w,T,M,C,D){const x=_/M,A=w/C,F=_/2,B=w/2,k=T/2,j=M+1,G=C+1;let X=0,z=0;const te=new R;for(let ne=0;ne<G;ne++){const re=ne*A-B;for(let Ee=0;Ee<j;Ee++){const we=Ee*x-F;te[b]=we*y,te[m]=re*v,te[p]=k,l.push(te.x,te.y,te.z),te[b]=0,te[m]=0,te[p]=T>0?1:-1,h.push(te.x,te.y,te.z),u.push(Ee/M),u.push(1-ne/C),X+=1}}for(let ne=0;ne<C;ne++)for(let re=0;re<M;re++){const Ee=d+re+j*ne,we=d+re+j*(ne+1),O=d+(re+1)+j*(ne+1),$=d+(re+1)+j*ne;c.push(Ee,we,$),c.push(we,O,$),z+=6}o.addGroup(f,z,D),f+=z,d+=X}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Fi(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function ys(s){const e={};for(const t in s){e[t]={};for(const n in s[t]){const i=s[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function Yt(s){const e={};for(let t=0;t<s.length;t++){const n=ys(s[t]);for(const i in n)e[i]=n[i]}return e}function vp(s){const e=[];for(let t=0;t<s.length;t++)e.push(s[t].clone());return e}function $u(s){const e=s.getRenderTarget();return e===null?s.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Je.workingColorSpace}const xp={clone:ys,merge:Yt};var _p=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,yp=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class yn extends Rn{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=_p,this.fragmentShader=yp,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=ys(e.uniforms),this.uniformsGroups=vp(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const i in this.uniforms){const a=this.uniforms[i].value;a&&a.isTexture?t.uniforms[i]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[i]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[i]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[i]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[i]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[i]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[i]={type:"m4",value:a.toArray()}:t.uniforms[i]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class Ju extends dt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new _e,this.projectionMatrix=new _e,this.projectionMatrixInverse=new _e,this.coordinateSystem=$n}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const oi=new R,nh=new oe,ih=new oe;class Kt extends Ju{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=_s*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(us*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return _s*2*Math.atan(Math.tan(us*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){oi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(oi.x,oi.y).multiplyScalar(-e/oi.z),oi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(oi.x,oi.y).multiplyScalar(-e/oi.z)}getViewSize(e,t){return this.getViewBounds(e,nh,ih),t.subVectors(ih,nh)}setViewOffset(e,t,n,i,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(us*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,r=-.5*i;const a=this.view;if(this.view!==null&&this.view.enabled){const c=a.fullWidth,l=a.fullHeight;r+=a.offsetX*i/c,t-=a.offsetY*n/l,i*=a.width/c,n*=a.height/l}const o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Ki=-90,$i=1;class Mp extends dt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new Kt(Ki,$i,e,t);i.layers=this.layers,this.add(i);const r=new Kt(Ki,$i,e,t);r.layers=this.layers,this.add(r);const a=new Kt(Ki,$i,e,t);a.layers=this.layers,this.add(a);const o=new Kt(Ki,$i,e,t);o.layers=this.layers,this.add(o);const c=new Kt(Ki,$i,e,t);c.layers=this.layers,this.add(c);const l=new Kt(Ki,$i,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,i,r,a,o,c]=t;for(const l of t)this.remove(l);if(e===$n)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===Ca)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,a,o,c,l,h]=this.children,u=e.getRenderTarget(),d=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const b=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,i),e.render(t,r),e.setRenderTarget(n,1,i),e.render(t,a),e.setRenderTarget(n,2,i),e.render(t,o),e.setRenderTarget(n,3,i),e.render(t,c),e.setRenderTarget(n,4,i),e.render(t,l),n.texture.generateMipmaps=b,e.setRenderTarget(n,5,i),e.render(t,h),e.setRenderTarget(u,d,f),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class Qu extends At{constructor(e,t,n,i,r,a,o,c,l,h){e=e!==void 0?e:[],t=t!==void 0?t:ms,super(e,t,n,i,r,a,o,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Sp extends Ni{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];this.texture=new Qu(i,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:un}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new Fi(5,5,5),r=new yn({name:"CubemapFromEquirect",uniforms:ys(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Jt,blending:mi});r.uniforms.tEquirect.value=t;const a=new $e(i,r),o=t.minFilter;return t.minFilter===In&&(t.minFilter=un),new Mp(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t,n,i){const r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,i);e.setRenderTarget(r)}}const go=new R,wp=new R,Ap=new Oe;class Ri{constructor(e=new R(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const i=go.subVectors(n,t).cross(wp.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(go),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/i;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||Ap.getNormalMatrix(e),i=this.coplanarPoint(go).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const yi=new Un,Hr=new R;class nl{constructor(e=new Ri,t=new Ri,n=new Ri,i=new Ri,r=new Ri,a=new Ri){this.planes=[e,t,n,i,r,a]}set(e,t,n,i,r,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(i),o[4].copy(r),o[5].copy(a),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=$n){const n=this.planes,i=e.elements,r=i[0],a=i[1],o=i[2],c=i[3],l=i[4],h=i[5],u=i[6],d=i[7],f=i[8],g=i[9],b=i[10],m=i[11],p=i[12],y=i[13],v=i[14],_=i[15];if(n[0].setComponents(c-r,d-l,m-f,_-p).normalize(),n[1].setComponents(c+r,d+l,m+f,_+p).normalize(),n[2].setComponents(c+a,d+h,m+g,_+y).normalize(),n[3].setComponents(c-a,d-h,m-g,_-y).normalize(),n[4].setComponents(c-o,d-u,m-b,_-v).normalize(),t===$n)n[5].setComponents(c+o,d+u,m+b,_+v).normalize();else if(t===Ca)n[5].setComponents(o,u,b,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),yi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),yi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(yi)}intersectsSprite(e){return yi.center.set(0,0,0),yi.radius=.7071067811865476,yi.applyMatrix4(e.matrixWorld),this.intersectsSphere(yi)}intersectsSphere(e){const t=this.planes,n=e.center,i=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const i=t[n];if(Hr.x=i.normal.x>0?e.max.x:e.min.x,Hr.y=i.normal.y>0?e.max.y:e.min.y,Hr.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(Hr)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Zu(){let s=null,e=!1,t=null,n=null;function i(r,a){t(r,a),n=s.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=s.requestAnimationFrame(i),e=!0)},stop:function(){s.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){s=r}}}function Ep(s){const e=new WeakMap;function t(o,c){const l=o.array,h=o.usage,u=l.byteLength,d=s.createBuffer();s.bindBuffer(c,d),s.bufferData(c,l,h),o.onUploadCallback();let f;if(l instanceof Float32Array)f=s.FLOAT;else if(l instanceof Uint16Array)o.isFloat16BufferAttribute?f=s.HALF_FLOAT:f=s.UNSIGNED_SHORT;else if(l instanceof Int16Array)f=s.SHORT;else if(l instanceof Uint32Array)f=s.UNSIGNED_INT;else if(l instanceof Int32Array)f=s.INT;else if(l instanceof Int8Array)f=s.BYTE;else if(l instanceof Uint8Array)f=s.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)f=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:d,type:f,bytesPerElement:l.BYTES_PER_ELEMENT,version:o.version,size:u}}function n(o,c,l){const h=c.array,u=c.updateRanges;if(s.bindBuffer(l,o),u.length===0)s.bufferSubData(l,0,h);else{u.sort((f,g)=>f.start-g.start);let d=0;for(let f=1;f<u.length;f++){const g=u[d],b=u[f];b.start<=g.start+g.count+1?g.count=Math.max(g.count,b.start+b.count-g.start):(++d,u[d]=b)}u.length=d+1;for(let f=0,g=u.length;f<g;f++){const b=u[f];s.bufferSubData(l,b.start*h.BYTES_PER_ELEMENT,h,b.start,b.count)}c.clearUpdateRanges()}c.onUploadCallback()}function i(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);const c=e.get(o);c&&(s.deleteBuffer(c.buffer),e.delete(o))}function a(o,c){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const h=e.get(o);(!h||h.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const l=e.get(o);if(l===void 0)e.set(o,t(o,c));else if(l.version<o.version){if(l.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,o,c),l.version=o.version}}return{get:i,remove:r,update:a}}class Cn extends bt{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};const r=e/2,a=t/2,o=Math.floor(n),c=Math.floor(i),l=o+1,h=c+1,u=e/o,d=t/c,f=[],g=[],b=[],m=[];for(let p=0;p<h;p++){const y=p*d-a;for(let v=0;v<l;v++){const _=v*u-r;g.push(_,-y,0),b.push(0,0,1),m.push(v/o),m.push(1-p/c)}}for(let p=0;p<c;p++)for(let y=0;y<o;y++){const v=y+l*p,_=y+l*(p+1),w=y+1+l*(p+1),T=y+1+l*p;f.push(v,_,T),f.push(_,w,T)}this.setIndex(f),this.setAttribute("position",new Xe(g,3)),this.setAttribute("normal",new Xe(b,3)),this.setAttribute("uv",new Xe(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Cn(e.width,e.height,e.widthSegments,e.heightSegments)}}var Tp=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Rp=`#ifdef USE_ALPHAHASH
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
#endif`,Cp=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Pp=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Lp=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Ip=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Dp=`#ifdef USE_AOMAP
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
#endif`,Np=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Up=`#ifdef USE_BATCHING
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
#endif`,Fp=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Op=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,kp=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Bp=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,zp=`#ifdef USE_IRIDESCENCE
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
#endif`,Hp=`#ifdef USE_BUMPMAP
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
#endif`,Gp=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Vp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Wp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Xp=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,qp=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,jp=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Yp=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Kp=`#if defined( USE_COLOR_ALPHA )
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
#endif`,$p=`#define PI 3.141592653589793
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
} // validated`,Jp=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Qp=`vec3 transformedNormal = objectNormal;
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
#endif`,Zp=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,em=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,tm=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,nm=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,im="gl_FragColor = linearToOutputTexel( gl_FragColor );",sm=`
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
}`,rm=`#ifdef USE_ENVMAP
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
#endif`,am=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,om=`#ifdef USE_ENVMAP
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
#endif`,cm=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,lm=`#ifdef USE_ENVMAP
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
#endif`,hm=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,um=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,dm=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,fm=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,pm=`#ifdef USE_GRADIENTMAP
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
}`,mm=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,gm=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,bm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,vm=`uniform bool receiveShadow;
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
#endif`,xm=`#ifdef USE_ENVMAP
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
#endif`,_m=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,ym=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Mm=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Sm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,wm=`PhysicalMaterial material;
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
#endif`,Am=`struct PhysicalMaterial {
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
}`,Em=`
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
#endif`,Tm=`#if defined( RE_IndirectDiffuse )
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
#endif`,Rm=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Cm=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Pm=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Lm=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Im=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Dm=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Nm=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Um=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Fm=`#if defined( USE_POINTS_UV )
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
#endif`,Om=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,km=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Bm=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,zm=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Hm=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Gm=`#ifdef USE_MORPHTARGETS
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
#endif`,Vm=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Wm=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Xm=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,qm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,jm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Ym=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Km=`#ifdef USE_NORMALMAP
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
#endif`,$m=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Jm=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Qm=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Zm=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,eg=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,tg=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,ng=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,ig=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,sg=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,rg=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,ag=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,og=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,cg=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,lg=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,hg=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,ug=`float getShadowMask() {
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
}`,dg=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,fg=`#ifdef USE_SKINNING
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
#endif`,pg=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,mg=`#ifdef USE_SKINNING
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
#endif`,gg=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,bg=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,vg=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,xg=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,_g=`#ifdef USE_TRANSMISSION
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
#endif`,yg=`#ifdef USE_TRANSMISSION
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
#endif`,Mg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Sg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,wg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Ag=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Eg=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Tg=`uniform sampler2D t2D;
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
}`,Rg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Cg=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Pg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Lg=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ig=`#include <common>
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
}`,Dg=`#if DEPTH_PACKING == 3200
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
}`,Ng=`#define DISTANCE
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
}`,Ug=`#define DISTANCE
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
}`,Fg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Og=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,kg=`uniform float scale;
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
}`,Bg=`uniform vec3 diffuse;
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
}`,zg=`#include <common>
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
}`,Hg=`uniform vec3 diffuse;
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
}`,Gg=`#define LAMBERT
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
}`,Vg=`#define LAMBERT
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
}`,Wg=`#define MATCAP
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
}`,Xg=`#define MATCAP
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
}`,qg=`#define NORMAL
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
}`,jg=`#define NORMAL
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
}`,Yg=`#define PHONG
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
}`,Kg=`#define PHONG
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
}`,$g=`#define STANDARD
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
}`,Jg=`#define STANDARD
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
}`,Qg=`#define TOON
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
}`,Zg=`#define TOON
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
}`,e0=`uniform float size;
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
}`,t0=`uniform vec3 diffuse;
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
}`,n0=`#include <common>
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
}`,i0=`uniform vec3 color;
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
}`,s0=`uniform float rotation;
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
}`,r0=`uniform vec3 diffuse;
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
}`,Fe={alphahash_fragment:Tp,alphahash_pars_fragment:Rp,alphamap_fragment:Cp,alphamap_pars_fragment:Pp,alphatest_fragment:Lp,alphatest_pars_fragment:Ip,aomap_fragment:Dp,aomap_pars_fragment:Np,batching_pars_vertex:Up,batching_vertex:Fp,begin_vertex:Op,beginnormal_vertex:kp,bsdfs:Bp,iridescence_fragment:zp,bumpmap_pars_fragment:Hp,clipping_planes_fragment:Gp,clipping_planes_pars_fragment:Vp,clipping_planes_pars_vertex:Wp,clipping_planes_vertex:Xp,color_fragment:qp,color_pars_fragment:jp,color_pars_vertex:Yp,color_vertex:Kp,common:$p,cube_uv_reflection_fragment:Jp,defaultnormal_vertex:Qp,displacementmap_pars_vertex:Zp,displacementmap_vertex:em,emissivemap_fragment:tm,emissivemap_pars_fragment:nm,colorspace_fragment:im,colorspace_pars_fragment:sm,envmap_fragment:rm,envmap_common_pars_fragment:am,envmap_pars_fragment:om,envmap_pars_vertex:cm,envmap_physical_pars_fragment:xm,envmap_vertex:lm,fog_vertex:hm,fog_pars_vertex:um,fog_fragment:dm,fog_pars_fragment:fm,gradientmap_pars_fragment:pm,lightmap_pars_fragment:mm,lights_lambert_fragment:gm,lights_lambert_pars_fragment:bm,lights_pars_begin:vm,lights_toon_fragment:_m,lights_toon_pars_fragment:ym,lights_phong_fragment:Mm,lights_phong_pars_fragment:Sm,lights_physical_fragment:wm,lights_physical_pars_fragment:Am,lights_fragment_begin:Em,lights_fragment_maps:Tm,lights_fragment_end:Rm,logdepthbuf_fragment:Cm,logdepthbuf_pars_fragment:Pm,logdepthbuf_pars_vertex:Lm,logdepthbuf_vertex:Im,map_fragment:Dm,map_pars_fragment:Nm,map_particle_fragment:Um,map_particle_pars_fragment:Fm,metalnessmap_fragment:Om,metalnessmap_pars_fragment:km,morphinstance_vertex:Bm,morphcolor_vertex:zm,morphnormal_vertex:Hm,morphtarget_pars_vertex:Gm,morphtarget_vertex:Vm,normal_fragment_begin:Wm,normal_fragment_maps:Xm,normal_pars_fragment:qm,normal_pars_vertex:jm,normal_vertex:Ym,normalmap_pars_fragment:Km,clearcoat_normal_fragment_begin:$m,clearcoat_normal_fragment_maps:Jm,clearcoat_pars_fragment:Qm,iridescence_pars_fragment:Zm,opaque_fragment:eg,packing:tg,premultiplied_alpha_fragment:ng,project_vertex:ig,dithering_fragment:sg,dithering_pars_fragment:rg,roughnessmap_fragment:ag,roughnessmap_pars_fragment:og,shadowmap_pars_fragment:cg,shadowmap_pars_vertex:lg,shadowmap_vertex:hg,shadowmask_pars_fragment:ug,skinbase_vertex:dg,skinning_pars_vertex:fg,skinning_vertex:pg,skinnormal_vertex:mg,specularmap_fragment:gg,specularmap_pars_fragment:bg,tonemapping_fragment:vg,tonemapping_pars_fragment:xg,transmission_fragment:_g,transmission_pars_fragment:yg,uv_pars_fragment:Mg,uv_pars_vertex:Sg,uv_vertex:wg,worldpos_vertex:Ag,background_vert:Eg,background_frag:Tg,backgroundCube_vert:Rg,backgroundCube_frag:Cg,cube_vert:Pg,cube_frag:Lg,depth_vert:Ig,depth_frag:Dg,distanceRGBA_vert:Ng,distanceRGBA_frag:Ug,equirect_vert:Fg,equirect_frag:Og,linedashed_vert:kg,linedashed_frag:Bg,meshbasic_vert:zg,meshbasic_frag:Hg,meshlambert_vert:Gg,meshlambert_frag:Vg,meshmatcap_vert:Wg,meshmatcap_frag:Xg,meshnormal_vert:qg,meshnormal_frag:jg,meshphong_vert:Yg,meshphong_frag:Kg,meshphysical_vert:$g,meshphysical_frag:Jg,meshtoon_vert:Qg,meshtoon_frag:Zg,points_vert:e0,points_frag:t0,shadow_vert:n0,shadow_frag:i0,sprite_vert:s0,sprite_frag:r0},ce={common:{diffuse:{value:new Ae(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Oe},alphaMap:{value:null},alphaMapTransform:{value:new Oe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Oe}},envmap:{envMap:{value:null},envMapRotation:{value:new Oe},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Oe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Oe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Oe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Oe},normalScale:{value:new oe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Oe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Oe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Oe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Oe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ae(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ae(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Oe},alphaTest:{value:0},uvTransform:{value:new Oe}},sprite:{diffuse:{value:new Ae(16777215)},opacity:{value:1},center:{value:new oe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Oe},alphaMap:{value:null},alphaMapTransform:{value:new Oe},alphaTest:{value:0}}},Pn={basic:{uniforms:Yt([ce.common,ce.specularmap,ce.envmap,ce.aomap,ce.lightmap,ce.fog]),vertexShader:Fe.meshbasic_vert,fragmentShader:Fe.meshbasic_frag},lambert:{uniforms:Yt([ce.common,ce.specularmap,ce.envmap,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.fog,ce.lights,{emissive:{value:new Ae(0)}}]),vertexShader:Fe.meshlambert_vert,fragmentShader:Fe.meshlambert_frag},phong:{uniforms:Yt([ce.common,ce.specularmap,ce.envmap,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.fog,ce.lights,{emissive:{value:new Ae(0)},specular:{value:new Ae(1118481)},shininess:{value:30}}]),vertexShader:Fe.meshphong_vert,fragmentShader:Fe.meshphong_frag},standard:{uniforms:Yt([ce.common,ce.envmap,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.roughnessmap,ce.metalnessmap,ce.fog,ce.lights,{emissive:{value:new Ae(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Fe.meshphysical_vert,fragmentShader:Fe.meshphysical_frag},toon:{uniforms:Yt([ce.common,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.gradientmap,ce.fog,ce.lights,{emissive:{value:new Ae(0)}}]),vertexShader:Fe.meshtoon_vert,fragmentShader:Fe.meshtoon_frag},matcap:{uniforms:Yt([ce.common,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.fog,{matcap:{value:null}}]),vertexShader:Fe.meshmatcap_vert,fragmentShader:Fe.meshmatcap_frag},points:{uniforms:Yt([ce.points,ce.fog]),vertexShader:Fe.points_vert,fragmentShader:Fe.points_frag},dashed:{uniforms:Yt([ce.common,ce.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Fe.linedashed_vert,fragmentShader:Fe.linedashed_frag},depth:{uniforms:Yt([ce.common,ce.displacementmap]),vertexShader:Fe.depth_vert,fragmentShader:Fe.depth_frag},normal:{uniforms:Yt([ce.common,ce.bumpmap,ce.normalmap,ce.displacementmap,{opacity:{value:1}}]),vertexShader:Fe.meshnormal_vert,fragmentShader:Fe.meshnormal_frag},sprite:{uniforms:Yt([ce.sprite,ce.fog]),vertexShader:Fe.sprite_vert,fragmentShader:Fe.sprite_frag},background:{uniforms:{uvTransform:{value:new Oe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Fe.background_vert,fragmentShader:Fe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Oe}},vertexShader:Fe.backgroundCube_vert,fragmentShader:Fe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Fe.cube_vert,fragmentShader:Fe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Fe.equirect_vert,fragmentShader:Fe.equirect_frag},distanceRGBA:{uniforms:Yt([ce.common,ce.displacementmap,{referencePosition:{value:new R},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Fe.distanceRGBA_vert,fragmentShader:Fe.distanceRGBA_frag},shadow:{uniforms:Yt([ce.lights,ce.fog,{color:{value:new Ae(0)},opacity:{value:1}}]),vertexShader:Fe.shadow_vert,fragmentShader:Fe.shadow_frag}};Pn.physical={uniforms:Yt([Pn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Oe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Oe},clearcoatNormalScale:{value:new oe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Oe},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Oe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Oe},sheen:{value:0},sheenColor:{value:new Ae(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Oe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Oe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Oe},transmissionSamplerSize:{value:new oe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Oe},attenuationDistance:{value:0},attenuationColor:{value:new Ae(0)},specularColor:{value:new Ae(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Oe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Oe},anisotropyVector:{value:new oe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Oe}}]),vertexShader:Fe.meshphysical_vert,fragmentShader:Fe.meshphysical_frag};const Gr={r:0,b:0,g:0},Mi=new Xt,a0=new _e;function o0(s,e,t,n,i,r,a){const o=new Ae(0);let c=r===!0?0:1,l,h,u=null,d=0,f=null;function g(y){let v=y.isScene===!0?y.background:null;return v&&v.isTexture&&(v=(y.backgroundBlurriness>0?t:e).get(v)),v}function b(y){let v=!1;const _=g(y);_===null?p(o,c):_&&_.isColor&&(p(_,1),v=!0);const w=s.xr.getEnvironmentBlendMode();w==="additive"?n.buffers.color.setClear(0,0,0,1,a):w==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(s.autoClear||v)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function m(y,v){const _=g(v);_&&(_.isCubeTexture||_.mapping===Fa)?(h===void 0&&(h=new $e(new Fi(1,1,1),new yn({name:"BackgroundCubeMaterial",uniforms:ys(Pn.backgroundCube.uniforms),vertexShader:Pn.backgroundCube.vertexShader,fragmentShader:Pn.backgroundCube.fragmentShader,side:Jt,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(w,T,M){this.matrixWorld.copyPosition(M.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(h)),Mi.copy(v.backgroundRotation),Mi.x*=-1,Mi.y*=-1,Mi.z*=-1,_.isCubeTexture&&_.isRenderTargetTexture===!1&&(Mi.y*=-1,Mi.z*=-1),h.material.uniforms.envMap.value=_,h.material.uniforms.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=v.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(a0.makeRotationFromEuler(Mi)),h.material.toneMapped=Je.getTransfer(_.colorSpace)!==ht,(u!==_||d!==_.version||f!==s.toneMapping)&&(h.material.needsUpdate=!0,u=_,d=_.version,f=s.toneMapping),h.layers.enableAll(),y.unshift(h,h.geometry,h.material,0,0,null)):_&&_.isTexture&&(l===void 0&&(l=new $e(new Cn(2,2),new yn({name:"BackgroundMaterial",uniforms:ys(Pn.background.uniforms),vertexShader:Pn.background.vertexShader,fragmentShader:Pn.background.fragmentShader,side:Zn,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=_,l.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,l.material.toneMapped=Je.getTransfer(_.colorSpace)!==ht,_.matrixAutoUpdate===!0&&_.updateMatrix(),l.material.uniforms.uvTransform.value.copy(_.matrix),(u!==_||d!==_.version||f!==s.toneMapping)&&(l.material.needsUpdate=!0,u=_,d=_.version,f=s.toneMapping),l.layers.enableAll(),y.unshift(l,l.geometry,l.material,0,0,null))}function p(y,v){y.getRGB(Gr,$u(s)),n.buffers.color.setClear(Gr.r,Gr.g,Gr.b,v,a)}return{getClearColor:function(){return o},setClearColor:function(y,v=1){o.set(y),c=v,p(o,c)},getClearAlpha:function(){return c},setClearAlpha:function(y){c=y,p(o,c)},render:b,addToRenderList:m}}function c0(s,e){const t=s.getParameter(s.MAX_VERTEX_ATTRIBS),n={},i=d(null);let r=i,a=!1;function o(x,A,F,B,k){let j=!1;const G=u(B,F,A);r!==G&&(r=G,l(r.object)),j=f(x,B,F,k),j&&g(x,B,F,k),k!==null&&e.update(k,s.ELEMENT_ARRAY_BUFFER),(j||a)&&(a=!1,_(x,A,F,B),k!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,e.get(k).buffer))}function c(){return s.createVertexArray()}function l(x){return s.bindVertexArray(x)}function h(x){return s.deleteVertexArray(x)}function u(x,A,F){const B=F.wireframe===!0;let k=n[x.id];k===void 0&&(k={},n[x.id]=k);let j=k[A.id];j===void 0&&(j={},k[A.id]=j);let G=j[B];return G===void 0&&(G=d(c()),j[B]=G),G}function d(x){const A=[],F=[],B=[];for(let k=0;k<t;k++)A[k]=0,F[k]=0,B[k]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:A,enabledAttributes:F,attributeDivisors:B,object:x,attributes:{},index:null}}function f(x,A,F,B){const k=r.attributes,j=A.attributes;let G=0;const X=F.getAttributes();for(const z in X)if(X[z].location>=0){const ne=k[z];let re=j[z];if(re===void 0&&(z==="instanceMatrix"&&x.instanceMatrix&&(re=x.instanceMatrix),z==="instanceColor"&&x.instanceColor&&(re=x.instanceColor)),ne===void 0||ne.attribute!==re||re&&ne.data!==re.data)return!0;G++}return r.attributesNum!==G||r.index!==B}function g(x,A,F,B){const k={},j=A.attributes;let G=0;const X=F.getAttributes();for(const z in X)if(X[z].location>=0){let ne=j[z];ne===void 0&&(z==="instanceMatrix"&&x.instanceMatrix&&(ne=x.instanceMatrix),z==="instanceColor"&&x.instanceColor&&(ne=x.instanceColor));const re={};re.attribute=ne,ne&&ne.data&&(re.data=ne.data),k[z]=re,G++}r.attributes=k,r.attributesNum=G,r.index=B}function b(){const x=r.newAttributes;for(let A=0,F=x.length;A<F;A++)x[A]=0}function m(x){p(x,0)}function p(x,A){const F=r.newAttributes,B=r.enabledAttributes,k=r.attributeDivisors;F[x]=1,B[x]===0&&(s.enableVertexAttribArray(x),B[x]=1),k[x]!==A&&(s.vertexAttribDivisor(x,A),k[x]=A)}function y(){const x=r.newAttributes,A=r.enabledAttributes;for(let F=0,B=A.length;F<B;F++)A[F]!==x[F]&&(s.disableVertexAttribArray(F),A[F]=0)}function v(x,A,F,B,k,j,G){G===!0?s.vertexAttribIPointer(x,A,F,k,j):s.vertexAttribPointer(x,A,F,B,k,j)}function _(x,A,F,B){b();const k=B.attributes,j=F.getAttributes(),G=A.defaultAttributeValues;for(const X in j){const z=j[X];if(z.location>=0){let te=k[X];if(te===void 0&&(X==="instanceMatrix"&&x.instanceMatrix&&(te=x.instanceMatrix),X==="instanceColor"&&x.instanceColor&&(te=x.instanceColor)),te!==void 0){const ne=te.normalized,re=te.itemSize,Ee=e.get(te);if(Ee===void 0)continue;const we=Ee.buffer,O=Ee.type,$=Ee.bytesPerElement,ee=O===s.INT||O===s.UNSIGNED_INT||te.gpuType===jc;if(te.isInterleavedBufferAttribute){const ae=te.data,Te=ae.stride,ve=te.offset;if(ae.isInstancedInterleavedBuffer){for(let Be=0;Be<z.locationSize;Be++)p(z.location+Be,ae.meshPerAttribute);x.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=ae.meshPerAttribute*ae.count)}else for(let Be=0;Be<z.locationSize;Be++)m(z.location+Be);s.bindBuffer(s.ARRAY_BUFFER,we);for(let Be=0;Be<z.locationSize;Be++)v(z.location+Be,re/z.locationSize,O,ne,Te*$,(ve+re/z.locationSize*Be)*$,ee)}else{if(te.isInstancedBufferAttribute){for(let ae=0;ae<z.locationSize;ae++)p(z.location+ae,te.meshPerAttribute);x.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=te.meshPerAttribute*te.count)}else for(let ae=0;ae<z.locationSize;ae++)m(z.location+ae);s.bindBuffer(s.ARRAY_BUFFER,we);for(let ae=0;ae<z.locationSize;ae++)v(z.location+ae,re/z.locationSize,O,ne,re*$,re/z.locationSize*ae*$,ee)}}else if(G!==void 0){const ne=G[X];if(ne!==void 0)switch(ne.length){case 2:s.vertexAttrib2fv(z.location,ne);break;case 3:s.vertexAttrib3fv(z.location,ne);break;case 4:s.vertexAttrib4fv(z.location,ne);break;default:s.vertexAttrib1fv(z.location,ne)}}}}y()}function w(){C();for(const x in n){const A=n[x];for(const F in A){const B=A[F];for(const k in B)h(B[k].object),delete B[k];delete A[F]}delete n[x]}}function T(x){if(n[x.id]===void 0)return;const A=n[x.id];for(const F in A){const B=A[F];for(const k in B)h(B[k].object),delete B[k];delete A[F]}delete n[x.id]}function M(x){for(const A in n){const F=n[A];if(F[x.id]===void 0)continue;const B=F[x.id];for(const k in B)h(B[k].object),delete B[k];delete F[x.id]}}function C(){D(),a=!0,r!==i&&(r=i,l(r.object))}function D(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:o,reset:C,resetDefaultState:D,dispose:w,releaseStatesOfGeometry:T,releaseStatesOfProgram:M,initAttributes:b,enableAttribute:m,disableUnusedAttributes:y}}function l0(s,e,t){let n;function i(l){n=l}function r(l,h){s.drawArrays(n,l,h),t.update(h,n,1)}function a(l,h,u){u!==0&&(s.drawArraysInstanced(n,l,h,u),t.update(h,n,u))}function o(l,h,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,h,0,u);let f=0;for(let g=0;g<u;g++)f+=h[g];t.update(f,n,1)}function c(l,h,u,d){if(u===0)return;const f=e.get("WEBGL_multi_draw");if(f===null)for(let g=0;g<l.length;g++)a(l[g],h[g],d[g]);else{f.multiDrawArraysInstancedWEBGL(n,l,0,h,0,d,0,u);let g=0;for(let b=0;b<u;b++)g+=h[b];for(let b=0;b<d.length;b++)t.update(g,n,d[b])}}this.setMode=i,this.render=r,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=c}function h0(s,e,t,n){let i;function r(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const M=e.get("EXT_texture_filter_anisotropic");i=s.getParameter(M.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function a(M){return!(M!==fn&&n.convert(M)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(M){const C=M===yr&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(M!==ei&&n.convert(M)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&M!==vn&&!C)}function c(M){if(M==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";M="mediump"}return M==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=t.precision!==void 0?t.precision:"highp";const h=c(l);h!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",h,"instead."),l=h);const u=t.logarithmicDepthBuffer===!0,d=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control");if(d===!0){const M=e.get("EXT_clip_control");M.clipControlEXT(M.LOWER_LEFT_EXT,M.ZERO_TO_ONE_EXT)}const f=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),g=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),b=s.getParameter(s.MAX_TEXTURE_SIZE),m=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),p=s.getParameter(s.MAX_VERTEX_ATTRIBS),y=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),v=s.getParameter(s.MAX_VARYING_VECTORS),_=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),w=g>0,T=s.getParameter(s.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:a,textureTypeReadable:o,precision:l,logarithmicDepthBuffer:u,reverseDepthBuffer:d,maxTextures:f,maxVertexTextures:g,maxTextureSize:b,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:y,maxVaryings:v,maxFragmentUniforms:_,vertexTextures:w,maxSamples:T}}function u0(s){const e=this;let t=null,n=0,i=!1,r=!1;const a=new Ri,o=new Oe,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){const f=u.length!==0||d||n!==0||i;return i=d,n=u.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,d){t=h(u,d,0)},this.setState=function(u,d,f){const g=u.clippingPlanes,b=u.clipIntersection,m=u.clipShadows,p=s.get(u);if(!i||g===null||g.length===0||r&&!m)r?h(null):l();else{const y=r?0:n,v=y*4;let _=p.clippingState||null;c.value=_,_=h(g,d,v,f);for(let w=0;w!==v;++w)_[w]=t[w];p.clippingState=_,this.numIntersection=b?this.numPlanes:0,this.numPlanes+=y}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(u,d,f,g){const b=u!==null?u.length:0;let m=null;if(b!==0){if(m=c.value,g!==!0||m===null){const p=f+b*4,y=d.matrixWorldInverse;o.getNormalMatrix(y),(m===null||m.length<p)&&(m=new Float32Array(p));for(let v=0,_=f;v!==b;++v,_+=4)a.copy(u[v]).applyMatrix4(y,o),a.normal.toArray(m,_),m[_+3]=a.constant}c.value=m,c.needsUpdate=!0}return e.numPlanes=b,e.numIntersection=0,m}}function d0(s){let e=new WeakMap;function t(a,o){return o===ic?a.mapping=ms:o===sc&&(a.mapping=gs),a}function n(a){if(a&&a.isTexture){const o=a.mapping;if(o===ic||o===sc)if(e.has(a)){const c=e.get(a).texture;return t(c,a.mapping)}else{const c=a.image;if(c&&c.height>0){const l=new Sp(c.height);return l.fromEquirectangularTexture(s,a),e.set(a,l),a.addEventListener("dispose",i),t(l.texture,a.mapping)}else return null}}return a}function i(a){const o=a.target;o.removeEventListener("dispose",i);const c=e.get(o);c!==void 0&&(e.delete(o),c.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}class il extends Ju{constructor(e=-1,t=1,n=1,i=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let r=n-e,a=n+e,o=i+t,c=i-t;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,a=r+l*this.view.width,o-=h*this.view.offsetY,c=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const os=4,sh=[.125,.215,.35,.446,.526,.582],Li=20,bo=new il,rh=new Ae;let vo=null,xo=0,_o=0,yo=!1;const Ci=(1+Math.sqrt(5))/2,Ji=1/Ci,ah=[new R(-Ci,Ji,0),new R(Ci,Ji,0),new R(-Ji,0,Ci),new R(Ji,0,Ci),new R(0,Ci,-Ji),new R(0,Ci,Ji),new R(-1,1,-1),new R(1,1,-1),new R(-1,1,1),new R(1,1,1)];class Dc{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,i=100){vo=this._renderer.getRenderTarget(),xo=this._renderer.getActiveCubeFace(),_o=this._renderer.getActiveMipmapLevel(),yo=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,n,i,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=lh(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=ch(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(vo,xo,_o),this._renderer.xr.enabled=yo,e.scissorTest=!1,Vr(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===ms||e.mapping===gs?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),vo=this._renderer.getRenderTarget(),xo=this._renderer.getActiveCubeFace(),_o=this._renderer.getActiveMipmapLevel(),yo=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:un,minFilter:un,generateMipmaps:!1,type:yr,format:fn,colorSpace:Bt,depthBuffer:!1},i=oh(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=oh(e,t,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=f0(r)),this._blurMaterial=p0(r,e,t)}return i}_compileMaterial(e){const t=new $e(this._lodPlanes[0],e);this._renderer.compile(t,bo)}_sceneToCubeUV(e,t,n,i){const o=new Kt(90,1,t,n),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,d=h.toneMapping;h.getClearColor(rh),h.toneMapping=gi,h.autoClear=!1;const f=new $t({name:"PMREM.Background",side:Jt,depthWrite:!1,depthTest:!1}),g=new $e(new Fi,f);let b=!1;const m=e.background;m?m.isColor&&(f.color.copy(m),e.background=null,b=!0):(f.color.copy(rh),b=!0);for(let p=0;p<6;p++){const y=p%3;y===0?(o.up.set(0,c[p],0),o.lookAt(l[p],0,0)):y===1?(o.up.set(0,0,c[p]),o.lookAt(0,l[p],0)):(o.up.set(0,c[p],0),o.lookAt(0,0,l[p]));const v=this._cubeSize;Vr(i,y*v,p>2?v:0,v,v),h.setRenderTarget(i),b&&h.render(g,o),h.render(e,o)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=d,h.autoClear=u,e.background=m}_textureToCubeUV(e,t){const n=this._renderer,i=e.mapping===ms||e.mapping===gs;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=lh()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=ch());const r=i?this._cubemapMaterial:this._equirectMaterial,a=new $e(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=e;const c=this._cubeSize;Vr(t,0,0,3*c,2*c),n.setRenderTarget(t),n.render(a,bo)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const i=this._lodPlanes.length;for(let r=1;r<i;r++){const a=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=ah[(i-r-1)%ah.length];this._blur(e,r-1,r,a,o)}t.autoClear=n}_blur(e,t,n,i,r){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,i,"latitudinal",r),this._halfBlur(a,e,n,n,i,"longitudinal",r)}_halfBlur(e,t,n,i,r,a,o){const c=this._renderer,l=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,u=new $e(this._lodPlanes[i],l),d=l.uniforms,f=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*Li-1),b=r/g,m=isFinite(r)?1+Math.floor(h*b):Li;m>Li&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Li}`);const p=[];let y=0;for(let M=0;M<Li;++M){const C=M/b,D=Math.exp(-C*C/2);p.push(D),M===0?y+=D:M<m&&(y+=2*D)}for(let M=0;M<p.length;M++)p[M]=p[M]/y;d.envMap.value=e.texture,d.samples.value=m,d.weights.value=p,d.latitudinal.value=a==="latitudinal",o&&(d.poleAxis.value=o);const{_lodMax:v}=this;d.dTheta.value=g,d.mipInt.value=v-n;const _=this._sizeLods[i],w=3*_*(i>v-os?i-v+os:0),T=4*(this._cubeSize-_);Vr(t,w,T,3*_,2*_),c.setRenderTarget(t),c.render(u,bo)}}function f0(s){const e=[],t=[],n=[];let i=s;const r=s-os+1+sh.length;for(let a=0;a<r;a++){const o=Math.pow(2,i);t.push(o);let c=1/o;a>s-os?c=sh[a-s+os-1]:a===0&&(c=0),n.push(c);const l=1/(o-2),h=-l,u=1+l,d=[h,h,u,h,u,u,h,h,u,u,h,u],f=6,g=6,b=3,m=2,p=1,y=new Float32Array(b*g*f),v=new Float32Array(m*g*f),_=new Float32Array(p*g*f);for(let T=0;T<f;T++){const M=T%3*2/3-1,C=T>2?0:-1,D=[M,C,0,M+2/3,C,0,M+2/3,C+1,0,M,C,0,M+2/3,C+1,0,M,C+1,0];y.set(D,b*g*T),v.set(d,m*g*T);const x=[T,T,T,T,T,T];_.set(x,p*g*T)}const w=new bt;w.setAttribute("position",new Et(y,b)),w.setAttribute("uv",new Et(v,m)),w.setAttribute("faceIndex",new Et(_,p)),e.push(w),i>os&&i--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function oh(s,e,t){const n=new Ni(s,e,t);return n.texture.mapping=Fa,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Vr(s,e,t,n,i){s.viewport.set(e,t,n,i),s.scissor.set(e,t,n,i)}function p0(s,e,t){const n=new Float32Array(Li),i=new R(0,1,0);return new yn({name:"SphericalGaussianBlur",defines:{n:Li,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:sl(),fragmentShader:`

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
		`,blending:mi,depthTest:!1,depthWrite:!1})}function ch(){return new yn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:sl(),fragmentShader:`

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
		`,blending:mi,depthTest:!1,depthWrite:!1})}function lh(){return new yn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:sl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:mi,depthTest:!1,depthWrite:!1})}function sl(){return`

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
	`}function m0(s){let e=new WeakMap,t=null;function n(o){if(o&&o.isTexture){const c=o.mapping,l=c===ic||c===sc,h=c===ms||c===gs;if(l||h){let u=e.get(o);const d=u!==void 0?u.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==d)return t===null&&(t=new Dc(s)),u=l?t.fromEquirectangular(o,u):t.fromCubemap(o,u),u.texture.pmremVersion=o.pmremVersion,e.set(o,u),u.texture;if(u!==void 0)return u.texture;{const f=o.image;return l&&f&&f.height>0||h&&f&&i(f)?(t===null&&(t=new Dc(s)),u=l?t.fromEquirectangular(o):t.fromCubemap(o),u.texture.pmremVersion=o.pmremVersion,e.set(o,u),o.addEventListener("dispose",r),u.texture):null}}}return o}function i(o){let c=0;const l=6;for(let h=0;h<l;h++)o[h]!==void 0&&c++;return c===l}function r(o){const c=o.target;c.removeEventListener("dispose",r);const l=e.get(c);l!==void 0&&(e.delete(c),l.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:a}}function g0(s){const e={};function t(n){if(e[n]!==void 0)return e[n];let i;switch(n){case"WEBGL_depth_texture":i=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=s.getExtension(n)}return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const i=t(n);return i===null&&ya("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function b0(s,e,t,n){const i={},r=new WeakMap;function a(u){const d=u.target;d.index!==null&&e.remove(d.index);for(const g in d.attributes)e.remove(d.attributes[g]);for(const g in d.morphAttributes){const b=d.morphAttributes[g];for(let m=0,p=b.length;m<p;m++)e.remove(b[m])}d.removeEventListener("dispose",a),delete i[d.id];const f=r.get(d);f&&(e.remove(f),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function o(u,d){return i[d.id]===!0||(d.addEventListener("dispose",a),i[d.id]=!0,t.memory.geometries++),d}function c(u){const d=u.attributes;for(const g in d)e.update(d[g],s.ARRAY_BUFFER);const f=u.morphAttributes;for(const g in f){const b=f[g];for(let m=0,p=b.length;m<p;m++)e.update(b[m],s.ARRAY_BUFFER)}}function l(u){const d=[],f=u.index,g=u.attributes.position;let b=0;if(f!==null){const y=f.array;b=f.version;for(let v=0,_=y.length;v<_;v+=3){const w=y[v+0],T=y[v+1],M=y[v+2];d.push(w,T,T,M,M,w)}}else if(g!==void 0){const y=g.array;b=g.version;for(let v=0,_=y.length/3-1;v<_;v+=3){const w=v+0,T=v+1,M=v+2;d.push(w,T,T,M,M,w)}}else return;const m=new(Vu(d)?Ku:Yu)(d,1);m.version=b;const p=r.get(u);p&&e.remove(p),r.set(u,m)}function h(u){const d=r.get(u);if(d){const f=u.index;f!==null&&d.version<f.version&&l(u)}else l(u);return r.get(u)}return{get:o,update:c,getWireframeAttribute:h}}function v0(s,e,t){let n;function i(d){n=d}let r,a;function o(d){r=d.type,a=d.bytesPerElement}function c(d,f){s.drawElements(n,f,r,d*a),t.update(f,n,1)}function l(d,f,g){g!==0&&(s.drawElementsInstanced(n,f,r,d*a,g),t.update(f,n,g))}function h(d,f,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,r,d,0,g);let m=0;for(let p=0;p<g;p++)m+=f[p];t.update(m,n,1)}function u(d,f,g,b){if(g===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<d.length;p++)l(d[p]/a,f[p],b[p]);else{m.multiDrawElementsInstancedWEBGL(n,f,0,r,d,0,b,0,g);let p=0;for(let y=0;y<g;y++)p+=f[y];for(let y=0;y<b.length;y++)t.update(p,n,b[y])}}this.setMode=i,this.setIndex=o,this.render=c,this.renderInstances=l,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function x0(s){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(t.calls++,a){case s.TRIANGLES:t.triangles+=o*(r/3);break;case s.LINES:t.lines+=o*(r/2);break;case s.LINE_STRIP:t.lines+=o*(r-1);break;case s.LINE_LOOP:t.lines+=o*r;break;case s.POINTS:t.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function i(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function _0(s,e,t){const n=new WeakMap,i=new Ze;function r(a,o,c){const l=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=h!==void 0?h.length:0;let d=n.get(o);if(d===void 0||d.count!==u){let D=function(){M.dispose(),n.delete(o),o.removeEventListener("dispose",D)};d!==void 0&&d.texture.dispose();const f=o.morphAttributes.position!==void 0,g=o.morphAttributes.normal!==void 0,b=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],p=o.morphAttributes.normal||[],y=o.morphAttributes.color||[];let v=0;f===!0&&(v=1),g===!0&&(v=2),b===!0&&(v=3);let _=o.attributes.position.count*v,w=1;_>e.maxTextureSize&&(w=Math.ceil(_/e.maxTextureSize),_=e.maxTextureSize);const T=new Float32Array(_*w*4*u),M=new Xu(T,_,w,u);M.type=vn,M.needsUpdate=!0;const C=v*4;for(let x=0;x<u;x++){const A=m[x],F=p[x],B=y[x],k=_*w*4*x;for(let j=0;j<A.count;j++){const G=j*C;f===!0&&(i.fromBufferAttribute(A,j),T[k+G+0]=i.x,T[k+G+1]=i.y,T[k+G+2]=i.z,T[k+G+3]=0),g===!0&&(i.fromBufferAttribute(F,j),T[k+G+4]=i.x,T[k+G+5]=i.y,T[k+G+6]=i.z,T[k+G+7]=0),b===!0&&(i.fromBufferAttribute(B,j),T[k+G+8]=i.x,T[k+G+9]=i.y,T[k+G+10]=i.z,T[k+G+11]=B.itemSize===4?i.w:1)}}d={count:u,texture:M,size:new oe(_,w)},n.set(o,d),o.addEventListener("dispose",D)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)c.getUniforms().setValue(s,"morphTexture",a.morphTexture,t);else{let f=0;for(let b=0;b<l.length;b++)f+=l[b];const g=o.morphTargetsRelative?1:1-f;c.getUniforms().setValue(s,"morphTargetBaseInfluence",g),c.getUniforms().setValue(s,"morphTargetInfluences",l)}c.getUniforms().setValue(s,"morphTargetsTexture",d.texture,t),c.getUniforms().setValue(s,"morphTargetsTextureSize",d.size)}return{update:r}}function y0(s,e,t,n){let i=new WeakMap;function r(c){const l=n.render.frame,h=c.geometry,u=e.get(c,h);if(i.get(u)!==l&&(e.update(u),i.set(u,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",o)===!1&&c.addEventListener("dispose",o),i.get(c)!==l&&(t.update(c.instanceMatrix,s.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,s.ARRAY_BUFFER),i.set(c,l))),c.isSkinnedMesh){const d=c.skeleton;i.get(d)!==l&&(d.update(),i.set(d,l))}return u}function a(){i=new WeakMap}function o(c){const l=c.target;l.removeEventListener("dispose",o),t.remove(l.instanceMatrix),l.instanceColor!==null&&t.remove(l.instanceColor)}return{update:r,dispose:a}}class ed extends At{constructor(e,t,n,i,r,a,o,c,l,h=hs){if(h!==hs&&h!==xs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===hs&&(n=Di),n===void 0&&h===xs&&(n=vs),super(null,i,r,a,o,c,h,n,l),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=o!==void 0?o:Vt,this.minFilter=c!==void 0?c:Vt,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const td=new At,hh=new ed(1,1),nd=new Xu,id=new op,sd=new Qu,uh=[],dh=[],fh=new Float32Array(16),ph=new Float32Array(9),mh=new Float32Array(4);function Es(s,e,t){const n=s[0];if(n<=0||n>0)return s;const i=e*t;let r=uh[i];if(r===void 0&&(r=new Float32Array(i),uh[i]=r),e!==0){n.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,s[a].toArray(r,o)}return r}function Tt(s,e){if(s.length!==e.length)return!1;for(let t=0,n=s.length;t<n;t++)if(s[t]!==e[t])return!1;return!0}function Rt(s,e){for(let t=0,n=e.length;t<n;t++)s[t]=e[t]}function Ba(s,e){let t=dh[e];t===void 0&&(t=new Int32Array(e),dh[e]=t);for(let n=0;n!==e;++n)t[n]=s.allocateTextureUnit();return t}function M0(s,e){const t=this.cache;t[0]!==e&&(s.uniform1f(this.addr,e),t[0]=e)}function S0(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Tt(t,e))return;s.uniform2fv(this.addr,e),Rt(t,e)}}function w0(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Tt(t,e))return;s.uniform3fv(this.addr,e),Rt(t,e)}}function A0(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Tt(t,e))return;s.uniform4fv(this.addr,e),Rt(t,e)}}function E0(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(Tt(t,e))return;s.uniformMatrix2fv(this.addr,!1,e),Rt(t,e)}else{if(Tt(t,n))return;mh.set(n),s.uniformMatrix2fv(this.addr,!1,mh),Rt(t,n)}}function T0(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(Tt(t,e))return;s.uniformMatrix3fv(this.addr,!1,e),Rt(t,e)}else{if(Tt(t,n))return;ph.set(n),s.uniformMatrix3fv(this.addr,!1,ph),Rt(t,n)}}function R0(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(Tt(t,e))return;s.uniformMatrix4fv(this.addr,!1,e),Rt(t,e)}else{if(Tt(t,n))return;fh.set(n),s.uniformMatrix4fv(this.addr,!1,fh),Rt(t,n)}}function C0(s,e){const t=this.cache;t[0]!==e&&(s.uniform1i(this.addr,e),t[0]=e)}function P0(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Tt(t,e))return;s.uniform2iv(this.addr,e),Rt(t,e)}}function L0(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Tt(t,e))return;s.uniform3iv(this.addr,e),Rt(t,e)}}function I0(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Tt(t,e))return;s.uniform4iv(this.addr,e),Rt(t,e)}}function D0(s,e){const t=this.cache;t[0]!==e&&(s.uniform1ui(this.addr,e),t[0]=e)}function N0(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Tt(t,e))return;s.uniform2uiv(this.addr,e),Rt(t,e)}}function U0(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Tt(t,e))return;s.uniform3uiv(this.addr,e),Rt(t,e)}}function F0(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Tt(t,e))return;s.uniform4uiv(this.addr,e),Rt(t,e)}}function O0(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i);let r;this.type===s.SAMPLER_2D_SHADOW?(hh.compareFunction=Gu,r=hh):r=td,t.setTexture2D(e||r,i)}function k0(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||id,i)}function B0(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||sd,i)}function z0(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||nd,i)}function H0(s){switch(s){case 5126:return M0;case 35664:return S0;case 35665:return w0;case 35666:return A0;case 35674:return E0;case 35675:return T0;case 35676:return R0;case 5124:case 35670:return C0;case 35667:case 35671:return P0;case 35668:case 35672:return L0;case 35669:case 35673:return I0;case 5125:return D0;case 36294:return N0;case 36295:return U0;case 36296:return F0;case 35678:case 36198:case 36298:case 36306:case 35682:return O0;case 35679:case 36299:case 36307:return k0;case 35680:case 36300:case 36308:case 36293:return B0;case 36289:case 36303:case 36311:case 36292:return z0}}function G0(s,e){s.uniform1fv(this.addr,e)}function V0(s,e){const t=Es(e,this.size,2);s.uniform2fv(this.addr,t)}function W0(s,e){const t=Es(e,this.size,3);s.uniform3fv(this.addr,t)}function X0(s,e){const t=Es(e,this.size,4);s.uniform4fv(this.addr,t)}function q0(s,e){const t=Es(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,t)}function j0(s,e){const t=Es(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,t)}function Y0(s,e){const t=Es(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,t)}function K0(s,e){s.uniform1iv(this.addr,e)}function $0(s,e){s.uniform2iv(this.addr,e)}function J0(s,e){s.uniform3iv(this.addr,e)}function Q0(s,e){s.uniform4iv(this.addr,e)}function Z0(s,e){s.uniform1uiv(this.addr,e)}function eb(s,e){s.uniform2uiv(this.addr,e)}function tb(s,e){s.uniform3uiv(this.addr,e)}function nb(s,e){s.uniform4uiv(this.addr,e)}function ib(s,e,t){const n=this.cache,i=e.length,r=Ba(t,i);Tt(n,r)||(s.uniform1iv(this.addr,r),Rt(n,r));for(let a=0;a!==i;++a)t.setTexture2D(e[a]||td,r[a])}function sb(s,e,t){const n=this.cache,i=e.length,r=Ba(t,i);Tt(n,r)||(s.uniform1iv(this.addr,r),Rt(n,r));for(let a=0;a!==i;++a)t.setTexture3D(e[a]||id,r[a])}function rb(s,e,t){const n=this.cache,i=e.length,r=Ba(t,i);Tt(n,r)||(s.uniform1iv(this.addr,r),Rt(n,r));for(let a=0;a!==i;++a)t.setTextureCube(e[a]||sd,r[a])}function ab(s,e,t){const n=this.cache,i=e.length,r=Ba(t,i);Tt(n,r)||(s.uniform1iv(this.addr,r),Rt(n,r));for(let a=0;a!==i;++a)t.setTexture2DArray(e[a]||nd,r[a])}function ob(s){switch(s){case 5126:return G0;case 35664:return V0;case 35665:return W0;case 35666:return X0;case 35674:return q0;case 35675:return j0;case 35676:return Y0;case 5124:case 35670:return K0;case 35667:case 35671:return $0;case 35668:case 35672:return J0;case 35669:case 35673:return Q0;case 5125:return Z0;case 36294:return eb;case 36295:return tb;case 36296:return nb;case 35678:case 36198:case 36298:case 36306:case 35682:return ib;case 35679:case 36299:case 36307:return sb;case 35680:case 36300:case 36308:case 36293:return rb;case 36289:case 36303:case 36311:case 36292:return ab}}class cb{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=H0(t.type)}}class lb{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=ob(t.type)}}class hb{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const i=this.seq;for(let r=0,a=i.length;r!==a;++r){const o=i[r];o.setValue(e,t[o.id],n)}}}const Mo=/(\w+)(\])?(\[|\.)?/g;function gh(s,e){s.seq.push(e),s.map[e.id]=e}function ub(s,e,t){const n=s.name,i=n.length;for(Mo.lastIndex=0;;){const r=Mo.exec(n),a=Mo.lastIndex;let o=r[1];const c=r[2]==="]",l=r[3];if(c&&(o=o|0),l===void 0||l==="["&&a+2===i){gh(t,l===void 0?new cb(o,s,e):new lb(o,s,e));break}else{let u=t.map[o];u===void 0&&(u=new hb(o),gh(t,u)),t=u}}}class Ma{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){const r=e.getActiveUniform(t,i),a=e.getUniformLocation(t,r.name);ub(r,a,this)}}setValue(e,t,n,i){const r=this.map[t];r!==void 0&&r.setValue(e,n,i)}setOptional(e,t,n){const i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let r=0,a=t.length;r!==a;++r){const o=t[r],c=n[o.id];c.needsUpdate!==!1&&o.setValue(e,c.value,i)}}static seqWithValue(e,t){const n=[];for(let i=0,r=e.length;i!==r;++i){const a=e[i];a.id in t&&n.push(a)}return n}}function bh(s,e,t){const n=s.createShader(e);return s.shaderSource(n,t),s.compileShader(n),n}const db=37297;let fb=0;function pb(s,e){const t=s.split(`
`),n=[],i=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=i;a<r;a++){const o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}function mb(s){const e=Je.getPrimaries(Je.workingColorSpace),t=Je.getPrimaries(s);let n;switch(e===t?n="":e===Ra&&t===Ta?n="LinearDisplayP3ToLinearSRGB":e===Ta&&t===Ra&&(n="LinearSRGBToLinearDisplayP3"),s){case Bt:case Oa:return[n,"LinearTransferOETF"];case Lt:case el:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",s),[n,"LinearTransferOETF"]}}function vh(s,e,t){const n=s.getShaderParameter(e,s.COMPILE_STATUS),i=s.getShaderInfoLog(e).trim();if(n&&i==="")return"";const r=/ERROR: 0:(\d+)/.exec(i);if(r){const a=parseInt(r[1]);return t.toUpperCase()+`

`+i+`

`+pb(s.getShaderSource(e),a)}else return i}function gb(s,e){const t=mb(e);return`vec4 ${s}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function bb(s,e){let t;switch(e){case gf:t="Linear";break;case bf:t="Reinhard";break;case vf:t="Cineon";break;case xf:t="ACESFilmic";break;case yf:t="AgX";break;case Mf:t="Neutral";break;case _f:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+s+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Wr=new R;function vb(){Je.getLuminanceCoefficients(Wr);const s=Wr.x.toFixed(4),e=Wr.y.toFixed(4),t=Wr.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function xb(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(nr).join(`
`)}function _b(s){const e=[];for(const t in s){const n=s[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function yb(s,e){const t={},n=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const r=s.getActiveAttrib(e,i),a=r.name;let o=1;r.type===s.FLOAT_MAT2&&(o=2),r.type===s.FLOAT_MAT3&&(o=3),r.type===s.FLOAT_MAT4&&(o=4),t[a]={type:r.type,location:s.getAttribLocation(e,a),locationSize:o}}return t}function nr(s){return s!==""}function xh(s,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function _h(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Mb=/^[ \t]*#include +<([\w\d./]+)>/gm;function Nc(s){return s.replace(Mb,wb)}const Sb=new Map;function wb(s,e){let t=Fe[e];if(t===void 0){const n=Sb.get(e);if(n!==void 0)t=Fe[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return Nc(t)}const Ab=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function yh(s){return s.replace(Ab,Eb)}function Eb(s,e,t,n){let i="";for(let r=parseInt(e);r<parseInt(t);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function Mh(s){let e=`precision ${s.precision} float;
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
	`;return s.precision==="highp"?e+=`
#define HIGH_PRECISION`:s.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function Tb(s){let e="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===Tu?e="SHADOWMAP_TYPE_PCF":s.shadowMapType===Yd?e="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===Yn&&(e="SHADOWMAP_TYPE_VSM"),e}function Rb(s){let e="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case ms:case gs:e="ENVMAP_TYPE_CUBE";break;case Fa:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Cb(s){let e="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case gs:e="ENVMAP_MODE_REFRACTION";break}return e}function Pb(s){let e="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case Ru:e="ENVMAP_BLENDING_MULTIPLY";break;case pf:e="ENVMAP_BLENDING_MIX";break;case mf:e="ENVMAP_BLENDING_ADD";break}return e}function Lb(s){const e=s.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function Ib(s,e,t,n){const i=s.getContext(),r=t.defines;let a=t.vertexShader,o=t.fragmentShader;const c=Tb(t),l=Rb(t),h=Cb(t),u=Pb(t),d=Lb(t),f=xb(t),g=_b(r),b=i.createProgram();let m,p,y=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(nr).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(nr).join(`
`),p.length>0&&(p+=`
`)):(m=[Mh(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(nr).join(`
`),p=[Mh(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==gi?"#define TONE_MAPPING":"",t.toneMapping!==gi?Fe.tonemapping_pars_fragment:"",t.toneMapping!==gi?bb("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Fe.colorspace_pars_fragment,gb("linearToOutputTexel",t.outputColorSpace),vb(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(nr).join(`
`)),a=Nc(a),a=xh(a,t),a=_h(a,t),o=Nc(o),o=xh(o,t),o=_h(o,t),a=yh(a),o=yh(o),t.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,m=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",t.glslVersion===Bl?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Bl?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const v=y+m+a,_=y+p+o,w=bh(i,i.VERTEX_SHADER,v),T=bh(i,i.FRAGMENT_SHADER,_);i.attachShader(b,w),i.attachShader(b,T),t.index0AttributeName!==void 0?i.bindAttribLocation(b,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(b,0,"position"),i.linkProgram(b);function M(A){if(s.debug.checkShaderErrors){const F=i.getProgramInfoLog(b).trim(),B=i.getShaderInfoLog(w).trim(),k=i.getShaderInfoLog(T).trim();let j=!0,G=!0;if(i.getProgramParameter(b,i.LINK_STATUS)===!1)if(j=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(i,b,w,T);else{const X=vh(i,w,"vertex"),z=vh(i,T,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(b,i.VALIDATE_STATUS)+`

Material Name: `+A.name+`
Material Type: `+A.type+`

Program Info Log: `+F+`
`+X+`
`+z)}else F!==""?console.warn("THREE.WebGLProgram: Program Info Log:",F):(B===""||k==="")&&(G=!1);G&&(A.diagnostics={runnable:j,programLog:F,vertexShader:{log:B,prefix:m},fragmentShader:{log:k,prefix:p}})}i.deleteShader(w),i.deleteShader(T),C=new Ma(i,b),D=yb(i,b)}let C;this.getUniforms=function(){return C===void 0&&M(this),C};let D;this.getAttributes=function(){return D===void 0&&M(this),D};let x=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return x===!1&&(x=i.getProgramParameter(b,db)),x},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(b),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=fb++,this.cacheKey=e,this.usedTimes=1,this.program=b,this.vertexShader=w,this.fragmentShader=T,this}let Db=0;class Nb{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),r=this._getShaderStage(n),a=this._getShaderCacheForMaterial(e);return a.has(i)===!1&&(a.add(i),i.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new Ub(e),t.set(e,n)),n}}class Ub{constructor(e){this.id=Db++,this.code=e,this.usedTimes=0}}function Fb(s,e,t,n,i,r,a){const o=new qu,c=new Nb,l=new Set,h=[],u=i.logarithmicDepthBuffer,d=i.reverseDepthBuffer,f=i.vertexTextures;let g=i.precision;const b={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function m(x){return l.add(x),x===0?"uv":`uv${x}`}function p(x,A,F,B,k){const j=B.fog,G=k.geometry,X=x.isMeshStandardMaterial?B.environment:null,z=(x.isMeshStandardMaterial?t:e).get(x.envMap||X),te=z&&z.mapping===Fa?z.image.height:null,ne=b[x.type];x.precision!==null&&(g=i.getMaxPrecision(x.precision),g!==x.precision&&console.warn("THREE.WebGLProgram.getParameters:",x.precision,"not supported, using",g,"instead."));const re=G.morphAttributes.position||G.morphAttributes.normal||G.morphAttributes.color,Ee=re!==void 0?re.length:0;let we=0;G.morphAttributes.position!==void 0&&(we=1),G.morphAttributes.normal!==void 0&&(we=2),G.morphAttributes.color!==void 0&&(we=3);let O,$,ee,ae;if(ne){const Zt=Pn[ne];O=Zt.vertexShader,$=Zt.fragmentShader}else O=x.vertexShader,$=x.fragmentShader,c.update(x),ee=c.getVertexShaderID(x),ae=c.getFragmentShaderID(x);const Te=s.getRenderTarget(),ve=k.isInstancedMesh===!0,Be=k.isBatchedMesh===!0,rt=!!x.map,qe=!!x.matcap,L=!!z,sn=!!x.aoMap,Ge=!!x.lightMap,Ye=!!x.bumpMap,Le=!!x.normalMap,ct=!!x.displacementMap,Ne=!!x.emissiveMap,P=!!x.metalnessMap,S=!!x.roughnessMap,H=x.anisotropy>0,K=x.clearcoat>0,Z=x.dispersion>0,Y=x.iridescence>0,ye=x.sheen>0,le=x.transmission>0,pe=H&&!!x.anisotropyMap,Ke=K&&!!x.clearcoatMap,ie=K&&!!x.clearcoatNormalMap,me=K&&!!x.clearcoatRoughnessMap,Ie=Y&&!!x.iridescenceMap,De=Y&&!!x.iridescenceThicknessMap,ge=ye&&!!x.sheenColorMap,Ve=ye&&!!x.sheenRoughnessMap,Ue=!!x.specularMap,ot=!!x.specularColorMap,I=!!x.specularIntensityMap,de=le&&!!x.transmissionMap,q=le&&!!x.thicknessMap,J=!!x.gradientMap,he=!!x.alphaMap,fe=x.alphaTest>0,je=!!x.alphaHash,Mt=!!x.extensions;let Qt=gi;x.toneMapped&&(Te===null||Te.isXRRenderTarget===!0)&&(Qt=s.toneMapping);const Qe={shaderID:ne,shaderType:x.type,shaderName:x.name,vertexShader:O,fragmentShader:$,defines:x.defines,customVertexShaderID:ee,customFragmentShaderID:ae,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:g,batching:Be,batchingColor:Be&&k._colorsTexture!==null,instancing:ve,instancingColor:ve&&k.instanceColor!==null,instancingMorph:ve&&k.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:Te===null?s.outputColorSpace:Te.isXRRenderTarget===!0?Te.texture.colorSpace:Bt,alphaToCoverage:!!x.alphaToCoverage,map:rt,matcap:qe,envMap:L,envMapMode:L&&z.mapping,envMapCubeUVHeight:te,aoMap:sn,lightMap:Ge,bumpMap:Ye,normalMap:Le,displacementMap:f&&ct,emissiveMap:Ne,normalMapObjectSpace:Le&&x.normalMapType===Rf,normalMapTangentSpace:Le&&x.normalMapType===Hu,metalnessMap:P,roughnessMap:S,anisotropy:H,anisotropyMap:pe,clearcoat:K,clearcoatMap:Ke,clearcoatNormalMap:ie,clearcoatRoughnessMap:me,dispersion:Z,iridescence:Y,iridescenceMap:Ie,iridescenceThicknessMap:De,sheen:ye,sheenColorMap:ge,sheenRoughnessMap:Ve,specularMap:Ue,specularColorMap:ot,specularIntensityMap:I,transmission:le,transmissionMap:de,thicknessMap:q,gradientMap:J,opaque:x.transparent===!1&&x.blending===ls&&x.alphaToCoverage===!1,alphaMap:he,alphaTest:fe,alphaHash:je,combine:x.combine,mapUv:rt&&m(x.map.channel),aoMapUv:sn&&m(x.aoMap.channel),lightMapUv:Ge&&m(x.lightMap.channel),bumpMapUv:Ye&&m(x.bumpMap.channel),normalMapUv:Le&&m(x.normalMap.channel),displacementMapUv:ct&&m(x.displacementMap.channel),emissiveMapUv:Ne&&m(x.emissiveMap.channel),metalnessMapUv:P&&m(x.metalnessMap.channel),roughnessMapUv:S&&m(x.roughnessMap.channel),anisotropyMapUv:pe&&m(x.anisotropyMap.channel),clearcoatMapUv:Ke&&m(x.clearcoatMap.channel),clearcoatNormalMapUv:ie&&m(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:me&&m(x.clearcoatRoughnessMap.channel),iridescenceMapUv:Ie&&m(x.iridescenceMap.channel),iridescenceThicknessMapUv:De&&m(x.iridescenceThicknessMap.channel),sheenColorMapUv:ge&&m(x.sheenColorMap.channel),sheenRoughnessMapUv:Ve&&m(x.sheenRoughnessMap.channel),specularMapUv:Ue&&m(x.specularMap.channel),specularColorMapUv:ot&&m(x.specularColorMap.channel),specularIntensityMapUv:I&&m(x.specularIntensityMap.channel),transmissionMapUv:de&&m(x.transmissionMap.channel),thicknessMapUv:q&&m(x.thicknessMap.channel),alphaMapUv:he&&m(x.alphaMap.channel),vertexTangents:!!G.attributes.tangent&&(Le||H),vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!G.attributes.color&&G.attributes.color.itemSize===4,pointsUvs:k.isPoints===!0&&!!G.attributes.uv&&(rt||he),fog:!!j,useFog:x.fog===!0,fogExp2:!!j&&j.isFogExp2,flatShading:x.flatShading===!0,sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:u,reverseDepthBuffer:d,skinning:k.isSkinnedMesh===!0,morphTargets:G.morphAttributes.position!==void 0,morphNormals:G.morphAttributes.normal!==void 0,morphColors:G.morphAttributes.color!==void 0,morphTargetsCount:Ee,morphTextureStride:we,numDirLights:A.directional.length,numPointLights:A.point.length,numSpotLights:A.spot.length,numSpotLightMaps:A.spotLightMap.length,numRectAreaLights:A.rectArea.length,numHemiLights:A.hemi.length,numDirLightShadows:A.directionalShadowMap.length,numPointLightShadows:A.pointShadowMap.length,numSpotLightShadows:A.spotShadowMap.length,numSpotLightShadowsWithMaps:A.numSpotLightShadowsWithMaps,numLightProbes:A.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:x.dithering,shadowMapEnabled:s.shadowMap.enabled&&F.length>0,shadowMapType:s.shadowMap.type,toneMapping:Qt,decodeVideoTexture:rt&&x.map.isVideoTexture===!0&&Je.getTransfer(x.map.colorSpace)===ht,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===tn,flipSided:x.side===Jt,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionClipCullDistance:Mt&&x.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Mt&&x.extensions.multiDraw===!0||Be)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()};return Qe.vertexUv1s=l.has(1),Qe.vertexUv2s=l.has(2),Qe.vertexUv3s=l.has(3),l.clear(),Qe}function y(x){const A=[];if(x.shaderID?A.push(x.shaderID):(A.push(x.customVertexShaderID),A.push(x.customFragmentShaderID)),x.defines!==void 0)for(const F in x.defines)A.push(F),A.push(x.defines[F]);return x.isRawShaderMaterial===!1&&(v(A,x),_(A,x),A.push(s.outputColorSpace)),A.push(x.customProgramCacheKey),A.join()}function v(x,A){x.push(A.precision),x.push(A.outputColorSpace),x.push(A.envMapMode),x.push(A.envMapCubeUVHeight),x.push(A.mapUv),x.push(A.alphaMapUv),x.push(A.lightMapUv),x.push(A.aoMapUv),x.push(A.bumpMapUv),x.push(A.normalMapUv),x.push(A.displacementMapUv),x.push(A.emissiveMapUv),x.push(A.metalnessMapUv),x.push(A.roughnessMapUv),x.push(A.anisotropyMapUv),x.push(A.clearcoatMapUv),x.push(A.clearcoatNormalMapUv),x.push(A.clearcoatRoughnessMapUv),x.push(A.iridescenceMapUv),x.push(A.iridescenceThicknessMapUv),x.push(A.sheenColorMapUv),x.push(A.sheenRoughnessMapUv),x.push(A.specularMapUv),x.push(A.specularColorMapUv),x.push(A.specularIntensityMapUv),x.push(A.transmissionMapUv),x.push(A.thicknessMapUv),x.push(A.combine),x.push(A.fogExp2),x.push(A.sizeAttenuation),x.push(A.morphTargetsCount),x.push(A.morphAttributeCount),x.push(A.numDirLights),x.push(A.numPointLights),x.push(A.numSpotLights),x.push(A.numSpotLightMaps),x.push(A.numHemiLights),x.push(A.numRectAreaLights),x.push(A.numDirLightShadows),x.push(A.numPointLightShadows),x.push(A.numSpotLightShadows),x.push(A.numSpotLightShadowsWithMaps),x.push(A.numLightProbes),x.push(A.shadowMapType),x.push(A.toneMapping),x.push(A.numClippingPlanes),x.push(A.numClipIntersection),x.push(A.depthPacking)}function _(x,A){o.disableAll(),A.supportsVertexTextures&&o.enable(0),A.instancing&&o.enable(1),A.instancingColor&&o.enable(2),A.instancingMorph&&o.enable(3),A.matcap&&o.enable(4),A.envMap&&o.enable(5),A.normalMapObjectSpace&&o.enable(6),A.normalMapTangentSpace&&o.enable(7),A.clearcoat&&o.enable(8),A.iridescence&&o.enable(9),A.alphaTest&&o.enable(10),A.vertexColors&&o.enable(11),A.vertexAlphas&&o.enable(12),A.vertexUv1s&&o.enable(13),A.vertexUv2s&&o.enable(14),A.vertexUv3s&&o.enable(15),A.vertexTangents&&o.enable(16),A.anisotropy&&o.enable(17),A.alphaHash&&o.enable(18),A.batching&&o.enable(19),A.dispersion&&o.enable(20),A.batchingColor&&o.enable(21),x.push(o.mask),o.disableAll(),A.fog&&o.enable(0),A.useFog&&o.enable(1),A.flatShading&&o.enable(2),A.logarithmicDepthBuffer&&o.enable(3),A.reverseDepthBuffer&&o.enable(4),A.skinning&&o.enable(5),A.morphTargets&&o.enable(6),A.morphNormals&&o.enable(7),A.morphColors&&o.enable(8),A.premultipliedAlpha&&o.enable(9),A.shadowMapEnabled&&o.enable(10),A.doubleSided&&o.enable(11),A.flipSided&&o.enable(12),A.useDepthPacking&&o.enable(13),A.dithering&&o.enable(14),A.transmission&&o.enable(15),A.sheen&&o.enable(16),A.opaque&&o.enable(17),A.pointsUvs&&o.enable(18),A.decodeVideoTexture&&o.enable(19),A.alphaToCoverage&&o.enable(20),x.push(o.mask)}function w(x){const A=b[x.type];let F;if(A){const B=Pn[A];F=xp.clone(B.uniforms)}else F=x.uniforms;return F}function T(x,A){let F;for(let B=0,k=h.length;B<k;B++){const j=h[B];if(j.cacheKey===A){F=j,++F.usedTimes;break}}return F===void 0&&(F=new Ib(s,A,x,r),h.push(F)),F}function M(x){if(--x.usedTimes===0){const A=h.indexOf(x);h[A]=h[h.length-1],h.pop(),x.destroy()}}function C(x){c.remove(x)}function D(){c.dispose()}return{getParameters:p,getProgramCacheKey:y,getUniforms:w,acquireProgram:T,releaseProgram:M,releaseShaderCache:C,programs:h,dispose:D}}function Ob(){let s=new WeakMap;function e(a){return s.has(a)}function t(a){let o=s.get(a);return o===void 0&&(o={},s.set(a,o)),o}function n(a){s.delete(a)}function i(a,o,c){s.get(a)[o]=c}function r(){s=new WeakMap}return{has:e,get:t,remove:n,update:i,dispose:r}}function kb(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.z!==e.z?s.z-e.z:s.id-e.id}function Sh(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function wh(){const s=[];let e=0;const t=[],n=[],i=[];function r(){e=0,t.length=0,n.length=0,i.length=0}function a(u,d,f,g,b,m){let p=s[e];return p===void 0?(p={id:u.id,object:u,geometry:d,material:f,groupOrder:g,renderOrder:u.renderOrder,z:b,group:m},s[e]=p):(p.id=u.id,p.object=u,p.geometry=d,p.material=f,p.groupOrder=g,p.renderOrder=u.renderOrder,p.z=b,p.group=m),e++,p}function o(u,d,f,g,b,m){const p=a(u,d,f,g,b,m);f.transmission>0?n.push(p):f.transparent===!0?i.push(p):t.push(p)}function c(u,d,f,g,b,m){const p=a(u,d,f,g,b,m);f.transmission>0?n.unshift(p):f.transparent===!0?i.unshift(p):t.unshift(p)}function l(u,d){t.length>1&&t.sort(u||kb),n.length>1&&n.sort(d||Sh),i.length>1&&i.sort(d||Sh)}function h(){for(let u=e,d=s.length;u<d;u++){const f=s[u];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:t,transmissive:n,transparent:i,init:r,push:o,unshift:c,finish:h,sort:l}}function Bb(){let s=new WeakMap;function e(n,i){const r=s.get(n);let a;return r===void 0?(a=new wh,s.set(n,[a])):i>=r.length?(a=new wh,r.push(a)):a=r[i],a}function t(){s=new WeakMap}return{get:e,dispose:t}}function zb(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new R,color:new Ae};break;case"SpotLight":t={position:new R,direction:new R,color:new Ae,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new R,color:new Ae,distance:0,decay:0};break;case"HemisphereLight":t={direction:new R,skyColor:new Ae,groundColor:new Ae};break;case"RectAreaLight":t={color:new Ae,position:new R,halfWidth:new R,halfHeight:new R};break}return s[e.id]=t,t}}}function Hb(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new oe};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new oe};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new oe,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=t,t}}}let Gb=0;function Vb(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function Wb(s){const e=new zb,t=Hb(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new R);const i=new R,r=new _e,a=new _e;function o(l){let h=0,u=0,d=0;for(let D=0;D<9;D++)n.probe[D].set(0,0,0);let f=0,g=0,b=0,m=0,p=0,y=0,v=0,_=0,w=0,T=0,M=0;l.sort(Vb);for(let D=0,x=l.length;D<x;D++){const A=l[D],F=A.color,B=A.intensity,k=A.distance,j=A.shadow&&A.shadow.map?A.shadow.map.texture:null;if(A.isAmbientLight)h+=F.r*B,u+=F.g*B,d+=F.b*B;else if(A.isLightProbe){for(let G=0;G<9;G++)n.probe[G].addScaledVector(A.sh.coefficients[G],B);M++}else if(A.isDirectionalLight){const G=e.get(A);if(G.color.copy(A.color).multiplyScalar(A.intensity),A.castShadow){const X=A.shadow,z=t.get(A);z.shadowIntensity=X.intensity,z.shadowBias=X.bias,z.shadowNormalBias=X.normalBias,z.shadowRadius=X.radius,z.shadowMapSize=X.mapSize,n.directionalShadow[f]=z,n.directionalShadowMap[f]=j,n.directionalShadowMatrix[f]=A.shadow.matrix,y++}n.directional[f]=G,f++}else if(A.isSpotLight){const G=e.get(A);G.position.setFromMatrixPosition(A.matrixWorld),G.color.copy(F).multiplyScalar(B),G.distance=k,G.coneCos=Math.cos(A.angle),G.penumbraCos=Math.cos(A.angle*(1-A.penumbra)),G.decay=A.decay,n.spot[b]=G;const X=A.shadow;if(A.map&&(n.spotLightMap[w]=A.map,w++,X.updateMatrices(A),A.castShadow&&T++),n.spotLightMatrix[b]=X.matrix,A.castShadow){const z=t.get(A);z.shadowIntensity=X.intensity,z.shadowBias=X.bias,z.shadowNormalBias=X.normalBias,z.shadowRadius=X.radius,z.shadowMapSize=X.mapSize,n.spotShadow[b]=z,n.spotShadowMap[b]=j,_++}b++}else if(A.isRectAreaLight){const G=e.get(A);G.color.copy(F).multiplyScalar(B),G.halfWidth.set(A.width*.5,0,0),G.halfHeight.set(0,A.height*.5,0),n.rectArea[m]=G,m++}else if(A.isPointLight){const G=e.get(A);if(G.color.copy(A.color).multiplyScalar(A.intensity),G.distance=A.distance,G.decay=A.decay,A.castShadow){const X=A.shadow,z=t.get(A);z.shadowIntensity=X.intensity,z.shadowBias=X.bias,z.shadowNormalBias=X.normalBias,z.shadowRadius=X.radius,z.shadowMapSize=X.mapSize,z.shadowCameraNear=X.camera.near,z.shadowCameraFar=X.camera.far,n.pointShadow[g]=z,n.pointShadowMap[g]=j,n.pointShadowMatrix[g]=A.shadow.matrix,v++}n.point[g]=G,g++}else if(A.isHemisphereLight){const G=e.get(A);G.skyColor.copy(A.color).multiplyScalar(B),G.groundColor.copy(A.groundColor).multiplyScalar(B),n.hemi[p]=G,p++}}m>0&&(s.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=ce.LTC_FLOAT_1,n.rectAreaLTC2=ce.LTC_FLOAT_2):(n.rectAreaLTC1=ce.LTC_HALF_1,n.rectAreaLTC2=ce.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=d;const C=n.hash;(C.directionalLength!==f||C.pointLength!==g||C.spotLength!==b||C.rectAreaLength!==m||C.hemiLength!==p||C.numDirectionalShadows!==y||C.numPointShadows!==v||C.numSpotShadows!==_||C.numSpotMaps!==w||C.numLightProbes!==M)&&(n.directional.length=f,n.spot.length=b,n.rectArea.length=m,n.point.length=g,n.hemi.length=p,n.directionalShadow.length=y,n.directionalShadowMap.length=y,n.pointShadow.length=v,n.pointShadowMap.length=v,n.spotShadow.length=_,n.spotShadowMap.length=_,n.directionalShadowMatrix.length=y,n.pointShadowMatrix.length=v,n.spotLightMatrix.length=_+w-T,n.spotLightMap.length=w,n.numSpotLightShadowsWithMaps=T,n.numLightProbes=M,C.directionalLength=f,C.pointLength=g,C.spotLength=b,C.rectAreaLength=m,C.hemiLength=p,C.numDirectionalShadows=y,C.numPointShadows=v,C.numSpotShadows=_,C.numSpotMaps=w,C.numLightProbes=M,n.version=Gb++)}function c(l,h){let u=0,d=0,f=0,g=0,b=0;const m=h.matrixWorldInverse;for(let p=0,y=l.length;p<y;p++){const v=l[p];if(v.isDirectionalLight){const _=n.directional[u];_.direction.setFromMatrixPosition(v.matrixWorld),i.setFromMatrixPosition(v.target.matrixWorld),_.direction.sub(i),_.direction.transformDirection(m),u++}else if(v.isSpotLight){const _=n.spot[f];_.position.setFromMatrixPosition(v.matrixWorld),_.position.applyMatrix4(m),_.direction.setFromMatrixPosition(v.matrixWorld),i.setFromMatrixPosition(v.target.matrixWorld),_.direction.sub(i),_.direction.transformDirection(m),f++}else if(v.isRectAreaLight){const _=n.rectArea[g];_.position.setFromMatrixPosition(v.matrixWorld),_.position.applyMatrix4(m),a.identity(),r.copy(v.matrixWorld),r.premultiply(m),a.extractRotation(r),_.halfWidth.set(v.width*.5,0,0),_.halfHeight.set(0,v.height*.5,0),_.halfWidth.applyMatrix4(a),_.halfHeight.applyMatrix4(a),g++}else if(v.isPointLight){const _=n.point[d];_.position.setFromMatrixPosition(v.matrixWorld),_.position.applyMatrix4(m),d++}else if(v.isHemisphereLight){const _=n.hemi[b];_.direction.setFromMatrixPosition(v.matrixWorld),_.direction.transformDirection(m),b++}}}return{setup:o,setupView:c,state:n}}function Ah(s){const e=new Wb(s),t=[],n=[];function i(h){l.camera=h,t.length=0,n.length=0}function r(h){t.push(h)}function a(h){n.push(h)}function o(){e.setup(t)}function c(h){e.setupView(t,h)}const l={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:i,state:l,setupLights:o,setupLightsView:c,pushLight:r,pushShadow:a}}function Xb(s){let e=new WeakMap;function t(i,r=0){const a=e.get(i);let o;return a===void 0?(o=new Ah(s),e.set(i,[o])):r>=a.length?(o=new Ah(s),a.push(o)):o=a[r],o}function n(){e=new WeakMap}return{get:t,dispose:n}}class qb extends Rn{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Ef,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class jb extends Rn{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const Yb=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Kb=`uniform sampler2D shadow_pass;
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
}`;function $b(s,e,t){let n=new nl;const i=new oe,r=new oe,a=new Ze,o=new qb({depthPacking:Tf}),c=new jb,l={},h=t.maxTextureSize,u={[Zn]:Jt,[Jt]:Zn,[tn]:tn},d=new yn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new oe},radius:{value:4}},vertexShader:Yb,fragmentShader:Kb}),f=d.clone();f.defines.HORIZONTAL_PASS=1;const g=new bt;g.setAttribute("position",new Et(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const b=new $e(g,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Tu;let p=this.type;this.render=function(T,M,C){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||T.length===0)return;const D=s.getRenderTarget(),x=s.getActiveCubeFace(),A=s.getActiveMipmapLevel(),F=s.state;F.setBlending(mi),F.buffers.color.setClear(1,1,1,1),F.buffers.depth.setTest(!0),F.setScissorTest(!1);const B=p!==Yn&&this.type===Yn,k=p===Yn&&this.type!==Yn;for(let j=0,G=T.length;j<G;j++){const X=T[j],z=X.shadow;if(z===void 0){console.warn("THREE.WebGLShadowMap:",X,"has no shadow.");continue}if(z.autoUpdate===!1&&z.needsUpdate===!1)continue;i.copy(z.mapSize);const te=z.getFrameExtents();if(i.multiply(te),r.copy(z.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(r.x=Math.floor(h/te.x),i.x=r.x*te.x,z.mapSize.x=r.x),i.y>h&&(r.y=Math.floor(h/te.y),i.y=r.y*te.y,z.mapSize.y=r.y)),z.map===null||B===!0||k===!0){const re=this.type!==Yn?{minFilter:Vt,magFilter:Vt}:{};z.map!==null&&z.map.dispose(),z.map=new Ni(i.x,i.y,re),z.map.texture.name=X.name+".shadowMap",z.camera.updateProjectionMatrix()}s.setRenderTarget(z.map),s.clear();const ne=z.getViewportCount();for(let re=0;re<ne;re++){const Ee=z.getViewport(re);a.set(r.x*Ee.x,r.y*Ee.y,r.x*Ee.z,r.y*Ee.w),F.viewport(a),z.updateMatrices(X,re),n=z.getFrustum(),_(M,C,z.camera,X,this.type)}z.isPointLightShadow!==!0&&this.type===Yn&&y(z,C),z.needsUpdate=!1}p=this.type,m.needsUpdate=!1,s.setRenderTarget(D,x,A)};function y(T,M){const C=e.update(b);d.defines.VSM_SAMPLES!==T.blurSamples&&(d.defines.VSM_SAMPLES=T.blurSamples,f.defines.VSM_SAMPLES=T.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),T.mapPass===null&&(T.mapPass=new Ni(i.x,i.y)),d.uniforms.shadow_pass.value=T.map.texture,d.uniforms.resolution.value=T.mapSize,d.uniforms.radius.value=T.radius,s.setRenderTarget(T.mapPass),s.clear(),s.renderBufferDirect(M,null,C,d,b,null),f.uniforms.shadow_pass.value=T.mapPass.texture,f.uniforms.resolution.value=T.mapSize,f.uniforms.radius.value=T.radius,s.setRenderTarget(T.map),s.clear(),s.renderBufferDirect(M,null,C,f,b,null)}function v(T,M,C,D){let x=null;const A=C.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(A!==void 0)x=A;else if(x=C.isPointLight===!0?c:o,s.localClippingEnabled&&M.clipShadows===!0&&Array.isArray(M.clippingPlanes)&&M.clippingPlanes.length!==0||M.displacementMap&&M.displacementScale!==0||M.alphaMap&&M.alphaTest>0||M.map&&M.alphaTest>0){const F=x.uuid,B=M.uuid;let k=l[F];k===void 0&&(k={},l[F]=k);let j=k[B];j===void 0&&(j=x.clone(),k[B]=j,M.addEventListener("dispose",w)),x=j}if(x.visible=M.visible,x.wireframe=M.wireframe,D===Yn?x.side=M.shadowSide!==null?M.shadowSide:M.side:x.side=M.shadowSide!==null?M.shadowSide:u[M.side],x.alphaMap=M.alphaMap,x.alphaTest=M.alphaTest,x.map=M.map,x.clipShadows=M.clipShadows,x.clippingPlanes=M.clippingPlanes,x.clipIntersection=M.clipIntersection,x.displacementMap=M.displacementMap,x.displacementScale=M.displacementScale,x.displacementBias=M.displacementBias,x.wireframeLinewidth=M.wireframeLinewidth,x.linewidth=M.linewidth,C.isPointLight===!0&&x.isMeshDistanceMaterial===!0){const F=s.properties.get(x);F.light=C}return x}function _(T,M,C,D,x){if(T.visible===!1)return;if(T.layers.test(M.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&x===Yn)&&(!T.frustumCulled||n.intersectsObject(T))){T.modelViewMatrix.multiplyMatrices(C.matrixWorldInverse,T.matrixWorld);const B=e.update(T),k=T.material;if(Array.isArray(k)){const j=B.groups;for(let G=0,X=j.length;G<X;G++){const z=j[G],te=k[z.materialIndex];if(te&&te.visible){const ne=v(T,te,D,x);T.onBeforeShadow(s,T,M,C,B,ne,z),s.renderBufferDirect(C,null,B,ne,T,z),T.onAfterShadow(s,T,M,C,B,ne,z)}}}else if(k.visible){const j=v(T,k,D,x);T.onBeforeShadow(s,T,M,C,B,j,null),s.renderBufferDirect(C,null,B,j,T,null),T.onAfterShadow(s,T,M,C,B,j,null)}}const F=T.children;for(let B=0,k=F.length;B<k;B++)_(F[B],M,C,D,x)}function w(T){T.target.removeEventListener("dispose",w);for(const C in l){const D=l[C],x=T.target.uuid;x in D&&(D[x].dispose(),delete D[x])}}}const Jb={[$o]:Jo,[Qo]:tc,[Zo]:nc,[ps]:ec,[Jo]:$o,[tc]:Qo,[nc]:Zo,[ec]:ps};function Qb(s){function e(){let I=!1;const de=new Ze;let q=null;const J=new Ze(0,0,0,0);return{setMask:function(he){q!==he&&!I&&(s.colorMask(he,he,he,he),q=he)},setLocked:function(he){I=he},setClear:function(he,fe,je,Mt,Qt){Qt===!0&&(he*=Mt,fe*=Mt,je*=Mt),de.set(he,fe,je,Mt),J.equals(de)===!1&&(s.clearColor(he,fe,je,Mt),J.copy(de))},reset:function(){I=!1,q=null,J.set(-1,0,0,0)}}}function t(){let I=!1,de=!1,q=null,J=null,he=null;return{setReversed:function(fe){de=fe},setTest:function(fe){fe?ee(s.DEPTH_TEST):ae(s.DEPTH_TEST)},setMask:function(fe){q!==fe&&!I&&(s.depthMask(fe),q=fe)},setFunc:function(fe){if(de&&(fe=Jb[fe]),J!==fe){switch(fe){case $o:s.depthFunc(s.NEVER);break;case Jo:s.depthFunc(s.ALWAYS);break;case Qo:s.depthFunc(s.LESS);break;case ps:s.depthFunc(s.LEQUAL);break;case Zo:s.depthFunc(s.EQUAL);break;case ec:s.depthFunc(s.GEQUAL);break;case tc:s.depthFunc(s.GREATER);break;case nc:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}J=fe}},setLocked:function(fe){I=fe},setClear:function(fe){he!==fe&&(s.clearDepth(fe),he=fe)},reset:function(){I=!1,q=null,J=null,he=null}}}function n(){let I=!1,de=null,q=null,J=null,he=null,fe=null,je=null,Mt=null,Qt=null;return{setTest:function(Qe){I||(Qe?ee(s.STENCIL_TEST):ae(s.STENCIL_TEST))},setMask:function(Qe){de!==Qe&&!I&&(s.stencilMask(Qe),de=Qe)},setFunc:function(Qe,Zt,Bn){(q!==Qe||J!==Zt||he!==Bn)&&(s.stencilFunc(Qe,Zt,Bn),q=Qe,J=Zt,he=Bn)},setOp:function(Qe,Zt,Bn){(fe!==Qe||je!==Zt||Mt!==Bn)&&(s.stencilOp(Qe,Zt,Bn),fe=Qe,je=Zt,Mt=Bn)},setLocked:function(Qe){I=Qe},setClear:function(Qe){Qt!==Qe&&(s.clearStencil(Qe),Qt=Qe)},reset:function(){I=!1,de=null,q=null,J=null,he=null,fe=null,je=null,Mt=null,Qt=null}}}const i=new e,r=new t,a=new n,o=new WeakMap,c=new WeakMap;let l={},h={},u=new WeakMap,d=[],f=null,g=!1,b=null,m=null,p=null,y=null,v=null,_=null,w=null,T=new Ae(0,0,0),M=0,C=!1,D=null,x=null,A=null,F=null,B=null;const k=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let j=!1,G=0;const X=s.getParameter(s.VERSION);X.indexOf("WebGL")!==-1?(G=parseFloat(/^WebGL (\d)/.exec(X)[1]),j=G>=1):X.indexOf("OpenGL ES")!==-1&&(G=parseFloat(/^OpenGL ES (\d)/.exec(X)[1]),j=G>=2);let z=null,te={};const ne=s.getParameter(s.SCISSOR_BOX),re=s.getParameter(s.VIEWPORT),Ee=new Ze().fromArray(ne),we=new Ze().fromArray(re);function O(I,de,q,J){const he=new Uint8Array(4),fe=s.createTexture();s.bindTexture(I,fe),s.texParameteri(I,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(I,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let je=0;je<q;je++)I===s.TEXTURE_3D||I===s.TEXTURE_2D_ARRAY?s.texImage3D(de,0,s.RGBA,1,1,J,0,s.RGBA,s.UNSIGNED_BYTE,he):s.texImage2D(de+je,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,he);return fe}const $={};$[s.TEXTURE_2D]=O(s.TEXTURE_2D,s.TEXTURE_2D,1),$[s.TEXTURE_CUBE_MAP]=O(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),$[s.TEXTURE_2D_ARRAY]=O(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),$[s.TEXTURE_3D]=O(s.TEXTURE_3D,s.TEXTURE_3D,1,1),i.setClear(0,0,0,1),r.setClear(1),a.setClear(0),ee(s.DEPTH_TEST),r.setFunc(ps),Ge(!1),Ye(Ll),ee(s.CULL_FACE),L(mi);function ee(I){l[I]!==!0&&(s.enable(I),l[I]=!0)}function ae(I){l[I]!==!1&&(s.disable(I),l[I]=!1)}function Te(I,de){return h[I]!==de?(s.bindFramebuffer(I,de),h[I]=de,I===s.DRAW_FRAMEBUFFER&&(h[s.FRAMEBUFFER]=de),I===s.FRAMEBUFFER&&(h[s.DRAW_FRAMEBUFFER]=de),!0):!1}function ve(I,de){let q=d,J=!1;if(I){q=u.get(de),q===void 0&&(q=[],u.set(de,q));const he=I.textures;if(q.length!==he.length||q[0]!==s.COLOR_ATTACHMENT0){for(let fe=0,je=he.length;fe<je;fe++)q[fe]=s.COLOR_ATTACHMENT0+fe;q.length=he.length,J=!0}}else q[0]!==s.BACK&&(q[0]=s.BACK,J=!0);J&&s.drawBuffers(q)}function Be(I){return f!==I?(s.useProgram(I),f=I,!0):!1}const rt={[Pi]:s.FUNC_ADD,[$d]:s.FUNC_SUBTRACT,[Jd]:s.FUNC_REVERSE_SUBTRACT};rt[Qd]=s.MIN,rt[Zd]=s.MAX;const qe={[ef]:s.ZERO,[tf]:s.ONE,[nf]:s.SRC_COLOR,[Yo]:s.SRC_ALPHA,[lf]:s.SRC_ALPHA_SATURATE,[of]:s.DST_COLOR,[rf]:s.DST_ALPHA,[sf]:s.ONE_MINUS_SRC_COLOR,[Ko]:s.ONE_MINUS_SRC_ALPHA,[cf]:s.ONE_MINUS_DST_COLOR,[af]:s.ONE_MINUS_DST_ALPHA,[hf]:s.CONSTANT_COLOR,[uf]:s.ONE_MINUS_CONSTANT_COLOR,[df]:s.CONSTANT_ALPHA,[ff]:s.ONE_MINUS_CONSTANT_ALPHA};function L(I,de,q,J,he,fe,je,Mt,Qt,Qe){if(I===mi){g===!0&&(ae(s.BLEND),g=!1);return}if(g===!1&&(ee(s.BLEND),g=!0),I!==Kd){if(I!==b||Qe!==C){if((m!==Pi||v!==Pi)&&(s.blendEquation(s.FUNC_ADD),m=Pi,v=Pi),Qe)switch(I){case ls:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case ir:s.blendFunc(s.ONE,s.ONE);break;case Il:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Dl:s.blendFuncSeparate(s.ZERO,s.SRC_COLOR,s.ZERO,s.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}else switch(I){case ls:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case ir:s.blendFunc(s.SRC_ALPHA,s.ONE);break;case Il:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Dl:s.blendFunc(s.ZERO,s.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}p=null,y=null,_=null,w=null,T.set(0,0,0),M=0,b=I,C=Qe}return}he=he||de,fe=fe||q,je=je||J,(de!==m||he!==v)&&(s.blendEquationSeparate(rt[de],rt[he]),m=de,v=he),(q!==p||J!==y||fe!==_||je!==w)&&(s.blendFuncSeparate(qe[q],qe[J],qe[fe],qe[je]),p=q,y=J,_=fe,w=je),(Mt.equals(T)===!1||Qt!==M)&&(s.blendColor(Mt.r,Mt.g,Mt.b,Qt),T.copy(Mt),M=Qt),b=I,C=!1}function sn(I,de){I.side===tn?ae(s.CULL_FACE):ee(s.CULL_FACE);let q=I.side===Jt;de&&(q=!q),Ge(q),I.blending===ls&&I.transparent===!1?L(mi):L(I.blending,I.blendEquation,I.blendSrc,I.blendDst,I.blendEquationAlpha,I.blendSrcAlpha,I.blendDstAlpha,I.blendColor,I.blendAlpha,I.premultipliedAlpha),r.setFunc(I.depthFunc),r.setTest(I.depthTest),r.setMask(I.depthWrite),i.setMask(I.colorWrite);const J=I.stencilWrite;a.setTest(J),J&&(a.setMask(I.stencilWriteMask),a.setFunc(I.stencilFunc,I.stencilRef,I.stencilFuncMask),a.setOp(I.stencilFail,I.stencilZFail,I.stencilZPass)),ct(I.polygonOffset,I.polygonOffsetFactor,I.polygonOffsetUnits),I.alphaToCoverage===!0?ee(s.SAMPLE_ALPHA_TO_COVERAGE):ae(s.SAMPLE_ALPHA_TO_COVERAGE)}function Ge(I){D!==I&&(I?s.frontFace(s.CW):s.frontFace(s.CCW),D=I)}function Ye(I){I!==qd?(ee(s.CULL_FACE),I!==x&&(I===Ll?s.cullFace(s.BACK):I===jd?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):ae(s.CULL_FACE),x=I}function Le(I){I!==A&&(j&&s.lineWidth(I),A=I)}function ct(I,de,q){I?(ee(s.POLYGON_OFFSET_FILL),(F!==de||B!==q)&&(s.polygonOffset(de,q),F=de,B=q)):ae(s.POLYGON_OFFSET_FILL)}function Ne(I){I?ee(s.SCISSOR_TEST):ae(s.SCISSOR_TEST)}function P(I){I===void 0&&(I=s.TEXTURE0+k-1),z!==I&&(s.activeTexture(I),z=I)}function S(I,de,q){q===void 0&&(z===null?q=s.TEXTURE0+k-1:q=z);let J=te[q];J===void 0&&(J={type:void 0,texture:void 0},te[q]=J),(J.type!==I||J.texture!==de)&&(z!==q&&(s.activeTexture(q),z=q),s.bindTexture(I,de||$[I]),J.type=I,J.texture=de)}function H(){const I=te[z];I!==void 0&&I.type!==void 0&&(s.bindTexture(I.type,null),I.type=void 0,I.texture=void 0)}function K(){try{s.compressedTexImage2D.apply(s,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Z(){try{s.compressedTexImage3D.apply(s,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Y(){try{s.texSubImage2D.apply(s,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function ye(){try{s.texSubImage3D.apply(s,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function le(){try{s.compressedTexSubImage2D.apply(s,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function pe(){try{s.compressedTexSubImage3D.apply(s,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Ke(){try{s.texStorage2D.apply(s,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function ie(){try{s.texStorage3D.apply(s,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function me(){try{s.texImage2D.apply(s,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Ie(){try{s.texImage3D.apply(s,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function De(I){Ee.equals(I)===!1&&(s.scissor(I.x,I.y,I.z,I.w),Ee.copy(I))}function ge(I){we.equals(I)===!1&&(s.viewport(I.x,I.y,I.z,I.w),we.copy(I))}function Ve(I,de){let q=c.get(de);q===void 0&&(q=new WeakMap,c.set(de,q));let J=q.get(I);J===void 0&&(J=s.getUniformBlockIndex(de,I.name),q.set(I,J))}function Ue(I,de){const J=c.get(de).get(I);o.get(de)!==J&&(s.uniformBlockBinding(de,J,I.__bindingPointIndex),o.set(de,J))}function ot(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),l={},z=null,te={},h={},u=new WeakMap,d=[],f=null,g=!1,b=null,m=null,p=null,y=null,v=null,_=null,w=null,T=new Ae(0,0,0),M=0,C=!1,D=null,x=null,A=null,F=null,B=null,Ee.set(0,0,s.canvas.width,s.canvas.height),we.set(0,0,s.canvas.width,s.canvas.height),i.reset(),r.reset(),a.reset()}return{buffers:{color:i,depth:r,stencil:a},enable:ee,disable:ae,bindFramebuffer:Te,drawBuffers:ve,useProgram:Be,setBlending:L,setMaterial:sn,setFlipSided:Ge,setCullFace:Ye,setLineWidth:Le,setPolygonOffset:ct,setScissorTest:Ne,activeTexture:P,bindTexture:S,unbindTexture:H,compressedTexImage2D:K,compressedTexImage3D:Z,texImage2D:me,texImage3D:Ie,updateUBOMapping:Ve,uniformBlockBinding:Ue,texStorage2D:Ke,texStorage3D:ie,texSubImage2D:Y,texSubImage3D:ye,compressedTexSubImage2D:le,compressedTexSubImage3D:pe,scissor:De,viewport:ge,reset:ot}}function Eh(s,e,t,n){const i=Zb(n);switch(t){case Nu:return s*e;case Fu:return s*e;case Ou:return s*e*2;case $c:return s*e/i.components*i.byteLength;case Jc:return s*e/i.components*i.byteLength;case ku:return s*e*2/i.components*i.byteLength;case Qc:return s*e*2/i.components*i.byteLength;case Uu:return s*e*3/i.components*i.byteLength;case fn:return s*e*4/i.components*i.byteLength;case Zc:return s*e*4/i.components*i.byteLength;case ga:case ba:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case va:case xa:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case ac:case cc:return Math.max(s,16)*Math.max(e,8)/4;case rc:case oc:return Math.max(s,8)*Math.max(e,8)/2;case lc:case hc:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case uc:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case dc:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case fc:return Math.floor((s+4)/5)*Math.floor((e+3)/4)*16;case pc:return Math.floor((s+4)/5)*Math.floor((e+4)/5)*16;case mc:return Math.floor((s+5)/6)*Math.floor((e+4)/5)*16;case gc:return Math.floor((s+5)/6)*Math.floor((e+5)/6)*16;case bc:return Math.floor((s+7)/8)*Math.floor((e+4)/5)*16;case vc:return Math.floor((s+7)/8)*Math.floor((e+5)/6)*16;case xc:return Math.floor((s+7)/8)*Math.floor((e+7)/8)*16;case _c:return Math.floor((s+9)/10)*Math.floor((e+4)/5)*16;case yc:return Math.floor((s+9)/10)*Math.floor((e+5)/6)*16;case Mc:return Math.floor((s+9)/10)*Math.floor((e+7)/8)*16;case Sc:return Math.floor((s+9)/10)*Math.floor((e+9)/10)*16;case wc:return Math.floor((s+11)/12)*Math.floor((e+9)/10)*16;case Ac:return Math.floor((s+11)/12)*Math.floor((e+11)/12)*16;case _a:case Ec:case Tc:return Math.ceil(s/4)*Math.ceil(e/4)*16;case Bu:case Rc:return Math.ceil(s/4)*Math.ceil(e/4)*8;case Cc:case Pc:return Math.ceil(s/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Zb(s){switch(s){case ei:case Lu:return{byteLength:1,components:1};case ur:case Iu:case yr:return{byteLength:2,components:1};case Yc:case Kc:return{byteLength:2,components:4};case Di:case jc:case vn:return{byteLength:4,components:1};case Du:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}function ev(s,e,t,n,i,r,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new oe,h=new WeakMap;let u;const d=new WeakMap;let f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(P,S){return f?new OffscreenCanvas(P,S):pr("canvas")}function b(P,S,H){let K=1;const Z=Ne(P);if((Z.width>H||Z.height>H)&&(K=H/Math.max(Z.width,Z.height)),K<1)if(typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&P instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&P instanceof ImageBitmap||typeof VideoFrame<"u"&&P instanceof VideoFrame){const Y=Math.floor(K*Z.width),ye=Math.floor(K*Z.height);u===void 0&&(u=g(Y,ye));const le=S?g(Y,ye):u;return le.width=Y,le.height=ye,le.getContext("2d").drawImage(P,0,0,Y,ye),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+Z.width+"x"+Z.height+") to ("+Y+"x"+ye+")."),le}else return"data"in P&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+Z.width+"x"+Z.height+")."),P;return P}function m(P){return P.generateMipmaps&&P.minFilter!==Vt&&P.minFilter!==un}function p(P){s.generateMipmap(P)}function y(P,S,H,K,Z=!1){if(P!==null){if(s[P]!==void 0)return s[P];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+P+"'")}let Y=S;if(S===s.RED&&(H===s.FLOAT&&(Y=s.R32F),H===s.HALF_FLOAT&&(Y=s.R16F),H===s.UNSIGNED_BYTE&&(Y=s.R8)),S===s.RED_INTEGER&&(H===s.UNSIGNED_BYTE&&(Y=s.R8UI),H===s.UNSIGNED_SHORT&&(Y=s.R16UI),H===s.UNSIGNED_INT&&(Y=s.R32UI),H===s.BYTE&&(Y=s.R8I),H===s.SHORT&&(Y=s.R16I),H===s.INT&&(Y=s.R32I)),S===s.RG&&(H===s.FLOAT&&(Y=s.RG32F),H===s.HALF_FLOAT&&(Y=s.RG16F),H===s.UNSIGNED_BYTE&&(Y=s.RG8)),S===s.RG_INTEGER&&(H===s.UNSIGNED_BYTE&&(Y=s.RG8UI),H===s.UNSIGNED_SHORT&&(Y=s.RG16UI),H===s.UNSIGNED_INT&&(Y=s.RG32UI),H===s.BYTE&&(Y=s.RG8I),H===s.SHORT&&(Y=s.RG16I),H===s.INT&&(Y=s.RG32I)),S===s.RGB_INTEGER&&(H===s.UNSIGNED_BYTE&&(Y=s.RGB8UI),H===s.UNSIGNED_SHORT&&(Y=s.RGB16UI),H===s.UNSIGNED_INT&&(Y=s.RGB32UI),H===s.BYTE&&(Y=s.RGB8I),H===s.SHORT&&(Y=s.RGB16I),H===s.INT&&(Y=s.RGB32I)),S===s.RGBA_INTEGER&&(H===s.UNSIGNED_BYTE&&(Y=s.RGBA8UI),H===s.UNSIGNED_SHORT&&(Y=s.RGBA16UI),H===s.UNSIGNED_INT&&(Y=s.RGBA32UI),H===s.BYTE&&(Y=s.RGBA8I),H===s.SHORT&&(Y=s.RGBA16I),H===s.INT&&(Y=s.RGBA32I)),S===s.RGB&&H===s.UNSIGNED_INT_5_9_9_9_REV&&(Y=s.RGB9_E5),S===s.RGBA){const ye=Z?Ea:Je.getTransfer(K);H===s.FLOAT&&(Y=s.RGBA32F),H===s.HALF_FLOAT&&(Y=s.RGBA16F),H===s.UNSIGNED_BYTE&&(Y=ye===ht?s.SRGB8_ALPHA8:s.RGBA8),H===s.UNSIGNED_SHORT_4_4_4_4&&(Y=s.RGBA4),H===s.UNSIGNED_SHORT_5_5_5_1&&(Y=s.RGB5_A1)}return(Y===s.R16F||Y===s.R32F||Y===s.RG16F||Y===s.RG32F||Y===s.RGBA16F||Y===s.RGBA32F)&&e.get("EXT_color_buffer_float"),Y}function v(P,S){let H;return P?S===null||S===Di||S===vs?H=s.DEPTH24_STENCIL8:S===vn?H=s.DEPTH32F_STENCIL8:S===ur&&(H=s.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):S===null||S===Di||S===vs?H=s.DEPTH_COMPONENT24:S===vn?H=s.DEPTH_COMPONENT32F:S===ur&&(H=s.DEPTH_COMPONENT16),H}function _(P,S){return m(P)===!0||P.isFramebufferTexture&&P.minFilter!==Vt&&P.minFilter!==un?Math.log2(Math.max(S.width,S.height))+1:P.mipmaps!==void 0&&P.mipmaps.length>0?P.mipmaps.length:P.isCompressedTexture&&Array.isArray(P.image)?S.mipmaps.length:1}function w(P){const S=P.target;S.removeEventListener("dispose",w),M(S),S.isVideoTexture&&h.delete(S)}function T(P){const S=P.target;S.removeEventListener("dispose",T),D(S)}function M(P){const S=n.get(P);if(S.__webglInit===void 0)return;const H=P.source,K=d.get(H);if(K){const Z=K[S.__cacheKey];Z.usedTimes--,Z.usedTimes===0&&C(P),Object.keys(K).length===0&&d.delete(H)}n.remove(P)}function C(P){const S=n.get(P);s.deleteTexture(S.__webglTexture);const H=P.source,K=d.get(H);delete K[S.__cacheKey],a.memory.textures--}function D(P){const S=n.get(P);if(P.depthTexture&&P.depthTexture.dispose(),P.isWebGLCubeRenderTarget)for(let K=0;K<6;K++){if(Array.isArray(S.__webglFramebuffer[K]))for(let Z=0;Z<S.__webglFramebuffer[K].length;Z++)s.deleteFramebuffer(S.__webglFramebuffer[K][Z]);else s.deleteFramebuffer(S.__webglFramebuffer[K]);S.__webglDepthbuffer&&s.deleteRenderbuffer(S.__webglDepthbuffer[K])}else{if(Array.isArray(S.__webglFramebuffer))for(let K=0;K<S.__webglFramebuffer.length;K++)s.deleteFramebuffer(S.__webglFramebuffer[K]);else s.deleteFramebuffer(S.__webglFramebuffer);if(S.__webglDepthbuffer&&s.deleteRenderbuffer(S.__webglDepthbuffer),S.__webglMultisampledFramebuffer&&s.deleteFramebuffer(S.__webglMultisampledFramebuffer),S.__webglColorRenderbuffer)for(let K=0;K<S.__webglColorRenderbuffer.length;K++)S.__webglColorRenderbuffer[K]&&s.deleteRenderbuffer(S.__webglColorRenderbuffer[K]);S.__webglDepthRenderbuffer&&s.deleteRenderbuffer(S.__webglDepthRenderbuffer)}const H=P.textures;for(let K=0,Z=H.length;K<Z;K++){const Y=n.get(H[K]);Y.__webglTexture&&(s.deleteTexture(Y.__webglTexture),a.memory.textures--),n.remove(H[K])}n.remove(P)}let x=0;function A(){x=0}function F(){const P=x;return P>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+P+" texture units while this GPU supports only "+i.maxTextures),x+=1,P}function B(P){const S=[];return S.push(P.wrapS),S.push(P.wrapT),S.push(P.wrapR||0),S.push(P.magFilter),S.push(P.minFilter),S.push(P.anisotropy),S.push(P.internalFormat),S.push(P.format),S.push(P.type),S.push(P.generateMipmaps),S.push(P.premultiplyAlpha),S.push(P.flipY),S.push(P.unpackAlignment),S.push(P.colorSpace),S.join()}function k(P,S){const H=n.get(P);if(P.isVideoTexture&&Le(P),P.isRenderTargetTexture===!1&&P.version>0&&H.__version!==P.version){const K=P.image;if(K===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(K.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{we(H,P,S);return}}t.bindTexture(s.TEXTURE_2D,H.__webglTexture,s.TEXTURE0+S)}function j(P,S){const H=n.get(P);if(P.version>0&&H.__version!==P.version){we(H,P,S);return}t.bindTexture(s.TEXTURE_2D_ARRAY,H.__webglTexture,s.TEXTURE0+S)}function G(P,S){const H=n.get(P);if(P.version>0&&H.__version!==P.version){we(H,P,S);return}t.bindTexture(s.TEXTURE_3D,H.__webglTexture,s.TEXTURE0+S)}function X(P,S){const H=n.get(P);if(P.version>0&&H.__version!==P.version){O(H,P,S);return}t.bindTexture(s.TEXTURE_CUBE_MAP,H.__webglTexture,s.TEXTURE0+S)}const z={[bs]:s.REPEAT,[ui]:s.CLAMP_TO_EDGE,[Aa]:s.MIRRORED_REPEAT},te={[Vt]:s.NEAREST,[Pu]:s.NEAREST_MIPMAP_NEAREST,[er]:s.NEAREST_MIPMAP_LINEAR,[un]:s.LINEAR,[ma]:s.LINEAR_MIPMAP_NEAREST,[In]:s.LINEAR_MIPMAP_LINEAR},ne={[Cf]:s.NEVER,[Uf]:s.ALWAYS,[Pf]:s.LESS,[Gu]:s.LEQUAL,[Lf]:s.EQUAL,[Nf]:s.GEQUAL,[If]:s.GREATER,[Df]:s.NOTEQUAL};function re(P,S){if(S.type===vn&&e.has("OES_texture_float_linear")===!1&&(S.magFilter===un||S.magFilter===ma||S.magFilter===er||S.magFilter===In||S.minFilter===un||S.minFilter===ma||S.minFilter===er||S.minFilter===In)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(P,s.TEXTURE_WRAP_S,z[S.wrapS]),s.texParameteri(P,s.TEXTURE_WRAP_T,z[S.wrapT]),(P===s.TEXTURE_3D||P===s.TEXTURE_2D_ARRAY)&&s.texParameteri(P,s.TEXTURE_WRAP_R,z[S.wrapR]),s.texParameteri(P,s.TEXTURE_MAG_FILTER,te[S.magFilter]),s.texParameteri(P,s.TEXTURE_MIN_FILTER,te[S.minFilter]),S.compareFunction&&(s.texParameteri(P,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(P,s.TEXTURE_COMPARE_FUNC,ne[S.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(S.magFilter===Vt||S.minFilter!==er&&S.minFilter!==In||S.type===vn&&e.has("OES_texture_float_linear")===!1)return;if(S.anisotropy>1||n.get(S).__currentAnisotropy){const H=e.get("EXT_texture_filter_anisotropic");s.texParameterf(P,H.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,i.getMaxAnisotropy())),n.get(S).__currentAnisotropy=S.anisotropy}}}function Ee(P,S){let H=!1;P.__webglInit===void 0&&(P.__webglInit=!0,S.addEventListener("dispose",w));const K=S.source;let Z=d.get(K);Z===void 0&&(Z={},d.set(K,Z));const Y=B(S);if(Y!==P.__cacheKey){Z[Y]===void 0&&(Z[Y]={texture:s.createTexture(),usedTimes:0},a.memory.textures++,H=!0),Z[Y].usedTimes++;const ye=Z[P.__cacheKey];ye!==void 0&&(Z[P.__cacheKey].usedTimes--,ye.usedTimes===0&&C(S)),P.__cacheKey=Y,P.__webglTexture=Z[Y].texture}return H}function we(P,S,H){let K=s.TEXTURE_2D;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&(K=s.TEXTURE_2D_ARRAY),S.isData3DTexture&&(K=s.TEXTURE_3D);const Z=Ee(P,S),Y=S.source;t.bindTexture(K,P.__webglTexture,s.TEXTURE0+H);const ye=n.get(Y);if(Y.version!==ye.__version||Z===!0){t.activeTexture(s.TEXTURE0+H);const le=Je.getPrimaries(Je.workingColorSpace),pe=S.colorSpace===hi?null:Je.getPrimaries(S.colorSpace),Ke=S.colorSpace===hi||le===pe?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,S.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,S.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ke);let ie=b(S.image,!1,i.maxTextureSize);ie=ct(S,ie);const me=r.convert(S.format,S.colorSpace),Ie=r.convert(S.type);let De=y(S.internalFormat,me,Ie,S.colorSpace,S.isVideoTexture);re(K,S);let ge;const Ve=S.mipmaps,Ue=S.isVideoTexture!==!0,ot=ye.__version===void 0||Z===!0,I=Y.dataReady,de=_(S,ie);if(S.isDepthTexture)De=v(S.format===xs,S.type),ot&&(Ue?t.texStorage2D(s.TEXTURE_2D,1,De,ie.width,ie.height):t.texImage2D(s.TEXTURE_2D,0,De,ie.width,ie.height,0,me,Ie,null));else if(S.isDataTexture)if(Ve.length>0){Ue&&ot&&t.texStorage2D(s.TEXTURE_2D,de,De,Ve[0].width,Ve[0].height);for(let q=0,J=Ve.length;q<J;q++)ge=Ve[q],Ue?I&&t.texSubImage2D(s.TEXTURE_2D,q,0,0,ge.width,ge.height,me,Ie,ge.data):t.texImage2D(s.TEXTURE_2D,q,De,ge.width,ge.height,0,me,Ie,ge.data);S.generateMipmaps=!1}else Ue?(ot&&t.texStorage2D(s.TEXTURE_2D,de,De,ie.width,ie.height),I&&t.texSubImage2D(s.TEXTURE_2D,0,0,0,ie.width,ie.height,me,Ie,ie.data)):t.texImage2D(s.TEXTURE_2D,0,De,ie.width,ie.height,0,me,Ie,ie.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){Ue&&ot&&t.texStorage3D(s.TEXTURE_2D_ARRAY,de,De,Ve[0].width,Ve[0].height,ie.depth);for(let q=0,J=Ve.length;q<J;q++)if(ge=Ve[q],S.format!==fn)if(me!==null)if(Ue){if(I)if(S.layerUpdates.size>0){const he=Eh(ge.width,ge.height,S.format,S.type);for(const fe of S.layerUpdates){const je=ge.data.subarray(fe*he/ge.data.BYTES_PER_ELEMENT,(fe+1)*he/ge.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,q,0,0,fe,ge.width,ge.height,1,me,je,0,0)}S.clearLayerUpdates()}else t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,q,0,0,0,ge.width,ge.height,ie.depth,me,ge.data,0,0)}else t.compressedTexImage3D(s.TEXTURE_2D_ARRAY,q,De,ge.width,ge.height,ie.depth,0,ge.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ue?I&&t.texSubImage3D(s.TEXTURE_2D_ARRAY,q,0,0,0,ge.width,ge.height,ie.depth,me,Ie,ge.data):t.texImage3D(s.TEXTURE_2D_ARRAY,q,De,ge.width,ge.height,ie.depth,0,me,Ie,ge.data)}else{Ue&&ot&&t.texStorage2D(s.TEXTURE_2D,de,De,Ve[0].width,Ve[0].height);for(let q=0,J=Ve.length;q<J;q++)ge=Ve[q],S.format!==fn?me!==null?Ue?I&&t.compressedTexSubImage2D(s.TEXTURE_2D,q,0,0,ge.width,ge.height,me,ge.data):t.compressedTexImage2D(s.TEXTURE_2D,q,De,ge.width,ge.height,0,ge.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ue?I&&t.texSubImage2D(s.TEXTURE_2D,q,0,0,ge.width,ge.height,me,Ie,ge.data):t.texImage2D(s.TEXTURE_2D,q,De,ge.width,ge.height,0,me,Ie,ge.data)}else if(S.isDataArrayTexture)if(Ue){if(ot&&t.texStorage3D(s.TEXTURE_2D_ARRAY,de,De,ie.width,ie.height,ie.depth),I)if(S.layerUpdates.size>0){const q=Eh(ie.width,ie.height,S.format,S.type);for(const J of S.layerUpdates){const he=ie.data.subarray(J*q/ie.data.BYTES_PER_ELEMENT,(J+1)*q/ie.data.BYTES_PER_ELEMENT);t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,J,ie.width,ie.height,1,me,Ie,he)}S.clearLayerUpdates()}else t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,ie.width,ie.height,ie.depth,me,Ie,ie.data)}else t.texImage3D(s.TEXTURE_2D_ARRAY,0,De,ie.width,ie.height,ie.depth,0,me,Ie,ie.data);else if(S.isData3DTexture)Ue?(ot&&t.texStorage3D(s.TEXTURE_3D,de,De,ie.width,ie.height,ie.depth),I&&t.texSubImage3D(s.TEXTURE_3D,0,0,0,0,ie.width,ie.height,ie.depth,me,Ie,ie.data)):t.texImage3D(s.TEXTURE_3D,0,De,ie.width,ie.height,ie.depth,0,me,Ie,ie.data);else if(S.isFramebufferTexture){if(ot)if(Ue)t.texStorage2D(s.TEXTURE_2D,de,De,ie.width,ie.height);else{let q=ie.width,J=ie.height;for(let he=0;he<de;he++)t.texImage2D(s.TEXTURE_2D,he,De,q,J,0,me,Ie,null),q>>=1,J>>=1}}else if(Ve.length>0){if(Ue&&ot){const q=Ne(Ve[0]);t.texStorage2D(s.TEXTURE_2D,de,De,q.width,q.height)}for(let q=0,J=Ve.length;q<J;q++)ge=Ve[q],Ue?I&&t.texSubImage2D(s.TEXTURE_2D,q,0,0,me,Ie,ge):t.texImage2D(s.TEXTURE_2D,q,De,me,Ie,ge);S.generateMipmaps=!1}else if(Ue){if(ot){const q=Ne(ie);t.texStorage2D(s.TEXTURE_2D,de,De,q.width,q.height)}I&&t.texSubImage2D(s.TEXTURE_2D,0,0,0,me,Ie,ie)}else t.texImage2D(s.TEXTURE_2D,0,De,me,Ie,ie);m(S)&&p(K),ye.__version=Y.version,S.onUpdate&&S.onUpdate(S)}P.__version=S.version}function O(P,S,H){if(S.image.length!==6)return;const K=Ee(P,S),Z=S.source;t.bindTexture(s.TEXTURE_CUBE_MAP,P.__webglTexture,s.TEXTURE0+H);const Y=n.get(Z);if(Z.version!==Y.__version||K===!0){t.activeTexture(s.TEXTURE0+H);const ye=Je.getPrimaries(Je.workingColorSpace),le=S.colorSpace===hi?null:Je.getPrimaries(S.colorSpace),pe=S.colorSpace===hi||ye===le?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,S.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,S.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,pe);const Ke=S.isCompressedTexture||S.image[0].isCompressedTexture,ie=S.image[0]&&S.image[0].isDataTexture,me=[];for(let J=0;J<6;J++)!Ke&&!ie?me[J]=b(S.image[J],!0,i.maxCubemapSize):me[J]=ie?S.image[J].image:S.image[J],me[J]=ct(S,me[J]);const Ie=me[0],De=r.convert(S.format,S.colorSpace),ge=r.convert(S.type),Ve=y(S.internalFormat,De,ge,S.colorSpace),Ue=S.isVideoTexture!==!0,ot=Y.__version===void 0||K===!0,I=Z.dataReady;let de=_(S,Ie);re(s.TEXTURE_CUBE_MAP,S);let q;if(Ke){Ue&&ot&&t.texStorage2D(s.TEXTURE_CUBE_MAP,de,Ve,Ie.width,Ie.height);for(let J=0;J<6;J++){q=me[J].mipmaps;for(let he=0;he<q.length;he++){const fe=q[he];S.format!==fn?De!==null?Ue?I&&t.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+J,he,0,0,fe.width,fe.height,De,fe.data):t.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+J,he,Ve,fe.width,fe.height,0,fe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ue?I&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+J,he,0,0,fe.width,fe.height,De,ge,fe.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+J,he,Ve,fe.width,fe.height,0,De,ge,fe.data)}}}else{if(q=S.mipmaps,Ue&&ot){q.length>0&&de++;const J=Ne(me[0]);t.texStorage2D(s.TEXTURE_CUBE_MAP,de,Ve,J.width,J.height)}for(let J=0;J<6;J++)if(ie){Ue?I&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,0,0,me[J].width,me[J].height,De,ge,me[J].data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,Ve,me[J].width,me[J].height,0,De,ge,me[J].data);for(let he=0;he<q.length;he++){const je=q[he].image[J].image;Ue?I&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+J,he+1,0,0,je.width,je.height,De,ge,je.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+J,he+1,Ve,je.width,je.height,0,De,ge,je.data)}}else{Ue?I&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,0,0,De,ge,me[J]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,Ve,De,ge,me[J]);for(let he=0;he<q.length;he++){const fe=q[he];Ue?I&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+J,he+1,0,0,De,ge,fe.image[J]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+J,he+1,Ve,De,ge,fe.image[J])}}}m(S)&&p(s.TEXTURE_CUBE_MAP),Y.__version=Z.version,S.onUpdate&&S.onUpdate(S)}P.__version=S.version}function $(P,S,H,K,Z,Y){const ye=r.convert(H.format,H.colorSpace),le=r.convert(H.type),pe=y(H.internalFormat,ye,le,H.colorSpace);if(!n.get(S).__hasExternalTextures){const ie=Math.max(1,S.width>>Y),me=Math.max(1,S.height>>Y);Z===s.TEXTURE_3D||Z===s.TEXTURE_2D_ARRAY?t.texImage3D(Z,Y,pe,ie,me,S.depth,0,ye,le,null):t.texImage2D(Z,Y,pe,ie,me,0,ye,le,null)}t.bindFramebuffer(s.FRAMEBUFFER,P),Ye(S)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,K,Z,n.get(H).__webglTexture,0,Ge(S)):(Z===s.TEXTURE_2D||Z>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&Z<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,K,Z,n.get(H).__webglTexture,Y),t.bindFramebuffer(s.FRAMEBUFFER,null)}function ee(P,S,H){if(s.bindRenderbuffer(s.RENDERBUFFER,P),S.depthBuffer){const K=S.depthTexture,Z=K&&K.isDepthTexture?K.type:null,Y=v(S.stencilBuffer,Z),ye=S.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,le=Ge(S);Ye(S)?o.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,le,Y,S.width,S.height):H?s.renderbufferStorageMultisample(s.RENDERBUFFER,le,Y,S.width,S.height):s.renderbufferStorage(s.RENDERBUFFER,Y,S.width,S.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,ye,s.RENDERBUFFER,P)}else{const K=S.textures;for(let Z=0;Z<K.length;Z++){const Y=K[Z],ye=r.convert(Y.format,Y.colorSpace),le=r.convert(Y.type),pe=y(Y.internalFormat,ye,le,Y.colorSpace),Ke=Ge(S);H&&Ye(S)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,Ke,pe,S.width,S.height):Ye(S)?o.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Ke,pe,S.width,S.height):s.renderbufferStorage(s.RENDERBUFFER,pe,S.width,S.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function ae(P,S){if(S&&S.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(s.FRAMEBUFFER,P),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(S.depthTexture).__webglTexture||S.depthTexture.image.width!==S.width||S.depthTexture.image.height!==S.height)&&(S.depthTexture.image.width=S.width,S.depthTexture.image.height=S.height,S.depthTexture.needsUpdate=!0),k(S.depthTexture,0);const K=n.get(S.depthTexture).__webglTexture,Z=Ge(S);if(S.depthTexture.format===hs)Ye(S)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,K,0,Z):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,K,0);else if(S.depthTexture.format===xs)Ye(S)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,K,0,Z):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,K,0);else throw new Error("Unknown depthTexture format")}function Te(P){const S=n.get(P),H=P.isWebGLCubeRenderTarget===!0;if(S.__boundDepthTexture!==P.depthTexture){const K=P.depthTexture;if(S.__depthDisposeCallback&&S.__depthDisposeCallback(),K){const Z=()=>{delete S.__boundDepthTexture,delete S.__depthDisposeCallback,K.removeEventListener("dispose",Z)};K.addEventListener("dispose",Z),S.__depthDisposeCallback=Z}S.__boundDepthTexture=K}if(P.depthTexture&&!S.__autoAllocateDepthBuffer){if(H)throw new Error("target.depthTexture not supported in Cube render targets");ae(S.__webglFramebuffer,P)}else if(H){S.__webglDepthbuffer=[];for(let K=0;K<6;K++)if(t.bindFramebuffer(s.FRAMEBUFFER,S.__webglFramebuffer[K]),S.__webglDepthbuffer[K]===void 0)S.__webglDepthbuffer[K]=s.createRenderbuffer(),ee(S.__webglDepthbuffer[K],P,!1);else{const Z=P.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Y=S.__webglDepthbuffer[K];s.bindRenderbuffer(s.RENDERBUFFER,Y),s.framebufferRenderbuffer(s.FRAMEBUFFER,Z,s.RENDERBUFFER,Y)}}else if(t.bindFramebuffer(s.FRAMEBUFFER,S.__webglFramebuffer),S.__webglDepthbuffer===void 0)S.__webglDepthbuffer=s.createRenderbuffer(),ee(S.__webglDepthbuffer,P,!1);else{const K=P.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Z=S.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,Z),s.framebufferRenderbuffer(s.FRAMEBUFFER,K,s.RENDERBUFFER,Z)}t.bindFramebuffer(s.FRAMEBUFFER,null)}function ve(P,S,H){const K=n.get(P);S!==void 0&&$(K.__webglFramebuffer,P,P.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),H!==void 0&&Te(P)}function Be(P){const S=P.texture,H=n.get(P),K=n.get(S);P.addEventListener("dispose",T);const Z=P.textures,Y=P.isWebGLCubeRenderTarget===!0,ye=Z.length>1;if(ye||(K.__webglTexture===void 0&&(K.__webglTexture=s.createTexture()),K.__version=S.version,a.memory.textures++),Y){H.__webglFramebuffer=[];for(let le=0;le<6;le++)if(S.mipmaps&&S.mipmaps.length>0){H.__webglFramebuffer[le]=[];for(let pe=0;pe<S.mipmaps.length;pe++)H.__webglFramebuffer[le][pe]=s.createFramebuffer()}else H.__webglFramebuffer[le]=s.createFramebuffer()}else{if(S.mipmaps&&S.mipmaps.length>0){H.__webglFramebuffer=[];for(let le=0;le<S.mipmaps.length;le++)H.__webglFramebuffer[le]=s.createFramebuffer()}else H.__webglFramebuffer=s.createFramebuffer();if(ye)for(let le=0,pe=Z.length;le<pe;le++){const Ke=n.get(Z[le]);Ke.__webglTexture===void 0&&(Ke.__webglTexture=s.createTexture(),a.memory.textures++)}if(P.samples>0&&Ye(P)===!1){H.__webglMultisampledFramebuffer=s.createFramebuffer(),H.__webglColorRenderbuffer=[],t.bindFramebuffer(s.FRAMEBUFFER,H.__webglMultisampledFramebuffer);for(let le=0;le<Z.length;le++){const pe=Z[le];H.__webglColorRenderbuffer[le]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,H.__webglColorRenderbuffer[le]);const Ke=r.convert(pe.format,pe.colorSpace),ie=r.convert(pe.type),me=y(pe.internalFormat,Ke,ie,pe.colorSpace,P.isXRRenderTarget===!0),Ie=Ge(P);s.renderbufferStorageMultisample(s.RENDERBUFFER,Ie,me,P.width,P.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+le,s.RENDERBUFFER,H.__webglColorRenderbuffer[le])}s.bindRenderbuffer(s.RENDERBUFFER,null),P.depthBuffer&&(H.__webglDepthRenderbuffer=s.createRenderbuffer(),ee(H.__webglDepthRenderbuffer,P,!0)),t.bindFramebuffer(s.FRAMEBUFFER,null)}}if(Y){t.bindTexture(s.TEXTURE_CUBE_MAP,K.__webglTexture),re(s.TEXTURE_CUBE_MAP,S);for(let le=0;le<6;le++)if(S.mipmaps&&S.mipmaps.length>0)for(let pe=0;pe<S.mipmaps.length;pe++)$(H.__webglFramebuffer[le][pe],P,S,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+le,pe);else $(H.__webglFramebuffer[le],P,S,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+le,0);m(S)&&p(s.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(ye){for(let le=0,pe=Z.length;le<pe;le++){const Ke=Z[le],ie=n.get(Ke);t.bindTexture(s.TEXTURE_2D,ie.__webglTexture),re(s.TEXTURE_2D,Ke),$(H.__webglFramebuffer,P,Ke,s.COLOR_ATTACHMENT0+le,s.TEXTURE_2D,0),m(Ke)&&p(s.TEXTURE_2D)}t.unbindTexture()}else{let le=s.TEXTURE_2D;if((P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(le=P.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),t.bindTexture(le,K.__webglTexture),re(le,S),S.mipmaps&&S.mipmaps.length>0)for(let pe=0;pe<S.mipmaps.length;pe++)$(H.__webglFramebuffer[pe],P,S,s.COLOR_ATTACHMENT0,le,pe);else $(H.__webglFramebuffer,P,S,s.COLOR_ATTACHMENT0,le,0);m(S)&&p(le),t.unbindTexture()}P.depthBuffer&&Te(P)}function rt(P){const S=P.textures;for(let H=0,K=S.length;H<K;H++){const Z=S[H];if(m(Z)){const Y=P.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:s.TEXTURE_2D,ye=n.get(Z).__webglTexture;t.bindTexture(Y,ye),p(Y),t.unbindTexture()}}}const qe=[],L=[];function sn(P){if(P.samples>0){if(Ye(P)===!1){const S=P.textures,H=P.width,K=P.height;let Z=s.COLOR_BUFFER_BIT;const Y=P.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,ye=n.get(P),le=S.length>1;if(le)for(let pe=0;pe<S.length;pe++)t.bindFramebuffer(s.FRAMEBUFFER,ye.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+pe,s.RENDERBUFFER,null),t.bindFramebuffer(s.FRAMEBUFFER,ye.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+pe,s.TEXTURE_2D,null,0);t.bindFramebuffer(s.READ_FRAMEBUFFER,ye.__webglMultisampledFramebuffer),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,ye.__webglFramebuffer);for(let pe=0;pe<S.length;pe++){if(P.resolveDepthBuffer&&(P.depthBuffer&&(Z|=s.DEPTH_BUFFER_BIT),P.stencilBuffer&&P.resolveStencilBuffer&&(Z|=s.STENCIL_BUFFER_BIT)),le){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,ye.__webglColorRenderbuffer[pe]);const Ke=n.get(S[pe]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,Ke,0)}s.blitFramebuffer(0,0,H,K,0,0,H,K,Z,s.NEAREST),c===!0&&(qe.length=0,L.length=0,qe.push(s.COLOR_ATTACHMENT0+pe),P.depthBuffer&&P.resolveDepthBuffer===!1&&(qe.push(Y),L.push(Y),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,L)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,qe))}if(t.bindFramebuffer(s.READ_FRAMEBUFFER,null),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),le)for(let pe=0;pe<S.length;pe++){t.bindFramebuffer(s.FRAMEBUFFER,ye.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+pe,s.RENDERBUFFER,ye.__webglColorRenderbuffer[pe]);const Ke=n.get(S[pe]).__webglTexture;t.bindFramebuffer(s.FRAMEBUFFER,ye.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+pe,s.TEXTURE_2D,Ke,0)}t.bindFramebuffer(s.DRAW_FRAMEBUFFER,ye.__webglMultisampledFramebuffer)}else if(P.depthBuffer&&P.resolveDepthBuffer===!1&&c){const S=P.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[S])}}}function Ge(P){return Math.min(i.maxSamples,P.samples)}function Ye(P){const S=n.get(P);return P.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function Le(P){const S=a.render.frame;h.get(P)!==S&&(h.set(P,S),P.update())}function ct(P,S){const H=P.colorSpace,K=P.format,Z=P.type;return P.isCompressedTexture===!0||P.isVideoTexture===!0||H!==Bt&&H!==hi&&(Je.getTransfer(H)===ht?(K!==fn||Z!==ei)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",H)),S}function Ne(P){return typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement?(l.width=P.naturalWidth||P.width,l.height=P.naturalHeight||P.height):typeof VideoFrame<"u"&&P instanceof VideoFrame?(l.width=P.displayWidth,l.height=P.displayHeight):(l.width=P.width,l.height=P.height),l}this.allocateTextureUnit=F,this.resetTextureUnits=A,this.setTexture2D=k,this.setTexture2DArray=j,this.setTexture3D=G,this.setTextureCube=X,this.rebindTextures=ve,this.setupRenderTarget=Be,this.updateRenderTargetMipmap=rt,this.updateMultisampleRenderTarget=sn,this.setupDepthRenderbuffer=Te,this.setupFrameBufferTexture=$,this.useMultisampledRTT=Ye}function tv(s,e){function t(n,i=hi){let r;const a=Je.getTransfer(i);if(n===ei)return s.UNSIGNED_BYTE;if(n===Yc)return s.UNSIGNED_SHORT_4_4_4_4;if(n===Kc)return s.UNSIGNED_SHORT_5_5_5_1;if(n===Du)return s.UNSIGNED_INT_5_9_9_9_REV;if(n===Lu)return s.BYTE;if(n===Iu)return s.SHORT;if(n===ur)return s.UNSIGNED_SHORT;if(n===jc)return s.INT;if(n===Di)return s.UNSIGNED_INT;if(n===vn)return s.FLOAT;if(n===yr)return s.HALF_FLOAT;if(n===Nu)return s.ALPHA;if(n===Uu)return s.RGB;if(n===fn)return s.RGBA;if(n===Fu)return s.LUMINANCE;if(n===Ou)return s.LUMINANCE_ALPHA;if(n===hs)return s.DEPTH_COMPONENT;if(n===xs)return s.DEPTH_STENCIL;if(n===$c)return s.RED;if(n===Jc)return s.RED_INTEGER;if(n===ku)return s.RG;if(n===Qc)return s.RG_INTEGER;if(n===Zc)return s.RGBA_INTEGER;if(n===ga||n===ba||n===va||n===xa)if(a===ht)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===ga)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===ba)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===va)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===xa)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===ga)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===ba)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===va)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===xa)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===rc||n===ac||n===oc||n===cc)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===rc)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===ac)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===oc)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===cc)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===lc||n===hc||n===uc)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===lc||n===hc)return a===ht?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===uc)return a===ht?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===dc||n===fc||n===pc||n===mc||n===gc||n===bc||n===vc||n===xc||n===_c||n===yc||n===Mc||n===Sc||n===wc||n===Ac)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===dc)return a===ht?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===fc)return a===ht?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===pc)return a===ht?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===mc)return a===ht?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===gc)return a===ht?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===bc)return a===ht?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===vc)return a===ht?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===xc)return a===ht?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===_c)return a===ht?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===yc)return a===ht?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Mc)return a===ht?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Sc)return a===ht?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===wc)return a===ht?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Ac)return a===ht?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===_a||n===Ec||n===Tc)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===_a)return a===ht?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Ec)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Tc)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Bu||n===Rc||n===Cc||n===Pc)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===_a)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Rc)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Cc)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Pc)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===vs?s.UNSIGNED_INT_24_8:s[n]!==void 0?s[n]:null}return{convert:t}}class nv extends Kt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class yt extends dt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const iv={type:"move"};class So{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new yt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new yt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new R,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new R),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new yt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new R,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new R),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,r=null,a=null;const o=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){a=!0;for(const b of e.hand.values()){const m=t.getJointPose(b,n),p=this._getHandJoint(l,b);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const h=l.joints["index-finger-tip"],u=l.joints["thumb-tip"],d=h.position.distanceTo(u.position),f=.02,g=.005;l.inputState.pinching&&d>f+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&d<=f-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));o!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&r!==null&&(i=r),i!==null&&(o.matrix.fromArray(i.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,i.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(i.linearVelocity)):o.hasLinearVelocity=!1,i.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(i.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(iv)))}return o!==null&&(o.visible=i!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new yt;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}const sv=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,rv=`
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

}`;class av{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,n){if(this.texture===null){const i=new At,r=e.properties.get(i);r.__webglTexture=t.texture,(t.depthNear!=n.depthNear||t.depthFar!=n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new yn({vertexShader:sv,fragmentShader:rv,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new $e(new Cn(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class ov extends As{constructor(e,t){super();const n=this;let i=null,r=1,a=null,o="local-floor",c=1,l=null,h=null,u=null,d=null,f=null,g=null;const b=new av,m=t.getContextAttributes();let p=null,y=null;const v=[],_=[],w=new oe;let T=null;const M=new Kt;M.layers.enable(1),M.viewport=new Ze;const C=new Kt;C.layers.enable(2),C.viewport=new Ze;const D=[M,C],x=new nv;x.layers.enable(1),x.layers.enable(2);let A=null,F=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(O){let $=v[O];return $===void 0&&($=new So,v[O]=$),$.getTargetRaySpace()},this.getControllerGrip=function(O){let $=v[O];return $===void 0&&($=new So,v[O]=$),$.getGripSpace()},this.getHand=function(O){let $=v[O];return $===void 0&&($=new So,v[O]=$),$.getHandSpace()};function B(O){const $=_.indexOf(O.inputSource);if($===-1)return;const ee=v[$];ee!==void 0&&(ee.update(O.inputSource,O.frame,l||a),ee.dispatchEvent({type:O.type,data:O.inputSource}))}function k(){i.removeEventListener("select",B),i.removeEventListener("selectstart",B),i.removeEventListener("selectend",B),i.removeEventListener("squeeze",B),i.removeEventListener("squeezestart",B),i.removeEventListener("squeezeend",B),i.removeEventListener("end",k),i.removeEventListener("inputsourceschange",j);for(let O=0;O<v.length;O++){const $=_[O];$!==null&&(_[O]=null,v[O].disconnect($))}A=null,F=null,b.reset(),e.setRenderTarget(p),f=null,d=null,u=null,i=null,y=null,we.stop(),n.isPresenting=!1,e.setPixelRatio(T),e.setSize(w.width,w.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(O){r=O,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(O){o=O,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||a},this.setReferenceSpace=function(O){l=O},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return u},this.getFrame=function(){return g},this.getSession=function(){return i},this.setSession=async function(O){if(i=O,i!==null){if(p=e.getRenderTarget(),i.addEventListener("select",B),i.addEventListener("selectstart",B),i.addEventListener("selectend",B),i.addEventListener("squeeze",B),i.addEventListener("squeezestart",B),i.addEventListener("squeezeend",B),i.addEventListener("end",k),i.addEventListener("inputsourceschange",j),m.xrCompatible!==!0&&await t.makeXRCompatible(),T=e.getPixelRatio(),e.getSize(w),i.renderState.layers===void 0){const $={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(i,t,$),i.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),y=new Ni(f.framebufferWidth,f.framebufferHeight,{format:fn,type:ei,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil})}else{let $=null,ee=null,ae=null;m.depth&&(ae=m.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,$=m.stencil?xs:hs,ee=m.stencil?vs:Di);const Te={colorFormat:t.RGBA8,depthFormat:ae,scaleFactor:r};u=new XRWebGLBinding(i,t),d=u.createProjectionLayer(Te),i.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),y=new Ni(d.textureWidth,d.textureHeight,{format:fn,type:ei,depthTexture:new ed(d.textureWidth,d.textureHeight,ee,void 0,void 0,void 0,void 0,void 0,void 0,$),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(c),l=null,a=await i.requestReferenceSpace(o),we.setContext(i),we.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return b.getDepthTexture()};function j(O){for(let $=0;$<O.removed.length;$++){const ee=O.removed[$],ae=_.indexOf(ee);ae>=0&&(_[ae]=null,v[ae].disconnect(ee))}for(let $=0;$<O.added.length;$++){const ee=O.added[$];let ae=_.indexOf(ee);if(ae===-1){for(let ve=0;ve<v.length;ve++)if(ve>=_.length){_.push(ee),ae=ve;break}else if(_[ve]===null){_[ve]=ee,ae=ve;break}if(ae===-1)break}const Te=v[ae];Te&&Te.connect(ee)}}const G=new R,X=new R;function z(O,$,ee){G.setFromMatrixPosition($.matrixWorld),X.setFromMatrixPosition(ee.matrixWorld);const ae=G.distanceTo(X),Te=$.projectionMatrix.elements,ve=ee.projectionMatrix.elements,Be=Te[14]/(Te[10]-1),rt=Te[14]/(Te[10]+1),qe=(Te[9]+1)/Te[5],L=(Te[9]-1)/Te[5],sn=(Te[8]-1)/Te[0],Ge=(ve[8]+1)/ve[0],Ye=Be*sn,Le=Be*Ge,ct=ae/(-sn+Ge),Ne=ct*-sn;if($.matrixWorld.decompose(O.position,O.quaternion,O.scale),O.translateX(Ne),O.translateZ(ct),O.matrixWorld.compose(O.position,O.quaternion,O.scale),O.matrixWorldInverse.copy(O.matrixWorld).invert(),Te[10]===-1)O.projectionMatrix.copy($.projectionMatrix),O.projectionMatrixInverse.copy($.projectionMatrixInverse);else{const P=Be+ct,S=rt+ct,H=Ye-Ne,K=Le+(ae-Ne),Z=qe*rt/S*P,Y=L*rt/S*P;O.projectionMatrix.makePerspective(H,K,Z,Y,P,S),O.projectionMatrixInverse.copy(O.projectionMatrix).invert()}}function te(O,$){$===null?O.matrixWorld.copy(O.matrix):O.matrixWorld.multiplyMatrices($.matrixWorld,O.matrix),O.matrixWorldInverse.copy(O.matrixWorld).invert()}this.updateCamera=function(O){if(i===null)return;let $=O.near,ee=O.far;b.texture!==null&&(b.depthNear>0&&($=b.depthNear),b.depthFar>0&&(ee=b.depthFar)),x.near=C.near=M.near=$,x.far=C.far=M.far=ee,(A!==x.near||F!==x.far)&&(i.updateRenderState({depthNear:x.near,depthFar:x.far}),A=x.near,F=x.far);const ae=O.parent,Te=x.cameras;te(x,ae);for(let ve=0;ve<Te.length;ve++)te(Te[ve],ae);Te.length===2?z(x,M,C):x.projectionMatrix.copy(M.projectionMatrix),ne(O,x,ae)};function ne(O,$,ee){ee===null?O.matrix.copy($.matrixWorld):(O.matrix.copy(ee.matrixWorld),O.matrix.invert(),O.matrix.multiply($.matrixWorld)),O.matrix.decompose(O.position,O.quaternion,O.scale),O.updateMatrixWorld(!0),O.projectionMatrix.copy($.projectionMatrix),O.projectionMatrixInverse.copy($.projectionMatrixInverse),O.isPerspectiveCamera&&(O.fov=_s*2*Math.atan(1/O.projectionMatrix.elements[5]),O.zoom=1)}this.getCamera=function(){return x},this.getFoveation=function(){if(!(d===null&&f===null))return c},this.setFoveation=function(O){c=O,d!==null&&(d.fixedFoveation=O),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=O)},this.hasDepthSensing=function(){return b.texture!==null},this.getDepthSensingMesh=function(){return b.getMesh(x)};let re=null;function Ee(O,$){if(h=$.getViewerPose(l||a),g=$,h!==null){const ee=h.views;f!==null&&(e.setRenderTargetFramebuffer(y,f.framebuffer),e.setRenderTarget(y));let ae=!1;ee.length!==x.cameras.length&&(x.cameras.length=0,ae=!0);for(let ve=0;ve<ee.length;ve++){const Be=ee[ve];let rt=null;if(f!==null)rt=f.getViewport(Be);else{const L=u.getViewSubImage(d,Be);rt=L.viewport,ve===0&&(e.setRenderTargetTextures(y,L.colorTexture,d.ignoreDepthValues?void 0:L.depthStencilTexture),e.setRenderTarget(y))}let qe=D[ve];qe===void 0&&(qe=new Kt,qe.layers.enable(ve),qe.viewport=new Ze,D[ve]=qe),qe.matrix.fromArray(Be.transform.matrix),qe.matrix.decompose(qe.position,qe.quaternion,qe.scale),qe.projectionMatrix.fromArray(Be.projectionMatrix),qe.projectionMatrixInverse.copy(qe.projectionMatrix).invert(),qe.viewport.set(rt.x,rt.y,rt.width,rt.height),ve===0&&(x.matrix.copy(qe.matrix),x.matrix.decompose(x.position,x.quaternion,x.scale)),ae===!0&&x.cameras.push(qe)}const Te=i.enabledFeatures;if(Te&&Te.includes("depth-sensing")){const ve=u.getDepthInformation(ee[0]);ve&&ve.isValid&&ve.texture&&b.init(e,ve,i.renderState)}}for(let ee=0;ee<v.length;ee++){const ae=_[ee],Te=v[ee];ae!==null&&Te!==void 0&&Te.update(ae,$,l||a)}re&&re(O,$),$.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:$}),g=null}const we=new Zu;we.setAnimationLoop(Ee),this.setAnimationLoop=function(O){re=O},this.dispose=function(){}}}const Si=new Xt,cv=new _e;function lv(s,e){function t(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,$u(s)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function i(m,p,y,v,_){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(m,p):p.isMeshToonMaterial?(r(m,p),u(m,p)):p.isMeshPhongMaterial?(r(m,p),h(m,p)):p.isMeshStandardMaterial?(r(m,p),d(m,p),p.isMeshPhysicalMaterial&&f(m,p,_)):p.isMeshMatcapMaterial?(r(m,p),g(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),b(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(a(m,p),p.isLineDashedMaterial&&o(m,p)):p.isPointsMaterial?c(m,p,y,v):p.isSpriteMaterial?l(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,t(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===Jt&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,t(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===Jt&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,t(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,t(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const y=e.get(p),v=y.envMap,_=y.envMapRotation;v&&(m.envMap.value=v,Si.copy(_),Si.x*=-1,Si.y*=-1,Si.z*=-1,v.isCubeTexture&&v.isRenderTargetTexture===!1&&(Si.y*=-1,Si.z*=-1),m.envMapRotation.value.setFromMatrix4(cv.makeRotationFromEuler(Si)),m.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,m.aoMapTransform))}function a(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform))}function o(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function c(m,p,y,v){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*y,m.scale.value=v*.5,p.map&&(m.map.value=p.map,t(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function l(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function h(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function u(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function d(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function f(m,p,y){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Jt&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=y.texture,m.transmissionSamplerSize.value.set(y.width,y.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function b(m,p){const y=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(y.matrixWorld),m.nearDistance.value=y.shadow.camera.near,m.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function hv(s,e,t,n){let i={},r={},a=[];const o=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function c(y,v){const _=v.program;n.uniformBlockBinding(y,_)}function l(y,v){let _=i[y.id];_===void 0&&(g(y),_=h(y),i[y.id]=_,y.addEventListener("dispose",m));const w=v.program;n.updateUBOMapping(y,w);const T=e.render.frame;r[y.id]!==T&&(d(y),r[y.id]=T)}function h(y){const v=u();y.__bindingPointIndex=v;const _=s.createBuffer(),w=y.__size,T=y.usage;return s.bindBuffer(s.UNIFORM_BUFFER,_),s.bufferData(s.UNIFORM_BUFFER,w,T),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,v,_),_}function u(){for(let y=0;y<o;y++)if(a.indexOf(y)===-1)return a.push(y),y;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(y){const v=i[y.id],_=y.uniforms,w=y.__cache;s.bindBuffer(s.UNIFORM_BUFFER,v);for(let T=0,M=_.length;T<M;T++){const C=Array.isArray(_[T])?_[T]:[_[T]];for(let D=0,x=C.length;D<x;D++){const A=C[D];if(f(A,T,D,w)===!0){const F=A.__offset,B=Array.isArray(A.value)?A.value:[A.value];let k=0;for(let j=0;j<B.length;j++){const G=B[j],X=b(G);typeof G=="number"||typeof G=="boolean"?(A.__data[0]=G,s.bufferSubData(s.UNIFORM_BUFFER,F+k,A.__data)):G.isMatrix3?(A.__data[0]=G.elements[0],A.__data[1]=G.elements[1],A.__data[2]=G.elements[2],A.__data[3]=0,A.__data[4]=G.elements[3],A.__data[5]=G.elements[4],A.__data[6]=G.elements[5],A.__data[7]=0,A.__data[8]=G.elements[6],A.__data[9]=G.elements[7],A.__data[10]=G.elements[8],A.__data[11]=0):(G.toArray(A.__data,k),k+=X.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,F,A.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function f(y,v,_,w){const T=y.value,M=v+"_"+_;if(w[M]===void 0)return typeof T=="number"||typeof T=="boolean"?w[M]=T:w[M]=T.clone(),!0;{const C=w[M];if(typeof T=="number"||typeof T=="boolean"){if(C!==T)return w[M]=T,!0}else if(C.equals(T)===!1)return C.copy(T),!0}return!1}function g(y){const v=y.uniforms;let _=0;const w=16;for(let M=0,C=v.length;M<C;M++){const D=Array.isArray(v[M])?v[M]:[v[M]];for(let x=0,A=D.length;x<A;x++){const F=D[x],B=Array.isArray(F.value)?F.value:[F.value];for(let k=0,j=B.length;k<j;k++){const G=B[k],X=b(G),z=_%w,te=z%X.boundary,ne=z+te;_+=te,ne!==0&&w-ne<X.storage&&(_+=w-ne),F.__data=new Float32Array(X.storage/Float32Array.BYTES_PER_ELEMENT),F.__offset=_,_+=X.storage}}}const T=_%w;return T>0&&(_+=w-T),y.__size=_,y.__cache={},this}function b(y){const v={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(v.boundary=4,v.storage=4):y.isVector2?(v.boundary=8,v.storage=8):y.isVector3||y.isColor?(v.boundary=16,v.storage=12):y.isVector4?(v.boundary=16,v.storage=16):y.isMatrix3?(v.boundary=48,v.storage=48):y.isMatrix4?(v.boundary=64,v.storage=64):y.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",y),v}function m(y){const v=y.target;v.removeEventListener("dispose",m);const _=a.indexOf(v.__bindingPointIndex);a.splice(_,1),s.deleteBuffer(i[v.id]),delete i[v.id],delete r[v.id]}function p(){for(const y in i)s.deleteBuffer(i[y]);a=[],i={},r={}}return{bind:c,update:l,dispose:p}}class uv{constructor(e={}){const{canvas:t=Qf(),context:n=null,depth:i=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1}=e;this.isWebGLRenderer=!0;let d;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");d=n.getContextAttributes().alpha}else d=a;const f=new Uint32Array(4),g=new Int32Array(4);let b=null,m=null;const p=[],y=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Lt,this.toneMapping=gi,this.toneMappingExposure=1;const v=this;let _=!1,w=0,T=0,M=null,C=-1,D=null;const x=new Ze,A=new Ze;let F=null;const B=new Ae(0);let k=0,j=t.width,G=t.height,X=1,z=null,te=null;const ne=new Ze(0,0,j,G),re=new Ze(0,0,j,G);let Ee=!1;const we=new nl;let O=!1,$=!1;const ee=new _e,ae=new _e,Te=new R,ve=new Ze,Be={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let rt=!1;function qe(){return M===null?X:1}let L=n;function sn(E,N){return t.getContext(E,N)}try{const E={alpha:!0,depth:i,stencil:r,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${qc}`),t.addEventListener("webglcontextlost",J,!1),t.addEventListener("webglcontextrestored",he,!1),t.addEventListener("webglcontextcreationerror",fe,!1),L===null){const N="webgl2";if(L=sn(N,E),L===null)throw sn(N)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(E){throw console.error("THREE.WebGLRenderer: "+E.message),E}let Ge,Ye,Le,ct,Ne,P,S,H,K,Z,Y,ye,le,pe,Ke,ie,me,Ie,De,ge,Ve,Ue,ot,I;function de(){Ge=new g0(L),Ge.init(),Ue=new tv(L,Ge),Ye=new h0(L,Ge,e,Ue),Le=new Qb(L),Ye.reverseDepthBuffer&&Le.buffers.depth.setReversed(!0),ct=new x0(L),Ne=new Ob,P=new ev(L,Ge,Le,Ne,Ye,Ue,ct),S=new d0(v),H=new m0(v),K=new Ep(L),ot=new c0(L,K),Z=new b0(L,K,ct,ot),Y=new y0(L,Z,K,ct),De=new _0(L,Ye,P),ie=new u0(Ne),ye=new Fb(v,S,H,Ge,Ye,ot,ie),le=new lv(v,Ne),pe=new Bb,Ke=new Xb(Ge),Ie=new o0(v,S,H,Le,Y,d,c),me=new $b(v,Y,Ye),I=new hv(L,ct,Ye,Le),ge=new l0(L,Ge,ct),Ve=new v0(L,Ge,ct),ct.programs=ye.programs,v.capabilities=Ye,v.extensions=Ge,v.properties=Ne,v.renderLists=pe,v.shadowMap=me,v.state=Le,v.info=ct}de();const q=new ov(v,L);this.xr=q,this.getContext=function(){return L},this.getContextAttributes=function(){return L.getContextAttributes()},this.forceContextLoss=function(){const E=Ge.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){const E=Ge.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return X},this.setPixelRatio=function(E){E!==void 0&&(X=E,this.setSize(j,G,!1))},this.getSize=function(E){return E.set(j,G)},this.setSize=function(E,N,V=!0){if(q.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}j=E,G=N,t.width=Math.floor(E*X),t.height=Math.floor(N*X),V===!0&&(t.style.width=E+"px",t.style.height=N+"px"),this.setViewport(0,0,E,N)},this.getDrawingBufferSize=function(E){return E.set(j*X,G*X).floor()},this.setDrawingBufferSize=function(E,N,V){j=E,G=N,X=V,t.width=Math.floor(E*V),t.height=Math.floor(N*V),this.setViewport(0,0,E,N)},this.getCurrentViewport=function(E){return E.copy(x)},this.getViewport=function(E){return E.copy(ne)},this.setViewport=function(E,N,V,W){E.isVector4?ne.set(E.x,E.y,E.z,E.w):ne.set(E,N,V,W),Le.viewport(x.copy(ne).multiplyScalar(X).round())},this.getScissor=function(E){return E.copy(re)},this.setScissor=function(E,N,V,W){E.isVector4?re.set(E.x,E.y,E.z,E.w):re.set(E,N,V,W),Le.scissor(A.copy(re).multiplyScalar(X).round())},this.getScissorTest=function(){return Ee},this.setScissorTest=function(E){Le.setScissorTest(Ee=E)},this.setOpaqueSort=function(E){z=E},this.setTransparentSort=function(E){te=E},this.getClearColor=function(E){return E.copy(Ie.getClearColor())},this.setClearColor=function(){Ie.setClearColor.apply(Ie,arguments)},this.getClearAlpha=function(){return Ie.getClearAlpha()},this.setClearAlpha=function(){Ie.setClearAlpha.apply(Ie,arguments)},this.clear=function(E=!0,N=!0,V=!0){let W=0;if(E){let U=!1;if(M!==null){const se=M.texture.format;U=se===Zc||se===Qc||se===Jc}if(U){const se=M.texture.type,ue=se===ei||se===Di||se===ur||se===vs||se===Yc||se===Kc,be=Ie.getClearColor(),xe=Ie.getClearAlpha(),Re=be.r,Pe=be.g,Me=be.b;ue?(f[0]=Re,f[1]=Pe,f[2]=Me,f[3]=xe,L.clearBufferuiv(L.COLOR,0,f)):(g[0]=Re,g[1]=Pe,g[2]=Me,g[3]=xe,L.clearBufferiv(L.COLOR,0,g))}else W|=L.COLOR_BUFFER_BIT}N&&(W|=L.DEPTH_BUFFER_BIT,L.clearDepth(this.capabilities.reverseDepthBuffer?0:1)),V&&(W|=L.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),L.clear(W)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",J,!1),t.removeEventListener("webglcontextrestored",he,!1),t.removeEventListener("webglcontextcreationerror",fe,!1),pe.dispose(),Ke.dispose(),Ne.dispose(),S.dispose(),H.dispose(),Y.dispose(),ot.dispose(),I.dispose(),ye.dispose(),q.dispose(),q.removeEventListener("sessionstart",Sl),q.removeEventListener("sessionend",wl),bi.stop()};function J(E){E.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),_=!0}function he(){console.log("THREE.WebGLRenderer: Context Restored."),_=!1;const E=ct.autoReset,N=me.enabled,V=me.autoUpdate,W=me.needsUpdate,U=me.type;de(),ct.autoReset=E,me.enabled=N,me.autoUpdate=V,me.needsUpdate=W,me.type=U}function fe(E){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function je(E){const N=E.target;N.removeEventListener("dispose",je),Mt(N)}function Mt(E){Qt(E),Ne.remove(E)}function Qt(E){const N=Ne.get(E).programs;N!==void 0&&(N.forEach(function(V){ye.releaseProgram(V)}),E.isShaderMaterial&&ye.releaseShaderCache(E))}this.renderBufferDirect=function(E,N,V,W,U,se){N===null&&(N=Be);const ue=U.isMesh&&U.matrixWorld.determinant()<0,be=Gd(E,N,V,W,U);Le.setMaterial(W,ue);let xe=V.index,Re=1;if(W.wireframe===!0){if(xe=Z.getWireframeAttribute(V),xe===void 0)return;Re=2}const Pe=V.drawRange,Me=V.attributes.position;let nt=Pe.start*Re,lt=(Pe.start+Pe.count)*Re;se!==null&&(nt=Math.max(nt,se.start*Re),lt=Math.min(lt,(se.start+se.count)*Re)),xe!==null?(nt=Math.max(nt,0),lt=Math.min(lt,xe.count)):Me!=null&&(nt=Math.max(nt,0),lt=Math.min(lt,Me.count));const vt=lt-nt;if(vt<0||vt===1/0)return;ot.setup(U,W,be,V,xe);let rn,et=ge;if(xe!==null&&(rn=K.get(xe),et=Ve,et.setIndex(rn)),U.isMesh)W.wireframe===!0?(Le.setLineWidth(W.wireframeLinewidth*qe()),et.setMode(L.LINES)):et.setMode(L.TRIANGLES);else if(U.isLine){let Se=W.linewidth;Se===void 0&&(Se=1),Le.setLineWidth(Se*qe()),U.isLineSegments?et.setMode(L.LINES):U.isLineLoop?et.setMode(L.LINE_LOOP):et.setMode(L.LINE_STRIP)}else U.isPoints?et.setMode(L.POINTS):U.isSprite&&et.setMode(L.TRIANGLES);if(U.isBatchedMesh)if(U._multiDrawInstances!==null)et.renderMultiDrawInstances(U._multiDrawStarts,U._multiDrawCounts,U._multiDrawCount,U._multiDrawInstances);else if(Ge.get("WEBGL_multi_draw"))et.renderMultiDraw(U._multiDrawStarts,U._multiDrawCounts,U._multiDrawCount);else{const Se=U._multiDrawStarts,Nt=U._multiDrawCounts,tt=U._multiDrawCount,Mn=xe?K.get(xe).bytesPerElement:1,Oi=Ne.get(W).currentProgram.getUniforms();for(let an=0;an<tt;an++)Oi.setValue(L,"_gl_DrawID",an),et.render(Se[an]/Mn,Nt[an])}else if(U.isInstancedMesh)et.renderInstances(nt,vt,U.count);else if(V.isInstancedBufferGeometry){const Se=V._maxInstanceCount!==void 0?V._maxInstanceCount:1/0,Nt=Math.min(V.instanceCount,Se);et.renderInstances(nt,vt,Nt)}else et.render(nt,vt)};function Qe(E,N,V){E.transparent===!0&&E.side===tn&&E.forceSinglePass===!1?(E.side=Jt,E.needsUpdate=!0,wr(E,N,V),E.side=Zn,E.needsUpdate=!0,wr(E,N,V),E.side=tn):wr(E,N,V)}this.compile=function(E,N,V=null){V===null&&(V=E),m=Ke.get(V),m.init(N),y.push(m),V.traverseVisible(function(U){U.isLight&&U.layers.test(N.layers)&&(m.pushLight(U),U.castShadow&&m.pushShadow(U))}),E!==V&&E.traverseVisible(function(U){U.isLight&&U.layers.test(N.layers)&&(m.pushLight(U),U.castShadow&&m.pushShadow(U))}),m.setupLights();const W=new Set;return E.traverse(function(U){if(!(U.isMesh||U.isPoints||U.isLine||U.isSprite))return;const se=U.material;if(se)if(Array.isArray(se))for(let ue=0;ue<se.length;ue++){const be=se[ue];Qe(be,V,U),W.add(be)}else Qe(se,V,U),W.add(se)}),y.pop(),m=null,W},this.compileAsync=function(E,N,V=null){const W=this.compile(E,N,V);return new Promise(U=>{function se(){if(W.forEach(function(ue){Ne.get(ue).currentProgram.isReady()&&W.delete(ue)}),W.size===0){U(E);return}setTimeout(se,10)}Ge.get("KHR_parallel_shader_compile")!==null?se():setTimeout(se,10)})};let Zt=null;function Bn(E){Zt&&Zt(E)}function Sl(){bi.stop()}function wl(){bi.start()}const bi=new Zu;bi.setAnimationLoop(Bn),typeof self<"u"&&bi.setContext(self),this.setAnimationLoop=function(E){Zt=E,q.setAnimationLoop(E),E===null?bi.stop():bi.start()},q.addEventListener("sessionstart",Sl),q.addEventListener("sessionend",wl),this.render=function(E,N){if(N!==void 0&&N.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(_===!0)return;if(E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),N.parent===null&&N.matrixWorldAutoUpdate===!0&&N.updateMatrixWorld(),q.enabled===!0&&q.isPresenting===!0&&(q.cameraAutoUpdate===!0&&q.updateCamera(N),N=q.getCamera()),E.isScene===!0&&E.onBeforeRender(v,E,N,M),m=Ke.get(E,y.length),m.init(N),y.push(m),ae.multiplyMatrices(N.projectionMatrix,N.matrixWorldInverse),we.setFromProjectionMatrix(ae),$=this.localClippingEnabled,O=ie.init(this.clippingPlanes,$),b=pe.get(E,p.length),b.init(),p.push(b),q.enabled===!0&&q.isPresenting===!0){const se=v.xr.getDepthSensingMesh();se!==null&&Wa(se,N,-1/0,v.sortObjects)}Wa(E,N,0,v.sortObjects),b.finish(),v.sortObjects===!0&&b.sort(z,te),rt=q.enabled===!1||q.isPresenting===!1||q.hasDepthSensing()===!1,rt&&Ie.addToRenderList(b,E),this.info.render.frame++,O===!0&&ie.beginShadows();const V=m.state.shadowsArray;me.render(V,E,N),O===!0&&ie.endShadows(),this.info.autoReset===!0&&this.info.reset();const W=b.opaque,U=b.transmissive;if(m.setupLights(),N.isArrayCamera){const se=N.cameras;if(U.length>0)for(let ue=0,be=se.length;ue<be;ue++){const xe=se[ue];El(W,U,E,xe)}rt&&Ie.render(E);for(let ue=0,be=se.length;ue<be;ue++){const xe=se[ue];Al(b,E,xe,xe.viewport)}}else U.length>0&&El(W,U,E,N),rt&&Ie.render(E),Al(b,E,N);M!==null&&(P.updateMultisampleRenderTarget(M),P.updateRenderTargetMipmap(M)),E.isScene===!0&&E.onAfterRender(v,E,N),ot.resetDefaultState(),C=-1,D=null,y.pop(),y.length>0?(m=y[y.length-1],O===!0&&ie.setGlobalState(v.clippingPlanes,m.state.camera)):m=null,p.pop(),p.length>0?b=p[p.length-1]:b=null};function Wa(E,N,V,W){if(E.visible===!1)return;if(E.layers.test(N.layers)){if(E.isGroup)V=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(N);else if(E.isLight)m.pushLight(E),E.castShadow&&m.pushShadow(E);else if(E.isSprite){if(!E.frustumCulled||we.intersectsSprite(E)){W&&ve.setFromMatrixPosition(E.matrixWorld).applyMatrix4(ae);const ue=Y.update(E),be=E.material;be.visible&&b.push(E,ue,be,V,ve.z,null)}}else if((E.isMesh||E.isLine||E.isPoints)&&(!E.frustumCulled||we.intersectsObject(E))){const ue=Y.update(E),be=E.material;if(W&&(E.boundingSphere!==void 0?(E.boundingSphere===null&&E.computeBoundingSphere(),ve.copy(E.boundingSphere.center)):(ue.boundingSphere===null&&ue.computeBoundingSphere(),ve.copy(ue.boundingSphere.center)),ve.applyMatrix4(E.matrixWorld).applyMatrix4(ae)),Array.isArray(be)){const xe=ue.groups;for(let Re=0,Pe=xe.length;Re<Pe;Re++){const Me=xe[Re],nt=be[Me.materialIndex];nt&&nt.visible&&b.push(E,ue,nt,V,ve.z,Me)}}else be.visible&&b.push(E,ue,be,V,ve.z,null)}}const se=E.children;for(let ue=0,be=se.length;ue<be;ue++)Wa(se[ue],N,V,W)}function Al(E,N,V,W){const U=E.opaque,se=E.transmissive,ue=E.transparent;m.setupLightsView(V),O===!0&&ie.setGlobalState(v.clippingPlanes,V),W&&Le.viewport(x.copy(W)),U.length>0&&Sr(U,N,V),se.length>0&&Sr(se,N,V),ue.length>0&&Sr(ue,N,V),Le.buffers.depth.setTest(!0),Le.buffers.depth.setMask(!0),Le.buffers.color.setMask(!0),Le.setPolygonOffset(!1)}function El(E,N,V,W){if((V.isScene===!0?V.overrideMaterial:null)!==null)return;m.state.transmissionRenderTarget[W.id]===void 0&&(m.state.transmissionRenderTarget[W.id]=new Ni(1,1,{generateMipmaps:!0,type:Ge.has("EXT_color_buffer_half_float")||Ge.has("EXT_color_buffer_float")?yr:ei,minFilter:In,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Je.workingColorSpace}));const se=m.state.transmissionRenderTarget[W.id],ue=W.viewport||x;se.setSize(ue.z,ue.w);const be=v.getRenderTarget();v.setRenderTarget(se),v.getClearColor(B),k=v.getClearAlpha(),k<1&&v.setClearColor(16777215,.5),v.clear(),rt&&Ie.render(V);const xe=v.toneMapping;v.toneMapping=gi;const Re=W.viewport;if(W.viewport!==void 0&&(W.viewport=void 0),m.setupLightsView(W),O===!0&&ie.setGlobalState(v.clippingPlanes,W),Sr(E,V,W),P.updateMultisampleRenderTarget(se),P.updateRenderTargetMipmap(se),Ge.has("WEBGL_multisampled_render_to_texture")===!1){let Pe=!1;for(let Me=0,nt=N.length;Me<nt;Me++){const lt=N[Me],vt=lt.object,rn=lt.geometry,et=lt.material,Se=lt.group;if(et.side===tn&&vt.layers.test(W.layers)){const Nt=et.side;et.side=Jt,et.needsUpdate=!0,Tl(vt,V,W,rn,et,Se),et.side=Nt,et.needsUpdate=!0,Pe=!0}}Pe===!0&&(P.updateMultisampleRenderTarget(se),P.updateRenderTargetMipmap(se))}v.setRenderTarget(be),v.setClearColor(B,k),Re!==void 0&&(W.viewport=Re),v.toneMapping=xe}function Sr(E,N,V){const W=N.isScene===!0?N.overrideMaterial:null;for(let U=0,se=E.length;U<se;U++){const ue=E[U],be=ue.object,xe=ue.geometry,Re=W===null?ue.material:W,Pe=ue.group;be.layers.test(V.layers)&&Tl(be,N,V,xe,Re,Pe)}}function Tl(E,N,V,W,U,se){E.onBeforeRender(v,N,V,W,U,se),E.modelViewMatrix.multiplyMatrices(V.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),U.onBeforeRender(v,N,V,W,E,se),U.transparent===!0&&U.side===tn&&U.forceSinglePass===!1?(U.side=Jt,U.needsUpdate=!0,v.renderBufferDirect(V,N,W,U,E,se),U.side=Zn,U.needsUpdate=!0,v.renderBufferDirect(V,N,W,U,E,se),U.side=tn):v.renderBufferDirect(V,N,W,U,E,se),E.onAfterRender(v,N,V,W,U,se)}function wr(E,N,V){N.isScene!==!0&&(N=Be);const W=Ne.get(E),U=m.state.lights,se=m.state.shadowsArray,ue=U.state.version,be=ye.getParameters(E,U.state,se,N,V),xe=ye.getProgramCacheKey(be);let Re=W.programs;W.environment=E.isMeshStandardMaterial?N.environment:null,W.fog=N.fog,W.envMap=(E.isMeshStandardMaterial?H:S).get(E.envMap||W.environment),W.envMapRotation=W.environment!==null&&E.envMap===null?N.environmentRotation:E.envMapRotation,Re===void 0&&(E.addEventListener("dispose",je),Re=new Map,W.programs=Re);let Pe=Re.get(xe);if(Pe!==void 0){if(W.currentProgram===Pe&&W.lightsStateVersion===ue)return Cl(E,be),Pe}else be.uniforms=ye.getUniforms(E),E.onBeforeCompile(be,v),Pe=ye.acquireProgram(be,xe),Re.set(xe,Pe),W.uniforms=be.uniforms;const Me=W.uniforms;return(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(Me.clippingPlanes=ie.uniform),Cl(E,be),W.needsLights=Wd(E),W.lightsStateVersion=ue,W.needsLights&&(Me.ambientLightColor.value=U.state.ambient,Me.lightProbe.value=U.state.probe,Me.directionalLights.value=U.state.directional,Me.directionalLightShadows.value=U.state.directionalShadow,Me.spotLights.value=U.state.spot,Me.spotLightShadows.value=U.state.spotShadow,Me.rectAreaLights.value=U.state.rectArea,Me.ltc_1.value=U.state.rectAreaLTC1,Me.ltc_2.value=U.state.rectAreaLTC2,Me.pointLights.value=U.state.point,Me.pointLightShadows.value=U.state.pointShadow,Me.hemisphereLights.value=U.state.hemi,Me.directionalShadowMap.value=U.state.directionalShadowMap,Me.directionalShadowMatrix.value=U.state.directionalShadowMatrix,Me.spotShadowMap.value=U.state.spotShadowMap,Me.spotLightMatrix.value=U.state.spotLightMatrix,Me.spotLightMap.value=U.state.spotLightMap,Me.pointShadowMap.value=U.state.pointShadowMap,Me.pointShadowMatrix.value=U.state.pointShadowMatrix),W.currentProgram=Pe,W.uniformsList=null,Pe}function Rl(E){if(E.uniformsList===null){const N=E.currentProgram.getUniforms();E.uniformsList=Ma.seqWithValue(N.seq,E.uniforms)}return E.uniformsList}function Cl(E,N){const V=Ne.get(E);V.outputColorSpace=N.outputColorSpace,V.batching=N.batching,V.batchingColor=N.batchingColor,V.instancing=N.instancing,V.instancingColor=N.instancingColor,V.instancingMorph=N.instancingMorph,V.skinning=N.skinning,V.morphTargets=N.morphTargets,V.morphNormals=N.morphNormals,V.morphColors=N.morphColors,V.morphTargetsCount=N.morphTargetsCount,V.numClippingPlanes=N.numClippingPlanes,V.numIntersection=N.numClipIntersection,V.vertexAlphas=N.vertexAlphas,V.vertexTangents=N.vertexTangents,V.toneMapping=N.toneMapping}function Gd(E,N,V,W,U){N.isScene!==!0&&(N=Be),P.resetTextureUnits();const se=N.fog,ue=W.isMeshStandardMaterial?N.environment:null,be=M===null?v.outputColorSpace:M.isXRRenderTarget===!0?M.texture.colorSpace:Bt,xe=(W.isMeshStandardMaterial?H:S).get(W.envMap||ue),Re=W.vertexColors===!0&&!!V.attributes.color&&V.attributes.color.itemSize===4,Pe=!!V.attributes.tangent&&(!!W.normalMap||W.anisotropy>0),Me=!!V.morphAttributes.position,nt=!!V.morphAttributes.normal,lt=!!V.morphAttributes.color;let vt=gi;W.toneMapped&&(M===null||M.isXRRenderTarget===!0)&&(vt=v.toneMapping);const rn=V.morphAttributes.position||V.morphAttributes.normal||V.morphAttributes.color,et=rn!==void 0?rn.length:0,Se=Ne.get(W),Nt=m.state.lights;if(O===!0&&($===!0||E!==D)){const pn=E===D&&W.id===C;ie.setState(W,E,pn)}let tt=!1;W.version===Se.__version?(Se.needsLights&&Se.lightsStateVersion!==Nt.state.version||Se.outputColorSpace!==be||U.isBatchedMesh&&Se.batching===!1||!U.isBatchedMesh&&Se.batching===!0||U.isBatchedMesh&&Se.batchingColor===!0&&U.colorTexture===null||U.isBatchedMesh&&Se.batchingColor===!1&&U.colorTexture!==null||U.isInstancedMesh&&Se.instancing===!1||!U.isInstancedMesh&&Se.instancing===!0||U.isSkinnedMesh&&Se.skinning===!1||!U.isSkinnedMesh&&Se.skinning===!0||U.isInstancedMesh&&Se.instancingColor===!0&&U.instanceColor===null||U.isInstancedMesh&&Se.instancingColor===!1&&U.instanceColor!==null||U.isInstancedMesh&&Se.instancingMorph===!0&&U.morphTexture===null||U.isInstancedMesh&&Se.instancingMorph===!1&&U.morphTexture!==null||Se.envMap!==xe||W.fog===!0&&Se.fog!==se||Se.numClippingPlanes!==void 0&&(Se.numClippingPlanes!==ie.numPlanes||Se.numIntersection!==ie.numIntersection)||Se.vertexAlphas!==Re||Se.vertexTangents!==Pe||Se.morphTargets!==Me||Se.morphNormals!==nt||Se.morphColors!==lt||Se.toneMapping!==vt||Se.morphTargetsCount!==et)&&(tt=!0):(tt=!0,Se.__version=W.version);let Mn=Se.currentProgram;tt===!0&&(Mn=wr(W,N,U));let Oi=!1,an=!1,Xa=!1;const xt=Mn.getUniforms(),ti=Se.uniforms;if(Le.useProgram(Mn.program)&&(Oi=!0,an=!0,Xa=!0),W.id!==C&&(C=W.id,an=!0),Oi||D!==E){Ye.reverseDepthBuffer?(ee.copy(E.projectionMatrix),ep(ee),tp(ee),xt.setValue(L,"projectionMatrix",ee)):xt.setValue(L,"projectionMatrix",E.projectionMatrix),xt.setValue(L,"viewMatrix",E.matrixWorldInverse);const pn=xt.map.cameraPosition;pn!==void 0&&pn.setValue(L,Te.setFromMatrixPosition(E.matrixWorld)),Ye.logarithmicDepthBuffer&&xt.setValue(L,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),(W.isMeshPhongMaterial||W.isMeshToonMaterial||W.isMeshLambertMaterial||W.isMeshBasicMaterial||W.isMeshStandardMaterial||W.isShaderMaterial)&&xt.setValue(L,"isOrthographic",E.isOrthographicCamera===!0),D!==E&&(D=E,an=!0,Xa=!0)}if(U.isSkinnedMesh){xt.setOptional(L,U,"bindMatrix"),xt.setOptional(L,U,"bindMatrixInverse");const pn=U.skeleton;pn&&(pn.boneTexture===null&&pn.computeBoneTexture(),xt.setValue(L,"boneTexture",pn.boneTexture,P))}U.isBatchedMesh&&(xt.setOptional(L,U,"batchingTexture"),xt.setValue(L,"batchingTexture",U._matricesTexture,P),xt.setOptional(L,U,"batchingIdTexture"),xt.setValue(L,"batchingIdTexture",U._indirectTexture,P),xt.setOptional(L,U,"batchingColorTexture"),U._colorsTexture!==null&&xt.setValue(L,"batchingColorTexture",U._colorsTexture,P));const qa=V.morphAttributes;if((qa.position!==void 0||qa.normal!==void 0||qa.color!==void 0)&&De.update(U,V,Mn),(an||Se.receiveShadow!==U.receiveShadow)&&(Se.receiveShadow=U.receiveShadow,xt.setValue(L,"receiveShadow",U.receiveShadow)),W.isMeshGouraudMaterial&&W.envMap!==null&&(ti.envMap.value=xe,ti.flipEnvMap.value=xe.isCubeTexture&&xe.isRenderTargetTexture===!1?-1:1),W.isMeshStandardMaterial&&W.envMap===null&&N.environment!==null&&(ti.envMapIntensity.value=N.environmentIntensity),an&&(xt.setValue(L,"toneMappingExposure",v.toneMappingExposure),Se.needsLights&&Vd(ti,Xa),se&&W.fog===!0&&le.refreshFogUniforms(ti,se),le.refreshMaterialUniforms(ti,W,X,G,m.state.transmissionRenderTarget[E.id]),Ma.upload(L,Rl(Se),ti,P)),W.isShaderMaterial&&W.uniformsNeedUpdate===!0&&(Ma.upload(L,Rl(Se),ti,P),W.uniformsNeedUpdate=!1),W.isSpriteMaterial&&xt.setValue(L,"center",U.center),xt.setValue(L,"modelViewMatrix",U.modelViewMatrix),xt.setValue(L,"normalMatrix",U.normalMatrix),xt.setValue(L,"modelMatrix",U.matrixWorld),W.isShaderMaterial||W.isRawShaderMaterial){const pn=W.uniformsGroups;for(let ja=0,Xd=pn.length;ja<Xd;ja++){const Pl=pn[ja];I.update(Pl,Mn),I.bind(Pl,Mn)}}return Mn}function Vd(E,N){E.ambientLightColor.needsUpdate=N,E.lightProbe.needsUpdate=N,E.directionalLights.needsUpdate=N,E.directionalLightShadows.needsUpdate=N,E.pointLights.needsUpdate=N,E.pointLightShadows.needsUpdate=N,E.spotLights.needsUpdate=N,E.spotLightShadows.needsUpdate=N,E.rectAreaLights.needsUpdate=N,E.hemisphereLights.needsUpdate=N}function Wd(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return w},this.getActiveMipmapLevel=function(){return T},this.getRenderTarget=function(){return M},this.setRenderTargetTextures=function(E,N,V){Ne.get(E.texture).__webglTexture=N,Ne.get(E.depthTexture).__webglTexture=V;const W=Ne.get(E);W.__hasExternalTextures=!0,W.__autoAllocateDepthBuffer=V===void 0,W.__autoAllocateDepthBuffer||Ge.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),W.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(E,N){const V=Ne.get(E);V.__webglFramebuffer=N,V.__useDefaultFramebuffer=N===void 0},this.setRenderTarget=function(E,N=0,V=0){M=E,w=N,T=V;let W=!0,U=null,se=!1,ue=!1;if(E){const xe=Ne.get(E);if(xe.__useDefaultFramebuffer!==void 0)Le.bindFramebuffer(L.FRAMEBUFFER,null),W=!1;else if(xe.__webglFramebuffer===void 0)P.setupRenderTarget(E);else if(xe.__hasExternalTextures)P.rebindTextures(E,Ne.get(E.texture).__webglTexture,Ne.get(E.depthTexture).__webglTexture);else if(E.depthBuffer){const Me=E.depthTexture;if(xe.__boundDepthTexture!==Me){if(Me!==null&&Ne.has(Me)&&(E.width!==Me.image.width||E.height!==Me.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");P.setupDepthRenderbuffer(E)}}const Re=E.texture;(Re.isData3DTexture||Re.isDataArrayTexture||Re.isCompressedArrayTexture)&&(ue=!0);const Pe=Ne.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(Array.isArray(Pe[N])?U=Pe[N][V]:U=Pe[N],se=!0):E.samples>0&&P.useMultisampledRTT(E)===!1?U=Ne.get(E).__webglMultisampledFramebuffer:Array.isArray(Pe)?U=Pe[V]:U=Pe,x.copy(E.viewport),A.copy(E.scissor),F=E.scissorTest}else x.copy(ne).multiplyScalar(X).floor(),A.copy(re).multiplyScalar(X).floor(),F=Ee;if(Le.bindFramebuffer(L.FRAMEBUFFER,U)&&W&&Le.drawBuffers(E,U),Le.viewport(x),Le.scissor(A),Le.setScissorTest(F),se){const xe=Ne.get(E.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_CUBE_MAP_POSITIVE_X+N,xe.__webglTexture,V)}else if(ue){const xe=Ne.get(E.texture),Re=N||0;L.framebufferTextureLayer(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,xe.__webglTexture,V||0,Re)}C=-1},this.readRenderTargetPixels=function(E,N,V,W,U,se,ue){if(!(E&&E.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let be=Ne.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&ue!==void 0&&(be=be[ue]),be){Le.bindFramebuffer(L.FRAMEBUFFER,be);try{const xe=E.texture,Re=xe.format,Pe=xe.type;if(!Ye.textureFormatReadable(Re)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Ye.textureTypeReadable(Pe)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}N>=0&&N<=E.width-W&&V>=0&&V<=E.height-U&&L.readPixels(N,V,W,U,Ue.convert(Re),Ue.convert(Pe),se)}finally{const xe=M!==null?Ne.get(M).__webglFramebuffer:null;Le.bindFramebuffer(L.FRAMEBUFFER,xe)}}},this.readRenderTargetPixelsAsync=async function(E,N,V,W,U,se,ue){if(!(E&&E.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let be=Ne.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&ue!==void 0&&(be=be[ue]),be){const xe=E.texture,Re=xe.format,Pe=xe.type;if(!Ye.textureFormatReadable(Re))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Ye.textureTypeReadable(Pe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(N>=0&&N<=E.width-W&&V>=0&&V<=E.height-U){Le.bindFramebuffer(L.FRAMEBUFFER,be);const Me=L.createBuffer();L.bindBuffer(L.PIXEL_PACK_BUFFER,Me),L.bufferData(L.PIXEL_PACK_BUFFER,se.byteLength,L.STREAM_READ),L.readPixels(N,V,W,U,Ue.convert(Re),Ue.convert(Pe),0);const nt=M!==null?Ne.get(M).__webglFramebuffer:null;Le.bindFramebuffer(L.FRAMEBUFFER,nt);const lt=L.fenceSync(L.SYNC_GPU_COMMANDS_COMPLETE,0);return L.flush(),await Zf(L,lt,4),L.bindBuffer(L.PIXEL_PACK_BUFFER,Me),L.getBufferSubData(L.PIXEL_PACK_BUFFER,0,se),L.deleteBuffer(Me),L.deleteSync(lt),se}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(E,N=null,V=0){E.isTexture!==!0&&(ya("WebGLRenderer: copyFramebufferToTexture function signature has changed."),N=arguments[0]||null,E=arguments[1]);const W=Math.pow(2,-V),U=Math.floor(E.image.width*W),se=Math.floor(E.image.height*W),ue=N!==null?N.x:0,be=N!==null?N.y:0;P.setTexture2D(E,0),L.copyTexSubImage2D(L.TEXTURE_2D,V,0,0,ue,be,U,se),Le.unbindTexture()},this.copyTextureToTexture=function(E,N,V=null,W=null,U=0){E.isTexture!==!0&&(ya("WebGLRenderer: copyTextureToTexture function signature has changed."),W=arguments[0]||null,E=arguments[1],N=arguments[2],U=arguments[3]||0,V=null);let se,ue,be,xe,Re,Pe;V!==null?(se=V.max.x-V.min.x,ue=V.max.y-V.min.y,be=V.min.x,xe=V.min.y):(se=E.image.width,ue=E.image.height,be=0,xe=0),W!==null?(Re=W.x,Pe=W.y):(Re=0,Pe=0);const Me=Ue.convert(N.format),nt=Ue.convert(N.type);P.setTexture2D(N,0),L.pixelStorei(L.UNPACK_FLIP_Y_WEBGL,N.flipY),L.pixelStorei(L.UNPACK_PREMULTIPLY_ALPHA_WEBGL,N.premultiplyAlpha),L.pixelStorei(L.UNPACK_ALIGNMENT,N.unpackAlignment);const lt=L.getParameter(L.UNPACK_ROW_LENGTH),vt=L.getParameter(L.UNPACK_IMAGE_HEIGHT),rn=L.getParameter(L.UNPACK_SKIP_PIXELS),et=L.getParameter(L.UNPACK_SKIP_ROWS),Se=L.getParameter(L.UNPACK_SKIP_IMAGES),Nt=E.isCompressedTexture?E.mipmaps[U]:E.image;L.pixelStorei(L.UNPACK_ROW_LENGTH,Nt.width),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,Nt.height),L.pixelStorei(L.UNPACK_SKIP_PIXELS,be),L.pixelStorei(L.UNPACK_SKIP_ROWS,xe),E.isDataTexture?L.texSubImage2D(L.TEXTURE_2D,U,Re,Pe,se,ue,Me,nt,Nt.data):E.isCompressedTexture?L.compressedTexSubImage2D(L.TEXTURE_2D,U,Re,Pe,Nt.width,Nt.height,Me,Nt.data):L.texSubImage2D(L.TEXTURE_2D,U,Re,Pe,se,ue,Me,nt,Nt),L.pixelStorei(L.UNPACK_ROW_LENGTH,lt),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,vt),L.pixelStorei(L.UNPACK_SKIP_PIXELS,rn),L.pixelStorei(L.UNPACK_SKIP_ROWS,et),L.pixelStorei(L.UNPACK_SKIP_IMAGES,Se),U===0&&N.generateMipmaps&&L.generateMipmap(L.TEXTURE_2D),Le.unbindTexture()},this.copyTextureToTexture3D=function(E,N,V=null,W=null,U=0){E.isTexture!==!0&&(ya("WebGLRenderer: copyTextureToTexture3D function signature has changed."),V=arguments[0]||null,W=arguments[1]||null,E=arguments[2],N=arguments[3],U=arguments[4]||0);let se,ue,be,xe,Re,Pe,Me,nt,lt;const vt=E.isCompressedTexture?E.mipmaps[U]:E.image;V!==null?(se=V.max.x-V.min.x,ue=V.max.y-V.min.y,be=V.max.z-V.min.z,xe=V.min.x,Re=V.min.y,Pe=V.min.z):(se=vt.width,ue=vt.height,be=vt.depth,xe=0,Re=0,Pe=0),W!==null?(Me=W.x,nt=W.y,lt=W.z):(Me=0,nt=0,lt=0);const rn=Ue.convert(N.format),et=Ue.convert(N.type);let Se;if(N.isData3DTexture)P.setTexture3D(N,0),Se=L.TEXTURE_3D;else if(N.isDataArrayTexture||N.isCompressedArrayTexture)P.setTexture2DArray(N,0),Se=L.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}L.pixelStorei(L.UNPACK_FLIP_Y_WEBGL,N.flipY),L.pixelStorei(L.UNPACK_PREMULTIPLY_ALPHA_WEBGL,N.premultiplyAlpha),L.pixelStorei(L.UNPACK_ALIGNMENT,N.unpackAlignment);const Nt=L.getParameter(L.UNPACK_ROW_LENGTH),tt=L.getParameter(L.UNPACK_IMAGE_HEIGHT),Mn=L.getParameter(L.UNPACK_SKIP_PIXELS),Oi=L.getParameter(L.UNPACK_SKIP_ROWS),an=L.getParameter(L.UNPACK_SKIP_IMAGES);L.pixelStorei(L.UNPACK_ROW_LENGTH,vt.width),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,vt.height),L.pixelStorei(L.UNPACK_SKIP_PIXELS,xe),L.pixelStorei(L.UNPACK_SKIP_ROWS,Re),L.pixelStorei(L.UNPACK_SKIP_IMAGES,Pe),E.isDataTexture||E.isData3DTexture?L.texSubImage3D(Se,U,Me,nt,lt,se,ue,be,rn,et,vt.data):N.isCompressedArrayTexture?L.compressedTexSubImage3D(Se,U,Me,nt,lt,se,ue,be,rn,vt.data):L.texSubImage3D(Se,U,Me,nt,lt,se,ue,be,rn,et,vt),L.pixelStorei(L.UNPACK_ROW_LENGTH,Nt),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,tt),L.pixelStorei(L.UNPACK_SKIP_PIXELS,Mn),L.pixelStorei(L.UNPACK_SKIP_ROWS,Oi),L.pixelStorei(L.UNPACK_SKIP_IMAGES,an),U===0&&N.generateMipmaps&&L.generateMipmap(Se),Le.unbindTexture()},this.initRenderTarget=function(E){Ne.get(E).__webglFramebuffer===void 0&&P.setupRenderTarget(E)},this.initTexture=function(E){E.isCubeTexture?P.setTextureCube(E,0):E.isData3DTexture?P.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?P.setTexture2DArray(E,0):P.setTexture2D(E,0),Le.unbindTexture()},this.resetState=function(){w=0,T=0,M=null,Le.reset(),ot.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return $n}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=e===el?"display-p3":"srgb",t.unpackColorSpace=Je.workingColorSpace===Oa?"display-p3":"srgb"}}class rd extends dt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Xt,this.environmentIntensity=1,this.environmentRotation=new Xt,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class ad{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Ic,this.updateRanges=[],this.version=0,this.uuid=_n()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let i=0,r=this.stride;i<r;i++)this.array[e+i]=t.array[n+i];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=_n()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=_n()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const qt=new R;class mr{constructor(e,t,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)qt.fromBufferAttribute(this,t),qt.applyMatrix4(e),this.setXYZ(t,qt.x,qt.y,qt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)qt.fromBufferAttribute(this,t),qt.applyNormalMatrix(e),this.setXYZ(t,qt.x,qt.y,qt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)qt.fromBufferAttribute(this,t),qt.transformDirection(e),this.setXYZ(t,qt.x,qt.y,qt.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=En(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=it(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=it(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=it(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=it(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=it(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=En(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=En(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=En(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=En(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=it(t,this.array),n=it(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=it(t,this.array),n=it(n,this.array),i=it(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=it(t,this.array),n=it(n,this.array),i=it(i,this.array),r=it(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this.data.array[e+3]=r,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[i+r])}return new Et(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new mr(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[i+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class od extends Rn{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Ae(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}let Qi;const Os=new R,Zi=new R,es=new R,ts=new oe,ks=new oe,cd=new _e,Xr=new R,Bs=new R,qr=new R,Th=new oe,wo=new oe,Rh=new oe;class dv extends dt{constructor(e=new od){if(super(),this.isSprite=!0,this.type="Sprite",Qi===void 0){Qi=new bt;const t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new ad(t,5);Qi.setIndex([0,1,2,0,2,3]),Qi.setAttribute("position",new mr(n,3,0,!1)),Qi.setAttribute("uv",new mr(n,2,3,!1))}this.geometry=Qi,this.material=e,this.center=new oe(.5,.5)}raycast(e,t){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Zi.setFromMatrixScale(this.matrixWorld),cd.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),es.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Zi.multiplyScalar(-es.z);const n=this.material.rotation;let i,r;n!==0&&(r=Math.cos(n),i=Math.sin(n));const a=this.center;jr(Xr.set(-.5,-.5,0),es,a,Zi,i,r),jr(Bs.set(.5,-.5,0),es,a,Zi,i,r),jr(qr.set(.5,.5,0),es,a,Zi,i,r),Th.set(0,0),wo.set(1,0),Rh.set(1,1);let o=e.ray.intersectTriangle(Xr,Bs,qr,!1,Os);if(o===null&&(jr(Bs.set(-.5,.5,0),es,a,Zi,i,r),wo.set(0,1),o=e.ray.intersectTriangle(Xr,qr,Bs,!1,Os),o===null))return;const c=e.ray.origin.distanceTo(Os);c<e.near||c>e.far||t.push({distance:c,point:Os.clone(),uv:dn.getInterpolation(Os,Xr,Bs,qr,Th,wo,Rh,new oe),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}}function jr(s,e,t,n,i,r){ts.subVectors(s,t).addScalar(.5).multiply(n),i!==void 0?(ks.x=r*ts.x-i*ts.y,ks.y=i*ts.x+r*ts.y):ks.copy(ts),s.copy(e),s.x+=ks.x,s.y+=ks.y,s.applyMatrix4(cd)}const Ch=new R,Ph=new Ze,Lh=new Ze,fv=new R,Ih=new _e,Yr=new R,Ao=new Un,Dh=new _e,Eo=new ka;class pv extends $e{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=Nl,this.bindMatrix=new _e,this.bindMatrixInverse=new _e,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const e=this.geometry;this.boundingBox===null&&(this.boundingBox=new Nn),this.boundingBox.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,Yr),this.boundingBox.expandByPoint(Yr)}computeBoundingSphere(){const e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new Un),this.boundingSphere.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,Yr),this.boundingSphere.expandByPoint(Yr)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){const n=this.material,i=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Ao.copy(this.boundingSphere),Ao.applyMatrix4(i),e.ray.intersectsSphere(Ao)!==!1&&(Dh.copy(i).invert(),Eo.copy(e.ray).applyMatrix4(Dh),!(this.boundingBox!==null&&Eo.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,Eo)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new Ze,t=this.geometry.attributes.skinWeight;for(let n=0,i=t.count;n<i;n++){e.fromBufferAttribute(t,n);const r=1/e.manhattanLength();r!==1/0?e.multiplyScalar(r):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===Nl?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===Sf?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){const n=this.skeleton,i=this.geometry;Ph.fromBufferAttribute(i.attributes.skinIndex,e),Lh.fromBufferAttribute(i.attributes.skinWeight,e),Ch.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let r=0;r<4;r++){const a=Lh.getComponent(r);if(a!==0){const o=Ph.getComponent(r);Ih.multiplyMatrices(n.bones[o].matrixWorld,n.boneInverses[o]),t.addScaledVector(fv.copy(Ch).applyMatrix4(Ih),a)}}return t.applyMatrix4(this.bindMatrixInverse)}}class ld extends dt{constructor(){super(),this.isBone=!0,this.type="Bone"}}class rl extends At{constructor(e=null,t=1,n=1,i,r,a,o,c,l=Vt,h=Vt,u,d){super(null,a,o,c,l,h,i,r,u,d),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Nh=new _e,mv=new _e;class al{constructor(e=[],t=[]){this.uuid=_n(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,i=this.bones.length;n<i;n++)this.boneInverses.push(new _e)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const n=new _e;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){const e=this.bones,t=this.boneInverses,n=this.boneMatrices,i=this.boneTexture;for(let r=0,a=e.length;r<a;r++){const o=e[r]?e[r].matrixWorld:mv;Nh.multiplyMatrices(o,t[r]),Nh.toArray(n,r*16)}i!==null&&(i.needsUpdate=!0)}clone(){return new al(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const n=new rl(t,e,e,fn,vn);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){const i=this.bones[t];if(i.name===e)return i}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,i=e.bones.length;n<i;n++){const r=e.bones[n];let a=t[r];a===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",r),a=new ld),this.bones.push(a),this.boneInverses.push(new _e().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){const e={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,n=this.boneInverses;for(let i=0,r=t.length;i<r;i++){const a=t[i];e.bones.push(a.uuid);const o=n[i];e.boneInverses.push(o.toArray())}return e}}class hn extends Et{constructor(e,t,n,i=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const ns=new _e,Uh=new _e,Kr=[],Fh=new Nn,gv=new _e,zs=new $e,Hs=new Un;class Qn extends $e{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new hn(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,gv)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Nn),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,ns),Fh.copy(e.boundingBox).applyMatrix4(ns),this.boundingBox.union(Fh)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Un),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,ns),Hs.copy(e.boundingSphere).applyMatrix4(ns),this.boundingSphere.union(Hs)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const n=t.morphTargetInfluences,i=this.morphTexture.source.data.data,r=n.length+1,a=e*r+1;for(let o=0;o<n.length;o++)n[o]=i[a+o]}raycast(e,t){const n=this.matrixWorld,i=this.count;if(zs.geometry=this.geometry,zs.material=this.material,zs.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Hs.copy(this.boundingSphere),Hs.applyMatrix4(n),e.ray.intersectsSphere(Hs)!==!1))for(let r=0;r<i;r++){this.getMatrixAt(r,ns),Uh.multiplyMatrices(n,ns),zs.matrixWorld=Uh,zs.raycast(e,Kr);for(let a=0,o=Kr.length;a<o;a++){const c=Kr[a];c.instanceId=r,c.object=this,t.push(c)}Kr.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new hn(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){const n=t.morphTargetInfluences,i=n.length+1;this.morphTexture===null&&(this.morphTexture=new rl(new Float32Array(i*this.count),i,this.count,$c,vn));const r=this.morphTexture.source.data.data;let a=0;for(let l=0;l<n.length;l++)a+=n[l];const o=this.geometry.morphTargetsRelative?1:1-a,c=i*e;r[c]=o,r.set(n,c+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}}class Pa extends Rn{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Ae(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const La=new R,Ia=new R,Oh=new _e,Gs=new ka,$r=new Un,To=new R,kh=new R;class ol extends dt{constructor(e=new bt,t=new Pa){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let i=1,r=t.count;i<r;i++)La.fromBufferAttribute(t,i-1),Ia.fromBufferAttribute(t,i),n[i]=n[i-1],n[i]+=La.distanceTo(Ia);e.setAttribute("lineDistance",new Xe(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,r=e.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),$r.copy(n.boundingSphere),$r.applyMatrix4(i),$r.radius+=r,e.ray.intersectsSphere($r)===!1)return;Oh.copy(i).invert(),Gs.copy(e.ray).applyMatrix4(Oh);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=this.isLineSegments?2:1,h=n.index,d=n.attributes.position;if(h!==null){const f=Math.max(0,a.start),g=Math.min(h.count,a.start+a.count);for(let b=f,m=g-1;b<m;b+=l){const p=h.getX(b),y=h.getX(b+1),v=Jr(this,e,Gs,c,p,y);v&&t.push(v)}if(this.isLineLoop){const b=h.getX(g-1),m=h.getX(f),p=Jr(this,e,Gs,c,b,m);p&&t.push(p)}}else{const f=Math.max(0,a.start),g=Math.min(d.count,a.start+a.count);for(let b=f,m=g-1;b<m;b+=l){const p=Jr(this,e,Gs,c,b,b+1);p&&t.push(p)}if(this.isLineLoop){const b=Jr(this,e,Gs,c,g-1,f);b&&t.push(b)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){const o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function Jr(s,e,t,n,i,r){const a=s.geometry.attributes.position;if(La.fromBufferAttribute(a,i),Ia.fromBufferAttribute(a,r),t.distanceSqToSegment(La,Ia,To,kh)>n)return;To.applyMatrix4(s.matrixWorld);const c=e.ray.origin.distanceTo(To);if(!(c<e.near||c>e.far))return{distance:c,point:kh.clone().applyMatrix4(s.matrixWorld),index:i,face:null,faceIndex:null,barycoord:null,object:s}}const Bh=new R,zh=new R;class Sa extends ol{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let i=0,r=t.count;i<r;i+=2)Bh.fromBufferAttribute(t,i),zh.fromBufferAttribute(t,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+Bh.distanceTo(zh);e.setAttribute("lineDistance",new Xe(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class bv extends ol{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}class hd extends Rn{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Ae(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Hh=new _e,Uc=new ka,Qr=new Un,Zr=new R;class ud extends dt{constructor(e=new bt,t=new hd){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,r=e.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Qr.copy(n.boundingSphere),Qr.applyMatrix4(i),Qr.radius+=r,e.ray.intersectsSphere(Qr)===!1)return;Hh.copy(i).invert(),Uc.copy(e.ray).applyMatrix4(Hh);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=n.index,u=n.attributes.position;if(l!==null){const d=Math.max(0,a.start),f=Math.min(l.count,a.start+a.count);for(let g=d,b=f;g<b;g++){const m=l.getX(g);Zr.fromBufferAttribute(u,m),Gh(Zr,m,c,i,e,t,this)}}else{const d=Math.max(0,a.start),f=Math.min(u.count,a.start+a.count);for(let g=d,b=f;g<b;g++)Zr.fromBufferAttribute(u,g),Gh(Zr,g,c,i,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){const o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function Gh(s,e,t,n,i,r,a){const o=Uc.distanceSqToPoint(s);if(o<t){const c=new R;Uc.closestPointToPoint(s,c),c.applyMatrix4(n);const l=i.ray.origin.distanceTo(c);if(l<i.near||l>i.far)return;r.push({distance:l,distanceToRay:Math.sqrt(o),point:c,index:e,face:null,faceIndex:null,barycoord:null,object:a})}}class Da extends At{constructor(e,t,n,i,r,a,o,c,l){super(e,t,n,i,r,a,o,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Fn{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){const n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let n,i=this.getPoint(0),r=0;t.push(0);for(let a=1;a<=e;a++)n=this.getPoint(a/e),r+=n.distanceTo(i),t.push(r),i=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){const n=this.getLengths();let i=0;const r=n.length;let a;t?a=t:a=e*n[r-1];let o=0,c=r-1,l;for(;o<=c;)if(i=Math.floor(o+(c-o)/2),l=n[i]-a,l<0)o=i+1;else if(l>0)c=i-1;else{c=i;break}if(i=c,n[i]===a)return i/(r-1);const h=n[i],d=n[i+1]-h,f=(a-h)/d;return(i+f)/(r-1)}getTangent(e,t){let i=e-1e-4,r=e+1e-4;i<0&&(i=0),r>1&&(r=1);const a=this.getPoint(i),o=this.getPoint(r),c=t||(a.isVector2?new oe:new R);return c.copy(o).sub(a).normalize(),c}getTangentAt(e,t){const n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t){const n=new R,i=[],r=[],a=[],o=new R,c=new _e;for(let f=0;f<=e;f++){const g=f/e;i[f]=this.getTangentAt(g,new R)}r[0]=new R,a[0]=new R;let l=Number.MAX_VALUE;const h=Math.abs(i[0].x),u=Math.abs(i[0].y),d=Math.abs(i[0].z);h<=l&&(l=h,n.set(1,0,0)),u<=l&&(l=u,n.set(0,1,0)),d<=l&&n.set(0,0,1),o.crossVectors(i[0],n).normalize(),r[0].crossVectors(i[0],o),a[0].crossVectors(i[0],r[0]);for(let f=1;f<=e;f++){if(r[f]=r[f-1].clone(),a[f]=a[f-1].clone(),o.crossVectors(i[f-1],i[f]),o.length()>Number.EPSILON){o.normalize();const g=Math.acos(It(i[f-1].dot(i[f]),-1,1));r[f].applyMatrix4(c.makeRotationAxis(o,g))}a[f].crossVectors(i[f],r[f])}if(t===!0){let f=Math.acos(It(r[0].dot(r[e]),-1,1));f/=e,i[0].dot(o.crossVectors(r[0],r[e]))>0&&(f=-f);for(let g=1;g<=e;g++)r[g].applyMatrix4(c.makeRotationAxis(i[g],f*g)),a[g].crossVectors(i[g],r[g])}return{tangents:i,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class cl extends Fn{constructor(e=0,t=0,n=1,i=1,r=0,a=Math.PI*2,o=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=i,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=c}getPoint(e,t=new oe){const n=t,i=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=i;for(;r>i;)r-=i;r<Number.EPSILON&&(a?r=0:r=i),this.aClockwise===!0&&!a&&(r===i?r=-i:r=r-i);const o=this.aStartAngle+e*r;let c=this.aX+this.xRadius*Math.cos(o),l=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){const h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),d=c-this.aX,f=l-this.aY;c=d*h-f*u+this.aX,l=d*u+f*h+this.aY}return n.set(c,l)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class vv extends cl{constructor(e,t,n,i,r,a){super(e,t,n,n,i,r,a),this.isArcCurve=!0,this.type="ArcCurve"}}function ll(){let s=0,e=0,t=0,n=0;function i(r,a,o,c){s=r,e=o,t=-3*r+3*a-2*o-c,n=2*r-2*a+o+c}return{initCatmullRom:function(r,a,o,c,l){i(a,o,l*(o-r),l*(c-a))},initNonuniformCatmullRom:function(r,a,o,c,l,h,u){let d=(a-r)/l-(o-r)/(l+h)+(o-a)/h,f=(o-a)/h-(c-a)/(h+u)+(c-o)/u;d*=h,f*=h,i(a,o,d,f)},calc:function(r){const a=r*r,o=a*r;return s+e*r+t*a+n*o}}}const ea=new R,Ro=new ll,Co=new ll,Po=new ll;class rr extends Fn{constructor(e=[],t=!1,n="centripetal",i=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=i}getPoint(e,t=new R){const n=t,i=this.points,r=i.length,a=(r-(this.closed?0:1))*e;let o=Math.floor(a),c=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:c===0&&o===r-1&&(o=r-2,c=1);let l,h;this.closed||o>0?l=i[(o-1)%r]:(ea.subVectors(i[0],i[1]).add(i[0]),l=ea);const u=i[o%r],d=i[(o+1)%r];if(this.closed||o+2<r?h=i[(o+2)%r]:(ea.subVectors(i[r-1],i[r-2]).add(i[r-1]),h=ea),this.curveType==="centripetal"||this.curveType==="chordal"){const f=this.curveType==="chordal"?.5:.25;let g=Math.pow(l.distanceToSquared(u),f),b=Math.pow(u.distanceToSquared(d),f),m=Math.pow(d.distanceToSquared(h),f);b<1e-4&&(b=1),g<1e-4&&(g=b),m<1e-4&&(m=b),Ro.initNonuniformCatmullRom(l.x,u.x,d.x,h.x,g,b,m),Co.initNonuniformCatmullRom(l.y,u.y,d.y,h.y,g,b,m),Po.initNonuniformCatmullRom(l.z,u.z,d.z,h.z,g,b,m)}else this.curveType==="catmullrom"&&(Ro.initCatmullRom(l.x,u.x,d.x,h.x,this.tension),Co.initCatmullRom(l.y,u.y,d.y,h.y,this.tension),Po.initCatmullRom(l.z,u.z,d.z,h.z,this.tension));return n.set(Ro.calc(c),Co.calc(c),Po.calc(c)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(i.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const i=this.points[t];e.points.push(i.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(new R().fromArray(i))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function Vh(s,e,t,n,i){const r=(n-e)*.5,a=(i-t)*.5,o=s*s,c=s*o;return(2*t-2*n+r+a)*c+(-3*t+3*n-2*r-a)*o+r*s+t}function xv(s,e){const t=1-s;return t*t*e}function _v(s,e){return 2*(1-s)*s*e}function yv(s,e){return s*s*e}function ar(s,e,t,n){return xv(s,e)+_v(s,t)+yv(s,n)}function Mv(s,e){const t=1-s;return t*t*t*e}function Sv(s,e){const t=1-s;return 3*t*t*s*e}function wv(s,e){return 3*(1-s)*s*s*e}function Av(s,e){return s*s*s*e}function or(s,e,t,n,i){return Mv(s,e)+Sv(s,t)+wv(s,n)+Av(s,i)}class dd extends Fn{constructor(e=new oe,t=new oe,n=new oe,i=new oe){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=i}getPoint(e,t=new oe){const n=t,i=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(or(e,i.x,r.x,a.x,o.x),or(e,i.y,r.y,a.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class Ev extends Fn{constructor(e=new R,t=new R,n=new R,i=new R){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=i}getPoint(e,t=new R){const n=t,i=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(or(e,i.x,r.x,a.x,o.x),or(e,i.y,r.y,a.y,o.y),or(e,i.z,r.z,a.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class fd extends Fn{constructor(e=new oe,t=new oe){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new oe){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new oe){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Tv extends Fn{constructor(e=new R,t=new R){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new R){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new R){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class pd extends Fn{constructor(e=new oe,t=new oe,n=new oe){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new oe){const n=t,i=this.v0,r=this.v1,a=this.v2;return n.set(ar(e,i.x,r.x,a.x),ar(e,i.y,r.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Rv extends Fn{constructor(e=new R,t=new R,n=new R){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new R){const n=t,i=this.v0,r=this.v1,a=this.v2;return n.set(ar(e,i.x,r.x,a.x),ar(e,i.y,r.y,a.y),ar(e,i.z,r.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class md extends Fn{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new oe){const n=t,i=this.points,r=(i.length-1)*e,a=Math.floor(r),o=r-a,c=i[a===0?a:a-1],l=i[a],h=i[a>i.length-2?i.length-1:a+1],u=i[a>i.length-3?i.length-1:a+2];return n.set(Vh(o,c.x,l.x,h.x,u.x),Vh(o,c.y,l.y,h.y,u.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(i.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const i=this.points[t];e.points.push(i.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(new oe().fromArray(i))}return this}}var Wh=Object.freeze({__proto__:null,ArcCurve:vv,CatmullRomCurve3:rr,CubicBezierCurve:dd,CubicBezierCurve3:Ev,EllipseCurve:cl,LineCurve:fd,LineCurve3:Tv,QuadraticBezierCurve:pd,QuadraticBezierCurve3:Rv,SplineCurve:md});class Cv extends Fn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){const e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){const n=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Wh[n](t,e))}return this}getPoint(e,t){const n=e*this.getLength(),i=this.getCurveLengths();let r=0;for(;r<i.length;){if(i[r]>=n){const a=i[r]-n,o=this.curves[r],c=o.getLength(),l=c===0?0:1-a/c;return o.getPointAt(l,t)}r++}return null}getLength(){const e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const e=[];let t=0;for(let n=0,i=this.curves.length;n<i;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){const t=[];let n;for(let i=0,r=this.curves;i<r.length;i++){const a=r[i],o=a.isEllipseCurve?e*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?e*a.points.length:e,c=a.getPoints(o);for(let l=0;l<c.length;l++){const h=c[l];n&&n.equals(h)||(t.push(h),n=h)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const i=e.curves[t];this.curves.push(i.clone())}return this.autoClose=e.autoClose,this}toJSON(){const e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){const i=this.curves[t];e.curves.push(i.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const i=e.curves[t];this.curves.push(new Wh[i.type]().fromJSON(i))}return this}}class Xh extends Cv{constructor(e){super(),this.type="Path",this.currentPoint=new oe,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){const n=new fd(this.currentPoint.clone(),new oe(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,i){const r=new pd(this.currentPoint.clone(),new oe(e,t),new oe(n,i));return this.curves.push(r),this.currentPoint.set(n,i),this}bezierCurveTo(e,t,n,i,r,a){const o=new dd(this.currentPoint.clone(),new oe(e,t),new oe(n,i),new oe(r,a));return this.curves.push(o),this.currentPoint.set(r,a),this}splineThru(e){const t=[this.currentPoint.clone()].concat(e),n=new md(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,i,r,a){const o=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(e+o,t+c,n,i,r,a),this}absarc(e,t,n,i,r,a){return this.absellipse(e,t,n,n,i,r,a),this}ellipse(e,t,n,i,r,a,o,c){const l=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(e+l,t+h,n,i,r,a,o,c),this}absellipse(e,t,n,i,r,a,o,c){const l=new cl(e,t,n,i,r,a,o,c);if(this.curves.length>0){const u=l.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(l);const h=l.getPoint(1);return this.currentPoint.copy(h),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){const e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}}class hl extends bt{constructor(e=1,t=1,n=1,i=32,r=1,a=!1,o=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:i,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:c};const l=this;i=Math.floor(i),r=Math.floor(r);const h=[],u=[],d=[],f=[];let g=0;const b=[],m=n/2;let p=0;y(),a===!1&&(e>0&&v(!0),t>0&&v(!1)),this.setIndex(h),this.setAttribute("position",new Xe(u,3)),this.setAttribute("normal",new Xe(d,3)),this.setAttribute("uv",new Xe(f,2));function y(){const _=new R,w=new R;let T=0;const M=(t-e)/n;for(let C=0;C<=r;C++){const D=[],x=C/r,A=x*(t-e)+e;for(let F=0;F<=i;F++){const B=F/i,k=B*c+o,j=Math.sin(k),G=Math.cos(k);w.x=A*j,w.y=-x*n+m,w.z=A*G,u.push(w.x,w.y,w.z),_.set(j,M,G).normalize(),d.push(_.x,_.y,_.z),f.push(B,1-x),D.push(g++)}b.push(D)}for(let C=0;C<i;C++)for(let D=0;D<r;D++){const x=b[D][C],A=b[D+1][C],F=b[D+1][C+1],B=b[D][C+1];e>0&&(h.push(x,A,B),T+=3),t>0&&(h.push(A,F,B),T+=3)}l.addGroup(p,T,0),p+=T}function v(_){const w=g,T=new oe,M=new R;let C=0;const D=_===!0?e:t,x=_===!0?1:-1;for(let F=1;F<=i;F++)u.push(0,m*x,0),d.push(0,x,0),f.push(.5,.5),g++;const A=g;for(let F=0;F<=i;F++){const k=F/i*c+o,j=Math.cos(k),G=Math.sin(k);M.x=D*G,M.y=m*x,M.z=D*j,u.push(M.x,M.y,M.z),d.push(0,x,0),T.x=j*.5+.5,T.y=G*.5*x+.5,f.push(T.x,T.y),g++}for(let F=0;F<i;F++){const B=w+F,k=A+F;_===!0?h.push(k,k+1,B):h.push(k+1,k,B),C+=3}l.addGroup(p,C,_===!0?1:2),p+=C}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new hl(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class ul extends bt{constructor(e=[],t=[],n=1,i=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:i};const r=[],a=[];o(i),l(n),h(),this.setAttribute("position",new Xe(r,3)),this.setAttribute("normal",new Xe(r.slice(),3)),this.setAttribute("uv",new Xe(a,2)),i===0?this.computeVertexNormals():this.normalizeNormals();function o(y){const v=new R,_=new R,w=new R;for(let T=0;T<t.length;T+=3)f(t[T+0],v),f(t[T+1],_),f(t[T+2],w),c(v,_,w,y)}function c(y,v,_,w){const T=w+1,M=[];for(let C=0;C<=T;C++){M[C]=[];const D=y.clone().lerp(_,C/T),x=v.clone().lerp(_,C/T),A=T-C;for(let F=0;F<=A;F++)F===0&&C===T?M[C][F]=D:M[C][F]=D.clone().lerp(x,F/A)}for(let C=0;C<T;C++)for(let D=0;D<2*(T-C)-1;D++){const x=Math.floor(D/2);D%2===0?(d(M[C][x+1]),d(M[C+1][x]),d(M[C][x])):(d(M[C][x+1]),d(M[C+1][x+1]),d(M[C+1][x]))}}function l(y){const v=new R;for(let _=0;_<r.length;_+=3)v.x=r[_+0],v.y=r[_+1],v.z=r[_+2],v.normalize().multiplyScalar(y),r[_+0]=v.x,r[_+1]=v.y,r[_+2]=v.z}function h(){const y=new R;for(let v=0;v<r.length;v+=3){y.x=r[v+0],y.y=r[v+1],y.z=r[v+2];const _=m(y)/2/Math.PI+.5,w=p(y)/Math.PI+.5;a.push(_,1-w)}g(),u()}function u(){for(let y=0;y<a.length;y+=6){const v=a[y+0],_=a[y+2],w=a[y+4],T=Math.max(v,_,w),M=Math.min(v,_,w);T>.9&&M<.1&&(v<.2&&(a[y+0]+=1),_<.2&&(a[y+2]+=1),w<.2&&(a[y+4]+=1))}}function d(y){r.push(y.x,y.y,y.z)}function f(y,v){const _=y*3;v.x=e[_+0],v.y=e[_+1],v.z=e[_+2]}function g(){const y=new R,v=new R,_=new R,w=new R,T=new oe,M=new oe,C=new oe;for(let D=0,x=0;D<r.length;D+=9,x+=6){y.set(r[D+0],r[D+1],r[D+2]),v.set(r[D+3],r[D+4],r[D+5]),_.set(r[D+6],r[D+7],r[D+8]),T.set(a[x+0],a[x+1]),M.set(a[x+2],a[x+3]),C.set(a[x+4],a[x+5]),w.copy(y).add(v).add(_).divideScalar(3);const A=m(w);b(T,x+0,y,A),b(M,x+2,v,A),b(C,x+4,_,A)}}function b(y,v,_,w){w<0&&y.x===1&&(a[v]=y.x-1),_.x===0&&_.z===0&&(a[v]=w/2/Math.PI+.5)}function m(y){return Math.atan2(y.z,-y.x)}function p(y){return Math.atan2(-y.y,Math.sqrt(y.x*y.x+y.z*y.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ul(e.vertices,e.indices,e.radius,e.details)}}const ta=new R,na=new R,Lo=new R,ia=new dn;class qh extends bt{constructor(e=null,t=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:e,thresholdAngle:t},e!==null){const i=Math.pow(10,4),r=Math.cos(us*t),a=e.getIndex(),o=e.getAttribute("position"),c=a?a.count:o.count,l=[0,0,0],h=["a","b","c"],u=new Array(3),d={},f=[];for(let g=0;g<c;g+=3){a?(l[0]=a.getX(g),l[1]=a.getX(g+1),l[2]=a.getX(g+2)):(l[0]=g,l[1]=g+1,l[2]=g+2);const{a:b,b:m,c:p}=ia;if(b.fromBufferAttribute(o,l[0]),m.fromBufferAttribute(o,l[1]),p.fromBufferAttribute(o,l[2]),ia.getNormal(Lo),u[0]=`${Math.round(b.x*i)},${Math.round(b.y*i)},${Math.round(b.z*i)}`,u[1]=`${Math.round(m.x*i)},${Math.round(m.y*i)},${Math.round(m.z*i)}`,u[2]=`${Math.round(p.x*i)},${Math.round(p.y*i)},${Math.round(p.z*i)}`,!(u[0]===u[1]||u[1]===u[2]||u[2]===u[0]))for(let y=0;y<3;y++){const v=(y+1)%3,_=u[y],w=u[v],T=ia[h[y]],M=ia[h[v]],C=`${_}_${w}`,D=`${w}_${_}`;D in d&&d[D]?(Lo.dot(d[D].normal)<=r&&(f.push(T.x,T.y,T.z),f.push(M.x,M.y,M.z)),d[D]=null):C in d||(d[C]={index0:l[y],index1:l[v],normal:Lo.clone()})}}for(const g in d)if(d[g]){const{index0:b,index1:m}=d[g];ta.fromBufferAttribute(o,b),na.fromBufferAttribute(o,m),f.push(ta.x,ta.y,ta.z),f.push(na.x,na.y,na.z)}this.setAttribute("position",new Xe(f,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}}class gd extends Xh{constructor(e){super(e),this.uuid=_n(),this.type="Shape",this.holes=[]}getPointsHoles(e){const t=[];for(let n=0,i=this.holes.length;n<i;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){const i=e.holes[t];this.holes.push(i.clone())}return this}toJSON(){const e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){const i=this.holes[t];e.holes.push(i.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){const i=e.holes[t];this.holes.push(new Xh().fromJSON(i))}return this}}const Pv={triangulate:function(s,e,t=2){const n=e&&e.length,i=n?e[0]*t:s.length;let r=bd(s,0,i,t,!0);const a=[];if(!r||r.next===r.prev)return a;let o,c,l,h,u,d,f;if(n&&(r=Uv(s,e,r,t)),s.length>80*t){o=l=s[0],c=h=s[1];for(let g=t;g<i;g+=t)u=s[g],d=s[g+1],u<o&&(o=u),d<c&&(c=d),u>l&&(l=u),d>h&&(h=d);f=Math.max(l-o,h-c),f=f!==0?32767/f:0}return gr(r,a,t,o,c,f,0),a}};function bd(s,e,t,n,i){let r,a;if(i===qv(s,e,t,n)>0)for(r=e;r<t;r+=n)a=jh(r,s[r],s[r+1],a);else for(r=t-n;r>=e;r-=n)a=jh(r,s[r],s[r+1],a);return a&&za(a,a.next)&&(vr(a),a=a.next),a}function Ui(s,e){if(!s)return s;e||(e=s);let t=s,n;do if(n=!1,!t.steiner&&(za(t,t.next)||mt(t.prev,t,t.next)===0)){if(vr(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function gr(s,e,t,n,i,r,a){if(!s)return;!a&&r&&zv(s,n,i,r);let o=s,c,l;for(;s.prev!==s.next;){if(c=s.prev,l=s.next,r?Iv(s,n,i,r):Lv(s)){e.push(c.i/t|0),e.push(s.i/t|0),e.push(l.i/t|0),vr(s),s=l.next,o=l.next;continue}if(s=l,s===o){a?a===1?(s=Dv(Ui(s),e,t),gr(s,e,t,n,i,r,2)):a===2&&Nv(s,e,t,n,i,r):gr(Ui(s),e,t,n,i,r,1);break}}}function Lv(s){const e=s.prev,t=s,n=s.next;if(mt(e,t,n)>=0)return!1;const i=e.x,r=t.x,a=n.x,o=e.y,c=t.y,l=n.y,h=i<r?i<a?i:a:r<a?r:a,u=o<c?o<l?o:l:c<l?c:l,d=i>r?i>a?i:a:r>a?r:a,f=o>c?o>l?o:l:c>l?c:l;let g=n.next;for(;g!==e;){if(g.x>=h&&g.x<=d&&g.y>=u&&g.y<=f&&cs(i,o,r,c,a,l,g.x,g.y)&&mt(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function Iv(s,e,t,n){const i=s.prev,r=s,a=s.next;if(mt(i,r,a)>=0)return!1;const o=i.x,c=r.x,l=a.x,h=i.y,u=r.y,d=a.y,f=o<c?o<l?o:l:c<l?c:l,g=h<u?h<d?h:d:u<d?u:d,b=o>c?o>l?o:l:c>l?c:l,m=h>u?h>d?h:d:u>d?u:d,p=Fc(f,g,e,t,n),y=Fc(b,m,e,t,n);let v=s.prevZ,_=s.nextZ;for(;v&&v.z>=p&&_&&_.z<=y;){if(v.x>=f&&v.x<=b&&v.y>=g&&v.y<=m&&v!==i&&v!==a&&cs(o,h,c,u,l,d,v.x,v.y)&&mt(v.prev,v,v.next)>=0||(v=v.prevZ,_.x>=f&&_.x<=b&&_.y>=g&&_.y<=m&&_!==i&&_!==a&&cs(o,h,c,u,l,d,_.x,_.y)&&mt(_.prev,_,_.next)>=0))return!1;_=_.nextZ}for(;v&&v.z>=p;){if(v.x>=f&&v.x<=b&&v.y>=g&&v.y<=m&&v!==i&&v!==a&&cs(o,h,c,u,l,d,v.x,v.y)&&mt(v.prev,v,v.next)>=0)return!1;v=v.prevZ}for(;_&&_.z<=y;){if(_.x>=f&&_.x<=b&&_.y>=g&&_.y<=m&&_!==i&&_!==a&&cs(o,h,c,u,l,d,_.x,_.y)&&mt(_.prev,_,_.next)>=0)return!1;_=_.nextZ}return!0}function Dv(s,e,t){let n=s;do{const i=n.prev,r=n.next.next;!za(i,r)&&vd(i,n,n.next,r)&&br(i,r)&&br(r,i)&&(e.push(i.i/t|0),e.push(n.i/t|0),e.push(r.i/t|0),vr(n),vr(n.next),n=s=r),n=n.next}while(n!==s);return Ui(n)}function Nv(s,e,t,n,i,r){let a=s;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&Vv(a,o)){let c=xd(a,o);a=Ui(a,a.next),c=Ui(c,c.next),gr(a,e,t,n,i,r,0),gr(c,e,t,n,i,r,0);return}o=o.next}a=a.next}while(a!==s)}function Uv(s,e,t,n){const i=[];let r,a,o,c,l;for(r=0,a=e.length;r<a;r++)o=e[r]*n,c=r<a-1?e[r+1]*n:s.length,l=bd(s,o,c,n,!1),l===l.next&&(l.steiner=!0),i.push(Gv(l));for(i.sort(Fv),r=0;r<i.length;r++)t=Ov(i[r],t);return t}function Fv(s,e){return s.x-e.x}function Ov(s,e){const t=kv(s,e);if(!t)return e;const n=xd(t,s);return Ui(n,n.next),Ui(t,t.next)}function kv(s,e){let t=e,n=-1/0,i;const r=s.x,a=s.y;do{if(a<=t.y&&a>=t.next.y&&t.next.y!==t.y){const d=t.x+(a-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(d<=r&&d>n&&(n=d,i=t.x<t.next.x?t:t.next,d===r))return i}t=t.next}while(t!==e);if(!i)return null;const o=i,c=i.x,l=i.y;let h=1/0,u;t=i;do r>=t.x&&t.x>=c&&r!==t.x&&cs(a<l?r:n,a,c,l,a<l?n:r,a,t.x,t.y)&&(u=Math.abs(a-t.y)/(r-t.x),br(t,s)&&(u<h||u===h&&(t.x>i.x||t.x===i.x&&Bv(i,t)))&&(i=t,h=u)),t=t.next;while(t!==o);return i}function Bv(s,e){return mt(s.prev,s,e.prev)<0&&mt(e.next,s,s.next)<0}function zv(s,e,t,n){let i=s;do i.z===0&&(i.z=Fc(i.x,i.y,e,t,n)),i.prevZ=i.prev,i.nextZ=i.next,i=i.next;while(i!==s);i.prevZ.nextZ=null,i.prevZ=null,Hv(i)}function Hv(s){let e,t,n,i,r,a,o,c,l=1;do{for(t=s,s=null,r=null,a=0;t;){for(a++,n=t,o=0,e=0;e<l&&(o++,n=n.nextZ,!!n);e++);for(c=l;o>0||c>0&&n;)o!==0&&(c===0||!n||t.z<=n.z)?(i=t,t=t.nextZ,o--):(i=n,n=n.nextZ,c--),r?r.nextZ=i:s=i,i.prevZ=r,r=i;t=n}r.nextZ=null,l*=2}while(a>1);return s}function Fc(s,e,t,n,i){return s=(s-t)*i|0,e=(e-n)*i|0,s=(s|s<<8)&16711935,s=(s|s<<4)&252645135,s=(s|s<<2)&858993459,s=(s|s<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,s|e<<1}function Gv(s){let e=s,t=s;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==s);return t}function cs(s,e,t,n,i,r,a,o){return(i-a)*(e-o)>=(s-a)*(r-o)&&(s-a)*(n-o)>=(t-a)*(e-o)&&(t-a)*(r-o)>=(i-a)*(n-o)}function Vv(s,e){return s.next.i!==e.i&&s.prev.i!==e.i&&!Wv(s,e)&&(br(s,e)&&br(e,s)&&Xv(s,e)&&(mt(s.prev,s,e.prev)||mt(s,e.prev,e))||za(s,e)&&mt(s.prev,s,s.next)>0&&mt(e.prev,e,e.next)>0)}function mt(s,e,t){return(e.y-s.y)*(t.x-e.x)-(e.x-s.x)*(t.y-e.y)}function za(s,e){return s.x===e.x&&s.y===e.y}function vd(s,e,t,n){const i=ra(mt(s,e,t)),r=ra(mt(s,e,n)),a=ra(mt(t,n,s)),o=ra(mt(t,n,e));return!!(i!==r&&a!==o||i===0&&sa(s,t,e)||r===0&&sa(s,n,e)||a===0&&sa(t,s,n)||o===0&&sa(t,e,n))}function sa(s,e,t){return e.x<=Math.max(s.x,t.x)&&e.x>=Math.min(s.x,t.x)&&e.y<=Math.max(s.y,t.y)&&e.y>=Math.min(s.y,t.y)}function ra(s){return s>0?1:s<0?-1:0}function Wv(s,e){let t=s;do{if(t.i!==s.i&&t.next.i!==s.i&&t.i!==e.i&&t.next.i!==e.i&&vd(t,t.next,s,e))return!0;t=t.next}while(t!==s);return!1}function br(s,e){return mt(s.prev,s,s.next)<0?mt(s,e,s.next)>=0&&mt(s,s.prev,e)>=0:mt(s,e,s.prev)<0||mt(s,s.next,e)<0}function Xv(s,e){let t=s,n=!1;const i=(s.x+e.x)/2,r=(s.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&i<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==s);return n}function xd(s,e){const t=new Oc(s.i,s.x,s.y),n=new Oc(e.i,e.x,e.y),i=s.next,r=e.prev;return s.next=e,e.prev=s,t.next=i,i.prev=t,n.next=t,t.prev=n,r.next=n,n.prev=r,n}function jh(s,e,t,n){const i=new Oc(s,e,t);return n?(i.next=n.next,i.prev=n,n.next.prev=i,n.next=i):(i.prev=i,i.next=i),i}function vr(s){s.next.prev=s.prev,s.prev.next=s.next,s.prevZ&&(s.prevZ.nextZ=s.nextZ),s.nextZ&&(s.nextZ.prevZ=s.prevZ)}function Oc(s,e,t){this.i=s,this.x=e,this.y=t,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function qv(s,e,t,n){let i=0;for(let r=e,a=t-n;r<t;r+=n)i+=(s[a]-s[r])*(s[r+1]+s[a+1]),a=r;return i}class cr{static area(e){const t=e.length;let n=0;for(let i=t-1,r=0;r<t;i=r++)n+=e[i].x*e[r].y-e[r].x*e[i].y;return n*.5}static isClockWise(e){return cr.area(e)<0}static triangulateShape(e,t){const n=[],i=[],r=[];Yh(e),Kh(n,e);let a=e.length;t.forEach(Yh);for(let c=0;c<t.length;c++)i.push(a),a+=t[c].length,Kh(n,t[c]);const o=Pv.triangulate(n,i);for(let c=0;c<o.length;c+=3)r.push(o.slice(c,c+3));return r}}function Yh(s){const e=s.length;e>2&&s[e-1].equals(s[0])&&s.pop()}function Kh(s,e){for(let t=0;t<e.length;t++)s.push(e[t].x),s.push(e[t].y)}class dl extends ul{constructor(e=1,t=0){const n=(1+Math.sqrt(5))/2,i=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(i,r,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new dl(e.radius,e.detail)}}class fl extends bt{constructor(e=.5,t=1,n=32,i=1,r=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:i,thetaStart:r,thetaLength:a},n=Math.max(3,n),i=Math.max(1,i);const o=[],c=[],l=[],h=[];let u=e;const d=(t-e)/i,f=new R,g=new oe;for(let b=0;b<=i;b++){for(let m=0;m<=n;m++){const p=r+m/n*a;f.x=u*Math.cos(p),f.y=u*Math.sin(p),c.push(f.x,f.y,f.z),l.push(0,0,1),g.x=(f.x/t+1)/2,g.y=(f.y/t+1)/2,h.push(g.x,g.y)}u+=d}for(let b=0;b<i;b++){const m=b*(n+1);for(let p=0;p<n;p++){const y=p+m,v=y,_=y+n+1,w=y+n+2,T=y+1;o.push(v,_,T),o.push(_,w,T)}}this.setIndex(o),this.setAttribute("position",new Xe(c,3)),this.setAttribute("normal",new Xe(l,3)),this.setAttribute("uv",new Xe(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new fl(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}class pl extends bt{constructor(e=new gd([new oe(0,.5),new oe(-.5,-.5),new oe(.5,-.5)]),t=12){super(),this.type="ShapeGeometry",this.parameters={shapes:e,curveSegments:t};const n=[],i=[],r=[],a=[];let o=0,c=0;if(Array.isArray(e)===!1)l(e);else for(let h=0;h<e.length;h++)l(e[h]),this.addGroup(o,c,h),o+=c,c=0;this.setIndex(n),this.setAttribute("position",new Xe(i,3)),this.setAttribute("normal",new Xe(r,3)),this.setAttribute("uv",new Xe(a,2));function l(h){const u=i.length/3,d=h.extractPoints(t);let f=d.shape;const g=d.holes;cr.isClockWise(f)===!1&&(f=f.reverse());for(let m=0,p=g.length;m<p;m++){const y=g[m];cr.isClockWise(y)===!0&&(g[m]=y.reverse())}const b=cr.triangulateShape(f,g);for(let m=0,p=g.length;m<p;m++){const y=g[m];f=f.concat(y)}for(let m=0,p=f.length;m<p;m++){const y=f[m];i.push(y.x,y.y,0),r.push(0,0,1),a.push(y.x,y.y)}for(let m=0,p=b.length;m<p;m++){const y=b[m],v=y[0]+u,_=y[1]+u,w=y[2]+u;n.push(v,_,w),c+=3}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON(),t=this.parameters.shapes;return jv(t,e)}static fromJSON(e,t){const n=[];for(let i=0,r=e.shapes.length;i<r;i++){const a=t[e.shapes[i]];n.push(a)}return new pl(n,e.curveSegments)}}function jv(s,e){if(e.shapes=[],Array.isArray(s))for(let t=0,n=s.length;t<n;t++){const i=s[t];e.shapes.push(i.uuid)}else e.shapes.push(s.uuid);return e}class ml extends bt{constructor(e=1,t=32,n=16,i=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:i,phiLength:r,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const c=Math.min(a+o,Math.PI);let l=0;const h=[],u=new R,d=new R,f=[],g=[],b=[],m=[];for(let p=0;p<=n;p++){const y=[],v=p/n;let _=0;p===0&&a===0?_=.5/t:p===n&&c===Math.PI&&(_=-.5/t);for(let w=0;w<=t;w++){const T=w/t;u.x=-e*Math.cos(i+T*r)*Math.sin(a+v*o),u.y=e*Math.cos(a+v*o),u.z=e*Math.sin(i+T*r)*Math.sin(a+v*o),g.push(u.x,u.y,u.z),d.copy(u).normalize(),b.push(d.x,d.y,d.z),m.push(T+_,1-v),y.push(l++)}h.push(y)}for(let p=0;p<n;p++)for(let y=0;y<t;y++){const v=h[p][y+1],_=h[p][y],w=h[p+1][y],T=h[p+1][y+1];(p!==0||a>0)&&f.push(v,_,T),(p!==n-1||c<Math.PI)&&f.push(_,w,T)}this.setIndex(f),this.setAttribute("position",new Xe(g,3)),this.setAttribute("normal",new Xe(b,3)),this.setAttribute("uv",new Xe(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ml(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class xr extends Rn{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Ae(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ae(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Hu,this.normalScale=new oe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Xt,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class On extends xr{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new oe(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return It(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Ae(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Ae(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Ae(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}function aa(s,e,t){return!s||!t&&s.constructor===e?s:typeof e.BYTES_PER_ELEMENT=="number"?new e(s):Array.prototype.slice.call(s)}function Yv(s){return ArrayBuffer.isView(s)&&!(s instanceof DataView)}function Kv(s){function e(i,r){return s[i]-s[r]}const t=s.length,n=new Array(t);for(let i=0;i!==t;++i)n[i]=i;return n.sort(e),n}function $h(s,e,t){const n=s.length,i=new s.constructor(n);for(let r=0,a=0;a!==n;++r){const o=t[r]*e;for(let c=0;c!==e;++c)i[a++]=s[o+c]}return i}function _d(s,e,t,n){let i=1,r=s[0];for(;r!==void 0&&r[n]===void 0;)r=s[i++];if(r===void 0)return;let a=r[n];if(a!==void 0)if(Array.isArray(a))do a=r[n],a!==void 0&&(e.push(r.time),t.push.apply(t,a)),r=s[i++];while(r!==void 0);else if(a.toArray!==void 0)do a=r[n],a!==void 0&&(e.push(r.time),a.toArray(t,t.length)),r=s[i++];while(r!==void 0);else do a=r[n],a!==void 0&&(e.push(r.time),t.push(a)),r=s[i++];while(r!==void 0)}class Mr{constructor(e,t,n,i){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let n=this._cachedIndex,i=t[n],r=t[n-1];n:{e:{let a;t:{i:if(!(e<i)){for(let o=n+2;;){if(i===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=i,i=t[++n],e<i)break e}a=t.length;break t}if(!(e>=r)){const o=t[1];e<o&&(n=2,r=o);for(let c=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(i=r,r=t[--n-1],e>=r)break e}a=n,n=0;break t}break n}for(;n<a;){const o=n+a>>>1;e<t[o]?a=o:n=o+1}if(i=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,i)}return this.interpolate_(n,r,e,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=e*i;for(let a=0;a!==i;++a)t[a]=n[r+a];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class $v extends Mr{constructor(e,t,n,i){super(e,t,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Ul,endingEnd:Ul}}intervalChanged_(e,t,n){const i=this.parameterPositions;let r=e-2,a=e+1,o=i[r],c=i[a];if(o===void 0)switch(this.getSettings_().endingStart){case Fl:r=e,o=2*t-n;break;case Ol:r=i.length-2,o=t+i[r]-i[r+1];break;default:r=e,o=n}if(c===void 0)switch(this.getSettings_().endingEnd){case Fl:a=e,c=2*n-t;break;case Ol:a=1,c=n+i[1]-i[0];break;default:a=e-1,c=t}const l=(n-t)*.5,h=this.valueSize;this._weightPrev=l/(t-o),this._weightNext=l/(c-n),this._offsetPrev=r*h,this._offsetNext=a*h}interpolate_(e,t,n,i){const r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=e*o,l=c-o,h=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,f=this._weightNext,g=(n-t)/(i-t),b=g*g,m=b*g,p=-d*m+2*d*b-d*g,y=(1+d)*m+(-1.5-2*d)*b+(-.5+d)*g+1,v=(-1-f)*m+(1.5+f)*b+.5*g,_=f*m-f*b;for(let w=0;w!==o;++w)r[w]=p*a[h+w]+y*a[l+w]+v*a[c+w]+_*a[u+w];return r}}class Jv extends Mr{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=e*o,l=c-o,h=(n-t)/(i-t),u=1-h;for(let d=0;d!==o;++d)r[d]=a[l+d]*u+a[c+d]*h;return r}}class Qv extends Mr{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e){return this.copySampleValue_(e-1)}}class kn{constructor(e,t,n,i){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=aa(t,this.TimeBufferType),this.values=aa(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:aa(e.times,Array),values:aa(e.values,Array)};const i=e.getInterpolation();i!==e.DefaultInterpolation&&(n.interpolation=i)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new Qv(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Jv(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new $v(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case dr:t=this.InterpolantFactoryMethodDiscrete;break;case fr:t=this.InterpolantFactoryMethodLinear;break;case Ya:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){const n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return dr;case this.InterpolantFactoryMethodLinear:return fr;case this.InterpolantFactoryMethodSmooth:return Ya}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]*=e}return this}trim(e,t){const n=this.times,i=n.length;let r=0,a=i-1;for(;r!==i&&n[r]<e;)++r;for(;a!==-1&&n[a]>t;)--a;if(++a,r!==0||a!==i){r>=a&&(a=Math.max(a,1),r=a-1);const o=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);const n=this.times,i=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==r;o++){const c=n[o];if(typeof c=="number"&&isNaN(c)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,o,c),e=!1;break}if(a!==null&&a>c){console.error("THREE.KeyframeTrack: Out of order keys.",this,o,c,a),e=!1;break}a=c}if(i!==void 0&&Yv(i))for(let o=0,c=i.length;o!==c;++o){const l=i[o];if(isNaN(l)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,o,l),e=!1;break}}return e}optimize(){const e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===Ya,r=e.length-1;let a=1;for(let o=1;o<r;++o){let c=!1;const l=e[o],h=e[o+1];if(l!==h&&(o!==1||l!==e[0]))if(i)c=!0;else{const u=o*n,d=u-n,f=u+n;for(let g=0;g!==n;++g){const b=t[u+g];if(b!==t[d+g]||b!==t[f+g]){c=!0;break}}}if(c){if(o!==a){e[a]=e[o];const u=o*n,d=a*n;for(let f=0;f!==n;++f)t[d+f]=t[u+f]}++a}}if(r>0){e[a]=e[r];for(let o=r*n,c=a*n,l=0;l!==n;++l)t[c+l]=t[o+l];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*n)):(this.times=e,this.values=t),this}clone(){const e=this.times.slice(),t=this.values.slice(),n=this.constructor,i=new n(this.name,e,t);return i.createInterpolant=this.createInterpolant,i}}kn.prototype.TimeBufferType=Float32Array;kn.prototype.ValueBufferType=Float32Array;kn.prototype.DefaultInterpolation=fr;class Ts extends kn{constructor(e,t,n){super(e,t,n)}}Ts.prototype.ValueTypeName="bool";Ts.prototype.ValueBufferType=Array;Ts.prototype.DefaultInterpolation=dr;Ts.prototype.InterpolantFactoryMethodLinear=void 0;Ts.prototype.InterpolantFactoryMethodSmooth=void 0;class yd extends kn{}yd.prototype.ValueTypeName="color";class Ms extends kn{}Ms.prototype.ValueTypeName="number";class Zv extends Mr{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=(n-t)/(i-t);let l=e*o;for(let h=l+o;l!==h;l+=4)at.slerpFlat(r,0,a,l-o,a,l,c);return r}}class Ss extends kn{InterpolantFactoryMethodLinear(e){return new Zv(this.times,this.values,this.getValueSize(),e)}}Ss.prototype.ValueTypeName="quaternion";Ss.prototype.InterpolantFactoryMethodSmooth=void 0;class Rs extends kn{constructor(e,t,n){super(e,t,n)}}Rs.prototype.ValueTypeName="string";Rs.prototype.ValueBufferType=Array;Rs.prototype.DefaultInterpolation=dr;Rs.prototype.InterpolantFactoryMethodLinear=void 0;Rs.prototype.InterpolantFactoryMethodSmooth=void 0;class ws extends kn{}ws.prototype.ValueTypeName="vector";class ex{constructor(e="",t=-1,n=[],i=wf){this.name=e,this.tracks=n,this.duration=t,this.blendMode=i,this.uuid=_n(),this.duration<0&&this.resetDuration()}static parse(e){const t=[],n=e.tracks,i=1/(e.fps||1);for(let a=0,o=n.length;a!==o;++a)t.push(nx(n[a]).scale(i));const r=new this(e.name,e.duration,t,e.blendMode);return r.uuid=e.uuid,r}static toJSON(e){const t=[],n=e.tracks,i={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let r=0,a=n.length;r!==a;++r)t.push(kn.toJSON(n[r]));return i}static CreateFromMorphTargetSequence(e,t,n,i){const r=t.length,a=[];for(let o=0;o<r;o++){let c=[],l=[];c.push((o+r-1)%r,o,(o+1)%r),l.push(0,1,0);const h=Kv(c);c=$h(c,1,h),l=$h(l,1,h),!i&&c[0]===0&&(c.push(r),l.push(l[0])),a.push(new Ms(".morphTargetInfluences["+t[o].name+"]",c,l).scale(1/n))}return new this(e,-1,a)}static findByName(e,t){let n=e;if(!Array.isArray(e)){const i=e;n=i.geometry&&i.geometry.animations||i.animations}for(let i=0;i<n.length;i++)if(n[i].name===t)return n[i];return null}static CreateClipsFromMorphTargetSequences(e,t,n){const i={},r=/^([\w-]*?)([\d]+)$/;for(let o=0,c=e.length;o<c;o++){const l=e[o],h=l.name.match(r);if(h&&h.length>1){const u=h[1];let d=i[u];d||(i[u]=d=[]),d.push(l)}}const a=[];for(const o in i)a.push(this.CreateFromMorphTargetSequence(o,i[o],t,n));return a}static parseAnimation(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const n=function(u,d,f,g,b){if(f.length!==0){const m=[],p=[];_d(f,m,p,g),m.length!==0&&b.push(new u(d,m,p))}},i=[],r=e.name||"default",a=e.fps||30,o=e.blendMode;let c=e.length||-1;const l=e.hierarchy||[];for(let u=0;u<l.length;u++){const d=l[u].keys;if(!(!d||d.length===0))if(d[0].morphTargets){const f={};let g;for(g=0;g<d.length;g++)if(d[g].morphTargets)for(let b=0;b<d[g].morphTargets.length;b++)f[d[g].morphTargets[b]]=-1;for(const b in f){const m=[],p=[];for(let y=0;y!==d[g].morphTargets.length;++y){const v=d[g];m.push(v.time),p.push(v.morphTarget===b?1:0)}i.push(new Ms(".morphTargetInfluence["+b+"]",m,p))}c=f.length*a}else{const f=".bones["+t[u].name+"]";n(ws,f+".position",d,"pos",i),n(Ss,f+".quaternion",d,"rot",i),n(ws,f+".scale",d,"scl",i)}}return i.length===0?null:new this(r,c,i,o)}resetDuration(){const e=this.tracks;let t=0;for(let n=0,i=e.length;n!==i;++n){const r=this.tracks[n];t=Math.max(t,r.times[r.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}}function tx(s){switch(s.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return Ms;case"vector":case"vector2":case"vector3":case"vector4":return ws;case"color":return yd;case"quaternion":return Ss;case"bool":case"boolean":return Ts;case"string":return Rs}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+s)}function nx(s){if(s.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=tx(s.type);if(s.times===void 0){const t=[],n=[];_d(s.keys,t,n,"value"),s.times=t,s.values=n}return e.parse!==void 0?e.parse(s):new e(s.name,s.times,s.values,s.interpolation)}const di={enabled:!1,files:{},add:function(s,e){this.enabled!==!1&&(this.files[s]=e)},get:function(s){if(this.enabled!==!1)return this.files[s]},remove:function(s){delete this.files[s]},clear:function(){this.files={}}};class ix{constructor(e,t,n){const i=this;let r=!1,a=0,o=0,c;const l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(h){o++,r===!1&&i.onStart!==void 0&&i.onStart(h,a,o),r=!0},this.itemEnd=function(h){a++,i.onProgress!==void 0&&i.onProgress(h,a,o),a===o&&(r=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(h){i.onError!==void 0&&i.onError(h)},this.resolveURL=function(h){return c?c(h):h},this.setURLModifier=function(h){return c=h,this},this.addHandler=function(h,u){return l.push(h,u),this},this.removeHandler=function(h){const u=l.indexOf(h);return u!==-1&&l.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=l.length;u<d;u+=2){const f=l[u],g=l[u+1];if(f.global&&(f.lastIndex=0),f.test(h))return g}return null}}}const sx=new ix;class Cs{constructor(e){this.manager=e!==void 0?e:sx,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(i,r){n.load(e,i,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}Cs.DEFAULT_MATERIAL_NAME="__DEFAULT";const Xn={};class rx extends Error{constructor(e,t){super(e),this.response=t}}class Md extends Cs{constructor(e){super(e)}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=di.get(e);if(r!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0),r;if(Xn[e]!==void 0){Xn[e].push({onLoad:t,onProgress:n,onError:i});return}Xn[e]=[],Xn[e].push({onLoad:t,onProgress:n,onError:i});const a=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),o=this.mimeType,c=this.responseType;fetch(a).then(l=>{if(l.status===200||l.status===0){if(l.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||l.body===void 0||l.body.getReader===void 0)return l;const h=Xn[e],u=l.body.getReader(),d=l.headers.get("X-File-Size")||l.headers.get("Content-Length"),f=d?parseInt(d):0,g=f!==0;let b=0;const m=new ReadableStream({start(p){y();function y(){u.read().then(({done:v,value:_})=>{if(v)p.close();else{b+=_.byteLength;const w=new ProgressEvent("progress",{lengthComputable:g,loaded:b,total:f});for(let T=0,M=h.length;T<M;T++){const C=h[T];C.onProgress&&C.onProgress(w)}p.enqueue(_),y()}},v=>{p.error(v)})}}});return new Response(m)}else throw new rx(`fetch for "${l.url}" responded with ${l.status}: ${l.statusText}`,l)}).then(l=>{switch(c){case"arraybuffer":return l.arrayBuffer();case"blob":return l.blob();case"document":return l.text().then(h=>new DOMParser().parseFromString(h,o));case"json":return l.json();default:if(o===void 0)return l.text();{const u=/charset="?([^;"\s]*)"?/i.exec(o),d=u&&u[1]?u[1].toLowerCase():void 0,f=new TextDecoder(d);return l.arrayBuffer().then(g=>f.decode(g))}}}).then(l=>{di.add(e,l);const h=Xn[e];delete Xn[e];for(let u=0,d=h.length;u<d;u++){const f=h[u];f.onLoad&&f.onLoad(l)}}).catch(l=>{const h=Xn[e];if(h===void 0)throw this.manager.itemError(e),l;delete Xn[e];for(let u=0,d=h.length;u<d;u++){const f=h[u];f.onError&&f.onError(l)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class ax extends Cs{constructor(e){super(e)}load(e,t,n,i){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,a=di.get(e);if(a!==void 0)return r.manager.itemStart(e),setTimeout(function(){t&&t(a),r.manager.itemEnd(e)},0),a;const o=pr("img");function c(){h(),di.add(e,this),t&&t(this),r.manager.itemEnd(e)}function l(u){h(),i&&i(u),r.manager.itemError(e),r.manager.itemEnd(e)}function h(){o.removeEventListener("load",c,!1),o.removeEventListener("error",l,!1)}return o.addEventListener("load",c,!1),o.addEventListener("error",l,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),r.manager.itemStart(e),o.src=e,o}}class ox extends Cs{constructor(e){super(e)}load(e,t,n,i){const r=new At,a=new ax(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(o){r.image=o,r.needsUpdate=!0,t!==void 0&&t(r)},n,i),r}}class Ha extends dt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Ae(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}class cx extends Ha{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(dt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Ae(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}}const Io=new _e,Jh=new R,Qh=new R;class gl{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new oe(512,512),this.map=null,this.mapPass=null,this.matrix=new _e,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new nl,this._frameExtents=new oe(1,1),this._viewportCount=1,this._viewports=[new Ze(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;Jh.setFromMatrixPosition(e.matrixWorld),t.position.copy(Jh),Qh.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Qh),t.updateMatrixWorld(),Io.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Io),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Io)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class lx extends gl{constructor(){super(new Kt(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){const t=this.camera,n=_s*2*e.angle*this.focus,i=this.mapSize.width/this.mapSize.height,r=e.distance||t.far;(n!==t.fov||i!==t.aspect||r!==t.far)&&(t.fov=n,t.aspect=i,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class hx extends Ha{constructor(e,t,n=0,i=Math.PI/3,r=0,a=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(dt.DEFAULT_UP),this.updateMatrix(),this.target=new dt,this.distance=n,this.angle=i,this.penumbra=r,this.decay=a,this.map=null,this.shadow=new lx}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}const Zh=new _e,Vs=new R,Do=new R;class ux extends gl{constructor(){super(new Kt(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new oe(4,2),this._viewportCount=6,this._viewports=[new Ze(2,1,1,1),new Ze(0,1,1,1),new Ze(3,1,1,1),new Ze(1,1,1,1),new Ze(3,0,1,1),new Ze(1,0,1,1)],this._cubeDirections=[new R(1,0,0),new R(-1,0,0),new R(0,0,1),new R(0,0,-1),new R(0,1,0),new R(0,-1,0)],this._cubeUps=[new R(0,1,0),new R(0,1,0),new R(0,1,0),new R(0,1,0),new R(0,0,1),new R(0,0,-1)]}updateMatrices(e,t=0){const n=this.camera,i=this.matrix,r=e.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),Vs.setFromMatrixPosition(e.matrixWorld),n.position.copy(Vs),Do.copy(n.position),Do.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(Do),n.updateMatrixWorld(),i.makeTranslation(-Vs.x,-Vs.y,-Vs.z),Zh.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Zh)}}class Sd extends Ha{constructor(e,t,n=0,i=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new ux}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class dx extends gl{constructor(){super(new il(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class wd extends Ha{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(dt.DEFAULT_UP),this.updateMatrix(),this.target=new dt,this.shadow=new dx}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class lr{static decodeText(e){if(console.warn("THREE.LoaderUtils: decodeText() has been deprecated with r165 and will be removed with r175. Use TextDecoder instead."),typeof TextDecoder<"u")return new TextDecoder().decode(e);let t="";for(let n=0,i=e.length;n<i;n++)t+=String.fromCharCode(e[n]);try{return decodeURIComponent(escape(t))}catch{return t}}static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}class fx extends Cs{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(e){return this.options=e,this}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,a=di.get(e);if(a!==void 0){if(r.manager.itemStart(e),a.then){a.then(l=>{t&&t(l),r.manager.itemEnd(e)}).catch(l=>{i&&i(l)});return}return setTimeout(function(){t&&t(a),r.manager.itemEnd(e)},0),a}const o={};o.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",o.headers=this.requestHeader;const c=fetch(e,o).then(function(l){return l.blob()}).then(function(l){return createImageBitmap(l,Object.assign(r.options,{colorSpaceConversion:"none"}))}).then(function(l){return di.add(e,l),t&&t(l),r.manager.itemEnd(e),l}).catch(function(l){i&&i(l),di.remove(e),r.manager.itemError(e),r.manager.itemEnd(e)});di.add(e,c),r.manager.itemStart(e)}}const bl="\\[\\]\\.:\\/",px=new RegExp("["+bl+"]","g"),vl="[^"+bl+"]",mx="[^"+bl.replace("\\.","")+"]",gx=/((?:WC+[\/:])*)/.source.replace("WC",vl),bx=/(WCOD+)?/.source.replace("WCOD",mx),vx=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",vl),xx=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",vl),_x=new RegExp("^"+gx+bx+vx+xx+"$"),yx=["material","materials","bones","map"];class Mx{constructor(e,t,n){const i=n||st.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,i)}getValue(e,t){this.bind();const n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(e,t)}setValue(e,t){const n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,r=n.length;i!==r;++i)n[i].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}}class st{constructor(e,t,n){this.path=t,this.parsedPath=n||st.parseTrackName(t),this.node=st.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new st.Composite(e,t,n):new st(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(px,"")}static parseTrackName(e){const t=_x.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){const r=n.nodeName.substring(i+1);yx.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){const n=function(r){for(let a=0;a<r.length;a++){const o=r[a];if(o.name===t||o.uuid===t)return o;const c=n(o.children);if(c)return c}return null},i=n(e.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)e[t++]=n[i]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,n=t.objectName,i=t.propertyName;let r=t.propertyIndex;if(e||(e=st.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let l=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===l){l=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(l!==void 0){if(e[l]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[l]}}const a=e[i];if(a===void 0){const l=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+l+"."+i+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?o=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(r!==void 0){if(i==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}c=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(c=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=i;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}st.Composite=Mx;st.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};st.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};st.prototype.GetterByBindingType=[st.prototype._getValue_direct,st.prototype._getValue_array,st.prototype._getValue_arrayElement,st.prototype._getValue_toArray];st.prototype.SetterByBindingTypeAndVersioning=[[st.prototype._setValue_direct,st.prototype._setValue_direct_setNeedsUpdate,st.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[st.prototype._setValue_array,st.prototype._setValue_array_setNeedsUpdate,st.prototype._setValue_array_setMatrixWorldNeedsUpdate],[st.prototype._setValue_arrayElement,st.prototype._setValue_arrayElement_setNeedsUpdate,st.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[st.prototype._setValue_fromArray,st.prototype._setValue_fromArray_setNeedsUpdate,st.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:qc}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=qc);class Sx{constructor(e){this.stream=null,this.mirrored=!1,this.ready=!1,this.video=e,e.setAttribute("playsinline",""),e.muted=!0,e.autoplay=!0}async start(){if(!window.isSecureContext)throw"insecure";if(!navigator.mediaDevices?.getUserMedia)throw"unsupported";try{this.stream=await navigator.mediaDevices.getUserMedia({audio:!1,video:{facingMode:{ideal:"environment"},width:{ideal:1280},height:{ideal:720},frameRate:{ideal:30,max:30}}})}catch(i){const r=i?.name;throw r==="NotAllowedError"||r==="SecurityError"?"denied":r==="NotFoundError"||r==="OverconstrainedError"?"notfound":"unknown"}this.video.srcObject=this.stream,await this.video.play().catch(()=>{}),await new Promise(i=>{if(this.video.videoWidth)return i();this.video.addEventListener("loadedmetadata",()=>i(),{once:!0})});const t=this.stream.getVideoTracks()[0].getSettings().facingMode,n=matchMedia("(pointer: coarse)").matches;this.mirrored=t==="user"||!t&&!n,this.video.classList.toggle("mirrored",this.mirrored),this.ready=!0}stop(){this.stream?.getTracks().forEach(e=>e.stop()),this.stream=null,this.ready=!1}layout(){const e=window.innerWidth,t=window.innerHeight,n=this.video.videoWidth||e,i=this.video.videoHeight||t,r=Math.max(e/n,t/i);return{vw:n,vh:i,sw:e,sh:t,scale:r,ox:(n*r-e)/2,oy:(i*r-t)/2}}displayVFov(e){const t=this.layout(),n=e*Math.PI/360,r=t.vw>=t.vh?Math.tan(n)*(t.vh/t.vw):Math.tan(n),a=t.sh/(t.vh*t.scale);return 2*Math.atan(r*a)*180/Math.PI}videoFocalPx(e){const t=this.video.videoWidth||1280,n=this.video.videoHeight||720,i=e*Math.PI/360,r=t>=n?Math.tan(i)*(n/t):Math.tan(i);return n/2/r}videoToNdc(e,t,n=this.layout()){const r=(this.mirrored?1-e:e)*n.vw*n.scale-n.ox,a=t*n.vh*n.scale-n.oy;return[r/n.sw*2-1,1-a/n.sh*2]}sampleGrid(e,t){if(!this.ready)return null;this.grid||(this.grid=document.createElement("canvas"),this.grid.width=e,this.grid.height=t);const n=this.grid.getContext("2d",{willReadFrequently:!0});if(!n)return null;const i=this.layout();return n.imageSmoothingQuality="high",n.save(),this.mirrored&&(n.translate(e,0),n.scale(-1,1)),n.drawImage(this.video,i.ox/i.scale,i.oy/i.scale,i.sw/i.scale,i.sh/i.scale,0,0,e,t),n.restore(),n.getImageData(0,0,e,t).data}sampleLight(){if(!this.ready)return null;this.probe||(this.probe=document.createElement("canvas"),this.probe.width=8,this.probe.height=8);const e=this.probe.getContext("2d",{willReadFrequently:!0});if(!e)return null;e.drawImage(this.video,0,0,8,8);const t=e.getImageData(0,0,8,8).data;let n=0,i=0,r=0;for(let o=0;o<t.length;o+=4)n+=t[o],i+=t[o+1],r+=t[o+2];const a=t.length/4;return n/=a*255,i/=a*255,r/=a*255,{lum:.2126*n+.7152*i+.0722*r,r:n,g:i,b:r}}}const wx=new R(0,0,1),Ax=new at(-Math.sqrt(.5),0,0,Math.sqrt(.5)),oa=new Xt,No=new at;class Ex{constructor(){this.quaternion=new at,this.angularVel=new R,this.hasOrientation=!1,this.permission="unsupported",this.dragMode=!1,this.dragBlocked=!1,this.raw=new at,this.yawOffset=0,this.pendingRecenter=!0,this.lastEventAt=0,this.alpha=0,this.beta=90,this.gamma=0,this.dragYaw=-Math.PI/2,this.dragPitch=0,this.prevQ=new at,this.steps=0,this.accLP=9.81,this.accBase=9.81,this.lastStepAt=0,this.stepArmed=!0,this.recenterHeading=0}async requestPermission(){const e=window.DeviceOrientationEvent,t=window.DeviceMotionEvent;try{if(e&&typeof e.requestPermission=="function"){const n=await e.requestPermission();t&&typeof t.requestPermission=="function"&&await t.requestPermission().catch(()=>"denied"),this.permission=n==="granted"?"granted":"denied"}else"DeviceOrientationEvent"in window&&(this.permission="granted")}catch{this.permission="denied"}return this.permission==="granted"&&this.listen(),this.permission}listen(){window.addEventListener("deviceorientation",e=>{e.alpha==null&&e.beta==null||(this.alpha=e.alpha??0,this.beta=e.beta??0,this.gamma=e.gamma??0,this.lastEventAt=performance.now(),this.hasOrientation=!0)}),window.addEventListener("devicemotion",e=>{const t=e.accelerationIncludingGravity;if(!t||t.x==null)return;const n=Math.hypot(t.x??0,t.y??0,t.z??0);this.detectStep(n)})}detectStep(e){this.accLP+=(e-this.accLP)*.35,this.accBase+=(e-this.accBase)*.02;const t=this.accLP-this.accBase,n=performance.now();this.stepArmed&&t>1.2&&n-this.lastStepAt>320?(this.steps++,this.lastStepAt=n,this.stepArmed=!1,this.onStep?.()):t<.3&&(this.stepArmed=!0)}enableDrag(e){this.dragMode=!0;let t=null,n=0,i=0;e.addEventListener("pointerdown",r=>{this.hasOrientation||this.dragBlocked||(t=r.pointerId,n=r.clientX,i=r.clientY)}),window.addEventListener("pointermove",r=>{t===r.pointerId&&(this.dragYaw+=(r.clientX-n)*.005,this.dragPitch=Ce.clamp(this.dragPitch+(r.clientY-i)*.005,-1.45,1.45),n=r.clientX,i=r.clientY)}),window.addEventListener("pointerup",r=>{t===r.pointerId&&(t=null)})}setDragPitch(e){this.dragPitch=e}recenter(e=0){this.pendingRecenter=!0,this.recenterHeading=e,this.hasOrientation||(this.dragYaw=-Math.PI/2-e)}get stale(){return this.hasOrientation&&performance.now()-this.lastEventAt>2e3}update(e){if(this.prevQ.copy(this.quaternion),this.hasOrientation){const t=Math.PI/180,n=(screen.orientation?.angle??window.orientation??0)*t;if(oa.set(this.beta*t,this.alpha*t,-this.gamma*t,"YXZ"),this.raw.setFromEuler(oa).multiply(Ax).multiply(No.setFromAxisAngle(wx,-n)),this.pendingRecenter){const i=new R(0,0,-1).applyQuaternion(this.raw);this.yawOffset=Math.atan2(i.z,i.x)-this.recenterHeading,this.pendingRecenter=!1}No.setFromAxisAngle(new R(0,1,0),this.yawOffset),this.quaternion.copy(No).multiply(this.raw)}else this.pendingRecenter=!1,oa.set(this.dragPitch,this.dragYaw,0,"YXZ"),this.quaternion.setFromEuler(oa);if(e>0){const t=this.prevQ.clone().invert().multiply(this.quaternion),n=2*Math.acos(Ce.clamp(t.w,-1,1)),i=Math.sqrt(1-t.w*t.w)||1;this.angularVel.set(t.x/i,t.y/i,t.z/i).multiplyScalar(Math.min(n/e,20))}}pitchDeg(){const e=new R(0,0,-1).applyQuaternion(this.quaternion);return Math.asin(Ce.clamp(e.y,-1,1))*180/Math.PI}}class Tx{constructor(e){this.scene=new rd,this.pixelRatio=2,this.gl=new uv({canvas:e,alpha:!0,antialias:!1,powerPreference:"high-performance",preserveDrawingBuffer:!1}),this.gl.setClearColor(0,0),this.gl.outputColorSpace=Lt,this.camera=new Kt(60,innerWidth/innerHeight,.03,80),this.scene.add(this.camera),this.resize()}setPixelRatio(e){this.pixelRatio=e,this.resize()}setVFov(e){Math.abs(this.camera.fov-e)>.05&&(this.camera.fov=e,this.camera.updateProjectionMatrix())}resize(){const e=innerWidth,t=innerHeight;this.gl.setPixelRatio(Math.min(window.devicePixelRatio||1,this.pixelRatio)),this.gl.setSize(e,t,!1),this.camera.aspect=e/t,this.camera.updateProjectionMatrix()}render(){this.gl.render(this.scene,this.camera)}}const bn={cobalt:"#00539B",cream:"#FCFAF0",petalDeep:"#FF8FB1",branch:"#4A3B36",glow:"#FFE7B8"},kc=.12,Rx={high:{pixelRatio:2,maxFalling:600,maxResting:900,handHz:20,sparkles:!0,branchDetail:1},medium:{pixelRatio:1.5,maxFalling:420,maxResting:650,handHz:16,sparkles:!0,branchDetail:.8},low:{pixelRatio:1,maxFalling:280,maxResting:420,handHz:12,sparkles:!1,branchDetail:.55}};class Cx{constructor(){this.level="high",this.batterySaver=!1,this.fps=60,this.frames=0,this.acc=0,this.goodFor=0,this.order=["low","medium","high"]}get settings(){return Rx[this.batterySaver?"low":this.level]}setBatterySaver(e){this.batterySaver=e,this.onChange?.(e?"low":this.level)}tick(e){if(this.frames++,this.acc+=e,this.acc<2)return;this.fps=this.frames/this.acc,this.frames=0;const t=this.acc;if(this.acc=0,this.batterySaver)return;const n=this.order.indexOf(this.level);this.fps<27&&n>0?(this.level=this.order[n-1],this.goodFor=0,this.onChange?.(this.level)):this.fps>50?(this.goodFor+=t,this.goodFor>8&&n<2&&(this.level=this.order[n+1],this.goodFor=0,this.onChange?.(this.level))):this.goodFor=0}}const Px={length:26,width:2.5,wallHeight:2.77,stoneWallHeight:2.4,gateOpeningWidth:.9},Lx={eyeHeightMin:1.2,eyeHeightMax:1.8,eyeHeightDefault:1.45,strideMeters:.62},Ix={longEdgeFovDeg:67},Dx=[{id:"F",side:"orange",x0:0,x1:2,width:2,height:2.4,y0:.2,landmark:!0,note:"Lời giới thiệu"},{id:"A1",side:"orange",x0:2,x1:4.5,width:2.5,height:2.4,y0:.2,landmark:!0,note:"Phần A (chia 4 đoạn làm mốc)"},{id:"A2",side:"orange",x0:4.5,x1:7,width:2.5,height:2.4,y0:.2,landmark:!0,note:"Phần A (chia 4 đoạn làm mốc)"},{id:"A3",side:"orange",x0:7,x1:9.5,width:2.5,height:2.4,y0:.2,landmark:!0,note:"Phần A (chia 4 đoạn làm mốc)"},{id:"A4",side:"orange",x0:9.5,x1:12,width:2.5,height:2.4,y0:.2,landmark:!0,note:"Phần A (chia 4 đoạn làm mốc)"},{id:"C1",side:"orange",x0:12,x1:13,width:1,height:2.4,y0:.2,note:"nền xanh đặc – không làm mốc"},{id:"C2",side:"orange",x0:13,x1:14,width:1,height:2.4,y0:.2},{id:"C3",side:"orange",x0:14,x1:15,width:1,height:2.4,y0:.2},{id:"C4",side:"orange",x0:15,x1:16,width:1,height:2.4,y0:.2,landmark:!0},{id:"C5",side:"orange",x0:16,x1:17,width:1,height:2.4,y0:.2},{id:"C6",side:"orange",x0:17,x1:18,width:1,height:2.4,y0:.2},{id:"C7",side:"orange",x0:18,x1:19,width:1,height:2.4,y0:.2},{id:"C8",side:"orange",x0:19,x1:20,width:1,height:2.4,y0:.2,landmark:!0},{id:"C9",side:"orange",x0:20,x1:21,width:1,height:2.4,y0:.2},{id:"D11",side:"orange",x0:21,x1:26,width:5,height:2.4,y0:.2,landmark:!0,note:"Khu tương tác, bảng Tết Nguyên Đán 1953"},{id:"B1",side:"stone",x0:0,x1:.85,width:.85,height:2.4,y0:.3},{id:"B2",side:"stone",x0:.85,x1:3.85,width:3,height:2.4,y0:.3,landmark:!0},{id:"B3",side:"stone",x0:3.85,x1:4.7,width:.85,height:1.8,y0:.3},{id:"B4",side:"stone",x0:4.7,x1:5.2,width:.5,height:1.2,y0:1,note:"tab năm – không làm mốc"},{id:"B5",side:"stone",x0:5.2,x1:6.2,width:1,height:2,y0:.3},{id:"B6",side:"stone",x0:6.2,x1:7.2,width:1,height:1.6,y0:.3},{id:"B7",side:"stone",x0:7.2,x1:7.7,width:.5,height:1.2,y0:1,note:"tab năm – không làm mốc"},{id:"B8",side:"stone",x0:7.7,x1:8.7,width:1,height:2,y0:.3},{id:"B9",side:"stone",x0:8.7,x1:9.7,width:1,height:1.6,y0:.3},{id:"B10",side:"stone",x0:9.7,x1:10.2,width:.5,height:1.2,y0:1,note:"tab năm – không làm mốc"},{id:"B11",side:"stone",x0:10.2,x1:11.2,width:1,height:2,y0:.3},{id:"B12",side:"stone",x0:11.2,x1:11.7,width:.5,height:1.2,y0:1,note:"tab năm – không làm mốc"},{id:"B13",side:"stone",x0:11.7,x1:12.7,width:1,height:2,y0:.3},{id:"B14",side:"stone",x0:12.7,x1:13.7,width:1,height:1.6,y0:.3},{id:"B15",side:"stone",x0:13.7,x1:14.7,width:1,height:2,y0:.3},{id:"B16",side:"stone",x0:14.7,x1:15.7,width:1,height:1.6,y0:.3},{id:"B17",side:"stone",x0:15.7,x1:16.2,width:.5,height:1.2,y0:1,note:"tab năm – không làm mốc"},{id:"B18",side:"stone",x0:16.2,x1:17.2,width:1,height:2,y0:.3},{id:"B19",side:"stone",x0:17.2,x1:17.7,width:.5,height:1.2,y0:1,note:"tab năm – không làm mốc"},{id:"B20",side:"stone",x0:17.7,x1:18.7,width:1,height:2,y0:.3},{id:"B21",side:"stone",x0:18.7,x1:19.7,width:1,height:1.6,y0:.3},{id:"B22",side:"stone",x0:19.7,x1:20.2,width:.5,height:1.2,y0:1,note:"tab năm – không làm mốc"},{id:"B23",side:"stone",x0:20.2,x1:21.2,width:1,height:2,y0:.3},{id:"B24",side:"stone",x0:21.2,x1:21.7,width:.5,height:1.2,y0:1,note:"tab năm – không làm mốc"},{id:"B25",side:"stone",x0:21.7,x1:22.7,width:1,height:2,y0:.3},{id:"B26",side:"stone",x0:22.7,x1:23.2,width:.5,height:1.2,y0:1,note:"tab năm – không làm mốc"},{id:"B27",side:"stone",x0:23.2,x1:24.2,width:1,height:2,y0:.3},{id:"B28",side:"stone",x0:24.2,x1:25.2,width:1,height:1.6,y0:.3}],Nx=[{id:"floor",type:"plane",axis:"y",value:0,restSurface:!0},{id:"wall-orange",type:"plane",axis:"z",value:1.25,normal:-1},{id:"wall-stone",type:"plane",axis:"z",value:-1.25,normal:1},{id:"gable-entry",type:"plane",axis:"x",value:0,normal:1},{id:"gable-end",type:"plane",axis:"x",value:26,normal:-1},{id:"table-D14",type:"aabb",min:[22,0,.55],max:[25,1,1.25],restSurface:!0,note:"Bàn D14 3 x 0,7 x cao 1,0 m"},{id:"real-peach-tree",type:"cylinder",center:[23.5,0,.9],radius:1.3,yMin:1,yMax:4,soft:!0,note:"Cây đào thật cao 3 m trên bàn – vùng hoa ảo mờ đi [vị trí x CẦN ĐO, hồ sơ ghi ≈24]"}],Ux=[],Fx=[{id:"canopy-1",x:-2.8,y:2.78,z:1.25,reach:2.75,seed:173},{id:"canopy-2",x:-1.95,y:2.815,z:-1.25,reach:2.75,seed:210},{id:"canopy-3",x:-1.1,y:2.8499999999999996,z:1.25,reach:2.75,seed:247},{id:"canopy-4",x:-.25,y:2.78,z:-1.25,reach:2.75,seed:284},{id:"canopy-5",x:.6,y:2.815,z:1.25,reach:2.75,seed:321},{id:"canopy-6",x:1.45,y:2.8499999999999996,z:-1.25,reach:2.75,seed:358},{id:"canopy-7",x:2.3,y:2.78,z:1.25,reach:2.75,seed:395},{id:"canopy-8",x:3.15,y:2.815,z:-1.25,reach:2.75,seed:432},{id:"canopy-9",x:4,y:2.8499999999999996,z:1.25,reach:2.75,seed:469},{id:"canopy-10",x:4.85,y:2.78,z:-1.25,reach:2.75,seed:506},{id:"canopy-11",x:5.7,y:2.815,z:1.25,reach:2.75,seed:543},{id:"canopy-12",x:6.55,y:2.8499999999999996,z:-1.25,reach:2.75,seed:580},{id:"canopy-13",x:7.4,y:2.78,z:1.25,reach:2.75,seed:617},{id:"canopy-14",x:8.25,y:2.815,z:-1.25,reach:2.75,seed:654},{id:"canopy-15",x:9.1,y:2.8499999999999996,z:1.25,reach:2.75,seed:691},{id:"canopy-16",x:9.95,y:2.78,z:-1.25,reach:2.75,seed:728},{id:"canopy-17",x:10.8,y:2.815,z:1.25,reach:2.75,seed:765},{id:"canopy-18",x:11.65,y:2.8499999999999996,z:-1.25,reach:2.75,seed:802},{id:"canopy-19",x:12.5,y:2.78,z:1.25,reach:2.75,seed:839},{id:"canopy-20",x:13.35,y:2.815,z:-1.25,reach:2.75,seed:876},{id:"canopy-21",x:14.2,y:2.8499999999999996,z:1.25,reach:2.75,seed:913},{id:"canopy-22",x:15.05,y:2.78,z:-1.25,reach:2.75,seed:950},{id:"canopy-23",x:15.9,y:2.815,z:1.25,reach:2.75,seed:987},{id:"canopy-24",x:16.75,y:2.8499999999999996,z:-1.25,reach:2.75,seed:1024},{id:"canopy-25",x:17.6,y:2.78,z:1.25,reach:2.75,seed:1061},{id:"canopy-26",x:18.45,y:2.815,z:-1.25,reach:2.75,seed:1098},{id:"canopy-27",x:19.3,y:2.8499999999999996,z:1.25,reach:2.75,seed:1135},{id:"canopy-28",x:20.15,y:2.78,z:-1.25,reach:2.75,seed:1172},{id:"canopy-29",x:21,y:2.815,z:1.25,reach:2.75,seed:1209},{id:"canopy-30",x:21.85,y:2.8499999999999996,z:-1.25,reach:2.75,seed:1246},{id:"canopy-31",x:22.7,y:2.78,z:1.25,reach:2.75,seed:1283},{id:"canopy-32",x:23.55,y:2.815,z:-1.25,reach:2.75,seed:1320},{id:"canopy-33",x:24.4,y:2.8499999999999996,z:1.25,reach:2.75,seed:1357},{id:"canopy-34",x:25.25,y:2.78,z:-1.25,reach:2.75,seed:1394},{id:"canopy-35",x:26.1,y:2.815,z:1.25,reach:2.75,seed:1431},{id:"canopy-36",x:26.95,y:2.8499999999999996,z:-1.25,reach:2.75,seed:1468}],Ox={corridor:Px,user:Lx,camera:Ix,panels:Dx,colliders:Nx,exclusionZones:Ux,branchAnchors:Fx},kx=[[0,0,2.5],[1.5,0,4],[4,0,5],[7,0,5.4],[10,0,6.5],[12,0,8.5],[12.6,0,11]],Bx={position:[12.6,0,12],arriveRadius:2},zx=.22,Hx={waypoints:kx,gate:Bx,ribbonWidth:zx},ut=Ox,wi=Hx,Gx=ut.corridor.width,pt=Gx/2,Ln=ut.corridor.length,Bc=ut.panels.filter(s=>s.landmark);function Vx(s){return(s.x0+s.x1)/2}class Wx{constructor(){this.position=new R(.6,ut.user.eyeHeightDefault,0),this.sigma=.5,this.lastFix=null,this.enabled=!0,this.target=this.position.clone()}onStep(e){if(!this.enabled)return;const t=new R(e.x,0,e.z);if(t.lengthSq()<.04)return;t.normalize();const n=ut.user.strideMeters;this.target.x+=t.x*n*.95,this.target.z+=t.z*n*.25,this.clamp(),this.sigma=Math.min(3,this.sigma+.06)}fixAtPanel(e){this.target.x=Vx(e);const t=Math.min(1,ut.corridor.width-.6);this.target.z=e.side==="orange"?pt-t:-pt+t,this.clamp(),this.position.copy(this.target),this.sigma=.3,this.lastFix=e.id}fixAbsolute(e,t,n,i=1){const r=Ce.clamp(i,0,1);this.target.x=Ce.lerp(this.target.x,e,r),this.target.z=Ce.lerp(this.target.z,t,r),n!==void 0&&(this.target.y=Ce.clamp(n,ut.user.eyeHeightMin,ut.user.eyeHeightMax)),this.clamp(),this.sigma=.25}setX(e){this.target.x=e,this.clamp(),this.position.copy(this.target)}setEyeHeight(e){this.target.y=Ce.clamp(e,ut.user.eyeHeightMin,ut.user.eyeHeightMax)}clamp(){this.target.x=Ce.clamp(this.target.x,.3,Ln-.3),this.target.z=Ce.clamp(this.target.z,-pt+.35,pt-.35)}update(e){this.position.lerp(this.target,1-Math.exp(-e*6))}}const Ut={minNormalY:.97,minCameraHeight:.9,maxCameraHeight:2.4,mergeTolerance:.06,minSamples:10,minSpan:.5,strongSamples:30,strongSpan:1,floorTolerance:.1,cameraWindow:10,evidenceWindow:3,maxGap:.6,minSpread:.35},Xx=16;class qx{constructor(){this.tiers=[],this.camera=[],this.now=0}reset(){this.tiers.length=0,this.camera.length=0,this.now=0}observeCamera(e,t){if(!Number.isFinite(e)||!Number.isFinite(t))return;this.now=t,this.tiers=this.tiers.filter(i=>t-i.last<=Ut.maxGap);const n=this.camera[this.camera.length-1];for(!n||t-n.t>=.25?this.camera.push({y:e,t}):e>n.y&&(n.y=e);this.camera.length&&t-this.camera[0].t>Ut.cameraWindow;)this.camera.shift()}addHit(e,t,n,i,r){if(![e,t,n,i,r].every(Number.isFinite)||t<Ut.minNormalY)return!1;let a=null,o=Ut.mergeTolerance;for(const c of this.tiers){const l=Math.abs(c.y-e);l<=o&&(o=l,a=c)}if(a)n-a.countedAt>=.025&&(a.n++,a.countedAt=n),a.y+=(e-a.y)/Math.min(a.n,200),a.last=n,a.points=a.points.filter(c=>n-c.t<=Ut.evidenceWindow),a.points.some(c=>Math.hypot(c.x-i,c.z-r)<.12)||a.points.push({x:i,z:r,t:n});else{if(this.tiers.length>=Xx){let c=0;for(let l=1;l<this.tiers.length;l++)this.tiers[l].last<this.tiers[c].last&&(c=l);this.tiers.splice(c,1)}this.tiers.push({y:e,n:1,first:n,last:n,countedAt:n,points:[{x:i,z:r,t:n}]})}return!0}get cameraY(){let e=-1/0;for(const t of this.camera)t.y>e&&(e=t.y);return e}lowest(e,t){const n=this.cameraY;let i=null;for(const r of this.tiers){if(this.now-r.last>Ut.maxGap||r.n<e||r.last-r.first<t)continue;const a=r.points.filter(c=>this.now-c.t<=Ut.evidenceWindow);if(a.length<3||!a.some(c=>a.some(l=>Math.hypot(c.x-l.x,c.z-l.z)>=Ut.minSpread)))continue;const o=n-r.y;o<Ut.minCameraHeight||o>Ut.maxCameraHeight||(i===null||r.y<i)&&(i=r.y)}return i}get floorY(){return this.lowest(Ut.minSamples,Ut.minSpan)}get confirmedFloorY(){return this.lowest(Ut.strongSamples,Ut.strongSpan)}classify(e){const t=this.floorY;return t!==null?e>t+Ut.floorTolerance?"raised":e>=t-Ut.floorTolerance?"floor":"pending":this.cameraY-e<Ut.minCameraHeight?"raised":"pending"}}const jx=[[0,0],[0,-.35],[-.35,-.2],[.35,-.2],[0,-.75]],Yx=8,Kx=.35,$x=2,eu=16579312,Jx=14832959;class Qx{constructor(e,t,n){this.renderer=e,this.world=t,this.supported=!1,this.session=null,this.placed=!1,this.status="scanning",this.detector=new qx,this.sources=[],this.refSpace=null,this.anchor=null,this.anchorGen=0,this.anchorPending=!1,this.placement=new _e,this.placedPos=new R,this.placedQ=new at,this.floorY=0,this.correctAfter=0,this.wantStatus="scanning",this.wantSince=0,this.camPos=new R,this.camFwd=new R(0,0,-1),this.canPlace=!1;const i=new fl(.07,.09,40).rotateX(-Math.PI/2);this.reticleMat=new $t({color:eu,transparent:!0,opacity:.9}),this.reticle=new $e(i,this.reticleMat),this.reticle.matrixAutoUpdate=!1,this.reticle.visible=!1,n.add(this.reticle)}async detect(){try{this.supported=!!(navigator.xr&&await navigator.xr.isSessionSupported("immersive-ar"))}catch{this.supported=!1}return this.supported}async start(e){if(!navigator.xr)return!1;const t=await navigator.xr.requestSession("immersive-ar",{requiredFeatures:["hit-test"],optionalFeatures:["dom-overlay","anchors","local-floor","depth-sensing"],domOverlay:{root:e},depthSensing:{usagePreference:["cpu-optimized"],dataFormatPreference:["luminance-alpha"]}});this.session=t,this.renderer.xr.enabled=!0,this.renderer.xr.setReferenceSpaceType("local"),await this.renderer.xr.setSession(t),this.refSpace=this.renderer.xr.getReferenceSpace();const n=await t.requestReferenceSpace("viewer");return this.sources=await this.createSources(t,n),this.resetPlacement(),e.addEventListener("beforexrselect",i=>{i.target?.closest?.("button, a, input, label, .sheet-backdrop, .ob")&&i.preventDefault()}),t.addEventListener("select",()=>this.onSelect()),t.addEventListener("end",()=>{for(const i of this.sources)i.source.cancel();this.sources=[],this.dropAnchor(),this.session=null,this.renderer.xr.enabled=!1,this.world.matrixAutoUpdate=!0,this.world.matrix.identity(),this.world.position.set(0,0,0),this.world.quaternion.identity(),this.world.visible=!0,this.reticle.visible=!1,this.onEnd?.()}),!0}async createSources(e,t){const n=([r,a])=>{const o=new XRRay({x:0,y:0,z:0,w:1},{x:r,y:a,z:-1,w:0});return Promise.resolve(e.requestHitTestSource?.({space:t,offsetRay:o})).catch(()=>{})};return(await Promise.all(jx.map(n))).flatMap((r,a)=>r?[{source:r,center:a===0}]:[])}resetPlacement(){this.placed=!1,this.canPlace=!1,this.reticle.visible=!1,this.detector.reset(),this.dropAnchor(),this.world.matrixAutoUpdate=!1,this.world.visible=!1,this.wantStatus="scanning",this.status="scanning",this.onStatus?.("scanning")}replace(){this.session&&this.resetPlacement()}onSelect(){if(this.placed)return;if(!this.canPlace||!this.reticle.visible){this.status==="notFloor"&&this.onRejected?.();return}const e=Math.atan2(-this.camFwd.z,this.camFwd.x);this.placedPos.setFromMatrixPosition(this.reticle.matrix),this.placedQ.setFromAxisAngle(new R(0,1,0),e),this.floorY=this.placedPos.y,this.placed=!0,this.applyPlacement(),this.world.visible=!0,this.reticle.visible=!1,this.correctAfter=0,this.setStatus("placed"),this.onPlaced?.()}applyPlacement(){this.placement.compose(this.placedPos,this.placedQ,new R(1,1,1)),this.world.matrix.copy(this.placement),this.world.matrixWorldNeedsUpdate=!0,this.dropAnchor(),this.anchorPending=!0}dropAnchor(){this.anchorGen++,this.anchorPending=!1,this.anchor?.delete?.(),this.anchor=null}createAnchor(e){this.anchorPending=!1;const t=this.anchorGen,{x:n,y:i,z:r}=this.placedPos;try{e.createAnchor?.(new XRRigidTransform({x:n,y:i,z:r}),this.refSpace)?.then(a=>{t===this.anchorGen?this.anchor=a:a.delete?.()}).catch(()=>{})}catch{}}frame(e,t=performance.now()){if(!e||!this.refSpace)return;const n=t/1e3,i=e.getViewerPose(this.refSpace);if(!i||i.emulatedPosition){this.canPlace=!1,this.reticle.visible=!1;return}if(i){const{position:a,orientation:o}=i.transform;this.camPos.set(a.x,a.y,a.z),this.camFwd.set(0,0,-1).applyQuaternion(new at(o.x,o.y,o.z,o.w)),this.detector.observeCamera(a.y,n)}const r=this.scan(e,n);if(!this.placed)this.updateReticle(r,n);else if(this.correctFloor(n),this.anchorPending&&this.createAnchor(e),this.anchor){const a=e.getPose(this.anchor.anchorSpace,this.refSpace);if(a){const{x:o,y:c,z:l}=a.transform.position;this.world.matrix.compose(new R(o,c,l),this.placedQ,new R(1,1,1)),this.world.matrixWorldNeedsUpdate=!0}}}scan(e,t){let n=null;return this.sources.forEach(({source:i,center:r})=>{e.getHitTestResults(i).slice(0,1).forEach(a=>{const o=a.getPose(this.refSpace);if(!o)return;const{position:c,orientation:l}=o.transform,h=1-2*(l.x*l.x+l.z*l.z);if(Math.hypot(c.x-this.camPos.x,c.z-this.camPos.z)>Yx)return;const u=this.detector.addHit(c.y,h,t,c.x,c.z);r&&u&&(n=new R(c.x,c.y,c.z))})}),n}updateReticle(e,t){const n=this.detector.floorY,i=e?this.detector.classify(e.y):null;let r=null,a="scanning";i==="raised"?(r=e,a="notFloor"):i==="floor"&&(r=e.setY(n),a="ready"),this.canPlace=a==="ready",this.reticle.visible=!!r,r&&this.reticle.matrix.makeTranslation(r.x,r.y,r.z),this.reticleMat.color.setHex(a==="notFloor"?Jx:eu),a!==this.wantStatus&&(this.wantStatus=a,this.wantSince=t),(t-this.wantSince>=Kx||a==="ready")&&this.setStatus(a)}correctFloor(e){if(e<this.correctAfter)return;const t=this.detector.confirmedFloorY;if(t===null)return;const i=t-this.floorY<-.12;i&&(this.floorY=this.placedPos.y=t,this.applyPlacement(),i&&(this.correctAfter=e+$x,this.onFloorChanged?.()))}setStatus(e){this.wantStatus=e,e!==this.status&&(this.status=e,this.onStatus?.(e))}end(){this.session?.end().catch(()=>{})}}const ke=36,_t=64,Zx=.6,e_=2.8,t_=10,n_=150,i_=Math.floor(_t*.82),tu=5,ca=6,nu=35,s_=.55,r_=.7,Ws=.15,a_=3,o_=8,Xs=Ce.clamp,qs=new R;function c_(s,e,t,n){for(let i=0;i<_t;i++){const r=1-(i+.5)/_t*2;for(let a=0;a<ke;a++)qs.set((a+.5)/ke*2-1,r,.5).applyMatrix4(e).applyQuaternion(t).normalize(),s[i*ke+a]=qs.y<-.02?n/-qs.y*Math.hypot(qs.x,qs.z):1/0}}class l_{constructor(){this.mask=new Float32Array(ke*_t),this.Y=new Float32Array(ke*_t),this.Cb=new Float32Array(ke*_t),this.Cr=new Float32Array(ke*_t),this.target=new Uint8Array(ke*_t),this.scratch=new Uint8Array(ke*_t),this.stack=new Int32Array(ke*_t),this.model=null,this.candidate=null,this.candidateTime=0}get ready(){return!!this.model}reset(){this.model=null,this.candidate=null,this.candidateTime=0,this.mask.fill(0)}update(e,t,n){this.toYCbCr(e);const i=this.pickSeeds(t);if(n=Xs(n,0,.25),i.length>=t_?this.learn(i,n):(this.candidate=null,this.candidateTime=0),!this.model)return;this.grow(i,t);const r=1-Math.exp(-n*o_);for(let a=0;a<this.mask.length;a++)this.mask[a]=this.target[a]?this.mask[a]+(1-this.mask[a])*r:0}sample(e,t){if(!this.model||!Number.isFinite(e)||!Number.isFinite(t)||Math.abs(e)>1||Math.abs(t)>1)return 0;const n=Xs((e*.5+.5)*ke-.5,0,ke-1.001),i=Xs((.5-t*.5)*_t-.5,0,_t-1.001),r=n|0,a=i|0,o=n-r,c=i-a,l=a*ke+r,h=this.mask,u=h[l]+(h[l+1]-h[l])*o,d=h[l+ke]+(h[l+ke+1]-h[l+ke])*o;return u+(d-u)*c}toYCbCr(e){for(let t=0;t<_t;t++)for(let n=0;n<ke;n++){let i=0,r=0,a=0,o=0;for(let l=Math.max(0,t-1);l<=Math.min(_t-1,t+1);l++)for(let h=Math.max(0,n-1);h<=Math.min(ke-1,n+1);h++){const u=(l*ke+h)*4;i+=e[u],r+=e[u+1],a+=e[u+2],o++}i/=o,r/=o,a/=o;const c=t*ke+n;this.Y[c]=.299*i+.587*r+.114*a,this.Cb[c]=-.169*i-.331*r+.5*a,this.Cr[c]=.5*i-.419*r-.081*a}}pickSeeds(e){const t=[];for(let n=Math.floor(_t*.55);n<i_;n++)for(let i=Math.floor(ke*.18);i<ke*.82;i++){const r=n*ke+i;e[r]>=Zx&&e[r]<=e_&&t.push(r)}return t}learn(e,t){const{Y:n,Cb:i,Cr:r}=this,a=(w,T,M,C)=>Math.abs(i[w]-M)<ca&&Math.abs(r[w]-C)<ca&&Math.abs(n[w]-T)<nu,o=Math.max(1,Math.floor(e.length/n_));let c=-1,l=0;for(let w=0;w<e.length;w+=o){const T=e[w];let M=0;for(let C=0;C<e.length;C+=o)a(e[C],n[T],i[T],r[T])&&M++;M>l&&(l=M,c=T)}if(c<0)return;let h=n[c],u=i[c],d=r[c],f=0,g=0,b=0,m=0;for(let w=0;w<4;w++){let T=0,M=0,C=0;f=g=b=m=0;for(const D of e)a(D,h,u,d)&&(f++,T+=n[D],M+=i[D],C+=r[D],g+=n[D]*n[D],b+=i[D]*i[D],m+=r[D]*r[D]);if(!f)return;h=T/f,u=M/f,d=C/f}if(f/e.length<s_){this.candidate=null,this.candidateTime=0;return}const p=Math.sqrt(Math.max(0,g/f-h*h)),y=Math.sqrt(Math.max(0,Math.max(b/f-u*u,m/f-d*d))),v={y:h,cb:u,cr:d,tolY:Xs(p*2.5,30,70),tolC:Xs(y*2.5,6,14)},_=this.model;if(_&&Math.abs(_.cb-u)<_.tolC&&Math.abs(_.cr-d)<_.tolC&&Math.abs(_.y-h)<_.tolY)this.candidate=null,this.candidateTime=0,_.y+=(h-_.y)*Ws,_.cb+=(u-_.cb)*Ws,_.cr+=(d-_.cr)*Ws,_.tolY+=(v.tolY-_.tolY)*Ws,_.tolC+=(v.tolC-_.tolC)*Ws;else{const w=this.candidate;(!w||Math.abs(w.cb-u)>ca||Math.abs(w.cr-d)>ca||Math.abs(w.y-h)>nu)&&(this.candidate=v,this.candidateTime=0),this.candidateTime+=t,this.candidateTime>=(_?a_:r_)&&(this.model=v,this.mask.fill(0),this.candidate=null,this.candidateTime=0)}}matches(e){const t=this.model;return Math.abs(this.Cb[e]-t.cb)<t.tolC&&Math.abs(this.Cr[e]-t.cr)<t.tolC&&Math.abs(this.Y[e]-t.y)<t.tolY}grow(e,t){const{target:n,stack:i,scratch:r}=this;n.fill(0);let a=0;for(const c of e)this.matches(c)&&(n[c]=1,i[a++]=c);const o=c=>{n[c]||!Number.isFinite(t[c])||t[c]>tu||!this.matches(c)||(n[c]=1,i[a++]=c)};for(;a>0;){const c=i[--a],l=c%ke;l>0&&o(c-1),l<ke-1&&o(c+1),c>=ke&&o(c-ke),c<ke*(_t-1)&&o(c+ke)}r.set(n);for(let c=0;c<n.length;c++){if(r[c]||!Number.isFinite(t[c])||t[c]>tu||!this.matches(c))continue;const l=c%ke;(l>0?r[c-1]:0)+(l<ke-1?r[c+1]:0)+(c>=ke?r[c-ke]:0)+(c<ke*(_t-1)?r[c+ke]:0)>=3&&(n[c]=1)}}}const h_="modulepreload",u_=function(s,e){return new URL(s,e).href},iu={},Ad=function(e,t,n){let i=Promise.resolve();if(t&&t.length>0){const a=document.getElementsByTagName("link"),o=document.querySelector("meta[property=csp-nonce]"),c=o?.nonce||o?.getAttribute("nonce");i=Promise.allSettled(t.map(l=>{if(l=u_(l,n),l in iu)return;iu[l]=!0;const h=l.endsWith(".css"),u=h?'[rel="stylesheet"]':"";if(!!n)for(let g=a.length-1;g>=0;g--){const b=a[g];if(b.href===l&&(!h||b.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${l}"]${u}`))return;const f=document.createElement("link");if(f.rel=h?"stylesheet":h_,h||(f.as="script"),f.crossOrigin="",f.href=l,c&&f.setAttribute("nonce",c),document.head.appendChild(f),h)return new Promise((g,b)=>{f.addEventListener("load",g),f.addEventListener("error",()=>b(new Error(`Unable to preload CSS for ${l}`)))})}))}function r(a){const o=new Event("vite:preloadError",{cancelable:!0});if(o.payload=a,window.dispatchEvent(o),!o.defaultPrevented)throw a}return i.then(a=>{for(const o of a||[])o.status==="rejected"&&r(o.reason);return e().catch(r)})};class su{constructor(){this.y=0,this.init=!1}filter(e,t){return this.y=this.init?t*e+(1-t)*this.y:e,this.init=!0,this.y}get value(){return this.y}reset(){this.init=!1}}class Uo{constructor(e=1.2,t=.6,n=1){this.minCutoff=e,this.beta=t,this.dCutoff=n,this.x=new su,this.dx=new su,this.last=-1}alpha(e,t){return 1/(1+1/(2*Math.PI*e)/t)}filter(e,t){const n=this.last<0,i=n?1/30:Math.max(.001,t-this.last);this.last=t;const r=this.x.value,a=n?0:(e-r)/i,o=this.dx.filter(a,this.alpha(this.dCutoff,i)),c=this.minCutoff+this.beta*Math.abs(o);return this.x.filter(e,this.alpha(c,i))}reset(){this.x.reset(),this.dx.reset(),this.last=-1}}class d_{constructor(e=1.2,t=.6){this.f=[new Uo,new Uo,new Uo],this.f.forEach(n=>{n.minCutoff=e,n.beta=t})}filter(e,t,n,i,r){return r.x=this.f[0].filter(e,i),r.y=this.f[1].filter(t,i),r.z=this.f[2].filter(n,i),r}reset(){this.f.forEach(e=>e.reset())}}const f_=[[0,1,2,3,4],[0,5,6,7,8],[9,10,11,12],[13,14,15,16],[0,17,18,19,20]],p_=[[5,9],[9,13],[13,17],[0,5],[0,17],[1,5]],ru=[8,12,16,20];class m_{constructor(){this.status="off",this.active=!1,this.grabbing=!1,this.hz=18,this.paused=!1,this.points=Array.from({length:21},()=>new R),this.palm=new R,this.palmVel=new R,this.cupCenter=new R,this.palmQuat=new at,this.depth=0,this.landmarker=null,this.filters=Array.from({length:21},()=>new d_(1.4,.8)),this.vel=Array.from({length:21},()=>new R),this.prev=Array.from({length:21},()=>new R),this.lastDetect=0,this.lastSeen=0,this.lastVideoTime=-1,this.detectAt=0,this.cols=[],this.pts=Array.from({length:21},()=>new R),this.busy=!1}async init(){if(!(this.status==="loading"||this.status==="ready")){this.status="loading";try{const e=await Ad(()=>import("./vision_bundle-7Scx6tXS.js"),[],import.meta.url),t=new URL("./",document.baseURI).href,n={wasmLoaderPath:t+"mediapipe/vision_wasm_internal.js",wasmBinaryPath:t+"mediapipe/vision_wasm_internal.wasm"},i=r=>e.HandLandmarker.createFromOptions(n,{baseOptions:{modelAssetPath:t+"models/hand_landmarker.task",delegate:r},runningMode:"VIDEO",numHands:2,minHandDetectionConfidence:.55,minHandPresenceConfidence:.5,minTrackingConfidence:.5});try{this.landmarker=await i("GPU")}catch{this.landmarker=await i("CPU")}this.status="ready"}catch(e){console.warn("[hand] không tải được Hand Landmarker",e),this.status="error"}}}update(e,t,n){if(this.landmarker&&t.ready&&!this.busy&&!this.paused&&e-this.lastDetect>=1e3/this.hz){const a=t.video;if(a.currentTime!==this.lastVideoTime&&a.readyState>=2){this.lastVideoTime=a.currentTime,this.lastDetect=e,this.busy=!0;try{const o=this.landmarker.detectForVideo(a,e);this.consume(o.landmarks,e,t,n)}catch(o){console.warn("[hand]",o)}this.busy=!1}}const i=this.active;if(this.active&&e-this.lastSeen>300&&(this.active=!1,this.grabbing=!1,this.filters.forEach(a=>a.reset())),i!==this.active&&this.onChange?.(this.active,this.grabbing),!this.active)return;const r=Math.min(.08,(e-this.detectAt)/1e3);for(let a=0;a<21;a++)this.pts[a].copy(this.points[a]).addScaledVector(this.vel[a],r);this.buildColliders()}consume(e,t,n,i){if(!e||!e.length)return;const r=n.layout(),a=Math.tan(Ce.degToRad(i.fov/2)),o=a*i.aspect,c=r.sh/2/a;let l=null,h=0;const u=(x,A,F)=>Math.hypot((x[A].x-x[F].x)*r.vw*r.scale,(x[A].y-x[F].y)*r.vh*r.scale);for(const x of e){const A=Math.max(u(x,0,9),u(x,5,17)*1.25);A>h&&(h=A,l=x)}if(!l)return;const d=c*.09/Math.max(1,u(l,0,9)),f=c*.072/Math.max(1,u(l,5,17)),g=Math.min(d,f);if(g>.9||g<.08)return;this.depth=g;const b=g*r.vw*r.scale/c,m=t/1e3;i.updateMatrixWorld();const p={x:0,y:0,z:0},y=!this.active,v=y?1:Math.max(.02,(t-this.detectAt)/1e3);for(let x=0;x<21;x++){const A=l[x],[F,B]=n.videoToNdc(A.x,A.y,r),k=Math.max(.05,g+A.z*b),j=new R(F*o*k,B*a*k,-k).applyMatrix4(i.matrixWorld);this.filters[x].filter(j.x,j.y,j.z,m,p),this.prev[x].copy(this.points[x]),this.points[x].set(p.x,p.y,p.z),y?this.vel[x].set(0,0,0):this.vel[x].subVectors(this.points[x],this.prev[x]).divideScalar(v).clampLength(0,4)}this.detectAt=t,this.lastSeen=t;const _=this.active;this.active=!0;const w=this.points,T=w[0].distanceTo(w[9])||.09;let M=0;for(const x of ru)M+=w[x].distanceTo(w[0]);M/=ru.length*T;const C=w[4].distanceTo(w[8])/T,D=this.grabbing;this.grabbing?this.grabbing=!(M>1.62&&C>.42):this.grabbing=M<1.38||C<.28,(D!==this.grabbing||!_)&&(this.grabbing&&navigator.vibrate&&navigator.vibrate(12),this.onChange?.(this.active,this.grabbing))}buildColliders(){const e=this.pts,t=[];this.palm.set(0,0,0);for(const c of[0,5,9,13,17,9])this.palm.add(e[c]);this.palm.divideScalar(6),this.palmVel.set(0,0,0);for(const c of[0,5,9,13,17])this.palmVel.add(this.vel[c]);this.palmVel.divideScalar(5),t.push({kind:"sphere",c:this.palm.clone(),r:.042,vel:this.palmVel.clone(),palm:!0});const n=(c,l,h)=>t.push({kind:"capsule",a:e[c].clone(),b:e[l].clone(),r:h,vel:this.vel[c].clone().add(this.vel[l]).multiplyScalar(.5)});for(const c of f_)for(let l=1;l<c.length;l++)n(c[l-1],c[l],.011);for(const[c,l]of p_)n(c,l,.014);this.cols=t;const i=new R;for(const c of[4,8,12,16,20])i.add(e[c]);i.divideScalar(5),this.cupCenter.copy(this.palm).lerp(i,.45);const r=new R().subVectors(e[17],e[5]).normalize(),a=new R().subVectors(e[9],e[0]).normalize(),o=new R().crossVectors(r,a).normalize();r.crossVectors(a,o),this.palmQuat.setFromRotationMatrix(new _e().makeBasis(r,a,o))}colliders(){return this.active?this.cols:[]}cup(){return this.active?{center:this.cupCenter,radius:.06,quaternion:this.palmQuat,grabbing:this.grabbing,vel:this.palmVel}:null}get renderPoints(){return this.pts}}const li=class li{constructor(e){const t=li.SEGS.length*2+li.PALM.length;this.pos=new Float32Array(t*9);const n=new bt;n.setAttribute("position",new Et(this.pos,3).setUsage(tr)),this.mesh=new $e(n,new $t({colorWrite:!1,depthWrite:!0,side:tn})),this.mesh.renderOrder=-1,this.mesh.frustumCulled=!1,this.mesh.visible=!1,e.add(this.mesh)}update(e,t){if(this.mesh.visible=e.active,!e.active)return;const n=e.renderPoints;let i=0;const r=g=>{this.pos[i++]=g.x,this.pos[i++]=g.y,this.pos[i++]=g.z},a=new R,o=new R,c=new R,l=new R,h=new R,u=new R,d=new R;for(const[g,b]of li.SEGS){const m=n[g],p=n[b];c.subVectors(p,m);const y=c.length()||1e-4;c.divideScalar(y),o.subVectors(t,m).normalize(),a.crossVectors(c,o).normalize().multiplyScalar(.012);const v=.008;l.copy(m).addScaledVector(c,-v).add(a),h.copy(m).addScaledVector(c,-v).sub(a),u.copy(p).addScaledVector(c,v).add(a),d.copy(p).addScaledVector(c,v).sub(a),r(l),r(h),r(u),r(h),r(d),r(u)}for(const[g,b,m]of li.PALM)r(n[g]),r(n[b]),r(n[m]);const f=this.mesh.geometry.getAttribute("position");f.needsUpdate=!0}};li.SEGS=[[1,2],[2,3],[3,4],[5,6],[6,7],[7,8],[9,10],[10,11],[11,12],[13,14],[14,15],[15,16],[17,18],[18,19],[19,20]],li.PALM=[[0,1,5],[0,5,9],[0,9,13],[0,13,17],[1,2,5]];let zc=li;class g_{constructor(){this.kind="manual"}async start(){}stop(){}get panels(){return Bc}confirm(e){const t=Bc.find(n=>n.id===e);t&&this.onFix?.({panel:t,yawToNormal:0,distance:1,confidence:1})}}const Hc=4,b_=2,Pt={petalPink:[0,1,2,3],blossomPink:[4,5],blossomBrand:6,petalBrand:7};let la=null;function xl(s,e,t,n,i){s.beginPath(),s.moveTo(0,t*.5),s.bezierCurveTo(-e*i,t*.25,-e*.62,-t*.28,-e*.32,-t*.47),s.quadraticCurveTo(-e*.12,-t*.52,0,-t*(.5-n)),s.quadraticCurveTo(e*.12,-t*.52,e*.32,-t*.47),s.bezierCurveTo(e*.62,-t*.28,e*i,t*.25,0,t*.5),s.closePath()}function v_(s,e,t,n,i){const r=["#FFD3E1","#FFC1D6","#FFCBDB","#FFB8CE"][i],a=["#FF9DBC","#FF8FB1","#F58AAE","#FF8FB1"][i],o=n*[.62,.7,.58,.66][i],c=n*[.86,.8,.9,.84][i];s.save(),s.translate(e,t),s.rotate([0,.15,-.1,.06][i]),xl(s,o,c,[.1,.07,.12,.05][i],[.55,.62,.5,.58][i]);const l=s.createRadialGradient(0,c*.42,2,0,-c*.1,c*.75);l.addColorStop(0,a),l.addColorStop(.45,r),l.addColorStop(1,"#FFF1F5"),s.fillStyle=l,s.fill(),s.globalAlpha=.18,s.strokeStyle=a,s.lineWidth=n*.01;for(let h=-2;h<=2;h++)s.beginPath(),s.moveTo(0,c*.45),s.quadraticCurveTo(h*o*.12,0,h*o*.2,-c*.38),s.stroke();s.restore()}function Fo(s,e,t,n,i,r){s.save(),s.translate(e,t),s.rotate(r*.6);for(let a=0;a<5;a++){s.save(),s.rotate(a/5*Math.PI*2),s.translate(0,-n*.22);const o=n*.42,c=n*.46;if(xl(s,o,c,.08,.6),i)s.fillStyle=bn.cream,s.fill(),s.lineWidth=n*.028,s.strokeStyle=bn.cobalt,s.stroke(),s.lineWidth=n*.012,s.beginPath(),s.moveTo(0,c*.4),s.lineTo(0,-c*.05),s.stroke();else{const l=s.createRadialGradient(0,c*.45,1,0,0,c*.7);l.addColorStop(0,r?"#F27FA6":"#FF8FB1"),l.addColorStop(.5,"#FFC1D6"),l.addColorStop(1,"#FFF0F5"),s.fillStyle=l,s.fill()}s.restore()}for(let a=0;a<12;a++){const o=a/12*Math.PI*2+r,c=n*(.1+a%3*.025);s.strokeStyle=i?bn.cobalt:"#C2456F",s.lineWidth=n*.01,s.beginPath(),s.moveTo(0,0),s.lineTo(Math.cos(o)*c,Math.sin(o)*c),s.stroke(),s.fillStyle=i?bn.cobalt:"#F6C34A",s.beginPath(),s.arc(Math.cos(o)*c,Math.sin(o)*c,n*.018,0,Math.PI*2),s.fill()}s.fillStyle=i?bn.cobalt:"#B8335F",s.beginPath(),s.arc(0,0,n*.035,0,Math.PI*2),s.fill(),s.restore()}function x_(s,e,t,n){s.save(),s.translate(e,t);const i=n*.6,r=n*.84;xl(s,i,r,.09,.56),s.fillStyle=bn.cream,s.fill(),s.lineWidth=n*.035,s.strokeStyle=bn.cobalt,s.stroke(),s.lineWidth=n*.014,s.beginPath(),s.moveTo(0,r*.42),s.quadraticCurveTo(i*.05,0,0,-r*.25),s.stroke(),s.restore()}function Ga(){if(la)return la;const s=256,e=document.createElement("canvas");e.width=s*Hc,e.height=s*b_;const t=e.getContext("2d");for(let c=0;c<4;c++)v_(t,s*c+s/2,s/2,s*.92,c);Fo(t,s*0+s/2,s+s/2,s*.95,!1,0),Fo(t,s*1+s/2,s+s/2,s*.95,!1,1),Fo(t,s*2+s/2,s+s/2,s*.95,!0,0),x_(t,s*3+s/2,s+s/2,s*.92);const n=new Da(e);n.colorSpace=Lt,n.generateMipmaps=!0,n.minFilter=In,n.anisotropy=2;const i=document.createElement("canvas");i.width=i.height=64;const r=i.getContext("2d"),a=r.createRadialGradient(32,32,2,32,32,30);a.addColorStop(0,"rgba(40,20,30,0.55)"),a.addColorStop(1,"rgba(40,20,30,0)"),r.fillStyle=a,r.fillRect(0,0,64,64);const o=new Da(i);return la={canvas:e,texture:n,shadow:o},la}function __(s){return{sx:s%Hc*256,sy:Math.floor(s/Hc)*256,s:256}}class y_{constructor(){this.strength=.22,this.base=new R(.05,0,.02),this.gusts=[],this.t=0}addGust(e,t,n=.5,i=.7){this.gusts.length>12&&this.gusts.shift(),this.gusts.push({pos:e.clone(),vel:t.clone().clampLength(0,3),radius:n,life:i,maxLife:i})}update(e){this.t+=e;for(let t=this.gusts.length-1;t>=0;t--){const n=this.gusts[t];n.life-=e,n.pos.addScaledVector(n.vel,e*.6),n.radius+=e*.5,n.life<=0&&this.gusts.splice(t,1)}}sample(e,t,n,i){const r=this.t,a=this.strength;i.set(this.base.x+a*(Math.sin(.7*e+.9*r)+.6*Math.sin(1.3*n-.6*r+1.7)),a*.35*Math.sin(.8*t+1.1*r+e),this.base.z+a*(Math.sin(.9*n+.5*r+2.1)+.5*Math.sin(1.7*e+.8*r)));for(const o of this.gusts){const c=e-o.pos.x,l=t-o.pos.y,h=n-o.pos.z,u=c*c+l*l+h*h,d=o.radius*o.radius;if(u<d){const f=(1-u/d)*(o.life/o.maxLife);i.addScaledVector(o.vel,f)}}return i}}const M_=new R,ha=new R;function au(s,e,t){if(s.kind==="sphere")return t.copy(s.c),e.distanceTo(s.c);ha.subVectors(s.b,s.a);const n=ha.lengthSq()||1e-6,i=Ce.clamp(M_.subVectors(e,s.a).dot(ha)/n,0,1);return t.copy(s.a).addScaledVector(ha,i),e.distanceTo(t)}const ln=ut.colliders.find(s=>s.id==="table-D14"),Ai=ut.colliders.find(s=>s.id==="real-peach-tree");function ua(s,e){return ln&&ln.min&&ln.max&&s>=ln.min[0]&&s<=ln.max[0]&&e>=ln.min[2]&&e<=ln.max[2]?ln.max[1]:0}function S_(s,e){if(!ln||!ln.min||!ln.max)return!1;const[t,n,i]=ln.min,[r,a,o]=ln.max;if(s.x<t||s.x>r||s.z<i||s.z>o||s.y<n||s.y>a-.02)return!1;const c=s.x-t,l=r-s.x,h=s.z-i,u=Math.min(c,l,h);return u===c?(s.x=t-.005,e.x=Math.min(e.x,0)):u===l?(s.x=r+.005,e.x=Math.max(e.x,0)):(s.z=i-.005,e.z=Math.min(e.z,0)),!0}function w_(s){if(!Ai||!Ai.center||s.y<(Ai.yMin??0)||s.y>(Ai.yMax??99))return 1;const e=Math.hypot(s.x-Ai.center[0],s.z-Ai.center[2]),t=Ai.radius??1;return Ce.smoothstep(e,t*.7,t*1.05)*.85+.15}function A_(s){const e=pt-Math.abs(s);return Ce.smoothstep(e,.04,.38)}function Na(s){return new yn({uniforms:{map:{value:s},uLight:{value:new Ae(1,1,1)},uOpacity:{value:1},uCurl:{value:.18}},vertexShader:`
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
    `,transparent:!0,depthWrite:!1,depthTest:!0,side:tn})}const E_=new R,js=new R,is=new R,Ys=new at,ou=new Xt,jt=new R,da=new _e,Ks=new _e().makeScale(0,0,0),qn=new R,cu=.3;class T_{constructor(e,t={}){this.wind=new y_,this.density=1,this.speed=1,this.maxFalling=600,this.maxResting=900,this.readingMode=!1,this.reduceMotion=!1,this.lookUp=0,this.lookDown=0,this.enabled=!0,this.bounded=!0,this.sources=[],this.emitters=[],this.floorMask=null,this.heldCount=0,this.t=0,this.cursor=0,this.fallingCount=0,this.restingCount=0,this.stack=new Map,this.emitAcc=0,this.prevGrabbing=!1,this.firstFill=!0,this.handAcc=0;const n=this.cap=t.capacity??1600;this.pos=new Float32Array(n*3),this.vel=new Float32Array(n*3),this.rot=new Float32Array(n*3),this.spin=new Float32Array(n*3),this.size=new Float32Array(n),this.state=new Uint8Array(n),this.alpha=new Float32Array(n),this.phase=new Float32Array(n),this.cell=new Float32Array(n),this.tint=new Float32Array(n*4),this.born=new Float32Array(n),this.hold=new Float32Array(n*3),this.noCatch=new Float32Array(n);const{texture:i,shadow:r}=Ga(),a=new Cn(1,1,4,4);this.cellAttr=new hn(this.cell,1),this.tintAttr=new hn(this.tint,4),this.cellAttr.setUsage(tr),this.tintAttr.setUsage(tr),a.setAttribute("aCell",this.cellAttr),a.setAttribute("aTint",this.tintAttr),this.material=Na(i),this.mesh=new Qn(a,this.material,n),this.mesh.instanceMatrix.setUsage(tr),this.mesh.frustumCulled=!1,this.mesh.renderOrder=2;const o=new Cn(1,1).rotateX(-Math.PI/2),c=new $t({map:r,transparent:!0,depthWrite:!1,opacity:.32,color:0});this.shadows=new Qn(o,c,n),this.shadows.instanceMatrix.setUsage(tr),this.shadows.frustumCulled=!1,this.shadows.renderOrder=1;for(let l=0;l<n;l++)this.mesh.setMatrixAt(l,Ks),this.shadows.setMatrixAt(l,Ks);e.add(this.shadows,this.mesh)}setLight(e){this.material.uniforms.uLight.value.copy(e)}setVisible(e){this.mesh.visible=e,this.shadows.visible=e}clear(){this.state.fill(0),this.stack.clear(),this.firstFill=!0}stats(){return{falling:this.fallingCount,resting:this.restingCount,held:this.heldCount}}alloc(){for(let e=0;e<this.cap;e++){const t=(this.cursor+e)%this.cap;if(this.state[t]===0)return this.cursor=(t+1)%this.cap,t}return-1}spawn(e,t,n,i=0,r=-.3,a=0){const o=this.alloc();if(o<0)return-1;const c=o*3;this.pos[c]=e,this.pos[c+1]=t,this.pos[c+2]=n,this.vel[c]=i,this.vel[c+1]=r,this.vel[c+2]=a,this.rot[c]=Math.random()*6.28,this.rot[c+1]=Math.random()*6.28,this.rot[c+2]=Math.random()*6.28;const l=this.reduceMotion?.6:1.6;this.spin[c]=(Math.random()-.5)*l*2,this.spin[c+1]=(Math.random()-.5)*l,this.spin[c+2]=(Math.random()-.5)*l*2;const h=Math.random();let u,d;h<kc?(u=Math.random()<.55?Pt.petalBrand:Pt.blossomBrand,d=u===Pt.blossomBrand?.066:.044):h<kc+.16?(u=Pt.blossomPink[Math.random()*2|0],d=.056+Math.random()*.016):(u=Pt.petalPink[Math.random()*4|0],d=.036+Math.random()*.016),this.cell[o]=u,this.size[o]=d;const f=u===Pt.petalBrand||u===Pt.blossomBrand,g=f?1:.94+Math.random()*.1;return this.tint[o*4]=g,this.tint[o*4+1]=f?1:g*(.95+Math.random()*.06),this.tint[o*4+2]=f?1:g*(.96+Math.random()*.06),this.tint[o*4+3]=1,this.alpha[o]=0,this.phase[o]=Math.random()*100,this.born[o]=this.t,this.state[o]=1,o}stackKey(e,t){return Math.round(e/.12)<<12^Math.round((t+10)/.12)}rest(e,t){const n=e*3,i=this.stackKey(this.pos[n],this.pos[n+2]),r=(this.stack.get(i)??0)+1;this.stack.set(i,r),this.pos[n+1]=t+.003+Math.min(r*.0032,.045)+Math.random()*.002,this.rot[n]=-Math.PI/2+(Math.random()-.5)*.5,this.rot[n+2]=(Math.random()-.5)*.5,this.vel[n]=this.vel[n+1]=this.vel[n+2]=0,this.state[e]=2,this.born[e]=this.t}unrest(e){const t=e*3,n=this.stackKey(this.pos[t],this.pos[t+2]),i=this.stack.get(n)??0;i<=1?this.stack.delete(n):this.stack.set(n,i-1)}spawnAround(e,t,n){const i=js.set(t.x,0,t.z);i.lengthSq()<.01&&i.set(1,0,0),i.normalize();const r=jt.set(-i.z,0,i.x),a=.6+Math.random()*5.2,o=(Math.random()-.5)*3.2;let c=e.x+i.x*a+r.x*o,l=e.z+i.z*a+r.z*o;this.bounded&&(c=Ce.clamp(c,.1,Ln-.1),l=Ce.clamp(l,-pt+.12,pt-.12));const h=n?.3+Math.random()*3:2.5+Math.random()*.9;this.spawn(c,h,l,0,-.25*this.speed,0)}update(e,t,n,i){if(e=Math.min(e,.05),this.t+=e,this.wind.update(e),!this.enabled){this.setVisible(!1);return}this.setVisible(!0);const r=this.readingMode?.45:1,a=1+this.lookUp*.4-this.lookDown*.35,o=Math.round(this.maxFalling*this.density*r*a*(this.reduceMotion?.6:1));if(this.firstFill){for(let w=0;w<o*.7;w++)this.spawnAround(n,i,!0);for(let w=0;w<this.maxResting*.4;w++){const T=Math.random()*Math.PI*2,M=.4+Math.pow(Math.random(),.7)*4.5;let C=n.x+Math.cos(T)*M,D=n.z+Math.sin(T)*M*.6;this.bounded&&(C=Ce.clamp(C,.1,Ln-.1),D=Ce.clamp(D,-pt+.1,pt-.1));const x=this.spawn(C,0,D);x>=0&&(this.rest(x,this.bounded?ua(C,D):0),this.born[x]=this.t-5-Math.random()*5)}this.firstFill=!1}let c=Math.min(30,Math.max(0,o-this.fallingCount));for(const w of this.emitters)if(!(!w.points.length||w.rate<=0))for(this.emitAcc+=w.rate*e;this.emitAcc>=1&&c>0;){this.emitAcc-=1,c--;let T=w.points[Math.random()*w.points.length|0];for(let M=0;M<6&&Math.abs(T.x-n.x)>7;M++)T=w.points[Math.random()*w.points.length|0];this.spawn(T.x+(Math.random()-.5)*.1,T.y-.03,T.z+(Math.random()-.5)*.1,0,-.15,0)}const l=Math.ceil(o/90);for(let w=0;w<Math.min(c,l);w++)this.spawnAround(n,i,!1);const h=[];let u=null;for(const w of this.sources){if(!w.active)continue;h.push(...w.colliders());const T=w.cup?.();T&&(u=T)}const d=!!u?.grabbing,f=d&&!this.prevGrabbing,g=!d&&this.prevGrabbing;this.prevGrabbing=d;const b=u?Ys.copy(u.quaternion).invert().clone():null;let m=0;if(u)for(this.handAcc+=e*(d?.6:1.8);this.handAcc>=1;){this.handAcc-=1;const w=u.center;this.spawn(w.x+(Math.random()-.5)*.1,w.y+.28+Math.random()*.18,w.z+(Math.random()-.5)*.1,0,-.2,0)}this.fallingCount=0,this.restingCount=0,this.heldCount=0;let p=1/0,y=-1;const v=.42*this.speed,_=this.reduceMotion?.12:.32;for(let w=0;w<this.cap;w++){const T=this.state[w];if(T===0)continue;const M=w*3,C=E_.set(this.pos[M],this.pos[M+1],this.pos[M+2]);let D=this.alpha[w];if(T===1){this.fallingCount++,D=Math.min(1,D+e*1.5);const k=this.phase[w]+this.t;this.wind.sample(C.x,C.y,C.z,js);const j=js.x+Math.sin(k*1.7)*_,G=js.y-v*(.75+.25*Math.sin(k*2.3)),X=js.z+Math.cos(k*1.3)*_,z=Math.min(1,e*2.2);let te=0,ne=0,re=1;if(u&&!d){const we=u.center.x-C.x,O=u.center.z-C.z,$=C.y-u.center.y,ee=we*we+O*O;$>-.04&&$<.75&&ee<.2&&(re=.25,te=we*3.5,ne=O*3.5)}this.vel[M]+=(j*re+te-this.vel[M])*z,this.vel[M+1]+=(G-this.vel[M+1])*z,this.vel[M+2]+=(X*re+ne-this.vel[M+2])*z;for(const we of h){const O=au(we,C,is),$=this.size[w]*.45;if(O<we.r+$){if(we.kind==="sphere"&&we.palm&&u&&!d&&C.y>we.c.y+.01&&we.vel.lengthSq()<.36&&this.t>this.noCatch[w]&&this.heldCount+m<14){this.capture(w,C,u.center,b),m++;break}const ee=jt.subVectors(C,is);ee.lengthSq()<1e-8&&ee.set(0,1,0),ee.normalize(),C.copy(is).addScaledVector(ee,we.r+$+.002);const ae=this.vel[M]*ee.x+this.vel[M+1]*ee.y+this.vel[M+2]*ee.z;ae<0&&(this.vel[M]-=ae*ee.x*1.3,this.vel[M+1]-=ae*ee.y*1.3,this.vel[M+2]-=ae*ee.z*1.3),this.vel[M]+=we.vel.x*.75,this.vel[M+1]+=we.vel.y*.75,this.vel[M+2]+=we.vel.z*.75,this.spin[M]+=(Math.random()-.5)*3}}if(this.state[w]===3){this.pos[M]=C.x,this.pos[M+1]=C.y,this.pos[M+2]=C.z;continue}C.x+=this.vel[M]*e,C.y+=this.vel[M+1]*e,C.z+=this.vel[M+2]*e,jt.set(this.vel[M],this.vel[M+1],this.vel[M+2]),S_(C,jt)&&(this.vel[M]=jt.x,this.vel[M+2]=jt.z),this.rot[M]+=this.spin[M]*e,this.rot[M+1]+=this.spin[M+1]*e,this.rot[M+2]+=this.spin[M+2]*e;const Ee=this.bounded?ua(C.x,C.z):0;if(C.y<=Ee+.004&&(C.y=Ee,this.pos[M]=C.x,this.pos[M+2]=C.z,this.rest(w,Ee),C.y=this.pos[M+1]),this.bounded&&(Math.abs(C.z)>pt-.02||C.x<0||C.x>Ln)&&(this.state[w]=4),(Math.abs(C.x-n.x)>10||Math.abs(C.z-n.z)>10||C.y>6)&&(this.state[w]=0),u&&d&&this.state[w]===1&&this.t>this.noCatch[w]&&this.heldCount+m<14){const we=f?u.radius*1.8:u.radius;C.distanceTo(u.center)<we&&(this.capture(w,C,u.center,b),m++)}}else if(T===2){this.restingCount++,D=Math.min(1,D+e*2),this.t-this.born[w]<p&&(p=this.t-this.born[w]),(y<0||this.born[w]<this.born[y])&&(y=w);for(const k of h){const j=au(k,C,is),G=k.vel.length();if(j<k.r+.03&&(G>.12||j<k.r*.8)){this.unrest(w);const X=jt.subVectors(C,is).setY(0);X.lengthSq()<1e-6&&X.set(Math.random()-.5,0,Math.random()-.5),X.normalize();const z=.5+Math.min(1.4,G)*.9+Math.random()*.3;this.vel[M]=k.vel.x*.9+X.x*.5,this.vel[M+1]=z,this.vel[M+2]=k.vel.z*.9+X.z*.5,this.spin[M]=(Math.random()-.5)*8,this.spin[M+2]=(Math.random()-.5)*8,C.y+=.02,this.state[w]=1;break}}this.state[w]===2&&u&&f&&C.distanceTo(u.center)<u.radius*1.3&&this.heldCount+m<14&&(this.unrest(w),this.capture(w,C,u.center,b),m++),(Math.abs(C.x-n.x)>9||Math.abs(C.z-n.z)>9)&&(this.state[w]=4)}else if(T===3){const k=!!u&&!d&&u.vel.lengthSq()>1;if(!u||g||k){this.state[w]=1;const j=u?.vel;this.vel[M]=(j?.x??0)*.8+(Math.random()-.5)*.3,this.vel[M+1]=(j?.y??0)*.8+.55+Math.random()*.3,this.vel[M+2]=(j?.z??0)*.8+(Math.random()-.5)*.3,this.spin[M]=(Math.random()-.5)*6,this.noCatch[w]=this.t+1.2}else this.heldCount++,jt.set(this.hold[M],this.hold[M+1],this.hold[M+2]).applyQuaternion(u.quaternion),C.copy(u.center).add(jt),this.rot[M+1]+=e*.4}else T===4&&(D-=e*1.5,D<=0&&(this.pos[M+1]<1.2&&this.vel[M+1]===0&&this.unrest(w),this.state[w]=0,D=0));if(this.pos[M]=C.x,this.pos[M+1]=C.y,this.pos[M+2]=C.z,this.alpha[w]=D,this.state[w]===0){this.mesh.setMatrixAt(w,Ks),this.shadows.setMatrixAt(w,Ks);continue}let x=D;this.bounded&&(x*=A_(C.z)*w_(C));const A=C.distanceTo(n);x*=Ce.smoothstep(A,.12,.4);let F=1;if(this.floorMask&&C.y<cu&&this.state[w]!==3&&(!this.bounded||ua(C.x,C.z)===0)&&(qn.copy(C).applyMatrix4(t),F=Ce.lerp(this.floorMask.sample(qn.x,qn.y),1,Ce.smoothstep(C.y,.05,cu)),x*=F),this.readingMode&&this.state[w]!==3){qn.copy(C).applyMatrix4(t);const k=qn.x*qn.x*1.4+qn.y*qn.y;qn.z<1&&(x*=Ce.lerp(.12,1,Ce.smoothstep(k,.2,.75)))}this.tint[w*4+3]=x,ou.set(this.rot[M],this.rot[M+1],this.rot[M+2]),Ys.setFromEuler(ou);const B=this.size[w];if(da.compose(C,Ys,jt.set(B,B,B)),this.mesh.setMatrixAt(w,da),F>.3&&(this.state[w]===2||this.state[w]===4&&C.y<1.1)){const k=this.bounded?ua(C.x,C.z):0;Ys.identity(),da.compose(is.set(C.x+.004,k+.0015,C.z+.004),Ys,jt.set(B*1.25,1,B*1.25)),this.shadows.setMatrixAt(w,da)}else this.shadows.setMatrixAt(w,Ks)}if(this.restingCount>this.maxResting&&y>=0){let w=Math.min(12,this.restingCount-this.maxResting);for(let T=0;T<this.cap&&w>0;T++)this.state[T]===2&&this.t-this.born[T]>4&&(this.state[T]=4,w--)}m>0&&this.onGrab?.(m),this.mesh.instanceMatrix.needsUpdate=!0,this.shadows.instanceMatrix.needsUpdate=!0,this.tintAttr.needsUpdate=!0,this.cellAttr.needsUpdate=!0}capture(e,t,n,i){const r=e*3;jt.subVectors(t,n).clampLength(0,.045).applyQuaternion(i),this.hold[r]=jt.x,this.hold[r+1]=jt.y,this.hold[r+2]=jt.z,this.state[e]=3,this.alpha[e]=1}burst(e,t,n=.6){for(let i=0;i<t;i++){const r=Math.random()*Math.PI*2,a=Math.random()*.4;this.spawn(e.x+Math.cos(r)*.05,e.y,e.z+Math.sin(r)*.05,Math.cos(r)*a,n*Math.random(),Math.sin(r)*a)}}}const R_=3.15,fa=-6,Oo=ut.corridor.length+2,ko=pt+.15,ss=48;function C_(s){const e=Math.round((Oo-fa)*ss),t=Math.round(ko*2*ss),n=document.createElement("canvas");n.width=e,n.height=t;const i=n.getContext("2d"),r=m=>(m-fa)*ss,a=m=>(m+ko)*ss,o=document.createElement("canvas");o.width=o.height=32;const c=o.getContext("2d"),l=c.createRadialGradient(16,16,0,16,16,16);l.addColorStop(0,"rgba(0,0,0,1)"),l.addColorStop(1,"rgba(0,0,0,0)"),c.fillStyle=l,c.fillRect(0,0,32,32),i.globalAlpha=.16;const h=.42*ss;for(const m of s.spots)i.drawImage(o,r(m.x)-h/2,a(m.z)-h/2,h,h);i.globalAlpha=.5,i.strokeStyle="#000",i.lineCap="round";for(const m of s.limbs)i.lineWidth=m.width*ss,i.beginPath(),m.pts.forEach((p,y)=>y?i.lineTo(r(p.x),a(p.z)):i.moveTo(r(p.x),a(p.z))),i.stroke();i.globalAlpha=1,i.globalCompositeOperation="destination-in";const u=i.createLinearGradient(0,0,0,t);u.addColorStop(0,"rgba(0,0,0,0)"),u.addColorStop(.14,"rgba(0,0,0,1)"),u.addColorStop(.86,"rgba(0,0,0,1)"),u.addColorStop(1,"rgba(0,0,0,0)"),i.fillStyle=u,i.fillRect(0,0,e,t);const d=new Da(n);d.colorSpace=Lt,d.anisotropy=4;const f=new $t({map:d,transparent:!0,depthWrite:!1,side:tn,opacity:0}),g=new Cn(Oo-fa,ko*2).rotateX(-Math.PI/2),b=new $e(g,f);return b.position.set((fa+Oo)/2,R_,0),b.renderOrder=-1,b}function P_(s){let e=s>>>0||1;return()=>(e^=e<<13,e^=e>>>17,e^=e<<5,(e>>>0)%1e5/1e5)}function Bo(s,e,t,n,i,r,a){const o=s.computeFrenetFrames(e,!1),c=[],l=[],h=[],u=[],d=s.getLength();for(let g=0;g<=e;g++){const b=g/e,m=s.getPointAt(b),p=Ce.lerp(n,i,Math.pow(b,.8)),y=Ce.smoothstep(a+b*d,.05,r);for(let v=0;v<=t;v++){const _=v/t*Math.PI*2,w=new R().addScaledVector(o.normals[g],Math.cos(_)).addScaledVector(o.binormals[g],Math.sin(_));c.push(m.x+w.x*p,m.y+w.y*p,m.z+w.z*p),l.push(w.x,w.y,w.z),h.push(y)}}for(let g=0;g<e;g++)for(let b=0;b<t;b++){const m=g*(t+1)+b,p=m+t+1;u.push(m,p,m+1,p,p+1,m+1)}const f=new bt;return f.setAttribute("position",new Xe(c,3)),f.setAttribute("normal",new Xe(l,3)),f.setAttribute("aFade",new Xe(h,1)),f.setIndex(u),f}function L_(s){const e=[],t=[],n=[],i=[];let r=0;for(const o of s){const c=o.getAttribute("position"),l=o.getAttribute("normal"),h=o.getAttribute("aFade");for(let d=0;d<c.count;d++)e.push(c.getX(d),c.getY(d),c.getZ(d)),t.push(l.getX(d),l.getY(d),l.getZ(d)),n.push(h.getX(d));const u=o.getIndex();for(let d=0;d<u.count;d++)i.push(u.getX(d)+r);r+=c.count}const a=new bt;return a.setAttribute("position",new Xe(e,3)),a.setAttribute("normal",new Xe(t,3)),a.setAttribute("aFade",new Xe(n,1)),a.setIndex(i),a}const zo=new yn({uniforms:{uColor:{value:new Ae(bn.branch)},uOpacity:{value:0},uLight:{value:new Ae(1,1,1)}},vertexShader:`
    attribute float aFade; varying float vFade; varying vec3 vN;
    void main(){ vFade = aFade; vN = normalize(mat3(modelMatrix) * normal);
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0); }`,fragmentShader:`
    uniform vec3 uColor; uniform float uOpacity; uniform vec3 uLight; varying float vFade; varying vec3 vN;
    void main(){ float l = 0.62 + 0.38 * clamp(vN.y * 0.5 + 0.5, 0.0, 1.0);
      float a = vFade * uOpacity; if (a < 0.02) discard;
      gl_FragColor = vec4(uColor * l * uLight, a);
      #include <colorspace_fragment>
    }`,transparent:!0,depthWrite:!0});class I_{constructor(e){this.group=new yt,this.emitter={points:[],rate:0},this.budMat=new $t({color:14702719,transparent:!0,opacity:0}),this.leafMat=new $t({color:8825182,transparent:!0,opacity:0,side:tn}),this.sways=[],this.blossoms=[],this.details=[],this.t=0,this.visibility=0,this.blossomMat=Na(Ga().texture),this.blossomMat.uniforms.uCurl.value=0,this.blossomMat.depthWrite=!1;const t=ut.exclusionZones.filter(i=>i.forbid.includes("branches")),n={limbs:[],spots:[]};for(const i of ut.branchAnchors)t.some(a=>i.x>=a.min[0]&&i.x<=a.max[0])||this.build(i,n);this.shade=C_(n),this.group.add(this.shade),this.group.visible=!1,e.add(this.group)}setDetail(e){for(const t of this.blossoms)t.mesh.count=Math.round(t.full*Ce.clamp(e,.55,1));for(const t of this.details)t.visible=e>.7}build(e,t){const n=P_(e.seed),i=e.y,r=e.z>=0?-1:1,a=new R(e.x,i-.05,e.z-r*.3),o=new yt;o.position.copy(a);const c=new yt;o.add(c),this.group.add(o),this.sways.push({g:c,seed:e.seed});const l=n()<.5?1:-1,h=(X,z,te)=>new R(X,z,te),u=Math.min(e.reach,ut.corridor.width+.3),d=new rr([h(0,0,0),h(l*.15,.12,r*.5),h(l*(.35+n()*.25),.22+n()*.12,r*u*.55),h(l*(.6+n()*.35),.12+n()*.15,r*u*.82),h(l*(.85+n()*.35),-.12+n()*.12,r*u)]),f=[Bo(d,40,7,.085,.012,.55,0)],g=[],b=d.getLength(),m=(X,z)=>{t.limbs.push({pts:X.getPoints(8).map(te=>te.clone().add(a)),width:z})};m(d,.11);const p=(X,z,te,ne)=>{for(let re=0;re<ne;re++){const Ee=.3+re/ne*.65+n()*.04,we=X.getPointAt(Math.min(Ee,.97)),O=(re%2?1:-1)*(.22+n()*.3),$=new rr([we.clone(),we.clone().add(h(O*.5+l*.06,-.03+n()*.1,r*(.08+n()*.12))),we.clone().add(h(O+l*.1,-.14-n()*.2,r*(.18+n()*.28)))]);f.push(Bo($,8,4,.016,.004,.55,te+Ee*z));for(let ee=0;ee<=8;ee++)g.push($.getPointAt(.1+ee/8*.9))}},y=5+Math.floor(n()*2);for(let X=0;X<y;X++){const z=.24+X/y*.58+n()*.05,te=d.getPointAt(z),ne=X%2?1:-1,re=.95+n()*.6,Ee=new rr([te.clone(),te.clone().add(h(ne*re*.45,.05+n()*.06,r*re*.12)),te.clone().add(h(ne*re*.8,-.02-n()*.08,r*re*.25)),te.clone().add(h(ne*re,-.14-n()*.14,r*re*.34))]);f.push(Bo(Ee,18,5,.04,.008,.55,z*b)),m(Ee,.06),p(Ee,Ee.getLength(),z*b,6+Math.floor(n()*2))}p(d,b,0,7);for(let X=0;X<16;X++)g.push(d.getPointAt(.34+X/15*.66));for(const X of g)t.spots.push(X.clone().add(a));const v=new $e(L_(f),zo);for(const X of f)X.dispose();v.renderOrder=0,c.add(v);for(let X=g.length-1;X>0;X--){const z=Math.floor(n()*(X+1));[g[X],g[z]]=[g[z],g[X]]}const _=Math.round(g.length*2.8),w=new Cn(1,1),T=new Float32Array(_),M=new Float32Array(_*4);w.setAttribute("aCell",new hn(T,1)),w.setAttribute("aTint",new hn(M,4));const C=new Qn(w,this.blossomMat,_);C.renderOrder=3;const D=new _e,x=new at,A=new Xt,F=new dl(1,0),B=new Qn(F,this.budMat,Math.ceil(g.length/2)),k=new gd;k.moveTo(0,0),k.quadraticCurveTo(.45,.5,0,1),k.quadraticCurveTo(-.45,.5,0,0);const j=new Qn(new pl(k,4),this.leafMat,Math.ceil(g.length/3));let G=0;for(let X=0;X<_;X++){const te=g[X%g.length].clone().add(new R((n()-.5)*.2,(n()-.5)*.1,(n()-.5)*.2));A.set(Math.PI/2+(n()-.5)*1.2,n()*6.28,(n()-.5)*1.2),x.setFromEuler(A);const ne=n()<kc,re=ne?.14:.12+n()*.065;D.compose(te,x,new R(re,re,re)),C.setMatrixAt(X,D),T[X]=ne?Pt.blossomBrand:Pt.blossomPink[n()*2|0],M.set([1,1,1,1],X*4);const Ee=te.clone().add(a);X%3===0&&Ee.x>.1&&this.emitter.points.push(Ee)}for(let X=0;X<g.length;X++){const z=g[X].clone().add(new R((n()-.5)*.1,-.01,(n()-.5)*.1)),te=.007+n()*.004;if(D.compose(z,x.identity(),new R(te,te*1.3,te)),X%2===0&&B.setMatrixAt(X/2,D),X%3===0&&G<j.count){A.set(n()*1.2-.3,n()*6.28,n()*1.5),x.setFromEuler(A);const ne=.07+n()*.04;D.compose(z,x,new R(ne,ne,ne)),j.setMatrixAt(G++,D)}}j.count=G;for(const X of[C,B,j])X.computeBoundingSphere(),X.boundingSphere.radius+=.25;this.blossoms.push({mesh:C,full:_}),this.details.push(B,j),c.add(C,B,j)}update(e,t,n,i,r){this.t+=e,this.visibility+=(t-this.visibility)*Math.min(1,e*4);const a=this.visibility;this.group.visible=a>.01,zo.uniforms.uOpacity.value=a,zo.uniforms.uLight.value.copy(i),this.blossomMat.uniforms.uOpacity.value=a,this.blossomMat.uniforms.uLight.value.copy(i),this.budMat.opacity=a,this.leafMat.opacity=a*.9,this.shade.material.opacity=a*.38;const o=r?.004:.015;for(const c of this.sways)c.g.rotation.x=Math.sin(this.t*.9+c.seed)*o,c.g.rotation.y=Math.sin(this.t*.6+c.seed*2)*o*.7;this.emitter.rate=a>.3?(3+7*n)*a:0}}class D_{constructor(e){this.root=new yt,e.add(this.root),this.petals=new T_(this.root,{capacity:1600}),this.branches=new I_(this.root),this.petals.emitters.push(this.branches.emitter),this.guide=N_(),this.guide.visible=!1,this.root.add(this.guide)}setVisible(e){this.root.visible=e,this.petals.enabled=e}}function N_(){const s=new yt,e=new Pa({color:bn.cobalt,transparent:!0,opacity:.55}),t=new Pa({color:bn.cobalt,transparent:!0,opacity:.2}),n=ut.corridor.wallHeight,i=(o,c,l,h,u,d,f=e)=>{const g=new qh(new Fi(h-o,u-c,d-l)),b=new Sa(g,f);b.position.set((o+h)/2,(c+u)/2,(l+d)/2),s.add(b)},r=[];for(let o=0;o<=Ln;o+=1)r.push(o,0,-pt,o,0,pt);r.push(0,0,-pt,Ln,0,-pt,0,0,pt,Ln,0,pt,0,0,0,Ln,0,0);const a=new bt;a.setAttribute("position",new Xe(r,3)),s.add(new Sa(a,t)),i(0,0,pt,Ln,n,pt+.02,t),i(0,0,-pt-.02,Ln,ut.corridor.stoneWallHeight,-pt,t);for(const o of ut.panels){const c=o.side==="orange"?pt-.01:-pt+.05;i(o.x0+.01,o.y0,c-.005,o.x1-.01,o.y0+o.height,c+.005)}for(const o of ut.colliders)if(o.type==="aabb"&&o.min&&o.max&&i(o.min[0],o.min[1],o.min[2],o.max[0],o.max[1],o.max[2]),o.type==="cylinder"&&o.center&&o.radius){const c=new Sa(new qh(new hl(o.radius,o.radius,(o.yMax??3)-(o.yMin??0),16,1,!0)),t);c.position.set(o.center[0],((o.yMax??3)+(o.yMin??0))/2,o.center[2]),s.add(c)}return s}class U_{constructor(e,t){this.root=new yt,this.frame=new yt,this.progress=0,this.fp=[],this.parallax=new oe,this.t=0,this.frameW=.2,this.frameH=.35,e.add(this.root),t.add(this.frame);const n=wi.waypoints.map(O=>new R(O[0],.012,O[2]));n.push(new R(wi.gate.position[0],.012,wi.gate.position[2])),this.curve=new rr(n,!1,"catmullrom",.5),this.length=this.curve.getLength();const i=Math.max(64,Math.round(this.length*12)),r=wi.ribbonWidth,a=[],o=[],c=[];for(let O=0;O<=i;O++){const $=O/i,ee=this.curve.getPointAt($),ae=this.curve.getTangentAt($),Te=new R(-ae.z,0,ae.x).normalize();for(const ve of[-1,1])a.push(ee.x+Te.x*r*ve*1.6,ee.y,ee.z+Te.z*r*ve*1.6),o.push($*this.length,ve*.5+.5);if(O<i){const ve=O*2;c.push(ve,ve+1,ve+2,ve+1,ve+3,ve+2)}}const l=new bt;l.setAttribute("position",new Xe(a,3)),l.setAttribute("uv",new Xe(o,2)),l.setIndex(c),this.ribbonMat=new yn({uniforms:{uTime:{value:0},uProgress:{value:0},uLen:{value:this.length},uPink:{value:new Ae(bn.petalDeep)},uGold:{value:new Ae(bn.glow)},uOpacity:{value:1}},vertexShader:"varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0); }",fragmentShader:`
        uniform float uTime, uProgress, uLen, uOpacity; uniform vec3 uPink, uGold; varying vec2 vUv;
        void main(){
          float x = abs(vUv.y - 0.5) * 2.0;
          float core = exp(-x * x * 26.0);
          float halo = exp(-x * x * 5.0) * 0.28;
          float flow = 0.72 + 0.28 * sin((vUv.x - uTime * 1.1) * 3.0);
          float ahead = vUv.x - uProgress;
          float vis = smoothstep(-1.5, 0.4, ahead) * (1.0 - smoothstep(14.0, 22.0, ahead));
          vec3 c = mix(uPink, uGold, core * 0.8);
          float a = (core * flow + halo) * vis * uOpacity;
          gl_FragColor = vec4(c * a, a);
          #include <colorspace_fragment>
        }`,transparent:!0,depthWrite:!1,blending:ir});const h=new $e(l,this.ribbonMat);h.frustumCulled=!1,this.root.add(h);const{texture:u}=Ga(),d=Na(u);d.uniforms.uCurl.value=.08;const f=Math.round(this.length*14),g=new Cn(1,1,2,2),b=new Float32Array(f),m=new Float32Array(f*4);g.setAttribute("aCell",new hn(b,1)),g.setAttribute("aTint",new hn(m,4));const p=new Qn(g,d,f),y=new _e,v=new Xt,_=new at;for(let O=0;O<f;O++){const $=Math.random(),ee=this.curve.getPointAt($),ae=this.curve.getTangentAt($),Te=(Math.random()-.5)*r*3*Math.pow(Math.random(),.6);ee.x+=-ae.z*Te,ee.z+=ae.x*Te,ee.y=.004+Math.random()*.004,v.set(-Math.PI/2+(Math.random()-.5)*.4,0,Math.random()*6.28),_.setFromEuler(v);const ve=Math.random();b[O]=ve<.12?Pt.petalBrand:ve<.22?Pt.blossomPink[0]:Pt.petalPink[Math.random()*4|0];const Be=b[O]===Pt.blossomPink[0]?.05:.032+Math.random()*.012;y.compose(ee,_,new R(Be,Be,Be)),p.setMatrixAt(O,y),m.set([1,1,1,.92],O*4)}p.frustumCulled=!1,p.renderOrder=2,this.root.add(p);const w=Math.round(this.length*10),T=new Float32Array(w),M=new Float32Array(w*2),C=new Float32Array(w*3);for(let O=0;O<w;O++)T[O]=Math.random(),M[O*2]=(Math.random()-.5)*r*2.2,M[O*2+1]=Math.random();const D=new bt;D.setAttribute("position",new Et(C,3)),D.setAttribute("aU",new Et(T,1)),D.setAttribute("aOff",new Et(M,2));const x=256,A=new Float32Array(x*4);for(let O=0;O<x;O++){const $=O/(x-1),ee=this.curve.getPointAt($),ae=this.curve.getTangentAt($);A.set([ee.x,ee.z,ae.x,ae.z],O*4)}const F=new rl(A,x,1,fn,vn);F.minFilter=F.magFilter=Vt,F.needsUpdate=!0,this.sparkMat=new yn({uniforms:{uTime:{value:0},uLen:{value:this.length},uLut:{value:F},uProgress:{value:0},uPx:{value:1}},vertexShader:`
        attribute float aU; attribute vec2 aOff; uniform float uTime, uLen, uProgress, uPx; uniform sampler2D uLut;
        varying float vA;
        void main(){
          float u = fract(aU + uTime * 0.9 / uLen);
          vec4 s = texture2D(uLut, vec2(u, 0.5));
          vec2 n = normalize(vec2(-s.w, s.z));
          vec3 p = vec3(s.x + n.x * aOff.x, 0.03 + 0.06 * abs(sin(uTime * 2.0 + aOff.y * 30.0)), s.y + n.y * aOff.x);
          float ahead = u * uLen - uProgress;
          vA = smoothstep(-1.0, 0.5, ahead) * (1.0 - smoothstep(12.0, 18.0, ahead)) * (0.4 + 0.6 * abs(sin(uTime * 3.0 + aOff.y * 50.0)));
          vec4 mv = modelViewMatrix * vec4(p, 1.0);
          gl_PointSize = uPx * 9.0 / -mv.z;
          gl_Position = projectionMatrix * mv;
        }`,fragmentShader:`
        varying float vA;
        void main(){ vec2 c = gl_PointCoord - 0.5; float d = length(c);
          float a = smoothstep(0.5, 0.0, d) * vA; if (a < 0.02) discard;
          gl_FragColor = vec4(vec3(1.0, 0.93, 0.8) * a, a); }`,transparent:!0,depthWrite:!1,blending:ir}),this.sparks=new ud(D,this.sparkMat),this.sparks.frustumCulled=!1,this.root.add(this.sparks);const B=document.createElement("canvas");B.width=64,B.height=128;const k=B.getContext("2d"),j=k.createRadialGradient(32,84,1,32,84,31);j.addColorStop(0,"rgba(255,231,184,0.9)"),j.addColorStop(1,"rgba(255,193,214,0)"),k.fillStyle=j,k.fillRect(0,0,64,128),this.gateGlow=new dv(new od({map:new Da(B),transparent:!0,depthWrite:!1,blending:ir})),this.gateGlow.scale.set(ut.corridor.gateOpeningWidth*1.6,2.6,1),this.gateGlow.position.set(wi.gate.position[0],1.2,wi.gate.position[2]),this.root.add(this.gateGlow);const G=Na(u);G.depthTest=!1,G.uniforms.uCurl.value=.12;const X=30,z=new Cn(1,1,2,2);z.setAttribute("aCell",new hn(new Float32Array(X),1)),z.setAttribute("aTint",new hn(new Float32Array(X*4).fill(1),4)),this.framePetals=new Qn(z,G,X),this.framePetals.frustumCulled=!1,this.framePetals.renderOrder=10;const te=z.getAttribute("aCell");for(let O=0;O<X;O++){const $=Math.random(),ee=$<.12?Pt.petalBrand:$<.25?Pt.blossomPink[Math.random()*2|0]:Pt.petalPink[Math.random()*4|0];te.setX(O,ee),this.fp.push(this.edgeSpawn({x:0,y:0,vx:0,vy:0,rot:0,vr:0,s:0,cell:ee},!0))}this.frame.add(this.framePetals);const ne=18,re=new Cn(1,1,2,2),Ee=new Float32Array(ne),we=new Float32Array(ne*4).fill(1);re.setAttribute("aCell",new hn(Ee,1)),re.setAttribute("aTint",new hn(we,4)),this.frameClusters=new Qn(re,G,ne),this.frameClusters.frustumCulled=!1,this.frameClusters.renderOrder=9;for(let O=0;O<ne;O++)Ee[O]=O%7===0?Pt.blossomBrand:Pt.blossomPink[O%2];this.frame.add(this.frameClusters),this.layoutFrame(t)}layoutFrame(e){const n=Math.tan(Ce.degToRad(e.fov/2))*.5,i=n*e.aspect,r=[[-i,n,.9],[i,n,-.7],[i,-n*.7,2.6]],a=new _e,o=new at,c=new Xt,l=h=>Math.sin(h*12.9898)*43758.5453%1;for(let h=0;h<this.frameClusters.count;h++){const[u,d,f]=r[h%3],g=Math.floor(h/3),b=.012+g*.01,m=f+(l(h)-.5)*1.6,p=u-Math.sign(u)*Math.abs(Math.cos(m))*b*1.4+(l(h+7)-.5)*.02,y=d-Math.sign(d)*Math.abs(Math.sin(m))*b*1.4+(l(h+3)-.5)*.02;c.set((l(h+1)-.5)*.5,(l(h+2)-.5)*.5,l(h+4)*6.28),o.setFromEuler(c);const v=.018+Math.abs(l(h+5))*.016-g*.0015;a.compose(new R(p,y,-.5),o,new R(v,v,v)),this.frameClusters.setMatrixAt(h,a)}this.frameClusters.instanceMatrix.needsUpdate=!0,this.frameW=i,this.frameH=n}edgeSpawn(e,t=!1){const n=Math.random(),i=this.frameW||.2,r=this.frameH||.35;return n<.45?(e.x=-i*(.82+Math.random()*.25),e.y=t?(Math.random()*2-1)*r:r*1.05):n<.9?(e.x=i*(.82+Math.random()*.25),e.y=t?(Math.random()*2-1)*r:r*1.05):(e.x=(Math.random()*2-1)*i,e.y=r*(.85+Math.random()*.25)),e.vx=(Math.random()-.5)*.01,e.vy=-.012-Math.random()*.014,e.rot=Math.random()*6.28,e.vr=(Math.random()-.5)*1.5,e.s=.009+Math.random()*.009,e}setVisible(e){this.root.visible=e,this.frame.visible=e}setSparkles(e){this.sparks.visible=e}eyePosition(e,t=1.45){const n=Ce.clamp(this.progress/this.length,0,1);return e.copy(this.curve.getPointAt(n)).setY(t)}turnHint(e,t){const n=Ce.clamp((this.progress+2)/this.length,0,1),i=this.curve.getPointAt(n),r=new oe(i.x-e.x,i.z-e.z),a=new oe(t.x,t.z);return r.lengthSq()<.01||a.lengthSq()<.01?0:Math.atan2(a.x*r.y-a.y*r.x,a.dot(r))*180/Math.PI}get remaining(){return Math.max(0,this.length-this.progress)}get arrived(){return this.remaining<wi.gate.arriveRadius}step(e){const t=Ce.clamp(this.progress/this.length,0,1),n=this.curve.getTangentAt(t),i=new R(e.x,0,e.z);if(i.lengthSq()<.04)return;i.normalize();const r=i.dot(new R(n.x,0,n.z).normalize());r>-.2&&(this.progress=Math.min(this.length,this.progress+ut.user.strideMeters*Math.max(.5,r)))}update(e,t,n,i){this.t+=e,this.ribbonMat.uniforms.uTime.value=this.t,this.ribbonMat.uniforms.uProgress.value=this.progress,this.sparkMat.uniforms.uTime.value=this.t,this.sparkMat.uniforms.uProgress.value=this.progress,this.sparkMat.uniforms.uPx.value=i*innerHeight*.02,this.gateGlow.material.opacity=.55+.25*Math.sin(this.t*1.6);const r=n?.002:.008,a=Ce.clamp(-t.y*r,-.02,.02),o=Ce.clamp(t.x*r,-.02,.02);this.parallax.x+=(a-this.parallax.x)*Math.min(1,e*5),this.parallax.y+=(o-this.parallax.y)*Math.min(1,e*5),this.frame.position.set(this.parallax.x,this.parallax.y,0);const c=new _e,l=new at,h=new Xt,u=n?.4:1,d=this.frameW,f=this.frameH;for(let g=0;g<this.fp.length;g++){const b=this.fp[g];b.x+=(b.vx+Math.sin(this.t*1.3+g)*.006)*e*u,b.y+=b.vy*e*u,b.rot+=b.vr*e*u;const m=b.x/(d*.62),p=b.y/(f*.7),y=m*m+p*p;y<1&&(b.x+=Math.sign(b.x||1)*(1-y)*e*.08),(b.y<-f*1.1||Math.abs(b.x)>d*1.2)&&this.edgeSpawn(b),h.set(Math.sin(b.rot)*.8,b.rot*.5,b.rot),l.setFromEuler(h),c.compose(new R(b.x,b.y,-.5),l,new R(b.s,b.s,b.s)),this.framePetals.setMatrixAt(g,c)}this.framePetals.instanceMatrix.needsUpdate=!0}}const F_="markers/artifacts.mind",O_=[{id:"bucket",targetIndex:0,model:"models/hienvat/bucket.glb",image:"source/markers-src/artifact-bucket.jpg",physicalWidth:.3,size:.8,offset:[0,0,.28],titleVi:"Chậu tôn có quai",titleEn:"Metal basin with handles",descVi:"",descEn:""},{id:"crate",targetIndex:1,model:"models/hienvat/crate.glb",image:"source/markers-src/artifact-crate.jpg",physicalWidth:.3,size:.8,offset:[0,0,.28],titleVi:"Thùng gỗ",titleEn:"Wooden crate",descVi:"",descEn:""}],Ed={targets:F_,items:O_};class k_{constructor(e,t,n,i){this.feed=e,this.targets=t,this.targetsUrl=n,this.longEdgeFovDeg=i,this.status="off",this.paused=!1,this.current=-1,this.stats={frames:0,matches:0,tracks:0,err:""},this.matrix=new _e,this.controller=null,this.running=!1,this.dims=[],this.mvt=null,this.trackIdx=-1,this.warm=0,this.miss=0,this.showing=-1,this.raw=new _e,this.hasPose=!1,this.pos=new R,this.quat=new at,this.scl=new R,this.tPos=new R,this.tQuat=new at,this.tScl=new R}async start(){if(!(this.status==="loading"||this.status==="ready")&&this.feed.ready){this.status="loading";try{const{Controller:e}=await Ad(async()=>{const{Controller:l}=await import("./mindar-image.prod-D0hmC17B.js");return{Controller:l}},[],import.meta.url),t=this.feed.video,n=t.videoWidth,i=t.videoHeight;t.width=n,t.height=i;const r=new e({inputWidth:n,inputHeight:i,maxTrack:1}),a=this.feed.videoFocalPx(this.longEdgeFovDeg);r.projectionTransform=[[a,0,n/2],[0,a,i/2],[0,0,1]];const o=new URL(this.targetsUrl,document.baseURI).href,{dimensions:c}=await r.addImageTargets(o);this.dims=c,r.dummyRun(t),this.controller=r,this.status="ready",this.loop()}catch(e){console.warn("[artifact] không khởi động được nhận diện ảnh",e),this.status="error"}}}stop(){this.running=!1}async loop(){if(this.running)return;this.running=!0;const e=this.controller,t=this.targets.map(i=>i.targetIndex);let n=0;for(;this.running;){const r=this.trackIdx>=0?50:125;await new Promise(l=>requestAnimationFrame(()=>l()));const a=performance.now();if(this.paused||!this.feed.ready||document.hidden||a-n<r)continue;n=a;const o=this.feed.video;if(o.readyState<2)continue;o.width!==o.videoWidth&&(o.width=o.videoWidth,o.height=o.videoHeight);let c=null;try{if(c=e.inputLoader.loadInput(o),this.stats.frames++,this.trackIdx<0){const l=await e._detectAndMatch(c,t);l.targetIndex!==-1&&(this.stats.matches++,this.trackIdx=l.targetIndex,this.mvt=l.modelViewTransform,this.warm=0)}if(this.trackIdx>=0&&this.mvt){const l=await e._trackAndUpdate(c,this.mvt,this.trackIdx);l?(this.stats.tracks++,this.mvt=l,this.miss=0,this.warm++,this.updateMatrix(e._glModelViewMatrix(l,this.trackIdx),this.trackIdx),this.showing!==this.trackIdx&&this.warm>=3&&(this.showing=this.trackIdx,this.current=this.trackIdx,this.hasPose=!1,this.onFound?.(this.trackIdx))):(this.trackIdx=-1,this.mvt=null)}if(this.trackIdx<0&&this.showing>=0&&(this.miss++,this.miss>4)){const l=this.showing;this.showing=-1,this.current=-1,this.onLost?.(l)}}catch(l){console.warn("[artifact]",l),this.stats.err=String(l)}finally{c?.dispose()}}}updateMatrix(e,t){const[n,i]=this.dims[t],a=(this.targets.find(c=>c.targetIndex===t)?.physicalWidth??.3)/n,o=new _e().compose(new R(n/2,i/2,0),new at,new R(n,n,n));if(this.raw.fromArray(e).premultiply(new _e().makeScale(a,a,a)).multiply(o),this.feed.mirrored){const c=new _e().makeScale(-1,1,1);this.raw.premultiply(c).multiply(c)}this.raw.decompose(this.tPos,this.tQuat,this.tScl),this.hasPose||(this.pos.copy(this.tPos),this.quat.copy(this.tQuat),this.scl.copy(this.tScl),this.hasPose=!0)}smooth(e){if(!this.hasPose)return;const t=1-Math.exp(-e*14);this.pos.lerp(this.tPos,t),this.quat.slerp(this.tQuat,t),this.scl.lerp(this.tScl,t),this.matrix.compose(this.pos,this.quat,this.scl)}get poseReady(){return this.hasPose}}function lu(s,e){if(e===Af)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),s;if(e===Lc||e===zu){let t=s.getIndex();if(t===null){const a=[],o=s.getAttribute("position");if(o!==void 0){for(let c=0;c<o.count;c++)a.push(c);s.setIndex(a),t=s.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),s}const n=t.count-2,i=[];if(e===Lc)for(let a=1;a<=n;a++)i.push(t.getX(0)),i.push(t.getX(a)),i.push(t.getX(a+1));else for(let a=0;a<n;a++)a%2===0?(i.push(t.getX(a)),i.push(t.getX(a+1)),i.push(t.getX(a+2))):(i.push(t.getX(a+2)),i.push(t.getX(a+1)),i.push(t.getX(a)));i.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");const r=s.clone();return r.setIndex(i),r.clearGroups(),r}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),s}class B_ extends Cs{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new W_(t)}),this.register(function(t){return new X_(t)}),this.register(function(t){return new ey(t)}),this.register(function(t){return new ty(t)}),this.register(function(t){return new ny(t)}),this.register(function(t){return new j_(t)}),this.register(function(t){return new Y_(t)}),this.register(function(t){return new K_(t)}),this.register(function(t){return new $_(t)}),this.register(function(t){return new V_(t)}),this.register(function(t){return new J_(t)}),this.register(function(t){return new q_(t)}),this.register(function(t){return new Z_(t)}),this.register(function(t){return new Q_(t)}),this.register(function(t){return new H_(t)}),this.register(function(t){return new iy(t)}),this.register(function(t){return new sy(t)})}load(e,t,n,i){const r=this;let a;if(this.resourcePath!=="")a=this.resourcePath;else if(this.path!==""){const l=lr.extractUrlBase(e);a=lr.resolveURL(l,this.path)}else a=lr.extractUrlBase(e);this.manager.itemStart(e);const o=function(l){i?i(l):console.error(l),r.manager.itemError(e),r.manager.itemEnd(e)},c=new Md(this.manager);c.setPath(this.path),c.setResponseType("arraybuffer"),c.setRequestHeader(this.requestHeader),c.setWithCredentials(this.withCredentials),c.load(e,function(l){try{r.parse(l,a,function(h){t(h),r.manager.itemEnd(e)},o)}catch(h){o(h)}},n,o)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,i){let r;const a={},o={},c=new TextDecoder;if(typeof e=="string")r=JSON.parse(e);else if(e instanceof ArrayBuffer)if(c.decode(new Uint8Array(e,0,4))===Td){try{a[ze.KHR_BINARY_GLTF]=new ry(e)}catch(u){i&&i(u);return}r=JSON.parse(a[ze.KHR_BINARY_GLTF].content)}else r=JSON.parse(c.decode(e));else r=e;if(r.asset===void 0||r.asset.version[0]<2){i&&i(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const l=new vy(r,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});l.fileLoader.setRequestHeader(this.requestHeader);for(let h=0;h<this.pluginCallbacks.length;h++){const u=this.pluginCallbacks[h](l);u.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),o[u.name]=u,a[u.name]=!0}if(r.extensionsUsed)for(let h=0;h<r.extensionsUsed.length;++h){const u=r.extensionsUsed[h],d=r.extensionsRequired||[];switch(u){case ze.KHR_MATERIALS_UNLIT:a[u]=new G_;break;case ze.KHR_DRACO_MESH_COMPRESSION:a[u]=new ay(r,this.dracoLoader);break;case ze.KHR_TEXTURE_TRANSFORM:a[u]=new oy;break;case ze.KHR_MESH_QUANTIZATION:a[u]=new cy;break;default:d.indexOf(u)>=0&&o[u]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+u+'".')}}l.setExtensions(a),l.setPlugins(o),l.parse(n,i)}parseAsync(e,t){const n=this;return new Promise(function(i,r){n.parse(e,t,i,r)})}}function z_(){let s={};return{get:function(e){return s[e]},add:function(e,t){s[e]=t},remove:function(e){delete s[e]},removeAll:function(){s={}}}}const ze={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class H_{constructor(e){this.parser=e,this.name=ze.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const e=this.parser,t=this.parser.json.nodes||[];for(let n=0,i=t.length;n<i;n++){const r=t[n];r.extensions&&r.extensions[this.name]&&r.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,r.extensions[this.name].light)}}_loadLight(e){const t=this.parser,n="light:"+e;let i=t.cache.get(n);if(i)return i;const r=t.json,c=((r.extensions&&r.extensions[this.name]||{}).lights||[])[e];let l;const h=new Ae(16777215);c.color!==void 0&&h.setRGB(c.color[0],c.color[1],c.color[2],Bt);const u=c.range!==void 0?c.range:0;switch(c.type){case"directional":l=new wd(h),l.target.position.set(0,0,-1),l.add(l.target);break;case"point":l=new Sd(h),l.distance=u;break;case"spot":l=new hx(h),l.distance=u,c.spot=c.spot||{},c.spot.innerConeAngle=c.spot.innerConeAngle!==void 0?c.spot.innerConeAngle:0,c.spot.outerConeAngle=c.spot.outerConeAngle!==void 0?c.spot.outerConeAngle:Math.PI/4,l.angle=c.spot.outerConeAngle,l.penumbra=1-c.spot.innerConeAngle/c.spot.outerConeAngle,l.target.position.set(0,0,-1),l.add(l.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+c.type)}return l.position.set(0,0,0),l.decay=2,Kn(l,c),c.intensity!==void 0&&(l.intensity=c.intensity),l.name=t.createUniqueName(c.name||"light_"+e),i=Promise.resolve(l),t.cache.add(n,i),i}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){const t=this,n=this.parser,r=n.json.nodes[e],o=(r.extensions&&r.extensions[this.name]||{}).light;return o===void 0?null:this._loadLight(o).then(function(c){return n._getNodeRef(t.cache,o,c)})}}class G_{constructor(){this.name=ze.KHR_MATERIALS_UNLIT}getMaterialType(){return $t}extendParams(e,t,n){const i=[];e.color=new Ae(1,1,1),e.opacity=1;const r=t.pbrMetallicRoughness;if(r){if(Array.isArray(r.baseColorFactor)){const a=r.baseColorFactor;e.color.setRGB(a[0],a[1],a[2],Bt),e.opacity=a[3]}r.baseColorTexture!==void 0&&i.push(n.assignTexture(e,"map",r.baseColorTexture,Lt))}return Promise.all(i)}}class V_{constructor(e){this.parser=e,this.name=ze.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=i.extensions[this.name].emissiveStrength;return r!==void 0&&(t.emissiveIntensity=r),Promise.resolve()}}class W_{constructor(e){this.parser=e,this.name=ze.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:On}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],a=i.extensions[this.name];if(a.clearcoatFactor!==void 0&&(t.clearcoat=a.clearcoatFactor),a.clearcoatTexture!==void 0&&r.push(n.assignTexture(t,"clearcoatMap",a.clearcoatTexture)),a.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=a.clearcoatRoughnessFactor),a.clearcoatRoughnessTexture!==void 0&&r.push(n.assignTexture(t,"clearcoatRoughnessMap",a.clearcoatRoughnessTexture)),a.clearcoatNormalTexture!==void 0&&(r.push(n.assignTexture(t,"clearcoatNormalMap",a.clearcoatNormalTexture)),a.clearcoatNormalTexture.scale!==void 0)){const o=a.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new oe(o,o)}return Promise.all(r)}}class X_{constructor(e){this.parser=e,this.name=ze.KHR_MATERIALS_DISPERSION}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:On}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=i.extensions[this.name];return t.dispersion=r.dispersion!==void 0?r.dispersion:0,Promise.resolve()}}class q_{constructor(e){this.parser=e,this.name=ze.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:On}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],a=i.extensions[this.name];return a.iridescenceFactor!==void 0&&(t.iridescence=a.iridescenceFactor),a.iridescenceTexture!==void 0&&r.push(n.assignTexture(t,"iridescenceMap",a.iridescenceTexture)),a.iridescenceIor!==void 0&&(t.iridescenceIOR=a.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),a.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=a.iridescenceThicknessMinimum),a.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=a.iridescenceThicknessMaximum),a.iridescenceThicknessTexture!==void 0&&r.push(n.assignTexture(t,"iridescenceThicknessMap",a.iridescenceThicknessTexture)),Promise.all(r)}}class j_{constructor(e){this.parser=e,this.name=ze.KHR_MATERIALS_SHEEN}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:On}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[];t.sheenColor=new Ae(0,0,0),t.sheenRoughness=0,t.sheen=1;const a=i.extensions[this.name];if(a.sheenColorFactor!==void 0){const o=a.sheenColorFactor;t.sheenColor.setRGB(o[0],o[1],o[2],Bt)}return a.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=a.sheenRoughnessFactor),a.sheenColorTexture!==void 0&&r.push(n.assignTexture(t,"sheenColorMap",a.sheenColorTexture,Lt)),a.sheenRoughnessTexture!==void 0&&r.push(n.assignTexture(t,"sheenRoughnessMap",a.sheenRoughnessTexture)),Promise.all(r)}}class Y_{constructor(e){this.parser=e,this.name=ze.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:On}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],a=i.extensions[this.name];return a.transmissionFactor!==void 0&&(t.transmission=a.transmissionFactor),a.transmissionTexture!==void 0&&r.push(n.assignTexture(t,"transmissionMap",a.transmissionTexture)),Promise.all(r)}}class K_{constructor(e){this.parser=e,this.name=ze.KHR_MATERIALS_VOLUME}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:On}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],a=i.extensions[this.name];t.thickness=a.thicknessFactor!==void 0?a.thicknessFactor:0,a.thicknessTexture!==void 0&&r.push(n.assignTexture(t,"thicknessMap",a.thicknessTexture)),t.attenuationDistance=a.attenuationDistance||1/0;const o=a.attenuationColor||[1,1,1];return t.attenuationColor=new Ae().setRGB(o[0],o[1],o[2],Bt),Promise.all(r)}}class $_{constructor(e){this.parser=e,this.name=ze.KHR_MATERIALS_IOR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:On}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=i.extensions[this.name];return t.ior=r.ior!==void 0?r.ior:1.5,Promise.resolve()}}class J_{constructor(e){this.parser=e,this.name=ze.KHR_MATERIALS_SPECULAR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:On}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],a=i.extensions[this.name];t.specularIntensity=a.specularFactor!==void 0?a.specularFactor:1,a.specularTexture!==void 0&&r.push(n.assignTexture(t,"specularIntensityMap",a.specularTexture));const o=a.specularColorFactor||[1,1,1];return t.specularColor=new Ae().setRGB(o[0],o[1],o[2],Bt),a.specularColorTexture!==void 0&&r.push(n.assignTexture(t,"specularColorMap",a.specularColorTexture,Lt)),Promise.all(r)}}class Q_{constructor(e){this.parser=e,this.name=ze.EXT_MATERIALS_BUMP}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:On}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],a=i.extensions[this.name];return t.bumpScale=a.bumpFactor!==void 0?a.bumpFactor:1,a.bumpTexture!==void 0&&r.push(n.assignTexture(t,"bumpMap",a.bumpTexture)),Promise.all(r)}}class Z_{constructor(e){this.parser=e,this.name=ze.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:On}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],a=i.extensions[this.name];return a.anisotropyStrength!==void 0&&(t.anisotropy=a.anisotropyStrength),a.anisotropyRotation!==void 0&&(t.anisotropyRotation=a.anisotropyRotation),a.anisotropyTexture!==void 0&&r.push(n.assignTexture(t,"anisotropyMap",a.anisotropyTexture)),Promise.all(r)}}class ey{constructor(e){this.parser=e,this.name=ze.KHR_TEXTURE_BASISU}loadTexture(e){const t=this.parser,n=t.json,i=n.textures[e];if(!i.extensions||!i.extensions[this.name])return null;const r=i.extensions[this.name],a=t.options.ktx2Loader;if(!a){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,r.source,a)}}class ty{constructor(e){this.parser=e,this.name=ze.EXT_TEXTURE_WEBP,this.isSupported=null}loadTexture(e){const t=this.name,n=this.parser,i=n.json,r=i.textures[e];if(!r.extensions||!r.extensions[t])return null;const a=r.extensions[t],o=i.images[a.source];let c=n.textureLoader;if(o.uri){const l=n.options.manager.getHandler(o.uri);l!==null&&(c=l)}return this.detectSupport().then(function(l){if(l)return n.loadTextureImage(e,a.source,c);if(i.extensionsRequired&&i.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class ny{constructor(e){this.parser=e,this.name=ze.EXT_TEXTURE_AVIF,this.isSupported=null}loadTexture(e){const t=this.name,n=this.parser,i=n.json,r=i.textures[e];if(!r.extensions||!r.extensions[t])return null;const a=r.extensions[t],o=i.images[a.source];let c=n.textureLoader;if(o.uri){const l=n.options.manager.getHandler(o.uri);l!==null&&(c=l)}return this.detectSupport().then(function(l){if(l)return n.loadTextureImage(e,a.source,c);if(i.extensionsRequired&&i.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: AVIF required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAABcAAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAEAAAABAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAMAAAAABNjb2xybmNseAACAAIABoAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAAB9tZGF0EgAKCBgABogQEDQgMgkQAAAAB8dSLfI=",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class iy{constructor(e){this.name=ze.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){const t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){const i=n.extensions[this.name],r=this.parser.getDependency("buffer",i.buffer),a=this.parser.options.meshoptDecoder;if(!a||!a.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return r.then(function(o){const c=i.byteOffset||0,l=i.byteLength||0,h=i.count,u=i.byteStride,d=new Uint8Array(o,c,l);return a.decodeGltfBufferAsync?a.decodeGltfBufferAsync(h,u,d,i.mode,i.filter).then(function(f){return f.buffer}):a.ready.then(function(){const f=new ArrayBuffer(h*u);return a.decodeGltfBuffer(new Uint8Array(f),h,u,d,i.mode,i.filter),f})})}else return null}}class sy{constructor(e){this.name=ze.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){const t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;const i=t.meshes[n.mesh];for(const l of i.primitives)if(l.mode!==gn.TRIANGLES&&l.mode!==gn.TRIANGLE_STRIP&&l.mode!==gn.TRIANGLE_FAN&&l.mode!==void 0)return null;const a=n.extensions[this.name].attributes,o=[],c={};for(const l in a)o.push(this.parser.getDependency("accessor",a[l]).then(h=>(c[l]=h,c[l])));return o.length<1?null:(o.push(this.parser.createNodeMesh(e)),Promise.all(o).then(l=>{const h=l.pop(),u=h.isGroup?h.children:[h],d=l[0].count,f=[];for(const g of u){const b=new _e,m=new R,p=new at,y=new R(1,1,1),v=new Qn(g.geometry,g.material,d);for(let _=0;_<d;_++)c.TRANSLATION&&m.fromBufferAttribute(c.TRANSLATION,_),c.ROTATION&&p.fromBufferAttribute(c.ROTATION,_),c.SCALE&&y.fromBufferAttribute(c.SCALE,_),v.setMatrixAt(_,b.compose(m,p,y));for(const _ in c)if(_==="_COLOR_0"){const w=c[_];v.instanceColor=new hn(w.array,w.itemSize,w.normalized)}else _!=="TRANSLATION"&&_!=="ROTATION"&&_!=="SCALE"&&g.geometry.setAttribute(_,c[_]);dt.prototype.copy.call(v,g),this.parser.assignFinalMaterial(v),f.push(v)}return h.isGroup?(h.clear(),h.add(...f),h):f[0]}))}}const Td="glTF",$s=12,hu={JSON:1313821514,BIN:5130562};class ry{constructor(e){this.name=ze.KHR_BINARY_GLTF,this.content=null,this.body=null;const t=new DataView(e,0,$s),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==Td)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const i=this.header.length-$s,r=new DataView(e,$s);let a=0;for(;a<i;){const o=r.getUint32(a,!0);a+=4;const c=r.getUint32(a,!0);if(a+=4,c===hu.JSON){const l=new Uint8Array(e,$s+a,o);this.content=n.decode(l)}else if(c===hu.BIN){const l=$s+a;this.body=e.slice(l,l+o)}a+=o}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class ay{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=ze.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){const n=this.json,i=this.dracoLoader,r=e.extensions[this.name].bufferView,a=e.extensions[this.name].attributes,o={},c={},l={};for(const h in a){const u=Gc[h]||h.toLowerCase();o[u]=a[h]}for(const h in e.attributes){const u=Gc[h]||h.toLowerCase();if(a[h]!==void 0){const d=n.accessors[e.attributes[h]],f=fs[d.componentType];l[u]=f.name,c[u]=d.normalized===!0}}return t.getDependency("bufferView",r).then(function(h){return new Promise(function(u,d){i.decodeDracoFile(h,function(f){for(const g in f.attributes){const b=f.attributes[g],m=c[g];m!==void 0&&(b.normalized=m)}u(f)},o,l,Bt,d)})})}}class oy{constructor(){this.name=ze.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}}class cy{constructor(){this.name=ze.KHR_MESH_QUANTIZATION}}class Rd extends Mr{constructor(e,t,n,i){super(e,t,n,i)}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=e*i*3+i;for(let a=0;a!==i;a++)t[a]=n[r+a];return t}interpolate_(e,t,n,i){const r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=o*2,l=o*3,h=i-t,u=(n-t)/h,d=u*u,f=d*u,g=e*l,b=g-l,m=-2*f+3*d,p=f-d,y=1-m,v=p-d+u;for(let _=0;_!==o;_++){const w=a[b+_+o],T=a[b+_+c]*h,M=a[g+_+o],C=a[g+_]*h;r[_]=y*w+v*T+m*M+p*C}return r}}const ly=new at;class hy extends Rd{interpolate_(e,t,n,i){const r=super.interpolate_(e,t,n,i);return ly.fromArray(r).normalize().toArray(r),r}}const gn={POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6},fs={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},uu={9728:Vt,9729:un,9984:Pu,9985:ma,9986:er,9987:In},du={33071:ui,33648:Aa,10497:bs},Ho={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},Gc={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},ci={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},uy={CUBICSPLINE:void 0,LINEAR:fr,STEP:dr},Go={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function dy(s){return s.DefaultMaterial===void 0&&(s.DefaultMaterial=new xr({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:Zn})),s.DefaultMaterial}function Ei(s,e,t){for(const n in t.extensions)s[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function Kn(s,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(s.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function fy(s,e,t){let n=!1,i=!1,r=!1;for(let l=0,h=e.length;l<h;l++){const u=e[l];if(u.POSITION!==void 0&&(n=!0),u.NORMAL!==void 0&&(i=!0),u.COLOR_0!==void 0&&(r=!0),n&&i&&r)break}if(!n&&!i&&!r)return Promise.resolve(s);const a=[],o=[],c=[];for(let l=0,h=e.length;l<h;l++){const u=e[l];if(n){const d=u.POSITION!==void 0?t.getDependency("accessor",u.POSITION):s.attributes.position;a.push(d)}if(i){const d=u.NORMAL!==void 0?t.getDependency("accessor",u.NORMAL):s.attributes.normal;o.push(d)}if(r){const d=u.COLOR_0!==void 0?t.getDependency("accessor",u.COLOR_0):s.attributes.color;c.push(d)}}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(c)]).then(function(l){const h=l[0],u=l[1],d=l[2];return n&&(s.morphAttributes.position=h),i&&(s.morphAttributes.normal=u),r&&(s.morphAttributes.color=d),s.morphTargetsRelative=!0,s})}function py(s,e){if(s.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)s.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){const t=e.extras.targetNames;if(s.morphTargetInfluences.length===t.length){s.morphTargetDictionary={};for(let n=0,i=t.length;n<i;n++)s.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function my(s){let e;const t=s.extensions&&s.extensions[ze.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+Vo(t.attributes):e=s.indices+":"+Vo(s.attributes)+":"+s.mode,s.targets!==void 0)for(let n=0,i=s.targets.length;n<i;n++)e+=":"+Vo(s.targets[n]);return e}function Vo(s){let e="";const t=Object.keys(s).sort();for(let n=0,i=t.length;n<i;n++)e+=t[n]+":"+s[t[n]]+";";return e}function Vc(s){switch(s){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function gy(s){return s.search(/\.jpe?g($|\?)/i)>0||s.search(/^data\:image\/jpeg/)===0?"image/jpeg":s.search(/\.webp($|\?)/i)>0||s.search(/^data\:image\/webp/)===0?"image/webp":"image/png"}const by=new _e;class vy{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new z_,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,i=-1,r=!1,a=-1;if(typeof navigator<"u"){const o=navigator.userAgent;n=/^((?!chrome|android).)*safari/i.test(o)===!0;const c=o.match(/Version\/(\d+)/);i=n&&c?parseInt(c[1],10):-1,r=o.indexOf("Firefox")>-1,a=r?o.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||n&&i<17||r&&a<98?this.textureLoader=new ox(this.options.manager):this.textureLoader=new fx(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new Md(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){const n=this,i=this.json,r=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(a){return a._markDefs&&a._markDefs()}),Promise.all(this._invokeAll(function(a){return a.beforeRoot&&a.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(a){const o={scene:a[0][i.scene||0],scenes:a[0],animations:a[1],cameras:a[2],asset:i.asset,parser:n,userData:{}};return Ei(r,o,i),Kn(o,i),Promise.all(n._invokeAll(function(c){return c.afterRoot&&c.afterRoot(o)})).then(function(){for(const c of o.scenes)c.updateMatrixWorld();e(o)})}).catch(t)}_markDefs(){const e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let i=0,r=t.length;i<r;i++){const a=t[i].joints;for(let o=0,c=a.length;o<c;o++)e[a[o]].isBone=!0}for(let i=0,r=e.length;i<r;i++){const a=e[i];a.mesh!==void 0&&(this._addNodeRef(this.meshCache,a.mesh),a.skin!==void 0&&(n[a.mesh].isSkinnedMesh=!0)),a.camera!==void 0&&this._addNodeRef(this.cameraCache,a.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;const i=n.clone(),r=(a,o)=>{const c=this.associations.get(a);c!=null&&this.associations.set(o,c);for(const[l,h]of a.children.entries())r(h,o.children[l])};return r(n,i),i.name+="_instance_"+e.uses[t]++,i}_invokeOne(e){const t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){const i=e(t[n]);if(i)return i}return null}_invokeAll(e){const t=Object.values(this.plugins);t.unshift(this);const n=[];for(let i=0;i<t.length;i++){const r=e(t[i]);r&&n.push(r)}return n}getDependency(e,t){const n=e+":"+t;let i=this.cache.get(n);if(!i){switch(e){case"scene":i=this.loadScene(t);break;case"node":i=this._invokeOne(function(r){return r.loadNode&&r.loadNode(t)});break;case"mesh":i=this._invokeOne(function(r){return r.loadMesh&&r.loadMesh(t)});break;case"accessor":i=this.loadAccessor(t);break;case"bufferView":i=this._invokeOne(function(r){return r.loadBufferView&&r.loadBufferView(t)});break;case"buffer":i=this.loadBuffer(t);break;case"material":i=this._invokeOne(function(r){return r.loadMaterial&&r.loadMaterial(t)});break;case"texture":i=this._invokeOne(function(r){return r.loadTexture&&r.loadTexture(t)});break;case"skin":i=this.loadSkin(t);break;case"animation":i=this._invokeOne(function(r){return r.loadAnimation&&r.loadAnimation(t)});break;case"camera":i=this.loadCamera(t);break;default:if(i=this._invokeOne(function(r){return r!=this&&r.getDependency&&r.getDependency(e,t)}),!i)throw new Error("Unknown type: "+e);break}this.cache.add(n,i)}return i}getDependencies(e){let t=this.cache.get(e);if(!t){const n=this,i=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(i.map(function(r,a){return n.getDependency(e,a)})),this.cache.add(e,t)}return t}loadBuffer(e){const t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[ze.KHR_BINARY_GLTF].body);const i=this.options;return new Promise(function(r,a){n.load(lr.resolveURL(t.uri,i.path),r,void 0,function(){a(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){const t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){const i=t.byteLength||0,r=t.byteOffset||0;return n.slice(r,r+i)})}loadAccessor(e){const t=this,n=this.json,i=this.json.accessors[e];if(i.bufferView===void 0&&i.sparse===void 0){const a=Ho[i.type],o=fs[i.componentType],c=i.normalized===!0,l=new o(i.count*a);return Promise.resolve(new Et(l,a,c))}const r=[];return i.bufferView!==void 0?r.push(this.getDependency("bufferView",i.bufferView)):r.push(null),i.sparse!==void 0&&(r.push(this.getDependency("bufferView",i.sparse.indices.bufferView)),r.push(this.getDependency("bufferView",i.sparse.values.bufferView))),Promise.all(r).then(function(a){const o=a[0],c=Ho[i.type],l=fs[i.componentType],h=l.BYTES_PER_ELEMENT,u=h*c,d=i.byteOffset||0,f=i.bufferView!==void 0?n.bufferViews[i.bufferView].byteStride:void 0,g=i.normalized===!0;let b,m;if(f&&f!==u){const p=Math.floor(d/f),y="InterleavedBuffer:"+i.bufferView+":"+i.componentType+":"+p+":"+i.count;let v=t.cache.get(y);v||(b=new l(o,p*f,i.count*f/h),v=new ad(b,f/h),t.cache.add(y,v)),m=new mr(v,c,d%f/h,g)}else o===null?b=new l(i.count*c):b=new l(o,d,i.count*c),m=new Et(b,c,g);if(i.sparse!==void 0){const p=Ho.SCALAR,y=fs[i.sparse.indices.componentType],v=i.sparse.indices.byteOffset||0,_=i.sparse.values.byteOffset||0,w=new y(a[1],v,i.sparse.count*p),T=new l(a[2],_,i.sparse.count*c);o!==null&&(m=new Et(m.array.slice(),m.itemSize,m.normalized)),m.normalized=!1;for(let M=0,C=w.length;M<C;M++){const D=w[M];if(m.setX(D,T[M*c]),c>=2&&m.setY(D,T[M*c+1]),c>=3&&m.setZ(D,T[M*c+2]),c>=4&&m.setW(D,T[M*c+3]),c>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}m.normalized=g}return m})}loadTexture(e){const t=this.json,n=this.options,r=t.textures[e].source,a=t.images[r];let o=this.textureLoader;if(a.uri){const c=n.manager.getHandler(a.uri);c!==null&&(o=c)}return this.loadTextureImage(e,r,o)}loadTextureImage(e,t,n){const i=this,r=this.json,a=r.textures[e],o=r.images[t],c=(o.uri||o.bufferView)+":"+a.sampler;if(this.textureCache[c])return this.textureCache[c];const l=this.loadImageSource(t,n).then(function(h){h.flipY=!1,h.name=a.name||o.name||"",h.name===""&&typeof o.uri=="string"&&o.uri.startsWith("data:image/")===!1&&(h.name=o.uri);const d=(r.samplers||{})[a.sampler]||{};return h.magFilter=uu[d.magFilter]||un,h.minFilter=uu[d.minFilter]||In,h.wrapS=du[d.wrapS]||bs,h.wrapT=du[d.wrapT]||bs,i.associations.set(h,{textures:e}),h}).catch(function(){return null});return this.textureCache[c]=l,l}loadImageSource(e,t){const n=this,i=this.json,r=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(u=>u.clone());const a=i.images[e],o=self.URL||self.webkitURL;let c=a.uri||"",l=!1;if(a.bufferView!==void 0)c=n.getDependency("bufferView",a.bufferView).then(function(u){l=!0;const d=new Blob([u],{type:a.mimeType});return c=o.createObjectURL(d),c});else if(a.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");const h=Promise.resolve(c).then(function(u){return new Promise(function(d,f){let g=d;t.isImageBitmapLoader===!0&&(g=function(b){const m=new At(b);m.needsUpdate=!0,d(m)}),t.load(lr.resolveURL(u,r.path),g,void 0,f)})}).then(function(u){return l===!0&&o.revokeObjectURL(c),Kn(u,a),u.userData.mimeType=a.mimeType||gy(a.uri),u}).catch(function(u){throw console.error("THREE.GLTFLoader: Couldn't load texture",c),u});return this.sourceCache[e]=h,h}assignTexture(e,t,n,i){const r=this;return this.getDependency("texture",n.index).then(function(a){if(!a)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(a=a.clone(),a.channel=n.texCoord),r.extensions[ze.KHR_TEXTURE_TRANSFORM]){const o=n.extensions!==void 0?n.extensions[ze.KHR_TEXTURE_TRANSFORM]:void 0;if(o){const c=r.associations.get(a);a=r.extensions[ze.KHR_TEXTURE_TRANSFORM].extendTexture(a,o),r.associations.set(a,c)}}return i!==void 0&&(a.colorSpace=i),e[t]=a,a})}assignFinalMaterial(e){const t=e.geometry;let n=e.material;const i=t.attributes.tangent===void 0,r=t.attributes.color!==void 0,a=t.attributes.normal===void 0;if(e.isPoints){const o="PointsMaterial:"+n.uuid;let c=this.cache.get(o);c||(c=new hd,Rn.prototype.copy.call(c,n),c.color.copy(n.color),c.map=n.map,c.sizeAttenuation=!1,this.cache.add(o,c)),n=c}else if(e.isLine){const o="LineBasicMaterial:"+n.uuid;let c=this.cache.get(o);c||(c=new Pa,Rn.prototype.copy.call(c,n),c.color.copy(n.color),c.map=n.map,this.cache.add(o,c)),n=c}if(i||r||a){let o="ClonedMaterial:"+n.uuid+":";i&&(o+="derivative-tangents:"),r&&(o+="vertex-colors:"),a&&(o+="flat-shading:");let c=this.cache.get(o);c||(c=n.clone(),r&&(c.vertexColors=!0),a&&(c.flatShading=!0),i&&(c.normalScale&&(c.normalScale.y*=-1),c.clearcoatNormalScale&&(c.clearcoatNormalScale.y*=-1)),this.cache.add(o,c),this.associations.set(c,this.associations.get(n))),n=c}e.material=n}getMaterialType(){return xr}loadMaterial(e){const t=this,n=this.json,i=this.extensions,r=n.materials[e];let a;const o={},c=r.extensions||{},l=[];if(c[ze.KHR_MATERIALS_UNLIT]){const u=i[ze.KHR_MATERIALS_UNLIT];a=u.getMaterialType(),l.push(u.extendParams(o,r,t))}else{const u=r.pbrMetallicRoughness||{};if(o.color=new Ae(1,1,1),o.opacity=1,Array.isArray(u.baseColorFactor)){const d=u.baseColorFactor;o.color.setRGB(d[0],d[1],d[2],Bt),o.opacity=d[3]}u.baseColorTexture!==void 0&&l.push(t.assignTexture(o,"map",u.baseColorTexture,Lt)),o.metalness=u.metallicFactor!==void 0?u.metallicFactor:1,o.roughness=u.roughnessFactor!==void 0?u.roughnessFactor:1,u.metallicRoughnessTexture!==void 0&&(l.push(t.assignTexture(o,"metalnessMap",u.metallicRoughnessTexture)),l.push(t.assignTexture(o,"roughnessMap",u.metallicRoughnessTexture))),a=this._invokeOne(function(d){return d.getMaterialType&&d.getMaterialType(e)}),l.push(Promise.all(this._invokeAll(function(d){return d.extendMaterialParams&&d.extendMaterialParams(e,o)})))}r.doubleSided===!0&&(o.side=tn);const h=r.alphaMode||Go.OPAQUE;if(h===Go.BLEND?(o.transparent=!0,o.depthWrite=!1):(o.transparent=!1,h===Go.MASK&&(o.alphaTest=r.alphaCutoff!==void 0?r.alphaCutoff:.5)),r.normalTexture!==void 0&&a!==$t&&(l.push(t.assignTexture(o,"normalMap",r.normalTexture)),o.normalScale=new oe(1,1),r.normalTexture.scale!==void 0)){const u=r.normalTexture.scale;o.normalScale.set(u,u)}if(r.occlusionTexture!==void 0&&a!==$t&&(l.push(t.assignTexture(o,"aoMap",r.occlusionTexture)),r.occlusionTexture.strength!==void 0&&(o.aoMapIntensity=r.occlusionTexture.strength)),r.emissiveFactor!==void 0&&a!==$t){const u=r.emissiveFactor;o.emissive=new Ae().setRGB(u[0],u[1],u[2],Bt)}return r.emissiveTexture!==void 0&&a!==$t&&l.push(t.assignTexture(o,"emissiveMap",r.emissiveTexture,Lt)),Promise.all(l).then(function(){const u=new a(o);return r.name&&(u.name=r.name),Kn(u,r),t.associations.set(u,{materials:e}),r.extensions&&Ei(i,u,r),u})}createUniqueName(e){const t=st.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){const t=this,n=this.extensions,i=this.primitiveCache;function r(o){return n[ze.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(o,t).then(function(c){return fu(c,o,t)})}const a=[];for(let o=0,c=e.length;o<c;o++){const l=e[o],h=my(l),u=i[h];if(u)a.push(u.promise);else{let d;l.extensions&&l.extensions[ze.KHR_DRACO_MESH_COMPRESSION]?d=r(l):d=fu(new bt,l,t),i[h]={primitive:l,promise:d},a.push(d)}}return Promise.all(a)}loadMesh(e){const t=this,n=this.json,i=this.extensions,r=n.meshes[e],a=r.primitives,o=[];for(let c=0,l=a.length;c<l;c++){const h=a[c].material===void 0?dy(this.cache):this.getDependency("material",a[c].material);o.push(h)}return o.push(t.loadGeometries(a)),Promise.all(o).then(function(c){const l=c.slice(0,c.length-1),h=c[c.length-1],u=[];for(let f=0,g=h.length;f<g;f++){const b=h[f],m=a[f];let p;const y=l[f];if(m.mode===gn.TRIANGLES||m.mode===gn.TRIANGLE_STRIP||m.mode===gn.TRIANGLE_FAN||m.mode===void 0)p=r.isSkinnedMesh===!0?new pv(b,y):new $e(b,y),p.isSkinnedMesh===!0&&p.normalizeSkinWeights(),m.mode===gn.TRIANGLE_STRIP?p.geometry=lu(p.geometry,zu):m.mode===gn.TRIANGLE_FAN&&(p.geometry=lu(p.geometry,Lc));else if(m.mode===gn.LINES)p=new Sa(b,y);else if(m.mode===gn.LINE_STRIP)p=new ol(b,y);else if(m.mode===gn.LINE_LOOP)p=new bv(b,y);else if(m.mode===gn.POINTS)p=new ud(b,y);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+m.mode);Object.keys(p.geometry.morphAttributes).length>0&&py(p,r),p.name=t.createUniqueName(r.name||"mesh_"+e),Kn(p,r),m.extensions&&Ei(i,p,m),t.assignFinalMaterial(p),u.push(p)}for(let f=0,g=u.length;f<g;f++)t.associations.set(u[f],{meshes:e,primitives:f});if(u.length===1)return r.extensions&&Ei(i,u[0],r),u[0];const d=new yt;r.extensions&&Ei(i,d,r),t.associations.set(d,{meshes:e});for(let f=0,g=u.length;f<g;f++)d.add(u[f]);return d})}loadCamera(e){let t;const n=this.json.cameras[e],i=n[n.type];if(!i){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new Kt(Ce.radToDeg(i.yfov),i.aspectRatio||1,i.znear||1,i.zfar||2e6):n.type==="orthographic"&&(t=new il(-i.xmag,i.xmag,i.ymag,-i.ymag,i.znear,i.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),Kn(t,n),Promise.resolve(t)}loadSkin(e){const t=this.json.skins[e],n=[];for(let i=0,r=t.joints.length;i<r;i++)n.push(this._loadNodeShallow(t.joints[i]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(i){const r=i.pop(),a=i,o=[],c=[];for(let l=0,h=a.length;l<h;l++){const u=a[l];if(u){o.push(u);const d=new _e;r!==null&&d.fromArray(r.array,l*16),c.push(d)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[l])}return new al(o,c)})}loadAnimation(e){const t=this.json,n=this,i=t.animations[e],r=i.name?i.name:"animation_"+e,a=[],o=[],c=[],l=[],h=[];for(let u=0,d=i.channels.length;u<d;u++){const f=i.channels[u],g=i.samplers[f.sampler],b=f.target,m=b.node,p=i.parameters!==void 0?i.parameters[g.input]:g.input,y=i.parameters!==void 0?i.parameters[g.output]:g.output;b.node!==void 0&&(a.push(this.getDependency("node",m)),o.push(this.getDependency("accessor",p)),c.push(this.getDependency("accessor",y)),l.push(g),h.push(b))}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(c),Promise.all(l),Promise.all(h)]).then(function(u){const d=u[0],f=u[1],g=u[2],b=u[3],m=u[4],p=[];for(let y=0,v=d.length;y<v;y++){const _=d[y],w=f[y],T=g[y],M=b[y],C=m[y];if(_===void 0)continue;_.updateMatrix&&_.updateMatrix();const D=n._createAnimationTracks(_,w,T,M,C);if(D)for(let x=0;x<D.length;x++)p.push(D[x])}return new ex(r,void 0,p)})}createNodeMesh(e){const t=this.json,n=this,i=t.nodes[e];return i.mesh===void 0?null:n.getDependency("mesh",i.mesh).then(function(r){const a=n._getNodeRef(n.meshCache,i.mesh,r);return i.weights!==void 0&&a.traverse(function(o){if(o.isMesh)for(let c=0,l=i.weights.length;c<l;c++)o.morphTargetInfluences[c]=i.weights[c]}),a})}loadNode(e){const t=this.json,n=this,i=t.nodes[e],r=n._loadNodeShallow(e),a=[],o=i.children||[];for(let l=0,h=o.length;l<h;l++)a.push(n.getDependency("node",o[l]));const c=i.skin===void 0?Promise.resolve(null):n.getDependency("skin",i.skin);return Promise.all([r,Promise.all(a),c]).then(function(l){const h=l[0],u=l[1],d=l[2];d!==null&&h.traverse(function(f){f.isSkinnedMesh&&f.bind(d,by)});for(let f=0,g=u.length;f<g;f++)h.add(u[f]);return h})}_loadNodeShallow(e){const t=this.json,n=this.extensions,i=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];const r=t.nodes[e],a=r.name?i.createUniqueName(r.name):"",o=[],c=i._invokeOne(function(l){return l.createNodeMesh&&l.createNodeMesh(e)});return c&&o.push(c),r.camera!==void 0&&o.push(i.getDependency("camera",r.camera).then(function(l){return i._getNodeRef(i.cameraCache,r.camera,l)})),i._invokeAll(function(l){return l.createNodeAttachment&&l.createNodeAttachment(e)}).forEach(function(l){o.push(l)}),this.nodeCache[e]=Promise.all(o).then(function(l){let h;if(r.isBone===!0?h=new ld:l.length>1?h=new yt:l.length===1?h=l[0]:h=new dt,h!==l[0])for(let u=0,d=l.length;u<d;u++)h.add(l[u]);if(r.name&&(h.userData.name=r.name,h.name=a),Kn(h,r),r.extensions&&Ei(n,h,r),r.matrix!==void 0){const u=new _e;u.fromArray(r.matrix),h.applyMatrix4(u)}else r.translation!==void 0&&h.position.fromArray(r.translation),r.rotation!==void 0&&h.quaternion.fromArray(r.rotation),r.scale!==void 0&&h.scale.fromArray(r.scale);return i.associations.has(h)||i.associations.set(h,{}),i.associations.get(h).nodes=e,h}),this.nodeCache[e]}loadScene(e){const t=this.extensions,n=this.json.scenes[e],i=this,r=new yt;n.name&&(r.name=i.createUniqueName(n.name)),Kn(r,n),n.extensions&&Ei(t,r,n);const a=n.nodes||[],o=[];for(let c=0,l=a.length;c<l;c++)o.push(i.getDependency("node",a[c]));return Promise.all(o).then(function(c){for(let h=0,u=c.length;h<u;h++)r.add(c[h]);const l=h=>{const u=new Map;for(const[d,f]of i.associations)(d instanceof Rn||d instanceof At)&&u.set(d,f);return h.traverse(d=>{const f=i.associations.get(d);f!=null&&u.set(d,f)}),u};return i.associations=l(r),r})}_createAnimationTracks(e,t,n,i,r){const a=[],o=e.name?e.name:e.uuid,c=[];ci[r.path]===ci.weights?e.traverse(function(d){d.morphTargetInfluences&&c.push(d.name?d.name:d.uuid)}):c.push(o);let l;switch(ci[r.path]){case ci.weights:l=Ms;break;case ci.rotation:l=Ss;break;case ci.position:case ci.scale:l=ws;break;default:switch(n.itemSize){case 1:l=Ms;break;case 2:case 3:default:l=ws;break}break}const h=i.interpolation!==void 0?uy[i.interpolation]:fr,u=this._getArrayFromAccessor(n);for(let d=0,f=c.length;d<f;d++){const g=new l(c[d]+"."+ci[r.path],t.array,u,h);i.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(g),a.push(g)}return a}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){const n=Vc(t.constructor),i=new Float32Array(t.length);for(let r=0,a=t.length;r<a;r++)i[r]=t[r]*n;t=i}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(n){const i=this instanceof Ss?hy:Rd;return new i(this.times,this.values,this.getValueSize()/3,n)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}}function xy(s,e,t){const n=e.attributes,i=new Nn;if(n.POSITION!==void 0){const o=t.json.accessors[n.POSITION],c=o.min,l=o.max;if(c!==void 0&&l!==void 0){if(i.set(new R(c[0],c[1],c[2]),new R(l[0],l[1],l[2])),o.normalized){const h=Vc(fs[o.componentType]);i.min.multiplyScalar(h),i.max.multiplyScalar(h)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const r=e.targets;if(r!==void 0){const o=new R,c=new R;for(let l=0,h=r.length;l<h;l++){const u=r[l];if(u.POSITION!==void 0){const d=t.json.accessors[u.POSITION],f=d.min,g=d.max;if(f!==void 0&&g!==void 0){if(c.setX(Math.max(Math.abs(f[0]),Math.abs(g[0]))),c.setY(Math.max(Math.abs(f[1]),Math.abs(g[1]))),c.setZ(Math.max(Math.abs(f[2]),Math.abs(g[2]))),d.normalized){const b=Vc(fs[d.componentType]);c.multiplyScalar(b)}o.max(c)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}i.expandByVector(o)}s.boundingBox=i;const a=new Un;i.getCenter(a.center),a.radius=i.min.distanceTo(i.max)/2,s.boundingSphere=a}function fu(s,e,t){const n=e.attributes,i=[];function r(a,o){return t.getDependency("accessor",a).then(function(c){s.setAttribute(o,c)})}for(const a in n){const o=Gc[a]||a.toLowerCase();o in s.attributes||i.push(r(n[a],o))}if(e.indices!==void 0&&!s.index){const a=t.getDependency("accessor",e.indices).then(function(o){s.setIndex(o)});i.push(a)}return Je.workingColorSpace!==Bt&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${Je.workingColorSpace}" not supported.`),Kn(s,e),xy(s,e,t),Promise.all(i).then(function(){return e.targets!==void 0?fy(s,e.targets,t):s})}var _y=function(){var s="b9H79Tebbbe8Fv9Gbb9Gvuuuuueu9Giuuub9Geueu9Giuuueuikqbeeedddillviebeoweuec:q;iekr;leDo9TW9T9VV95dbH9F9F939H79T9F9J9H229F9Jt9VV7bb8A9TW79O9V9Wt9F9KW9J9V9KW9wWVtW949c919M9MWVbeY9TW79O9V9Wt9F9KW9J9V9KW69U9KW949c919M9MWVbdE9TW79O9V9Wt9F9KW9J9V9KW69U9KW949tWG91W9U9JWbiL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9p9JtblK9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9r919HtbvL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWVT949Wbol79IV9Rbrq:P8Yqdbk;3sezu8Jjjjjbcj;eb9Rgv8Kjjjjbc9:hodnadcefal0mbcuhoaiRbbc:Ge9hmbavaialfgrad9Radz1jjjbhwcj;abad9UhoaicefhldnadTmbaoc;WFbGgocjdaocjd6EhDcbhqinaqae9pmeaDaeaq9RaqaDfae6Egkcsfgocl4cifcd4hxdndndndnaoc9WGgmTmbcbhPcehsawcjdfhzalhHinaraH9Rax6midnaraHaxfgl9RcK6mbczhoinawcj;cbfaogifgoc9WfhOdndndndndnaHaic9WfgAco4fRbbaAci4coG4ciGPlbedibkaO9cb83ibaOcwf9cb83ibxikaOalRblalRbbgAco4gCaCciSgCE86bbaocGfalclfaCfgORbbaAcl4ciGgCaCciSgCE86bbaocVfaOaCfgORbbaAcd4ciGgCaCciSgCE86bbaoc7faOaCfgORbbaAciGgAaAciSgAE86bbaoctfaOaAfgARbbalRbegOco4gCaCciSgCE86bbaoc91faAaCfgARbbaOcl4ciGgCaCciSgCE86bbaoc4faAaCfgARbbaOcd4ciGgCaCciSgCE86bbaoc93faAaCfgARbbaOciGgOaOciSgOE86bbaoc94faAaOfgARbbalRbdgOco4gCaCciSgCE86bbaoc95faAaCfgARbbaOcl4ciGgCaCciSgCE86bbaoc96faAaCfgARbbaOcd4ciGgCaCciSgCE86bbaoc97faAaCfgARbbaOciGgOaOciSgOE86bbaoc98faAaOfgORbbalRbiglco4gAaAciSgAE86bbaoc99faOaAfgORbbalcl4ciGgAaAciSgAE86bbaoc9:faOaAfgORbbalcd4ciGgAaAciSgAE86bbaocufaOaAfgoRbbalciGglalciSglE86bbaoalfhlxdkaOalRbwalRbbgAcl4gCaCcsSgCE86bbaocGfalcwfaCfgORbbaAcsGgAaAcsSgAE86bbaocVfaOaAfgORbbalRbegAcl4gCaCcsSgCE86bbaoc7faOaCfgORbbaAcsGgAaAcsSgAE86bbaoctfaOaAfgORbbalRbdgAcl4gCaCcsSgCE86bbaoc91faOaCfgORbbaAcsGgAaAcsSgAE86bbaoc4faOaAfgORbbalRbigAcl4gCaCcsSgCE86bbaoc93faOaCfgORbbaAcsGgAaAcsSgAE86bbaoc94faOaAfgORbbalRblgAcl4gCaCcsSgCE86bbaoc95faOaCfgORbbaAcsGgAaAcsSgAE86bbaoc96faOaAfgORbbalRbvgAcl4gCaCcsSgCE86bbaoc97faOaCfgORbbaAcsGgAaAcsSgAE86bbaoc98faOaAfgORbbalRbogAcl4gCaCcsSgCE86bbaoc99faOaCfgORbbaAcsGgAaAcsSgAE86bbaoc9:faOaAfgORbbalRbrglcl4gAaAcsSgAE86bbaocufaOaAfgoRbbalcsGglalcsSglE86bbaoalfhlxekaOal8Pbb83bbaOcwfalcwf8Pbb83bbalczfhlkdnaiam9pmbaiczfhoaral9RcL0mekkaiam6mialTmidnakTmbawaPfRbbhOcbhoazhiinaiawcj;cbfaofRbbgAce4cbaAceG9R7aOfgO86bbaiadfhiaocefgoak9hmbkkazcefhzaPcefgPad6hsalhHaPad9hmexvkkcbhlasceGmdxikalaxad2fhCdnakTmbcbhHcehsawcjdfhminaral9Rax6mialTmdalaxfhlawaHfRbbhOcbhoamhiinaiawcj;cbfaofRbbgAce4cbaAceG9R7aOfgO86bbaiadfhiaocefgoak9hmbkamcefhmaHcefgHad6hsaHad9hmbkaChlxikcbhocehsinaral9Rax6mdalTmealaxfhlaocefgoad6hsadao9hmbkaChlxdkcbhlasceGTmekc9:hoxikabaqad2fawcjdfakad2z1jjjb8Aawawcjdfakcufad2fadz1jjjb8Aakaqfhqalmbkc9:hoxekcbc99aral9Radcaadca0ESEhokavcj;ebf8Kjjjjbaok;yzeHu8Jjjjjbc;ae9Rgv8Kjjjjbc9:hodnaeci9UgrcHfal0mbcuhoaiRbbgwc;WeGc;Ge9hmbawcsGgDce0mbavc;abfcFecjez:jjjjb8AavcUf9cu83ibavc8Wf9cu83ibavcyf9cu83ibavcaf9cu83ibavcKf9cu83ibavczf9cu83ibav9cu83iwav9cu83ibaialfc9WfhqaicefgwarfhodnaeTmbcmcsaDceSEhkcbhxcbhmcbhDcbhicbhlindnaoaq9nmbc9:hoxikdndnawRbbgrc;Ve0mbavc;abfalarcl4cu7fcsGcitfgPydlhsaPydbhzdnarcsGgPak9pmbavaiarcu7fcsGcdtfydbaxaPEhraPThPdndnadcd9hmbabaDcetfgHaz87ebaHcdfas87ebaHclfar87ebxekabaDcdtfgHazBdbaHclfasBdbaHcwfarBdbkaxaPfhxavc;abfalcitfgHarBdbaHasBdlavaicdtfarBdbavc;abfalcefcsGglcitfgHazBdbaHarBdlaiaPfhialcefhlxdkdndnaPcsSmbamaPfaPc987fcefhmxekaocefhrao8SbbgPcFeGhHdndnaPcu9mmbarhoxekaocvfhoaHcFbGhHcrhPdninar8SbbgOcFbGaPtaHVhHaOcu9kmearcefhraPcrfgPc8J9hmbxdkkarcefhokaHce4cbaHceG9R7amfhmkdndnadcd9hmbabaDcetfgraz87ebarcdfas87ebarclfam87ebxekabaDcdtfgrazBdbarclfasBdbarcwfamBdbkavc;abfalcitfgramBdbarasBdlavaicdtfamBdbavc;abfalcefcsGglcitfgrazBdbaramBdlaicefhialcefhlxekdnarcpe0mbaxcefgOavaiaqarcsGfRbbgPcl49RcsGcdtfydbaPcz6gHEhravaiaP9RcsGcdtfydbaOaHfgsaPcsGgOEhPaOThOdndnadcd9hmbabaDcetfgzax87ebazcdfar87ebazclfaP87ebxekabaDcdtfgzaxBdbazclfarBdbazcwfaPBdbkavaicdtfaxBdbavc;abfalcitfgzarBdbazaxBdlavaicefgicsGcdtfarBdbavc;abfalcefcsGcitfgzaPBdbazarBdlavaiaHfcsGgicdtfaPBdbavc;abfalcdfcsGglcitfgraxBdbaraPBdlalcefhlaiaOfhiasaOfhxxekaxcbaoRbbgzEgAarc;:eSgrfhsazcsGhCazcl4hXdndnazcs0mbascefhOxekashOavaiaX9RcsGcdtfydbhskdndnaCmbaOcefhxxekaOhxavaiaz9RcsGcdtfydbhOkdndnarTmbaocefhrxekaocdfhrao8SbegHcFeGhPdnaHcu9kmbaocofhAaPcFbGhPcrhodninar8SbbgHcFbGaotaPVhPaHcu9kmearcefhraocrfgoc8J9hmbkaAhrxekarcefhrkaPce4cbaPceG9R7amfgmhAkdndnaXcsSmbarhPxekarcefhPar8SbbgocFeGhHdnaocu9kmbarcvfhsaHcFbGhHcrhodninaP8SbbgrcFbGaotaHVhHarcu9kmeaPcefhPaocrfgoc8J9hmbkashPxekaPcefhPkaHce4cbaHceG9R7amfgmhskdndnaCcsSmbaPhoxekaPcefhoaP8SbbgrcFeGhHdnarcu9kmbaPcvfhOaHcFbGhHcrhrdninao8SbbgPcFbGartaHVhHaPcu9kmeaocefhoarcrfgrc8J9hmbkaOhoxekaocefhokaHce4cbaHceG9R7amfgmhOkdndnadcd9hmbabaDcetfgraA87ebarcdfas87ebarclfaO87ebxekabaDcdtfgraABdbarclfasBdbarcwfaOBdbkavc;abfalcitfgrasBdbaraABdlavaicdtfaABdbavc;abfalcefcsGcitfgraOBdbarasBdlavaicefgicsGcdtfasBdbavc;abfalcdfcsGcitfgraABdbaraOBdlavaiazcz6aXcsSVfgicsGcdtfaOBdbaiaCTaCcsSVfhialcifhlkawcefhwalcsGhlaicsGhiaDcifgDae6mbkkcbc99aoaqSEhokavc;aef8Kjjjjbaok:llevu8Jjjjjbcz9Rhvc9:hodnaecvfal0mbcuhoaiRbbc;:eGc;qe9hmbav9cb83iwaicefhraialfc98fhwdnaeTmbdnadcdSmbcbhDindnaraw6mbc9:skarcefhoar8SbbglcFeGhidndnalcu9mmbaohrxekarcvfhraicFbGhicrhldninao8SbbgdcFbGaltaiVhiadcu9kmeaocefhoalcrfglc8J9hmbxdkkaocefhrkabaDcdtfaicd4cbaice4ceG9R7avcwfaiceGcdtVgoydbfglBdbaoalBdbaDcefgDae9hmbxdkkcbhDindnaraw6mbc9:skarcefhoar8SbbglcFeGhidndnalcu9mmbaohrxekarcvfhraicFbGhicrhldninao8SbbgdcFbGaltaiVhiadcu9kmeaocefhoalcrfglc8J9hmbxdkkaocefhrkabaDcetfaicd4cbaice4ceG9R7avcwfaiceGcdtVgoydbfgl87ebaoalBdbaDcefgDae9hmbkkcbc99arawSEhokaok:Lvoeue99dud99eud99dndnadcl9hmbaeTmeindndnabcdfgd8Sbb:Yab8Sbbgi:Ygl:l:tabcefgv8Sbbgo:Ygr:l:tgwJbb;:9cawawNJbbbbawawJbbbb9GgDEgq:mgkaqaicb9iEalMgwawNakaqaocb9iEarMgqaqNMM:r:vglNJbbbZJbbb:;aDEMgr:lJbbb9p9DTmbar:Ohixekcjjjj94hikadai86bbdndnaqalNJbbbZJbbb:;aqJbbbb9GEMgq:lJbbb9p9DTmbaq:Ohdxekcjjjj94hdkavad86bbdndnawalNJbbbZJbbb:;awJbbbb9GEMgw:lJbbb9p9DTmbaw:Ohdxekcjjjj94hdkabad86bbabclfhbaecufgembxdkkaeTmbindndnabclfgd8Ueb:Yab8Uebgi:Ygl:l:tabcdfgv8Uebgo:Ygr:l:tgwJb;:FSawawNJbbbbawawJbbbb9GgDEgq:mgkaqaicb9iEalMgwawNakaqaocb9iEarMgqaqNMM:r:vglNJbbbZJbbb:;aDEMgr:lJbbb9p9DTmbar:Ohixekcjjjj94hikadai87ebdndnaqalNJbbbZJbbb:;aqJbbbb9GEMgq:lJbbb9p9DTmbaq:Ohdxekcjjjj94hdkavad87ebdndnawalNJbbbZJbbb:;awJbbbb9GEMgw:lJbbb9p9DTmbaw:Ohdxekcjjjj94hdkabad87ebabcwfhbaecufgembkkk;siliui99iue99dnaeTmbcbhiabhlindndnJ;Zl81Zalcof8UebgvciV:Y:vgoal8Ueb:YNgrJb;:FSNJbbbZJbbb:;arJbbbb9GEMgw:lJbbb9p9DTmbaw:OhDxekcjjjj94hDkalclf8Uebhqalcdf8UebhkabavcefciGaiVcetfaD87ebdndnaoak:YNgwJb;:FSNJbbbZJbbb:;awJbbbb9GEMgx:lJbbb9p9DTmbax:Ohkxekcjjjj94hkkabavcdfciGaiVcetfak87ebdndnaoaq:YNgoJb;:FSNJbbbZJbbb:;aoJbbbb9GEMgx:lJbbb9p9DTmbax:Ohqxekcjjjj94hqkabavcufciGaiVcetfaq87ebdndnJbbjZararN:tawawN:taoaoN:tgrJbbbbarJbbbb9GE:rJb;:FSNJbbbZMgr:lJbbb9p9DTmbar:Ohqxekcjjjj94hqkabavciGaiVcetfaq87ebalcwfhlaiclfhiaecufgembkkk9mbdnadcd4ae2geTmbinababydbgdcwtcw91:Yadce91cjjj;8ifcjjj98G::NUdbabclfhbaecufgembkkk9teiucbcbydj1jjbgeabcifc98GfgbBdj1jjbdndnabZbcztgd9nmbcuhiabad9RcFFifcz4nbcuSmekaehikaik;LeeeudndnaeabVciGTmbabhixekdndnadcz9pmbabhixekabhiinaiaeydbBdbaiclfaeclfydbBdbaicwfaecwfydbBdbaicxfaecxfydbBdbaiczfhiaeczfheadc9Wfgdcs0mbkkadcl6mbinaiaeydbBdbaeclfheaiclfhiadc98fgdci0mbkkdnadTmbinaiaeRbb86bbaicefhiaecefheadcufgdmbkkabk;aeedudndnabciGTmbabhixekaecFeGc:b:c:ew2hldndnadcz9pmbabhixekabhiinaialBdbaicxfalBdbaicwfalBdbaiclfalBdbaiczfhiadc9Wfgdcs0mbkkadcl6mbinaialBdbaiclfhiadc98fgdci0mbkkdnadTmbinaiae86bbaicefhiadcufgdmbkkabkkkebcjwklz9Kbb",e="b9H79TebbbeKl9Gbb9Gvuuuuueu9Giuuub9Geueuikqbbebeedddilve9Weeeviebeoweuec:q;Aekr;leDo9TW9T9VV95dbH9F9F939H79T9F9J9H229F9Jt9VV7bb8A9TW79O9V9Wt9F9KW9J9V9KW9wWVtW949c919M9MWVbdY9TW79O9V9Wt9F9KW9J9V9KW69U9KW949c919M9MWVblE9TW79O9V9Wt9F9KW9J9V9KW69U9KW949tWG91W9U9JWbvL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9p9JtboK9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9r919HtbrL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWVT949Wbwl79IV9RbDq;t9tqlbzik9:evu8Jjjjjbcz9Rhbcbheincbhdcbhiinabcwfadfaicjuaead4ceGglE86bbaialfhiadcefgdcw9hmbkaec:q:yjjbfai86bbaecitc:q1jjbfab8Piw83ibaecefgecjd9hmbkk;h8JlHud97euo978Jjjjjbcj;kb9Rgv8Kjjjjbc9:hodnadcefal0mbcuhoaiRbbc:Ge9hmbavaialfgrad9Rad;8qbbcj;abad9UhoaicefhldnadTmbaoc;WFbGgocjdaocjd6EhwcbhDinaDae9pmeawaeaD9RaDawfae6Egqcsfgoc9WGgkci2hxakcethmaocl4cifcd4hPabaDad2fhscbhzdnincehHalhOcbhAdninaraO9RaP6miavcj;cbfaAak2fhCaOaPfhlcbhidnakc;ab6mbaral9Rc;Gb6mbcbhoinaCaofhidndndndndnaOaoco4fRbbgXciGPlbedibkaipxbbbbbbbbbbbbbbbbpklbxikaialpbblalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLgQcdp:meaQpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogLpxiiiiiiiiiiiiiiiip8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklbalclfaYpQbfaKc:q:yjjbfRbbfhlxdkaialpbbwalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogLpxssssssssssssssssp8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklbalcwfaYpQbfaKc:q:yjjbfRbbfhlxekaialpbbbpklbalczfhlkdndndndndnaXcd4ciGPlbedibkaipxbbbbbbbbbbbbbbbbpklzxikaialpbblalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLgQcdp:meaQpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogLpxiiiiiiiiiiiiiiiip8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklzalclfaYpQbfaKc:q:yjjbfRbbfhlxdkaialpbbwalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogLpxssssssssssssssssp8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklzalcwfaYpQbfaKc:q:yjjbfRbbfhlxekaialpbbbpklzalczfhlkdndndndndnaXcl4ciGPlbedibkaipxbbbbbbbbbbbbbbbbpklaxikaialpbblalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLgQcdp:meaQpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogLpxiiiiiiiiiiiiiiiip8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklaalclfaYpQbfaKc:q:yjjbfRbbfhlxdkaialpbbwalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogLpxssssssssssssssssp8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklaalcwfaYpQbfaKc:q:yjjbfRbbfhlxekaialpbbbpklaalczfhlkdndndndndnaXco4Plbedibkaipxbbbbbbbbbbbbbbbbpkl8WxikaialpbblalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLgQcdp:meaQpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogLpxiiiiiiiiiiiiiiiip8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgXcitc:q1jjbfpbibaXc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgXcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spkl8WalclfaYpQbfaXc:q:yjjbfRbbfhlxdkaialpbbwalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogLpxssssssssssssssssp8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgXcitc:q1jjbfpbibaXc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgXcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spkl8WalcwfaYpQbfaXc:q:yjjbfRbbfhlxekaialpbbbpkl8Walczfhlkaoc;abfhiaocjefak0meaihoaral9Rc;Fb0mbkkdndnaiak9pmbaici4hoinaral9RcK6mdaCaifhXdndndndndnaOaico4fRbbaocoG4ciGPlbedibkaXpxbbbbbbbbbbbbbbbbpklbxikaXalpbblalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLgQcdp:meaQpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogLpxiiiiiiiiiiiiiiiip8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklbalclfaYpQbfaKc:q:yjjbfRbbfhlxdkaXalpbbwalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogLpxssssssssssssssssp8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklbalcwfaYpQbfaKc:q:yjjbfRbbfhlxekaXalpbbbpklbalczfhlkaocdfhoaiczfgiak6mbkkalTmbaAci6hHalhOaAcefgohAaoclSmdxekkcbhlaHceGmdkdnakTmbavcjdfazfhiavazfpbdbhYcbhXinaiavcj;cbfaXfgopblbgLcep9TaLpxeeeeeeeeeeeeeeeegQp9op9Hp9rgLaoakfpblbg8Acep9Ta8AaQp9op9Hp9rg8ApmbzeHdOiAlCvXoQrLgEaoamfpblbg3cep9Ta3aQp9op9Hp9rg3aoaxfpblbg5cep9Ta5aQp9op9Hp9rg5pmbzeHdOiAlCvXoQrLg8EpmbezHdiOAlvCXorQLgQaQpmbedibedibedibediaYp9UgYp9AdbbaiadfgoaYaQaQpmlvorlvorlvorlvorp9UgYp9AdbbaoadfgoaYaQaQpmwDqkwDqkwDqkwDqkp9UgYp9AdbbaoadfgoaYaQaQpmxmPsxmPsxmPsxmPsp9UgYp9AdbbaoadfgoaYaEa8EpmwDKYqk8AExm35Ps8E8FgQaQpmbedibedibedibedip9UgYp9AdbbaoadfgoaYaQaQpmlvorlvorlvorlvorp9UgYp9AdbbaoadfgoaYaQaQpmwDqkwDqkwDqkwDqkp9UgYp9AdbbaoadfgoaYaQaQpmxmPsxmPsxmPsxmPsp9UgYp9AdbbaoadfgoaYaLa8ApmwKDYq8AkEx3m5P8Es8FgLa3a5pmwKDYq8AkEx3m5P8Es8Fg8ApmbezHdiOAlvCXorQLgQaQpmbedibedibedibedip9UgYp9AdbbaoadfgoaYaQaQpmlvorlvorlvorlvorp9UgYp9AdbbaoadfgoaYaQaQpmwDqkwDqkwDqkwDqkp9UgYp9AdbbaoadfgoaYaQaQpmxmPsxmPsxmPsxmPsp9UgYp9AdbbaoadfgoaYaLa8ApmwDKYqk8AExm35Ps8E8FgQaQpmbedibedibedibedip9UgYp9AdbbaoadfgoaYaQaQpmlvorlvorlvorlvorp9UgYp9AdbbaoadfgoaYaQaQpmwDqkwDqkwDqkwDqkp9UgYp9AdbbaoadfgoaYaQaQpmxmPsxmPsxmPsxmPsp9UgYp9AdbbaoadfhiaXczfgXak6mbkkazclfgzad6mbkasavcjdfaqad2;8qbbavavcjdfaqcufad2fad;8qbbaqaDfhDc9:hoalmexikkc9:hoxekcbc99aral9Radcaadca0ESEhokavcj;kbf8Kjjjjbaokwbz:bjjjbk;uzeHu8Jjjjjbc;ae9Rgv8Kjjjjbc9:hodnaeci9UgrcHfal0mbcuhoaiRbbgwc;WeGc;Ge9hmbawcsGgDce0mbavc;abfcFecje;8kbavcUf9cu83ibavc8Wf9cu83ibavcyf9cu83ibavcaf9cu83ibavcKf9cu83ibavczf9cu83ibav9cu83iwav9cu83ibaialfc9WfhqaicefgwarfhodnaeTmbcmcsaDceSEhkcbhxcbhmcbhDcbhicbhlindnaoaq9nmbc9:hoxikdndnawRbbgrc;Ve0mbavc;abfalarcl4cu7fcsGcitfgPydlhsaPydbhzdnarcsGgPak9pmbavaiarcu7fcsGcdtfydbaxaPEhraPThPdndnadcd9hmbabaDcetfgHaz87ebaHcdfas87ebaHclfar87ebxekabaDcdtfgHazBdbaHclfasBdbaHcwfarBdbkaxaPfhxavc;abfalcitfgHarBdbaHasBdlavaicdtfarBdbavc;abfalcefcsGglcitfgHazBdbaHarBdlaiaPfhialcefhlxdkdndnaPcsSmbamaPfaPc987fcefhmxekaocefhrao8SbbgPcFeGhHdndnaPcu9mmbarhoxekaocvfhoaHcFbGhHcrhPdninar8SbbgOcFbGaPtaHVhHaOcu9kmearcefhraPcrfgPc8J9hmbxdkkarcefhokaHce4cbaHceG9R7amfhmkdndnadcd9hmbabaDcetfgraz87ebarcdfas87ebarclfam87ebxekabaDcdtfgrazBdbarclfasBdbarcwfamBdbkavc;abfalcitfgramBdbarasBdlavaicdtfamBdbavc;abfalcefcsGglcitfgrazBdbaramBdlaicefhialcefhlxekdnarcpe0mbaxcefgOavaiaqarcsGfRbbgPcl49RcsGcdtfydbaPcz6gHEhravaiaP9RcsGcdtfydbaOaHfgsaPcsGgOEhPaOThOdndnadcd9hmbabaDcetfgzax87ebazcdfar87ebazclfaP87ebxekabaDcdtfgzaxBdbazclfarBdbazcwfaPBdbkavaicdtfaxBdbavc;abfalcitfgzarBdbazaxBdlavaicefgicsGcdtfarBdbavc;abfalcefcsGcitfgzaPBdbazarBdlavaiaHfcsGgicdtfaPBdbavc;abfalcdfcsGglcitfgraxBdbaraPBdlalcefhlaiaOfhiasaOfhxxekaxcbaoRbbgzEgAarc;:eSgrfhsazcsGhCazcl4hXdndnazcs0mbascefhOxekashOavaiaX9RcsGcdtfydbhskdndnaCmbaOcefhxxekaOhxavaiaz9RcsGcdtfydbhOkdndnarTmbaocefhrxekaocdfhrao8SbegHcFeGhPdnaHcu9kmbaocofhAaPcFbGhPcrhodninar8SbbgHcFbGaotaPVhPaHcu9kmearcefhraocrfgoc8J9hmbkaAhrxekarcefhrkaPce4cbaPceG9R7amfgmhAkdndnaXcsSmbarhPxekarcefhPar8SbbgocFeGhHdnaocu9kmbarcvfhsaHcFbGhHcrhodninaP8SbbgrcFbGaotaHVhHarcu9kmeaPcefhPaocrfgoc8J9hmbkashPxekaPcefhPkaHce4cbaHceG9R7amfgmhskdndnaCcsSmbaPhoxekaPcefhoaP8SbbgrcFeGhHdnarcu9kmbaPcvfhOaHcFbGhHcrhrdninao8SbbgPcFbGartaHVhHaPcu9kmeaocefhoarcrfgrc8J9hmbkaOhoxekaocefhokaHce4cbaHceG9R7amfgmhOkdndnadcd9hmbabaDcetfgraA87ebarcdfas87ebarclfaO87ebxekabaDcdtfgraABdbarclfasBdbarcwfaOBdbkavc;abfalcitfgrasBdbaraABdlavaicdtfaABdbavc;abfalcefcsGcitfgraOBdbarasBdlavaicefgicsGcdtfasBdbavc;abfalcdfcsGcitfgraABdbaraOBdlavaiazcz6aXcsSVfgicsGcdtfaOBdbaiaCTaCcsSVfhialcifhlkawcefhwalcsGhlaicsGhiaDcifgDae6mbkkcbc99aoaqSEhokavc;aef8Kjjjjbaok:llevu8Jjjjjbcz9Rhvc9:hodnaecvfal0mbcuhoaiRbbc;:eGc;qe9hmbav9cb83iwaicefhraialfc98fhwdnaeTmbdnadcdSmbcbhDindnaraw6mbc9:skarcefhoar8SbbglcFeGhidndnalcu9mmbaohrxekarcvfhraicFbGhicrhldninao8SbbgdcFbGaltaiVhiadcu9kmeaocefhoalcrfglc8J9hmbxdkkaocefhrkabaDcdtfaicd4cbaice4ceG9R7avcwfaiceGcdtVgoydbfglBdbaoalBdbaDcefgDae9hmbxdkkcbhDindnaraw6mbc9:skarcefhoar8SbbglcFeGhidndnalcu9mmbaohrxekarcvfhraicFbGhicrhldninao8SbbgdcFbGaltaiVhiadcu9kmeaocefhoalcrfglc8J9hmbxdkkaocefhrkabaDcetfaicd4cbaice4ceG9R7avcwfaiceGcdtVgoydbfgl87ebaoalBdbaDcefgDae9hmbkkcbc99arawSEhokaok:EPliuo97eue978Jjjjjbca9Rhidndnadcl9hmbdnaec98GglTmbcbhvabhdinadadpbbbgocKp:RecKp:Sep;6egraocwp:RecKp:Sep;6earp;Geaoczp:RecKp:Sep;6egwp;Gep;Kep;LegDpxbbbbbbbbbbbbbbbbp:2egqarpxbbbjbbbjbbbjbbbjgkp9op9rp;Kegrpxbb;:9cbb;:9cbb;:9cbb;:9cararp;MeaDaDp;Meawaqawakp9op9rp;Kegrarp;Mep;Kep;Kep;Jep;Negwp;Mepxbbn0bbn0bbn0bbn0gqp;KepxFbbbFbbbFbbbFbbbp9oaopxbbbFbbbFbbbFbbbFp9op9qarawp;Meaqp;Kecwp:RepxbFbbbFbbbFbbbFbbp9op9qaDawp;Meaqp;Keczp:RepxbbFbbbFbbbFbbbFbp9op9qpkbbadczfhdavclfgval6mbkkalae9pmeaiaeciGgvcdtgdVcbczad9R;8kbaiabalcdtfglad;8qbbdnavTmbaiaipblbgocKp:RecKp:Sep;6egraocwp:RecKp:Sep;6earp;Geaoczp:RecKp:Sep;6egwp;Gep;Kep;LegDpxbbbbbbbbbbbbbbbbp:2egqarpxbbbjbbbjbbbjbbbjgkp9op9rp;Kegrpxbb;:9cbb;:9cbb;:9cbb;:9cararp;MeaDaDp;Meawaqawakp9op9rp;Kegrarp;Mep;Kep;Kep;Jep;Negwp;Mepxbbn0bbn0bbn0bbn0gqp;KepxFbbbFbbbFbbbFbbbp9oaopxbbbFbbbFbbbFbbbFp9op9qarawp;Meaqp;Kecwp:RepxbFbbbFbbbFbbbFbbp9op9qaDawp;Meaqp;Keczp:RepxbbFbbbFbbbFbbbFbp9op9qpklbkalaiad;8qbbskdnaec98GgxTmbcbhvabhdinadczfglalpbbbgopxbbbbbbFFbbbbbbFFgkp9oadpbbbgDaopmlvorxmPsCXQL358E8FpxFubbFubbFubbFubbp9op;6eaDaopmbediwDqkzHOAKY8AEgoczp:Sep;6egrp;Geaoczp:Reczp:Sep;6egwp;Gep;Kep;Legopxb;:FSb;:FSb;:FSb;:FSawaopxbbbbbbbbbbbbbbbbp:2egqawpxbbbjbbbjbbbjbbbjgmp9op9rp;Kegwawp;Meaoaop;Mearaqaramp9op9rp;Kegoaop;Mep;Kep;Kep;Jep;Negrp;Mepxbbn0bbn0bbn0bbn0gqp;Keczp:Reawarp;Meaqp;KepxFFbbFFbbFFbbFFbbp9op9qgwaoarp;Meaqp;KepxFFbbFFbbFFbbFFbbp9ogopmwDKYqk8AExm35Ps8E8Fp9qpkbbadaDakp9oawaopmbezHdiOAlvCXorQLp9qpkbbadcafhdavclfgvax6mbkkaxae9pmbaiaeciGgvcitgdfcbcaad9R;8kbaiabaxcitfglad;8qbbdnavTmbaiaipblzgopxbbbbbbFFbbbbbbFFgkp9oaipblbgDaopmlvorxmPsCXQL358E8FpxFubbFubbFubbFubbp9op;6eaDaopmbediwDqkzHOAKY8AEgoczp:Sep;6egrp;Geaoczp:Reczp:Sep;6egwp;Gep;Kep;Legopxb;:FSb;:FSb;:FSb;:FSawaopxbbbbbbbbbbbbbbbbp:2egqawpxbbbjbbbjbbbjbbbjgmp9op9rp;Kegwawp;Meaoaop;Mearaqaramp9op9rp;Kegoaop;Mep;Kep;Kep;Jep;Negrp;Mepxbbn0bbn0bbn0bbn0gqp;Keczp:Reawarp;Meaqp;KepxFFbbFFbbFFbbFFbbp9op9qgwaoarp;Meaqp;KepxFFbbFFbbFFbbFFbbp9ogopmwDKYqk8AExm35Ps8E8Fp9qpklzaiaDakp9oawaopmbezHdiOAlvCXorQLp9qpklbkalaiad;8qbbkk;4wllue97euv978Jjjjjbc8W9Rhidnaec98GglTmbcbhvabhoinaiaopbbbgraoczfgwpbbbgDpmlvorxmPsCXQL358E8Fgqczp:Segkclp:RepklbaopxbbjZbbjZbbjZbbjZpx;Zl81Z;Zl81Z;Zl81Z;Zl81Zakpxibbbibbbibbbibbbp9qp;6ep;NegkaraDpmbediwDqkzHOAKY8AEgrczp:Reczp:Sep;6ep;MegDaDp;Meakarczp:Sep;6ep;Megxaxp;Meakaqczp:Reczp:Sep;6ep;Megqaqp;Mep;Kep;Kep;Lepxbbbbbbbbbbbbbbbbp:4ep;Jepxb;:FSb;:FSb;:FSb;:FSgkp;Mepxbbn0bbn0bbn0bbn0grp;KepxFFbbFFbbFFbbFFbbgmp9oaxakp;Mearp;Keczp:Rep9qgxaqakp;Mearp;Keczp:ReaDakp;Mearp;Keamp9op9qgkpmbezHdiOAlvCXorQLgrp5baipblbpEb:T:j83ibaocwfarp5eaipblbpEe:T:j83ibawaxakpmwDKYqk8AExm35Ps8E8Fgkp5baipblbpEd:T:j83ibaocKfakp5eaipblbpEi:T:j83ibaocafhoavclfgval6mbkkdnalae9pmbaiaeciGgvcitgofcbcaao9R;8kbaiabalcitfgwao;8qbbdnavTmbaiaipblbgraipblzgDpmlvorxmPsCXQL358E8Fgqczp:Segkclp:RepklaaipxbbjZbbjZbbjZbbjZpx;Zl81Z;Zl81Z;Zl81Z;Zl81Zakpxibbbibbbibbbibbbp9qp;6ep;NegkaraDpmbediwDqkzHOAKY8AEgrczp:Reczp:Sep;6ep;MegDaDp;Meakarczp:Sep;6ep;Megxaxp;Meakaqczp:Reczp:Sep;6ep;Megqaqp;Mep;Kep;Kep;Lepxbbbbbbbbbbbbbbbbp:4ep;Jepxb;:FSb;:FSb;:FSb;:FSgkp;Mepxbbn0bbn0bbn0bbn0grp;KepxFFbbFFbbFFbbFFbbgmp9oaxakp;Mearp;Keczp:Rep9qgxaqakp;Mearp;Keczp:ReaDakp;Mearp;Keamp9op9qgkpmbezHdiOAlvCXorQLgrp5baipblapEb:T:j83ibaiarp5eaipblapEe:T:j83iwaiaxakpmwDKYqk8AExm35Ps8E8Fgkp5baipblapEd:T:j83izaiakp5eaipblapEi:T:j83iKkawaiao;8qbbkk:Pddiue978Jjjjjbc;ab9Rhidnadcd4ae2glc98GgvTmbcbhdabheinaeaepbbbgocwp:Recwp:Sep;6eaocep:SepxbbjZbbjZbbjZbbjZp:UepxbbjFbbjFbbjFbbjFp9op;Mepkbbaeczfheadclfgdav6mbkkdnaval9pmbaialciGgdcdtgeVcbc;abae9R;8kbaiabavcdtfgvae;8qbbdnadTmbaiaipblbgocwp:Recwp:Sep;6eaocep:SepxbbjZbbjZbbjZbbjZp:UepxbbjFbbjFbbjFbbjFp9op;Mepklbkavaiae;8qbbkk9teiucbcbydj1jjbgeabcifc98GfgbBdj1jjbdndnabZbcztgd9nmbcuhiabad9RcFFifcz4nbcuSmekaehikaikkkebcjwklz9Tbb",t=new Uint8Array([0,97,115,109,1,0,0,0,1,4,1,96,0,0,3,3,2,0,0,5,3,1,0,1,12,1,0,10,22,2,12,0,65,0,65,0,65,0,252,10,0,0,11,7,0,65,0,253,15,26,11]),n=new Uint8Array([32,0,65,2,1,106,34,33,3,128,11,4,13,64,6,253,10,7,15,116,127,5,8,12,40,16,19,54,20,9,27,255,113,17,42,67,24,23,146,148,18,14,22,45,70,69,56,114,101,21,25,63,75,136,108,28,118,29,73,115]);if(typeof WebAssembly!="object")return{supported:!1};var i=WebAssembly.validate(t)?e:s,r,a=WebAssembly.instantiate(o(i),{}).then(function(p){r=p.instance,r.exports.__wasm_call_ctors()});function o(p){for(var y=new Uint8Array(p.length),v=0;v<p.length;++v){var _=p.charCodeAt(v);y[v]=_>96?_-97:_>64?_-39:_+4}for(var w=0,v=0;v<p.length;++v)y[w++]=y[v]<60?n[y[v]]:(y[v]-60)*64+y[++v];return y.buffer.slice(0,w)}function c(p,y,v,_,w,T){var M=r.exports.sbrk,C=v+3&-4,D=M(C*_),x=M(w.length),A=new Uint8Array(r.exports.memory.buffer);A.set(w,x);var F=p(D,v,_,x,w.length);if(F==0&&T&&T(D,C,_),y.set(A.subarray(D,D+v*_)),M(D-M(0)),F!=0)throw new Error("Malformed buffer data: "+F)}var l={NONE:"",OCTAHEDRAL:"meshopt_decodeFilterOct",QUATERNION:"meshopt_decodeFilterQuat",EXPONENTIAL:"meshopt_decodeFilterExp"},h={ATTRIBUTES:"meshopt_decodeVertexBuffer",TRIANGLES:"meshopt_decodeIndexBuffer",INDICES:"meshopt_decodeIndexSequence"},u=[],d=0;function f(p){var y={object:new Worker(p),pending:0,requests:{}};return y.object.onmessage=function(v){var _=v.data;y.pending-=_.count,y.requests[_.id][_.action](_.value),delete y.requests[_.id]},y}function g(p){for(var y="var instance; var ready = WebAssembly.instantiate(new Uint8Array(["+new Uint8Array(o(i))+"]), {}).then(function(result) { instance = result.instance; instance.exports.__wasm_call_ctors(); });self.onmessage = workerProcess;"+c.toString()+m.toString(),v=new Blob([y],{type:"text/javascript"}),_=URL.createObjectURL(v),w=0;w<p;++w)u[w]=f(_);URL.revokeObjectURL(_)}function b(p,y,v,_,w){for(var T=u[0],M=1;M<u.length;++M)u[M].pending<T.pending&&(T=u[M]);return new Promise(function(C,D){var x=new Uint8Array(v),A=d++;T.pending+=p,T.requests[A]={resolve:C,reject:D},T.object.postMessage({id:A,count:p,size:y,source:x,mode:_,filter:w},[x.buffer])})}function m(p){a.then(function(){var y=p.data;try{var v=new Uint8Array(y.count*y.size);c(r.exports[y.mode],v,y.count,y.size,y.source,r.exports[y.filter]),self.postMessage({id:y.id,count:y.count,action:"resolve",value:v},[v.buffer])}catch(_){self.postMessage({id:y.id,count:y.count,action:"reject",value:_})}})}return{ready:a,supported:!0,useWorkers:function(p){g(p)},decodeVertexBuffer:function(p,y,v,_,w){c(r.exports.meshopt_decodeVertexBuffer,p,y,v,_,r.exports[l[w]])},decodeIndexBuffer:function(p,y,v,_){c(r.exports.meshopt_decodeIndexBuffer,p,y,v,_)},decodeIndexSequence:function(p,y,v,_){c(r.exports.meshopt_decodeIndexSequence,p,y,v,_)},decodeGltfBuffer:function(p,y,v,_,w,T){c(r.exports[h[w]],p,y,v,_,r.exports[l[T]])},decodeGltfBufferAsync:function(p,y,v,_,w){return u.length>0?b(p,y,v,h[_],l[w]):a.then(function(){var T=new Uint8Array(p*y);return c(r.exports[h[_]],T,p,y,v,r.exports[l[w]]),T})}}}();class yy extends rd{constructor(){super();const e=new Fi;e.deleteAttribute("uv");const t=new xr({side:Jt}),n=new xr,i=new Sd(16777215,900,28,2);i.position.set(.418,16.199,.3),this.add(i);const r=new $e(e,t);r.position.set(-.757,13.219,.717),r.scale.set(31.713,28.305,28.591),this.add(r);const a=new $e(e,n);a.position.set(-10.906,2.009,1.846),a.rotation.set(0,-.195,0),a.scale.set(2.328,7.905,4.651),this.add(a);const o=new $e(e,n);o.position.set(-5.607,-.754,-.758),o.rotation.set(0,.994,0),o.scale.set(1.97,1.534,3.955),this.add(o);const c=new $e(e,n);c.position.set(6.167,.857,7.803),c.rotation.set(0,.561,0),c.scale.set(3.927,6.285,3.687),this.add(c);const l=new $e(e,n);l.position.set(-2.017,.018,6.124),l.rotation.set(0,.333,0),l.scale.set(2.002,4.566,2.064),this.add(l);const h=new $e(e,n);h.position.set(2.291,-.756,-2.621),h.rotation.set(0,-.286,0),h.scale.set(1.546,1.552,1.496),this.add(h);const u=new $e(e,n);u.position.set(-2.193,-.369,-5.547),u.rotation.set(0,.516,0),u.scale.set(3.875,3.487,2.986),this.add(u);const d=new $e(e,rs(50));d.position.set(-16.116,14.37,8.208),d.scale.set(.1,2.428,2.739),this.add(d);const f=new $e(e,rs(50));f.position.set(-16.109,18.021,-8.207),f.scale.set(.1,2.425,2.751),this.add(f);const g=new $e(e,rs(17));g.position.set(14.904,12.198,-1.832),g.scale.set(.15,4.265,6.331),this.add(g);const b=new $e(e,rs(43));b.position.set(-.462,8.89,14.52),b.scale.set(4.38,5.441,.088),this.add(b);const m=new $e(e,rs(20));m.position.set(3.235,11.486,-12.541),m.scale.set(2.5,2,.1),this.add(m);const p=new $e(e,rs(100));p.position.set(0,20,0),p.scale.set(1,.1,1),this.add(p)}dispose(){const e=new Set;this.traverse(t=>{t.isMesh&&(e.add(t.geometry),e.add(t.material))});for(const t of e)t.dispose()}}function rs(s){const e=new $t;return e.color.setScalar(s),e}class My{constructor(e,t,n,i){this.scene=e,this.camera=t,this.renderer=n,this.items=i,this.mode="hidden",this.active=null,this.reduceMotion=!1,this.anchor=new yt,this.stage=new yt,this.spin=new yt,this.inspectHolder=new yt,this.lights=new yt,this.models=new Map,this.loading=new Map,this.envMap=null,this.appear=0,this.targetAppear=0,this.frozenAt=0,this.rotX=0,this.rotY=0,this.velY=0,this.velX=0,this.zoom=1,this.lastTouch=0,this.pointers=new Map,this.pinchDist=0,this.pinchAngle=0,this.tapStart={t:0,x:0,y:0},this.lastTap=0,this.envIntensity=1,this.anchor.matrixAutoUpdate=!1,this.anchor.add(this.stage),this.stage.add(this.spin),this.anchor.visible=!1,t.add(this.anchor),this.inspectHolder.position.set(0,.035,-.45),t.add(this.inspectHolder);const r=new cx(16774890,7035466,1.1),a=new wd(16777215,1.6);a.position.set(.6,1,.8),this.lights.add(r,a),t.add(this.lights)}ensureEnv(){if(this.envMap)return this.envMap;const e=new Dc(this.renderer);return this.envMap=e.fromScene(new yy,.04).texture,e.dispose(),this.envMap}preload(){for(const e of this.items)this.load(e)}load(e){const t=this.loading.get(e.id);if(t)return t;const n=new B_;n.setMeshoptDecoder(_y);const i=new URL(e.model,document.baseURI).href,r=this.ensureEnv(),a=n.loadAsync(i).then(o=>{const c=o.scene,l=new Nn().setFromObject(c),h=l.getSize(new R),u=l.getCenter(new R),d=1/Math.max(h.x,h.y,h.z),f=new yt;return c.position.sub(u),f.add(c),f.scale.setScalar(d),c.traverse(g=>{const b=g.material;b&&"envMap"in b&&(b.envMap=r,b.envMapIntensity=.9,b.needsUpdate=!0),g.renderOrder=4}),this.models.set(e.id,f),f}).catch(o=>(console.warn("[artifact] không tải được model",e.model,o),null));return this.loading.set(e.id,a),a}async show(e){const t=this.items.find(i=>i.targetIndex===e);if(!t||this.mode==="inspect")return;const n=await this.load(t);n&&(this.active?.id!==t.id&&(this.spin.clear(),this.spin.add(n),this.resetView(),this.appear=0,this.active=t),this.anchor.parent!==this.camera&&this.camera.add(this.anchor),this.stage.position.set(...t.offset),this.stage.rotation.set(.32,0,0),this.stage.scale.setScalar(t.size),this.anchor.visible=!0,this.targetAppear=1,this.setMode("anchored"))}lose(e,t){this.mode==="anchored"&&(this.anchor.matrix.multiplyMatrices(e,t),this.scene.add(this.anchor),this.frozenAt=performance.now(),this.setMode("frozen"))}inspect(){if(!this.active)return;this.inspectHolder.add(this.spin),this.spin.position.set(0,0,0);const e=this.camera,t=2*Math.tan(Ce.degToRad(e.fov/2))*.45*e.aspect;this.inspectHolder.scale.setScalar(Math.min(.2,t*.6)),this.inspectHolder.rotation.set(.25,0,0),this.anchor.visible=!1,this.appear=Math.min(this.appear,.3),this.targetAppear=1,this.setMode("inspect")}close(){this.stage.add(this.spin),this.targetAppear=0,this.setMode("hidden")}resetView(){this.rotX=0,this.rotY=0,this.velX=this.velY=0,this.zoom=1}get visible(){return this.mode!=="hidden"}setMode(e){e!==this.mode&&(this.mode=e,this.onChange?.(e==="hidden"?null:this.active,e))}setLight(e){this.envIntensity=Ce.lerp(.55,1.1,Ce.clamp(e/.5,0,1))}attachGestures(e,t){e.addEventListener("pointerdown",i=>{!t()||!this.visible||(this.pointers.set(i.pointerId,{x:i.clientX,y:i.clientY}),e.setPointerCapture?.(i.pointerId),this.pointers.size===1&&(this.tapStart={t:performance.now(),x:i.clientX,y:i.clientY}),this.pointers.size===2&&this.pinchInit(),this.velX=this.velY=0)}),e.addEventListener("pointermove",i=>{const r=this.pointers.get(i.pointerId);if(!r)return;const a=i.clientX-r.x,o=i.clientY-r.y;if(r.x=i.clientX,r.y=i.clientY,this.lastTouch=performance.now(),this.pointers.size===1)this.rotY+=a*.011,this.rotX=Ce.clamp(this.rotX+o*.011,-1.2,1.2),this.velY=a*.011*60,this.velX=o*.011*60;else if(this.pointers.size===2){const[c,l]=[...this.pointers.values()],h=Math.hypot(c.x-l.x,c.y-l.y),u=Math.atan2(l.y-c.y,l.x-c.x);this.pinchDist>0&&(this.zoom=Ce.clamp(this.zoom*(h/this.pinchDist),.5,3));let d=u-this.pinchAngle;d>Math.PI&&(d-=Math.PI*2),d<-Math.PI&&(d+=Math.PI*2),this.rotY-=d,this.pinchDist=h,this.pinchAngle=u}});const n=i=>{if(!this.pointers.has(i.pointerId))return;this.pointers.delete(i.pointerId),this.pointers.size===1&&this.pinchInit();const r=performance.now(),a=Math.hypot(i.clientX-this.tapStart.x,i.clientY-this.tapStart.y);this.pointers.size===0&&r-this.tapStart.t<250&&a<10&&(r-this.lastTap<320?(this.resetView(),this.lastTap=0):this.lastTap=r)};e.addEventListener("pointerup",n),e.addEventListener("pointercancel",n)}pinchInit(){const e=[...this.pointers.values()];if(e.length<2){this.pinchDist=0;return}this.pinchDist=Math.hypot(e[0].x-e[1].x,e[0].y-e[1].y),this.pinchAngle=Math.atan2(e[1].y-e[0].y,e[1].x-e[0].x)}update(e,t){this.mode==="anchored"&&t&&this.anchor.matrix.copy(t),this.mode==="frozen"&&performance.now()-this.frozenAt>2500&&(this.targetAppear=0,this.appear<.02&&(this.camera.add(this.anchor),this.anchor.visible=!1,this.setMode("hidden")));const n=this.reduceMotion?12:5;if(this.appear+=(this.targetAppear-this.appear)*Math.min(1,e*n),this.mode==="hidden"&&this.appear<.02){this.anchor.visible=!1,this.spin.visible=!1;return}if(this.spin.visible=!0,!(this.pointers.size>0)){this.rotY+=this.velY*e,this.rotX=Ce.clamp(this.rotX+this.velX*e,-1.2,1.2);const a=Math.exp(-e*3.5);this.velY*=a,this.velX*=a,!this.reduceMotion&&performance.now()-this.lastTouch>3e3&&Math.abs(this.velY)<.05&&(this.rotY+=e*.3)}const r=Sy(Ce.clamp(this.appear,0,1));this.spin.rotation.set(this.rotX,this.rotY,0,"XYZ"),this.spin.scale.setScalar(Math.max(.001,r*this.zoom)),this.spin.position.y=this.mode==="inspect"?0:(1-this.appear)*-.25;for(const a of this.models.values())a.traverse(o=>{const c=o.material;c&&"envMapIntensity"in c&&(c.envMapIntensity=this.envIntensity)})}}function Sy(s){return 1+2.4*Math.pow(s-1,3)+1.4*Math.pow(s-1,2)}const Cd={vi:{exhibitionLine:"Trưng bày chuyên đề tại Di tích Nhà tù Hỏa Lò",occasion:"Nhân kỷ niệm 97 năm ngày thành lập Đảng và chào xuân Đinh Mùi 2027",start:"Bắt đầu trải nghiệm",offlineReady:"Đã tải xong, dùng được cả khi mất mạng",offlineLoading:"Đang tải trước để dùng offline",permTitle:"Trước khi bắt đầu",permCamera:"Camera",permCameraBody:"Để vẽ hoa đào lên khung cảnh trước mặt. Hình ảnh chỉ xử lý trên điện thoại, không gửi đi đâu.",permMotion:"Cảm biến chuyển động",permMotionBody:"Để hoa đứng yên trong không gian khi bạn xoay điện thoại.",whereTitle:"Bạn đang ở đâu?",whereIn:"Trong hành lang trưng bày",whereOut:"Ngoài cổng, cần chỉ đường",xrOption:"Dùng AR nâng cao của Android (hoa bám sàn chính xác hơn, tạm tắt nhận diện tay)",allow:"Cho phép và bắt đầu",back:"Quay lại",ob1:"Khum tay lại để hứng một cánh hoa. Xoè tay ra để thả.",ob2:"Ngẩng điện thoại lên để thấy cành đào đang rụng hoa.",ob3:"Hướng xuống sàn hoặc mặt bàn rồi đưa tay gạt lớp hoa.",next:"Tiếp",done:"Bắt đầu",skip:"Bỏ qua",safety:"Hãy chú ý xung quanh khi nhìn màn hình.",handSeen:"Đã thấy tay",handHolding:"Đang giữ hoa",handLoading:"Đang chuẩn bị nhận diện tay",modeIndoor:"Trong hành lang",modeOutdoor:"Ngoài cổng",reading:"Chế độ đọc",readingOn:"Đã bật chế độ đọc: ít hoa ở giữa màn hình",readingOff:"Đã tắt chế độ đọc",menu:"Tuỳ chọn",capture:"Chụp ảnh",sound:"Âm thanh",battery:"Tiết kiệm pin",reduceMotion:"Giảm chuyển động",density:"Mật độ hoa",guide:"Hiện khung hành lang (kiểm tra vị trí)",recenter:"Căn lại hướng",recenterHint:"Quay mặt vào trong hành lang, hướng về khu cây đào, rồi bấm.",recentered:"Đã căn lại hướng",standAt:"Tôi đang đứng trước…",standAtHint:"Hướng camera thẳng vào panel đó rồi chọn tên panel.",fixed:"Đã căn vị trí theo panel",tutorial:"Xem lại hướng dẫn",language:"English",close:"Đóng",savePhoto:"Lưu ảnh",sharePhoto:"Chia sẻ",photoReady:"Ảnh của bạn",outdoorFollow:"Đi theo dải sáng trên sàn",outdoorLeft:s=>`Còn khoảng ${s} m tới cổng triển lãm`,turnLeft:"Xoay sang trái để thấy dải sáng",turnRight:"Xoay sang phải để thấy dải sáng",turnBack:"Quay người lại, dải sáng ở phía sau",outdoorAlign:"Căn tại pano P",outdoorAlignHint:'Đứng trước pano "Đón Gió Xuân" ở cổng di tích, hướng camera vào pano rồi bấm.',outdoorAligned:"Đã căn theo pano P",arrived:"Tôi đã vào triển lãm",arrivedNear:"Bạn đã tới cổng. Vào trong để xem hoa rơi.",lost:"Hướng camera về bảng triển lãm để định vị lại",errDenied:"Chưa có quyền dùng camera. Mở cài đặt trình duyệt, cho phép camera cho trang này rồi tải lại.",errInsecure:"Trang cần mở qua https:// để dùng camera. Hãy quét lại mã QR tại pano.",errNoCam:"Không tìm thấy camera. Bạn vẫn xem được hoa: kéo màn hình để nhìn quanh.",errNoSensor:"Điện thoại không gửi dữ liệu cảm biến. Kéo màn hình để nhìn quanh.",errSensorDenied:"Chưa có quyền cảm biến chuyển động. Kéo màn hình để nhìn quanh, hoặc tải lại trang và chọn Cho phép.",errLowLight:"Chỗ này hơi tối nên nhận diện tay có thể chậm. Đưa tay gần nguồn sáng hơn.",errHand:"Không tải được nhận diện tay. Hoa vẫn rơi bình thường.",help:"Trợ giúp",helpBody:'Khum tay để hứng hoa, xoè tay để thả. Ngẩng lên để xem cành đào, cúi xuống để gạt hoa trên sàn. Hướng camera vào ảnh chậu tôn hoặc thùng gỗ để xem hiện vật 3D, kéo để xoay, chụm hai ngón để phóng to. Nếu hoa lệch vị trí, chọn "Tôi đang đứng trước…" và chọn panel trước mặt.',privacy:"Video chỉ xử lý trên điện thoại của bạn và không được tải lên máy chủ.",xrPlace:"Đứng ở lối vào cổng G1, hướng camera xuống sàn rồi chạm vào vòng tròn",xrPlaced:"Đã đặt hành lang",xrScan:"Đang tìm mặt sàn: hướng camera xuống sàn và lia chậm sang hai bên",xrNotFloor:"Đây có vẻ là mặt bàn hoặc đồ vật, không phải sàn. Hãy hướng camera xuống sàn.",xrFloorFixed:"Đã nhận ra mặt sàn thật và đặt lại hoa",xrReplace:"Đặt lại mặt sàn",floorScan:"Hướng camera xuống vùng sàn trống gần chân, giữ yên khoảng 1 giây rồi lia chậm. Hoa chỉ đọng khi nhận được vùng sàn.",exitXr:"Thoát AR nâng cao",artHint:"Kéo để xoay, chụm hai ngón để phóng to. Chạm hai lần để đặt lại.",artInspect:"Xem kỹ",artReset:"Đặt lại",artClose:"Đóng",artScan:"Gặp ảnh chậu tôn hoặc thùng gỗ? Hướng camera vào ảnh để xem hiện vật 3D."},en:{exhibitionLine:"A thematic exhibition at the Hỏa Lò Prison Relic",occasion:"97th anniversary of the founding of the Communist Party of Vietnam, welcoming the Spring of 2027",start:"Begin the experience",offlineReady:"Downloaded. Works without a connection",offlineLoading:"Downloading for offline use",permTitle:"Before you begin",permCamera:"Camera",permCameraBody:"To draw peach blossoms over the scene in front of you. Video stays on your phone and is never uploaded.",permMotion:"Motion sensors",permMotionBody:"So the blossoms stay put in the room as you turn your phone.",whereTitle:"Where are you?",whereIn:"Inside the exhibition corridor",whereOut:"Outside the gate, show me the way",xrOption:"Use Android enhanced AR (blossoms sit on the floor more accurately; hand tracking paused)",allow:"Allow and begin",back:"Back",ob1:"Cup your hand to catch a petal. Open it to let go.",ob2:"Tilt your phone up to see blossoming peach branches.",ob3:"Point at the floor or the table and sweep the petals with your hand.",next:"Next",done:"Begin",skip:"Skip",safety:"Mind your surroundings while looking at the screen.",handSeen:"Hand found",handHolding:"Holding petals",handLoading:"Preparing hand tracking",modeIndoor:"In the corridor",modeOutdoor:"Outside",reading:"Reading mode",readingOn:"Reading mode on: fewer petals in the middle of the screen",readingOff:"Reading mode off",menu:"Options",capture:"Take photo",sound:"Sound",battery:"Battery saver",reduceMotion:"Reduce motion",density:"Petal density",guide:"Show corridor outline (check alignment)",recenter:"Reset direction",recenterHint:"Face into the corridor, toward the peach tree, then tap.",recentered:"Direction reset",standAt:"I am standing at…",standAtHint:"Point the camera straight at that panel, then choose its name.",fixed:"Position set from panel",tutorial:"Show the guide again",language:"Tiếng Việt",close:"Close",savePhoto:"Save photo",sharePhoto:"Share",photoReady:"Your photo",outdoorFollow:"Follow the light on the ground",outdoorLeft:s=>`About ${s} m to the exhibition gate`,turnLeft:"Turn left to see the light",turnRight:"Turn right to see the light",turnBack:"Turn around, the light is behind you",outdoorAlign:"Align at panel P",outdoorAlignHint:"Stand in front of the “Đón Gió Xuân” panel at the relic gate, point the camera at it, then tap.",outdoorAligned:"Aligned to panel P",arrived:"I am inside the exhibition",arrivedNear:"You have reached the gate. Step inside to see the falling blossoms.",lost:"Point the camera at an exhibition panel to re-align",errDenied:"Camera access is off. Allow the camera for this site in your browser settings, then reload.",errInsecure:"This page needs https:// to use the camera. Scan the QR code on the panel again.",errNoCam:"No camera found. You can still see the blossoms: drag the screen to look around.",errNoSensor:"Your phone is not sending motion data. Drag the screen to look around.",errSensorDenied:"Motion access is off. Drag the screen to look around, or reload and choose Allow.",errLowLight:"It is a little dark here, so hand tracking may lag. Move your hand closer to the light.",errHand:"Hand tracking could not load. Blossoms still fall as usual.",help:"Help",helpBody:"Cup your hand to catch petals, open it to let go. Look up for the branches, look down to sweep the floor. Point the camera at the photo of the metal basin or the wooden crate to see it in 3D; drag to rotate, pinch to zoom. If the blossoms drift, choose “I am standing at…” and pick the panel in front of you.",privacy:"Video is processed only on your phone and is never uploaded to a server.",xrPlace:"Stand at the G1 gate entrance, point the camera at the floor, then tap the ring",xrPlaced:"Corridor placed",xrScan:"Looking for the floor: point the camera at the floor and pan slowly from side to side",xrNotFloor:"This looks like a table or an object, not the floor. Point the camera at the floor.",xrFloorFixed:"Found the real floor and reset the blossoms",xrReplace:"Reset the floor",floorScan:"Point at clear floor near your feet, hold for about a second, then pan slowly. Petals settle only after the floor region is found.",exitXr:"Leave enhanced AR",artHint:"Drag to rotate, pinch to zoom. Double-tap to reset.",artInspect:"Look closer",artReset:"Reset",artClose:"Close",artScan:"See the photo of the metal basin or the wooden crate? Point your camera at it to view the object in 3D."}};let Va=(()=>{try{const s=localStorage.getItem("dgx-lang");if(s==="vi"||s==="en")return s}catch{}return navigator.language?.toLowerCase().startsWith("vi"),"vi"})();const Pd=new Set;function Q(s){return Cd[Va][s]}function en(s){return Cd[Va==="vi"?"en":"vi"][s]}function Wc(){return Va}function Ld(s){Va=s;try{localStorage.setItem("dgx-lang",s)}catch{}document.documentElement.lang=s,Pd.forEach(e=>e())}function Id(s){Pd.add(s)}const Ti=(s,e="0 0 24 24")=>`<svg viewBox="${e}" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${s}</svg>`,Ii={camera:Ti('<path d="M4 8h3l2-2.5h6L17 8h3v11H4z"/><circle cx="12" cy="13" r="3.6"/>'),motion:Ti('<rect x="8" y="4" width="8" height="16" rx="2"/><path d="M4.5 9.5a8 8 0 0 0 0 5M19.5 9.5a8 8 0 0 1 0 5"/>'),book:Ti('<path d="M3.5 5.5c3-1 5.5-.6 8.5 1.2 3-1.8 5.5-2.2 8.5-1.2v13c-3-1-5.5-.6-8.5 1.2-3-1.8-5.5-2.2-8.5-1.2z"/><path d="M12 6.7v13"/>'),menu:Ti('<path d="M5 8h14M5 12h14M5 16h9"/>'),hand:Ti('<path d="M8 12V6.5a1.4 1.4 0 0 1 2.8 0V11M10.8 10.5V5a1.4 1.4 0 0 1 2.8 0v5.5M13.6 10.5V6.2a1.4 1.4 0 0 1 2.8 0v6.3M16.4 11.5a1.4 1.4 0 0 1 2.8 0V15a6 6 0 0 1-6 6h-1.4a6 6 0 0 1-4.6-2.2L4.6 15.4a1.4 1.4 0 0 1 2.1-1.8L8 15"/>'),door:Ti('<path d="M6 20V4h12v16M3.5 20h17"/><path d="M14.5 12h.01"/>'),path:Ti('<path d="M6 20c0-5 12-4 12-9S10 6 10 3"/><circle cx="10" cy="3" r="0.6"/>')},jn=(s,e,t=0,n="")=>`<path class="${n}" transform="translate(${s} ${e}) rotate(${t})" d="M0 7C-5 3 -5 -4 -2 -7L0 -5.5 2 -7C5 -4 5 3 0 7z" fill="#FFC1D6" stroke="#FF8FB1" stroke-width="1"/>`,wy=[`<svg viewBox="0 0 132 112" aria-hidden="true"><style>
    .f1{animation:f1 2.6s ease-in infinite}@keyframes f1{0%{transform:translate(66px,2px) rotate(-20deg);opacity:0}15%{opacity:1}70%{transform:translate(66px,66px) rotate(40deg);opacity:1}100%{transform:translate(66px,68px) rotate(40deg);opacity:1}}
  </style>
  <g fill="#FCFAF0" stroke="#00539B" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <path d="M66 96c-16 0-30-8-36-22l-6-16c-1-4 4-6 6-3l5 8-3-16c-1-4 5-5 6-1l3 13-1-17c0-4 6-4 6 0l1 17 1-14c0-4 6-4 6 0l1 26c3 6 7 12 12 14z"/>
    <path d="M66 96c16 0 30-8 36-22l6-16c1-4-4-6-6-3l-5 8 3-16c1-4-5-5-6-1l-3 13 1-17c0-4-6-4-6 0l-1 17-1-14c0-4-6-4-6 0l-1 26c-3 6-7 12-12 14z"/>
  </g>
  <g class="f1">${jn(0,0)}</g></svg>`,`<svg viewBox="0 0 132 112" aria-hidden="true"><style>
    .p2{transform-origin:66px 96px;animation:p2 2.8s ease-in-out infinite}@keyframes p2{0%,20%{transform:rotate(0)}50%,85%{transform:rotate(-38deg)}100%{transform:rotate(0)}}
    .b2{animation:b2 2.8s ease-in-out infinite}@keyframes b2{0%,30%{opacity:0}50%,85%{opacity:1}100%{opacity:0}}
  </style>
  <g class="b2" fill="none" stroke="#4A3B36" stroke-width="2" stroke-linecap="round"><path d="M8 12c26 4 50 2 74 12M40 15c4 6 10 8 16 8"/></g>
  <g class="b2">${jn(30,18,10)}${jn(58,22,-20)}${jn(80,26,30)}</g>
  <g class="p2" fill="#FCFAF0" stroke="#00539B" stroke-width="2"><rect x="52" y="52" width="28" height="48" rx="5"/><circle cx="66" cy="94" r="1.6" fill="#00539B"/></g></svg>`,`<svg viewBox="0 0 132 112" aria-hidden="true"><style>
    .h3{animation:h3 2.4s ease-in-out infinite}@keyframes h3{0%,100%{transform:translateX(-18px)}50%{transform:translateX(18px)}}
    .s3{animation:s3 2.4s ease-out infinite}@keyframes s3{0%,40%{transform:translate(0,0) rotate(0)}70%{transform:translate(16px,-22px) rotate(90deg)}100%{transform:translate(22px,-4px) rotate(140deg)}}
  </style>
  <path d="M10 92h112" stroke="#00539B" stroke-width="2" stroke-linecap="round"/>
  ${jn(36,88,80)}${jn(52,89,100)}${jn(90,88,70)}${jn(104,89,95)}
  <g class="s3">${jn(70,86,85)}</g>
  <g class="h3" fill="none" stroke="#00539B" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M50 78c4-8 14-12 24-10l14 4c4 1 4 6 0 7l-12-1"/><path d="M60 70l-4-14M68 68l-2-16M76 69l1-14"/></g></svg>`],pu=s=>new URL(`./brand/${s}`,document.baseURI).href;function Ps(s,e="",t=""){const n=document.createElement(s);return e&&(n.className=e),t&&(n.innerHTML=t),n}function Ay(s,e){const t=Ps("section","gate");t.setAttribute("aria-label","Đón Gió Xuân");const n=()=>{const i=Wc()==="vi";t.innerHTML=`
      <div class="gate__top">
        <div class="lang-switch" role="group" aria-label="Ngôn ngữ / Language">
          <button type="button" data-l="vi" aria-pressed="${i}">Tiếng Việt</button>
          <button type="button" data-l="en" aria-pressed="${!i}">English</button>
        </div>
      </div>
      <div class="gate__stage">
        <img class="gate__blossom" src="${pu("blossom.webp")}" alt="" />
        <div class="gate__sign">
          <p class="gate__kicker">Trưng bày | <span class="en">Exhibition</span></p>
          <img class="gate__title" src="${pu("title.webp")}" alt="Đón Gió Xuân – Welcoming The Spring Breeze" />
          <p class="gate__line">${Q("exhibitionLine")}</p>
          <p class="gate__line en">${en("exhibitionLine")}</p>
          <button class="btn" type="button" data-start>${Q("start")}<small>${en("start")}</small></button>
        </div>
      </div>
      <p class="gate__foot">${Q("occasion")}<span class="gate__status" data-status></span></p>`,t.querySelectorAll("[data-l]").forEach(r=>r.addEventListener("click",()=>Ld(r.dataset.l))),t.querySelector("[data-start]").addEventListener("click",e)};return n(),Id(n),s.appendChild(t),{el:t,setStatus(i){const r=t.querySelector("[data-status]");r&&(r.textContent=i)},leave(){t.classList.add("leaving"),setTimeout(()=>t.remove(),650)}}}function Ey(s,e,t){return new Promise(n=>{const i=Ps("div","sheet-backdrop");i.innerHTML=`
      <div class="sheet" role="dialog" aria-modal="true" aria-labelledby="perm-h">
        <h2 id="perm-h">${Q("permTitle")}</h2>
        <p class="en">${en("permTitle")}</p>
        <div class="perm-item">${Ii.camera}<div><h3>${Q("permCamera")}</h3><p>${Q("permCameraBody")}</p></div></div>
        <div class="perm-item">${Ii.motion}<div><h3>${Q("permMotion")}</h3><p>${Q("permMotionBody")}</p></div></div>
        <h3 style="margin:14px 0 2px;font-weight:500;font-size:var(--s-md)">${Q("whereTitle")}</h3>
        <div class="choice" role="radiogroup">
          <label><input type="radio" name="where" value="indoor" checked /> ${Q("whereIn")}</label>
          <label><input type="radio" name="where" value="outdoor" /> ${Q("whereOut")}</label>
        </div>
        ${e?`<label class="check"><input type="checkbox" data-xr /> <span>${Q("xrOption")}</span></label>`:""}
        <div class="actions">
          <button class="btn" type="button" data-ok>${Q("allow")}<small>${en("allow")}</small></button>
          <button class="link" type="button" data-back>${Q("back")}</button>
        </div>
      </div>`,s.appendChild(i),i.querySelector("[data-ok]").focus();const r=a=>{i.remove(),n(a)};i.querySelector("[data-ok]").addEventListener("click",()=>{const a=i.querySelector("input[name=where]:checked").value,o=!!i.querySelector("[data-xr]")?.checked;t({mode:a,xr:o}),r({mode:a,xr:o})}),i.querySelector("[data-back]").addEventListener("click",()=>r(null))})}function Dd(s){return new Promise(e=>{const t=["ob1","ob2","ob3"];let n=0;const i=Ps("section","ob");i.setAttribute("role","dialog"),i.setAttribute("aria-live","polite");const r=()=>{i.innerHTML=`
        ${wy[n]}
        <p>${Q(t[n])}</p>
        <p class="en">${en(t[n])}</p>
        <div class="ob__bar">
          <button class="link" type="button" data-skip>${Q("skip")}</button>
          <div class="ob__dots" aria-hidden="true">${t.map((o,c)=>`<i class="${c===n?"on":""}"></i>`).join("")}</div>
          <button class="btn" type="button" data-next>${n<2?Q("next"):Q("done")}</button>
        </div>`,i.querySelector("[data-next]").addEventListener("click",()=>{n<2?(n++,r()):a()}),i.querySelector("[data-skip]").addEventListener("click",a)},a=()=>{i.remove();try{localStorage.setItem("dgx-onboarded","1")}catch{}e()};r(),s.appendChild(i)})}function Ty(){try{return localStorage.getItem("dgx-onboarded")==="1"}catch{return!1}}let mu=0;function kt(s,e,t=3200,n=!1){s.querySelectorAll(".toast").forEach(r=>r.remove());const i=Ps("div","toast"+(n?" warn":""),e);i.setAttribute("role","status"),s.appendChild(i),clearTimeout(mu),mu=window.setTimeout(()=>i.remove(),t)}function Js(s,e,t){const n=Ps("div","sheet-backdrop");n.innerHTML=`<div class="sheet" role="dialog" aria-modal="true">${e}</div>`;const i=()=>n.remove();return n.addEventListener("click",r=>{r.target===n&&i()}),s.appendChild(n),t?.(n.querySelector(".sheet"),i),i}const Ry={F:"Lời giới thiệu",A1:"Phần A, đoạn 1",A2:"Phần A, đoạn 2",A3:"Phần A, đoạn 3",A4:"Phần A, đoạn 4",B2:"Chi bộ Đảng",C4:"Chợ Tết xưa",C8:"Chợ Tết nay",D11:"Bàn quà, cây đào"};class Cy{constructor(e,t,n){this.root=e,this.s=t,this.h=n,this.artState={item:null,mode:"hidden"},this.artHandlers=null,this.handState="off",this.remaining=0,this.turn="",this.xrActive=!1,this.el=Ps("div","hud"),this.el.innerHTML=`
      <div class="hud__top">
        <div class="chip chip--hand" aria-live="polite">${Ii.hand}<span></span></div>
        <button class="chip" type="button" data-mode></button>
      </div>
      <div class="wayfind" hidden></div>
      <div class="artcard" hidden></div>
      <div class="hud__bottom">
        <button class="round round--left" type="button" data-read>${Ii.book}</button>
        <button class="shutter" type="button" data-shot></button>
        <button class="round round--right" type="button" data-menu>${Ii.menu}</button>
      </div>`,this.handChip=this.el.querySelector(".chip--hand"),this.modeChip=this.el.querySelector("[data-mode]"),this.readBtn=this.el.querySelector("[data-read]"),this.way=this.el.querySelector(".wayfind"),this.art=this.el.querySelector(".artcard"),this.el.querySelector("[data-shot]").addEventListener("click",()=>n.capture()),this.readBtn.addEventListener("click",()=>n.change({reading:!this.s.reading})),this.modeChip.addEventListener("click",()=>n.setMode(this.s.mode==="indoor"?"outdoor":"indoor")),this.el.querySelector("[data-menu]").addEventListener("click",()=>this.openMenu()),e.appendChild(this.el),Id(()=>this.refresh()),this.refresh()}update(e){this.s=e,this.refresh()}setHand(e){e!==this.handState&&(this.handState=e,this.refreshHand())}setRemaining(e){const t=Math.round(e);t!==this.remaining&&(this.remaining=t,this.s.mode==="outdoor"&&this.refreshWay())}setTurn(e){const t=Math.abs(e),n=t<50?"":t>130?"turnBack":e>0?"turnRight":"turnLeft";n!==this.turn&&(this.turn=n,this.s.mode==="outdoor"&&this.refreshWay())}setArtifact(e,t){this.artState={item:e,mode:t},this.refreshArt()}refreshArt(){const{item:e,mode:t}=this.artState,n=!!e&&t!=="hidden";if(this.art.hidden=!n,this.el.classList.toggle("has-art",n),!n||!e)return;const i=Wc()==="vi",r=i?e.titleVi:e.titleEn,a=i?e.titleEn:e.titleVi,o=i?e.descVi:e.descEn,c=t==="inspect";this.art.innerHTML=`
      <strong>${r}</strong>
      <span class="en">${a}</span>
      ${o?`<p>${o}</p>`:""}
      <span class="hint">${Q("artHint")}</span>
      <div class="row">
        ${c?`<button class="btn btn--ghost" type="button" data-a="reset">${Q("artReset")}</button>
             <button class="btn" type="button" data-a="close">${Q("artClose")}</button>`:`<button class="btn" type="button" data-a="inspect">${Q("artInspect")}</button>`}
      </div>`,this.art.querySelectorAll("[data-a]").forEach(l=>l.addEventListener("click",()=>{const h=l.dataset.a;this.artHandlers?.[h]()}))}refreshHand(){const e=this.handChip.querySelector("span"),t=this.handState;this.handChip.classList.toggle("show",t!=="off"),this.handChip.classList.toggle("hold",t==="hold"),e.textContent=t==="hold"?Q("handHolding"):t==="loading"?Q("handLoading"):t==="seen"?Q("handSeen"):""}refreshWay(){const e=this.s.mode==="outdoor";this.way.hidden=!e,e&&(this.way.innerHTML=`
      <strong>${Q("outdoorFollow")}</strong>
      <span class="en">${en("outdoorFollow")}</span>
      <span>${this.turn?`<b style="font-weight:600">${Q(this.turn)}</b>`:this.remaining>2?Q("outdoorLeft")(this.remaining):Q("arrivedNear")}</span>
      <div class="row">
        <button class="btn btn--ghost" type="button" data-align>${Q("outdoorAlign")}</button>
        <button class="btn" type="button" data-in>${Q("arrived")}</button>
      </div>`,this.way.querySelector("[data-align]").addEventListener("click",()=>this.h.outdoorAlign()),this.way.querySelector("[data-in]").addEventListener("click",()=>this.h.arrived()))}refresh(){const e=this.s.mode==="indoor";this.modeChip.innerHTML=`${e?Ii.door:Ii.path}<span>${Q(e?"modeIndoor":"modeOutdoor")}</span>`,this.modeChip.setAttribute("aria-label",`${Q("modeIndoor")} / ${Q("modeOutdoor")}`),this.readBtn.setAttribute("aria-pressed",String(this.s.reading)),this.readBtn.setAttribute("aria-label",Q("reading")),this.readBtn.style.visibility=e?"visible":"hidden",this.el.querySelector("[data-shot]").setAttribute("aria-label",Q("capture")),this.el.querySelector("[data-menu]").setAttribute("aria-label",Q("menu")),this.refreshHand(),this.refreshWay(),this.refreshArt()}openMenu(){const e=this.s,t=(n,i)=>`<label class="opt"><span>${i}</span><span class="switch"><input type="checkbox" data-k="${n}" ${e[n]?"checked":""}/><i></i></span></label>`;Js(this.root,`<h2>${Q("menu")}</h2><p class="en">${en("menu")}</p>
       ${t("reading",Q("reading"))}
       <label class="opt"><span>${Q("density")}</span><input type="range" min="0.3" max="1.5" step="0.1" value="${e.density}" data-density aria-label="${Q("density")}"/></label>
       ${t("sound",Q("sound"))}
       ${t("battery",Q("battery"))}
       ${t("reduceMotion",Q("reduceMotion"))}
       ${t("guide",Q("guide"))}
       <button class="opt-btn" type="button" data-stand>${Q("standAt")}<small>${en("standAt")}</small></button>
       <button class="opt-btn" type="button" data-recenter>${Q("recenter")}<small>${en("recenter")}</small></button>
       <button class="opt-btn" type="button" data-tut>${Q("tutorial")}</button>
       <button class="opt-btn" type="button" data-help>${Q("help")}</button>
       <button class="opt-btn" type="button" data-lang>${Q("language")}</button>
       <button class="opt-btn" type="button" data-refloor>${Q("xrReplace")}<small>${en("xrReplace")}</small></button>
       ${this.xrActive?`<button class="opt-btn" type="button" data-exitxr>${Q("exitXr")}</button>`:""}
       <p class="fine" style="margin-top:12px">${Q("privacy")}</p>
       <div class="actions"><button class="btn btn--ghost" type="button" data-close>${Q("close")}</button></div>`,(n,i)=>{n.querySelectorAll("input[data-k]").forEach(r=>r.addEventListener("change",()=>this.h.change({[r.dataset.k]:r.checked}))),n.querySelector("[data-density]").addEventListener("input",r=>this.h.change({density:parseFloat(r.target.value)})),n.querySelector("[data-close]").addEventListener("click",i),n.querySelector("[data-stand]").addEventListener("click",()=>{i(),this.openPanelPicker()}),n.querySelector("[data-recenter]").addEventListener("click",()=>{i(),Js(this.root,`<h2>${Q("recenter")}</h2><p class="en">${en("recenter")}</p><p>${Q("recenterHint")}</p>
            <div class="actions"><button class="btn" type="button" data-ok>${Q("recenter")}</button><button class="link" type="button" data-x>${Q("close")}</button></div>`,(r,a)=>{r.querySelector("[data-ok]").addEventListener("click",()=>{a(),this.h.recenter()}),r.querySelector("[data-x]").addEventListener("click",a)})}),n.querySelector("[data-tut]").addEventListener("click",()=>{i(),this.h.tutorial()}),n.querySelector("[data-help]").addEventListener("click",()=>{i(),Js(this.root,`<h2>${Q("help")}</h2><p class="en">${en("help")}</p><p>${Q("helpBody")}</p><p class="fine">${Q("privacy")}</p>
            <div class="actions"><button class="btn btn--ghost" type="button" data-x>${Q("close")}</button></div>`,(r,a)=>r.querySelector("[data-x]").addEventListener("click",a))}),n.querySelector("[data-lang]").addEventListener("click",()=>{i(),Ld(Wc()==="vi"?"en":"vi")}),n.querySelector("[data-refloor]")?.addEventListener("click",()=>{i(),this.h.replaceFloor?.()}),n.querySelector("[data-exitxr]")?.addEventListener("click",()=>{i(),this.h.exitXr?.()})})}openPanelPicker(){const e=Bc.map(t=>`<button type="button" class="${t.side}" data-p="${t.id}"><b>${t.id}</b><small>${Ry[t.id]??""}</small></button>`).join("");Js(this.root,`<h2>${Q("standAt")}</h2><p class="en">${en("standAt")}</p><p>${Q("standAtHint")}</p>
       <div class="panels">${e}</div>
       <div class="actions"><button class="link" type="button" data-x>${Q("close")}</button></div>`,(t,n)=>{t.querySelectorAll("[data-p]").forEach(i=>i.addEventListener("click",()=>{n(),this.h.standAt(i.dataset.p)})),t.querySelector("[data-x]").addEventListener("click",n)})}showPhoto(e,t){const n=!!(navigator.canShare&&navigator.canShare({files:[new File([t],"don-gio-xuan.jpg",{type:"image/jpeg"})]}));Js(this.root,`<h2>${Q("photoReady")}</h2><p class="en">${en("photoReady")}</p>
       <img class="photo" src="${e}" alt="${Q("photoReady")}" />
       <div class="actions">
         ${n?`<button class="btn" type="button" data-share>${Q("sharePhoto")}</button>`:""}
         <a class="btn ${n?"btn--ghost":""}" href="${e}" download="don-gio-xuan.jpg" style="text-decoration:none">${Q("savePhoto")}</a>
         <button class="link" type="button" data-x>${Q("close")}</button>
       </div>`,(i,r)=>{i.querySelector("[data-x]").addEventListener("click",()=>{r(),URL.revokeObjectURL(e)}),i.querySelector("[data-share]")?.addEventListener("click",()=>{navigator.share({files:[new File([t],"don-gio-xuan.jpg",{type:"image/jpeg"})],title:"Đón Gió Xuân"}).catch(()=>{})})})}}function Py(s,e,t=!1){return new Promise(n=>{const i=s.getContext("2d"),r=Math.min(2,devicePixelRatio||1);s.width=innerWidth*r,s.height=innerHeight*r,i.scale(r,r);const{canvas:a}=Ga(),o=innerWidth,c=innerHeight,l=o/2,h=c/2,u=Math.hypot(o,c)*.6,d=t?0:140,f=Array.from({length:d},(y,v)=>({a:Math.random()*Math.PI*2,r0:u*(.7+Math.random()*.5),s:18+Math.random()*26,cell:v%9===0?7:v%6===0?4:v%4,spin:(Math.random()-.5)*8,delay:Math.random()*.25})),g=t?500:1500,b=performance.now();let m=!1;const p=y=>{const v=Math.min(1,(y-b)/g);i.clearRect(0,0,o,c);const _=Math.sin(Math.PI*v);i.fillStyle=`rgba(252,250,240,${(t?1:.85)*_})`,i.fillRect(0,0,o,c);for(const w of f){const T=Math.min(1,Math.max(0,(v-w.delay)/(1-w.delay))),M=T<.5?2*T*T:1-Math.pow(-2*T+2,2)/2,C=w.r0*(1-Math.sin(M*Math.PI)*.85),D=w.a+M*Math.PI*2.4,x=l+Math.cos(D)*C,A=h+Math.sin(D)*C,F=__(w.cell);i.save(),i.globalAlpha=Math.sin(Math.PI*T),i.translate(x,A),i.rotate(D+w.spin*M),i.drawImage(a,F.sx,F.sy,F.s,F.s,-w.s/2,-w.s/2,w.s,w.s),i.restore()}!m&&v>=.5&&(m=!0,e()),v<1?requestAnimationFrame(p):(i.clearRect(0,0,o,c),n())};requestAnimationFrame(p)})}let Qs=null;function Ly(){try{Qs??(Qs=new(window.AudioContext||window.webkitAudioContext));const s=Qs.currentTime;for(const[e,t]of[[1318.5,0],[1760,.07]]){const n=Qs.createOscillator(),i=Qs.createGain();n.type="sine",n.frequency.value=e,i.gain.setValueAtTime(0,s+t),i.gain.linearRampToValueAtTime(.035,s+t+.01),i.gain.exponentialRampToValueAtTime(1e-4,s+t+.6),n.connect(i).connect(Qs.destination),n.start(s+t),n.stop(s+t+.65)}}catch{}}const Ls=s=>document.getElementById(s),gt=Ls("ui"),Iy=Ls("fx"),_l=new URLSearchParams(location.search),Nd=_l.has("debug"),Gt=new Sx(Ls("cam")),Ot=new Ex,We=new Tx(Ls("gl")),Jn=new yt;We.scene.add(Jn);const ft=new D_(Jn),xn=new U_(We.scene,We.camera),wt=new m_,Ud=new zc(Jn),fi=new Wx,pi=new Cx,Ft=new Qx(We.gl,Jn,We.scene),Fd=new g_,Dn=new l_,gu=new Float32Array(ke*_t);ft.petals.sources.push(wt);const Od=Ed.items,nn=new k_(Gt,Od.map(s=>({targetIndex:s.targetIndex,physicalWidth:s.physicalWidth})),Ed.targets,ut.camera.longEdgeFovDeg),Wt=new My(We.scene,We.camera,We.gl,Od);nn.onFound=s=>{He.mode==="indoor"&&Wt.show(s)};nn.onLost=()=>{We.camera.updateMatrixWorld(),Wt.lose(We.camera.matrixWorld,nn.matrix)};Wt.onChange=(s,e)=>{const t=e!=="hidden";Ot.dragBlocked=t,wt.paused=t,nn.paused=e==="inspect",ft.petals.readingMode=He.reading||t,Dt?.setArtifact(s,e),t&&navigator.vibrate&&navigator.vibrate(8)};Wt.attachGestures(Ls("gl"),()=>He.mode==="indoor");let bu=!1;const Dy=matchMedia("(prefers-reduced-motion: reduce)").matches,He={mode:"indoor",reading:!1,sound:!1,battery:!1,reduceMotion:Dy,density:1,guide:_l.has("guide")};let Dt=null,yl=!1,Tn=!1;const wa=Ay(gt,Ny);"serviceWorker"in navigator&&(wa.setStatus(Q("offlineLoading")),navigator.serviceWorker.register("./sw.js").then(()=>navigator.serviceWorker.ready).then(()=>wa.setStatus(Q("offlineReady"))).catch(()=>wa.setStatus("")));Ft.detect();let kd=null,Bd=null;async function Ny(){const s=await Ey(gt,Ft.supported,e=>{e.xr||(Bd=Ot.requestPermission(),kd=Gt.start())});s&&(He.mode=s.mode,wa.leave(),Dt=new Cy(gt,He,Fy),Dt.artHandlers={inspect:()=>Wt.inspect(),reset:()=>Wt.resetView(),close:()=>{Wt.close(),nn.current>=0&&setTimeout(()=>Wt.show(nn.current),350)}},Ml(),s.xr?await Uy():await Xc(),yl=!0,We.gl.setAnimationLoop(Hy),!Ty()&&He.mode==="indoor"&&await Dd(gt),Ft.session||kt(gt,He.mode==="indoor"&&Tn?`${Q("floorScan")} ${Q("safety")}`:Q("safety"),6500))}async function Xc(){Dn.reset(),document.body.classList.remove("xr");try{await(kd??Gt.start()),Tn=!0}catch(e){const t=e;Tn=!1,document.body.classList.add("no-camera"),He.guide=!0,Ml(),kt(gt,Q(t==="denied"?"errDenied":t==="insecure"?"errInsecure":"errNoCam"),7e3,!0)}const s=await(Bd??Ot.requestPermission());Ot.enableDrag(Ls("gl")),s==="denied"?kt(gt,Q("errSensorDenied"),6e3,!0):setTimeout(()=>{!Ot.hasOrientation&&Tn&&kt(gt,Q("errNoSensor"),5e3,!0)},1500),_r(He.mode,!1),Tn&&(Dt?.setHand("loading"),wt.init().then(()=>{Dt?.setHand(wt.active?"seen":"off"),wt.status==="error"&&kt(gt,Q("errHand"),4e3,!0),He.mode==="indoor"&&zd()}))}function zd(){!Tn||Ft.session||(Wt.preload(),nn.start().then(()=>{nn.status==="ready"&&!bu&&(bu=!0,setTimeout(()=>kt(gt,Q("artScan"),6e3),6e3))}))}async function Uy(){document.body.classList.add("xr"),Dt&&(Dt.xrActive=!0),_r("indoor",!1);const s={scanning:"xrScan",notFloor:"xrNotFloor",ready:"xrPlace"};Ft.onStatus=e=>{e!=="placed"&&kt(gt,Q(s[e]),12e4,e==="notFloor")},Ft.onRejected=()=>kt(gt,Q("xrNotFloor"),12e4,!0),Ft.onPlaced=()=>{ft.petals.clear(),kt(gt,`${Q("xrPlaced")}. ${Q("safety")}`,5e3)},Ft.onFloorChanged=()=>{ft.petals.clear(),kt(gt,Q("xrFloorFixed"),5e3)},Ft.onEnd=()=>{Dt&&(Dt.xrActive=!1),Xc()};try{await Ft.start(gt)}catch{Dt&&(Dt.xrActive=!1),await Xc()}}function _r(s,e=!0){const t=()=>{He.mode=s,ft.setVisible(s==="indoor"),xn.setVisible(s==="outdoor"),Ud.mesh.visible=!1,s==="indoor"?(nn.paused=!1,wt.status==="ready"&&zd(),fi.setX(.6),Ot.recenter(0),ft.petals.clear()):(nn.paused=!0,Wt.visible&&Wt.close(),xn.progress=0,Ot.recenter(-Math.PI/2)),Dt?.update(He)};e&&s==="indoor"?Py(Iy,t,He.reduceMotion):t()}function Ml(){const s=ft.petals;s.readingMode=He.reading||Wt.visible,Wt.reduceMotion=He.reduceMotion,s.density=He.density,s.reduceMotion=He.reduceMotion,document.body.classList.toggle("reduce-motion",He.reduceMotion),pi.setBatterySaver(He.battery),Hd(),ft.guide.visible=He.guide,Dt?.update(He)}function Hd(){const s=pi.settings;We.setPixelRatio(s.pixelRatio),ft.petals.maxFalling=s.maxFalling,ft.petals.maxResting=s.maxResting,ft.branches.setDetail(s.branchDetail),wt.hz=s.handHz,xn.setSparkles(s.sparkles&&!He.battery)}pi.onChange=Hd;const Fy={capture:ky,setMode:s=>_r(s,!0),change(s){const e=s.reading!==void 0&&s.reading!==He.reading;Object.assign(He,s),Ml(),e&&kt(gt,He.reading?Q("readingOn"):Q("readingOff"),2400)},recenter(){Dn.reset(),ft.petals.clear(),Ot.recenter(He.mode==="indoor"?0:-Math.PI/2),kt(gt,Q("recentered"),2e3)},standAt(s){Fd.confirm(s)},tutorial(){Dd(gt)},outdoorAlign(){xn.progress=0,Ot.recenter(-Math.PI/2),kt(gt,Q("outdoorAligned"),2200)},arrived(){_r("indoor",!0)},exitXr(){Ft.end()},replaceFloor(){ft.petals.clear(),Dn.reset(),Ft.session?Ft.replace():kt(gt,Q("floorScan"),6e3)}};Fd.onFix=s=>{fi.fixAtPanel(s.panel),Ot.recenter(s.panel.side==="orange"?Math.PI/2:-Math.PI/2),kt(gt,`${Q("fixed")} ${s.panel.id}`,2200)};const Wo=new R;let vu=!1;Ot.onStep=()=>{Wo.set(0,0,-1).applyQuaternion(We.camera.quaternion),He.mode==="indoor"?fi.onStep(Wo):(xn.step(Wo),xn.arrived&&!vu&&(vu=!0,kt(gt,Q("arrivedNear"),5e3)))};wt.onChange=(s,e)=>{wt.status==="ready"&&Dt?.setHand(s?e?"hold":"seen":"off")};ft.petals.onGrab=()=>{He.sound&&Ly()};class Oy{constructor(){this.active=!0,this.t=0,this.c=new R,this.v=new R,this.q=new at,this.grabbing=!1,this.mesh=new $e(new ml(.045,16,12),new $t({color:688070,wireframe:!0,transparent:!0,opacity:.6}))}update(e,t){this.t+=e;const n=this.c.clone(),i=new R(Math.sin(this.t*.9)*.12,-.05+Math.cos(this.t*1.3)*.06,-.42);this.c.copy(i.applyMatrix4(t.matrixWorld)),this.v.subVectors(this.c,n).divideScalar(Math.max(e,.001)),this.q.copy(t.quaternion),this.grabbing=this.t%9>6,this.mesh.position.copy(this.c)}colliders(){return[{kind:"sphere",c:this.c,r:.045,vel:this.v,palm:!0}]}cup(){return{center:this.c,radius:.07,quaternion:this.q,grabbing:this.grabbing,vel:this.v}}}const hr=_l.get("demo")==="hand"?new Oy:null;hr&&(ft.petals.sources.push(hr),Jn.add(hr.mesh));const as=new Image;as.src=new URL("./brand/title-cream.webp",document.baseURI).href;function ky(){const s=Math.min(2,devicePixelRatio||1),e=Math.round(innerWidth*s),t=Math.round(innerHeight*s),n=document.createElement("canvas");n.width=e,n.height=t;const i=n.getContext("2d");if(Tn&&Gt.ready){const o=Gt.layout();i.save(),Gt.mirrored&&(i.translate(e,0),i.scale(-1,1)),i.drawImage(Gt.video,-o.ox*s,-o.oy*s,o.vw*o.scale*s,o.vh*o.scale*s),i.restore()}else{const o=i.createLinearGradient(0,0,0,t);o.addColorStop(0,"#f3efe2"),o.addColorStop(1,"#cfc6b1"),i.fillStyle=o,i.fillRect(0,0,e,t)}We.render(),i.drawImage(We.gl.domElement,0,0,e,t);const r=i.createLinearGradient(0,t*.78,0,t);if(r.addColorStop(0,"rgba(0,58,110,0)"),r.addColorStop(1,"rgba(0,58,110,0.55)"),i.fillStyle=r,i.fillRect(0,t*.78,e,t*.22),as.complete&&as.naturalWidth){const o=Math.min(e*.42,420*s),c=o*as.naturalHeight/as.naturalWidth;i.drawImage(as,20*s,t-c-22*s,o,c)}i.fillStyle="rgba(252,250,240,0.9)",i.font=`italic ${14*s}px "EB Garamond", serif`,i.textAlign="right",i.fillText("Di tích Nhà tù Hỏa Lò · Xuân 2027",e-18*s,t-24*s);const a=document.createElement("div");a.className="flash",document.body.appendChild(a),setTimeout(()=>a.remove(),500),n.toBlob(o=>{!o||!Dt||Dt.showPhoto(URL.createObjectURL(o),o)},"image/jpeg",.9)}let xu=performance.now(),_u=0,Xo=0,yu=!1,Mu=0;const qo=new Ae(1,1,1),Zs=new R,pa=new R,Su=new _e,wu=new at,Au=Nd?document.body.appendChild(Object.assign(document.createElement("div"),{className:"debug"})):null,By=100;let jo=0;const Eu=new at,Ua=Nd?document.body.appendChild(Object.assign(document.createElement("canvas"),{width:ke,height:_t})):null;Ua&&(Ua.style.cssText="position:fixed;left:8px;top:8px;width:72px;height:128px;z-index:60;opacity:.75;pointer-events:none;image-rendering:pixelated;background:#000");function zy(s){const e=s.getContext("2d");if(!e)return;const t=e.createImageData(ke,_t);Dn.mask.forEach((n,i)=>{t.data[i*4+1]=n*255,t.data[i*4+3]=255}),e.putImageData(t,0,0)}function Hy(s,e){if(!yl)return;const t=Math.min(.1,(s-xu)/1e3);xu=s;const n=!!Ft.session;let i=We.camera;n?(Ft.frame(e,s),i=We.gl.xr.getCamera()):(Ot.update(t),fi.update(t),We.camera.quaternion.copy(Ot.quaternion),He.mode==="indoor"?We.camera.position.copy(fi.position):xn.eyePosition(We.camera.position,ut.user.eyeHeightDefault),Gt.ready&&We.setVFov(Gt.displayVFov(ut.camera.longEdgeFovDeg)),We.camera.updateMatrixWorld()),Jn.updateMatrixWorld(),Zs.setFromMatrixPosition(i.matrixWorld),Jn.worldToLocal(Zs),Jn.getWorldQuaternion(wu).invert(),pa.set(0,0,-1).applyQuaternion(i.getWorldQuaternion(new at)).applyQuaternion(wu);const r=Math.asin(Ce.clamp(pa.y,-1,1))*180/Math.PI;if(s-_u>500&&Tn&&!n){_u=s;const a=Gt.sampleLight();if(a){const o=Ce.lerp(.62,1.04,Ce.smoothstep(a.lum,.05,.55)),c=Math.max(a.r,a.g,a.b,.001);qo.setRGB(o*(.88+.12*(a.r/c)),o*(.88+.12*(a.g/c)),o*(.88+.12*(a.b/c))),ft.petals.setLight(qo),Wt.setLight(a.lum),Xo=a.lum<.08?Xo+.5:0,Xo>4&&!yu&&He.mode==="indoor"&&(yu=!0,kt(gt,Q("errLowLight"),5e3,!0))}}if(He.mode==="indoor"){const a=Ce.smoothstep(r,32,52),o=Ce.smoothstep(-r,25,50),c=Ce.smoothstep(r,-42,-12)*(He.reading?.55:1);ft.branches.update(t,c,a,qo,He.reduceMotion),ft.petals.lookUp=a,ft.petals.lookDown=o,!n&&Tn&&(wt.update(s,Gt,We.camera),nn.smooth(t),Wt.update(t,nn.poseReady?nn.matrix:null),Ud.update(wt,Zs),wt.active&&wt.palmVel.length()>1&&s-Mu>120&&(Mu=s,ft.petals.wind.addGust(wt.palm,wt.palmVel.clone().multiplyScalar(.5),.45,.6))),hr&&hr.update(t,We.camera);const l=!n&&Tn;ft.petals.floorMask=l?Dn:null;const h=l&&Gt.ready&&Ot.hasOrientation&&!Ot.stale&&!Gt.mirrored;if(l&&!h&&Dn.reset(),h&&(s-jo>=By||Eu.angleTo(We.camera.quaternion)>.08)){const u=Gt.sampleGrid(ke,_t);u&&(c_(gu,We.camera.projectionMatrixInverse,We.camera.quaternion,We.camera.position.y),Dn.update(u,gu,Math.min(.5,(s-jo)/1e3)),jo=s,Eu.copy(We.camera.quaternion),Ua&&zy(Ua))}(!n||Ft.placed)&&(Su.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse).multiply(Jn.matrixWorld),ft.petals.update(t,Su,Zs,pa))}else xn.update(t,Ot.angularVel,He.reduceMotion,We.gl.getPixelRatio()),Dt?.setRemaining(xn.remaining),Dt?.setTurn(xn.turnHint(Zs,pa));if(pi.tick(t),We.render(),Au&&Math.floor(s/250)!==Math.floor((s-t*1e3)/250)){const a=ft.petals.stats();Au.textContent=`fps ${pi.fps.toFixed(0)} · ${pi.batterySaver?"low*":pi.level}
rơi ${a.falling} · đọng ${a.resting} · giữ ${a.held}
x ${fi.position.x.toFixed(2)} z ${fi.position.z.toFixed(2)} · pitch ${r.toFixed(0)}°
tay ${wt.status}${wt.active?` · ${wt.depth.toFixed(2)} m${wt.grabbing?" · nắm":""}`:""}`}}addEventListener("resize",()=>{Dn.reset(),We.resize(),xn.layoutFrame(We.camera)});document.addEventListener("visibilitychange",()=>{!yl||Ft.session||(document.hidden?(Dn.reset(),Gt.stop()):Tn&&Gt.start().catch(()=>{}))});window.__dgx={indoor:ft,outdoor:xn,sensors:Ot,localizer:fi,hand:wt,settings:He,setMode:_r,quality:pi,R:We,floorVision:Dn,artTracker:nn,artViewer:Wt};
