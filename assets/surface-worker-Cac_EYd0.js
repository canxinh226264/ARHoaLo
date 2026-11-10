(function(){"use strict";function Ni(n,e){return e.forEach(function(t){t&&typeof t!="string"&&!Array.isArray(t)&&Object.keys(t).forEach(function(r){if(r!=="default"&&!(r in n)){var a=Object.getOwnPropertyDescriptor(t,r);Object.defineProperty(n,r,a.get?a:{enumerable:!0,get:function(){return t[r]}})}})}),Object.freeze(n)}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Tm=1e-7,xm=1e-4;class $m{constructor(e,t){this.backend=e,this.dataMover=t,this.data=new WeakMap,this.dataIdsCount=0}get(e){return this.data.has(e)||this.dataMover.moveData(this.backend,e),this.data.get(e)}set(e,t){this.dataIdsCount++,this.data.set(e,t)}has(e){return this.data.has(e)}delete(e){return this.dataIdsCount--,this.data.delete(e)}numDataIds(){return this.dataIdsCount}}class Si{refCount(e){return Ge("refCount")}incRef(e){return Ge("incRef")}timerAvailable(){return!0}time(e){return Ge("time")}read(e){return Ge("read")}readSync(e){return Ge("readSync")}readToGPU(e,t){return Ge("readToGPU")}numDataIds(){return Ge("numDataIds")}disposeData(e,t){return Ge("disposeData")}write(e,t,r){return Ge("write")}move(e,t,r,a,s){return Ge("move")}createTensorFromGPUData(e,t,r){return Ge("createTensorFromGPUData")}memory(){return Ge("memory")}floatPrecision(){return Ge("floatPrecision")}epsilon(){return this.floatPrecision()===32?Tm:xm}dispose(){return Ge("dispose")}}function Ge(n){throw new Error(`'${n}' not yet implemented or not found in the registry. This kernel may not be supported by the tfjs backend you have chosen`)}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function w(n,e){if(!n)throw new Error(typeof e=="string"?e:e())}function Qe(n,e,t=""){w(St(n,e),()=>t+` Shapes ${n} and ${e} must match`)}function En(n){w(n!=null,()=>"The input to the tensor constructor must be a non-null value.")}function P(n){if(n.length===0)return 1;let e=n[0];for(let t=1;t<n.length;t++)e*=n[t];return e}function Em(n,e){if(n===e)return!0;if(n==null||e==null||n.length!==e.length)return!1;for(let t=0;t<n.length;t++)if(n[t]!==null&&e[t]!==null&&n[t]!==e[t])return!1;return!0}function St(n,e){if(n===e)return!0;if(n==null||e==null||n.length!==e.length)return!1;for(let t=0;t<n.length;t++)if(n[t]!==e[t])return!1;return!0}function tr(n){return n%1===0}function Mr(n,e){return e<=n.length?n:n+" ".repeat(e-n.length)}function Am(n,e){let t=1,r=-1;for(let s=0;s<n.length;++s)if(n[s]>=0)t*=n[s];else if(n[s]===-1){if(r!==-1)throw Error(`Shapes can only have 1 implicit size. Found -1 at dim ${r} and dim ${s}`);r=s}else if(n[s]<0)throw Error(`Shapes can not be < 0. Found ${n[s]} at dim ${s}`);if(r===-1){if(e>0&&e!==t)throw Error(`Size(${e}) must match the product of shape ${n}`);return n}if(t===0)throw Error(`Cannot infer the missing size in [${n}] when there are 0 elements`);if(e%t!==0)throw Error(`The implicit shape can't be a fractional number. Got ${e} / ${t}`);const a=n.slice();return a[r]=e/t,a}function wt(n,e){const t=e.length;return n=n==null?e.map((r,a)=>a):[].concat(n),w(n.every(r=>r>=-t&&r<t),()=>`All values in axis param must be in range [-${t}, ${t}) but got axis ${n}`),w(n.every(r=>tr(r)),()=>`All values in axis param must be integers but got axis ${n}`),n.map(r=>r<0?t+r:r)}function Dm(n,e){const t=[],r=[],a=e!=null&&Array.isArray(e)&&e.length===0,s=e==null||a?null:wt(e,n).sort();let i=0;for(let u=0;u<n.length;++u){if(s!=null){if(s[i]===u&&n[u]!==1)throw new Error(`Can't squeeze axis ${u} since its dim '${n[u]}' is not 1`);(s[i]==null||s[i]>u)&&n[u]===1&&(t.push(n[u]),r.push(u)),s[i]<=u&&i++}n[u]!==1&&(t.push(n[u]),r.push(u))}return{newShape:t,keptDims:r}}function Fm(n,e){return An(n,e)}function An(n,e){let t=null;if(n==null||n==="float32")t=new Float32Array(e);else if(n==="int32")t=new Int32Array(e);else if(n==="bool")t=new Uint8Array(e);else if(n==="string")t=new Array(e);else throw new Error(`Unknown data type ${n}`);return t}function Om(n,e){for(let t=0;t<n.length;t++){const r=n[t];if(isNaN(r)||!isFinite(r))throw Error(`A tensor of type ${e} being uploaded contains ${r}.`)}}function Cm(n){return n==="bool"||n==="complex64"||n==="float32"||n==="int32"||n==="string"}function nr(n){if(n==="float32"||n==="int32")return 4;if(n==="complex64")return 8;if(n==="bool")return 1;throw new Error(`Unknown dtype ${n}`)}function Rm(n){if(n==null)return 0;let e=0;return n.forEach(t=>e+=t.length),e}function Ls(n){return typeof n=="string"||n instanceof String}function Mm(n){return typeof n=="boolean"}function Bm(n){return typeof n=="number"}function rr(n){return Array.isArray(n)?rr(n[0]):n instanceof Float32Array?"float32":n instanceof Int32Array||n instanceof Uint8Array||n instanceof Uint8ClampedArray?"int32":Bm(n)?"float32":Ls(n)?"string":Mm(n)?"bool":"float32"}function zs(n){return!!(n&&n.constructor&&n.call&&n.apply)}function Ee(n){const e=n.length;if(e<2)return[];const t=new Array(e-1);t[e-2]=n[e-1];for(let r=e-3;r>=0;--r)t[r]=t[r+1]*n[r+1];return t}function ki(n,e,t,r=!1){const a=new Array;if(e.length===1){const s=e[0]*(r?2:1);for(let i=0;i<s;i++)a[i]=t[n+i]}else{const s=e[0],i=e.slice(1),u=i.reduce((c,l)=>c*l)*(r?2:1);for(let c=0;c<s;c++)a[c]=ki(n+c*u,i,t,r)}return a}function Ws(n,e,t=!1){if(n.length===0)return e[0];const r=n.reduce((a,s)=>a*s)*(t?2:1);if(r===0)return[];if(r!==e.length)throw new Error(`[${n}] does not match the input size ${e.length}${t?" for a complex tensor":""}.`);return ki(0,n,e,t)}function vi(n,e){const t=sr(n,e);for(let r=0;r<t.length;r++)t[r]=1;return t}function sr(n,e){if(e==null||e==="float32"||e==="complex64")return new Float32Array(n);if(e==="int32")return new Int32Array(n);if(e==="bool")return new Uint8Array(n);throw new Error(`Unknown data type ${e}`)}function et(n){n.forEach(e=>{w(Number.isInteger(e)&&e>=0,()=>`Tensor must have a shape comprised of positive integers but got shape [${n}].`)})}function tn(n){return n&&n.then&&typeof n.then=="function"}/**
 * @license
 * Copyright 2017 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Ti="tfjsflags";class Pm{constructor(e){this.global=e,this.flags={},this.flagRegistry={},this.urlFlags={},this.getQueryParams=Lm,this.populateURLFlags()}setPlatform(e,t){this.platform!=null&&(Z().getBool("IS_TEST")||Z().getBool("PROD")||console.warn(`Platform ${this.platformName} has already been set. Overwriting the platform with ${e}.`)),this.platformName=e,this.platform=t}registerFlag(e,t,r){if(this.flagRegistry[e]={evaluationFn:t,setHook:r},this.urlFlags[e]!=null){const a=this.urlFlags[e];Z().getBool("IS_TEST")||Z().getBool("PROD")||console.warn(`Setting feature override from URL ${e}: ${a}.`),this.set(e,a)}}async getAsync(e){return e in this.flags?this.flags[e]:(this.flags[e]=await this.evaluateFlag(e),this.flags[e])}get(e){if(e in this.flags)return this.flags[e];const t=this.evaluateFlag(e);if(tn(t))throw new Error(`Flag ${e} cannot be synchronously evaluated. Please use getAsync() instead.`);return this.flags[e]=t,this.flags[e]}getNumber(e){return this.get(e)}getBool(e){return this.get(e)}getString(e){return this.get(e)}getFlags(){return this.flags}get features(){return this.flags}set(e,t){if(this.flagRegistry[e]==null)throw new Error(`Cannot set flag ${e} as it has not been registered.`);this.flags[e]=t,this.flagRegistry[e].setHook!=null&&this.flagRegistry[e].setHook(t)}evaluateFlag(e){if(this.flagRegistry[e]==null)throw new Error(`Cannot evaluate flag '${e}': no evaluation function found.`);return this.flagRegistry[e].evaluationFn()}setFlags(e){this.flags=Object.assign({},e)}reset(){this.flags={},this.urlFlags={},this.populateURLFlags()}populateURLFlags(){if(typeof this.global>"u"||typeof this.global.location>"u"||typeof this.global.location.search>"u")return;const e=this.getQueryParams(this.global.location.search);Ti in e&&e[Ti].split(",").forEach(r=>{const[a,s]=r.split(":");this.urlFlags[a]=Wm(a,s)})}}function Lm(n){const e={};return n.replace(/[?&]([^=?&]+)(?:=([^&]*))?/g,(t,...r)=>(zm(e,r[0],r[1]),r.join("="))),e}function zm(n,e,t){n[decodeURIComponent(e)]=decodeURIComponent(t||"")}function Wm(n,e){const t=e.toLowerCase();return t==="true"||t==="false"?t==="true":`${+t}`===t?+t:e}function Z(){return xi}let xi=null;function Vm(n){xi=n}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */let Vs;function $i(){if(Vs==null){let n;if(typeof window<"u")n=window;else if(typeof global<"u")n=global;else if(typeof process<"u")n=process;else if(typeof self<"u")n=self;else throw new Error("Could not find a global object");Vs=n}return Vs}function Um(){const n=$i();return n._tfGlobals==null&&(n._tfGlobals=new Map),n._tfGlobals}function Us(n,e){const t=Um();if(t.has(n))return t.get(n);{const r=e();return t.set(n,r),t.get(n)}}const Ei="Abs",Ai="Acos",Di="Acosh",Hs="Add",js="AddN",Gs="All",qs="Any",Fi="ArgMax",Oi="ArgMin",Ci="Asin",Ri="Asinh",Mi="Atan",Bi="Atanh",Pi="Atan2",Ks="AvgPool",Hm="AvgPoolGrad",Li="AvgPool3D",jm="AvgPool3DGrad",Xs="BatchMatMul",zi="BatchToSpaceND",Js="Bincount",Wi="BitwiseAnd",Vi="BroadcastArgs",Ys="Cast",Ui="Ceil",Zs="ClipByValue",Gm="Complex",qm="ComplexAbs",Hi="Concat",Qs="Conv2D",Km="Conv2DBackpropFilter",ea="Conv2DBackpropInput",ta="Conv3D",ji="Conv3DBackpropFilterV2",na="Conv3DBackpropInputV2",Gi="Cos",qi="Cosh",ra="Cumprod",sa="Cumsum",aa="CropAndResize",Ki="DenseBincount",oa="DepthToSpace",ia="DepthwiseConv2dNative",Xm="DepthwiseConv2dNativeBackpropFilter",Jm="DepthwiseConv2dNativeBackpropInput",Xi="Diag",ua="Dilation2D",Ji="Dilation2DBackpropInput",Yi="Dilation2DBackpropFilter",Zi="RealDiv",Ym="Einsum",Qi="Elu",eu="EluGrad",tu="Erf",nu="Equal",ru="Exp",su="ExpandDims",au="Expm1",Zm="FFT",ou="Fill",ca="FlipLeftRight",iu="Floor",uu="FloorDiv",la="FusedBatchNorm",cu="GatherV2",pa="GatherNd",lu="Greater",pu="GreaterEqual",da="Identity",Qm="IFFT",eh="Imag",du="IsFinite",mu="IsInf",hu="IsNan",ma="LeakyRelu",fu="Less",gu="LessEqual",ha="LinSpace",yu="Log",bu="Log1p",wu="LogicalAnd",_u="LogicalNot",Iu="LogicalOr",th="LogicalXor",fa="LRN",Nu="LRNGrad",ga="Max",Su="Maximum",ya="MaxPool",nh="MaxPoolGrad",ku="MaxPool3D",rh="MaxPool3DGrad",vu="MaxPoolWithArgmax",ba="Mean",wa="Min",Tu="Minimum",_a="MirrorPad",xu="Mod",Ia="Multinomial",$u="Multiply",Eu="Neg",Au="NotEqual",Na="NonMaxSuppressionV3",Sa="NonMaxSuppressionV4",ka="NonMaxSuppressionV5",Du="OnesLike",va="OneHot",Fu="Pack",Ta="PadV2",Ou="Pow",xa="Prelu",$a="Prod",sh="RaggedGather",ah="RaggedRange",oh="RaggedTensorToTensor",Cu="Range",ih="Real",Ru="Reciprocal",Mu="Relu",Bu="Reshape",Ea="ResizeNearestNeighbor",Pu="ResizeNearestNeighborGrad",Aa="ResizeBilinear",Lu="ResizeBilinearGrad",zu="Relu6",Da="Reverse",Wu="Round",Vu="Rsqrt",Fa="ScatterNd",Oa="TensorScatterUpdate",Ca="SearchSorted",Uu="Select",Hu="Selu",ju="Slice",Gu="Sin",qu="Sinh",Ku="Sign",Xu="Sigmoid",Ju="Softplus",Yu="Sqrt",Ra="Sum",Zu="SpaceToBatchND",Qu="SplitV",Ma="Softmax",ec="SparseFillEmptyRows",Ba="SparseReshape",tc="SparseSegmentMean",nc="SparseSegmentSum",Pa="SparseToDense",rc="SquaredDifference",uh="Square",ch="StaticRegexReplace",La="StridedSlice",sc="StringNGrams",ac="StringSplit",oc="StringToHashBucketFast",ic="Sub",uc="Tan",cc="Tanh",Br="Tile",za="TopK",Wa="Transform",ar="Transpose",lc="Unique",pc="Unpack",lh="UnsortedSegmentSum",dc="ZerosLike",Va="Step",Ua="RotateWithOffset",Pr="_FusedMatMul",Lr="FusedConv2D",zr="FusedDepthwiseConv2D";/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Dn(...n){Z().getBool("IS_TEST")||Z().getBool("PROD")||console.warn(...n)}/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Wr=Us("kernelRegistry",()=>new Map),ph=Us("gradRegistry",()=>new Map);function mc(n,e){const t=gc(n,e);return Wr.get(t)}function hc(n){return ph.get(n)}function fc(n){const e=Wr.entries(),t=[];for(;;){const{done:r,value:a}=e.next();if(r)break;const[s,i]=a,[u]=s.split("_");u===n&&t.push(i)}return t}function dh(n){const{kernelName:e,backendName:t}=n,r=gc(e,t);Wr.has(r)&&Dn(`The kernel '${e}' for backend '${t}' is already registered`),Wr.set(r,n)}function gc(n,e){return`${e}_${n}`}/**
 * @license
 * Copyright 2023 Google LLC.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function yc(n){return n instanceof Float32Array||n instanceof Int32Array||n instanceof Uint8Array||n instanceof Uint8ClampedArray}var kt=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function Ha(n){return n&&n.__esModule&&Object.prototype.hasOwnProperty.call(n,"default")?n.default:n}function mh(n){if(n.__esModule)return n;var e=n.default;if(typeof e=="function"){var t=function r(){return this instanceof r?Reflect.construct(e,arguments,this.constructor):e.apply(this,arguments)};t.prototype=e.prototype}else t={};return Object.defineProperty(t,"__esModule",{value:!0}),Object.keys(n).forEach(function(r){var a=Object.getOwnPropertyDescriptor(n,r);Object.defineProperty(t,r,a.get?a:{enumerable:!0,get:function(){return n[r]}})}),t}var bc=he,at=null;try{at=new WebAssembly.Instance(new WebAssembly.Module(new Uint8Array([0,97,115,109,1,0,0,0,1,13,2,96,0,1,127,96,4,127,127,127,127,1,127,3,7,6,0,1,1,1,1,1,6,6,1,127,1,65,0,11,7,50,6,3,109,117,108,0,1,5,100,105,118,95,115,0,2,5,100,105,118,95,117,0,3,5,114,101,109,95,115,0,4,5,114,101,109,95,117,0,5,8,103,101,116,95,104,105,103,104,0,0,10,191,1,6,4,0,35,0,11,36,1,1,126,32,0,173,32,1,173,66,32,134,132,32,2,173,32,3,173,66,32,134,132,126,34,4,66,32,135,167,36,0,32,4,167,11,36,1,1,126,32,0,173,32,1,173,66,32,134,132,32,2,173,32,3,173,66,32,134,132,127,34,4,66,32,135,167,36,0,32,4,167,11,36,1,1,126,32,0,173,32,1,173,66,32,134,132,32,2,173,32,3,173,66,32,134,132,128,34,4,66,32,135,167,36,0,32,4,167,11,36,1,1,126,32,0,173,32,1,173,66,32,134,132,32,2,173,32,3,173,66,32,134,132,129,34,4,66,32,135,167,36,0,32,4,167,11,36,1,1,126,32,0,173,32,1,173,66,32,134,132,32,2,173,32,3,173,66,32,134,132,130,34,4,66,32,135,167,36,0,32,4,167,11])),{}).exports}catch{}function he(n,e,t){this.low=n|0,this.high=e|0,this.unsigned=!!t}he.prototype.__isLong__,Object.defineProperty(he.prototype,"__isLong__",{value:!0});function qe(n){return(n&&n.__isLong__)===!0}he.isLong=qe;var wc={},_c={};function nn(n,e){var t,r,a;return e?(n>>>=0,(a=0<=n&&n<256)&&(r=_c[n],r)?r:(t=fe(n,(n|0)<0?-1:0,!0),a&&(_c[n]=t),t)):(n|=0,(a=-128<=n&&n<128)&&(r=wc[n],r)?r:(t=fe(n,n<0?-1:0,!1),a&&(wc[n]=t),t))}he.fromInt=nn;function ot(n,e){if(isNaN(n))return e?rn:it;if(e){if(n<0)return rn;if(n>=Nc)return xc}else{if(n<=-Sc)return Ke;if(n+1>=Sc)return Tc}return n<0?ot(-n,e).neg():fe(n%Fn|0,n/Fn|0,e)}he.fromNumber=ot;function fe(n,e,t){return new he(n,e,t)}he.fromBits=fe;var Vr=Math.pow;function ja(n,e,t){if(n.length===0)throw Error("empty string");if(n==="NaN"||n==="Infinity"||n==="+Infinity"||n==="-Infinity")return it;if(typeof e=="number"?(t=e,e=!1):e=!!e,t=t||10,t<2||36<t)throw RangeError("radix");var r;if((r=n.indexOf("-"))>0)throw Error("interior hyphen");if(r===0)return ja(n.substring(1),e,t).neg();for(var a=ot(Vr(t,8)),s=it,i=0;i<n.length;i+=8){var u=Math.min(8,n.length-i),c=parseInt(n.substring(i,i+u),t);if(u<8){var l=ot(Vr(t,u));s=s.mul(l).add(ot(c))}else s=s.mul(a),s=s.add(ot(c))}return s.unsigned=e,s}he.fromString=ja;function pt(n,e){return typeof n=="number"?ot(n,e):typeof n=="string"?ja(n,e):fe(n.low,n.high,typeof e=="boolean"?e:n.unsigned)}he.fromValue=pt;var Ic=65536,hh=1<<24,Fn=Ic*Ic,Nc=Fn*Fn,Sc=Nc/2,kc=nn(hh),it=nn(0);he.ZERO=it;var rn=nn(0,!0);he.UZERO=rn;var On=nn(1);he.ONE=On;var vc=nn(1,!0);he.UONE=vc;var Ga=nn(-1);he.NEG_ONE=Ga;var Tc=fe(-1,2147483647,!1);he.MAX_VALUE=Tc;var xc=fe(-1,-1,!0);he.MAX_UNSIGNED_VALUE=xc;var Ke=fe(0,-2147483648,!1);he.MIN_VALUE=Ke;var L=he.prototype;L.toInt=function(){return this.unsigned?this.low>>>0:this.low},L.toNumber=function(){return this.unsigned?(this.high>>>0)*Fn+(this.low>>>0):this.high*Fn+(this.low>>>0)},L.toString=function(e){if(e=e||10,e<2||36<e)throw RangeError("radix");if(this.isZero())return"0";if(this.isNegative())if(this.eq(Ke)){var t=ot(e),r=this.div(t),a=r.mul(t).sub(this);return r.toString(e)+a.toInt().toString(e)}else return"-"+this.neg().toString(e);for(var s=ot(Vr(e,6),this.unsigned),i=this,u="";;){var c=i.div(s),l=i.sub(c.mul(s)).toInt()>>>0,o=l.toString(e);if(i=c,i.isZero())return o+u;for(;o.length<6;)o="0"+o;u=""+o+u}},L.getHighBits=function(){return this.high},L.getHighBitsUnsigned=function(){return this.high>>>0},L.getLowBits=function(){return this.low},L.getLowBitsUnsigned=function(){return this.low>>>0},L.getNumBitsAbs=function(){if(this.isNegative())return this.eq(Ke)?64:this.neg().getNumBitsAbs();for(var e=this.high!=0?this.high:this.low,t=31;t>0&&!(e&1<<t);t--);return this.high!=0?t+33:t+1},L.isZero=function(){return this.high===0&&this.low===0},L.eqz=L.isZero,L.isNegative=function(){return!this.unsigned&&this.high<0},L.isPositive=function(){return this.unsigned||this.high>=0},L.isOdd=function(){return(this.low&1)===1},L.isEven=function(){return(this.low&1)===0},L.equals=function(e){return qe(e)||(e=pt(e)),this.unsigned!==e.unsigned&&this.high>>>31===1&&e.high>>>31===1?!1:this.high===e.high&&this.low===e.low},L.eq=L.equals,L.notEquals=function(e){return!this.eq(e)},L.neq=L.notEquals,L.ne=L.notEquals,L.lessThan=function(e){return this.comp(e)<0},L.lt=L.lessThan,L.lessThanOrEqual=function(e){return this.comp(e)<=0},L.lte=L.lessThanOrEqual,L.le=L.lessThanOrEqual,L.greaterThan=function(e){return this.comp(e)>0},L.gt=L.greaterThan,L.greaterThanOrEqual=function(e){return this.comp(e)>=0},L.gte=L.greaterThanOrEqual,L.ge=L.greaterThanOrEqual,L.compare=function(e){if(qe(e)||(e=pt(e)),this.eq(e))return 0;var t=this.isNegative(),r=e.isNegative();return t&&!r?-1:!t&&r?1:this.unsigned?e.high>>>0>this.high>>>0||e.high===this.high&&e.low>>>0>this.low>>>0?-1:1:this.sub(e).isNegative()?-1:1},L.comp=L.compare,L.negate=function(){return!this.unsigned&&this.eq(Ke)?Ke:this.not().add(On)},L.neg=L.negate,L.add=function(e){qe(e)||(e=pt(e));var t=this.high>>>16,r=this.high&65535,a=this.low>>>16,s=this.low&65535,i=e.high>>>16,u=e.high&65535,c=e.low>>>16,l=e.low&65535,o=0,p=0,d=0,m=0;return m+=s+l,d+=m>>>16,m&=65535,d+=a+c,p+=d>>>16,d&=65535,p+=r+u,o+=p>>>16,p&=65535,o+=t+i,o&=65535,fe(d<<16|m,o<<16|p,this.unsigned)},L.subtract=function(e){return qe(e)||(e=pt(e)),this.add(e.neg())},L.sub=L.subtract,L.multiply=function(e){if(this.isZero())return it;if(qe(e)||(e=pt(e)),at){var t=at.mul(this.low,this.high,e.low,e.high);return fe(t,at.get_high(),this.unsigned)}if(e.isZero())return it;if(this.eq(Ke))return e.isOdd()?Ke:it;if(e.eq(Ke))return this.isOdd()?Ke:it;if(this.isNegative())return e.isNegative()?this.neg().mul(e.neg()):this.neg().mul(e).neg();if(e.isNegative())return this.mul(e.neg()).neg();if(this.lt(kc)&&e.lt(kc))return ot(this.toNumber()*e.toNumber(),this.unsigned);var r=this.high>>>16,a=this.high&65535,s=this.low>>>16,i=this.low&65535,u=e.high>>>16,c=e.high&65535,l=e.low>>>16,o=e.low&65535,p=0,d=0,m=0,f=0;return f+=i*o,m+=f>>>16,f&=65535,m+=s*o,d+=m>>>16,m&=65535,m+=i*l,d+=m>>>16,m&=65535,d+=a*o,p+=d>>>16,d&=65535,d+=s*l,p+=d>>>16,d&=65535,d+=i*c,p+=d>>>16,d&=65535,p+=r*o+a*l+s*c+i*u,p&=65535,fe(m<<16|f,p<<16|d,this.unsigned)},L.mul=L.multiply,L.divide=function(e){if(qe(e)||(e=pt(e)),e.isZero())throw Error("division by zero");if(at){if(!this.unsigned&&this.high===-2147483648&&e.low===-1&&e.high===-1)return this;var t=(this.unsigned?at.div_u:at.div_s)(this.low,this.high,e.low,e.high);return fe(t,at.get_high(),this.unsigned)}if(this.isZero())return this.unsigned?rn:it;var r,a,s;if(this.unsigned){if(e.unsigned||(e=e.toUnsigned()),e.gt(this))return rn;if(e.gt(this.shru(1)))return vc;s=rn}else{if(this.eq(Ke)){if(e.eq(On)||e.eq(Ga))return Ke;if(e.eq(Ke))return On;var i=this.shr(1);return r=i.div(e).shl(1),r.eq(it)?e.isNegative()?On:Ga:(a=this.sub(e.mul(r)),s=r.add(a.div(e)),s)}else if(e.eq(Ke))return this.unsigned?rn:it;if(this.isNegative())return e.isNegative()?this.neg().div(e.neg()):this.neg().div(e).neg();if(e.isNegative())return this.div(e.neg()).neg();s=it}for(a=this;a.gte(e);){r=Math.max(1,Math.floor(a.toNumber()/e.toNumber()));for(var u=Math.ceil(Math.log(r)/Math.LN2),c=u<=48?1:Vr(2,u-48),l=ot(r),o=l.mul(e);o.isNegative()||o.gt(a);)r-=c,l=ot(r,this.unsigned),o=l.mul(e);l.isZero()&&(l=On),s=s.add(l),a=a.sub(o)}return s},L.div=L.divide,L.modulo=function(e){if(qe(e)||(e=pt(e)),at){var t=(this.unsigned?at.rem_u:at.rem_s)(this.low,this.high,e.low,e.high);return fe(t,at.get_high(),this.unsigned)}return this.sub(this.div(e).mul(e))},L.mod=L.modulo,L.rem=L.modulo,L.not=function(){return fe(~this.low,~this.high,this.unsigned)},L.and=function(e){return qe(e)||(e=pt(e)),fe(this.low&e.low,this.high&e.high,this.unsigned)},L.or=function(e){return qe(e)||(e=pt(e)),fe(this.low|e.low,this.high|e.high,this.unsigned)},L.xor=function(e){return qe(e)||(e=pt(e)),fe(this.low^e.low,this.high^e.high,this.unsigned)},L.shiftLeft=function(e){return qe(e)&&(e=e.toInt()),(e&=63)===0?this:e<32?fe(this.low<<e,this.high<<e|this.low>>>32-e,this.unsigned):fe(0,this.low<<e-32,this.unsigned)},L.shl=L.shiftLeft,L.shiftRight=function(e){return qe(e)&&(e=e.toInt()),(e&=63)===0?this:e<32?fe(this.low>>>e|this.high<<32-e,this.high>>e,this.unsigned):fe(this.high>>e-32,this.high>=0?0:-1,this.unsigned)},L.shr=L.shiftRight,L.shiftRightUnsigned=function(e){if(qe(e)&&(e=e.toInt()),e&=63,e===0)return this;var t=this.high;if(e<32){var r=this.low;return fe(r>>>e|t<<32-e,t>>>e,this.unsigned)}else return e===32?fe(t,0,this.unsigned):fe(t>>>e-32,0,this.unsigned)},L.shru=L.shiftRightUnsigned,L.shr_u=L.shiftRightUnsigned,L.toSigned=function(){return this.unsigned?fe(this.low,this.high,!1):this},L.toUnsigned=function(){return this.unsigned?this:fe(this.low,this.high,!0)},L.toBytes=function(e){return e?this.toBytesLE():this.toBytesBE()},L.toBytesLE=function(){var e=this.high,t=this.low;return[t&255,t>>>8&255,t>>>16&255,t>>>24,e&255,e>>>8&255,e>>>16&255,e>>>24]},L.toBytesBE=function(){var e=this.high,t=this.low;return[e>>>24,e>>>16&255,e>>>8&255,e&255,t>>>24,t>>>16&255,t>>>8&255,t&255]},he.fromBytes=function(e,t,r){return r?he.fromBytesLE(e,t):he.fromBytesBE(e,t)},he.fromBytesLE=function(e,t){return new he(e[0]|e[1]<<8|e[2]<<16|e[3]<<24,e[4]|e[5]<<8|e[6]<<16|e[7]<<24,t)},he.fromBytesBE=function(e,t){return new he(e[4]<<24|e[5]<<16|e[6]<<8|e[7],e[0]<<24|e[1]<<16|e[2]<<8|e[3],t)};var $c=Ha(bc),fh=Ni({__proto__:null,default:$c},[bc]);/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const sn=$c||fh;function Ur(n){return sn.fromString(n,!0,16)}const Ec=Ur("c3a5c85c97cb3127"),an=Ur("b492b66fbe98f273"),Me=Ur("9ae16a3b2f90404f");function qa(n){return n.xor(n.shru(47))}function Ac(n,e,t){const r=n.slice(e,e+t);return sn.fromBytes(Array.from(r),!0,!0)}function pe(n,e){return Ac(n,e,8)}function Dc(n,e){return Ac(n,e,4)}function $e(n,e){return e===0?n:n.shru(e).or(n.shl(64-e))}function zt(n,e,t=Ur("9ddfea08eb382d69")){let r=n.xor(e).mul(t);r=r.xor(r.shru(47));let a=e.xor(r).mul(t);return a=a.xor(a.shru(47)),a=a.mul(t),a}function gh(n,e,t,r,a,s){a=a.add(n),s=$e(s.add(a).add(r),21);const i=a;return a=a.add(e),a=a.add(t),s=s.add($e(a,44)),[a.add(r),s.add(i)]}function Hr(n,e,t,r){return gh(pe(n,e),pe(n,e+8),pe(n,e+16),pe(n,e+24),t,r)}function yh(n,e=n.length){if(e>=8){const t=Me.add(e*2),r=pe(n,0).add(Me),a=pe(n,e-8),s=$e(a,37).mul(t).add(r),i=$e(r,25).add(a).mul(t);return zt(s,i,t)}if(e>=4){const t=Me.add(e*2),r=Dc(n,0);return zt(r.shl(3).add(e),Dc(n,e-4),t)}if(e>0){const t=n[0],r=n[e>>1],a=n[e-1],s=t+(r<<8),i=e+(a<<2);return qa(Me.mul(s).xor(Ec.mul(i))).mul(Me)}return Me}function bh(n,e=n.length){const t=Me.add(e*2),r=pe(n,0).mul(an),a=pe(n,8),s=pe(n,e-8).mul(t),i=pe(n,e-16).mul(Me);return zt($e(r.add(a),43).add($e(s,30)).add(i),r.add($e(a.add(Me),18)).add(s),t)}function wh(n,e=n.length){const t=Me.add(e*2),r=pe(n,0).mul(Me),a=pe(n,8),s=pe(n,e-8).mul(t),i=pe(n,e-16).mul(Me),u=$e(r.add(a),43).add($e(s,30)).add(i),c=zt(u,r.add($e(a.add(Me),18)).add(s),t),l=pe(n,16).mul(t),o=pe(n,24),p=u.add(pe(n,e-32)).mul(t),d=c.add(pe(n,e-24)).mul(t);return zt($e(l.add(o),43).add($e(p,30)).add(d),l.add($e(o.add(r),18)).add(p),t)}function _h(n,e=n.length){const t=sn.fromNumber(81,!0);if(e<=32)return e<=16?yh(n,e):bh(n,e);if(e<=64)return wh(n,e);let r=t,a=t.mul(an).add(113),s=qa(a.mul(Me).add(113)).mul(Me),i=[sn.UZERO,sn.UZERO],u=[sn.UZERO,sn.UZERO];r=r.mul(Me).add(pe(n,0));let c=0;const l=(e-1>>6)*64,o=l+(e-1&63)-63;do r=$e(r.add(a).add(i[0]).add(pe(n,c+8)),37).mul(an),a=$e(a.add(i[1]).add(pe(n,c+48)),42).mul(an),r=r.xor(u[1]),a=a.add(i[0]).add(pe(n,c+40)),s=$e(s.add(u[0]),33).mul(an),i=Hr(n,c,i[1].mul(an),r.add(u[0])),u=Hr(n,c+32,s.add(u[1]),a.add(pe(n,c+16))),[s,r]=[r,s],c+=64;while(c!==l);const p=an.add(s.and(255).shl(1));return c=o,u[0]=u[0].add(e-1&63),i[0]=i[0].add(u[0]),u[0]=u[0].add(i[0]),r=$e(r.add(a).add(i[0]).add(pe(n,c+8)),37).mul(p),a=$e(a.add(i[1]).add(pe(n,c+48)),42).mul(p),r=r.xor(u[1].mul(9)),a=a.add(i[0].mul(9).add(pe(n,c+40))),s=$e(s.add(u[0]),33).mul(p),i=Hr(n,c,i[1].mul(p),r.add(u[0])),u=Hr(n,c+32,s.add(u[1]),a.add(pe(n,c+16))),[s,r]=[r,s],zt(zt(i[0],u[0],p).add(qa(a).mul(Ec)).add(s),zt(i[1],u[1],p).add(r),p)}/**
 * @license
 * Copyright 2017 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Ih(n,e){return n instanceof Float32Array&&e==="float32"||n instanceof Int32Array&&e==="int32"||n instanceof Uint8Array&&e==="bool"}function Fc(n,e){if(e==="string")throw new Error("Cannot convert a string[] to a TypedArray");if(Array.isArray(n)&&(n=ir(n)),Z().getBool("DEBUG")&&Om(n,e),Ih(n,e))return n;if(e==null||e==="float32"||e==="complex64")return new Float32Array(n);if(e==="int32")return new Int32Array(n);if(e==="bool"){const t=new Uint8Array(n.length);for(let r=0;r<t.length;++r)Math.round(n[r])!==0&&(t[r]=1);return t}else throw new Error(`Unknown data type ${e}`)}function Cn(){return Z().platform.now()}function Nh(n,e){return Z().platform.fetch(n,e)}function or(n,e="utf-8"){return e=e||"utf-8",Z().platform.encode(n,e)}function Ka(n,e="utf-8"){return e=e||"utf-8",Z().platform.decode(n,e)}function ut(n){return Z().platform.isTypedArray!=null?Z().platform.isTypedArray(n):yc(n)}function ir(n,e=[],t=!1){if(e==null&&(e=[]),typeof n=="boolean"||typeof n=="number"||typeof n=="string"||tn(n)||n==null||ut(n)&&t)e.push(n);else if(Array.isArray(n)||ut(n))for(let r=0;r<n.length;++r)ir(n[r],e,t);else{let r=-1;for(const a of Object.keys(n))/^([1-9]+[0-9]*|0)$/.test(a)&&(r=Math.max(r,Number(a)));for(let a=0;a<=r;a++)ir(n[a],e,t)}return e}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */class Sh{constructor(e,t){this.backendTimer=e,this.logger=t,t==null&&(this.logger=new vh)}profileKernel(e,t,r){let a;const s=()=>{a=r()};let i;const u=Cn();if(this.backendTimer.timerAvailable())i=this.backendTimer.time(s);else{s();for(const l of a)l.dataSync();i=Promise.resolve({kernelMs:Cn()-u})}if(Z().getBool("CHECK_COMPUTATION_FOR_ERRORS"))for(let l=0;l<a.length;l++){const o=a[l];o.data().then(p=>{kh(p,o.dtype,e)})}return{kernelName:e,outputs:a,inputs:t,timeMs:i.then(l=>l.kernelMs),extraInfo:i.then(l=>l.getExtraProfileInfo!=null?l.getExtraProfileInfo():"")}}logKernelProfile(e){const{kernelName:t,outputs:r,timeMs:a,inputs:s,extraInfo:i}=e;r.forEach(u=>{Promise.all([u.data(),a,i]).then(c=>{this.logger.logKernelProfile(t,u,c[0],c[1],s,c[2])})})}}function kh(n,e,t){if(e!=="float32")return!1;for(let r=0;r<n.length;r++){const a=n[r];if(isNaN(a)||!isFinite(a))return console.warn(`Found ${a} in the result of '${t}'`),!0}return!1}class vh{logKernelProfile(e,t,r,a,s,i){const u=typeof a=="number"?Mr(`${a}ms`,9):a.error,c=Mr(e,25),l=t.rank,o=t.size,p=Mr(t.shape.toString(),14);let d="";for(const m in s){const f=s[m];if(f!=null){const g=f.shape||t.shape,y=g.length;d+=`${m}: ${y}D ${y>0?g:""} `}}console.log(`%c${c}	%c${u}	%c${l}D ${p}	%c${o}	%c${d}	%c${i}`,"font-weight:bold","color:red","color:blue","color: orange","color: green","color: steelblue")}}/**
 * @license
 * Copyright 2017 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Th(n,e,t){const r={},a={};for(let c=0;c<e.length;c++)r[e[c].id]=!0;for(let c=0;c<n.length;c++){const l=n[c],o=l.inputs;for(const p in o){const d=o[p];let m=!1;for(let f=0;f<e.length;f++)if(r[d.id]){l.outputs.forEach(g=>r[g.id]=!0),m=!0,a[l.id]=!0;break}if(m)break}}const s={};s[t.id]=!0;const i={};for(let c=n.length-1;c>=0;c--){const l=n[c],o=l.inputs;for(let p=0;p<l.outputs.length;p++)if(s[l.outputs[p].id]){for(const d in o)s[o[d].id]=!0,i[l.id]=!0;break}}const u=[];for(let c=0;c<n.length;c++){const l=n[c];if(a[l.id]&&i[l.id]){const o={};for(const d in l.inputs){const m=l.inputs[d];r[m.id]&&(o[d]=m)}const p=Object.assign({},l);p.inputs=o,p.outputs=l.outputs,u.push(p)}}return u}function xh(n,e,t,r){for(let a=e.length-1;a>=0;a--){const s=e[a],i=[];if(s.outputs.forEach(c=>{const l=n[c.id];l!=null?i.push(l):i.push(null)}),s.gradient==null)throw new Error(`Cannot compute gradient: gradient function not found for ${s.kernelName}.`);const u=s.gradient(i);for(const c in s.inputs){if(!(c in u))throw new Error(`Cannot backprop through input ${c}. Available gradients found: ${Object.keys(u)}.`);const l=t(()=>u[c]());if(l.dtype!=="float32")throw new Error(`Error in gradient for op ${s.kernelName}. The gradient of input ${c} must have 'float32' dtype, but has '${l.dtype}'`);const o=s.inputs[c];if(!St(l.shape,o.shape))throw new Error(`Error in gradient for op ${s.kernelName}. The gradient of input '${c}' has shape '${l.shape}', which does not match the shape of the input '${o.shape}'`);if(n[o.id]==null)n[o.id]=l;else{const p=n[o.id];n[o.id]=r(p,l),p.dispose()}}}}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Oc=20,ur=3,Xa=7;function $h(n,e,t,r){const a=Ee(e),s=Eh(n,e,t,a),i=e.length,u=jr(n,e,t,a,s),c=["Tensor"];return r&&(c.push(`  dtype: ${t}`),c.push(`  rank: ${i}`),c.push(`  shape: [${e}]`),c.push("  values:")),c.push(u.map(l=>"    "+l).join(`
`)),c.join(`
`)}function Eh(n,e,t,r){const a=P(e),s=r[r.length-1],i=new Array(s).fill(0),u=e.length,c=t==="complex64"?lr(n):n;if(u>1)for(let l=0;l<a/s;l++){const o=l*s;for(let p=0;p<s;p++)i[p]=Math.max(i[p],cr(c[o+p],0,t).length)}return i}function cr(n,e,t){let r;return Array.isArray(n)?r=`${parseFloat(n[0].toFixed(Xa))} + ${parseFloat(n[1].toFixed(Xa))}j`:Ls(n)?r=`'${n}'`:t==="bool"?r=Cc(n):r=parseFloat(n.toFixed(Xa)).toString(),Mr(r,e)}function Cc(n){return n===0?"false":"true"}function jr(n,e,t,r,a,s=!0){const i=t==="complex64"?2:1,u=e[0],c=e.length;if(c===0){if(t==="complex64"){const g=lr(n);return[cr(g[0],0,t)]}return t==="bool"?[Cc(n[0])]:[n[0].toString()]}if(c===1){if(u>Oc){const y=ur*i;let _=Array.from(n.slice(0,y)),S=Array.from(n.slice((u-ur)*i,u*i));return t==="complex64"&&(_=lr(_),S=lr(S)),["["+_.map((I,T)=>cr(I,a[T],t)).join(", ")+", ..., "+S.map((I,T)=>cr(I,a[u-ur+T],t)).join(", ")+"]"]}return["["+(t==="complex64"?lr(n):Array.from(n)).map((y,_)=>cr(y,a[_],t)).join(", ")+"]"]}const l=e.slice(1),o=r.slice(1),p=r[0]*i,d=[];if(u>Oc){for(let g=0;g<ur;g++){const y=g*p,_=y+p;d.push(...jr(n.slice(y,_),l,t,o,a,!1))}d.push("...");for(let g=u-ur;g<u;g++){const y=g*p,_=y+p;d.push(...jr(n.slice(y,_),l,t,o,a,g===u-1))}}else for(let g=0;g<u;g++){const y=g*p,_=y+p;d.push(...jr(n.slice(y,_),l,t,o,a,g===u-1))}const m=c===2?",":"";d[0]="["+(u>0?d[0]+m:"");for(let g=1;g<d.length-1;g++)d[g]=" "+d[g]+m;let f=`,
`;for(let g=2;g<c;g++)f+=`
`;return d[d.length-1]=" "+d[d.length-1]+"]"+(s?"":f),d}function lr(n){const e=[];for(let t=0;t<n.length;t+=2)e.push([n[t],n[t+1]]);return e}/**
 * @license
 * Copyright 2017 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */class pr{constructor(e,t,r){if(this.dtype=t,this.shape=e.slice(),this.size=P(e),r!=null){const a=r.length;w(a===this.size,()=>`Length of values '${a}' does not match the size inferred by the shape '${this.size}'.`)}if(t==="complex64")throw new Error("complex64 dtype TensorBuffers are not supported. Please create a TensorBuffer for the real and imaginary parts separately and call tf.complex(real, imag).");this.values=r||An(t,this.size),this.strides=Ee(e)}set(e,...t){t.length===0&&(t=[0]),w(t.length===this.rank,()=>`The number of provided coordinates (${t.length}) must match the rank (${this.rank})`);const r=this.locToIndex(t);this.values[r]=e}get(...e){e.length===0&&(e=[0]);let t=0;for(const a of e){if(a<0||a>=this.shape[t]){const s=`Requested out of range element at ${e}.   Buffer shape=${this.shape}`;throw new Error(s)}t++}let r=e[e.length-1];for(let a=0;a<e.length-1;++a)r+=this.strides[a]*e[a];return this.values[r]}locToIndex(e){if(this.rank===0)return 0;if(this.rank===1)return e[0];let t=e[e.length-1];for(let r=0;r<e.length-1;++r)t+=this.strides[r]*e[r];return t}indexToLoc(e){if(this.rank===0)return[];if(this.rank===1)return[e];const t=new Array(this.shape.length);for(let r=0;r<t.length-1;++r)t[r]=Math.floor(e/this.strides[r]),e-=t[r]*this.strides[r];return t[t.length-1]=e,t}get rank(){return this.shape.length}toTensor(){return dt().makeTensor(this.values,this.shape,this.dtype)}}let dt=null,Rn=null;function Ah(n){dt=n}function Dh(n){Rn=n}class Be{constructor(e,t,r,a){this.kept=!1,this.isDisposedInternal=!1,this.shape=e.slice(),this.dtype=t||"float32",this.size=P(e),this.strides=Ee(e),this.dataId=r,this.id=a,this.rankType=this.rank<5?this.rank.toString():"higher"}get rank(){return this.shape.length}async buffer(){const e=await this.data();return Rn.buffer(this.shape,this.dtype,e)}bufferSync(){return Rn.buffer(this.shape,this.dtype,this.dataSync())}async array(){const e=await this.data();return Ws(this.shape,e,this.dtype==="complex64")}arraySync(){return Ws(this.shape,this.dataSync(),this.dtype==="complex64")}async data(){this.throwIfDisposed();const e=dt().read(this.dataId);if(this.dtype==="string"){const t=await e;try{return t.map(r=>Ka(r))}catch{throw new Error("Failed to decode the string bytes into utf-8. To get the original bytes, call tensor.bytes().")}}return e}dataToGPU(e){return this.throwIfDisposed(),dt().readToGPU(this.dataId,e)}dataSync(){this.throwIfDisposed();const e=dt().readSync(this.dataId);if(this.dtype==="string")try{return e.map(t=>Ka(t))}catch{throw new Error("Failed to decode the string bytes into utf-8. To get the original bytes, call tensor.bytes().")}return e}async bytes(){this.throwIfDisposed();const e=await dt().read(this.dataId);return this.dtype==="string"?e:new Uint8Array(e.buffer)}dispose(){this.isDisposed||(this.kerasMask&&this.kerasMask.dispose(),dt().disposeTensor(this),this.isDisposedInternal=!0)}get isDisposed(){return this.isDisposedInternal}throwIfDisposed(){if(this.isDisposed)throw new Error("Tensor is disposed.")}print(e=!1){return Rn.print(this,e)}clone(){return this.throwIfDisposed(),Rn.clone(this)}toString(e=!1){const t=this.dataSync();return $h(t,this.shape,this.dtype,e)}cast(e){return this.throwIfDisposed(),Rn.cast(this,e)}variable(e=!0,t,r){return this.throwIfDisposed(),dt().makeVariable(this,e,t,r)}}Object.defineProperty(Be,Symbol.hasInstance,{value:n=>!!n&&n.data!=null&&n.dataSync!=null&&n.throwIfDisposed!=null});function Rc(){return Us("Tensor",()=>Be)}Rc();class Gr extends Be{constructor(e,t,r,a){super(e.shape,e.dtype,e.dataId,a),this.trainable=t,this.name=r}assign(e){if(e.dtype!==this.dtype)throw new Error(`dtype of the new value (${e.dtype}) and previous value (${this.dtype}) must match`);if(!St(e.shape,this.shape))throw new Error(`shape of the new value (${e.shape}) and previous value (${this.shape}) must match`);dt().disposeTensor(this),this.dataId=e.dataId,dt().incRef(this,null)}dispose(){dt().disposeVariable(this),this.isDisposedInternal=!0}}Object.defineProperty(Gr,Symbol.hasInstance,{value:n=>n instanceof Be&&n.assign!=null&&n.assign instanceof Function});/**
 * @license
 * Copyright 2017 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */var Mc;(function(n){n.R0="R0",n.R1="R1",n.R2="R2",n.R3="R3",n.R4="R4",n.R5="R5",n.R6="R6"})(Mc||(Mc={}));var Ja;(function(n){n.float32="float32",n.int32="int32",n.bool="int32",n.complex64="complex64"})(Ja||(Ja={}));var Ya;(function(n){n.float32="float32",n.int32="int32",n.bool="bool",n.complex64="complex64"})(Ya||(Ya={}));var Za;(function(n){n.float32="float32",n.int32="float32",n.bool="float32",n.complex64="complex64"})(Za||(Za={}));var Qa;(function(n){n.float32="complex64",n.int32="complex64",n.bool="complex64",n.complex64="complex64"})(Qa||(Qa={}));const Fh={float32:Za,int32:Ja,bool:Ya,complex64:Qa};function Oh(n,e){if(n==="string"||e==="string"){if(n==="string"&&e==="string")return"string";throw new Error(`Can not upcast ${n} with ${e}`)}return Fh[n][e]}function Bc(n){return n!=null&&typeof n=="object"&&"texture"in n&&n.texture instanceof WebGLTexture}function Pc(n){return typeof GPUBuffer<"u"&&n!=null&&typeof n=="object"&&"buffer"in n&&n.buffer instanceof GPUBuffer}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Ie(n,e){if(n.dtype===e.dtype)return[n,e];const t=Oh(n.dtype,e.dtype);return[n.cast(t),e.cast(t)]}function Ch(n,e){w(n.dtype===e.dtype,()=>`The dtypes of the first(${n.dtype}) and second(${e.dtype}) input must match`)}function Lc(n){const e=[];return zc(n,e,new Set),e}function zc(n,e,t){if(n==null)return;if(n instanceof Be){e.push(n);return}if(!Rh(n))return;const r=n;for(const a in r){const s=r[a];t.has(s)||(t.add(s),zc(s,e,t))}}function Rh(n){return Array.isArray(n)||typeof n=="object"}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function eo(n){return n.kernelName!=null}class Wc{constructor(){this.registeredVariables={},this.nextTapeNodeId=0,this.numBytes=0,this.numTensors=0,this.numStringTensors=0,this.numDataBuffers=0,this.gradientDepth=0,this.kernelDepth=0,this.scopeStack=[],this.numDataMovesStack=[],this.nextScopeId=0,this.tensorInfo=new WeakMap,this.profiling=!1,this.activeProfile={newBytes:0,newTensors:0,peakBytes:0,kernels:[],result:null,get kernelNames(){return Array.from(new Set(this.kernels.map(e=>e.name)))}}}dispose(){for(const e in this.registeredVariables)this.registeredVariables[e].dispose()}}class Mn{constructor(e){this.ENV=e,this.registry={},this.registryFactory={},this.pendingBackendInitId=0,this.state=new Wc}async ready(){if(this.pendingBackendInit!=null)return this.pendingBackendInit.then(()=>{});if(this.backendInstance!=null)return;const e=this.getSortedBackends();for(let t=0;t<e.length;t++){const r=e[t];if(await this.initializeBackend(r).success){await this.setBackend(r);return}}throw new Error("Could not initialize any backends, all backend initializations failed.")}get backend(){if(this.pendingBackendInit!=null)throw new Error(`Backend '${this.backendName}' has not yet been initialized. Make sure to await tf.ready() or await tf.setBackend() before calling other methods`);if(this.backendInstance==null){const{name:e,asyncInit:t}=this.initializeBackendsAndReturnBest();if(t)throw new Error(`The highest priority backend '${e}' has not yet been initialized. Make sure to await tf.ready() or await tf.setBackend() before calling other methods`);this.setBackend(e)}return this.backendInstance}backendNames(){return Object.keys(this.registryFactory)}findBackend(e){if(!(e in this.registry))if(e in this.registryFactory){const{asyncInit:t}=this.initializeBackend(e);if(t)return null}else return null;return this.registry[e]}findBackendFactory(e){return e in this.registryFactory?this.registryFactory[e].factory:null}registerBackend(e,t,r=1){return e in this.registryFactory?(Dn(`${e} backend was already registered. Reusing existing backend factory.`),!1):(this.registryFactory[e]={factory:t,priority:r},!0)}async setBackend(e){if(this.registryFactory[e]==null)throw new Error(`Backend name '${e}' not found in registry`);if(this.backendName=e,this.registry[e]==null){this.backendInstance=null;const{success:t,asyncInit:r}=this.initializeBackend(e);if(!(r?await t:t))return!1}return this.backendInstance=this.registry[e],this.setupRegisteredKernels(),this.profiler=new Sh(this.backendInstance),!0}setupRegisteredKernels(){fc(this.backendName).forEach(t=>{t.setupFunc!=null&&t.setupFunc(this.backendInstance)})}disposeRegisteredKernels(e){fc(e).forEach(r=>{r.disposeFunc!=null&&r.disposeFunc(this.registry[e])})}initializeBackend(e){const t=this.registryFactory[e];if(t==null)throw new Error(`Cannot initialize backend ${e}, no registration found.`);try{const r=t.factory();if(r&&!(r instanceof Si)&&typeof r.then=="function"){const a=++this.pendingBackendInitId,s=r.then(i=>a<this.pendingBackendInitId?!1:(this.registry[e]=i,this.pendingBackendInit=null,!0)).catch(i=>(a<this.pendingBackendInitId||(this.pendingBackendInit=null,Dn(`Initialization of backend ${e} failed`),Dn(i.stack||i.message)),!1));return this.pendingBackendInit=s,{success:s,asyncInit:!0}}else return this.registry[e]=r,{success:!0,asyncInit:!1}}catch(r){return Dn(`Initialization of backend ${e} failed`),Dn(r.stack||r.message),{success:!1,asyncInit:!1}}}removeBackend(e){if(!(e in this.registryFactory))throw new Error(`${e} backend not found in registry`);this.backendName===e&&this.pendingBackendInit!=null&&this.pendingBackendInitId++,e in this.registry&&(this.disposeRegisteredKernels(e),this.registry[e].dispose(),delete this.registry[e]),delete this.registryFactory[e],this.backendName===e&&(this.pendingBackendInit=null,this.backendName=null,this.backendInstance=null)}getSortedBackends(){if(Object.keys(this.registryFactory).length===0)throw new Error("No backend found in registry.");return Object.keys(this.registryFactory).sort((e,t)=>this.registryFactory[t].priority-this.registryFactory[e].priority)}initializeBackendsAndReturnBest(){const e=this.getSortedBackends();for(let t=0;t<e.length;t++){const r=e[t],{success:a,asyncInit:s}=this.initializeBackend(r);if(s||a)return{name:r,asyncInit:s}}throw new Error("Could not initialize any backends, all backend initializations failed.")}moveData(e,t){const r=this.state.tensorInfo.get(t),a=r.backend,s=this.readSync(t),i=a.refCount(t);a.disposeData(t,!0),r.backend=e,e.move(t,s,r.shape,r.dtype,i),this.shouldCheckForMemLeaks()&&this.state.numDataMovesStack[this.state.numDataMovesStack.length-1]++}tidy(e,t){let r=null;if(t==null){if(typeof e!="function")throw new Error("Please provide a function to tidy()");t=e}else{if(typeof e!="string"&&!(e instanceof String))throw new Error("When calling with two arguments, the first argument to tidy() must be a string");if(typeof t!="function")throw new Error("When calling with two arguments, the 2nd argument to tidy() must be a function");r=e}let a;return this.scopedRun(()=>this.startScope(r),()=>this.endScope(a),()=>(a=t(),a instanceof Promise&&console.error("Cannot return a Promise inside of tidy."),a))}scopedRun(e,t,r){e();try{const a=r();return t(),a}catch(a){throw t(),a}}nextTensorId(){return Mn.nextTensorId++}nextVariableId(){return Mn.nextVariableId++}clone(e){const t=v.runKernel(da,{x:e}),r={x:e},a=i=>({x:()=>{const u="float32",c={x:i},l={dtype:u};return v.runKernel(Ys,c,l)}}),s=[];return this.addTapeNode(this.state.activeScope.name,r,[t],a,s,{}),t}runKernel(e,t,r){if(this.backendName==null&&this.backend,!(mc(e,this.backendName)!=null))throw new Error(`Kernel '${e}' not registered for backend '${this.backendName}'`);return this.runKernelFunc({kernelName:e,inputs:t,attrs:r})}shouldCheckForMemLeaks(){return this.ENV.getBool("IS_TEST")}checkKernelForMemLeak(e,t,r){const a=this.backend.numDataIds();let s=0;r.forEach(c=>{s+=c.dtype==="complex64"?3:1});const i=this.state.numDataMovesStack[this.state.numDataMovesStack.length-1],u=a-t-s-i;if(u>0)throw new Error(`Backend '${this.backendName}' has an internal memory leak (${u} data ids) after running '${e}'`)}runKernelFunc(e){let t,r=[];const a=this.isTapeOn(),s=this.state.numBytes,i=this.state.numTensors;this.shouldCheckForMemLeaks()&&this.state.numDataMovesStack.push(0);let u;this.backendName==null&&this.backend;let c;const l=eo(e)?e.kernelName:this.state.activeScope!=null?this.state.activeScope.name:"";if(eo(e)){const{kernelName:f,inputs:g,attrs:y}=e;this.backendName==null&&this.backend;const _=mc(f,this.backendName);w(_!=null,()=>`Cannot find registered kernel '${f}' for backend '${this.backendName}'`),u=()=>{const S=this.backend.numDataIds();c=_.kernelFunc({inputs:g,attrs:y,backend:this.backend});const I=Array.isArray(c)?c:[c];this.shouldCheckForMemLeaks()&&this.checkKernelForMemLeak(f,S,I);const T=I.map($=>$.rank!=null?$:this.makeTensorFromTensorInfo($));if(a){const $=this.getTensorsForGradient(f,g,T);r=this.saveTensorsForBackwardMode($)}return T}}else{const{forwardFunc:f}=e,g=y=>{a&&(r=y.map(_=>this.keep(this.clone(_))))};u=()=>{const y=this.backend.numDataIds();c=this.tidy(()=>f(this.backend,g));const _=Array.isArray(c)?c:[c];return this.shouldCheckForMemLeaks()&&this.checkKernelForMemLeak(l,y,_),_}}const{inputs:o,attrs:p}=e,d=eo(e)?null:e.backwardsFunc;let m;return this.scopedRun(()=>this.state.kernelDepth++,()=>this.state.kernelDepth--,()=>{!this.ENV.getBool("DEBUG")&&!this.state.profiling?t=u():(m=this.profiler.profileKernel(l,o,()=>u()),this.ENV.getBool("DEBUG")&&this.profiler.logKernelProfile(m),t=m.outputs)}),a&&this.addTapeNode(l,o,t,d,r,p),this.state.profiling&&this.state.activeProfile.kernels.push({name:l,bytesAdded:this.state.numBytes-s,totalBytesSnapshot:this.state.numBytes,tensorsAdded:this.state.numTensors-i,totalTensorsSnapshot:this.state.numTensors,inputShapes:Object.keys(o).map(f=>o[f]!=null?o[f].shape:null),outputShapes:t.map(f=>f.shape),kernelTimeMs:m.timeMs,extraInfo:m.extraInfo}),Array.isArray(c)?t:t[0]}saveTensorsForBackwardMode(e){return e.map(r=>this.keep(this.clone(r)))}getTensorsForGradient(e,t,r){const a=hc(e);if(a!=null){const s=a.inputsToSave||[],i=a.outputsToSave||[];let u;a.saveAllInputs?(w(Array.isArray(t),()=>"saveAllInputs is true, expected inputs to be an array."),u=Object.keys(t).map(l=>t[l])):u=s.map(l=>t[l]);const c=r.filter((l,o)=>i[o]);return u.concat(c)}return[]}makeTensor(e,t,r,a){if(e==null)throw new Error("Values passed to engine.makeTensor() are null");r=r||"float32",a=a||this.backend;let s=e;r==="string"&&Ls(e[0])&&(s=e.map(c=>or(c)));const i=a.write(s,t,r),u=new Be(t,r,i,this.nextTensorId());if(this.trackTensor(u,a),r==="string"){const c=this.state.tensorInfo.get(i),l=Rm(s);this.state.numBytes+=l-c.bytes,c.bytes=l}return u}makeTensorFromDataId(e,t,r,a){r=r||"float32";const s={dataId:e,shape:t,dtype:r};return this.makeTensorFromTensorInfo(s,a)}makeTensorFromTensorInfo(e,t){const{dataId:r,shape:a,dtype:s}=e,i=new Be(a,s,r,this.nextTensorId());return this.trackTensor(i,t),i}makeVariable(e,t=!0,r,a){r=r||this.nextVariableId().toString(),a!=null&&a!==e.dtype&&(e=e.cast(a));const s=new Gr(e,t,r,this.nextTensorId());if(this.state.registeredVariables[s.name]!=null)throw new Error(`Variable with name ${s.name} was already registered`);return this.state.registeredVariables[s.name]=s,this.incRef(s,this.backend),s}trackTensor(e,t){this.state.numTensors++,e.dtype==="string"&&this.state.numStringTensors++;let r=0;e.dtype!=="complex64"&&e.dtype!=="string"&&(r=e.size*nr(e.dtype)),this.state.numBytes+=r,this.state.tensorInfo.has(e.dataId)||(this.state.numDataBuffers++,this.state.tensorInfo.set(e.dataId,{backend:t||this.backend,dtype:e.dtype,shape:e.shape,bytes:r})),e instanceof Gr||this.track(e)}incRef(e,t){this.trackTensor(e,t),this.backend.incRef(e.dataId)}removeDataId(e,t){this.state.tensorInfo.has(e)&&this.state.tensorInfo.get(e).backend===t&&(this.state.tensorInfo.delete(e),this.state.numDataBuffers--)}disposeTensor(e){if(!this.state.tensorInfo.has(e.dataId))return;const t=this.state.tensorInfo.get(e.dataId);if(this.state.numTensors--,e.dtype==="string"&&(this.state.numStringTensors--,this.state.numBytes-=t.bytes),e.dtype!=="complex64"&&e.dtype!=="string"){const r=e.size*nr(e.dtype);this.state.numBytes-=r}t.backend.disposeData(e.dataId)&&this.removeDataId(e.dataId,t.backend)}disposeVariables(){for(const e in this.state.registeredVariables){const t=this.state.registeredVariables[e];this.disposeVariable(t)}}disposeVariable(e){this.disposeTensor(e),this.state.registeredVariables[e.name]!=null&&delete this.state.registeredVariables[e.name]}memory(){const e=this.backend.memory();return e.numTensors=this.state.numTensors,e.numDataBuffers=this.state.numDataBuffers,e.numBytes=this.state.numBytes,this.state.numStringTensors>0&&(e.unreliable=!0,e.reasons==null&&(e.reasons=[]),e.reasons.push("Memory usage by string tensors is approximate (2 bytes per character)")),e}async profile(e){this.state.profiling=!0;const t=this.state.numBytes,r=this.state.numTensors;this.state.activeProfile.kernels=[],this.state.activeProfile.result=await e(),this.state.profiling=!1,this.state.activeProfile.peakBytes=Math.max(...this.state.activeProfile.kernels.map(a=>a.totalBytesSnapshot)),this.state.activeProfile.newBytes=this.state.numBytes-t,this.state.activeProfile.newTensors=this.state.numTensors-r;for(const a of this.state.activeProfile.kernels)a.kernelTimeMs=await a.kernelTimeMs,a.extraInfo=await a.extraInfo;return this.state.activeProfile}isTapeOn(){return this.state.gradientDepth>0&&this.state.kernelDepth===0}addTapeNode(e,t,r,a,s,i){const u={id:this.state.nextTapeNodeId++,kernelName:e,inputs:t,outputs:r,saved:s},c=hc(e);c!=null&&(a=c.gradFunc),a!=null&&(u.gradient=l=>(l=l.map((o,p)=>{if(o==null){const d=r[p],m=sr(d.size,d.dtype);return this.makeTensor(m,d.shape,d.dtype)}return o}),a(l.length>1?l:l[0],s,i))),this.state.activeTape.push(u)}keep(e){return e.kept=!0,e}startTape(){this.state.gradientDepth===0&&(this.state.activeTape=[]),this.state.gradientDepth++}endTape(){this.state.gradientDepth--}startScope(e){const t={track:[],name:"unnamed scope",id:this.state.nextScopeId++};e&&(t.name=e),this.state.scopeStack.push(t),this.state.activeScope=t}endScope(e){const t=Lc(e),r=new Set(t.map(s=>s.id));for(let s=0;s<this.state.activeScope.track.length;s++){const i=this.state.activeScope.track[s];!i.kept&&!r.has(i.id)&&i.dispose()}const a=this.state.scopeStack.pop();this.state.activeScope=this.state.scopeStack.length===0?null:this.state.scopeStack[this.state.scopeStack.length-1],t.forEach(s=>{!s.kept&&s.scopeId===a.id&&this.track(s)})}gradients(e,t,r,a=!1){if(w(t.length>0,()=>"gradients() received an empty list of xs."),r!=null&&r.dtype!=="float32")throw new Error(`dy must have 'float32' dtype, but has '${r.dtype}'`);const s=this.scopedRun(()=>this.startTape(),()=>this.endTape(),()=>this.tidy("forward",e));w(s instanceof Be,()=>"The result y returned by f() must be a tensor.");const i=Th(this.state.activeTape,t,s);if(!a&&i.length===0&&t.length>0)throw new Error("Cannot compute gradient of y=f(x) with respect to x. Make sure that the f you passed encloses all operations that lead from x to y.");return this.tidy("backward",()=>{const u={};u[s.id]=r??Mh(s.shape),xh(u,i,l=>this.tidy(l),Bh);const c=t.map(l=>u[l.id]);return this.state.gradientDepth===0&&(this.state.activeTape.forEach(l=>{for(const o of l.saved)o.dispose()}),this.state.activeTape=null),{value:s,grads:c}})}customGrad(e){return w(zs(e),()=>"The f passed in customGrad(f) must be a function."),(...t)=>{w(t.every(u=>u instanceof Be),()=>"The args passed in customGrad(f)(x1, x2,...) must all be tensors");let r;const a={};t.forEach((u,c)=>{a[c]=u});const s=(u,c)=>(r=e(...t,c),w(r.value instanceof Be,()=>"The function f passed in customGrad(f) must return an object where `obj.value` is a tensor"),w(zs(r.gradFunc),()=>"The function f passed in customGrad(f) must return an object where `obj.gradFunc` is a function."),r.value),i=(u,c)=>{const l=r.gradFunc(u,c),o=Array.isArray(l)?l:[l];w(o.length===t.length,()=>"The function f passed in customGrad(f) must return an object where `obj.gradFunc` is a function that returns the same number of tensors as inputs passed to f(...)."),w(o.every(d=>d instanceof Be),()=>"The function f passed in customGrad(f) must return an object where `obj.gradFunc` is a function that returns a list of only tensors.");const p={};return o.forEach((d,m)=>{p[m]=()=>d}),p};return this.runKernelFunc({forwardFunc:s,backwardsFunc:i,inputs:a})}}readSync(e){return this.state.tensorInfo.get(e).backend.readSync(e)}read(e){return this.state.tensorInfo.get(e).backend.read(e)}readToGPU(e,t){return this.state.tensorInfo.get(e).backend.readToGPU(e,t)}async time(e){const t=Cn(),r=await this.backend.time(e);return r.wallMs=Cn()-t,r}track(e){return this.state.activeScope!=null&&(e.scopeId=this.state.activeScope.id,this.state.activeScope.track.push(e)),e}get registeredVariables(){return this.state.registeredVariables}reset(){this.pendingBackendInitId++,this.state.dispose(),this.ENV.reset(),this.state=new Wc;for(const e in this.registry)this.disposeRegisteredKernels(e),this.registry[e].dispose(),delete this.registry[e];this.backendName=null,this.backendInstance=null,this.pendingBackendInit=null}}Mn.nextTensorId=0,Mn.nextVariableId=0;function Mh(n){const e=vi(P(n),"float32");return v.makeTensor(e,n,"float32")}function Vc(){const n=$i();if(n._tfengine==null){const e=new Pm(n);n._tfengine=new Mn(e)}return Vm(n._tfengine.ENV),Ah(()=>n._tfengine),n._tfengine}const v=Vc();function Bh(n,e){const t={a:n,b:e};return v.runKernel(Hs,t)}/**
 * @license
 * Copyright 2017 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Ph(){return typeof window<"u"&&window.document!=null||typeof WorkerGlobalScope<"u"}/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Ue=Z();Ue.registerFlag("DEBUG",()=>!1,n=>{n&&console.warn("Debugging mode is ON. The output of every math call will be downloaded to CPU and checked for NaNs. This significantly impacts performance.")}),Ue.registerFlag("IS_BROWSER",()=>Ph()),Ue.registerFlag("IS_NODE",()=>typeof process<"u"&&typeof process.versions<"u"&&typeof process.versions.node<"u"),Ue.registerFlag("IS_CHROME",()=>typeof navigator<"u"&&navigator!=null&&navigator.userAgent!=null&&/Chrome/.test(navigator.userAgent)&&/Google Inc/.test(navigator.vendor)),Ue.registerFlag("IS_SAFARI",()=>typeof navigator<"u"&&navigator!=null&&navigator.userAgent!=null&&/Safari/.test(navigator.userAgent)&&/Apple/.test(navigator.vendor)),Ue.registerFlag("PROD",()=>!1),Ue.registerFlag("TENSORLIKE_CHECK_SHAPE_CONSISTENCY",()=>Ue.getBool("DEBUG")),Ue.registerFlag("DEPRECATION_WARNINGS_ENABLED",()=>!0),Ue.registerFlag("IS_TEST",()=>!1),Ue.registerFlag("CHECK_COMPUTATION_FOR_ERRORS",()=>Ue.getBool("DEBUG")),Ue.registerFlag("WRAP_TO_IMAGEBITMAP",()=>!1),Ue.registerFlag("CANVAS2D_WILL_READ_FREQUENTLY_FOR_GPU",()=>!1),Ue.registerFlag("USE_SETTIMEOUTCUSTOM",()=>!1);/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Wt(n,e){let t=n;if(ut(n))return e==="string"?[]:[n.length];if(Bc(n)){const a=n.channels||"RGBA";return[n.height,n.width*a.length]}else if(Pc(n))return[n.buffer.size/(e==null?4:nr(e))];if(!Array.isArray(n))return[];const r=[];for(;Array.isArray(t)||ut(t)&&e!=="string";)r.push(t.length),t=t[0];return Array.isArray(n)&&Z().getBool("TENSORLIKE_CHECK_SHAPE_CONSISTENCY")&&Uc(n,r,[]),r}function Uc(n,e,t){if(t=t||[],!Array.isArray(n)&&!ut(n)){w(e.length===0,()=>`Element arr[${t.join("][")}] is a primitive, but should be an array/TypedArray of ${e[0]} elements`);return}w(e.length>0,()=>`Element arr[${t.join("][")}] should be a primitive, but is an array of ${n.length} elements`),w(n.length===e[0],()=>`Element arr[${t.join("][")}] should have ${e[0]} elements, but has ${n.length} elements`);const r=e.slice(1);for(let a=0;a<n.length;++a)Uc(n[a],r,t.concat(a))}function Hc(n,e,t,r){if(n!=="string_or_numeric"){if(n==null)throw new Error("Expected dtype cannot be null.");if(n!=="numeric"&&n!==e||n==="numeric"&&e==="string")throw new Error(`Argument '${t}' passed to '${r}' must be ${n} tensor, but got ${e} tensor`)}}function b(n,e,t,r="numeric"){if(n instanceof Rc())return Hc(r,n.dtype,e,t),n;let a=rr(n);if(a!=="string"&&["bool","int32","float32"].indexOf(r)>=0&&(a=r),Hc(r,a,e,t),n==null||!ut(n)&&!Array.isArray(n)&&typeof n!="number"&&typeof n!="boolean"&&typeof n!="string"){const c=n==null?"null":n.constructor.name;throw new Error(`Argument '${e}' passed to '${t}' must be a Tensor or TensorLike, but got '${c}'`)}const s=Wt(n,a);!ut(n)&&!Array.isArray(n)&&(n=[n]);const u=a!=="string"?Fc(n,a):ir(n,[],!0);return v.makeTensor(u,s,a)}function qr(n,e,t,r="numeric"){if(!Array.isArray(n))throw new Error(`Argument ${e} passed to ${t} must be a \`Tensor[]\` or \`TensorLike[]\``);return n.map((s,i)=>b(s,`${e}[${i}]`,t,r))}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const jc="__op";function k(n){const e=Object.keys(n);if(e.length!==1)throw new Error(`Please provide an object with a single key (operation name) mapping to a function. Got an object with ${e.length} keys.`);let t=e[0];const r=n[t];t.endsWith("_")&&(t=t.substring(0,t.length-1)),t=t+jc;const a=(...s)=>{v.startScope(t);try{const i=r(...s);return tn(i)&&console.error("Cannot return a Promise inside of tidy."),v.endScope(i),i}catch(i){throw v.endScope(null),i}};return Object.defineProperty(a,"name",{value:t,configurable:!0}),a}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Lh(n,e){const t=b(n,"real","complex"),r=b(e,"imag","complex");Qe(t.shape,r.shape,`real and imag shapes, ${t.shape} and ${r.shape}, must match in call to tf.complex().`);const a={real:t,imag:r};return v.runKernel(Gm,a)}const Vt=k({complex_:Lh});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Ut(n,e,t,r){if(r==null)r=rr(n);else if(r==="complex64")throw new Error("Cannot construct a complex64 tensor directly. Please use tf.complex(real, imag).");if(Pc(n)||Bc(n)){if(r!=="float32"&&r!=="int32")throw new Error(`Creating tensor from GPU data only supports 'float32'|'int32' dtype, while the dtype is ${r}.`);return v.backend.createTensorFromGPUData(n,e||t,r)}if(!ut(n)&&!Array.isArray(n)&&typeof n!="number"&&typeof n!="boolean"&&typeof n!="string")throw new Error("values passed to tensor(values) must be a number/boolean/string or an array of numbers/booleans/strings, or a TypedArray");if(e!=null){et(e);const a=P(e),s=P(t);w(a===s,()=>`Based on the provided shape, [${e}], the tensor should have ${a} values but has ${s}`);for(let i=0;i<t.length;++i){const u=t[i],c=i===t.length-1?u!==P(e.slice(i)):!0;w(t[i]===e[i]||!c,()=>`Error creating a new Tensor. Inferred shape (${t}) does not match the provided shape (${e}). `)}}return!ut(n)&&!Array.isArray(n)&&(n=[n]),e=e||t,n=r!=="string"?Fc(n,r):ir(n,[],!0),v.makeTensor(n,e,r)}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function mt(n,e,t){const r=Wt(n,t);return Ut(n,e,r,t)}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const on={float32:4,float16:2,int32:4,uint16:2,uint8:1,bool:1,complex64:8};class ht{static join(e){return new ht(e).slice()}constructor(e){if(this.shards=[],this.previousShardIndex=0,e==null||(e instanceof Array||(e=[e]),e=e.map(r=>ut(r)?r.buffer:r),e.length===0))return;this.bufferUniformSize=e[0].byteLength;let t=0;for(let r=0;r<e.length;r++){const a=e[r];r!==e.length-1&&a.byteLength!==this.bufferUniformSize&&(this.bufferUniformSize=void 0);const s=t+a.byteLength;this.shards.push({buffer:a,start:t,end:s}),t=s}this.shards.length===0&&(this.byteLength=0),this.byteLength=this.shards[this.shards.length-1].end}slice(e=0,t=this.byteLength){if(this.shards.length===0)return new ArrayBuffer(0);if(e=isNaN(Number(e))?0:e,t=isNaN(Number(t))?0:t,e=Math.max(0,e),t=Math.min(this.byteLength,t),t<=e)return new ArrayBuffer(0);const r=this.findShardForByte(e);if(r===-1)throw new Error(`Could not find start shard for byte ${e}`);const a=t-e,s=new ArrayBuffer(a),i=new Uint8Array(s);let u=0;for(let c=r;c<this.shards.length;c++){const l=this.shards[c],p=e+u-l.start,d=u,f=Math.min(t,l.end)-l.start,g=new Uint8Array(l.buffer,p,f-p);if(i.set(g,d),u+=g.length,t<l.end)break}return s}findShardForByte(e){if(this.shards.length===0||e<0||e>=this.byteLength)return-1;if(this.bufferUniformSize!=null)return this.previousShardIndex=Math.floor(e/this.bufferUniformSize),this.previousShardIndex;function t(a){return e<a.start?-1:e>=a.end?1:0}if(t(this.shards[this.previousShardIndex])===0)return this.previousShardIndex;const r=zh(this.shards,t);return r===-1?-1:(this.previousShardIndex=r,this.previousShardIndex)}}function zh(n,e){let t=0,r=n.length;for(;t<=r;){const a=Math.floor((r-t)/2)+t,s=e(n[a]);if(s===0)return a;s<0?r=a:t=a+1}return-1}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Wh(){return v}function ce(n,e){return v.tidy(n,e)}function Pe(n){Lc(n).forEach(t=>t.dispose())}function _t(n){return v.keep(n)}function Vh(n){return v.setBackend(n)}function Uh(){return v.ready()}function Hh(){return v.backendName}function jh(n,e,t=1){return v.registerBackend(n,e,t)}function Gh(){return v.backend}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Ht=4;async function qh(n,e){const t=[],r=[],a=Array.isArray(n)?n.map(i=>i.name):Object.keys(n);for(let i=0;i<a.length;++i){const u=a[i],c=Array.isArray(n)?n[i].tensor:n[u];if(c.dtype!=="float32"&&c.dtype!=="int32"&&c.dtype!=="bool"&&c.dtype!=="string"&&c.dtype!=="complex64")throw new Error(`Unsupported dtype in weight '${u}': ${c.dtype}`);const l={name:u,shape:c.shape,dtype:c.dtype};if(c.dtype==="string"){const o=new Promise(async p=>{const d=await c.bytes(),m=d.reduce((y,_)=>y+_.length,0)+Ht*d.length,f=new Uint8Array(m);let g=0;for(let y=0;y<d.length;y++){const _=d[y],S=new Uint8Array(new Uint32Array([_.length]).buffer);f.set(S,g),g+=Ht,f.set(_,g),g+=_.length}p(f)});r.push(o)}else r.push(c.data());e!=null&&(l.group=e),t.push(l)}const s=await Promise.all(r);return{data:Jh(s),specs:t}}function Gc(n,e){const t=new ht(n),r={};let a=0;for(const s of e){const i=Kh(s,(u,c)=>t.slice(a+u,a+c));r[s.name]=qc(s,t.slice(a,a+i)),a+=i}return r}function Kh(n,e){const t=P(n.shape);let r;if("quantization"in n){const a=n.quantization;r=on[a.dtype]}else if(n.dtype==="string"){let a=0;for(let s=0;s<t;s++)a+=Ht+new Uint32Array(e(a,a+Ht))[0];return a}else r=on[n.dtype];return t*r}async function Xh(n,e){const t=P(n.shape);let r;if("quantization"in n){const a=n.quantization;r=on[a.dtype]}else if(n.dtype==="string"){let a=0;for(let s=0;s<t;s++)a+=Ht+new Uint32Array(await e(a,a+Ht))[0];return a}else r=on[n.dtype];return t*r}function qc(n,e){const t=n.name,r=n.dtype,a=n.shape,s=P(a);let i,u=0;if("quantization"in n){const c=n.quantization;if(c.dtype==="uint8"||c.dtype==="uint16"){if(!("min"in c&&"scale"in c))throw new Error(`Weight ${n.name} with quantization ${c.dtype} doesn't have corresponding metadata min and scale.`)}else if(c.dtype==="float16"){if(r!=="float32")throw new Error(`Weight ${n.name} is quantized with ${c.dtype} which only supports weights of type float32 not ${r}.`)}else throw new Error(`Weight ${n.name} has unknown quantization dtype ${c.dtype}. Supported quantization dtypes are: 'uint8', 'uint16', and 'float16'.`);const l=on[c.dtype],o=c.dtype==="uint8"?new Uint8Array(e):new Uint16Array(e);if(r==="float32")if(c.dtype==="uint8"||c.dtype==="uint16"){i=new Float32Array(o.length);for(let p=0;p<o.length;p++){const d=o[p];i[p]=d*c.scale+c.min}}else if(c.dtype==="float16")i=rf()(o);else throw new Error(`Unsupported quantization type ${c.dtype} for weight type float32.`);else if(r==="int32"){if(c.dtype!=="uint8"&&c.dtype!=="uint16")throw new Error(`Unsupported quantization type ${c.dtype} for weight type int32.`);i=new Int32Array(o.length);for(let p=0;p<o.length;p++){const d=o[p];i[p]=Math.round(d*c.scale+c.min)}}else throw new Error(`Unsupported dtype in weight '${t}': ${r}`);u+=s*l}else if(r==="string"){const c=P(n.shape);i=[];for(let l=0;l<c;l++){const o=new Uint32Array(e.slice(u,u+Ht))[0];u+=Ht;const p=new Uint8Array(e.slice(u,u+o));i.push(p),u+=o}}else{const c=on[r];if(r==="float32")i=new Float32Array(e);else if(r==="int32")i=new Int32Array(e);else if(r==="bool")i=new Uint8Array(e);else if(r==="complex64"){i=new Float32Array(e);const l=new Float32Array(i.length/2),o=new Float32Array(i.length/2);for(let f=0;f<l.length;f++)l[f]=i[f*2],o[f]=i[f*2+1];const p=mt(l,a,"float32"),d=mt(o,a,"float32"),m=Vt(p,d);return p.dispose(),d.dispose(),m}else throw new Error(`Unsupported dtype in weight '${t}': ${r}`);u+=s*c}return mt(i,a,r)}async function Kc(n,e,t){let r=new Uint8Array(e);for(;r.byteLength<t;){const{done:a,value:s}=await n.read();if(a&&s==null){const u=t-r.byteLength;throw new Error(`Reader is done but ${u} bytes are still expected`)}const i=new Uint8Array(r.length+s.byteLength);i.set(r,0),i.set(new Uint8Array(s),r.length),r=i}return r.buffer}async function Xc(n,e){const t={},r=n.getReader();let a=new ArrayBuffer(0);for(const s of e){const i=await Xh(s,async(l,o)=>(a=await Kc(r,a,o),a.slice(l,o)));a=await Kc(r,a,i);const u=a.slice(0,i);a=a.slice(i);const c=qc(s,u);if(t[s.name]=c,Hh()==="webgpu"){const l=Gh();"uploadToGPU"in l&&P(c.shape)>=Z().get("WEBGPU_CPU_HANDOFF_SIZE_THRESHOLD")&&l.uploadToGPU(c.dataId)}}return t}function Jh(n){if(n===null)throw new Error(`Invalid input value: ${JSON.stringify(n)}`);let e=0;const t=[];n.forEach(s=>{if(e+=s.byteLength,t.push(s.byteLength===s.buffer.byteLength?s:new s.constructor(s)),!(s instanceof Float32Array||s instanceof Int32Array||s instanceof Uint8Array))throw new Error(`Unsupported TypedArray subtype: ${s.constructor.name}`)});const r=new Uint8Array(e);let a=0;return t.forEach(s=>{r.set(new Uint8Array(s.buffer),a),a+=s.byteLength}),r.buffer}const to=typeof Buffer<"u"&&(typeof Blob>"u"||typeof atob>"u"||typeof btoa>"u");function Jc(n){return to?Buffer.byteLength(n,"utf8"):new Blob([n]).size}function Yh(n){if(to)return Buffer.from(n).toString("base64");const e=new Uint8Array(n);let t="";for(let r=0,a=e.length;r<a;r++)t+=String.fromCharCode(e[r]);return btoa(t)}function Zh(n){if(to){const r=Buffer.from(n,"base64");return r.buffer.slice(r.byteOffset,r.byteOffset+r.byteLength)}const e=atob(n),t=new Uint8Array(e.length);for(let r=0;r<e.length;++r)t.set([e.charCodeAt(r)],r);return t.buffer}function Qh(n){return ht.join(n)}function Yc(n){const e="/";for(n=n.trim();n.endsWith(e);)n=n.slice(0,n.length-1);const t=n.split(e);return t[t.length-1]}function Zc(n,e){const t={modelTopology:n.modelTopology,format:n.format,generatedBy:n.generatedBy,convertedBy:n.convertedBy,weightsManifest:e};return n.signature!=null&&(t.signature=n.signature),n.userDefinedMetadata!=null&&(t.userDefinedMetadata=n.userDefinedMetadata),n.modelInitializer!=null&&(t.modelInitializer=n.modelInitializer),n.initializerSignature!=null&&(t.initializerSignature=n.initializerSignature),n.trainingConfig!=null&&(t.trainingConfig=n.trainingConfig),t}function Qc(n,e,t){const r={modelTopology:n.modelTopology,format:n.format,generatedBy:n.generatedBy,convertedBy:n.convertedBy};if(n.trainingConfig!=null&&(r.trainingConfig=n.trainingConfig),n.weightsManifest!=null){if(!e)throw new Error("modelJSON has weightsManifest but weightSpecs is null");if(!t)throw new Error("modelJSON has weightsManifest but weightData is null");r.weightSpecs=e,r.weightData=t}return n.signature!=null&&(r.signature=n.signature),n.userDefinedMetadata!=null&&(r.userDefinedMetadata=n.userDefinedMetadata),n.modelInitializer!=null&&(r.modelInitializer=n.modelInitializer),n.initializerSignature!=null&&(r.initializerSignature=n.initializerSignature),r}async function no(n,e){let t,r;return n.weightsManifest!=null&&([t,r]=await e(n.weightsManifest)),Qc(n,t,r)}function dr(n){if(n.modelTopology instanceof ArrayBuffer)throw new Error("Expected JSON model topology, received ArrayBuffer.");return{dateSaved:new Date,modelTopologyType:"JSON",modelTopologyBytes:n.modelTopology==null?0:Jc(JSON.stringify(n.modelTopology)),weightSpecsBytes:n.weightSpecs==null?0:Jc(JSON.stringify(n.weightSpecs)),weightDataBytes:n.weightData==null?0:new ht(n.weightData).byteLength}}function ro(n){const e=[];for(const t of n)e.push(...t.weights);return e}function ef(){const n=t=>{let r=t<<13,a=0;for(;!(r&8388608);)a-=8388608,r<<=1;return r&=-8388609,a+=947912704,r|a},e=new Uint32Array(2048);e[0]=0;for(let t=1;t<1024;t++)e[t]=n(t);for(let t=1024;t<2048;t++)e[t]=939524096+(t-1024<<13);return e}function tf(){const n=new Uint32Array(64);n[0]=0,n[31]=1199570944,n[32]=2147483648,n[63]=3347054592;for(let e=1;e<31;e++)n[e]=e<<23;for(let e=33;e<63;e++)n[e]=2147483648+(e-32<<23);return n}function nf(){const n=new Uint32Array(64);for(let e=0;e<64;e++)n[e]=1024;return n[0]=n[32]=0,n}function rf(){const n=ef(),e=tf(),t=nf();return r=>{const a=new ArrayBuffer(4*r.length),s=new Uint32Array(a);for(let i=0;i<r.length;i++){const u=r[i],c=n[t[u>>10]+(u&1023)]+e[u>>10];s[i]=c}return new Float32Array(a)}}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */class we{constructor(){this.saveRouters=[],this.loadRouters=[]}static getInstance(){return we.instance==null&&(we.instance=new we),we.instance}static registerSaveRouter(e){we.getInstance().saveRouters.push(e)}static registerLoadRouter(e){we.getInstance().loadRouters.push(e)}static getSaveHandlers(e){return we.getHandlers(e,"save")}static getLoadHandlers(e,t){return we.getHandlers(e,"load",t)}static getHandlers(e,t,r){const a=[];return(t==="load"?we.getInstance().loadRouters:we.getInstance().saveRouters).forEach(i=>{const u=i(e,r);u!==null&&a.push(u)}),a}}const sf=n=>we.registerSaveRouter(n),af=n=>we.registerLoadRouter(n),of=n=>we.getSaveHandlers(n),uf=(n,e)=>we.getLoadHandlers(n,e);/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const so="tensorflowjs",ao=1,un="models_store",jt="model_info_store";function el(){if(!Z().getBool("IS_BROWSER"))throw new Error("Failed to obtain IndexedDB factory because the current environmentis not a web browser.");const n=typeof window>"u"?self:window,e=n.indexedDB||n.mozIndexedDB||n.webkitIndexedDB||n.msIndexedDB||n.shimIndexedDB;if(e==null)throw new Error("The current browser does not appear to support IndexedDB.");return e}function oo(n){const e=n.result;e.createObjectStore(un,{keyPath:"modelPath"}),e.createObjectStore(jt,{keyPath:"modelPath"})}class cn{constructor(e){if(this.indexedDB=el(),e==null||!e)throw new Error("For IndexedDB, modelPath must not be null, undefined or empty.");this.modelPath=e}async save(e){if(e.modelTopology instanceof ArrayBuffer)throw new Error("BrowserLocalStorage.save() does not support saving model topology in binary formats yet.");return this.databaseAction(this.modelPath,e)}async load(){return this.databaseAction(this.modelPath)}databaseAction(e,t){return new Promise((r,a)=>{const s=this.indexedDB.open(so,ao);s.onupgradeneeded=()=>oo(s),s.onsuccess=()=>{const i=s.result;if(t==null){const u=i.transaction(un,"readonly"),l=u.objectStore(un).get(this.modelPath);l.onsuccess=()=>{if(l.result==null)return i.close(),a(new Error(`Cannot find model with path '${this.modelPath}' in IndexedDB.`));r(l.result.modelArtifacts)},l.onerror=o=>(i.close(),a(l.error)),u.oncomplete=()=>i.close()}else{t.weightData=ht.join(t.weightData);const u=dr(t),c=i.transaction(jt,"readwrite");let l=c.objectStore(jt),o;try{o=l.put({modelPath:this.modelPath,modelArtifactsInfo:u})}catch(d){return a(d)}let p;o.onsuccess=()=>{p=i.transaction(un,"readwrite");const d=p.objectStore(un);let m;try{m=d.put({modelPath:this.modelPath,modelArtifacts:t,modelArtifactsInfo:u})}catch(f){return a(f)}m.onsuccess=()=>r({modelArtifactsInfo:u}),m.onerror=f=>{l=c.objectStore(jt);const g=l.delete(this.modelPath);g.onsuccess=()=>(i.close(),a(m.error)),g.onerror=y=>(i.close(),a(m.error))}},o.onerror=d=>(i.close(),a(o.error)),c.oncomplete=()=>{p==null?i.close():p.oncomplete=()=>i.close()}}},s.onerror=i=>a(s.error)})}}cn.URL_SCHEME="indexeddb://";const tl=n=>Z().getBool("IS_BROWSER")&&!Array.isArray(n)&&n.startsWith(cn.URL_SCHEME)?cf(n.slice(cn.URL_SCHEME.length)):null;we.registerSaveRouter(tl),we.registerLoadRouter(tl);function cf(n){return new cn(n)}function lf(n){return n.startsWith(cn.URL_SCHEME)?n.slice(cn.URL_SCHEME.length):n}class pf{constructor(){this.indexedDB=el()}async listModels(){return new Promise((e,t)=>{const r=this.indexedDB.open(so,ao);r.onupgradeneeded=()=>oo(r),r.onsuccess=()=>{const a=r.result,s=a.transaction(jt,"readonly"),u=s.objectStore(jt).getAll();u.onsuccess=()=>{const c={};for(const l of u.result)c[l.modelPath]=l.modelArtifactsInfo;e(c)},u.onerror=c=>(a.close(),t(u.error)),s.oncomplete=()=>a.close()},r.onerror=a=>t(r.error)})}async removeModel(e){return e=lf(e),new Promise((t,r)=>{const a=this.indexedDB.open(so,ao);a.onupgradeneeded=()=>oo(a),a.onsuccess=()=>{const s=a.result,i=s.transaction(jt,"readwrite"),u=i.objectStore(jt),c=u.get(e);let l;c.onsuccess=()=>{if(c.result==null)return s.close(),r(new Error(`Cannot find model with path '${e}' in IndexedDB.`));{const o=u.delete(e),p=()=>{l=s.transaction(un,"readwrite");const m=l.objectStore(un).delete(e);m.onsuccess=()=>t(c.result.modelArtifactsInfo),m.onerror=f=>r(c.error)};o.onsuccess=p,o.onerror=d=>(p(),s.close(),r(c.error))}},c.onerror=o=>(s.close(),r(c.error)),i.oncomplete=()=>{l==null?s.close():l.oncomplete=()=>s.close()}},a.onerror=s=>r(a.error)})}}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const vt="/",Bn="tensorflowjs_models",nl="info",df="model_topology",mf="weight_specs",hf="weight_data",ff="model_metadata";function rl(n){return{info:[Bn,n,nl].join(vt),topology:[Bn,n,df].join(vt),weightSpecs:[Bn,n,mf].join(vt),weightData:[Bn,n,hf].join(vt),modelMetadata:[Bn,n,ff].join(vt)}}function sl(n){for(const e of Object.values(n))window.localStorage.removeItem(e)}function gf(n){const e=n.split(vt);if(e.length<3)throw new Error(`Invalid key format: ${n}`);return e.slice(1,e.length-1).join(vt)}function yf(n){return n.startsWith(ln.URL_SCHEME)?n.slice(ln.URL_SCHEME.length):n}class ln{constructor(e){if(!Z().getBool("IS_BROWSER")||typeof window>"u"||typeof window.localStorage>"u")throw new Error("The current environment does not support local storage.");if(this.LS=window.localStorage,e==null||!e)throw new Error("For local storage, modelPath must not be null, undefined or empty.");this.modelPath=e,this.keys=rl(this.modelPath)}async save(e){if(e.modelTopology instanceof ArrayBuffer)throw new Error("BrowserLocalStorage.save() does not support saving model topology in binary formats yet.");{const t=JSON.stringify(e.modelTopology),r=JSON.stringify(e.weightSpecs),a=dr(e),s=ht.join(e.weightData);try{this.LS.setItem(this.keys.info,JSON.stringify(a)),this.LS.setItem(this.keys.topology,t),this.LS.setItem(this.keys.weightSpecs,r),this.LS.setItem(this.keys.weightData,Yh(s));const i={format:e.format,generatedBy:e.generatedBy,convertedBy:e.convertedBy,signature:e.signature!=null?e.signature:void 0,userDefinedMetadata:e.userDefinedMetadata!=null?e.userDefinedMetadata:void 0,modelInitializer:e.modelInitializer!=null?e.modelInitializer:void 0,initializerSignature:e.initializerSignature!=null?e.initializerSignature:void 0,trainingConfig:e.trainingConfig!=null?e.trainingConfig:void 0};return this.LS.setItem(this.keys.modelMetadata,JSON.stringify(i)),{modelArtifactsInfo:a}}catch{throw sl(this.keys),new Error(`Failed to save model '${this.modelPath}' to local storage: size quota being exceeded is a possible cause of this failure: modelTopologyBytes=${a.modelTopologyBytes}, weightSpecsBytes=${a.weightSpecsBytes}, weightDataBytes=${a.weightDataBytes}.`)}}}async load(){const e=JSON.parse(this.LS.getItem(this.keys.info));if(e==null)throw new Error(`In local storage, there is no model with name '${this.modelPath}'`);if(e.modelTopologyType!=="JSON")throw new Error("BrowserLocalStorage does not support loading non-JSON model topology yet.");const t={},r=JSON.parse(this.LS.getItem(this.keys.topology));if(r==null)throw new Error(`In local storage, the topology of model '${this.modelPath}' is missing.`);t.modelTopology=r;const a=JSON.parse(this.LS.getItem(this.keys.weightSpecs));if(a==null)throw new Error(`In local storage, the weight specs of model '${this.modelPath}' are missing.`);t.weightSpecs=a;const s=this.LS.getItem(this.keys.modelMetadata);if(s!=null){const u=JSON.parse(s);t.format=u.format,t.generatedBy=u.generatedBy,t.convertedBy=u.convertedBy,u.signature!=null&&(t.signature=u.signature),u.userDefinedMetadata!=null&&(t.userDefinedMetadata=u.userDefinedMetadata),u.modelInitializer!=null&&(t.modelInitializer=u.modelInitializer),u.initializerSignature!=null&&(t.initializerSignature=u.initializerSignature),u.trainingConfig!=null&&(t.trainingConfig=u.trainingConfig)}const i=this.LS.getItem(this.keys.weightData);if(i==null)throw new Error(`In local storage, the binary weight values of model '${this.modelPath}' are missing.`);return t.weightData=Zh(i),t}}ln.URL_SCHEME="localstorage://";const al=n=>Z().getBool("IS_BROWSER")&&!Array.isArray(n)&&n.startsWith(ln.URL_SCHEME)?bf(n.slice(ln.URL_SCHEME.length)):null;we.registerSaveRouter(al),we.registerLoadRouter(al);function bf(n){return new ln(n)}class wf{constructor(){w(Z().getBool("IS_BROWSER"),()=>"Current environment is not a web browser"),w(typeof window>"u"||typeof window.localStorage<"u",()=>"Current browser does not appear to support localStorage"),this.LS=window.localStorage}async listModels(){const e={},t=Bn+vt,r=vt+nl;for(let a=0;a<this.LS.length;++a){const s=this.LS.key(a);if(s.startsWith(t)&&s.endsWith(r)){const i=gf(s);e[i]=JSON.parse(this.LS.getItem(s))}}return e}async removeModel(e){e=yf(e);const t=rl(e);if(this.LS.getItem(t.info)==null)throw new Error(`Cannot find model at path '${e}'`);const r=JSON.parse(this.LS.getItem(t.info));return sl(t),r}}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Pn="://";class Le{constructor(){this.managers={}}static getInstance(){return Le.instance==null&&(Le.instance=new Le),Le.instance}static registerManager(e,t){w(e!=null,()=>"scheme must not be undefined or null."),e.endsWith(Pn)&&(e=e.slice(0,e.indexOf(Pn))),w(e.length>0,()=>"scheme must not be an empty string.");const r=Le.getInstance();w(r.managers[e]==null,()=>`A model store manager is already registered for scheme '${e}'.`),r.managers[e]=t}static getManager(e){const t=Le.getInstance().managers[e];if(t==null)throw new Error(`Cannot find model manager for scheme '${e}'`);return t}static getSchemes(){return Object.keys(Le.getInstance().managers)}}function Kr(n){if(n.indexOf(Pn)===-1)throw new Error(`The url string provided does not contain a scheme. Supported schemes are: ${Le.getSchemes().join(",")}`);return{scheme:n.split(Pn)[0],path:n.split(Pn)[1]}}async function ol(n,e,t=!1){w(n!==e,()=>`Old path and new path are the same: '${n}'`);const r=we.getLoadHandlers(n);w(r.length>0,()=>`Copying failed because no load handler is found for source URL ${n}.`),w(r.length<2,()=>`Copying failed because more than one (${r.length}) load handlers for source URL ${n}.`);const a=r[0],s=we.getSaveHandlers(e);w(s.length>0,()=>`Copying failed because no save handler is found for destination URL ${e}.`),w(s.length<2,()=>`Copying failed because more than one (${r.length}) save handlers for destination URL ${e}.`);const i=s[0],u=Kr(n).scheme,c=Kr(n).path,l=u===Kr(n).scheme,o=await a.load();t&&l&&await Le.getManager(u).removeModel(c);const p=await i.save(o);return t&&!l&&await Le.getManager(u).removeModel(c),p.modelArtifactsInfo}async function _f(){const n=Le.getSchemes(),e={};for(const t of n){const r=await Le.getManager(t).listModels();for(const a in r){const s=t+Pn+a;e[s]=r[a]}}return e}async function If(n){const e=Kr(n);return Le.getManager(e.scheme).removeModel(e.path)}async function Nf(n,e){return ol(n,e,!1)}async function Sf(n,e){return ol(n,e,!0)}/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */class kf{constructor(){this.messageName="setTimeoutCustom",this.functionRefs=[],this.handledMessageCount=0,this.hasEventListener=!1}fetch(e,t){return fetch(e,t)}now(){return performance.now()}encode(e,t){if(t!=="utf-8"&&t!=="utf8")throw new Error(`Browser's encoder only supports utf-8, but got ${t}`);return this.textEncoder==null&&(this.textEncoder=new TextEncoder),this.textEncoder.encode(e)}decode(e,t){return new TextDecoder(t).decode(e)}setTimeoutCustom(e,t){if(typeof window>"u"||!Z().getBool("USE_SETTIMEOUTCUSTOM")){setTimeout(e,t);return}this.functionRefs.push(e),setTimeout(()=>{window.postMessage({name:this.messageName,index:this.functionRefs.length-1},"*")},t),this.hasEventListener||(this.hasEventListener=!0,window.addEventListener("message",r=>{if(r.source===window&&r.data.name===this.messageName){r.stopPropagation();const a=this.functionRefs[r.data.index];a(),this.handledMessageCount++,this.handledMessageCount===this.functionRefs.length&&(this.functionRefs=[],this.handledMessageCount=0)}},!0))}isTypedArray(e){return yc(e)}}if(Z().get("IS_BROWSER")){Z().setPlatform("browser",new kf);try{Le.registerManager(ln.URL_SCHEME,new wf)}catch{}try{Le.registerManager(cn.URL_SCHEME,new pf)}catch{}}/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const vf={importFetch:()=>require("node-fetch")};let io;class Tf{constructor(){this.util=require("util"),this.textEncoder=new this.util.TextEncoder}fetch(e,t){return Z().global.fetch!=null?Z().global.fetch(e,t):(io==null&&(io=vf.importFetch()),io(e,t))}now(){const e=process.hrtime();return e[0]*1e3+e[1]/1e6}encode(e,t){if(t!=="utf-8"&&t!=="utf8")throw new Error(`Node built-in encoder only supports utf-8, but got ${t}`);return this.textEncoder.encode(e)}decode(e,t){return e.length===0?"":new this.util.TextDecoder(t).decode(e)}isTypedArray(e){return this.util.types.isFloat32Array(e)||this.util.types.isInt32Array(e)||this.util.types.isUint8Array(e)||this.util.types.isUint8ClampedArray(e)}}Z().get("IS_NODE")&&!Z().get("IS_BROWSER")&&Z().setPlatform("node",new Tf);/**
 * @license
 * Copyright 2020 Google Inc. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function ft(n,e="float32",t){return e=e||"float32",et(n),new pr(n,e,t)}/**
 * @license
 * Copyright 2020 Google Inc. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function xf(n,e){const t=b(n,"x","cast");if(!Cm(e))throw new Error(`Failed to cast to unknown dtype ${e}`);if(e==="string"&&t.dtype!=="string"||e!=="string"&&t.dtype==="string")throw new Error("Only strings can be casted to strings");const r={x:t},a={dtype:e};return v.runKernel(Ys,r,a)}const ve=k({cast_:xf});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function $f(n){const t={x:b(n,"x","clone","string_or_numeric")};return v.runKernel(da,t)}const Gt=k({clone_:$f});/**
 * @license
 * Copyright 2020 Google Inc. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function il(n,e=!1){console.log(n.toString(e))}/**
 * @license
 * Copyright 2020 Google Inc. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */Vc(),Dh({buffer:ft,cast:ve,clone:Gt,print:il});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Ef(n,e){let t=b(n,"a","add"),r=b(e,"b","add");[t,r]=Ie(t,r);const a={a:t,b:r};return v.runKernel(Hs,a)}const X=k({add_:Ef});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Af(n,e){let t=b(n,"a","floorDiv"),r=b(e,"b","floorDiv");[t,r]=Ie(t,r);const a={a:t,b:r};return v.runKernel(uu,a)}const ul=k({floorDiv_:Af});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Df(n,e){let t=b(n,"a","div"),r=b(e,"b","div");if([t,r]=Ie(t,r),t.dtype==="int32"&&r.dtype==="int32")return ul(t,r);const a={a:t,b:r},s={};return v.runKernel(Zi,a,s)}const ge=k({div_:Df});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Ff(n,e){let t=b(n,"a","mul"),r=b(e,"b","mul");[t,r]=Ie(t,r);const a={a:t,b:r};return v.runKernel($u,a)}const z=k({mul_:Ff});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Of(n){const e=b(n,"x","abs");if(e.dtype==="complex64"){const t={x:e};return v.runKernel(qm,t)}else{const t={x:e};return v.runKernel(Ei,t)}}const tt=k({abs_:Of});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Cf(n){const t={x:b(n,"x","acos")};return v.runKernel(Ai,t)}const Rf=k({acos_:Cf});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Mf(n){const t={x:b(n,"x","acosh")};return v.runKernel(Di,t)}const Bf=k({acosh_:Mf});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Pf(n){w(Array.isArray(n),()=>"The argument passed to tf.addN() must be a list of tensors"),w(n.length>=1,()=>`Must pass at least one tensor to tf.addN(), but got ${n.length}`);const e=n.map((a,s)=>b(a,`tensors${s}`,"addN")),t=e[0];e.forEach(a=>{if(a.dtype!==t.dtype)throw new Error("All tensors passed to tf.addN() must have the same dtype")}),e.forEach(a=>{if(!St(a.shape,t.shape))throw new Error("All tensors passed to tf.addN() must have the same shape")});const r=e;return v.runKernel(js,r)}const Lf=k({addN_:Pf});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function zf(n,e=null,t=!1){const a={x:b(n,"x","all","bool")},s={axis:e,keepDims:t};return v.runKernel(Gs,a,s)}const Wf=k({all_:zf});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Vf(n,e=null,t=!1){const a={x:b(n,"x","any","bool")},s={axis:e,keepDims:t};return v.runKernel(qs,a,s)}const Uf=k({any_:Vf});/**
 * @license
 * Copyright 2020 Google Inc. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Hf(n,e=0){const r={x:b(n,"x","argMax")},a={axis:e};return v.runKernel(Fi,r,a)}const jf=k({argMax_:Hf});/**
 * @license
 * Copyright 2020 Google Inc. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Gf(n,e=0){const r={x:b(n,"x","argMin")},a={axis:e};return v.runKernel(Oi,r,a)}const qf=k({argMin_:Gf});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Kf(n){const t={x:b(n,"x","asin")};return v.runKernel(Ci,t)}const Xf=k({asin_:Kf});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Jf(n){const t={x:b(n,"x","asinh")};return v.runKernel(Ri,t)}const Yf=k({asinh_:Jf});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Zf(n){const t={x:b(n,"x","atan")};return v.runKernel(Mi,t)}const Qf=k({atan_:Zf});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function eg(n,e){let t=b(n,"a","atan2"),r=b(e,"b","atan2");[t,r]=Ie(t,r);const a={a:t,b:r};return v.runKernel(Pi,a)}const tg=k({atan2_:eg});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function ng(n){const t={x:b(n,"x","atanh")};return v.runKernel(Bi,t)}const rg=k({atanh_:ng});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function uo(n,e,t,r,a="NHWC",s){const i=n[3],u=[...e,i],c=lo(a);return Tt(n,u,t,s,r,null,null,c)}function Ln(n,e,t,r,a,s,i="channelsLast"){const[u,c]=mr(e);let l;if(i==="channelsLast")l=[u,c,n[3],n[3]];else if(i==="channelsFirst")l=[u,c,n[1],n[1]];else throw new Error(`Unknown dataFormat ${i}`);return Tt(n,l,t,r,a,s,!1,i)}function Xr(n,e,t,r,a,s,i="NDHWC"){const[u,c,l]=co(e);let o,p;if(i==="NDHWC")p="channelsLast",o=[u,c,l,n[4],n[4]];else if(i==="NCDHW")p="channelsFirst",o=[u,c,l,n[1],n[1]];else throw new Error(`Unknown dataFormat ${i}`);return Jr(n,o,t,r,a,!1,p,s)}function Tt(n,e,t,r,a,s,i=!1,u="channelsLast"){let[c,l,o,p]=[-1,-1,-1,-1];if(u==="channelsLast")[c,l,o,p]=n;else if(u==="channelsFirst")[c,p,l,o]=n;else throw new Error(`Unknown dataFormat ${u}`);const[d,m,,f]=e,[g,y]=mr(t),[_,S]=mr(r),I=zn(d,_),T=zn(m,S),{padInfo:$,outHeight:A,outWidth:F}=og(a,l,o,g,y,I,T,s,u),C=i?f*p:f;let M;return u==="channelsFirst"?M=[c,C,A,F]:u==="channelsLast"&&(M=[c,A,F,C]),{batchSize:c,dataFormat:u,inHeight:l,inWidth:o,inChannels:p,outHeight:A,outWidth:F,outChannels:C,padInfo:$,strideHeight:g,strideWidth:y,filterHeight:d,filterWidth:m,effectiveFilterHeight:I,effectiveFilterWidth:T,dilationHeight:_,dilationWidth:S,inShape:n,outShape:M,filterShape:e}}function Jr(n,e,t,r,a,s=!1,i="channelsLast",u){let[c,l,o,p,d]=[-1,-1,-1,-1,-1];if(i==="channelsLast")[c,l,o,p,d]=n;else if(i==="channelsFirst")[c,d,l,o,p]=n;else throw new Error(`Unknown dataFormat ${i}`);const[m,f,g,,y]=e,[_,S,I]=co(t),[T,$,A]=co(r),F=zn(m,T),C=zn(f,$),M=zn(g,A),{padInfo:B,outDepth:V,outHeight:j,outWidth:q}=ig(a,l,o,p,_,S,I,F,C,M,u),te=s?y*d:y;let J;return i==="channelsFirst"?J=[c,te,V,j,q]:i==="channelsLast"&&(J=[c,V,j,q,te]),{batchSize:c,dataFormat:i,inDepth:l,inHeight:o,inWidth:p,inChannels:d,outDepth:V,outHeight:j,outWidth:q,outChannels:te,padInfo:B,strideDepth:_,strideHeight:S,strideWidth:I,filterDepth:m,filterHeight:f,filterWidth:g,effectiveFilterDepth:F,effectiveFilterHeight:C,effectiveFilterWidth:M,dilationDepth:T,dilationHeight:$,dilationWidth:A,inShape:n,outShape:J,filterShape:e}}function sg(n,e,t,r,a){r==null&&(r=cl(n,e,t));const s=n[0],i=n[1],u=hr((s-e+2*r)/t+1,a),c=hr((i-e+2*r)/t+1,a);return[u,c]}function ag(n,e,t,r,a,s){a==null&&(a=cl(n,e[0],r[0]));const i=[0,0,0,t];for(let u=0;u<3;u++)n[u]+2*a>=e[u]&&(i[u]=hr((n[u]-e[u]+2*a)/r[u]+1,s));return i}function cl(n,e,t,r=1){const a=zn(e,r);return Math.floor((n[0]*(t-1)-t+a)/2)}function mr(n){return typeof n=="number"?[n,n,n]:n.length===2?[n[0],n[1],1]:n}function co(n){return typeof n=="number"?[n,n,n]:n}function zn(n,e){return e<=1?n:n+(n-1)*(e-1)}function og(n,e,t,r,a,s,i,u,c){let l,o,p;if(typeof n=="number"){l={top:n,bottom:n,left:n,right:n,type:n===0?"VALID":"NUMBER"};const m=sg([e,t],s,r,n,u);o=m[0],p=m[1]}else if(n==="same"){o=Math.ceil(e/r),p=Math.ceil(t/a);const d=Math.max(0,(o-1)*r+s-e),m=Math.max(0,(p-1)*a+i-t),f=Math.floor(d/2),g=d-f,y=Math.floor(m/2),_=m-y;l={top:f,bottom:g,left:y,right:_,type:"SAME"}}else if(n==="valid")l={top:0,bottom:0,left:0,right:0,type:"VALID"},o=Math.ceil((e-s+1)/r),p=Math.ceil((t-i+1)/a);else if(typeof n=="object"){const d=c==="channelsLast"?n[1][0]:n[2][0],m=c==="channelsLast"?n[1][1]:n[2][1],f=c==="channelsLast"?n[2][0]:n[3][0],g=c==="channelsLast"?n[2][1]:n[3][1];l={top:d,bottom:m,left:f,right:g,type:d===0&&m===0&&f===0&&g===0?"VALID":"EXPLICIT"},o=hr((e-s+d+m)/r+1,u),p=hr((t-i+f+g)/a+1,u)}else throw Error(`Unknown padding parameter: ${n}`);return{padInfo:l,outHeight:o,outWidth:p}}function ig(n,e,t,r,a,s,i,u,c,l,o){let p,d,m,f;if(n==="valid"&&(n=0),typeof n=="number"){p={top:n,bottom:n,left:n,right:n,front:n,back:n,type:n===0?"VALID":"NUMBER"};const y=ag([e,t,r,1],[u,c,l],1,[a,s,i],n,o);d=y[0],m=y[1],f=y[2]}else if(n==="same"){d=Math.ceil(e/a),m=Math.ceil(t/s),f=Math.ceil(r/i);const g=(d-1)*a+u-e,y=(m-1)*s+c-t,_=(f-1)*i+l-r,S=Math.floor(g/2),I=g-S,T=Math.floor(y/2),$=y-T,A=Math.floor(_/2),F=_-A;p={top:T,bottom:$,left:A,right:F,front:S,back:I,type:"SAME"}}else throw Error(`Unknown padding parameter: ${n}`);return{padInfo:p,outDepth:d,outHeight:m,outWidth:f}}function hr(n,e){if(!e)return Math.trunc(n);switch(e){case"round":return Math.round(n);case"ceil":return Math.ceil(n);case"floor":return Math.floor(n);default:throw new Error(`Unknown roundingMode ${e}`)}}function Yr(n){const[e,t,r]=mr(n);return e===1&&t===1&&r===1}function xt(n,e){return Yr(n)||Yr(e)}function Wn(n){return mr(n).every(e=>e>0)}function lo(n){if(n==="NHWC")return"channelsLast";if(n==="NCHW")return"channelsFirst";throw new Error(`Unknown dataFormat ${n}`)}function gt(n,e,t){if(t!=null){if(typeof e=="string")throw Error(`Error in ${n}: pad must be an integer when using dimRoundingMode ${t} but got pad ${e}.`);if(typeof e=="number")w(tr(e),()=>`Error in ${n}: pad must be an integer when using dimRoundingMode ${t} but got pad ${e}.`);else if(typeof e=="object")e.forEach(r=>{r.forEach(a=>{w(tr(a),()=>`Error in ${n}: pad must be an integer when using dimRoundingMode ${t} but got pad ${a}.`)})});else throw Error(`Error in ${n}: Unknown padding parameter: ${e}`)}}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function ug(n,e){const r={x:b(n,"x","reshape","string_or_numeric")},a={shape:e};return v.runKernel(Bu,r,a)}const D=k({reshape_:ug});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function cg(n,e,t,r,a){const s=b(n,"x","avgPool","float32"),i=1;w(xt(t,i),()=>`Error in avgPool: Either strides or dilations must be 1. Got strides ${t} and dilations '${i}'`);let u=s,c=!1;s.rank===3&&(c=!0,u=D(s,[1,s.shape[0],s.shape[1],s.shape[2]])),w(u.rank===4,()=>`Error in avgPool: x must be rank 4 but got rank ${u.rank}.`),gt("avgPool",r,a);const l={x:u},o={filterSize:e,strides:t,pad:r,dimRoundingMode:a};let p=v.runKernel(Ks,l,o);return p=ve(p,s.dtype),c?D(p,[p.shape[1],p.shape[2],p.shape[3]]):p}const ll=k({avgPool_:cg});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function lg(n,e,t,r,a,s="NDHWC"){const i=b(n,"x","avgPool3d","float32");let u=i,c=!1;i.rank===4&&(c=!0,u=D(i,[1,i.shape[0],i.shape[1],i.shape[2],i.shape[3]])),w(u.rank===5,()=>`Error in avgPool3d: x must be rank 5 but got rank ${u.rank}.`),w(s==="NDHWC",()=>`Error in avgPool3d: Only NDHWC is currently supported, but got dataFormat of ${s}`),w(typeof t=="number"&&t>0||Array.isArray(t)&&t[0]>0&&t[1]>0&&t[2]>0,()=>`Error in avgPool3d: Stride must be > 0, but got '${t}'`),gt("avgPool3d",r,a);const l={x:u},o={filterSize:e,strides:t,pad:r,dimRoundingMode:a,dataFormat:s};let p=v.runKernel(Li,l,o);return p=ve(p,u.dtype),c?D(p,[p.shape[1],p.shape[2],p.shape[3],p.shape[4]]):p}const pg=k({avgPool3d_:lg});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function dg(n,e=0){w(n.length>=1,()=>"Pass at least one tensor to concat");const t=qr(n,"tensors","concat","string_or_numeric");if(t[0].dtype==="complex64"&&t.forEach(s=>{if(s.dtype!=="complex64")throw new Error(`Cannot concatenate complex64 tensors with a tensor
          with dtype ${s.dtype}. `)}),t.length===1)return Gt(t[0]);const r=t,a={axis:e};return v.runKernel(Hi,r,a)}const ze=k({concat_:dg});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function mg(n,e,t=!1,r=!1){let a=b(n,"a","matMul"),s=b(e,"b","matMul");[a,s]=Ie(a,s);const i={a,b:s},u={transposeA:t,transposeB:r};return v.runKernel(Xs,i,u)}const le=k({matMul_:mg});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function hg(n){const t={x:b(n,"x","sigmoid","float32")};return v.runKernel(Xu,t)}const Vn=k({sigmoid_:hg});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function fg(n,e,t){const r=b(n,"x","slice","string_or_numeric");if(r.rank===0)throw new Error("Slicing scalar is not possible");const a={x:r},s={begin:e,size:t};return v.runKernel(ju,a,s)}const de=k({slice_:fg});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function gg(n){const t={x:b(n,"x","tanh","float32")};return v.runKernel(cc,t)}const po=k({tanh_:gg});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function yg(n,e,t,r,a,s){const i=b(n,"forgetBias","basicLSTMCell"),u=b(e,"lstmKernel","basicLSTMCell"),c=b(t,"lstmBias","basicLSTMCell"),l=b(r,"data","basicLSTMCell"),o=b(a,"c","basicLSTMCell"),p=b(s,"h","basicLSTMCell"),d=ze([l,p],1),m=le(d,u),f=X(m,c),g=f.shape[0],y=f.shape[1]/4,_=[g,y],S=de(f,[0,0],_),I=de(f,[0,y],_),T=de(f,[0,y*2],_),$=de(f,[0,y*3],_),A=X(z(Vn(S),po(I)),z(o,Vn(X(i,T)))),F=z(po(A),Vn($));return[A,F]}const bg=k({basicLSTMCell_:yg});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function wg(n,e,t){const r=b(n,"x","batchToSpaceND"),a=e.reduce((u,c)=>u*c);w(r.rank>=1+e.length,()=>`input rank is ${r.rank} but should be > than blockShape.length ${e.length}`),w(t.length===e.length,()=>`crops.length is ${t.length} but should be equal to blockShape.length  ${e.length}`),w(r.shape[0]%a===0,()=>`input tensor batch is ${r.shape[0]} but is not divisible by the product of the elements of blockShape ${e.join(" * ")} === ${a}`);const s={x:r},i={blockShape:e,crops:t};return v.runKernel(zi,s,i)}const pl=k({batchToSpaceND_:wg});function _g(n){let e;return n.rank===0||n.rank===1?e=D(n,[1,1,1,n.size]):n.rank===2?e=D(n,[1,1,n.shape[0],n.shape[1]]):n.rank===3?e=D(n,[1,n.shape[0],n.shape[1],n.shape[2]]):e=n,e}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Ig(n,e,t,r,a,s){s==null&&(s=.001);const i=b(n,"x","batchNorm"),u=b(e,"mean","batchNorm"),c=b(t,"variance","batchNorm");let l;a!=null&&(l=b(a,"scale","batchNorm"));let o;r!=null&&(o=b(r,"offset","batchNorm")),w(u.rank===c.rank,()=>"Batch normalization gradient requires mean and variance to have equal ranks."),w(o==null||u.rank===o.rank,()=>"Batch normalization gradient requires mean and offset to have equal ranks."),w(l==null||u.rank===l.rank,()=>"Batch normalization gradient requires mean and scale to have equal ranks.");const d={x:_g(i),scale:l,offset:o,mean:u,variance:c},m={varianceEpsilon:s},f=v.runKernel(la,d,m);return D(f,i.shape)}const Zr=k({batchNorm_:Ig});function Ng(n,e,t,r,a,s){const i=b(n,"x","batchNorm"),u=b(e,"mean","batchNorm"),c=b(t,"variance","batchNorm");let l;a!=null&&(l=b(a,"scale","batchNorm"));let o;return r!=null&&(o=b(r,"offset","batchNorm")),w(i.rank===2,()=>`Error in batchNorm2D: x must be rank 2 but got rank ${i.rank}.`),w(u.rank===2||u.rank===1,()=>`Error in batchNorm2D: mean must be rank 2 or rank 1 but got rank ${u.rank}.`),w(c.rank===2||c.rank===1,()=>`Error in batchNorm2D: variance must be rank 2 or rank 1 but got rank ${c.rank}.`),l!=null&&w(l.rank===2||l.rank===1,()=>`Error in batchNorm2D: scale must be rank 2 or rank 1 but got rank ${l.rank}.`),o!=null&&w(o.rank===2||o.rank===1,()=>`Error in batchNorm2D: offset must be rank 2 or rank 1 but got rank ${o.rank}.`),Zr(i,u,c,o,l,s)}const Sg=k({batchNorm2d_:Ng});function kg(n,e,t,r,a,s){const i=b(n,"x","batchNorm"),u=b(e,"mean","batchNorm"),c=b(t,"variance","batchNorm");let l;a!=null&&(l=b(a,"scale","batchNorm"));let o;return r!=null&&(o=b(r,"offset","batchNorm")),w(i.rank===3,()=>`Error in batchNorm3D: x must be rank 3 but got rank ${i.rank}.`),w(u.rank===3||u.rank===1,()=>`Error in batchNorm3D: mean must be rank 3 or rank 1 but got rank ${u.rank}.`),w(c.rank===3||c.rank===1,()=>`Error in batchNorm3D: variance must be rank 3 or rank 1 but got rank ${c.rank}.`),l!=null&&w(l.rank===3||l.rank===1,()=>`Error in batchNorm3D: scale must be rank 3 or rank 1 but got rank ${l.rank}.`),o!=null&&w(o.rank===3||o.rank===1,()=>`Error in batchNorm3D: offset must be rank 3 or rank 1 but got rank ${o.rank}.`),Zr(i,u,c,o,l,s)}const vg=k({batchNorm3d_:kg});function Tg(n,e,t,r,a,s){const i=b(n,"x","batchNorm"),u=b(e,"mean","batchNorm"),c=b(t,"variance","batchNorm");let l;a!=null&&(l=b(a,"scale","batchNorm"));let o;return r!=null&&(o=b(r,"offset","batchNorm")),w(i.rank===4,()=>`Error in batchNorm4D: x must be rank 4 but got rank ${i.rank}.`),w(u.rank===4||u.rank===1,()=>`Error in batchNorm4D: mean must be rank 4 or rank 1 but got rank ${u.rank}.`),w(c.rank===4||c.rank===1,()=>`Error in batchNorm4D: variance must be rank 4 or rank 1 but got rank ${c.rank}.`),l!=null&&w(l.rank===4||l.rank===1,()=>`Error in batchNorm4D: scale must be rank 4 or rank 1 but got rank ${l.rank}.`),o!=null&&w(o.rank===4||o.rank===1,()=>`Error in batchNorm4D: offset must be rank 4 or rank 1 but got rank ${o.rank}.`),Zr(i,u,c,o,l,s)}const xg=k({batchNorm4d_:Tg});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function $g(n,e,t){const r=b(n,"x","bincount"),a=b(e,"weights","bincount");w(r.dtype==="int32",()=>`Error in bincount: input dtype must be int32, but got ${r.dtype}`),w(t>=0,()=>`size must be non-negative, but got ${t}.`),w(a.size===r.size||a.size===0,()=>`Error in bincount: weights must have the same size as input or0-length, but got input shape: ${r.shape}, weights shape: ${a.shape}.`);const s={x:r,weights:a},i={size:t};return v.runKernel(Js,s,i)}const dl=k({bincount_:$g});/**
 * @license
 * Copyright 2023 Google LLC.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Eg(n,e){const t=b(n,"x","bitwiseAnd"),r=b(e,"y","bitwiseAnd");if(!St(t.shape,r.shape))throw new Error(`BitwiseAnd: Tensors must have the same shape. x: ${t.shape}, y: ${r.shape}`);if(t.dtype!=="int32"||r.dtype!=="int32")throw new Error(`BitwiseAnd: Only supports 'int32' values in tensor, found type of x: ${t.dtype} and type of y: ${r.dtype}`);const a={a:t,b:r};return v.runKernel(Wi,a)}const Ag=k({bitwiseAnd_:Eg});/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Dg(n,e){const t=b(n,"s0","broadcastArgs","int32"),r=b(e,"s1","broadcastArgs","int32");if(t.rank!==1)throw new Error(`broadcastArgs(): first input must be a vector (rank=1). Has rank ${t.rank}`);if(r.rank!==1)throw new Error(`broadcastArgs(): second input must be a vector (rank=1). Has rank ${r.rank}`);const a={s0:t,s1:r};return v.runKernel(Vi,a)}const Fg=k({broadcastArgs_:Dg});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Og(n,e){let t=b(n,"broadcastTo","x");const r=t.shape;if(et(e),e.length<t.rank)throw new Error(`broadcastTo(): shape.length=${e.length} < input.rank=${t.rank}.`);if(e.length>t.rank){const l=t.shape.slice();for(;l.length<e.length;)l.unshift(1);t=D(t,l)}const a=t.shape,s=Array.from(e);for(let l=e.length-1;l>=0;l--)if(a[l]===e[l])s[l]=1;else if(t.shape[l]!==1)throw new Error(`broadcastTo(): [${r}] cannot be broadcast to [${e}].`);if(s.map((l,o)=>l>1?o:-1).filter(l=>l>=0).length===0)return Gt(t);const u={x:t},c={reps:s};return v.runKernel(Br,u,c)}const Qr=k({broadcastTo_:Og});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Cg(n){const t={x:b(n,"x","ceil","float32")};return v.runKernel(Ui,t)}const Rg=k({ceil_:Cg});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function fr(n,e,t){et(n),t=t||rr(e);const r={shape:n,value:e,dtype:t};return v.runKernel(ou,{},r)}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Mg(n,e,t){const r=b(n,"x","clipByValue");if(w(e<=t,()=>`Error in clip: min (${e}) must be less than or equal to max (${t}).`),e===t)return fr(r.shape,e,r.dtype);const a={x:r},s={clipValueMin:e,clipValueMax:t};return v.runKernel(Zs,a,s)}const Bg=k({clipByValue_:Mg});function Pg(n){return ze(n,0)}const Lg=k({concat1d_:Pg});function zg(n,e){return ze(n,e)}const Wg=k({concat2d_:zg});function Vg(n,e){return ze(n,e)}const Ug=k({concat3d_:Vg});function Hg(n,e){return ze(n,e)}const jg=k({concat4d_:Hg});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Gg(n,e,t,r,a="NHWC",s=[1,1],i){const u=b(n,"x","conv2d","float32"),c=b(e,"filter","conv2d","float32");let l=u,o=!1;u.rank===3&&(o=!0,l=D(u,[1,u.shape[0],u.shape[1],u.shape[2]])),w(l.rank===4,()=>`Error in conv2d: input must be rank 4, but got rank ${l.rank}.`),w(c.rank===4,()=>`Error in conv2d: filter must be rank 4, but got rank ${c.rank}.`),gt("conv2d",r,i);const p=a==="NHWC"?l.shape[3]:l.shape[1];w(p===c.shape[2],()=>`Error in conv2d: depth of input (${p}) must match input depth for filter ${c.shape[2]}.`),w(xt(t,s),()=>`Error in conv2D: Either strides or dilations must be 1. Got strides ${t} and dilations '${s}'`),w(Wn(s),()=>"Error in conv2D: Dilated rates should be larger than 0."),w(Wn(t),()=>"Error in conv2D: Strides should be larger than 0.");const d={x:l,filter:c},m={strides:t,pad:r,dataFormat:a,dilations:s,dimRoundingMode:i},f=v.runKernel(Qs,d,m);return o?D(f,[f.shape[1],f.shape[2],f.shape[3]]):f}const es=k({conv2d_:Gg});function qg(n,e,t,r,a="NWC",s=1,i){const u=b(n,"x","conv1d"),c=b(e,"filter","conv1d");let l=u,o=!1;u.rank===2&&(o=!0,l=D(u,[1,u.shape[0],u.shape[1]])),w(l.rank===3,()=>`Error in conv1d: input must be rank 3, but got rank ${l.rank}.`),w(c.rank===3,()=>`Error in conv1d: filter must be rank 3, but got rank ${c.rank}.`),gt("conv1d",r,i),w(l.shape[2]===c.shape[1],()=>`Error in conv1d: depth of input (${l.shape[2]}) must match input depth for filter ${c.shape[1]}.`),w(xt(t,s),()=>`Error in conv1D: Either stride or dilation must be 1. Got stride ${t} and dilation '${s}'`),w(Wn(s),()=>"Error in conv1D: Dilated rates should be larger than 0."),w(Wn(t),()=>"Error in conv1D: Stride should be larger than 0."),w(a==="NWC",()=>`Error in conv1d: got dataFormat of ${a} but only NWC is currently supported.`);const p=D(c,[1,c.shape[0],c.shape[1],c.shape[2]]),d=D(l,[l.shape[0],1,l.shape[1],l.shape[2]]),y=es(d,p,[1,t],r,"NHWC",[1,s],i);return o?D(y,[y.shape[2],y.shape[3]]):D(y,[y.shape[0],y.shape[2],y.shape[3]])}const Kg=k({conv1d_:qg});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Xg(n,e,t,r,a,s="NHWC",i){w(n.length===e.rank,()=>`Length of inShape (${n.length}) and rank of dy (${e.rank}) must match`);let u=n,c=e,l=!1;e.rank===3&&(l=!0,c=D(e,[1,e.shape[0],e.shape[1],e.shape[2]]),u=[1,n[0],n[1],n[2]]),w(u.length===4,()=>`Error in conv2dDerInput: inShape must be length 4, but got length ${u.length}.`),w(c.rank===4,()=>`Error in conv2dDerInput: dy must be rank 4, but got rank ${c.rank}`),w(t.rank===4,()=>`Error in conv2dDerInput: filter must be rank 4, but got rank ${t.rank}`);const o=s==="NHWC"?u[3]:u[1],p=s==="NHWC"?c.shape[3]:c.shape[1];w(o===t.shape[2],()=>`Error in conv2dDerInput: depth of input (${o}) must match input depth for filter ${t.shape[2]}.`),w(p===t.shape[3],()=>`Error in conv2dDerInput: depth of output (${p}) must match output depth for filter ${t.shape[3]}.`),gt("conv2dDerInput",a,i);const d={dy:c,filter:t},m={strides:r,pad:a,dataFormat:s,dimRoundingMode:i,inputShape:u},f=v.runKernel(ea,d,m);return l?D(f,[f.shape[1],f.shape[2],f.shape[3]]):f}const ml=k({conv2DBackpropInput_:Xg});function Jg(n,e,t,r,a,s){const i=b(n,"x","conv2dTranspose"),u=b(e,"filter","conv2dTranspose");return ml(t,i,u,r,a,"NHWC",s)}const Yg=k({conv2dTranspose_:Jg});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Zg(n,e,t,r,a="NDHWC",s=[1,1,1]){const i=b(n,"x","conv3d"),u=b(e,"filter","conv3d");let c=i,l=!1;i.rank===4&&(l=!0,c=D(i,[1,i.shape[0],i.shape[1],i.shape[2],i.shape[3]])),w(c.rank===5,()=>`Error in conv3d: input must be rank 5, but got rank ${c.rank}.`),w(u.rank===5,()=>`Error in conv3d: filter must be rank 5, but got rank ${u.rank}.`),w(c.shape[4]===u.shape[3],()=>`Error in conv3d: depth of input (${c.shape[4]}) must match input depth for filter ${u.shape[3]}.`),w(xt(t,s),()=>`Error in conv3D: Either strides or dilations must be 1. Got strides ${t} and dilations '${s}'`),w(a==="NDHWC",()=>`Error in conv3d: got dataFormat of ${a} but only NDHWC is currently supported.`),w(Wn(s),()=>"Error in conv3D: Dilated rates should be larger than 0."),w(Wn(t),()=>"Error in conv3D: Strides should be larger than 0.");const o={x:c,filter:u},p={strides:t,pad:r,dataFormat:a,dilations:s},d=v.runKernel(ta,o,p);return l?D(d,[d.shape[1],d.shape[2],d.shape[3],d.shape[4]]):d}const Qg=k({conv3d_:Zg});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function ey(n,e,t,r,a){w(n.length===e.rank,()=>`Length of inShape (${n.length}) and rank of dy (${e.rank}) must match`);let s=n,i=e,u=!1;e.rank===4&&(u=!0,i=D(e,[1,e.shape[0],e.shape[1],e.shape[2],e.shape[3]]),s=[1,n[0],n[1],n[2],n[3]]);const c=s[4],l=i.shape[4];w(s.length===5,()=>`Error in conv3dDerInput: inShape must be length 5, but got length ${s.length}.`),w(i.rank===5,()=>`Error in conv3dDerInput: dy must be rank 5, but got rank ${i.rank}`),w(t.rank===5,()=>`Error in conv3dDerInput: filter must be rank 5, but got rank ${t.rank}`),w(c===t.shape[3],()=>`Error in conv3dDerInput: depth of input (${c}) must match input depth for filter ${t.shape[3]}.`),w(l===t.shape[4],()=>`Error in conv3dDerInput: depth of output (${l}) must match output depth for filter ${t.shape[4]}.`);const o={dy:i,filter:t},p={pad:a,strides:r,inputShape:s},d=v.runKernel(na,o,p);return u?D(d,[d.shape[1],d.shape[2],d.shape[3],d.shape[4]]):d}const ty=k({conv3DBackpropInput_:ey});function ny(n,e,t,r,a){const s=b(n,"x","conv3dTranspose"),i=b(e,"filter","conv3dTranspose");return ty(t,s,i,r,a)}const ry=k({conv3dTranspose_:ny});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function sy(n){const t={x:b(n,"x","cos","float32")};return v.runKernel(Gi,t)}const ay=k({cos_:sy});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function oy(n){const t={x:b(n,"x","cosh","float32")};return v.runKernel(qi,t)}const iy=k({cosh_:oy});/**
 * @license
 * Copyright 2022 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function uy(n,e=0,t=!1,r=!1){const s={x:b(n,"x","cumprod")},i={axis:e,exclusive:t,reverse:r};return v.runKernel(ra,s,i)}const cy=k({cumprod_:uy});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function ly(n,e=0,t=!1,r=!1){const s={x:b(n,"x","cumsum")},i={axis:e,exclusive:t,reverse:r};return v.runKernel(sa,s,i)}const py=k({cumsum_:ly});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function dy(n,e,t,r=!1){const a=b(n,"x","denseBincount"),s=b(e,"weights","denseBincount");w(a.dtype==="int32",()=>`Error in denseBincount: input dtype must be int32, but got ${a.dtype}`),w(a.rank<=2,()=>`Error in denseBincount: input must be at most rank 2, but got rank ${a.rank}.`),w(t>=0,()=>`size must be non-negative, but got ${t}.`),w(s.size===a.size||s.size===0,()=>`Error in denseBincount: weights must have the same shape as x or 0-length, but got x shape: ${a.shape}, weights shape: ${s.shape}.`);const i={x:a,weights:s},u={size:t,binaryOutput:r};return v.runKernel(Ki,i,u)}const my=k({denseBincount_:dy});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function hy(n,e,t="NHWC"){const r=b(n,"x","depthToSpace","float32"),a=t==="NHWC"?r.shape[1]:r.shape[2],s=t==="NHWC"?r.shape[2]:r.shape[3],i=t==="NHWC"?r.shape[3]:r.shape[1];w(e>1,()=>`blockSize should be > 1 for depthToSpace, but was: ${e}`),w(a*e>=0,()=>`Negative dimension size caused by overflow when multiplying
    ${a} and ${e}  for depthToSpace with input shape
    ${r.shape}`),w(s*e>=0,()=>`Negative dimension size caused by overflow when multiplying
    ${s} and ${e} for depthToSpace with input shape
        ${r.shape}`),w(i%(e*e)===0,()=>`Dimension size must be evenly divisible by ${e*e} but is ${i} for depthToSpace with input shape ${r.shape}`);const u={x:r},c={blockSize:e,dataFormat:t};return v.runKernel(oa,u,c)}const fy=k({depthToSpace_:hy});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function gy(n,e,t,r,a="NHWC",s=[1,1],i){const u=b(n,"x","depthwiseConv2d","float32"),c=b(e,"filter","depthwiseConv2d","float32");let l=u,o=!1;u.rank===3&&(o=!0,l=D(u,[1,u.shape[0],u.shape[1],u.shape[2]])),w(l.rank===4,()=>`Error in depthwiseConv2d: input must be rank 4, but got rank ${l.rank}.`),w(c.rank===4,()=>`Error in depthwiseConv2d: filter must be rank 4, but got rank ${c.rank}.`);const p=a==="NHWC"?l.shape[3]:l.shape[1];w(p===c.shape[2],()=>`Error in depthwiseConv2d: number of input channels (${p}) must match the inChannels dimension in filter ${c.shape[2]}.`),gt("depthwiseConv2d",r,i);const d={x:l,filter:c},m={strides:t,pad:r,dataFormat:a,dilations:s,dimRoundingMode:i},f=v.runKernel(ia,d,m);return o?D(f,[f.shape[1],f.shape[2],f.shape[3]]):f}const mo=k({depthwiseConv2d_:gy});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function yy(n){const t={x:b(n,"x","diag")};return v.runKernel(Xi,t)}const by=k({diag_:yy});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function wy(n,e,t,r,a=[1,1],s="NHWC"){const i=b(n,"x","dilation2d"),u=b(e,"filter","dilation2d");w(i.rank===3||i.rank===4,()=>`Error in dilation2d: input must be rank 3 or 4, but got rank ${i.rank}.`),w(u.rank===3,()=>`Error in dilation2d: filter must be rank 3, but got rank ${u.rank}.`),w(s==="NHWC",()=>`Error in dilation2d: Only NHWC is currently supported, but got dataFormat of ${s}`);let c=i,l=!1;i.rank===3&&(c=D(i,[1,i.shape[0],i.shape[1],i.shape[2]]),l=!0),w(c.shape[3]===u.shape[2],()=>`Error in dilation2d:  input and filter must have the same depth: ${c.shape[3]} vs ${u.shape[2]}`);const o={x:c,filter:u},p={strides:t,pad:r,dilations:a},d=v.runKernel(ua,o,p);return l?D(d,[d.shape[1],d.shape[2],d.shape[3]]):d}const _y=k({dilation2d_:wy});/**
 * @license
 * Copyright 2017 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Iy(n,e){const t=[];for(let r=0;r<e.length;r++){const a=n[n.length-r-1],s=e.length-r-1,i=e[s];(a==null||a===1&&i>1)&&t.unshift(s)}return t}function Ne(n,e){const t=Math.max(n.length,e.length),r=new Array(t);for(let a=0;a<t;a++){let s=n[n.length-a-1];s==null&&(s=1);let i=e[e.length-a-1];if(i==null&&(i=1),s===1)r[t-a-1]=i;else if(i===1)r[t-a-1]=s;else if(s!==i){const u=`Operands could not be broadcast together with shapes ${n} and ${e}.`;throw Error(u)}else r[t-a-1]=s}return r}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Ny(n,e){let t=b(n,"a","equal","string_or_numeric"),r=b(e,"b","equal","string_or_numeric");[t,r]=Ie(t,r),Ne(t.shape,r.shape);const a={a:t,b:r};return v.runKernel(nu,a)}const hl=k({equal_:Ny});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Sy(n,e,t){const r=b(e,"a","where"),a=b(t,"b","where"),s=b(n,"condition","where","bool"),i=Ne(Ne(s.shape,r.shape),a.shape),u=Qr(s,i),c=Qr(r,i),l=Qr(a,i),o={condition:u,t:c,e:l};return v.runKernel(Uu,o)}const qt=k({where_:Sy});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function ky(n){const t={x:b(n,"x","zerosLike")};return v.runKernel(dc,t)}const nt=k({zerosLike_:ky});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function vy(n,e){let t=b(n,"a","div"),r=b(e,"b","div");[t,r]=Ie(t,r);const a=ge(t,r),s=nt(a),i=hl(r,s);return qt(i,s,a)}const Ty=k({divNoNan_:vy});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function xy(n,e){const t=b(n,"t1","dot"),r=b(e,"t2","dot");w((t.rank===1||t.rank===2)&&(r.rank===1||r.rank===2),()=>`Error in dot: inputs must all be rank 1 or 2, but got ranks ${t.rank} and ${r.rank}.`);const a=t.rank===1?t.size:t.shape[1],s=r.rank===1?r.size:r.shape[0];if(w(a===s,()=>`Error in dot: inner dimensions of inputs must match, but got ${a} and ${s}.`),t.rank===1&&r.rank===1){const i=D(t,[1,-1]),u=D(r,[-1,1]),c=le(i,u);return D(c,[])}else if(t.rank===1&&r.rank===2){const i=D(t,[1,-1]),u=D(r,[r.shape[0],r.shape[1]]),c=le(i,u);return D(c,[c.size])}else if(t.rank===2&&r.rank===1){const i=D(r,[-1,1]),u=le(t,i);return D(u,[u.size])}else{const i=D(r,[r.shape[0],r.shape[1]]);return le(t,i)}}const $y=k({dot_:xy});/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Ey(n,...e){const t=e.map((a,s)=>b(a,`tensors${s}`,"einsum")),r={equation:n};return v.runKernel(Ym,t,r)}const Un=k({einsum_:Ey});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Ay(n){const t={x:b(n,"x","elu","float32")};return v.runKernel(Qi,t)}const fl=k({elu_:Ay});/**
 * @license
 * Copyright 2023 Google LLC.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Dy(n,e){const t=b(n,"x","ensureShape","string_or_numeric");if(!Em(t.shape,e))throw new Error(`EnsureShape: Shape of tensor ${t.shape} is not compatible with expected shape ${e}`);return n}const Fy=k({ensureShape_:Dy});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Oy(n){let e=b(n,"x","erf");w(e.dtype==="int32"||e.dtype==="float32",()=>"Input dtype must be `int32` or `float32`."),e.dtype==="int32"&&(e=ve(e,"float32"));const t={x:e};return v.runKernel(tu,t)}const Cy=k({erf_:Oy});/**
 * @license
 * Copyright 2017 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function gl(n,e){for(let t=0;t<n.length;++t)if(n[n.length-t-1]!==e-1-t)return!1;return!0}function Ry(n,e,t){const r=n.length+e.length,a=[];let s=0,i=0;for(let u=0;u<r;u++)t.indexOf(u)===-1?a.push(n[s++]):a.push(e[i++]);return a}function pn(n,e){const t=[],r=n.length;for(let s=0;s<r;s++)e.indexOf(s)===-1&&t.push(n[s]);const a=e.map(s=>n[s]);return[t,a]}function yt(n,e){const t=e.map(r=>1);return Ry(n,t,e)}function $t(n,e,t){w(gl(e,t),()=>`${n} supports only inner-most axes for now. Got axes ${e} and rank-${t} input.`)}function ho(n,e){if(gl(n,e))return null;const t=[];for(let r=0;r<e;++r)n.indexOf(r)===-1&&t.push(r);return n.forEach(r=>t.push(r)),t}function yl(n){return n.map((e,t)=>[t,e]).sort((e,t)=>e[1]-t[1]).map(e=>e[0])}function Hn(n,e){const t=[];for(let r=e-n;r<e;++r)t.push(r);return t}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function My(n,e=null,t=!1){const a={x:b(n,"x","max")},s={reductionIndices:e,keepDims:t};return v.runKernel(ga,a,s)}const jn=k({max_:My});/**
 * @license
 * Copyright 2020 Google Inc. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function By(n,e=null,t=!1){const a={x:b(n,"x","min")},s={axis:e,keepDims:t};return v.runKernel(wa,a,s)}const fo=k({min_:By});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Py(n,e){let t=b(n,"base","pow"),r=b(e,"exp","pow");[t,r]=Ie(t,r);const a={a:t,b:r};return v.runKernel(Ou,a)}const gr=k({pow_:Py});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function oe(n,e){if((ut(n)&&e!=="string"||Array.isArray(n))&&e!=="complex64")throw new Error("Error creating a new Scalar: value must be a primitive (number|boolean|string)");if(e==="string"&&ut(n)&&!(n instanceof Uint8Array))throw new Error("When making a scalar from encoded string, the value must be `Uint8Array`.");return Ut(n,[],[],e)}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Ly(n){const t={x:b(n,"x","sqrt","float32")};return v.runKernel(Yu,t)}const Et=k({sqrt_:Ly});/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function zy(n){const e=b(n,"x","square"),t={};return v.runKernel("Square",{x:e},t)}const bt=k({square_:zy});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Wy(n,e=null,t=!1){let r=b(n,"x","sum");r.dtype==="bool"&&(r=ve(r,"int32"));const a={x:r},s={axis:e,keepDims:t};return v.runKernel(Ra,a,s)}const ye=k({sum_:Wy});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Vy(n,e="euclidean",t=null,r=!1){n=b(n,"x","norm");const a=bl(n,e,t);let s=a.shape;if(r){const i=wt(t,n.shape);s=yt(a.shape,i)}return D(a,s)}function bl(n,e,t=null){if(n.rank===0)return tt(n);if(n.rank!==1&&t===null)return bl(D(n,[-1]),e,t);if(n.rank===1||typeof t=="number"||Array.isArray(t)&&t.length===1){if(e===1)return ye(tt(n),t);if(e===1/0)return jn(tt(n),t);if(e===-1/0)return fo(tt(n),t);if(e==="euclidean"||e===2)return Et(ye(gr(tt(n),oe(2,"int32")),t));throw new Error(`Error in norm: invalid ord value: ${e}`)}if(Array.isArray(t)&&t.length===2){if(e===1)return jn(ye(tt(n),t[0]),t[1]-1);if(e===1/0)return jn(ye(tt(n),t[1]),t[0]);if(e===-1/0)return fo(ye(tt(n),t[1]),t[0]);if(e==="fro"||e==="euclidean")return Et(ye(bt(n),t));throw new Error(`Error in norm: invalid ord value: ${e}`)}throw new Error(`Error in norm: invalid axis: ${t}`)}const ts=k({norm_:Vy});/**
 * @license
 * Copyright 2022 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Uy(n,e=null,t=!1){return ts(n,"euclidean",e,t)}const Hy=k({euclideanNorm_:Uy});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function jy(n){const t={x:b(n,"x","exp")};return v.runKernel(ru,t)}const dn=k({exp_:jy});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Gy(n,e=0){const t=b(n,"x","expandDims","string_or_numeric");w(e<=t.rank,()=>"Axis must be <= rank of the tensor");const r={input:t},a={dim:e};return v.runKernel(su,r,a)}const Kt=k({expandDims_:Gy});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function qy(n){const t={x:b(n,"x","expm1")};return v.runKernel(au,t)}const Ky=k({expm1_:qy});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Xy(n,e){const t=b(n,"x","tile","string_or_numeric");w(t.rank===e.length,()=>`Error in transpose: rank of input ${t.rank} must match length of reps ${e}.`);const r={x:t},a={reps:e};return v.runKernel(Br,r,a)}const yr=k({tile_:Xy});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Jy(n,e,t,r="float32"){e==null&&(e=n);const a=ft([n,e],r),s=n<=e?n:e;for(let u=0;u<s;++u)a.set(1,u,u);const i=D(a.toTensor(),[n,e]);if(t==null)return i;if(t.length===1)return yr(Kt(i,0),[t[0],1,1]);if(t.length===2)return yr(Kt(Kt(i,0),0),[t[0],t[1],1,1]);if(t.length===3)return yr(Kt(Kt(Kt(i,0),0),0),[t[0],t[1],t[2],1,1]);throw new Error(`eye() currently supports only 1D and 2D batchShapes, but received ${t.length}D.`)}const wl=k({eye_:Jy});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Yy(n){const t={x:b(n,"x","floor","float32")};return v.runKernel(iu,t)}const _l=k({floor_:Yy});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Zy(n,e,t=0,r=0){const a=b(n,"x","gather"),s=b(e,"indices","gather","int32"),i={x:a,indices:s},u={axis:t,batchDims:r};return v.runKernel(cu,i,u)}const Il=k({gather_:Zy});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Qy(n,e){let t=b(n,"a","greater","string_or_numeric"),r=b(e,"b","greater","string_or_numeric");[t,r]=Ie(t,r),Ne(t.shape,r.shape);const a={a:t,b:r};return v.runKernel(lu,a)}const ns=k({greater_:Qy});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function eb(n,e){let t=b(n,"a","greaterEqual","string_or_numeric"),r=b(e,"b","greaterEqual","string_or_numeric");[t,r]=Ie(t,r),Ne(t.shape,r.shape);const a={a:t,b:r};return v.runKernel(pu,a)}const Nl=k({greaterEqual_:eb});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function tb(n){const t={input:b(n,"input","imag")};return v.runKernel(eh,t)}const rs=k({imag_:tb});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function nb(n){const t={x:b(n,"x","isFinite")};return v.runKernel(du,t)}const rb=k({isFinite_:nb});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function sb(n){const t={x:b(n,"x","isInf")};return v.runKernel(mu,t)}const ab=k({isInf_:sb});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function ob(n){const t={x:b(n,"x","isNaN")};return v.runKernel(hu,t)}const ib=k({isNaN_:ob});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function ub(n,e=.2){const r={x:b(n,"x","leakyRelu")},a={alpha:e};return v.runKernel(ma,r,a)}const Sl=k({leakyRelu_:ub});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function cb(n,e){let t=b(n,"a","less","string_or_numeric"),r=b(e,"b","less","string_or_numeric");[t,r]=Ie(t,r),Ne(t.shape,r.shape);const a={a:t,b:r};return v.runKernel(fu,a)}const go=k({less_:cb});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function lb(n,e){let t=b(n,"a","lessEqual","string_or_numeric"),r=b(e,"b","lessEqual","string_or_numeric");[t,r]=Ie(t,r),Ne(t.shape,r.shape);const a={a:t,b:r};return v.runKernel(gu,a)}const yo=k({lessEqual_:lb});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function pb(n,e,t){if(t<=0)throw new Error("The number of values should be positive.");const r={start:n,stop:e,num:t};return v.runKernel(ha,{},r)}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function db(n,e=5,t=1,r=1,a=.5){const s=b(n,"x","localResponseNormalization");w(s.rank===4||s.rank===3,()=>`Error in localResponseNormalization: x must be rank 3 or 4 but got
               rank ${s.rank}.`),w(tr(e),()=>`Error in localResponseNormalization: depthRadius must be an integer but got depthRadius ${e}.`);let i=s,u=!1;s.rank===3&&(u=!0,i=D(s,[1,s.shape[0],s.shape[1],s.shape[2]]));const c={x:i},l={depthRadius:e,bias:t,alpha:r,beta:a},o=v.runKernel(fa,c,l);return u?D(o,[o.shape[1],o.shape[2],o.shape[3]]):o}const mb=k({localResponseNormalization_:db});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function hb(n){const t={x:b(n,"x","log","float32")};return v.runKernel(yu,t)}const br=k({log_:hb});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function fb(n){const t={x:b(n,"x","log1p")};return v.runKernel(bu,t)}const kl=k({log1p_:fb});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function gb(n,e){w(zs(n),()=>"The f passed in variableGrads(f) must be a function"),w(e==null||Array.isArray(e)&&e.every(l=>l instanceof Gr),()=>"The varList passed in variableGrads(f, varList) must be an array of variables");const t=e!=null;if(!t){e=[];for(const l in v.registeredVariables)e.push(v.registeredVariables[l])}const r=t?e.filter(l=>!l.trainable):null,a=e.length;e=e.filter(l=>l.trainable),w(e.length>0,()=>`variableGrads() expects at least one of the input variables to be trainable, but none of the ${a} variables is trainable.`);const s=!0,{value:i,grads:u}=v.gradients(n,e,null,s);w(u.some(l=>l!=null),()=>"Cannot find a connection between any variable and the result of the loss function y=f(x). Please make sure the operations that use variables are inside the function f passed to minimize()."),w(i.rank===0,()=>`The f passed in variableGrads(f) must return a scalar, but it returned a rank-${i.rank} tensor`);const c={};return e.forEach((l,o)=>{u[o]!=null&&(c[l.name]=u[o])}),r?.forEach(l=>c[l.name]=null),{value:i,grads:c}}function At(n){return v.customGrad(n)}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function yb(n){const t={x:b(n,"x","neg")};return v.runKernel(Eu,t)}const It=k({neg_:yb});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function bb(n){const t={x:b(n,"x","softplus")};return v.runKernel(Ju,t)}const vl=k({softplus_:bb});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function wb(n){const e=b(n,"x","logSigmoid");return At(r=>({value:It(vl(It(r))),gradFunc:i=>z(i,Vn(It(r)))}))(e)}const _b=k({logSigmoid_:wb});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Ib(n,e){let t=b(n,"a","sub"),r=b(e,"b","sub");[t,r]=Ie(t,r);const a={a:t,b:r};return v.runKernel(ic,a)}const re=k({sub_:Ib});/**
 * @license
 * Copyright 2020 Google Inc. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Nb(n,e=-1){const t=b(n,"logits","logSoftmax");if(e===-1&&(e=t.rank-1),e!==t.rank-1)throw Error(`Log Softmax along a non-last dimension is not yet supported. Logits was rank ${t.rank} and axis was ${e}`);return At((a,s)=>{const u=jn(a,e,!0),c=re(a,u),l=re(ve(c,"float32"),br(ye(dn(c),e,!0)));return s([l]),{value:l,gradFunc:(p,d)=>{const[m]=d,f=!0,g=dn(m);return re(p,z(ye(p,e,f),g))}}})(t)}const Sb=k({logSoftmax_:Nb});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function kb(n,e=null,t=!1){const r=b(n,"x","logSumExp"),a=wt(e,r.shape),s=jn(r,a,!0),i=re(r,s),u=dn(i),c=ye(u,a),l=br(c),o=X(D(s,l.shape),l);if(t){const p=yt(o.shape,a);return D(o,p)}return o}const Tl=k({logSumExp_:kb});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function vb(n,e){const t=b(n,"a","logicalAnd","bool"),r=b(e,"b","logicalAnd","bool");Ne(t.shape,r.shape);const a={a:t,b:r};return v.runKernel(wu,a)}const ss=k({logicalAnd_:vb});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Tb(n){const t={x:b(n,"x","logicalNot","bool")};return v.runKernel(_u,t)}const xl=k({logicalNot_:Tb});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function xb(n,e){const t=b(n,"a","logicalOr","bool"),r=b(e,"b","logicalOr","bool");Ne(t.shape,r.shape);const a={a:t,b:r};return v.runKernel(Iu,a)}const $l=k({logicalOr_:xb});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function $b(n,e){const t=b(n,"a","logicalXor","bool"),r=b(e,"b","logicalXor","bool");return Ne(t.shape,r.shape),ss($l(n,e),xl(ss(n,e)))}const Eb=k({logicalXor_:$b});/**
 * @license
 * Copyright 2022 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const as=2147483648;function Ab(n,e,t="left"){const r=b(n,"sortedSequence","searchSorted"),a=b(e,"values","searchSorted"),s=r.shape[r.shape.length-1],i=a.shape[a.shape.length-1],u=D(r,[-1,s]),c=D(a,[-1,i]);if(u.rank<2)throw new Error("Sorted input argument must be at least 2-dimensional");if(u.shape[0]!==c.shape[0])throw new Error("Leading dimension of 'sortedSequence' and 'values' must match.");if(P(c.shape)>=as)throw new Error(`values tensor size must less than ${as}`);if(u.shape[1]>=as)throw new Error(`trailing dim_size must less than ${as} for int32 output type, was ${u.shape[1]}`);const l={sortedSequence:u,values:c},o={side:t};return v.runKernel(Ca,l,o)}const bo=k({searchSorted_:Ab});/**
 * @license
 * Copyright 2022 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Db(n,e){return bo(n,e,"left")}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Fb(n,e,t,r,a){const s=b(n,"x","maxPool"),i=1;let u=s,c=!1;s.rank===3&&(c=!0,u=D(s,[1,s.shape[0],s.shape[1],s.shape[2]])),w(u.rank===4,()=>`Error in maxPool: input must be rank 4 but got rank ${u.rank}.`),w(xt(t,i),()=>`Error in maxPool: Either strides or dilations must be 1. Got strides ${t} and dilations '${i}'`),gt("maxPool",r,a);const l={x:u},o={filterSize:e,strides:t,pad:r,dimRoundingMode:a},p=v.runKernel(ya,l,o);return c?D(p,[p.shape[1],p.shape[2],p.shape[3]]):p}const El=k({maxPool_:Fb});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Ob(n,e=[1,1,1],t,r,a,s="NDHWC"){const i=b(n,"x","maxPool3d");let u=i,c=!1;i.rank===4&&(c=!0,u=D(i,[1,i.shape[0],i.shape[1],i.shape[2],i.shape[3]])),w(u.rank===5,()=>`Error in maxPool3d: x must be rank 5 but got rank ${u.rank}.`),w(s==="NDHWC",()=>`Error in maxPool3d: Only NDHWC is currently supported, but got dataFormat of ${s}`),gt("maxPool3d",r,a);const l={x:u},o={filterSize:e,strides:t,pad:r,dimRoundingMode:a,dataFormat:s},p=v.runKernel(ku,l,o);return c?D(p,[p.shape[1],p.shape[2],p.shape[3],p.shape[4]]):p}const Cb=k({maxPool3d_:Ob});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Rb(n,e,t,r,a=!1){const i={x:b(n,"x","maxPoolWithArgmax")},u={filterSize:e,strides:t,pad:r,includeBatchInIndex:a},c=v.runKernel(vu,i,u);return{result:c[0],indexes:c[1]}}const Mb=k({maxPoolWithArgmax_:Rb});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Bb(n,e){let t=b(n,"a","maximum"),r=b(e,"b","maximum");[t,r]=Ie(t,r),t.dtype==="bool"&&(t=ve(t,"int32"),r=ve(r,"int32")),Ne(t.shape,r.shape);const a={a:t,b:r};return v.runKernel(Su,a)}const Al=k({maximum_:Bb});/**
 * @license
 * Copyright 2020 Google Inc. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Pb(n,e=null,t=!1){const a={x:b(n,"x","mean")},s={axis:e,keepDims:t};return v.runKernel(ba,a,s)}const os=k({mean_:Pb});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Gn(n,e="float32"){if(et(n),e==="complex64"){const r=Gn(n,"float32"),a=Gn(n,"float32");return Vt(r,a)}const t=sr(P(n),e);return v.makeTensor(t,n,e)}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function mn(n,e="float32"){if(et(n),e==="complex64"){const r=mn(n,"float32"),a=Gn(n,"float32");return Vt(r,a)}const t=vi(P(n),e);return v.makeTensor(t,n,e)}/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Lb(n,e,{indexing:t="xy"}={}){if(t!=="xy"&&t!=="ij")throw new TypeError(`${t} is not a valid third argument to meshgrid`);if(n===void 0)return[];let r=b(n,"x","meshgrid",n instanceof Be?n.dtype:"float32");if(e===void 0)return[r];let a=b(e,"y","meshgrid",e instanceof Be?e.dtype:"float32");const s=P(r.shape),i=P(a.shape);return t==="xy"?(r=D(r,[1,-1]),a=D(a,[-1,1]),[le(mn([i,1],r.dtype),r),le(a,mn([1,s],a.dtype))]):(r=D(r,[-1,1]),a=D(a,[1,-1]),[le(r,mn([1,i],r.dtype)),le(mn([s,1],a.dtype),a)])}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function zb(n,e){let t=b(n,"a","minimum"),r=b(e,"b","minimum");[t,r]=Ie(t,r),t.dtype==="bool"&&(t=ve(t,"int32"),r=ve(r,"int32")),Ne(t.shape,r.shape);const a={a:t,b:r};return v.runKernel(Tu,a)}const is=k({minimum_:zb});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Wb(n,e,t){w(t==="reflect"||t==="symmetric",()=>`Invalid mode. Mode must be either reflect or symmetric. Got ${t}.`);const r=b(n,"x","mirrorPad");if(r.rank===0)throw new Error("mirrorPad(scalar) is not defined. Pass non-scalar to mirrorPad");w(e.length===r.rank,()=>`Padding doesn't match input. Must be ${r.rank}. Got ${e.length}.`);const a=t==="reflect"?1:0;for(let u=0;u<r.rank;u++)w(e[u].length===2,()=>"Invalid number of paddings. Must be length of 2 each."),w(e[u][0]>=0&&e[u][0]<=r.shape[u]-a&&e[u][1]>=0&&e[u][1]<=r.shape[u]-a,()=>`Padding in dimension ${u} cannot be greater than or equal to ${r.shape[u]-a} or less than 0 for input of shape ${r.shape}`);const s={paddings:e,mode:t},i={x:r};return v.runKernel(_a,i,s)}const Vb=k({mirrorPad_:Wb});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Ub(n,e){let t=b(n,"a","mod"),r=b(e,"b","mod");[t,r]=Ie(t,r);const a={a:t,b:r};return v.runKernel(xu,a)}const Hb=k({mod_:Ub});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function jb(n,e=null,t=!1){n=b(n,"x","moments");const r=wt(e,n.shape),a=os(n,r,t);let s=a.shape;t||(s=yt(a.shape,r));const i=bt(re(ve(n,"float32"),D(a,s))),u=os(i,r,t);return{mean:a,variance:u}}const Gb=k({moments_:jb});function qb(n,e,t,r){const a=b(e,"data","multiRNNCell"),s=qr(t,"c","multiRNNCell"),i=qr(r,"h","multiRNNCell");let u=a;const c=[];for(let p=0;p<n.length;p++){const d=n[p](u,s[p],i[p]);c.push(d[0]),c.push(d[1]),u=d[1]}const l=[],o=[];for(let p=0;p<c.length;p+=2)l.push(c[p]),o.push(c[p+1]);return[l,o]}const Kb=k({multiRNNCell_:qb});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Xb(n,e,t,r=!1){const a=b(n,"logits","multinomial"),s=a.size,i=a.rank;if(s<2)throw new Error(`Error in multinomial: you need at least 2 outcomes, but got ${s}.`);if(i>2)throw new Error(`Rank of probabilities must be 1 or 2, but is ${i}`);t=t||Math.random();const c={logits:i===1?D(a,[1,-1]):a},l={numSamples:e,seed:t,normalized:r},o=v.runKernel(Ia,c,l);return i===1?D(o,[o.size]):o}const Jb=k({multinomial_:Xb});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Yb(n,e){let t=b(n,"a","notEqual","string_or_numeric"),r=b(e,"b","notEqual","string_or_numeric");[t,r]=Ie(t,r),Ne(t.shape,r.shape);const a={a:t,b:r};return v.runKernel(Au,a)}const Dl=k({notEqual_:Yb});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Zb(n,e,t=1,r=0,a="int32"){if(e<2)throw new Error(`Error in oneHot: depth must be >=2, but it is ${e}`);const i={indices:b(n,"indices","oneHot","int32")},u={dtype:a,depth:e,onValue:t,offValue:r};return v.runKernel(va,i,u)}const Qb=k({oneHot_:Zb});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function ew(n){const t={x:b(n,"x","onesLike")};return v.runKernel(Du,t)}const tw=k({onesLike_:ew});function nw(n,e){const t=b(n,"v1","outerProduct"),r=b(e,"v2","outerProduct");w(t.rank===1&&r.rank===1,()=>`Error in outerProduct: inputs must be rank 1, but got ranks ${t.rank} and ${r.rank}.`);const a=D(t,[-1,1]),s=D(r,[1,-1]);return le(a,s)}const rw=k({outerProduct_:nw});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function sw(n,e,t=0){const r=b(n,"x","pad");if(r.rank===0)throw new Error("pad(scalar) is not defined. Pass non-scalar to pad");const a={paddings:e,constantValue:t},s={x:r};return v.runKernel(Ta,s,a)}const wr=k({pad_:sw});function aw(n,e,t=0){return w(e.length===2,()=>"Invalid number of paddings. Must be length of 2."),wr(n,[e],t)}const ow=k({pad1d_:aw});function iw(n,e,t=0){return w(e.length===2&&e[0].length===2&&e[1].length===2,()=>"Invalid number of paddings. Must be length of 2 each."),wr(n,e,t)}const uw=k({pad2d_:iw});function cw(n,e,t=0){return w(e.length===3&&e[0].length===2&&e[1].length===2&&e[2].length===2,()=>"Invalid number of paddings. Must be length of 2 each."),wr(n,e,t)}const lw=k({pad3d_:cw});function pw(n,e,t=0){return w(e.length===4&&e[0].length===2&&e[1].length===2&&e[2].length===2&&e[3].length===2,()=>"Invalid number of paddings. Must be length of 2 each."),wr(n,e,t)}const dw=k({pad4d_:pw});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function mw(n,e,t){const r=b(n,"x","spaceToBatchND");w(r.rank>=1+e.length,()=>`input rank ${r.rank} should be > than [blockShape] ${e.length}`),w(t.length===e.length,()=>`paddings.shape[0] ${t.length} must be equal to [blockShape] ${e.length}`),w(r.shape.reduce((i,u,c)=>c>0&&c<=e.length?i&&(u+t[c-1][0]+t[c-1][1])%e[c-1]===0:i,!0),()=>`input spatial dimensions ${r.shape.slice(1)} with paddings ${t.toString()} must be divisible by blockShapes ${e.toString()}`);const a={x:r},s={blockShape:e,paddings:t};return v.runKernel(Zu,a,s)}const Fl=k({spaceToBatchND_:mw});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function hw(n,e,t,r,a,s,i){a==null&&(a=[1,1]),s==null&&(s=1),r===0&&(r="valid");const u=b(n,"x","maxPool");let c=u,l=!1;u.rank===3&&(l=!0,c=D(u,[1,u.shape[0],u.shape[1],u.shape[2]])),w(xt(s,a),()=>`Error in pool: Either strides or dilations must be 1. Got strides ${s} and dilations '${a}'`);const o=Ln(c.shape,e,s,a,r),p=[o.dilationHeight,o.dilationWidth];let d;r==="same"?d=gw([o.filterHeight,o.filterWidth],p):d=[[0,0],[0,0]];const m=p[0]===1&&p[1]===1,[f,g]=fw([o.inHeight,o.inWidth],p,d),y=m?r:"valid",_=m?c:Fl(c,p,f),I=(t==="avg"?()=>ll(_,e,s,y,i):()=>El(_,e,s,y,i))(),T=m?I:pl(I,p,g);return l?D(T,[T.shape[1],T.shape[2],T.shape[3]]):T}function fw(n,e,t){const r=t.map(o=>o[0]),a=t.map(o=>o[1]),s=n.concat(r,a),i=e.map((o,p)=>(o-s[p]%o)%o),u=a.map((o,p)=>o+i[p]),c=e.map((o,p)=>[r[p],u[p]]),l=e.map((o,p)=>[0,i[p]]);return[c,l]}function gw(n,e){const r=n.map((i,u)=>i+(i-1)*(e[u]-1)).map(i=>i-1),a=r.map(i=>Math.floor(i/2)),s=r.map((i,u)=>i-a[u]);return r.map((i,u)=>[a[u],s[u]])}const yw=k({pool_:hw});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function bw(n,e){const t=b(n,"x","prelu"),r=b(e,"alpha","prelu"),a={x:t,alpha:r};return v.runKernel(xa,a)}const Ol=k({prelu_:bw});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function ww(n,e=null,t=!1){let r=b(n,"x","prod");r.dtype==="bool"&&(r=ve(r,"int32"));const a={x:r},s={axis:e,keepDims:t};return v.runKernel($a,a,s)}const _w=k({prod_:ww});/**
 * @license
 * Copyright 2022 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Iw(n,e,t,r){const a=n.map((o,p)=>b(o,`tensors${p}`,"raggedGather","int32")),s=b(e,"paramsDenseValues","raggedGather"),i=b(t,"indices","raggedGather","int32"),u={paramsNestedSplits:a,paramsDenseValues:s,indices:i},c={outputRaggedRank:r},l=v.runKernel(sh,u,c);return{outputNestedSplits:l.slice(0,l.length-1),outputDenseValues:l[l.length-1]}}const Nw=k({raggedGather_:Iw});/**
 * @license
 * Copyright 2022 Google LLC.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Sw(n,e,t){const r=b(n,"starts","raggedRange"),a=b(e,"limits","raggedRange",r.dtype),s=b(t,"deltas","raggedRange",r.dtype),i={starts:r,limits:a,deltas:s},u=v.runKernel(ah,i);return{rtNestedSplits:u[0],rtDenseValues:u[1]}}const kw=k({raggedRange_:Sw});/**
 * @license
 * Copyright 2022 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function vw(n,e,t,r,a){const s=b(n,"shape","raggedTensorToTensor","int32"),i=b(e,"values","raggedTensorToTensor"),u=b(t,"defaultValue","raggedTensorToTensor",i.dtype),c=r.map((p,d)=>b(p,`tensors${d}`,"raggedTensorToTensor","int32")),l={shape:s,values:i,defaultValue:u,rowPartitionTensors:c},o={rowPartitionTypes:a};return v.runKernel(oh,l,o)}const Tw=k({raggedTensorToTensor_:vw});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function xw(n,e,t){et(n);const r=P(n);let a=null;if(t==null||t==="float32")a=new Float32Array(r);else if(t==="int32")a=new Int32Array(r);else if(t==="bool")a=new Uint8Array(r);else throw new Error(`Unknown data type ${t}`);for(let s=0;s<r;s++)a[s]=e();return v.makeTensor(a,n,t)}const $w=k({rand_:xw});var wo={exports:{}};wo.exports,function(n){(function(e,t,r){function a(c){var l=this,o=u();l.next=function(){var p=2091639*l.s0+l.c*23283064365386963e-26;return l.s0=l.s1,l.s1=l.s2,l.s2=p-(l.c=p|0)},l.c=1,l.s0=o(" "),l.s1=o(" "),l.s2=o(" "),l.s0-=o(c),l.s0<0&&(l.s0+=1),l.s1-=o(c),l.s1<0&&(l.s1+=1),l.s2-=o(c),l.s2<0&&(l.s2+=1),o=null}function s(c,l){return l.c=c.c,l.s0=c.s0,l.s1=c.s1,l.s2=c.s2,l}function i(c,l){var o=new a(c),p=l&&l.state,d=o.next;return d.int32=function(){return o.next()*4294967296|0},d.double=function(){return d()+(d()*2097152|0)*11102230246251565e-32},d.quick=d,p&&(typeof p=="object"&&s(p,o),d.state=function(){return s(o,{})}),d}function u(){var c=4022871197,l=function(o){o=String(o);for(var p=0;p<o.length;p++){c+=o.charCodeAt(p);var d=.02519603282416938*c;c=d>>>0,d-=c,d*=c,c=d>>>0,d-=c,c+=d*4294967296}return(c>>>0)*23283064365386963e-26};return l}t&&t.exports?t.exports=i:this.alea=i})(kt,n)}(wo);var Ew=wo.exports,_o={exports:{}};_o.exports,function(n){(function(e,t,r){function a(u){var c=this,l="";c.x=0,c.y=0,c.z=0,c.w=0,c.next=function(){var p=c.x^c.x<<11;return c.x=c.y,c.y=c.z,c.z=c.w,c.w^=c.w>>>19^p^p>>>8},u===(u|0)?c.x=u:l+=u;for(var o=0;o<l.length+64;o++)c.x^=l.charCodeAt(o)|0,c.next()}function s(u,c){return c.x=u.x,c.y=u.y,c.z=u.z,c.w=u.w,c}function i(u,c){var l=new a(u),o=c&&c.state,p=function(){return(l.next()>>>0)/4294967296};return p.double=function(){do var d=l.next()>>>11,m=(l.next()>>>0)/4294967296,f=(d+m)/(1<<21);while(f===0);return f},p.int32=l.next,p.quick=p,o&&(typeof o=="object"&&s(o,l),p.state=function(){return s(l,{})}),p}t&&t.exports?t.exports=i:this.xor128=i})(kt,n)}(_o);var Aw=_o.exports,Io={exports:{}};Io.exports,function(n){(function(e,t,r){function a(u){var c=this,l="";c.next=function(){var p=c.x^c.x>>>2;return c.x=c.y,c.y=c.z,c.z=c.w,c.w=c.v,(c.d=c.d+362437|0)+(c.v=c.v^c.v<<4^(p^p<<1))|0},c.x=0,c.y=0,c.z=0,c.w=0,c.v=0,u===(u|0)?c.x=u:l+=u;for(var o=0;o<l.length+64;o++)c.x^=l.charCodeAt(o)|0,o==l.length&&(c.d=c.x<<10^c.x>>>4),c.next()}function s(u,c){return c.x=u.x,c.y=u.y,c.z=u.z,c.w=u.w,c.v=u.v,c.d=u.d,c}function i(u,c){var l=new a(u),o=c&&c.state,p=function(){return(l.next()>>>0)/4294967296};return p.double=function(){do var d=l.next()>>>11,m=(l.next()>>>0)/4294967296,f=(d+m)/(1<<21);while(f===0);return f},p.int32=l.next,p.quick=p,o&&(typeof o=="object"&&s(o,l),p.state=function(){return s(l,{})}),p}t&&t.exports?t.exports=i:this.xorwow=i})(kt,n)}(Io);var Dw=Io.exports,No={exports:{}};No.exports,function(n){(function(e,t,r){function a(u){var c=this;c.next=function(){var o=c.x,p=c.i,d,m;return d=o[p],d^=d>>>7,m=d^d<<24,d=o[p+1&7],m^=d^d>>>10,d=o[p+3&7],m^=d^d>>>3,d=o[p+4&7],m^=d^d<<7,d=o[p+7&7],d=d^d<<13,m^=d^d<<9,o[p]=m,c.i=p+1&7,m};function l(o,p){var d,m=[];if(p===(p|0))m[0]=p;else for(p=""+p,d=0;d<p.length;++d)m[d&7]=m[d&7]<<15^p.charCodeAt(d)+m[d+1&7]<<13;for(;m.length<8;)m.push(0);for(d=0;d<8&&m[d]===0;++d);for(d==8?m[7]=-1:m[d],o.x=m,o.i=0,d=256;d>0;--d)o.next()}l(c,u)}function s(u,c){return c.x=u.x.slice(),c.i=u.i,c}function i(u,c){u==null&&(u=+new Date);var l=new a(u),o=c&&c.state,p=function(){return(l.next()>>>0)/4294967296};return p.double=function(){do var d=l.next()>>>11,m=(l.next()>>>0)/4294967296,f=(d+m)/(1<<21);while(f===0);return f},p.int32=l.next,p.quick=p,o&&(o.x&&s(o,l),p.state=function(){return s(l,{})}),p}t&&t.exports?t.exports=i:this.xorshift7=i})(kt,n)}(No);var Fw=No.exports,So={exports:{}};So.exports,function(n){(function(e,t,r){function a(u){var c=this;c.next=function(){var o=c.w,p=c.X,d=c.i,m,f;return c.w=o=o+1640531527|0,f=p[d+34&127],m=p[d=d+1&127],f^=f<<13,m^=m<<17,f^=f>>>15,m^=m>>>12,f=p[d]=f^m,c.i=d,f+(o^o>>>16)|0};function l(o,p){var d,m,f,g,y,_=[],S=128;for(p===(p|0)?(m=p,p=null):(p=p+"\0",m=0,S=Math.max(S,p.length)),f=0,g=-32;g<S;++g)p&&(m^=p.charCodeAt((g+32)%p.length)),g===0&&(y=m),m^=m<<10,m^=m>>>15,m^=m<<4,m^=m>>>13,g>=0&&(y=y+1640531527|0,d=_[g&127]^=m+y,f=d==0?f+1:0);for(f>=128&&(_[(p&&p.length||0)&127]=-1),f=127,g=4*128;g>0;--g)m=_[f+34&127],d=_[f=f+1&127],m^=m<<13,d^=d<<17,m^=m>>>15,d^=d>>>12,_[f]=m^d;o.w=y,o.X=_,o.i=f}l(c,u)}function s(u,c){return c.i=u.i,c.w=u.w,c.X=u.X.slice(),c}function i(u,c){u==null&&(u=+new Date);var l=new a(u),o=c&&c.state,p=function(){return(l.next()>>>0)/4294967296};return p.double=function(){do var d=l.next()>>>11,m=(l.next()>>>0)/4294967296,f=(d+m)/(1<<21);while(f===0);return f},p.int32=l.next,p.quick=p,o&&(o.X&&s(o,l),p.state=function(){return s(l,{})}),p}t&&t.exports?t.exports=i:this.xor4096=i})(kt,n)}(So);var Ow=So.exports,ko={exports:{}};ko.exports,function(n){(function(e,t,r){function a(u){var c=this,l="";c.next=function(){var p=c.b,d=c.c,m=c.d,f=c.a;return p=p<<25^p>>>7^d,d=d-m|0,m=m<<24^m>>>8^f,f=f-p|0,c.b=p=p<<20^p>>>12^d,c.c=d=d-m|0,c.d=m<<16^d>>>16^f,c.a=f-p|0},c.a=0,c.b=0,c.c=-1640531527,c.d=1367130551,u===Math.floor(u)?(c.a=u/4294967296|0,c.b=u|0):l+=u;for(var o=0;o<l.length+20;o++)c.b^=l.charCodeAt(o)|0,c.next()}function s(u,c){return c.a=u.a,c.b=u.b,c.c=u.c,c.d=u.d,c}function i(u,c){var l=new a(u),o=c&&c.state,p=function(){return(l.next()>>>0)/4294967296};return p.double=function(){do var d=l.next()>>>11,m=(l.next()>>>0)/4294967296,f=(d+m)/(1<<21);while(f===0);return f},p.int32=l.next,p.quick=p,o&&(typeof o=="object"&&s(o,l),p.state=function(){return s(l,{})}),p}t&&t.exports?t.exports=i:this.tychei=i})(kt,n)}(ko);var Cw=ko.exports,Cl={exports:{}},Rw={},Mw=Object.freeze({__proto__:null,default:Rw}),Xt=mh(Mw);(function(n){(function(e,t,r){var a=256,s=6,i=52,u="random",c=r.pow(a,s),l=r.pow(2,i),o=l*2,p=a-1,d;function m(T,$,A){var F=[];$=$==!0?{entropy:!0}:$||{};var C=_(y($.entropy?[T,I(t)]:T??S(),3),F),M=new f(F),B=function(){for(var V=M.g(s),j=c,q=0;V<l;)V=(V+q)*a,j*=a,q=M.g(1);for(;V>=o;)V/=2,j/=2,q>>>=1;return(V+q)/j};return B.int32=function(){return M.g(4)|0},B.quick=function(){return M.g(4)/4294967296},B.double=B,_(I(M.S),t),($.pass||A||function(V,j,q,te){return te&&(te.S&&g(te,M),V.state=function(){return g(M,{})}),q?(r[u]=V,j):V})(B,C,"global"in $?$.global:this==r,$.state)}function f(T){var $,A=T.length,F=this,C=0,M=F.i=F.j=0,B=F.S=[];for(A||(T=[A++]);C<a;)B[C]=C++;for(C=0;C<a;C++)B[C]=B[M=p&M+T[C%A]+($=B[C])],B[M]=$;(F.g=function(V){for(var j,q=0,te=F.i,J=F.j,ue=F.S;V--;)j=ue[te=p&te+1],q=q*a+ue[p&(ue[te]=ue[J=p&J+j])+(ue[J]=j)];return F.i=te,F.j=J,q})(a)}function g(T,$){return $.i=T.i,$.j=T.j,$.S=T.S.slice(),$}function y(T,$){var A=[],F=typeof T,C;if($&&F=="object")for(C in T)try{A.push(y(T[C],$-1))}catch{}return A.length?A:F=="string"?T:T+"\0"}function _(T,$){for(var A=T+"",F,C=0;C<A.length;)$[p&C]=p&(F^=$[p&C]*19)+A.charCodeAt(C++);return I($)}function S(){try{var T;return d&&(T=d.randomBytes)?T=T(a):(T=new Uint8Array(a),(e.crypto||e.msCrypto).getRandomValues(T)),I(T)}catch{var $=e.navigator,A=$&&$.plugins;return[+new Date,e,A,e.screen,I(t)]}}function I(T){return String.fromCharCode.apply(0,T)}if(_(r.random(),t),n.exports){n.exports=m;try{d=Xt}catch{}}else r["seed"+u]=m})(typeof self<"u"?self:kt,[],Math)})(Cl);var Bw=Cl.exports,Pw=Ew,Lw=Aw,zw=Dw,Ww=Fw,Vw=Ow,Uw=Cw,hn=Bw;hn.alea=Pw,hn.xor128=Lw,hn.xorwow=zw,hn.xorshift7=Ww,hn.xor4096=Vw,hn.tychei=Uw;var vo=hn;/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */class To{constructor(e,t,r,a,s){this.mean=e,this.stdDev=t,this.dtype=r,this.nextVal=NaN,this.truncated=a,this.truncated&&(this.upper=this.mean+this.stdDev*2,this.lower=this.mean-this.stdDev*2);const i=s||Math.random();this.random=vo.alea(i.toString())}nextValue(){if(!isNaN(this.nextVal)){const a=this.nextVal;return this.nextVal=NaN,a}let e,t,r=!1;for(;!r;){let a,s,i;do a=2*this.random()-1,s=2*this.random()-1,i=a*a+s*s;while(i>=1||i===0);const u=Math.sqrt(-2*Math.log(i)/i);e=this.mean+this.stdDev*a*u,t=this.mean+this.stdDev*s*u,(!this.truncated||this.isValidTruncated(e))&&(r=!0)}return(!this.truncated||this.isValidTruncated(t))&&(this.nextVal=this.convertValue(t)),this.convertValue(e)}convertValue(e){return this.dtype==null||this.dtype==="float32"?e:Math.round(e)}isValidTruncated(e){return e<=this.upper&&e>=this.lower}}class Hw{constructor(e,t,r,a){this.alpha=e,this.beta=1/t,this.dtype=r;const s=a||Math.random();this.randu=vo.alea(s.toString()),this.randn=new To(0,1,r,!1,this.randu()),e<1?this.d=e+2/3:this.d=e-1/3,this.c=1/Math.sqrt(9*this.d)}nextValue(){let e,t,r,a,s,i;for(;;){do a=this.randn.nextValue(),i=1+this.c*a;while(i<=0);if(i*=i*i,e=a*a,t=1-.331*e*e,r=.5*e+this.d*(1-i+Math.log(i)),s=this.randu(),s<t||Math.log(s)<r)break}return i=1/this.beta*this.d*i,this.alpha<1&&(i*=Math.pow(this.randu(),1/this.alpha)),this.convertValue(i)}convertValue(e){return this.dtype==="float32"?e:Math.round(e)}}class jw{constructor(e=0,t=1,r,a){if(this.canReturnFloat=()=>this.dtype==null||this.dtype==="float32",this.min=e,this.range=t-e,this.dtype=r,a==null&&(a=Math.random()),typeof a=="number"&&(a=a.toString()),!this.canReturnFloat()&&this.range<=1)throw new Error(`The difference between ${e} - ${t} <= 1 and dtype is not float`);this.random=vo.alea(a)}convertValue(e){return this.canReturnFloat()?e:Math.round(e)}nextValue(){return this.convertValue(this.min+this.range*this.random())}}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Gw(n,e,t=1,r="float32",a){if(et(n),t==null&&(t=1),r==null&&(r="float32"),r!=="float32"&&r!=="int32")throw new Error(`Unsupported data type ${r}`);const s=new Hw(e,t,r,a),i=ft(n,r);for(let u=0;u<i.values.length;u++)i.values[u]=s.nextValue();return i.toTensor()}const qw=k({randomGamma_:Gw});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Kw(n,e=0,t=1,r,a){if(et(n),r!=null&&r==="bool")throw new Error(`Unsupported data type ${r}`);const s=new To(e,t,r,!1,a),i=ft(n,r);for(let u=0;u<i.values.length;u++)i.values[u]=s.nextValue();return i.toTensor()}const Rl=k({randomNormal_:Kw});/**
 * @license
 * Copyright 2022 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Xw(n,e,t){if(e!=null&&e==="bool")throw new Error(`Unsupported data type ${e}`);return Rl(n,0,1,e,t)}const Jw=k({randomStandardNormal_:Xw});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Yw(n,e=0,t=1,r="float32",a){et(n);const s=ft(n,r),i=new jw(e,t,null,a);for(let u=0;u<s.values.length;u++)s.values[u]=i.nextValue();return s.toTensor()}const xo=k({randomUniform_:Yw});/**
 * @license
 * Copyright 2023 Google LLC.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Zw(n,e,t,r){return xo(n,e,t,"int32",r)}const Qw=k({randomUniformInt_:Zw});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function _r(n,e,t=1,r="float32"){if(t===0)throw new Error("Cannot have a step of zero");const a={start:n,stop:e,step:t,dtype:r};return v.runKernel(Cu,{},a)}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function e_(n){const t={input:b(n,"input","real")};return v.runKernel(ih,t)}const Ir=k({real_:e_});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function t_(n){const t={x:b(n,"x","reciprocal")};return v.runKernel(Ru,t)}const n_=k({reciprocal_:t_});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function r_(n){const t={x:b(n,"x","relu")};return v.runKernel(Mu,t)}const us=k({relu_:r_});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function s_(n){const t={x:b(n,"x","relu6")};return v.runKernel(zu,t)}const Ml=k({relu6_:s_});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function a_(n,e){const r={x:b(n,"x","reverse")},a={dims:e};return v.runKernel(Da,r,a)}const fn=k({reverse_:a_});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function o_(n){const e=b(n,"x","reverse");return w(e.rank===1,()=>`Error in reverse1D: x must be rank 1 but got rank ${e.rank}.`),fn(e,0)}const i_=k({reverse1d_:o_});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function u_(n,e){const t=b(n,"x","reverse");return w(t.rank===2,()=>`Error in reverse2D: x must be rank 2 but got rank ${t.rank}.`),fn(t,e)}const c_=k({reverse2d_:u_});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function l_(n,e){const t=b(n,"x","reverse");return w(t.rank===3,()=>`Error in reverse3D: x must be rank 3 but got rank ${t.rank}.`),fn(t,e)}const p_=k({reverse3d_:l_});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function d_(n,e){const t=b(n,"x","reverse");return w(t.rank===4,()=>`Error in reverse4D: x must be rank 4 but got rank ${t.rank}.`),fn(t,e)}const m_=k({reverse4d_:d_});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function h_(n){const t={x:b(n,"x","round")};return v.runKernel(Wu,t)}const Bl=k({round_:h_});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function f_(n){const t={x:b(n,"x","rsqrt","float32")};return v.runKernel(Vu,t)}const g_=k({rsqrt_:f_});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function y_(n){const t={x:b(n,"x","selu")};return v.runKernel(Hu,t)}const b_=k({selu_:y_});function w_(n,e,t,r,a,s=[1,1],i="NHWC"){const u=b(n,"x","separableConv2d"),c=b(e,"depthwiseFilter","separableConv2d"),l=b(t,"pointwiseFilter","separableConv2d");let o=u,p=!1;if(u.rank===3&&(p=!0,o=D(u,[1,u.shape[0],u.shape[1],u.shape[2]])),i==="NCHW")throw new Error("separableConv2d currently does not support dataFormat NCHW; only NHWC is supported");w(o.rank===4,()=>`Error in separableConv2d: input must be rank 4, but got rank ${o.rank}.`),w(c.rank===4,()=>`Error in separableConv2d: depthwise filter must be rank 4, but got rank ${c.rank}.`),w(l.rank===4,()=>`Error in separableConv2d: pointwise filter must be rank 4, but got rank ${c.rank}.`),w(l.shape[0]===1,()=>`Error in separableConv2d: the first dimension of pointwise filter  must be 1, but got ${l.shape[0]}.`),w(l.shape[1]===1,()=>`Error in separableConv2d: the second dimension of pointwise filter must be 1, but got ${l.shape[1]}.`);const d=c.shape[2],m=c.shape[3];w(l.shape[2]===d*m,()=>`Error in separableConv2d: the third dimension of pointwise filter must be ${d*m}, but got ${l.shape[2]}.`);const f=mo(o,c,r,a,i,s),y=es(f,l,1,"valid",i);return p?D(y,[y.shape[1],y.shape[2],y.shape[3]]):y}const __=k({separableConv2d_:w_});/**
 * @license
 * Copyright 2020 Google Inc. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */async function I_(n,e){const t=b(n,"x","setdiff1d"),r=b(e,"y","setdiff1d");w(t.dtype===r.dtype,()=>`x and y should have the same dtype, but got x (${t.dtype}) and y (${r.dtype}).`),w(t.rank===1,()=>`x should be 1D tensor, but got x (${t.shape}).`),w(r.rank===1,()=>`y should be 1D tensor, but got y (${r.shape}).`);const a=await t.data(),s=await r.data(),i=new Set(s);let u=0;for(let o=0;o<a.length;o++)i.has(a[o])||u++;const c=new pr([u],t.dtype),l=new pr([u],"int32");for(let o=0,p=0;o<a.length;o++)i.has(a[o])||(c.values[p]=a[o],l.values[p]=o,p++);return[c.toTensor(),l.toTensor()]}const N_=I_;/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function S_(n){const t={x:b(n,"x","sign")};return v.runKernel(Ku,t)}const k_=k({sign_:S_});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function v_(n){const t={x:b(n,"x","sin","float32")};return v.runKernel(Gu,t)}const T_=k({sin_:v_});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function x_(n){const t={x:b(n,"x","sinh")};return v.runKernel(qu,t)}const $_=k({sinh_:x_});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function E_(n,e,t){const r=b(n,"x","slice1d");return w(r.rank===1,()=>`slice1d expects a rank-1 tensor, but got a rank-${r.rank} tensor`),de(r,[e],[t])}const A_=k({slice1d_:E_});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function D_(n,e,t){const r=b(n,"x","slice2d");return w(r.rank===2,()=>`slice2d expects a rank-2 tensor, but got a rank-${r.rank} tensor`),de(r,e,t)}const F_=k({slice2d_:D_});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function O_(n,e,t){const r=b(n,"x","slice3d");return w(r.rank===3,()=>`slice3d expects a rank-3 tensor, but got a rank-${r.rank} tensor`),de(r,e,t)}const C_=k({slice3d_:O_});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function R_(n,e,t){const r=b(n,"x","slice4d");return w(r.rank===4,()=>`slice4d expects a rank-4 tensor, but got a rank-${r.rank} tensor`),de(r,e,t)}const M_=k({slice4d_:R_});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function B_(n,e=-1){const t=b(n,"logits","softmax","float32");if(e===-1&&(e=t.rank-1),e!==t.rank-1)throw Error(`Softmax along a non-last dimension is not yet supported. Logits was rank ${t.rank} and dim was ${e}`);const r={logits:t},a={dim:e};return v.runKernel(Ma,r,a)}const P_=k({softmax_:B_});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function L_(n){w(n.dtype==="complex64",()=>`The dtype for tf.spectral.fft() must be complex64 but got ${n.dtype}.`);const e={input:n};return v.runKernel(Zm,e)}const $o=k({fft_:L_});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function z_(n){w(n.dtype==="complex64",()=>`The dtype for tf.spectral.ifft() must be complex64 but got ${n.dtype}.`);const e={input:n};return v.runKernel(Qm,e)}const cs=k({ifft_:z_});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function W_(n){const e=n.shape[n.shape.length-1],t=n.size/e;let r;if(e<=2){const a=D(n,[t,e]);r=cs(a)}else{const a=[t,2*(e-1)],s=D(Ir(n),[t,e]),i=D(rs(n),[t,e]),u=fn(de(s,[0,1],[t,e-2]),1),c=z(fn(de(i,[0,1],[t,e-2]),1),oe(-1)),l=ze([s,u],1),o=ze([i,c],1),p=D(Vt(l,o),[a[0],a[1]]);r=cs(p)}if(r=Ir(r),n.rank===3&&n.shape[0]!==0){const a=r,s=n.shape[0];r=D(r,[s,r.shape[0]/s,r.shape[1]]),a.dispose()}return r}const Pl=k({irfft_:W_});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function V_(n,e,t=0){const a={x:b(n,"x","split")},s={numOrSizeSplits:e,axis:t};return v.runKernel(Qu,a,s)}const Nr=k({split_:V_});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function U_(n,e){w(n.dtype==="float32",()=>`The dtype for rfft() must be real value but got ${n.dtype}`);let t=n.shape[n.shape.length-1];const r=n.size/t;let a;if(e!=null&&e<t){const f=n.shape.map(y=>0),g=n.shape.map(y=>y);g[n.shape.length-1]=e,a=de(n,f,g),t=e}else if(e!=null&&e>t){const f=n.shape.map(g=>g);f[n.shape.length-1]=e-t,a=ze([n,Gn(f)],n.shape.length-1),t=e}else a=n;const s=nt(a),i=D(Vt(a,s),[r,t]),u=$o(i),c=Math.floor(t/2)+1,l=Ir(u),o=rs(u),p=Nr(l,[c,t-c],l.shape.length-1),d=Nr(o,[c,t-c],o.shape.length-1),m=a.shape.slice();return m[a.shape.length-1]=c,D(Vt(p[0],d[0]),m)}const Eo=k({rfft_:U_});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function H_(n,e){let t=b(n,"a","squaredDifference"),r=b(e,"b","squaredDifference");[t,r]=Ie(t,r),Ne(t.shape,r.shape);const a={a:t,b:r},s={};return v.runKernel(rc,a,s)}const Ll=k({squaredDifference_:H_});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function j_(n,e){const t=b(n,"x","squeeze","string_or_numeric");return D(t,Dm(t.shape,e).newShape)}const Ao=k({squeeze_:j_});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function G_(n,e=0){const t=qr(n,"tensors","stack","string_or_numeric");w(t.length>=1,()=>"Pass at least one tensor to tf.stack"),t.length>0&&w(e<=t[0].rank,()=>"Axis must be <= rank of the tensor");const r=t,a={axis:e};return v.runKernel(Fu,r,a)}const Dt=k({stack_:G_});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function q_(n,e=0){const r={x:b(n,"x","step")},a={alpha:e};return v.runKernel(Va,r,a)}const zl=k({step_:q_});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function K_(n,e,t,r,a=0,s=0,i=0,u=0,c=0){const o={x:b(n,"x","stridedSlice","string_or_numeric")},p={begin:e,end:t,strides:r,beginMask:a,endMask:s,ellipsisMask:i,newAxisMask:u,shrinkAxisMask:c};return v.runKernel(La,o,p)}const X_=k({stridedSlice_:K_});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function J_(n){const t={x:b(n,"x","tan","float32")};return v.runKernel(uc,t)}const Y_=k({tan_:J_});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function ct(n,e){En(n);const t=Wt(n,e);if(t.length!==1)throw new Error("tensor1d() requires values to be a flat/TypedArray");return Ut(n,null,t,e)}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Sr(n,e,t){if(En(n),e!=null&&e.length!==2)throw new Error("tensor2d() requires shape to have two numbers");const r=Wt(n,t);if(r.length!==2&&r.length!==1)throw new Error("tensor2d() requires values to be number[][] or flat/TypedArray");if(r.length===1&&e==null)throw new Error("tensor2d() requires shape to be provided when `values` are a flat/TypedArray");return Ut(n,e,r,t)}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Z_(n,e,t){if(En(n),e!=null&&e.length!==3)throw new Error("tensor3d() requires shape to have three numbers");const r=Wt(n,t);if(r.length!==3&&r.length!==1)throw new Error("tensor3d() requires values to be number[][][] or flat/TypedArray");if(r.length===1&&e==null)throw new Error("tensor3d() requires shape to be provided when `values` are a flat array");return Ut(n,e,r,t)}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Wl(n,e,t){if(En(n),e!=null&&e.length!==4)throw new Error("tensor4d() requires shape to have four numbers");const r=Wt(n,t);if(r.length!==4&&r.length!==1)throw new Error("tensor4d() requires values to be number[][][][] or flat/TypedArray");if(r.length===1&&e==null)throw new Error("tensor4d() requires shape to be provided when `values` are a flat array");return Ut(n,e,r,t)}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Q_(n,e,t){if(En(n),e!=null&&e.length!==5)throw new Error("tensor5d() requires shape to have five numbers");const r=Wt(n,t);if(r.length!==5&&r.length!==1)throw new Error("tensor5d() requires values to be number[][][][][] or flat/TypedArray");if(r.length===1&&e==null)throw new Error("tensor5d() requires shape to be provided when `values` are a flat array");return Ut(n,e,r,t)}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function e0(n,e,t){if(En(n),e!=null&&e.length!==6)throw new Error("tensor6d() requires shape to have six numbers");const r=Wt(n,t);if(r.length!==6&&r.length!==1)throw new Error("tensor6d() requires values to be number[][][][][][] or flat/TypedArray");if(r.length===1&&e==null)throw new Error("tensor6d() requires shape to be provided when `values` are a flat array");return e=e||r,Ut(n,e,r,t)}function t0(n,e,t){const r=e.rank>1?e.shape[e.rank-1]:1,a=e.rank>1?e.rank-1:1,s=`Must have updates.shape = indices.shape[:batchDim] + shape[sliceDim:], got updates.shape: ${t.shape}, indices.shape: ${e.shape}, shape: ${n}, sliceDim: ${r}, and batchDim: ${a}.`;if(t.rank<a)throw new Error(s+` update.rank < ${a}. `);if(n.length<r+(t.rank-a))throw new Error(s+` Output shape length < ${r+(t.rank-a)}`);if(t.rank!==a+n.length-r)throw new Error(s+` update.rank != ${a+n.length-r}`);for(let i=0;i<a;++i)if(t.shape[i]!==e.shape[i])throw new Error(s+` updates.shape[${i}] (${t.shape[i]}) != indices.shape[${i}] (${e.shape[i]}).`);for(let i=0;i<t.rank-a;++i)if(t.shape[i+a]!==n[i+r])throw new Error(s+` updates.shape[${i+a}] (${t.shape[i+a]}) != shape[${i+a}] (${n[i+a]})`)}function Vl(n,e,t){if(e.rank<1)throw new Error(`tf.scatterND() expects the indices to be rank 1 or higher, but the rank was ${e.rank}.`);if(n.rank<1)throw new Error(`tf.scatterND() expects the updates to be rank 1 or higher, but the rank was ${n.rank}.`);if(e.dtype!=="int32")throw new Error(`The dtype of 'indices' should be int32, but got dtype: ${e.dtype}`);if(t.length<1)throw new Error(`Output rank must be greater or equal to 1, but got shape: ${t}`);if(t.length===0){if(e.size===0)throw new Error(`Indices specified for empty output. indices shape: ${e.shape}`);if(n.size===0)throw new Error(`Updates specified for empty output. updates shape: ${n.shape}`)}t0(t,e,n)}function Do(n,e,t){const r=e.shape.length,a=r>1?e.shape[r-1]:1,s=t.length;let i=1;for(let p=a;p<s;++p)i*=t[p];const u=a<1?1:a,c=P(e.shape)/u,l=[...Ee(t.slice(0,a)),1],o=P(t);return{sliceRank:a,numUpdates:c,sliceSize:i,strides:l,outputSize:o}}/**
 * @license
 * Copyright 2022 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function n0(n,e,t){const r=b(n,"tensor","tensorScatterupdate"),a=b(e,"indices","tensorScatterupdate","int32"),s=b(t,"updates","tensorScatterupdate");if(Vl(s,a,r.shape),r.dtype!==s.dtype)throw new Error(`tensor and updates must have the same dtype, instead they are ${r.dtype} and ${s.dtype}.`);const i={tensor:r,indices:a,updates:s},u={};return v.runKernel(Oa,i,u)}const r0=k({tensorScatterUpdate_:n0});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function s0(n,e=1,t=!0){const r=b(n,"x","topk");if(r.rank===0)throw new Error("topk() expects the input to be of rank 1 or higher");const a=r.shape[r.shape.length-1];if(e<0)throw new Error(`'k' passed to topk() must be >= 0 but got ${e}`);if(e>a)throw new Error(`'k' passed to topk() must be <= the last dimension (${a}) but got ${e}`);const s={x:r},i={k:e,sorted:t},[u,c]=v.runKernel(za,s,i);return{values:u,indices:c}}const a0=k({topk_:s0});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function o0(n,e=0,t=1,r,a){if(et(n),r!=null&&r==="bool")throw new Error("Unsupported data type $ { dtype }");const s=new To(e,t,r,!0,a),i=ft(n,r);for(let u=0;u<i.values.length;u++)i.values[u]=s.nextValue();return i.toTensor()}const i0=k({truncatedNormal_:o0});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function u0(n,e=0){const t=b(n,"x","unique","string_or_numeric");w(t.rank>0,()=>"The input tensor must be at least 1D");const r={x:t},a={axis:e},[s,i]=v.runKernel(lc,r,a);return{values:s,indices:i}}const c0=k({unique_:u0});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function l0(n,e,t){const r=b(n,"x","unsortedSegmentSum"),a=b(e,"segmentIds","unsortedSegmentSum","int32");w(tr(t),()=>"numSegments must be of dtype int");const s={x:r,segmentIds:a},i={numSegments:t};return v.runKernel(lh,s,i)}const p0=k({unsortedSegmentSum_:l0});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function d0(n,e=0){const t=b(n,"x","unstack","string_or_numeric");w(e>=-t.shape.length&&e<t.shape.length,()=>`Axis = ${e} is not in [-${t.shape.length}, ${t.shape.length})`);const r={value:t},a={axis:e};return v.runKernel(pc,r,a)}const gn=k({unstack_:d0});/**
 * @license
 * Copyright 2022 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function m0(n,e){return bo(n,e,"right")}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function h0(n,e=!0,t,r){return v.makeVariable(n,e,t,r)}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function f0(n,e){const t=[];for(let s=0;s<e.length;s++)e[s]&&t.push(s);const r=ft(n,"int32"),a=ft([t.length,n.length],"int32");for(let s=0;s<t.length;s++){const i=r.indexToLoc(t[s]),u=s*n.length;a.values.set(i,u)}return a.toTensor()}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */async function g0(n){const e=b(n,"condition","whereAsync","bool"),t=await e.data(),r=f0(e.shape,t);return n!==e&&e.dispose(),r}const Ul=g0;/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */async function y0(n,e,t){const r=b(n,"tensor","boolMask"),a=b(e,"mask","boolMask","bool"),s=t??0,i=a.rank,u=r.shape;w(i>0,()=>"mask cannot be scalar"),Qe(u.slice(s,s+i),a.shape,"mask's shape must match the first K dimensions of tensor's shape,");let c=1;for(let g=s;g<s+i;g++)c*=u[g];const l=u.slice(0,s).concat([c],u.slice(s+i)),o=D(r,l),p=D(a,[-1]),d=await Ul(p),m=Ao(d,[1]),f=Il(o,m,s);return n!==r&&r.dispose(),e!==a&&a.dispose(),m.dispose(),o.dispose(),p.dispose(),d.dispose(),f}const b0=y0;/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function w0(n,e,t){const r=b(n,"x","transpose");if(e==null&&(e=r.shape.map((i,u)=>u).reverse()),w(r.rank===e.length,()=>`Error in transpose: rank of input ${r.rank} must match length of perm ${e}.`),e.forEach(i=>{w(i>=0&&i<r.rank,()=>`All entries in 'perm' must be between 0 and ${r.rank-1} but got ${e}`)}),r.rank<=1)return r.clone();const a={x:r},s={perm:e};return r.dtype==="complex64"?ce(()=>{let i=Ir(r),u=rs(r);return i=v.runKernel(ar,{x:i},s),u=v.runKernel(ar,{x:u},s),t&&(u=It(u)),Vt(i,u)}):v.runKernel(ar,a,s)}const Fo=k({transpose_:w0});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function _0(n,e,t,r,a=!0){const s=b(n,"v","movingAverage"),i=b(e,"x","movingAverage"),u=b(t,"decay","movingAverage");Ch(s,i),w(St(s.shape,i.shape),()=>"Shape mismatch in v and x");const c=oe(1),l=re(c,u);let o=z(re(i,s),l);if(a){w(r!=null,()=>"When using zeroDebias: true, step is required.");const p=b(r,"step","movingAverage");o=ge(o,re(c,gr(u,p)))}return X(s,o)}const I0=k({movingAverage_:_0});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function N0(n,e,t){et(t);const r=b(n,"indices","scatterND","int32"),a=b(e,"updates","scatterND");Vl(a,r,t);const s={indices:r,updates:a},i={shape:t};return v.runKernel(Fa,s,i)}const S0=k({scatterND_:N0});function k0(n,e,t,r){if(n.dtype!=="int32")throw new Error(`tf.sparseToDense() expects the indices to be int32 type, but the dtype was ${n.dtype}.`);if(n.rank>2)throw new Error(`sparseIndices should be a scalar, vector, or matrix, but got shape ${n.shape}.`);const a=n.rank>0?n.shape[0]:1,s=n.rank>1?n.shape[1]:1;if(t.length!==s)throw new Error(`outputShape has incorrect number of elements:, ${t.length}, should be: ${s}.`);const i=e.size;if(!(e.rank===0||e.rank===1&&i===a))throw new Error(`sparseValues has incorrect shape ${e.shape}, should be [] or [${a}]`);if(e.dtype!==r.dtype)throw new Error("sparseValues.dtype must match defaultValues.dtype")}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function v0(n,e,t,r=0){et(t);const a=b(n,"sparseIndices","sparseToDense","int32"),s=b(e,"sparseValues","sparseToDense","string_or_numeric"),i=b(r,"defaultValue","sparseToDense",s.dtype);k0(a,s,t,i);const u={sparseIndices:a,sparseValues:s,defaultValue:i},c={outputShape:t};return v.runKernel(Pa,u,c)}const T0=k({sparseToDense_:v0});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function x0(n,e){const t=b(e,"indices","gatherND","int32"),a={params:b(n,"x","gatherND","string_or_numeric"),indices:t};return v.runKernel(pa,a)}const $0=k({gatherND_:x0});/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function E0(n,e){if(e==null)return n.shape.slice();if(St(n.shape,e))return e;if(n.shape.length===e.length){const t=[];for(let r=0;r<n.shape.length;r++)e[r]==null&&n.shape[r]!=null?t.push(n.shape[r]):t.push(e[r]);return t}return e}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function A0(n,e,t,r){const a=b(n,"x","dropout");if(w(a.dtype==="float32",()=>`x has to be a floating point tensor since it's going to be scaled, but got a ${a.dtype} tensor instead.`),w(e>=0&&e<1,()=>`rate must be a float in the range [0, 1), but got ${e}.`),e===0)return n instanceof Be?a.clone():a;const s=E0(a,t),i=1-e,u=ge(_l(X(xo(s,0,1,"float32",r),i)),i);return z(a,u)}const D0=k({dropout_:A0});/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Hl(n){return Math.floor(Math.pow(2,Math.ceil(Math.log(n)/Math.log(2))))}function Oo(n,e,t){const r=1-n%2,a=new Float32Array(n);for(let s=0;s<n;++s){const i=2*Math.PI*s/(n+r-1);a[s]=e-t*Math.cos(i)}return ct(a,"float32")}/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */async function F0(n,e,t=1){const r=b(n,"predictions","inTopK"),a=b(e,"targets","inTopK");w(r.rank>1,()=>`inTopK() expects the predictions to be of rank 2 or higher, but got ${r.rank}`),w(r.rank-1===a.rank,()=>`predictions rank should be 1 larger than targets rank, but got predictions rank ${r.rank} and targets rank ${a.rank}`),Qe(r.shape.slice(0,r.shape.length-1),a.shape,"predictions's shape should be align with the targets' shape, except the last dimension.");const s=r.shape[r.shape.length-1];w(t>0&&t<=s,()=>`'k' passed to inTopK() must be > 0 && <= the predictions last dimension (${s}), but got ${t}`);const i=await r.data(),u=await a.data(),[c,l]=[i.length/s,s],o=Fm("bool",c);for(let p=0;p<c;p++){const d=p*l,m=i.subarray(d,d+l),f=[];for(let g=0;g<m.length;g++)f.push({value:m[g],index:g});f.sort((g,y)=>y.value-g.value),o[p]=0;for(let g=0;g<t;g++)if(f[g].index===u[p]){o[p]=1;break}}return n!==r&&r.dispose(),e!==a&&a.dispose(),mt(o,a.shape,"bool")}const O0=F0;/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function C0(n,e,t,r,a,s="NHWC",i){let u=n;n.rank===3&&(u=D(n,[1,n.shape[0],n.shape[1],n.shape[2]]));let c=e;c.rank===3&&(c=D(e,[1,e.shape[0],e.shape[1],e.shape[2]])),w(u.rank===4,()=>`Error in conv2dDerFilter: input must be rank 4, but got shape ${u.shape}.`),w(c.rank===4,()=>`Error in conv2dDerFilter: dy must be rank 4, but got shape ${c.shape}.`),w(t.length===4,()=>`Error in conv2dDerFilter: filterShape must be length 4, but got ${t}.`);const l=s==="NHWC"?u.shape[3]:u.shape[1],o=s==="NHWC"?c.shape[3]:c.shape[1];w(l===t[2],()=>`Error in conv2dDerFilter: depth of input ${l}) must match input depth in filter (${t[2]}.`),w(o===t[3],()=>`Error in conv2dDerFilter: depth of dy (${o}) must match output depth for filter (${t[3]}).`),gt("conv2dDerFilter",a,i);const p={x:u,dy:c},d={strides:r,pad:a,dataFormat:s,dimRoundingMode:i,filterShape:t};return v.runKernel(Km,p,d)}const R0=k({conv2DBackpropFilter_:C0});/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Co(n,e,t){if(t==null||t==="linear")return n;if(t==="relu")return z(n,zl(e));throw new Error(`Cannot compute gradient for fused activation ${t}.`)}function Ro(n,e){let t=e;const r=Iy(n.shape,e.shape);return r.length>0&&(t=ye(t,r)),D(t,n.shape)}function Mo(n,e,t,r){if(e==="linear")return n;if(e==="relu")return us(n);if(e==="elu")return fl(n);if(e==="relu6")return Ml(n);if(e==="prelu")return Ol(n,t);if(e==="leakyrelu")return Sl(n,r);if(e==="sigmoid")return Vn(n);throw new Error(`Unknown fused activation ${e}.`)}const Bo=(n,e)=>!(n>0)||e==="linear";/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function M0({x:n,filter:e,strides:t,pad:r,dataFormat:a="NHWC",dilations:s=[1,1],dimRoundingMode:i,bias:u,activation:c="linear",preluActivationWeights:l,leakyreluAlpha:o}){if(c=c||"linear",Bo(v.state.gradientDepth,c)===!1){w(a==="NHWC",()=>`Error in fused conv2d: got dataFormat of ${a} but only NHWC is currently supported for the case of gradient depth is 0 and the activation is not linear.`);let A=es(n,e,t,r,a,s,i);return u!=null&&(A=X(A,u)),Mo(A,c,l,o)}const p=b(n,"x","conv2d","float32"),d=b(e,"filter","conv2d","float32");let m=p,f=!1;p.rank===3&&(f=!0,m=D(p,[1,p.shape[0],p.shape[1],p.shape[2]])),w(m.rank===4,()=>`Error in fused conv2d: input must be rank 4, but got rank ${m.rank}.`),w(d.rank===4,()=>`Error in fused conv2d: filter must be rank 4, but got rank ${d.rank}.`),gt("fused conv2d",r,i);const g=a==="NHWC"?m.shape[3]:m.shape[1];w(d.shape[2]===g,()=>`Error in conv2d: depth of input (${g}) must match input depth for filter ${d.shape[2]}.`),w(xt(t,s),()=>`Error in conv2D: Either strides or dilations must be 1. Got strides ${t} and dilations '${s}'`);const y=Tt(m.shape,d.shape,t,s,r,i);let _;u!=null&&(_=b(u,"bias","fused conv2d"),[_]=Ie(_,p),a==="NHWC"?Ne(y.outShape,_.shape):(w(_.shape.length<=1,()=>`Error in fused conv2d: only supports scalar or 1-D Tensor bias for NCHW format but got the bias of rank-${_.shape.length}.`),w(_.shape.length===0||_.shape[0]===y.outChannels||_.shape[0]===1,()=>`Error in fused conv2d: bias shape (${_.shape}) is not compatible with the number of output channels (${y.outChannels})`)));let S;if(l!=null){const A=l.shape;if(w(A.length<=1||A.length===3,()=>`Error in fused conv2d: only supports scalar, 1-D Tensor or 3-D Tensor PReLU activation weights but got a tensor of rank-${A.length}.`),A.length===1)w(A[0]===1||A[0]===y.outChannels,()=>`Error in fused conv2d: PReLU activation weights (${A}) is not compatible with the number of output channels (${y.outChannels}).`);else if(A.length===3)try{Ne(A,y.outShape)}catch{const C=`Error in fused conv2d: PReLU activation weights (${A}) is not compatible with the output shape of the conv2d (${y.outShape}).`;throw Error(C)}S=b(l,"prelu weights","fused conv2d")}const I=(A,F)=>{w(a==="NHWC",()=>`Error in gradient of fused conv2D: got dataFormat of ${a} but only NHWC is currently supported.`);const[C,M,B,V]=F,j=Co(A,B,c);w(Yr(s),()=>`Error in gradient of fused conv2D: dilation rates greater than 1 are not yet supported in gradients. Got dilations '${s}'`);const q=ml(M.shape,j,C,t,r),te=R0(M,j,C.shape,t,r),J=[q,te];if(V!=null){const ue=Ro(V,j);J.push(ue)}return J},T={x:m,filter:d,bias:_,preluActivationWeights:S},$={strides:t,pad:r,dataFormat:a,dilations:s,dimRoundingMode:i,activation:c,leakyreluAlpha:o};return u==null?At((F,C,M)=>{let B=v.runKernel(Lr,T,$);return M([C,F,B]),f&&(B=D(B,[B.shape[1],B.shape[2],B.shape[3]])),{value:B,gradFunc:I}})(m,d):At((F,C,M,B)=>{let V=v.runKernel(Lr,T,$);return B([C,F,V,M]),f&&(V=D(V,[V.shape[1],V.shape[2],V.shape[3]])),{value:V,gradFunc:I}})(m,d,_)}const B0=k({fusedConv2d_:M0});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function P0(n,e,t,r,a,s=[1,1],i){let u=n;n.rank===3&&(u=D(n,[1,n.shape[0],n.shape[1],n.shape[2]]));let c=e;c.rank===3&&(c=D(e,[1,e.shape[0],e.shape[1],e.shape[2]]));const l={x:u,dy:c},o={strides:r,pad:a,dimRoundingMode:i,dilations:s,filterShape:t};return v.runKernel(Xm,l,o)}const L0=k({depthwiseConv2dNativeBackpropFilter_:P0});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function z0(n,e,t,r,a,s=[1,1],i){let u=e,c=!1;e.rank===3&&(c=!0,u=D(e,[1,e.shape[0],e.shape[1],e.shape[2]]));const l={dy:u,filter:t},o={strides:r,pad:a,dimRoundingMode:i,dilations:s,inputShape:n},p=v.runKernel(Jm,l,o);return c?D(p,[p.shape[1],p.shape[2],p.shape[3]]):p}const W0=k({depthwiseConv2dNativeBackpropInput_:z0});/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function V0({x:n,filter:e,strides:t,pad:r,dataFormat:a="NHWC",dilations:s=[1,1],dimRoundingMode:i,bias:u,activation:c="linear",preluActivationWeights:l,leakyreluAlpha:o}){if(Bo(v.state.gradientDepth,c)===!1){let $=mo(n,e,t,r,a,s,i);return u!=null&&($=X($,u)),Mo($,c,l,o)}const p=b(n,"x","depthwiseConv2d","float32"),d=b(e,"filter","depthwiseConv2d","float32");let m=p,f=!1;p.rank===3&&(f=!0,m=D(p,[1,p.shape[0],p.shape[1],p.shape[2]])),w(m.rank===4,()=>`Error in fused depthwiseConv2d: input must be rank 4, but got rank ${m.rank}.`),w(d.rank===4,()=>`Error in fused depthwiseConv2d: filter must be rank 4, but got rank ${d.rank}.`),w(m.shape[3]===d.shape[2],()=>`Error in fused depthwiseConv2d: number of input channels (${m.shape[3]}) must match the inChannels dimension in filter ${d.shape[2]}.`),s==null&&(s=[1,1]),w(xt(t,s),()=>`Error in fused depthwiseConv2d: Either strides or dilations must be 1. Got strides ${t} and dilations '${s}'`),gt("fused depthwiseConv2d",r,i);const g=Tt(m.shape,d.shape,t,s,r,i,!0);let y;u!=null&&(y=b(u,"bias","fused conv2d"),[y]=Ie(y,p),Ne(g.outShape,y.shape));let _;l!=null&&(_=b(l,"prelu weights","fused depthwiseConv2d"));const S=($,A)=>{w(Yr(s),()=>`Error in gradient of fused depthwiseConv2d: dilation rates greater than 1 are not yet supported. Got dilations '${s}'`);const[F,C,M,B]=A,V=Co($,M,c),j=W0(C.shape,V,F,t,r,s,i),q=L0(C,V,F.shape,t,r,s,i);if(B!=null){const te=Ro(y,V);return[j,q,te]}return[j,q]},I={x:m,filter:d,bias:y,preluActivationWeights:_},T={strides:t,pad:r,dataFormat:a,dilations:s,dimRoundingMode:i,activation:c,leakyreluAlpha:o};return u==null?At((A,F,C)=>{let M=v.runKernel(zr,I,T);return C([F,A,M]),f&&(M=D(M,[M.shape[1],M.shape[2],M.shape[3]])),{value:M,gradFunc:S}})(m,d):At((A,F,C,M)=>{let B=v.runKernel(zr,I,T);return M([F,A,B,C]),f&&(B=D(B,[B.shape[1],B.shape[2],B.shape[3]])),{value:B,gradFunc:S}})(m,d,y)}const U0=k({fusedDepthwiseConv2d_:V0});/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function H0({a:n,b:e,transposeA:t=!1,transposeB:r=!1,bias:a,activation:s="linear",preluActivationWeights:i,leakyreluAlpha:u=.2}){if(Bo(v.state.gradientDepth,s)===!1){let V=le(n,e,t,r);return a!=null&&(V=X(V,a)),Mo(V,s,i,u)}let c=b(n,"a","fused matMul"),l=b(e,"b","fused matMul");[c,l]=Ie(c,l);const o=t?c.shape[c.rank-2]:c.shape[c.rank-1],p=r?l.shape[l.rank-1]:l.shape[l.rank-2],d=t?c.shape[c.rank-1]:c.shape[c.rank-2],m=r?l.shape[l.rank-2]:l.shape[l.rank-1],f=c.shape.slice(0,-2),g=l.shape.slice(0,-2),y=P(f),_=P(g);w(o===p,()=>`Error in fused matMul: inner shapes (${o}) and (${p}) of Tensors with shapes ${c.shape} and ${l.shape} and transposeA=${t} and transposeB=${r} must match.`);const I=Ne(c.shape.slice(0,-2),l.shape.slice(0,-2)).concat([d,m]),T=t?D(c,[y,o,d]):D(c,[y,d,o]),$=r?D(l,[_,m,p]):D(l,[_,p,m]);let A;a!=null&&(A=b(a,"bias","fused matMul"),[A]=Ie(A,c),Ne(I,A.shape));let F;i!=null&&(F=b(i,"prelu weights","fused matMul"));const C=(V,j)=>{const[q,te,J,ue]=j,Se=Co(D(V,J.shape),J,s);let se,Fe;if(!t&&!r?(se=le(Se,te,!1,!0),Fe=le(q,Se,!0,!1)):!t&&r?(se=le(Se,te,!1,!1),Fe=le(Se,q,!0,!1)):t&&!r?(se=le(te,Se,!1,!0),Fe=le(q,Se,!1,!1)):(se=le(te,Se,!0,!0),Fe=le(Se,q,!0,!0)),a!=null){const We=Ro(ue,Se);return[se,Fe,We]}else return[se,Fe]},M={a:T,b:$,bias:A,preluActivationWeights:F},B={transposeA:t,transposeB:r,activation:s,leakyreluAlpha:u};return a==null?At((j,q,te)=>{const J=v.runKernel(Pr,M,B);return te([j,q,J]),{value:D(J,I),gradFunc:C}})(T,$):At((j,q,te,J)=>{const ue=v.runKernel(Pr,M,B);return J([j,q,ue,te]),{value:D(ue,I),gradFunc:C}})(T,$,A)}const j0=k({fusedMatMul_:H0});/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */var G0=Object.freeze({__proto__:null,conv2d:B0,depthwiseConv2d:U0,matMul:j0});/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function q0(n){return Oo(n,.54,.46)}const K0=k({hammingWindow_:q0});/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function X0(n){return Oo(n,.5,.5)}const jl=k({hannWindow_:X0});/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function J0(n,e,t,r=!1,a=0){let s=0;const i=[];for(;s+e<=n.size;)i.push(de(n,s,e)),s+=t;if(r)for(;s<n.size;){const u=s+e-n.size,c=ze([de(n,s,e-u),fr([u],a)]);i.push(c),s+=t}return i.length===0?Sr([],[0,e]):D(ze(i),[i.length,e])}const Gl=k({frame_:J0});/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Y0(n,e,t,r,a=jl){r==null&&(r=Hl(e));const s=Gl(n,e,t),i=z(s,a(e));return Eo(i,r)}const Z0=k({stft_:Y0});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Q0(n,e,t,r,a="bilinear",s=0){const i=b(n,"image","cropAndResize"),u=b(e,"boxes","cropAndResize","float32"),c=b(t,"boxInd","cropAndResize","int32"),l=u.shape[0];w(i.rank===4,()=>`Error in cropAndResize: image must be rank 4,but got rank ${i.rank}.`),w(u.rank===2&&u.shape[1]===4,()=>`Error in cropAndResize: boxes must be have size [${l},4] but had shape ${u.shape}.`),w(c.rank===1&&c.shape[0]===l,()=>`Error in cropAndResize: boxInd must be have size [${l}] but had shape ${u.shape}.`),w(r.length===2,()=>`Error in cropAndResize: cropSize must be of length 2, but got length ${r.length}.`),w(r[0]>=1&&r[1]>=1,()=>`cropSize must be atleast [1,1], but was ${r}`),w(a==="bilinear"||a==="nearest",()=>`method must be bilinear or nearest, but was ${a}`);const o={image:i,boxes:u,boxInd:c},p={method:a,extrapolationValue:s,cropSize:r};return v.runKernel(aa,o,p)}const e1=k({cropAndResize_:Q0});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function t1(n){const e=b(n,"image","flipLeftRight","float32");w(e.rank===4,()=>`Error in flipLeftRight: image must be rank 4,but got rank ${e.rank}.`);const t={image:e};return v.runKernel(ca,t,{})}const n1=k({flipLeftRight_:t1});/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function r1(n){const e=b(n,"image","grayscaleToRGB"),t=e.rank-1,r=e.shape[t];w(e.rank>=2,()=>`Error in grayscaleToRGB: images must be at least rank 2, but got rank ${e.rank}.`),w(r===1,()=>`Error in grayscaleToRGB: last dimension of a grayscale image should be size 1, but got size ${r}.`);const a=new Array(e.rank);return a.fill(1,0,t),a[t]=3,yr(e,a)}const s1=k({grayscaleToRGB_:r1});/**
 * @license
 * Copyright 2023 Google LLC.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function a1(n){const e=b(n,"image","RGBToGrayscale"),t=e.rank-1,r=e.shape[t];w(e.rank>=2,()=>`Error in RGBToGrayscale: images must be at least rank 2, but got rank ${e.rank}.`),w(r===3,()=>`Error in RGBToGrayscale: last dimension of an RGB image should be size 3, but got size ${r}.`);const a=e.dtype,s=ve(e,"float32"),i=ct([.2989,.587,.114]);let u;switch(e.rank){case 2:u=Un("ij,j->i",s,i);break;case 3:u=Un("ijk,k->ij",s,i);break;case 4:u=Un("ijkl,l->ijk",s,i);break;case 5:u=Un("ijklm,m->ijkl",s,i);break;case 6:u=Un("ijklmn,n->ijklm",s,i);break;default:throw new Error("Not a valid tensor rank.")}return u=Kt(u,-1),ve(u,a)}const o1=k({rgbToGrayscale_:a1});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function i1(n,e,t=0,r=.5){const a=b(n,"image","rotateWithOffset","float32");w(a.rank===4,()=>`Error in rotateWithOffset: image must be rank 4,but got rank ${a.rank}.`);const s={image:a},i={radians:e,fillValue:t,center:r};return v.runKernel(Ua,s,i)}const u1=k({rotateWithOffset_:i1});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function qn(n,e,t,r,a,s){r==null&&(r=.5),a==null&&(a=Number.NEGATIVE_INFINITY),s==null&&(s=0);const i=n.shape[0];return t=Math.min(t,i),w(0<=r&&r<=1,()=>`iouThreshold must be in [0, 1], but was '${r}'`),w(n.rank===2,()=>`boxes must be a 2D tensor, but was of rank '${n.rank}'`),w(n.shape[1]===4,()=>`boxes must have 4 columns, but 2nd dimension was ${n.shape[1]}`),w(e.rank===1,()=>"scores must be a 1D tensor"),w(e.shape[0]===i,()=>`scores has incompatible shape with boxes. Expected ${i}, but was ${e.shape[0]}`),w(0<=s&&s<=1,()=>`softNmsSigma must be in [0, 1], but was '${s}'`),{maxOutputSize:t,iouThreshold:r,scoreThreshold:a,softNmsSigma:s}}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function c1(n,e,t,r=.5,a=Number.NEGATIVE_INFINITY){const s=b(n,"boxes","nonMaxSuppression","float32"),i=b(e,"scores","nonMaxSuppression","float32"),u=qn(s,i,t,r,a);t=u.maxOutputSize,r=u.iouThreshold,a=u.scoreThreshold;const c={maxOutputSize:t,iouThreshold:r,scoreThreshold:a};return v.runKernel(Na,{boxes:s,scores:i},c)}const l1=k({nonMaxSuppression_:c1});/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function p1(n,e,t){const r=d1(n,e,t),a=r<0?-(r+1):r;n.splice(a,0,e)}function d1(n,e,t){return h1(n,e,t||m1)}function m1(n,e){return n>e?1:n<e?-1:0}function h1(n,e,t){let r=0,a=n.length,s=0,i=!1;for(;r<a;){s=r+(a-r>>>1);const u=t(e,n[s]);u>0?r=s+1:(a=s,i=!u)}return i?r:-r-1}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function f1(n,e,t,r,a){return Po(n,e,t,r,a,0)}function g1(n,e,t,r,a,s){return Po(n,e,t,r,a,0,!1,s,!0)}function y1(n,e,t,r,a,s){return Po(n,e,t,r,a,s,!0)}function Po(n,e,t,r,a,s,i=!1,u=!1,c=!1){const l=[];for(let y=0;y<e.length;y++)e[y]>a&&l.push({score:e[y],boxIndex:y,suppressBeginIndex:0});l.sort(ql);const o=s>0?-.5/s:0,p=[],d=[];for(;p.length<t&&l.length>0;){const y=l.pop(),{score:_,boxIndex:S,suppressBeginIndex:I}=y;if(_<a)break;let T=!1;for(let $=p.length-1;$>=I;--$){const A=b1(n,S,p[$]);if(A>=r){T=!0;break}if(y.score=y.score*w1(r,o,A),y.score<=a)break}y.suppressBeginIndex=p.length,T||(y.score===_?(p.push(S),d.push(y.score)):y.score>a&&p1(l,y,ql))}const m=p.length,f=t-m;u&&f>0&&(p.push(...new Array(f).fill(0)),d.push(...new Array(f).fill(0)));const g={selectedIndices:p};return i&&(g.selectedScores=d),c&&(g.validOutputs=m),g}function b1(n,e,t){const r=n.subarray(e*4,e*4+4),a=n.subarray(t*4,t*4+4),s=Math.min(r[0],r[2]),i=Math.min(r[1],r[3]),u=Math.max(r[0],r[2]),c=Math.max(r[1],r[3]),l=Math.min(a[0],a[2]),o=Math.min(a[1],a[3]),p=Math.max(a[0],a[2]),d=Math.max(a[1],a[3]),m=(u-s)*(c-i),f=(p-l)*(d-o);if(m<=0||f<=0)return 0;const g=Math.max(s,l),y=Math.max(i,o),_=Math.min(u,p),S=Math.min(c,d),I=Math.max(_-g,0)*Math.max(S-y,0);return I/(m+f-I)}function w1(n,e,t){const r=Math.exp(e*t*t);return t<=n?r:0}function ql(n,e){return n.score-e.score||n.score===e.score&&e.boxIndex-n.boxIndex}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */async function _1(n,e,t,r=.5,a=Number.NEGATIVE_INFINITY){const s=b(n,"boxes","nonMaxSuppressionAsync"),i=b(e,"scores","nonMaxSuppressionAsync"),u=qn(s,i,t,r,a);t=u.maxOutputSize,r=u.iouThreshold,a=u.scoreThreshold;const c=await Promise.all([s.data(),i.data()]),l=c[0],o=c[1],{selectedIndices:p}=f1(l,o,t,r,a);return s!==n&&s.dispose(),i!==e&&i.dispose(),ct(p,"int32")}const I1=_1;/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function N1(n,e,t,r=.5,a=Number.NEGATIVE_INFINITY,s=0){const i=b(n,"boxes","nonMaxSuppression"),u=b(e,"scores","nonMaxSuppression"),c=qn(i,u,t,r,a,s);t=c.maxOutputSize,r=c.iouThreshold,a=c.scoreThreshold,s=c.softNmsSigma;const l={boxes:i,scores:u},o={maxOutputSize:t,iouThreshold:r,scoreThreshold:a,softNmsSigma:s},p=v.runKernel(ka,l,o);return{selectedIndices:p[0],selectedScores:p[1]}}const S1=k({nonMaxSuppressionWithScore_:N1});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */async function k1(n,e,t,r=.5,a=Number.NEGATIVE_INFINITY,s=0){const i=b(n,"boxes","nonMaxSuppressionAsync"),u=b(e,"scores","nonMaxSuppressionAsync"),c=qn(i,u,t,r,a,s);t=c.maxOutputSize,r=c.iouThreshold,a=c.scoreThreshold,s=c.softNmsSigma;const l=await Promise.all([i.data(),u.data()]),o=l[0],p=l[1],{selectedIndices:d,selectedScores:m}=y1(o,p,t,r,a,s);return i!==n&&i.dispose(),u!==e&&u.dispose(),{selectedIndices:ct(d,"int32"),selectedScores:ct(m)}}const v1=k1;/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function T1(n,e,t,r=.5,a=Number.NEGATIVE_INFINITY,s=!1){const i=b(n,"boxes","nonMaxSuppression"),u=b(e,"scores","nonMaxSuppression"),c=qn(i,u,t,r,a,null),l=c.maxOutputSize,o=c.iouThreshold,p=c.scoreThreshold,d={boxes:i,scores:u},m={maxOutputSize:l,iouThreshold:o,scoreThreshold:p,padToMaxOutputSize:s},f=v.runKernel(Sa,d,m);return{selectedIndices:f[0],validOutputs:f[1]}}const x1=k({nonMaxSuppressionPadded_:T1});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */async function $1(n,e,t,r=.5,a=Number.NEGATIVE_INFINITY,s=!1){const i=b(n,"boxes","nonMaxSuppressionAsync"),u=b(e,"scores","nonMaxSuppressionAsync"),c=qn(i,u,t,r,a,null),l=c.maxOutputSize,o=c.iouThreshold,p=c.scoreThreshold,[d,m]=await Promise.all([i.data(),u.data()]),{selectedIndices:f,validOutputs:g}=g1(d,m,l,o,p,s);return i!==n&&i.dispose(),u!==e&&u.dispose(),{selectedIndices:ct(f,"int32"),validOutputs:oe(g,"int32")}}const E1=$1;/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function A1(n,e,t=!1,r=!1){const a=b(n,"images","resizeBilinear");w(a.rank===3||a.rank===4,()=>`Error in resizeBilinear: x must be rank 3 or 4, but got rank ${a.rank}.`),w(e.length===2,()=>`Error in resizeBilinear: new shape must 2D, but got shape ${e}.`),w(r===!1||t===!1,()=>"Error in resizeBilinear: If halfPixelCenters is true, alignCorners must be false.");let s=a,i=!1;a.rank===3&&(i=!0,s=D(a,[1,a.shape[0],a.shape[1],a.shape[2]]));const u={images:s},c={alignCorners:t,halfPixelCenters:r,size:e},l=v.runKernel(Aa,u,c);return i?D(l,[l.shape[1],l.shape[2],l.shape[3]]):l}const D1=k({resizeBilinear_:A1});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function F1(n,e,t=!1,r=!1){const a=b(n,"images","resizeNearestNeighbor");w(a.rank===3||a.rank===4,()=>`Error in resizeNearestNeighbor: x must be rank 3 or 4, but got rank ${a.rank}.`),w(e.length===2,()=>`Error in resizeNearestNeighbor: new shape must 2D, but got shape ${e}.`),w(a.dtype==="float32"||a.dtype==="int32",()=>"`images` must have `int32` or `float32` as dtype"),w(r===!1||t===!1,()=>"Error in resizeNearestNeighbor: If halfPixelCenters is true, alignCorners must be false.");let s=a,i=!1;a.rank===3&&(i=!0,s=D(a,[1,a.shape[0],a.shape[1],a.shape[2]]));const u={images:s},c={alignCorners:t,halfPixelCenters:r,size:e},l=v.runKernel(Ea,u,c);return i?D(l,[l.shape[1],l.shape[2],l.shape[3]]):l}const O1=k({resizeNearestNeighbor_:F1});/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function C1(n,e="binary",t=!1,r=.5){const a=b(n,"image","threshold"),s=.2989,i=.587,u=.114,c=a.shape[0]*a.shape[1];let l=z(ct([r]),255),o,p,d,m;if(w(a.rank===3,()=>`Error in threshold: image must be rank 3,but got rank ${a.rank}.`),w(a.shape[2]===3||a.shape[2]===1,()=>`Error in threshold: image color channel must be equal to 3 or 1but got ${a.shape[2]}.`),w(a.dtype==="int32"||a.dtype==="float32",()=>`Error in dtype: image dtype must be int32 or float32,but got dtype ${a.dtype}.`),w(e==="otsu"||e==="binary",()=>`Method must be binary or otsu, but was ${e}`),a.shape[2]===3){[o,p,d]=Nr(a,[1,1,1],-1);const y=z(o,s),_=z(p,i),S=z(d,u);m=X(X(y,_),S)}else m=n;if(e==="otsu"){const y=dl(ve(Bl(m),"int32"),mt([]),256);l=R1(y,c)}const f=t?yo(m,l):ns(m,l);return ve(z(f,255),"int32")}function R1(n,e){let t=ct([-1]),r=ct([0]),a=ct([0]),s,i,u,c,l,o;for(let p=0;p<n.size-1;p++){s=de(n,0,p+1),i=de(n,p+1),l=ge(ye(s),e),o=ge(ye(i),e);const d=ye(z(s,_r(0,s.size)));u=ge(d,ye(s));const m=fr(i.shape,s.size),f=X(_r(0,i.size),m),g=z(i,f);c=ge(ye(g),ye(i));const y=re(u,c),_=re(u,c),S=z(l,o);a=z(z(S,y),_);const I=ns(a,r);r=qt(I,a,r),t=qt(I,ct([p]),t)}return t}const M1=k({threshold_:C1});/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function B1(n,e,t="nearest",r="constant",a=0,s){const i=b(n,"image","transform","float32"),u=b(e,"transforms","transform","float32");w(i.rank===4,()=>`Error in transform: image must be rank 4,but got rank ${i.rank}.`),w(u.rank===2&&(u.shape[0]===i.shape[0]||u.shape[0]===1)&&u.shape[1]===8,()=>"Error in transform: Input transform should be batch x 8 or 1 x 8"),w(s==null||s.length===2,()=>`Error in transform: outputShape must be [height, width] or null, but got ${s}.`);const c={image:i,transforms:u},l={interpolation:t,fillMode:r,fillValue:a,outputShape:s};return v.runKernel(Wa,c,l)}const P1=k({transform_:B1});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function L1(n,e,t){const r=b(n,"a","bandPart");w(r.rank>=2,()=>`bandPart(): Rank must be at least 2, got ${r.rank}.`);const a=r.shape,[s,i]=r.shape.slice(-2);let u,c;typeof e=="number"?(w(e%1===0,()=>`bandPart(): numLower must be an integer, got ${e}.`),w(e<=s,()=>`bandPart(): numLower (${e}) must not be greater than the number of rows (${s}).`),u=b(e<0?s:e,"numLower","bandPart")):(w(e.dtype==="int32",()=>"bandPart(): numLower's dtype must be an int32."),u=qt(go(e,0),s,is(e,s))),typeof t=="number"?(w(t%1===0,()=>`bandPart(): numUpper must be an integer, got ${t}.`),w(t<=i,()=>`bandPart(): numUpper (${t}) must not be greater than the number of columns (${i}).`),c=b(t<0?i:t,"numUpper","bandPart")):(w(t.dtype==="int32",()=>"bandPart(): numUpper's dtype must be an int32."),c=qt(go(t,0),i,is(t,i)));const l=D(_r(0,s,1,"int32"),[-1,1]),o=_r(0,i,1,"int32"),p=re(l,o),d=ss(yo(p,u),Nl(p,It(c))),m=Gn([s,i],r.dtype);return D(Dt(gn(D(r,[-1,s,i])).map(f=>qt(d,f,m))),a)}const z1=k({bandPart_:L1});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function W1(n){let e;if(Array.isArray(n)){e=!1,w(n!=null&&n.length>0,()=>"Gram-Schmidt process: input must not be null, undefined, or empty");const a=n[0].shape[0];for(let s=1;s<n.length;++s)w(n[s].shape[0]===a,()=>`Gram-Schmidt: Non-unique lengths found in the input vectors: (${n[s].shape[0]} vs. ${a})`)}else e=!0,n=Nr(n,n.shape[0],0).map(a=>Ao(a,[0]));w(n.length<=n[0].shape[0],()=>`Gram-Schmidt: Number of vectors (${n.length}) exceeds number of dimensions (${n[0].shape[0]}).`);const t=[],r=n;for(let a=0;a<n.length;++a)t.push(v.tidy(()=>{let s=r[a];if(a>0)for(let i=0;i<a;++i){const u=z(ye(z(t[i],s)),t[i]);s=re(s,u)}return ge(s,ts(s,"euclidean"))}));return e?Dt(t,0):t}const V1=k({gramSchmidt_:W1});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function U1(n,e=!1){if(w(n.rank>=2,()=>`qr() requires input tensor to have a rank >= 2, but got rank ${n.rank}`),n.rank===2)return Kl(n,e);{const t=n.shape.slice(0,n.shape.length-2).reduce((c,l)=>c*l),r=gn(D(n,[t,n.shape[n.shape.length-2],n.shape[n.shape.length-1]]),0),a=[],s=[];r.forEach(c=>{const[l,o]=Kl(c,e);a.push(l),s.push(o)});const i=D(Dt(a,0),n.shape),u=D(Dt(s,0),n.shape);return[i,u]}}function Kl(n,e=!1){return v.tidy(()=>{w(n.shape.length===2,()=>`qr2d() requires a 2D Tensor, but got a ${n.shape.length}D Tensor.`);const t=n.shape[0],r=n.shape[1];let a=wl(t),s=Gt(n);const i=Sr([[1]],[1,1]);let u=Gt(i);const c=t>=r?r:t;for(let l=0;l<c;++l){const o=s,p=u,d=a;[u,s,a]=v.tidy(()=>{const m=de(s,[l,l],[t-l,1]),f=ts(m),g=de(s,[l,l],[1,1]),y=qt(ns(g,0),Sr([[-1]]),Sr([[1]])),_=re(g,z(y,f)),S=ge(m,_);S.shape[0]===1?u=Gt(i):u=ze([i,de(S,[1,0],[S.shape[0]-1,S.shape[1]])],0);const I=It(ge(le(y,_),f)),T=de(s,[l,0],[t-l,r]),$=z(I,u),A=Fo(u);if(l===0)s=re(T,le($,le(A,T)));else{const M=re(T,le($,le(A,T)));s=ze([de(s,[0,0],[l,r]),M],0)}const F=Fo($),C=de(a,[0,l],[t,a.shape[1]-l]);if(l===0)a=re(C,le(le(C,u),F));else{const M=re(C,le(le(C,u),F));a=ze([de(a,[0,0],[t,l]),M],1)}return[u,s,a]}),Pe([o,p,d])}return!e&&t>r&&(a=de(a,[0,0],[t,r]),s=de(s,[0,0],[r,r])),[a,s]})}const H1=k({qr_:U1});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */var He;(function(n){n[n.NONE=0]="NONE",n[n.MEAN=1]="MEAN",n[n.SUM=2]="SUM",n[n.SUM_BY_NONZERO_WEIGHTS=3]="SUM_BY_NONZERO_WEIGHTS"})(He||(He={}));function j1(n,e,t=He.SUM_BY_NONZERO_WEIGHTS){const r=b(n,"losses","computeWeightedLoss");let a=null;e!=null&&(a=b(e,"weights","computeWeightedLoss"));const s=a==null?r:z(r,a);if(t===He.NONE)return s;if(t===He.SUM)return ye(s);if(t===He.MEAN){if(a==null)return os(s);{const i=r.size/a.size,u=ge(ye(s),ye(a));return i>1?ge(u,oe(i)):u}}if(t===He.SUM_BY_NONZERO_WEIGHTS){if(a==null)return ge(ye(s),oe(r.size));{const i=z(a,mn(r.shape)),u=ve(ye(Dl(i,oe(0))),"float32");return ge(ye(s),u)}}throw Error(`Unknown reduction: ${t}`)}const Ft=k({computeWeightedLoss_:j1});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function G1(n,e,t,r=He.SUM_BY_NONZERO_WEIGHTS){const a=b(n,"labels","absoluteDifference"),s=b(e,"predictions","absoluteDifference");let i=null;t!=null&&(i=b(t,"weights","absoluteDifference")),Qe(a.shape,s.shape,"Error in absoluteDifference: ");const u=tt(re(a,s));return Ft(u,i,r)}const q1=k({absoluteDifference_:G1});function K1(n,e,t,r,a=He.SUM_BY_NONZERO_WEIGHTS){const s=b(n,"labels","cosineDistance"),i=b(e,"predictions","cosineDistance");let u=null;r!=null&&(u=b(r,"weights","cosineDistance")),Qe(s.shape,i.shape,"Error in cosineDistance: ");const c=oe(1),l=re(c,ye(z(s,i),t,!0));return Ft(l,u,a)}const X1=k({cosineDistance_:K1});function J1(n,e,t,r=He.SUM_BY_NONZERO_WEIGHTS){let a=b(n,"labels","hingeLoss");const s=b(e,"predictions","hingeLoss");let i=null;t!=null&&(i=b(t,"weights","hingeLoss")),Qe(a.shape,s.shape,"Error in hingeLoss: ");const u=oe(1);a=re(z(oe(2),a),u);const c=us(re(u,z(a,s)));return Ft(c,i,r)}const Y1=k({hingeLoss_:J1});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Z1(n,e,t,r=1,a=He.SUM_BY_NONZERO_WEIGHTS){const s=b(n,"labels","huberLoss"),i=b(e,"predictions","huberLoss");let u=null;t!=null&&(u=b(t,"weights","huberLoss")),Qe(s.shape,i.shape,"Error in huberLoss: ");const c=oe(r),l=tt(re(i,s)),o=is(l,c),p=re(l,o),d=X(z(oe(.5),bt(o)),z(c,p));return Ft(d,u,a)}const Q1=k({huberLoss_:Z1});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function eI(n,e,t,r=1e-7,a=He.SUM_BY_NONZERO_WEIGHTS){const s=b(n,"labels","logLoss"),i=b(e,"predictions","logLoss");let u=null;t!=null&&(u=b(t,"weights","logLoss")),Qe(s.shape,i.shape,"Error in logLoss: ");const c=oe(1),l=oe(r),o=It(z(s,br(X(i,l)))),p=z(re(c,s),br(X(re(c,i),l))),d=re(o,p);return Ft(d,u,a)}const tI=k({logLoss_:eI});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function nI(n,e,t,r=He.SUM_BY_NONZERO_WEIGHTS){const a=b(n,"labels","meanSquaredError"),s=b(e,"predictions","meanSquaredError");let i=null;t!=null&&(i=b(t,"weights","meanSquaredError")),Qe(a.shape,s.shape,"Error in meanSquaredError: ");const u=Ll(a,s);return Ft(u,i,r)}const rI=k({meanSquaredError_:nI});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function sI(n,e){const t=b(n,"labels","sigmoidCrossEntropyWithLogits"),r=b(e,"logits","sigmoidCrossEntropyWithLogits");Qe(t.shape,r.shape,"Error in sigmoidCrossEntropyWithLogits: ");const a=us(r),s=z(r,t),i=kl(dn(It(tt(r))));return X(re(a,s),i)}function aI(n,e,t,r=0,a=He.SUM_BY_NONZERO_WEIGHTS){let s=b(n,"multiClassLabels","sigmoidCrossEntropy");const i=b(e,"logits","sigmoidCrossEntropy");let u=null;if(t!=null&&(u=b(t,"weights","sigmoidCrossEntropy")),Qe(s.shape,i.shape,"Error in sigmoidCrossEntropy: "),r>0){const l=oe(r),o=oe(1),p=oe(.5);s=X(z(s,re(o,l)),z(p,l))}const c=sI(s,i);return Ft(c,u,a)}const oI=k({sigmoidCrossEntropy_:aI});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function iI(n,e,t=-1){if(t===-1&&(t=e.rank-1),t!==e.rank-1)throw Error(`Softmax cross entropy along a non-last dimension is not yet supported. Labels / logits was rank ${e.rank} and dim was ${t}`);return At((a,s,i)=>{const c=Tl(s,[t],!0),l=re(ve(s,"float32"),c);i([a,l]);const o=It(z(l,a));return{value:ye(o,[t]),gradFunc:(m,f)=>{const[g,y]=f,_=yt(m.shape,[t]);return[z(D(m,_),re(ve(g,"float32"),dn(y))),z(D(m,_),re(dn(y),ve(g,"float32")))]}}})(n,e)}function uI(n,e,t,r=0,a=He.SUM_BY_NONZERO_WEIGHTS){let s=b(n,"onehotLabels","softmaxCrossEntropy");const i=b(e,"logits","softmaxCrossEntropy");let u=null;if(t!=null&&(u=b(t,"weights","softmaxCrossEntropy")),Qe(s.shape,i.shape,"Error in softmaxCrossEntropy: "),r>0){const l=oe(r),o=oe(1),p=oe(s.shape[1]);s=X(z(s,re(o,l)),ge(l,p))}const c=iI(s,i);return Ft(c,u,a)}const cI=k({softmaxCrossEntropy_:uI});/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function lI(n,e,t,r){const a=b(n,"indices","sparseFillEmptyRows","int32"),s=b(e,"values","sparseFillEmptyRows"),i=b(t,"denseShape","sparseFillEmptyRows","int32"),u=b(r,"defaultValue","sparseFillEmptyRows",s.dtype);if(a.rank!==2)throw new Error(`Indices should be Tensor2D but received shape
        ${a.shape}`);if(s.rank!==1)throw new Error(`Values should be Tensor1D but received shape ${s.shape}`);if(i.rank!==1)throw new Error(`Dense shape should be Tensor1D but received shape ${i.shape}`);if(u.rank!==0)throw new Error(`Default value should be a scalar but received shape ${u.shape}`);const c={indices:a,values:s,denseShape:i,defaultValue:u},l=v.runKernel(ec,c);return{outputIndices:l[0],outputValues:l[1],emptyRowIndicator:l[2],reverseIndexMap:l[3]}}const pI=k({sparseFillEmptyRows_:lI});/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function dI(n,e,t){const r=b(n,"inputIndices","sparseReshape","int32"),a=b(e,"inputShape","sparseReshape","int32"),s=b(t,"newShape","sparseReshape","int32");if(r.rank!==2)throw new Error(`Input indices should be Tensor2D but received shape
        ${r.shape}`);if(a.rank!==1)throw new Error(`Input shape should be Tensor1D but received shape ${a.shape}`);if(s.rank!==1)throw new Error(`New shape should be Tensor1D but received shape ${s.shape}`);const i={inputIndices:r,inputShape:a,newShape:s},u=v.runKernel(Ba,i);return{outputIndices:u[0],outputShape:u[1]}}const mI=k({sparseReshape_:dI});/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function hI(n,e,t){const r=b(n,"data","sparseSegmentMean"),a=b(e,"indices","sparseSegmentMean","int32"),s=b(t,"segmentIds","sparseSegmentMean","int32");if(r.rank<1)throw new Error("Data should be at least 1 dimensional but received scalar");if(a.rank!==1)throw new Error(`Indices should be Tensor1D but received shape
          ${a.shape}`);if(s.rank!==1)throw new Error(`Segment ids should be Tensor1D but received shape
          ${s.shape}`);const i={data:r,indices:a,segmentIds:s};return v.runKernel(tc,i)}const fI=k({sparseSegmentMean_:hI});/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function gI(n,e,t){const r=b(n,"data","sparseSegmentSum"),a=b(e,"indices","sparseSegmentSum","int32"),s=b(t,"segmentIds","sparseSegmentSum","int32");if(r.rank<1)throw new Error("Data should be at least 1 dimensional but received scalar");if(a.rank!==1)throw new Error(`Indices should be Tensor1D but received shape
         ${a.shape}`);if(s.rank!==1)throw new Error(`Segment ids should be Tensor1D but received shape
         ${s.shape}`);const i={data:r,indices:a,segmentIds:s};return v.runKernel(nc,i)}const yI=k({sparseSegmentSum_:gI});/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function bI(n,e,t,r,a,s,i,u){const c=b(n,"data","stringNGrams","string");if(c.dtype!=="string")throw new Error("Data must be of datatype string");if(c.shape.length!==1)throw new Error(`Data must be a vector, saw: ${c.shape}`);const l=b(e,"dataSplits","stringNGrams");if(l.dtype!=="int32")throw new Error("Data splits must be of datatype int32");const o={separator:t,nGramWidths:r,leftPad:a,rightPad:s,padWidth:i,preserveShortSequences:u},p={data:c,dataSplits:l},d=v.runKernel(sc,p,o);return{nGrams:d[0],nGramsSplits:d[1]}}const wI=k({stringNGrams_:bI});/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function _I(n,e,t=!0){const r=b(n,"input","stringSplit","string"),a=b(e,"delimiter","stringSplit","string");if(r.rank!==1)throw new Error(`Input should be Tensor1D but received shape ${r.shape}`);if(a.rank!==0)throw new Error(`Delimiter should be a scalar but received shape ${a.shape}`);const s={skipEmpty:t},i={input:r,delimiter:a},u=v.runKernel(ac,i,s);return{indices:u[0],values:u[1],shape:u[2]}}const II=k({stringSplit_:_I});/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function NI(n,e){const t=b(n,"input","stringToHashBucketFast","string"),r={numBuckets:e};if(e<=0)throw new Error("Number of buckets must be at least 1");const a={input:t};return v.runKernel(oc,a,r)}const SI=k({stringToHashBucketFast_:NI});/**
 * @license
 * Copyright 2023 Google LLC.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function kI(n,e,t,r=!0){const a=b(n,"input","staticRegexReplace","string"),s={pattern:e,rewrite:t,replaceGlobal:r};return v.runKernel(ch,{x:a},s)}const vI=k({staticRegexReplace_:kI});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const TI={fft:$o,ifft:cs,rfft:Eo,irfft:Pl},xI={hammingWindow:K0,hannWindow:jl,frame:Gl,stft:Z0},$I={flipLeftRight:n1,grayscaleToRGB:s1,resizeNearestNeighbor:O1,resizeBilinear:D1,rgbToGrayscale:o1,rotateWithOffset:u1,cropAndResize:e1,nonMaxSuppression:l1,nonMaxSuppressionAsync:I1,nonMaxSuppressionWithScore:S1,nonMaxSuppressionWithScoreAsync:v1,nonMaxSuppressionPadded:x1,nonMaxSuppressionPaddedAsync:E1,threshold:M1,transform:P1},EI={bandPart:z1,gramSchmidt:V1,qr:H1},AI={absoluteDifference:q1,computeWeightedLoss:Ft,cosineDistance:X1,hingeLoss:Y1,huberLoss:Q1,logLoss:tI,meanSquaredError:rI,sigmoidCrossEntropy:oI,softmaxCrossEntropy:cI},DI={sparseFillEmptyRows:pI,sparseReshape:mI,sparseSegmentMean:fI,sparseSegmentSum:yI},FI={stringNGrams:wI,stringSplit:II,stringToHashBucketFast:SI,staticRegexReplace:vI};/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const OI=new Map,CI=new Map;class RI{getClassName(){return this.constructor.className}static fromConfig(e,t){return new e(t)}}class yn{constructor(){this.classNameMap={}}static getMap(){return yn.instance==null&&(yn.instance=new yn),yn.instance}static register(e){yn.getMap().classNameMap[e.className]=[e,e.fromConfig]}}function MI(n,e,t){w(n.className!=null,()=>"Class being registered does not have the static className property defined."),w(typeof n.className=="string",()=>"className is required to be a string, but got type "+typeof n.className),w(n.className.length>0,()=>"Class being registered has an empty-string as its className, which is disallowed."),typeof e>"u"&&(e="Custom"),typeof t>"u"&&(t=n.className);const r=t,a=e+">"+r;return yn.register(n),OI.set(a,n),CI.set(n,a),n}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */class bn extends RI{minimize(e,t=!1,r){const{value:a,grads:s}=this.computeGradients(e,r);if(r!=null){const i=r.map(u=>({name:u.name,tensor:s[u.name]}));this.applyGradients(i)}else this.applyGradients(s);return Pe(s),t?a:(a.dispose(),null)}get iterations(){return this.iterations_==null&&(this.iterations_=0),this.iterations_}incrementIterations(){this.iterations_=this.iterations+1}computeGradients(e,t){return gb(e,t)}dispose(){this.iterations_!=null&&Pe(this.iterations_)}async saveIterations(){return this.iterations_==null&&(this.iterations_=0),{name:"iter",tensor:oe(this.iterations_,"int32")}}async getWeights(){throw new Error("getWeights() is not implemented for this optimizer yet.")}async setWeights(e){throw new Error(`setWeights() is not implemented for this optimizer class ${this.getClassName()}`)}async extractIterations(e){return this.iterations_=(await e[0].tensor.data())[0],e.slice(1)}}Object.defineProperty(bn,Symbol.hasInstance,{value:n=>n.minimize!=null&&n.computeGradients!=null&&n.applyGradients!=null});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */class BI extends bn{static get className(){return"Adadelta"}constructor(e,t,r=null){super(),this.learningRate=e,this.rho=t,this.epsilon=r,this.accumulatedGrads=[],this.accumulatedUpdates=[],r==null&&(this.epsilon=v.backend.epsilon())}applyGradients(e){(Array.isArray(e)?e.map(r=>r.name):Object.keys(e)).forEach((r,a)=>{const s=v.registeredVariables[r],i=!1;this.accumulatedGrads[a]==null&&(this.accumulatedGrads[a]={originalName:`${r}/accum_grad`,variable:ce(()=>nt(s).variable(i))}),this.accumulatedUpdates[a]==null&&(this.accumulatedUpdates[a]={originalName:`${r}/accum_var`,variable:ce(()=>nt(s).variable(i))});const u=Array.isArray(e)?e[a].tensor:e[r];if(u==null)return;const c=this.accumulatedGrads[a].variable,l=this.accumulatedUpdates[a].variable;ce(()=>{const o=X(z(c,this.rho),z(bt(u),1-this.rho)),p=z(ge(Et(X(l,this.epsilon)),Et(X(c,this.epsilon))),u),d=X(z(l,this.rho),z(bt(p),1-this.rho));c.assign(o),l.assign(d);const m=X(z(p,-this.learningRate),s);s.assign(m)})}),this.incrementIterations()}dispose(){this.accumulatedUpdates!=null&&(Pe(this.accumulatedGrads.map(e=>e.variable)),Pe(this.accumulatedUpdates.map(e=>e.variable)))}async getWeights(){const e=[...this.accumulatedGrads,...this.accumulatedUpdates];return[await this.saveIterations()].concat(e.map(t=>({name:t.originalName,tensor:t.variable})))}async setWeights(e){e=await this.extractIterations(e);const t=e.length/2,r=!1;this.accumulatedGrads=e.slice(0,t).map(a=>({originalName:a.name,variable:a.tensor.variable(r)})),this.accumulatedUpdates=e.slice(t,t*2).map(a=>({originalName:a.name,variable:a.tensor.variable(r)}))}getConfig(){return{learningRate:this.learningRate,rho:this.rho,epsilon:this.epsilon}}static fromConfig(e,t){return new e(t.learningRate,t.rho,t.epsilon)}}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */class PI extends bn{static get className(){return"Adagrad"}constructor(e,t=.1){super(),this.learningRate=e,this.initialAccumulatorValue=t,this.accumulatedGrads=[]}applyGradients(e){(Array.isArray(e)?e.map(r=>r.name):Object.keys(e)).forEach((r,a)=>{const s=v.registeredVariables[r];this.accumulatedGrads[a]==null&&(this.accumulatedGrads[a]={originalName:`${r}/accumulator`,variable:ce(()=>fr(s.shape,this.initialAccumulatorValue).variable(!1))});const i=Array.isArray(e)?e[a].tensor:e[r];if(i==null)return;const u=this.accumulatedGrads[a].variable;ce(()=>{const c=X(u,bt(i));u.assign(c);const l=X(z(ge(i,Et(X(c,v.backend.epsilon()))),-this.learningRate),s);s.assign(l)})}),this.incrementIterations()}dispose(){this.accumulatedGrads!=null&&Pe(this.accumulatedGrads.map(e=>e.variable))}async getWeights(){return[await this.saveIterations()].concat(this.accumulatedGrads.map(e=>({name:e.originalName,tensor:e.variable})))}async setWeights(e){e=await this.extractIterations(e);const t=!1;this.accumulatedGrads=e.map(r=>({originalName:r.name,variable:r.tensor.variable(t)}))}getConfig(){return{learningRate:this.learningRate,initialAccumulatorValue:this.initialAccumulatorValue}}static fromConfig(e,t){return new e(t.learningRate,t.initialAccumulatorValue)}}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */class LI extends bn{static get className(){return"Adam"}constructor(e,t,r,a=null){super(),this.learningRate=e,this.beta1=t,this.beta2=r,this.epsilon=a,this.accumulatedFirstMoment=[],this.accumulatedSecondMoment=[],ce(()=>{this.accBeta1=oe(t).variable(),this.accBeta2=oe(r).variable()}),a==null&&(this.epsilon=v.backend.epsilon())}applyGradients(e){const t=Array.isArray(e)?e.map(r=>r.name):Object.keys(e);ce(()=>{const r=re(1,this.accBeta1),a=re(1,this.accBeta2);t.forEach((s,i)=>{const u=v.registeredVariables[s],c=!1;this.accumulatedFirstMoment[i]==null&&(this.accumulatedFirstMoment[i]={originalName:`${s}/m`,variable:ce(()=>nt(u).variable(c))}),this.accumulatedSecondMoment[i]==null&&(this.accumulatedSecondMoment[i]={originalName:`${s}/v`,variable:ce(()=>nt(u).variable(c))});const l=Array.isArray(e)?e[i].tensor:e[s];if(l==null)return;const o=this.accumulatedFirstMoment[i].variable,p=this.accumulatedSecondMoment[i].variable,d=X(z(o,this.beta1),z(l,1-this.beta1)),m=X(z(p,this.beta2),z(bt(l),1-this.beta2)),f=ge(d,r),g=ge(m,a);o.assign(d),p.assign(m);const y=X(z(ge(f,X(Et(g),this.epsilon)),-this.learningRate),u);u.assign(y)}),this.accBeta1.assign(z(this.accBeta1,this.beta1)),this.accBeta2.assign(z(this.accBeta2,this.beta2))}),this.incrementIterations()}dispose(){this.accBeta1.dispose(),this.accBeta2.dispose(),this.accumulatedFirstMoment!=null&&Pe(this.accumulatedFirstMoment.map(e=>e.variable)),this.accumulatedSecondMoment!=null&&Pe(this.accumulatedSecondMoment.map(e=>e.variable))}async getWeights(){const e=[...this.accumulatedFirstMoment,...this.accumulatedSecondMoment];return[await this.saveIterations()].concat(e.map(t=>({name:t.originalName,tensor:t.variable})))}async setWeights(e){e=await this.extractIterations(e),ce(()=>{this.accBeta1.assign(gr(this.beta1,this.iterations_+1)),this.accBeta2.assign(gr(this.beta2,this.iterations_+1))});const t=e.length/2,r=!1;this.accumulatedFirstMoment=e.slice(0,t).map(a=>({originalName:a.name,variable:a.tensor.variable(r)})),this.accumulatedSecondMoment=e.slice(t,t*2).map(a=>({originalName:a.name,variable:a.tensor.variable(r)}))}getConfig(){return{learningRate:this.learningRate,beta1:this.beta1,beta2:this.beta2,epsilon:this.epsilon}}static fromConfig(e,t){return new e(t.learningRate,t.beta1,t.beta2,t.epsilon)}}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */class zI extends bn{static get className(){return"Adamax"}constructor(e,t,r,a=null,s=0){super(),this.learningRate=e,this.beta1=t,this.beta2=r,this.epsilon=a,this.decay=s,this.accumulatedFirstMoment=[],this.accumulatedWeightedInfNorm=[],ce(()=>{this.iteration=oe(0).variable(),this.accBeta1=oe(t).variable()}),a==null&&(this.epsilon=v.backend.epsilon())}applyGradients(e){const t=Array.isArray(e)?e.map(r=>r.name):Object.keys(e);ce(()=>{const r=re(1,this.accBeta1),a=ge(-this.learningRate,X(z(this.iteration,this.decay),1));t.forEach((s,i)=>{const u=v.registeredVariables[s],c=!1;this.accumulatedFirstMoment[i]==null&&(this.accumulatedFirstMoment[i]={originalName:`${s}/m`,variable:nt(u).variable(c)}),this.accumulatedWeightedInfNorm[i]==null&&(this.accumulatedWeightedInfNorm[i]={originalName:`${s}/v`,variable:nt(u).variable(c)});const l=Array.isArray(e)?e[i].tensor:e[s];if(l==null)return;const o=this.accumulatedFirstMoment[i].variable,p=this.accumulatedWeightedInfNorm[i].variable,d=X(z(o,this.beta1),z(l,1-this.beta1)),m=z(p,this.beta2),f=tt(l),g=Al(m,f);o.assign(d),p.assign(g);const y=X(z(ge(a,r),ge(d,X(g,this.epsilon))),u);u.assign(y)}),this.iteration.assign(X(this.iteration,1)),this.accBeta1.assign(z(this.accBeta1,this.beta1))}),this.incrementIterations()}dispose(){this.accBeta1.dispose(),this.iteration.dispose(),this.accumulatedFirstMoment!=null&&Pe(this.accumulatedFirstMoment.map(e=>e.variable)),this.accumulatedWeightedInfNorm!=null&&Pe(this.accumulatedWeightedInfNorm.map(e=>e.variable))}async getWeights(){throw new Error("getWeights() is not implemented for Adamax yet.")}async setWeights(e){throw new Error("setWeights() is not implemented for Adamax yet.")}getConfig(){return{learningRate:this.learningRate,beta1:this.beta1,beta2:this.beta2,epsilon:this.epsilon,decay:this.decay}}static fromConfig(e,t){return new e(t.learningRate,t.beta1,t.beta2,t.epsilon,t.decay)}}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */class Xl extends bn{static get className(){return"SGD"}constructor(e){super(),this.learningRate=e,this.setLearningRate(e)}applyGradients(e){(Array.isArray(e)?e.map(r=>r.name):Object.keys(e)).forEach((r,a)=>{const s=Array.isArray(e)?e[a].tensor:e[r];if(s==null)return;const i=v.registeredVariables[r];ce(()=>{const u=X(z(this.c,s),i);i.assign(u)})}),this.incrementIterations()}setLearningRate(e){this.learningRate=e,this.c!=null&&this.c.dispose(),this.c=_t(oe(-e))}dispose(){this.c.dispose()}async getWeights(){return[await this.saveIterations()]}async setWeights(e){if(e=await this.extractIterations(e),e.length!==0)throw new Error("SGD optimizer does not have settable weights.")}getConfig(){return{learningRate:this.learningRate}}static fromConfig(e,t){return new e(t.learningRate)}}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */class WI extends Xl{static get className(){return"Momentum"}constructor(e,t,r=!1){super(e),this.learningRate=e,this.momentum=t,this.useNesterov=r,this.accumulations=[],this.m=oe(this.momentum)}applyGradients(e){(Array.isArray(e)?e.map(r=>r.name):Object.keys(e)).forEach((r,a)=>{const s=v.registeredVariables[r];this.accumulations[a]==null&&(this.accumulations[a]={originalName:`${r}/momentum`,variable:ce(()=>nt(s).variable(!1))});const i=this.accumulations[a].variable,u=Array.isArray(e)?e[a].tensor:e[r];u!=null&&ce(()=>{let c;const l=X(z(this.m,i),u);this.useNesterov?c=X(z(this.c,X(u,z(l,this.m))),s):c=X(z(this.c,l),s),i.assign(l),s.assign(c)})}),this.incrementIterations()}dispose(){this.m.dispose(),this.accumulations!=null&&Pe(this.accumulations.map(e=>e.variable))}setMomentum(e){this.momentum=e}async getWeights(){return[await this.saveIterations()].concat(this.accumulations.map(e=>({name:e.originalName,tensor:e.variable})))}async setWeights(e){e=await this.extractIterations(e);const t=!1;this.accumulations=e.map(r=>({originalName:r.name,variable:r.tensor.variable(t)}))}getConfig(){return{learningRate:this.learningRate,momentum:this.momentum,useNesterov:this.useNesterov}}static fromConfig(e,t){return new e(t.learningRate,t.momentum,t.useNesterov)}}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */class VI extends bn{static get className(){return"RMSProp"}constructor(e,t=.9,r=0,a=null,s=!1){if(super(),this.learningRate=e,this.decay=t,this.momentum=r,this.epsilon=a,this.accumulatedMeanSquares=[],this.accumulatedMoments=[],this.accumulatedMeanGrads=[],this.centered=s,a==null&&(this.epsilon=v.backend.epsilon()),e==null)throw new Error("learningRate for RMSPropOptimizer must be defined.")}applyGradients(e){(Array.isArray(e)?e.map(r=>r.name):Object.keys(e)).forEach((r,a)=>{const s=v.registeredVariables[r],i=!1;this.accumulatedMeanSquares[a]==null&&(this.accumulatedMeanSquares[a]={originalName:`${r}/rms`,variable:ce(()=>nt(s).variable(i))}),this.accumulatedMoments[a]==null&&(this.accumulatedMoments[a]={originalName:`${r}/momentum`,variable:ce(()=>nt(s).variable(i))}),this.accumulatedMeanGrads[a]==null&&this.centered&&(this.accumulatedMeanGrads[a]={originalName:`${r}/mg`,variable:ce(()=>nt(s).variable(i))});const u=Array.isArray(e)?e[a].tensor:e[r];if(u==null)return;const c=this.accumulatedMeanSquares[a].variable,l=this.accumulatedMoments[a].variable;ce(()=>{const o=X(z(c,this.decay),z(bt(u),1-this.decay));if(this.centered){const p=this.accumulatedMeanGrads[a].variable,d=X(z(p,this.decay),z(u,1-this.decay)),m=ge(z(u,this.learningRate),Et(re(o,X(bt(d),this.epsilon)))),f=X(z(l,this.momentum),m);c.assign(o),p.assign(d),l.assign(f);const g=re(s,f);s.assign(g)}else{const p=X(z(c,this.decay),z(bt(u),1-this.decay)),d=X(z(l,this.momentum),ge(z(u,this.learningRate),Et(X(p,this.epsilon))));c.assign(p),l.assign(d);const m=re(s,d);s.assign(m)}})}),this.incrementIterations()}dispose(){this.accumulatedMeanSquares!=null&&Pe(this.accumulatedMeanSquares.map(e=>e.variable)),this.accumulatedMeanGrads!=null&&this.centered&&Pe(this.accumulatedMeanGrads.map(e=>e.variable)),this.accumulatedMoments!=null&&Pe(this.accumulatedMoments.map(e=>e.variable))}async getWeights(){const e=[...this.accumulatedMeanSquares,...this.accumulatedMoments];return this.centered&&e.push(...this.accumulatedMeanGrads),[await this.saveIterations()].concat(e.map(t=>({name:t.originalName,tensor:t.variable})))}async setWeights(e){e=await this.extractIterations(e);const t=this.centered?e.length/3:e.length/2,r=!1;this.accumulatedMeanSquares=e.slice(0,t).map(a=>({originalName:a.name,variable:a.tensor.variable(r)})),this.accumulatedMoments=e.slice(t,t*2).map(a=>({originalName:a.name,variable:a.tensor.variable(r)})),this.centered&&(this.accumulatedMeanGrads=e.slice(t*2,t*3).map(a=>({originalName:a.name,variable:a.tensor.variable(r)})))}getConfig(){return{learningRate:this.learningRate,decay:this.decay,momentum:this.momentum,epsilon:this.epsilon,centered:this.centered}}static fromConfig(e,t){return new e(t.learningRate,t.decay,t.momentum,t.epsilon,t.centered)}}/**
 * @license
 * Copyright 2022 Google LLC.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const UI=[BI,PI,LI,zI,WI,VI,Xl];function HI(){for(const n of UI)MI(n)}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const jI="model",GI=".json",qI=".weights.bin";function Jl(n){return new Promise(e=>setTimeout(e)).then(n)}class wn{constructor(e){if(!Z().getBool("IS_BROWSER"))throw new Error("browserDownloads() cannot proceed because the current environment is not a browser.");e.startsWith(wn.URL_SCHEME)&&(e=e.slice(wn.URL_SCHEME.length)),(e==null||e.length===0)&&(e=jI),this.modelJsonFileName=e+GI,this.weightDataFileName=e+qI}async save(e){if(typeof document>"u")throw new Error("Browser downloads are not supported in this environment since `document` is not present");const t=ht.join(e.weightData),r=window.URL.createObjectURL(new Blob([t],{type:"application/octet-stream"}));if(e.modelTopology instanceof ArrayBuffer)throw new Error("BrowserDownloads.save() does not support saving model topology in binary formats yet.");{const a=[{paths:["./"+this.weightDataFileName],weights:e.weightSpecs}],s=Zc(e,a),i=window.URL.createObjectURL(new Blob([JSON.stringify(s)],{type:"application/json"})),u=this.modelJsonAnchor==null?document.createElement("a"):this.modelJsonAnchor;if(u.download=this.modelJsonFileName,u.href=i,await Jl(()=>u.dispatchEvent(new MouseEvent("click"))),e.weightData!=null){const c=this.weightDataAnchor==null?document.createElement("a"):this.weightDataAnchor;c.download=this.weightDataFileName,c.href=r,await Jl(()=>c.dispatchEvent(new MouseEvent("click")))}return{modelArtifactsInfo:dr(e)}}}}wn.URL_SCHEME="downloads://";class KI{constructor(e){if(e==null||e.length<1)throw new Error(`When calling browserFiles, at least 1 file is required, but received ${e}`);this.jsonFile=e[0],this.weightsFiles=e.slice(1)}async load(){return new Promise((e,t)=>{const r=new FileReader;r.onload=a=>{const s=JSON.parse(a.target.result),i=s.modelTopology;if(i==null){t(new Error(`modelTopology field is missing from file ${this.jsonFile.name}`));return}if(s.weightsManifest==null){t(new Error(`weightManifest field is missing from file ${this.jsonFile.name}`));return}if(this.weightsFiles.length===0){e({modelTopology:i});return}const c=no(s,l=>this.loadWeights(l));e(c)},r.onerror=a=>t(`Failed to read model topology and weights manifest JSON from file '${this.jsonFile.name}'. BrowserFiles supports loading Keras-style tf.Model artifacts only.`),r.readAsText(this.jsonFile)})}loadWeights(e){const t=[],r=[];for(const i of e)t.push(...i.weights),r.push(...i.paths);const a=this.checkManifestAndWeightFiles(e),s=r.map(i=>this.loadWeightsFile(i,a[i]));return Promise.all(s).then(i=>[t,i])}loadWeightsFile(e,t){return new Promise((r,a)=>{const s=new FileReader;s.onload=i=>{const u=i.target.result;r(u)},s.onerror=i=>a(`Failed to weights data from file of path '${e}'.`),s.readAsArrayBuffer(t)})}checkManifestAndWeightFiles(e){const t=[],r=this.weightsFiles.map(s=>Yc(s.name)),a={};for(const s of e)s.paths.forEach(i=>{const u=Yc(i);if(t.indexOf(u)!==-1)throw new Error(`Duplicate file basename found in weights manifest: '${u}'`);if(t.push(u),r.indexOf(u)===-1)throw new Error(`Weight file with basename '${u}' is not provided.`);a[i]=this.weightsFiles[r.indexOf(u)]});if(t.length!==this.weightsFiles.length)throw new Error(`Mismatch in the number of files in weights manifest (${t.length}) and the number of weight files provided (${this.weightsFiles.length}).`);return a}}const XI=n=>Z().getBool("IS_BROWSER")&&!Array.isArray(n)&&n.startsWith(wn.URL_SCHEME)?JI(n.slice(wn.URL_SCHEME.length)):null;we.registerSaveRouter(XI);function JI(n="model"){return new wn(n)}function YI(n){return new KI(n)}/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Yl(n,e,t,r){i(n),t=t??0,r=r??1,u(t,r);let a=0;const s=c=>(c.then(l=>{const o=t+ ++a/n.length*(r-t);return e(o),l}),c);function i(c){w(c!=null&&Array.isArray(c)&&c.length>0,()=>"promises must be a none empty array")}function u(c,l){w(c>=0&&c<=1,()=>`Progress fraction must be in range [0, 1], but got startFraction ${c}`),w(l>=0&&l<=1,()=>`Progress fraction must be in range [0, 1], but got endFraction ${l}`),w(l>=c,()=>`startFraction must be no more than endFraction, but got startFraction ${c} and endFraction ${l}`)}return Promise.all(n.map(s))}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */async function Zl(n,e){e==null&&(e={});const t=e.fetchFunc==null?Z().platform.fetch:e.fetchFunc,r=n.map(p=>t(p,e.requestInit,{isBinary:!0})),u=(e.onProgress==null?await Promise.all(r):await Yl(r,e.onProgress,0,.5)).map(p=>p.arrayBuffer());return e.onProgress==null?await Promise.all(u):await Yl(u,e.onProgress,.5,1)}function ZI(n,e){var t;const r=e.fetchFunc==null?Z().platform.fetch:e.fetchFunc;let a=0,s;return(t=e.onProgress)===null||t===void 0||t.call(e,0),new ReadableStream({pull:async i=>{for(var u;a<n.length;){s||(s=(await r(n[a],e.requestInit,{isBinary:!0})).body.getReader());const{done:c,value:l}=await s.read();if(c){a++,s=void 0,(u=e.onProgress)===null||u===void 0||u.call(e,a/n.length);continue}i.enqueue(l);return}i.close()}})}async function QI(n,e="",t,r){return Ql(i=>Zl(i,{requestInit:r}))(n,e,t)}function Ql(n){return async(e,t="",r)=>{const a=e.map(()=>!1),s={},i=r!=null?r.map(()=>!1):[],u=[];if(e.forEach((m,f)=>{let g=0;m.weights.forEach(y=>{const _="quantization"in y?y.quantization.dtype:y.dtype,S=on[_]*P(y.shape),I=()=>{a[f]=!0,s[f]==null&&(s[f]=[]),s[f].push({manifestEntry:y,groupOffset:g,sizeBytes:S})};r!=null?r.forEach((T,$)=>{T===y.name&&(I(),i[$]=!0)}):I(),u.push(y.name),g+=S})}),!i.every(m=>m)){const m=r.filter((f,g)=>!i[g]);throw new Error(`Could not find weights in manifest with names: ${m.join(", ")}. 
Manifest JSON has weights with names: ${u.join(", ")}.`)}const c=a.reduce((m,f,g)=>(f&&m.push(g),m),[]),l=[];c.forEach(m=>{e[m].paths.forEach(f=>{const g=t+(t.endsWith("/")?"":"/")+f;l.push(g)})});const o=await n(l),p={};let d=0;return c.forEach(m=>{const f=e[m].paths.length,g=new ht(o.slice(d,d+f));s[m].forEach(_=>{const S=g.slice(_.groupOffset,_.groupOffset+_.sizeBytes),I=Gc(S,[_.manifestEntry]);for(const T in I)p[T]=I[T]}),d+=f}),p}}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const eN="application/octet-stream",tN="application/json";class Lo{constructor(e,t){if(this.DEFAULT_METHOD="POST",t==null&&(t={}),this.weightPathPrefix=t.weightPathPrefix,this.weightUrlConverter=t.weightUrlConverter,t.fetchFunc!=null?(w(typeof t.fetchFunc=="function",()=>"Must pass a function that matches the signature of `fetch` (see https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API)"),this.fetch=t.fetchFunc):this.fetch=Z().platform.fetch,w(e!=null&&e.length>0,()=>"URL path for http must not be null, undefined or empty."),Array.isArray(e)&&w(e.length===2,()=>`URL paths for http must have a length of 2, (actual length is ${e.length}).`),this.path=e,t.requestInit!=null&&t.requestInit.body!=null)throw new Error("requestInit is expected to have no pre-existing body, but has one.");this.requestInit=t.requestInit||{},this.loadOptions=t}async save(e){if(e.modelTopology instanceof ArrayBuffer)throw new Error("BrowserHTTPRequest.save() does not support saving model topology in binary formats yet.");const t=Object.assign({method:this.DEFAULT_METHOD},this.requestInit);t.body=new FormData;const r=[{paths:["./model.weights.bin"],weights:e.weightSpecs}],a=Zc(e,r);if(t.body.append("model.json",new Blob([JSON.stringify(a)],{type:tN}),"model.json"),e.weightData!=null){const i=ht.join(e.weightData);t.body.append("model.weights.bin",new Blob([i],{type:eN}),"model.weights.bin")}const s=await this.fetch(this.path,t);if(s.ok)return{modelArtifactsInfo:dr(e),responses:[s]};throw new Error(`BrowserHTTPRequest.save() failed due to HTTP response status ${s.status}.`)}async loadModelJSON(){const e=await this.fetch(this.path,this.requestInit);if(!e.ok)throw new Error(`Request to ${this.path} failed with status code ${e.status}. Please verify this URL points to the model JSON of the model to load.`);let t;try{t=await e.json()}catch{let i=`Failed to parse model JSON of response from ${this.path}.`;throw this.path.endsWith(".pb")?i+=" Your path contains a .pb file extension. Support for .pb models have been removed in TensorFlow.js 1.0 in favor of .json models. You can re-convert your Python TensorFlow model using the TensorFlow.js 1.0 conversion scripts or you can convert your.pb models with the 'pb2json'NPM script in the tensorflow/tfjs-converter repository.":i+=" Please make sure the server is serving valid JSON for this request.",new Error(i)}const r=t.modelTopology,a=t.weightsManifest;if(r==null&&a==null)throw new Error(`The JSON from HTTP path ${this.path} contains neither model topology or manifest for weights.`);return t}async load(){if(this.loadOptions.streamWeights)return this.loadStream();const e=await this.loadModelJSON();return no(e,t=>this.loadWeights(t))}async loadStream(){const e=await this.loadModelJSON(),t=await this.getWeightUrls(e.weightsManifest),r=ro(e.weightsManifest),a=()=>ZI(t,this.loadOptions);return Object.assign(Object.assign({},e),{weightSpecs:r,getWeightStream:a})}async getWeightUrls(e){const t=Array.isArray(this.path)?this.path[1]:this.path,[r,a]=nN(t),s=this.weightPathPrefix||r,i=[],u=[];for(const c of e)for(const l of c.paths)this.weightUrlConverter!=null?u.push(this.weightUrlConverter(l)):i.push(s+l+a);return this.weightUrlConverter&&i.push(...await Promise.all(u)),i}async loadWeights(e){const t=await this.getWeightUrls(e),r=ro(e),a=await Zl(t,this.loadOptions);return[r,a]}}Lo.URL_SCHEME_REGEX=/^https?:\/\//;function nN(n){const e=n.lastIndexOf("/"),t=n.lastIndexOf("?"),r=n.substring(0,e),a=t>e?n.substring(t):"";return[r+"/",a]}function zo(n){return n.match(Lo.URL_SCHEME_REGEX)!=null}const ep=(n,e)=>{if(typeof fetch>"u"&&(e==null||e.fetchFunc==null))return null;{let t=!0;if(Array.isArray(n)?t=n.every(r=>zo(r)):t=zo(n),t)return Wo(n,e)}return null};we.registerSaveRouter(ep),we.registerLoadRouter(ep);function Wo(n,e){return new Lo(n,e)}function rN(n,e){return Wo(n,e)}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */class Vo{constructor(e){this.modelArtifacts=e}load(){return this.modelArtifacts}}class tp{constructor(e){this.saveHandler=e}save(e){return this.saveHandler(e)}}class sN{constructor(e){e.load&&(this.load=()=>Promise.resolve(e.load())),e.save&&(this.save=t=>Promise.resolve(e.save(t)))}}function aN(n,e,t,r){const a=arguments;return new sN(np(...a))}function np(n,e,t,r){return arguments.length===1?n.modelTopology!=null||n.weightSpecs!=null?new Vo(n):(console.warn("Please call tf.io.fromMemory() with only one argument. The argument should be of type ModelArtifacts. The multi-argument signature of tf.io.fromMemory() has been deprecated and will be removed in a future release."),new Vo({modelTopology:n})):(console.warn("Please call tf.io.fromMemory() with only one argument. The argument should be of type ModelArtifacts. The multi-argument signature of tf.io.fromMemory() has been deprecated and will be removed in a future release."),new Vo({modelTopology:n,weightSpecs:e,weightData:t,trainingConfig:r}))}function oN(n){return new tp(n)}function iN(n){return new tp(n)}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */var rp=Object.freeze({__proto__:null,CompositeArrayBuffer:ht,browserFiles:YI,browserHTTPRequest:rN,concatenateArrayBuffers:Qh,copyModel:Nf,decodeWeights:Gc,decodeWeightsStream:Xc,encodeWeights:qh,fromMemory:aN,fromMemorySync:np,getLoadHandlers:uf,getModelArtifactsForJSON:no,getModelArtifactsForJSONSync:Qc,getModelArtifactsInfoForJSON:dr,getSaveHandlers:of,getWeightSpecs:ro,http:Wo,isHTTPScheme:zo,listModels:_f,loadWeights:QI,moveModel:Sf,registerLoadRouter:af,registerSaveRouter:sf,removeModel:If,weightsLoaderFactory:Ql,withSaveHandler:oN,withSaveHandlerSync:iN});function uN(n,e){const t=n.shape.length,r=e.shape.length;if(t<1)throw new Error(`tf.gatherND() expects the input to be rank 1 or higher, but the rank was ${t}.`);if(r<1)throw new Error(`tf.gatherND() expects the indices to be rank 1 or higher, but the rank was ${r}.`);if(e.dtype!=="int32")throw new Error(`tf.gatherND() expects the indices to be int32 type, but the dtype was ${e.dtype}.`);if(e.shape[r-1]>t)throw new Error(`index innermost dimension length must be <= tensor rank; saw: ${e.shape[r-1]} vs. ${t}`);if(P(n.shape)===0)throw new Error(`Requested more than 0 entries, but input is empty. Input shape: ${n.shape}.`);const a=e.shape,s=a[a.length-1];let i=1;for(let p=0;p<a.length-1;++p)i*=a[p];const u=n.shape,c=a.slice();c.pop();let l=1;for(let p=s;p<t;++p)l*=u[p],c.push(u[p]);const o=[...Ee(n.shape).map(p=>p/l),1].slice(0,s);return[c,i,l,o]}/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Uo=-2,cN=-1;function lN(n,e,t){const r=[];for(let a=0;a<n.length;a++)r[a]=Math.ceil((e[a]-n[a])/t[a]);return r}function sp(n,e,t){let r=t.length;for(let a=0;a<t.length;a++)if(t[a]>1){r=a;break}for(let a=r+1;a<t.length;a++)if(e[a]>0||t[a]!==n[a])return!1;return!0}function ap(n,e){let t=n.length>0?n[n.length-1]:1;for(let r=0;r<n.length-1;r++)t+=n[r]*e[r];return t}function pN(n,e,t){let r;const a=n.shape.length;typeof e=="number"?r=[e,...new Array(a-1).fill(0)]:e.length<a?r=e.concat(new Array(a-e.length).fill(0)):r=e.slice(),r.forEach(i=>{w(i!==-1,()=>"slice() does not support negative begin indexing.")});let s;return t==null?s=new Array(a).fill(-1):typeof t=="number"?s=[t,...new Array(a-1).fill(-1)]:t.length<a?s=t.concat(new Array(a-t.length).fill(-1)):s=t,s=s.map((i,u)=>i>=0?i:(w(i===-1,()=>`Negative size values should be exactly -1 but got ${i} for the slice() size at index ${u}.`),n.shape[u]-r[u])),[r,s]}function dN(n,e,t,r,a,s,i,u,c){let l;if(r==null?(l=new Array(e.length),l.fill(1)):l=r,i!=null&&i&i-1)throw new Error("Multiple ellipses in slice is not allowed.");let o=!1;const p={dims:l.length,numAddAxisAfterEllipsis:0,begin:e.slice(),end:t.slice(),strides:l.slice(),beginMask:a,endMask:s,ellipsisMask:i,newAxisMask:u,shrinkAxisMask:c};for(let I=0;I<p.dims;I++)o&&1<<I&u&&p.numAddAxisAfterEllipsis++,1<<I&i&&(o=!0);o||(p.ellipsisMask|=1<<p.dims,p.dims++);const d={dims:n.length,beginMask:0,endMask:0,beginValid:!1,endValid:!1};mN(p,d);let m=!0,f=!0,g=!0;const y=[],_=[];for(let I=0;I<n.length;++I){if(d.strides[I]===0)throw Error(`strides[${I}] must be non-zero`);const T=!!(d.shrinkAxisMask&1<<I),$=n[I];if($===-1){y.push(T?1:-1);continue}const A=[d.beginMask&1<<I,d.endMask&1<<I],F=[d.strides[I]>0?0:-1,d.strides[I]>0?$:$-1];if(T&&d.strides[I]<=0)throw Error("only stride 1 allowed on non-range indexing.");g=g&&d.strides[I]===1;const C=!!(d.beginMask&1<<I&&d.endMask&1<<I);if(d.beginValid&&d.endValid){if(T){const j=d.begin[I]<0?$+d.begin[I]:d.begin[I];if(d.begin[I]=j,d.end[I]=d.begin[I]+1,j<0||j>=$)throw Error(`slice index ${d.begin[I]} of dimension ${I} out of bounds.`)}else d.begin[I]=op(d.begin[I],0,d.strides[I],$,A,F),d.end[I]=op(d.end[I],1,d.strides[I],$,A,F);const V=d.strides[I]===1&&d.begin[I]===0&&d.end[I]===$;m=m&&V,f=f&&(I===0&&d.strides[I]===1||V)}else m=m&&d.strides[I]===1&&C,f=f&&(I===0&&d.strides[I]===1||C);let M,B=!1;if(d.beginValid&&d.endValid?(M=d.end[I]-d.begin[I],B=!0):T?(M=1,B=!0):C&&$>=0&&(d.strides[I]<0?M=-$:M=$,B=!0),B){let V;M===0||M<0!=d.strides[I]<0?V=0:V=Math.trunc(M/d.strides[I])+(M%d.strides[I]!==0?1:0),y.push(V)}else y.push(-1)}for(let I=0;I<d.finalShapeGatherIndices.length;++I){const T=d.finalShapeGatherIndices[I];T>=0?_.push(y[T]):T===Uo&&_.push(1)}return{finalShapeSparse:_.filter((I,T)=>d.finalShapeGatherIndices[T]!==Uo),finalShape:_,isIdentity:m,sliceDim0:f,isSimpleSlice:g,begin:d.begin,end:d.end,strides:d.strides}}function mN(n,e){e.beginMask=0,e.endMask=0,e.shrinkAxisMask=0;let t=0;e.beginValid=n.begin!=null,e.endValid=n.end!=null,e.begin=new Array(e.dims),e.end=new Array(e.dims),e.strides=new Array(e.dims),e.finalShapeGatherIndices=[],e.finalShapeGatherIndicesSparse=[],e.inputShapeGatherIndicesSparse=new Array(e.dims);for(let r=0;r<n.dims;r++)if(1<<r&n.ellipsisMask){const a=Math.min(e.dims-(n.dims-r)+1+n.numAddAxisAfterEllipsis,e.dims);for(;t<a;t++)e.begin[t]=0,e.end[t]=0,e.strides[t]=1,e.beginMask|=1<<t,e.endMask|=1<<t,e.finalShapeGatherIndices.push(t),e.finalShapeGatherIndicesSparse.push(-1),e.inputShapeGatherIndicesSparse[t]=r}else if(1<<r&n.newAxisMask)e.finalShapeGatherIndices.push(Uo),e.finalShapeGatherIndicesSparse.push(-1);else{if(t===e.begin.length)throw Error(`Index out of range using input dim ${t}; input has only ${e.dims} dims, ${e.begin.length}.`);n.begin!=null&&(e.begin[t]=n.begin[r]),n.end!=null&&(e.end[t]=n.end[r]),e.strides[t]=n.strides[r],n.beginMask&1<<r&&(e.beginMask|=1<<t),n.endMask&1<<r&&(e.endMask|=1<<t),n.shrinkAxisMask&1<<r?(e.finalShapeGatherIndices.push(cN),e.finalShapeGatherIndicesSparse.push(-1),e.shrinkAxisMask|=1<<t):(e.finalShapeGatherIndices.push(t),e.finalShapeGatherIndicesSparse.push(r)),e.inputShapeGatherIndicesSparse[t]=r,t++}}function op(n,e,t,r,a,s){if(a[e])return t>0?s[e]:s[e+1&1];{const i=n<0?r+n:n;return i<s[0]?s[0]:i>s[1]?s[1]:i}}/**
 * @license
 * Copyright 2017 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function hN(n,e){const t=n[0].length;n.forEach((a,s)=>{w(a.length===t,()=>`Error in concat${t}D: rank of tensors[${s}] must be the same as the rank of the rest (${t})`)}),w(e>=0&&e<t,()=>`Error in concat${t}D: axis must be between 0 and ${t-1}.`);const r=n[0];n.forEach((a,s)=>{for(let i=0;i<t;i++)w(i===e||a[i]===r[i],()=>`Error in concat${t}D: Shape of tensors[${s}] (${a}) does not match the shape of the rest (${r}) along the non-concatenated axis ${s}.`)})}function Ho(n,e){const t=n[0].slice();for(let r=1;r<n.length;r++)t[e]+=n[r][e];return t}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function fN(n,e,t){const r=t*(typeof n=="number"?n:n[0]),a=e*(typeof n=="number"?n:n[1]);return[r,a]}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function ip(n,e,t,r=!0){let a=[];if(r)a=a.concat(e.slice(0)),a.push(n[0]/t),a=a.concat(n.slice(1));else{a=a.concat(n[0]);const s=e.length;for(let i=0;i<s;++i)a=a.concat([n[i+1]/e[i],e[i]]);a=a.concat(n.slice(s+1))}return a}function up(n,e,t=!0){const r=[];if(t){r.push(e);for(let a=e+1;a<n;++a)a<=2*e?(r.push(a),r.push(a-(e+1))):r.push(a)}else{const a=[],s=[];for(let i=1;i<n;++i)i>=e*2+1||i%2===1?s.push(i):a.push(i);r.push(...a),r.push(0),r.push(...s)}return r}function cp(n,e,t,r=!0){const a=[];r?a.push(n[0]/t):a.push(n[0]*t);for(let s=1;s<n.length;++s)s<=e.length?r?a.push(e[s-1]*n[s]):a.push(n[s]/e[s-1]):a.push(n[s]);return a}function gN(n,e){const t=[0];for(let r=0;r<e;++r)t.push(n[r][0]);return t}function yN(n,e,t){const r=n.slice(0,1);for(let a=0;a<t;++a)r.push(n[a+1]-e[a][0]-e[a][1]);return r}function bN(n,e,t=0){let r=[];if(typeof e=="number")w(n.shape[t]%e===0,()=>"Number of splits must evenly divide the axis."),r=new Array(e).fill(n.shape[t]/e);else{const a=e.reduce((i,u)=>(u===-1&&(i+=1),i),0);w(a<=1,()=>"There should be only one negative value in split array.");const s=e.indexOf(-1);if(s!==-1){const i=e.reduce((u,c)=>c>0?u+c:u);e[s]=n.shape[t]-i}w(n.shape[t]===e.reduce((i,u)=>i+u),()=>"The sum of sizes must match the size of the axis dimension."),r=e}return r}/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function wN(n){return`Received SparseTensor with denseShape[0] = 0 but
  indices.shape[0] = ${n}`}function _N(n,e){return`indices(${n}, 0) is invalid: ${e} < 0`}function IN(n,e,t){return`indices(${n}, 0) is invalid: ${e} >= ${t}`}/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function NN(n,e){return`only one output dimension may be -1, not both ${n} and ${e}`}function SN(n,e){return`size ${n} must be non-negative, not ${e}`}function kN(){return"reshape cannot infer the missing input size for an empty tensor unless all specified input sizes are non-zero"}function vN(n,e){const t=P(n),r=P(e);return`Input to reshape is a SparseTensor with ${t}
  dense values, but the requested shape requires a multiple of ${r}. inputShape=${n} outputShape= ${e}`}function TN(n,e){const t=P(n),r=P(e);return`Input to reshape is a tensor with ${t} dense values, but the requested shape has ${r}. inputShape=${n} outputShape=${e}`}/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function lp(){return"segment ids must be >= 0"}function xN(){return"segment ids are not increasing"}function $N(n,e){return`Segment id ${n} out of range [0, ${e}), possibly because segmentIds input is not sorted.`}function EN(n,e,t){return`Bad: indices[${n}] == ${e} out of range [0, ${t})`}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function AN(n,e,t,r){const a=e.shape.length,s=n.shape.length;if(r!==0&&(r<-a||r>a))throw new Error(`Expect batchDims in the range of [-${a}, ${a}], but got ${r}`);if(r<0&&(r+=a),r>s)throw new Error(`batchDims (${r}) must be less than rank(x) (
    ${s}).`);if(t<r)throw new Error(`batchDims (${r}) must be less than or equal to axis (${t}).`);for(let p=0;p<r;++p)if(n.shape[p]!==e.shape[p])throw new Error(`x.shape[${p}]: ${n.shape[p]} should be equal to indices.shape[${p}]: ${e.shape[p]}.`);const i=n.shape[t],u=[];let c=1,l=1,o=1;for(let p=0;p<r;++p)u.push(n.shape[p]),c*=n.shape[p];for(let p=r;p<t;p++)u.push(n.shape[p]),l*=n.shape[p];for(let p=r;p<a;p++)u.push(e.shape[p]);for(let p=t+1;p<s;p++)u.push(n.shape[p]),o*=n.shape[p];return{batchSize:c,sliceSize:o,outerSize:l,dimSize:i,outputShape:u}}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function pp(n){try{return n.map(e=>Ka(e))}catch(e){throw new Error(`Failed to decode encoded string bytes into utf-8, error: ${e}`)}}function dp(n){return n.map(e=>or(e))}/**
 * @license
 * Copyright 2017 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */HI();/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */var ie;(function(n){n[n.float32=0]="float32",n[n.int32=1]="int32",n[n.bool=2]="bool",n[n.string=3]="string",n[n.complex64=4]="complex64"})(ie||(ie={}));var kr;(function(n){n[n.linear=0]="linear",n[n.relu=1]="relu",n[n.relu6=2]="relu6",n[n.prelu=3]="prelu",n[n.leakyrelu=4]="leakyrelu",n[n.sigmoid=5]="sigmoid",n[n.elu=6]="elu"})(kr||(kr={}));/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */let mp;function DN(n){mp=n.wasm.cwrap(Pr,null,["number","array","number","number","array","number","number","number","number","number","number","number","number"])}function FN(n){const{inputs:e,backend:t,attrs:r}=n,{a,b:s,bias:i,preluActivationWeights:u}=e;if(a.dtype!=="float32"||s.dtype!=="float32")throw new Error("_FusedMatMul for non non-float32 tensors not yet supported.");const{transposeA:c,transposeB:l,activation:o,leakyreluAlpha:p}=r,d=t.dataIdMap.get(a.dataId).id,m=t.dataIdMap.get(s.dataId).id;let f=0;if(i!=null){const C=t.dataIdMap.get(i.dataId);if(C.shape.length!==1)throw new Error(`_FusedMatMul only supports rank-1 bias but got rank ${C.shape.length}.`);f=C.id}const g=u==null?0:t.dataIdMap.get(u.dataId).id,y=kr[o];if(y==null)throw new Error(`${o} activation not yet supported for FusedConv2D in the wasm backend.`);const _=c?a.shape[2]:a.shape[1],S=l?s.shape[1]:s.shape[2],I=Ne(a.shape.slice(0,-2),s.shape.slice(0,-2)),T=t.makeOutput([...I,_,S],a.dtype),$=t.dataIdMap.get(T.dataId).id,A=new Uint8Array(new Int32Array(a.shape).buffer),F=new Uint8Array(new Int32Array(s.shape).buffer);return mp(d,A,a.shape.length,m,F,s.shape.length,c,l,y,f,g,p||0,$),T}const ON={kernelName:Pr,backendName:"wasm",setupFunc:DN,kernelFunc:FN};/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function ae(n,e){let t;function r(s){t=s.wasm.cwrap(n,null,["number","number","number"])}function a(s){const{backend:i,inputs:{x:u}}=s,c=i.dataIdMap.get(u.dataId).id,l=i.makeOutput(u.shape,e||u.dtype),o=i.dataIdMap.get(l.dataId).id;return P(l.shape)===0||t(c,ie[u.dtype],o),l}return{kernelName:n,backendName:"wasm",setupFunc:r,kernelFunc:a}}/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const CN=ae(Ei);/**
 * @license
 * Copyright 2023 Google LLC.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const RN=ae(Ai);/**
 * @license
 * Copyright 2023 Google LLC.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const MN=ae(Di);/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Te(n,e,t){let r;function a(i){r=i.wasm.cwrap(n,null,["number","array","number","number","array","number","number","number"])}function s(i){const{backend:u,inputs:c}=i,{a:l,b:o}=c,p=u.dataIdMap.get(l.dataId).id,d=u.dataIdMap.get(o.dataId).id,m=t??l.dtype,f=Ne(l.shape,o.shape),g=u.makeOutput(f,m);if(P(f)===0)return g;const y=new Uint8Array(new Int32Array(l.shape).buffer),_=new Uint8Array(new Int32Array(o.shape).buffer),S=u.dataIdMap.get(g.dataId).id;return r(p,y,l.shape.length,d,_,o.shape.length,ie[l.dtype],S),g}return{kernelName:n,backendName:"wasm",setupFunc:a,kernelFunc:s}}/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const BN=Te(Hs);/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */let hp;function PN(n){hp=n.wasm.cwrap(js,null,["array","number","number","number"])}function LN(n){const{inputs:e,backend:t}=n,r=t.makeOutput(e[0].shape,e[0].dtype);if(P(r.shape)===0)return r;const a=e.map(u=>t.dataIdMap.get(u.dataId).id),s=new Uint8Array(new Int32Array(a).buffer),i=t.dataIdMap.get(r.dataId).id;return hp(s,a.length,ie[r.dtype],i),r}const zN={kernelName:js,backendName:"wasm",setupFunc:PN,kernelFunc:LN};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function ls(n){const{inputs:{x:e},backend:t}=n;if(e.dtype==="string")return mt(t.readSync(e.dataId),e.shape,e.dtype);const r=t.makeOutput(e.shape,e.dtype),a=t.typedArrayFromHeap(e);return t.typedArrayFromHeap(r).set(a),r}const WN={kernelName:da,backendName:"wasm",kernelFunc:ls};/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */let fp;function VN(n){fp=n.wasm.cwrap(ar,null,["number","array","number","number","number","array","number"])}function Jt(n){const{inputs:e,backend:t,attrs:r}=n,[a,s]=HN(e.x.shape,r.perm);let i=!0;for(let f=0;f<s.length;f++)s[f]!==f&&(i=!1);const u=UN(e.x.shape,r.perm),c={dataId:e.x.dataId,shape:a,dtype:e.x.dtype};if(i){const f=ls({inputs:e,backend:t});return f.shape=u,f}const l=t.makeOutput(u,c.dtype),o=t.dataIdMap.get(c.dataId).id,p=t.dataIdMap.get(l.dataId).id,d=new Uint8Array(new Int32Array(s).buffer),m=new Uint8Array(new Int32Array(c.shape).buffer);return fp(o,m,c.shape.length,ie[c.dtype],p,d,s.length),l}function UN(n,e){const t=new Array(n.length);for(let r=0;r<t.length;r++)t[r]=n[e[r]];return t}function HN(n,e){const t=[],r=[];for(let a=0;a<n.length;++a)n[a]!==1&&t.push(n[a]),n[e[a]]!==1&&r.push(e[a]);for(let a=0;a<r.length;++a){let s=-1;for(let i=0;i<r.length;++i)r[i]>=a&&(s===-1||r[s]>r[i])&&(s=i);r[s]=a}return[t,r]}const jN={kernelName:ar,backendName:"wasm",kernelFunc:Jt,setupFunc:VN};/**
 * @license
 * Copyright 2020 Google Inc. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Yt(n,e,t){const r=n.shape,a=n.shape.length,s=wt(e,r);let i=s;const u=ho(i,a);let c=null,l=!1;if(u!=null){const o=new Array(a);for(let m=0;m<o.length;m++)o[m]=r[u[m]];i=Hn(i.length,a),c=Jt({inputs:{x:n},attrs:{perm:u},backend:t});const p=t.dataIdMap.get(n.dataId).id;t.dataIdMap.get(c.dataId).id!==p&&(l=!0)}return{transposed:c,originalAxes:s,axes:i,inputWasTransposed:l}}/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */let gp;function GN(n){gp=n.wasm.cwrap(Gs,null,["number, number, number"])}function qN(n){const{backend:e,inputs:t,attrs:r}=n,{axis:a,keepDims:s}=r,{x:i}=t;let c=e.dataIdMap.get(i.dataId).id,l=i;const{transposed:o,axes:p,originalAxes:d,inputWasTransposed:m}=Yt(i,a,e);if(m){const I=e.dataIdMap.get(o.dataId).id;l=o,c=I}const f=l.shape.length;$t("all",p,f);const[g,y]=pn(l.shape,p),_=P(y),S=e.makeOutput(g,i.dtype);if(P(l.shape)!==0){const I=e.dataIdMap.get(S.dataId).id;gp(c,_,I)}if(m&&e.disposeData(o.dataId),s){const I=yt(S.shape,d);S.shape=I}return S}const KN={kernelName:Gs,backendName:"wasm",setupFunc:GN,kernelFunc:qN};/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */let yp;function XN(n){yp=n.wasm.cwrap(qs,null,["number, number, number"])}function JN(n){const{backend:e,inputs:t,attrs:r}=n,{axis:a,keepDims:s}=r,{x:i}=t;let c=e.dataIdMap.get(i.dataId).id,l=i;const{transposed:o,axes:p,originalAxes:d,inputWasTransposed:m}=Yt(i,a,e);if(m){const I=e.dataIdMap.get(o.dataId).id;l=o,c=I}const f=l.shape.length;$t("any",p,f);const[g,y]=pn(l.shape,p),_=P(y),S=e.makeOutput(g,i.dtype);if(P(l.shape)!==0){const I=e.dataIdMap.get(S.dataId).id;yp(c,_,I)}if(m&&e.disposeData(o.dataId),s){const I=yt(S.shape,d);S.shape=I}return S}const YN={kernelName:qs,backendName:"wasm",setupFunc:XN,kernelFunc:JN};/**
 * @license
 * Copyright 2023 Google LLC.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function bp(n){let e;function t(a){e=a.wasm.cwrap(n,null,["number","number","number","number","number"])}function r(a){const{backend:s,inputs:i,attrs:u}=a,{axis:c}=u,{x:l}=i,o=s.dataIdMap.get(l.dataId).id;let p=o,d=l;const{transposed:m,axes:f,inputWasTransposed:g}=Yt(l,c,s);if(g){const $=s.dataIdMap.get(m.dataId).id;$!==o&&(d=m,p=$)}const y=d.shape.slice(0,-1),_=s.makeOutput(y,"int32"),S=s.dataIdMap.get(_.dataId).id,I=P(_.shape),T=d.shape[f[0]];return e(p,ie[d.dtype],I,T,S),g&&s.disposeData(m.dataId),_}return{kernelName:n,backendName:"wasm",setupFunc:t,kernelFunc:r}}/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const ZN=bp(Fi);/**
 * @license
 * Copyright 2023 Google LLC.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const QN=bp(Oi);/**
 * @license
 * Copyright 2023 Google LLC.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const eS=ae(Ci);/**
 * @license
 * Copyright 2023 Google LLC.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const tS=ae(Ri);/**
 * @license
 * Copyright 2023 Google LLC.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const nS=ae(Mi);/**
 * @license
 * Copyright 2023 Google LLC.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const rS=Te(Pi);/**
 * @license
 * Copyright 2023 Google LLC.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const sS=ae(Bi);/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */let wp;function aS(n){wp=n.wasm.cwrap(Ks,null,["number","number","number","number","number","number","number","number","number","number","number","number","number","number"])}function oS(n){const{inputs:e,attrs:t,backend:r}=n,a=e.x,s=r.dataIdMap.get(a.dataId).id,{filterSize:i,strides:u,pad:c,dimRoundingMode:l}=t,o=Ln(a.shape,i,u,1,c,l),p=o.filterHeight,d=o.filterWidth,m=o.padInfo.top,f=o.padInfo.right,g=o.padInfo.bottom,y=o.padInfo.left,_=o.strideHeight,S=o.strideWidth,I=o.inChannels;if(o.dataFormat!=="channelsLast")throw new Error(`wasm backend does not support dataFormat:'${o.dataFormat}'. Please use 'channelsLast'.`);if(o.dilationWidth!==1||o.dilationHeight!==1)throw new Error(`was backend only supports average pooling with dilation = [1, 1], got [${o.dilationHeight}, ${o.dilationWidth}].`);const T=r.makeOutput(o.outShape,"float32"),$=r.dataIdMap.get(T.dataId).id;return wp(s,a.shape[0],a.shape[1],a.shape[2],p,d,m,f,g,y,_,S,I,$),T}const iS={kernelName:Ks,backendName:"wasm",setupFunc:aS,kernelFunc:oS};/**
 * @license
 * Copyright 2023 Google LLC.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */let _p;function uS(n){_p=n.wasm.cwrap("AvgPool3D",null,["number","number","number","number","number","number","number","number","number","number","number","number","number","number","number","number","number","number","number","number","number","number"])}function cS(n){const{inputs:e,backend:t,attrs:r}=n,{x:a}=e,{filterSize:s,strides:i,pad:u,dimRoundingMode:c,dataFormat:l}=r,o=Xr(a.shape,s,i,1,u,c,l),p=t.makeOutput(o.outShape,a.dtype);return _p(t.dataIdMap.get(a.dataId).id,t.dataIdMap.get(p.dataId).id,o.batchSize,o.inChannels,o.inDepth,o.inHeight,o.inWidth,o.outDepth,o.outHeight,o.outWidth,o.strideDepth,o.strideHeight,o.strideWidth,o.dilationDepth,o.dilationHeight,o.dilationWidth,o.effectiveFilterDepth,o.effectiveFilterHeight,o.effectiveFilterWidth,o.padInfo.front,o.padInfo.top,o.padInfo.left),p}const lS={kernelName:Li,backendName:"wasm",setupFunc:uS,kernelFunc:cS};/**
 * @license
 * Copyright 2023 Google LLC.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */let Ip;function pS(n){Ip=n.wasm.cwrap("AvgPool3DGrad",null,["number","number","number","number","number","number","number","number","number","number","number","number","number","number","number","number","number","number","number","number","number","number","number","number","number"])}function dS(n){const{inputs:e,backend:t,attrs:r}=n,{dy:a,input:s}=e,{filterSize:i,strides:u,pad:c,dimRoundingMode:l}=r,o=Xr(s.shape,i,u,1,c,l),p=t.makeOutput(s.shape,s.dtype);return Ip(t.dataIdMap.get(a.dataId).id,t.dataIdMap.get(p.dataId).id,o.batchSize,o.inChannels,o.inDepth,o.inHeight,o.inWidth,o.outDepth,o.outHeight,o.outWidth,o.strideDepth,o.strideHeight,o.strideWidth,o.dilationDepth,o.dilationHeight,o.dilationWidth,o.effectiveFilterDepth,o.effectiveFilterHeight,o.effectiveFilterWidth,o.padInfo.front,o.padInfo.top,o.padInfo.left,o.filterDepth,o.filterHeight,o.filterWidth),p}const mS={kernelName:jm,backendName:"wasm",setupFunc:pS,kernelFunc:dS};/**
 * @license
 * Copyright 2023 Google LLC.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */let Np;function hS(n){Np=n.wasm.cwrap("AvgPoolGrad",null,["number","number","number","number","number","number","number","number","number","number","number","number","number","number","number","number","number","number"])}function fS(n){const{inputs:e,backend:t,attrs:r}=n,{dy:a,input:s}=e,{filterSize:i,strides:u,pad:c}=r,l=Ln(s.shape,i,u,1,c),o=t.makeOutput(s.shape,s.dtype);return Np(t.dataIdMap.get(a.dataId).id,t.dataIdMap.get(o.dataId).id,l.batchSize,l.inChannels,l.inHeight,l.inWidth,l.outHeight,l.outWidth,l.strideHeight,l.strideWidth,l.dilationHeight,l.dilationWidth,l.effectiveFilterHeight,l.effectiveFilterWidth,l.padInfo.top,l.padInfo.left,l.filterHeight,l.filterWidth),o}const gS={kernelName:Hm,backendName:"wasm",setupFunc:hS,kernelFunc:fS};/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function je(n){const{inputs:e,attrs:t}=n,{x:r}=e,{shape:a}=t,s=P(r.shape),i=Am(a,s);return w(s===P(i),()=>`new shape: ${i}, old shape: ${r.shape}. New shape and old shape must have the same number of elements.`),n.backend.incRef(r.dataId),{dataId:r.dataId,shape:i,dtype:r.dtype}}const yS={kernelName:Bu,backendName:"wasm",kernelFunc:je};/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */let Sp;function bS(n){Sp=n.wasm.cwrap(Xs,null,["number","array","number","number","array","number","number","number","number"])}function wS(n){const{inputs:e,backend:t,attrs:r}=n,{a,b:s}=e,{transposeA:i,transposeB:u}=r;if(a.dtype!=="float32"||s.dtype!=="float32")throw new Error("BatchMatMul for non non-float32 tensors not yet supported.");const c=a.shape.length,l=s.shape.length,o=i?a.shape[c-2]:a.shape[c-1],p=u?s.shape[l-1]:s.shape[l-2],d=i?a.shape[c-1]:a.shape[c-2],m=u?s.shape[l-2]:s.shape[l-1],f=a.shape.slice(0,-2),g=s.shape.slice(0,-2),y=P(f),_=P(g),I=Ne(a.shape.slice(0,-2),s.shape.slice(0,-2)).concat([d,m]);w(o===p,()=>`Error in matMul: inner shapes (${o}) and (${p}) of Tensors with shapes ${a.shape} and ${s.shape} and transposeA=${i} and transposeB=${u} must match.`);const T=i?[y,o,d]:[y,d,o],$=u?[_,m,p]:[_,p,m],A=je({inputs:{x:a},backend:t,attrs:{shape:T}}),F=je({inputs:{x:s},backend:t,attrs:{shape:$}}),C=t.dataIdMap.get(A.dataId).id,M=t.dataIdMap.get(F.dataId).id,B=i?A.shape[2]:A.shape[1],V=u?F.shape[1]:F.shape[2],j=Math.max(y,_),q=t.makeOutput([j,B,V],A.dtype),te=t.dataIdMap.get(q.dataId).id,J=new Uint8Array(new Int32Array(A.shape).buffer),ue=new Uint8Array(new Int32Array(F.shape).buffer);return Sp(C,J,A.shape.length,M,ue,F.shape.length,i,u,te),t.disposeData(A.dataId),t.disposeData(F.dataId),q.shape=I,q}const _S={kernelName:Xs,backendName:"wasm",setupFunc:bS,kernelFunc:wS};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function IS(n,e,t,r){const a=An(t,P(e));if(r&&t!=="string"){let s=0;n.forEach(i=>{const u=P(i.shape);a.set(i.vals,s),s+=u})}else{let s=0;n.forEach(i=>{const u=t==="string"?pp(i.vals):i.vals;let c=0;for(let l=0;l<i.shape[0];++l){const o=l*e[1]+s;for(let p=0;p<i.shape[1];++p)a[o+p]=u[c++]}s+=i.shape[1]})}return a}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function NS(n,e,t,r){const a=n===e,s=n<e&&t<0,i=e<n&&t>1;if(a||s||i)return sr(0,r);const u=Math.abs(Math.ceil((e-n)/t)),c=sr(u,r);e<n&&t===1&&(t=-1),c[0]=n;for(let l=1;l<c.length;l++)c[l]=c[l-1]+t;return c}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function kp(n,e,t,r,a){const s=sp(r,e,t),i=P(t),u=Ee(r);if(s){const p=ap(e,u);return a==="string"?n.slice(p,p+i):n.subarray(p,p+i)}const c=a==="string"?pp(n):n,l=ft(r,a,c),o=ft(t,a);for(let p=0;p<o.size;++p){const d=o.indexToLoc(p),m=d.map((f,g)=>f+e[g]);o.set(l.get(...m),...d)}return a==="string"?dp(o.values):o.values}/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */class SS{constructor(e,t,r,a,s,i){this.separator=or(e),this.nGramWidths=t,this.leftPad=or(r),this.rightPad=or(a),this.padWidth=s,this.preserveShort=i}getPadWidth(e){return Math.min(this.padWidth<0?e-1:this.padWidth,e-1)}getNumNGrams(e,t){const r=this.getPadWidth(t);return Math.max(0,e+2*r-t+1)}createNGrams(e,t,r,a,s,i){for(let u=0;u<s;++u){const c=this.getPadWidth(i),l=Math.max(0,c-u),o=Math.max(0,c-(s-(u+1))),p=i-(l+o),d=t+(l>0?0:u-c);let m=0;m+=l*this.leftPad.length;for(let S=0;S<p;++S)m+=e[d+S].length;m+=o*this.rightPad.length;const f=l+o+p-1;m+=f*this.separator.length,r[a+u]=new Uint8Array(m);const g=r[a+u];let y=0;const _=S=>S.forEach(I=>g[y++]=I);for(let S=0;S<l;++S)_(this.leftPad),_(this.separator);for(let S=0;S<p-1;++S)_(e[d+S]),_(this.separator);if(p>0){_(e[d+p-1]);for(let S=0;S<o;++S)_(this.separator),_(this.rightPad)}else{for(let S=0;S<o-1;++S)_(this.rightPad),_(this.separator);_(this.rightPad)}}}compute(e,t){const r=e.length,a=t.length;if(a>0){let c=t[0];if(c!==0)throw new Error(`First split value must be 0, got ${c}`);for(let l=1;l<a;++l){let o=t[l]>=c;if(o=o&&t[l]<=r,!o)throw new Error(`Invalid split value ${t[l]}, must be in [${c}, ${r}]`);c=t[l]}if(c!==r)throw new Error(`Last split value must be data size. Expected ${r}, got ${c}`)}const s=a-1,i=An("int32",a);if(r===0||a===0){const c=new Array(r);for(let l=0;l<=s;++l)i[l]=0;return[c,i]}i[0]=0;for(let c=1;c<=s;++c){const l=t[c]-t[c-1];let o=0;this.nGramWidths.forEach(p=>{o+=this.getNumNGrams(l,p)}),this.preserveShort&&l>0&&o===0&&(o=1),i[c]=i[c-1]+o}const u=new Array(i[s]);for(let c=0;c<s;++c){const l=t[c];let o=i[c];if(this.nGramWidths.forEach(p=>{const d=t[c+1]-t[c],m=this.getNumNGrams(d,p);this.createNGrams(e,l,u,o,m,p),o+=m}),this.preserveShort&&o===i[c]){const p=t[c+1]-t[c];if(p===0)continue;const d=p+2*this.padWidth;this.createNGrams(e,l,u,o,1,d)}}return[u,i]}}function kS(n,e,t,r,a,s,i,u){return new SS(t,r,a,s,i,u).compute(n,e)}/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function vS(n,e,t,r){if(!n.length)return;if(e.length===0){for(let s=0;s<n.length;++s)r.push(n.subarray(s,s+1));return}if(e.length===1){const s=e[0];let i=n.indexOf(s);for(;i!==-1;){const u=n.subarray(0,i);(!t||u.length!==0)&&r.push(u),n=n.subarray(i+1),i=n.indexOf(s)}(!t||n.length!==0)&&r.push(n);return}let a=0;for(let s=0;s<n.length+1;s++)if(s===n.length||e.indexOf(n[s])!==-1){const i=n.subarray(a,s);(!t||i.length!==0)&&r.push(i),a=s+1}}function TS(n,e,t){const r=n.length,a=[];let s=0,i=0;const u=new Array(r);for(let d=0;d<r;++d){const m=a.length;vS(n[d],e,t,a);const f=a.length-m;u[d]=f,s+=f,i=Math.max(i,f)}const c=An("int32",s*2),l=new Array(s),o=[r,i];let p=0;for(let d=0;d<r;++d)for(let m=0;m<u[d];++m)c[p*2]=d,c[p*2+1]=m,l[p]=a[p],++p;return[c,l,o]}/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function xS(n,e){const t=An("int32",n.length);for(let r=0;r<n.length;++r)t[r]=_h(n[r]).modulo(e).getLowBitsUnsigned();return t}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function $S(n,e,t,r){const a=wt(e,t)[0],s=[1,t[0],1];for(let f=0;f<a;f++)s[0]*=t[f];s[1]=t[a];for(let f=a+1;f<t.length;f++)s[2]*=t[f];const i=new Map,u=new Int32Array(t[a]),c=new pr(s,r,n),l=[],o=s[0]===1&&s[2]===1;for(let f=0;f<t[a];f++){let g;if(o)g=n[f].toString();else{const _=[];for(let S=0;S<s[0];S++)for(let I=0;I<s[2];I++)_.push(c.get(S,f,I));g=_.join(",")}const y=i.get(g);if(y!=null)u[f]=y;else{const _=i.size;i.set(g,_),u[f]=_,l.push(f)}}const p=s.slice();p[1]=i.size;const d=new pr(p,r);l.forEach((f,g)=>{for(let y=0;y<s[0];y++)for(let _=0;_<s[2];_++)d.set(c.get(y,f,_),y,g,_)});const m=t.slice();return m[a]=p[1],{outputValues:d.values,outputShape:m,indices:u}}/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function _n(n){const{inputs:{x:e},attrs:{begin:t,size:r},backend:a}=n,[s,i]=pN(e,t,r),u=sp(e.shape,s,i),c=a.readSync(e.dataId),l=a.makeOutput(i,e.dtype),o=Ee(e.shape),p=a.dataIdMap.get(l.dataId);if(u){const f=ap(s,o);return e.dtype==="string"?p.stringBytes=c.slice(f,f+P(i)):a.typedArrayFromHeap(l).set(c.subarray(f,f+P(i))),l}if(e.dtype==="string"){const f=kp(c,s,i,e.shape,e.dtype);return p.stringBytes=f,l}const d=a.typedArrayFromHeap(l),m=e.shape.length;if(m===2)ES(c,o[0],d,s,i);else if(m===3)AS(c,o[0],o[1],d,s,i);else if(m===4)DS(c,o[0],o[1],o[2],d,s,i);else{const f=kp(c,s,i,e.shape,e.dtype);d.set(f)}return l}function ES(n,e,t,r,a){let s=0;const i=r[0],u=r[1],c=i+a[0];for(let l=i;l<c;l++){const o=l*e+u;t.set(n.subarray(o,o+a[1]),s),s+=a[1]}}function AS(n,e,t,r,a,s){let i=0;const u=a[0],c=a[1],l=a[2],o=u+s[0],p=c+s[1];for(let d=u;d<o;d++)for(let m=c;m<p;m++){const f=d*e+m*t+l;r.set(n.subarray(f,f+s[2]),i),i+=s[2]}}function DS(n,e,t,r,a,s,i){let u=0;const c=s[0],l=s[1],o=s[2],p=c+i[0],d=l+i[1],m=o+i[2],f=s[3];for(let g=c;g<p;g++)for(let y=l;y<d;y++)for(let _=o;_<m;_++){const S=g*e+y*t+_*r+f;a.set(n.subarray(S,S+i[3]),u),u+=i[3]}}const FS={kernelName:ju,backendName:"wasm",kernelFunc:_n};/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function OS(n){const{inputs:e,backend:t,attrs:r}=n,{x:a}=e,{blockShape:s,crops:i}=r,u=s.reduce((_,S)=>_*S),c=ip(a.shape,s,u),l=up(c.length,s.length),o=cp(a.shape,s,u),p=gN(i,s.length),d=yN(o,i,s.length),m=je({inputs:{x:a},backend:t,attrs:{shape:c}}),f=Jt({inputs:{x:m},backend:t,attrs:{perm:l}}),g=je({inputs:{x:f},backend:t,attrs:{shape:o}}),y=_n({inputs:{x:g},backend:t,attrs:{begin:p,size:d}});return t.disposeData(m.dataId),t.disposeData(f.dataId),t.disposeData(g.dataId),y}const CS={kernelName:zi,backendName:"wasm",kernelFunc:OS};/**
 * @license
 * Copyright 2023 Google LLC.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */let vp;function RS(n){vp=n.wasm.cwrap(Js,null,["number","number","boolean","number","number","number"])}function MS(n){const{backend:e,inputs:t,attrs:r}=n,{x:a,weights:s}=t,{size:i}=r,u=s.shape.reduce((p,d)=>p*d,1)!==0,c=a.shape.length===1?[i]:[a.shape[0],i],l=e.makeOutput(c,s.dtype);function o(p){return e.dataIdMap.get(p.dataId).id}return vp(o(a),i,u,o(s),ie[s.dtype],o(l)),l}const BS={kernelName:Js,backendName:"wasm",setupFunc:RS,kernelFunc:MS};/**
 * @license
 * Copyright 2023 Google LLC.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const PS=Te(Wi);/**
 * @license
 * Copyright 2023 Google LLC.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function LS(n){const{inputs:e,backend:t}=n,{s0:r,s1:a}=e,s=t.typedArrayFromHeap(r),i=t.typedArrayFromHeap(a),u=Ne(Array.from(s),Array.from(i));return t.makeOutput([u.length],"int32",void 0,new Int32Array(u))}const zS={kernelName:Vi,backendName:"wasm",kernelFunc:LS};/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Zt(n){const{inputs:{x:e},attrs:{dtype:t},backend:r}=n,a=r.makeOutput(e.shape,t),s=r.typedArrayFromHeap(e);return r.typedArrayFromHeap(a).set(s),a}const WS={kernelName:Ys,backendName:"wasm",kernelFunc:Zt};/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const VS=ae(Ui);/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */let Tp;function US(n){Tp=n.wasm.cwrap(Zs,null,["number","number","number","number"])}function HS(n){const{inputs:e,backend:t,attrs:r}=n,{x:a}=e,{clipValueMin:s,clipValueMax:i}=r,u=t.dataIdMap.get(a.dataId).id,c=t.makeOutput(a.shape,a.dtype),l=t.dataIdMap.get(c.dataId).id;return Tp(u,s,i,l),c}const jS={kernelName:Zs,backendName:"wasm",setupFunc:US,kernelFunc:HS};/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function xp(n){const{inputs:e,backend:t}=n,r=wt(n.attrs.axis,e[0].shape)[0],a=e.map(m=>m.shape);hN(a,r);let s=Ho(e.map(m=>m.shape),r);const i=e.filter(m=>P(m.shape)>0);if(i.length===1)return ls({inputs:{x:i[0]},backend:t});const u=t.makeOutput(s,e[0].dtype);if(P(s)===0)return u;if(i[0].dtype==="string"){const m=i.map(I=>{const $=[-1,P(I.shape.slice(r))];return je({inputs:{x:I},backend:t,attrs:{shape:$}})}),f=m.map(I=>({vals:t.readSync(I.dataId),shape:I.shape}));s=Ho(m.map(I=>I.shape),1);const g=m[0].shape[0]===1,y=IS(f,s,e[0].dtype,g),_=Ho(i.map(I=>I.shape),r);u.shape=_;const S=t.dataIdMap.get(u.dataId);return S.stringBytes=dp(y),m.forEach(I=>t.disposeData(I.dataId)),u}const c=P(i[0].shape.slice(0,r));let l=0;const o=i.map(m=>{const f=P(m.shape.slice(r));return l+=f,f}),p=i.map(m=>t.typedArrayFromHeap(m)),d=t.typedArrayFromHeap(u);for(let m=0;m<c;m++){let f=m*l;for(let g=0;g<p.length;g++){const y=o[g],_=m*y,S=p[g].subarray(_,_+y);d.set(S,f),f+=y}}return u}const GS={kernelName:Hi,backendName:"wasm",kernelFunc:xp};/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */let $p;function qS(n){$p=n.wasm.cwrap(Qs,null,["number","number","number","number","number","number","number","number","number","number","number","number","number","number","number","number","number","number","number"])}function KS(n){const{inputs:e,attrs:t,backend:r}=n,{x:a,filter:s}=e,i=r.dataIdMap.get(a.dataId).id,u=r.dataIdMap.get(s.dataId).id,{strides:c,dilations:l,pad:o,dimRoundingMode:p,dataFormat:d}=t,m=lo(d),f=Tt(a.shape,s.shape,c,l,o,p,!1,m),g=f.filterHeight,y=f.filterWidth,_=f.padInfo.top,S=f.padInfo.right,I=f.padInfo.bottom,T=f.padInfo.left,$=f.dilationHeight,A=f.dilationWidth,F=f.strideHeight,C=f.strideWidth,M=f.inChannels,B=f.outChannels,V=f.padInfo.type==="SAME"?1:0;if(f.dataFormat!=="channelsLast")throw new Error(`wasm backend Conv2D does not support dataFormat:'${f.dataFormat}'. Please use 'channelsLast'.`);const j=r.makeOutput(f.outShape,"float32"),q=r.dataIdMap.get(j.dataId).id;return $p(i,a.shape[0],a.shape[1],a.shape[2],u,g,y,_,S,I,T,V,$,A,F,C,M,B,q),j}const XS={kernelName:Qs,backendName:"wasm",setupFunc:qS,kernelFunc:KS};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */let Ep;function JS(n){Ep=n.wasm.cwrap(ea,null,["number","number","number","number","number","number","number","number","number","number","number","number","number","number","number","number","number","number","number","number","number","number","number","number","number","number","number"])}function YS(n){const{backend:e,inputs:t,attrs:r}=n,{dy:a,filter:s}=t,{strides:i,pad:u,dataFormat:c,dimRoundingMode:l,inputShape:o}=r,p=1,d=lo(c),m=Tt(o,s.shape,i,p,u,l,!1,d),{batchSize:f,filterHeight:g,filterWidth:y,inChannels:_,inHeight:S,inWidth:I,outChannels:T,outHeight:$,outWidth:A,strideHeight:F,strideWidth:C}=m,M=g-1-m.padInfo.top,B=y-1-m.padInfo.left,V=m.dataFormat==="channelsLast",j=Ee(m.inShape),q=Ee(a.shape),[te,J,ue]=Ee(s.shape),Se=j[0],se=V?j[1]:j[2],Fe=V?j[2]:1,We=V?1:j[1],Ye=q[0],Rt=V?q[1]:q[2],Oe=V?q[2]:1,Kn=V?1:q[1],Xn=e.makeOutput(m.inShape,"float32"),Er=e.dataIdMap.get(Xn.dataId).id,Ar=e.dataIdMap.get(a.dataId).id,ke=e.dataIdMap.get(s.dataId).id;return Ep(Ar,ke,f,g,y,S,I,_,$,A,T,F,C,M,B,te,J,ue,Se,se,Fe,We,Ye,Rt,Oe,Kn,Er),Xn}const ZS={kernelName:ea,backendName:"wasm",setupFunc:JS,kernelFunc:YS};/**
 * @license
 * Copyright 2023 Google LLC.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */let Ap;function QS(n){Ap=n.wasm.cwrap(ta,null,["number","number","number","number","number","number","number","number","number","number","number","number","number","number","number","number","number","number","number","number","number","number","number","number"])}function ek(n){const{inputs:e,backend:t,attrs:r}=n,{x:a,filter:s}=e,{strides:i,pad:u,dilations:c}=r;if(a.dtype!=="float32")throw new Error(`Tensor x must have dtype float32, got ${a.dtype}`);if(s.dtype!=="float32")throw new Error(`Tensor filter must have dtype float32, got ${s.dtype}`);const l=Jr(a.shape,s.shape,i,c,u),o=t.makeOutput(l.outShape,a.dtype);return Ap(t.dataIdMap.get(a.dataId).id,t.dataIdMap.get(s.dataId).id,t.dataIdMap.get(o.dataId).id,l.batchSize,l.inDepth,l.inHeight,l.inWidth,l.inChannels,l.outDepth,l.outHeight,l.outWidth,l.outChannels,l.strideDepth,l.strideHeight,l.strideWidth,l.dilationDepth,l.dilationHeight,l.dilationWidth,l.filterDepth,l.filterHeight,l.filterWidth,l.padInfo.front,l.padInfo.top,l.padInfo.left),o}const tk={kernelName:ta,backendName:"wasm",setupFunc:QS,kernelFunc:ek};/**
 * @license
 * Copyright 2023 Google LLC.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */let Dp;function nk(n){Dp=n.wasm.cwrap(ji,null,["number","number","number","number","number","number","number","number","number","number","number","number","number","number","number","number","number","number","number","number","number","number","number","number"])}function rk(n){const{inputs:e,backend:t,attrs:r}=n,{x:a,dy:s}=e,{strides:i,pad:u,filterShape:c}=r;if(a.dtype!=="float32")throw new Error(`Tensor dy must have dtype float32, got ${a.dtype}`);if(s.dtype!=="float32")throw new Error(`Tensor filter must have dtype float32, got ${s.dtype}`);const l=Jr(a.shape,c,i,1,u),o=t.makeOutput(l.filterShape,s.dtype);return Dp(t.dataIdMap.get(a.dataId).id,t.dataIdMap.get(s.dataId).id,t.dataIdMap.get(o.dataId).id,l.batchSize,l.inDepth,l.inHeight,l.inWidth,l.inChannels,l.outDepth,l.outHeight,l.outWidth,l.outChannels,l.strideDepth,l.strideHeight,l.strideWidth,l.dilationDepth,l.dilationHeight,l.dilationWidth,l.filterDepth,l.filterHeight,l.filterWidth,l.padInfo.front,l.padInfo.top,l.padInfo.left),o}const sk={kernelName:ji,backendName:"wasm",setupFunc:nk,kernelFunc:rk};/**
 * @license
 * Copyright 2023 Google LLC.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */let Fp;function ak(n){Fp=n.wasm.cwrap(na,null,["number","number","number","number","number","number","number","number","number","number","number","number","number","number","number","number","number","number","number","number","number","number","number","number"])}function ok(n){const{inputs:e,backend:t,attrs:r}=n,{dy:a,filter:s}=e,{pad:i,strides:u,inputShape:c}=r;if(a.dtype!=="float32")throw new Error(`Tensor dy must have dtype float32, got ${a.dtype}`);if(s.dtype!=="float32")throw new Error(`Tensor filter must have dtype float32, got ${s.dtype}`);const l=Jr(c,s.shape,u,1,i),o=t.makeOutput(l.inShape,a.dtype);return Fp(t.dataIdMap.get(s.dataId).id,t.dataIdMap.get(a.dataId).id,t.dataIdMap.get(o.dataId).id,l.batchSize,l.inDepth,l.inHeight,l.inWidth,l.inChannels,l.outDepth,l.outHeight,l.outWidth,l.outChannels,l.strideDepth,l.strideHeight,l.strideWidth,l.dilationDepth,l.dilationHeight,l.dilationWidth,l.filterDepth,l.filterHeight,l.filterWidth,l.padInfo.front,l.padInfo.top,l.padInfo.left),o}const ik={kernelName:na,backendName:"wasm",setupFunc:ak,kernelFunc:ok};/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const uk=ae(Gi);/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const ck=ae(qi);/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */var jo;(function(n){n[n.bilinear=0]="bilinear",n[n.nearest=1]="nearest"})(jo||(jo={}));let Op;function lk(n){Op=n.wasm.cwrap(aa,null,["number","number","number","number","array","number","number","number","number","number"])}function pk(n){const{backend:e,inputs:t,attrs:r}=n,{method:a,extrapolationValue:s,cropSize:i}=r,{image:u,boxes:c,boxInd:l}=t,o=c.shape[0],[p,d]=i,m=[o,p,d,u.shape[3]];let f=e.dataIdMap.get(u.dataId),g;u.dtype!=="float32"&&(g=Zt({backend:e,inputs:{x:u},attrs:{dtype:"float32"}}),f=e.dataIdMap.get(g.dataId));const y=f.id,_=e.dataIdMap.get(c.dataId).id,S=e.dataIdMap.get(l.dataId).id,I=e.makeOutput(m,"float32"),T=e.dataIdMap.get(I.dataId).id,$=new Uint8Array(new Int32Array(u.shape).buffer);return Op(y,_,S,o,$,p,d,jo[a],s,T),g!=null&&e.disposeData(g.dataId),I}const dk={kernelName:aa,backendName:"wasm",setupFunc:lk,kernelFunc:pk};/**
 * @license
 * Copyright 2022 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */let Cp;function mk(n){Cp=n.wasm.cwrap(ra,null,["number","number","number","number","number","number"])}function hk(n){const{inputs:e,backend:t,attrs:r}=n,{x:a}=e,{axis:s,exclusive:i,reverse:u}=r,c=a.shape.length;w(a.dtype==="float32"||a.dtype==="int32",()=>`cumprod does not support ${a.dtype} tensors in the WASM backend`);const l=ho([s],c);let o=a;l!==null&&(o=Jt({inputs:{x:a},attrs:{perm:l},backend:t}));const p=Hn(1,c)[0];$t("cumprod",[p],c);const d=t.makeOutput(o.shape,o.dtype),m=o.shape[p],f=t.dataIdMap.get(o.dataId).id,g=t.dataIdMap.get(d.dataId).id;Cp(f,i?1:0,u?1:0,m,g,ie[a.dtype]);let y=d;if(l!==null){const _=yl(l);y=Jt({inputs:{x:d},attrs:{perm:_},backend:t}),t.disposeData(o.dataId),t.disposeData(d.dataId)}return y}const fk={kernelName:ra,backendName:"wasm",setupFunc:mk,kernelFunc:hk};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */let Rp;function gk(n){Rp=n.wasm.cwrap(sa,null,["number","number","number","number","number","number"])}function yk(n){const{inputs:e,backend:t,attrs:r}=n,{x:a}=e,{axis:s,exclusive:i,reverse:u}=r,c=a.shape.length;w(a.dtype==="float32"||a.dtype==="int32",()=>`cumsum does not support ${a.dtype} tensors in the WASM backend`);const l=ho([s],c);let o=a;l!==null&&(o=Jt({inputs:{x:a},attrs:{perm:l},backend:t}));const p=Hn(1,c)[0];$t("cumsum",[p],c);const d=t.makeOutput(o.shape,o.dtype),m=o.shape[p],f=t.dataIdMap.get(o.dataId).id,g=t.dataIdMap.get(d.dataId).id;Rp(f,i?1:0,u?1:0,m,g,ie[a.dtype]);let y=d;if(l!==null){const _=yl(l);y=Jt({inputs:{x:d},attrs:{perm:_},backend:t}),t.disposeData(o.dataId),t.disposeData(d.dataId)}return y}const bk={kernelName:sa,backendName:"wasm",setupFunc:gk,kernelFunc:yk};/**
 * @license
 * Copyright 2023 Google LLC.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */let Mp;function wk(n){Mp=n.wasm.cwrap("DenseBincount",null,["number","array","number","number","boolean","number","number","boolean","number"])}function _k(n){const{backend:e,inputs:t,attrs:r}=n,{x:a,weights:s}=t,{size:i,binaryOutput:u}=r,c=s.shape.reduce((d,m)=>d*m,1)!==0,l=a.shape.length===1?[i]:[a.shape[0],i],o=e.makeOutput(l,s.dtype);function p(d){return e.dataIdMap.get(d.dataId).id}return Mp(p(a),new Uint8Array(new Int32Array(a.shape).buffer),a.shape.length,i,c,p(s),ie[s.dtype],u,p(o)),o}const Ik={kernelName:Ki,backendName:"wasm",setupFunc:wk,kernelFunc:_k};/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */let Bp;function Nk(n){Bp=n.wasm.cwrap(oa,null,["number","number","number","array","number","array","array","number","number"])}function Sk(n){const{backend:e,inputs:t,attrs:r}=n,{x:a}=t,{blockSize:s,dataFormat:i}=r,u=a.shape[0],c=i==="NHWC"?a.shape[1]:a.shape[2],l=i==="NHWC"?a.shape[2]:a.shape[3],o=i==="NHWC"?a.shape[3]:a.shape[1],p=c*s,d=l*s,m=o/(s*s),f=i==="NHWC"?[u,p,d,m]:[u,m,p,d],g=e.makeOutput(f,"float32"),_=e.dataIdMap.get(a.dataId).id,S=new Uint8Array(new Int32Array(Ee(a.shape)).buffer),I=new Uint8Array(new Int32Array(f).buffer),T=new Uint8Array(new Int32Array(Ee(f)).buffer),$=e.dataIdMap.get(g.dataId).id;return Bp(_,s,i==="NHWC"?1:0,S,a.shape.length-1,I,T,f.length,$),g}const kk={kernelName:oa,backendName:"wasm",setupFunc:Nk,kernelFunc:Sk};/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */let Pp;function vk(n){Pp=n.wasm.cwrap(ia,null,["number","number","number","number","number","number","number","number","number","number","number","number","number","number","number","number","number","number","number"])}function Tk(n){const{inputs:e,attrs:t,backend:r}=n,{x:a,filter:s}=e,i=r.dataIdMap.get(a.dataId).id,u=r.dataIdMap.get(s.dataId).id,{strides:c,dilations:l,pad:o,dimRoundingMode:p}=t,d=l??[1,1],m=Tt(a.shape,s.shape,c,d,o,p,!0),f=m.filterHeight,g=m.filterWidth,y=m.padInfo.top,_=m.padInfo.right,S=m.padInfo.bottom,I=m.padInfo.left,T=m.dilationHeight,$=m.dilationWidth,A=m.strideHeight,F=m.strideWidth,C=m.inChannels,M=m.outChannels,B=m.padInfo.type==="SAME"?1:0;if(m.dataFormat!=="channelsLast")throw new Error(`wasm backend DepthwiseConv2dNative does not support dataFormat:'${m.dataFormat}'. Please use 'channelsLast'.`);const V=r.makeOutput(m.outShape,"float32"),j=r.dataIdMap.get(V.dataId).id;return Pp(i,a.shape[0],a.shape[1],a.shape[2],u,f,g,y,_,S,I,B,T,$,A,F,C,M,j),V}const xk={kernelName:ia,backendName:"wasm",setupFunc:vk,kernelFunc:Tk};/**
 * @license
 * Copyright 2023 Google LLC.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */let Lp;function $k(n){Lp=n.wasm.cwrap("Diag",null,["number","number","number","number"])}function Ek(n){const{inputs:e,backend:t}=n,{x:r}=e,a=P(r.shape),s=t.makeOutput([...r.shape,...r.shape],r.dtype);return Lp(t.dataIdMap.get(r.dataId).id,ie[r.dtype],a,t.dataIdMap.get(s.dataId).id),s}const Ak={kernelName:Xi,backendName:"wasm",setupFunc:$k,kernelFunc:Ek};/**
 * @license
 * Copyright 2023 Google LLC.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */let zp;function Dk(n){zp=n.wasm.cwrap(ua,null,["number","number","number","number","number","number","number","number","number","number","number","number","number","number","number","number","number","number"])}function Fk(n){const{inputs:e,backend:t,attrs:r}=n,{x:a,filter:s}=e,{strides:i,pad:u,dilations:c}=r;if(a.dtype!==s.dtype)throw new Error(`Dilation2D error: x must have the same dtype as filter. Got ${a.dtype} and ${s.dtype}`);const l=uo(a.shape,s.shape,i,u,"NHWC",c),o=t.makeOutput(l.outShape,a.dtype);return zp(t.dataIdMap.get(a.dataId).id,t.dataIdMap.get(s.dataId).id,t.dataIdMap.get(o.dataId).id,ie[a.dtype],l.batchSize,l.inChannels,l.inHeight,l.inWidth,l.outHeight,l.outWidth,l.strideHeight,l.strideWidth,l.dilationHeight,l.dilationWidth,l.filterHeight,l.filterWidth,l.padInfo.top,l.padInfo.left),o}const Ok={kernelName:ua,backendName:"wasm",setupFunc:Dk,kernelFunc:Fk};/**
 * @license
 * Copyright 2023 Google LLC.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */let Wp;function Ck(n){Wp=n.wasm.cwrap(Yi,null,["number","number","number","number","number","number","number","number","number","number","number","number","number","number","number","number","number","number","number"])}function Rk(n){const{inputs:e,backend:t,attrs:r}=n,{x:a,filter:s,dy:i}=e,{strides:u,pad:c,dilations:l}=r;if(a.dtype!==s.dtype||a.dtype!==i.dtype)throw new Error(`Dilation2DBackpropFilter error: x must have the same dtype as filter and dy. Got ${a.dtype}, ${s.dtype}, and ${i.dtype}`);const o=uo(a.shape,s.shape,u,c,"NHWC",l),p=t.makeOutput(s.shape,s.dtype);return Wp(t.dataIdMap.get(a.dataId).id,t.dataIdMap.get(s.dataId).id,t.dataIdMap.get(i.dataId).id,t.dataIdMap.get(p.dataId).id,ie[a.dtype],o.batchSize,o.inChannels,o.inHeight,o.inWidth,o.outHeight,o.outWidth,o.strideHeight,o.strideWidth,o.dilationHeight,o.dilationWidth,o.filterHeight,o.filterWidth,o.padInfo.top,o.padInfo.left),p}const Mk={kernelName:Yi,backendName:"wasm",setupFunc:Ck,kernelFunc:Rk};/**
 * @license
 * Copyright 2023 Google LLC.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */let Vp;function Bk(n){Vp=n.wasm.cwrap(Ji,null,["number","number","number","number","number","number","number","number","number","number","number","number","number","number","number","number","number","number","number"])}function Pk(n){const{inputs:e,backend:t,attrs:r}=n,{x:a,filter:s,dy:i}=e,{strides:u,pad:c,dilations:l}=r;if(a.dtype!==s.dtype||a.dtype!==i.dtype)throw new Error(`Dilation2DBackpropInput error: x must have the same dtype as filter and dy. Got ${a.dtype}, ${s.dtype}, and ${i.dtype}`);const o=uo(a.shape,s.shape,u,c,"NHWC",l),p=t.makeOutput(a.shape,a.dtype);return Vp(t.dataIdMap.get(a.dataId).id,t.dataIdMap.get(s.dataId).id,t.dataIdMap.get(i.dataId).id,t.dataIdMap.get(p.dataId).id,ie[a.dtype],o.batchSize,o.inChannels,o.inHeight,o.inWidth,o.outHeight,o.outWidth,o.strideHeight,o.strideWidth,o.dilationHeight,o.dilationWidth,o.filterHeight,o.filterWidth,o.padInfo.top,o.padInfo.left),p}const Lk={kernelName:Ji,backendName:"wasm",setupFunc:Bk,kernelFunc:Pk};/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const zk=ae(Qi);/**
 * @license
 * Copyright 2023 Google LLC.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */let Up;function Wk(n){Up=n.wasm.cwrap(eu,null,["number","number","number"])}function Vk(n){const{inputs:e,backend:t}=n,{dy:r,y:a}=e,s=t.makeOutput(a.shape,"float32"),i=u=>t.dataIdMap.get(u.dataId).id;return Up(i(a),i(r),i(s)),s}const Uk={kernelName:eu,backendName:"wasm",setupFunc:Wk,kernelFunc:Vk};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Hk=Te(nu,!1,"bool");/**
 * @license
 * Copyright 2023 Google LLC.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const jk=ae(tu);/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Gk=ae(ru,"float32");/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Go(n){const{inputs:e,attrs:t,backend:r}=n,{input:a}=e,{dim:s}=t,i=a.shape.length,u=a.shape.slice();let c=s;return s<0&&(w(-(i+1)<=s,()=>`Axis must be in the interval [${-(i+1)}, ${i}]`),c=i+s+1),u.splice(c,0,1),je({inputs:{x:a},backend:r,attrs:{shape:u}})}const qk={kernelName:su,backendName:"wasm",kernelFunc:Go};/**
 * @license
 * Copyright 2023 Google LLC.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Kk=ae(au,"float32");/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Hp(n){const{attrs:{shape:e,value:t},backend:r}=n;let{attrs:{dtype:a}}=n;a=a||rr(t);const s=r.makeOutput(e,a);return r.typedArrayFromHeap(s).fill(t),s}const Xk={kernelName:ou,backendName:"wasm",kernelFunc:Hp};/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */let jp;function Jk(n){jp=n.wasm.cwrap(ca,null,["number","number","number","number","number","number"])}function Yk(n){const{inputs:e,backend:t}=n,{image:r}=e,a=t.makeOutput(r.shape,r.dtype),s=t.dataIdMap.get(r.dataId).id,i=t.dataIdMap.get(a.dataId).id,[u,c,l,o]=r.shape;return jp(s,u,c,l,o,i),a}const Zk={kernelName:ca,backendName:"wasm",kernelFunc:Yk,setupFunc:Jk};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Qk=ae(iu);/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const ev=Te(uu);/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */let Gp;function tv(n){Gp=n.wasm.cwrap(la,null,["number","number","number","number","number","number","number"])}function nv(n){const{backend:e,inputs:t,attrs:r}=n,{varianceEpsilon:a}=r,{x:s,mean:i,variance:u,offset:c,scale:l}=t,o=e.dataIdMap.get(s.dataId).id,p=e.dataIdMap.get(i.dataId).id,d=e.dataIdMap.get(u.dataId).id,m=c!=null?e.dataIdMap.get(c.dataId).id:0,f=l!=null?e.dataIdMap.get(l.dataId).id:0,g=e.makeOutput(s.shape,s.dtype);if(P(s.shape)===0)return g;const y=e.dataIdMap.get(g.dataId).id;return Gp(o,p,d,m,f,a,y),g}const rv={kernelName:la,backendName:"wasm",setupFunc:tv,kernelFunc:nv};/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */let qp;function sv(n){qp=n.wasm.cwrap(Lr,null,["number","number","number","number","number","number","number","number","number","number","number","number","number","number","number","number","number","number","number","number","number","number","number"])}function av(n){const{inputs:e,attrs:t,backend:r}=n,{x:a,filter:s,bias:i,preluActivationWeights:u}=e,{strides:c,pad:l,dilations:o,dataFormat:p,dimRoundingMode:d,activation:m,leakyreluAlpha:f}=t,g=Tt(a.shape,s.shape,c,o,l,d),y=kr[m];if(y==null)throw new Error(`${m} activation not yet supported for FusedConv2D in the wasm backend.`);const _=r.dataIdMap.get(a.dataId).id,S=r.dataIdMap.get(s.dataId).id,I=g.outChannels;let T=0;if(i!=null){const Oe=r.dataIdMap.get(i.dataId);if(Oe.shape.length!==1)throw new Error(`FusedConv2D only supports rank-1 bias but got rank ${Oe.shape.length}.`);if(Oe.shape[0]!==I)throw new Error(`FusedConv2D bias shape (${Oe.shape}) does not match the number of output channels (${I})`);T=Oe.id}const $=g.filterHeight,A=g.filterWidth,F=g.padInfo.top,C=g.padInfo.right,M=g.padInfo.bottom,B=g.padInfo.left,V=g.dilationHeight,j=g.dilationWidth,q=g.strideHeight,te=g.strideWidth,J=g.inChannels,ue=g.padInfo.type==="SAME"?1:0,Se=g.batchSize,se=g.inHeight,Fe=g.inWidth;if(p!=="NHWC")throw new Error(`wasm backend FusedConv2D does not support dataFormat:'${p}'. Please use 'NHWC'.`);const We=r.makeOutput(g.outShape,"float32"),Ye=r.dataIdMap.get(We.dataId).id,Rt=u==null?0:r.dataIdMap.get(u.dataId).id;return qp(_,Se,se,Fe,S,$,A,T,F,C,M,B,ue,V,j,q,te,J,I,y,Rt,f||0,Ye),We}const ov={kernelName:Lr,backendName:"wasm",setupFunc:sv,kernelFunc:av};/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */let Kp;function iv(n){Kp=n.wasm.cwrap(zr,null,["number","number","number","number","number","number","number","number","number","number","number","number","number","number","number","number","number","number","number","number","number","number","number"])}function uv(n){const{inputs:e,attrs:t,backend:r}=n,{x:a,filter:s,bias:i,preluActivationWeights:u}=e,{strides:c,pad:l,dilations:o,dataFormat:p,dimRoundingMode:d,activation:m,leakyreluAlpha:f}=t,g=Tt(a.shape,s.shape,c,o,l,d,!0),y=kr[m];if(y==null)throw new Error(`${m} activation not yet supported for FusedDepthwiseConv2D in the wasm backend.`);const _=r.dataIdMap.get(a.dataId).id,S=r.dataIdMap.get(s.dataId).id,I=g.outChannels;let T=0;if(i!=null){const Oe=r.dataIdMap.get(i.dataId);if(Oe.shape.length!==1)throw new Error(`FusedDepthwiseConv2D only supports rank-1 bias but got rank ${Oe.shape.length}.`);if(Oe.shape[0]!==I)throw new Error(`FusedDepthwiseConv2D bias shape (${Oe.shape}) does not match the number of output channels (${I})`);T=Oe.id}const $=g.filterHeight,A=g.filterWidth,F=g.padInfo.top,C=g.padInfo.right,M=g.padInfo.bottom,B=g.padInfo.left,V=g.dilationHeight,j=g.dilationWidth,q=g.strideHeight,te=g.strideWidth,J=g.inChannels,ue=g.padInfo.type==="SAME"?1:0,Se=g.batchSize,se=g.inHeight,Fe=g.inWidth;if(p!=="NHWC")throw new Error(`wasm backend FusedDepthwiseConv2D does not support dataFormat:'${p}'. Please use 'NHWC'.`);const We=r.makeOutput(g.outShape,"float32"),Ye=r.dataIdMap.get(We.dataId).id,Rt=u==null?0:r.dataIdMap.get(u.dataId).id;return Kp(_,Se,se,Fe,S,$,A,T,F,C,M,B,ue,V,j,q,te,J,I,y,Rt,f||0,Ye),We}const cv={kernelName:zr,backendName:"wasm",setupFunc:iv,kernelFunc:uv};/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */let Xp;function lv(n){Xp=n.wasm.cwrap(pa,null,["number","number","number","number","number","number","array","number"])}function pv(n){const{backend:e,inputs:t}=n,{params:r,indices:a}=t,[s,i,u,c]=uN(r,a),l=e.makeOutput(s,r.dtype);if(i===0)return l;const o=a.shape,p=o[o.length-1],m=e.dataIdMap.get(r.dataId).id,g=e.dataIdMap.get(a.dataId).id,y=new Uint8Array(new Int32Array(c).buffer),_=e.dataIdMap.get(l.dataId).id;return Xp(m,ie[r.dtype],g,i,p,u,y,_),l}const dv={kernelName:pa,backendName:"wasm",setupFunc:lv,kernelFunc:pv};/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */let Jp;function mv(n){Jp=n.wasm.cwrap("Gather",null,["number","number","array","number","number","number","array","number"])}function hv(n){const{backend:e,inputs:t,attrs:r}=n,{x:a,indices:s}=t,{axis:i,batchDims:u}=r,c=wt(i,a.shape)[0],l=e.readSync(s.dataId),o=a.shape[c];for(let M=0;M<l.length;++M){const B=l[M];w(B<=o-1&&B>=0,()=>`GatherV2: the index value ${B} is not in [0, ${o-1}]`)}const p=AN(a,s,c,u),d=je({inputs:{x:a},attrs:{shape:[p.batchSize,p.outerSize,p.dimSize,p.sliceSize]},backend:e}),m=P(s.shape),f=je({inputs:{x:s},attrs:{shape:[p.batchSize,m/p.batchSize]},backend:e}),g=[p.batchSize,p.outerSize,m/p.batchSize,p.sliceSize],y=e.makeOutput(g,a.dtype);if(P(a.shape)===0)return y;const _=d.shape.length-1,I=e.dataIdMap.get(d.dataId).id,$=e.dataIdMap.get(f.dataId).id,A=e.dataIdMap.get(y.dataId).id,F=new Uint8Array(new Int32Array(Ee(d.shape)).buffer),C=new Uint8Array(new Int32Array(Ee(g)).buffer);return Jp(I,ie[a.dtype],F,_,$,p.batchSize,C,A),e.disposeData(d.dataId),e.disposeData(f.dataId),y.shape=p.outputShape,y}const fv={kernelName:cu,backendName:"wasm",setupFunc:mv,kernelFunc:hv};/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const gv=Te(lu,!1,"bool");/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const yv=Te(pu,!1,"bool");/**
 * @license
 * Copyright 2023 Google LLC.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const bv=ae(du,"bool");/**
 * @license
 * Copyright 2023 Google LLC.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const wv=ae(mu,"bool");/**
 * @license
 * Copyright 2022 The TensorFlow Authors. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the License);
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an AS IS BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const _v=ae(hu,"bool");/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */let Yp;function Iv(n){Yp=n.wasm.cwrap(ma,null,["number","number","number","number"])}function Nv(n){const{inputs:{x:e},attrs:{alpha:t},backend:r}=n,a=r.dataIdMap.get(e.dataId).id,s=r.makeOutput(e.shape,"float32");if(P(e.shape)!==0){const i=r.dataIdMap.get(s.dataId).id;Yp(a,ie[e.dtype],t,i)}return s}const Sv={kernelName:ma,backendName:"wasm",setupFunc:Iv,kernelFunc:Nv};/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const kv=Te(fu,!1,"bool");/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const vv=Te(gu,!1,"bool");/**
 * @license
 * Copyright 2023 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */let Zp;function Tv(n){Zp=n.wasm.cwrap(ha,null,["number","number","number","number"])}function xv(n){const{attrs:e,backend:t}=n,{start:r,stop:a,num:s}=e,i=Math.floor(s),u=t.makeOutput([i],"float32");return Zp(t.dataIdMap.get(u.dataId).id,r,a,i),u}const $v={kernelName:ha,backendName:"wasm",setupFunc:Tv,kernelFunc:xv};/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Ev=ae(yu);/**
 * @license
 * Copyright 2023 Google LLC.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Av=ae(bu);/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Dv=Te(wu,!1,"bool");/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Fv=ae(_u);/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Ov=Te(Iu,!1,"bool");/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Cv=Te(th,!1,"bool");/**
 * @license
 * Copyright 2023 Google LLC.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */let Qp;function Rv(n){Qp=n.wasm.cwrap(fa,null,["number","number","number","number","number","number","number"])}function Mv(n){const{inputs:e,backend:t,attrs:r}=n,{x:a}=e,{depthRadius:s,bias:i,alpha:u,beta:c}=r;if(a.dtype!=="float32")throw new Error("LRN error: x must have dtype float32");const l=t.makeOutput(a.shape,a.dtype);return Qp(t.dataIdMap.get(a.dataId).id,t.dataIdMap.get(l.dataId).id,a.shape[3],s,i,u,c),l}const Bv={kernelName:fa,backendName:"wasm",setupFunc:Rv,kernelFunc:Mv};/**
 * @license
 * Copyright 2023 Google LLC.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */let ed;function Pv(n){ed=n.wasm.cwrap(Nu,null,["number","number","number","number","number","number","number","number","number"])}function Lv(n){const{inputs:e,backend:t,attrs:r}=n,{x:a,y:s,dy:i}=e,{depthRadius:u,bias:c,alpha:l,beta:o}=r;if(a.dtype!=="float32"||s.dtype!=="float32"||i.dtype!=="float32")throw new Error("LRNGrad error: x, y, and dy must have dtype float32");const p=t.makeOutput(a.shape,a.dtype);return ed(t.dataIdMap.get(a.dataId).id,t.dataIdMap.get(s.dataId).id,t.dataIdMap.get(i.dataId).id,t.dataIdMap.get(p.dataId).id,i.shape[3],u,c,l,o),p}const zv={kernelName:Nu,backendName:"wasm",setupFunc:Pv,kernelFunc:Lv};/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */let td;function Wv(n){td=n.wasm.cwrap(ga,null,["number","number","number","number"])}function Vv(n){const{backend:e,inputs:t,attrs:r}=n,{reductionIndices:a,keepDims:s}=r,{x:i}=t;let c=e.dataIdMap.get(i.dataId).id,l=i;const{transposed:o,axes:p,originalAxes:d,inputWasTransposed:m}=Yt(i,a,e);if(m){const I=e.dataIdMap.get(o.dataId).id;l=o,c=I}const f=l.shape.length;$t("max",p,f);const[g,y]=pn(l.shape,p),_=P(y),S=e.makeOutput(g,i.dtype);if(P(l.shape)!==0){const I=e.dataIdMap.get(S.dataId).id;td(c,ie[i.dtype],_,I)}if(m&&e.disposeData(o.dataId),s){const I=yt(S.shape,d);S.shape=I}return S}const Uv={kernelName:ga,backendName:"wasm",setupFunc:Wv,kernelFunc:Vv};/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Hv=Te(Su);/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */let nd;function jv(n){nd=n.wasm.cwrap(ya,null,["number","number","number","number","number","number","number","number","number","number","number","number","number","number","number","number","number"])}function Gv(n){const{inputs:e,attrs:t,backend:r}=n,a=e.x,s=r.dataIdMap.get(a.dataId).id;w(a.dtype==="float32",()=>`Error in MaxPool: only float32 input is supported. Got ${a.dtype}.`);const{filterSize:i,strides:u,pad:c,dimRoundingMode:l}=t,o=Ln(a.shape,i,u,1,c,l),p=o.filterHeight,d=o.filterWidth,m=o.padInfo.top,f=o.padInfo.right,g=o.padInfo.bottom,y=o.padInfo.left,_=o.dilationHeight,S=o.dilationWidth,I=o.strideHeight,T=o.strideWidth,$=o.inChannels,A=o.outChannels;if(o.dataFormat!=="channelsLast")throw new Error(`wasm backend does not support dataFormat:'${o.dataFormat}'. Please use 'channelsLast'.`);const F=r.makeOutput(o.outShape,"float32"),C=r.dataIdMap.get(F.dataId).id;return nd(s,a.shape[0],a.shape[1],a.shape[2],p,d,m,f,g,y,_,S,I,T,$,A,C),F}const qv={kernelName:ya,backendName:"wasm",setupFunc:jv,kernelFunc:Gv};/**
 * @license
 * Copyright 2023 Google LLC.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */let rd;function Kv(n){rd=n.wasm.cwrap("MaxPool3D",null,["number","number","number","number","number","number","number","number","number","number","number","number","number","number","number","number","number","number","number","number","number","number"])}function Xv(n){const{inputs:e,backend:t,attrs:r}=n,{x:a}=e,{filterSize:s,strides:i,pad:u,dimRoundingMode:c,dataFormat:l}=r,o=Xr(a.shape,s,i,1,u,c,l),p=t.makeOutput(o.outShape,a.dtype);return rd(t.dataIdMap.get(a.dataId).id,t.dataIdMap.get(p.dataId).id,o.batchSize,o.inChannels,o.inDepth,o.inHeight,o.inWidth,o.outDepth,o.outHeight,o.outWidth,o.strideDepth,o.strideHeight,o.strideWidth,o.dilationDepth,o.dilationHeight,o.dilationWidth,o.effectiveFilterDepth,o.effectiveFilterHeight,o.effectiveFilterWidth,o.padInfo.front,o.padInfo.top,o.padInfo.left),p}const Jv={kernelName:ku,backendName:"wasm",setupFunc:Kv,kernelFunc:Xv};/**
 * @license
 * Copyright 2023 Google LLC.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */let sd;function Yv(n){sd=n.wasm.cwrap("MaxPool3DGrad",null,["number","number","number","number","number","number","number","number","number","number","number","number","number","number","number","number","number","number","number","number","number","number","number"])}function Zv(n){const{inputs:e,backend:t,attrs:r}=n,{dy:a,input:s}=e,{filterSize:i,strides:u,pad:c,dimRoundingMode:l}=r,o=Xr(s.shape,i,u,1,c,l),p=t.makeOutput(s.shape,s.dtype);return sd(t.dataIdMap.get(s.dataId).id,t.dataIdMap.get(a.dataId).id,t.dataIdMap.get(p.dataId).id,o.batchSize,o.inChannels,o.inDepth,o.inHeight,o.inWidth,o.outDepth,o.outHeight,o.outWidth,o.strideDepth,o.strideHeight,o.strideWidth,o.dilationDepth,o.dilationHeight,o.dilationWidth,o.effectiveFilterDepth,o.effectiveFilterHeight,o.effectiveFilterWidth,o.padInfo.front,o.padInfo.top,o.padInfo.left),p}const Qv={kernelName:rh,backendName:"wasm",setupFunc:Yv,kernelFunc:Zv};/**
 * @license
 * Copyright 2023 Google LLC.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */let ad;function e2(n){ad=n.wasm.cwrap("MaxPoolGrad",null,["number","number","number","number","number","number","number","number","number","number","number","number","number","number","number","number","number"])}function t2(n){const{inputs:e,backend:t,attrs:r}=n,{dy:a,input:s}=e,{filterSize:i,strides:u,pad:c,dimRoundingMode:l}=r,o=Ln(s.shape,i,u,1,c,l),p=t.makeOutput(s.shape,s.dtype);return ad(t.dataIdMap.get(s.dataId).id,t.dataIdMap.get(a.dataId).id,t.dataIdMap.get(p.dataId).id,o.batchSize,o.inChannels,o.inHeight,o.inWidth,o.outHeight,o.outWidth,o.strideHeight,o.strideWidth,o.dilationHeight,o.dilationWidth,o.effectiveFilterHeight,o.effectiveFilterWidth,o.padInfo.top,o.padInfo.left),p}const n2={kernelName:nh,backendName:"wasm",setupFunc:e2,kernelFunc:t2};/**
 * @license
 * Copyright 2023 Google LLC.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */let od;function r2(n){od=n.wasm.cwrap("MaxPoolWithArgmax",null,["number","number","number","number","boolean","number","number","number","number","number","number","number","number","number","number","number","number","number","number"])}function s2(n){const{inputs:e,backend:t,attrs:r}=n,{x:a}=e,{filterSize:s,strides:i,pad:u,includeBatchInIndex:c}=r;w(a.shape.length===4,()=>`Error in maxPool: input must be rank 4 but got rank ${a.shape.length}.`);const l=[1,1];w(xt(i,l),()=>`Error in maxPool: Either strides or dilations must be 1. Got strides ${i} and dilations '${l}'`);const o=Ln(a.shape,s,i,[1,1],u),p=t.makeOutput(o.outShape,a.dtype),d=t.makeOutput(o.outShape,"int32");return od(t.dataIdMap.get(a.dataId).id,t.dataIdMap.get(p.dataId).id,t.dataIdMap.get(d.dataId).id,ie[a.dtype],c,o.batchSize,o.inChannels,o.inHeight,o.inWidth,o.outHeight,o.outWidth,o.strideHeight,o.strideWidth,o.dilationHeight,o.dilationWidth,o.effectiveFilterHeight,o.effectiveFilterWidth,o.padInfo.top,o.padInfo.left),[p,d]}const a2={kernelName:vu,backendName:"wasm",setupFunc:r2,kernelFunc:s2};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */let id;function o2(n){id=n.wasm.cwrap(ba,null,["number, number, number"])}function i2(n){const{backend:e,inputs:t,attrs:r}=n,{axis:a,keepDims:s}=r,{x:i}=t,u=e.dataIdMap.get(i.dataId).id;let c=u,l=i;const{transposed:o,axes:p,originalAxes:d,inputWasTransposed:m}=Yt(i,a,e);let f=p;if(m){const T=e.dataIdMap.get(o.dataId).id;T!==u&&(l=o,c=T,f=Hn(f.length,l.shape.length))}$t("mean",f,l.shape.length);const[g,y]=pn(l.shape,f),_=P(y);let S=l;l.dtype!=="float32"&&(S=Zt({backend:e,inputs:{x:l},attrs:{dtype:"float32"}}),c=e.dataIdMap.get(S.dataId).id);const I=e.makeOutput(g,"float32");if(P(l.shape)!==0){const T=e.dataIdMap.get(I.dataId).id;id(c,_,T)}if(m&&e.disposeData(o.dataId),s){const T=yt(I.shape,d);I.shape=T}return l.dtype!=="float32"&&e.disposeData(S.dataId),I}const u2={kernelName:ba,backendName:"wasm",setupFunc:o2,kernelFunc:i2};/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */let ud;function c2(n){ud=n.wasm.cwrap(wa,null,["number","number","number","number"])}function l2(n){const{backend:e,inputs:t,attrs:r}=n,{axis:a,keepDims:s}=r,{x:i}=t,u=e.dataIdMap.get(i.dataId).id;let c=u,l=i;const{transposed:o,axes:p,originalAxes:d,inputWasTransposed:m}=Yt(i,a,e);if(m){const I=e.dataIdMap.get(o.dataId).id;I!==u&&(l=o,c=I)}const f=l.shape.length;$t("min",p,f);const[g,y]=pn(l.shape,p),_=P(y),S=e.makeOutput(g,l.dtype);if(P(l.shape)!==0){const I=e.dataIdMap.get(S.dataId).id;ud(c,ie[i.dtype],_,I)}if(m&&e.disposeData(o.dataId),s){const I=yt(S.shape,d);S.shape=I}return S}const p2={kernelName:wa,backendName:"wasm",setupFunc:c2,kernelFunc:l2};/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const d2=Te(Tu);/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */var qo;(function(n){n[n.reflect=0]="reflect",n[n.symmetric=1]="symmetric"})(qo||(qo={}));let cd;function m2(n){cd=n.wasm.cwrap(_a,null,["number","array","number","number","array","array","number","number"])}function h2(n){const{inputs:{x:e},backend:t,attrs:{paddings:r,mode:a}}=n,s=r.map((f,g)=>f[0]+e.shape[g]+f[1]),i=t.dataIdMap.get(e.dataId).id,u=t.makeOutput(s,e.dtype),c=t.dataIdMap.get(u.dataId).id,l=new Uint8Array(new Int32Array(e.shape).buffer),o=r.map(f=>f[0]),p=r.map(f=>f[1]),d=new Uint8Array(new Int32Array(o).buffer),m=new Uint8Array(new Int32Array(p).buffer);return cd(i,l,e.shape.length,ie[e.dtype],d,m,qo[a],c),u}const f2={kernelName:_a,backendName:"wasm",kernelFunc:h2,setupFunc:m2};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */let ld;function g2(n){ld=n.wasm.cwrap(Ma,null,["number","number","number","number"])}function pd(n){const{backend:e,inputs:{logits:t},attrs:{dim:r}}=n,a=e.dataIdMap.get(t.dataId).id,s=e.makeOutput(t.shape,t.dtype),i=e.dataIdMap.get(s.dataId).id,u=t.shape[r],c=P(t.shape)/u;return P(s.shape)===0||ld(a,i,u,c),s}const y2={kernelName:Ma,backendName:"wasm",setupFunc:g2,kernelFunc:pd};/**
 * @license
 * Copyright 2023 Google LLC.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */let dd;function b2(n){dd=n.wasm.cwrap(Ia,null,["number","number","number","number","number","number"])}function w2(n){const{inputs:e,backend:t,attrs:r}=n,{logits:a}=e,{numSamples:s,seed:i,normalized:u}=r;if(a.dtype!=="float32")throw new Error(`Tensor logits must have dtype float32, got ${a.dtype}`);const c=u?a:pd({inputs:{logits:a},backend:t,attrs:{dim:a.shape.length-1}}),[l,o]=c.shape,p=t.makeOutput([l,s],"int32");return dd(t.dataIdMap.get(c.dataId).id,l,o,s,i,t.dataIdMap.get(p.dataId).id),u||t.disposeData(c.dataId),p}const _2={kernelName:Ia,backendName:"wasm",setupFunc:b2,kernelFunc:w2};/**
 * @license
 * Copyright 2023 Google LLC.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const I2=Te(xu);/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const N2=Te($u);/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const S2=ae(Eu);/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Ko(n,e){const t=new Int32Array(n.wasm.HEAPU8.buffer,e,4),r=t[0],a=t[1],s=t[2],i=t[3];return n.wasm._free(e),{pSelectedIndices:r,selectedSize:a,pSelectedScores:s,pValidOutputs:i}}/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */let md;function k2(n){md=n.wasm.cwrap(Na,"number",["number","number","number","number","number"])}function v2(n){const{backend:e,inputs:t,attrs:r}=n,{iouThreshold:a,maxOutputSize:s,scoreThreshold:i}=r,{boxes:u,scores:c}=t,l=e.dataIdMap.get(u.dataId).id,o=e.dataIdMap.get(c.dataId).id,p=md(l,o,s,a,i),{pSelectedIndices:d,selectedSize:m,pSelectedScores:f,pValidOutputs:g}=Ko(e,p);return e.wasm._free(f),e.wasm._free(g),e.makeOutput([m],"int32",d)}const T2={kernelName:Na,backendName:"wasm",setupFunc:k2,kernelFunc:v2};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */let hd;function x2(n){hd=n.wasm.cwrap(Sa,"number",["number","number","number","number","number","bool"])}function $2(n){const{backend:e,inputs:t,attrs:r}=n,{iouThreshold:a,maxOutputSize:s,scoreThreshold:i,padToMaxOutputSize:u}=r,{boxes:c,scores:l}=t,o=e.dataIdMap.get(c.dataId).id,p=e.dataIdMap.get(l.dataId).id,d=hd(o,p,s,a,i,u),{pSelectedIndices:m,selectedSize:f,pSelectedScores:g,pValidOutputs:y}=Ko(e,d);e.wasm._free(g);const _=e.makeOutput([f],"int32",m),S=e.makeOutput([],"int32",y);return[_,S]}const E2={kernelName:Sa,backendName:"wasm",setupFunc:x2,kernelFunc:$2};/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */let fd;function A2(n){fd=n.wasm.cwrap(ka,"number",["number","number","number","number","number","number"])}function D2(n){const{backend:e,inputs:t,attrs:r}=n,{iouThreshold:a,maxOutputSize:s,scoreThreshold:i,softNmsSigma:u}=r,{boxes:c,scores:l}=t,o=e.dataIdMap.get(c.dataId).id,p=e.dataIdMap.get(l.dataId).id,d=fd(o,p,s,a,i,u),{pSelectedIndices:m,selectedSize:f,pSelectedScores:g,pValidOutputs:y}=Ko(e,d);e.wasm._free(y);const _=e.makeOutput([f],"int32",m),S=e.makeOutput([f],"float32",g);return[_,S]}const F2={kernelName:ka,backendName:"wasm",setupFunc:A2,kernelFunc:D2};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const O2=Te(Au,!1,"bool");/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */let gd;function C2(n){gd=n.wasm.cwrap(va,null,["number","number","number","number","number"])}function R2(n){const{inputs:e,backend:t,attrs:r}=n,{indices:a}=e,{dtype:s,depth:i,onValue:u,offValue:c}=r,l=t.makeOutput([...a.shape,i],s),o=t.dataIdMap.get(l.dataId).id,d=t.dataIdMap.get(a.dataId).id;return gd(d,i,u,c,o),l}const M2={kernelName:va,backendName:"wasm",setupFunc:C2,kernelFunc:R2};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function B2(n){const{inputs:{x:e},backend:t}=n,r=t.makeOutput(e.shape,e.dtype);return t.typedArrayFromHeap(r).fill(1),r}const P2={kernelName:Du,backendName:"wasm",kernelFunc:B2};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function L2(n){const{inputs:e,backend:t,attrs:r}=n,{axis:a}=r;if(e.length===1)return Go({inputs:{input:e[0]},backend:t,attrs:{dim:a}});const s=e[0].shape,i=e[0].dtype;e.forEach(o=>{Qe(s,o.shape,"All tensors passed to stack must have matching shapes"),w(i===o.dtype,()=>"All tensors passed to stack must have matching dtypes")});const u=[],c=e.map(o=>{const p=Go({inputs:{input:o},backend:t,attrs:{dim:a}});return u.push(p),p}),l=xp({inputs:c,backend:t,attrs:{axis:a}});return u.forEach(o=>t.disposeData(o.dataId)),l}const z2={kernelName:Fu,backendName:"wasm",kernelFunc:L2};/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */let yd;function W2(n){yd=n.wasm.cwrap(Ta,null,["number","array","number","number","array","array","number","number"])}function V2(n){const{inputs:{x:e},backend:t,attrs:{paddings:r,constantValue:a}}=n,s=r.map((g,y)=>g[0]+e.shape[y]+g[1]);if(P(e.shape)===0)return Hp({backend:t,attrs:{shape:s,value:a,dtype:e.dtype}});const i=t.dataIdMap.get(e.dataId).id,u=t.makeOutput(s,e.dtype),l=t.dataIdMap.get(u.dataId).id,o=new Uint8Array(new Int32Array(e.shape).buffer),p=r.map(g=>g[0]),d=r.map(g=>g[1]),m=new Uint8Array(new Int32Array(p).buffer),f=new Uint8Array(new Int32Array(d).buffer);return yd(i,o,e.shape.length,ie[e.dtype],m,f,a,l),u}const bd={kernelName:Ta,backendName:"wasm",kernelFunc:V2,setupFunc:W2};/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const U2=Te(Ou);/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */let wd;function H2(n){wd=n.wasm.cwrap(xa,null,["number","number","number"])}function j2(n){const{inputs:e,backend:t}=n,{x:r,alpha:a}=e,s=t.dataIdMap.get(r.dataId).id,i=t.dataIdMap.get(a.dataId).id;let u=s;const c=r;let l=c;c.dtype!=="float32"&&(l=Zt({backend:t,inputs:{x:r},attrs:{dtype:"float32"}}),u=t.dataIdMap.get(l.dataId).id);const o=t.makeOutput(r.shape,"float32"),p=t.dataIdMap.get(o.dataId).id;return wd(u,i,p),c.dtype!=="float32"&&t.disposeData(l.dataId),o}const G2={kernelName:xa,backendName:"wasm",setupFunc:H2,kernelFunc:j2};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */let _d;function q2(n){_d=n.wasm.cwrap($a,null,["number","number","number","number"])}function K2(n){const{backend:e,inputs:t,attrs:r}=n,{axis:a,keepDims:s}=r,{x:i}=t,u=e.dataIdMap.get(i.dataId).id;let c=u,l=i;const{transposed:o,axes:p,originalAxes:d,inputWasTransposed:m}=Yt(i,a,e);let f=p;if(m){const I=e.dataIdMap.get(o.dataId).id;I!==u&&(l=o,c=I,f=Hn(f.length,l.shape.length))}$t("prod",f,l.shape.length);const[g,y]=pn(l.shape,f),_=P(y),S=e.makeOutput(g,l.dtype);if(P(l.shape)!==0){const I=e.dataIdMap.get(S.dataId).id;_d(c,_,ie[S.dtype],I)}if(m&&e.disposeData(o.dataId),s){const I=yt(S.shape,d);S.shape=I}return S}const X2={kernelName:$a,backendName:"wasm",setupFunc:q2,kernelFunc:K2};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const J2={kernelName:Cu,backendName:"wasm",kernelFunc:n=>{const{backend:e,attrs:t}=n,{start:r,stop:a,step:s,dtype:i}=t,u=NS(r,a,s,i),c=e.makeOutput([u.length],i);return e.typedArrayFromHeap(c).set(u),c}};/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Y2=Te(Zi);/**
 * @license
 * Copyright 2022 The TensorFlow Authors. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Z2=ae(Ru);/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Q2=ae(Mu);/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const eT=ae(zu);/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */let Id;function tT(n){Id=n.wasm.cwrap(Aa,null,["number","number","number","number","number","number","number","number","number","number"])}function nT(n){const{backend:e,inputs:t,attrs:r}=n,{images:a}=t,{alignCorners:s,halfPixelCenters:i,size:u}=r,[c,l]=u,[o,p,d,m]=a.shape,f=[o,c,l,m];let g=e.dataIdMap.get(a.dataId),y;g.dtype!=="float32"&&(y=Zt({backend:e,inputs:{x:a},attrs:{dtype:"float32"}}),g=e.dataIdMap.get(y.dataId));const _=g.id,S=e.makeOutput(f,"float32");if(P(a.shape)===0)return S;const I=e.dataIdMap.get(S.dataId).id;return Id(_,o,p,d,m,c,l,s?1:0,i?1:0,I),y!=null&&e.disposeData(y.dataId),S}const rT={kernelName:Aa,backendName:"wasm",setupFunc:tT,kernelFunc:nT};/**
 * @license
 * Copyright 2023 Google LLC.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */let Nd;function sT(n){Nd=n.wasm.cwrap(Lu,null,["number","number","number","array","array","boolean"])}function aT(n){const{inputs:e,backend:t,attrs:r}=n,{images:a,dy:s}=e,{alignCorners:i}=r,u=t.makeOutput(a.shape,"float32");let c=t.dataIdMap.get(a.dataId),l;return c.dtype!=="float32"&&(l=Zt({backend:t,inputs:{x:a},attrs:{dtype:"float32"}}),c=t.dataIdMap.get(l.dataId)),Nd(t.dataIdMap.get(a.dataId).id,t.dataIdMap.get(s.dataId).id,t.dataIdMap.get(u.dataId).id,new Uint8Array(new Int32Array(a.shape).buffer),new Uint8Array(new Int32Array(s.shape).buffer),i),l!=null&&t.disposeData(l.dataId),u}const oT={kernelName:Lu,backendName:"wasm",setupFunc:sT,kernelFunc:aT};/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */let Sd;function iT(n){Sd=n.wasm.cwrap(Ea,null,["number","number","number","number","number","number","number","number","number","number"])}function uT(n){const{backend:e,inputs:t,attrs:r}=n,{images:a}=t,{alignCorners:s,halfPixelCenters:i,size:u}=r,[c,l]=u,[o,p,d,m]=a.shape,f=[o,c,l,m],g=e.makeOutput(f,"float32");if(P(a.shape)===0)return g;let y=e.dataIdMap.get(a.dataId),_;y.dtype!=="float32"&&(_=Zt({backend:e,inputs:{x:a},attrs:{dtype:"float32"}}),y=e.dataIdMap.get(_.dataId));const S=y.id,I=e.dataIdMap.get(g.dataId).id;return Sd(S,o,p,d,m,c,l,s?1:0,i?1:0,I),_!=null&&e.disposeData(_.dataId),g}const cT={kernelName:Ea,backendName:"wasm",setupFunc:iT,kernelFunc:uT};/**
 * @license
 * Copyright 2023 Google LLC.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */let kd;function lT(n){kd=n.wasm.cwrap(Pu,null,["number","number","number","array","array","boolean"])}function pT(n){const{inputs:e,backend:t,attrs:r}=n,{images:a,dy:s}=e,{alignCorners:i}=r,u=t.makeOutput(a.shape,"float32");let c=t.dataIdMap.get(a.dataId),l;return c.dtype!=="float32"&&(l=Zt({backend:t,inputs:{x:a},attrs:{dtype:"float32"}}),c=t.dataIdMap.get(l.dataId)),kd(t.dataIdMap.get(a.dataId).id,t.dataIdMap.get(s.dataId).id,t.dataIdMap.get(u.dataId).id,new Uint8Array(new Int32Array(a.shape).buffer),new Uint8Array(new Int32Array(s.shape).buffer),i),l!=null&&t.disposeData(l.dataId),u}const dT={kernelName:Pu,backendName:"wasm",setupFunc:lT,kernelFunc:pT};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */let vd;function mT(n){vd=n.wasm.cwrap(Da,null,["number","array","number","array","number","number"])}function hT(n){const{inputs:e,backend:t,attrs:r}=n,{x:a}=e,{dims:s}=r,i=wt(s,a.shape);if(a.shape.length===0)return ls({inputs:{x:a},backend:t});const u=t.makeOutput(a.shape,a.dtype),c=t.dataIdMap.get(a.dataId).id,l=t.dataIdMap.get(u.dataId).id,o=new Uint8Array(new Int32Array(i).buffer),p=new Uint8Array(new Int32Array(a.shape).buffer);vd(c,o,i.length,p,a.shape.length,l);const d=je({inputs:{x:u},attrs:{shape:a.shape},backend:t});return t.disposeData(u.dataId),d}const fT={kernelName:Da,backendName:"wasm",kernelFunc:hT,setupFunc:mT};/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */let Td;function gT(n){Td=n.wasm.cwrap(Ua,null,["number","number","number","number","number","number","number","number","array","number","number"])}function yT(n){const{inputs:e,backend:t,attrs:r}=n,{image:a}=e,{radians:s,fillValue:i,center:u}=r,c=t.makeOutput(a.shape,a.dtype),l=t.dataIdMap.get(a.dataId).id,o=t.dataIdMap.get(c.dataId).id,[p,d,m,f]=a.shape,[g,y]=fN(u,d,m),_=i===0,S=255,I=typeof i=="number"?[i,i,i,_?0:S]:[...i,S],T=new Uint8Array(new Int32Array(I).buffer);return Td(l,p,d,m,f,s,g,y,T,I.length,o),c}const bT={kernelName:Ua,backendName:"wasm",kernelFunc:yT,setupFunc:gT};/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const wT=ae(Wu);/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const _T=ae(Vu);/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */let xd;function IT(n){xd=n.wasm.cwrap(Fa,null,["number","number","number","number","number","number","array","number","number"])}function NT(n){const{backend:e,inputs:t,attrs:r}=n,{indices:a,updates:s}=t,{shape:i}=r,u=e.makeOutput(i,s.dtype);if(P(i)===0)return u;const{sliceRank:c,numUpdates:l,sliceSize:o,strides:p,outputSize:d}=Do(s,a,i),f=e.dataIdMap.get(a.dataId).id,y=e.dataIdMap.get(s.dataId).id,_=new Uint8Array(new Int32Array(p).buffer),S=e.dataIdMap.get(u.dataId).id;return xd(f,y,ie[s.dtype],c,l,o,_,d,S),u}const ST={kernelName:Fa,backendName:"wasm",setupFunc:IT,kernelFunc:NT};/**
 * @license
 * Copyright 2023 Google LLC.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */let $d;function kT(n){$d=n.wasm.cwrap(Ca,null,["number","number","number","number","number","number","bool","number"])}function vT(n){const{inputs:e,backend:t,attrs:r}=n,{sortedSequence:a,values:s}=e,{side:i}=r;if(a.dtype!==s.dtype)throw new Error(`SearchSorted error: sorted_sequence must have the same dtype as values. Got ${a.dtype} and ${s.dtype}`);const u=t.makeOutput(s.shape,"int32");function c(l){return t.dataIdMap.get(l.dataId).id}return $d(c(a),c(s),a.shape[0],a.shape[1],s.shape[1],ie[a.dtype],i==="left",c(u)),u}const TT={kernelName:Ca,backendName:"wasm",setupFunc:kT,kernelFunc:vT};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */let Ed;function xT(n){Ed=n.wasm.cwrap("SelectV2",null,["number","number","number","number","number"])}function $T(n){const{inputs:e,backend:t}=n,{condition:r,t:a,e:s}=e,i=t.dataIdMap.get(r.dataId).id,u=t.dataIdMap.get(a.dataId).id,c=t.dataIdMap.get(s.dataId).id,l=t.makeOutput(a.shape,a.dtype),o=t.dataIdMap.get(l.dataId).id,p=r.shape.length,d=a.shape.length,m=p===0||p>1||d===1?1:P(a.shape.slice(1));return Ed(i,u,c,m,o),l}const ET={kernelName:Uu,backendName:"wasm",kernelFunc:$T,setupFunc:xT};/**
 * @license
 * Copyright 2023 Google LLC.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const AT=ae(Hu);/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */let Ad;function DT(n){Ad=n.wasm.cwrap(Xu,null,["number","number"])}function FT(n){const{backend:e,inputs:{x:t}}=n,r=e.dataIdMap.get(t.dataId).id,a=e.makeOutput(t.shape,t.dtype),s=e.dataIdMap.get(a.dataId).id;return P(a.shape)===0||Ad(r,s),a}const OT={kernelName:"Sigmoid",backendName:"wasm",setupFunc:DT,kernelFunc:FT};/**
 * @license
 * Copyright 2023 Google LLC.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const CT=ae(Ku);/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const RT=ae(Gu);/**
 * @license
 * Copyright 2023 Google LLC.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const MT=ae(qu);/**
 * @license
 * Copyright 2023 Google LLC.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const BT=ae(Ju);/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function PT(n){const{inputs:e,backend:t,attrs:r}=n,{x:a}=e,{blockShape:s,paddings:i}=r,u=P(s),c=[[0,0]];c.push(...i);for(let A=1+s.length;A<a.shape.length;++A)c.push([0,0]);const l=bd.kernelFunc({inputs:{x:a},backend:t,attrs:{paddings:c,constantValue:0}}),o=ip(l.shape,s,u,!1),p=up(o.length,s.length,!1),d=cp(l.shape,s,u,!1),g=je({inputs:{x:l},backend:t,attrs:{shape:o}}),S=Jt({inputs:{x:g},backend:t,attrs:{perm:p}}),$=je({inputs:{x:S},backend:t,attrs:{shape:d}});return t.disposeData(l.dataId),t.disposeData(g.dataId),t.disposeData(S.dataId),$}const LT={kernelName:Zu,backendName:"wasm",kernelFunc:PT};/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */let Dd;function zT(n){Dd=n.wasm.cwrap("SparseFillEmptyRows","number",["number","number","number","number","number","number","number","number","number","number","number","number"])}function WT(n){const{backend:e,inputs:t}=n,{indices:r,values:a,denseShape:s,defaultValue:i}=t,u=r.shape[0],c=r.shape[1],l=e.readSync(s.dataId)[0],o=[u+l,c],p=e.dataIdMap.get(r.dataId).id,d=e.dataIdMap.get(a.dataId).id,m=e.dataIdMap.get(i.dataId).id,f=e.makeOutput(o,r.dtype),g=e.dataIdMap.get(f.dataId).id,y=e.makeOutput(o.slice(0,1),a.dtype),_=e.dataIdMap.get(y.dataId).id,S=e.makeOutput([l],"bool"),I=e.dataIdMap.get(S.dataId).id,T=e.makeOutput([u],r.dtype),$=e.dataIdMap.get(T.dataId).id,A=e.makeOutput([4],"int32"),F=e.dataIdMap.get(A.dataId).id,C=Dd(p,d,ie[a.dtype],u,l,c,m,g,_,I,$,F),M=e.readSync(A.dataId);let B;switch(M[0]){case 1:{B=wN(M[1]);break}case 2:{B=_N(M[1],M[2]);break}case 3:B=IN(M[1],M[2],M[3]);break;default:B=""}if(e.disposeData(A.dataId),B)throw e.disposeData(f.dataId),e.disposeData(y.dataId),e.disposeData(S.dataId),e.disposeData(T.dataId),new Error(B);let V=f,j=y;return C!==o[0]&&(V=_n({inputs:{x:f},attrs:{begin:0,size:[C,c]},backend:e}),j=_n({inputs:{x:y},attrs:{begin:0,size:C},backend:e}),e.disposeData(f.dataId),e.disposeData(y.dataId)),[V,j,S,T]}const VT={kernelName:ec,backendName:"wasm",setupFunc:zT,kernelFunc:WT};/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */let Fd;function UT(n){Fd=n.wasm.cwrap(Ba,null,["number","number","number","number","number","number","number"])}function HT(n){const{backend:e,inputs:t}=n,{inputIndices:r,inputShape:a,newShape:s}=t;if(r.shape.length!==2)throw new Error(`Input indices should be a matrix but received shape
        ${r.shape}`);if(a.shape.length!==1)throw new Error(`Input shape should be a vector but received shape
        ${a.shape}`);if(s.shape.length!==1)throw new Error(`Target shape should be a vector but received shape ${s.shape}`);const i=e.dataIdMap.get(r.dataId).id,u=e.dataIdMap.get(a.dataId).id,c=e.dataIdMap.get(s.dataId).id,l=r.shape[0],o=P(s.shape),p=e.makeOutput([l,o],r.dtype),d=e.dataIdMap.get(p.dataId).id,m=e.makeOutput([o],s.dtype),f=e.dataIdMap.get(m.dataId).id,g=e.makeOutput([3],"int32"),y=e.dataIdMap.get(g.dataId).id;Fd(i,u,c,l,d,f,y);const _=e.readSync(g.dataId);let S;switch(_[0]){case 0:{S=NN(_[1],_[2]);break}case 1:{S=SN(_[1],_[2]);break}case 2:S=kN();break;case 3:{const I=Array.from(e.readSync(a.dataId)),T=Array.from(e.readSync(m.dataId));S=vN(I,T);break}case 4:{const I=Array.from(e.readSync(a.dataId)),T=Array.from(e.readSync(m.dataId));S=TN(I,T);break}default:S=""}if(e.disposeData(g.dataId),S)throw e.disposeData(p.dataId),e.disposeData(m.dataId),new Error(S);return[p,m]}const jT={kernelName:Ba,backendName:"wasm",setupFunc:UT,kernelFunc:HT};/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */let Od;function Cd(n){Od=n.wasm.cwrap("SparseSegmentReduction",null,["number","number","number","number","number","number","number","number","number"])}function Rd(n,e){const{backend:t,inputs:r}=n,{data:a,indices:s,segmentIds:i}=r,u=s.shape[0],c=t.readSync(i.dataId,u-1,u)[0],o=u>0?c+1:0;if(o<0)throw new Error(lp());const p=a.shape.slice();p[0]=o;const d=t.dataIdMap.get(a.dataId).id,m=t.dataIdMap.get(s.dataId).id,f=t.dataIdMap.get(i.dataId).id,g=t.makeOutput(p,a.dtype),y=t.dataIdMap.get(g.dataId).id,_=t.makeOutput([4],"int32"),S=t.dataIdMap.get(_.dataId).id;Od(d,ie[a.dtype],a.shape[0],m,f,y,S,e,0);const I=t.readSync(_.dataId);let T;switch(I[0]){case 0:{T=lp();break}case 1:{T=xN();break}case 2:T=$N(I[1],I[2]);break;case 3:T=EN(I[1],I[2],I[3]);break;default:T=""}if(t.disposeData(_.dataId),T)throw t.disposeData(g.dataId),new Error(T);return g}/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function GT(n){return Rd(n,!0)}const qT={kernelName:tc,backendName:"wasm",setupFunc:Cd,kernelFunc:GT};/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function KT(n){return Rd(n,!1)}const XT={kernelName:nc,backendName:"wasm",setupFunc:Cd,kernelFunc:KT};/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */let Md;function JT(n){Md=n.wasm.cwrap(Pa,null,["number","number","number","number","number","number","number","number","array","number","number"])}function YT(n){const{backend:e,inputs:t,attrs:r}=n,{sparseIndices:a,sparseValues:s,defaultValue:i}=t,{outputShape:u}=r,c=e.makeOutput(u,i.dtype);if(P(u)===0)return c;const{sliceRank:l,numUpdates:o,sliceSize:p,strides:d,outputSize:m}=Do(s,a,u),f=e.dataIdMap.get(a.dataId).id,g=e.dataIdMap.get(s.dataId).id,y=e.dataIdMap.get(i.dataId).id,_=new Uint8Array(new Int32Array(d).buffer),S=e.dataIdMap.get(c.dataId).id;return Md(f,g,s.shape.length,y,ie[i.dtype],l,o,p,_,m,S),c}const ZT={kernelName:Pa,backendName:"wasm",setupFunc:JT,kernelFunc:YT};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function QT(n){const{inputs:e,attrs:t,backend:r}=n,{x:a}=e,{numOrSizeSplits:s,axis:i}=t,u=wt(i,a.shape)[0],c=bN(a,s,u),l=new Array(a.shape.length).fill(0),o=a.shape.slice();return c.map(p=>{const d=[...o];d[u]=p;const m=_n({inputs:{x:a},attrs:{begin:l,size:d},backend:r});return l[u]+=p,m})}const ex={kernelName:Qu,backendName:"wasm",kernelFunc:QT};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const tx=ae(Yu);/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const nx=ae(uh);/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const rx=Te(rc);/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */let Bd;function sx(n){Bd=n.wasm.cwrap(Va,null,["number","number","number","number"])}function ax(n){const{backend:e,inputs:t,attrs:r}=n,{alpha:a}=r,{x:s}=t,i=e.dataIdMap.get(s.dataId).id,u=e.makeOutput(s.shape,s.dtype),c=e.dataIdMap.get(u.dataId).id;return Bd(i,a,ie[s.dtype],c),u}const ox={kernelName:Va,backendName:"wasm",setupFunc:sx,kernelFunc:ax};/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */let Pd;function ix(n){Pd=n.wasm.cwrap(La,null,["number","array","number","array","array","array","array","array","number","number"])}function ux(n){const{backend:e,inputs:t,attrs:r}=n,{x:a}=t,{begin:s,end:i,strides:u,beginMask:c,endMask:l,ellipsisMask:o,newAxisMask:p,shrinkAxisMask:d}=r,{finalShapeSparse:m,finalShape:f,isIdentity:g,sliceDim0:y,isSimpleSlice:_,begin:S,end:I,strides:T}=dN(a.shape,s,i,u,c,l,o,p,d);let $;if(g)$=je({inputs:{x:a},backend:e,attrs:{shape:f}});else if(y||_){w(a.shape.length>=1,()=>`Input must have rank at least 1, got: ${a.shape.length}`);const A=lN(S,I,T),F=_n({inputs:{x:a},backend:e,attrs:{begin:S,size:A}});$=je({inputs:{x:F},backend:e,attrs:{shape:f}}),e.disposeData(F.dataId)}else{const A=e.makeOutput(m,"float32"),F=e.dataIdMap.get(a.dataId).id,C=new Uint8Array(new Int32Array(Ee(a.shape)).buffer),M=new Uint8Array(new Int32Array(S).buffer),B=new Uint8Array(new Int32Array(I).buffer),V=new Uint8Array(new Int32Array(T).buffer),j=new Uint8Array(new Int32Array(m).buffer),q=new Uint8Array(new Int32Array(Ee(m)).buffer),te=e.dataIdMap.get(A.dataId).id;Pd(F,C,a.shape.length,M,B,V,j,q,m.length,te),$=je({inputs:{x:A},backend:e,attrs:{shape:f}}),e.disposeData(A.dataId)}return $}const cx={kernelName:La,backendName:"wasm",setupFunc:ix,kernelFunc:ux};/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function lx(n){const{backend:e,inputs:t,attrs:r}=n,{data:a,dataSplits:s}=t,{separator:i,nGramWidths:u,leftPad:c,rightPad:l,padWidth:o,preserveShortSequences:p}=r,d=e.readSync(a.dataId),m=e.readSync(s.dataId),[f,g]=kS(d,m,i,u,c,l,o,p),y=e.makeOutput([f.length],"string"),_=e.dataIdMap.get(y.dataId);_.stringBytes=f;const S=e.makeOutput(s.shape,"int32");return e.typedArrayFromHeap(S).set(g),[y,S]}const px={kernelName:sc,backendName:"wasm",kernelFunc:lx};/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function dx(n){const{backend:e,inputs:t,attrs:r}=n,{input:a,delimiter:s}=t,{skipEmpty:i}=r,u=e.readSync(a.dataId),c=e.readSync(s.dataId),[l,o,p]=TS(u,c[0],i),d=o.length,m=e.makeOutput([d,2],"int32");e.typedArrayFromHeap(m).set(l);const g=e.makeOutput([d],"string"),y=e.dataIdMap.get(g.dataId);y.stringBytes=o;const _=e.makeOutput([2],"int32");return e.typedArrayFromHeap(_).set(p),[m,g,_]}const mx={kernelName:ac,backendName:"wasm",kernelFunc:dx};/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function hx(n){const{backend:e,inputs:t,attrs:r}=n,{input:a}=t,{numBuckets:s}=r,i=e.readSync(a.dataId),u=xS(i,s),c=e.makeOutput(a.shape,"int32");return e.typedArrayFromHeap(c).set(u),c}const fx={kernelName:oc,backendName:"wasm",kernelFunc:hx};/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const gx=Te(ic);/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */let Ld;function yx(n){Ld=n.wasm.cwrap(Ra,null,["number","number","number","number"])}function bx(n){const{backend:e,inputs:t,attrs:r}=n,{axis:a,keepDims:s}=r,{x:i}=t,u=e.dataIdMap.get(i.dataId).id;let c=u,l=i;const{transposed:o,axes:p,originalAxes:d,inputWasTransposed:m}=Yt(i,a,e);let f=p;if(m){const I=e.dataIdMap.get(o.dataId).id;I!==u&&(l=o,c=I,f=Hn(f.length,l.shape.length))}$t("sum",f,l.shape.length);const[g,y]=pn(l.shape,f),_=P(y),S=e.makeOutput(g,l.dtype);if(P(l.shape)!==0){const I=e.dataIdMap.get(S.dataId).id;Ld(c,_,ie[S.dtype],I)}if(m&&e.disposeData(o.dataId),s){const I=yt(S.shape,d);S.shape=I}return S}const wx={kernelName:Ra,backendName:"wasm",setupFunc:yx,kernelFunc:bx};/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const _x=ae(uc);/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Ix=ae(cc);/**
 * @license
 * Copyright 2022 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */let zd;function Nx(n){zd=n.wasm.cwrap(Oa,null,["number","number","number","number","number","number","array","number","number","number"])}function Sx(n){const{backend:e,inputs:t,attrs:r}=n,{tensor:a,indices:s,updates:i}=t,u=e.makeOutput(a.shape,a.dtype);if(P(a.shape)===0)return u;const{sliceRank:c,numUpdates:l,sliceSize:o,strides:p,outputSize:d}=Do(i,s,a.shape),f=e.dataIdMap.get(s.dataId).id,y=e.dataIdMap.get(i.dataId).id,S=e.dataIdMap.get(a.dataId).id,I=new Uint8Array(new Int32Array(p).buffer),T=e.dataIdMap.get(u.dataId).id;return zd(f,y,ie[i.dtype],c,l,o,I,d,T,S),u}const kx={kernelName:Oa,backendName:"wasm",setupFunc:Nx,kernelFunc:Sx};/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */let Wd;function vx(n){Wd=n.wasm.cwrap(Br,null,["number","array","number","array","number","number"])}function Tx(n){const{inputs:e,backend:t,attrs:r}=n,{x:a}=e,s=t.dataIdMap.get(a.dataId).id,{reps:i}=r,u=new Array(a.shape.length);for(let d=0;d<u.length;d++)u[d]=a.shape[d]*i[d];const c=new Uint8Array(new Int32Array(a.shape).buffer),l=new Uint8Array(new Int32Array(u).buffer),o=t.makeOutput(u,a.dtype),p=t.dataIdMap.get(o.dataId).id;return Wd(s,c,a.shape.length,l,u.length,ie[o.dtype],p),o}const xx={kernelName:Br,backendName:"wasm",setupFunc:vx,kernelFunc:Tx};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */let Vd;function $x(n){Vd=n.wasm.cwrap(za,null,["number","array","number","number","number","bool","number","number"])}const Ex={kernelName:za,backendName:"wasm",setupFunc:$x,kernelFunc:({inputs:n,backend:e,attrs:t})=>{const{x:r}=n,{k:a,sorted:s}=t,i=e.dataIdMap.get(r.dataId).id,u=new Uint8Array(new Int32Array(r.shape).buffer),c=r.shape.slice();c[c.length-1]=a;const l=e.makeOutput(c,r.dtype),o=e.dataIdMap.get(l.dataId).id,p=e.makeOutput(c,"int32"),d=e.dataIdMap.get(p.dataId).id;return Vd(i,u,r.shape.length,ie[r.dtype],a,s,o,d),[l,p]}};/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */let Ud;function Ax(n){Ud=n.wasm.cwrap(Wa,null,["number","number","bool","number","number","number","number","number","number","array","number","array","number","number","number","number","number"])}function Dx(n){const{backend:e,inputs:t,attrs:r}=n,{image:a,transforms:s}=t,{interpolation:i,fillMode:u,fillValue:c,outputShape:l}=r,[o,p,d,m]=a.shape,[f,g]=l??[p,d],y=[o,f,g,m],_=new Uint8Array(new Int32Array(Ee(a.shape)).buffer),S=new Uint8Array(new Int32Array(Ee(y)).buffer),I=e.makeOutput(y,a.dtype),T=e.dataIdMap.get(I.dataId).id,A=e.dataIdMap.get(a.dataId).id,C=e.dataIdMap.get(s.dataId).id,M=i==="nearest"?1:2;let B;switch(u){case"constant":B=1;break;case"reflect":B=2;break;case"wrap":B=3;break;case"nearest":B=4;break;default:B=1;break}return Ud(A,C,s.shape[0]>1,o,f,g,m,d,p,_,a.shape.length-1,S,y.length-1,M,B,c,T),I}const Fx={kernelName:Wa,backendName:"wasm",setupFunc:Ax,kernelFunc:Dx};/**
 * @license
 * Copyright 2023 Google LLC.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Ox(n){const{inputs:e,attrs:t,backend:r}=n,{axis:a}=t,{x:s}=e,{outputValues:i,outputShape:u,indices:c}=$S(r.readSync(s.dataId),a,s.shape,s.dtype);return[r.makeOutput(u,s.dtype,void 0,i),r.makeOutput([c.length],"int32",void 0,c)]}const Cx={kernelName:lc,backendName:"wasm",kernelFunc:Ox};/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Rx(n){const{inputs:e,backend:t,attrs:r}=n,{value:a}=e;let{axis:s}=r;s<0&&(s+=a.shape.length);const i=a.shape[s],u=a.shape.length,c=new Array(u-1);let l=0;for(let m=0;m<u;m++)m!==s&&(c[l++]=a.shape[m]);const o=new Array(i),p=new Array(u).fill(0),d=a.shape.slice();d[s]=1;for(let m=0;m<o.length;m++)p[s]=m,o[m]=_n({inputs:{x:a},attrs:{begin:p,size:d},backend:t});return o.map(({dataId:m,dtype:f})=>({dataId:m,dtype:f,shape:c}))}const Mx={kernelName:pc,backendName:"wasm",kernelFunc:Rx};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Bx(n){const{inputs:{x:e},backend:t}=n,r=t.makeOutput(e.shape,e.dtype);return t.typedArrayFromHeap(r).fill(0),r}const Px={kernelName:dc,backendName:"wasm",kernelFunc:Bx};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Lx=[ON,CN,RN,MN,BN,zN,KN,YN,ZN,QN,eS,tS,nS,rS,sS,iS,gS,lS,mS,_S,CS,BS,PS,zS,WS,VS,jS,GS,XS,ZS,tk,sk,ik,uk,ck,dk,fk,bk,Ik,kk,xk,Ak,Ok,Mk,Lk,zk,Uk,Hk,jk,Gk,qk,Kk,Xk,Zk,Qk,ev,rv,ov,cv,dv,fv,gv,yv,WN,bv,wv,_v,Sv,kv,vv,$v,Av,Ev,Dv,Fv,Ov,Cv,Bv,zv,Uv,Hv,qv,Jv,Qv,n2,a2,u2,p2,d2,f2,_2,I2,N2,S2,T2,E2,F2,O2,M2,P2,z2,bd,U2,G2,X2,J2,Y2,Z2,Q2,eT,yS,rT,oT,cT,dT,fT,bT,wT,_T,ST,TT,ET,AT,OT,CT,RT,MT,FS,y2,BT,LT,VT,jT,qT,XT,ZT,ex,tx,nx,rx,ox,cx,px,mx,fx,gx,wx,_x,Ix,kx,xx,Ex,Fx,jN,Cx,Mx,Px];for(const n of Lx)dh(n);/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Xo=Z();Xo.registerFlag("WASM_HAS_SIMD_SUPPORT",async()=>{try{return WebAssembly.validate(new Uint8Array([0,97,115,109,1,0,0,0,1,4,1,96,0,0,3,2,1,0,10,9,1,7,0,65,0,253,15,26,11]))}catch{return!1}}),Xo.registerFlag("WASM_HAS_MULTITHREAD_SUPPORT",async()=>{if(Xo.get("IS_NODE"))return!1;try{return new MessageChannel().port1.postMessage(new SharedArrayBuffer(1)),WebAssembly.validate(new Uint8Array([0,97,115,109,1,0,0,0,1,4,1,96,0,0,3,2,1,0,5,4,1,3,1,1,10,11,1,9,0,65,0,254,16,2,0,26,11]))}catch{return!1}});var Hd={exports:{}};(function(n,e){var t=(()=>{var r=typeof document<"u"&&document.currentScript?document.currentScript.src:void 0;return typeof __filename<"u"&&(r=r||__filename),function(a){a=a||{};function s(){return se.buffer!=ke&&Nt(se.buffer),Qt}function i(){return se.buffer!=ke&&Nt(se.buffer),ys}function u(){return se.buffer!=ke&&Nt(se.buffer),bs}function c(){return se.buffer!=ke&&Nt(se.buffer),Sn}function l(){return se.buffer!=ke&&Nt(se.buffer),ws}var o=typeof a<"u"?a:{},p,d;o.ready=new Promise(function(N,x){p=N,d=x});var m;typeof process<"u"&&process.listeners&&(m={uncaughtException:process.listeners("uncaughtException"),unhandledRejection:process.listeners("unhandledRejection")});var f=Object.assign({},o),g=(N,x)=>{throw x},y=typeof window=="object",_=typeof importScripts=="function",S=typeof process=="object"&&typeof process.versions=="object"&&typeof process.versions.node=="string",I=o.ENVIRONMENT_IS_PTHREAD||!1,T="";function $(N){return o.locateFile?o.locateFile(N,T):T+N}var A,F,C;function M(N){if(N instanceof Bt)return;J("exiting due to exception: "+N)}if(S){var B=Xt,V=Xt;_?T=V.dirname(T)+"/":T=__dirname+"/",A=(x,R)=>(x=Yn(x)?new URL(x):V.normalize(x),B.readFileSync(x,R?void 0:"utf8")),C=x=>{var R=A(x,!0);return R.buffer||(R=new Uint8Array(R)),R},F=(x,R,K)=>{x=Yn(x)?new URL(x):V.normalize(x),B.readFile(x,function(Y,ee){Y?K(Y):R(ee.buffer)})},process.argv.length>1&&process.argv[1].replace(/\\/g,"/"),process.argv.slice(2),process.on("uncaughtException",function(x){if(!(x instanceof Bt))throw x}),process.on("unhandledRejection",function(x){throw x}),g=(x,R)=>{if(Jn())throw process.exitCode=x,R;M(R),process.exit(x)},o.inspect=function(){return"[Emscripten Module object]"};let N;try{N=Xt}catch(x){throw console.error('The "worker_threads" module is not supported in this node.js build - perhaps a newer version is needed?'),x}kt.Worker=N.Worker}else(y||_)&&(_?T=self.location.href:typeof document<"u"&&document.currentScript&&(T=document.currentScript.src),typeof r<"u"&&r&&(T=r),T.indexOf("blob:")!==0?T=T.substr(0,T.replace(/[?#].*/,"").lastIndexOf("/")+1):T="",S||(A=N=>{var x=new XMLHttpRequest;return x.open("GET",N,!1),x.send(null),x.responseText},_&&(C=N=>{var x=new XMLHttpRequest;return x.open("GET",N,!1),x.responseType="arraybuffer",x.send(null),new Uint8Array(x.response)}),F=(N,x,R)=>{var K=new XMLHttpRequest;K.open("GET",N,!0),K.responseType="arraybuffer",K.onload=()=>{if(K.status==200||K.status==0&&K.response){x(K.response);return}R()},K.onerror=R,K.send(null)}));S&&typeof performance>"u"&&(kt.performance=Xt.performance);var j=console.log.bind(console),q=console.warn.bind(console);S&&(j=N=>B.writeSync(1,N+`
`),q=N=>B.writeSync(2,N+`
`));var te=o.print||j,J=o.printErr||q;Object.assign(o,f),f=null,o.arguments&&o.arguments,o.thisProgram&&o.thisProgram,o.quit&&(g=o.quit);var ue;o.wasmBinary&&(ue=o.wasmBinary);var Se=o.noExitRuntime||!0;typeof WebAssembly!="object"&&Tn("no native wasm support detected");var se,Fe,We=!1,Ye;function Rt(N,x){N||Tn(x)}var Oe=typeof TextDecoder<"u"?new TextDecoder("utf8"):void 0;function Kn(N,x,R){x>>>=0;for(var K=x+R,Y=x;N[Y]&&!(Y>=K);)++Y;if(Y-x>16&&N.buffer&&Oe)return Oe.decode(N.buffer instanceof SharedArrayBuffer?N.slice(x,Y):N.subarray(x,Y));for(var ee="";x<Y;){var U=N[x++];if(!(U&128)){ee+=String.fromCharCode(U);continue}var H=N[x++]&63;if((U&224)==192){ee+=String.fromCharCode((U&31)<<6|H);continue}var _e=N[x++]&63;if((U&240)==224?U=(U&15)<<12|H<<6|_e:U=(U&7)<<18|H<<12|_e<<6|N[x++]&63,U<65536)ee+=String.fromCharCode(U);else{var st=U-65536;ee+=String.fromCharCode(55296|st>>10,56320|st&1023)}}return ee}function Xn(N,x){return N>>>=0,N?Kn(i(),N,x):""}function Er(N,x,R,K){if(R>>>=0,!(K>0))return 0;for(var Y=R,ee=R+K-1,U=0;U<N.length;++U){var H=N.charCodeAt(U);if(H>=55296&&H<=57343){var _e=N.charCodeAt(++U);H=65536+((H&1023)<<10)|_e&1023}if(H<=127){if(R>=ee)break;x[R++>>>0]=H}else if(H<=2047){if(R+1>=ee)break;x[R++>>>0]=192|H>>6,x[R++>>>0]=128|H&63}else if(H<=65535){if(R+2>=ee)break;x[R++>>>0]=224|H>>12,x[R++>>>0]=128|H>>6&63,x[R++>>>0]=128|H&63}else{if(R+3>=ee)break;x[R++>>>0]=240|H>>18,x[R++>>>0]=128|H>>12&63,x[R++>>>0]=128|H>>6&63,x[R++>>>0]=128|H&63}}return x[R>>>0]=0,R-Y}function Ar(N,x,R){return Er(N,i(),x,R)}var ke,Qt,ys,bs,Sn,ws;I&&(ke=o.buffer);function Nt(N){ke=N,o.HEAP8=Qt=new Int8Array(N),o.HEAP16=new Int16Array(N),o.HEAP32=bs=new Int32Array(N),o.HEAPU8=ys=new Uint8Array(N),o.HEAPU16=new Uint16Array(N),o.HEAPU32=Sn=new Uint32Array(N),o.HEAPF32=new Float32Array(N),o.HEAPF64=ws=new Float64Array(N)}var kn=o.INITIAL_MEMORY||16777216;if(I)se=o.wasmMemory,ke=o.buffer;else if(o.wasmMemory)se=o.wasmMemory;else if(se=new WebAssembly.Memory({initial:kn/65536,maximum:65536,shared:!0}),!(se.buffer instanceof SharedArrayBuffer))throw J("requested a shared WebAssembly.Memory but the returned buffer is not a SharedArrayBuffer, indicating that while the browser has SharedArrayBuffer it does not have WebAssembly threads support - you may need to set a flag"),S&&J("(on node you may need: --experimental-wasm-threads --experimental-wasm-bulk-memory and/or recent version)"),Error("bad memory");se&&(ke=se.buffer),kn=ke.byteLength,Nt(ke);var Ce,Dr=[],_s=[],Is=[];function Jn(){return Se}function Fr(){if(o.preRun)for(typeof o.preRun=="function"&&(o.preRun=[o.preRun]);o.preRun.length;)li(o.preRun.shift());me(Dr)}function Ns(){I||me(_s)}function Ss(){if(!I){if(o.postRun)for(typeof o.postRun=="function"&&(o.postRun=[o.postRun]);o.postRun.length;)di(o.postRun.shift());me(Is)}}function li(N){Dr.unshift(N)}function pi(N){_s.unshift(N)}function di(N){Is.unshift(N)}var Mt=0,vn=null;function mi(N){Mt++,o.monitorRunDependencies&&o.monitorRunDependencies(Mt)}function hi(N){if(Mt--,o.monitorRunDependencies&&o.monitorRunDependencies(Mt),Mt==0&&vn){var x=vn;vn=null,x()}}function Tn(N){o.onAbort&&o.onAbort(N),N="Aborted("+N+")",J(N),We=!0,Ye=1,N+=". Build with -sASSERTIONS for more info.";var x=new WebAssembly.RuntimeError(N);throw d(x),x}var fi="data:application/octet-stream;base64,";function Or(N){return N.startsWith(fi)}function Yn(N){return N.startsWith("file://")}var Ve;Ve="tfjs-backend-wasm-threaded-simd.wasm",Or(Ve)||(Ve=$(Ve));function ks(N){try{if(N==Ve&&ue)return new Uint8Array(ue);if(C)return C(N);throw"both async and sync fetching of the wasm failed"}catch(x){Tn(x)}}function vs(){if(!ue&&(y||_)){if(typeof fetch=="function"&&!Yn(Ve))return fetch(Ve,{credentials:"same-origin"}).then(function(N){if(!N.ok)throw"failed to load wasm binary file at '"+Ve+"'";return N.arrayBuffer()}).catch(function(){return ks(Ve)});if(F)return new Promise(function(N,x){F(Ve,function(R){N(new Uint8Array(R))},x)})}return Promise.resolve().then(function(){return ks(Ve)})}function Ts(){var N={env:ym,wasi_snapshot_preview1:ym};function x(U,H){var _e=U.exports;if(o.asm=_e,Pt(o.asm._emscripten_tls_init),Ce=o.asm.__indirect_function_table,pi(o.asm.__wasm_call_ctors),Fe=H,!I){var st=W.unusedWorkers.length;W.unusedWorkers.forEach(function(Lt){W.loadWasmModuleToWorker(Lt,function(){--st||hi()})})}}I||mi();function R(U){x(U.instance,U.module)}function K(U){return vs().then(function(H){return WebAssembly.instantiate(H,N)}).then(function(H){return H}).then(U,function(H){J("failed to asynchronously prepare wasm: "+H),Tn(H)})}function Y(){return!ue&&typeof WebAssembly.instantiateStreaming=="function"&&!Or(Ve)&&!Yn(Ve)&&!S&&typeof fetch=="function"?fetch(Ve,{credentials:"same-origin"}).then(function(U){var H=WebAssembly.instantiateStreaming(U,N);return H.then(R,function(_e){return J("wasm streaming compile failed: "+_e),J("falling back to ArrayBuffer instantiation"),K(R)})}):K(R)}if(o.instantiateWasm)try{var ee=o.instantiateWasm(N,x);return ee}catch(U){J("Module.instantiateWasm callback failed with error: "+U),d(U)}return Y().catch(d),{}}var xs={};function Bt(N){this.name="ExitStatus",this.message="Program terminated with exit("+N+")",this.status=N}function Zn(N){var x=W.pthreads[N];delete W.pthreads[N],x.terminate(),wi(N),W.runningWorkers.splice(W.runningWorkers.indexOf(x),1),x.pthread_ptr=0}function $s(N){var x=W.pthreads[N];x.postMessage({cmd:"cancel"})}function xn(N){var x=W.pthreads[N];Rt(x),W.returnWorkerToPool(x)}function $n(N){var x=W.getNewWorker();if(!x)return 6;W.runningWorkers.push(x),W.pthreads[N.pthread_ptr]=x,x.pthread_ptr=N.pthread_ptr;var R={cmd:"run",start_routine:N.startRoutine,arg:N.arg,pthread_ptr:N.pthread_ptr};return x.runPthread=()=>{S&&x.ref(),x.postMessage(R,N.transferList),delete x.runPthread},x.loaded&&x.runPthread(),0}function Es(N){if(I)return Qn(1,1,N);Ye=N,Jn()||(W.terminateAllThreads(),o.onExit&&o.onExit(N),We=!0),g(N,new Bt(N))}function E(N,x){if(Ye=N,!x&&I)throw ne(N),"unwind";Es(N)}var O=E;function G(N){if(N instanceof Bt||N=="unwind")return Ye;g(1,N)}var W={unusedWorkers:[],runningWorkers:[],tlsInitFunctions:[],pthreads:{},init:function(){I?W.initWorker():W.initMainThread()},initMainThread:function(){for(var N=8;N--;)W.allocateUnusedWorker()},initWorker:function(){Se=!1},setExitStatus:function(N){Ye=N},terminateAllThreads:function(){for(var N of Object.values(W.pthreads))W.returnWorkerToPool(N);for(var N of W.unusedWorkers)N.terminate();W.unusedWorkers=[]},returnWorkerToPool:function(N){var x=N.pthread_ptr;delete W.pthreads[x],W.unusedWorkers.push(N),W.runningWorkers.splice(W.runningWorkers.indexOf(N),1),N.pthread_ptr=0,S&&N.unref(),wi(x)},receiveObjectTransfer:function(N){},threadInitTLS:function(){W.tlsInitFunctions.forEach(N=>N())},loadWasmModuleToWorker:function(N,x){N.onmessage=ee=>{var U=ee.data,H=U.cmd;if(N.pthread_ptr&&(W.currentProxiedOperationCallerThread=N.pthread_ptr),U.targetThread&&U.targetThread!=Os()){var _e=W.pthreads[U.targetThread];_e?_e.postMessage(U,U.transferList):J('Internal error! Worker sent a message "'+H+'" to target pthread '+U.targetThread+", but that thread no longer exists!"),W.currentProxiedOperationCallerThread=void 0;return}H==="processProxyingQueue"?gi(U.queue):H==="spawnThread"?$n(U):H==="cleanupThread"?xn(U.thread):H==="killThread"?Zn(U.thread):H==="cancelThread"?$s(U.thread):H==="loaded"?(N.loaded=!0,S&&N.unref(),x&&x(N),N.runPthread&&N.runPthread()):H==="print"?te("Thread "+U.threadId+": "+U.text):H==="printErr"?J("Thread "+U.threadId+": "+U.text):H==="alert"?alert("Thread "+U.threadId+": "+U.text):U.target==="setimmediate"?N.postMessage(U):H==="callHandler"?o[U.handler](...U.args):H&&J("worker sent an unknown command "+H),W.currentProxiedOperationCallerThread=void 0},N.onerror=ee=>{var U="worker sent an error!";throw J(U+" "+ee.filename+":"+ee.lineno+": "+ee.message),ee},S&&(N.on("message",function(ee){N.onmessage({data:ee})}),N.on("error",function(ee){N.onerror(ee)}),N.on("detachedExit",function(){}));var R=[],K=["onExit","onAbort","print","printErr"];for(var Y of K)o.hasOwnProperty(Y)&&R.push(Y);N.postMessage({cmd:"load",handlers:R,urlOrBlob:o.mainScriptUrlOrBlob||r,wasmMemory:se,wasmModule:Fe})},allocateUnusedWorker:function(){var N,x=$("tfjs-backend-wasm-threaded-simd.worker.js");N=new Worker(x),W.unusedWorkers.push(N)},getNewWorker:function(){return W.unusedWorkers.length==0&&(W.allocateUnusedWorker(),W.loadWasmModuleToWorker(W.unusedWorkers[0])),W.unusedWorkers.pop()}};o.PThread=W;function me(N){for(;N.length>0;)N.shift()(o)}function be(){var N=Os(),x=u()[N+52>>>2],R=u()[N+56>>>2],K=x-R;Nm(x,K),Cs(x)}o.establishStackSpace=be;function ne(N){if(I)return Qn(2,0,N);try{O(N)}catch(x){G(x)}}var Q=[];function xe(N){var x=Q[N];return x||(N>=Q.length&&(Q.length=N+1),Q[N]=x=Ce.get(N)),x}function rt(N,x){var R=xe(N)(x);Jn()?W.setExitStatus(R):Im(R)}o.invokeEntryPoint=rt;function Pt(N){W.tlsInitFunctions.push(N)}function As(N){bm(N,!_,1,!y),W.threadInitTLS()}function Cr(N){I?postMessage({cmd:"cleanupThread",thread:N}):xn(N)}function Ds(N,x,R,K){return I?Qn(3,1,N,x,R,K):Re(N,x,R,K)}function Re(N,x,R,K){if(typeof SharedArrayBuffer>"u")return J("Current environment does not support SharedArrayBuffer, pthreads are not available!"),6;var Y=[],ee=0;if(I&&(Y.length===0||ee))return Ds(N,x,R,K);var U={startRoutine:R,pthread_ptr:N,arg:K,transferList:Y};return I?(U.cmd="spawnThread",postMessage(U,Y),0):$n(U)}function en(){return 65536}var Fs=!0;function yE(){return Fs}function gi(N){Atomics.store(u(),N>>2,1),Os()&&_m(N),Atomics.compareExchange(u(),N>>2,1,0)}o.executeNotifiedProxyingQueue=gi;function bE(N,x,R,K){if(N==x)setTimeout(()=>gi(K));else if(I)postMessage({targetThread:N,cmd:"processProxyingQueue",queue:K});else{var Y=W.pthreads[N];if(!Y)return;Y.postMessage({cmd:"processProxyingQueue",queue:K})}return 1}function wE(N,x,R){return-1}function _E(){Tn("")}function Rr(N){Rr.shown||(Rr.shown={}),Rr.shown[N]||(Rr.shown[N]=1,S&&(N="warning: "+N),J(N))}function IE(){S||_||Rr("Blocking on the main thread is very dangerous, see https://emscripten.org/docs/porting/pthreads.html#blocking-on-the-main-browser-thread")}function NE(){return Date.now()}function dm(){return 4294901760}function SE(){return dm()}var yi;S?yi=()=>{var N=process.hrtime();return N[0]*1e3+N[1]/1e6}:yi=()=>performance.timeOrigin+performance.now();function kE(N,x,R){i().copyWithin(N>>>0,x>>>0,x+R>>>0)}function vE(){return S?Xt.cpus().length:navigator.hardwareConcurrency}function TE(N){var x=_i(),R=N();return Cs(x),R}function Qn(N,x){var R=arguments.length-2,K=arguments;return TE(()=>{for(var Y=R,ee=Rs(Y*8),U=ee>>3,H=0;H<R;H++){var _e=K[2+H];l()[U+H>>>0]=_e}return wm(N,Y,ee,x)})}var bi=[];function xE(N,x,R){bi.length=x;for(var K=R>>3,Y=0;Y<x;Y++)bi[Y]=l()[K+Y>>>0];var ee=N<0,U=ee?xs[-N-1]:ME[N];return U.apply(null,bi)}function $E(N){try{return se.grow(N-ke.byteLength+65535>>>16),Nt(se.buffer),1}catch{}}function EE(N){var x=i().length;if(N=N>>>0,N<=x)return!1;var R=dm();if(N>R)return!1;let K=(_e,st)=>_e+(st-_e%st)%st;for(var Y=1;Y<=4;Y*=2){var ee=x*(1+.2/Y);ee=Math.min(ee,N+100663296);var U=Math.min(R,K(Math.max(N,ee),65536)),H=$E(U);if(H)return!0}return!1}function AE(){throw"unwind"}function mm(N){return I?Qn(4,1,N):52}function hm(N,x,R,K,Y){return I?Qn(5,1,N,x,R,K,Y):70}var DE=[null,[],[]];function FE(N,x){var R=DE[N];x===0||x===10?((N===1?te:J)(Kn(R,0)),R.length=0):R.push(x)}function fm(N,x,R,K){if(I)return Qn(6,1,N,x,R,K);for(var Y=0,ee=0;ee<R;ee++){var U=c()[x>>>2],H=c()[x+4>>>2];x+=8;for(var _e=0;_e<H;_e++)FE(N,i()[U+_e>>>0]);Y+=H}return c()[K>>>2]=Y,0}function gm(N){var x=o["_"+N];return x}function OE(N,x){s().set(N,x>>>0)}function CE(N,x,R,K,Y){var ee={string:Ze=>{var er=0;if(Ze!=null&&Ze!==0){var vm=(Ze.length<<2)+1;er=Rs(vm),Ar(Ze,er,vm)}return er},array:Ze=>{var er=Rs(Ze.length);return OE(Ze,er),er}};function U(Ze){return x==="string"?Xn(Ze):x==="boolean"?!!Ze:Ze}var H=gm(N),_e=[],st=0;if(K)for(var Lt=0;Lt<K.length;Lt++){var km=ee[R[Lt]];km?(st===0&&(st=_i()),_e[Lt]=km(K[Lt])):_e[Lt]=K[Lt]}var Ii=H.apply(null,_e);function PE(Ze){return st!==0&&Cs(st),U(Ze)}return Ii=PE(Ii),Ii}function RE(N,x,R,K){R=R||[];var Y=R.every(U=>U==="number"||U==="boolean"),ee=x!=="string";return ee&&Y&&!K?gm(N):function(){return CE(N,x,R,arguments)}}W.init();var ME=[null,Es,ne,Ds,mm,hm,fm],ym={__emscripten_init_main_thread_js:As,__emscripten_thread_cleanup:Cr,__pthread_create_js:Re,_emscripten_default_pthread_stack_size:en,_emscripten_get_now_is_monotonic:yE,_emscripten_notify_task_queue:bE,_emscripten_set_offscreencanvas_size:wE,abort:_E,emscripten_check_blocking_allowed:IE,emscripten_date_now:NE,emscripten_get_heap_max:SE,emscripten_get_now:yi,emscripten_memcpy_big:kE,emscripten_num_logical_cores:vE,emscripten_receive_on_main_thread_js:xE,emscripten_resize_heap:EE,emscripten_unwind_to_js_event_loop:AE,exit:O,fd_close:mm,fd_seek:hm,fd_write:fm,memory:se||o.wasmMemory};Ts(),o.___wasm_call_ctors=function(){return(o.___wasm_call_ctors=o.asm.__wasm_call_ctors).apply(null,arguments)},o._init=function(){return(o._init=o.asm.init).apply(null,arguments)},o._init_with_threads_count=function(){return(o._init_with_threads_count=o.asm.init_with_threads_count).apply(null,arguments)},o._get_threads_count=function(){return(o._get_threads_count=o.asm.get_threads_count).apply(null,arguments)},o._register_tensor=function(){return(o._register_tensor=o.asm.register_tensor).apply(null,arguments)},o._dispose_data=function(){return(o._dispose_data=o.asm.dispose_data).apply(null,arguments)},o._dispose=function(){return(o._dispose=o.asm.dispose).apply(null,arguments)},o._Abs=function(){return(o._Abs=o.asm.Abs).apply(null,arguments)},o._Acos=function(){return(o._Acos=o.asm.Acos).apply(null,arguments)},o._Acosh=function(){return(o._Acosh=o.asm.Acosh).apply(null,arguments)},o._Add=function(){return(o._Add=o.asm.Add).apply(null,arguments)},o._AddN=function(){return(o._AddN=o.asm.AddN).apply(null,arguments)},o._All=function(){return(o._All=o.asm.All).apply(null,arguments)},o._Any=function(){return(o._Any=o.asm.Any).apply(null,arguments)},o._ArgMax=function(){return(o._ArgMax=o.asm.ArgMax).apply(null,arguments)},o._ArgMin=function(){return(o._ArgMin=o.asm.ArgMin).apply(null,arguments)},o._Asin=function(){return(o._Asin=o.asm.Asin).apply(null,arguments)},o._Asinh=function(){return(o._Asinh=o.asm.Asinh).apply(null,arguments)},o._Atan=function(){return(o._Atan=o.asm.Atan).apply(null,arguments)},o._Atan2=function(){return(o._Atan2=o.asm.Atan2).apply(null,arguments)},o._Atanh=function(){return(o._Atanh=o.asm.Atanh).apply(null,arguments)},o._AvgPool=function(){return(o._AvgPool=o.asm.AvgPool).apply(null,arguments)},o._AvgPool3D=function(){return(o._AvgPool3D=o.asm.AvgPool3D).apply(null,arguments)},o._AvgPool3DGrad=function(){return(o._AvgPool3DGrad=o.asm.AvgPool3DGrad).apply(null,arguments)},o._AvgPoolGrad=function(){return(o._AvgPoolGrad=o.asm.AvgPoolGrad).apply(null,arguments)},o._BatchMatMul=function(){return(o._BatchMatMul=o.asm.BatchMatMul).apply(null,arguments)},o._Bincount=function(){return(o._Bincount=o.asm.Bincount).apply(null,arguments)},o._BitwiseAnd=function(){return(o._BitwiseAnd=o.asm.BitwiseAnd).apply(null,arguments)},o._Ceil=function(){return(o._Ceil=o.asm.Ceil).apply(null,arguments)},o._ClipByValue=function(){return(o._ClipByValue=o.asm.ClipByValue).apply(null,arguments)},o._Conv2D=function(){return(o._Conv2D=o.asm.Conv2D).apply(null,arguments)},o._Conv2DBackpropInput=function(){return(o._Conv2DBackpropInput=o.asm.Conv2DBackpropInput).apply(null,arguments)},o._Conv3D=function(){return(o._Conv3D=o.asm.Conv3D).apply(null,arguments)},o._Conv3DBackpropFilterV2=function(){return(o._Conv3DBackpropFilterV2=o.asm.Conv3DBackpropFilterV2).apply(null,arguments)},o._Conv3DBackpropInputV2=function(){return(o._Conv3DBackpropInputV2=o.asm.Conv3DBackpropInputV2).apply(null,arguments)},o._Cos=function(){return(o._Cos=o.asm.Cos).apply(null,arguments)},o._Cosh=function(){return(o._Cosh=o.asm.Cosh).apply(null,arguments)},o._CropAndResize=function(){return(o._CropAndResize=o.asm.CropAndResize).apply(null,arguments)},o._Cumprod=function(){return(o._Cumprod=o.asm.Cumprod).apply(null,arguments)},o._Cumsum=function(){return(o._Cumsum=o.asm.Cumsum).apply(null,arguments)},o._DenseBincount=function(){return(o._DenseBincount=o.asm.DenseBincount).apply(null,arguments)},o._DepthToSpace=function(){return(o._DepthToSpace=o.asm.DepthToSpace).apply(null,arguments)},o._DepthwiseConv2dNative=function(){return(o._DepthwiseConv2dNative=o.asm.DepthwiseConv2dNative).apply(null,arguments)},o._Diag=function(){return(o._Diag=o.asm.Diag).apply(null,arguments)},o._Dilation2D=function(){return(o._Dilation2D=o.asm.Dilation2D).apply(null,arguments)},o._Dilation2DBackpropFilter=function(){return(o._Dilation2DBackpropFilter=o.asm.Dilation2DBackpropFilter).apply(null,arguments)},o._Dilation2DBackpropInput=function(){return(o._Dilation2DBackpropInput=o.asm.Dilation2DBackpropInput).apply(null,arguments)},o._Elu=function(){return(o._Elu=o.asm.Elu).apply(null,arguments)},o._EluGrad=function(){return(o._EluGrad=o.asm.EluGrad).apply(null,arguments)},o._Equal=function(){return(o._Equal=o.asm.Equal).apply(null,arguments)},o._Erf=function(){return(o._Erf=o.asm.Erf).apply(null,arguments)},o._Exp=function(){return(o._Exp=o.asm.Exp).apply(null,arguments)},o._Expm1=function(){return(o._Expm1=o.asm.Expm1).apply(null,arguments)},o._FlipLeftRight=function(){return(o._FlipLeftRight=o.asm.FlipLeftRight).apply(null,arguments)},o._Floor=function(){return(o._Floor=o.asm.Floor).apply(null,arguments)},o._FloorDiv=function(){return(o._FloorDiv=o.asm.FloorDiv).apply(null,arguments)},o._FusedBatchNorm=function(){return(o._FusedBatchNorm=o.asm.FusedBatchNorm).apply(null,arguments)},o._FusedConv2D=function(){return(o._FusedConv2D=o.asm.FusedConv2D).apply(null,arguments)},o._FusedDepthwiseConv2D=function(){return(o._FusedDepthwiseConv2D=o.asm.FusedDepthwiseConv2D).apply(null,arguments)},o._Gather=function(){return(o._Gather=o.asm.Gather).apply(null,arguments)},o._GatherNd=function(){return(o._GatherNd=o.asm.GatherNd).apply(null,arguments)},o._Greater=function(){return(o._Greater=o.asm.Greater).apply(null,arguments)},o._GreaterEqual=function(){return(o._GreaterEqual=o.asm.GreaterEqual).apply(null,arguments)},o._IsFinite=function(){return(o._IsFinite=o.asm.IsFinite).apply(null,arguments)},o._IsInf=function(){return(o._IsInf=o.asm.IsInf).apply(null,arguments)},o._IsNan=function(){return(o._IsNan=o.asm.IsNan).apply(null,arguments)},o._LRN=function(){return(o._LRN=o.asm.LRN).apply(null,arguments)},o._LRNGrad=function(){return(o._LRNGrad=o.asm.LRNGrad).apply(null,arguments)},o._LeakyRelu=function(){return(o._LeakyRelu=o.asm.LeakyRelu).apply(null,arguments)},o._Less=function(){return(o._Less=o.asm.Less).apply(null,arguments)},o._LessEqual=function(){return(o._LessEqual=o.asm.LessEqual).apply(null,arguments)},o._LinSpace=function(){return(o._LinSpace=o.asm.LinSpace).apply(null,arguments)},o._Log=function(){return(o._Log=o.asm.Log).apply(null,arguments)},o._Log1p=function(){return(o._Log1p=o.asm.Log1p).apply(null,arguments)},o._LogicalAnd=function(){return(o._LogicalAnd=o.asm.LogicalAnd).apply(null,arguments)},o._LogicalNot=function(){return(o._LogicalNot=o.asm.LogicalNot).apply(null,arguments)},o._LogicalOr=function(){return(o._LogicalOr=o.asm.LogicalOr).apply(null,arguments)},o._LogicalXor=function(){return(o._LogicalXor=o.asm.LogicalXor).apply(null,arguments)},o._Max=function(){return(o._Max=o.asm.Max).apply(null,arguments)},o._MaxPool=function(){return(o._MaxPool=o.asm.MaxPool).apply(null,arguments)},o._MaxPool3D=function(){return(o._MaxPool3D=o.asm.MaxPool3D).apply(null,arguments)},o._MaxPool3DGrad=function(){return(o._MaxPool3DGrad=o.asm.MaxPool3DGrad).apply(null,arguments)},o._MaxPoolGrad=function(){return(o._MaxPoolGrad=o.asm.MaxPoolGrad).apply(null,arguments)},o._MaxPoolWithArgmax=function(){return(o._MaxPoolWithArgmax=o.asm.MaxPoolWithArgmax).apply(null,arguments)},o._Maximum=function(){return(o._Maximum=o.asm.Maximum).apply(null,arguments)},o._Mean=function(){return(o._Mean=o.asm.Mean).apply(null,arguments)},o._Min=function(){return(o._Min=o.asm.Min).apply(null,arguments)},o._Minimum=function(){return(o._Minimum=o.asm.Minimum).apply(null,arguments)},o._MirrorPad=function(){return(o._MirrorPad=o.asm.MirrorPad).apply(null,arguments)},o._Mod=function(){return(o._Mod=o.asm.Mod).apply(null,arguments)},o._Multinomial=function(){return(o._Multinomial=o.asm.Multinomial).apply(null,arguments)},o._Multiply=function(){return(o._Multiply=o.asm.Multiply).apply(null,arguments)},o._Neg=function(){return(o._Neg=o.asm.Neg).apply(null,arguments)},o._NonMaxSuppressionV3=function(){return(o._NonMaxSuppressionV3=o.asm.NonMaxSuppressionV3).apply(null,arguments)},o._NonMaxSuppressionV4=function(){return(o._NonMaxSuppressionV4=o.asm.NonMaxSuppressionV4).apply(null,arguments)},o._NonMaxSuppressionV5=function(){return(o._NonMaxSuppressionV5=o.asm.NonMaxSuppressionV5).apply(null,arguments)},o._NotEqual=function(){return(o._NotEqual=o.asm.NotEqual).apply(null,arguments)},o._OneHot=function(){return(o._OneHot=o.asm.OneHot).apply(null,arguments)},o._PadV2=function(){return(o._PadV2=o.asm.PadV2).apply(null,arguments)},o._Pow=function(){return(o._Pow=o.asm.Pow).apply(null,arguments)},o._Prelu=function(){return(o._Prelu=o.asm.Prelu).apply(null,arguments)},o._Prod=function(){return(o._Prod=o.asm.Prod).apply(null,arguments)},o._RealDiv=function(){return(o._RealDiv=o.asm.RealDiv).apply(null,arguments)},o._Reciprocal=function(){return(o._Reciprocal=o.asm.Reciprocal).apply(null,arguments)},o._Relu=function(){return(o._Relu=o.asm.Relu).apply(null,arguments)},o._Relu6=function(){return(o._Relu6=o.asm.Relu6).apply(null,arguments)},o._ResizeBilinear=function(){return(o._ResizeBilinear=o.asm.ResizeBilinear).apply(null,arguments)},o._ResizeBilinearGrad=function(){return(o._ResizeBilinearGrad=o.asm.ResizeBilinearGrad).apply(null,arguments)},o._ResizeNearestNeighbor=function(){return(o._ResizeNearestNeighbor=o.asm.ResizeNearestNeighbor).apply(null,arguments)},o._ResizeNearestNeighborGrad=function(){return(o._ResizeNearestNeighborGrad=o.asm.ResizeNearestNeighborGrad).apply(null,arguments)},o._Reverse=function(){return(o._Reverse=o.asm.Reverse).apply(null,arguments)},o._RotateWithOffset=function(){return(o._RotateWithOffset=o.asm.RotateWithOffset).apply(null,arguments)},o._Round=function(){return(o._Round=o.asm.Round).apply(null,arguments)},o._Rsqrt=function(){return(o._Rsqrt=o.asm.Rsqrt).apply(null,arguments)},o._ScatterNd=function(){return(o._ScatterNd=o.asm.ScatterNd).apply(null,arguments)},o._SearchSorted=function(){return(o._SearchSorted=o.asm.SearchSorted).apply(null,arguments)},o._SelectV2=function(){return(o._SelectV2=o.asm.SelectV2).apply(null,arguments)},o._Selu=function(){return(o._Selu=o.asm.Selu).apply(null,arguments)},o._Sigmoid=function(){return(o._Sigmoid=o.asm.Sigmoid).apply(null,arguments)},o._Sign=function(){return(o._Sign=o.asm.Sign).apply(null,arguments)},o._Sin=function(){return(o._Sin=o.asm.Sin).apply(null,arguments)},o._Sinh=function(){return(o._Sinh=o.asm.Sinh).apply(null,arguments)},o._Softmax=function(){return(o._Softmax=o.asm.Softmax).apply(null,arguments)},o._Softplus=function(){return(o._Softplus=o.asm.Softplus).apply(null,arguments)},o._SparseFillEmptyRows=function(){return(o._SparseFillEmptyRows=o.asm.SparseFillEmptyRows).apply(null,arguments)},o._SparseReshape=function(){return(o._SparseReshape=o.asm.SparseReshape).apply(null,arguments)},o._SparseSegmentReduction=function(){return(o._SparseSegmentReduction=o.asm.SparseSegmentReduction).apply(null,arguments)},o._SparseToDense=function(){return(o._SparseToDense=o.asm.SparseToDense).apply(null,arguments)},o._Sqrt=function(){return(o._Sqrt=o.asm.Sqrt).apply(null,arguments)},o._Square=function(){return(o._Square=o.asm.Square).apply(null,arguments)},o._SquaredDifference=function(){return(o._SquaredDifference=o.asm.SquaredDifference).apply(null,arguments)},o._Step=function(){return(o._Step=o.asm.Step).apply(null,arguments)},o._StridedSlice=function(){return(o._StridedSlice=o.asm.StridedSlice).apply(null,arguments)},o._Sub=function(){return(o._Sub=o.asm.Sub).apply(null,arguments)},o._Sum=function(){return(o._Sum=o.asm.Sum).apply(null,arguments)},o._Tan=function(){return(o._Tan=o.asm.Tan).apply(null,arguments)},o._Tanh=function(){return(o._Tanh=o.asm.Tanh).apply(null,arguments)},o._TensorScatterUpdate=function(){return(o._TensorScatterUpdate=o.asm.TensorScatterUpdate).apply(null,arguments)},o._Tile=function(){return(o._Tile=o.asm.Tile).apply(null,arguments)},o._TopK=function(){return(o._TopK=o.asm.TopK).apply(null,arguments)},o._Transform=function(){return(o._Transform=o.asm.Transform).apply(null,arguments)},o._Transpose=function(){return(o._Transpose=o.asm.Transpose).apply(null,arguments)},o.__FusedMatMul=function(){return(o.__FusedMatMul=o.asm._FusedMatMul).apply(null,arguments)},o._malloc=function(){return(o._malloc=o.asm.malloc).apply(null,arguments)},o._free=function(){return(o._free=o.asm.free).apply(null,arguments)},o.__emscripten_tls_init=function(){return(o.__emscripten_tls_init=o.asm._emscripten_tls_init).apply(null,arguments)};var Os=o._pthread_self=function(){return(Os=o._pthread_self=o.asm.pthread_self).apply(null,arguments)};o.___errno_location=function(){return(o.___errno_location=o.asm.__errno_location).apply(null,arguments)};var bm=o.__emscripten_thread_init=function(){return(bm=o.__emscripten_thread_init=o.asm._emscripten_thread_init).apply(null,arguments)};o.__emscripten_thread_crashed=function(){return(o.__emscripten_thread_crashed=o.asm._emscripten_thread_crashed).apply(null,arguments)},o._emscripten_main_thread_process_queued_calls=function(){return(o._emscripten_main_thread_process_queued_calls=o.asm.emscripten_main_thread_process_queued_calls).apply(null,arguments)},o._emscripten_main_browser_thread_id=function(){return(o._emscripten_main_browser_thread_id=o.asm.emscripten_main_browser_thread_id).apply(null,arguments)};var wm=o._emscripten_run_in_main_runtime_thread_js=function(){return(wm=o._emscripten_run_in_main_runtime_thread_js=o.asm.emscripten_run_in_main_runtime_thread_js).apply(null,arguments)};o._emscripten_dispatch_to_thread_=function(){return(o._emscripten_dispatch_to_thread_=o.asm.emscripten_dispatch_to_thread_).apply(null,arguments)};var _m=o.__emscripten_proxy_execute_task_queue=function(){return(_m=o.__emscripten_proxy_execute_task_queue=o.asm._emscripten_proxy_execute_task_queue).apply(null,arguments)},wi=o.__emscripten_thread_free_data=function(){return(wi=o.__emscripten_thread_free_data=o.asm._emscripten_thread_free_data).apply(null,arguments)},Im=o.__emscripten_thread_exit=function(){return(Im=o.__emscripten_thread_exit=o.asm._emscripten_thread_exit).apply(null,arguments)},Nm=o._emscripten_stack_set_limits=function(){return(Nm=o._emscripten_stack_set_limits=o.asm.emscripten_stack_set_limits).apply(null,arguments)},_i=o.stackSave=function(){return(_i=o.stackSave=o.asm.stackSave).apply(null,arguments)},Cs=o.stackRestore=function(){return(Cs=o.stackRestore=o.asm.stackRestore).apply(null,arguments)},Rs=o.stackAlloc=function(){return(Rs=o.stackAlloc=o.asm.stackAlloc).apply(null,arguments)};o.dynCall_iijjiiii=function(){return(o.dynCall_iijjiiii=o.asm.dynCall_iijjiiii).apply(null,arguments)},o.dynCall_jiji=function(){return(o.dynCall_jiji=o.asm.dynCall_jiji).apply(null,arguments)},o.keepRuntimeAlive=Jn,o.wasmMemory=se,o.cwrap=RE,o.ExitStatus=Bt,o.PThread=W;var Ms;vn=function N(){Ms||Sm(),Ms||(vn=N)};function Sm(N){if(Mt>0)return;if(I){p(o),Ns(),startWorker(o);return}if(Fr(),Mt>0)return;function x(){Ms||(Ms=!0,o.calledRun=!0,!We&&(Ns(),p(o),o.onRuntimeInitialized&&o.onRuntimeInitialized(),Ss()))}o.setStatus?(o.setStatus("Running..."),setTimeout(function(){setTimeout(function(){o.setStatus("")},1),x()},1)):x()}if(o.preInit)for(typeof o.preInit=="function"&&(o.preInit=[o.preInit]);o.preInit.length>0;)o.preInit.pop()();Sm();var Bs;m&&(Bs={uncaughtException:process.listeners("uncaughtException").filter(function(N){return!m.uncaughtException.indexOf(N)>-1}),unhandledRejection:process.listeners("unhandledRejection").filter(function(N){return!m.unhandledRejection.indexOf(N)>-1})});var Ps;if(typeof WasmBackendModule<"u")Ps=WasmBackendModule;else if(typeof a<"u")Ps=a;else throw new Error("Could not find wasm module in post.js");if(Bs){var BE=Ps._dispose;Ps._dispose=function(){BE(),Bs.uncaughtException.forEach(function(N){process.removeListener("uncaughtException",N)}),Bs.unhandledRejection.forEach(function(N){process.removeListener("unhandledRejection",N)})}}return a.ready}})();n.exports=t})(Hd);var jd=Hd.exports,Gd=Ha(jd),zx=Ni({__proto__:null,default:Gd},[jd]),Wx=`"use strict";var Module={};var ENVIRONMENT_IS_NODE=typeof process=="object"&&typeof process.versions=="object"&&typeof process.versions.node=="string";if(ENVIRONMENT_IS_NODE){var nodeWorkerThreads=require("worker_threads");var parentPort=nodeWorkerThreads.parentPort;parentPort.on("message",data=>onmessage({data:data}));var fs=require("fs");Object.assign(global,{self:global,require:require,Module:Module,location:{href:__filename},Worker:nodeWorkerThreads.Worker,importScripts:function(f){(0,eval)(fs.readFileSync(f,"utf8")+"//# sourceURL="+f)},postMessage:function(msg){parentPort.postMessage(msg)},performance:global.performance||{now:function(){return Date.now()}}})}var initializedJS=false;var pendingNotifiedProxyingQueues=[];function threadPrintErr(){var text=Array.prototype.slice.call(arguments).join(" ");if(ENVIRONMENT_IS_NODE){fs.writeSync(2,text+"
");return}console.error(text)}function threadAlert(){var text=Array.prototype.slice.call(arguments).join(" ");postMessage({cmd:"alert",text:text,threadId:Module["_pthread_self"]()})}var err=threadPrintErr;self.alert=threadAlert;Module["instantiateWasm"]=(info,receiveInstance)=>{var instance=new WebAssembly.Instance(Module["wasmModule"],info);receiveInstance(instance);Module["wasmModule"]=null;return instance.exports};self.onunhandledrejection=e=>{throw e.reason??e};self.startWorker=instance=>{Module=instance;postMessage({"cmd":"loaded"})};self.onmessage=e=>{try{if(e.data.cmd==="load"){Module["wasmModule"]=e.data.wasmModule;for(const handler of e.data.handlers){Module[handler]=function(){postMessage({cmd:"callHandler",handler:handler,args:[...arguments]})}}Module["wasmMemory"]=e.data.wasmMemory;Module["buffer"]=Module["wasmMemory"].buffer;Module["ENVIRONMENT_IS_PTHREAD"]=true;if(typeof e.data.urlOrBlob=="string"){importScripts(e.data.urlOrBlob)}else{var objectUrl=URL.createObjectURL(e.data.urlOrBlob);importScripts(objectUrl);URL.revokeObjectURL(objectUrl)}WasmBackendModuleThreadedSimd(Module)}else if(e.data.cmd==="run"){Module["__emscripten_thread_init"](e.data.pthread_ptr,0,0,1);Module["establishStackSpace"]();Module["PThread"].receiveObjectTransfer(e.data);Module["PThread"].threadInitTLS();if(!initializedJS){pendingNotifiedProxyingQueues.forEach(queue=>{Module["executeNotifiedProxyingQueue"](queue)});pendingNotifiedProxyingQueues=[];initializedJS=true}try{Module["invokeEntryPoint"](e.data.start_routine,e.data.arg)}catch(ex){if(ex!="unwind"){if(ex instanceof Module["ExitStatus"]){if(Module["keepRuntimeAlive"]()){}else{Module["__emscripten_thread_exit"](ex.status)}}else{throw ex}}}}else if(e.data.cmd==="cancel"){if(Module["_pthread_self"]()){Module["__emscripten_thread_exit"](-1)}}else if(e.data.target==="setimmediate"){}else if(e.data.cmd==="processProxyingQueue"){if(initializedJS){Module["executeNotifiedProxyingQueue"](e.data.queue)}else{pendingNotifiedProxyingQueues.push(e.data.queue)}}else if(e.data.cmd){err("worker.js received unknown command "+e.data.cmd);err(e.data)}}catch(ex){if(Module["__emscripten_thread_crashed"]){Module["__emscripten_thread_crashed"]()}throw ex}};`,qd={exports:{}};(function(n,e){var t=(()=>{var r=typeof document<"u"&&document.currentScript?document.currentScript.src:void 0;return typeof __filename<"u"&&(r=r||__filename),function(a){a=a||{};var s=typeof a<"u"?a:{},i,u;s.ready=new Promise(function(E,O){i=E,u=O});var c;typeof process<"u"&&process.listeners&&(c={uncaughtException:process.listeners("uncaughtException"),unhandledRejection:process.listeners("unhandledRejection")});var l=Object.assign({},s),o=typeof window=="object",p=typeof importScripts=="function",d=typeof process=="object"&&typeof process.versions=="object"&&typeof process.versions.node=="string",m="";function f(E){return s.locateFile?s.locateFile(E,m):m+E}var g,y,_;if(d){var S=Xt,I=Xt;p?m=I.dirname(m)+"/":m=__dirname+"/",g=(E,O)=>(E=kn(E)?new URL(E):I.normalize(E),S.readFileSync(E,O?void 0:"utf8")),_=E=>{var O=g(E,!0);return O.buffer||(O=new Uint8Array(O)),O},y=(E,O,G)=>{E=kn(E)?new URL(E):I.normalize(E),S.readFile(E,function(W,me){W?G(W):O(me.buffer)})},process.argv.length>1&&process.argv[1].replace(/\\/g,"/"),process.argv.slice(2),process.on("uncaughtException",function(E){if(!(E instanceof Jn))throw E}),process.on("unhandledRejection",function(E){throw E}),s.inspect=function(){return"[Emscripten Module object]"}}else(o||p)&&(p?m=self.location.href:typeof document<"u"&&document.currentScript&&(m=document.currentScript.src),r&&(m=r),m.indexOf("blob:")!==0?m=m.substr(0,m.replace(/[?#].*/,"").lastIndexOf("/")+1):m="",g=E=>{var O=new XMLHttpRequest;return O.open("GET",E,!1),O.send(null),O.responseText},p&&(_=E=>{var O=new XMLHttpRequest;return O.open("GET",E,!1),O.responseType="arraybuffer",O.send(null),new Uint8Array(O.response)}),y=(E,O,G)=>{var W=new XMLHttpRequest;W.open("GET",E,!0),W.responseType="arraybuffer",W.onload=()=>{if(W.status==200||W.status==0&&W.response){O(W.response);return}G()},W.onerror=G,W.send(null)});var T=s.print||console.log.bind(console),$=s.printErr||console.warn.bind(console);Object.assign(s,l),l=null,s.arguments&&s.arguments,s.thisProgram&&s.thisProgram,s.quit&&s.quit;var A;s.wasmBinary&&(A=s.wasmBinary),s.noExitRuntime,typeof WebAssembly!="object"&&Sn("no native wasm support detected");var F,C=!1,M=typeof TextDecoder<"u"?new TextDecoder("utf8"):void 0;function B(E,O,G){O>>>=0;for(var W=O+G,me=O;E[me]&&!(me>=W);)++me;if(me-O>16&&E.buffer&&M)return M.decode(E.subarray(O,me));for(var be="";O<me;){var ne=E[O++];if(!(ne&128)){be+=String.fromCharCode(ne);continue}var Q=E[O++]&63;if((ne&224)==192){be+=String.fromCharCode((ne&31)<<6|Q);continue}var xe=E[O++]&63;if((ne&240)==224?ne=(ne&15)<<12|Q<<6|xe:ne=(ne&7)<<18|Q<<12|xe<<6|E[O++]&63,ne<65536)be+=String.fromCharCode(ne);else{var rt=ne-65536;be+=String.fromCharCode(55296|rt>>10,56320|rt&1023)}}return be}function V(E,O){return E>>>=0,E?B(ue,E,O):""}function j(E,O,G,W){if(G>>>=0,!(W>0))return 0;for(var me=G,be=G+W-1,ne=0;ne<E.length;++ne){var Q=E.charCodeAt(ne);if(Q>=55296&&Q<=57343){var xe=E.charCodeAt(++ne);Q=65536+((Q&1023)<<10)|xe&1023}if(Q<=127){if(G>=be)break;O[G++>>>0]=Q}else if(Q<=2047){if(G+1>=be)break;O[G++>>>0]=192|Q>>6,O[G++>>>0]=128|Q&63}else if(Q<=65535){if(G+2>=be)break;O[G++>>>0]=224|Q>>12,O[G++>>>0]=128|Q>>6&63,O[G++>>>0]=128|Q&63}else{if(G+3>=be)break;O[G++>>>0]=240|Q>>18,O[G++>>>0]=128|Q>>12&63,O[G++>>>0]=128|Q>>6&63,O[G++>>>0]=128|Q&63}}return O[G>>>0]=0,G-me}function q(E,O,G){return j(E,ue,O,G)}var te,J,ue,Se;function se(E){te=E,s.HEAP8=J=new Int8Array(E),s.HEAP16=new Int16Array(E),s.HEAP32=new Int32Array(E),s.HEAPU8=ue=new Uint8Array(E),s.HEAPU16=new Uint16Array(E),s.HEAPU32=Se=new Uint32Array(E),s.HEAPF32=new Float32Array(E),s.HEAPF64=new Float64Array(E)}s.INITIAL_MEMORY;var Fe=[],We=[],Ye=[];function Rt(){if(s.preRun)for(typeof s.preRun=="function"&&(s.preRun=[s.preRun]);s.preRun.length;)Xn(s.preRun.shift());Fr(Fe)}function Oe(){Fr(We)}function Kn(){if(s.postRun)for(typeof s.postRun=="function"&&(s.postRun=[s.postRun]);s.postRun.length;)Ar(s.postRun.shift());Fr(Ye)}function Xn(E){Fe.unshift(E)}function Er(E){We.unshift(E)}function Ar(E){Ye.unshift(E)}var ke=0,Qt=null;function ys(E){ke++,s.monitorRunDependencies&&s.monitorRunDependencies(ke)}function bs(E){if(ke--,s.monitorRunDependencies&&s.monitorRunDependencies(ke),ke==0&&Qt){var O=Qt;Qt=null,O()}}function Sn(E){s.onAbort&&s.onAbort(E),E="Aborted("+E+")",$(E),C=!0,E+=". Build with -sASSERTIONS for more info.";var O=new WebAssembly.RuntimeError(E);throw u(O),O}var ws="data:application/octet-stream;base64,";function Nt(E){return E.startsWith(ws)}function kn(E){return E.startsWith("file://")}var Ce;Ce="tfjs-backend-wasm.wasm",Nt(Ce)||(Ce=f(Ce));function Dr(E){try{if(E==Ce&&A)return new Uint8Array(A);if(_)return _(E);throw"both async and sync fetching of the wasm failed"}catch(O){Sn(O)}}function _s(){if(!A&&(o||p)){if(typeof fetch=="function"&&!kn(Ce))return fetch(Ce,{credentials:"same-origin"}).then(function(E){if(!E.ok)throw"failed to load wasm binary file at '"+Ce+"'";return E.arrayBuffer()}).catch(function(){return Dr(Ce)});if(y)return new Promise(function(E,O){y(Ce,function(G){E(new Uint8Array(G))},O)})}return Promise.resolve().then(function(){return Dr(Ce)})}function Is(){var E={env:vs,wasi_snapshot_preview1:vs};function O(ne,Q){var xe=ne.exports;s.asm=xe,F=s.asm.memory,se(F.buffer),s.asm.__indirect_function_table,Er(s.asm.__wasm_call_ctors),bs()}ys();function G(ne){O(ne.instance)}function W(ne){return _s().then(function(Q){return WebAssembly.instantiate(Q,E)}).then(function(Q){return Q}).then(ne,function(Q){$("failed to asynchronously prepare wasm: "+Q),Sn(Q)})}function me(){return!A&&typeof WebAssembly.instantiateStreaming=="function"&&!Nt(Ce)&&!kn(Ce)&&!d&&typeof fetch=="function"?fetch(Ce,{credentials:"same-origin"}).then(function(ne){var Q=WebAssembly.instantiateStreaming(ne,E);return Q.then(G,function(xe){return $("wasm streaming compile failed: "+xe),$("falling back to ArrayBuffer instantiation"),W(G)})}):W(G)}if(s.instantiateWasm)try{var be=s.instantiateWasm(E,O);return be}catch(ne){$("Module.instantiateWasm callback failed with error: "+ne),u(ne)}return me().catch(u),{}}function Jn(E){this.name="ExitStatus",this.message="Program terminated with exit("+E+")",this.status=E}function Fr(E){for(;E.length>0;)E.shift()(s)}function Ns(){Sn("")}function Ss(){return 4294901760}function li(){return Ss()}function pi(E,O,G){ue.copyWithin(E>>>0,O>>>0,O+G>>>0)}function di(E){try{return F.grow(E-te.byteLength+65535>>>16),se(F.buffer),1}catch{}}function Mt(E){var O=ue.length;E=E>>>0;var G=Ss();if(E>G)return!1;let W=(xe,rt)=>xe+(rt-xe%rt)%rt;for(var me=1;me<=4;me*=2){var be=O*(1+.2/me);be=Math.min(be,E+100663296);var ne=Math.min(G,W(Math.max(E,be),65536)),Q=di(ne);if(Q)return!0}return!1}function vn(E){return 52}function mi(E,O,G,W,me){return 70}var hi=[null,[],[]];function Tn(E,O){var G=hi[E];O===0||O===10?((E===1?T:$)(B(G,0)),G.length=0):G.push(O)}function fi(E,O,G,W){for(var me=0,be=0;be<G;be++){var ne=Se[O>>>2],Q=Se[O+4>>>2];O+=8;for(var xe=0;xe<Q;xe++)Tn(E,ue[ne+xe>>>0]);me+=Q}return Se[W>>>2]=me,0}function Or(E){var O=s["_"+E];return O}function Yn(E,O){J.set(E,O>>>0)}function Ve(E,O,G,W,me){var be={string:Re=>{var en=0;if(Re!=null&&Re!==0){var Fs=(Re.length<<2)+1;en=Bt(Fs),q(Re,en,Fs)}return en},array:Re=>{var en=Bt(Re.length);return Yn(Re,en),en}};function ne(Re){return O==="string"?V(Re):O==="boolean"?!!Re:Re}var Q=Or(E),xe=[],rt=0;if(W)for(var Pt=0;Pt<W.length;Pt++){var As=be[G[Pt]];As?(rt===0&&(rt=Ts()),xe[Pt]=As(W[Pt])):xe[Pt]=W[Pt]}var Cr=Q.apply(null,xe);function Ds(Re){return rt!==0&&xs(rt),ne(Re)}return Cr=Ds(Cr),Cr}function ks(E,O,G,W){G=G||[];var me=G.every(ne=>ne==="number"||ne==="boolean"),be=O!=="string";return be&&me&&!W?Or(E):function(){return Ve(E,O,G,arguments)}}var vs={abort:Ns,emscripten_get_heap_max:li,emscripten_memcpy_big:pi,emscripten_resize_heap:Mt,fd_close:vn,fd_seek:mi,fd_write:fi};Is(),s.___wasm_call_ctors=function(){return(s.___wasm_call_ctors=s.asm.__wasm_call_ctors).apply(null,arguments)},s._init=function(){return(s._init=s.asm.init).apply(null,arguments)},s._init_with_threads_count=function(){return(s._init_with_threads_count=s.asm.init_with_threads_count).apply(null,arguments)},s._get_threads_count=function(){return(s._get_threads_count=s.asm.get_threads_count).apply(null,arguments)},s._register_tensor=function(){return(s._register_tensor=s.asm.register_tensor).apply(null,arguments)},s._dispose_data=function(){return(s._dispose_data=s.asm.dispose_data).apply(null,arguments)},s._dispose=function(){return(s._dispose=s.asm.dispose).apply(null,arguments)},s._Abs=function(){return(s._Abs=s.asm.Abs).apply(null,arguments)},s._Acos=function(){return(s._Acos=s.asm.Acos).apply(null,arguments)},s._Acosh=function(){return(s._Acosh=s.asm.Acosh).apply(null,arguments)},s._Add=function(){return(s._Add=s.asm.Add).apply(null,arguments)},s._AddN=function(){return(s._AddN=s.asm.AddN).apply(null,arguments)},s._All=function(){return(s._All=s.asm.All).apply(null,arguments)},s._Any=function(){return(s._Any=s.asm.Any).apply(null,arguments)},s._ArgMax=function(){return(s._ArgMax=s.asm.ArgMax).apply(null,arguments)},s._ArgMin=function(){return(s._ArgMin=s.asm.ArgMin).apply(null,arguments)},s._Asin=function(){return(s._Asin=s.asm.Asin).apply(null,arguments)},s._Asinh=function(){return(s._Asinh=s.asm.Asinh).apply(null,arguments)},s._Atan=function(){return(s._Atan=s.asm.Atan).apply(null,arguments)},s._Atan2=function(){return(s._Atan2=s.asm.Atan2).apply(null,arguments)},s._Atanh=function(){return(s._Atanh=s.asm.Atanh).apply(null,arguments)},s._AvgPool=function(){return(s._AvgPool=s.asm.AvgPool).apply(null,arguments)},s._AvgPool3D=function(){return(s._AvgPool3D=s.asm.AvgPool3D).apply(null,arguments)},s._AvgPool3DGrad=function(){return(s._AvgPool3DGrad=s.asm.AvgPool3DGrad).apply(null,arguments)},s._AvgPoolGrad=function(){return(s._AvgPoolGrad=s.asm.AvgPoolGrad).apply(null,arguments)},s._BatchMatMul=function(){return(s._BatchMatMul=s.asm.BatchMatMul).apply(null,arguments)},s._Bincount=function(){return(s._Bincount=s.asm.Bincount).apply(null,arguments)},s._BitwiseAnd=function(){return(s._BitwiseAnd=s.asm.BitwiseAnd).apply(null,arguments)},s._Ceil=function(){return(s._Ceil=s.asm.Ceil).apply(null,arguments)},s._ClipByValue=function(){return(s._ClipByValue=s.asm.ClipByValue).apply(null,arguments)},s._Conv2D=function(){return(s._Conv2D=s.asm.Conv2D).apply(null,arguments)},s._Conv2DBackpropInput=function(){return(s._Conv2DBackpropInput=s.asm.Conv2DBackpropInput).apply(null,arguments)},s._Conv3D=function(){return(s._Conv3D=s.asm.Conv3D).apply(null,arguments)},s._Conv3DBackpropFilterV2=function(){return(s._Conv3DBackpropFilterV2=s.asm.Conv3DBackpropFilterV2).apply(null,arguments)},s._Conv3DBackpropInputV2=function(){return(s._Conv3DBackpropInputV2=s.asm.Conv3DBackpropInputV2).apply(null,arguments)},s._Cos=function(){return(s._Cos=s.asm.Cos).apply(null,arguments)},s._Cosh=function(){return(s._Cosh=s.asm.Cosh).apply(null,arguments)},s._CropAndResize=function(){return(s._CropAndResize=s.asm.CropAndResize).apply(null,arguments)},s._Cumprod=function(){return(s._Cumprod=s.asm.Cumprod).apply(null,arguments)},s._Cumsum=function(){return(s._Cumsum=s.asm.Cumsum).apply(null,arguments)},s._DenseBincount=function(){return(s._DenseBincount=s.asm.DenseBincount).apply(null,arguments)},s._DepthToSpace=function(){return(s._DepthToSpace=s.asm.DepthToSpace).apply(null,arguments)},s._DepthwiseConv2dNative=function(){return(s._DepthwiseConv2dNative=s.asm.DepthwiseConv2dNative).apply(null,arguments)},s._Diag=function(){return(s._Diag=s.asm.Diag).apply(null,arguments)},s._Dilation2D=function(){return(s._Dilation2D=s.asm.Dilation2D).apply(null,arguments)},s._Dilation2DBackpropFilter=function(){return(s._Dilation2DBackpropFilter=s.asm.Dilation2DBackpropFilter).apply(null,arguments)},s._Dilation2DBackpropInput=function(){return(s._Dilation2DBackpropInput=s.asm.Dilation2DBackpropInput).apply(null,arguments)},s._Elu=function(){return(s._Elu=s.asm.Elu).apply(null,arguments)},s._EluGrad=function(){return(s._EluGrad=s.asm.EluGrad).apply(null,arguments)},s._Equal=function(){return(s._Equal=s.asm.Equal).apply(null,arguments)},s._Erf=function(){return(s._Erf=s.asm.Erf).apply(null,arguments)},s._Exp=function(){return(s._Exp=s.asm.Exp).apply(null,arguments)},s._Expm1=function(){return(s._Expm1=s.asm.Expm1).apply(null,arguments)},s._FlipLeftRight=function(){return(s._FlipLeftRight=s.asm.FlipLeftRight).apply(null,arguments)},s._Floor=function(){return(s._Floor=s.asm.Floor).apply(null,arguments)},s._FloorDiv=function(){return(s._FloorDiv=s.asm.FloorDiv).apply(null,arguments)},s._FusedBatchNorm=function(){return(s._FusedBatchNorm=s.asm.FusedBatchNorm).apply(null,arguments)},s._FusedConv2D=function(){return(s._FusedConv2D=s.asm.FusedConv2D).apply(null,arguments)},s._FusedDepthwiseConv2D=function(){return(s._FusedDepthwiseConv2D=s.asm.FusedDepthwiseConv2D).apply(null,arguments)},s._Gather=function(){return(s._Gather=s.asm.Gather).apply(null,arguments)},s._GatherNd=function(){return(s._GatherNd=s.asm.GatherNd).apply(null,arguments)},s._Greater=function(){return(s._Greater=s.asm.Greater).apply(null,arguments)},s._GreaterEqual=function(){return(s._GreaterEqual=s.asm.GreaterEqual).apply(null,arguments)},s._IsFinite=function(){return(s._IsFinite=s.asm.IsFinite).apply(null,arguments)},s._IsInf=function(){return(s._IsInf=s.asm.IsInf).apply(null,arguments)},s._IsNan=function(){return(s._IsNan=s.asm.IsNan).apply(null,arguments)},s._LRN=function(){return(s._LRN=s.asm.LRN).apply(null,arguments)},s._LRNGrad=function(){return(s._LRNGrad=s.asm.LRNGrad).apply(null,arguments)},s._LeakyRelu=function(){return(s._LeakyRelu=s.asm.LeakyRelu).apply(null,arguments)},s._Less=function(){return(s._Less=s.asm.Less).apply(null,arguments)},s._LessEqual=function(){return(s._LessEqual=s.asm.LessEqual).apply(null,arguments)},s._LinSpace=function(){return(s._LinSpace=s.asm.LinSpace).apply(null,arguments)},s._Log=function(){return(s._Log=s.asm.Log).apply(null,arguments)},s._Log1p=function(){return(s._Log1p=s.asm.Log1p).apply(null,arguments)},s._LogicalAnd=function(){return(s._LogicalAnd=s.asm.LogicalAnd).apply(null,arguments)},s._LogicalNot=function(){return(s._LogicalNot=s.asm.LogicalNot).apply(null,arguments)},s._LogicalOr=function(){return(s._LogicalOr=s.asm.LogicalOr).apply(null,arguments)},s._LogicalXor=function(){return(s._LogicalXor=s.asm.LogicalXor).apply(null,arguments)},s._Max=function(){return(s._Max=s.asm.Max).apply(null,arguments)},s._MaxPool=function(){return(s._MaxPool=s.asm.MaxPool).apply(null,arguments)},s._MaxPool3D=function(){return(s._MaxPool3D=s.asm.MaxPool3D).apply(null,arguments)},s._MaxPool3DGrad=function(){return(s._MaxPool3DGrad=s.asm.MaxPool3DGrad).apply(null,arguments)},s._MaxPoolGrad=function(){return(s._MaxPoolGrad=s.asm.MaxPoolGrad).apply(null,arguments)},s._MaxPoolWithArgmax=function(){return(s._MaxPoolWithArgmax=s.asm.MaxPoolWithArgmax).apply(null,arguments)},s._Maximum=function(){return(s._Maximum=s.asm.Maximum).apply(null,arguments)},s._Mean=function(){return(s._Mean=s.asm.Mean).apply(null,arguments)},s._Min=function(){return(s._Min=s.asm.Min).apply(null,arguments)},s._Minimum=function(){return(s._Minimum=s.asm.Minimum).apply(null,arguments)},s._MirrorPad=function(){return(s._MirrorPad=s.asm.MirrorPad).apply(null,arguments)},s._Mod=function(){return(s._Mod=s.asm.Mod).apply(null,arguments)},s._Multinomial=function(){return(s._Multinomial=s.asm.Multinomial).apply(null,arguments)},s._Multiply=function(){return(s._Multiply=s.asm.Multiply).apply(null,arguments)},s._Neg=function(){return(s._Neg=s.asm.Neg).apply(null,arguments)},s._NonMaxSuppressionV3=function(){return(s._NonMaxSuppressionV3=s.asm.NonMaxSuppressionV3).apply(null,arguments)},s._NonMaxSuppressionV4=function(){return(s._NonMaxSuppressionV4=s.asm.NonMaxSuppressionV4).apply(null,arguments)},s._NonMaxSuppressionV5=function(){return(s._NonMaxSuppressionV5=s.asm.NonMaxSuppressionV5).apply(null,arguments)},s._NotEqual=function(){return(s._NotEqual=s.asm.NotEqual).apply(null,arguments)},s._OneHot=function(){return(s._OneHot=s.asm.OneHot).apply(null,arguments)},s._PadV2=function(){return(s._PadV2=s.asm.PadV2).apply(null,arguments)},s._Pow=function(){return(s._Pow=s.asm.Pow).apply(null,arguments)},s._Prelu=function(){return(s._Prelu=s.asm.Prelu).apply(null,arguments)},s._Prod=function(){return(s._Prod=s.asm.Prod).apply(null,arguments)},s._RealDiv=function(){return(s._RealDiv=s.asm.RealDiv).apply(null,arguments)},s._Reciprocal=function(){return(s._Reciprocal=s.asm.Reciprocal).apply(null,arguments)},s._Relu=function(){return(s._Relu=s.asm.Relu).apply(null,arguments)},s._Relu6=function(){return(s._Relu6=s.asm.Relu6).apply(null,arguments)},s._ResizeBilinear=function(){return(s._ResizeBilinear=s.asm.ResizeBilinear).apply(null,arguments)},s._ResizeBilinearGrad=function(){return(s._ResizeBilinearGrad=s.asm.ResizeBilinearGrad).apply(null,arguments)},s._ResizeNearestNeighbor=function(){return(s._ResizeNearestNeighbor=s.asm.ResizeNearestNeighbor).apply(null,arguments)},s._ResizeNearestNeighborGrad=function(){return(s._ResizeNearestNeighborGrad=s.asm.ResizeNearestNeighborGrad).apply(null,arguments)},s._Reverse=function(){return(s._Reverse=s.asm.Reverse).apply(null,arguments)},s._RotateWithOffset=function(){return(s._RotateWithOffset=s.asm.RotateWithOffset).apply(null,arguments)},s._Round=function(){return(s._Round=s.asm.Round).apply(null,arguments)},s._Rsqrt=function(){return(s._Rsqrt=s.asm.Rsqrt).apply(null,arguments)},s._ScatterNd=function(){return(s._ScatterNd=s.asm.ScatterNd).apply(null,arguments)},s._SearchSorted=function(){return(s._SearchSorted=s.asm.SearchSorted).apply(null,arguments)},s._SelectV2=function(){return(s._SelectV2=s.asm.SelectV2).apply(null,arguments)},s._Selu=function(){return(s._Selu=s.asm.Selu).apply(null,arguments)},s._Sigmoid=function(){return(s._Sigmoid=s.asm.Sigmoid).apply(null,arguments)},s._Sign=function(){return(s._Sign=s.asm.Sign).apply(null,arguments)},s._Sin=function(){return(s._Sin=s.asm.Sin).apply(null,arguments)},s._Sinh=function(){return(s._Sinh=s.asm.Sinh).apply(null,arguments)},s._Softmax=function(){return(s._Softmax=s.asm.Softmax).apply(null,arguments)},s._Softplus=function(){return(s._Softplus=s.asm.Softplus).apply(null,arguments)},s._SparseFillEmptyRows=function(){return(s._SparseFillEmptyRows=s.asm.SparseFillEmptyRows).apply(null,arguments)},s._SparseReshape=function(){return(s._SparseReshape=s.asm.SparseReshape).apply(null,arguments)},s._SparseSegmentReduction=function(){return(s._SparseSegmentReduction=s.asm.SparseSegmentReduction).apply(null,arguments)},s._SparseToDense=function(){return(s._SparseToDense=s.asm.SparseToDense).apply(null,arguments)},s._Sqrt=function(){return(s._Sqrt=s.asm.Sqrt).apply(null,arguments)},s._Square=function(){return(s._Square=s.asm.Square).apply(null,arguments)},s._SquaredDifference=function(){return(s._SquaredDifference=s.asm.SquaredDifference).apply(null,arguments)},s._Step=function(){return(s._Step=s.asm.Step).apply(null,arguments)},s._StridedSlice=function(){return(s._StridedSlice=s.asm.StridedSlice).apply(null,arguments)},s._Sub=function(){return(s._Sub=s.asm.Sub).apply(null,arguments)},s._Sum=function(){return(s._Sum=s.asm.Sum).apply(null,arguments)},s._Tan=function(){return(s._Tan=s.asm.Tan).apply(null,arguments)},s._Tanh=function(){return(s._Tanh=s.asm.Tanh).apply(null,arguments)},s._TensorScatterUpdate=function(){return(s._TensorScatterUpdate=s.asm.TensorScatterUpdate).apply(null,arguments)},s._Tile=function(){return(s._Tile=s.asm.Tile).apply(null,arguments)},s._TopK=function(){return(s._TopK=s.asm.TopK).apply(null,arguments)},s._Transform=function(){return(s._Transform=s.asm.Transform).apply(null,arguments)},s._Transpose=function(){return(s._Transpose=s.asm.Transpose).apply(null,arguments)},s.__FusedMatMul=function(){return(s.__FusedMatMul=s.asm._FusedMatMul).apply(null,arguments)},s._malloc=function(){return(s._malloc=s.asm.malloc).apply(null,arguments)},s._free=function(){return(s._free=s.asm.free).apply(null,arguments)},s.___errno_location=function(){return(s.___errno_location=s.asm.__errno_location).apply(null,arguments)};var Ts=s.stackSave=function(){return(Ts=s.stackSave=s.asm.stackSave).apply(null,arguments)},xs=s.stackRestore=function(){return(xs=s.stackRestore=s.asm.stackRestore).apply(null,arguments)},Bt=s.stackAlloc=function(){return(Bt=s.stackAlloc=s.asm.stackAlloc).apply(null,arguments)};s.dynCall_iijjiiii=function(){return(s.dynCall_iijjiiii=s.asm.dynCall_iijjiiii).apply(null,arguments)},s.dynCall_jiji=function(){return(s.dynCall_jiji=s.asm.dynCall_jiji).apply(null,arguments)},s.cwrap=ks;var Zn;Qt=function E(){Zn||$s(),Zn||(Qt=E)};function $s(E){if(ke>0||(Rt(),ke>0))return;function O(){Zn||(Zn=!0,s.calledRun=!0,!C&&(Oe(),i(s),s.onRuntimeInitialized&&s.onRuntimeInitialized(),Kn()))}s.setStatus?(s.setStatus("Running..."),setTimeout(function(){setTimeout(function(){s.setStatus("")},1),O()},1)):O()}if(s.preInit)for(typeof s.preInit=="function"&&(s.preInit=[s.preInit]);s.preInit.length>0;)s.preInit.pop()();$s();var xn;c&&(xn={uncaughtException:process.listeners("uncaughtException").filter(function(E){return!c.uncaughtException.indexOf(E)>-1}),unhandledRejection:process.listeners("unhandledRejection").filter(function(E){return!c.unhandledRejection.indexOf(E)>-1})});var $n;if(typeof a<"u")$n=a;else if(typeof WasmBackendModuleThreadedSimd<"u")$n=WasmBackendModuleThreadedSimd;else throw new Error("Could not find wasm module in post.js");if(xn){var Es=$n._dispose;$n._dispose=function(){Es(),xn.uncaughtException.forEach(function(E){process.removeListener("uncaughtException",E)}),xn.unhandledRejection.forEach(function(E){process.removeListener("unhandledRejection",E)})}}return a.ready}})();n.exports=t})(qd);var Vx=qd.exports,Kd=Ha(Vx),Ux=Object.freeze({__proto__:null,default:Kd});/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Xd=Gd||zx,Hx=Kd||Ux;class jx extends Si{constructor(e){super(),this.wasm=e,this.dataIdNextNumber=1,this.wasm.tfjs.initWithThreadsCount(Zx),this.wasm.tfjs.getThreadsCount(),this.dataIdMap=new $m(this,Wh())}write(e,t,r){const a={id:this.dataIdNextNumber++};return this.move(a,e,t,r,1),a}numDataIds(){return this.dataIdMap.numDataIds()}async time(e){const t=Cn();return e(),{kernelMs:Cn()-t}}move(e,t,r,a,s){const i=this.dataIdNextNumber++;if(a==="string"){const o=t;this.dataIdMap.set(e,{id:i,stringBytes:o,shape:r,dtype:a,memoryOffset:null,refCount:s});return}const u=P(r),c=u*nr(a),l=this.wasm._malloc(c)>>>0;this.dataIdMap.set(e,{id:i,memoryOffset:l,shape:r,dtype:a,refCount:s}),this.wasm.tfjs.registerTensor(i,u,l),t!=null&&this.wasm.HEAPU8.set(new Uint8Array(t.buffer,t.byteOffset,c),l)}async read(e){return this.readSync(e)}readSync(e,t,r){const{memoryOffset:a,dtype:s,shape:i,stringBytes:u}=this.dataIdMap.get(e);if(s==="string")return(t==null||t===0)&&(r==null||r>=u.length)?u:u.slice(t,r);t=t||0,r=r||P(i);const c=nr(s),l=this.wasm.HEAPU8.slice(a+t*c,a+r*c);return Kx(l.buffer,s)}disposeData(e,t=!1){if(this.dataIdMap.has(e)){const r=this.dataIdMap.get(e);if(r.refCount--,!t&&r.refCount>0)return!1;this.wasm._free(r.memoryOffset),this.wasm.tfjs.disposeData(r.id),this.dataIdMap.delete(e)}return!0}refCount(e){return this.dataIdMap.has(e)?this.dataIdMap.get(e).refCount:0}incRef(e){const t=this.dataIdMap.get(e);t!=null&&t.refCount++}floatPrecision(){return 32}getMemoryOffset(e){return this.dataIdMap.get(e).memoryOffset}dispose(){this.wasm.tfjs.dispose(),"PThread"in this.wasm&&this.wasm.PThread.terminateAllThreads(),this.wasm=null}memory(){return{unreliable:!1}}makeOutput(e,t,r,a){let s;if(r==null)s=this.write(a??null,e,t);else{const i=this.dataIdNextNumber++;s={id:i},this.dataIdMap.set(s,{id:i,memoryOffset:r,shape:e,dtype:t,refCount:1});const u=P(e);this.wasm.tfjs.registerTensor(i,u,r)}return{dataId:s,shape:e,dtype:t}}typedArrayFromHeap({shape:e,dtype:t,dataId:r}){const a=this.wasm.HEAPU8.buffer,{memoryOffset:s}=this.dataIdMap.get(r),i=P(e);switch(t){case"float32":return new Float32Array(a,s,i);case"int32":return new Int32Array(a,s,i);case"bool":return new Uint8Array(a,s,i);default:throw new Error(`Unknown dtype ${t}`)}}}function Gx(n){return(e,t)=>(Nh(n,{credentials:"same-origin"}).then(r=>{r.ok||e.env.a(`failed to load wasm binary file at '${n}'`),r.arrayBuffer().then(a=>{WebAssembly.instantiate(a,e).then(s=>{t(s.instance,s.module)})})}),{})}function Jd(n,e,t){let r="tfjs-backend-wasm.wasm";return n&&e?r="tfjs-backend-wasm-threaded-simd.wasm":n&&(r="tfjs-backend-wasm-simd.wasm"),Tr!=null&&Tr[r]!=null?Tr[r]:t+r}async function qx(){const[n,e]=await Promise.all([Z().getAsync("WASM_HAS_SIMD_SUPPORT"),Z().getAsync("WASM_HAS_MULTITHREAD_SUPPORT")]);return new Promise((t,r)=>{const a={};a.locateFile=(u,c)=>{if(u.endsWith(".worker.js")){const l=Wx.replace(/\n/g,"\\n"),o=new Blob([l],{type:"application/javascript"});return URL.createObjectURL(o)}return u.endsWith(".wasm")?Jd(n,e,vr??c):c+u},Yd&&(a.instantiateWasm=Gx(Jd(n,e,vr??"")));let s=!1;a.onAbort=()=>{if(s||ps)return;ps=!0,r({message:"Make sure the server can serve the `.wasm` file relative to the bundled js file. For more details see https://github.com/tensorflow/tfjs/blob/master/tfjs-backend-wasm/README.md#using-bundlers"})};let i;e&&n&&Jx==null?(a.mainScriptUrlOrBlob=new Blob(["var WasmBackendModuleThreadedSimd = "+Xd.toString()],{type:"text/javascript"}),i=Xd(a)):i=Hx(a),i.then(u=>{s=!0,ps=!1;const c=null;u.tfjs={init:u.cwrap("init",null,[]),initWithThreadsCount:u.cwrap("init_with_threads_count",null,["number"]),getThreadsCount:u.cwrap("get_threads_count","number",[]),registerTensor:u.cwrap("register_tensor",null,["number","number","number"]),disposeData:u.cwrap("dispose_data",c,["number"]),dispose:u.cwrap("dispose",c,[])},t({wasm:u})}).catch(r)})}function Kx(n,e){switch(e){case"float32":return new Float32Array(n);case"int32":return new Int32Array(n);case"bool":return new Uint8Array(n);default:throw new Error(`Unknown dtype ${e}`)}}const Xx=["tfjs-backend-wasm.wasm","tfjs-backend-wasm-simd.wasm","tfjs-backend-wasm-threaded-simd.wasm"];let Jx=null,vr=null,Tr={},ps=!1,Yd=!1;function Yx(n,e=!1){if(ps)throw new Error("The WASM backend was already initialized. Make sure you call `setWasmPaths()` before you call `tf.setBackend()` or `tf.ready()`");if(typeof n=="string")vr=n;else{Tr=n;const t=Xx.filter(r=>Tr[r]==null);if(t.length>0)throw new Error(`There were no entries found for the following binaries: ${t.join(",")}. Please either call setWasmPaths with a map providing a path for each binary, or with a string indicating the directory where all the binaries can be found.`)}Yd=e}let Zx=-1;/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */jh("wasm",async()=>{const{wasm:n}=await qx();return new jx(n)},2);/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */Z().registerFlag("KEEP_INTERMEDIATE_TENSORS",()=>!1,n=>{n&&console.warn("Keep intermediate tensors is ON. This will print the values of all intermediate tensors during model inference. Not all models support this mode. For details, check e2e/benchmarks/ model_config.js. This significantly impacts performance.")});/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 * =============================================================================
 */var Xe;(function(n){n[n.DT_INVALID=0]="DT_INVALID",n[n.DT_FLOAT=1]="DT_FLOAT",n[n.DT_DOUBLE=2]="DT_DOUBLE",n[n.DT_INT32=3]="DT_INT32",n[n.DT_UINT8=4]="DT_UINT8",n[n.DT_INT16=5]="DT_INT16",n[n.DT_INT8=6]="DT_INT8",n[n.DT_STRING=7]="DT_STRING",n[n.DT_COMPLEX64=8]="DT_COMPLEX64",n[n.DT_INT64=9]="DT_INT64",n[n.DT_BOOL=10]="DT_BOOL",n[n.DT_QINT8=11]="DT_QINT8",n[n.DT_QUINT8=12]="DT_QUINT8",n[n.DT_QINT32=13]="DT_QINT32",n[n.DT_BFLOAT16=14]="DT_BFLOAT16",n[n.DT_QINT16=15]="DT_QINT16",n[n.DT_QUINT16=16]="DT_QUINT16",n[n.DT_UINT16=17]="DT_UINT16",n[n.DT_COMPLEX128=18]="DT_COMPLEX128",n[n.DT_HALF=19]="DT_HALF",n[n.DT_RESOURCE=20]="DT_RESOURCE",n[n.DT_VARIANT=21]="DT_VARIANT",n[n.DT_UINT32=22]="DT_UINT32",n[n.DT_UINT64=23]="DT_UINT64",n[n.DT_FLOAT_REF=101]="DT_FLOAT_REF",n[n.DT_DOUBLE_REF=102]="DT_DOUBLE_REF",n[n.DT_INT32_REF=103]="DT_INT32_REF",n[n.DT_UINT8_REF=104]="DT_UINT8_REF",n[n.DT_INT16_REF=105]="DT_INT16_REF",n[n.DT_INT8_REF=106]="DT_INT8_REF",n[n.DT_STRING_REF=107]="DT_STRING_REF",n[n.DT_COMPLEX64_REF=108]="DT_COMPLEX64_REF",n[n.DT_INT64_REF=109]="DT_INT64_REF",n[n.DT_BOOL_REF=110]="DT_BOOL_REF",n[n.DT_QINT8_REF=111]="DT_QINT8_REF",n[n.DT_QUINT8_REF=112]="DT_QUINT8_REF",n[n.DT_QINT32_REF=113]="DT_QINT32_REF",n[n.DT_BFLOAT16_REF=114]="DT_BFLOAT16_REF",n[n.DT_QINT16_REF=115]="DT_QINT16_REF",n[n.DT_QUINT16_REF=116]="DT_QUINT16_REF",n[n.DT_UINT16_REF=117]="DT_UINT16_REF",n[n.DT_COMPLEX128_REF=118]="DT_COMPLEX128_REF",n[n.DT_HALF_REF=119]="DT_HALF_REF",n[n.DT_RESOURCE_REF=120]="DT_RESOURCE_REF",n[n.DT_VARIANT_REF=121]="DT_VARIANT_REF",n[n.DT_UINT32_REF=122]="DT_UINT32_REF",n[n.DT_UINT64_REF=123]="DT_UINT64_REF"})(Xe||(Xe={}));var Zd;(function(n){(function(e){e[e.LEGACY=0]="LEGACY",e[e.V1=1]="V1",e[e.V2=2]="V2"})(n.CheckpointFormatVersion||(n.CheckpointFormatVersion={}))})(Zd||(Zd={}));/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Qx={};function Qd(n){return Qx[n]}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function h(n,e,t,r,a){const s=e.inputParams[n];if(s&&s.inputIndexStart!==void 0){const u=s.inputIndexStart,c=s.inputIndexEnd===0?void 0:s.inputIndexEnd===void 0?u+1:s.inputIndexEnd,l=u<0?e.inputNames.length+u:u;if(s.type==="tensor")return Ae(e.inputNames[l],t,r,a);if(s.type==="tensors"){const d=e.inputs.slice(u,c);return e.inputNames.slice(u,c).filter((f,g)=>{var y;return((y=d[g])===null||y===void 0?void 0:y.op)!=="NoOp"}).map(f=>Ae(f,t,r,a))}const o=Ae(e.inputNames[l],t,r,a),p=o.dataSync();return s.type==="number"?p[0]:Ws(o.shape,p)}const i=e.attrParams[n];return i&&i.value}function Ae(n,e,t,r){const[a,s]=Je(n,t);if(r!=null){const u=r.getHashTableHandleByName(a);if(u!=null)return u}const i=t.currentContextIds.find(u=>!!e[ds(a,u)]);return i!==void 0?e[ds(a,i)][s]:void 0}function em(n,e,t){return e[ds(n,t.currentContextId)]}function Ot(n,e){const[t,r,a]=Je(n,e);return[ds(t,e&&e.currentContextId),r,a]}function ds(n,e){return e?`${n}-${e}`:n}function Je(n,e){if(n==="")return["",0,void 0];const t=e!=null&&e.parseNodeNameCache!=null;if(t){const s=e.parseNodeNameCache.get(n);if(s!=null)return s}const r=n.split(":");let a;if(r.length===1)a=[n,0,void 0];else{const s=r[0],i=r.length===3?r[1]:void 0,u=Number(r[r.length-1]);a=[s,u,i]}return t&&e.parseNodeNameCache.set(n,a),a}function ms(n,e,t){let r=h("pad",n,e,t);if(r==="explicit"){r=h("explicitPaddings",n,e,t);const a=[[0,0],[0,0],[0,0],[0,0]];for(let s=0;s<4;s++)a[s][0]=r[s*2],a[s][1]=r[s*2+1];return a}return r}function Ct(n){return n.kept?n:Gt(n)}/**
 * @license
 * Copyright 2023 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */var e$=Object.freeze({__proto__:null,json:[{tfOpName:"Add",category:"arithmetic",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"AddV2",category:"arithmetic",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"AddN",category:"arithmetic",inputs:[{start:0,end:0,name:"tensors",type:"tensors"}]},{tfOpName:"BiasAdd",category:"arithmetic",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0},{tfName:"data_format",name:"dataFormat",type:"string",notSupported:!0}]},{tfOpName:"Sub",category:"arithmetic",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"RealDiv",category:"arithmetic",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Div",category:"arithmetic",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"DivNoNan",category:"arithmetic",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"FloorDiv",category:"arithmetic",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Mul",category:"arithmetic",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Maximum",category:"arithmetic",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Minimum",category:"arithmetic",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Pow",category:"arithmetic",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"SquaredDifference",category:"arithmetic",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Mod",category:"arithmetic",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"FloorMod",category:"arithmetic",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]}]});/**
 * @license
 * Copyright 2023 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */var t$=Object.freeze({__proto__:null,json:[{tfOpName:"Abs",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Acos",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Asin",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Atan",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Atan2",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"y",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Ceil",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"ClipByValue",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"clipValueMin",type:"number"},{start:2,name:"clipValueMax",type:"number"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Complex",category:"basic_math",inputs:[{start:0,name:"real",type:"tensor"},{start:1,name:"imag",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"ComplexAbs",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Cos",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Cosh",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Elu",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Exp",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Floor",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Log",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Imag",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0},{tfName:"Tout",name:"outputType",type:"dtype",notSupported:!0}]},{tfOpName:"Neg",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Real",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0},{tfName:"Tout",name:"outputType",type:"dtype",notSupported:!0}]},{tfOpName:"Prelu",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"alpha",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Relu",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Relu6",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Selu",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Sigmoid",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Sin",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Sinh",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Sqrt",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Rsqrt",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Square",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Tan",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Tanh",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Sign",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Round",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Expm1",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Log1p",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Reciprocal",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Softplus",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Asinh",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Acosh",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Atanh",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Erf",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"LeakyRelu",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"alpha",name:"alpha",type:"number",defaultValue:.2},{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"IsNan",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"IsFinite",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"IsInf",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]}]});/**
 * @license
 * Copyright 2023 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */var n$=Object.freeze({__proto__:null,json:[{tfOpName:"EmptyTensorList",category:"control",inputs:[{start:0,name:"elementShape",type:"shape"},{start:1,name:"maxNumElements",type:"number"}],attrs:[{tfName:"element_dtype",name:"elementDType",type:"dtype"}]},{tfOpName:"LoopCond",category:"control",inputs:[{start:0,name:"pred",type:"tensor"}]},{tfOpName:"Switch",category:"control",inputs:[{start:0,name:"data",type:"tensor"},{start:1,name:"pred",type:"tensor"}]},{tfOpName:"Merge",category:"control",inputs:[{start:0,end:0,name:"tensors",type:"tensors"}]},{tfOpName:"Enter",category:"control",inputs:[{start:0,name:"tensor",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0},{tfName:"frame_name",name:"frameName",type:"string"},{tfName:"is_constant",name:"isConstant",type:"bool"}]},{tfOpName:"Exit",category:"control",inputs:[{start:0,name:"tensor",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"NextIteration",category:"control",inputs:[{start:0,name:"tensor",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"TensorArrayV3",category:"control",inputs:[{start:0,name:"size",type:"number"}],attrs:[{tfName:"dtype",name:"dtype",type:"dtype"},{tfName:"element_shape",name:"elementShape",type:"shape"},{tfName:"dynamic_size",name:"dynamicSize",type:"bool"},{tfName:"clear_after_read",name:"clearAfterRead",type:"bool"},{tfName:"identical_element_shapes",name:"identicalElementShapes",type:"bool"},{tfName:"tensor_array_name",name:"name",type:"string"}]},{tfOpName:"TensorArrayWriteV3",category:"control",inputs:[{start:0,name:"tensorArrayId",type:"tensor"},{start:1,name:"index",type:"number"},{start:2,name:"tensor",type:"tensor"},{start:3,name:"flowIn",type:"number"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"TensorArrayReadV3",category:"control",inputs:[{start:0,name:"tensorArrayId",type:"tensor"},{start:1,name:"index",type:"number"},{start:2,name:"flowIn",type:"number"}],attrs:[{tfName:"dtype",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"TensorArrayGatherV3",category:"control",inputs:[{start:0,name:"tensorArrayId",type:"tensor"},{start:1,name:"indices",type:"number[]"},{start:2,name:"flowIn",type:"number"}],attrs:[{tfName:"dtype",name:"dtype",type:"dtype"},{tfName:"element_shape",name:"elementShape",type:"shape"}]},{tfOpName:"TensorArrayScatterV3",category:"control",inputs:[{start:0,name:"tensorArrayId",type:"tensor"},{start:1,name:"indices",type:"number[]"},{start:2,name:"tensor",type:"tensor"},{start:3,name:"flowIn",type:"number"}],attrs:[{tfName:"T",name:"dtype",type:"dtype"}]},{tfOpName:"TensorArrayConcatV3",category:"control",inputs:[{start:0,name:"tensorArrayId",type:"tensor"},{start:1,name:"flowIn",type:"number"}],attrs:[{tfName:"dtype",name:"dtype",type:"dtype"},{tfName:"element_shape_except0",name:"elementShapeExcept0",type:"shape",notSupported:!0}]},{tfOpName:"TensorArraySplitV3",category:"control",inputs:[{start:0,name:"tensorArrayId",type:"tensor"},{start:1,name:"tensor",type:"tensor"},{start:2,name:"lengths",type:"number[]"},{start:3,name:"flowIn",type:"number"}],attrs:[{tfName:"T",name:"dtype",type:"dtype"}]},{tfOpName:"TensorArraySizeV3",category:"control",inputs:[{start:0,name:"tensorArrayId",type:"tensor"},{start:1,name:"flowIn",type:"number"}]},{tfOpName:"TensorArrayCloseV3",category:"control",inputs:[{start:0,name:"tensorArrayId",type:"tensor"}]},{tfOpName:"StatelessIf",category:"control",inputs:[{start:0,name:"cond",type:"tensor"},{start:1,end:0,name:"args",type:"tensors"}],attrs:[{tfName:"then_branch",name:"thenBranch",type:"func"},{tfName:"else_branch",name:"elseBranch",type:"func"}]},{tfOpName:"If",category:"control",inputs:[{start:0,name:"cond",type:"tensor"},{start:1,end:0,name:"args",type:"tensors"}],attrs:[{tfName:"then_branch",name:"thenBranch",type:"func"},{tfName:"else_branch",name:"elseBranch",type:"func"}]},{tfOpName:"StatelessWhile",category:"control",inputs:[{start:0,end:0,name:"args",type:"tensors"}],attrs:[{tfName:"cond",name:"cond",type:"func"},{tfName:"body",name:"body",type:"func"}]},{tfOpName:"While",category:"control",inputs:[{start:0,end:0,name:"args",type:"tensors"}],attrs:[{tfName:"cond",name:"cond",type:"func"},{tfName:"body",name:"body",type:"func"}]},{tfOpName:"TensorListScatter",category:"control",inputs:[{start:0,name:"tensor",type:"tensor"},{start:1,name:"indices",type:"number[]"},{start:2,name:"elementShape",type:"shape"}],attrs:[{tfName:"element_dtype",name:"elementDType",type:"dtype"}]},{tfOpName:"TensorListScatterV2",category:"control",inputs:[{start:0,name:"tensor",type:"tensor"},{start:1,name:"indices",type:"number[]"},{start:2,name:"elementShape",type:"shape"},{start:3,name:"numElements",type:"number"}],attrs:[{tfName:"element_dtype",name:"elementDType",type:"dtype"}]},{tfOpName:"TensorListGather",category:"control",inputs:[{start:0,name:"tensorListId",type:"tensor"},{start:1,name:"indices",type:"number[]"},{start:2,name:"elementShape",type:"shape"}],attrs:[{tfName:"element_dtype",name:"elementDType",type:"dtype"}]},{tfOpName:"TensorListGetItem",category:"control",inputs:[{start:0,name:"tensorListId",type:"tensor"},{start:1,name:"index",type:"number"},{start:2,name:"elementShape",type:"shape"}],attrs:[{tfName:"element_dtype",name:"elementDType",type:"dtype"}]},{tfOpName:"TensorListSetItem",category:"control",inputs:[{start:0,name:"tensorListId",type:"tensor"},{start:1,name:"index",type:"number"},{start:2,name:"tensor",type:"tensor"}],attrs:[{tfName:"element_dtype",name:"elementDType",type:"dtype"}]},{tfOpName:"TensorListReserve",category:"control",inputs:[{start:0,name:"elementShape",type:"shape"},{start:1,name:"numElements",type:"number"}],attrs:[{tfName:"element_dtype",name:"elementDType",type:"dtype"}]},{tfOpName:"TensorListFromTensor",category:"control",inputs:[{start:0,name:"tensor",type:"tensor"},{start:1,name:"elementShape",type:"shape"}],attrs:[{tfName:"element_dtype",name:"elementDType",type:"dtype"}]},{tfOpName:"TensorListStack",category:"control",inputs:[{start:0,name:"tensorListId",type:"tensor"},{start:1,name:"elementShape",type:"shape"}],attrs:[{tfName:"element_dtype",name:"elementDType",type:"dtype"},{tfName:"num_elements",name:"numElements",type:"dtype"}]},{tfOpName:"TensorListSplit",category:"control",inputs:[{start:0,name:"tensor",type:"tensor"},{start:1,name:"elementShape",type:"shape"},{start:2,name:"lengths",type:"number[]"}],attrs:[{tfName:"element_dtype",name:"elementDType",type:"dtype"}]},{tfOpName:"TensorListConcat",category:"control",inputs:[{start:0,name:"tensorListId",type:"tensor"}],attrs:[{tfName:"element_shape",name:"elementShape",type:"shape"},{tfName:"element_dtype",name:"elementDType",type:"dtype"}]},{tfOpName:"TensorListConcatV2",category:"control",inputs:[{start:0,name:"tensorListId",type:"tensor"}],attrs:[{tfName:"element_shape",name:"elementShape",type:"shape"},{tfName:"element_dtype",name:"elementDType",type:"dtype"}]},{tfOpName:"TensorListPopBack",category:"control",inputs:[{start:0,name:"tensorListId",type:"tensor"},{start:1,name:"elementShape",type:"shape"}],attrs:[{tfName:"element_dtype",name:"elementDType",type:"dtype"}]},{tfOpName:"TensorListPushBack",category:"control",inputs:[{start:0,name:"tensorListId",type:"tensor"},{start:1,name:"tensor",type:"tensor"}],attrs:[{tfName:"element_dtype",name:"elementDType",type:"dtype"}]},{tfOpName:"TensorListLength",category:"control",inputs:[{start:0,name:"tensorListId",type:"tensor"}]},{tfOpName:"TensorListResize",category:"control",inputs:[{start:0,name:"tensorListId",type:"tensor"},{start:1,name:"size",type:"number"}]}]});/**
 * @license
 * Copyright 2023 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */var r$=Object.freeze({__proto__:null,json:[{tfOpName:"AvgPool",category:"convolution",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"strides",name:"strides",type:"number[]"},{tfName:"padding",name:"pad",type:"string"},{tfName:"data_format",name:"dataFormat",type:"string",notSupported:!0},{tfName:"ksize",name:"kernelSize",type:"number[]"},{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"MaxPool",category:"convolution",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"strides",name:"strides",type:"number[]"},{tfName:"padding",name:"pad",type:"string"},{tfName:"data_format",name:"dataFormat",type:"string",notSupported:!0},{tfName:"ksize",name:"kernelSize",type:"number[]"},{tfName:"explicit_paddings",name:"explicitPaddings",type:"number[]",defaultValue:[],notSupported:!0},{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"MaxPoolWithArgmax",category:"convolution",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"strides",name:"strides",type:"number[]"},{tfName:"padding",name:"pad",type:"string"},{tfName:"ksize",name:"kernelSize",type:"number[]"},{tfName:"include_batch_in_index",name:"includeBatchInIndex",type:"bool"},{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"AvgPool3D",category:"convolution",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"strides",name:"strides",type:"number[]"},{tfName:"padding",name:"pad",type:"string"},{tfName:"data_format",name:"dataFormat",type:"string",notSupported:!0},{tfName:"ksize",name:"kernelSize",type:"number[]"},{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"MaxPool3D",category:"convolution",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"strides",name:"strides",type:"number[]"},{tfName:"padding",name:"pad",type:"string"},{tfName:"data_format",name:"dataFormat",type:"string",notSupported:!0},{tfName:"ksize",name:"kernelSize",type:"number[]"},{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Conv1D",category:"convolution",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"filter",type:"tensor"}],attrs:[{tfName:"stride",name:"stride",type:"number"},{tfName:"padding",name:"pad",type:"string"},{tfName:"data_format",name:"dataFormat",type:"string",defaultValue:"NWC"},{tfName:"T",name:"dtype",type:"dtype",notSupported:!0},{tfName:"dilation",name:"dilation",type:"number",defaultValue:1}]},{tfOpName:"Conv2D",category:"convolution",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"filter",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0},{tfName:"strides",name:"strides",type:"number[]"},{tfName:"padding",name:"pad",type:"string"},{tfName:"useCudnnOnGpu",name:"useCudnnOnGpu",type:"bool"},{tfName:"data_format",name:"dataFormat",type:"string",defaultValue:"NHWC"},{tfName:"explicit_paddings",name:"explicitPaddings",type:"number[]",defaultValue:[]},{tfName:"dilations",name:"dilations",type:"number[]"}]},{tfOpName:"_FusedConv2D",category:"convolution",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"filter",type:"tensor"},{start:2,end:0,name:"args",type:"tensors"}],attrs:[{tfName:"num_args",name:"numArgs",type:"number"},{tfName:"T",name:"dtype",type:"dtype",notSupported:!0},{tfName:"strides",name:"strides",type:"number[]"},{tfName:"padding",name:"pad",type:"string"},{tfName:"explicit_paddings",name:"explicitPaddings",type:"number[]",defaultValue:[]},{tfName:"use_cudnn_on_gpu",name:"useCudnnOnGpu",type:"bool",defaultValue:!0},{tfName:"data_format",name:"dataFormat",type:"string",defaultValue:"NHWC"},{tfName:"dilations",name:"dilations",type:"number[]",defaultValue:[1,1,1,1]},{tfName:"fused_ops",name:"fusedOps",type:"string[]",defaultValue:[]},{tfName:"epsilon",name:"epsilon",type:"number",defaultValue:1e-4},{tfName:"leakyrelu_alpha",name:"leakyreluAlpha",type:"number",defaultValue:.2}]},{tfOpName:"Conv2DBackpropInput",category:"convolution",inputs:[{start:2,name:"x",type:"tensor"},{start:1,name:"filter",type:"tensor"},{start:0,name:"outputShape",type:"number[]"}],attrs:[{tfName:"strides",name:"strides",type:"number[]"},{tfName:"padding",name:"pad",type:"string"},{tfName:"data_format",name:"dataFormat",type:"string",notSupported:!0},{tfName:"explicit_paddings",name:"explicitPaddings",type:"number[]",defaultValue:[]},{tfName:"dilations",name:"dilations",type:"number[]",notSupported:!0}]},{tfOpName:"DepthwiseConv2d",category:"convolution",inputs:[{start:0,name:"input",type:"tensor"},{start:1,name:"filter",type:"tensor"}],attrs:[{tfName:"strides",name:"strides",type:"number[]"},{tfName:"padding",name:"pad",type:"string"},{tfName:"data_format",name:"dataFormat",type:"string",defaultValue:"NHWC"},{tfName:"explicit_paddings",name:"explicitPaddings",type:"number[]",defaultValue:[]},{tfName:"dilations",name:"dilations",type:"number[]"}]},{tfOpName:"DepthwiseConv2dNative",category:"convolution",inputs:[{start:0,name:"input",type:"tensor"},{start:1,name:"filter",type:"tensor"}],attrs:[{tfName:"strides",name:"strides",type:"number[]"},{tfName:"padding",name:"pad",type:"string"},{tfName:"data_format",name:"dataFormat",type:"string",defaultValue:"NHWC"},{tfName:"explicit_paddings",name:"explicitPaddings",type:"number[]",defaultValue:[]},{tfName:"dilations",name:"dilations",type:"number[]"}]},{tfOpName:"FusedDepthwiseConv2dNative",category:"convolution",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"filter",type:"tensor"},{start:2,end:0,name:"args",type:"tensors"}],attrs:[{tfName:"num_args",name:"numArgs",type:"number"},{tfName:"T",name:"dtype",type:"dtype",notSupported:!0},{tfName:"strides",name:"strides",type:"number[]"},{tfName:"padding",name:"pad",type:"string"},{tfName:"data_format",name:"dataFormat",type:"string",defaultValue:"NHWC"},{tfName:"dilations",name:"dilations",type:"number[]",defaultValue:[1,1,1,1]},{tfName:"fused_ops",name:"fusedOps",type:"string[]",defaultValue:[]},{tfName:"explicit_paddings",name:"explicitPaddings",type:"number[]",defaultValue:[]}]},{tfOpName:"Conv3D",category:"convolution",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"filter",type:"tensor"}],attrs:[{tfName:"strides",name:"strides",type:"number[]"},{tfName:"padding",name:"pad",type:"string"},{tfName:"data_format",name:"dataFormat",type:"string",defaultValue:"NHWC"},{tfName:"dilations",name:"dilations",type:"number[]"}]},{tfOpName:"Dilation2D",category:"convolution",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"filter",type:"tensor"}],attrs:[{tfName:"strides",name:"strides",type:"number[]"},{tfName:"rates",name:"dilations",type:"number[]"},{tfName:"padding",name:"pad",type:"string"}]}]});/**
 * @license
 * Copyright 2023 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */var s$=Object.freeze({__proto__:null,json:[{tfOpName:"Fill",category:"creation",inputs:[{start:0,name:"shape",type:"number[]"},{start:1,name:"value",type:"number"}],attrs:[{tfName:"T",name:"dtype",type:"dtype"}]},{tfOpName:"LinSpace",category:"creation",inputs:[{start:0,name:"start",type:"number"},{start:1,name:"stop",type:"number"},{start:2,name:"num",type:"number"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"OneHot",category:"creation",inputs:[{start:0,name:"indices",type:"tensor"},{start:1,name:"depth",type:"number"},{start:2,name:"onValue",type:"number",defaultValue:1},{start:3,name:"offValue",type:"number",defaultValue:0}],attrs:[{tfName:"axis",name:"axis",type:"number",notSupported:!0},{tfName:"T",name:"dtype",type:"dtype"}]},{tfOpName:"Ones",category:"creation",inputs:[{start:0,name:"shape",type:"number[]"}],attrs:[{tfName:"T",name:"dtype",type:"dtype"}]},{tfOpName:"OnesLike",category:"creation",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"dtype",name:"dtype",type:"dtype"}]},{tfOpName:"RandomStandardNormal",category:"creation",inputs:[{start:0,name:"shape",type:"number[]"}],attrs:[{tfName:"seed",name:"seed",type:"number",defaultValue:0},{tfName:"seed2",name:"seed2",type:"number",defaultValue:0,notSupported:!0},{tfName:"dtype",name:"dtype",type:"dtype"},{tfName:"T",name:"T",type:"number",notSupported:!0}]},{tfOpName:"RandomUniform",category:"creation",inputs:[{start:0,name:"shape",type:"number[]"}],attrs:[{tfName:"minval",name:"minval",type:"number",defaultValue:0},{tfName:"maxval",name:"maxval",type:"number",defaultValue:1},{tfName:"dtype",name:"dtype",type:"dtype"},{tfName:"seed",name:"seed",type:"number",defaultValue:0},{tfName:"seed2",name:"seed2",type:"number",defaultValue:0,notSupported:!0},{tfName:"T",name:"T",type:"number",notSupported:!0}]},{tfOpName:"RandomUniformInt",category:"creation",inputs:[{start:0,name:"shape",type:"number[]"}],attrs:[{tfName:"minval",name:"minval",type:"number"},{tfName:"maxval",name:"maxval",type:"number"},{tfName:"seed",name:"seed",type:"number",defaultValue:0},{tfName:"seed2",name:"seed2",type:"number",defaultValue:0,notSupported:!0}]},{tfOpName:"Range",category:"creation",inputs:[{start:0,name:"start",type:"number"},{start:1,name:"stop",type:"number"},{start:2,name:"step",type:"number",defaultValue:0}],attrs:[{tfName:"Tidx",name:"dtype",type:"dtype"}]},{tfOpName:"TruncatedNormal",category:"creation",inputs:[{start:0,name:"shape",type:"number[]"}],attrs:[{tfName:"means",name:"mean",type:"number",defaultValue:0},{tfName:"stddev",name:"stdDev",type:"number",defaultValue:1},{tfName:"seed",name:"seed",type:"number"},{tfName:"seed2",name:"seed2",type:"number",defaultValue:0,notSupported:!0},{tfName:"dtype",name:"dtype",type:"dtype"},{tfName:"T",name:"T",type:"number",notSupported:!0}]},{tfOpName:"Zeros",category:"creation",inputs:[{start:0,name:"shape",type:"number[]"}],attrs:[{tfName:"T",name:"dtype",type:"dtype"}]},{tfOpName:"ZerosLike",category:"creation",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype"}]},{tfOpName:"Multinomial",category:"creation",inputs:[{start:0,name:"logits",type:"tensor"},{start:1,name:"numSamples",type:"number"}],attrs:[{tfName:"seed",name:"seed",type:"number"},{tfName:"seed2",name:"seed2",type:"number"},{tfName:"T",name:"dtype",type:"dtype"},{tfName:"output_dtype",name:"output_dtype",type:"dtype"}]}]});/**
 * @license
 * Copyright 2023 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */var a$=Object.freeze({__proto__:null,json:[{tfOpName:"NonMaxSuppressionV2",category:"dynamic",inputs:[{start:0,name:"boxes",type:"tensor"},{start:1,name:"scores",type:"tensor"},{start:2,name:"maxOutputSize",type:"number"},{start:3,name:"iouThreshold",type:"number"}]},{tfOpName:"NonMaxSuppressionV3",category:"dynamic",inputs:[{start:0,name:"boxes",type:"tensor"},{start:1,name:"scores",type:"tensor"},{start:2,name:"maxOutputSize",type:"number"},{start:3,name:"iouThreshold",type:"number"},{start:4,name:"scoreThreshold",type:"number"}]},{tfOpName:"NonMaxSuppressionV4",category:"dynamic",inputs:[{start:0,name:"boxes",type:"tensor"},{start:1,name:"scores",type:"tensor"},{start:2,name:"maxOutputSize",type:"number"},{start:3,name:"iouThreshold",type:"number"},{start:4,name:"scoreThreshold",type:"number"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0},{tfName:"T_threshold",name:"threshold",type:"dtype",notSupported:!0},{tfName:"pad_to_max_output_size",name:"padToMaxOutputSize",type:"bool"}]},{tfOpName:"NonMaxSuppressionV5",category:"dynamic",inputs:[{start:0,name:"boxes",type:"tensor"},{start:1,name:"scores",type:"tensor"},{start:2,name:"maxOutputSize",type:"number"},{start:3,name:"iouThreshold",type:"number"},{start:4,name:"scoreThreshold",type:"number"},{start:5,name:"softNmsSigma",type:"number"}]},{tfOpName:"Where",category:"dynamic",inputs:[{start:0,name:"condition",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"ListDiff",category:"dynamic",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"y",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]}]});/**
 * @license
 * Copyright 2023 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */var o$=Object.freeze({__proto__:null,json:[{tfOpName:"LowerBound",category:"evaluation",inputs:[{start:0,name:"sortedSequence",type:"tensor"},{start:1,name:"values",type:"tensor"}]},{tfOpName:"TopKV2",category:"evaluation",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"k",type:"number"}],attrs:[{tfName:"sorted",name:"sorted",type:"bool"}]},{tfOpName:"UpperBound",category:"evaluation",inputs:[{start:0,name:"sortedSequence",type:"tensor"},{start:1,name:"values",type:"tensor"}]},{tfOpName:"Unique",category:"evaluation",inputs:[{start:0,name:"x",type:"tensor"}]},{tfOpName:"UniqueV2",category:"evaluation",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"axis",type:"number"}]}]});/**
 * @license
 * Copyright 2023 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */var i$=Object.freeze({__proto__:null,json:[{tfOpName:"PlaceholderWithDefault",category:"graph",inputs:[{start:0,name:"default",type:"tensor"}],attrs:[{tfName:"shape",name:"shape",type:"shape"},{tfName:"dtype",name:"dtype",type:"dtype"}]},{tfOpName:"Placeholder",category:"graph",attrs:[{tfName:"shape",name:"shape",type:"shape"},{tfName:"dtype",name:"dtype",type:"dtype"}]},{tfOpName:"Const",category:"graph"},{tfOpName:"Identity",category:"graph",inputs:[{start:0,name:"x",type:"tensor"}]},{tfOpName:"IdentityN",category:"graph",inputs:[{start:0,end:0,name:"x",type:"tensors"}]},{tfOpName:"Snapshot",category:"graph",inputs:[{start:0,name:"x",type:"tensor"}]},{tfOpName:"Rank",category:"graph",inputs:[{start:0,name:"x",type:"tensor"}]},{tfOpName:"Size",category:"graph",inputs:[{start:0,name:"x",type:"tensor"}]},{tfOpName:"Shape",category:"graph",inputs:[{start:0,name:"x",type:"tensor"}]},{tfOpName:"ShapeN",category:"graph",inputs:[{start:0,end:0,name:"x",type:"tensors"}]},{tfOpName:"Print",category:"graph",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"data",type:"tensors"}],attrs:[{tfName:"message",name:"message",type:"string"},{tfName:"first_n",name:"firstN",type:"number",notSupported:!0},{tfName:"summarize",name:"summarize",type:"number",defaultValue:3}]},{tfOpName:"NoOp",category:"graph",inputs:[]},{tfOpName:"StopGradient",category:"graph",inputs:[{start:0,name:"x",type:"tensor"}]},{tfOpName:"FakeQuantWithMinMaxVars",category:"graph",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"min",name:"min",type:"number"},{tfName:"max",name:"max",type:"number"}]}]});/**
 * @license
 * Copyright 2023 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */var u$=Object.freeze({__proto__:null,json:[{tfOpName:"HashTable",category:"hash_table",inputs:[],attrs:[{tfName:"shared_name",name:"sharedName",type:"string"},{tfName:"use_node_name_sharing",name:"useNodeNameSharing",type:"bool"},{tfName:"key_dtype",name:"keyDType",type:"dtype"},{tfName:"value_dtype",name:"valueDType",type:"dtype"}]},{tfOpName:"HashTableV2",category:"hash_table",inputs:[],attrs:[{tfName:"shared_name",name:"sharedName",type:"string"},{tfName:"use_node_name_sharing",name:"useNodeNameSharing",type:"bool"},{tfName:"key_dtype",name:"keyDType",type:"dtype"},{tfName:"value_dtype",name:"valueDType",type:"dtype"}]},{tfOpName:"LookupTableImport",category:"hash_table",inputs:[{start:0,name:"tableHandle",type:"tensor"},{start:1,name:"keys",type:"tensor"},{start:2,name:"values",type:"tensor"}],attrs:[{tfName:"Tin",name:"tIn",type:"dtype",notSupported:!0},{tfName:"Tout",name:"tOut",type:"dtype",notSupported:!0}]},{tfOpName:"LookupTableImportV2",category:"hash_table",inputs:[{start:0,name:"tableHandle",type:"tensor"},{start:1,name:"keys",type:"tensor"},{start:2,name:"values",type:"tensor"}],attrs:[{tfName:"Tin",name:"tIn",type:"dtype",notSupported:!0},{tfName:"Tout",name:"tOut",type:"dtype",notSupported:!0}]},{tfOpName:"LookupTableFind",category:"hash_table",inputs:[{start:0,name:"tableHandle",type:"tensor"},{start:1,name:"keys",type:"tensor"},{start:2,name:"defaultValue",type:"tensor"}],attrs:[{tfName:"Tin",name:"tIn",type:"dtype",notSupported:!0},{tfName:"Tout",name:"tOut",type:"dtype",notSupported:!0}]},{tfOpName:"LookupTableFindV2",category:"hash_table",inputs:[{start:0,name:"tableHandle",type:"tensor"},{start:1,name:"keys",type:"tensor"},{start:2,name:"defaultValue",type:"tensor"}],attrs:[{tfName:"Tin",name:"tIn",type:"dtype",notSupported:!0},{tfName:"Tout",name:"tOut",type:"dtype",notSupported:!0}]},{tfOpName:"LookupTableSize",category:"hash_table",inputs:[{start:0,name:"tableHandle",type:"tensor"}]},{tfOpName:"LookupTableSizeV2",category:"hash_table",inputs:[{start:0,name:"tableHandle",type:"tensor"}]},{tfOpName:"InitializeTable",category:"hash_table",inputs:[{start:0,name:"tableHandle",type:"tensor"},{start:1,name:"keys",type:"tensor"},{start:2,name:"values",type:"tensor"}]},{tfOpName:"InitializeTableV2",category:"hash_table",inputs:[{start:0,name:"tableHandle",type:"tensor"},{start:1,name:"keys",type:"tensor"},{start:2,name:"values",type:"tensor"}]}]});/**
 * @license
 * Copyright 2023 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */var c$=Object.freeze({__proto__:null,json:[{tfOpName:"ResizeBilinear",category:"image",inputs:[{start:0,name:"images",type:"tensor"},{start:1,name:"size",type:"number[]"}],attrs:[{tfName:"align_corners",name:"alignCorners",type:"bool"},{tfName:"half_pixel_centers",name:"halfPixelCenters",type:"bool"},{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"ResizeNearestNeighbor",category:"image",inputs:[{start:0,name:"images",type:"tensor"},{start:1,name:"size",type:"number[]"}],attrs:[{tfName:"align_corners",name:"alignCorners",type:"bool"},{tfName:"half_pixel_centers",name:"halfPixelCenters",type:"bool"},{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"CropAndResize",category:"image",inputs:[{start:0,name:"image",type:"tensor"},{start:1,name:"boxes",type:"tensor"},{start:2,name:"boxInd",type:"tensor"},{start:3,name:"cropSize",type:"number[]"}],attrs:[{tfName:"method",name:"method",type:"string"},{tfName:"extrapolation_value",name:"extrapolationValue",type:"number"}]},{tfOpName:"ImageProjectiveTransformV3",category:"image",inputs:[{start:0,name:"images",type:"tensor"},{start:1,name:"transforms",type:"tensor"},{start:2,name:"outputShape",type:"number[]"},{start:3,name:"fillValue",type:"number"}],attrs:[{tfName:"interpolation",name:"interpolation",type:"string"},{tfName:"fill_mode",name:"fillMode",type:"string"}]}]});/**
 * @license
 * Copyright 2023 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */var l$=Object.freeze({__proto__:null,json:[{tfOpName:"Equal",category:"logical",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"NotEqual",category:"logical",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Greater",category:"logical",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"GreaterEqual",category:"logical",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Less",category:"logical",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"LessEqual",category:"logical",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"LogicalAnd",category:"logical",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"LogicalNot",category:"logical",inputs:[{start:0,name:"a",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"LogicalOr",category:"logical",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Select",category:"logical",inputs:[{start:0,name:"condition",type:"tensor"},{start:1,name:"a",type:"tensor"},{start:2,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"SelectV2",category:"logical",inputs:[{start:0,name:"condition",type:"tensor"},{start:1,name:"a",type:"tensor"},{start:2,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"BitwiseAnd",category:"logical",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"y",type:"tensor"}]}]});/**
 * @license
 * Copyright 2023 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */var p$=Object.freeze({__proto__:null,json:[{tfOpName:"_FusedMatMul",category:"matrices",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"},{start:2,end:0,name:"args",type:"tensors"}],attrs:[{tfName:"num_args",name:"numArgs",type:"number"},{tfName:"fused_ops",name:"fusedOps",type:"string[]",defaultValue:[]},{tfName:"epsilon",name:"epsilon",type:"number",defaultValue:1e-4},{tfName:"transpose_a",name:"transposeA",type:"bool",defaultValue:!1},{tfName:"transpose_b",name:"transposeB",type:"bool",defaultValue:!1},{tfName:"leakyrelu_alpha",name:"leakyreluAlpha",type:"number",defaultValue:.2},{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"MatMul",category:"matrices",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"transpose_a",name:"transposeA",type:"bool",defaultValue:!1},{tfName:"transpose_b",name:"transposeB",type:"bool",defaultValue:!1},{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"BatchMatMul",category:"matrices",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"adj_x",name:"transposeA",type:"bool",defaultValue:!1},{tfName:"adj_y",name:"transposeB",type:"bool",defaultValue:!1},{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"BatchMatMulV2",category:"matrices",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"adj_x",name:"transposeA",type:"bool",defaultValue:!1},{tfName:"adj_y",name:"transposeB",type:"bool",defaultValue:!1},{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Transpose",category:"matrices",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"perm",type:"number[]"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Einsum",category:"matrices",inputs:[{start:0,end:0,name:"tensors",type:"tensors"}],attrs:[{tfName:"equation",name:"equation",type:"string"},{tfName:"N",name:"n",type:"number",defaultValue:2},{tfName:"T",name:"dtype",type:"dtype"}]},{tfOpName:"MatrixBandPart",category:"matrices",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"numLower",type:"tensor"},{start:1,name:"numUpper",type:"tensor"}]}]});/**
 * @license
 * Copyright 2023 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */var d$=Object.freeze({__proto__:null,json:[{tfOpName:"EuclideanNorm",category:"normalization",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"axis",type:"number[]"}],attrs:[{tfName:"keep_dims",name:"keepDims",type:"bool",defaultValue:!1}]},{tfOpName:"FusedBatchNorm",category:"normalization",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"scale",type:"tensor"},{start:2,name:"offset",type:"tensor"},{start:3,name:"mean",type:"tensor"},{start:4,name:"variance",type:"tensor"}],attrs:[{tfName:"epsilon",name:"epsilon",type:"number",defaultValue:.001},{tfName:"data_format",name:"dataFormat",type:"string",notSupported:!0}]},{tfOpName:"FusedBatchNormV2",category:"normalization",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"scale",type:"tensor"},{start:2,name:"offset",type:"tensor"},{start:3,name:"mean",type:"tensor"},{start:4,name:"variance",type:"tensor"}],attrs:[{tfName:"epsilon",name:"epsilon",type:"number",defaultValue:.001},{tfName:"data_format",name:"dataFormat",type:"string",notSupported:!0}]},{tfOpName:"FusedBatchNormV3",category:"normalization",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"scale",type:"tensor"},{start:2,name:"offset",type:"tensor"},{start:3,name:"mean",type:"tensor"},{start:4,name:"variance",type:"tensor"}],attrs:[{tfName:"epsilon",name:"epsilon",type:"number",defaultValue:.001},{tfName:"data_format",name:"dataFormat",type:"string",notSupported:!0}]},{tfOpName:"LRN",category:"normalization",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"depth_radius",name:"radius",type:"number",defaultValue:5},{tfName:"bias",name:"bias",type:"number",defaultValue:1},{tfName:"alpha",name:"alpha",type:"number",defaultValue:1},{tfName:"beta",name:"beta",type:"number",defaultValue:.5}]},{tfOpName:"Softmax",category:"normalization",inputs:[{start:0,name:"x",type:"tensor"}]},{tfOpName:"LogSoftmax",category:"normalization",inputs:[{start:0,name:"x",type:"tensor"}]}]});/**
 * @license
 * Copyright 2023 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */var m$=Object.freeze({__proto__:null,json:[{tfOpName:"Bincount",category:"reduction",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"size",type:"number"},{start:2,name:"weights",type:"tensor"}]},{tfOpName:"DenseBincount",category:"reduction",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"size",type:"number"},{start:2,name:"weights",type:"tensor"}],attrs:[{tfName:"binary_output",name:"binaryOutput",type:"bool"}]},{tfOpName:"Max",category:"reduction",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"axis",type:"number[]"}],attrs:[{tfName:"keep_dims",name:"keepDims",type:"bool"}]},{tfOpName:"Mean",category:"reduction",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"axis",type:"number[]"}],attrs:[{tfName:"keep_dims",name:"keepDims",type:"bool"}]},{tfOpName:"Min",category:"reduction",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"axis",type:"number[]"}],attrs:[{tfName:"keep_dims",name:"keepDims",type:"bool"}]},{tfOpName:"Sum",category:"reduction",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"axis",type:"number[]"}],attrs:[{tfName:"keep_dims",name:"keepDims",type:"bool"}]},{tfOpName:"All",category:"reduction",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"axis",type:"number[]"}],attrs:[{tfName:"keep_dims",name:"keepDims",type:"bool"}]},{tfOpName:"Any",category:"reduction",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"axis",type:"number[]"}],attrs:[{tfName:"keep_dims",name:"keepDims",type:"bool"}]},{tfOpName:"ArgMax",category:"reduction",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"axis",type:"number"}]},{tfOpName:"ArgMin",category:"reduction",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"axis",type:"number"}]},{tfOpName:"Prod",category:"reduction",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"axis",type:"number[]"}],attrs:[{tfName:"keep_dims",name:"keepDims",type:"bool"},{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Cumprod",category:"reduction",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"axis",type:"number"}],attrs:[{tfName:"exclusive",name:"exclusive",type:"bool"},{tfName:"reverse",name:"reverse",type:"bool"}]},{tfOpName:"Cumsum",category:"reduction",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"axis",type:"number"}],attrs:[{tfName:"exclusive",name:"exclusive",type:"bool"},{tfName:"reverse",name:"reverse",type:"bool"}]}]});/**
 * @license
 * Copyright 2023 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */var h$=Object.freeze({__proto__:null,json:[{tfOpName:"ConcatV2",category:"slice_join",inputs:[{start:0,end:-1,name:"tensors",type:"tensors"},{start:-1,name:"axis",type:"number"}],attrs:[{tfName:"N",name:"n",type:"number",defaultValue:2}]},{tfOpName:"Concat",category:"slice_join",inputs:[{start:1,end:0,name:"tensors",type:"tensors"},{start:0,name:"axis",type:"number"}],attrs:[{tfName:"N",name:"n",type:"number",defaultValue:2}]},{tfOpName:"GatherV2",category:"slice_join",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"indices",type:"tensor"},{start:2,name:"axis",type:"number",defaultValue:0}],attrs:[{tfName:"batch_dims",name:"batchDims",type:"number",defaultValue:0}]},{tfOpName:"Gather",category:"slice_join",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"indices",type:"tensor"}],attrs:[{tfName:"validate_indices",name:"validateIndices",type:"bool",notSupported:!0}]},{tfOpName:"Reverse",category:"slice_join",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"dims",type:"bool[]"}]},{tfOpName:"ReverseV2",category:"slice_join",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"axis",type:"number[]"}]},{tfOpName:"Slice",category:"slice_join",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"begin",type:"number[]"},{start:2,name:"size",type:"number[]"}]},{tfOpName:"StridedSlice",category:"slice_join",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"begin",type:"number[]"},{start:2,name:"end",type:"number[]"},{start:3,name:"strides",type:"number[]"}],attrs:[{tfName:"begin_mask",name:"beginMask",type:"number",defaultValue:0},{tfName:"end_mask",name:"endMask",type:"number",defaultValue:0},{tfName:"new_axis_mask",name:"newAxisMask",type:"number",defaultValue:0},{tfName:"ellipsis_mask",name:"ellipsisMask",type:"number",defaultValue:0},{tfName:"shrink_axis_mask",name:"shrinkAxisMask",type:"number",defaultValue:0}]},{tfOpName:"Pack",category:"slice_join",inputs:[{start:0,end:0,name:"tensors",type:"tensors"}],attrs:[{tfName:"axis",name:"axis",type:"number",defaultValue:0}]},{tfOpName:"Unpack",category:"slice_join",inputs:[{start:0,name:"tensor",type:"tensor"}],attrs:[{tfName:"axis",name:"axis",type:"number",defaultValue:0},{tfName:"num",name:"num",type:"number",defaultValue:0,notSupported:!0}]},{tfOpName:"Tile",category:"slice_join",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"reps",type:"number[]"}]},{tfOpName:"Split",category:"slice_join",inputs:[{start:0,name:"axis",type:"number",defaultValue:0},{start:1,name:"x",type:"tensor"}],attrs:[{tfName:"num_split",name:"numOrSizeSplits",type:"number",defaultValue:1}]},{tfOpName:"SplitV",category:"slice_join",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"numOrSizeSplits",type:"number[]"},{start:2,name:"axis",type:"number",defaultValue:0}]},{tfOpName:"ScatterNd",category:"slice_join",inputs:[{start:0,name:"indices",type:"tensor"},{start:1,name:"values",type:"tensor"},{start:2,name:"shape",type:"number[]"}]},{tfOpName:"GatherNd",category:"slice_join",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"indices",type:"tensor"}]},{tfOpName:"SparseToDense",category:"slice_join",inputs:[{start:0,name:"sparseIndices",type:"tensor"},{start:1,name:"outputShape",type:"number[]"},{start:2,name:"sparseValues",type:"tensor"},{start:3,name:"defaultValue",type:"tensor"}],attrs:[{tfName:"validate_indices",name:"validateIndices",type:"bool",defaultValue:!1,notSupported:!0}]},{tfOpName:"TensorScatterUpdate",category:"slice_join",inputs:[{start:0,name:"tensor",type:"tensor"},{start:1,name:"indices",type:"tensor"},{start:2,name:"values",type:"tensor"}]}]});/**
 * @license
 * Copyright 2023 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */var f$=Object.freeze({__proto__:null,json:[{tfOpName:"SparseFillEmptyRows",category:"sparse",inputs:[{start:0,name:"indices",type:"tensor"},{start:1,name:"values",type:"tensor"},{start:2,name:"denseShape",type:"tensor"},{start:3,name:"defaultValue",type:"tensor"}]},{tfOpName:"SparseReshape",category:"sparse",inputs:[{start:0,name:"inputIndices",type:"tensor"},{start:1,name:"inputShape",type:"tensor"},{start:2,name:"newShape",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"SparseSegmentMean",category:"sparse",inputs:[{start:0,name:"data",type:"tensor"},{start:1,name:"indices",type:"tensor"},{start:2,name:"segmentIds",type:"tensor"}]},{tfOpName:"SparseSegmentSum",category:"sparse",inputs:[{start:0,name:"data",type:"tensor"},{start:1,name:"indices",type:"tensor"},{start:2,name:"segmentIds",type:"tensor"}]}]});/**
 * @license
 * Copyright 2023 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */var g$=Object.freeze({__proto__:null,json:[{tfOpName:"FFT",category:"spectral",inputs:[{start:0,name:"x",type:"tensor"}]},{tfOpName:"IFFT",category:"spectral",inputs:[{start:0,name:"x",type:"tensor"}]},{tfOpName:"RFFT",category:"spectral",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"fft_length",type:"number",notSupported:!0}]},{tfOpName:"IRFFT",category:"spectral",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"fft_length",type:"number",notSupported:!0}]}]});/**
 * @license
 * Copyright 2023 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */var y$=Object.freeze({__proto__:null,json:[{tfOpName:"StaticRegexReplace",category:"string",inputs:[{start:0,name:"input",type:"tensor"}],attrs:[{tfName:"pattern",name:"pattern",type:"string"},{tfName:"rewrite",name:"rewrite",type:"string"},{tfName:"replace_global",name:"replaceGlobal",type:"bool"}]},{tfOpName:"StringNGrams",category:"string",inputs:[{start:0,name:"data",type:"tensor"},{start:1,name:"dataSplits",type:"tensor"}],attrs:[{tfName:"separator",name:"separator",type:"string"},{tfName:"ngram_widths",name:"nGramWidths",type:"number[]"},{tfName:"left_pad",name:"leftPad",type:"string"},{tfName:"right_pad",name:"rightPad",type:"string"},{tfName:"pad_width",name:"padWidth",type:"number"},{tfName:"preserve_short_sequences",name:"preserveShortSequences",type:"bool"}],outputs:["ngrams","ngrams_splits"]},{tfOpName:"StringSplit",category:"string",inputs:[{start:0,name:"input",type:"tensor"},{start:1,name:"delimiter",type:"tensor"}],attrs:[{tfName:"skip_empty",name:"skipEmpty",type:"bool"}],outputs:["indices","values","shape"]},{tfOpName:"StringToHashBucketFast",category:"string",inputs:[{start:0,name:"input",type:"tensor"}],attrs:[{tfName:"num_buckets",name:"numBuckets",type:"number"}]}]});/**
 * @license
 * Copyright 2023 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */var b$=Object.freeze({__proto__:null,json:[{tfOpName:"Cast",category:"transformation",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"SrcT",name:"sdtype",type:"dtype",notSupported:!0},{tfName:"DstT",name:"dtype",type:"dtype"}]},{tfOpName:"ExpandDims",category:"transformation",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"axis",type:"number"}]},{tfOpName:"MirrorPad",category:"transformation",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"padding",type:"number[]"}],attrs:[{tfName:"mode",name:"mode",type:"string"}]},{tfOpName:"Pad",category:"transformation",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"padding",type:"number[]"}],attrs:[{tfName:"constant_value",name:"constantValue",type:"number",defaultValue:0}]},{tfOpName:"PadV2",category:"transformation",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"padding",type:"number[]"},{start:2,name:"constantValue",type:"number",defaultValue:0}]},{tfOpName:"Reshape",category:"transformation",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"shape",type:"number[]"}]},{tfOpName:"EnsureShape",category:"transformation",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"shape",type:"number[]"}]},{tfOpName:"Squeeze",category:"transformation",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"axis",tfDeprecatedName:"squeeze_dims",name:"axis",type:"number[]"}]},{tfOpName:"SpaceToBatchND",category:"transformation",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"blockShape",type:"number[]"},{start:2,name:"paddings",type:"number[]"}]},{tfOpName:"BatchToSpaceND",category:"transformation",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"blockShape",type:"number[]"},{start:2,name:"crops",type:"number[]"}]},{tfOpName:"DepthToSpace",category:"transformation",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"block_size",name:"blockSize",type:"number"},{tfName:"data_format",name:"dataFormat",type:"string"}]},{tfOpName:"BroadcastTo",category:"transformation",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"shape",type:"number[]"}],attrs:[]},{tfOpName:"BroadcastArgs",category:"transformation",inputs:[{start:0,name:"s0",type:"tensor"},{start:1,name:"s1",type:"tensor"}],attrs:[]}]});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */class tm{static get Instance(){return this._instance||(this._instance=new this)}constructor(){const e=[e$,t$,n$,r$,s$,a$,o$,i$,u$,c$,l$,p$,d$,m$,h$,f$,g$,y$,b$],t=[].concat(...e.map(r=>r.json));this.opMappers=t.reduce((r,a)=>(r[a.tfOpName]=a,r),{})}transformGraph(e,t={}){const r=e.node,a=[],s=[],i=[],u=r.reduce((g,y)=>(g[y.name]=this.mapNode(y),y.op.startsWith("Placeholder")?a.push(g[y.name]):y.op==="Const"?s.push(g[y.name]):(y.input==null||y.input.length===0)&&i.push(g[y.name]),g),{});let c=[];const l=[];let o={},p={};t!=null&&(o=this.mapSignatureEntries(t.inputs),p=this.mapSignatureEntries(t.outputs));const d=Object.keys(u);d.forEach(g=>{const y=u[g];y.inputNames.forEach((_,S)=>{const[I,,T]=Ot(_),$=u[I];if($.outputs!=null){const A=$.outputs.indexOf(T);if(A!==-1){const F=`${I}:${A}`;y.inputNames[S]=F}}y.inputs.push($),$.children.push(y)})}),Object.keys(p).length===0?d.forEach(g=>{const y=u[g];y.children.length===0&&l.push(y)}):Object.keys(p).forEach(g=>{const[y]=Ot(g),_=u[y];_!=null&&(_.signatureKey=p[g],l.push(_))}),Object.keys(o).length>0?Object.keys(o).forEach(g=>{const[y]=Ot(g),_=u[y];_&&(_.signatureKey=o[g],c.push(_))}):c=a;let m={};e.library!=null&&e.library.function!=null&&(m=e.library.function.reduce((g,y)=>(g[y.signature.name]=this.mapFunction(y),g),{}));const f={nodes:u,inputs:c,outputs:l,weights:s,placeholders:a,signature:t,functions:m};return i.length>0&&(f.initNodes=i),f}mapSignatureEntries(e){return Object.keys(e||{}).reduce((t,r)=>(t[e[r].name]=r,t),{})}mapNode(e){const t=Qd(e.op)||this.opMappers[e.op]||{};e.attr==null&&(e.attr={});const r={name:e.name,op:e.op,category:t.category,inputNames:(e.input||[]).map(a=>a.startsWith("^")?a.slice(1):a),inputs:[],children:[],inputParams:{},attrParams:{},rawAttrs:e.attr,outputs:t.outputs};return t.inputs!=null&&(r.inputParams=t.inputs.reduce((a,s)=>(a[s.name]={type:s.type,inputIndexStart:s.start,inputIndexEnd:s.end},a),{})),t.attrs!=null&&(r.attrParams=t.attrs.reduce((a,s)=>{const i=s.type;let u;switch(s.type){case"string":u=Jo(e.attr,s.tfName,s.defaultValue),u===void 0&&s.tfDeprecatedName&&(u=Jo(e.attr,s.tfDeprecatedName,s.defaultValue));break;case"string[]":u=si(e.attr,s.tfName,s.defaultValue),u===void 0&&s.tfDeprecatedName&&(u=si(e.attr,s.tfDeprecatedName,s.defaultValue));break;case"number":u=Zo(e.attr,s.tfName,s.defaultValue||0),u===void 0&&s.tfDeprecatedName&&(u=Zo(e.attr,s.tfDeprecatedName,s.defaultValue));break;case"number[]":u=ri(e.attr,s.tfName,s.defaultValue),u===void 0&&s.tfDeprecatedName&&(u=ri(e.attr,s.tfDeprecatedName,s.defaultValue));break;case"bool":u=Yo(e.attr,s.tfName,s.defaultValue),u===void 0&&s.tfDeprecatedName&&(u=Yo(e.attr,s.tfDeprecatedName,s.defaultValue));break;case"bool[]":u=oi(e.attr,s.tfName,s.defaultValue),u===void 0&&s.tfDeprecatedName&&(u=oi(e.attr,s.tfDeprecatedName,s.defaultValue));break;case"shape":u=ni(e.attr,s.tfName,s.defaultValue),u===void 0&&s.tfDeprecatedName&&(u=ni(e.attr,s.tfDeprecatedName,s.defaultValue));break;case"shape[]":u=ai(e.attr,s.tfName,s.defaultValue),u===void 0&&s.tfDeprecatedName&&(u=ai(e.attr,s.tfDeprecatedName,s.defaultValue));break;case"dtype":u=ei(e.attr,s.tfName,s.defaultValue),u===void 0&&s.tfDeprecatedName&&(u=ei(e.attr,s.tfDeprecatedName,s.defaultValue));break;case"dtype[]":u=ti(e.attr,s.tfName,s.defaultValue),u===void 0&&s.tfDeprecatedName&&(u=ti(e.attr,s.tfDeprecatedName,s.defaultValue));break;case"func":u=rm(e.attr,s.tfName,s.defaultValue),u===void 0&&s.tfDeprecatedName&&(u=rm(e.attr,s.tfDeprecatedName,s.defaultValue));break;case"tensor":case"tensors":break;default:throw new Error(`Unsupported param type: ${s.type} for op: ${e.op}`)}return a[s.name]={value:u,type:i},a},{})),r}mapFunction(e){const t=e.nodeDef,r=[],a=[];let s={};t!=null&&(s=t.reduce((p,d)=>(p[d.name]=this.mapNode(d),d.op==="Const"&&a.push(p[d.name]),p),{}));const i=[],u=[];e.signature.inputArg.forEach(p=>{const[d]=Ot(p.name),m={name:d,op:"Placeholder",inputs:[],inputNames:[],category:"graph",inputParams:{},attrParams:{dtype:{value:Qo(p.type),type:"dtype"}},children:[]};m.signatureKey=p.name,i.push(m),s[d]=m}),Object.keys(s).forEach(p=>{const d=s[p];d.inputNames.forEach((m,f)=>{const[g,,y]=Ot(m),_=s[g];if(_.outputs!=null){const S=_.outputs.indexOf(y);if(S!==-1){const I=`${g}:${S}`;d.inputNames[f]=I}}d.inputs.push(_),_.children.push(d)})});const l=e.ret;e.signature.outputArg.forEach(p=>{const[d,m]=Ot(l[p.name]),f=s[d];f!=null&&(f.defaultOutput=m,u.push(f))});const o=this.mapArgsToSignature(e);return{nodes:s,inputs:i,outputs:u,weights:a,placeholders:r,signature:o}}mapArgsToSignature(e){return{methodName:e.signature.name,inputs:e.signature.inputArg.reduce((t,r)=>(t[r.name]=this.mapArgToTensorInfo(r),t),{}),outputs:e.signature.outputArg.reduce((t,r)=>(t[r.name]=this.mapArgToTensorInfo(r,e.ret),t),{})}}mapArgToTensorInfo(e,t){let r=e.name;return t!=null&&(r=t[r]),{name:r,dtype:e.type}}}function w$(n){const e=Z().global;if(typeof e.atob<"u")return e.atob(n);if(typeof Buffer<"u")return new Buffer(n,"base64").toString();throw new Error("Unable to decode base64 in this environment. Missing built-in atob() or Buffer()")}function nm(n,e){const t=Array.isArray(n)?String.fromCharCode.apply(null,n):w$(n);return e?t:t.toLowerCase()}function Jo(n,e,t,r=!1){const a=n[e];return a!=null?nm(a.s,r):t}function Yo(n,e,t){const r=n[e];return r?r.b:t}function Zo(n,e,t){const r=n[e]||{},a=r.i!=null?r.i:r.f!=null?r.f:t;return typeof a=="number"?a:parseInt(a,10)}function Qo(n){switch(typeof n=="string"&&(n=Xe[n]),n){case Xe.DT_FLOAT:case Xe.DT_HALF:return"float32";case Xe.DT_INT32:case Xe.DT_INT64:case Xe.DT_INT8:case Xe.DT_UINT8:return"int32";case Xe.DT_BOOL:return"bool";case Xe.DT_DOUBLE:return"float32";case Xe.DT_STRING:return"string";case Xe.DT_COMPLEX64:case Xe.DT_COMPLEX128:return"complex64";default:return null}}function rm(n,e,t){const r=n[e];return r&&r.func?r.func.name:t}function ei(n,e,t){const r=n[e];return r&&r.type?Qo(r.type):t}function ti(n,e,t){const r=n[e];return r&&r.list&&r.list.type?r.list.type.map(a=>Qo(a)):t}function sm(n){if(!n.unknownRank)return n.dim!=null?n.dim.map(e=>typeof e.size=="number"?e.size:parseInt(e.size,10)):[]}function ni(n,e,t){const r=n[e];return r&&r.shape?sm(r.shape):t}function ri(n,e,t){const r=n[e];return r?((r.list.f&&r.list.f.length?r.list.f:r.list.i)||[]).map(a=>typeof a=="number"?a:parseInt(a,10)):t}function si(n,e,t,r=!1){const a=n[e];return a&&a.list&&a.list.s?a.list.s.map(s=>nm(s,r)):t}function ai(n,e,t){const r=n[e];return r&&r.list&&r.list.shape?r.list.shape.map(a=>sm(a)):t}function oi(n,e,t){const r=n[e];return r&&r.list&&r.list.b?r.list.b:t}/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */class _${constructor(e,t,r){this.node=e,this.tensorMap=t,this.context=r,this.inputs=[],this.attrs={},this.inputs=e.inputNames.map(a=>this.getInput(a)),e.rawAttrs!=null&&(this.attrs=Object.keys(e.rawAttrs).reduce((a,s)=>(a[s]=this.getAttr(s),a),{}))}getInput(e){return Ae(e,this.tensorMap,this.context)}getAttr(e,t){const r=this.node.rawAttrs[e];if(r.tensor!=null)return Ae(e,this.tensorMap,this.context);if(r.i!=null||r.f!=null)return Zo(this.node.rawAttrs,e,t);if(r.s!=null)return Jo(this.node.rawAttrs,e,t);if(r.b!=null)return Yo(this.node.rawAttrs,e,t);if(r.shape!=null)return ni(this.node.rawAttrs,e,t);if(r.type!=null)return ei(this.node.rawAttrs,e,t);if(r.list!=null){if(r.list.i!=null||r.list.f!=null)return ri(this.node.rawAttrs,e,t);if(r.list.s!=null)return si(this.node.rawAttrs,e,t);if(r.list.shape!=null)return ai(this.node.rawAttrs,e,t);if(r.list.b!=null)return oi(this.node.rawAttrs,e,t);if(r.list.type!=null)return ti(this.node.rawAttrs,e,t)}return t}}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */var De=Object.freeze({__proto__:null,OP_SCOPE_SUFFIX:jc,abs:tt,acos:Rf,acosh:Bf,add:X,addN:Lf,all:Wf,any:Uf,argMax:jf,argMin:qf,asin:Xf,asinh:Yf,atan:Qf,atan2:tg,atanh:rg,avgPool:ll,avgPool3d:pg,basicLSTMCell:bg,batchNorm:Zr,batchNorm2d:Sg,batchNorm3d:vg,batchNorm4d:xg,batchToSpaceND:pl,bincount:dl,bitwiseAnd:Ag,booleanMaskAsync:b0,broadcastArgs:Fg,broadcastTo:Qr,buffer:ft,cast:ve,ceil:Rg,clipByValue:Bg,clone:Gt,complex:Vt,concat:ze,concat1d:Lg,concat2d:Wg,concat3d:Ug,concat4d:jg,conv1d:Kg,conv2d:es,conv2dTranspose:Yg,conv3d:Qg,conv3dTranspose:ry,cos:ay,cosh:iy,cosineWindow:Oo,cumprod:cy,cumsum:py,denseBincount:my,depthToSpace:fy,depthwiseConv2d:mo,diag:by,dilation2d:_y,div:ge,divNoNan:Ty,dot:$y,dropout:D0,einsum:Un,elu:fl,enclosingPowerOfTwo:Hl,ensureShape:Fy,equal:hl,erf:Cy,euclideanNorm:Hy,exp:dn,expandDims:Kt,expm1:Ky,eye:wl,fft:$o,fill:fr,floor:_l,floorDiv:ul,fused:G0,gather:Il,gatherND:$0,greater:ns,greaterEqual:Nl,ifft:cs,imag:rs,image:$I,inTopKAsync:O0,irfft:Pl,isFinite:rb,isInf:ab,isNaN:ib,leakyRelu:Sl,less:go,lessEqual:yo,linalg:EI,linspace:pb,localResponseNormalization:mb,log:br,log1p:kl,logSigmoid:_b,logSoftmax:Sb,logSumExp:Tl,logicalAnd:ss,logicalNot:xl,logicalOr:$l,logicalXor:Eb,losses:AI,lowerBound:Db,matMul:le,max:jn,maxPool:El,maxPool3d:Cb,maxPoolWithArgmax:Mb,maximum:Al,mean:os,meshgrid:Lb,min:fo,minimum:is,mirrorPad:Vb,mod:Hb,moments:Gb,movingAverage:I0,mul:z,multiRNNCell:Kb,multinomial:Jb,neg:It,norm:ts,notEqual:Dl,oneHot:Qb,ones:mn,onesLike:tw,op:k,outerProduct:rw,pad:wr,pad1d:ow,pad2d:uw,pad3d:lw,pad4d:dw,pool:yw,pow:gr,prelu:Ol,print:il,prod:_w,raggedGather:Nw,raggedRange:kw,raggedTensorToTensor:Tw,rand:$w,randomGamma:qw,randomNormal:Rl,randomStandardNormal:Jw,randomUniform:xo,randomUniformInt:Qw,range:_r,real:Ir,reciprocal:n_,relu:us,relu6:Ml,reshape:D,reverse:fn,reverse1d:i_,reverse2d:c_,reverse3d:p_,reverse4d:m_,rfft:Eo,round:Bl,rsqrt:g_,scalar:oe,scatterND:S0,searchSorted:bo,selu:b_,separableConv2d:__,setdiff1dAsync:N_,sigmoid:Vn,sign:k_,signal:xI,sin:T_,sinh:$_,slice:de,slice1d:A_,slice2d:F_,slice3d:C_,slice4d:M_,softmax:P_,softplus:vl,spaceToBatchND:Fl,sparse:DI,sparseToDense:T0,spectral:TI,split:Nr,sqrt:Et,square:bt,squaredDifference:Ll,squeeze:Ao,stack:Dt,step:zl,stridedSlice:X_,string:FI,sub:re,sum:ye,tan:Y_,tanh:po,tensor:mt,tensor1d:ct,tensor2d:Sr,tensor3d:Z_,tensor4d:Wl,tensor5d:Q_,tensor6d:e0,tensorScatterUpdate:r0,tile:yr,topk:a0,transpose:Fo,truncatedNormal:i0,unique:c0,unsortedSegmentSum:p0,unstack:gn,upperBound:m0,variable:h0,where:qt,whereAsync:Ul,zeros:Gn,zerosLike:nt});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const I$=(n,e,t,r=De)=>{switch(n.op){case"BiasAdd":case"AddV2":case"Add":return[r.add(h("a",n,e,t),h("b",n,e,t))];case"AddN":return[r.addN(h("tensors",n,e,t))];case"FloorMod":case"Mod":return[r.mod(h("a",n,e,t),h("b",n,e,t))];case"Mul":return[r.mul(h("a",n,e,t),h("b",n,e,t))];case"RealDiv":case"Div":return[r.div(h("a",n,e,t),h("b",n,e,t))];case"DivNoNan":return[r.divNoNan(h("a",n,e,t),h("b",n,e,t))];case"FloorDiv":return[r.floorDiv(h("a",n,e,t),h("b",n,e,t))];case"Sub":return[r.sub(h("a",n,e,t),h("b",n,e,t))];case"Minimum":return[r.minimum(h("a",n,e,t),h("b",n,e,t))];case"Maximum":return[r.maximum(h("a",n,e,t),h("b",n,e,t))];case"Pow":return[r.pow(h("a",n,e,t),h("b",n,e,t))];case"SquaredDifference":return[r.squaredDifference(h("a",n,e,t),h("b",n,e,t))];default:throw TypeError(`Node type ${n.op} is not implemented`)}};/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const N$=(n,e,t,r=De)=>{switch(n.op){case"Abs":case"ComplexAbs":return[r.abs(h("x",n,e,t))];case"Acos":return[r.acos(h("x",n,e,t))];case"Acosh":return[r.acosh(h("x",n,e,t))];case"Asin":return[r.asin(h("x",n,e,t))];case"Asinh":return[r.asinh(h("x",n,e,t))];case"Atan":return[r.atan(h("x",n,e,t))];case"Atan2":return[r.atan2(h("x",n,e,t),h("y",n,e,t))];case"Atanh":return[r.atanh(h("x",n,e,t))];case"Ceil":return[r.ceil(h("x",n,e,t))];case"Complex":return[r.complex(h("real",n,e,t),h("imag",n,e,t))];case"Cos":return[r.cos(h("x",n,e,t))];case"Cosh":return[r.cosh(h("x",n,e,t))];case"Elu":return[r.elu(h("x",n,e,t))];case"Erf":return[r.erf(h("x",n,e,t))];case"Exp":return[r.exp(h("x",n,e,t))];case"Expm1":return[r.expm1(h("x",n,e,t))];case"Floor":return[r.floor(h("x",n,e,t))];case"Log":return[r.log(h("x",n,e,t))];case"Log1p":return[r.log1p(h("x",n,e,t))];case"Imag":return[r.imag(h("x",n,e,t))];case"Neg":return[r.neg(h("x",n,e,t))];case"Reciprocal":return[r.reciprocal(h("x",n,e,t))];case"Real":return[r.real(h("x",n,e,t))];case"Relu":return[r.relu(h("x",n,e,t))];case"Round":return[r.round(h("x",n,e,t))];case"Selu":return[r.selu(h("x",n,e,t))];case"Sigmoid":return[r.sigmoid(h("x",n,e,t))];case"Sin":return[r.sin(h("x",n,e,t))];case"Sign":return[r.sign(h("x",n,e,t))];case"Sinh":return[r.sinh(h("x",n,e,t))];case"Softplus":return[r.softplus(h("x",n,e,t))];case"Sqrt":return[r.sqrt(h("x",n,e,t))];case"Square":return[r.square(h("x",n,e,t))];case"Tanh":return[r.tanh(h("x",n,e,t))];case"Tan":return[r.tan(h("x",n,e,t))];case"ClipByValue":return[r.clipByValue(h("x",n,e,t),h("clipValueMin",n,e,t),h("clipValueMax",n,e,t))];case"Relu6":return[r.relu6(h("x",n,e,t))];case"Rsqrt":return[r.rsqrt(Ae(n.inputNames[0],e,t))];case"LeakyRelu":return[r.leakyRelu(h("x",n,e,t),h("alpha",n,e,t))];case"Prelu":return[r.prelu(h("x",n,e,t),h("alpha",n,e,t))];case"IsNan":return[r.isNaN(Ae(n.inputNames[0],e,t))];case"IsInf":return[r.isInf(Ae(n.inputNames[0],e,t))];case"IsFinite":return[r.isFinite(Ae(n.inputNames[0],e,t))];default:throw TypeError(`Node type ${n.op} is not implemented`)}};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function lt(n,e,t=""){if(!(typeof n=="number"||typeof e=="number")){w(n.length===e.length,()=>t+` Shapes ${n} and ${e} must match`);for(let r=0;r<n.length;r++){const a=n[r],s=e[r];w(a<0||s<0||a===s,()=>t+` Shapes ${n} and ${e} must match`)}}}function am(n){return!(typeof n=="number"||n.some(e=>e<0))}function xr(n,e,t){let r=ii(n,t);const a=!am(r);if(a&&e.length===0)throw new Error(`Tried to calculate elements of an empty list with non-fully-defined elementShape: ${r}`);if(a&&e.forEach(s=>{r=ii(s.shape,r)}),!am(r))throw new Error(`Non-fully-defined elementShape: ${r}`);return r}function ii(n,e){if(typeof n=="number")return e;if(typeof e=="number")return n;if(n.length!==e.length)throw new Error(`Incompatible ranks during merge: ${n} vs. ${e}`);const t=[];for(let r=0;r<n.length;++r){const a=n[r],s=e[r];if(a>=0&&s>=0&&a!==s)throw new Error(`Incompatible shape during merge: ${n} vs. ${e}`);t[r]=a>=0?a:s}return t}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */class S${constructor(e,t,r,a,s,i,u){this.name=e,this.dtype=t,this.maxSize=r,this.elementShape=a,this.identicalElementShapes=s,this.dynamicSize=i,this.clearAfterRead=u,this.tensors=[],this.closed_=!1,this.idTensor=oe(0),_t(this.idTensor)}get id(){return this.idTensor.id}get closed(){return this.closed_}clearAndClose(e){this.tensors.forEach(t=>{(e==null||!e.has(t.tensor.id))&&t.tensor.dispose()}),this.tensors=[],this.closed_=!0,this.idTensor.dispose()}size(){return this.tensors.length}read(e){if(this.closed_)throw new Error(`TensorArray ${this.name} has already been closed.`);if(e<0||e>=this.size())throw new Error(`Tried to read from index ${e}, but array size is: ${this.size()}`);const t=this.tensors[e];if(t.cleared)throw new Error(`TensorArray ${this.name}: Could not read index ${e} twice because it was cleared after a previous read (perhaps try setting clear_after_read = false?).`);return this.clearAfterRead&&(t.cleared=!0),t.read=!0,t.tensor}readMany(e){return e.map(t=>this.read(t))}write(e,t){if(this.closed_)throw new Error(`TensorArray ${this.name} has already been closed.`);if(e<0||!this.dynamicSize&&e>=this.maxSize)throw new Error(`Tried to write to index ${e}, but array is not resizeable and size is: ${this.maxSize}`);const r=this.tensors[e]||{};if(t.dtype!==this.dtype)throw new Error(`TensorArray ${this.name}: Could not write to TensorArray index ${e},
          because the value dtype is ${t.dtype}, but TensorArray dtype is ${this.dtype}.`);if(this.size()===0&&(this.elementShape==null||this.elementShape.length===0)&&(this.elementShape=t.shape),lt(this.elementShape,t.shape,`TensorArray ${this.name}: Could not write to TensorArray index ${e}.`),r.read)throw new Error(`TensorArray ${this.name}: Could not write to TensorArray index ${e}, because it has already been read.`);if(r.written)throw new Error(`TensorArray ${this.name}: Could not write to TensorArray index ${e}, because it has already been written.`);r.tensor=t,_t(t),r.written=!0,this.tensors[e]=r}writeMany(e,t){if(e.length!==t.length)throw new Error(`TensorArray ${this.name}: could not write multiple tensors,because the index size: ${e.length} is not the same as tensors size: ${t.length}.`);e.forEach((r,a)=>this.write(r,t[a]))}gather(e,t){if(t&&t!==this.dtype)throw new Error(`TensorArray dtype is ${this.dtype} but gather requested dtype ${t}`);if(e)e=e.slice(0,this.size());else{e=[];for(let a=0;a<this.size();a++)e.push(a)}if(e.length===0)return mt([],[0].concat(this.elementShape));const r=this.readMany(e);return lt(this.elementShape,r[0].shape,"TensorArray shape mismatch: "),Dt(r,0)}concat(e){if(e&&e!==this.dtype)throw new Error(`TensorArray dtype is ${this.dtype} but concat requested dtype ${e}`);if(this.size()===0)return mt([],[0].concat(this.elementShape));const t=[];for(let a=0;a<this.size();a++)t.push(a);const r=this.readMany(t);return lt(this.elementShape,r[0].shape,`TensorArray shape mismatch: tensor array shape (${this.elementShape}) vs first tensor shape (${r[0].shape})`),ze(r,0)}scatter(e,t){if(t.dtype!==this.dtype)throw new Error(`TensorArray dtype is ${this.dtype} but tensor has dtype ${t.dtype}`);if(e.length!==t.shape[0])throw new Error(`Expected len(indices) == tensor.shape[0], but saw: ${e.length} vs. ${t.shape[0]}`);const r=Math.max(...e);if(!this.dynamicSize&&r>=this.maxSize)throw new Error(`Max index must be < array size (${r}  vs. ${this.maxSize})`);this.writeMany(e,gn(t,0))}split(e,t){if(t.dtype!==this.dtype)throw new Error(`TensorArray dtype is ${this.dtype} but tensor has dtype ${t.dtype}`);let r=0;const a=e.map(c=>(r+=c,r));if(r!==t.shape[0])throw new Error(`Expected sum of lengths to be equal to
          tensor.shape[0], but sum of lengths is
        ${r}, and tensor's shape is: ${t.shape}`);if(!this.dynamicSize&&e.length!==this.maxSize)throw new Error(`TensorArray's size is not equal to the size of lengths (${this.maxSize} vs. ${e.length}), and the TensorArray is not marked as dynamically resizeable`);const s=r===0?0:t.size/r,i=[];ce(()=>{t=D(t,[1,r,s]);for(let c=0;c<e.length;++c){const o=[0,c===0?0:a[c-1],0],p=[1,e[c],s];i[c]=D(de(t,o,p),this.elementShape)}return i});const u=[];for(let c=0;c<e.length;c++)u[c]=c;this.writeMany(u,i)}}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */class In{get id(){return this.idTensor.id}constructor(e,t,r,a=-1){this.tensors=e,this.elementShape=t,this.elementDtype=r,e?.forEach(s=>{if(r!==s.dtype)throw new Error(`Invalid data types; op elements ${r}, but list elements ${s.dtype}`);lt(t,s.shape,"TensorList shape mismatch: "),_t(s)}),this.idTensor=oe(0),this.maxNumElements=a,_t(this.idTensor)}copy(){return new In([...this.tensors],this.elementShape,this.elementDtype)}clearAndClose(e){this.tensors.forEach(t=>{(e==null||!e.has(t.id))&&t.dispose()}),this.tensors.length=0,this.idTensor.dispose()}size(){return this.tensors.length}stack(e,t,r=-1){if(t!==this.elementDtype)throw new Error(`Invalid data types; op elements ${t}, but list elements ${this.elementDtype}`);if(r!==-1&&this.tensors.length!==r)throw new Error(`Operation expected a list with ${r} elements but got a list with ${this.tensors.length} elements.`);lt(e,this.elementShape,"TensorList shape mismatch: ");const a=xr(this.elementShape,this.tensors,e);return ce(()=>{const s=this.tensors.map(i=>D(i,a));return Dt(s,0)})}popBack(e,t){if(t!==this.elementDtype)throw new Error(`Invalid data types; op elements ${t}, but list elements ${this.elementDtype}`);if(this.size()===0)throw new Error("Trying to pop from an empty list.");const r=xr(this.elementShape,this.tensors,e),a=this.tensors.pop();return a.kept=!1,lt(a.shape,e,"TensorList shape mismatch: "),D(a,r)}pushBack(e){if(e.dtype!==this.elementDtype)throw new Error(`Invalid data types; op elements ${e.dtype}, but list elements ${this.elementDtype}`);if(lt(e.shape,this.elementShape,"TensorList shape mismatch: "),this.maxNumElements===this.size())throw new Error("Trying to push element into a full list.");_t(e),this.tensors.push(e)}resize(e){if(e<0)throw new Error(`TensorListResize expects size to be non-negative. Got: ${e}`);if(this.maxNumElements!==-1&&e>this.maxNumElements)throw new Error(`TensorListResize input size ${e} is greater maxNumElement ${this.maxNumElements}.`);const t=new In([],this.elementShape,this.elementDtype,this.maxNumElements);t.tensors.length=e;for(let r=0;r<Math.min(this.tensors.length,e);++r)t.tensors[r]=this.tensors[r];return t}getItem(e,t,r){if(r!==this.elementDtype)throw new Error(`Invalid data types; op elements ${r}, but list elements ${this.elementDtype}`);if(e<0||e>this.tensors.length)throw new Error(`Trying to access element ${e} in a list with ${this.tensors.length} elements.`);if(this.tensors[e]==null)throw new Error(`element at index ${e} is null.`);lt(this.tensors[e].shape,t,"TensorList shape mismatch: ");const a=xr(this.elementShape,this.tensors,t);return D(this.tensors[e],a)}setItem(e,t){if(t.dtype!==this.elementDtype)throw new Error(`Invalid data types; op elements ${t.dtype}, but list elements ${this.elementDtype}`);if(e<0||this.maxNumElements!==-1&&e>=this.maxNumElements)throw new Error(`Trying to set element ${e} in a list with max ${this.maxNumElements} elements.`);lt(this.elementShape,t.shape,"TensorList shape mismatch: "),_t(t),this.tensors[e]!=null&&(this.tensors[e].kept=!1),this.tensors[e]=t}gather(e,t,r){if(t!==this.elementDtype)throw new Error(`Invalid data types; op elements ${t}, but list elements ${this.elementDtype}`);lt(this.elementShape,r,"TensorList shape mismatch: "),e=e.slice(0,this.size());const a=xr(this.elementShape,this.tensors,r);return e.length===0?mt([],[0].concat(a)):ce(()=>{const s=e.map(i=>D(this.tensors[i],a));return Dt(s,0)})}concat(e,t){if(e&&e!==this.elementDtype)throw new Error(`TensorList dtype is ${this.elementDtype} but concat requested dtype ${e}`);lt(this.elementShape,t,"TensorList shape mismatch: ");const r=xr(this.elementShape,this.tensors,t);return this.size()===0?mt([],[0].concat(r)):ce(()=>{const a=this.tensors.map(s=>D(s,r));return ze(a,0)})}}function k$(n,e,t){const r=n.dtype;if(n.shape.length<1)throw new Error(`Tensor must be at least a vector, but saw shape: ${n.shape}`);if(n.dtype!==t)throw new Error(`Invalid data types; op elements ${n.dtype}, but list elements ${t}`);const a=n.shape.slice(1);lt(a,e,"TensorList shape mismatch: ");const s=gn(n);return new In(s,e,r)}function v$(n,e,t,r){return new In([],n,e,r)}function T$(n,e,t,r){if(e.length!==n.shape[0])throw new Error(`Expected len(indices) == tensor.shape[0], but saw: ${e.length} vs. ${n.shape[0]}`);const a=Math.max(...e);if(r!=null&&r!==-1&&a>=r)throw new Error(`Max index must be < array size (${a}  vs. ${r})`);const s=new In([],t,n.dtype,r),i=gn(n,0);return e.forEach((u,c)=>{s.setItem(u,i[c])}),s}function x$(n,e,t){let r=0;const a=e.map(o=>(r+=o,r));if(r!==n.shape[0])throw new Error(`Expected sum of lengths to be equal to
          tensor.shape[0], but sum of lengths is
        ${r}, and tensor's shape is: ${n.shape}`);const s=n.shape.slice(1),i=ii(s,t),u=r===0?0:n.size/r,c=ce(()=>{const o=[];n=D(n,[1,r,u]);for(let p=0;p<e.length;++p){const m=[0,p===0?0:a[p-1],0],f=[1,e[p],u];o[p]=D(de(n,m,f),i)}return n.dispose(),o}),l=new In([],t,n.dtype,e.length);for(let o=0;o<c.length;o++)l.setItem(o,c[o]);return l}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const $$=async(n,e,t)=>{switch(n.op){case"If":case"StatelessIf":{const r=h("thenBranch",n,e,t),a=h("elseBranch",n,e,t),s=h("cond",n,e,t),i=h("args",n,e,t);return(await s.data())[0]?t.functionMap[r].executeFunctionAsync(i,t.tensorArrayMap,t.tensorListMap):t.functionMap[a].executeFunctionAsync(i,t.tensorArrayMap,t.tensorListMap)}case"While":case"StatelessWhile":{const r=h("body",n,e,t),a=h("cond",n,e,t),s=h("args",n,e,t),i=await t.functionMap[a].executeFunctionAsync(s,t.tensorArrayMap,t.tensorListMap),u=s.map(o=>o.id);let c=await i[0].data();i.forEach(o=>{!o.kept&&u.indexOf(o.id)===-1&&o.dispose()});let l=s;for(;c[0];){const o=l;l=await t.functionMap[r].executeFunctionAsync(l,t.tensorArrayMap,t.tensorListMap);const p=l.map(m=>m.id);o.forEach(m=>{!m.kept&&u.indexOf(m.id)===-1&&p.indexOf(m.id)===-1&&m.dispose()});const d=await t.functionMap[a].executeFunctionAsync(l,t.tensorArrayMap,t.tensorListMap);c=await d[0].data(),d.forEach(m=>{!m.kept&&u.indexOf(m.id)===-1&&p.indexOf(m.id)===-1&&m.dispose()})}return l}case"LoopCond":{const r=h("pred",n,e,t);return[Ct(r)]}case"Switch":{const r=h("pred",n,e,t);let a=h("data",n,e,t);return a.kept||(a=Ct(a)),(await r.data())[0]?[void 0,a]:[a,void 0]}case"Merge":{const r=n.inputNames.find(a=>Ae(a,e,t)!==void 0);if(r){const a=Ae(r,e,t);return[Ct(a)]}return}case"Enter":{const r=h("frameName",n,e,t),a=h("tensor",n,e,t);return t.enterFrame(r),[Ct(a)]}case"Exit":{const r=h("tensor",n,e,t);return t.exitFrame(),[Ct(r)]}case"NextIteration":{const r=h("tensor",n,e,t);return t.nextIteration(),[Ct(r)]}case"TensorArrayV3":{const r=h("size",n,e,t),a=h("dtype",n,e,t),s=h("elementShape",n,e,t),i=h("dynamicSize",n,e,t),u=h("clearAfterRead",n,e,t),c=h("identicalElementShapes",n,e,t),l=h("name",n,e,t),o=new S$(l,a,r,s,c,i,u);return t.addTensorArray(o),[o.idTensor,oe(1)]}case"TensorArrayWriteV3":{const r=h("tensorArrayId",n,e,t),a=h("index",n,e,t),s=h("tensor",n,e,t),i=t.getTensorArray(r.id);return i.write(a,s),[i.idTensor]}case"TensorArrayReadV3":{const r=h("tensorArrayId",n,e,t),a=h("index",n,e,t);return[t.getTensorArray(r.id).read(a)]}case"TensorArrayGatherV3":{const r=h("tensorArrayId",n,e,t),a=h("indices",n,e,t),s=h("dtype",n,e,t);return[t.getTensorArray(r.id).gather(a,s)]}case"TensorArrayScatterV3":{const r=h("tensorArrayId",n,e,t),a=h("indices",n,e,t),s=h("tensor",n,e,t),i=t.getTensorArray(r.id);return i.scatter(a,s),[i.idTensor]}case"TensorArrayConcatV3":{const r=h("tensorArrayId",n,e,t),a=t.getTensorArray(r.id),s=h("dtype",n,e,t);return[a.concat(s)]}case"TensorArraySplitV3":{const r=h("tensorArrayId",n,e,t),a=h("tensor",n,e,t),s=h("lengths",n,e,t),i=t.getTensorArray(r.id);return i.split(s,a),[i.idTensor]}case"TensorArraySizeV3":{const r=h("tensorArrayId",n,e,t),a=t.getTensorArray(r.id);return[oe(a.size(),"int32")]}case"TensorArrayCloseV3":{const r=h("tensorArrayId",n,e,t),a=t.getTensorArray(r.id);return a.clearAndClose(),[a.idTensor]}case"TensorListSetItem":{const r=h("tensorListId",n,e,t),a=h("index",n,e,t),s=h("tensor",n,e,t),i=t.getTensorList(r.id);return i.setItem(a,s),[i.idTensor]}case"TensorListGetItem":{const r=h("tensorListId",n,e,t),a=h("index",n,e,t),s=h("elementShape",n,e,t),i=h("elementDType",n,e,t);return[t.getTensorList(r.id).getItem(a,s,i)]}case"TensorListScatterV2":case"TensorListScatter":{const r=h("indices",n,e,t),a=h("tensor",n,e,t),s=h("elementShape",n,e,t),i=h("numElements",n,e,t),u=T$(a,r,s,i);return t.addTensorList(u),[u.idTensor]}case"TensorListReserve":case"EmptyTensorList":{const r=h("elementShape",n,e,t),a=h("elementDType",n,e,t);let s;n.op==="TensorListReserve"?s="numElements":s="maxNumElements";const i=h(s,n,e,t),u=n.op==="TensorListReserve"?-1:i,c=v$(r,a,i,u);return t.addTensorList(c),[c.idTensor]}case"TensorListGather":{const r=h("tensorListId",n,e,t),a=h("indices",n,e,t),s=h("elementShape",n,e,t),i=h("elementDType",n,e,t);return[t.getTensorList(r.id).gather(a,i,s)]}case"TensorListStack":{const r=h("tensorListId",n,e,t),a=h("elementShape",n,e,t),s=h("elementDType",n,e,t),i=h("numElements",n,e,t);return[t.getTensorList(r.id).stack(a,s,i)]}case"TensorListFromTensor":{const r=h("tensor",n,e,t),a=h("elementShape",n,e,t),s=h("elementDType",n,e,t),i=k$(r,a,s);return t.addTensorList(i),[i.idTensor]}case"TensorListConcat":case"TensorListConcatV2":{const r=h("tensorListId",n,e,t),a=t.getTensorList(r.id),s=h("dtype",n,e,t),i=h("elementShape",n,e,t);return[a.concat(s,i)]}case"TensorListPushBack":{const r=h("tensorListId",n,e,t),a=h("tensor",n,e,t),s=t.getTensorList(r.id);return s.pushBack(a),[s.idTensor]}case"TensorListPopBack":{const r=h("tensorListId",n,e,t),a=h("elementShape",n,e,t),s=h("elementDType",n,e,t);return[t.getTensorList(r.id).popBack(a,s)]}case"TensorListSplit":{const r=h("tensor",n,e,t),a=h("elementShape",n,e,t),s=h("lengths",n,e,t),i=x$(r,s,a);return t.addTensorList(i),[i.idTensor]}case"TensorListLength":{const r=h("tensorListId",n,e,t),a=t.getTensorList(r.id);return[oe(a.size(),"int32")]}case"TensorListResize":{const r=h("tensorListId",n,e,t),a=h("size",n,e,t),i=t.getTensorList(r.id).resize(a);return t.addTensorList(i),[i.idTensor]}default:throw TypeError(`Node type ${n.op} is not implemented`)}};/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function om(n,e,t){const[r,a]=h("fusedOps",n,e,t),s=r==="biasadd",i=!s,u=a==="prelu",c=r==="fusedbatchnorm",l=h("numArgs",n,e,t);if(s){if(u&&l!==2)throw new Error("FusedConv2d and DepthwiseConv2d with BiasAdd and Prelu must have two extra arguments: bias and alpha.");if(!u&&s&&l!==1)throw new Error("FusedConv2d and DepthwiseConv2d with BiasAdd must have one extra argument: bias.")}if(c)throw new Error("FusedConv2d and DepthwiseConv2d with FusedBatchNorm is not supported");const o=h("strides",n,e,t),p=ms(n,e,t),d=h("dataFormat",n,e,t).toUpperCase(),m=h("dilations",n,e,t);let[f,g]=h("args",n,e,t);i&&(g=f,f=void 0);const y=h("leakyreluAlpha",n,e,t);return{stride:o,pad:p,dataFormat:d,dilations:m,biasArg:f,preluArg:g,activationFunc:a,leakyreluAlpha:y}}const E$=(n,e,t,r=De)=>{switch(n.op){case"Conv1D":{const a=h("stride",n,e,t),s=h("pad",n,e,t),i=h("dataFormat",n,e,t).toUpperCase(),u=h("dilation",n,e,t);return[r.conv1d(h("x",n,e,t),h("filter",n,e,t),a,s,i,u)]}case"Conv2D":{const a=h("strides",n,e,t),s=ms(n,e,t),i=h("dataFormat",n,e,t).toUpperCase(),u=h("dilations",n,e,t);return[r.conv2d(h("x",n,e,t),h("filter",n,e,t),[a[1],a[2]],s,i,[u[1],u[2]])]}case"_FusedConv2D":{const{stride:a,pad:s,dataFormat:i,dilations:u,biasArg:c,preluArg:l,activationFunc:o,leakyreluAlpha:p}=om(n,e,t);return[r.fused.conv2d({x:h("x",n,e,t),filter:h("filter",n,e,t),strides:[a[1],a[2]],pad:s,dataFormat:i,dilations:[u[1],u[2]],bias:c,activation:o,preluActivationWeights:l,leakyreluAlpha:p})]}case"FusedDepthwiseConv2dNative":{const{stride:a,pad:s,dataFormat:i,dilations:u,biasArg:c,preluArg:l,activationFunc:o,leakyreluAlpha:p}=om(n,e,t);return[r.fused.depthwiseConv2d({x:h("x",n,e,t),filter:h("filter",n,e,t),strides:[a[1],a[2]],pad:s,dataFormat:i,dilations:[u[1],u[2]],bias:c,activation:o,preluActivationWeights:l,leakyreluAlpha:p})]}case"Conv2DBackpropInput":case"Conv2dTranspose":{const a=h("outputShape",n,e,t),s=h("strides",n,e,t),i=ms(n,e,t);return[r.conv2dTranspose(h("x",n,e,t),h("filter",n,e,t),a,[s[1],s[2]],i)]}case"DepthwiseConv2dNative":case"DepthwiseConv2d":{const a=h("strides",n,e,t),s=ms(n,e,t),i=h("dilations",n,e,t),u=h("dataFormat",n,e,t).toUpperCase();return[r.depthwiseConv2d(h("input",n,e,t),h("filter",n,e,t),[a[1],a[2]],s,u,[i[1],i[2]])]}case"Conv3D":{const a=h("strides",n,e,t),s=h("pad",n,e,t),i=h("dataFormat",n,e,t).toUpperCase(),u=h("dilations",n,e,t);return[r.conv3d(h("x",n,e,t),h("filter",n,e,t),[a[1],a[2],a[3]],s,i,[u[1],u[2],u[3]])]}case"AvgPool":{const a=h("strides",n,e,t),s=h("pad",n,e,t),i=h("kernelSize",n,e,t);return[r.avgPool(h("x",n,e,t),[i[1],i[2]],[a[1],a[2]],s)]}case"MaxPool":{const a=h("strides",n,e,t),s=h("pad",n,e,t),i=h("kernelSize",n,e,t);return[r.maxPool(h("x",n,e,t),[i[1],i[2]],[a[1],a[2]],s)]}case"MaxPoolWithArgmax":{const a=h("strides",n,e,t),s=h("pad",n,e,t),i=h("kernelSize",n,e,t),u=h("includeBatchInIndex",n,e,t),{result:c,indexes:l}=r.maxPoolWithArgmax(h("x",n,e,t),[i[1],i[2]],[a[1],a[2]],s,u);return[c,l]}case"AvgPool3D":{const a=h("strides",n,e,t),s=h("pad",n,e,t),i=h("kernelSize",n,e,t);return[r.avgPool3d(h("x",n,e,t),[i[1],i[2],i[3]],[a[1],a[2],a[3]],s)]}case"MaxPool3D":{const a=h("strides",n,e,t),s=h("pad",n,e,t),i=h("kernelSize",n,e,t);return[r.maxPool3d(h("x",n,e,t),[i[1],i[2],i[3]],[a[1],a[2],a[3]],s)]}case"Dilation2D":{const a=h("strides",n,e,t),s=h("pad",n,e,t),i=h("dilations",n,e,t),u=a[1],c=a[2],l=i[1],o=i[2];return[r.dilation2d(h("x",n,e,t),h("filter",n,e,t),[u,c],s,[l,o],"NHWC")]}default:throw TypeError(`Node type ${n.op} is not implemented`)}};/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const A$=(n,e,t,r=De)=>{switch(n.op){case"Fill":{const a=h("shape",n,e,t),s=h("dtype",n,e,t),i=h("value",n,e,t);return[r.fill(a,i,s)]}case"LinSpace":{const a=h("start",n,e,t),s=h("stop",n,e,t),i=h("num",n,e,t);return[r.linspace(a,s,i)]}case"Multinomial":{const a=h("logits",n,e,t),s=h("numSamples",n,e,t),i=h("seed",n,e,t);return[r.multinomial(a,s,i)]}case"OneHot":{const a=h("indices",n,e,t),s=h("depth",n,e,t),i=h("onValue",n,e,t),u=h("offValue",n,e,t),c=h("dtype",n,e,t);return[r.oneHot(a,s,i,u,c)]}case"Ones":return[r.ones(h("shape",n,e,t),h("dtype",n,e,t))];case"OnesLike":return[r.onesLike(h("x",n,e,t))];case"RandomStandardNormal":return[r.randomStandardNormal(h("shape",n,e,t),h("dtype",n,e,t),h("seed",n,e,t))];case"RandomUniform":return[r.randomUniform(h("shape",n,e,t),h("minval",n,e,t),h("maxval",n,e,t),h("dtype",n,e,t))];case"RandomUniformInt":return[r.randomUniformInt(h("shape",n,e,t),h("minval",n,e,t),h("maxval",n,e,t),h("seed",n,e,t))];case"Range":{const a=h("start",n,e,t),s=h("stop",n,e,t),i=h("step",n,e,t);return[r.range(a,s,i,h("dtype",n,e,t))]}case"TruncatedNormal":{const a=h("shape",n,e,t),s=h("mean",n,e,t),i=h("stdDev",n,e,t),u=h("seed",n,e,t);return[r.truncatedNormal(a,s,i,h("dtype",n,e,t),u)]}case"Zeros":return[r.zeros(h("shape",n,e,t),h("dtype",n,e,t))];case"ZerosLike":return[r.zerosLike(h("x",n,e,t))];default:throw TypeError(`Node type ${n.op} is not implemented`)}};/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function ui(n,e,t){const r=h("boxes",n,e,t),a=h("scores",n,e,t),s=h("maxOutputSize",n,e,t),i=h("iouThreshold",n,e,t),u=h("scoreThreshold",n,e,t),c=h("softNmsSigma",n,e,t);return{boxes:r,scores:a,maxOutputSize:s,iouThreshold:i,scoreThreshold:u,softNmsSigma:c}}const D$=async(n,e,t,r,a=De)=>{switch(n.op){case"NonMaxSuppressionV5":{const{boxes:s,scores:i,maxOutputSize:u,iouThreshold:c,scoreThreshold:l,softNmsSigma:o}=ui(n,e,t),p=await a.image.nonMaxSuppressionWithScoreAsync(s,i,u,c,l,o);return[p.selectedIndices,p.selectedScores]}case"NonMaxSuppressionV4":{const{boxes:s,scores:i,maxOutputSize:u,iouThreshold:c,scoreThreshold:l}=ui(n,e,t),o=h("padToMaxOutputSize",n,e,t),p=await a.image.nonMaxSuppressionPaddedAsync(s,i,u,c,l,o);return[p.selectedIndices,p.validOutputs]}case"NonMaxSuppressionV3":case"NonMaxSuppressionV2":{const{boxes:s,scores:i,maxOutputSize:u,iouThreshold:c,scoreThreshold:l}=ui(n,e,t);return[await a.image.nonMaxSuppressionAsync(s,i,u,c,l)]}case"Where":{const s=a.cast(h("condition",n,e,t),"bool"),i=[await a.whereAsync(s)];return s.dispose(),i}case"ListDiff":return a.setdiff1dAsync(h("x",n,e,t),h("y",n,e,t));default:throw TypeError(`Node type ${n.op} is not implemented`)}};/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const F$=(n,e,t,r=De)=>{switch(n.op){case"LowerBound":{const a=h("sortedSequence",n,e,t),s=h("values",n,e,t);return[r.lowerBound(a,s)]}case"TopKV2":{const a=h("x",n,e,t),s=h("k",n,e,t),i=h("sorted",n,e,t),u=r.topk(a,s,i);return[u.values,u.indices]}case"UpperBound":{const a=h("sortedSequence",n,e,t),s=h("values",n,e,t);return[r.upperBound(a,s)]}case"Unique":{const a=h("x",n,e,t),s=r.unique(a);return[s.values,s.indices]}case"UniqueV2":{const a=h("x",n,e,t),s=h("axis",n,e,t),i=r.unique(a,s);return[i.values,i.indices]}default:throw TypeError(`Node type ${n.op} is not implemented`)}};/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const O$=(n,e,t,r=De)=>{switch(n.op){case"Const":return e[n.name];case"PlaceholderWithDefault":const a=h("default",n,e,t);return[Ae(n.name,e,t)||a];case"Placeholder":return[Ae(n.name,e,t)];case"Identity":case"StopGradient":case"FakeQuantWithMinMaxVars":{const o=h("x",n,e,t);return[Ct(o)]}case"IdentityN":return h("x",n,e,t).map(o=>Ct(o));case"Snapshot":const s=h("x",n,e,t);return[Ct(s)];case"Shape":return[r.tensor1d(h("x",n,e,t).shape,"int32")];case"ShapeN":return h("x",n,e,t).map(o=>r.tensor1d(o.shape));case"Size":return[r.scalar(h("x",n,e,t).size,"int32")];case"Rank":return[r.scalar(h("x",n,e,t).rank,"int32")];case"NoOp":return[r.scalar(1)];case"Print":const i=h("x",n,e,t),u=h("data",n,e,t),c=h("message",n,e,t),l=h("summarize",n,e,t);console.warn("The graph has a tf.print() operation,usually used for debugging, which slows down performance."),console.log(c);for(let o=0;o<u.length;o++)console.log(Array.prototype.slice.call(u[o].dataSync()).slice(0,l));return[i];default:throw TypeError(`Node type ${n.op} is not implemented`)}};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */class C${get id(){return this.handle.id}constructor(e,t){this.keyDType=e,this.valueDType=t,this.handle=oe(0),this.tensorMap=new Map,_t(this.handle)}clearAndClose(){this.tensorMap.forEach(e=>e.dispose()),this.tensorMap.clear(),this.handle.dispose()}size(){return this.tensorMap.size}tensorSize(){return oe(this.size(),"int32")}async import(e,t){this.checkKeyAndValueTensor(e,t);const r=await e.data();return this.tensorMap.forEach(a=>a.dispose()),this.tensorMap.clear(),ce(()=>{const a=gn(t),s=r.length,i=a.length;w(s===i,()=>`The number of elements doesn't match, keys has ${s} elements, the values has ${i} elements.`);for(let u=0;u<s;u++){const c=r[u],l=a[u];_t(l),this.tensorMap.set(c,l)}return this.handle})}async find(e,t){this.checkKeyAndValueTensor(e,t);const r=await e.data();return ce(()=>{const a=[];for(let s=0;s<r.length;s++){const i=r[s],u=this.findWithDefault(i,t);a.push(u)}return Dt(a)})}findWithDefault(e,t){const r=this.tensorMap.get(e);return r??t}checkKeyAndValueTensor(e,t){if(e.dtype!==this.keyDType)throw new Error(`Expect key dtype ${this.keyDType}, but got ${e.dtype}`);if(t.dtype!==this.valueDType)throw new Error(`Expect value dtype ${this.valueDType}, but got ${t.dtype}`)}}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const R$=async(n,e,t,r)=>{switch(n.op){case"HashTable":case"HashTableV2":{const a=r.getHashTableHandleByName(n.name);if(a!=null)return[a];{const s=h("keyDType",n,e,t),i=h("valueDType",n,e,t),u=new C$(s,i);return r.addHashTable(n.name,u),[u.handle]}}case"InitializeTable":case"InitializeTableV2":case"LookupTableImport":case"LookupTableImportV2":{const a=h("tableHandle",n,e,t,r),s=h("keys",n,e,t),i=h("values",n,e,t);return[await r.getHashTableById(a.id).import(s,i)]}case"LookupTableFind":case"LookupTableFindV2":{const a=h("tableHandle",n,e,t,r),s=h("keys",n,e,t),i=h("defaultValue",n,e,t);return[await r.getHashTableById(a.id).find(s,i)]}case"LookupTableSize":case"LookupTableSizeV2":{const a=h("tableHandle",n,e,t,r);return[r.getHashTableById(a.id).tensorSize()]}default:throw TypeError(`Node type ${n.op} is not implemented`)}};/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const M$=(n,e,t,r=De)=>{switch(n.op){case"ResizeBilinear":{const a=h("images",n,e,t),s=h("size",n,e,t),i=h("alignCorners",n,e,t),u=h("halfPixelCenters",n,e,t);return[r.image.resizeBilinear(a,[s[0],s[1]],i,u)]}case"ResizeNearestNeighbor":{const a=h("images",n,e,t),s=h("size",n,e,t),i=h("alignCorners",n,e,t),u=h("halfPixelCenters",n,e,t);return[r.image.resizeNearestNeighbor(a,[s[0],s[1]],i,u)]}case"CropAndResize":{const a=h("image",n,e,t),s=h("boxes",n,e,t),i=h("boxInd",n,e,t),u=h("cropSize",n,e,t),c=h("method",n,e,t),l=h("extrapolationValue",n,e,t);return[r.image.cropAndResize(a,s,i,u,c,l)]}case"ImageProjectiveTransformV3":{const a=h("images",n,e,t),s=h("transforms",n,e,t),i=h("outputShape",n,e,t),u=h("fillValue",n,e,t),c=h("interpolation",n,e,t),l=h("fillMode",n,e,t);return[r.image.transform(a,s,c.toLowerCase(),l.toLowerCase(),u,i)]}default:throw TypeError(`Node type ${n.op} is not implemented`)}};/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const B$=(n,e,t,r=De)=>{switch(n.op){case"Equal":return[r.equal(h("a",n,e,t),h("b",n,e,t))];case"NotEqual":return[r.notEqual(h("a",n,e,t),h("b",n,e,t))];case"Greater":return[r.greater(h("a",n,e,t),h("b",n,e,t))];case"GreaterEqual":return[r.greaterEqual(h("a",n,e,t),h("b",n,e,t))];case"Less":return[r.less(h("a",n,e,t),h("b",n,e,t))];case"LessEqual":return[r.lessEqual(h("a",n,e,t),h("b",n,e,t))];case"LogicalAnd":return[r.logicalAnd(h("a",n,e,t),h("b",n,e,t))];case"LogicalNot":return[r.logicalNot(h("a",n,e,t))];case"LogicalOr":return[r.logicalOr(h("a",n,e,t),h("b",n,e,t))];case"Select":case"SelectV2":return[r.where(h("condition",n,e,t),h("a",n,e,t),h("b",n,e,t))];case"BitwiseAnd":return[r.bitwiseAnd(h("a",n,e,t),h("b",n,e,t))];default:throw TypeError(`Node type ${n.op} is not implemented`)}};/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const P$=(n,e,t,r=De)=>{switch(n.op){case"BatchMatMul":case"BatchMatMulV2":case"MatMul":return[r.matMul(h("a",n,e,t),h("b",n,e,t),h("transposeA",n,e,t),h("transposeB",n,e,t))];case"Einsum":return[r.einsum(h("equation",n,e,t),...h("tensors",n,e,t))];case"Transpose":return[r.transpose(h("x",n,e,t),h("perm",n,e,t))];case"_FusedMatMul":const[a,s]=h("fusedOps",n,e,t),i=a==="biasadd",u=s==="prelu",c=h("numArgs",n,e,t),l=h("leakyreluAlpha",n,e,t);if(i){if(u&&c!==2)throw new Error("Fused MatMul with BiasAdd and Prelu must have two extra arguments: bias and alpha.");if(!u&&c!==1)throw new Error("Fused MatMul with BiasAdd must have one extra argument: bias.")}const[o,p]=h("args",n,e,t);return[r.fused.matMul({a:h("a",n,e,t),b:h("b",n,e,t),transposeA:h("transposeA",n,e,t),transposeB:h("transposeB",n,e,t),bias:o,activation:s,preluActivationWeights:p,leakyreluAlpha:l})];case"MatrixBandPart":return[r.linalg.bandPart(h("a",n,e,t),h("numLower",n,e,t),h("numUpper",n,e,t))];default:throw TypeError(`Node type ${n.op} is not implemented`)}};/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const L$=(n,e,t,r=De)=>{switch(n.op){case"EuclideanNorm":return[r.euclideanNorm(h("x",n,e,t),h("axis",n,e,t),h("keepDims",n,e,t))];case"FusedBatchNorm":case"FusedBatchNormV2":return[r.batchNorm(h("x",n,e,t),h("mean",n,e,t),h("variance",n,e,t),h("offset",n,e,t),h("scale",n,e,t),h("epsilon",n,e,t))];case"FusedBatchNormV3":return[r.batchNorm(h("x",n,e,t),h("mean",n,e,t),h("variance",n,e,t),h("offset",n,e,t),h("scale",n,e,t),h("epsilon",n,e,t))];case"LRN":return[r.localResponseNormalization(h("x",n,e,t),h("radius",n,e,t),h("bias",n,e,t),h("alpha",n,e,t),h("beta",n,e,t))];case"Softmax":return[r.softmax(h("x",n,e,t))];case"LogSoftmax":return[r.logSoftmax(h("x",n,e,t))];default:throw TypeError(`Node type ${n.op} is not implemented`)}};/**
 * @license
 * Copyright 2022 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const z$=(n,e,t,r=De)=>{switch(n.op){case"RaggedGather":{const{outputNestedSplits:a,outputDenseValues:s}=r.raggedGather(h("paramsNestedSplits",n,e,t),h("paramsDenseValues",n,e,t),h("indices",n,e,t),h("outputRaggedRank",n,e,t));return a.concat(s)}case"RaggedRange":{const{rtNestedSplits:a,rtDenseValues:s}=r.raggedRange(h("starts",n,e,t),h("limits",n,e,t),h("splits",n,e,t));return[a,s]}case"RaggedTensorToTensor":return[r.raggedTensorToTensor(h("shape",n,e,t),h("values",n,e,t),h("defaultValue",n,e,t),h("rowPartitionTensors",n,e,t),h("rowPartitionTypes",n,e,t))];default:throw TypeError(`Node type ${n.op} is not implemented`)}};/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const W$=(n,e,t,r=De)=>{switch(n.op){case"Max":{const u=h("axis",n,e,t),c=h("keepDims",n,e,t);return[r.max(h("x",n,e,t),u,c)]}case"Mean":{const u=h("axis",n,e,t),c=h("keepDims",n,e,t);return[r.mean(h("x",n,e,t),u,c)]}case"Min":{const u=h("axis",n,e,t),c=h("keepDims",n,e,t);return[r.min(h("x",n,e,t),u,c)]}case"Sum":{const u=h("axis",n,e,t),c=h("keepDims",n,e,t);return[r.sum(h("x",n,e,t),u,c)]}case"All":{const u=h("axis",n,e,t),c=h("keepDims",n,e,t);return[r.all(h("x",n,e,t),u,c)]}case"Any":{const u=h("axis",n,e,t),c=h("keepDims",n,e,t);return[r.any(h("x",n,e,t),u,c)]}case"ArgMax":{const u=h("axis",n,e,t);return[r.argMax(h("x",n,e,t),u)]}case"ArgMin":{const u=h("axis",n,e,t);return[r.argMin(h("x",n,e,t),u)]}case"Prod":{const u=h("axis",n,e,t),c=h("keepDims",n,e,t);return[r.prod(h("x",n,e,t),u,c)]}case"Cumprod":{const u=h("axis",n,e,t),c=h("exclusive",n,e,t),l=h("reverse",n,e,t);return[r.cumprod(h("x",n,e,t),u,c,l)]}case"Cumsum":{const u=h("axis",n,e,t),c=h("exclusive",n,e,t),l=h("reverse",n,e,t);return[r.cumsum(h("x",n,e,t),u,c,l)]}case"Bincount":const a=h("x",n,e,t),s=h("weights",n,e,t),i=h("size",n,e,t);return[r.bincount(a,s,i)];case"DenseBincount":{const u=h("x",n,e,t),c=h("weights",n,e,t),l=h("size",n,e,t),o=h("binaryOutput",n,e,t);return[r.denseBincount(u,c,l,o)]}default:throw TypeError(`Node type ${n.op} is not implemented`)}};/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const V$=(n,e,t,r=De)=>{switch(n.op){case"ConcatV2":case"Concat":{const a=h("n",n,e,t),s=h("axis",n,e,t);let i=h("tensors",n,e,t);return i=i.slice(0,a),[r.concat(i,s)]}case"Gather":{const a=h("x",n,e,t),s=h("indices",n,e,t);return[r.gather(a,r.cast(s,"int32"),0)]}case"GatherV2":{const a=h("axis",n,e,t),s=h("batchDims",n,e,t),i=h("x",n,e,t),u=h("indices",n,e,t);return[r.gather(i,r.cast(u,"int32"),a,s)]}case"Reverse":{const a=h("dims",n,e,t),s=[];for(let u=0;u<a.length;u++)a[u]&&s.push(u);const i=h("x",n,e,t);return[r.reverse(i,s)]}case"ReverseV2":{const a=h("axis",n,e,t),s=h("x",n,e,t);return[r.reverse(s,a)]}case"Slice":{const a=h("begin",n,e,t),s=h("size",n,e,t);return[r.slice(h("x",n,e,t),a,s)]}case"StridedSlice":{const a=h("begin",n,e,t),s=h("end",n,e,t),i=h("strides",n,e,t),u=h("beginMask",n,e,t),c=h("endMask",n,e,t),l=h("ellipsisMask",n,e,t),o=h("newAxisMask",n,e,t),p=h("shrinkAxisMask",n,e,t),d=h("x",n,e,t);return[r.stridedSlice(d,a,s,i,u,c,l,o,p)]}case"Pack":return ce(()=>{const a=h("axis",n,e,t),s=h("tensors",n,e,t),i=s[0].shape,u=r.squeeze(s[0]).shape,c=s.map(l=>{const o=St(l.shape,i);if(!o&&!St(r.squeeze(l).shape,u))throw new Error("the input tensors shape does not match");return o?l:r.reshape(l,i)});return[r.stack(c,a)]});case"Unpack":{const a=h("axis",n,e,t),s=h("tensor",n,e,t);return r.unstack(s,a)}case"Tile":{const a=h("reps",n,e,t);return[r.tile(h("x",n,e,t),a)]}case"Split":case"SplitV":{const a=h("axis",n,e,t),s=h("numOrSizeSplits",n,e,t),i=h("x",n,e,t);return r.split(i,s,a)}case"ScatterNd":{const a=h("indices",n,e,t),s=h("values",n,e,t),i=h("shape",n,e,t);return[r.scatterND(a,s,i)]}case"GatherNd":{const a=h("x",n,e,t),s=h("indices",n,e,t);return[r.gatherND(a,s)]}case"SparseToDense":{const a=h("sparseIndices",n,e,t),s=h("outputShape",n,e,t),i=h("sparseValues",n,e,t),u=h("defaultValue",n,e,t);return[r.sparseToDense(a,i,s,i.dtype===u.dtype?u:r.cast(u,i.dtype))]}case"TensorScatterUpdate":{const a=h("indices",n,e,t),s=h("values",n,e,t),i=h("tensor",n,e,t);return[r.tensorScatterUpdate(i,a,s)]}default:throw TypeError(`Node type ${n.op} is not implemented`)}};/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const U$=(n,e,t,r=De)=>{switch(n.op){case"SparseFillEmptyRows":{const{outputIndices:a,outputValues:s,emptyRowIndicator:i,reverseIndexMap:u}=r.sparse.sparseFillEmptyRows(h("indices",n,e,t),h("values",n,e,t),h("denseShape",n,e,t),h("defaultValue",n,e,t));return[a,s,i,u]}case"SparseReshape":{const{outputIndices:a,outputShape:s}=r.sparse.sparseReshape(h("inputIndices",n,e,t),h("inputShape",n,e,t),h("newShape",n,e,t));return[a,s]}case"SparseSegmentMean":return[r.sparse.sparseSegmentMean(h("data",n,e,t),h("indices",n,e,t),h("segmentIds",n,e,t))];case"SparseSegmentSum":return[r.sparse.sparseSegmentSum(h("data",n,e,t),h("indices",n,e,t),h("segmentIds",n,e,t))];default:throw TypeError(`Node type ${n.op} is not implemented`)}};/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const H$=(n,e,t,r=De)=>{switch(n.op){case"FFT":return[r.fft(h("x",n,e,t))];case"IFFT":return[r.ifft(h("x",n,e,t))];case"RFFT":return[r.rfft(h("x",n,e,t))];case"IRFFT":return[r.irfft(h("x",n,e,t))];default:throw TypeError(`Node type ${n.op} is not implemented`)}};/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const j$=(n,e,t,r=De)=>{switch(n.op){case"StaticRegexReplace":return[r.string.staticRegexReplace(h("input",n,e,t),h("pattern",n,e,t),h("rewrite",n,e,t),h("replaceGlobal",n,e,t))];case"StringNGrams":{const{nGrams:a,nGramsSplits:s}=r.string.stringNGrams(h("data",n,e,t),h("dataSplits",n,e,t),h("separator",n,e,t),h("nGramWidths",n,e,t),h("leftPad",n,e,t),h("rightPad",n,e,t),h("padWidth",n,e,t),h("preserveShortSequences",n,e,t));return[a,s]}case"StringSplit":{const{indices:a,values:s,shape:i}=r.string.stringSplit(h("input",n,e,t),h("delimiter",n,e,t),h("skipEmpty",n,e,t));return[a,s,i]}case"StringToHashBucketFast":return[r.string.stringToHashBucketFast(h("input",n,e,t),h("numBuckets",n,e,t))];default:throw TypeError(`Node type ${n.op} is not implemented`)}};/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const G$=(n,e,t,r=De)=>{switch(n.op){case"Cast":return[r.cast(h("x",n,e,t),h("dtype",n,e,t))];case"ExpandDims":{const a=h("axis",n,e,t);return[r.expandDims(h("x",n,e,t),a)]}case"Squeeze":{const a=h("axis",n,e,t);return[r.squeeze(h("x",n,e,t),a)]}case"Reshape":return[r.reshape(h("x",n,e,t),h("shape",n,e,t))];case"EnsureShape":return[r.ensureShape(h("x",n,e,t),h("shape",n,e,t))];case"MirrorPad":return[r.mirrorPad(h("x",n,e,t),h("padding",n,e,t),h("mode",n,e,t))];case"PadV2":case"Pad":return[r.pad(h("x",n,e,t),h("padding",n,e,t),h("constantValue",n,e,t))];case"SpaceToBatchND":{const a=h("blockShape",n,e,t),s=h("paddings",n,e,t);return[r.spaceToBatchND(h("x",n,e,t),a,s)]}case"BatchToSpaceND":{const a=h("blockShape",n,e,t),s=h("crops",n,e,t);return[r.batchToSpaceND(h("x",n,e,t),a,s)]}case"DepthToSpace":{const a=h("blockSize",n,e,t),s=h("dataFormat",n,e,t).toUpperCase();return[r.depthToSpace(h("x",n,e,t),a,s)]}case"BroadcastTo":return[r.broadcastTo(h("x",n,e,t),h("shape",n,e,t))];case"BroadcastArgs":return[r.broadcastArgs(h("s0",n,e,t),h("s1",n,e,t))];default:throw TypeError(`Node type ${n.op} is not implemented`)}};/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function im(n,e,t,r,a=ce){const s=((i,u,c)=>{switch(i.category){case"arithmetic":return a(()=>I$(i,u,c));case"basic_math":return a(()=>N$(i,u,c));case"control":return $$(i,u,c);case"convolution":return a(()=>E$(i,u,c));case"creation":return a(()=>A$(i,u,c));case"dynamic":return D$(i,u,c);case"evaluation":return a(()=>F$(i,u,c));case"image":return a(()=>M$(i,u,c));case"graph":return a(()=>O$(i,u,c));case"logical":return a(()=>B$(i,u,c));case"matrices":return a(()=>P$(i,u,c));case"normalization":return a(()=>L$(i,u,c));case"ragged":return a(()=>z$(i,u,c));case"reduction":return a(()=>W$(i,u,c));case"slice_join":return a(()=>V$(i,u,c));case"sparse":return a(()=>U$(i,u,c));case"spectral":return a(()=>H$(i,u,c));case"string":return a(()=>j$(i,u,c));case"transformation":return a(()=>G$(i,u,c));case"hash_table":return R$(i,u,c,r);case"custom":const l=Qd(i.op);if(l&&l.customExecutor)return l.customExecutor(new _$(i,u,c));throw TypeError(`Custom op ${i.op} is not registered.`);default:throw TypeError(`Unknown op '${i.op}'. File an issue at https://github.com/tensorflow/tfjs/issues so we can add it, or register a custom execution with tf.registerOp()`)}})(n,e,t);return tn(s)?s.then(i=>[].concat(i)):[].concat(s)}class um{constructor(e={},t={},r={},a={},s){this.weightMap=e,this.tensorArrayMap=t,this.tensorListMap=r,this.functionMap=a,this.parseNodeNameCache=s,this.rootContext={id:0,frameName:"",iterationId:0},this.contexts=[this.rootContext],this.lastId=0,this.generateCurrentContextIds()}newFrame(e,t){return{id:e,frameName:t,iterationId:0}}set currentContext(e){this.contexts!==e&&(this.contexts=e,this.generateCurrentContextIds())}get currentContext(){return this.contexts}get currentContextId(){return this._currentContextIds[0]}get currentContextIds(){return this._currentContextIds}generateCurrentContextIds(){const e=[];for(let t=0;t<this.contexts.length-1;t++){const r=this.contexts.slice(0,this.contexts.length-t);e.push(this.contextIdforContexts(r))}e.push(""),this._currentContextIds=e}contextIdforContexts(e){return e?e.map(t=>t.id===0&&t.iterationId===0?"":`${t.frameName}-${t.iterationId}`).join("/"):""}enterFrame(e){this.contexts&&(this.lastId++,this.contexts=this.contexts.slice(),this.contexts.push(this.newFrame(this.lastId,e)),this._currentContextIds.unshift(this.contextIdforContexts(this.contexts)))}exitFrame(){if(this.contexts&&this.contexts.length>1)this.contexts=this.contexts.slice(),this.contexts.splice(-1),this.currentContextIds.shift();else throw new Error("Cannot exit frame, the context is empty")}nextIteration(){if(this.contexts&&this.contexts.length>0){this.contexts=this.contexts.slice(),this.lastId++;const e=Object.assign({},this.contexts[this.contexts.length-1]);e.iterationId+=1,e.id=this.lastId,this.contexts.splice(-1,1,e),this._currentContextIds.splice(0,1,this.contextIdforContexts(this.contexts))}else throw new Error("Cannot increase frame iteration, the context is empty")}getWeight(e){return this.weightMap[e]}addTensorArray(e){this.tensorArrayMap[e.id]=e}getTensorArray(e){return this.tensorArrayMap[e]}addTensorList(e){this.tensorListMap[e.id]=e}getTensorList(e){return this.tensorListMap[e]}dispose(e){for(const t in this.tensorArrayMap)this.tensorArrayMap[t].clearAndClose(e);for(const t in this.tensorListMap)this.tensorListMap[t].clearAndClose(e)}}/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function cm(n,e,t,r){const a=new Set,s=[];let i=null,u=null;const c=new Set,l=new Set(Object.keys(n).map(d=>Je(d)[0]));r=r||[];const o=new Set(r.map(d=>Je(d.name)[0])),p=[...e];for(;p.length>0;){const d=p.pop();if((Nn(d)||eE(d)||tE(d))&&i==null&&(i=d,u=i.children.map(m=>m.name).filter(m=>a.has(m))),a.add(d.name),t[d.name]==null&&!l.has(d.name)&&!o.has(d.name)){if(d.inputs.length===0){s.push(d.name);continue}d.inputs.forEach(m=>{c.has(m.name)||(c.add(m.name),p.push(m))})}}return{inputs:n,outputs:e,usedNodes:a,missingInputs:s,dynamicNode:i,syncInputs:u}}function q$(n,e){const{usedNodes:t,inputs:r}=e,a=Object.keys(r).map(y=>Je(y)[0]).map(y=>n.nodes[y]),s=n.initNodes||[],i=y=>t.has(typeof y=="string"?y:y.name);function u(y){return[...new Map(y.map(_=>[_.name,_])).values()]}const c=u([...a,...n.weights,...s]).filter(i),l=u([...c,...Object.values(n.nodes)]).filter(i),o=new Map(l.map(y=>[y.name,y])),p={};for(const y of l){p[y.name]=p[y.name]||0;for(const _ of y.children)i(_)||(p[_.name]=Number.POSITIVE_INFINITY),p[_.name]=(p[_.name]||0)+1}const d=Object.entries(p).filter(([,y])=>y===0).map(([y])=>y),m=[...d];for(;d.length>0;){const y=d.pop(),_=o.get(y);for(const S of _.children.filter(i))--p[S.name]===0&&(m.push(S.name),d.push(S.name))}const f=m.map(y=>o.get(y)),g=K$(f,c);return X$(g,c),g}function K$(n,e){const t=new Map(n.map(i=>[i.name,i])),r=e.map(i=>i.name),a=new Set(r);for(;r.length>0;){const i=r.pop(),u=t.get(i);for(const c of u.children)!t.has(c.name)||a.has(c.name)||(a.add(c.name),r.push(c.name))}return n.filter(i=>a.has(i.name))}class hs extends Error{constructor(e){super(`NodesExecutionOrderError: ${e}`)}}function X$(n,e){const t=new Map(n.map((u,c)=>[u.name,c])),r=new Set(e.map(u=>u.name)),a=u=>r.has(typeof u=="string"?u:u.name),s=new Set(n.map(u=>u.name)),i=u=>s.has(typeof u=="string"?u:u.name);for(const u of n){for(const c of u.children.filter(i)){if(!t.has(c.name))throw new hs(`Child ${c.name} of node ${u.name} is unreachable.`);if(t.get(u.name)>t.get(c.name))throw new hs(`Node ${u.name} is scheduled to run after its child ${c.name}.`)}if(!a(u))for(const c of u.inputs){if(!t.has(c.name))throw new hs(`Input ${c.name} of node ${u.name} is unreachable.`);if(t.get(c.name)>t.get(u.name))throw new hs(`Node ${u.name} is scheduled to run before its input ${c.name}.`)}}}function J$(n){const e=new Map(n.map((u,c)=>[u.name,c])),t=Number.MAX_SAFE_INTEGER,r=n.map((u,c)=>Nn(u)?t:c),a=u=>{const c=r[e.get(u.name)];return c??-1},s=n.map((u,c)=>u.children.map(a).reduce((l,o)=>Math.max(l,o),r[c])),i=new Map;for(let u=0;u<n.length;++u){const c=s[u];if(c===t)continue;const l=n[u],o=n[c];i.has(o.name)||i.set(o.name,[]),i.get(o.name).push(l)}return i}const Y$=new Set(["Switch","Merge","Enter","Exit","NextIteration","StatelessIf","StatelessWhile","if","While"]),Z$=new Set(["NonMaxSuppressionV2","NonMaxSuppressionV3","NonMaxSuppressionV5","Where"]),Q$=new Set(["HashTable","HashTableV2","LookupTableImport","LookupTableImportV2","LookupTableFind","LookupTableFindV2","LookupTableSize","LookupTableSizeV2"]);function Nn(n){return Y$.has(n.op)}function eE(n){return Z$.has(n.op)}function tE(n){return Q$.has(n.op)}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */class fs{get weightIds(){return this.parent?this.parent.weightIds:this._weightIds}get functionExecutorMap(){return this.parent?this.parent.functionExecutorMap:this._functionExecutorMap}get weightMap(){return this.parent?this.parent.weightMap:this._weightMap}set weightMap(e){const t=Object.keys(e).map(r=>e[r].map(a=>a.id));this._weightIds=[].concat(...t),this._weightMap=e}set resourceManager(e){this._resourceManager=e}get inputs(){return this._inputs.map(e=>({name:e.name,shape:e.attrParams.shape?e.attrParams.shape.value:void 0,dtype:e.attrParams.dtype?e.attrParams.dtype.value:void 0}))}get outputs(){return this._outputs.map(e=>({name:e.name,shape:e.attrParams.shape?e.attrParams.shape.value:void 0,dtype:e.attrParams.dtype?e.attrParams.dtype.value:void 0}))}get inputNodes(){return this._inputs.map(e=>e.signatureKey||e.name)}get outputNodes(){return this._outputs.map(e=>{const t=e.signatureKey||e.name;return e.defaultOutput?`${t}:${e.defaultOutput}`:t})}get functions(){return Object.keys(this._functions).reduce((e,t)=>(e[t]=this._functions[t].signature,e),{})}constructor(e,t){this.graph=e,this.parent=t,this.compiledMap=new Map,this.parseNodeNameCache=new Map,this._weightMap={},this.SEPARATOR=",",this._functions={},this._functionExecutorMap={},this.keepIntermediateTensors=!1,this._outputs=e.outputs,this._inputs=e.inputs,this._initNodes=e.initNodes,this._signature=e.signature,this._functions=e.functions,e.functions!=null&&Object.keys(e.functions).forEach(r=>{this._functionExecutorMap[r]=new fs(e.functions[r],this)})}getCompilationKey(e,t){const r=e.map(s=>s.name).sort(),a=t.map(s=>s.name).sort();return r.join(this.SEPARATOR)+"--"+a.join(this.SEPARATOR)}compile(e,t){const r=cm(e,t,this.weightMap,this._initNodes),{missingInputs:a,dynamicNode:s,syncInputs:i}=r;if(s!=null)throw new Error(`This execution contains the node '${s.name}', which has the dynamic op '${s.op}'. Please use model.executeAsync() instead. Alternatively, to avoid the dynamic ops, specify the inputs [${i}]`);if(a.length>0){const l=t.map(p=>p.name),o=Object.keys(e);throw new Error(`Cannot compute the outputs [${l}] from the provided inputs [${o}]. Missing the following inputs: [${a}]`)}const u=q$(this.graph,r),c=J$(u);return{orderedNodes:u,nodeLiveUntilMap:c}}cloneAndKeepTensor(e){if(e==null)return null;const t=e.clone();return _t(t),t}cloneTensorList(e){return e?e.map(r=>this.cloneAndKeepTensor(r)):null}cloneTensorMap(e){return Object.fromEntries(Object.entries(e).map(([t,r])=>[t,this.cloneTensorList(r)]))}execute(e,t){this.disposeIntermediateTensors(),e=this.mapInputs(e);const r=Object.keys(e).sort();this.checkInputs(e),this.checkInputShapeAndType(e),t=this.mapOutputs(t),this.checkOutputs(t);const a=r.map(d=>this.graph.nodes[Je(d)[0]]),s=t.map(d=>Je(d)[0]),i=new Set(s);let u=s.map(d=>this.graph.nodes[d]);u.length===0&&(u=this._outputs);const c=this.getCompilationKey(a,u);let l=this.compiledMap.get(c);l==null&&(l=this.compile(e,u),this.compiledMap.set(c,l));try{this.keepIntermediateTensors=Z().getBool("KEEP_INTERMEDIATE_TENSORS")}catch(d){this.keepIntermediateTensors=!1,console.warn(d.message)}const o={},p={};return ce(()=>{const d=new um(this.weightMap,o,p,this.functionExecutorMap,this.parseNodeNameCache),m=Object.assign({},this.weightMap);this.keepIntermediateTensors&&(this.clonedTensorsMap=this.cloneTensorMap(this.weightMap)),Object.keys(e).forEach(_=>{const[S,I]=Je(_,d),T=[];T[I]=e[_],m[S]=T,this.keepIntermediateTensors&&(this.clonedTensorsMap[S]=this.cloneTensorList(T))});const f=this.getFrozenTensorIds(m),{orderedNodes:g,nodeLiveUntilMap:y}=l;for(const _ of g){if(m[_.name])continue;const S=im(_,m,d,this._resourceManager);if(tn(S))throw new Error(`The execution of the op '${_.op}' returned a promise. Please use model.executeAsync() instead.`);m[_.name]=S,this.keepIntermediateTensors&&(this.clonedTensorsMap[_.name]=this.cloneTensorList(S)),this.checkTensorForDisposalWithNodeLiveUntilInfo(_,m,d,f,i,y.get(_.name))}return this.parent==null&&d.dispose(f),t.map(_=>Ae(_,m,d))})}getFrozenTensorIds(e){const t=[].concat.apply([],Object.keys(e).map(r=>e[r]).map(r=>r.map(a=>a.id)));return new Set(t)}checkTensorForDisposal(e,t,r,a,s,i,u){if(!(Nn(t)||i.has(e))){for(const c of r[e])c!=null&&(u[c.id]=(u[c.id]||0)+t.children.length);for(const c of t.inputs){if(Nn(c))continue;const l=em(c.name,r,a);if(l!=null)for(const o of l){if(!o||o.kept||s.has(o.id))continue;const p=u[o.id];p===1?(o.dispose(),delete u[o.id]):p!=null&&u[o.id]--}}}}checkTensorForDisposalWithNodeLiveUntilInfo(e,t,r,a,s,i){function u(c){return Nn(c)||s.has(c.name)}if(!(Nn(e)||i==null))for(const c of i){if(u(c))continue;const l=em(c.name,t,r);for(const o of l)!o||o.kept||a.has(o.id)||o.dispose()}}async executeAsync(e,t){return this._executeAsync(e,t)}disposeIntermediateTensors(){this.clonedTensorsMap&&(Object.values(this.clonedTensorsMap).forEach(e=>{for(const t of e)t&&!t.isDisposed&&t.dispose()}),this.clonedTensorsMap=null)}getIntermediateTensors(){return this.clonedTensorsMap}async _executeAsync(e,t,r=!1,a={},s={}){this.disposeIntermediateTensors(),r||(e=this.mapInputs(e),this.checkInputs(e),this.checkInputShapeAndType(e),t=this.mapOutputs(t),this.checkOutputs(t));try{this.keepIntermediateTensors=Z().getBool("KEEP_INTERMEDIATE_TENSORS")}catch(d){this.keepIntermediateTensors=!1,console.warn(d.message)}const i=new um(this.weightMap,a,s,this.functionExecutorMap,this.parseNodeNameCache);this.keepIntermediateTensors&&(this.clonedTensorsMap=this.cloneTensorMap(this.weightMap));const u=await this.executeWithControlFlow(e,i,t,r),c=t.map(d=>Ae(d,u,i)),l=c.map(d=>d.id),o=Object.keys(e).map(d=>e[d].id),p=new Set([...l,...o,...this.weightIds]);return Object.values(u).forEach(d=>{d.forEach(m=>{m&&!m.isDisposed&&!p.has(m.id)&&m.dispose()})}),this.parent==null&&i.dispose(p),c}async executeFunctionAsync(e,t,r){const a=e.reduce((s,i,u)=>(s[this.inputs[u].name]=i,s),{});return this._executeAsync(a,this.outputNodes,!0,t,r)}async executeWithControlFlow(e,t,r,a){const s=Object.keys(e),i=s.map(T=>this.graph.nodes[Je(T)[0]]),u=r.map(T=>Je(T)[0]),c=new Set(u);let l=u.map(T=>this.graph.nodes[T]);l.length===0&&(l=this._outputs);const{usedNodes:o,missingInputs:p,dynamicNode:d,syncInputs:m}=cm(e,l,this.weightMap,this._initNodes),f=[...i,...this.graph.weights,...this._initNodes||[]].map(T=>({node:T,contexts:t.currentContext})),g=Object.assign({},this.weightMap);Object.keys(e).forEach(T=>{const[$,A]=Je(T),F=[];F[A]=e[T],g[$]=F});const y={},_=this.getFrozenTensorIds(g),S={};for(;f.length>0;){const T=this.processStack(i,f,t,g,S,_,c,y,o);await Promise.all(T)}d==null&&!a&&console.warn("This model execution did not contain any nodes with control flow or dynamic output shapes. You can use model.execute() instead.");const I=l.filter(T=>!Nn(T)&&!Ae(T.name,g,t)).map(T=>T.name);if(I.length>0){let T="";throw d!=null&&(T=`Alternatively, to avoid the dynamic ops, use model.execute() and specify the inputs [${m}]`),new Error(`Cannot compute the outputs [${I}] from the provided inputs [${s}]. Consider providing the following inputs: [${p}]. ${T}`)}return g}processStack(e,t,r,a,s,i,u,c,l){const o=[];for(;t.length>0;){const p=t.pop();r.currentContext=p.contexts;let d="";if(p.node.op==="Enter"&&h("isConstant",p.node,a,r)&&([d]=Ot(p.node.name,r)),a[p.node.name]==null){const m=im(p.node,a,r,this._resourceManager);d||([d]=Ot(p.node.name,r));const f=r.currentContext;tn(m)?o.push(m.then(g=>(a[d]=g,this.keepIntermediateTensors&&(this.clonedTensorsMap[d]=this.cloneTensorList(g)),r.currentContext=f,this.checkTensorForDisposal(d,p.node,a,r,i,u,c),this.processChildNodes(p.node,t,r,a,s,l),g))):(a[d]=m,this.keepIntermediateTensors&&(this.clonedTensorsMap[d]=this.cloneTensorList(m)),this.checkTensorForDisposal(d,p.node,a,r,i,u,c),this.processChildNodes(p.node,t,r,a,s,l))}else this.processChildNodes(p.node,t,r,a,s,l)}return o}processChildNodes(e,t,r,a,s,i){e.children.forEach(u=>{const[c]=Ot(u.name,r);s[c]||!i.has(u.name)||(u.op==="Merge"?u.inputNames.some(l=>!!Ae(l,a,r))&&(s[c]=!0,t.push({contexts:r.currentContext,node:u})):u.inputNames.every(l=>!!Ae(l,a,r))&&(s[c]=!0,t.push({contexts:r.currentContext,node:u})))})}dispose(){Object.keys(this.weightMap).forEach(e=>this.weightMap[e].forEach(t=>t.dispose()))}checkInputShapeAndType(e){Object.keys(e).forEach(t=>{const r=e[t],[a]=Je(t),s=this.graph.nodes[a];if(s.attrParams.shape&&s.attrParams.shape.value){const i=s.attrParams.shape.value,u=i.length===r.shape.length&&r.shape.every((c,l)=>i[l]===-1||i[l]===c);w(u,()=>`The shape of dict['${s.name}'] provided in model.execute(dict) must be [${i}], but was [${r.shape}]`)}s.attrParams.dtype&&s.attrParams.dtype.value&&w(r.dtype===s.attrParams.dtype.value,()=>`The dtype of dict['${s.name}'] provided in model.execute(dict) must be ${s.attrParams.dtype.value}, but was ${r.dtype}`)})}mapInputs(e){var t,r;const a={};for(const s in e){const i=(r=(t=this._signature)===null||t===void 0?void 0:t.inputs)===null||r===void 0?void 0:r[s];i!=null?a[i.name]=e[s]:a[s]=e[s]}return a}checkInputs(e){const t=Object.keys(e).filter(r=>{const[a]=Je(r);return this.graph.nodes[a]==null});if(t.length>0)throw new Error(`The dict provided in model.execute(dict) has keys: [${t}] that are not part of graph`)}mapOutputs(e){return e.map(t=>{var r,a;const s=(a=(r=this._signature)===null||r===void 0?void 0:r.outputs)===null||a===void 0?void 0:a[t];return s!=null?s.name:t},{})}checkOutputs(e){e.forEach(t=>{const[r]=Je(t);if(!this.graph.nodes[r])throw new Error(`The output '${t}' is not found in the graph`)})}}class nE{constructor(e={},t={}){this.hashTableNameToHandle=e,this.hashTableMap=t}addHashTable(e,t){this.hashTableNameToHandle[e]=t.handle,this.hashTableMap[t.id]=t}getHashTableHandleByName(e){return this.hashTableNameToHandle[e]}getHashTableById(e){return this.hashTableMap[e]}dispose(){for(const e in this.hashTableMap)this.hashTableMap[e].clearAndClose(),delete this.hashTableMap[e];for(const e in this.hashTableNameToHandle)this.hashTableNameToHandle[e].dispose(),delete this.hashTableNameToHandle[e]}}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const rE="?tfjs-format=file",sE="model.json";class aE{get modelVersion(){return this.version}get inputNodes(){return this.executor.inputNodes}get outputNodes(){return this.executor.outputNodes}get inputs(){return this.executor.inputs}get outputs(){return this.executor.outputs}get weights(){return this.executor.weightMap}get metadata(){return this.artifacts.userDefinedMetadata}get modelSignature(){return this.signature}get modelStructuredOutputKeys(){return this.structuredOutputKeys}constructor(e,t={},r=rp){this.modelUrl=e,this.loadOptions=t,this.version="n/a",this.io=r,t==null&&(this.loadOptions={}),this.resourceManager=new nE}findIOHandler(){const e=this.modelUrl;if(e.load!=null)this.handler=e;else if(this.loadOptions.requestInit!=null)this.handler=this.io.browserHTTPRequest(e,this.loadOptions);else{const t=this.io.getLoadHandlers(e,this.loadOptions);if(t.length===0)t.push(this.io.browserHTTPRequest(e,this.loadOptions));else if(t.length>1)throw new Error(`Found more than one (${t.length}) load handlers for URL '${[e]}'`);this.handler=t[0]}}load(){if(this.findIOHandler(),this.handler.load==null)throw new Error("Cannot proceed with model loading because the IOHandler provided does not have the `load` method implemented.");const e=this.handler.load();return tn(e)?e.then(t=>t.getWeightStream==null?this.loadSync(t):this.loadStreaming(t)):this.loadSync(e)}loadSync(e){const t=this.io.decodeWeights(e.weightData,e.weightSpecs);return this.loadWithWeightMap(e,t)}async loadStreaming(e){if(e.getWeightStream==null)throw new Error("Model artifacts missing streamWeights function");const t=await Xc(e.getWeightStream(),e.weightSpecs);return this.loadWithWeightMap(e,t)}loadWithWeightMap(e,t){this.artifacts=e;const r=this.artifacts.modelTopology;let a=this.artifacts.signature;if(this.artifacts.userDefinedMetadata!=null){const s=this.artifacts.userDefinedMetadata;s.signature!=null&&(a=s.signature),s.structuredOutputKeys!=null&&(this.structuredOutputKeys=s.structuredOutputKeys)}if(this.signature=a,this.version=`${r.versions.producer}.${r.versions.minConsumer}`,this.executor=new fs(tm.Instance.transformGraph(r,this.signature)),this.executor.weightMap=this.convertTensorMapToTensorsMap(t),this.executor.resourceManager=this.resourceManager,e.modelInitializer!=null&&e.modelInitializer.node!=null){const s=tm.Instance.transformGraph(e.modelInitializer);this.initializer=new fs(s),this.initializer.weightMap=this.executor.weightMap,this.initializer.resourceManager=this.resourceManager,this.initializerSignature=e.initializerSignature}return!0}async save(e,t){if(typeof e=="string"){const r=this.io.getSaveHandlers(e);if(r.length===0)throw new Error(`Cannot find any save handlers for URL '${e}'`);if(r.length>1)throw new Error(`Found more than one (${r.length}) save handlers for URL '${e}'`);e=r[0]}if(e.save==null)throw new Error("GraphModel.save() cannot proceed because the IOHandler provided does not have the `save` attribute defined.");return e.save(this.artifacts)}addStructuredOutputNames(e){if(this.structuredOutputKeys){const t=e instanceof Be?[e]:e,r={};return t.forEach((a,s)=>r[this.structuredOutputKeys[s]]=a),r}return e}predict(e,t){const r=this.execute(e,this.outputNodes);return this.addStructuredOutputNames(r)}async predictAsync(e,t){const r=await this.executeAsync(e,this.outputNodes);return this.addStructuredOutputNames(r)}normalizeInputs(e){var t;if(!(e instanceof Be)&&!Array.isArray(e)){const s=(t=this.signature)===null||t===void 0?void 0:t.inputs;if(s!=null)for(const i in s){const u=s[i];u.resourceId!=null&&(e[i]=this.resourceIdToCapturedInput[u.resourceId])}return e}e=Array.isArray(e)?e:[e];const r=Object.keys(this.resourceIdToCapturedInput).length;if(e.length+r!==this.inputNodes.length)throw new Error(`Input tensor count mismatch, the graph model has ${this.inputNodes.length-r} non-resource placeholders, while there are ${e.length} input tensors provided.`);let a=0;return this.inputNodes.reduce((s,i)=>{var u,c,l;const o=(l=(c=(u=this.signature)===null||u===void 0?void 0:u.inputs)===null||c===void 0?void 0:c[i])===null||l===void 0?void 0:l.resourceId;return o!=null?s[i]=this.resourceIdToCapturedInput[o]:s[i]=e[a++],s},{})}normalizeOutputs(e){return e=e||this.outputNodes,Array.isArray(e)?e:[e]}executeInitializerGraph(){return this.initializer==null?[]:this.initializerSignature==null?this.initializer.execute({},[]):this.initializer.execute({},Object.keys(this.initializerSignature.outputs))}async executeInitializerGraphAsync(){return this.initializer==null?[]:this.initializerSignature==null?this.initializer.executeAsync({},[]):this.initializer.executeAsync({},Object.keys(this.initializerSignature.outputs))}setResourceIdToCapturedInput(e){if(this.resourceIdToCapturedInput={},this.initializerSignature){const t=this.initializerSignature.outputs,r=Object.keys(t);for(let a=0;a<r.length;a++){const s=r[a],i=t[s];this.resourceIdToCapturedInput[i.resourceId]=e[a]}}}execute(e,t){this.resourceIdToCapturedInput==null&&this.setResourceIdToCapturedInput(this.executeInitializerGraph()),e=this.normalizeInputs(e),t=this.normalizeOutputs(t);const r=this.executor.execute(e,t);return r.length>1?r:r[0]}async executeAsync(e,t){this.resourceIdToCapturedInput==null&&this.setResourceIdToCapturedInput(await this.executeInitializerGraphAsync()),e=this.normalizeInputs(e),t=this.normalizeOutputs(t);const r=await this.executor.executeAsync(e,t);return r.length>1?r:r[0]}getIntermediateTensors(){return this.executor.getIntermediateTensors()}disposeIntermediateTensors(){this.executor.disposeIntermediateTensors()}convertTensorMapToTensorsMap(e){return Object.keys(e).reduce((t,r)=>(t[r]=[e[r]],t),{})}dispose(){this.executor.dispose(),this.initializer&&(this.initializer.dispose(),this.resourceIdToCapturedInput&&Pe(this.resourceIdToCapturedInput)),this.resourceManager.dispose()}}async function oE(n,e={},t=rp){if(n==null)throw new Error("modelUrl in loadGraphModel() cannot be null. Please provide a url or an IOHandler that loads the model");e==null&&(e={}),e.fromTFHub&&typeof n=="string"&&(n=iE(n));const r=new aE(n,e,t);return await r.load(),r}function iE(n){return n.endsWith("/")||(n=n+"/"),`${n}${sE}${rE}`}var uE=""+new URL("tfjs-backend-wasm-BIA8cDLW.wasm",self.location.href).href,lm=""+new URL("tfjs-backend-wasm-simd-BrM3BlWr.wasm",self.location.href).href;const cE=151,lE=1,pE=[4,7,12,29,53],dE=[6,83,86,140],gs=new Uint8Array(cE);for(const n of pE)gs[n]=1;for(const n of dE)gs[n]=2;gs[lE]=3;const ci=n=>Math.round(255/(1+Math.exp(-n)));function mE(n,e,t,r){const a=e*t,s=new Uint8Array(a),i=new Uint8Array(a),u=new Uint8Array(a);for(let c=0;c<a;c++){let l=-1/0,o=-1/0,p=-1/0,d=-1/0;const m=c*r;for(let f=0;f<r;f++){const g=n[m+f],y=gs[f];y===1?l=Math.max(l,g):y===2?o=Math.max(o,g):y===3?p=g:d=Math.max(d,g)}s[c]=ci(l-Math.max(d,o,p)),i[c]=ci(o-Math.max(d,l,p)),u[c]=ci(p-Math.max(d,l,o))}return{w:t,h:e,floor:s,ceil:i,wall:u}}const hE="logits/semantic/BiasAdd",$r=self;let pm=null;async function fE(n){Z().set("WASM_HAS_MULTITHREAD_SUPPORT",!1),Yx({"tfjs-backend-wasm.wasm":uE,"tfjs-backend-wasm-simd.wasm":lm,"tfjs-backend-wasm-threaded-simd.wasm":lm}),await Vh("wasm"),await Uh(),pm=await oE(n),$r.postMessage({type:"ready"})}function gE(n,e,t){const r=performance.now(),a=new Uint8ClampedArray(n),s=new Float32Array(e*t*3);for(let d=0,m=0;d<a.length;d+=4,m+=3)s[m]=a[d]/127.5-1,s[m+1]=a[d+1]/127.5-1,s[m+2]=a[d+2]/127.5-1;const i=Wl(s,[1,t,e,3]),u=pm.execute(i,hE),[,c,l,o]=u.shape,p=mE(u.dataSync(),c,l,o);Pe([i,u]),$r.postMessage({type:"result",frame:p,ms:performance.now()-r},[p.floor.buffer,p.ceil.buffer,p.wall.buffer])}$r.onmessage=n=>{const e=n.data;try{e.type==="init"?fE(e.url).catch(t=>$r.postMessage({type:"error",message:String(t)})):e.type==="frame"&&gE(e.rgba,e.w,e.h)}catch(t){$r.postMessage({type:"error",message:String(t)})}}})();
