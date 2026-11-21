(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function t(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(i){if(i.ep)return;i.ep=!0;const r=t(i);fetch(i.href,r)}})();/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const sl="169",Ef=0,jl=1,Af=2,Zd=1,Tf=2,ii=3,di=0,Qt=1,vn=2,Ai=0,ys=1,gr=2,Xl=3,Yl=4,Rf=5,Gi=100,Cf=101,Pf=102,Lf=103,If=104,Df=200,Nf=201,Uf=202,Ff=203,cc=204,lc=205,kf=206,Of=207,Bf=208,zf=209,Hf=210,Gf=211,Vf=212,Wf=213,qf=214,hc=0,dc=1,uc=2,Ts=3,fc=4,pc=5,mc=6,gc=7,eu=0,jf=1,Xf=2,Ti=0,Yf=1,Kf=2,$f=3,Qf=4,Jf=5,Zf=6,ep=7,Kl="attached",tp="detached",tu=300,Rs=301,Cs=302,bc=303,_c=304,Ha=306,Ps=1e3,Si=1001,La=1002,Kt=1003,nu=1004,pr=1005,hn=1006,ya=1007,zn=1008,ui=1009,iu=1010,su=1011,yr=1012,rl=1013,qi=1014,Rn=1015,Cr=1016,al=1017,ol=1018,Ls=1020,ru=35902,au=1021,ou=1022,xn=1023,cu=1024,lu=1025,Ms=1026,Is=1027,cl=1028,ll=1029,hu=1030,hl=1031,dl=1033,Ma=33776,Sa=33777,wa=33778,Ea=33779,vc=35840,xc=35841,yc=35842,Mc=35843,Sc=36196,wc=37492,Ec=37496,Ac=37808,Tc=37809,Rc=37810,Cc=37811,Pc=37812,Lc=37813,Ic=37814,Dc=37815,Nc=37816,Uc=37817,Fc=37818,kc=37819,Oc=37820,Bc=37821,Aa=36492,zc=36494,Hc=36495,du=36283,Gc=36284,Vc=36285,Wc=36286,Mr=2300,Sr=2301,to=2302,$l=2400,Ql=2401,Jl=2402,np=2500,ip=0,uu=1,qc=2,sp=3200,rp=3201,fu=0,ap=1,Mi="",kt="srgb",Bt="srgb-linear",ul="display-p3",Ga="display-p3-linear",Ia="linear",ft="srgb",Da="rec709",Na="p3",Ji=7680,Zl=519,op=512,cp=513,lp=514,pu=515,hp=516,dp=517,up=518,fp=519,jc=35044,On=35048,eh="300 es",ai=2e3,Ua=2001;class Bs{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const i=this._listeners[e];if(i!==void 0){const r=i.indexOf(t);r!==-1&&i.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const i=n.slice(0);for(let r=0,a=i.length;r<a;r++)i[r].call(this,e);e.target=null}}}const zt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let th=1234567;const Ss=Math.PI/180,Ds=180/Math.PI;function Cn(){const s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(zt[s&255]+zt[s>>8&255]+zt[s>>16&255]+zt[s>>24&255]+"-"+zt[e&255]+zt[e>>8&255]+"-"+zt[e>>16&15|64]+zt[e>>24&255]+"-"+zt[t&63|128]+zt[t>>8&255]+"-"+zt[t>>16&255]+zt[t>>24&255]+zt[n&255]+zt[n>>8&255]+zt[n>>16&255]+zt[n>>24&255]).toLowerCase()}function Dt(s,e,t){return Math.max(e,Math.min(t,s))}function fl(s,e){return(s%e+e)%e}function pp(s,e,t,n,i){return n+(s-e)*(i-n)/(t-e)}function mp(s,e,t){return s!==e?(t-s)/(e-s):0}function br(s,e,t){return(1-t)*s+t*e}function gp(s,e,t,n){return br(s,e,1-Math.exp(-t*n))}function bp(s,e=1){return e-Math.abs(fl(s,e*2)-e)}function _p(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*(3-2*s))}function vp(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*s*(s*(s*6-15)+10))}function xp(s,e){return s+Math.floor(Math.random()*(e-s+1))}function yp(s,e){return s+Math.random()*(e-s)}function Mp(s){return s*(.5-Math.random())}function Sp(s){s!==void 0&&(th=s);let e=th+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function wp(s){return s*Ss}function Ep(s){return s*Ds}function Ap(s){return(s&s-1)===0&&s!==0}function Tp(s){return Math.pow(2,Math.ceil(Math.log(s)/Math.LN2))}function Rp(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function Cp(s,e,t,n,i){const r=Math.cos,a=Math.sin,o=r(t/2),c=a(t/2),l=r((e+n)/2),h=a((e+n)/2),d=r((e-n)/2),u=a((e-n)/2),f=r((n-e)/2),g=a((n-e)/2);switch(i){case"XYX":s.set(o*h,c*d,c*u,o*l);break;case"YZY":s.set(c*u,o*h,c*d,o*l);break;case"ZXZ":s.set(c*d,c*u,o*h,o*l);break;case"XZX":s.set(o*h,c*g,c*f,o*l);break;case"YXY":s.set(c*f,o*h,c*g,o*l);break;case"ZYZ":s.set(c*g,c*f,o*h,o*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function An(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function at(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}const De={DEG2RAD:Ss,RAD2DEG:Ds,generateUUID:Cn,clamp:Dt,euclideanModulo:fl,mapLinear:pp,inverseLerp:mp,lerp:br,damp:gp,pingpong:bp,smoothstep:_p,smootherstep:vp,randInt:xp,randFloat:yp,randFloatSpread:Mp,seededRandom:Sp,degToRad:wp,radToDeg:Ep,isPowerOfTwo:Ap,ceilPowerOfTwo:Tp,floorPowerOfTwo:Rp,setQuaternionFromProperEuler:Cp,normalize:at,denormalize:An};class Se{constructor(e=0,t=0){Se.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Dt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),i=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*n-a*i+e.x,this.y=r*i+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Be{constructor(e,t,n,i,r,a,o,c,l){Be.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,i,r,a,o,c,l)}set(e,t,n,i,r,a,o,c,l){const h=this.elements;return h[0]=e,h[1]=i,h[2]=o,h[3]=t,h[4]=r,h[5]=c,h[6]=n,h[7]=a,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,r=this.elements,a=n[0],o=n[3],c=n[6],l=n[1],h=n[4],d=n[7],u=n[2],f=n[5],g=n[8],b=i[0],m=i[3],p=i[6],x=i[1],v=i[4],y=i[7],A=i[2],T=i[5],S=i[8];return r[0]=a*b+o*x+c*A,r[3]=a*m+o*v+c*T,r[6]=a*p+o*y+c*S,r[1]=l*b+h*x+d*A,r[4]=l*m+h*v+d*T,r[7]=l*p+h*y+d*S,r[2]=u*b+f*x+g*A,r[5]=u*m+f*v+g*T,r[8]=u*p+f*y+g*S,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],a=e[4],o=e[5],c=e[6],l=e[7],h=e[8];return t*a*h-t*o*l-n*r*h+n*o*c+i*r*l-i*a*c}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],a=e[4],o=e[5],c=e[6],l=e[7],h=e[8],d=h*a-o*l,u=o*c-h*r,f=l*r-a*c,g=t*d+n*u+i*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const b=1/g;return e[0]=d*b,e[1]=(i*l-h*n)*b,e[2]=(o*n-i*a)*b,e[3]=u*b,e[4]=(h*t-i*c)*b,e[5]=(i*r-o*t)*b,e[6]=f*b,e[7]=(n*c-l*t)*b,e[8]=(a*t-n*r)*b,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,r,a,o){const c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*a+l*o)+a+e,-i*l,i*c,-i*(-l*a+c*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(no.makeScale(e,t)),this}rotate(e){return this.premultiply(no.makeRotation(-e)),this}translate(e,t){return this.premultiply(no.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const no=new Be;function mu(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function wr(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function Pp(){const s=wr("canvas");return s.style.display="block",s}const nh={};function Ta(s){s in nh||(nh[s]=!0,console.warn(s))}function Lp(s,e,t){return new Promise(function(n,i){function r(){switch(s.clientWaitSync(e,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:i();break;case s.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}function Ip(s){const e=s.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function Dp(s){const e=s.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const ih=new Be().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),sh=new Be().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),qs={[Bt]:{transfer:Ia,primaries:Da,luminanceCoefficients:[.2126,.7152,.0722],toReference:s=>s,fromReference:s=>s},[kt]:{transfer:ft,primaries:Da,luminanceCoefficients:[.2126,.7152,.0722],toReference:s=>s.convertSRGBToLinear(),fromReference:s=>s.convertLinearToSRGB()},[Ga]:{transfer:Ia,primaries:Na,luminanceCoefficients:[.2289,.6917,.0793],toReference:s=>s.applyMatrix3(sh),fromReference:s=>s.applyMatrix3(ih)},[ul]:{transfer:ft,primaries:Na,luminanceCoefficients:[.2289,.6917,.0793],toReference:s=>s.convertSRGBToLinear().applyMatrix3(sh),fromReference:s=>s.applyMatrix3(ih).convertLinearToSRGB()}},Np=new Set([Bt,Ga]),$e={enabled:!0,_workingColorSpace:Bt,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(s){if(!Np.has(s))throw new Error(`Unsupported working color space, "${s}".`);this._workingColorSpace=s},convert:function(s,e,t){if(this.enabled===!1||e===t||!e||!t)return s;const n=qs[e].toReference,i=qs[t].fromReference;return i(n(s))},fromWorkingColorSpace:function(s,e){return this.convert(s,this._workingColorSpace,e)},toWorkingColorSpace:function(s,e){return this.convert(s,e,this._workingColorSpace)},getPrimaries:function(s){return qs[s].primaries},getTransfer:function(s){return s===Mi?Ia:qs[s].transfer},getLuminanceCoefficients:function(s,e=this._workingColorSpace){return s.fromArray(qs[e].luminanceCoefficients)}};function ws(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function io(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let Zi;class Up{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Zi===void 0&&(Zi=wr("canvas")),Zi.width=e.width,Zi.height=e.height;const n=Zi.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=Zi}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=wr("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const i=n.getImageData(0,0,e.width,e.height),r=i.data;for(let a=0;a<r.length;a++)r[a]=ws(r[a]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(ws(t[n]/255)*255):t[n]=ws(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Fp=0;class gu{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Fp++}),this.uuid=Cn(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let a=0,o=i.length;a<o;a++)i[a].isDataTexture?r.push(so(i[a].image)):r.push(so(i[a]))}else r=so(i);n.url=r}return t||(e.images[this.uuid]=n),n}}function so(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?Up.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let kp=0;class Rt extends Bs{constructor(e=Rt.DEFAULT_IMAGE,t=Rt.DEFAULT_MAPPING,n=Si,i=Si,r=hn,a=zn,o=xn,c=ui,l=Rt.DEFAULT_ANISOTROPY,h=Mi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:kp++}),this.uuid=Cn(),this.name="",this.source=new gu(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=a,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=c,this.offset=new Se(0,0),this.repeat=new Se(1,1),this.center=new Se(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Be,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==tu)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Ps:e.x=e.x-Math.floor(e.x);break;case Si:e.x=e.x<0?0:1;break;case La:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Ps:e.y=e.y-Math.floor(e.y);break;case Si:e.y=e.y<0?0:1;break;case La:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Rt.DEFAULT_IMAGE=null;Rt.DEFAULT_MAPPING=tu;Rt.DEFAULT_ANISOTROPY=1;class et{constructor(e=0,t=0,n=0,i=1){et.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*i+a[12]*r,this.y=a[1]*t+a[5]*n+a[9]*i+a[13]*r,this.z=a[2]*t+a[6]*n+a[10]*i+a[14]*r,this.w=a[3]*t+a[7]*n+a[11]*i+a[15]*r,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,r;const c=e.elements,l=c[0],h=c[4],d=c[8],u=c[1],f=c[5],g=c[9],b=c[2],m=c[6],p=c[10];if(Math.abs(h-u)<.01&&Math.abs(d-b)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+u)<.1&&Math.abs(d+b)<.1&&Math.abs(g+m)<.1&&Math.abs(l+f+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const v=(l+1)/2,y=(f+1)/2,A=(p+1)/2,T=(h+u)/4,S=(d+b)/4,P=(g+m)/4;return v>y&&v>A?v<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(v),i=T/n,r=S/n):y>A?y<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(y),n=T/i,r=P/i):A<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(A),n=S/r,i=P/r),this.set(n,i,r,t),this}let x=Math.sqrt((m-g)*(m-g)+(d-b)*(d-b)+(u-h)*(u-h));return Math.abs(x)<.001&&(x=1),this.x=(m-g)/x,this.y=(d-b)/x,this.z=(u-h)/x,this.w=Math.acos((l+f+p-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Op extends Bs{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new et(0,0,e,t),this.scissorTest=!1,this.viewport=new et(0,0,e,t);const i={width:e,height:t,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:hn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const r=new Rt(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];const a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let i=0,r=this.textures.length;i<r;i++)this.textures[i].image.width=e,this.textures[i].image.height=t,this.textures[i].image.depth=n;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,i=e.textures.length;n<i;n++)this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new gu(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class ji extends Op{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class bu extends Rt{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Kt,this.minFilter=Kt,this.wrapR=Si,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Bp extends Rt{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Kt,this.minFilter=Kt,this.wrapR=Si,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Qe{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,r,a,o){let c=n[i+0],l=n[i+1],h=n[i+2],d=n[i+3];const u=r[a+0],f=r[a+1],g=r[a+2],b=r[a+3];if(o===0){e[t+0]=c,e[t+1]=l,e[t+2]=h,e[t+3]=d;return}if(o===1){e[t+0]=u,e[t+1]=f,e[t+2]=g,e[t+3]=b;return}if(d!==b||c!==u||l!==f||h!==g){let m=1-o;const p=c*u+l*f+h*g+d*b,x=p>=0?1:-1,v=1-p*p;if(v>Number.EPSILON){const A=Math.sqrt(v),T=Math.atan2(A,p*x);m=Math.sin(m*T)/A,o=Math.sin(o*T)/A}const y=o*x;if(c=c*m+u*y,l=l*m+f*y,h=h*m+g*y,d=d*m+b*y,m===1-o){const A=1/Math.sqrt(c*c+l*l+h*h+d*d);c*=A,l*=A,h*=A,d*=A}}e[t]=c,e[t+1]=l,e[t+2]=h,e[t+3]=d}static multiplyQuaternionsFlat(e,t,n,i,r,a){const o=n[i],c=n[i+1],l=n[i+2],h=n[i+3],d=r[a],u=r[a+1],f=r[a+2],g=r[a+3];return e[t]=o*g+h*d+c*f-l*u,e[t+1]=c*g+h*u+l*d-o*f,e[t+2]=l*g+h*f+o*u-c*d,e[t+3]=h*g-o*d-c*u-l*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,i=e._y,r=e._z,a=e._order,o=Math.cos,c=Math.sin,l=o(n/2),h=o(i/2),d=o(r/2),u=c(n/2),f=c(i/2),g=c(r/2);switch(a){case"XYZ":this._x=u*h*d+l*f*g,this._y=l*f*d-u*h*g,this._z=l*h*g+u*f*d,this._w=l*h*d-u*f*g;break;case"YXZ":this._x=u*h*d+l*f*g,this._y=l*f*d-u*h*g,this._z=l*h*g-u*f*d,this._w=l*h*d+u*f*g;break;case"ZXY":this._x=u*h*d-l*f*g,this._y=l*f*d+u*h*g,this._z=l*h*g+u*f*d,this._w=l*h*d-u*f*g;break;case"ZYX":this._x=u*h*d-l*f*g,this._y=l*f*d+u*h*g,this._z=l*h*g-u*f*d,this._w=l*h*d+u*f*g;break;case"YZX":this._x=u*h*d+l*f*g,this._y=l*f*d+u*h*g,this._z=l*h*g-u*f*d,this._w=l*h*d-u*f*g;break;case"XZY":this._x=u*h*d-l*f*g,this._y=l*f*d-u*h*g,this._z=l*h*g+u*f*d,this._w=l*h*d+u*f*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],i=t[4],r=t[8],a=t[1],o=t[5],c=t[9],l=t[2],h=t[6],d=t[10],u=n+o+d;if(u>0){const f=.5/Math.sqrt(u+1);this._w=.25/f,this._x=(h-c)*f,this._y=(r-l)*f,this._z=(a-i)*f}else if(n>o&&n>d){const f=2*Math.sqrt(1+n-o-d);this._w=(h-c)/f,this._x=.25*f,this._y=(i+a)/f,this._z=(r+l)/f}else if(o>d){const f=2*Math.sqrt(1+o-n-d);this._w=(r-l)/f,this._x=(i+a)/f,this._y=.25*f,this._z=(c+h)/f}else{const f=2*Math.sqrt(1+d-n-o);this._w=(a-i)/f,this._x=(r+l)/f,this._y=(c+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Dt(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,i=e._y,r=e._z,a=e._w,o=t._x,c=t._y,l=t._z,h=t._w;return this._x=n*h+a*o+i*l-r*c,this._y=i*h+a*c+r*o-n*l,this._z=r*h+a*l+n*c-i*o,this._w=a*h-n*o-i*c-r*l,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,i=this._y,r=this._z,a=this._w;let o=a*e._w+n*e._x+i*e._y+r*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=n,this._y=i,this._z=r,this;const c=1-o*o;if(c<=Number.EPSILON){const f=1-t;return this._w=f*a+t*this._w,this._x=f*n+t*this._x,this._y=f*i+t*this._y,this._z=f*r+t*this._z,this.normalize(),this}const l=Math.sqrt(c),h=Math.atan2(l,o),d=Math.sin((1-t)*h)/l,u=Math.sin(t*h)/l;return this._w=a*d+this._w*u,this._x=n*d+this._x*u,this._y=i*d+this._y*u,this._z=r*d+this._z*u,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(i*Math.sin(e),i*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class R{constructor(e=0,t=0,n=0){R.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(rh.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(rh.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*i,this.y=r[1]*t+r[4]*n+r[7]*i,this.z=r[2]*t+r[5]*n+r[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,r=e.elements,a=1/(r[3]*t+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*i+r[12])*a,this.y=(r[1]*t+r[5]*n+r[9]*i+r[13])*a,this.z=(r[2]*t+r[6]*n+r[10]*i+r[14])*a,this}applyQuaternion(e){const t=this.x,n=this.y,i=this.z,r=e.x,a=e.y,o=e.z,c=e.w,l=2*(a*i-o*n),h=2*(o*t-r*i),d=2*(r*n-a*t);return this.x=t+c*l+a*d-o*h,this.y=n+c*h+o*l-r*d,this.z=i+c*d+r*h-a*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*i,this.y=r[1]*t+r[5]*n+r[9]*i,this.z=r[2]*t+r[6]*n+r[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,i=e.y,r=e.z,a=t.x,o=t.y,c=t.z;return this.x=i*c-r*o,this.y=r*a-n*c,this.z=n*o-i*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return ro.copy(this).projectOnVector(e),this.sub(ro)}reflect(e){return this.sub(ro.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Dt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const ro=new R,rh=new Qe;class Vn{constructor(e=new R(1/0,1/0,1/0),t=new R(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Sn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Sn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=Sn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,Sn):Sn.fromBufferAttribute(r,a),Sn.applyMatrix4(e.matrixWorld),this.expandByPoint(Sn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Dr.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Dr.copy(n.boundingBox)),Dr.applyMatrix4(e.matrixWorld),this.union(Dr)}const i=e.children;for(let r=0,a=i.length;r<a;r++)this.expandByObject(i[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Sn),Sn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(js),Nr.subVectors(this.max,js),es.subVectors(e.a,js),ts.subVectors(e.b,js),ns.subVectors(e.c,js),pi.subVectors(ts,es),mi.subVectors(ns,ts),Ii.subVectors(es,ns);let t=[0,-pi.z,pi.y,0,-mi.z,mi.y,0,-Ii.z,Ii.y,pi.z,0,-pi.x,mi.z,0,-mi.x,Ii.z,0,-Ii.x,-pi.y,pi.x,0,-mi.y,mi.x,0,-Ii.y,Ii.x,0];return!ao(t,es,ts,ns,Nr)||(t=[1,0,0,0,1,0,0,0,1],!ao(t,es,ts,ns,Nr))?!1:(Ur.crossVectors(pi,mi),t=[Ur.x,Ur.y,Ur.z],ao(t,es,ts,ns,Nr))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Sn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Sn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Yn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Yn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Yn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Yn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Yn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Yn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Yn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Yn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Yn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Yn=[new R,new R,new R,new R,new R,new R,new R,new R],Sn=new R,Dr=new Vn,es=new R,ts=new R,ns=new R,pi=new R,mi=new R,Ii=new R,js=new R,Nr=new R,Ur=new R,Di=new R;function ao(s,e,t,n,i){for(let r=0,a=s.length-3;r<=a;r+=3){Di.fromArray(s,r);const o=i.x*Math.abs(Di.x)+i.y*Math.abs(Di.y)+i.z*Math.abs(Di.z),c=e.dot(Di),l=t.dot(Di),h=n.dot(Di);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>o)return!1}return!0}const zp=new Vn,Xs=new R,oo=new R;class Wn{constructor(e=new R,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):zp.setFromPoints(e).getCenter(n);let i=0;for(let r=0,a=e.length;r<a;r++)i=Math.max(i,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Xs.subVectors(e,this.center);const t=Xs.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(Xs,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(oo.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Xs.copy(e.center).add(oo)),this.expandByPoint(Xs.copy(e.center).sub(oo))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Kn=new R,co=new R,Fr=new R,gi=new R,lo=new R,kr=new R,ho=new R;class Va{constructor(e=new R,t=new R(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Kn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Kn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Kn.copy(this.origin).addScaledVector(this.direction,t),Kn.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){co.copy(e).add(t).multiplyScalar(.5),Fr.copy(t).sub(e).normalize(),gi.copy(this.origin).sub(co);const r=e.distanceTo(t)*.5,a=-this.direction.dot(Fr),o=gi.dot(this.direction),c=-gi.dot(Fr),l=gi.lengthSq(),h=Math.abs(1-a*a);let d,u,f,g;if(h>0)if(d=a*c-o,u=a*o-c,g=r*h,d>=0)if(u>=-g)if(u<=g){const b=1/h;d*=b,u*=b,f=d*(d+a*u+2*o)+u*(a*d+u+2*c)+l}else u=r,d=Math.max(0,-(a*u+o)),f=-d*d+u*(u+2*c)+l;else u=-r,d=Math.max(0,-(a*u+o)),f=-d*d+u*(u+2*c)+l;else u<=-g?(d=Math.max(0,-(-a*r+o)),u=d>0?-r:Math.min(Math.max(-r,-c),r),f=-d*d+u*(u+2*c)+l):u<=g?(d=0,u=Math.min(Math.max(-r,-c),r),f=u*(u+2*c)+l):(d=Math.max(0,-(a*r+o)),u=d>0?r:Math.min(Math.max(-r,-c),r),f=-d*d+u*(u+2*c)+l);else u=a>0?-r:r,d=Math.max(0,-(a*u+o)),f=-d*d+u*(u+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,d),i&&i.copy(co).addScaledVector(Fr,u),f}intersectSphere(e,t){Kn.subVectors(e.center,this.origin);const n=Kn.dot(this.direction),i=Kn.dot(Kn)-n*n,r=e.radius*e.radius;if(i>r)return null;const a=Math.sqrt(r-i),o=n-a,c=n+a;return c<0?null:o<0?this.at(c,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,r,a,o,c;const l=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,u=this.origin;return l>=0?(n=(e.min.x-u.x)*l,i=(e.max.x-u.x)*l):(n=(e.max.x-u.x)*l,i=(e.min.x-u.x)*l),h>=0?(r=(e.min.y-u.y)*h,a=(e.max.y-u.y)*h):(r=(e.max.y-u.y)*h,a=(e.min.y-u.y)*h),n>a||r>i||((r>n||isNaN(n))&&(n=r),(a<i||isNaN(i))&&(i=a),d>=0?(o=(e.min.z-u.z)*d,c=(e.max.z-u.z)*d):(o=(e.max.z-u.z)*d,c=(e.min.z-u.z)*d),n>c||o>i)||((o>n||n!==n)&&(n=o),(c<i||i!==i)&&(i=c),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,Kn)!==null}intersectTriangle(e,t,n,i,r){lo.subVectors(t,e),kr.subVectors(n,e),ho.crossVectors(lo,kr);let a=this.direction.dot(ho),o;if(a>0){if(i)return null;o=1}else if(a<0)o=-1,a=-a;else return null;gi.subVectors(this.origin,e);const c=o*this.direction.dot(kr.crossVectors(gi,kr));if(c<0)return null;const l=o*this.direction.dot(lo.cross(gi));if(l<0||c+l>a)return null;const h=-o*gi.dot(ho);return h<0?null:this.at(h/a,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ve{constructor(e,t,n,i,r,a,o,c,l,h,d,u,f,g,b,m){ve.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,i,r,a,o,c,l,h,d,u,f,g,b,m)}set(e,t,n,i,r,a,o,c,l,h,d,u,f,g,b,m){const p=this.elements;return p[0]=e,p[4]=t,p[8]=n,p[12]=i,p[1]=r,p[5]=a,p[9]=o,p[13]=c,p[2]=l,p[6]=h,p[10]=d,p[14]=u,p[3]=f,p[7]=g,p[11]=b,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ve().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,i=1/is.setFromMatrixColumn(e,0).length(),r=1/is.setFromMatrixColumn(e,1).length(),a=1/is.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,i=e.y,r=e.z,a=Math.cos(n),o=Math.sin(n),c=Math.cos(i),l=Math.sin(i),h=Math.cos(r),d=Math.sin(r);if(e.order==="XYZ"){const u=a*h,f=a*d,g=o*h,b=o*d;t[0]=c*h,t[4]=-c*d,t[8]=l,t[1]=f+g*l,t[5]=u-b*l,t[9]=-o*c,t[2]=b-u*l,t[6]=g+f*l,t[10]=a*c}else if(e.order==="YXZ"){const u=c*h,f=c*d,g=l*h,b=l*d;t[0]=u+b*o,t[4]=g*o-f,t[8]=a*l,t[1]=a*d,t[5]=a*h,t[9]=-o,t[2]=f*o-g,t[6]=b+u*o,t[10]=a*c}else if(e.order==="ZXY"){const u=c*h,f=c*d,g=l*h,b=l*d;t[0]=u-b*o,t[4]=-a*d,t[8]=g+f*o,t[1]=f+g*o,t[5]=a*h,t[9]=b-u*o,t[2]=-a*l,t[6]=o,t[10]=a*c}else if(e.order==="ZYX"){const u=a*h,f=a*d,g=o*h,b=o*d;t[0]=c*h,t[4]=g*l-f,t[8]=u*l+b,t[1]=c*d,t[5]=b*l+u,t[9]=f*l-g,t[2]=-l,t[6]=o*c,t[10]=a*c}else if(e.order==="YZX"){const u=a*c,f=a*l,g=o*c,b=o*l;t[0]=c*h,t[4]=b-u*d,t[8]=g*d+f,t[1]=d,t[5]=a*h,t[9]=-o*h,t[2]=-l*h,t[6]=f*d+g,t[10]=u-b*d}else if(e.order==="XZY"){const u=a*c,f=a*l,g=o*c,b=o*l;t[0]=c*h,t[4]=-d,t[8]=l*h,t[1]=u*d+b,t[5]=a*h,t[9]=f*d-g,t[2]=g*d-f,t[6]=o*h,t[10]=b*d+u}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Hp,e,Gp)}lookAt(e,t,n){const i=this.elements;return on.subVectors(e,t),on.lengthSq()===0&&(on.z=1),on.normalize(),bi.crossVectors(n,on),bi.lengthSq()===0&&(Math.abs(n.z)===1?on.x+=1e-4:on.z+=1e-4,on.normalize(),bi.crossVectors(n,on)),bi.normalize(),Or.crossVectors(on,bi),i[0]=bi.x,i[4]=Or.x,i[8]=on.x,i[1]=bi.y,i[5]=Or.y,i[9]=on.y,i[2]=bi.z,i[6]=Or.z,i[10]=on.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,r=this.elements,a=n[0],o=n[4],c=n[8],l=n[12],h=n[1],d=n[5],u=n[9],f=n[13],g=n[2],b=n[6],m=n[10],p=n[14],x=n[3],v=n[7],y=n[11],A=n[15],T=i[0],S=i[4],P=i[8],F=i[12],_=i[1],w=i[5],U=i[9],O=i[13],B=i[2],K=i[6],G=i[10],Z=i[14],W=i[3],ce=i[7],le=i[11],me=i[15];return r[0]=a*T+o*_+c*B+l*W,r[4]=a*S+o*w+c*K+l*ce,r[8]=a*P+o*U+c*G+l*le,r[12]=a*F+o*O+c*Z+l*me,r[1]=h*T+d*_+u*B+f*W,r[5]=h*S+d*w+u*K+f*ce,r[9]=h*P+d*U+u*G+f*le,r[13]=h*F+d*O+u*Z+f*me,r[2]=g*T+b*_+m*B+p*W,r[6]=g*S+b*w+m*K+p*ce,r[10]=g*P+b*U+m*G+p*le,r[14]=g*F+b*O+m*Z+p*me,r[3]=x*T+v*_+y*B+A*W,r[7]=x*S+v*w+y*K+A*ce,r[11]=x*P+v*U+y*G+A*le,r[15]=x*F+v*O+y*Z+A*me,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],i=e[8],r=e[12],a=e[1],o=e[5],c=e[9],l=e[13],h=e[2],d=e[6],u=e[10],f=e[14],g=e[3],b=e[7],m=e[11],p=e[15];return g*(+r*c*d-i*l*d-r*o*u+n*l*u+i*o*f-n*c*f)+b*(+t*c*f-t*l*u+r*a*u-i*a*f+i*l*h-r*c*h)+m*(+t*l*d-t*o*f-r*a*d+n*a*f+r*o*h-n*l*h)+p*(-i*o*h-t*c*d+t*o*u+i*a*d-n*a*u+n*c*h)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],a=e[4],o=e[5],c=e[6],l=e[7],h=e[8],d=e[9],u=e[10],f=e[11],g=e[12],b=e[13],m=e[14],p=e[15],x=d*m*l-b*u*l+b*c*f-o*m*f-d*c*p+o*u*p,v=g*u*l-h*m*l-g*c*f+a*m*f+h*c*p-a*u*p,y=h*b*l-g*d*l+g*o*f-a*b*f-h*o*p+a*d*p,A=g*d*c-h*b*c-g*o*u+a*b*u+h*o*m-a*d*m,T=t*x+n*v+i*y+r*A;if(T===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const S=1/T;return e[0]=x*S,e[1]=(b*u*r-d*m*r-b*i*f+n*m*f+d*i*p-n*u*p)*S,e[2]=(o*m*r-b*c*r+b*i*l-n*m*l-o*i*p+n*c*p)*S,e[3]=(d*c*r-o*u*r-d*i*l+n*u*l+o*i*f-n*c*f)*S,e[4]=v*S,e[5]=(h*m*r-g*u*r+g*i*f-t*m*f-h*i*p+t*u*p)*S,e[6]=(g*c*r-a*m*r-g*i*l+t*m*l+a*i*p-t*c*p)*S,e[7]=(a*u*r-h*c*r+h*i*l-t*u*l-a*i*f+t*c*f)*S,e[8]=y*S,e[9]=(g*d*r-h*b*r-g*n*f+t*b*f+h*n*p-t*d*p)*S,e[10]=(a*b*r-g*o*r+g*n*l-t*b*l-a*n*p+t*o*p)*S,e[11]=(h*o*r-a*d*r-h*n*l+t*d*l+a*n*f-t*o*f)*S,e[12]=A*S,e[13]=(h*b*i-g*d*i+g*n*u-t*b*u-h*n*m+t*d*m)*S,e[14]=(g*o*i-a*b*i-g*n*c+t*b*c+a*n*m-t*o*m)*S,e[15]=(a*d*i-h*o*i+h*n*c-t*d*c-a*n*u+t*o*u)*S,this}scale(e){const t=this.elements,n=e.x,i=e.y,r=e.z;return t[0]*=n,t[4]*=i,t[8]*=r,t[1]*=n,t[5]*=i,t[9]*=r,t[2]*=n,t[6]*=i,t[10]*=r,t[3]*=n,t[7]*=i,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),i=Math.sin(t),r=1-n,a=e.x,o=e.y,c=e.z,l=r*a,h=r*o;return this.set(l*a+n,l*o-i*c,l*c+i*o,0,l*o+i*c,h*o+n,h*c-i*a,0,l*c-i*o,h*c+i*a,r*c*c+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,r,a){return this.set(1,n,r,0,e,1,a,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){const i=this.elements,r=t._x,a=t._y,o=t._z,c=t._w,l=r+r,h=a+a,d=o+o,u=r*l,f=r*h,g=r*d,b=a*h,m=a*d,p=o*d,x=c*l,v=c*h,y=c*d,A=n.x,T=n.y,S=n.z;return i[0]=(1-(b+p))*A,i[1]=(f+y)*A,i[2]=(g-v)*A,i[3]=0,i[4]=(f-y)*T,i[5]=(1-(u+p))*T,i[6]=(m+x)*T,i[7]=0,i[8]=(g+v)*S,i[9]=(m-x)*S,i[10]=(1-(u+b))*S,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){const i=this.elements;let r=is.set(i[0],i[1],i[2]).length();const a=is.set(i[4],i[5],i[6]).length(),o=is.set(i[8],i[9],i[10]).length();this.determinant()<0&&(r=-r),e.x=i[12],e.y=i[13],e.z=i[14],wn.copy(this);const l=1/r,h=1/a,d=1/o;return wn.elements[0]*=l,wn.elements[1]*=l,wn.elements[2]*=l,wn.elements[4]*=h,wn.elements[5]*=h,wn.elements[6]*=h,wn.elements[8]*=d,wn.elements[9]*=d,wn.elements[10]*=d,t.setFromRotationMatrix(wn),n.x=r,n.y=a,n.z=o,this}makePerspective(e,t,n,i,r,a,o=ai){const c=this.elements,l=2*r/(t-e),h=2*r/(n-i),d=(t+e)/(t-e),u=(n+i)/(n-i);let f,g;if(o===ai)f=-(a+r)/(a-r),g=-2*a*r/(a-r);else if(o===Ua)f=-a/(a-r),g=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=l,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=h,c[9]=u,c[13]=0,c[2]=0,c[6]=0,c[10]=f,c[14]=g,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,i,r,a,o=ai){const c=this.elements,l=1/(t-e),h=1/(n-i),d=1/(a-r),u=(t+e)*l,f=(n+i)*h;let g,b;if(o===ai)g=(a+r)*d,b=-2*d;else if(o===Ua)g=r*d,b=-1*d;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-u,c[1]=0,c[5]=2*h,c[9]=0,c[13]=-f,c[2]=0,c[6]=0,c[10]=b,c[14]=-g,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const is=new R,wn=new ve,Hp=new R(0,0,0),Gp=new R(1,1,1),bi=new R,Or=new R,on=new R,ah=new ve,oh=new Qe;class Jt{constructor(e=0,t=0,n=0,i=Jt.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const i=e.elements,r=i[0],a=i[4],o=i[8],c=i[1],l=i[5],h=i[9],d=i[2],u=i[6],f=i[10];switch(t){case"XYZ":this._y=Math.asin(Dt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(u,l),this._z=0);break;case"YXZ":this._x=Math.asin(-Dt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(Dt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-d,f),this._z=Math.atan2(-a,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-Dt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(u,f),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-a,l));break;case"YZX":this._z=Math.asin(Dt(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-Dt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(u,l),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return ah.makeRotationFromQuaternion(e),this.setFromRotationMatrix(ah,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return oh.setFromEuler(this),this.setFromQuaternion(oh,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Jt.DEFAULT_ORDER="XYZ";class _u{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Vp=0;const ch=new R,ss=new Qe,$n=new ve,Br=new R,Ys=new R,Wp=new R,qp=new Qe,lh=new R(1,0,0),hh=new R(0,1,0),dh=new R(0,0,1),uh={type:"added"},jp={type:"removed"},rs={type:"childadded",child:null},uo={type:"childremoved",child:null};class pt extends Bs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Vp++}),this.uuid=Cn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=pt.DEFAULT_UP.clone();const e=new R,t=new Jt,n=new Qe,i=new R(1,1,1);function r(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new ve},normalMatrix:{value:new Be}}),this.matrix=new ve,this.matrixWorld=new ve,this.matrixAutoUpdate=pt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=pt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new _u,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return ss.setFromAxisAngle(e,t),this.quaternion.multiply(ss),this}rotateOnWorldAxis(e,t){return ss.setFromAxisAngle(e,t),this.quaternion.premultiply(ss),this}rotateX(e){return this.rotateOnAxis(lh,e)}rotateY(e){return this.rotateOnAxis(hh,e)}rotateZ(e){return this.rotateOnAxis(dh,e)}translateOnAxis(e,t){return ch.copy(e).applyQuaternion(this.quaternion),this.position.add(ch.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(lh,e)}translateY(e){return this.translateOnAxis(hh,e)}translateZ(e){return this.translateOnAxis(dh,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4($n.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Br.copy(e):Br.set(e,t,n);const i=this.parent;this.updateWorldMatrix(!0,!1),Ys.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?$n.lookAt(Ys,Br,this.up):$n.lookAt(Br,Ys,this.up),this.quaternion.setFromRotationMatrix($n),i&&($n.extractRotation(i.matrixWorld),ss.setFromRotationMatrix($n),this.quaternion.premultiply(ss.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(uh),rs.child=e,this.dispatchEvent(rs),rs.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(jp),uo.child=e,this.dispatchEvent(uo),uo.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),$n.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),$n.multiply(e.parent.matrixWorld)),e.applyMatrix4($n),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(uh),rs.child=e,this.dispatchEvent(rs),rs.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){const a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const i=this.children;for(let r=0,a=i.length;r<a;r++)i[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ys,e,Wp),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ys,qp,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const i=this.children;for(let r=0,a=i.length;r<a;r++)i[r].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.visibility=this._visibility,i.active=this._active,i.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.geometryCount=this._geometryCount,i.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(i.boundingSphere={center:i.boundingSphere.center.toArray(),radius:i.boundingSphere.radius}),this.boundingBox!==null&&(i.boundingBox={min:i.boundingBox.min.toArray(),max:i.boundingBox.max.toArray()}));function r(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const c=o.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){const d=c[l];r(e.shapes,d)}else r(e.shapes,c)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let c=0,l=this.material.length;c<l;c++)o.push(r(e.materials,this.material[c]));i.material=o}else i.material=r(e.materials,this.material);if(this.children.length>0){i.children=[];for(let o=0;o<this.children.length;o++)i.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let o=0;o<this.animations.length;o++){const c=this.animations[o];i.animations.push(r(e.animations,c))}}if(t){const o=a(e.geometries),c=a(e.materials),l=a(e.textures),h=a(e.images),d=a(e.shapes),u=a(e.skeletons),f=a(e.animations),g=a(e.nodes);o.length>0&&(n.geometries=o),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),h.length>0&&(n.images=h),d.length>0&&(n.shapes=d),u.length>0&&(n.skeletons=u),f.length>0&&(n.animations=f),g.length>0&&(n.nodes=g)}return n.object=i,n;function a(o){const c=[];for(const l in o){const h=o[l];delete h.metadata,c.push(h)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const i=e.children[n];this.add(i.clone())}return this}}pt.DEFAULT_UP=new R(0,1,0);pt.DEFAULT_MATRIX_AUTO_UPDATE=!0;pt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const En=new R,Qn=new R,fo=new R,Jn=new R,as=new R,os=new R,fh=new R,po=new R,mo=new R,go=new R,bo=new et,_o=new et,vo=new et;class dn{constructor(e=new R,t=new R,n=new R){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),En.subVectors(e,t),i.cross(En);const r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(e,t,n,i,r){En.subVectors(i,t),Qn.subVectors(n,t),fo.subVectors(e,t);const a=En.dot(En),o=En.dot(Qn),c=En.dot(fo),l=Qn.dot(Qn),h=Qn.dot(fo),d=a*l-o*o;if(d===0)return r.set(0,0,0),null;const u=1/d,f=(l*c-o*h)*u,g=(a*h-o*c)*u;return r.set(1-f-g,g,f)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,Jn)===null?!1:Jn.x>=0&&Jn.y>=0&&Jn.x+Jn.y<=1}static getInterpolation(e,t,n,i,r,a,o,c){return this.getBarycoord(e,t,n,i,Jn)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,Jn.x),c.addScaledVector(a,Jn.y),c.addScaledVector(o,Jn.z),c)}static getInterpolatedAttribute(e,t,n,i,r,a){return bo.setScalar(0),_o.setScalar(0),vo.setScalar(0),bo.fromBufferAttribute(e,t),_o.fromBufferAttribute(e,n),vo.fromBufferAttribute(e,i),a.setScalar(0),a.addScaledVector(bo,r.x),a.addScaledVector(_o,r.y),a.addScaledVector(vo,r.z),a}static isFrontFacing(e,t,n,i){return En.subVectors(n,t),Qn.subVectors(e,t),En.cross(Qn).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return En.subVectors(this.c,this.b),Qn.subVectors(this.a,this.b),En.cross(Qn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return dn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return dn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,i,r){return dn.getInterpolation(e,this.a,this.b,this.c,t,n,i,r)}containsPoint(e){return dn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return dn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,i=this.b,r=this.c;let a,o;as.subVectors(i,n),os.subVectors(r,n),po.subVectors(e,n);const c=as.dot(po),l=os.dot(po);if(c<=0&&l<=0)return t.copy(n);mo.subVectors(e,i);const h=as.dot(mo),d=os.dot(mo);if(h>=0&&d<=h)return t.copy(i);const u=c*d-h*l;if(u<=0&&c>=0&&h<=0)return a=c/(c-h),t.copy(n).addScaledVector(as,a);go.subVectors(e,r);const f=as.dot(go),g=os.dot(go);if(g>=0&&f<=g)return t.copy(r);const b=f*l-c*g;if(b<=0&&l>=0&&g<=0)return o=l/(l-g),t.copy(n).addScaledVector(os,o);const m=h*g-f*d;if(m<=0&&d-h>=0&&f-g>=0)return fh.subVectors(r,i),o=(d-h)/(d-h+(f-g)),t.copy(i).addScaledVector(fh,o);const p=1/(m+b+u);return a=b*p,o=u*p,t.copy(n).addScaledVector(as,a).addScaledVector(os,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const vu={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},_i={h:0,s:0,l:0},zr={h:0,s:0,l:0};function xo(s,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?s+(e-s)*6*t:t<1/2?e:t<2/3?s+(e-s)*6*(2/3-t):s}class we{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=kt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,$e.toWorkingColorSpace(this,t),this}setRGB(e,t,n,i=$e.workingColorSpace){return this.r=e,this.g=t,this.b=n,$e.toWorkingColorSpace(this,i),this}setHSL(e,t,n,i=$e.workingColorSpace){if(e=fl(e,1),t=Dt(t,0,1),n=Dt(n,0,1),t===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+t):n+t-n*t,a=2*n-r;this.r=xo(a,r,e+1/3),this.g=xo(a,r,e),this.b=xo(a,r,e-1/3)}return $e.toWorkingColorSpace(this,i),this}setStyle(e,t=kt){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const a=i[1],o=i[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=i[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=kt){const n=vu[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=ws(e.r),this.g=ws(e.g),this.b=ws(e.b),this}copyLinearToSRGB(e){return this.r=io(e.r),this.g=io(e.g),this.b=io(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=kt){return $e.fromWorkingColorSpace(Ht.copy(this),e),Math.round(Dt(Ht.r*255,0,255))*65536+Math.round(Dt(Ht.g*255,0,255))*256+Math.round(Dt(Ht.b*255,0,255))}getHexString(e=kt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=$e.workingColorSpace){$e.fromWorkingColorSpace(Ht.copy(this),t);const n=Ht.r,i=Ht.g,r=Ht.b,a=Math.max(n,i,r),o=Math.min(n,i,r);let c,l;const h=(o+a)/2;if(o===a)c=0,l=0;else{const d=a-o;switch(l=h<=.5?d/(a+o):d/(2-a-o),a){case n:c=(i-r)/d+(i<r?6:0);break;case i:c=(r-n)/d+2;break;case r:c=(n-i)/d+4;break}c/=6}return e.h=c,e.s=l,e.l=h,e}getRGB(e,t=$e.workingColorSpace){return $e.fromWorkingColorSpace(Ht.copy(this),t),e.r=Ht.r,e.g=Ht.g,e.b=Ht.b,e}getStyle(e=kt){$e.fromWorkingColorSpace(Ht.copy(this),e);const t=Ht.r,n=Ht.g,i=Ht.b;return e!==kt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(e,t,n){return this.getHSL(_i),this.setHSL(_i.h+e,_i.s+t,_i.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(_i),e.getHSL(zr);const n=br(_i.h,zr.h,t),i=br(_i.s,zr.s,t),r=br(_i.l,zr.l,t);return this.setHSL(n,i,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,i=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*i,this.g=r[1]*t+r[4]*n+r[7]*i,this.b=r[2]*t+r[5]*n+r[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Ht=new we;we.NAMES=vu;let Xp=0;class Pn extends Bs{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Xp++}),this.uuid=Cn(),this.name="",this.type="Material",this.blending=ys,this.side=di,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=cc,this.blendDst=lc,this.blendEquation=Gi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new we(0,0,0),this.blendAlpha=0,this.depthFunc=Ts,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Zl,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ji,this.stencilZFail=Ji,this.stencilZPass=Ji,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==ys&&(n.blending=this.blending),this.side!==di&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==cc&&(n.blendSrc=this.blendSrc),this.blendDst!==lc&&(n.blendDst=this.blendDst),this.blendEquation!==Gi&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Ts&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Zl&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ji&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Ji&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Ji&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(r){const a=[];for(const o in r){const c=r[o];delete c.metadata,a.push(c)}return a}if(t){const r=i(e.textures),a=i(e.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const i=t.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class yn extends Pn{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new we(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Jt,this.combine=eu,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Et=new R,Hr=new Se;class St{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=jc,this.updateRanges=[],this.gpuType=Rn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Hr.fromBufferAttribute(this,t),Hr.applyMatrix3(e),this.setXY(t,Hr.x,Hr.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Et.fromBufferAttribute(this,t),Et.applyMatrix3(e),this.setXYZ(t,Et.x,Et.y,Et.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Et.fromBufferAttribute(this,t),Et.applyMatrix4(e),this.setXYZ(t,Et.x,Et.y,Et.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Et.fromBufferAttribute(this,t),Et.applyNormalMatrix(e),this.setXYZ(t,Et.x,Et.y,Et.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Et.fromBufferAttribute(this,t),Et.transformDirection(e),this.setXYZ(t,Et.x,Et.y,Et.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=An(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=at(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=An(t,this.array)),t}setX(e,t){return this.normalized&&(t=at(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=An(t,this.array)),t}setY(e,t){return this.normalized&&(t=at(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=An(t,this.array)),t}setZ(e,t){return this.normalized&&(t=at(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=An(t,this.array)),t}setW(e,t){return this.normalized&&(t=at(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=at(t,this.array),n=at(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=at(t,this.array),n=at(n,this.array),i=at(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e*=this.itemSize,this.normalized&&(t=at(t,this.array),n=at(n,this.array),i=at(i,this.array),r=at(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==jc&&(e.usage=this.usage),e}}class xu extends St{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class yu extends St{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class At extends St{constructor(e,t,n){super(new Float32Array(e),t,n)}}let Yp=0;const pn=new ve,yo=new pt,cs=new R,cn=new Vn,Ks=new Vn,It=new R;class Ct extends Bs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Yp++}),this.uuid=Cn(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(mu(e)?yu:xu)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new Be().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return pn.makeRotationFromQuaternion(e),this.applyMatrix4(pn),this}rotateX(e){return pn.makeRotationX(e),this.applyMatrix4(pn),this}rotateY(e){return pn.makeRotationY(e),this.applyMatrix4(pn),this}rotateZ(e){return pn.makeRotationZ(e),this.applyMatrix4(pn),this}translate(e,t,n){return pn.makeTranslation(e,t,n),this.applyMatrix4(pn),this}scale(e,t,n){return pn.makeScale(e,t,n),this.applyMatrix4(pn),this}lookAt(e){return yo.lookAt(e),yo.updateMatrix(),this.applyMatrix4(yo.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(cs).negate(),this.translate(cs.x,cs.y,cs.z),this}setFromPoints(e){const t=[];for(let n=0,i=e.length;n<i;n++){const r=e[n];t.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new At(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Vn);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new R(-1/0,-1/0,-1/0),new R(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){const r=t[n];cn.setFromBufferAttribute(r),this.morphTargetsRelative?(It.addVectors(this.boundingBox.min,cn.min),this.boundingBox.expandByPoint(It),It.addVectors(this.boundingBox.max,cn.max),this.boundingBox.expandByPoint(It)):(this.boundingBox.expandByPoint(cn.min),this.boundingBox.expandByPoint(cn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Wn);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new R,1/0);return}if(e){const n=this.boundingSphere.center;if(cn.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){const o=t[r];Ks.setFromBufferAttribute(o),this.morphTargetsRelative?(It.addVectors(cn.min,Ks.min),cn.expandByPoint(It),It.addVectors(cn.max,Ks.max),cn.expandByPoint(It)):(cn.expandByPoint(Ks.min),cn.expandByPoint(Ks.max))}cn.getCenter(n);let i=0;for(let r=0,a=e.count;r<a;r++)It.fromBufferAttribute(e,r),i=Math.max(i,n.distanceToSquared(It));if(t)for(let r=0,a=t.length;r<a;r++){const o=t[r],c=this.morphTargetsRelative;for(let l=0,h=o.count;l<h;l++)It.fromBufferAttribute(o,l),c&&(cs.fromBufferAttribute(e,l),It.add(cs)),i=Math.max(i,n.distanceToSquared(It))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,i=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new St(new Float32Array(4*n.count),4));const a=this.getAttribute("tangent"),o=[],c=[];for(let P=0;P<n.count;P++)o[P]=new R,c[P]=new R;const l=new R,h=new R,d=new R,u=new Se,f=new Se,g=new Se,b=new R,m=new R;function p(P,F,_){l.fromBufferAttribute(n,P),h.fromBufferAttribute(n,F),d.fromBufferAttribute(n,_),u.fromBufferAttribute(r,P),f.fromBufferAttribute(r,F),g.fromBufferAttribute(r,_),h.sub(l),d.sub(l),f.sub(u),g.sub(u);const w=1/(f.x*g.y-g.x*f.y);isFinite(w)&&(b.copy(h).multiplyScalar(g.y).addScaledVector(d,-f.y).multiplyScalar(w),m.copy(d).multiplyScalar(f.x).addScaledVector(h,-g.x).multiplyScalar(w),o[P].add(b),o[F].add(b),o[_].add(b),c[P].add(m),c[F].add(m),c[_].add(m))}let x=this.groups;x.length===0&&(x=[{start:0,count:e.count}]);for(let P=0,F=x.length;P<F;++P){const _=x[P],w=_.start,U=_.count;for(let O=w,B=w+U;O<B;O+=3)p(e.getX(O+0),e.getX(O+1),e.getX(O+2))}const v=new R,y=new R,A=new R,T=new R;function S(P){A.fromBufferAttribute(i,P),T.copy(A);const F=o[P];v.copy(F),v.sub(A.multiplyScalar(A.dot(F))).normalize(),y.crossVectors(T,F);const w=y.dot(c[P])<0?-1:1;a.setXYZW(P,v.x,v.y,v.z,w)}for(let P=0,F=x.length;P<F;++P){const _=x[P],w=_.start,U=_.count;for(let O=w,B=w+U;O<B;O+=3)S(e.getX(O+0)),S(e.getX(O+1)),S(e.getX(O+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new St(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let u=0,f=n.count;u<f;u++)n.setXYZ(u,0,0,0);const i=new R,r=new R,a=new R,o=new R,c=new R,l=new R,h=new R,d=new R;if(e)for(let u=0,f=e.count;u<f;u+=3){const g=e.getX(u+0),b=e.getX(u+1),m=e.getX(u+2);i.fromBufferAttribute(t,g),r.fromBufferAttribute(t,b),a.fromBufferAttribute(t,m),h.subVectors(a,r),d.subVectors(i,r),h.cross(d),o.fromBufferAttribute(n,g),c.fromBufferAttribute(n,b),l.fromBufferAttribute(n,m),o.add(h),c.add(h),l.add(h),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(b,c.x,c.y,c.z),n.setXYZ(m,l.x,l.y,l.z)}else for(let u=0,f=t.count;u<f;u+=3)i.fromBufferAttribute(t,u+0),r.fromBufferAttribute(t,u+1),a.fromBufferAttribute(t,u+2),h.subVectors(a,r),d.subVectors(i,r),h.cross(d),n.setXYZ(u+0,h.x,h.y,h.z),n.setXYZ(u+1,h.x,h.y,h.z),n.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)It.fromBufferAttribute(e,t),It.normalize(),e.setXYZ(t,It.x,It.y,It.z)}toNonIndexed(){function e(o,c){const l=o.array,h=o.itemSize,d=o.normalized,u=new l.constructor(c.length*h);let f=0,g=0;for(let b=0,m=c.length;b<m;b++){o.isInterleavedBufferAttribute?f=c[b]*o.data.stride+o.offset:f=c[b]*h;for(let p=0;p<h;p++)u[g++]=l[f++]}return new St(u,h,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Ct,n=this.index.array,i=this.attributes;for(const o in i){const c=i[o],l=e(c,n);t.setAttribute(o,l)}const r=this.morphAttributes;for(const o in r){const c=[],l=r[o];for(let h=0,d=l.length;h<d;h++){const u=l[h],f=e(u,n);c.push(f)}t.morphAttributes[o]=c}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,c=a.length;o<c;o++){const l=a[o];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const c in n){const l=n[c];e.data.attributes[c]=l.toJSON(e.data)}const i={};let r=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],h=[];for(let d=0,u=l.length;d<u;d++){const f=l[d];h.push(f.toJSON(e.data))}h.length>0&&(i[c]=h,r=!0)}r&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const i=e.attributes;for(const l in i){const h=i[l];this.setAttribute(l,h.clone(t))}const r=e.morphAttributes;for(const l in r){const h=[],d=r[l];for(let u=0,f=d.length;u<f;u++)h.push(d[u].clone(t));this.morphAttributes[l]=h}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let l=0,h=a.length;l<h;l++){const d=a[l];this.addGroup(d.start,d.count,d.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const ph=new ve,Ni=new Va,Gr=new Wn,mh=new R,Vr=new R,Wr=new R,qr=new R,Mo=new R,jr=new R,gh=new R,Xr=new R;class st extends pt{constructor(e=new Ct,t=new yn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){const o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){const n=this.geometry,i=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(i,e);const o=this.morphTargetInfluences;if(r&&o){jr.set(0,0,0);for(let c=0,l=r.length;c<l;c++){const h=o[c],d=r[c];h!==0&&(Mo.fromBufferAttribute(d,e),a?jr.addScaledVector(Mo,h):jr.addScaledVector(Mo.sub(t),h))}t.add(jr)}return t}raycast(e,t){const n=this.geometry,i=this.material,r=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Gr.copy(n.boundingSphere),Gr.applyMatrix4(r),Ni.copy(e.ray).recast(e.near),!(Gr.containsPoint(Ni.origin)===!1&&(Ni.intersectSphere(Gr,mh)===null||Ni.origin.distanceToSquared(mh)>(e.far-e.near)**2))&&(ph.copy(r).invert(),Ni.copy(e.ray).applyMatrix4(ph),!(n.boundingBox!==null&&Ni.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Ni)))}_computeIntersections(e,t,n){let i;const r=this.geometry,a=this.material,o=r.index,c=r.attributes.position,l=r.attributes.uv,h=r.attributes.uv1,d=r.attributes.normal,u=r.groups,f=r.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,b=u.length;g<b;g++){const m=u[g],p=a[m.materialIndex],x=Math.max(m.start,f.start),v=Math.min(o.count,Math.min(m.start+m.count,f.start+f.count));for(let y=x,A=v;y<A;y+=3){const T=o.getX(y),S=o.getX(y+1),P=o.getX(y+2);i=Yr(this,p,e,n,l,h,d,T,S,P),i&&(i.faceIndex=Math.floor(y/3),i.face.materialIndex=m.materialIndex,t.push(i))}}else{const g=Math.max(0,f.start),b=Math.min(o.count,f.start+f.count);for(let m=g,p=b;m<p;m+=3){const x=o.getX(m),v=o.getX(m+1),y=o.getX(m+2);i=Yr(this,a,e,n,l,h,d,x,v,y),i&&(i.faceIndex=Math.floor(m/3),t.push(i))}}else if(c!==void 0)if(Array.isArray(a))for(let g=0,b=u.length;g<b;g++){const m=u[g],p=a[m.materialIndex],x=Math.max(m.start,f.start),v=Math.min(c.count,Math.min(m.start+m.count,f.start+f.count));for(let y=x,A=v;y<A;y+=3){const T=y,S=y+1,P=y+2;i=Yr(this,p,e,n,l,h,d,T,S,P),i&&(i.faceIndex=Math.floor(y/3),i.face.materialIndex=m.materialIndex,t.push(i))}}else{const g=Math.max(0,f.start),b=Math.min(c.count,f.start+f.count);for(let m=g,p=b;m<p;m+=3){const x=m,v=m+1,y=m+2;i=Yr(this,a,e,n,l,h,d,x,v,y),i&&(i.faceIndex=Math.floor(m/3),t.push(i))}}}}function Kp(s,e,t,n,i,r,a,o){let c;if(e.side===Qt?c=n.intersectTriangle(a,r,i,!0,o):c=n.intersectTriangle(i,r,a,e.side===di,o),c===null)return null;Xr.copy(o),Xr.applyMatrix4(s.matrixWorld);const l=t.ray.origin.distanceTo(Xr);return l<t.near||l>t.far?null:{distance:l,point:Xr.clone(),object:s}}function Yr(s,e,t,n,i,r,a,o,c,l){s.getVertexPosition(o,Vr),s.getVertexPosition(c,Wr),s.getVertexPosition(l,qr);const h=Kp(s,e,t,n,Vr,Wr,qr,gh);if(h){const d=new R;dn.getBarycoord(gh,Vr,Wr,qr,d),i&&(h.uv=dn.getInterpolatedAttribute(i,o,c,l,d,new Se)),r&&(h.uv1=dn.getInterpolatedAttribute(r,o,c,l,d,new Se)),a&&(h.normal=dn.getInterpolatedAttribute(a,o,c,l,d,new R),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const u={a:o,b:c,c:l,normal:new R,materialIndex:0};dn.getNormal(Vr,Wr,qr,u.normal),h.face=u,h.barycoord=d}return h}class $i extends Ct{constructor(e=1,t=1,n=1,i=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:r,depthSegments:a};const o=this;i=Math.floor(i),r=Math.floor(r),a=Math.floor(a);const c=[],l=[],h=[],d=[];let u=0,f=0;g("z","y","x",-1,-1,n,t,e,a,r,0),g("z","y","x",1,-1,n,t,-e,a,r,1),g("x","z","y",1,1,e,n,t,i,a,2),g("x","z","y",1,-1,e,n,-t,i,a,3),g("x","y","z",1,-1,e,t,n,i,r,4),g("x","y","z",-1,-1,e,t,-n,i,r,5),this.setIndex(c),this.setAttribute("position",new At(l,3)),this.setAttribute("normal",new At(h,3)),this.setAttribute("uv",new At(d,2));function g(b,m,p,x,v,y,A,T,S,P,F){const _=y/S,w=A/P,U=y/2,O=A/2,B=T/2,K=S+1,G=P+1;let Z=0,W=0;const ce=new R;for(let le=0;le<G;le++){const me=le*w-O;for(let Ge=0;Ge<K;Ge++){const Ae=Ge*_-U;ce[b]=Ae*x,ce[m]=me*v,ce[p]=B,l.push(ce.x,ce.y,ce.z),ce[b]=0,ce[m]=0,ce[p]=T>0?1:-1,h.push(ce.x,ce.y,ce.z),d.push(Ge/S),d.push(1-le/P),Z+=1}}for(let le=0;le<P;le++)for(let me=0;me<S;me++){const Ge=u+me+K*le,Ae=u+me+K*(le+1),j=u+(me+1)+K*(le+1),J=u+(me+1)+K*le;c.push(Ge,Ae,J),c.push(Ae,j,J),W+=6}o.addGroup(f,W,F),f+=W,u+=Z}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new $i(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Ns(s){const e={};for(const t in s){e[t]={};for(const n in s[t]){const i=s[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function jt(s){const e={};for(let t=0;t<s.length;t++){const n=Ns(s[t]);for(const i in n)e[i]=n[i]}return e}function $p(s){const e=[];for(let t=0;t<s.length;t++)e.push(s[t].clone());return e}function Mu(s){const e=s.getRenderTarget();return e===null?s.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:$e.workingColorSpace}const Qp={clone:Ns,merge:jt};var Jp=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Zp=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Ln extends Pn{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Jp,this.fragmentShader=Zp,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ns(e.uniforms),this.uniformsGroups=$p(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const i in this.uniforms){const a=this.uniforms[i].value;a&&a.isTexture?t.uniforms[i]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[i]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[i]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[i]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[i]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[i]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[i]={type:"m4",value:a.toArray()}:t.uniforms[i]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class Su extends pt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ve,this.projectionMatrix=new ve,this.projectionMatrixInverse=new ve,this.coordinateSystem=ai}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const vi=new R,bh=new Se,_h=new Se;class Xt extends Su{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Ds*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Ss*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Ds*2*Math.atan(Math.tan(Ss*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){vi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(vi.x,vi.y).multiplyScalar(-e/vi.z),vi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(vi.x,vi.y).multiplyScalar(-e/vi.z)}getViewSize(e,t){return this.getViewBounds(e,bh,_h),t.subVectors(_h,bh)}setViewOffset(e,t,n,i,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Ss*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,r=-.5*i;const a=this.view;if(this.view!==null&&this.view.enabled){const c=a.fullWidth,l=a.fullHeight;r+=a.offsetX*i/c,t-=a.offsetY*n/l,i*=a.width/c,n*=a.height/l}const o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const ls=-90,hs=1;class em extends pt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new Xt(ls,hs,e,t);i.layers=this.layers,this.add(i);const r=new Xt(ls,hs,e,t);r.layers=this.layers,this.add(r);const a=new Xt(ls,hs,e,t);a.layers=this.layers,this.add(a);const o=new Xt(ls,hs,e,t);o.layers=this.layers,this.add(o);const c=new Xt(ls,hs,e,t);c.layers=this.layers,this.add(c);const l=new Xt(ls,hs,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,i,r,a,o,c]=t;for(const l of t)this.remove(l);if(e===ai)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===Ua)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,a,o,c,l,h]=this.children,d=e.getRenderTarget(),u=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const b=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,i),e.render(t,r),e.setRenderTarget(n,1,i),e.render(t,a),e.setRenderTarget(n,2,i),e.render(t,o),e.setRenderTarget(n,3,i),e.render(t,c),e.setRenderTarget(n,4,i),e.render(t,l),n.texture.generateMipmaps=b,e.setRenderTarget(n,5,i),e.render(t,h),e.setRenderTarget(d,u,f),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class wu extends Rt{constructor(e,t,n,i,r,a,o,c,l,h){e=e!==void 0?e:[],t=t!==void 0?t:Rs,super(e,t,n,i,r,a,o,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class tm extends ji{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];this.texture=new wu(i,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:hn}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new $i(5,5,5),r=new Ln({name:"CubemapFromEquirect",uniforms:Ns(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Qt,blending:Ai});r.uniforms.tEquirect.value=t;const a=new st(i,r),o=t.minFilter;return t.minFilter===zn&&(t.minFilter=hn),new em(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t,n,i){const r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,i);e.setRenderTarget(r)}}const So=new R,nm=new R,im=new Be;class zi{constructor(e=new R(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const i=So.subVectors(n,t).cross(nm.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(So),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/i;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||im.getNormalMatrix(e),i=this.coplanarPoint(So).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Ui=new Wn,Kr=new R;class pl{constructor(e=new zi,t=new zi,n=new zi,i=new zi,r=new zi,a=new zi){this.planes=[e,t,n,i,r,a]}set(e,t,n,i,r,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(i),o[4].copy(r),o[5].copy(a),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=ai){const n=this.planes,i=e.elements,r=i[0],a=i[1],o=i[2],c=i[3],l=i[4],h=i[5],d=i[6],u=i[7],f=i[8],g=i[9],b=i[10],m=i[11],p=i[12],x=i[13],v=i[14],y=i[15];if(n[0].setComponents(c-r,u-l,m-f,y-p).normalize(),n[1].setComponents(c+r,u+l,m+f,y+p).normalize(),n[2].setComponents(c+a,u+h,m+g,y+x).normalize(),n[3].setComponents(c-a,u-h,m-g,y-x).normalize(),n[4].setComponents(c-o,u-d,m-b,y-v).normalize(),t===ai)n[5].setComponents(c+o,u+d,m+b,y+v).normalize();else if(t===Ua)n[5].setComponents(o,d,b,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Ui.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Ui.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Ui)}intersectsSprite(e){return Ui.center.set(0,0,0),Ui.radius=.7071067811865476,Ui.applyMatrix4(e.matrixWorld),this.intersectsSphere(Ui)}intersectsSphere(e){const t=this.planes,n=e.center,i=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const i=t[n];if(Kr.x=i.normal.x>0?e.max.x:e.min.x,Kr.y=i.normal.y>0?e.max.y:e.min.y,Kr.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(Kr)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Eu(){let s=null,e=!1,t=null,n=null;function i(r,a){t(r,a),n=s.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=s.requestAnimationFrame(i),e=!0)},stop:function(){s.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){s=r}}}function sm(s){const e=new WeakMap;function t(o,c){const l=o.array,h=o.usage,d=l.byteLength,u=s.createBuffer();s.bindBuffer(c,u),s.bufferData(c,l,h),o.onUploadCallback();let f;if(l instanceof Float32Array)f=s.FLOAT;else if(l instanceof Uint16Array)o.isFloat16BufferAttribute?f=s.HALF_FLOAT:f=s.UNSIGNED_SHORT;else if(l instanceof Int16Array)f=s.SHORT;else if(l instanceof Uint32Array)f=s.UNSIGNED_INT;else if(l instanceof Int32Array)f=s.INT;else if(l instanceof Int8Array)f=s.BYTE;else if(l instanceof Uint8Array)f=s.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)f=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:u,type:f,bytesPerElement:l.BYTES_PER_ELEMENT,version:o.version,size:d}}function n(o,c,l){const h=c.array,d=c.updateRanges;if(s.bindBuffer(l,o),d.length===0)s.bufferSubData(l,0,h);else{d.sort((f,g)=>f.start-g.start);let u=0;for(let f=1;f<d.length;f++){const g=d[u],b=d[f];b.start<=g.start+g.count+1?g.count=Math.max(g.count,b.start+b.count-g.start):(++u,d[u]=b)}d.length=u+1;for(let f=0,g=d.length;f<g;f++){const b=d[f];s.bufferSubData(l,b.start*h.BYTES_PER_ELEMENT,h,b.start,b.count)}c.clearUpdateRanges()}c.onUploadCallback()}function i(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);const c=e.get(o);c&&(s.deleteBuffer(c.buffer),e.delete(o))}function a(o,c){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const h=e.get(o);(!h||h.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const l=e.get(o);if(l===void 0)e.set(o,t(o,c));else if(l.version<o.version){if(l.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,o,c),l.version=o.version}}return{get:i,remove:r,update:a}}class Pi extends Ct{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};const r=e/2,a=t/2,o=Math.floor(n),c=Math.floor(i),l=o+1,h=c+1,d=e/o,u=t/c,f=[],g=[],b=[],m=[];for(let p=0;p<h;p++){const x=p*u-a;for(let v=0;v<l;v++){const y=v*d-r;g.push(y,-x,0),b.push(0,0,1),m.push(v/o),m.push(1-p/c)}}for(let p=0;p<c;p++)for(let x=0;x<o;x++){const v=x+l*p,y=x+l*(p+1),A=x+1+l*(p+1),T=x+1+l*p;f.push(v,y,T),f.push(y,A,T)}this.setIndex(f),this.setAttribute("position",new At(g,3)),this.setAttribute("normal",new At(b,3)),this.setAttribute("uv",new At(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Pi(e.width,e.height,e.widthSegments,e.heightSegments)}}var rm=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,am=`#ifdef USE_ALPHAHASH
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
#endif`,om=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,cm=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,lm=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,hm=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,dm=`#ifdef USE_AOMAP
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
#endif`,um=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,fm=`#ifdef USE_BATCHING
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
#endif`,pm=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,mm=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,gm=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,bm=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,_m=`#ifdef USE_IRIDESCENCE
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
#endif`,vm=`#ifdef USE_BUMPMAP
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
#endif`,xm=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,ym=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Mm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Sm=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,wm=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Em=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Am=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Tm=`#if defined( USE_COLOR_ALPHA )
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
#endif`,Rm=`#define PI 3.141592653589793
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
} // validated`,Cm=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Pm=`vec3 transformedNormal = objectNormal;
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
#endif`,Lm=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Im=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Dm=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Nm=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Um="gl_FragColor = linearToOutputTexel( gl_FragColor );",Fm=`
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
}`,km=`#ifdef USE_ENVMAP
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
#endif`,Om=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Bm=`#ifdef USE_ENVMAP
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
#endif`,zm=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Hm=`#ifdef USE_ENVMAP
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
#endif`,Gm=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Vm=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Wm=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,qm=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,jm=`#ifdef USE_GRADIENTMAP
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
}`,Xm=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Ym=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Km=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,$m=`uniform bool receiveShadow;
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
#endif`,Qm=`#ifdef USE_ENVMAP
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
#endif`,Jm=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Zm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,eg=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,tg=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,ng=`PhysicalMaterial material;
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
#endif`,ig=`struct PhysicalMaterial {
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
}`,sg=`
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
#endif`,rg=`#if defined( RE_IndirectDiffuse )
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
#endif`,ag=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,og=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,cg=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,lg=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,hg=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,dg=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,ug=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,fg=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,pg=`#if defined( USE_POINTS_UV )
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
#endif`,mg=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,gg=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,bg=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,_g=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,vg=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,xg=`#ifdef USE_MORPHTARGETS
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
#endif`,yg=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Mg=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Sg=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,wg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Eg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Ag=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Tg=`#ifdef USE_NORMALMAP
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
#endif`,Rg=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Cg=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Pg=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Lg=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Ig=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Dg=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Ng=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Ug=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Fg=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,kg=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Og=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Bg=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,zg=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Hg=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Gg=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Vg=`float getShadowMask() {
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
}`,Wg=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,qg=`#ifdef USE_SKINNING
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
#endif`,jg=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Xg=`#ifdef USE_SKINNING
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
#endif`,Yg=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Kg=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,$g=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Qg=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Jg=`#ifdef USE_TRANSMISSION
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
#endif`,Zg=`#ifdef USE_TRANSMISSION
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
#endif`,e0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,t0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,n0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,i0=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const s0=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,r0=`uniform sampler2D t2D;
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
}`,a0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,o0=`#ifdef ENVMAP_TYPE_CUBE
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
}`,c0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,l0=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,h0=`#include <common>
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
}`,d0=`#if DEPTH_PACKING == 3200
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
}`,u0=`#define DISTANCE
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
}`,f0=`#define DISTANCE
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
}`,p0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,m0=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,g0=`uniform float scale;
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
}`,b0=`uniform vec3 diffuse;
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
}`,_0=`#include <common>
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
}`,v0=`uniform vec3 diffuse;
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
}`,x0=`#define LAMBERT
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
}`,y0=`#define LAMBERT
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
}`,M0=`#define MATCAP
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
}`,S0=`#define MATCAP
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
}`,w0=`#define NORMAL
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
}`,E0=`#define NORMAL
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
}`,A0=`#define PHONG
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
}`,T0=`#define PHONG
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
}`,R0=`#define STANDARD
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
}`,C0=`#define STANDARD
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
}`,P0=`#define TOON
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
}`,L0=`#define TOON
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
}`,I0=`uniform float size;
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
}`,D0=`uniform vec3 diffuse;
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
}`,N0=`#include <common>
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
}`,U0=`uniform vec3 color;
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
}`,F0=`uniform float rotation;
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
}`,k0=`uniform vec3 diffuse;
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
}`,ke={alphahash_fragment:rm,alphahash_pars_fragment:am,alphamap_fragment:om,alphamap_pars_fragment:cm,alphatest_fragment:lm,alphatest_pars_fragment:hm,aomap_fragment:dm,aomap_pars_fragment:um,batching_pars_vertex:fm,batching_vertex:pm,begin_vertex:mm,beginnormal_vertex:gm,bsdfs:bm,iridescence_fragment:_m,bumpmap_pars_fragment:vm,clipping_planes_fragment:xm,clipping_planes_pars_fragment:ym,clipping_planes_pars_vertex:Mm,clipping_planes_vertex:Sm,color_fragment:wm,color_pars_fragment:Em,color_pars_vertex:Am,color_vertex:Tm,common:Rm,cube_uv_reflection_fragment:Cm,defaultnormal_vertex:Pm,displacementmap_pars_vertex:Lm,displacementmap_vertex:Im,emissivemap_fragment:Dm,emissivemap_pars_fragment:Nm,colorspace_fragment:Um,colorspace_pars_fragment:Fm,envmap_fragment:km,envmap_common_pars_fragment:Om,envmap_pars_fragment:Bm,envmap_pars_vertex:zm,envmap_physical_pars_fragment:Qm,envmap_vertex:Hm,fog_vertex:Gm,fog_pars_vertex:Vm,fog_fragment:Wm,fog_pars_fragment:qm,gradientmap_pars_fragment:jm,lightmap_pars_fragment:Xm,lights_lambert_fragment:Ym,lights_lambert_pars_fragment:Km,lights_pars_begin:$m,lights_toon_fragment:Jm,lights_toon_pars_fragment:Zm,lights_phong_fragment:eg,lights_phong_pars_fragment:tg,lights_physical_fragment:ng,lights_physical_pars_fragment:ig,lights_fragment_begin:sg,lights_fragment_maps:rg,lights_fragment_end:ag,logdepthbuf_fragment:og,logdepthbuf_pars_fragment:cg,logdepthbuf_pars_vertex:lg,logdepthbuf_vertex:hg,map_fragment:dg,map_pars_fragment:ug,map_particle_fragment:fg,map_particle_pars_fragment:pg,metalnessmap_fragment:mg,metalnessmap_pars_fragment:gg,morphinstance_vertex:bg,morphcolor_vertex:_g,morphnormal_vertex:vg,morphtarget_pars_vertex:xg,morphtarget_vertex:yg,normal_fragment_begin:Mg,normal_fragment_maps:Sg,normal_pars_fragment:wg,normal_pars_vertex:Eg,normal_vertex:Ag,normalmap_pars_fragment:Tg,clearcoat_normal_fragment_begin:Rg,clearcoat_normal_fragment_maps:Cg,clearcoat_pars_fragment:Pg,iridescence_pars_fragment:Lg,opaque_fragment:Ig,packing:Dg,premultiplied_alpha_fragment:Ng,project_vertex:Ug,dithering_fragment:Fg,dithering_pars_fragment:kg,roughnessmap_fragment:Og,roughnessmap_pars_fragment:Bg,shadowmap_pars_fragment:zg,shadowmap_pars_vertex:Hg,shadowmap_vertex:Gg,shadowmask_pars_fragment:Vg,skinbase_vertex:Wg,skinning_pars_vertex:qg,skinning_vertex:jg,skinnormal_vertex:Xg,specularmap_fragment:Yg,specularmap_pars_fragment:Kg,tonemapping_fragment:$g,tonemapping_pars_fragment:Qg,transmission_fragment:Jg,transmission_pars_fragment:Zg,uv_pars_fragment:e0,uv_pars_vertex:t0,uv_vertex:n0,worldpos_vertex:i0,background_vert:s0,background_frag:r0,backgroundCube_vert:a0,backgroundCube_frag:o0,cube_vert:c0,cube_frag:l0,depth_vert:h0,depth_frag:d0,distanceRGBA_vert:u0,distanceRGBA_frag:f0,equirect_vert:p0,equirect_frag:m0,linedashed_vert:g0,linedashed_frag:b0,meshbasic_vert:_0,meshbasic_frag:v0,meshlambert_vert:x0,meshlambert_frag:y0,meshmatcap_vert:M0,meshmatcap_frag:S0,meshnormal_vert:w0,meshnormal_frag:E0,meshphong_vert:A0,meshphong_frag:T0,meshphysical_vert:R0,meshphysical_frag:C0,meshtoon_vert:P0,meshtoon_frag:L0,points_vert:I0,points_frag:D0,shadow_vert:N0,shadow_frag:U0,sprite_vert:F0,sprite_frag:k0},ne={common:{diffuse:{value:new we(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Be},alphaMap:{value:null},alphaMapTransform:{value:new Be},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Be}},envmap:{envMap:{value:null},envMapRotation:{value:new Be},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Be}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Be}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Be},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Be},normalScale:{value:new Se(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Be},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Be}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Be}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Be}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new we(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new we(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Be},alphaTest:{value:0},uvTransform:{value:new Be}},sprite:{diffuse:{value:new we(16777215)},opacity:{value:1},center:{value:new Se(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Be},alphaMap:{value:null},alphaMapTransform:{value:new Be},alphaTest:{value:0}}},Un={basic:{uniforms:jt([ne.common,ne.specularmap,ne.envmap,ne.aomap,ne.lightmap,ne.fog]),vertexShader:ke.meshbasic_vert,fragmentShader:ke.meshbasic_frag},lambert:{uniforms:jt([ne.common,ne.specularmap,ne.envmap,ne.aomap,ne.lightmap,ne.emissivemap,ne.bumpmap,ne.normalmap,ne.displacementmap,ne.fog,ne.lights,{emissive:{value:new we(0)}}]),vertexShader:ke.meshlambert_vert,fragmentShader:ke.meshlambert_frag},phong:{uniforms:jt([ne.common,ne.specularmap,ne.envmap,ne.aomap,ne.lightmap,ne.emissivemap,ne.bumpmap,ne.normalmap,ne.displacementmap,ne.fog,ne.lights,{emissive:{value:new we(0)},specular:{value:new we(1118481)},shininess:{value:30}}]),vertexShader:ke.meshphong_vert,fragmentShader:ke.meshphong_frag},standard:{uniforms:jt([ne.common,ne.envmap,ne.aomap,ne.lightmap,ne.emissivemap,ne.bumpmap,ne.normalmap,ne.displacementmap,ne.roughnessmap,ne.metalnessmap,ne.fog,ne.lights,{emissive:{value:new we(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ke.meshphysical_vert,fragmentShader:ke.meshphysical_frag},toon:{uniforms:jt([ne.common,ne.aomap,ne.lightmap,ne.emissivemap,ne.bumpmap,ne.normalmap,ne.displacementmap,ne.gradientmap,ne.fog,ne.lights,{emissive:{value:new we(0)}}]),vertexShader:ke.meshtoon_vert,fragmentShader:ke.meshtoon_frag},matcap:{uniforms:jt([ne.common,ne.bumpmap,ne.normalmap,ne.displacementmap,ne.fog,{matcap:{value:null}}]),vertexShader:ke.meshmatcap_vert,fragmentShader:ke.meshmatcap_frag},points:{uniforms:jt([ne.points,ne.fog]),vertexShader:ke.points_vert,fragmentShader:ke.points_frag},dashed:{uniforms:jt([ne.common,ne.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ke.linedashed_vert,fragmentShader:ke.linedashed_frag},depth:{uniforms:jt([ne.common,ne.displacementmap]),vertexShader:ke.depth_vert,fragmentShader:ke.depth_frag},normal:{uniforms:jt([ne.common,ne.bumpmap,ne.normalmap,ne.displacementmap,{opacity:{value:1}}]),vertexShader:ke.meshnormal_vert,fragmentShader:ke.meshnormal_frag},sprite:{uniforms:jt([ne.sprite,ne.fog]),vertexShader:ke.sprite_vert,fragmentShader:ke.sprite_frag},background:{uniforms:{uvTransform:{value:new Be},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ke.background_vert,fragmentShader:ke.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Be}},vertexShader:ke.backgroundCube_vert,fragmentShader:ke.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ke.cube_vert,fragmentShader:ke.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ke.equirect_vert,fragmentShader:ke.equirect_frag},distanceRGBA:{uniforms:jt([ne.common,ne.displacementmap,{referencePosition:{value:new R},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ke.distanceRGBA_vert,fragmentShader:ke.distanceRGBA_frag},shadow:{uniforms:jt([ne.lights,ne.fog,{color:{value:new we(0)},opacity:{value:1}}]),vertexShader:ke.shadow_vert,fragmentShader:ke.shadow_frag}};Un.physical={uniforms:jt([Un.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Be},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Be},clearcoatNormalScale:{value:new Se(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Be},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Be},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Be},sheen:{value:0},sheenColor:{value:new we(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Be},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Be},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Be},transmissionSamplerSize:{value:new Se},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Be},attenuationDistance:{value:0},attenuationColor:{value:new we(0)},specularColor:{value:new we(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Be},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Be},anisotropyVector:{value:new Se},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Be}}]),vertexShader:ke.meshphysical_vert,fragmentShader:ke.meshphysical_frag};const $r={r:0,b:0,g:0},Fi=new Jt,O0=new ve;function B0(s,e,t,n,i,r,a){const o=new we(0);let c=r===!0?0:1,l,h,d=null,u=0,f=null;function g(x){let v=x.isScene===!0?x.background:null;return v&&v.isTexture&&(v=(x.backgroundBlurriness>0?t:e).get(v)),v}function b(x){let v=!1;const y=g(x);y===null?p(o,c):y&&y.isColor&&(p(y,1),v=!0);const A=s.xr.getEnvironmentBlendMode();A==="additive"?n.buffers.color.setClear(0,0,0,1,a):A==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(s.autoClear||v)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function m(x,v){const y=g(v);y&&(y.isCubeTexture||y.mapping===Ha)?(h===void 0&&(h=new st(new $i(1,1,1),new Ln({name:"BackgroundCubeMaterial",uniforms:Ns(Un.backgroundCube.uniforms),vertexShader:Un.backgroundCube.vertexShader,fragmentShader:Un.backgroundCube.fragmentShader,side:Qt,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(A,T,S){this.matrixWorld.copyPosition(S.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(h)),Fi.copy(v.backgroundRotation),Fi.x*=-1,Fi.y*=-1,Fi.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(Fi.y*=-1,Fi.z*=-1),h.material.uniforms.envMap.value=y,h.material.uniforms.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=v.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(O0.makeRotationFromEuler(Fi)),h.material.toneMapped=$e.getTransfer(y.colorSpace)!==ft,(d!==y||u!==y.version||f!==s.toneMapping)&&(h.material.needsUpdate=!0,d=y,u=y.version,f=s.toneMapping),h.layers.enableAll(),x.unshift(h,h.geometry,h.material,0,0,null)):y&&y.isTexture&&(l===void 0&&(l=new st(new Pi(2,2),new Ln({name:"BackgroundMaterial",uniforms:Ns(Un.background.uniforms),vertexShader:Un.background.vertexShader,fragmentShader:Un.background.fragmentShader,side:di,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=y,l.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,l.material.toneMapped=$e.getTransfer(y.colorSpace)!==ft,y.matrixAutoUpdate===!0&&y.updateMatrix(),l.material.uniforms.uvTransform.value.copy(y.matrix),(d!==y||u!==y.version||f!==s.toneMapping)&&(l.material.needsUpdate=!0,d=y,u=y.version,f=s.toneMapping),l.layers.enableAll(),x.unshift(l,l.geometry,l.material,0,0,null))}function p(x,v){x.getRGB($r,Mu(s)),n.buffers.color.setClear($r.r,$r.g,$r.b,v,a)}return{getClearColor:function(){return o},setClearColor:function(x,v=1){o.set(x),c=v,p(o,c)},getClearAlpha:function(){return c},setClearAlpha:function(x){c=x,p(o,c)},render:b,addToRenderList:m}}function z0(s,e){const t=s.getParameter(s.MAX_VERTEX_ATTRIBS),n={},i=u(null);let r=i,a=!1;function o(_,w,U,O,B){let K=!1;const G=d(O,U,w);r!==G&&(r=G,l(r.object)),K=f(_,O,U,B),K&&g(_,O,U,B),B!==null&&e.update(B,s.ELEMENT_ARRAY_BUFFER),(K||a)&&(a=!1,y(_,w,U,O),B!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,e.get(B).buffer))}function c(){return s.createVertexArray()}function l(_){return s.bindVertexArray(_)}function h(_){return s.deleteVertexArray(_)}function d(_,w,U){const O=U.wireframe===!0;let B=n[_.id];B===void 0&&(B={},n[_.id]=B);let K=B[w.id];K===void 0&&(K={},B[w.id]=K);let G=K[O];return G===void 0&&(G=u(c()),K[O]=G),G}function u(_){const w=[],U=[],O=[];for(let B=0;B<t;B++)w[B]=0,U[B]=0,O[B]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:w,enabledAttributes:U,attributeDivisors:O,object:_,attributes:{},index:null}}function f(_,w,U,O){const B=r.attributes,K=w.attributes;let G=0;const Z=U.getAttributes();for(const W in Z)if(Z[W].location>=0){const le=B[W];let me=K[W];if(me===void 0&&(W==="instanceMatrix"&&_.instanceMatrix&&(me=_.instanceMatrix),W==="instanceColor"&&_.instanceColor&&(me=_.instanceColor)),le===void 0||le.attribute!==me||me&&le.data!==me.data)return!0;G++}return r.attributesNum!==G||r.index!==O}function g(_,w,U,O){const B={},K=w.attributes;let G=0;const Z=U.getAttributes();for(const W in Z)if(Z[W].location>=0){let le=K[W];le===void 0&&(W==="instanceMatrix"&&_.instanceMatrix&&(le=_.instanceMatrix),W==="instanceColor"&&_.instanceColor&&(le=_.instanceColor));const me={};me.attribute=le,le&&le.data&&(me.data=le.data),B[W]=me,G++}r.attributes=B,r.attributesNum=G,r.index=O}function b(){const _=r.newAttributes;for(let w=0,U=_.length;w<U;w++)_[w]=0}function m(_){p(_,0)}function p(_,w){const U=r.newAttributes,O=r.enabledAttributes,B=r.attributeDivisors;U[_]=1,O[_]===0&&(s.enableVertexAttribArray(_),O[_]=1),B[_]!==w&&(s.vertexAttribDivisor(_,w),B[_]=w)}function x(){const _=r.newAttributes,w=r.enabledAttributes;for(let U=0,O=w.length;U<O;U++)w[U]!==_[U]&&(s.disableVertexAttribArray(U),w[U]=0)}function v(_,w,U,O,B,K,G){G===!0?s.vertexAttribIPointer(_,w,U,B,K):s.vertexAttribPointer(_,w,U,O,B,K)}function y(_,w,U,O){b();const B=O.attributes,K=U.getAttributes(),G=w.defaultAttributeValues;for(const Z in K){const W=K[Z];if(W.location>=0){let ce=B[Z];if(ce===void 0&&(Z==="instanceMatrix"&&_.instanceMatrix&&(ce=_.instanceMatrix),Z==="instanceColor"&&_.instanceColor&&(ce=_.instanceColor)),ce!==void 0){const le=ce.normalized,me=ce.itemSize,Ge=e.get(ce);if(Ge===void 0)continue;const Ae=Ge.buffer,j=Ge.type,J=Ge.bytesPerElement,ie=j===s.INT||j===s.UNSIGNED_INT||ce.gpuType===rl;if(ce.isInterleavedBufferAttribute){const re=ce.data,Ue=re.stride,Te=ce.offset;if(re.isInstancedInterleavedBuffer){for(let qe=0;qe<W.locationSize;qe++)p(W.location+qe,re.meshPerAttribute);_.isInstancedMesh!==!0&&O._maxInstanceCount===void 0&&(O._maxInstanceCount=re.meshPerAttribute*re.count)}else for(let qe=0;qe<W.locationSize;qe++)m(W.location+qe);s.bindBuffer(s.ARRAY_BUFFER,Ae);for(let qe=0;qe<W.locationSize;qe++)v(W.location+qe,me/W.locationSize,j,le,Ue*J,(Te+me/W.locationSize*qe)*J,ie)}else{if(ce.isInstancedBufferAttribute){for(let re=0;re<W.locationSize;re++)p(W.location+re,ce.meshPerAttribute);_.isInstancedMesh!==!0&&O._maxInstanceCount===void 0&&(O._maxInstanceCount=ce.meshPerAttribute*ce.count)}else for(let re=0;re<W.locationSize;re++)m(W.location+re);s.bindBuffer(s.ARRAY_BUFFER,Ae);for(let re=0;re<W.locationSize;re++)v(W.location+re,me/W.locationSize,j,le,me*J,me/W.locationSize*re*J,ie)}}else if(G!==void 0){const le=G[Z];if(le!==void 0)switch(le.length){case 2:s.vertexAttrib2fv(W.location,le);break;case 3:s.vertexAttrib3fv(W.location,le);break;case 4:s.vertexAttrib4fv(W.location,le);break;default:s.vertexAttrib1fv(W.location,le)}}}}x()}function A(){P();for(const _ in n){const w=n[_];for(const U in w){const O=w[U];for(const B in O)h(O[B].object),delete O[B];delete w[U]}delete n[_]}}function T(_){if(n[_.id]===void 0)return;const w=n[_.id];for(const U in w){const O=w[U];for(const B in O)h(O[B].object),delete O[B];delete w[U]}delete n[_.id]}function S(_){for(const w in n){const U=n[w];if(U[_.id]===void 0)continue;const O=U[_.id];for(const B in O)h(O[B].object),delete O[B];delete U[_.id]}}function P(){F(),a=!0,r!==i&&(r=i,l(r.object))}function F(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:o,reset:P,resetDefaultState:F,dispose:A,releaseStatesOfGeometry:T,releaseStatesOfProgram:S,initAttributes:b,enableAttribute:m,disableUnusedAttributes:x}}function H0(s,e,t){let n;function i(l){n=l}function r(l,h){s.drawArrays(n,l,h),t.update(h,n,1)}function a(l,h,d){d!==0&&(s.drawArraysInstanced(n,l,h,d),t.update(h,n,d))}function o(l,h,d){if(d===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,h,0,d);let f=0;for(let g=0;g<d;g++)f+=h[g];t.update(f,n,1)}function c(l,h,d,u){if(d===0)return;const f=e.get("WEBGL_multi_draw");if(f===null)for(let g=0;g<l.length;g++)a(l[g],h[g],u[g]);else{f.multiDrawArraysInstancedWEBGL(n,l,0,h,0,u,0,d);let g=0;for(let b=0;b<d;b++)g+=h[b];for(let b=0;b<u.length;b++)t.update(g,n,u[b])}}this.setMode=i,this.render=r,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=c}function G0(s,e,t,n){let i;function r(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const S=e.get("EXT_texture_filter_anisotropic");i=s.getParameter(S.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function a(S){return!(S!==xn&&n.convert(S)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(S){const P=S===Cr&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(S!==ui&&n.convert(S)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&S!==Rn&&!P)}function c(S){if(S==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";S="mediump"}return S==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=t.precision!==void 0?t.precision:"highp";const h=c(l);h!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",h,"instead."),l=h);const d=t.logarithmicDepthBuffer===!0,u=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control");if(u===!0){const S=e.get("EXT_clip_control");S.clipControlEXT(S.LOWER_LEFT_EXT,S.ZERO_TO_ONE_EXT)}const f=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),g=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),b=s.getParameter(s.MAX_TEXTURE_SIZE),m=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),p=s.getParameter(s.MAX_VERTEX_ATTRIBS),x=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),v=s.getParameter(s.MAX_VARYING_VECTORS),y=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),A=g>0,T=s.getParameter(s.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:a,textureTypeReadable:o,precision:l,logarithmicDepthBuffer:d,reverseDepthBuffer:u,maxTextures:f,maxVertexTextures:g,maxTextureSize:b,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:x,maxVaryings:v,maxFragmentUniforms:y,vertexTextures:A,maxSamples:T}}function V0(s){const e=this;let t=null,n=0,i=!1,r=!1;const a=new zi,o=new Be,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(d,u){const f=d.length!==0||u||n!==0||i;return i=u,n=d.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,u){t=h(d,u,0)},this.setState=function(d,u,f){const g=d.clippingPlanes,b=d.clipIntersection,m=d.clipShadows,p=s.get(d);if(!i||g===null||g.length===0||r&&!m)r?h(null):l();else{const x=r?0:n,v=x*4;let y=p.clippingState||null;c.value=y,y=h(g,u,v,f);for(let A=0;A!==v;++A)y[A]=t[A];p.clippingState=y,this.numIntersection=b?this.numPlanes:0,this.numPlanes+=x}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(d,u,f,g){const b=d!==null?d.length:0;let m=null;if(b!==0){if(m=c.value,g!==!0||m===null){const p=f+b*4,x=u.matrixWorldInverse;o.getNormalMatrix(x),(m===null||m.length<p)&&(m=new Float32Array(p));for(let v=0,y=f;v!==b;++v,y+=4)a.copy(d[v]).applyMatrix4(x,o),a.normal.toArray(m,y),m[y+3]=a.constant}c.value=m,c.needsUpdate=!0}return e.numPlanes=b,e.numIntersection=0,m}}function W0(s){let e=new WeakMap;function t(a,o){return o===bc?a.mapping=Rs:o===_c&&(a.mapping=Cs),a}function n(a){if(a&&a.isTexture){const o=a.mapping;if(o===bc||o===_c)if(e.has(a)){const c=e.get(a).texture;return t(c,a.mapping)}else{const c=a.image;if(c&&c.height>0){const l=new tm(c.height);return l.fromEquirectangularTexture(s,a),e.set(a,l),a.addEventListener("dispose",i),t(l.texture,a.mapping)}else return null}}return a}function i(a){const o=a.target;o.removeEventListener("dispose",i);const c=e.get(o);c!==void 0&&(e.delete(o),c.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}class ml extends Su{constructor(e=-1,t=1,n=1,i=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let r=n-e,a=n+e,o=i+t,c=i-t;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,a=r+l*this.view.width,o-=h*this.view.offsetY,c=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const xs=4,vh=[.125,.215,.35,.446,.526,.582],Vi=20,wo=new ml,xh=new we;let Eo=null,Ao=0,To=0,Ro=!1;const Hi=(1+Math.sqrt(5))/2,ds=1/Hi,yh=[new R(-Hi,ds,0),new R(Hi,ds,0),new R(-ds,0,Hi),new R(ds,0,Hi),new R(0,Hi,-ds),new R(0,Hi,ds),new R(-1,1,-1),new R(1,1,-1),new R(-1,1,1),new R(1,1,1)];class Xc{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,i=100){Eo=this._renderer.getRenderTarget(),Ao=this._renderer.getActiveCubeFace(),To=this._renderer.getActiveMipmapLevel(),Ro=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,n,i,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=wh(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Sh(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Eo,Ao,To),this._renderer.xr.enabled=Ro,e.scissorTest=!1,Qr(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Rs||e.mapping===Cs?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Eo=this._renderer.getRenderTarget(),Ao=this._renderer.getActiveCubeFace(),To=this._renderer.getActiveMipmapLevel(),Ro=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:hn,minFilter:hn,generateMipmaps:!1,type:Cr,format:xn,colorSpace:Bt,depthBuffer:!1},i=Mh(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Mh(e,t,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=q0(r)),this._blurMaterial=j0(r,e,t)}return i}_compileMaterial(e){const t=new st(this._lodPlanes[0],e);this._renderer.compile(t,wo)}_sceneToCubeUV(e,t,n,i){const o=new Xt(90,1,t,n),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],h=this._renderer,d=h.autoClear,u=h.toneMapping;h.getClearColor(xh),h.toneMapping=Ti,h.autoClear=!1;const f=new yn({name:"PMREM.Background",side:Qt,depthWrite:!1,depthTest:!1}),g=new st(new $i,f);let b=!1;const m=e.background;m?m.isColor&&(f.color.copy(m),e.background=null,b=!0):(f.color.copy(xh),b=!0);for(let p=0;p<6;p++){const x=p%3;x===0?(o.up.set(0,c[p],0),o.lookAt(l[p],0,0)):x===1?(o.up.set(0,0,c[p]),o.lookAt(0,l[p],0)):(o.up.set(0,c[p],0),o.lookAt(0,0,l[p]));const v=this._cubeSize;Qr(i,x*v,p>2?v:0,v,v),h.setRenderTarget(i),b&&h.render(g,o),h.render(e,o)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=u,h.autoClear=d,e.background=m}_textureToCubeUV(e,t){const n=this._renderer,i=e.mapping===Rs||e.mapping===Cs;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=wh()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Sh());const r=i?this._cubemapMaterial:this._equirectMaterial,a=new st(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=e;const c=this._cubeSize;Qr(t,0,0,3*c,2*c),n.setRenderTarget(t),n.render(a,wo)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const i=this._lodPlanes.length;for(let r=1;r<i;r++){const a=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=yh[(i-r-1)%yh.length];this._blur(e,r-1,r,a,o)}t.autoClear=n}_blur(e,t,n,i,r){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,i,"latitudinal",r),this._halfBlur(a,e,n,n,i,"longitudinal",r)}_halfBlur(e,t,n,i,r,a,o){const c=this._renderer,l=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,d=new st(this._lodPlanes[i],l),u=l.uniforms,f=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*Vi-1),b=r/g,m=isFinite(r)?1+Math.floor(h*b):Vi;m>Vi&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Vi}`);const p=[];let x=0;for(let S=0;S<Vi;++S){const P=S/b,F=Math.exp(-P*P/2);p.push(F),S===0?x+=F:S<m&&(x+=2*F)}for(let S=0;S<p.length;S++)p[S]=p[S]/x;u.envMap.value=e.texture,u.samples.value=m,u.weights.value=p,u.latitudinal.value=a==="latitudinal",o&&(u.poleAxis.value=o);const{_lodMax:v}=this;u.dTheta.value=g,u.mipInt.value=v-n;const y=this._sizeLods[i],A=3*y*(i>v-xs?i-v+xs:0),T=4*(this._cubeSize-y);Qr(t,A,T,3*y,2*y),c.setRenderTarget(t),c.render(d,wo)}}function q0(s){const e=[],t=[],n=[];let i=s;const r=s-xs+1+vh.length;for(let a=0;a<r;a++){const o=Math.pow(2,i);t.push(o);let c=1/o;a>s-xs?c=vh[a-s+xs-1]:a===0&&(c=0),n.push(c);const l=1/(o-2),h=-l,d=1+l,u=[h,h,d,h,d,d,h,h,d,d,h,d],f=6,g=6,b=3,m=2,p=1,x=new Float32Array(b*g*f),v=new Float32Array(m*g*f),y=new Float32Array(p*g*f);for(let T=0;T<f;T++){const S=T%3*2/3-1,P=T>2?0:-1,F=[S,P,0,S+2/3,P,0,S+2/3,P+1,0,S,P,0,S+2/3,P+1,0,S,P+1,0];x.set(F,b*g*T),v.set(u,m*g*T);const _=[T,T,T,T,T,T];y.set(_,p*g*T)}const A=new Ct;A.setAttribute("position",new St(x,b)),A.setAttribute("uv",new St(v,m)),A.setAttribute("faceIndex",new St(y,p)),e.push(A),i>xs&&i--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function Mh(s,e,t){const n=new ji(s,e,t);return n.texture.mapping=Ha,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Qr(s,e,t,n,i){s.viewport.set(e,t,n,i),s.scissor.set(e,t,n,i)}function j0(s,e,t){const n=new Float32Array(Vi),i=new R(0,1,0);return new Ln({name:"SphericalGaussianBlur",defines:{n:Vi,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:gl(),fragmentShader:`

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
		`,blending:Ai,depthTest:!1,depthWrite:!1})}function Sh(){return new Ln({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:gl(),fragmentShader:`

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
		`,blending:Ai,depthTest:!1,depthWrite:!1})}function wh(){return new Ln({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:gl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ai,depthTest:!1,depthWrite:!1})}function gl(){return`

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
	`}function X0(s){let e=new WeakMap,t=null;function n(o){if(o&&o.isTexture){const c=o.mapping,l=c===bc||c===_c,h=c===Rs||c===Cs;if(l||h){let d=e.get(o);const u=d!==void 0?d.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==u)return t===null&&(t=new Xc(s)),d=l?t.fromEquirectangular(o,d):t.fromCubemap(o,d),d.texture.pmremVersion=o.pmremVersion,e.set(o,d),d.texture;if(d!==void 0)return d.texture;{const f=o.image;return l&&f&&f.height>0||h&&f&&i(f)?(t===null&&(t=new Xc(s)),d=l?t.fromEquirectangular(o):t.fromCubemap(o),d.texture.pmremVersion=o.pmremVersion,e.set(o,d),o.addEventListener("dispose",r),d.texture):null}}}return o}function i(o){let c=0;const l=6;for(let h=0;h<l;h++)o[h]!==void 0&&c++;return c===l}function r(o){const c=o.target;c.removeEventListener("dispose",r);const l=e.get(c);l!==void 0&&(e.delete(c),l.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:a}}function Y0(s){const e={};function t(n){if(e[n]!==void 0)return e[n];let i;switch(n){case"WEBGL_depth_texture":i=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=s.getExtension(n)}return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const i=t(n);return i===null&&Ta("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function K0(s,e,t,n){const i={},r=new WeakMap;function a(d){const u=d.target;u.index!==null&&e.remove(u.index);for(const g in u.attributes)e.remove(u.attributes[g]);for(const g in u.morphAttributes){const b=u.morphAttributes[g];for(let m=0,p=b.length;m<p;m++)e.remove(b[m])}u.removeEventListener("dispose",a),delete i[u.id];const f=r.get(u);f&&(e.remove(f),r.delete(u)),n.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,t.memory.geometries--}function o(d,u){return i[u.id]===!0||(u.addEventListener("dispose",a),i[u.id]=!0,t.memory.geometries++),u}function c(d){const u=d.attributes;for(const g in u)e.update(u[g],s.ARRAY_BUFFER);const f=d.morphAttributes;for(const g in f){const b=f[g];for(let m=0,p=b.length;m<p;m++)e.update(b[m],s.ARRAY_BUFFER)}}function l(d){const u=[],f=d.index,g=d.attributes.position;let b=0;if(f!==null){const x=f.array;b=f.version;for(let v=0,y=x.length;v<y;v+=3){const A=x[v+0],T=x[v+1],S=x[v+2];u.push(A,T,T,S,S,A)}}else if(g!==void 0){const x=g.array;b=g.version;for(let v=0,y=x.length/3-1;v<y;v+=3){const A=v+0,T=v+1,S=v+2;u.push(A,T,T,S,S,A)}}else return;const m=new(mu(u)?yu:xu)(u,1);m.version=b;const p=r.get(d);p&&e.remove(p),r.set(d,m)}function h(d){const u=r.get(d);if(u){const f=d.index;f!==null&&u.version<f.version&&l(d)}else l(d);return r.get(d)}return{get:o,update:c,getWireframeAttribute:h}}function $0(s,e,t){let n;function i(u){n=u}let r,a;function o(u){r=u.type,a=u.bytesPerElement}function c(u,f){s.drawElements(n,f,r,u*a),t.update(f,n,1)}function l(u,f,g){g!==0&&(s.drawElementsInstanced(n,f,r,u*a,g),t.update(f,n,g))}function h(u,f,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,r,u,0,g);let m=0;for(let p=0;p<g;p++)m+=f[p];t.update(m,n,1)}function d(u,f,g,b){if(g===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<u.length;p++)l(u[p]/a,f[p],b[p]);else{m.multiDrawElementsInstancedWEBGL(n,f,0,r,u,0,b,0,g);let p=0;for(let x=0;x<g;x++)p+=f[x];for(let x=0;x<b.length;x++)t.update(p,n,b[x])}}this.setMode=i,this.setIndex=o,this.render=c,this.renderInstances=l,this.renderMultiDraw=h,this.renderMultiDrawInstances=d}function Q0(s){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(t.calls++,a){case s.TRIANGLES:t.triangles+=o*(r/3);break;case s.LINES:t.lines+=o*(r/2);break;case s.LINE_STRIP:t.lines+=o*(r-1);break;case s.LINE_LOOP:t.lines+=o*r;break;case s.POINTS:t.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function i(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function J0(s,e,t){const n=new WeakMap,i=new et;function r(a,o,c){const l=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,d=h!==void 0?h.length:0;let u=n.get(o);if(u===void 0||u.count!==d){let F=function(){S.dispose(),n.delete(o),o.removeEventListener("dispose",F)};u!==void 0&&u.texture.dispose();const f=o.morphAttributes.position!==void 0,g=o.morphAttributes.normal!==void 0,b=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],p=o.morphAttributes.normal||[],x=o.morphAttributes.color||[];let v=0;f===!0&&(v=1),g===!0&&(v=2),b===!0&&(v=3);let y=o.attributes.position.count*v,A=1;y>e.maxTextureSize&&(A=Math.ceil(y/e.maxTextureSize),y=e.maxTextureSize);const T=new Float32Array(y*A*4*d),S=new bu(T,y,A,d);S.type=Rn,S.needsUpdate=!0;const P=v*4;for(let _=0;_<d;_++){const w=m[_],U=p[_],O=x[_],B=y*A*4*_;for(let K=0;K<w.count;K++){const G=K*P;f===!0&&(i.fromBufferAttribute(w,K),T[B+G+0]=i.x,T[B+G+1]=i.y,T[B+G+2]=i.z,T[B+G+3]=0),g===!0&&(i.fromBufferAttribute(U,K),T[B+G+4]=i.x,T[B+G+5]=i.y,T[B+G+6]=i.z,T[B+G+7]=0),b===!0&&(i.fromBufferAttribute(O,K),T[B+G+8]=i.x,T[B+G+9]=i.y,T[B+G+10]=i.z,T[B+G+11]=O.itemSize===4?i.w:1)}}u={count:d,texture:S,size:new Se(y,A)},n.set(o,u),o.addEventListener("dispose",F)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)c.getUniforms().setValue(s,"morphTexture",a.morphTexture,t);else{let f=0;for(let b=0;b<l.length;b++)f+=l[b];const g=o.morphTargetsRelative?1:1-f;c.getUniforms().setValue(s,"morphTargetBaseInfluence",g),c.getUniforms().setValue(s,"morphTargetInfluences",l)}c.getUniforms().setValue(s,"morphTargetsTexture",u.texture,t),c.getUniforms().setValue(s,"morphTargetsTextureSize",u.size)}return{update:r}}function Z0(s,e,t,n){let i=new WeakMap;function r(c){const l=n.render.frame,h=c.geometry,d=e.get(c,h);if(i.get(d)!==l&&(e.update(d),i.set(d,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",o)===!1&&c.addEventListener("dispose",o),i.get(c)!==l&&(t.update(c.instanceMatrix,s.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,s.ARRAY_BUFFER),i.set(c,l))),c.isSkinnedMesh){const u=c.skeleton;i.get(u)!==l&&(u.update(),i.set(u,l))}return d}function a(){i=new WeakMap}function o(c){const l=c.target;l.removeEventListener("dispose",o),t.remove(l.instanceMatrix),l.instanceColor!==null&&t.remove(l.instanceColor)}return{update:r,dispose:a}}class Au extends Rt{constructor(e,t,n,i,r,a,o,c,l,h=Ms){if(h!==Ms&&h!==Is)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===Ms&&(n=qi),n===void 0&&h===Is&&(n=Ls),super(null,i,r,a,o,c,h,n,l),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=o!==void 0?o:Kt,this.minFilter=c!==void 0?c:Kt,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const Tu=new Rt,Eh=new Au(1,1),Ru=new bu,Cu=new Bp,Pu=new wu,Ah=[],Th=[],Rh=new Float32Array(16),Ch=new Float32Array(9),Ph=new Float32Array(4);function zs(s,e,t){const n=s[0];if(n<=0||n>0)return s;const i=e*t;let r=Ah[i];if(r===void 0&&(r=new Float32Array(i),Ah[i]=r),e!==0){n.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,s[a].toArray(r,o)}return r}function Pt(s,e){if(s.length!==e.length)return!1;for(let t=0,n=s.length;t<n;t++)if(s[t]!==e[t])return!1;return!0}function Lt(s,e){for(let t=0,n=e.length;t<n;t++)s[t]=e[t]}function Wa(s,e){let t=Th[e];t===void 0&&(t=new Int32Array(e),Th[e]=t);for(let n=0;n!==e;++n)t[n]=s.allocateTextureUnit();return t}function eb(s,e){const t=this.cache;t[0]!==e&&(s.uniform1f(this.addr,e),t[0]=e)}function tb(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Pt(t,e))return;s.uniform2fv(this.addr,e),Lt(t,e)}}function nb(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Pt(t,e))return;s.uniform3fv(this.addr,e),Lt(t,e)}}function ib(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Pt(t,e))return;s.uniform4fv(this.addr,e),Lt(t,e)}}function sb(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(Pt(t,e))return;s.uniformMatrix2fv(this.addr,!1,e),Lt(t,e)}else{if(Pt(t,n))return;Ph.set(n),s.uniformMatrix2fv(this.addr,!1,Ph),Lt(t,n)}}function rb(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(Pt(t,e))return;s.uniformMatrix3fv(this.addr,!1,e),Lt(t,e)}else{if(Pt(t,n))return;Ch.set(n),s.uniformMatrix3fv(this.addr,!1,Ch),Lt(t,n)}}function ab(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(Pt(t,e))return;s.uniformMatrix4fv(this.addr,!1,e),Lt(t,e)}else{if(Pt(t,n))return;Rh.set(n),s.uniformMatrix4fv(this.addr,!1,Rh),Lt(t,n)}}function ob(s,e){const t=this.cache;t[0]!==e&&(s.uniform1i(this.addr,e),t[0]=e)}function cb(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Pt(t,e))return;s.uniform2iv(this.addr,e),Lt(t,e)}}function lb(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Pt(t,e))return;s.uniform3iv(this.addr,e),Lt(t,e)}}function hb(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Pt(t,e))return;s.uniform4iv(this.addr,e),Lt(t,e)}}function db(s,e){const t=this.cache;t[0]!==e&&(s.uniform1ui(this.addr,e),t[0]=e)}function ub(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Pt(t,e))return;s.uniform2uiv(this.addr,e),Lt(t,e)}}function fb(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Pt(t,e))return;s.uniform3uiv(this.addr,e),Lt(t,e)}}function pb(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Pt(t,e))return;s.uniform4uiv(this.addr,e),Lt(t,e)}}function mb(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i);let r;this.type===s.SAMPLER_2D_SHADOW?(Eh.compareFunction=pu,r=Eh):r=Tu,t.setTexture2D(e||r,i)}function gb(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||Cu,i)}function bb(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||Pu,i)}function _b(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||Ru,i)}function vb(s){switch(s){case 5126:return eb;case 35664:return tb;case 35665:return nb;case 35666:return ib;case 35674:return sb;case 35675:return rb;case 35676:return ab;case 5124:case 35670:return ob;case 35667:case 35671:return cb;case 35668:case 35672:return lb;case 35669:case 35673:return hb;case 5125:return db;case 36294:return ub;case 36295:return fb;case 36296:return pb;case 35678:case 36198:case 36298:case 36306:case 35682:return mb;case 35679:case 36299:case 36307:return gb;case 35680:case 36300:case 36308:case 36293:return bb;case 36289:case 36303:case 36311:case 36292:return _b}}function xb(s,e){s.uniform1fv(this.addr,e)}function yb(s,e){const t=zs(e,this.size,2);s.uniform2fv(this.addr,t)}function Mb(s,e){const t=zs(e,this.size,3);s.uniform3fv(this.addr,t)}function Sb(s,e){const t=zs(e,this.size,4);s.uniform4fv(this.addr,t)}function wb(s,e){const t=zs(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,t)}function Eb(s,e){const t=zs(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,t)}function Ab(s,e){const t=zs(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,t)}function Tb(s,e){s.uniform1iv(this.addr,e)}function Rb(s,e){s.uniform2iv(this.addr,e)}function Cb(s,e){s.uniform3iv(this.addr,e)}function Pb(s,e){s.uniform4iv(this.addr,e)}function Lb(s,e){s.uniform1uiv(this.addr,e)}function Ib(s,e){s.uniform2uiv(this.addr,e)}function Db(s,e){s.uniform3uiv(this.addr,e)}function Nb(s,e){s.uniform4uiv(this.addr,e)}function Ub(s,e,t){const n=this.cache,i=e.length,r=Wa(t,i);Pt(n,r)||(s.uniform1iv(this.addr,r),Lt(n,r));for(let a=0;a!==i;++a)t.setTexture2D(e[a]||Tu,r[a])}function Fb(s,e,t){const n=this.cache,i=e.length,r=Wa(t,i);Pt(n,r)||(s.uniform1iv(this.addr,r),Lt(n,r));for(let a=0;a!==i;++a)t.setTexture3D(e[a]||Cu,r[a])}function kb(s,e,t){const n=this.cache,i=e.length,r=Wa(t,i);Pt(n,r)||(s.uniform1iv(this.addr,r),Lt(n,r));for(let a=0;a!==i;++a)t.setTextureCube(e[a]||Pu,r[a])}function Ob(s,e,t){const n=this.cache,i=e.length,r=Wa(t,i);Pt(n,r)||(s.uniform1iv(this.addr,r),Lt(n,r));for(let a=0;a!==i;++a)t.setTexture2DArray(e[a]||Ru,r[a])}function Bb(s){switch(s){case 5126:return xb;case 35664:return yb;case 35665:return Mb;case 35666:return Sb;case 35674:return wb;case 35675:return Eb;case 35676:return Ab;case 5124:case 35670:return Tb;case 35667:case 35671:return Rb;case 35668:case 35672:return Cb;case 35669:case 35673:return Pb;case 5125:return Lb;case 36294:return Ib;case 36295:return Db;case 36296:return Nb;case 35678:case 36198:case 36298:case 36306:case 35682:return Ub;case 35679:case 36299:case 36307:return Fb;case 35680:case 36300:case 36308:case 36293:return kb;case 36289:case 36303:case 36311:case 36292:return Ob}}class zb{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=vb(t.type)}}class Hb{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Bb(t.type)}}class Gb{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const i=this.seq;for(let r=0,a=i.length;r!==a;++r){const o=i[r];o.setValue(e,t[o.id],n)}}}const Co=/(\w+)(\])?(\[|\.)?/g;function Lh(s,e){s.seq.push(e),s.map[e.id]=e}function Vb(s,e,t){const n=s.name,i=n.length;for(Co.lastIndex=0;;){const r=Co.exec(n),a=Co.lastIndex;let o=r[1];const c=r[2]==="]",l=r[3];if(c&&(o=o|0),l===void 0||l==="["&&a+2===i){Lh(t,l===void 0?new zb(o,s,e):new Hb(o,s,e));break}else{let d=t.map[o];d===void 0&&(d=new Gb(o),Lh(t,d)),t=d}}}class Ra{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){const r=e.getActiveUniform(t,i),a=e.getUniformLocation(t,r.name);Vb(r,a,this)}}setValue(e,t,n,i){const r=this.map[t];r!==void 0&&r.setValue(e,n,i)}setOptional(e,t,n){const i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let r=0,a=t.length;r!==a;++r){const o=t[r],c=n[o.id];c.needsUpdate!==!1&&o.setValue(e,c.value,i)}}static seqWithValue(e,t){const n=[];for(let i=0,r=e.length;i!==r;++i){const a=e[i];a.id in t&&n.push(a)}return n}}function Ih(s,e,t){const n=s.createShader(e);return s.shaderSource(n,t),s.compileShader(n),n}const Wb=37297;let qb=0;function jb(s,e){const t=s.split(`
`),n=[],i=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=i;a<r;a++){const o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}function Xb(s){const e=$e.getPrimaries($e.workingColorSpace),t=$e.getPrimaries(s);let n;switch(e===t?n="":e===Na&&t===Da?n="LinearDisplayP3ToLinearSRGB":e===Da&&t===Na&&(n="LinearSRGBToLinearDisplayP3"),s){case Bt:case Ga:return[n,"LinearTransferOETF"];case kt:case ul:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",s),[n,"LinearTransferOETF"]}}function Dh(s,e,t){const n=s.getShaderParameter(e,s.COMPILE_STATUS),i=s.getShaderInfoLog(e).trim();if(n&&i==="")return"";const r=/ERROR: 0:(\d+)/.exec(i);if(r){const a=parseInt(r[1]);return t.toUpperCase()+`

`+i+`

`+jb(s.getShaderSource(e),a)}else return i}function Yb(s,e){const t=Xb(e);return`vec4 ${s}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function Kb(s,e){let t;switch(e){case Yf:t="Linear";break;case Kf:t="Reinhard";break;case $f:t="Cineon";break;case Qf:t="ACESFilmic";break;case Zf:t="AgX";break;case ep:t="Neutral";break;case Jf:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+s+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Jr=new R;function $b(){$e.getLuminanceCoefficients(Jr);const s=Jr.x.toFixed(4),e=Jr.y.toFixed(4),t=Jr.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Qb(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(mr).join(`
`)}function Jb(s){const e=[];for(const t in s){const n=s[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function Zb(s,e){const t={},n=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const r=s.getActiveAttrib(e,i),a=r.name;let o=1;r.type===s.FLOAT_MAT2&&(o=2),r.type===s.FLOAT_MAT3&&(o=3),r.type===s.FLOAT_MAT4&&(o=4),t[a]={type:r.type,location:s.getAttribLocation(e,a),locationSize:o}}return t}function mr(s){return s!==""}function Nh(s,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Uh(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const e_=/^[ \t]*#include +<([\w\d./]+)>/gm;function Yc(s){return s.replace(e_,n_)}const t_=new Map;function n_(s,e){let t=ke[e];if(t===void 0){const n=t_.get(e);if(n!==void 0)t=ke[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return Yc(t)}const i_=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Fh(s){return s.replace(i_,s_)}function s_(s,e,t,n){let i="";for(let r=parseInt(e);r<parseInt(t);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function kh(s){let e=`precision ${s.precision} float;
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
#define LOW_PRECISION`),e}function r_(s){let e="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===Zd?e="SHADOWMAP_TYPE_PCF":s.shadowMapType===Tf?e="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===ii&&(e="SHADOWMAP_TYPE_VSM"),e}function a_(s){let e="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case Rs:case Cs:e="ENVMAP_TYPE_CUBE";break;case Ha:e="ENVMAP_TYPE_CUBE_UV";break}return e}function o_(s){let e="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case Cs:e="ENVMAP_MODE_REFRACTION";break}return e}function c_(s){let e="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case eu:e="ENVMAP_BLENDING_MULTIPLY";break;case jf:e="ENVMAP_BLENDING_MIX";break;case Xf:e="ENVMAP_BLENDING_ADD";break}return e}function l_(s){const e=s.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function h_(s,e,t,n){const i=s.getContext(),r=t.defines;let a=t.vertexShader,o=t.fragmentShader;const c=r_(t),l=a_(t),h=o_(t),d=c_(t),u=l_(t),f=Qb(t),g=Jb(r),b=i.createProgram();let m,p,x=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(mr).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(mr).join(`
`),p.length>0&&(p+=`
`)):(m=[kh(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(mr).join(`
`),p=[kh(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+h:"",t.envMap?"#define "+d:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Ti?"#define TONE_MAPPING":"",t.toneMapping!==Ti?ke.tonemapping_pars_fragment:"",t.toneMapping!==Ti?Kb("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",ke.colorspace_pars_fragment,Yb("linearToOutputTexel",t.outputColorSpace),$b(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(mr).join(`
`)),a=Yc(a),a=Nh(a,t),a=Uh(a,t),o=Yc(o),o=Nh(o,t),o=Uh(o,t),a=Fh(a),o=Fh(o),t.isRawShaderMaterial!==!0&&(x=`#version 300 es
`,m=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",t.glslVersion===eh?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===eh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const v=x+m+a,y=x+p+o,A=Ih(i,i.VERTEX_SHADER,v),T=Ih(i,i.FRAGMENT_SHADER,y);i.attachShader(b,A),i.attachShader(b,T),t.index0AttributeName!==void 0?i.bindAttribLocation(b,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(b,0,"position"),i.linkProgram(b);function S(w){if(s.debug.checkShaderErrors){const U=i.getProgramInfoLog(b).trim(),O=i.getShaderInfoLog(A).trim(),B=i.getShaderInfoLog(T).trim();let K=!0,G=!0;if(i.getProgramParameter(b,i.LINK_STATUS)===!1)if(K=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(i,b,A,T);else{const Z=Dh(i,A,"vertex"),W=Dh(i,T,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(b,i.VALIDATE_STATUS)+`

Material Name: `+w.name+`
Material Type: `+w.type+`

Program Info Log: `+U+`
`+Z+`
`+W)}else U!==""?console.warn("THREE.WebGLProgram: Program Info Log:",U):(O===""||B==="")&&(G=!1);G&&(w.diagnostics={runnable:K,programLog:U,vertexShader:{log:O,prefix:m},fragmentShader:{log:B,prefix:p}})}i.deleteShader(A),i.deleteShader(T),P=new Ra(i,b),F=Zb(i,b)}let P;this.getUniforms=function(){return P===void 0&&S(this),P};let F;this.getAttributes=function(){return F===void 0&&S(this),F};let _=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return _===!1&&(_=i.getProgramParameter(b,Wb)),_},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(b),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=qb++,this.cacheKey=e,this.usedTimes=1,this.program=b,this.vertexShader=A,this.fragmentShader=T,this}let d_=0;class u_{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),r=this._getShaderStage(n),a=this._getShaderCacheForMaterial(e);return a.has(i)===!1&&(a.add(i),i.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new f_(e),t.set(e,n)),n}}class f_{constructor(e){this.id=d_++,this.code=e,this.usedTimes=0}}function p_(s,e,t,n,i,r,a){const o=new _u,c=new u_,l=new Set,h=[],d=i.logarithmicDepthBuffer,u=i.reverseDepthBuffer,f=i.vertexTextures;let g=i.precision;const b={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function m(_){return l.add(_),_===0?"uv":`uv${_}`}function p(_,w,U,O,B){const K=O.fog,G=B.geometry,Z=_.isMeshStandardMaterial?O.environment:null,W=(_.isMeshStandardMaterial?t:e).get(_.envMap||Z),ce=W&&W.mapping===Ha?W.image.height:null,le=b[_.type];_.precision!==null&&(g=i.getMaxPrecision(_.precision),g!==_.precision&&console.warn("THREE.WebGLProgram.getParameters:",_.precision,"not supported, using",g,"instead."));const me=G.morphAttributes.position||G.morphAttributes.normal||G.morphAttributes.color,Ge=me!==void 0?me.length:0;let Ae=0;G.morphAttributes.position!==void 0&&(Ae=1),G.morphAttributes.normal!==void 0&&(Ae=2),G.morphAttributes.color!==void 0&&(Ae=3);let j,J,ie,re;if(le){const en=Un[le];j=en.vertexShader,J=en.fragmentShader}else j=_.vertexShader,J=_.fragmentShader,c.update(_),ie=c.getVertexShaderID(_),re=c.getFragmentShaderID(_);const Ue=s.getRenderTarget(),Te=B.isInstancedMesh===!0,qe=B.isBatchedMesh===!0,lt=!!_.map,je=!!_.matcap,L=!!W,sn=!!_.aoMap,Ve=!!_.lightMap,Ye=!!_.bumpMap,Pe=!!_.normalMap,dt=!!_.displacementMap,Ne=!!_.emissiveMap,C=!!_.metalnessMap,M=!!_.roughnessMap,k=_.anisotropy>0,Y=_.clearcoat>0,Q=_.dispersion>0,X=_.iridescence>0,xe=_.sheen>0,se=_.transmission>0,ue=k&&!!_.anisotropyMap,Ke=Y&&!!_.clearcoatMap,ee=Y&&!!_.clearcoatNormalMap,fe=Y&&!!_.clearcoatRoughnessMap,Le=X&&!!_.iridescenceMap,Ie=X&&!!_.iridescenceThicknessMap,pe=xe&&!!_.sheenColorMap,We=xe&&!!_.sheenRoughnessMap,Fe=!!_.specularMap,ht=!!_.specularColorMap,I=!!_.specularIntensityMap,he=se&&!!_.transmissionMap,q=se&&!!_.thicknessMap,$=!!_.gradientMap,ae=!!_.alphaMap,de=_.alphaTest>0,Xe=!!_.alphaHash,wt=!!_.extensions;let Zt=Ti;_.toneMapped&&(Ue===null||Ue.isXRRenderTarget===!0)&&(Zt=s.toneMapping);const Je={shaderID:le,shaderType:_.type,shaderName:_.name,vertexShader:j,fragmentShader:J,defines:_.defines,customVertexShaderID:ie,customFragmentShaderID:re,isRawShaderMaterial:_.isRawShaderMaterial===!0,glslVersion:_.glslVersion,precision:g,batching:qe,batchingColor:qe&&B._colorsTexture!==null,instancing:Te,instancingColor:Te&&B.instanceColor!==null,instancingMorph:Te&&B.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:Ue===null?s.outputColorSpace:Ue.isXRRenderTarget===!0?Ue.texture.colorSpace:Bt,alphaToCoverage:!!_.alphaToCoverage,map:lt,matcap:je,envMap:L,envMapMode:L&&W.mapping,envMapCubeUVHeight:ce,aoMap:sn,lightMap:Ve,bumpMap:Ye,normalMap:Pe,displacementMap:f&&dt,emissiveMap:Ne,normalMapObjectSpace:Pe&&_.normalMapType===ap,normalMapTangentSpace:Pe&&_.normalMapType===fu,metalnessMap:C,roughnessMap:M,anisotropy:k,anisotropyMap:ue,clearcoat:Y,clearcoatMap:Ke,clearcoatNormalMap:ee,clearcoatRoughnessMap:fe,dispersion:Q,iridescence:X,iridescenceMap:Le,iridescenceThicknessMap:Ie,sheen:xe,sheenColorMap:pe,sheenRoughnessMap:We,specularMap:Fe,specularColorMap:ht,specularIntensityMap:I,transmission:se,transmissionMap:he,thicknessMap:q,gradientMap:$,opaque:_.transparent===!1&&_.blending===ys&&_.alphaToCoverage===!1,alphaMap:ae,alphaTest:de,alphaHash:Xe,combine:_.combine,mapUv:lt&&m(_.map.channel),aoMapUv:sn&&m(_.aoMap.channel),lightMapUv:Ve&&m(_.lightMap.channel),bumpMapUv:Ye&&m(_.bumpMap.channel),normalMapUv:Pe&&m(_.normalMap.channel),displacementMapUv:dt&&m(_.displacementMap.channel),emissiveMapUv:Ne&&m(_.emissiveMap.channel),metalnessMapUv:C&&m(_.metalnessMap.channel),roughnessMapUv:M&&m(_.roughnessMap.channel),anisotropyMapUv:ue&&m(_.anisotropyMap.channel),clearcoatMapUv:Ke&&m(_.clearcoatMap.channel),clearcoatNormalMapUv:ee&&m(_.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:fe&&m(_.clearcoatRoughnessMap.channel),iridescenceMapUv:Le&&m(_.iridescenceMap.channel),iridescenceThicknessMapUv:Ie&&m(_.iridescenceThicknessMap.channel),sheenColorMapUv:pe&&m(_.sheenColorMap.channel),sheenRoughnessMapUv:We&&m(_.sheenRoughnessMap.channel),specularMapUv:Fe&&m(_.specularMap.channel),specularColorMapUv:ht&&m(_.specularColorMap.channel),specularIntensityMapUv:I&&m(_.specularIntensityMap.channel),transmissionMapUv:he&&m(_.transmissionMap.channel),thicknessMapUv:q&&m(_.thicknessMap.channel),alphaMapUv:ae&&m(_.alphaMap.channel),vertexTangents:!!G.attributes.tangent&&(Pe||k),vertexColors:_.vertexColors,vertexAlphas:_.vertexColors===!0&&!!G.attributes.color&&G.attributes.color.itemSize===4,pointsUvs:B.isPoints===!0&&!!G.attributes.uv&&(lt||ae),fog:!!K,useFog:_.fog===!0,fogExp2:!!K&&K.isFogExp2,flatShading:_.flatShading===!0,sizeAttenuation:_.sizeAttenuation===!0,logarithmicDepthBuffer:d,reverseDepthBuffer:u,skinning:B.isSkinnedMesh===!0,morphTargets:G.morphAttributes.position!==void 0,morphNormals:G.morphAttributes.normal!==void 0,morphColors:G.morphAttributes.color!==void 0,morphTargetsCount:Ge,morphTextureStride:Ae,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numLightProbes:w.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:_.dithering,shadowMapEnabled:s.shadowMap.enabled&&U.length>0,shadowMapType:s.shadowMap.type,toneMapping:Zt,decodeVideoTexture:lt&&_.map.isVideoTexture===!0&&$e.getTransfer(_.map.colorSpace)===ft,premultipliedAlpha:_.premultipliedAlpha,doubleSided:_.side===vn,flipSided:_.side===Qt,useDepthPacking:_.depthPacking>=0,depthPacking:_.depthPacking||0,index0AttributeName:_.index0AttributeName,extensionClipCullDistance:wt&&_.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(wt&&_.extensions.multiDraw===!0||qe)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:_.customProgramCacheKey()};return Je.vertexUv1s=l.has(1),Je.vertexUv2s=l.has(2),Je.vertexUv3s=l.has(3),l.clear(),Je}function x(_){const w=[];if(_.shaderID?w.push(_.shaderID):(w.push(_.customVertexShaderID),w.push(_.customFragmentShaderID)),_.defines!==void 0)for(const U in _.defines)w.push(U),w.push(_.defines[U]);return _.isRawShaderMaterial===!1&&(v(w,_),y(w,_),w.push(s.outputColorSpace)),w.push(_.customProgramCacheKey),w.join()}function v(_,w){_.push(w.precision),_.push(w.outputColorSpace),_.push(w.envMapMode),_.push(w.envMapCubeUVHeight),_.push(w.mapUv),_.push(w.alphaMapUv),_.push(w.lightMapUv),_.push(w.aoMapUv),_.push(w.bumpMapUv),_.push(w.normalMapUv),_.push(w.displacementMapUv),_.push(w.emissiveMapUv),_.push(w.metalnessMapUv),_.push(w.roughnessMapUv),_.push(w.anisotropyMapUv),_.push(w.clearcoatMapUv),_.push(w.clearcoatNormalMapUv),_.push(w.clearcoatRoughnessMapUv),_.push(w.iridescenceMapUv),_.push(w.iridescenceThicknessMapUv),_.push(w.sheenColorMapUv),_.push(w.sheenRoughnessMapUv),_.push(w.specularMapUv),_.push(w.specularColorMapUv),_.push(w.specularIntensityMapUv),_.push(w.transmissionMapUv),_.push(w.thicknessMapUv),_.push(w.combine),_.push(w.fogExp2),_.push(w.sizeAttenuation),_.push(w.morphTargetsCount),_.push(w.morphAttributeCount),_.push(w.numDirLights),_.push(w.numPointLights),_.push(w.numSpotLights),_.push(w.numSpotLightMaps),_.push(w.numHemiLights),_.push(w.numRectAreaLights),_.push(w.numDirLightShadows),_.push(w.numPointLightShadows),_.push(w.numSpotLightShadows),_.push(w.numSpotLightShadowsWithMaps),_.push(w.numLightProbes),_.push(w.shadowMapType),_.push(w.toneMapping),_.push(w.numClippingPlanes),_.push(w.numClipIntersection),_.push(w.depthPacking)}function y(_,w){o.disableAll(),w.supportsVertexTextures&&o.enable(0),w.instancing&&o.enable(1),w.instancingColor&&o.enable(2),w.instancingMorph&&o.enable(3),w.matcap&&o.enable(4),w.envMap&&o.enable(5),w.normalMapObjectSpace&&o.enable(6),w.normalMapTangentSpace&&o.enable(7),w.clearcoat&&o.enable(8),w.iridescence&&o.enable(9),w.alphaTest&&o.enable(10),w.vertexColors&&o.enable(11),w.vertexAlphas&&o.enable(12),w.vertexUv1s&&o.enable(13),w.vertexUv2s&&o.enable(14),w.vertexUv3s&&o.enable(15),w.vertexTangents&&o.enable(16),w.anisotropy&&o.enable(17),w.alphaHash&&o.enable(18),w.batching&&o.enable(19),w.dispersion&&o.enable(20),w.batchingColor&&o.enable(21),_.push(o.mask),o.disableAll(),w.fog&&o.enable(0),w.useFog&&o.enable(1),w.flatShading&&o.enable(2),w.logarithmicDepthBuffer&&o.enable(3),w.reverseDepthBuffer&&o.enable(4),w.skinning&&o.enable(5),w.morphTargets&&o.enable(6),w.morphNormals&&o.enable(7),w.morphColors&&o.enable(8),w.premultipliedAlpha&&o.enable(9),w.shadowMapEnabled&&o.enable(10),w.doubleSided&&o.enable(11),w.flipSided&&o.enable(12),w.useDepthPacking&&o.enable(13),w.dithering&&o.enable(14),w.transmission&&o.enable(15),w.sheen&&o.enable(16),w.opaque&&o.enable(17),w.pointsUvs&&o.enable(18),w.decodeVideoTexture&&o.enable(19),w.alphaToCoverage&&o.enable(20),_.push(o.mask)}function A(_){const w=b[_.type];let U;if(w){const O=Un[w];U=Qp.clone(O.uniforms)}else U=_.uniforms;return U}function T(_,w){let U;for(let O=0,B=h.length;O<B;O++){const K=h[O];if(K.cacheKey===w){U=K,++U.usedTimes;break}}return U===void 0&&(U=new h_(s,w,_,r),h.push(U)),U}function S(_){if(--_.usedTimes===0){const w=h.indexOf(_);h[w]=h[h.length-1],h.pop(),_.destroy()}}function P(_){c.remove(_)}function F(){c.dispose()}return{getParameters:p,getProgramCacheKey:x,getUniforms:A,acquireProgram:T,releaseProgram:S,releaseShaderCache:P,programs:h,dispose:F}}function m_(){let s=new WeakMap;function e(a){return s.has(a)}function t(a){let o=s.get(a);return o===void 0&&(o={},s.set(a,o)),o}function n(a){s.delete(a)}function i(a,o,c){s.get(a)[o]=c}function r(){s=new WeakMap}return{has:e,get:t,remove:n,update:i,dispose:r}}function g_(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.z!==e.z?s.z-e.z:s.id-e.id}function Oh(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function Bh(){const s=[];let e=0;const t=[],n=[],i=[];function r(){e=0,t.length=0,n.length=0,i.length=0}function a(d,u,f,g,b,m){let p=s[e];return p===void 0?(p={id:d.id,object:d,geometry:u,material:f,groupOrder:g,renderOrder:d.renderOrder,z:b,group:m},s[e]=p):(p.id=d.id,p.object=d,p.geometry=u,p.material=f,p.groupOrder=g,p.renderOrder=d.renderOrder,p.z=b,p.group=m),e++,p}function o(d,u,f,g,b,m){const p=a(d,u,f,g,b,m);f.transmission>0?n.push(p):f.transparent===!0?i.push(p):t.push(p)}function c(d,u,f,g,b,m){const p=a(d,u,f,g,b,m);f.transmission>0?n.unshift(p):f.transparent===!0?i.unshift(p):t.unshift(p)}function l(d,u){t.length>1&&t.sort(d||g_),n.length>1&&n.sort(u||Oh),i.length>1&&i.sort(u||Oh)}function h(){for(let d=e,u=s.length;d<u;d++){const f=s[d];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:t,transmissive:n,transparent:i,init:r,push:o,unshift:c,finish:h,sort:l}}function b_(){let s=new WeakMap;function e(n,i){const r=s.get(n);let a;return r===void 0?(a=new Bh,s.set(n,[a])):i>=r.length?(a=new Bh,r.push(a)):a=r[i],a}function t(){s=new WeakMap}return{get:e,dispose:t}}function __(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new R,color:new we};break;case"SpotLight":t={position:new R,direction:new R,color:new we,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new R,color:new we,distance:0,decay:0};break;case"HemisphereLight":t={direction:new R,skyColor:new we,groundColor:new we};break;case"RectAreaLight":t={color:new we,position:new R,halfWidth:new R,halfHeight:new R};break}return s[e.id]=t,t}}}function v_(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Se};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Se};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Se,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=t,t}}}let x_=0;function y_(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function M_(s){const e=new __,t=v_(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new R);const i=new R,r=new ve,a=new ve;function o(l){let h=0,d=0,u=0;for(let F=0;F<9;F++)n.probe[F].set(0,0,0);let f=0,g=0,b=0,m=0,p=0,x=0,v=0,y=0,A=0,T=0,S=0;l.sort(y_);for(let F=0,_=l.length;F<_;F++){const w=l[F],U=w.color,O=w.intensity,B=w.distance,K=w.shadow&&w.shadow.map?w.shadow.map.texture:null;if(w.isAmbientLight)h+=U.r*O,d+=U.g*O,u+=U.b*O;else if(w.isLightProbe){for(let G=0;G<9;G++)n.probe[G].addScaledVector(w.sh.coefficients[G],O);S++}else if(w.isDirectionalLight){const G=e.get(w);if(G.color.copy(w.color).multiplyScalar(w.intensity),w.castShadow){const Z=w.shadow,W=t.get(w);W.shadowIntensity=Z.intensity,W.shadowBias=Z.bias,W.shadowNormalBias=Z.normalBias,W.shadowRadius=Z.radius,W.shadowMapSize=Z.mapSize,n.directionalShadow[f]=W,n.directionalShadowMap[f]=K,n.directionalShadowMatrix[f]=w.shadow.matrix,x++}n.directional[f]=G,f++}else if(w.isSpotLight){const G=e.get(w);G.position.setFromMatrixPosition(w.matrixWorld),G.color.copy(U).multiplyScalar(O),G.distance=B,G.coneCos=Math.cos(w.angle),G.penumbraCos=Math.cos(w.angle*(1-w.penumbra)),G.decay=w.decay,n.spot[b]=G;const Z=w.shadow;if(w.map&&(n.spotLightMap[A]=w.map,A++,Z.updateMatrices(w),w.castShadow&&T++),n.spotLightMatrix[b]=Z.matrix,w.castShadow){const W=t.get(w);W.shadowIntensity=Z.intensity,W.shadowBias=Z.bias,W.shadowNormalBias=Z.normalBias,W.shadowRadius=Z.radius,W.shadowMapSize=Z.mapSize,n.spotShadow[b]=W,n.spotShadowMap[b]=K,y++}b++}else if(w.isRectAreaLight){const G=e.get(w);G.color.copy(U).multiplyScalar(O),G.halfWidth.set(w.width*.5,0,0),G.halfHeight.set(0,w.height*.5,0),n.rectArea[m]=G,m++}else if(w.isPointLight){const G=e.get(w);if(G.color.copy(w.color).multiplyScalar(w.intensity),G.distance=w.distance,G.decay=w.decay,w.castShadow){const Z=w.shadow,W=t.get(w);W.shadowIntensity=Z.intensity,W.shadowBias=Z.bias,W.shadowNormalBias=Z.normalBias,W.shadowRadius=Z.radius,W.shadowMapSize=Z.mapSize,W.shadowCameraNear=Z.camera.near,W.shadowCameraFar=Z.camera.far,n.pointShadow[g]=W,n.pointShadowMap[g]=K,n.pointShadowMatrix[g]=w.shadow.matrix,v++}n.point[g]=G,g++}else if(w.isHemisphereLight){const G=e.get(w);G.skyColor.copy(w.color).multiplyScalar(O),G.groundColor.copy(w.groundColor).multiplyScalar(O),n.hemi[p]=G,p++}}m>0&&(s.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=ne.LTC_FLOAT_1,n.rectAreaLTC2=ne.LTC_FLOAT_2):(n.rectAreaLTC1=ne.LTC_HALF_1,n.rectAreaLTC2=ne.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=d,n.ambient[2]=u;const P=n.hash;(P.directionalLength!==f||P.pointLength!==g||P.spotLength!==b||P.rectAreaLength!==m||P.hemiLength!==p||P.numDirectionalShadows!==x||P.numPointShadows!==v||P.numSpotShadows!==y||P.numSpotMaps!==A||P.numLightProbes!==S)&&(n.directional.length=f,n.spot.length=b,n.rectArea.length=m,n.point.length=g,n.hemi.length=p,n.directionalShadow.length=x,n.directionalShadowMap.length=x,n.pointShadow.length=v,n.pointShadowMap.length=v,n.spotShadow.length=y,n.spotShadowMap.length=y,n.directionalShadowMatrix.length=x,n.pointShadowMatrix.length=v,n.spotLightMatrix.length=y+A-T,n.spotLightMap.length=A,n.numSpotLightShadowsWithMaps=T,n.numLightProbes=S,P.directionalLength=f,P.pointLength=g,P.spotLength=b,P.rectAreaLength=m,P.hemiLength=p,P.numDirectionalShadows=x,P.numPointShadows=v,P.numSpotShadows=y,P.numSpotMaps=A,P.numLightProbes=S,n.version=x_++)}function c(l,h){let d=0,u=0,f=0,g=0,b=0;const m=h.matrixWorldInverse;for(let p=0,x=l.length;p<x;p++){const v=l[p];if(v.isDirectionalLight){const y=n.directional[d];y.direction.setFromMatrixPosition(v.matrixWorld),i.setFromMatrixPosition(v.target.matrixWorld),y.direction.sub(i),y.direction.transformDirection(m),d++}else if(v.isSpotLight){const y=n.spot[f];y.position.setFromMatrixPosition(v.matrixWorld),y.position.applyMatrix4(m),y.direction.setFromMatrixPosition(v.matrixWorld),i.setFromMatrixPosition(v.target.matrixWorld),y.direction.sub(i),y.direction.transformDirection(m),f++}else if(v.isRectAreaLight){const y=n.rectArea[g];y.position.setFromMatrixPosition(v.matrixWorld),y.position.applyMatrix4(m),a.identity(),r.copy(v.matrixWorld),r.premultiply(m),a.extractRotation(r),y.halfWidth.set(v.width*.5,0,0),y.halfHeight.set(0,v.height*.5,0),y.halfWidth.applyMatrix4(a),y.halfHeight.applyMatrix4(a),g++}else if(v.isPointLight){const y=n.point[u];y.position.setFromMatrixPosition(v.matrixWorld),y.position.applyMatrix4(m),u++}else if(v.isHemisphereLight){const y=n.hemi[b];y.direction.setFromMatrixPosition(v.matrixWorld),y.direction.transformDirection(m),b++}}}return{setup:o,setupView:c,state:n}}function zh(s){const e=new M_(s),t=[],n=[];function i(h){l.camera=h,t.length=0,n.length=0}function r(h){t.push(h)}function a(h){n.push(h)}function o(){e.setup(t)}function c(h){e.setupView(t,h)}const l={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:i,state:l,setupLights:o,setupLightsView:c,pushLight:r,pushShadow:a}}function S_(s){let e=new WeakMap;function t(i,r=0){const a=e.get(i);let o;return a===void 0?(o=new zh(s),e.set(i,[o])):r>=a.length?(o=new zh(s),a.push(o)):o=a[r],o}function n(){e=new WeakMap}return{get:t,dispose:n}}class w_ extends Pn{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=sp,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class E_ extends Pn{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const A_=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,T_=`uniform sampler2D shadow_pass;
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
}`;function R_(s,e,t){let n=new pl;const i=new Se,r=new Se,a=new et,o=new w_({depthPacking:rp}),c=new E_,l={},h=t.maxTextureSize,d={[di]:Qt,[Qt]:di,[vn]:vn},u=new Ln({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Se},radius:{value:4}},vertexShader:A_,fragmentShader:T_}),f=u.clone();f.defines.HORIZONTAL_PASS=1;const g=new Ct;g.setAttribute("position",new St(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const b=new st(g,u),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Zd;let p=this.type;this.render=function(T,S,P){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||T.length===0)return;const F=s.getRenderTarget(),_=s.getActiveCubeFace(),w=s.getActiveMipmapLevel(),U=s.state;U.setBlending(Ai),U.buffers.color.setClear(1,1,1,1),U.buffers.depth.setTest(!0),U.setScissorTest(!1);const O=p!==ii&&this.type===ii,B=p===ii&&this.type!==ii;for(let K=0,G=T.length;K<G;K++){const Z=T[K],W=Z.shadow;if(W===void 0){console.warn("THREE.WebGLShadowMap:",Z,"has no shadow.");continue}if(W.autoUpdate===!1&&W.needsUpdate===!1)continue;i.copy(W.mapSize);const ce=W.getFrameExtents();if(i.multiply(ce),r.copy(W.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(r.x=Math.floor(h/ce.x),i.x=r.x*ce.x,W.mapSize.x=r.x),i.y>h&&(r.y=Math.floor(h/ce.y),i.y=r.y*ce.y,W.mapSize.y=r.y)),W.map===null||O===!0||B===!0){const me=this.type!==ii?{minFilter:Kt,magFilter:Kt}:{};W.map!==null&&W.map.dispose(),W.map=new ji(i.x,i.y,me),W.map.texture.name=Z.name+".shadowMap",W.camera.updateProjectionMatrix()}s.setRenderTarget(W.map),s.clear();const le=W.getViewportCount();for(let me=0;me<le;me++){const Ge=W.getViewport(me);a.set(r.x*Ge.x,r.y*Ge.y,r.x*Ge.z,r.y*Ge.w),U.viewport(a),W.updateMatrices(Z,me),n=W.getFrustum(),y(S,P,W.camera,Z,this.type)}W.isPointLightShadow!==!0&&this.type===ii&&x(W,P),W.needsUpdate=!1}p=this.type,m.needsUpdate=!1,s.setRenderTarget(F,_,w)};function x(T,S){const P=e.update(b);u.defines.VSM_SAMPLES!==T.blurSamples&&(u.defines.VSM_SAMPLES=T.blurSamples,f.defines.VSM_SAMPLES=T.blurSamples,u.needsUpdate=!0,f.needsUpdate=!0),T.mapPass===null&&(T.mapPass=new ji(i.x,i.y)),u.uniforms.shadow_pass.value=T.map.texture,u.uniforms.resolution.value=T.mapSize,u.uniforms.radius.value=T.radius,s.setRenderTarget(T.mapPass),s.clear(),s.renderBufferDirect(S,null,P,u,b,null),f.uniforms.shadow_pass.value=T.mapPass.texture,f.uniforms.resolution.value=T.mapSize,f.uniforms.radius.value=T.radius,s.setRenderTarget(T.map),s.clear(),s.renderBufferDirect(S,null,P,f,b,null)}function v(T,S,P,F){let _=null;const w=P.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(w!==void 0)_=w;else if(_=P.isPointLight===!0?c:o,s.localClippingEnabled&&S.clipShadows===!0&&Array.isArray(S.clippingPlanes)&&S.clippingPlanes.length!==0||S.displacementMap&&S.displacementScale!==0||S.alphaMap&&S.alphaTest>0||S.map&&S.alphaTest>0){const U=_.uuid,O=S.uuid;let B=l[U];B===void 0&&(B={},l[U]=B);let K=B[O];K===void 0&&(K=_.clone(),B[O]=K,S.addEventListener("dispose",A)),_=K}if(_.visible=S.visible,_.wireframe=S.wireframe,F===ii?_.side=S.shadowSide!==null?S.shadowSide:S.side:_.side=S.shadowSide!==null?S.shadowSide:d[S.side],_.alphaMap=S.alphaMap,_.alphaTest=S.alphaTest,_.map=S.map,_.clipShadows=S.clipShadows,_.clippingPlanes=S.clippingPlanes,_.clipIntersection=S.clipIntersection,_.displacementMap=S.displacementMap,_.displacementScale=S.displacementScale,_.displacementBias=S.displacementBias,_.wireframeLinewidth=S.wireframeLinewidth,_.linewidth=S.linewidth,P.isPointLight===!0&&_.isMeshDistanceMaterial===!0){const U=s.properties.get(_);U.light=P}return _}function y(T,S,P,F,_){if(T.visible===!1)return;if(T.layers.test(S.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&_===ii)&&(!T.frustumCulled||n.intersectsObject(T))){T.modelViewMatrix.multiplyMatrices(P.matrixWorldInverse,T.matrixWorld);const O=e.update(T),B=T.material;if(Array.isArray(B)){const K=O.groups;for(let G=0,Z=K.length;G<Z;G++){const W=K[G],ce=B[W.materialIndex];if(ce&&ce.visible){const le=v(T,ce,F,_);T.onBeforeShadow(s,T,S,P,O,le,W),s.renderBufferDirect(P,null,O,le,T,W),T.onAfterShadow(s,T,S,P,O,le,W)}}}else if(B.visible){const K=v(T,B,F,_);T.onBeforeShadow(s,T,S,P,O,K,null),s.renderBufferDirect(P,null,O,K,T,null),T.onAfterShadow(s,T,S,P,O,K,null)}}const U=T.children;for(let O=0,B=U.length;O<B;O++)y(U[O],S,P,F,_)}function A(T){T.target.removeEventListener("dispose",A);for(const P in l){const F=l[P],_=T.target.uuid;_ in F&&(F[_].dispose(),delete F[_])}}}const C_={[hc]:dc,[uc]:mc,[fc]:gc,[Ts]:pc,[dc]:hc,[mc]:uc,[gc]:fc,[pc]:Ts};function P_(s){function e(){let I=!1;const he=new et;let q=null;const $=new et(0,0,0,0);return{setMask:function(ae){q!==ae&&!I&&(s.colorMask(ae,ae,ae,ae),q=ae)},setLocked:function(ae){I=ae},setClear:function(ae,de,Xe,wt,Zt){Zt===!0&&(ae*=wt,de*=wt,Xe*=wt),he.set(ae,de,Xe,wt),$.equals(he)===!1&&(s.clearColor(ae,de,Xe,wt),$.copy(he))},reset:function(){I=!1,q=null,$.set(-1,0,0,0)}}}function t(){let I=!1,he=!1,q=null,$=null,ae=null;return{setReversed:function(de){he=de},setTest:function(de){de?ie(s.DEPTH_TEST):re(s.DEPTH_TEST)},setMask:function(de){q!==de&&!I&&(s.depthMask(de),q=de)},setFunc:function(de){if(he&&(de=C_[de]),$!==de){switch(de){case hc:s.depthFunc(s.NEVER);break;case dc:s.depthFunc(s.ALWAYS);break;case uc:s.depthFunc(s.LESS);break;case Ts:s.depthFunc(s.LEQUAL);break;case fc:s.depthFunc(s.EQUAL);break;case pc:s.depthFunc(s.GEQUAL);break;case mc:s.depthFunc(s.GREATER);break;case gc:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}$=de}},setLocked:function(de){I=de},setClear:function(de){ae!==de&&(s.clearDepth(de),ae=de)},reset:function(){I=!1,q=null,$=null,ae=null}}}function n(){let I=!1,he=null,q=null,$=null,ae=null,de=null,Xe=null,wt=null,Zt=null;return{setTest:function(Je){I||(Je?ie(s.STENCIL_TEST):re(s.STENCIL_TEST))},setMask:function(Je){he!==Je&&!I&&(s.stencilMask(Je),he=Je)},setFunc:function(Je,en,Xn){(q!==Je||$!==en||ae!==Xn)&&(s.stencilFunc(Je,en,Xn),q=Je,$=en,ae=Xn)},setOp:function(Je,en,Xn){(de!==Je||Xe!==en||wt!==Xn)&&(s.stencilOp(Je,en,Xn),de=Je,Xe=en,wt=Xn)},setLocked:function(Je){I=Je},setClear:function(Je){Zt!==Je&&(s.clearStencil(Je),Zt=Je)},reset:function(){I=!1,he=null,q=null,$=null,ae=null,de=null,Xe=null,wt=null,Zt=null}}}const i=new e,r=new t,a=new n,o=new WeakMap,c=new WeakMap;let l={},h={},d=new WeakMap,u=[],f=null,g=!1,b=null,m=null,p=null,x=null,v=null,y=null,A=null,T=new we(0,0,0),S=0,P=!1,F=null,_=null,w=null,U=null,O=null;const B=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let K=!1,G=0;const Z=s.getParameter(s.VERSION);Z.indexOf("WebGL")!==-1?(G=parseFloat(/^WebGL (\d)/.exec(Z)[1]),K=G>=1):Z.indexOf("OpenGL ES")!==-1&&(G=parseFloat(/^OpenGL ES (\d)/.exec(Z)[1]),K=G>=2);let W=null,ce={};const le=s.getParameter(s.SCISSOR_BOX),me=s.getParameter(s.VIEWPORT),Ge=new et().fromArray(le),Ae=new et().fromArray(me);function j(I,he,q,$){const ae=new Uint8Array(4),de=s.createTexture();s.bindTexture(I,de),s.texParameteri(I,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(I,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let Xe=0;Xe<q;Xe++)I===s.TEXTURE_3D||I===s.TEXTURE_2D_ARRAY?s.texImage3D(he,0,s.RGBA,1,1,$,0,s.RGBA,s.UNSIGNED_BYTE,ae):s.texImage2D(he+Xe,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,ae);return de}const J={};J[s.TEXTURE_2D]=j(s.TEXTURE_2D,s.TEXTURE_2D,1),J[s.TEXTURE_CUBE_MAP]=j(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),J[s.TEXTURE_2D_ARRAY]=j(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),J[s.TEXTURE_3D]=j(s.TEXTURE_3D,s.TEXTURE_3D,1,1),i.setClear(0,0,0,1),r.setClear(1),a.setClear(0),ie(s.DEPTH_TEST),r.setFunc(Ts),Ve(!1),Ye(jl),ie(s.CULL_FACE),L(Ai);function ie(I){l[I]!==!0&&(s.enable(I),l[I]=!0)}function re(I){l[I]!==!1&&(s.disable(I),l[I]=!1)}function Ue(I,he){return h[I]!==he?(s.bindFramebuffer(I,he),h[I]=he,I===s.DRAW_FRAMEBUFFER&&(h[s.FRAMEBUFFER]=he),I===s.FRAMEBUFFER&&(h[s.DRAW_FRAMEBUFFER]=he),!0):!1}function Te(I,he){let q=u,$=!1;if(I){q=d.get(he),q===void 0&&(q=[],d.set(he,q));const ae=I.textures;if(q.length!==ae.length||q[0]!==s.COLOR_ATTACHMENT0){for(let de=0,Xe=ae.length;de<Xe;de++)q[de]=s.COLOR_ATTACHMENT0+de;q.length=ae.length,$=!0}}else q[0]!==s.BACK&&(q[0]=s.BACK,$=!0);$&&s.drawBuffers(q)}function qe(I){return f!==I?(s.useProgram(I),f=I,!0):!1}const lt={[Gi]:s.FUNC_ADD,[Cf]:s.FUNC_SUBTRACT,[Pf]:s.FUNC_REVERSE_SUBTRACT};lt[Lf]=s.MIN,lt[If]=s.MAX;const je={[Df]:s.ZERO,[Nf]:s.ONE,[Uf]:s.SRC_COLOR,[cc]:s.SRC_ALPHA,[Hf]:s.SRC_ALPHA_SATURATE,[Bf]:s.DST_COLOR,[kf]:s.DST_ALPHA,[Ff]:s.ONE_MINUS_SRC_COLOR,[lc]:s.ONE_MINUS_SRC_ALPHA,[zf]:s.ONE_MINUS_DST_COLOR,[Of]:s.ONE_MINUS_DST_ALPHA,[Gf]:s.CONSTANT_COLOR,[Vf]:s.ONE_MINUS_CONSTANT_COLOR,[Wf]:s.CONSTANT_ALPHA,[qf]:s.ONE_MINUS_CONSTANT_ALPHA};function L(I,he,q,$,ae,de,Xe,wt,Zt,Je){if(I===Ai){g===!0&&(re(s.BLEND),g=!1);return}if(g===!1&&(ie(s.BLEND),g=!0),I!==Rf){if(I!==b||Je!==P){if((m!==Gi||v!==Gi)&&(s.blendEquation(s.FUNC_ADD),m=Gi,v=Gi),Je)switch(I){case ys:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case gr:s.blendFunc(s.ONE,s.ONE);break;case Xl:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Yl:s.blendFuncSeparate(s.ZERO,s.SRC_COLOR,s.ZERO,s.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}else switch(I){case ys:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case gr:s.blendFunc(s.SRC_ALPHA,s.ONE);break;case Xl:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Yl:s.blendFunc(s.ZERO,s.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}p=null,x=null,y=null,A=null,T.set(0,0,0),S=0,b=I,P=Je}return}ae=ae||he,de=de||q,Xe=Xe||$,(he!==m||ae!==v)&&(s.blendEquationSeparate(lt[he],lt[ae]),m=he,v=ae),(q!==p||$!==x||de!==y||Xe!==A)&&(s.blendFuncSeparate(je[q],je[$],je[de],je[Xe]),p=q,x=$,y=de,A=Xe),(wt.equals(T)===!1||Zt!==S)&&(s.blendColor(wt.r,wt.g,wt.b,Zt),T.copy(wt),S=Zt),b=I,P=!1}function sn(I,he){I.side===vn?re(s.CULL_FACE):ie(s.CULL_FACE);let q=I.side===Qt;he&&(q=!q),Ve(q),I.blending===ys&&I.transparent===!1?L(Ai):L(I.blending,I.blendEquation,I.blendSrc,I.blendDst,I.blendEquationAlpha,I.blendSrcAlpha,I.blendDstAlpha,I.blendColor,I.blendAlpha,I.premultipliedAlpha),r.setFunc(I.depthFunc),r.setTest(I.depthTest),r.setMask(I.depthWrite),i.setMask(I.colorWrite);const $=I.stencilWrite;a.setTest($),$&&(a.setMask(I.stencilWriteMask),a.setFunc(I.stencilFunc,I.stencilRef,I.stencilFuncMask),a.setOp(I.stencilFail,I.stencilZFail,I.stencilZPass)),dt(I.polygonOffset,I.polygonOffsetFactor,I.polygonOffsetUnits),I.alphaToCoverage===!0?ie(s.SAMPLE_ALPHA_TO_COVERAGE):re(s.SAMPLE_ALPHA_TO_COVERAGE)}function Ve(I){F!==I&&(I?s.frontFace(s.CW):s.frontFace(s.CCW),F=I)}function Ye(I){I!==Ef?(ie(s.CULL_FACE),I!==_&&(I===jl?s.cullFace(s.BACK):I===Af?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):re(s.CULL_FACE),_=I}function Pe(I){I!==w&&(K&&s.lineWidth(I),w=I)}function dt(I,he,q){I?(ie(s.POLYGON_OFFSET_FILL),(U!==he||O!==q)&&(s.polygonOffset(he,q),U=he,O=q)):re(s.POLYGON_OFFSET_FILL)}function Ne(I){I?ie(s.SCISSOR_TEST):re(s.SCISSOR_TEST)}function C(I){I===void 0&&(I=s.TEXTURE0+B-1),W!==I&&(s.activeTexture(I),W=I)}function M(I,he,q){q===void 0&&(W===null?q=s.TEXTURE0+B-1:q=W);let $=ce[q];$===void 0&&($={type:void 0,texture:void 0},ce[q]=$),($.type!==I||$.texture!==he)&&(W!==q&&(s.activeTexture(q),W=q),s.bindTexture(I,he||J[I]),$.type=I,$.texture=he)}function k(){const I=ce[W];I!==void 0&&I.type!==void 0&&(s.bindTexture(I.type,null),I.type=void 0,I.texture=void 0)}function Y(){try{s.compressedTexImage2D.apply(s,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Q(){try{s.compressedTexImage3D.apply(s,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function X(){try{s.texSubImage2D.apply(s,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function xe(){try{s.texSubImage3D.apply(s,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function se(){try{s.compressedTexSubImage2D.apply(s,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function ue(){try{s.compressedTexSubImage3D.apply(s,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Ke(){try{s.texStorage2D.apply(s,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function ee(){try{s.texStorage3D.apply(s,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function fe(){try{s.texImage2D.apply(s,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Le(){try{s.texImage3D.apply(s,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Ie(I){Ge.equals(I)===!1&&(s.scissor(I.x,I.y,I.z,I.w),Ge.copy(I))}function pe(I){Ae.equals(I)===!1&&(s.viewport(I.x,I.y,I.z,I.w),Ae.copy(I))}function We(I,he){let q=c.get(he);q===void 0&&(q=new WeakMap,c.set(he,q));let $=q.get(I);$===void 0&&($=s.getUniformBlockIndex(he,I.name),q.set(I,$))}function Fe(I,he){const $=c.get(he).get(I);o.get(he)!==$&&(s.uniformBlockBinding(he,$,I.__bindingPointIndex),o.set(he,$))}function ht(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),l={},W=null,ce={},h={},d=new WeakMap,u=[],f=null,g=!1,b=null,m=null,p=null,x=null,v=null,y=null,A=null,T=new we(0,0,0),S=0,P=!1,F=null,_=null,w=null,U=null,O=null,Ge.set(0,0,s.canvas.width,s.canvas.height),Ae.set(0,0,s.canvas.width,s.canvas.height),i.reset(),r.reset(),a.reset()}return{buffers:{color:i,depth:r,stencil:a},enable:ie,disable:re,bindFramebuffer:Ue,drawBuffers:Te,useProgram:qe,setBlending:L,setMaterial:sn,setFlipSided:Ve,setCullFace:Ye,setLineWidth:Pe,setPolygonOffset:dt,setScissorTest:Ne,activeTexture:C,bindTexture:M,unbindTexture:k,compressedTexImage2D:Y,compressedTexImage3D:Q,texImage2D:fe,texImage3D:Le,updateUBOMapping:We,uniformBlockBinding:Fe,texStorage2D:Ke,texStorage3D:ee,texSubImage2D:X,texSubImage3D:xe,compressedTexSubImage2D:se,compressedTexSubImage3D:ue,scissor:Ie,viewport:pe,reset:ht}}function Hh(s,e,t,n){const i=L_(n);switch(t){case au:return s*e;case cu:return s*e;case lu:return s*e*2;case cl:return s*e/i.components*i.byteLength;case ll:return s*e/i.components*i.byteLength;case hu:return s*e*2/i.components*i.byteLength;case hl:return s*e*2/i.components*i.byteLength;case ou:return s*e*3/i.components*i.byteLength;case xn:return s*e*4/i.components*i.byteLength;case dl:return s*e*4/i.components*i.byteLength;case Ma:case Sa:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case wa:case Ea:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case xc:case Mc:return Math.max(s,16)*Math.max(e,8)/4;case vc:case yc:return Math.max(s,8)*Math.max(e,8)/2;case Sc:case wc:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case Ec:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Ac:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Tc:return Math.floor((s+4)/5)*Math.floor((e+3)/4)*16;case Rc:return Math.floor((s+4)/5)*Math.floor((e+4)/5)*16;case Cc:return Math.floor((s+5)/6)*Math.floor((e+4)/5)*16;case Pc:return Math.floor((s+5)/6)*Math.floor((e+5)/6)*16;case Lc:return Math.floor((s+7)/8)*Math.floor((e+4)/5)*16;case Ic:return Math.floor((s+7)/8)*Math.floor((e+5)/6)*16;case Dc:return Math.floor((s+7)/8)*Math.floor((e+7)/8)*16;case Nc:return Math.floor((s+9)/10)*Math.floor((e+4)/5)*16;case Uc:return Math.floor((s+9)/10)*Math.floor((e+5)/6)*16;case Fc:return Math.floor((s+9)/10)*Math.floor((e+7)/8)*16;case kc:return Math.floor((s+9)/10)*Math.floor((e+9)/10)*16;case Oc:return Math.floor((s+11)/12)*Math.floor((e+9)/10)*16;case Bc:return Math.floor((s+11)/12)*Math.floor((e+11)/12)*16;case Aa:case zc:case Hc:return Math.ceil(s/4)*Math.ceil(e/4)*16;case du:case Gc:return Math.ceil(s/4)*Math.ceil(e/4)*8;case Vc:case Wc:return Math.ceil(s/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function L_(s){switch(s){case ui:case iu:return{byteLength:1,components:1};case yr:case su:case Cr:return{byteLength:2,components:1};case al:case ol:return{byteLength:2,components:4};case qi:case rl:case Rn:return{byteLength:4,components:1};case ru:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}function I_(s,e,t,n,i,r,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new Se,h=new WeakMap;let d;const u=new WeakMap;let f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(C,M){return f?new OffscreenCanvas(C,M):wr("canvas")}function b(C,M,k){let Y=1;const Q=Ne(C);if((Q.width>k||Q.height>k)&&(Y=k/Math.max(Q.width,Q.height)),Y<1)if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap||typeof VideoFrame<"u"&&C instanceof VideoFrame){const X=Math.floor(Y*Q.width),xe=Math.floor(Y*Q.height);d===void 0&&(d=g(X,xe));const se=M?g(X,xe):d;return se.width=X,se.height=xe,se.getContext("2d").drawImage(C,0,0,X,xe),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+Q.width+"x"+Q.height+") to ("+X+"x"+xe+")."),se}else return"data"in C&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+Q.width+"x"+Q.height+")."),C;return C}function m(C){return C.generateMipmaps&&C.minFilter!==Kt&&C.minFilter!==hn}function p(C){s.generateMipmap(C)}function x(C,M,k,Y,Q=!1){if(C!==null){if(s[C]!==void 0)return s[C];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let X=M;if(M===s.RED&&(k===s.FLOAT&&(X=s.R32F),k===s.HALF_FLOAT&&(X=s.R16F),k===s.UNSIGNED_BYTE&&(X=s.R8)),M===s.RED_INTEGER&&(k===s.UNSIGNED_BYTE&&(X=s.R8UI),k===s.UNSIGNED_SHORT&&(X=s.R16UI),k===s.UNSIGNED_INT&&(X=s.R32UI),k===s.BYTE&&(X=s.R8I),k===s.SHORT&&(X=s.R16I),k===s.INT&&(X=s.R32I)),M===s.RG&&(k===s.FLOAT&&(X=s.RG32F),k===s.HALF_FLOAT&&(X=s.RG16F),k===s.UNSIGNED_BYTE&&(X=s.RG8)),M===s.RG_INTEGER&&(k===s.UNSIGNED_BYTE&&(X=s.RG8UI),k===s.UNSIGNED_SHORT&&(X=s.RG16UI),k===s.UNSIGNED_INT&&(X=s.RG32UI),k===s.BYTE&&(X=s.RG8I),k===s.SHORT&&(X=s.RG16I),k===s.INT&&(X=s.RG32I)),M===s.RGB_INTEGER&&(k===s.UNSIGNED_BYTE&&(X=s.RGB8UI),k===s.UNSIGNED_SHORT&&(X=s.RGB16UI),k===s.UNSIGNED_INT&&(X=s.RGB32UI),k===s.BYTE&&(X=s.RGB8I),k===s.SHORT&&(X=s.RGB16I),k===s.INT&&(X=s.RGB32I)),M===s.RGBA_INTEGER&&(k===s.UNSIGNED_BYTE&&(X=s.RGBA8UI),k===s.UNSIGNED_SHORT&&(X=s.RGBA16UI),k===s.UNSIGNED_INT&&(X=s.RGBA32UI),k===s.BYTE&&(X=s.RGBA8I),k===s.SHORT&&(X=s.RGBA16I),k===s.INT&&(X=s.RGBA32I)),M===s.RGB&&k===s.UNSIGNED_INT_5_9_9_9_REV&&(X=s.RGB9_E5),M===s.RGBA){const xe=Q?Ia:$e.getTransfer(Y);k===s.FLOAT&&(X=s.RGBA32F),k===s.HALF_FLOAT&&(X=s.RGBA16F),k===s.UNSIGNED_BYTE&&(X=xe===ft?s.SRGB8_ALPHA8:s.RGBA8),k===s.UNSIGNED_SHORT_4_4_4_4&&(X=s.RGBA4),k===s.UNSIGNED_SHORT_5_5_5_1&&(X=s.RGB5_A1)}return(X===s.R16F||X===s.R32F||X===s.RG16F||X===s.RG32F||X===s.RGBA16F||X===s.RGBA32F)&&e.get("EXT_color_buffer_float"),X}function v(C,M){let k;return C?M===null||M===qi||M===Ls?k=s.DEPTH24_STENCIL8:M===Rn?k=s.DEPTH32F_STENCIL8:M===yr&&(k=s.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):M===null||M===qi||M===Ls?k=s.DEPTH_COMPONENT24:M===Rn?k=s.DEPTH_COMPONENT32F:M===yr&&(k=s.DEPTH_COMPONENT16),k}function y(C,M){return m(C)===!0||C.isFramebufferTexture&&C.minFilter!==Kt&&C.minFilter!==hn?Math.log2(Math.max(M.width,M.height))+1:C.mipmaps!==void 0&&C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?M.mipmaps.length:1}function A(C){const M=C.target;M.removeEventListener("dispose",A),S(M),M.isVideoTexture&&h.delete(M)}function T(C){const M=C.target;M.removeEventListener("dispose",T),F(M)}function S(C){const M=n.get(C);if(M.__webglInit===void 0)return;const k=C.source,Y=u.get(k);if(Y){const Q=Y[M.__cacheKey];Q.usedTimes--,Q.usedTimes===0&&P(C),Object.keys(Y).length===0&&u.delete(k)}n.remove(C)}function P(C){const M=n.get(C);s.deleteTexture(M.__webglTexture);const k=C.source,Y=u.get(k);delete Y[M.__cacheKey],a.memory.textures--}function F(C){const M=n.get(C);if(C.depthTexture&&C.depthTexture.dispose(),C.isWebGLCubeRenderTarget)for(let Y=0;Y<6;Y++){if(Array.isArray(M.__webglFramebuffer[Y]))for(let Q=0;Q<M.__webglFramebuffer[Y].length;Q++)s.deleteFramebuffer(M.__webglFramebuffer[Y][Q]);else s.deleteFramebuffer(M.__webglFramebuffer[Y]);M.__webglDepthbuffer&&s.deleteRenderbuffer(M.__webglDepthbuffer[Y])}else{if(Array.isArray(M.__webglFramebuffer))for(let Y=0;Y<M.__webglFramebuffer.length;Y++)s.deleteFramebuffer(M.__webglFramebuffer[Y]);else s.deleteFramebuffer(M.__webglFramebuffer);if(M.__webglDepthbuffer&&s.deleteRenderbuffer(M.__webglDepthbuffer),M.__webglMultisampledFramebuffer&&s.deleteFramebuffer(M.__webglMultisampledFramebuffer),M.__webglColorRenderbuffer)for(let Y=0;Y<M.__webglColorRenderbuffer.length;Y++)M.__webglColorRenderbuffer[Y]&&s.deleteRenderbuffer(M.__webglColorRenderbuffer[Y]);M.__webglDepthRenderbuffer&&s.deleteRenderbuffer(M.__webglDepthRenderbuffer)}const k=C.textures;for(let Y=0,Q=k.length;Y<Q;Y++){const X=n.get(k[Y]);X.__webglTexture&&(s.deleteTexture(X.__webglTexture),a.memory.textures--),n.remove(k[Y])}n.remove(C)}let _=0;function w(){_=0}function U(){const C=_;return C>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+C+" texture units while this GPU supports only "+i.maxTextures),_+=1,C}function O(C){const M=[];return M.push(C.wrapS),M.push(C.wrapT),M.push(C.wrapR||0),M.push(C.magFilter),M.push(C.minFilter),M.push(C.anisotropy),M.push(C.internalFormat),M.push(C.format),M.push(C.type),M.push(C.generateMipmaps),M.push(C.premultiplyAlpha),M.push(C.flipY),M.push(C.unpackAlignment),M.push(C.colorSpace),M.join()}function B(C,M){const k=n.get(C);if(C.isVideoTexture&&Pe(C),C.isRenderTargetTexture===!1&&C.version>0&&k.__version!==C.version){const Y=C.image;if(Y===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Y.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Ae(k,C,M);return}}t.bindTexture(s.TEXTURE_2D,k.__webglTexture,s.TEXTURE0+M)}function K(C,M){const k=n.get(C);if(C.version>0&&k.__version!==C.version){Ae(k,C,M);return}t.bindTexture(s.TEXTURE_2D_ARRAY,k.__webglTexture,s.TEXTURE0+M)}function G(C,M){const k=n.get(C);if(C.version>0&&k.__version!==C.version){Ae(k,C,M);return}t.bindTexture(s.TEXTURE_3D,k.__webglTexture,s.TEXTURE0+M)}function Z(C,M){const k=n.get(C);if(C.version>0&&k.__version!==C.version){j(k,C,M);return}t.bindTexture(s.TEXTURE_CUBE_MAP,k.__webglTexture,s.TEXTURE0+M)}const W={[Ps]:s.REPEAT,[Si]:s.CLAMP_TO_EDGE,[La]:s.MIRRORED_REPEAT},ce={[Kt]:s.NEAREST,[nu]:s.NEAREST_MIPMAP_NEAREST,[pr]:s.NEAREST_MIPMAP_LINEAR,[hn]:s.LINEAR,[ya]:s.LINEAR_MIPMAP_NEAREST,[zn]:s.LINEAR_MIPMAP_LINEAR},le={[op]:s.NEVER,[fp]:s.ALWAYS,[cp]:s.LESS,[pu]:s.LEQUAL,[lp]:s.EQUAL,[up]:s.GEQUAL,[hp]:s.GREATER,[dp]:s.NOTEQUAL};function me(C,M){if(M.type===Rn&&e.has("OES_texture_float_linear")===!1&&(M.magFilter===hn||M.magFilter===ya||M.magFilter===pr||M.magFilter===zn||M.minFilter===hn||M.minFilter===ya||M.minFilter===pr||M.minFilter===zn)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(C,s.TEXTURE_WRAP_S,W[M.wrapS]),s.texParameteri(C,s.TEXTURE_WRAP_T,W[M.wrapT]),(C===s.TEXTURE_3D||C===s.TEXTURE_2D_ARRAY)&&s.texParameteri(C,s.TEXTURE_WRAP_R,W[M.wrapR]),s.texParameteri(C,s.TEXTURE_MAG_FILTER,ce[M.magFilter]),s.texParameteri(C,s.TEXTURE_MIN_FILTER,ce[M.minFilter]),M.compareFunction&&(s.texParameteri(C,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(C,s.TEXTURE_COMPARE_FUNC,le[M.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(M.magFilter===Kt||M.minFilter!==pr&&M.minFilter!==zn||M.type===Rn&&e.has("OES_texture_float_linear")===!1)return;if(M.anisotropy>1||n.get(M).__currentAnisotropy){const k=e.get("EXT_texture_filter_anisotropic");s.texParameterf(C,k.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,i.getMaxAnisotropy())),n.get(M).__currentAnisotropy=M.anisotropy}}}function Ge(C,M){let k=!1;C.__webglInit===void 0&&(C.__webglInit=!0,M.addEventListener("dispose",A));const Y=M.source;let Q=u.get(Y);Q===void 0&&(Q={},u.set(Y,Q));const X=O(M);if(X!==C.__cacheKey){Q[X]===void 0&&(Q[X]={texture:s.createTexture(),usedTimes:0},a.memory.textures++,k=!0),Q[X].usedTimes++;const xe=Q[C.__cacheKey];xe!==void 0&&(Q[C.__cacheKey].usedTimes--,xe.usedTimes===0&&P(M)),C.__cacheKey=X,C.__webglTexture=Q[X].texture}return k}function Ae(C,M,k){let Y=s.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(Y=s.TEXTURE_2D_ARRAY),M.isData3DTexture&&(Y=s.TEXTURE_3D);const Q=Ge(C,M),X=M.source;t.bindTexture(Y,C.__webglTexture,s.TEXTURE0+k);const xe=n.get(X);if(X.version!==xe.__version||Q===!0){t.activeTexture(s.TEXTURE0+k);const se=$e.getPrimaries($e.workingColorSpace),ue=M.colorSpace===Mi?null:$e.getPrimaries(M.colorSpace),Ke=M.colorSpace===Mi||se===ue?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,M.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,M.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ke);let ee=b(M.image,!1,i.maxTextureSize);ee=dt(M,ee);const fe=r.convert(M.format,M.colorSpace),Le=r.convert(M.type);let Ie=x(M.internalFormat,fe,Le,M.colorSpace,M.isVideoTexture);me(Y,M);let pe;const We=M.mipmaps,Fe=M.isVideoTexture!==!0,ht=xe.__version===void 0||Q===!0,I=X.dataReady,he=y(M,ee);if(M.isDepthTexture)Ie=v(M.format===Is,M.type),ht&&(Fe?t.texStorage2D(s.TEXTURE_2D,1,Ie,ee.width,ee.height):t.texImage2D(s.TEXTURE_2D,0,Ie,ee.width,ee.height,0,fe,Le,null));else if(M.isDataTexture)if(We.length>0){Fe&&ht&&t.texStorage2D(s.TEXTURE_2D,he,Ie,We[0].width,We[0].height);for(let q=0,$=We.length;q<$;q++)pe=We[q],Fe?I&&t.texSubImage2D(s.TEXTURE_2D,q,0,0,pe.width,pe.height,fe,Le,pe.data):t.texImage2D(s.TEXTURE_2D,q,Ie,pe.width,pe.height,0,fe,Le,pe.data);M.generateMipmaps=!1}else Fe?(ht&&t.texStorage2D(s.TEXTURE_2D,he,Ie,ee.width,ee.height),I&&t.texSubImage2D(s.TEXTURE_2D,0,0,0,ee.width,ee.height,fe,Le,ee.data)):t.texImage2D(s.TEXTURE_2D,0,Ie,ee.width,ee.height,0,fe,Le,ee.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){Fe&&ht&&t.texStorage3D(s.TEXTURE_2D_ARRAY,he,Ie,We[0].width,We[0].height,ee.depth);for(let q=0,$=We.length;q<$;q++)if(pe=We[q],M.format!==xn)if(fe!==null)if(Fe){if(I)if(M.layerUpdates.size>0){const ae=Hh(pe.width,pe.height,M.format,M.type);for(const de of M.layerUpdates){const Xe=pe.data.subarray(de*ae/pe.data.BYTES_PER_ELEMENT,(de+1)*ae/pe.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,q,0,0,de,pe.width,pe.height,1,fe,Xe,0,0)}M.clearLayerUpdates()}else t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,q,0,0,0,pe.width,pe.height,ee.depth,fe,pe.data,0,0)}else t.compressedTexImage3D(s.TEXTURE_2D_ARRAY,q,Ie,pe.width,pe.height,ee.depth,0,pe.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Fe?I&&t.texSubImage3D(s.TEXTURE_2D_ARRAY,q,0,0,0,pe.width,pe.height,ee.depth,fe,Le,pe.data):t.texImage3D(s.TEXTURE_2D_ARRAY,q,Ie,pe.width,pe.height,ee.depth,0,fe,Le,pe.data)}else{Fe&&ht&&t.texStorage2D(s.TEXTURE_2D,he,Ie,We[0].width,We[0].height);for(let q=0,$=We.length;q<$;q++)pe=We[q],M.format!==xn?fe!==null?Fe?I&&t.compressedTexSubImage2D(s.TEXTURE_2D,q,0,0,pe.width,pe.height,fe,pe.data):t.compressedTexImage2D(s.TEXTURE_2D,q,Ie,pe.width,pe.height,0,pe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Fe?I&&t.texSubImage2D(s.TEXTURE_2D,q,0,0,pe.width,pe.height,fe,Le,pe.data):t.texImage2D(s.TEXTURE_2D,q,Ie,pe.width,pe.height,0,fe,Le,pe.data)}else if(M.isDataArrayTexture)if(Fe){if(ht&&t.texStorage3D(s.TEXTURE_2D_ARRAY,he,Ie,ee.width,ee.height,ee.depth),I)if(M.layerUpdates.size>0){const q=Hh(ee.width,ee.height,M.format,M.type);for(const $ of M.layerUpdates){const ae=ee.data.subarray($*q/ee.data.BYTES_PER_ELEMENT,($+1)*q/ee.data.BYTES_PER_ELEMENT);t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,$,ee.width,ee.height,1,fe,Le,ae)}M.clearLayerUpdates()}else t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,ee.width,ee.height,ee.depth,fe,Le,ee.data)}else t.texImage3D(s.TEXTURE_2D_ARRAY,0,Ie,ee.width,ee.height,ee.depth,0,fe,Le,ee.data);else if(M.isData3DTexture)Fe?(ht&&t.texStorage3D(s.TEXTURE_3D,he,Ie,ee.width,ee.height,ee.depth),I&&t.texSubImage3D(s.TEXTURE_3D,0,0,0,0,ee.width,ee.height,ee.depth,fe,Le,ee.data)):t.texImage3D(s.TEXTURE_3D,0,Ie,ee.width,ee.height,ee.depth,0,fe,Le,ee.data);else if(M.isFramebufferTexture){if(ht)if(Fe)t.texStorage2D(s.TEXTURE_2D,he,Ie,ee.width,ee.height);else{let q=ee.width,$=ee.height;for(let ae=0;ae<he;ae++)t.texImage2D(s.TEXTURE_2D,ae,Ie,q,$,0,fe,Le,null),q>>=1,$>>=1}}else if(We.length>0){if(Fe&&ht){const q=Ne(We[0]);t.texStorage2D(s.TEXTURE_2D,he,Ie,q.width,q.height)}for(let q=0,$=We.length;q<$;q++)pe=We[q],Fe?I&&t.texSubImage2D(s.TEXTURE_2D,q,0,0,fe,Le,pe):t.texImage2D(s.TEXTURE_2D,q,Ie,fe,Le,pe);M.generateMipmaps=!1}else if(Fe){if(ht){const q=Ne(ee);t.texStorage2D(s.TEXTURE_2D,he,Ie,q.width,q.height)}I&&t.texSubImage2D(s.TEXTURE_2D,0,0,0,fe,Le,ee)}else t.texImage2D(s.TEXTURE_2D,0,Ie,fe,Le,ee);m(M)&&p(Y),xe.__version=X.version,M.onUpdate&&M.onUpdate(M)}C.__version=M.version}function j(C,M,k){if(M.image.length!==6)return;const Y=Ge(C,M),Q=M.source;t.bindTexture(s.TEXTURE_CUBE_MAP,C.__webglTexture,s.TEXTURE0+k);const X=n.get(Q);if(Q.version!==X.__version||Y===!0){t.activeTexture(s.TEXTURE0+k);const xe=$e.getPrimaries($e.workingColorSpace),se=M.colorSpace===Mi?null:$e.getPrimaries(M.colorSpace),ue=M.colorSpace===Mi||xe===se?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,M.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,M.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,ue);const Ke=M.isCompressedTexture||M.image[0].isCompressedTexture,ee=M.image[0]&&M.image[0].isDataTexture,fe=[];for(let $=0;$<6;$++)!Ke&&!ee?fe[$]=b(M.image[$],!0,i.maxCubemapSize):fe[$]=ee?M.image[$].image:M.image[$],fe[$]=dt(M,fe[$]);const Le=fe[0],Ie=r.convert(M.format,M.colorSpace),pe=r.convert(M.type),We=x(M.internalFormat,Ie,pe,M.colorSpace),Fe=M.isVideoTexture!==!0,ht=X.__version===void 0||Y===!0,I=Q.dataReady;let he=y(M,Le);me(s.TEXTURE_CUBE_MAP,M);let q;if(Ke){Fe&&ht&&t.texStorage2D(s.TEXTURE_CUBE_MAP,he,We,Le.width,Le.height);for(let $=0;$<6;$++){q=fe[$].mipmaps;for(let ae=0;ae<q.length;ae++){const de=q[ae];M.format!==xn?Ie!==null?Fe?I&&t.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+$,ae,0,0,de.width,de.height,Ie,de.data):t.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+$,ae,We,de.width,de.height,0,de.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Fe?I&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+$,ae,0,0,de.width,de.height,Ie,pe,de.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+$,ae,We,de.width,de.height,0,Ie,pe,de.data)}}}else{if(q=M.mipmaps,Fe&&ht){q.length>0&&he++;const $=Ne(fe[0]);t.texStorage2D(s.TEXTURE_CUBE_MAP,he,We,$.width,$.height)}for(let $=0;$<6;$++)if(ee){Fe?I&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,0,0,fe[$].width,fe[$].height,Ie,pe,fe[$].data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,We,fe[$].width,fe[$].height,0,Ie,pe,fe[$].data);for(let ae=0;ae<q.length;ae++){const Xe=q[ae].image[$].image;Fe?I&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+$,ae+1,0,0,Xe.width,Xe.height,Ie,pe,Xe.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+$,ae+1,We,Xe.width,Xe.height,0,Ie,pe,Xe.data)}}else{Fe?I&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,0,0,Ie,pe,fe[$]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,We,Ie,pe,fe[$]);for(let ae=0;ae<q.length;ae++){const de=q[ae];Fe?I&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+$,ae+1,0,0,Ie,pe,de.image[$]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+$,ae+1,We,Ie,pe,de.image[$])}}}m(M)&&p(s.TEXTURE_CUBE_MAP),X.__version=Q.version,M.onUpdate&&M.onUpdate(M)}C.__version=M.version}function J(C,M,k,Y,Q,X){const xe=r.convert(k.format,k.colorSpace),se=r.convert(k.type),ue=x(k.internalFormat,xe,se,k.colorSpace);if(!n.get(M).__hasExternalTextures){const ee=Math.max(1,M.width>>X),fe=Math.max(1,M.height>>X);Q===s.TEXTURE_3D||Q===s.TEXTURE_2D_ARRAY?t.texImage3D(Q,X,ue,ee,fe,M.depth,0,xe,se,null):t.texImage2D(Q,X,ue,ee,fe,0,xe,se,null)}t.bindFramebuffer(s.FRAMEBUFFER,C),Ye(M)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,Y,Q,n.get(k).__webglTexture,0,Ve(M)):(Q===s.TEXTURE_2D||Q>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&Q<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,Y,Q,n.get(k).__webglTexture,X),t.bindFramebuffer(s.FRAMEBUFFER,null)}function ie(C,M,k){if(s.bindRenderbuffer(s.RENDERBUFFER,C),M.depthBuffer){const Y=M.depthTexture,Q=Y&&Y.isDepthTexture?Y.type:null,X=v(M.stencilBuffer,Q),xe=M.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,se=Ve(M);Ye(M)?o.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,se,X,M.width,M.height):k?s.renderbufferStorageMultisample(s.RENDERBUFFER,se,X,M.width,M.height):s.renderbufferStorage(s.RENDERBUFFER,X,M.width,M.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,xe,s.RENDERBUFFER,C)}else{const Y=M.textures;for(let Q=0;Q<Y.length;Q++){const X=Y[Q],xe=r.convert(X.format,X.colorSpace),se=r.convert(X.type),ue=x(X.internalFormat,xe,se,X.colorSpace),Ke=Ve(M);k&&Ye(M)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,Ke,ue,M.width,M.height):Ye(M)?o.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Ke,ue,M.width,M.height):s.renderbufferStorage(s.RENDERBUFFER,ue,M.width,M.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function re(C,M){if(M&&M.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(s.FRAMEBUFFER,C),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(M.depthTexture).__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),B(M.depthTexture,0);const Y=n.get(M.depthTexture).__webglTexture,Q=Ve(M);if(M.depthTexture.format===Ms)Ye(M)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,Y,0,Q):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,Y,0);else if(M.depthTexture.format===Is)Ye(M)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,Y,0,Q):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,Y,0);else throw new Error("Unknown depthTexture format")}function Ue(C){const M=n.get(C),k=C.isWebGLCubeRenderTarget===!0;if(M.__boundDepthTexture!==C.depthTexture){const Y=C.depthTexture;if(M.__depthDisposeCallback&&M.__depthDisposeCallback(),Y){const Q=()=>{delete M.__boundDepthTexture,delete M.__depthDisposeCallback,Y.removeEventListener("dispose",Q)};Y.addEventListener("dispose",Q),M.__depthDisposeCallback=Q}M.__boundDepthTexture=Y}if(C.depthTexture&&!M.__autoAllocateDepthBuffer){if(k)throw new Error("target.depthTexture not supported in Cube render targets");re(M.__webglFramebuffer,C)}else if(k){M.__webglDepthbuffer=[];for(let Y=0;Y<6;Y++)if(t.bindFramebuffer(s.FRAMEBUFFER,M.__webglFramebuffer[Y]),M.__webglDepthbuffer[Y]===void 0)M.__webglDepthbuffer[Y]=s.createRenderbuffer(),ie(M.__webglDepthbuffer[Y],C,!1);else{const Q=C.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,X=M.__webglDepthbuffer[Y];s.bindRenderbuffer(s.RENDERBUFFER,X),s.framebufferRenderbuffer(s.FRAMEBUFFER,Q,s.RENDERBUFFER,X)}}else if(t.bindFramebuffer(s.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer===void 0)M.__webglDepthbuffer=s.createRenderbuffer(),ie(M.__webglDepthbuffer,C,!1);else{const Y=C.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Q=M.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,Q),s.framebufferRenderbuffer(s.FRAMEBUFFER,Y,s.RENDERBUFFER,Q)}t.bindFramebuffer(s.FRAMEBUFFER,null)}function Te(C,M,k){const Y=n.get(C);M!==void 0&&J(Y.__webglFramebuffer,C,C.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),k!==void 0&&Ue(C)}function qe(C){const M=C.texture,k=n.get(C),Y=n.get(M);C.addEventListener("dispose",T);const Q=C.textures,X=C.isWebGLCubeRenderTarget===!0,xe=Q.length>1;if(xe||(Y.__webglTexture===void 0&&(Y.__webglTexture=s.createTexture()),Y.__version=M.version,a.memory.textures++),X){k.__webglFramebuffer=[];for(let se=0;se<6;se++)if(M.mipmaps&&M.mipmaps.length>0){k.__webglFramebuffer[se]=[];for(let ue=0;ue<M.mipmaps.length;ue++)k.__webglFramebuffer[se][ue]=s.createFramebuffer()}else k.__webglFramebuffer[se]=s.createFramebuffer()}else{if(M.mipmaps&&M.mipmaps.length>0){k.__webglFramebuffer=[];for(let se=0;se<M.mipmaps.length;se++)k.__webglFramebuffer[se]=s.createFramebuffer()}else k.__webglFramebuffer=s.createFramebuffer();if(xe)for(let se=0,ue=Q.length;se<ue;se++){const Ke=n.get(Q[se]);Ke.__webglTexture===void 0&&(Ke.__webglTexture=s.createTexture(),a.memory.textures++)}if(C.samples>0&&Ye(C)===!1){k.__webglMultisampledFramebuffer=s.createFramebuffer(),k.__webglColorRenderbuffer=[],t.bindFramebuffer(s.FRAMEBUFFER,k.__webglMultisampledFramebuffer);for(let se=0;se<Q.length;se++){const ue=Q[se];k.__webglColorRenderbuffer[se]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,k.__webglColorRenderbuffer[se]);const Ke=r.convert(ue.format,ue.colorSpace),ee=r.convert(ue.type),fe=x(ue.internalFormat,Ke,ee,ue.colorSpace,C.isXRRenderTarget===!0),Le=Ve(C);s.renderbufferStorageMultisample(s.RENDERBUFFER,Le,fe,C.width,C.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+se,s.RENDERBUFFER,k.__webglColorRenderbuffer[se])}s.bindRenderbuffer(s.RENDERBUFFER,null),C.depthBuffer&&(k.__webglDepthRenderbuffer=s.createRenderbuffer(),ie(k.__webglDepthRenderbuffer,C,!0)),t.bindFramebuffer(s.FRAMEBUFFER,null)}}if(X){t.bindTexture(s.TEXTURE_CUBE_MAP,Y.__webglTexture),me(s.TEXTURE_CUBE_MAP,M);for(let se=0;se<6;se++)if(M.mipmaps&&M.mipmaps.length>0)for(let ue=0;ue<M.mipmaps.length;ue++)J(k.__webglFramebuffer[se][ue],C,M,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+se,ue);else J(k.__webglFramebuffer[se],C,M,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+se,0);m(M)&&p(s.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(xe){for(let se=0,ue=Q.length;se<ue;se++){const Ke=Q[se],ee=n.get(Ke);t.bindTexture(s.TEXTURE_2D,ee.__webglTexture),me(s.TEXTURE_2D,Ke),J(k.__webglFramebuffer,C,Ke,s.COLOR_ATTACHMENT0+se,s.TEXTURE_2D,0),m(Ke)&&p(s.TEXTURE_2D)}t.unbindTexture()}else{let se=s.TEXTURE_2D;if((C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(se=C.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),t.bindTexture(se,Y.__webglTexture),me(se,M),M.mipmaps&&M.mipmaps.length>0)for(let ue=0;ue<M.mipmaps.length;ue++)J(k.__webglFramebuffer[ue],C,M,s.COLOR_ATTACHMENT0,se,ue);else J(k.__webglFramebuffer,C,M,s.COLOR_ATTACHMENT0,se,0);m(M)&&p(se),t.unbindTexture()}C.depthBuffer&&Ue(C)}function lt(C){const M=C.textures;for(let k=0,Y=M.length;k<Y;k++){const Q=M[k];if(m(Q)){const X=C.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:s.TEXTURE_2D,xe=n.get(Q).__webglTexture;t.bindTexture(X,xe),p(X),t.unbindTexture()}}}const je=[],L=[];function sn(C){if(C.samples>0){if(Ye(C)===!1){const M=C.textures,k=C.width,Y=C.height;let Q=s.COLOR_BUFFER_BIT;const X=C.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,xe=n.get(C),se=M.length>1;if(se)for(let ue=0;ue<M.length;ue++)t.bindFramebuffer(s.FRAMEBUFFER,xe.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+ue,s.RENDERBUFFER,null),t.bindFramebuffer(s.FRAMEBUFFER,xe.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+ue,s.TEXTURE_2D,null,0);t.bindFramebuffer(s.READ_FRAMEBUFFER,xe.__webglMultisampledFramebuffer),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,xe.__webglFramebuffer);for(let ue=0;ue<M.length;ue++){if(C.resolveDepthBuffer&&(C.depthBuffer&&(Q|=s.DEPTH_BUFFER_BIT),C.stencilBuffer&&C.resolveStencilBuffer&&(Q|=s.STENCIL_BUFFER_BIT)),se){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,xe.__webglColorRenderbuffer[ue]);const Ke=n.get(M[ue]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,Ke,0)}s.blitFramebuffer(0,0,k,Y,0,0,k,Y,Q,s.NEAREST),c===!0&&(je.length=0,L.length=0,je.push(s.COLOR_ATTACHMENT0+ue),C.depthBuffer&&C.resolveDepthBuffer===!1&&(je.push(X),L.push(X),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,L)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,je))}if(t.bindFramebuffer(s.READ_FRAMEBUFFER,null),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),se)for(let ue=0;ue<M.length;ue++){t.bindFramebuffer(s.FRAMEBUFFER,xe.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+ue,s.RENDERBUFFER,xe.__webglColorRenderbuffer[ue]);const Ke=n.get(M[ue]).__webglTexture;t.bindFramebuffer(s.FRAMEBUFFER,xe.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+ue,s.TEXTURE_2D,Ke,0)}t.bindFramebuffer(s.DRAW_FRAMEBUFFER,xe.__webglMultisampledFramebuffer)}else if(C.depthBuffer&&C.resolveDepthBuffer===!1&&c){const M=C.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[M])}}}function Ve(C){return Math.min(i.maxSamples,C.samples)}function Ye(C){const M=n.get(C);return C.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function Pe(C){const M=a.render.frame;h.get(C)!==M&&(h.set(C,M),C.update())}function dt(C,M){const k=C.colorSpace,Y=C.format,Q=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||k!==Bt&&k!==Mi&&($e.getTransfer(k)===ft?(Y!==xn||Q!==ui)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",k)),M}function Ne(C){return typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement?(l.width=C.naturalWidth||C.width,l.height=C.naturalHeight||C.height):typeof VideoFrame<"u"&&C instanceof VideoFrame?(l.width=C.displayWidth,l.height=C.displayHeight):(l.width=C.width,l.height=C.height),l}this.allocateTextureUnit=U,this.resetTextureUnits=w,this.setTexture2D=B,this.setTexture2DArray=K,this.setTexture3D=G,this.setTextureCube=Z,this.rebindTextures=Te,this.setupRenderTarget=qe,this.updateRenderTargetMipmap=lt,this.updateMultisampleRenderTarget=sn,this.setupDepthRenderbuffer=Ue,this.setupFrameBufferTexture=J,this.useMultisampledRTT=Ye}function D_(s,e){function t(n,i=Mi){let r;const a=$e.getTransfer(i);if(n===ui)return s.UNSIGNED_BYTE;if(n===al)return s.UNSIGNED_SHORT_4_4_4_4;if(n===ol)return s.UNSIGNED_SHORT_5_5_5_1;if(n===ru)return s.UNSIGNED_INT_5_9_9_9_REV;if(n===iu)return s.BYTE;if(n===su)return s.SHORT;if(n===yr)return s.UNSIGNED_SHORT;if(n===rl)return s.INT;if(n===qi)return s.UNSIGNED_INT;if(n===Rn)return s.FLOAT;if(n===Cr)return s.HALF_FLOAT;if(n===au)return s.ALPHA;if(n===ou)return s.RGB;if(n===xn)return s.RGBA;if(n===cu)return s.LUMINANCE;if(n===lu)return s.LUMINANCE_ALPHA;if(n===Ms)return s.DEPTH_COMPONENT;if(n===Is)return s.DEPTH_STENCIL;if(n===cl)return s.RED;if(n===ll)return s.RED_INTEGER;if(n===hu)return s.RG;if(n===hl)return s.RG_INTEGER;if(n===dl)return s.RGBA_INTEGER;if(n===Ma||n===Sa||n===wa||n===Ea)if(a===ft)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Ma)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Sa)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===wa)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Ea)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Ma)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Sa)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===wa)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Ea)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===vc||n===xc||n===yc||n===Mc)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===vc)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===xc)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===yc)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Mc)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Sc||n===wc||n===Ec)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Sc||n===wc)return a===ft?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Ec)return a===ft?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Ac||n===Tc||n===Rc||n===Cc||n===Pc||n===Lc||n===Ic||n===Dc||n===Nc||n===Uc||n===Fc||n===kc||n===Oc||n===Bc)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Ac)return a===ft?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Tc)return a===ft?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Rc)return a===ft?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Cc)return a===ft?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Pc)return a===ft?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Lc)return a===ft?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Ic)return a===ft?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Dc)return a===ft?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Nc)return a===ft?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Uc)return a===ft?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Fc)return a===ft?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===kc)return a===ft?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Oc)return a===ft?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Bc)return a===ft?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Aa||n===zc||n===Hc)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===Aa)return a===ft?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===zc)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Hc)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===du||n===Gc||n===Vc||n===Wc)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===Aa)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Gc)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Vc)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Wc)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Ls?s.UNSIGNED_INT_24_8:s[n]!==void 0?s[n]:null}return{convert:t}}class N_ extends Xt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Nt extends pt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const U_={type:"move"};class Po{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Nt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Nt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new R,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new R),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Nt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new R,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new R),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,r=null,a=null;const o=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){a=!0;for(const b of e.hand.values()){const m=t.getJointPose(b,n),p=this._getHandJoint(l,b);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const h=l.joints["index-finger-tip"],d=l.joints["thumb-tip"],u=h.position.distanceTo(d.position),f=.02,g=.005;l.inputState.pinching&&u>f+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&u<=f-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));o!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&r!==null&&(i=r),i!==null&&(o.matrix.fromArray(i.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,i.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(i.linearVelocity)):o.hasLinearVelocity=!1,i.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(i.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(U_)))}return o!==null&&(o.visible=i!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new Nt;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}const F_=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,k_=`
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

}`;class O_{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,n){if(this.texture===null){const i=new Rt,r=e.properties.get(i);r.__webglTexture=t.texture,(t.depthNear!=n.depthNear||t.depthFar!=n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new Ln({vertexShader:F_,fragmentShader:k_,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new st(new Pi(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class B_ extends Bs{constructor(e,t){super();const n=this;let i=null,r=1,a=null,o="local-floor",c=1,l=null,h=null,d=null,u=null,f=null,g=null;const b=new O_,m=t.getContextAttributes();let p=null,x=null;const v=[],y=[],A=new Se;let T=null;const S=new Xt;S.layers.enable(1),S.viewport=new et;const P=new Xt;P.layers.enable(2),P.viewport=new et;const F=[S,P],_=new N_;_.layers.enable(1),_.layers.enable(2);let w=null,U=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(j){let J=v[j];return J===void 0&&(J=new Po,v[j]=J),J.getTargetRaySpace()},this.getControllerGrip=function(j){let J=v[j];return J===void 0&&(J=new Po,v[j]=J),J.getGripSpace()},this.getHand=function(j){let J=v[j];return J===void 0&&(J=new Po,v[j]=J),J.getHandSpace()};function O(j){const J=y.indexOf(j.inputSource);if(J===-1)return;const ie=v[J];ie!==void 0&&(ie.update(j.inputSource,j.frame,l||a),ie.dispatchEvent({type:j.type,data:j.inputSource}))}function B(){i.removeEventListener("select",O),i.removeEventListener("selectstart",O),i.removeEventListener("selectend",O),i.removeEventListener("squeeze",O),i.removeEventListener("squeezestart",O),i.removeEventListener("squeezeend",O),i.removeEventListener("end",B),i.removeEventListener("inputsourceschange",K);for(let j=0;j<v.length;j++){const J=y[j];J!==null&&(y[j]=null,v[j].disconnect(J))}w=null,U=null,b.reset(),e.setRenderTarget(p),f=null,u=null,d=null,i=null,x=null,Ae.stop(),n.isPresenting=!1,e.setPixelRatio(T),e.setSize(A.width,A.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(j){r=j,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(j){o=j,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||a},this.setReferenceSpace=function(j){l=j},this.getBaseLayer=function(){return u!==null?u:f},this.getBinding=function(){return d},this.getFrame=function(){return g},this.getSession=function(){return i},this.setSession=async function(j){if(i=j,i!==null){if(p=e.getRenderTarget(),i.addEventListener("select",O),i.addEventListener("selectstart",O),i.addEventListener("selectend",O),i.addEventListener("squeeze",O),i.addEventListener("squeezestart",O),i.addEventListener("squeezeend",O),i.addEventListener("end",B),i.addEventListener("inputsourceschange",K),m.xrCompatible!==!0&&await t.makeXRCompatible(),T=e.getPixelRatio(),e.getSize(A),i.renderState.layers===void 0){const J={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(i,t,J),i.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),x=new ji(f.framebufferWidth,f.framebufferHeight,{format:xn,type:ui,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil})}else{let J=null,ie=null,re=null;m.depth&&(re=m.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,J=m.stencil?Is:Ms,ie=m.stencil?Ls:qi);const Ue={colorFormat:t.RGBA8,depthFormat:re,scaleFactor:r};d=new XRWebGLBinding(i,t),u=d.createProjectionLayer(Ue),i.updateRenderState({layers:[u]}),e.setPixelRatio(1),e.setSize(u.textureWidth,u.textureHeight,!1),x=new ji(u.textureWidth,u.textureHeight,{format:xn,type:ui,depthTexture:new Au(u.textureWidth,u.textureHeight,ie,void 0,void 0,void 0,void 0,void 0,void 0,J),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1})}x.isXRRenderTarget=!0,this.setFoveation(c),l=null,a=await i.requestReferenceSpace(o),Ae.setContext(i),Ae.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return b.getDepthTexture()};function K(j){for(let J=0;J<j.removed.length;J++){const ie=j.removed[J],re=y.indexOf(ie);re>=0&&(y[re]=null,v[re].disconnect(ie))}for(let J=0;J<j.added.length;J++){const ie=j.added[J];let re=y.indexOf(ie);if(re===-1){for(let Te=0;Te<v.length;Te++)if(Te>=y.length){y.push(ie),re=Te;break}else if(y[Te]===null){y[Te]=ie,re=Te;break}if(re===-1)break}const Ue=v[re];Ue&&Ue.connect(ie)}}const G=new R,Z=new R;function W(j,J,ie){G.setFromMatrixPosition(J.matrixWorld),Z.setFromMatrixPosition(ie.matrixWorld);const re=G.distanceTo(Z),Ue=J.projectionMatrix.elements,Te=ie.projectionMatrix.elements,qe=Ue[14]/(Ue[10]-1),lt=Ue[14]/(Ue[10]+1),je=(Ue[9]+1)/Ue[5],L=(Ue[9]-1)/Ue[5],sn=(Ue[8]-1)/Ue[0],Ve=(Te[8]+1)/Te[0],Ye=qe*sn,Pe=qe*Ve,dt=re/(-sn+Ve),Ne=dt*-sn;if(J.matrixWorld.decompose(j.position,j.quaternion,j.scale),j.translateX(Ne),j.translateZ(dt),j.matrixWorld.compose(j.position,j.quaternion,j.scale),j.matrixWorldInverse.copy(j.matrixWorld).invert(),Ue[10]===-1)j.projectionMatrix.copy(J.projectionMatrix),j.projectionMatrixInverse.copy(J.projectionMatrixInverse);else{const C=qe+dt,M=lt+dt,k=Ye-Ne,Y=Pe+(re-Ne),Q=je*lt/M*C,X=L*lt/M*C;j.projectionMatrix.makePerspective(k,Y,Q,X,C,M),j.projectionMatrixInverse.copy(j.projectionMatrix).invert()}}function ce(j,J){J===null?j.matrixWorld.copy(j.matrix):j.matrixWorld.multiplyMatrices(J.matrixWorld,j.matrix),j.matrixWorldInverse.copy(j.matrixWorld).invert()}this.updateCamera=function(j){if(i===null)return;let J=j.near,ie=j.far;b.texture!==null&&(b.depthNear>0&&(J=b.depthNear),b.depthFar>0&&(ie=b.depthFar)),_.near=P.near=S.near=J,_.far=P.far=S.far=ie,(w!==_.near||U!==_.far)&&(i.updateRenderState({depthNear:_.near,depthFar:_.far}),w=_.near,U=_.far);const re=j.parent,Ue=_.cameras;ce(_,re);for(let Te=0;Te<Ue.length;Te++)ce(Ue[Te],re);Ue.length===2?W(_,S,P):_.projectionMatrix.copy(S.projectionMatrix),le(j,_,re)};function le(j,J,ie){ie===null?j.matrix.copy(J.matrixWorld):(j.matrix.copy(ie.matrixWorld),j.matrix.invert(),j.matrix.multiply(J.matrixWorld)),j.matrix.decompose(j.position,j.quaternion,j.scale),j.updateMatrixWorld(!0),j.projectionMatrix.copy(J.projectionMatrix),j.projectionMatrixInverse.copy(J.projectionMatrixInverse),j.isPerspectiveCamera&&(j.fov=Ds*2*Math.atan(1/j.projectionMatrix.elements[5]),j.zoom=1)}this.getCamera=function(){return _},this.getFoveation=function(){if(!(u===null&&f===null))return c},this.setFoveation=function(j){c=j,u!==null&&(u.fixedFoveation=j),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=j)},this.hasDepthSensing=function(){return b.texture!==null},this.getDepthSensingMesh=function(){return b.getMesh(_)};let me=null;function Ge(j,J){if(h=J.getViewerPose(l||a),g=J,h!==null){const ie=h.views;f!==null&&(e.setRenderTargetFramebuffer(x,f.framebuffer),e.setRenderTarget(x));let re=!1;ie.length!==_.cameras.length&&(_.cameras.length=0,re=!0);for(let Te=0;Te<ie.length;Te++){const qe=ie[Te];let lt=null;if(f!==null)lt=f.getViewport(qe);else{const L=d.getViewSubImage(u,qe);lt=L.viewport,Te===0&&(e.setRenderTargetTextures(x,L.colorTexture,u.ignoreDepthValues?void 0:L.depthStencilTexture),e.setRenderTarget(x))}let je=F[Te];je===void 0&&(je=new Xt,je.layers.enable(Te),je.viewport=new et,F[Te]=je),je.matrix.fromArray(qe.transform.matrix),je.matrix.decompose(je.position,je.quaternion,je.scale),je.projectionMatrix.fromArray(qe.projectionMatrix),je.projectionMatrixInverse.copy(je.projectionMatrix).invert(),je.viewport.set(lt.x,lt.y,lt.width,lt.height),Te===0&&(_.matrix.copy(je.matrix),_.matrix.decompose(_.position,_.quaternion,_.scale)),re===!0&&_.cameras.push(je)}const Ue=i.enabledFeatures;if(Ue&&Ue.includes("depth-sensing")){const Te=d.getDepthInformation(ie[0]);Te&&Te.isValid&&Te.texture&&b.init(e,Te,i.renderState)}}for(let ie=0;ie<v.length;ie++){const re=y[ie],Ue=v[ie];re!==null&&Ue!==void 0&&Ue.update(re,J,l||a)}me&&me(j,J),J.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:J}),g=null}const Ae=new Eu;Ae.setAnimationLoop(Ge),this.setAnimationLoop=function(j){me=j},this.dispose=function(){}}}const ki=new Jt,z_=new ve;function H_(s,e){function t(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,Mu(s)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function i(m,p,x,v,y){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(m,p):p.isMeshToonMaterial?(r(m,p),d(m,p)):p.isMeshPhongMaterial?(r(m,p),h(m,p)):p.isMeshStandardMaterial?(r(m,p),u(m,p),p.isMeshPhysicalMaterial&&f(m,p,y)):p.isMeshMatcapMaterial?(r(m,p),g(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),b(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(a(m,p),p.isLineDashedMaterial&&o(m,p)):p.isPointsMaterial?c(m,p,x,v):p.isSpriteMaterial?l(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,t(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===Qt&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,t(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===Qt&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,t(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,t(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const x=e.get(p),v=x.envMap,y=x.envMapRotation;v&&(m.envMap.value=v,ki.copy(y),ki.x*=-1,ki.y*=-1,ki.z*=-1,v.isCubeTexture&&v.isRenderTargetTexture===!1&&(ki.y*=-1,ki.z*=-1),m.envMapRotation.value.setFromMatrix4(z_.makeRotationFromEuler(ki)),m.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,m.aoMapTransform))}function a(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform))}function o(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function c(m,p,x,v){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*x,m.scale.value=v*.5,p.map&&(m.map.value=p.map,t(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function l(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function h(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function d(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function u(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function f(m,p,x){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Qt&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=x.texture,m.transmissionSamplerSize.value.set(x.width,x.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function b(m,p){const x=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(x.matrixWorld),m.nearDistance.value=x.shadow.camera.near,m.farDistance.value=x.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function G_(s,e,t,n){let i={},r={},a=[];const o=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function c(x,v){const y=v.program;n.uniformBlockBinding(x,y)}function l(x,v){let y=i[x.id];y===void 0&&(g(x),y=h(x),i[x.id]=y,x.addEventListener("dispose",m));const A=v.program;n.updateUBOMapping(x,A);const T=e.render.frame;r[x.id]!==T&&(u(x),r[x.id]=T)}function h(x){const v=d();x.__bindingPointIndex=v;const y=s.createBuffer(),A=x.__size,T=x.usage;return s.bindBuffer(s.UNIFORM_BUFFER,y),s.bufferData(s.UNIFORM_BUFFER,A,T),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,v,y),y}function d(){for(let x=0;x<o;x++)if(a.indexOf(x)===-1)return a.push(x),x;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(x){const v=i[x.id],y=x.uniforms,A=x.__cache;s.bindBuffer(s.UNIFORM_BUFFER,v);for(let T=0,S=y.length;T<S;T++){const P=Array.isArray(y[T])?y[T]:[y[T]];for(let F=0,_=P.length;F<_;F++){const w=P[F];if(f(w,T,F,A)===!0){const U=w.__offset,O=Array.isArray(w.value)?w.value:[w.value];let B=0;for(let K=0;K<O.length;K++){const G=O[K],Z=b(G);typeof G=="number"||typeof G=="boolean"?(w.__data[0]=G,s.bufferSubData(s.UNIFORM_BUFFER,U+B,w.__data)):G.isMatrix3?(w.__data[0]=G.elements[0],w.__data[1]=G.elements[1],w.__data[2]=G.elements[2],w.__data[3]=0,w.__data[4]=G.elements[3],w.__data[5]=G.elements[4],w.__data[6]=G.elements[5],w.__data[7]=0,w.__data[8]=G.elements[6],w.__data[9]=G.elements[7],w.__data[10]=G.elements[8],w.__data[11]=0):(G.toArray(w.__data,B),B+=Z.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,U,w.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function f(x,v,y,A){const T=x.value,S=v+"_"+y;if(A[S]===void 0)return typeof T=="number"||typeof T=="boolean"?A[S]=T:A[S]=T.clone(),!0;{const P=A[S];if(typeof T=="number"||typeof T=="boolean"){if(P!==T)return A[S]=T,!0}else if(P.equals(T)===!1)return P.copy(T),!0}return!1}function g(x){const v=x.uniforms;let y=0;const A=16;for(let S=0,P=v.length;S<P;S++){const F=Array.isArray(v[S])?v[S]:[v[S]];for(let _=0,w=F.length;_<w;_++){const U=F[_],O=Array.isArray(U.value)?U.value:[U.value];for(let B=0,K=O.length;B<K;B++){const G=O[B],Z=b(G),W=y%A,ce=W%Z.boundary,le=W+ce;y+=ce,le!==0&&A-le<Z.storage&&(y+=A-le),U.__data=new Float32Array(Z.storage/Float32Array.BYTES_PER_ELEMENT),U.__offset=y,y+=Z.storage}}}const T=y%A;return T>0&&(y+=A-T),x.__size=y,x.__cache={},this}function b(x){const v={boundary:0,storage:0};return typeof x=="number"||typeof x=="boolean"?(v.boundary=4,v.storage=4):x.isVector2?(v.boundary=8,v.storage=8):x.isVector3||x.isColor?(v.boundary=16,v.storage=12):x.isVector4?(v.boundary=16,v.storage=16):x.isMatrix3?(v.boundary=48,v.storage=48):x.isMatrix4?(v.boundary=64,v.storage=64):x.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",x),v}function m(x){const v=x.target;v.removeEventListener("dispose",m);const y=a.indexOf(v.__bindingPointIndex);a.splice(y,1),s.deleteBuffer(i[v.id]),delete i[v.id],delete r[v.id]}function p(){for(const x in i)s.deleteBuffer(i[x]);a=[],i={},r={}}return{bind:c,update:l,dispose:p}}class V_{constructor(e={}){const{canvas:t=Pp(),context:n=null,depth:i=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:d=!1}=e;this.isWebGLRenderer=!0;let u;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");u=n.getContextAttributes().alpha}else u=a;const f=new Uint32Array(4),g=new Int32Array(4);let b=null,m=null;const p=[],x=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=kt,this.toneMapping=Ti,this.toneMappingExposure=1;const v=this;let y=!1,A=0,T=0,S=null,P=-1,F=null;const _=new et,w=new et;let U=null;const O=new we(0);let B=0,K=t.width,G=t.height,Z=1,W=null,ce=null;const le=new et(0,0,K,G),me=new et(0,0,K,G);let Ge=!1;const Ae=new pl;let j=!1,J=!1;const ie=new ve,re=new ve,Ue=new R,Te=new et,qe={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let lt=!1;function je(){return S===null?Z:1}let L=n;function sn(E,D){return t.getContext(E,D)}try{const E={alpha:!0,depth:i,stencil:r,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:d};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${sl}`),t.addEventListener("webglcontextlost",$,!1),t.addEventListener("webglcontextrestored",ae,!1),t.addEventListener("webglcontextcreationerror",de,!1),L===null){const D="webgl2";if(L=sn(D,E),L===null)throw sn(D)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(E){throw console.error("THREE.WebGLRenderer: "+E.message),E}let Ve,Ye,Pe,dt,Ne,C,M,k,Y,Q,X,xe,se,ue,Ke,ee,fe,Le,Ie,pe,We,Fe,ht,I;function he(){Ve=new Y0(L),Ve.init(),Fe=new D_(L,Ve),Ye=new G0(L,Ve,e,Fe),Pe=new P_(L),Ye.reverseDepthBuffer&&Pe.buffers.depth.setReversed(!0),dt=new Q0(L),Ne=new m_,C=new I_(L,Ve,Pe,Ne,Ye,Fe,dt),M=new W0(v),k=new X0(v),Y=new sm(L),ht=new z0(L,Y),Q=new K0(L,Y,dt,ht),X=new Z0(L,Q,Y,dt),Ie=new J0(L,Ye,C),ee=new V0(Ne),xe=new p_(v,M,k,Ve,Ye,ht,ee),se=new H_(v,Ne),ue=new b_,Ke=new S_(Ve),Le=new B0(v,M,k,Pe,X,u,c),fe=new R_(v,X,Ye),I=new G_(L,dt,Ye,Pe),pe=new H0(L,Ve,dt),We=new $0(L,Ve,dt),dt.programs=xe.programs,v.capabilities=Ye,v.extensions=Ve,v.properties=Ne,v.renderLists=ue,v.shadowMap=fe,v.state=Pe,v.info=dt}he();const q=new B_(v,L);this.xr=q,this.getContext=function(){return L},this.getContextAttributes=function(){return L.getContextAttributes()},this.forceContextLoss=function(){const E=Ve.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){const E=Ve.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return Z},this.setPixelRatio=function(E){E!==void 0&&(Z=E,this.setSize(K,G,!1))},this.getSize=function(E){return E.set(K,G)},this.setSize=function(E,D,z=!0){if(q.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}K=E,G=D,t.width=Math.floor(E*Z),t.height=Math.floor(D*Z),z===!0&&(t.style.width=E+"px",t.style.height=D+"px"),this.setViewport(0,0,E,D)},this.getDrawingBufferSize=function(E){return E.set(K*Z,G*Z).floor()},this.setDrawingBufferSize=function(E,D,z){K=E,G=D,Z=z,t.width=Math.floor(E*z),t.height=Math.floor(D*z),this.setViewport(0,0,E,D)},this.getCurrentViewport=function(E){return E.copy(_)},this.getViewport=function(E){return E.copy(le)},this.setViewport=function(E,D,z,H){E.isVector4?le.set(E.x,E.y,E.z,E.w):le.set(E,D,z,H),Pe.viewport(_.copy(le).multiplyScalar(Z).round())},this.getScissor=function(E){return E.copy(me)},this.setScissor=function(E,D,z,H){E.isVector4?me.set(E.x,E.y,E.z,E.w):me.set(E,D,z,H),Pe.scissor(w.copy(me).multiplyScalar(Z).round())},this.getScissorTest=function(){return Ge},this.setScissorTest=function(E){Pe.setScissorTest(Ge=E)},this.setOpaqueSort=function(E){W=E},this.setTransparentSort=function(E){ce=E},this.getClearColor=function(E){return E.copy(Le.getClearColor())},this.setClearColor=function(){Le.setClearColor.apply(Le,arguments)},this.getClearAlpha=function(){return Le.getClearAlpha()},this.setClearAlpha=function(){Le.setClearAlpha.apply(Le,arguments)},this.clear=function(E=!0,D=!0,z=!0){let H=0;if(E){let N=!1;if(S!==null){const te=S.texture.format;N=te===dl||te===hl||te===ll}if(N){const te=S.texture.type,oe=te===ui||te===qi||te===yr||te===Ls||te===al||te===ol,ge=Le.getClearColor(),be=Le.getClearAlpha(),Ee=ge.r,Re=ge.g,ye=ge.b;oe?(f[0]=Ee,f[1]=Re,f[2]=ye,f[3]=be,L.clearBufferuiv(L.COLOR,0,f)):(g[0]=Ee,g[1]=Re,g[2]=ye,g[3]=be,L.clearBufferiv(L.COLOR,0,g))}else H|=L.COLOR_BUFFER_BIT}D&&(H|=L.DEPTH_BUFFER_BIT,L.clearDepth(this.capabilities.reverseDepthBuffer?0:1)),z&&(H|=L.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),L.clear(H)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",$,!1),t.removeEventListener("webglcontextrestored",ae,!1),t.removeEventListener("webglcontextcreationerror",de,!1),ue.dispose(),Ke.dispose(),Ne.dispose(),M.dispose(),k.dispose(),X.dispose(),ht.dispose(),I.dispose(),xe.dispose(),q.dispose(),q.removeEventListener("sessionstart",Ol),q.removeEventListener("sessionend",Bl),Li.stop()};function $(E){E.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),y=!0}function ae(){console.log("THREE.WebGLRenderer: Context Restored."),y=!1;const E=dt.autoReset,D=fe.enabled,z=fe.autoUpdate,H=fe.needsUpdate,N=fe.type;he(),dt.autoReset=E,fe.enabled=D,fe.autoUpdate=z,fe.needsUpdate=H,fe.type=N}function de(E){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function Xe(E){const D=E.target;D.removeEventListener("dispose",Xe),wt(D)}function wt(E){Zt(E),Ne.remove(E)}function Zt(E){const D=Ne.get(E).programs;D!==void 0&&(D.forEach(function(z){xe.releaseProgram(z)}),E.isShaderMaterial&&xe.releaseShaderCache(E))}this.renderBufferDirect=function(E,D,z,H,N,te){D===null&&(D=qe);const oe=N.isMesh&&N.matrixWorld.determinant()<0,ge=yf(E,D,z,H,N);Pe.setMaterial(H,oe);let be=z.index,Ee=1;if(H.wireframe===!0){if(be=Q.getWireframeAttribute(z),be===void 0)return;Ee=2}const Re=z.drawRange,ye=z.attributes.position;let rt=Re.start*Ee,ut=(Re.start+Re.count)*Ee;te!==null&&(rt=Math.max(rt,te.start*Ee),ut=Math.min(ut,(te.start+te.count)*Ee)),be!==null?(rt=Math.max(rt,0),ut=Math.min(ut,be.count)):ye!=null&&(rt=Math.max(rt,0),ut=Math.min(ut,ye.count));const bt=ut-rt;if(bt<0||bt===1/0)return;ht.setup(N,H,ge,z,be);let rn,nt=pe;if(be!==null&&(rn=Y.get(be),nt=We,nt.setIndex(rn)),N.isMesh)H.wireframe===!0?(Pe.setLineWidth(H.wireframeLinewidth*je()),nt.setMode(L.LINES)):nt.setMode(L.TRIANGLES);else if(N.isLine){let Me=H.linewidth;Me===void 0&&(Me=1),Pe.setLineWidth(Me*je()),N.isLineSegments?nt.setMode(L.LINES):N.isLineLoop?nt.setMode(L.LINE_LOOP):nt.setMode(L.LINE_STRIP)}else N.isPoints?nt.setMode(L.POINTS):N.isSprite&&nt.setMode(L.TRIANGLES);if(N.isBatchedMesh)if(N._multiDrawInstances!==null)nt.renderMultiDrawInstances(N._multiDrawStarts,N._multiDrawCounts,N._multiDrawCount,N._multiDrawInstances);else if(Ve.get("WEBGL_multi_draw"))nt.renderMultiDraw(N._multiDrawStarts,N._multiDrawCounts,N._multiDrawCount);else{const Me=N._multiDrawStarts,Ut=N._multiDrawCounts,it=N._multiDrawCount,Mn=be?Y.get(be).bytesPerElement:1,Qi=Ne.get(H).currentProgram.getUniforms();for(let an=0;an<it;an++)Qi.setValue(L,"_gl_DrawID",an),nt.render(Me[an]/Mn,Ut[an])}else if(N.isInstancedMesh)nt.renderInstances(rt,bt,N.count);else if(z.isInstancedBufferGeometry){const Me=z._maxInstanceCount!==void 0?z._maxInstanceCount:1/0,Ut=Math.min(z.instanceCount,Me);nt.renderInstances(rt,bt,Ut)}else nt.render(rt,bt)};function Je(E,D,z){E.transparent===!0&&E.side===vn&&E.forceSinglePass===!1?(E.side=Qt,E.needsUpdate=!0,Ir(E,D,z),E.side=di,E.needsUpdate=!0,Ir(E,D,z),E.side=vn):Ir(E,D,z)}this.compile=function(E,D,z=null){z===null&&(z=E),m=Ke.get(z),m.init(D),x.push(m),z.traverseVisible(function(N){N.isLight&&N.layers.test(D.layers)&&(m.pushLight(N),N.castShadow&&m.pushShadow(N))}),E!==z&&E.traverseVisible(function(N){N.isLight&&N.layers.test(D.layers)&&(m.pushLight(N),N.castShadow&&m.pushShadow(N))}),m.setupLights();const H=new Set;return E.traverse(function(N){if(!(N.isMesh||N.isPoints||N.isLine||N.isSprite))return;const te=N.material;if(te)if(Array.isArray(te))for(let oe=0;oe<te.length;oe++){const ge=te[oe];Je(ge,z,N),H.add(ge)}else Je(te,z,N),H.add(te)}),x.pop(),m=null,H},this.compileAsync=function(E,D,z=null){const H=this.compile(E,D,z);return new Promise(N=>{function te(){if(H.forEach(function(oe){Ne.get(oe).currentProgram.isReady()&&H.delete(oe)}),H.size===0){N(E);return}setTimeout(te,10)}Ve.get("KHR_parallel_shader_compile")!==null?te():setTimeout(te,10)})};let en=null;function Xn(E){en&&en(E)}function Ol(){Li.stop()}function Bl(){Li.start()}const Li=new Eu;Li.setAnimationLoop(Xn),typeof self<"u"&&Li.setContext(self),this.setAnimationLoop=function(E){en=E,q.setAnimationLoop(E),E===null?Li.stop():Li.start()},q.addEventListener("sessionstart",Ol),q.addEventListener("sessionend",Bl),this.render=function(E,D){if(D!==void 0&&D.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(y===!0)return;if(E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),D.parent===null&&D.matrixWorldAutoUpdate===!0&&D.updateMatrixWorld(),q.enabled===!0&&q.isPresenting===!0&&(q.cameraAutoUpdate===!0&&q.updateCamera(D),D=q.getCamera()),E.isScene===!0&&E.onBeforeRender(v,E,D,S),m=Ke.get(E,x.length),m.init(D),x.push(m),re.multiplyMatrices(D.projectionMatrix,D.matrixWorldInverse),Ae.setFromProjectionMatrix(re),J=this.localClippingEnabled,j=ee.init(this.clippingPlanes,J),b=ue.get(E,p.length),b.init(),p.push(b),q.enabled===!0&&q.isPresenting===!0){const te=v.xr.getDepthSensingMesh();te!==null&&Qa(te,D,-1/0,v.sortObjects)}Qa(E,D,0,v.sortObjects),b.finish(),v.sortObjects===!0&&b.sort(W,ce),lt=q.enabled===!1||q.isPresenting===!1||q.hasDepthSensing()===!1,lt&&Le.addToRenderList(b,E),this.info.render.frame++,j===!0&&ee.beginShadows();const z=m.state.shadowsArray;fe.render(z,E,D),j===!0&&ee.endShadows(),this.info.autoReset===!0&&this.info.reset();const H=b.opaque,N=b.transmissive;if(m.setupLights(),D.isArrayCamera){const te=D.cameras;if(N.length>0)for(let oe=0,ge=te.length;oe<ge;oe++){const be=te[oe];Hl(H,N,E,be)}lt&&Le.render(E);for(let oe=0,ge=te.length;oe<ge;oe++){const be=te[oe];zl(b,E,be,be.viewport)}}else N.length>0&&Hl(H,N,E,D),lt&&Le.render(E),zl(b,E,D);S!==null&&(C.updateMultisampleRenderTarget(S),C.updateRenderTargetMipmap(S)),E.isScene===!0&&E.onAfterRender(v,E,D),ht.resetDefaultState(),P=-1,F=null,x.pop(),x.length>0?(m=x[x.length-1],j===!0&&ee.setGlobalState(v.clippingPlanes,m.state.camera)):m=null,p.pop(),p.length>0?b=p[p.length-1]:b=null};function Qa(E,D,z,H){if(E.visible===!1)return;if(E.layers.test(D.layers)){if(E.isGroup)z=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(D);else if(E.isLight)m.pushLight(E),E.castShadow&&m.pushShadow(E);else if(E.isSprite){if(!E.frustumCulled||Ae.intersectsSprite(E)){H&&Te.setFromMatrixPosition(E.matrixWorld).applyMatrix4(re);const oe=X.update(E),ge=E.material;ge.visible&&b.push(E,oe,ge,z,Te.z,null)}}else if((E.isMesh||E.isLine||E.isPoints)&&(!E.frustumCulled||Ae.intersectsObject(E))){const oe=X.update(E),ge=E.material;if(H&&(E.boundingSphere!==void 0?(E.boundingSphere===null&&E.computeBoundingSphere(),Te.copy(E.boundingSphere.center)):(oe.boundingSphere===null&&oe.computeBoundingSphere(),Te.copy(oe.boundingSphere.center)),Te.applyMatrix4(E.matrixWorld).applyMatrix4(re)),Array.isArray(ge)){const be=oe.groups;for(let Ee=0,Re=be.length;Ee<Re;Ee++){const ye=be[Ee],rt=ge[ye.materialIndex];rt&&rt.visible&&b.push(E,oe,rt,z,Te.z,ye)}}else ge.visible&&b.push(E,oe,ge,z,Te.z,null)}}const te=E.children;for(let oe=0,ge=te.length;oe<ge;oe++)Qa(te[oe],D,z,H)}function zl(E,D,z,H){const N=E.opaque,te=E.transmissive,oe=E.transparent;m.setupLightsView(z),j===!0&&ee.setGlobalState(v.clippingPlanes,z),H&&Pe.viewport(_.copy(H)),N.length>0&&Lr(N,D,z),te.length>0&&Lr(te,D,z),oe.length>0&&Lr(oe,D,z),Pe.buffers.depth.setTest(!0),Pe.buffers.depth.setMask(!0),Pe.buffers.color.setMask(!0),Pe.setPolygonOffset(!1)}function Hl(E,D,z,H){if((z.isScene===!0?z.overrideMaterial:null)!==null)return;m.state.transmissionRenderTarget[H.id]===void 0&&(m.state.transmissionRenderTarget[H.id]=new ji(1,1,{generateMipmaps:!0,type:Ve.has("EXT_color_buffer_half_float")||Ve.has("EXT_color_buffer_float")?Cr:ui,minFilter:zn,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:$e.workingColorSpace}));const te=m.state.transmissionRenderTarget[H.id],oe=H.viewport||_;te.setSize(oe.z,oe.w);const ge=v.getRenderTarget();v.setRenderTarget(te),v.getClearColor(O),B=v.getClearAlpha(),B<1&&v.setClearColor(16777215,.5),v.clear(),lt&&Le.render(z);const be=v.toneMapping;v.toneMapping=Ti;const Ee=H.viewport;if(H.viewport!==void 0&&(H.viewport=void 0),m.setupLightsView(H),j===!0&&ee.setGlobalState(v.clippingPlanes,H),Lr(E,z,H),C.updateMultisampleRenderTarget(te),C.updateRenderTargetMipmap(te),Ve.has("WEBGL_multisampled_render_to_texture")===!1){let Re=!1;for(let ye=0,rt=D.length;ye<rt;ye++){const ut=D[ye],bt=ut.object,rn=ut.geometry,nt=ut.material,Me=ut.group;if(nt.side===vn&&bt.layers.test(H.layers)){const Ut=nt.side;nt.side=Qt,nt.needsUpdate=!0,Gl(bt,z,H,rn,nt,Me),nt.side=Ut,nt.needsUpdate=!0,Re=!0}}Re===!0&&(C.updateMultisampleRenderTarget(te),C.updateRenderTargetMipmap(te))}v.setRenderTarget(ge),v.setClearColor(O,B),Ee!==void 0&&(H.viewport=Ee),v.toneMapping=be}function Lr(E,D,z){const H=D.isScene===!0?D.overrideMaterial:null;for(let N=0,te=E.length;N<te;N++){const oe=E[N],ge=oe.object,be=oe.geometry,Ee=H===null?oe.material:H,Re=oe.group;ge.layers.test(z.layers)&&Gl(ge,D,z,be,Ee,Re)}}function Gl(E,D,z,H,N,te){E.onBeforeRender(v,D,z,H,N,te),E.modelViewMatrix.multiplyMatrices(z.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),N.onBeforeRender(v,D,z,H,E,te),N.transparent===!0&&N.side===vn&&N.forceSinglePass===!1?(N.side=Qt,N.needsUpdate=!0,v.renderBufferDirect(z,D,H,N,E,te),N.side=di,N.needsUpdate=!0,v.renderBufferDirect(z,D,H,N,E,te),N.side=vn):v.renderBufferDirect(z,D,H,N,E,te),E.onAfterRender(v,D,z,H,N,te)}function Ir(E,D,z){D.isScene!==!0&&(D=qe);const H=Ne.get(E),N=m.state.lights,te=m.state.shadowsArray,oe=N.state.version,ge=xe.getParameters(E,N.state,te,D,z),be=xe.getProgramCacheKey(ge);let Ee=H.programs;H.environment=E.isMeshStandardMaterial?D.environment:null,H.fog=D.fog,H.envMap=(E.isMeshStandardMaterial?k:M).get(E.envMap||H.environment),H.envMapRotation=H.environment!==null&&E.envMap===null?D.environmentRotation:E.envMapRotation,Ee===void 0&&(E.addEventListener("dispose",Xe),Ee=new Map,H.programs=Ee);let Re=Ee.get(be);if(Re!==void 0){if(H.currentProgram===Re&&H.lightsStateVersion===oe)return Wl(E,ge),Re}else ge.uniforms=xe.getUniforms(E),E.onBeforeCompile(ge,v),Re=xe.acquireProgram(ge,be),Ee.set(be,Re),H.uniforms=ge.uniforms;const ye=H.uniforms;return(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(ye.clippingPlanes=ee.uniform),Wl(E,ge),H.needsLights=Sf(E),H.lightsStateVersion=oe,H.needsLights&&(ye.ambientLightColor.value=N.state.ambient,ye.lightProbe.value=N.state.probe,ye.directionalLights.value=N.state.directional,ye.directionalLightShadows.value=N.state.directionalShadow,ye.spotLights.value=N.state.spot,ye.spotLightShadows.value=N.state.spotShadow,ye.rectAreaLights.value=N.state.rectArea,ye.ltc_1.value=N.state.rectAreaLTC1,ye.ltc_2.value=N.state.rectAreaLTC2,ye.pointLights.value=N.state.point,ye.pointLightShadows.value=N.state.pointShadow,ye.hemisphereLights.value=N.state.hemi,ye.directionalShadowMap.value=N.state.directionalShadowMap,ye.directionalShadowMatrix.value=N.state.directionalShadowMatrix,ye.spotShadowMap.value=N.state.spotShadowMap,ye.spotLightMatrix.value=N.state.spotLightMatrix,ye.spotLightMap.value=N.state.spotLightMap,ye.pointShadowMap.value=N.state.pointShadowMap,ye.pointShadowMatrix.value=N.state.pointShadowMatrix),H.currentProgram=Re,H.uniformsList=null,Re}function Vl(E){if(E.uniformsList===null){const D=E.currentProgram.getUniforms();E.uniformsList=Ra.seqWithValue(D.seq,E.uniforms)}return E.uniformsList}function Wl(E,D){const z=Ne.get(E);z.outputColorSpace=D.outputColorSpace,z.batching=D.batching,z.batchingColor=D.batchingColor,z.instancing=D.instancing,z.instancingColor=D.instancingColor,z.instancingMorph=D.instancingMorph,z.skinning=D.skinning,z.morphTargets=D.morphTargets,z.morphNormals=D.morphNormals,z.morphColors=D.morphColors,z.morphTargetsCount=D.morphTargetsCount,z.numClippingPlanes=D.numClippingPlanes,z.numIntersection=D.numClipIntersection,z.vertexAlphas=D.vertexAlphas,z.vertexTangents=D.vertexTangents,z.toneMapping=D.toneMapping}function yf(E,D,z,H,N){D.isScene!==!0&&(D=qe),C.resetTextureUnits();const te=D.fog,oe=H.isMeshStandardMaterial?D.environment:null,ge=S===null?v.outputColorSpace:S.isXRRenderTarget===!0?S.texture.colorSpace:Bt,be=(H.isMeshStandardMaterial?k:M).get(H.envMap||oe),Ee=H.vertexColors===!0&&!!z.attributes.color&&z.attributes.color.itemSize===4,Re=!!z.attributes.tangent&&(!!H.normalMap||H.anisotropy>0),ye=!!z.morphAttributes.position,rt=!!z.morphAttributes.normal,ut=!!z.morphAttributes.color;let bt=Ti;H.toneMapped&&(S===null||S.isXRRenderTarget===!0)&&(bt=v.toneMapping);const rn=z.morphAttributes.position||z.morphAttributes.normal||z.morphAttributes.color,nt=rn!==void 0?rn.length:0,Me=Ne.get(H),Ut=m.state.lights;if(j===!0&&(J===!0||E!==F)){const fn=E===F&&H.id===P;ee.setState(H,E,fn)}let it=!1;H.version===Me.__version?(Me.needsLights&&Me.lightsStateVersion!==Ut.state.version||Me.outputColorSpace!==ge||N.isBatchedMesh&&Me.batching===!1||!N.isBatchedMesh&&Me.batching===!0||N.isBatchedMesh&&Me.batchingColor===!0&&N.colorTexture===null||N.isBatchedMesh&&Me.batchingColor===!1&&N.colorTexture!==null||N.isInstancedMesh&&Me.instancing===!1||!N.isInstancedMesh&&Me.instancing===!0||N.isSkinnedMesh&&Me.skinning===!1||!N.isSkinnedMesh&&Me.skinning===!0||N.isInstancedMesh&&Me.instancingColor===!0&&N.instanceColor===null||N.isInstancedMesh&&Me.instancingColor===!1&&N.instanceColor!==null||N.isInstancedMesh&&Me.instancingMorph===!0&&N.morphTexture===null||N.isInstancedMesh&&Me.instancingMorph===!1&&N.morphTexture!==null||Me.envMap!==be||H.fog===!0&&Me.fog!==te||Me.numClippingPlanes!==void 0&&(Me.numClippingPlanes!==ee.numPlanes||Me.numIntersection!==ee.numIntersection)||Me.vertexAlphas!==Ee||Me.vertexTangents!==Re||Me.morphTargets!==ye||Me.morphNormals!==rt||Me.morphColors!==ut||Me.toneMapping!==bt||Me.morphTargetsCount!==nt)&&(it=!0):(it=!0,Me.__version=H.version);let Mn=Me.currentProgram;it===!0&&(Mn=Ir(H,D,N));let Qi=!1,an=!1,Ja=!1;const vt=Mn.getUniforms(),fi=Me.uniforms;if(Pe.useProgram(Mn.program)&&(Qi=!0,an=!0,Ja=!0),H.id!==P&&(P=H.id,an=!0),Qi||F!==E){Ye.reverseDepthBuffer?(ie.copy(E.projectionMatrix),Ip(ie),Dp(ie),vt.setValue(L,"projectionMatrix",ie)):vt.setValue(L,"projectionMatrix",E.projectionMatrix),vt.setValue(L,"viewMatrix",E.matrixWorldInverse);const fn=vt.map.cameraPosition;fn!==void 0&&fn.setValue(L,Ue.setFromMatrixPosition(E.matrixWorld)),Ye.logarithmicDepthBuffer&&vt.setValue(L,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),(H.isMeshPhongMaterial||H.isMeshToonMaterial||H.isMeshLambertMaterial||H.isMeshBasicMaterial||H.isMeshStandardMaterial||H.isShaderMaterial)&&vt.setValue(L,"isOrthographic",E.isOrthographicCamera===!0),F!==E&&(F=E,an=!0,Ja=!0)}if(N.isSkinnedMesh){vt.setOptional(L,N,"bindMatrix"),vt.setOptional(L,N,"bindMatrixInverse");const fn=N.skeleton;fn&&(fn.boneTexture===null&&fn.computeBoneTexture(),vt.setValue(L,"boneTexture",fn.boneTexture,C))}N.isBatchedMesh&&(vt.setOptional(L,N,"batchingTexture"),vt.setValue(L,"batchingTexture",N._matricesTexture,C),vt.setOptional(L,N,"batchingIdTexture"),vt.setValue(L,"batchingIdTexture",N._indirectTexture,C),vt.setOptional(L,N,"batchingColorTexture"),N._colorsTexture!==null&&vt.setValue(L,"batchingColorTexture",N._colorsTexture,C));const Za=z.morphAttributes;if((Za.position!==void 0||Za.normal!==void 0||Za.color!==void 0)&&Ie.update(N,z,Mn),(an||Me.receiveShadow!==N.receiveShadow)&&(Me.receiveShadow=N.receiveShadow,vt.setValue(L,"receiveShadow",N.receiveShadow)),H.isMeshGouraudMaterial&&H.envMap!==null&&(fi.envMap.value=be,fi.flipEnvMap.value=be.isCubeTexture&&be.isRenderTargetTexture===!1?-1:1),H.isMeshStandardMaterial&&H.envMap===null&&D.environment!==null&&(fi.envMapIntensity.value=D.environmentIntensity),an&&(vt.setValue(L,"toneMappingExposure",v.toneMappingExposure),Me.needsLights&&Mf(fi,Ja),te&&H.fog===!0&&se.refreshFogUniforms(fi,te),se.refreshMaterialUniforms(fi,H,Z,G,m.state.transmissionRenderTarget[E.id]),Ra.upload(L,Vl(Me),fi,C)),H.isShaderMaterial&&H.uniformsNeedUpdate===!0&&(Ra.upload(L,Vl(Me),fi,C),H.uniformsNeedUpdate=!1),H.isSpriteMaterial&&vt.setValue(L,"center",N.center),vt.setValue(L,"modelViewMatrix",N.modelViewMatrix),vt.setValue(L,"normalMatrix",N.normalMatrix),vt.setValue(L,"modelMatrix",N.matrixWorld),H.isShaderMaterial||H.isRawShaderMaterial){const fn=H.uniformsGroups;for(let eo=0,wf=fn.length;eo<wf;eo++){const ql=fn[eo];I.update(ql,Mn),I.bind(ql,Mn)}}return Mn}function Mf(E,D){E.ambientLightColor.needsUpdate=D,E.lightProbe.needsUpdate=D,E.directionalLights.needsUpdate=D,E.directionalLightShadows.needsUpdate=D,E.pointLights.needsUpdate=D,E.pointLightShadows.needsUpdate=D,E.spotLights.needsUpdate=D,E.spotLightShadows.needsUpdate=D,E.rectAreaLights.needsUpdate=D,E.hemisphereLights.needsUpdate=D}function Sf(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return A},this.getActiveMipmapLevel=function(){return T},this.getRenderTarget=function(){return S},this.setRenderTargetTextures=function(E,D,z){Ne.get(E.texture).__webglTexture=D,Ne.get(E.depthTexture).__webglTexture=z;const H=Ne.get(E);H.__hasExternalTextures=!0,H.__autoAllocateDepthBuffer=z===void 0,H.__autoAllocateDepthBuffer||Ve.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),H.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(E,D){const z=Ne.get(E);z.__webglFramebuffer=D,z.__useDefaultFramebuffer=D===void 0},this.setRenderTarget=function(E,D=0,z=0){S=E,A=D,T=z;let H=!0,N=null,te=!1,oe=!1;if(E){const be=Ne.get(E);if(be.__useDefaultFramebuffer!==void 0)Pe.bindFramebuffer(L.FRAMEBUFFER,null),H=!1;else if(be.__webglFramebuffer===void 0)C.setupRenderTarget(E);else if(be.__hasExternalTextures)C.rebindTextures(E,Ne.get(E.texture).__webglTexture,Ne.get(E.depthTexture).__webglTexture);else if(E.depthBuffer){const ye=E.depthTexture;if(be.__boundDepthTexture!==ye){if(ye!==null&&Ne.has(ye)&&(E.width!==ye.image.width||E.height!==ye.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");C.setupDepthRenderbuffer(E)}}const Ee=E.texture;(Ee.isData3DTexture||Ee.isDataArrayTexture||Ee.isCompressedArrayTexture)&&(oe=!0);const Re=Ne.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(Array.isArray(Re[D])?N=Re[D][z]:N=Re[D],te=!0):E.samples>0&&C.useMultisampledRTT(E)===!1?N=Ne.get(E).__webglMultisampledFramebuffer:Array.isArray(Re)?N=Re[z]:N=Re,_.copy(E.viewport),w.copy(E.scissor),U=E.scissorTest}else _.copy(le).multiplyScalar(Z).floor(),w.copy(me).multiplyScalar(Z).floor(),U=Ge;if(Pe.bindFramebuffer(L.FRAMEBUFFER,N)&&H&&Pe.drawBuffers(E,N),Pe.viewport(_),Pe.scissor(w),Pe.setScissorTest(U),te){const be=Ne.get(E.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_CUBE_MAP_POSITIVE_X+D,be.__webglTexture,z)}else if(oe){const be=Ne.get(E.texture),Ee=D||0;L.framebufferTextureLayer(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,be.__webglTexture,z||0,Ee)}P=-1},this.readRenderTargetPixels=function(E,D,z,H,N,te,oe){if(!(E&&E.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ge=Ne.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&oe!==void 0&&(ge=ge[oe]),ge){Pe.bindFramebuffer(L.FRAMEBUFFER,ge);try{const be=E.texture,Ee=be.format,Re=be.type;if(!Ye.textureFormatReadable(Ee)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Ye.textureTypeReadable(Re)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}D>=0&&D<=E.width-H&&z>=0&&z<=E.height-N&&L.readPixels(D,z,H,N,Fe.convert(Ee),Fe.convert(Re),te)}finally{const be=S!==null?Ne.get(S).__webglFramebuffer:null;Pe.bindFramebuffer(L.FRAMEBUFFER,be)}}},this.readRenderTargetPixelsAsync=async function(E,D,z,H,N,te,oe){if(!(E&&E.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let ge=Ne.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&oe!==void 0&&(ge=ge[oe]),ge){const be=E.texture,Ee=be.format,Re=be.type;if(!Ye.textureFormatReadable(Ee))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Ye.textureTypeReadable(Re))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(D>=0&&D<=E.width-H&&z>=0&&z<=E.height-N){Pe.bindFramebuffer(L.FRAMEBUFFER,ge);const ye=L.createBuffer();L.bindBuffer(L.PIXEL_PACK_BUFFER,ye),L.bufferData(L.PIXEL_PACK_BUFFER,te.byteLength,L.STREAM_READ),L.readPixels(D,z,H,N,Fe.convert(Ee),Fe.convert(Re),0);const rt=S!==null?Ne.get(S).__webglFramebuffer:null;Pe.bindFramebuffer(L.FRAMEBUFFER,rt);const ut=L.fenceSync(L.SYNC_GPU_COMMANDS_COMPLETE,0);return L.flush(),await Lp(L,ut,4),L.bindBuffer(L.PIXEL_PACK_BUFFER,ye),L.getBufferSubData(L.PIXEL_PACK_BUFFER,0,te),L.deleteBuffer(ye),L.deleteSync(ut),te}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(E,D=null,z=0){E.isTexture!==!0&&(Ta("WebGLRenderer: copyFramebufferToTexture function signature has changed."),D=arguments[0]||null,E=arguments[1]);const H=Math.pow(2,-z),N=Math.floor(E.image.width*H),te=Math.floor(E.image.height*H),oe=D!==null?D.x:0,ge=D!==null?D.y:0;C.setTexture2D(E,0),L.copyTexSubImage2D(L.TEXTURE_2D,z,0,0,oe,ge,N,te),Pe.unbindTexture()},this.copyTextureToTexture=function(E,D,z=null,H=null,N=0){E.isTexture!==!0&&(Ta("WebGLRenderer: copyTextureToTexture function signature has changed."),H=arguments[0]||null,E=arguments[1],D=arguments[2],N=arguments[3]||0,z=null);let te,oe,ge,be,Ee,Re;z!==null?(te=z.max.x-z.min.x,oe=z.max.y-z.min.y,ge=z.min.x,be=z.min.y):(te=E.image.width,oe=E.image.height,ge=0,be=0),H!==null?(Ee=H.x,Re=H.y):(Ee=0,Re=0);const ye=Fe.convert(D.format),rt=Fe.convert(D.type);C.setTexture2D(D,0),L.pixelStorei(L.UNPACK_FLIP_Y_WEBGL,D.flipY),L.pixelStorei(L.UNPACK_PREMULTIPLY_ALPHA_WEBGL,D.premultiplyAlpha),L.pixelStorei(L.UNPACK_ALIGNMENT,D.unpackAlignment);const ut=L.getParameter(L.UNPACK_ROW_LENGTH),bt=L.getParameter(L.UNPACK_IMAGE_HEIGHT),rn=L.getParameter(L.UNPACK_SKIP_PIXELS),nt=L.getParameter(L.UNPACK_SKIP_ROWS),Me=L.getParameter(L.UNPACK_SKIP_IMAGES),Ut=E.isCompressedTexture?E.mipmaps[N]:E.image;L.pixelStorei(L.UNPACK_ROW_LENGTH,Ut.width),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,Ut.height),L.pixelStorei(L.UNPACK_SKIP_PIXELS,ge),L.pixelStorei(L.UNPACK_SKIP_ROWS,be),E.isDataTexture?L.texSubImage2D(L.TEXTURE_2D,N,Ee,Re,te,oe,ye,rt,Ut.data):E.isCompressedTexture?L.compressedTexSubImage2D(L.TEXTURE_2D,N,Ee,Re,Ut.width,Ut.height,ye,Ut.data):L.texSubImage2D(L.TEXTURE_2D,N,Ee,Re,te,oe,ye,rt,Ut),L.pixelStorei(L.UNPACK_ROW_LENGTH,ut),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,bt),L.pixelStorei(L.UNPACK_SKIP_PIXELS,rn),L.pixelStorei(L.UNPACK_SKIP_ROWS,nt),L.pixelStorei(L.UNPACK_SKIP_IMAGES,Me),N===0&&D.generateMipmaps&&L.generateMipmap(L.TEXTURE_2D),Pe.unbindTexture()},this.copyTextureToTexture3D=function(E,D,z=null,H=null,N=0){E.isTexture!==!0&&(Ta("WebGLRenderer: copyTextureToTexture3D function signature has changed."),z=arguments[0]||null,H=arguments[1]||null,E=arguments[2],D=arguments[3],N=arguments[4]||0);let te,oe,ge,be,Ee,Re,ye,rt,ut;const bt=E.isCompressedTexture?E.mipmaps[N]:E.image;z!==null?(te=z.max.x-z.min.x,oe=z.max.y-z.min.y,ge=z.max.z-z.min.z,be=z.min.x,Ee=z.min.y,Re=z.min.z):(te=bt.width,oe=bt.height,ge=bt.depth,be=0,Ee=0,Re=0),H!==null?(ye=H.x,rt=H.y,ut=H.z):(ye=0,rt=0,ut=0);const rn=Fe.convert(D.format),nt=Fe.convert(D.type);let Me;if(D.isData3DTexture)C.setTexture3D(D,0),Me=L.TEXTURE_3D;else if(D.isDataArrayTexture||D.isCompressedArrayTexture)C.setTexture2DArray(D,0),Me=L.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}L.pixelStorei(L.UNPACK_FLIP_Y_WEBGL,D.flipY),L.pixelStorei(L.UNPACK_PREMULTIPLY_ALPHA_WEBGL,D.premultiplyAlpha),L.pixelStorei(L.UNPACK_ALIGNMENT,D.unpackAlignment);const Ut=L.getParameter(L.UNPACK_ROW_LENGTH),it=L.getParameter(L.UNPACK_IMAGE_HEIGHT),Mn=L.getParameter(L.UNPACK_SKIP_PIXELS),Qi=L.getParameter(L.UNPACK_SKIP_ROWS),an=L.getParameter(L.UNPACK_SKIP_IMAGES);L.pixelStorei(L.UNPACK_ROW_LENGTH,bt.width),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,bt.height),L.pixelStorei(L.UNPACK_SKIP_PIXELS,be),L.pixelStorei(L.UNPACK_SKIP_ROWS,Ee),L.pixelStorei(L.UNPACK_SKIP_IMAGES,Re),E.isDataTexture||E.isData3DTexture?L.texSubImage3D(Me,N,ye,rt,ut,te,oe,ge,rn,nt,bt.data):D.isCompressedArrayTexture?L.compressedTexSubImage3D(Me,N,ye,rt,ut,te,oe,ge,rn,bt.data):L.texSubImage3D(Me,N,ye,rt,ut,te,oe,ge,rn,nt,bt),L.pixelStorei(L.UNPACK_ROW_LENGTH,Ut),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,it),L.pixelStorei(L.UNPACK_SKIP_PIXELS,Mn),L.pixelStorei(L.UNPACK_SKIP_ROWS,Qi),L.pixelStorei(L.UNPACK_SKIP_IMAGES,an),N===0&&D.generateMipmaps&&L.generateMipmap(Me),Pe.unbindTexture()},this.initRenderTarget=function(E){Ne.get(E).__webglFramebuffer===void 0&&C.setupRenderTarget(E)},this.initTexture=function(E){E.isCubeTexture?C.setTextureCube(E,0):E.isData3DTexture?C.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?C.setTexture2DArray(E,0):C.setTexture2D(E,0),Pe.unbindTexture()},this.resetState=function(){A=0,T=0,S=null,Pe.reset(),ht.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ai}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=e===ul?"display-p3":"srgb",t.unpackColorSpace=$e.workingColorSpace===Ga?"display-p3":"srgb"}}class Lu extends pt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Jt,this.environmentIntensity=1,this.environmentRotation=new Jt,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class Iu{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=jc,this.updateRanges=[],this.version=0,this.uuid=Cn()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let i=0,r=this.stride;i<r;i++)this.array[e+i]=t.array[n+i];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Cn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Cn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Vt=new R;class Er{constructor(e,t,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)Vt.fromBufferAttribute(this,t),Vt.applyMatrix4(e),this.setXYZ(t,Vt.x,Vt.y,Vt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Vt.fromBufferAttribute(this,t),Vt.applyNormalMatrix(e),this.setXYZ(t,Vt.x,Vt.y,Vt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Vt.fromBufferAttribute(this,t),Vt.transformDirection(e),this.setXYZ(t,Vt.x,Vt.y,Vt.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=An(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=at(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=at(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=at(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=at(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=at(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=An(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=An(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=An(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=An(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=at(t,this.array),n=at(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=at(t,this.array),n=at(n,this.array),i=at(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=at(t,this.array),n=at(n,this.array),i=at(i,this.array),r=at(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this.data.array[e+3]=r,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[i+r])}return new St(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new Er(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[i+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class Du extends Pn{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new we(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}let us;const $s=new R,fs=new R,ps=new R,ms=new Se,Qs=new Se,Nu=new ve,Zr=new R,Js=new R,ea=new R,Gh=new Se,Lo=new Se,Vh=new Se;class W_ extends pt{constructor(e=new Du){if(super(),this.isSprite=!0,this.type="Sprite",us===void 0){us=new Ct;const t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new Iu(t,5);us.setIndex([0,1,2,0,2,3]),us.setAttribute("position",new Er(n,3,0,!1)),us.setAttribute("uv",new Er(n,2,3,!1))}this.geometry=us,this.material=e,this.center=new Se(.5,.5)}raycast(e,t){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),fs.setFromMatrixScale(this.matrixWorld),Nu.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),ps.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&fs.multiplyScalar(-ps.z);const n=this.material.rotation;let i,r;n!==0&&(r=Math.cos(n),i=Math.sin(n));const a=this.center;ta(Zr.set(-.5,-.5,0),ps,a,fs,i,r),ta(Js.set(.5,-.5,0),ps,a,fs,i,r),ta(ea.set(.5,.5,0),ps,a,fs,i,r),Gh.set(0,0),Lo.set(1,0),Vh.set(1,1);let o=e.ray.intersectTriangle(Zr,Js,ea,!1,$s);if(o===null&&(ta(Js.set(-.5,.5,0),ps,a,fs,i,r),Lo.set(0,1),o=e.ray.intersectTriangle(Zr,ea,Js,!1,$s),o===null))return;const c=e.ray.origin.distanceTo($s);c<e.near||c>e.far||t.push({distance:c,point:$s.clone(),uv:dn.getInterpolation($s,Zr,Js,ea,Gh,Lo,Vh,new Se),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}}function ta(s,e,t,n,i,r){ms.subVectors(s,t).addScalar(.5).multiply(n),i!==void 0?(Qs.x=r*ms.x-i*ms.y,Qs.y=i*ms.x+r*ms.y):Qs.copy(ms),s.copy(e),s.x+=Qs.x,s.y+=Qs.y,s.applyMatrix4(Nu)}const Wh=new R,qh=new et,jh=new et,q_=new R,Xh=new ve,na=new R,Io=new Wn,Yh=new ve,Do=new Va;class j_ extends st{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=Kl,this.bindMatrix=new ve,this.bindMatrixInverse=new ve,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const e=this.geometry;this.boundingBox===null&&(this.boundingBox=new Vn),this.boundingBox.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,na),this.boundingBox.expandByPoint(na)}computeBoundingSphere(){const e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new Wn),this.boundingSphere.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,na),this.boundingSphere.expandByPoint(na)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){const n=this.material,i=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Io.copy(this.boundingSphere),Io.applyMatrix4(i),e.ray.intersectsSphere(Io)!==!1&&(Yh.copy(i).invert(),Do.copy(e.ray).applyMatrix4(Yh),!(this.boundingBox!==null&&Do.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,Do)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new et,t=this.geometry.attributes.skinWeight;for(let n=0,i=t.count;n<i;n++){e.fromBufferAttribute(t,n);const r=1/e.manhattanLength();r!==1/0?e.multiplyScalar(r):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===Kl?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===tp?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){const n=this.skeleton,i=this.geometry;qh.fromBufferAttribute(i.attributes.skinIndex,e),jh.fromBufferAttribute(i.attributes.skinWeight,e),Wh.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let r=0;r<4;r++){const a=jh.getComponent(r);if(a!==0){const o=qh.getComponent(r);Xh.multiplyMatrices(n.bones[o].matrixWorld,n.boneInverses[o]),t.addScaledVector(q_.copy(Wh).applyMatrix4(Xh),a)}}return t.applyMatrix4(this.bindMatrixInverse)}}class Uu extends pt{constructor(){super(),this.isBone=!0,this.type="Bone"}}class Fu extends Rt{constructor(e=null,t=1,n=1,i,r,a,o,c,l=Kt,h=Kt,d,u){super(null,a,o,c,l,h,i,r,d,u),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Kh=new ve,X_=new ve;class bl{constructor(e=[],t=[]){this.uuid=Cn(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,i=this.bones.length;n<i;n++)this.boneInverses.push(new ve)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const n=new ve;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){const e=this.bones,t=this.boneInverses,n=this.boneMatrices,i=this.boneTexture;for(let r=0,a=e.length;r<a;r++){const o=e[r]?e[r].matrixWorld:X_;Kh.multiplyMatrices(o,t[r]),Kh.toArray(n,r*16)}i!==null&&(i.needsUpdate=!0)}clone(){return new bl(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const n=new Fu(t,e,e,xn,Rn);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){const i=this.bones[t];if(i.name===e)return i}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,i=e.bones.length;n<i;n++){const r=e.bones[n];let a=t[r];a===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",r),a=new Uu),this.bones.push(a),this.boneInverses.push(new ve().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){const e={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,n=this.boneInverses;for(let i=0,r=t.length;i<r;i++){const a=t[i];e.bones.push(a.uuid);const o=n[i];e.boneInverses.push(o.toArray())}return e}}class oi extends St{constructor(e,t,n,i=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const gs=new ve,$h=new ve,ia=[],Qh=new Vn,Y_=new ve,Zs=new st,er=new Wn;class Ar extends st{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new oi(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,Y_)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Vn),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,gs),Qh.copy(e.boundingBox).applyMatrix4(gs),this.boundingBox.union(Qh)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Wn),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,gs),er.copy(e.boundingSphere).applyMatrix4(gs),this.boundingSphere.union(er)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const n=t.morphTargetInfluences,i=this.morphTexture.source.data.data,r=n.length+1,a=e*r+1;for(let o=0;o<n.length;o++)n[o]=i[a+o]}raycast(e,t){const n=this.matrixWorld,i=this.count;if(Zs.geometry=this.geometry,Zs.material=this.material,Zs.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),er.copy(this.boundingSphere),er.applyMatrix4(n),e.ray.intersectsSphere(er)!==!1))for(let r=0;r<i;r++){this.getMatrixAt(r,gs),$h.multiplyMatrices(n,gs),Zs.matrixWorld=$h,Zs.raycast(e,ia);for(let a=0,o=ia.length;a<o;a++){const c=ia[a];c.instanceId=r,c.object=this,t.push(c)}ia.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new oi(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){const n=t.morphTargetInfluences,i=n.length+1;this.morphTexture===null&&(this.morphTexture=new Fu(new Float32Array(i*this.count),i,this.count,cl,Rn));const r=this.morphTexture.source.data.data;let a=0;for(let l=0;l<n.length;l++)a+=n[l];const o=this.geometry.morphTargetsRelative?1:1-a,c=i*e;r[c]=o,r.set(n,c+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}}class Fa extends Pn{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new we(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const ka=new R,Oa=new R,Jh=new ve,tr=new Va,sa=new Wn,No=new R,Zh=new R;class _l extends pt{constructor(e=new Ct,t=new Fa){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let i=1,r=t.count;i<r;i++)ka.fromBufferAttribute(t,i-1),Oa.fromBufferAttribute(t,i),n[i]=n[i-1],n[i]+=ka.distanceTo(Oa);e.setAttribute("lineDistance",new At(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,r=e.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),sa.copy(n.boundingSphere),sa.applyMatrix4(i),sa.radius+=r,e.ray.intersectsSphere(sa)===!1)return;Jh.copy(i).invert(),tr.copy(e.ray).applyMatrix4(Jh);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=this.isLineSegments?2:1,h=n.index,u=n.attributes.position;if(h!==null){const f=Math.max(0,a.start),g=Math.min(h.count,a.start+a.count);for(let b=f,m=g-1;b<m;b+=l){const p=h.getX(b),x=h.getX(b+1),v=ra(this,e,tr,c,p,x);v&&t.push(v)}if(this.isLineLoop){const b=h.getX(g-1),m=h.getX(f),p=ra(this,e,tr,c,b,m);p&&t.push(p)}}else{const f=Math.max(0,a.start),g=Math.min(u.count,a.start+a.count);for(let b=f,m=g-1;b<m;b+=l){const p=ra(this,e,tr,c,b,b+1);p&&t.push(p)}if(this.isLineLoop){const b=ra(this,e,tr,c,g-1,f);b&&t.push(b)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){const o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function ra(s,e,t,n,i,r){const a=s.geometry.attributes.position;if(ka.fromBufferAttribute(a,i),Oa.fromBufferAttribute(a,r),t.distanceSqToSegment(ka,Oa,No,Zh)>n)return;No.applyMatrix4(s.matrixWorld);const c=e.ray.origin.distanceTo(No);if(!(c<e.near||c>e.far))return{distance:c,point:Zh.clone().applyMatrix4(s.matrixWorld),index:i,face:null,faceIndex:null,barycoord:null,object:s}}const ed=new R,td=new R;class Ca extends _l{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let i=0,r=t.count;i<r;i+=2)ed.fromBufferAttribute(t,i),td.fromBufferAttribute(t,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+ed.distanceTo(td);e.setAttribute("lineDistance",new At(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class K_ extends _l{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}class ku extends Pn{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new we(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const nd=new ve,Kc=new Va,aa=new Wn,oa=new R;class Ou extends pt{constructor(e=new Ct,t=new ku){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,r=e.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),aa.copy(n.boundingSphere),aa.applyMatrix4(i),aa.radius+=r,e.ray.intersectsSphere(aa)===!1)return;nd.copy(i).invert(),Kc.copy(e.ray).applyMatrix4(nd);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=n.index,d=n.attributes.position;if(l!==null){const u=Math.max(0,a.start),f=Math.min(l.count,a.start+a.count);for(let g=u,b=f;g<b;g++){const m=l.getX(g);oa.fromBufferAttribute(d,m),id(oa,m,c,i,e,t,this)}}else{const u=Math.max(0,a.start),f=Math.min(d.count,a.start+a.count);for(let g=u,b=f;g<b;g++)oa.fromBufferAttribute(d,g),id(oa,g,c,i,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){const o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function id(s,e,t,n,i,r,a){const o=Kc.distanceSqToPoint(s);if(o<t){const c=new R;Kc.closestPointToPoint(s,c),c.applyMatrix4(n);const l=i.ray.origin.distanceTo(c);if(l<i.near||l>i.far)return;r.push({distance:l,distanceToRay:Math.sqrt(o),point:c,index:e,face:null,faceIndex:null,barycoord:null,object:a})}}class $c extends Rt{constructor(e,t,n,i,r,a,o,c,l){super(e,t,n,i,r,a,o,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Bu{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){const n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let n,i=this.getPoint(0),r=0;t.push(0);for(let a=1;a<=e;a++)n=this.getPoint(a/e),r+=n.distanceTo(i),t.push(r),i=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){const n=this.getLengths();let i=0;const r=n.length;let a;t?a=t:a=e*n[r-1];let o=0,c=r-1,l;for(;o<=c;)if(i=Math.floor(o+(c-o)/2),l=n[i]-a,l<0)o=i+1;else if(l>0)c=i-1;else{c=i;break}if(i=c,n[i]===a)return i/(r-1);const h=n[i],u=n[i+1]-h,f=(a-h)/u;return(i+f)/(r-1)}getTangent(e,t){let i=e-1e-4,r=e+1e-4;i<0&&(i=0),r>1&&(r=1);const a=this.getPoint(i),o=this.getPoint(r),c=t||(a.isVector2?new Se:new R);return c.copy(o).sub(a).normalize(),c}getTangentAt(e,t){const n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t){const n=new R,i=[],r=[],a=[],o=new R,c=new ve;for(let f=0;f<=e;f++){const g=f/e;i[f]=this.getTangentAt(g,new R)}r[0]=new R,a[0]=new R;let l=Number.MAX_VALUE;const h=Math.abs(i[0].x),d=Math.abs(i[0].y),u=Math.abs(i[0].z);h<=l&&(l=h,n.set(1,0,0)),d<=l&&(l=d,n.set(0,1,0)),u<=l&&n.set(0,0,1),o.crossVectors(i[0],n).normalize(),r[0].crossVectors(i[0],o),a[0].crossVectors(i[0],r[0]);for(let f=1;f<=e;f++){if(r[f]=r[f-1].clone(),a[f]=a[f-1].clone(),o.crossVectors(i[f-1],i[f]),o.length()>Number.EPSILON){o.normalize();const g=Math.acos(Dt(i[f-1].dot(i[f]),-1,1));r[f].applyMatrix4(c.makeRotationAxis(o,g))}a[f].crossVectors(i[f],r[f])}if(t===!0){let f=Math.acos(Dt(r[0].dot(r[e]),-1,1));f/=e,i[0].dot(o.crossVectors(r[0],r[e]))>0&&(f=-f);for(let g=1;g<=e;g++)r[g].applyMatrix4(c.makeRotationAxis(i[g],f*g)),a[g].crossVectors(i[g],r[g])}return{tangents:i,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}function vl(){let s=0,e=0,t=0,n=0;function i(r,a,o,c){s=r,e=o,t=-3*r+3*a-2*o-c,n=2*r-2*a+o+c}return{initCatmullRom:function(r,a,o,c,l){i(a,o,l*(o-r),l*(c-a))},initNonuniformCatmullRom:function(r,a,o,c,l,h,d){let u=(a-r)/l-(o-r)/(l+h)+(o-a)/h,f=(o-a)/h-(c-a)/(h+d)+(c-o)/d;u*=h,f*=h,i(a,o,u,f)},calc:function(r){const a=r*r,o=a*r;return s+e*r+t*a+n*o}}}const ca=new R,Uo=new vl,Fo=new vl,ko=new vl;class $_ extends Bu{constructor(e=[],t=!1,n="centripetal",i=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=i}getPoint(e,t=new R){const n=t,i=this.points,r=i.length,a=(r-(this.closed?0:1))*e;let o=Math.floor(a),c=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:c===0&&o===r-1&&(o=r-2,c=1);let l,h;this.closed||o>0?l=i[(o-1)%r]:(ca.subVectors(i[0],i[1]).add(i[0]),l=ca);const d=i[o%r],u=i[(o+1)%r];if(this.closed||o+2<r?h=i[(o+2)%r]:(ca.subVectors(i[r-1],i[r-2]).add(i[r-1]),h=ca),this.curveType==="centripetal"||this.curveType==="chordal"){const f=this.curveType==="chordal"?.5:.25;let g=Math.pow(l.distanceToSquared(d),f),b=Math.pow(d.distanceToSquared(u),f),m=Math.pow(u.distanceToSquared(h),f);b<1e-4&&(b=1),g<1e-4&&(g=b),m<1e-4&&(m=b),Uo.initNonuniformCatmullRom(l.x,d.x,u.x,h.x,g,b,m),Fo.initNonuniformCatmullRom(l.y,d.y,u.y,h.y,g,b,m),ko.initNonuniformCatmullRom(l.z,d.z,u.z,h.z,g,b,m)}else this.curveType==="catmullrom"&&(Uo.initCatmullRom(l.x,d.x,u.x,h.x,this.tension),Fo.initCatmullRom(l.y,d.y,u.y,h.y,this.tension),ko.initCatmullRom(l.z,d.z,u.z,h.z,this.tension));return n.set(Uo.calc(c),Fo.calc(c),ko.calc(c)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(i.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const i=this.points[t];e.points.push(i.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(new R().fromArray(i))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}class Q_ extends Bu{constructor(e=new R,t=new R){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new R){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new R){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class xl extends Ct{constructor(e=1,t=1,n=1,i=32,r=1,a=!1,o=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:i,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:c};const l=this;i=Math.floor(i),r=Math.floor(r);const h=[],d=[],u=[],f=[];let g=0;const b=[],m=n/2;let p=0;x(),a===!1&&(e>0&&v(!0),t>0&&v(!1)),this.setIndex(h),this.setAttribute("position",new At(d,3)),this.setAttribute("normal",new At(u,3)),this.setAttribute("uv",new At(f,2));function x(){const y=new R,A=new R;let T=0;const S=(t-e)/n;for(let P=0;P<=r;P++){const F=[],_=P/r,w=_*(t-e)+e;for(let U=0;U<=i;U++){const O=U/i,B=O*c+o,K=Math.sin(B),G=Math.cos(B);A.x=w*K,A.y=-_*n+m,A.z=w*G,d.push(A.x,A.y,A.z),y.set(K,S,G).normalize(),u.push(y.x,y.y,y.z),f.push(O,1-_),F.push(g++)}b.push(F)}for(let P=0;P<i;P++)for(let F=0;F<r;F++){const _=b[F][P],w=b[F+1][P],U=b[F+1][P+1],O=b[F][P+1];e>0&&(h.push(_,w,O),T+=3),t>0&&(h.push(w,U,O),T+=3)}l.addGroup(p,T,0),p+=T}function v(y){const A=g,T=new Se,S=new R;let P=0;const F=y===!0?e:t,_=y===!0?1:-1;for(let U=1;U<=i;U++)d.push(0,m*_,0),u.push(0,_,0),f.push(.5,.5),g++;const w=g;for(let U=0;U<=i;U++){const B=U/i*c+o,K=Math.cos(B),G=Math.sin(B);S.x=F*G,S.y=m*_,S.z=F*K,d.push(S.x,S.y,S.z),u.push(0,_,0),T.x=K*.5+.5,T.y=G*.5*_+.5,f.push(T.x,T.y),g++}for(let U=0;U<i;U++){const O=A+U,B=w+U;y===!0?h.push(B,B+1,O):h.push(B+1,B,O),P+=3}l.addGroup(p,P,y===!0?1:2),p+=P}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new xl(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}const la=new R,ha=new R,Oo=new R,da=new dn;class sd extends Ct{constructor(e=null,t=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:e,thresholdAngle:t},e!==null){const i=Math.pow(10,4),r=Math.cos(Ss*t),a=e.getIndex(),o=e.getAttribute("position"),c=a?a.count:o.count,l=[0,0,0],h=["a","b","c"],d=new Array(3),u={},f=[];for(let g=0;g<c;g+=3){a?(l[0]=a.getX(g),l[1]=a.getX(g+1),l[2]=a.getX(g+2)):(l[0]=g,l[1]=g+1,l[2]=g+2);const{a:b,b:m,c:p}=da;if(b.fromBufferAttribute(o,l[0]),m.fromBufferAttribute(o,l[1]),p.fromBufferAttribute(o,l[2]),da.getNormal(Oo),d[0]=`${Math.round(b.x*i)},${Math.round(b.y*i)},${Math.round(b.z*i)}`,d[1]=`${Math.round(m.x*i)},${Math.round(m.y*i)},${Math.round(m.z*i)}`,d[2]=`${Math.round(p.x*i)},${Math.round(p.y*i)},${Math.round(p.z*i)}`,!(d[0]===d[1]||d[1]===d[2]||d[2]===d[0]))for(let x=0;x<3;x++){const v=(x+1)%3,y=d[x],A=d[v],T=da[h[x]],S=da[h[v]],P=`${y}_${A}`,F=`${A}_${y}`;F in u&&u[F]?(Oo.dot(u[F].normal)<=r&&(f.push(T.x,T.y,T.z),f.push(S.x,S.y,S.z)),u[F]=null):P in u||(u[P]={index0:l[x],index1:l[v],normal:Oo.clone()})}}for(const g in u)if(u[g]){const{index0:b,index1:m}=u[g];la.fromBufferAttribute(o,b),ha.fromBufferAttribute(o,m),f.push(la.x,la.y,la.z),f.push(ha.x,ha.y,ha.z)}this.setAttribute("position",new At(f,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}}class yl extends Ct{constructor(e=.5,t=1,n=32,i=1,r=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:i,thetaStart:r,thetaLength:a},n=Math.max(3,n),i=Math.max(1,i);const o=[],c=[],l=[],h=[];let d=e;const u=(t-e)/i,f=new R,g=new Se;for(let b=0;b<=i;b++){for(let m=0;m<=n;m++){const p=r+m/n*a;f.x=d*Math.cos(p),f.y=d*Math.sin(p),c.push(f.x,f.y,f.z),l.push(0,0,1),g.x=(f.x/t+1)/2,g.y=(f.y/t+1)/2,h.push(g.x,g.y)}d+=u}for(let b=0;b<i;b++){const m=b*(n+1);for(let p=0;p<n;p++){const x=p+m,v=x,y=x+n+1,A=x+n+2,T=x+1;o.push(v,y,T),o.push(y,A,T)}}this.setIndex(o),this.setAttribute("position",new At(c,3)),this.setAttribute("normal",new At(l,3)),this.setAttribute("uv",new At(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new yl(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}class Ml extends Ct{constructor(e=1,t=32,n=16,i=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:i,phiLength:r,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const c=Math.min(a+o,Math.PI);let l=0;const h=[],d=new R,u=new R,f=[],g=[],b=[],m=[];for(let p=0;p<=n;p++){const x=[],v=p/n;let y=0;p===0&&a===0?y=.5/t:p===n&&c===Math.PI&&(y=-.5/t);for(let A=0;A<=t;A++){const T=A/t;d.x=-e*Math.cos(i+T*r)*Math.sin(a+v*o),d.y=e*Math.cos(a+v*o),d.z=e*Math.sin(i+T*r)*Math.sin(a+v*o),g.push(d.x,d.y,d.z),u.copy(d).normalize(),b.push(u.x,u.y,u.z),m.push(T+y,1-v),x.push(l++)}h.push(x)}for(let p=0;p<n;p++)for(let x=0;x<t;x++){const v=h[p][x+1],y=h[p][x],A=h[p+1][x],T=h[p+1][x+1];(p!==0||a>0)&&f.push(v,y,T),(p!==n-1||c<Math.PI)&&f.push(y,A,T)}this.setIndex(f),this.setAttribute("position",new At(g,3)),this.setAttribute("normal",new At(b,3)),this.setAttribute("uv",new At(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ml(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class Tr extends Pn{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new we(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new we(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=fu,this.normalScale=new Se(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Jt,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class qn extends Tr{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Se(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Dt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new we(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new we(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new we(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}function ua(s,e,t){return!s||!t&&s.constructor===e?s:typeof e.BYTES_PER_ELEMENT=="number"?new e(s):Array.prototype.slice.call(s)}function J_(s){return ArrayBuffer.isView(s)&&!(s instanceof DataView)}function Z_(s){function e(i,r){return s[i]-s[r]}const t=s.length,n=new Array(t);for(let i=0;i!==t;++i)n[i]=i;return n.sort(e),n}function rd(s,e,t){const n=s.length,i=new s.constructor(n);for(let r=0,a=0;a!==n;++r){const o=t[r]*e;for(let c=0;c!==e;++c)i[a++]=s[o+c]}return i}function zu(s,e,t,n){let i=1,r=s[0];for(;r!==void 0&&r[n]===void 0;)r=s[i++];if(r===void 0)return;let a=r[n];if(a!==void 0)if(Array.isArray(a))do a=r[n],a!==void 0&&(e.push(r.time),t.push.apply(t,a)),r=s[i++];while(r!==void 0);else if(a.toArray!==void 0)do a=r[n],a!==void 0&&(e.push(r.time),a.toArray(t,t.length)),r=s[i++];while(r!==void 0);else do a=r[n],a!==void 0&&(e.push(r.time),t.push(a)),r=s[i++];while(r!==void 0)}class Pr{constructor(e,t,n,i){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let n=this._cachedIndex,i=t[n],r=t[n-1];n:{e:{let a;t:{i:if(!(e<i)){for(let o=n+2;;){if(i===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=i,i=t[++n],e<i)break e}a=t.length;break t}if(!(e>=r)){const o=t[1];e<o&&(n=2,r=o);for(let c=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(i=r,r=t[--n-1],e>=r)break e}a=n,n=0;break t}break n}for(;n<a;){const o=n+a>>>1;e<t[o]?a=o:n=o+1}if(i=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,i)}return this.interpolate_(n,r,e,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=e*i;for(let a=0;a!==i;++a)t[a]=n[r+a];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class ev extends Pr{constructor(e,t,n,i){super(e,t,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:$l,endingEnd:$l}}intervalChanged_(e,t,n){const i=this.parameterPositions;let r=e-2,a=e+1,o=i[r],c=i[a];if(o===void 0)switch(this.getSettings_().endingStart){case Ql:r=e,o=2*t-n;break;case Jl:r=i.length-2,o=t+i[r]-i[r+1];break;default:r=e,o=n}if(c===void 0)switch(this.getSettings_().endingEnd){case Ql:a=e,c=2*n-t;break;case Jl:a=1,c=n+i[1]-i[0];break;default:a=e-1,c=t}const l=(n-t)*.5,h=this.valueSize;this._weightPrev=l/(t-o),this._weightNext=l/(c-n),this._offsetPrev=r*h,this._offsetNext=a*h}interpolate_(e,t,n,i){const r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=e*o,l=c-o,h=this._offsetPrev,d=this._offsetNext,u=this._weightPrev,f=this._weightNext,g=(n-t)/(i-t),b=g*g,m=b*g,p=-u*m+2*u*b-u*g,x=(1+u)*m+(-1.5-2*u)*b+(-.5+u)*g+1,v=(-1-f)*m+(1.5+f)*b+.5*g,y=f*m-f*b;for(let A=0;A!==o;++A)r[A]=p*a[h+A]+x*a[l+A]+v*a[c+A]+y*a[d+A];return r}}class tv extends Pr{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=e*o,l=c-o,h=(n-t)/(i-t),d=1-h;for(let u=0;u!==o;++u)r[u]=a[l+u]*d+a[c+u]*h;return r}}class nv extends Pr{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e){return this.copySampleValue_(e-1)}}class jn{constructor(e,t,n,i){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=ua(t,this.TimeBufferType),this.values=ua(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:ua(e.times,Array),values:ua(e.values,Array)};const i=e.getInterpolation();i!==e.DefaultInterpolation&&(n.interpolation=i)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new nv(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new tv(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new ev(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case Mr:t=this.InterpolantFactoryMethodDiscrete;break;case Sr:t=this.InterpolantFactoryMethodLinear;break;case to:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){const n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Mr;case this.InterpolantFactoryMethodLinear:return Sr;case this.InterpolantFactoryMethodSmooth:return to}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]*=e}return this}trim(e,t){const n=this.times,i=n.length;let r=0,a=i-1;for(;r!==i&&n[r]<e;)++r;for(;a!==-1&&n[a]>t;)--a;if(++a,r!==0||a!==i){r>=a&&(a=Math.max(a,1),r=a-1);const o=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);const n=this.times,i=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==r;o++){const c=n[o];if(typeof c=="number"&&isNaN(c)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,o,c),e=!1;break}if(a!==null&&a>c){console.error("THREE.KeyframeTrack: Out of order keys.",this,o,c,a),e=!1;break}a=c}if(i!==void 0&&J_(i))for(let o=0,c=i.length;o!==c;++o){const l=i[o];if(isNaN(l)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,o,l),e=!1;break}}return e}optimize(){const e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===to,r=e.length-1;let a=1;for(let o=1;o<r;++o){let c=!1;const l=e[o],h=e[o+1];if(l!==h&&(o!==1||l!==e[0]))if(i)c=!0;else{const d=o*n,u=d-n,f=d+n;for(let g=0;g!==n;++g){const b=t[d+g];if(b!==t[u+g]||b!==t[f+g]){c=!0;break}}}if(c){if(o!==a){e[a]=e[o];const d=o*n,u=a*n;for(let f=0;f!==n;++f)t[u+f]=t[d+f]}++a}}if(r>0){e[a]=e[r];for(let o=r*n,c=a*n,l=0;l!==n;++l)t[c+l]=t[o+l];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*n)):(this.times=e,this.values=t),this}clone(){const e=this.times.slice(),t=this.values.slice(),n=this.constructor,i=new n(this.name,e,t);return i.createInterpolant=this.createInterpolant,i}}jn.prototype.TimeBufferType=Float32Array;jn.prototype.ValueBufferType=Float32Array;jn.prototype.DefaultInterpolation=Sr;class Hs extends jn{constructor(e,t,n){super(e,t,n)}}Hs.prototype.ValueTypeName="bool";Hs.prototype.ValueBufferType=Array;Hs.prototype.DefaultInterpolation=Mr;Hs.prototype.InterpolantFactoryMethodLinear=void 0;Hs.prototype.InterpolantFactoryMethodSmooth=void 0;class Hu extends jn{}Hu.prototype.ValueTypeName="color";class Us extends jn{}Us.prototype.ValueTypeName="number";class iv extends Pr{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=(n-t)/(i-t);let l=e*o;for(let h=l+o;l!==h;l+=4)Qe.slerpFlat(r,0,a,l-o,a,l,c);return r}}class Fs extends jn{InterpolantFactoryMethodLinear(e){return new iv(this.times,this.values,this.getValueSize(),e)}}Fs.prototype.ValueTypeName="quaternion";Fs.prototype.InterpolantFactoryMethodSmooth=void 0;class Gs extends jn{constructor(e,t,n){super(e,t,n)}}Gs.prototype.ValueTypeName="string";Gs.prototype.ValueBufferType=Array;Gs.prototype.DefaultInterpolation=Mr;Gs.prototype.InterpolantFactoryMethodLinear=void 0;Gs.prototype.InterpolantFactoryMethodSmooth=void 0;class ks extends jn{}ks.prototype.ValueTypeName="vector";class sv{constructor(e="",t=-1,n=[],i=np){this.name=e,this.tracks=n,this.duration=t,this.blendMode=i,this.uuid=Cn(),this.duration<0&&this.resetDuration()}static parse(e){const t=[],n=e.tracks,i=1/(e.fps||1);for(let a=0,o=n.length;a!==o;++a)t.push(av(n[a]).scale(i));const r=new this(e.name,e.duration,t,e.blendMode);return r.uuid=e.uuid,r}static toJSON(e){const t=[],n=e.tracks,i={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let r=0,a=n.length;r!==a;++r)t.push(jn.toJSON(n[r]));return i}static CreateFromMorphTargetSequence(e,t,n,i){const r=t.length,a=[];for(let o=0;o<r;o++){let c=[],l=[];c.push((o+r-1)%r,o,(o+1)%r),l.push(0,1,0);const h=Z_(c);c=rd(c,1,h),l=rd(l,1,h),!i&&c[0]===0&&(c.push(r),l.push(l[0])),a.push(new Us(".morphTargetInfluences["+t[o].name+"]",c,l).scale(1/n))}return new this(e,-1,a)}static findByName(e,t){let n=e;if(!Array.isArray(e)){const i=e;n=i.geometry&&i.geometry.animations||i.animations}for(let i=0;i<n.length;i++)if(n[i].name===t)return n[i];return null}static CreateClipsFromMorphTargetSequences(e,t,n){const i={},r=/^([\w-]*?)([\d]+)$/;for(let o=0,c=e.length;o<c;o++){const l=e[o],h=l.name.match(r);if(h&&h.length>1){const d=h[1];let u=i[d];u||(i[d]=u=[]),u.push(l)}}const a=[];for(const o in i)a.push(this.CreateFromMorphTargetSequence(o,i[o],t,n));return a}static parseAnimation(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const n=function(d,u,f,g,b){if(f.length!==0){const m=[],p=[];zu(f,m,p,g),m.length!==0&&b.push(new d(u,m,p))}},i=[],r=e.name||"default",a=e.fps||30,o=e.blendMode;let c=e.length||-1;const l=e.hierarchy||[];for(let d=0;d<l.length;d++){const u=l[d].keys;if(!(!u||u.length===0))if(u[0].morphTargets){const f={};let g;for(g=0;g<u.length;g++)if(u[g].morphTargets)for(let b=0;b<u[g].morphTargets.length;b++)f[u[g].morphTargets[b]]=-1;for(const b in f){const m=[],p=[];for(let x=0;x!==u[g].morphTargets.length;++x){const v=u[g];m.push(v.time),p.push(v.morphTarget===b?1:0)}i.push(new Us(".morphTargetInfluence["+b+"]",m,p))}c=f.length*a}else{const f=".bones["+t[d].name+"]";n(ks,f+".position",u,"pos",i),n(Fs,f+".quaternion",u,"rot",i),n(ks,f+".scale",u,"scl",i)}}return i.length===0?null:new this(r,c,i,o)}resetDuration(){const e=this.tracks;let t=0;for(let n=0,i=e.length;n!==i;++n){const r=this.tracks[n];t=Math.max(t,r.times[r.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}}function rv(s){switch(s.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return Us;case"vector":case"vector2":case"vector3":case"vector4":return ks;case"color":return Hu;case"quaternion":return Fs;case"bool":case"boolean":return Hs;case"string":return Gs}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+s)}function av(s){if(s.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=rv(s.type);if(s.times===void 0){const t=[],n=[];zu(s.keys,t,n,"value"),s.times=t,s.values=n}return e.parse!==void 0?e.parse(s):new e(s.name,s.times,s.values,s.interpolation)}const wi={enabled:!1,files:{},add:function(s,e){this.enabled!==!1&&(this.files[s]=e)},get:function(s){if(this.enabled!==!1)return this.files[s]},remove:function(s){delete this.files[s]},clear:function(){this.files={}}};class ov{constructor(e,t,n){const i=this;let r=!1,a=0,o=0,c;const l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(h){o++,r===!1&&i.onStart!==void 0&&i.onStart(h,a,o),r=!0},this.itemEnd=function(h){a++,i.onProgress!==void 0&&i.onProgress(h,a,o),a===o&&(r=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(h){i.onError!==void 0&&i.onError(h)},this.resolveURL=function(h){return c?c(h):h},this.setURLModifier=function(h){return c=h,this},this.addHandler=function(h,d){return l.push(h,d),this},this.removeHandler=function(h){const d=l.indexOf(h);return d!==-1&&l.splice(d,2),this},this.getHandler=function(h){for(let d=0,u=l.length;d<u;d+=2){const f=l[d],g=l[d+1];if(f.global&&(f.lastIndex=0),f.test(h))return g}return null}}}const cv=new ov;class Vs{constructor(e){this.manager=e!==void 0?e:cv,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(i,r){n.load(e,i,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}Vs.DEFAULT_MATERIAL_NAME="__DEFAULT";const Zn={};class lv extends Error{constructor(e,t){super(e),this.response=t}}class Gu extends Vs{constructor(e){super(e)}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=wi.get(e);if(r!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0),r;if(Zn[e]!==void 0){Zn[e].push({onLoad:t,onProgress:n,onError:i});return}Zn[e]=[],Zn[e].push({onLoad:t,onProgress:n,onError:i});const a=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),o=this.mimeType,c=this.responseType;fetch(a).then(l=>{if(l.status===200||l.status===0){if(l.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||l.body===void 0||l.body.getReader===void 0)return l;const h=Zn[e],d=l.body.getReader(),u=l.headers.get("X-File-Size")||l.headers.get("Content-Length"),f=u?parseInt(u):0,g=f!==0;let b=0;const m=new ReadableStream({start(p){x();function x(){d.read().then(({done:v,value:y})=>{if(v)p.close();else{b+=y.byteLength;const A=new ProgressEvent("progress",{lengthComputable:g,loaded:b,total:f});for(let T=0,S=h.length;T<S;T++){const P=h[T];P.onProgress&&P.onProgress(A)}p.enqueue(y),x()}},v=>{p.error(v)})}}});return new Response(m)}else throw new lv(`fetch for "${l.url}" responded with ${l.status}: ${l.statusText}`,l)}).then(l=>{switch(c){case"arraybuffer":return l.arrayBuffer();case"blob":return l.blob();case"document":return l.text().then(h=>new DOMParser().parseFromString(h,o));case"json":return l.json();default:if(o===void 0)return l.text();{const d=/charset="?([^;"\s]*)"?/i.exec(o),u=d&&d[1]?d[1].toLowerCase():void 0,f=new TextDecoder(u);return l.arrayBuffer().then(g=>f.decode(g))}}}).then(l=>{wi.add(e,l);const h=Zn[e];delete Zn[e];for(let d=0,u=h.length;d<u;d++){const f=h[d];f.onLoad&&f.onLoad(l)}}).catch(l=>{const h=Zn[e];if(h===void 0)throw this.manager.itemError(e),l;delete Zn[e];for(let d=0,u=h.length;d<u;d++){const f=h[d];f.onError&&f.onError(l)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class hv extends Vs{constructor(e){super(e)}load(e,t,n,i){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,a=wi.get(e);if(a!==void 0)return r.manager.itemStart(e),setTimeout(function(){t&&t(a),r.manager.itemEnd(e)},0),a;const o=wr("img");function c(){h(),wi.add(e,this),t&&t(this),r.manager.itemEnd(e)}function l(d){h(),i&&i(d),r.manager.itemError(e),r.manager.itemEnd(e)}function h(){o.removeEventListener("load",c,!1),o.removeEventListener("error",l,!1)}return o.addEventListener("load",c,!1),o.addEventListener("error",l,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),r.manager.itemStart(e),o.src=e,o}}class dv extends Vs{constructor(e){super(e)}load(e,t,n,i){const r=new Rt,a=new hv(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(o){r.image=o,r.needsUpdate=!0,t!==void 0&&t(r)},n,i),r}}class qa extends pt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new we(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}class uv extends qa{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(pt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new we(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}}const Bo=new ve,ad=new R,od=new R;class Sl{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Se(512,512),this.map=null,this.mapPass=null,this.matrix=new ve,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new pl,this._frameExtents=new Se(1,1),this._viewportCount=1,this._viewports=[new et(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;ad.setFromMatrixPosition(e.matrixWorld),t.position.copy(ad),od.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(od),t.updateMatrixWorld(),Bo.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Bo),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Bo)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class fv extends Sl{constructor(){super(new Xt(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){const t=this.camera,n=Ds*2*e.angle*this.focus,i=this.mapSize.width/this.mapSize.height,r=e.distance||t.far;(n!==t.fov||i!==t.aspect||r!==t.far)&&(t.fov=n,t.aspect=i,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class pv extends qa{constructor(e,t,n=0,i=Math.PI/3,r=0,a=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(pt.DEFAULT_UP),this.updateMatrix(),this.target=new pt,this.distance=n,this.angle=i,this.penumbra=r,this.decay=a,this.map=null,this.shadow=new fv}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}const cd=new ve,nr=new R,zo=new R;class mv extends Sl{constructor(){super(new Xt(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Se(4,2),this._viewportCount=6,this._viewports=[new et(2,1,1,1),new et(0,1,1,1),new et(3,1,1,1),new et(1,1,1,1),new et(3,0,1,1),new et(1,0,1,1)],this._cubeDirections=[new R(1,0,0),new R(-1,0,0),new R(0,0,1),new R(0,0,-1),new R(0,1,0),new R(0,-1,0)],this._cubeUps=[new R(0,1,0),new R(0,1,0),new R(0,1,0),new R(0,1,0),new R(0,0,1),new R(0,0,-1)]}updateMatrices(e,t=0){const n=this.camera,i=this.matrix,r=e.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),nr.setFromMatrixPosition(e.matrixWorld),n.position.copy(nr),zo.copy(n.position),zo.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(zo),n.updateMatrixWorld(),i.makeTranslation(-nr.x,-nr.y,-nr.z),cd.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(cd)}}class Vu extends qa{constructor(e,t,n=0,i=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new mv}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class gv extends Sl{constructor(){super(new ml(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Wu extends qa{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(pt.DEFAULT_UP),this.updateMatrix(),this.target=new pt,this.shadow=new gv}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class _r{static decodeText(e){if(console.warn("THREE.LoaderUtils: decodeText() has been deprecated with r165 and will be removed with r175. Use TextDecoder instead."),typeof TextDecoder<"u")return new TextDecoder().decode(e);let t="";for(let n=0,i=e.length;n<i;n++)t+=String.fromCharCode(e[n]);try{return decodeURIComponent(escape(t))}catch{return t}}static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}class bv extends Vs{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(e){return this.options=e,this}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,a=wi.get(e);if(a!==void 0){if(r.manager.itemStart(e),a.then){a.then(l=>{t&&t(l),r.manager.itemEnd(e)}).catch(l=>{i&&i(l)});return}return setTimeout(function(){t&&t(a),r.manager.itemEnd(e)},0),a}const o={};o.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",o.headers=this.requestHeader;const c=fetch(e,o).then(function(l){return l.blob()}).then(function(l){return createImageBitmap(l,Object.assign(r.options,{colorSpaceConversion:"none"}))}).then(function(l){return wi.add(e,l),t&&t(l),r.manager.itemEnd(e),l}).catch(function(l){i&&i(l),wi.remove(e),r.manager.itemError(e),r.manager.itemEnd(e)});wi.add(e,c),r.manager.itemStart(e)}}const wl="\\[\\]\\.:\\/",_v=new RegExp("["+wl+"]","g"),El="[^"+wl+"]",vv="[^"+wl.replace("\\.","")+"]",xv=/((?:WC+[\/:])*)/.source.replace("WC",El),yv=/(WCOD+)?/.source.replace("WCOD",vv),Mv=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",El),Sv=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",El),wv=new RegExp("^"+xv+yv+Mv+Sv+"$"),Ev=["material","materials","bones","map"];class Av{constructor(e,t,n){const i=n||ot.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,i)}getValue(e,t){this.bind();const n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(e,t)}setValue(e,t){const n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,r=n.length;i!==r;++i)n[i].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}}class ot{constructor(e,t,n){this.path=t,this.parsedPath=n||ot.parseTrackName(t),this.node=ot.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new ot.Composite(e,t,n):new ot(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(_v,"")}static parseTrackName(e){const t=wv.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){const r=n.nodeName.substring(i+1);Ev.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){const n=function(r){for(let a=0;a<r.length;a++){const o=r[a];if(o.name===t||o.uuid===t)return o;const c=n(o.children);if(c)return c}return null},i=n(e.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)e[t++]=n[i]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,n=t.objectName,i=t.propertyName;let r=t.propertyIndex;if(e||(e=ot.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let l=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===l){l=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(l!==void 0){if(e[l]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[l]}}const a=e[i];if(a===void 0){const l=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+l+"."+i+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?o=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(r!==void 0){if(i==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}c=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(c=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=i;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}ot.Composite=Av;ot.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};ot.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};ot.prototype.GetterByBindingType=[ot.prototype._getValue_direct,ot.prototype._getValue_array,ot.prototype._getValue_arrayElement,ot.prototype._getValue_toArray];ot.prototype.SetterByBindingTypeAndVersioning=[[ot.prototype._setValue_direct,ot.prototype._setValue_direct_setNeedsUpdate,ot.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[ot.prototype._setValue_array,ot.prototype._setValue_array_setNeedsUpdate,ot.prototype._setValue_array_setMatrixWorldNeedsUpdate],[ot.prototype._setValue_arrayElement,ot.prototype._setValue_arrayElement_setNeedsUpdate,ot.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[ot.prototype._setValue_fromArray,ot.prototype._setValue_fromArray_setNeedsUpdate,ot.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:sl}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=sl);class Tv{constructor(e){this.stream=null,this.mirrored=!1,this.selfie=!1,this.facing="environment",this.ready=!1,this.grids=new Map,this.video=e,e.setAttribute("playsinline",""),e.muted=!0,e.autoplay=!0}async countCameras(){try{return(await navigator.mediaDevices.enumerateDevices()).filter(t=>t.kind==="videoinput").length}catch{return 0}}async flip(){const e=this.facing;this.stop();try{await this.start(e==="user"?"environment":"user")}catch(t){throw await this.start(e).catch(()=>{}),t}}async start(e=this.facing){if(!window.isSecureContext)throw"insecure";if(!navigator.mediaDevices?.getUserMedia)throw"unsupported";try{this.stream=await navigator.mediaDevices.getUserMedia({audio:!1,video:{facingMode:{ideal:e},width:{ideal:1280},height:{ideal:720},frameRate:{ideal:30,max:30}}})}catch(r){const a=r?.name;throw a==="NotAllowedError"||a==="SecurityError"?"denied":a==="NotFoundError"||a==="OverconstrainedError"?"notfound":"unknown"}this.video.srcObject=this.stream,await this.video.play().catch(()=>{}),await new Promise(r=>{if(this.video.videoWidth)return r();this.video.addEventListener("loadedmetadata",()=>r(),{once:!0})});const n=this.stream.getVideoTracks()[0].getSettings().facingMode,i=matchMedia("(pointer: coarse)").matches;this.facing=e,this.selfie=i&&(n==="user"||!n&&e==="user"),this.mirrored=!i&&(n==="user"||!n),this.video.classList.toggle("mirrored",this.mirrored),this.ready=!0}stop(){this.stream?.getTracks().forEach(e=>e.stop()),this.stream=null,this.ready=!1}layout(){const e=window.innerWidth,t=window.innerHeight,n=this.video.videoWidth||e,i=this.video.videoHeight||t,r=Math.max(e/n,t/i);return{vw:n,vh:i,sw:e,sh:t,scale:r,ox:(n*r-e)/2,oy:(i*r-t)/2}}displayVFov(e){const t=this.layout(),n=e*Math.PI/360,r=t.vw>=t.vh?Math.tan(n)*(t.vh/t.vw):Math.tan(n),a=t.sh/(t.vh*t.scale);return 2*Math.atan(r*a)*180/Math.PI}videoFocalPx(e){const t=this.video.videoWidth||1280,n=this.video.videoHeight||720,i=e*Math.PI/360,r=t>=n?Math.tan(i)*(n/t):Math.tan(i);return n/2/r}videoToNdc(e,t,n=this.layout()){const r=(this.mirrored?1-e:e)*n.vw*n.scale-n.ox,a=t*n.vh*n.scale-n.oy;return[r/n.sw*2-1,1-a/n.sh*2]}sampleGrid(e,t){if(!this.ready)return null;let n=this.grids.get(e*65536+t);n||(n=document.createElement("canvas"),n.width=e,n.height=t,this.grids.set(e*65536+t,n));const i=n.getContext("2d",{willReadFrequently:!0});if(!i)return null;const r=this.layout();return i.imageSmoothingQuality="high",i.save(),this.mirrored&&(i.translate(e,0),i.scale(-1,1)),i.drawImage(this.video,r.ox/r.scale,r.oy/r.scale,r.sw/r.scale,r.sh/r.scale,0,0,e,t),i.restore(),i.getImageData(0,0,e,t).data}captureJpeg(e=768,t=.72){if(!this.ready)return null;const n=this.layout(),i=n.sw/n.scale,r=n.sh/n.scale,a=Math.min(1,e/Math.max(i,r)),o=document.createElement("canvas");o.width=Math.round(i*a),o.height=Math.round(r*a);const c=o.getContext("2d");return c?(c.drawImage(this.video,n.ox/n.scale,n.oy/n.scale,i,r,0,0,o.width,o.height),o.toDataURL("image/jpeg",t).split(",")[1]??null):null}sampleLight(){if(!this.ready)return null;this.probe||(this.probe=document.createElement("canvas"),this.probe.width=8,this.probe.height=8);const e=this.probe.getContext("2d",{willReadFrequently:!0});if(!e)return null;e.drawImage(this.video,0,0,8,8);const t=e.getImageData(0,0,8,8).data;let n=0,i=0,r=0;for(let o=0;o<t.length;o+=4)n+=t[o],i+=t[o+1],r+=t[o+2];const a=t.length/4;return n/=a*255,i/=a*255,r/=a*255,{lum:.2126*n+.7152*i+.0722*r,r:n,g:i,b:r}}}const Rv=new R(0,0,1),Cv=new Qe(-Math.sqrt(.5),0,0,Math.sqrt(.5)),fa=new Jt,Ho=new Qe;class Pv{constructor(){this.quaternion=new Qe,this.angularVel=new R,this.hasOrientation=!1,this.permission="unsupported",this.dragMode=!1,this.dragBlocked=!1,this.raw=new Qe,this.yawOffset=0,this.pendingRecenter=!0,this.lastEventAt=0,this.alpha=0,this.beta=90,this.gamma=0,this.dragYaw=-Math.PI/2,this.dragPitch=0,this.prevQ=new Qe,this.steps=0,this.accLP=9.81,this.accBase=9.81,this.lastStepAt=0,this.stepArmed=!0,this.recenterHeading=0}async requestPermission(){const e=window.DeviceOrientationEvent,t=window.DeviceMotionEvent;try{if(e&&typeof e.requestPermission=="function"){const n=await e.requestPermission();t&&typeof t.requestPermission=="function"&&await t.requestPermission().catch(()=>"denied"),this.permission=n==="granted"?"granted":"denied"}else"DeviceOrientationEvent"in window&&(this.permission="granted")}catch{this.permission="denied"}return this.permission==="granted"&&this.listen(),this.permission}listen(){window.addEventListener("deviceorientation",e=>{e.alpha==null&&e.beta==null||(this.alpha=e.alpha??0,this.beta=e.beta??0,this.gamma=e.gamma??0,this.lastEventAt=performance.now(),this.hasOrientation=!0)}),window.addEventListener("devicemotion",e=>{const t=e.accelerationIncludingGravity;if(!t||t.x==null)return;const n=Math.hypot(t.x??0,t.y??0,t.z??0);this.detectStep(n)})}detectStep(e){this.accLP+=(e-this.accLP)*.35,this.accBase+=(e-this.accBase)*.02;const t=this.accLP-this.accBase,n=performance.now();this.stepArmed&&t>1.2&&n-this.lastStepAt>320?(this.steps++,this.lastStepAt=n,this.stepArmed=!1,this.onStep?.()):t<.3&&(this.stepArmed=!0)}enableDrag(e){this.dragMode=!0;let t=null,n=0,i=0;e.addEventListener("pointerdown",r=>{this.hasOrientation||this.dragBlocked||(t=r.pointerId,n=r.clientX,i=r.clientY)}),window.addEventListener("pointermove",r=>{t===r.pointerId&&(this.dragYaw+=(r.clientX-n)*.005,this.dragPitch=De.clamp(this.dragPitch+(r.clientY-i)*.005,-1.45,1.45),n=r.clientX,i=r.clientY)}),window.addEventListener("pointerup",r=>{t===r.pointerId&&(t=null)})}setDragPitch(e){this.dragPitch=e}recenter(e=0){this.pendingRecenter=!0,this.recenterHeading=e,this.hasOrientation||(this.dragYaw=-Math.PI/2-e)}get stale(){return this.hasOrientation&&performance.now()-this.lastEventAt>2e3}update(e){if(this.prevQ.copy(this.quaternion),this.hasOrientation){const t=Math.PI/180,n=(screen.orientation?.angle??window.orientation??0)*t;if(fa.set(this.beta*t,this.alpha*t,-this.gamma*t,"YXZ"),this.raw.setFromEuler(fa).multiply(Cv).multiply(Ho.setFromAxisAngle(Rv,-n)),this.pendingRecenter){const i=new R(0,0,-1).applyQuaternion(this.raw);this.yawOffset=Math.atan2(i.z,i.x)-this.recenterHeading,this.pendingRecenter=!1}Ho.setFromAxisAngle(new R(0,1,0),this.yawOffset),this.quaternion.copy(Ho).multiply(this.raw)}else this.pendingRecenter=!1,fa.set(this.dragPitch,this.dragYaw,0,"YXZ"),this.quaternion.setFromEuler(fa);if(e>0){const t=this.prevQ.clone().invert().multiply(this.quaternion),n=2*Math.acos(De.clamp(t.w,-1,1)),i=Math.sqrt(1-t.w*t.w)||1;this.angularVel.set(t.x/i,t.y/i,t.z/i).multiplyScalar(Math.min(n/e,20))}}pitchDeg(){const e=new R(0,0,-1).applyQuaternion(this.quaternion);return Math.asin(De.clamp(e.y,-1,1))*180/Math.PI}}class Lv{constructor(e){this.scene=new Lu,this.pixelRatio=2,this.gl=new V_({canvas:e,alpha:!0,antialias:!1,powerPreference:"high-performance",preserveDrawingBuffer:!1}),this.gl.setClearColor(0,0),this.gl.outputColorSpace=kt,this.camera=new Xt(60,innerWidth/innerHeight,.03,80),this.scene.add(this.camera),this.resize()}setPixelRatio(e){this.pixelRatio=e,this.resize()}setVFov(e){Math.abs(this.camera.fov-e)>.05&&(this.camera.fov=e,this.camera.updateProjectionMatrix())}resize(){const e=innerWidth,t=innerHeight;this.gl.setPixelRatio(Math.min(window.devicePixelRatio||1,this.pixelRatio)),this.gl.setSize(e,t,!1),this.camera.aspect=e/t,this.camera.updateProjectionMatrix()}render(){this.gl.render(this.scene,this.camera)}}const Tn={cobalt:"#00539B",cream:"#FCFAF0",petalDeep:"#FF8FB1",glow:"#FFE7B8"},ld=.12,Iv={high:{pixelRatio:2,maxFalling:600,maxResting:900,handHz:20,sparkles:!0},medium:{pixelRatio:1.5,maxFalling:420,maxResting:650,handHz:16,sparkles:!0},low:{pixelRatio:1,maxFalling:280,maxResting:420,handHz:12,sparkles:!1}};class Dv{constructor(){this.level="high",this.batterySaver=!1,this.fps=60,this.frames=0,this.acc=0,this.goodFor=0,this.order=["low","medium","high"]}get settings(){return Iv[this.batterySaver?"low":this.level]}setBatterySaver(e){this.batterySaver=e,this.onChange?.(e?"low":this.level)}tick(e){if(this.frames++,this.acc+=e,this.acc<2)return;this.fps=this.frames/this.acc,this.frames=0;const t=this.acc;if(this.acc=0,this.batterySaver)return;const n=this.order.indexOf(this.level);this.fps<27&&n>0?(this.level=this.order[n-1],this.goodFor=0,this.onChange?.(this.level)):this.fps>50?(this.goodFor+=t,this.goodFor>8&&n<2&&(this.level=this.order[n+1],this.goodFor=0,this.onChange?.(this.level))):this.goodFor=0}}const Nv={length:26,width:2.5,wallHeight:2.77,stoneWallHeight:2.4},Uv={eyeHeightMin:1.2,eyeHeightMax:1.8,eyeHeightDefault:1.45,strideMeters:.62},Fv={longEdgeFovDeg:67},kv=[{id:"F",side:"orange",x0:0,x1:2,width:2,height:2.4,y0:.2,landmark:!0,note:"Lời giới thiệu"},{id:"A1",side:"orange",x0:2,x1:4.5,width:2.5,height:2.4,y0:.2,landmark:!0,note:"Phần A (chia 4 đoạn làm mốc)"},{id:"A2",side:"orange",x0:4.5,x1:7,width:2.5,height:2.4,y0:.2,landmark:!0,note:"Phần A (chia 4 đoạn làm mốc)"},{id:"A3",side:"orange",x0:7,x1:9.5,width:2.5,height:2.4,y0:.2,landmark:!0,note:"Phần A (chia 4 đoạn làm mốc)"},{id:"A4",side:"orange",x0:9.5,x1:12,width:2.5,height:2.4,y0:.2,landmark:!0,note:"Phần A (chia 4 đoạn làm mốc)"},{id:"C1",side:"orange",x0:12,x1:13,width:1,height:2.4,y0:.2,note:"nền xanh đặc – không làm mốc"},{id:"C2",side:"orange",x0:13,x1:14,width:1,height:2.4,y0:.2},{id:"C3",side:"orange",x0:14,x1:15,width:1,height:2.4,y0:.2},{id:"C4",side:"orange",x0:15,x1:16,width:1,height:2.4,y0:.2,landmark:!0},{id:"C5",side:"orange",x0:16,x1:17,width:1,height:2.4,y0:.2},{id:"C6",side:"orange",x0:17,x1:18,width:1,height:2.4,y0:.2},{id:"C7",side:"orange",x0:18,x1:19,width:1,height:2.4,y0:.2},{id:"C8",side:"orange",x0:19,x1:20,width:1,height:2.4,y0:.2,landmark:!0},{id:"C9",side:"orange",x0:20,x1:21,width:1,height:2.4,y0:.2},{id:"D11",side:"orange",x0:21,x1:26,width:5,height:2.4,y0:.2,landmark:!0,note:"Khu tương tác, bảng Tết Nguyên Đán 1953"},{id:"B1",side:"stone",x0:0,x1:.85,width:.85,height:2.4,y0:.3},{id:"B2",side:"stone",x0:.85,x1:3.85,width:3,height:2.4,y0:.3,landmark:!0},{id:"B3",side:"stone",x0:3.85,x1:4.7,width:.85,height:1.8,y0:.3},{id:"B4",side:"stone",x0:4.7,x1:5.2,width:.5,height:1.2,y0:1,note:"tab năm – không làm mốc"},{id:"B5",side:"stone",x0:5.2,x1:6.2,width:1,height:2,y0:.3},{id:"B6",side:"stone",x0:6.2,x1:7.2,width:1,height:1.6,y0:.3},{id:"B7",side:"stone",x0:7.2,x1:7.7,width:.5,height:1.2,y0:1,note:"tab năm – không làm mốc"},{id:"B8",side:"stone",x0:7.7,x1:8.7,width:1,height:2,y0:.3},{id:"B9",side:"stone",x0:8.7,x1:9.7,width:1,height:1.6,y0:.3},{id:"B10",side:"stone",x0:9.7,x1:10.2,width:.5,height:1.2,y0:1,note:"tab năm – không làm mốc"},{id:"B11",side:"stone",x0:10.2,x1:11.2,width:1,height:2,y0:.3},{id:"B12",side:"stone",x0:11.2,x1:11.7,width:.5,height:1.2,y0:1,note:"tab năm – không làm mốc"},{id:"B13",side:"stone",x0:11.7,x1:12.7,width:1,height:2,y0:.3},{id:"B14",side:"stone",x0:12.7,x1:13.7,width:1,height:1.6,y0:.3},{id:"B15",side:"stone",x0:13.7,x1:14.7,width:1,height:2,y0:.3},{id:"B16",side:"stone",x0:14.7,x1:15.7,width:1,height:1.6,y0:.3},{id:"B17",side:"stone",x0:15.7,x1:16.2,width:.5,height:1.2,y0:1,note:"tab năm – không làm mốc"},{id:"B18",side:"stone",x0:16.2,x1:17.2,width:1,height:2,y0:.3},{id:"B19",side:"stone",x0:17.2,x1:17.7,width:.5,height:1.2,y0:1,note:"tab năm – không làm mốc"},{id:"B20",side:"stone",x0:17.7,x1:18.7,width:1,height:2,y0:.3},{id:"B21",side:"stone",x0:18.7,x1:19.7,width:1,height:1.6,y0:.3},{id:"B22",side:"stone",x0:19.7,x1:20.2,width:.5,height:1.2,y0:1,note:"tab năm – không làm mốc"},{id:"B23",side:"stone",x0:20.2,x1:21.2,width:1,height:2,y0:.3},{id:"B24",side:"stone",x0:21.2,x1:21.7,width:.5,height:1.2,y0:1,note:"tab năm – không làm mốc"},{id:"B25",side:"stone",x0:21.7,x1:22.7,width:1,height:2,y0:.3},{id:"B26",side:"stone",x0:22.7,x1:23.2,width:.5,height:1.2,y0:1,note:"tab năm – không làm mốc"},{id:"B27",side:"stone",x0:23.2,x1:24.2,width:1,height:2,y0:.3},{id:"B28",side:"stone",x0:24.2,x1:25.2,width:1,height:1.6,y0:.3}],Ov=[{id:"floor",type:"plane",axis:"y",value:0,restSurface:!0},{id:"wall-orange",type:"plane",axis:"z",value:1.25,normal:-1},{id:"wall-stone",type:"plane",axis:"z",value:-1.25,normal:1},{id:"gable-entry",type:"plane",axis:"x",value:0,normal:1},{id:"gable-end",type:"plane",axis:"x",value:26,normal:-1},{id:"table-D14",type:"aabb",min:[22,0,.55],max:[25,1,1.25],restSurface:!0,note:"Bàn D14 3 x 0,7 x cao 1,0 m"},{id:"real-peach-tree",type:"cylinder",center:[23.5,0,.9],radius:1.3,yMin:1,yMax:4,soft:!0,note:"Cây đào thật cao 3 m trên bàn – vùng hoa ảo mờ đi [vị trí x CẦN ĐO, hồ sơ ghi ≈24]"}],Bv={corridor:Nv,user:Uv,camera:Fv,panels:kv,colliders:Ov},yt=Bv,zv=yt.corridor.width,_t=zv/2,Fn=yt.corridor.length,hd=yt.panels.filter(s=>s.landmark);function Hv(s){return(s.x0+s.x1)/2}class Gv{constructor(){this.position=new R(.6,yt.user.eyeHeightDefault,0),this.sigma=.5,this.lastFix=null,this.enabled=!0,this.bounded=!1,this.target=this.position.clone()}onStep(e){if(!this.enabled)return;const t=new R(e.x,0,e.z);if(t.lengthSq()<.04)return;t.normalize();const n=yt.user.strideMeters;this.target.x+=t.x*n*(this.bounded?.95:1),this.target.z+=t.z*n*(this.bounded?.25:1),this.clamp(),this.sigma=Math.min(3,this.sigma+.06)}fixAtPanel(e){this.target.x=Hv(e);const t=Math.min(1,yt.corridor.width-.6);this.target.z=e.side==="orange"?_t-t:-_t+t,this.clamp(),this.position.copy(this.target),this.sigma=.3,this.lastFix=e.id}fixAbsolute(e,t,n,i=1){const r=De.clamp(i,0,1);this.target.x=De.lerp(this.target.x,e,r),this.target.z=De.lerp(this.target.z,t,r),n!==void 0&&(this.target.y=De.clamp(n,yt.user.eyeHeightMin,yt.user.eyeHeightMax)),this.clamp(),this.sigma=.25}setX(e){this.target.x=e,this.clamp(),this.position.copy(this.target)}setEyeHeight(e){this.target.y=De.clamp(e,yt.user.eyeHeightMin,yt.user.eyeHeightMax)}clamp(){this.bounded&&(this.target.x=De.clamp(this.target.x,.3,Fn-.3),this.target.z=De.clamp(this.target.z,-_t+.35,_t-.35))}update(e){this.position.lerp(this.target,1-Math.exp(-e*6))}}const Ft={minNormalY:.97,minCameraHeight:.9,maxCameraHeight:2.4,mergeTolerance:.06,minSamples:10,minSpan:.5,strongSamples:30,strongSpan:1,floorTolerance:.1,cameraWindow:10,evidenceWindow:3,maxGap:.6,minSpread:.35},Vv=16;class Wv{constructor(){this.tiers=[],this.camera=[],this.now=0}reset(){this.tiers.length=0,this.camera.length=0,this.now=0}observeCamera(e,t){if(!Number.isFinite(e)||!Number.isFinite(t))return;this.now=t,this.tiers=this.tiers.filter(i=>t-i.last<=Ft.maxGap);const n=this.camera[this.camera.length-1];for(!n||t-n.t>=.25?this.camera.push({y:e,t}):e>n.y&&(n.y=e);this.camera.length&&t-this.camera[0].t>Ft.cameraWindow;)this.camera.shift()}addHit(e,t,n,i,r){if(![e,t,n,i,r].every(Number.isFinite)||t<Ft.minNormalY)return!1;let a=null,o=Ft.mergeTolerance;for(const c of this.tiers){const l=Math.abs(c.y-e);l<=o&&(o=l,a=c)}if(a)n-a.countedAt>=.025&&(a.n++,a.countedAt=n),a.y+=(e-a.y)/Math.min(a.n,200),a.last=n,a.points=a.points.filter(c=>n-c.t<=Ft.evidenceWindow),a.points.some(c=>Math.hypot(c.x-i,c.z-r)<.12)||a.points.push({x:i,z:r,t:n});else{if(this.tiers.length>=Vv){let c=0;for(let l=1;l<this.tiers.length;l++)this.tiers[l].last<this.tiers[c].last&&(c=l);this.tiers.splice(c,1)}this.tiers.push({y:e,n:1,first:n,last:n,countedAt:n,points:[{x:i,z:r,t:n}]})}return!0}get cameraY(){let e=-1/0;for(const t of this.camera)t.y>e&&(e=t.y);return e}lowest(e,t){const n=this.cameraY;let i=null;for(const r of this.tiers){if(this.now-r.last>Ft.maxGap||r.n<e||r.last-r.first<t)continue;const a=r.points.filter(c=>this.now-c.t<=Ft.evidenceWindow);if(a.length<3||!a.some(c=>a.some(l=>Math.hypot(c.x-l.x,c.z-l.z)>=Ft.minSpread)))continue;const o=n-r.y;o<Ft.minCameraHeight||o>Ft.maxCameraHeight||(i===null||r.y<i)&&(i=r.y)}return i}get floorY(){return this.lowest(Ft.minSamples,Ft.minSpan)}get confirmedFloorY(){return this.lowest(Ft.strongSamples,Ft.strongSpan)}classify(e){const t=this.floorY;return t!==null?e>t+Ft.floorTolerance?"raised":e>=t-Ft.floorTolerance?"floor":"pending":this.cameraY-e<Ft.minCameraHeight?"raised":"pending"}}const qv=[[0,0],[-.35,-.2],[.35,-.2]],jv=8,Xv=.35,Yv=2,Kv=.6,dd=16579312,$v=14832959;class Qv{constructor(e,t,n){this.renderer=e,this.world=t,this.supported=!1,this.session=null,this.placed=!1,this.status="scanning",this.detector=new Wv,this.sources=[],this.refSpace=null,this.anchor=null,this.anchorGen=0,this.anchorPending=!1,this.placement=new ve,this.placedPos=new R,this.placedQ=new Qe,this.floorY=0,this.correctAfter=0,this.wantStatus="scanning",this.wantSince=0,this.camPos=new R,this.camFwd=new R(0,0,-1),this.canPlace=!1;const i=new yl(.07,.09,40).rotateX(-Math.PI/2);this.reticleMat=new yn({color:dd,transparent:!0,opacity:.9}),this.reticle=new st(i,this.reticleMat),this.reticle.matrixAutoUpdate=!1,this.reticle.visible=!1,n.add(this.reticle)}async detect(){try{this.supported=!!(navigator.xr&&await navigator.xr.isSessionSupported("immersive-ar"))}catch{this.supported=!1}return this.supported}async start(e){if(!navigator.xr)return!1;const t=await navigator.xr.requestSession("immersive-ar",{requiredFeatures:["hit-test"],optionalFeatures:["dom-overlay","anchors"],domOverlay:{root:e}});this.session=t,this.renderer.xr.enabled=!0,this.renderer.xr.setFramebufferScaleFactor(Kv),this.renderer.xr.setReferenceSpaceType("local"),await this.renderer.xr.setSession(t),this.refSpace=this.renderer.xr.getReferenceSpace();const n=await t.requestReferenceSpace("viewer");return this.sources=await this.createSources(t,n),this.resetPlacement(),e.addEventListener("beforexrselect",i=>{i.target?.closest?.("button, a, input, label, .sheet-backdrop, .ob")&&i.preventDefault()}),t.addEventListener("select",()=>this.onSelect()),t.addEventListener("end",()=>{for(const i of this.sources)i.source.cancel();this.sources=[],this.dropAnchor(),this.session=null,this.renderer.xr.enabled=!1,this.world.matrixAutoUpdate=!0,this.world.matrix.identity(),this.world.position.set(0,0,0),this.world.quaternion.identity(),this.world.visible=!0,this.reticle.visible=!1,this.onEnd?.()}),!0}async createSources(e,t){const n=([r,a])=>{const o=new XRRay({x:0,y:0,z:0,w:1},{x:r,y:a,z:-1,w:0});return Promise.resolve(e.requestHitTestSource?.({space:t,offsetRay:o})).catch(()=>{})};return(await Promise.all(qv.map(n))).flatMap((r,a)=>r?[{source:r,center:a===0}]:[])}resetPlacement(){this.placed=!1,this.canPlace=!1,this.reticle.visible=!1,this.detector.reset(),this.dropAnchor(),this.world.matrixAutoUpdate=!1,this.world.visible=!1,this.wantStatus="scanning",this.status="scanning",this.onStatus?.("scanning")}replace(){this.session&&this.resetPlacement()}onSelect(){if(this.placed)return;if(!this.canPlace||!this.reticle.visible){this.status==="notFloor"&&this.onRejected?.();return}const e=Math.atan2(-this.camFwd.z,this.camFwd.x);this.placedPos.setFromMatrixPosition(this.reticle.matrix),this.placedQ.setFromAxisAngle(new R(0,1,0),e),this.floorY=this.placedPos.y,this.placed=!0,this.applyPlacement(),this.world.visible=!0,this.reticle.visible=!1,this.correctAfter=0,this.setStatus("placed"),this.onPlaced?.()}applyPlacement(){this.placement.compose(this.placedPos,this.placedQ,new R(1,1,1)),this.world.matrix.copy(this.placement),this.world.matrixWorldNeedsUpdate=!0,this.dropAnchor(),this.anchorPending=!0}dropAnchor(){this.anchorGen++,this.anchorPending=!1,this.anchor?.delete?.(),this.anchor=null}createAnchor(e){this.anchorPending=!1;const t=this.anchorGen,{x:n,y:i,z:r}=this.placedPos;try{e.createAnchor?.(new XRRigidTransform({x:n,y:i,z:r}),this.refSpace)?.then(a=>{t===this.anchorGen?this.anchor=a:a.delete?.()}).catch(()=>{})}catch{}}frame(e,t=performance.now()){if(!e||!this.refSpace)return;const n=t/1e3,i=e.getViewerPose(this.refSpace);if(!i||i.emulatedPosition){this.canPlace=!1,this.reticle.visible=!1;return}if(i){const{position:a,orientation:o}=i.transform;this.camPos.set(a.x,a.y,a.z),this.camFwd.set(0,0,-1).applyQuaternion(new Qe(o.x,o.y,o.z,o.w)),this.detector.observeCamera(a.y,n)}const r=this.scan(e,n);if(!this.placed)this.updateReticle(r,n);else if(this.correctFloor(n),this.anchorPending&&this.createAnchor(e),this.anchor){const a=e.getPose(this.anchor.anchorSpace,this.refSpace);if(a){const{x:o,y:c,z:l}=a.transform.position;this.world.matrix.compose(new R(o,c,l),this.placedQ,new R(1,1,1)),this.world.matrixWorldNeedsUpdate=!0}}}scan(e,t){let n=null;return this.sources.forEach(({source:i,center:r})=>{e.getHitTestResults(i).slice(0,1).forEach(a=>{const o=a.getPose(this.refSpace);if(!o)return;const{position:c,orientation:l}=o.transform,h=1-2*(l.x*l.x+l.z*l.z);if(Math.hypot(c.x-this.camPos.x,c.z-this.camPos.z)>jv||h<-.92&&c.y>this.camPos.y+.3)return;const d=this.detector.addHit(c.y,h,t,c.x,c.z);r&&d&&(n=new R(c.x,c.y,c.z))})}),n}updateReticle(e,t){const n=this.detector.floorY,i=e?this.detector.classify(e.y):null;let r=null,a="scanning";i==="raised"?(r=e,a="notFloor"):i==="floor"&&(r=e.setY(n),a="ready"),this.canPlace=a==="ready",this.reticle.visible=!!r,r&&this.reticle.matrix.makeTranslation(r.x,r.y,r.z),this.reticleMat.color.setHex(a==="notFloor"?$v:dd),a!==this.wantStatus&&(this.wantStatus=a,this.wantSince=t),(t-this.wantSince>=Xv||a==="ready")&&this.setStatus(a)}correctFloor(e){if(e<this.correctAfter)return;const t=this.detector.confirmedFloorY;if(t===null)return;const i=t-this.floorY<-.12;i&&(this.floorY=this.placedPos.y=t,this.applyPlacement(),i&&(this.correctAfter=e+Yv,this.onFloorChanged?.()))}setStatus(e){this.wantStatus=e,e!==this.status&&(this.status=e,this.onStatus?.(e))}end(){this.session?.end().catch(()=>{})}}const _e=36,Ze=64,Jv=.6,Zv=2.8,ex=10,tx=150,qu=Math.floor(Ze*.82),ud=5,pa=6,fd=35,nx=.55,ix=.7,ir=.15,sx=3,rx=8,sr=De.clamp,rr=new R;function ax(s,e,t,n){for(let i=0;i<Ze;i++){const r=1-(i+.5)/Ze*2;for(let a=0;a<_e;a++)rr.set((a+.5)/_e*2-1,r,.5).applyMatrix4(e).applyQuaternion(t).normalize(),s[i*_e+a]=rr.y<-.02?n/-rr.y*Math.hypot(rr.x,rr.z):1/0}}class ox{constructor(){this.mask=new Float32Array(_e*Ze),this.Y=new Float32Array(_e*Ze),this.Cb=new Float32Array(_e*Ze),this.Cr=new Float32Array(_e*Ze),this.target=new Uint8Array(_e*Ze),this.scratch=new Uint8Array(_e*Ze),this.stack=new Int32Array(_e*Ze),this.model=null,this.candidate=null,this.candidateTime=0}get ready(){return!!this.model}reset(){this.model=null,this.candidate=null,this.candidateTime=0,this.mask.fill(0)}update(e,t,n){this.toYCbCr(e);const i=this.pickSeeds(t);if(n=sr(n,0,.25),i.length>=ex?this.learn(i,n):(this.candidate=null,this.candidateTime=0),!this.model)return;this.grow(i,t);const r=1-Math.exp(-n*rx);for(let a=0;a<this.mask.length;a++)this.mask[a]=this.target[a]?this.mask[a]+(1-this.mask[a])*r:0}sample(e,t){if(!this.model||!Number.isFinite(e)||!Number.isFinite(t)||Math.abs(e)>1||Math.abs(t)>1)return 0;const n=sr((e*.5+.5)*_e-.5,0,_e-1.001),i=sr((.5-t*.5)*Ze-.5,0,Ze-1.001),r=n|0,a=i|0,o=n-r,c=i-a,l=a*_e+r,h=this.mask,d=h[l]+(h[l+1]-h[l])*o,u=h[l+_e]+(h[l+_e+1]-h[l+_e])*o;return d+(u-d)*c}toYCbCr(e){for(let t=0;t<Ze;t++)for(let n=0;n<_e;n++){let i=0,r=0,a=0,o=0;for(let l=Math.max(0,t-1);l<=Math.min(Ze-1,t+1);l++)for(let h=Math.max(0,n-1);h<=Math.min(_e-1,n+1);h++){const d=(l*_e+h)*4;i+=e[d],r+=e[d+1],a+=e[d+2],o++}i/=o,r/=o,a/=o;const c=t*_e+n;this.Y[c]=.299*i+.587*r+.114*a,this.Cb[c]=-.169*i-.331*r+.5*a,this.Cr[c]=.5*i-.419*r-.081*a}}pickSeeds(e){const t=[];for(let n=Math.floor(Ze*.55);n<qu;n++)for(let i=Math.floor(_e*.18);i<_e*.82;i++){const r=n*_e+i;e[r]>=Jv&&e[r]<=Zv&&t.push(r)}return t}learn(e,t){const{Y:n,Cb:i,Cr:r}=this,a=(A,T,S,P)=>Math.abs(i[A]-S)<pa&&Math.abs(r[A]-P)<pa&&Math.abs(n[A]-T)<fd,o=Math.max(1,Math.floor(e.length/tx));let c=-1,l=0;for(let A=0;A<e.length;A+=o){const T=e[A];let S=0;for(let P=0;P<e.length;P+=o)a(e[P],n[T],i[T],r[T])&&S++;S>l&&(l=S,c=T)}if(c<0)return;let h=n[c],d=i[c],u=r[c],f=0,g=0,b=0,m=0;for(let A=0;A<4;A++){let T=0,S=0,P=0;f=g=b=m=0;for(const F of e)a(F,h,d,u)&&(f++,T+=n[F],S+=i[F],P+=r[F],g+=n[F]*n[F],b+=i[F]*i[F],m+=r[F]*r[F]);if(!f)return;h=T/f,d=S/f,u=P/f}if(f/e.length<nx){this.candidate=null,this.candidateTime=0;return}const p=Math.sqrt(Math.max(0,g/f-h*h)),x=Math.sqrt(Math.max(0,Math.max(b/f-d*d,m/f-u*u))),v={y:h,cb:d,cr:u,tolY:sr(p*2.5,30,70),tolC:sr(x*2.5,6,14)},y=this.model;if(y&&Math.abs(y.cb-d)<y.tolC&&Math.abs(y.cr-u)<y.tolC&&Math.abs(y.y-h)<y.tolY)this.candidate=null,this.candidateTime=0,y.y+=(h-y.y)*ir,y.cb+=(d-y.cb)*ir,y.cr+=(u-y.cr)*ir,y.tolY+=(v.tolY-y.tolY)*ir,y.tolC+=(v.tolC-y.tolC)*ir;else{const A=this.candidate;(!A||Math.abs(A.cb-d)>pa||Math.abs(A.cr-u)>pa||Math.abs(A.y-h)>fd)&&(this.candidate=v,this.candidateTime=0),this.candidateTime+=t,this.candidateTime>=(y?sx:ix)&&(this.model=v,this.mask.fill(0),this.candidate=null,this.candidateTime=0)}}matches(e){const t=this.model;return Math.abs(this.Cb[e]-t.cb)<t.tolC&&Math.abs(this.Cr[e]-t.cr)<t.tolC&&Math.abs(this.Y[e]-t.y)<t.tolY}grow(e,t){const{target:n,stack:i,scratch:r}=this;n.fill(0);let a=0;for(const c of e)this.matches(c)&&(n[c]=1,i[a++]=c);const o=c=>{n[c]||!Number.isFinite(t[c])||t[c]>ud||!this.matches(c)||(n[c]=1,i[a++]=c)};for(;a>0;){const c=i[--a],l=c%_e;l>0&&o(c-1),l<_e-1&&o(c+1),c>=_e&&o(c-_e),c<_e*(Ze-1)&&o(c+_e)}r.set(n);for(let c=0;c<n.length;c++){if(r[c]||!Number.isFinite(t[c])||t[c]>ud||!this.matches(c))continue;const l=c%_e;(l>0?r[c-1]:0)+(l<_e-1?r[c+1]:0)+(c>=_e?r[c-_e]:0)+(c<_e*(Ze-1)?r[c+_e]:0)>=3&&(n[c]=1)}}}const ar=.2,tn=48,pd=tn/2,md=4.5,Go=.7,cx=1.6,lx=.35,hx=10,gd=1,dx=-.25,or=new R;class ux{constructor(e=hx){this.forgetAfter=e,this.score=new Float32Array(tn*tn),this.shiftBuf=new Float32Array(tn*tn),this.body=new Uint8Array(_e*Ze),this.bodyStack=new Int32Array(_e*Ze),this.cx=0,this.cz=0}reset(){this.score.fill(0),this.cx=this.cz=0}index(e,t){const n=Math.floor(e/ar)-this.cx+pd,i=Math.floor(t/ar)-this.cz+pd;return n<0||i<0||n>=tn||i>=tn?-1:i*tn+n}recenter(e,t){const n=Math.floor(e/ar),i=Math.floor(t/ar),r=n-this.cx,a=i-this.cz;if(!(Math.abs(r)<6&&Math.abs(a)<6)){this.shiftBuf.fill(0);for(let o=0;o<tn;o++)for(let c=0;c<tn;c++){const l=c-r,h=o-a;l>=0&&h>=0&&l<tn&&h<tn&&(this.shiftBuf[h*tn+l]=this.score[o*tn+c])}this.score.set(this.shiftBuf),this.cx=n,this.cz=i}}markBody(e){const{body:t,bodyStack:n}=this;t.fill(0);let i=0;const r=a=>{t[a]||e[a]>.6||(t[a]=1,n[i++]=a)};for(let a=0;a<_e;a++)r((Ze-1)*_e+a);for(;i>0;){const a=n[--i],o=a%_e;o>0&&r(a-1),o<_e-1&&r(a+1),a>=_e&&r(a-_e),a<_e*(Ze-1)&&r(a+_e)}}observe(e,t,n,i,r){const a=Math.exp(-r/this.forgetAfter);for(let o=0;o<this.score.length;o++)this.score[o]*=a;this.markBody(e);for(let o=0;o<Ze;o++){const c=1-(o+.5)/Ze*2;for(let l=0;l<_e;l++){const h=e[o*_e+l],d=h>.6;if(!d&&(h>.3||o>=qu)||(or.set((l+.5)/_e*2-1,c,.5).applyMatrix4(t).applyQuaternion(n).normalize(),or.y>=-.02))continue;const u=i.y/-or.y,f=or.x*u,g=or.z*u,b=Math.hypot(f,g);if(b>md||!d&&(b<Go||b<cx&&this.body[o*_e+l]))continue;const m=this.index(i.x+f,i.z+g);m>=0&&(this.score[m]+=((d?1:-1)-this.score[m])*lx)}}}wallAlong(e,t,n,i,r=md){const a=ar*.5;let o=-1;for(let c=Go;c<=r;c+=a){const l=this.index(e+n*c,t+i*c);if(l<0)break;if(this.score[l]<dx){if(o<0&&(o=c),c-o>=gd)return o}else o=-1}return o>=0&&r-o<gd+a?o:null}isInside(e,t,n,i){const r=Math.hypot(n-e,i-t);if(r<Go)return!0;const a=this.wallAlong(e,t,(n-e)/r,(i-t)/r);return a===null||r<a}}const In=240,ei=120,fx=.55,ju=Math.PI/180,px=-6*ju,mx=-2*ju,Xu=De.smoothstep,bd=new R,gx=new Qe,bx=new ve;function _d(s,e,t,n,i){const r=Math.min(n,e-1.001),a=Math.min(i,t-1.001),o=r|0,c=a|0,l=r-o,h=a-c,d=c*e+o,u=s[d]+(s[d+1]-s[d])*l,f=s[d+e]+(s[d+e+1]-s[d+e])*l;return(u+(f-u)*h)/255}const vd=(s,e)=>s*(1-Xu(e,px,mx));class _x{constructor(){this.floorMask=new Float32Array(_e*Ze),this.frames=0,this.floor=new Float32Array(In*ei),this.sinEl=new Float32Array(ei),this.cosEl=new Float32Array(ei),this.sinAz=new Float32Array(In),this.cosAz=new Float32Array(In),this.elev=new Float32Array(ei);for(let e=0;e<ei;e++)this.elev[e]=((e+.5)/ei-.5)*Math.PI,this.sinEl[e]=Math.sin(this.elev[e]),this.cosEl[e]=Math.cos(this.elev[e]);for(let e=0;e<In;e++){const t=((e+.5)/In-.5)*Math.PI*2;this.sinAz[e]=Math.sin(t),this.cosAz[e]=Math.cos(t)}}get ready(){return this.frames>0}reset(){this.frames&&(this.frames=0,this.floor.fill(0),this.floorMask.fill(0))}integrate(e,t,n,i){const r=t.elements,a=r[0],o=r[5],c=bx.makeRotationFromQuaternion(gx.copy(i).invert()).elements,{floor:l,sinEl:h,cosEl:d,sinAz:u,cosAz:f,elev:g}=this,b=e.w-1,m=e.h-1;for(let p=0;p<ei;p++){const x=h[p],v=d[p],y=g[p];for(let A=0;A<In;A++){const T=v*u[A],S=-v*f[A],P=c[2]*T+c[6]*x+c[10]*S;if(P>-.05)continue;const F=a*(c[0]*T+c[4]*x+c[8]*S)/-P;if(F<-1||F>1)continue;const _=o*(c[1]*T+c[5]*x+c[9]*S)/-P;if(_<-1||_>1)continue;const w=(F*.5+.5)*b,U=(.5-_*.5)*m,O=p*In+A;l[O]+=(vd(_d(e.floor,e.w,e.h,w,U),y)-l[O])*fx}}this.frames++,this.buildMasks(e,n,i)}buildMasks(e,t,n){for(let i=0;i<Ze;i++){const r=1-(i+.5)/Ze*2,a=(i+.5)/Ze*(e.h-1);for(let o=0;o<_e;o++){const c=(o+.5)/_e*(e.w-1);bd.set((o+.5)/_e*2-1,r,.5).applyMatrix4(t).applyQuaternion(n).normalize();const l=Math.asin(De.clamp(bd.y,-1,1)),h=i*_e+o;this.floorMask[h]=vd(_d(e.floor,e.w,e.h,c,a),l)}}}cell(e,t,n){const i=Math.hypot(e,t,n)||1,r=Math.floor((Math.atan2(e,-n)/(Math.PI*2)+.5)*In),a=Math.floor((Math.asin(De.clamp(t/i,-1,1))/Math.PI+.5)*ei);return Math.min(ei-1,a)*In+Math.min(In-1,r)}sample(e,t,n,i,r){return Xu(this.floor[this.cell(n,i,r)],.35,.65)}}const Yu=129,Ku=225;class vx{constructor(){this.status="idle",this.busy=!1,this.lastMs=0,this.worker=null,this.generation=0,this.sentGeneration=0,this.pose={proj:new ve,projInv:new ve,q:new Qe,pos:new R}}start(){if(this.status==="idle"){this.status="loading";try{this.worker=new Worker(new URL(""+new URL("surface-worker-itdY7OrN.js",import.meta.url).href,import.meta.url),{type:"module"})}catch{this.status="error";return}this.worker.onmessage=e=>this.receive(e.data),this.worker.onerror=e=>this.fail(e.message),this.worker.postMessage({type:"init",url:new URL("./models/surface/model.json",document.baseURI).href})}}fail(e){console.warn("[nhận diện sàn]",e),this.status="error",this.busy=!1,this.worker?.terminate(),this.worker=null}receive(e){e.type==="ready"?this.status="ready":e.type==="error"?this.fail(e.message):e.type==="result"&&(this.busy=!1,this.lastMs=e.ms??0,this.sentGeneration===this.generation&&this.onResult?.(e.frame,this.pose))}invalidate(){this.generation++}segment(e,t){if(this.status!=="ready"||this.busy||!this.worker)return;this.busy=!0,this.sentGeneration=this.generation,this.pose.proj.copy(t.projectionMatrix),this.pose.projInv.copy(t.projectionMatrixInverse),this.pose.q.copy(t.quaternion),this.pose.pos.copy(t.position);const n=e.buffer;this.worker.postMessage({type:"frame",rgba:n,w:Yu,h:Ku},[n])}}const xx="modulepreload",yx=function(s,e){return new URL(s,e).href},xd={},$u=function(e,t,n){let i=Promise.resolve();if(t&&t.length>0){const a=document.getElementsByTagName("link"),o=document.querySelector("meta[property=csp-nonce]"),c=o?.nonce||o?.getAttribute("nonce");i=Promise.allSettled(t.map(l=>{if(l=yx(l,n),l in xd)return;xd[l]=!0;const h=l.endsWith(".css"),d=h?'[rel="stylesheet"]':"";if(!!n)for(let g=a.length-1;g>=0;g--){const b=a[g];if(b.href===l&&(!h||b.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${l}"]${d}`))return;const f=document.createElement("link");if(f.rel=h?"stylesheet":xx,h||(f.as="script"),f.crossOrigin="",f.href=l,c&&f.setAttribute("nonce",c),document.head.appendChild(f),h)return new Promise((g,b)=>{f.addEventListener("load",g),f.addEventListener("error",()=>b(new Error(`Unable to preload CSS for ${l}`)))})}))}function r(a){const o=new Event("vite:preloadError",{cancelable:!0});if(o.payload=a,window.dispatchEvent(o),!o.defaultPrevented)throw a}return i.then(a=>{for(const o of a||[])o.status==="rejected"&&r(o.reason);return e().catch(r)})};class yd{constructor(){this.y=0,this.init=!1}filter(e,t){return this.y=this.init?t*e+(1-t)*this.y:e,this.init=!0,this.y}get value(){return this.y}reset(){this.init=!1}}class Vo{constructor(e=1.2,t=.6,n=1){this.minCutoff=e,this.beta=t,this.dCutoff=n,this.x=new yd,this.dx=new yd,this.last=-1}alpha(e,t){return 1/(1+1/(2*Math.PI*e)/t)}filter(e,t){const n=this.last<0,i=n?1/30:Math.max(.001,t-this.last);this.last=t;const r=this.x.value,a=n?0:(e-r)/i,o=this.dx.filter(a,this.alpha(this.dCutoff,i)),c=this.minCutoff+this.beta*Math.abs(o);return this.x.filter(e,this.alpha(c,i))}reset(){this.x.reset(),this.dx.reset(),this.last=-1}}class Mx{constructor(e=1.2,t=.6){this.f=[new Vo,new Vo,new Vo],this.f.forEach(n=>{n.minCutoff=e,n.beta=t})}filter(e,t,n,i,r){return r.x=this.f[0].filter(e,i),r.y=this.f[1].filter(t,i),r.z=this.f[2].filter(n,i),r}reset(){this.f.forEach(e=>e.reset())}}const Sx=[[0,1,2,3,4],[0,5,6,7,8],[9,10,11,12],[13,14,15,16],[0,17,18,19,20]],wx=[[5,9],[9,13],[13,17],[0,5],[0,17],[1,5]],Md=[8,12,16,20];class Ex{constructor(){this.status="off",this.active=!1,this.grabbing=!1,this.hz=18,this.paused=!1,this.points=Array.from({length:21},()=>new R),this.palm=new R,this.palmVel=new R,this.cupCenter=new R,this.palmQuat=new Qe,this.depth=0,this.landmarker=null,this.filters=Array.from({length:21},()=>new Mx(1.4,.8)),this.vel=Array.from({length:21},()=>new R),this.prev=Array.from({length:21},()=>new R),this.lastDetect=0,this.lastSeen=0,this.lastVideoTime=-1,this.detectAt=0,this.cols=[],this.pts=Array.from({length:21},()=>new R),this.busy=!1}async init(){if(!(this.status==="loading"||this.status==="ready")){this.status="loading";try{const e=await $u(()=>import("./vision_bundle-7Scx6tXS.js"),[],import.meta.url),t=new URL("./",document.baseURI).href,n={wasmLoaderPath:t+"mediapipe/vision_wasm_internal.js",wasmBinaryPath:t+"mediapipe/vision_wasm_internal.wasm"},i=r=>e.HandLandmarker.createFromOptions(n,{baseOptions:{modelAssetPath:t+"models/hand_landmarker.task",delegate:r},runningMode:"VIDEO",numHands:2,minHandDetectionConfidence:.55,minHandPresenceConfidence:.5,minTrackingConfidence:.5});try{this.landmarker=await i("GPU")}catch{this.landmarker=await i("CPU")}this.status="ready"}catch(e){console.warn("[hand] không tải được Hand Landmarker",e),this.status="error"}}}update(e,t,n){if(this.landmarker&&t.ready&&!this.busy&&!this.paused&&e-this.lastDetect>=1e3/this.hz){const a=t.video;if(a.currentTime!==this.lastVideoTime&&a.readyState>=2){this.lastVideoTime=a.currentTime,this.lastDetect=e,this.busy=!0;try{const o=this.landmarker.detectForVideo(a,e);this.consume(o.landmarks,e,t,n)}catch(o){console.warn("[hand]",o)}this.busy=!1}}const i=this.active;if(this.active&&e-this.lastSeen>300&&(this.active=!1,this.grabbing=!1,this.filters.forEach(a=>a.reset())),i!==this.active&&this.onChange?.(this.active,this.grabbing),!this.active)return;const r=Math.min(.08,(e-this.detectAt)/1e3);for(let a=0;a<21;a++)this.pts[a].copy(this.points[a]).addScaledVector(this.vel[a],r);this.buildColliders()}consume(e,t,n,i){if(!e||!e.length)return;const r=n.layout(),a=Math.tan(De.degToRad(i.fov/2)),o=a*i.aspect,c=r.sh/2/a;let l=null,h=0;const d=(_,w,U)=>Math.hypot((_[w].x-_[U].x)*r.vw*r.scale,(_[w].y-_[U].y)*r.vh*r.scale);for(const _ of e){const w=Math.max(d(_,0,9),d(_,5,17)*1.25);w>h&&(h=w,l=_)}if(!l)return;const u=c*.09/Math.max(1,d(l,0,9)),f=c*.072/Math.max(1,d(l,5,17)),g=Math.min(u,f);if(g>.9||g<.08)return;this.depth=g;const b=g*r.vw*r.scale/c,m=t/1e3;i.updateMatrixWorld();const p={x:0,y:0,z:0},x=!this.active,v=x?1:Math.max(.02,(t-this.detectAt)/1e3);for(let _=0;_<21;_++){const w=l[_],[U,O]=n.videoToNdc(w.x,w.y,r),B=Math.max(.05,g+w.z*b),K=new R(U*o*B,O*a*B,-B).applyMatrix4(i.matrixWorld);this.filters[_].filter(K.x,K.y,K.z,m,p),this.prev[_].copy(this.points[_]),this.points[_].set(p.x,p.y,p.z),x?this.vel[_].set(0,0,0):this.vel[_].subVectors(this.points[_],this.prev[_]).divideScalar(v).clampLength(0,4)}this.detectAt=t,this.lastSeen=t;const y=this.active;this.active=!0;const A=this.points,T=A[0].distanceTo(A[9])||.09;let S=0;for(const _ of Md)S+=A[_].distanceTo(A[0]);S/=Md.length*T;const P=A[4].distanceTo(A[8])/T,F=this.grabbing;this.grabbing?this.grabbing=!(S>1.62&&P>.42):this.grabbing=S<1.38||P<.28,(F!==this.grabbing||!y)&&(this.grabbing&&navigator.vibrate&&navigator.vibrate(12),this.onChange?.(this.active,this.grabbing))}buildColliders(){const e=this.pts,t=[];this.palm.set(0,0,0);for(const c of[0,5,9,13,17,9])this.palm.add(e[c]);this.palm.divideScalar(6),this.palmVel.set(0,0,0);for(const c of[0,5,9,13,17])this.palmVel.add(this.vel[c]);this.palmVel.divideScalar(5),t.push({kind:"sphere",c:this.palm.clone(),r:.042,vel:this.palmVel.clone(),palm:!0});const n=(c,l,h)=>t.push({kind:"capsule",a:e[c].clone(),b:e[l].clone(),r:h,vel:this.vel[c].clone().add(this.vel[l]).multiplyScalar(.5)});for(const c of Sx)for(let l=1;l<c.length;l++)n(c[l-1],c[l],.011);for(const[c,l]of wx)n(c,l,.014);this.cols=t;const i=new R;for(const c of[4,8,12,16,20])i.add(e[c]);i.divideScalar(5),this.cupCenter.copy(this.palm).lerp(i,.45);const r=new R().subVectors(e[17],e[5]).normalize(),a=new R().subVectors(e[9],e[0]).normalize(),o=new R().crossVectors(r,a).normalize();r.crossVectors(a,o),this.palmQuat.setFromRotationMatrix(new ve().makeBasis(r,a,o))}colliders(){return this.active?this.cols:[]}cup(){return this.active?{center:this.cupCenter,radius:.06,quaternion:this.palmQuat,grabbing:this.grabbing,vel:this.palmVel}:null}get renderPoints(){return this.pts}}const yi=class yi{constructor(e){const t=yi.SEGS.length*2+yi.PALM.length;this.pos=new Float32Array(t*9);const n=new Ct;n.setAttribute("position",new St(this.pos,3).setUsage(On)),this.mesh=new st(n,new yn({colorWrite:!1,depthWrite:!0,side:vn})),this.mesh.renderOrder=-1,this.mesh.frustumCulled=!1,this.mesh.visible=!1,e.add(this.mesh)}update(e,t){if(this.mesh.visible=e.active,!e.active)return;const n=e.renderPoints;let i=0;const r=g=>{this.pos[i++]=g.x,this.pos[i++]=g.y,this.pos[i++]=g.z},a=new R,o=new R,c=new R,l=new R,h=new R,d=new R,u=new R;for(const[g,b]of yi.SEGS){const m=n[g],p=n[b];c.subVectors(p,m);const x=c.length()||1e-4;c.divideScalar(x),o.subVectors(t,m).normalize(),a.crossVectors(c,o).normalize().multiplyScalar(.012);const v=.008;l.copy(m).addScaledVector(c,-v).add(a),h.copy(m).addScaledVector(c,-v).sub(a),d.copy(p).addScaledVector(c,v).add(a),u.copy(p).addScaledVector(c,v).sub(a),r(l),r(h),r(d),r(h),r(u),r(d)}for(const[g,b,m]of yi.PALM)r(n[g]),r(n[b]),r(n[m]);const f=this.mesh.geometry.getAttribute("position");f.needsUpdate=!0}};yi.SEGS=[[1,2],[2,3],[3,4],[5,6],[6,7],[7,8],[9,10],[10,11],[11,12],[13,14],[14,15],[15,16],[17,18],[18,19],[19,20]],yi.PALM=[[0,1,5],[0,5,9],[0,9,13],[0,13,17],[1,2,5]];let Qc=yi;class Ax{constructor(){this.kind="manual"}async start(){}stop(){}get panels(){return hd}confirm(e){const t=hd.find(n=>n.id===e);t&&this.onFix?.({panel:t,yawToNormal:0,distance:1,confidence:1})}}const Jc=4,Tx=2,_n={petalPink:[0,1,2,3],blossomPink:[4,5],blossomBrand:6,petalBrand:7};let ma=null;function Al(s,e,t,n,i){s.beginPath(),s.moveTo(0,t*.5),s.bezierCurveTo(-e*i,t*.25,-e*.62,-t*.28,-e*.32,-t*.47),s.quadraticCurveTo(-e*.12,-t*.52,0,-t*(.5-n)),s.quadraticCurveTo(e*.12,-t*.52,e*.32,-t*.47),s.bezierCurveTo(e*.62,-t*.28,e*i,t*.25,0,t*.5),s.closePath()}function Rx(s,e,t,n,i){const r=["#FFD3E1","#FFC1D6","#FFCBDB","#FFB8CE"][i],a=["#FF9DBC","#FF8FB1","#F58AAE","#FF8FB1"][i],o=n*[.62,.7,.58,.66][i],c=n*[.86,.8,.9,.84][i];s.save(),s.translate(e,t),s.rotate([0,.15,-.1,.06][i]),Al(s,o,c,[.1,.07,.12,.05][i],[.55,.62,.5,.58][i]);const l=s.createRadialGradient(0,c*.42,2,0,-c*.1,c*.75);l.addColorStop(0,a),l.addColorStop(.45,r),l.addColorStop(1,"#FFF1F5"),s.fillStyle=l,s.fill(),s.globalAlpha=.18,s.strokeStyle=a,s.lineWidth=n*.01;for(let h=-2;h<=2;h++)s.beginPath(),s.moveTo(0,c*.45),s.quadraticCurveTo(h*o*.12,0,h*o*.2,-c*.38),s.stroke();s.restore()}function Wo(s,e,t,n,i,r){s.save(),s.translate(e,t),s.rotate(r*.6);for(let a=0;a<5;a++){s.save(),s.rotate(a/5*Math.PI*2),s.translate(0,-n*.22);const o=n*.42,c=n*.46;if(Al(s,o,c,.08,.6),i)s.fillStyle=Tn.cream,s.fill(),s.lineWidth=n*.028,s.strokeStyle=Tn.cobalt,s.stroke(),s.lineWidth=n*.012,s.beginPath(),s.moveTo(0,c*.4),s.lineTo(0,-c*.05),s.stroke();else{const l=s.createRadialGradient(0,c*.45,1,0,0,c*.7);l.addColorStop(0,r?"#F27FA6":"#FF8FB1"),l.addColorStop(.5,"#FFC1D6"),l.addColorStop(1,"#FFF0F5"),s.fillStyle=l,s.fill()}s.restore()}for(let a=0;a<12;a++){const o=a/12*Math.PI*2+r,c=n*(.1+a%3*.025);s.strokeStyle=i?Tn.cobalt:"#C2456F",s.lineWidth=n*.01,s.beginPath(),s.moveTo(0,0),s.lineTo(Math.cos(o)*c,Math.sin(o)*c),s.stroke(),s.fillStyle=i?Tn.cobalt:"#F6C34A",s.beginPath(),s.arc(Math.cos(o)*c,Math.sin(o)*c,n*.018,0,Math.PI*2),s.fill()}s.fillStyle=i?Tn.cobalt:"#B8335F",s.beginPath(),s.arc(0,0,n*.035,0,Math.PI*2),s.fill(),s.restore()}function Cx(s,e,t,n){s.save(),s.translate(e,t);const i=n*.6,r=n*.84;Al(s,i,r,.09,.56),s.fillStyle=Tn.cream,s.fill(),s.lineWidth=n*.035,s.strokeStyle=Tn.cobalt,s.stroke(),s.lineWidth=n*.014,s.beginPath(),s.moveTo(0,r*.42),s.quadraticCurveTo(i*.05,0,0,-r*.25),s.stroke(),s.restore()}function Tl(){if(ma)return ma;const s=256,e=document.createElement("canvas");e.width=s*Jc,e.height=s*Tx;const t=e.getContext("2d");for(let c=0;c<4;c++)Rx(t,s*c+s/2,s/2,s*.92,c);Wo(t,s*0+s/2,s+s/2,s*.95,!1,0),Wo(t,s*1+s/2,s+s/2,s*.95,!1,1),Wo(t,s*2+s/2,s+s/2,s*.95,!0,0),Cx(t,s*3+s/2,s+s/2,s*.92);const n=new $c(e);n.colorSpace=kt,n.generateMipmaps=!0,n.minFilter=zn,n.anisotropy=2;const i=document.createElement("canvas");i.width=i.height=64;const r=i.getContext("2d"),a=r.createRadialGradient(32,32,2,32,32,30);a.addColorStop(0,"rgba(40,20,30,0.55)"),a.addColorStop(1,"rgba(40,20,30,0)"),r.fillStyle=a,r.fillRect(0,0,64,64);const o=new $c(i);return ma={canvas:e,texture:n,shadow:o},ma}function Px(s){return{sx:s%Jc*256,sy:Math.floor(s/Jc)*256,s:256}}class Lx{constructor(){this.strength=.22,this.base=new R(.05,0,.02),this.gusts=[],this.t=0}addGust(e,t,n=.5,i=.7){this.gusts.length>12&&this.gusts.shift(),this.gusts.push({pos:e.clone(),vel:t.clone().clampLength(0,3),radius:n,life:i,maxLife:i})}update(e){this.t+=e;for(let t=this.gusts.length-1;t>=0;t--){const n=this.gusts[t];n.life-=e,n.pos.addScaledVector(n.vel,e*.6),n.radius+=e*.5,n.life<=0&&this.gusts.splice(t,1)}}sample(e,t,n,i){const r=this.t,a=this.strength;i.set(this.base.x+a*(Math.sin(.7*e+.9*r)+.6*Math.sin(1.3*n-.6*r+1.7)),a*.35*Math.sin(.8*t+1.1*r+e),this.base.z+a*(Math.sin(.9*n+.5*r+2.1)+.5*Math.sin(1.7*e+.8*r)));for(const o of this.gusts){const c=e-o.pos.x,l=t-o.pos.y,h=n-o.pos.z,d=c*c+l*l+h*h,u=o.radius*o.radius;if(d<u){const f=(1-d/u)*(o.life/o.maxLife);i.addScaledVector(o.vel,f)}}return i}}const Ix=new R,ga=new R;function Sd(s,e,t){if(s.kind==="sphere")return t.copy(s.c),e.distanceTo(s.c);ga.subVectors(s.b,s.a);const n=ga.lengthSq()||1e-6,i=De.clamp(Ix.subVectors(e,s.a).dot(ga)/n,0,1);return t.copy(s.a).addScaledVector(ga,i),e.distanceTo(t)}const ln=yt.colliders.find(s=>s.id==="table-D14"),Oi=yt.colliders.find(s=>s.id==="real-peach-tree");function ba(s,e){return ln&&ln.min&&ln.max&&s>=ln.min[0]&&s<=ln.max[0]&&e>=ln.min[2]&&e<=ln.max[2]?ln.max[1]:0}function Dx(s,e){if(!ln||!ln.min||!ln.max)return!1;const[t,n,i]=ln.min,[r,a,o]=ln.max;if(s.x<t||s.x>r||s.z<i||s.z>o||s.y<n||s.y>a-.02)return!1;const c=s.x-t,l=r-s.x,h=s.z-i,d=Math.min(c,l,h);return d===c?(s.x=t-.005,e.x=Math.min(e.x,0)):d===l?(s.x=r+.005,e.x=Math.max(e.x,0)):(s.z=i-.005,e.z=Math.min(e.z,0)),!0}function Nx(s){if(!Oi||!Oi.center||s.y<(Oi.yMin??0)||s.y>(Oi.yMax??99))return 1;const e=Math.hypot(s.x-Oi.center[0],s.z-Oi.center[2]),t=Oi.radius??1;return De.smoothstep(e,t*.7,t*1.05)*.85+.15}function Ux(s){const e=_t-Math.abs(s);return De.smoothstep(e,.04,.38)}function Qu(s){return new Ln({uniforms:{map:{value:s},uLight:{value:new we(1,1,1)},uOpacity:{value:1},uCurl:{value:.18}},vertexShader:`
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
    `,transparent:!0,depthWrite:!1,depthTest:!0,side:vn})}const Fx=new R,cr=new R,bs=new R,lr=new Qe,wd=new Jt,Wt=new R,_a=new ve,hr=new ve().makeScale(0,0,0),ti=new R,Ed=.3;class kx{constructor(e,t={}){this.wind=new Lx,this.density=1,this.speed=1,this.maxFalling=600,this.maxResting=900,this.readingMode=!1,this.reduceMotion=!1,this.lookUp=0,this.lookDown=0,this.enabled=!0,this.bounded=!0,this.room=null,this.sources=[],this.emitters=[],this.floorMask=null,this.heldCount=0,this.t=0,this.cursor=0,this.fallingCount=0,this.restingCount=0,this.stack=new Map,this.emitAcc=0,this.prevGrabbing=!1,this.firstFill=!0,this.handAcc=0;const n=this.cap=t.capacity??1600;this.pos=new Float32Array(n*3),this.vel=new Float32Array(n*3),this.rot=new Float32Array(n*3),this.spin=new Float32Array(n*3),this.size=new Float32Array(n),this.state=new Uint8Array(n),this.alpha=new Float32Array(n),this.phase=new Float32Array(n),this.cell=new Float32Array(n),this.tint=new Float32Array(n*4),this.born=new Float32Array(n),this.hold=new Float32Array(n*3),this.noCatch=new Float32Array(n);const{texture:i,shadow:r}=Tl(),a=new Pi(1,1,4,4);this.cellAttr=new oi(this.cell,1),this.tintAttr=new oi(this.tint,4),this.cellAttr.setUsage(On),this.tintAttr.setUsage(On),a.setAttribute("aCell",this.cellAttr),a.setAttribute("aTint",this.tintAttr),this.material=Qu(i),this.mesh=new Ar(a,this.material,n),this.mesh.instanceMatrix.setUsage(On),this.mesh.frustumCulled=!1,this.mesh.renderOrder=2;const o=new Pi(1,1).rotateX(-Math.PI/2),c=new yn({map:r,transparent:!0,depthWrite:!1,opacity:.32,color:0});this.shadows=new Ar(o,c,n),this.shadows.instanceMatrix.setUsage(On),this.shadows.frustumCulled=!1,this.shadows.renderOrder=1;for(let l=0;l<n;l++)this.mesh.setMatrixAt(l,hr),this.shadows.setMatrixAt(l,hr);e.add(this.shadows,this.mesh)}setLight(e){this.material.uniforms.uLight.value.copy(e)}setVisible(e){this.mesh.visible=e,this.shadows.visible=e}clear(){this.state.fill(0),this.stack.clear(),this.firstFill=!0}stats(){return{falling:this.fallingCount,resting:this.restingCount,held:this.heldCount}}alloc(){for(let e=0;e<this.cap;e++){const t=(this.cursor+e)%this.cap;if(this.state[t]===0)return this.cursor=(t+1)%this.cap,t}return-1}spawn(e,t,n,i=0,r=-.3,a=0){const o=this.alloc();if(o<0)return-1;const c=o*3;this.pos[c]=e,this.pos[c+1]=t,this.pos[c+2]=n,this.vel[c]=i,this.vel[c+1]=r,this.vel[c+2]=a,this.rot[c]=Math.random()*6.28,this.rot[c+1]=Math.random()*6.28,this.rot[c+2]=Math.random()*6.28;const l=this.reduceMotion?.6:1.6;this.spin[c]=(Math.random()-.5)*l*2,this.spin[c+1]=(Math.random()-.5)*l,this.spin[c+2]=(Math.random()-.5)*l*2;const h=Math.random();let d,u;h<ld?(d=Math.random()<.55?_n.petalBrand:_n.blossomBrand,u=d===_n.blossomBrand?.066:.044):h<ld+.16?(d=_n.blossomPink[Math.random()*2|0],u=.056+Math.random()*.016):(d=_n.petalPink[Math.random()*4|0],u=.036+Math.random()*.016),this.cell[o]=d,this.size[o]=u;const f=d===_n.petalBrand||d===_n.blossomBrand,g=f?1:.94+Math.random()*.1;return this.tint[o*4]=g,this.tint[o*4+1]=f?1:g*(.95+Math.random()*.06),this.tint[o*4+2]=f?1:g*(.96+Math.random()*.06),this.tint[o*4+3]=1,this.alpha[o]=0,this.phase[o]=Math.random()*100,this.born[o]=this.t,this.state[o]=1,o}stackKey(e,t){return Math.round(e/.12)<<12^Math.round((t+10)/.12)}rest(e,t){const n=e*3,i=this.stackKey(this.pos[n],this.pos[n+2]),r=(this.stack.get(i)??0)+1;this.stack.set(i,r),this.pos[n+1]=t+.003+Math.min(r*.0032,.045)+Math.random()*.002,this.rot[n]=-Math.PI/2+(Math.random()-.5)*.5,this.rot[n+2]=(Math.random()-.5)*.5,this.vel[n]=this.vel[n+1]=this.vel[n+2]=0,this.state[e]=2,this.born[e]=this.t}unrest(e){const t=e*3,n=this.stackKey(this.pos[t],this.pos[t+2]),i=this.stack.get(n)??0;i<=1?this.stack.delete(n):this.stack.set(n,i-1)}spawnAround(e,t,n){const i=cr.set(t.x,0,t.z);i.lengthSq()<.01&&i.set(1,0,0),i.normalize();const r=Wt.set(-i.z,0,i.x);let a=e.x,o=e.z;for(let h=0;h<6;h++){const d=.6+Math.random()*5.2*(1-h/6),u=(Math.random()-.5)*3.2*(1-h/6);if(a=e.x+i.x*d+r.x*u,o=e.z+i.z*d+r.z*u,!this.room||this.room.isInside(a,o))break}this.bounded&&(a=De.clamp(a,.1,Fn-.1),o=De.clamp(o,-_t+.12,_t-.12));const c=this.room?.ceilingY,l=c!==void 0?n?.3+Math.random()*(c-.3):c-Math.random()*.4:n?.3+Math.random()*3:2.5+Math.random()*.9;this.spawn(a,l,o,0,-.25*this.speed,0)}update(e,t,n,i){if(e=Math.min(e,.05),this.t+=e,this.wind.update(e),!this.enabled){this.setVisible(!1);return}this.setVisible(!0);const r=this.readingMode?.45:1,a=1+this.lookUp*.4-this.lookDown*.35,o=Math.round(this.maxFalling*this.density*r*a*(this.reduceMotion?.6:1));if(this.firstFill){for(let A=0;A<o*.7;A++)this.spawnAround(n,i,!0);for(let A=0;A<this.maxResting*.4;A++){const T=Math.random()*Math.PI*2;let S=.4+Math.pow(Math.random(),.7)*4.5;const P=this.bounded?.6:1;let F=n.x+Math.cos(T)*S,_=n.z+Math.sin(T)*S*P;for(let U=0;U<4&&this.room&&!this.room.isInside(F,_);U++)S*=.7,F=n.x+Math.cos(T)*S,_=n.z+Math.sin(T)*S*P;this.bounded&&(F=De.clamp(F,.1,Fn-.1),_=De.clamp(_,-_t+.1,_t-.1));const w=this.spawn(F,0,_);w>=0&&(this.rest(w,this.bounded?ba(F,_):0),this.born[w]=this.t-5-Math.random()*5)}this.firstFill=!1}let c=Math.min(30,Math.max(0,o-this.fallingCount));for(const A of this.emitters)if(!(!A.points.length||A.rate<=0))for(this.emitAcc+=A.rate*e;this.emitAcc>=1&&c>0;){this.emitAcc-=1,c--;let T=A.points[Math.random()*A.points.length|0];for(let S=0;S<6&&Math.abs(T.x-n.x)>7;S++)T=A.points[Math.random()*A.points.length|0];this.spawn(T.x+(Math.random()-.5)*.1,T.y-.03,T.z+(Math.random()-.5)*.1,0,-.15,0)}const l=Math.ceil(o/90);for(let A=0;A<Math.min(c,l);A++)this.spawnAround(n,i,!1);const h=[];let d=null;for(const A of this.sources){if(!A.active)continue;h.push(...A.colliders());const T=A.cup?.();T&&(d=T)}const u=!!d?.grabbing,f=u&&!this.prevGrabbing,g=!u&&this.prevGrabbing;this.prevGrabbing=u;const b=d?lr.copy(d.quaternion).invert().clone():null;let m=0;if(d)for(this.handAcc+=e*(u?.6:1.8);this.handAcc>=1;){this.handAcc-=1;const A=d.center;this.spawn(A.x+(Math.random()-.5)*.1,A.y+.28+Math.random()*.18,A.z+(Math.random()-.5)*.1,0,-.2,0)}this.fallingCount=0,this.restingCount=0,this.heldCount=0;let p=1/0,x=-1;const v=.42*this.speed,y=this.reduceMotion?.12:.32;for(let A=0;A<this.cap;A++){const T=this.state[A];if(T===0)continue;const S=A*3,P=Fx.set(this.pos[S],this.pos[S+1],this.pos[S+2]);let F=this.alpha[A];if(T===1){this.fallingCount++,F=Math.min(1,F+e*1.5);const B=this.phase[A]+this.t;this.wind.sample(P.x,P.y,P.z,cr);const K=cr.x+Math.sin(B*1.7)*y,G=cr.y-v*(.75+.25*Math.sin(B*2.3)),Z=cr.z+Math.cos(B*1.3)*y,W=Math.min(1,e*2.2);let ce=0,le=0,me=1;if(d&&!u){const Ae=d.center.x-P.x,j=d.center.z-P.z,J=P.y-d.center.y,ie=Ae*Ae+j*j;J>-.04&&J<.75&&ie<.2&&(me=.25,ce=Ae*3.5,le=j*3.5)}this.vel[S]+=(K*me+ce-this.vel[S])*W,this.vel[S+1]+=(G-this.vel[S+1])*W,this.vel[S+2]+=(Z*me+le-this.vel[S+2])*W;for(const Ae of h){const j=Sd(Ae,P,bs),J=this.size[A]*.45;if(j<Ae.r+J){if(Ae.kind==="sphere"&&Ae.palm&&d&&!u&&P.y>Ae.c.y+.01&&Ae.vel.lengthSq()<.36&&this.t>this.noCatch[A]&&this.heldCount+m<14){this.capture(A,P,d.center,b),m++;break}const ie=Wt.subVectors(P,bs);ie.lengthSq()<1e-8&&ie.set(0,1,0),ie.normalize(),P.copy(bs).addScaledVector(ie,Ae.r+J+.002);const re=this.vel[S]*ie.x+this.vel[S+1]*ie.y+this.vel[S+2]*ie.z;re<0&&(this.vel[S]-=re*ie.x*1.3,this.vel[S+1]-=re*ie.y*1.3,this.vel[S+2]-=re*ie.z*1.3),this.vel[S]+=Ae.vel.x*.75,this.vel[S+1]+=Ae.vel.y*.75,this.vel[S+2]+=Ae.vel.z*.75,this.spin[S]+=(Math.random()-.5)*3}}if(this.state[A]===3){this.pos[S]=P.x,this.pos[S+1]=P.y,this.pos[S+2]=P.z;continue}P.x+=this.vel[S]*e,P.y+=this.vel[S+1]*e,P.z+=this.vel[S+2]*e,Wt.set(this.vel[S],this.vel[S+1],this.vel[S+2]),this.bounded&&Dx(P,Wt)&&(this.vel[S]=Wt.x,this.vel[S+2]=Wt.z),this.rot[S]+=this.spin[S]*e,this.rot[S+1]+=this.spin[S+1]*e,this.rot[S+2]+=this.spin[S+2]*e;const Ge=this.bounded?ba(P.x,P.z):0;if(P.y<=Ge+.004&&(P.y=Ge,this.pos[S]=P.x,this.pos[S+2]=P.z,this.rest(A,Ge),P.y=this.pos[S+1]),this.bounded?(Math.abs(P.z)>_t-.02||P.x<0||P.x>Fn)&&(this.state[A]=4):this.room&&!this.room.isInside(P.x,P.z)&&(this.state[A]=4),(Math.abs(P.x-n.x)>10||Math.abs(P.z-n.z)>10||P.y>6)&&(this.state[A]=0),d&&u&&this.state[A]===1&&this.t>this.noCatch[A]&&this.heldCount+m<14){const Ae=f?d.radius*1.8:d.radius;P.distanceTo(d.center)<Ae&&(this.capture(A,P,d.center,b),m++)}}else if(T===2){this.restingCount++,F=Math.min(1,F+e*2),this.t-this.born[A]<p&&(p=this.t-this.born[A]),(x<0||this.born[A]<this.born[x])&&(x=A);for(const B of h){const K=Sd(B,P,bs),G=B.vel.length();if(K<B.r+.03&&(G>.12||K<B.r*.8)){this.unrest(A);const Z=Wt.subVectors(P,bs).setY(0);Z.lengthSq()<1e-6&&Z.set(Math.random()-.5,0,Math.random()-.5),Z.normalize();const W=.5+Math.min(1.4,G)*.9+Math.random()*.3;this.vel[S]=B.vel.x*.9+Z.x*.5,this.vel[S+1]=W,this.vel[S+2]=B.vel.z*.9+Z.z*.5,this.spin[S]=(Math.random()-.5)*8,this.spin[S+2]=(Math.random()-.5)*8,P.y+=.02,this.state[A]=1;break}}this.state[A]===2&&d&&f&&P.distanceTo(d.center)<d.radius*1.3&&this.heldCount+m<14&&(this.unrest(A),this.capture(A,P,d.center,b),m++),(Math.abs(P.x-n.x)>9||Math.abs(P.z-n.z)>9)&&(this.state[A]=4)}else if(T===3){const B=!!d&&!u&&d.vel.lengthSq()>1;if(!d||g||B){this.state[A]=1;const K=d?.vel;this.vel[S]=(K?.x??0)*.8+(Math.random()-.5)*.3,this.vel[S+1]=(K?.y??0)*.8+.55+Math.random()*.3,this.vel[S+2]=(K?.z??0)*.8+(Math.random()-.5)*.3,this.spin[S]=(Math.random()-.5)*6,this.noCatch[A]=this.t+1.2}else this.heldCount++,Wt.set(this.hold[S],this.hold[S+1],this.hold[S+2]).applyQuaternion(d.quaternion),P.copy(d.center).add(Wt),this.rot[S+1]+=e*.4}else T===4&&(F-=e*1.5,F<=0&&(this.pos[S+1]<1.2&&this.vel[S+1]===0&&this.unrest(A),this.state[A]=0,F=0));if(this.pos[S]=P.x,this.pos[S+1]=P.y,this.pos[S+2]=P.z,this.alpha[A]=F,this.state[A]===0){this.mesh.setMatrixAt(A,hr),this.shadows.setMatrixAt(A,hr);continue}let _=F;this.bounded&&(_*=Ux(P.z)*Nx(P));const w=P.distanceTo(n);_*=De.smoothstep(w,.12,.4);let U=1;if(this.floorMask&&P.y<Ed&&this.state[A]!==3&&(!this.bounded||ba(P.x,P.z)===0)&&(ti.copy(P).applyMatrix4(t),U=De.lerp(this.floorMask.sample(ti.x,ti.y,P.x-n.x,P.y-n.y,P.z-n.z),1,De.smoothstep(P.y,.05,Ed)),_*=U),this.readingMode&&this.state[A]!==3){ti.copy(P).applyMatrix4(t);const B=ti.x*ti.x*1.4+ti.y*ti.y;ti.z<1&&(_*=De.lerp(.12,1,De.smoothstep(B,.2,.75)))}this.tint[A*4+3]=_,wd.set(this.rot[S],this.rot[S+1],this.rot[S+2]),lr.setFromEuler(wd);const O=this.size[A];if(_a.compose(P,lr,Wt.set(O,O,O)),this.mesh.setMatrixAt(A,_a),U>.3&&(this.state[A]===2||this.state[A]===4&&P.y<1.1)){const B=this.bounded?ba(P.x,P.z):0;lr.identity(),_a.compose(bs.set(P.x+.004,B+.0015,P.z+.004),lr,Wt.set(O*1.25,1,O*1.25)),this.shadows.setMatrixAt(A,_a)}else this.shadows.setMatrixAt(A,hr)}if(this.restingCount>this.maxResting&&x>=0){let A=Math.min(12,this.restingCount-this.maxResting);for(let T=0;T<this.cap&&A>0;T++)this.state[T]===2&&this.t-this.born[T]>4&&(this.state[T]=4,A--)}m>0&&this.onGrab?.(m),this.mesh.instanceMatrix.needsUpdate=!0,this.shadows.instanceMatrix.needsUpdate=!0,this.tintAttr.needsUpdate=!0,this.cellAttr.needsUpdate=!0}capture(e,t,n,i){const r=e*3;Wt.subVectors(t,n).clampLength(0,.045).applyQuaternion(i),this.hold[r]=Wt.x,this.hold[r+1]=Wt.y,this.hold[r+2]=Wt.z,this.state[e]=3,this.alpha[e]=1}burst(e,t,n=.6){for(let i=0;i<t;i++){const r=Math.random()*Math.PI*2,a=Math.random()*.4;this.spawn(e.x+Math.cos(r)*.05,e.y,e.z+Math.sin(r)*.05,Math.cos(r)*a,n*Math.random(),Math.sin(r)*a)}}}class Ox{constructor(e){this.root=new Nt,e.add(this.root),this.petals=new kx(this.root,{capacity:1600}),this.petals.bounded=!1,this.guide=Bx(),this.guide.visible=!1,this.root.add(this.guide)}setVisible(e){this.root.visible=e,this.petals.enabled=e}}function Bx(){const s=new Nt,e=new Fa({color:Tn.cobalt,transparent:!0,opacity:.55}),t=new Fa({color:Tn.cobalt,transparent:!0,opacity:.2}),n=yt.corridor.wallHeight,i=(o,c,l,h,d,u,f=e)=>{const g=new sd(new $i(h-o,d-c,u-l)),b=new Ca(g,f);b.position.set((o+h)/2,(c+d)/2,(l+u)/2),s.add(b)},r=[];for(let o=0;o<=Fn;o+=1)r.push(o,0,-_t,o,0,_t);r.push(0,0,-_t,Fn,0,-_t,0,0,_t,Fn,0,_t,0,0,0,Fn,0,0);const a=new Ct;a.setAttribute("position",new At(r,3)),s.add(new Ca(a,t)),i(0,0,_t,Fn,n,_t+.02,t),i(0,0,-_t-.02,Fn,yt.corridor.stoneWallHeight,-_t,t);for(const o of yt.panels){const c=o.side==="orange"?_t-.01:-_t+.05;i(o.x0+.01,o.y0,c-.005,o.x1-.01,o.y0+o.height,c+.005)}for(const o of yt.colliders)if(o.type==="aabb"&&o.min&&o.max&&i(o.min[0],o.min[1],o.min[2],o.max[0],o.max[1],o.max[2]),o.type==="cylinder"&&o.center&&o.radius){const c=new Ca(new sd(new xl(o.radius,o.radius,(o.yMax??3)-(o.yMin??0),16,1,!0)),t);c.position.set(o.center[0],((o.yMax??3)+(o.yMin??0))/2,o.center[2]),s.add(c)}return s}class zx{constructor(e){this.frame=new Nt,this.fp=[],this.parallax=new Se,this.t=0,this.frameW=.2,this.frameH=.35,e.add(this.frame);const{texture:t}=Tl(),n=Qu(t);n.depthTest=!1,n.uniforms.uCurl.value=.12;const i=30,r=new Pi(1,1,2,2);r.setAttribute("aCell",new oi(new Float32Array(i),1)),r.setAttribute("aTint",new oi(new Float32Array(i*4).fill(1),4)),this.framePetals=new Ar(r,n,i),this.framePetals.frustumCulled=!1,this.framePetals.renderOrder=10;const a=r.getAttribute("aCell");for(let d=0;d<i;d++){const u=Math.random(),f=u<.12?_n.petalBrand:u<.25?_n.blossomPink[Math.random()*2|0]:_n.petalPink[Math.random()*4|0];a.setX(d,f),this.fp.push(this.edgeSpawn({x:0,y:0,vx:0,vy:0,rot:0,vr:0,s:0,cell:f},!0))}this.frame.add(this.framePetals);const o=18,c=new Pi(1,1,2,2),l=new Float32Array(o),h=new Float32Array(o*4).fill(1);c.setAttribute("aCell",new oi(l,1)),c.setAttribute("aTint",new oi(h,4)),this.frameClusters=new Ar(c,n,o),this.frameClusters.frustumCulled=!1,this.frameClusters.renderOrder=9;for(let d=0;d<o;d++)l[d]=d%7===0?_n.blossomBrand:_n.blossomPink[d%2];this.frame.add(this.frameClusters),this.layoutFrame(e)}layoutFrame(e){const n=Math.tan(De.degToRad(e.fov/2))*.5,i=n*e.aspect,r=[[-i,n,.9],[i,n,-.7],[i,-n*.7,2.6]],a=new ve,o=new Qe,c=new Jt,l=h=>Math.sin(h*12.9898)*43758.5453%1;for(let h=0;h<this.frameClusters.count;h++){const[d,u,f]=r[h%3],g=Math.floor(h/3),b=.012+g*.01,m=f+(l(h)-.5)*1.6,p=d-Math.sign(d)*Math.abs(Math.cos(m))*b*1.4+(l(h+7)-.5)*.02,x=u-Math.sign(u)*Math.abs(Math.sin(m))*b*1.4+(l(h+3)-.5)*.02;c.set((l(h+1)-.5)*.5,(l(h+2)-.5)*.5,l(h+4)*6.28),o.setFromEuler(c);const v=.018+Math.abs(l(h+5))*.016-g*.0015;a.compose(new R(p,x,-.5),o,new R(v,v,v)),this.frameClusters.setMatrixAt(h,a)}this.frameClusters.instanceMatrix.needsUpdate=!0,this.frameW=i,this.frameH=n}edgeSpawn(e,t=!1){const n=Math.random(),i=this.frameW||.2,r=this.frameH||.35;return n<.45?(e.x=-i*(.82+Math.random()*.25),e.y=t?(Math.random()*2-1)*r:r*1.05):n<.9?(e.x=i*(.82+Math.random()*.25),e.y=t?(Math.random()*2-1)*r:r*1.05):(e.x=(Math.random()*2-1)*i,e.y=r*(.85+Math.random()*.25)),e.vx=(Math.random()-.5)*.01,e.vy=-.012-Math.random()*.014,e.rot=Math.random()*6.28,e.vr=(Math.random()-.5)*1.5,e.s=.009+Math.random()*.009,e}setVisible(e){this.frame.visible=e}update(e,t,n){this.t+=e;const i=n?.002:.008,r=De.clamp(-t.y*i,-.02,.02),a=De.clamp(t.x*i,-.02,.02);this.parallax.x+=(r-this.parallax.x)*Math.min(1,e*5),this.parallax.y+=(a-this.parallax.y)*Math.min(1,e*5),this.frame.position.set(this.parallax.x,this.parallax.y,0);const o=new ve,c=new Qe,l=new Jt,h=n?.4:1,d=this.frameW,u=this.frameH;for(let f=0;f<this.fp.length;f++){const g=this.fp[f];g.x+=(g.vx+Math.sin(this.t*1.3+f)*.006)*e*h,g.y+=g.vy*e*h,g.rot+=g.vr*e*h;const b=g.x/(d*.62),m=g.y/(u*.7),p=b*b+m*m;p<1&&(g.x+=Math.sign(g.x||1)*(1-p)*e*.08),(g.y<-u*1.1||Math.abs(g.x)>d*1.2)&&this.edgeSpawn(g),l.set(Math.sin(g.rot)*.8,g.rot*.5,g.rot),c.setFromEuler(l),o.compose(new R(g.x,g.y,-.5),c,new R(g.s,g.s,g.s)),this.framePetals.setMatrixAt(f,o)}this.framePetals.instanceMatrix.needsUpdate=!0}}const Ba=63710088e-1,li=Math.PI/180,Hx=.6,Ad=3,Gx=.1,Vx=120;function Ju(s,e,t,n){return{e:(e-n)*li*Ba*Math.cos(t*li),n:(s-t)*li*Ba}}const Td=new Jt,Wx=new Qe(-Math.sqrt(.5),0,0,Math.sqrt(.5)),qx=new Qe,jx=new R(0,0,1),qo=new R;function Xx(s,e,t,n,i){return Td.set(t*li,e*li,-n*li,"YXZ"),s.setFromEuler(Td).multiply(Wx).multiply(qx.setFromAxisAngle(jx,-i))}function Zu(s){return qo.set(0,0,-1).applyQuaternion(s),Math.atan2(qo.x,-qo.z)}function Yx(s,e,t,n){const i=Xx(new Qe,s,e,t,n);return vr(Zu(i))}function vr(s){return Math.atan2(Math.sin(s),Math.cos(s))}class Kx{constructor(){this.x=0,this.y=0,this.outlierFor=0,this.samples=0}reset(){this.x=this.y=0,this.outlierFor=0,this.samples=0}add(e,t,n){const i=e-t;let r=this.samples<Vx?2:6;if(this.ready){const o=Math.abs(vr(i-this.angle));if(o>Hx||this.outlierFor>=Ad){if(this.outlierFor+=n,this.outlierFor<Ad)return;r=1,o<Gx&&(this.outlierFor=0)}else this.outlierFor=0}const a=this.samples<5?1/(this.samples+1):1-Math.exp(-n/r);this.x+=(Math.sin(i)-this.x)*a,this.y+=(Math.cos(i)-this.y)*a,this.samples++}get ready(){return this.samples>=5}get angle(){return Math.atan2(this.x,this.y)}}function jo(s,e,t,n=new Se){const i=Math.sin(t),r=Math.cos(t);return n.set(e*i+s*r,-e*r+s*i)}function $x(s,e,t){const n=Math.sin(t),i=Math.cos(t);return{e:s*i+e*n,n:s*n-e*i}}function ef(s,e,t,n){return{lat:t+e/(li*Ba),lng:n+s/(li*Ba*Math.cos(t*li))}}const Qx="Điểm đến của dải sáng dẫn đường. Toạ độ lấy từ điểm ghim 'Cổng Parabol' trên Apple Maps (đường Giải Phóng, Bách Khoa, Hà Nội) – nên kiểm tra lại tại chỗ. arriveRadius: cách cổng bao nhiêu mét thì coi là đã tới (GPS điện thoại thường lệch 5–15 m).",Jx="Cổng Parabol, ĐH Bách khoa Hà Nội",Zx="Parabol Gate, Hanoi University of Science and Technology",ey="Cổng Parabol",ty="Parabol Gate",ny=21.005112,iy=105.84155,sy=12,tf={_doc:Qx,nameVi:Jx,nameEn:Zx,shortVi:ey,shortEn:ty,lat:ny,lng:iy,arriveRadius:sy},ry="Tuyến đường đi bộ theo phố cho dải sáng dẫn đường, lấy từ OpenRouteService (dữ liệu OpenStreetMap). Key miễn phí tạo tại https://account.heigit.org; đặt key vào source/.env.local dạng VITE_ORS_KEY=... rồi chạy npm run build:site. Thử lần lượt các profile: đi bộ trước, xe đạp làm dự phòng (diễn đàn ORS có báo lỗi treo với foot-walking từ 10/2026). Không lấy được tuyến thì dải sáng tạm theo hướng chim bay và tự thử lại. preference: shortest lấy tuyến ngắn nhất.",ay="https://api.heigit.org/openrouteservice/v2/directions",oy=["foot-walking","cycling-regular"],cy="shortest",ly=12e3,hy=15,dy=3,uy=10,Wi={_doc:ry,url:ay,profiles:oy,preference:cy,timeoutMs:ly,offRouteMeters:hy,rerouteAfterSeconds:dy,minSecondsBetweenRequests:uy},$t=tf,qt=96,Xo=12,fy=.35,Yo=.3,py=.33,my=6,gy=4,by=12,_y=.45,vy=.5,xy=2.6,Rd=1,Ko=2.4,yy=1.4,My=6,Sy=1.6,$o=18,wy=.15,Ey=.15,Ay=4,Ty=.5,Ry=4,Cy=40,Py=8,Ly=1e3,Iy=6,Dy=30,va=90,Ny=.07,Dn=new R;function Cd(s){return Dn.set(0,0,-1).applyQuaternion(s),Math.hypot(Dn.x,Dn.z)>.3||Dn.set(0,1,0).applyQuaternion(s),Math.atan2(Dn.x,-Dn.z)}class Uy{constructor(e){this.root=new Nt,this.position=new Se,this.target=new Se,this.north=new Kx,this.phase="idle",this.floorNow=1,this.floorTo=1,this.accuracy=NaN,this.hasFix=!1,this.lastSetup={floorNow:1,floorTo:1},this.routeState="none",this.route=null,this.routeAskedAt=-1/0,this.routePending=!1,this.offRouteFor=0,this.firstFixAt=0,this.e=0,this.n=0,this.shownE=0,this.shownN=0,this.variance=0,this.originE=0,this.originN=0,this.leadSide=0,this.leadLength=0,this.resampledAngle=0,this.path=[],this.shown=new Float32Array(qt*2),this.wanted=new Float32Array(qt*2),this.hasShown=!1,this.sparkSeed=new Float32Array(va*3),this.sparklesOn=!0,this.pointScale=40,this.t=0,this.planAt=0,e.add(this.root);const t=new Ct,n=[];for(let c=0;c<qt-1;c++){const l=c*2;n.push(l,l+1,l+2,l+1,l+3,l+2)}this.posAttr=new St(new Float32Array(qt*2*3),3),this.uvAttr=new St(new Float32Array(qt*2*2),2),this.alphaAttr=new St(new Float32Array(qt*2),1),this.posAttr.setUsage(On),this.uvAttr.setUsage(On),this.alphaAttr.setUsage(On),t.setAttribute("position",this.posAttr),t.setAttribute("uv",this.uvAttr),t.setAttribute("aAlpha",this.alphaAttr),t.setIndex(n),this.mat=new Ln({uniforms:{uTime:{value:0},uPink:{value:new we(Tn.petalDeep)},uGold:{value:new we(Tn.glow)}},vertexShader:`
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
        }`,transparent:!0,depthWrite:!1,depthTest:!1,blending:gr}),this.ribbon=new st(t,this.mat),this.ribbon.frustumCulled=!1,this.ribbon.renderOrder=4,this.root.add(this.ribbon);const i=document.createElement("canvas");i.width=64,i.height=128;const r=i.getContext("2d"),a=r.createRadialGradient(32,84,1,32,84,31);a.addColorStop(0,"rgba(255,231,184,0.95)"),a.addColorStop(1,"rgba(255,193,214,0)"),r.fillStyle=a,r.fillRect(0,0,64,128),this.marker=new W_(new Du({map:new $c(i),transparent:!0,depthWrite:!1,depthTest:!1,blending:gr})),this.marker.scale.set(1.6,3.2,1),this.marker.material.opacity=.75,this.root.add(this.marker);const o=new Ct;this.sparkPos=new St(new Float32Array(va*3),3),this.sparkAlpha=new St(new Float32Array(va),1),this.sparkPos.setUsage(On),this.sparkAlpha.setUsage(On),o.setAttribute("position",this.sparkPos),o.setAttribute("aAlpha",this.sparkAlpha);for(let c=0;c<this.sparkSeed.length;c++)this.sparkSeed[c]=Math.random();this.sparkMat=new Ln({uniforms:{uPx:{value:40}},vertexShader:`
        attribute float aAlpha; uniform float uPx; varying float vA;
        void main(){ vA = aAlpha; vec4 mv = modelViewMatrix * vec4(position, 1.0); gl_PointSize = uPx * 9.0 / -mv.z; gl_Position = projectionMatrix * mv; }`,fragmentShader:`
        varying float vA;
        void main(){ float a = smoothstep(0.5, 0.0, length(gl_PointCoord - 0.5)) * vA; if (a < 0.02) discard; gl_FragColor = vec4(vec3(1.0, 0.93, 0.8) * a, a); }`,transparent:!0,depthWrite:!1,depthTest:!1,blending:gr}),this.sparks=new Ou(o,this.sparkMat),this.sparks.frustumCulled=!1,this.sparks.renderOrder=5,this.root.add(this.sparks),this.setVisible(!1)}setVisible(e){this.root.visible=e}setSparkles(e){this.sparklesOn=e}get remaining(){return Math.hypot(this.e,this.n)}get distanceLeft(){const e=this.route;if(!e)return this.remaining;const t=this.projectOnRoute();let n=t.off+t.point.distanceTo(e[t.seg+1]);for(let i=t.seg+2;i<e.length;i++)n+=e[i-1].distanceTo(e[i]);return n}get hasRoute(){return!!this.route}get userEnu(){return{e:this.e,n:this.n}}get routeEnu(){return this.route?this.route.map(e=>({e:e.x,n:e.y})):null}heading(e){return vr(Cd(e)-this.north.angle)}setRoute(e){this.routePending=!1,e&&e.length>=2?(this.route=e.map(t=>new Se(t.e,t.n)),this.route[this.route.length-1].length()>1&&this.route.push(new Se(0,0)),this.routeState="ok"):this.route?this.routeState="ok":this.routeState="failed",this.offRouteFor=0,this.path=[]}projectOnRoute(){const e=this.route,t=new Se(this.e,this.n);let n={seg:0,point:e[0].clone(),off:1/0};const i=new Se,r=new Se;for(let a=0;a<e.length-1;a++){i.subVectors(e[a+1],e[a]);const o=i.lengthSq(),c=o?De.clamp(r.subVectors(t,e[a]).dot(i)/o,0,1):0,l=e[a].clone().addScaledVector(i,c),h=l.distanceTo(t);h<n.off&&(n={seg:a,point:l,off:h})}return n}routeAhead(e){const t=this.route,n=this.projectOnRoute(),i=[n.point];for(let u=n.seg+1;u<t.length;u++)i.push(t[u]);const r=u=>jo(u.x-this.originE,u.y-this.originN,e);let a=Iy,o=1,c=i[i.length-1];for(;o<i.length;o++){const u=i[o-1].distanceTo(i[o]);if(u>=a){c=i[o-1].clone().lerp(i[o],u?a/u:0);break}a-=u}const l=[];let h=0,d=c;for(;o<i.length&&h<Dy;o++)h+=d.distanceTo(i[o]),l.push(r(i[o])),d=i[o];return{carrot:r(c),rest:l}}checkRoute(e){if(!this.hasFix||!this.onNeedRoute||this.routePending)return;const t=this.t-this.routeAskedAt>=Wi.minSecondsBetweenRequests;let n;if(this.route){const i=Math.max(Wi.offRouteMeters,(Number.isFinite(this.accuracy)?this.accuracy:0)*1.5);this.offRouteFor=this.projectOnRoute().off>i?this.offRouteFor+e:0,n=this.offRouteFor>=Wi.rerouteAfterSeconds&&t}else this.routeState==="failed"?n=t:n=this.accuracy<=Cy||this.t-this.firstFixAt>=Py;n&&(this.routeAskedAt=this.t,this.routePending=!0,this.routeState==="none"&&(this.routeState="loading"),this.offRouteFor=0,this.onNeedRoute(this.e,this.n))}start(e){this.lastSetup=e,this.floorNow=e.floorNow,this.floorTo=e.floorTo,this.path=[],this.hasShown=!1,this.phase=e.floorNow!==e.floorTo?"floor":this.hasFix&&this.north.ready?"walk":"locating"}stop(){this.phase="idle",this.hasFix=!1,this.route=null,this.routeState="none",this.routeAskedAt=-1/0,this.routePending=!1,this.accuracy=NaN,this.north.reset()}gpsFix(e){const t=(e.accuracy*Ty)**2;if(!this.hasFix)this.e=this.shownE=e.e,this.n=this.shownN=e.n,this.originE=e.e,this.originN=e.n,this.variance=t,this.firstFixAt=this.t,this.hasFix=!0;else{const n=this.variance/(this.variance+t);this.e+=(e.e-this.e)*n,this.n+=(e.n-this.n)*n,this.variance*=1-n}this.accuracy=e.accuracy}step(e){if(!this.hasFix||!this.north.ready||this.phase==="floor")return;const t=Math.hypot(e.x,e.z);if(t<.2)return;const n=$x(e.x/t,e.z/t,this.north.angle);this.e+=n.e*yt.user.strideMeters,this.n+=n.n*yt.user.strideMeters,this.variance+=Ey}update(e,t,n,i=performance.now()){this.t+=e,this.mat.uniforms.uTime.value=this.t,this.hasFix&&(this.variance+=Ay*e),n&&i-n.at<Ly&&(Dn.set(0,0,-1).applyQuaternion(t.quaternion),Math.abs(Dn.y)<.85&&this.north.add(Zu(t.quaternion),n.value,e));const r=this.north.angle,a=1-Math.exp(-e*Ry);this.shownE+=(this.e-this.shownE)*a,this.shownN+=(this.n-this.shownN)*a,jo(this.shownE-this.originE,this.shownN-this.originN,r,this.position),jo(-this.originE,-this.originN,r,this.target),this.phase==="locating"&&this.hasFix&&this.north.ready&&(this.phase="walk"),(this.phase==="walk"||this.phase==="locating")&&this.checkRoute(e),this.phase==="walk"&&this.remaining<=tf.arriveRadius&&(this.phase="arrived",this.onArrive?.());const o=this.phase==="walk";this.ribbon.visible=o,this.sparks.visible=o&&this.sparklesOn,this.sparkMat.uniforms.uPx.value=this.pointScale,this.marker.visible=o||this.phase==="arrived";const c=this.position.distanceTo(this.target),l=c>Xo?this.position.clone().lerp(this.target,Xo/c):this.target;if(this.marker.position.set(l.x,1.2,l.y),!o)return;this.planAt+=e;const h=Cd(t.quaternion);!this.path.length||this.planAt>=py?(this.path=this.computePath(r),this.planAt=0,this.resample(h)):Math.abs(vr(h-this.resampledAngle))>wy&&this.resample(h),this.draw(e)}computePath(e){if(!this.route)return[this.position.clone(),this.target.clone()];const{carrot:t,rest:n}=this.routeAhead(e);return[this.position.clone(),t,...n]}along(e,t){let n=t;for(let i=1;i<e.length;i++){const r=e[i-1].distanceTo(e[i]);if(r>=n)return{p:e[i-1].clone().lerp(e[i],r?n/r:0),i};n-=r}return{p:e[e.length-1].clone(),i:e.length}}leadIn(e,t){if(e.length<2)return null;const n=e[0],i=this.along(e,Sy),r=Math.atan2(i.p.x-n.x,-(i.p.y-n.y));let a=vr(r-t);if(Math.abs(a)<vy)return this.leadSide=0,null;Math.abs(a)>xy&&this.leadSide&&Math.sign(a)!==this.leadSide&&(a-=Math.sign(a)*Math.PI*2),this.leadSide=Math.sign(a);const o=[],c=Math.sin(t),l=-Math.cos(t);for(let h=0;h<4;h++){const d=Rd+(Ko-Rd)*h/4;o.push(new Se(n.x+c*d,n.y+l*d))}for(let h=0;h<=$o;h++){const d=h/$o,u=t+a*d,f=Ko+(yy-Ko)*d;o.push(new Se(n.x+Math.sin(u)*f,n.y-Math.cos(u)*f))}return o.push(i.p,...e.slice(i.i)),o}resample(e){if(this.resampledAngle=e,this.path.length<2)return;const t=this.leadIn(this.path,e),n=t??this.path;if(this.leadLength=0,t)for(let d=1;d<=$o+4;d++)this.leadLength+=t[d].distanceTo(t[d-1]);const i=[];for(const d of n){const u=i[i.length-1];(!u||Math.hypot(u.x-d.x,u.z-d.y)>.02)&&i.push(new R(d.x,0,d.y))}if(i.length<2)return;const r=i.length===2?new Q_(i[0],i[1]):new $_(i,!1,"centripetal"),a=r.getLength(),o=t?0:Math.min(fy,a*.5),c=t?this.leadLength+My:Xo,l=Math.max(.01,Math.min(a,c)-o),h=new R;for(let d=0;d<qt;d++)r.getPointAt((o+d/(qt-1)*l)/a,h),this.wanted[d*2]=h.x,this.wanted[d*2+1]=h.z;this.hasShown||(this.shown.set(this.wanted),this.hasShown=!0)}draw(e){const t=1-Math.exp(-e*my),n=this.shown,i=this.wanted;for(let l=0;l<n.length;l++)n[l]+=(i[l]-n[l])*t;const r=this.posAttr.array,a=this.uvAttr.array,o=this.alphaAttr.array;let c=0;for(let l=0;l<qt;l++){const h=n[l*2],d=n[l*2+1],u=n[Math.max(0,l-1)*2],f=n[Math.max(0,l-1)*2+1],g=n[Math.min(qt-1,l+1)*2],b=n[Math.min(qt-1,l+1)*2+1];let m=g-u,p=b-f;const x=Math.hypot(m,p)||1;m/=x,p/=x,l&&(c+=Math.hypot(h-u,d-f));const v=Math.hypot(h-this.position.x,d-this.position.y);let y=1-(1-_y)*De.smoothstep(v,gy,by);y*=(this.leadLength?1:Math.min(1,l/3))*Math.min(1,(qt-1-l)/6+(l===qt-1?0:.1));for(let A=0;A<2;A++){const T=A?1:-1,S=l*2+A;r[S*3]=h-p*Yo*T,r[S*3+1]=.012,r[S*3+2]=d+m*Yo*T,a[S*2]=c,a[S*2+1]=A,o[S]=y}}this.posAttr.needsUpdate=this.uvAttr.needsUpdate=this.alphaAttr.needsUpdate=!0,this.drawSparks()}drawSparks(){if(!this.sparks.visible)return;const e=this.shown,t=this.sparkSeed,n=this.sparkPos.array,i=this.sparkAlpha.array;for(let r=0;r<va;r++){const a=t[r*3],o=t[r*3+1],c=t[r*3+2],l=(a+this.t*Ny)%1,h=l*(qt-1),d=Math.min(qt-2,Math.floor(h)),u=h-d,f=e[d*2],g=e[d*2+1],b=e[d*2+2],m=e[d*2+3],p=Math.hypot(b-f,m-g)||1,x=(o-.5)*Yo*1.2;n[r*3]=f+(b-f)*u-(m-g)/p*x,n[r*3+1]=.03+.06*Math.abs(Math.sin(this.t*2+c*30)),n[r*3+2]=g+(m-g)*u+(b-f)/p*x,i[r]=Math.min(1,l*12)*(1-l)*(.4+.6*Math.abs(Math.sin(this.t*3+c*50)))}this.sparkPos.needsUpdate=this.sparkAlpha.needsUpdate=!0}}const Pd=Math.PI/180,Ld={enableHighAccuracy:!0,maximumAge:0,timeout:3e4},Fy=4e3;class ky{constructor(e,t){this.lat0=e,this.lng0=t,this.compass=null,this.compassAccuracy=NaN,this.compassAt=0,this.fixAt=0,this.watch=null,this.staleTimer=0,this.polling=!1,this.onVisible=()=>{document.hidden||this.watchGps()},this.onAbs=n=>this.absolute(n),this.onRel=n=>this.webkit(n)}start(){if(this.stop(),!window.isSecureContext)return this.onError?.("insecure");if(!navigator.geolocation)return this.onError?.("unavailable");this.watchGps(),this.staleTimer=window.setInterval(()=>this.pollIfStale(),1e3),document.addEventListener("visibilitychange",this.onVisible),window.addEventListener("deviceorientationabsolute",this.onAbs),window.addEventListener("deviceorientation",this.onRel)}stop(){this.watch!==null&&navigator.geolocation?.clearWatch(this.watch),this.watch=null,clearInterval(this.staleTimer),document.removeEventListener("visibilitychange",this.onVisible),window.removeEventListener("deviceorientationabsolute",this.onAbs),window.removeEventListener("deviceorientation",this.onRel),this.compass=null,this.fixAt=0}watchGps(){this.watch!==null&&navigator.geolocation.clearWatch(this.watch),this.watch=navigator.geolocation.watchPosition(e=>this.fix(e),e=>this.fail(e),Ld)}fix(e){const{e:t,n}=Ju(e.coords.latitude,e.coords.longitude,this.lat0,this.lng0);this.fixAt=performance.now(),this.onFix?.({e:t,n,accuracy:e.coords.accuracy||50})}fail(e){e.code===e.PERMISSION_DENIED?this.onError?.("denied"):this.fixAt||this.onError?.("unavailable")}pollIfStale(){this.polling||!this.fixAt||document.hidden||performance.now()-this.fixAt<Fy||(this.polling=!0,navigator.geolocation.getCurrentPosition(e=>{this.polling=!1,this.watch!==null&&this.fix(e)},()=>{this.polling=!1},Ld))}screenAngle(){return(screen.orientation?.angle??window.orientation??0)*Pd}absolute(e){e.alpha==null||e.beta==null||e.gamma==null||(this.compass=Yx(e.alpha,e.beta,e.gamma,this.screenAngle()),this.compassAccuracy=NaN,this.compassAt=performance.now())}webkit(e){const t=e.webkitCompassHeading;if(typeof t!="number"||Number.isNaN(t))return;const n=e.webkitCompassAccuracy??NaN;n<0||(this.compass=t*Pd,this.compassAccuracy=n,this.compassAt=performance.now())}}const Oy={VITE_ORS_KEY:"eyJvcmciOiI1YjNjZTM1OTc4NTExMTAwMDFjZjYyNDgiLCJpZCI6IjM3OGUyNzdhYjJmOTQ1Njc4MTVhOTI2ZmYxNGRiZDBhIiwiaCI6Im11cm11cjY0In0="};function nf(){return(Oy?.VITE_ORS_KEY??"").trim()}function By(s,e,t){const n=s?.features?.[0],i=n?.geometry?.coordinates;if(!Array.isArray(i)||i.length<2)return null;const r=[];for(const a of i){if(!Array.isArray(a)||!Number.isFinite(a[0])||!Number.isFinite(a[1]))return null;r.push(Ju(a[1],a[0],e.lat,e.lng))}return{points:r,distance:n?.properties?.summary?.distance??NaN,profile:t}}async function zy(s,e,t=nf(),n=fetch){if(!t)return null;for(const i of Wi.profiles){const r=new AbortController,a=setTimeout(()=>r.abort(),Wi.timeoutMs);try{const o=await n(`${Wi.url}/${i}/geojson`,{method:"POST",headers:{Authorization:t,"Content-Type":"application/json",Accept:"application/geo+json, application/json"},body:JSON.stringify({coordinates:[[s.lng,s.lat],[e.lng,e.lat]],preference:Wi.preference,instructions:!1}),signal:r.signal});if(!o.ok)continue;const c=By(await o.json(),e,i);if(c)return c}catch{}finally{clearTimeout(a)}}return null}const sf={vi:{exhibitionLine:"Trưng bày chuyên đề tại Di tích Nhà tù Hỏa Lò",occasion:"Nhân kỷ niệm 97 năm ngày thành lập Đảng và chào xuân Đinh Mùi 2027",start:"Bắt đầu trải nghiệm",offlineReady:"Đã tải xong, dùng được cả khi mất mạng",offlineLoading:"Đang tải trước để dùng offline",permTitle:"Trước khi bắt đầu",permCamera:"Camera",permCameraBody:"Để vẽ hoa đào lên khung cảnh trước mặt. Hình ảnh chỉ xử lý trên điện thoại, không gửi đi đâu.",permMotion:"Cảm biến chuyển động",permMotionBody:"Để hoa đứng yên trong không gian khi bạn xoay điện thoại.",whereTitle:"Bạn đang ở đâu?",whereIn:"Trong hành lang trưng bày",whereOut:"Ngoài cổng, cần chỉ đường",xrOption:"Dùng AR nâng cao của Android (hoa bám sàn chính xác hơn, tạm tắt nhận diện tay)",allow:"Cho phép và bắt đầu",back:"Quay lại",ob1:"Khum tay lại để hứng một cánh hoa. Xoè tay ra để thả.",ob2:"Hoa đào rơi quanh bạn và đọng lại trên sàn.",ob3:"Hướng xuống sàn hoặc mặt bàn rồi đưa tay gạt lớp hoa.",next:"Tiếp",done:"Bắt đầu",skip:"Bỏ qua",safety:"Hãy chú ý xung quanh khi nhìn màn hình.",handSeen:"Đã thấy tay",handHolding:"Đang giữ hoa",handLoading:"Đang chuẩn bị nhận diện tay",modeIndoor:"Trong hành lang",modeOutdoor:"Ngoài cổng",reading:"Chế độ đọc",readingOn:"Đã bật chế độ đọc: ít hoa ở giữa màn hình",readingOff:"Đã tắt chế độ đọc",menu:"Tuỳ chọn",capture:"Chụp ảnh",sound:"Âm thanh",battery:"Tiết kiệm pin",reduceMotion:"Giảm chuyển động",density:"Mật độ hoa",guide:"Hiện khung hành lang (kiểm tra vị trí)",recenter:"Căn lại hướng",recenterHint:"Quay mặt vào trong hành lang, hướng về khu cây đào, rồi bấm.",recentered:"Đã căn lại hướng",standAt:"Tôi đang đứng trước…",standAtHint:"Hướng camera thẳng vào panel đó rồi chọn tên panel.",fixed:"Đã căn vị trí theo panel",tutorial:"Xem hướng dẫn",language:"English",close:"Đóng",savePhoto:"Lưu ảnh",sharePhoto:"Chia sẻ",photoReady:"Ảnh của bạn",arrived:"Tôi đã vào triển lãm",arrivedShort:"Đã vào",lost:"Hướng camera về bảng triển lãm để định vị lại",errDenied:"Chưa có quyền dùng camera. Mở cài đặt trình duyệt, cho phép camera cho trang này rồi tải lại.",errInsecure:"Trang cần mở qua https:// để dùng camera. Hãy quét lại mã QR tại pano.",errNoCam:"Không tìm thấy camera. Bạn vẫn xem được hoa: kéo màn hình để nhìn quanh.",errNoSensor:"Điện thoại không gửi dữ liệu cảm biến. Kéo màn hình để nhìn quanh.",errSensorDenied:"Chưa có quyền cảm biến chuyển động. Kéo màn hình để nhìn quanh, hoặc tải lại trang và chọn Cho phép.",errLowLight:"Chỗ này hơi tối nên nhận diện tay có thể chậm. Đưa tay gần nguồn sáng hơn.",errHand:"Không tải được nhận diện tay. Hoa vẫn rơi bình thường.",help:"Trợ giúp",helpBody:"Khum tay để hứng hoa, xoè tay để thả. Cúi xuống để gạt hoa trên sàn. Hướng camera vào panel để hiện thẻ thông tin, bấm nút loa trên thẻ để nghe đọc bằng ngôn ngữ đang chọn. Hướng camera vào ảnh chậu tôn hoặc thùng gỗ để xem hiện vật 3D, kéo để xoay, chụm hai ngón để phóng to. Nút cạnh nút chụp đổi sang camera trước để chụp ảnh selfie.",privacy:'Video chỉ xử lý trên điện thoại của bạn. Chỉ khi bạn hỏi đáp, câu hỏi (và ảnh nếu bạn bật "kèm ảnh") mới được gửi tới Google Gemini để trả lời.',xrPlace:"Đứng ở lối vào cổng G1, hướng camera xuống sàn rồi chạm vào vòng tròn",xrPlaced:"Đã đặt hành lang",xrScan:"Đang tìm mặt sàn: hướng camera xuống sàn và lia chậm sang hai bên",xrNotFloor:"Đây có vẻ là mặt bàn hoặc đồ vật, không phải sàn. Hãy hướng camera xuống sàn.",xrFloorFixed:"Đã nhận ra mặt sàn thật và đặt lại hoa",xrReplace:"Đặt lại mặt sàn",floorScan:"Để app đo phòng: hướng camera xuống sàn trống gần chân, giữ yên khoảng 1 giây, rồi lia từ từ quanh sàn tới chân tường.",exitXr:"Thoát AR nâng cao",modeGuide:"Dải sáng",guideMenu:"Dẫn đường tới Cổng Parabol (thử nghiệm)",guideTitle:"Dẫn đường tới Cổng Parabol",guideHint:"Ứng dụng dùng GPS và la bàn của điện thoại. Dải sáng chỉ đúng hướng đi theo đường phố (bản đồ OpenStreetMap), có thể đi xuyên qua tường trên màn hình. Đứng ngoài trời, cầm máy dọc để GPS bắt nhanh hơn.",guideFloorNow:"Bạn đang ở tầng",guideFloorTo:"Cổng ở tầng",guideGo:"Bắt đầu dẫn đường",guideBadInput:"Hãy nhập số tầng hợp lệ.",guideLocating:"Đang tìm vị trí GPS và hướng la bàn…",guideLeft:(s,e)=>`${s} · còn ${e}`,guideGps:s=>`GPS ±${s} m`,guideArrived:s=>`Đã tới ${s}`,guideChange:"Đặt lại",guideExit:"Thoát dẫn đường",guideGoDown:s=>`Xuống tầng ${s} bằng cầu thang`,guideGoUp:s=>`Lên tầng ${s} bằng cầu thang`,guideStairs:"Đừng nhìn màn hình khi đang đi cầu thang.",guideFloorDone:s=>`Đã tới tầng ${s}`,guideGpsDenied:"Chưa có quyền vị trí. Hãy cho phép vị trí cho trang này trong cài đặt trình duyệt rồi thử lại.",guideGpsNone:"Không lấy được vị trí GPS trên máy này.",guideNoCompass:"Chưa có dữ liệu la bàn nên chưa biết hướng. Hãy lắc nhẹ điện thoại theo hình số 8 để hiệu chỉnh.",guideRouting:"đang tìm đường",guideBeeline:"theo hướng chim bay",guideRouteFail:"Không lấy được tuyến đường theo phố, tạm chỉ theo hướng chim bay.",guideNoKey:"Chưa cài key OpenRouteService nên dải sáng chỉ theo hướng chim bay (xem README-SUA-AR.md).",artHint:"Kéo để xoay, chụm hai ngón để phóng to. Chạm hai lần để đặt lại.",artInspect:"Xem kỹ",artReset:"Đặt lại",artClose:"Đóng",artScan:"Hướng camera vào panel để đọc thông tin, vào ảnh chậu tôn hoặc thùng gỗ để xem hiện vật 3D. Bấm biểu tượng hỏi đáp ở góc dưới bên trái để hỏi thêm.",askChip:"Hỏi đáp",askTitle:"Hỏi đáp",askNote:"Trợ lý ảo dùng Google Gemini, có thể chưa chính xác. Câu hỏi và ảnh bạn gửi được chuyển tới Google.",askAboutNow:"Đang hỏi về:",askAbout:s=>`Kể thêm về ${s}`,askMeaning:s=>`${s} có ý nghĩa gì?`,askWhatIsThis:"Đây là cái gì?",askToilet:"Nhà vệ sinh ở đâu?",askOverview:"Trưng bày này nói về điều gì?",askPlaceholder:"Nhập câu hỏi…",askSend:"Gửi",askMic:"Hỏi bằng giọng nói",askPhoto:"Kèm ảnh camera",askSpeak:"Đọc to câu trả lời",askThinking:"Đang trả lời…",askOffline:"Đang mất mạng nên chưa hỏi được. Hoa đào vẫn chạy bình thường.",askBusy:"Trợ lý đang quá tải, bạn thử lại sau ít phút nhé.",askNoKey:"Trợ lý chưa được bật (cần đặt GEMINI_API_KEY trên Vercel).",askFailed:"Chưa trả lời được, bạn thử lại nhé.",askMore:"Hỏi thêm",enterWelcome:'Chào mừng bạn tới trưng bày "Đón Gió Xuân"',modeSwitchTo:s=>`Chuyển sang: ${s}`,modeNow:s=>`Chế độ: ${s}`,flipCamera:"Đổi camera trước / sau",flipFail:"Không mở được camera này, đang dùng lại camera cũ.",readAloud:"Đọc to nội dung",readStop:"Dừng đọc",readNoTts:"Trình duyệt này không đọc to được. Hãy mở trang bằng Chrome hoặc Safari.",readNoVoice:"Điện thoại chưa có giọng đọc tiếng Việt nên giọng có thể sai. Có thể cài thêm trong Cài đặt > Chuyển văn bản thành giọng nói."},en:{exhibitionLine:"A thematic exhibition at the Hỏa Lò Prison Relic",occasion:"97th anniversary of the founding of the Communist Party of Vietnam, welcoming the Spring of 2027",start:"Begin the experience",offlineReady:"Downloaded. Works without a connection",offlineLoading:"Downloading for offline use",permTitle:"Before you begin",permCamera:"Camera",permCameraBody:"To draw peach blossoms over the scene in front of you. Video stays on your phone and is never uploaded.",permMotion:"Motion sensors",permMotionBody:"So the blossoms stay put in the room as you turn your phone.",whereTitle:"Where are you?",whereIn:"Inside the exhibition corridor",whereOut:"Outside the gate, show me the way",xrOption:"Use Android enhanced AR (blossoms sit on the floor more accurately; hand tracking paused)",allow:"Allow and begin",back:"Back",ob1:"Cup your hand to catch a petal. Open it to let go.",ob2:"Peach blossoms fall around you and settle on the floor.",ob3:"Point at the floor or the table and sweep the petals with your hand.",next:"Next",done:"Begin",skip:"Skip",safety:"Mind your surroundings while looking at the screen.",handSeen:"Hand found",handHolding:"Holding petals",handLoading:"Preparing hand tracking",modeIndoor:"In the corridor",modeOutdoor:"Outside",reading:"Reading mode",readingOn:"Reading mode on: fewer petals in the middle of the screen",readingOff:"Reading mode off",menu:"Options",capture:"Take photo",sound:"Sound",battery:"Battery saver",reduceMotion:"Reduce motion",density:"Petal density",guide:"Show corridor outline (check alignment)",recenter:"Reset direction",recenterHint:"Face into the corridor, toward the peach tree, then tap.",recentered:"Direction reset",standAt:"I am standing at…",standAtHint:"Point the camera straight at that panel, then choose its name.",fixed:"Position set from panel",tutorial:"Show the guide",language:"Tiếng Việt",close:"Close",savePhoto:"Save photo",sharePhoto:"Share",photoReady:"Your photo",arrived:"I am inside the exhibition",arrivedShort:"Inside",lost:"Point the camera at an exhibition panel to re-align",errDenied:"Camera access is off. Allow the camera for this site in your browser settings, then reload.",errInsecure:"This page needs https:// to use the camera. Scan the QR code on the panel again.",errNoCam:"No camera found. You can still see the blossoms: drag the screen to look around.",errNoSensor:"Your phone is not sending motion data. Drag the screen to look around.",errSensorDenied:"Motion access is off. Drag the screen to look around, or reload and choose Allow.",errLowLight:"It is a little dark here, so hand tracking may lag. Move your hand closer to the light.",errHand:"Hand tracking could not load. Blossoms still fall as usual.",help:"Help",helpBody:"Cup your hand to catch petals, open it to let go. Look down to sweep the petals on the floor. Point the camera at a panel to show its card, then tap the speaker on the card to hear it read in the language you chose. Point the camera at the photo of the metal basin or the wooden crate to see it in 3D; drag to rotate, pinch to zoom. The button next to the shutter switches to the front camera for selfies.",privacy:"Video is processed only on your phone. Only when you ask a question is the question (and a photo, if you turn it on) sent to Google Gemini for an answer.",xrPlace:"Stand at the G1 gate entrance, point the camera at the floor, then tap the ring",xrPlaced:"Corridor placed",xrScan:"Looking for the floor: point the camera at the floor and pan slowly from side to side",xrNotFloor:"This looks like a table or an object, not the floor. Point the camera at the floor.",xrFloorFixed:"Found the real floor and reset the blossoms",xrReplace:"Reset the floor",floorScan:"To measure the room: point at clear floor near your feet, hold for about a second, then pan slowly across the floor to the base of the walls.",exitXr:"Leave enhanced AR",modeGuide:"Light path",guideMenu:"Guide me to the Parabol Gate (trial)",guideTitle:"Guide to the Parabol Gate",guideHint:"Uses your phone GPS and compass. The light points along the streets (OpenStreetMap) and may pass through walls on screen. Stand outdoors and hold the phone upright for a faster GPS fix.",guideFloorNow:"You are on floor",guideFloorTo:"The gate is on floor",guideGo:"Start guiding",guideBadInput:"Please enter valid floor numbers.",guideLocating:"Finding GPS position and compass heading…",guideLeft:(s,e)=>`${s} · ${e} to go`,guideGps:s=>`GPS ±${s} m`,guideArrived:s=>`You have reached ${s}`,guideChange:"Reset",guideExit:"Stop guiding",guideGoDown:s=>`Go down to floor ${s} by the stairs`,guideGoUp:s=>`Go up to floor ${s} by the stairs`,guideStairs:"Do not look at the screen while using the stairs.",guideFloorDone:s=>`I am on floor ${s}`,guideGpsDenied:"Location access is off. Allow location for this site in your browser settings, then try again.",guideGpsNone:"GPS location is not available on this device.",guideNoCompass:"No compass data yet, so the direction is unknown. Move your phone in a figure-8 to calibrate it.",guideRouting:"finding the route",guideBeeline:"straight-line direction",guideRouteFail:"Could not get a street route, showing the straight-line direction for now.",guideNoKey:"No OpenRouteService key is set, so the light shows the straight-line direction (see README-SUA-AR.md).",artHint:"Drag to rotate, pinch to zoom. Double-tap to reset.",artInspect:"Look closer",artReset:"Reset",artClose:"Close",artScan:"Point your camera at a panel to read about it, or at the photo of the metal basin or wooden crate to see it in 3D. Tap the chat icon at the bottom left for more.",askChip:"Ask",askTitle:"Ask the guide",askNote:"The virtual guide uses Google Gemini and may be inaccurate. Your questions and photos are sent to Google.",askAboutNow:"Asking about:",askAbout:s=>`Tell me more about ${s}`,askMeaning:s=>`What does ${s} mean?`,askWhatIsThis:"What is this?",askToilet:"Where is the toilet?",askOverview:"What is this exhibition about?",askPlaceholder:"Type a question…",askSend:"Send",askMic:"Ask by voice",askPhoto:"Include a camera photo",askSpeak:"Read the answer aloud",askThinking:"Answering…",askOffline:"You are offline, so the guide cannot answer. The blossoms still work.",askBusy:"The guide is busy, please try again in a few minutes.",askNoKey:"The guide is not enabled yet (GEMINI_API_KEY must be set on Vercel).",askFailed:"Could not answer, please try again.",askMore:"Ask more",enterWelcome:'Welcome to the "Welcoming The Spring Breeze" exhibition',modeSwitchTo:s=>`Switch to: ${s}`,modeNow:s=>`Mode: ${s}`,flipCamera:"Switch front / back camera",flipFail:"Could not open that camera, so the previous one is back on.",readAloud:"Read aloud",readStop:"Stop reading",readNoTts:"This browser cannot read aloud. Please open the page in Chrome or Safari.",readNoVoice:"Your phone has no English voice installed, so the reading may sound wrong. You can add one in Settings > Text-to-speech."}};let ja=(()=>{try{const s=localStorage.getItem("dgx-lang");if(s==="vi"||s==="en")return s}catch{}return navigator.language?.toLowerCase().startsWith("vi"),"vi"})();const rf=new Set;function V(s){return sf[ja][s]}function Ri(s){return sf[ja==="vi"?"en":"vi"][s]}function Yt(){return ja}function af(s){ja=s;try{localStorage.setItem("dgx-lang",s)}catch{}document.documentElement.lang=s,rf.forEach(e=>e())}function Rl(s){rf.add(s)}const mn=(s,e="0 0 24 24")=>`<svg viewBox="${e}" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${s}</svg>`,gn={camera:mn('<path d="M4 8h3l2-2.5h6L17 8h3v11H4z"/><circle cx="12" cy="13" r="3.6"/>'),motion:mn('<rect x="8" y="4" width="8" height="16" rx="2"/><path d="M4.5 9.5a8 8 0 0 0 0 5M19.5 9.5a8 8 0 0 1 0 5"/>'),hand:mn('<path d="M8 12V6.5a1.4 1.4 0 0 1 2.8 0V11M10.8 10.5V5a1.4 1.4 0 0 1 2.8 0v5.5M13.6 10.5V6.2a1.4 1.4 0 0 1 2.8 0v6.3M16.4 11.5a1.4 1.4 0 0 1 2.8 0V15a6 6 0 0 1-6 6h-1.4a6 6 0 0 1-4.6-2.2L4.6 15.4a1.4 1.4 0 0 1 2.1-1.8L8 15"/>'),door:mn('<path d="M6 20V4h12v16M3.5 20h17"/><path d="M14.5 12h.01"/>'),pin:mn('<path d="M12 20.5s-6-5.2-6-10.3a6 6 0 0 1 12 0c0 5.1-6 10.3-6 10.3z"/><circle cx="12" cy="10.2" r="2.2"/>'),chat:mn('<path d="M4 6.5h16v10.5H10l-4 3.5V17H4z"/><path d="M8.5 11.7h.01M12 11.7h.01M15.5 11.7h.01"/>'),gear:mn(`<path d="${Hy()}"/><circle cx="12" cy="12" r="3"/>`),globe:mn('<circle cx="12" cy="12" r="8.5"/><path d="M3.5 12h17M12 3.5c2.4 2.5 3.6 5.3 3.6 8.5s-1.2 6-3.6 8.5c-2.4-2.5-3.6-5.3-3.6-8.5s1.2-6 3.6-8.5z"/>'),play:mn('<circle cx="12" cy="12" r="8.5"/><path d="M10.2 8.6l5.2 3.4-5.2 3.4z"/>'),help:mn('<circle cx="12" cy="12" r="8.5"/><path d="M9.5 9.5a2.6 2.6 0 0 1 5 .9c0 1.8-2.5 2.2-2.5 3.9M12 16.9h.01"/>'),flip:mn('<path d="M4 8h3l2-2.5h6L17 8h3v11H4z"/><path d="M8.9 12.6a3.2 3.2 0 0 1 5.6-1.8M15.1 13.4a3.2 3.2 0 0 1-5.6 1.8"/><path d="M14.8 8.9l-.3 1.9-1.9-.3M9.2 17.1l.3-1.9 1.9.3"/>'),speaker:mn('<path d="M4 9.5h3.5L12 6v12l-4.5-3.5H4z"/><path d="M15.5 9.2a4 4 0 0 1 0 5.6M18 6.8a7.4 7.4 0 0 1 0 10.4"/>')};function Hy(){const n=[];for(let i=0;i<8;i++){const r=i/8*Math.PI*2;for(const[a,o]of[[-.26,6.6],[-.17,9],[.17,9],[.26,6.6]]){const c=r+a;n.push(`${(12+Math.sin(c)*o).toFixed(2)} ${(12-Math.cos(c)*o).toFixed(2)}`)}}return`M${n.join("L")}Z`}const ni=(s,e,t=0,n="")=>`<path class="${n}" transform="translate(${s} ${e}) rotate(${t})" d="M0 7C-5 3 -5 -4 -2 -7L0 -5.5 2 -7C5 -4 5 3 0 7z" fill="#FFC1D6" stroke="#FF8FB1" stroke-width="1"/>`,Gy=[`<svg viewBox="0 0 132 112" aria-hidden="true"><style>
    .f1{animation:f1 2.6s ease-in infinite}@keyframes f1{0%{transform:translate(66px,2px) rotate(-20deg);opacity:0}15%{opacity:1}70%{transform:translate(66px,66px) rotate(40deg);opacity:1}100%{transform:translate(66px,68px) rotate(40deg);opacity:1}}
  </style>
  <g fill="#FCFAF0" stroke="#00539B" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <path d="M66 96c-16 0-30-8-36-22l-6-16c-1-4 4-6 6-3l5 8-3-16c-1-4 5-5 6-1l3 13-1-17c0-4 6-4 6 0l1 17 1-14c0-4 6-4 6 0l1 26c3 6 7 12 12 14z"/>
    <path d="M66 96c16 0 30-8 36-22l6-16c1-4-4-6-6-3l-5 8 3-16c1-4-5-5-6-1l-3 13 1-17c0-4-6-4-6 0l-1 17-1-14c0-4-6-4-6 0l-1 26c-3 6-7 12-12 14z"/>
  </g>
  <g class="f1">${ni(0,0)}</g></svg>`,`<svg viewBox="0 0 132 112" aria-hidden="true"><style>
    .p2{transform-origin:66px 96px;animation:p2 2.8s ease-in-out infinite}@keyframes p2{0%,20%{transform:rotate(0)}50%,85%{transform:rotate(-38deg)}100%{transform:rotate(0)}}
    .b2{animation:b2 2.8s ease-in-out infinite}@keyframes b2{0%,30%{opacity:0}50%,85%{opacity:1}100%{opacity:0}}
  </style>
  <g class="b2" fill="none" stroke="#4A3B36" stroke-width="2" stroke-linecap="round"><path d="M8 12c26 4 50 2 74 12M40 15c4 6 10 8 16 8"/></g>
  <g class="b2">${ni(30,18,10)}${ni(58,22,-20)}${ni(80,26,30)}</g>
  <g class="p2" fill="#FCFAF0" stroke="#00539B" stroke-width="2"><rect x="52" y="52" width="28" height="48" rx="5"/><circle cx="66" cy="94" r="1.6" fill="#00539B"/></g></svg>`,`<svg viewBox="0 0 132 112" aria-hidden="true"><style>
    .h3{animation:h3 2.4s ease-in-out infinite}@keyframes h3{0%,100%{transform:translateX(-18px)}50%{transform:translateX(18px)}}
    .s3{animation:s3 2.4s ease-out infinite}@keyframes s3{0%,40%{transform:translate(0,0) rotate(0)}70%{transform:translate(16px,-22px) rotate(90deg)}100%{transform:translate(22px,-4px) rotate(140deg)}}
  </style>
  <path d="M10 92h112" stroke="#00539B" stroke-width="2" stroke-linecap="round"/>
  ${ni(36,88,80)}${ni(52,89,100)}${ni(90,88,70)}${ni(104,89,95)}
  <g class="s3">${ni(70,86,85)}</g>
  <g class="h3" fill="none" stroke="#00539B" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M50 78c4-8 14-12 24-10l14 4c4 1 4 6 0 7l-12-1"/><path d="M60 70l-4-14M68 68l-2-16M76 69l1-14"/></g></svg>`],Id=s=>new URL(`./brand/${s}`,document.baseURI).href;function Hn(s,e="",t=""){const n=document.createElement(s);return e&&(n.className=e),t&&(n.innerHTML=t),n}function Vy(s,e){const t=Hn("section","gate");t.setAttribute("aria-label","Đón Gió Xuân");const n=()=>{const i=Yt()==="vi";t.innerHTML=`
      <div class="gate__top">
        <div class="lang-switch" role="group" aria-label="Ngôn ngữ / Language">
          <button type="button" data-l="vi" aria-pressed="${i}">Tiếng Việt</button>
          <button type="button" data-l="en" aria-pressed="${!i}">English</button>
        </div>
      </div>
      <div class="gate__stage">
        <img class="gate__blossom" src="${Id("blossom.webp")}" alt="" />
        <div class="gate__sign">
          <p class="gate__kicker">Trưng bày | <span class="en">Exhibition</span></p>
          <img class="gate__title" src="${Id("title.webp")}" alt="Đón Gió Xuân – Welcoming The Spring Breeze" />
          <p class="gate__line">${V("exhibitionLine")}</p>
          <p class="gate__line en">${Ri("exhibitionLine")}</p>
          <button class="btn" type="button" data-start>${V("start")}<small>${Ri("start")}</small></button>
        </div>
      </div>
      <p class="gate__foot">${V("occasion")}<span class="gate__status" data-status></span></p>`,t.querySelectorAll("[data-l]").forEach(r=>r.addEventListener("click",()=>af(r.dataset.l))),t.querySelector("[data-start]").addEventListener("click",e)};return n(),Rl(n),s.appendChild(t),{el:t,setStatus(i){const r=t.querySelector("[data-status]");r&&(r.textContent=i)},leave(){t.classList.add("leaving"),setTimeout(()=>t.remove(),650)}}}function Wy(s,e,t){return new Promise(n=>{const i=Hn("div","sheet-backdrop");i.innerHTML=`
      <div class="sheet" role="dialog" aria-modal="true" aria-labelledby="perm-h">
        <h2 id="perm-h">${V("permTitle")}</h2>
        <p class="en">${Ri("permTitle")}</p>
        <div class="perm-item">${gn.camera}<div><h3>${V("permCamera")}</h3><p>${V("permCameraBody")}</p></div></div>
        <div class="perm-item">${gn.motion}<div><h3>${V("permMotion")}</h3><p>${V("permMotionBody")}</p></div></div>
        <h3 style="margin:14px 0 2px;font-weight:500;font-size:var(--s-md)">${V("whereTitle")}</h3>
        <div class="choice" role="radiogroup">
          <label><input type="radio" name="where" value="indoor" checked /> ${V("whereIn")}</label>
          <label><input type="radio" name="where" value="outdoor" /> ${V("whereOut")}</label>
        </div>
        ${e?`<label class="check"><input type="checkbox" data-xr /> <span>${V("xrOption")}</span></label>`:""}
        <div class="actions">
          <button class="btn" type="button" data-ok>${V("allow")}<small>${Ri("allow")}</small></button>
          <button class="link" type="button" data-back>${V("back")}</button>
        </div>
      </div>`,s.appendChild(i),i.querySelector("[data-ok]").focus();const r=a=>{i.remove(),n(a)};i.querySelector("[data-ok]").addEventListener("click",()=>{const a=i.querySelector("input[name=where]:checked").value,o=!!i.querySelector("[data-xr]")?.checked;t({mode:a,xr:o}),r({mode:a,xr:o})}),i.querySelector("[data-back]").addEventListener("click",()=>r(null))})}function of(s){return new Promise(e=>{const t=["ob1","ob2","ob3"];let n=0;const i=Hn("section","ob");i.setAttribute("role","dialog"),i.setAttribute("aria-live","polite");const r=()=>{i.innerHTML=`
        ${Gy[n]}
        <p>${V(t[n])}</p>
        <p class="en">${Ri(t[n])}</p>
        <div class="ob__bar">
          <button class="link" type="button" data-skip>${V("skip")}</button>
          <div class="ob__dots" aria-hidden="true">${t.map((o,c)=>`<i class="${c===n?"on":""}"></i>`).join("")}</div>
          <button class="btn" type="button" data-next>${n<2?V("next"):V("done")}</button>
        </div>`,i.querySelector("[data-next]").addEventListener("click",()=>{n<2?(n++,r()):a()}),i.querySelector("[data-skip]").addEventListener("click",a)},a=()=>{i.remove();try{localStorage.setItem("dgx-onboarded","1")}catch{}e()};r(),s.appendChild(i)})}function qy(){try{return localStorage.getItem("dgx-onboarded")==="1"}catch{return!1}}let Dd=0;function gt(s,e,t=3200,n=!1){s.querySelectorAll(".toast").forEach(r=>r.remove());const i=Hn("div","toast"+(n?" warn":""),e);i.setAttribute("role","status"),s.appendChild(i),clearTimeout(Dd),Dd=window.setTimeout(()=>i.remove(),t)}function Qo(s,e,t){const n=Hn("div","sheet-backdrop");n.innerHTML=`<div class="sheet" role="dialog" aria-modal="true">${e}</div>`;const i=()=>n.remove();return n.addEventListener("click",r=>{r.target===n&&i()}),s.appendChild(n),t?.(n.querySelector(".sheet"),i),i}const jy="[CẦN BỔ SUNG]",Xy=200;function Cl(){return typeof window<"u"&&"speechSynthesis"in window&&window.speechSynthesis&&typeof SpeechSynthesisUtterance<"u"?window.speechSynthesis:null}function Yy(s){return s==="vi"?"vi-VN":"en-US"}function Ky(s,e){const t=(e==="vi"?s.titleVi:s.titleEn).replace(/\s+[·–—]\s+/g,". "),n=(e==="vi"?s.descVi:s.descEn).trim();return n&&!n.startsWith(jy)?`${t}.
${n}`:`${t}.`}function $y(s,e=Xy){const t=[],n=i=>{const r=i.trim();r&&t.push(r)};for(const i of s.split(/(?<=[.!?…:;])\s+|\n+/)){if(i.length<=e){n(i);continue}let r="";for(const a of i.split(/(?<=,)\s+|\s+/))r&&r.length+a.length+1>e&&(n(r),r=""),r=r?`${r} ${a}`:a;n(r)}return t}let Pl=0,Es=null;function Jo(s){if(s!==Pl||!Es)return;const e=Es;Es=null,e()}function cf(s,e,t){const n=Cl();if(!n)return"unsupported";Xa();const i=++Pl;Es=t??null;const r=Yy(e),a=n.getVoices(),o=a.find(l=>l.lang?.replace("_","-").toLowerCase()===r.toLowerCase())??a.find(l=>l.lang?.toLowerCase().startsWith(e)),c=$y(s);return c.forEach((l,h)=>{const d=new SpeechSynthesisUtterance(l);d.lang=r,o&&(d.voice=o),h===c.length-1&&(d.onend=()=>Jo(i),d.onerror=()=>Jo(i)),n.speak(d)}),c.length||Jo(i),a.length&&!o?"no-voice":"ok"}function Xa(){Pl++,Cl()?.cancel();const s=Es;Es=null,s?.()}const Qy=['Trưng bày chuyên đề "Đón Gió Xuân – Welcoming The Spring Breeze" tại Di tích Nhà tù Hỏa Lò, Hà Nội.',"Trưng bày nhân kỷ niệm 97 năm ngày thành lập Đảng và chào xuân Đinh Mùi 2027.","Trưng bày nằm trong một hành lang dài khoảng 26 m. Khi đi vào, tường cam bên phải có các panel F, A1–A4, C1–C9 và D11; tường đá bên trái có các panel B.","Cuối hành lang (khu D) có bàn D14 và một cây đào thật; panel D11 là bảng Tết Nguyên Đán 1953.","Trong ứng dụng: chiếu camera vào panel để xem thông tin, vào ảnh chậu tôn hoặc thùng gỗ để xem hiện vật 3D; ngẩng lên để thấy cành đào, khum tay để hứng cánh hoa.","Dẫn đường thử nghiệm trong ứng dụng đưa khách tới Cổng Parabol, Đại học Bách khoa Hà Nội (đường Giải Phóng).","Nhà vệ sinh: [CẦN BỔ SUNG]","Giờ mở cửa: [CẦN BỔ SUNG]","Giá vé: [CẦN BỔ SUNG]","Lối ra, lối thoát hiểm: [CẦN BỔ SUNG]","Gửi đồ, wifi, nơi nghỉ chân: [CẦN BỔ SUNG]"],Jy={factsVi:Qy},Zy="./api/ask",eM=25e3;function tM(s){const e=[...Jy.factsVi];e.push("Các panel và hiện vật ứng dụng nhận ra được:");for(const t of s.items)e.push(`- ${t.titleVi}${t.descVi?`: ${t.descVi}`:""}`);return s.current&&e.push(`Khách đang xem: ${s.current.titleVi} (${s.current.titleEn}). ${s.current.descVi||"[CẦN BỔ SUNG]"}`),s.status&&e.push(`Tình trạng hiện tại: ${s.status}`),e.join(`
`)}async function nM(s,e=fetch){if(typeof navigator<"u"&&navigator.onLine===!1)return{error:"offline"};const t=new AbortController,n=setTimeout(()=>t.abort(),eM);try{const i=await e(Zy,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({question:s.question,lang:s.lang,context:s.context,history:s.history.slice(-6),image:s.image??void 0}),signal:t.signal});if(i.status===429)return{error:"busy"};if(i.status===503)return{error:"no-key"};if(!i.ok)return{error:"failed"};const r=await i.json();return r.answer?{answer:r.answer}:{error:"failed"}}catch{return{error:navigator.onLine===!1?"offline":"failed"}}finally{clearTimeout(n)}}const xa=s=>s.replace(/[&<>"]/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"})[e]);class iM{constructor(e,t){this.root=e,this.deps=t,this.history=[],this.log=[],this.back=null,this.busy=!1,this.withPhoto=!1,this.rec=null}get isOpen(){return!!this.back}open(e,t=!1){this.close(),this.withPhoto=t&&!!this.deps.photo;const n=Hn("div","sheet-backdrop");n.innerHTML='<div class="sheet ask" role="dialog" aria-modal="true" aria-labelledby="ask-h"></div>',n.addEventListener("click",i=>{i.target===n&&this.close()}),this.root.appendChild(n),this.back=n,this.render(),e?this.send(e):n.querySelector(".ask__input")?.focus()}close(){this.rec?.stop(),this.back&&Xa(),this.back?.remove(),this.back=null}suggestions(){const e=this.deps.current(),t=Yt()==="vi",n=[];if(e){const i=t?e.titleVi:e.titleEn;n.push(V("askAbout")(i),V("askMeaning")(i))}return n.push(V("askWhatIsThis"),V("askToilet"),V("askOverview")),n}render(){const e=this.back?.querySelector(".sheet");if(!e)return;const t=this.deps.current(),n=Yt()==="vi",i=!!Cl(),r=window,a=!!(r.SpeechRecognition||r.webkitSpeechRecognition);e.innerHTML=`
      <div class="ask__head"><h2 id="ask-h">${V("askTitle")}</h2>
        <button class="ask__x" type="button" data-x aria-label="${V("close")}">×</button></div>
      <p class="fine ask__note">${V("askNote")}</p>
      ${t?`<p class="ask__about">${V("askAboutNow")} <b>${xa(n?t.titleVi:t.titleEn)}</b></p>`:""}
      <div class="ask__log" aria-live="polite">${this.log.map(l=>`<div class="ask__msg ask__msg--${l.who}">${l.photo?"📷 ":""}${xa(l.text)}${l.who==="bot"&&i?` <button class="ask__say" type="button" data-say aria-label="${V("askSpeak")}">🔊</button>`:""}</div>`).join("")}${this.busy?`<div class="ask__msg ask__msg--bot ask__typing">${V("askThinking")}</div>`:""}</div>
      <div class="ask__chips">${this.suggestions().map(l=>`<button class="ask__chip" type="button" data-q="${xa(l)}">${xa(l)}</button>`).join("")}</div>
      <form class="ask__bar">
        <input class="ask__input" type="text" enterkeyhint="send" maxlength="300" placeholder="${V("askPlaceholder")}" aria-label="${V("askPlaceholder")}" ${this.busy?"disabled":""}/>
        ${a?`<button class="ask__icon" type="button" data-mic aria-label="${V("askMic")}" title="${V("askMic")}">🎤</button>`:""}
        <button class="ask__icon" type="button" data-photo aria-pressed="${this.withPhoto}" aria-label="${V("askPhoto")}" title="${V("askPhoto")}">📷</button>
        <button class="btn ask__send" type="submit" ${this.busy?"disabled":""}>${V("askSend")}</button>
      </form>`;const o=e.querySelector(".ask__log");o.scrollTop=o.scrollHeight,e.querySelector("[data-x]").addEventListener("click",()=>this.close()),e.querySelectorAll("[data-q]").forEach(l=>l.addEventListener("click",()=>this.send(l.dataset.q,l.dataset.q===V("askWhatIsThis")?!0:void 0)));const c=this.log.filter(l=>l.who==="bot");e.querySelectorAll("[data-say]").forEach((l,h)=>l.addEventListener("click",()=>this.say(c[h].text))),e.querySelector("[data-photo]").addEventListener("click",()=>{this.withPhoto=!this.withPhoto,this.render()}),e.querySelector("[data-mic]")?.addEventListener("click",()=>this.listen()),e.querySelector("form").addEventListener("submit",l=>{l.preventDefault();const h=e.querySelector(".ask__input").value.trim();h&&this.send(h)})}errorText(e){return V(e==="offline"?"askOffline":e==="busy"?"askBusy":e==="no-key"?"askNoKey":"askFailed")}async send(e,t){if(this.busy||!e.trim())return;const i=t??this.withPhoto?this.deps.photo():null;this.log.push({who:"me",text:e,photo:!!i}),this.busy=!0,this.render();const r=Yt()==="vi"?"vi":"en",a=tM({items:this.deps.items,current:this.deps.current(),status:this.deps.status()}),o=await nM({question:e,lang:r,context:a,history:this.history,image:i});this.busy=!1,"answer"in o?(this.history.push({q:e,a:o.answer}),this.log.push({who:"bot",text:o.answer}),this.deps.speak()&&this.say(o.answer)):this.log.push({who:"err",text:this.errorText(o.error)}),this.back&&this.render()}say(e){cf(e,Yt())}listen(){const e=window,t=e.SpeechRecognition||e.webkitSpeechRecognition;if(!t||this.busy)return;this.rec?.stop();const n=new t;n.lang=Yt()==="vi"?"vi-VN":"en-US",n.interimResults=!1;const i=this.back?.querySelector("[data-mic]");i?.classList.add("on"),n.onresult=r=>{const a=r.results[0]?.[0]?.transcript?.trim();a&&this.send(a)},n.onend=n.onerror=()=>i?.classList.remove("on"),this.rec=n;try{n.start()}catch{i?.classList.remove("on")}}}const si=256,Ll=17,sM=(s,e,t)=>`https://tile.openstreetmap.org/${s}/${e}/${t}.png`,rM=48;function Zo(s,e=Ll){const t=si*2**e,n=Math.sin(s.lat*Math.PI/180);return{x:(s.lng+180)/360*t,y:(.5-Math.log((1+n)/(1-n))/(4*Math.PI))*t}}function aM(s,e=Ll){return 156543.03392*Math.cos(s*Math.PI/180)/2**e}class oM{constructor(e){this.tiles=new Map,this.view=null,this.large=!1,this.dirty=!0,this.el=Hn("div","minimap"),this.el.hidden=!0,this.el.innerHTML='<canvas aria-hidden="true"></canvas><a class="minimap__credit" href="https://www.openstreetmap.org/copyright" target="_blank" rel="noopener">© OpenStreetMap</a>',this.canvas=this.el.querySelector("canvas"),this.canvas.addEventListener("click",()=>{this.large=!this.large,this.el.classList.toggle("minimap--large",this.large),this.dirty=!0,this.draw()}),e.appendChild(this.el)}setVisible(e){this.el.hidden=!e}update(e){this.view=e,this.dirty=!0,this.draw()}tile(e,t,n){const i=2**e,r=`${e}/${(t%i+i)%i}/${n}`;let a=this.tiles.get(r);return a||(this.tiles.size>=rM&&this.tiles.delete(this.tiles.keys().next().value),a=new Image,a.decoding="async",a.onload=()=>{this.dirty=!0,this.draw()},a.src=sM(e,(t%i+i)%i,n),this.tiles.set(r,a)),a}draw(){const e=this.view;if(!e||this.el.hidden||!this.dirty)return;this.dirty=!1;const t=this.canvas.clientWidth||132,n=Math.min(2,window.devicePixelRatio||1),i=Math.round(t*n);this.canvas.width!==i&&(this.canvas.width=this.canvas.height=i);const r=this.canvas.getContext("2d");if(!r)return;const a=Zo(e.me);r.setTransform(1,0,0,1,0,0),r.fillStyle="#efe9da",r.fillRect(0,0,i,i),r.save(),r.translate(i/2,i/2),r.scale(n,n),r.rotate(-e.heading);const o=Math.ceil(t*.75);for(let f=Math.floor((a.y-o)/si);f<=Math.floor((a.y+o)/si);f++)for(let g=Math.floor((a.x-o)/si);g<=Math.floor((a.x+o)/si);g++){const b=this.tile(Ll,g,f);b.complete&&b.naturalWidth&&r.drawImage(b,g*si-a.x,f*si-a.y,si,si)}const c=(e.route??[e.me,e.dest]).map(f=>{const g=Zo(f);return[g.x-a.x,g.y-a.y]});r.lineJoin=r.lineCap="round";for(const[f,g]of[[7,"rgba(255,255,255,0.9)"],[4,e.route?"#e2557f":"rgba(226,85,127,0.7)"]])r.lineWidth=f,r.strokeStyle=g,r.setLineDash(e.route?[]:[6,6]),r.beginPath(),c.forEach(([b,m],p)=>p?r.lineTo(b,m):r.moveTo(b,m)),r.stroke();r.setLineDash([]);const l=Zo(e.dest);r.fillStyle="#f5a93a",r.strokeStyle="#00539b",r.lineWidth=2,r.beginPath(),r.arc(l.x-a.x,l.y-a.y,6,0,Math.PI*2),r.fill(),r.stroke(),r.restore(),r.save(),r.translate(i/2,i/2),r.scale(n,n);const h=Number.isFinite(e.accuracy)?e.accuracy/aM(e.me.lat):0;h>6&&(r.fillStyle="rgba(10,127,198,0.15)",r.beginPath(),r.arc(0,0,Math.min(h,t/2),0,Math.PI*2),r.fill()),r.fillStyle="#0a7fc6",r.strokeStyle="#fff",r.lineWidth=2,r.beginPath(),r.moveTo(0,-9),r.lineTo(7,7),r.lineTo(0,3),r.lineTo(-7,7),r.closePath(),r.fill(),r.stroke();const d=Math.sin(-e.heading)*(t/2-11),u=-Math.cos(-e.heading)*(t/2-11);r.fillStyle="rgba(252,250,240,0.9)",r.beginPath(),r.arc(d,u,9,0,Math.PI*2),r.fill(),r.fillStyle="#00539b",r.font="600 11px sans-serif",r.textAlign="center",r.textBaseline="middle",r.fillText("N",d,u+.5),r.restore()}}const cM="markers/artifacts.mind",lM=[{id:"bucket",targetIndex:0,model:"models/hienvat/bucket.glb",image:"source/markers-src/artifact-bucket@3x.jpg",physicalWidth:.3,size:.8,offset:[0,0,.28],titleVi:"Chậu tôn có quai",titleEn:"Metal basin with handles",descVi:"",descEn:"",kind:"model"},{id:"crate",targetIndex:1,model:"models/hienvat/crate.glb",image:"source/markers-src/artifact-crate@3x.jpg",physicalWidth:.3,size:.8,offset:[0,0,.28],titleVi:"Thùng gỗ",titleEn:"Wooden crate",descVi:"",descEn:"",kind:"model"},{id:"panel-F",kind:"info",targetIndex:2,image:"source/markers-src/panel-F@400.jpg",physicalWidth:2,titleVi:"Panel F · Lời giới thiệu",titleEn:"Panel F · Introduction",descVi:`Mỗi độ xuân sang, đất trời giao hòa, cây cối đâm chồi nảy lộc, lòng người lại hân hoan đón chờ những khởi đầu mới. Trong không khí ấy, mùa xuân còn gắn liền với những sự kiện lịch sử trọng đại của Đảng, của đất nước.

Trong hành trình đi tìm mùa xuân cho đất nước, nhiều chiến sĩ cách mạng đã từng đón Tết giữa chốn ngục tù tăm tối. Tại Nhà tù Hỏa Lò, các hoạt động mừng xuân do Chi bộ Đảng tổ chức như: chào cờ, sáng tác thơ ca, diễn kịch… đã trở thành điểm tựa tinh thần, giúp người tù vơi đi nỗi nhớ nhà và thêm vững tin vào con đường đã chọn.

Trưng bày chuyên đề “Đón gió xuân” không chỉ tái hiện những cái Tết đặc biệt sau song sắt, mà còn tiếp tục nối dài mạch xuân qua hình ảnh các phiên chợ Tết truyền thống của người Hà Nội.`,descEn:`Each spring, when heaven and earth are in harmony, trees sprout and grow, people eagerly welcome fresh beginnings. In that atmosphere, spring is also closely associated with the significant historical milestones of the Party and the nation.

On the journey to seek spring for the nation, many revolutionaries once celebrated the Lunar New Year within the darkness of prison walls. At Hoa Lo Prison, spring and New Year celebrations organized by the Party cell such as flag salutes, poetry and song compositions, and theatrical performances became a source of spiritual strength, easing the prisoners’ longing for home and strengthening their faith in the path they had chosen.

The thematic exhibition “Welcoming the Spring Breeze” not only recreates special Tet holidays behind bars, but also carries forward the festive spirit of spring through the images of Hanoi’s traditional Tet markets.`},{id:"panel-A1",kind:"info",targetIndex:3,image:"source/markers-src/panel-A1@400.jpg",physicalWidth:2.5,titleVi:"Panel A1 · Phần A, đoạn 1",titleEn:"Panel A1 · Section A, part 1",descVi:"[CẦN BỔ SUNG] Nội dung panel do BTC cung cấp.",descEn:"[CẦN BỔ SUNG] Panel text to be provided by the organisers."},{id:"panel-A2",kind:"info",targetIndex:4,image:"source/markers-src/panel-A2@400.jpg",physicalWidth:2.5,titleVi:"Panel A2 · Phần A, đoạn 2",titleEn:"Panel A2 · Section A, part 2",descVi:"[CẦN BỔ SUNG] Nội dung panel do BTC cung cấp.",descEn:"[CẦN BỔ SUNG] Panel text to be provided by the organisers."},{id:"panel-A3",kind:"info",targetIndex:5,image:"source/markers-src/panel-A3@400.jpg",physicalWidth:2.5,titleVi:"Panel A3 · Phần A, đoạn 3",titleEn:"Panel A3 · Section A, part 3",descVi:"[CẦN BỔ SUNG] Nội dung panel do BTC cung cấp.",descEn:"[CẦN BỔ SUNG] Panel text to be provided by the organisers."},{id:"panel-A4",kind:"info",targetIndex:6,image:"source/markers-src/panel-A4@400.jpg",physicalWidth:2.5,titleVi:"Panel A4 · Phần A, đoạn 4",titleEn:"Panel A4 · Section A, part 4",descVi:"[CẦN BỔ SUNG] Nội dung panel do BTC cung cấp.",descEn:"[CẦN BỔ SUNG] Panel text to be provided by the organisers."},{id:"panel-B2",kind:"info",targetIndex:7,image:"source/markers-src/panel-B2@400.jpg",physicalWidth:3,titleVi:"Panel B2 · Chi bộ Đảng",titleEn:"Panel B2 · The Party cell",descVi:"Sau khi Đảng Cộng sản Việt Nam ra đời năm 1930, thực dân Pháp tìm mọi biện pháp để đàn áp phong trào cách mạng. Chúng tăng cường bắt, giam các chiến sĩ cách mạng và quần chúng yêu nước, trong đó có các đồng chí là cán bộ lãnh đạo của Đảng. Khi vào tù, các đồng chí đã nghĩ ngay đến việc thành lập Chi bộ Đảng. Năm 1931 – 1932, Chi bộ Đảng Nhà tù Hỏa Lò được thành lập do đồng chí Hạ Bá Cang (Hoàng Quốc Việt) làm Bí thư.",descEn:"After the Communist Party of Vietnam was founded in 1930, the French colonialist authorities sought every way to suppress the revolutionary movement. They intensified the arrest and imprisonment of revolutionary soldiers and patriots, including Party leaders. Once in prison, the comrades immediately thought of forming a Party cell. During 1931–1932, the Hoa Lo Prison Party Cell was established, with comrade Ha Ba Cang (Hoang Quoc Viet) serving as Secretary."},{id:"panel-C4",kind:"info",targetIndex:8,image:"source/markers-src/panel-C4@400.jpg",physicalWidth:1,titleVi:"Panel C4 · Chợ Tết xưa",titleEn:"Panel C4 · Tết market in the past",descVi:"[CẦN BỔ SUNG] Nội dung panel do BTC cung cấp.",descEn:"[CẦN BỔ SUNG] Panel text to be provided by the organisers."},{id:"panel-C8",kind:"info",targetIndex:9,image:"source/markers-src/panel-C8@400.jpg",physicalWidth:1,titleVi:"Panel C8 · Chợ Tết nay",titleEn:"Panel C8 · Tết market today",descVi:"[CẦN BỔ SUNG] Nội dung panel do BTC cung cấp.",descEn:"[CẦN BỔ SUNG] Panel text to be provided by the organisers."},{id:"panel-D11",kind:"info",targetIndex:10,image:"source/markers-src/panel-D11@400.jpg",physicalWidth:5,titleVi:"Panel D11 · Bàn quà, cây đào – bảng Tết Nguyên Đán 1953",titleEn:"Panel D11 · Gift table and peach tree – the 1953 Lunar New Year board",descVi:`Bữa tiệc tàu bay

Giám ngục Hỏa Lò hạn chế các gia đình tiếp tế thức ăn, thuốc chữa bệnh, thuốc lá… cho người thân trong tù. Do vậy, một số gia đình đã ném quà qua tường cao vào nhà tù, ném đúng vào giờ ra sân chơi và nhắm trúng đích là gốc cây bàng. Những quà nhận được kiểu này, người tù gọi là hàng “tàu bay”.

Có lần, người bên ngoài ném vào thư chúc Tết, bánh kẹo, thuốc lá… cho anh em bên trong liên hoan mừng xuân, chỉ một số ít người biết được và kín đáo gọi đây là “Bữa tiệc tàu bay”.`,descEn:`Flying feast

The Hoa Lo Prison administration restricted families from supplying food, medicine, cigarettes, and other necessities to their imprisoned relatives. As a result, some families threw packages over the high walls into the prison yard, timing them to coincide with recreation hours and aiming for the base of the almond tree. Prisoners called these received items “flying goods.”

At times, people outside would toss in New Year’s greeting letters, sweets, and tobacco for the inmates inside to celebrate spring together. Only a few people knew about it, and they discreetly referred to it as a “Flying feast.”`},{id:"gate-G1",kind:"enter",targetIndex:11,image:"source/markers-src/panel-G1@400.jpg",physicalWidth:2,titleVi:"Cổng triển lãm G1",titleEn:"Exhibition gate G1",descVi:"",descEn:""},{id:"gate-G2",kind:"enter",targetIndex:12,image:"source/markers-src/panel-G2@400.jpg",physicalWidth:.6,titleVi:"Biển tên trưng bày G2",titleEn:"Exhibition sign G2",descVi:"",descEn:""}],lf={targets:cM,items:lM},hM=2,dM=2500;class uM{constructor(e,t,n,i){this.feed=e,this.targets=t,this.targetsUrl=n,this.longEdgeFovDeg=i,this.status="off",this.paused=!1,this.current=-1,this.stats={frames:0,matches:0,tracks:0,err:""},this.matrix=new ve,this.controller=null,this.running=!1,this.dims=[],this.mvt=null,this.trackIdx=-1,this.warm=0,this.miss=0,this.showing=-1,this.hitIdx=-1,this.hits=0,this.seenAt=0,this.raw=new ve,this.hasPose=!1,this.pos=new R,this.quat=new Qe,this.scl=new R,this.tPos=new R,this.tQuat=new Qe,this.tScl=new R}async start(){if(!(this.status==="loading"||this.status==="ready")&&this.feed.ready){this.status="loading";try{const{Controller:e}=await $u(async()=>{const{Controller:l}=await import("./mindar-image.prod-D0hmC17B.js");return{Controller:l}},[],import.meta.url),t=this.feed.video,n=t.videoWidth,i=t.videoHeight;t.width=n,t.height=i;const r=new e({inputWidth:n,inputHeight:i,maxTrack:1}),a=this.feed.videoFocalPx(this.longEdgeFovDeg);r.projectionTransform=[[a,0,n/2],[0,a,i/2],[0,0,1]];const o=new URL(this.targetsUrl,document.baseURI).href,{dimensions:c}=await r.addImageTargets(o);this.dims=c,r.dummyRun(t),this.controller=r,this.status="ready",this.loop()}catch(e){console.warn("[artifact] không khởi động được nhận diện ảnh",e),this.status="error"}}}stop(){this.running=!1}async loop(){if(this.running)return;this.running=!0;const e=this.controller,t=this.targets.map(i=>i.targetIndex);let n=0;for(;this.running;){const r=this.trackIdx>=0?50:125;await new Promise(l=>requestAnimationFrame(()=>l()));const a=performance.now();if(this.paused||!this.feed.ready||document.hidden||a-n<r)continue;n=a;const o=this.feed.video;if(o.readyState<2)continue;o.width!==o.videoWidth&&(o.width=o.videoWidth,o.height=o.videoHeight);let c=null;try{if(c=e.inputLoader.loadInput(o),this.stats.frames++,this.trackIdx<0){const h=await e._detectAndMatch(c,t);h.targetIndex!==-1&&(this.stats.matches++,this.targets.find(d=>d.targetIndex===h.targetIndex)?.poseless?this.poselessHit(h.targetIndex,a):(this.trackIdx=h.targetIndex,this.mvt=h.modelViewTransform,this.warm=0))}if(this.trackIdx>=0&&this.mvt){const h=await e._trackAndUpdate(c,this.mvt,this.trackIdx);h?(this.stats.tracks++,this.mvt=h,this.miss=0,this.warm++,this.updateMatrix(e._glModelViewMatrix(h,this.trackIdx),this.trackIdx),this.showing!==this.trackIdx&&this.warm>=3&&(this.showing=this.trackIdx,this.current=this.trackIdx,this.hasPose=!1,this.onFound?.(this.trackIdx))):(this.trackIdx=-1,this.mvt=null)}const l=this.showing>=0&&!!this.targets.find(h=>h.targetIndex===this.showing)?.poseless;if(l&&a-this.seenAt>dM){const h=this.showing;this.showing=-1,this.current=-1,this.hits=0,this.onLost?.(h)}else if(!l&&this.trackIdx<0&&this.showing>=0&&(this.miss++,this.miss>4)){const h=this.showing;this.showing=-1,this.current=-1,this.onLost?.(h)}}catch(l){console.warn("[artifact]",l),this.stats.err=String(l)}finally{c?.dispose()}}}poselessHit(e,t){this.hits=e===this.hitIdx?this.hits+1:1,this.hitIdx=e,e===this.showing&&(this.seenAt=t),this.hits>=hM&&this.showing!==e&&(this.showing=e,this.current=e,this.seenAt=t,this.hasPose=!1,this.onFound?.(e))}updateMatrix(e,t){const[n,i]=this.dims[t],a=(this.targets.find(c=>c.targetIndex===t)?.physicalWidth??.3)/n,o=new ve().compose(new R(n/2,i/2,0),new Qe,new R(n,n,n));if(this.raw.fromArray(e).premultiply(new ve().makeScale(a,a,a)).multiply(o),this.feed.mirrored){const c=new ve().makeScale(-1,1,1);this.raw.premultiply(c).multiply(c)}this.raw.decompose(this.tPos,this.tQuat,this.tScl),this.hasPose||(this.pos.copy(this.tPos),this.quat.copy(this.tQuat),this.scl.copy(this.tScl),this.hasPose=!0)}smooth(e){if(!this.hasPose)return;const t=1-Math.exp(-e*14);this.pos.lerp(this.tPos,t),this.quat.slerp(this.tQuat,t),this.scl.lerp(this.tScl,t),this.matrix.compose(this.pos,this.quat,this.scl)}get poseReady(){return this.hasPose}}function Nd(s,e){if(e===ip)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),s;if(e===qc||e===uu){let t=s.getIndex();if(t===null){const a=[],o=s.getAttribute("position");if(o!==void 0){for(let c=0;c<o.count;c++)a.push(c);s.setIndex(a),t=s.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),s}const n=t.count-2,i=[];if(e===qc)for(let a=1;a<=n;a++)i.push(t.getX(0)),i.push(t.getX(a)),i.push(t.getX(a+1));else for(let a=0;a<n;a++)a%2===0?(i.push(t.getX(a)),i.push(t.getX(a+1)),i.push(t.getX(a+2))):(i.push(t.getX(a+2)),i.push(t.getX(a+1)),i.push(t.getX(a)));i.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");const r=s.clone();return r.setIndex(i),r.clearGroups(),r}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),s}class fM extends Vs{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new _M(t)}),this.register(function(t){return new vM(t)}),this.register(function(t){return new RM(t)}),this.register(function(t){return new CM(t)}),this.register(function(t){return new PM(t)}),this.register(function(t){return new yM(t)}),this.register(function(t){return new MM(t)}),this.register(function(t){return new SM(t)}),this.register(function(t){return new wM(t)}),this.register(function(t){return new bM(t)}),this.register(function(t){return new EM(t)}),this.register(function(t){return new xM(t)}),this.register(function(t){return new TM(t)}),this.register(function(t){return new AM(t)}),this.register(function(t){return new mM(t)}),this.register(function(t){return new LM(t)}),this.register(function(t){return new IM(t)})}load(e,t,n,i){const r=this;let a;if(this.resourcePath!=="")a=this.resourcePath;else if(this.path!==""){const l=_r.extractUrlBase(e);a=_r.resolveURL(l,this.path)}else a=_r.extractUrlBase(e);this.manager.itemStart(e);const o=function(l){i?i(l):console.error(l),r.manager.itemError(e),r.manager.itemEnd(e)},c=new Gu(this.manager);c.setPath(this.path),c.setResponseType("arraybuffer"),c.setRequestHeader(this.requestHeader),c.setWithCredentials(this.withCredentials),c.load(e,function(l){try{r.parse(l,a,function(h){t(h),r.manager.itemEnd(e)},o)}catch(h){o(h)}},n,o)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,i){let r;const a={},o={},c=new TextDecoder;if(typeof e=="string")r=JSON.parse(e);else if(e instanceof ArrayBuffer)if(c.decode(new Uint8Array(e,0,4))===hf){try{a[He.KHR_BINARY_GLTF]=new DM(e)}catch(d){i&&i(d);return}r=JSON.parse(a[He.KHR_BINARY_GLTF].content)}else r=JSON.parse(c.decode(e));else r=e;if(r.asset===void 0||r.asset.version[0]<2){i&&i(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const l=new jM(r,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});l.fileLoader.setRequestHeader(this.requestHeader);for(let h=0;h<this.pluginCallbacks.length;h++){const d=this.pluginCallbacks[h](l);d.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),o[d.name]=d,a[d.name]=!0}if(r.extensionsUsed)for(let h=0;h<r.extensionsUsed.length;++h){const d=r.extensionsUsed[h],u=r.extensionsRequired||[];switch(d){case He.KHR_MATERIALS_UNLIT:a[d]=new gM;break;case He.KHR_DRACO_MESH_COMPRESSION:a[d]=new NM(r,this.dracoLoader);break;case He.KHR_TEXTURE_TRANSFORM:a[d]=new UM;break;case He.KHR_MESH_QUANTIZATION:a[d]=new FM;break;default:u.indexOf(d)>=0&&o[d]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+d+'".')}}l.setExtensions(a),l.setPlugins(o),l.parse(n,i)}parseAsync(e,t){const n=this;return new Promise(function(i,r){n.parse(e,t,i,r)})}}function pM(){let s={};return{get:function(e){return s[e]},add:function(e,t){s[e]=t},remove:function(e){delete s[e]},removeAll:function(){s={}}}}const He={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class mM{constructor(e){this.parser=e,this.name=He.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const e=this.parser,t=this.parser.json.nodes||[];for(let n=0,i=t.length;n<i;n++){const r=t[n];r.extensions&&r.extensions[this.name]&&r.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,r.extensions[this.name].light)}}_loadLight(e){const t=this.parser,n="light:"+e;let i=t.cache.get(n);if(i)return i;const r=t.json,c=((r.extensions&&r.extensions[this.name]||{}).lights||[])[e];let l;const h=new we(16777215);c.color!==void 0&&h.setRGB(c.color[0],c.color[1],c.color[2],Bt);const d=c.range!==void 0?c.range:0;switch(c.type){case"directional":l=new Wu(h),l.target.position.set(0,0,-1),l.add(l.target);break;case"point":l=new Vu(h),l.distance=d;break;case"spot":l=new pv(h),l.distance=d,c.spot=c.spot||{},c.spot.innerConeAngle=c.spot.innerConeAngle!==void 0?c.spot.innerConeAngle:0,c.spot.outerConeAngle=c.spot.outerConeAngle!==void 0?c.spot.outerConeAngle:Math.PI/4,l.angle=c.spot.outerConeAngle,l.penumbra=1-c.spot.innerConeAngle/c.spot.outerConeAngle,l.target.position.set(0,0,-1),l.add(l.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+c.type)}return l.position.set(0,0,0),l.decay=2,ri(l,c),c.intensity!==void 0&&(l.intensity=c.intensity),l.name=t.createUniqueName(c.name||"light_"+e),i=Promise.resolve(l),t.cache.add(n,i),i}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){const t=this,n=this.parser,r=n.json.nodes[e],o=(r.extensions&&r.extensions[this.name]||{}).light;return o===void 0?null:this._loadLight(o).then(function(c){return n._getNodeRef(t.cache,o,c)})}}class gM{constructor(){this.name=He.KHR_MATERIALS_UNLIT}getMaterialType(){return yn}extendParams(e,t,n){const i=[];e.color=new we(1,1,1),e.opacity=1;const r=t.pbrMetallicRoughness;if(r){if(Array.isArray(r.baseColorFactor)){const a=r.baseColorFactor;e.color.setRGB(a[0],a[1],a[2],Bt),e.opacity=a[3]}r.baseColorTexture!==void 0&&i.push(n.assignTexture(e,"map",r.baseColorTexture,kt))}return Promise.all(i)}}class bM{constructor(e){this.parser=e,this.name=He.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=i.extensions[this.name].emissiveStrength;return r!==void 0&&(t.emissiveIntensity=r),Promise.resolve()}}class _M{constructor(e){this.parser=e,this.name=He.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:qn}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],a=i.extensions[this.name];if(a.clearcoatFactor!==void 0&&(t.clearcoat=a.clearcoatFactor),a.clearcoatTexture!==void 0&&r.push(n.assignTexture(t,"clearcoatMap",a.clearcoatTexture)),a.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=a.clearcoatRoughnessFactor),a.clearcoatRoughnessTexture!==void 0&&r.push(n.assignTexture(t,"clearcoatRoughnessMap",a.clearcoatRoughnessTexture)),a.clearcoatNormalTexture!==void 0&&(r.push(n.assignTexture(t,"clearcoatNormalMap",a.clearcoatNormalTexture)),a.clearcoatNormalTexture.scale!==void 0)){const o=a.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new Se(o,o)}return Promise.all(r)}}class vM{constructor(e){this.parser=e,this.name=He.KHR_MATERIALS_DISPERSION}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:qn}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=i.extensions[this.name];return t.dispersion=r.dispersion!==void 0?r.dispersion:0,Promise.resolve()}}class xM{constructor(e){this.parser=e,this.name=He.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:qn}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],a=i.extensions[this.name];return a.iridescenceFactor!==void 0&&(t.iridescence=a.iridescenceFactor),a.iridescenceTexture!==void 0&&r.push(n.assignTexture(t,"iridescenceMap",a.iridescenceTexture)),a.iridescenceIor!==void 0&&(t.iridescenceIOR=a.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),a.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=a.iridescenceThicknessMinimum),a.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=a.iridescenceThicknessMaximum),a.iridescenceThicknessTexture!==void 0&&r.push(n.assignTexture(t,"iridescenceThicknessMap",a.iridescenceThicknessTexture)),Promise.all(r)}}class yM{constructor(e){this.parser=e,this.name=He.KHR_MATERIALS_SHEEN}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:qn}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[];t.sheenColor=new we(0,0,0),t.sheenRoughness=0,t.sheen=1;const a=i.extensions[this.name];if(a.sheenColorFactor!==void 0){const o=a.sheenColorFactor;t.sheenColor.setRGB(o[0],o[1],o[2],Bt)}return a.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=a.sheenRoughnessFactor),a.sheenColorTexture!==void 0&&r.push(n.assignTexture(t,"sheenColorMap",a.sheenColorTexture,kt)),a.sheenRoughnessTexture!==void 0&&r.push(n.assignTexture(t,"sheenRoughnessMap",a.sheenRoughnessTexture)),Promise.all(r)}}class MM{constructor(e){this.parser=e,this.name=He.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:qn}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],a=i.extensions[this.name];return a.transmissionFactor!==void 0&&(t.transmission=a.transmissionFactor),a.transmissionTexture!==void 0&&r.push(n.assignTexture(t,"transmissionMap",a.transmissionTexture)),Promise.all(r)}}class SM{constructor(e){this.parser=e,this.name=He.KHR_MATERIALS_VOLUME}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:qn}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],a=i.extensions[this.name];t.thickness=a.thicknessFactor!==void 0?a.thicknessFactor:0,a.thicknessTexture!==void 0&&r.push(n.assignTexture(t,"thicknessMap",a.thicknessTexture)),t.attenuationDistance=a.attenuationDistance||1/0;const o=a.attenuationColor||[1,1,1];return t.attenuationColor=new we().setRGB(o[0],o[1],o[2],Bt),Promise.all(r)}}class wM{constructor(e){this.parser=e,this.name=He.KHR_MATERIALS_IOR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:qn}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=i.extensions[this.name];return t.ior=r.ior!==void 0?r.ior:1.5,Promise.resolve()}}class EM{constructor(e){this.parser=e,this.name=He.KHR_MATERIALS_SPECULAR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:qn}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],a=i.extensions[this.name];t.specularIntensity=a.specularFactor!==void 0?a.specularFactor:1,a.specularTexture!==void 0&&r.push(n.assignTexture(t,"specularIntensityMap",a.specularTexture));const o=a.specularColorFactor||[1,1,1];return t.specularColor=new we().setRGB(o[0],o[1],o[2],Bt),a.specularColorTexture!==void 0&&r.push(n.assignTexture(t,"specularColorMap",a.specularColorTexture,kt)),Promise.all(r)}}class AM{constructor(e){this.parser=e,this.name=He.EXT_MATERIALS_BUMP}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:qn}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],a=i.extensions[this.name];return t.bumpScale=a.bumpFactor!==void 0?a.bumpFactor:1,a.bumpTexture!==void 0&&r.push(n.assignTexture(t,"bumpMap",a.bumpTexture)),Promise.all(r)}}class TM{constructor(e){this.parser=e,this.name=He.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:qn}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],a=i.extensions[this.name];return a.anisotropyStrength!==void 0&&(t.anisotropy=a.anisotropyStrength),a.anisotropyRotation!==void 0&&(t.anisotropyRotation=a.anisotropyRotation),a.anisotropyTexture!==void 0&&r.push(n.assignTexture(t,"anisotropyMap",a.anisotropyTexture)),Promise.all(r)}}class RM{constructor(e){this.parser=e,this.name=He.KHR_TEXTURE_BASISU}loadTexture(e){const t=this.parser,n=t.json,i=n.textures[e];if(!i.extensions||!i.extensions[this.name])return null;const r=i.extensions[this.name],a=t.options.ktx2Loader;if(!a){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,r.source,a)}}class CM{constructor(e){this.parser=e,this.name=He.EXT_TEXTURE_WEBP,this.isSupported=null}loadTexture(e){const t=this.name,n=this.parser,i=n.json,r=i.textures[e];if(!r.extensions||!r.extensions[t])return null;const a=r.extensions[t],o=i.images[a.source];let c=n.textureLoader;if(o.uri){const l=n.options.manager.getHandler(o.uri);l!==null&&(c=l)}return this.detectSupport().then(function(l){if(l)return n.loadTextureImage(e,a.source,c);if(i.extensionsRequired&&i.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class PM{constructor(e){this.parser=e,this.name=He.EXT_TEXTURE_AVIF,this.isSupported=null}loadTexture(e){const t=this.name,n=this.parser,i=n.json,r=i.textures[e];if(!r.extensions||!r.extensions[t])return null;const a=r.extensions[t],o=i.images[a.source];let c=n.textureLoader;if(o.uri){const l=n.options.manager.getHandler(o.uri);l!==null&&(c=l)}return this.detectSupport().then(function(l){if(l)return n.loadTextureImage(e,a.source,c);if(i.extensionsRequired&&i.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: AVIF required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAABcAAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAEAAAABAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAMAAAAABNjb2xybmNseAACAAIABoAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAAB9tZGF0EgAKCBgABogQEDQgMgkQAAAAB8dSLfI=",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class LM{constructor(e){this.name=He.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){const t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){const i=n.extensions[this.name],r=this.parser.getDependency("buffer",i.buffer),a=this.parser.options.meshoptDecoder;if(!a||!a.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return r.then(function(o){const c=i.byteOffset||0,l=i.byteLength||0,h=i.count,d=i.byteStride,u=new Uint8Array(o,c,l);return a.decodeGltfBufferAsync?a.decodeGltfBufferAsync(h,d,u,i.mode,i.filter).then(function(f){return f.buffer}):a.ready.then(function(){const f=new ArrayBuffer(h*d);return a.decodeGltfBuffer(new Uint8Array(f),h,d,u,i.mode,i.filter),f})})}else return null}}class IM{constructor(e){this.name=He.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){const t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;const i=t.meshes[n.mesh];for(const l of i.primitives)if(l.mode!==bn.TRIANGLES&&l.mode!==bn.TRIANGLE_STRIP&&l.mode!==bn.TRIANGLE_FAN&&l.mode!==void 0)return null;const a=n.extensions[this.name].attributes,o=[],c={};for(const l in a)o.push(this.parser.getDependency("accessor",a[l]).then(h=>(c[l]=h,c[l])));return o.length<1?null:(o.push(this.parser.createNodeMesh(e)),Promise.all(o).then(l=>{const h=l.pop(),d=h.isGroup?h.children:[h],u=l[0].count,f=[];for(const g of d){const b=new ve,m=new R,p=new Qe,x=new R(1,1,1),v=new Ar(g.geometry,g.material,u);for(let y=0;y<u;y++)c.TRANSLATION&&m.fromBufferAttribute(c.TRANSLATION,y),c.ROTATION&&p.fromBufferAttribute(c.ROTATION,y),c.SCALE&&x.fromBufferAttribute(c.SCALE,y),v.setMatrixAt(y,b.compose(m,p,x));for(const y in c)if(y==="_COLOR_0"){const A=c[y];v.instanceColor=new oi(A.array,A.itemSize,A.normalized)}else y!=="TRANSLATION"&&y!=="ROTATION"&&y!=="SCALE"&&g.geometry.setAttribute(y,c[y]);pt.prototype.copy.call(v,g),this.parser.assignFinalMaterial(v),f.push(v)}return h.isGroup?(h.clear(),h.add(...f),h):f[0]}))}}const hf="glTF",dr=12,Ud={JSON:1313821514,BIN:5130562};class DM{constructor(e){this.name=He.KHR_BINARY_GLTF,this.content=null,this.body=null;const t=new DataView(e,0,dr),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==hf)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const i=this.header.length-dr,r=new DataView(e,dr);let a=0;for(;a<i;){const o=r.getUint32(a,!0);a+=4;const c=r.getUint32(a,!0);if(a+=4,c===Ud.JSON){const l=new Uint8Array(e,dr+a,o);this.content=n.decode(l)}else if(c===Ud.BIN){const l=dr+a;this.body=e.slice(l,l+o)}a+=o}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class NM{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=He.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){const n=this.json,i=this.dracoLoader,r=e.extensions[this.name].bufferView,a=e.extensions[this.name].attributes,o={},c={},l={};for(const h in a){const d=Zc[h]||h.toLowerCase();o[d]=a[h]}for(const h in e.attributes){const d=Zc[h]||h.toLowerCase();if(a[h]!==void 0){const u=n.accessors[e.attributes[h]],f=As[u.componentType];l[d]=f.name,c[d]=u.normalized===!0}}return t.getDependency("bufferView",r).then(function(h){return new Promise(function(d,u){i.decodeDracoFile(h,function(f){for(const g in f.attributes){const b=f.attributes[g],m=c[g];m!==void 0&&(b.normalized=m)}d(f)},o,l,Bt,u)})})}}class UM{constructor(){this.name=He.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}}class FM{constructor(){this.name=He.KHR_MESH_QUANTIZATION}}class df extends Pr{constructor(e,t,n,i){super(e,t,n,i)}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=e*i*3+i;for(let a=0;a!==i;a++)t[a]=n[r+a];return t}interpolate_(e,t,n,i){const r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=o*2,l=o*3,h=i-t,d=(n-t)/h,u=d*d,f=u*d,g=e*l,b=g-l,m=-2*f+3*u,p=f-u,x=1-m,v=p-u+d;for(let y=0;y!==o;y++){const A=a[b+y+o],T=a[b+y+c]*h,S=a[g+y+o],P=a[g+y]*h;r[y]=x*A+v*T+m*S+p*P}return r}}const kM=new Qe;class OM extends df{interpolate_(e,t,n,i){const r=super.interpolate_(e,t,n,i);return kM.fromArray(r).normalize().toArray(r),r}}const bn={POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6},As={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},Fd={9728:Kt,9729:hn,9984:nu,9985:ya,9986:pr,9987:zn},kd={33071:Si,33648:La,10497:Ps},ec={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},Zc={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},xi={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},BM={CUBICSPLINE:void 0,LINEAR:Sr,STEP:Mr},tc={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function zM(s){return s.DefaultMaterial===void 0&&(s.DefaultMaterial=new Tr({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:di})),s.DefaultMaterial}function Bi(s,e,t){for(const n in t.extensions)s[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function ri(s,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(s.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function HM(s,e,t){let n=!1,i=!1,r=!1;for(let l=0,h=e.length;l<h;l++){const d=e[l];if(d.POSITION!==void 0&&(n=!0),d.NORMAL!==void 0&&(i=!0),d.COLOR_0!==void 0&&(r=!0),n&&i&&r)break}if(!n&&!i&&!r)return Promise.resolve(s);const a=[],o=[],c=[];for(let l=0,h=e.length;l<h;l++){const d=e[l];if(n){const u=d.POSITION!==void 0?t.getDependency("accessor",d.POSITION):s.attributes.position;a.push(u)}if(i){const u=d.NORMAL!==void 0?t.getDependency("accessor",d.NORMAL):s.attributes.normal;o.push(u)}if(r){const u=d.COLOR_0!==void 0?t.getDependency("accessor",d.COLOR_0):s.attributes.color;c.push(u)}}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(c)]).then(function(l){const h=l[0],d=l[1],u=l[2];return n&&(s.morphAttributes.position=h),i&&(s.morphAttributes.normal=d),r&&(s.morphAttributes.color=u),s.morphTargetsRelative=!0,s})}function GM(s,e){if(s.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)s.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){const t=e.extras.targetNames;if(s.morphTargetInfluences.length===t.length){s.morphTargetDictionary={};for(let n=0,i=t.length;n<i;n++)s.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function VM(s){let e;const t=s.extensions&&s.extensions[He.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+nc(t.attributes):e=s.indices+":"+nc(s.attributes)+":"+s.mode,s.targets!==void 0)for(let n=0,i=s.targets.length;n<i;n++)e+=":"+nc(s.targets[n]);return e}function nc(s){let e="";const t=Object.keys(s).sort();for(let n=0,i=t.length;n<i;n++)e+=t[n]+":"+s[t[n]]+";";return e}function el(s){switch(s){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function WM(s){return s.search(/\.jpe?g($|\?)/i)>0||s.search(/^data\:image\/jpeg/)===0?"image/jpeg":s.search(/\.webp($|\?)/i)>0||s.search(/^data\:image\/webp/)===0?"image/webp":"image/png"}const qM=new ve;class jM{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new pM,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,i=-1,r=!1,a=-1;if(typeof navigator<"u"){const o=navigator.userAgent;n=/^((?!chrome|android).)*safari/i.test(o)===!0;const c=o.match(/Version\/(\d+)/);i=n&&c?parseInt(c[1],10):-1,r=o.indexOf("Firefox")>-1,a=r?o.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||n&&i<17||r&&a<98?this.textureLoader=new dv(this.options.manager):this.textureLoader=new bv(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new Gu(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){const n=this,i=this.json,r=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(a){return a._markDefs&&a._markDefs()}),Promise.all(this._invokeAll(function(a){return a.beforeRoot&&a.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(a){const o={scene:a[0][i.scene||0],scenes:a[0],animations:a[1],cameras:a[2],asset:i.asset,parser:n,userData:{}};return Bi(r,o,i),ri(o,i),Promise.all(n._invokeAll(function(c){return c.afterRoot&&c.afterRoot(o)})).then(function(){for(const c of o.scenes)c.updateMatrixWorld();e(o)})}).catch(t)}_markDefs(){const e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let i=0,r=t.length;i<r;i++){const a=t[i].joints;for(let o=0,c=a.length;o<c;o++)e[a[o]].isBone=!0}for(let i=0,r=e.length;i<r;i++){const a=e[i];a.mesh!==void 0&&(this._addNodeRef(this.meshCache,a.mesh),a.skin!==void 0&&(n[a.mesh].isSkinnedMesh=!0)),a.camera!==void 0&&this._addNodeRef(this.cameraCache,a.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;const i=n.clone(),r=(a,o)=>{const c=this.associations.get(a);c!=null&&this.associations.set(o,c);for(const[l,h]of a.children.entries())r(h,o.children[l])};return r(n,i),i.name+="_instance_"+e.uses[t]++,i}_invokeOne(e){const t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){const i=e(t[n]);if(i)return i}return null}_invokeAll(e){const t=Object.values(this.plugins);t.unshift(this);const n=[];for(let i=0;i<t.length;i++){const r=e(t[i]);r&&n.push(r)}return n}getDependency(e,t){const n=e+":"+t;let i=this.cache.get(n);if(!i){switch(e){case"scene":i=this.loadScene(t);break;case"node":i=this._invokeOne(function(r){return r.loadNode&&r.loadNode(t)});break;case"mesh":i=this._invokeOne(function(r){return r.loadMesh&&r.loadMesh(t)});break;case"accessor":i=this.loadAccessor(t);break;case"bufferView":i=this._invokeOne(function(r){return r.loadBufferView&&r.loadBufferView(t)});break;case"buffer":i=this.loadBuffer(t);break;case"material":i=this._invokeOne(function(r){return r.loadMaterial&&r.loadMaterial(t)});break;case"texture":i=this._invokeOne(function(r){return r.loadTexture&&r.loadTexture(t)});break;case"skin":i=this.loadSkin(t);break;case"animation":i=this._invokeOne(function(r){return r.loadAnimation&&r.loadAnimation(t)});break;case"camera":i=this.loadCamera(t);break;default:if(i=this._invokeOne(function(r){return r!=this&&r.getDependency&&r.getDependency(e,t)}),!i)throw new Error("Unknown type: "+e);break}this.cache.add(n,i)}return i}getDependencies(e){let t=this.cache.get(e);if(!t){const n=this,i=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(i.map(function(r,a){return n.getDependency(e,a)})),this.cache.add(e,t)}return t}loadBuffer(e){const t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[He.KHR_BINARY_GLTF].body);const i=this.options;return new Promise(function(r,a){n.load(_r.resolveURL(t.uri,i.path),r,void 0,function(){a(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){const t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){const i=t.byteLength||0,r=t.byteOffset||0;return n.slice(r,r+i)})}loadAccessor(e){const t=this,n=this.json,i=this.json.accessors[e];if(i.bufferView===void 0&&i.sparse===void 0){const a=ec[i.type],o=As[i.componentType],c=i.normalized===!0,l=new o(i.count*a);return Promise.resolve(new St(l,a,c))}const r=[];return i.bufferView!==void 0?r.push(this.getDependency("bufferView",i.bufferView)):r.push(null),i.sparse!==void 0&&(r.push(this.getDependency("bufferView",i.sparse.indices.bufferView)),r.push(this.getDependency("bufferView",i.sparse.values.bufferView))),Promise.all(r).then(function(a){const o=a[0],c=ec[i.type],l=As[i.componentType],h=l.BYTES_PER_ELEMENT,d=h*c,u=i.byteOffset||0,f=i.bufferView!==void 0?n.bufferViews[i.bufferView].byteStride:void 0,g=i.normalized===!0;let b,m;if(f&&f!==d){const p=Math.floor(u/f),x="InterleavedBuffer:"+i.bufferView+":"+i.componentType+":"+p+":"+i.count;let v=t.cache.get(x);v||(b=new l(o,p*f,i.count*f/h),v=new Iu(b,f/h),t.cache.add(x,v)),m=new Er(v,c,u%f/h,g)}else o===null?b=new l(i.count*c):b=new l(o,u,i.count*c),m=new St(b,c,g);if(i.sparse!==void 0){const p=ec.SCALAR,x=As[i.sparse.indices.componentType],v=i.sparse.indices.byteOffset||0,y=i.sparse.values.byteOffset||0,A=new x(a[1],v,i.sparse.count*p),T=new l(a[2],y,i.sparse.count*c);o!==null&&(m=new St(m.array.slice(),m.itemSize,m.normalized)),m.normalized=!1;for(let S=0,P=A.length;S<P;S++){const F=A[S];if(m.setX(F,T[S*c]),c>=2&&m.setY(F,T[S*c+1]),c>=3&&m.setZ(F,T[S*c+2]),c>=4&&m.setW(F,T[S*c+3]),c>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}m.normalized=g}return m})}loadTexture(e){const t=this.json,n=this.options,r=t.textures[e].source,a=t.images[r];let o=this.textureLoader;if(a.uri){const c=n.manager.getHandler(a.uri);c!==null&&(o=c)}return this.loadTextureImage(e,r,o)}loadTextureImage(e,t,n){const i=this,r=this.json,a=r.textures[e],o=r.images[t],c=(o.uri||o.bufferView)+":"+a.sampler;if(this.textureCache[c])return this.textureCache[c];const l=this.loadImageSource(t,n).then(function(h){h.flipY=!1,h.name=a.name||o.name||"",h.name===""&&typeof o.uri=="string"&&o.uri.startsWith("data:image/")===!1&&(h.name=o.uri);const u=(r.samplers||{})[a.sampler]||{};return h.magFilter=Fd[u.magFilter]||hn,h.minFilter=Fd[u.minFilter]||zn,h.wrapS=kd[u.wrapS]||Ps,h.wrapT=kd[u.wrapT]||Ps,i.associations.set(h,{textures:e}),h}).catch(function(){return null});return this.textureCache[c]=l,l}loadImageSource(e,t){const n=this,i=this.json,r=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(d=>d.clone());const a=i.images[e],o=self.URL||self.webkitURL;let c=a.uri||"",l=!1;if(a.bufferView!==void 0)c=n.getDependency("bufferView",a.bufferView).then(function(d){l=!0;const u=new Blob([d],{type:a.mimeType});return c=o.createObjectURL(u),c});else if(a.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");const h=Promise.resolve(c).then(function(d){return new Promise(function(u,f){let g=u;t.isImageBitmapLoader===!0&&(g=function(b){const m=new Rt(b);m.needsUpdate=!0,u(m)}),t.load(_r.resolveURL(d,r.path),g,void 0,f)})}).then(function(d){return l===!0&&o.revokeObjectURL(c),ri(d,a),d.userData.mimeType=a.mimeType||WM(a.uri),d}).catch(function(d){throw console.error("THREE.GLTFLoader: Couldn't load texture",c),d});return this.sourceCache[e]=h,h}assignTexture(e,t,n,i){const r=this;return this.getDependency("texture",n.index).then(function(a){if(!a)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(a=a.clone(),a.channel=n.texCoord),r.extensions[He.KHR_TEXTURE_TRANSFORM]){const o=n.extensions!==void 0?n.extensions[He.KHR_TEXTURE_TRANSFORM]:void 0;if(o){const c=r.associations.get(a);a=r.extensions[He.KHR_TEXTURE_TRANSFORM].extendTexture(a,o),r.associations.set(a,c)}}return i!==void 0&&(a.colorSpace=i),e[t]=a,a})}assignFinalMaterial(e){const t=e.geometry;let n=e.material;const i=t.attributes.tangent===void 0,r=t.attributes.color!==void 0,a=t.attributes.normal===void 0;if(e.isPoints){const o="PointsMaterial:"+n.uuid;let c=this.cache.get(o);c||(c=new ku,Pn.prototype.copy.call(c,n),c.color.copy(n.color),c.map=n.map,c.sizeAttenuation=!1,this.cache.add(o,c)),n=c}else if(e.isLine){const o="LineBasicMaterial:"+n.uuid;let c=this.cache.get(o);c||(c=new Fa,Pn.prototype.copy.call(c,n),c.color.copy(n.color),c.map=n.map,this.cache.add(o,c)),n=c}if(i||r||a){let o="ClonedMaterial:"+n.uuid+":";i&&(o+="derivative-tangents:"),r&&(o+="vertex-colors:"),a&&(o+="flat-shading:");let c=this.cache.get(o);c||(c=n.clone(),r&&(c.vertexColors=!0),a&&(c.flatShading=!0),i&&(c.normalScale&&(c.normalScale.y*=-1),c.clearcoatNormalScale&&(c.clearcoatNormalScale.y*=-1)),this.cache.add(o,c),this.associations.set(c,this.associations.get(n))),n=c}e.material=n}getMaterialType(){return Tr}loadMaterial(e){const t=this,n=this.json,i=this.extensions,r=n.materials[e];let a;const o={},c=r.extensions||{},l=[];if(c[He.KHR_MATERIALS_UNLIT]){const d=i[He.KHR_MATERIALS_UNLIT];a=d.getMaterialType(),l.push(d.extendParams(o,r,t))}else{const d=r.pbrMetallicRoughness||{};if(o.color=new we(1,1,1),o.opacity=1,Array.isArray(d.baseColorFactor)){const u=d.baseColorFactor;o.color.setRGB(u[0],u[1],u[2],Bt),o.opacity=u[3]}d.baseColorTexture!==void 0&&l.push(t.assignTexture(o,"map",d.baseColorTexture,kt)),o.metalness=d.metallicFactor!==void 0?d.metallicFactor:1,o.roughness=d.roughnessFactor!==void 0?d.roughnessFactor:1,d.metallicRoughnessTexture!==void 0&&(l.push(t.assignTexture(o,"metalnessMap",d.metallicRoughnessTexture)),l.push(t.assignTexture(o,"roughnessMap",d.metallicRoughnessTexture))),a=this._invokeOne(function(u){return u.getMaterialType&&u.getMaterialType(e)}),l.push(Promise.all(this._invokeAll(function(u){return u.extendMaterialParams&&u.extendMaterialParams(e,o)})))}r.doubleSided===!0&&(o.side=vn);const h=r.alphaMode||tc.OPAQUE;if(h===tc.BLEND?(o.transparent=!0,o.depthWrite=!1):(o.transparent=!1,h===tc.MASK&&(o.alphaTest=r.alphaCutoff!==void 0?r.alphaCutoff:.5)),r.normalTexture!==void 0&&a!==yn&&(l.push(t.assignTexture(o,"normalMap",r.normalTexture)),o.normalScale=new Se(1,1),r.normalTexture.scale!==void 0)){const d=r.normalTexture.scale;o.normalScale.set(d,d)}if(r.occlusionTexture!==void 0&&a!==yn&&(l.push(t.assignTexture(o,"aoMap",r.occlusionTexture)),r.occlusionTexture.strength!==void 0&&(o.aoMapIntensity=r.occlusionTexture.strength)),r.emissiveFactor!==void 0&&a!==yn){const d=r.emissiveFactor;o.emissive=new we().setRGB(d[0],d[1],d[2],Bt)}return r.emissiveTexture!==void 0&&a!==yn&&l.push(t.assignTexture(o,"emissiveMap",r.emissiveTexture,kt)),Promise.all(l).then(function(){const d=new a(o);return r.name&&(d.name=r.name),ri(d,r),t.associations.set(d,{materials:e}),r.extensions&&Bi(i,d,r),d})}createUniqueName(e){const t=ot.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){const t=this,n=this.extensions,i=this.primitiveCache;function r(o){return n[He.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(o,t).then(function(c){return Od(c,o,t)})}const a=[];for(let o=0,c=e.length;o<c;o++){const l=e[o],h=VM(l),d=i[h];if(d)a.push(d.promise);else{let u;l.extensions&&l.extensions[He.KHR_DRACO_MESH_COMPRESSION]?u=r(l):u=Od(new Ct,l,t),i[h]={primitive:l,promise:u},a.push(u)}}return Promise.all(a)}loadMesh(e){const t=this,n=this.json,i=this.extensions,r=n.meshes[e],a=r.primitives,o=[];for(let c=0,l=a.length;c<l;c++){const h=a[c].material===void 0?zM(this.cache):this.getDependency("material",a[c].material);o.push(h)}return o.push(t.loadGeometries(a)),Promise.all(o).then(function(c){const l=c.slice(0,c.length-1),h=c[c.length-1],d=[];for(let f=0,g=h.length;f<g;f++){const b=h[f],m=a[f];let p;const x=l[f];if(m.mode===bn.TRIANGLES||m.mode===bn.TRIANGLE_STRIP||m.mode===bn.TRIANGLE_FAN||m.mode===void 0)p=r.isSkinnedMesh===!0?new j_(b,x):new st(b,x),p.isSkinnedMesh===!0&&p.normalizeSkinWeights(),m.mode===bn.TRIANGLE_STRIP?p.geometry=Nd(p.geometry,uu):m.mode===bn.TRIANGLE_FAN&&(p.geometry=Nd(p.geometry,qc));else if(m.mode===bn.LINES)p=new Ca(b,x);else if(m.mode===bn.LINE_STRIP)p=new _l(b,x);else if(m.mode===bn.LINE_LOOP)p=new K_(b,x);else if(m.mode===bn.POINTS)p=new Ou(b,x);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+m.mode);Object.keys(p.geometry.morphAttributes).length>0&&GM(p,r),p.name=t.createUniqueName(r.name||"mesh_"+e),ri(p,r),m.extensions&&Bi(i,p,m),t.assignFinalMaterial(p),d.push(p)}for(let f=0,g=d.length;f<g;f++)t.associations.set(d[f],{meshes:e,primitives:f});if(d.length===1)return r.extensions&&Bi(i,d[0],r),d[0];const u=new Nt;r.extensions&&Bi(i,u,r),t.associations.set(u,{meshes:e});for(let f=0,g=d.length;f<g;f++)u.add(d[f]);return u})}loadCamera(e){let t;const n=this.json.cameras[e],i=n[n.type];if(!i){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new Xt(De.radToDeg(i.yfov),i.aspectRatio||1,i.znear||1,i.zfar||2e6):n.type==="orthographic"&&(t=new ml(-i.xmag,i.xmag,i.ymag,-i.ymag,i.znear,i.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),ri(t,n),Promise.resolve(t)}loadSkin(e){const t=this.json.skins[e],n=[];for(let i=0,r=t.joints.length;i<r;i++)n.push(this._loadNodeShallow(t.joints[i]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(i){const r=i.pop(),a=i,o=[],c=[];for(let l=0,h=a.length;l<h;l++){const d=a[l];if(d){o.push(d);const u=new ve;r!==null&&u.fromArray(r.array,l*16),c.push(u)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[l])}return new bl(o,c)})}loadAnimation(e){const t=this.json,n=this,i=t.animations[e],r=i.name?i.name:"animation_"+e,a=[],o=[],c=[],l=[],h=[];for(let d=0,u=i.channels.length;d<u;d++){const f=i.channels[d],g=i.samplers[f.sampler],b=f.target,m=b.node,p=i.parameters!==void 0?i.parameters[g.input]:g.input,x=i.parameters!==void 0?i.parameters[g.output]:g.output;b.node!==void 0&&(a.push(this.getDependency("node",m)),o.push(this.getDependency("accessor",p)),c.push(this.getDependency("accessor",x)),l.push(g),h.push(b))}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(c),Promise.all(l),Promise.all(h)]).then(function(d){const u=d[0],f=d[1],g=d[2],b=d[3],m=d[4],p=[];for(let x=0,v=u.length;x<v;x++){const y=u[x],A=f[x],T=g[x],S=b[x],P=m[x];if(y===void 0)continue;y.updateMatrix&&y.updateMatrix();const F=n._createAnimationTracks(y,A,T,S,P);if(F)for(let _=0;_<F.length;_++)p.push(F[_])}return new sv(r,void 0,p)})}createNodeMesh(e){const t=this.json,n=this,i=t.nodes[e];return i.mesh===void 0?null:n.getDependency("mesh",i.mesh).then(function(r){const a=n._getNodeRef(n.meshCache,i.mesh,r);return i.weights!==void 0&&a.traverse(function(o){if(o.isMesh)for(let c=0,l=i.weights.length;c<l;c++)o.morphTargetInfluences[c]=i.weights[c]}),a})}loadNode(e){const t=this.json,n=this,i=t.nodes[e],r=n._loadNodeShallow(e),a=[],o=i.children||[];for(let l=0,h=o.length;l<h;l++)a.push(n.getDependency("node",o[l]));const c=i.skin===void 0?Promise.resolve(null):n.getDependency("skin",i.skin);return Promise.all([r,Promise.all(a),c]).then(function(l){const h=l[0],d=l[1],u=l[2];u!==null&&h.traverse(function(f){f.isSkinnedMesh&&f.bind(u,qM)});for(let f=0,g=d.length;f<g;f++)h.add(d[f]);return h})}_loadNodeShallow(e){const t=this.json,n=this.extensions,i=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];const r=t.nodes[e],a=r.name?i.createUniqueName(r.name):"",o=[],c=i._invokeOne(function(l){return l.createNodeMesh&&l.createNodeMesh(e)});return c&&o.push(c),r.camera!==void 0&&o.push(i.getDependency("camera",r.camera).then(function(l){return i._getNodeRef(i.cameraCache,r.camera,l)})),i._invokeAll(function(l){return l.createNodeAttachment&&l.createNodeAttachment(e)}).forEach(function(l){o.push(l)}),this.nodeCache[e]=Promise.all(o).then(function(l){let h;if(r.isBone===!0?h=new Uu:l.length>1?h=new Nt:l.length===1?h=l[0]:h=new pt,h!==l[0])for(let d=0,u=l.length;d<u;d++)h.add(l[d]);if(r.name&&(h.userData.name=r.name,h.name=a),ri(h,r),r.extensions&&Bi(n,h,r),r.matrix!==void 0){const d=new ve;d.fromArray(r.matrix),h.applyMatrix4(d)}else r.translation!==void 0&&h.position.fromArray(r.translation),r.rotation!==void 0&&h.quaternion.fromArray(r.rotation),r.scale!==void 0&&h.scale.fromArray(r.scale);return i.associations.has(h)||i.associations.set(h,{}),i.associations.get(h).nodes=e,h}),this.nodeCache[e]}loadScene(e){const t=this.extensions,n=this.json.scenes[e],i=this,r=new Nt;n.name&&(r.name=i.createUniqueName(n.name)),ri(r,n),n.extensions&&Bi(t,r,n);const a=n.nodes||[],o=[];for(let c=0,l=a.length;c<l;c++)o.push(i.getDependency("node",a[c]));return Promise.all(o).then(function(c){for(let h=0,d=c.length;h<d;h++)r.add(c[h]);const l=h=>{const d=new Map;for(const[u,f]of i.associations)(u instanceof Pn||u instanceof Rt)&&d.set(u,f);return h.traverse(u=>{const f=i.associations.get(u);f!=null&&d.set(u,f)}),d};return i.associations=l(r),r})}_createAnimationTracks(e,t,n,i,r){const a=[],o=e.name?e.name:e.uuid,c=[];xi[r.path]===xi.weights?e.traverse(function(u){u.morphTargetInfluences&&c.push(u.name?u.name:u.uuid)}):c.push(o);let l;switch(xi[r.path]){case xi.weights:l=Us;break;case xi.rotation:l=Fs;break;case xi.position:case xi.scale:l=ks;break;default:switch(n.itemSize){case 1:l=Us;break;case 2:case 3:default:l=ks;break}break}const h=i.interpolation!==void 0?BM[i.interpolation]:Sr,d=this._getArrayFromAccessor(n);for(let u=0,f=c.length;u<f;u++){const g=new l(c[u]+"."+xi[r.path],t.array,d,h);i.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(g),a.push(g)}return a}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){const n=el(t.constructor),i=new Float32Array(t.length);for(let r=0,a=t.length;r<a;r++)i[r]=t[r]*n;t=i}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(n){const i=this instanceof Fs?OM:df;return new i(this.times,this.values,this.getValueSize()/3,n)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}}function XM(s,e,t){const n=e.attributes,i=new Vn;if(n.POSITION!==void 0){const o=t.json.accessors[n.POSITION],c=o.min,l=o.max;if(c!==void 0&&l!==void 0){if(i.set(new R(c[0],c[1],c[2]),new R(l[0],l[1],l[2])),o.normalized){const h=el(As[o.componentType]);i.min.multiplyScalar(h),i.max.multiplyScalar(h)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const r=e.targets;if(r!==void 0){const o=new R,c=new R;for(let l=0,h=r.length;l<h;l++){const d=r[l];if(d.POSITION!==void 0){const u=t.json.accessors[d.POSITION],f=u.min,g=u.max;if(f!==void 0&&g!==void 0){if(c.setX(Math.max(Math.abs(f[0]),Math.abs(g[0]))),c.setY(Math.max(Math.abs(f[1]),Math.abs(g[1]))),c.setZ(Math.max(Math.abs(f[2]),Math.abs(g[2]))),u.normalized){const b=el(As[u.componentType]);c.multiplyScalar(b)}o.max(c)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}i.expandByVector(o)}s.boundingBox=i;const a=new Wn;i.getCenter(a.center),a.radius=i.min.distanceTo(i.max)/2,s.boundingSphere=a}function Od(s,e,t){const n=e.attributes,i=[];function r(a,o){return t.getDependency("accessor",a).then(function(c){s.setAttribute(o,c)})}for(const a in n){const o=Zc[a]||a.toLowerCase();o in s.attributes||i.push(r(n[a],o))}if(e.indices!==void 0&&!s.index){const a=t.getDependency("accessor",e.indices).then(function(o){s.setIndex(o)});i.push(a)}return $e.workingColorSpace!==Bt&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${$e.workingColorSpace}" not supported.`),ri(s,e),XM(s,e,t),Promise.all(i).then(function(){return e.targets!==void 0?HM(s,e.targets,t):s})}var YM=function(){var s="b9H79Tebbbe8Fv9Gbb9Gvuuuuueu9Giuuub9Geueu9Giuuueuikqbeeedddillviebeoweuec:q;iekr;leDo9TW9T9VV95dbH9F9F939H79T9F9J9H229F9Jt9VV7bb8A9TW79O9V9Wt9F9KW9J9V9KW9wWVtW949c919M9MWVbeY9TW79O9V9Wt9F9KW9J9V9KW69U9KW949c919M9MWVbdE9TW79O9V9Wt9F9KW9J9V9KW69U9KW949tWG91W9U9JWbiL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9p9JtblK9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9r919HtbvL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWVT949Wbol79IV9Rbrq:P8Yqdbk;3sezu8Jjjjjbcj;eb9Rgv8Kjjjjbc9:hodnadcefal0mbcuhoaiRbbc:Ge9hmbavaialfgrad9Radz1jjjbhwcj;abad9UhoaicefhldnadTmbaoc;WFbGgocjdaocjd6EhDcbhqinaqae9pmeaDaeaq9RaqaDfae6Egkcsfgocl4cifcd4hxdndndndnaoc9WGgmTmbcbhPcehsawcjdfhzalhHinaraH9Rax6midnaraHaxfgl9RcK6mbczhoinawcj;cbfaogifgoc9WfhOdndndndndnaHaic9WfgAco4fRbbaAci4coG4ciGPlbedibkaO9cb83ibaOcwf9cb83ibxikaOalRblalRbbgAco4gCaCciSgCE86bbaocGfalclfaCfgORbbaAcl4ciGgCaCciSgCE86bbaocVfaOaCfgORbbaAcd4ciGgCaCciSgCE86bbaoc7faOaCfgORbbaAciGgAaAciSgAE86bbaoctfaOaAfgARbbalRbegOco4gCaCciSgCE86bbaoc91faAaCfgARbbaOcl4ciGgCaCciSgCE86bbaoc4faAaCfgARbbaOcd4ciGgCaCciSgCE86bbaoc93faAaCfgARbbaOciGgOaOciSgOE86bbaoc94faAaOfgARbbalRbdgOco4gCaCciSgCE86bbaoc95faAaCfgARbbaOcl4ciGgCaCciSgCE86bbaoc96faAaCfgARbbaOcd4ciGgCaCciSgCE86bbaoc97faAaCfgARbbaOciGgOaOciSgOE86bbaoc98faAaOfgORbbalRbiglco4gAaAciSgAE86bbaoc99faOaAfgORbbalcl4ciGgAaAciSgAE86bbaoc9:faOaAfgORbbalcd4ciGgAaAciSgAE86bbaocufaOaAfgoRbbalciGglalciSglE86bbaoalfhlxdkaOalRbwalRbbgAcl4gCaCcsSgCE86bbaocGfalcwfaCfgORbbaAcsGgAaAcsSgAE86bbaocVfaOaAfgORbbalRbegAcl4gCaCcsSgCE86bbaoc7faOaCfgORbbaAcsGgAaAcsSgAE86bbaoctfaOaAfgORbbalRbdgAcl4gCaCcsSgCE86bbaoc91faOaCfgORbbaAcsGgAaAcsSgAE86bbaoc4faOaAfgORbbalRbigAcl4gCaCcsSgCE86bbaoc93faOaCfgORbbaAcsGgAaAcsSgAE86bbaoc94faOaAfgORbbalRblgAcl4gCaCcsSgCE86bbaoc95faOaCfgORbbaAcsGgAaAcsSgAE86bbaoc96faOaAfgORbbalRbvgAcl4gCaCcsSgCE86bbaoc97faOaCfgORbbaAcsGgAaAcsSgAE86bbaoc98faOaAfgORbbalRbogAcl4gCaCcsSgCE86bbaoc99faOaCfgORbbaAcsGgAaAcsSgAE86bbaoc9:faOaAfgORbbalRbrglcl4gAaAcsSgAE86bbaocufaOaAfgoRbbalcsGglalcsSglE86bbaoalfhlxekaOal8Pbb83bbaOcwfalcwf8Pbb83bbalczfhlkdnaiam9pmbaiczfhoaral9RcL0mekkaiam6mialTmidnakTmbawaPfRbbhOcbhoazhiinaiawcj;cbfaofRbbgAce4cbaAceG9R7aOfgO86bbaiadfhiaocefgoak9hmbkkazcefhzaPcefgPad6hsalhHaPad9hmexvkkcbhlasceGmdxikalaxad2fhCdnakTmbcbhHcehsawcjdfhminaral9Rax6mialTmdalaxfhlawaHfRbbhOcbhoamhiinaiawcj;cbfaofRbbgAce4cbaAceG9R7aOfgO86bbaiadfhiaocefgoak9hmbkamcefhmaHcefgHad6hsaHad9hmbkaChlxikcbhocehsinaral9Rax6mdalTmealaxfhlaocefgoad6hsadao9hmbkaChlxdkcbhlasceGTmekc9:hoxikabaqad2fawcjdfakad2z1jjjb8Aawawcjdfakcufad2fadz1jjjb8Aakaqfhqalmbkc9:hoxekcbc99aral9Radcaadca0ESEhokavcj;ebf8Kjjjjbaok;yzeHu8Jjjjjbc;ae9Rgv8Kjjjjbc9:hodnaeci9UgrcHfal0mbcuhoaiRbbgwc;WeGc;Ge9hmbawcsGgDce0mbavc;abfcFecjez:jjjjb8AavcUf9cu83ibavc8Wf9cu83ibavcyf9cu83ibavcaf9cu83ibavcKf9cu83ibavczf9cu83ibav9cu83iwav9cu83ibaialfc9WfhqaicefgwarfhodnaeTmbcmcsaDceSEhkcbhxcbhmcbhDcbhicbhlindnaoaq9nmbc9:hoxikdndnawRbbgrc;Ve0mbavc;abfalarcl4cu7fcsGcitfgPydlhsaPydbhzdnarcsGgPak9pmbavaiarcu7fcsGcdtfydbaxaPEhraPThPdndnadcd9hmbabaDcetfgHaz87ebaHcdfas87ebaHclfar87ebxekabaDcdtfgHazBdbaHclfasBdbaHcwfarBdbkaxaPfhxavc;abfalcitfgHarBdbaHasBdlavaicdtfarBdbavc;abfalcefcsGglcitfgHazBdbaHarBdlaiaPfhialcefhlxdkdndnaPcsSmbamaPfaPc987fcefhmxekaocefhrao8SbbgPcFeGhHdndnaPcu9mmbarhoxekaocvfhoaHcFbGhHcrhPdninar8SbbgOcFbGaPtaHVhHaOcu9kmearcefhraPcrfgPc8J9hmbxdkkarcefhokaHce4cbaHceG9R7amfhmkdndnadcd9hmbabaDcetfgraz87ebarcdfas87ebarclfam87ebxekabaDcdtfgrazBdbarclfasBdbarcwfamBdbkavc;abfalcitfgramBdbarasBdlavaicdtfamBdbavc;abfalcefcsGglcitfgrazBdbaramBdlaicefhialcefhlxekdnarcpe0mbaxcefgOavaiaqarcsGfRbbgPcl49RcsGcdtfydbaPcz6gHEhravaiaP9RcsGcdtfydbaOaHfgsaPcsGgOEhPaOThOdndnadcd9hmbabaDcetfgzax87ebazcdfar87ebazclfaP87ebxekabaDcdtfgzaxBdbazclfarBdbazcwfaPBdbkavaicdtfaxBdbavc;abfalcitfgzarBdbazaxBdlavaicefgicsGcdtfarBdbavc;abfalcefcsGcitfgzaPBdbazarBdlavaiaHfcsGgicdtfaPBdbavc;abfalcdfcsGglcitfgraxBdbaraPBdlalcefhlaiaOfhiasaOfhxxekaxcbaoRbbgzEgAarc;:eSgrfhsazcsGhCazcl4hXdndnazcs0mbascefhOxekashOavaiaX9RcsGcdtfydbhskdndnaCmbaOcefhxxekaOhxavaiaz9RcsGcdtfydbhOkdndnarTmbaocefhrxekaocdfhrao8SbegHcFeGhPdnaHcu9kmbaocofhAaPcFbGhPcrhodninar8SbbgHcFbGaotaPVhPaHcu9kmearcefhraocrfgoc8J9hmbkaAhrxekarcefhrkaPce4cbaPceG9R7amfgmhAkdndnaXcsSmbarhPxekarcefhPar8SbbgocFeGhHdnaocu9kmbarcvfhsaHcFbGhHcrhodninaP8SbbgrcFbGaotaHVhHarcu9kmeaPcefhPaocrfgoc8J9hmbkashPxekaPcefhPkaHce4cbaHceG9R7amfgmhskdndnaCcsSmbaPhoxekaPcefhoaP8SbbgrcFeGhHdnarcu9kmbaPcvfhOaHcFbGhHcrhrdninao8SbbgPcFbGartaHVhHaPcu9kmeaocefhoarcrfgrc8J9hmbkaOhoxekaocefhokaHce4cbaHceG9R7amfgmhOkdndnadcd9hmbabaDcetfgraA87ebarcdfas87ebarclfaO87ebxekabaDcdtfgraABdbarclfasBdbarcwfaOBdbkavc;abfalcitfgrasBdbaraABdlavaicdtfaABdbavc;abfalcefcsGcitfgraOBdbarasBdlavaicefgicsGcdtfasBdbavc;abfalcdfcsGcitfgraABdbaraOBdlavaiazcz6aXcsSVfgicsGcdtfaOBdbaiaCTaCcsSVfhialcifhlkawcefhwalcsGhlaicsGhiaDcifgDae6mbkkcbc99aoaqSEhokavc;aef8Kjjjjbaok:llevu8Jjjjjbcz9Rhvc9:hodnaecvfal0mbcuhoaiRbbc;:eGc;qe9hmbav9cb83iwaicefhraialfc98fhwdnaeTmbdnadcdSmbcbhDindnaraw6mbc9:skarcefhoar8SbbglcFeGhidndnalcu9mmbaohrxekarcvfhraicFbGhicrhldninao8SbbgdcFbGaltaiVhiadcu9kmeaocefhoalcrfglc8J9hmbxdkkaocefhrkabaDcdtfaicd4cbaice4ceG9R7avcwfaiceGcdtVgoydbfglBdbaoalBdbaDcefgDae9hmbxdkkcbhDindnaraw6mbc9:skarcefhoar8SbbglcFeGhidndnalcu9mmbaohrxekarcvfhraicFbGhicrhldninao8SbbgdcFbGaltaiVhiadcu9kmeaocefhoalcrfglc8J9hmbxdkkaocefhrkabaDcetfaicd4cbaice4ceG9R7avcwfaiceGcdtVgoydbfgl87ebaoalBdbaDcefgDae9hmbkkcbc99arawSEhokaok:Lvoeue99dud99eud99dndnadcl9hmbaeTmeindndnabcdfgd8Sbb:Yab8Sbbgi:Ygl:l:tabcefgv8Sbbgo:Ygr:l:tgwJbb;:9cawawNJbbbbawawJbbbb9GgDEgq:mgkaqaicb9iEalMgwawNakaqaocb9iEarMgqaqNMM:r:vglNJbbbZJbbb:;aDEMgr:lJbbb9p9DTmbar:Ohixekcjjjj94hikadai86bbdndnaqalNJbbbZJbbb:;aqJbbbb9GEMgq:lJbbb9p9DTmbaq:Ohdxekcjjjj94hdkavad86bbdndnawalNJbbbZJbbb:;awJbbbb9GEMgw:lJbbb9p9DTmbaw:Ohdxekcjjjj94hdkabad86bbabclfhbaecufgembxdkkaeTmbindndnabclfgd8Ueb:Yab8Uebgi:Ygl:l:tabcdfgv8Uebgo:Ygr:l:tgwJb;:FSawawNJbbbbawawJbbbb9GgDEgq:mgkaqaicb9iEalMgwawNakaqaocb9iEarMgqaqNMM:r:vglNJbbbZJbbb:;aDEMgr:lJbbb9p9DTmbar:Ohixekcjjjj94hikadai87ebdndnaqalNJbbbZJbbb:;aqJbbbb9GEMgq:lJbbb9p9DTmbaq:Ohdxekcjjjj94hdkavad87ebdndnawalNJbbbZJbbb:;awJbbbb9GEMgw:lJbbb9p9DTmbaw:Ohdxekcjjjj94hdkabad87ebabcwfhbaecufgembkkk;siliui99iue99dnaeTmbcbhiabhlindndnJ;Zl81Zalcof8UebgvciV:Y:vgoal8Ueb:YNgrJb;:FSNJbbbZJbbb:;arJbbbb9GEMgw:lJbbb9p9DTmbaw:OhDxekcjjjj94hDkalclf8Uebhqalcdf8UebhkabavcefciGaiVcetfaD87ebdndnaoak:YNgwJb;:FSNJbbbZJbbb:;awJbbbb9GEMgx:lJbbb9p9DTmbax:Ohkxekcjjjj94hkkabavcdfciGaiVcetfak87ebdndnaoaq:YNgoJb;:FSNJbbbZJbbb:;aoJbbbb9GEMgx:lJbbb9p9DTmbax:Ohqxekcjjjj94hqkabavcufciGaiVcetfaq87ebdndnJbbjZararN:tawawN:taoaoN:tgrJbbbbarJbbbb9GE:rJb;:FSNJbbbZMgr:lJbbb9p9DTmbar:Ohqxekcjjjj94hqkabavciGaiVcetfaq87ebalcwfhlaiclfhiaecufgembkkk9mbdnadcd4ae2geTmbinababydbgdcwtcw91:Yadce91cjjj;8ifcjjj98G::NUdbabclfhbaecufgembkkk9teiucbcbydj1jjbgeabcifc98GfgbBdj1jjbdndnabZbcztgd9nmbcuhiabad9RcFFifcz4nbcuSmekaehikaik;LeeeudndnaeabVciGTmbabhixekdndnadcz9pmbabhixekabhiinaiaeydbBdbaiclfaeclfydbBdbaicwfaecwfydbBdbaicxfaecxfydbBdbaiczfhiaeczfheadc9Wfgdcs0mbkkadcl6mbinaiaeydbBdbaeclfheaiclfhiadc98fgdci0mbkkdnadTmbinaiaeRbb86bbaicefhiaecefheadcufgdmbkkabk;aeedudndnabciGTmbabhixekaecFeGc:b:c:ew2hldndnadcz9pmbabhixekabhiinaialBdbaicxfalBdbaicwfalBdbaiclfalBdbaiczfhiadc9Wfgdcs0mbkkadcl6mbinaialBdbaiclfhiadc98fgdci0mbkkdnadTmbinaiae86bbaicefhiadcufgdmbkkabkkkebcjwklz9Kbb",e="b9H79TebbbeKl9Gbb9Gvuuuuueu9Giuuub9Geueuikqbbebeedddilve9Weeeviebeoweuec:q;Aekr;leDo9TW9T9VV95dbH9F9F939H79T9F9J9H229F9Jt9VV7bb8A9TW79O9V9Wt9F9KW9J9V9KW9wWVtW949c919M9MWVbdY9TW79O9V9Wt9F9KW9J9V9KW69U9KW949c919M9MWVblE9TW79O9V9Wt9F9KW9J9V9KW69U9KW949tWG91W9U9JWbvL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9p9JtboK9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9r919HtbrL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWVT949Wbwl79IV9RbDq;t9tqlbzik9:evu8Jjjjjbcz9Rhbcbheincbhdcbhiinabcwfadfaicjuaead4ceGglE86bbaialfhiadcefgdcw9hmbkaec:q:yjjbfai86bbaecitc:q1jjbfab8Piw83ibaecefgecjd9hmbkk;h8JlHud97euo978Jjjjjbcj;kb9Rgv8Kjjjjbc9:hodnadcefal0mbcuhoaiRbbc:Ge9hmbavaialfgrad9Rad;8qbbcj;abad9UhoaicefhldnadTmbaoc;WFbGgocjdaocjd6EhwcbhDinaDae9pmeawaeaD9RaDawfae6Egqcsfgoc9WGgkci2hxakcethmaocl4cifcd4hPabaDad2fhscbhzdnincehHalhOcbhAdninaraO9RaP6miavcj;cbfaAak2fhCaOaPfhlcbhidnakc;ab6mbaral9Rc;Gb6mbcbhoinaCaofhidndndndndnaOaoco4fRbbgXciGPlbedibkaipxbbbbbbbbbbbbbbbbpklbxikaialpbblalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLgQcdp:meaQpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogLpxiiiiiiiiiiiiiiiip8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklbalclfaYpQbfaKc:q:yjjbfRbbfhlxdkaialpbbwalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogLpxssssssssssssssssp8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklbalcwfaYpQbfaKc:q:yjjbfRbbfhlxekaialpbbbpklbalczfhlkdndndndndnaXcd4ciGPlbedibkaipxbbbbbbbbbbbbbbbbpklzxikaialpbblalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLgQcdp:meaQpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogLpxiiiiiiiiiiiiiiiip8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklzalclfaYpQbfaKc:q:yjjbfRbbfhlxdkaialpbbwalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogLpxssssssssssssssssp8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklzalcwfaYpQbfaKc:q:yjjbfRbbfhlxekaialpbbbpklzalczfhlkdndndndndnaXcl4ciGPlbedibkaipxbbbbbbbbbbbbbbbbpklaxikaialpbblalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLgQcdp:meaQpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogLpxiiiiiiiiiiiiiiiip8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklaalclfaYpQbfaKc:q:yjjbfRbbfhlxdkaialpbbwalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogLpxssssssssssssssssp8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklaalcwfaYpQbfaKc:q:yjjbfRbbfhlxekaialpbbbpklaalczfhlkdndndndndnaXco4Plbedibkaipxbbbbbbbbbbbbbbbbpkl8WxikaialpbblalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLgQcdp:meaQpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogLpxiiiiiiiiiiiiiiiip8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgXcitc:q1jjbfpbibaXc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgXcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spkl8WalclfaYpQbfaXc:q:yjjbfRbbfhlxdkaialpbbwalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogLpxssssssssssssssssp8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgXcitc:q1jjbfpbibaXc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgXcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spkl8WalcwfaYpQbfaXc:q:yjjbfRbbfhlxekaialpbbbpkl8Walczfhlkaoc;abfhiaocjefak0meaihoaral9Rc;Fb0mbkkdndnaiak9pmbaici4hoinaral9RcK6mdaCaifhXdndndndndnaOaico4fRbbaocoG4ciGPlbedibkaXpxbbbbbbbbbbbbbbbbpklbxikaXalpbblalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLgQcdp:meaQpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogLpxiiiiiiiiiiiiiiiip8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklbalclfaYpQbfaKc:q:yjjbfRbbfhlxdkaXalpbbwalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogLpxssssssssssssssssp8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklbalcwfaYpQbfaKc:q:yjjbfRbbfhlxekaXalpbbbpklbalczfhlkaocdfhoaiczfgiak6mbkkalTmbaAci6hHalhOaAcefgohAaoclSmdxekkcbhlaHceGmdkdnakTmbavcjdfazfhiavazfpbdbhYcbhXinaiavcj;cbfaXfgopblbgLcep9TaLpxeeeeeeeeeeeeeeeegQp9op9Hp9rgLaoakfpblbg8Acep9Ta8AaQp9op9Hp9rg8ApmbzeHdOiAlCvXoQrLgEaoamfpblbg3cep9Ta3aQp9op9Hp9rg3aoaxfpblbg5cep9Ta5aQp9op9Hp9rg5pmbzeHdOiAlCvXoQrLg8EpmbezHdiOAlvCXorQLgQaQpmbedibedibedibediaYp9UgYp9AdbbaiadfgoaYaQaQpmlvorlvorlvorlvorp9UgYp9AdbbaoadfgoaYaQaQpmwDqkwDqkwDqkwDqkp9UgYp9AdbbaoadfgoaYaQaQpmxmPsxmPsxmPsxmPsp9UgYp9AdbbaoadfgoaYaEa8EpmwDKYqk8AExm35Ps8E8FgQaQpmbedibedibedibedip9UgYp9AdbbaoadfgoaYaQaQpmlvorlvorlvorlvorp9UgYp9AdbbaoadfgoaYaQaQpmwDqkwDqkwDqkwDqkp9UgYp9AdbbaoadfgoaYaQaQpmxmPsxmPsxmPsxmPsp9UgYp9AdbbaoadfgoaYaLa8ApmwKDYq8AkEx3m5P8Es8FgLa3a5pmwKDYq8AkEx3m5P8Es8Fg8ApmbezHdiOAlvCXorQLgQaQpmbedibedibedibedip9UgYp9AdbbaoadfgoaYaQaQpmlvorlvorlvorlvorp9UgYp9AdbbaoadfgoaYaQaQpmwDqkwDqkwDqkwDqkp9UgYp9AdbbaoadfgoaYaQaQpmxmPsxmPsxmPsxmPsp9UgYp9AdbbaoadfgoaYaLa8ApmwDKYqk8AExm35Ps8E8FgQaQpmbedibedibedibedip9UgYp9AdbbaoadfgoaYaQaQpmlvorlvorlvorlvorp9UgYp9AdbbaoadfgoaYaQaQpmwDqkwDqkwDqkwDqkp9UgYp9AdbbaoadfgoaYaQaQpmxmPsxmPsxmPsxmPsp9UgYp9AdbbaoadfhiaXczfgXak6mbkkazclfgzad6mbkasavcjdfaqad2;8qbbavavcjdfaqcufad2fad;8qbbaqaDfhDc9:hoalmexikkc9:hoxekcbc99aral9Radcaadca0ESEhokavcj;kbf8Kjjjjbaokwbz:bjjjbk;uzeHu8Jjjjjbc;ae9Rgv8Kjjjjbc9:hodnaeci9UgrcHfal0mbcuhoaiRbbgwc;WeGc;Ge9hmbawcsGgDce0mbavc;abfcFecje;8kbavcUf9cu83ibavc8Wf9cu83ibavcyf9cu83ibavcaf9cu83ibavcKf9cu83ibavczf9cu83ibav9cu83iwav9cu83ibaialfc9WfhqaicefgwarfhodnaeTmbcmcsaDceSEhkcbhxcbhmcbhDcbhicbhlindnaoaq9nmbc9:hoxikdndnawRbbgrc;Ve0mbavc;abfalarcl4cu7fcsGcitfgPydlhsaPydbhzdnarcsGgPak9pmbavaiarcu7fcsGcdtfydbaxaPEhraPThPdndnadcd9hmbabaDcetfgHaz87ebaHcdfas87ebaHclfar87ebxekabaDcdtfgHazBdbaHclfasBdbaHcwfarBdbkaxaPfhxavc;abfalcitfgHarBdbaHasBdlavaicdtfarBdbavc;abfalcefcsGglcitfgHazBdbaHarBdlaiaPfhialcefhlxdkdndnaPcsSmbamaPfaPc987fcefhmxekaocefhrao8SbbgPcFeGhHdndnaPcu9mmbarhoxekaocvfhoaHcFbGhHcrhPdninar8SbbgOcFbGaPtaHVhHaOcu9kmearcefhraPcrfgPc8J9hmbxdkkarcefhokaHce4cbaHceG9R7amfhmkdndnadcd9hmbabaDcetfgraz87ebarcdfas87ebarclfam87ebxekabaDcdtfgrazBdbarclfasBdbarcwfamBdbkavc;abfalcitfgramBdbarasBdlavaicdtfamBdbavc;abfalcefcsGglcitfgrazBdbaramBdlaicefhialcefhlxekdnarcpe0mbaxcefgOavaiaqarcsGfRbbgPcl49RcsGcdtfydbaPcz6gHEhravaiaP9RcsGcdtfydbaOaHfgsaPcsGgOEhPaOThOdndnadcd9hmbabaDcetfgzax87ebazcdfar87ebazclfaP87ebxekabaDcdtfgzaxBdbazclfarBdbazcwfaPBdbkavaicdtfaxBdbavc;abfalcitfgzarBdbazaxBdlavaicefgicsGcdtfarBdbavc;abfalcefcsGcitfgzaPBdbazarBdlavaiaHfcsGgicdtfaPBdbavc;abfalcdfcsGglcitfgraxBdbaraPBdlalcefhlaiaOfhiasaOfhxxekaxcbaoRbbgzEgAarc;:eSgrfhsazcsGhCazcl4hXdndnazcs0mbascefhOxekashOavaiaX9RcsGcdtfydbhskdndnaCmbaOcefhxxekaOhxavaiaz9RcsGcdtfydbhOkdndnarTmbaocefhrxekaocdfhrao8SbegHcFeGhPdnaHcu9kmbaocofhAaPcFbGhPcrhodninar8SbbgHcFbGaotaPVhPaHcu9kmearcefhraocrfgoc8J9hmbkaAhrxekarcefhrkaPce4cbaPceG9R7amfgmhAkdndnaXcsSmbarhPxekarcefhPar8SbbgocFeGhHdnaocu9kmbarcvfhsaHcFbGhHcrhodninaP8SbbgrcFbGaotaHVhHarcu9kmeaPcefhPaocrfgoc8J9hmbkashPxekaPcefhPkaHce4cbaHceG9R7amfgmhskdndnaCcsSmbaPhoxekaPcefhoaP8SbbgrcFeGhHdnarcu9kmbaPcvfhOaHcFbGhHcrhrdninao8SbbgPcFbGartaHVhHaPcu9kmeaocefhoarcrfgrc8J9hmbkaOhoxekaocefhokaHce4cbaHceG9R7amfgmhOkdndnadcd9hmbabaDcetfgraA87ebarcdfas87ebarclfaO87ebxekabaDcdtfgraABdbarclfasBdbarcwfaOBdbkavc;abfalcitfgrasBdbaraABdlavaicdtfaABdbavc;abfalcefcsGcitfgraOBdbarasBdlavaicefgicsGcdtfasBdbavc;abfalcdfcsGcitfgraABdbaraOBdlavaiazcz6aXcsSVfgicsGcdtfaOBdbaiaCTaCcsSVfhialcifhlkawcefhwalcsGhlaicsGhiaDcifgDae6mbkkcbc99aoaqSEhokavc;aef8Kjjjjbaok:llevu8Jjjjjbcz9Rhvc9:hodnaecvfal0mbcuhoaiRbbc;:eGc;qe9hmbav9cb83iwaicefhraialfc98fhwdnaeTmbdnadcdSmbcbhDindnaraw6mbc9:skarcefhoar8SbbglcFeGhidndnalcu9mmbaohrxekarcvfhraicFbGhicrhldninao8SbbgdcFbGaltaiVhiadcu9kmeaocefhoalcrfglc8J9hmbxdkkaocefhrkabaDcdtfaicd4cbaice4ceG9R7avcwfaiceGcdtVgoydbfglBdbaoalBdbaDcefgDae9hmbxdkkcbhDindnaraw6mbc9:skarcefhoar8SbbglcFeGhidndnalcu9mmbaohrxekarcvfhraicFbGhicrhldninao8SbbgdcFbGaltaiVhiadcu9kmeaocefhoalcrfglc8J9hmbxdkkaocefhrkabaDcetfaicd4cbaice4ceG9R7avcwfaiceGcdtVgoydbfgl87ebaoalBdbaDcefgDae9hmbkkcbc99arawSEhokaok:EPliuo97eue978Jjjjjbca9Rhidndnadcl9hmbdnaec98GglTmbcbhvabhdinadadpbbbgocKp:RecKp:Sep;6egraocwp:RecKp:Sep;6earp;Geaoczp:RecKp:Sep;6egwp;Gep;Kep;LegDpxbbbbbbbbbbbbbbbbp:2egqarpxbbbjbbbjbbbjbbbjgkp9op9rp;Kegrpxbb;:9cbb;:9cbb;:9cbb;:9cararp;MeaDaDp;Meawaqawakp9op9rp;Kegrarp;Mep;Kep;Kep;Jep;Negwp;Mepxbbn0bbn0bbn0bbn0gqp;KepxFbbbFbbbFbbbFbbbp9oaopxbbbFbbbFbbbFbbbFp9op9qarawp;Meaqp;Kecwp:RepxbFbbbFbbbFbbbFbbp9op9qaDawp;Meaqp;Keczp:RepxbbFbbbFbbbFbbbFbp9op9qpkbbadczfhdavclfgval6mbkkalae9pmeaiaeciGgvcdtgdVcbczad9R;8kbaiabalcdtfglad;8qbbdnavTmbaiaipblbgocKp:RecKp:Sep;6egraocwp:RecKp:Sep;6earp;Geaoczp:RecKp:Sep;6egwp;Gep;Kep;LegDpxbbbbbbbbbbbbbbbbp:2egqarpxbbbjbbbjbbbjbbbjgkp9op9rp;Kegrpxbb;:9cbb;:9cbb;:9cbb;:9cararp;MeaDaDp;Meawaqawakp9op9rp;Kegrarp;Mep;Kep;Kep;Jep;Negwp;Mepxbbn0bbn0bbn0bbn0gqp;KepxFbbbFbbbFbbbFbbbp9oaopxbbbFbbbFbbbFbbbFp9op9qarawp;Meaqp;Kecwp:RepxbFbbbFbbbFbbbFbbp9op9qaDawp;Meaqp;Keczp:RepxbbFbbbFbbbFbbbFbp9op9qpklbkalaiad;8qbbskdnaec98GgxTmbcbhvabhdinadczfglalpbbbgopxbbbbbbFFbbbbbbFFgkp9oadpbbbgDaopmlvorxmPsCXQL358E8FpxFubbFubbFubbFubbp9op;6eaDaopmbediwDqkzHOAKY8AEgoczp:Sep;6egrp;Geaoczp:Reczp:Sep;6egwp;Gep;Kep;Legopxb;:FSb;:FSb;:FSb;:FSawaopxbbbbbbbbbbbbbbbbp:2egqawpxbbbjbbbjbbbjbbbjgmp9op9rp;Kegwawp;Meaoaop;Mearaqaramp9op9rp;Kegoaop;Mep;Kep;Kep;Jep;Negrp;Mepxbbn0bbn0bbn0bbn0gqp;Keczp:Reawarp;Meaqp;KepxFFbbFFbbFFbbFFbbp9op9qgwaoarp;Meaqp;KepxFFbbFFbbFFbbFFbbp9ogopmwDKYqk8AExm35Ps8E8Fp9qpkbbadaDakp9oawaopmbezHdiOAlvCXorQLp9qpkbbadcafhdavclfgvax6mbkkaxae9pmbaiaeciGgvcitgdfcbcaad9R;8kbaiabaxcitfglad;8qbbdnavTmbaiaipblzgopxbbbbbbFFbbbbbbFFgkp9oaipblbgDaopmlvorxmPsCXQL358E8FpxFubbFubbFubbFubbp9op;6eaDaopmbediwDqkzHOAKY8AEgoczp:Sep;6egrp;Geaoczp:Reczp:Sep;6egwp;Gep;Kep;Legopxb;:FSb;:FSb;:FSb;:FSawaopxbbbbbbbbbbbbbbbbp:2egqawpxbbbjbbbjbbbjbbbjgmp9op9rp;Kegwawp;Meaoaop;Mearaqaramp9op9rp;Kegoaop;Mep;Kep;Kep;Jep;Negrp;Mepxbbn0bbn0bbn0bbn0gqp;Keczp:Reawarp;Meaqp;KepxFFbbFFbbFFbbFFbbp9op9qgwaoarp;Meaqp;KepxFFbbFFbbFFbbFFbbp9ogopmwDKYqk8AExm35Ps8E8Fp9qpklzaiaDakp9oawaopmbezHdiOAlvCXorQLp9qpklbkalaiad;8qbbkk;4wllue97euv978Jjjjjbc8W9Rhidnaec98GglTmbcbhvabhoinaiaopbbbgraoczfgwpbbbgDpmlvorxmPsCXQL358E8Fgqczp:Segkclp:RepklbaopxbbjZbbjZbbjZbbjZpx;Zl81Z;Zl81Z;Zl81Z;Zl81Zakpxibbbibbbibbbibbbp9qp;6ep;NegkaraDpmbediwDqkzHOAKY8AEgrczp:Reczp:Sep;6ep;MegDaDp;Meakarczp:Sep;6ep;Megxaxp;Meakaqczp:Reczp:Sep;6ep;Megqaqp;Mep;Kep;Kep;Lepxbbbbbbbbbbbbbbbbp:4ep;Jepxb;:FSb;:FSb;:FSb;:FSgkp;Mepxbbn0bbn0bbn0bbn0grp;KepxFFbbFFbbFFbbFFbbgmp9oaxakp;Mearp;Keczp:Rep9qgxaqakp;Mearp;Keczp:ReaDakp;Mearp;Keamp9op9qgkpmbezHdiOAlvCXorQLgrp5baipblbpEb:T:j83ibaocwfarp5eaipblbpEe:T:j83ibawaxakpmwDKYqk8AExm35Ps8E8Fgkp5baipblbpEd:T:j83ibaocKfakp5eaipblbpEi:T:j83ibaocafhoavclfgval6mbkkdnalae9pmbaiaeciGgvcitgofcbcaao9R;8kbaiabalcitfgwao;8qbbdnavTmbaiaipblbgraipblzgDpmlvorxmPsCXQL358E8Fgqczp:Segkclp:RepklaaipxbbjZbbjZbbjZbbjZpx;Zl81Z;Zl81Z;Zl81Z;Zl81Zakpxibbbibbbibbbibbbp9qp;6ep;NegkaraDpmbediwDqkzHOAKY8AEgrczp:Reczp:Sep;6ep;MegDaDp;Meakarczp:Sep;6ep;Megxaxp;Meakaqczp:Reczp:Sep;6ep;Megqaqp;Mep;Kep;Kep;Lepxbbbbbbbbbbbbbbbbp:4ep;Jepxb;:FSb;:FSb;:FSb;:FSgkp;Mepxbbn0bbn0bbn0bbn0grp;KepxFFbbFFbbFFbbFFbbgmp9oaxakp;Mearp;Keczp:Rep9qgxaqakp;Mearp;Keczp:ReaDakp;Mearp;Keamp9op9qgkpmbezHdiOAlvCXorQLgrp5baipblapEb:T:j83ibaiarp5eaipblapEe:T:j83iwaiaxakpmwDKYqk8AExm35Ps8E8Fgkp5baipblapEd:T:j83izaiakp5eaipblapEi:T:j83iKkawaiao;8qbbkk:Pddiue978Jjjjjbc;ab9Rhidnadcd4ae2glc98GgvTmbcbhdabheinaeaepbbbgocwp:Recwp:Sep;6eaocep:SepxbbjZbbjZbbjZbbjZp:UepxbbjFbbjFbbjFbbjFp9op;Mepkbbaeczfheadclfgdav6mbkkdnaval9pmbaialciGgdcdtgeVcbc;abae9R;8kbaiabavcdtfgvae;8qbbdnadTmbaiaipblbgocwp:Recwp:Sep;6eaocep:SepxbbjZbbjZbbjZbbjZp:UepxbbjFbbjFbbjFbbjFp9op;Mepklbkavaiae;8qbbkk9teiucbcbydj1jjbgeabcifc98GfgbBdj1jjbdndnabZbcztgd9nmbcuhiabad9RcFFifcz4nbcuSmekaehikaikkkebcjwklz9Tbb",t=new Uint8Array([0,97,115,109,1,0,0,0,1,4,1,96,0,0,3,3,2,0,0,5,3,1,0,1,12,1,0,10,22,2,12,0,65,0,65,0,65,0,252,10,0,0,11,7,0,65,0,253,15,26,11]),n=new Uint8Array([32,0,65,2,1,106,34,33,3,128,11,4,13,64,6,253,10,7,15,116,127,5,8,12,40,16,19,54,20,9,27,255,113,17,42,67,24,23,146,148,18,14,22,45,70,69,56,114,101,21,25,63,75,136,108,28,118,29,73,115]);if(typeof WebAssembly!="object")return{supported:!1};var i=WebAssembly.validate(t)?e:s,r,a=WebAssembly.instantiate(o(i),{}).then(function(p){r=p.instance,r.exports.__wasm_call_ctors()});function o(p){for(var x=new Uint8Array(p.length),v=0;v<p.length;++v){var y=p.charCodeAt(v);x[v]=y>96?y-97:y>64?y-39:y+4}for(var A=0,v=0;v<p.length;++v)x[A++]=x[v]<60?n[x[v]]:(x[v]-60)*64+x[++v];return x.buffer.slice(0,A)}function c(p,x,v,y,A,T){var S=r.exports.sbrk,P=v+3&-4,F=S(P*y),_=S(A.length),w=new Uint8Array(r.exports.memory.buffer);w.set(A,_);var U=p(F,v,y,_,A.length);if(U==0&&T&&T(F,P,y),x.set(w.subarray(F,F+v*y)),S(F-S(0)),U!=0)throw new Error("Malformed buffer data: "+U)}var l={NONE:"",OCTAHEDRAL:"meshopt_decodeFilterOct",QUATERNION:"meshopt_decodeFilterQuat",EXPONENTIAL:"meshopt_decodeFilterExp"},h={ATTRIBUTES:"meshopt_decodeVertexBuffer",TRIANGLES:"meshopt_decodeIndexBuffer",INDICES:"meshopt_decodeIndexSequence"},d=[],u=0;function f(p){var x={object:new Worker(p),pending:0,requests:{}};return x.object.onmessage=function(v){var y=v.data;x.pending-=y.count,x.requests[y.id][y.action](y.value),delete x.requests[y.id]},x}function g(p){for(var x="var instance; var ready = WebAssembly.instantiate(new Uint8Array(["+new Uint8Array(o(i))+"]), {}).then(function(result) { instance = result.instance; instance.exports.__wasm_call_ctors(); });self.onmessage = workerProcess;"+c.toString()+m.toString(),v=new Blob([x],{type:"text/javascript"}),y=URL.createObjectURL(v),A=0;A<p;++A)d[A]=f(y);URL.revokeObjectURL(y)}function b(p,x,v,y,A){for(var T=d[0],S=1;S<d.length;++S)d[S].pending<T.pending&&(T=d[S]);return new Promise(function(P,F){var _=new Uint8Array(v),w=u++;T.pending+=p,T.requests[w]={resolve:P,reject:F},T.object.postMessage({id:w,count:p,size:x,source:_,mode:y,filter:A},[_.buffer])})}function m(p){a.then(function(){var x=p.data;try{var v=new Uint8Array(x.count*x.size);c(r.exports[x.mode],v,x.count,x.size,x.source,r.exports[x.filter]),self.postMessage({id:x.id,count:x.count,action:"resolve",value:v},[v.buffer])}catch(y){self.postMessage({id:x.id,count:x.count,action:"reject",value:y})}})}return{ready:a,supported:!0,useWorkers:function(p){g(p)},decodeVertexBuffer:function(p,x,v,y,A){c(r.exports.meshopt_decodeVertexBuffer,p,x,v,y,r.exports[l[A]])},decodeIndexBuffer:function(p,x,v,y){c(r.exports.meshopt_decodeIndexBuffer,p,x,v,y)},decodeIndexSequence:function(p,x,v,y){c(r.exports.meshopt_decodeIndexSequence,p,x,v,y)},decodeGltfBuffer:function(p,x,v,y,A,T){c(r.exports[h[A]],p,x,v,y,r.exports[l[T]])},decodeGltfBufferAsync:function(p,x,v,y,A){return d.length>0?b(p,x,v,h[y],l[A]):a.then(function(){var T=new Uint8Array(p*x);return c(r.exports[h[y]],T,p,x,v,r.exports[l[A]]),T})}}}();class KM extends Lu{constructor(){super();const e=new $i;e.deleteAttribute("uv");const t=new Tr({side:Qt}),n=new Tr,i=new Vu(16777215,900,28,2);i.position.set(.418,16.199,.3),this.add(i);const r=new st(e,t);r.position.set(-.757,13.219,.717),r.scale.set(31.713,28.305,28.591),this.add(r);const a=new st(e,n);a.position.set(-10.906,2.009,1.846),a.rotation.set(0,-.195,0),a.scale.set(2.328,7.905,4.651),this.add(a);const o=new st(e,n);o.position.set(-5.607,-.754,-.758),o.rotation.set(0,.994,0),o.scale.set(1.97,1.534,3.955),this.add(o);const c=new st(e,n);c.position.set(6.167,.857,7.803),c.rotation.set(0,.561,0),c.scale.set(3.927,6.285,3.687),this.add(c);const l=new st(e,n);l.position.set(-2.017,.018,6.124),l.rotation.set(0,.333,0),l.scale.set(2.002,4.566,2.064),this.add(l);const h=new st(e,n);h.position.set(2.291,-.756,-2.621),h.rotation.set(0,-.286,0),h.scale.set(1.546,1.552,1.496),this.add(h);const d=new st(e,n);d.position.set(-2.193,-.369,-5.547),d.rotation.set(0,.516,0),d.scale.set(3.875,3.487,2.986),this.add(d);const u=new st(e,_s(50));u.position.set(-16.116,14.37,8.208),u.scale.set(.1,2.428,2.739),this.add(u);const f=new st(e,_s(50));f.position.set(-16.109,18.021,-8.207),f.scale.set(.1,2.425,2.751),this.add(f);const g=new st(e,_s(17));g.position.set(14.904,12.198,-1.832),g.scale.set(.15,4.265,6.331),this.add(g);const b=new st(e,_s(43));b.position.set(-.462,8.89,14.52),b.scale.set(4.38,5.441,.088),this.add(b);const m=new st(e,_s(20));m.position.set(3.235,11.486,-12.541),m.scale.set(2.5,2,.1),this.add(m);const p=new st(e,_s(100));p.position.set(0,20,0),p.scale.set(1,.1,1),this.add(p)}dispose(){const e=new Set;this.traverse(t=>{t.isMesh&&(e.add(t.geometry),e.add(t.material))});for(const t of e)t.dispose()}}function _s(s){const e=new yn;return e.color.setScalar(s),e}class $M{constructor(e,t,n,i){this.scene=e,this.camera=t,this.renderer=n,this.items=i,this.mode="hidden",this.active=null,this.reduceMotion=!1,this.anchor=new Nt,this.stage=new Nt,this.spin=new Nt,this.inspectHolder=new Nt,this.lights=new Nt,this.models=new Map,this.loading=new Map,this.envMap=null,this.appear=0,this.targetAppear=0,this.frozenAt=0,this.rotX=0,this.rotY=0,this.velY=0,this.velX=0,this.zoom=1,this.lastTouch=0,this.pointers=new Map,this.pinchDist=0,this.pinchAngle=0,this.tapStart={t:0,x:0,y:0},this.lastTap=0,this.envIntensity=1,this.anchor.matrixAutoUpdate=!1,this.anchor.add(this.stage),this.stage.add(this.spin),this.anchor.visible=!1,t.add(this.anchor),this.inspectHolder.position.set(0,.035,-.45),t.add(this.inspectHolder);const r=new uv(16774890,7035466,1.1),a=new Wu(16777215,1.6);a.position.set(.6,1,.8),this.lights.add(r,a),t.add(this.lights)}ensureEnv(){if(this.envMap)return this.envMap;const e=new Xc(this.renderer);return this.envMap=e.fromScene(new KM,.04).texture,e.dispose(),this.envMap}preload(){for(const e of this.items)this.load(e)}load(e){const t=this.loading.get(e.id);if(t)return t;const n=new fM;n.setMeshoptDecoder(YM);const i=new URL(e.model,document.baseURI).href,r=this.ensureEnv(),a=n.loadAsync(i).then(o=>{const c=o.scene,l=new Vn().setFromObject(c),h=l.getSize(new R),d=l.getCenter(new R),u=1/Math.max(h.x,h.y,h.z),f=new Nt;return c.position.sub(d),f.add(c),f.scale.setScalar(u),c.traverse(g=>{const b=g.material;b&&"envMap"in b&&(b.envMap=r,b.envMapIntensity=.9,b.needsUpdate=!0),g.renderOrder=4}),this.models.set(e.id,f),f}).catch(o=>(console.warn("[artifact] không tải được model",e.model,o),null));return this.loading.set(e.id,a),a}async show(e){const t=this.items.find(i=>i.targetIndex===e);if(!t||this.mode==="inspect")return;const n=await this.load(t);n&&(this.active?.id!==t.id&&(this.spin.clear(),this.spin.add(n),this.resetView(),this.appear=0,this.active=t),this.anchor.parent!==this.camera&&this.camera.add(this.anchor),this.stage.position.set(...t.offset),this.stage.rotation.set(.32,0,0),this.stage.scale.setScalar(t.size),this.anchor.visible=!0,this.targetAppear=1,this.setMode("anchored"))}lose(e,t){this.mode==="anchored"&&(this.anchor.matrix.multiplyMatrices(e,t),this.scene.add(this.anchor),this.frozenAt=performance.now(),this.setMode("frozen"))}inspect(){if(!this.active)return;this.inspectHolder.add(this.spin),this.spin.position.set(0,0,0);const e=this.camera,t=2*Math.tan(De.degToRad(e.fov/2))*.45*e.aspect;this.inspectHolder.scale.setScalar(Math.min(.2,t*.6)),this.inspectHolder.rotation.set(.25,0,0),this.anchor.visible=!1,this.appear=Math.min(this.appear,.3),this.targetAppear=1,this.setMode("inspect")}close(){this.stage.add(this.spin),this.targetAppear=0,this.setMode("hidden")}resetView(){this.rotX=0,this.rotY=0,this.velX=this.velY=0,this.zoom=1}get visible(){return this.mode!=="hidden"}setMode(e){e!==this.mode&&(this.mode=e,this.onChange?.(e==="hidden"?null:this.active,e))}setLight(e){this.envIntensity=De.lerp(.55,1.1,De.clamp(e/.5,0,1))}attachGestures(e,t){e.addEventListener("pointerdown",i=>{!t()||!this.visible||(this.pointers.set(i.pointerId,{x:i.clientX,y:i.clientY}),e.setPointerCapture?.(i.pointerId),this.pointers.size===1&&(this.tapStart={t:performance.now(),x:i.clientX,y:i.clientY}),this.pointers.size===2&&this.pinchInit(),this.velX=this.velY=0)}),e.addEventListener("pointermove",i=>{const r=this.pointers.get(i.pointerId);if(!r)return;const a=i.clientX-r.x,o=i.clientY-r.y;if(r.x=i.clientX,r.y=i.clientY,this.lastTouch=performance.now(),this.pointers.size===1)this.rotY+=a*.011,this.rotX=De.clamp(this.rotX+o*.011,-1.2,1.2),this.velY=a*.011*60,this.velX=o*.011*60;else if(this.pointers.size===2){const[c,l]=[...this.pointers.values()],h=Math.hypot(c.x-l.x,c.y-l.y),d=Math.atan2(l.y-c.y,l.x-c.x);this.pinchDist>0&&(this.zoom=De.clamp(this.zoom*(h/this.pinchDist),.5,3));let u=d-this.pinchAngle;u>Math.PI&&(u-=Math.PI*2),u<-Math.PI&&(u+=Math.PI*2),this.rotY-=u,this.pinchDist=h,this.pinchAngle=d}});const n=i=>{if(!this.pointers.has(i.pointerId))return;this.pointers.delete(i.pointerId),this.pointers.size===1&&this.pinchInit();const r=performance.now(),a=Math.hypot(i.clientX-this.tapStart.x,i.clientY-this.tapStart.y);this.pointers.size===0&&r-this.tapStart.t<250&&a<10&&(r-this.lastTap<320?(this.resetView(),this.lastTap=0):this.lastTap=r)};e.addEventListener("pointerup",n),e.addEventListener("pointercancel",n)}pinchInit(){const e=[...this.pointers.values()];if(e.length<2){this.pinchDist=0;return}this.pinchDist=Math.hypot(e[0].x-e[1].x,e[0].y-e[1].y),this.pinchAngle=Math.atan2(e[1].y-e[0].y,e[1].x-e[0].x)}update(e,t){this.mode==="anchored"&&t&&this.anchor.matrix.copy(t),this.mode==="frozen"&&performance.now()-this.frozenAt>2500&&(this.targetAppear=0,this.appear<.02&&(this.camera.add(this.anchor),this.anchor.visible=!1,this.setMode("hidden")));const n=this.reduceMotion?12:5;if(this.appear+=(this.targetAppear-this.appear)*Math.min(1,e*n),this.mode==="hidden"&&this.appear<.02){this.anchor.visible=!1,this.spin.visible=!1;return}if(this.spin.visible=!0,!(this.pointers.size>0)){this.rotY+=this.velY*e,this.rotX=De.clamp(this.rotX+this.velX*e,-1.2,1.2);const a=Math.exp(-e*3.5);this.velY*=a,this.velX*=a,!this.reduceMotion&&performance.now()-this.lastTouch>3e3&&Math.abs(this.velY)<.05&&(this.rotY+=e*.3)}const r=QM(De.clamp(this.appear,0,1));this.spin.rotation.set(this.rotX,this.rotY,0,"XYZ"),this.spin.scale.setScalar(Math.max(.001,r*this.zoom)),this.spin.position.y=this.mode==="inspect"?0:(1-this.appear)*-.25;for(const a of this.models.values())a.traverse(o=>{const c=o.material;c&&"envMapIntensity"in c&&(c.envMapIntensity=this.envIntensity)})}}function QM(s){return 1+2.4*Math.pow(s-1,3)+1.4*Math.pow(s-1,2)}class JM{constructor(e,t,n){this.root=e,this.s=t,this.h=n,this.artState={item:null,mode:"hidden"},this.artHandlers=null,this.handState="off",this.dropdown=null,this.speaking=!1,this.canFlip=!1,this.selfie=!1,this.xrActive=!1,this.guide={phase:"idle",floorNow:1,floorTo:1,remaining:0,accuracy:NaN,routeState:"none"},this.guideShown="",this.onMenuKey=i=>{i.key==="Escape"&&(this.closeMenu(),this.menuBtn.focus())},this.el=Hn("div","hud"),this.el.innerHTML=`
      <div class="hud__top">
        <div class="chip chip--hand" aria-live="polite">${gn.hand}<span></span></div>
        <div class="hud__right">
          <button class="round round--top" type="button" data-menu aria-haspopup="menu" aria-expanded="false">${gn.gear}</button>
          <button class="round round--top" type="button" data-mode></button>
        </div>
      </div>
      <div class="wayfind" hidden></div>
      <div class="artcard" hidden></div>
      <div class="hud__bottom">
        <button class="round round--left" type="button" data-ask>${gn.chat}</button>
        <button class="shutter" type="button" data-shot></button>
        <button class="round round--right" type="button" data-flip hidden>${gn.flip}</button>
      </div>`,this.handChip=this.el.querySelector(".chip--hand"),this.modeBtn=this.el.querySelector("[data-mode]"),this.menuBtn=this.el.querySelector("[data-menu]"),this.flipBtn=this.el.querySelector("[data-flip]"),this.way=this.el.querySelector(".wayfind"),this.art=this.el.querySelector(".artcard"),this.el.querySelector("[data-shot]").addEventListener("click",()=>n.capture()),this.modeBtn.addEventListener("click",()=>n.setMode(this.s.mode==="indoor"?"outdoor":"indoor")),this.menuBtn.addEventListener("click",()=>this.dropdown?this.closeMenu():this.openMenu()),this.flipBtn.addEventListener("click",()=>this.h.flipCamera?.()),this.el.querySelector("[data-ask]").addEventListener("click",()=>this.h.ask?.()),e.appendChild(this.el),Rl(()=>this.refresh()),this.refresh()}update(e){this.s=e,this.refresh()}setHand(e){e!==this.handState&&(this.handState=e,this.refreshHand())}setArtifact(e,t){this.artState={item:e,mode:t},this.refreshArt()}setSpeaking(e){e!==this.speaking&&(this.speaking=e,this.refreshArt())}setCamera(e,t){this.canFlip=e,this.selfie=t,this.refresh()}refreshArt(){const{item:e,mode:t}=this.artState,n=!!e&&t!=="hidden";if(this.art.hidden=!n,this.el.classList.toggle("has-art",n),!n||!e)return;const i=Yt()==="vi",r=i?e.titleVi:e.titleEn,a=i?e.titleEn:e.titleVi,o=i?e.descVi:e.descEn,c=t==="inspect",l=t==="info";this.art.classList.toggle("artcard--info",l),this.art.innerHTML=`
      <strong>${r}</strong>
      <span class="en">${a}</span>
      ${o?`<p>${o}</p>`:""}
      ${l?"":`<span class="hint">${V("artHint")}</span>`}
      <div class="row">
        ${l?`<button class="round round--sm" type="button" data-a="speak" aria-pressed="${this.speaking}" aria-label="${this.speaking?V("readStop"):V("readAloud")}" title="${this.speaking?V("readStop"):V("readAloud")}">${gn.speaker}</button>`:""}
        <button class="btn btn--ghost" type="button" data-a="ask">${V("askMore")}</button>
        ${l?`<button class="btn" type="button" data-a="close">${V("artClose")}</button>`:c?`<button class="btn btn--ghost" type="button" data-a="reset">${V("artReset")}</button>
             <button class="btn" type="button" data-a="close">${V("artClose")}</button>`:`<button class="btn" type="button" data-a="inspect">${V("artInspect")}</button>`}
      </div>`,this.art.querySelectorAll("[data-a]").forEach(h=>h.addEventListener("click",()=>{const d=h.dataset.a;this.artHandlers?.[d]()}))}refreshHand(){const e=this.handChip.querySelector("span"),t=this.handState;this.handChip.classList.toggle("show",t!=="off"&&this.s.mode==="indoor"),this.handChip.classList.toggle("hold",t==="hold"),e.textContent=t==="hold"?V("handHolding"):t==="loading"?V("handLoading"):t==="seen"?V("handSeen"):""}setGuide(e){if(this.guide={...e},this.s.mode==="indoor")return;this.guideKey()!==this.guideShown&&this.refreshWay()}guideKey(){const e=this.guide;return`${Yt()}|${this.s.mode}|${e.phase}|${this.guideText()}`}guideText(){const e=this.guide,t=Yt()==="vi",n=t?$t.shortVi:$t.shortEn,i=Number.isFinite(e.accuracy)&&e.accuracy>20?` · ${V("guideGps")(Math.round(e.accuracy))}`:"";if(e.phase==="locating")return V("guideLocating")+(Number.isFinite(e.accuracy)?` · ${V("guideGps")(Math.round(e.accuracy))}`:"");if(e.phase==="floor")return e.floorTo<e.floorNow?V("guideGoDown")(e.floorTo):V("guideGoUp")(e.floorTo);if(e.phase==="arrived")return V("guideArrived")(n);if(e.routeState==="loading")return`${n} · ${V("guideRouting")}…`;const r=e.routeState==="failed"?` · ${V("guideBeeline")}`:"",a=e.remaining,o=a>=1e3?`${(a/1e3).toFixed(1).replace(".",t?",":".")} km`:`${a>=100?Math.round(a/10)*10:Math.round(a)} m`;return V("guideLeft")(n,o)+r+i}refreshGuide(){const e=this.guide;this.way.hidden=e.phase==="idle",this.guideShown=this.guideKey();const t=this.s.mode==="outdoor",n=e.phase==="floor"?`<button class="btn" type="button" data-gfloor>${V("guideFloorDone")(e.floorTo)}</button>`:t?`<button class="btn" type="button" data-in aria-label="${V("arrived")}" title="${V("arrived")}">${V("arrivedShort")}</button>`:`<button class="btn btn--ghost" type="button" data-gchange>${V("guideChange")}</button>`;this.way.innerHTML=`
      <span class="wayfind__text" aria-live="polite">${this.guideText()}</span>
      ${n}
      ${t?"":`<button class="wayfind__x" type="button" data-gexit aria-label="${V("guideExit")}" title="${V("guideExit")}">×</button>`}`,this.way.querySelector("[data-in]")?.addEventListener("click",()=>this.h.arrived()),this.way.querySelector("[data-gchange]")?.addEventListener("click",()=>this.h.guideOpen?.()),this.way.querySelector("[data-gfloor]")?.addEventListener("click",()=>this.h.guideFloorDone?.()),this.way.querySelector("[data-gexit]")?.addEventListener("click",()=>this.h.guideExit?.())}openGuideSetup(e,t){const n=(r,a,o)=>`<label class="opt"><span>${r}</span><input type="number" inputmode="numeric" data-g="${a}" value="${o}" min="-5" max="100" step="1" style="width:5.5em;font:inherit;padding:6px 8px;text-align:right"/></label>`,i=Yt()==="vi";Qo(this.root,`<h2>${V("guideTitle")}</h2><p class="en">${Ri("guideTitle")}</p>
       <p>${i?$t.nameVi:$t.nameEn}</p><p class="fine">${V("guideHint")}</p>
       ${n(V("guideFloorNow"),"floorNow",e.floorNow)}
       ${n(V("guideFloorTo"),"floorTo",e.floorTo)}
       <p class="fine" data-gerr hidden>${V("guideBadInput")}</p>
       <div class="actions"><button class="btn" type="button" data-ok>${V("guideGo")}</button><button class="link" type="button" data-x>${V("close")}</button></div>`,(r,a)=>{const o=c=>parseFloat(r.querySelector(`[data-g="${c}"]`).value);r.querySelector("[data-ok]").addEventListener("click",()=>{const c={floorNow:o("floorNow"),floorTo:o("floorTo")};if(!Number.isInteger(c.floorNow)||!Number.isInteger(c.floorTo)){r.querySelector("[data-gerr]").hidden=!1;return}a(),t(c)}),r.querySelector("[data-x]").addEventListener("click",a)})}refreshWay(){this.way.classList.toggle("wayfind--compact",this.s.mode!=="indoor"),this.s.mode==="indoor"?this.way.hidden=!0:this.refreshGuide()}refresh(){const e=this.s.mode==="indoor",t=this.el.querySelector("[data-ask]");t.setAttribute("aria-label",V("askChip")),t.title=V("askChip");const n=V(e?"modeOutdoor":"modeIndoor");this.modeBtn.innerHTML=e?gn.pin:gn.door,this.modeBtn.setAttribute("aria-label",V("modeSwitchTo")(n)),this.modeBtn.title=V("modeSwitchTo")(n),this.el.querySelector("[data-shot]").setAttribute("aria-label",V("capture")),this.menuBtn.setAttribute("aria-label",V("menu")),this.menuBtn.title=V("menu"),this.flipBtn.hidden=!this.canFlip||this.xrActive,this.flipBtn.setAttribute("aria-label",V("flipCamera")),this.flipBtn.title=V("flipCamera"),this.flipBtn.setAttribute("aria-pressed",String(this.selfie)),this.refreshHand(),this.refreshWay(),this.refreshArt()}openMenu(){this.closeMenu();const e=Hn("div","dropdown-scrim"),t=Hn("div","dropdown");t.setAttribute("role","menu"),t.setAttribute("aria-label",V("menu")),t.innerHTML=`
      <button class="dropdown__item" type="button" role="menuitem" data-lang lang="${Yt()==="vi"?"en":"vi"}">${gn.globe}<span>${V("language")}</span></button>
      <button class="dropdown__item" type="button" role="menuitem" data-tut>${gn.play}<span>${V("tutorial")}</span></button>
      <button class="dropdown__item" type="button" role="menuitem" data-help>${gn.help}<span>${V("help")}</span></button>`,e.addEventListener("click",()=>this.closeMenu()),t.querySelector("[data-lang]").addEventListener("click",()=>{this.closeMenu(),af(Yt()==="vi"?"en":"vi")}),t.querySelector("[data-tut]").addEventListener("click",()=>{this.closeMenu(),this.h.tutorial()}),t.querySelector("[data-help]").addEventListener("click",()=>{this.closeMenu(),this.openHelp()}),this.root.append(e,t),this.dropdown={menu:t,scrim:e},this.menuBtn.setAttribute("aria-expanded","true"),document.addEventListener("keydown",this.onMenuKey),t.querySelector(".dropdown__item")?.focus({preventScroll:!0})}closeMenu(){this.dropdown&&(this.dropdown.menu.remove(),this.dropdown.scrim.remove(),this.dropdown=null,this.menuBtn.setAttribute("aria-expanded","false"),document.removeEventListener("keydown",this.onMenuKey))}openHelp(){Qo(this.root,`<h2>${V("help")}</h2><p class="en">${Ri("help")}</p><p>${V("helpBody")}</p><p class="fine">${V("privacy")}</p>
       <div class="actions"><button class="btn btn--ghost" type="button" data-x>${V("close")}</button></div>`,(e,t)=>e.querySelector("[data-x]").addEventListener("click",t))}showPhoto(e,t){const n=!!(navigator.canShare&&navigator.canShare({files:[new File([t],"don-gio-xuan.jpg",{type:"image/jpeg"})]}));Qo(this.root,`<h2>${V("photoReady")}</h2><p class="en">${Ri("photoReady")}</p>
       <img class="photo" src="${e}" alt="${V("photoReady")}" />
       <div class="actions">
         ${n?`<button class="btn" type="button" data-share>${V("sharePhoto")}</button>`:""}
         <a class="btn ${n?"btn--ghost":""}" href="${e}" download="don-gio-xuan.jpg" style="text-decoration:none">${V("savePhoto")}</a>
         <button class="link" type="button" data-x>${V("close")}</button>
       </div>`,(i,r)=>{i.querySelector("[data-x]").addEventListener("click",()=>{r(),URL.revokeObjectURL(e)}),i.querySelector("[data-share]")?.addEventListener("click",()=>{navigator.share({files:[new File([t],"don-gio-xuan.jpg",{type:"image/jpeg"})],title:"Đón Gió Xuân"}).catch(()=>{})})})}}function ZM(s,e,t=!1){return new Promise(n=>{const i=s.getContext("2d"),r=Math.min(2,devicePixelRatio||1);s.width=innerWidth*r,s.height=innerHeight*r,i.scale(r,r);const{canvas:a}=Tl(),o=innerWidth,c=innerHeight,l=o/2,h=c/2,d=Math.hypot(o,c)*.6,u=t?0:140,f=Array.from({length:u},(x,v)=>({a:Math.random()*Math.PI*2,r0:d*(.7+Math.random()*.5),s:18+Math.random()*26,cell:v%9===0?7:v%6===0?4:v%4,spin:(Math.random()-.5)*8,delay:Math.random()*.25})),g=t?500:1500,b=performance.now();let m=!1;const p=x=>{const v=Math.min(1,(x-b)/g);i.clearRect(0,0,o,c);const y=Math.sin(Math.PI*v);i.fillStyle=`rgba(252,250,240,${(t?1:.85)*y})`,i.fillRect(0,0,o,c);for(const A of f){const T=Math.min(1,Math.max(0,(v-A.delay)/(1-A.delay))),S=T<.5?2*T*T:1-Math.pow(-2*T+2,2)/2,P=A.r0*(1-Math.sin(S*Math.PI)*.85),F=A.a+S*Math.PI*2.4,_=l+Math.cos(F)*P,w=h+Math.sin(F)*P,U=Px(A.cell);i.save(),i.globalAlpha=Math.sin(Math.PI*T),i.translate(_,w),i.rotate(F+A.spin*S),i.drawImage(a,U.sx,U.sy,U.s,U.s,-A.s/2,-A.s/2,A.s,A.s),i.restore()}!m&&v>=.5&&(m=!0,e()),v<1?requestAnimationFrame(p):(i.clearRect(0,0,o,c),n())};requestAnimationFrame(p)})}let ur=null;function uf(){try{ur??(ur=new(window.AudioContext||window.webkitAudioContext));const s=ur.currentTime;for(const[e,t]of[[1318.5,0],[1760,.07]]){const n=ur.createOscillator(),i=ur.createGain();n.type="sine",n.frequency.value=e,i.gain.setValueAtTime(0,s+t),i.gain.linearRampToValueAtTime(.035,s+t+.01),i.gain.exponentialRampToValueAtTime(1e-4,s+t+.6),n.connect(i).connect(ur.destination),n.start(s+t),n.stop(s+t+.65)}}catch{}}const Ws=s=>document.getElementById(s),tt=Ws("ui"),eS=Ws("fx"),Il=new URLSearchParams(location.search),ff=Il.has("debug"),ct=new Tv(Ws("cam")),Ot=new Pv,Oe=new Lv(Ws("gl")),ci=new Nt;Oe.scene.add(ci);const Mt=new Ox(ci),Ya=new zx(Oe.camera),ze=new Uy(Oe.scene),Gn=new ky($t.lat,$t.lng);Gn.onFix=s=>ze.gpsFix(s);ze.onNeedRoute=(s,e)=>{const t=ef(s,e,$t.lat,$t.lng),n=ze.routeState==="loading";zy(t,$t).then(i=>{Ce.mode!=="indoor"&&(ze.setRoute(i?.points??null),!i&&n&&gt(tt,nf()?V("guideRouteFail"):V("guideNoKey"),6e3,!0))})};Gn.onError=s=>{Ce.mode!=="indoor"&&gt(tt,V(s==="denied"?"guideGpsDenied":s==="insecure"?"errInsecure":"guideGpsNone"),7e3,!0)};const xt=new Ex,pf=new Qc(ci),Ei=new Gv,kn=new Dv,Gt=new Qv(Oe.gl,ci,Oe.scene),tS=new Ax,Bn=new ox,Bd=new Float32Array(_e*Ze),Xi=new ux(180),nS=2.8,hi=new _x,Nn=new vx;let zd=0;Nn.onResult=(s,e)=>{hi.integrate(s,e.proj,e.projInv,e.q);const t=performance.now(),n=Math.min(2,(t-zd)/1e3);zd=t;const i=e.pos;Xi.recenter(i.x,i.z),Xi.observe(hi.floorMask,e.projInv,e.q,i,n),Os&&xf(Os)};const tl=new R;Mt.petals.room={ceilingY:nS,isInside:(s,e)=>Xi.isInside(tl.x,tl.z,s,e)};function iS(){Xi.reset(),hi.reset(),Nn.invalidate()}Mt.petals.sources.push(xt);const Ka=lf.items,sS=Ka.filter(s=>(s.kind??"model")==="model"),nn=new uM(ct,Ka.map(s=>({targetIndex:s.targetIndex,physicalWidth:s.physicalWidth,poseless:s.kind==="info"||s.kind==="enter"})),lf.targets,yt.camera.longEdgeFovDeg),Tt=new $M(Oe.scene,Oe.camera,Oe.gl,sS);let Yi=null,Rr=!1;function Dl(){Yi=null,mt?.setArtifact(null,"hidden"),Xa(),Rr&&(Rr=!1,Ul.change({reading:!1}))}let $a=!1;function rS(){$a=!1,mt?.setSpeaking(!1),Rr&&(Rr=!1,Ce.reading=!1,Ki())}function mf(){const s=Fl();if(!s)return;const e=Yt(),t=cf(Ky(s,e),e,rS);if(t==="unsupported"){gt(tt,V("readNoTts"),5e3,!0);return}t==="no-voice"&&gt(tt,V("readNoVoice"),6e3,!0),$a=!0,mt?.setSpeaking(!0),Ce.reading||(Rr=!0,Ce.reading=!0,Ki())}Rl(()=>{$a&&mf()});nn.onFound=s=>{const e=Ka.find(t=>t.targetIndex===s);if(e){if(e.kind==="enter"){Ce.mode!=="indoor"&&hS();return}if(Ce.mode==="indoor")if(e.kind==="info"){if(Tt.visible)return;Yi=e,mt?.setArtifact(e,"info"),navigator.vibrate&&navigator.vibrate(8)}else Yi&&Dl(),Tt.show(s)}};nn.onLost=()=>{Oe.camera.updateMatrixWorld(),Tt.lose(Oe.camera.matrixWorld,nn.matrix)};Tt.onChange=(s,e)=>{const t=e!=="hidden";Ot.dragBlocked=t,xt.paused=t,nn.paused=e==="inspect",Mt.petals.readingMode=Ce.reading||t,mt?.setArtifact(s,e),t&&navigator.vibrate&&navigator.vibrate(8)};Tt.attachGestures(Ws("gl"),()=>Ce.mode==="indoor");let Hd=!1;const aS=matchMedia("(prefers-reduced-motion: reduce)").matches,Ce={mode:"indoor",reading:!1,sound:!1,battery:!1,reduceMotion:aS,density:1,guide:Il.has("guide")};let mt=null,Nl=!1,un=!1;const Pa=Vy(tt,oS);"serviceWorker"in navigator&&(Pa.setStatus(V("offlineLoading")),navigator.serviceWorker.register("./sw.js").then(()=>navigator.serviceWorker.ready).then(()=>Pa.setStatus(V("offlineReady"))).catch(()=>Pa.setStatus("")));Gt.detect();let gf=null,bf=null;async function oS(){const s=await Wy(tt,Gt.supported,e=>{e.xr||(bf=Ot.requestPermission(),gf=ct.start())});s&&(Ce.mode=s.mode,Pa.leave(),mt=new JM(tt,Ce,Ul),mt.artHandlers={inspect:()=>Tt.inspect(),reset:()=>Tt.resetView(),ask:()=>{const e=Fl();e&&kl.open(V("askAbout")(Yt()==="vi"?e.titleVi:e.titleEn))},speak:()=>$a?Xa():mf(),close:()=>{if(Yi){Dl();return}Tt.close(),nn.current>=0&&setTimeout(()=>Tt.show(nn.current),350)}},Ki(),s.xr?await cS():await nl(),Nl=!0,Oe.gl.setAnimationLoop(bS),!qy()&&Ce.mode==="indoor"&&await of(tt),Gt.session||gt(tt,Ce.mode==="indoor"&&un?`${V("floorScan")} ${V("safety")}`:V("safety"),6500))}async function nl(){Bn.reset(),document.body.classList.remove("xr");try{await(gf??ct.start()),un=!0,ct.countCameras().then(e=>mt?.setCamera(e!==1,ct.selfie))}catch(e){const t=e;un=!1,document.body.classList.add("no-camera"),Ce.guide=!0,Ki(),gt(tt,V(t==="denied"?"errDenied":t==="insecure"?"errInsecure":"errNoCam"),7e3,!0)}const s=await(bf??Ot.requestPermission());Ot.enableDrag(Ws("gl")),s==="denied"?gt(tt,V("errSensorDenied"),6e3,!0):setTimeout(()=>{!Ot.hasOrientation&&un&&gt(tt,V("errNoSensor"),5e3,!0)},1500),Ci(Ce.mode,!1),un&&(mt?.setHand("loading"),xt.init().then(()=>{mt?.setHand(xt.active?"seen":"off"),xt.status==="error"&&gt(tt,V("errHand"),4e3,!0),il()}))}function il(){!un||Gt.session||(Tt.preload(),nn.start().then(()=>{nn.status==="ready"&&!Hd&&(Hd=!0,setTimeout(()=>gt(tt,V("artScan"),6e3),6e3))}))}async function cS(){document.body.classList.add("xr"),mt&&(mt.xrActive=!0),Ci("indoor",!1);const s={scanning:"xrScan",notFloor:"xrNotFloor",ready:"xrPlace"};Gt.onStatus=e=>{e!=="placed"&&gt(tt,V(s[e]),12e4,e==="notFloor")},Gt.onRejected=()=>gt(tt,V("xrNotFloor"),12e4,!0),Gt.onPlaced=()=>{Mt.petals.clear(),gt(tt,`${V("xrPlaced")}. ${V("safety")}`,5e3)},Gt.onFloorChanged=()=>{Mt.petals.clear(),gt(tt,V("xrFloorFixed"),5e3)},Gt.onEnd=()=>{mt&&(mt.xrActive=!1),Ki(),nl()};try{await Gt.start(tt),Ki()}catch{mt&&(mt.xrActive=!1),await nl()}}function Ci(s,e=!0){const t=()=>{Ce.mode=s,Mt.setVisible(s==="indoor"),Ya.setVisible(s==="outdoor"),ze.setVisible(s!=="indoor"),s==="indoor"?(ze.stop(),Gn.stop(),za.setVisible(!1),iS()):s==="outdoor"&&(ze.start({floorNow:1,floorTo:1}),Gn.start(),vf()),pf.mesh.visible=!1,s==="indoor"?(nn.paused=!1,xt.status==="ready"&&il(),Ei.setX(.6),Ot.recenter(0),Mt.petals.clear()):(nn.paused=!1,xt.status==="ready"&&il(),Tt.visible&&Tt.close(),Yi&&Dl()),mt?.update(Ce)};e&&s==="indoor"?ZM(eS,t,Ce.reduceMotion):t()}function Ki(){const s=Mt.petals;s.readingMode=Ce.reading||Tt.visible,Tt.reduceMotion=Ce.reduceMotion,s.density=Ce.density,s.reduceMotion=Ce.reduceMotion,document.body.classList.toggle("reduce-motion",Ce.reduceMotion),kn.setBatterySaver(Ce.battery||!!Gt.session),_f(),Mt.guide.visible=Ce.guide,mt?.update(Ce)}function _f(){const s=kn.settings;Oe.setPixelRatio(s.pixelRatio),Mt.petals.maxFalling=s.maxFalling,Mt.petals.maxResting=s.maxResting,xt.hz=s.handHz,ze.setSparkles(s.sparkles&&!Ce.battery)}kn.onChange=_f;const Ul={capture:fS,setMode:s=>{Ci(s,!0),gt(tt,V("modeNow")(V(s==="indoor"?"modeIndoor":"modeOutdoor")),1800)},flipCamera:lS,change(s){const e=s.reading!==void 0&&s.reading!==Ce.reading;Object.assign(Ce,s),Ki(),e&&gt(tt,Ce.reading?V("readingOn"):V("readingOff"),2400)},tutorial(){of(tt)},arrived(){Ci("indoor",!0)},guideOpen:dS,guideFloorDone(){ze.start({floorNow:ze.floorTo,floorTo:ze.floorTo})},guideExit(){Ci("indoor",!0)},ask:s=>kl.open(s)};let ic=!1;async function lS(){if(!(!un||Gt.session||ic)){ic=!0;try{await ct.flip()}catch{gt(tt,V("flipFail"),4e3,!0)}ic=!1,document.body.classList.toggle("selfie",ct.selfie),mt?.setCamera(!0,ct.selfie)}}function hS(){Ci("indoor",!0),gt(tt,V("enterWelcome"),4e3),navigator.vibrate&&navigator.vibrate([10,60,10])}function Fl(){return Yi||(Tt.visible?Tt.active:null)}const kl=new iM(tt,{items:Ka.filter(s=>s.kind!=="enter"),current:Fl,status:()=>Ce.mode!=="indoor"&&ze.hasFix?`Khách đang được dẫn đường tới ${$t.nameVi}, còn khoảng ${Math.round(ze.distanceLeft)} m.`:Ce.mode==="indoor"?"Khách đang ở trong hành lang trưng bày.":"Khách đang ở ngoài cổng di tích.",photo:()=>un?ct.captureJpeg():null,speak:()=>Ce.sound}),za=new oM(tt);let Gd=0;function dS(){mt?.openGuideSetup(ze.lastSetup,s=>{Ce.mode!=="guide"&&Ci("guide",!1),ze.hasFix||Gn.start(),ze.start(s),s.floorNow!==s.floorTo&&gt(tt,V("guideStairs"),4e3),vf()})}function vf(){setTimeout(()=>{Ce.mode!=="indoor"&&Gn.compass===null&&gt(tt,V("guideNoCompass"),7e3,!0)},4e3)}ze.onArrive=()=>{gt(tt,V("guideArrived")(Yt()==="vi"?$t.shortVi:$t.shortEn),5e3),Ce.sound&&uf()};tS.onFix=s=>{Ce.mode==="indoor"&&(Ei.fixAtPanel(s.panel),Ot.recenter(s.panel.side==="orange"?Math.PI/2:-Math.PI/2),gt(tt,`${V("fixed")} ${s.panel.id}`,2200))};const sc=new R;Ot.onStep=()=>{sc.set(0,0,-1).applyQuaternion(ct.selfie?Ot.quaternion:Oe.camera.quaternion),Ce.mode==="indoor"?Ei.onStep(sc):ze.step(sc)};xt.onChange=(s,e)=>{xt.status==="ready"&&mt?.setHand(s?e?"hold":"seen":"off")};Mt.petals.onGrab=()=>{Ce.sound&&uf()};class uS{constructor(){this.active=!0,this.t=0,this.c=new R,this.v=new R,this.q=new Qe,this.grabbing=!1,this.mesh=new st(new Ml(.045,16,12),new yn({color:688070,wireframe:!0,transparent:!0,opacity:.6}))}update(e,t){this.t+=e;const n=this.c.clone(),i=new R(Math.sin(this.t*.9)*.12,-.05+Math.cos(this.t*1.3)*.06,-.42);this.c.copy(i.applyMatrix4(t.matrixWorld)),this.v.subVectors(this.c,n).divideScalar(Math.max(e,.001)),this.q.copy(t.quaternion),this.grabbing=this.t%9>6,this.mesh.position.copy(this.c)}colliders(){return[{kind:"sphere",c:this.c,r:.045,vel:this.v,palm:!0}]}cup(){return{center:this.c,radius:.07,quaternion:this.q,grabbing:this.grabbing,vel:this.v}}}const xr=Il.get("demo")==="hand"?new uS:null;xr&&(Mt.petals.sources.push(xr),ci.add(xr.mesh));const vs=new Image;vs.src=new URL("./brand/title-cream.webp",document.baseURI).href;function fS(){const s=Math.min(2,devicePixelRatio||1),e=Math.round(innerWidth*s),t=Math.round(innerHeight*s),n=document.createElement("canvas");n.width=e,n.height=t;const i=n.getContext("2d");if(un&&ct.ready){const o=ct.layout();i.save(),ct.mirrored&&(i.translate(e,0),i.scale(-1,1)),i.drawImage(ct.video,-o.ox*s,-o.oy*s,o.vw*o.scale*s,o.vh*o.scale*s),i.restore()}else{const o=i.createLinearGradient(0,0,0,t);o.addColorStop(0,"#f3efe2"),o.addColorStop(1,"#cfc6b1"),i.fillStyle=o,i.fillRect(0,0,e,t)}Oe.render(),i.drawImage(Oe.gl.domElement,0,0,e,t);const r=i.createLinearGradient(0,t*.78,0,t);if(r.addColorStop(0,"rgba(0,58,110,0)"),r.addColorStop(1,"rgba(0,58,110,0.55)"),i.fillStyle=r,i.fillRect(0,t*.78,e,t*.22),vs.complete&&vs.naturalWidth){const o=Math.min(e*.42,420*s),c=o*vs.naturalHeight/vs.naturalWidth;i.drawImage(vs,20*s,t-c-22*s,o,c)}i.fillStyle="rgba(252,250,240,0.9)",i.font=`${14*s}px system-ui, -apple-system, 'Segoe UI', Roboto, Arial, sans-serif`,i.textAlign="right",i.fillText("Di tích Nhà tù Hỏa Lò · Xuân 2027",e-18*s,t-24*s);const a=document.createElement("div");a.className="flash",document.body.appendChild(a),setTimeout(()=>a.remove(),500),n.toBlob(o=>{!o||!mt||mt.showPhoto(URL.createObjectURL(o),o)},"image/jpeg",.9)}let Vd=performance.now(),Wd=0,rc=0,qd=!1,jd=0;const Xd=new we(1,1,1),fr=new R,ac=new R,Yd=new ve,Kd=new Qe,pS=new Qe().setFromAxisAngle(new R(0,1,0),Math.PI),$d=ff?document.body.appendChild(Object.assign(document.createElement("div"),{className:"debug"})):null,mS=100,gS=1.2;let oc=0,Qd=0;const Jd=new Qe,Os=ff?document.body.appendChild(Object.assign(document.createElement("canvas"),{width:_e,height:Ze})):null;Os&&(Os.style.cssText="position:fixed;left:8px;top:8px;width:72px;height:128px;z-index:60;opacity:.75;pointer-events:none;image-rendering:pixelated;background:#000");function xf(s){const e=s.getContext("2d");if(!e)return;const t=e.createImageData(_e,Ze);(hi.ready?hi.floorMask:Bn.mask).forEach((i,r)=>{t.data[r*4+1]=i*255,t.data[r*4+3]=255}),e.putImageData(t,0,0)}function bS(s,e){if(!Nl)return;const t=Math.min(.1,(s-Vd)/1e3);Vd=s;const n=!!Gt.session;let i=Oe.camera;n?(Gt.frame(e,s),i=Oe.gl.xr.getCamera()):(Ot.update(t),Ei.update(t),Oe.camera.quaternion.copy(Ot.quaternion),ct.selfie&&Oe.camera.quaternion.multiply(pS),Ce.mode==="indoor"?Oe.camera.position.copy(Ei.position):Oe.camera.position.set(ze.position.x,yt.user.eyeHeightDefault,ze.position.y),ct.ready&&Oe.setVFov(ct.displayVFov(yt.camera.longEdgeFovDeg)),Oe.camera.updateMatrixWorld()),ci.updateMatrixWorld(),fr.setFromMatrixPosition(i.matrixWorld),ci.worldToLocal(fr),ci.getWorldQuaternion(Kd).invert(),ac.set(0,0,-1).applyQuaternion(i.getWorldQuaternion(new Qe)).applyQuaternion(Kd);const r=Math.asin(De.clamp(ac.y,-1,1))*180/Math.PI;if(s-Wd>500&&un&&!n){Wd=s;const c=ct.sampleLight();if(c){const l=De.lerp(.62,1.04,De.smoothstep(c.lum,.05,.55)),h=Math.max(c.r,c.g,c.b,.001);Xd.setRGB(l*(.88+.12*(c.r/h)),l*(.88+.12*(c.g/h)),l*(.88+.12*(c.b/h))),Mt.petals.setLight(Xd),Tt.setLight(c.lum),rc=c.lum<.08?rc+.5:0,rc>4&&!qd&&Ce.mode==="indoor"&&(qd=!0,gt(tt,V("errLowLight"),5e3,!0))}}const a=!n&&un&&Ce.mode==="indoor",o=a&&ct.ready&&Ot.hasOrientation&&!Ot.stale&&!ct.mirrored&&!ct.selfie;if(a&&!o&&!ct.selfie&&(Bn.reset(),hi.reset()),o&&Nn.start(),o&&Nn.status==="ready"){const c=kn.batterySaver?1200:kn.level==="low"?700:300;if(!Nn.busy&&s-Qd>=c&&Ot.angularVel.length()<gS){const l=ct.sampleGrid(Yu,Ku);l&&(Qd=s,Nn.segment(l,Oe.camera))}}else if(o&&(s-oc>=mS||Jd.angleTo(Oe.camera.quaternion)>.08)){const c=ct.sampleGrid(_e,Ze);if(c){const l=Math.min(.5,(s-oc)/1e3);ax(Bd,Oe.camera.projectionMatrixInverse,Oe.camera.quaternion,Oe.camera.position.y),Bn.update(c,Bd,l);const h=Oe.camera.position;Xi.recenter(h.x,h.z),Bn.ready&&Xi.observe(Bn.mask,Oe.camera.projectionMatrixInverse,Oe.camera.quaternion,h,l),oc=s,Jd.copy(Oe.camera.quaternion),Os&&xf(Os)}}if(Ce.mode==="indoor"){const c=De.smoothstep(r,32,52),l=De.smoothstep(-r,25,50);tl.copy(fr),Mt.petals.lookUp=c,Mt.petals.lookDown=l,!n&&un&&(xt.update(s,ct,Oe.camera),nn.smooth(t),Tt.update(t,nn.poseReady?nn.matrix:null),pf.update(xt,fr),xt.active&&xt.palmVel.length()>1&&s-jd>120&&(jd=s,Mt.petals.wind.addGust(xt.palm,xt.palmVel.clone().multiplyScalar(.5),.45,.6))),xr&&xr.update(t,Oe.camera),Mt.petals.floorMask=a?hi.ready?hi:ct.selfie?null:Bn:null,(!n||Gt.placed)&&(Yd.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse).multiply(ci.matrixWorld),Mt.petals.update(t,Yd,fr,ac))}else{ze.pointScale=Oe.gl.getPixelRatio()*innerHeight*.02,ze.update(t,Oe.camera,Gn.compass===null||ct.selfie?null:{value:Gn.compass,at:Gn.compassAt}),Ce.mode==="outdoor"&&Ya.update(t,Ot.angularVel,Ce.reduceMotion);const c=ze.hasFix&&(ze.phase==="walk"||ze.phase==="locating"||ze.phase==="arrived");if(za.setVisible(c),c&&s-Gd>100){Gd=s;const l=h=>ef(h.e,h.n,$t.lat,$t.lng);za.update({me:l(ze.userEnu),heading:ze.north.ready?ze.heading(Ot.quaternion):0,route:ze.routeEnu?.map(l)??null,dest:$t,accuracy:ze.accuracy})}mt?.setGuide({phase:ze.phase,floorNow:ze.floorNow,floorTo:ze.floorTo,remaining:ze.distanceLeft,accuracy:ze.accuracy,routeState:ze.routeState})}if(kn.tick(t),Oe.render(),$d&&Math.floor(s/250)!==Math.floor((s-t*1e3)/250)){const c=Mt.petals.stats();$d.textContent=`fps ${kn.fps.toFixed(0)} · ${kn.batterySaver?"low*":kn.level}
rơi ${c.falling} · đọng ${c.resting} · giữ ${c.held}
x ${Ei.position.x.toFixed(2)} z ${Ei.position.z.toFixed(2)} · pitch ${r.toFixed(0)}°
AI ${Nn.status}${Nn.lastMs?` · ${Nn.lastMs.toFixed(0)} ms`:""}
tay ${xt.status}${xt.active?` · ${xt.depth.toFixed(2)} m${xt.grabbing?" · nắm":""}`:""}`}}addEventListener("resize",()=>{Bn.reset(),Oe.resize(),Ya.layoutFrame(Oe.camera)});document.addEventListener("visibilitychange",()=>{!Nl||Gt.session||(document.hidden?(Bn.reset(),ct.stop()):un&&ct.start().catch(()=>{}))});window.__dgx={indoor:Mt,outdoor:Ya,sensors:Ot,localizer:Ei,hand:xt,settings:Ce,setMode:Ci,quality:kn,R:Oe,floorVision:Bn,artTracker:nn,artViewer:Tt,guide:ze,handlers:Ul,geo:Gn,askPanel:kl,minimap:za,roomMap:Xi,surfaces:hi,segmenter:Nn};
