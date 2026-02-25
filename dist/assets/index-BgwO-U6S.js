(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))i(o);new MutationObserver(o=>{for(const r of o)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function e(o){const r={};return o.integrity&&(r.integrity=o.integrity),o.referrerPolicy&&(r.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?r.credentials="include":o.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(o){if(o.ep)return;o.ep=!0;const r=e(o);fetch(o.href,r)}})();const Ec="179",Pf=0,cl=1,If=2,Su=1,bu=2,gi=3,Ui=0,In=1,Cn=2,Li=0,Uo=1,Ar=2,ll=3,ul=4,Df=5,Qi=100,Lf=101,Ff=102,Nf=103,Uf=104,kf=200,Bf=201,Of=202,zf=203,Na=204,Ua=205,Hf=206,Vf=207,Gf=208,Wf=209,Xf=210,qf=211,Yf=212,Zf=213,$f=214,ka=0,Ba=1,Oa=2,zo=3,za=4,Ha=5,Va=6,Ga=7,Tu=0,Kf=1,Jf=2,Fi=0,jf=1,Qf=2,tp=3,ep=4,np=5,ip=6,op=7,Eu=300,Ho=301,Vo=302,Wa=303,Xa=304,Nr=306,oo=1e3,no=1001,qa=1002,jn=1003,sp=1004,Zs=1005,ii=1006,jr=1007,io=1008,ri=1009,Au=1010,Ru=1011,ys=1012,Ac=1013,so=1014,_i=1015,Is=1016,Rc=1017,Cc=1018,Ss=1020,Cu=35902,Pu=1021,Iu=1022,Jn=1023,bs=1026,Ts=1027,Du=1028,Pc=1029,Lu=1030,Ic=1031,Dc=1033,wr=33776,yr=33777,Sr=33778,br=33779,Ya=35840,Za=35841,$a=35842,Ka=35843,Ja=36196,ja=37492,Qa=37496,tc=37808,ec=37809,nc=37810,ic=37811,oc=37812,sc=37813,rc=37814,ac=37815,cc=37816,lc=37817,uc=37818,hc=37819,dc=37820,fc=37821,Tr=36492,pc=36494,mc=36495,Fu=36283,gc=36284,xc=36285,_c=36286,rp=3200,ap=3201,Nu=0,cp=1,ni="",Rn="srgb",Go="srgb-linear",Rr="linear",Ue="srgb",xo=7680,hl=519,lp=512,up=513,hp=514,Uu=515,dp=516,fp=517,pp=518,mp=519,dl=35044,fl="300 es",oi=2e3,Cr=2001;class Yo{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(e)===-1&&i[t].push(e)}hasEventListener(t,e){const i=this._listeners;return i===void 0?!1:i[t]!==void 0&&i[t].indexOf(e)!==-1}removeEventListener(t,e){const i=this._listeners;if(i===void 0)return;const o=i[t];if(o!==void 0){const r=o.indexOf(e);r!==-1&&o.splice(r,1)}}dispatchEvent(t){const e=this._listeners;if(e===void 0)return;const i=e[t.type];if(i!==void 0){t.target=this;const o=i.slice(0);for(let r=0,a=o.length;r<a;r++)o[r].call(this,t);t.target=null}}}const fn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let pl=1234567;const gs=Math.PI/180,Es=180/Math.PI;function lo(){const n=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(fn[n&255]+fn[n>>8&255]+fn[n>>16&255]+fn[n>>24&255]+"-"+fn[t&255]+fn[t>>8&255]+"-"+fn[t>>16&15|64]+fn[t>>24&255]+"-"+fn[e&63|128]+fn[e>>8&255]+"-"+fn[e>>16&255]+fn[e>>24&255]+fn[i&255]+fn[i>>8&255]+fn[i>>16&255]+fn[i>>24&255]).toLowerCase()}function Te(n,t,e){return Math.max(t,Math.min(e,n))}function Lc(n,t){return(n%t+t)%t}function gp(n,t,e,i,o){return i+(n-t)*(o-i)/(e-t)}function xp(n,t,e){return n!==t?(e-n)/(t-n):0}function xs(n,t,e){return(1-e)*n+e*t}function _p(n,t,e,i){return xs(n,t,1-Math.exp(-e*i))}function vp(n,t=1){return t-Math.abs(Lc(n,t*2)-t)}function Mp(n,t,e){return n<=t?0:n>=e?1:(n=(n-t)/(e-t),n*n*(3-2*n))}function wp(n,t,e){return n<=t?0:n>=e?1:(n=(n-t)/(e-t),n*n*n*(n*(n*6-15)+10))}function yp(n,t){return n+Math.floor(Math.random()*(t-n+1))}function Sp(n,t){return n+Math.random()*(t-n)}function bp(n){return n*(.5-Math.random())}function Tp(n){n!==void 0&&(pl=n);let t=pl+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function Ep(n){return n*gs}function Ap(n){return n*Es}function Rp(n){return(n&n-1)===0&&n!==0}function Cp(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function Pp(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function Ip(n,t,e,i,o){const r=Math.cos,a=Math.sin,c=r(e/2),l=a(e/2),u=r((t+i)/2),m=a((t+i)/2),g=r((t-i)/2),x=a((t-i)/2),f=r((i-t)/2),v=a((i-t)/2);switch(o){case"XYX":n.set(c*m,l*g,l*x,c*u);break;case"YZY":n.set(l*x,c*m,l*g,c*u);break;case"ZXZ":n.set(l*g,l*x,c*m,c*u);break;case"XZX":n.set(c*m,l*v,l*f,c*u);break;case"YXY":n.set(l*f,c*m,l*v,c*u);break;case"ZYZ":n.set(l*v,l*f,c*m,c*u);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+o)}}function Lo(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function Mn(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}const Tt={DEG2RAD:gs,RAD2DEG:Es,generateUUID:lo,clamp:Te,euclideanModulo:Lc,mapLinear:gp,inverseLerp:xp,lerp:xs,damp:_p,pingpong:vp,smoothstep:Mp,smootherstep:wp,randInt:yp,randFloat:Sp,randFloatSpread:bp,seededRandom:Tp,degToRad:Ep,radToDeg:Ap,isPowerOfTwo:Rp,ceilPowerOfTwo:Cp,floorPowerOfTwo:Pp,setQuaternionFromProperEuler:Ip,normalize:Mn,denormalize:Lo};class Gt{constructor(t=0,e=0){Gt.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,i=this.y,o=t.elements;return this.x=o[0]*e+o[3]*i+o[6],this.y=o[1]*e+o[4]*i+o[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Te(this.x,t.x,e.x),this.y=Te(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=Te(this.x,t,e),this.y=Te(this.y,t,e),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Te(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const i=this.dot(t)/e;return Math.acos(Te(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y;return e*e+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const i=Math.cos(e),o=Math.sin(e),r=this.x-t.x,a=this.y-t.y;return this.x=r*i-a*o+t.x,this.y=r*o+a*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class ro{constructor(t=0,e=0,i=0,o=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=i,this._w=o}static slerpFlat(t,e,i,o,r,a,c){let l=i[o+0],u=i[o+1],m=i[o+2],g=i[o+3];const x=r[a+0],f=r[a+1],v=r[a+2],A=r[a+3];if(c===0){t[e+0]=l,t[e+1]=u,t[e+2]=m,t[e+3]=g;return}if(c===1){t[e+0]=x,t[e+1]=f,t[e+2]=v,t[e+3]=A;return}if(g!==A||l!==x||u!==f||m!==v){let M=1-c;const d=l*x+u*f+m*v+g*A,h=d>=0?1:-1,p=1-d*d;if(p>Number.EPSILON){const T=Math.sqrt(p),w=Math.atan2(T,d*h);M=Math.sin(M*w)/T,c=Math.sin(c*w)/T}const _=c*h;if(l=l*M+x*_,u=u*M+f*_,m=m*M+v*_,g=g*M+A*_,M===1-c){const T=1/Math.sqrt(l*l+u*u+m*m+g*g);l*=T,u*=T,m*=T,g*=T}}t[e]=l,t[e+1]=u,t[e+2]=m,t[e+3]=g}static multiplyQuaternionsFlat(t,e,i,o,r,a){const c=i[o],l=i[o+1],u=i[o+2],m=i[o+3],g=r[a],x=r[a+1],f=r[a+2],v=r[a+3];return t[e]=c*v+m*g+l*f-u*x,t[e+1]=l*v+m*x+u*g-c*f,t[e+2]=u*v+m*f+c*x-l*g,t[e+3]=m*v-c*g-l*x-u*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,i,o){return this._x=t,this._y=e,this._z=i,this._w=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const i=t._x,o=t._y,r=t._z,a=t._order,c=Math.cos,l=Math.sin,u=c(i/2),m=c(o/2),g=c(r/2),x=l(i/2),f=l(o/2),v=l(r/2);switch(a){case"XYZ":this._x=x*m*g+u*f*v,this._y=u*f*g-x*m*v,this._z=u*m*v+x*f*g,this._w=u*m*g-x*f*v;break;case"YXZ":this._x=x*m*g+u*f*v,this._y=u*f*g-x*m*v,this._z=u*m*v-x*f*g,this._w=u*m*g+x*f*v;break;case"ZXY":this._x=x*m*g-u*f*v,this._y=u*f*g+x*m*v,this._z=u*m*v+x*f*g,this._w=u*m*g-x*f*v;break;case"ZYX":this._x=x*m*g-u*f*v,this._y=u*f*g+x*m*v,this._z=u*m*v-x*f*g,this._w=u*m*g+x*f*v;break;case"YZX":this._x=x*m*g+u*f*v,this._y=u*f*g+x*m*v,this._z=u*m*v-x*f*g,this._w=u*m*g-x*f*v;break;case"XZY":this._x=x*m*g-u*f*v,this._y=u*f*g-x*m*v,this._z=u*m*v+x*f*g,this._w=u*m*g+x*f*v;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const i=e/2,o=Math.sin(i);return this._x=t.x*o,this._y=t.y*o,this._z=t.z*o,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,i=e[0],o=e[4],r=e[8],a=e[1],c=e[5],l=e[9],u=e[2],m=e[6],g=e[10],x=i+c+g;if(x>0){const f=.5/Math.sqrt(x+1);this._w=.25/f,this._x=(m-l)*f,this._y=(r-u)*f,this._z=(a-o)*f}else if(i>c&&i>g){const f=2*Math.sqrt(1+i-c-g);this._w=(m-l)/f,this._x=.25*f,this._y=(o+a)/f,this._z=(r+u)/f}else if(c>g){const f=2*Math.sqrt(1+c-i-g);this._w=(r-u)/f,this._x=(o+a)/f,this._y=.25*f,this._z=(l+m)/f}else{const f=2*Math.sqrt(1+g-i-c);this._w=(a-o)/f,this._x=(r+u)/f,this._y=(l+m)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let i=t.dot(e)+1;return i<1e-8?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Te(this.dot(t),-1,1)))}rotateTowards(t,e){const i=this.angleTo(t);if(i===0)return this;const o=Math.min(1,e/i);return this.slerp(t,o),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const i=t._x,o=t._y,r=t._z,a=t._w,c=e._x,l=e._y,u=e._z,m=e._w;return this._x=i*m+a*c+o*u-r*l,this._y=o*m+a*l+r*c-i*u,this._z=r*m+a*u+i*l-o*c,this._w=a*m-i*c-o*l-r*u,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const i=this._x,o=this._y,r=this._z,a=this._w;let c=a*t._w+i*t._x+o*t._y+r*t._z;if(c<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,c=-c):this.copy(t),c>=1)return this._w=a,this._x=i,this._y=o,this._z=r,this;const l=1-c*c;if(l<=Number.EPSILON){const f=1-e;return this._w=f*a+e*this._w,this._x=f*i+e*this._x,this._y=f*o+e*this._y,this._z=f*r+e*this._z,this.normalize(),this}const u=Math.sqrt(l),m=Math.atan2(u,c),g=Math.sin((1-e)*m)/u,x=Math.sin(e*m)/u;return this._w=a*g+this._w*x,this._x=i*g+this._x*x,this._y=o*g+this._y*x,this._z=r*g+this._z*x,this._onChangeCallback(),this}slerpQuaternions(t,e,i){return this.copy(t).slerp(e,i)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),i=Math.random(),o=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(o*Math.sin(t),o*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class z{constructor(t=0,e=0,i=0){z.prototype.isVector3=!0,this.x=t,this.y=e,this.z=i}set(t,e,i){return i===void 0&&(i=this.z),this.x=t,this.y=e,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(ml.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(ml.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,i=this.y,o=this.z,r=t.elements;return this.x=r[0]*e+r[3]*i+r[6]*o,this.y=r[1]*e+r[4]*i+r[7]*o,this.z=r[2]*e+r[5]*i+r[8]*o,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,i=this.y,o=this.z,r=t.elements,a=1/(r[3]*e+r[7]*i+r[11]*o+r[15]);return this.x=(r[0]*e+r[4]*i+r[8]*o+r[12])*a,this.y=(r[1]*e+r[5]*i+r[9]*o+r[13])*a,this.z=(r[2]*e+r[6]*i+r[10]*o+r[14])*a,this}applyQuaternion(t){const e=this.x,i=this.y,o=this.z,r=t.x,a=t.y,c=t.z,l=t.w,u=2*(a*o-c*i),m=2*(c*e-r*o),g=2*(r*i-a*e);return this.x=e+l*u+a*g-c*m,this.y=i+l*m+c*u-r*g,this.z=o+l*g+r*m-a*u,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,i=this.y,o=this.z,r=t.elements;return this.x=r[0]*e+r[4]*i+r[8]*o,this.y=r[1]*e+r[5]*i+r[9]*o,this.z=r[2]*e+r[6]*i+r[10]*o,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Te(this.x,t.x,e.x),this.y=Te(this.y,t.y,e.y),this.z=Te(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=Te(this.x,t,e),this.y=Te(this.y,t,e),this.z=Te(this.z,t,e),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Te(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const i=t.x,o=t.y,r=t.z,a=e.x,c=e.y,l=e.z;return this.x=o*l-r*c,this.y=r*a-i*l,this.z=i*c-o*a,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const i=t.dot(this)/e;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return Qr.copy(this).projectOnVector(t),this.sub(Qr)}reflect(t){return this.sub(Qr.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const i=this.dot(t)/e;return Math.acos(Te(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y,o=this.z-t.z;return e*e+i*i+o*o}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,i){const o=Math.sin(e)*t;return this.x=o*Math.sin(i),this.y=Math.cos(e)*t,this.z=o*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,i){return this.x=t*Math.sin(e),this.y=i,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),o=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=i,this.z=o,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,i=Math.sqrt(1-e*e);return this.x=i*Math.cos(t),this.y=e,this.z=i*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Qr=new z,ml=new ro;class Me{constructor(t,e,i,o,r,a,c,l,u){Me.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,i,o,r,a,c,l,u)}set(t,e,i,o,r,a,c,l,u){const m=this.elements;return m[0]=t,m[1]=o,m[2]=c,m[3]=e,m[4]=r,m[5]=l,m[6]=i,m[7]=a,m[8]=u,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],this}extractBasis(t,e,i){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,o=e.elements,r=this.elements,a=i[0],c=i[3],l=i[6],u=i[1],m=i[4],g=i[7],x=i[2],f=i[5],v=i[8],A=o[0],M=o[3],d=o[6],h=o[1],p=o[4],_=o[7],T=o[2],w=o[5],R=o[8];return r[0]=a*A+c*h+l*T,r[3]=a*M+c*p+l*w,r[6]=a*d+c*_+l*R,r[1]=u*A+m*h+g*T,r[4]=u*M+m*p+g*w,r[7]=u*d+m*_+g*R,r[2]=x*A+f*h+v*T,r[5]=x*M+f*p+v*w,r[8]=x*d+f*_+v*R,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[1],o=t[2],r=t[3],a=t[4],c=t[5],l=t[6],u=t[7],m=t[8];return e*a*m-e*c*u-i*r*m+i*c*l+o*r*u-o*a*l}invert(){const t=this.elements,e=t[0],i=t[1],o=t[2],r=t[3],a=t[4],c=t[5],l=t[6],u=t[7],m=t[8],g=m*a-c*u,x=c*l-m*r,f=u*r-a*l,v=e*g+i*x+o*f;if(v===0)return this.set(0,0,0,0,0,0,0,0,0);const A=1/v;return t[0]=g*A,t[1]=(o*u-m*i)*A,t[2]=(c*i-o*a)*A,t[3]=x*A,t[4]=(m*e-o*l)*A,t[5]=(o*r-c*e)*A,t[6]=f*A,t[7]=(i*l-u*e)*A,t[8]=(a*e-i*r)*A,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,i,o,r,a,c){const l=Math.cos(r),u=Math.sin(r);return this.set(i*l,i*u,-i*(l*a+u*c)+a+t,-o*u,o*l,-o*(-u*a+l*c)+c+e,0,0,1),this}scale(t,e){return this.premultiply(ta.makeScale(t,e)),this}rotate(t){return this.premultiply(ta.makeRotation(-t)),this}translate(t,e){return this.premultiply(ta.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,i,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,i=t.elements;for(let o=0;o<9;o++)if(e[o]!==i[o])return!1;return!0}fromArray(t,e=0){for(let i=0;i<9;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const ta=new Me;function ku(n){for(let t=n.length-1;t>=0;--t)if(n[t]>=65535)return!0;return!1}function Pr(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function Dp(){const n=Pr("canvas");return n.style.display="block",n}const gl={};function ko(n){n in gl||(gl[n]=!0,console.warn(n))}function Lp(n,t,e){return new Promise(function(i,o){function r(){switch(n.clientWaitSync(t,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:o();break;case n.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:i()}}setTimeout(r,e)})}const xl=new Me().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),_l=new Me().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Fp(){const n={enabled:!0,workingColorSpace:Go,spaces:{},convert:function(o,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===Ue&&(o.r=vi(o.r),o.g=vi(o.g),o.b=vi(o.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(o.applyMatrix3(this.spaces[r].toXYZ),o.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===Ue&&(o.r=Bo(o.r),o.g=Bo(o.g),o.b=Bo(o.b))),o},workingToColorSpace:function(o,r){return this.convert(o,this.workingColorSpace,r)},colorSpaceToWorking:function(o,r){return this.convert(o,r,this.workingColorSpace)},getPrimaries:function(o){return this.spaces[o].primaries},getTransfer:function(o){return o===ni?Rr:this.spaces[o].transfer},getLuminanceCoefficients:function(o,r=this.workingColorSpace){return o.fromArray(this.spaces[r].luminanceCoefficients)},define:function(o){Object.assign(this.spaces,o)},_getMatrix:function(o,r,a){return o.copy(this.spaces[r].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(o){return this.spaces[o].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(o=this.workingColorSpace){return this.spaces[o].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(o,r){return ko("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),n.workingToColorSpace(o,r)},toWorkingColorSpace:function(o,r){return ko("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),n.colorSpaceToWorking(o,r)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[Go]:{primaries:t,whitePoint:i,transfer:Rr,toXYZ:xl,fromXYZ:_l,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:Rn},outputColorSpaceConfig:{drawingBufferColorSpace:Rn}},[Rn]:{primaries:t,whitePoint:i,transfer:Ue,toXYZ:xl,fromXYZ:_l,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:Rn}}}),n}const Pe=Fp();function vi(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Bo(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let _o;class Np{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let i;if(t instanceof HTMLCanvasElement)i=t;else{_o===void 0&&(_o=Pr("canvas")),_o.width=t.width,_o.height=t.height;const o=_o.getContext("2d");t instanceof ImageData?o.putImageData(t,0,0):o.drawImage(t,0,0,t.width,t.height),i=_o}return i.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=Pr("canvas");e.width=t.width,e.height=t.height;const i=e.getContext("2d");i.drawImage(t,0,0,t.width,t.height);const o=i.getImageData(0,0,t.width,t.height),r=o.data;for(let a=0;a<r.length;a++)r[a]=vi(r[a]/255)*255;return i.putImageData(o,0,0),e}else if(t.data){const e=t.data.slice(0);for(let i=0;i<e.length;i++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[i]=Math.floor(vi(e[i]/255)*255):e[i]=vi(e[i]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let Up=0;class Fc{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Up++}),this.uuid=lo(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const e=this.data;return e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):e instanceof VideoFrame?t.set(e.displayHeight,e.displayWidth,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const i={uuid:this.uuid,url:""},o=this.data;if(o!==null){let r;if(Array.isArray(o)){r=[];for(let a=0,c=o.length;a<c;a++)o[a].isDataTexture?r.push(ea(o[a].image)):r.push(ea(o[a]))}else r=ea(o);i.url=r}return e||(t.images[this.uuid]=i),i}}function ea(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?Np.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let kp=0;const na=new z;class Sn extends Yo{constructor(t=Sn.DEFAULT_IMAGE,e=Sn.DEFAULT_MAPPING,i=no,o=no,r=ii,a=io,c=Jn,l=ri,u=Sn.DEFAULT_ANISOTROPY,m=ni){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:kp++}),this.uuid=lo(),this.name="",this.source=new Fc(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=i,this.wrapT=o,this.magFilter=r,this.minFilter=a,this.anisotropy=u,this.format=c,this.internalFormat=null,this.type=l,this.offset=new Gt(0,0),this.repeat=new Gt(1,1),this.center=new Gt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Me,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=m,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(na).x}get height(){return this.source.getSize(na).y}get depth(){return this.source.getSize(na).z}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const e in t){const i=t[e];if(i===void 0){console.warn(`THREE.Texture.setValues(): parameter '${e}' has value of undefined.`);continue}const o=this[e];if(o===void 0){console.warn(`THREE.Texture.setValues(): property '${e}' does not exist.`);continue}o&&i&&o.isVector2&&i.isVector2||o&&i&&o.isVector3&&i.isVector3||o&&i&&o.isMatrix3&&i.isMatrix3?o.copy(i):this[e]=i}}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),e||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Eu)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case oo:t.x=t.x-Math.floor(t.x);break;case no:t.x=t.x<0?0:1;break;case qa:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case oo:t.y=t.y-Math.floor(t.y);break;case no:t.y=t.y<0?0:1;break;case qa:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Sn.DEFAULT_IMAGE=null;Sn.DEFAULT_MAPPING=Eu;Sn.DEFAULT_ANISOTROPY=1;class Xe{constructor(t=0,e=0,i=0,o=1){Xe.prototype.isVector4=!0,this.x=t,this.y=e,this.z=i,this.w=o}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,i,o){return this.x=t,this.y=e,this.z=i,this.w=o,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,i=this.y,o=this.z,r=this.w,a=t.elements;return this.x=a[0]*e+a[4]*i+a[8]*o+a[12]*r,this.y=a[1]*e+a[5]*i+a[9]*o+a[13]*r,this.z=a[2]*e+a[6]*i+a[10]*o+a[14]*r,this.w=a[3]*e+a[7]*i+a[11]*o+a[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,i,o,r;const l=t.elements,u=l[0],m=l[4],g=l[8],x=l[1],f=l[5],v=l[9],A=l[2],M=l[6],d=l[10];if(Math.abs(m-x)<.01&&Math.abs(g-A)<.01&&Math.abs(v-M)<.01){if(Math.abs(m+x)<.1&&Math.abs(g+A)<.1&&Math.abs(v+M)<.1&&Math.abs(u+f+d-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const p=(u+1)/2,_=(f+1)/2,T=(d+1)/2,w=(m+x)/4,R=(g+A)/4,C=(v+M)/4;return p>_&&p>T?p<.01?(i=0,o=.707106781,r=.707106781):(i=Math.sqrt(p),o=w/i,r=R/i):_>T?_<.01?(i=.707106781,o=0,r=.707106781):(o=Math.sqrt(_),i=w/o,r=C/o):T<.01?(i=.707106781,o=.707106781,r=0):(r=Math.sqrt(T),i=R/r,o=C/r),this.set(i,o,r,e),this}let h=Math.sqrt((M-v)*(M-v)+(g-A)*(g-A)+(x-m)*(x-m));return Math.abs(h)<.001&&(h=1),this.x=(M-v)/h,this.y=(g-A)/h,this.z=(x-m)/h,this.w=Math.acos((u+f+d-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Te(this.x,t.x,e.x),this.y=Te(this.y,t.y,e.y),this.z=Te(this.z,t.z,e.z),this.w=Te(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=Te(this.x,t,e),this.y=Te(this.y,t,e),this.z=Te(this.z,t,e),this.w=Te(this.w,t,e),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Te(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this.w=t.w+(e.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Bp extends Yo{constructor(t=1,e=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:ii,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},i),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=i.depth,this.scissor=new Xe(0,0,t,e),this.scissorTest=!1,this.viewport=new Xe(0,0,t,e);const o={width:t,height:e,depth:i.depth},r=new Sn(o);this.textures=[];const a=i.count;for(let c=0;c<a;c++)this.textures[c]=r.clone(),this.textures[c].isRenderTargetTexture=!0,this.textures[c].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview}_setTextureOptions(t={}){const e={minFilter:ii,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,i=1){if(this.width!==t||this.height!==e||this.depth!==i){this.width=t,this.height=e,this.depth=i;for(let o=0,r=this.textures.length;o<r;o++)this.textures[o].image.width=t,this.textures[o].image.height=e,this.textures[o].image.depth=i,this.textures[o].isArrayTexture=this.textures[o].image.depth>1;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,i=t.textures.length;e<i;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;const o=Object.assign({},t.textures[e].image);this.textures[e].source=new Fc(o)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class ao extends Bp{constructor(t=1,e=1,i={}){super(t,e,i),this.isWebGLRenderTarget=!0}}class Bu extends Sn{constructor(t=null,e=1,i=1,o=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:i,depth:o},this.magFilter=jn,this.minFilter=jn,this.wrapR=no,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class Op extends Sn{constructor(t=null,e=1,i=1,o=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:i,depth:o},this.magFilter=jn,this.minFilter=jn,this.wrapR=no,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ds{constructor(t=new z(1/0,1/0,1/0),e=new z(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e+=3)this.expandByPoint(Yn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,i=t.count;e<i;e++)this.expandByPoint(Yn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const i=Yn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const i=t.geometry;if(i!==void 0){const r=i.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let a=0,c=r.count;a<c;a++)t.isMesh===!0?t.getVertexPosition(a,Yn):Yn.fromBufferAttribute(r,a),Yn.applyMatrix4(t.matrixWorld),this.expandByPoint(Yn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),$s.copy(t.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),$s.copy(i.boundingBox)),$s.applyMatrix4(t.matrixWorld),this.union($s)}const o=t.children;for(let r=0,a=o.length;r<a;r++)this.expandByObject(o[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Yn),Yn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,i;return t.normal.x>0?(e=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),e<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(cs),Ks.subVectors(this.max,cs),vo.subVectors(t.a,cs),Mo.subVectors(t.b,cs),wo.subVectors(t.c,cs),Ei.subVectors(Mo,vo),Ai.subVectors(wo,Mo),Gi.subVectors(vo,wo);let e=[0,-Ei.z,Ei.y,0,-Ai.z,Ai.y,0,-Gi.z,Gi.y,Ei.z,0,-Ei.x,Ai.z,0,-Ai.x,Gi.z,0,-Gi.x,-Ei.y,Ei.x,0,-Ai.y,Ai.x,0,-Gi.y,Gi.x,0];return!ia(e,vo,Mo,wo,Ks)||(e=[1,0,0,0,1,0,0,0,1],!ia(e,vo,Mo,wo,Ks))?!1:(Js.crossVectors(Ei,Ai),e=[Js.x,Js.y,Js.z],ia(e,vo,Mo,wo,Ks))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Yn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Yn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(hi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),hi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),hi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),hi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),hi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),hi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),hi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),hi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(hi),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const hi=[new z,new z,new z,new z,new z,new z,new z,new z],Yn=new z,$s=new Ds,vo=new z,Mo=new z,wo=new z,Ei=new z,Ai=new z,Gi=new z,cs=new z,Ks=new z,Js=new z,Wi=new z;function ia(n,t,e,i,o){for(let r=0,a=n.length-3;r<=a;r+=3){Wi.fromArray(n,r);const c=o.x*Math.abs(Wi.x)+o.y*Math.abs(Wi.y)+o.z*Math.abs(Wi.z),l=t.dot(Wi),u=e.dot(Wi),m=i.dot(Wi);if(Math.max(-Math.max(l,u,m),Math.min(l,u,m))>c)return!1}return!0}const zp=new Ds,ls=new z,oa=new z;class Ur{constructor(t=new z,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const i=this.center;e!==void 0?i.copy(e):zp.setFromPoints(t).getCenter(i);let o=0;for(let r=0,a=t.length;r<a;r++)o=Math.max(o,i.distanceToSquared(t[r]));return this.radius=Math.sqrt(o),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const i=this.center.distanceToSquared(t);return e.copy(t),i>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;ls.subVectors(t,this.center);const e=ls.lengthSq();if(e>this.radius*this.radius){const i=Math.sqrt(e),o=(i-this.radius)*.5;this.center.addScaledVector(ls,o/i),this.radius+=o}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(oa.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(ls.copy(t.center).add(oa)),this.expandByPoint(ls.copy(t.center).sub(oa))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}const di=new z,sa=new z,js=new z,Ri=new z,ra=new z,Qs=new z,aa=new z;class Nc{constructor(t=new z,e=new z(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,di)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const i=e.dot(this.direction);return i<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=di.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(di.copy(this.origin).addScaledVector(this.direction,e),di.distanceToSquared(t))}distanceSqToSegment(t,e,i,o){sa.copy(t).add(e).multiplyScalar(.5),js.copy(e).sub(t).normalize(),Ri.copy(this.origin).sub(sa);const r=t.distanceTo(e)*.5,a=-this.direction.dot(js),c=Ri.dot(this.direction),l=-Ri.dot(js),u=Ri.lengthSq(),m=Math.abs(1-a*a);let g,x,f,v;if(m>0)if(g=a*l-c,x=a*c-l,v=r*m,g>=0)if(x>=-v)if(x<=v){const A=1/m;g*=A,x*=A,f=g*(g+a*x+2*c)+x*(a*g+x+2*l)+u}else x=r,g=Math.max(0,-(a*x+c)),f=-g*g+x*(x+2*l)+u;else x=-r,g=Math.max(0,-(a*x+c)),f=-g*g+x*(x+2*l)+u;else x<=-v?(g=Math.max(0,-(-a*r+c)),x=g>0?-r:Math.min(Math.max(-r,-l),r),f=-g*g+x*(x+2*l)+u):x<=v?(g=0,x=Math.min(Math.max(-r,-l),r),f=x*(x+2*l)+u):(g=Math.max(0,-(a*r+c)),x=g>0?r:Math.min(Math.max(-r,-l),r),f=-g*g+x*(x+2*l)+u);else x=a>0?-r:r,g=Math.max(0,-(a*x+c)),f=-g*g+x*(x+2*l)+u;return i&&i.copy(this.origin).addScaledVector(this.direction,g),o&&o.copy(sa).addScaledVector(js,x),f}intersectSphere(t,e){di.subVectors(t.center,this.origin);const i=di.dot(this.direction),o=di.dot(di)-i*i,r=t.radius*t.radius;if(o>r)return null;const a=Math.sqrt(r-o),c=i-a,l=i+a;return l<0?null:c<0?this.at(l,e):this.at(c,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(t.normal)+t.constant)/e;return i>=0?i:null}intersectPlane(t,e){const i=this.distanceToPlane(t);return i===null?null:this.at(i,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let i,o,r,a,c,l;const u=1/this.direction.x,m=1/this.direction.y,g=1/this.direction.z,x=this.origin;return u>=0?(i=(t.min.x-x.x)*u,o=(t.max.x-x.x)*u):(i=(t.max.x-x.x)*u,o=(t.min.x-x.x)*u),m>=0?(r=(t.min.y-x.y)*m,a=(t.max.y-x.y)*m):(r=(t.max.y-x.y)*m,a=(t.min.y-x.y)*m),i>a||r>o||((r>i||isNaN(i))&&(i=r),(a<o||isNaN(o))&&(o=a),g>=0?(c=(t.min.z-x.z)*g,l=(t.max.z-x.z)*g):(c=(t.max.z-x.z)*g,l=(t.min.z-x.z)*g),i>l||c>o)||((c>i||i!==i)&&(i=c),(l<o||o!==o)&&(o=l),o<0)?null:this.at(i>=0?i:o,e)}intersectsBox(t){return this.intersectBox(t,di)!==null}intersectTriangle(t,e,i,o,r){ra.subVectors(e,t),Qs.subVectors(i,t),aa.crossVectors(ra,Qs);let a=this.direction.dot(aa),c;if(a>0){if(o)return null;c=1}else if(a<0)c=-1,a=-a;else return null;Ri.subVectors(this.origin,t);const l=c*this.direction.dot(Qs.crossVectors(Ri,Qs));if(l<0)return null;const u=c*this.direction.dot(ra.cross(Ri));if(u<0||l+u>a)return null;const m=-c*Ri.dot(aa);return m<0?null:this.at(m/a,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Be{constructor(t,e,i,o,r,a,c,l,u,m,g,x,f,v,A,M){Be.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,i,o,r,a,c,l,u,m,g,x,f,v,A,M)}set(t,e,i,o,r,a,c,l,u,m,g,x,f,v,A,M){const d=this.elements;return d[0]=t,d[4]=e,d[8]=i,d[12]=o,d[1]=r,d[5]=a,d[9]=c,d[13]=l,d[2]=u,d[6]=m,d[10]=g,d[14]=x,d[3]=f,d[7]=v,d[11]=A,d[15]=M,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Be().fromArray(this.elements)}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],e[9]=i[9],e[10]=i[10],e[11]=i[11],e[12]=i[12],e[13]=i[13],e[14]=i[14],e[15]=i[15],this}copyPosition(t){const e=this.elements,i=t.elements;return e[12]=i[12],e[13]=i[13],e[14]=i[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,i){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(t,e,i){return this.set(t.x,e.x,i.x,0,t.y,e.y,i.y,0,t.z,e.z,i.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,i=t.elements,o=1/yo.setFromMatrixColumn(t,0).length(),r=1/yo.setFromMatrixColumn(t,1).length(),a=1/yo.setFromMatrixColumn(t,2).length();return e[0]=i[0]*o,e[1]=i[1]*o,e[2]=i[2]*o,e[3]=0,e[4]=i[4]*r,e[5]=i[5]*r,e[6]=i[6]*r,e[7]=0,e[8]=i[8]*a,e[9]=i[9]*a,e[10]=i[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,i=t.x,o=t.y,r=t.z,a=Math.cos(i),c=Math.sin(i),l=Math.cos(o),u=Math.sin(o),m=Math.cos(r),g=Math.sin(r);if(t.order==="XYZ"){const x=a*m,f=a*g,v=c*m,A=c*g;e[0]=l*m,e[4]=-l*g,e[8]=u,e[1]=f+v*u,e[5]=x-A*u,e[9]=-c*l,e[2]=A-x*u,e[6]=v+f*u,e[10]=a*l}else if(t.order==="YXZ"){const x=l*m,f=l*g,v=u*m,A=u*g;e[0]=x+A*c,e[4]=v*c-f,e[8]=a*u,e[1]=a*g,e[5]=a*m,e[9]=-c,e[2]=f*c-v,e[6]=A+x*c,e[10]=a*l}else if(t.order==="ZXY"){const x=l*m,f=l*g,v=u*m,A=u*g;e[0]=x-A*c,e[4]=-a*g,e[8]=v+f*c,e[1]=f+v*c,e[5]=a*m,e[9]=A-x*c,e[2]=-a*u,e[6]=c,e[10]=a*l}else if(t.order==="ZYX"){const x=a*m,f=a*g,v=c*m,A=c*g;e[0]=l*m,e[4]=v*u-f,e[8]=x*u+A,e[1]=l*g,e[5]=A*u+x,e[9]=f*u-v,e[2]=-u,e[6]=c*l,e[10]=a*l}else if(t.order==="YZX"){const x=a*l,f=a*u,v=c*l,A=c*u;e[0]=l*m,e[4]=A-x*g,e[8]=v*g+f,e[1]=g,e[5]=a*m,e[9]=-c*m,e[2]=-u*m,e[6]=f*g+v,e[10]=x-A*g}else if(t.order==="XZY"){const x=a*l,f=a*u,v=c*l,A=c*u;e[0]=l*m,e[4]=-g,e[8]=u*m,e[1]=x*g+A,e[5]=a*m,e[9]=f*g-v,e[2]=v*g-f,e[6]=c*m,e[10]=A*g+x}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Hp,t,Vp)}lookAt(t,e,i){const o=this.elements;return Ln.subVectors(t,e),Ln.lengthSq()===0&&(Ln.z=1),Ln.normalize(),Ci.crossVectors(i,Ln),Ci.lengthSq()===0&&(Math.abs(i.z)===1?Ln.x+=1e-4:Ln.z+=1e-4,Ln.normalize(),Ci.crossVectors(i,Ln)),Ci.normalize(),tr.crossVectors(Ln,Ci),o[0]=Ci.x,o[4]=tr.x,o[8]=Ln.x,o[1]=Ci.y,o[5]=tr.y,o[9]=Ln.y,o[2]=Ci.z,o[6]=tr.z,o[10]=Ln.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,o=e.elements,r=this.elements,a=i[0],c=i[4],l=i[8],u=i[12],m=i[1],g=i[5],x=i[9],f=i[13],v=i[2],A=i[6],M=i[10],d=i[14],h=i[3],p=i[7],_=i[11],T=i[15],w=o[0],R=o[4],C=o[8],S=o[12],y=o[1],P=o[5],E=o[9],I=o[13],F=o[2],L=o[6],D=o[10],N=o[14],H=o[3],X=o[7],V=o[11],Z=o[15];return r[0]=a*w+c*y+l*F+u*H,r[4]=a*R+c*P+l*L+u*X,r[8]=a*C+c*E+l*D+u*V,r[12]=a*S+c*I+l*N+u*Z,r[1]=m*w+g*y+x*F+f*H,r[5]=m*R+g*P+x*L+f*X,r[9]=m*C+g*E+x*D+f*V,r[13]=m*S+g*I+x*N+f*Z,r[2]=v*w+A*y+M*F+d*H,r[6]=v*R+A*P+M*L+d*X,r[10]=v*C+A*E+M*D+d*V,r[14]=v*S+A*I+M*N+d*Z,r[3]=h*w+p*y+_*F+T*H,r[7]=h*R+p*P+_*L+T*X,r[11]=h*C+p*E+_*D+T*V,r[15]=h*S+p*I+_*N+T*Z,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[4],o=t[8],r=t[12],a=t[1],c=t[5],l=t[9],u=t[13],m=t[2],g=t[6],x=t[10],f=t[14],v=t[3],A=t[7],M=t[11],d=t[15];return v*(+r*l*g-o*u*g-r*c*x+i*u*x+o*c*f-i*l*f)+A*(+e*l*f-e*u*x+r*a*x-o*a*f+o*u*m-r*l*m)+M*(+e*u*g-e*c*f-r*a*g+i*a*f+r*c*m-i*u*m)+d*(-o*c*m-e*l*g+e*c*x+o*a*g-i*a*x+i*l*m)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,i){const o=this.elements;return t.isVector3?(o[12]=t.x,o[13]=t.y,o[14]=t.z):(o[12]=t,o[13]=e,o[14]=i),this}invert(){const t=this.elements,e=t[0],i=t[1],o=t[2],r=t[3],a=t[4],c=t[5],l=t[6],u=t[7],m=t[8],g=t[9],x=t[10],f=t[11],v=t[12],A=t[13],M=t[14],d=t[15],h=g*M*u-A*x*u+A*l*f-c*M*f-g*l*d+c*x*d,p=v*x*u-m*M*u-v*l*f+a*M*f+m*l*d-a*x*d,_=m*A*u-v*g*u+v*c*f-a*A*f-m*c*d+a*g*d,T=v*g*l-m*A*l-v*c*x+a*A*x+m*c*M-a*g*M,w=e*h+i*p+o*_+r*T;if(w===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const R=1/w;return t[0]=h*R,t[1]=(A*x*r-g*M*r-A*o*f+i*M*f+g*o*d-i*x*d)*R,t[2]=(c*M*r-A*l*r+A*o*u-i*M*u-c*o*d+i*l*d)*R,t[3]=(g*l*r-c*x*r-g*o*u+i*x*u+c*o*f-i*l*f)*R,t[4]=p*R,t[5]=(m*M*r-v*x*r+v*o*f-e*M*f-m*o*d+e*x*d)*R,t[6]=(v*l*r-a*M*r-v*o*u+e*M*u+a*o*d-e*l*d)*R,t[7]=(a*x*r-m*l*r+m*o*u-e*x*u-a*o*f+e*l*f)*R,t[8]=_*R,t[9]=(v*g*r-m*A*r-v*i*f+e*A*f+m*i*d-e*g*d)*R,t[10]=(a*A*r-v*c*r+v*i*u-e*A*u-a*i*d+e*c*d)*R,t[11]=(m*c*r-a*g*r-m*i*u+e*g*u+a*i*f-e*c*f)*R,t[12]=T*R,t[13]=(m*A*o-v*g*o+v*i*x-e*A*x-m*i*M+e*g*M)*R,t[14]=(v*c*o-a*A*o-v*i*l+e*A*l+a*i*M-e*c*M)*R,t[15]=(a*g*o-m*c*o+m*i*l-e*g*l-a*i*x+e*c*x)*R,this}scale(t){const e=this.elements,i=t.x,o=t.y,r=t.z;return e[0]*=i,e[4]*=o,e[8]*=r,e[1]*=i,e[5]*=o,e[9]*=r,e[2]*=i,e[6]*=o,e[10]*=r,e[3]*=i,e[7]*=o,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],o=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,i,o))}makeTranslation(t,e,i){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,i,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,e,-i,0,0,i,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,0,i,0,0,1,0,0,-i,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,0,i,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const i=Math.cos(e),o=Math.sin(e),r=1-i,a=t.x,c=t.y,l=t.z,u=r*a,m=r*c;return this.set(u*a+i,u*c-o*l,u*l+o*c,0,u*c+o*l,m*c+i,m*l-o*a,0,u*l-o*c,m*l+o*a,r*l*l+i,0,0,0,0,1),this}makeScale(t,e,i){return this.set(t,0,0,0,0,e,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,e,i,o,r,a){return this.set(1,i,r,0,t,1,a,0,e,o,1,0,0,0,0,1),this}compose(t,e,i){const o=this.elements,r=e._x,a=e._y,c=e._z,l=e._w,u=r+r,m=a+a,g=c+c,x=r*u,f=r*m,v=r*g,A=a*m,M=a*g,d=c*g,h=l*u,p=l*m,_=l*g,T=i.x,w=i.y,R=i.z;return o[0]=(1-(A+d))*T,o[1]=(f+_)*T,o[2]=(v-p)*T,o[3]=0,o[4]=(f-_)*w,o[5]=(1-(x+d))*w,o[6]=(M+h)*w,o[7]=0,o[8]=(v+p)*R,o[9]=(M-h)*R,o[10]=(1-(x+A))*R,o[11]=0,o[12]=t.x,o[13]=t.y,o[14]=t.z,o[15]=1,this}decompose(t,e,i){const o=this.elements;let r=yo.set(o[0],o[1],o[2]).length();const a=yo.set(o[4],o[5],o[6]).length(),c=yo.set(o[8],o[9],o[10]).length();this.determinant()<0&&(r=-r),t.x=o[12],t.y=o[13],t.z=o[14],Zn.copy(this);const u=1/r,m=1/a,g=1/c;return Zn.elements[0]*=u,Zn.elements[1]*=u,Zn.elements[2]*=u,Zn.elements[4]*=m,Zn.elements[5]*=m,Zn.elements[6]*=m,Zn.elements[8]*=g,Zn.elements[9]*=g,Zn.elements[10]*=g,e.setFromRotationMatrix(Zn),i.x=r,i.y=a,i.z=c,this}makePerspective(t,e,i,o,r,a,c=oi,l=!1){const u=this.elements,m=2*r/(e-t),g=2*r/(i-o),x=(e+t)/(e-t),f=(i+o)/(i-o);let v,A;if(l)v=r/(a-r),A=a*r/(a-r);else if(c===oi)v=-(a+r)/(a-r),A=-2*a*r/(a-r);else if(c===Cr)v=-a/(a-r),A=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+c);return u[0]=m,u[4]=0,u[8]=x,u[12]=0,u[1]=0,u[5]=g,u[9]=f,u[13]=0,u[2]=0,u[6]=0,u[10]=v,u[14]=A,u[3]=0,u[7]=0,u[11]=-1,u[15]=0,this}makeOrthographic(t,e,i,o,r,a,c=oi,l=!1){const u=this.elements,m=2/(e-t),g=2/(i-o),x=-(e+t)/(e-t),f=-(i+o)/(i-o);let v,A;if(l)v=1/(a-r),A=a/(a-r);else if(c===oi)v=-2/(a-r),A=-(a+r)/(a-r);else if(c===Cr)v=-1/(a-r),A=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+c);return u[0]=m,u[4]=0,u[8]=0,u[12]=x,u[1]=0,u[5]=g,u[9]=0,u[13]=f,u[2]=0,u[6]=0,u[10]=v,u[14]=A,u[3]=0,u[7]=0,u[11]=0,u[15]=1,this}equals(t){const e=this.elements,i=t.elements;for(let o=0;o<16;o++)if(e[o]!==i[o])return!1;return!0}fromArray(t,e=0){for(let i=0;i<16;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t[e+9]=i[9],t[e+10]=i[10],t[e+11]=i[11],t[e+12]=i[12],t[e+13]=i[13],t[e+14]=i[14],t[e+15]=i[15],t}}const yo=new z,Zn=new Be,Hp=new z(0,0,0),Vp=new z(1,1,1),Ci=new z,tr=new z,Ln=new z,vl=new Be,Ml=new ro;class Gn{constructor(t=0,e=0,i=0,o=Gn.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=i,this._order=o}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,i,o=this._order){return this._x=t,this._y=e,this._z=i,this._order=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,i=!0){const o=t.elements,r=o[0],a=o[4],c=o[8],l=o[1],u=o[5],m=o[9],g=o[2],x=o[6],f=o[10];switch(e){case"XYZ":this._y=Math.asin(Te(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-m,f),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(x,u),this._z=0);break;case"YXZ":this._x=Math.asin(-Te(m,-1,1)),Math.abs(m)<.9999999?(this._y=Math.atan2(c,f),this._z=Math.atan2(l,u)):(this._y=Math.atan2(-g,r),this._z=0);break;case"ZXY":this._x=Math.asin(Te(x,-1,1)),Math.abs(x)<.9999999?(this._y=Math.atan2(-g,f),this._z=Math.atan2(-a,u)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Te(g,-1,1)),Math.abs(g)<.9999999?(this._x=Math.atan2(x,f),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,u));break;case"YZX":this._z=Math.asin(Te(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-m,u),this._y=Math.atan2(-g,r)):(this._x=0,this._y=Math.atan2(c,f));break;case"XZY":this._z=Math.asin(-Te(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(x,u),this._y=Math.atan2(c,r)):(this._x=Math.atan2(-m,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,i){return vl.makeRotationFromQuaternion(t),this.setFromRotationMatrix(vl,e,i)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Ml.setFromEuler(this),this.setFromQuaternion(Ml,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Gn.DEFAULT_ORDER="XYZ";class Uc{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let Gp=0;const wl=new z,So=new ro,fi=new Be,er=new z,us=new z,Wp=new z,Xp=new ro,yl=new z(1,0,0),Sl=new z(0,1,0),bl=new z(0,0,1),Tl={type:"added"},qp={type:"removed"},bo={type:"childadded",child:null},ca={type:"childremoved",child:null};class un extends Yo{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Gp++}),this.uuid=lo(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=un.DEFAULT_UP.clone();const t=new z,e=new Gn,i=new ro,o=new z(1,1,1);function r(){i.setFromEuler(e,!1)}function a(){e.setFromQuaternion(i,void 0,!1)}e._onChange(r),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:o},modelViewMatrix:{value:new Be},normalMatrix:{value:new Me}}),this.matrix=new Be,this.matrixWorld=new Be,this.matrixAutoUpdate=un.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=un.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Uc,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return So.setFromAxisAngle(t,e),this.quaternion.multiply(So),this}rotateOnWorldAxis(t,e){return So.setFromAxisAngle(t,e),this.quaternion.premultiply(So),this}rotateX(t){return this.rotateOnAxis(yl,t)}rotateY(t){return this.rotateOnAxis(Sl,t)}rotateZ(t){return this.rotateOnAxis(bl,t)}translateOnAxis(t,e){return wl.copy(t).applyQuaternion(this.quaternion),this.position.add(wl.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(yl,t)}translateY(t){return this.translateOnAxis(Sl,t)}translateZ(t){return this.translateOnAxis(bl,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(fi.copy(this.matrixWorld).invert())}lookAt(t,e,i){t.isVector3?er.copy(t):er.set(t,e,i);const o=this.parent;this.updateWorldMatrix(!0,!1),us.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?fi.lookAt(us,er,this.up):fi.lookAt(er,us,this.up),this.quaternion.setFromRotationMatrix(fi),o&&(fi.extractRotation(o.matrixWorld),So.setFromRotationMatrix(fi),this.quaternion.premultiply(So.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Tl),bo.child=t,this.dispatchEvent(bo),bo.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(qp),ca.child=t,this.dispatchEvent(ca),ca.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),fi.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),fi.multiply(t.parent.matrixWorld)),t.applyMatrix4(fi),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Tl),bo.child=t,this.dispatchEvent(bo),bo.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let i=0,o=this.children.length;i<o;i++){const a=this.children[i].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,i=[]){this[t]===e&&i.push(this);const o=this.children;for(let r=0,a=o.length;r<a;r++)o[r].getObjectsByProperty(t,e,i);return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(us,t,Wp),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(us,Xp,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let i=0,o=e.length;i<o;i++)e[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let i=0,o=e.length;i<o;i++)e[i].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let i=0,o=e.length;i<o;i++)e[i].updateMatrixWorld(t)}updateWorldMatrix(t,e){const i=this.parent;if(t===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const o=this.children;for(let r=0,a=o.length;r<a;r++)o[r].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",i={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const o={};o.uuid=this.uuid,o.type=this.type,this.name!==""&&(o.name=this.name),this.castShadow===!0&&(o.castShadow=!0),this.receiveShadow===!0&&(o.receiveShadow=!0),this.visible===!1&&(o.visible=!1),this.frustumCulled===!1&&(o.frustumCulled=!1),this.renderOrder!==0&&(o.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(o.userData=this.userData),o.layers=this.layers.mask,o.matrix=this.matrix.toArray(),o.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(o.matrixAutoUpdate=!1),this.isInstancedMesh&&(o.type="InstancedMesh",o.count=this.count,o.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(o.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(o.type="BatchedMesh",o.perObjectFrustumCulled=this.perObjectFrustumCulled,o.sortObjects=this.sortObjects,o.drawRanges=this._drawRanges,o.reservedRanges=this._reservedRanges,o.geometryInfo=this._geometryInfo.map(c=>({...c,boundingBox:c.boundingBox?c.boundingBox.toJSON():void 0,boundingSphere:c.boundingSphere?c.boundingSphere.toJSON():void 0})),o.instanceInfo=this._instanceInfo.map(c=>({...c})),o.availableInstanceIds=this._availableInstanceIds.slice(),o.availableGeometryIds=this._availableGeometryIds.slice(),o.nextIndexStart=this._nextIndexStart,o.nextVertexStart=this._nextVertexStart,o.geometryCount=this._geometryCount,o.maxInstanceCount=this._maxInstanceCount,o.maxVertexCount=this._maxVertexCount,o.maxIndexCount=this._maxIndexCount,o.geometryInitialized=this._geometryInitialized,o.matricesTexture=this._matricesTexture.toJSON(t),o.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(o.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(o.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(o.boundingBox=this.boundingBox.toJSON()));function r(c,l){return c[l.uuid]===void 0&&(c[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?o.background=this.background.toJSON():this.background.isTexture&&(o.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(o.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){o.geometry=r(t.geometries,this.geometry);const c=this.geometry.parameters;if(c!==void 0&&c.shapes!==void 0){const l=c.shapes;if(Array.isArray(l))for(let u=0,m=l.length;u<m;u++){const g=l[u];r(t.shapes,g)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(o.bindMode=this.bindMode,o.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),o.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const c=[];for(let l=0,u=this.material.length;l<u;l++)c.push(r(t.materials,this.material[l]));o.material=c}else o.material=r(t.materials,this.material);if(this.children.length>0){o.children=[];for(let c=0;c<this.children.length;c++)o.children.push(this.children[c].toJSON(t).object)}if(this.animations.length>0){o.animations=[];for(let c=0;c<this.animations.length;c++){const l=this.animations[c];o.animations.push(r(t.animations,l))}}if(e){const c=a(t.geometries),l=a(t.materials),u=a(t.textures),m=a(t.images),g=a(t.shapes),x=a(t.skeletons),f=a(t.animations),v=a(t.nodes);c.length>0&&(i.geometries=c),l.length>0&&(i.materials=l),u.length>0&&(i.textures=u),m.length>0&&(i.images=m),g.length>0&&(i.shapes=g),x.length>0&&(i.skeletons=x),f.length>0&&(i.animations=f),v.length>0&&(i.nodes=v)}return i.object=o,i;function a(c){const l=[];for(const u in c){const m=c[u];delete m.metadata,l.push(m)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let i=0;i<t.children.length;i++){const o=t.children[i];this.add(o.clone())}return this}}un.DEFAULT_UP=new z(0,1,0);un.DEFAULT_MATRIX_AUTO_UPDATE=!0;un.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const $n=new z,pi=new z,la=new z,mi=new z,To=new z,Eo=new z,El=new z,ua=new z,ha=new z,da=new z,fa=new Xe,pa=new Xe,ma=new Xe;class Kn{constructor(t=new z,e=new z,i=new z){this.a=t,this.b=e,this.c=i}static getNormal(t,e,i,o){o.subVectors(i,e),$n.subVectors(t,e),o.cross($n);const r=o.lengthSq();return r>0?o.multiplyScalar(1/Math.sqrt(r)):o.set(0,0,0)}static getBarycoord(t,e,i,o,r){$n.subVectors(o,e),pi.subVectors(i,e),la.subVectors(t,e);const a=$n.dot($n),c=$n.dot(pi),l=$n.dot(la),u=pi.dot(pi),m=pi.dot(la),g=a*u-c*c;if(g===0)return r.set(0,0,0),null;const x=1/g,f=(u*l-c*m)*x,v=(a*m-c*l)*x;return r.set(1-f-v,v,f)}static containsPoint(t,e,i,o){return this.getBarycoord(t,e,i,o,mi)===null?!1:mi.x>=0&&mi.y>=0&&mi.x+mi.y<=1}static getInterpolation(t,e,i,o,r,a,c,l){return this.getBarycoord(t,e,i,o,mi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,mi.x),l.addScaledVector(a,mi.y),l.addScaledVector(c,mi.z),l)}static getInterpolatedAttribute(t,e,i,o,r,a){return fa.setScalar(0),pa.setScalar(0),ma.setScalar(0),fa.fromBufferAttribute(t,e),pa.fromBufferAttribute(t,i),ma.fromBufferAttribute(t,o),a.setScalar(0),a.addScaledVector(fa,r.x),a.addScaledVector(pa,r.y),a.addScaledVector(ma,r.z),a}static isFrontFacing(t,e,i,o){return $n.subVectors(i,e),pi.subVectors(t,e),$n.cross(pi).dot(o)<0}set(t,e,i){return this.a.copy(t),this.b.copy(e),this.c.copy(i),this}setFromPointsAndIndices(t,e,i,o){return this.a.copy(t[e]),this.b.copy(t[i]),this.c.copy(t[o]),this}setFromAttributeAndIndices(t,e,i,o){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,o),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return $n.subVectors(this.c,this.b),pi.subVectors(this.a,this.b),$n.cross(pi).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Kn.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return Kn.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,i,o,r){return Kn.getInterpolation(t,this.a,this.b,this.c,e,i,o,r)}containsPoint(t){return Kn.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Kn.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const i=this.a,o=this.b,r=this.c;let a,c;To.subVectors(o,i),Eo.subVectors(r,i),ua.subVectors(t,i);const l=To.dot(ua),u=Eo.dot(ua);if(l<=0&&u<=0)return e.copy(i);ha.subVectors(t,o);const m=To.dot(ha),g=Eo.dot(ha);if(m>=0&&g<=m)return e.copy(o);const x=l*g-m*u;if(x<=0&&l>=0&&m<=0)return a=l/(l-m),e.copy(i).addScaledVector(To,a);da.subVectors(t,r);const f=To.dot(da),v=Eo.dot(da);if(v>=0&&f<=v)return e.copy(r);const A=f*u-l*v;if(A<=0&&u>=0&&v<=0)return c=u/(u-v),e.copy(i).addScaledVector(Eo,c);const M=m*v-f*g;if(M<=0&&g-m>=0&&f-v>=0)return El.subVectors(r,o),c=(g-m)/(g-m+(f-v)),e.copy(o).addScaledVector(El,c);const d=1/(M+A+x);return a=A*d,c=x*d,e.copy(i).addScaledVector(To,a).addScaledVector(Eo,c)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const Ou={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Pi={h:0,s:0,l:0},nr={h:0,s:0,l:0};function ga(n,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?n+(t-n)*6*e:e<1/2?t:e<2/3?n+(t-n)*6*(2/3-e):n}class $t{constructor(t,e,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,i)}set(t,e,i){if(e===void 0&&i===void 0){const o=t;o&&o.isColor?this.copy(o):typeof o=="number"?this.setHex(o):typeof o=="string"&&this.setStyle(o)}else this.setRGB(t,e,i);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Rn){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Pe.colorSpaceToWorking(this,e),this}setRGB(t,e,i,o=Pe.workingColorSpace){return this.r=t,this.g=e,this.b=i,Pe.colorSpaceToWorking(this,o),this}setHSL(t,e,i,o=Pe.workingColorSpace){if(t=Lc(t,1),e=Te(e,0,1),i=Te(i,0,1),e===0)this.r=this.g=this.b=i;else{const r=i<=.5?i*(1+e):i+e-i*e,a=2*i-r;this.r=ga(a,r,t+1/3),this.g=ga(a,r,t),this.b=ga(a,r,t-1/3)}return Pe.colorSpaceToWorking(this,o),this}setStyle(t,e=Rn){function i(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let o;if(o=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const a=o[1],c=o[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(c))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(c))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(c))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(o=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=o[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Rn){const i=Ou[t.toLowerCase()];return i!==void 0?this.setHex(i,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=vi(t.r),this.g=vi(t.g),this.b=vi(t.b),this}copyLinearToSRGB(t){return this.r=Bo(t.r),this.g=Bo(t.g),this.b=Bo(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Rn){return Pe.workingToColorSpace(pn.copy(this),t),Math.round(Te(pn.r*255,0,255))*65536+Math.round(Te(pn.g*255,0,255))*256+Math.round(Te(pn.b*255,0,255))}getHexString(t=Rn){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Pe.workingColorSpace){Pe.workingToColorSpace(pn.copy(this),e);const i=pn.r,o=pn.g,r=pn.b,a=Math.max(i,o,r),c=Math.min(i,o,r);let l,u;const m=(c+a)/2;if(c===a)l=0,u=0;else{const g=a-c;switch(u=m<=.5?g/(a+c):g/(2-a-c),a){case i:l=(o-r)/g+(o<r?6:0);break;case o:l=(r-i)/g+2;break;case r:l=(i-o)/g+4;break}l/=6}return t.h=l,t.s=u,t.l=m,t}getRGB(t,e=Pe.workingColorSpace){return Pe.workingToColorSpace(pn.copy(this),e),t.r=pn.r,t.g=pn.g,t.b=pn.b,t}getStyle(t=Rn){Pe.workingToColorSpace(pn.copy(this),t);const e=pn.r,i=pn.g,o=pn.b;return t!==Rn?`color(${t} ${e.toFixed(3)} ${i.toFixed(3)} ${o.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(i*255)},${Math.round(o*255)})`}offsetHSL(t,e,i){return this.getHSL(Pi),this.setHSL(Pi.h+t,Pi.s+e,Pi.l+i)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,i){return this.r=t.r+(e.r-t.r)*i,this.g=t.g+(e.g-t.g)*i,this.b=t.b+(e.b-t.b)*i,this}lerpHSL(t,e){this.getHSL(Pi),t.getHSL(nr);const i=xs(Pi.h,nr.h,e),o=xs(Pi.s,nr.s,e),r=xs(Pi.l,nr.l,e);return this.setHSL(i,o,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,i=this.g,o=this.b,r=t.elements;return this.r=r[0]*e+r[3]*i+r[6]*o,this.g=r[1]*e+r[4]*i+r[7]*o,this.b=r[2]*e+r[5]*i+r[8]*o,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const pn=new $t;$t.NAMES=Ou;let Yp=0;class Zo extends Yo{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Yp++}),this.uuid=lo(),this.name="",this.type="Material",this.blending=Uo,this.side=Ui,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Na,this.blendDst=Ua,this.blendEquation=Qi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new $t(0,0,0),this.blendAlpha=0,this.depthFunc=zo,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=hl,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=xo,this.stencilZFail=xo,this.stencilZPass=xo,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const i=t[e];if(i===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const o=this[e];if(o===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}o&&o.isColor?o.set(i):o&&o.isVector3&&i&&i.isVector3?o.copy(i):this[e]=i}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Uo&&(i.blending=this.blending),this.side!==Ui&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Na&&(i.blendSrc=this.blendSrc),this.blendDst!==Ua&&(i.blendDst=this.blendDst),this.blendEquation!==Qi&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==zo&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==hl&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==xo&&(i.stencilFail=this.stencilFail),this.stencilZFail!==xo&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==xo&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function o(r){const a=[];for(const c in r){const l=r[c];delete l.metadata,a.push(l)}return a}if(e){const r=o(t.textures),a=o(t.images);r.length>0&&(i.textures=r),a.length>0&&(i.images=a)}return i}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let i=null;if(e!==null){const o=e.length;i=new Array(o);for(let r=0;r!==o;++r)i[r]=e[r].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class Ni extends Zo{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new $t(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Gn,this.combine=Tu,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const $e=new z,ir=new Gt;let Zp=0;class nn{constructor(t,e,i=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Zp++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=i,this.usage=dl,this.updateRanges=[],this.gpuType=_i,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,i){t*=this.itemSize,i*=e.itemSize;for(let o=0,r=this.itemSize;o<r;o++)this.array[t+o]=e.array[i+o];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,i=this.count;e<i;e++)ir.fromBufferAttribute(this,e),ir.applyMatrix3(t),this.setXY(e,ir.x,ir.y);else if(this.itemSize===3)for(let e=0,i=this.count;e<i;e++)$e.fromBufferAttribute(this,e),$e.applyMatrix3(t),this.setXYZ(e,$e.x,$e.y,$e.z);return this}applyMatrix4(t){for(let e=0,i=this.count;e<i;e++)$e.fromBufferAttribute(this,e),$e.applyMatrix4(t),this.setXYZ(e,$e.x,$e.y,$e.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)$e.fromBufferAttribute(this,e),$e.applyNormalMatrix(t),this.setXYZ(e,$e.x,$e.y,$e.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)$e.fromBufferAttribute(this,e),$e.transformDirection(t),this.setXYZ(e,$e.x,$e.y,$e.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let i=this.array[t*this.itemSize+e];return this.normalized&&(i=Lo(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=Mn(i,this.array)),this.array[t*this.itemSize+e]=i,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Lo(e,this.array)),e}setX(t,e){return this.normalized&&(e=Mn(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Lo(e,this.array)),e}setY(t,e){return this.normalized&&(e=Mn(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Lo(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Mn(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Lo(e,this.array)),e}setW(t,e){return this.normalized&&(e=Mn(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,i){return t*=this.itemSize,this.normalized&&(e=Mn(e,this.array),i=Mn(i,this.array)),this.array[t+0]=e,this.array[t+1]=i,this}setXYZ(t,e,i,o){return t*=this.itemSize,this.normalized&&(e=Mn(e,this.array),i=Mn(i,this.array),o=Mn(o,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=o,this}setXYZW(t,e,i,o,r){return t*=this.itemSize,this.normalized&&(e=Mn(e,this.array),i=Mn(i,this.array),o=Mn(o,this.array),r=Mn(r,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=o,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==dl&&(t.usage=this.usage),t}}class zu extends nn{constructor(t,e,i){super(new Uint16Array(t),e,i)}}class Hu extends nn{constructor(t,e,i){super(new Uint32Array(t),e,i)}}class Re extends nn{constructor(t,e,i){super(new Float32Array(t),e,i)}}let $p=0;const On=new Be,xa=new un,Ao=new z,Fn=new Ds,hs=new Ds,ln=new z;class Ye extends Yo{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:$p++}),this.uuid=lo(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(ku(t)?Hu:zu)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,i=0){this.groups.push({start:t,count:e,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const r=new Me().getNormalMatrix(t);i.applyNormalMatrix(r),i.needsUpdate=!0}const o=this.attributes.tangent;return o!==void 0&&(o.transformDirection(t),o.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return On.makeRotationFromQuaternion(t),this.applyMatrix4(On),this}rotateX(t){return On.makeRotationX(t),this.applyMatrix4(On),this}rotateY(t){return On.makeRotationY(t),this.applyMatrix4(On),this}rotateZ(t){return On.makeRotationZ(t),this.applyMatrix4(On),this}translate(t,e,i){return On.makeTranslation(t,e,i),this.applyMatrix4(On),this}scale(t,e,i){return On.makeScale(t,e,i),this.applyMatrix4(On),this}lookAt(t){return xa.lookAt(t),xa.updateMatrix(),this.applyMatrix4(xa.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ao).negate(),this.translate(Ao.x,Ao.y,Ao.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const i=[];for(let o=0,r=t.length;o<r;o++){const a=t[o];i.push(a.x,a.y,a.z||0)}this.setAttribute("position",new Re(i,3))}else{const i=Math.min(t.length,e.count);for(let o=0;o<i;o++){const r=t[o];e.setXYZ(o,r.x,r.y,r.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ds);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new z(-1/0,-1/0,-1/0),new z(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let i=0,o=e.length;i<o;i++){const r=e[i];Fn.setFromBufferAttribute(r),this.morphTargetsRelative?(ln.addVectors(this.boundingBox.min,Fn.min),this.boundingBox.expandByPoint(ln),ln.addVectors(this.boundingBox.max,Fn.max),this.boundingBox.expandByPoint(ln)):(this.boundingBox.expandByPoint(Fn.min),this.boundingBox.expandByPoint(Fn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ur);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new z,1/0);return}if(t){const i=this.boundingSphere.center;if(Fn.setFromBufferAttribute(t),e)for(let r=0,a=e.length;r<a;r++){const c=e[r];hs.setFromBufferAttribute(c),this.morphTargetsRelative?(ln.addVectors(Fn.min,hs.min),Fn.expandByPoint(ln),ln.addVectors(Fn.max,hs.max),Fn.expandByPoint(ln)):(Fn.expandByPoint(hs.min),Fn.expandByPoint(hs.max))}Fn.getCenter(i);let o=0;for(let r=0,a=t.count;r<a;r++)ln.fromBufferAttribute(t,r),o=Math.max(o,i.distanceToSquared(ln));if(e)for(let r=0,a=e.length;r<a;r++){const c=e[r],l=this.morphTargetsRelative;for(let u=0,m=c.count;u<m;u++)ln.fromBufferAttribute(c,u),l&&(Ao.fromBufferAttribute(t,u),ln.add(Ao)),o=Math.max(o,i.distanceToSquared(ln))}this.boundingSphere.radius=Math.sqrt(o),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.position,o=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new nn(new Float32Array(4*i.count),4));const a=this.getAttribute("tangent"),c=[],l=[];for(let C=0;C<i.count;C++)c[C]=new z,l[C]=new z;const u=new z,m=new z,g=new z,x=new Gt,f=new Gt,v=new Gt,A=new z,M=new z;function d(C,S,y){u.fromBufferAttribute(i,C),m.fromBufferAttribute(i,S),g.fromBufferAttribute(i,y),x.fromBufferAttribute(r,C),f.fromBufferAttribute(r,S),v.fromBufferAttribute(r,y),m.sub(u),g.sub(u),f.sub(x),v.sub(x);const P=1/(f.x*v.y-v.x*f.y);isFinite(P)&&(A.copy(m).multiplyScalar(v.y).addScaledVector(g,-f.y).multiplyScalar(P),M.copy(g).multiplyScalar(f.x).addScaledVector(m,-v.x).multiplyScalar(P),c[C].add(A),c[S].add(A),c[y].add(A),l[C].add(M),l[S].add(M),l[y].add(M))}let h=this.groups;h.length===0&&(h=[{start:0,count:t.count}]);for(let C=0,S=h.length;C<S;++C){const y=h[C],P=y.start,E=y.count;for(let I=P,F=P+E;I<F;I+=3)d(t.getX(I+0),t.getX(I+1),t.getX(I+2))}const p=new z,_=new z,T=new z,w=new z;function R(C){T.fromBufferAttribute(o,C),w.copy(T);const S=c[C];p.copy(S),p.sub(T.multiplyScalar(T.dot(S))).normalize(),_.crossVectors(w,S);const P=_.dot(l[C])<0?-1:1;a.setXYZW(C,p.x,p.y,p.z,P)}for(let C=0,S=h.length;C<S;++C){const y=h[C],P=y.start,E=y.count;for(let I=P,F=P+E;I<F;I+=3)R(t.getX(I+0)),R(t.getX(I+1)),R(t.getX(I+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new nn(new Float32Array(e.count*3),3),this.setAttribute("normal",i);else for(let x=0,f=i.count;x<f;x++)i.setXYZ(x,0,0,0);const o=new z,r=new z,a=new z,c=new z,l=new z,u=new z,m=new z,g=new z;if(t)for(let x=0,f=t.count;x<f;x+=3){const v=t.getX(x+0),A=t.getX(x+1),M=t.getX(x+2);o.fromBufferAttribute(e,v),r.fromBufferAttribute(e,A),a.fromBufferAttribute(e,M),m.subVectors(a,r),g.subVectors(o,r),m.cross(g),c.fromBufferAttribute(i,v),l.fromBufferAttribute(i,A),u.fromBufferAttribute(i,M),c.add(m),l.add(m),u.add(m),i.setXYZ(v,c.x,c.y,c.z),i.setXYZ(A,l.x,l.y,l.z),i.setXYZ(M,u.x,u.y,u.z)}else for(let x=0,f=e.count;x<f;x+=3)o.fromBufferAttribute(e,x+0),r.fromBufferAttribute(e,x+1),a.fromBufferAttribute(e,x+2),m.subVectors(a,r),g.subVectors(o,r),m.cross(g),i.setXYZ(x+0,m.x,m.y,m.z),i.setXYZ(x+1,m.x,m.y,m.z),i.setXYZ(x+2,m.x,m.y,m.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,i=t.count;e<i;e++)ln.fromBufferAttribute(t,e),ln.normalize(),t.setXYZ(e,ln.x,ln.y,ln.z)}toNonIndexed(){function t(c,l){const u=c.array,m=c.itemSize,g=c.normalized,x=new u.constructor(l.length*m);let f=0,v=0;for(let A=0,M=l.length;A<M;A++){c.isInterleavedBufferAttribute?f=l[A]*c.data.stride+c.offset:f=l[A]*m;for(let d=0;d<m;d++)x[v++]=u[f++]}return new nn(x,m,g)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new Ye,i=this.index.array,o=this.attributes;for(const c in o){const l=o[c],u=t(l,i);e.setAttribute(c,u)}const r=this.morphAttributes;for(const c in r){const l=[],u=r[c];for(let m=0,g=u.length;m<g;m++){const x=u[m],f=t(x,i);l.push(f)}e.morphAttributes[c]=l}e.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let c=0,l=a.length;c<l;c++){const u=a[c];e.addGroup(u.start,u.count,u.materialIndex)}return e}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const u in l)l[u]!==void 0&&(t[u]=l[u]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const i=this.attributes;for(const l in i){const u=i[l];t.data.attributes[l]=u.toJSON(t.data)}const o={};let r=!1;for(const l in this.morphAttributes){const u=this.morphAttributes[l],m=[];for(let g=0,x=u.length;g<x;g++){const f=u[g];m.push(f.toJSON(t.data))}m.length>0&&(o[l]=m,r=!0)}r&&(t.data.morphAttributes=o,t.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));const c=this.boundingSphere;return c!==null&&(t.data.boundingSphere=c.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const i=t.index;i!==null&&this.setIndex(i.clone());const o=t.attributes;for(const u in o){const m=o[u];this.setAttribute(u,m.clone(e))}const r=t.morphAttributes;for(const u in r){const m=[],g=r[u];for(let x=0,f=g.length;x<f;x++)m.push(g[x].clone(e));this.morphAttributes[u]=m}this.morphTargetsRelative=t.morphTargetsRelative;const a=t.groups;for(let u=0,m=a.length;u<m;u++){const g=a[u];this.addGroup(g.start,g.count,g.materialIndex)}const c=t.boundingBox;c!==null&&(this.boundingBox=c.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Al=new Be,Xi=new Nc,or=new Ur,Rl=new z,sr=new z,rr=new z,ar=new z,_a=new z,cr=new z,Cl=new z,lr=new z;class k extends un{constructor(t=new Ye,e=new Ni){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const o=e[i[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=o.length;r<a;r++){const c=o[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[c]=r}}}}getVertexPosition(t,e){const i=this.geometry,o=i.attributes.position,r=i.morphAttributes.position,a=i.morphTargetsRelative;e.fromBufferAttribute(o,t);const c=this.morphTargetInfluences;if(r&&c){cr.set(0,0,0);for(let l=0,u=r.length;l<u;l++){const m=c[l],g=r[l];m!==0&&(_a.fromBufferAttribute(g,t),a?cr.addScaledVector(_a,m):cr.addScaledVector(_a.sub(e),m))}e.add(cr)}return e}raycast(t,e){const i=this.geometry,o=this.material,r=this.matrixWorld;o!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),or.copy(i.boundingSphere),or.applyMatrix4(r),Xi.copy(t.ray).recast(t.near),!(or.containsPoint(Xi.origin)===!1&&(Xi.intersectSphere(or,Rl)===null||Xi.origin.distanceToSquared(Rl)>(t.far-t.near)**2))&&(Al.copy(r).invert(),Xi.copy(t.ray).applyMatrix4(Al),!(i.boundingBox!==null&&Xi.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(t,e,Xi)))}_computeIntersections(t,e,i){let o;const r=this.geometry,a=this.material,c=r.index,l=r.attributes.position,u=r.attributes.uv,m=r.attributes.uv1,g=r.attributes.normal,x=r.groups,f=r.drawRange;if(c!==null)if(Array.isArray(a))for(let v=0,A=x.length;v<A;v++){const M=x[v],d=a[M.materialIndex],h=Math.max(M.start,f.start),p=Math.min(c.count,Math.min(M.start+M.count,f.start+f.count));for(let _=h,T=p;_<T;_+=3){const w=c.getX(_),R=c.getX(_+1),C=c.getX(_+2);o=ur(this,d,t,i,u,m,g,w,R,C),o&&(o.faceIndex=Math.floor(_/3),o.face.materialIndex=M.materialIndex,e.push(o))}}else{const v=Math.max(0,f.start),A=Math.min(c.count,f.start+f.count);for(let M=v,d=A;M<d;M+=3){const h=c.getX(M),p=c.getX(M+1),_=c.getX(M+2);o=ur(this,a,t,i,u,m,g,h,p,_),o&&(o.faceIndex=Math.floor(M/3),e.push(o))}}else if(l!==void 0)if(Array.isArray(a))for(let v=0,A=x.length;v<A;v++){const M=x[v],d=a[M.materialIndex],h=Math.max(M.start,f.start),p=Math.min(l.count,Math.min(M.start+M.count,f.start+f.count));for(let _=h,T=p;_<T;_+=3){const w=_,R=_+1,C=_+2;o=ur(this,d,t,i,u,m,g,w,R,C),o&&(o.faceIndex=Math.floor(_/3),o.face.materialIndex=M.materialIndex,e.push(o))}}else{const v=Math.max(0,f.start),A=Math.min(l.count,f.start+f.count);for(let M=v,d=A;M<d;M+=3){const h=M,p=M+1,_=M+2;o=ur(this,a,t,i,u,m,g,h,p,_),o&&(o.faceIndex=Math.floor(M/3),e.push(o))}}}}function Kp(n,t,e,i,o,r,a,c){let l;if(t.side===In?l=i.intersectTriangle(a,r,o,!0,c):l=i.intersectTriangle(o,r,a,t.side===Ui,c),l===null)return null;lr.copy(c),lr.applyMatrix4(n.matrixWorld);const u=e.ray.origin.distanceTo(lr);return u<e.near||u>e.far?null:{distance:u,point:lr.clone(),object:n}}function ur(n,t,e,i,o,r,a,c,l,u){n.getVertexPosition(c,sr),n.getVertexPosition(l,rr),n.getVertexPosition(u,ar);const m=Kp(n,t,e,i,sr,rr,ar,Cl);if(m){const g=new z;Kn.getBarycoord(Cl,sr,rr,ar,g),o&&(m.uv=Kn.getInterpolatedAttribute(o,c,l,u,g,new Gt)),r&&(m.uv1=Kn.getInterpolatedAttribute(r,c,l,u,g,new Gt)),a&&(m.normal=Kn.getInterpolatedAttribute(a,c,l,u,g,new z),m.normal.dot(i.direction)>0&&m.normal.multiplyScalar(-1));const x={a:c,b:l,c:u,normal:new z,materialIndex:0};Kn.getNormal(sr,rr,ar,x.normal),m.face=x,m.barycoord=g}return m}class Q extends Ye{constructor(t=1,e=1,i=1,o=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:i,widthSegments:o,heightSegments:r,depthSegments:a};const c=this;o=Math.floor(o),r=Math.floor(r),a=Math.floor(a);const l=[],u=[],m=[],g=[];let x=0,f=0;v("z","y","x",-1,-1,i,e,t,a,r,0),v("z","y","x",1,-1,i,e,-t,a,r,1),v("x","z","y",1,1,t,i,e,o,a,2),v("x","z","y",1,-1,t,i,-e,o,a,3),v("x","y","z",1,-1,t,e,i,o,r,4),v("x","y","z",-1,-1,t,e,-i,o,r,5),this.setIndex(l),this.setAttribute("position",new Re(u,3)),this.setAttribute("normal",new Re(m,3)),this.setAttribute("uv",new Re(g,2));function v(A,M,d,h,p,_,T,w,R,C,S){const y=_/R,P=T/C,E=_/2,I=T/2,F=w/2,L=R+1,D=C+1;let N=0,H=0;const X=new z;for(let V=0;V<D;V++){const Z=V*P-I;for(let $=0;$<L;$++){const xt=$*y-E;X[A]=xt*h,X[M]=Z*p,X[d]=F,u.push(X.x,X.y,X.z),X[A]=0,X[M]=0,X[d]=w>0?1:-1,m.push(X.x,X.y,X.z),g.push($/R),g.push(1-V/C),N+=1}}for(let V=0;V<C;V++)for(let Z=0;Z<R;Z++){const $=x+Z+L*V,xt=x+Z+L*(V+1),yt=x+(Z+1)+L*(V+1),j=x+(Z+1)+L*V;l.push($,xt,j),l.push(xt,yt,j),H+=6}c.addGroup(f,H,S),f+=H,x+=N}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Q(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Wo(n){const t={};for(const e in n){t[e]={};for(const i in n[e]){const o=n[e][i];o&&(o.isColor||o.isMatrix3||o.isMatrix4||o.isVector2||o.isVector3||o.isVector4||o.isTexture||o.isQuaternion)?o.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][i]=null):t[e][i]=o.clone():Array.isArray(o)?t[e][i]=o.slice():t[e][i]=o}}return t}function wn(n){const t={};for(let e=0;e<n.length;e++){const i=Wo(n[e]);for(const o in i)t[o]=i[o]}return t}function Jp(n){const t=[];for(let e=0;e<n.length;e++)t.push(n[e].clone());return t}function Vu(n){const t=n.getRenderTarget();return t===null?n.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Pe.workingColorSpace}const jp={clone:Wo,merge:wn};var Qp=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,t0=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class ki extends Zo{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Qp,this.fragmentShader=t0,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Wo(t.uniforms),this.uniformsGroups=Jp(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const o in this.uniforms){const a=this.uniforms[o].value;a&&a.isTexture?e.uniforms[o]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[o]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[o]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[o]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[o]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[o]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[o]={type:"m4",value:a.toArray()}:e.uniforms[o]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const i={};for(const o in this.extensions)this.extensions[o]===!0&&(i[o]=!0);return Object.keys(i).length>0&&(e.extensions=i),e}}class Gu extends un{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Be,this.projectionMatrix=new Be,this.projectionMatrixInverse=new Be,this.coordinateSystem=oi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Ii=new z,Pl=new Gt,Il=new Gt;class Hn extends Gu{constructor(t=50,e=1,i=.1,o=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=o,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=Es*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(gs*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Es*2*Math.atan(Math.tan(gs*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,i){Ii.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Ii.x,Ii.y).multiplyScalar(-t/Ii.z),Ii.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Ii.x,Ii.y).multiplyScalar(-t/Ii.z)}getViewSize(t,e){return this.getViewBounds(t,Pl,Il),e.subVectors(Il,Pl)}setViewOffset(t,e,i,o,r,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=o,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(gs*.5*this.fov)/this.zoom,i=2*e,o=this.aspect*i,r=-.5*o;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,u=a.fullHeight;r+=a.offsetX*o/l,e-=a.offsetY*i/u,o*=a.width/l,i*=a.height/u}const c=this.filmOffset;c!==0&&(r+=t*c/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+o,e,e-i,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const Ro=-90,Co=1;class e0 extends un{constructor(t,e,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const o=new Hn(Ro,Co,t,e);o.layers=this.layers,this.add(o);const r=new Hn(Ro,Co,t,e);r.layers=this.layers,this.add(r);const a=new Hn(Ro,Co,t,e);a.layers=this.layers,this.add(a);const c=new Hn(Ro,Co,t,e);c.layers=this.layers,this.add(c);const l=new Hn(Ro,Co,t,e);l.layers=this.layers,this.add(l);const u=new Hn(Ro,Co,t,e);u.layers=this.layers,this.add(u)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[i,o,r,a,c,l]=e;for(const u of e)this.remove(u);if(t===oi)i.up.set(0,1,0),i.lookAt(1,0,0),o.up.set(0,1,0),o.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),c.up.set(0,1,0),c.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===Cr)i.up.set(0,-1,0),i.lookAt(-1,0,0),o.up.set(0,-1,0),o.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),c.up.set(0,-1,0),c.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const u of e)this.add(u),u.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:o}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,a,c,l,u,m]=this.children,g=t.getRenderTarget(),x=t.getActiveCubeFace(),f=t.getActiveMipmapLevel(),v=t.xr.enabled;t.xr.enabled=!1;const A=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,t.setRenderTarget(i,0,o),t.render(e,r),t.setRenderTarget(i,1,o),t.render(e,a),t.setRenderTarget(i,2,o),t.render(e,c),t.setRenderTarget(i,3,o),t.render(e,l),t.setRenderTarget(i,4,o),t.render(e,u),i.texture.generateMipmaps=A,t.setRenderTarget(i,5,o),t.render(e,m),t.setRenderTarget(g,x,f),t.xr.enabled=v,i.texture.needsPMREMUpdate=!0}}class Wu extends Sn{constructor(t=[],e=Ho,i,o,r,a,c,l,u,m){super(t,e,i,o,r,a,c,l,u,m),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class n0 extends ao{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const i={width:t,height:t,depth:1},o=[i,i,i,i,i,i];this.texture=new Wu(o),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},o=new Q(5,5,5),r=new ki({name:"CubemapFromEquirect",uniforms:Wo(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:In,blending:Li});r.uniforms.tEquirect.value=e;const a=new k(o,r),c=e.minFilter;return e.minFilter===io&&(e.minFilter=ii),new e0(1,10,this).update(t,a),e.minFilter=c,a.geometry.dispose(),a.material.dispose(),this}clear(t,e=!0,i=!0,o=!0){const r=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,i,o);t.setRenderTarget(r)}}class wt extends un{constructor(){super(),this.isGroup=!0,this.type="Group"}}const i0={type:"move"};class va{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new wt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new wt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new z,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new z),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new wt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new z,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new z),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const i of t.hand.values())this._getHandJoint(e,i)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,i){let o=null,r=null,a=null;const c=this._targetRay,l=this._grip,u=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(u&&t.hand){a=!0;for(const A of t.hand.values()){const M=e.getJointPose(A,i),d=this._getHandJoint(u,A);M!==null&&(d.matrix.fromArray(M.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=M.radius),d.visible=M!==null}const m=u.joints["index-finger-tip"],g=u.joints["thumb-tip"],x=m.position.distanceTo(g.position),f=.02,v=.005;u.inputState.pinching&&x>f+v?(u.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!u.inputState.pinching&&x<=f-v&&(u.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));c!==null&&(o=e.getPose(t.targetRaySpace,i),o===null&&r!==null&&(o=r),o!==null&&(c.matrix.fromArray(o.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,o.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(o.linearVelocity)):c.hasLinearVelocity=!1,o.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(o.angularVelocity)):c.hasAngularVelocity=!1,this.dispatchEvent(i0)))}return c!==null&&(c.visible=o!==null),l!==null&&(l.visible=r!==null),u!==null&&(u.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const i=new wt;i.matrixAutoUpdate=!1,i.visible=!1,t.joints[e.jointName]=i,t.add(i)}return t.joints[e.jointName]}}class kc{constructor(t,e=1,i=1e3){this.isFog=!0,this.name="",this.color=new $t(t),this.near=e,this.far=i}clone(){return new kc(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class o0 extends un{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Gn,this.environmentIntensity=1,this.environmentRotation=new Gn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}const Ma=new z,s0=new z,r0=new Me;class Ji{constructor(t=new z(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,i,o){return this.normal.set(t,e,i),this.constant=o,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,i){const o=Ma.subVectors(i,e).cross(s0.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(o,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const i=t.delta(Ma),o=this.normal.dot(i);if(o===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const r=-(t.start.dot(this.normal)+this.constant)/o;return r<0||r>1?null:e.copy(t.start).addScaledVector(i,r)}intersectsLine(t){const e=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return e<0&&i>0||i<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const i=e||r0.getNormalMatrix(t),o=this.coplanarPoint(Ma).applyMatrix4(t),r=this.normal.applyMatrix3(i).normalize();return this.constant=-o.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const qi=new Ur,a0=new Gt(.5,.5),hr=new z;class Bc{constructor(t=new Ji,e=new Ji,i=new Ji,o=new Ji,r=new Ji,a=new Ji){this.planes=[t,e,i,o,r,a]}set(t,e,i,o,r,a){const c=this.planes;return c[0].copy(t),c[1].copy(e),c[2].copy(i),c[3].copy(o),c[4].copy(r),c[5].copy(a),this}copy(t){const e=this.planes;for(let i=0;i<6;i++)e[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t,e=oi,i=!1){const o=this.planes,r=t.elements,a=r[0],c=r[1],l=r[2],u=r[3],m=r[4],g=r[5],x=r[6],f=r[7],v=r[8],A=r[9],M=r[10],d=r[11],h=r[12],p=r[13],_=r[14],T=r[15];if(o[0].setComponents(u-a,f-m,d-v,T-h).normalize(),o[1].setComponents(u+a,f+m,d+v,T+h).normalize(),o[2].setComponents(u+c,f+g,d+A,T+p).normalize(),o[3].setComponents(u-c,f-g,d-A,T-p).normalize(),i)o[4].setComponents(l,x,M,_).normalize(),o[5].setComponents(u-l,f-x,d-M,T-_).normalize();else if(o[4].setComponents(u-l,f-x,d-M,T-_).normalize(),e===oi)o[5].setComponents(u+l,f+x,d+M,T+_).normalize();else if(e===Cr)o[5].setComponents(l,x,M,_).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),qi.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),qi.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(qi)}intersectsSprite(t){qi.center.set(0,0,0);const e=a0.distanceTo(t.center);return qi.radius=.7071067811865476+e,qi.applyMatrix4(t.matrixWorld),this.intersectsSphere(qi)}intersectsSphere(t){const e=this.planes,i=t.center,o=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(i)<o)return!1;return!0}intersectsBox(t){const e=this.planes;for(let i=0;i<6;i++){const o=e[i];if(hr.x=o.normal.x>0?t.max.x:t.min.x,hr.y=o.normal.y>0?t.max.y:t.min.y,hr.z=o.normal.z>0?t.max.z:t.min.z,o.distanceToPoint(hr)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let i=0;i<6;i++)if(e[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Xu extends Zo{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new $t(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const Ir=new z,Dr=new z,Dl=new Be,ds=new Nc,dr=new Ur,wa=new z,Ll=new z;class c0 extends un{constructor(t=new Ye,e=new Xu){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,i=[0];for(let o=1,r=e.count;o<r;o++)Ir.fromBufferAttribute(e,o-1),Dr.fromBufferAttribute(e,o),i[o]=i[o-1],i[o]+=Ir.distanceTo(Dr);t.setAttribute("lineDistance",new Re(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){const i=this.geometry,o=this.matrixWorld,r=t.params.Line.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),dr.copy(i.boundingSphere),dr.applyMatrix4(o),dr.radius+=r,t.ray.intersectsSphere(dr)===!1)return;Dl.copy(o).invert(),ds.copy(t.ray).applyMatrix4(Dl);const c=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=c*c,u=this.isLineSegments?2:1,m=i.index,x=i.attributes.position;if(m!==null){const f=Math.max(0,a.start),v=Math.min(m.count,a.start+a.count);for(let A=f,M=v-1;A<M;A+=u){const d=m.getX(A),h=m.getX(A+1),p=fr(this,t,ds,l,d,h,A);p&&e.push(p)}if(this.isLineLoop){const A=m.getX(v-1),M=m.getX(f),d=fr(this,t,ds,l,A,M,v-1);d&&e.push(d)}}else{const f=Math.max(0,a.start),v=Math.min(x.count,a.start+a.count);for(let A=f,M=v-1;A<M;A+=u){const d=fr(this,t,ds,l,A,A+1,A);d&&e.push(d)}if(this.isLineLoop){const A=fr(this,t,ds,l,v-1,f,v-1);A&&e.push(A)}}}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const o=e[i[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=o.length;r<a;r++){const c=o[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[c]=r}}}}}function fr(n,t,e,i,o,r,a){const c=n.geometry.attributes.position;if(Ir.fromBufferAttribute(c,o),Dr.fromBufferAttribute(c,r),e.distanceSqToSegment(Ir,Dr,wa,Ll)>i)return;wa.applyMatrix4(n.matrixWorld);const u=t.ray.origin.distanceTo(wa);if(!(u<t.near||u>t.far))return{distance:u,point:Ll.clone().applyMatrix4(n.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:n}}const Fl=new z,Nl=new z;class l0 extends c0{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,i=[];for(let o=0,r=e.count;o<r;o+=2)Fl.fromBufferAttribute(e,o),Nl.fromBufferAttribute(e,o+1),i[o]=o===0?0:i[o-1],i[o+1]=i[o]+Fl.distanceTo(Nl);t.setAttribute("lineDistance",new Re(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class qu extends Sn{constructor(t,e,i,o,r,a,c,l,u){super(t,e,i,o,r,a,c,l,u),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Yu extends Sn{constructor(t,e,i=so,o,r,a,c=jn,l=jn,u,m=bs,g=1){if(m!==bs&&m!==Ts)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const x={width:t,height:e,depth:g};super(x,o,r,a,c,l,m,i,u),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new Fc(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}class Di extends Ye{constructor(t=1,e=1,i=4,o=8,r=1){super(),this.type="CapsuleGeometry",this.parameters={radius:t,height:e,capSegments:i,radialSegments:o,heightSegments:r},e=Math.max(0,e),i=Math.max(1,Math.floor(i)),o=Math.max(3,Math.floor(o)),r=Math.max(1,Math.floor(r));const a=[],c=[],l=[],u=[],m=e/2,g=Math.PI/2*t,x=e,f=2*g+x,v=i*2+r,A=o+1,M=new z,d=new z;for(let h=0;h<=v;h++){let p=0,_=0,T=0,w=0;if(h<=i){const S=h/i,y=S*Math.PI/2;_=-m-t*Math.cos(y),T=t*Math.sin(y),w=-t*Math.cos(y),p=S*g}else if(h<=i+r){const S=(h-i)/r;_=-m+S*e,T=t,w=0,p=g+S*x}else{const S=(h-i-r)/i,y=S*Math.PI/2;_=m+t*Math.sin(y),T=t*Math.cos(y),w=t*Math.sin(y),p=g+x+S*g}const R=Math.max(0,Math.min(1,p/f));let C=0;h===0?C=.5/o:h===v&&(C=-.5/o);for(let S=0;S<=o;S++){const y=S/o,P=y*Math.PI*2,E=Math.sin(P),I=Math.cos(P);d.x=-T*I,d.y=_,d.z=T*E,c.push(d.x,d.y,d.z),M.set(-T*I,w,T*E),M.normalize(),l.push(M.x,M.y,M.z),u.push(y+C,R)}if(h>0){const S=(h-1)*A;for(let y=0;y<o;y++){const P=S+y,E=S+y+1,I=h*A+y,F=h*A+y+1;a.push(P,E,I),a.push(E,F,I)}}}this.setIndex(a),this.setAttribute("position",new Re(c,3)),this.setAttribute("normal",new Re(l,3)),this.setAttribute("uv",new Re(u,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Di(t.radius,t.height,t.capSegments,t.radialSegments,t.heightSegments)}}class At extends Ye{constructor(t=1,e=1,i=1,o=32,r=1,a=!1,c=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:i,radialSegments:o,heightSegments:r,openEnded:a,thetaStart:c,thetaLength:l};const u=this;o=Math.floor(o),r=Math.floor(r);const m=[],g=[],x=[],f=[];let v=0;const A=[],M=i/2;let d=0;h(),a===!1&&(t>0&&p(!0),e>0&&p(!1)),this.setIndex(m),this.setAttribute("position",new Re(g,3)),this.setAttribute("normal",new Re(x,3)),this.setAttribute("uv",new Re(f,2));function h(){const _=new z,T=new z;let w=0;const R=(e-t)/i;for(let C=0;C<=r;C++){const S=[],y=C/r,P=y*(e-t)+t;for(let E=0;E<=o;E++){const I=E/o,F=I*l+c,L=Math.sin(F),D=Math.cos(F);T.x=P*L,T.y=-y*i+M,T.z=P*D,g.push(T.x,T.y,T.z),_.set(L,R,D).normalize(),x.push(_.x,_.y,_.z),f.push(I,1-y),S.push(v++)}A.push(S)}for(let C=0;C<o;C++)for(let S=0;S<r;S++){const y=A[S][C],P=A[S+1][C],E=A[S+1][C+1],I=A[S][C+1];(t>0||S!==0)&&(m.push(y,P,I),w+=3),(e>0||S!==r-1)&&(m.push(P,E,I),w+=3)}u.addGroup(d,w,0),d+=w}function p(_){const T=v,w=new Gt,R=new z;let C=0;const S=_===!0?t:e,y=_===!0?1:-1;for(let E=1;E<=o;E++)g.push(0,M*y,0),x.push(0,y,0),f.push(.5,.5),v++;const P=v;for(let E=0;E<=o;E++){const F=E/o*l+c,L=Math.cos(F),D=Math.sin(F);R.x=S*D,R.y=M*y,R.z=S*L,g.push(R.x,R.y,R.z),x.push(0,y,0),w.x=L*.5+.5,w.y=D*.5*y+.5,f.push(w.x,w.y),v++}for(let E=0;E<o;E++){const I=T+E,F=P+E;_===!0?m.push(F,F+1,I):m.push(F+1,F,I),C+=3}u.addGroup(d,C,_===!0?1:2),d+=C}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new At(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Nn extends At{constructor(t=1,e=1,i=32,o=1,r=!1,a=0,c=Math.PI*2){super(0,t,e,i,o,r,a,c),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:i,heightSegments:o,openEnded:r,thetaStart:a,thetaLength:c}}static fromJSON(t){return new Nn(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Ls extends Ye{constructor(t=[],e=[],i=1,o=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:i,detail:o};const r=[],a=[];c(o),u(i),m(),this.setAttribute("position",new Re(r,3)),this.setAttribute("normal",new Re(r.slice(),3)),this.setAttribute("uv",new Re(a,2)),o===0?this.computeVertexNormals():this.normalizeNormals();function c(h){const p=new z,_=new z,T=new z;for(let w=0;w<e.length;w+=3)f(e[w+0],p),f(e[w+1],_),f(e[w+2],T),l(p,_,T,h)}function l(h,p,_,T){const w=T+1,R=[];for(let C=0;C<=w;C++){R[C]=[];const S=h.clone().lerp(_,C/w),y=p.clone().lerp(_,C/w),P=w-C;for(let E=0;E<=P;E++)E===0&&C===w?R[C][E]=S:R[C][E]=S.clone().lerp(y,E/P)}for(let C=0;C<w;C++)for(let S=0;S<2*(w-C)-1;S++){const y=Math.floor(S/2);S%2===0?(x(R[C][y+1]),x(R[C+1][y]),x(R[C][y])):(x(R[C][y+1]),x(R[C+1][y+1]),x(R[C+1][y]))}}function u(h){const p=new z;for(let _=0;_<r.length;_+=3)p.x=r[_+0],p.y=r[_+1],p.z=r[_+2],p.normalize().multiplyScalar(h),r[_+0]=p.x,r[_+1]=p.y,r[_+2]=p.z}function m(){const h=new z;for(let p=0;p<r.length;p+=3){h.x=r[p+0],h.y=r[p+1],h.z=r[p+2];const _=M(h)/2/Math.PI+.5,T=d(h)/Math.PI+.5;a.push(_,1-T)}v(),g()}function g(){for(let h=0;h<a.length;h+=6){const p=a[h+0],_=a[h+2],T=a[h+4],w=Math.max(p,_,T),R=Math.min(p,_,T);w>.9&&R<.1&&(p<.2&&(a[h+0]+=1),_<.2&&(a[h+2]+=1),T<.2&&(a[h+4]+=1))}}function x(h){r.push(h.x,h.y,h.z)}function f(h,p){const _=h*3;p.x=t[_+0],p.y=t[_+1],p.z=t[_+2]}function v(){const h=new z,p=new z,_=new z,T=new z,w=new Gt,R=new Gt,C=new Gt;for(let S=0,y=0;S<r.length;S+=9,y+=6){h.set(r[S+0],r[S+1],r[S+2]),p.set(r[S+3],r[S+4],r[S+5]),_.set(r[S+6],r[S+7],r[S+8]),w.set(a[y+0],a[y+1]),R.set(a[y+2],a[y+3]),C.set(a[y+4],a[y+5]),T.copy(h).add(p).add(_).divideScalar(3);const P=M(T);A(w,y+0,h,P),A(R,y+2,p,P),A(C,y+4,_,P)}}function A(h,p,_,T){T<0&&h.x===1&&(a[p]=h.x-1),_.x===0&&_.z===0&&(a[p]=T/2/Math.PI+.5)}function M(h){return Math.atan2(h.z,-h.x)}function d(h){return Math.atan2(-h.y,Math.sqrt(h.x*h.x+h.z*h.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ls(t.vertices,t.indices,t.radius,t.details)}}class As extends Ls{constructor(t=1,e=0){const i=(1+Math.sqrt(5))/2,o=1/i,r=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-o,-i,0,-o,i,0,o,-i,0,o,i,-o,-i,0,-o,i,0,o,-i,0,o,i,0,-i,0,-o,i,0,-o,-i,0,o,i,0,o],a=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(r,a,t,e),this.type="DodecahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new As(t.radius,t.detail)}}class ai{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){console.warn("THREE.Curve: .getPoint() not implemented.")}getPointAt(t,e){const i=this.getUtoTmapping(t);return this.getPoint(i,e)}getPoints(t=5){const e=[];for(let i=0;i<=t;i++)e.push(this.getPoint(i/t));return e}getSpacedPoints(t=5){const e=[];for(let i=0;i<=t;i++)e.push(this.getPointAt(i/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let i,o=this.getPoint(0),r=0;e.push(0);for(let a=1;a<=t;a++)i=this.getPoint(a/t),r+=i.distanceTo(o),e.push(r),o=i;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e=null){const i=this.getLengths();let o=0;const r=i.length;let a;e?a=e:a=t*i[r-1];let c=0,l=r-1,u;for(;c<=l;)if(o=Math.floor(c+(l-c)/2),u=i[o]-a,u<0)c=o+1;else if(u>0)l=o-1;else{l=o;break}if(o=l,i[o]===a)return o/(r-1);const m=i[o],x=i[o+1]-m,f=(a-m)/x;return(o+f)/(r-1)}getTangent(t,e){let o=t-1e-4,r=t+1e-4;o<0&&(o=0),r>1&&(r=1);const a=this.getPoint(o),c=this.getPoint(r),l=e||(a.isVector2?new Gt:new z);return l.copy(c).sub(a).normalize(),l}getTangentAt(t,e){const i=this.getUtoTmapping(t);return this.getTangent(i,e)}computeFrenetFrames(t,e=!1){const i=new z,o=[],r=[],a=[],c=new z,l=new Be;for(let f=0;f<=t;f++){const v=f/t;o[f]=this.getTangentAt(v,new z)}r[0]=new z,a[0]=new z;let u=Number.MAX_VALUE;const m=Math.abs(o[0].x),g=Math.abs(o[0].y),x=Math.abs(o[0].z);m<=u&&(u=m,i.set(1,0,0)),g<=u&&(u=g,i.set(0,1,0)),x<=u&&i.set(0,0,1),c.crossVectors(o[0],i).normalize(),r[0].crossVectors(o[0],c),a[0].crossVectors(o[0],r[0]);for(let f=1;f<=t;f++){if(r[f]=r[f-1].clone(),a[f]=a[f-1].clone(),c.crossVectors(o[f-1],o[f]),c.length()>Number.EPSILON){c.normalize();const v=Math.acos(Te(o[f-1].dot(o[f]),-1,1));r[f].applyMatrix4(l.makeRotationAxis(c,v))}a[f].crossVectors(o[f],r[f])}if(e===!0){let f=Math.acos(Te(r[0].dot(r[t]),-1,1));f/=t,o[0].dot(c.crossVectors(r[0],r[t]))>0&&(f=-f);for(let v=1;v<=t;v++)r[v].applyMatrix4(l.makeRotationAxis(o[v],f*v)),a[v].crossVectors(o[v],r[v])}return{tangents:o,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class Oc extends ai{constructor(t=0,e=0,i=1,o=1,r=0,a=Math.PI*2,c=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=i,this.yRadius=o,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=c,this.aRotation=l}getPoint(t,e=new Gt){const i=e,o=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=o;for(;r>o;)r-=o;r<Number.EPSILON&&(a?r=0:r=o),this.aClockwise===!0&&!a&&(r===o?r=-o:r=r-o);const c=this.aStartAngle+t*r;let l=this.aX+this.xRadius*Math.cos(c),u=this.aY+this.yRadius*Math.sin(c);if(this.aRotation!==0){const m=Math.cos(this.aRotation),g=Math.sin(this.aRotation),x=l-this.aX,f=u-this.aY;l=x*m-f*g+this.aX,u=x*g+f*m+this.aY}return i.set(l,u)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class u0 extends Oc{constructor(t,e,i,o,r,a){super(t,e,i,i,o,r,a),this.isArcCurve=!0,this.type="ArcCurve"}}function zc(){let n=0,t=0,e=0,i=0;function o(r,a,c,l){n=r,t=c,e=-3*r+3*a-2*c-l,i=2*r-2*a+c+l}return{initCatmullRom:function(r,a,c,l,u){o(a,c,u*(c-r),u*(l-a))},initNonuniformCatmullRom:function(r,a,c,l,u,m,g){let x=(a-r)/u-(c-r)/(u+m)+(c-a)/m,f=(c-a)/m-(l-a)/(m+g)+(l-c)/g;x*=m,f*=m,o(a,c,x,f)},calc:function(r){const a=r*r,c=a*r;return n+t*r+e*a+i*c}}}const pr=new z,ya=new zc,Sa=new zc,ba=new zc;class vc extends ai{constructor(t=[],e=!1,i="centripetal",o=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=i,this.tension=o}getPoint(t,e=new z){const i=e,o=this.points,r=o.length,a=(r-(this.closed?0:1))*t;let c=Math.floor(a),l=a-c;this.closed?c+=c>0?0:(Math.floor(Math.abs(c)/r)+1)*r:l===0&&c===r-1&&(c=r-2,l=1);let u,m;this.closed||c>0?u=o[(c-1)%r]:(pr.subVectors(o[0],o[1]).add(o[0]),u=pr);const g=o[c%r],x=o[(c+1)%r];if(this.closed||c+2<r?m=o[(c+2)%r]:(pr.subVectors(o[r-1],o[r-2]).add(o[r-1]),m=pr),this.curveType==="centripetal"||this.curveType==="chordal"){const f=this.curveType==="chordal"?.5:.25;let v=Math.pow(u.distanceToSquared(g),f),A=Math.pow(g.distanceToSquared(x),f),M=Math.pow(x.distanceToSquared(m),f);A<1e-4&&(A=1),v<1e-4&&(v=A),M<1e-4&&(M=A),ya.initNonuniformCatmullRom(u.x,g.x,x.x,m.x,v,A,M),Sa.initNonuniformCatmullRom(u.y,g.y,x.y,m.y,v,A,M),ba.initNonuniformCatmullRom(u.z,g.z,x.z,m.z,v,A,M)}else this.curveType==="catmullrom"&&(ya.initCatmullRom(u.x,g.x,x.x,m.x,this.tension),Sa.initCatmullRom(u.y,g.y,x.y,m.y,this.tension),ba.initCatmullRom(u.z,g.z,x.z,m.z,this.tension));return i.set(ya.calc(l),Sa.calc(l),ba.calc(l)),i}copy(t){super.copy(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){const o=t.points[e];this.points.push(o.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,i=this.points.length;e<i;e++){const o=this.points[e];t.points.push(o.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){const o=t.points[e];this.points.push(new z().fromArray(o))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function Ul(n,t,e,i,o){const r=(i-t)*.5,a=(o-e)*.5,c=n*n,l=n*c;return(2*e-2*i+r+a)*l+(-3*e+3*i-2*r-a)*c+r*n+e}function h0(n,t){const e=1-n;return e*e*t}function d0(n,t){return 2*(1-n)*n*t}function f0(n,t){return n*n*t}function _s(n,t,e,i){return h0(n,t)+d0(n,e)+f0(n,i)}function p0(n,t){const e=1-n;return e*e*e*t}function m0(n,t){const e=1-n;return 3*e*e*n*t}function g0(n,t){return 3*(1-n)*n*n*t}function x0(n,t){return n*n*n*t}function vs(n,t,e,i,o){return p0(n,t)+m0(n,e)+g0(n,i)+x0(n,o)}class Zu extends ai{constructor(t=new Gt,e=new Gt,i=new Gt,o=new Gt){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=i,this.v3=o}getPoint(t,e=new Gt){const i=e,o=this.v0,r=this.v1,a=this.v2,c=this.v3;return i.set(vs(t,o.x,r.x,a.x,c.x),vs(t,o.y,r.y,a.y,c.y)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class _0 extends ai{constructor(t=new z,e=new z,i=new z,o=new z){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=i,this.v3=o}getPoint(t,e=new z){const i=e,o=this.v0,r=this.v1,a=this.v2,c=this.v3;return i.set(vs(t,o.x,r.x,a.x,c.x),vs(t,o.y,r.y,a.y,c.y),vs(t,o.z,r.z,a.z,c.z)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class $u extends ai{constructor(t=new Gt,e=new Gt){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new Gt){const i=e;return t===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(t).add(this.v1)),i}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new Gt){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class v0 extends ai{constructor(t=new z,e=new z){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new z){const i=e;return t===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(t).add(this.v1)),i}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new z){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Ku extends ai{constructor(t=new Gt,e=new Gt,i=new Gt){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=i}getPoint(t,e=new Gt){const i=e,o=this.v0,r=this.v1,a=this.v2;return i.set(_s(t,o.x,r.x,a.x),_s(t,o.y,r.y,a.y)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Ju extends ai{constructor(t=new z,e=new z,i=new z){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=i}getPoint(t,e=new z){const i=e,o=this.v0,r=this.v1,a=this.v2;return i.set(_s(t,o.x,r.x,a.x),_s(t,o.y,r.y,a.y),_s(t,o.z,r.z,a.z)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class ju extends ai{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new Gt){const i=e,o=this.points,r=(o.length-1)*t,a=Math.floor(r),c=r-a,l=o[a===0?a:a-1],u=o[a],m=o[a>o.length-2?o.length-1:a+1],g=o[a>o.length-3?o.length-1:a+2];return i.set(Ul(c,l.x,u.x,m.x,g.x),Ul(c,l.y,u.y,m.y,g.y)),i}copy(t){super.copy(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){const o=t.points[e];this.points.push(o.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,i=this.points.length;e<i;e++){const o=this.points[e];t.points.push(o.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){const o=t.points[e];this.points.push(new Gt().fromArray(o))}return this}}var Lr=Object.freeze({__proto__:null,ArcCurve:u0,CatmullRomCurve3:vc,CubicBezierCurve:Zu,CubicBezierCurve3:_0,EllipseCurve:Oc,LineCurve:$u,LineCurve3:v0,QuadraticBezierCurve:Ku,QuadraticBezierCurve3:Ju,SplineCurve:ju});class M0 extends ai{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){const t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){const i=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Lr[i](e,t))}return this}getPoint(t,e){const i=t*this.getLength(),o=this.getCurveLengths();let r=0;for(;r<o.length;){if(o[r]>=i){const a=o[r]-i,c=this.curves[r],l=c.getLength(),u=l===0?0:1-a/l;return c.getPointAt(u,e)}r++}return null}getLength(){const t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const t=[];let e=0;for(let i=0,o=this.curves.length;i<o;i++)e+=this.curves[i].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){const e=[];for(let i=0;i<=t;i++)e.push(this.getPoint(i/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){const e=[];let i;for(let o=0,r=this.curves;o<r.length;o++){const a=r[o],c=a.isEllipseCurve?t*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?t*a.points.length:t,l=a.getPoints(c);for(let u=0;u<l.length;u++){const m=l[u];i&&i.equals(m)||(e.push(m),i=m)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,i=t.curves.length;e<i;e++){const o=t.curves[e];this.curves.push(o.clone())}return this.autoClose=t.autoClose,this}toJSON(){const t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,i=this.curves.length;e<i;e++){const o=this.curves[e];t.curves.push(o.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,i=t.curves.length;e<i;e++){const o=t.curves[e];this.curves.push(new Lr[o.type]().fromJSON(o))}return this}}class kl extends M0{constructor(t){super(),this.type="Path",this.currentPoint=new Gt,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,i=t.length;e<i;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){const i=new $u(this.currentPoint.clone(),new Gt(t,e));return this.curves.push(i),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,i,o){const r=new Ku(this.currentPoint.clone(),new Gt(t,e),new Gt(i,o));return this.curves.push(r),this.currentPoint.set(i,o),this}bezierCurveTo(t,e,i,o,r,a){const c=new Zu(this.currentPoint.clone(),new Gt(t,e),new Gt(i,o),new Gt(r,a));return this.curves.push(c),this.currentPoint.set(r,a),this}splineThru(t){const e=[this.currentPoint.clone()].concat(t),i=new ju(e);return this.curves.push(i),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,i,o,r,a){const c=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(t+c,e+l,i,o,r,a),this}absarc(t,e,i,o,r,a){return this.absellipse(t,e,i,i,o,r,a),this}ellipse(t,e,i,o,r,a,c,l){const u=this.currentPoint.x,m=this.currentPoint.y;return this.absellipse(t+u,e+m,i,o,r,a,c,l),this}absellipse(t,e,i,o,r,a,c,l){const u=new Oc(t,e,i,o,r,a,c,l);if(this.curves.length>0){const g=u.getPoint(0);g.equals(this.currentPoint)||this.lineTo(g.x,g.y)}this.curves.push(u);const m=u.getPoint(1);return this.currentPoint.copy(m),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){const t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}}class Qu extends kl{constructor(t){super(t),this.uuid=lo(),this.type="Shape",this.holes=[]}getPointsHoles(t){const e=[];for(let i=0,o=this.holes.length;i<o;i++)e[i]=this.holes[i].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,i=t.holes.length;e<i;e++){const o=t.holes[e];this.holes.push(o.clone())}return this}toJSON(){const t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,i=this.holes.length;e<i;e++){const o=this.holes[e];t.holes.push(o.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,i=t.holes.length;e<i;e++){const o=t.holes[e];this.holes.push(new kl().fromJSON(o))}return this}}function w0(n,t,e=2){const i=t&&t.length,o=i?t[0]*e:n.length;let r=th(n,0,o,e,!0);const a=[];if(!r||r.next===r.prev)return a;let c,l,u;if(i&&(r=E0(n,t,r,e)),n.length>80*e){c=1/0,l=1/0;let m=-1/0,g=-1/0;for(let x=e;x<o;x+=e){const f=n[x],v=n[x+1];f<c&&(c=f),v<l&&(l=v),f>m&&(m=f),v>g&&(g=v)}u=Math.max(m-c,g-l),u=u!==0?32767/u:0}return Rs(r,a,e,c,l,u,0),a}function th(n,t,e,i,o){let r;if(o===k0(n,t,e,i)>0)for(let a=t;a<e;a+=i)r=Bl(a/i|0,n[a],n[a+1],r);else for(let a=e-i;a>=t;a-=i)r=Bl(a/i|0,n[a],n[a+1],r);return r&&Xo(r,r.next)&&(Ps(r),r=r.next),r}function co(n,t){if(!n)return n;t||(t=n);let e=n,i;do if(i=!1,!e.steiner&&(Xo(e,e.next)||Ve(e.prev,e,e.next)===0)){if(Ps(e),e=t=e.prev,e===e.next)break;i=!0}else e=e.next;while(i||e!==t);return t}function Rs(n,t,e,i,o,r,a){if(!n)return;!a&&r&&I0(n,i,o,r);let c=n;for(;n.prev!==n.next;){const l=n.prev,u=n.next;if(r?S0(n,i,o,r):y0(n)){t.push(l.i,n.i,u.i),Ps(n),n=u.next,c=u.next;continue}if(n=u,n===c){a?a===1?(n=b0(co(n),t),Rs(n,t,e,i,o,r,2)):a===2&&T0(n,t,e,i,o,r):Rs(co(n),t,e,i,o,r,1);break}}}function y0(n){const t=n.prev,e=n,i=n.next;if(Ve(t,e,i)>=0)return!1;const o=t.x,r=e.x,a=i.x,c=t.y,l=e.y,u=i.y,m=Math.min(o,r,a),g=Math.min(c,l,u),x=Math.max(o,r,a),f=Math.max(c,l,u);let v=i.next;for(;v!==t;){if(v.x>=m&&v.x<=x&&v.y>=g&&v.y<=f&&ps(o,c,r,l,a,u,v.x,v.y)&&Ve(v.prev,v,v.next)>=0)return!1;v=v.next}return!0}function S0(n,t,e,i){const o=n.prev,r=n,a=n.next;if(Ve(o,r,a)>=0)return!1;const c=o.x,l=r.x,u=a.x,m=o.y,g=r.y,x=a.y,f=Math.min(c,l,u),v=Math.min(m,g,x),A=Math.max(c,l,u),M=Math.max(m,g,x),d=Mc(f,v,t,e,i),h=Mc(A,M,t,e,i);let p=n.prevZ,_=n.nextZ;for(;p&&p.z>=d&&_&&_.z<=h;){if(p.x>=f&&p.x<=A&&p.y>=v&&p.y<=M&&p!==o&&p!==a&&ps(c,m,l,g,u,x,p.x,p.y)&&Ve(p.prev,p,p.next)>=0||(p=p.prevZ,_.x>=f&&_.x<=A&&_.y>=v&&_.y<=M&&_!==o&&_!==a&&ps(c,m,l,g,u,x,_.x,_.y)&&Ve(_.prev,_,_.next)>=0))return!1;_=_.nextZ}for(;p&&p.z>=d;){if(p.x>=f&&p.x<=A&&p.y>=v&&p.y<=M&&p!==o&&p!==a&&ps(c,m,l,g,u,x,p.x,p.y)&&Ve(p.prev,p,p.next)>=0)return!1;p=p.prevZ}for(;_&&_.z<=h;){if(_.x>=f&&_.x<=A&&_.y>=v&&_.y<=M&&_!==o&&_!==a&&ps(c,m,l,g,u,x,_.x,_.y)&&Ve(_.prev,_,_.next)>=0)return!1;_=_.nextZ}return!0}function b0(n,t){let e=n;do{const i=e.prev,o=e.next.next;!Xo(i,o)&&nh(i,e,e.next,o)&&Cs(i,o)&&Cs(o,i)&&(t.push(i.i,e.i,o.i),Ps(e),Ps(e.next),e=n=o),e=e.next}while(e!==n);return co(e)}function T0(n,t,e,i,o,r){let a=n;do{let c=a.next.next;for(;c!==a.prev;){if(a.i!==c.i&&F0(a,c)){let l=ih(a,c);a=co(a,a.next),l=co(l,l.next),Rs(a,t,e,i,o,r,0),Rs(l,t,e,i,o,r,0);return}c=c.next}a=a.next}while(a!==n)}function E0(n,t,e,i){const o=[];for(let r=0,a=t.length;r<a;r++){const c=t[r]*i,l=r<a-1?t[r+1]*i:n.length,u=th(n,c,l,i,!1);u===u.next&&(u.steiner=!0),o.push(L0(u))}o.sort(A0);for(let r=0;r<o.length;r++)e=R0(o[r],e);return e}function A0(n,t){let e=n.x-t.x;if(e===0&&(e=n.y-t.y,e===0)){const i=(n.next.y-n.y)/(n.next.x-n.x),o=(t.next.y-t.y)/(t.next.x-t.x);e=i-o}return e}function R0(n,t){const e=C0(n,t);if(!e)return t;const i=ih(e,n);return co(i,i.next),co(e,e.next)}function C0(n,t){let e=t;const i=n.x,o=n.y;let r=-1/0,a;if(Xo(n,e))return e;do{if(Xo(n,e.next))return e.next;if(o<=e.y&&o>=e.next.y&&e.next.y!==e.y){const g=e.x+(o-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(g<=i&&g>r&&(r=g,a=e.x<e.next.x?e:e.next,g===i))return a}e=e.next}while(e!==t);if(!a)return null;const c=a,l=a.x,u=a.y;let m=1/0;e=a;do{if(i>=e.x&&e.x>=l&&i!==e.x&&eh(o<u?i:r,o,l,u,o<u?r:i,o,e.x,e.y)){const g=Math.abs(o-e.y)/(i-e.x);Cs(e,n)&&(g<m||g===m&&(e.x>a.x||e.x===a.x&&P0(a,e)))&&(a=e,m=g)}e=e.next}while(e!==c);return a}function P0(n,t){return Ve(n.prev,n,t.prev)<0&&Ve(t.next,n,n.next)<0}function I0(n,t,e,i){let o=n;do o.z===0&&(o.z=Mc(o.x,o.y,t,e,i)),o.prevZ=o.prev,o.nextZ=o.next,o=o.next;while(o!==n);o.prevZ.nextZ=null,o.prevZ=null,D0(o)}function D0(n){let t,e=1;do{let i=n,o;n=null;let r=null;for(t=0;i;){t++;let a=i,c=0;for(let u=0;u<e&&(c++,a=a.nextZ,!!a);u++);let l=e;for(;c>0||l>0&&a;)c!==0&&(l===0||!a||i.z<=a.z)?(o=i,i=i.nextZ,c--):(o=a,a=a.nextZ,l--),r?r.nextZ=o:n=o,o.prevZ=r,r=o;i=a}r.nextZ=null,e*=2}while(t>1);return n}function Mc(n,t,e,i,o){return n=(n-e)*o|0,t=(t-i)*o|0,n=(n|n<<8)&16711935,n=(n|n<<4)&252645135,n=(n|n<<2)&858993459,n=(n|n<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,n|t<<1}function L0(n){let t=n,e=n;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==n);return e}function eh(n,t,e,i,o,r,a,c){return(o-a)*(t-c)>=(n-a)*(r-c)&&(n-a)*(i-c)>=(e-a)*(t-c)&&(e-a)*(r-c)>=(o-a)*(i-c)}function ps(n,t,e,i,o,r,a,c){return!(n===a&&t===c)&&eh(n,t,e,i,o,r,a,c)}function F0(n,t){return n.next.i!==t.i&&n.prev.i!==t.i&&!N0(n,t)&&(Cs(n,t)&&Cs(t,n)&&U0(n,t)&&(Ve(n.prev,n,t.prev)||Ve(n,t.prev,t))||Xo(n,t)&&Ve(n.prev,n,n.next)>0&&Ve(t.prev,t,t.next)>0)}function Ve(n,t,e){return(t.y-n.y)*(e.x-t.x)-(t.x-n.x)*(e.y-t.y)}function Xo(n,t){return n.x===t.x&&n.y===t.y}function nh(n,t,e,i){const o=gr(Ve(n,t,e)),r=gr(Ve(n,t,i)),a=gr(Ve(e,i,n)),c=gr(Ve(e,i,t));return!!(o!==r&&a!==c||o===0&&mr(n,e,t)||r===0&&mr(n,i,t)||a===0&&mr(e,n,i)||c===0&&mr(e,t,i))}function mr(n,t,e){return t.x<=Math.max(n.x,e.x)&&t.x>=Math.min(n.x,e.x)&&t.y<=Math.max(n.y,e.y)&&t.y>=Math.min(n.y,e.y)}function gr(n){return n>0?1:n<0?-1:0}function N0(n,t){let e=n;do{if(e.i!==n.i&&e.next.i!==n.i&&e.i!==t.i&&e.next.i!==t.i&&nh(e,e.next,n,t))return!0;e=e.next}while(e!==n);return!1}function Cs(n,t){return Ve(n.prev,n,n.next)<0?Ve(n,t,n.next)>=0&&Ve(n,n.prev,t)>=0:Ve(n,t,n.prev)<0||Ve(n,n.next,t)<0}function U0(n,t){let e=n,i=!1;const o=(n.x+t.x)/2,r=(n.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&o<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(i=!i),e=e.next;while(e!==n);return i}function ih(n,t){const e=wc(n.i,n.x,n.y),i=wc(t.i,t.x,t.y),o=n.next,r=t.prev;return n.next=t,t.prev=n,e.next=o,o.prev=e,i.next=e,e.prev=i,r.next=i,i.prev=r,i}function Bl(n,t,e,i){const o=wc(n,t,e);return i?(o.next=i.next,o.prev=i,i.next.prev=o,i.next=o):(o.prev=o,o.next=o),o}function Ps(n){n.next.prev=n.prev,n.prev.next=n.next,n.prevZ&&(n.prevZ.nextZ=n.nextZ),n.nextZ&&(n.nextZ.prevZ=n.prevZ)}function wc(n,t,e){return{i:n,x:t,y:e,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function k0(n,t,e,i){let o=0;for(let r=t,a=e-i;r<e;r+=i)o+=(n[a]-n[r])*(n[r+1]+n[a+1]),a=r;return o}class B0{static triangulate(t,e,i=2){return w0(t,e,i)}}class Fo{static area(t){const e=t.length;let i=0;for(let o=e-1,r=0;r<e;o=r++)i+=t[o].x*t[r].y-t[r].x*t[o].y;return i*.5}static isClockWise(t){return Fo.area(t)<0}static triangulateShape(t,e){const i=[],o=[],r=[];Ol(t),zl(i,t);let a=t.length;e.forEach(Ol);for(let l=0;l<e.length;l++)o.push(a),a+=e[l].length,zl(i,e[l]);const c=B0.triangulate(i,o);for(let l=0;l<c.length;l+=3)r.push(c.slice(l,l+3));return r}}function Ol(n){const t=n.length;t>2&&n[t-1].equals(n[0])&&n.pop()}function zl(n,t){for(let e=0;e<t.length;e++)n.push(t[e].x),n.push(t[e].y)}class Hc extends Ye{constructor(t=new Qu([new Gt(.5,.5),new Gt(-.5,.5),new Gt(-.5,-.5),new Gt(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];const i=this,o=[],r=[];for(let c=0,l=t.length;c<l;c++){const u=t[c];a(u)}this.setAttribute("position",new Re(o,3)),this.setAttribute("uv",new Re(r,2)),this.computeVertexNormals();function a(c){const l=[],u=e.curveSegments!==void 0?e.curveSegments:12,m=e.steps!==void 0?e.steps:1,g=e.depth!==void 0?e.depth:1;let x=e.bevelEnabled!==void 0?e.bevelEnabled:!0,f=e.bevelThickness!==void 0?e.bevelThickness:.2,v=e.bevelSize!==void 0?e.bevelSize:f-.1,A=e.bevelOffset!==void 0?e.bevelOffset:0,M=e.bevelSegments!==void 0?e.bevelSegments:3;const d=e.extrudePath,h=e.UVGenerator!==void 0?e.UVGenerator:O0;let p,_=!1,T,w,R,C;d&&(p=d.getSpacedPoints(m),_=!0,x=!1,T=d.computeFrenetFrames(m,!1),w=new z,R=new z,C=new z),x||(M=0,f=0,v=0,A=0);const S=c.extractPoints(u);let y=S.shape;const P=S.holes;if(!Fo.isClockWise(y)){y=y.reverse();for(let at=0,st=P.length;at<st;at++){const ht=P[at];Fo.isClockWise(ht)&&(P[at]=ht.reverse())}}function I(at){const ht=10000000000000001e-36;let dt=at[0];for(let Pt=1;Pt<=at.length;Pt++){const Ct=Pt%at.length,Ot=at[Ct],xe=Ot.x-dt.x,fe=Ot.y-dt.y,W=xe*xe+fe*fe,U=Math.max(Math.abs(Ot.x),Math.abs(Ot.y),Math.abs(dt.x),Math.abs(dt.y)),it=ht*U*U;if(W<=it){at.splice(Ct,1),Pt--;continue}dt=Ot}}I(y),P.forEach(I);const F=P.length,L=y;for(let at=0;at<F;at++){const st=P[at];y=y.concat(st)}function D(at,st,ht){return st||console.error("THREE.ExtrudeGeometry: vec does not exist"),at.clone().addScaledVector(st,ht)}const N=y.length;function H(at,st,ht){let dt,Pt,Ct;const Ot=at.x-st.x,xe=at.y-st.y,fe=ht.x-at.x,W=ht.y-at.y,U=Ot*Ot+xe*xe,it=Ot*W-xe*fe;if(Math.abs(it)>Number.EPSILON){const ft=Math.sqrt(U),Dt=Math.sqrt(fe*fe+W*W),gt=st.x-xe/ft,ae=st.y+Ot/ft,zt=ht.x-W/Dt,ee=ht.y+fe/Dt,oe=((zt-gt)*W-(ee-ae)*fe)/(Ot*W-xe*fe);dt=gt+Ot*oe-at.x,Pt=ae+xe*oe-at.y;const Ft=dt*dt+Pt*Pt;if(Ft<=2)return new Gt(dt,Pt);Ct=Math.sqrt(Ft/2)}else{let ft=!1;Ot>Number.EPSILON?fe>Number.EPSILON&&(ft=!0):Ot<-Number.EPSILON?fe<-Number.EPSILON&&(ft=!0):Math.sign(xe)===Math.sign(W)&&(ft=!0),ft?(dt=-xe,Pt=Ot,Ct=Math.sqrt(U)):(dt=Ot,Pt=xe,Ct=Math.sqrt(U/2))}return new Gt(dt/Ct,Pt/Ct)}const X=[];for(let at=0,st=L.length,ht=st-1,dt=at+1;at<st;at++,ht++,dt++)ht===st&&(ht=0),dt===st&&(dt=0),X[at]=H(L[at],L[ht],L[dt]);const V=[];let Z,$=X.concat();for(let at=0,st=F;at<st;at++){const ht=P[at];Z=[];for(let dt=0,Pt=ht.length,Ct=Pt-1,Ot=dt+1;dt<Pt;dt++,Ct++,Ot++)Ct===Pt&&(Ct=0),Ot===Pt&&(Ot=0),Z[dt]=H(ht[dt],ht[Ct],ht[Ot]);V.push(Z),$=$.concat(Z)}let xt;if(M===0)xt=Fo.triangulateShape(L,P);else{const at=[],st=[];for(let ht=0;ht<M;ht++){const dt=ht/M,Pt=f*Math.cos(dt*Math.PI/2),Ct=v*Math.sin(dt*Math.PI/2)+A;for(let Ot=0,xe=L.length;Ot<xe;Ot++){const fe=D(L[Ot],X[Ot],Ct);mt(fe.x,fe.y,-Pt),dt===0&&at.push(fe)}for(let Ot=0,xe=F;Ot<xe;Ot++){const fe=P[Ot];Z=V[Ot];const W=[];for(let U=0,it=fe.length;U<it;U++){const ft=D(fe[U],Z[U],Ct);mt(ft.x,ft.y,-Pt),dt===0&&W.push(ft)}dt===0&&st.push(W)}}xt=Fo.triangulateShape(at,st)}const yt=xt.length,j=v+A;for(let at=0;at<N;at++){const st=x?D(y[at],$[at],j):y[at];_?(R.copy(T.normals[0]).multiplyScalar(st.x),w.copy(T.binormals[0]).multiplyScalar(st.y),C.copy(p[0]).add(R).add(w),mt(C.x,C.y,C.z)):mt(st.x,st.y,0)}for(let at=1;at<=m;at++)for(let st=0;st<N;st++){const ht=x?D(y[st],$[st],j):y[st];_?(R.copy(T.normals[at]).multiplyScalar(ht.x),w.copy(T.binormals[at]).multiplyScalar(ht.y),C.copy(p[at]).add(R).add(w),mt(C.x,C.y,C.z)):mt(ht.x,ht.y,g/m*at)}for(let at=M-1;at>=0;at--){const st=at/M,ht=f*Math.cos(st*Math.PI/2),dt=v*Math.sin(st*Math.PI/2)+A;for(let Pt=0,Ct=L.length;Pt<Ct;Pt++){const Ot=D(L[Pt],X[Pt],dt);mt(Ot.x,Ot.y,g+ht)}for(let Pt=0,Ct=P.length;Pt<Ct;Pt++){const Ot=P[Pt];Z=V[Pt];for(let xe=0,fe=Ot.length;xe<fe;xe++){const W=D(Ot[xe],Z[xe],dt);_?mt(W.x,W.y+p[m-1].y,p[m-1].x+ht):mt(W.x,W.y,g+ht)}}}ot(),tt();function ot(){const at=o.length/3;if(x){let st=0,ht=N*st;for(let dt=0;dt<yt;dt++){const Pt=xt[dt];rt(Pt[2]+ht,Pt[1]+ht,Pt[0]+ht)}st=m+M*2,ht=N*st;for(let dt=0;dt<yt;dt++){const Pt=xt[dt];rt(Pt[0]+ht,Pt[1]+ht,Pt[2]+ht)}}else{for(let st=0;st<yt;st++){const ht=xt[st];rt(ht[2],ht[1],ht[0])}for(let st=0;st<yt;st++){const ht=xt[st];rt(ht[0]+N*m,ht[1]+N*m,ht[2]+N*m)}}i.addGroup(at,o.length/3-at,0)}function tt(){const at=o.length/3;let st=0;_t(L,st),st+=L.length;for(let ht=0,dt=P.length;ht<dt;ht++){const Pt=P[ht];_t(Pt,st),st+=Pt.length}i.addGroup(at,o.length/3-at,1)}function _t(at,st){let ht=at.length;for(;--ht>=0;){const dt=ht;let Pt=ht-1;Pt<0&&(Pt=at.length-1);for(let Ct=0,Ot=m+M*2;Ct<Ot;Ct++){const xe=N*Ct,fe=N*(Ct+1),W=st+dt+xe,U=st+Pt+xe,it=st+Pt+fe,ft=st+dt+fe;Rt(W,U,it,ft)}}}function mt(at,st,ht){l.push(at),l.push(st),l.push(ht)}function rt(at,st,ht){St(at),St(st),St(ht);const dt=o.length/3,Pt=h.generateTopUV(i,o,dt-3,dt-2,dt-1);G(Pt[0]),G(Pt[1]),G(Pt[2])}function Rt(at,st,ht,dt){St(at),St(st),St(dt),St(st),St(ht),St(dt);const Pt=o.length/3,Ct=h.generateSideWallUV(i,o,Pt-6,Pt-3,Pt-2,Pt-1);G(Ct[0]),G(Ct[1]),G(Ct[3]),G(Ct[1]),G(Ct[2]),G(Ct[3])}function St(at){o.push(l[at*3+0]),o.push(l[at*3+1]),o.push(l[at*3+2])}function G(at){r.push(at.x),r.push(at.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON(),e=this.parameters.shapes,i=this.parameters.options;return z0(e,i,t)}static fromJSON(t,e){const i=[];for(let r=0,a=t.shapes.length;r<a;r++){const c=e[t.shapes[r]];i.push(c)}const o=t.options.extrudePath;return o!==void 0&&(t.options.extrudePath=new Lr[o.type]().fromJSON(o)),new Hc(i,t.options)}}const O0={generateTopUV:function(n,t,e,i,o){const r=t[e*3],a=t[e*3+1],c=t[i*3],l=t[i*3+1],u=t[o*3],m=t[o*3+1];return[new Gt(r,a),new Gt(c,l),new Gt(u,m)]},generateSideWallUV:function(n,t,e,i,o,r){const a=t[e*3],c=t[e*3+1],l=t[e*3+2],u=t[i*3],m=t[i*3+1],g=t[i*3+2],x=t[o*3],f=t[o*3+1],v=t[o*3+2],A=t[r*3],M=t[r*3+1],d=t[r*3+2];return Math.abs(c-m)<Math.abs(a-u)?[new Gt(a,1-l),new Gt(u,1-g),new Gt(x,1-v),new Gt(A,1-d)]:[new Gt(c,1-l),new Gt(m,1-g),new Gt(f,1-v),new Gt(M,1-d)]}};function z0(n,t,e){if(e.shapes=[],Array.isArray(n))for(let i=0,o=n.length;i<o;i++){const r=n[i];e.shapes.push(r.uuid)}else e.shapes.push(n.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}class qo extends Ls{constructor(t=1,e=0){const i=(1+Math.sqrt(5))/2,o=[-1,i,0,1,i,0,-1,-i,0,1,-i,0,0,-1,i,0,1,i,0,-1,-i,0,1,-i,i,0,-1,i,0,1,-i,0,-1,-i,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(o,r,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new qo(t.radius,t.detail)}}class kr extends Ls{constructor(t=1,e=0){const i=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],o=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(i,o,t,e),this.type="OctahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new kr(t.radius,t.detail)}}class uo extends Ye{constructor(t=1,e=1,i=1,o=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:i,heightSegments:o};const r=t/2,a=e/2,c=Math.floor(i),l=Math.floor(o),u=c+1,m=l+1,g=t/c,x=e/l,f=[],v=[],A=[],M=[];for(let d=0;d<m;d++){const h=d*x-a;for(let p=0;p<u;p++){const _=p*g-r;v.push(_,-h,0),A.push(0,0,1),M.push(p/c),M.push(1-d/l)}}for(let d=0;d<l;d++)for(let h=0;h<c;h++){const p=h+u*d,_=h+u*(d+1),T=h+1+u*(d+1),w=h+1+u*d;f.push(p,_,w),f.push(_,T,w)}this.setIndex(f),this.setAttribute("position",new Re(v,3)),this.setAttribute("normal",new Re(A,3)),this.setAttribute("uv",new Re(M,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new uo(t.width,t.height,t.widthSegments,t.heightSegments)}}class Ms extends Ye{constructor(t=.5,e=1,i=32,o=1,r=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:i,phiSegments:o,thetaStart:r,thetaLength:a},i=Math.max(3,i),o=Math.max(1,o);const c=[],l=[],u=[],m=[];let g=t;const x=(e-t)/o,f=new z,v=new Gt;for(let A=0;A<=o;A++){for(let M=0;M<=i;M++){const d=r+M/i*a;f.x=g*Math.cos(d),f.y=g*Math.sin(d),l.push(f.x,f.y,f.z),u.push(0,0,1),v.x=(f.x/e+1)/2,v.y=(f.y/e+1)/2,m.push(v.x,v.y)}g+=x}for(let A=0;A<o;A++){const M=A*(i+1);for(let d=0;d<i;d++){const h=d+M,p=h,_=h+i+1,T=h+i+2,w=h+1;c.push(p,_,w),c.push(_,T,w)}}this.setIndex(c),this.setAttribute("position",new Re(l,3)),this.setAttribute("normal",new Re(u,3)),this.setAttribute("uv",new Re(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ms(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}}class en extends Ye{constructor(t=1,e=32,i=16,o=0,r=Math.PI*2,a=0,c=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:i,phiStart:o,phiLength:r,thetaStart:a,thetaLength:c},e=Math.max(3,Math.floor(e)),i=Math.max(2,Math.floor(i));const l=Math.min(a+c,Math.PI);let u=0;const m=[],g=new z,x=new z,f=[],v=[],A=[],M=[];for(let d=0;d<=i;d++){const h=[],p=d/i;let _=0;d===0&&a===0?_=.5/e:d===i&&l===Math.PI&&(_=-.5/e);for(let T=0;T<=e;T++){const w=T/e;g.x=-t*Math.cos(o+w*r)*Math.sin(a+p*c),g.y=t*Math.cos(a+p*c),g.z=t*Math.sin(o+w*r)*Math.sin(a+p*c),v.push(g.x,g.y,g.z),x.copy(g).normalize(),A.push(x.x,x.y,x.z),M.push(w+_,1-p),h.push(u++)}m.push(h)}for(let d=0;d<i;d++)for(let h=0;h<e;h++){const p=m[d][h+1],_=m[d][h],T=m[d+1][h],w=m[d+1][h+1];(d!==0||a>0)&&f.push(p,_,w),(d!==i-1||l<Math.PI)&&f.push(_,T,w)}this.setIndex(f),this.setAttribute("position",new Re(v,3)),this.setAttribute("normal",new Re(A,3)),this.setAttribute("uv",new Re(M,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new en(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class Pn extends Ye{constructor(t=1,e=.4,i=12,o=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:i,tubularSegments:o,arc:r},i=Math.floor(i),o=Math.floor(o);const a=[],c=[],l=[],u=[],m=new z,g=new z,x=new z;for(let f=0;f<=i;f++)for(let v=0;v<=o;v++){const A=v/o*r,M=f/i*Math.PI*2;g.x=(t+e*Math.cos(M))*Math.cos(A),g.y=(t+e*Math.cos(M))*Math.sin(A),g.z=e*Math.sin(M),c.push(g.x,g.y,g.z),m.x=t*Math.cos(A),m.y=t*Math.sin(A),x.subVectors(g,m).normalize(),l.push(x.x,x.y,x.z),u.push(v/o),u.push(f/i)}for(let f=1;f<=i;f++)for(let v=1;v<=o;v++){const A=(o+1)*f+v-1,M=(o+1)*(f-1)+v-1,d=(o+1)*(f-1)+v,h=(o+1)*f+v;a.push(A,M,h),a.push(M,d,h)}this.setIndex(a),this.setAttribute("position",new Re(c,3)),this.setAttribute("normal",new Re(l,3)),this.setAttribute("uv",new Re(u,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Pn(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}}class Vc extends Ye{constructor(t=new Ju(new z(-1,-1,0),new z(-1,1,0),new z(1,1,0)),e=64,i=1,o=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:t,tubularSegments:e,radius:i,radialSegments:o,closed:r};const a=t.computeFrenetFrames(e,r);this.tangents=a.tangents,this.normals=a.normals,this.binormals=a.binormals;const c=new z,l=new z,u=new Gt;let m=new z;const g=[],x=[],f=[],v=[];A(),this.setIndex(v),this.setAttribute("position",new Re(g,3)),this.setAttribute("normal",new Re(x,3)),this.setAttribute("uv",new Re(f,2));function A(){for(let p=0;p<e;p++)M(p);M(r===!1?e:0),h(),d()}function M(p){m=t.getPointAt(p/e,m);const _=a.normals[p],T=a.binormals[p];for(let w=0;w<=o;w++){const R=w/o*Math.PI*2,C=Math.sin(R),S=-Math.cos(R);l.x=S*_.x+C*T.x,l.y=S*_.y+C*T.y,l.z=S*_.z+C*T.z,l.normalize(),x.push(l.x,l.y,l.z),c.x=m.x+i*l.x,c.y=m.y+i*l.y,c.z=m.z+i*l.z,g.push(c.x,c.y,c.z)}}function d(){for(let p=1;p<=e;p++)for(let _=1;_<=o;_++){const T=(o+1)*(p-1)+(_-1),w=(o+1)*p+(_-1),R=(o+1)*p+_,C=(o+1)*(p-1)+_;v.push(T,w,C),v.push(w,R,C)}}function h(){for(let p=0;p<=e;p++)for(let _=0;_<=o;_++)u.x=p/e,u.y=_/o,f.push(u.x,u.y)}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON();return t.path=this.parameters.path.toJSON(),t}static fromJSON(t){return new Vc(new Lr[t.path.type]().fromJSON(t.path),t.tubularSegments,t.radius,t.radialSegments,t.closed)}}class H0 extends Ye{constructor(t=null){if(super(),this.type="WireframeGeometry",this.parameters={geometry:t},t!==null){const e=[],i=new Set,o=new z,r=new z;if(t.index!==null){const a=t.attributes.position,c=t.index;let l=t.groups;l.length===0&&(l=[{start:0,count:c.count,materialIndex:0}]);for(let u=0,m=l.length;u<m;++u){const g=l[u],x=g.start,f=g.count;for(let v=x,A=x+f;v<A;v+=3)for(let M=0;M<3;M++){const d=c.getX(v+M),h=c.getX(v+(M+1)%3);o.fromBufferAttribute(a,d),r.fromBufferAttribute(a,h),Hl(o,r,i)===!0&&(e.push(o.x,o.y,o.z),e.push(r.x,r.y,r.z))}}}else{const a=t.attributes.position;for(let c=0,l=a.count/3;c<l;c++)for(let u=0;u<3;u++){const m=3*c+u,g=3*c+(u+1)%3;o.fromBufferAttribute(a,m),r.fromBufferAttribute(a,g),Hl(o,r,i)===!0&&(e.push(o.x,o.y,o.z),e.push(r.x,r.y,r.z))}}this.setAttribute("position",new Re(e,3))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}}function Hl(n,t,e){const i=`${n.x},${n.y},${n.z}-${t.x},${t.y},${t.z}`,o=`${t.x},${t.y},${t.z}-${n.x},${n.y},${n.z}`;return e.has(i)===!0||e.has(o)===!0?!1:(e.add(i),e.add(o),!0)}class Y extends Zo{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new $t(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new $t(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Nu,this.normalScale=new Gt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Gn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class V0 extends Zo{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=rp,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class G0 extends Zo{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}class oh extends un{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new $t(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}}class W0 extends oh{constructor(t,e,i){super(t,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(un.DEFAULT_UP),this.updateMatrix(),this.groundColor=new $t(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}}const Ta=new Be,Vl=new z,Gl=new z;class X0{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Gt(512,512),this.mapType=ri,this.map=null,this.mapPass=null,this.matrix=new Be,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Bc,this._frameExtents=new Gt(1,1),this._viewportCount=1,this._viewports=[new Xe(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,i=this.matrix;Vl.setFromMatrixPosition(t.matrixWorld),e.position.copy(Vl),Gl.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Gl),e.updateMatrixWorld(),Ta.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ta,e.coordinateSystem,e.reversedDepth),e.reversedDepth?i.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Ta)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class sh extends Gu{constructor(t=-1,e=1,i=1,o=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=i,this.bottom=o,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,i,o,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=o,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,o=(this.top+this.bottom)/2;let r=i-t,a=i+t,c=o+e,l=o-e;if(this.view!==null&&this.view.enabled){const u=(this.right-this.left)/this.view.fullWidth/this.zoom,m=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=u*this.view.offsetX,a=r+u*this.view.width,c-=m*this.view.offsetY,l=c-m*this.view.height}this.projectionMatrix.makeOrthographic(r,a,c,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}class q0 extends X0{constructor(){super(new sh(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Y0 extends oh{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(un.DEFAULT_UP),this.updateMatrix(),this.target=new un,this.shadow=new q0}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class Z0 extends Hn{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}}class $0{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const e=performance.now();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}}const Wl=new Be;class K0{constructor(t,e,i=0,o=1/0){this.ray=new Nc(t,e),this.near=i,this.far=o,this.camera=null,this.layers=new Uc,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):console.error("THREE.Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return Wl.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Wl),this}intersectObject(t,e=!0,i=[]){return yc(t,this,i,e),i.sort(Xl),i}intersectObjects(t,e=!0,i=[]){for(let o=0,r=t.length;o<r;o++)yc(t[o],this,i,e);return i.sort(Xl),i}}function Xl(n,t){return n.distance-t.distance}function yc(n,t,e,i){let o=!0;if(n.layers.test(t.layers)&&n.raycast(t,e)===!1&&(o=!1),o===!0&&i===!0){const r=n.children;for(let a=0,c=r.length;a<c;a++)yc(r[a],t,e,!0)}}function ql(n,t,e,i){const o=J0(i);switch(e){case Pu:return n*t;case Du:return n*t/o.components*o.byteLength;case Pc:return n*t/o.components*o.byteLength;case Lu:return n*t*2/o.components*o.byteLength;case Ic:return n*t*2/o.components*o.byteLength;case Iu:return n*t*3/o.components*o.byteLength;case Jn:return n*t*4/o.components*o.byteLength;case Dc:return n*t*4/o.components*o.byteLength;case wr:case yr:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case Sr:case br:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case Za:case Ka:return Math.max(n,16)*Math.max(t,8)/4;case Ya:case $a:return Math.max(n,8)*Math.max(t,8)/2;case Ja:case ja:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case Qa:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case tc:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case ec:return Math.floor((n+4)/5)*Math.floor((t+3)/4)*16;case nc:return Math.floor((n+4)/5)*Math.floor((t+4)/5)*16;case ic:return Math.floor((n+5)/6)*Math.floor((t+4)/5)*16;case oc:return Math.floor((n+5)/6)*Math.floor((t+5)/6)*16;case sc:return Math.floor((n+7)/8)*Math.floor((t+4)/5)*16;case rc:return Math.floor((n+7)/8)*Math.floor((t+5)/6)*16;case ac:return Math.floor((n+7)/8)*Math.floor((t+7)/8)*16;case cc:return Math.floor((n+9)/10)*Math.floor((t+4)/5)*16;case lc:return Math.floor((n+9)/10)*Math.floor((t+5)/6)*16;case uc:return Math.floor((n+9)/10)*Math.floor((t+7)/8)*16;case hc:return Math.floor((n+9)/10)*Math.floor((t+9)/10)*16;case dc:return Math.floor((n+11)/12)*Math.floor((t+9)/10)*16;case fc:return Math.floor((n+11)/12)*Math.floor((t+11)/12)*16;case Tr:case pc:case mc:return Math.ceil(n/4)*Math.ceil(t/4)*16;case Fu:case gc:return Math.ceil(n/4)*Math.ceil(t/4)*8;case xc:case _c:return Math.ceil(n/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function J0(n){switch(n){case ri:case Au:return{byteLength:1,components:1};case ys:case Ru:case Is:return{byteLength:2,components:1};case Rc:case Cc:return{byteLength:2,components:4};case so:case Ac:case _i:return{byteLength:4,components:1};case Cu:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Ec}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Ec);function rh(){let n=null,t=!1,e=null,i=null;function o(r,a){e(r,a),i=n.requestAnimationFrame(o)}return{start:function(){t!==!0&&e!==null&&(i=n.requestAnimationFrame(o),t=!0)},stop:function(){n.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){n=r}}}function j0(n){const t=new WeakMap;function e(c,l){const u=c.array,m=c.usage,g=u.byteLength,x=n.createBuffer();n.bindBuffer(l,x),n.bufferData(l,u,m),c.onUploadCallback();let f;if(u instanceof Float32Array)f=n.FLOAT;else if(typeof Float16Array<"u"&&u instanceof Float16Array)f=n.HALF_FLOAT;else if(u instanceof Uint16Array)c.isFloat16BufferAttribute?f=n.HALF_FLOAT:f=n.UNSIGNED_SHORT;else if(u instanceof Int16Array)f=n.SHORT;else if(u instanceof Uint32Array)f=n.UNSIGNED_INT;else if(u instanceof Int32Array)f=n.INT;else if(u instanceof Int8Array)f=n.BYTE;else if(u instanceof Uint8Array)f=n.UNSIGNED_BYTE;else if(u instanceof Uint8ClampedArray)f=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+u);return{buffer:x,type:f,bytesPerElement:u.BYTES_PER_ELEMENT,version:c.version,size:g}}function i(c,l,u){const m=l.array,g=l.updateRanges;if(n.bindBuffer(u,c),g.length===0)n.bufferSubData(u,0,m);else{g.sort((f,v)=>f.start-v.start);let x=0;for(let f=1;f<g.length;f++){const v=g[x],A=g[f];A.start<=v.start+v.count+1?v.count=Math.max(v.count,A.start+A.count-v.start):(++x,g[x]=A)}g.length=x+1;for(let f=0,v=g.length;f<v;f++){const A=g[f];n.bufferSubData(u,A.start*m.BYTES_PER_ELEMENT,m,A.start,A.count)}l.clearUpdateRanges()}l.onUploadCallback()}function o(c){return c.isInterleavedBufferAttribute&&(c=c.data),t.get(c)}function r(c){c.isInterleavedBufferAttribute&&(c=c.data);const l=t.get(c);l&&(n.deleteBuffer(l.buffer),t.delete(c))}function a(c,l){if(c.isInterleavedBufferAttribute&&(c=c.data),c.isGLBufferAttribute){const m=t.get(c);(!m||m.version<c.version)&&t.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}const u=t.get(c);if(u===void 0)t.set(c,e(c,l));else if(u.version<c.version){if(u.size!==c.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(u.buffer,c,l),u.version=c.version}}return{get:o,remove:r,update:a}}var Q0=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,tm=`#ifdef USE_ALPHAHASH
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
#endif`,em=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,nm=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,im=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,om=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,sm=`#ifdef USE_AOMAP
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
#endif`,rm=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,am=`#ifdef USE_BATCHING
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
#endif`,cm=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,lm=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,um=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,hm=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,dm=`#ifdef USE_IRIDESCENCE
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
#endif`,fm=`#ifdef USE_BUMPMAP
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
#endif`,pm=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,mm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,gm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,xm=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,_m=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,vm=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Mm=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,wm=`#if defined( USE_COLOR_ALPHA )
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
#endif`,ym=`#define PI 3.141592653589793
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
} // validated`,Sm=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,bm=`vec3 transformedNormal = objectNormal;
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
#endif`,Tm=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Em=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Am=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Rm=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Cm="gl_FragColor = linearToOutputTexel( gl_FragColor );",Pm=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Im=`#ifdef USE_ENVMAP
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
#endif`,Dm=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Lm=`#ifdef USE_ENVMAP
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
#endif`,Fm=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Nm=`#ifdef USE_ENVMAP
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
#endif`,Um=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,km=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Bm=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Om=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,zm=`#ifdef USE_GRADIENTMAP
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
}`,Hm=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Vm=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Gm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Wm=`uniform bool receiveShadow;
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
#endif`,Xm=`#ifdef USE_ENVMAP
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
#endif`,qm=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Ym=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Zm=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,$m=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Km=`PhysicalMaterial material;
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
#endif`,Jm=`struct PhysicalMaterial {
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
}`,jm=`
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
#endif`,Qm=`#if defined( RE_IndirectDiffuse )
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
#endif`,tg=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,eg=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,ng=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,ig=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,og=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,sg=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,rg=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,ag=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,cg=`#if defined( USE_POINTS_UV )
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
#endif`,lg=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,ug=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,hg=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,dg=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,fg=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,pg=`#ifdef USE_MORPHTARGETS
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
#endif`,mg=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,gg=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,xg=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,_g=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,vg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Mg=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,wg=`#ifdef USE_NORMALMAP
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
#endif`,yg=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Sg=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,bg=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Tg=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Eg=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Ag=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Rg=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Cg=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Pg=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Ig=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Dg=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Lg=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Fg=`#if NUM_SPOT_LIGHT_COORDS > 0
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
		float depth = unpackRGBAToDepth( texture2D( depths, uv ) );
		#ifdef USE_REVERSEDEPTHBUF
			return step( depth, compare );
		#else
			return step( compare, depth );
		#endif
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		#ifdef USE_REVERSEDEPTHBUF
			float hard_shadow = step( distribution.x, compare );
		#else
			float hard_shadow = step( compare , distribution.x );
		#endif
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
#endif`,Ng=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Ug=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,kg=`float getShadowMask() {
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
}`,Bg=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Og=`#ifdef USE_SKINNING
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
#endif`,zg=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Hg=`#ifdef USE_SKINNING
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
#endif`,Vg=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Gg=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Wg=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Xg=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,qg=`#ifdef USE_TRANSMISSION
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
#endif`,Yg=`#ifdef USE_TRANSMISSION
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
#endif`,Zg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,$g=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Kg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Jg=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const jg=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Qg=`uniform sampler2D t2D;
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
}`,tx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,ex=`#ifdef ENVMAP_TYPE_CUBE
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
}`,nx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,ix=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ox=`#include <common>
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
}`,sx=`#if DEPTH_PACKING == 3200
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
	#ifdef USE_REVERSEDEPTHBUF
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,rx=`#define DISTANCE
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
}`,ax=`#define DISTANCE
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
}`,cx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,lx=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ux=`uniform float scale;
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
}`,hx=`uniform vec3 diffuse;
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
}`,dx=`#include <common>
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
}`,fx=`uniform vec3 diffuse;
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
}`,px=`#define LAMBERT
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
}`,mx=`#define LAMBERT
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
}`,gx=`#define MATCAP
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
}`,xx=`#define MATCAP
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
}`,_x=`#define NORMAL
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
}`,vx=`#define NORMAL
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
}`,Mx=`#define PHONG
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
}`,wx=`#define PHONG
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
}`,yx=`#define STANDARD
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
}`,Sx=`#define STANDARD
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
}`,bx=`#define TOON
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
}`,Tx=`#define TOON
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
}`,Ex=`uniform float size;
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
}`,Ax=`uniform vec3 diffuse;
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
}`,Rx=`#include <common>
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
}`,Cx=`uniform vec3 color;
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
}`,Px=`uniform float rotation;
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
}`,Ix=`uniform vec3 diffuse;
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
}`,we={alphahash_fragment:Q0,alphahash_pars_fragment:tm,alphamap_fragment:em,alphamap_pars_fragment:nm,alphatest_fragment:im,alphatest_pars_fragment:om,aomap_fragment:sm,aomap_pars_fragment:rm,batching_pars_vertex:am,batching_vertex:cm,begin_vertex:lm,beginnormal_vertex:um,bsdfs:hm,iridescence_fragment:dm,bumpmap_pars_fragment:fm,clipping_planes_fragment:pm,clipping_planes_pars_fragment:mm,clipping_planes_pars_vertex:gm,clipping_planes_vertex:xm,color_fragment:_m,color_pars_fragment:vm,color_pars_vertex:Mm,color_vertex:wm,common:ym,cube_uv_reflection_fragment:Sm,defaultnormal_vertex:bm,displacementmap_pars_vertex:Tm,displacementmap_vertex:Em,emissivemap_fragment:Am,emissivemap_pars_fragment:Rm,colorspace_fragment:Cm,colorspace_pars_fragment:Pm,envmap_fragment:Im,envmap_common_pars_fragment:Dm,envmap_pars_fragment:Lm,envmap_pars_vertex:Fm,envmap_physical_pars_fragment:Xm,envmap_vertex:Nm,fog_vertex:Um,fog_pars_vertex:km,fog_fragment:Bm,fog_pars_fragment:Om,gradientmap_pars_fragment:zm,lightmap_pars_fragment:Hm,lights_lambert_fragment:Vm,lights_lambert_pars_fragment:Gm,lights_pars_begin:Wm,lights_toon_fragment:qm,lights_toon_pars_fragment:Ym,lights_phong_fragment:Zm,lights_phong_pars_fragment:$m,lights_physical_fragment:Km,lights_physical_pars_fragment:Jm,lights_fragment_begin:jm,lights_fragment_maps:Qm,lights_fragment_end:tg,logdepthbuf_fragment:eg,logdepthbuf_pars_fragment:ng,logdepthbuf_pars_vertex:ig,logdepthbuf_vertex:og,map_fragment:sg,map_pars_fragment:rg,map_particle_fragment:ag,map_particle_pars_fragment:cg,metalnessmap_fragment:lg,metalnessmap_pars_fragment:ug,morphinstance_vertex:hg,morphcolor_vertex:dg,morphnormal_vertex:fg,morphtarget_pars_vertex:pg,morphtarget_vertex:mg,normal_fragment_begin:gg,normal_fragment_maps:xg,normal_pars_fragment:_g,normal_pars_vertex:vg,normal_vertex:Mg,normalmap_pars_fragment:wg,clearcoat_normal_fragment_begin:yg,clearcoat_normal_fragment_maps:Sg,clearcoat_pars_fragment:bg,iridescence_pars_fragment:Tg,opaque_fragment:Eg,packing:Ag,premultiplied_alpha_fragment:Rg,project_vertex:Cg,dithering_fragment:Pg,dithering_pars_fragment:Ig,roughnessmap_fragment:Dg,roughnessmap_pars_fragment:Lg,shadowmap_pars_fragment:Fg,shadowmap_pars_vertex:Ng,shadowmap_vertex:Ug,shadowmask_pars_fragment:kg,skinbase_vertex:Bg,skinning_pars_vertex:Og,skinning_vertex:zg,skinnormal_vertex:Hg,specularmap_fragment:Vg,specularmap_pars_fragment:Gg,tonemapping_fragment:Wg,tonemapping_pars_fragment:Xg,transmission_fragment:qg,transmission_pars_fragment:Yg,uv_pars_fragment:Zg,uv_pars_vertex:$g,uv_vertex:Kg,worldpos_vertex:Jg,background_vert:jg,background_frag:Qg,backgroundCube_vert:tx,backgroundCube_frag:ex,cube_vert:nx,cube_frag:ix,depth_vert:ox,depth_frag:sx,distanceRGBA_vert:rx,distanceRGBA_frag:ax,equirect_vert:cx,equirect_frag:lx,linedashed_vert:ux,linedashed_frag:hx,meshbasic_vert:dx,meshbasic_frag:fx,meshlambert_vert:px,meshlambert_frag:mx,meshmatcap_vert:gx,meshmatcap_frag:xx,meshnormal_vert:_x,meshnormal_frag:vx,meshphong_vert:Mx,meshphong_frag:wx,meshphysical_vert:yx,meshphysical_frag:Sx,meshtoon_vert:bx,meshtoon_frag:Tx,points_vert:Ex,points_frag:Ax,shadow_vert:Rx,shadow_frag:Cx,sprite_vert:Px,sprite_frag:Ix},Zt={common:{diffuse:{value:new $t(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Me},alphaMap:{value:null},alphaMapTransform:{value:new Me},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Me}},envmap:{envMap:{value:null},envMapRotation:{value:new Me},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Me}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Me}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Me},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Me},normalScale:{value:new Gt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Me},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Me}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Me}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Me}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new $t(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new $t(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Me},alphaTest:{value:0},uvTransform:{value:new Me}},sprite:{diffuse:{value:new $t(16777215)},opacity:{value:1},center:{value:new Gt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Me},alphaMap:{value:null},alphaMapTransform:{value:new Me},alphaTest:{value:0}}},ei={basic:{uniforms:wn([Zt.common,Zt.specularmap,Zt.envmap,Zt.aomap,Zt.lightmap,Zt.fog]),vertexShader:we.meshbasic_vert,fragmentShader:we.meshbasic_frag},lambert:{uniforms:wn([Zt.common,Zt.specularmap,Zt.envmap,Zt.aomap,Zt.lightmap,Zt.emissivemap,Zt.bumpmap,Zt.normalmap,Zt.displacementmap,Zt.fog,Zt.lights,{emissive:{value:new $t(0)}}]),vertexShader:we.meshlambert_vert,fragmentShader:we.meshlambert_frag},phong:{uniforms:wn([Zt.common,Zt.specularmap,Zt.envmap,Zt.aomap,Zt.lightmap,Zt.emissivemap,Zt.bumpmap,Zt.normalmap,Zt.displacementmap,Zt.fog,Zt.lights,{emissive:{value:new $t(0)},specular:{value:new $t(1118481)},shininess:{value:30}}]),vertexShader:we.meshphong_vert,fragmentShader:we.meshphong_frag},standard:{uniforms:wn([Zt.common,Zt.envmap,Zt.aomap,Zt.lightmap,Zt.emissivemap,Zt.bumpmap,Zt.normalmap,Zt.displacementmap,Zt.roughnessmap,Zt.metalnessmap,Zt.fog,Zt.lights,{emissive:{value:new $t(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:we.meshphysical_vert,fragmentShader:we.meshphysical_frag},toon:{uniforms:wn([Zt.common,Zt.aomap,Zt.lightmap,Zt.emissivemap,Zt.bumpmap,Zt.normalmap,Zt.displacementmap,Zt.gradientmap,Zt.fog,Zt.lights,{emissive:{value:new $t(0)}}]),vertexShader:we.meshtoon_vert,fragmentShader:we.meshtoon_frag},matcap:{uniforms:wn([Zt.common,Zt.bumpmap,Zt.normalmap,Zt.displacementmap,Zt.fog,{matcap:{value:null}}]),vertexShader:we.meshmatcap_vert,fragmentShader:we.meshmatcap_frag},points:{uniforms:wn([Zt.points,Zt.fog]),vertexShader:we.points_vert,fragmentShader:we.points_frag},dashed:{uniforms:wn([Zt.common,Zt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:we.linedashed_vert,fragmentShader:we.linedashed_frag},depth:{uniforms:wn([Zt.common,Zt.displacementmap]),vertexShader:we.depth_vert,fragmentShader:we.depth_frag},normal:{uniforms:wn([Zt.common,Zt.bumpmap,Zt.normalmap,Zt.displacementmap,{opacity:{value:1}}]),vertexShader:we.meshnormal_vert,fragmentShader:we.meshnormal_frag},sprite:{uniforms:wn([Zt.sprite,Zt.fog]),vertexShader:we.sprite_vert,fragmentShader:we.sprite_frag},background:{uniforms:{uvTransform:{value:new Me},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:we.background_vert,fragmentShader:we.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Me}},vertexShader:we.backgroundCube_vert,fragmentShader:we.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:we.cube_vert,fragmentShader:we.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:we.equirect_vert,fragmentShader:we.equirect_frag},distanceRGBA:{uniforms:wn([Zt.common,Zt.displacementmap,{referencePosition:{value:new z},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:we.distanceRGBA_vert,fragmentShader:we.distanceRGBA_frag},shadow:{uniforms:wn([Zt.lights,Zt.fog,{color:{value:new $t(0)},opacity:{value:1}}]),vertexShader:we.shadow_vert,fragmentShader:we.shadow_frag}};ei.physical={uniforms:wn([ei.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Me},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Me},clearcoatNormalScale:{value:new Gt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Me},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Me},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Me},sheen:{value:0},sheenColor:{value:new $t(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Me},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Me},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Me},transmissionSamplerSize:{value:new Gt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Me},attenuationDistance:{value:0},attenuationColor:{value:new $t(0)},specularColor:{value:new $t(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Me},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Me},anisotropyVector:{value:new Gt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Me}}]),vertexShader:we.meshphysical_vert,fragmentShader:we.meshphysical_frag};const xr={r:0,b:0,g:0},Yi=new Gn,Dx=new Be;function Lx(n,t,e,i,o,r,a){const c=new $t(0);let l=r===!0?0:1,u,m,g=null,x=0,f=null;function v(p){let _=p.isScene===!0?p.background:null;return _&&_.isTexture&&(_=(p.backgroundBlurriness>0?e:t).get(_)),_}function A(p){let _=!1;const T=v(p);T===null?d(c,l):T&&T.isColor&&(d(T,1),_=!0);const w=n.xr.getEnvironmentBlendMode();w==="additive"?i.buffers.color.setClear(0,0,0,1,a):w==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,a),(n.autoClear||_)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function M(p,_){const T=v(_);T&&(T.isCubeTexture||T.mapping===Nr)?(m===void 0&&(m=new k(new Q(1,1,1),new ki({name:"BackgroundCubeMaterial",uniforms:Wo(ei.backgroundCube.uniforms),vertexShader:ei.backgroundCube.vertexShader,fragmentShader:ei.backgroundCube.fragmentShader,side:In,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),m.geometry.deleteAttribute("normal"),m.geometry.deleteAttribute("uv"),m.onBeforeRender=function(w,R,C){this.matrixWorld.copyPosition(C.matrixWorld)},Object.defineProperty(m.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),o.update(m)),Yi.copy(_.backgroundRotation),Yi.x*=-1,Yi.y*=-1,Yi.z*=-1,T.isCubeTexture&&T.isRenderTargetTexture===!1&&(Yi.y*=-1,Yi.z*=-1),m.material.uniforms.envMap.value=T,m.material.uniforms.flipEnvMap.value=T.isCubeTexture&&T.isRenderTargetTexture===!1?-1:1,m.material.uniforms.backgroundBlurriness.value=_.backgroundBlurriness,m.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,m.material.uniforms.backgroundRotation.value.setFromMatrix4(Dx.makeRotationFromEuler(Yi)),m.material.toneMapped=Pe.getTransfer(T.colorSpace)!==Ue,(g!==T||x!==T.version||f!==n.toneMapping)&&(m.material.needsUpdate=!0,g=T,x=T.version,f=n.toneMapping),m.layers.enableAll(),p.unshift(m,m.geometry,m.material,0,0,null)):T&&T.isTexture&&(u===void 0&&(u=new k(new uo(2,2),new ki({name:"BackgroundMaterial",uniforms:Wo(ei.background.uniforms),vertexShader:ei.background.vertexShader,fragmentShader:ei.background.fragmentShader,side:Ui,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),u.geometry.deleteAttribute("normal"),Object.defineProperty(u.material,"map",{get:function(){return this.uniforms.t2D.value}}),o.update(u)),u.material.uniforms.t2D.value=T,u.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,u.material.toneMapped=Pe.getTransfer(T.colorSpace)!==Ue,T.matrixAutoUpdate===!0&&T.updateMatrix(),u.material.uniforms.uvTransform.value.copy(T.matrix),(g!==T||x!==T.version||f!==n.toneMapping)&&(u.material.needsUpdate=!0,g=T,x=T.version,f=n.toneMapping),u.layers.enableAll(),p.unshift(u,u.geometry,u.material,0,0,null))}function d(p,_){p.getRGB(xr,Vu(n)),i.buffers.color.setClear(xr.r,xr.g,xr.b,_,a)}function h(){m!==void 0&&(m.geometry.dispose(),m.material.dispose(),m=void 0),u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0)}return{getClearColor:function(){return c},setClearColor:function(p,_=1){c.set(p),l=_,d(c,l)},getClearAlpha:function(){return l},setClearAlpha:function(p){l=p,d(c,l)},render:A,addToRenderList:M,dispose:h}}function Fx(n,t){const e=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},o=x(null);let r=o,a=!1;function c(y,P,E,I,F){let L=!1;const D=g(I,E,P);r!==D&&(r=D,u(r.object)),L=f(y,I,E,F),L&&v(y,I,E,F),F!==null&&t.update(F,n.ELEMENT_ARRAY_BUFFER),(L||a)&&(a=!1,_(y,P,E,I),F!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,t.get(F).buffer))}function l(){return n.createVertexArray()}function u(y){return n.bindVertexArray(y)}function m(y){return n.deleteVertexArray(y)}function g(y,P,E){const I=E.wireframe===!0;let F=i[y.id];F===void 0&&(F={},i[y.id]=F);let L=F[P.id];L===void 0&&(L={},F[P.id]=L);let D=L[I];return D===void 0&&(D=x(l()),L[I]=D),D}function x(y){const P=[],E=[],I=[];for(let F=0;F<e;F++)P[F]=0,E[F]=0,I[F]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:P,enabledAttributes:E,attributeDivisors:I,object:y,attributes:{},index:null}}function f(y,P,E,I){const F=r.attributes,L=P.attributes;let D=0;const N=E.getAttributes();for(const H in N)if(N[H].location>=0){const V=F[H];let Z=L[H];if(Z===void 0&&(H==="instanceMatrix"&&y.instanceMatrix&&(Z=y.instanceMatrix),H==="instanceColor"&&y.instanceColor&&(Z=y.instanceColor)),V===void 0||V.attribute!==Z||Z&&V.data!==Z.data)return!0;D++}return r.attributesNum!==D||r.index!==I}function v(y,P,E,I){const F={},L=P.attributes;let D=0;const N=E.getAttributes();for(const H in N)if(N[H].location>=0){let V=L[H];V===void 0&&(H==="instanceMatrix"&&y.instanceMatrix&&(V=y.instanceMatrix),H==="instanceColor"&&y.instanceColor&&(V=y.instanceColor));const Z={};Z.attribute=V,V&&V.data&&(Z.data=V.data),F[H]=Z,D++}r.attributes=F,r.attributesNum=D,r.index=I}function A(){const y=r.newAttributes;for(let P=0,E=y.length;P<E;P++)y[P]=0}function M(y){d(y,0)}function d(y,P){const E=r.newAttributes,I=r.enabledAttributes,F=r.attributeDivisors;E[y]=1,I[y]===0&&(n.enableVertexAttribArray(y),I[y]=1),F[y]!==P&&(n.vertexAttribDivisor(y,P),F[y]=P)}function h(){const y=r.newAttributes,P=r.enabledAttributes;for(let E=0,I=P.length;E<I;E++)P[E]!==y[E]&&(n.disableVertexAttribArray(E),P[E]=0)}function p(y,P,E,I,F,L,D){D===!0?n.vertexAttribIPointer(y,P,E,F,L):n.vertexAttribPointer(y,P,E,I,F,L)}function _(y,P,E,I){A();const F=I.attributes,L=E.getAttributes(),D=P.defaultAttributeValues;for(const N in L){const H=L[N];if(H.location>=0){let X=F[N];if(X===void 0&&(N==="instanceMatrix"&&y.instanceMatrix&&(X=y.instanceMatrix),N==="instanceColor"&&y.instanceColor&&(X=y.instanceColor)),X!==void 0){const V=X.normalized,Z=X.itemSize,$=t.get(X);if($===void 0)continue;const xt=$.buffer,yt=$.type,j=$.bytesPerElement,ot=yt===n.INT||yt===n.UNSIGNED_INT||X.gpuType===Ac;if(X.isInterleavedBufferAttribute){const tt=X.data,_t=tt.stride,mt=X.offset;if(tt.isInstancedInterleavedBuffer){for(let rt=0;rt<H.locationSize;rt++)d(H.location+rt,tt.meshPerAttribute);y.isInstancedMesh!==!0&&I._maxInstanceCount===void 0&&(I._maxInstanceCount=tt.meshPerAttribute*tt.count)}else for(let rt=0;rt<H.locationSize;rt++)M(H.location+rt);n.bindBuffer(n.ARRAY_BUFFER,xt);for(let rt=0;rt<H.locationSize;rt++)p(H.location+rt,Z/H.locationSize,yt,V,_t*j,(mt+Z/H.locationSize*rt)*j,ot)}else{if(X.isInstancedBufferAttribute){for(let tt=0;tt<H.locationSize;tt++)d(H.location+tt,X.meshPerAttribute);y.isInstancedMesh!==!0&&I._maxInstanceCount===void 0&&(I._maxInstanceCount=X.meshPerAttribute*X.count)}else for(let tt=0;tt<H.locationSize;tt++)M(H.location+tt);n.bindBuffer(n.ARRAY_BUFFER,xt);for(let tt=0;tt<H.locationSize;tt++)p(H.location+tt,Z/H.locationSize,yt,V,Z*j,Z/H.locationSize*tt*j,ot)}}else if(D!==void 0){const V=D[N];if(V!==void 0)switch(V.length){case 2:n.vertexAttrib2fv(H.location,V);break;case 3:n.vertexAttrib3fv(H.location,V);break;case 4:n.vertexAttrib4fv(H.location,V);break;default:n.vertexAttrib1fv(H.location,V)}}}}h()}function T(){C();for(const y in i){const P=i[y];for(const E in P){const I=P[E];for(const F in I)m(I[F].object),delete I[F];delete P[E]}delete i[y]}}function w(y){if(i[y.id]===void 0)return;const P=i[y.id];for(const E in P){const I=P[E];for(const F in I)m(I[F].object),delete I[F];delete P[E]}delete i[y.id]}function R(y){for(const P in i){const E=i[P];if(E[y.id]===void 0)continue;const I=E[y.id];for(const F in I)m(I[F].object),delete I[F];delete E[y.id]}}function C(){S(),a=!0,r!==o&&(r=o,u(r.object))}function S(){o.geometry=null,o.program=null,o.wireframe=!1}return{setup:c,reset:C,resetDefaultState:S,dispose:T,releaseStatesOfGeometry:w,releaseStatesOfProgram:R,initAttributes:A,enableAttribute:M,disableUnusedAttributes:h}}function Nx(n,t,e){let i;function o(u){i=u}function r(u,m){n.drawArrays(i,u,m),e.update(m,i,1)}function a(u,m,g){g!==0&&(n.drawArraysInstanced(i,u,m,g),e.update(m,i,g))}function c(u,m,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,u,0,m,0,g);let f=0;for(let v=0;v<g;v++)f+=m[v];e.update(f,i,1)}function l(u,m,g,x){if(g===0)return;const f=t.get("WEBGL_multi_draw");if(f===null)for(let v=0;v<u.length;v++)a(u[v],m[v],x[v]);else{f.multiDrawArraysInstancedWEBGL(i,u,0,m,0,x,0,g);let v=0;for(let A=0;A<g;A++)v+=m[A]*x[A];e.update(v,i,1)}}this.setMode=o,this.render=r,this.renderInstances=a,this.renderMultiDraw=c,this.renderMultiDrawInstances=l}function Ux(n,t,e,i){let o;function r(){if(o!==void 0)return o;if(t.has("EXT_texture_filter_anisotropic")===!0){const R=t.get("EXT_texture_filter_anisotropic");o=n.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else o=0;return o}function a(R){return!(R!==Jn&&i.convert(R)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function c(R){const C=R===Is&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(R!==ri&&i.convert(R)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&R!==_i&&!C)}function l(R){if(R==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";R="mediump"}return R==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let u=e.precision!==void 0?e.precision:"highp";const m=l(u);m!==u&&(console.warn("THREE.WebGLRenderer:",u,"not supported, using",m,"instead."),u=m);const g=e.logarithmicDepthBuffer===!0,x=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),f=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),v=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),A=n.getParameter(n.MAX_TEXTURE_SIZE),M=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),d=n.getParameter(n.MAX_VERTEX_ATTRIBS),h=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),p=n.getParameter(n.MAX_VARYING_VECTORS),_=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),T=v>0,w=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:c,precision:u,logarithmicDepthBuffer:g,reversedDepthBuffer:x,maxTextures:f,maxVertexTextures:v,maxTextureSize:A,maxCubemapSize:M,maxAttributes:d,maxVertexUniforms:h,maxVaryings:p,maxFragmentUniforms:_,vertexTextures:T,maxSamples:w}}function kx(n){const t=this;let e=null,i=0,o=!1,r=!1;const a=new Ji,c=new Me,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(g,x){const f=g.length!==0||x||i!==0||o;return o=x,i=g.length,f},this.beginShadows=function(){r=!0,m(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(g,x){e=m(g,x,0)},this.setState=function(g,x,f){const v=g.clippingPlanes,A=g.clipIntersection,M=g.clipShadows,d=n.get(g);if(!o||v===null||v.length===0||r&&!M)r?m(null):u();else{const h=r?0:i,p=h*4;let _=d.clippingState||null;l.value=_,_=m(v,x,p,f);for(let T=0;T!==p;++T)_[T]=e[T];d.clippingState=_,this.numIntersection=A?this.numPlanes:0,this.numPlanes+=h}};function u(){l.value!==e&&(l.value=e,l.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function m(g,x,f,v){const A=g!==null?g.length:0;let M=null;if(A!==0){if(M=l.value,v!==!0||M===null){const d=f+A*4,h=x.matrixWorldInverse;c.getNormalMatrix(h),(M===null||M.length<d)&&(M=new Float32Array(d));for(let p=0,_=f;p!==A;++p,_+=4)a.copy(g[p]).applyMatrix4(h,c),a.normal.toArray(M,_),M[_+3]=a.constant}l.value=M,l.needsUpdate=!0}return t.numPlanes=A,t.numIntersection=0,M}}function Bx(n){let t=new WeakMap;function e(a,c){return c===Wa?a.mapping=Ho:c===Xa&&(a.mapping=Vo),a}function i(a){if(a&&a.isTexture){const c=a.mapping;if(c===Wa||c===Xa)if(t.has(a)){const l=t.get(a).texture;return e(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const u=new n0(l.height);return u.fromEquirectangularTexture(n,a),t.set(a,u),a.addEventListener("dispose",o),e(u.texture,a.mapping)}else return null}}return a}function o(a){const c=a.target;c.removeEventListener("dispose",o);const l=t.get(c);l!==void 0&&(t.delete(c),l.dispose())}function r(){t=new WeakMap}return{get:i,dispose:r}}const No=4,Yl=[.125,.215,.35,.446,.526,.582],to=20,Ea=new sh,Zl=new $t;let Aa=null,Ra=0,Ca=0,Pa=!1;const ji=(1+Math.sqrt(5))/2,Po=1/ji,$l=[new z(-ji,Po,0),new z(ji,Po,0),new z(-Po,0,ji),new z(Po,0,ji),new z(0,ji,-Po),new z(0,ji,Po),new z(-1,1,-1),new z(1,1,-1),new z(-1,1,1),new z(1,1,1)],Ox=new z;class Kl{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,i=.1,o=100,r={}){const{size:a=256,position:c=Ox}=r;Aa=this._renderer.getRenderTarget(),Ra=this._renderer.getActiveCubeFace(),Ca=this._renderer.getActiveMipmapLevel(),Pa=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(t,i,o,l,c),e>0&&this._blur(l,0,0,e),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Ql(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=jl(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Aa,Ra,Ca),this._renderer.xr.enabled=Pa,t.scissorTest=!1,_r(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Ho||t.mapping===Vo?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Aa=this._renderer.getRenderTarget(),Ra=this._renderer.getActiveCubeFace(),Ca=this._renderer.getActiveMipmapLevel(),Pa=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=e||this._allocateTargets();return this._textureToCubeUV(t,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,i={magFilter:ii,minFilter:ii,generateMipmaps:!1,type:Is,format:Jn,colorSpace:Go,depthBuffer:!1},o=Jl(t,e,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Jl(t,e,i);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=zx(r)),this._blurMaterial=Hx(r,t,e)}return o}_compileMaterial(t){const e=new k(this._lodPlanes[0],t);this._renderer.compile(e,Ea)}_sceneToCubeUV(t,e,i,o,r){const l=new Hn(90,1,e,i),u=[1,-1,1,1,1,1],m=[1,1,1,-1,-1,-1],g=this._renderer,x=g.autoClear,f=g.toneMapping;g.getClearColor(Zl),g.toneMapping=Fi,g.autoClear=!1,g.state.buffers.depth.getReversed()&&(g.setRenderTarget(o),g.clearDepth(),g.setRenderTarget(null));const A=new Ni({name:"PMREM.Background",side:In,depthWrite:!1,depthTest:!1}),M=new k(new Q,A);let d=!1;const h=t.background;h?h.isColor&&(A.color.copy(h),t.background=null,d=!0):(A.color.copy(Zl),d=!0);for(let p=0;p<6;p++){const _=p%3;_===0?(l.up.set(0,u[p],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+m[p],r.y,r.z)):_===1?(l.up.set(0,0,u[p]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+m[p],r.z)):(l.up.set(0,u[p],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+m[p]));const T=this._cubeSize;_r(o,_*T,p>2?T:0,T,T),g.setRenderTarget(o),d&&g.render(M,l),g.render(t,l)}M.geometry.dispose(),M.material.dispose(),g.toneMapping=f,g.autoClear=x,t.background=h}_textureToCubeUV(t,e){const i=this._renderer,o=t.mapping===Ho||t.mapping===Vo;o?(this._cubemapMaterial===null&&(this._cubemapMaterial=Ql()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=jl());const r=o?this._cubemapMaterial:this._equirectMaterial,a=new k(this._lodPlanes[0],r),c=r.uniforms;c.envMap.value=t;const l=this._cubeSize;_r(e,0,0,3*l,2*l),i.setRenderTarget(e),i.render(a,Ea)}_applyPMREM(t){const e=this._renderer,i=e.autoClear;e.autoClear=!1;const o=this._lodPlanes.length;for(let r=1;r<o;r++){const a=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),c=$l[(o-r-1)%$l.length];this._blur(t,r-1,r,a,c)}e.autoClear=i}_blur(t,e,i,o,r){const a=this._pingPongRenderTarget;this._halfBlur(t,a,e,i,o,"latitudinal",r),this._halfBlur(a,t,i,i,o,"longitudinal",r)}_halfBlur(t,e,i,o,r,a,c){const l=this._renderer,u=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const m=3,g=new k(this._lodPlanes[o],u),x=u.uniforms,f=this._sizeLods[i]-1,v=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*to-1),A=r/v,M=isFinite(r)?1+Math.floor(m*A):to;M>to&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${M} samples when the maximum is set to ${to}`);const d=[];let h=0;for(let R=0;R<to;++R){const C=R/A,S=Math.exp(-C*C/2);d.push(S),R===0?h+=S:R<M&&(h+=2*S)}for(let R=0;R<d.length;R++)d[R]=d[R]/h;x.envMap.value=t.texture,x.samples.value=M,x.weights.value=d,x.latitudinal.value=a==="latitudinal",c&&(x.poleAxis.value=c);const{_lodMax:p}=this;x.dTheta.value=v,x.mipInt.value=p-i;const _=this._sizeLods[o],T=3*_*(o>p-No?o-p+No:0),w=4*(this._cubeSize-_);_r(e,T,w,3*_,2*_),l.setRenderTarget(e),l.render(g,Ea)}}function zx(n){const t=[],e=[],i=[];let o=n;const r=n-No+1+Yl.length;for(let a=0;a<r;a++){const c=Math.pow(2,o);e.push(c);let l=1/c;a>n-No?l=Yl[a-n+No-1]:a===0&&(l=0),i.push(l);const u=1/(c-2),m=-u,g=1+u,x=[m,m,g,m,g,g,m,m,g,g,m,g],f=6,v=6,A=3,M=2,d=1,h=new Float32Array(A*v*f),p=new Float32Array(M*v*f),_=new Float32Array(d*v*f);for(let w=0;w<f;w++){const R=w%3*2/3-1,C=w>2?0:-1,S=[R,C,0,R+2/3,C,0,R+2/3,C+1,0,R,C,0,R+2/3,C+1,0,R,C+1,0];h.set(S,A*v*w),p.set(x,M*v*w);const y=[w,w,w,w,w,w];_.set(y,d*v*w)}const T=new Ye;T.setAttribute("position",new nn(h,A)),T.setAttribute("uv",new nn(p,M)),T.setAttribute("faceIndex",new nn(_,d)),t.push(T),o>No&&o--}return{lodPlanes:t,sizeLods:e,sigmas:i}}function Jl(n,t,e){const i=new ao(n,t,e);return i.texture.mapping=Nr,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function _r(n,t,e,i,o){n.viewport.set(t,e,i,o),n.scissor.set(t,e,i,o)}function Hx(n,t,e){const i=new Float32Array(to),o=new z(0,1,0);return new ki({name:"SphericalGaussianBlur",defines:{n:to,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:o}},vertexShader:Gc(),fragmentShader:`

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
		`,blending:Li,depthTest:!1,depthWrite:!1})}function jl(){return new ki({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Gc(),fragmentShader:`

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
		`,blending:Li,depthTest:!1,depthWrite:!1})}function Ql(){return new ki({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Gc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Li,depthTest:!1,depthWrite:!1})}function Gc(){return`

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
	`}function Vx(n){let t=new WeakMap,e=null;function i(c){if(c&&c.isTexture){const l=c.mapping,u=l===Wa||l===Xa,m=l===Ho||l===Vo;if(u||m){let g=t.get(c);const x=g!==void 0?g.texture.pmremVersion:0;if(c.isRenderTargetTexture&&c.pmremVersion!==x)return e===null&&(e=new Kl(n)),g=u?e.fromEquirectangular(c,g):e.fromCubemap(c,g),g.texture.pmremVersion=c.pmremVersion,t.set(c,g),g.texture;if(g!==void 0)return g.texture;{const f=c.image;return u&&f&&f.height>0||m&&f&&o(f)?(e===null&&(e=new Kl(n)),g=u?e.fromEquirectangular(c):e.fromCubemap(c),g.texture.pmremVersion=c.pmremVersion,t.set(c,g),c.addEventListener("dispose",r),g.texture):null}}}return c}function o(c){let l=0;const u=6;for(let m=0;m<u;m++)c[m]!==void 0&&l++;return l===u}function r(c){const l=c.target;l.removeEventListener("dispose",r);const u=t.get(l);u!==void 0&&(t.delete(l),u.dispose())}function a(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:i,dispose:a}}function Gx(n){const t={};function e(i){if(t[i]!==void 0)return t[i];let o;switch(i){case"WEBGL_depth_texture":o=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":o=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":o=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":o=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:o=n.getExtension(i)}return t[i]=o,o}return{has:function(i){return e(i)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(i){const o=e(i);return o===null&&ko("THREE.WebGLRenderer: "+i+" extension not supported."),o}}}function Wx(n,t,e,i){const o={},r=new WeakMap;function a(g){const x=g.target;x.index!==null&&t.remove(x.index);for(const v in x.attributes)t.remove(x.attributes[v]);x.removeEventListener("dispose",a),delete o[x.id];const f=r.get(x);f&&(t.remove(f),r.delete(x)),i.releaseStatesOfGeometry(x),x.isInstancedBufferGeometry===!0&&delete x._maxInstanceCount,e.memory.geometries--}function c(g,x){return o[x.id]===!0||(x.addEventListener("dispose",a),o[x.id]=!0,e.memory.geometries++),x}function l(g){const x=g.attributes;for(const f in x)t.update(x[f],n.ARRAY_BUFFER)}function u(g){const x=[],f=g.index,v=g.attributes.position;let A=0;if(f!==null){const h=f.array;A=f.version;for(let p=0,_=h.length;p<_;p+=3){const T=h[p+0],w=h[p+1],R=h[p+2];x.push(T,w,w,R,R,T)}}else if(v!==void 0){const h=v.array;A=v.version;for(let p=0,_=h.length/3-1;p<_;p+=3){const T=p+0,w=p+1,R=p+2;x.push(T,w,w,R,R,T)}}else return;const M=new(ku(x)?Hu:zu)(x,1);M.version=A;const d=r.get(g);d&&t.remove(d),r.set(g,M)}function m(g){const x=r.get(g);if(x){const f=g.index;f!==null&&x.version<f.version&&u(g)}else u(g);return r.get(g)}return{get:c,update:l,getWireframeAttribute:m}}function Xx(n,t,e){let i;function o(x){i=x}let r,a;function c(x){r=x.type,a=x.bytesPerElement}function l(x,f){n.drawElements(i,f,r,x*a),e.update(f,i,1)}function u(x,f,v){v!==0&&(n.drawElementsInstanced(i,f,r,x*a,v),e.update(f,i,v))}function m(x,f,v){if(v===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,f,0,r,x,0,v);let M=0;for(let d=0;d<v;d++)M+=f[d];e.update(M,i,1)}function g(x,f,v,A){if(v===0)return;const M=t.get("WEBGL_multi_draw");if(M===null)for(let d=0;d<x.length;d++)u(x[d]/a,f[d],A[d]);else{M.multiDrawElementsInstancedWEBGL(i,f,0,r,x,0,A,0,v);let d=0;for(let h=0;h<v;h++)d+=f[h]*A[h];e.update(d,i,1)}}this.setMode=o,this.setIndex=c,this.render=l,this.renderInstances=u,this.renderMultiDraw=m,this.renderMultiDrawInstances=g}function qx(n){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,a,c){switch(e.calls++,a){case n.TRIANGLES:e.triangles+=c*(r/3);break;case n.LINES:e.lines+=c*(r/2);break;case n.LINE_STRIP:e.lines+=c*(r-1);break;case n.LINE_LOOP:e.lines+=c*r;break;case n.POINTS:e.points+=c*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function o(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:o,update:i}}function Yx(n,t,e){const i=new WeakMap,o=new Xe;function r(a,c,l){const u=a.morphTargetInfluences,m=c.morphAttributes.position||c.morphAttributes.normal||c.morphAttributes.color,g=m!==void 0?m.length:0;let x=i.get(c);if(x===void 0||x.count!==g){let y=function(){C.dispose(),i.delete(c),c.removeEventListener("dispose",y)};var f=y;x!==void 0&&x.texture.dispose();const v=c.morphAttributes.position!==void 0,A=c.morphAttributes.normal!==void 0,M=c.morphAttributes.color!==void 0,d=c.morphAttributes.position||[],h=c.morphAttributes.normal||[],p=c.morphAttributes.color||[];let _=0;v===!0&&(_=1),A===!0&&(_=2),M===!0&&(_=3);let T=c.attributes.position.count*_,w=1;T>t.maxTextureSize&&(w=Math.ceil(T/t.maxTextureSize),T=t.maxTextureSize);const R=new Float32Array(T*w*4*g),C=new Bu(R,T,w,g);C.type=_i,C.needsUpdate=!0;const S=_*4;for(let P=0;P<g;P++){const E=d[P],I=h[P],F=p[P],L=T*w*4*P;for(let D=0;D<E.count;D++){const N=D*S;v===!0&&(o.fromBufferAttribute(E,D),R[L+N+0]=o.x,R[L+N+1]=o.y,R[L+N+2]=o.z,R[L+N+3]=0),A===!0&&(o.fromBufferAttribute(I,D),R[L+N+4]=o.x,R[L+N+5]=o.y,R[L+N+6]=o.z,R[L+N+7]=0),M===!0&&(o.fromBufferAttribute(F,D),R[L+N+8]=o.x,R[L+N+9]=o.y,R[L+N+10]=o.z,R[L+N+11]=F.itemSize===4?o.w:1)}}x={count:g,texture:C,size:new Gt(T,w)},i.set(c,x),c.addEventListener("dispose",y)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",a.morphTexture,e);else{let v=0;for(let M=0;M<u.length;M++)v+=u[M];const A=c.morphTargetsRelative?1:1-v;l.getUniforms().setValue(n,"morphTargetBaseInfluence",A),l.getUniforms().setValue(n,"morphTargetInfluences",u)}l.getUniforms().setValue(n,"morphTargetsTexture",x.texture,e),l.getUniforms().setValue(n,"morphTargetsTextureSize",x.size)}return{update:r}}function Zx(n,t,e,i){let o=new WeakMap;function r(l){const u=i.render.frame,m=l.geometry,g=t.get(l,m);if(o.get(g)!==u&&(t.update(g),o.set(g,u)),l.isInstancedMesh&&(l.hasEventListener("dispose",c)===!1&&l.addEventListener("dispose",c),o.get(l)!==u&&(e.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,n.ARRAY_BUFFER),o.set(l,u))),l.isSkinnedMesh){const x=l.skeleton;o.get(x)!==u&&(x.update(),o.set(x,u))}return g}function a(){o=new WeakMap}function c(l){const u=l.target;u.removeEventListener("dispose",c),e.remove(u.instanceMatrix),u.instanceColor!==null&&e.remove(u.instanceColor)}return{update:r,dispose:a}}const ah=new Sn,tu=new Yu(1,1),ch=new Bu,lh=new Op,uh=new Wu,eu=[],nu=[],iu=new Float32Array(16),ou=new Float32Array(9),su=new Float32Array(4);function $o(n,t,e){const i=n[0];if(i<=0||i>0)return n;const o=t*e;let r=eu[o];if(r===void 0&&(r=new Float32Array(o),eu[o]=r),t!==0){i.toArray(r,0);for(let a=1,c=0;a!==t;++a)c+=e,n[a].toArray(r,c)}return r}function on(n,t){if(n.length!==t.length)return!1;for(let e=0,i=n.length;e<i;e++)if(n[e]!==t[e])return!1;return!0}function sn(n,t){for(let e=0,i=t.length;e<i;e++)n[e]=t[e]}function Br(n,t){let e=nu[t];e===void 0&&(e=new Int32Array(t),nu[t]=e);for(let i=0;i!==t;++i)e[i]=n.allocateTextureUnit();return e}function $x(n,t){const e=this.cache;e[0]!==t&&(n.uniform1f(this.addr,t),e[0]=t)}function Kx(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(on(e,t))return;n.uniform2fv(this.addr,t),sn(e,t)}}function Jx(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(n.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(on(e,t))return;n.uniform3fv(this.addr,t),sn(e,t)}}function jx(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(on(e,t))return;n.uniform4fv(this.addr,t),sn(e,t)}}function Qx(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(on(e,t))return;n.uniformMatrix2fv(this.addr,!1,t),sn(e,t)}else{if(on(e,i))return;su.set(i),n.uniformMatrix2fv(this.addr,!1,su),sn(e,i)}}function t1(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(on(e,t))return;n.uniformMatrix3fv(this.addr,!1,t),sn(e,t)}else{if(on(e,i))return;ou.set(i),n.uniformMatrix3fv(this.addr,!1,ou),sn(e,i)}}function e1(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(on(e,t))return;n.uniformMatrix4fv(this.addr,!1,t),sn(e,t)}else{if(on(e,i))return;iu.set(i),n.uniformMatrix4fv(this.addr,!1,iu),sn(e,i)}}function n1(n,t){const e=this.cache;e[0]!==t&&(n.uniform1i(this.addr,t),e[0]=t)}function i1(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(on(e,t))return;n.uniform2iv(this.addr,t),sn(e,t)}}function o1(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(on(e,t))return;n.uniform3iv(this.addr,t),sn(e,t)}}function s1(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(on(e,t))return;n.uniform4iv(this.addr,t),sn(e,t)}}function r1(n,t){const e=this.cache;e[0]!==t&&(n.uniform1ui(this.addr,t),e[0]=t)}function a1(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(on(e,t))return;n.uniform2uiv(this.addr,t),sn(e,t)}}function c1(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(on(e,t))return;n.uniform3uiv(this.addr,t),sn(e,t)}}function l1(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(on(e,t))return;n.uniform4uiv(this.addr,t),sn(e,t)}}function u1(n,t,e){const i=this.cache,o=e.allocateTextureUnit();i[0]!==o&&(n.uniform1i(this.addr,o),i[0]=o);let r;this.type===n.SAMPLER_2D_SHADOW?(tu.compareFunction=Uu,r=tu):r=ah,e.setTexture2D(t||r,o)}function h1(n,t,e){const i=this.cache,o=e.allocateTextureUnit();i[0]!==o&&(n.uniform1i(this.addr,o),i[0]=o),e.setTexture3D(t||lh,o)}function d1(n,t,e){const i=this.cache,o=e.allocateTextureUnit();i[0]!==o&&(n.uniform1i(this.addr,o),i[0]=o),e.setTextureCube(t||uh,o)}function f1(n,t,e){const i=this.cache,o=e.allocateTextureUnit();i[0]!==o&&(n.uniform1i(this.addr,o),i[0]=o),e.setTexture2DArray(t||ch,o)}function p1(n){switch(n){case 5126:return $x;case 35664:return Kx;case 35665:return Jx;case 35666:return jx;case 35674:return Qx;case 35675:return t1;case 35676:return e1;case 5124:case 35670:return n1;case 35667:case 35671:return i1;case 35668:case 35672:return o1;case 35669:case 35673:return s1;case 5125:return r1;case 36294:return a1;case 36295:return c1;case 36296:return l1;case 35678:case 36198:case 36298:case 36306:case 35682:return u1;case 35679:case 36299:case 36307:return h1;case 35680:case 36300:case 36308:case 36293:return d1;case 36289:case 36303:case 36311:case 36292:return f1}}function m1(n,t){n.uniform1fv(this.addr,t)}function g1(n,t){const e=$o(t,this.size,2);n.uniform2fv(this.addr,e)}function x1(n,t){const e=$o(t,this.size,3);n.uniform3fv(this.addr,e)}function _1(n,t){const e=$o(t,this.size,4);n.uniform4fv(this.addr,e)}function v1(n,t){const e=$o(t,this.size,4);n.uniformMatrix2fv(this.addr,!1,e)}function M1(n,t){const e=$o(t,this.size,9);n.uniformMatrix3fv(this.addr,!1,e)}function w1(n,t){const e=$o(t,this.size,16);n.uniformMatrix4fv(this.addr,!1,e)}function y1(n,t){n.uniform1iv(this.addr,t)}function S1(n,t){n.uniform2iv(this.addr,t)}function b1(n,t){n.uniform3iv(this.addr,t)}function T1(n,t){n.uniform4iv(this.addr,t)}function E1(n,t){n.uniform1uiv(this.addr,t)}function A1(n,t){n.uniform2uiv(this.addr,t)}function R1(n,t){n.uniform3uiv(this.addr,t)}function C1(n,t){n.uniform4uiv(this.addr,t)}function P1(n,t,e){const i=this.cache,o=t.length,r=Br(e,o);on(i,r)||(n.uniform1iv(this.addr,r),sn(i,r));for(let a=0;a!==o;++a)e.setTexture2D(t[a]||ah,r[a])}function I1(n,t,e){const i=this.cache,o=t.length,r=Br(e,o);on(i,r)||(n.uniform1iv(this.addr,r),sn(i,r));for(let a=0;a!==o;++a)e.setTexture3D(t[a]||lh,r[a])}function D1(n,t,e){const i=this.cache,o=t.length,r=Br(e,o);on(i,r)||(n.uniform1iv(this.addr,r),sn(i,r));for(let a=0;a!==o;++a)e.setTextureCube(t[a]||uh,r[a])}function L1(n,t,e){const i=this.cache,o=t.length,r=Br(e,o);on(i,r)||(n.uniform1iv(this.addr,r),sn(i,r));for(let a=0;a!==o;++a)e.setTexture2DArray(t[a]||ch,r[a])}function F1(n){switch(n){case 5126:return m1;case 35664:return g1;case 35665:return x1;case 35666:return _1;case 35674:return v1;case 35675:return M1;case 35676:return w1;case 5124:case 35670:return y1;case 35667:case 35671:return S1;case 35668:case 35672:return b1;case 35669:case 35673:return T1;case 5125:return E1;case 36294:return A1;case 36295:return R1;case 36296:return C1;case 35678:case 36198:case 36298:case 36306:case 35682:return P1;case 35679:case 36299:case 36307:return I1;case 35680:case 36300:case 36308:case 36293:return D1;case 36289:case 36303:case 36311:case 36292:return L1}}class N1{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.setValue=p1(e.type)}}class U1{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=F1(e.type)}}class k1{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,i){const o=this.seq;for(let r=0,a=o.length;r!==a;++r){const c=o[r];c.setValue(t,e[c.id],i)}}}const Ia=/(\w+)(\])?(\[|\.)?/g;function ru(n,t){n.seq.push(t),n.map[t.id]=t}function B1(n,t,e){const i=n.name,o=i.length;for(Ia.lastIndex=0;;){const r=Ia.exec(i),a=Ia.lastIndex;let c=r[1];const l=r[2]==="]",u=r[3];if(l&&(c=c|0),u===void 0||u==="["&&a+2===o){ru(e,u===void 0?new N1(c,n,t):new U1(c,n,t));break}else{let g=e.map[c];g===void 0&&(g=new k1(c),ru(e,g)),e=g}}}class Er{constructor(t,e){this.seq=[],this.map={};const i=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let o=0;o<i;++o){const r=t.getActiveUniform(e,o),a=t.getUniformLocation(e,r.name);B1(r,a,this)}}setValue(t,e,i,o){const r=this.map[e];r!==void 0&&r.setValue(t,i,o)}setOptional(t,e,i){const o=e[i];o!==void 0&&this.setValue(t,i,o)}static upload(t,e,i,o){for(let r=0,a=e.length;r!==a;++r){const c=e[r],l=i[c.id];l.needsUpdate!==!1&&c.setValue(t,l.value,o)}}static seqWithValue(t,e){const i=[];for(let o=0,r=t.length;o!==r;++o){const a=t[o];a.id in e&&i.push(a)}return i}}function au(n,t,e){const i=n.createShader(t);return n.shaderSource(i,e),n.compileShader(i),i}const O1=37297;let z1=0;function H1(n,t){const e=n.split(`
`),i=[],o=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let a=o;a<r;a++){const c=a+1;i.push(`${c===t?">":" "} ${c}: ${e[a]}`)}return i.join(`
`)}const cu=new Me;function V1(n){Pe._getMatrix(cu,Pe.workingColorSpace,n);const t=`mat3( ${cu.elements.map(e=>e.toFixed(4))} )`;switch(Pe.getTransfer(n)){case Rr:return[t,"LinearTransferOETF"];case Ue:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",n),[t,"LinearTransferOETF"]}}function lu(n,t,e){const i=n.getShaderParameter(t,n.COMPILE_STATUS),r=(n.getShaderInfoLog(t)||"").trim();if(i&&r==="")return"";const a=/ERROR: 0:(\d+)/.exec(r);if(a){const c=parseInt(a[1]);return e.toUpperCase()+`

`+r+`

`+H1(n.getShaderSource(t),c)}else return r}function G1(n,t){const e=V1(t);return[`vec4 ${n}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function W1(n,t){let e;switch(t){case jf:e="Linear";break;case Qf:e="Reinhard";break;case tp:e="Cineon";break;case ep:e="ACESFilmic";break;case ip:e="AgX";break;case op:e="Neutral";break;case np:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+n+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const vr=new z;function X1(){Pe.getLuminanceCoefficients(vr);const n=vr.x.toFixed(4),t=vr.y.toFixed(4),e=vr.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function q1(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ms).join(`
`)}function Y1(n){const t=[];for(const e in n){const i=n[e];i!==!1&&t.push("#define "+e+" "+i)}return t.join(`
`)}function Z1(n,t){const e={},i=n.getProgramParameter(t,n.ACTIVE_ATTRIBUTES);for(let o=0;o<i;o++){const r=n.getActiveAttrib(t,o),a=r.name;let c=1;r.type===n.FLOAT_MAT2&&(c=2),r.type===n.FLOAT_MAT3&&(c=3),r.type===n.FLOAT_MAT4&&(c=4),e[a]={type:r.type,location:n.getAttribLocation(t,a),locationSize:c}}return e}function ms(n){return n!==""}function uu(n,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function hu(n,t){return n.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const $1=/^[ \t]*#include +<([\w\d./]+)>/gm;function Sc(n){return n.replace($1,J1)}const K1=new Map;function J1(n,t){let e=we[t];if(e===void 0){const i=K1.get(t);if(i!==void 0)e=we[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,i);else throw new Error("Can not resolve #include <"+t+">")}return Sc(e)}const j1=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function du(n){return n.replace(j1,Q1)}function Q1(n,t,e,i){let o="";for(let r=parseInt(t);r<parseInt(e);r++)o+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return o}function fu(n){let t=`precision ${n.precision} float;
	precision ${n.precision} int;
	precision ${n.precision} sampler2D;
	precision ${n.precision} samplerCube;
	precision ${n.precision} sampler3D;
	precision ${n.precision} sampler2DArray;
	precision ${n.precision} sampler2DShadow;
	precision ${n.precision} samplerCubeShadow;
	precision ${n.precision} sampler2DArrayShadow;
	precision ${n.precision} isampler2D;
	precision ${n.precision} isampler3D;
	precision ${n.precision} isamplerCube;
	precision ${n.precision} isampler2DArray;
	precision ${n.precision} usampler2D;
	precision ${n.precision} usampler3D;
	precision ${n.precision} usamplerCube;
	precision ${n.precision} usampler2DArray;
	`;return n.precision==="highp"?t+=`
#define HIGH_PRECISION`:n.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function t_(n){let t="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===Su?t="SHADOWMAP_TYPE_PCF":n.shadowMapType===bu?t="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===gi&&(t="SHADOWMAP_TYPE_VSM"),t}function e_(n){let t="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case Ho:case Vo:t="ENVMAP_TYPE_CUBE";break;case Nr:t="ENVMAP_TYPE_CUBE_UV";break}return t}function n_(n){let t="ENVMAP_MODE_REFLECTION";return n.envMap&&n.envMapMode===Vo&&(t="ENVMAP_MODE_REFRACTION"),t}function i_(n){let t="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case Tu:t="ENVMAP_BLENDING_MULTIPLY";break;case Kf:t="ENVMAP_BLENDING_MIX";break;case Jf:t="ENVMAP_BLENDING_ADD";break}return t}function o_(n){const t=n.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,i=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:i,maxMip:e}}function s_(n,t,e,i){const o=n.getContext(),r=e.defines;let a=e.vertexShader,c=e.fragmentShader;const l=t_(e),u=e_(e),m=n_(e),g=i_(e),x=o_(e),f=q1(e),v=Y1(r),A=o.createProgram();let M,d,h=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(M=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,v].filter(ms).join(`
`),M.length>0&&(M+=`
`),d=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,v].filter(ms).join(`
`),d.length>0&&(d+=`
`)):(M=[fu(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,v,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+m:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reversedDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ms).join(`
`),d=[fu(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,v,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+u:"",e.envMap?"#define "+m:"",e.envMap?"#define "+g:"",x?"#define CUBEUV_TEXEL_WIDTH "+x.texelWidth:"",x?"#define CUBEUV_TEXEL_HEIGHT "+x.texelHeight:"",x?"#define CUBEUV_MAX_MIP "+x.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reversedDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Fi?"#define TONE_MAPPING":"",e.toneMapping!==Fi?we.tonemapping_pars_fragment:"",e.toneMapping!==Fi?W1("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",we.colorspace_pars_fragment,G1("linearToOutputTexel",e.outputColorSpace),X1(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(ms).join(`
`)),a=Sc(a),a=uu(a,e),a=hu(a,e),c=Sc(c),c=uu(c,e),c=hu(c,e),a=du(a),c=du(c),e.isRawShaderMaterial!==!0&&(h=`#version 300 es
`,M=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+M,d=["#define varying in",e.glslVersion===fl?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===fl?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+d);const p=h+M+a,_=h+d+c,T=au(o,o.VERTEX_SHADER,p),w=au(o,o.FRAGMENT_SHADER,_);o.attachShader(A,T),o.attachShader(A,w),e.index0AttributeName!==void 0?o.bindAttribLocation(A,0,e.index0AttributeName):e.morphTargets===!0&&o.bindAttribLocation(A,0,"position"),o.linkProgram(A);function R(P){if(n.debug.checkShaderErrors){const E=o.getProgramInfoLog(A)||"",I=o.getShaderInfoLog(T)||"",F=o.getShaderInfoLog(w)||"",L=E.trim(),D=I.trim(),N=F.trim();let H=!0,X=!0;if(o.getProgramParameter(A,o.LINK_STATUS)===!1)if(H=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(o,A,T,w);else{const V=lu(o,T,"vertex"),Z=lu(o,w,"fragment");console.error("THREE.WebGLProgram: Shader Error "+o.getError()+" - VALIDATE_STATUS "+o.getProgramParameter(A,o.VALIDATE_STATUS)+`

Material Name: `+P.name+`
Material Type: `+P.type+`

Program Info Log: `+L+`
`+V+`
`+Z)}else L!==""?console.warn("THREE.WebGLProgram: Program Info Log:",L):(D===""||N==="")&&(X=!1);X&&(P.diagnostics={runnable:H,programLog:L,vertexShader:{log:D,prefix:M},fragmentShader:{log:N,prefix:d}})}o.deleteShader(T),o.deleteShader(w),C=new Er(o,A),S=Z1(o,A)}let C;this.getUniforms=function(){return C===void 0&&R(this),C};let S;this.getAttributes=function(){return S===void 0&&R(this),S};let y=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return y===!1&&(y=o.getProgramParameter(A,O1)),y},this.destroy=function(){i.releaseStatesOfProgram(this),o.deleteProgram(A),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=z1++,this.cacheKey=t,this.usedTimes=1,this.program=A,this.vertexShader=T,this.fragmentShader=w,this}let r_=0;class a_{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,i=t.fragmentShader,o=this._getShaderStage(e),r=this._getShaderStage(i),a=this._getShaderCacheForMaterial(t);return a.has(o)===!1&&(a.add(o),o.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const i of e)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let i=e.get(t);return i===void 0&&(i=new Set,e.set(t,i)),i}_getShaderStage(t){const e=this.shaderCache;let i=e.get(t);return i===void 0&&(i=new c_(t),e.set(t,i)),i}}class c_{constructor(t){this.id=r_++,this.code=t,this.usedTimes=0}}function l_(n,t,e,i,o,r,a){const c=new Uc,l=new a_,u=new Set,m=[],g=o.logarithmicDepthBuffer,x=o.vertexTextures;let f=o.precision;const v={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function A(S){return u.add(S),S===0?"uv":`uv${S}`}function M(S,y,P,E,I){const F=E.fog,L=I.geometry,D=S.isMeshStandardMaterial?E.environment:null,N=(S.isMeshStandardMaterial?e:t).get(S.envMap||D),H=N&&N.mapping===Nr?N.image.height:null,X=v[S.type];S.precision!==null&&(f=o.getMaxPrecision(S.precision),f!==S.precision&&console.warn("THREE.WebGLProgram.getParameters:",S.precision,"not supported, using",f,"instead."));const V=L.morphAttributes.position||L.morphAttributes.normal||L.morphAttributes.color,Z=V!==void 0?V.length:0;let $=0;L.morphAttributes.position!==void 0&&($=1),L.morphAttributes.normal!==void 0&&($=2),L.morphAttributes.color!==void 0&&($=3);let xt,yt,j,ot;if(X){const Ce=ei[X];xt=Ce.vertexShader,yt=Ce.fragmentShader}else xt=S.vertexShader,yt=S.fragmentShader,l.update(S),j=l.getVertexShaderID(S),ot=l.getFragmentShaderID(S);const tt=n.getRenderTarget(),_t=n.state.buffers.depth.getReversed(),mt=I.isInstancedMesh===!0,rt=I.isBatchedMesh===!0,Rt=!!S.map,St=!!S.matcap,G=!!N,at=!!S.aoMap,st=!!S.lightMap,ht=!!S.bumpMap,dt=!!S.normalMap,Pt=!!S.displacementMap,Ct=!!S.emissiveMap,Ot=!!S.metalnessMap,xe=!!S.roughnessMap,fe=S.anisotropy>0,W=S.clearcoat>0,U=S.dispersion>0,it=S.iridescence>0,ft=S.sheen>0,Dt=S.transmission>0,gt=fe&&!!S.anisotropyMap,ae=W&&!!S.clearcoatMap,zt=W&&!!S.clearcoatNormalMap,ee=W&&!!S.clearcoatRoughnessMap,oe=it&&!!S.iridescenceMap,Ft=it&&!!S.iridescenceThicknessMap,Jt=ft&&!!S.sheenColorMap,me=ft&&!!S.sheenRoughnessMap,se=!!S.specularMap,Yt=!!S.specularColorMap,ve=!!S.specularIntensityMap,J=Dt&&!!S.transmissionMap,Bt=Dt&&!!S.thicknessMap,Wt=!!S.gradientMap,te=!!S.alphaMap,Ut=S.alphaTest>0,Et=!!S.alphaHash,re=!!S.extensions;let _e=Fi;S.toneMapped&&(tt===null||tt.isXRRenderTarget===!0)&&(_e=n.toneMapping);const Ne={shaderID:X,shaderType:S.type,shaderName:S.name,vertexShader:xt,fragmentShader:yt,defines:S.defines,customVertexShaderID:j,customFragmentShaderID:ot,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:f,batching:rt,batchingColor:rt&&I._colorsTexture!==null,instancing:mt,instancingColor:mt&&I.instanceColor!==null,instancingMorph:mt&&I.morphTexture!==null,supportsVertexTextures:x,outputColorSpace:tt===null?n.outputColorSpace:tt.isXRRenderTarget===!0?tt.texture.colorSpace:Go,alphaToCoverage:!!S.alphaToCoverage,map:Rt,matcap:St,envMap:G,envMapMode:G&&N.mapping,envMapCubeUVHeight:H,aoMap:at,lightMap:st,bumpMap:ht,normalMap:dt,displacementMap:x&&Pt,emissiveMap:Ct,normalMapObjectSpace:dt&&S.normalMapType===cp,normalMapTangentSpace:dt&&S.normalMapType===Nu,metalnessMap:Ot,roughnessMap:xe,anisotropy:fe,anisotropyMap:gt,clearcoat:W,clearcoatMap:ae,clearcoatNormalMap:zt,clearcoatRoughnessMap:ee,dispersion:U,iridescence:it,iridescenceMap:oe,iridescenceThicknessMap:Ft,sheen:ft,sheenColorMap:Jt,sheenRoughnessMap:me,specularMap:se,specularColorMap:Yt,specularIntensityMap:ve,transmission:Dt,transmissionMap:J,thicknessMap:Bt,gradientMap:Wt,opaque:S.transparent===!1&&S.blending===Uo&&S.alphaToCoverage===!1,alphaMap:te,alphaTest:Ut,alphaHash:Et,combine:S.combine,mapUv:Rt&&A(S.map.channel),aoMapUv:at&&A(S.aoMap.channel),lightMapUv:st&&A(S.lightMap.channel),bumpMapUv:ht&&A(S.bumpMap.channel),normalMapUv:dt&&A(S.normalMap.channel),displacementMapUv:Pt&&A(S.displacementMap.channel),emissiveMapUv:Ct&&A(S.emissiveMap.channel),metalnessMapUv:Ot&&A(S.metalnessMap.channel),roughnessMapUv:xe&&A(S.roughnessMap.channel),anisotropyMapUv:gt&&A(S.anisotropyMap.channel),clearcoatMapUv:ae&&A(S.clearcoatMap.channel),clearcoatNormalMapUv:zt&&A(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ee&&A(S.clearcoatRoughnessMap.channel),iridescenceMapUv:oe&&A(S.iridescenceMap.channel),iridescenceThicknessMapUv:Ft&&A(S.iridescenceThicknessMap.channel),sheenColorMapUv:Jt&&A(S.sheenColorMap.channel),sheenRoughnessMapUv:me&&A(S.sheenRoughnessMap.channel),specularMapUv:se&&A(S.specularMap.channel),specularColorMapUv:Yt&&A(S.specularColorMap.channel),specularIntensityMapUv:ve&&A(S.specularIntensityMap.channel),transmissionMapUv:J&&A(S.transmissionMap.channel),thicknessMapUv:Bt&&A(S.thicknessMap.channel),alphaMapUv:te&&A(S.alphaMap.channel),vertexTangents:!!L.attributes.tangent&&(dt||fe),vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!L.attributes.color&&L.attributes.color.itemSize===4,pointsUvs:I.isPoints===!0&&!!L.attributes.uv&&(Rt||te),fog:!!F,useFog:S.fog===!0,fogExp2:!!F&&F.isFogExp2,flatShading:S.flatShading===!0&&S.wireframe===!1,sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:g,reversedDepthBuffer:_t,skinning:I.isSkinnedMesh===!0,morphTargets:L.morphAttributes.position!==void 0,morphNormals:L.morphAttributes.normal!==void 0,morphColors:L.morphAttributes.color!==void 0,morphTargetsCount:Z,morphTextureStride:$,numDirLights:y.directional.length,numPointLights:y.point.length,numSpotLights:y.spot.length,numSpotLightMaps:y.spotLightMap.length,numRectAreaLights:y.rectArea.length,numHemiLights:y.hemi.length,numDirLightShadows:y.directionalShadowMap.length,numPointLightShadows:y.pointShadowMap.length,numSpotLightShadows:y.spotShadowMap.length,numSpotLightShadowsWithMaps:y.numSpotLightShadowsWithMaps,numLightProbes:y.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:S.dithering,shadowMapEnabled:n.shadowMap.enabled&&P.length>0,shadowMapType:n.shadowMap.type,toneMapping:_e,decodeVideoTexture:Rt&&S.map.isVideoTexture===!0&&Pe.getTransfer(S.map.colorSpace)===Ue,decodeVideoTextureEmissive:Ct&&S.emissiveMap.isVideoTexture===!0&&Pe.getTransfer(S.emissiveMap.colorSpace)===Ue,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===Cn,flipSided:S.side===In,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionClipCullDistance:re&&S.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(re&&S.extensions.multiDraw===!0||rt)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:S.customProgramCacheKey()};return Ne.vertexUv1s=u.has(1),Ne.vertexUv2s=u.has(2),Ne.vertexUv3s=u.has(3),u.clear(),Ne}function d(S){const y=[];if(S.shaderID?y.push(S.shaderID):(y.push(S.customVertexShaderID),y.push(S.customFragmentShaderID)),S.defines!==void 0)for(const P in S.defines)y.push(P),y.push(S.defines[P]);return S.isRawShaderMaterial===!1&&(h(y,S),p(y,S),y.push(n.outputColorSpace)),y.push(S.customProgramCacheKey),y.join()}function h(S,y){S.push(y.precision),S.push(y.outputColorSpace),S.push(y.envMapMode),S.push(y.envMapCubeUVHeight),S.push(y.mapUv),S.push(y.alphaMapUv),S.push(y.lightMapUv),S.push(y.aoMapUv),S.push(y.bumpMapUv),S.push(y.normalMapUv),S.push(y.displacementMapUv),S.push(y.emissiveMapUv),S.push(y.metalnessMapUv),S.push(y.roughnessMapUv),S.push(y.anisotropyMapUv),S.push(y.clearcoatMapUv),S.push(y.clearcoatNormalMapUv),S.push(y.clearcoatRoughnessMapUv),S.push(y.iridescenceMapUv),S.push(y.iridescenceThicknessMapUv),S.push(y.sheenColorMapUv),S.push(y.sheenRoughnessMapUv),S.push(y.specularMapUv),S.push(y.specularColorMapUv),S.push(y.specularIntensityMapUv),S.push(y.transmissionMapUv),S.push(y.thicknessMapUv),S.push(y.combine),S.push(y.fogExp2),S.push(y.sizeAttenuation),S.push(y.morphTargetsCount),S.push(y.morphAttributeCount),S.push(y.numDirLights),S.push(y.numPointLights),S.push(y.numSpotLights),S.push(y.numSpotLightMaps),S.push(y.numHemiLights),S.push(y.numRectAreaLights),S.push(y.numDirLightShadows),S.push(y.numPointLightShadows),S.push(y.numSpotLightShadows),S.push(y.numSpotLightShadowsWithMaps),S.push(y.numLightProbes),S.push(y.shadowMapType),S.push(y.toneMapping),S.push(y.numClippingPlanes),S.push(y.numClipIntersection),S.push(y.depthPacking)}function p(S,y){c.disableAll(),y.supportsVertexTextures&&c.enable(0),y.instancing&&c.enable(1),y.instancingColor&&c.enable(2),y.instancingMorph&&c.enable(3),y.matcap&&c.enable(4),y.envMap&&c.enable(5),y.normalMapObjectSpace&&c.enable(6),y.normalMapTangentSpace&&c.enable(7),y.clearcoat&&c.enable(8),y.iridescence&&c.enable(9),y.alphaTest&&c.enable(10),y.vertexColors&&c.enable(11),y.vertexAlphas&&c.enable(12),y.vertexUv1s&&c.enable(13),y.vertexUv2s&&c.enable(14),y.vertexUv3s&&c.enable(15),y.vertexTangents&&c.enable(16),y.anisotropy&&c.enable(17),y.alphaHash&&c.enable(18),y.batching&&c.enable(19),y.dispersion&&c.enable(20),y.batchingColor&&c.enable(21),y.gradientMap&&c.enable(22),S.push(c.mask),c.disableAll(),y.fog&&c.enable(0),y.useFog&&c.enable(1),y.flatShading&&c.enable(2),y.logarithmicDepthBuffer&&c.enable(3),y.reversedDepthBuffer&&c.enable(4),y.skinning&&c.enable(5),y.morphTargets&&c.enable(6),y.morphNormals&&c.enable(7),y.morphColors&&c.enable(8),y.premultipliedAlpha&&c.enable(9),y.shadowMapEnabled&&c.enable(10),y.doubleSided&&c.enable(11),y.flipSided&&c.enable(12),y.useDepthPacking&&c.enable(13),y.dithering&&c.enable(14),y.transmission&&c.enable(15),y.sheen&&c.enable(16),y.opaque&&c.enable(17),y.pointsUvs&&c.enable(18),y.decodeVideoTexture&&c.enable(19),y.decodeVideoTextureEmissive&&c.enable(20),y.alphaToCoverage&&c.enable(21),S.push(c.mask)}function _(S){const y=v[S.type];let P;if(y){const E=ei[y];P=jp.clone(E.uniforms)}else P=S.uniforms;return P}function T(S,y){let P;for(let E=0,I=m.length;E<I;E++){const F=m[E];if(F.cacheKey===y){P=F,++P.usedTimes;break}}return P===void 0&&(P=new s_(n,y,S,r),m.push(P)),P}function w(S){if(--S.usedTimes===0){const y=m.indexOf(S);m[y]=m[m.length-1],m.pop(),S.destroy()}}function R(S){l.remove(S)}function C(){l.dispose()}return{getParameters:M,getProgramCacheKey:d,getUniforms:_,acquireProgram:T,releaseProgram:w,releaseShaderCache:R,programs:m,dispose:C}}function u_(){let n=new WeakMap;function t(a){return n.has(a)}function e(a){let c=n.get(a);return c===void 0&&(c={},n.set(a,c)),c}function i(a){n.delete(a)}function o(a,c,l){n.get(a)[c]=l}function r(){n=new WeakMap}return{has:t,get:e,remove:i,update:o,dispose:r}}function h_(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.material.id!==t.material.id?n.material.id-t.material.id:n.z!==t.z?n.z-t.z:n.id-t.id}function pu(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.z!==t.z?t.z-n.z:n.id-t.id}function mu(){const n=[];let t=0;const e=[],i=[],o=[];function r(){t=0,e.length=0,i.length=0,o.length=0}function a(g,x,f,v,A,M){let d=n[t];return d===void 0?(d={id:g.id,object:g,geometry:x,material:f,groupOrder:v,renderOrder:g.renderOrder,z:A,group:M},n[t]=d):(d.id=g.id,d.object=g,d.geometry=x,d.material=f,d.groupOrder=v,d.renderOrder=g.renderOrder,d.z=A,d.group=M),t++,d}function c(g,x,f,v,A,M){const d=a(g,x,f,v,A,M);f.transmission>0?i.push(d):f.transparent===!0?o.push(d):e.push(d)}function l(g,x,f,v,A,M){const d=a(g,x,f,v,A,M);f.transmission>0?i.unshift(d):f.transparent===!0?o.unshift(d):e.unshift(d)}function u(g,x){e.length>1&&e.sort(g||h_),i.length>1&&i.sort(x||pu),o.length>1&&o.sort(x||pu)}function m(){for(let g=t,x=n.length;g<x;g++){const f=n[g];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:e,transmissive:i,transparent:o,init:r,push:c,unshift:l,finish:m,sort:u}}function d_(){let n=new WeakMap;function t(i,o){const r=n.get(i);let a;return r===void 0?(a=new mu,n.set(i,[a])):o>=r.length?(a=new mu,r.push(a)):a=r[o],a}function e(){n=new WeakMap}return{get:t,dispose:e}}function f_(){const n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new z,color:new $t};break;case"SpotLight":e={position:new z,direction:new z,color:new $t,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new z,color:new $t,distance:0,decay:0};break;case"HemisphereLight":e={direction:new z,skyColor:new $t,groundColor:new $t};break;case"RectAreaLight":e={color:new $t,position:new z,halfWidth:new z,halfHeight:new z};break}return n[t.id]=e,e}}}function p_(){const n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Gt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Gt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Gt,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[t.id]=e,e}}}let m_=0;function g_(n,t){return(t.castShadow?2:0)-(n.castShadow?2:0)+(t.map?1:0)-(n.map?1:0)}function x_(n){const t=new f_,e=p_(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let u=0;u<9;u++)i.probe.push(new z);const o=new z,r=new Be,a=new Be;function c(u){let m=0,g=0,x=0;for(let S=0;S<9;S++)i.probe[S].set(0,0,0);let f=0,v=0,A=0,M=0,d=0,h=0,p=0,_=0,T=0,w=0,R=0;u.sort(g_);for(let S=0,y=u.length;S<y;S++){const P=u[S],E=P.color,I=P.intensity,F=P.distance,L=P.shadow&&P.shadow.map?P.shadow.map.texture:null;if(P.isAmbientLight)m+=E.r*I,g+=E.g*I,x+=E.b*I;else if(P.isLightProbe){for(let D=0;D<9;D++)i.probe[D].addScaledVector(P.sh.coefficients[D],I);R++}else if(P.isDirectionalLight){const D=t.get(P);if(D.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){const N=P.shadow,H=e.get(P);H.shadowIntensity=N.intensity,H.shadowBias=N.bias,H.shadowNormalBias=N.normalBias,H.shadowRadius=N.radius,H.shadowMapSize=N.mapSize,i.directionalShadow[f]=H,i.directionalShadowMap[f]=L,i.directionalShadowMatrix[f]=P.shadow.matrix,h++}i.directional[f]=D,f++}else if(P.isSpotLight){const D=t.get(P);D.position.setFromMatrixPosition(P.matrixWorld),D.color.copy(E).multiplyScalar(I),D.distance=F,D.coneCos=Math.cos(P.angle),D.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),D.decay=P.decay,i.spot[A]=D;const N=P.shadow;if(P.map&&(i.spotLightMap[T]=P.map,T++,N.updateMatrices(P),P.castShadow&&w++),i.spotLightMatrix[A]=N.matrix,P.castShadow){const H=e.get(P);H.shadowIntensity=N.intensity,H.shadowBias=N.bias,H.shadowNormalBias=N.normalBias,H.shadowRadius=N.radius,H.shadowMapSize=N.mapSize,i.spotShadow[A]=H,i.spotShadowMap[A]=L,_++}A++}else if(P.isRectAreaLight){const D=t.get(P);D.color.copy(E).multiplyScalar(I),D.halfWidth.set(P.width*.5,0,0),D.halfHeight.set(0,P.height*.5,0),i.rectArea[M]=D,M++}else if(P.isPointLight){const D=t.get(P);if(D.color.copy(P.color).multiplyScalar(P.intensity),D.distance=P.distance,D.decay=P.decay,P.castShadow){const N=P.shadow,H=e.get(P);H.shadowIntensity=N.intensity,H.shadowBias=N.bias,H.shadowNormalBias=N.normalBias,H.shadowRadius=N.radius,H.shadowMapSize=N.mapSize,H.shadowCameraNear=N.camera.near,H.shadowCameraFar=N.camera.far,i.pointShadow[v]=H,i.pointShadowMap[v]=L,i.pointShadowMatrix[v]=P.shadow.matrix,p++}i.point[v]=D,v++}else if(P.isHemisphereLight){const D=t.get(P);D.skyColor.copy(P.color).multiplyScalar(I),D.groundColor.copy(P.groundColor).multiplyScalar(I),i.hemi[d]=D,d++}}M>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=Zt.LTC_FLOAT_1,i.rectAreaLTC2=Zt.LTC_FLOAT_2):(i.rectAreaLTC1=Zt.LTC_HALF_1,i.rectAreaLTC2=Zt.LTC_HALF_2)),i.ambient[0]=m,i.ambient[1]=g,i.ambient[2]=x;const C=i.hash;(C.directionalLength!==f||C.pointLength!==v||C.spotLength!==A||C.rectAreaLength!==M||C.hemiLength!==d||C.numDirectionalShadows!==h||C.numPointShadows!==p||C.numSpotShadows!==_||C.numSpotMaps!==T||C.numLightProbes!==R)&&(i.directional.length=f,i.spot.length=A,i.rectArea.length=M,i.point.length=v,i.hemi.length=d,i.directionalShadow.length=h,i.directionalShadowMap.length=h,i.pointShadow.length=p,i.pointShadowMap.length=p,i.spotShadow.length=_,i.spotShadowMap.length=_,i.directionalShadowMatrix.length=h,i.pointShadowMatrix.length=p,i.spotLightMatrix.length=_+T-w,i.spotLightMap.length=T,i.numSpotLightShadowsWithMaps=w,i.numLightProbes=R,C.directionalLength=f,C.pointLength=v,C.spotLength=A,C.rectAreaLength=M,C.hemiLength=d,C.numDirectionalShadows=h,C.numPointShadows=p,C.numSpotShadows=_,C.numSpotMaps=T,C.numLightProbes=R,i.version=m_++)}function l(u,m){let g=0,x=0,f=0,v=0,A=0;const M=m.matrixWorldInverse;for(let d=0,h=u.length;d<h;d++){const p=u[d];if(p.isDirectionalLight){const _=i.directional[g];_.direction.setFromMatrixPosition(p.matrixWorld),o.setFromMatrixPosition(p.target.matrixWorld),_.direction.sub(o),_.direction.transformDirection(M),g++}else if(p.isSpotLight){const _=i.spot[f];_.position.setFromMatrixPosition(p.matrixWorld),_.position.applyMatrix4(M),_.direction.setFromMatrixPosition(p.matrixWorld),o.setFromMatrixPosition(p.target.matrixWorld),_.direction.sub(o),_.direction.transformDirection(M),f++}else if(p.isRectAreaLight){const _=i.rectArea[v];_.position.setFromMatrixPosition(p.matrixWorld),_.position.applyMatrix4(M),a.identity(),r.copy(p.matrixWorld),r.premultiply(M),a.extractRotation(r),_.halfWidth.set(p.width*.5,0,0),_.halfHeight.set(0,p.height*.5,0),_.halfWidth.applyMatrix4(a),_.halfHeight.applyMatrix4(a),v++}else if(p.isPointLight){const _=i.point[x];_.position.setFromMatrixPosition(p.matrixWorld),_.position.applyMatrix4(M),x++}else if(p.isHemisphereLight){const _=i.hemi[A];_.direction.setFromMatrixPosition(p.matrixWorld),_.direction.transformDirection(M),A++}}}return{setup:c,setupView:l,state:i}}function gu(n){const t=new x_(n),e=[],i=[];function o(m){u.camera=m,e.length=0,i.length=0}function r(m){e.push(m)}function a(m){i.push(m)}function c(){t.setup(e)}function l(m){t.setupView(e,m)}const u={lightsArray:e,shadowsArray:i,camera:null,lights:t,transmissionRenderTarget:{}};return{init:o,state:u,setupLights:c,setupLightsView:l,pushLight:r,pushShadow:a}}function __(n){let t=new WeakMap;function e(o,r=0){const a=t.get(o);let c;return a===void 0?(c=new gu(n),t.set(o,[c])):r>=a.length?(c=new gu(n),a.push(c)):c=a[r],c}function i(){t=new WeakMap}return{get:e,dispose:i}}const v_=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,M_=`uniform sampler2D shadow_pass;
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
}`;function w_(n,t,e){let i=new Bc;const o=new Gt,r=new Gt,a=new Xe,c=new V0({depthPacking:ap}),l=new G0,u={},m=e.maxTextureSize,g={[Ui]:In,[In]:Ui,[Cn]:Cn},x=new ki({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Gt},radius:{value:4}},vertexShader:v_,fragmentShader:M_}),f=x.clone();f.defines.HORIZONTAL_PASS=1;const v=new Ye;v.setAttribute("position",new nn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const A=new k(v,x),M=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Su;let d=this.type;this.render=function(w,R,C){if(M.enabled===!1||M.autoUpdate===!1&&M.needsUpdate===!1||w.length===0)return;const S=n.getRenderTarget(),y=n.getActiveCubeFace(),P=n.getActiveMipmapLevel(),E=n.state;E.setBlending(Li),E.buffers.depth.getReversed()?E.buffers.color.setClear(0,0,0,0):E.buffers.color.setClear(1,1,1,1),E.buffers.depth.setTest(!0),E.setScissorTest(!1);const I=d!==gi&&this.type===gi,F=d===gi&&this.type!==gi;for(let L=0,D=w.length;L<D;L++){const N=w[L],H=N.shadow;if(H===void 0){console.warn("THREE.WebGLShadowMap:",N,"has no shadow.");continue}if(H.autoUpdate===!1&&H.needsUpdate===!1)continue;o.copy(H.mapSize);const X=H.getFrameExtents();if(o.multiply(X),r.copy(H.mapSize),(o.x>m||o.y>m)&&(o.x>m&&(r.x=Math.floor(m/X.x),o.x=r.x*X.x,H.mapSize.x=r.x),o.y>m&&(r.y=Math.floor(m/X.y),o.y=r.y*X.y,H.mapSize.y=r.y)),H.map===null||I===!0||F===!0){const Z=this.type!==gi?{minFilter:jn,magFilter:jn}:{};H.map!==null&&H.map.dispose(),H.map=new ao(o.x,o.y,Z),H.map.texture.name=N.name+".shadowMap",H.camera.updateProjectionMatrix()}n.setRenderTarget(H.map),n.clear();const V=H.getViewportCount();for(let Z=0;Z<V;Z++){const $=H.getViewport(Z);a.set(r.x*$.x,r.y*$.y,r.x*$.z,r.y*$.w),E.viewport(a),H.updateMatrices(N,Z),i=H.getFrustum(),_(R,C,H.camera,N,this.type)}H.isPointLightShadow!==!0&&this.type===gi&&h(H,C),H.needsUpdate=!1}d=this.type,M.needsUpdate=!1,n.setRenderTarget(S,y,P)};function h(w,R){const C=t.update(A);x.defines.VSM_SAMPLES!==w.blurSamples&&(x.defines.VSM_SAMPLES=w.blurSamples,f.defines.VSM_SAMPLES=w.blurSamples,x.needsUpdate=!0,f.needsUpdate=!0),w.mapPass===null&&(w.mapPass=new ao(o.x,o.y)),x.uniforms.shadow_pass.value=w.map.texture,x.uniforms.resolution.value=w.mapSize,x.uniforms.radius.value=w.radius,n.setRenderTarget(w.mapPass),n.clear(),n.renderBufferDirect(R,null,C,x,A,null),f.uniforms.shadow_pass.value=w.mapPass.texture,f.uniforms.resolution.value=w.mapSize,f.uniforms.radius.value=w.radius,n.setRenderTarget(w.map),n.clear(),n.renderBufferDirect(R,null,C,f,A,null)}function p(w,R,C,S){let y=null;const P=C.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(P!==void 0)y=P;else if(y=C.isPointLight===!0?l:c,n.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0||R.alphaToCoverage===!0){const E=y.uuid,I=R.uuid;let F=u[E];F===void 0&&(F={},u[E]=F);let L=F[I];L===void 0&&(L=y.clone(),F[I]=L,R.addEventListener("dispose",T)),y=L}if(y.visible=R.visible,y.wireframe=R.wireframe,S===gi?y.side=R.shadowSide!==null?R.shadowSide:R.side:y.side=R.shadowSide!==null?R.shadowSide:g[R.side],y.alphaMap=R.alphaMap,y.alphaTest=R.alphaToCoverage===!0?.5:R.alphaTest,y.map=R.map,y.clipShadows=R.clipShadows,y.clippingPlanes=R.clippingPlanes,y.clipIntersection=R.clipIntersection,y.displacementMap=R.displacementMap,y.displacementScale=R.displacementScale,y.displacementBias=R.displacementBias,y.wireframeLinewidth=R.wireframeLinewidth,y.linewidth=R.linewidth,C.isPointLight===!0&&y.isMeshDistanceMaterial===!0){const E=n.properties.get(y);E.light=C}return y}function _(w,R,C,S,y){if(w.visible===!1)return;if(w.layers.test(R.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&y===gi)&&(!w.frustumCulled||i.intersectsObject(w))){w.modelViewMatrix.multiplyMatrices(C.matrixWorldInverse,w.matrixWorld);const I=t.update(w),F=w.material;if(Array.isArray(F)){const L=I.groups;for(let D=0,N=L.length;D<N;D++){const H=L[D],X=F[H.materialIndex];if(X&&X.visible){const V=p(w,X,S,y);w.onBeforeShadow(n,w,R,C,I,V,H),n.renderBufferDirect(C,null,I,V,w,H),w.onAfterShadow(n,w,R,C,I,V,H)}}}else if(F.visible){const L=p(w,F,S,y);w.onBeforeShadow(n,w,R,C,I,L,null),n.renderBufferDirect(C,null,I,L,w,null),w.onAfterShadow(n,w,R,C,I,L,null)}}const E=w.children;for(let I=0,F=E.length;I<F;I++)_(E[I],R,C,S,y)}function T(w){w.target.removeEventListener("dispose",T);for(const C in u){const S=u[C],y=w.target.uuid;y in S&&(S[y].dispose(),delete S[y])}}}const y_={[ka]:Ba,[Oa]:Va,[za]:Ga,[zo]:Ha,[Ba]:ka,[Va]:Oa,[Ga]:za,[Ha]:zo};function S_(n,t){function e(){let J=!1;const Bt=new Xe;let Wt=null;const te=new Xe(0,0,0,0);return{setMask:function(Ut){Wt!==Ut&&!J&&(n.colorMask(Ut,Ut,Ut,Ut),Wt=Ut)},setLocked:function(Ut){J=Ut},setClear:function(Ut,Et,re,_e,Ne){Ne===!0&&(Ut*=_e,Et*=_e,re*=_e),Bt.set(Ut,Et,re,_e),te.equals(Bt)===!1&&(n.clearColor(Ut,Et,re,_e),te.copy(Bt))},reset:function(){J=!1,Wt=null,te.set(-1,0,0,0)}}}function i(){let J=!1,Bt=!1,Wt=null,te=null,Ut=null;return{setReversed:function(Et){if(Bt!==Et){const re=t.get("EXT_clip_control");Et?re.clipControlEXT(re.LOWER_LEFT_EXT,re.ZERO_TO_ONE_EXT):re.clipControlEXT(re.LOWER_LEFT_EXT,re.NEGATIVE_ONE_TO_ONE_EXT),Bt=Et;const _e=Ut;Ut=null,this.setClear(_e)}},getReversed:function(){return Bt},setTest:function(Et){Et?tt(n.DEPTH_TEST):_t(n.DEPTH_TEST)},setMask:function(Et){Wt!==Et&&!J&&(n.depthMask(Et),Wt=Et)},setFunc:function(Et){if(Bt&&(Et=y_[Et]),te!==Et){switch(Et){case ka:n.depthFunc(n.NEVER);break;case Ba:n.depthFunc(n.ALWAYS);break;case Oa:n.depthFunc(n.LESS);break;case zo:n.depthFunc(n.LEQUAL);break;case za:n.depthFunc(n.EQUAL);break;case Ha:n.depthFunc(n.GEQUAL);break;case Va:n.depthFunc(n.GREATER);break;case Ga:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}te=Et}},setLocked:function(Et){J=Et},setClear:function(Et){Ut!==Et&&(Bt&&(Et=1-Et),n.clearDepth(Et),Ut=Et)},reset:function(){J=!1,Wt=null,te=null,Ut=null,Bt=!1}}}function o(){let J=!1,Bt=null,Wt=null,te=null,Ut=null,Et=null,re=null,_e=null,Ne=null;return{setTest:function(Ce){J||(Ce?tt(n.STENCIL_TEST):_t(n.STENCIL_TEST))},setMask:function(Ce){Bt!==Ce&&!J&&(n.stencilMask(Ce),Bt=Ce)},setFunc:function(Ce,Wn,Un){(Wt!==Ce||te!==Wn||Ut!==Un)&&(n.stencilFunc(Ce,Wn,Un),Wt=Ce,te=Wn,Ut=Un)},setOp:function(Ce,Wn,Un){(Et!==Ce||re!==Wn||_e!==Un)&&(n.stencilOp(Ce,Wn,Un),Et=Ce,re=Wn,_e=Un)},setLocked:function(Ce){J=Ce},setClear:function(Ce){Ne!==Ce&&(n.clearStencil(Ce),Ne=Ce)},reset:function(){J=!1,Bt=null,Wt=null,te=null,Ut=null,Et=null,re=null,_e=null,Ne=null}}}const r=new e,a=new i,c=new o,l=new WeakMap,u=new WeakMap;let m={},g={},x=new WeakMap,f=[],v=null,A=!1,M=null,d=null,h=null,p=null,_=null,T=null,w=null,R=new $t(0,0,0),C=0,S=!1,y=null,P=null,E=null,I=null,F=null;const L=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let D=!1,N=0;const H=n.getParameter(n.VERSION);H.indexOf("WebGL")!==-1?(N=parseFloat(/^WebGL (\d)/.exec(H)[1]),D=N>=1):H.indexOf("OpenGL ES")!==-1&&(N=parseFloat(/^OpenGL ES (\d)/.exec(H)[1]),D=N>=2);let X=null,V={};const Z=n.getParameter(n.SCISSOR_BOX),$=n.getParameter(n.VIEWPORT),xt=new Xe().fromArray(Z),yt=new Xe().fromArray($);function j(J,Bt,Wt,te){const Ut=new Uint8Array(4),Et=n.createTexture();n.bindTexture(J,Et),n.texParameteri(J,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(J,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let re=0;re<Wt;re++)J===n.TEXTURE_3D||J===n.TEXTURE_2D_ARRAY?n.texImage3D(Bt,0,n.RGBA,1,1,te,0,n.RGBA,n.UNSIGNED_BYTE,Ut):n.texImage2D(Bt+re,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,Ut);return Et}const ot={};ot[n.TEXTURE_2D]=j(n.TEXTURE_2D,n.TEXTURE_2D,1),ot[n.TEXTURE_CUBE_MAP]=j(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),ot[n.TEXTURE_2D_ARRAY]=j(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),ot[n.TEXTURE_3D]=j(n.TEXTURE_3D,n.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),c.setClear(0),tt(n.DEPTH_TEST),a.setFunc(zo),ht(!1),dt(cl),tt(n.CULL_FACE),at(Li);function tt(J){m[J]!==!0&&(n.enable(J),m[J]=!0)}function _t(J){m[J]!==!1&&(n.disable(J),m[J]=!1)}function mt(J,Bt){return g[J]!==Bt?(n.bindFramebuffer(J,Bt),g[J]=Bt,J===n.DRAW_FRAMEBUFFER&&(g[n.FRAMEBUFFER]=Bt),J===n.FRAMEBUFFER&&(g[n.DRAW_FRAMEBUFFER]=Bt),!0):!1}function rt(J,Bt){let Wt=f,te=!1;if(J){Wt=x.get(Bt),Wt===void 0&&(Wt=[],x.set(Bt,Wt));const Ut=J.textures;if(Wt.length!==Ut.length||Wt[0]!==n.COLOR_ATTACHMENT0){for(let Et=0,re=Ut.length;Et<re;Et++)Wt[Et]=n.COLOR_ATTACHMENT0+Et;Wt.length=Ut.length,te=!0}}else Wt[0]!==n.BACK&&(Wt[0]=n.BACK,te=!0);te&&n.drawBuffers(Wt)}function Rt(J){return v!==J?(n.useProgram(J),v=J,!0):!1}const St={[Qi]:n.FUNC_ADD,[Lf]:n.FUNC_SUBTRACT,[Ff]:n.FUNC_REVERSE_SUBTRACT};St[Nf]=n.MIN,St[Uf]=n.MAX;const G={[kf]:n.ZERO,[Bf]:n.ONE,[Of]:n.SRC_COLOR,[Na]:n.SRC_ALPHA,[Xf]:n.SRC_ALPHA_SATURATE,[Gf]:n.DST_COLOR,[Hf]:n.DST_ALPHA,[zf]:n.ONE_MINUS_SRC_COLOR,[Ua]:n.ONE_MINUS_SRC_ALPHA,[Wf]:n.ONE_MINUS_DST_COLOR,[Vf]:n.ONE_MINUS_DST_ALPHA,[qf]:n.CONSTANT_COLOR,[Yf]:n.ONE_MINUS_CONSTANT_COLOR,[Zf]:n.CONSTANT_ALPHA,[$f]:n.ONE_MINUS_CONSTANT_ALPHA};function at(J,Bt,Wt,te,Ut,Et,re,_e,Ne,Ce){if(J===Li){A===!0&&(_t(n.BLEND),A=!1);return}if(A===!1&&(tt(n.BLEND),A=!0),J!==Df){if(J!==M||Ce!==S){if((d!==Qi||_!==Qi)&&(n.blendEquation(n.FUNC_ADD),d=Qi,_=Qi),Ce)switch(J){case Uo:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Ar:n.blendFunc(n.ONE,n.ONE);break;case ll:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case ul:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",J);break}else switch(J){case Uo:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Ar:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case ll:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case ul:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",J);break}h=null,p=null,T=null,w=null,R.set(0,0,0),C=0,M=J,S=Ce}return}Ut=Ut||Bt,Et=Et||Wt,re=re||te,(Bt!==d||Ut!==_)&&(n.blendEquationSeparate(St[Bt],St[Ut]),d=Bt,_=Ut),(Wt!==h||te!==p||Et!==T||re!==w)&&(n.blendFuncSeparate(G[Wt],G[te],G[Et],G[re]),h=Wt,p=te,T=Et,w=re),(_e.equals(R)===!1||Ne!==C)&&(n.blendColor(_e.r,_e.g,_e.b,Ne),R.copy(_e),C=Ne),M=J,S=!1}function st(J,Bt){J.side===Cn?_t(n.CULL_FACE):tt(n.CULL_FACE);let Wt=J.side===In;Bt&&(Wt=!Wt),ht(Wt),J.blending===Uo&&J.transparent===!1?at(Li):at(J.blending,J.blendEquation,J.blendSrc,J.blendDst,J.blendEquationAlpha,J.blendSrcAlpha,J.blendDstAlpha,J.blendColor,J.blendAlpha,J.premultipliedAlpha),a.setFunc(J.depthFunc),a.setTest(J.depthTest),a.setMask(J.depthWrite),r.setMask(J.colorWrite);const te=J.stencilWrite;c.setTest(te),te&&(c.setMask(J.stencilWriteMask),c.setFunc(J.stencilFunc,J.stencilRef,J.stencilFuncMask),c.setOp(J.stencilFail,J.stencilZFail,J.stencilZPass)),Ct(J.polygonOffset,J.polygonOffsetFactor,J.polygonOffsetUnits),J.alphaToCoverage===!0?tt(n.SAMPLE_ALPHA_TO_COVERAGE):_t(n.SAMPLE_ALPHA_TO_COVERAGE)}function ht(J){y!==J&&(J?n.frontFace(n.CW):n.frontFace(n.CCW),y=J)}function dt(J){J!==Pf?(tt(n.CULL_FACE),J!==P&&(J===cl?n.cullFace(n.BACK):J===If?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):_t(n.CULL_FACE),P=J}function Pt(J){J!==E&&(D&&n.lineWidth(J),E=J)}function Ct(J,Bt,Wt){J?(tt(n.POLYGON_OFFSET_FILL),(I!==Bt||F!==Wt)&&(n.polygonOffset(Bt,Wt),I=Bt,F=Wt)):_t(n.POLYGON_OFFSET_FILL)}function Ot(J){J?tt(n.SCISSOR_TEST):_t(n.SCISSOR_TEST)}function xe(J){J===void 0&&(J=n.TEXTURE0+L-1),X!==J&&(n.activeTexture(J),X=J)}function fe(J,Bt,Wt){Wt===void 0&&(X===null?Wt=n.TEXTURE0+L-1:Wt=X);let te=V[Wt];te===void 0&&(te={type:void 0,texture:void 0},V[Wt]=te),(te.type!==J||te.texture!==Bt)&&(X!==Wt&&(n.activeTexture(Wt),X=Wt),n.bindTexture(J,Bt||ot[J]),te.type=J,te.texture=Bt)}function W(){const J=V[X];J!==void 0&&J.type!==void 0&&(n.bindTexture(J.type,null),J.type=void 0,J.texture=void 0)}function U(){try{n.compressedTexImage2D(...arguments)}catch(J){console.error("THREE.WebGLState:",J)}}function it(){try{n.compressedTexImage3D(...arguments)}catch(J){console.error("THREE.WebGLState:",J)}}function ft(){try{n.texSubImage2D(...arguments)}catch(J){console.error("THREE.WebGLState:",J)}}function Dt(){try{n.texSubImage3D(...arguments)}catch(J){console.error("THREE.WebGLState:",J)}}function gt(){try{n.compressedTexSubImage2D(...arguments)}catch(J){console.error("THREE.WebGLState:",J)}}function ae(){try{n.compressedTexSubImage3D(...arguments)}catch(J){console.error("THREE.WebGLState:",J)}}function zt(){try{n.texStorage2D(...arguments)}catch(J){console.error("THREE.WebGLState:",J)}}function ee(){try{n.texStorage3D(...arguments)}catch(J){console.error("THREE.WebGLState:",J)}}function oe(){try{n.texImage2D(...arguments)}catch(J){console.error("THREE.WebGLState:",J)}}function Ft(){try{n.texImage3D(...arguments)}catch(J){console.error("THREE.WebGLState:",J)}}function Jt(J){xt.equals(J)===!1&&(n.scissor(J.x,J.y,J.z,J.w),xt.copy(J))}function me(J){yt.equals(J)===!1&&(n.viewport(J.x,J.y,J.z,J.w),yt.copy(J))}function se(J,Bt){let Wt=u.get(Bt);Wt===void 0&&(Wt=new WeakMap,u.set(Bt,Wt));let te=Wt.get(J);te===void 0&&(te=n.getUniformBlockIndex(Bt,J.name),Wt.set(J,te))}function Yt(J,Bt){const te=u.get(Bt).get(J);l.get(Bt)!==te&&(n.uniformBlockBinding(Bt,te,J.__bindingPointIndex),l.set(Bt,te))}function ve(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),a.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),m={},X=null,V={},g={},x=new WeakMap,f=[],v=null,A=!1,M=null,d=null,h=null,p=null,_=null,T=null,w=null,R=new $t(0,0,0),C=0,S=!1,y=null,P=null,E=null,I=null,F=null,xt.set(0,0,n.canvas.width,n.canvas.height),yt.set(0,0,n.canvas.width,n.canvas.height),r.reset(),a.reset(),c.reset()}return{buffers:{color:r,depth:a,stencil:c},enable:tt,disable:_t,bindFramebuffer:mt,drawBuffers:rt,useProgram:Rt,setBlending:at,setMaterial:st,setFlipSided:ht,setCullFace:dt,setLineWidth:Pt,setPolygonOffset:Ct,setScissorTest:Ot,activeTexture:xe,bindTexture:fe,unbindTexture:W,compressedTexImage2D:U,compressedTexImage3D:it,texImage2D:oe,texImage3D:Ft,updateUBOMapping:se,uniformBlockBinding:Yt,texStorage2D:zt,texStorage3D:ee,texSubImage2D:ft,texSubImage3D:Dt,compressedTexSubImage2D:gt,compressedTexSubImage3D:ae,scissor:Jt,viewport:me,reset:ve}}function b_(n,t,e,i,o,r,a){const c=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),u=new Gt,m=new WeakMap;let g;const x=new WeakMap;let f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function v(W,U){return f?new OffscreenCanvas(W,U):Pr("canvas")}function A(W,U,it){let ft=1;const Dt=fe(W);if((Dt.width>it||Dt.height>it)&&(ft=it/Math.max(Dt.width,Dt.height)),ft<1)if(typeof HTMLImageElement<"u"&&W instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&W instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&W instanceof ImageBitmap||typeof VideoFrame<"u"&&W instanceof VideoFrame){const gt=Math.floor(ft*Dt.width),ae=Math.floor(ft*Dt.height);g===void 0&&(g=v(gt,ae));const zt=U?v(gt,ae):g;return zt.width=gt,zt.height=ae,zt.getContext("2d").drawImage(W,0,0,gt,ae),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+Dt.width+"x"+Dt.height+") to ("+gt+"x"+ae+")."),zt}else return"data"in W&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+Dt.width+"x"+Dt.height+")."),W;return W}function M(W){return W.generateMipmaps}function d(W){n.generateMipmap(W)}function h(W){return W.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:W.isWebGL3DRenderTarget?n.TEXTURE_3D:W.isWebGLArrayRenderTarget||W.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function p(W,U,it,ft,Dt=!1){if(W!==null){if(n[W]!==void 0)return n[W];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+W+"'")}let gt=U;if(U===n.RED&&(it===n.FLOAT&&(gt=n.R32F),it===n.HALF_FLOAT&&(gt=n.R16F),it===n.UNSIGNED_BYTE&&(gt=n.R8)),U===n.RED_INTEGER&&(it===n.UNSIGNED_BYTE&&(gt=n.R8UI),it===n.UNSIGNED_SHORT&&(gt=n.R16UI),it===n.UNSIGNED_INT&&(gt=n.R32UI),it===n.BYTE&&(gt=n.R8I),it===n.SHORT&&(gt=n.R16I),it===n.INT&&(gt=n.R32I)),U===n.RG&&(it===n.FLOAT&&(gt=n.RG32F),it===n.HALF_FLOAT&&(gt=n.RG16F),it===n.UNSIGNED_BYTE&&(gt=n.RG8)),U===n.RG_INTEGER&&(it===n.UNSIGNED_BYTE&&(gt=n.RG8UI),it===n.UNSIGNED_SHORT&&(gt=n.RG16UI),it===n.UNSIGNED_INT&&(gt=n.RG32UI),it===n.BYTE&&(gt=n.RG8I),it===n.SHORT&&(gt=n.RG16I),it===n.INT&&(gt=n.RG32I)),U===n.RGB_INTEGER&&(it===n.UNSIGNED_BYTE&&(gt=n.RGB8UI),it===n.UNSIGNED_SHORT&&(gt=n.RGB16UI),it===n.UNSIGNED_INT&&(gt=n.RGB32UI),it===n.BYTE&&(gt=n.RGB8I),it===n.SHORT&&(gt=n.RGB16I),it===n.INT&&(gt=n.RGB32I)),U===n.RGBA_INTEGER&&(it===n.UNSIGNED_BYTE&&(gt=n.RGBA8UI),it===n.UNSIGNED_SHORT&&(gt=n.RGBA16UI),it===n.UNSIGNED_INT&&(gt=n.RGBA32UI),it===n.BYTE&&(gt=n.RGBA8I),it===n.SHORT&&(gt=n.RGBA16I),it===n.INT&&(gt=n.RGBA32I)),U===n.RGB&&it===n.UNSIGNED_INT_5_9_9_9_REV&&(gt=n.RGB9_E5),U===n.RGBA){const ae=Dt?Rr:Pe.getTransfer(ft);it===n.FLOAT&&(gt=n.RGBA32F),it===n.HALF_FLOAT&&(gt=n.RGBA16F),it===n.UNSIGNED_BYTE&&(gt=ae===Ue?n.SRGB8_ALPHA8:n.RGBA8),it===n.UNSIGNED_SHORT_4_4_4_4&&(gt=n.RGBA4),it===n.UNSIGNED_SHORT_5_5_5_1&&(gt=n.RGB5_A1)}return(gt===n.R16F||gt===n.R32F||gt===n.RG16F||gt===n.RG32F||gt===n.RGBA16F||gt===n.RGBA32F)&&t.get("EXT_color_buffer_float"),gt}function _(W,U){let it;return W?U===null||U===so||U===Ss?it=n.DEPTH24_STENCIL8:U===_i?it=n.DEPTH32F_STENCIL8:U===ys&&(it=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):U===null||U===so||U===Ss?it=n.DEPTH_COMPONENT24:U===_i?it=n.DEPTH_COMPONENT32F:U===ys&&(it=n.DEPTH_COMPONENT16),it}function T(W,U){return M(W)===!0||W.isFramebufferTexture&&W.minFilter!==jn&&W.minFilter!==ii?Math.log2(Math.max(U.width,U.height))+1:W.mipmaps!==void 0&&W.mipmaps.length>0?W.mipmaps.length:W.isCompressedTexture&&Array.isArray(W.image)?U.mipmaps.length:1}function w(W){const U=W.target;U.removeEventListener("dispose",w),C(U),U.isVideoTexture&&m.delete(U)}function R(W){const U=W.target;U.removeEventListener("dispose",R),y(U)}function C(W){const U=i.get(W);if(U.__webglInit===void 0)return;const it=W.source,ft=x.get(it);if(ft){const Dt=ft[U.__cacheKey];Dt.usedTimes--,Dt.usedTimes===0&&S(W),Object.keys(ft).length===0&&x.delete(it)}i.remove(W)}function S(W){const U=i.get(W);n.deleteTexture(U.__webglTexture);const it=W.source,ft=x.get(it);delete ft[U.__cacheKey],a.memory.textures--}function y(W){const U=i.get(W);if(W.depthTexture&&(W.depthTexture.dispose(),i.remove(W.depthTexture)),W.isWebGLCubeRenderTarget)for(let ft=0;ft<6;ft++){if(Array.isArray(U.__webglFramebuffer[ft]))for(let Dt=0;Dt<U.__webglFramebuffer[ft].length;Dt++)n.deleteFramebuffer(U.__webglFramebuffer[ft][Dt]);else n.deleteFramebuffer(U.__webglFramebuffer[ft]);U.__webglDepthbuffer&&n.deleteRenderbuffer(U.__webglDepthbuffer[ft])}else{if(Array.isArray(U.__webglFramebuffer))for(let ft=0;ft<U.__webglFramebuffer.length;ft++)n.deleteFramebuffer(U.__webglFramebuffer[ft]);else n.deleteFramebuffer(U.__webglFramebuffer);if(U.__webglDepthbuffer&&n.deleteRenderbuffer(U.__webglDepthbuffer),U.__webglMultisampledFramebuffer&&n.deleteFramebuffer(U.__webglMultisampledFramebuffer),U.__webglColorRenderbuffer)for(let ft=0;ft<U.__webglColorRenderbuffer.length;ft++)U.__webglColorRenderbuffer[ft]&&n.deleteRenderbuffer(U.__webglColorRenderbuffer[ft]);U.__webglDepthRenderbuffer&&n.deleteRenderbuffer(U.__webglDepthRenderbuffer)}const it=W.textures;for(let ft=0,Dt=it.length;ft<Dt;ft++){const gt=i.get(it[ft]);gt.__webglTexture&&(n.deleteTexture(gt.__webglTexture),a.memory.textures--),i.remove(it[ft])}i.remove(W)}let P=0;function E(){P=0}function I(){const W=P;return W>=o.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+W+" texture units while this GPU supports only "+o.maxTextures),P+=1,W}function F(W){const U=[];return U.push(W.wrapS),U.push(W.wrapT),U.push(W.wrapR||0),U.push(W.magFilter),U.push(W.minFilter),U.push(W.anisotropy),U.push(W.internalFormat),U.push(W.format),U.push(W.type),U.push(W.generateMipmaps),U.push(W.premultiplyAlpha),U.push(W.flipY),U.push(W.unpackAlignment),U.push(W.colorSpace),U.join()}function L(W,U){const it=i.get(W);if(W.isVideoTexture&&Ot(W),W.isRenderTargetTexture===!1&&W.isExternalTexture!==!0&&W.version>0&&it.__version!==W.version){const ft=W.image;if(ft===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ft.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{ot(it,W,U);return}}else W.isExternalTexture&&(it.__webglTexture=W.sourceTexture?W.sourceTexture:null);e.bindTexture(n.TEXTURE_2D,it.__webglTexture,n.TEXTURE0+U)}function D(W,U){const it=i.get(W);if(W.isRenderTargetTexture===!1&&W.version>0&&it.__version!==W.version){ot(it,W,U);return}e.bindTexture(n.TEXTURE_2D_ARRAY,it.__webglTexture,n.TEXTURE0+U)}function N(W,U){const it=i.get(W);if(W.isRenderTargetTexture===!1&&W.version>0&&it.__version!==W.version){ot(it,W,U);return}e.bindTexture(n.TEXTURE_3D,it.__webglTexture,n.TEXTURE0+U)}function H(W,U){const it=i.get(W);if(W.version>0&&it.__version!==W.version){tt(it,W,U);return}e.bindTexture(n.TEXTURE_CUBE_MAP,it.__webglTexture,n.TEXTURE0+U)}const X={[oo]:n.REPEAT,[no]:n.CLAMP_TO_EDGE,[qa]:n.MIRRORED_REPEAT},V={[jn]:n.NEAREST,[sp]:n.NEAREST_MIPMAP_NEAREST,[Zs]:n.NEAREST_MIPMAP_LINEAR,[ii]:n.LINEAR,[jr]:n.LINEAR_MIPMAP_NEAREST,[io]:n.LINEAR_MIPMAP_LINEAR},Z={[lp]:n.NEVER,[mp]:n.ALWAYS,[up]:n.LESS,[Uu]:n.LEQUAL,[hp]:n.EQUAL,[pp]:n.GEQUAL,[dp]:n.GREATER,[fp]:n.NOTEQUAL};function $(W,U){if(U.type===_i&&t.has("OES_texture_float_linear")===!1&&(U.magFilter===ii||U.magFilter===jr||U.magFilter===Zs||U.magFilter===io||U.minFilter===ii||U.minFilter===jr||U.minFilter===Zs||U.minFilter===io)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(W,n.TEXTURE_WRAP_S,X[U.wrapS]),n.texParameteri(W,n.TEXTURE_WRAP_T,X[U.wrapT]),(W===n.TEXTURE_3D||W===n.TEXTURE_2D_ARRAY)&&n.texParameteri(W,n.TEXTURE_WRAP_R,X[U.wrapR]),n.texParameteri(W,n.TEXTURE_MAG_FILTER,V[U.magFilter]),n.texParameteri(W,n.TEXTURE_MIN_FILTER,V[U.minFilter]),U.compareFunction&&(n.texParameteri(W,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(W,n.TEXTURE_COMPARE_FUNC,Z[U.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(U.magFilter===jn||U.minFilter!==Zs&&U.minFilter!==io||U.type===_i&&t.has("OES_texture_float_linear")===!1)return;if(U.anisotropy>1||i.get(U).__currentAnisotropy){const it=t.get("EXT_texture_filter_anisotropic");n.texParameterf(W,it.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(U.anisotropy,o.getMaxAnisotropy())),i.get(U).__currentAnisotropy=U.anisotropy}}}function xt(W,U){let it=!1;W.__webglInit===void 0&&(W.__webglInit=!0,U.addEventListener("dispose",w));const ft=U.source;let Dt=x.get(ft);Dt===void 0&&(Dt={},x.set(ft,Dt));const gt=F(U);if(gt!==W.__cacheKey){Dt[gt]===void 0&&(Dt[gt]={texture:n.createTexture(),usedTimes:0},a.memory.textures++,it=!0),Dt[gt].usedTimes++;const ae=Dt[W.__cacheKey];ae!==void 0&&(Dt[W.__cacheKey].usedTimes--,ae.usedTimes===0&&S(U)),W.__cacheKey=gt,W.__webglTexture=Dt[gt].texture}return it}function yt(W,U,it){return Math.floor(Math.floor(W/it)/U)}function j(W,U,it,ft){const gt=W.updateRanges;if(gt.length===0)e.texSubImage2D(n.TEXTURE_2D,0,0,0,U.width,U.height,it,ft,U.data);else{gt.sort((Ft,Jt)=>Ft.start-Jt.start);let ae=0;for(let Ft=1;Ft<gt.length;Ft++){const Jt=gt[ae],me=gt[Ft],se=Jt.start+Jt.count,Yt=yt(me.start,U.width,4),ve=yt(Jt.start,U.width,4);me.start<=se+1&&Yt===ve&&yt(me.start+me.count-1,U.width,4)===Yt?Jt.count=Math.max(Jt.count,me.start+me.count-Jt.start):(++ae,gt[ae]=me)}gt.length=ae+1;const zt=n.getParameter(n.UNPACK_ROW_LENGTH),ee=n.getParameter(n.UNPACK_SKIP_PIXELS),oe=n.getParameter(n.UNPACK_SKIP_ROWS);n.pixelStorei(n.UNPACK_ROW_LENGTH,U.width);for(let Ft=0,Jt=gt.length;Ft<Jt;Ft++){const me=gt[Ft],se=Math.floor(me.start/4),Yt=Math.ceil(me.count/4),ve=se%U.width,J=Math.floor(se/U.width),Bt=Yt,Wt=1;n.pixelStorei(n.UNPACK_SKIP_PIXELS,ve),n.pixelStorei(n.UNPACK_SKIP_ROWS,J),e.texSubImage2D(n.TEXTURE_2D,0,ve,J,Bt,Wt,it,ft,U.data)}W.clearUpdateRanges(),n.pixelStorei(n.UNPACK_ROW_LENGTH,zt),n.pixelStorei(n.UNPACK_SKIP_PIXELS,ee),n.pixelStorei(n.UNPACK_SKIP_ROWS,oe)}}function ot(W,U,it){let ft=n.TEXTURE_2D;(U.isDataArrayTexture||U.isCompressedArrayTexture)&&(ft=n.TEXTURE_2D_ARRAY),U.isData3DTexture&&(ft=n.TEXTURE_3D);const Dt=xt(W,U),gt=U.source;e.bindTexture(ft,W.__webglTexture,n.TEXTURE0+it);const ae=i.get(gt);if(gt.version!==ae.__version||Dt===!0){e.activeTexture(n.TEXTURE0+it);const zt=Pe.getPrimaries(Pe.workingColorSpace),ee=U.colorSpace===ni?null:Pe.getPrimaries(U.colorSpace),oe=U.colorSpace===ni||zt===ee?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,U.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,U.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,U.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,oe);let Ft=A(U.image,!1,o.maxTextureSize);Ft=xe(U,Ft);const Jt=r.convert(U.format,U.colorSpace),me=r.convert(U.type);let se=p(U.internalFormat,Jt,me,U.colorSpace,U.isVideoTexture);$(ft,U);let Yt;const ve=U.mipmaps,J=U.isVideoTexture!==!0,Bt=ae.__version===void 0||Dt===!0,Wt=gt.dataReady,te=T(U,Ft);if(U.isDepthTexture)se=_(U.format===Ts,U.type),Bt&&(J?e.texStorage2D(n.TEXTURE_2D,1,se,Ft.width,Ft.height):e.texImage2D(n.TEXTURE_2D,0,se,Ft.width,Ft.height,0,Jt,me,null));else if(U.isDataTexture)if(ve.length>0){J&&Bt&&e.texStorage2D(n.TEXTURE_2D,te,se,ve[0].width,ve[0].height);for(let Ut=0,Et=ve.length;Ut<Et;Ut++)Yt=ve[Ut],J?Wt&&e.texSubImage2D(n.TEXTURE_2D,Ut,0,0,Yt.width,Yt.height,Jt,me,Yt.data):e.texImage2D(n.TEXTURE_2D,Ut,se,Yt.width,Yt.height,0,Jt,me,Yt.data);U.generateMipmaps=!1}else J?(Bt&&e.texStorage2D(n.TEXTURE_2D,te,se,Ft.width,Ft.height),Wt&&j(U,Ft,Jt,me)):e.texImage2D(n.TEXTURE_2D,0,se,Ft.width,Ft.height,0,Jt,me,Ft.data);else if(U.isCompressedTexture)if(U.isCompressedArrayTexture){J&&Bt&&e.texStorage3D(n.TEXTURE_2D_ARRAY,te,se,ve[0].width,ve[0].height,Ft.depth);for(let Ut=0,Et=ve.length;Ut<Et;Ut++)if(Yt=ve[Ut],U.format!==Jn)if(Jt!==null)if(J){if(Wt)if(U.layerUpdates.size>0){const re=ql(Yt.width,Yt.height,U.format,U.type);for(const _e of U.layerUpdates){const Ne=Yt.data.subarray(_e*re/Yt.data.BYTES_PER_ELEMENT,(_e+1)*re/Yt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,Ut,0,0,_e,Yt.width,Yt.height,1,Jt,Ne)}U.clearLayerUpdates()}else e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,Ut,0,0,0,Yt.width,Yt.height,Ft.depth,Jt,Yt.data)}else e.compressedTexImage3D(n.TEXTURE_2D_ARRAY,Ut,se,Yt.width,Yt.height,Ft.depth,0,Yt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else J?Wt&&e.texSubImage3D(n.TEXTURE_2D_ARRAY,Ut,0,0,0,Yt.width,Yt.height,Ft.depth,Jt,me,Yt.data):e.texImage3D(n.TEXTURE_2D_ARRAY,Ut,se,Yt.width,Yt.height,Ft.depth,0,Jt,me,Yt.data)}else{J&&Bt&&e.texStorage2D(n.TEXTURE_2D,te,se,ve[0].width,ve[0].height);for(let Ut=0,Et=ve.length;Ut<Et;Ut++)Yt=ve[Ut],U.format!==Jn?Jt!==null?J?Wt&&e.compressedTexSubImage2D(n.TEXTURE_2D,Ut,0,0,Yt.width,Yt.height,Jt,Yt.data):e.compressedTexImage2D(n.TEXTURE_2D,Ut,se,Yt.width,Yt.height,0,Yt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):J?Wt&&e.texSubImage2D(n.TEXTURE_2D,Ut,0,0,Yt.width,Yt.height,Jt,me,Yt.data):e.texImage2D(n.TEXTURE_2D,Ut,se,Yt.width,Yt.height,0,Jt,me,Yt.data)}else if(U.isDataArrayTexture)if(J){if(Bt&&e.texStorage3D(n.TEXTURE_2D_ARRAY,te,se,Ft.width,Ft.height,Ft.depth),Wt)if(U.layerUpdates.size>0){const Ut=ql(Ft.width,Ft.height,U.format,U.type);for(const Et of U.layerUpdates){const re=Ft.data.subarray(Et*Ut/Ft.data.BYTES_PER_ELEMENT,(Et+1)*Ut/Ft.data.BYTES_PER_ELEMENT);e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,Et,Ft.width,Ft.height,1,Jt,me,re)}U.clearLayerUpdates()}else e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,Ft.width,Ft.height,Ft.depth,Jt,me,Ft.data)}else e.texImage3D(n.TEXTURE_2D_ARRAY,0,se,Ft.width,Ft.height,Ft.depth,0,Jt,me,Ft.data);else if(U.isData3DTexture)J?(Bt&&e.texStorage3D(n.TEXTURE_3D,te,se,Ft.width,Ft.height,Ft.depth),Wt&&e.texSubImage3D(n.TEXTURE_3D,0,0,0,0,Ft.width,Ft.height,Ft.depth,Jt,me,Ft.data)):e.texImage3D(n.TEXTURE_3D,0,se,Ft.width,Ft.height,Ft.depth,0,Jt,me,Ft.data);else if(U.isFramebufferTexture){if(Bt)if(J)e.texStorage2D(n.TEXTURE_2D,te,se,Ft.width,Ft.height);else{let Ut=Ft.width,Et=Ft.height;for(let re=0;re<te;re++)e.texImage2D(n.TEXTURE_2D,re,se,Ut,Et,0,Jt,me,null),Ut>>=1,Et>>=1}}else if(ve.length>0){if(J&&Bt){const Ut=fe(ve[0]);e.texStorage2D(n.TEXTURE_2D,te,se,Ut.width,Ut.height)}for(let Ut=0,Et=ve.length;Ut<Et;Ut++)Yt=ve[Ut],J?Wt&&e.texSubImage2D(n.TEXTURE_2D,Ut,0,0,Jt,me,Yt):e.texImage2D(n.TEXTURE_2D,Ut,se,Jt,me,Yt);U.generateMipmaps=!1}else if(J){if(Bt){const Ut=fe(Ft);e.texStorage2D(n.TEXTURE_2D,te,se,Ut.width,Ut.height)}Wt&&e.texSubImage2D(n.TEXTURE_2D,0,0,0,Jt,me,Ft)}else e.texImage2D(n.TEXTURE_2D,0,se,Jt,me,Ft);M(U)&&d(ft),ae.__version=gt.version,U.onUpdate&&U.onUpdate(U)}W.__version=U.version}function tt(W,U,it){if(U.image.length!==6)return;const ft=xt(W,U),Dt=U.source;e.bindTexture(n.TEXTURE_CUBE_MAP,W.__webglTexture,n.TEXTURE0+it);const gt=i.get(Dt);if(Dt.version!==gt.__version||ft===!0){e.activeTexture(n.TEXTURE0+it);const ae=Pe.getPrimaries(Pe.workingColorSpace),zt=U.colorSpace===ni?null:Pe.getPrimaries(U.colorSpace),ee=U.colorSpace===ni||ae===zt?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,U.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,U.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,U.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,ee);const oe=U.isCompressedTexture||U.image[0].isCompressedTexture,Ft=U.image[0]&&U.image[0].isDataTexture,Jt=[];for(let Et=0;Et<6;Et++)!oe&&!Ft?Jt[Et]=A(U.image[Et],!0,o.maxCubemapSize):Jt[Et]=Ft?U.image[Et].image:U.image[Et],Jt[Et]=xe(U,Jt[Et]);const me=Jt[0],se=r.convert(U.format,U.colorSpace),Yt=r.convert(U.type),ve=p(U.internalFormat,se,Yt,U.colorSpace),J=U.isVideoTexture!==!0,Bt=gt.__version===void 0||ft===!0,Wt=Dt.dataReady;let te=T(U,me);$(n.TEXTURE_CUBE_MAP,U);let Ut;if(oe){J&&Bt&&e.texStorage2D(n.TEXTURE_CUBE_MAP,te,ve,me.width,me.height);for(let Et=0;Et<6;Et++){Ut=Jt[Et].mipmaps;for(let re=0;re<Ut.length;re++){const _e=Ut[re];U.format!==Jn?se!==null?J?Wt&&e.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Et,re,0,0,_e.width,_e.height,se,_e.data):e.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Et,re,ve,_e.width,_e.height,0,_e.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):J?Wt&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Et,re,0,0,_e.width,_e.height,se,Yt,_e.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Et,re,ve,_e.width,_e.height,0,se,Yt,_e.data)}}}else{if(Ut=U.mipmaps,J&&Bt){Ut.length>0&&te++;const Et=fe(Jt[0]);e.texStorage2D(n.TEXTURE_CUBE_MAP,te,ve,Et.width,Et.height)}for(let Et=0;Et<6;Et++)if(Ft){J?Wt&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Et,0,0,0,Jt[Et].width,Jt[Et].height,se,Yt,Jt[Et].data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Et,0,ve,Jt[Et].width,Jt[Et].height,0,se,Yt,Jt[Et].data);for(let re=0;re<Ut.length;re++){const Ne=Ut[re].image[Et].image;J?Wt&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Et,re+1,0,0,Ne.width,Ne.height,se,Yt,Ne.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Et,re+1,ve,Ne.width,Ne.height,0,se,Yt,Ne.data)}}else{J?Wt&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Et,0,0,0,se,Yt,Jt[Et]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Et,0,ve,se,Yt,Jt[Et]);for(let re=0;re<Ut.length;re++){const _e=Ut[re];J?Wt&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Et,re+1,0,0,se,Yt,_e.image[Et]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Et,re+1,ve,se,Yt,_e.image[Et])}}}M(U)&&d(n.TEXTURE_CUBE_MAP),gt.__version=Dt.version,U.onUpdate&&U.onUpdate(U)}W.__version=U.version}function _t(W,U,it,ft,Dt,gt){const ae=r.convert(it.format,it.colorSpace),zt=r.convert(it.type),ee=p(it.internalFormat,ae,zt,it.colorSpace),oe=i.get(U),Ft=i.get(it);if(Ft.__renderTarget=U,!oe.__hasExternalTextures){const Jt=Math.max(1,U.width>>gt),me=Math.max(1,U.height>>gt);Dt===n.TEXTURE_3D||Dt===n.TEXTURE_2D_ARRAY?e.texImage3D(Dt,gt,ee,Jt,me,U.depth,0,ae,zt,null):e.texImage2D(Dt,gt,ee,Jt,me,0,ae,zt,null)}e.bindFramebuffer(n.FRAMEBUFFER,W),Ct(U)?c.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,ft,Dt,Ft.__webglTexture,0,Pt(U)):(Dt===n.TEXTURE_2D||Dt>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&Dt<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,ft,Dt,Ft.__webglTexture,gt),e.bindFramebuffer(n.FRAMEBUFFER,null)}function mt(W,U,it){if(n.bindRenderbuffer(n.RENDERBUFFER,W),U.depthBuffer){const ft=U.depthTexture,Dt=ft&&ft.isDepthTexture?ft.type:null,gt=_(U.stencilBuffer,Dt),ae=U.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,zt=Pt(U);Ct(U)?c.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,zt,gt,U.width,U.height):it?n.renderbufferStorageMultisample(n.RENDERBUFFER,zt,gt,U.width,U.height):n.renderbufferStorage(n.RENDERBUFFER,gt,U.width,U.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,ae,n.RENDERBUFFER,W)}else{const ft=U.textures;for(let Dt=0;Dt<ft.length;Dt++){const gt=ft[Dt],ae=r.convert(gt.format,gt.colorSpace),zt=r.convert(gt.type),ee=p(gt.internalFormat,ae,zt,gt.colorSpace),oe=Pt(U);it&&Ct(U)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,oe,ee,U.width,U.height):Ct(U)?c.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,oe,ee,U.width,U.height):n.renderbufferStorage(n.RENDERBUFFER,ee,U.width,U.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function rt(W,U){if(U&&U.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(n.FRAMEBUFFER,W),!(U.depthTexture&&U.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const ft=i.get(U.depthTexture);ft.__renderTarget=U,(!ft.__webglTexture||U.depthTexture.image.width!==U.width||U.depthTexture.image.height!==U.height)&&(U.depthTexture.image.width=U.width,U.depthTexture.image.height=U.height,U.depthTexture.needsUpdate=!0),L(U.depthTexture,0);const Dt=ft.__webglTexture,gt=Pt(U);if(U.depthTexture.format===bs)Ct(U)?c.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,Dt,0,gt):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,Dt,0);else if(U.depthTexture.format===Ts)Ct(U)?c.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,Dt,0,gt):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,Dt,0);else throw new Error("Unknown depthTexture format")}function Rt(W){const U=i.get(W),it=W.isWebGLCubeRenderTarget===!0;if(U.__boundDepthTexture!==W.depthTexture){const ft=W.depthTexture;if(U.__depthDisposeCallback&&U.__depthDisposeCallback(),ft){const Dt=()=>{delete U.__boundDepthTexture,delete U.__depthDisposeCallback,ft.removeEventListener("dispose",Dt)};ft.addEventListener("dispose",Dt),U.__depthDisposeCallback=Dt}U.__boundDepthTexture=ft}if(W.depthTexture&&!U.__autoAllocateDepthBuffer){if(it)throw new Error("target.depthTexture not supported in Cube render targets");const ft=W.texture.mipmaps;ft&&ft.length>0?rt(U.__webglFramebuffer[0],W):rt(U.__webglFramebuffer,W)}else if(it){U.__webglDepthbuffer=[];for(let ft=0;ft<6;ft++)if(e.bindFramebuffer(n.FRAMEBUFFER,U.__webglFramebuffer[ft]),U.__webglDepthbuffer[ft]===void 0)U.__webglDepthbuffer[ft]=n.createRenderbuffer(),mt(U.__webglDepthbuffer[ft],W,!1);else{const Dt=W.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,gt=U.__webglDepthbuffer[ft];n.bindRenderbuffer(n.RENDERBUFFER,gt),n.framebufferRenderbuffer(n.FRAMEBUFFER,Dt,n.RENDERBUFFER,gt)}}else{const ft=W.texture.mipmaps;if(ft&&ft.length>0?e.bindFramebuffer(n.FRAMEBUFFER,U.__webglFramebuffer[0]):e.bindFramebuffer(n.FRAMEBUFFER,U.__webglFramebuffer),U.__webglDepthbuffer===void 0)U.__webglDepthbuffer=n.createRenderbuffer(),mt(U.__webglDepthbuffer,W,!1);else{const Dt=W.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,gt=U.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,gt),n.framebufferRenderbuffer(n.FRAMEBUFFER,Dt,n.RENDERBUFFER,gt)}}e.bindFramebuffer(n.FRAMEBUFFER,null)}function St(W,U,it){const ft=i.get(W);U!==void 0&&_t(ft.__webglFramebuffer,W,W.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),it!==void 0&&Rt(W)}function G(W){const U=W.texture,it=i.get(W),ft=i.get(U);W.addEventListener("dispose",R);const Dt=W.textures,gt=W.isWebGLCubeRenderTarget===!0,ae=Dt.length>1;if(ae||(ft.__webglTexture===void 0&&(ft.__webglTexture=n.createTexture()),ft.__version=U.version,a.memory.textures++),gt){it.__webglFramebuffer=[];for(let zt=0;zt<6;zt++)if(U.mipmaps&&U.mipmaps.length>0){it.__webglFramebuffer[zt]=[];for(let ee=0;ee<U.mipmaps.length;ee++)it.__webglFramebuffer[zt][ee]=n.createFramebuffer()}else it.__webglFramebuffer[zt]=n.createFramebuffer()}else{if(U.mipmaps&&U.mipmaps.length>0){it.__webglFramebuffer=[];for(let zt=0;zt<U.mipmaps.length;zt++)it.__webglFramebuffer[zt]=n.createFramebuffer()}else it.__webglFramebuffer=n.createFramebuffer();if(ae)for(let zt=0,ee=Dt.length;zt<ee;zt++){const oe=i.get(Dt[zt]);oe.__webglTexture===void 0&&(oe.__webglTexture=n.createTexture(),a.memory.textures++)}if(W.samples>0&&Ct(W)===!1){it.__webglMultisampledFramebuffer=n.createFramebuffer(),it.__webglColorRenderbuffer=[],e.bindFramebuffer(n.FRAMEBUFFER,it.__webglMultisampledFramebuffer);for(let zt=0;zt<Dt.length;zt++){const ee=Dt[zt];it.__webglColorRenderbuffer[zt]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,it.__webglColorRenderbuffer[zt]);const oe=r.convert(ee.format,ee.colorSpace),Ft=r.convert(ee.type),Jt=p(ee.internalFormat,oe,Ft,ee.colorSpace,W.isXRRenderTarget===!0),me=Pt(W);n.renderbufferStorageMultisample(n.RENDERBUFFER,me,Jt,W.width,W.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+zt,n.RENDERBUFFER,it.__webglColorRenderbuffer[zt])}n.bindRenderbuffer(n.RENDERBUFFER,null),W.depthBuffer&&(it.__webglDepthRenderbuffer=n.createRenderbuffer(),mt(it.__webglDepthRenderbuffer,W,!0)),e.bindFramebuffer(n.FRAMEBUFFER,null)}}if(gt){e.bindTexture(n.TEXTURE_CUBE_MAP,ft.__webglTexture),$(n.TEXTURE_CUBE_MAP,U);for(let zt=0;zt<6;zt++)if(U.mipmaps&&U.mipmaps.length>0)for(let ee=0;ee<U.mipmaps.length;ee++)_t(it.__webglFramebuffer[zt][ee],W,U,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+zt,ee);else _t(it.__webglFramebuffer[zt],W,U,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+zt,0);M(U)&&d(n.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(ae){for(let zt=0,ee=Dt.length;zt<ee;zt++){const oe=Dt[zt],Ft=i.get(oe);let Jt=n.TEXTURE_2D;(W.isWebGL3DRenderTarget||W.isWebGLArrayRenderTarget)&&(Jt=W.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),e.bindTexture(Jt,Ft.__webglTexture),$(Jt,oe),_t(it.__webglFramebuffer,W,oe,n.COLOR_ATTACHMENT0+zt,Jt,0),M(oe)&&d(Jt)}e.unbindTexture()}else{let zt=n.TEXTURE_2D;if((W.isWebGL3DRenderTarget||W.isWebGLArrayRenderTarget)&&(zt=W.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),e.bindTexture(zt,ft.__webglTexture),$(zt,U),U.mipmaps&&U.mipmaps.length>0)for(let ee=0;ee<U.mipmaps.length;ee++)_t(it.__webglFramebuffer[ee],W,U,n.COLOR_ATTACHMENT0,zt,ee);else _t(it.__webglFramebuffer,W,U,n.COLOR_ATTACHMENT0,zt,0);M(U)&&d(zt),e.unbindTexture()}W.depthBuffer&&Rt(W)}function at(W){const U=W.textures;for(let it=0,ft=U.length;it<ft;it++){const Dt=U[it];if(M(Dt)){const gt=h(W),ae=i.get(Dt).__webglTexture;e.bindTexture(gt,ae),d(gt),e.unbindTexture()}}}const st=[],ht=[];function dt(W){if(W.samples>0){if(Ct(W)===!1){const U=W.textures,it=W.width,ft=W.height;let Dt=n.COLOR_BUFFER_BIT;const gt=W.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ae=i.get(W),zt=U.length>1;if(zt)for(let oe=0;oe<U.length;oe++)e.bindFramebuffer(n.FRAMEBUFFER,ae.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+oe,n.RENDERBUFFER,null),e.bindFramebuffer(n.FRAMEBUFFER,ae.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+oe,n.TEXTURE_2D,null,0);e.bindFramebuffer(n.READ_FRAMEBUFFER,ae.__webglMultisampledFramebuffer);const ee=W.texture.mipmaps;ee&&ee.length>0?e.bindFramebuffer(n.DRAW_FRAMEBUFFER,ae.__webglFramebuffer[0]):e.bindFramebuffer(n.DRAW_FRAMEBUFFER,ae.__webglFramebuffer);for(let oe=0;oe<U.length;oe++){if(W.resolveDepthBuffer&&(W.depthBuffer&&(Dt|=n.DEPTH_BUFFER_BIT),W.stencilBuffer&&W.resolveStencilBuffer&&(Dt|=n.STENCIL_BUFFER_BIT)),zt){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,ae.__webglColorRenderbuffer[oe]);const Ft=i.get(U[oe]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,Ft,0)}n.blitFramebuffer(0,0,it,ft,0,0,it,ft,Dt,n.NEAREST),l===!0&&(st.length=0,ht.length=0,st.push(n.COLOR_ATTACHMENT0+oe),W.depthBuffer&&W.resolveDepthBuffer===!1&&(st.push(gt),ht.push(gt),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,ht)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,st))}if(e.bindFramebuffer(n.READ_FRAMEBUFFER,null),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),zt)for(let oe=0;oe<U.length;oe++){e.bindFramebuffer(n.FRAMEBUFFER,ae.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+oe,n.RENDERBUFFER,ae.__webglColorRenderbuffer[oe]);const Ft=i.get(U[oe]).__webglTexture;e.bindFramebuffer(n.FRAMEBUFFER,ae.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+oe,n.TEXTURE_2D,Ft,0)}e.bindFramebuffer(n.DRAW_FRAMEBUFFER,ae.__webglMultisampledFramebuffer)}else if(W.depthBuffer&&W.resolveDepthBuffer===!1&&l){const U=W.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[U])}}}function Pt(W){return Math.min(o.maxSamples,W.samples)}function Ct(W){const U=i.get(W);return W.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&U.__useRenderToTexture!==!1}function Ot(W){const U=a.render.frame;m.get(W)!==U&&(m.set(W,U),W.update())}function xe(W,U){const it=W.colorSpace,ft=W.format,Dt=W.type;return W.isCompressedTexture===!0||W.isVideoTexture===!0||it!==Go&&it!==ni&&(Pe.getTransfer(it)===Ue?(ft!==Jn||Dt!==ri)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",it)),U}function fe(W){return typeof HTMLImageElement<"u"&&W instanceof HTMLImageElement?(u.width=W.naturalWidth||W.width,u.height=W.naturalHeight||W.height):typeof VideoFrame<"u"&&W instanceof VideoFrame?(u.width=W.displayWidth,u.height=W.displayHeight):(u.width=W.width,u.height=W.height),u}this.allocateTextureUnit=I,this.resetTextureUnits=E,this.setTexture2D=L,this.setTexture2DArray=D,this.setTexture3D=N,this.setTextureCube=H,this.rebindTextures=St,this.setupRenderTarget=G,this.updateRenderTargetMipmap=at,this.updateMultisampleRenderTarget=dt,this.setupDepthRenderbuffer=Rt,this.setupFrameBufferTexture=_t,this.useMultisampledRTT=Ct}function T_(n,t){function e(i,o=ni){let r;const a=Pe.getTransfer(o);if(i===ri)return n.UNSIGNED_BYTE;if(i===Rc)return n.UNSIGNED_SHORT_4_4_4_4;if(i===Cc)return n.UNSIGNED_SHORT_5_5_5_1;if(i===Cu)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===Au)return n.BYTE;if(i===Ru)return n.SHORT;if(i===ys)return n.UNSIGNED_SHORT;if(i===Ac)return n.INT;if(i===so)return n.UNSIGNED_INT;if(i===_i)return n.FLOAT;if(i===Is)return n.HALF_FLOAT;if(i===Pu)return n.ALPHA;if(i===Iu)return n.RGB;if(i===Jn)return n.RGBA;if(i===bs)return n.DEPTH_COMPONENT;if(i===Ts)return n.DEPTH_STENCIL;if(i===Du)return n.RED;if(i===Pc)return n.RED_INTEGER;if(i===Lu)return n.RG;if(i===Ic)return n.RG_INTEGER;if(i===Dc)return n.RGBA_INTEGER;if(i===wr||i===yr||i===Sr||i===br)if(a===Ue)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===wr)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===yr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Sr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===br)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===wr)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===yr)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Sr)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===br)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Ya||i===Za||i===$a||i===Ka)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===Ya)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Za)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===$a)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Ka)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Ja||i===ja||i===Qa)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(i===Ja||i===ja)return a===Ue?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===Qa)return a===Ue?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===tc||i===ec||i===nc||i===ic||i===oc||i===sc||i===rc||i===ac||i===cc||i===lc||i===uc||i===hc||i===dc||i===fc)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(i===tc)return a===Ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===ec)return a===Ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===nc)return a===Ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===ic)return a===Ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===oc)return a===Ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===sc)return a===Ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===rc)return a===Ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===ac)return a===Ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===cc)return a===Ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===lc)return a===Ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===uc)return a===Ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===hc)return a===Ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===dc)return a===Ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===fc)return a===Ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Tr||i===pc||i===mc)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(i===Tr)return a===Ue?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===pc)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===mc)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Fu||i===gc||i===xc||i===_c)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(i===Tr)return r.COMPRESSED_RED_RGTC1_EXT;if(i===gc)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===xc)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===_c)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Ss?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:e}}class hh extends Sn{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}}const E_=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,A_=`
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

}`;class R_{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){const i=new hh(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=i}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,i=new ki({vertexShader:E_,fragmentShader:A_,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new k(new uo(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class C_ extends Yo{constructor(t,e){super();const i=this;let o=null,r=1,a=null,c="local-floor",l=1,u=null,m=null,g=null,x=null,f=null,v=null;const A=new R_,M={},d=e.getContextAttributes();let h=null,p=null;const _=[],T=[],w=new Gt;let R=null;const C=new Hn;C.viewport=new Xe;const S=new Hn;S.viewport=new Xe;const y=[C,S],P=new Z0;let E=null,I=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(j){let ot=_[j];return ot===void 0&&(ot=new va,_[j]=ot),ot.getTargetRaySpace()},this.getControllerGrip=function(j){let ot=_[j];return ot===void 0&&(ot=new va,_[j]=ot),ot.getGripSpace()},this.getHand=function(j){let ot=_[j];return ot===void 0&&(ot=new va,_[j]=ot),ot.getHandSpace()};function F(j){const ot=T.indexOf(j.inputSource);if(ot===-1)return;const tt=_[ot];tt!==void 0&&(tt.update(j.inputSource,j.frame,u||a),tt.dispatchEvent({type:j.type,data:j.inputSource}))}function L(){o.removeEventListener("select",F),o.removeEventListener("selectstart",F),o.removeEventListener("selectend",F),o.removeEventListener("squeeze",F),o.removeEventListener("squeezestart",F),o.removeEventListener("squeezeend",F),o.removeEventListener("end",L),o.removeEventListener("inputsourceschange",D);for(let j=0;j<_.length;j++){const ot=T[j];ot!==null&&(T[j]=null,_[j].disconnect(ot))}E=null,I=null,A.reset();for(const j in M)delete M[j];t.setRenderTarget(h),f=null,x=null,g=null,o=null,p=null,yt.stop(),i.isPresenting=!1,t.setPixelRatio(R),t.setSize(w.width,w.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(j){r=j,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(j){c=j,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return u||a},this.setReferenceSpace=function(j){u=j},this.getBaseLayer=function(){return x!==null?x:f},this.getBinding=function(){return g},this.getFrame=function(){return v},this.getSession=function(){return o},this.setSession=async function(j){if(o=j,o!==null){if(h=t.getRenderTarget(),o.addEventListener("select",F),o.addEventListener("selectstart",F),o.addEventListener("selectend",F),o.addEventListener("squeeze",F),o.addEventListener("squeezestart",F),o.addEventListener("squeezeend",F),o.addEventListener("end",L),o.addEventListener("inputsourceschange",D),d.xrCompatible!==!0&&await e.makeXRCompatible(),R=t.getPixelRatio(),t.getSize(w),typeof XRWebGLBinding<"u"&&(g=new XRWebGLBinding(o,e)),g!==null&&"createProjectionLayer"in XRWebGLBinding.prototype){let tt=null,_t=null,mt=null;d.depth&&(mt=d.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,tt=d.stencil?Ts:bs,_t=d.stencil?Ss:so);const rt={colorFormat:e.RGBA8,depthFormat:mt,scaleFactor:r};x=g.createProjectionLayer(rt),o.updateRenderState({layers:[x]}),t.setPixelRatio(1),t.setSize(x.textureWidth,x.textureHeight,!1),p=new ao(x.textureWidth,x.textureHeight,{format:Jn,type:ri,depthTexture:new Yu(x.textureWidth,x.textureHeight,_t,void 0,void 0,void 0,void 0,void 0,void 0,tt),stencilBuffer:d.stencil,colorSpace:t.outputColorSpace,samples:d.antialias?4:0,resolveDepthBuffer:x.ignoreDepthValues===!1,resolveStencilBuffer:x.ignoreDepthValues===!1})}else{const tt={antialias:d.antialias,alpha:!0,depth:d.depth,stencil:d.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(o,e,tt),o.updateRenderState({baseLayer:f}),t.setPixelRatio(1),t.setSize(f.framebufferWidth,f.framebufferHeight,!1),p=new ao(f.framebufferWidth,f.framebufferHeight,{format:Jn,type:ri,colorSpace:t.outputColorSpace,stencilBuffer:d.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}p.isXRRenderTarget=!0,this.setFoveation(l),u=null,a=await o.requestReferenceSpace(c),yt.setContext(o),yt.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(o!==null)return o.environmentBlendMode},this.getDepthTexture=function(){return A.getDepthTexture()};function D(j){for(let ot=0;ot<j.removed.length;ot++){const tt=j.removed[ot],_t=T.indexOf(tt);_t>=0&&(T[_t]=null,_[_t].disconnect(tt))}for(let ot=0;ot<j.added.length;ot++){const tt=j.added[ot];let _t=T.indexOf(tt);if(_t===-1){for(let rt=0;rt<_.length;rt++)if(rt>=T.length){T.push(tt),_t=rt;break}else if(T[rt]===null){T[rt]=tt,_t=rt;break}if(_t===-1)break}const mt=_[_t];mt&&mt.connect(tt)}}const N=new z,H=new z;function X(j,ot,tt){N.setFromMatrixPosition(ot.matrixWorld),H.setFromMatrixPosition(tt.matrixWorld);const _t=N.distanceTo(H),mt=ot.projectionMatrix.elements,rt=tt.projectionMatrix.elements,Rt=mt[14]/(mt[10]-1),St=mt[14]/(mt[10]+1),G=(mt[9]+1)/mt[5],at=(mt[9]-1)/mt[5],st=(mt[8]-1)/mt[0],ht=(rt[8]+1)/rt[0],dt=Rt*st,Pt=Rt*ht,Ct=_t/(-st+ht),Ot=Ct*-st;if(ot.matrixWorld.decompose(j.position,j.quaternion,j.scale),j.translateX(Ot),j.translateZ(Ct),j.matrixWorld.compose(j.position,j.quaternion,j.scale),j.matrixWorldInverse.copy(j.matrixWorld).invert(),mt[10]===-1)j.projectionMatrix.copy(ot.projectionMatrix),j.projectionMatrixInverse.copy(ot.projectionMatrixInverse);else{const xe=Rt+Ct,fe=St+Ct,W=dt-Ot,U=Pt+(_t-Ot),it=G*St/fe*xe,ft=at*St/fe*xe;j.projectionMatrix.makePerspective(W,U,it,ft,xe,fe),j.projectionMatrixInverse.copy(j.projectionMatrix).invert()}}function V(j,ot){ot===null?j.matrixWorld.copy(j.matrix):j.matrixWorld.multiplyMatrices(ot.matrixWorld,j.matrix),j.matrixWorldInverse.copy(j.matrixWorld).invert()}this.updateCamera=function(j){if(o===null)return;let ot=j.near,tt=j.far;A.texture!==null&&(A.depthNear>0&&(ot=A.depthNear),A.depthFar>0&&(tt=A.depthFar)),P.near=S.near=C.near=ot,P.far=S.far=C.far=tt,(E!==P.near||I!==P.far)&&(o.updateRenderState({depthNear:P.near,depthFar:P.far}),E=P.near,I=P.far),P.layers.mask=j.layers.mask|6,C.layers.mask=P.layers.mask&3,S.layers.mask=P.layers.mask&5;const _t=j.parent,mt=P.cameras;V(P,_t);for(let rt=0;rt<mt.length;rt++)V(mt[rt],_t);mt.length===2?X(P,C,S):P.projectionMatrix.copy(C.projectionMatrix),Z(j,P,_t)};function Z(j,ot,tt){tt===null?j.matrix.copy(ot.matrixWorld):(j.matrix.copy(tt.matrixWorld),j.matrix.invert(),j.matrix.multiply(ot.matrixWorld)),j.matrix.decompose(j.position,j.quaternion,j.scale),j.updateMatrixWorld(!0),j.projectionMatrix.copy(ot.projectionMatrix),j.projectionMatrixInverse.copy(ot.projectionMatrixInverse),j.isPerspectiveCamera&&(j.fov=Es*2*Math.atan(1/j.projectionMatrix.elements[5]),j.zoom=1)}this.getCamera=function(){return P},this.getFoveation=function(){if(!(x===null&&f===null))return l},this.setFoveation=function(j){l=j,x!==null&&(x.fixedFoveation=j),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=j)},this.hasDepthSensing=function(){return A.texture!==null},this.getDepthSensingMesh=function(){return A.getMesh(P)},this.getCameraTexture=function(j){return M[j]};let $=null;function xt(j,ot){if(m=ot.getViewerPose(u||a),v=ot,m!==null){const tt=m.views;f!==null&&(t.setRenderTargetFramebuffer(p,f.framebuffer),t.setRenderTarget(p));let _t=!1;tt.length!==P.cameras.length&&(P.cameras.length=0,_t=!0);for(let St=0;St<tt.length;St++){const G=tt[St];let at=null;if(f!==null)at=f.getViewport(G);else{const ht=g.getViewSubImage(x,G);at=ht.viewport,St===0&&(t.setRenderTargetTextures(p,ht.colorTexture,ht.depthStencilTexture),t.setRenderTarget(p))}let st=y[St];st===void 0&&(st=new Hn,st.layers.enable(St),st.viewport=new Xe,y[St]=st),st.matrix.fromArray(G.transform.matrix),st.matrix.decompose(st.position,st.quaternion,st.scale),st.projectionMatrix.fromArray(G.projectionMatrix),st.projectionMatrixInverse.copy(st.projectionMatrix).invert(),st.viewport.set(at.x,at.y,at.width,at.height),St===0&&(P.matrix.copy(st.matrix),P.matrix.decompose(P.position,P.quaternion,P.scale)),_t===!0&&P.cameras.push(st)}const mt=o.enabledFeatures;if(mt&&mt.includes("depth-sensing")&&o.depthUsage=="gpu-optimized"&&g){const St=g.getDepthInformation(tt[0]);St&&St.isValid&&St.texture&&A.init(St,o.renderState)}if(mt&&mt.includes("camera-access")&&(t.state.unbindTexture(),g))for(let St=0;St<tt.length;St++){const G=tt[St].camera;if(G){let at=M[G];at||(at=new hh,M[G]=at);const st=g.getCameraImage(G);at.sourceTexture=st}}}for(let tt=0;tt<_.length;tt++){const _t=T[tt],mt=_[tt];_t!==null&&mt!==void 0&&mt.update(_t,ot,u||a)}$&&$(j,ot),ot.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:ot}),v=null}const yt=new rh;yt.setAnimationLoop(xt),this.setAnimationLoop=function(j){$=j},this.dispose=function(){}}}const Zi=new Gn,P_=new Be;function I_(n,t){function e(M,d){M.matrixAutoUpdate===!0&&M.updateMatrix(),d.value.copy(M.matrix)}function i(M,d){d.color.getRGB(M.fogColor.value,Vu(n)),d.isFog?(M.fogNear.value=d.near,M.fogFar.value=d.far):d.isFogExp2&&(M.fogDensity.value=d.density)}function o(M,d,h,p,_){d.isMeshBasicMaterial||d.isMeshLambertMaterial?r(M,d):d.isMeshToonMaterial?(r(M,d),g(M,d)):d.isMeshPhongMaterial?(r(M,d),m(M,d)):d.isMeshStandardMaterial?(r(M,d),x(M,d),d.isMeshPhysicalMaterial&&f(M,d,_)):d.isMeshMatcapMaterial?(r(M,d),v(M,d)):d.isMeshDepthMaterial?r(M,d):d.isMeshDistanceMaterial?(r(M,d),A(M,d)):d.isMeshNormalMaterial?r(M,d):d.isLineBasicMaterial?(a(M,d),d.isLineDashedMaterial&&c(M,d)):d.isPointsMaterial?l(M,d,h,p):d.isSpriteMaterial?u(M,d):d.isShadowMaterial?(M.color.value.copy(d.color),M.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function r(M,d){M.opacity.value=d.opacity,d.color&&M.diffuse.value.copy(d.color),d.emissive&&M.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(M.map.value=d.map,e(d.map,M.mapTransform)),d.alphaMap&&(M.alphaMap.value=d.alphaMap,e(d.alphaMap,M.alphaMapTransform)),d.bumpMap&&(M.bumpMap.value=d.bumpMap,e(d.bumpMap,M.bumpMapTransform),M.bumpScale.value=d.bumpScale,d.side===In&&(M.bumpScale.value*=-1)),d.normalMap&&(M.normalMap.value=d.normalMap,e(d.normalMap,M.normalMapTransform),M.normalScale.value.copy(d.normalScale),d.side===In&&M.normalScale.value.negate()),d.displacementMap&&(M.displacementMap.value=d.displacementMap,e(d.displacementMap,M.displacementMapTransform),M.displacementScale.value=d.displacementScale,M.displacementBias.value=d.displacementBias),d.emissiveMap&&(M.emissiveMap.value=d.emissiveMap,e(d.emissiveMap,M.emissiveMapTransform)),d.specularMap&&(M.specularMap.value=d.specularMap,e(d.specularMap,M.specularMapTransform)),d.alphaTest>0&&(M.alphaTest.value=d.alphaTest);const h=t.get(d),p=h.envMap,_=h.envMapRotation;p&&(M.envMap.value=p,Zi.copy(_),Zi.x*=-1,Zi.y*=-1,Zi.z*=-1,p.isCubeTexture&&p.isRenderTargetTexture===!1&&(Zi.y*=-1,Zi.z*=-1),M.envMapRotation.value.setFromMatrix4(P_.makeRotationFromEuler(Zi)),M.flipEnvMap.value=p.isCubeTexture&&p.isRenderTargetTexture===!1?-1:1,M.reflectivity.value=d.reflectivity,M.ior.value=d.ior,M.refractionRatio.value=d.refractionRatio),d.lightMap&&(M.lightMap.value=d.lightMap,M.lightMapIntensity.value=d.lightMapIntensity,e(d.lightMap,M.lightMapTransform)),d.aoMap&&(M.aoMap.value=d.aoMap,M.aoMapIntensity.value=d.aoMapIntensity,e(d.aoMap,M.aoMapTransform))}function a(M,d){M.diffuse.value.copy(d.color),M.opacity.value=d.opacity,d.map&&(M.map.value=d.map,e(d.map,M.mapTransform))}function c(M,d){M.dashSize.value=d.dashSize,M.totalSize.value=d.dashSize+d.gapSize,M.scale.value=d.scale}function l(M,d,h,p){M.diffuse.value.copy(d.color),M.opacity.value=d.opacity,M.size.value=d.size*h,M.scale.value=p*.5,d.map&&(M.map.value=d.map,e(d.map,M.uvTransform)),d.alphaMap&&(M.alphaMap.value=d.alphaMap,e(d.alphaMap,M.alphaMapTransform)),d.alphaTest>0&&(M.alphaTest.value=d.alphaTest)}function u(M,d){M.diffuse.value.copy(d.color),M.opacity.value=d.opacity,M.rotation.value=d.rotation,d.map&&(M.map.value=d.map,e(d.map,M.mapTransform)),d.alphaMap&&(M.alphaMap.value=d.alphaMap,e(d.alphaMap,M.alphaMapTransform)),d.alphaTest>0&&(M.alphaTest.value=d.alphaTest)}function m(M,d){M.specular.value.copy(d.specular),M.shininess.value=Math.max(d.shininess,1e-4)}function g(M,d){d.gradientMap&&(M.gradientMap.value=d.gradientMap)}function x(M,d){M.metalness.value=d.metalness,d.metalnessMap&&(M.metalnessMap.value=d.metalnessMap,e(d.metalnessMap,M.metalnessMapTransform)),M.roughness.value=d.roughness,d.roughnessMap&&(M.roughnessMap.value=d.roughnessMap,e(d.roughnessMap,M.roughnessMapTransform)),d.envMap&&(M.envMapIntensity.value=d.envMapIntensity)}function f(M,d,h){M.ior.value=d.ior,d.sheen>0&&(M.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),M.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(M.sheenColorMap.value=d.sheenColorMap,e(d.sheenColorMap,M.sheenColorMapTransform)),d.sheenRoughnessMap&&(M.sheenRoughnessMap.value=d.sheenRoughnessMap,e(d.sheenRoughnessMap,M.sheenRoughnessMapTransform))),d.clearcoat>0&&(M.clearcoat.value=d.clearcoat,M.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(M.clearcoatMap.value=d.clearcoatMap,e(d.clearcoatMap,M.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(M.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,e(d.clearcoatRoughnessMap,M.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(M.clearcoatNormalMap.value=d.clearcoatNormalMap,e(d.clearcoatNormalMap,M.clearcoatNormalMapTransform),M.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===In&&M.clearcoatNormalScale.value.negate())),d.dispersion>0&&(M.dispersion.value=d.dispersion),d.iridescence>0&&(M.iridescence.value=d.iridescence,M.iridescenceIOR.value=d.iridescenceIOR,M.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],M.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(M.iridescenceMap.value=d.iridescenceMap,e(d.iridescenceMap,M.iridescenceMapTransform)),d.iridescenceThicknessMap&&(M.iridescenceThicknessMap.value=d.iridescenceThicknessMap,e(d.iridescenceThicknessMap,M.iridescenceThicknessMapTransform))),d.transmission>0&&(M.transmission.value=d.transmission,M.transmissionSamplerMap.value=h.texture,M.transmissionSamplerSize.value.set(h.width,h.height),d.transmissionMap&&(M.transmissionMap.value=d.transmissionMap,e(d.transmissionMap,M.transmissionMapTransform)),M.thickness.value=d.thickness,d.thicknessMap&&(M.thicknessMap.value=d.thicknessMap,e(d.thicknessMap,M.thicknessMapTransform)),M.attenuationDistance.value=d.attenuationDistance,M.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(M.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(M.anisotropyMap.value=d.anisotropyMap,e(d.anisotropyMap,M.anisotropyMapTransform))),M.specularIntensity.value=d.specularIntensity,M.specularColor.value.copy(d.specularColor),d.specularColorMap&&(M.specularColorMap.value=d.specularColorMap,e(d.specularColorMap,M.specularColorMapTransform)),d.specularIntensityMap&&(M.specularIntensityMap.value=d.specularIntensityMap,e(d.specularIntensityMap,M.specularIntensityMapTransform))}function v(M,d){d.matcap&&(M.matcap.value=d.matcap)}function A(M,d){const h=t.get(d).light;M.referencePosition.value.setFromMatrixPosition(h.matrixWorld),M.nearDistance.value=h.shadow.camera.near,M.farDistance.value=h.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:o}}function D_(n,t,e,i){let o={},r={},a=[];const c=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(h,p){const _=p.program;i.uniformBlockBinding(h,_)}function u(h,p){let _=o[h.id];_===void 0&&(v(h),_=m(h),o[h.id]=_,h.addEventListener("dispose",M));const T=p.program;i.updateUBOMapping(h,T);const w=t.render.frame;r[h.id]!==w&&(x(h),r[h.id]=w)}function m(h){const p=g();h.__bindingPointIndex=p;const _=n.createBuffer(),T=h.__size,w=h.usage;return n.bindBuffer(n.UNIFORM_BUFFER,_),n.bufferData(n.UNIFORM_BUFFER,T,w),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,p,_),_}function g(){for(let h=0;h<c;h++)if(a.indexOf(h)===-1)return a.push(h),h;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function x(h){const p=o[h.id],_=h.uniforms,T=h.__cache;n.bindBuffer(n.UNIFORM_BUFFER,p);for(let w=0,R=_.length;w<R;w++){const C=Array.isArray(_[w])?_[w]:[_[w]];for(let S=0,y=C.length;S<y;S++){const P=C[S];if(f(P,w,S,T)===!0){const E=P.__offset,I=Array.isArray(P.value)?P.value:[P.value];let F=0;for(let L=0;L<I.length;L++){const D=I[L],N=A(D);typeof D=="number"||typeof D=="boolean"?(P.__data[0]=D,n.bufferSubData(n.UNIFORM_BUFFER,E+F,P.__data)):D.isMatrix3?(P.__data[0]=D.elements[0],P.__data[1]=D.elements[1],P.__data[2]=D.elements[2],P.__data[3]=0,P.__data[4]=D.elements[3],P.__data[5]=D.elements[4],P.__data[6]=D.elements[5],P.__data[7]=0,P.__data[8]=D.elements[6],P.__data[9]=D.elements[7],P.__data[10]=D.elements[8],P.__data[11]=0):(D.toArray(P.__data,F),F+=N.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,E,P.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function f(h,p,_,T){const w=h.value,R=p+"_"+_;if(T[R]===void 0)return typeof w=="number"||typeof w=="boolean"?T[R]=w:T[R]=w.clone(),!0;{const C=T[R];if(typeof w=="number"||typeof w=="boolean"){if(C!==w)return T[R]=w,!0}else if(C.equals(w)===!1)return C.copy(w),!0}return!1}function v(h){const p=h.uniforms;let _=0;const T=16;for(let R=0,C=p.length;R<C;R++){const S=Array.isArray(p[R])?p[R]:[p[R]];for(let y=0,P=S.length;y<P;y++){const E=S[y],I=Array.isArray(E.value)?E.value:[E.value];for(let F=0,L=I.length;F<L;F++){const D=I[F],N=A(D),H=_%T,X=H%N.boundary,V=H+X;_+=X,V!==0&&T-V<N.storage&&(_+=T-V),E.__data=new Float32Array(N.storage/Float32Array.BYTES_PER_ELEMENT),E.__offset=_,_+=N.storage}}}const w=_%T;return w>0&&(_+=T-w),h.__size=_,h.__cache={},this}function A(h){const p={boundary:0,storage:0};return typeof h=="number"||typeof h=="boolean"?(p.boundary=4,p.storage=4):h.isVector2?(p.boundary=8,p.storage=8):h.isVector3||h.isColor?(p.boundary=16,p.storage=12):h.isVector4?(p.boundary=16,p.storage=16):h.isMatrix3?(p.boundary=48,p.storage=48):h.isMatrix4?(p.boundary=64,p.storage=64):h.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",h),p}function M(h){const p=h.target;p.removeEventListener("dispose",M);const _=a.indexOf(p.__bindingPointIndex);a.splice(_,1),n.deleteBuffer(o[p.id]),delete o[p.id],delete r[p.id]}function d(){for(const h in o)n.deleteBuffer(o[h]);a=[],o={},r={}}return{bind:l,update:u,dispose:d}}class L_{constructor(t={}){const{canvas:e=Dp(),context:i=null,depth:o=!0,stencil:r=!1,alpha:a=!1,antialias:c=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:u=!1,powerPreference:m="default",failIfMajorPerformanceCaveat:g=!1,reversedDepthBuffer:x=!1}=t;this.isWebGLRenderer=!0;let f;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=i.getContextAttributes().alpha}else f=a;const v=new Uint32Array(4),A=new Int32Array(4);let M=null,d=null;const h=[],p=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Fi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const _=this;let T=!1;this._outputColorSpace=Rn;let w=0,R=0,C=null,S=-1,y=null;const P=new Xe,E=new Xe;let I=null;const F=new $t(0);let L=0,D=e.width,N=e.height,H=1,X=null,V=null;const Z=new Xe(0,0,D,N),$=new Xe(0,0,D,N);let xt=!1;const yt=new Bc;let j=!1,ot=!1;const tt=new Be,_t=new z,mt=new Xe,rt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Rt=!1;function St(){return C===null?H:1}let G=i;function at(O,et){return e.getContext(O,et)}try{const O={alpha:!0,depth:o,stencil:r,antialias:c,premultipliedAlpha:l,preserveDrawingBuffer:u,powerPreference:m,failIfMajorPerformanceCaveat:g};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Ec}`),e.addEventListener("webglcontextlost",Wt,!1),e.addEventListener("webglcontextrestored",te,!1),e.addEventListener("webglcontextcreationerror",Ut,!1),G===null){const et="webgl2";if(G=at(et,O),G===null)throw at(et)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(O){throw console.error("THREE.WebGLRenderer: "+O.message),O}let st,ht,dt,Pt,Ct,Ot,xe,fe,W,U,it,ft,Dt,gt,ae,zt,ee,oe,Ft,Jt,me,se,Yt,ve;function J(){st=new Gx(G),st.init(),se=new T_(G,st),ht=new Ux(G,st,t,se),dt=new S_(G,st),ht.reversedDepthBuffer&&x&&dt.buffers.depth.setReversed(!0),Pt=new qx(G),Ct=new u_,Ot=new b_(G,st,dt,Ct,ht,se,Pt),xe=new Bx(_),fe=new Vx(_),W=new j0(G),Yt=new Fx(G,W),U=new Wx(G,W,Pt,Yt),it=new Zx(G,U,W,Pt),Ft=new Yx(G,ht,Ot),zt=new kx(Ct),ft=new l_(_,xe,fe,st,ht,Yt,zt),Dt=new I_(_,Ct),gt=new d_,ae=new __(st),oe=new Lx(_,xe,fe,dt,it,f,l),ee=new w_(_,it,ht),ve=new D_(G,Pt,ht,dt),Jt=new Nx(G,st,Pt),me=new Xx(G,st,Pt),Pt.programs=ft.programs,_.capabilities=ht,_.extensions=st,_.properties=Ct,_.renderLists=gt,_.shadowMap=ee,_.state=dt,_.info=Pt}J();const Bt=new C_(_,G);this.xr=Bt,this.getContext=function(){return G},this.getContextAttributes=function(){return G.getContextAttributes()},this.forceContextLoss=function(){const O=st.get("WEBGL_lose_context");O&&O.loseContext()},this.forceContextRestore=function(){const O=st.get("WEBGL_lose_context");O&&O.restoreContext()},this.getPixelRatio=function(){return H},this.setPixelRatio=function(O){O!==void 0&&(H=O,this.setSize(D,N,!1))},this.getSize=function(O){return O.set(D,N)},this.setSize=function(O,et,lt=!0){if(Bt.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}D=O,N=et,e.width=Math.floor(O*H),e.height=Math.floor(et*H),lt===!0&&(e.style.width=O+"px",e.style.height=et+"px"),this.setViewport(0,0,O,et)},this.getDrawingBufferSize=function(O){return O.set(D*H,N*H).floor()},this.setDrawingBufferSize=function(O,et,lt){D=O,N=et,H=lt,e.width=Math.floor(O*lt),e.height=Math.floor(et*lt),this.setViewport(0,0,O,et)},this.getCurrentViewport=function(O){return O.copy(P)},this.getViewport=function(O){return O.copy(Z)},this.setViewport=function(O,et,lt,ut){O.isVector4?Z.set(O.x,O.y,O.z,O.w):Z.set(O,et,lt,ut),dt.viewport(P.copy(Z).multiplyScalar(H).round())},this.getScissor=function(O){return O.copy($)},this.setScissor=function(O,et,lt,ut){O.isVector4?$.set(O.x,O.y,O.z,O.w):$.set(O,et,lt,ut),dt.scissor(E.copy($).multiplyScalar(H).round())},this.getScissorTest=function(){return xt},this.setScissorTest=function(O){dt.setScissorTest(xt=O)},this.setOpaqueSort=function(O){X=O},this.setTransparentSort=function(O){V=O},this.getClearColor=function(O){return O.copy(oe.getClearColor())},this.setClearColor=function(){oe.setClearColor(...arguments)},this.getClearAlpha=function(){return oe.getClearAlpha()},this.setClearAlpha=function(){oe.setClearAlpha(...arguments)},this.clear=function(O=!0,et=!0,lt=!0){let ut=0;if(O){let nt=!1;if(C!==null){const kt=C.texture.format;nt=kt===Dc||kt===Ic||kt===Pc}if(nt){const kt=C.texture.type,Kt=kt===ri||kt===so||kt===ys||kt===Ss||kt===Rc||kt===Cc,ne=oe.getClearColor(),jt=oe.getClearAlpha(),pe=ne.r,ge=ne.g,ue=ne.b;Kt?(v[0]=pe,v[1]=ge,v[2]=ue,v[3]=jt,G.clearBufferuiv(G.COLOR,0,v)):(A[0]=pe,A[1]=ge,A[2]=ue,A[3]=jt,G.clearBufferiv(G.COLOR,0,A))}else ut|=G.COLOR_BUFFER_BIT}et&&(ut|=G.DEPTH_BUFFER_BIT),lt&&(ut|=G.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),G.clear(ut)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",Wt,!1),e.removeEventListener("webglcontextrestored",te,!1),e.removeEventListener("webglcontextcreationerror",Ut,!1),oe.dispose(),gt.dispose(),ae.dispose(),Ct.dispose(),xe.dispose(),fe.dispose(),it.dispose(),Yt.dispose(),ve.dispose(),ft.dispose(),Bt.dispose(),Bt.removeEventListener("sessionstart",Un),Bt.removeEventListener("sessionend",Ns),ci.stop()};function Wt(O){O.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),T=!0}function te(){console.log("THREE.WebGLRenderer: Context Restored."),T=!1;const O=Pt.autoReset,et=ee.enabled,lt=ee.autoUpdate,ut=ee.needsUpdate,nt=ee.type;J(),Pt.autoReset=O,ee.enabled=et,ee.autoUpdate=lt,ee.needsUpdate=ut,ee.type=nt}function Ut(O){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",O.statusMessage)}function Et(O){const et=O.target;et.removeEventListener("dispose",Et),re(et)}function re(O){_e(O),Ct.remove(O)}function _e(O){const et=Ct.get(O).programs;et!==void 0&&(et.forEach(function(lt){ft.releaseProgram(lt)}),O.isShaderMaterial&&ft.releaseShaderCache(O))}this.renderBufferDirect=function(O,et,lt,ut,nt,kt){et===null&&(et=rt);const Kt=nt.isMesh&&nt.matrixWorld.determinant()<0,ne=jo(O,et,lt,ut,nt);dt.setMaterial(ut,Kt);let jt=lt.index,pe=1;if(ut.wireframe===!0){if(jt=U.getWireframeAttribute(lt),jt===void 0)return;pe=2}const ge=lt.drawRange,ue=lt.attributes.position;let ye=ge.start*pe,Ie=(ge.start+ge.count)*pe;kt!==null&&(ye=Math.max(ye,kt.start*pe),Ie=Math.min(Ie,(kt.start+kt.count)*pe)),jt!==null?(ye=Math.max(ye,0),Ie=Math.min(Ie,jt.count)):ue!=null&&(ye=Math.max(ye,0),Ie=Math.min(Ie,ue.count));const He=Ie-ye;if(He<0||He===1/0)return;Yt.setup(nt,ut,ne,lt,jt);let ke,De=Jt;if(jt!==null&&(ke=W.get(jt),De=me,De.setIndex(ke)),nt.isMesh)ut.wireframe===!0?(dt.setLineWidth(ut.wireframeLinewidth*St()),De.setMode(G.LINES)):De.setMode(G.TRIANGLES);else if(nt.isLine){let de=ut.linewidth;de===void 0&&(de=1),dt.setLineWidth(de*St()),nt.isLineSegments?De.setMode(G.LINES):nt.isLineLoop?De.setMode(G.LINE_LOOP):De.setMode(G.LINE_STRIP)}else nt.isPoints?De.setMode(G.POINTS):nt.isSprite&&De.setMode(G.TRIANGLES);if(nt.isBatchedMesh)if(nt._multiDrawInstances!==null)ko("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),De.renderMultiDrawInstances(nt._multiDrawStarts,nt._multiDrawCounts,nt._multiDrawCount,nt._multiDrawInstances);else if(st.get("WEBGL_multi_draw"))De.renderMultiDraw(nt._multiDrawStarts,nt._multiDrawCounts,nt._multiDrawCount);else{const de=nt._multiDrawStarts,Oe=nt._multiDrawCounts,Ee=nt._multiDrawCount,gn=jt?W.get(jt).bytesPerElement:1,Si=Ct.get(ut).currentProgram.getUniforms();for(let xn=0;xn<Ee;xn++)Si.setValue(G,"_gl_DrawID",xn),De.render(de[xn]/gn,Oe[xn])}else if(nt.isInstancedMesh)De.renderInstances(ye,He,nt.count);else if(lt.isInstancedBufferGeometry){const de=lt._maxInstanceCount!==void 0?lt._maxInstanceCount:1/0,Oe=Math.min(lt.instanceCount,de);De.renderInstances(ye,He,Oe)}else De.render(ye,He)};function Ne(O,et,lt){O.transparent===!0&&O.side===Cn&&O.forceSinglePass===!1?(O.side=In,O.needsUpdate=!0,Bi(O,et,lt),O.side=Ui,O.needsUpdate=!0,Bi(O,et,lt),O.side=Cn):Bi(O,et,lt)}this.compile=function(O,et,lt=null){lt===null&&(lt=O),d=ae.get(lt),d.init(et),p.push(d),lt.traverseVisible(function(nt){nt.isLight&&nt.layers.test(et.layers)&&(d.pushLight(nt),nt.castShadow&&d.pushShadow(nt))}),O!==lt&&O.traverseVisible(function(nt){nt.isLight&&nt.layers.test(et.layers)&&(d.pushLight(nt),nt.castShadow&&d.pushShadow(nt))}),d.setupLights();const ut=new Set;return O.traverse(function(nt){if(!(nt.isMesh||nt.isPoints||nt.isLine||nt.isSprite))return;const kt=nt.material;if(kt)if(Array.isArray(kt))for(let Kt=0;Kt<kt.length;Kt++){const ne=kt[Kt];Ne(ne,lt,nt),ut.add(ne)}else Ne(kt,lt,nt),ut.add(kt)}),d=p.pop(),ut},this.compileAsync=function(O,et,lt=null){const ut=this.compile(O,et,lt);return new Promise(nt=>{function kt(){if(ut.forEach(function(Kt){Ct.get(Kt).currentProgram.isReady()&&ut.delete(Kt)}),ut.size===0){nt(O);return}setTimeout(kt,10)}st.get("KHR_parallel_shader_compile")!==null?kt():setTimeout(kt,10)})};let Ce=null;function Wn(O){Ce&&Ce(O)}function Un(){ci.stop()}function Ns(){ci.start()}const ci=new rh;ci.setAnimationLoop(Wn),typeof self<"u"&&ci.setContext(self),this.setAnimationLoop=function(O){Ce=O,Bt.setAnimationLoop(O),O===null?ci.stop():ci.start()},Bt.addEventListener("sessionstart",Un),Bt.addEventListener("sessionend",Ns),this.render=function(O,et){if(et!==void 0&&et.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(T===!0)return;if(O.matrixWorldAutoUpdate===!0&&O.updateMatrixWorld(),et.parent===null&&et.matrixWorldAutoUpdate===!0&&et.updateMatrixWorld(),Bt.enabled===!0&&Bt.isPresenting===!0&&(Bt.cameraAutoUpdate===!0&&Bt.updateCamera(et),et=Bt.getCamera()),O.isScene===!0&&O.onBeforeRender(_,O,et,C),d=ae.get(O,p.length),d.init(et),p.push(d),tt.multiplyMatrices(et.projectionMatrix,et.matrixWorldInverse),yt.setFromProjectionMatrix(tt,oi,et.reversedDepth),ot=this.localClippingEnabled,j=zt.init(this.clippingPlanes,ot),M=gt.get(O,h.length),M.init(),h.push(M),Bt.enabled===!0&&Bt.isPresenting===!0){const kt=_.xr.getDepthSensingMesh();kt!==null&&Ko(kt,et,-1/0,_.sortObjects)}Ko(O,et,0,_.sortObjects),M.finish(),_.sortObjects===!0&&M.sort(X,V),Rt=Bt.enabled===!1||Bt.isPresenting===!1||Bt.hasDepthSensing()===!1,Rt&&oe.addToRenderList(M,O),this.info.render.frame++,j===!0&&zt.beginShadows();const lt=d.state.shadowsArray;ee.render(lt,O,et),j===!0&&zt.endShadows(),this.info.autoReset===!0&&this.info.reset();const ut=M.opaque,nt=M.transmissive;if(d.setupLights(),et.isArrayCamera){const kt=et.cameras;if(nt.length>0)for(let Kt=0,ne=kt.length;Kt<ne;Kt++){const jt=kt[Kt];Jo(ut,nt,O,jt)}Rt&&oe.render(O);for(let Kt=0,ne=kt.length;Kt<ne;Kt++){const jt=kt[Kt];Us(M,O,jt,jt.viewport)}}else nt.length>0&&Jo(ut,nt,O,et),Rt&&oe.render(O),Us(M,O,et);C!==null&&R===0&&(Ot.updateMultisampleRenderTarget(C),Ot.updateRenderTargetMipmap(C)),O.isScene===!0&&O.onAfterRender(_,O,et),Yt.resetDefaultState(),S=-1,y=null,p.pop(),p.length>0?(d=p[p.length-1],j===!0&&zt.setGlobalState(_.clippingPlanes,d.state.camera)):d=null,h.pop(),h.length>0?M=h[h.length-1]:M=null};function Ko(O,et,lt,ut){if(O.visible===!1)return;if(O.layers.test(et.layers)){if(O.isGroup)lt=O.renderOrder;else if(O.isLOD)O.autoUpdate===!0&&O.update(et);else if(O.isLight)d.pushLight(O),O.castShadow&&d.pushShadow(O);else if(O.isSprite){if(!O.frustumCulled||yt.intersectsSprite(O)){ut&&mt.setFromMatrixPosition(O.matrixWorld).applyMatrix4(tt);const Kt=it.update(O),ne=O.material;ne.visible&&M.push(O,Kt,ne,lt,mt.z,null)}}else if((O.isMesh||O.isLine||O.isPoints)&&(!O.frustumCulled||yt.intersectsObject(O))){const Kt=it.update(O),ne=O.material;if(ut&&(O.boundingSphere!==void 0?(O.boundingSphere===null&&O.computeBoundingSphere(),mt.copy(O.boundingSphere.center)):(Kt.boundingSphere===null&&Kt.computeBoundingSphere(),mt.copy(Kt.boundingSphere.center)),mt.applyMatrix4(O.matrixWorld).applyMatrix4(tt)),Array.isArray(ne)){const jt=Kt.groups;for(let pe=0,ge=jt.length;pe<ge;pe++){const ue=jt[pe],ye=ne[ue.materialIndex];ye&&ye.visible&&M.push(O,Kt,ye,lt,mt.z,ue)}}else ne.visible&&M.push(O,Kt,ne,lt,mt.z,null)}}const kt=O.children;for(let Kt=0,ne=kt.length;Kt<ne;Kt++)Ko(kt[Kt],et,lt,ut)}function Us(O,et,lt,ut){const nt=O.opaque,kt=O.transmissive,Kt=O.transparent;d.setupLightsView(lt),j===!0&&zt.setGlobalState(_.clippingPlanes,lt),ut&&dt.viewport(P.copy(ut)),nt.length>0&&ho(nt,et,lt),kt.length>0&&ho(kt,et,lt),Kt.length>0&&ho(Kt,et,lt),dt.buffers.depth.setTest(!0),dt.buffers.depth.setMask(!0),dt.buffers.color.setMask(!0),dt.setPolygonOffset(!1)}function Jo(O,et,lt,ut){if((lt.isScene===!0?lt.overrideMaterial:null)!==null)return;d.state.transmissionRenderTarget[ut.id]===void 0&&(d.state.transmissionRenderTarget[ut.id]=new ao(1,1,{generateMipmaps:!0,type:st.has("EXT_color_buffer_half_float")||st.has("EXT_color_buffer_float")?Is:ri,minFilter:io,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Pe.workingColorSpace}));const kt=d.state.transmissionRenderTarget[ut.id],Kt=ut.viewport||P;kt.setSize(Kt.z*_.transmissionResolutionScale,Kt.w*_.transmissionResolutionScale);const ne=_.getRenderTarget(),jt=_.getActiveCubeFace(),pe=_.getActiveMipmapLevel();_.setRenderTarget(kt),_.getClearColor(F),L=_.getClearAlpha(),L<1&&_.setClearColor(16777215,.5),_.clear(),Rt&&oe.render(lt);const ge=_.toneMapping;_.toneMapping=Fi;const ue=ut.viewport;if(ut.viewport!==void 0&&(ut.viewport=void 0),d.setupLightsView(ut),j===!0&&zt.setGlobalState(_.clippingPlanes,ut),ho(O,lt,ut),Ot.updateMultisampleRenderTarget(kt),Ot.updateRenderTargetMipmap(kt),st.has("WEBGL_multisampled_render_to_texture")===!1){let ye=!1;for(let Ie=0,He=et.length;Ie<He;Ie++){const ke=et[Ie],De=ke.object,de=ke.geometry,Oe=ke.material,Ee=ke.group;if(Oe.side===Cn&&De.layers.test(ut.layers)){const gn=Oe.side;Oe.side=In,Oe.needsUpdate=!0,ks(De,lt,ut,de,Oe,Ee),Oe.side=gn,Oe.needsUpdate=!0,ye=!0}}ye===!0&&(Ot.updateMultisampleRenderTarget(kt),Ot.updateRenderTargetMipmap(kt))}_.setRenderTarget(ne,jt,pe),_.setClearColor(F,L),ue!==void 0&&(ut.viewport=ue),_.toneMapping=ge}function ho(O,et,lt){const ut=et.isScene===!0?et.overrideMaterial:null;for(let nt=0,kt=O.length;nt<kt;nt++){const Kt=O[nt],ne=Kt.object,jt=Kt.geometry,pe=Kt.group;let ge=Kt.material;ge.allowOverride===!0&&ut!==null&&(ge=ut),ne.layers.test(lt.layers)&&ks(ne,et,lt,jt,ge,pe)}}function ks(O,et,lt,ut,nt,kt){O.onBeforeRender(_,et,lt,ut,nt,kt),O.modelViewMatrix.multiplyMatrices(lt.matrixWorldInverse,O.matrixWorld),O.normalMatrix.getNormalMatrix(O.modelViewMatrix),nt.onBeforeRender(_,et,lt,ut,O,kt),nt.transparent===!0&&nt.side===Cn&&nt.forceSinglePass===!1?(nt.side=In,nt.needsUpdate=!0,_.renderBufferDirect(lt,et,ut,nt,O,kt),nt.side=Ui,nt.needsUpdate=!0,_.renderBufferDirect(lt,et,ut,nt,O,kt),nt.side=Cn):_.renderBufferDirect(lt,et,ut,nt,O,kt),O.onAfterRender(_,et,lt,ut,nt,kt)}function Bi(O,et,lt){et.isScene!==!0&&(et=rt);const ut=Ct.get(O),nt=d.state.lights,kt=d.state.shadowsArray,Kt=nt.state.version,ne=ft.getParameters(O,nt.state,kt,et,lt),jt=ft.getProgramCacheKey(ne);let pe=ut.programs;ut.environment=O.isMeshStandardMaterial?et.environment:null,ut.fog=et.fog,ut.envMap=(O.isMeshStandardMaterial?fe:xe).get(O.envMap||ut.environment),ut.envMapRotation=ut.environment!==null&&O.envMap===null?et.environmentRotation:O.envMapRotation,pe===void 0&&(O.addEventListener("dispose",Et),pe=new Map,ut.programs=pe);let ge=pe.get(jt);if(ge!==void 0){if(ut.currentProgram===ge&&ut.lightsStateVersion===Kt)return yi(O,ne),ge}else ne.uniforms=ft.getUniforms(O),O.onBeforeCompile(ne,_),ge=ft.acquireProgram(ne,jt),pe.set(jt,ge),ut.uniforms=ne.uniforms;const ue=ut.uniforms;return(!O.isShaderMaterial&&!O.isRawShaderMaterial||O.clipping===!0)&&(ue.clippingPlanes=zt.uniform),yi(O,ne),ut.needsLights=Qo(O),ut.lightsStateVersion=Kt,ut.needsLights&&(ue.ambientLightColor.value=nt.state.ambient,ue.lightProbe.value=nt.state.probe,ue.directionalLights.value=nt.state.directional,ue.directionalLightShadows.value=nt.state.directionalShadow,ue.spotLights.value=nt.state.spot,ue.spotLightShadows.value=nt.state.spotShadow,ue.rectAreaLights.value=nt.state.rectArea,ue.ltc_1.value=nt.state.rectAreaLTC1,ue.ltc_2.value=nt.state.rectAreaLTC2,ue.pointLights.value=nt.state.point,ue.pointLightShadows.value=nt.state.pointShadow,ue.hemisphereLights.value=nt.state.hemi,ue.directionalShadowMap.value=nt.state.directionalShadowMap,ue.directionalShadowMatrix.value=nt.state.directionalShadowMatrix,ue.spotShadowMap.value=nt.state.spotShadowMap,ue.spotLightMatrix.value=nt.state.spotLightMatrix,ue.spotLightMap.value=nt.state.spotLightMap,ue.pointShadowMap.value=nt.state.pointShadowMap,ue.pointShadowMatrix.value=nt.state.pointShadowMatrix),ut.currentProgram=ge,ut.uniformsList=null,ge}function Bs(O){if(O.uniformsList===null){const et=O.currentProgram.getUniforms();O.uniformsList=Er.seqWithValue(et.seq,O.uniforms)}return O.uniformsList}function yi(O,et){const lt=Ct.get(O);lt.outputColorSpace=et.outputColorSpace,lt.batching=et.batching,lt.batchingColor=et.batchingColor,lt.instancing=et.instancing,lt.instancingColor=et.instancingColor,lt.instancingMorph=et.instancingMorph,lt.skinning=et.skinning,lt.morphTargets=et.morphTargets,lt.morphNormals=et.morphNormals,lt.morphColors=et.morphColors,lt.morphTargetsCount=et.morphTargetsCount,lt.numClippingPlanes=et.numClippingPlanes,lt.numIntersection=et.numClipIntersection,lt.vertexAlphas=et.vertexAlphas,lt.vertexTangents=et.vertexTangents,lt.toneMapping=et.toneMapping}function jo(O,et,lt,ut,nt){et.isScene!==!0&&(et=rt),Ot.resetTextureUnits();const kt=et.fog,Kt=ut.isMeshStandardMaterial?et.environment:null,ne=C===null?_.outputColorSpace:C.isXRRenderTarget===!0?C.texture.colorSpace:Go,jt=(ut.isMeshStandardMaterial?fe:xe).get(ut.envMap||Kt),pe=ut.vertexColors===!0&&!!lt.attributes.color&&lt.attributes.color.itemSize===4,ge=!!lt.attributes.tangent&&(!!ut.normalMap||ut.anisotropy>0),ue=!!lt.morphAttributes.position,ye=!!lt.morphAttributes.normal,Ie=!!lt.morphAttributes.color;let He=Fi;ut.toneMapped&&(C===null||C.isXRRenderTarget===!0)&&(He=_.toneMapping);const ke=lt.morphAttributes.position||lt.morphAttributes.normal||lt.morphAttributes.color,De=ke!==void 0?ke.length:0,de=Ct.get(ut),Oe=d.state.lights;if(j===!0&&(ot===!0||O!==y)){const rn=O===y&&ut.id===S;zt.setState(ut,O,rn)}let Ee=!1;ut.version===de.__version?(de.needsLights&&de.lightsStateVersion!==Oe.state.version||de.outputColorSpace!==ne||nt.isBatchedMesh&&de.batching===!1||!nt.isBatchedMesh&&de.batching===!0||nt.isBatchedMesh&&de.batchingColor===!0&&nt.colorTexture===null||nt.isBatchedMesh&&de.batchingColor===!1&&nt.colorTexture!==null||nt.isInstancedMesh&&de.instancing===!1||!nt.isInstancedMesh&&de.instancing===!0||nt.isSkinnedMesh&&de.skinning===!1||!nt.isSkinnedMesh&&de.skinning===!0||nt.isInstancedMesh&&de.instancingColor===!0&&nt.instanceColor===null||nt.isInstancedMesh&&de.instancingColor===!1&&nt.instanceColor!==null||nt.isInstancedMesh&&de.instancingMorph===!0&&nt.morphTexture===null||nt.isInstancedMesh&&de.instancingMorph===!1&&nt.morphTexture!==null||de.envMap!==jt||ut.fog===!0&&de.fog!==kt||de.numClippingPlanes!==void 0&&(de.numClippingPlanes!==zt.numPlanes||de.numIntersection!==zt.numIntersection)||de.vertexAlphas!==pe||de.vertexTangents!==ge||de.morphTargets!==ue||de.morphNormals!==ye||de.morphColors!==Ie||de.toneMapping!==He||de.morphTargetsCount!==De)&&(Ee=!0):(Ee=!0,de.__version=ut.version);let gn=de.currentProgram;Ee===!0&&(gn=Bi(ut,et,nt));let Si=!1,xn=!1,Oi=!1;const ze=gn.getUniforms(),bn=de.uniforms;if(dt.useProgram(gn.program)&&(Si=!0,xn=!0,Oi=!0),ut.id!==S&&(S=ut.id,xn=!0),Si||y!==O){dt.buffers.depth.getReversed()&&O.reversedDepth!==!0&&(O._reversedDepth=!0,O.updateProjectionMatrix()),ze.setValue(G,"projectionMatrix",O.projectionMatrix),ze.setValue(G,"viewMatrix",O.matrixWorldInverse);const hn=ze.map.cameraPosition;hn!==void 0&&hn.setValue(G,_t.setFromMatrixPosition(O.matrixWorld)),ht.logarithmicDepthBuffer&&ze.setValue(G,"logDepthBufFC",2/(Math.log(O.far+1)/Math.LN2)),(ut.isMeshPhongMaterial||ut.isMeshToonMaterial||ut.isMeshLambertMaterial||ut.isMeshBasicMaterial||ut.isMeshStandardMaterial||ut.isShaderMaterial)&&ze.setValue(G,"isOrthographic",O.isOrthographicCamera===!0),y!==O&&(y=O,xn=!0,Oi=!0)}if(nt.isSkinnedMesh){ze.setOptional(G,nt,"bindMatrix"),ze.setOptional(G,nt,"bindMatrixInverse");const rn=nt.skeleton;rn&&(rn.boneTexture===null&&rn.computeBoneTexture(),ze.setValue(G,"boneTexture",rn.boneTexture,Ot))}nt.isBatchedMesh&&(ze.setOptional(G,nt,"batchingTexture"),ze.setValue(G,"batchingTexture",nt._matricesTexture,Ot),ze.setOptional(G,nt,"batchingIdTexture"),ze.setValue(G,"batchingIdTexture",nt._indirectTexture,Ot),ze.setOptional(G,nt,"batchingColorTexture"),nt._colorsTexture!==null&&ze.setValue(G,"batchingColorTexture",nt._colorsTexture,Ot));const Tn=lt.morphAttributes;if((Tn.position!==void 0||Tn.normal!==void 0||Tn.color!==void 0)&&Ft.update(nt,lt,gn),(xn||de.receiveShadow!==nt.receiveShadow)&&(de.receiveShadow=nt.receiveShadow,ze.setValue(G,"receiveShadow",nt.receiveShadow)),ut.isMeshGouraudMaterial&&ut.envMap!==null&&(bn.envMap.value=jt,bn.flipEnvMap.value=jt.isCubeTexture&&jt.isRenderTargetTexture===!1?-1:1),ut.isMeshStandardMaterial&&ut.envMap===null&&et.environment!==null&&(bn.envMapIntensity.value=et.environmentIntensity),xn&&(ze.setValue(G,"toneMappingExposure",_.toneMappingExposure),de.needsLights&&Os(bn,Oi),kt&&ut.fog===!0&&Dt.refreshFogUniforms(bn,kt),Dt.refreshMaterialUniforms(bn,ut,H,N,d.state.transmissionRenderTarget[O.id]),Er.upload(G,Bs(de),bn,Ot)),ut.isShaderMaterial&&ut.uniformsNeedUpdate===!0&&(Er.upload(G,Bs(de),bn,Ot),ut.uniformsNeedUpdate=!1),ut.isSpriteMaterial&&ze.setValue(G,"center",nt.center),ze.setValue(G,"modelViewMatrix",nt.modelViewMatrix),ze.setValue(G,"normalMatrix",nt.normalMatrix),ze.setValue(G,"modelMatrix",nt.matrixWorld),ut.isShaderMaterial||ut.isRawShaderMaterial){const rn=ut.uniformsGroups;for(let hn=0,ts=rn.length;hn<ts;hn++){const li=rn[hn];ve.update(li,gn),ve.bind(li,gn)}}return gn}function Os(O,et){O.ambientLightColor.needsUpdate=et,O.lightProbe.needsUpdate=et,O.directionalLights.needsUpdate=et,O.directionalLightShadows.needsUpdate=et,O.pointLights.needsUpdate=et,O.pointLightShadows.needsUpdate=et,O.spotLights.needsUpdate=et,O.spotLightShadows.needsUpdate=et,O.rectAreaLights.needsUpdate=et,O.hemisphereLights.needsUpdate=et}function Qo(O){return O.isMeshLambertMaterial||O.isMeshToonMaterial||O.isMeshPhongMaterial||O.isMeshStandardMaterial||O.isShadowMaterial||O.isShaderMaterial&&O.lights===!0}this.getActiveCubeFace=function(){return w},this.getActiveMipmapLevel=function(){return R},this.getRenderTarget=function(){return C},this.setRenderTargetTextures=function(O,et,lt){const ut=Ct.get(O);ut.__autoAllocateDepthBuffer=O.resolveDepthBuffer===!1,ut.__autoAllocateDepthBuffer===!1&&(ut.__useRenderToTexture=!1),Ct.get(O.texture).__webglTexture=et,Ct.get(O.depthTexture).__webglTexture=ut.__autoAllocateDepthBuffer?void 0:lt,ut.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(O,et){const lt=Ct.get(O);lt.__webglFramebuffer=et,lt.__useDefaultFramebuffer=et===void 0};const zs=G.createFramebuffer();this.setRenderTarget=function(O,et=0,lt=0){C=O,w=et,R=lt;let ut=!0,nt=null,kt=!1,Kt=!1;if(O){const jt=Ct.get(O);if(jt.__useDefaultFramebuffer!==void 0)dt.bindFramebuffer(G.FRAMEBUFFER,null),ut=!1;else if(jt.__webglFramebuffer===void 0)Ot.setupRenderTarget(O);else if(jt.__hasExternalTextures)Ot.rebindTextures(O,Ct.get(O.texture).__webglTexture,Ct.get(O.depthTexture).__webglTexture);else if(O.depthBuffer){const ue=O.depthTexture;if(jt.__boundDepthTexture!==ue){if(ue!==null&&Ct.has(ue)&&(O.width!==ue.image.width||O.height!==ue.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");Ot.setupDepthRenderbuffer(O)}}const pe=O.texture;(pe.isData3DTexture||pe.isDataArrayTexture||pe.isCompressedArrayTexture)&&(Kt=!0);const ge=Ct.get(O).__webglFramebuffer;O.isWebGLCubeRenderTarget?(Array.isArray(ge[et])?nt=ge[et][lt]:nt=ge[et],kt=!0):O.samples>0&&Ot.useMultisampledRTT(O)===!1?nt=Ct.get(O).__webglMultisampledFramebuffer:Array.isArray(ge)?nt=ge[lt]:nt=ge,P.copy(O.viewport),E.copy(O.scissor),I=O.scissorTest}else P.copy(Z).multiplyScalar(H).floor(),E.copy($).multiplyScalar(H).floor(),I=xt;if(lt!==0&&(nt=zs),dt.bindFramebuffer(G.FRAMEBUFFER,nt)&&ut&&dt.drawBuffers(O,nt),dt.viewport(P),dt.scissor(E),dt.setScissorTest(I),kt){const jt=Ct.get(O.texture);G.framebufferTexture2D(G.FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_CUBE_MAP_POSITIVE_X+et,jt.__webglTexture,lt)}else if(Kt){const jt=et;for(let pe=0;pe<O.textures.length;pe++){const ge=Ct.get(O.textures[pe]);G.framebufferTextureLayer(G.FRAMEBUFFER,G.COLOR_ATTACHMENT0+pe,ge.__webglTexture,lt,jt)}}else if(O!==null&&lt!==0){const jt=Ct.get(O.texture);G.framebufferTexture2D(G.FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_2D,jt.__webglTexture,lt)}S=-1},this.readRenderTargetPixels=function(O,et,lt,ut,nt,kt,Kt,ne=0){if(!(O&&O.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let jt=Ct.get(O).__webglFramebuffer;if(O.isWebGLCubeRenderTarget&&Kt!==void 0&&(jt=jt[Kt]),jt){dt.bindFramebuffer(G.FRAMEBUFFER,jt);try{const pe=O.textures[ne],ge=pe.format,ue=pe.type;if(!ht.textureFormatReadable(ge)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!ht.textureTypeReadable(ue)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}et>=0&&et<=O.width-ut&&lt>=0&&lt<=O.height-nt&&(O.textures.length>1&&G.readBuffer(G.COLOR_ATTACHMENT0+ne),G.readPixels(et,lt,ut,nt,se.convert(ge),se.convert(ue),kt))}finally{const pe=C!==null?Ct.get(C).__webglFramebuffer:null;dt.bindFramebuffer(G.FRAMEBUFFER,pe)}}},this.readRenderTargetPixelsAsync=async function(O,et,lt,ut,nt,kt,Kt,ne=0){if(!(O&&O.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let jt=Ct.get(O).__webglFramebuffer;if(O.isWebGLCubeRenderTarget&&Kt!==void 0&&(jt=jt[Kt]),jt)if(et>=0&&et<=O.width-ut&&lt>=0&&lt<=O.height-nt){dt.bindFramebuffer(G.FRAMEBUFFER,jt);const pe=O.textures[ne],ge=pe.format,ue=pe.type;if(!ht.textureFormatReadable(ge))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!ht.textureTypeReadable(ue))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const ye=G.createBuffer();G.bindBuffer(G.PIXEL_PACK_BUFFER,ye),G.bufferData(G.PIXEL_PACK_BUFFER,kt.byteLength,G.STREAM_READ),O.textures.length>1&&G.readBuffer(G.COLOR_ATTACHMENT0+ne),G.readPixels(et,lt,ut,nt,se.convert(ge),se.convert(ue),0);const Ie=C!==null?Ct.get(C).__webglFramebuffer:null;dt.bindFramebuffer(G.FRAMEBUFFER,Ie);const He=G.fenceSync(G.SYNC_GPU_COMMANDS_COMPLETE,0);return G.flush(),await Lp(G,He,4),G.bindBuffer(G.PIXEL_PACK_BUFFER,ye),G.getBufferSubData(G.PIXEL_PACK_BUFFER,0,kt),G.deleteBuffer(ye),G.deleteSync(He),kt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(O,et=null,lt=0){const ut=Math.pow(2,-lt),nt=Math.floor(O.image.width*ut),kt=Math.floor(O.image.height*ut),Kt=et!==null?et.x:0,ne=et!==null?et.y:0;Ot.setTexture2D(O,0),G.copyTexSubImage2D(G.TEXTURE_2D,lt,0,0,Kt,ne,nt,kt),dt.unbindTexture()};const Hs=G.createFramebuffer(),zr=G.createFramebuffer();this.copyTextureToTexture=function(O,et,lt=null,ut=null,nt=0,kt=null){kt===null&&(nt!==0?(ko("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),kt=nt,nt=0):kt=0);let Kt,ne,jt,pe,ge,ue,ye,Ie,He;const ke=O.isCompressedTexture?O.mipmaps[kt]:O.image;if(lt!==null)Kt=lt.max.x-lt.min.x,ne=lt.max.y-lt.min.y,jt=lt.isBox3?lt.max.z-lt.min.z:1,pe=lt.min.x,ge=lt.min.y,ue=lt.isBox3?lt.min.z:0;else{const Tn=Math.pow(2,-nt);Kt=Math.floor(ke.width*Tn),ne=Math.floor(ke.height*Tn),O.isDataArrayTexture?jt=ke.depth:O.isData3DTexture?jt=Math.floor(ke.depth*Tn):jt=1,pe=0,ge=0,ue=0}ut!==null?(ye=ut.x,Ie=ut.y,He=ut.z):(ye=0,Ie=0,He=0);const De=se.convert(et.format),de=se.convert(et.type);let Oe;et.isData3DTexture?(Ot.setTexture3D(et,0),Oe=G.TEXTURE_3D):et.isDataArrayTexture||et.isCompressedArrayTexture?(Ot.setTexture2DArray(et,0),Oe=G.TEXTURE_2D_ARRAY):(Ot.setTexture2D(et,0),Oe=G.TEXTURE_2D),G.pixelStorei(G.UNPACK_FLIP_Y_WEBGL,et.flipY),G.pixelStorei(G.UNPACK_PREMULTIPLY_ALPHA_WEBGL,et.premultiplyAlpha),G.pixelStorei(G.UNPACK_ALIGNMENT,et.unpackAlignment);const Ee=G.getParameter(G.UNPACK_ROW_LENGTH),gn=G.getParameter(G.UNPACK_IMAGE_HEIGHT),Si=G.getParameter(G.UNPACK_SKIP_PIXELS),xn=G.getParameter(G.UNPACK_SKIP_ROWS),Oi=G.getParameter(G.UNPACK_SKIP_IMAGES);G.pixelStorei(G.UNPACK_ROW_LENGTH,ke.width),G.pixelStorei(G.UNPACK_IMAGE_HEIGHT,ke.height),G.pixelStorei(G.UNPACK_SKIP_PIXELS,pe),G.pixelStorei(G.UNPACK_SKIP_ROWS,ge),G.pixelStorei(G.UNPACK_SKIP_IMAGES,ue);const ze=O.isDataArrayTexture||O.isData3DTexture,bn=et.isDataArrayTexture||et.isData3DTexture;if(O.isDepthTexture){const Tn=Ct.get(O),rn=Ct.get(et),hn=Ct.get(Tn.__renderTarget),ts=Ct.get(rn.__renderTarget);dt.bindFramebuffer(G.READ_FRAMEBUFFER,hn.__webglFramebuffer),dt.bindFramebuffer(G.DRAW_FRAMEBUFFER,ts.__webglFramebuffer);for(let li=0;li<jt;li++)ze&&(G.framebufferTextureLayer(G.READ_FRAMEBUFFER,G.COLOR_ATTACHMENT0,Ct.get(O).__webglTexture,nt,ue+li),G.framebufferTextureLayer(G.DRAW_FRAMEBUFFER,G.COLOR_ATTACHMENT0,Ct.get(et).__webglTexture,kt,He+li)),G.blitFramebuffer(pe,ge,Kt,ne,ye,Ie,Kt,ne,G.DEPTH_BUFFER_BIT,G.NEAREST);dt.bindFramebuffer(G.READ_FRAMEBUFFER,null),dt.bindFramebuffer(G.DRAW_FRAMEBUFFER,null)}else if(nt!==0||O.isRenderTargetTexture||Ct.has(O)){const Tn=Ct.get(O),rn=Ct.get(et);dt.bindFramebuffer(G.READ_FRAMEBUFFER,Hs),dt.bindFramebuffer(G.DRAW_FRAMEBUFFER,zr);for(let hn=0;hn<jt;hn++)ze?G.framebufferTextureLayer(G.READ_FRAMEBUFFER,G.COLOR_ATTACHMENT0,Tn.__webglTexture,nt,ue+hn):G.framebufferTexture2D(G.READ_FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_2D,Tn.__webglTexture,nt),bn?G.framebufferTextureLayer(G.DRAW_FRAMEBUFFER,G.COLOR_ATTACHMENT0,rn.__webglTexture,kt,He+hn):G.framebufferTexture2D(G.DRAW_FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_2D,rn.__webglTexture,kt),nt!==0?G.blitFramebuffer(pe,ge,Kt,ne,ye,Ie,Kt,ne,G.COLOR_BUFFER_BIT,G.NEAREST):bn?G.copyTexSubImage3D(Oe,kt,ye,Ie,He+hn,pe,ge,Kt,ne):G.copyTexSubImage2D(Oe,kt,ye,Ie,pe,ge,Kt,ne);dt.bindFramebuffer(G.READ_FRAMEBUFFER,null),dt.bindFramebuffer(G.DRAW_FRAMEBUFFER,null)}else bn?O.isDataTexture||O.isData3DTexture?G.texSubImage3D(Oe,kt,ye,Ie,He,Kt,ne,jt,De,de,ke.data):et.isCompressedArrayTexture?G.compressedTexSubImage3D(Oe,kt,ye,Ie,He,Kt,ne,jt,De,ke.data):G.texSubImage3D(Oe,kt,ye,Ie,He,Kt,ne,jt,De,de,ke):O.isDataTexture?G.texSubImage2D(G.TEXTURE_2D,kt,ye,Ie,Kt,ne,De,de,ke.data):O.isCompressedTexture?G.compressedTexSubImage2D(G.TEXTURE_2D,kt,ye,Ie,ke.width,ke.height,De,ke.data):G.texSubImage2D(G.TEXTURE_2D,kt,ye,Ie,Kt,ne,De,de,ke);G.pixelStorei(G.UNPACK_ROW_LENGTH,Ee),G.pixelStorei(G.UNPACK_IMAGE_HEIGHT,gn),G.pixelStorei(G.UNPACK_SKIP_PIXELS,Si),G.pixelStorei(G.UNPACK_SKIP_ROWS,xn),G.pixelStorei(G.UNPACK_SKIP_IMAGES,Oi),kt===0&&et.generateMipmaps&&G.generateMipmap(Oe),dt.unbindTexture()},this.copyTextureToTexture3D=function(O,et,lt=null,ut=null,nt=0){return ko('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(O,et,lt,ut,nt)},this.initRenderTarget=function(O){Ct.get(O).__webglFramebuffer===void 0&&Ot.setupRenderTarget(O)},this.initTexture=function(O){O.isCubeTexture?Ot.setTextureCube(O,0):O.isData3DTexture?Ot.setTexture3D(O,0):O.isDataArrayTexture||O.isCompressedArrayTexture?Ot.setTexture2DArray(O,0):Ot.setTexture2D(O,0),dt.unbindTexture()},this.resetState=function(){w=0,R=0,C=null,dt.reset(),Yt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return oi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=Pe._getDrawingBufferColorSpace(t),e.unpackColorSpace=Pe._getUnpackColorSpace()}}const ce={MENU:"menu",READY:"ready",RACING:"racing",PAUSED:"paused",FINISHED:"finished",INSPECT:"inspect"},ws=1/120,bc=32,Mi=.5,F_="最屌最牛最霸最强最硬的kyle wong ！！！",N_=["淑芬","翠花","二狗","铁蛋","三炮","老宝","小牛"],dh=.28,Ae=new z(0,1,0),$i={volume:.65,sensitivity:1,fov:68,quality:"high",shake:!0,blur:!1},le={playerDriveForce:60,aiDriveForce:52,brakeForce:34,reverseDriveScale:.24,reverseEntrySpeed:.55,reverseExitSpeed:1.05,reverseEngageDelay:.12,checkpointMissWarnDistance:180,checkpointMissRespawnDistance:420,checkpointMissResetDistance:70,checkpointMissDistanceScaleByLevel:{default:1,serpent:1.2},checkpointProjectionSegmentRadius:6,checkpointProjectionSegmentRadiusByLevel:{default:6,serpent:4},rampMinApproachSpeed:8,rampTriggerCooldown:.5,rampSoundCooldown:.35,rampMinLaunchVelocity:8.8,rampLaunchGraceDuration:.22,itemWaveAdvanceDelay:1.6,itemWaveLaneFactor:.52,itemWaveMaxWaveCount:14,itemWaveMaxWaveCountByLevel:{default:14,ring:13,serpent:14,urban8:13,harbor:13},mudSlowdown:.17,mudDustInterval:.1,knockdownDuration:2.25,knockdownRecoverDuration:.95,itemHitImmunity:1.05,itemProjectileSpeed:28,itemProjectileTurnRate:14,bananaProjectileLife:3.6,bananaHazardLife:7.6,bananaHazardRadius:1.5,bombProjectileLife:4.5,bombHazardLife:3.4,bombBlastRadius:7.5,trapHazardLife:8.4,trapHazardRadius:2.2,baseDrag:.115,speedDragFactor:.022,sideForce:17,offTrackRespawnFactor:3.15,boostTopSpeedScale:1.22,airTopSpeedBonus:10},xu=[{key:"Aggressive",aggression:.95,speedBias:1.03,risk:.95,dodge:.62},{key:"Racer",aggression:.4,speedBias:1.08,risk:.55,dodge:.86},{key:"Trickster",aggression:.7,speedBias:1,risk:1,dodge:.7}],eo=["turbo","bash","shock","shield","trap","banana","bomb"];function Tc(n){return n==="turbo"?"涡轮":n==="bash"?"冲撞":n==="shock"?"电震":n==="shield"?"护盾":n==="trap"?"地雷":n==="banana"?"香蕉皮":n==="bomb"?"炸弹":"未知"}function Da(n){const t=Math.max(0,n),e=Math.floor(t/60),i=Math.floor(t%60),o=Math.floor((t-Math.floor(t))*100);return`${String(e).padStart(2,"0")}:${String(i).padStart(2,"0")}.${String(o).padStart(2,"0")}`}function U_(){return{ctx:null,master:null,windGain:null,windFilter:null,windCurrent:0,windTarget:0}}const k_={id:"ring",name:"环峰禁区",desc:"环形赛道 + 中央高山 + 大落差压迫",loop:!0,seed:9201,routeHalfWidth:8.4,routeLayers:[0,-2.6,2.6,-5.1,5.1],barrierStep:10,barrierDensity:.58,treeCount:180,rockCount:252,propCount:132,hazardCount:56,environmentTrackPadding:2.4,bounds:{minX:-430,maxX:430,minZ:-430,maxZ:430},clearColor:9678018,fogColor:10730191,ambient:9348791,sun:16773327,baseAiSpeed:25,path:[[0,288],[88,272],[170,236],[242,180],[286,100],[298,8],[278,-80],[232,-160],[160,-232],[72,-276],[-24,-292],[-114,-270],[-194,-224],[-252,-156],[-286,-74],[-294,18],[-268,108],[-208,188],[-130,244],[-40,282]],ramps:[{t:.06,lane:2.9,width:6.6,length:13,slope:24,launch:10,boost:4.6},{t:.18,lane:-2.6,width:7.2,length:14,slope:20,launch:9.4,boost:4.2},{t:.34,lane:2.1,width:7.6,length:16,slope:26,launch:10.8,boost:5},{t:.55,lane:-2.1,width:7.1,length:15,slope:23,launch:9.8,boost:4.5},{t:.76,lane:2.3,width:7.4,length:15,slope:22,launch:10.1,boost:4.7}],boosts:[{t:.11,lane:0,width:3.8,length:8.2,power:12},{t:.28,lane:-1.6,width:3.4,length:7.2,power:11.4},{t:.43,lane:1.4,width:3.4,length:7.6,power:11.8},{t:.68,lane:.6,width:3.8,length:8.4,power:12.3},{t:.88,lane:-1.5,width:3.3,length:7.1,power:11.4}],items:[{t:.08,lane:0},{t:.21,lane:.1},{t:.34,lane:-.1},{t:.47,lane:.1},{t:.6,lane:-.1},{t:.73,lane:.1},{t:.86,lane:-.1}],mountainField:{seedOffset:34721,boundsInset:18,defaultMinTrackDist:82,maxAttempts:36,minNormalY:.62,maxRelief:13.2,reliefSampleScale:.7,viewClearanceScale:1.34,sightlineScale:.9,minSpacingScale:1.24,belts:[{mode:"ring",count:2,radius:142,spread:12,minScale:9.8,maxScale:13.4,minTrackDist:126,footprintScale:1.56,minSpacingScale:1.26},{mode:"ring",count:6,radius:356,spread:18,minScale:8.2,maxScale:12.4,minTrackDist:88,footprintScale:1.52,minSpacingScale:1.22},{mode:"edge",count:2,inset:18,band:30,minScale:7.2,maxScale:10.8,minTrackDist:84,footprintScale:1.42,minSpacingScale:1.2}]},heightFn:(n,t)=>{const e=Math.hypot(n,t),i=118*Math.exp(-(e*e)/52e3),o=18*Math.exp(-((n-54)*(n-54)+(t+18)*(t+18))/11400)+16*Math.exp(-((n+62)*(n+62)+(t-28)*(t-28))/11600),r=-14*Math.exp(-((e-252)*(e-252))/4600),a=32*Math.exp(-((e-336)*(e-336))/18e3),c=Math.sin(n*.024)*5.2+Math.cos(t*.021)*4.8,l=Math.sin((n+t)*.046)*3+Math.cos((n-t)*.034)*4.2,u=-7*Math.exp(-((n+22)*(n+22)+(t+18)*(t+18))/6200),m=-12*Math.exp(-((n-126)*(n-126)+(t+60)*(t+60))/10600)-9*Math.exp(-((n+150)*(n+150)+(t-118)*(t-118))/11e3);return 42+i+o+r+a+c+l+u+m},palette:{low:new $t(4021060),high:new $t(13217931),accent:new $t(7377770),route:4014922,boundary:12536355,ramp:12863531,boost:3596756}},B_={id:"serpent",name:"裂脊蛇行",desc:"线性盘绕 + 峡谷跳跃 + 高速风险路段",loop:!1,seed:18427,routeHalfWidth:8.2,routeLayers:[0,-2.4,2.4,-4.8,4.8],barrierStep:12,barrierDensity:.42,treeCount:88,rockCount:300,propCount:156,hazardCount:44,environmentTrackPadding:2.2,bounds:{minX:-320,maxX:320,minZ:-430,maxZ:390},clearColor:12820347,fogColor:13480074,ambient:12558206,sun:16768943,baseAiSpeed:27,path:[[-24,356],[52,332],[120,296],[166,242],[178,184],[148,132],[92,88],[20,52],[-58,16],[-128,-34],[-170,-94],[-166,-158],[-124,-222],[-52,-264],[30,-302],[108,-338],[164,-386],[174,-420],[140,-430],[72,-416],[-8,-380],[-86,-330],[-142,-272],[-176,-206],[-174,-140],[-132,-80],[-62,-34],[22,4],[104,40],[170,90],[202,154],[194,218],[148,274],[78,316],[-2,342],[-80,358]],ramps:[{t:.13,lane:2.2,width:6.9,length:14,slope:20,launch:9.6,boost:4.2},{t:.29,lane:-2.3,width:7.4,length:15,slope:24,launch:10.4,boost:4.6},{t:.45,lane:.9,width:7.8,length:16,slope:27,launch:11.3,boost:5.2},{t:.63,lane:-1.8,width:7.2,length:14,slope:22,launch:9.9,boost:4.4},{t:.82,lane:1.9,width:7.3,length:15,slope:25,launch:10.9,boost:4.9}],boosts:[{t:.06,lane:.3,width:3.4,length:7.4,power:12.1},{t:.2,lane:-1.6,width:3.2,length:7.1,power:11.5},{t:.38,lane:1.8,width:3.6,length:8.2,power:12.8},{t:.56,lane:-.5,width:3.4,length:7.6,power:12.3},{t:.73,lane:1.5,width:3.2,length:7.2,power:11.8},{t:.91,lane:-1.6,width:3.5,length:8.2,power:12.2}],items:[{t:.1,lane:0},{t:.23,lane:.1},{t:.35,lane:-.1},{t:.5,lane:.1},{t:.63,lane:-.1},{t:.76,lane:.1},{t:.89,lane:-.1}],mountainField:{seedOffset:18673,boundsInset:16,defaultMinTrackDist:86,maxAttempts:36,minNormalY:.64,maxRelief:12.2,reliefSampleScale:.72,viewClearanceScale:1.38,sightlineScale:.92,minSpacingScale:1.26,belts:[{mode:"edge",count:5,inset:16,band:42,minScale:7.2,maxScale:11.4,minTrackDist:90,footprintScale:1.46,minSpacingScale:1.24},{mode:"line",count:4,x:-268,zMin:-392,zMax:340,jitterX:12,jitterZ:10,minScale:8.2,maxScale:12,minTrackDist:96,footprintScale:1.5,minSpacingScale:1.24},{mode:"line",count:4,x:264,zMin:-392,zMax:340,jitterX:12,jitterZ:10,minScale:8.2,maxScale:12,minTrackDist:96,footprintScale:1.5,minSpacingScale:1.24}]},heightFn:(n,t)=>{const e=118-(340-t)*.086,i=Math.sin(n*.033)*6.2+Math.cos(t*.027)*5.1,o=Math.sin((n+t)*.044)*3.8+Math.cos((n-t)*.038)*3.4,r=18*Math.exp(-((n+178)*(n+178))/7600)+20*Math.exp(-((n-168)*(n-168))/8600),a=12*Math.exp(-((n+246)*(n+246))/4300)+12*Math.exp(-((n-244)*(n-244))/4300),c=-15*Math.exp(-((n+4)*(n+4))/2600),l=-11*Math.exp(-((n-106)*(n-106)+(t+204)*(t+204))/9200)-13*Math.exp(-((n+120)*(n+120)+(t-54)*(t-54))/9600);return e+i+o+r+a+c+l},palette:{low:new $t(8610117),high:new $t(14729104),accent:new $t(11632470),route:4538169,boundary:13718559,ramp:11351069,boost:4122571}},O_={id:"urban8",name:"城市双环立交",desc:"正交街区 + 长距立交桥 + 下穿隧道",loop:!0,seed:23117,routeHalfWidth:8.5,routeLayers:[0,-2.6,2.6,-5.2,5.2],barrierStep:10,barrierDensity:.85,treeCount:0,rockCount:0,propCount:0,hazardCount:0,environmentTrackPadding:1.5,bounds:{minX:-550,maxX:550,minZ:-550,maxZ:550},clearColor:2238513,fogColor:3751494,ambient:5923437,sun:16765878,baseAiSpeed:25,path:[[-300,300],[-100,300],[0,300],[100,300],[300,300],[360,280],[380,220],[380,160],[380,0],[380,-160],[360,-280],[300,-300],[100,-300],[0,-300],[-80,-300],[-160,-280],[-180,-220],[-180,-100],[-180,0],[-180,100],[-200,160],[-260,180],[-320,160],[-340,100],[-340,-100],[-340,-160],[-380,-220],[-420,-200],[-420,-100],[-420,0],[-420,160],[-400,260],[-360,290]],checkpoints:[0,5,8,12,17,22,26,30],ramps:[{t:.15,lane:0,width:8,length:15,slope:18,launch:10,boost:4.5},{t:.45,lane:-2,width:7.5,length:15,slope:20,launch:10.5,boost:4.8},{t:.75,lane:2,width:7.5,length:15,slope:20,launch:10.5,boost:4.8}],boosts:[{t:.08,lane:1.5,width:3.5,length:8,power:12},{t:.28,lane:-1,width:4,length:9,power:12.5},{t:.58,lane:0,width:4.5,length:10,power:13},{t:.85,lane:-1.5,width:3.5,length:8,power:12}],items:[{t:.1,lane:0},{t:.25,lane:.8},{t:.4,lane:-.8},{t:.55,lane:0},{t:.7,lane:.5},{t:.9,lane:-.5}],mountainField:{seedOffset:21156,boundsInset:0,defaultMinTrackDist:10,maxAttempts:0,minNormalY:.9,maxRelief:1,reliefSampleScale:.1,viewClearanceScale:1,sightlineScale:1,minSpacingScale:1,belts:[]},heightFn:(n,t)=>{const o=1/(1+Math.exp(-(n-280)*.04))*30,a=1/(1+Math.exp((n+360)*.05))*-30,c=Math.sin(n*.015)*.5+Math.cos(t*.015)*.5;return 15+o+a+c},palette:{low:new $t(1710638),high:new $t(1450302),accent:new $t(996448),route:2236962,boundary:15287648,ramp:16753920,boost:54015}},z_={id:"harbor",name:"港口巨构",desc:"集装箱走廊 + 开阔码头边缘 + 高架维护桥",loop:!0,seed:40123,routeHalfWidth:8.4,routeLayers:[0,-2.6,2.6,-5.1,5.1],barrierStep:11,barrierDensity:.8,treeCount:0,rockCount:0,propCount:0,hazardCount:0,environmentTrackPadding:2.4,bounds:{minX:-600,maxX:600,minZ:-450,maxZ:450},clearColor:10203323,fogColor:11123652,ambient:8755104,sun:16771522,baseAiSpeed:23,path:[[-300,280],[0,290],[300,280],[450,200],[400,50],[250,-50],[350,-150],[150,-250],[0,-300],[-250,-250],[-100,-150],[-100,0],[-100,120],[-350,150]],checkpoints:[0,3,6,9,11,13],ramps:[{t:.15,lane:-1,width:7,length:14,slope:18,launch:9.5,boost:4.2},{t:.35,lane:0,width:7.5,length:13,slope:20,launch:9.7,boost:4.3},{t:.65,lane:1,width:7,length:15,slope:18,launch:9.6,boost:4.2},{t:.85,lane:-1.5,width:7,length:12,slope:20,launch:9.6,boost:4.2}],boosts:[{t:.1,lane:0,width:3.4,length:7.4,power:12},{t:.4,lane:-1,width:3.3,length:7.2,power:11.8},{t:.7,lane:1,width:3.6,length:7.9,power:12.5},{t:.82,lane:0,width:3.6,length:12,power:14.5}],items:[{t:.08,lane:0},{t:.25,lane:.5},{t:.45,lane:-.5},{t:.6,lane:1},{t:.8,lane:-1},{t:.95,lane:0}],mountainField:{seedOffset:24879,boundsInset:0,defaultMinTrackDist:10,maxAttempts:0,minNormalY:.84,maxRelief:1,reliefSampleScale:.5,viewClearanceScale:1.1,sightlineScale:.9,minSpacingScale:1.2,belts:[]},heightFn:(n,t)=>{let e=15;const i=1/(1+Math.exp(-(t-200)*.05));e-=i*15;const o=Math.exp(-Math.pow(t-285,2)/800);e+=o*i*6;const r=Math.exp(-Math.pow(n+100,2)/2e3),a=1/(1+Math.exp((t-150)*.05));e+=r*a*20;const c=(Math.sin(n*.01)*.2+Math.cos(t*.01)*.2)*(1-i*.5);return e+c},palette:{low:new $t(3489861),high:new $t(10991035),accent:new $t(5926263),route:2370094,boundary:13855021,ramp:12474153,boost:3068869}},H_={id:"alpine",name:"冰川遗迹 (Frost Peak)",desc:"高海拔冰雪赛道 + 险峻悬崖 + 遗迹碎石",loop:!1,seed:88482,routeHalfWidth:8.8,routeLayers:[0,-2.8,2.8,-5.4,5.4],barrierStep:14,barrierDensity:.55,treeCount:220,rockCount:450,propCount:180,hazardCount:88,environmentTrackPadding:2,bounds:{minX:-600,maxX:600,minZ:-600,maxZ:600},clearColor:13689324,fogColor:13163500,ambient:11059933,sun:16776432,baseAiSpeed:24,path:[[-50,520],[80,480],[150,400],[110,320],[30,240],[-60,260],[-150,200],[-190,110],[-100,40],[20,-10],[120,-70],[220,-150],[180,-260],[80,-320],[0,-400],[-100,-450],[-200,-380],[-280,-310],[-350,-400],[-280,-500],[-160,-560],[-40,-520]],checkpoints:[0,3,6,9,12,15,18,20,21],ramps:[{t:.15,lane:2.5,width:7.2,length:14,slope:22,launch:10,boost:4.8},{t:.35,lane:-2,width:8,length:15,slope:24,launch:11.2,boost:5.2},{t:.55,lane:1.5,width:6.8,length:16,slope:25,launch:10.5,boost:4.5},{t:.75,lane:-2.5,width:7.5,length:14,slope:21,launch:9.8,boost:4.6},{t:.9,lane:0,width:8.5,length:18,slope:28,launch:12,boost:5.8}],boosts:[{t:.08,lane:0,width:4,length:8.5,power:12.5},{t:.25,lane:-1.5,width:3.5,length:7.5,power:11.8},{t:.45,lane:2,width:3.8,length:8,power:12},{t:.65,lane:-1,width:3.6,length:7.8,power:11.9},{t:.82,lane:1.5,width:3.9,length:8.2,power:12.2}],items:[{t:.1,lane:.5},{t:.28,lane:-.5},{t:.48,lane:.8},{t:.68,lane:-.8},{t:.88,lane:0}],mountainField:{seedOffset:38930,boundsInset:24,defaultMinTrackDist:90,maxAttempts:45,minNormalY:.55,maxRelief:18.2,reliefSampleScale:.8,viewClearanceScale:1.4,sightlineScale:.85,minSpacingScale:1.3,belts:[{mode:"edge",count:6,inset:24,band:50,minScale:10.5,maxScale:18.5,minTrackDist:100,footprintScale:1.8,minSpacingScale:1.4},{mode:"line",count:4,x:-200,zMin:-500,zMax:400,jitterX:30,jitterZ:30,minScale:12.5,maxScale:16.5,minTrackDist:95,footprintScale:1.6,minSpacingScale:1.3},{mode:"line",count:4,x:250,zMin:-400,zMax:500,jitterX:40,jitterZ:30,minScale:14,maxScale:19,minTrackDist:100,footprintScale:1.7,minSpacingScale:1.3}]},heightFn:(n,t)=>{const e=140-(520-t)*.12,i=Math.sin(n*.015)*12.5+Math.cos(t*.018)*15.2,o=Math.sin((n+t)*.055)*6.8+Math.cos((n-t)*.045)*5.4,r=-25*Math.exp(-((n-60)*(n-60)+(t-250)*(t-250))/4800),a=-28*Math.exp(-((n+120)*(n+120)+(t+180)*(t+180))/5200),c=-32*Math.exp(-((n-150)*(n-150)+(t+400)*(t+400))/6e3),l=45*Math.exp(-((n+280)*(n+280))/12e3);return e+i+o+r+a+c+l},palette:{low:new $t(12440031),high:new $t(16580093),accent:new $t(9415108),route:7243931,boundary:4026531,ramp:4752324,boost:5236466}},V_={id:"lava",name:"熔岩峡谷 (Lava Canyon)",desc:"封闭熔岩隧道与开放喷发口 + 极限弯道",loop:!1,seed:94001,routeHalfWidth:8,routeLayers:[0,-2.5,2.5,-4.8,4.8],barrierStep:10,barrierDensity:.65,treeCount:0,rockCount:650,propCount:220,hazardCount:130,environmentTrackPadding:1.5,bounds:{minX:-550,maxX:550,minZ:-300,maxZ:700},clearColor:4856081,fogColor:6037783,ambient:9059371,sun:16737843,baseAiSpeed:25,path:[[-30,650],[90,600],[210,500],[260,420],[210,310],[100,240],[-50,190],[-180,220],[-260,310],[-340,360],[-420,280],[-400,180],[-290,80],[-190,-20],[-100,-100],[-120,-190],[-220,-250],[-30,-280],[80,-260],[160,-200],[240,-130],[350,-60],[420,20],[380,120]],checkpoints:[0,3,6,9,12,15,18,21,23],ramps:[{t:.12,lane:-2,width:7,length:14,slope:23,launch:10.5,boost:4.8},{t:.28,lane:2.2,width:7.5,length:15,slope:26,launch:11,boost:5.2},{t:.44,lane:0,width:8,length:16,slope:25,launch:11.5,boost:5.5},{t:.65,lane:-2.5,width:6.8,length:14,slope:22,launch:9.9,boost:4.5},{t:.85,lane:1.8,width:7.4,length:15,slope:24,launch:10.8,boost:5}],boosts:[{t:.06,lane:.5,width:3.5,length:8,power:12},{t:.22,lane:-1.5,width:3.8,length:7.6,power:11.5},{t:.4,lane:2,width:3.6,length:8.2,power:12.5},{t:.6,lane:-1,width:3.9,length:7.8,power:11.8},{t:.8,lane:1.5,width:3.5,length:7.5,power:12.2}],items:[{t:.09,lane:-.5},{t:.3,lane:.8},{t:.48,lane:-.8},{t:.68,lane:.2},{t:.88,lane:-.2}],mountainField:{seedOffset:43459,boundsInset:20,defaultMinTrackDist:85,maxAttempts:50,minNormalY:.5,maxRelief:22,reliefSampleScale:.9,viewClearanceScale:1.5,sightlineScale:.8,minSpacingScale:1.4,belts:[{mode:"edge",count:8,inset:30,band:60,minScale:12,maxScale:20,minTrackDist:105,footprintScale:1.9,minSpacingScale:1.5},{mode:"ring",count:5,radius:250,spread:40,minScale:13,maxScale:18,minTrackDist:90,footprintScale:1.7,minSpacingScale:1.4}]},heightFn:(n,t)=>{const e=120-(650-t)*.15,i=35*Math.exp(-((n-150)*(n-150)+(t-250)*(t-250))/8e3)+40*Math.exp(-((n+250)*(n+250)+(t-50)*(t-50))/9e3),o=-45*Math.exp(-((n+100)*(n+100)+(t+150)*(t+150))/15e3),r=Math.sin(n*.04+t*.02)*8.5+Math.cos(n*.03-t*.05)*7.2,a=-18*Math.exp(-((n-t)*(n-t))/3e3);return e+i+o+r+a},palette:{low:new $t(3674636),high:new $t(7545622),accent:new $t(10041111),route:2235418,boundary:16726784,ramp:12397056,boost:16747520}},G_={id:"neon",name:"霓虹电网 (Neon Grid)",desc:"赛博数字赛道 + 发光边界 + 极速直线带",loop:!0,seed:40404,routeHalfWidth:9.5,routeLayers:[0,-3,3,-6,6],barrierStep:8,barrierDensity:.85,treeCount:0,rockCount:0,propCount:360,hazardCount:160,environmentTrackPadding:1,bounds:{minX:-600,maxX:600,minZ:-600,maxZ:600},clearColor:327946,fogColor:983578,ambient:2034491,sun:9055202,baseAiSpeed:28,path:[[0,500],[200,500],[400,400],[500,200],[500,-200],[400,-400],[200,-500],[-200,-500],[-400,-400],[-500,-200],[-500,200],[-400,400],[-200,500]],checkpoints:[0,3,6,9,12],ramps:[{t:.08,lane:0,width:9,length:18,slope:22,launch:10.5,boost:5.5},{t:.25,lane:-2.5,width:8.5,length:16,slope:25,launch:11.2,boost:5.8},{t:.42,lane:2.5,width:8.5,length:16,slope:25,launch:11.2,boost:5.8},{t:.58,lane:-1.5,width:8,length:15,slope:23,launch:10,boost:5},{t:.75,lane:1.5,width:8,length:15,slope:23,launch:10,boost:5},{t:.92,lane:0,width:10,length:20,slope:28,launch:12.5,boost:6.5}],boosts:[{t:.04,lane:0,width:4.5,length:10,power:13.5},{t:.15,lane:-2,width:4,length:9,power:12.8},{t:.32,lane:2,width:4,length:9,power:12.8},{t:.5,lane:0,width:5,length:12,power:14},{t:.68,lane:-2,width:4,length:9,power:12.5},{t:.85,lane:2,width:4,length:9,power:12.5}],items:[{t:.1,lane:0},{t:.2,lane:-1},{t:.38,lane:1},{t:.54,lane:0},{t:.72,lane:-1},{t:.88,lane:1}],mountainField:{seedOffset:48059,boundsInset:15,defaultMinTrackDist:70,maxAttempts:25,minNormalY:.7,maxRelief:8,reliefSampleScale:.4,viewClearanceScale:1.1,sightlineScale:.9,minSpacingScale:1.2,belts:[{mode:"ring",count:8,radius:280,spread:20,minScale:8,maxScale:14,minTrackDist:85,footprintScale:1.3,minSpacingScale:1.2}]},heightFn:(n,t)=>{const i=Math.sin(n*.02)*4,o=Math.cos(t*.02)*4,r=Math.sin((n+t)*.03)*2.5,a=-15*Math.exp(-(n*n+t*t)/2e4);return 25+i+o+r+a},palette:{low:new $t(656150),high:new $t(1705259),accent:new $t(3672921),route:327946,boundary:65535,ramp:16711935,boost:65280}},W_={id:"ruins",name:"荒木神庙 (Overgrown Ruins)",desc:"失落神庙结构 + 密集植被覆盖 + 多段极限飞跃",loop:!1,seed:70107,routeHalfWidth:7.8,routeLayers:[0,-2.4,2.4,-4.6,4.6],barrierStep:12,barrierDensity:.35,treeCount:880,rockCount:320,propCount:150,hazardCount:60,environmentTrackPadding:2.5,bounds:{minX:-450,maxX:450,minZ:-450,maxZ:450},clearColor:8100209,fogColor:9087104,ambient:5929552,sun:16775910,baseAiSpeed:23,path:[[350,350],[250,380],[120,320],[60,220],[180,160],[240,60],[160,-40],[50,-120],[-80,-60],[-180,40],[-280,120],[-380,50],[-400,-80],[-320,-180],[-200,-240],[-80,-320],[40,-400],[180,-350],[280,-250],[380,-150]],checkpoints:[0,4,8,12,16,19],ramps:[{t:.18,lane:-1.5,width:6.5,length:13,slope:25,launch:10.5,boost:4.6},{t:.36,lane:1.8,width:7,length:14,slope:27,launch:11.2,boost:5},{t:.54,lane:0,width:8,length:16,slope:30,launch:12.8,boost:6.2},{t:.72,lane:-2,width:6.8,length:14,slope:26,launch:10.8,boost:4.8},{t:.88,lane:2.2,width:7.2,length:15,slope:28,launch:11.5,boost:5.2}],boosts:[{t:.12,lane:1.5,width:3.5,length:7.5,power:11.8},{t:.3,lane:-2,width:3.6,length:8.2,power:12.2},{t:.48,lane:0,width:4.2,length:9,power:13},{t:.66,lane:2,width:3.8,length:8.5,power:12.5},{t:.82,lane:-1.5,width:3.5,length:7.8,power:12}],items:[{t:.08,lane:0},{t:.24,lane:.8},{t:.42,lane:-.8},{t:.6,lane:.5},{t:.78,lane:-.5},{t:.94,lane:0}],mountainField:{seedOffset:61738,boundsInset:18,defaultMinTrackDist:82,maxAttempts:40,minNormalY:.6,maxRelief:15,reliefSampleScale:.85,viewClearanceScale:1.45,sightlineScale:.82,minSpacingScale:1.35,belts:[{mode:"edge",count:7,inset:25,band:55,minScale:11,maxScale:17.5,minTrackDist:95,footprintScale:1.7,minSpacingScale:1.4},{mode:"ring",count:6,radius:180,spread:35,minScale:10.5,maxScale:15.5,minTrackDist:88,footprintScale:1.6,minSpacingScale:1.3}]},heightFn:(n,t)=>{const e=Math.floor((t+450)/100)*12,i=(t+450)%100*.05,o=Math.sin(n*.025)*8.5+Math.cos(t*.022)*9.2,r=35*Math.exp(-(n*n+t*t)/6500),a=-22*Math.exp(-((n+200)*(n+200)+(t-100)*(t-100))/4200);return e+i+o+r+a},palette:{low:new $t(3951152),high:new $t(9084024),accent:new $t(5664324),route:5200965,boundary:15120384,ramp:12556544,boost:10092339}},fh={id:"debug",name:"Debug Flat",desc:"调试平原：包含所有模型与道具",loop:!1,seed:3735928559,baseAiSpeed:22,routeHalfWidth:8,routeLayers:[0],treeCount:0,rockCount:0,propCount:0,hazardCount:0,bounds:{minX:-120,maxX:120,minZ:-20,maxZ:1040},clearColor:8031385,fogColor:8031385,ambient:8947848,sun:16774368,sunPitch:.9,sunYaw:.8,palette:{low:new $t(6320224),high:new $t(9474192),accent:new $t(6978922),route:4212816,boundary:8934707,ramp:12861472,boost:3202528},ramps:[],boosts:[],items:[],path:[[0,0],[0,200],[0,400],[0,600],[0,800],[0,1e3]],heightFn:(n,t)=>0},ph=new Gt,Vn=new Gt,X_=new z,Wc=[k_,B_,O_,z_,H_,V_,G_,W_],_u=[...Wc,fh];function mh(n){n.pathPoints=n.path.map(([i,o])=>new z(i,n.heightFn(i,o)+Mi,o));const t=n.loop?n.pathPoints.length:n.pathPoints.length-1;n.segmentLengths=[],n.cumulative=[0];let e=0;for(let i=0;i<t;i+=1){const o=n.pathPoints[i],r=n.pathPoints[i+1]??n.pathPoints[0],a=Math.hypot(r.x-o.x,r.z-o.z);n.segmentLengths.push(a),e+=a,n.cumulative.push(e)}n.totalLength=e}function Ke(n,t){let e=t;n.loop?(e%=n.totalLength,e<0&&(e+=n.totalLength)):e=Tt.clamp(e,0,n.totalLength);let i=n.segmentLengths.length-1;for(let f=0;f<n.segmentLengths.length;f+=1)if(n.cumulative[f+1]>=e){i=f;break}const o=n.cumulative[i],r=n.segmentLengths[i],a=r<=.001?0:(e-o)/r,c=n.pathPoints[i],l=n.pathPoints[i+1]??n.pathPoints[0],u=Tt.lerp(c.x,l.x,a),m=Tt.lerp(c.z,l.z,a),g=new z(u,n.heightFn(u,m)+Mi,m),x=new z(l.x-c.x,0,l.z-c.z);return x.lengthSq()<1e-4&&x.set(0,0,1),x.normalize(),{s:e,point:g,forward:x,segmentIndex:i,t:a}}function si(n,t,e){let i=Number.POSITIVE_INFINITY,o=0;for(let r=0;r<n.segmentLengths.length;r+=1){const a=n.pathPoints[r],c=n.pathPoints[r+1]??n.pathPoints[0];ph.set(a.x,a.z),Vn.set(c.x-a.x,c.z-a.z);const l=Vn.lengthSq();if(l<=1e-4)continue;const u=t-a.x,m=e-a.z,g=Tt.clamp((u*Vn.x+m*Vn.y)/l,0,1),x=a.x+Vn.x*g,f=a.z+Vn.y*g,v=zn(t,e,x,f);v<i&&(i=v,o=n.cumulative[r]+n.segmentLengths[r]*g)}return n.loop||(o=Tt.clamp(o,0,n.totalLength)),{s:o,distSq:i}}function vu(n,t,e,i,o=6){if(!Number.isFinite(i))return si(n,t,e);const r=n.segmentLengths.length;if(r<=0)return si(n,t,e);const a=Math.max(1,Math.floor(o));if(a*2+1>=r)return si(n,t,e);let c=i;n.loop?(c%=n.totalLength,c<0&&(c+=n.totalLength)):c=Tt.clamp(c,0,n.totalLength);let l=r-1;for(let g=0;g<r;g+=1)if(n.cumulative[g+1]>=c){l=g;break}let u=Number.POSITIVE_INFINITY,m=c;for(let g=-a;g<=a;g+=1){let x=l+g;if(n.loop)x=(x%r+r)%r;else if(x<0||x>=r)continue;const f=n.pathPoints[x],v=n.pathPoints[x+1]??n.pathPoints[0];ph.set(f.x,f.z),Vn.set(v.x-f.x,v.z-f.z);const A=Vn.lengthSq();if(A<=1e-4)continue;const M=t-f.x,d=e-f.z,h=Tt.clamp((M*Vn.x+d*Vn.y)/A,0,1),p=f.x+Vn.x*h,_=f.z+Vn.y*h,T=zn(t,e,p,_);T<u&&(u=T,m=n.cumulative[x]+n.segmentLengths[x]*h)}return Number.isFinite(u)?(n.loop||(m=Tt.clamp(m,0,n.totalLength)),{s:m,distSq:u}):si(n,t,e)}function mn(n,t,e){return Math.sqrt(si(n,t,e).distSq)}function fs(n,t,e){let i=e-t;if(n.loop){const o=n.totalLength*.5;i>o&&(i-=n.totalLength),i<-o&&(i+=n.totalLength)}return i}function Ge(n,t,e){const o=n.heightFn(t-.9,e),r=n.heightFn(t+.9,e),a=n.heightFn(t,e-.9),c=n.heightFn(t,e+.9);return X_.set(o-r,2*.9,a-c).normalize().clone()}function yn(n){return new z(Math.sin(n),0,Math.cos(n))}function wi(n){return Math.hypot(n.x,n.z)}function Fr(n,t){let e=t-n;for(;e>Math.PI;)e-=Math.PI*2;for(;e<-Math.PI;)e+=Math.PI*2;return e}function zn(n,t,e,i){const o=n-e,r=t-i;return o*o+r*r}function Fe(n,t,e,i){return Tt.lerp(n,t,1-Math.exp(-e*i))}function Or(n){let t=n>>>0;return()=>(t=t*1664525+1013904223>>>0,t/4294967296)}for(const n of Wc)mh(n);mh(fh);function q_(){return{forward:!1,brake:!1,left:!1,right:!1,punchQueued:!1,itemQueued:!1,respawnQueued:!1,debugF4:!1,debug1:!1,debug2:!1,debug3:!1,debug4:!1,debug5:!1,debug6:!1,debug7:!1,debug8:!1,debug9:!1,debug0:!1,debugT:!1,debugY:!1,debugU:!1}}function Io(n){n.forward=!1,n.brake=!1,n.left=!1,n.right=!1,n.punchQueued=!1,n.itemQueued=!1,n.respawnQueued=!1,n.debugF4=!1,n.debug1=!1,n.debug2=!1,n.debug3=!1,n.debug4=!1,n.debug5=!1,n.debug6=!1,n.debug7=!1,n.debug8=!1,n.debug9=!1,n.debug0=!1,n.debugT=!1,n.debugY=!1,n.debugU=!1}function Y_({input:n,ensureAudio:t,getState:e,ui:i,openMenu:o,togglePause:r}){window.addEventListener("keydown",a=>{if(t(),(a.code==="KeyW"||a.code==="ArrowUp")&&(n.forward=!0),(a.code==="KeyS"||a.code==="ArrowDown")&&(n.brake=!0),(a.code==="KeyA"||a.code==="ArrowLeft")&&(n.left=!0),(a.code==="KeyD"||a.code==="ArrowRight")&&(n.right=!0),a.code==="KeyF"&&!a.repeat&&(n.punchQueued=!0),a.code==="KeyQ"&&!a.repeat&&(n.itemQueued=!0),a.code==="KeyR"&&!a.repeat&&(n.respawnQueued=!0),a.code==="F4"&&!a.repeat&&(n.debugF4=!0),a.code==="Digit1"&&!a.repeat&&(n.debug1=!0),a.code==="Digit2"&&!a.repeat&&(n.debug2=!0),a.code==="Digit3"&&!a.repeat&&(n.debug3=!0),a.code==="Digit4"&&!a.repeat&&(n.debug4=!0),a.code==="Digit5"&&!a.repeat&&(n.debug5=!0),a.code==="Digit6"&&!a.repeat&&(n.debug6=!0),a.code==="Digit7"&&!a.repeat&&(n.debug7=!0),a.code==="Digit8"&&!a.repeat&&(n.debug8=!0),a.code==="Digit9"&&!a.repeat&&(n.debug9=!0),a.code==="Digit0"&&!a.repeat&&(n.debug0=!0),a.code==="KeyT"&&!a.repeat&&(n.debugT=!0),a.code==="KeyY"&&!a.repeat&&(n.debugY=!0),a.code==="KeyU"&&!a.repeat&&(n.debugU=!0),a.code==="Escape"&&!a.repeat){const c=e();c===ce.MENU?i.settingsPanel.classList.toggle("hidden"):c===ce.READY||c===ce.RACING||c===ce.PAUSED?r():o()}}),window.addEventListener("keyup",a=>{(a.code==="KeyW"||a.code==="ArrowUp")&&(n.forward=!1),(a.code==="KeyS"||a.code==="ArrowDown")&&(n.brake=!1),(a.code==="KeyA"||a.code==="ArrowLeft")&&(n.left=!1),(a.code==="KeyD"||a.code==="ArrowRight")&&(n.right=!1)})}const gh="bike_mountain_rush_settings_v1",xh=new Set(["low","medium","high"]),Z_="KYLE WONG'S GAME",$_=22,K_=1650;function Oo(n,t,e,i){const o=Number(n);return Number.isFinite(o)?Tt.clamp(o,t,e):i}function J_(n){try{const t=localStorage.getItem(gh);if(!t)return;const e=JSON.parse(t);if(!e||typeof e!="object")return;n.volume=Oo(e.volume,0,1,n.volume),n.sensitivity=Oo(e.sensitivity,.6,1.6,n.sensitivity),n.fov=Oo(e.fov,55,95,n.fov),n.quality=xh.has(e.quality)?e.quality:n.quality,n.shake=e.shake!==!1,n.blur=e.blur===!0}catch{}}function j_(n){try{const t={volume:n.volume,sensitivity:n.sensitivity,fov:n.fov,quality:n.quality,shake:n.shake,blur:n.blur};localStorage.setItem(gh,JSON.stringify(t))}catch{}}function Q_(){return{menuScreen:document.getElementById("menu-screen"),menuHeroTitle:document.getElementById("menu-hero-title"),menuHeroLetters:document.getElementById("menu-hero-letters"),levelGrid:document.getElementById("level-grid"),startBtn:document.getElementById("start-btn"),settingsBtn:document.getElementById("settings-btn"),settingsPanel:document.getElementById("settings-panel"),settingVolume:document.getElementById("setting-volume"),settingVolumeValue:document.getElementById("setting-volume-value"),settingSensitivity:document.getElementById("setting-sensitivity"),settingSensitivityValue:document.getElementById("setting-sensitivity-value"),settingFov:document.getElementById("setting-fov"),settingFovValue:document.getElementById("setting-fov-value"),settingQuality:document.getElementById("setting-quality"),settingShake:document.getElementById("setting-shake"),settingBlur:document.getElementById("setting-blur"),hud:document.getElementById("hud"),speed:document.getElementById("speed"),rank:document.getElementById("rank"),checkpoint:document.getElementById("checkpoint"),punchCd:document.getElementById("punch-cd"),itemSlot:document.getElementById("item-slot"),raceTime:document.getElementById("race-time"),countdown:document.getElementById("countdown"),raceMessage:document.getElementById("race-message"),menuBtn:document.getElementById("menu-btn"),pauseScreen:document.getElementById("pause-screen"),pauseResumeBtn:document.getElementById("pause-resume-btn"),pauseMenuBtn:document.getElementById("pause-menu-btn"),pauseSettingVolume:document.getElementById("pause-setting-volume"),pauseSettingVolumeValue:document.getElementById("pause-setting-volume-value"),pauseSettingSensitivity:document.getElementById("pause-setting-sensitivity"),pauseSettingSensitivityValue:document.getElementById("pause-setting-sensitivity-value"),pauseSettingFov:document.getElementById("pause-setting-fov"),pauseSettingFovValue:document.getElementById("pause-setting-fov-value"),pauseSettingQuality:document.getElementById("pause-setting-quality"),pauseSettingShake:document.getElementById("pause-setting-shake"),pauseSettingBlur:document.getElementById("pause-setting-blur"),minimapCanvas:document.getElementById("minimap-canvas"),resultScreen:document.getElementById("result-screen"),resultSummary:document.getElementById("result-summary"),resultTime:document.getElementById("result-time"),resultHits:document.getElementById("result-hits"),resultTopSpeed:document.getElementById("result-top-speed"),resultList:document.getElementById("result-list"),resultRetryBtn:document.getElementById("result-retry-btn"),resultMenuBtn:document.getElementById("result-menu-btn")}}function tv({settings:n,levels:t,getSelectedLevelId:e,setSelectedLevelId:i,onLoadMenuPreview:o,onStartRace:r,onOpenMenu:a,onTogglePause:c,ensureAudio:l}){J_(n);const u=Q_(),m={loading:!1,menuVisibleAt:0,lastBlastLevelId:null,titleBlastTimer:null,titleBlastLoopTimer:null,applySettingsNow:()=>{},minimap:{levelId:null,minX:0,maxX:1,minZ:0,maxZ:1,width:1,depth:1,points:[]}};function g(D){m.loading=D;for(const N of[u.startBtn,u.menuBtn,u.pauseResumeBtn,u.pauseMenuBtn,u.resultRetryBtn,u.resultMenuBtn])N&&(N.disabled=D,N.style.pointerEvents=D?"none":"auto",N.style.opacity=D?"0.62":"1")}function x(){const D=e();u.levelGrid.querySelectorAll(".level-card").forEach(N=>{N.classList.toggle("selected",N.dataset.levelId===D)})}function f(){const D=`${Math.round(n.volume*100)}%`,N=`${n.sensitivity.toFixed(2)}x`,H=String(Math.round(n.fov));for(const X of[u.settingVolume,u.pauseSettingVolume])X&&(X.value=String(n.volume));for(const X of[u.settingVolumeValue,u.pauseSettingVolumeValue])X&&(X.textContent=D);for(const X of[u.settingSensitivity,u.pauseSettingSensitivity])X&&(X.value=String(n.sensitivity));for(const X of[u.settingSensitivityValue,u.pauseSettingSensitivityValue])X&&(X.textContent=N);for(const X of[u.settingFov,u.pauseSettingFov])X&&(X.value=String(Math.round(n.fov)));for(const X of[u.settingFovValue,u.pauseSettingFovValue])X&&(X.textContent=H);for(const X of[u.settingQuality,u.pauseSettingQuality])X&&(X.value=n.quality);for(const X of[u.settingShake,u.pauseSettingShake])X&&(X.checked=n.shake);for(const X of[u.settingBlur,u.pauseSettingBlur])X&&(X.checked=n.blur)}function v({applyRenderer:D=!1,refreshPreview:N=!1}={}){j_(n),D&&m.applySettingsNow(),N&&u.menuScreen.classList.contains("visible")&&o(e())}function A(D,N,H){const X=V=>{H(Number(V.value)),D&&V!==D&&(D.value=V.value),N&&V!==N&&(N.value=V.value),f()};D?.addEventListener("input",()=>X(D)),N?.addEventListener("input",()=>X(N))}function M(D,N,H){const X=V=>{H(!!V.checked),D&&V!==D&&(D.checked=V.checked),N&&V!==N&&(N.checked=V.checked),f()};D?.addEventListener("change",()=>X(D)),N?.addEventListener("change",()=>X(N))}function d(D,N,H){const X=V=>{H(V.value),D&&V!==D&&(D.value=V.value),N&&V!==N&&(N.value=V.value),f()};D?.addEventListener("change",()=>X(D)),N?.addEventListener("change",()=>X(N))}function h(D,{force:N=!1}={}){if(!u.menuHeroTitle||!u.menuHeroLetters||!N&&typeof D=="string"&&m.lastBlastLevelId===D)return;typeof D=="string"&&(m.lastBlastLevelId=D),u.menuHeroLetters.innerHTML="";let H=0;const X=Z_.split(" ");for(let V=0;V<X.length;V+=1){const Z=X[V],$=document.createElement("span");$.className="blast-word";for(const xt of Z){const yt=document.createElement("span");yt.className="blast-letter",yt.textContent=xt;const j=H*.055+Math.random()*.02;yt.style.setProperty("--delay",`${j.toFixed(3)}s`),yt.style.setProperty("--blast-x",`${Tt.randFloatSpread(260).toFixed(1)}px`),yt.style.setProperty("--blast-y",`${Tt.randFloatSpread(190).toFixed(1)}px`),yt.style.setProperty("--blast-rot",`${Tt.randFloatSpread(320).toFixed(1)}deg`),$.appendChild(yt),H+=1}if(u.menuHeroLetters.appendChild($),!(V>=X.length-1)){const xt=document.createElement("span");xt.className="blast-gap",xt.textContent=" ",u.menuHeroLetters.appendChild(xt)}}for(let V=0;V<$_;V+=1){const Z=document.createElement("span");Z.className="blast-spark",Z.style.setProperty("--spark-size",`${Tt.randFloat(4,11).toFixed(1)}px`),Z.style.setProperty("--spark-x",`${Tt.randFloatSpread(320).toFixed(1)}px`),Z.style.setProperty("--spark-y",`${Tt.randFloatSpread(150).toFixed(1)}px`),Z.style.setProperty("--spark-delay",`${Tt.randFloat(0,.42).toFixed(3)}s`),Z.style.setProperty("--spark-hue",`${Tt.randInt(16,340)}deg`),u.menuHeroLetters.appendChild(Z)}m.titleBlastTimer&&(window.clearTimeout(m.titleBlastTimer),m.titleBlastTimer=null),u.menuHeroTitle.classList.remove("is-blasting"),u.menuHeroTitle.offsetWidth,u.menuHeroTitle.classList.add("is-blasting"),m.titleBlastTimer=window.setTimeout(()=>{m.titleBlastTimer=null},40)}function p(D){if(D){if(m.titleBlastLoopTimer)return;m.titleBlastLoopTimer=window.setInterval(()=>{h(e(),{force:!0})},K_);return}m.titleBlastLoopTimer&&(window.clearInterval(m.titleBlastLoopTimer),m.titleBlastLoopTimer=null)}function _(D){m.applySettingsNow=D,u.levelGrid.innerHTML="";for(const N of t){const H=document.createElement("button");H.className="level-card",H.dataset.levelId=N.id,H.type="button",H.innerHTML=`<p class="level-name">${N.name}</p><p class="level-meta">${N.desc}</p>`,H.addEventListener("click",()=>{i(N.id),x(),o(N.id)}),u.levelGrid.appendChild(H)}x(),u.startBtn.addEventListener("click",()=>{m.loading||performance.now()-m.menuVisibleAt<650||(l(),g(!0),Promise.resolve(r(e())).finally(()=>g(!1)))}),u.settingsBtn.addEventListener("click",N=>{N.preventDefault(),N.stopPropagation(),u.settingsPanel.classList.toggle("hidden")}),u.menuBtn.addEventListener("click",()=>{m.loading||c()}),u.pauseResumeBtn?.addEventListener("click",()=>{m.loading||c()}),u.pauseMenuBtn?.addEventListener("click",()=>{m.loading||(g(!0),Promise.resolve(a()).finally(()=>g(!1)))}),u.resultRetryBtn.addEventListener("click",()=>{m.loading||(l(),g(!0),Promise.resolve(r(e())).finally(()=>g(!1)))}),u.resultMenuBtn.addEventListener("click",()=>{m.loading||(g(!0),Promise.resolve(a()).finally(()=>g(!1)))}),A(u.settingVolume,u.pauseSettingVolume,N=>{n.volume=Oo(N,0,1,n.volume),v({applyRenderer:!0})}),A(u.settingSensitivity,u.pauseSettingSensitivity,N=>{n.sensitivity=Oo(N,.6,1.6,n.sensitivity),v()}),A(u.settingFov,u.pauseSettingFov,N=>{n.fov=Math.round(Oo(N,55,95,n.fov)),v({applyRenderer:!0})}),d(u.settingQuality,u.pauseSettingQuality,N=>{n.quality=xh.has(N)?N:n.quality,v({applyRenderer:!0,refreshPreview:!0})}),M(u.settingShake,u.pauseSettingShake,N=>{n.shake=N,v()}),M(u.settingBlur,u.pauseSettingBlur,N=>{n.blur=N,v()}),f(),h(e(),{force:!0}),p(!0)}function T({camera:D,renderer:N,scene:H,audio:X,initial:V=!1}){if(D.fov=n.fov,D.updateProjectionMatrix(),n.quality==="low"?(N.shadowMap.enabled=!1,N.setPixelRatio(Math.min(window.devicePixelRatio,1.1))):n.quality==="medium"?(N.shadowMap.enabled=!0,N.setPixelRatio(Math.min(window.devicePixelRatio,1.5))):(N.shadowMap.enabled=!0,N.setPixelRatio(Math.min(window.devicePixelRatio,2))),!V&&H?.userData?.sun){const Z=n.quality==="high"?2048:n.quality==="medium"?1536:1024;H.userData.sun.shadow.mapSize.set(Z,Z),H.userData.sun.shadow.needsUpdate=!0}X.master&&X.master.gain.setTargetAtTime(n.volume,X.ctx.currentTime,.05)}function w(D){D&&(m.menuVisibleAt=performance.now()),p(D),D&&h(e(),{force:!0}),u.menuScreen.classList.toggle("visible",D),u.menuScreen.classList.toggle("hidden",!D),u.menuScreen.style.pointerEvents=D?"auto":"none",u.hud.classList.toggle("visible",!D),u.hud.classList.toggle("hidden",D),D&&R(!1)}function R(D){u.pauseScreen&&(u.pauseScreen.classList.toggle("visible",D),u.pauseScreen.classList.toggle("hidden",!D),u.pauseScreen.style.pointerEvents=D?"auto":"none",D&&u.settingsPanel.classList.add("hidden"))}function C(){m.menuVisibleAt=performance.now()}function S(D){u.resultScreen.classList.toggle("visible",D),u.resultScreen.classList.toggle("hidden",!D),u.resultScreen.style.pointerEvents=D?"auto":"none",D&&R(!1)}function y(D,N,H=0){u.raceMessage.textContent=N,D.messageTimer=H}function P(D){if(!D||!Array.isArray(D.pathPoints)||D.pathPoints.length===0){m.minimap.levelId=null,m.minimap.points=[];return}let N=Number.POSITIVE_INFINITY,H=Number.NEGATIVE_INFINITY,X=Number.POSITIVE_INFINITY,V=Number.NEGATIVE_INFINITY;for(const $ of D.pathPoints)N=Math.min(N,$.x),H=Math.max(H,$.x),X=Math.min(X,$.z),V=Math.max(V,$.z);const Z=12;N=Math.min(N,D.bounds?.minX??N)-Z,H=Math.max(H,D.bounds?.maxX??H)+Z,X=Math.min(X,D.bounds?.minZ??X)-Z,V=Math.max(V,D.bounds?.maxZ??V)+Z,m.minimap.levelId=D.id,m.minimap.minX=N,m.minimap.maxX=H,m.minimap.minZ=X,m.minimap.maxZ=V,m.minimap.width=Math.max(1,H-N),m.minimap.depth=Math.max(1,V-X),m.minimap.points=D.pathPoints.map($=>({x:$.x,z:$.z}))}function E(D,N,H,X){const V=m.minimap,$=(H-X*2)/Math.max(V.width,V.depth),xt=V.width*$,yt=V.depth*$,j=(H-xt)*.5,ot=(H-yt)*.5;return{x:j+(D-V.minX)*$,y:ot+(V.maxZ-N)*$}}function I(D){const N=u.minimapCanvas;if(!N||!D.activeLevel||!D.player||(m.minimap.levelId!==D.activeLevel.id&&P(D.activeLevel),!m.minimap.points.length))return;const H=N.getContext("2d");if(!H)return;const X=N.width,V=12;H.clearRect(0,0,X,X),H.fillStyle="rgba(6, 10, 14, 0.78)",H.fillRect(0,0,X,X),H.strokeStyle="rgba(255,255,255,0.18)",H.lineWidth=1,H.strokeRect(.5,.5,X-1,X-1);const Z=m.minimap.points,$=Z.length,xt=Math.max(1,D.checkpointMeshes?.length??$),yt=Tt.clamp(D.player.nextCheckpoint??0,0,xt-1),j=(D.activeLevel.loop,Tt.clamp(D.player.checkpoint??-1,-1,xt-1)),ot=D.activeLevel.loop?$:$-1;for(let st=0;st<ot;st+=1){const ht=Z[st],dt=Z[(st+1)%$],Pt=E(ht.x,ht.z,X,V),Ct=E(dt.x,dt.z,X,V),Ot=st<=j;H.strokeStyle=Ot?"rgba(132, 138, 150, 0.86)":"rgba(127, 255, 232, 0.95)",H.lineWidth=Ot?3:3.5,H.beginPath(),H.moveTo(Pt.x,Pt.y),H.lineTo(Ct.x,Ct.y),H.stroke()}const tt=D.checkpointMeshes?.[yt]?.point??Z[Math.min(yt,$-1)];if(!tt)return;const _t=E(tt.x,tt.z,X,V),mt=.68+(Math.sin(D.simTime*7.4)*.5+.5)*.32;H.fillStyle=`rgba(255, 210, 98, ${mt.toFixed(3)})`,H.beginPath(),H.arc(_t.x,_t.y,6.5+mt*3,0,Math.PI*2),H.fill();const rt=E(D.player.position.x,D.player.position.z,X,V),Rt=Math.sin(D.player.heading),St=Math.cos(D.player.heading),G=E(D.player.position.x+Rt*5,D.player.position.z+St*5,X,V),at=Math.atan2(G.y-rt.y,G.x-rt.x);H.save(),H.translate(rt.x,rt.y),H.rotate(at),H.fillStyle="rgba(255, 106, 26, 0.96)",H.beginPath(),H.moveTo(8,0),H.lineTo(-5.5,4.2),H.lineTo(-5.5,-4.2),H.closePath(),H.fill(),H.restore()}function F(D,N){if(!D.player||D.state===ce.MENU){D.state===ce.MENU&&(D.renderer.domElement.style.filter="none");return}const H=Math.round(Math.hypot(D.player.velocity.x,D.player.velocity.z)*3.6);u.speed.textContent=String(H);const X=N();u.rank.textContent=`${Math.max(1,X.findIndex($=>$===D.player)+1)}/${D.racers.length}`;const V=Math.max(1,D.checkpointMeshes?.length??D.activeLevel.pathPoints.length),Z=D.activeLevel.loop?Math.min(V,D.player.lap*V+D.player.checkpoint+1):Math.min(D.player.checkpoint+1,V);u.checkpoint.textContent=`${Z}/${V}`,u.punchCd.textContent=Math.max(0,D.player.punchCooldown).toFixed(1),u.itemSlot.textContent=D.player.itemType?Tc(D.player.itemType):"无",u.raceTime.textContent=Da(D.raceElapsed),D.state===ce.FINISHED&&(u.countdown.textContent="FINISH"),I(D),D.renderer.domElement.style.filter=n.blur&&D.state!==ce.PAUSED?`blur(${(Tt.clamp(H/190,0,1)*1.3).toFixed(2)}px)`:"none"}function L(D,N){D.resultShown=!0,S(!0);const H=N(),X=Math.max(1,H.findIndex(V=>V===D.player)+1);u.resultSummary.textContent=`最终名次：第 ${X} / ${D.racers.length}`,u.resultTime.textContent=Da(D.raceFinishedAt||D.raceElapsed),u.resultHits.textContent=String(D.player?.hits??0),u.resultTopSpeed.textContent=`${Math.round(D.player?.topSpeedReached??0)} km/h`,u.resultList.innerHTML="";for(let V=0;V<H.length;V+=1){const Z=H[V],$=document.createElement("div");$.className="result-row";const xt=Z.finishTime!=null?Da(Z.finishTime):"未完赛";$.innerHTML=`<span class="pos">#${V+1}</span><span class="name">${Z.name}${Z.profile?` (${Z.profile.key})`:""}</span><span class="time">${xt}</span>`,u.resultList.appendChild($)}}return{ui:u,setupUi:_,applySettings:T,refreshLevelSelection:x,setUiLoading:g,setMenuVisible:w,setPauseVisible:R,markMenuReady:C,triggerMenuTitleBlast:h,setResultVisible:S,setRaceMessage:y,updateHud:F,showResultPanel:L}}function xi(n,t,e,i,o){o.copy(n),o.lengthSq()<1e-4&&o.set(0,0,1),o.normalize(),i.copy(t),i.lengthSq()<1e-4&&i.copy(Ae),i.normalize(),i.addScaledVector(o,-i.dot(o)),i.lengthSq()<1e-4&&(i.set(1,0,0),i.addScaledVector(o,-i.dot(o))),i.normalize(),e.crossVectors(i,o).normalize(),i.crossVectors(o,e).normalize()}function ev({settings:n}){function t(o,r){if(o.scene.userData.lights)for(const u of o.scene.userData.lights)o.scene.remove(u);o.scene.background=new $t(r.clearColor),o.scene.fog=new kc(r.fogColor,80,n.quality==="low"?520:760);const a=new W0(r.ambient,2172977,.8);a.position.set(0,260,0);const c=new Y0(r.sun,1.08);c.position.set(140,220,90),c.castShadow=o.renderer.shadowMap.enabled;const l=n.quality==="high"?2048:n.quality==="medium"?1536:1024;c.shadow.mapSize.set(l,l),c.shadow.camera.left=-360,c.shadow.camera.right=360,c.shadow.camera.top=360,c.shadow.camera.bottom=-360,o.scene.add(a,c),o.scene.userData.lights=[a,c],o.scene.userData.sun=c}function e(o,r){const a=r.bounds.maxX-r.bounds.minX,c=r.bounds.maxZ-r.bounds.minZ,l=(r.bounds.maxX+r.bounds.minX)*.5,u=(r.bounds.maxZ+r.bounds.minZ)*.5,m=n.quality==="high"?360:n.quality==="medium"?270:190,g=n.quality==="high"?120:n.quality==="medium"?102:95,x=Math.max(1,Math.ceil(m/g)),f=Math.max(1,Math.ceil(m/g)),v=i(m,x),A=i(m,f),M=new Y({vertexColors:!0,roughness:.95,metalness:.05});let d=-a*.5;for(let h=0;h<x;h+=1){const p=v[h],_=a*p/m,T=d+_*.5;let w=-c*.5;for(let R=0;R<f;R+=1){const C=A[R],S=c*C/m,y=w+S*.5,P=new uo(_,S,p,C);P.rotateX(-Math.PI/2);const E=P.attributes.position,I=new Float32Array(E.count*3);for(let L=0;L<E.count;L+=1){const D=E.getX(L)+T+l,N=E.getZ(L)+y+u,H=r.heightFn(D,N);E.setY(L,H);const X=r.heightFn(D+1.2,N)-r.heightFn(D-1.2,N),V=r.heightFn(D,N+1.2)-r.heightFn(D,N-1.2),Z=Math.min(Math.hypot(X,V)*.065,1),$=r.palette.low.clone().lerp(r.palette.high,Tt.clamp((H-20)/160,0,1));$.lerp(r.palette.accent,.18+Z*.38),I[L*3]=$.r,I[L*3+1]=$.g,I[L*3+2]=$.b}P.setAttribute("color",new nn(I,3)),P.computeVertexNormals();const F=new k(P,M);F.position.set(l+T,0,u+y),F.receiveShadow=!0,o.terrainRoot.add(F),w+=S}d+=_}}function i(o,r){const a=Math.floor(o/r),c=o%r,l=new Array(r);for(let u=0;u<r;u+=1)l[u]=a+(u<c?1:0);return l}return{buildLights:t,buildTerrain:e}}function An(n,t){n.obstacles.push({shape:"box",x:t.x,y:t.y,z:t.z,right:t.right.clone(),forward:t.forward.clone(),halfWidth:t.halfWidth,halfLength:t.halfLength,halfHeight:t.halfHeight,crashWeight:t.crashWeight??1.2,type:t.type??"edge"})}function nv({settings:n,modelLibrary:t,tempVec3A:e,tempVec3B:i,tempVec3C:o,tempVec3D:r,tempMat4:a}){function c(f,v){const A=Or(v.seed^43981),M=v.id==="urban8",d=t.createRoadSurfaceMaterial(v.palette.route),h=t.createRoadEdgeMaterial(v.palette.boundary),p=t.createRoadEdgeMaterial(8469026),_=t.createRoadMarkerMaterial(v.palette.boost),T=n.quality==="high"?2.4:n.quality==="medium"?3.1:4.2,w=v.barrierStep??9,R=m(v,T),C=n.quality==="high"?14:n.quality==="medium"?11:8,S=g(v,R,C),y=new k(S,d);y.userData.routeContinuous=!0,y.castShadow=!0,y.receiveShadow=!0,f.routeRoot.add(y);const P=v.routeHalfWidth+1.18;for(const F of[-1,1]){const L=x(R,v.routeHalfWidth*F,P*F,v.loop),D=new k(L,h);D.userData.routeContinuous=!0,D.receiveShadow=!0,D.castShadow=!0,f.routeRoot.add(D)}const E=v.routeHalfWidth+1.02;if(!M)for(const F of[-1,1]){const L=R.map(X=>X.center.clone().addScaledVector(X.right,E*F).addScaledVector(X.up,.78)),D=new vc(L,v.loop,"centripetal",.5),N=new Vc(D,Math.max(80,L.length*2),.09,12,v.loop),H=new k(N,p);H.userData.routeContinuous=!0,H.castShadow=!0,H.receiveShadow=!0,f.routeRoot.add(H)}if(!M)for(let D=0;D<v.totalLength;D+=8){const N=Ke(v,D),H=r.copy(N.forward),X=i,V=o;xi(H,Ge(v,N.point.x,N.point.z),X,V,H);for(const $ of[-1,1]){const xt=N.point.clone().addScaledVector(X,E*$),yt=1.34,j=new k(new At(.13,.16,yt,10),h);j.position.set(xt.x,v.heightFn(xt.x,xt.z)+yt*.5,xt.z),j.castShadow=!0,j.receiveShadow=!0,f.routeRoot.add(j)}if((v.loop||D>90&&D<v.totalLength-90)&&Math.floor(D/14)!==Math.floor((D-8)/14))for(const $ of[-1,1]){const xt=N.point.clone().addScaledVector(X,E*$);f.obstacles.push({shape:"sphere",x:xt.x,y:v.heightFn(xt.x,xt.z)+.8,z:xt.z,radius:.4,height:.8,crashWeight:1.16,type:"edge"})}}const I=36;for(let F=0;F<v.totalLength;F+=I){const L=Ke(v,F),D=r.copy(L.forward),N=e,H=i;xi(D,Ge(v,L.point.x,L.point.z),N,H,D);const X=new k(new Q(.36,.05,5.8),_);X.position.copy(L.point).addScaledVector(H,.24),a.makeBasis(N,H,D),X.quaternion.setFromRotationMatrix(a),X.receiveShadow=!0,f.routeRoot.add(X)}if(M&&l(f,v,R),!M)for(let F=w;F<v.totalLength;F+=w){const L=Ke(v,F),D=r.copy(L.forward),N=i,H=o;xi(D,Ge(v,L.point.x,L.point.z),N,H,D),u(f,v,L.point,D,N,h,A)}}function l(f,v,A){const M=new Y({color:9409951,roughness:.82,metalness:.12}),d=new Y({color:15054154,roughness:.58,metalness:.08}),h=v.routeHalfWidth+1.2,p=v.routeHalfWidth+2.24,_=v.routeHalfWidth+1.88,T=v.routeHalfWidth+2.14;for(const P of[-1,1]){const E=x(A,h*P,p*P,v.loop),I=new k(E,M);I.userData.routeContinuous=!0,I.castShadow=!0,I.receiveShadow=!0,f.routeRoot.add(I);const F=x(A,_*P,T*P,v.loop),L=new k(F,d);L.userData.routeContinuous=!0,L.castShadow=!1,L.receiveShadow=!0,f.routeRoot.add(L)}const w=18,R=v.routeHalfWidth+1.82,C=.18,S=1.18,y=.42;for(let P=0;P<v.totalLength;P+=w){const E=Ke(v,P),I=e.copy(E.forward),F=i,L=o;xi(I,Ge(v,E.point.x,E.point.z),F,L,I);for(const D of[-1,1]){const N=E.point.clone().addScaledVector(F,R*D).addScaledVector(L,y+.06);iv(N.x,N.z,236,172)&&!(Math.abs(N.x)>116||Math.abs(N.z)>92)||Math.abs(N.x)<64&&Math.abs(N.z)<58||An(f,{x:N.x,y:N.y,z:N.z,right:F,forward:I,halfWidth:C,halfLength:S,halfHeight:y,crashWeight:1.14,type:"edge"})}}}function u(f,v,A,M,d,h,p){const _=v.routeHalfWidth+1.45,T=v.barrierDensity??.5;for(const w of[-1,1]){if(p()>T)continue;let R,C,S,y=null;if(p()<.4){const F=2.4+p()*.8;R=new k(new Q(1.6,F,2.2),h),C=1,S=F,y={halfWidth:.82,halfLength:1.12,halfHeight:F*.54}}else{const F=.9+p()*.9;R=t.createRockModel(F,v.id==="serpent",p),C=1.2*F,S=2.4*F}const P=_+C*1.08+.7+p()*1.15,E=e.copy(A).addScaledVector(d,P*w);if(mn(v,E.x,E.z)<v.routeHalfWidth+C*1.2+.4)continue;const I=v.heightFn(E.x,E.z);R.position.set(E.x,I+S*.5,E.z),R.castShadow=!0,R.receiveShadow=!0,f.routeRoot.add(R),y?An(f,{x:R.position.x,y:R.position.y,z:R.position.z,right:d,forward:M,...y,crashWeight:1.4,type:"barrier"}):f.obstacles.push({shape:"sphere",x:R.position.x,z:R.position.z,y:R.position.y,radius:C,height:S*.58,crashWeight:1.4,type:"barrier"})}}function m(f,v){const A=f.loop,M=[];for(let T=0;T<=f.totalLength;T+=v){const w=Ke(f,T);M.push(w.point.clone())}A&&M.length>1&&M.pop();const d=new vc(M,A,"centripetal",.55),h=Math.max(120,Math.round(f.totalLength/Math.max(1.8,v*.8))),p=[],_=A?h:h+1;for(let T=0;T<_;T+=1){const w=T/h,R=d.getPoint(w),C=new z(R.x,f.heightFn(R.x,R.z)+.08,R.z),S=d.getTangent(w);S.lengthSq()<1e-4&&S.set(0,0,1),S.normalize();const y=new z,P=new z,E=S.clone();xi(E,Ge(f,C.x,C.z),y,P,E),p.push({center:C,right:y,up:P,forward:E,s:T/h*f.totalLength})}return p}function g(f,v,A){const M=v.length,d=A+1,h=new Float32Array(M*d*3),p=new Float32Array(M*d*2),_=new Float32Array(M);_[0]=0;for(let P=1;P<M;P+=1){const E=v[P-1].center,I=v[P].center;_[P]=_[P-1]+E.distanceTo(I)}let T=0,w=0;for(let P=0;P<M;P+=1){const E=v[P],I=_[P]*.16;for(let F=0;F<d;F+=1){const L=F/A,D=Tt.lerp(-f.routeHalfWidth,f.routeHalfWidth,L),H=(1-Math.pow(Math.abs(D)/Math.max(.01,f.routeHalfWidth),1.72))*.16,X=Math.pow(Math.abs(D)/Math.max(.01,f.routeHalfWidth),2.1)*-.06,V=E.center.clone().addScaledVector(E.right,D).addScaledVector(E.up,H+X+.04);h[T]=V.x,h[T+1]=V.y,h[T+2]=V.z,T+=3,p[w]=L*2.2,p[w+1]=I,w+=2}}const R=f.loop?M:M-1,C=new Uint32Array(R*A*6);let S=0;for(let P=0;P<R;P+=1){const E=(P+1)%M;for(let I=0;I<A;I+=1){const F=P*d+I,L=P*d+I+1,D=E*d+I,N=E*d+I+1;C[S]=F,C[S+1]=D,C[S+2]=L,C[S+3]=L,C[S+4]=D,C[S+5]=N,S+=6}}const y=new Ye;return y.setAttribute("position",new nn(h,3)),y.setAttribute("uv",new nn(p,2)),y.setIndex(new nn(C,1)),y.computeVertexNormals(),y}function x(f,v,A,M=!1){const d=f.length,h=2,p=new Float32Array(d*h*3),_=new Float32Array(d*h*2),T=new Float32Array(d);T[0]=0;for(let S=1;S<d;S+=1)T[S]=T[S-1]+f[S-1].center.distanceTo(f[S].center);for(let S=0;S<d;S+=1){const y=f[S],P=y.center.clone().addScaledVector(y.right,v).addScaledVector(y.up,-.04),E=y.center.clone().addScaledVector(y.right,A).addScaledVector(y.up,-.32),I=S*6;p[I]=P.x,p[I+1]=P.y,p[I+2]=P.z,p[I+3]=E.x,p[I+4]=E.y,p[I+5]=E.z;const F=S*4;_[F]=0,_[F+1]=T[S]*.1,_[F+2]=1,_[F+3]=T[S]*.1}const w=M?d:d-1,R=new Uint32Array(w*6);for(let S=0;S<w;S+=1){const y=(S+1)%d,P=S*2,E=P+1,I=y*2,F=I+1,L=S*6;R[L]=P,R[L+1]=I,R[L+2]=E,R[L+3]=E,R[L+4]=I,R[L+5]=F}const C=new Ye;return C.setAttribute("position",new nn(p,3)),C.setAttribute("uv",new nn(_,2)),C.setIndex(new nn(R,1)),C.computeVertexNormals(),C}return{buildRoute:c}}function iv(n,t,e=132,i=96){return Math.abs(n)<=e&&Math.abs(t)<=i}function ov(n,t){const e=t.mountainField;if(!e?.belts?.length)return;const i=Or(t.seed^(e.seedOffset??20978)),o=t.bounds.minX+(e.boundsInset??12),r=t.bounds.maxX-(e.boundsInset??12),a=t.bounds.minZ+(e.boundsInset??12),c=t.bounds.maxZ-(e.boundsInset??12),l=(t.bounds.minX+t.bounds.maxX)*.5,u=(t.bounds.minZ+t.bounds.maxZ)*.5,m=[],g=t.id==="serpent";for(const x of e.belts){const f=x.count??0;for(let v=0;v<f;v+=1){const A=x.maxAttempts??e.maxAttempts??28;for(let M=0;M<A;M+=1){const d=sv(t,x,i,l,u,o,r,a,c);if(!d)continue;const h=d.x,p=d.z;if(h<o||h>r||p<a||p>c)continue;const _=x.minScale??e.minScale??8,T=x.maxScale??e.maxScale??18,w=x.scaleBias??1.15,R=Tt.lerp(_,T,Math.pow(i(),w)),C=x.footprintScale??e.footprintScale??1.62,S=R*C,y=x.minTrackDist??e.defaultMinTrackDist??t.routeHalfWidth+12,P=R*(x.viewClearanceScale??e.viewClearanceScale??.72),E=R*(x.sightlineScale??e.sightlineScale??.5);if(mn(t,h,p)<y+S+P+E)continue;const I=S*(x.reliefSampleScale??e.reliefSampleScale??.66),F=x.minNormalY??e.minNormalY??.56,L=x.maxRelief??e.maxRelief??R*.95;if(!rv(t,h,p,I,F,L))continue;let D=!1;const N=x.minSpacingScale??e.minSpacingScale??1.1;for(const V of m){const Z=h-V.x,$=p-V.z,xt=Z*Z+$*$,yt=(S+V.radius)*N;if(xt<yt*yt){D=!0;break}}if(D)continue;const H=cv(R,i,g),X=t.heightFn(h,p);H.group.position.set(h,X-R*.11,p),H.group.rotation.y=i()*Math.PI*2,n.decorRoot.add(H.group),av(n,H,H.group.position,H.group.rotation.y),m.push({x:h,z:p,radius:H.footprintRadius??S*.92});break}}}}function sv(n,t,e,i,o,r,a,c,l){if(t.mode==="ring"){const u=e()*Math.PI*2,m=(t.radius??120)+(e()-.5)*(t.spread??20);return{x:i+Math.cos(u)*m,z:o+Math.sin(u)*m}}if(t.mode==="line"){const u=Tt.lerp(t.zMin??c,t.zMax??l,e())+(e()-.5)*(t.jitterZ??0);return{x:(t.x??i)+(e()-.5)*(t.jitterX??0),z:u}}if(t.mode==="edge"){const u=t.inset??0,m=t.band??68,g=Math.floor(e()*4);return g===0?{x:Tt.lerp(r+u,Math.min(a,r+u+m),e()),z:Tt.lerp(c,l,e())}:g===1?{x:Tt.lerp(Math.max(r,a-u-m),a-u,e()),z:Tt.lerp(c,l,e())}:g===2?{x:Tt.lerp(r,a,e()),z:Tt.lerp(c+u,Math.min(l,c+u+m),e())}:{x:Tt.lerp(r,a,e()),z:Tt.lerp(Math.max(c,l-u-m),l-u,e())}}return{x:Tt.lerp(r,a,e()),z:Tt.lerp(c,l,e())}}function rv(n,t,e,i,o,r){if(Ge(n,t,e).y<o)return!1;let c=n.heightFn(t,e),l=c;const u=8;for(let m=0;m<u;m+=1){const g=m/u*Math.PI*2,x=t+Math.cos(g)*i,f=e+Math.sin(g)*i,v=n.heightFn(x,f);if(v<c&&(c=v),v>l&&(l=v),Ge(n,x,f).y<o*.88)return!1}return l-c<=r}function av(n,t,e,i){const o=new z,r=new z,a=new z;for(const c of t.colliders){o.copy(c.offset),o.applyAxisAngle(Ae,i);const l=e.x+o.x,u=e.y+o.y,m=e.z+o.z;if(c.shape==="box"){const g=i+(c.localYaw??0);r.set(1,0,0).applyAxisAngle(Ae,g),a.set(0,0,1).applyAxisAngle(Ae,g),n.obstacles.push({shape:"box",x:l,y:u,z:m,right:r.clone(),forward:a.clone(),halfWidth:c.halfWidth,halfLength:c.halfLength,halfHeight:c.halfHeight,crashWeight:c.crashWeight??1.72,type:"mountain"});continue}n.obstacles.push({shape:"sphere",x:l,y:u,z:m,radius:c.radius,height:c.height,crashWeight:c.crashWeight??1.72,type:"mountain"})}}function cv(n,t,e){const i=new wt,o=e?new $t(9399371):new $t(6844516),r=e?new $t(12884590):new $t(9410701),a=e?new $t(6308911):new $t(5199953),c=o.clone().lerp(r,.2+t()*.2),l=c.clone().lerp(r,.08+t()*.08),u=c.clone().lerp(a,.22+t()*.18),m=c.clone().lerp(a,.32+t()*.14),g=n*(1.34+t()*.24),x=n*(2.08+t()*.56),f=g*(1.12+t()*.1),v=Math.max(n*1.12,x*.42),A=new k(Mr(g,x,t,1.2),new Y({color:c,roughness:.96,metalness:.01}));A.position.y=x*.5,i.add(A);const M=new k(Mr(g*(.66+t()*.08),x*(.56+t()*.12),t,1.04),new Y({color:l,roughness:.95,metalness:.01}));M.position.y=x*(.56+t()*.06),M.rotation.y=t()*Math.PI*2,i.add(M);const d=new k(Mr(g*(.42+t()*.08),x*(.42+t()*.1),t,.96),new Y({color:u,roughness:.94,metalness:.02}));d.position.y=x*(.83+t()*.06),d.rotation.y=t()*Math.PI*2,i.add(d);const h=new k(lv(f,v,t),new Y({color:m,roughness:.98,metalness:.01}));h.position.y=v*.44,i.add(h);const p=3+Math.floor(t()*2),_=[];for(let T=0;T<p;T+=1){const w=g*(.24+t()*.1),R=x*(.3+t()*.12),C=Mr(w,R,t,.9),S=new k(C,new Y({color:u,roughness:.95,metalness:.01})),y=T/p*Math.PI*2+t()*.65,P=g*(.56+t()*.12);S.position.set(Math.cos(y)*P,R*.42,Math.sin(y)*P),S.rotation.y=t()*Math.PI*2,i.add(S),_.push({offset:S.position.clone(),radius:w,height:R})}return i.traverse(T=>{T.isMesh&&(T.castShadow=!0,T.receiveShadow=!0,T.userData.decorType="mountain")}),{group:i,footprintRadius:f*1.02,colliders:uv(g,x,_,{radius:f,height:v})}}function Mr(n,t,e,i=1){const o=Tt.clamp(Math.round(3+i+e()*.9),3,5),r=new qo(1,o),a=r.attributes.position,c=e()*Math.PI*2,l=e()*Math.PI*2,u=e()*Math.PI*2,m=e()*Math.PI*2,g=e()*Math.PI*2,x=.18+e()*.08,f=.12+e()*.06,v=.06+e()*.04,A=.05+e()*.03,M=.08+e()*.05,d=3.2+e()*2.1,h=5.1+e()*2.4;for(let p=0;p<a.count;p+=1){let _=a.getX(p),T=a.getY(p),w=a.getZ(p);const R=Math.hypot(_,T,w)||1;_/=R,T/=R,w/=R;const C=Tt.clamp((T+1)*.5,0,1),S=Math.atan2(w,_),y=1-Math.pow(C,.8),P=Math.sin(S*d+c+C*2.4)*x+Math.cos(S*h+l-C*2.1)*f,E=Math.sin((_+w)*4.3+u)*v+Math.cos((_-w)*5.6+m)*A,I=Math.sin(S*(1.6+y*1.8)+g+C*1.2)*M*(.32+y*.68),F=Tt.lerp(1.16,.32,Math.pow(C,.86)),L=Math.exp(-Math.pow((C-.44)/.2,2))*.14,D=Tt.clamp(F+L+P*.34+E*.22+I*.2,.24,1.52),N=n*D,H=(P*.24+E*.15+I*.2)*t*(.76-C*.5),X=(C-.5)*t,V=C>.74?Math.pow((C-.74)/.26,1.16)*t*(.1+x*.38):0,Z=C<.14?Math.pow((.14-C)/.14,1.08)*t*.16:0;a.setXYZ(p,_*N,X+H+V-Z,w*N)}return r.computeVertexNormals(),r}function lv(n,t,e){const i=38+Math.floor(e()*10),o=13+Math.floor(e()*5),r=new At(n*.76,n,t,i,o,!0),a=r.attributes.position,c=e()*Math.PI*2,l=e()*Math.PI*2,u=e()*Math.PI*2,m=.05+e()*.026,g=.034+e()*.024,x=.02+e()*.016;for(let f=0;f<a.count;f+=1){let v=a.getX(f),A=a.getY(f),M=a.getZ(f);const d=Tt.clamp((A+t*.5)/t,0,1),h=Math.max(1e-4,Math.hypot(v,M)),p=Math.atan2(M,v),_=1-Math.abs(d-.44)*1.65,T=Math.sin(p*5+c+d*1.6)*m+Math.cos(p*3+l-d*1.2)*g,w=Math.sin((v+M)*.14+c)*.014+Math.cos((v-M)*.11+l)*.012+Math.sin(p*9+u+d*1.7)*x,R=Tt.clamp(1+T*Math.max(.18,_)+w,.86,1.24);v=v/h*h*R,M=M/h*h*R,A+=(T*.2+w*.45)*t,d<.22&&(A-=Math.pow((.22-d)/.22,1.05)*t*.1),d>.84&&(A+=Math.pow((d-.84)/.16,1.05)*t*.08),a.setXYZ(f,v,A,M)}return r.computeVertexNormals(),r}function uv(n,t,e,i=null){const o=[];if(i){o.push({offset:new z(0,i.height*.22,0),radius:i.radius*.54,height:i.height*.34,crashWeight:1.8});const u=8;for(let m=0;m<u;m+=1){const g=m/u*Math.PI*2;o.push({offset:new z(Math.cos(g)*i.radius*.5,i.height*.2,Math.sin(g)*i.radius*.5),radius:i.radius*.2,height:i.height*.22,crashWeight:1.76})}}const r=[{y:t*.16,radius:n*.86,h:t*.22,crashWeight:1.84},{y:t*.34,radius:n*.76,h:t*.22,crashWeight:1.82},{y:t*.52,radius:n*.64,h:t*.21,crashWeight:1.8},{y:t*.7,radius:n*.5,h:t*.18,crashWeight:1.78},{y:t*.86,radius:n*.34,h:t*.16,crashWeight:1.76}];for(const u of r)o.push({offset:new z(0,u.y,0),radius:u.radius,height:u.h,crashWeight:u.crashWeight});o.push({shape:"box",offset:new z(0,t*.28,0),halfWidth:n*.56,halfLength:n*.62,halfHeight:t*.23,crashWeight:1.84}),o.push({shape:"box",offset:new z(0,t*.28,0),halfWidth:n*.5,halfLength:n*.58,halfHeight:t*.2,localYaw:Math.PI*.25,crashWeight:1.82}),o.push({shape:"box",offset:new z(0,t*.54,0),halfWidth:n*.34,halfLength:n*.42,halfHeight:t*.18,localYaw:Math.PI*.18,crashWeight:1.78});const a=8;for(let u=0;u<a;u+=1){const m=u/a*Math.PI*2;o.push({offset:new z(Math.cos(m)*n*.56,t*.24,Math.sin(m)*n*.56),radius:n*.24,height:t*.18,crashWeight:1.74})}const c=7;for(let u=0;u<c;u+=1){const m=u/c*Math.PI*2+Math.PI/c;o.push({offset:new z(Math.cos(m)*n*.43,t*.46,Math.sin(m)*n*.43),radius:n*.2,height:t*.17,crashWeight:1.72})}const l=5;for(let u=0;u<l;u+=1){const m=u/l*Math.PI*2+Math.PI/(l*2);o.push({offset:new z(Math.cos(m)*n*.3,t*.66,Math.sin(m)*n*.3),radius:n*.14,height:t*.14,crashWeight:1.7})}for(const u of e)o.push({offset:u.offset.clone().setY(u.offset.y+u.height*.12),radius:u.radius*.72,height:u.height*.44,crashWeight:1.68});return o.push({offset:new z(0,t*.98,0),radius:n*.16,height:t*.12,crashWeight:1.66}),o}function hv({tempVec3A:n,tempVec3B:t,tempVec3C:e,tempMat4:i}){function o(r,a){r.checkpointRoot.clear(),r.checkpointMeshes.length=0;const c=new Ni({color:12124149,transparent:!0,opacity:.78,blending:Ar,depthWrite:!1}),l=new Ni({color:5683711,transparent:!0,opacity:.28,blending:Ar,depthWrite:!1});a.checkpointData=[];const u=a.pathPoints.length,m=Array.isArray(a.checkpoints)?a.checkpoints:null,g=m?.length?m:a.pathPoints.map((v,A)=>A),x=[],f=Math.max(0,u-1);for(const v of g){const A=Tt.clamp(Math.round(v),0,f);x.length>0&&x[x.length-1]===A||x.push(A)}if(a.loop&&x.length>1&&x[0]===x[x.length-1]&&x.pop(),x.length<2){x.length=0;for(let v=0;v<u;v+=1)x.push(v)}a.checkpointIndices=x.slice();for(let v=0;v<x.length;v+=1){const A=x[v],M=a.pathPoints[A],d=x.length-1;if(!a.loop&&v===d&&v>0){const S=x[v-1];n.copy(M).sub(a.pathPoints[S]).setY(0)}else{const S=x[(v+1)%x.length],y=a.pathPoints[S];n.copy(y).sub(M).setY(0)}n.lengthSq()<.001&&n.set(0,0,1),n.normalize();const h=Ge(a,M.x,M.z),p=e.copy(h).lerp(Ae,.45).normalize(),_=t.crossVectors(p,n).normalize(),T=new wt,w=new k(new Pn(5.2,.18,18,72),c.clone()),R=new k(new Pn(5.8,.46,16,64),l.clone());i.makeBasis(_,p,n),w.quaternion.setFromRotationMatrix(i),R.quaternion.copy(w.quaternion),T.position.copy(M).addScaledVector(p,3.9),T.add(w,R),r.checkpointRoot.add(T);const C={index:v,pathIndex:A,group:T,core:w,aura:R,pulse:Math.random()*Math.PI*2,point:M.clone(),forward:n.clone(),right:_.clone(),gateHalfWidth:a.routeHalfWidth*1.24,captureDepth:6.2,captureRadiusSq:Math.pow(a.routeHalfWidth*1.55,2),s:a.cumulative[A]??a.totalLength};r.checkpointMeshes.push(C),a.checkpointData.push(C)}}return{buildCheckpoints:o}}function dv({modelLibrary:n,tempVec3A:t,tempVec3B:e,tempVec3C:i,tempMat4:o}){function r(m,g,x){return Number.isFinite(g?.[x])?g[x]:Number.isFinite(g?.default)?g.default:m}function a(m){return Array.isArray(m.items)?m.items.map(g=>{const x=Number(g?.t);return{t:Number.isFinite(x)?Tt.euclideanModulo(x,1):0,lane:Number.isFinite(g?.lane)?g.lane:0,generated:!1}}).sort((g,x)=>g.t-x.t):[]}function c(m){const g=a(m);if(g.length===0)return[];const x=5,f=Math.max(x,Math.floor(r(le.itemWaveMaxWaveCount,le.itemWaveMaxWaveCountByLevel,m.id)));if(g.length>=x&&g.length<=f)return g.map(A=>({t:A.t,lane:A.lane}));if(g.length>f){const A=[];for(let M=0;M<f;M+=1){const d=Math.floor(M*g.length/f),h=g[Math.min(d,g.length-1)];A.push({t:h.t,lane:h.lane})}return A}const v=[];for(let A=0;A<x;A+=1){const M=Math.floor(A*g.length/x),d=g[Math.min(M,g.length-1)];v.push({t:d.t,lane:d.lane})}return v}function l(m,g,x,f,v,A,M,d,h=.46){const p=Tt.degToRad(d),_=Math.cos(p),T=Math.sin(p),w=[-.46,0,.46],R=[-.58,-.28,0,.28,.58];let C=Number.POSITIVE_INFINITY,S=0;for(const y of w)for(const P of R){const E=A*.5*y,I=M*.5*P,F=-h*_+I*T,L=h*T+I*_,D=g.x+x.x*E+f.x*F+v.x*L,N=g.y+x.y*E+f.y*F+v.y*L,H=g.z+x.z*E+f.z*F+v.z*L,X=m.heightFn(D,H),V=X-N;V>S&&(S=V);const Z=N-X;Z<C&&(C=Z)}return{maxPenetration:S,minClearance:Number.isFinite(C)?C:0}}function u(m,g){const x=n.createRoadMarkerMaterial(g.palette.ramp),f=n.createRoadMarkerMaterial(g.palette.boost);m.ramps=[],m.boostPads=[],m.itemCrates=[],g.rampAudit=[];const v=g.routeHalfWidth*.82;for(let h=0;h<g.ramps.length;h+=1){const p=g.ramps[h],_=[],T=p.t??0,w=Tt.clamp(T,0,1);Math.abs(w-T)>1e-4&&_.push(`t ${Number(T.toFixed(3))} -> ${Number(w.toFixed(3))}`);const R=p.lane??0,C=Tt.clamp(R,-v,v);Math.abs(C-R)>.01&&_.push(`lane ${Number(R.toFixed(2))} -> ${Number(C.toFixed(2))}`);const S=p.slope??14,y=Math.max(14,S);Math.abs(y-S)>.01&&_.push(`slope ${Number(S.toFixed(1))} -> ${Number(y.toFixed(1))}`);const P=p.launch??le.rampMinLaunchVelocity,E=Math.max(le.rampMinLaunchVelocity,P);Math.abs(E-P)>.01&&_.push(`launch ${Number(P.toFixed(2))} -> ${Number(E.toFixed(2))}`);const I=p.boost??0,F=Math.max(3.6,I);Math.abs(F-I)>.01&&_.push(`boost ${Number(I.toFixed(2))} -> ${Number(F.toFixed(2))}`);const L=Ke(g,w*g.totalLength),D=t,N=e,H=i.copy(L.forward);xi(H,Ge(g,L.point.x,L.point.z),D,N,H);const X=L.point.clone().addScaledVector(D,C).addScaledVector(N,.46),V=mn(g,X.x,X.z);V>g.routeHalfWidth*1.08&&_.push(`offTrack=${Number(V.toFixed(2))}`);const Z=l(g,X,D,N,H,p.width,p.length,y);let $=0;Z.maxPenetration>.01&&($=Z.maxPenetration+.14,X.addScaledVector(N,$),_.push(`lift +${Number($.toFixed(2))}`));const xt=l(g,X,D,N,H,p.width,p.length,y);xt.maxPenetration>.08&&_.push(`embed=${Number(xt.maxPenetration.toFixed(2))}`);const yt=new k(new Q(p.width,.92,p.length),x.clone());o.makeBasis(D,N,H),yt.quaternion.setFromRotationMatrix(o),yt.rotateX(-Tt.degToRad(y)),yt.position.copy(X),yt.castShadow=!0,yt.receiveShadow=!0,m.routeRoot.add(yt),m.ramps.push({id:h,x:X.x,y:X.y,z:X.z,forward:H.clone(),right:D.clone(),width:p.width,length:p.length,launch:E,boost:F,slope:y,lane:C,trackDistance:V,terrainLift:$,minGroundClearance:xt.minClearance}),_.length>0&&g.rampAudit.push({map:g.id,index:h,x:X.x,z:X.z,issues:_,corrected:!0,critical:V>g.routeHalfWidth*1.28||xt.maxPenetration>.08})}for(const h of g.boosts){const p=Ke(g,h.t*g.totalLength),_=t,T=e,w=i.copy(p.forward);xi(w,Ge(g,p.point.x,p.point.z),_,T,w);const R=p.point.clone().addScaledVector(_,h.lane).addScaledVector(T,.22),C=new k(new Q(h.width,.2,h.length),f.clone());o.makeBasis(_,T,w),C.quaternion.setFromRotationMatrix(o),C.position.copy(R),C.receiveShadow=!0,m.routeRoot.add(C),m.boostPads.push({x:R.x,y:R.y,z:R.z,forward:w.clone(),right:_.clone(),width:h.width,length:h.length,power:h.power})}const A=Math.min(g.routeHalfWidth*le.itemWaveLaneFactor*1.4,4.8),M=[-A,0,A],d=c(g);for(let h=0;h<d.length;h+=1){const p=d[h],_=Ke(g,p.t*g.totalLength),T=Ge(g,_.point.x,_.point.z),w=t.crossVectors(T,_.forward).normalize(),R={index:h,crates:[],remaining:0,active:!1,respawnTimer:0};for(let C=0;C<M.length;C+=1){const S=(p.lane??0)+M[C],y=Tt.clamp(S,-g.routeHalfWidth*.86,g.routeHalfWidth*.86),P=_.point.clone().addScaledVector(w,y).addScaledVector(T,2.6),E=eo[(h+C)%eo.length],I=n.createPickupModel(E);I.position.copy(P),I.visible=!1,m.routeRoot.add(I);const F={mesh:I,core:I.userData.core,halo:I.userData.halo,type:E,basePos:P.clone(),radius:1.24,spin:Math.random()*Math.PI*2,anim:I.userData.anim,itemIndex:h*M.length+C,waveIndex:h,laneSlot:C,active:!1,collected:!1};F.syncVisualType=L=>{!F.mesh||!L||F.mesh.userData?.pickupType!==L&&(n.applyPickupModelType(F.mesh,L),F.core=F.mesh.userData.core,F.halo=F.mesh.userData.halo,F.anim=F.mesh.userData.anim)},R.crates.push(F),m.itemCrates.push(F)}m.itemWaves.push(R)}m.itemWaves.length>0&&(m.itemWavesInitialized=!1,m.activeItemWave=-1,m.itemWaveCooldown=0,m.itemWaveAdvanceDelay=le.itemWaveAdvanceDelay)}return{buildInteractionZones:u}}function fv({modelLibrary:n,tempVec3A:t,buildHarborEnvironment:e,buildUrbanEnvironment:i}){function o(r,a){const c=Or(a.seed^8264);if(a.id==="harbor"){e(r,a,c);return}if(a.id==="urban8"){i(r,a,c);return}const l=a.bounds.minX+10,u=a.bounds.maxX-10,m=a.bounds.minZ+10,g=a.bounds.maxZ-10,x=(d,h,p,_=!0)=>{for(let T=0;T<d;T+=1){let w=!1;for(let R=0;R<22&&!w;R+=1){const C=Tt.lerp(l,u,c()),S=Tt.lerp(m,g,c());if(mn(a,C,S)<h)continue;const y=a.heightFn(C,S),P=.85+c()*1.65,E=p(P,c,a.id==="serpent");if(E.position.set(C,y,S),E.rotation.y=c()*Math.PI*2,r.decorRoot.add(E),_){const I=E.userData.obstacleRadius??1.4,F=E.userData.obstacleHeight??3;r.obstacles.push({x:C,z:S,y:y+F*.5,radius:I,height:F,crashWeight:E.userData.crashWeight??1.2,type:E.userData.type??"decor"})}w=!0}}},f=a.environmentTrackPadding??0;let v,A,M;if(a.id==="alpine"){const d=n.getAlpineModels();v=(h,p)=>d[Math.floor(p()*5)](h,p),A=(h,p)=>d[5+Math.floor(p()*5)](h,p),M=(h,p)=>d[10+Math.floor(p()*10)](h,p)}else if(a.id==="lava"){const d=n.getLavaModels();v=(h,p)=>d[Math.floor(p()*5)](h,p),A=(h,p)=>d[5+Math.floor(p()*5)](h,p),M=(h,p)=>d[10+Math.floor(p()*10)](h,p)}else if(a.id==="neon"){const d=n.getNeonModels();v=(h,p)=>d[Math.floor(p()*5)](h,p),A=(h,p)=>d[5+Math.floor(p()*5)](h,p),M=(h,p)=>d[10+Math.floor(p()*10)](h,p)}else if(a.id==="ruins"){const d=n.getHarborModels();v=(h,p)=>d[10+Math.floor(p()*5)](h,p),A=(h,p)=>d[15+Math.floor(p()*3)](h,p),M=(h,p)=>d[18+Math.floor(p()*2)](h,p)}else if(a.id==="desert"){const d=n.getDesertModels();v=(h,p)=>d[Math.floor(p()*5)](h,p),A=(h,p)=>d[5+Math.floor(p()*5)](h,p),M=(h,p)=>d[10+Math.floor(p()*10)](h,p)}else if(a.id==="snow"){const d=n.getSnowModels();v=(p,_)=>d[5+Math.floor(_()*5)](p,_),A=(p,_)=>d[10+Math.floor(_()*5)](p,_),M=(p,_)=>d[Math.floor(_()*5)](p,_);const h=M;M=(p,_)=>_()>.5?h(p,_):d[15+Math.floor(_()*5)](p,_)}else{const d=n.getForestModels();v=(h,p)=>d[Math.floor(p()*5)](h,p),A=(h,p)=>d[5+Math.floor(p()*5)](h,p),M=(h,p)=>d[10+Math.floor(p()*10)](h,p)}x(a.treeCount,a.routeHalfWidth+7.6+f,v,!0),x(a.rockCount,a.routeHalfWidth+6.2+f,A,!0),x(a.propCount,a.routeHalfWidth+4.1+f,M,!0);for(let d=0;d<a.hazardCount;d+=1)for(let h=0;h<18;h+=1){const p=Ke(a,c()*(a.totalLength-8)+4),_=Ge(a,p.point.x,p.point.z),T=t.crossVectors(_,p.forward).normalize(),w=c()<.5?-1:1,R=Tt.lerp(a.routeHalfWidth*1.18,a.routeHalfWidth*1.9,c()),C=p.point.x+T.x*R*w,S=p.point.z+T.z*R*w,y=a.heightFn(C,S);let P,E,I;const F=c();if(F<.33){const L=2.4+c()*2.8;P=new k(new At(.34,.42,L,16),new Y({color:6441263,roughness:.88})),P.rotation.z=Math.PI/2,P.rotation.y=c()*Math.PI,E=1.15,I=1.2}else if(F<.66){const L=1+c()*1.4;P=A(L,c,a.id==="serpent"||a.id==="lava"),E=P.userData.obstacleRadius??1.4*L,I=P.userData.obstacleHeight??2.4*L}else P=new k(new Q(1.6,1.5+c()*1.6,1.6),new Y({color:8081202,roughness:.8})),E=1.25,I=2.4;if(!(mn(a,C,S)<a.routeHalfWidth+E*1.2+.4)){P.position.set(C,y+I*.5,S),P.castShadow=!0,P.receiveShadow=!0,r.decorRoot.add(P),r.obstacles.push({shape:"sphere",x:C,z:S,y:P.position.y,radius:E*.9,height:I*.54,crashWeight:1.45,type:"hazard"});break}}}return{buildEnvironment:o}}function pv({modelLibrary:n,tempVec3A:t,tempVec3B:e,tempVec3C:i=new z,tempMat4:o=new Be}){function r(a,c,l){new Y({color:12208674,roughness:.84}),new Y({color:2381946,roughness:.8}),new Y({color:4876859,roughness:.82}),new Y({color:7690812,roughness:.85}),new Y({color:11184810,roughness:.75}),new Y({color:2238771,roughness:.62,metalness:.42}),new Y({color:14518306,roughness:.54,metalness:.24});const u=new Y({color:1787225,roughness:.1,metalness:.1,transparent:!0,opacity:.85}),m=new Y({color:5923690,roughness:.85}),g=new Y({color:12307677,roughness:.6,metalness:.8}),x=new Y({color:4473150,roughness:.9,metalness:.3}),f=new k(new uo(1600,800,32,16),u);f.rotation.x=-Math.PI*.5,f.position.set(0,4,400),f.receiveShadow=!0,a.terrainRoot.add(f);const v=(d,h,p,_)=>{const T=new wt;if(n&&n.getHarborModels){const w=n.getHarborModels()[0],R=2.45,C=R*2;for(let y=0;y<p;y++){const P=w(R,l);P.position.y=C*y,T.add(P)}const S=c.heightFn(d,h);T.position.set(d,S,h),T.rotation.y=_,a.decorRoot.add(T),An(a,{x:d,y:S+C*p*.5,z:h,right:t.set(1,0,0).applyAxisAngle(Ae,_),forward:e.set(0,0,1).applyAxisAngle(Ae,_),halfWidth:R*.95,halfLength:R*2.45,halfHeight:C*p*.5,crashWeight:5,type:"decor"})}};for(let d=10;d<c.totalLength;d+=35){const h=Ke(c,d),p=h.point.y;if(p>5&&p<25&&l()>.2){const _=i.crossVectors(Ae,h.forward).normalize();for(const T of[-1,1]){if(l()>.6)continue;const w=c.routeHalfWidth+5+l()*12,R=h.point.x+_.x*w*T,C=h.point.z+_.z*w*T;if(mn(c,R,C)<c.routeHalfWidth+3)continue;const S=Math.atan2(h.forward.x,h.forward.z)+(l()>.5?0:Math.PI/2),y=1+Math.floor(l()*4);v(R,C,y,S)}}}const A=15;for(let d=0;d<c.totalLength;d+=A){const h=Ke(c,d),p=h.point.y,_=t.copy(h.forward),T=e,w=Ae;if(T.crossVectors(w,_).normalize(),h.point.z>220)for(const R of[-1,1]){const C=c.routeHalfWidth+1.5,S=h.point.x+T.x*C*R,y=h.point.z+T.z*C*R,P=new k(new Q(1,1.2,A+.2),m);P.position.set(S,p+.5,y),o.makeBasis(T,w,_),P.quaternion.setFromRotationMatrix(o),P.castShadow=!0,P.receiveShadow=!0,a.decorRoot.add(P),An(a,{x:S,y:p+.5,z:y,right:T.clone(),forward:_.clone(),halfWidth:.5,halfLength:A*.5,halfHeight:.6,crashWeight:1.5,type:"edge"})}if(p>30){const R=c.routeHalfWidth*2+6,C=1.5,S=new k(new Q(R,C,A+.2),x);S.position.copy(h.point).addScaledVector(Ae,-C*.5-.1),o.makeBasis(T,Ae,_),S.quaternion.setFromRotationMatrix(o),S.receiveShadow=!0,a.decorRoot.add(S);for(const y of[-1,1]){const P=c.routeHalfWidth+1.8,E=new k(new Q(.3,1.2,A+.2),g);E.position.copy(h.point).addScaledVector(T,P*y).addScaledVector(Ae,.6),E.quaternion.setFromRotationMatrix(o),E.castShadow=!0,E.receiveShadow=!0,a.decorRoot.add(E),An(a,{x:E.position.x,y:E.position.y,z:E.position.z,right:T.clone(),forward:_.clone(),halfWidth:.15,halfLength:A*.5,halfHeight:.6,crashWeight:1.2,type:"edge"})}if(d%30<A){const y=p-10,P=new k(new At(2,3,y,16),m);P.position.copy(h.point).addScaledVector(Ae,-y*.5-C),P.castShadow=!0,P.receiveShadow=!0,a.decorRoot.add(P)}}}const M=n?n.getHarborModels():[];if(M.length>0)for(let d=0;d<c.propCount*1.5;d++){let h=!1;for(let p=0;p<20&&!h;p++){const _=Tt.lerp(c.bounds.minX+10,c.bounds.maxX-10,l()),T=Tt.lerp(c.bounds.minZ+10,c.bounds.maxZ-10,l());if(mn(c,_,T)<c.routeHalfWidth+4.1)continue;const w=c.heightFn(_,T);if(w<5)continue;const R=.85+l()*1.5,C=Math.floor(l()*M.length),S=M[C](R,l);S.position.set(_,w,T),S.rotation.y=l()*Math.PI*2,a.decorRoot.add(S),An(a,{x:_,z:T,y:w+(S.userData.obstacleHeight||2)*.5,right:t.set(1,0,0),forward:e.set(0,0,1),halfWidth:S.userData.obstacleRadius||1.4,halfLength:S.userData.obstacleRadius||1.4,halfHeight:(S.userData.obstacleHeight||2)*.5,crashWeight:S.userData.crashWeight||1.5,type:"decor"}),h=!0}}if(n&&n.makeHeavyGantryCrane){const d=4+Math.floor(l()*3);for(let h=0;h<d;h++){let p=!1;for(let _=0;_<30&&!p;_++){const T=Tt.lerp(c.bounds.minX+30,c.bounds.maxX-30,l()),w=Tt.lerp(c.bounds.minZ+30,c.bounds.maxZ-30,l());if(mn(c,T,w)<c.routeHalfWidth+25)continue;const R=c.heightFn(T,w);if(R<12)continue;const C=l();let S,y=2+l()*1,P=15,E=8;C<.3?S=n.makeCraneBase(y,l):C<.7?(y=4,S=n.makeHeavyGantryCrane(y,l)):(y=2.5,S=n.makeTowerCrane(y,l)),S.position.set(T,R,w),S.rotation.y=l()*Math.PI*2,a.decorRoot.add(S),An(a,{x:T,z:w,y:R+4,right:t.set(1,0,0).applyAxisAngle(Ae,S.rotation.y),forward:e.set(0,0,1).applyAxisAngle(Ae,S.rotation.y),halfWidth:E,halfLength:E,halfHeight:8,crashWeight:P,type:"decor"});const I=1+Math.floor(l()*3);for(let F=0;F<I;F++){const L=T+(l()-.5)*15,D=w+(l()-.5)*15;v(L,D,1+Math.floor(l()*3),S.rotation.y+(l()>.5?0:Math.PI/2))}if(n.makeExcavatorA){const F=[n.makeExcavatorA,n.makeDumpTruck,n.makeLargeTruck,n.makeCargoTruck],L=F[Math.floor(l()*F.length)],D=T+(l()-.5)*20,N=w+(l()-.5)*20,H=c.heightFn(D,N);if(H>=12&&mn(c,D,N)>c.routeHalfWidth+6){const X=L(1.2+l()*.4,l);X.position.set(D,H,N),X.rotation.y=l()*Math.PI*2,a.decorRoot.add(X),An(a,{x:D,z:N,y:H+1.5,right:t.set(1,0,0),forward:e.set(0,0,1),halfWidth:2.5,halfLength:2.5,halfHeight:1.5,crashWeight:10,type:"decor"})}}p=!0}}}if(n&&n.makeExcavatorA){const d=[n.makeExcavatorA,n.makeDumpTruck,n.makeBulldozer,n.makeLargeTruck,n.makeCargoTruck,n.makeCementMixer,n.makeExcavatorB];for(const h of d){const p=1+Math.floor(l()*2);for(let _=0;_<p;_++){let T=!1;for(let w=0;w<20&&!T;w++){const R=Tt.lerp(c.bounds.minX+20,c.bounds.maxX-20,l()),C=Tt.lerp(c.bounds.minZ+20,c.bounds.maxZ-20,l());if(mn(c,R,C)<c.routeHalfWidth+12)continue;const S=c.heightFn(R,C);if(S<8)continue;const y=h(1.2+l()*.6,l);if(y.position.set(R,S,C),y.rotation.y=l()*Math.PI*2,a.decorRoot.add(y),An(a,{x:R,z:C,y:S+(y.userData.obstacleHeight||3)*.5,right:t.set(1,0,0).applyAxisAngle(Ae,y.rotation.y),forward:e.set(0,0,1).applyAxisAngle(Ae,y.rotation.y),halfWidth:y.userData.obstacleRadius||2.5,halfLength:y.userData.obstacleRadius||2.5,halfHeight:(y.userData.obstacleHeight||3)*.5,crashWeight:y.userData.crashWeight||10,type:"decor"}),n.makeWorksiteProps&&l()>.5){const P=n.makeWorksiteProps(1+l()*.5,l),E=R+(l()-.5)*15,I=C+(l()-.5)*15;if(mn(c,E,I)>c.routeHalfWidth+6){const F=c.heightFn(E,I);F>8&&(P.position.set(E,F,I),P.rotation.y=l()*Math.PI*2,a.decorRoot.add(P))}}T=!0}}}}if(n&&n.makeCargoShip)for(let d=0;d<18;d++){const h=(l()-.5)*1100,p=220+l()*220;if(mn(c,h,p)<30)continue;const _=l();let T,w=1;_<.15?(T=n.makeCargoShip,w=1.2+l()*.8):_<.25?(T=n.makeCruiseShip,w=1+l()*.5):_<.35?(T=n.makeYacht,w=1.5+l()):_<.45?(T=n.makePier,w=1+l()*.4):_<.55?(T=n.makeSpeedboat,w=1.2+l()):_<.65?(T=n.makeSailboat,w=1.5+l()):(T=n.makeBuoy,w=1.5+l());const R=T(w,l);R.position.set(h,4,p),R.rotation.y=l()*Math.PI*2,R.traverse(C=>{C.isMesh&&(C.castShadow=!1)}),a.decorRoot.add(R),An(a,{x:h,z:p,y:4+(R.userData.obstacleHeight||2)*.5,right:t.set(1,0,0).applyAxisAngle(Ae,R.rotation.y),forward:e.set(0,0,1).applyAxisAngle(Ae,R.rotation.y),halfWidth:R.userData.obstacleRadius||2,halfLength:R.userData.obstacleRadius||2,halfHeight:(R.userData.obstacleHeight||2)*.5,crashWeight:R.userData.crashWeight||5,type:"decor"})}}return{buildHarborEnvironment:r}}function mv({modelLibrary:n,tempVec3A:t,tempVec3B:e,tempVec3C:i,tempMat4:o}){function r(a,c,l){new Y({color:1711136,roughness:.92});const u=new Y({color:4475733,roughness:.88}),m=new Y({color:3883596,roughness:.8}),g=new Y({color:11055032,roughness:.62,metalness:.34}),x=new Y({color:15645730,roughness:.4}),f=new Y({color:2896704,roughness:.6,metalness:.42}),v=new Y({color:16772795,emissive:16755200,emissiveIntensity:1}),A=new Y({color:1785951,roughness:.5,metalness:.2}),M=new Y({color:15201535,roughness:.34,metalness:.18}),d=(_,T,w,R,C,S)=>{const y=mn(c,_,T);if(y<c.routeHalfWidth+Math.max(w,R)*.6+4||y>150&&l()>.4||y>250&&l()>.15)return;let P;if(n&&n.createDetailedBuildingModel)P=n.createDetailedBuildingModel(w,R,C,S,l);else{P=new wt;const I=new k(new Q(w,C,R),u);I.position.y=C*.5,P.add(I)}const E=c.heightFn(_,T);P.position.set(_,E,T),a.decorRoot.add(P),An(a,{x:_,y:E+C*.5,z:T,right:t.set(1,0,0),forward:e.set(0,0,1),halfWidth:w*.5,halfLength:R*.5,halfHeight:C*.5,crashWeight:2,type:"decor"})};for(let _=c.bounds.minX+25;_<c.bounds.maxX-25;_+=40)for(let T=c.bounds.minZ+25;T<c.bounds.maxZ-25;T+=40){if(l()>.9)continue;const w=Math.abs(_)<200&&Math.abs(T)<200,R=24+l()*12,C=24+l()*12,S=20+l()*(w?90:40);d(_+(l()-.5)*6,T+(l()-.5)*6,R,C,S,Math.floor(l()*8))}const h=10;for(let _=0;_<c.totalLength;_+=h){const T=Ke(c,_),w=T.point.y,R=t.copy(T.forward),C=e,S=i;if(xi(R,Ge(c,T.point.x,T.point.z),C,S,R),w>22){const P=c.routeHalfWidth*2+5,E=new k(new Q(P,1.2,h+.2),m);E.position.copy(T.point).addScaledVector(Ae,-1.2*.5-.1),o.makeBasis(C,Ae,R),E.quaternion.setFromRotationMatrix(o),E.receiveShadow=!0,a.decorRoot.add(E);for(const I of[-1,1]){const F=c.routeHalfWidth+1.2,L=new k(new Q(.8,1.4,h+.2),g);L.position.copy(T.point).addScaledVector(C,F*I).addScaledVector(Ae,.7),L.quaternion.setFromRotationMatrix(o),L.castShadow=!0,L.receiveShadow=!0,a.decorRoot.add(L),An(a,{x:L.position.x,y:L.position.y,z:L.position.z,right:C.clone(),forward:R.clone(),halfWidth:.4,halfLength:h*.5,halfHeight:.7,crashWeight:1.5,type:"edge"})}if(_%40<h){const I=w+15,F=new k(new Q(P*.5,I,4.5),u);F.position.copy(T.point).addScaledVector(Ae,-I*.5-1.2),F.quaternion.setFromRotationMatrix(o),F.castShadow=!0,F.receiveShadow=!0,a.decorRoot.add(F)}}if(w<8)for(const y of[-1,1]){const P=c.routeHalfWidth+2.5,E=20-w,I=new k(new Q(1.5,E,h+.2),m);I.position.copy(T.point).addScaledVector(C,P*y).addScaledVector(Ae,E*.5-.5),o.makeBasis(C,Ae,R),I.quaternion.setFromRotationMatrix(o),I.castShadow=!0,I.receiveShadow=!0,a.decorRoot.add(I),An(a,{x:I.position.x,y:I.position.y,z:I.position.z,right:C.clone(),forward:R.clone(),halfWidth:.75,halfLength:h*.5,halfHeight:E*.5,crashWeight:1.8,type:"edge"})}if(_%180<h){const P=c.routeHalfWidth+3;for(const D of[-1,1]){const N=new k(new At(.15,.2,7.5,8),f);N.position.copy(T.point).addScaledVector(C,P*D).addScaledVector(Ae,7.5*.5),a.decorRoot.add(N)}const E=P*2,I=new k(new Q(E,.4,.4),f);I.position.copy(T.point).addScaledVector(Ae,7.5-.2),o.makeBasis(C,Ae,R),I.quaternion.setFromRotationMatrix(o),a.decorRoot.add(I);const F=new k(new Q(E*.4,1.8,.2),A);F.position.copy(T.point).addScaledVector(Ae,7.5-1.2),F.quaternion.setFromRotationMatrix(o),a.decorRoot.add(F);const L=new k(new Q(E*.2,.4,.3),M);L.position.copy(T.point).addScaledVector(Ae,7.5-1.2).addScaledVector(R,.1),L.quaternion.setFromRotationMatrix(o),a.decorRoot.add(L)}if(_%40<h)for(const y of[-1,1]){const P=c.routeHalfWidth+1.2;if(w<8)continue;const E=T.point.clone().addScaledVector(C,P*y),I=9,F=new k(new At(.08,.12,I,8),f);F.position.copy(E).addScaledVector(Ae,I*.5),a.decorRoot.add(F);const L=new k(new Q(1.2,.15,.4),v);L.position.copy(E).addScaledVector(Ae,I).addScaledVector(C,-.6*y),o.makeBasis(C,Ae,R),L.quaternion.setFromRotationMatrix(o),a.decorRoot.add(L)}if(_%12<h){const y=new k(new Q(.2,.05,4),x);y.position.copy(T.point).addScaledVector(Ae,.05),o.makeBasis(C,Ae,R),y.quaternion.setFromRotationMatrix(o),a.decorRoot.add(y)}}const p=n?n.getCityModels():[];if(p.length>0)for(let _=0;_<c.propCount*1.5;_++){let T=!1;for(let w=0;w<20&&!T;w++){const R=Tt.lerp(c.bounds.minX+10,c.bounds.maxX-10,l()),C=Tt.lerp(c.bounds.minZ+10,c.bounds.maxZ-10,l());if(mn(c,R,C)<c.routeHalfWidth+2.5)continue;const y=c.heightFn(R,C);if(y<8||y>15)continue;const P=.85+l()*1.5,E=Math.floor(l()*p.length),I=p[E](P,l);I.position.set(R,y,C),I.rotation.y=l()*Math.PI*2,a.decorRoot.add(I),An(a,{x:R,z:C,y:y+(I.userData.obstacleHeight||2)*.5,right:t.set(1,0,0),forward:e.set(0,0,1),halfWidth:I.userData.obstacleRadius||1.4,halfLength:I.userData.obstacleRadius||1.4,halfHeight:(I.userData.obstacleHeight||2)*.5,crashWeight:I.userData.crashWeight||1.5,type:"decor"}),T=!0}}}return{buildUrbanEnvironment:r}}function gv({settings:n,levels:t,modelLibrary:e}){const i=new z,o=new z,r=new z,a=new z,c=new Be,{buildLights:l,buildTerrain:u}=ev({settings:n}),{buildRoute:m}=nv({settings:n,modelLibrary:e,tempVec3A:i,tempVec3B:o,tempVec3C:r,tempVec3D:a,tempMat4:c}),{buildCheckpoints:g}=hv({tempVec3A:i,tempVec3B:o,tempVec3C:r,tempMat4:c}),{buildInteractionZones:x}=dv({modelLibrary:e,tempVec3A:i,tempVec3B:o,tempVec3C:r,tempMat4:c}),{buildHarborEnvironment:f}=pv({modelLibrary:e,tempVec3A:i,tempVec3B:o,tempVec3C:r,tempMat4:c}),{buildUrbanEnvironment:v}=mv({modelLibrary:e,tempVec3A:i,tempVec3B:o,tempVec3C:r,tempMat4:c}),{buildEnvironment:A}=fv({modelLibrary:e,tempVec3A:i,buildHarborEnvironment:f,buildUrbanEnvironment:v});function M(p,_){const T=t.find(R=>R.id===_)??t[0];p.activeLevel=T,p.worldRoot&&p.scene.remove(p.worldRoot),p.worldRoot=new wt,p.terrainRoot=new wt,p.routeRoot=new wt,p.decorRoot=new wt,p.checkpointRoot=new wt,p.racerRoot=new wt,p.fxRoot=new wt,p.worldRoot.add(p.terrainRoot,p.routeRoot,p.decorRoot,p.checkpointRoot,p.racerRoot,p.fxRoot),p.scene.add(p.worldRoot),p.obstacles=[],p.ramps=[],p.boostPads=[],p.itemCrates=[],p.itemWaves=[],p.itemWavesInitialized=!1,p.activeItemWave=0,p.itemWaveCooldown=0,p.itemWaveAdvanceDelay=le.itemWaveAdvanceDelay;const w=(Date.now()^Math.floor(Math.random()*4294967296))>>>0;p.itemTypeRng=Or((T.seed^32586^w)>>>0),p.itemTypeBag=[],p.itemTypeBagCursor=0,p.itemProjectiles=[],p.groundHazards=[],p.checkpointMeshes=[],p.particles=[],l(p,T),u(p,T),m(p,T),ov(p,T),g(p,T),x(p,T),A(p,T),h(p,T),T.id==="debug"&&d(p)}function d(p){let _=20;const T=15,w=P=>{P.position.set(T,0,_),p.decorRoot.add(P),_+=6},R=[...e.getForestModels(),...e.getDesertModels(),...e.getSnowModels(),...e.getCityModels(),...e.getAlpineModels(),...e.getLavaModels(),...e.getNeonModels(),...e.getHarborModels()];for(const P of R)w(P(1,()=>.5));let C=20;for(let P=0;P<4;P++){const E=e.createRockModel(2.5,P%2===0,()=>(P+.1)/4);E.position.set(T-10,0,C),p.decorRoot.add(E),C+=12}if(e.createDetailedBuildingModel){let P=20;for(let E=0;E<5;E++){const I=()=>(E*137+73)%100/100,F=e.createDetailedBuildingModel(20,20,30+E*20,E,I);F.position.set(T+25,0,P),p.decorRoot.add(F),P+=30}}if(e.makeCargoShip){const P=[e.makeCargoShip,e.makeCruiseShip,e.makeSpeedboat,e.makeSailboat,e.makeYacht];let E=20;for(const I of P){if(!I)continue;const F=I(1.2,()=>.5);F.position.set(T+60,0,E),p.decorRoot.add(F),E+=60}}if(e.makeHeavyGantryCrane){const P=[e.makeHeavyGantryCrane,e.makeTowerCrane];let E=20;for(const I of P){if(!I)continue;const F=I(2.5,()=>.5);F.position.set(T+40,0,E),p.decorRoot.add(F),E+=40}}if(e.makeExcavatorA){const P=[e.makeExcavatorA,e.makeDumpTruck,e.makeBulldozer,e.makeLargeTruck,e.makeCargoTruck,e.makeCementMixer,e.makeExcavatorB,e.makeWorksiteProps];let E=20;for(const I of P){if(!I)continue;const F=I(1.2,()=>.5);F.position.set(T+20,0,E),p.decorRoot.add(F),E+=25}}["turbo","bash","shock","shield","banana","bomb","trap"].forEach(P=>{const E=e.createPickupModel(P);E.position.set(T,1.5,_),p.decorRoot.add(E),_+=4});const y=e.createRacerModel({color:16711680,isPlayer:!1}).group;y.position.set(T,.05,_),p.decorRoot.add(y)}function h(p,_){const T=_.pathPoints[0],w=_.pathPoints[1];i.copy(w).sub(T).setY(0).normalize();const R=o,C=r;xi(i,Ge(_,T.x,T.z),R,C,i);const S=new k(new Q(_.routeHalfWidth*2.7,.8,9),new Y({color:3621452,roughness:.72}));S.position.copy(T).addScaledVector(i,-4.4).addScaledVector(C,.4),c.makeBasis(R,C,i),S.quaternion.setFromRotationMatrix(c),S.receiveShadow=!0,S.castShadow=!0,p.routeRoot.add(S)}return{setupWorld:M}}const tn={IDLE_BALANCE:"idle_balance",START_PUSH:"start_push",PEDAL:"pedal",COAST:"coast",SPRINT:"sprint",BRAKE:"brake",AIR_NEUTRAL:"air_neutral",KNOCKDOWN:"knockdown",RECOVER:"recover"};class xv{constructor(t){this.racer=t,this.currentState=tn.IDLE_BALANCE,this.stateTime=0,this.weights={idle:1,pedal:0,coast:0,sprint:0,brake:0,air:0,knockdown:0},this.lookAtTarget=new z,this.lookAtWeight=0,this.microSteerJitter=0,this.pose={spinePitch:0,spineYaw:0,neckPitch:0,headYaw:0,headRoll:0,armBasePitch:0,legPower:1,pelvisYOffset:0,leftFootZ:0,rightFootZ:0}}update(t,e,i,o,r,a,c,l){this.stateTime+=t,this._determineState(e,i,o,r,a,c,l),this._updateWeights(t),this._evaluateBlendTree(t,e,o,a,c,l),this._evaluateAdditiveLayers(t,e,o)}_determineState(t,e,i,o,r,a,c){if(a){this._transition(tn.KNOCKDOWN);return}if(c){this._transition(tn.RECOVER);return}if(!e){this._transition(tn.AIR_NEUTRAL);return}if(r>.1){this._transition(tn.BRAKE);return}if(t<.5&&o<.1){this._transition(tn.IDLE_BALANCE);return}if(t<3&&o>.1){this._transition(tn.START_PUSH);return}if(o>.1&&t<this.racer.baseTopSpeed*.95){this.racer.boostTimer>0||o>.8&&t>15?this._transition(tn.SPRINT):this._transition(tn.PEDAL);return}this._transition(tn.COAST)}_transition(t){this.currentState!==t&&(this.currentState=t,this.stateTime=0)}_updateWeights(t){const i={idle:this.currentState===tn.IDLE_BALANCE?1:0,pedal:this.currentState===tn.PEDAL||this.currentState===tn.START_PUSH?1:0,coast:this.currentState===tn.COAST?1:0,sprint:this.currentState===tn.SPRINT?1:0,brake:this.currentState===tn.BRAKE?1:0,air:this.currentState===tn.AIR_NEUTRAL?1:0,knockdown:this.currentState===tn.KNOCKDOWN||this.currentState===tn.RECOVER?1:0};this.weights.idle=Fe(this.weights.idle,i.idle,8,t),this.weights.pedal=Fe(this.weights.pedal,i.pedal,8,t),this.weights.coast=Fe(this.weights.coast,i.coast,8,t),this.weights.sprint=Fe(this.weights.sprint,i.sprint,8,t),this.weights.brake=Fe(this.weights.brake,i.brake,8,t),this.weights.air=Fe(this.weights.air,i.air,8,t),this.weights.knockdown=Fe(this.weights.knockdown,i.knockdown,8,t)}_evaluateBlendTree(t,e,i,o,r,a){let c=-.1*this.weights.idle,l=-1*this.weights.idle;c+=(-.3-e*.005)*(this.weights.pedal+this.weights.coast),l+=(-1.08+Math.abs(i)*.2)*(this.weights.pedal+this.weights.coast),c+=-.45*this.weights.sprint,l+=-1.2*this.weights.sprint;let u=.15*this.weights.sprint;c+=(-.1+o*.3)*this.weights.brake,l+=(-.8+o*.4)*this.weights.brake,c+=-.25*this.weights.air,l+=-1*this.weights.air,this.weights.knockdown>0&&(c+=-(r?.9:a?.42:0)*this.weights.knockdown,l+=-1*this.weights.knockdown),this.pose.spinePitch=c,this.pose.armBasePitch=l,this.pose.pelvisYOffset=u,this.pose.legPower=r?.24:a?.46:1}_evaluateAdditiveLayers(t,e,i){this.pose.headYaw=Fe(this.pose.headYaw,i*.35,6,t),this.pose.headRoll=Fe(this.pose.headRoll,-i*.1,5,t),this.pose.neckPitch=Fe(this.pose.neckPitch,.08+e*.002,9,t),e>25&&this.weights.air<.5?this.microSteerJitter=Math.sin(this.stateTime*45)*.02*(e/40):this.microSteerJitter=Fe(this.microSteerJitter,0,10,t)}}new z;const La=new z,Ki=new z;function Mu(n,t,e,i,o,r,a){n.parent.updateMatrixWorld(!0),La.copy(i),n.parent.worldToLocal(La),Ki.copy(La).sub(n.position);let c=Ki.length();const l=o+r-.02;c>l&&(c=l);const u=c*c,m=o*o,g=r*r;let x=(m+g-u)/(2*o*r);x=Tt.clamp(x,-1,1);const f=Math.acos(x),v=-(Math.PI-f);t.rotation.set(v,0,a*.05);const A=Math.atan2(Ki.x,Ki.z),M=Math.hypot(Ki.x,Ki.z),d=Math.atan2(M,-Ki.y);let h=(u+m-g)/(2*c*o);h=Tt.clamp(h,-1,1);const p=Math.acos(h);n.rotation.x=d-p,n.rotation.z=a*(.15+(1-c/l)*.2),n.rotation.y=A*.5}function _v({modelLibrary:n}){const t=new z,e=new z,i=new Be,o=new ro,r=new Gn,a=new ro,c=.49;function l(x){const f=[...N_];for(let v=f.length-1;v>0;v-=1){const A=Math.floor(Math.random()*(v+1));[f[v],f[A]]=[f[A],f[v]]}return f.slice(0,Math.max(0,Math.min(x,f.length)))}function u(x,f,v){x.racers=[],x.racerRoot.clear();const A=!v,M=Math.max(1,Math.floor(f)),d=Math.max(0,M-(A?1:0)),h=l(d),p=(A?1:0)+h.length,_=x.activeLevel.pathPoints[0],T=x.activeLevel.pathPoints[1]??x.activeLevel.pathPoints[0],w=Math.atan2(T.x-_.x,T.z-_.z),R=yn(w),C=Ge(x.activeLevel,_.x,_.z),S=t.crossVectors(C,R).normalize(),y=Math.max(1,x.checkpointMeshes?.length??x.activeLevel.pathPoints.length);let P=0;for(let E=0;E<p;E+=1){const I=A&&E===0,F=I?null:h[A?E-1:E],L=I?16238154:new $t().setHSL((E*.15+.1)%1,.68,.52).getHex(),D=I?null:xu[Math.floor(Math.random()*xu.length)],N=m(E,I,L,D,F);let H,X;if(I)H=0,X=-5.2;else{const Z=P+1,$=Z%2===0?1:-1,xt=Math.ceil(Z/2);H=$*xt*1.75,X=-1.2-xt*1.15+(Z%3===0?-.35:.18),P+=1}const V=_.clone().addScaledVector(S,H).addScaledVector(R,X);N.position.copy(V),N.position.y=x.activeLevel.heightFn(V.x,V.z)+Mi,N.heading=w,N.startHeading=w,N.startGridPosition.copy(N.position),N.velocity.set(0,0,0),N.checkpoint=0,N.nextCheckpoint=y>1?1:0,N.progress=si(x.activeLevel,V.x,V.z).s,N.prevProgress=N.progress,N.globalProgress=N.progress,N.trackDist=0,N.prevPosition.copy(N.position),N.routeLayer=I?0:x.activeLevel.routeLayers[Math.floor(Math.random()*x.activeLevel.routeLayers.length)],N.routeChangeTimer=1.2+Math.random()*1.8,N.baseTopSpeed=(I?44:42)+Math.random()*2.2,g(x,N,ws),x.racerRoot.add(N.group),x.racers.push(N)}x.player=x.racers.find(E=>E.isPlayer)??x.racers[0]??null}function m(x,f,v,A,M=null){const d=n.createRacerModel({color:v,isPlayer:f}),h={id:x,name:f?F_:M??"机器人",profile:A,isPlayer:f,group:d.group,alignRoot:d.alignRoot,bikeRoot:d.bikeRoot,riderRoot:d.riderRoot,handleBarRoot:d.handleBarRoot,forkPivot:d.forkPivot,rearSwingPivot:d.rearSwingPivot,shockPivot:d.shockPivot,rearWheel:d.rearWheelSpin??d.rearWheel,frontWheel:d.frontWheelSpin??d.frontWheel,shieldOrbs:d.shieldOrbs,crankRoot:d.crankRoot,gripL:d.gripL,gripR:d.gripR,rig:d.rig,position:new z,velocity:new z,heading:0,startHeading:0,startGridPosition:new z,targetSteer:0,steer:0,throttle:0,reverseThrottle:0,brake:0,driveMode:"forward",reverseHoldTimer:0,signedForwardSpeed:0,grounded:!0,checkpoint:0,nextCheckpoint:0,pendingRespawnCheckpoint:null,checkpointMissWarned:!1,lap:0,finished:!1,finishTime:null,progress:0,globalProgress:0,routeLayer:0,routeChangeTimer:0,paceBoostTimer:0,punchCooldown:Math.random()*1,punchTimer:0,itemType:null,itemCooldown:0,boostTimer:0,shieldTimer:0,shieldHits:0,stunTimer:0,knockdownTimer:0,recoverTimer:0,downSide:Math.random()<.5?-1:1,itemHitCooldown:0,respawnTimer:0,respawnBlink:0,airPitch:0,airRoll:0,wheelSpin:0,pedalPhase:Math.random()*Math.PI*2,topSpeedReached:0,hits:0,baseTopSpeed:42,lastBoostAt:-99,prevProgress:0,trackDist:0,prevPosition:new z,lastRampAt:-99,lastRampId:-1,rampLaunchGrace:0,rubberbandCooldown:0,rubberbandWait:0,rubberbandTeleports:0,trailTimer:0,mudFxTimer:0,suspension:{frontCompression:0,rearCompression:0,frontVelocity:0,rearVelocity:0}};return h.animState=new xv(h),h.ragdoll=null,h}function g(x,f,v=ws){f.group.position.copy(f.position);const A=wi(f.velocity),M=yn(f.heading),h=(Number.isFinite(f.signedForwardSpeed)?f.signedForwardSpeed:f.velocity.x*M.x+f.velocity.z*M.z)/c*v;f.wheelSpin=Tt.euclideanModulo(f.wheelSpin+h+Math.PI,Math.PI*2)-Math.PI,f.pedalPhase+=(.9+A*.38+f.throttle*2.2)*v,f.frontWheel&&f.frontWheel.rotation.set(f.wheelSpin,0,0),f.rearWheel&&f.rearWheel.rotation.set(f.wheelSpin,0,0);const p=Tt.clamp(f.steer*.56,-.54,.54);if(f.handleBarRoot.rotation.y=p,f.forkPivot.rotation.y=p,f.crankRoot.rotation.x=f.pedalPhase,f.rearSwingPivot.rotation.x=Tt.clamp(Math.sin(f.pedalPhase*.5)*.08+f.brake*.05,-.22,.25),f.shockPivot.scale.y=Tt.lerp(f.shockPivot.scale.y,.92+Math.abs(Math.sin(f.pedalPhase))*.12,1-Math.exp(-v*8)),f.shieldOrbs){const rt=f.shieldTimer>0&&f.shieldHits>0;if(f.shieldOrbs.visible=rt,rt){const Rt=x.simTime*3,St=f.shieldOrbs.children;for(let G=0;G<St.length;G++){const at=St[G];if(G<f.shieldHits){at.visible=!0;const st=Rt+G*Math.PI*2/3,ht=1;at.position.set(Math.cos(st)*ht,1.2,Math.sin(st)*ht),at.rotation.y=-st;const dt=.7+Math.sin(x.simTime*6+G*2)*.15;at.material.opacity=dt,at.material.emissiveIntensity=.6+dt*.4}else at.visible=!1}}}const _=f.knockdownTimer>0,T=f.recoverTimer>0,w=Ge(x.activeLevel,f.position.x,f.position.z),R=yn(f.heading);if(f.grounded){const rt=t.copy(R).addScaledVector(w,-R.dot(w));rt.lengthSq()<1e-4&&rt.copy(R),rt.normalize();const Rt=e.crossVectors(w,rt).normalize();i.makeBasis(Rt,w,rt),o.setFromRotationMatrix(i);const St=_||T?0:Tt.clamp(-f.steer*A*.017,-.58,.58),G=_||T?0:Tt.clamp((f.boostTimer>0?.1:0)-f.brake*.18,-.24,.14);r.set(G,0,St),o.multiply(a.setFromEuler(r)),f.alignRoot.quaternion.slerp(o,1-Math.exp(-v*9)),f.airPitch=Fe(f.airPitch,0,5,v),f.airRoll=Fe(f.airRoll,0,5,v)}else o.setFromAxisAngle(new z(0,1,0),f.heading),o.multiply(a.setFromEuler(new Gn(f.airPitch,0,f.airRoll))),f.alignRoot.quaternion.slerp(o,1-Math.exp(-v*5.2));const C=f.ragdoll&&f.ragdoll.active,S=1.05,y=yn(f.heading),P={x:f.position.x+y.x*S,z:f.position.z+y.z*S},E={x:f.position.x-y.x*S,z:f.position.z-y.z*S},I=x.activeLevel.heightFn(P.x,P.z)+Mi,F=x.activeLevel.heightFn(E.x,E.z)+Mi;let L=f.grounded?Tt.clamp((I-f.position.y)*2.5,-.4,.4):-.2,D=f.grounded?Tt.clamp((F-f.position.y)*2.5,-.4,.4):-.2;const N=60,H=12,X=(L-f.suspension.frontCompression)*N,V=f.suspension.frontVelocity*H;f.suspension.frontVelocity+=(X-V)*v,f.suspension.frontCompression+=f.suspension.frontVelocity*v;const Z=(D-f.suspension.rearCompression)*N,$=f.suspension.rearVelocity*H;f.suspension.rearVelocity+=(Z-$)*v,f.suspension.rearCompression+=f.suspension.rearVelocity*v,f.frontWheel.position.y=f.suspension.frontCompression*.5;const xt=Tt.clamp(Math.sin(f.pedalPhase*.5)*.05,-.1,.1);f.rearSwingPivot.rotation.x=-f.suspension.rearCompression*.8+xt,f.shockPivot.scale.y=Tt.clamp(1-f.suspension.rearCompression*1.5,.5,1.2),f.animState.update(v,A,f.grounded,f.steer,f.throttle,f.brake,_,T);const yt=f.animState.pose,j=f.shieldTimer>0?.12:0,ot=-Math.max(0,f.suspension.rearCompression*.6),tt=f.suspension.frontCompression*.8,_t=.2+yt.armBasePitch+j+tt,mt=-.4-tt*1.2;if(!C){f.riderRoot.position.x=Fe(f.riderRoot.position.x,0,8,v),f.riderRoot.position.z=Fe(f.riderRoot.position.z,.15,8,v),f.riderRoot.position.y=1.12+yt.pelvisYOffset+ot,f.rig.spinePivot.rotation.x=yt.spinePitch,f.rig.neckPivot.rotation.x=yt.neckPitch,f.rig.headPivot.rotation.y=yt.headYaw,f.rig.headPivot.rotation.z=yt.headRoll,f.rig.leftShoulder.rotation.set(_t,.05,.15+tt*.2),f.rig.leftElbow.rotation.set(mt,.1,-.05),f.rig.leftWrist.rotation.set(-.2,0,-.2),f.rig.rightShoulder.rotation.set(_t,-.05,-.15-tt*.2),f.rig.rightElbow.rotation.set(mt,-.1,.05),f.rig.rightWrist.rotation.set(-.2,0,.2),f.animState.microSteerJitter!==0&&(f.handleBarRoot.rotation.y+=f.animState.microSteerJitter,f.rig.leftShoulder.rotation.x+=f.animState.microSteerJitter*.5,f.rig.rightShoulder.rotation.x-=f.animState.microSteerJitter*.5);const rt=f.punchTimer>0?Math.sin((1-f.punchTimer/dh)*Math.PI):0;if(rt>0?(f.rig.spinePivot.rotation.y=rt*.3,f.rig.rightShoulder.rotation.x=_t+rt*1.62,f.rig.rightShoulder.rotation.z=-.24-rt*.58,f.rig.rightElbow.rotation.x=-.74+rt*1.66,f.rig.rightWrist.rotation.x=.16+rt*.48,f.rig.leftShoulder.rotation.x=_t+rt*.42,f.rig.leftShoulder.rotation.z=.24+rt*.2):f.rig.spinePivot.rotation.y=0,rt===0&&f.gripL&&f.gripR){f.gripL.parent.updateWorldMatrix(!0,!1);const Rt=new z,St=new z;f.gripL.getWorldPosition(Rt),f.gripR.getWorldPosition(St),Rt.y+=.05,Rt.z+=.05,Rt.x-=.02,St.y+=.05,St.z+=.05,St.x+=.02,Mu(f.rig.leftShoulder,f.rig.leftElbow,f.rig.leftWrist,Rt,.38,.38,-1),Mu(f.rig.rightShoulder,f.rig.rightElbow,f.rig.rightWrist,St,.38,.38,1),f.rig.leftWrist.rotation.set(-.2,0,-.2),f.rig.rightWrist.rotation.set(-.2,0,.2)}}if(!C){const rt=Math.max(0,f.suspension.rearCompression*1.2),Rt=yt.legPower,St=f.pedalPhase;let G=Math.sin(St)*.76*Rt+.16,at=Math.sin(St+Math.PI)*.76*Rt+.16,st=Math.max(0,-Math.sin(St+.2))*1.04*Rt+.24,ht=Math.max(0,-Math.sin(St+Math.PI+.2))*1.04*Rt+.24;G-=rt*.8,at-=rt*.8,st+=rt*1.5,ht+=rt*1.5,f.rig.leftHip.rotation.x=G,f.rig.rightHip.rotation.x=at,f.rig.leftKnee.rotation.x=st,f.rig.rightKnee.rotation.x=ht,f.rig.leftAnkle.rotation.x=Tt.lerp(f.rig.leftAnkle.rotation.x,-G*.54+.18+rt*.4,1-Math.exp(-v*12)),f.rig.rightAnkle.rotation.x=Tt.lerp(f.rig.rightAnkle.rotation.x,-at*.54+.18+rt*.4,1-Math.exp(-v*12))}if(_){const rt=1-Math.exp(-v*18);f.bikeRoot.rotation.z=Tt.lerp(f.bikeRoot.rotation.z,f.downSide*1.05,rt),f.bikeRoot.rotation.x=Tt.lerp(f.bikeRoot.rotation.x,-.85,rt),C||(f.riderRoot.rotation.z=Tt.lerp(f.riderRoot.rotation.z,f.downSide*.9,rt),f.riderRoot.rotation.x=Tt.lerp(f.riderRoot.rotation.x,-.75,rt))}else T?(f.bikeRoot.rotation.x=Fe(f.bikeRoot.rotation.x,0,5.5,v),f.bikeRoot.rotation.z=Fe(f.bikeRoot.rotation.z,0,5.5,v),C||(f.riderRoot.rotation.x=Fe(f.riderRoot.rotation.x,0,5.5,v),f.riderRoot.rotation.z=Fe(f.riderRoot.rotation.z,0,5.5,v))):(C||(f.riderRoot.rotation.x=Fe(f.riderRoot.rotation.x,0,7,v),f.riderRoot.rotation.z=Fe(f.riderRoot.rotation.z,0,7,v)),f.bikeRoot.rotation.x=Fe(f.bikeRoot.rotation.x,0,7,v),f.bikeRoot.rotation.z=Fe(f.bikeRoot.rotation.z,0,7,v));f.group.visible=f.respawnTimer>0?Math.floor(f.respawnBlink)%2===0:!0}return{spawnRacers:u,updateRacerVisual:g}}function vv({settings:n,fx:t,setRaceMessage:e,tempVec3A:i}){function o(l,u,m){let g=null,x=-1;const f=yn(u.heading);for(const v of l.racers){if(v===u||v.respawnTimer>0)continue;i.copy(v.position).sub(u.position),i.y=0;const A=i.length();if(A>m||A<.2)continue;i.normalize();const M=i.dot(f);if(M<-.2)continue;const d=(1-A/m)*.8+(M+1)*.2;d>x&&(x=d,g=v)}return g}function r(l,u){if(u.punchCooldown>0||u.respawnTimer>0||u.knockdownTimer>0)return!1;u.punchCooldown=1.25,u.punchTimer=dh;const m=yn(u.heading);let g=0;for(const x of l.racers){if(x===u||x.respawnTimer>0||x.knockdownTimer>0)continue;i.copy(x.position).sub(u.position),i.y=0;const f=i.length();if(f<.2||f>2.2||(i.normalize(),i.dot(m)<-.28))continue;const v=5.2+wi(u.velocity)*.16;x.velocity.addScaledVector(i,v),x.velocity.y+=2.7,a(l,x,i,.62,!0),g+=1,t.spawnBurst(l,x.position,16752527,11,.9,5.2)}return t.playPunchSound(l,g>0),u.isPlayer&&l.state===ce.RACING&&e(l,g>0?`拳击命中 x${g}`:"挥空",g>0?.72:.42),g>0&&(u.hits+=g,u.paceBoostTimer=1.2,u.isPlayer&&n.shake&&(l.cameraShake=Math.max(l.cameraShake,.42))),g>0}function a(l,u,m,g=1,x=!1){if(u.finished||u.respawnTimer>0)return;if(u.ragdoll&&u.knockdownTimer<=0&&u.ragdoll.activate(u.velocity),t.spawnBurst(l,u.position,16737843,14,1,5.5),t.playHitSound(l),u.shieldTimer>0&&u.shieldHits>0){u.shieldHits-=1,u.stunTimer=Math.max(u.stunTimer,.22*g),u.itemHitCooldown=Math.max(u.itemHitCooldown,le.itemHitImmunity*.6),u.grounded=!1,u.velocity.addScaledVector(m,2.2*g),u.velocity.y=Math.max(u.velocity.y,1.1+g*.9),t.spawnBurst(l,u.position,16766287,12,1,4.5),t.playHitSound(l),u.isPlayer&&n.shake&&(l.cameraShake=Math.max(l.cameraShake,.18*g)),u.shieldHits<=0&&(u.shieldTimer=0,t.spawnBurst(l,u.position,16737843,18,1.4,6));return}const f=le.knockdownDuration*Tt.clamp(g,.75,1.35);u.knockdownTimer=Math.max(u.knockdownTimer,f),u.recoverTimer=Math.max(u.recoverTimer,le.knockdownRecoverDuration),u.stunTimer=Math.max(u.stunTimer,.65),u.itemHitCooldown=Math.max(u.itemHitCooldown,le.itemHitImmunity),u.downSide=m.x>=0?1:-1,u.grounded=!1,u.velocity.addScaledVector(m,4.8*g),u.velocity.y=Math.max(u.velocity.y,2.5+g*1.6),t.spawnBurst(l,u.position,16755350,18,1.2,5.8),u.isPlayer&&l.state===ce.RACING&&e(l,"被击倒!",1.15),u.isPlayer&&n.shake&&(l.cameraShake=Math.max(l.cameraShake,.7*g)),x&&(u.hits=Math.max(0,u.hits-0))}function c(l){for(let u=0;u<l.racers.length;u+=1){const m=l.racers[u];if(!(m.respawnTimer>0))for(let g=u+1;g<l.racers.length;g+=1){const x=l.racers[g];if(x.respawnTimer>0)continue;const f=m.position.x-x.position.x,v=m.position.z-x.position.z,A=f*f+v*v,M=1.08;if(A>=M*M)continue;const d=Math.sqrt(Math.max(1e-4,A)),h=f/d,p=v/d,_=M-d;m.position.x+=h*_*.5,m.position.z+=p*_*.5,x.position.x-=h*_*.5,x.position.z-=p*_*.5;const T=(m.velocity.x-x.velocity.x)*h+(m.velocity.z-x.velocity.z)*p;if(T<0){const w=-T*.12;m.velocity.x+=h*w,m.velocity.z+=p*w,x.velocity.x-=h*w,x.velocity.z-=p*w}}}}return{applyKnockdown:a,findBestPunchTarget:o,tryPunch:r,resolveRacerContacts:c}}function Mv({fx:n,setRaceMessage:t,tempVec3A:e,tempVec3B:i,tempVec3C:o,tempVec3D:r,applyKnockdown:a,isCheckpointTriggered:c}){const l=Array.from(new Set(eo)),u=3,m=[];for(let E=0;E<u;E+=1)m.push(...l);const g=m.length;function x(E){if(g===0){E.itemTypeBag=[],E.itemTypeBagCursor=0;return}const I=typeof E.itemTypeRng=="function"?E.itemTypeRng:Math.random,F=m.slice();for(let L=F.length-1;L>0;L-=1){const D=Math.floor(I()*(L+1));[F[L],F[D]]=[F[D],F[L]]}E.itemTypeBag=F,E.itemTypeBagCursor=0}function f(E,I){if(l.length===0)return"turbo";(!Array.isArray(E.itemTypeBag)||E.itemTypeBag.length!==g)&&x(E);let F=Math.max(0,Math.floor(E.itemTypeBagCursor??0));F>=E.itemTypeBag.length&&(x(E),F=0);let L=F;for(;L<E.itemTypeBag.length&&I.has(E.itemTypeBag[L]);)L+=1;if(L>=E.itemTypeBag.length){for(x(E),F=0,L=0;L<E.itemTypeBag.length&&I.has(E.itemTypeBag[L]);)L+=1;L>=E.itemTypeBag.length&&(L=0)}if(L!==F){const N=E.itemTypeBag[F];E.itemTypeBag[F]=E.itemTypeBag[L],E.itemTypeBag[L]=N}const D=E.itemTypeBag[F]??l[F%l.length];return E.itemTypeBagCursor=F+1,D}function v(E,I){const F=I?.crates?.length??0;if(F<=0)return[];const L=new Set,D=[];for(let N=0;N<F;N+=1){const H=f(E,L);L.add(H),D.push(H)}return D}function A(E,I){const F=E.player,L=F&&!F.finished?F.nextCheckpoint:-1;for(const D of E.checkpointMeshes){const N=D.index===L,H=F?c(E,F,D.index):!1;D.pulse+=I*(N?7.2:2.1);let X=9357055,V=5215198,Z=.52,$=.16,xt=1+Math.sin(D.pulse*.4)*.03,yt=.5,j=-.36;if(H)X=4148319,V=2765890,Z=.24,$=.1,xt=.98,yt=.22,j=-.16;else if(N){const ot=.74+(Math.sin(D.pulse)*.5+.5)*.36;X=8388584,V=5689343,Z=.72*ot,$=.28*ot,xt=1+Math.sin(D.pulse)*.12,yt=1.12,j=-.82}D.core.material.color.setHex(X),D.aura.material.color.setHex(V),D.core.material.opacity=Z,D.aura.material.opacity=$,D.core.scale.setScalar(xt),D.aura.scale.setScalar(1.04+(xt-1)*.65),D.core.rotation.z+=I*yt,D.aura.rotation.z+=I*j}d(E,I);for(const D of E.itemCrates){if(D.spin+=I*(D.anim?.spinSpeed??1.8),!D.active||D.collected){D.mesh.visible=!1;continue}D.mesh.visible=!0,D.mesh.rotation.y=D.spin;const N=Math.sin(E.simTime*(D.anim?.pulseSpeed??3.2)+D.spin)*(D.anim?.floatAmp??.18);if(D.mesh.position.y=D.basePos.y+N,D.core&&(D.core.rotation.x+=I*.75,D.core.rotation.y+=I*((D.anim?.spinSpeed??1.8)*.7)),D.halo){D.halo.rotation.z+=I*(D.anim?.ringSpeed??.9);const H=1+Math.sin(E.simTime*3.8+D.spin)*.08;D.halo.scale.setScalar(H)}}}function M(E,I){if(!I?.crates?.length)return;const F=v(E,I);I.remaining=I.crates.length,I.active=!0,I.respawnTimer=0,E.activeItemWave=I.index;for(const L of I.crates)L.active=!0,L.collected=!1,L.type=F?.[L.laneSlot]??L.type??eo[L.itemIndex%eo.length],L.syncVisualType?.(L.type),L.mesh.visible=!0}function d(E,I){if(!E.itemWaves?.length)return;const F=E.itemWaveAdvanceDelay??le.itemWaveAdvanceDelay;if(!E.itemWavesInitialized){for(const L of E.itemWaves)M(E,L);E.itemWavesInitialized=!0;return}for(const L of E.itemWaves)if(L){if(L.active){if((L.remaining??L.crates.length)<=0){L.active=!1,L.respawnTimer=F;for(const D of L.crates)D.active=!1,D.mesh.visible=!1}continue}(L.respawnTimer??0)>0&&(L.respawnTimer=Math.max(0,L.respawnTimer-I),L.respawnTimer<=0&&M(E,L))}}function h(E){const I=new wt;if(E==="banana"){const F=new k(new Pn(.22,.06,10,22,Math.PI*1.24),new Y({color:16245088,emissive:8416534,emissiveIntensity:.62,roughness:.42,metalness:.08}));F.rotation.z=Math.PI*.52;const L=new k(new Nn(.05,.12,8),new Y({color:16774072,roughness:.38,metalness:.06}));L.position.set(.16,.16,0),I.add(F,L)}else{const F=new k(new en(.24,14,14),new Y({color:4146770,emissive:2041136,emissiveIntensity:.55,roughness:.34,metalness:.5})),L=new k(new At(.02,.02,.14,8),new Y({color:16758651,emissive:8338463,emissiveIntensity:.62,roughness:.3,metalness:.18}));L.position.y=.18,I.add(F,L)}return I.traverse(F=>{F.isMesh&&(F.castShadow=!0,F.receiveShadow=!0)}),I}function p(E){const I=new wt;if(E==="banana"){const F=new k(new Pn(.32,.07,10,24,Math.PI*1.2),new Y({color:16508265,emissive:9139232,emissiveIntensity:.65,roughness:.46,metalness:.06}));F.rotation.z=Math.PI*.5,F.rotation.x=-.35;const L=new k(new Ms(.4,.54,24),new Ni({color:16770959,transparent:!0,opacity:.5,side:Cn}));L.rotation.x=-Math.PI/2,L.position.y=.02,I.add(F,L),I.userData.warning=L}else if(E==="bomb"){const F=new k(new en(.28,16,16),new Y({color:4410713,emissive:2370614,emissiveIntensity:.6,roughness:.3,metalness:.52}));F.position.y=.2;const L=new k(new Ms(.5,.68,28),new Ni({color:16752236,transparent:!0,opacity:.56,side:Cn}));L.rotation.x=-Math.PI/2,L.position.y=.03,I.add(F,L),I.userData.warning=L}else{const F=new k(new At(.24,.26,.18,12),new Y({color:11439737,roughness:.55,metalness:.15}));F.position.y=.1;const L=new k(new Ms(.36,.5,22),new Ni({color:16753527,transparent:!0,opacity:.45,side:Cn}));L.rotation.x=-Math.PI/2,L.position.y=.02,I.add(F,L),I.userData.warning=L}return I.traverse(F=>{F.isMesh&&(F.castShadow=!0,F.receiveShadow=!0)}),I}function _(E,I){let F=null,L=Number.POSITIVE_INFINITY;const D=yn(I.heading);for(const N of E.racers){if(N===I||N.finished||N.respawnTimer>0||N.knockdownTimer>0)continue;e.copy(N.position).sub(I.position).setY(0);const H=e.length();if(H<.4||H>60)continue;e.multiplyScalar(1/H);const X=e.dot(D);if(X<0)continue;const Z=(1-X)*20+H;Z<L&&(L=Z,F=N)}return F}function T(E,I,F){const L=I[F];L?.mesh&&E.fxRoot.remove(L.mesh),I.splice(F,1)}function w(E,I,F,L,D=!1){const N=p(I),H=E.activeLevel.heightFn(F.x,F.z)+.01;N.position.set(F.x,H,F.z),E.fxRoot.add(N);const X=I==="banana"?le.bananaHazardLife:I==="bomb"?le.bombHazardLife:le.trapHazardLife,V=I==="banana"?le.bananaHazardRadius:I==="bomb"?le.bombBlastRadius*.55:le.trapHazardRadius;E.groundHazards.push({type:I,mesh:N,ownerId:L,life:X,radius:V,armTimer:D?.22:.36,ownerSafeTimer:D?.28:.9,spin:Math.random()*Math.PI*2,fromTracking:D})}function R(E,I,F,L){const D=h(F),N=I.position.clone().add(new z(0,1.18,0));D.position.copy(N),E.fxRoot.add(D);const H=L?e.copy(L.position).sub(N).setY(.4).normalize():yn(I.heading).clone().setY(.1).normalize(),X=le.itemProjectileSpeed*(F==="banana"?.92:1.04);E.itemProjectiles.push({type:F,ownerId:I.id,targetId:L?.id??null,mesh:D,position:N,velocity:H.multiplyScalar(X),speed:X,turnRate:le.itemProjectileTurnRate*(F==="banana"?.86:1.06),life:F==="banana"?le.bananaProjectileLife:le.bombProjectileLife,hitRadius:F==="banana"?1:1.25,trailTimer:0})}function C(E,I,F){if(n.spawnBurst(E,I,16771264,35,2.4,12),n.spawnBurst(E,I,16746547,28,3,9),n.spawnBurst(E,I,16729088,22,4.5,7),n.spawnBurst(E,I,5592405,16,2.8,4),n.spawnBurst(E,I,16772676,12,1.6,14),n.playExplosionSound(E),E.player){const N=Math.sqrt(zn(I.x,I.z,E.player.position.x,E.player.position.z));if(N<le.bombBlastRadius*2){const H=Tt.clamp(1.2*(1-N/(le.bombBlastRadius*2)),.2,1.2);E.cameraShake=Math.max(E.cameraShake,H)}}const L=E.racers.find(N=>N.id===F)??null;let D=0;for(const N of E.racers){if(N.respawnTimer>0||N.knockdownTimer>0)continue;const H=Math.sqrt(zn(I.x,I.z,N.position.x,N.position.z));if(H>le.bombBlastRadius||N.itemHitCooldown>0)continue;const X=1-H/le.bombBlastRadius,V=Tt.clamp(.72+X*.92,.72,1.46);i.copy(N.position).sub(I).setY(0),i.lengthSq()<1e-4&&i.set(1e-4,0,1),i.normalize(),N.itemHitCooldown=le.itemHitImmunity,a(E,N,i,V,!0),L&&N!==L&&(D+=1)}L&&D>0&&(L.hits+=D)}function S(E,I){if(E.itemProjectiles?.length)for(let F=E.itemProjectiles.length-1;F>=0;F-=1){const L=E.itemProjectiles[F];L.life-=I,L.trailTimer-=I;const D=L.targetId!=null?E.racers.find(H=>H.id===L.targetId&&H.respawnTimer<=0&&!H.finished):null;if(D?(e.copy(D.position).sub(L.position).setY(.1),e.lengthSq()>1e-4&&(e.normalize(),i.copy(L.velocity).normalize().lerp(e,Tt.clamp(L.turnRate*I,0,1)).normalize(),L.velocity.copy(i.multiplyScalar(L.speed)))):L.velocity.lengthSq()>1e-4&&(i.copy(L.velocity).normalize().multiplyScalar(L.speed),L.velocity.copy(i)),L.velocity.y-=(L.type==="banana"?6.5:2.5)*I,L.position.addScaledVector(L.velocity,I),L.mesh.position.copy(L.position),L.mesh.rotation.y+=I*(L.type==="banana"?7.2:5.4),L.mesh.rotation.z+=I*(L.type==="banana"?3.8:2.8),L.trailTimer<=0&&(L.trailTimer=L.type==="banana"?.1:.08,n.spawnBurst(E,L.position,L.type==="banana"?16771203:16751471,L.type==="banana"?3:4,.3,1.8)),D&&Math.sqrt(zn(L.position.x,L.position.z,D.position.x,D.position.z))<=L.hitRadius&&D.itemHitCooldown<=0){if(L.type==="banana"){o.copy(D.position).sub(L.position).setY(0),o.lengthSq()<1e-4&&o.set(1e-4,0,1),o.normalize(),D.itemHitCooldown=le.itemHitImmunity,a(E,D,o,.9,!0);const X=E.racers.find(V=>V.id===L.ownerId);X&&X!==D&&(X.hits+=1),n.spawnBurst(E,D.position,16771718,16,1.1,5.6),n.playHitSound(E),T(E,E.itemProjectiles,F);continue}C(E,L.position,L.ownerId),T(E,E.itemProjectiles,F);continue}const N=E.activeLevel.heightFn(L.position.x,L.position.z)+.05;(L.position.y<=N||L.life<=0)&&(L.type==="bomb"?(L.position.y=N,C(E,L.position,L.ownerId)):w(E,"banana",L.position,L.ownerId,!0),T(E,E.itemProjectiles,F))}if(E.groundHazards?.length)for(let F=E.groundHazards.length-1;F>=0;F-=1){const L=E.groundHazards[F];if(L.life-=I,L.armTimer-=I,L.ownerSafeTimer-=I,L.spin+=I*(L.type==="banana"?1.3:2.2),L.mesh.rotation.y=L.spin,L.mesh.userData.warning){const N=.34+(Math.sin(E.simTime*(L.type==="bomb"?12:7))*.5+.5)*.46;L.mesh.userData.warning.material.opacity=N}if(L.life<=0){L.type==="bomb"&&C(E,L.mesh.position,L.ownerId),T(E,E.groundHazards,F);continue}if(L.armTimer>0)continue;let D=!1;for(const N of E.racers)if(!(N.respawnTimer>0||N.knockdownTimer>0||N.id===L.ownerId&&L.ownerSafeTimer>0||N.itemHitCooldown>0||Math.sqrt(zn(L.mesh.position.x,L.mesh.position.z,N.position.x,N.position.z))>L.radius)){if(N.itemHitCooldown=le.itemHitImmunity,r.copy(N.position).sub(L.mesh.position).setY(0),r.lengthSq()<1e-4&&r.set(1e-4,0,1),r.normalize(),L.type==="bomb")C(E,L.mesh.position,L.ownerId);else if(L.type==="banana"){a(E,N,r,.82,!0);const X=E.racers.find(V=>V.id===L.ownerId);X&&X!==N&&(X.hits+=1),n.spawnBurst(E,N.position,16772244,14,1,4.8),n.playHitSound(E)}else{a(E,N,r,.92,!0);const X=E.racers.find(V=>V.id===L.ownerId);X&&X!==N&&(X.hits+=1),n.spawnBurst(E,N.position,16759436,14,1,4.8),n.playHitSound(E)}D=!0;break}D&&T(E,E.groundHazards,F)}}function y(E,I){for(const F of E.itemCrates){if(!F.active||F.collected||I.itemType||zn(I.position.x,I.position.z,F.mesh.position.x,F.mesh.position.z)>F.radius*F.radius)continue;I.itemType=F.type??eo[F.itemIndex%eo.length],F.collected=!0,F.active=!1,F.mesh.visible=!1;const D=E.itemWaves?.[F.waveIndex];if(D&&(D.remaining=Math.max(0,(D.remaining??D.crates.length)-1),D.remaining<=0&&D.active)){D.active=!1,D.respawnTimer=E.itemWaveAdvanceDelay??le.itemWaveAdvanceDelay;for(const N of D.crates)N.active=!1,N.mesh.visible=!1}if(I.isPlayer&&E.state===ce.RACING){const N=I.itemType==="shield"?16766842:I.itemType==="banana"?16771986:I.itemType==="bomb"?16754810:I.itemType==="trap"?16760206:9435391;t(E,`获得道具: ${Tc(I.itemType)}`,.9),n.playPickupSound(E),n.spawnBurst(E,F.mesh.position,N,14,.9,4.6)}}}function P(E,I){if(!I.itemType||I.itemCooldown>0||I.respawnTimer>0)return!1;const F=I.itemType;I.itemType=null,I.itemCooldown=1;const L=yn(I.heading);if(F==="turbo")I.velocity.addScaledVector(L,14.5),I.boostTimer=Math.max(I.boostTimer,1.35),n.spawnBurst(E,I.position,9436415,16,1.2,6.6),n.playBoostSound(E);else if(F==="bash"){let D=0;for(const N of E.racers){if(N===I||N.respawnTimer>0||N.knockdownTimer>0)continue;e.copy(N.position).sub(I.position),e.y=0;const H=e.length();H>4.6||H<.2||(e.normalize(),!(e.dot(L)<.02)&&(N.velocity.addScaledVector(e,10.5),N.velocity.y+=3.4,a(E,N,e,1.15,!0),D+=1))}D>0&&(I.hits+=D),n.spawnBurst(E,I.position,16756879,18,1.3,6.8),n.playHitSound(E)}else if(F==="shock"){let D=0;for(const N of E.racers)N===I||N.respawnTimer>0||N.knockdownTimer>0||Math.sqrt(zn(I.position.x,I.position.z,N.position.x,N.position.z))>6.2||(e.copy(N.position).sub(I.position).setY(0).normalize(),N.velocity.addScaledVector(e,7.4),N.stunTimer=Math.max(N.stunTimer,1.35),a(E,N,e,.72,!1),D+=1);D>0&&(I.hits+=D),n.spawnBurst(E,I.position,9559551,24,1.6,7.8),n.playShockSound(E);for(const N of E.racers){if(N===I||N.respawnTimer>0||N.knockdownTimer>0)continue;Math.sqrt(zn(I.position.x,I.position.z,N.position.x,N.position.z))<=6.2&&n.spawnBurst(E,N.position,4508927,14,1.2,5.5)}}else if(F==="shield")I.shieldTimer=10,I.shieldHits=3,I.boostTimer=Math.max(I.boostTimer,.7),n.spawnBurst(E,I.position,16767355,26,1.5,5.4),n.playPickupSound(E);else if(F==="trap"){const D=I.position.clone().addScaledVector(L,-2.7);w(E,"trap",D,I.id,!1),n.spawnBurst(E,D,16758408,14,.9,3.8),n.playPickupSound(E)}else if(F==="banana"){const D=_(E,I);R(E,I,"banana",D),n.spawnBurst(E,I.position.clone().addScaledVector(L,1.1),16771722,8,.7,3.1),n.playPickupSound(E)}else if(F==="bomb"){const D=_(E,I);R(E,I,"bomb",D),n.spawnBurst(E,I.position.clone().addScaledVector(L,1.1),16753786,10,.8,3.6),n.playHitSound(E)}return I.isPlayer&&E.state===ce.RACING&&t(E,`使用道具: ${Tc(F)}`,.72),!0}return{animateCheckpointAndItems:A,tryCollectItem:y,useItem:P,updateItemEffects:S}}function wv({ui:n,fx:t,setRaceMessage:e,tempVec3A:i,tempVec3B:o}){function r(d,h,p){if(!h)return!1;if(d.activeLevel.loop){const _=h.nextCheckpoint??0;return _===0?!1:p<_}return p<=h.checkpoint}function a(d,h,p=1.2){n.countdown&&(n.countdown.textContent=h,d.checkpointAlertTimer=Math.max(d.checkpointAlertTimer??0,p))}function c(d){const h=le.checkpointMissDistanceScaleByLevel??{},p=Number.isFinite(h[d])?h[d]:Number.isFinite(h.default)?h.default:1;return{warn:le.checkpointMissWarnDistance*p,respawn:le.checkpointMissRespawnDistance*p,reset:le.checkpointMissResetDistance*p}}function l(d){const h=le.checkpointProjectionSegmentRadiusByLevel??{},p=le.checkpointProjectionSegmentRadius,_=Number.isFinite(h[d])?h[d]:Number.isFinite(h.default)?h.default:p;return Math.max(1,Math.floor(_))}function u(d){return Array.isArray(d.checkpointMeshes)?d.checkpointMeshes.length:0}function m(d,h){if(d.countdownTimer-=h,d.countdownTimer>0){n.countdown.textContent=String(Math.ceil(d.countdownTimer));return}if(d.countdownTimer>-.85){n.countdown.textContent="GO!",d.readyGoPlayed||(d.readyGoPlayed=!0,e(d,"比赛开始！",1.2),t.playStartSound(d));return}d.state=ce.RACING,n.countdown.textContent=""}function g(d,h){if(h.finished)return;const p=u(d);if(p<=0)return;const _=d.checkpointMeshes[h.nextCheckpoint];if(!_)return;const T=h.prevProgress??h.progress,w=fs(d.activeLevel,T,h.progress);if(w<-2||w>65||h.trackDist>d.activeLevel.routeHalfWidth*1.62)return;const R=fs(d.activeLevel,T,_.s),C=fs(d.activeLevel,h.progress,_.s),S=R>0&&C<=0&&w>=-.2;i.copy(h.prevPosition).sub(_.point),o.copy(h.position).sub(_.point);const y=i.dot(_.forward),P=o.dot(_.forward),E=i.dot(_.right),I=o.dot(_.right),F=P-y;let L=I;if(Math.abs(F)>1e-4){const V=Tt.clamp((0-y)/F,0,1);L=Tt.lerp(E,I,V)}const D=y<=.9&&P>=-.9&&Math.abs(L)<=_.gateHalfWidth,N=Math.abs(I)<=_.gateHalfWidth*1.08&&Math.abs(P)<=_.captureDepth&&zn(h.position.x,h.position.z,_.point.x,_.point.z)<=_.captureRadiusSq,H=h.trackDist<=d.activeLevel.routeHalfWidth*2.1;(S&&H||D||N)&&(h.checkpoint=h.nextCheckpoint,h.pendingRespawnCheckpoint=null,h.checkpointMissWarned=!1,d.activeLevel.loop?(h.nextCheckpoint=(h.nextCheckpoint+1)%p,h.nextCheckpoint===0&&(h.lap+=1),h.lap>=1&&(h.finished=!0,h.finishTime=d.raceElapsed,h.globalProgress=d.activeLevel.totalLength*h.lap)):(h.nextCheckpoint+=1,h.nextCheckpoint>=p&&(h.finished=!0,h.finishTime=d.raceElapsed,h.nextCheckpoint=p-1,h.globalProgress=d.activeLevel.totalLength)),h.isPlayer&&d.state===ce.RACING&&(n.countdown.textContent="",d.checkpointAlertTimer=0,e(d,"CHECKPOINT!",.68),t.playCheckpointSound(d),t.spawnBurst(d,h.position,10813425,14,1,4.8)))}function x(d,h){if(d.state!==ce.RACING||h.finished||h.respawnTimer>0)return;const p=d.checkpointMeshes[h.nextCheckpoint];if(!p)return;const _=Math.max(0,fs(d.activeLevel,p.s,h.progress));if(zn(h.position.x,h.position.z,p.point.x,p.point.z)<=p.captureRadiusSq*1.6){h.checkpointMissWarned=!1;return}const w=c(d.activeLevel.id);if(_>=w.warn&&!h.checkpointMissWarned&&(h.checkpointMissWarned=!0,a(d,"错过检查点！",1.1),e(d,"请返回上一个检查点",1.2)),_>=w.respawn){h.checkpointMissWarned=!1,a(d,"强制回拉",1.2),f(d,h,"checkpoint_missed",h.checkpoint);return}_<=w.reset&&(h.checkpointMissWarned=!1)}function f(d,h,p,_=null){h.respawnTimer>0||(h.respawnTimer=1.08,h.pendingRespawnCheckpoint=Number.isInteger(_)&&_>=0?_:null,h.velocity.set(0,0,0),h.knockdownTimer=0,h.recoverTimer=0,h.stunTimer=0,h.itemHitCooldown=0,h.mudFxTimer=0,h.checkpointMissWarned=!1,h.isPlayer&&d.state!==ce.MENU&&(e(d,`${p}，正在复位`,1.05),t.playRespawnSound(d)))}function v(d,h){const p=Math.max(1,u(d)),_=p-1,w=(Number.isInteger(h.pendingRespawnCheckpoint)&&h.pendingRespawnCheckpoint>=0?Tt.clamp(h.pendingRespawnCheckpoint,0,_):null)??A(d,h);h.pendingRespawnCheckpoint=null,h.checkpointMissWarned=!1,h.checkpoint=w,h.nextCheckpoint=d.activeLevel.loop?(w+1)%p:Math.min(w+1,p-1);const R=d.checkpointMeshes[w],C=R?.point??d.activeLevel.pathPoints[0],S=R?.forward?.clone()??yn(h.heading);S.lengthSq()<1e-4&&S.set(0,0,1);const y=Math.atan2(S.x,S.z),P=R?.right?.clone()??i.set(S.z,0,-S.x),E=h.isPlayer?0:Tt.randFloatSpread(2.3);h.position.copy(C).addScaledVector(P,E),h.position.y=d.activeLevel.heightFn(h.position.x,h.position.z)+Mi,h.heading=y,h.velocity.set(S.x*1.2,0,S.z*1.2),h.grounded=!0;const I=si(d.activeLevel,h.position.x,h.position.z);h.progress=I.s,h.prevProgress=I.s,h.trackDist=Math.sqrt(I.distSq),h.globalProgress=d.activeLevel.loop?h.lap*d.activeLevel.totalLength+h.progress:h.progress,h.prevPosition.copy(h.position),h.airPitch=0,h.airRoll=0,h.lastRampAt=-99,h.lastRampId=-1,h.rampLaunchGrace=0,h.itemHitCooldown=0,h.mudFxTimer=0,h.respawnTimer=0,h.group.visible=!0}function A(d,h){const p=u(d);if(p<=0)return 0;const _=si(d.activeLevel,h.position.x,h.position.z).s;let T=h.checkpoint,w=Number.POSITIVE_INFINITY;for(let R=0;R<p;R+=1){const C=d.checkpointMeshes[R];if(!C)continue;const S=C.point,y=C.s??0,P=Math.abs(fs(d.activeLevel,_,y)),E=zn(h.position.x,h.position.z,S.x,S.z),I=P*P+E*.014;I<w&&(w=I,T=R)}return T}function M(d,h){if(!(!d.player||d.state!==ce.RACING)&&!(d.raceElapsed<14)&&(d.packPressureTimer+=h,!(d.packPressureTimer<2.8))){d.packPressureTimer=0;for(const p of d.racers){if(p.isPlayer||p.respawnTimer>0||p.finished||p.rubberbandCooldown>0)continue;const _=p.globalProgress-d.player.globalProgress,T=Math.abs(_);if(T<220)continue;p.rubberbandWait+=2.8;const w=p.profile?.key==="Racer"?8.5:6.8;if(p.rubberbandWait<w)continue;const R=p.profile?.key==="Trickster"?3:2;if(p.rubberbandTeleports>=R&&T<340)continue;const C=Tt.clamp((T-220)/240,.18,.68);if(Math.random()>C)continue;const S=_<0?Tt.randFloat(28,52):Tt.randFloat(-52,-28),y=Ke(d.activeLevel,d.player.globalProgress+S),P=Ge(d.activeLevel,y.point.x,y.point.z);p.position.copy(y.point).addScaledVector(P,.1),p.position.y=d.activeLevel.heightFn(p.position.x,p.position.z)+Mi,p.heading=Math.atan2(y.forward.x,y.forward.z),p.velocity.set(y.forward.x*11.5,0,y.forward.z*11.5);const E=si(d.activeLevel,p.position.x,p.position.z);p.progress=E.s,p.prevProgress=E.s,p.trackDist=Math.sqrt(E.distSq),p.globalProgress=d.activeLevel.loop?p.lap*d.activeLevel.totalLength+p.progress:p.progress,p.prevPosition.copy(p.position);const I=A(d,p),F=Math.max(1,u(d));p.checkpoint=I,p.nextCheckpoint=d.activeLevel.loop?(I+1)%F:Math.min(I+1,F-1),p.rubberbandCooldown=11+Math.random()*5,p.rubberbandWait=0,p.rubberbandTeleports+=1}}}return{isCheckpointTriggered:r,updateReady:m,showCheckpointAlert:a,getCheckpointMissThresholds:c,getProjectionSegmentRadius:l,getCheckpointCount:u,checkCheckpointsAndFinish:g,enforceCheckpointRecovery:x,triggerRespawn:f,doRespawn:v,nearestCheckpointIndex:A,updatePackPressure:M}}function yv({input:n,settings:t,tempVec3A:e,tempVec3B:i,tempVec3C:o}){function r(c,l,u){const m=n.forward,g=n.brake,x=yn(l.heading),f=l.velocity.x*x.x+l.velocity.z*x.z;l.signedForwardSpeed=f,l.driveMode==="reverse"?(!g||m||f>le.reverseExitSpeed)&&(l.driveMode="forward",l.reverseHoldTimer=0):g&&!m?f<=le.reverseEntrySpeed?(l.reverseHoldTimer+=u,l.reverseHoldTimer>=le.reverseEngageDelay&&(l.driveMode="reverse")):l.reverseHoldTimer=0:(l.driveMode="forward",l.reverseHoldTimer=0),l.throttle=m&&!g?1:0,l.reverseThrottle=l.driveMode==="reverse"?1:0,l.brake=g&&l.driveMode!=="reverse"?1:0,l.reverseThrottle>0&&(l.throttle=0),(l.knockdownTimer>0||l.recoverTimer>0)&&(l.throttle=0,l.reverseThrottle=0,l.brake=0);const v=(n.right?1:0)-(n.left?1:0);l.targetSteer=v*t.sensitivity;const A=wi(l.velocity),M=Ke(c.activeLevel,l.progress+10+Math.min(A*.42,16)),d=Math.atan2(M.forward.x,M.forward.z),h=Fr(l.heading,d),p=Math.abs(v)>.01?.16:.34;l.targetSteer+=Tt.clamp(h*1.15,-.42,.42)*p,l.targetSteer=Tt.clamp(l.targetSteer,-1.25,1.25),(l.knockdownTimer>0||l.recoverTimer>0)&&(l.targetSteer=0)}function a(c,l,u,m,{tryPunch:g,useItem:x,findBestPunchTarget:f}){if(!l.profile)return;if(l.finished&&!m){l.throttle=0,l.reverseThrottle=0,l.brake=.45,l.driveMode="forward",l.reverseHoldTimer=0,l.targetSteer=0;return}const v=c.activeLevel,A=wi(l.velocity);if(l.routeChangeTimer-=u,l.routeChangeTimer<=0){l.routeChangeTimer=.8+Math.random()*1.6;const P=v.routeLayers;if(l.profile.key==="Racer")l.routeLayer=P[Math.floor(Math.random()*3)]??0;else if(l.profile.key==="Aggressive"){const E=Math.random()<.55?P[P.length-1]:P[Math.floor(Math.random()*P.length)];l.routeLayer=(Math.random()<.5?-1:1)*Math.abs(E??0)}else l.routeLayer=P[Math.floor(Math.random()*P.length)]}const M=14+Math.min(A,34)*.78,d=Ke(v,l.progress+M),h=Ge(v,d.point.x,d.point.z),p=e.crossVectors(h,d.forward).normalize();i.copy(d.point).addScaledVector(p,l.routeLayer);let _=0;for(const P of c.obstacles){const E=P.x-l.position.x,I=P.z-l.position.z,F=E*E+I*I;if(F>256)continue;o.set(E,0,I);const L=Math.sqrt(F);if(L<=.01)continue;o.multiplyScalar(1/L);const D=yn(l.heading);if(o.dot(D)<.45)continue;const N=D.x*o.z-D.z*o.x;_+=(N>0?-1:1)*(1-L/16)*l.profile.dodge}const T=i.sub(l.position),w=Math.atan2(T.x,T.z),R=Fr(l.heading,w);l.targetSteer=Tt.clamp(R*1.5+_*.8,-1.2,1.2);const C=c.player?c.player.globalProgress:l.globalProgress,S=l.globalProgress-C;let y=v.baseAiSpeed*l.profile.speedBias;if(y+=Tt.clamp(-S*.045,-3.2,5.6),y+=l.paceBoostTimer>0?2.2:0,y-=Math.abs(R)*7.2,y=Tt.clamp(y,15,43),l.throttle=A<y?1:.35,l.reverseThrottle=0,l.brake=A>y+1.6?.68:0,l.driveMode="forward",l.reverseHoldTimer=0,(l.knockdownTimer>0||l.recoverTimer>0)&&(l.throttle=0,l.reverseThrottle=0,l.brake=0,l.targetSteer=0),!m&&c.state===ce.RACING){if(c.raceElapsed<6.5)return;const P=S<0,E=f(c,l,2.8),I=.002+l.profile.aggression*.008+(P?.004:0)+(l.punchCooldown<=0?.001:0);if(E&&Math.random()<I&&g(c,l)&&(l.paceBoostTimer=1.15),l.itemType&&l.itemCooldown<=0){const F=l.profile.key==="Trickster"?.015:.01;Math.random()<F&&x(c,l)}}}return{updatePlayerControls:r,updateAiControls:a}}class Sv{constructor(t,e){this.racer=t,this.scene=e,this.active=!1,this.nodes=[],this.constraints=[],this.activeTime=0,this.nodeMap={head:null,torso:null,pelvis:null,leftHand:null,rightHand:null,leftFoot:null,rightFoot:null}}activate(t){this.active=!0,this.activeTime=0,this.nodes=[],this.constraints=[];const e=this.racer.riderRoot,i=new z;e.getWorldPosition(i),this._createNode("head",this.racer.rig.headPivot,.5,t),this._createNode("torso",this.racer.rig.spinePivot,1.2,t),this._createNode("pelvis",e,1.5,t),this._createNode("leftHand",this.racer.rig.leftWrist,.3,t),this._createNode("rightHand",this.racer.rig.rightWrist,.3,t),this._createNode("leftFoot",this.racer.rig.leftAnkle,.4,t),this._createNode("rightFoot",this.racer.rig.rightAnkle,.4,t),this._addConstraint("head","torso",.3),this._addConstraint("torso","pelvis",.4),this._addConstraint("torso","leftHand",.6),this._addConstraint("torso","rightHand",.6),this._addConstraint("pelvis","leftFoot",.7),this._addConstraint("pelvis","rightFoot",.7),this._addConstraint("leftHand","rightHand",.5,!0),this._addConstraint("leftFoot","rightFoot",.4,!0)}deactivate(){this.active=!1,this.racer.riderRoot.position.set(0,1.12,.15);const t=this.racer.rig;for(const e of["spinePivot","neckPivot","headPivot","leftShoulder","leftElbow","leftWrist","rightShoulder","rightElbow","rightWrist","leftHip","leftKnee","leftAnkle","rightHip","rightKnee","rightAnkle"])t[e]&&t[e].rotation.set(0,0,0);this.nodes=[],this.constraints=[]}update(t,e){if(this.active){if(this.activeTime+=t,this.racer.knockdownTimer<=0){this.deactivate();return}for(const i of this.nodes){i.acc.y-=bc;const o=i.pos.x,r=i.pos.y,a=i.pos.z;i.pos.x+=(i.pos.x-i.oldPos.x)*.98+i.acc.x*t*t,i.pos.y+=(i.pos.y-i.oldPos.y)*.98+i.acc.y*t*t,i.pos.z+=(i.pos.z-i.oldPos.z)*.98+i.acc.z*t*t,i.oldPos.set(o,r,a),i.acc.set(0,0,0);const c=e.heightFn(i.pos.x,i.pos.z);if(i.pos.y<c+.1){i.pos.y=c+.1;const l=i.pos.x-i.oldPos.x,u=i.pos.z-i.oldPos.z;i.oldPos.x+=l*.2,i.oldPos.z+=u*.2,i.oldPos.y=i.pos.y+(r-i.pos.y)*.3}}for(let i=0;i<3;i++)for(const o of this.constraints){const r=o.n2.pos.x-o.n1.pos.x,a=o.n2.pos.y-o.n1.pos.y,c=o.n2.pos.z-o.n1.pos.z,l=Math.hypot(r,a,c);if(l<.001)continue;const u=(l-o.length)/l,m=r*.5*u,g=a*.5*u,x=c*.5*u;(!o.soft||l>o.length)&&(o.n1.pos.x+=m,o.n1.pos.y+=g,o.n1.pos.z+=x,o.n2.pos.x-=m,o.n2.pos.y-=g,o.n2.pos.z-=x)}this._applyToRig()}}_createNode(t,e,i,o){const r=new z;e.getWorldPosition(r);const a=3,c=o.clone().add(new z((Math.random()-.5)*a,(Math.random()-.1)*a,(Math.random()-.5)*a)),l={id:t,obj:e,mass:i,pos:r.clone(),oldPos:r.clone().sub(c.multiplyScalar(1/60)),acc:new z};this.nodeMap[t]=l,this.nodes.push(l)}_addConstraint(t,e,i,o=!1){this.constraints.push({n1:this.nodeMap[t],n2:this.nodeMap[e],length:i,soft:o})}_applyToRig(){const t=this.nodeMap.pelvis,e=this.racer.alignRoot.worldToLocal(t.pos.clone());this.racer.riderRoot.position.copy(e),this.nodeMap.torso.pos;const i=this.nodeMap.leftHand.pos;this.racer.rig.leftShoulder.lookAt(i),this.racer.rig.rightShoulder.lookAt(this.nodeMap.rightHand.pos),this.racer.rig.spinePivot.lookAt(this.nodeMap.head.pos)}}function bv({input:n,fx:t,setRaceMessage:e,tempVec3A:i,tempVec3B:o,tempVec3C:r,tempVec3D:a,tempVec3E:c,applyKnockdown:l,triggerRespawn:u,tryCollectItem:m,getProjectionSegmentRadius:g}){function x(d,h,p,_){h.ragdoll||(h.ragdoll=new Sv(h,d.scene)),h.ragdoll&&h.ragdoll.active&&h.ragdoll.update(p,d.activeLevel),h.prevPosition.copy(h.position);const T=wi(h.velocity);h.steer=Fe(h.steer,h.targetSteer,h.grounded?12:4.5,p),Math.abs(h.targetSteer)<.03&&(h.steer=Fe(h.steer,0,h.grounded?18:7,p));const w=Tt.clamp(1.12-T*.02,.26,1.08);h.heading+=h.steer*w*(h.grounded?2.6:1.12)*p;const R=yn(h.heading),C=R.clone();let S=i.set(C.z,0,-C.x);const y=o.set(0,0,0);if(h.grounded){const H=Ge(d.activeLevel,h.position.x,h.position.z);C.copy(R).addScaledVector(H,-R.dot(H)),C.lengthSq()<1e-4&&C.copy(R),C.normalize(),a.set(C.x,0,C.z),a.lengthSq()<1e-4&&a.copy(R),a.normalize(),C.copy(a),S=i.set(C.z,0,-C.x);const X=2.4,V=d.activeLevel.heightFn(h.position.x+C.x*X,h.position.z+C.z*X),Z=d.activeLevel.heightFn(h.position.x-C.x*X,h.position.z-C.z*X),$=(V-Z)/(X*2),xt=Tt.clamp(1-Math.max(0,$)*1.05,.56,1.14),yt=Tt.clamp(1+Math.max(0,-$)*.58,1,1.42),j=h.boostTimer>0?1.36:1,ot=h.shieldTimer>0?1.08:1,tt=h.knockdownTimer>0||h.recoverTimer>0?0:1,_t=(h.isPlayer?le.playerDriveForce:le.aiDriveForce)*xt*yt*j*ot*tt;if(y.addScaledVector(C,h.throttle*_t),h.reverseThrottle>0&&y.addScaledVector(C,-h.reverseThrottle*_t*le.reverseDriveScale),h.brake>0){a.set(h.velocity.x,0,h.velocity.z);const at=a.length();at>.001&&(a.multiplyScalar(1/at),y.addScaledVector(a,-h.brake*le.brakeForce))}if(h.reverseThrottle<=0){const at=h.velocity.dot(C);if(at<-.55){const st=Math.min(le.brakeForce*.9,-at*6.2);y.addScaledVector(C,st)}}a.set(0,-bc,0);const mt=c.copy(H).multiplyScalar(a.dot(H));a.sub(mt),y.addScaledVector(a,1.02);const rt=h.velocity.dot(S),Rt=Tt.clamp(10.5-T*.08,4.8,10.5);y.addScaledVector(S,-rt*Rt),a.set(h.velocity.x,0,h.velocity.z),y.addScaledVector(a,-(le.baseDrag+T*le.speedDragFactor));const St=vu(d.activeLevel,h.position.x,h.position.z,h.prevProgress??h.progress,g(d.activeLevel.id)),G=Math.sqrt(St.distSq);if(G>d.activeLevel.routeHalfWidth*.72){const at=Tt.clamp((G-d.activeLevel.routeHalfWidth*.72)/(d.activeLevel.routeHalfWidth*1.02),0,1),st=Ke(d.activeLevel,St.s);if(a.copy(st.point).sub(h.position).setY(0),a.lengthSq()>1e-4&&(a.normalize(),y.addScaledVector(a,le.sideForce*at)),y.addScaledVector(c.set(h.velocity.x,0,h.velocity.z),-2.9*at),!_&&G>d.activeLevel.routeHalfWidth*.9){const ht=Tt.clamp((G-d.activeLevel.routeHalfWidth*.9)/(d.activeLevel.routeHalfWidth*.9),0,1),dt=1-ht*le.mudSlowdown;h.velocity.x*=dt,h.velocity.z*=dt,h.mudFxTimer-=p,h.mudFxTimer<=0&&h.grounded&&(h.mudFxTimer=le.mudDustInterval,t.spawnBurst(d,h.position,12162414,4,.36,1.8+ht*1.2))}G>d.activeLevel.routeHalfWidth*le.offTrackRespawnFactor&&!_&&u(d,h,"偏离赛道")}else h.mudFxTimer=0}else{if(y.set(0,-bc,0),a.set(h.velocity.x,0,h.velocity.z),y.addScaledVector(a,-.08),h.isPlayer&&d.state===ce.RACING){const H=(n.forward?1:0)-(n.brake?1:0),X=(n.left?1:0)-(n.right?1:0);h.airPitch=Tt.clamp(h.airPitch+H*p*1.9,-.9,.9),h.airRoll=Tt.clamp(h.airRoll+X*p*2.1,-1.15,1.15)}h.airPitch*=Math.exp(-p*1.8),h.airRoll*=Math.exp(-p*1.5),h.heading+=h.steer*.26*p}if(h.velocity.addScaledVector(y,p),h.grounded){const H=h.velocity.dot(C),V=h.velocity.dot(S)*Math.exp(-p*(h.isPlayer?16:13)),Z=Math.max(-5.8,H);if(h.velocity.x=C.x*Z+S.x*V,h.velocity.z=C.z*Z+S.z*V,Math.hypot(h.velocity.x,h.velocity.z)>3){const xt=Math.atan2(h.velocity.x,h.velocity.z),yt=Tt.clamp(.95-Math.abs(h.steer)*.5,.2,.95);h.heading+=Fr(h.heading,xt)*yt*p}}const P=r.set(h.velocity.x,0,h.velocity.z),E=(h.grounded?h.baseTopSpeed:h.baseTopSpeed+le.airTopSpeedBonus)*(h.boostTimer>0?le.boostTopSpeedScale:1);P.length()>E&&(P.setLength(E),h.velocity.x=P.x,h.velocity.z=P.z),h.position.addScaledVector(h.velocity,p),f(d,h),v(d,h),m(d,h),A(d,h),M(d,h,_);const I=d.activeLevel.heightFn(h.position.x,h.position.z)+Mi,F=h.position.y-I,L=h.grounded?1.1:.52;if(!(h.rampLaunchGrace>0&&h.velocity.y>.35&&F>-.08)&&F<=L){const H=Math.max(0,-h.velocity.y),X=F<=0?1:1-Math.exp(-p*16);h.position.y=Tt.lerp(h.position.y,I,X),h.grounded=!0,h.velocity.y<0?h.velocity.y=0:h.velocity.y*=.2,H>16&&d.state!==ce.MENU?(h.stunTimer=Math.max(h.stunTimer,.22),h.velocity.x*=.96,h.velocity.z*=.96):H>8&&d.state!==ce.MENU&&(h.stunTimer=Math.max(h.stunTimer,.16))}else h.grounded=!1;h.prevProgress=h.progress;const N=vu(d.activeLevel,h.position.x,h.position.z,h.prevProgress??h.progress,g(d.activeLevel.id));h.progress=N.s,h.trackDist=Math.sqrt(N.distSq),h.globalProgress=d.activeLevel.loop?h.lap*d.activeLevel.totalLength+h.progress:h.progress,h.topSpeedReached=Math.max(h.topSpeedReached,wi(h.velocity)*3.6)}function f(d,h){if(!(!h.grounded||h.knockdownTimer>0||wi(h.velocity)<le.rampMinApproachSpeed))for(const _ of d.ramps){if(d.simTime-h.lastRampAt<le.rampTriggerCooldown&&h.lastRampId===_.id)continue;const T=h.position.x-_.x,w=h.position.z-_.z,R=T*_.right.x+w*_.right.z,C=T*_.forward.x+w*_.forward.z;if(Math.abs(R)>_.width*.58||Math.abs(C)>_.length*.6)continue;const S=h.velocity.x*_.forward.x+h.velocity.z*_.forward.z;if(!(S<le.rampMinApproachSpeed)){h.velocity.y=Math.max(h.velocity.y,le.rampMinLaunchVelocity,_.launch+S*.11),h.velocity.addScaledVector(_.forward,_.boost+Math.max(0,S-le.rampMinApproachSpeed)*.03),h.grounded=!1,h.lastRampAt=d.simTime,h.lastRampId=_.id,h.rampLaunchGrace=Math.max(h.rampLaunchGrace,le.rampLaunchGraceDuration),h.isPlayer&&d.state===ce.RACING&&(e(d,"BIG AIR",.7),d.simTime-d.lastBigAirSoundAt>le.rampSoundCooldown&&(t.playBoostSound(d),d.lastBigAirSoundAt=d.simTime),t.spawnBurst(d,h.position,16774333,16,1.2,6.8));break}}}function v(d,h){if(h.grounded)for(const p of d.boostPads){const _=h.position.x-p.x,T=h.position.z-p.z,w=_*p.right.x+T*p.right.z,R=_*p.forward.x+T*p.forward.z;Math.abs(w)>p.width*.5||Math.abs(R)>p.length*.54||d.simTime-h.lastBoostAt<.75||(h.lastBoostAt=d.simTime,h.velocity.addScaledVector(p.forward,p.power),h.boostTimer=Math.max(h.boostTimer,1.05),h.isPlayer&&d.state===ce.RACING&&(e(d,"BOOST!",.6),t.playBoostSound(d),t.spawnBurst(d,h.position,6750202,14,1,5.4)))}}function A(d,h){for(const p of d.obstacles){const _=p.type==="tree"||p.type==="prop"||p.type==="decor",T=p.type==="edge",w=_?.64:T?.7:.82,R=.95;let C=0,S=0,y=0,P=!1;if(p.shape==="box"){const I=p.halfHeight??p.height??1;if(Math.abs(h.position.y-p.y)>I+R)continue;const F=h.position.x-p.x,L=h.position.z-p.z,D=F*p.right.x+L*p.right.z,N=F*p.forward.x+L*p.forward.z,H=p.halfWidth+w,X=p.halfLength+w;if(Math.abs(D)>H||Math.abs(N)>X)continue;const V=H-Math.abs(D),Z=X-Math.abs(N);if(V<Z){const $=D>=0?1:-1;C=p.right.x*$,S=p.right.z*$,y=V}else{const $=N>=0?1:-1;C=p.forward.x*$,S=p.forward.z*$,y=Z}P=y>0}else{const I=p.height??1;if(Math.abs(h.position.y-p.y)>I+R)continue;const F=h.position.x-p.x,L=h.position.z-p.z,D=F*F+L*L,N=(p.radius??1)+w;if(D>=N*N)continue;const H=Math.sqrt(Math.max(1e-4,D));C=F/H,S=L/H,y=N-H,P=!0}if(!P)continue;T&&(y=Math.min(y,.28)),h.position.x+=C*y,h.position.z+=S*y;const E=h.velocity.x*C+h.velocity.z*S;if(E<0){const I=h.shieldTimer>0?.52:1,F=_?.8:T?.58:.98,L=_?.95:T?.985:.86;if(h.velocity.x-=E*C*F*I,h.velocity.z-=E*S*F*I,h.velocity.multiplyScalar(L),T)continue;const D=Math.abs(E)*(p.crashWeight??1.1)*I;D>(_?19:15.5)&&d.state!==ce.MENU&&l(d,h,i.set(C,0,S),Tt.clamp(D/20,.6,1.2),!1)}}}function M(d,h,p){const _=d.activeLevel.bounds;if((h.position.x<_.minX-4||h.position.x>_.maxX+4||h.position.z<_.minZ-4||h.position.z>_.maxZ+4)&&!p){u(d,h,"越界");return}const w=d.activeLevel.heightFn(h.position.x,h.position.z);h.position.y<w-64&&!p&&u(d,h,"坠落")}return{updateRacerPhysics:x}}function Tv({input:n,settings:t,ui:e,fx:i,updateRacerVisual:o,setRaceMessage:r}){const a=new z,c=new z,l=new z,u=new z,m=new z,g=vv({settings:t,fx:i,setRaceMessage:r,tempVec3A:a}),x=wv({ui:e,fx:i,setRaceMessage:r,tempVec3A:a,tempVec3B:c}),f=Mv({fx:i,setRaceMessage:r,tempVec3A:a,tempVec3B:c,tempVec3C:l,tempVec3D:u,applyKnockdown:g.applyKnockdown,isCheckpointTriggered:x.isCheckpointTriggered}),v=yv({input:n,settings:t,tempVec3A:a,tempVec3B:c,tempVec3C:l}),A=bv({input:n,fx:i,setRaceMessage:r,tempVec3A:a,tempVec3B:c,tempVec3C:l,tempVec3D:u,tempVec3E:m,applyKnockdown:g.applyKnockdown,triggerRespawn:x.triggerRespawn,tryCollectItem:f.tryCollectItem,getProjectionSegmentRadius:x.getProjectionSegmentRadius});function M(p,_,T){_.throttle=0,_.reverseThrottle=0,_.brake=0,_.driveMode="forward",_.reverseHoldTimer=0,_.signedForwardSpeed=0,_.pendingRespawnCheckpoint=null,_.checkpointMissWarned=!1,_.lastRampAt=-99,_.lastRampId=-1,_.rampLaunchGrace=0,_.targetSteer=0,_.steer=Fe(_.steer,0,8,T),_.velocity.multiplyScalar(Math.exp(-T*10)),_.heading+=Fr(_.heading,_.startHeading)*(1-Math.exp(-T*12)),_.position.lerp(_.startGridPosition,1-Math.exp(-T*16)),_.position.y=p.activeLevel.heightFn(_.position.x,_.position.z)+Mi,_.grounded=!0,_.airPitch=0,_.airRoll=0,_.prevPosition.copy(_.position);const w=si(p.activeLevel,_.position.x,_.position.z);_.progress=w.s,_.prevProgress=w.s,_.trackDist=Math.sqrt(w.distSq),_.globalProgress=p.activeLevel.loop?_.lap*p.activeLevel.totalLength+_.progress:_.progress}function d(p,_,T){for(const w of p.racers){if(w.punchCooldown>0&&(w.punchCooldown-=_),w.itemCooldown>0&&(w.itemCooldown-=_),w.punchTimer>0&&(w.punchTimer-=_),w.boostTimer>0&&(w.boostTimer-=_),w.shieldTimer>0&&(w.shieldTimer-=_,w.shieldTimer<=0&&(w.shieldHits=0)),w.stunTimer>0&&(w.stunTimer-=_),w.itemHitCooldown>0&&(w.itemHitCooldown-=_),w.rampLaunchGrace>0&&(w.rampLaunchGrace-=_),w.paceBoostTimer>0&&(w.paceBoostTimer-=_),w.rubberbandCooldown>0&&(w.rubberbandCooldown-=_),w.respawnTimer>0){w.respawnTimer-=_,w.respawnBlink+=_*18,w.respawnTimer<=0&&x.doRespawn(p,w),o(p,w,_);continue}if(w.knockdownTimer>0?(w.knockdownTimer-=_,w.knockdownTimer<=0&&(w.recoverTimer=le.knockdownRecoverDuration)):w.recoverTimer>0&&(w.recoverTimer-=_),p.state===ce.READY&&!T){M(p,w,_),o(p,w,_);continue}if(T||!w.isPlayer||p.state===ce.FINISHED)w.debugFrozen||v.updateAiControls(p,w,_,T,{tryPunch:g.tryPunch,useItem:f.useItem,findBestPunchTarget:g.findBestPunchTarget});else if(v.updatePlayerControls(p,w,_),n.punchQueued&&(n.punchQueued=!1,g.tryPunch(p,w)),n.itemQueued&&(n.itemQueued=!1,f.useItem(p,w)),n.respawnQueued&&(n.respawnQueued=!1,x.triggerRespawn(p,w,"主动复位")),p.activeLevel.id==="debug"){if(n.debug1&&(n.debug1=!1,g.applyKnockdown(p,w,new z(1,0,0),1,!1)),n.debug2){n.debug2=!1;const R=g.findBestPunchTarget(p,w,100);R&&g.applyKnockdown(p,R,new z(1,0,0),1,!1)}if(n.debug3&&(n.debug3=!1,w.punchCooldown=0,g.tryPunch(p,w)),n.debug4&&(n.debug4=!1,w.itemCooldown=0,w.itemType||(w.itemType="bomb"),f.useItem(p,w)),n.debug5&&(n.debug5=!1,w.boostTimer=Math.max(w.boostTimer,3),w.velocity.addScaledVector(new z(Math.sin(w.heading),0,Math.cos(w.heading)),12),i.spawnBurst(p,w.position,4517631,28,1.2,9),i.playBoostSound(p)),n.debug6&&(n.debug6=!1,i.spawnBurst(p,w.position,16729088,20,2,8),i.spawnBurst(p,w.position,16763904,14,1.4,6),i.playHitSound(p),t.shake&&(p.cameraShake=Math.max(p.cameraShake,1))),n.debug7&&(n.debug7=!1,w.itemType="bomb",w.itemCooldown=0,f.useItem(p,w)),n.debug8&&(n.debug8=!1,w.itemType="banana",w.itemCooldown=0,f.useItem(p,w)),n.debug9&&(n.debug9=!1,w.itemType="shield",w.itemCooldown=0,f.useItem(p,w)),n.debug0){n.debug0=!1;const R=["turbo","bash","shock","trap"];w._debugItemCycle=((w._debugItemCycle??-1)+1)%R.length,w.itemType=R[w._debugItemCycle],w.itemCooldown=0,f.useItem(p,w)}if(n.debugT){n.debugT=!1,w.itemHitCooldown=0;const R=w.position.clone();R.y+=.5,i.spawnBurst(p,R,16771264,35,2.4,12),i.spawnBurst(p,R,16746547,28,3,9),i.spawnBurst(p,R,16729088,22,4.5,7),i.spawnBurst(p,R,5592405,16,2.8,4),i.spawnBurst(p,R,16772676,12,1.6,14),i.playExplosionSound(p),t.shake&&(p.cameraShake=Math.max(p.cameraShake,1.2)),g.applyKnockdown(p,w,new z(1,.5,0).normalize(),1.3,!0)}if(n.debugY&&(n.debugY=!1,w.itemHitCooldown=0,i.spawnBurst(p,w.position,16771718,18,1.2,5.6),i.playHitSound(p),g.applyKnockdown(p,w,new z(-1,0,0),.9,!0)),n.debugU){n.debugU=!1,w.itemHitCooldown=0,w.stunTimer=Math.max(w.stunTimer,1.35);const R=new z(Math.sin(p.simTime),0,Math.cos(p.simTime)).normalize();w.velocity.addScaledVector(R,7.4),g.applyKnockdown(p,w,R,.72,!1),i.spawnBurst(p,w.position,9559551,26,1.8,7.8),i.spawnBurst(p,w.position,4508927,14,1.2,5.5),i.playShockSound(p),t.shake&&(p.cameraShake=Math.max(p.cameraShake,.5))}}w.stunTimer>0&&(w.targetSteer+=Math.sin(p.simTime*14+w.id)*.16,w.throttle*=.45,w.reverseThrottle*=.45,w.brake*=.45),(w.knockdownTimer>0||w.recoverTimer>0)&&(w.throttle=0,w.reverseThrottle=0,w.brake=.8,w.driveMode="forward",w.reverseHoldTimer=0,w.targetSteer*=.1,w.velocity.x*=.9,w.velocity.z*=.9),A.updateRacerPhysics(p,w,_,T),o(p,w,_),T||(x.checkCheckpointsAndFinish(p,w),w.isPlayer&&x.enforceCheckpointRecovery(p,w))}g.resolveRacerContacts(p),f.updateItemEffects(p,_),p.racers.sort(Fa),p.player&&p.state===ce.RACING&&p.player.finished&&(p.state=ce.FINISHED,p.raceFinishedAt=p.raceElapsed,p.resultDelay=1.2,e.countdown.textContent="FINISH",r(p,"冲线完成",2.2),i.playFinishSound(p))}function h(p){return[...p.racers].sort(Fa)}return{animateCheckpointAndItems:f.animateCheckpointAndItems,updateReady:x.updateReady,updateRacers:d,updatePackPressure:x.updatePackPressure,getRaceOrder:h,compareRaceOrder:Fa}}function Fa(n,t){return n.finishTime!=null&&t.finishTime!=null?n.finishTime-t.finishTime:n.finishTime!=null?-1:t.finishTime!=null?1:t.globalProgress-n.globalProgress}function Ev({settings:n}){const t=new z,e=new z,i=new z,o=new z,r=new z,a=new z(0,0,1);function c(g,x){if(!g.activeLevel)return;const f=g.activeLevel.heightFn(g.camera.position.x,g.camera.position.z)+x;g.camera.position.y<f&&(g.camera.position.y=f)}const l=new z;function u(g,x){if(!g.player||!g.player.riderRoot)return;g.player.riderRoot.getWorldPosition(l);const f=yn(g.player.heading),v=o.set(g.player.velocity.x,0,g.player.velocity.z),A=wi(g.player.velocity),M=r;v.lengthSq()>1e-4?M.copy(v).normalize():M.copy(f);const d=Number.isFinite(g.player.signedForwardSpeed)?g.player.signedForwardSpeed:v.dot(f),h=Tt.clamp((-d-.2)/3.2,0,1),p=A>2.5?(1-h)*.58:0,_=i.copy(f).multiplyScalar(1-p).addScaledVector(M,p);_.lengthSq()<1e-4?_.copy(f):_.normalize(),a.lerp(_,1-Math.exp(-x*(h>.15?12:8))),a.lengthSq()<1e-4&&a.copy(_),a.normalize();const T=Ge(g.activeLevel,l.x,l.z),w=t.crossVectors(T,a).normalize(),R=7.8+Math.min(A*.12,5.2),C=3.5+Math.min(A*.05,3.4);e.copy(l).addScaledVector(a,-R).addScaledVector(w,g.player.steer*-1.05).addScaledVector(T,C);let S=-1;o.copy(g.camera.position).sub(l).setY(0),o.lengthSq()>1e-4&&(o.normalize(),S=o.dot(f));const y=h>.2?S>.2?20:12:7;if(g.camera.position.lerp(e,1-Math.exp(-x*y)),i.copy(l).addScaledVector(a,12).addScaledVector(T,1.8),n.shake&&g.cameraShake>.001){const E=g.cameraShake*.28;g.camera.position.x+=(Math.random()-.5)*E,g.camera.position.y+=(Math.random()-.5)*E,g.camera.position.z+=(Math.random()-.5)*E,g.cameraShake*=Math.exp(-x*6.5)}c(g,2.4),g.camera.lookAt(i);const P=n.fov+Math.min(A*.45,18);g.camera.fov=Fe(g.camera.fov,P,4.5,x),g.camera.updateProjectionMatrix()}function m(g,x){g.menuOrbit+=x*.2;const f=Ke(g.activeLevel,g.simTime*22).point,v=g.activeLevel.id==="ring"?150:120;t.set(Math.cos(g.menuOrbit)*v,36+Math.sin(g.menuOrbit*1.6)*8,Math.sin(g.menuOrbit)*v),t.add(f),g.camera.position.lerp(t,1-Math.exp(-x*2.1)),c(g,4.2),g.camera.lookAt(e.copy(f).add(new z(0,8,0))),g.camera.fov=Fe(g.camera.fov,n.fov,2.4,x),g.camera.updateProjectionMatrix()}return{updatePlayerCamera:u,updateMenuCamera:m}}function Av({settings:n}){function t(h,p){for(let _=h.particles.length-1;_>=0;_-=1){const T=h.particles[_];if(T.life-=p,T.life<=0){h.fxRoot.remove(T.mesh),h.particles.splice(_,1);continue}T.vel.y-=8.4*p,T.mesh.position.addScaledVector(T.vel,p),T.mesh.material.opacity=T.life/T.maxLife}}function e(h,p,_,T,w=1,R=5){for(let C=0;C<T;C+=1){const S=new k(new en(.06+Math.random()*.06,8,8),new Ni({color:_,transparent:!0,opacity:.95}));S.position.copy(p).add(new z((Math.random()-.5)*w,.35+Math.random()*.8,(Math.random()-.5)*w));const y=new z((Math.random()-.5)*R,Math.random()*R*.8,(Math.random()-.5)*R);h.fxRoot.add(S),h.particles.push({mesh:S,vel:y,life:.35+Math.random()*.4,maxLife:.7})}}function i(h){if(h.audio.ctx)return;const p=new(window.AudioContext||window.webkitAudioContext),_=p.createGain();_.gain.value=n.volume,_.connect(p.destination);const T=p.createBiquadFilter();T.type="bandpass",T.frequency.value=620,T.Q.value=.7;const w=p.createGain();w.gain.value=0;const R=p.createBufferSource();R.buffer=o(p,1.6),R.loop=!0,R.connect(T),T.connect(w),w.connect(_),R.start(),h.audio.ctx=p,h.audio.master=_,h.audio.windGain=w,h.audio.windFilter=T}function o(h,p){const _=h.createBuffer(1,h.sampleRate*p,h.sampleRate),T=_.getChannelData(0);for(let w=0;w<T.length;w+=1)T[w]=(Math.random()*2-1)*.8;return _}function r(h,p){if(!h.audio.ctx||!h.player)return;const _=wi(h.player.velocity);h.audio.windTarget=h.state===ce.RACING||h.state===ce.FINISHED?Tt.clamp(_/35,0,1):0,h.audio.windCurrent=Fe(h.audio.windCurrent,h.audio.windTarget,2.6,p);const T=h.audio.ctx.currentTime;h.audio.windGain.gain.setTargetAtTime(h.audio.windCurrent*.24,T,.1),h.audio.windFilter.frequency.setTargetAtTime(320+h.audio.windCurrent*1800,T,.08)}function a(h,p,_,T=.15,w="sine"){if(!h.audio.ctx)return;const R=h.audio.ctx.currentTime,C=h.audio.ctx.createOscillator(),S=h.audio.ctx.createGain();C.type=w,C.frequency.setValueAtTime(p,R),S.gain.setValueAtTime(1e-4,R),S.gain.exponentialRampToValueAtTime(T,R+.01),S.gain.exponentialRampToValueAtTime(1e-4,R+_),C.connect(S),S.connect(h.audio.master),C.start(R),C.stop(R+_+.03)}function c(h,p,_,T,w=.18,R="triangle"){if(!h.audio.ctx)return;const C=h.audio.ctx.currentTime,S=h.audio.ctx.createOscillator(),y=h.audio.ctx.createGain();S.type=R,S.frequency.setValueAtTime(p,C),S.frequency.exponentialRampToValueAtTime(Math.max(20,_),C+T),y.gain.setValueAtTime(1e-4,C),y.gain.exponentialRampToValueAtTime(w,C+.01),y.gain.exponentialRampToValueAtTime(1e-4,C+T),S.connect(y),y.connect(h.audio.master),S.start(C),S.stop(C+T+.03)}function l(h,p){a(h,p?180:120,.09,p?.14:.08,"square"),p&&a(h,72,.14,.11,"triangle")}function u(h){c(h,420,110,.13,.16,"square")}function m(h){c(h,280,960,.2,.15,"sawtooth")}function g(h){a(h,940,.08,.1,"triangle"),a(h,1320,.09,.09,"triangle")}function x(h){a(h,700,.08,.09,"sine"),a(h,980,.08,.08,"sine")}function f(h){c(h,1800,280,.18,.12,"square")}function v(h){c(h,220,700,.24,.11,"triangle")}function A(h){a(h,48,.35,.22,"sine"),a(h,60,.28,.18,"triangle"),c(h,650,90,.22,.2,"square"),c(h,900,140,.18,.14,"sawtooth"),c(h,2200,400,.12,.09,"square"),c(h,1600,200,.15,.08,"triangle")}function M(h){a(h,520,.11,.09,"square"),setTimeout(()=>a(h,720,.13,.1,"square"),110)}function d(h){a(h,460,.18,.11,"triangle"),setTimeout(()=>a(h,680,.22,.12,"triangle"),120)}return{ensureAudio:i,updateParticles:t,spawnBurst:e,updateAudio:r,playPunchSound:l,playHitSound:u,playBoostSound:m,playCheckpointSound:g,playPickupSound:x,playShockSound:f,playExplosionSound:A,playRespawnSound:v,playStartSound:M,playFinishSound:d}}function Rv({game:n,levels:t,world:e,uiSystem:i,onExitToMenu:o}){const r={forward:!1,back:!1,left:!1,right:!1,up:!1,down:!1,sprint:!1},a={active:!1,looking:!1,yaw:0,pitch:0,speed:34,levelIndex:0},c=new z;function l(){window.addEventListener("keydown",u),window.addEventListener("keyup",m);const V=n.renderer?.domElement;V&&(V.addEventListener("contextmenu",Z=>{a.active&&Z.preventDefault()}),V.addEventListener("mousedown",g),window.addEventListener("mouseup",x),window.addEventListener("mousemove",f),V.addEventListener("wheel",v,{passive:!1}))}function u(V){if(V.code==="F2"&&!V.repeat){T(),V.preventDefault();return}if(V.code==="F3"&&!V.repeat&&a.active){w(),V.preventDefault();return}a.active&&(V.code==="KeyW"&&(r.forward=!0),V.code==="KeyS"&&(r.back=!0),V.code==="KeyA"&&(r.left=!0),V.code==="KeyD"&&(r.right=!0),V.code==="KeyE"&&(r.up=!0),V.code==="KeyQ"&&(r.down=!0),(V.code==="ShiftLeft"||V.code==="ShiftRight")&&(r.sprint=!0))}function m(V){a.active&&(V.code==="KeyW"&&(r.forward=!1),V.code==="KeyS"&&(r.back=!1),V.code==="KeyA"&&(r.left=!1),V.code==="KeyD"&&(r.right=!1),V.code==="KeyE"&&(r.up=!1),V.code==="KeyQ"&&(r.down=!1),(V.code==="ShiftLeft"||V.code==="ShiftRight")&&(r.sprint=!1))}function g(V){!a.active||V.button!==2||(a.looking=!0,V.preventDefault())}function x(V){V.button===2&&(a.looking=!1)}function f(V){if(!a.active||!a.looking)return;const Z=.0024;a.yaw-=V.movementX*Z,a.pitch-=V.movementY*Z,a.pitch=Tt.clamp(a.pitch,-Math.PI*.49,Math.PI*.49)}function v(V){a.active&&(a.speed=Tt.clamp(a.speed+(V.deltaY>0?-2:2),8,120),V.preventDefault())}function A(){const V=new z;n.camera.getWorldDirection(V),a.yaw=Math.atan2(V.x,V.z),a.pitch=Math.asin(Tt.clamp(V.y,-1,1))}function M(V,Z=3.2){const $=V.heightFn(n.camera.position.x,n.camera.position.z)+Z;n.camera.position.y<$&&(n.camera.position.y=$)}function d(V,Z=2.8){const $=n.camera.position,xt=1.02,yt=1.1;let j=!1;for(let ot=0;ot<4;ot+=1){let tt=!1;for(const _t of n.obstacles)if(_t.type!=="edge")if(_t.shape==="box"){const mt=_t.halfHeight??_t.height??1;if(Math.abs($.y-_t.y)>mt+yt)continue;const rt=$.x-_t.x,Rt=$.z-_t.z,St=rt*_t.right.x+Rt*_t.right.z,G=rt*_t.forward.x+Rt*_t.forward.z,at=_t.halfWidth+xt,st=_t.halfLength+xt;if(Math.abs(St)>at||Math.abs(G)>st)continue;const ht=at-Math.abs(St),dt=st-Math.abs(G);if(ht<dt){const Pt=St>=0?1:-1;$.x+=_t.right.x*ht*Pt,$.z+=_t.right.z*ht*Pt}else{const Pt=G>=0?1:-1;$.x+=_t.forward.x*dt*Pt,$.z+=_t.forward.z*dt*Pt}tt=!0,j=!0}else{const mt=_t.height??1;if(Math.abs($.y-_t.y)>mt+yt)continue;const rt=$.x-_t.x,Rt=$.z-_t.z,St=(_t.radius??1)+xt,G=rt*rt+Rt*Rt;if(G>=St*St)continue;const at=Math.sqrt(Math.max(1e-4,G)),st=St-at;$.x+=rt/at*st,$.z+=Rt/at*st,tt=!0,j=!0}if(M(V,Z),!tt)break}j&&D($.x,$.y,$.z,xt,yt,Number.POSITIVE_INFINITY)&&($.copy(c),M(V,Z))}function h(V){const Z=Ke(V,V.totalLength*.03),$=Ge(V,Z.point.x,Z.point.z),xt=new z().crossVectors($,Z.forward);xt.lengthSq()<1e-4&&xt.set(Z.forward.z,0,-Z.forward.x),xt.normalize();const yt=[{back:18,side:0,up:11.5},{back:24,side:V.routeHalfWidth*1.2,up:13.5},{back:24,side:-V.routeHalfWidth*1.2,up:13.5},{back:14,side:0,up:18}];let j=!1;for(const ot of yt)if(n.camera.position.copy(Z.point).addScaledVector(Z.forward,-ot.back).addScaledVector(xt,ot.side).addScaledVector($,ot.up),M(V,4.6),!D(n.camera.position.x,n.camera.position.y,n.camera.position.z,1.05,1.2,Number.POSITIVE_INFINITY)){j=!0;break}j||(n.camera.position.copy(Z.point).addScaledVector(Z.forward,-16).addScaledVector($,14),M(V,4.8)),n.camera.lookAt(Z.point.clone().addScaledVector($,2)),A()}function p(V=n.selectedLevelId){const Z=Math.max(0,t.findIndex($=>$.id===V));a.levelIndex=Z,n.selectedLevelId=t[a.levelIndex].id,e.setupWorld(n,n.selectedLevelId),n.racerRoot&&n.racerRoot.clear(),n.racers=[],n.player=null,n.state=ce.INSPECT,n.resultShown=!1,i.setResultVisible(!1),i.setMenuVisible(!1),i.ui.hud.classList.remove("visible"),i.ui.hud.classList.add("hidden"),h(n.activeLevel),a.active=!0,i.setRaceMessage(n,`检图模式: ${n.activeLevel.name} | 右键拖动视角 WASD移动 QE升降 Shift冲刺 滚轮调速 F2退出 F3切图`,4.8)}function _(){a.active=!1,a.looking=!1,r.forward=r.back=r.left=r.right=r.up=r.down=r.sprint=!1,o()}function T(){a.active?_():p(n.selectedLevelId)}function w(){a.active&&(a.levelIndex=(a.levelIndex+1)%t.length,p(t[a.levelIndex].id))}function R(V){if(!a.active)return;c.copy(n.camera.position);const Z=Math.cos(a.pitch),$=new z(Math.sin(a.yaw)*Z,Math.sin(a.pitch),Math.cos(a.yaw)*Z).normalize(),xt=new z($.z,0,-$.x).normalize(),yt=new z(0,1,0),j=new z;if(r.forward&&j.add($),r.back&&j.sub($),r.right&&j.add(xt),r.left&&j.sub(xt),r.up&&j.add(yt),r.down&&j.sub(yt),j.lengthSq()>1e-4){j.normalize();const ot=a.speed*(r.sprint?2.4:1);n.camera.position.addScaledVector(j,ot*V)}M(n.activeLevel,2.8),d(n.activeLevel,2.8),n.camera.lookAt(n.camera.position.clone().add($))}function C(V){e.setupWorld(n,V),n.racerRoot&&n.racerRoot.clear(),n.racers=[],n.player=null;const Z=n.activeLevel,$={levelId:V,obstacleCount:n.obstacles.length,intrusiveTrackObstacles:0,likelyAirWalls:0,mountainNearTrack:0,blockedSamples:0,samplePoints:300,terrainTriangleCount:0,terrainOversizedFaces:0,terrainDegenerateFaces:0,terrainMaxEdge:0,routeMeshCount:0,routeShearedMeshes:0,routeMaxStretch:0,mountainMeshCount:0,mountainShearedMeshes:0,mountainTriangleCount:0,mountainOversizedFaces:0,mountainDegenerateFaces:0,mountainShardFaces:0,mountainMaxEdge:0,rampCount:0,rampIssueCount:0,rampCriticalCount:0,rampIssues:[]};for(const mt of n.obstacles){const rt=mn(Z,mt.x,mt.z),Rt=mt.type;(Rt==="barrier"||Rt==="hazard")&&rt<Z.routeHalfWidth*.95&&($.intrusiveTrackObstacles+=1),Rt!=="edge"&&mt.shape==="box"&&rt<Z.routeHalfWidth*1.05&&($.likelyAirWalls+=1),Rt==="mountain"&&rt<Z.routeHalfWidth*1.35&&($.mountainNearTrack+=1)}const xt=.78,yt=.95;for(let mt=0;mt<$.samplePoints;mt+=1){const rt=Ke(Z,Z.totalLength*mt/$.samplePoints),Rt=Ge(Z,rt.point.x,rt.point.z),St=rt.point.clone().addScaledVector(Rt,.2);D(St.x,St.y+1.02,St.z,xt,yt,Z.routeHalfWidth*1.03)&&($.blockedSamples+=1)}const j=H();$.terrainTriangleCount=j.triangleCount,$.terrainOversizedFaces=j.oversizedFaces,$.terrainDegenerateFaces=j.degenerateFaces,$.terrainMaxEdge=Number(j.maxEdge.toFixed(2));const ot=N();$.routeMeshCount=ot.meshCount,$.routeShearedMeshes=ot.shearedMeshes,$.routeMaxStretch=Number(ot.maxStretch.toFixed(2));const tt=X();$.mountainMeshCount=tt.meshCount,$.mountainShearedMeshes=tt.shearedMeshes,$.mountainTriangleCount=tt.triangleCount,$.mountainOversizedFaces=tt.oversizedFaces,$.mountainDegenerateFaces=tt.degenerateFaces,$.mountainShardFaces=tt.shardFaces,$.mountainMaxEdge=Number(tt.maxEdge.toFixed(2));const _t=(Z.rampAudit??[]).map(mt=>({map:mt.map,index:mt.index,x:Number(mt.x.toFixed(2)),z:Number(mt.z.toFixed(2)),issues:mt.issues,corrected:!!mt.corrected,critical:!!mt.critical}));return $.rampCount=n.ramps.length,$.rampIssueCount=_t.length,$.rampCriticalCount=_t.filter(mt=>mt.critical).length,$.rampIssues=_t,$}function S(){return t.map(V=>C(V.id))}function y(){const V=S(),Z=I(),$=.04,xt=.06,yt=.2;return{pass:V.every(ot=>ot.intrusiveTrackObstacles===0&&ot.likelyAirWalls===0&&ot.terrainOversizedFaces===0&&ot.terrainDegenerateFaces===0&&ot.routeShearedMeshes===0&&ot.mountainShearedMeshes===0&&ot.mountainOversizedFaces===0&&ot.mountainDegenerateFaces===0&&ot.mountainShardFaces===0&&ot.rampCriticalCount===0&&ot.mountainNearTrack===0&&ot.blockedSamples<=Math.ceil(ot.samplePoints*$))&&Z.every(ot=>{const tt=ot.samplePoints*ot.viewsPerSample;return ot.routeOcclusions<=Math.ceil(tt*xt)&&ot.decorOcclusions<=Math.ceil(tt*yt)}),checkedAt:new Date().toISOString(),threshold:{blockedSampleMaxRatio:$,freeCamRouteOcclusionMaxRatio:xt,freeCamDecorOcclusionMaxRatio:yt},reports:V,freeCamReports:Z}}function P(V={}){const Z=V.blockedSampleMaxRatio??.04,$=V.freeCamRouteOcclusionMaxRatio??.06,xt=V.freeCamDecorOcclusionMaxRatio??.2,yt={samplePoints:Math.max(180,Math.floor(V.freeCamSamplePoints??260)),viewOffsets:V.viewOffsets},j=t.map(ot=>{const tt=C(ot.id),_t=E(ot.id,yt),mt=_t.samplePoints*_t.viewsPerSample,rt=Math.ceil(tt.samplePoints*Z),Rt=Math.ceil(mt*$),St=Math.ceil(mt*xt),G=[];tt.intrusiveTrackObstacles>0&&G.push(`intrusiveTrackObstacles=${tt.intrusiveTrackObstacles}`),tt.likelyAirWalls>0&&G.push(`likelyAirWalls=${tt.likelyAirWalls}`),tt.mountainNearTrack>0&&G.push(`mountainNearTrack=${tt.mountainNearTrack}`),tt.terrainOversizedFaces>0&&G.push(`terrainOversizedFaces=${tt.terrainOversizedFaces}`),tt.terrainDegenerateFaces>0&&G.push(`terrainDegenerateFaces=${tt.terrainDegenerateFaces}`),tt.routeShearedMeshes>0&&G.push(`routeShearedMeshes=${tt.routeShearedMeshes}`),tt.mountainShearedMeshes>0&&G.push(`mountainShearedMeshes=${tt.mountainShearedMeshes}`),tt.mountainOversizedFaces>0&&G.push(`mountainOversizedFaces=${tt.mountainOversizedFaces}`),tt.mountainDegenerateFaces>0&&G.push(`mountainDegenerateFaces=${tt.mountainDegenerateFaces}`),tt.mountainShardFaces>0&&G.push(`mountainShardFaces=${tt.mountainShardFaces}`),tt.rampCriticalCount>0&&G.push(`rampCritical=${tt.rampCriticalCount}`);for(const at of tt.rampIssues.filter(st=>st.critical).slice(0,3))G.push(`ramp#${at.index}@(${at.x},${at.z}) ${at.issues.join("|")}`);return tt.blockedSamples>rt&&G.push(`blockedSamples=${tt.blockedSamples}/${rt}`),_t.routeOcclusions>Rt&&G.push(`routeOcclusions=${_t.routeOcclusions}/${Rt}`),_t.decorOcclusions>St&&G.push(`decorOcclusions=${_t.decorOcclusions}/${St}`),{levelId:ot.id,pass:G.length===0,issues:G,gameplay:tt,freeCam:_t}});return{pass:j.every(ot=>ot.pass),checkedAt:new Date().toISOString(),threshold:{blockedSampleMaxRatio:Z,freeCamRouteOcclusionMaxRatio:$,freeCamDecorOcclusionMaxRatio:xt},reports:j}}function E(V,Z={}){e.setupWorld(n,V),n.racerRoot&&n.racerRoot.clear(),n.racers=[],n.player=null;const $=n.activeLevel,xt=Math.max(90,Math.floor(Z.samplePoints??180)),yt=Z.viewOffsets??[{side:$.routeHalfWidth*2.3,back:15.5,up:10.5},{side:-$.routeHalfWidth*2.3,back:15.5,up:10.5},{side:0,back:21,up:15.8}],j=new K0,ot=new z,tt=new z,_t=new z,mt=new z,rt=new z,Rt={levelId:V,samplePoints:xt,viewsPerSample:yt.length,blockedViews:0,routeOcclusions:0,decorOcclusions:0,terrainOcclusions:0};for(let St=0;St<xt;St+=1){const G=Ke($,$.totalLength*St/xt);rt.copy(Ge($,G.point.x,G.point.z)).normalize(),mt.crossVectors(rt,G.forward),mt.lengthSq()<1e-4&&mt.set(G.forward.z,0,-G.forward.x),mt.normalize();for(const at of yt){ot.copy(G.point).addScaledVector(mt,at.side).addScaledVector(G.forward,-at.back).addScaledVector(rt,at.up);const st=$.heightFn(ot.x,ot.z)+2.8;ot.y<st&&(ot.y=st),tt.copy(G.point).addScaledVector(G.forward,4.6).addScaledVector(rt,2.2),_t.copy(tt).sub(ot);const ht=_t.length();if(ht<1||(_t.multiplyScalar(1/ht),j.set(ot,_t),j.far=ht-.35,j.far<=.01))continue;const dt=j.intersectObjects(n.worldRoot.children,!0).find(Ct=>Ct.distance>.2&&Ct.distance<j.far);if(!dt)continue;Rt.blockedViews+=1;const Pt=L(dt.object);Pt==="route"?Rt.routeOcclusions+=1:Pt==="decor"?Rt.decorOcclusions+=1:Pt==="terrain"&&(Rt.terrainOcclusions+=1)}}return Rt}function I(V={}){return t.map(Z=>E(Z.id,V))}function F(V={}){const Z=V.samplePoints??320,$=V.maxBlockedRatio??.2;return t.map(xt=>{const yt=xt.routeHalfWidth*2.8,j=xt.routeHalfWidth*4.1,ot=V.viewOffsets??[{side:yt,back:17,up:11},{side:-yt,back:17,up:11},{side:0,back:23,up:15.5},{side:j,back:12,up:20.5},{side:-j,back:12,up:20.5},{side:0,back:7,up:30}],tt=E(xt.id,{...V,samplePoints:Math.max(180,Math.floor(Z)),viewOffsets:ot}),_t=Math.max(1,tt.samplePoints*tt.viewsPerSample),mt=tt.blockedViews/_t;return{...tt,blockedRatio:Number(mt.toFixed(4)),pass:tt.routeOcclusions===0&&tt.decorOcclusions===0&&mt<=$}})}function L(V){let Z=V;for(;Z;){if(Z===n.routeRoot)return"route";if(Z===n.decorRoot)return"decor";if(Z===n.terrainRoot)return"terrain";Z=Z.parent}return"other"}function D(V,Z,$,xt,yt,j){for(const ot of n.obstacles)if(!(mn(n.activeLevel,ot.x,ot.z)>j&&ot.type!=="edge"))if(ot.shape==="box"){const _t=ot.halfHeight??1;if(Math.abs(Z-ot.y)>_t+yt)continue;const mt=V-ot.x,rt=$-ot.z,Rt=mt*ot.right.x+rt*ot.right.z,St=mt*ot.forward.x+rt*ot.forward.z;if(Math.abs(Rt)<=ot.halfWidth+xt&&Math.abs(St)<=ot.halfLength+xt)return!0}else{const _t=ot.height??1;if(Math.abs(Z-ot.y)>_t+yt)continue;const mt=V-ot.x,rt=$-ot.z,Rt=(ot.radius??1)+xt;if(mt*mt+rt*rt<=Rt*Rt)return!0}return!1}function N(){const V={meshCount:0,shearedMeshes:0,maxStretch:0};if(!n.routeRoot)return V;for(const Z of n.routeRoot.children){if(!Z.isMesh||!Z.geometry?.attributes?.position)continue;Z.geometry.boundingBox||Z.geometry.computeBoundingBox();const $=Z.geometry.boundingBox;if(!$)continue;const xt=$.max.x-$.min.x,yt=$.max.y-$.min.y,j=$.max.z-$.min.z,ot=Math.max(xt,yt,j,.001),tt=Z.matrixWorld.elements,_t=xt*Math.hypot(tt[0],tt[1],tt[2]),mt=yt*Math.hypot(tt[4],tt[5],tt[6]),rt=j*Math.hypot(tt[8],tt[9],tt[10]),Rt=Math.max(_t,mt,rt),St=Rt/ot;V.maxStretch=Math.max(V.maxStretch,St),V.meshCount+=1;const G=Z.userData?.routeContinuous===!0;(St>8.5||!G&&Rt>180)&&(V.shearedMeshes+=1)}return V}function H(){const V=new z,Z=new z,$=new z,xt=new z,yt=new z,j=new z,ot=new z,tt={triangleCount:0,oversizedFaces:0,degenerateFaces:0,maxEdge:0},_t=(mt,rt,Rt,St,G)=>{V.set(rt.getX(Rt),rt.getY(Rt),rt.getZ(Rt)),Z.set(rt.getX(St),rt.getY(St),rt.getZ(St)),$.set(rt.getX(G),rt.getY(G),rt.getZ(G)),mt.localToWorld(V),mt.localToWorld(Z),mt.localToWorld($);const at=xt.copy(V).sub(Z).length(),st=j.copy(Z).sub($).length(),ht=yt.copy($).sub(V).length(),dt=Math.max(at,st,ht);tt.maxEdge=Math.max(tt.maxEdge,dt),xt.copy(Z).sub(V),yt.copy($).sub(V);const Pt=ot.copy(xt).cross(yt).length()*.5;Pt<=5e-4&&(tt.degenerateFaces+=1),(dt>24||Pt>160)&&(tt.oversizedFaces+=1),tt.triangleCount+=1};for(const mt of n.terrainRoot.children){if(!mt.isMesh||!mt.geometry?.attributes?.position)continue;const rt=mt.geometry.attributes.position,Rt=mt.geometry.index?.array;if(Rt)for(let St=0;St<Rt.length;St+=3)_t(mt,rt,Rt[St],Rt[St+1],Rt[St+2]);else for(let St=0;St<rt.count;St+=3)_t(mt,rt,St,St+1,St+2)}return tt}function X(){const V=new z,Z=new z,$=new z,xt=new z,yt=new z,j=new z,ot=new z,tt={meshCount:0,shearedMeshes:0,triangleCount:0,oversizedFaces:0,degenerateFaces:0,shardFaces:0,maxEdge:0};if(!n.decorRoot)return tt;const _t=[];n.decorRoot.traverse(rt=>{rt.isMesh&&rt.userData?.decorType==="mountain"&&rt.geometry?.attributes?.position&&_t.push(rt)});const mt=(rt,Rt,St,G,at)=>{V.set(Rt.getX(St),Rt.getY(St),Rt.getZ(St)),Z.set(Rt.getX(G),Rt.getY(G),Rt.getZ(G)),$.set(Rt.getX(at),Rt.getY(at),Rt.getZ(at)),rt.localToWorld(V),rt.localToWorld(Z),rt.localToWorld($);const st=xt.copy(V).sub(Z).length(),ht=j.copy(Z).sub($).length(),dt=yt.copy($).sub(V).length(),Pt=Math.max(st,ht,dt),Ct=Math.max(1e-4,Math.min(st,ht,dt));tt.maxEdge=Math.max(tt.maxEdge,Pt),xt.copy(Z).sub(V),yt.copy($).sub(V);const Ot=ot.copy(xt).cross(yt).length()*.5;Ot<=.0025&&(tt.degenerateFaces+=1),(Pt>36||Ot>240)&&(tt.oversizedFaces+=1),Pt/Ct>18&&Pt>11&&(tt.shardFaces+=1),tt.triangleCount+=1};for(const rt of _t){rt.geometry.boundingBox||rt.geometry.computeBoundingBox();const Rt=rt.geometry.boundingBox;if(!Rt)continue;const St=Rt.max.x-Rt.min.x,G=Rt.max.y-Rt.min.y,at=Rt.max.z-Rt.min.z,st=Math.max(St,G,at,.001),ht=rt.matrixWorld.elements,dt=St*Math.hypot(ht[0],ht[1],ht[2]),Pt=G*Math.hypot(ht[4],ht[5],ht[6]),Ct=at*Math.hypot(ht[8],ht[9],ht[10]),Ot=Math.max(dt,Pt,Ct);(Ot/st>5.5||Ot>120)&&(tt.shearedMeshes+=1),tt.meshCount+=1;const fe=rt.geometry.attributes.position,W=rt.geometry.index?.array;if(W)for(let U=0;U<W.length;U+=3)mt(rt,fe,W[U],W[U+1],W[U+2]);else for(let U=0;U<fe.count;U+=3)mt(rt,fe,U,U+1,U+2)}return tt}return{install:l,enter:p,exit:_,toggle:T,cycleLevel:w,update:R,analyzeLevel:C,analyzeAllLevels:S,runFullAudit:y,runFullMapSweep:P,runFreeCamAudit:E,runFreeCamAuditAll:I,runCompleteFreeCamValidation:F,get active(){return a.active}}}function Cv(n=512){const t=document.createElement("canvas");t.width=n,t.height=n;const e=t.getContext("2d");e.fillStyle="#000000",e.fillRect(0,0,n,n);const i=new qu(t);return i.wrapS=oo,i.wrapT=oo,{canvas:t,ctx:e,texture:i}}function Pv(n,t,e){const i=new $t(n),o=t?new $t(16100926):i.clone().offsetHSL(0,-.08,-.05),r=t?new $t(16769188):i.clone().offsetHSL(.08,.1,.1),a=i.clone().offsetHSL(0,0,-.15);return{frame:new Y({color:i,roughness:.36,metalness:.48,map:e.frame,normalMap:e.roadNormal,normalScale:new Gt(.16,.16)}),darkRubber:new Y({color:1844013,roughness:.88,metalness:.09,map:e.rubber}),chrome:new Y({color:14081766,roughness:.22,metalness:.92,map:e.metal}),skin:new Y({color:15648936,roughness:.76,metalness:.02}),cloth:new Y({color:o,roughness:.94,metalness:.02,map:e.cloth}),armor:new Y({color:a,roughness:.35,metalness:.1}),accent:new Y({color:r,roughness:.54,metalness:.12})}}function Fs(n,t){const e=document.createElement("canvas");e.width=n,e.height=n;const i=e.getContext("2d");t(i,n);const o=new qu(e);return o.wrapS=oo,o.wrapT=oo,o.colorSpace=Rn,o.anisotropy=8,o.needsUpdate=!0,o}function Iv(n=1024){return Fs(n,(t,e)=>{t.fillStyle="#2e343b",t.fillRect(0,0,e,e);for(let i=0;i<2500;i+=1){const o=Math.random()*e,r=Math.random()*e,a=.4+Math.random()*1.8,c=32+Math.floor(Math.random()*40);t.fillStyle=`rgba(${c},${c},${c},${.24+Math.random()*.25})`,t.beginPath(),t.arc(o,r,a,0,Math.PI*2),t.fill()}for(let i=0;i<e;i+=Math.max(2,Math.floor(e/160))){const o=.018+Math.random()*.024;t.fillStyle=`rgba(255,255,255,${o})`,t.fillRect(0,i,e,1)}})}function Dv(n=1024){const t=Fs(n,(e,i)=>{e.fillStyle="#9a9a9a",e.fillRect(0,0,i,i);for(let o=0;o<3200;o+=1){const r=Math.random()*i,a=Math.random()*i,c=100+Math.floor(Math.random()*120);e.fillStyle=`rgba(${c},${c},${c},${.15+Math.random()*.24})`,e.fillRect(r,a,1+Math.random()*2,1+Math.random()*2)}});return t.colorSpace=ni,t}function Lv(n=1024){const t=Fs(n,(e,i)=>{e.fillStyle="rgb(128,128,255)",e.fillRect(0,0,i,i);for(let o=0;o<3600;o+=1){const r=Math.random()*i,a=Math.random()*i,c=118+Math.floor(Math.random()*20),l=118+Math.floor(Math.random()*20),u=230+Math.floor(Math.random()*24);e.fillStyle=`rgba(${c},${l},${u},${.18+Math.random()*.2})`,e.fillRect(r,a,1+Math.random()*2,1+Math.random()*2)}});return t.colorSpace=ni,t}function Do(n,t,e=!1,i=512){const o=new $t(n),r=new $t(t);return Fs(i,(c,l)=>{c.fillStyle=`#${o.getHexString()}`,c.fillRect(0,0,l,l),c.strokeStyle=`rgba(${Math.floor(r.r*255)},${Math.floor(r.g*255)},${Math.floor(r.b*255)},0.34)`,c.lineWidth=Math.max(1,Math.floor(l/180));const u=Math.max(8,Math.floor(l/26));for(let m=-l;m<l*2;m+=u)c.beginPath(),c.moveTo(m,0),c.lineTo(m-l,l),c.stroke(),c.beginPath(),c.moveTo(m,l),c.lineTo(m-l,0),c.stroke();if(e)for(let m=0;m<900;m+=1){const g=Math.random()*l,x=Math.random()*l,f=.06+Math.random()*.15;c.fillStyle=`rgba(255,255,255,${f})`,c.fillRect(g,x,1,1)}})}function Fv(n=512){return Fs(n,(t,e)=>{const i=t.createLinearGradient(0,0,e,e);i.addColorStop(0,"#d5dde6"),i.addColorStop(.4,"#a9b5c1"),i.addColorStop(1,"#e1e6eb"),t.fillStyle=i,t.fillRect(0,0,e,e);for(let o=0;o<e;o+=3){const r=.04+Math.random()*.05;t.fillStyle=`rgba(255,255,255,${r})`,t.fillRect(0,o,e,1)}})}function wu(n,t,e,i,o){for(let r=0;r<i;r+=1){const a=new k(new At(.011,.011,t*1.9,8),o);a.rotation.x=r/i*Math.PI,a.position.x=e,n.add(a)}}function Nv(n,t){if(n==="turbo"){const r=new wt,a=new k(new At(.15,.38,.86,16),t.turbo);a.rotation.x=Math.PI/2,a.position.set(0,0,.1);const c=new k(new At(.24,.1,.3,16),t.turboAccent);c.rotation.x=Math.PI/2,c.position.set(0,0,-.44);const l=new k(new Q(.06,.4,.3),t.turboAccent);l.position.set(0,.2,-.2);const u=new k(new Q(.4,.06,.3),t.turboAccent);u.position.set(.2,0,-.2);const m=new k(new Q(.4,.06,.3),t.turboAccent);return m.position.set(-.2,0,-.2),r.add(a,c,l,u,m),r}if(n==="bash"){const r=new wt,a=new k(new qo(.38,1),t.bash),c=new Nn(.12,.28,8);for(let l=0;l<5;l++){const u=new k(c,t.bashAccent);u.position.set(Math.cos(l*Math.PI*2/5)*.3,.2,Math.sin(l*Math.PI*2/5)*.3),u.lookAt(0,-.5,0),r.add(u)}return r.add(a),r}if(n==="shock"){const r=new wt,a=new k(new qo(.28,0),t.shock),c=new k(new Pn(.48,.04,8,32),t.shockAccent);c.rotation.x=Math.PI/2;const l=new k(new Pn(.38,.03,8,32),t.shockAccent);return l.rotation.y=Math.PI/3,l.rotation.x=Math.PI/4,r.add(a,c,l),r}if(n==="shield"){const r=new wt,a=new k(new kr(.34,0),t.shield),c=new H0(new As(.48,0)),l=new l0(c,new Xu({color:10416577,linewidth:2}));return r.add(a,l),r}if(n==="banana"){const r=new wt,a=new k(new Pn(.24,.07,12,24,Math.PI*1.25),t.banana);a.rotation.z=Math.PI*.52,a.position.y=.02;const c=new k(new Nn(.06,.14,10),t.bananaAccent);c.position.set(.18,.18,0),c.rotation.z=-Math.PI*.08;const l=c.clone();return l.position.set(-.16,-.14,0),l.rotation.z=Math.PI*.84,r.add(a,c,l),r}if(n==="bomb"){const r=new wt,a=new k(new en(.28,18,18),t.bomb),c=new k(new Pn(.3,.026,10,26),t.bombAccent);c.rotation.x=Math.PI/2;const l=new k(new At(.024,.024,.18,8),t.bombAccent);l.position.set(0,.24,0);const u=new k(new en(.045,8,8),t.bombAccent);return u.position.set(0,.34,0),r.add(a,c,l,u),r}const e=new wt,i=new k(new At(.3,.34,.24,12),t.trap),o=new Nn(.06,.18,8);for(let r=0;r<6;r+=1){const a=new k(o,t.trapAccent),c=r/6*Math.PI*2;a.position.set(Math.cos(c)*.3,.02,Math.sin(c)*.3),a.rotation.x=Math.PI/2,a.rotation.z=c,e.add(a)}return e.add(i),e}const yu={turbo:{scale:2.02,spinMul:1.22,floatMul:1.08},bash:{scale:1.92,spinMul:1.12,floatMul:1.02},shock:{scale:2.05,spinMul:1.28,floatMul:1.08},shield:{scale:2.08,spinMul:1.16,floatMul:1.12},trap:{scale:1.88,spinMul:1.08,floatMul:1},banana:{scale:2.15,spinMul:1.18,floatMul:1.16},bomb:{scale:2.08,spinMul:1.24,floatMul:1.14}};function Uv(){const n=Iv();n.repeat.set(3.5,28);const t=Lv();t.repeat.set(3.5,28);const e=Dv();e.repeat.set(3.5,28);const i=Do(5003890,2765633,!0),o=Do(5074324,9285848,!1),r=Do(2106670,724756,!0),a=Do(7229496,4075298,!0),c=Do(4158020,2445612,!0),l=Do(7371138,5463140,!0),u=Fv(),m={roadAlbedo:n,roadNormal:t,roadRoughness:e,cloth:i,frame:o,rubber:r,bark:a,leaf:c,stone:l,metal:u},g={turbo:new Y({color:16761165,emissive:8146706,emissiveIntensity:.5,roughness:.38,metalness:.22}),turboAccent:new Y({color:16771256,roughness:.26,metalness:.3}),bash:new Y({color:16743011,emissive:8334882,emissiveIntensity:.55,roughness:.42,metalness:.2}),bashAccent:new Y({color:16764086,roughness:.38,metalness:.18}),shock:new Y({color:7129343,emissive:2385817,emissiveIntensity:.7,roughness:.3,metalness:.26}),shockAccent:new Y({color:11857151,roughness:.28,metalness:.32}),shield:new Y({color:9043895,emissive:2985817,emissiveIntensity:.52,roughness:.34,metalness:.16}),banana:new Y({color:16375644,emissive:9402646,emissiveIntensity:.52,roughness:.42,metalness:.12}),bananaAccent:new Y({color:16774318,roughness:.34,metalness:.08}),bomb:new Y({color:4344406,emissive:2106931,emissiveIntensity:.55,roughness:.32,metalness:.52}),bombAccent:new Y({color:16757114,emissive:9652514,emissiveIntensity:.62,roughness:.28,metalness:.26}),trap:new Y({color:11571065,roughness:.55,metalness:.16}),trapAccent:new Y({color:16749933,emissive:7285274,emissiveIntensity:.44,roughness:.36,metalness:.18})},x=new Set(Object.values(g)),f=[{body:new Y({color:5796495,roughness:.72,metalness:.22}),trim:new Y({color:10993622,roughness:.45,metalness:.25})},{body:new Y({color:8022371,roughness:.84,metalness:.08}),trim:new Y({color:13810069,roughness:.56,metalness:.14})},{body:new Y({color:4013892,roughness:.6,metalness:.6}),trim:new Y({color:9344680,roughness:.42,metalness:.58})},{body:new Y({color:2241348,roughness:.4,metalness:.8}),trim:new Y({color:5596791,roughness:.3,metalness:.9})},{body:new Y({color:6706517,roughness:.9,metalness:.1}),trim:new Y({color:10061960,roughness:.7,metalness:.2})},{body:new Y({color:2829099,roughness:.3,metalness:.8,map:m.metal}),trim:new Y({color:16777215,roughness:.1,metalness:.9})},{body:new Y({color:11903895,roughness:.9,metalness:.1,map:m.stone}),trim:new Y({color:6049092,roughness:.8,metalness:.2})},{body:new Y({color:1981023,roughness:.5,metalness:.6}),trim:new Y({color:12900578,roughness:.3,metalness:.8})}],v=new Y({color:1122867,roughness:.1,metalness:.9,envMapIntensity:1}),A=new Y({color:1711136,roughness:.92}),M=new Y({color:4475733,roughness:.88});function d(s){s&&s.traverse(B=>{if(!B.isMesh)return;B.geometry?.dispose&&B.geometry.dispose();const b=Array.isArray(B.material)?B.material:[B.material];for(const q of b)!q||x.has(q)||typeof q.dispose=="function"&&q.dispose()})}function h(s,B){if(!s)return;const b=yu[B]??yu.trap,q=s.userData.core;q&&(s.remove(q),d(q));const K=Nv(B,g);s.add(K),s.scale.setScalar(b.scale),s.userData.anim={floatAmp:(.2+Math.random()*.14)*b.floatMul,spinSpeed:(1.8+Math.random()*1.4)*b.spinMul,pulseSpeed:2.2+Math.random()*1.5},s.userData.halo=null,s.userData.core=K,s.userData.pickupType=B,s.traverse(ct=>{ct.isMesh&&(ct.castShadow=!0,ct.receiveShadow=!0)})}function p(s){return new Y({color:s,map:m.roadAlbedo,normalMap:m.roadNormal,roughnessMap:m.roadRoughness,normalScale:new Gt(.7,.7),roughness:.78,metalness:.04})}function _(s){const B=new Y({color:s,map:m.bark,roughness:.84,metalness:.08});return B.map.repeat.set(2,12),B}function T(s){return new Y({color:s,emissive:new $t(s).multiplyScalar(.2),emissiveIntensity:.45,roughness:.32,metalness:.18})}function w({color:s,isPlayer:B}){const b=new wt,q=new wt,K=new wt,ct=new wt;b.add(q),q.add(K,ct);const pt=Pv(s,B,m);Cv(512);const Lt=(En,Ze,ui,cn,Qn=pt.frame,qn=18)=>{const ti=new k(new At(En,En,Ze,qn),Qn);return ti.position.copy(ui),ti.rotation.set(cn.x,cn.y,cn.z),K.add(ti),ti};Lt(.06,2.05,new z(0,.85,0),new z(Math.PI/2,0,0)),Lt(.055,1.15,new z(0,1.14,.3),new z(Math.PI/2,0,0)),Lt(.05,1.08,new z(0,.72,-.5),new z(1.02,0,0)),Lt(.05,1.08,new z(0,.72,.5),new z(-1.02,0,0)),Lt(.044,.94,new z(0,1.03,-.58),new z(.66,0,0)),Lt(.044,.94,new z(0,1.03,.58),new z(-.66,0,0));const Mt=new wt;Mt.position.set(0,.6,-.36),K.add(Mt),Lt(.036,1.02,new z(0,-.12,-.44),new z(1.24,0,0),pt.darkRubber,14);const bt=Lt(.038,1.1,new z(0,-.27,-.47),new z(Math.PI/2+.52,0,0),pt.darkRubber,14);Mt.add(bt);const Ht=new wt;Ht.position.set(0,.95,-.36),K.add(Ht);const qt=new k(new At(.04,.04,.42,16),pt.chrome);qt.rotation.x=Math.PI/2.5,qt.position.z=-.06,Ht.add(qt);const vt=new wt;vt.position.set(0,1.18,.9),K.add(vt);const Xt=new k(new Q(.06,.06,.18),pt.chrome);Xt.position.set(0,0,.09),vt.add(Xt);const It=new k(new At(.037,.037,.76,20),pt.chrome);It.rotation.z=Math.PI/2,It.position.z=.18,vt.add(It);const Vt=new At(.052,.052,.17,16),Nt=new k(Vt,pt.darkRubber);Nt.rotation.z=Math.PI/2,Nt.position.set(-.33,0,.18);const ie=Nt.clone();ie.position.set(.33,0,.18),vt.add(Nt,ie);const he=new wt;he.position.set(0,-.2,.1),vt.add(he);const Qt=new k(new At(.032,.032,1.1,14),pt.chrome);Qt.position.set(-.12,-.45,.02);const be=Qt.clone();be.position.x=.12,he.add(Qt,be);const dn=new Y({color:1185309,roughness:.9,metalness:.14,map:m.rubber}),We=new Y({color:12042958,roughness:.22,metalness:.84,map:m.metal}),Se=new Pn(.49,.065,24,72),_n=new Pn(.44,.02,16,56),Le=new Y({color:13095387,roughness:.24,metalness:.86,map:m.metal}),Je=new At(.08,.08,.26,20),an=new At(.2,.2,.018,28),je=new Y({color:10200240,roughness:.34,metalness:.72,map:m.metal}),vn=new At(.012,.012,.085,8),Qe=new wt;Qe.position.set(0,-.55,-.95),Mt.add(Qe);const kn=new wt;Qe.add(kn);const Ti=new wt;kn.add(Ti);const po=new k(Se,dn);po.rotation.y=Math.PI/2;const ns=new k(_n,We);ns.rotation.y=Math.PI/2;const mo=new k(Je,Le);mo.rotation.z=Math.PI/2;const is=new k(an,je);is.rotation.z=Math.PI/2,is.position.x=-.095;const os=new k(vn,Le);os.position.set(.06,.52,0),Ti.add(po,ns,mo,is,os),wu(Ti,.44,0,8,pt.chrome);const qe=new wt;qe.position.set(0,-.93,.02),he.add(qe);const Dn=new wt;qe.add(Dn);const Xn=new wt;Dn.add(Xn);const go=new k(Se,dn);go.rotation.y=Math.PI/2;const ss=new k(_n,We);ss.rotation.y=Math.PI/2;const rs=new k(Je,Le);rs.rotation.z=Math.PI/2;const Hi=new k(an,je);Hi.rotation.z=Math.PI/2,Hi.position.x=.095;const Bn=new k(vn,Le);Bn.position.set(-.06,-.52,0),Xn.add(go,ss,rs,Hi,Bn),wu(Xn,.44,0,8,pt.chrome);const Jc=new k(new At(.032,.032,.32,12),pt.chrome);Jc.position.set(0,1.2,-.24);const jc=new k(new Q(.38,.08,.28),pt.darkRubber);jc.position.set(0,1.34,-.24),K.add(Jc,jc);const Ws=new wt;Ws.position.set(0,.7,-.02),K.add(Ws);const Xs=new k(new At(.02,.02,.32,8),pt.chrome);Xs.rotation.z=Math.PI/2,Xs.position.set(.16,0,.3);const Qc=Xs.clone();Qc.position.set(-.16,0,-.3);const Vr=new k(new Q(.22,.05,.1),pt.darkRubber);Vr.position.set(.22,0,.3);const tl=Vr.clone();tl.position.set(-.22,0,-.3),Ws.add(Xs,Qc,Vr,tl);const qs=new wt;qs.visible=!1;const Tf=new Y({color:16766287,emissive:12092939,emissiveIntensity:.8,transparent:!0,opacity:.85,roughness:.15,metalness:.7,side:Cn});for(let En=0;En<3;En++){const Ze=new Qu;Ze.moveTo(0,.4),Ze.lineTo(.3,.4),Ze.quadraticCurveTo(.3,-.2,0,-.5),Ze.quadraticCurveTo(-.3,-.2,-.3,.4),Ze.lineTo(0,.4);const ui={depth:.08,bevelEnabled:!0,bevelSegments:2,steps:2,bevelSize:.03,bevelThickness:.03},cn=new Hc(Ze,ui);cn.center();const Qn=new k(cn,Tf.clone());Qn.userData.orbitIndex=En,qs.add(Qn)}K.add(qs),ct.position.set(0,1.12,-.02);const el=new k(new Di(.2,.18,8,18),pt.cloth);el.position.set(0,.04,-.06),ct.add(el);const Vi=new wt;Vi.position.set(0,.2,.04),ct.add(Vi);const nl=new k(new Di(.24,.66,10,20),pt.cloth);nl.position.set(0,.43,.09),Vi.add(nl);const Gr=new k(new Q(.3,.24,.14),pt.accent);Gr.position.set(0,.46,.24),Gr.rotation.x=-.22,Vi.add(Gr);const Ys=new wt;Ys.position.set(0,.94,.23),Vi.add(Ys);const as=new wt;as.position.set(0,.06,0),Ys.add(as);const Ef=new k(new en(.2,22,22),pt.skin),il=new k(new en(.225,22,22,0,Math.PI*2,0,Math.PI*.66),pt.darkRubber);il.position.y=.02,as.add(Ef,il);const Af=new en(.03,10,10),Rf=new Y({color:16119285,roughness:.3,metalness:.02}),Cf=new Y({color:1513239,roughness:.2,metalness:.05}),Wr=new k(Af,Rf),ol=Wr.clone();Wr.position.set(-.07,.02,.18),ol.position.set(.07,.02,.18);const Xr=new k(new en(.014,8,8),Cf),sl=Xr.clone();Xr.position.set(-.07,.02,.204),sl.position.set(.07,.02,.204);const qr=new k(new Nn(.03,.08,10),pt.skin);qr.position.set(0,-.01,.205),qr.rotation.x=Math.PI/2;const Yr=new k(new Pn(.055,.01,8,12,Math.PI),new Y({color:9391682,roughness:.6,metalness:.02}));Yr.position.set(0,-.08,.16),Yr.rotation.x=Math.PI,as.add(Wr,ol,Xr,sl,qr,Yr);const rl=En=>{const Ze=new wt;Ze.position.set(En*.32,.78,.35),Vi.add(Ze);const ui=new k(new Di(.07,.34,8,16),pt.cloth);ui.position.set(0,-.2,.03),Ze.add(ui);const cn=new wt;cn.position.set(0,-.38,.08),Ze.add(cn);const Qn=new k(new Di(.06,.34,8,16),pt.skin);Qn.position.set(0,-.18,.08),cn.add(Qn);const qn=new wt;qn.position.set(0,-.34,.1),cn.add(qn);const ti=new k(new en(.07,12,12),pt.skin);return ti.position.set(0,-.04,.04),qn.add(ti),{shoulder:Ze,elbow:cn,wrist:qn}},al=En=>{const Ze=new wt;Ze.position.set(En*.19,.03,-.08),ct.add(Ze);const ui=new k(new Di(.09,.44,8,16),pt.cloth);ui.position.set(0,-.28,.04),Ze.add(ui);const cn=new wt;cn.position.set(0,-.52,.05),Ze.add(cn);const Qn=new k(new Di(.075,.38,8,16),pt.cloth);Qn.position.set(0,-.22,.03),cn.add(Qn);const qn=new wt;qn.position.set(0,-.4,.05),cn.add(qn);const ti=new k(new Q(.12,.06,.22),pt.darkRubber);return ti.position.set(0,-.02,.11),qn.add(ti),{hip:Ze,knee:cn,ankle:qn}},Zr=rl(-1),$r=rl(1),Kr=al(-1),Jr=al(1);return b.traverse(En=>{En.isMesh&&(En.castShadow=!0,En.receiveShadow=!0)}),{group:b,alignRoot:q,bikeRoot:K,riderRoot:ct,handleBarRoot:vt,forkPivot:he,rearSwingPivot:Mt,shockPivot:Ht,frontWheel:Dn,rearWheel:kn,frontWheelSpin:Dn,rearWheelSpin:kn,shieldOrbs:qs,crankRoot:Ws,rig:{spinePivot:Vi,neckPivot:Ys,headPivot:as,leftShoulder:Zr.shoulder,leftElbow:Zr.elbow,leftWrist:Zr.wrist,rightShoulder:$r.shoulder,rightElbow:$r.elbow,rightWrist:$r.wrist,leftHip:Kr.hip,leftKnee:Kr.knee,leftAnkle:Kr.ankle,rightHip:Jr.hip,rightKnee:Jr.knee,rightAnkle:Jr.ankle},gripL:Nt,gripR:ie}}function R(s,B,b){const q=new wt,K=new k(new At(.14*s,.25*s,2.3*s,18),new Y({color:b?7952701:6967352,roughness:.9,map:m.bark}));K.position.y=1.06*s,q.add(K);const ct=new Y({color:b?9599322:3894848,roughness:.9,map:m.leaf}),pt=new k(new Nn(1.04*s,2.1*s,16),ct),Lt=new k(new Nn(.82*s,1.8*s,16),ct),Mt=new k(new en(.66*s,14,14),ct);return pt.position.y=2.34*s,Lt.position.y=3.08*s,Mt.position.y=3.95*s,q.add(pt,Lt,Mt),q.rotation.y=B()*Math.PI*2,q.traverse(bt=>{bt.isMesh&&(bt.castShadow=!0,bt.receiveShadow=!0)}),q.userData.obstacleRadius=1.24*s,q.userData.obstacleHeight=4.2*s,q.userData.crashWeight=1.02,q.userData.type="tree",q}const C=[];function S(){for(let s=0;s<4;s++){const B=new qo(1,5),b=B.attributes.position,q=[];for(let K=0;K<b.count;K++){const ct=b.getX(K),pt=b.getY(K),Lt=b.getZ(K);let Mt=Math.sin(ct*3.1+s*4)*Math.cos(Lt*3.1-s)*.15;Mt+=Math.sin(pt*7.4-s*2)*Math.cos(ct*7.4+s)*.08,Mt+=Math.sin(Lt*13.7+s)*Math.cos(pt*13.7-s)*.04;let bt=1,Ht=1,qt=1;s===0?(bt=1.3,Ht=.7,qt=1.1):s===1?(bt=.8,Ht=1.5,qt=.8):s===2?(bt=1.1,Ht=1,qt=1.2):(bt=1.2,Ht=.9,qt=1);const vt=ct*bt*(1+Mt),Xt=pt*Ht*(1+Mt),It=Lt*qt*(1+Mt);b.setXYZ(K,vt,Xt,It);const Vt=.4+(Mt+.15)*2.5,Nt=Math.max(.2,Math.min(1,Vt)),ie=Nt*(1+Math.sin(pt*5)*.05),he=Nt*(1+Math.cos(ct*4)*.05),Qt=Nt*(1-Math.sin(Lt*6)*.05);q.push(ie,he,Qt)}B.computeVertexNormals(),B.setAttribute("color",new Re(q,3)),C.push(B)}}function y(s,B,b=Math.random){C.length===0&&S();const q=Math.floor(b()*4),K=C[q],ct=new k(K,new Y({color:B?10119754:8028810,roughness:.95,metalness:.05,map:m.stone,vertexColors:!0}));ct.scale.setScalar(s);const pt=ct.scale.set.bind(ct.scale);return ct.scale.set=function(Lt,Mt,bt){return typeof Mt>"u"?pt(Lt*s,Lt*s,Lt*s):pt(Lt*s,Mt*s,bt*s),this},ct.rotation.set(b()*Math.PI,b()*Math.PI,b()*Math.PI),ct.castShadow=!0,ct.receiveShadow=!0,ct.userData.obstacleRadius=1.36*s,ct.userData.obstacleHeight=2.7*s,ct.userData.crashWeight=1.44,ct.userData.type="rock",ct}function P(s,B,b){const q=new wt;if(B()<.5){const K=new k(new At(.32*s,.38*s,2.8*s,12),new Y({color:b?9595209:8227700,roughness:.88,map:m.stone}));K.position.y=1.4*s;const ct=new k(new Q(.92*s,.28*s,.92*s),new Y({color:b?12094308:9873291,roughness:.8,metalness:.05}));ct.position.y=2.76*s,q.add(K,ct)}else{const K=new k(new As(.78*s,1),new Y({color:b?9271896:5338957,roughness:.95,map:m.leaf})),ct=new k(new At(.28*s,.36*s,.28*s,10),new Y({color:b?9267015:7305092,roughness:.9,map:m.stone}));K.position.y=.74*s,ct.position.y=.14*s,q.add(K,ct)}return q.traverse(K=>{K.isMesh&&(K.castShadow=!0,K.receiveShadow=!0)}),q.userData.obstacleRadius=.95*s,q.userData.obstacleHeight=2.3*s,q.userData.crashWeight=1.12,q.userData.type="prop",q}function E(s,B){const b=new kr(s*1.5,0);b.scale(1,1.8+B()*.8,1);const q=b.attributes.position;for(let ct=0;ct<q.count;ct++)q.setY(ct,q.getY(ct)+(B()-.5)*.2);b.computeVertexNormals();const K=new k(b,new Y({color:10079487,transparent:!0,opacity:.85,roughness:.1,metalness:.9,emissive:2245734,emissiveIntensity:.2}));return K.position.y=1*s,K.rotation.y=B()*Math.PI,K.castShadow=!0,K.receiveShadow=!0,K.userData.obstacleRadius=1*s,K.userData.obstacleHeight=3*s,K.userData.crashWeight=1.6,K.userData.type="crystal",K}function I(s,B,b,q,K){const ct=f[q%f.length],pt=new wt,Lt=4+K()*2,Mt=s*1.05,bt=B*1.05,Ht=new k(new Q(Mt,Lt,bt),ct.trim);Ht.position.y=Lt*.5,Ht.castShadow=!0,Ht.receiveShadow=!0,pt.add(Ht);const qt=Math.max(2,Math.floor(s/4));for(let ie=0;ie<=qt;ie++){const he=-Mt/2+ie/qt*Mt,Qt=new k(new Q(.8,Lt,bt+.2),M);Qt.position.set(he,Lt*.5,0),pt.add(Qt)}const vt=Math.max(2,Math.floor(B/4));for(let ie=0;ie<=vt;ie++){const he=-bt/2+ie/vt*bt,Qt=new k(new Q(Mt+.2,Lt,.8),M);Qt.position.set(0,Lt*.5,he),pt.add(Qt)}const Xt=b>60?3:b>30?2:1;let It=Lt,Vt=s,Nt=B;for(let ie=0;ie<Xt;ie++){const he=ie===Xt-1,Qt=he?b-It:(b-Lt)/Xt*(.8+K()*.4),be=new k(new Q(Vt,Qt,Nt),ct.body);if(be.position.y=It+Qt*.5,be.castShadow=!0,be.receiveShadow=!0,pt.add(be),K()>.3)if(K()>.5){const Le=Math.max(3,Math.floor(Vt/3)),Je=Vt*.8,an=Nt*.8,je=new k(new Q(Vt+.1,Qt-1,an),v);je.position.y=It+Qt*.5;const vn=new k(new Q(Je,Qt-1,Nt+.1),v);vn.position.y=It+Qt*.5,pt.add(je,vn);for(let Qe=0;Qe<=Le;Qe++){const kn=-Vt/2+Qe/Le*Vt,Ti=new k(new Q(.4,Qt,Nt+.2),ct.trim);Ti.position.set(kn,It+Qt*.5,0),pt.add(Ti)}}else{const Je=Math.floor(Qt/3.5);for(let an=0;an<Je;an++){const je=It+an*3.5,vn=new k(new Q(Vt+.1,3.5*.6,Nt+.1),v);vn.position.y=je+3.5*.5,pt.add(vn);const Qe=new k(new Q(Vt+.2,3.5*.4,Nt+.2),ct.trim);Qe.position.y=je+3.5*.8,pt.add(Qe)}}const We=.6,Se=new k(new Q(Vt*.95,We,Nt*.95),A);if(Se.position.y=It+Qt+We*.5,pt.add(Se),It+=Qt,Vt*=.75+K()*.15,Nt*=.75+K()*.15,K()>.4||he){const _n=K()*4+2,Le=K()*4+2,Je=K()*2+1,an=new k(new Q(_n,Je,Le),ct.trim);if(an.position.set((K()-.5)*(Vt/2),It+Je*.5,(K()-.5)*(Nt/2)),pt.add(an),he&&b>40){const je=b*.2+K()*10,vn=new k(new At(.1,.4,je,8),M);if(vn.position.set(0,It+je*.5,0),pt.add(vn),K()>.5&&Vt>10&&Nt>10){const Qe=new k(new At(4,4,.5,16),M);Qe.position.set(0,It+.25,0),pt.add(Qe)}}}}return pt}function F(s,B){const b=new k(new Q(.8*s,4.5*s,.8*s),new Y({color:1118481,emissive:B()>.5?65535:16711935,emissiveIntensity:.6+B()*.4,roughness:.2,metalness:.8}));return b.position.y=2.25*s,b.rotation.y=B()*Math.PI,b.castShadow=!0,b.receiveShadow=!0,b.userData.obstacleRadius=.6*s,b.userData.obstacleHeight=4.5*s,b.userData.crashWeight=1.2,b.userData.type="neon_obelisk",b}function L(s,B){const b=new At(s*.8,s*1,s*4.5,8),q=b.attributes.position;for(let Mt=0;Mt<q.count;Mt++){const bt=q.getY(Mt),Ht=(B()-.5)*.3;q.setX(Mt,q.getX(Mt)*(1+Ht)),q.setZ(Mt,q.getZ(Mt)*(1+Ht)),bt>s*1&&q.setY(Mt,bt-(q.getX(Mt)+q.getZ(Mt))*.4)}b.computeVertexNormals();const K=new k(b,new Y({color:5923669,roughness:.95,map:m.stone}));K.position.y=s*2.25;const ct=new Pn(s*.9,s*.1,4,8),pt=new k(ct,new Y({color:4521898,emissive:2263125,emissiveIntensity:.8,roughness:.4}));pt.rotation.x=Math.PI/2+.2,pt.position.y=s*2.5;const Lt=new wt;return Lt.add(K,pt),Lt.traverse(Mt=>{Mt.isMesh&&(Mt.castShadow=!0,Mt.receiveShadow=!0)}),Lt.userData.obstacleRadius=s*1.2,Lt.userData.obstacleHeight=s*4.6,Lt.userData.crashWeight=1.6,Lt.userData.type="ruin",Lt}function D(s,B){const b=new wt,q=new k(new Nn(s*1.5,s*1.2,12),new Y({color:2232588,roughness:.95}));q.position.y=s*.6;const K=new k(new en(s*.5,8,8),new Y({color:16726784,emissive:16726784,emissiveIntensity:.8}));return K.position.y=s*1,b.add(q,K),b.traverse(ct=>{ct.isMesh&&(ct.castShadow=!0,ct.receiveShadow=!0)}),b.userData.obstacleRadius=1.2*s,b.userData.obstacleHeight=1.2*s,b.userData.crashWeight=1.8,b.userData.type="magma_vent",b}function N(s){const B=new wt;return h(B,s),B}const H=(s,B)=>R(s*1.1,B,!1),X=(s,B)=>{const b=R(s*1.3,B,!1);return b.scale.set(1.4,.9,1.4),b},V=(s,B)=>{const b=R(s,B,!1);return b.scale.set(.7,1.5,.7),b},Z=(s,B)=>{const b=R(s,B,!1);return b.scale.set(1.5,.8,1.5),b},$=(s,B)=>{const b=R(s,B,!0);return b.scale.set(1,.2,1),b},xt=(s,B)=>y(s*1.2,!1,B),yt=(s,B)=>{const b=y(s,!1,B);return b.scale.set(2,.3,2),b},j=(s,B)=>{const b=new wt;for(let q=0;q<3;q++){const K=y(s*(.3+B()*.3),!1,B);K.position.set((B()-.5)*s,0,(B()-.5)*s),b.add(K)}return b.userData={obstacleRadius:s,obstacleHeight:s*.6,crashWeight:.5,type:"prop"},b},ot=(s,B)=>{const b=y(s*1.5,!1,B);return b.scale.set(1,2,1),b.rotation.z=.5,b},tt=(s,B)=>{const b=y(s*2,!1,B);return b.scale.set(1.5,1,.5),b.position.y=s,b},_t=(s,B)=>P(s*.8,B,!1),mt=(s,B)=>{const b=P(s,B,!1);return b.scale.set(1.5,.8,1.5),b},rt=(s,B)=>{const b=P(s*.5,B,!1);return b.scale.set(.5,2,.5),b},Rt=(s,B)=>{const b=new wt,q=new k(new At(s*.2,s*.3,s*1.2),new Y({color:14540236}));q.position.y=s*.6;const K=new k(new en(s*.8,12,12,0,Math.PI*2,0,Math.PI/2),new Y({color:11154227}));return K.position.y=s*1.2,b.add(q,K),b.userData={obstacleRadius:s*.8,obstacleHeight:s*1.5,crashWeight:.2,type:"prop"},b},St=(s,B)=>P(s*1.1,B,!1),G=(s,B)=>{const b=new wt,q=new k(new At(s*.1,s*.1,s*1.5),new Y({color:5583650}));q.position.set(-s,s*.75,0);const K=q.clone();K.position.set(s,s*.75,0);const ct=new k(new Q(s*2.2,s*.15,s*.05),new Y({color:5583650}));return ct.position.set(0,s*1.2,0),b.add(q,K,ct),b.userData={obstacleRadius:s*1.2,obstacleHeight:s*1.5,crashWeight:.8,type:"prop"},b},at=(s,B)=>{const b=new wt,q=new k(new Q(s*3,s*2,s*.2),new Y({color:4465169,map:m.bark}));return q.position.y=s,b.add(q),b.userData={obstacleRadius:s*1.5,obstacleHeight:s*2,crashWeight:2,type:"prop"},b},st=(s,B)=>{const b=P(s,B,!0);return b.rotation.z=Math.PI/4,b},ht=(s,B)=>{const b=new wt,q=new k(new At(s*.8,s*.8,s,12),new Y({color:6710886,map:m.stone}));return q.position.y=s*.5,b.add(q),b.userData={obstacleRadius:s*.9,obstacleHeight:s,crashWeight:1.5,type:"prop"},b},dt=(s,B)=>L(s*.8,B),Pt=(s,B)=>{const b=new wt;for(let q=0;q<4;q++){const K=y(s*.4,!1,B);K.scale.set(1.5,.2,1.5),K.position.set((B()-.5)*s,0,(B()-.5)*s),b.add(K)}return b.userData={obstacleRadius:s,obstacleHeight:s*.2,crashWeight:.2,type:"prop"},b},Ct=(s,B)=>{const b=new wt,q=new Y({color:4881466,roughness:.8}),K=new k(new At(s*.3,s*.4,s*3),q);K.position.y=s*1.5;const ct=new k(new At(s*.2,s*.2,s*1.5),q);return ct.position.set(s*.5,s*1.8,0),ct.rotation.z=Math.PI/4,b.add(K,ct),b.userData={obstacleRadius:s*.8,obstacleHeight:s*3,crashWeight:1,type:"tree"},b},Ot=(s,B)=>{const b=new k(new en(s*.6,12,12),new Y({color:5605444}));return b.position.y=s*.5,b.scale.set(1,1.2,1),b.userData={obstacleRadius:s*.7,obstacleHeight:s*1.2,crashWeight:.5,type:"prop"},b},xe=(s,B)=>{const b=P(s,B,!0);return b.scale.set(1.5,.5,.2),b},fe=(s,B)=>{const b=R(s*.8,B,!0);return b.scale.set(.5,.5,.5),b},W=(s,B)=>P(s*.6,B,!0),U=(s,B)=>{const b=y(s,!0,B);return b.scale.set(.6,2.5,.6),b.position.y=s*2,b},it=(s,B)=>{const b=y(s*2,!0,B);return b.scale.set(1,1.5,.3),b.position.y=s*1.5,b},ft=(s,B)=>{const b=new k(new As(s*.5,1),new Y({color:11176021,wireframe:!0}));return b.position.y=s*.5,b.userData={obstacleRadius:s*.6,obstacleHeight:s,crashWeight:.1,type:"prop"},b},Dt=(s,B)=>{const b=y(s*1.2,!0,B);return b.scale.set(1.5,.2,1.5),b},gt=(s,B)=>{const b=L(s*1.2,B);return b.scale.set(.5,1.5,.5),b},ae=(s,B)=>{const b=y(s,!0,B);return b.scale.set(1.2,.5,1.2),b.position.y=s*.5,b},zt=(s,B)=>{const b=new k(new At(s*.4,s*.2,s*.8),new Y({color:13399876}));return b.position.y=s*.4,b.userData={obstacleRadius:s*.5,obstacleHeight:s*.8,crashWeight:.3,type:"prop"},b},ee=(s,B)=>{const b=new wt,q=new k(new Nn(s*1.5,s*2,4),new Y({color:14535850,map:m.cloth}));return q.position.y=s,b.add(q),b.userData={obstacleRadius:s*1.5,obstacleHeight:s*2,crashWeight:.4,type:"prop"},b},oe=(s,B)=>ht(s),Ft=(s,B)=>{const b=new wt,q=new k(new At(s*.05,s*.05,s*1.5),new Y({color:5583650}));q.position.y=s*.75;const K=new k(new Q(s*.8,s*.6,s*.05),new Y({color:11149858}));return K.position.y=s*1.2,b.add(q,K),b.userData={obstacleRadius:s*.4,obstacleHeight:s*1.5,crashWeight:.3,type:"prop"},b},Jt=(s,B)=>E(s,B),me=(s,B)=>{const b=y(s*2,!1,B);return b.material.color.setHex(11197951),b.material.roughness=.2,b.scale.set(1.5,1,1.5),b},se=(s,B)=>{const b=new k(new At(s*2,s*2,.1),new Y({color:8965375,roughness:.1,metalness:.3}));return b.userData={obstacleRadius:s*2,obstacleHeight:.2,crashWeight:.1,type:"prop"},b},Yt=(s,B)=>{const b=E(s*.5,B);return b.scale.set(.5,2,.5),b},ve=(s,B)=>{const b=y(s*1.5,!1,B);return b.material.color.setHex(16777215),b.material.roughness=.9,b.scale.set(2,.4,1.5),b},J=(s,B)=>{const b=R(s,B,!1);return b.children[1].material.color.setHex(14540253),b.scale.set(.8,1.5,.8),b},Bt=(s,B)=>{const b=R(s,B,!0);return b.children.forEach(q=>q.material.color.setHex(13421772)),b},Wt=(s,B)=>{const b=P(s,B,!1);return b.children[0].material.color.setHex(14544639),b},te=(s,B)=>{const b=R(s,B,!0);return b.scale.set(1,.2,1),b.children[0].material.color.setHex(15658734),b},Ut=(s,B)=>{const b=P(s,B,!0);return b.scale.set(1,2,1),b},Et=(s,B)=>{const b=y(s*1.2,!1,B);return b.material.color.setHex(12307677),b},re=(s,B)=>{const b=y(s*3,!1,B);return b.material.color.setHex(11197951),b.scale.set(1.5,1.2,.5),b.position.y=s*1.5,b},_e=(s,B)=>{const b=y(s,!1,B);return b.material.color.setHex(16777215),b.scale.set(2,.3,2),b},Ne=(s,B)=>{const b=y(s,!1,B);return b.scale.set(1.5,.6,1),b},Ce=(s,B)=>{const b=y(s*1.5,!1,B);return b.scale.set(.5,3,.5),b.position.y=s*2,b},Wn=(s,B)=>{const b=new wt,q=new Y({color:16777215,roughness:.9}),K=new k(new en(s*.6,12,12),q);K.position.y=s*.6;const ct=new k(new en(s*.4,12,12),q);return ct.position.y=s*1.4,b.add(K,ct),b.userData={obstacleRadius:s*.6,obstacleHeight:s*1.8,crashWeight:.2,type:"prop"},b},Un=(s,B)=>{const b=P(s,B,!0);return b.rotation.x=Math.PI/2,b},Ns=(s,B)=>{const b=L(s*.5,B);return b.scale.set(.8,.4,.8),b},ci=(s,B)=>G(s),Ko=(s,B)=>{const b=new k(new At(s*.4,s*.4,s*.8),new Y({color:8956620,roughness:.3}));return b.position.y=s*.4,b.userData={obstacleRadius:s*.5,obstacleHeight:s*.8,crashWeight:.5,type:"prop"},b},Us=(s,B)=>{const b=new wt,q=new Y({color:2245768,roughness:.2,metalness:.5}),K=new k(new Q(s*1.8,s*.6,s*4),q);K.position.y=s*.6;const ct=new k(new Q(s*1.4,s*.5,s*2),new Y({color:1118481}));return ct.position.y=s*1.15,ct.position.z=-s*.2,b.add(K,ct),b.userData={obstacleRadius:s*2,obstacleHeight:s*1.5,crashWeight:4,type:"prop"},b},Jo=(s,B)=>{const b=new wt,q=new Y({color:14540253}),K=new k(new Q(s*2,s*2.2,s*5),q);return K.position.y=s*1.2,b.add(K),b.userData={obstacleRadius:s*2.5,obstacleHeight:s*2.5,crashWeight:5,type:"prop"},b},ho=(s,B)=>{const b=new wt,q=new Y({color:11154227,roughness:.6}),K=new k(new Q(s*2.4,s*2.8,s*8),q);return K.position.y=s*1.5,b.add(K),b.userData={obstacleRadius:s*4,obstacleHeight:s*3,crashWeight:8,type:"prop"},b},ks=(s,B)=>G(s),Bi=(s,B)=>st(s*.5,B),Bs=(s,B)=>{const b=new wt,q=new k(new Q(s*2,s*.1,s*.6),new Y({color:5583650}));return q.position.y=s*.4,b.add(q),b.userData={obstacleRadius:s*1.2,obstacleHeight:s*.6,crashWeight:.5,type:"prop"},b},yi=(s,B)=>{const b=new k(new At(s*.3,s*.3,s*.8),new Y({color:3355443}));return b.position.y=s*.4,b.userData={obstacleRadius:s*.4,obstacleHeight:s*.8,crashWeight:.3,type:"prop"},b},jo=(s,B)=>{const b=new k(new Q(s*.5,s*.8,s*.5),new Y({color:2245802}));return b.position.y=s*.4,b.userData={obstacleRadius:s*.4,obstacleHeight:s*.8,crashWeight:.4,type:"prop"},b},Os=(s,B)=>{const b=new k(new Q(s*.8,s*2.2,s*.8),new Y({color:11149858}));return b.position.y=s*1.1,b.userData={obstacleRadius:s*.6,obstacleHeight:s*2.2,crashWeight:1,type:"prop"},b},Qo=(s,B)=>{const b=new k(new Q(s*1.5,s*1.8,s*1.2),new Y({color:2250035}));return b.position.y=s*.9,b.userData={obstacleRadius:s*1,obstacleHeight:s*1.8,crashWeight:1.5,type:"prop"},b},zs=(s,B)=>yi(s*.6),Hs=(s,B)=>{const b=new k(new At(s*.1,s*.1,s*4),new Y({color:5592405}));return b.position.y=s*2,b.userData={obstacleRadius:s*.2,obstacleHeight:s*4,crashWeight:1,type:"prop"},b},zr=(s,B)=>{const b=new k(new Nn(s*.25,s*.6),new Y({color:16737792}));return b.position.y=s*.3,b.userData={obstacleRadius:s*.3,obstacleHeight:s*.6,crashWeight:.2,type:"prop"},b},O=(s,B)=>{const b=new k(new Q(s*2,s*.8,s*.5),new Y({color:11184810}));return b.position.y=s*.4,b.userData={obstacleRadius:s*1.2,obstacleHeight:s*.8,crashWeight:2,type:"prop"},b},et=(s,B)=>se(s*.4),lt=(s,B)=>{const b=new wt,q=new k(new At(s*.2,s*.2,s*5),new Y({color:3355443}));q.position.y=s*2.5;const K=new k(new Q(s*4,s*2,s*.2),new Y({color:13421772}));return K.position.y=s*4,b.add(q,K),b.userData={obstacleRadius:s*2,obstacleHeight:s*5,crashWeight:2,type:"prop"},b},ut=(s,B)=>ee(s*.8),nt=(s,B)=>Ft(s*2),kt=(s,B)=>yi(s),Kt=(s,B)=>Qo(s*.8),ne=(s,B)=>{const b=E(s*2,B);return b.position.y=s*2,b},jt=(s,B)=>{const b=new wt;for(let q=0;q<3;q++){const K=E(s*.5,B);K.position.set((B()-.5)*s,s*.5,(B()-.5)*s),b.add(K)}return b.userData={obstacleRadius:s,obstacleHeight:s,crashWeight:.8,type:"prop"},b},pe=(s,B)=>j(s,B),ge=(s,B)=>{const b=y(s*1.5,!1,B);return b.material.color.setHex(6750207),b.material.emissive.setHex(2263244),b.scale.set(1.5,.2,.5),b},ue=(s,B)=>F(s,B),ye=(s,B)=>{const b=y(s,!1,B);return b.scale.set(.4,4,.4),b.position.y=s*3,b},Ie=(s,B)=>{const b=y(s*2,!1,B);return b.scale.set(1.5,.2,1.5),b.position.y=s*.5,b},He=(s,B)=>tt(s,B),ke=(s,B)=>j(s*2,B),De=(s,B)=>y(s*1.5,!1,B),de=(s,B)=>rt(s,B),Oe=(s,B)=>{const b=y(s,!1,B);return b.material.color.setHex(6715221),b.scale.set(1,.1,1),b},Ee=(s,B)=>{const b=R(s,B,!1);return b.rotation.x=Math.PI/6,b},gn=(s,B)=>Rt(s),Si=(s,B)=>$(s,B),xn=(s,B)=>ee(s*.6),Oi=(s,B)=>Ft(s),ze=(s,B)=>Hs(s*.3),bn=(s,B)=>st(s*.5,B),Tn=(s,B)=>Rt(s*.3),rn=(s,B)=>D(s),hn=(s,B)=>{const b=y(s*1.5,!0,B);return b.material.color.setHex(16724736),b.material.emissive.setHex(11145472),b.scale.set(2,.1,2),b},ts=(s,B)=>{const b=y(s,!0,B);return b.material.color.setHex(2236962),b.scale.set(1.5,.2,1.5),b},li=(s,B)=>{const b=new k(new At(s*.4,s*.4,s*3,6),new Y({color:3355443,roughness:.9}));return b.position.y=s*1.5,b.userData={obstacleRadius:s*.5,obstacleHeight:s*3,crashWeight:2,type:"prop"},b},_h=(s,B)=>ne(s*.6,B),vh=(s,B)=>{const b=y(s*1.2,!0,B);return b.material.color.setHex(7824981),b},Mh=(s,B)=>{const b=y(s,!0,B);return b.material.color.setHex(1118481),b},wh=(s,B)=>ye(s,B),yh=(s,B)=>j(s*1.5,B),Sh=(s,B)=>jt(s,B),bh=(s,B)=>rn(s*.5),Th=(s,B)=>Bt(s,B),Eh=(s,B)=>jt(s*.2,B),Ah=(s,B)=>Ee(s,B),Rh=(s,B)=>tt(s*1.5,B),Ch=(s,B)=>st(s*1.5,B),Ph=(s,B)=>zs(s),Ih=(s,B)=>O(s),Dh=(s,B)=>Jo(s),Lh=(s,B)=>Ft(s*1.2),Fh=()=>[H,X,V,Z,$,xt,yt,j,ot,tt,_t,mt,rt,Rt,St,G,at,st,ht,dt],Nh=()=>[Ct,Ot,xe,fe,W,U,it,ft,Dt,j,dt,gt,ae,zt,j,ee,X,oe,Rt,Ft],Uh=()=>[Jt,me,se,Yt,ve,J,Bt,Wt,te,Ut,Et,re,_e,Ne,Ce,Wn,Un,Ns,ci,Ko],kh=()=>[Us,Jo,ho,ks,Bi,Bs,yi,jo,Os,Qo,zs,Hs,zr,O,et,lt,ut,nt,kt,Kt],Bh=()=>[ne,jt,pe,ge,ue,ye,Ie,He,ke,De,de,Oe,Ee,gn,Si,xn,Oi,ze,bn,Tn],Xc=()=>[rn,hn,ts,li,_h,vh,Mh,wh,yh,Sh,bh,Th,Eh,Ah,Rh,Ch,Ph,Ih,Dh,Lh],Oh=(s,B)=>F(s,B),zh=(s,B)=>{const b=new wt,q=new Y({color:2263295,emissive:1131690,emissiveIntensity:.5}),K=new k(new At(s*.2,s*.2,s*4),q);K.position.set(-s*2,s*2,0);const ct=new k(new At(s*.2,s*.2,s*4),q);ct.position.set(s*2,s*2,0);const pt=new k(new At(s*.2,s*.2,s*4),q);return pt.position.set(0,s*4,0),pt.rotation.z=Math.PI/2,b.add(K,ct,pt),b.userData={obstacleRadius:s*2.5,obstacleHeight:s*4,crashWeight:1,type:"prop"},b},Hh=(s,B)=>{const b=new k(new Q(s*2,s*2,s*2),new Y({color:16729258,wireframe:!0}));return b.position.y=s*1,b.userData={obstacleRadius:s*1.5,obstacleHeight:s*2,crashWeight:.2,type:"prop"},b},Vh=(s,B)=>{const b=L(s,B);return b.children[1].material.color.setHex(65535),b},Gh=(s,B)=>{const b=new wt,q=new Y({color:16768256,emissive:11175936,transparent:!0,opacity:.5}),K=new k(new Q(s*3,s*1.5,s*.1),q);return K.position.y=s*.75,b.add(K),b.userData={obstacleRadius:s*1.5,obstacleHeight:s*1.5,crashWeight:.1,type:"prop"},b},Wh=(s,B)=>se(s*.5),Xh=(s,B)=>yt(s,B),qh=(s,B)=>{const b=y(s,!1,B);return b.scale.set(1.5,.1,1.5),b},Yh=(s,B)=>hn(s*.5,B),Zh=(s,B)=>yi(s),$h=(s,B)=>{const b=R(s,B,!1);return b.children[1].material.emissive.setHex(2232644),b},Kh=(s,B)=>_t(s,B),Jh=(s,B)=>{const b=mt(s,B);return b.children[0].material.color.setHex(16711935),b},jh=(s,B)=>jt(s,B),Qh=(s,B)=>Rt(s),td=(s,B)=>Os(s*1.2),ed=(s,B)=>Bi(s,B),nd=(s,B)=>jo(s),id=(s,B)=>Ft(s),od=(s,B)=>Qo(s),Vs=(s,B)=>{const b=new wt,q=[12208674,2381946,4876859,7690812,11184810],K=q[Math.floor(B()*q.length)],ct=new Y({color:K,roughness:.85}),pt=new Y({color:K,roughness:.7,metalness:.2}),Lt=new Y({color:3355443,roughness:.9,metalness:.5}),Mt=new k(new Q(s*1.9,s*1.9,s*4.9),ct);Mt.position.y=s*1,b.add(Mt);const bt=s*2,Ht=s*2,qt=s*5,vt=s*.15;for(const It of[-bt/2+vt/2,bt/2-vt/2])for(const Vt of[-qt/2+vt/2,qt/2-vt/2]){const Nt=new k(new Q(vt,Ht,vt),pt);Nt.position.set(It,s*1,Vt),b.add(Nt);const ie=new k(new Q(vt*1.1,vt*1.1,vt*1.1),Lt);ie.position.set(It,s*1+Ht/2-vt/2,Vt);const he=new k(new Q(vt*1.1,vt*1.1,vt*1.1),Lt);he.position.set(It,s*1-Ht/2+vt/2,Vt),b.add(ie,he)}for(const It of[-bt/2+vt/2,bt/2-vt/2])for(const Vt of[s*1+Ht/2-vt/2,s*1-Ht/2+vt/2]){const Nt=new k(new Q(vt,vt,qt-vt*2),pt);Nt.position.set(It,Vt,0),b.add(Nt)}for(const It of[-qt/2+vt/2,qt/2-vt/2])for(const Vt of[s*1+Ht/2-vt/2,s*1-Ht/2+vt/2]){const Nt=new k(new Q(bt-vt*2,vt,vt),pt);Nt.position.set(0,Vt,It),b.add(Nt)}const Xt=12;for(const It of[-bt/2,bt/2])for(let Vt=0;Vt<Xt;Vt++){const Nt=-qt/2+vt*1.5+Vt*(qt-vt*3)/(Xt-1),ie=new k(new Q(s*.05,Ht-vt*2,s*.15),pt);ie.position.set(It,s*1,Nt),b.add(ie)}return b.traverse(It=>{It.isMesh&&(It.castShadow=!0,It.receiveShadow=!0)}),b.userData={obstacleRadius:s*3,obstacleHeight:s*2,crashWeight:5,type:"prop"},b},sd=(s,B)=>{const b=new wt,q=Vs(s,B);q.position.y=0;const K=Vs(s,B);return K.position.y=s*2,b.add(q,K),b.userData={obstacleRadius:s*3,obstacleHeight:s*4,crashWeight:10,type:"prop"},b},rd=new Y({color:14527010,roughness:.6,metalness:.5}),ad=new Y({color:13382434,roughness:.6,metalness:.4}),cd=new Y({color:16763904,roughness:.6,metalness:.3}),qc=new Y({color:2236962,roughness:.8,metalness:.7}),ld=new Y({color:15658734,roughness:.5,metalness:.2}),ud=new Y({color:4473924,roughness:.4}),Hr=new Y({color:1118481,roughness:.1,metalness:.9,transparent:!0,opacity:.8}),hd=new Y({color:15658734,roughness:.4}),dd=new Y({color:16777215,roughness:.4}),fd=new Y({color:3355443,roughness:.8,metalness:.8}),pd=new Y({color:1123901,roughness:.7}),md=new Y({color:3359795,roughness:.9}),gd=new Y({color:15658734,roughness:.5}),xd=new Y({color:11149858,roughness:.6}),_d=new Y({color:1118481,roughness:.1,metalness:.9,transparent:!0,opacity:.7}),vd=new Y({color:16777215,roughness:.5}),Md=new Y({color:1118515,roughness:.6}),Yc=new Y({color:13808780,roughness:.8}),wd=new Y({color:43775,roughness:.2}),yd=new Y({color:4508927,roughness:.1,metalness:.8,transparent:!0,opacity:.7}),Sd=new Y({color:16777215,roughness:.3,metalness:.1}),bd=new Y({color:15606306,roughness:.4}),Td=new Y({color:1118481,roughness:.1,metalness:.8,transparent:!0,opacity:.6}),Ed=new Y({color:14535850,roughness:.9}),Ad=new Y({color:2236962,roughness:.6,metalness:.8}),Rd=new Y({color:16777215,roughness:.4}),Cd=new Y({color:11184810,roughness:.6,metalness:.5}),Pd=new Y({color:16448250,roughness:.9,side:Cn}),Id=new Y({color:16777215,roughness:.2,metalness:.2}),Dd=new Y({color:14535594,roughness:.7}),Ld=new Y({color:1118481,roughness:.1,metalness:.9,transparent:!0,opacity:.8}),Fd=new Y({color:2236962,roughness:.5}),Nd=new Y({color:15645440,roughness:.6,metalness:.2}),Ud=new Y({color:3355443,roughness:.8}),kd=new Y({color:15645440,roughness:.5,metalness:.3}),Bd=new Y({color:10066329,roughness:.7,metalness:.6}),Gs=new Y({color:2236962,roughness:.9}),Od=new Y({color:14526976,roughness:.7,metalness:.3}),zd=new Y({color:2250154,roughness:.5,metalness:.4}),Hd=new Y({color:3355443,roughness:.8}),Vd=new Y({color:11149858,roughness:.5,metalness:.3}),Gd=new Y({color:16777215,roughness:.7}),Wd=new Y({color:15645440,roughness:.5}),Xd=new Y({color:15658734,roughness:.6,metalness:.2}),qd=new Y({color:3355443,roughness:.9}),Yd=new Y({color:2250154,roughness:.6}),Zd=new Y({color:16742144,roughness:.6,metalness:.1}),$d=new Y({color:2236962,roughness:.8}),Zc=(s,B)=>{const b=new wt,q=rd,K=qc,ct=hd,pt=Hr,Lt=new wt,Mt=new k(new Q(s*3.5,s*.8,s*4),K);Mt.position.y=s*1.5;const bt=fo(s,s*6.5,s*1.6,s*1.2);bt.position.set(-s*2.5,s*1,0);const Ht=fo(s,s*6.5,s*1.6,s*1.2);Ht.position.set(s*2.5,s*1,0),Lt.add(Mt,bt,Ht);const qt=new k(new At(s*1.5,s*1.5,s*.4,16),K);qt.position.y=s*2.1,Lt.add(qt),b.add(Lt);const vt=new wt;vt.position.y=s*2.3,vt.rotation.y=B()*Math.PI*2;const Xt=new k(new Q(s*3.8,s*.6,s*6),q);Xt.position.set(0,s*.3,s*1);const It=new k(new Q(s*3.8,s*2.5,s*1.5),K);It.position.set(0,s*1.8,s*3.2);const Vt=new k(new Q(s*2.5,s*1.8,s*3),q);Vt.position.set(0,s*1.5,s*1);const Nt=new k(new At(s*.1,s*.1,s*1),K);Nt.position.set(s*.8,s*2.8,s*1.5),vt.add(Xt,It,Vt,Nt);const ie=new wt,he=new k(new Q(s*1.4,s*1.8,s*1.8),ct);he.position.set(-s*1.6,s*1.5,-s*1.5);const Qt=new k(new Q(s*1.5,s*1,s*1.9),pt);Qt.position.set(-s*1.6,s*1.6,-s*1.5),ie.add(he,Qt),vt.add(ie);const be=new wt;be.position.set(0,s*1.5,-s*1);const dn=Math.PI/4+B()*.2;be.rotation.x=-dn;const We=s*20,Se=s*1.2;for(const qe of[-Se/2,Se/2])for(const Dn of[-Se/2,Se/2]){const Xn=new k(new At(s*.1,s*.1,We,6),q);Xn.rotation.x=Math.PI/2,Xn.position.set(qe,Dn,We/2),be.add(Xn)}const _n=12,Le=We/_n;for(let qe=0;qe<_n;qe++){const Dn=qe*Le+Le/2;for(const Hi of[-Se/2,Se/2]){const Bn=new k(new At(s*.06,s*.06,Math.hypot(Se,Le)),q);Bn.position.set(0,Hi,Dn),Bn.rotation.x=Math.PI/2,Bn.rotation.z=(qe%2===0?1:-1)*Math.atan2(Le,Se),be.add(Bn)}for(const Hi of[-Se/2,Se/2]){const Bn=new k(new At(s*.06,s*.06,Math.hypot(Se,Le)),q);Bn.position.set(Hi,0,Dn),Bn.rotation.x=Math.PI/2,Bn.rotation.y=(qe%2===0?1:-1)*Math.atan2(Le,Se),be.add(Bn)}const Xn=new k(new At(s*.06,s*.06,Se),q);Xn.position.set(0,Se/2,qe*Le),Xn.rotation.z=Math.PI/2;const go=new k(new At(s*.06,s*.06,Se),q);go.position.set(0,-Se/2,qe*Le),go.rotation.z=Math.PI/2;const ss=new k(new At(s*.06,s*.06,Se),q);ss.position.set(Se/2,0,qe*Le);const rs=new k(new At(s*.06,s*.06,Se),q);rs.position.set(-Se/2,0,qe*Le),be.add(Xn,go,ss,rs)}vt.add(be);const Je=new wt;Je.position.set(0,s*1.5,s*1.5);const an=new k(new At(s*.15,s*.15,s*5),K);an.position.set(-s*1,s*2,0),an.rotation.z=.2;const je=new k(new At(s*.15,s*.15,s*5),K);je.position.set(s*1,s*2,0),je.rotation.z=-.2;const vn=new k(new At(s*.2,s*.2,s*3),K);vn.position.set(0,s*4.2,0),vn.rotation.z=Math.PI/2,Je.add(an,je,vn),vt.add(Je);const Qe=s*1.5+Math.sin(dn)*We,kn=-s*1-Math.cos(dn)*We,Ti=Math.hypot(Qe-(s*1.5+s*4.2),kn-s*1.5);for(const qe of[-Se/2+s*.2,Se/2-s*.2]){const Dn=new k(new At(s*.05,s*.05,Ti),K);Dn.position.set(qe,(Qe+(s*1.5+s*4.2))/2,(kn+s*1.5)/2),Dn.rotation.x=Math.atan2(Qe-(s*1.5+s*4.2),kn-s*1.5)-Math.PI/2,vt.add(Dn)}const po=s*12,ns=new k(new At(s*.05,s*.05,po),K);ns.position.set(0,Qe-po/2,kn),vt.add(ns);const mo=new wt;mo.position.set(0,Qe-po,kn);const is=new k(new Q(s*1.2,s*.8,s*.6),q),os=new k(new At(s*.15,s*.15,s*1.2),K);return os.position.y=-s*.8,mo.add(is,os),vt.add(mo),b.add(vt),b.traverse(qe=>{qe.isMesh&&(qe.castShadow=!0,qe.receiveShadow=!0)}),b.userData={obstacleRadius:s*4,obstacleHeight:s*8,crashWeight:15,type:"prop"},b},Kd=(s,B)=>{const b=new wt,q=ad,K=ld,ct=qc,pt=ud,Lt=Hr,Mt=s*6,bt=s*8;for(const Qt of[-Mt,Mt]){const be=new k(new Q(s*2,s*.6,s*.8),ct);be.position.set(Qt,s*.3,-s*1.2);const dn=new k(new Q(s*2,s*.6,s*.8),ct);dn.position.set(Qt,s*.3,s*1.2);const We=new k(new Q(s*1.8,s*.4,s*2.4),q);We.position.set(Qt,s*.8,0);const Se=new k(new Q(s*.8,bt*1.02,s*.8),q);Se.position.set(Qt,bt/2+s*1,-s*1.2),Se.rotation.x=-.1;const _n=new k(new Q(s*.8,bt*1.02,s*.8),q);_n.position.set(Qt,bt/2+s*1,s*1.2),_n.rotation.x=.1;for(let Le=s*3;Le<bt;Le+=s*2){const Je=new k(new Q(s*.6,s*.6,s*2.4),q);Je.position.set(Qt,Le,0),b.add(Je)}b.add(be,dn,We,Se,_n)}const Ht=new k(new Q(Mt*2+s*4,s*1.2,s*.8),K);Ht.position.set(0,bt,-s*.6);const qt=new k(new Q(Mt*2+s*4,s*1.2,s*.8),K);qt.position.set(0,bt,s*.6),b.add(Ht,qt);for(let Qt=-Mt*1.2;Qt<=Mt*1.2;Qt+=s*1.5){const be=new k(new Q(s*.4,s*.4,s*1.2),q);be.position.set(Qt,bt+s*.8,0),b.add(be)}const vt=new k(new Q(s*3,s*2,s*2.2),ct);vt.position.set(s*2,bt+s*1.6,0),b.add(vt);const Xt=new wt,It=new k(new Q(s*1.5,s*1.5,s*1.5),pt),Vt=new k(new Q(s*1.6,s*1,s*1.6),Lt);Xt.add(It,Vt),Xt.position.set(-s*3,bt-s*1.4,s*1.2),b.add(Xt);const Nt=s*2;for(const Qt of[-s*.4,s*.4]){const be=new k(new At(s*.04,s*.04,s*5),ct);be.position.set(Nt,bt-s*2.5,Qt),b.add(be)}const ie=new k(new Q(s*1.5,s*.5,s*1.2),q);ie.position.set(Nt,bt-s*5,0);const he=new k(new At(s*.2,s*.2,s*1),ct);return he.position.set(Nt,bt-s*5.7,0),b.add(ie,he),b.traverse(Qt=>{Qt.isMesh&&(Qt.castShadow=!0,Qt.receiveShadow=!0)}),b.userData={obstacleRadius:Mt,obstacleHeight:bt+s*2,crashWeight:15,type:"prop"},b},Jd=(s,B)=>{const b=new wt,q=cd,K=fd,ct=dd,pt=Hr,Lt=s*12,Mt=s*14,bt=s*5,Ht=new k(new At(s*1.2,s*1.5,s*1.5,8),K);Ht.position.set(0,s*.75,0),b.add(Ht);const qt=new k(new Q(s*1.5,Lt,s*1.5),q);qt.position.set(0,Lt/2+s*1.5,0),b.add(qt);const vt=new k(new At(s*1.6,s*1.6,s*.8,16),K);vt.position.set(0,Lt+s*1.9,0),b.add(vt);const Xt=new wt;Xt.position.set(0,Lt+s*2.3,0);const It=new k(new Q(s*1.2,s*1.8,s*1.5),ct);It.position.set(s*1.2,s*.9,s*1.2);const Vt=new k(new Q(s*1.3,s*1,s*1.6),pt);Vt.position.set(s*1.2,s*1.2,s*1.2),Xt.add(It,Vt);const Nt=new k(new Q(Mt,s*.8,s*.8),q);Nt.position.set(Mt/2+s*.75,s*1.5,0),Xt.add(Nt);const ie=new k(new Q(bt,s*.8,s*.8),q);ie.position.set(-bt/2-s*.75,s*1.5,0),Xt.add(ie);const he=new k(new Q(s*2,s*1.5,s*1.8),K);he.position.set(-bt+s*.5,s*1.5,0),Xt.add(he);const Qt=new k(new At(s*.15,s*.15,s*3.5),q);Qt.position.set(s*.5,s*3.6,0),Qt.rotation.z=-.3;const be=new k(new At(s*.15,s*.15,s*3.5),q);be.position.set(-s*.5,s*3.6,0),be.rotation.z=.3,Xt.add(Qt,be);const dn=new k(new At(s*.05,s*.05,Mt*.6),K);dn.position.set(Mt*.3,s*3.5,0),dn.rotation.z=Math.PI/2-.2;const We=new k(new At(s*.08,s*.08,bt),K);We.position.set(-bt/2,s*3.6,0),We.rotation.z=Math.PI/2+.3,Xt.add(dn,We);const Se=Mt*(.3+B()*.6),_n=new k(new Q(s*1.2,s*.6,s*1.2),K);_n.position.set(s*.75+Se,s*1,0);const Le=s*4+B()*s*4,Je=new k(new At(s*.05,s*.05,Le),K);Je.position.set(s*.75+Se,s*1-Le/2,0);const an=new k(new Q(s*.8,s*.5,s*.8),q);return an.position.set(s*.75+Se,s*1-Le,0),Xt.add(_n,Je,an),Xt.rotation.y=B()*Math.PI*2,b.add(Xt),b.traverse(je=>{je.isMesh&&(je.castShadow=!0,je.receiveShadow=!0)}),b.userData={obstacleRadius:s*1.5,obstacleHeight:Lt+s*5,crashWeight:10,type:"prop"},b},$c=new Y({color:1118481,roughness:.9}),bi=new Y({color:13421772,roughness:.5,metalness:.5}),zi=new Y({color:1122867,roughness:.1,metalness:.8,transparent:!0,opacity:.7});new Y({color:16755200,emissive:5579264,roughness:.2});const es=(s,B,b)=>{const q=new wt,K=new k(new At(B,B,b,12),$c);K.rotation.x=Math.PI/2;const ct=new k(new At(B*.6,B*.6,b*1.05,8),bi);return ct.rotation.x=Math.PI/2,q.add(K,ct),q},fo=(s,B,b,q)=>{const K=new wt,ct=new k(new Q(q,b,B),$c),pt=new k(new Q(q*1.05,b*.7,B*.8),bi);return K.add(ct,pt),K},jd=(s,B)=>{const b=new wt,q=Nd,K=Ud,ct=new k(new Q(s*2.5,s*.6,s*3),K);ct.position.y=s*.8;const pt=fo(s,s*4.5,s*1,s*.8);pt.position.set(-s*1.6,s*.5,0);const Lt=fo(s,s*4.5,s*1,s*.8);Lt.position.set(s*1.6,s*.5,0),b.add(ct,pt,Lt);const Mt=new wt;Mt.position.set(0,s*1.2,0),Mt.rotation.y=(B()-.5)*Math.PI/2;const bt=new k(new Q(s*2.8,s*1.5,s*3.2),q);bt.position.set(0,s*.75,s*.2);const Ht=new k(new Q(s*2.6,s*1.2,s*1.5),K);Ht.position.set(0,s*.9,s*2.2);const qt=new k(new At(s*.1,s*.1,s*1.5),K);qt.position.set(s*1,s*2,s*2.5);const vt=new k(new Q(s*1.2,s*1.8,s*1.6),q);vt.position.set(-s*.8,s*2.4,-s*.2);const Xt=new k(new Q(s*1.1,s*1,s*1.7),zi);Xt.position.set(-s*.8,s*2.5,-s*.2);const It=new k(new Q(s*.6,s*4.5,s*.8),q);It.position.set(s*.8,s*2.5,-s*1.5),It.rotation.x=-.5;const Vt=new k(new Q(s*.5,s*3,s*.6),q);Vt.position.set(s*.8,s*3.5,-s*3.5),Vt.rotation.x=.8;const Nt=new k(new Q(s*1,s*1,s*1),K);Nt.position.set(s*.8,s*2,-s*4.5),Nt.rotation.x=-.4;const ie=new k(new At(s*.15,s*.15,s*2),bi);return ie.position.set(s*.8,s*1.5,-s*.5),ie.rotation.x=-.3,Mt.add(bt,Ht,qt,vt,Xt,It,Vt,Nt,ie),b.add(Mt),b.traverse(he=>{he.isMesh&&(he.castShadow=!0,he.receiveShadow=!0)}),b.userData={obstacleRadius:s*3,obstacleHeight:s*5,crashWeight:10,type:"prop"},b},Qd=(s,B)=>{const b=new wt,q=kd,K=Bd,ct=Gs,pt=new k(new Q(s*2.2,s*.5,s*7.5),ct);pt.position.set(0,s*1,0),b.add(pt);for(const he of[s*2.5,-s*1.5,-s*2.8])for(const Qt of[s*1.4,-s*1.4]){const be=es(s,s*.8,s*.6);be.position.set(Qt,s*.8,he),b.add(be)}const Lt=new k(new Q(s*2.4,s*2,s*2),q);Lt.position.set(0,s*2.2,s*2.5);const Mt=new k(new Q(s*2.4,s*1.5,s*1.5),q);Mt.position.set(0,s*3.5,s*2.2);const bt=new k(new Q(s*2.5,s*1,s*1.6),zi);bt.position.set(0,s*3.5,s*2.2);const Ht=new k(new Q(s*1.6,s*1.2,s*.2),bi);Ht.position.set(0,s*2.2,s*3.5);const qt=new k(new Q(s*2.6,s*.4,s*.4),ct);qt.position.set(0,s*1.2,s*3.6),b.add(Lt,Mt,bt,Ht,qt);const vt=new wt;vt.position.set(0,s*1.5,-s*3.5),vt.rotation.x=B()>.7?-.4:0;const Xt=new k(new Q(s*2.6,s*.4,s*5.5),K);Xt.position.set(0,s*.2,s*2.5);const It=new k(new Q(s*.2,s*1.8,s*5.5),K);It.position.set(s*1.2,s*1.3,s*2.5);const Vt=new k(new Q(s*.2,s*1.8,s*5.5),K);Vt.position.set(-s*1.2,s*1.3,s*2.5);const Nt=new k(new Q(s*2.6,s*2,s*.2),K);Nt.position.set(0,s*1.4,s*5.1);const ie=new k(new Q(s*2.6,s*1.8,s*.2),K);return ie.position.set(0,s*1.3,0),vt.rotation.x<0&&(ie.rotation.x=.5),vt.add(Xt,It,Vt,Nt,ie),b.add(vt),b.traverse(he=>{he.isMesh&&(he.castShadow=!0,he.receiveShadow=!0)}),b.userData={obstacleRadius:s*3,obstacleHeight:s*4,crashWeight:12,type:"prop"},b},tf=(s,B)=>{const b=new wt,q=Od,K=Gs,ct=fo(s,s*4,s*1.2,s*.8);ct.position.set(-s*1.5,s*.6,0);const pt=fo(s,s*4,s*1.2,s*.8);pt.position.set(s*1.5,s*.6,0),b.add(ct,pt);const Lt=new k(new Q(s*2.2,s*1.5,s*3.8),q);Lt.position.set(0,s*1.5,0);const Mt=new k(new Q(s*1.8,s*1,s*1.8),q);Mt.position.set(0,s*2.5,s*.8);const bt=new k(new At(s*.1,s*.1,s*1.2),K);bt.position.set(s*.6,s*3.2,s*1.2);const Ht=new k(new Q(s*2,s*2,s*1.8),q);Ht.position.set(0,s*2.8,-s*.8);const qt=new k(new Q(s*1.8,s*1.2,s*1.9),zi);qt.position.set(0,s*2.9,-s*.8);const vt=new k(new Q(s*2.2,s*2.2,s*2),K);vt.position.set(0,s*2.8,-s*.8);const Xt=new k(new Q(s*.3,s*.4,s*2.5),q);Xt.position.set(s*1.8,s*1,s*1.5);const It=new k(new Q(s*.3,s*.4,s*2.5),q);It.position.set(-s*1.8,s*1,s*1.5);const Vt=new k(new Q(s*4.5,s*2,s*.5),bi);Vt.position.set(0,s*1,s*2.8),Vt.rotation.x=-.2;const Nt=new k(new Q(s*1.5,s*.4,s*1.5),q);Nt.position.set(0,s*1,-s*2.4),Nt.rotation.x=.5;const ie=new k(new Q(s*.4,s*1.5,s*.4),K);return ie.position.set(0,s*.5,-s*3),ie.rotation.x=-.3,b.add(Lt,Mt,bt,Ht,qt,vt,Xt,It,Vt,Nt,ie),b.traverse(he=>{he.isMesh&&(he.castShadow=!0,he.receiveShadow=!0)}),b.userData={obstacleRadius:s*2.5,obstacleHeight:s*4,crashWeight:15,type:"prop"},b},ef=(s,B)=>{const b=new wt,q=zd,K=Hd,ct=Gs,pt=new k(new Q(s*2.2,s*.5,s*9),ct);pt.position.set(0,s*1,0),b.add(pt);for(const It of[s*3.5,s*1.5,-s*2.5,-s*3.8])for(const Vt of[s*1.4,-s*1.4]){const Nt=es(s,s*.8,s*.6);Nt.position.set(Vt,s*.8,It),b.add(Nt)}const Lt=new k(new Q(s*2.6,s*2.5,s*2.5),q);Lt.position.set(0,s*2.5,s*3.2);const Mt=new k(new Q(s*2.4,s*1,s*1.8),new Y({color:15658734,roughness:.5,metalness:.2}));Mt.position.set(0,s*4,s*3.2);const bt=new k(new Q(s*2.7,s*1.2,s*2),zi);bt.position.set(0,s*3,s*3.3);const Ht=new k(new Q(s*1.8,s*1.5,s*.2),bi);Ht.position.set(0,s*2,s*4.5);const qt=new k(new At(s*.15,s*.15,s*3),bi);qt.position.set(s*1.4,s*3,s*1.8),b.add(Lt,Mt,bt,Ht,qt);const vt=new k(new Q(s*2.8,s*.4,s*6.5),K);vt.position.set(0,s*1.4,-s*1.2);const Xt=new k(new Q(s*2.8,s*1.5,s*.4),K);if(Xt.position.set(0,s*2.2,s*1.8),b.add(vt,Xt),B()>.5){const It=new k(new Q(s*2,s*1.5,s*4),new Y({color:8939076}));It.position.set(0,s*2.3,-s*1);const Vt=new k(new Q(s*2.1,s*1.6,s*4.1),new Y({color:2271795,roughness:.9}));Vt.position.set(0,s*2.3,-s*1),b.add(B()>.5?It:Vt)}return b.traverse(It=>{It.isMesh&&(It.castShadow=!0,It.receiveShadow=!0)}),b.userData={obstacleRadius:s*3.5,obstacleHeight:s*4,crashWeight:14,type:"prop"},b},Kc=(s,B)=>{const b=new wt,q=Vd,K=Gd,ct=Gs,pt=new k(new Q(s*2.2,s*.5,s*8),ct);pt.position.set(0,s*1,s*.5),b.add(pt);for(const vt of[s*3.5,-s*1.5,-s*2.8])for(const Xt of[s*1.4,-s*1.4]){const It=es(s,s*.8,s*.6);It.position.set(Xt,s*.8,vt),b.add(It)}const Lt=new k(new Q(s*2.4,s*2,s*2),q);Lt.position.set(0,s*2.2,s*3);const Mt=new k(new Q(s*2.5,s*1,s*1.6),zi);Mt.position.set(0,s*3,s*3);const bt=new k(new Q(s*2.4,s*1,s*1.8),K);bt.position.set(0,s*4,s*3),bt.rotation.x=.2,b.add(Lt,Mt,bt);const Ht=new k(new Q(s*2.6,s*3.5,s*5.5),K);Ht.position.set(0,s*3,-s*1);const qt=new k(new Q(s*2.4,s*3.3,s*.2),bi);return qt.position.set(0,s*3,-s*3.8),b.add(Ht,qt),b.traverse(vt=>{vt.isMesh&&(vt.castShadow=!0,vt.receiveShadow=!0)}),b.userData={obstacleRadius:s*3.5,obstacleHeight:s*5,crashWeight:12,type:"prop"},b},nf=(s,B)=>{const b=new wt,q=Wd,K=Xd,ct=qd,pt=Yd,Lt=new k(new Q(s*2.2,s*.5,s*7),ct);Lt.position.set(0,s*1,0),b.add(Lt);for(const Nt of[s*2.5,-s*1.2,-s*2.5])for(const ie of[s*1.4,-s*1.4]){const he=es(s,s*.8,s*.6);he.position.set(ie,s*.8,Nt),b.add(he)}const Mt=new k(new Q(s*2.4,s*2,s*2),q);Mt.position.set(0,s*2.2,s*2.2);const bt=new k(new Q(s*2.5,s*1,s*1.6),zi);bt.position.set(0,s*3,s*2.2),b.add(Mt,bt);const Ht=new wt;Ht.position.set(0,s*2.5,-s*.8),Ht.rotation.x=.3;const qt=new k(new At(s*1.4,s*.8,s*4.5,16),K);qt.rotation.x=Math.PI/2;const vt=new k(new At(s*1.42,s*1.1,s*.8,16),pt);vt.rotation.x=Math.PI/2,vt.position.z=-s*1;const Xt=new k(new At(s*.6,s*.6,s*1.5),q);Xt.position.set(0,s*1.6,s*1.8),Xt.rotation.z=Math.PI/2,Ht.add(qt,vt),b.add(Ht,Xt);const It=new k(new At(s*.8,s*.4,s*1),K);It.position.set(0,s*3.2,-s*3.2),It.rotation.x=-.3;const Vt=new k(new Q(s*.6,s*.2,s*2),K);return Vt.position.set(0,s*1.8,-s*3.8),Vt.rotation.x=-.5,b.add(It,Vt),b.traverse(Nt=>{Nt.isMesh&&(Nt.castShadow=!0,Nt.receiveShadow=!0)}),b.userData={obstacleRadius:s*3,obstacleHeight:s*4,crashWeight:12,type:"prop"},b},of=(s,B)=>{const b=new wt,q=Zd,K=$d,ct=new k(new Q(s*2,s*.6,s*2.5),K);ct.position.y=s*.8,b.add(ct);for(const It of[s*1,-s*1])for(const Vt of[s*1.2,-s*1.2]){const Nt=es(s,s*.6,s*.4);Nt.position.set(Vt,s*.6,It),b.add(Nt)}for(const It of[s*1.5,-s*1.5]){const Vt=new k(new Q(s*.2,s*1.2,s*.2),K);Vt.position.set(It,s*.6,-s*1.4),Vt.rotation.z=It>0?-.3:.3;const Nt=new k(new Q(s*.6,s*.2,s*.6),q);Nt.position.set(It+(It>0?s*.2:-s*.2),s*.1,-s*1.5),b.add(Vt,Nt)}const pt=new wt;pt.position.set(0,s*1.2,0),pt.rotation.y=B()*Math.PI;const Lt=new k(new Q(s*2,s*1.2,s*2.2),q);Lt.position.set(0,s*.6,0);const Mt=new k(new Q(s*1,s*1.6,s*1.2),q);Mt.position.set(-s*.5,s*2,s*.5);const bt=new k(new Q(s*.9,s*.8,s*1.3),zi);bt.position.set(-s*.5,s*2,s*.5);const Ht=new k(new Q(s*2.2,s*.6,s*.2),K);Ht.position.set(0,s*.2,s*1.4);const qt=new k(new Q(s*.4,s*3,s*.5),q);qt.position.set(s*.6,s*2,s*.8),qt.rotation.x=.4;const vt=new k(new Q(s*.3,s*2.2,s*.4),q);vt.position.set(s*.6,s*2.6,s*2.2),vt.rotation.x=-.5;const Xt=new k(new Q(s*.6,s*.8,s*.8),K);return Xt.position.set(s*.6,s*1.6,s*2.8),Xt.rotation.x=.2,pt.add(Lt,Mt,bt,Ht,qt,vt,Xt),b.add(pt),b.traverse(It=>{It.isMesh&&(It.castShadow=!0,It.receiveShadow=!0)}),b.userData={obstacleRadius:s*2,obstacleHeight:s*3,crashWeight:7,type:"prop"},b},sf=(s,B)=>{const b=new wt,q=new Y({color:5583633,roughness:.9}),K=new k(new en(s*2,7,7,0,Math.PI*2,0,Math.PI/2),q);if(K.scale.set(1,.4,1.2),K.position.set(0,0,0),b.add(K),B()>.3){const pt=new Y({color:10066329,roughness:.8}),Lt=s*2;for(let Mt=0;Mt<3;Mt++){const bt=new k(new At(s*.6,s*.6,s*2,12),pt);bt.rotation.x=Math.PI/2,bt.position.set(Lt+Mt%2*s*1.2,s*.6+Math.floor(Mt/2)*s*1,s*1.5),b.add(bt)}}const ct=new Y({color:16729088,roughness:.6});for(let pt=0;pt<4;pt++){const Lt=(B()-.5)*s*8,Mt=(B()-.5)*s*8,bt=new k(new At(s*.05,s*.2,s*.6),ct);bt.position.set(Lt,s*.3,Mt),b.add(bt)}return b.traverse(pt=>{pt.isMesh&&(pt.castShadow=!0,pt.receiveShadow=!0)}),b.userData={obstacleRadius:s*3,obstacleHeight:s*1.5,crashWeight:2,type:"decor"},b},rf=(s,B)=>{const b=new wt,q=new Y({color:2236962,roughness:.8}),K=new k(new At(s*.3,s*.4,s*.8),q);K.position.y=s*.4;const ct=new k(new Q(s*.8,s*.2,s*.3),q);return ct.position.y=s*.8,b.add(K,ct),b.userData={obstacleRadius:s*.5,obstacleHeight:s*1,crashWeight:2,type:"prop"},b},af=(s,B)=>{const b=new wt,q=new Y({color:14531498,roughness:.9}),K=[new Y({color:3359948,roughness:.7}),new Y({color:13382451,roughness:.7}),new Y({color:3394628,roughness:.7}),new Y({color:15636753,roughness:.6})],ct=s*1.6,pt=s*1.6,Lt=s*.25,Mt=()=>{const vt=new wt;for(const Xt of[-ct/2+s*.1,0,ct/2-s*.1]){const It=new k(new Q(s*.15,s*.15,pt),q);It.position.set(Xt,s*.1,0),vt.add(It)}for(let Xt=-pt/2+s*.1;Xt<=pt/2-s*.1;Xt+=s*.25){const It=new k(new Q(ct,s*.05,s*.2),q);It.position.set(0,s*.2,Xt),vt.add(It)}return vt},bt=Mt();bt.position.set(0,0,0);const Ht=Mt();Ht.position.set(0,Lt,0),Ht.rotation.y=.1,b.add(bt,Ht);const qt=2+Math.floor(B()*3);for(let vt=0;vt<qt;vt++){const Xt=s*(.4+B()*.6),It=s*(.4+B()*.8),Vt=s*(.4+B()*.6),Nt=new k(new Q(Xt,It,Vt),K[Math.floor(B()*K.length)]);Nt.position.set((B()-.5)*(ct-Xt),Lt*2+It/2,(B()-.5)*(pt-Vt)),Nt.rotation.y=B()*Math.PI,b.add(Nt)}return b.traverse(vt=>{vt.isMesh&&(vt.castShadow=!0,vt.receiveShadow=!0)}),b.userData={obstacleRadius:s*1.5,obstacleHeight:s*2,crashWeight:.5,type:"prop"},b},cf=(s,B)=>{const b=new wt,q=new Y({color:12294519,roughness:.8}),K=new Y({color:2236962,roughness:.6,metalness:.3}),ct=s*1.2,pt=s*1.8,Lt=new k(new At(ct,ct,s*.15,16),q);Lt.rotation.x=Math.PI/2,Lt.position.z=pt/2;const Mt=new k(new At(ct,ct,s*.15,16),q);Mt.rotation.x=Math.PI/2,Mt.position.z=-pt/2;const bt=new k(new At(ct*.4,ct*.4,pt*.9,12),q);bt.rotation.x=Math.PI/2;const Ht=new k(new At(ct*.8,ct*.8,pt*.8,16),K);return Ht.rotation.x=Math.PI/2,b.add(Lt,Mt,bt,Ht),b.position.y=ct,b.rotation.y=B()*Math.PI,B()>.5&&(b.rotation.x=Math.PI/2,b.position.y=pt/2),b.traverse(qt=>{qt.isMesh&&(qt.castShadow=!0,qt.receiveShadow=!0)}),b.userData={obstacleRadius:s*1.5,obstacleHeight:s*2.4,crashWeight:1.5,type:"prop"},b},lf=(s,B)=>{const b=new wt,q=new Y({color:11184810,roughness:.9,metalness:.1}),K=new Y({color:2236962,roughness:1}),ct=()=>{const bt=new wt,Ht=new k(new At(s*.8,s*.8,s*3,16),q);Ht.rotation.x=Math.PI/2;const qt=new k(new At(s*.65,s*.65,s*3.02,16),K);return qt.rotation.x=Math.PI/2,bt.add(Ht,qt),bt},pt=ct();pt.position.set(-s*.8,s*.8,0);const Lt=ct();Lt.position.set(s*.8,s*.8,0);const Mt=ct();return Mt.position.set(0,s*(.8+1.4),0),b.add(pt,Lt,Mt),b.rotation.y=B()*Math.PI,b.traverse(bt=>{bt.isMesh&&(bt.castShadow=!0,bt.receiveShadow=!0)}),b.userData={obstacleRadius:s*2,obstacleHeight:s*3,crashWeight:3,type:"prop"},b},uf=(s,B)=>yi(s*1.2),hf=(s,B)=>se(s*.3),df=(s,B)=>O(s),ff=(s,B)=>lt(s*.6),pf=(s,B)=>{const b=L(s,B);return b.children[1].material.color.setHex(3385924),b},mf=(s,B)=>{const b=y(s*1.5,!1,B);return b.scale.set(1.5,.5,1),b.rotation.z=Math.PI/4,b},gf=(s,B)=>tt(s*1.2,B),xf=(s,B)=>{const b=new k(new At(s*1.5,s*1.5,s*.2,12),new Y({color:5583650,metalness:.8}));return b.position.y=s*1,b.rotation.x=Math.PI/3,b.userData={obstacleRadius:s*1.5,obstacleHeight:s*2,crashWeight:1,type:"prop"},b},_f=(s,B)=>ht(s*.8),vf=(s,B)=>_t(s*1.5,B),Mf=(s,B)=>Ut(s,B),wf=(s,B)=>Pt(s*1.2,B),yf=(s,B)=>L(s,B),Sf=(s,B)=>yf(s*.6,B),bf=(s,B)=>jo(s*1.5);return{textures:m,createRoadSurfaceMaterial:p,createRoadEdgeMaterial:_,createRoadMarkerMaterial:T,createRacerModel:w,createTreeModel:R,createRockModel:y,createPropModel:P,createIceCrystalModel:E,createNeonObeliskModel:F,createMagmaVentModel:D,createRuinPillarModel:L,getForestModels:Fh,getDesertModels:Nh,getSnowModels:Uh,getCityModels:kh,getAlpineModels:Bh,getLavaModels:Xc,getLavaModels:Xc,getNeonModels:()=>[Oh,zh,Hh,Vh,Gh,Wh,Xh,qh,Yh,Zh,$h,Kh,Jh,jh,Qh,td,ed,nd,id,od],getHarborModels:()=>[Vs,sd,Zc,rf,af,uf,hf,df,ff,cf,lf,pf,mf,gf,xf,_f,vf,Mf,wf,Sf,bf],applyPickupModelType:h,createPickupModel:N,createDetailedBuildingModel:I,makeCargoShip:(s,B)=>{const b=new wt,q=pd,K=md,ct=gd,pt=xd,Lt=_d,Mt=new k(new Q(s*10,s*2,s*42),pt);Mt.position.y=s*1;const bt=new k(new Q(s*10.2,s*3,s*42.2),q);bt.position.y=s*3.5;const Ht=new At(0,s*5.1,s*5,3);Ht.rotateZ(Math.PI/2),Ht.rotateY(Math.PI/2);const qt=new k(Ht,q);qt.position.set(0,s*3.5,-s*23.6);const vt=new k(new Q(s*9.8,s*.2,s*41.8),K);vt.position.y=s*5.1,b.add(Mt,bt,qt,vt);const Xt=new wt,It=new k(new Q(s*10,s*3,s*8),ct);It.position.y=s*6.5;const Vt=new k(new Q(s*8,s*3,s*6),ct);Vt.position.set(0,s*9.5,s*-.5);const Nt=new k(new Q(s*8.2,s*1.5,s*6.2),Lt);Nt.position.set(0,s*9.5,s*-.5);const ie=new k(new At(s*.2,s*.2,s*6),ct);ie.position.set(0,s*12.5,s*-2);const he=new k(new At(s*1.5,s*1.2,s*4),pt);he.position.set(0,s*11,s*2),Xt.add(It,Vt,Nt,ie,he),Xt.position.set(0,0,s*15),b.add(Xt);for(let Qt=-3;Qt<=3;Qt+=3)for(let be=-14;be<=8;be+=5.5)if(B()>.2){const dn=1+Math.floor(B()*3);for(let We=0;We<dn;We++){const Se=Vs(s*1.05,B);Se.position.set(Qt*s*1.1,s*6.1+We*s*2.1,be*s),b.add(Se)}}return b.traverse(Qt=>{Qt.isMesh&&(Qt.castShadow=!0,Qt.receiveShadow=!0)}),b.userData={obstacleRadius:s*20,obstacleHeight:s*10,crashWeight:100,type:"decor"},b},makeCruiseShip:(s,B)=>{const b=new wt,q=vd,K=Md,ct=Yc,pt=yd,Lt=wd,Mt=new k(new Q(s*12,s*2,s*50),K);Mt.position.y=s*1;const bt=new k(new Q(s*12.5,s*4,s*51),q);bt.position.y=s*4;const Ht=new At(0,s*6.25,s*6,3);Ht.rotateZ(Math.PI/2),Ht.rotateY(Math.PI/2);const qt=new k(Ht,q);qt.position.set(0,s*4,-s*28.5),b.add(Mt,bt,qt);for(let Nt=0;Nt<4;Nt++){const ie=s*(11.5-Nt*.5),he=s*(40-Nt*4),Qt=new k(new Q(ie,s*2,he),q);Qt.position.set(0,s*(7+Nt*2),s*Nt);const be=new k(new Q(ie+s*.2,s*1.2,he+s*.2),pt);be.position.set(0,s*(7+Nt*2),s*Nt),b.add(Qt,be)}const vt=new k(new Q(s*10,s*.2,s*28),ct);vt.position.set(0,s*14.1,s*3),b.add(vt);const Xt=new k(new uo(s*4,s*8),Lt);Xt.rotation.x=-Math.PI/2,Xt.position.set(0,s*14.2,s*0),b.add(Xt);const It=new k(new At(s*1.5,s*1.2,s*4),K);It.position.set(0,s*16,s*8);const Vt=new k(new At(s*1.5,s*1.2,s*4),K);return Vt.position.set(0,s*16,s*13),b.add(It,Vt),b.traverse(Nt=>{Nt.isMesh&&(Nt.castShadow=!0,Nt.receiveShadow=!0)}),b.userData={obstacleRadius:s*25,obstacleHeight:s*18,crashWeight:100,type:"decor"},b},makeSpeedboat:(s,B)=>{const b=new wt,q=Sd,K=bd,ct=Td,pt=Ed,Lt=Ad,Mt=new k(new Q(s*2.4,s*1.2,s*6),q);Mt.position.y=s*.6;const bt=new At(0,s*1.2,s*2,3);bt.rotateZ(Math.PI/2),bt.rotateY(Math.PI/2);const Ht=new k(bt,q);Ht.position.set(0,s*.6,-s*4);const qt=new k(new Q(s*2.45,s*.3,s*6.05),K);qt.position.y=s*1;const vt=new k(bt.clone(),K);vt.scale.set(1.05,.25,1.05),vt.position.set(0,s*1,-s*4);const Xt=new k(new Q(s*2,s*.8,s*3.5),pt);Xt.position.set(0,s*1,s*.5);const It=new k(new At(s*1.1,s*1.1,s*.8,8,1,!1,0,Math.PI));It.rotation.x=-Math.PI/6,It.position.set(0,s*1.5,-s*1.2),It.material=ct;const Vt=new k(new Q(s*.6,s*1.5,s*.8),Lt);Vt.position.set(-s*.6,s*.5,s*3.4);const Nt=new k(new Q(s*.6,s*1.5,s*.8),Lt);return Nt.position.set(s*.6,s*.5,s*3.4),b.add(Mt,Ht,qt,vt,Xt,It,Vt,Nt),b.traverse(ie=>{ie.isMesh&&(ie.castShadow=!0,ie.receiveShadow=!0)}),b.userData={obstacleRadius:s*3.5,obstacleHeight:s*2.5,crashWeight:5,type:"prop"},b},makeSailboat:(s,B)=>{const b=new wt,q=Rd,K=Yc,ct=Cd,pt=Pd,Lt=new k(new Q(s*2.5,s*1.5,s*7),q);Lt.position.y=s*.75;const Mt=new At(0,s*1.25,s*2.5,3);Mt.rotateZ(Math.PI/2),Mt.rotateY(Math.PI/2);const bt=new k(Mt,q);bt.position.set(0,s*.75,-s*4.75);const Ht=new k(new Q(s*2.4,s*.1,s*6.8),K);Ht.position.y=s*1.55;const qt=new k(Mt.clone(),K);qt.scale.set(.96,.04,.96),qt.position.set(0,s*1.55,-s*4.75);const vt=new k(new Q(s*1.8,s*.8,s*3),q);vt.position.set(0,s*1.9,-s*1);const Xt=new k(new At(s*.1,s*.15,s*12),ct);Xt.position.set(0,s*7,-s*2);const It=new k(new At(s*.08,s*.08,s*5),ct);It.rotation.x=Math.PI/2,It.position.set(0,s*2.5,s*.5);const Vt=new Ye;Vt.setAttribute("position",new nn(new Float32Array([0,s*2.6,s*-1.8,0,s*12,s*-1.8,0,s*2.6,s*3]),3)),Vt.attributes.position.setX(2,s*1.5),Vt.computeVertexNormals();const Nt=new k(Vt,pt),ie=new Ye;ie.setAttribute("position",new nn(new Float32Array([0,s*11,s*-2.2,0,s*1.8,s*-6.5,0,s*1.8,s*-2.2]),3)),ie.attributes.position.setX(1,s*1),ie.computeVertexNormals();const he=new k(ie,pt);return b.add(Lt,bt,Ht,qt,vt,Xt,It,Nt,he),b.traverse(Qt=>{Qt.isMesh&&(Qt.castShadow=!0,Qt.receiveShadow=!0)}),b.userData={obstacleRadius:s*4,obstacleHeight:s*12,crashWeight:6,type:"prop"},b},makeYacht:(s,B)=>{const b=new wt,q=Id,K=Dd,ct=Ld,pt=Fd,Lt=new k(new Q(s*4,s*1.5,s*12),q);Lt.position.y=s*.75;const Mt=new At(0,s*2,s*4,3);Mt.rotateZ(Math.PI/2),Mt.rotateY(Math.PI/2);const bt=new k(Mt,q);bt.position.set(0,s*.75,-s*8);const Ht=new k(new Q(s*3.8,s*.1,s*11.8),K);Ht.position.y=s*1.55;const qt=new k(new Q(s*3.6,s*1.5,s*8),q);qt.position.set(0,s*2.3,s*1);const vt=new k(new Q(s*3.7,s*1,s*7.8),ct);vt.position.set(0,s*2.3,s*1);const Xt=new k(new Q(s*2.8,s*1.2,s*5),q);Xt.position.set(0,s*3.65,s*1.5);const It=new k(new Q(s*2.9,s*.8,s*4.8),ct);It.position.set(0,s*3.65,s*1.5);const Vt=new k(new Q(s*3,s*.2,s*5.2),q);Vt.position.set(0,s*4.3,s*1.5);const Nt=new k(new At(s*.3,s*.5,s*.4),pt);Nt.position.set(0,s*4.5,s*0);const ie=new k(new At(s*.05,s*.05,s*2),pt);ie.position.set(0,s*5.3,s*2.5);const he=new k(new Q(s*2,s*.2,s*2),new Y({color:13434879}));return he.position.set(0,s*1.6,-s*4),b.add(Lt,bt,Ht,qt,vt,Xt,It,Vt,Nt,ie,he),b.traverse(Qt=>{Qt.isMesh&&(Qt.castShadow=!0,Qt.receiveShadow=!0)}),b.userData={obstacleRadius:s*6,obstacleHeight:s*6,crashWeight:10,type:"prop"},b},makeBuoy:(s,B)=>{const b=new wt,q=new k(new At(s,s,s,12),new Y({color:16724736}));q.position.y=s*.5;const K=new k(new Nn(s,s*2,12),new Y({color:16724736}));return K.position.y=s*2,b.add(q,K),b.userData={obstacleRadius:s,obstacleHeight:s*3,crashWeight:2,type:"prop"},b},makeCraneBase:Zc,makeHeavyGantryCrane:Kd,makeTowerCrane:Jd,makeTowTruck:Kc,makeExcavatorA:jd,makeDumpTruck:Qd,makeBulldozer:tf,makeLargeTruck:ef,makeCargoTruck:Kc,makeCementMixer:nf,makeExcavatorB:of,makeWorksiteProps:sf,makePier:(s,B)=>{const b=new wt,q=new k(new Q(s*4,s*.5,s*20),new Y({color:5588019,map:m.bark}));q.position.y=s*4,b.add(q);for(let K=-8;K<=8;K+=8)for(const ct of[-1.5,1.5]){const pt=new k(new At(s*.4,s*.4,s*6),new Y({color:3351057}));pt.position.set(ct*s,s*2,K*s),b.add(pt)}return b.userData={obstacleRadius:s*10,obstacleHeight:s*4,crashWeight:15,type:"decor"},b}}}function kv(){return{renderer:null,scene:null,camera:null,clock:null,worldRoot:null,terrainRoot:null,routeRoot:null,decorRoot:null,checkpointRoot:null,racerRoot:null,fxRoot:null,activeLevel:null,selectedLevelId:"ring",racers:[],player:null,state:ce.MENU,stateBeforePause:ce.RACING,obstacles:[],ramps:[],boostPads:[],itemCrates:[],itemWaves:[],itemWavesInitialized:!1,activeItemWave:0,itemWaveCooldown:0,itemWaveAdvanceDelay:0,itemProjectiles:[],groundHazards:[],checkpointMeshes:[],particles:[],accumulator:0,simTime:0,menuOrbit:0,countdownTimer:0,checkpointAlertTimer:0,messageTimer:0,raceElapsed:0,raceFinishedAt:0,resultDelay:0,resultShown:!1,readyGoPlayed:!1,packPressureTimer:0,cameraShake:0,uiTransitionUntil:0,lastBigAirSoundAt:-99,audio:U_()}}function Bv(){const n=kv(),t=q_(),e=Uv(),i=Av({settings:$i}),o=gv({settings:$i,levels:_u,modelLibrary:e}),r=_v({modelLibrary:e}),a=Ev({settings:$i}),c=tv({settings:$i,levels:Wc,getSelectedLevelId:()=>n.selectedLevelId,setSelectedLevelId:w=>{n.selectedLevelId=w},onLoadMenuPreview:w=>A(w),onStartRace:w=>M(w),onOpenMenu:()=>h(),onTogglePause:()=>d(),ensureAudio:()=>i.ensureAudio(n)}),l=Tv({input:t,settings:$i,ui:c.ui,fx:i,updateRacerVisual:r.updateRacerVisual,setRaceMessage:c.setRaceMessage}),u={world:o,entities:r,gameplay:l,camera:a,fx:i,ui:c,modelLibrary:e,inspector:null};x();const m=Rv({game:n,levels:_u,world:o,uiSystem:c,onExitToMenu:()=>A(n.selectedLevelId)});m.install(),u.inspector=m,Y_({input:t,ensureAudio:()=>i.ensureAudio(n),getState:()=>n.state,ui:c.ui,openMenu:()=>h(),togglePause:()=>d()}),window.addEventListener("keydown",w=>{if(!(w.code!=="F4"||w.repeat))if(w.preventDefault(),i.ensureAudio(n),n.selectedLevelId==="debug"){n.selectedLevelId="ring";const R=document.getElementById("debug-overlay");R&&(R.style.display="none"),h()}else p()}),c.setupUi(()=>f(!1)),f(!0);let g=0;window.addEventListener("resize",v),A(n.selectedLevelId),_(),window.__BIKE_GAME__={game:n,modules:u,settings:$i,inspect:{enter:w=>m.enter(w),exit:()=>m.exit(),toggle:()=>m.toggle(),cycleLevel:()=>m.cycleLevel(),analyzeLevel:w=>m.analyzeLevel(w),analyzeAll:()=>m.analyzeAllLevels(),fullAudit:()=>m.runFullAudit(),fullMapSweep:w=>m.runFullMapSweep(w),freeCamAudit:(w,R)=>m.runFreeCamAudit(w,R),freeCamAuditAll:w=>m.runFreeCamAuditAll(w),completeFreeCamValidation:w=>m.runCompleteFreeCamValidation(w)}};function x(){n.scene=new o0,n.camera=new Hn($i.fov,window.innerWidth/window.innerHeight,.1,2600),n.camera.position.set(0,24,-30),n.renderer=new L_({antialias:!0}),n.renderer.setSize(window.innerWidth,window.innerHeight),n.renderer.setPixelRatio(Math.min(window.devicePixelRatio,2)),n.renderer.shadowMap.enabled=!0,n.renderer.shadowMap.type=bu,n.renderer.outputColorSpace=Rn,document.getElementById("app").prepend(n.renderer.domElement),n.clock=new $0}function f(w=!1){c.applySettings({camera:n.camera,renderer:n.renderer,scene:n.scene,audio:n.audio,initial:w})}function v(){n.camera.aspect=window.innerWidth/window.innerHeight,n.camera.updateProjectionMatrix(),n.renderer.setSize(window.innerWidth,window.innerHeight)}async function A(w){const R=++g;if(n.uiTransitionUntil=n.simTime+.36,c.setUiLoading(!0),c.setRaceMessage(n,"加载中..."),c.setResultVisible(!1),c.setMenuVisible(!0),c.triggerMenuTitleBlast(w),await new Promise(C=>requestAnimationFrame(C)),R!==g){c.setUiLoading(!1);return}o.setupWorld(n,w),r.spawnRacers(n,7,!0),n.state=ce.MENU,n.stateBeforePause=ce.RACING,n.countdownTimer=0,n.checkpointAlertTimer=0,n.lastBigAirSoundAt=-99,n.raceElapsed=0,n.resultShown=!1,c.setRaceMessage(n,"",0),c.ui.countdown.textContent="",c.setPauseVisible(!1),c.markMenuReady(),c.setUiLoading(!1),Io(t)}async function M(w){const R=++g;if(n.uiTransitionUntil=n.simTime+.28,c.setUiLoading(!0),c.setRaceMessage(n,"加载中..."),c.setResultVisible(!1),c.setMenuVisible(!1),await new Promise(S=>requestAnimationFrame(S)),R!==g){c.setUiLoading(!1);return}o.setupWorld(n,w);const C=Tt.randInt(5,8);r.spawnRacers(n,C,!1),n.state=ce.READY,n.stateBeforePause=ce.RACING,n.countdownTimer=3.2,n.checkpointAlertTimer=0,n.lastBigAirSoundAt=-99,n.raceElapsed=0,n.raceFinishedAt=0,n.resultDelay=1.2,n.resultShown=!1,n.readyGoPlayed=!1,n.packPressureTimer=0,c.setResultVisible(!1),c.setMenuVisible(!1),c.setPauseVisible(!1),c.setRaceMessage(n,"预备",1.4),c.setUiLoading(!1),Io(t)}function d(w=null){if(n.state===ce.PAUSED){if(w===!1)return;n.state=n.stateBeforePause===ce.READY?ce.READY:ce.RACING,n.stateBeforePause=ce.RACING,c.setPauseVisible(!1),n.state===ce.RACING&&(c.ui.countdown.textContent=""),Io(t);return}w!==!0&&(n.state!==ce.READY&&n.state!==ce.RACING||(n.stateBeforePause=n.state,n.state=ce.PAUSED,c.setMenuVisible(!1),c.setPauseVisible(!0),c.ui.countdown.textContent="PAUSED",n.renderer.domElement.style.filter="none",Io(t)))}function h(){return n.state===ce.PAUSED&&Io(t),c.setPauseVisible(!1),A(n.selectedLevelId)}async function p(){const w=++g;if(n.selectedLevelId="debug",c.setUiLoading(!0),c.setResultVisible(!1),c.setMenuVisible(!1),await new Promise(C=>requestAnimationFrame(C)),w!==g){c.setUiLoading(!1);return}if(o.setupWorld(n,"debug"),r.spawnRacers(n,4,!1),n.player&&n.racers.length>=2){const C=yn(n.player.heading),S=new z(C.z,0,-C.x),y=n.racers.filter(E=>!E.isPlayer),P=[{x:C.x*10,z:C.z*10,prog:15},{x:C.x*20+S.x*3,z:C.z*20+S.z*3,prog:30},{x:C.x*5-S.x*2.5,z:C.z*5-S.z*2.5,prog:8}];for(let E=0;E<y.length&&E<P.length;E++){const I=y[E],F=P[E];I.position.set(n.player.position.x+F.x,n.player.position.y,n.player.position.z+F.z),I.heading=n.player.heading,I.velocity.set(0,0,0),I.globalProgress=(n.player.globalProgress??0)+F.prog,I.debugFrozen=!0}}n.state=ce.RACING,n.stateBeforePause=ce.RACING,n.countdownTimer=0,n.checkpointAlertTimer=0,n.lastBigAirSoundAt=-99,n.raceElapsed=0,n.raceFinishedAt=0,n.resultDelay=9999,n.resultShown=!1,n.readyGoPlayed=!0,n.packPressureTimer=0,c.setResultVisible(!1),c.setMenuVisible(!1),c.setPauseVisible(!1),c.ui.countdown.textContent="",c.ui.raceMessage.textContent="",n.messageTimer=0;let R=document.getElementById("debug-overlay");R||(R=document.createElement("div"),R.id="debug-overlay",R.style.cssText=`
        position:fixed; top:12px; right:12px; z-index:9999;
        background:rgba(0,0,0,0.72); color:#ddd; font:11px/1.6 monospace;
        padding:8px 12px; border-radius:6px; pointer-events:none;
        white-space:pre; max-width:260px;
      `,document.body.appendChild(R)),R.textContent=`[DEBUG 快捷键]
F4  退出调试
1   击倒自己    T  被炸弹命中
2   击倒假人    Y  被香蕉命中
3   挥拳        U  被电震命中
4   使用道具
5   加速冲刺
6   爆炸VFX
7   发射炸弹
8   发射香蕉
9   获得护盾
0   循环(涡轮/冲撞/电震/地雷)`,R.style.display="block",c.setUiLoading(!1),Io(t)}function _(){requestAnimationFrame(_);const w=Math.min(n.clock.getDelta(),.05);for(n.accumulator+=w;n.accumulator>=ws;)T(ws),n.accumulator-=ws;n.renderer.render(n.scene,n.camera)}function T(w){n.activeLevel&&(n.state!==ce.INSPECT&&n.racers.length===0||(n.simTime+=w,(n.state===ce.READY||n.state===ce.RACING||n.state===ce.FINISHED)&&(n.raceElapsed+=w),l.animateCheckpointAndItems(n,w),n.state===ce.INSPECT?(m.update(w),n.renderer.domElement.style.filter="none"):n.state===ce.MENU?(l.updateRacers(n,w,!0),a.updateMenuCamera(n,w)):n.state===ce.READY?(l.updateReady(n,w),l.updateRacers(n,w,!1),a.updatePlayerCamera(n,w)):n.state===ce.PAUSED?(a.updatePlayerCamera(n,w),n.renderer.domElement.style.filter="none"):(l.updateRacers(n,w,!1),l.updatePackPressure(n,w),a.updatePlayerCamera(n,w),n.state===ce.FINISHED&&!n.resultShown&&(n.resultDelay-=w,n.resultDelay<=0&&c.showResultPanel(n,()=>l.getRaceOrder(n)))),i.updateParticles(n,w),i.updateAudio(n,w),n.state!==ce.PAUSED&&(n.messageTimer>0&&(n.messageTimer-=w,n.messageTimer<=0&&(c.ui.raceMessage.textContent="")),n.checkpointAlertTimer>0&&(n.checkpointAlertTimer-=w,n.checkpointAlertTimer<=0&&n.state===ce.RACING&&(c.ui.countdown.textContent=""))),c.updateHud(n,()=>l.getRaceOrder(n))))}return{game:n,modules:u}}Bv();
