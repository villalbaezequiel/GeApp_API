var MM=Object.defineProperty;var IM=Object.defineProperties;var NM=Object.getOwnPropertyDescriptors;var Pc=Object.getOwnPropertySymbols;var n_=Object.prototype.hasOwnProperty;var r_=Object.prototype.propertyIsEnumerable;var t_=(t,n,e)=>n in t?MM(t,n,{enumerable:!0,configurable:!0,writable:!0,value:e}):t[n]=e;var b=(t,n)=>{for(var e in n||={})n_.call(n,e)&&t_(t,e,n[e]);if(Pc)for(var e of Pc(n))r_.call(n,e)&&t_(t,e,n[e]);return t};var K=(t,n)=>IM(t,NM(n));var TM=(t,n)=>{var e={};for(var r in t)n_.call(t,r)&&n.indexOf(r)<0&&(e[r]=t[r]);if(t!=null&&Pc)for(var r of Pc(t))n.indexOf(r)<0&&r_.call(t,r)&&(e[r]=t[r]);return e};var Ie=(t,n,e)=>new Promise((r,i)=>{var o=l=>{try{s(e.next(l))}catch(c){i(c)}},a=l=>{try{s(e.throw(l))}catch(c){i(c)}},s=l=>l.done?r(l.value):Promise.resolve(l.value).then(o,a);s((e=e.apply(t,n)).next())});var Cs=[null];var Lc=[!1];var Wi=1;var AM=null;var rt=Symbol(`SIGNAL`);function Z(t){let n=Cs[0];return Cs[0]=t,n}function Vc(){return Cs[0]}var mi={version:0,lastCleanEpoch:0,dirty:!1,producers:void 0,producersTail:void 0,consumers:void 0,consumersTail:void 0,recomputing:!1,consumerAllowSignalWrites:!1,consumerIsAlwaysLive:!1,kind:`unknown`,producerMustRecompute:()=>!1,producerRecomputeValue:()=>{},consumerMarkedDirty:()=>{},consumerOnSignalRead:()=>{}};function Ar(t){if(Lc[0])throw new Error(``);let n=Cs[0];if(n===null)return;n.consumerOnSignalRead(t);let e=n.producersTail;if(e!==void 0&&e.producer===t)return;let r,i=n.recomputing;if(i&&(r=e!==void 0?e.nextProducer:n.producers,r!==void 0&&r.producer===t)){n.producersTail=r,r.lastReadVersion=t.version,r.knownValidAtEpoch=Wi;return}let o=t.consumersTail;if(o!==void 0&&o.consumer===n&&(!i||o.knownValidAtEpoch===Wi))return;let a=Ko(n),s={producer:t,consumer:n,nextProducer:r,prevConsumer:void 0,knownValidAtEpoch:Wi,lastReadVersion:t.version,nextConsumer:void 0};n.producersTail=s,e!==void 0?e.nextProducer=s:n.producers=s,a&&s_(t,s)}function i_(){Wi++}function fi(t){if(!(Ko(t)&&!t.dirty)&&!(!t.dirty&&t.lastCleanEpoch===Wi)){if(!t.producerMustRecompute(t)&&!Yo(t)){qo(t);return}t.producerRecomputeValue(t),qo(t)}}function Gf(t){if(t.consumers===void 0)return;let n=Lc[0];Lc[0]=!0;try{for(let e=t.consumers;e!==void 0;e=e.nextConsumer){let r=e.consumer;r.dirty||RM(r)}}finally{Lc[0]=n}}function Wf(){return Cs[0]?.consumerAllowSignalWrites!==!1}function RM(t){t.dirty=!0,Gf(t),t.consumerMarkedDirty?.(t)}function qo(t){t.dirty=!1,t.lastCleanEpoch=Wi}function Rr(t){return t&&o_(t),Z(t)}function o_(t){if(t.producersTail?.knownValidAtEpoch===Wi){let n=t.producers;for(;n!==void 0;)n.knownValidAtEpoch=null,n=n.nextProducer}t.producersTail=void 0,t.recomputing=!0}function pi(t,n){Z(n),t&&a_(t)}function a_(t){t.recomputing=!1;let n=t.producersTail,e=n!==void 0?n.nextProducer:t.producers;if(e!==void 0){if(Ko(t))do e=qf(e);while(e!==void 0);n!==void 0?n.nextProducer=void 0:t.producers=void 0}}function Yo(t){for(let n=t.producers;n!==void 0;n=n.nextProducer){let e=n.producer,r=n.lastReadVersion;if(r!==e.version||(fi(e),r!==e.version))return!0}return!1}function hi(t){if(Ko(t)){let n=t.producers;for(;n!==void 0;)n=qf(n)}t.producers=void 0,t.producersTail=void 0,t.consumers=void 0,t.consumersTail=void 0}function s_(t,n){let e=t.consumersTail,r=Ko(t);if(e!==void 0?(n.nextConsumer=e.nextConsumer,e.nextConsumer=n):(n.nextConsumer=void 0,t.consumers=n),n.prevConsumer=e,t.consumersTail=n,!r)for(let i=t.producers;i!==void 0;i=i.nextProducer)s_(i.producer,i)}function qf(t){let n=t.producer,e=t.nextProducer,r=t.nextConsumer,i=t.prevConsumer;if(t.nextConsumer=void 0,t.prevConsumer=void 0,r!==void 0?r.prevConsumer=i:n.consumersTail=i,i!==void 0)i.nextConsumer=r;else if(n.consumers=r,!Ko(n)){let o=n.producers;for(;o!==void 0;)o=qf(o)}return e}function Ko(t){return t.consumerIsAlwaysLive||t.consumers!==void 0}function ws(t){AM?.(t)}function xs(t,n){return Object.is(t,n)}function Ds(t,n){let e=Object.create(OM);e.computation=t,n!==void 0&&(e.equal=n);let r=()=>{if(fi(e),Ar(e),e.value===wn)throw e.error;return e.value};return r[rt]=e,ws(e),r}var qi=Symbol(`UNSET`);var Yi=Symbol(`COMPUTING`);var wn=Symbol(`ERRORED`);var OM=K(b({},mi),{value:qi,dirty:!0,error:null,equal:xs,kind:`computed`,producerMustRecompute(t){return t.value===qi||t.value===Yi},producerRecomputeValue(t){if(t.value===Yi)throw new Error(``);let n=t.value;t.value=Yi;let e=Rr(t),r,i=!1;try{r=t.computation(),Z(null),i=n!==qi&&n!==wn&&r!==wn&&t.equal(n,r)}catch(o){r=wn,t.error=o}finally{pi(t,e)}if(i){t.value=n;return}t.value=r,t.version++}});function FM(){throw new Error}var l_=FM;function c_(t){l_(t)}function Yf(t){l_=t}var PM=null;function Kf(t,n){let e=Object.create(Zo);e.value=t,n!==void 0&&(e.equal=n);let r=()=>d_(e);return r[rt]=e,ws(e),[r,a=>gi(e,a),a=>Bc(e,a)]}function d_(t){return Ar(t),t.value}function gi(t,n){Wf()||c_(t),t.equal(t.value,n)||(t.value=n,LM(t))}function Bc(t,n){Wf()||c_(t),gi(t,n(t.value))}var Zo=K(b({},mi),{equal:xs,value:void 0,kind:`signal`});function LM(t){t.version++,i_(),Gf(t),PM?.(t)}var Zf=K(b({},mi),{consumerIsAlwaysLive:!0,consumerAllowSignalWrites:!0,dirty:!0,kind:`effect`});function Qf(t){if(t.dirty=!1,t.version>0&&!Yo(t))return;t.version++;let n=Rr(t);try{t.cleanup(),t.fn()}finally{pi(t,n)}}var Xf=[void 0];function jc(){return Xf[0]}function ar(t){let n=Xf[0];return Xf[0]=t,n}var u_=Symbol(`NotFound`);function Qo(t){return t===u_||t?.name===`ɵNotFound`}function Jf(t,n,e){let r=Object.create(VM);r.source=t,r.computation=n,e!=null&&(r.equal=e);let o=()=>{if(fi(r),Ar(r),r.value===wn)throw r.error;return r.value};return o[rt]=r,ws(r),o}function ep(t,n){fi(t),gi(t,n),qo(t)}function m_(t,n){if(fi(t),t.value===wn)throw t.error;Bc(t,n),qo(t)}var VM=K(b({},mi),{value:qi,dirty:!0,error:null,equal:xs,kind:`linkedSignal`,producerMustRecompute(t){return t.value===qi||t.value===Yi},producerRecomputeValue(t){if(t.value===Yi)throw new Error(``);let n=t.value;t.value=Yi;let e=Rr(t),r,i=!1;try{let o=t.source(),a=n!==qi&&n!==wn,s=a?{source:t.sourceValue,value:n}:void 0;r=t.computation(o,s),t.sourceValue=o,Z(null),i=a&&r!==wn&&t.equal(n,r)}catch(o){r=wn,t.error=o}finally{pi(t,e)}if(i){t.value=n;return}t.value=r,t.version++}});function f_(t){let n=Z(null);try{return t()}finally{Z(n)}}function be(t){return typeof t==`function`}function Xo(t){let e=t(r=>{Error.call(r),r.stack=new Error().stack});return e.prototype=Object.create(Error.prototype),e.prototype.constructor=e,e}var zc=Xo(t=>function(e){t(this),this.message=e?`${e.length} errors occurred during unsubscription:
${e.map((r,i)=>`${i+1}) ${r.toString()}`).join(`
  `)}`:``,this.name=`UnsubscriptionError`,this.errors=e});function Ki(t,n){if(t){let e=t.indexOf(n);0<=e&&t.splice(e,1)}}var ne=class t{constructor(n){this.initialTeardown=n,this.closed=!1,this._parentage=null,this._finalizers=null}unsubscribe(){let n;if(!this.closed){this.closed=!0;let{_parentage:e}=this;if(e)if(this._parentage=null,Array.isArray(e))for(let o of e)o.remove(this);else e.remove(this);let{initialTeardown:r}=this;if(be(r))try{r()}catch(o){n=o instanceof zc?o.errors:[o]}let{_finalizers:i}=this;if(i){this._finalizers=null;for(let o of i)try{p_(o)}catch(a){n=n??[],a instanceof zc?n=[...n,...a.errors]:n.push(a)}}if(n)throw new zc(n)}}add(n){var e;if(n&&n!==this)if(this.closed)p_(n);else{if(n instanceof t){if(n.closed||n._hasParent(this))return;n._addParent(this)}(this._finalizers=(e=this._finalizers)!==null&&e!==void 0?e:[]).push(n)}}_hasParent(n){let{_parentage:e}=this;return e===n||Array.isArray(e)&&e.includes(n)}_addParent(n){let{_parentage:e}=this;this._parentage=Array.isArray(e)?(e.push(n),e):e?[e,n]:n}_removeParent(n){let{_parentage:e}=this;e===n?this._parentage=null:Array.isArray(e)&&Ki(e,n)}remove(n){let{_finalizers:e}=this;e&&Ki(e,n),n instanceof t&&n._removeParent(this)}};ne.EMPTY=(()=>{let t=new ne;return t.closed=!0,t})();var tp=ne.EMPTY;function Hc(t){return t instanceof ne||t&&`closed`in t&&be(t.remove)&&be(t.add)&&be(t.unsubscribe)}function p_(t){be(t)?t():t.unsubscribe()}var jn={onUnhandledError:null,onStoppedNotification:null,Promise:void 0,useDeprecatedSynchronousErrorHandling:!1,useDeprecatedNextContext:!1};var Jo={setTimeout(t,n,...e){let{delegate:r}=Jo;return r?.setTimeout?r.setTimeout(t,n,...e):setTimeout(t,n,...e)},clearTimeout(t){let{delegate:n}=Jo;return(n?.clearTimeout||clearTimeout)(t)},delegate:void 0};function Uc(t){Jo.setTimeout(()=>{let{onUnhandledError:n}=jn;if(n)n(t);else throw t})}function Ss(){}var h_=np(`C`,void 0,void 0);function g_(t){return np(`E`,void 0,t)}function b_(t){return np(`N`,t,void 0)}function np(t,n,e){return{kind:t,value:n,error:e}}var Zi=null;function ea(t){if(jn.useDeprecatedSynchronousErrorHandling){let n=!Zi;if(n&&(Zi={errorThrown:!1,error:null}),t(),n){let{errorThrown:e,error:r}=Zi;if(Zi=null,e)throw r}}else t()}function y_(t){jn.useDeprecatedSynchronousErrorHandling&&Zi&&(Zi.errorThrown=!0,Zi.error=t)}var Qi=class extends ne{constructor(n){super(),this.isStopped=!1,n?(this.destination=n,Hc(n)&&n.add(this)):this.destination=zM}static create(n,e,r){return new Or(n,e,r)}next(n){this.isStopped?ip(b_(n),this):this._next(n)}error(n){this.isStopped?ip(g_(n),this):(this.isStopped=!0,this._error(n))}complete(){this.isStopped?ip(h_,this):(this.isStopped=!0,this._complete())}unsubscribe(){this.closed||(this.isStopped=!0,super.unsubscribe(),this.destination=null)}_next(n){this.destination.next(n)}_error(n){try{this.destination.error(n)}finally{this.unsubscribe()}}_complete(){try{this.destination.complete()}finally{this.unsubscribe()}}};var BM=Function.prototype.bind;function rp(t,n){return BM.call(t,n)}var op=class{constructor(n){this.partialObserver=n}next(n){let{partialObserver:e}=this;if(e.next)try{e.next(n)}catch(r){$c(r)}}error(n){let{partialObserver:e}=this;if(e.error)try{e.error(n)}catch(r){$c(r)}else $c(n)}complete(){let{partialObserver:n}=this;if(n.complete)try{n.complete()}catch(e){$c(e)}}};var Or=class extends Qi{constructor(n,e,r){super();let i;if(be(n)||!n)i={next:n??void 0,error:e??void 0,complete:r??void 0};else{let o;this&&jn.useDeprecatedNextContext?(o=Object.create(n),o.unsubscribe=()=>this.unsubscribe(),i={next:n.next&&rp(n.next,o),error:n.error&&rp(n.error,o),complete:n.complete&&rp(n.complete,o)}):i=n}this.destination=new op(i)}};function $c(t){jn.useDeprecatedSynchronousErrorHandling?y_(t):Uc(t)}function jM(t){throw t}function ip(t,n){let{onStoppedNotification:e}=jn;e&&Jo.setTimeout(()=>e(t,n))}var zM={closed:!0,next:Ss,error:jM,complete:Ss};var ta=typeof Symbol==`function`&&Symbol.observable||`@@observable`;function Zt(t){return t}function Gc(...t){return ap(t)}function ap(t){return t.length===0?Zt:t.length===1?t[0]:function(e){return t.reduce((r,i)=>i(r),e)}}var ie=class t{constructor(n){n&&(this._subscribe=n)}lift(n){let e=new t;return e.source=this,e.operator=n,e}subscribe(n,e,r){let i=UM(n)?n:new Or(n,e,r);return ea(()=>{let{operator:o,source:a}=this;i.add(o?o.call(i,a):a?this._subscribe(i):this._trySubscribe(i))}),i}_trySubscribe(n){try{return this._subscribe(n)}catch(e){n.error(e)}}forEach(n,e){return e=v_(e),new e((r,i)=>{let o=new Or({next:a=>{try{n(a)}catch(s){i(s),o.unsubscribe()}},error:i,complete:r});this.subscribe(o)})}_subscribe(n){var e;return(e=this.source)===null||e===void 0?void 0:e.subscribe(n)}[ta](){return this}pipe(...n){return ap(n)(this)}toPromise(n){return n=v_(n),new n((e,r)=>{let i;this.subscribe(o=>i=o,o=>r(o),()=>e(i))})}};ie.create=t=>new ie(t);function v_(t){var n;return(n=t??jn.Promise)!==null&&n!==void 0?n:Promise}function HM(t){return t&&be(t.next)&&be(t.error)&&be(t.complete)}function UM(t){return t&&t instanceof Qi||HM(t)&&Hc(t)}function sp(t){return be(t?.lift)}function de(t){return n=>{if(sp(n))return n.lift(function(e){try{return t(e,this)}catch(r){this.error(r)}});throw new TypeError(`Unable to lift unknown Observable type`)}}function se(t,n,e,r,i){return new lp(t,n,e,r,i)}var lp=class extends Qi{constructor(n,e,r,i,o,a){super(n),this.onFinalize=o,this.shouldUnsubscribe=a,this._next=e?function(s){try{e(s)}catch(l){n.error(l)}}:super._next,this._error=i?function(s){try{i(s)}catch(l){n.error(l)}finally{this.unsubscribe()}}:super._error,this._complete=r?function(){try{r()}catch(s){n.error(s)}finally{this.unsubscribe()}}:super._complete}unsubscribe(){var n;if(!this.shouldUnsubscribe||this.shouldUnsubscribe()){let{closed:e}=this;super.unsubscribe(),!e&&((n=this.onFinalize)===null||n===void 0||n.call(this))}}};function __(){return de((t,n)=>{let e=null;t._refCount++;let r=se(n,void 0,void 0,void 0,()=>{if(!t||t._refCount<=0||0<--t._refCount){e=null;return}let i=t._connection,o=e;e=null,i&&(!o||i===o)&&i.unsubscribe(),n.unsubscribe()});t.subscribe(r),r.closed||(e=t.connect())})}var Es=class extends ie{constructor(n,e){super(),this.source=n,this.subjectFactory=e,this._subject=null,this._refCount=0,this._connection=null,sp(n)&&(this.lift=n.lift)}_subscribe(n){return this.getSubject().subscribe(n)}getSubject(){let n=this._subject;return(!n||n.isStopped)&&(this._subject=this.subjectFactory()),this._subject}_teardown(){this._refCount=0;let{_connection:n}=this;this._subject=this._connection=null,n?.unsubscribe()}connect(){let n=this._connection;if(!n){n=this._connection=new ne;let e=this.getSubject();n.add(this.source.subscribe(se(e,void 0,()=>{this._teardown(),e.complete()},r=>{this._teardown(),e.error(r)},()=>this._teardown()))),n.closed&&(this._connection=null,n=ne.EMPTY)}return n}refCount(){return __()(this)}};var na={schedule(t){let n=requestAnimationFrame,e=cancelAnimationFrame,{delegate:r}=na;r&&(n=r.requestAnimationFrame,e=r.cancelAnimationFrame);let i=n(o=>{e=void 0,t(o)});return new ne(()=>e?.(i))},requestAnimationFrame(...t){let{delegate:n}=na;return(n?.requestAnimationFrame||requestAnimationFrame)(...t)},cancelAnimationFrame(...t){let{delegate:n}=na;return(n?.cancelAnimationFrame||cancelAnimationFrame)(...t)},delegate:void 0};var C_=Xo(t=>function(){t(this),this.name=`ObjectUnsubscribedError`,this.message=`object unsubscribed`});var _=class extends ie{constructor(){super(),this.closed=!1,this.currentObservers=null,this.observers=[],this.isStopped=!1,this.hasError=!1,this.thrownError=null}lift(n){let e=new Wc(this,this);return e.operator=n,e}_throwIfClosed(){if(this.closed)throw new C_}next(n){ea(()=>{if(this._throwIfClosed(),!this.isStopped){this.currentObservers||(this.currentObservers=Array.from(this.observers));for(let e of this.currentObservers)e.next(n)}})}error(n){ea(()=>{if(this._throwIfClosed(),!this.isStopped){this.hasError=this.isStopped=!0,this.thrownError=n;let{observers:e}=this;for(;e.length;)e.shift().error(n)}})}complete(){ea(()=>{if(this._throwIfClosed(),!this.isStopped){this.isStopped=!0;let{observers:n}=this;for(;n.length;)n.shift().complete()}})}unsubscribe(){this.isStopped=this.closed=!0,this.observers=this.currentObservers=null}get observed(){var n;return((n=this.observers)===null||n===void 0?void 0:n.length)>0}_trySubscribe(n){return this._throwIfClosed(),super._trySubscribe(n)}_subscribe(n){return this._throwIfClosed(),this._checkFinalizedStatuses(n),this._innerSubscribe(n)}_innerSubscribe(n){let{hasError:e,isStopped:r,observers:i}=this;return e||r?tp:(this.currentObservers=null,i.push(n),new ne(()=>{this.currentObservers=null,Ki(i,n)}))}_checkFinalizedStatuses(n){let{hasError:e,thrownError:r,isStopped:i}=this;e?n.error(r):i&&n.complete()}asObservable(){let n=new ie;return n.source=this,n}};_.create=(t,n)=>new Wc(t,n);var Wc=class extends _{constructor(n,e){super(),this.destination=n,this.source=e}next(n){var e,r;(r=(e=this.destination)===null||e===void 0?void 0:e.next)===null||r===void 0||r.call(e,n)}error(n){var e,r;(r=(e=this.destination)===null||e===void 0?void 0:e.error)===null||r===void 0||r.call(e,n)}complete(){var n,e;(e=(n=this.destination)===null||n===void 0?void 0:n.complete)===null||e===void 0||e.call(n)}_subscribe(n){var e,r;return(r=(e=this.source)===null||e===void 0?void 0:e.subscribe(n))!==null&&r!==void 0?r:tp}};var Qe=class extends _{constructor(n){super(),this._value=n}get value(){return this.getValue()}_subscribe(n){let e=super._subscribe(n);return!e.closed&&n.next(this._value),e}getValue(){let{hasError:n,thrownError:e,_value:r}=this;if(n)throw e;return this._throwIfClosed(),r}next(n){super.next(this._value=n)}};var ks={now(){return(ks.delegate||Date).now()},delegate:void 0};var xn=class extends _{constructor(n=1/0,e=1/0,r=ks){super(),this._bufferSize=n,this._windowTime=e,this._timestampProvider=r,this._buffer=[],this._infiniteTimeWindow=!0,this._infiniteTimeWindow=e===1/0,this._bufferSize=Math.max(1,n),this._windowTime=Math.max(1,e)}next(n){let{isStopped:e,_buffer:r,_infiniteTimeWindow:i,_timestampProvider:o,_windowTime:a}=this;e||(r.push(n),!i&&r.push(o.now()+a)),this._trimBuffer(),super.next(n)}_subscribe(n){this._throwIfClosed(),this._trimBuffer();let e=this._innerSubscribe(n),{_infiniteTimeWindow:r,_buffer:i}=this,o=i.slice();for(let a=0;a<o.length&&!n.closed;a+=r?1:2)n.next(o[a]);return this._checkFinalizedStatuses(n),e}_trimBuffer(){let{_bufferSize:n,_timestampProvider:e,_buffer:r,_infiniteTimeWindow:i}=this,o=(i?1:2)*n;if(n<1/0&&o<r.length&&r.splice(0,r.length-o),!i){let a=e.now(),s=0;for(let l=1;l<r.length&&r[l]<=a;l+=2)s=l;s&&r.splice(0,s+1)}}};var qc=class extends ne{constructor(n,e){super()}schedule(n,e=0){return this}};var Ms={setInterval(t,n,...e){let{delegate:r}=Ms;return r?.setInterval?r.setInterval(t,n,...e):setInterval(t,n,...e)},clearInterval(t){let{delegate:n}=Ms;return(n?.clearInterval||clearInterval)(t)},delegate:void 0};var bi=class extends qc{constructor(n,e){super(n,e),this.scheduler=n,this.work=e,this.pending=!1}schedule(n,e=0){var r;if(this.closed)return this;this.state=n;let i=this.id,o=this.scheduler;return i!=null&&(this.id=this.recycleAsyncId(o,i,e)),this.pending=!0,this.delay=e,this.id=(r=this.id)!==null&&r!==void 0?r:this.requestAsyncId(o,this.id,e),this}requestAsyncId(n,e,r=0){return Ms.setInterval(n.flush.bind(n,this),r)}recycleAsyncId(n,e,r=0){if(r!=null&&this.delay===r&&this.pending===!1)return e;e!=null&&Ms.clearInterval(e)}execute(n,e){if(this.closed)return new Error(`executing a cancelled action`);this.pending=!1;let r=this._execute(n,e);if(r)return r;this.pending===!1&&this.id!=null&&(this.id=this.recycleAsyncId(this.scheduler,this.id,null))}_execute(n,e){let r=!1,i;try{this.work(n)}catch(o){r=!0,i=o||new Error(`Scheduled action threw falsy error`)}if(r)return this.unsubscribe(),i}unsubscribe(){if(!this.closed){let{id:n,scheduler:e}=this,{actions:r}=e;this.work=this.state=this.scheduler=null,this.pending=!1,Ki(r,this),n!=null&&(this.id=this.recycleAsyncId(e,n,null)),this.delay=null,super.unsubscribe()}}};var $M=1;var cp;var dp={};function w_(t){return t in dp?(delete dp[t],!0):!1}var{setImmediate:GM,clearImmediate:WM}={setImmediate(t){let n=$M++;return dp[n]=!0,cp||(cp=Promise.resolve()),cp.then(()=>w_(n)&&t()),n},clearImmediate(t){w_(t)}},Is={setImmediate(...t){let{delegate:n}=Is;return(n?.setImmediate||GM)(...t)},clearImmediate(t){let{delegate:n}=Is;return(n?.clearImmediate||WM)(t)},delegate:void 0};var Yc=class extends bi{constructor(n,e){super(n,e),this.scheduler=n,this.work=e}requestAsyncId(n,e,r=0){return r!==null&&r>0?super.requestAsyncId(n,e,r):(n.actions.push(this),n._scheduled||(n._scheduled=Is.setImmediate(n.flush.bind(n,void 0))))}recycleAsyncId(n,e,r=0){var i;if(r!=null?r>0:this.delay>0)return super.recycleAsyncId(n,e,r);let{actions:o}=n;e!=null&&((i=o[o.length-1])===null||i===void 0?void 0:i.id)!==e&&(Is.clearImmediate(e),n._scheduled===e&&(n._scheduled=void 0))}};var ra=class t{constructor(n,e=t.now){this.schedulerActionCtor=n,this.now=e}schedule(n,e=0,r){return new this.schedulerActionCtor(this,n).schedule(r,e)}};ra.now=ks.now;var yi=class extends ra{constructor(n,e=ra.now){super(n,e),this.actions=[],this._active=!1}flush(n){let{actions:e}=this;if(this._active){e.push(n);return}let r;this._active=!0;do if(r=n.execute(n.state,n.delay))break;while(n=e.shift());if(this._active=!1,r){for(;n=e.shift();)n.unsubscribe();throw r}}};var Kc=class extends yi{flush(n){this._active=!0;let e=this._scheduled;this._scheduled=void 0;let{actions:r}=this,i;n=n||r.shift();do if(i=n.execute(n.state,n.delay))break;while((n=r[0])&&n.id===e&&r.shift());if(this._active=!1,i){for(;(n=r[0])&&n.id===e&&r.shift();)n.unsubscribe();throw i}}};var Zc=new Kc(Yc);var Ns=new yi(bi);var D_=Ns;var Qc=class extends bi{constructor(n,e){super(n,e),this.scheduler=n,this.work=e}requestAsyncId(n,e,r=0){return r!==null&&r>0?super.requestAsyncId(n,e,r):(n.actions.push(this),n._scheduled||(n._scheduled=na.requestAnimationFrame(()=>n.flush(void 0))))}recycleAsyncId(n,e,r=0){var i;if(r!=null?r>0:this.delay>0)return super.recycleAsyncId(n,e,r);let{actions:o}=n;e!=null&&e===n._scheduled&&((i=o[o.length-1])===null||i===void 0?void 0:i.id)!==e&&(na.cancelAnimationFrame(e),n._scheduled=void 0)}};var Xc=class extends yi{flush(n){this._active=!0;let e;n?e=n.id:(e=this._scheduled,this._scheduled=void 0);let{actions:r}=this,i;n=n||r.shift();do if(i=n.execute(n.state,n.delay))break;while((n=r[0])&&n.id===e&&r.shift());if(this._active=!1,i){for(;(n=r[0])&&n.id===e&&r.shift();)n.unsubscribe();throw i}}};var Jc=new Xc(Qc);var ct=new ie(t=>t.complete());function ed(t){return t&&be(t.schedule)}function up(t){return t[t.length-1]}function td(t){return be(up(t))?t.pop():void 0}function sr(t){return ed(up(t))?t.pop():void 0}function S_(t,n){return typeof up(t)==`number`?t.pop():n}function k_(t,n,e,r){function i(o){return o instanceof e?o:new e(function(a){a(o)})}return new(e||(e=Promise))(function(o,a){function s(d){try{c(r.next(d))}catch(m){a(m)}}function l(d){try{c(r.throw(d))}catch(m){a(m)}}function c(d){d.done?o(d.value):i(d.value).then(s,l)}c((r=r.apply(t,n||[])).next())})}function E_(t){var n=typeof Symbol==`function`&&Symbol.iterator,e=n&&t[n],r=0;if(e)return e.call(t);if(t&&typeof t.length==`number`)return{next:function(){return t&&r>=t.length&&(t=void 0),{value:t&&t[r++],done:!t}}};throw new TypeError(n?`Object is not iterable.`:`Symbol.iterator is not defined.`)}function Xi(t){return this instanceof Xi?(this.v=t,this):new Xi(t)}function M_(t,n,e){if(!Symbol.asyncIterator)throw new TypeError(`Symbol.asyncIterator is not defined.`);var r=e.apply(t,n||[]),i,o=[];return i=Object.create((typeof AsyncIterator==`function`?AsyncIterator:Object).prototype),s(`next`),s(`throw`),s(`return`,a),i[Symbol.asyncIterator]=function(){return this},i;function a(f){return function(h){return Promise.resolve(h).then(f,m)}}function s(f,h){r[f]&&(i[f]=function(v){return new Promise(function(M,V){o.push([f,v,M,V])>1||l(f,v)})},h&&(i[f]=h(i[f])))}function l(f,h){try{c(r[f](h))}catch(v){p(o[0][3],v)}}function c(f){f.value instanceof Xi?Promise.resolve(f.value.v).then(d,m):p(o[0][2],f)}function d(f){l(`next`,f)}function m(f){l(`throw`,f)}function p(f,h){f(h),o.shift(),o.length&&l(o[0][0],o[0][1])}}function I_(t){if(!Symbol.asyncIterator)throw new TypeError(`Symbol.asyncIterator is not defined.`);var n=t[Symbol.asyncIterator],e;return n?n.call(t):(t=typeof E_==`function`?E_(t):t[Symbol.iterator](),e={},r(`next`),r(`throw`),r(`return`),e[Symbol.asyncIterator]=function(){return this},e);function r(o){e[o]=t[o]&&function(a){return new Promise(function(s,l){a=t[o](a),i(s,l,a.done,a.value)})}}function i(o,a,s,l){Promise.resolve(l).then(function(c){o({value:c,done:s})},a)}}var nd=(t=>t&&typeof t.length==`number`&&typeof t!=`function`);function rd(t){return be(t?.then)}function id(t){return be(t[ta])}function od(t){return Symbol.asyncIterator&&be(t?.[Symbol.asyncIterator])}function ad(t){return new TypeError(`You provided ${t!==null&&typeof t==`object`?`an invalid object`:`'${t}'`} where a stream was expected. You can provide an Observable, Promise, ReadableStream, Array, AsyncIterable, or Iterable.`)}function qM(){return typeof Symbol!=`function`||!Symbol.iterator?`@@iterator`:Symbol.iterator}var sd=qM();function ld(t){return be(t?.[sd])}function cd(t){return M_(this,arguments,function*(){let e=t.getReader();try{for(;;){let{value:r,done:i}=yield Xi(e.read());if(i)return yield Xi(void 0);yield yield Xi(r)}}finally{e.releaseLock()}})}function dd(t){return be(t?.getReader)}function He(t){if(t instanceof ie)return t;if(t!=null){if(id(t))return YM(t);if(nd(t))return KM(t);if(rd(t))return ZM(t);if(od(t))return N_(t);if(ld(t))return QM(t);if(dd(t))return XM(t)}throw ad(t)}function YM(t){return new ie(n=>{let e=t[ta]();if(be(e.subscribe))return e.subscribe(n);throw new TypeError(`Provided object does not correctly implement Symbol.observable`)})}function KM(t){return new ie(n=>{for(let e=0;e<t.length&&!n.closed;e++)n.next(t[e]);n.complete()})}function ZM(t){return new ie(n=>{t.then(e=>{n.closed||(n.next(e),n.complete())},e=>n.error(e)).then(null,Uc)})}function QM(t){return new ie(n=>{for(let e of t)if(n.next(e),n.closed)return;n.complete()})}function N_(t){return new ie(n=>{JM(t,n).catch(e=>n.error(e))})}function XM(t){return N_(cd(t))}function JM(t,n){var e,r,i,o;return k_(this,void 0,void 0,function*(){try{for(e=I_(t);r=yield e.next(),!r.done;){let a=r.value;if(n.next(a),n.closed)return}}catch(a){i={error:a}}finally{try{r&&!r.done&&(o=e.return)&&(yield o.call(e))}finally{if(i)throw i.error}}n.complete()})}function en(t,n,e,r=0,i=!1){let o=n.schedule(function(){e(),i?t.add(this.schedule(null,r)):this.unsubscribe()},r);if(t.add(o),!i)return o}function ud(t,n=0){return de((e,r)=>{e.subscribe(se(r,i=>en(r,t,()=>r.next(i),n),()=>en(r,t,()=>r.complete(),n),i=>en(r,t,()=>r.error(i),n)))})}function md(t,n=0){return de((e,r)=>{r.add(t.schedule(()=>e.subscribe(r),n))})}function T_(t,n){return He(t).pipe(md(n),ud(n))}function A_(t,n){return He(t).pipe(md(n),ud(n))}function R_(t,n){return new ie(e=>{let r=0;return n.schedule(function(){r===t.length?e.complete():(e.next(t[r++]),e.closed||this.schedule())})})}function O_(t,n){return new ie(e=>{let r;return en(e,n,()=>{r=t[sd](),en(e,n,()=>{let i,o;try{({value:i,done:o}=r.next())}catch(a){e.error(a);return}o?e.complete():e.next(i)},0,!0)}),()=>be(r?.return)&&r.return()})}function fd(t,n){if(!t)throw new Error(`Iterable cannot be null`);return new ie(e=>{en(e,n,()=>{let r=t[Symbol.asyncIterator]();en(e,n,()=>{r.next().then(i=>{i.done?e.complete():e.next(i.value)})},0,!0)})})}function F_(t,n){return fd(cd(t),n)}function P_(t,n){if(t!=null){if(id(t))return T_(t,n);if(nd(t))return R_(t,n);if(rd(t))return A_(t,n);if(od(t))return fd(t,n);if(ld(t))return O_(t,n);if(dd(t))return F_(t,n)}throw ad(t)}function Ye(t,n){return n?P_(t,n):He(t)}function j(...t){return Ye(t,sr(t))}function Ts(t,n){let e=be(t)?t:()=>t,r=i=>i.error(e());return new ie(n?i=>n.schedule(r,0,i):r)}function Ji(t){return!!t&&(t instanceof ie||be(t.lift)&&be(t.subscribe))}var eo=Xo(t=>function(){t(this),this.name=`EmptyError`,this.message=`no elements in sequence`});function L_(t){return t instanceof Date&&!isNaN(t)}function oe(t,n){return de((e,r)=>{let i=0;e.subscribe(se(r,o=>{r.next(t.call(n,o,i++))}))})}var{isArray:eI}=Array;function tI(t,n){return eI(n)?t(...n):t(n)}function pd(t){return oe(n=>tI(t,n))}var{isArray:nI}=Array,{getPrototypeOf:rI,prototype:iI,keys:oI}=Object;function hd(t){if(t.length===1){let n=t[0];if(nI(n))return{args:n,keys:null};if(aI(n)){let e=oI(n);return{args:e.map(r=>n[r]),keys:e}}}return{args:t,keys:null}}function aI(t){return t&&typeof t==`object`&&rI(t)===iI}function gd(t,n){return t.reduce((e,r,i)=>(e[r]=n[i],e),{})}function tn(...t){let n=sr(t),e=td(t),{args:r,keys:i}=hd(t);if(r.length===0)return Ye([],n);let o=new ie(sI(r,n,i?a=>gd(i,a):Zt));return e?o.pipe(pd(e)):o}function sI(t,n,e=Zt){return r=>{V_(n,()=>{let{length:i}=t,o=new Array(i),a=i,s=i;for(let l=0;l<i;l++)V_(n,()=>{let c=Ye(t[l],n),d=!1;c.subscribe(se(r,m=>{o[l]=m,d||(d=!0,s--),s||r.next(e(o.slice()))},()=>{--a||r.complete()}))},r)},r)}}function V_(t,n,e){t?en(e,t,n):n()}function B_(t,n,e,r,i,o,a,s){let l=[],c=0,d=0,m=!1,p=()=>{m&&!l.length&&!c&&n.complete()},f=v=>c<r?h(v):l.push(v),h=v=>{o&&n.next(v),c++;let M=!1;He(e(v,d++)).subscribe(se(n,V=>{i?.(V),o?f(V):n.next(V)},()=>{M=!0},void 0,()=>{if(M)try{for(c--;l.length&&c<r;){let V=l.shift();a?en(n,a,()=>h(V)):h(V)}p()}catch(V){n.error(V)}}))};return t.subscribe(se(n,f,()=>{m=!0,p()})),()=>{s?.()}}function It(t,n,e=1/0){return be(n)?It((r,i)=>oe((o,a)=>n(r,o,i,a))(He(t(r,i))),e):(typeof n==`number`&&(e=n),de((r,i)=>B_(r,i,t,e)))}function vi(t=1/0){return It(Zt,t)}function j_(){return vi(1)}function _i(...t){return j_()(Ye(t,sr(t)))}function zn(t){return new ie(n=>{He(t()).subscribe(n)})}function As(...t){let n=td(t),{args:e,keys:r}=hd(t),i=new ie(o=>{let{length:a}=e;if(!a){o.complete();return}let s=new Array(a),l=a,c=a;for(let d=0;d<a;d++){let m=!1;He(e[d]).subscribe(se(o,p=>{m||(m=!0,c--),s[d]=p},()=>l--,void 0,()=>{(!l||!m)&&(c||o.next(r?gd(r,s):s),o.complete())}))}});return n?i.pipe(pd(n)):i}function bd(t=0,n,e=D_){let r=-1;return n!=null&&(ed(n)?e=n:r=n),new ie(i=>{let o=L_(t)?+t-e.now():t;o<0&&(o=0);let a=0;return e.schedule(function(){i.closed||(i.next(a++),0<=r?this.schedule(void 0,r):i.complete())},o)})}function Dt(...t){let n=sr(t),e=S_(t,1/0),r=t;return r.length?r.length===1?He(r[0]):vi(e)(Ye(r,n)):ct}function Ee(t,n){return de((e,r)=>{let i=0;e.subscribe(se(r,o=>t.call(n,o,i++)&&r.next(o)))})}function z_(t){return de((n,e)=>{let r=!1,i=null,o=null,a=!1,s=()=>{if(o?.unsubscribe(),o=null,r){r=!1;let c=i;i=null,e.next(c)}a&&e.complete()},l=()=>{o=null,a&&e.complete()};n.subscribe(se(e,c=>{r=!0,i=c,o||He(t(c)).subscribe(o=se(e,s,l))},()=>{a=!0,(!r||!o||o.closed)&&e.complete()}))})}function ia(t,n=Ns){return z_(()=>bd(t,n))}function Ci(t){return de((n,e)=>{let r=null,i=!1,o;r=n.subscribe(se(e,void 0,void 0,a=>{o=He(t(a,Ci(t)(n))),r?(r.unsubscribe(),r=null,o.subscribe(e)):i=!0})),i&&(r.unsubscribe(),r=null,o.subscribe(e))})}function wi(t,n){return be(n)?It(t,n,1):It(t,1)}function Rs(t,n=Ns){return de((e,r)=>{let i=null,o=null,a=null,s=()=>{if(i){i.unsubscribe(),i=null;let c=o;o=null,r.next(c)}};function l(){let c=a+t,d=n.now();if(d<c){i=this.schedule(void 0,c-d),r.add(i);return}s()}e.subscribe(se(r,c=>{o=c,a=n.now(),i||(i=n.schedule(l,t),r.add(i))},()=>{s(),r.complete()},void 0,()=>{o=i=null}))})}function H_(t){return de((n,e)=>{let r=!1;n.subscribe(se(e,i=>{r=!0,e.next(i)},()=>{r||e.next(t),e.complete()}))})}function it(t){return t<=0?()=>ct:de((n,e)=>{let r=0;n.subscribe(se(e,i=>{++r<=t&&(e.next(i),t<=r&&e.complete())}))})}function yd(t,n=Zt){return t=t??lI,de((e,r)=>{let i,o=!0;e.subscribe(se(r,a=>{let s=n(a);(o||!t(i,s))&&(o=!1,i=s,r.next(a))}))})}function lI(t,n){return t===n}function U_(t=cI){return de((n,e)=>{let r=!1;n.subscribe(se(e,i=>{r=!0,e.next(i)},()=>r?e.complete():e.error(t())))})}function cI(){return new eo}function xi(t){return de((n,e)=>{try{n.subscribe(e)}finally{e.add(t)}})}function Fr(t,n){let e=arguments.length>=2;return r=>r.pipe(t?Ee((i,o)=>t(i,o,r)):Zt,it(1),e?H_(n):U_(()=>new eo))}function vd(t){return t<=0?()=>ct:de((n,e)=>{let r=[];n.subscribe(se(e,i=>{r.push(i),t<r.length&&r.shift()},()=>{for(let i of r)e.next(i);e.complete()},void 0,()=>{r=null}))})}function _d(){return de((t,n)=>{let e,r=!1;t.subscribe(se(n,i=>{let o=e;e=i,r&&n.next([o,i]),r=!0}))})}function dI(t=1/0){let n;t&&typeof t==`object`?n=t:n={count:t};let{count:e=1/0,delay:r,resetOnSuccess:i=!1}=n;return e<=0?Zt:de((o,a)=>{let s=0,l,c=()=>{let d=!1;l=o.subscribe(se(a,m=>{i&&(s=0),a.next(m)},void 0,m=>{if(s++<e){let p=()=>{l?(l.unsubscribe(),l=null,c()):d=!0};if(r!=null){let f=typeof r==`number`?bd(r):He(r(m,s)),h=se(a,()=>{h.unsubscribe(),p()},()=>{a.complete()});f.subscribe(h)}else p()}else a.error(m)})),d&&(l.unsubscribe(),l=null,c())};c()})}function Os(t={}){let{connector:n=()=>new _,resetOnError:e=!0,resetOnComplete:r=!0,resetOnRefCountZero:i=!0}=t;return o=>{let a,s,l,c=0,d=!1,m=!1,p=()=>{s?.unsubscribe(),s=void 0},f=()=>{p(),a=l=void 0,d=m=!1},h=()=>{let v=a;f(),v?.unsubscribe()};return de((v,M)=>{c++,!m&&!d&&p();let V=l=l??n();M.add(()=>{c--,c===0&&!m&&!d&&(s=mp(h,i))}),V.subscribe(M),!a&&c>0&&(a=new Or({next:O=>V.next(O),error:O=>{m=!0,p(),s=mp(f,e,O),V.error(O)},complete:()=>{d=!0,p(),s=mp(f,r),V.complete()}}),He(v).subscribe(a))})(o)}}function mp(t,n,...e){if(n===!0){t();return}if(n===!1)return;let r=new Or({next:()=>{r.unsubscribe(),t()}});return He(n(...e)).subscribe(r)}function Cd(t,n,e){let r,i=!1;return t&&typeof t==`object`?{bufferSize:r=1/0,windowTime:n=1/0,refCount:i=!1,scheduler:e}=t:r=t??1/0,Os({connector:()=>new xn(r,n,e),resetOnError:!0,resetOnComplete:!1,resetOnRefCountZero:i})}function Fs(t){return Ee((n,e)=>t<=e)}function _t(...t){let n=sr(t);return de((e,r)=>{(n?_i(t,e,n):_i(t,e)).subscribe(r)})}function Ct(t,n){return de((e,r)=>{let i=null,o=0,a=!1,s=()=>a&&!i&&r.complete();e.subscribe(se(r,l=>{i?.unsubscribe();let c=0,d=o++;He(t(l,d)).subscribe(i=se(r,m=>r.next(n?n(l,m,d,c++):m),()=>{i=null,s()}))},()=>{a=!0,s()}))})}function De(t){return de((n,e)=>{He(t).subscribe(se(e,()=>e.complete(),Ss)),!e.closed&&n.subscribe(e)})}function fp(t,n=!1){return de((e,r)=>{let i=0;e.subscribe(se(r,o=>{let a=t(o,i++);(a||n)&&r.next(o),!a&&r.complete()}))})}function St(t,n,e){let r=be(t)||n||e?{next:t,error:n,complete:e}:t;return r?de((i,o)=>{var a;(a=r.subscribe)===null||a===void 0||a.call(r);let s=!0;i.subscribe(se(o,l=>{var c;(c=r.next)===null||c===void 0||c.call(r,l),o.next(l)},()=>{var l;s=!1,(l=r.complete)===null||l===void 0||l.call(r),o.complete()},l=>{var c;s=!1,(c=r.error)===null||c===void 0||c.call(r,l),o.error(l)},()=>{var l,c;s&&((l=r.unsubscribe)===null||l===void 0||l.call(r)),(c=r.finalize)===null||c===void 0||c.call(r)}))}):Zt}var Ip=`https://angular.dev/best-practices/security#preventing-cross-site-scripting-xss`;var D=class extends Error{code;constructor(n,e){super(Dn(n,e)),this.code=n}};function uI(t){return`NG0${Math.abs(t)}`}function Dn(t,n){return`${uI(t)}${n?`: `+n:``}`}function je(t){for(let n in t)if(t[n]===je)return n;throw Error(``)}function K_(t,n){for(let e in n)Object.hasOwn(n,e)&&!Object.hasOwn(t,e)&&(t[e]=n[e])}function Hs(t){if(typeof t==`string`)return t;if(Array.isArray(t))return`[${t.map(Hs).join(`, `)}]`;if(t==null)return``+t;let n=t.overriddenName||t.name;if(n)return`${n}`;let e=t.toString();if(e==null)return``+e;let r=e.indexOf(`
`);return r>=0?e.slice(0,r):e}function Md(t,n){return t?n?`${t} ${n}`:t:n||``}var mI=je({__forward_ref__:je});function pt(t){return t.__forward_ref__=pt,t}function Nt(t){return Np(t)?t():t}function Np(t){return typeof t==`function`&&Object.hasOwn(t,mI)&&t.__forward_ref__===pt}function q(t){return{token:t.token,providedIn:t.providedIn||null,factory:t.factory,value:void 0}}function A(t){return{providers:t.providers||[],imports:t.imports||[]}}function Us(t){return fI(t,Id)}function Tp(t){return Us(t)!==null}function fI(t,n){return Object.hasOwn(t,n)&&t[n]||null}function pI(t){return(t?.[Id]??null)||null}function hp(t){return t&&Object.hasOwn(t,xd)?t[xd]:null}var Id=je({ɵprov:je});var xd=je({ɵinj:je});var g=class{_desc;ngMetadataName=`InjectionToken`;ɵprov;constructor(n,e){this._desc=n,this.ɵprov=void 0,typeof e==`number`?this.__NG_ELEMENT_ID__=e:e!==void 0&&(this.ɵprov=q({token:this,providedIn:e.providedIn||`root`,factory:e.factory}))}get multi(){return this}toString(){return`InjectionToken ${this._desc}`}};function Ap(t){return t&&!!t.ɵproviders}var $s=je({ɵcmp:je});var Gs=je({ɵdir:je});var Rp=je({ɵpipe:je});var Op=je({ɵmod:je});var Vs=je({ɵfac:je});var so=je({__NG_ELEMENT_ID__:je});var $_=je({__NG_ENV_ID__:je});function Z_(t){return Td(t,`@NgModule`),t[Op]||null}function Br(t){return Td(t,`@Component`),t[$s]||null}function Nd(t){return Td(t,`@Directive`),t[Gs]||null}function Q_(t){return Td(t,`@Pipe`),t[Rp]||null}function Td(t,n){if(t==null)throw new D(-919,!1)}function lo(t){return typeof t==`string`?t:t==null?``:String(t)}var X_=je({ngErrorCode:je});var hI=je({ngErrorMessage:je});var gI=je({ngTokenPath:je});function Fp(t,n){return J_(``,-200,n)}function Ad(t,n){throw new D(-201,!1)}function J_(t,n,e){let r=new D(n,t);return r[X_]=n,r[hI]=t,e&&(r[gI]=e),r}function bI(t){return t[X_]}var gp;function eC(){return gp}function cn(t){let n=gp;return gp=t,n}function Pp(t,n,e){let r=Us(t);if(r&&r.providedIn==`root`)return r.value===void 0?r.value=r.factory():r.value;if(e&8)return null;if(n!==void 0)return n;Ad(t,``)}var jt=globalThis;var to={};var vI=`__NG_DI_FLAG__`;var bp=class{injector;constructor(n){this.injector=n}retrieve(n,e){let r=no(e)||0;try{return this.injector.get(n,r&8?null:to,r)}catch(i){if(Qo(i))return i;throw i}}};function _I(t,n=0){let e=jc();if(e===void 0)throw new D(-203,!1);if(e===null)return Pp(t,void 0,n);{let r=CI(n),i=e.retrieve(t,r);if(Qo(i)){if(r.optional)return null;throw i}return i}}function P(t,n=0){return(eC()||_I)(Nt(t),n)}function u(t,n){return P(t,no(n))}function no(t){return typeof t>`u`||typeof t==`number`?t:0|(t.optional&&8)|(t.host&&1)|(t.self&&2)|(t.skipSelf&&4)}function CI(t){return{optional:!!(t&8),host:!!(t&1),self:!!(t&2),skipSelf:!!(t&4)}}function yp(t){let n=[];for(let e=0;e<t.length;e++){let r=Nt(t[e]);if(Array.isArray(r)){if(r.length===0)throw new D(900,!1);let i,o=0;for(let a=0;a<r.length;a++){let s=r[a],l=wI(s);typeof l==`number`?l===-1?i=s.token:o|=l:i=s}n.push(P(i,o))}else n.push(P(r))}return n}function wI(t){return t[vI]}function ro(t,n){return Object.hasOwn(t,Vs)?t[Vs]:null}function tC(t,n,e){if(t.length!==n.length)return!1;for(let r=0;r<t.length;r++){let i=t[r],o=n[r];if(e&&(i=e(i),o=e(o)),o!==i)return!1}return!0}function nC(t){return t.flat(Number.POSITIVE_INFINITY)}function Rd(t,n){t.forEach(e=>Array.isArray(e)?Rd(e,n):n(e))}function Lp(t,n,e){n>=t.length?t.push(e):t.splice(n,0,e)}function Ws(t,n){return n>=t.length-1?t.pop():t.splice(n,1)[0]}function rC(t,n){let e=[];for(let r=0;r<t;r++)e.push(n);return e}function iC(t,n,e,r){let i=t.length;if(i==n)t.push(e,r);else if(i===1)t.push(r,t[0]),t[0]=e;else{for(i--,t.push(t[i-1],t[i]);i>n;){let o=i-2;t[i]=t[o],i--}t[n]=e,t[n+1]=r}}function Od(t,n,e){let r=sa(t,n);return r>=0?t[r|1]=e:(r=~r,iC(t,r,n,e)),r}function Fd(t,n){let e=sa(t,n);if(e>=0)return t[e|1]}function sa(t,n){return xI(t,n,1)}function xI(t,n,e){let r=0,i=t.length>>e;for(;i!==r;){let o=r+(i-r>>1),a=t[o<<e];if(n===a)return o<<e;a>n?i=o:r=o+1}return~(i<<e)}var Si={};var Bt=[];var Ei=new g(``);var Vp=new g(``,-1);var Bp=new g(``);var aa=class{get(n,e=to){if(e===to){let i=J_(``,-201);throw i.name=`ɵNotFound`,i}return e}};function lr(t){return{ɵproviders:t}}function oC(...t){return{ɵproviders:jp(!0,t),ɵfromNgModule:!0}}function jp(t,...n){let e=[],r=new Set,i,o=a=>{e.push(a)};return Rd(n,a=>{let s=a;Dd(s,o,[],r)&&(i||=[],i.push(s))}),i!==void 0&&aC(i,o),e}function aC(t,n){for(let e=0;e<t.length;e++){let{ngModule:r,providers:i}=t[e];zp(i,o=>{n(o,r)})}}function Dd(t,n,e,r){if(t=Nt(t),!t)return!1;let i=null,o=hp(t),a=!o&&Br(t);if(!o&&!a){let l=t.ngModule;if(o=hp(l),o)i=l;else return!1}else{if(a&&!a.standalone)return!1;i=t}let s=r.has(i);if(a){if(s)return!1;if(r.add(i),a.dependencies){let l=typeof a.dependencies==`function`?a.dependencies():a.dependencies;for(let c of l)Dd(c,n,e,r)}}else if(o){if(o.imports!=null&&!s){r.add(i);let c;Rd(o.imports,d=>{Dd(d,n,e,r)&&(c||=[],c.push(d))}),c!==void 0&&aC(c,n)}if(!s){let c=ro(i)||(()=>new i);n({provide:i,useFactory:c,deps:Bt},i),n({provide:Bp,useValue:i,multi:!0},i),n({provide:Ei,useValue:()=>P(i),multi:!0},i)}let l=o.providers;if(l!=null&&!s){let c=t;zp(l,d=>{n(d,c)})}}else return!1;return i!==t&&t.providers!==void 0}function zp(t,n){for(let e of t)Ap(e)&&(e=e.ɵproviders),Array.isArray(e)?zp(e,n):n(e)}var DI=je({provide:String,useValue:je});function sC(t){return t!==null&&typeof t==`object`&&DI in t}function SI(t){return!!(t&&t.useExisting)}function EI(t){return!!(t&&t.useFactory)}function io(t){return typeof t==`function`}function lC(t){return!!t.useClass}var qs=new g(``);var wd={};var G_={};var pp;function la(){return pp===void 0&&(pp=new aa),pp}var Ue=class{};var oo=class extends Ue{parent;source;scopes;records=new Map;_ngOnDestroyHooks=new Set;_onDestroyHooks=[];get destroyed(){return this._destroyed}_destroyed=!1;injectorDefTypes;constructor(n,e,r,i){super(),this.parent=e,this.source=r,this.scopes=i,_p(n,a=>this.processProvider(a)),this.records.set(Vp,oa(void 0,this)),i.has(`environment`)&&this.records.set(Ue,oa(void 0,this));let o=this.records.get(qs);o!=null&&typeof o.value==`string`&&this.scopes.add(o.value),this.injectorDefTypes=new Set(this.get(Bp,Bt,{self:!0}))}retrieve(n,e){let r=no(e)||0;try{return this.get(n,to,r)}catch(i){if(Qo(i))return i;throw i}}destroy(){Ps(this),this._destroyed=!0;let n=Z(null);try{for(let r of this._ngOnDestroyHooks)r.ngOnDestroy();let e=this._onDestroyHooks;this._onDestroyHooks=[];for(let r of e)r()}finally{this.records.clear(),this._ngOnDestroyHooks.clear(),this.injectorDefTypes.clear(),Z(n)}}onDestroy(n){return Ps(this),this._onDestroyHooks.push(n),()=>this.removeOnDestroy(n)}runInContext(n){Ps(this);let e=ar(this),r=cn(void 0);try{return n()}finally{ar(e),cn(r)}}get(n,e=to,r){if(Ps(this),Object.hasOwn(n,$_))return n[$_](this);let i=no(r),a=ar(this),s=cn(void 0);try{if(!(i&4)){let c=this.records.get(n);if(c===void 0){let d=TI(n)&&Us(n);d&&this.injectableDefInScope(d)?c=oa(vp(n),wd):c=null,this.records.set(n,c)}if(c!=null)return this.hydrate(n,c,i)}let l=i&2?la():this.parent;return e=i&8&&e===to?null:e,l.get(n,e)}catch(l){let c=bI(l);throw c===-200||c===-201?new D(c,null):l}finally{cn(s),ar(a)}}resolveInjectorInitializers(){let n=Z(null),e=ar(this),r=cn(void 0);try{let o=this.get(Ei,Bt,{self:!0});for(let a of o)a()}finally{ar(e),cn(r),Z(n)}}toString(){return`R3Injector[...]`}processProvider(n){n=Nt(n);let e=io(n)?n:Nt(n&&n.provide),r=MI(n);if(!io(n)&&n.multi===!0){let i=this.records.get(e);i||(i=oa(void 0,wd,!0),i.factory=()=>yp(i.multi),this.records.set(e,i)),e=n,i.multi.push(n)}this.records.set(e,r)}hydrate(n,e,r){let i=Z(null);try{if(e.value===G_)throw Fp(``);return e.value===wd&&(e.value=G_,e.value=e.factory(void 0,r)),typeof e.value==`object`&&e.value&&NI(e.value)&&this._ngOnDestroyHooks.add(e.value),e.value}finally{Z(i)}}injectableDefInScope(n){if(!n.providedIn)return!1;let e=Nt(n.providedIn);return typeof e==`string`?e===`any`||this.scopes.has(e):this.injectorDefTypes.has(e)}removeOnDestroy(n){let e=this._onDestroyHooks.indexOf(n);e!==-1&&this._onDestroyHooks.splice(e,1)}};function vp(t){let n=Us(t),e=n!==null?n.factory:ro(t);if(e!==null)return e;if(t instanceof g)throw new D(-204,!1);if(t instanceof Function)return kI(t);throw new D(-204,!1)}function kI(t){if(t.length>0)throw new D(-204,!1);let e=pI(t);return e!==null?()=>e.factory(t):()=>new t}function MI(t){if(sC(t))return oa(void 0,t.useValue);return oa(Hp(t),wd)}function Hp(t,n,e){let r;if(io(t)){let i=Nt(t);return ro(i)||vp(i)}else if(sC(t))r=()=>Nt(t.useValue);else if(EI(t))r=()=>t.useFactory(...yp(t.deps||[]));else if(SI(t))r=(i,o)=>P(Nt(t.useExisting),o!==void 0&&o&8?8:void 0);else{let i=Nt(t&&(t.useClass||t.provide));if(II(t))r=()=>new i(...yp(t.deps));else return ro(i)||vp(i)}return r}function Ps(t){if(t.destroyed)throw new D(-205,!1)}function oa(t,n,e=!1){return{factory:t,value:n,multi:e?[]:void 0}}function II(t){return!!t.deps}function NI(t){return t!==null&&typeof t==`object`&&typeof t.ngOnDestroy==`function`}function TI(t){return typeof t==`function`||typeof t==`object`&&t.ngMetadataName===`InjectionToken`}function _p(t,n){for(let e of t)Array.isArray(e)?_p(e,n):e&&Ap(e)?_p(e.ɵproviders,n):n(e)}function ht(t,n){let e;t instanceof oo?(Ps(t),e=t):e=new bp(t);let i=ar(e),o=cn(void 0);try{return n()}finally{ar(i),cn(o)}}function Up(){return eC()!==void 0||jc()!=null}var Un=0;var ee=1;var ae=2;var dt=3;var Sn=4;var Tt=5;var co=6;var ca=7;var ot=8;var jr=9;var $n=10;var $e=11;var da=12;var $p=13;var ki=14;var zt=15;var Mi=16;var uo=17;var cr=18;var Ys=19;var Gp=20;var Pr=21;var Pd=22;var Lr=23;var dn=24;var mo=25;var cC=26;var ua=27;var at=28;var dC=1;var Wp=6;var fo=7;var Ks=8;var po=9;var st=10;function zr(t){return Array.isArray(t)&&typeof t[dC]==`object`}function En(t){return Array.isArray(t)&&t[dC]===!0}function qp(t){return(t.flags&4)!==0}function dr(t){return t.componentOffset>-1}function ma(t){return(t.flags&1)===1}function ur(t){return!!t.template}function fa(t){return(t[ae]&512)!==0}function ho(t){return(t[ae]&256)===256}var Te=(function(t){return t[t.NONE=0]=`NONE`,t[t.HTML=1]=`HTML`,t[t.STYLE=2]=`STYLE`,t[t.SCRIPT=3]=`SCRIPT`,t[t.URL=4]=`URL`,t[t.RESOURCE_URL=5]=`RESOURCE_URL`,t[t.ATTRIBUTE_NO_BINDING=6]=`ATTRIBUTE_NO_BINDING`,t})(Te||{});var Ls;var ao=`svg`;var Ld=`math`;var Cp=``;var W_=`*`;var wp=()=>Object.create(null);function AI(){return Ls||(Ls=wp(),Di(Te.HTML,void 0,[[`iframe`,[`srcdoc`]],[`*`,[`innerHTML`,`outerHTML`]]]),Di(Te.STYLE,void 0,[[`*`,[`style`]]]),Di(Te.URL,void 0,[[`*`,[`formAction`]],[`area`,[`href`]],[`a`,[`href`,`xlink:href`]],[`form`,[`action`]]]),Di(Te.URL,Ld,[[`*`,[`href`,`xlink:href`]]]),Di(Te.RESOURCE_URL,void 0,[[`base`,[`href`]],[`embed`,[`src`]],[`frame`,[`src`]],[`iframe`,[`src`]],[`link`,[`href`]],[`object`,[`codebase`,`data`]]]),Di(Te.URL,ao,[[`a`,[`href`,`xlink:href`]]]),Di(Te.ATTRIBUTE_NO_BINDING,ao,[[`animate`,[`attributeName`,`values`,`to`,`from`]],[`set`,[`to`,`attributeName`]],[`animateMotion`,[`attributeName`]],[`animateTransform`,[`attributeName`]]]),Di(Te.ATTRIBUTE_NO_BINDING,void 0,[[`unknown`,[`attributeName`,`values`,`to`,`from`,`sandbox`,`allow`,`allowFullscreen`,`referrerPolicy`,`csp`,`fetchPriority`,`credentialless`]],[`iframe`,[`sandbox`,`allow`,`allowFullscreen`,`referrerPolicy`,`csp`,`fetchPriority`,`credentialless`]]]),Ls)}function Di(t,n,e){let r=n??Cp;for(let[i,o]of e){let a=i.toLowerCase();for(let s of o){let l=s.toLowerCase(),c=Ls[l]??=wp(),d=c[r]??=wp();d[a]=t}}}function uC(t,n,e){let i=AI()[n.toLowerCase()];if(!i)return Te.NONE;let o=t.toLowerCase(),a;if(e){let s=i[e];s&&(a=s[o]??s[W_])}if(a===void 0){let s=i[Cp];s&&(a=s[o]??s[W_])}if(a===void 0&&(!e||e===Cp)){let s=i[ao];s&&(a=s[o])}return a??Te.NONE}function At(t){for(;Array.isArray(t);)t=t[Un];return t}function Yp(t,n){return At(n[t])}function nn(t,n){return At(n[t.index])}function Vd(t,n){return t.data[n]}function mC(t,n){return t[n]}function kn(t,n){let e=n[t];return zr(e)?e:e[Un]}function fC(t){return(t[ae]&4)===4}function Bd(t){return(t[ae]&128)===128}function pC(t){return En(t[dt])}function Mn(t,n){return n==null?null:t[n]}function Kp(t){t[uo]=0}function Zp(t){t[ae]&1024||(t[ae]|=1024,Bd(t)&&go(t))}function hC(t,n){for(;t>0;)n=n[ki],t--;return n}function Zs(t){return!!(t[ae]&9216||t[dn]?.dirty)}function jd(t){t[$n].changeDetectionScheduler?.notify(8),t[ae]&64&&(t[ae]|=1024),Zs(t)&&go(t)}function go(t){t[$n].changeDetectionScheduler?.notify(0);let n=Vr(t);for(;n!==null&&!(n[ae]&8192||(n[ae]|=8192,!Bd(n)));)n=Vr(n)}function zd(t,n){if(ho(t))throw new D(911,!1);t[Pr]===null&&(t[Pr]=[]),t[Pr].push(n)}function gC(t,n){if(t[Pr]===null)return;let e=t[Pr].indexOf(n);e!==-1&&t[Pr].splice(e,1)}function Vr(t){let n=t[dt];return En(n)?n[dt]:n}function Qp(t){return t[ca]??=[]}function Xp(t){return t.cleanup??=[]}function bC(t,n,e,r){let i=Qp(n);i.push(e),t.firstCreatePass&&Xp(t).push(r,i.length-1)}var _e={lFrame:IC(null),bindingsEnabled:!0,skipHydrationRootTNode:null};var xp=!1;function yC(){return _e.lFrame.elementDepthCount}function vC(){_e.lFrame.elementDepthCount++}function Jp(){_e.lFrame.elementDepthCount--}function Hd(){return _e.bindingsEnabled}function eh(){return _e.skipHydrationRootTNode!==null}function th(t){return _e.skipHydrationRootTNode===t}function nh(){_e.skipHydrationRootTNode=null}function te(){return _e.lFrame.lView}function Ke(){return _e.lFrame.tView}function Xe(t){return _e.lFrame.contextLView=t,t[ot]}function Je(t){return _e.lFrame.contextLView=null,t}function gt(){let t=rh();for(;t!==null&&t.type===64;)t=t.parent;return t}function rh(){return _e.lFrame.currentTNode}function _C(){let t=_e.lFrame,n=t.currentTNode;return t.isParent?n:n.parent}function pa(t,n){let e=_e.lFrame;e.currentTNode=t,e.isParent=n}function ih(){return _e.lFrame.isParent}function oh(){_e.lFrame.isParent=!1}function CC(){return _e.lFrame.contextLView}function ah(){return xp}function Bs(t){let n=xp;return xp=t,n}function sh(){let t=_e.lFrame,n=t.bindingRootIndex;return n===-1&&(n=t.bindingRootIndex=t.tView.bindingStartIndex),n}function wC(){return _e.lFrame.bindingIndex}function xC(t){return _e.lFrame.bindingIndex=t}function mr(){return _e.lFrame.bindingIndex++}function Ud(t){let n=_e.lFrame,e=n.bindingIndex;return n.bindingIndex=n.bindingIndex+t,e}function DC(){return _e.lFrame.inI18n}function SC(t,n){let e=_e.lFrame;e.bindingIndex=e.bindingRootIndex=t,$d(n)}function EC(){return _e.lFrame.currentDirectiveIndex}function $d(t){_e.lFrame.currentDirectiveIndex=t}function kC(t){let n=_e.lFrame.currentDirectiveIndex;return n===-1?null:t[n]}function Gd(){return _e.lFrame.currentQueryIndex}function Qs(t){_e.lFrame.currentQueryIndex=t}function RI(t){let n=t[ee];return n.type===2?n.declTNode:n.type===1?t[Tt]:null}function lh(t,n,e){if(e&4){let i=n,o=t;for(;i=i.parent,i===null&&!(e&1);)if(i=RI(o),i===null||(o=o[ki],i.type&10))break;if(i===null)return!1;n=i,t=o}let r=_e.lFrame=MC();return r.currentTNode=n,r.lView=t,!0}function Wd(t){let n=MC(),e=t[ee];_e.lFrame=n,n.currentTNode=e.firstChild,n.lView=t,n.tView=e,n.contextLView=t,n.bindingIndex=e.bindingStartIndex,n.inI18n=!1}function MC(){let t=_e.lFrame,n=t===null?null:t.child;return n===null?IC(t):n}function IC(t){let n={currentTNode:null,isParent:!0,lView:null,tView:null,selectedIndex:-1,contextLView:null,elementDepthCount:0,currentNamespace:null,currentDirectiveIndex:-1,bindingRootIndex:-1,bindingIndex:-1,currentQueryIndex:0,parent:t,child:null,inI18n:!1};return t!==null&&(t.child=n),n}function NC(){let t=_e.lFrame;return _e.lFrame=t.parent,t.currentTNode=null,t.lView=null,t}var ch=NC;function qd(){let t=NC();t.isParent=!0,t.tView=null,t.selectedIndex=-1,t.contextLView=null,t.elementDepthCount=0,t.currentDirectiveIndex=-1,t.currentNamespace=null,t.bindingRootIndex=-1,t.bindingIndex=-1,t.currentQueryIndex=0}function TC(t){return(_e.lFrame.contextLView=hC(t,_e.lFrame.contextLView))[ot]}function Gn(){return _e.lFrame.selectedIndex}function Ii(t){_e.lFrame.selectedIndex=t}function Ni(){let t=_e.lFrame;return Vd(t.tView,t.selectedIndex)}function Et(){_e.lFrame.currentNamespace=ao}function Hr(){OI()}function OI(){_e.lFrame.currentNamespace=null}function dh(){return _e.lFrame.currentNamespace}var AC=!0;function Yd(){return AC}function Xs(t){AC=t}function Dp(t,n=null,e=null,r){let i=uh(t,n,e,r);return i.resolveInjectorInitializers(),i}function uh(t,n=null,e=null,r,i=new Set){return new oo([e||Bt,oC(t)],n||la(),null,i)}var B=class t{static THROW_IF_NOT_FOUND=to;static NULL=new aa;static create(n,e){if(Array.isArray(n))return Dp({name:``},e,n,``);{let r=n.name??``;return Dp({name:r},n.parent,n.providers,r)}}static ɵprov=q({token:t,providedIn:`any`,factory:()=>P(Vp)});static __NG_ELEMENT_ID__=-1};var z=new g(``);var ut=class{static __NG_ELEMENT_ID__=FI;static __NG_ENV_ID__=n=>n};var Sd=class extends ut{_lView;constructor(n){super(),this._lView=n}get destroyed(){return ho(this._lView)}onDestroy(n){let e=this._lView;return zd(e,n),()=>gC(e,n)}};function FI(){return new Sd(te())}var mh=!1;var RC=new g(``);var Wn=(()=>{class t{taskId=0;pendingTasks=new Set;destroyed=!1;pendingTask=new Qe(!1);debugTaskTracker=u(RC,{optional:!0});get hasPendingTasks(){return this.destroyed?!1:this.pendingTask.value}get hasPendingTasksObservable(){return this.destroyed?new ie(e=>{e.next(!1),e.complete()}):this.pendingTask}add(){!this.hasPendingTasks&&!this.destroyed&&this.pendingTask.next(!0);let e=this.taskId++;return this.pendingTasks.add(e),this.debugTaskTracker?.add(e),e}has(e){return this.pendingTasks.has(e)}remove(e){this.pendingTasks.delete(e),this.debugTaskTracker?.remove(e),this.pendingTasks.size===0&&this.hasPendingTasks&&this.pendingTask.next(!1)}ngOnDestroy(){this.pendingTasks.clear(),this.hasPendingTasks&&this.pendingTask.next(!1),this.destroyed=!0,this.pendingTask.unsubscribe()}static ɵprov=q({token:t,providedIn:`root`,factory:()=>new t})}return t})();var Sp=class extends _{__isAsync;destroyRef=void 0;pendingTasks=void 0;constructor(n=!1){super(),this.__isAsync=n,Up()&&(this.destroyRef=u(ut,{optional:!0})??void 0,this.pendingTasks=u(Wn,{optional:!0})??void 0)}emit(n){let e=Z(null);try{super.next(n)}finally{Z(e)}}subscribe(n,e,r){let i=n,o=e||(()=>null),a=r;if(n&&typeof n==`object`){let l=n;i=l.next?.bind(l),o=l.error?.bind(l),a=l.complete?.bind(l)}this.__isAsync&&(o=this.wrapInTimeout(o),i&&(i=this.wrapInTimeout(i)),a&&(a=this.wrapInTimeout(a)));let s=super.subscribe({next:i,error:o,complete:a});return n instanceof ne&&n.add(s),s}wrapInTimeout(n){return e=>{let r=this.pendingTasks?.add();setTimeout(()=>{try{n(e)}finally{r!==void 0&&this.pendingTasks?.remove(r)}})}}};var k=Sp;function Ed(...t){}function fh(t){let n,e;function r(){t=Ed;try{e!==void 0&&typeof cancelAnimationFrame==`function`&&cancelAnimationFrame(e),n!==void 0&&clearTimeout(n)}catch(i){}}return n=setTimeout(()=>{t(),r()}),typeof requestAnimationFrame==`function`&&(e=requestAnimationFrame(()=>{t(),r()})),()=>r()}function OC(t){return queueMicrotask(()=>t()),()=>{t=Ed}}var ph=`isAngularZone`;var js=ph+`_ID`;var PI=0;var T=class t{hasPendingMacrotasks=!1;hasPendingMicrotasks=!1;isStable=!0;onUnstable=new k(!1);onMicrotaskEmpty=new k(!1);onStable=new k(!1);onError=new k(!1);constructor(n){let{enableLongStackTrace:e=!1,shouldCoalesceEventChangeDetection:r=!1,shouldCoalesceRunChangeDetection:i=!1,scheduleInRootZone:o=mh}=n;if(typeof Zone>`u`)throw new D(908,!1);Zone.assertZonePatched();let a=this;a._nesting=0,a._outer=a._inner=Zone.current,Zone.TaskTrackingZoneSpec&&(a._inner=a._inner.fork(new Zone.TaskTrackingZoneSpec)),e&&Zone.longStackTraceZoneSpec&&(a._inner=a._inner.fork(Zone.longStackTraceZoneSpec)),a.shouldCoalesceEventChangeDetection=!i&&r,a.shouldCoalesceRunChangeDetection=i,a.callbackScheduled=!1,a.scheduleInRootZone=o,BI(a)}static isInAngularZone(){return typeof Zone<`u`&&Zone.current.get(ph)===!0}static assertInAngularZone(){if(!t.isInAngularZone())throw new D(909,!1)}static assertNotInAngularZone(){if(t.isInAngularZone())throw new D(909,!1)}run(n,e,r){return this._inner.run(n,e,r)}runTask(n,e,r,i){let o=this._inner,a=o.scheduleEventTask(`NgZoneEvent: `+i,n,LI,Ed,Ed);try{return o.runTask(a,e,r)}finally{o.cancelTask(a)}}runGuarded(n,e,r){return this._inner.runGuarded(n,e,r)}runOutsideAngular(n){return this._outer.run(n)}};var LI={};function hh(t){if(t._nesting==0&&!t.hasPendingMicrotasks&&!t.isStable)try{t._nesting++,t.onMicrotaskEmpty.emit(null)}finally{if(t._nesting--,!t.hasPendingMicrotasks)try{t.runOutsideAngular(()=>t.onStable.emit(null))}finally{t.isStable=!0}}}function VI(t){if(t.isCheckStableRunning||t.callbackScheduled)return;t.callbackScheduled=!0;function n(){fh(()=>{t.callbackScheduled=!1,Ep(t),t.isCheckStableRunning=!0,hh(t),t.isCheckStableRunning=!1})}t.scheduleInRootZone?Zone.root.run(()=>{n()}):t._outer.run(()=>{n()}),Ep(t)}function BI(t){let n=()=>{VI(t)},e=PI++;t._inner=t._inner.fork({name:`angular`,properties:{[ph]:!0,[js]:e,[js+e]:!0},onInvokeTask:(r,i,o,a,s,l)=>{if(jI(l))return r.invokeTask(o,a,s,l);try{return q_(t),r.invokeTask(o,a,s,l)}finally{(t.shouldCoalesceEventChangeDetection&&a.type===`eventTask`||t.shouldCoalesceRunChangeDetection)&&n(),Y_(t)}},onInvoke:(r,i,o,a,s,l,c)=>{try{return q_(t),r.invoke(o,a,s,l,c)}finally{t.shouldCoalesceRunChangeDetection&&!t.callbackScheduled&&!zI(l)&&n(),Y_(t)}},onHasTask:(r,i,o,a)=>{r.hasTask(o,a),i===o&&(a.change==`microTask`?(t._hasPendingMicrotasks=a.microTask,Ep(t),hh(t)):a.change==`macroTask`&&(t.hasPendingMacrotasks=a.macroTask))},onHandleError:(r,i,o,a)=>(r.handleError(o,a),t.runOutsideAngular(()=>t.onError.emit(a)),!1)})}function Ep(t){t._hasPendingMicrotasks||(t.shouldCoalesceEventChangeDetection||t.shouldCoalesceRunChangeDetection)&&t.callbackScheduled===!0?t.hasPendingMicrotasks=!0:t.hasPendingMicrotasks=!1}function q_(t){t._nesting++,t.isStable&&(t.isStable=!1,t.onUnstable.emit(null))}function Y_(t){t._nesting--,hh(t)}var zs=class{hasPendingMicrotasks=!1;hasPendingMacrotasks=!1;isStable=!0;onUnstable=new k;onMicrotaskEmpty=new k;onStable=new k;onError=new k;run(n,e,r){return n.apply(e,r)}runGuarded(n,e,r){return n.apply(e,r)}runOutsideAngular(n){return n()}runTask(n,e,r,i){return n.apply(e,r)}};function jI(t){return FC(t,`__ignore_ng_zone__`)}function zI(t){return FC(t,`__scheduler_tick__`)}function FC(t,n){return!Array.isArray(t)||t.length!==1?!1:t[0]?.data?.[n]===!0}var Qt=class{_console=console;handleError(n){this._console.error(`ERROR`,n)}};function PC(t){return LC(t)?t:new kp(t)}function LC(t){return t instanceof Error||typeof t==`object`&&t!==null&&typeof t.name==`string`&&typeof t.message==`string`}var kp=class extends Error{constructor(n){super(String(n),{cause:n}),this.name=`ErrorBoundaryWrappedError`}};var un=new g(``,{factory:()=>{let t=u(T),n=u(Ue),e;return r=>{t.runOutsideAngular(()=>{n.destroyed&&!e?setTimeout(()=>{throw r}):(e??=n.get(Qt),e.handleError(r))})}}});var VC={provide:Ei,useValue:()=>{u(Qt,{optional:!0})},multi:!0};function L(t,n){let[e,r,i]=Kf(t,n?.equal),o=e;o[rt];return o.set=r,o.update=i,o.asReadonly=Kd.bind(o),o}function Kd(){let t=this[rt];if(t.readonlyFn===void 0){let n=()=>this();n[rt]=t,t.readonlyFn=n}return t.readonlyFn}var Ur=new g(``,{factory:()=>HI});var HI=`ng`;var Zd=new g(``);var bo=new g(``,{providedIn:`platform`,factory:()=>`unknown`});var Js=new g(``);var Ti=new g(``,{factory:()=>u(z).body?.querySelector(`[ngCspNonce]`)?.getAttribute(`ngCspNonce`)||null});var ha=(()=>{class t{view;node;constructor(e,r){this.view=e,this.node=r}static __NG_ELEMENT_ID__=UI}return t})();function UI(){return new ha(te(),gt())}var Hn=class{};var ga=new g(``,{factory:()=>!0});var Qd=new g(``);var Xd=(()=>{class t{static ɵprov=q({token:t,providedIn:`root`,factory:()=>new Mp})}return t})();var Mp=class{dirtyEffectCount=0;queues=new Map;add(n){this.enqueue(n),this.schedule(n)}schedule(n){n.dirty&&this.dirtyEffectCount++}remove(n){let e=n.zone,r=this.queues.get(e);r.has(n)&&(r.delete(n),n.dirty&&this.dirtyEffectCount--)}enqueue(n){let e=n.zone;this.queues.has(e)||this.queues.set(e,new Set);let r=this.queues.get(e);r.has(n)||r.add(n)}flush(){for(;this.dirtyEffectCount>0;){let n=!1;for(let[e,r]of this.queues)e===null?n||=this.flushQueue(r):n||=e.run(()=>this.flushQueue(r));n||(this.dirtyEffectCount=0)}}flushQueue(n){let e=!1;for(let r of n)r.dirty&&(this.dirtyEffectCount--,e=!0,r.run());return e}};var kd=class{[rt];constructor(n){this[rt]=n}destroy(){this[rt].destroy()}};function mn(t,n){let e=n?.injector??u(B),r=n?.manualCleanup!==!0?e.get(ut):null,i,o=e.get(ha,null,{optional:!0}),a=e.get(Hn);return o!==null?(i=jC(o.view,a,t),r instanceof Sd&&r._lView===o.view&&(r=null)):i=WI(t,e.get(Xd),a),i.injector=e,r!==null&&(i.onDestroyFns=[r.onDestroy(()=>i.destroy())]),new kd(i)}var BC=K(b({},Zf),{cleanupFns:void 0,zone:null,onDestroyFns:null,run(){let t=Bs(!1);try{Qf(this)}finally{Bs(t)}},cleanup(){if(!this.cleanupFns?.length)return;let t=Z(null);try{for(;this.cleanupFns.length;)this.cleanupFns.pop()()}finally{this.cleanupFns=[],Z(t)}}});var $I=K(b({},BC),{consumerMarkedDirty(){this.scheduler.schedule(this),this.notifier.notify(12)},destroy(){if(hi(this),this.onDestroyFns!==null)for(let t of this.onDestroyFns)t();this.cleanup(),this.scheduler.remove(this)}});var GI=K(b({},BC),{consumerMarkedDirty(){this.view[ae]|=8192,go(this.view),this.notifier.notify(13)},destroy(){if(hi(this),this.onDestroyFns!==null)for(let t of this.onDestroyFns)t();this.cleanup(),this.view[Lr]?.delete(this)}});function jC(t,n,e){let r=Object.create(GI);return r.view=t,r.zone=typeof Zone<`u`?Zone.current:null,r.notifier=n,r.userFn=e,r.fn=zC(r,e),t[Lr]??=new Set,t[Lr].add(r),r.consumerMarkedDirty(r),r}function WI(t,n,e){let r=Object.create($I);return r.userFn=t,r.fn=zC(r,t),r.scheduler=n,r.notifier=e,r.zone=typeof Zone<`u`?Zone.current:null,r.scheduler.add(r),r.notifier.notify(12),r}function zC(t,n){return()=>{n(e=>(t.cleanupFns??=[]).push(e))}}function Ht(t){return typeof t==`function`&&t[rt]!==void 0}function Jd(t){return Ht(t)&&typeof t.set==`function`}var ba=(()=>{class t{internalPendingTasks=u(Wn);scheduler=u(Hn);errorHandler=u(un);add(){let e=this.internalPendingTasks.add();return()=>{this.internalPendingTasks.has(e)&&(this.scheduler.notify(11),this.internalPendingTasks.remove(e))}}run(e){let r=this.add();try{e().catch(this.errorHandler).finally(r)}catch(i){this.errorHandler(i),r()}}static ɵprov=q({token:t,providedIn:`root`,factory:()=>new t})}return t})();var Du=Symbol(`InputSignalNode#UNSET`);var Mw=K(b({},Zo),{transformFn:void 0,applyValueToInputSignal(t,n){gi(t,n)}});function dl(t){return{toString:t}.toString()}var Le=(function(t){return t[t.TemplateCreateStart=0]=`TemplateCreateStart`,t[t.TemplateCreateEnd=1]=`TemplateCreateEnd`,t[t.TemplateUpdateStart=2]=`TemplateUpdateStart`,t[t.TemplateUpdateEnd=3]=`TemplateUpdateEnd`,t[t.LifecycleHookStart=4]=`LifecycleHookStart`,t[t.LifecycleHookEnd=5]=`LifecycleHookEnd`,t[t.OutputStart=6]=`OutputStart`,t[t.OutputEnd=7]=`OutputEnd`,t[t.BootstrapApplicationStart=8]=`BootstrapApplicationStart`,t[t.BootstrapApplicationEnd=9]=`BootstrapApplicationEnd`,t[t.BootstrapComponentStart=10]=`BootstrapComponentStart`,t[t.BootstrapComponentEnd=11]=`BootstrapComponentEnd`,t[t.ChangeDetectionStart=12]=`ChangeDetectionStart`,t[t.ChangeDetectionEnd=13]=`ChangeDetectionEnd`,t[t.ChangeDetectionSyncStart=14]=`ChangeDetectionSyncStart`,t[t.ChangeDetectionSyncEnd=15]=`ChangeDetectionSyncEnd`,t[t.AfterRenderHooksStart=16]=`AfterRenderHooksStart`,t[t.AfterRenderHooksEnd=17]=`AfterRenderHooksEnd`,t[t.ComponentStart=18]=`ComponentStart`,t[t.ComponentEnd=19]=`ComponentEnd`,t[t.DeferBlockStateStart=20]=`DeferBlockStateStart`,t[t.DeferBlockStateEnd=21]=`DeferBlockStateEnd`,t[t.DynamicComponentStart=22]=`DynamicComponentStart`,t[t.DynamicComponentEnd=23]=`DynamicComponentEnd`,t[t.HostBindingsUpdateStart=24]=`HostBindingsUpdateStart`,t[t.HostBindingsUpdateEnd=25]=`HostBindingsUpdateEnd`,t})(Le||{});var cu=class{previousValue;currentValue;firstChange;constructor(n,e,r){this.previousValue=n,this.currentValue=e,this.firstChange=r}isFirstChange(){return this.firstChange}};function Iw(t,n,e,r){n!==null?n.applyValueToInputSignal(n,r):t[e]=r}var Nw=null;var Se=(()=>{Nw=HC;let t=()=>HC;return t.ngInherit=!0,t})();function nN(){return Nw}function HC(t){return t.type.prototype.ngOnChanges&&(t.setInput=iN),rN}function rN(){let t=Tw(this),n=t?.current;if(n){let e=t.previous;if(e===Si)t.previous=n;else for(let r in n)e[r]=n[r];t.current=null,this.ngOnChanges(n)}}function iN(t,n,e,r,i){let o=this.declaredInputs[r],a=Tw(t)||oN(t,{previous:Si,current:null}),s=a.current||(a.current={}),l=a.previous,c=l[o];s[o]=new cu(c&&c.currentValue,e,l===Si),Iw(t,n,i,e)}var Eh=`__ngSimpleChanges__`;function Tw(t){return Object.hasOwn(t,Eh)&&t[Eh]||null}function oN(t,n){return t[Eh]=n}var UC=[];var We=function(t,n=null,e){for(let r=0;r<UC.length;r++){let i=UC[r];i(t,n,e)}};function aN(t,n,e){let{ngOnChanges:r,ngOnInit:i,ngDoCheck:o}=n.type.prototype;if(r){let a=nN()(n);(e.preOrderHooks??=[]).push(t,a),(e.preOrderCheckHooks??=[]).push(t,a)}i&&(e.preOrderHooks??=[]).push(0-t,i),o&&((e.preOrderHooks??=[]).push(t,o),(e.preOrderCheckHooks??=[]).push(t,o))}function Aw(t,n){for(let e=n.directiveStart,r=n.directiveEnd;e<r;e++){let{ngAfterContentInit:a,ngAfterContentChecked:s,ngAfterViewInit:l,ngAfterViewChecked:c,ngOnDestroy:d}=t.data[e].type.prototype;a&&(t.contentHooks??=[]).push(-e,a),s&&((t.contentHooks??=[]).push(e,s),(t.contentCheckHooks??=[]).push(e,s)),l&&(t.viewHooks??=[]).push(-e,l),c&&((t.viewHooks??=[]).push(e,c),(t.viewCheckHooks??=[]).push(e,c)),d!=null&&(t.destroyHooks??=[]).push(e,d)}}function ou(t,n,e){Rw(t,n,3,e)}function au(t,n,e,r){(t[ae]&3)===e&&Rw(t,n,e,r)}function gh(t,n){let e=t[ae];(e&3)===n&&(e&=16383,e+=1,t[ae]=e)}function Rw(t,n,e,r){let i=r!==void 0?t[uo]&65535:0,o=r??-1,a=n.length-1,s=0;for(let l=i;l<a;l++)if(typeof n[l+1]==`number`){if(s=n[l],r!=null&&s>=r)break}else n[l]<0&&(t[uo]+=65536),(s<o||o==-1)&&(sN(t,e,n,l),t[uo]=(t[uo]&4294901760)+l+2),l++}function $C(t,n){We(Le.LifecycleHookStart,t,n);let e=Z(null);try{n.call(t)}finally{Z(e),We(Le.LifecycleHookEnd,t,n)}}function sN(t,n,e,r){let i=e[r]<0,o=e[r+1],s=t[i?-e[r]:e[r]];i?t[ae]>>14<t[uo]>>16&&(t[ae]&3)===n&&(t[ae]+=16384,$C(s,o)):$C(s,o)}var _a=-1;var vo=class{factory;name;injectImpl;resolving=!1;canSeeViewProviders;multi;componentProviders;index;providerFactory;constructor(n,e,r,i){this.factory=n,this.name=i,this.canSeeViewProviders=e,this.injectImpl=r}};function lN(t){return(t.flags&8)!==0}function cN(t){return(t.flags&16)!==0}function dN(t,n,e){let r=0;for(;r<e.length;){let i=e[r];if(typeof i==`number`){if(i!==0)break;r++;let o=e[r++],a=e[r++],s=e[r++];t.setAttribute(n,a,s,o)}else{let o=i,a=e[++r];uN(o)?t.setProperty(n,o,a):t.setAttribute(n,o,a),r++}}return r}function Ow(t){return t===3||t===4||t===6}function uN(t){return t.charCodeAt(0)===64}function wa(t,n){if(!(n===null||n.length===0))if(t===null||t.length===0)t=n.slice();else{let e=-1;for(let r=0;r<n.length;r++){let i=n[r];typeof i==`number`?e=i:e===0||(e===-1||e===2?GC(t,e,i,null,n[++r]):GC(t,e,i,null,null))}}return t}function GC(t,n,e,r,i){let o=0,a=t.length;if(n===-1)a=-1;else for(;o<t.length;){let s=t[o++];if(typeof s==`number`){if(s===n){a=-1;break}else if(s>n){a=o-1;break}}}for(;o<t.length;){let s=t[o];if(typeof s==`number`)break;if(s===e){i!==null&&(t[o+1]=i);return}o++,i!==null&&o++}a!==-1&&(t.splice(a,0,n),o=a+1),t.splice(o++,0,e),i!==null&&t.splice(o++,0,i)}function Fw(t){return t!==_a}function du(t){return t&32767}function mN(t){return t>>16}function uu(t,n){let e=mN(t),r=n;for(;e>0;)r=r[ki],e--;return r}var kh=!0;function WC(t){let n=kh;return kh=t,n}var Pw=255;var Lw=5;var pN=0;var fr={};function hN(t,n,e){let r;typeof e==`string`?r=e.charCodeAt(0)||0:Object.hasOwn(e,so)&&(r=e[so]),r??=e[so]=pN++;let i=r&Pw,o=1<<i;n.data[t+(i>>Lw)]|=o}function mu(t,n){let e=Vw(t,n);if(e!==-1)return e;let r=n[ee];r.firstCreatePass&&(t.injectorIndex=n.length,bh(r.data,t),bh(n,null),bh(r.blueprint,null));let i=cg(t,n),o=t.injectorIndex;if(Fw(i)){let a=du(i),s=uu(i,n),l=s[ee].data;for(let c=0;c<8;c++)n[o+c]=s[a+c]|l[a+c]}return n[o+8]=i,o}function bh(t,n){t.push(0,0,0,0,0,0,0,0,n)}function Vw(t,n){return t.injectorIndex===-1||t.parent&&t.parent.injectorIndex===t.injectorIndex||n[t.injectorIndex+8]===null?-1:t.injectorIndex}function cg(t,n){if(t.parent&&t.parent.injectorIndex!==-1)return t.parent.injectorIndex;let e=0,r=null,i=n;for(;i!==null;){if(r=Uw(i),r===null)return _a;if(e++,i=i[ki],r.injectorIndex!==-1)return r.injectorIndex|e<<16}return _a}function Mh(t,n,e){hN(t,n,e)}function gN(t,n){if(n===`class`)return t.classes;if(n===`style`)return t.styles;let e=t.attrs;if(e){let r=e.length,i=0;for(;i<r;){let o=e[i];if(Ow(o))break;if(o===0)i=i+2;else if(typeof o==`number`)for(i++;i<r&&typeof e[i]==`string`;)i++;else{if(o===n)return e[i+1];i=i+2}}}return null}function Bw(t,n,e){if(e&8||t!==void 0)return t;Ad(n,`NodeInjector`)}function jw(t,n,e,r){if(e&8&&r===void 0&&(r=null),(e&3)===0){let i=t[jr],o=cn(void 0);try{return i?i.get(n,r,e&8):Pp(n,r,e&8)}finally{cn(o)}}return Bw(r,n,e)}function zw(t,n,e,r=0,i){if(t!==null){if(n[ae]&2048&&!(r&2)){let a=_N(t,n,e,r,fr);if(a!==fr)return a}let o=Hw(t,n,e,r,fr);if(o!==fr)return o}return jw(n,e,r,i)}function Hw(t,n,e,r,i){let o=yN(e);if(typeof o==`function`){if(!lh(n,t,r))return r&1?Bw(i,e,r):jw(n,e,r,i);try{let a;if(a=o(r),a==null&&!(r&8))Ad(e);else return a}finally{ch()}}else if(typeof o==`number`){let a=null,s=Vw(t,n),l=_a,c=r&1?n[zt][Tt]:null;for((s===-1||r&4)&&(l=s===-1?cg(t,n):n[s+8],l===_a||!YC(r,!1)?s=-1:(a=n[ee],s=du(l),n=uu(l,n)));s!==-1;){let d=n[ee];if(qC(o,s,d.data)){let m=bN(s,n,e,a,r,c);if(m!==fr)return m}l=n[s+8],l!==_a&&YC(r,n[ee].data[s+8]===c)&&qC(o,s,n)?(a=d,s=du(l),n=uu(l,n)):s=-1}}return i}function bN(t,n,e,r,i,o){let a=n[ee],s=a.data[t+8],d=su(s,a,e,r==null?dr(s)&&kh:r!=a&&(s.type&3)!==0,i&1&&o===s);return d!==null?nl(n,a,d,s,i):fr}function su(t,n,e,r,i){let o=t.providerIndexes,a=n.data,s=o&1048575,l=t.directiveStart,c=t.directiveEnd,d=o>>20,m=r?s:s+d,p=i?s+d:c;for(let f=m;f<p;f++){let h=a[f];if(f<l&&e===h||f>=l&&h.type===e)return f}if(i){let f=a[l];if(f&&ur(f)&&f.type===e)return l}return null}function nl(t,n,e,r,i){let o=t[e],a=n.data;if(o instanceof vo){let s=o;if(s.resolving)throw Fp(``);let l=WC(s.canSeeViewProviders);s.resolving=!0;a[e].type||a[e];let m=s.injectImpl?cn(s.injectImpl):null;lh(t,r,0);try{o=t[e]=s.factory(void 0,i,a,t,r),n.firstCreatePass&&e>=r.directiveStart&&aN(e,a[e],n)}finally{m!==null&&cn(m),WC(l),s.resolving=!1,ch()}}return o}function yN(t){if(typeof t==`string`)return t.charCodeAt(0)||0;let n=Object.hasOwn(t,so)?t[so]:void 0;return typeof n==`number`?n>=0?n&Pw:vN:n}function qC(t,n,e){let r=1<<t;return!!(e[n+(t>>Lw)]&r)}function YC(t,n){return!(t&2)&&!(t&1&&n)}var $r=class{_tNode;_lView;constructor(n,e){this._tNode=n,this._lView=e}get(n,e,r){return zw(this._tNode,this._lView,n,no(r),e)}};function vN(){return new $r(gt(),te())}function Ae(t){return dl(()=>{let n=t.prototype.constructor,e=n[Vs]||Ih(n),r=Object.prototype,i=Object.getPrototypeOf(t.prototype).constructor;for(;i&&i!==r;){let o=i[Vs]||Ih(i);if(o&&o!==e)return o;i=Object.getPrototypeOf(i)}return o=>new o})}function Ih(t){return Np(t)?()=>{let n=Ih(Nt(t));return n&&n()}:ro(t)}function _N(t,n,e,r,i){let o=t,a=n;for(;o!==null&&a!==null&&a[ae]&2048&&!fa(a);){let s=Hw(o,a,e,r|2,fr);if(s!==fr)return s;r&=-5;let l=o.parent;if(!l){let c=a[Gp];if(c){let d=c.get(e,fr,r);if(d!==fr)return d}l=Uw(a),a=a[ki]}o=l}return i}function Uw(t){let n=t[ee],e=n.type;return e===2?n.declTNode:e===1?t[Tt]:null}function ul(t){return gN(gt(),t)}function S(t){return{token:t.token,providedIn:t.autoProvided===!1?null:`root`,factory:t.factory,value:void 0}}function CN(){return Ea(gt(),te())}function Ea(t,n){return new N(nn(t,n))}var N=(()=>{class t{nativeElement;constructor(e){this.nativeElement=e}static __NG_ELEMENT_ID__=CN}return t})();function Gw(t){return t instanceof N?t.nativeElement:t}function wN(){return this._results[Symbol.iterator]()}var _o=class{_emitDistinctChangesOnly;dirty=!0;_onDirty=void 0;_results=[];_changesDetected=!1;_changes=void 0;length=0;first=void 0;last=void 0;get changes(){return this._changes??=new _}constructor(n=!1){this._emitDistinctChangesOnly=n}get(n){return this._results[n]}map(n){return this._results.map(n)}filter(n){return this._results.filter(n)}find(n){return this._results.find(n)}reduce(n,e){return this._results.reduce(n,e)}forEach(n){this._results.forEach(n)}some(n){return this._results.some(n)}toArray(){return this._results.slice()}toString(){return this._results.toString()}reset(n,e){this.dirty=!1;let r=nC(n);(this._changesDetected=!tC(this._results,r,e))&&(this._results=r,this.length=r.length,this.last=r[this.length-1],this.first=r[0])}notifyOnChanges(){this._changes!==void 0&&(this._changesDetected||!this._emitDistinctChangesOnly)&&this._changes.next(this)}onDirty(n){this._onDirty=n}setDirty(){this.dirty=!0,this._onDirty?.()}destroy(){this._changes!==void 0&&(this._changes.complete(),this._changes.unsubscribe())}[Symbol.iterator]=wN};function Ww(t){return(t.flags&128)===128}var dg=(function(t){return t[t.OnPush=0]=`OnPush`,t[t.Eager=1]=`Eager`,t[t.Default=1]=`Default`,t})(dg||{});var qw=new Map;var xN=0;function DN(){return xN++}function SN(t){qw.set(t[Ys],t)}function Nh(t){qw.delete(t[Ys])}var KC=`__ngContext__`;function xa(t,n){zr(n)?(t[KC]=n[Ys],SN(n)):t[KC]=n}function Yw(t){return Zw(t[da])}function Kw(t){return Zw(t[Sn])}function Zw(t){for(;t!==null&&!En(t);)t=t[Sn];return t}var Th;function ug(t){Th=t}function Qw(){if(Th!==void 0)return Th;if(typeof document<`u`)return document;throw new D(210,!1)}var Xw=`r`;var Jw=`di`;var mg=new g(``);var ex=!1;var tx=new g(``,{factory:()=>ex});var Su=new g(``);var ZC=new WeakMap;function EN(t,n){if(t==null||typeof t!=`object`)return;let e=ZC.get(t);e||(e=new WeakSet,ZC.set(t,e)),e.add(n)}function Eu(t){return(t.flags&32)===32}var IN=()=>null;function nx(t,n,e=!1){return IN(t,n,e)}function rx(t,n){let e=t.contentQueries;if(e!==null){let r=Z(null);try{for(let i=0;i<e.length;i+=2){let o=e[i],a=e[i+1];if(a!==-1){let s=t.data[a];Qs(o),s.contentQueries(2,n[a],a)}}}finally{Z(r)}}}function Ah(t,n,e){Qs(0);let r=Z(null);try{n(t,e)}finally{Z(r)}}function fg(t,n,e){if(qp(n)){let r=Z(null);try{let i=n.directiveStart,o=n.directiveEnd;for(let a=i;a<o;a++){let s=t.data[a];if(s.contentQueries){let l=e[a];s.contentQueries(1,l,a)}}}finally{Z(r)}}}var Kn=(function(t){return t[t.Emulated=0]=`Emulated`,t[t.None=2]=`None`,t[t.ShadowDom=3]=`ShadowDom`,t[t.ExperimentalIsolatedShadowDom=4]=`ExperimentalIsolatedShadowDom`,t})(Kn||{});var Gr=class{changingThisBreaksApplicationSecurity;constructor(n){this.changingThisBreaksApplicationSecurity=n}toString(){return`SafeValue must use [property]=binding: ${this.changingThisBreaksApplicationSecurity}`}};var Rh=class extends Gr{getTypeName(){return`HTML`}};var Oh=class extends Gr{getTypeName(){return`Style`}};var Fh=class extends Gr{getTypeName(){return`Script`}};var Ph=class extends Gr{getTypeName(){return`URL`}};var Lh=class extends Gr{getTypeName(){return`ResourceURL`}};function rn(t){return t instanceof Gr?t.changingThisBreaksApplicationSecurity:t}function Wr(t,n){let e=ix(t);if(e!=null&&e!==n){if(e===`ResourceURL`&&n===`URL`)return!0;throw new Error(`Required a safe ${n}, got a ${e} (see ${Ip})`)}return e===n}function ix(t){return t instanceof Gr&&t.getTypeName()||null}function pg(t){return new Rh(t)}function hg(t){return new Oh(t)}function gg(t){return new Fh(t)}function bg(t){return new Ph(t)}function yg(t){return new Lh(t)}var NN={"http://www.w3.org/2000/svg":ao,"http://www.w3.org/1998/Math/MathML":Ld};var eu;function TN(){if(eu===void 0&&(eu=null,jt.trustedTypes))try{eu=jt.trustedTypes.createPolicy(`angular`,{createHTML:t=>t,createScript:t=>t,createScriptURL:t=>t})}catch(t){}return eu}function ku(t){return TN()?.createHTML(t)||t}var tu;function AN(){if(tu===void 0&&(tu=null,jt.trustedTypes))try{tu=jt.trustedTypes.createPolicy(`angular#unsafe-bypass`,{createHTML:t=>t,createScript:t=>t,createScriptURL:t=>t})}catch(t){}return tu}function QC(t){return AN()?.createScriptURL(t)||t}function RN(t){let n=new Bh(t);return ON()?new Vh(n):n}var Vh=class{inertDocumentHelper;constructor(n){this.inertDocumentHelper=n}getInertBodyElement(n){n=`<body><remove></remove>`+n;try{let e=new window.DOMParser().parseFromString(ku(n),`text/html`).body;return e===null?this.inertDocumentHelper.getInertBodyElement(n):(e.firstChild?.remove(),e)}catch(e){return null}}};var Bh=class{defaultDoc;inertDocument;constructor(n){this.defaultDoc=n,this.inertDocument=this.defaultDoc.implementation.createHTMLDocument(`sanitization-inert`)}getInertBodyElement(n){let e=this.inertDocument.createElement(`template`);return e.innerHTML=ku(n),e}};function ON(){try{return!!new window.DOMParser().parseFromString(ku(``),`text/html`)}catch(t){return!1}}var FN=/^(?!javascript:)(?:[a-z0-9+.-]+:|[^&:\/?#]*(?:[\/?#]|$))/i;function ml(t){return t=String(t),t.match(FN)?t:`unsafe:`+t}function qr(t){let n=Object.create(null);for(let e of t.split(`,`))n[e]=!0;return n}function fl(...t){let n=Object.create(null);for(let e of t)for(let r in e)Object.hasOwn(e,r)&&(n[r]=!0);return n}var ox=qr(`area,br,col,hr,img,wbr`);var ax=qr(`colgroup,dd,dt,li,p,tbody,td,tfoot,th,thead,tr`);var sx=qr(`rp,rt`);var PN=fl(sx,ax);var XC=fl(ox,fl(ax,qr(`address,article,aside,blockquote,caption,center,del,details,dialog,dir,div,dl,figure,figcaption,footer,h1,h2,h3,h4,h5,h6,header,hgroup,hr,ins,main,map,menu,nav,ol,pre,section,summary,table,ul`)),fl(sx,qr(`a,abbr,acronym,audio,b,bdi,bdo,big,br,cite,code,del,dfn,em,font,i,img,ins,kbd,label,map,mark,picture,q,ruby,rp,rt,s,samp,small,source,span,strike,strong,sub,sup,time,track,tt,u,var,video`)),PN);var lx=qr(`background,cite,href,itemtype,longdesc,poster,src,xlink:href`);var zN=fl(lx,qr(`abbr,accesskey,align,alt,autoplay,axis,bgcolor,border,cellpadding,cellspacing,class,clear,color,cols,colspan,compact,controls,coords,datetime,default,dir,download,face,headers,height,hidden,hreflang,hspace,ismap,itemscope,itemprop,kind,label,lang,language,loop,media,muted,nohref,nowrap,open,preload,rel,rev,role,rows,rowspan,rules,scope,scrolling,shape,size,sizes,span,srclang,srcset,start,summary,tabindex,target,title,translate,type,usemap,valign,value,vspace,width`),qr(`aria-activedescendant,aria-atomic,aria-autocomplete,aria-busy,aria-checked,aria-colcount,aria-colindex,aria-colspan,aria-controls,aria-current,aria-describedby,aria-details,aria-disabled,aria-dropeffect,aria-errormessage,aria-expanded,aria-flowto,aria-grabbed,aria-haspopup,aria-hidden,aria-invalid,aria-keyshortcuts,aria-label,aria-labelledby,aria-level,aria-live,aria-modal,aria-multiline,aria-multiselectable,aria-orientation,aria-owns,aria-placeholder,aria-posinset,aria-pressed,aria-readonly,aria-relevant,aria-required,aria-roledescription,aria-rowcount,aria-rowindex,aria-rowspan,aria-selected,aria-setsize,aria-sort,aria-valuemax,aria-valuemin,aria-valuenow,aria-valuetext`));var HN=qr(`script,style,template`);var jh=class{sanitizedSomething=!1;buf=[];sanitizeChildren(n){let e=n.firstChild,r=!0,i=[];for(;e;){if(e.nodeType===Node.ELEMENT_NODE?r=this.startElement(e):e.nodeType===Node.TEXT_NODE?this.chars(e.nodeValue):this.sanitizedSomething=!0,r&&e.firstChild){i.push(e),e=GN(e);continue}for(;e;){e.nodeType===Node.ELEMENT_NODE&&this.endElement(e);let o=$N(e);if(o){e=o;break}e=i.pop()}}return this.buf.join(``)}startElement(n){let e=JC(n).toLowerCase();if(!Object.hasOwn(XC,e))return this.sanitizedSomething=!0,!Object.hasOwn(HN,e);this.buf.push(`<`),this.buf.push(e);let r=n.attributes;for(let i=0;i<r.length;i++){let o=r.item(i),a=o.name,s=a.toLowerCase();if(!Object.hasOwn(zN,s)){this.sanitizedSomething=!0;continue}let l=o.value;lx[s]&&(l=ml(l)),this.buf.push(` `,a,`="`,ew(l),`"`)}return this.buf.push(`>`),!0}endElement(n){let e=JC(n).toLowerCase();Object.hasOwn(XC,e)&&!Object.hasOwn(ox,e)&&(this.buf.push(`</`),this.buf.push(e),this.buf.push(`>`))}chars(n){this.buf.push(ew(n))}};function UN(t,n){return(t.compareDocumentPosition(n)&Node.DOCUMENT_POSITION_CONTAINED_BY)!==Node.DOCUMENT_POSITION_CONTAINED_BY}function $N(t){let n=t.nextSibling;if(n&&t!==n.previousSibling)throw cx(n);return n}function GN(t){let n=t.firstChild;if(n&&UN(t,n))throw cx(n);return n}function JC(t){let n=t.nodeName;return typeof n==`string`?n:`FORM`}function cx(t){return new Error(`Failed to sanitize html because the element is clobbered: ${t.outerHTML}`)}var WN=/[\uD800-\uDBFF][\uDC00-\uDFFF]/g;var qN=/([^\#-~ |!])/g;function ew(t){return t.replace(/&/g,`&amp;`).replace(WN,function(n){let e=n.charCodeAt(0),r=n.charCodeAt(1);return`&#`+((e-55296)*1024+(r-56320)+65536)+`;`}).replace(qN,function(n){return`&#`+n.charCodeAt(0)+`;`}).replace(/</g,`&lt;`).replace(/>/g,`&gt;`)}var nu;function vg(t,n){let e=null;try{nu=nu||RN(t);let r=n?String(n):``;e=nu.getInertBodyElement(r);let i=5,o=r;do{if(i===0)throw new Error(`Failed to sanitize html because the input is unstable`);i--,r=o,o=e.innerHTML,e=nu.getInertBodyElement(r)}while(r!==o);return ku(new jh().sanitizeChildren(tw(e)||e))}finally{if(e){let r=tw(e)||e;for(;r.firstChild;)r.firstChild.remove()}}}function tw(t){return`content`in t&&YN(t)?t.content:null}function YN(t){return t.nodeType===Node.ELEMENT_NODE&&t.nodeName===`TEMPLATE`}var KN=/^>|^->|<!--|-->|--!>|<!-$/g;var ZN=/(<|>)/g;var QN=`​$1​`;function XN(t){return t.replace(KN,n=>n.replace(ZN,QN))}function JN(t,n){return t.createText(n)}function eT(t,n,e){t.setValue(n,e)}function tT(t,n){return t.createComment(XN(n))}function dx(t,n,e){return t.createElement(n,e)}function yo(t,n,e,r,i){t.insertBefore(n,e,r,i)}function ux(t,n,e){t.appendChild(n,e)}function nw(t,n,e,r,i){r!==null?yo(t,n,e,r,i):ux(t,n,e)}function mx(t,n,e,r){t.removeChild(null,n,e,r)}function nT(t,n,e){t.setAttribute(n,`style`,e)}function rT(t,n,e){e===``?t.removeAttribute(n,`class`):t.setAttribute(n,`class`,e)}function fx(t,n,e){let{mergedAttrs:r,classes:i,styles:o}=e;r!==null&&dN(t,n,r),i!==null&&rT(t,n,i),o!==null&&nT(t,n,o)}function iT(t,n=!0){if(t[0]!=`:`)return[null,t];let e=t.indexOf(`:`,1);if(e===-1){if(n)throw new Error(`Unsupported format "${t}" expecting ":namespace:name"`);return[null,t]}return[t.slice(1,e),t.slice(e+1)]}function px(t){let n=gx();return n?n.sanitize(Te.URL,t)||``:Wr(t,`URL`)?rn(t):ml(lo(t))}function hx(t){let n=gx();if(n)return QC(n.sanitize(Te.RESOURCE_URL,t)||``);if(Wr(t,`ResourceURL`))return QC(rn(t));throw new D(-904,!1)}function oT(t,n){switch(aT(t,n)){case Te.RESOURCE_URL:return hx;case Te.URL:return px;default:return null}}function _g(t,n,e){return oT(n,e)?.(t)??t}function gx(){let t=te();return t&&t[$n].sanitizer}function aT(t,n){let[e,r]=sT(t);return uC(r,n,e)}function sT(t){t=t.toLowerCase();let n=iT(t,!1);if(n[0])return n;let r=Gn()===-1?null:Ni(),i=r?.namespace;if(t===`#host`&&r?.type===2){let o=nn(r,te());if(o.tagName&&(t=o.tagName.toLowerCase()),i==null){let a=o.namespaceURI;i=a&&NN[a]}}return[i,t]}function lT(t){return t instanceof Function?t():t}function cT(t,n,e){let r=t.length;for(;;){let i=t.indexOf(n,e);if(i===-1)return i;if(i===0||t.charCodeAt(i-1)<=32){let o=n.length;if(i+o===r||t.charCodeAt(i+o)<=32)return i}e=i+1}}var bx=`ng-template`;function dT(t,n,e,r){let i=0;if(r){for(;i<n.length&&typeof n[i]==`string`;i+=2)if(n[i]===`class`&&cT(n[i+1].toLowerCase(),e,0)!==-1)return!0}else if(Cg(t))return!1;if(i=n.indexOf(1,i),i>-1){let o;for(;++i<n.length&&typeof(o=n[i])==`string`;)if(o.toLowerCase()===e)return!0}return!1}function Cg(t){return t.type===4&&t.value!==bx}function uT(t,n,e){return n===(t.type===4&&!e?bx:t.value)}function mT(t,n,e){let r=4,i=t.attrs,o=i!==null?hT(i):0,a=!1;for(let s=0;s<n.length;s++){let l=n[s];if(typeof l==`number`){if(!a&&!qn(r)&&!qn(l))return!1;if(a&&qn(l))continue;a=!1,r=l|r&1;continue}if(!a)if(r&4){if(r=2|r&1,l!==``&&!uT(t,l,e)||l===``&&n.length===1){if(qn(r))return!1;a=!0}}else if(r&8){if(i===null||!dT(t,i,l,e)){if(qn(r))return!1;a=!0}}else{let c=n[++s],d=fT(l,i,Cg(t),e);if(d===-1){if(qn(r))return!1;a=!0;continue}if(c!==``){let m;if(d>o?m=``:m=i[d+1].toLowerCase(),r&2&&c!==m){if(qn(r))return!1;a=!0}}}}return qn(r)||a}function qn(t){return(t&1)===0}function fT(t,n,e,r){if(n===null)return-1;let i=0;if(r||!e){let o=!1;for(;i<n.length;){let a=n[i];if(a===t)return i;if(a===3||a===6)o=!0;else if(a===1||a===2){let s=n[++i];for(;typeof s==`string`;)s=n[++i];continue}else{if(a===4)break;if(a===0){i+=4;continue}}i+=o?1:2}return-1}else return gT(n,t)}function yx(t,n,e=!1){for(let r=0;r<n.length;r++)if(mT(t,n[r],e))return!0;return!1}function pT(t){let n=t.attrs;if(n!=null){let e=n.indexOf(5);if((e&1)===0)return n[e+1]}return null}function hT(t){for(let n=0;n<t.length;n++){let e=t[n];if(Ow(e))return n}return t.length}function gT(t,n){let e=t.indexOf(4);if(e>-1)for(e++;e<t.length;){let r=t[e];if(typeof r==`number`)return-1;if(r===n)return e;e++}return-1}function bT(t,n){e:for(let e=0;e<n.length;e++){let r=n[e];if(t.length===r.length){for(let i=0;i<t.length;i++)if(t[i]!==r[i])continue e;return!0}}return!1}function rw(t,n){return t?`:not(`+n.trim()+`)`:n}function yT(t){let n=t[0],e=1,r=2,i=``,o=!1;for(;e<t.length;){let a=t[e];if(typeof a==`string`)if(r&2){let s=t[++e];i+=`[`+a+(s.length>0?`="`+s+`"`:``)+`]`}else r&8?i+=`.`+a:r&4&&(i+=` `+a);else i!==``&&!qn(a)&&(n+=rw(o,i),i=``),r=a,o=o||!qn(r);e++}return i!==``&&(n+=rw(o,i)),n}function vT(t){return t.map(yT).join(`,`)}function _T(t){let n=[],e=[],r=1,i=2;for(;r<t.length;){let o=t[r];if(typeof o==`string`)i===2?o!==``&&n.push(o,t[++r]):i===8&&e.push(o);else{if(!qn(i))break;i=o}r++}return e.length&&n.push(1,...e),n}var Ut={};var pr=(function(t){return t[t.Important=1]=`Important`,t[t.DashCase=2]=`DashCase`,t})(pr||{});var CT;function wg(t,n){return CT(t,n)}var xg=new Set;typeof document<`u`&&document?.documentElement?.getAnimations;var zh=new WeakMap;function vx(t){return t?t[ki]??t:null}var ya=new WeakSet;function wT(t,n,e){let r=zh.get(t);if(!r||r.length===0)return;let i=n.parentNode,o=n.previousSibling,a=vx(e);for(let s=r.length-1;s>=0;s--){let{el:l,declarationView:c}=r[s],d=l.parentNode;l===n?(r.splice(s,1),ya.add(l),l.dispatchEvent(new CustomEvent(`animationend`,{detail:{cancel:!0}}))):o&&l===o?(r.splice(s,1),l.dispatchEvent(new CustomEvent(`animationend`,{detail:{cancel:!0}})),l.parentNode?.removeChild(l)):d&&i&&d!==i&&(a===null||c===null||a===c)&&(r.splice(s,1),l.dispatchEvent(new CustomEvent(`animationend`,{detail:{cancel:!0}})),l.parentNode?.removeChild(l))}}function xT(t,n,e){let r=vx(e),i=zh.get(t);i?i.some(o=>o.el===n)||i.push({el:n,declarationView:r}):zh.set(t,[{el:n,declarationView:r}])}var Mu=(function(t){return t[t.CHANGE_DETECTION=0]=`CHANGE_DETECTION`,t[t.AFTER_NEXT_RENDER=1]=`AFTER_NEXT_RENDER`,t})(Mu||{});var In=new g(``);var iw=new Set;function Nn(t){iw.has(t)||(iw.add(t),performance?.mark?.(`mark_feature_usage`,{detail:{feature:t}}))}var Iu=(()=>{class t{impl=null;execute(){this.impl?.execute()}static ɵprov=q({token:t,providedIn:`root`,factory:()=>new t})}return t})();var Dg=[0,1,2,3];var Sg=(()=>{class t{ngZone=u(T);scheduler=u(Hn);errorHandler=u(Qt,{optional:!0});sequences=new Set;deferredRegistrations=new Set;executing=!1;constructor(){u(In,{optional:!0})}execute(){let e=this.sequences.size>0;e&&We(Le.AfterRenderHooksStart),this.executing=!0;for(let r of Dg)for(let i of this.sequences)if(!(i.erroredOrDestroyed||!i.hooks[r]))try{i.pipelinedValue=this.ngZone.runOutsideAngular(()=>this.maybeTrace(()=>{let o=i.hooks[r];return o(i.pipelinedValue)},i.snapshot))}catch(o){i.erroredOrDestroyed=!0,this.errorHandler?.handleError(o)}this.executing=!1;for(let r of this.sequences)r.afterRun(),r.once&&(this.sequences.delete(r),r.destroy());for(let r of this.deferredRegistrations)this.sequences.add(r);this.deferredRegistrations.size>0&&this.scheduler.notify(7),this.deferredRegistrations.clear(),e&&We(Le.AfterRenderHooksEnd)}register(e){let{view:r}=e;r!==void 0?((r[mo]??=[]).push(e),go(r),r[ae]|=8192):this.addSequence(e)}addSequence(e){this.executing?this.deferredRegistrations.add(e):this.sequences.add(e),this.scheduler.notify(7)}unregister(e){this.executing&&this.sequences.has(e)?(e.erroredOrDestroyed=!0,e.pipelinedValue=void 0,e.once=!0):(this.sequences.delete(e),this.deferredRegistrations.delete(e))}maybeTrace(e,r){return r?r.run(Mu.AFTER_NEXT_RENDER,e):e()}static ɵprov=q({token:t,providedIn:`root`,factory:()=>new t})}return t})();var rl=class{impl;hooks;view;once;snapshot;erroredOrDestroyed=!1;pipelinedValue=void 0;unregisterOnDestroy;constructor(n,e,r,i,o,a=null){this.impl=n,this.hooks=e,this.view=r,this.once=i,this.snapshot=a,this.unregisterOnDestroy=o?.onDestroy(()=>this.destroy())}afterRun(){this.erroredOrDestroyed=!1,this.pipelinedValue=void 0,this.snapshot?.dispose(),this.snapshot=null}destroy(){this.impl.unregister(this),this.unregisterOnDestroy?.();let n=this.view?.[mo];n&&(this.view[mo]=n.filter(e=>e!==this))}};function Ge(t,n){let e=n?.injector??u(B);return Nn(`NgAfterNextRender`),ST(t,e,n,!0)}function DT(t){return t instanceof Function?[void 0,void 0,t,void 0]:[t.earlyRead,t.write,t.mixedReadWrite,t.read]}function ST(t,n,e,r){let i=n.get(Iu);i.impl??=n.get(Sg);let o=n.get(In,null,{optional:!0}),a=e?.manualCleanup!==!0?n.get(ut):null,s=n.get(ha,null,{optional:!0}),l=new rl(i.impl,DT(t),s?.view,r,a,o?.snapshot(null));return i.impl.register(l),l}var Hh=null;var _x=null;function ow(t,n,e,r){Hh?.maybeQueueEnterAnimation(t,n,e,r)}function aw(t,n,e,r){Hh===null?r(!1):Hh.runLeaveAnimationsWithCallback(t,n,e,r)}function ET(t){_x?.initViewDetachAnimations(t)}function kT(t){_x?.clearViewDetachAnimations(t)}function va(t,n,e,r,i,o,a,s){if(i!=null){let l,c=!1;En(i)?l=i:zr(i)&&(c=!0,i=i[Un]);let d=At(i);t===0&&r!==null?(ow(s,r,o,e),a==null?ux(n,r,d):yo(n,r,d,a||null,!0)):t===1&&r!==null?(yo(n,r,d,a||null,!0),wT(o,d,s),ya.has(d)||ow(s,r,o,e)):t===2?(s?.[cC]?.leave?.has(o.index)&&xT(o,d,s),ya.delete(d),aw(s,o,e,m=>{if(ya.has(d)){ya.delete(d);return}mx(n,d,c,m)})):t===3&&(ya.delete(d),aw(s,o,e,()=>{n.destroyNode(d)})),l!=null&&VT(n,t,e,l,o,r,a)}}function MT(t,n){Cx(t,n),n[Un]=null,n[Tt]=null}function IT(t,n,e,r,i,o){r[Un]=i,r[Tt]=n,Tu(t,r,e,1,i,o)}function Cx(t,n){n[$n].changeDetectionScheduler?.notify(9),Tu(t,n,n[$e],2,null,null)}function NT(t){let n=t[da];if(!n)return yh(t[ee],t);for(;n;){let e=null;if(zr(n))e=n[da];else{let r=n[st];r&&(e=r)}if(!e){for(;n&&!n[Sn]&&n!==t;)zr(n)&&yh(n[ee],n),n=n[dt];n===null&&(n=t),zr(n)&&yh(n[ee],n),e=n&&n[Sn]}n=e}}function Eg(t,n){let e=t[po],r=e.indexOf(n);e.splice(r,1)}function Nu(t,n){if(ho(n))return;let e=n[$e];e.destroyNode&&Tu(t,n,e,3,null,null),NT(n)}function yh(t,n){if(ho(n))return;let e=Z(null);try{n[ae]&=-129,n[ae]|=256,n[dn]&&hi(n[dn]),AT(t,n),TT(t,n),n[ee].type===1&&n[$e].destroy();let r=n[Mi];if(r!==null&&En(n[dt])){r!==n[dt]&&Eg(r,n);let i=n[cr];i!==null&&i.detachView(t)}Nh(n)}finally{Z(e)}}function TT(t,n){let e=t.cleanup,r=n[ca];if(e!==null)for(let a=0;a<e.length-1;a+=2)if(typeof e[a]==`string`){let s=e[a+3];s>=0?r[s]():r[-s].unsubscribe(),a+=2}else{let s=r[e[a+1]];e[a].call(s)}r!==null&&(n[ca]=null);let i=n[Pr];if(i!==null){n[Pr]=null;for(let a=0;a<i.length;a++){let s=i[a];s()}}let o=n[Lr];if(o!==null){n[Lr]=null;for(let a of o)a.destroy()}}function AT(t,n){let e;if(t!=null&&(e=t.destroyHooks)!=null)for(let r=0;r<e.length;r+=2){let i=n[e[r]];if(!(i instanceof vo)){let o=e[r+1];if(Array.isArray(o))for(let a=0;a<o.length;a+=2){let s=i[o[a]],l=o[a+1];We(Le.LifecycleHookStart,s,l);try{l.call(s)}finally{We(Le.LifecycleHookEnd,s,l)}}else{We(Le.LifecycleHookStart,i,o);try{o.call(i)}finally{We(Le.LifecycleHookEnd,i,o)}}}}}function wx(t,n,e){if(n===null)throw new D(510,!1);return RT(t,n.parent,e)}function RT(t,n,e){let r=n;for(;r!==null&&r.type&168;)n=r,r=n.parent;if(r===null)return e[Un];if(dr(r)){let{encapsulation:i}=t.data[r.directiveStart+r.componentOffset];if(i===Kn.None||i===Kn.Emulated)return null}return nn(r,e)}function xx(t,n,e){return FT(t,n,e)}function OT(t,n,e){return t.type&40?nn(t,e):null}var FT=OT;function kg(t,n,e,r){let i=wx(t,r,n),o=n[$e],s=xx(r.parent||n[Tt],r,n);if(i!=null)if(Array.isArray(e))for(let l=0;l<e.length;l++)nw(o,i,e[l],s,!1);else nw(o,i,e,s,!1)}function el(t,n){if(n!==null){let e=n.type;if(e&3)return nn(n,t);if(e&4)return Uh(-1,t[n.index]);if(e&8){let r=n.child;if(r!==null)return el(t,r);{let i=t[n.index];return En(i)?Uh(-1,i):At(i)}}else{if(e&128)return el(t,n.next);if(e&32)return wg(n,t)()||At(t[n.index]);{let r=Dx(t,n);if(r!==null){if(Array.isArray(r))return r[0];return el(Vr(t[zt]),r)}else return el(t,n.next)}}}return null}function Dx(t,n){if(n!==null){let r=t[zt][Tt],i=n.projection;return r.projection[i]}return null}function Uh(t,n){let e=st+t+1;if(e<n.length){let r=n[e],i=r[ee].firstChild;if(i!==null)return el(r,i)}return n[fo]}function Mg(t,n,e,r,i,o,a){for(;e!=null;){let s=r[jr];if(e.type===128){e=e.next;continue}let l=r[e.index],c=e.type;if(a&&n===0&&(l&&xa(At(l),r),e.flags|=2),!Eu(e))if(c&8)Mg(t,n,e.child,r,i,o,!1),va(n,t,s,i,l,e,o,r);else if(c&32){let d=wg(e,r),m;for(;m=d();)va(n,t,s,i,m,e,o,r);va(n,t,s,i,l,e,o,r)}else c&16?Sx(t,n,r,e,i,o):va(n,t,s,i,l,e,o,r);e=a?e.projectionNext:e.next}}function Tu(t,n,e,r,i,o){t.type===3?PT(e,r,n,i,o):Mg(e,r,t.firstChild,n,i,o,!1)}function PT(t,n,e,r,i){let a=e[ee].firstChild,s=a.next,l=At(e[a.index]),c=At(e[s.index]),d=s.index+1,m=e[d];if(n===1||n===0)r!==null&&(m&&m.hasChildNodes()?yo(t,r,m,i,!0):(yo(t,r,l,i,!0),yo(t,r,c,i,!0)));else if(n===2){if(m||(m=document.createDocumentFragment(),e[d]=m),l&&l.parentNode===m)return;let p=l;for(;p!==null;){let f=p.nextSibling;if(m.appendChild(p),p===c)break;p=f}}}function LT(t,n,e){let r=n[$e];Sx(r,0,n,e,wx(t,e,n),xx(e.parent||n[Tt],e,n))}function Sx(t,n,e,r,i,o){let a=e[zt],l=a[Tt].projection[r.projection];if(Array.isArray(l))for(let c=0;c<l.length;c++){let d=l[c];va(n,t,e[jr],i,d,r,o,e)}else{let c=l,d=a[dt];Ww(r)&&(c.flags|=128),Mg(t,n,c,d,i,o,!0)}}function VT(t,n,e,r,i,o,a){let s=r[fo];if(s!==At(r)&&va(n,t,e,o,s,i,a),(r[ae]&4)===0)for(let c=st;c<r.length;c++){let d=r[c];Tu(d[ee],d,t,n,o,s)}}function BT(t,n,e,r,i){if(n)i?t.addClass(e,r):t.removeClass(e,r);else{let o=r.indexOf(`-`)===-1?void 0:pr.DashCase;i==null?t.removeStyle(e,r,o):(typeof i==`string`&&i.endsWith(`!important`)&&(i=i.slice(0,-10),o|=pr.Important),t.setStyle(e,r,i,o))}}function Ig(t,n,e,r,i,o,a,s,l,c,d){let m=at+r,p=m+i,f=jT(m,p),h=typeof c==`function`?c():c;return f[ee]={type:t,blueprint:f,template:e,queries:null,viewQuery:s,declTNode:n,data:f.slice().fill(null,m),bindingStartIndex:m,expandoStartIndex:p,hostBindingOpCodes:null,firstCreatePass:!0,firstUpdatePass:!0,staticViewQueries:!1,staticContentQueries:!1,preOrderHooks:null,preOrderCheckHooks:null,contentHooks:null,contentCheckHooks:null,viewHooks:null,viewCheckHooks:null,destroyHooks:null,cleanup:null,contentQueries:null,components:null,directiveRegistry:typeof o==`function`?o():o,pipeRegistry:typeof a==`function`?a():a,firstChild:null,schemas:l,consts:h,incompleteFirstPass:!1,ssrId:d}}function jT(t,n){let e=[];for(let r=0;r<n;r++)e.push(r<t?null:Ut);return e}function zT(t){let n=t.tView;return n===null||n.incompleteFirstPass?t.tView=Ig(1,null,t.template,t.decls,t.vars,t.directiveDefs,t.pipeDefs,t.viewQuery,t.schemas,t.consts,t.id):n}function Ng(t,n,e,r,i,o,a,s,l,c,d){let m=n.blueprint.slice();return m[Un]=i,m[ae]=r|1228,(c!==null||t&&t[ae]&2048)&&(m[ae]|=2048),Kp(m),m[dt]=m[ki]=t,m[ot]=e,m[$n]=a||t&&t[$n],m[$e]=s||t&&t[$e],m[jr]=l||t&&t[jr]||null,m[Tt]=o,m[Ys]=DN(),m[co]=d,m[Gp]=c,m[zt]=n.type==2?t[zt]:m,m}function HT(t,n,e){let r=nn(n,t),i=zT(e),o=t[$n].rendererFactory,a=Tg(t,Ng(t,i,null,Ex(e),r,n,null,o.createRenderer(r,e),null,null,null));return t[n.index]=a}function Ex(t){let n=16;return t.signals?n=4096:t.onPush&&(n=64),n}function kx(t,n,e,r){if(e===0)return-1;let i=n.length;for(let o=0;o<e;o++)n.push(r),t.blueprint.push(r),t.data.push(null);return i}function Tg(t,n){return t[da]?t[$p][Sn]=n:t[da]=n,t[$p]=n,n}function y(t=1){Mx(Ke(),te(),Gn()+t,!1)}function Mx(t,n,e,r){if(!r)if((n[ae]&3)===3){let o=t.preOrderCheckHooks;o!==null&&ou(n,o,e)}else{let o=t.preOrderHooks;o!==null&&au(n,o,0,e)}Ii(e)}var pl=(function(t){return t[t.None=0]=`None`,t[t.SignalBased=1]=`SignalBased`,t[t.HasDecoratorInputTransform=2]=`HasDecoratorInputTransform`,t})(pl||{});function Co(t,n,e,r){let i=Z(null);try{let[o,a,s]=t.inputs[e],l=null;(a&pl.SignalBased)!==0&&(l=n[o][rt]),l!==null&&l.transformFn!==void 0?r=l.transformFn(r):s!==null&&(r=s.call(n,r)),t.setInput!==null?t.setInput(n,l,r,e,o):Iw(n,l,o,r)}finally{Z(i)}}function Ix(t,n,e,r,i){let o=Gn(),a=r&2;try{Ii(-1),a&&n.length>at&&Mx(t,n,at,!1);We(a?Le.TemplateUpdateStart:Le.TemplateCreateStart,i,e),e(r,i)}finally{Ii(o);We(a?Le.TemplateUpdateEnd:Le.TemplateCreateEnd,i,e)}}function Au(t,n,e){qT(t,n,e),(e.flags&64)===64&&YT(t,n,e)}function hl(t,n,e=nn){let r=n.localNames;if(r!==null){let i=n.index+1;for(let o=0;o<r.length;o+=2){let a=r[o+1],s=a===-1?e(n,t):t[a];t[i++]=s}}}function UT(t,n,e,r){let o=r.get(tx,ex)||e===Kn.ShadowDom||e===Kn.ExperimentalIsolatedShadowDom;return t.selectRootElement(n,o)}function WT(t){return t===`class`?`className`:t===`for`?`htmlFor`:t===`formaction`?`formAction`:t===`innerHtml`?`innerHTML`:t===`readonly`?`readOnly`:t===`tabindex`?`tabIndex`:t}function Nx(t,n,e,r,i,o){let a=n[ee];if(Ru(t,a,n,e,r)){dr(t)&&Rx(n,t.index);return}t.type&3&&(e=WT(e)),Tx(t,n,e,r,i,o)}function Tx(t,n,e,r,i,o){if(t.type&3){let a=nn(t,n);r=o!=null?o(r,t.value||``,e):r,r=Ax(e,a,r),i.setProperty(a,e,r)}else t.type&12}function Ax(t,n,e){return t===`src`&&(n.tagName===`IMG`||n.tagName===`VIDEO`)?e==null?``:rn(e):e}function Rx(t,n){let e=kn(n,t);e[ae]&16||(e[ae]|=64)}function qT(t,n,e){let r=e.directiveStart,i=e.directiveEnd;dr(e)&&HT(n,e,t.data[r+e.componentOffset]),t.firstCreatePass||mu(e,n);let o=e.initialInputs;for(let a=r;a<i;a++){let s=t.data[a],l=nl(n,t,a,e);if(xa(l,n),o!==null&&QT(n,a-r,l,s,e,o),ur(s)){let c=kn(e.index,n);c[ot]=nl(n,t,a,e)}}}function YT(t,n,e){let r=e.directiveStart,i=e.directiveEnd,o=e.index,a=EC();try{Ii(o);for(let s=r;s<i;s++){let l=t.data[s],c=n[s];$d(s),(l.hostBindings!==null||l.hostVars!==0||l.hostAttrs!==null)&&KT(l,c)}}finally{Ii(-1),$d(a)}}function KT(t,n){t.hostBindings!==null&&t.hostBindings(1,n)}function Ag(t,n){let e=t.directiveRegistry,r=null;if(e)for(let i=0;i<e.length;i++){let o=e[i];yx(n,o.selectors,!1)&&(r??=[],ur(o)?r.unshift(o):r.push(o))}return r}function ZT(t,n,e,r,i,o){let a=nn(t,n);r=Ax(e,a,r),Ox(n[$e],a,o,t.value,e,r,i)}function Ox(t,n,e,r,i,o,a){if(o==null)a?.(o,r||``,i),t.removeAttribute(n,i,e);else{let s=a==null?lo(o):a(o,r||``,i);t.setAttribute(n,i,s,e)}}function QT(t,n,e,r,i,o){let a=o[n];if(a!==null)for(let s=0;s<a.length;s+=2){let l=a[s],c=a[s+1];Co(r,e,l,c)}}function Rg(t,n,e,r,i){let o=at+e,a=n[ee],s=i(a,n,t,r,e);n[o]=s,pa(t,!0);let l=t.type===2;return l?(fx(n[$e],s,t),(yC()===0||ma(t))&&xa(s,n),vC()):xa(s,n),Yd()&&(!l||!Eu(t))&&kg(a,n,s,t),t}function Og(t){let n=t;return ih()?oh():(n=n.parent,pa(n,!1)),n}function XT(t,n){let e=t[jr];if(!e)return;let r;try{r=e.get(un,null)}catch(i){r=null}r?.(n)}function Ru(t,n,e,r,i){let o=t.inputs?.[r],a=t.hostDirectiveInputs?.[r],s=!1;if(a)for(let l=0;l<a.length;l+=2){let c=a[l],d=a[l+1],m=n.data[c];Co(m,e[c],d,i),s=!0}if(o)for(let l of o){let c=e[l],d=n.data[l];Co(d,c,r,i),s=!0}return s}function JT(t,n,e,r,i,o){let a=null,s=null,l=null,c=!1,d=t.directiveToIndex.get(r.type);if(typeof d==`number`?a=d:[a,s,l]=d,s!==null&&l!==null&&t.hostDirectiveInputs&&Object.hasOwn(t.hostDirectiveInputs,i)){let m=t.hostDirectiveInputs[i];for(let p=0;p<m.length;p+=2){let f=m[p];if(f>=s&&f<=l){let h=n.data[f],v=m[p+1];Co(h,e[f],v,o),c=!0}else if(f>l)break}}return a!==null&&Object.hasOwn(r.inputs,i)&&(Co(r,e[a],i,o),c=!0),c}function eA(t,n){let e=kn(n,t),r=e[ee];tA(r,e);let i=e[Un];i!==null&&e[co]===null&&(e[co]=nx(i,e[jr])),We(Le.ComponentStart);try{Fg(r,e,e[ot])}finally{We(Le.ComponentEnd,e[ot])}}function tA(t,n){for(let e=n.length;e<t.blueprint.length;e++)n.push(t.blueprint[e])}function Fg(t,n,e){Wd(n);try{let r=t.viewQuery;r!==null&&Ah(1,r,e);let i=t.template;i!==null&&Ix(t,n,i,1,e),t.firstCreatePass&&(t.firstCreatePass=!1),n[cr]?.finishViewCreation(t),t.staticContentQueries&&rx(t,n),t.staticViewQueries&&Ah(2,t.viewQuery,e);let o=t.components;o!==null&&nA(n,o)}catch(r){throw t.firstCreatePass&&(t.incompleteFirstPass=!0,t.firstCreatePass=!1),r}finally{n[ae]&=-5,qd()}}function nA(t,n){for(let e=0;e<n.length;e++)eA(t,n[e])}function gl(t,n,e,r){let i=Z(null);try{let o=n.tView,l=Ng(t,o,e,t[ae]&4096?4096:16,null,n,null,null,r?.injector??null,r?.embeddedViewInjector??null,r?.dehydratedView??null);l[Mi]=t[n.index];let d=t[cr];return d!==null&&(l[cr]=d.createEmbeddedView(o)),Fg(o,l,e),l}finally{Z(i)}}function Da(t,n){return!n||n.firstChild===null||Ww(t)}function il(t,n,e,r,i=!1){if(t.type===3){let o=t.firstChild,a=o.next,s=At(n[o.index]),l=At(n[a.index]),c=s;for(;c!==null&&(r.push(c),c!==l);)c=c.nextSibling;return r}for(;e!==null;){if(e.type===128){e=i?e.projectionNext:e.next;continue}let o=n[e.index];if(o!==null)if(En(o)){let s=o[fo];s!==o[Un]&&r.push(At(o)),o[ae]&4||Fx(o,r),r.push(s)}else r.push(At(o));let a=e.type;if(a&8)il(t,n,e.child,r);else if(a&32){let s=wg(e,n),l;for(;l=s();)r.push(l)}else if(a&16){let s=Dx(n,e);if(Array.isArray(s))r.push(...s);else{let l=Vr(n[zt]);il(l[ee],l,s,r,!0)}}e=i?e.projectionNext:e.next}return r}function Fx(t,n){for(let e=st;e<t.length;e++){let r=t[e],i=r[ee].firstChild;i!==null&&il(r[ee],r,i,n)}}function Px(t){if(t[mo]!==null){for(let n of t[mo])n.impl.addSequence(n);t[mo].length=0}}var Lx=[];function rA(t){return t[dn]??iA(t)}function iA(t){let n=Lx.pop()??Object.create(aA);return n.lView=t,n}function oA(t){t.lView[dn]!==t&&(t.lView=null,Lx.push(t))}var aA=K(b({},mi),{consumerIsAlwaysLive:!0,kind:`template`,consumerMarkedDirty:t=>{go(t.lView)},consumerOnSignalRead(){this.lView[dn]=this}});function sA(t){let n=t[dn]??Object.create(lA);return n.lView=t,n}var lA=K(b({},mi),{consumerIsAlwaysLive:!0,kind:`template`,consumerMarkedDirty:t=>{let n=Vr(t.lView);for(;n&&!Vx(n[ee]);)n=Vr(n);n&&Zp(n)},consumerOnSignalRead(){this.lView[dn]=this}});function Vx(t){return t.type!==2}function Bx(t){if(t[Lr]===null)return;let n=!0;for(;n;){let e=!1;for(let r of t[Lr])if(r.dirty&&(e=!0,r.zone===null||Zone.current===r.zone?r.run():r.zone.run(()=>r.run()),t[Lr]===null))return;n=e&&!!(t[ae]&8192)}}var cA=100;function jx(t,n=0){let r=t[$n].rendererFactory;r.begin?.();try{dA(t,n)}finally{r.end?.()}}function dA(t,n){let e=ah();try{Bs(!0),$h(t,n);let r=0;for(;Zs(t);){if(r===cA)throw new D(103,!1);r++,$h(t,1)}}finally{Bs(e)}}function uA(t,n,e,r){if(ho(n))return;let i=n[ae];Wd(n);let s=!0,l=null,c=null;Vx(t)?(c=rA(n),l=Rr(c)):Vc()===null?(s=!1,c=sA(n),l=Rr(c)):n[dn]&&(hi(n[dn]),n[dn]=null);try{Kp(n),xC(t.bindingStartIndex),e!==null&&Ix(t,n,e,2,r);let d=(i&3)===3;if(d){let f=t.preOrderCheckHooks;f!==null&&ou(n,f,null)}else{let f=t.preOrderHooks;f!==null&&au(n,f,0,null),gh(n,0)}if(mA(n),Bx(n),zx(n,0),t.contentQueries!==null&&rx(t,n),true)if(d){let f=t.contentCheckHooks;f!==null&&ou(n,f)}else{let f=t.contentHooks;f!==null&&au(n,f,1),gh(n,1)}pA(t,n);let m=t.components;m!==null&&Ux(n,m,0);let p=t.viewQuery;if(p!==null&&Ah(2,p,r),true)if(d){let f=t.viewCheckHooks;f!==null&&ou(n,f)}else{let f=t.viewHooks;f!==null&&au(n,f,2),gh(n,2)}if(t.firstUpdatePass===!0&&(t.firstUpdatePass=!1),n[Pd]){for(let f of n[Pd])f();n[Pd]=null}Px(n),n[ae]&=-73}catch(d){let m=!1,p=d,f=n;for(;f!==null;){if(En(f)){f=f[dt];continue}let h=f[ua];if(h)try{let v=n[zt][ot],V={declarationInstance:v,declarationType:v?.constructor,caughtBy:h},O=Z(null);try{h(PC(p),V)}finally{Z(O)}m=!0;break}catch(v){p=v}f=f[dt]}if(!m)throw go(n),p}finally{c!==null&&(pi(c,l),s&&oA(c)),qd()}}function zx(t,n){for(let e=Yw(t);e!==null;e=Kw(e))for(let r=st;r<e.length;r++){let i=e[r];Hx(i,n)}}function mA(t){for(let n=Yw(t);n!==null;n=Kw(n)){if(!(n[ae]&2))continue;let e=n[po];for(let r=0;r<e.length;r++){let i=e[r];Zp(i)}}}function fA(t,n,e){We(Le.ComponentStart);let r=kn(n,t);try{Hx(r,e)}finally{We(Le.ComponentEnd,r[ot])}}function Hx(t,n){Bd(t)&&$h(t,n)}function $h(t,n){let r=t[ee],i=t[ae],o=t[dn],a=!!(n===0&&i&16);if(a||=!!(i&64&&n===0),a||=!!(i&1024),a||=!!(o?.dirty&&Yo(o)),a||=!1,o&&(o.dirty=!1),t[ae]&=-9217,a)uA(r,t,r.template,t[ot]);else if(i&8192){let s=Z(null);try{Bx(t),zx(t,1);let l=r.components;l!==null&&Ux(t,l,1),Px(t)}finally{Z(s)}}}function Ux(t,n,e){for(let r=0;r<n.length;r++)fA(t,n[r],e)}function pA(t,n){let e=t.hostBindingOpCodes;if(e!==null)try{for(let r=0;r<e.length;r++){let i=e[r];if(i<0)Ii(~i);else{let o=i,a=e[++r],s=e[++r];SC(a,o);let l=n[o];We(Le.HostBindingsUpdateStart,l);try{s(2,l)}finally{We(Le.HostBindingsUpdateEnd,l)}}}}finally{Ii(-1)}}function Pg(t,n){let e=ah()?64:1088;for(t[$n].changeDetectionScheduler?.notify(n);t;){t[ae]|=e;let r=Vr(t);if(fa(t)&&!r)return t;t=r}return null}function $x(t,n,e,r){return[t,!0,0,n,null,r,null,e,null,null]}function Gx(t,n){let e=st+n;if(e<t.length)return t[e]}function bl(t,n,e,r=!0){let i=n[ee];if(hA(i,n,t,e),r){let a=Uh(e,t),s=n[$e],l=s.parentNode(t[fo]);l!==null&&IT(i,t[Tt],s,n,l,a)}let o=n[co];o!==null&&o.firstChild!==null&&(o.firstChild=null)}function Wx(t,n){let e=ol(t,n);return e!==void 0&&Nu(e[ee],e),e}function ol(t,n){if(t.length<=st)return;let e=st+n,r=t[e];if(r){let i=r[Mi];i!==null&&i!==t&&Eg(i,r),n>0&&(t[e-1][Sn]=r[Sn]);let o=Ws(t,st+n);MT(r[ee],r);let a=o[cr];a!==null&&a.detachView(o[ee]),r[dt]=null,r[Sn]=null,r[ae]&=-129}return r}function hA(t,n,e,r){let i=st+r,o=e.length;r>0&&(e[i-1][Sn]=n),r<o-st?(n[Sn]=e[i],Lp(e,st+r,n)):(e.push(n),n[Sn]=null),n[dt]=e;let a=n[Mi];a!==null&&e!==a&&qx(a,n);let s=n[cr];s!==null&&s.insertView(t),jd(n),n[ae]|=128}function qx(t,n){let e=t[po],r=n[dt];if(zr(r))t[ae]|=2;else{let i=r[dt][zt];n[zt]!==i&&(t[ae]|=2)}e===null?t[po]=[n]:e.push(n)}var Ai=class{_lView;_cdRefInjectingView;_appRef=null;_attachedToViewContainer=!1;exhaustive;get rootNodes(){let n=this._lView,e=n[ee];return il(e,n,e.firstChild,[])}constructor(n,e){this._lView=n,this._cdRefInjectingView=e}get context(){return this._lView[ot]}set context(n){this._lView[ot]=n}get destroyed(){return ho(this._lView)}destroy(){if(this._appRef)this._appRef.detachView(this);else if(this._attachedToViewContainer){let n=this._lView[dt];if(En(n)){let e=n[Ks],r=e?e.indexOf(this):-1;r>-1&&(ol(n,r),Ws(e,r))}this._attachedToViewContainer=!1}Nu(this._lView[ee],this._lView)}onDestroy(n){zd(this._lView,n)}markForCheck(){Pg(this._cdRefInjectingView||this._lView,4)}detach(){this._lView[ae]&=-129}reattach(){jd(this._lView),this._lView[ae]|=128}detectChanges(){this._lView[ae]|=1024,jx(this._lView)}checkNoChanges(){}attachToViewContainerRef(){if(this._appRef)throw new D(902,!1);this._attachedToViewContainer=!0}detachFromAppRef(){this._appRef=null;let n=fa(this._lView),e=this._lView[Mi];e!==null&&!n&&Eg(e,this._lView),Cx(this._lView[ee],this._lView)}attachToAppRef(n){if(this._attachedToViewContainer)throw new D(902,!1);this._appRef=n;let e=fa(this._lView),r=this._lView[Mi];r!==null&&!e&&qx(r,this._lView),jd(this._lView)}};var mt=(()=>{class t{_declarationLView;_declarationTContainer;elementRef;static __NG_ELEMENT_ID__=gA;constructor(e,r,i){this._declarationLView=e,this._declarationTContainer=r,this.elementRef=i}get ssrId(){return this._declarationTContainer.tView?.ssrId||null}createEmbeddedView(e,r){return this.createEmbeddedViewImpl(e,r)}createEmbeddedViewImpl(e,r,i){return new Ai(gl(this._declarationLView,this._declarationTContainer,e,{embeddedViewInjector:r,dehydratedView:i}))}}return t})();function gA(){return Ou(gt(),te())}function Ou(t,n){return t.type&4?new mt(n,t,Ea(t,n)):null}function ka(t,n,e,r,i){let o=t.data[n];if(o===null)o=bA(t,n,e,r,i),DC()&&(o.flags|=32);else if(o.type&64){o.type=e,o.value=r,o.attrs=i;let a=_C();o.injectorIndex=a===null?-1:a.injectorIndex}return pa(o,!0),o}function bA(t,n,e,r,i){let o=rh(),a=ih(),s=a?o:o&&o.parent,l=t.data[n]=vA(t,s,e,n,r,i);return yA(t,l,o,a),l}function yA(t,n,e,r){t.firstChild===null&&(t.firstChild=n),e!==null&&(r?e.child==null&&n.parent!==null&&(e.child=n):e.next===null&&(e.next=n,n.prev=e))}function vA(t,n,e,r,i,o){let a=n?n.injectorIndex:-1,s=0;return eh()&&(s|=128),{type:e,index:r,insertBeforeIndex:null,injectorIndex:a,directiveStart:-1,directiveEnd:-1,directiveStylingLast:-1,componentOffset:-1,controlDirectiveIndex:-1,customControlIndex:-1,propertyBindings:null,flags:s,providerIndexes:0,value:i,namespace:dh(),attrs:o,mergedAttrs:null,localNames:null,initialInputs:null,inputs:null,hostDirectiveInputs:null,outputs:null,hostDirectiveOutputs:null,directiveToIndex:null,tView:null,next:null,prev:null,projectionNext:null,child:null,parent:n,projection:null,styles:null,stylesWithoutHost:null,residualStyles:void 0,classes:null,classesWithoutHost:null,residualClasses:void 0,classBindings:0,styleBindings:0}}function _A(t){let n=t[Wp]??[],r=t[dt][$e],i=[];for(let o of n)o.data[Jw]!==void 0?i.push(o):CA(o,r);t[Wp]=i}function CA(t,n){let e=0,r=t.firstChild;if(r){let i=t.data[Xw];for(;e<i;){let o=r.nextSibling;mx(n,r,!1),r=o,e++}}}var wA=()=>null;var xA=()=>null;function fu(t,n){return wA(t,n)}function Yx(t,n,e){return xA(t,n,e)}var Kx=class{};var bt=class{};var ke=class{destroyNode=null;static __NG_ELEMENT_ID__=()=>DA()};function DA(){let t=te(),e=kn(gt().index,t);return(zr(e)?e:t)[$e]}var Zx=(()=>{class t{static ɵprov=q({token:t,providedIn:`root`,factory:()=>null})}return t})();function Qx(t){return t.debugInfo?.className||t.type.name||null}var lu={};var pu=class{injector;parentInjector;constructor(n,e){this.injector=n,this.parentInjector=e}get(n,e,r){let i=this.injector.get(n,lu,r);return i!==lu||e===lu?i:this.parentInjector.get(n,e,r)}};function Lg(t){return Jx(t)?Array.isArray(t)||!(t instanceof Map)&&Symbol.iterator in t:!1}function Xx(t,n){if(Array.isArray(t))for(let e=0;e<t.length;e++)n(t[e]);else{let e=t[Symbol.iterator](),r;for(;!(r=e.next()).done;)n(r.value)}}function Jx(t){return t!==null&&(typeof t==`function`||typeof t==`object`)}function eD(t,n,e){return t[n]=e}function SA(t,n){return t[n]}function on(t,n,e){if(e===Ut)return!1;let r=t[n];return Object.is(r,e)?!1:(t[n]=e,!0)}function EA(t,n,e,r){let i=on(t,n,e);return on(t,n+1,r)||i}function Ca(t,n,e){return function r(i){let o=r.__ngNativeEl__;o!==void 0&&EN(i,o);Pg(dr(t)?kn(t.index,n):n,5);let s=n[ot],l=lw(n,s,e,i),c=r.__ngNextListenerFn__;for(;c;)l=lw(n,s,c,i)&&l,c=c.__ngNextListenerFn__;return l}}function lw(t,n,e,r){let i=Z(null);try{return We(Le.OutputStart,n,e),e(r)!==!1}catch(o){return XT(t,o),!1}finally{We(Le.OutputEnd,n,e),Z(i)}}function tD(t,n,e,r,i,o,a,s){let l=ma(t),c=!1,d=null;if(!r&&l&&(d=MA(n,e,o,t.index)),d!==null){let m=d.__ngLastListenerFn__||d;m.__ngNextListenerFn__=a,d.__ngLastListenerFn__=a,c=!0}else{let m=nn(t,e),p=r?r(m):m;r||(s.__ngNativeEl__=m);let f=i.listen(p,o,s);if(!kA(o))nD(r?v=>r(At(v[t.index])):t.index,n,e,o,s,f,!1)}return c}function kA(t){return t.startsWith(`animation`)||t.startsWith(`transition`)}function MA(t,n,e,r){let i=t.cleanup;if(i!=null)for(let o=0;o<i.length-1;o+=2){let a=i[o];if(a===e&&i[o+1]===r){let s=n[ca],l=i[o+2];return s&&s.length>l?s[l]:null}typeof a==`string`&&(o+=2)}return null}function nD(t,n,e,r,i,o,a){let s=n.firstCreatePass?Xp(n):null,l=Qp(e),c=l.length;l.push(i,o),s&&s.push(r,t,c,(c+1)*(a?-1:1))}function cw(t,n,e,r,i){let o=null,a=null,s=null,l=!1,c=t.directiveToIndex.get(e.type);if(typeof c==`number`?o=c:[o,a,s]=c,a!==null&&s!==null&&t.hostDirectiveOutputs&&Object.hasOwn(t.hostDirectiveOutputs,r)){let d=t.hostDirectiveOutputs[r];for(let m=0;m<d.length;m+=2){let p=d[m];if(p>=a&&p<=s)l=!0,hu(t,n,p,d[m+1],r,i);else if(p>s)break}}return Object.hasOwn(e.outputs,r)&&(l=!0,hu(t,n,o,r,r,i)),l}function hu(t,n,e,r,i,o){let a=n[e],s=n[ee],m=a[s.data[e].outputs[r]].subscribe(o);nD(t.index,s,n,i,o,m,!0)}function IA(){NA()}function NA(){let t=te(),n=Ke(),e=gt();if(n.firstCreatePass&&RA(n,e),e.controlDirectiveIndex===-1)return;Nn(`NgSignalForms`);let r=t[e.controlDirectiveIndex];n.data[e.controlDirectiveIndex].controlDef.create(r,new gu(t,n,e))}function TA(){AA()}function AA(){let t=te(),n=Ke(),e=Ni();if(e.controlDirectiveIndex===-1)return;let r=n.data[e.controlDirectiveIndex].controlDef,i=t[e.controlDirectiveIndex];r.update(i,new gu(t,n,e))}var gu=class{lView;tView;tNode;hasPassThrough;constructor(n,e,r){this.lView=n,this.tView=e,this.tNode=r,this.hasPassThrough=!!(r.flags&4096)}get customControl(){return this.tNode.customControlIndex!==-1?this.lView[this.tNode.customControlIndex]:void 0}get nativeElement(){return nn(this.tNode,this.lView)}get descriptor(){return`<${this.tNode.value}>`}listenToCustomControlOutput(n,e){let r=this.tView.data[this.tNode.customControlIndex];cw(this.tNode,this.lView,r,n,Ca(this.tNode,this.lView,e))}listenToCustomControlModel(n){let e=this.tNode.flags&1024?`valueChange`:`checkedChange`,r=this.tView.data[this.tNode.customControlIndex];cw(this.tNode,this.lView,r,e,Ca(this.tNode,this.lView,n))}setInputOnDirectives(n,e,r){let i=this.tNode.inputs?.[n],o=this.tNode.hostDirectiveInputs?.[n];if(!i&&!o)return!1;let a=!1;if(i)for(let s of i){if(s===this.tNode.controlDirectiveIndex)continue;let l=this.lView[s],c=this.tView.data[s];(!r||r(uw(l,c,n)))&&(Co(c,l,n,e),a=!0)}if(o)for(let s=0;s<o.length;s+=2){let l=o[s];if(l===this.tNode.controlDirectiveIndex)continue;let c=this.lView[l],d=o[s+1],m=this.tView.data[l];(!r||r(uw(c,m,n)))&&(Co(m,c,d,e),a=!0)}return a}setCustomControlModelInput(n){let e=this.tView.data[this.tNode.customControlIndex],r=this.tNode.flags&1024?`value`:`checked`;JT(this.tNode,this.tView,this.lView,e,r,n)}customControlHasInput(n){if(this.tNode.customControlIndex===-1)return!1;let e=this.tView.data[this.tNode.customControlIndex];return(e.signalFormsInputPresence??=this._buildCustomControlInputCache(e))[n]===!0}_buildCustomControlInputCache(n){let e={};for(let r in n.inputs)e[r]=!0;if(n.hostDirectives!==null){let r=[...n.hostDirectives];for(;r.length>0;){let i=r.shift();if(typeof i!=`function`){for(let a in i.inputs)e[i.inputs[a]]=!0;let o=dw(i.directive);o!==null&&r.push(...o);continue}for(let o of i()){if(typeof o==`function`)continue;if(o.inputs)for(let s=0;s<o.inputs.length;s+=2){let l=o.inputs[s+1]||o.inputs[s];e[l]=!0}let a=dw(o.directive);a!==null&&r.push(...a)}}}return e}};function dw(t){return typeof t==`function`&&`ɵdir`in t?t.ɵdir.hostDirectives??null:null}function uw(t,n,e){if(!n.inputs||!Object.hasOwn(n.inputs,e))return;let[r,i]=n.inputs[e];if((i&pl.SignalBased)!==0){let a=t[r][rt];return a.value===Du?void 0:a.value}return t[r]}function RA(t,n,e){for(let i=n.directiveStart;i<n.directiveEnd;i++)if(t.data[i].controlDef){n.controlDirectiveIndex=i;break}if(n.controlDirectiveIndex===-1)return;let r=t.data[n.controlDirectiveIndex].controlDef;if(r.passThroughInput&&(n.inputs?.[r.passThroughInput]?.length??0)>1){n.flags|=4096;return}OA(t,n)}function OA(t,n){for(let e=n.directiveStart;e<n.directiveEnd;e++){let r=t.data[e];if(!(n.directiveToIndex&&!n.directiveToIndex.has(r.type))){if(mw(r,`value`)){n.flags|=1024,n.customControlIndex=e;return}if(mw(r,`checked`)){n.flags|=2048,n.customControlIndex=e;return}}}if(n.hostDirectiveInputs!==null&&n.hostDirectiveOutputs!==null&&n.directiveToIndex!==null){let e=(r,i)=>{let o=n.hostDirectiveInputs[r],a=n.hostDirectiveOutputs[r+`Change`];if(!o||!a)return!1;for(let s=0;s<o.length;s+=2){let l=o[s];for(let c=0;c<a.length;c+=2)if(l===a[c])for(let m of n.directiveToIndex.values()){if(!Array.isArray(m))continue;let[p,f,h]=m;if(l>=f&&l<=h)return n.flags|=i,n.customControlIndex=p,!0}}return!1};if(e(`value`,1024)||e(`checked`,2048))return}}function mw(t,n){return FA(t,n)&&PA(t,n+`Change`)}function FA(t,n){return n in t.inputs}function PA(t,n){return n in t.outputs}var Gh=Symbol(`BINDING`);var Do=new g(``);function bu(t,n,e){let r=e?t.styles:null,i=e?t.classes:null,o=0;if(n!==null)for(let a=0;a<n.length;a++){let s=n[a];if(typeof s==`number`)o=s;else if(o==1)i=Md(i,s);else if(o==2){let l=s,c=n[++a];r=Md(r,l+`: `+c+`;`)}}e?t.styles=r:t.stylesWithoutHost=r,e?t.classes=i:t.classesWithoutHost=i}function me(t,n=0){let e=te();if(e===null)return P(t,n);return zw(gt(),e,Nt(t),n)}function So(){throw new Error(`invalid`)}function rD(t,n,e,r,i){let o=r===null?null:{"":-1},a=i(t,e);if(a!==null){let s=a,l=null,c=null;for(let d of a)if(d.resolveHostDirectives!==null){[s,l,c]=d.resolveHostDirectives(a);break}BA(t,n,e,s,o,l,c)}o!==null&&r!==null&&LA(e,r,o)}function LA(t,n,e){let r=t.localNames=[];for(let i=0;i<n.length;i+=2){let o=e[n[i+1]];if(o==null)throw new D(-301,!1);r.push(n[i],o)}}function VA(t,n,e){n.componentOffset=e,(t.components??=[]).push(n.index)}function BA(t,n,e,r,i,o,a){let s=r.length,l=null;for(let p=0;p<s;p++){let f=r[p];l===null&&ur(f)&&(l=f,VA(t,e,p)),Mh(mu(e,n),t,f.type)}GA(e,t.data.length,s),l?.viewProvidersResolver&&l.viewProvidersResolver(l);for(let p=0;p<s;p++){let f=r[p];f.providersResolver&&f.providersResolver(f)}let c=!1,d=!1,m=kx(t,n,s,null);s>0&&(e.directiveToIndex=new Map);for(let p=0;p<s;p++){let f=r[p];if(e.mergedAttrs=wa(e.mergedAttrs,f.hostAttrs),zA(t,e,n,m,f),$A(m,f,i),a!==null&&a.has(f)){let[v,M]=a.get(f);e.directiveToIndex.set(f.type,[m,v+e.directiveStart,M+e.directiveStart])}else(o===null||!o.has(f))&&e.directiveToIndex.set(f.type,m);f.contentQueries!==null&&(e.flags|=4),(f.hostBindings!==null||f.hostAttrs!==null||f.hostVars!==0)&&(e.flags|=64);let h=f.type.prototype;!c&&(h.ngOnChanges||h.ngOnInit||h.ngDoCheck)&&((t.preOrderHooks??=[]).push(e.index),c=!0),!d&&(h.ngOnChanges||h.ngDoCheck)&&((t.preOrderCheckHooks??=[]).push(e.index),d=!0),m++}jA(t,e,o)}function jA(t,n,e){for(let r=n.directiveStart;r<n.directiveEnd;r++){let i=t.data[r];if(e===null||!e.has(i))fw(0,n,i,r),fw(1,n,i,r),hw(n,r,!1);else{let o=e.get(i);pw(0,n,o,r),pw(1,n,o,r),hw(n,r,!0)}}}function fw(t,n,e,r){let i=t===0?e.inputs:e.outputs;for(let o in i)if(Object.hasOwn(i,o)){let a;t===0?a=n.inputs??={}:a=n.outputs??={},a[o]??=[],a[o].push(r),iD(n,o)}}function pw(t,n,e,r){let i=t===0?e.inputs:e.outputs;for(let o in i)if(Object.hasOwn(i,o)){let a=i[o],s;t===0?s=n.hostDirectiveInputs??={}:s=n.hostDirectiveOutputs??={},s[a]??=[],s[a].push(r,o),iD(n,a)}}function iD(t,n){n===`class`?t.flags|=8:n===`style`&&(t.flags|=16)}function hw(t,n,e){let{attrs:r,inputs:i,hostDirectiveInputs:o}=t;if(r===null||!e&&i===null||e&&o===null||Cg(t)){t.initialInputs??=[],t.initialInputs.push(null);return}let a=null,s=0;for(;s<r.length;){let l=r[s];if(l===0){s+=4;continue}else if(l===5){s+=2;continue}else if(typeof l==`number`)break;if(!e&&Object.hasOwn(i,l)){let c=i[l];for(let d of c)if(d===n){a??=[],a.push(l,r[s+1]);break}}else if(e&&Object.hasOwn(o,l)){let c=o[l];for(let d=0;d<c.length;d+=2)if(c[d]===n){a??=[],a.push(c[d+1],r[s+1]);break}}s+=2}t.initialInputs??=[],t.initialInputs.push(a)}function zA(t,n,e,r,i){t.data[r]=i;let a=new vo(i.factory||(i.factory=ro(i.type,!0)),ur(i),me,null);t.blueprint[r]=a,e[r]=a,HA(t,n,r,kx(t,e,i.hostVars,Ut),i)}function HA(t,n,e,r,i){let o=i.hostBindings;if(o){let a=t.hostBindingOpCodes;a===null&&(a=t.hostBindingOpCodes=[]);let s=~n.index;UA(a)!=s&&a.push(s),a.push(e,r,o)}}function UA(t){let n=t.length;for(;n>0;){let e=t[--n];if(typeof e==`number`&&e<0)return e}return 0}function $A(t,n,e){if(e){if(n.exportAs)for(let r=0;r<n.exportAs.length;r++)e[n.exportAs[r]]=t;ur(n)&&(e[``]=t)}}function GA(t,n,e){t.flags|=1,t.directiveStart=n,t.directiveEnd=n+e,t.providerIndexes=n}function Vg(t,n,e,r,i,o,a,s){let l=n[ee],c=l.consts,m=ka(l,t,e,r,Mn(c,a));return o&&rD(l,n,m,Mn(c,s),i),m.mergedAttrs=wa(m.mergedAttrs,m.attrs),m.attrs!==null&&bu(m,m.attrs,!1),m.mergedAttrs!==null&&bu(m,m.mergedAttrs,!0),l.queries!==null&&l.queries.elementStart(l,m),m}function Bg(t,n){Aw(t,n),qp(n)&&t.queries.elementEnd(n)}function WA(t,n,e,r,i,o){let a=n.consts,l=ka(n,t,e,r,Mn(a,i));if(l.mergedAttrs=wa(l.mergedAttrs,l.attrs),o!=null){let c=Mn(a,o);l.localNames=[];for(let d=0;d<c.length;d+=2)l.localNames.push(c[d],-1)}return l.attrs!==null&&bu(l,l.attrs,!1),l.mergedAttrs!==null&&bu(l,l.mergedAttrs,!0),n.queries!==null&&n.queries.elementStart(n,l),l}var oD=typeof ShadowRoot<`u`;var qA=typeof Document<`u`;function YA(t){return Object.keys(t).map(n=>{let[e,r,i]=t[n],o={propName:e,templateName:n,isSignal:(r&pl.SignalBased)!==0};return i&&(o.transform=i),o})}function KA(t){return Object.keys(t).map(n=>({propName:t[n],templateName:n}))}function ZA(t,n,e){let r=n instanceof Ue?n:n?.injector;return r&&t.getStandaloneInjector!==null&&(r=t.getStandaloneInjector(r)||r),r?new pu(e,r):e}function QA(t){let n=t.get(bt,null);if(n===null)throw new D(407,!1);return{rendererFactory:n,sanitizer:t.get(Zx,null),changeDetectionScheduler:t.get(Hn,null),ngReflect:!1,tracingService:t.get(In,null,{optional:!0})}}function XA(t,n,e){let r=aD(t);return dx(n,r,r===`svg`?ao:r===`math`?Ld:e)}function JA(t){if((t&&`localName`in t&&typeof t.localName==`string`?t.localName:t?.tagName)?.toLowerCase()===`script`)throw new D(905,!1)}function aD(t){return(t.selectors[0][0]||`div`).toLowerCase()}var wo=class{componentDef;ngModule;selector;componentType;ngContentSelectors;isBoundToModule;cachedInputs=null;cachedOutputs=null;get inputs(){return this.cachedInputs??=YA(this.componentDef.inputs),this.cachedInputs}get outputs(){return this.cachedOutputs??=KA(this.componentDef.outputs),this.cachedOutputs}constructor(n,e){this.componentDef=n,this.ngModule=e,this.componentType=n.type,this.selector=vT(n.selectors),this.ngContentSelectors=n.ngContentSelectors??[],this.isBoundToModule=!!e}create(n,e,r,i,o,a,s,l){We(Le.DynamicComponentStart);let c=Z(null);try{let d=this.componentDef,m=ZA(d,i||this.ngModule,n),p=QA(m),f=p.tracingService;return f&&f.componentCreate?f.componentCreate(Qx(d),()=>this.createComponentRef(p,m,e,r,o,a,s,l)):this.createComponentRef(p,m,e,r,o,a,s,l)}finally{Z(c)}}createComponentRef(n,e,r,i,o,a,s,l){let c=this.componentDef,d=eR(i,c,a,o,l),m=n.rendererFactory.createRenderer(null,c),p=i?UT(m,i,c.encapsulation,e):XA(c,m,s??null);JA(p);let f=e.get(Do,null),h=tR(p,()=>e.get(z,null)??Qw());f&&f.addHost(h);let v=a?.some(gw)||o?.some(O=>typeof O!=`function`&&O.bindings.some(gw)),M=Ng(null,d,null,512|Ex(c),null,null,n,m,e,null,nx(p,e,!0));f&&oD&&h instanceof ShadowRoot&&zd(M,()=>{f.removeHost(h)}),M[at]=p,Wd(M);let V=null;try{let O=Vg(at,M,2,`#host`,()=>d.directiveRegistry,!0,0);fx(m,p,O),xa(p,M),Au(d,M,O),fg(d,O,M),Bg(d,O),r!==void 0&&rR(O,this.ngContentSelectors,r),V=kn(O.index,M),M[ot]=V[ot],Fg(d,M,null)}catch(O){throw V!==null&&Nh(V),Nh(M),O}finally{We(Le.DynamicComponentEnd),qd()}return new yu(this.componentType,M,!!v)}};function eR(t,n,e,r,i){let o=t?[`ng-version`,`22.2.3`]:_T(n.selectors[0]),a=null,s=null,l=0;if(e)for(let m of e)l+=m[Gh].requiredVars,m.create&&(m.targetIdx=0,(a??=[]).push(m)),m.update&&(m.targetIdx=0,(s??=[]).push(m));if(r)for(let m=0;m<r.length;m++){let p=r[m];if(typeof p!=`function`)for(let f of p.bindings){l+=f[Gh].requiredVars;let h=m+1;f.create&&(f.targetIdx=h,(a??=[]).push(f)),f.update&&(f.targetIdx=h,(s??=[]).push(f))}}let c=[n];if(r)for(let m of r){let f=Nd(typeof m==`function`?m:m.type);c.push(f)}return Ig(0,null,nR(a,s),1,l,c,null,null,null,[o],null)}function tR(t,n){let e=t.getRootNode?.();return qA&&e instanceof Document?e.head:e&&oD&&e instanceof ShadowRoot?e:n().head}function nR(t,n){return!t&&!n?null:e=>{if(e&1&&t)for(let r of t)r.create();if(e&2&&n)for(let r of n)r.update()}}function gw(t){let n=t[Gh].kind;return n===`input`||n===`twoWay`}var yu=class extends Kx{_rootLView;_hasInputBindings;instance;hostView;changeDetectorRef;componentType;location;previousInputValues=null;_tNode;constructor(n,e,r){super(),this._rootLView=e,this._hasInputBindings=r,this._tNode=Vd(e[ee],at),this.location=Ea(this._tNode,e),this.instance=kn(this._tNode.index,e)[ot],this.hostView=this.changeDetectorRef=new Ai(e,void 0),this.componentType=n}setInput(n,e){this._hasInputBindings;let r=this._tNode;if(this.previousInputValues??=new Map,this.previousInputValues.has(n)&&Object.is(this.previousInputValues.get(n),e))return;let i=this._rootLView;Ru(r,i[ee],i,n,e);this.previousInputValues.set(n,e);Pg(kn(r.index,i),1)}get injector(){return new $r(this._tNode,this._rootLView)}destroy(){this.hostView.destroy()}onDestroy(n){this.hostView.onDestroy(n)}};function rR(t,n,e){let r=t.projection=[];for(let i=0;i<n.length;i++){let o=e[i];r.push(o!=null&&o.length?Array.from(o):null)}}var et=(()=>{class t{static __NG_ELEMENT_ID__=iR}return t})();function iR(){return sD(gt(),te())}var Wh=class t extends et{_lContainer;_hostTNode;_hostLView;constructor(n,e,r){super(),this._lContainer=n,this._hostTNode=e,this._hostLView=r}get element(){return Ea(this._hostTNode,this._hostLView)}get injector(){return new $r(this._hostTNode,this._hostLView)}get parentInjector(){let n=cg(this._hostTNode,this._hostLView);if(Fw(n)){let e=uu(n,this._hostLView),r=du(n),i=e[ee].data[r+8];return new $r(i,e)}else return new $r(null,this._hostLView)}clear(){for(;this.length>0;)this.remove(this.length-1)}get(n){let e=bw(this._lContainer);return e!==null&&e[n]||null}get length(){return this._lContainer.length-st}createEmbeddedView(n,e,r){let i,o,a;typeof r==`number`?i=r:r!=null&&(i=r.index,o=r.injector,a=r.onError);let s=fu(this._lContainer,n.ssrId),l=n.createEmbeddedViewImpl(e||{},o,s);return a&&(l._lView[ua]=a),this.insertImpl(l,i,Da(this._hostTNode,s)),l}createComponent(n,e,r,i,o,a,s){let l,c,d=e||{};l=d.index,r=d.injector,i=d.projectableNodes,o=d.environmentInjector||d.ngModuleRef,a=d.directives,s=d.bindings,c=d.onError;let m=new wo(Br(n)),p=r||this.parentInjector;if(!o&&m.ngModule==null){let O=this.parentInjector.get(Ue,null);O&&(o=O)}let f=Br(m.componentType??{}),h=fu(this._lContainer,f?.id??null),v=h?.firstChild??null,M=m.create(p,i,v,o,a,s,this._getHostElementNamespace());return c&&(M.hostView._lView[ua]=c),this.insertImpl(M.hostView,l,Da(this._hostTNode,h)),M}_getHostElementNamespace(){if(this._hostTNode.type&2){let n=this._hostTNode.parent??this._hostLView[Tt];return n!==null&&n.type&2&&typeof n.value==`string`&&n.value.toLowerCase()===`foreignobject`?null:n?.namespace??null}return this._hostTNode.namespace}insert(n,e){return this.insertImpl(n,e,!0)}insertImpl(n,e,r){let i=n._lView;if(pC(i)){let s=this.indexOf(n);if(s!==-1)this.detach(s);else{let l=i[dt],c=new t(l,l[Tt],l[dt]);c.detach(c.indexOf(n))}}let o=this._adjustIndex(e),a=this._lContainer;return bl(a,i,o,r),n.attachToViewContainerRef(),Lp(vh(a),o,n),n}move(n,e){return this.insert(n,e)}indexOf(n){let e=bw(this._lContainer);return e!==null?e.indexOf(n):-1}remove(n){let e=this._adjustIndex(n,-1),r=ol(this._lContainer,e);r&&(Ws(vh(this._lContainer),e),Nu(r[ee],r))}detach(n){let e=this._adjustIndex(n,-1),r=ol(this._lContainer,e);return r&&Ws(vh(this._lContainer),e)!=null?new Ai(r):null}_adjustIndex(n,e=0){return n??this.length+e}};function bw(t){return t[Ks]}function vh(t){return t[Ks]||(t[Ks]=[])}function sD(t,n){let e,r=n[t.index];return En(r)?e=r:(e=$x(r,n,null,t),n[t.index]=e,Tg(n,e)),aR(e,n,t,r),new Wh(e,t,n)}function oR(t,n){let e=t[$e],r=e.createComment(``),i=nn(n,t);return yo(e,e.parentNode(i),r,e.nextSibling(i),!1),r}var aR=cR;var sR=()=>!1;function lR(t,n,e){return sR(t,n,e)}function cR(t,n,e,r){if(t[fo])return;let i;e.type&8?i=At(r):i=oR(n,e),t[fo]=i}var qh=class t{queryList;matches=null;constructor(n){this.queryList=n}clone(){return new t(this.queryList)}setDirty(){this.queryList.setDirty()}};var Yh=class t{queries;constructor(n=[]){this.queries=n}createEmbeddedView(n){let e=n.queries;if(e!==null){let r=n.contentQueries!==null?n.contentQueries[0]:e.length,i=[];for(let o=0;o<r;o++){let a=e.getByIndex(o),s=this.queries[a.indexInDeclarationView];i.push(s.clone())}return new t(i)}return null}insertView(n){this.dirtyQueriesWithMatches(n)}detachView(n){this.dirtyQueriesWithMatches(n)}finishViewCreation(n){this.dirtyQueriesWithMatches(n)}dirtyQueriesWithMatches(n){for(let e=0;e<this.queries.length;e++)zg(n,e).matches!==null&&this.queries[e].setDirty()}};var vu=class{flags;read;predicate;constructor(n,e,r=null){this.flags=e,this.read=r,typeof n==`string`?this.predicate=pR(n):this.predicate=n}};var Kh=class t{queries;constructor(n=[]){this.queries=n}elementStart(n,e){for(let r=0;r<this.queries.length;r++)this.queries[r].elementStart(n,e)}elementEnd(n){for(let e=0;e<this.queries.length;e++)this.queries[e].elementEnd(n)}embeddedTView(n){let e=null;for(let r=0;r<this.length;r++){let i=e!==null?e.length:0,o=this.getByIndex(r).embeddedTView(n,i);o&&(o.indexInDeclarationView=r,e!==null?e.push(o):e=[o])}return e!==null?new t(e):null}template(n,e){for(let r=0;r<this.queries.length;r++)this.queries[r].template(n,e)}getByIndex(n){return this.queries[n]}get length(){return this.queries.length}track(n){this.queries.push(n)}};var Zh=class t{metadata;matches=null;indexInDeclarationView=-1;crossesNgTemplate=!1;_declarationNodeIndex;_appliesToNextNode=!0;constructor(n,e=-1){this.metadata=n,this._declarationNodeIndex=e}elementStart(n,e){this.isApplyingToNode(e)&&this.matchTNode(n,e)}elementEnd(n){this._declarationNodeIndex===n.index&&(this._appliesToNextNode=!1)}template(n,e){this.elementStart(n,e)}embeddedTView(n,e){return this.isApplyingToNode(n)?(this.crossesNgTemplate=!0,this.addMatch(-n.index,e),new t(this.metadata)):null}isApplyingToNode(n){if(this._appliesToNextNode&&(this.metadata.flags&1)!==1){let e=this._declarationNodeIndex,r=n.parent;for(;r!==null&&r.type&8&&r.index!==e;)r=r.parent;return e===(r!==null?r.index:-1)}return this._appliesToNextNode}matchTNode(n,e){let r=this.metadata.predicate;if(Array.isArray(r))for(let i=0;i<r.length;i++){let o=r[i];this.matchTNodeWithReadOption(n,e,dR(e,o)),this.matchTNodeWithReadOption(n,e,su(e,n,o,!1,!1))}else r===mt?e.type&4&&this.matchTNodeWithReadOption(n,e,-1):this.matchTNodeWithReadOption(n,e,su(e,n,r,!1,!1))}matchTNodeWithReadOption(n,e,r){if(r!==null){let i=this.metadata.read;if(i!==null)if(i===N||i===et||i===B||i===mt&&e.type&4)this.addMatch(e.index,-2);else{let o=su(e,n,i,!1,!1);o!==null&&this.addMatch(e.index,o)}else this.addMatch(e.index,r)}}addMatch(n,e){this.matches===null?this.matches=[n,e]:this.matches.push(n,e)}};function dR(t,n){let e=t.localNames;if(e!==null){for(let r=0;r<e.length;r+=2)if(e[r]===n)return e[r+1]}return null}function uR(t,n){return t.type&11?Ea(t,n):t.type&4?Ou(t,n):null}function mR(t,n,e,r){return e===-1?uR(n,t):e===-2?fR(t,n,r):nl(t,t[ee],e,n)}function fR(t,n,e){if(e===N)return Ea(n,t);if(e===mt)return Ou(n,t);if(e===et)return sD(n,t);if(e===B)return new $r(n,t)}function lD(t,n,e,r){let i=n[cr].queries[r];if(i.matches===null){let o=t.data,a=e.matches,s=[];for(let l=0;a!==null&&l<a.length;l+=2){let c=a[l];if(c<0)s.push(null);else{let d=o[c];s.push(mR(n,d,a[l+1],e.metadata.read))}}i.matches=s}return i.matches}function Qh(t,n,e,r){let i=t.queries.getByIndex(e),o=i.matches;if(o!==null){let a=lD(t,n,i,e);for(let s=0;s<o.length;s+=2){let l=o[s];if(l>0)r.push(a[s/2]);else{let c=o[s+1],d=n[-l];for(let m=st;m<d.length;m++){let p=d[m];p[Mi]===p[dt]&&Qh(p[ee],p,c,r)}if(d[po]!==null){let m=d[po];for(let p=0;p<m.length;p++){let f=m[p];Qh(f[ee],f,c,r)}}}}}return r}function jg(t,n){return t[cr].queries[n].queryList}function cD(t,n,e){let r=new _o((e&4)===4);return bC(t,n,r,r.destroy),(n[cr]??=new Yh).queries.push(new qh(r))-1}function dD(t,n,e){let r=Ke();return r.firstCreatePass&&(mD(r,new vu(t,n,e),-1),(n&2)===2&&(r.staticViewQueries=!0)),cD(r,te(),n)}function uD(t,n,e,r){let i=Ke();if(i.firstCreatePass){let o=gt();mD(i,new vu(n,e,r),o.index),hR(i,t),(e&2)===2&&(i.staticContentQueries=!0)}return cD(i,te(),e)}function pR(t){return t.split(`,`).map(n=>n.trim())}function mD(t,n,e){t.queries===null&&(t.queries=new Kh),t.queries.track(new Zh(n,e))}function hR(t,n){let e=t.contentQueries||(t.contentQueries=[]);n!==(e.length?e[e.length-1]:-1)&&e.push(t.queries.length-1,n)}function zg(t,n){return t.queries.getByIndex(n)}function fD(t,n){let e=t[ee],r=zg(e,n);return r.crossesNgTemplate?Qh(e,t,n,[]):lD(e,t,r,n)}function pD(t,n,e){let r,i=Ds(()=>{r._dirtyCounter();let o=gR(r,t);if(n&&o===void 0)throw new D(-951,!1);return o});return r=i[rt],r._dirtyCounter=L(0),r._flatValue=void 0,i}function Hg(t){return pD(!0,!1,t)}function Ug(t){return pD(!0,!0,t)}function hD(t,n){let e=t[rt];e._lView=te(),e._queryIndex=n,e._queryList=jg(e._lView,n),e._queryList.onDirty(()=>e._dirtyCounter.update(r=>r+1))}function gR(t,n){let e=t._lView,r=t._queryIndex;if(e===void 0||r===void 0||e[ae]&4)return n?void 0:Bt;let i=jg(e,r),o=fD(e,r);return i.reset(o,Gw),n?i.first:i._changesDetected||t._flatValue===void 0?t._flatValue=i.toArray():t._flatValue}function Yr(t){return!!t&&typeof t.then==`function`}function $g(t){return!!t&&typeof t.subscribe==`function`}var hr=class{};var Fu=class{};var al=class extends hr{ngModuleType;_parent;_bootstrapComponents=[];_r3Injector;instance;destroyCbs=[];constructor(n,e,r,i=!0){super(),this.ngModuleType=n,this._parent=e;let o=Z_(n);this._bootstrapComponents=lT(o.bootstrap),this._r3Injector=uh(n,e,[{provide:hr,useValue:this},...r],Hs(n),new Set([`environment`])),i&&this.resolveInjectorInitializers()}resolveInjectorInitializers(){this._r3Injector.resolveInjectorInitializers(),this.instance=this._r3Injector.get(this.ngModuleType)}get injector(){return this._r3Injector}destroy(){let n=this._r3Injector;!n.destroyed&&n.destroy(),this.destroyCbs.forEach(e=>e()),this.destroyCbs=null}onDestroy(n){this.destroyCbs.push(n)}};var sl=class extends Fu{moduleType;constructor(n){super(),this.moduleType=n}create(n){return new al(this.moduleType,n,[])}};function gD(t,n,e){return new al(t,n,e,!1)}var _u=class extends hr{injector;instance=null;constructor(n){super();let e=new oo([...n.providers,{provide:hr,useValue:this}],n.parent||la(),n.debugName,new Set([`environment`]));this.injector=e,n.runEnvironmentInitializers&&e.resolveInjectorInitializers()}destroy(){this.injector.destroy()}onDestroy(n){this.injector.onDestroy(n)}};function Ma(t,n,e=null){return new _u({providers:t,parent:n,debugName:e,runEnvironmentInitializers:!0}).injector}var bR=(()=>{class t{_injector;cachedInjectors=new Map;constructor(e){this._injector=e}getOrCreateStandaloneInjector(e){if(!e.standalone)return null;if(!this.cachedInjectors.has(e)){let r=jp(!1,e.type),i=r.length>0?Ma([r],this._injector,``):null;this.cachedInjectors.set(e,i)}return this.cachedInjectors.get(e)}ngOnDestroy(){try{for(let e of this.cachedInjectors.values())e!==null&&e.destroy()}finally{this.cachedInjectors.clear()}}static ɵprov=q({token:t,providedIn:`environment`,factory:()=>new t(P(Ue))})}return t})();function F(t){return dl(()=>{let n=bD(t),e=K(b({},n),{decls:t.decls,vars:t.vars,template:t.template,consts:t.consts||null,ngContentSelectors:t.ngContentSelectors,onPush:t.changeDetection!==dg.Eager,directiveDefs:null,pipeDefs:null,dependencies:n.standalone&&t.dependencies||null,getStandaloneInjector:n.standalone?i=>i.get(bR).getOrCreateStandaloneInjector(e):null,getExternalStyles:null,signals:t.signals??!1,data:t.data||{},encapsulation:t.encapsulation||Kn.Emulated,styles:t.styles||Bt,_:null,schemas:t.schemas||null,tView:null,id:``});n.standalone&&Nn(`NgStandalone`),yD(e);let r=t.dependencies;return e.directiveDefs=yw(r,yR),e.pipeDefs=yw(r,Q_),e.id=CR(e),e})}function yR(t){return Br(t)||Nd(t)}function R(t){return dl(()=>({type:t.type,bootstrap:t.bootstrap||Bt,declarations:t.declarations||Bt,imports:t.imports||Bt,exports:t.exports||Bt,transitiveCompileScopes:null,schemas:t.schemas||null,id:t.id||null}))}function vR(t,n){if(t==null)return Si;let e={};for(let r in t)if(Object.hasOwn(t,r)){let i=t[r],o,a,s,l;Array.isArray(i)?(s=i[0],o=i[1],a=i[2]??o,l=i[3]||null):(o=i,a=i,s=pl.None,l=null),e[o]=[r,s,l],n[o]=a}return e}function _R(t){if(t==null)return Si;let n={};for(let e in t)Object.hasOwn(t,e)&&(n[t[e]]=e);return n}function w(t){return dl(()=>{let n=bD(t);return yD(n),n})}function bD(t){let n={};return{type:t.type,providersResolver:null,viewProvidersResolver:null,factory:null,hostBindings:t.hostBindings||null,hostVars:t.hostVars||0,hostAttrs:t.hostAttrs||null,contentQueries:t.contentQueries||null,declaredInputs:n,inputConfig:t.inputs||Si,exportAs:t.exportAs||null,standalone:t.standalone??!0,signals:t.signals===!0,selectors:t.selectors||Bt,viewQuery:t.viewQuery||null,features:t.features||null,setInput:null,resolveHostDirectives:null,hostDirectives:null,controlDef:null,signalFormsInputPresence:null,inputs:vR(t.inputs,n),outputs:_R(t.outputs),debugInfo:null}}function yD(t){t.features?.forEach(n=>n(t))}function yw(t,n){return t?()=>{let e=typeof t==`function`?t():t,r=[];for(let i of e){let o=n(i);o!==null&&r.push(o)}return r}:null}function CR(t){let n=0,e=typeof t.consts==`function`?``:t.consts,r=[t.selectors,t.ngContentSelectors,t.hostVars,t.hostAttrs,e,t.vars,t.decls,t.encapsulation,t.standalone,t.signals,t.exportAs,JSON.stringify(t.inputs),JSON.stringify(t.outputs),Object.getOwnPropertyNames(t.type.prototype),!!t.contentQueries,!!t.viewQuery];for(let o of r.join(`|`))n=Math.imul(31,n)+o.charCodeAt(0)<<0;return n+=2147483648,`c`+n}var Gg=new g(``);function Pu(t){return lr([{provide:Gg,multi:!0,useValue:t}])}var Wg=(()=>{class t{resolve;reject;initialized=!1;done=!1;donePromise=new Promise((e,r)=>{this.resolve=e,this.reject=r});appInits=u(Gg,{optional:!0})??[];injector=u(B);constructor(){}runInitializers(){if(this.initialized)return;let e=[];for(let i of this.appInits){let o=ht(this.injector,i);if(Yr(o))e.push(o);else if($g(o)){let a=new Promise((s,l)=>{o.subscribe({complete:s,error:l})});e.push(a)}}let r=()=>{this.done=!0,this.resolve()};Promise.all(e).then(()=>{r()}).catch(i=>{this.reject(i)}),e.length===0&&r(),this.initialized=!0}static ɵfac=function(r){return new(r||t)};static ɵprov=S({token:t,factory:t.ɵfac})}return t})();function Lu(t){return n=>{n.controlDef={create:(e,r)=>{e?.ɵngControlCreate(r)},update:(e,r)=>{e?.ɵngControlUpdate?.(r)},passThroughInput:t}}}function DR(t){return Object.getPrototypeOf(t.prototype).constructor}function re(t){let n=DR(t.type),e=!0,r=[t];for(;n&&n!==Function.prototype&&n!==Object.prototype;){let i,o=Object.hasOwn(n,$s)?n[$s]:void 0,a=Object.hasOwn(n,Gs)?n[Gs]:void 0;if(ur(t))i=o??a;else{if(o)throw new D(903,!1);i=a}if(i){if(e){r.push(i);let l=t;l.inputs=_h(t.inputs),l.declaredInputs=_h(t.declaredInputs),l.outputs=_h(t.outputs);let c=i.hostBindings;c&&IR(t,c);let d=i.viewQuery,m=i.contentQueries;if(d&&kR(t,d),m&&MR(t,m),SR(t,i),K_(t.outputs,i.outputs),ur(i)&&i.data.animation){let p=t.data;p.animation=(p.animation||[]).concat(i.data.animation)}}let s=i.features;if(s)for(let l=0;l<s.length;l++){let c=s[l];c&&c.ngInherit&&c(t),c===re&&(e=!1)}}n=Object.getPrototypeOf(n)}ER(r)}function SR(t,n){for(let e in n.inputs){if(!Object.hasOwn(n.inputs,e)||Object.hasOwn(t.inputs,e))continue;let r=n.inputs[e];r!==void 0&&(t.inputs[e]=r,t.declaredInputs[e]=n.declaredInputs[e])}}function ER(t){let n=0,e=null;for(let r=t.length-1;r>=0;r--){let i=t[r];i.hostVars=n+=i.hostVars,i.hostAttrs=wa(i.hostAttrs,e=wa(e,i.hostAttrs))}}function _h(t){return t===Si?{}:t===Bt?[]:t}function kR(t,n){let e=t.viewQuery;e?t.viewQuery=(r,i)=>{n(r,i),e(r,i)}:t.viewQuery=n}function MR(t,n){let e=t.contentQueries;e?t.contentQueries=(r,i,o)=>{n(r,i,o),e(r,i,o)}:t.contentQueries=n}function IR(t,n){let e=t.hostBindings;e?t.hostBindings=(r,i)=>{n(r,i),e(r,i)}:t.hostBindings=n}function _D(t,n,e,r,i,o,a,s){if(e.firstCreatePass){t.mergedAttrs=wa(t.mergedAttrs,t.attrs);let d=t.tView=Ig(2,t,i,o,a,e.directiveRegistry,e.pipeRegistry,null,e.schemas,e.consts,null);e.queries!==null&&(e.queries.template(e,t),d.queries=e.queries.embeddedTView(t))}s&&(t.flags|=s),pa(t,!1);let l=TR(e,n,t,r);Yd()&&kg(e,n,l,t),xa(l,n);let c=$x(l,n,l,t);n[r+at]=c,Tg(n,c),lR(c,t,n)}function NR(t,n,e,r,i,o,a,s,l,c,d){let m=e+at,p;return n.firstCreatePass?(p=ka(n,m,4,a||null,s||null),Hd()&&rD(n,t,p,Mn(n.consts,c),Ag),Aw(n,p)):p=n.data[m],_D(p,t,n,e,r,i,o,l),ma(p)&&Au(n,t,p),c!=null&&hl(t,p,d),p}function ll(t,n,e,r,i,o,a,s,l,c,d){let m=e+at,p;if(n.firstCreatePass){if(p=ka(n,m,4,a||null,s||null),c!=null){let f=Mn(n.consts,c);p.localNames=[];for(let h=0;h<f.length;h+=2)p.localNames.push(f[h],-1)}}else p=n.data[m];return _D(p,t,n,e,r,i,o,l),c!=null&&hl(t,p,d),p}function wt(t,n,e,r,i,o,a,s){let l=te(),c=Ke();return NR(l,c,t,n,e,r,i,Mn(c.consts,o),void 0,a,s),wt}var TR=AR;function AR(t,n,e,r){return Xs(!0),n[$e].createComment(``)}var Vu=(()=>{class t{log(e){console.log(e)}warn(e){console.warn(e)}static ɵfac=function(r){return new(r||t)};static ɵprov=q({token:t,factory:t.ɵfac,providedIn:`platform`})}return t})();var Bu=new g(``);var Ia=new g(``);var Yg=new g(`USE_PENDING_TASKS`,{providedIn:`root`,factory:()=>typeof Zone>`u`});var yl=(()=>{class t{_ngZone;registry;_isZoneStable=!0;_callbacks=[];_taskTrackingZone=null;_destroyRef;pendingTasksInternal=u(Wn);_usePendingTasks=u(Yg);constructor(e,r,i){this._ngZone=e,this.registry=r,Up()&&(this._destroyRef=u(ut,{optional:!0})??void 0),Kg||(CD(i),i.addToWindow(r)),this._watchAngularEvents(),e.run(()=>{this._taskTrackingZone=typeof Zone>`u`?null:Zone.current.get(`TaskTrackingZone`)})}_watchAngularEvents(){let e=this._ngZone.onUnstable.subscribe({next:()=>{this._isZoneStable=!1}}),r,i;this._ngZone.runOutsideAngular(()=>{this._usePendingTasks&&(r=this.pendingTasksInternal.hasPendingTasksObservable.subscribe(()=>{this.isStable()&&this._ngZone.runOutsideAngular(()=>{this._runCallbacksIfReady()})})),i=this._ngZone.onStable.subscribe({next:()=>{T.assertNotInAngularZone(),queueMicrotask(()=>{this._isZoneStable=!0,this._runCallbacksIfReady()})}})}),this._destroyRef?.onDestroy(()=>{e.unsubscribe(),r?.unsubscribe(),i.unsubscribe()})}isStable(){return this._isZoneStable&&!this._ngZone.hasPendingMacrotasks&&(!this._usePendingTasks||!this.pendingTasksInternal.hasPendingTasks)}_runCallbacksIfReady(){if(this.isStable())queueMicrotask(()=>{for(;this._callbacks.length!==0;){let e=this._callbacks.pop();clearTimeout(e.timeoutId),e.doneCb()}});else{let e=this.getPendingTasks();this._callbacks=this._callbacks.filter(r=>r.updateCb&&r.updateCb(e)?(clearTimeout(r.timeoutId),!1):!0)}}getPendingTasks(){return this._taskTrackingZone?this._taskTrackingZone.macroTasks.map(e=>({source:e.source,creationLocation:e.creationLocation,data:e.data})):[]}addCallback(e,r,i){let o=-1;r&&r>0&&(o=setTimeout(()=>{this._callbacks=this._callbacks.filter(a=>a.timeoutId!==o),e()},r)),this._callbacks.push({doneCb:e,timeoutId:o,updateCb:i})}whenStable(e,r,i){if(i&&!this._taskTrackingZone)throw new Error(`Task tracking zone is required when passing an update callback to whenStable(). Is "zone.js/plugins/task-tracking" loaded?`);this.addCallback(e,r,i),this._runCallbacksIfReady()}registerApplication(e){this.registry.registerApplication(e,this)}unregisterApplication(e){this.registry.unregisterApplication(e)}findProviders(e,r,i){return[]}static ɵfac=function(r){return new(r||t)(P(T),P(vl),P(Ia))};static ɵprov=q({token:t,factory:t.ɵfac})}return t})();var vl=(()=>{class t{_applications=new Map;registerApplication(e,r){this._applications.set(e,r)}unregisterApplication(e){this._applications.delete(e)}unregisterAllApplications(){this._applications.clear()}getTestability(e){return this._applications.get(e)||null}getAllTestabilities(){return Array.from(this._applications.values())}getAllRootElements(){return Array.from(this._applications.keys())}findTestabilityInTree(e,r=!0){return Kg?.findTestabilityInTree(this,e,r)??null}static ɵfac=function(r){return new(r||t)};static ɵprov=q({token:t,factory:t.ɵfac,providedIn:`platform`})}return t})();function CD(t){Kg=t}var Kg;var _l=new g(``);function wD(){Yf(t=>{throw new D(-600,``)})}var RR=10;function Zg(t,n){return Array.isArray(n)?n.reduce(Zg,t):b(b({},t),n)}var Rt=(()=>{class t{_runningTick=!1;_destroyed=!1;_destroyListeners=[];_views=[];internalErrorHandler=u(un);afterRenderManager=u(Iu);zonelessEnabled=u(ga);rootEffectScheduler=u(Xd);dirtyFlags=0;tracingSnapshot=null;allTestViews=new Set;autoDetectTestViews=new Set;includeAllTestViews=!1;afterTick=new _;get allViews(){return[...(this.includeAllTestViews?this.allTestViews:this.autoDetectTestViews).keys(),...this._views]}get destroyed(){return this._destroyed}componentTypes=[];components=[];internalPendingTask=u(Wn);get isStable(){return this.internalPendingTask.hasPendingTasksObservable.pipe(oe(e=>!e))}constructor(){u(In,{optional:!0})}whenStable(){let e;return new Promise(r=>{e=this.isStable.subscribe({next:i=>{i&&r()}})}).finally(()=>{e.unsubscribe()})}_injector=u(Ue);_rendererFactory=null;get injector(){return this._injector}bootstrap(e,r){return this.bootstrapImpl(e,r)}bootstrapImpl(e,r,i=B.NULL){return this._injector.get(T).run(()=>{if(We(Le.BootstrapComponentStart),!this._injector.get(Wg).done)throw new D(405,``);let s=Br(e),l=this._injector.get(hr),c=new wo(s,l);this.componentTypes.push(e);let{hostElement:d,directives:m,bindings:p}=OR(r),f=d||c.selector,h=c.create(i,[],f,l.injector,m,p),v=h.location.nativeElement,M=h.injector.get(Bu,null);return M?.registerApplication(v),h.onDestroy(()=>{this.detachView(h.hostView),tl(this.components,h),M?.unregisterApplication(v)}),this._loadComponent(h),We(Le.BootstrapComponentEnd,h),h})}tick(){this.zonelessEnabled||(this.dirtyFlags|=1),this._tick()}_tick(){We(Le.ChangeDetectionStart),this.tracingSnapshot!==null?this.tracingSnapshot.run(Mu.CHANGE_DETECTION,this.tickImpl):this.tickImpl()}tickImpl=()=>{if(this._runningTick)throw We(Le.ChangeDetectionEnd),new D(101,!1);let e=Z(null);try{this._runningTick=!0,this.synchronize()}finally{this._runningTick=!1,this.tracingSnapshot?.dispose(),this.tracingSnapshot=null,Z(e),this.afterTick.next(),We(Le.ChangeDetectionEnd)}};synchronize(){this._rendererFactory===null&&!this._injector.destroyed&&(this._rendererFactory=this._injector.get(bt,null,{optional:!0}));let e=0;for(;this.dirtyFlags!==0&&e++<RR;){We(Le.ChangeDetectionSyncStart);try{this.synchronizeOnce()}finally{We(Le.ChangeDetectionSyncEnd)}}}synchronizeOnce(){this.dirtyFlags&16&&(this.dirtyFlags&=-17,this.rootEffectScheduler.flush());let e=!1;if(this.dirtyFlags&7){let r=!!(this.dirtyFlags&1);this.dirtyFlags&=-8,this.dirtyFlags|=8;for(let{_lView:i}of this.allViews){if(!r&&!Zs(i))continue;jx(i,r&&!this.zonelessEnabled?0:1),e=!0}if(this.dirtyFlags&=-5,this.syncDirtyFlagsWithViews(),this.dirtyFlags&23)return}e||(this._rendererFactory?.begin?.(),this._rendererFactory?.end?.()),this.dirtyFlags&8&&(this.dirtyFlags&=-9,this.afterRenderManager.execute()),this.syncDirtyFlagsWithViews()}syncDirtyFlagsWithViews(){if(this.allViews.some(({_lView:e})=>Zs(e))){this.dirtyFlags|=2;return}else this.dirtyFlags&=-8}attachView(e){let r=e;this._views.push(r),r.attachToAppRef(this)}detachView(e){let r=e;tl(this._views,r),r.detachFromAppRef()}_loadComponent(e){this.attachView(e.hostView);try{this.tick()}catch(i){this.internalErrorHandler(i)}this.components.push(e),this._injector.get(_l,[]).forEach(i=>i(e))}ngOnDestroy(){if(!this._destroyed)try{this._destroyListeners.forEach(e=>e()),this._views.slice().forEach(e=>e.destroy())}finally{this._destroyed=!0,this._views=[],this._destroyListeners=[]}}onDestroy(e){return this._destroyListeners.push(e),()=>tl(this._destroyListeners,e)}destroy(){if(this._destroyed)throw new D(406,!1);let e=this._injector;e.destroy&&!e.destroyed&&e.destroy()}get viewCount(){return this._views.length}static ɵfac=function(r){return new(r||t)};static ɵprov=S({token:t,factory:t.ɵfac})}return t})();function OR(t){return t===void 0||typeof t==`string`||t instanceof Element?{hostElement:t}:t}function tl(t,n){let e=t.indexOf(n);e>-1&&t.splice(e,1)}function ju(t,n){let e=te();if(on(e,mr(),n)){let i=Ke(),o=Ni();if(Ru(o,i,e,t,n))dr(o)&&Rx(e,o.index);else{let s=nn(o,e);Ox(e[$e],s,null,o.value,t,n,null)}}return ju}function Y(t,n,e,r){let i=te();if(on(i,mr(),n)){Ke();ZT(Ni(),i,t,n,e,r)}return Y}var Jh=class{destroy(n){}updateValue(n,e){}swap(n,e){let r=Math.min(n,e),i=Math.max(n,e),o=this.detach(i);if(i-r>1){let a=this.detach(r);this.attach(r,o),this.attach(i,a)}else this.attach(r,o)}move(n,e){this.attach(e,this.detach(n))}};function Ch(t,n,e,r,i){return t===e&&Object.is(n,r)?1:Object.is(i(t,n),i(e,r))?-1:0}function FR(t,n,e,r){let i,o,a=0,s=t.length-1;if(Array.isArray(n)){Z(r);let c=n.length-1;for(Z(null);a<=s&&a<=c;){let d=t.at(a),m=n[a],p=Ch(a,d,a,m,e);if(p!==0){p<0&&t.updateValue(a,m),a++;continue}let f=t.at(s),h=n[c],v=Ch(s,f,c,h,e);if(v!==0){v<0&&t.updateValue(s,h),s--,c--;continue}let M=e(a,d),V=e(s,f),O=e(a,m);if(Object.is(O,V)){let pe=e(c,h);Object.is(pe,M)?(t.swap(a,s),t.updateValue(s,h),c--,s--):t.move(s,a),t.updateValue(a,m),a++;continue}if(i??=new Cu,o??=_w(t,a,s,e),eg(t,i,a,O))t.updateValue(a,m),a++,s++;else if(o.has(O))i.set(M,t.detach(a)),s--;else{let pe=t.create(a,n[a]);t.attach(a,pe),a++,s++}}for(;a<=c;)vw(t,i,e,a,n[a]),a++}else if(n!=null){Z(r);let c=n[Symbol.iterator]();Z(null);let d=c.next();for(;!d.done&&a<=s;){let m=t.at(a),p=d.value,f=Ch(a,m,a,p,e);if(f!==0)f<0&&t.updateValue(a,p),a++,d=c.next();else{i??=new Cu,o??=_w(t,a,s,e);let h=e(a,p);if(eg(t,i,a,h))t.updateValue(a,p),a++,s++,d=c.next();else if(!o.has(h))t.attach(a,t.create(a,p)),a++,s++,d=c.next();else{let v=e(a,m);i.set(v,t.detach(a)),s--}}}for(;!d.done;)vw(t,i,e,t.length,d.value),d=c.next()}for(;a<=s;)t.destroy(t.detach(s--));i?.forEach(c=>{t.destroy(c)})}function eg(t,n,e,r){return n!==void 0&&n.has(r)?(t.attach(e,n.get(r)),n.delete(r),!0):!1}function vw(t,n,e,r,i){if(eg(t,n,r,e(r,i)))t.updateValue(r,i);else{let o=t.create(r,i);t.attach(r,o)}}function _w(t,n,e,r){let i=new Set;for(let o=n;o<=e;o++)i.add(r(o,t.at(o)));return i}var Cu=class{kvMap=new Map;_vMap=void 0;has(n){return this.kvMap.has(n)}delete(n){if(!this.has(n))return!1;let e=this.kvMap.get(n);return this._vMap!==void 0&&this._vMap.has(e)?(this.kvMap.set(n,this._vMap.get(e)),this._vMap.delete(e)):this.kvMap.delete(n),!0}get(n){return this.kvMap.get(n)}set(n,e){if(this.kvMap.has(n)){let r=this.kvMap.get(n);this._vMap===void 0&&(this._vMap=new Map);let i=this._vMap;for(;i.has(r);)r=i.get(r);i.set(r,e)}else this.kvMap.set(n,e)}forEach(n){for(let[e,r]of this.kvMap)if(n(r,e),this._vMap!==void 0){let i=this._vMap;for(;i.has(r);)r=i.get(r),n(r,e)}}};function le(t,n,e,r,i,o,a,s){Nn(`NgControlFlow`);let l=te(),c=Ke();return ll(l,c,t,n,e,r,i,Mn(c.consts,o),256,a,s),Qg}function Qg(t,n,e,r,i,o,a,s){return Nn(`NgControlFlow`),PR(t,n,e,r,i,o,a,s),Qg}function PR(t,n,e,r,i,o,a,s){let l=te(),c=Ke();ll(l,c,t,n,e,r,i,Mn(c.consts,o),512,a,s)}function ce(t,n){Nn(`NgControlFlow`);let e=te(),r=mr(),i=e[r]!==Ut?e[r]:-1,o=i!==-1?wu(e,at+i):void 0,a=0;if(on(e,r,t)){let s=Z(null);try{if(o!==void 0&&Wx(o,a),t!==-1){let l=at+t,c=wu(e,l),d=ig(e[ee],l),m=Yx(c,d,e);bl(c,gl(e,d,n,{dehydratedView:m}),a,Da(d,m))}}finally{Z(s)}}else if(o!==void 0){let s=Gx(o,a);s!==void 0&&(s[ot]=n)}}var tg=class{lContainer;$implicit;$index;constructor(n,e,r){this.lContainer=n,this.$implicit=e,this.$index=r}get $count(){return this.lContainer.length-st}};function Xg(t,n){return n}var ng=class{hasEmptyBlock;trackByFn;liveCollection;constructor(n,e,r){this.hasEmptyBlock=n,this.trackByFn=e,this.liveCollection=r}};function Eo(t,n,e,r,i,o,a,s,l,c,d,m,p){Nn(`NgControlFlow`);let f=te(),h=Ke(),v=l!==void 0,M=te(),O=new ng(v,s?a.bind(M[zt][ot]):a);M[at+t]=O,ll(f,h,t+1,n,e,r,i,Mn(h.consts,o),256),v&&ll(f,h,t+2,l,c,d,m,Mn(h.consts,p),512)}var rg=class extends Jh{lContainer;hostLView;templateTNode;operationsCounter=void 0;needsIndexUpdate=!1;constructor(n,e,r){super(),this.lContainer=n,this.hostLView=e,this.templateTNode=r}get length(){return this.lContainer.length-st}at(n){return this.getLView(n)[ot].$implicit}attach(n,e){let r=e[co];this.needsIndexUpdate||=n!==this.length,bl(this.lContainer,e,n,Da(this.templateTNode,r)),LR(this.lContainer,n)}detach(n){return this.needsIndexUpdate||=n!==this.length-1,VR(this.lContainer,n),BR(this.lContainer,n)}create(n,e){let r=fu(this.lContainer,this.templateTNode.tView.ssrId);return gl(this.hostLView,this.templateTNode,new tg(this.lContainer,e,n),{dehydratedView:r})}destroy(n){Nu(n[ee],n)}updateValue(n,e){this.getLView(n)[ot].$implicit=e}reset(){this.needsIndexUpdate=!1}updateIndexes(){if(this.needsIndexUpdate)for(let n=0;n<this.length;n++)this.getLView(n)[ot].$index=n}getLView(n){return jR(this.lContainer,n)}};function ko(t){let n=Z(null),e=Gn();try{let r=te(),i=r[ee],o=r[e],a=e+1,s=wu(r,a);if(o.liveCollection===void 0)o.liveCollection=new rg(s,r,ig(i,a));else o.liveCollection.reset();let l=o.liveCollection;if(FR(l,t,o.trackByFn,n),l.updateIndexes(),o.hasEmptyBlock){let c=mr(),d=l.length===0;if(on(r,c,d)){let m=e+2,p=wu(r,m);if(d){let f=ig(i,m),h=Yx(p,f,r);bl(p,gl(r,f,void 0,{dehydratedView:h}),0,Da(f,h))}else i.firstUpdatePass&&_A(p),Wx(p,0)}}}finally{Z(n)}}function wu(t,n){return t[n]}function LR(t,n){if(t.length<=st)return;let r=t[st+n];r&&kT(r)}function VR(t,n){if(t.length<=st)return;let r=t[st+n];r&&ET(r)}function BR(t,n){return ol(t,n)}function jR(t,n){return Gx(t,n)}function ig(t,n){return Vd(t,n)}function ue(t,n,e){let r=te();if(on(r,mr(),n)){Ke();Nx(Ni(),r,t,n,r[$e],e)}return ue}function og(t,n,e,r,i){Ru(n,t,e,i?`class`:`style`,r)}function C(t,n,e,r){let i=te(),o=i[ee],a=t+at,s=o.firstCreatePass?Vg(a,i,2,n,Ag,Hd(),e,r):o.data[a];if(dr(s)){let l=i[$n].tracingService;if(l&&l.componentCreate){let c=o.data[s.directiveStart+s.componentOffset];return l.componentCreate(Qx(c),()=>(Cw(t,n,i,s,r),C))}}return Cw(t,n,i,s,r),C}function Cw(t,n,e,r,i){if(Rg(r,e,t,n,xD),ma(r)){let o=e[ee];Au(o,e,r),fg(o,r,e)}i!=null&&hl(e,r)}function E(){let t=Ke(),e=Og(gt());return t.firstCreatePass&&Bg(t,e),th(e)&&nh(),Jp(),e.classesWithoutHost!=null&&lN(e)&&og(t,e,te(),e.classesWithoutHost,!0),e.stylesWithoutHost!=null&&cN(e)&&og(t,e,te(),e.stylesWithoutHost,!1),E}function we(t,n,e,r){return C(t,n,e,r),E(),we}function Re(t,n,e,r){let i=te(),o=i[ee],a=t+at,s=o.firstCreatePass?WA(a,o,2,n,e,r):o.data[a];return Rg(s,i,t,n,xD),r!=null&&hl(i,s),Re}function Oe(){return th(Og(gt()))&&nh(),Jp(),Oe}function $t(t,n,e,r){return Re(t,n,e,r),Oe(),$t}var xD=(t,n,e,r,i)=>(Xs(!0),dx(n[$e],r,dh()));function Cl(t,n,e){let r=te(),i=r[ee],o=t+at,a=i.firstCreatePass?Vg(o,r,8,`ng-container`,Ag,Hd(),n,e):i.data[o];if(Rg(a,r,t,`ng-container`,zR),ma(a)){let s=r[ee];Au(s,r,a),fg(s,a,r)}return e!=null&&hl(r,a),Cl}function wl(){let t=Ke(),e=Og(gt());return t.firstCreatePass&&Bg(t,e),wl}function kt(t,n,e){return Cl(t,n,e),wl(),kt}var zR=(t,n,e,r,i)=>(Xs(!0),tT(n[$e],``));function an(){return te()}function yt(t,n,e){let r=te();if(on(r,mr(),n)){Ke();Tx(Ni(),r,t,n,r[$e],e)}return yt}var xl=`en-US`;function DD(t){typeof t==`string`&&t.toLowerCase().replace(/_/g,`-`)}function Q(t,n,e){let r=te(),i=Ke(),o=gt();return SD(i,r,r[$e],o,t,n,e),Q}function Na(t,n,e){let r=te(),i=Ke(),o=gt();return(o.type&3||e)&&tD(o,i,r,e,r[$e],t,n,Ca(o,r,n)),Na}function SD(t,n,e,r,i,o,a){let s=!0,l=null;if((r.type&3||a)&&(l??=Ca(r,n,o),tD(r,t,n,a,e,i,o,l)&&(s=!1)),s){let c=r.outputs?.[i],d=r.hostDirectiveOutputs?.[i];if(d&&d.length)for(let m=0;m<d.length;m+=2){let p=d[m],f=d[m+1];l??=Ca(r,n,o),hu(r,n,p,f,i,l)}if(c&&c.length)for(let m of c)l??=Ca(r,n,o),hu(r,n,m,i,i,l)}}function J(t=1){return TC(t)}function UR(t,n){let e=null,r=pT(t);for(let i=0;i<n.length;i++){let o=n[i];if(o===`*`){e=i;continue}if(r===null?yx(t,o,!0):bT(r,o))return i}return e}function Me(t){let n=te()[zt][Tt];if(!n.projection){let r=n.projection=rC(t?t.length:1,null),i=r.slice(),o=n.child;for(;o!==null;){if(o.type!==128){let a=t?UR(o,t):0;a!==null&&(i[a]?i[a].projectionNext=o:r[a]=o,i[a]=o)}o=o.next}}}function X(t,n=0,e,r,i,o){let a=te(),s=Ke(),l=r?t+1:null;l!==null&&ll(a,s,l,r,i,o,null,e);let c=ka(s,at+t,16,null,e||null);c.projection===null&&(c.projection=n),oh();let m=!a[co]||eh();a[zt][Tt].projection[c.projection]===null&&l!==null?$R(a,s,l):m&&!Eu(c)&&LT(s,a,c)}function $R(t,n,e){let r=at+e,i=n.data[r],o=t[r],a=fu(o,i.tView.ssrId);bl(o,gl(t,i,void 0,{dehydratedView:a}),0,Da(i,a))}function Mt(t,n,e,r){return uD(t,n,e,r),Mt}function qe(t,n,e){return dD(t,n,e),qe}function H(t){let n=te(),e=Ke(),r=Gd();Qs(r+1);let i=zg(e,r);if(t.dirty&&fC(n)===((i.metadata.flags&2)===2)){if(i.matches===null)t.reset([]);else{let o=fD(n,r);t.reset(o,Gw),t.notifyOnChanges()}return!0}return!1}function U(){return jg(te(),Gd())}function zu(t,n,e,r,i){return hD(n,uD(t,e,r,i)),zu}function Hu(t,n,e,r){return hD(t,dD(n,e,r)),Hu}function Uu(t=1){Qs(Gd()+t)}function gr(t){return mC(CC(),at+t)}function ru(t,n){return t<<17|n<<2}function xo(t){return t>>17&32767}function GR(t){return(t&2)==2}function WR(t,n){return t&131071|n<<17}function ag(t){return t|2}function Sa(t){return(t&131068)>>2}function wh(t,n){return t&-131069|n<<2}function qR(t){return(t&1)===1}function sg(t){return t|1}function YR(t,n,e,r,i,o){let a=o?n.classBindings:n.styleBindings,s=xo(a),l=Sa(a);t[r]=e;let c=!1,d;if(Array.isArray(e)){let m=e;d=m[1],(d===null||sa(m,d)>0)&&(c=!0)}else d=e;if(i)if(l!==0){let p=xo(t[s+1]);t[r+1]=ru(p,s),p!==0&&(t[p+1]=wh(t[p+1],r)),t[s+1]=WR(t[s+1],r)}else t[r+1]=ru(s,0),s!==0&&(t[s+1]=wh(t[s+1],r)),s=r;else t[r+1]=ru(l,0),s===0?s=r:t[l+1]=wh(t[l+1],r),l=r;c&&(t[r+1]=ag(t[r+1])),ww(t,d,r,!0),ww(t,d,r,!1),KR(n,d,t,r,o),a=ru(s,l),o?n.classBindings=a:n.styleBindings=a}function KR(t,n,e,r,i){let o=i?t.residualClasses:t.residualStyles;o!=null&&typeof n==`string`&&sa(o,n)>=0&&(e[r+1]=sg(e[r+1]))}function ww(t,n,e,r){let i=t[e+1],o=n===null,a=r?xo(i):Sa(i),s=!1;for(;a!==0&&(s===!1||o);){let l=t[a],c=t[a+1];ZR(l,n)&&(s=!0,t[a+1]=r?sg(c):ag(c)),a=r?xo(c):Sa(c)}s&&(t[e+1]=r?ag(i):sg(i))}function ZR(t,n){return t===null||n==null||(Array.isArray(t)?t[1]:t)===n?!0:Array.isArray(t)&&typeof n==`string`?sa(t,n)>=0:!1}var Yn={textEnd:0,key:0,keyEnd:0,value:0,valueEnd:0};function QR(t){return t.substring(Yn.key,Yn.keyEnd)}function XR(t){return JR(t),ED(t,kD(t,0,Yn.textEnd))}function ED(t,n){let e=Yn.textEnd;return e===n?-1:(n=Yn.keyEnd=eO(t,Yn.key=n,e),kD(t,n,e))}function JR(t){Yn.key=0,Yn.keyEnd=0,Yn.value=0,Yn.valueEnd=0,Yn.textEnd=t.length}function kD(t,n,e){for(;n<e&&t.charCodeAt(n)<=32;)n++;return n}function eO(t,n,e){for(;n<e&&t.charCodeAt(n)>32;)n++;return n}function Kr(t,n,e){return MD(t,n,e,!1),Kr}function G(t,n){return MD(t,n,null,!0),G}function Ot(t){nO(lO,tO,t,!0)}function tO(t,n){for(let e=XR(n);e>=0;e=ED(n,e))Od(t,QR(n),!0)}function MD(t,n,e,r){let i=te(),o=Ke(),a=Ud(2);if(o.firstUpdatePass&&ND(o,t,a,r),n!==Ut&&on(i,a,n)){let s=o.data[Gn()];TD(o,s,i,i[$e],t,i[a+1]=dO(n,e),r,a)}}function nO(t,n,e,r){let i=Ke(),o=Ud(2);i.firstUpdatePass&&ND(i,null,o,r);let a=te();if(e!==Ut&&on(a,o,e)){let s=i.data[Gn()];if(AD(s,r)&&!ID(i,o)){let l=r?s.classesWithoutHost:s.stylesWithoutHost;l!==null&&(e=Md(l,e||``)),og(i,s,a,e,r)}else cO(i,s,a,a[$e],a[o+1],a[o+1]=sO(t,n,e),r,o)}}function ID(t,n){return n>=t.expandoStartIndex}function ND(t,n,e,r){let i=t.data;if(i[e+1]===null){let o=i[Gn()],a=ID(t,e);AD(o,r)&&n===null&&!a&&(n=!1),n=rO(i,o,n,r),YR(i,o,n,e,a,r)}}function rO(t,n,e,r){let i=kC(t),o=r?n.residualClasses:n.residualStyles;if(i===null)(r?n.classBindings:n.styleBindings)===0&&(e=xh(null,t,n,e,r),e=cl(e,n.attrs,r),o=null);else{let a=n.directiveStylingLast;if(a===-1||t[a]!==i)if(e=xh(i,t,n,e,r),o===null){let l=iO(t,n,r);l!==void 0&&Array.isArray(l)&&(l=xh(null,t,n,l[1],r),l=cl(l,n.attrs,r),oO(t,n,r,l))}else o=aO(t,n,r)}return o!==void 0&&(r?n.residualClasses=o:n.residualStyles=o),e}function iO(t,n,e){let r=e?n.classBindings:n.styleBindings;if(Sa(r)!==0)return t[xo(r)]}function oO(t,n,e,r){let i=e?n.classBindings:n.styleBindings;t[xo(i)]=r}function aO(t,n,e){let r,i=n.directiveEnd;for(let o=1+n.directiveStylingLast;o<i;o++){let a=t[o].hostAttrs;r=cl(r,a,e)}return cl(r,n.attrs,e)}function xh(t,n,e,r,i){let o=null,a=e.directiveEnd,s=e.directiveStylingLast;for(s===-1?s=e.directiveStart:s++;s<a&&(o=n[s],r=cl(r,o.hostAttrs,i),o!==t);)s++;return t!==null&&(e.directiveStylingLast=s),r}function cl(t,n,e){let r=e?1:2,i=-1;if(n!==null)for(let o=0;o<n.length;o++){let a=n[o];typeof a==`number`?i=a:i===r&&(Array.isArray(t)||(t=t===void 0?[]:[``,t]),Od(t,a,e?!0:n[++o]))}return t===void 0?null:t}function sO(t,n,e){if(e==null||e===``)return Bt;let r=[],i=rn(e);if(Array.isArray(i))for(let o=0;o<i.length;o++)t(r,i[o],!0);else if(i instanceof Set)for(let o of i)t(r,o,!0);else if(typeof i==`object`)for(let o in i)Object.hasOwn(i,o)&&t(r,o,i[o]);else typeof i==`string`&&n(r,i);return r}function lO(t,n,e){let r=String(n);r!==``&&!r.includes(` `)&&Od(t,r,e)}function cO(t,n,e,r,i,o,a,s){i===Ut&&(i=Bt);let l=0,c=0,d=0<i.length?i[0]:null,m=0<o.length?o[0]:null;for(;d!==null||m!==null;){let p=l<i.length?i[l+1]:void 0,f=c<o.length?o[c+1]:void 0,h=null,v;d===m?(l+=2,c+=2,p!==f&&(h=m,v=f)):m===null||d!==null&&d<m?(l+=2,h=d):(c+=2,h=m,v=f),h!==null&&TD(t,n,e,r,h,v,a,s),d=l<i.length?i[l]:null,m=c<o.length?o[c]:null}}function TD(t,n,e,r,i,o,a,s){if(!(n.type&3))return;let l=t.data,c=l[s+1];if(!xu(qR(c)?xw(l,n,e,i,Sa(c),a):void 0)){xu(o)||GR(c)&&(o=xw(l,null,e,i,s,a));BT(r,a,Yp(Gn(),e),i,o)}}function xw(t,n,e,r,i,o){let a=n===null,s;for(;i>0;){let l=t[i],c=Array.isArray(l),d=c?l[1]:l,m=d===null,p=e[i+1];p===Ut&&(p=m?Bt:void 0);let f=m?Fd(p,r):d===r?p:void 0;if(c&&!xu(f)&&(f=Fd(l,r)),xu(f)&&(s=f,a))return s;let h=t[i+1];i=a?xo(h):Sa(h)}if(n!==null){let l=o?n.residualClasses:n.residualStyles;l!=null&&(s=Fd(l,r))}return s}function xu(t){return t!==void 0}function dO(t,n){return t==null||t===``||(typeof n==`string`?t=rn(t)+n:typeof t==`object`&&(t=Hs(rn(t)))),t}function AD(t,n){return(t.flags&(n?8:16))!==0}function Ne(t,n=``){let e=te(),r=Ke(),i=t+at,o=r.firstCreatePass?ka(r,i,1,n,null):r.data[i],a=uO(r,e,o,n);e[i]=a,Yd()&&kg(r,e,a,o),pa(o,!1)}var uO=(t,n,e,r)=>(Xs(!0),JN(n[$e],r));function mO(t,n,e,r=``){return on(t,mr(),e)?n+lo(e)+r:Ut}function fO(t,n,e,r,i,o=``){let s=EA(t,wC(),e,i);return Ud(2),s?n+lo(e)+r+lo(i)+o:Ut}function Ft(t){return vt(``,t),Ft}function vt(t,n,e){let r=te(),i=mO(r,t,n,e);return i!==Ut&&RD(r,Gn(),i),vt}function Dl(t,n,e,r,i){let o=te(),a=fO(o,t,n,e,r,i);return a!==Ut&&RD(o,Gn(),a),Dl}function RD(t,n,e){let r=Yp(n,t);eT(t[$e],r,e)}function Ta(t,n,e){Jd(n)&&(n=n());let r=te();if(on(r,mr(),n)){Ke();Nx(Ni(),r,t,n,r[$e],e)}return Ta}function Sl(t,n){let e=Jd(t);return e&&t.set(n),e}function Aa(t,n){let e=te(),r=Ke(),i=gt();return SD(r,e,e[$e],i,t,n),Aa}function pO(t){return on(te(),mr(),t)?lo(t):Ut}function Dw(t,n,e){let r=Ke();r.firstCreatePass&&OD(n,r.data,r.blueprint,ur(t),e)}function OD(t,n,e,r,i){if(t=Nt(t),Array.isArray(t))for(let o=0;o<t.length;o++)OD(t[o],n,e,r,i);else{let o=Ke(),a=te(),s=gt(),l=io(t)?t:Nt(t.provide),c=Hp(t),d=s.providerIndexes&1048575,m=s.directiveStart,p=s.providerIndexes>>20;if(io(t)||!t.multi){let f=new vo(c,i,me,null),h=Sh(l,n,i?d:d+p,m);h===-1?(Mh(mu(s,a),o,l),Dh(o,t,n.length),n.push(l),s.directiveStart++,s.directiveEnd++,i&&(s.providerIndexes+=1048576),e.push(f),a.push(f)):(e[h]=f,a[h]=f)}else{let f=Sh(l,n,d+p,m),h=Sh(l,n,d,d+p),v=f>=0&&e[f],M=h>=0&&e[h];if(i&&!M||!i&&!v){Mh(mu(s,a),o,l);let V=bO(i?gO:hO,e.length,i,r,c,t);!i&&M&&(e[h].providerFactory=V),Dh(o,t,n.length,0),n.push(l),s.directiveStart++,s.directiveEnd++,i&&(s.providerIndexes+=1048576),e.push(V),a.push(V)}else{let V=FD(e[i?h:f],c,!i&&r);Dh(o,t,f>-1?f:h,V)}!i&&r&&M&&e[h].componentProviders++}}}function Dh(t,n,e,r){let i=io(n),o=lC(n);if(i||o){let l=(o?Nt(n.useClass):n).prototype.ngOnDestroy;if(l){let c=t.destroyHooks||(t.destroyHooks=[]);if(!i&&n.multi){let d=c.indexOf(e);d===-1?c.push(e,[r,l]):c[d+1].push(r,l)}else c.push(e,l)}}}function FD(t,n,e){return e&&t.componentProviders++,t.multi.push(n)-1}function Sh(t,n,e,r){for(let i=e;i<r;i++)if(n[i]===t)return i;return-1}function hO(t,n,e,r,i){return lg(this.multi,[])}function gO(t,n,e,r,i){let o=this.multi,a;if(this.providerFactory){let s=this.providerFactory.componentProviders,l=nl(r,r[ee],this.providerFactory.index,i);a=l.slice(0,s),lg(o,a);for(let c=s;c<l.length;c++)a.push(l[c])}else a=[],lg(o,a);return a}function lg(t,n){for(let e=0;e<t.length;e++){let r=t[e];n.push(r())}return n}function bO(t,n,e,r,i,o){let a=new vo(t,e,me,null);return a.multi=[],a.index=n,a.componentProviders=0,FD(a,i,r&&!e),a}function ye(t,n){return e=>{e.providersResolver=(r,i)=>Dw(r,i?i(t):t,!1),n&&(e.viewProvidersResolver=(r,i)=>Dw(r,i?i(n):n,!0))}}function yO(t,n){let e=sh()+t,r=te();return r[e]===Ut?eD(r,e,n()):SA(r,e)}function vO(t,n,e){return CO(te(),sh(),t,n,e)}function _O(t,n){let e=t[n];return e===Ut?void 0:e}function CO(t,n,e,r,i,o){let a=n+e;return on(t,a,i)?eD(t,a+1,o?r.call(o,i):r(i)):_O(t,a+1)}function Jg(t,n){return Ou(t,n)}var LD=(()=>{class t{applicationErrorHandler=u(un);appRef=u(Rt);taskService=u(Wn);ngZone=u(T);zonelessEnabled=u(ga);tracing=u(In,{optional:!0});zoneIsDefined=typeof Zone<`u`&&!!Zone.root.run;schedulerTickApplyArgs=[{data:{__scheduler_tick__:!0}}];subscriptions=new ne;angularZoneId=this.zoneIsDefined?this.ngZone._inner?.get(js):null;scheduleInRootZone=!this.zonelessEnabled&&this.zoneIsDefined&&(u(Qd,{optional:!0})??!1);cancelScheduledCallback=null;useMicrotaskScheduler=!1;runningTick=!1;pendingRenderTaskId=null;constructor(){this.subscriptions.add(this.appRef.afterTick.subscribe(()=>{let e=this.taskService.add();if(!this.runningTick&&(this.cleanup(),!this.zonelessEnabled||this.appRef.includeAllTestViews)){this.taskService.remove(e);return}this.switchToMicrotaskScheduler(),this.taskService.remove(e)})),this.subscriptions.add(this.ngZone.onUnstable.subscribe(()=>{this.runningTick||this.cleanup()}))}switchToMicrotaskScheduler(){this.ngZone.runOutsideAngular(()=>{let e=this.taskService.add();this.useMicrotaskScheduler=!0,queueMicrotask(()=>{this.useMicrotaskScheduler=!1,this.taskService.remove(e)})})}notify(e){if(!this.zonelessEnabled&&e===5)return;switch(e){case 0:case 2:this.appRef.dirtyFlags|=2;break;case 3:case 4:case 5:case 1:this.appRef.dirtyFlags|=4;break;case 6:this.appRef.dirtyFlags|=2;break;case 12:this.appRef.dirtyFlags|=16;break;case 13:this.appRef.dirtyFlags|=2;break;case 11:break;default:this.appRef.dirtyFlags|=8}if(this.appRef.tracingSnapshot=this.tracing?.snapshot(this.appRef.tracingSnapshot)??null,!this.shouldScheduleTick())return;let r=this.useMicrotaskScheduler?OC:fh;this.pendingRenderTaskId=this.taskService.add(),this.scheduleInRootZone?this.cancelScheduledCallback=Zone.root.run(()=>r(()=>this.tick())):this.cancelScheduledCallback=this.ngZone.runOutsideAngular(()=>r(()=>this.tick()))}shouldScheduleTick(){return!(this.appRef.destroyed||this.pendingRenderTaskId!==null||this.runningTick||this.appRef._runningTick||!this.zonelessEnabled&&this.zoneIsDefined&&Zone.current.get(js+this.angularZoneId))}tick(){if(this.runningTick||this.appRef.destroyed)return;if(this.appRef.dirtyFlags===0){this.cleanup();return}!this.zonelessEnabled&&this.appRef.dirtyFlags&7&&(this.appRef.dirtyFlags|=1);let e=this.taskService.add();try{this.ngZone.run(()=>{this.runningTick=!0,this.appRef._tick()},void 0,this.schedulerTickApplyArgs)}catch(r){this.applicationErrorHandler(r)}finally{this.taskService.remove(e),this.cleanup()}}ngOnDestroy(){this.subscriptions.unsubscribe(),this.cleanup()}cleanup(){if(this.runningTick=!1,this.cancelScheduledCallback?.(),this.cancelScheduledCallback=null,this.pendingRenderTaskId!==null){let e=this.pendingRenderTaskId;this.pendingRenderTaskId=null,this.taskService.remove(e)}}static ɵfac=function(r){return new(r||t)};static ɵprov=S({token:t,factory:t.ɵfac})}return t})();function VD(){return[{provide:Hn,useExisting:LD},{provide:T,useClass:zs},{provide:ga,useValue:!0}]}var eb=(()=>{class t{compileModuleSync(e){return new sl(e)}compileModuleAsync(e){return Promise.resolve(this.compileModuleSync(e))}clearCache(){}clearCacheFor(e){}getModuleId(e){}static ɵfac=function(r){return new(r||t)};static ɵprov=S({token:t,factory:t.ɵfac})}return t})();new g(``);function wO(){return typeof $localize<`u`&&$localize.locale||xl}var Ra=new g(``,{factory:()=>u(Ra,{optional:!0,skipSelf:!0})||wO()});function Xt(t,n){return Ds(t,n?.equal)}function fe(t){return f_(t)}(class t extends Error{_brand;constructor(n){super(n)}static IDLE=new t(`IDLE`);static LOADING=new t(`LOADING`)});var xO=t=>t;function $u(t,n){if(typeof t==`function`)return zD(Jf(t,xO,n?.equal),n?.debugName,n?.set);else return zD(Jf(t.source,t.computation,t.equal),t.debugName,t.set)}function zD(t,n,e){let r=t[rt],i=t;if(e!==void 0){let o=a=>ep(r,a);i.set=a=>e(a,o),i.update=a=>e(a(fe(t)),o)}else i.set=o=>ep(r,o),i.update=o=>m_(r,o);return i.asReadonly=Kd.bind(t),i}function ZD(t,n){let e=Object.create(Mw);e.value=t,e.transformFn=n?.transform;function r(){if(Ar(e),e.value===Du)throw new D(-950,null);return e.value}return r[rt]=e,r}var Gt=class{attributeName;constructor(n){this.attributeName=n}__NG_ELEMENT_ID__=()=>ul(this.attributeName);toString(){return`HostAttributeToken ${this.attributeName}`}};function lb(t){return PO(t)?t.default:t}function PO(t){return t&&typeof t==`object`&&`default`in t}function HD(t,n){return ZD(t,n)}function LO(t){return ZD(Du,t)}var Mo=(HD.required=LO,HD);function UD(t,n){return Hg(n)}function VO(t,n){return Ug(n)}var kl=(UD.required=VO,UD);function $D(t,n){return Hg(n)}function BO(t,n){return Ug(n)}var QD=($D.required=BO,$D);var XD=(()=>{class t{constructor(e){}static ɵfac=function(r){return new(r||t)(P(Rt))};static ɵmod=R({type:t});static ɵinj=A({})}return t})();var nb=class{supports(n){return Lg(n)}create(n){return new rb(n)}};var zO=(t,n)=>n;var rb=class{length=0;collection;_linkedRecords=null;_unlinkedRecords=null;_previousItHead=null;_itHead=null;_itTail=null;_additionsHead=null;_additionsTail=null;_movesHead=null;_movesTail=null;_removalsHead=null;_removalsTail=null;_identityChangesHead=null;_identityChangesTail=null;_trackByFn;constructor(n){this._trackByFn=n||zO}forEachItem(n){let e;for(e=this._itHead;e!==null;e=e._next)n(e)}forEachOperation(n){let e=this._itHead,r=this._removalsHead,i=0,o=null;for(;e||r;){let a=!r||e&&e.currentIndex<GD(r,i,o)?e:r,s=GD(a,i,o),l=a.currentIndex;if(a===r)i--,r=r._nextRemoved;else if(e=e._next,a.previousIndex==null)i++;else{o||(o=[]);let c=s-i,d=l-i;if(c!=d){for(let p=0;p<c;p++){let f=p<o.length?o[p]:o[p]=0,h=f+p;d<=h&&h<c&&(o[p]=f+1)}let m=a.previousIndex;o[m]=d-c}}s!==l&&n(a,s,l)}}forEachPreviousItem(n){let e;for(e=this._previousItHead;e!==null;e=e._nextPrevious)n(e)}forEachAddedItem(n){let e;for(e=this._additionsHead;e!==null;e=e._nextAdded)n(e)}forEachMovedItem(n){let e;for(e=this._movesHead;e!==null;e=e._nextMoved)n(e)}forEachRemovedItem(n){let e;for(e=this._removalsHead;e!==null;e=e._nextRemoved)n(e)}forEachIdentityChange(n){let e;for(e=this._identityChangesHead;e!==null;e=e._nextIdentityChange)n(e)}diff(n){if(n??=[],!Lg(n))throw new D(900,!1);return this.check(n)?this:null}onDestroy(){}check(n){this._reset();let e=this._itHead,r=!1,i,o,a;if(Array.isArray(n)){this.length=n.length;for(let s=0;s<this.length;s++)o=n[s],a=this._trackByFn(s,o),e===null||!Object.is(e.trackById,a)?(e=this._mismatch(e,o,a,s),r=!0):(r&&(e=this._verifyReinsertion(e,o,a,s)),Object.is(e.item,o)||this._addIdentityChange(e,o)),e=e._next}else i=0,Xx(n,s=>{a=this._trackByFn(i,s),e===null||!Object.is(e.trackById,a)?(e=this._mismatch(e,s,a,i),r=!0):(r&&(e=this._verifyReinsertion(e,s,a,i)),Object.is(e.item,s)||this._addIdentityChange(e,s)),e=e._next,i++}),this.length=i;return this._truncate(e),this.collection=n,this.isDirty}get isDirty(){return this._additionsHead!==null||this._movesHead!==null||this._removalsHead!==null||this._identityChangesHead!==null}_reset(){if(this.isDirty){let n;for(n=this._previousItHead=this._itHead;n!==null;n=n._next)n._nextPrevious=n._next;for(n=this._additionsHead;n!==null;n=n._nextAdded)n.previousIndex=n.currentIndex;for(this._additionsHead=this._additionsTail=null,n=this._movesHead;n!==null;n=n._nextMoved)n.previousIndex=n.currentIndex;this._movesHead=this._movesTail=null,this._removalsHead=this._removalsTail=null,this._identityChangesHead=this._identityChangesTail=null}}_mismatch(n,e,r,i){let o;return n===null?o=this._itTail:(o=n._prev,this._remove(n)),n=this._unlinkedRecords===null?null:this._unlinkedRecords.get(r,null),n!==null?(Object.is(n.item,e)||this._addIdentityChange(n,e),this._reinsertAfter(n,o,i)):(n=this._linkedRecords===null?null:this._linkedRecords.get(r,i),n!==null?(Object.is(n.item,e)||this._addIdentityChange(n,e),this._moveAfter(n,o,i)):n=this._addAfter(new ib(e,r),o,i)),n}_verifyReinsertion(n,e,r,i){let o=this._unlinkedRecords===null?null:this._unlinkedRecords.get(r,null);return o!==null?n=this._reinsertAfter(o,n._prev,i):n.currentIndex!=i&&(n.currentIndex=i,this._addToMoves(n,i)),n}_truncate(n){for(;n!==null;){let e=n._next;this._addToRemovals(this._unlink(n)),n=e}this._unlinkedRecords!==null&&this._unlinkedRecords.clear(),this._additionsTail!==null&&(this._additionsTail._nextAdded=null),this._movesTail!==null&&(this._movesTail._nextMoved=null),this._itTail!==null&&(this._itTail._next=null),this._removalsTail!==null&&(this._removalsTail._nextRemoved=null),this._identityChangesTail!==null&&(this._identityChangesTail._nextIdentityChange=null)}_reinsertAfter(n,e,r){this._unlinkedRecords!==null&&this._unlinkedRecords.remove(n);let i=n._prevRemoved,o=n._nextRemoved;return i===null?this._removalsHead=o:i._nextRemoved=o,o===null?this._removalsTail=i:o._prevRemoved=i,this._insertAfter(n,e,r),this._addToMoves(n,r),n}_moveAfter(n,e,r){return this._unlink(n),this._insertAfter(n,e,r),this._addToMoves(n,r),n}_addAfter(n,e,r){return this._insertAfter(n,e,r),this._additionsTail===null?this._additionsTail=this._additionsHead=n:this._additionsTail=this._additionsTail._nextAdded=n,n}_insertAfter(n,e,r){let i=e===null?this._itHead:e._next;return n._next=i,n._prev=e,i===null?this._itTail=n:i._prev=n,e===null?this._itHead=n:e._next=n,this._linkedRecords===null&&(this._linkedRecords=new Gu),this._linkedRecords.put(n),n.currentIndex=r,n}_remove(n){return this._addToRemovals(this._unlink(n))}_unlink(n){this._linkedRecords!==null&&this._linkedRecords.remove(n);let e=n._prev,r=n._next;return e===null?this._itHead=r:e._next=r,r===null?this._itTail=e:r._prev=e,n}_addToMoves(n,e){return n.previousIndex===e||(this._movesTail===null?this._movesTail=this._movesHead=n:this._movesTail=this._movesTail._nextMoved=n),n}_addToRemovals(n){return this._unlinkedRecords===null&&(this._unlinkedRecords=new Gu),this._unlinkedRecords.put(n),n.currentIndex=null,n._nextRemoved=null,this._removalsTail===null?(this._removalsTail=this._removalsHead=n,n._prevRemoved=null):(n._prevRemoved=this._removalsTail,this._removalsTail=this._removalsTail._nextRemoved=n),n}_addIdentityChange(n,e){return n.item=e,this._identityChangesTail===null?this._identityChangesTail=this._identityChangesHead=n:this._identityChangesTail=this._identityChangesTail._nextIdentityChange=n,n}};var ib=class{item;trackById;currentIndex=null;previousIndex=null;_nextPrevious=null;_prev=null;_next=null;_prevDup=null;_nextDup=null;_prevRemoved=null;_nextRemoved=null;_nextAdded=null;_nextMoved=null;_nextIdentityChange=null;constructor(n,e){this.item=n,this.trackById=e}};var ob=class{_head=null;_tail=null;add(n){this._head===null?(this._head=this._tail=n,n._nextDup=null,n._prevDup=null):(this._tail._nextDup=n,n._prevDup=this._tail,n._nextDup=null,this._tail=n)}get(n,e){let r;for(r=this._head;r!==null;r=r._nextDup)if((e===null||e<=r.currentIndex)&&Object.is(r.trackById,n))return r;return null}remove(n){let e=n._prevDup,r=n._nextDup;return e===null?this._head=r:e._nextDup=r,r===null?this._tail=e:r._prevDup=e,this._head===null}};var Gu=class{map=new Map;put(n){let e=n.trackById,r=this.map.get(e);r||(r=new ob,this.map.set(e,r)),r.add(n)}get(n,e){let r=n,i=this.map.get(r);return i?i.get(n,e):null}remove(n){let e=n.trackById;return this.map.get(e).remove(n)&&this.map.delete(e),n}get isEmpty(){return this.map.size===0}clear(){this.map.clear()}};function GD(t,n,e){let r=t.previousIndex;if(r===null)return r;let i=0;return e&&r<e.length&&(i=e[r]),r+n+i}function WD(){return new Oa([new nb])}var Oa=(()=>{class t{factories;static ɵprov=q({token:t,providedIn:`root`,factory:WD});constructor(e){this.factories=e}static create(e,r){if(r!=null){let i=r.factories.slice();e=e.concat(i)}return new t(e)}static extend(e){return{provide:t,useFactory:()=>{let r=u(t,{optional:!0,skipSelf:!0});return t.create(e,r||WD())}}}find(e){let r=this.factories.find(i=>i.supports(e));if(r!=null)return r;throw new D(901,!1)}}return t})();var Ce=(()=>{class t{static __NG_ELEMENT_ID__=HO}return t})();function HO(t){return UO(gt(),te(),(t&16)===16)}function UO(t,n,e){if(dr(t)&&!e){let r=kn(t.index,n);return new Ai(r,r)}else if(t.type&175){let r=n[zt];return new Ai(r,n)}return null}var $O=(()=>{class t{zone=u(T);changeDetectionScheduler=u(Hn);applicationRef=u(Rt);applicationErrorHandler=u(un);_onMicrotaskEmptySubscription;initialize(){this._onMicrotaskEmptySubscription||(this._onMicrotaskEmptySubscription=this.zone.onMicrotaskEmpty.subscribe({next:()=>{this.changeDetectionScheduler.runningTick||this.applicationRef._runningTick||this.zone.run(()=>{try{this.applicationRef.dirtyFlags|=1,this.applicationRef._tick()}catch(e){this.applicationErrorHandler(e)}})}}))}ngOnDestroy(){this._onMicrotaskEmptySubscription?.unsubscribe()}static ɵfac=function(r){return new(r||t)};static ɵprov=S({token:t,factory:t.ɵfac})}return t})();var GO=new g(``,{factory:()=>!1});function WO({ngZoneFactory:t,scheduleInRootZone:n}){return t??=()=>new T(K(b({},JD()),{scheduleInRootZone:n})),[{provide:ga,useValue:!1},{provide:T,useFactory:t},{provide:Ei,multi:!0,useFactory:()=>{let e=u($O,{optional:!0});return()=>e.initialize()}},{provide:Ei,multi:!0,useFactory:()=>{let e=u(qO);return()=>{e.initialize()}}},{provide:Qd,useValue:n??mh}]}function T9(t){let n=t?.scheduleInRootZone,e=WO({ngZoneFactory:()=>{let r=JD(t);return r.scheduleInRootZone=n,r.shouldCoalesceEventChangeDetection&&Nn(`NgZone_CoalesceEvent`),new T(r)},scheduleInRootZone:n});return lr([{provide:GO,useValue:!0},e])}function JD(t){return{enableLongStackTrace:!1,shouldCoalesceEventChangeDetection:t?.eventCoalescing??!1,shouldCoalesceRunChangeDetection:t?.runCoalescing??!1}}var qO=(()=>{class t{subscription=new ne;initialized=!1;zone=u(T);pendingTasks=u(Wn);initialize(){if(this.initialized)return;this.initialized=!0;let e=null;!this.zone.isStable&&!this.zone.hasPendingMacrotasks&&!this.zone.hasPendingMicrotasks&&(e=this.pendingTasks.add()),this.zone.runOutsideAngular(()=>{this.subscription.add(this.zone.onStable.subscribe(()=>{T.assertNotInAngularZone(),queueMicrotask(()=>{e!==null&&!this.zone.hasPendingMacrotasks&&!this.zone.hasPendingMicrotasks&&(this.pendingTasks.remove(e),e=null)})}))}),this.subscription.add(this.zone.onUnstable.subscribe(()=>{T.assertInAngularZone(),e??=this.pendingTasks.add()}))}ngOnDestroy(){this.subscription.unsubscribe()}static ɵfac=function(r){return new(r||t)};static ɵprov=S({token:t,factory:t.ɵfac})}return t})();function YO(t,n,e){let r=new sl(e);return Promise.resolve(r)}var Wu=new g(``);var KO=new g(``);function El(t){return!t.moduleRef}function ZO(t){let n=El(t)?t.r3Injector:t.moduleRef.injector,e=n.get(T);return e.run(()=>{El(t)?t.r3Injector.resolveInjectorInitializers():t.moduleRef.resolveInjectorInitializers();let r=n.get(un),i;if(e.runOutsideAngular(()=>{i=e.onError.subscribe({next:r})}),El(t)){let o=()=>n.destroy(),a=t.platformInjector.get(Wu);a.add(o),n.onDestroy(()=>{i.unsubscribe(),a.delete(o)})}else{let o=()=>t.moduleRef.destroy(),a=t.platformInjector.get(Wu);a.add(o),t.moduleRef.onDestroy(()=>{tl(t.allPlatformModules,t.moduleRef),i.unsubscribe(),a.delete(o)})}return XO(r,e,()=>{let o=n.get(Wn),a=o.add(),s=n.get(Wg);return s.runInitializers(),s.donePromise.then(()=>{if(DD(n.get(Ra,xl)||xl),!n.get(KO,!0))return El(t)?n.get(Rt):(t.allPlatformModules.push(t.moduleRef),t.moduleRef);if(El(t)){let d=n.get(Rt);return t.rootComponent!==void 0&&d.bootstrap(t.rootComponent),d}else return e0?.(t.moduleRef,t.allPlatformModules),t.moduleRef}).finally(()=>{o.remove(a)})})})}var e0;function YD(){e0=QO}function QO(t,n){let e=t.injector.get(Rt);if(t._bootstrapComponents.length>0)t._bootstrapComponents.forEach(r=>e.bootstrap(r));else if(t.instance.ngDoBootstrap)t.instance.ngDoBootstrap(e);else throw new D(-403,!1);n.push(t)}function XO(t,n,e){try{let r=e();return Yr(r)?r.catch(i=>{throw n.runOutsideAngular(()=>t(i)),i}):r}catch(r){throw n.runOutsideAngular(()=>t(r)),r}}var t0=(()=>{class t{_injector;_modules=[];_destroyListeners=[];_destroyed=!1;constructor(e){this._injector=e}bootstrapModuleFactory(e,r){let i=[VD(),...r?.applicationProviders??[],VC],o=gD(e.moduleType,this.injector,i);return YD(),ZO({moduleRef:o,allPlatformModules:this._modules,platformInjector:this.injector})}bootstrapModule(e,r=[]){let i=Zg({},r);return YD(),YO(this.injector,i,e).then(o=>this.bootstrapModuleFactory(o,i))}onDestroy(e){this._destroyListeners.push(e)}get injector(){return this._injector}destroy(){if(this._destroyed)throw new D(404,!1);this._modules.slice().forEach(r=>r.destroy()),this._destroyListeners.forEach(r=>r());let e=this._injector.get(Wu,null);e&&(e.forEach(r=>r()),e.clear()),this._destroyed=!0}get destroyed(){return this._destroyed}static ɵfac=function(r){return new(r||t)(P(B))};static ɵprov=q({token:t,factory:t.ɵfac,providedIn:`platform`})}return t})();var cb=null;function JO(t){if(ub())throw new D(400,!1);wD(),cb=t;let n=t.get(t0);return nF(t),n}function db(t,n,e=[]){let r=`Platform: ${n}`,i=new g(r);return(o=[])=>{let a=ub();if(!a){let s=[...e,...o,{provide:i,useValue:!0}];a=t?.(s)??JO(eF(s,r))}return tF(i)}}function eF(t=[],n){return B.create({name:n,providers:[{provide:qs,useValue:`platform`},{provide:Wu,useValue:new Set([()=>cb=null])},...t]})}function tF(t){let n=ub();if(!n)throw new D(-401,!1);return n}function ub(){return cb?.get(t0)??null}function nF(t){let n=t.get(Zd,null);ht(t,()=>{n?.forEach(e=>e())})}function I(t){return typeof t==`boolean`?t:t!=null&&t!==`false`}function Wt(t,n=NaN){return!isNaN(parseFloat(t))&&!isNaN(Number(t))?Number(t):n}var tb=Symbol(`NOT_SET`);var n0=new Set;var rF=K(b({},Zo),{kind:`afterRenderEffectPhase`,consumerIsAlwaysLive:!0,consumerAllowSignalWrites:!0,value:tb,cleanup:null,consumerMarkedDirty(){if(this.sequence.impl.executing){if(this.sequence.lastPhase===null||this.sequence.lastPhase<this.phase)return;this.sequence.erroredOrDestroyed=!0}this.sequence.scheduler.notify(7)},phaseFn(t){if(this.sequence.lastPhase=this.phase,!this.dirty)return this.signal;if(this.dirty=!1,this.value!==tb&&!Yo(this))return this.signal;try{for(let i of this.cleanup??n0)i()}finally{this.cleanup?.clear()}let n=[];t!==void 0&&n.push(t),n.push(this.registerCleanupFn);let e=Rr(this),r;try{r=this.userFn.apply(null,n)}finally{pi(this,e)}return(this.value===tb||!this.equal(this.value,r))&&(this.value=r,this.version++),this.signal}});var ab=class extends rl{scheduler;lastPhase=null;nodes=[void 0,void 0,void 0,void 0];onDestroyFns=null;constructor(n,e,r,i,o,a=null,s){super(n,[void 0,void 0,void 0,void 0],r,!1,o.get(ut),a),this.scheduler=i;for(let l of Dg){let c=e[l];if(c===void 0)continue;let d=Object.create(rF);d.sequence=this,d.phase=l,d.userFn=c,d.dirty=!0,d.signal=()=>(Ar(d),d.value),d.signal[rt]=d,d.registerCleanupFn=m=>(d.cleanup??=new Set).add(m),this.nodes[l]=d,this.hooks[l]=m=>d.phaseFn(m)}}afterRun(){super.afterRun(),this.lastPhase=null}destroy(){if(this.onDestroyFns!==null)for(let n of this.onDestroyFns)n();super.destroy();for(let n of this.nodes)if(n)try{for(let e of n.cleanup??n0)e()}finally{hi(n)}}};function mb(t,n){let e=n?.injector??u(B),r=e.get(Hn),i=e.get(Iu),o=e.get(In,null,{optional:!0});i.impl??=e.get(Sg);let a=t;typeof a==`function`&&(a={mixedReadWrite:t});let s=e.get(ha,null,{optional:!0}),l=new ab(i.impl,[a.earlyRead,a.write,a.mixedReadWrite,a.read],s?.view,r,e,o?.snapshot(null),void 0);return i.impl.register(l),l}var r0=db(null,`core`,[]);function Yu(t,n){let e=Br(t),r=n.elementInjector||la(),o=new wo(e).create(r,n.projectableNodes,n.hostElement,n.environmentInjector,n.directives,n.bindings);return n.onError&&(o.hostView._lView[ua]=n.onError),o}function fb(t){let n=Br(t);if(!n)return null;let e=new wo(n);return{get selector(){return e.selector},get type(){return e.componentType},get inputs(){return e.inputs},get outputs(){return e.outputs},get ngContentSelectors(){return e.ngContentSelectors},get isStandalone(){return n.standalone},get isSignal(){return n.signals}}}var i0=null;function fn(){return i0}function pb(t){i0??=t}var Ml=class{};var Zr=(()=>{class t{historyGo(e){throw new Error(``)}static ɵfac=function(r){return new(r||t)};static ɵprov=q({token:t,factory:()=>u(o0),providedIn:`platform`})}return t})();var hb=new g(``);var o0=(()=>{class t extends Zr{_location;_history;_doc=u(z);constructor(){super(),this._location=window.location,this._history=window.history}getBaseHrefFromDOM(){return fn().getBaseHref(this._doc)}onPopState(e){let r=fn().getGlobalEventTarget(this._doc,`window`);return r.addEventListener(`popstate`,e,!1),()=>r.removeEventListener(`popstate`,e)}onHashChange(e){let r=fn().getGlobalEventTarget(this._doc,`window`);return r.addEventListener(`hashchange`,e,!1),()=>r.removeEventListener(`hashchange`,e)}get href(){return this._location.href}get protocol(){return this._location.protocol}get hostname(){return this._location.hostname}get port(){return this._location.port}get pathname(){return this._location.pathname}get search(){return this._location.search}get hash(){return this._location.hash}set pathname(e){this._location.pathname=e}pushState(e,r,i){this._history.pushState(e,r,i)}replaceState(e,r,i){this._history.replaceState(e,r,i)}forward(){this._history.forward()}back(){this._history.back()}historyGo(e=0){this._history.go(e)}getState(){return this._history.state}static ɵfac=function(r){return new(r||t)};static ɵprov=q({token:t,factory:()=>new t,providedIn:`platform`})}return t})();function Ku(t,n){return t?n?t.endsWith(`/`)?n.startsWith(`/`)?t+n.slice(1):t+n:n.startsWith(`/`)?t+n:`${t}/${n}`:t:n}function a0(t){let n=t.search(/#|\?|$/);return t[n-1]===`/`?t.slice(0,n-1)+t.slice(n):t}function Zn(t){return t&&t[0]!==`?`?`?${t}`:t}var Qn=(()=>{class t{historyGo(e){throw new Error(``)}static ɵfac=function(r){return new(r||t)};static ɵprov=q({token:t,factory:()=>u(Qu),providedIn:`root`})}return t})();var Zu=new g(``);var Qu=(()=>{class t extends Qn{_platformLocation;_baseHref;_removeListenerFns=[];constructor(e,r){super(),this._platformLocation=e,this._baseHref=r??this._platformLocation.getBaseHrefFromDOM()??u(z).location?.origin??``}ngOnDestroy(){for(;this._removeListenerFns.length;)this._removeListenerFns.pop()()}onPopState(e){this._removeListenerFns.push(this._platformLocation.onPopState(e),this._platformLocation.onHashChange(e))}getBaseHref(){return this._baseHref}prepareExternalUrl(e){return Ku(this._baseHref,e)}path(e=!1){let r=this._platformLocation.pathname+Zn(this._platformLocation.search),i=this._platformLocation.hash;return i&&e?`${r}${i}`:r}pushState(e,r,i,o){let a=this.prepareExternalUrl(i+Zn(o));this._platformLocation.pushState(e,r,a)}replaceState(e,r,i,o){let a=this.prepareExternalUrl(i+Zn(o));this._platformLocation.replaceState(e,r,a)}forward(){this._platformLocation.forward()}back(){this._platformLocation.back()}getState(){return this._platformLocation.getState()}historyGo(e=0){this._platformLocation.historyGo?.(e)}static ɵfac=function(r){return new(r||t)(P(Zr),P(Zu,8))};static ɵprov=q({token:t,factory:t.ɵfac,providedIn:`root`})}return t})();var br=(()=>{class t{_subject=new _;_basePath;_locationStrategy;_urlChangeListeners=[];_urlChangeSubscription=null;constructor(e){this._locationStrategy=e;let r=this._locationStrategy.getBaseHref();this._basePath=aF(a0(s0(r))),this._locationStrategy.onPopState(i=>{let o={url:this.path(!0),pop:!0,state:i.state,type:i.type};i.hasUAVisualTransition&&(o.hasUAVisualTransition=!0),this._subject.next(o)})}ngOnDestroy(){this._urlChangeSubscription?.unsubscribe(),this._urlChangeListeners=[]}path(e=!1){return this.normalize(this._locationStrategy.path(e))}getState(){return this._locationStrategy.getState()}isCurrentPathEqualTo(e,r=``){return this.path()==this.normalize(e+Zn(r))}normalize(e){return t.stripTrailingSlash(oF(this._basePath,s0(e)))}prepareExternalUrl(e){return e&&e[0]!==`/`&&(e=`/`+e),this._locationStrategy.prepareExternalUrl(e)}go(e,r=``,i=null){this._locationStrategy.pushState(i,``,e,r),this._notifyUrlChangeListeners(this.prepareExternalUrl(e+Zn(r)),i)}replaceState(e,r=``,i=null){this._locationStrategy.replaceState(i,``,e,r),this._notifyUrlChangeListeners(this.prepareExternalUrl(e+Zn(r)),i)}forward(){this._locationStrategy.forward()}back(){this._locationStrategy.back()}historyGo(e=0){this._locationStrategy.historyGo?.(e)}onUrlChange(e){return this._urlChangeListeners.push(e),this._urlChangeSubscription??=this.subscribe(r=>{this._notifyUrlChangeListeners(r.url,r.state)}),()=>{let r=this._urlChangeListeners.indexOf(e);this._urlChangeListeners.splice(r,1),this._urlChangeListeners.length===0&&(this._urlChangeSubscription?.unsubscribe(),this._urlChangeSubscription=null)}}_notifyUrlChangeListeners(e=``,r){this._urlChangeListeners.forEach(i=>i(e,r))}subscribe(e,r,i){return this._subject.subscribe({next:e,error:r??void 0,complete:i??void 0})}static normalizeQueryParams=Zn;static joinWithSlash=Ku;static stripTrailingSlash=a0;static ɵfac=function(r){return new(r||t)(P(Qn))};static ɵprov=q({token:t,factory:()=>iF(),providedIn:`root`})}return t})();function iF(){return new br(P(Qn))}function oF(t,n){if(!t||!n.startsWith(t))return n;let e=n.substring(t.length);return e===``||[`/`,`;`,`?`,`#`].includes(e[0])?e:n}function s0(t){return t.replace(/\/index\.html$/,``)}function aF(t){if(new RegExp(`^(https?:)?//`).test(t)){let[,e]=t.split(/\/\/[^\/]+/);return e}return t}var bb=(()=>{class t extends Qn{_platformLocation;_baseHref=``;_removeListenerFns=[];constructor(e,r){super(),this._platformLocation=e,r!=null&&(this._baseHref=r)}ngOnDestroy(){for(;this._removeListenerFns.length;)this._removeListenerFns.pop()()}onPopState(e){this._removeListenerFns.push(this._platformLocation.onPopState(e),this._platformLocation.onHashChange(e))}getBaseHref(){return this._baseHref}path(e=!1){let r=this._platformLocation.hash??`#`;return r.length>0?r.substring(1):r}prepareExternalUrl(e){let r=Ku(this._baseHref,e);return r.length>0?`#`+r:r}pushState(e,r,i,o){let a=this.prepareExternalUrl(i+Zn(o))||this._platformLocation.pathname;this._platformLocation.pushState(e,r,a)}replaceState(e,r,i,o){let a=this.prepareExternalUrl(i+Zn(o))||this._platformLocation.pathname;this._platformLocation.replaceState(e,r,a)}forward(){this._platformLocation.forward()}back(){this._platformLocation.back()}getState(){return this._platformLocation.getState()}historyGo(e=0){this._platformLocation.historyGo?.(e)}static ɵfac=function(r){return new(r||t)(P(Zr),P(Zu,8))};static ɵprov=q({token:t,factory:t.ɵfac})}return t})();var gb=/\s+/;var l0=[];var sF=(()=>{class t{_ngEl;_renderer;initialClasses=l0;rawClass;stateMap=new Map;constructor(e,r){this._ngEl=e,this._renderer=r}set klass(e){this.initialClasses=e!=null?e.trim().split(gb):l0}set ngClass(e){this.rawClass=typeof e==`string`?e.trim().split(gb):e}ngDoCheck(){for(let r of this.initialClasses)this._updateState(r,!0);let e=this.rawClass;if(Array.isArray(e)||e instanceof Set)for(let r of e)this._updateState(r,!0);else if(e!=null)for(let r of Object.keys(e))this._updateState(r,!!e[r]);this._applyStateDiff()}_updateState(e,r){let i=this.stateMap.get(e);i!==void 0?(i.enabled!==r&&(i.changed=!0,i.enabled=r),i.touched=!0):this.stateMap.set(e,{enabled:r,changed:!0,touched:!0})}_applyStateDiff(){for(let e of this.stateMap){let r=e[0],i=e[1];i.changed?(this._toggleClass(r,i.enabled),i.changed=!1):i.touched||(i.enabled&&this._toggleClass(r,!1),this.stateMap.delete(r)),i.touched=!1}}_toggleClass(e,r){e=e.trim(),e.length>0&&e.split(gb).forEach(i=>{r?this._renderer.addClass(this._ngEl.nativeElement,i):this._renderer.removeClass(this._ngEl.nativeElement,i)})}static ɵfac=function(r){return new(r||t)(me(N),me(ke))};static ɵdir=w({type:t,selectors:[[``,`ngClass`,``]],inputs:{klass:[0,`class`,`klass`],ngClass:`ngClass`}})}return t})();var yb=(()=>{class t{_viewContainerRef;_viewRef=null;ngTemplateOutletContext=null;ngTemplateOutlet=null;ngTemplateOutletInjector=null;injector=u(B);constructor(e){this._viewContainerRef=e}ngOnChanges(e){if(this._shouldRecreateView(e)){let r=this._viewContainerRef;if(this._viewRef&&r.remove(r.indexOf(this._viewRef)),!this.ngTemplateOutlet){this._viewRef=null;return}let i=this._createContextForwardProxy();this._viewRef=r.createEmbeddedView(this.ngTemplateOutlet,i,{injector:this._getInjector()})}}_getInjector(){return this.ngTemplateOutletInjector===`outlet`?this.injector:this.ngTemplateOutletInjector??void 0}_shouldRecreateView(e){return!!e.ngTemplateOutlet||!!e.ngTemplateOutletInjector}_createContextForwardProxy(){return new Proxy({},{set:(e,r,i)=>this.ngTemplateOutletContext?Reflect.set(this.ngTemplateOutletContext,r,i):!1,get:(e,r,i)=>{if(this.ngTemplateOutletContext)return Reflect.get(this.ngTemplateOutletContext,r,i)}})}static ɵfac=function(r){return new(r||t)(me(et))};static ɵdir=w({type:t,selectors:[[``,`ngTemplateOutlet`,``]],inputs:{ngTemplateOutletContext:`ngTemplateOutletContext`,ngTemplateOutlet:`ngTemplateOutlet`,ngTemplateOutletInjector:`ngTemplateOutletInjector`},features:[Se]})}return t})();var vb=(()=>{class t{static ɵfac=function(r){return new(r||t)};static ɵmod=R({type:t});static ɵinj=A({})}return t})();function Il(t,n){n=encodeURIComponent(n);for(let e of t.split(`;`)){let r=e.indexOf(`=`),[i,o]=r==-1?[e,``]:[e.slice(0,r),e.slice(r+1)];if(i.trim()!==n)continue;let a=o;try{a=decodeURIComponent(o)}catch(s){}return a.length>1&&a[0]===`"`&&a[a.length-1]===`"`&&(a=a.slice(1,-1)),a}return null}var lF=(()=>{class t{build(){return new XMLHttpRequest}static ɵfac=function(r){return new(r||t)};static ɵprov=S({token:t,factory:t.ɵfac})}return t})();var _b=(()=>{class t{static ɵfac=function(r){return new(r||t)};static ɵprov=q({token:t,factory:function(r){let i=null;return r?i=new(r||t):i=P(lF),i},providedIn:`root`})}return t})();var wb=`browser`;function c0(t){return t===wb}var xb=(()=>{class t{static ɵprov=q({token:t,providedIn:`root`,factory:()=>new Cb(u(z),window)})}return t})();var Cb=class{document;window;offset=()=>[0,0];constructor(n,e){this.document=n,this.window=e}setOffset(n){Array.isArray(n)?this.offset=()=>n:this.offset=n}getScrollPosition(){return[this.window.scrollX,this.window.scrollY]}scrollToPosition(n,e){this.window.scrollTo(K(b({},e),{left:n[0],top:n[1]}))}scrollToAnchor(n,e){let r=dF(this.document,n);r&&(this.scrollToElement(r,e),r.focus({preventScroll:!0}))}setHistoryScrollRestoration(n){try{this.window.history.scrollRestoration=n}catch(e){console.warn(Dn(2400,!1))}}scrollToElement(n,e){let r=n.getBoundingClientRect(),i=r.left+this.window.pageXOffset,o=r.top+this.window.pageYOffset,a=this.offset();this.window.scrollTo(K(b({},e),{left:i-a[0],top:o-a[1]}))}};function dF(t,n){let e=t.getElementById(n)||t.getElementsByName(n)[0];if(e)return e;if(typeof t.createTreeWalker==`function`&&t.body&&typeof t.body.attachShadow==`function`){let r=t.createTreeWalker(t.body,NodeFilter.SHOW_ELEMENT),i=r.currentNode;for(;i;){let o=i.shadowRoot;if(o){let a=o.getElementById(n)||o.querySelector(`[name="${CSS.escape(n)}"]`);if(a)return a}i=r.nextNode()}}return null}var Nl=class{_doc;constructor(n){this._doc=n}manager};var Xu=(()=>{class t extends Nl{constructor(e){super(e)}supports(e){return!0}addEventListener(e,r,i,o){return e.addEventListener(r,i,o),()=>this.removeEventListener(e,r,i,o)}removeEventListener(e,r,i,o){return e.removeEventListener(r,i,o)}static ɵfac=function(r){return new(r||t)(P(z))};static ɵprov=q({token:t,factory:t.ɵfac})}return t})();var tm=new g(``);var kb=(()=>{class t{_zone;_plugins;_eventNameToPlugin=new Map;constructor(e,r){this._zone=r,e.forEach(a=>{a.manager=this});let i=e.filter(a=>!(a instanceof Xu));this._plugins=i.slice().reverse();let o=e.find(a=>a instanceof Xu);o&&this._plugins.push(o)}addEventListener(e,r,i,o){return this._findPluginFor(r).addEventListener(e,r,i,o)}getZone(){return this._zone}_findPluginFor(e){let r=this._eventNameToPlugin.get(e);if(r)return r;if(r=this._plugins.find(o=>o.supports(e)),!r)throw new D(-5101,!1);return this._eventNameToPlugin.set(e,r),r}static ɵfac=function(r){return new(r||t)(P(tm),P(T))};static ɵprov=q({token:t,factory:t.ɵfac})}return t})();var Db=`ng-app-id`;function d0(t){for(let n of t)n.remove()}function u0(t,n){let e=n.createElement(`style`);return e.textContent=t,e}function mF(t,n,e,r){let i=t.head?.querySelectorAll(`style[${Db}="${n}"],link[${Db}="${n}"]`);if(!i||i.length===0)return!1;for(let o of i)o.removeAttribute(Db),o instanceof HTMLLinkElement?r.set(o.href.slice(o.href.lastIndexOf(`/`)+1),{usage:0,elements:[o]}):o.textContent&&e.set(o.textContent,{usage:0,elements:[o]});return!0}function Eb(t,n){let e=n.createElement(`link`);return e.setAttribute(`rel`,`stylesheet`),e.setAttribute(`href`,t),e}var Mb=(()=>{class t{doc;appId;nonce;inline=new Map;external=new Map;hosts=new Set;constructor(e,r,i,o={}){this.doc=e,this.appId=r,this.nonce=i,mF(e,r,this.inline,this.external)&&this.hosts.add(e.head)}addStyles(e,r){for(let i of e)this.addUsage(i,this.inline,u0);r?.forEach(i=>this.addUsage(i,this.external,Eb))}removeStyles(e,r){for(let i of e)this.removeUsage(i,this.inline);r?.forEach(i=>this.removeUsage(i,this.external))}addUsage(e,r,i){let o=r.get(e);o?o.usage++:r.set(e,{usage:1,elements:[...this.hosts].map(a=>this.addElement(a,i(e,this.doc)))})}removeUsage(e,r){let i=r.get(e);i&&(i.usage--,i.usage<=0&&(d0(i.elements),r.delete(e)))}ngOnDestroy(){for(let[,{elements:e}]of[...this.inline,...this.external])d0(e);this.hosts.clear()}addHost(e){if(!this.hosts.has(e)){this.hosts.add(e);for(let[r,{elements:i}]of this.inline)i.push(this.addElement(e,u0(r,this.doc)));for(let[r,{elements:i}]of this.external)i.push(this.addElement(e,Eb(r,this.doc)))}}removeHost(e){this.hosts.delete(e);for(let r of[...this.inline.values(),...this.external.values()]){let i=[];for(let o of r.elements)o.parentNode===e?o.remove():i.push(o);r.elements=i}}addElement(e,r){return this.nonce&&r.setAttribute(`nonce`,this.nonce),e.appendChild(r)}static ɵfac=function(r){return new(r||t)(P(z),P(Ur),P(Ti,8),P(bo))};static ɵprov=q({token:t,factory:t.ɵfac})}return t})();var Sb={svg:`http://www.w3.org/2000/svg`,xhtml:`http://www.w3.org/1999/xhtml`,xlink:`http://www.w3.org/1999/xlink`,xml:`http://www.w3.org/XML/1998/namespace`,xmlns:`http://www.w3.org/2000/xmlns/`,math:`http://www.w3.org/1998/Math/MathML`};var Ib=/%COMP%/g;var f0=`%COMP%`;var fF=`_nghost-${f0}`;var pF=`_ngcontent-${f0}`;var hF=!0;var gF=new g(``,{factory:()=>hF});var bF=new g(``);function yF(t){return pF.replace(Ib,t)}function vF(t){return fF.replace(Ib,t)}function p0(t,n){return n.map(e=>e.replace(Ib,t))}var Nb=(()=>{class t{eventManager;sharedStylesHost;appId;removeStylesOnCompDestroy;doc;ngZone;nonce;tracingService;rendererByCompId=new Map;defaultRenderer;cssVarNamespace;constructor(e,r,i,o,a,s,l=null,c=null,d=null){this.eventManager=e,this.sharedStylesHost=r,this.appId=i,this.removeStylesOnCompDestroy=o,this.doc=a,this.ngZone=s,this.nonce=l,this.tracingService=c,this.cssVarNamespace=d??``,this.defaultRenderer=new Tl(e,a,s,this.tracingService,this.cssVarNamespace)}createRenderer(e,r){if(!e||!r)return this.defaultRenderer;let i=this.getOrCreateRenderer(e,r);return i instanceof em?i.applyToHost(e):i instanceof Al&&i.applyStyles(),i}getOrCreateRenderer(e,r){let i=this.rendererByCompId,o=i.get(r.id);if(!o){let a=this.doc,s=this.ngZone,l=this.eventManager,c=this.sharedStylesHost,d=this.removeStylesOnCompDestroy,m=this.tracingService;switch(r.encapsulation){case Kn.Emulated:o=new em(l,c,r,this.appId,d,a,s,m,this.cssVarNamespace);break;case Kn.ShadowDom:return new Ju(l,e,r,a,s,this.nonce,m,this.cssVarNamespace,c);case Kn.ExperimentalIsolatedShadowDom:return new Ju(l,e,r,a,s,this.nonce,m,this.cssVarNamespace);default:o=new Al(l,c,r,d,a,s,m,this.cssVarNamespace)}i.set(r.id,o)}return o}ngOnDestroy(){this.rendererByCompId.clear()}componentReplaced(e){this.rendererByCompId.delete(e)}static ɵfac=function(r){return new(r||t)(P(kb),P(Do),P(Ur),P(gF),P(z),P(T),P(Ti),P(In,8),P(bF,8))};static ɵprov=q({token:t,factory:t.ɵfac})}return t})();var Tl=class{eventManager;doc;ngZone;tracingService;cssVarNamespace;data=Object.create(null);throwOnSyntheticProps=!0;constructor(n,e,r,i,o=``){this.eventManager=n,this.doc=e,this.ngZone=r,this.tracingService=i,this.cssVarNamespace=o}destroy(){}destroyNode=null;createElement(n,e){return e?this.doc.createElementNS(Sb[e]||e,n):this.doc.createElement(n)}createComment(n){return this.doc.createComment(n)}createText(n){return this.doc.createTextNode(n)}appendChild(n,e){(m0(n)?n.content:n).appendChild(e)}insertBefore(n,e,r){if(n){let i=m0(n)?n.content:n;if(r!=null&&r.parentNode!==i)throw new D(-5106,!1);i.insertBefore(e,r)}}removeChild(n,e){e.remove()}selectRootElement(n,e){let r=typeof n==`string`?this.doc.querySelector(n):n;if(!r)throw new D(-5104,!1);return e||(r.textContent=``),r}parentNode(n){return n.parentNode}nextSibling(n){return n.nextSibling}setAttribute(n,e,r,i){if(i){e=i+`:`+e;let o=Sb[i];o?n.setAttributeNS(o,e,r):n.setAttribute(e,r)}else n.setAttribute(e,r)}removeAttribute(n,e,r){if(r){let i=Sb[r];i?n.removeAttributeNS(i,e):n.removeAttribute(`${r}:${e}`)}else n.removeAttribute(e)}addClass(n,e){n.classList.add(e)}removeClass(n,e){n.classList.remove(e)}setStyle(n,e,r,i){let o=e.startsWith(`--`);o&&(e=e.replace(`%NS%`,this.cssVarNamespace)),o||i&(pr.DashCase|pr.Important)?n.style.setProperty(e,r,i&pr.Important?`important`:``):n.style[e]=r}removeStyle(n,e,r){let i=e.startsWith(`--`);i&&(e=e.replace(`%NS%`,this.cssVarNamespace)),i||r&pr.DashCase?n.style.removeProperty(e):n.style[e]=``}setProperty(n,e,r){n!=null&&(n[e]=r)}setValue(n,e){n.nodeValue=e}listen(n,e,r,i){if(typeof n==`string`&&(n=fn().getGlobalEventTarget(this.doc,n),!n))throw new D(-5102,!1);let o=this.decoratePreventDefault(r);return this.tracingService?.wrapEventListener&&(o=this.tracingService.wrapEventListener(n,e,o)),this.eventManager.addEventListener(n,e,o,i)}decoratePreventDefault(n){return e=>{if(e===`__ngUnwrap__`)return n;n(e)===!1&&e.preventDefault()}}};function m0(t){return t.tagName===`TEMPLATE`&&t.content!==void 0}var Ju=class extends Tl{hostEl;sharedStylesHost;shadowRoot;constructor(n,e,r,i,o,a,s,l,c){super(n,i,o,s,l),this.hostEl=e,this.sharedStylesHost=c,this.shadowRoot=e.attachShadow({mode:`open`}),this.sharedStylesHost&&this.sharedStylesHost.addHost(this.shadowRoot);let d=r.styles;d=p0(r.id,d).map(p=>p.replace(/%NS%/g,l));for(let p of d){let f=document.createElement(`style`);a&&f.setAttribute(`nonce`,a),f.textContent=p,this.shadowRoot.appendChild(f)}let m=r.getExternalStyles?.();if(m)for(let p of m){let f=Eb(p,i);a&&f.setAttribute(`nonce`,a),this.shadowRoot.appendChild(f)}}nodeOrShadowRoot(n){return n===this.hostEl?this.shadowRoot:n}appendChild(n,e){return super.appendChild(this.nodeOrShadowRoot(n),e)}insertBefore(n,e,r){return super.insertBefore(this.nodeOrShadowRoot(n),e,r)}removeChild(n,e){return super.removeChild(null,e)}parentNode(n){return this.nodeOrShadowRoot(super.parentNode(this.nodeOrShadowRoot(n)))}destroy(){this.sharedStylesHost&&this.sharedStylesHost.removeHost(this.shadowRoot)}};var Al=class extends Tl{sharedStylesHost;removeStylesOnCompDestroy;styles;styleUrls;constructor(n,e,r,i,o,a,s,l,c){super(n,o,a,s,l),this.sharedStylesHost=e,this.removeStylesOnCompDestroy=i;let d=r.styles,m=c?p0(c,d):d;this.styles=m.map(p=>p.replace(/%NS%/g,l)),this.styleUrls=r.getExternalStyles?.(c)}applyStyles(){this.sharedStylesHost.addStyles(this.styles,this.styleUrls)}destroy(){this.removeStylesOnCompDestroy&&xg.size===0&&this.sharedStylesHost.removeStyles(this.styles,this.styleUrls)}};var em=class extends Al{contentAttr;hostAttr;constructor(n,e,r,i,o,a,s,l,c){let d=i+`-`+r.id;super(n,e,r,o,a,s,l,c,d),this.contentAttr=yF(d),this.hostAttr=vF(d)}applyToHost(n){this.applyStyles(),this.setAttribute(n,this.hostAttr,``)}createElement(n,e){let r=super.createElement(n,e);return super.setAttribute(r,this.contentAttr,``),r}};var nm=class t extends Ml{supportsDOMEvents=!0;static makeCurrent(){pb(new t)}onAndCancel(n,e,r,i){return n.addEventListener(e,r,i),()=>{n.removeEventListener(e,r,i)}}dispatchEvent(n,e){n.dispatchEvent(e)}remove(n){n.remove()}createElement(n,e){return e=e||this.getDefaultDocument(),e.createElement(n)}createHtmlDocument(){return document.implementation.createHTMLDocument(`fakeTitle`)}getDefaultDocument(){return document}isElementNode(n){return n.nodeType===Node.ELEMENT_NODE}isShadowRoot(n){return n instanceof DocumentFragment}getGlobalEventTarget(n,e){return e===`window`?window:e===`document`?n:e===`body`?n.body:null}getBaseHref(n){let e=_F();return e==null?null:CF(e)}resetBaseElement(){Rl=null}getUserAgent(){return window.navigator.userAgent}getCookie(n){return Il(document.cookie,n)}};var Rl=null;function _F(){return Rl=Rl||document.head.querySelector(`base`),Rl?Rl.getAttribute(`href`):null}function CF(t){return new URL(t,document.baseURI).pathname}var rm=class{addToWindow(n){jt.getAngularTestability=(r,i=!0)=>{let o=n.findTestabilityInTree(r,i);if(o==null)throw new D(5103,!1);return o},jt.getAllAngularTestabilities=()=>n.getAllTestabilities(),jt.getAllAngularRootElements=()=>n.getAllRootElements();let e=r=>{let i=jt.getAllAngularTestabilities(),o=i.length,a=function(){o--,o==0&&r()};i.forEach(s=>{s.whenStable(a)})};jt.frameworkStabilizers||(jt.frameworkStabilizers=[]),jt.frameworkStabilizers.push(e)}findTestabilityInTree(n,e,r){if(e==null)return null;return n.getTestability(e)??(r?fn().isShadowRoot(e)?this.findTestabilityInTree(n,e.host,!0):this.findTestabilityInTree(n,e.parentElement,!0):null)}};var h0=[`alt`,`control`,`meta`,`shift`];var wF={"\b":`Backspace`,"	":`Tab`,"":`Delete`,"\x1B":`Escape`,Del:`Delete`,Esc:`Escape`,Left:`ArrowLeft`,Right:`ArrowRight`,Up:`ArrowUp`,Down:`ArrowDown`,Menu:`ContextMenu`,Scroll:`ScrollLock`,Win:`OS`};var xF={alt:t=>t.altKey,control:t=>t.ctrlKey,meta:t=>t.metaKey,shift:t=>t.shiftKey};var g0=(()=>{class t extends Nl{constructor(e){super(e)}supports(e){return t.parseEventName(e)!=null}addEventListener(e,r,i,o){let a=t.parseEventName(r),s=t.eventCallback(a.fullKey,i,this.manager.getZone());return this.manager.getZone().runOutsideAngular(()=>fn().onAndCancel(e,a.domEventName,s,o))}static parseEventName(e){let r=e.toLowerCase().split(`.`),i=r.shift();if(r.length===0||!(i===`keydown`||i===`keyup`))return null;let o=t._normalizeKey(r.pop()),a=``,s=r.indexOf(`code`);if(s>-1&&(r.splice(s,1),a=`code.`),h0.forEach(c=>{let d=r.indexOf(c);d>-1&&(r.splice(d,1),a+=c+`.`)}),a+=o,r.length!=0||o.length===0)return null;let l={};return l.domEventName=i,l.fullKey=a,l}static matchEventFullKeyCode(e,r){let i=wF[e.key]||e.key,o=``;return r.indexOf(`code.`)>-1&&(i=e.code,o=`code.`),i==null||!i?!1:(i=i.toLowerCase(),i===` `?i=`space`:i===`.`&&(i=`dot`),h0.forEach(a=>{if(a!==i){let s=xF[a];s(e)&&(o+=a+`.`)}}),o+=i,o===r)}static eventCallback(e,r,i){return o=>{t.matchEventFullKeyCode(o,e)&&i.runGuarded(()=>r(o))}}static _normalizeKey(e){return e===`esc`?`escape`:e}static ɵfac=function(r){return new(r||t)(P(z))};static ɵprov=q({token:t,factory:t.ɵfac})}return t})();function DF(){nm.makeCurrent()}function SF(){return new Qt}function EF(){return ug(document),document}var MF=db(r0,`browser`,[{provide:bo,useValue:wb},{provide:Zd,useValue:DF,multi:!0},{provide:z,useFactory:EF}]);var IF=[{provide:Ia,useClass:rm},{provide:Bu,useClass:yl,deps:[T,vl,Ia]},{provide:yl,useClass:yl,deps:[T,vl,Ia]}];var NF=[{provide:qs,useValue:`root`},{provide:Qt,useFactory:SF},{provide:tm,useClass:Xu,multi:!0},{provide:tm,useClass:g0,multi:!0},Nb,{provide:Do,useClass:Mb},{provide:Mb,useExisting:Do},kb,{provide:bt,useExisting:Nb},[]];var TF=(()=>{class t{constructor(){}static ɵfac=function(r){return new(r||t)};static ɵmod=R({type:t});static ɵinj=A({providers:[...NF,...IF],imports:[vb,XD]})}return t})();var _r=class t{headers;normalizedNames=new Map;lazyInit;lazyUpdate=null;constructor(n){n?typeof n==`string`?this.lazyInit=()=>{this.headers=new Map,n.split(`
`).forEach(e=>{let r=e.indexOf(`:`);if(r>0){let i=e.slice(0,r),o=e.slice(r+1).trim();this.addHeaderEntry(i,o)}})}:typeof Headers<`u`&&n instanceof Headers?(this.headers=new Map,n.forEach((e,r)=>{this.addHeaderEntry(r,e)})):this.lazyInit=()=>{this.headers=new Map,Object.entries(n).forEach(([e,r])=>{this.setHeaderEntries(e,r)})}:this.headers=new Map}has(n){return this.init(),this.headers.has(n.toLowerCase())}get(n){this.init();let e=this.headers.get(n.toLowerCase());return e&&e.length>0?e[0]:null}keys(){return this.init(),Array.from(this.normalizedNames.values())}getAll(n){return this.init(),this.headers.get(n.toLowerCase())||null}append(n,e){return this.clone({name:n,value:e,op:`a`})}set(n,e){return this.clone({name:n,value:e,op:`s`})}delete(n,e){return this.clone({name:n,value:e,op:`d`})}maybeSetNormalizedName(n,e){this.normalizedNames.has(e)||this.normalizedNames.set(e,n)}init(){this.lazyInit&&(this.lazyInit instanceof t?this.copyFrom(this.lazyInit):this.lazyInit(),this.lazyInit=null,this.lazyUpdate&&(this.lazyUpdate.forEach(n=>this.applyUpdate(n)),this.lazyUpdate=null))}copyFrom(n){n.init();for(let[e,r]of n.headers.entries())this.headers.set(e,r),this.normalizedNames.set(e,n.normalizedNames.get(e))}clone(n){let e=new t;return e.lazyInit=this.lazyInit&&this.lazyInit instanceof t?this.lazyInit:this,e.lazyUpdate=(this.lazyUpdate||[]).concat([n]),e}applyUpdate(n){let e=n.name.toLowerCase();switch(n.op){case`a`:case`s`:let r=n.value;if(typeof r==`string`&&(r=[r]),r.length===0)return;this.maybeSetNormalizedName(n.name,e);let i=n.op===`a`?(this.headers.get(e)||[]).slice():[];i.push(...r),this.headers.set(e,i);break;case`d`:let o=n.value;if(o===void 0)this.headers.delete(e),this.normalizedNames.delete(e);else{let a=Array.isArray(o)?o:[o],s=this.headers.get(e);if(!s)return;s=s.filter(l=>a.indexOf(l)===-1),s.length===0?(this.headers.delete(e),this.normalizedNames.delete(e)):this.headers.set(e,s)}}}addHeaderEntry(n,e){let r=n.toLowerCase();this.maybeSetNormalizedName(n,r),this.headers.has(r)?this.headers.get(r).push(e):this.headers.set(r,[e])}setHeaderEntries(n,e){let r=(Array.isArray(e)?e:[e]).map(o=>o.toString()),i=n.toLowerCase();this.headers.set(i,r),this.maybeSetNormalizedName(n,i)}forEach(n){this.init(),Array.from(this.normalizedNames.keys()).forEach(e=>n(this.normalizedNames.get(e),this.headers.get(e)))}};var om=class{map=new Map;set(n,e){return this.map.set(n,e),this}get(n){return this.map.has(n)||this.map.set(n,n.defaultValue()),this.map.get(n)}delete(n){return this.map.delete(n),this}has(n){return this.map.has(n)}keys(){return this.map.keys()}};var am=class{encodeKey(n){return b0(n)}encodeValue(n){return b0(n)}decodeKey(n){return decodeURIComponent(n)}decodeValue(n){return decodeURIComponent(n)}};function AF(t,n){let e=new Map;return t.length>0&&t.replace(/^\?/,``).split(`&`).forEach(i=>{let o=i.indexOf(`=`),[a,s]=o==-1?[n.decodeKey(i),``]:[n.decodeKey(i.slice(0,o)),n.decodeValue(i.slice(o+1))],l=e.get(a)||[];l.push(s),e.set(a,l)}),e}var RF=/[&+#]/g;function b0(t){return encodeURI(t).replace(RF,encodeURIComponent)}function im(t){return`${t}`}var Qr=class t{map;encoder;updates=null;cloneFrom=null;constructor(n={}){if(this.encoder=n.encoder||new am,n.fromString){if(n.fromObject)throw new D(2805,!1);this.map=AF(n.fromString,this.encoder)}else n.fromObject?(this.map=new Map,Object.keys(n.fromObject).forEach(e=>{let r=n.fromObject[e],i=Array.isArray(r)?r.map(im):[im(r)];this.map.set(e,i)})):this.map=null}has(n){return this.init(),this.map.has(n)}get(n){this.init();let e=this.map.get(n);return e?e[0]:null}getAll(n){return this.init(),this.map.get(n)||null}keys(){return this.init(),Array.from(this.map.keys())}append(n,e){return this.clone({param:n,value:e,op:`a`})}appendAll(n){let e=[];return Object.keys(n).forEach(r=>{let i=n[r];Array.isArray(i)?i.forEach(o=>{e.push({param:r,value:o,op:`a`})}):e.push({param:r,value:i,op:`a`})}),this.clone(e)}set(n,e){return this.clone({param:n,value:e,op:`s`})}delete(n,e){return this.clone({param:n,value:e,op:`d`})}toString(){return this.init(),this.keys().map(n=>{let e=this.encoder.encodeKey(n);return this.map.get(n).map(r=>e+`=`+this.encoder.encodeValue(r)).join(`&`)}).filter(n=>n!==``).join(`&`)}clone(n){let e=new t({encoder:this.encoder});return e.cloneFrom=this.cloneFrom||this,e.updates=(this.updates||[]).concat(n),e}init(){if(this.map===null&&(this.map=new Map),this.cloneFrom!==null){this.cloneFrom.init();for(let[n,e]of this.cloneFrom.map.entries())this.map.set(n,e);this.updates.forEach(n=>{switch(n.op){case`a`:case`s`:let e=n.op===`a`?(this.map.get(n.param)||[]).slice():[];e.push(im(n.value)),this.map.set(n.param,e);break;case`d`:if(n.value!==void 0){let r=(this.map.get(n.param)||[]).slice(),i=r.indexOf(im(n.value));i!==-1&&r.splice(i,1),r.length>0?this.map.set(n.param,r):this.map.delete(n.param)}else{this.map.delete(n.param);break}}}),this.cloneFrom=this.updates=null}}};function OF(t){switch(t){case`DELETE`:case`GET`:case`HEAD`:case`OPTIONS`:case`JSONP`:return!1;default:return!0}}function y0(t){return typeof ArrayBuffer<`u`&&t instanceof ArrayBuffer}function v0(t){return typeof Blob<`u`&&t instanceof Blob}function _0(t){return typeof FormData<`u`&&t instanceof FormData}function FF(t){return typeof URLSearchParams<`u`&&t instanceof URLSearchParams}var Ol=`Content-Type`;var sm=`Accept`;var D0=`text/plain`;var S0=`application/json`;var E0=`${S0}, ${D0}, */*`;var Fa=class t{url;body=null;headers;context;reportProgress=!1;reportUploadProgress=!1;reportDownloadProgress=!1;withCredentials=!1;credentials;keepalive=!1;cache;priority;mode;redirect;referrer;integrity;referrerPolicy;responseType=`json`;method;params;urlWithParams;transferCache;timeout;constructor(n,e,r,i){this.url=e,this.method=n.toUpperCase();let o;if(OF(this.method)||i?(this.body=r!==void 0?r:null,o=i):o=r,o){if(this.reportProgress=!!o.reportProgress,this.reportUploadProgress=!!o.reportUploadProgress,this.reportDownloadProgress=!!o.reportDownloadProgress,this.withCredentials=!!o.withCredentials,this.keepalive=!!o.keepalive,o.responseType&&(this.responseType=o.responseType),o.headers&&(this.headers=o.headers),o.context&&(this.context=o.context),o.params&&(this.params=o.params),o.priority&&(this.priority=o.priority),o.cache&&(this.cache=o.cache),o.credentials&&(this.credentials=o.credentials),typeof o.timeout==`number`){if(o.timeout<1||!Number.isInteger(o.timeout))throw new D(2822,``);this.timeout=o.timeout}o.mode&&(this.mode=o.mode),o.redirect&&(this.redirect=o.redirect),o.integrity&&(this.integrity=o.integrity),o.referrer!==void 0&&(this.referrer=o.referrer),o.referrerPolicy&&(this.referrerPolicy=o.referrerPolicy),this.transferCache=o.transferCache}if(this.headers??=new _r,this.context??=new om,!this.params)this.params=new Qr,this.urlWithParams=e;else{let a=this.params.toString();if(a.length===0)this.urlWithParams=e;else{let s=e,l=``,c=e.indexOf(`#`);c!==-1&&(l=e.substring(c),s=e.substring(0,c));let d=s.indexOf(`?`),m=d===-1?`?`:d<s.length-1?`&`:``;this.urlWithParams=s+m+a+l}}}serializeBody(){return this.body===null?null:typeof this.body==`string`||y0(this.body)||v0(this.body)||_0(this.body)||FF(this.body)?this.body:this.body instanceof Qr?this.body.toString():typeof this.body==`object`||typeof this.body==`boolean`||Array.isArray(this.body)?JSON.stringify(this.body):this.body.toString()}detectContentTypeHeader(){return this.body===null||_0(this.body)?null:v0(this.body)?this.body.type||null:y0(this.body)?null:typeof this.body==`string`?D0:this.body instanceof Qr?`application/x-www-form-urlencoded;charset=UTF-8`:typeof this.body==`object`||typeof this.body==`number`||typeof this.body==`boolean`?S0:null}clone(n={}){let e=n.method||this.method,r=n.url||this.url,i=n.responseType||this.responseType,o=n.keepalive??this.keepalive,a=n.priority||this.priority,s=n.cache||this.cache,l=n.mode||this.mode,c=n.redirect||this.redirect,d=n.credentials||this.credentials,m=n.referrer??this.referrer,p=n.integrity||this.integrity,f=n.referrerPolicy||this.referrerPolicy,h=n.transferCache??this.transferCache,v=n.timeout??this.timeout,M=n.body!==void 0?n.body:this.body,V=n.withCredentials??this.withCredentials,O=n.reportProgress??this.reportProgress,pe=n.reportUploadProgress??this.reportUploadProgress,Vt=n.reportDownloadProgress??this.reportDownloadProgress,ln=n.headers||this.headers,nt=n.params||this.params,Bn=n.context??this.context;return n.setHeaders!==void 0&&(ln=Object.keys(n.setHeaders).reduce((or,Cn)=>or.set(Cn,n.setHeaders[Cn]),ln)),n.setParams&&(nt=Object.keys(n.setParams).reduce((or,Cn)=>or.set(Cn,n.setParams[Cn]),nt)),new t(e,r,M,{params:nt,headers:ln,context:Bn,reportProgress:O,reportUploadProgress:pe,reportDownloadProgress:Vt,responseType:i,withCredentials:V,transferCache:h,keepalive:o,cache:s,priority:a,timeout:v,mode:l,redirect:c,credentials:d,referrer:m,integrity:p,referrerPolicy:f})}};var vr=(function(t){return t[t.Sent=0]=`Sent`,t[t.UploadProgress=1]=`UploadProgress`,t[t.ResponseHeader=2]=`ResponseHeader`,t[t.DownloadProgress=3]=`DownloadProgress`,t[t.Response=4]=`Response`,t[t.User=5]=`User`,t})(vr||{});var Pa=class{headers;status;statusText;url;ok;type;redirected;responseType;constructor(n,e=200,r=`OK`){this.headers=n.headers||new _r,this.status=n.status!==void 0?n.status:e,this.statusText=n.statusText||r,this.url=n.url||null,this.redirected=n.redirected,this.responseType=n.responseType,this.ok=this.status>=200&&this.status<300}};var Fl=class t extends Pa{constructor(n={}){super(n)}type=vr.ResponseHeader;clone(n={}){return new t({headers:n.headers||this.headers,status:n.status!==void 0?n.status:this.status,statusText:n.statusText||this.statusText,url:n.url||this.url||void 0})}};var La=class t extends Pa{body;constructor(n={}){super(n),this.body=n.body!==void 0?n.body:null}type=vr.Response;clone(n={}){return new t({body:n.body!==void 0?n.body:this.body,headers:n.headers||this.headers,status:n.status!==void 0?n.status:this.status,statusText:n.statusText||this.statusText,url:n.url||this.url||void 0,redirected:n.redirected??this.redirected,responseType:n.responseType??this.responseType})}};var yr=class extends Pa{name=`HttpErrorResponse`;message;error;ok=!1;constructor(n){super(n,0,`Unknown Error`),this.status>=200&&this.status<300?this.message=`Http failure during parsing for ${n.url||`(unknown url)`}`:this.message=`Http failure response for ${n.url||`(unknown url)`}: ${n.status} ${n.statusText}`,this.error=n.error||null}};var k0=200;var PF=204;var LF=/^\)\]\}',?\n/;var M0=new g(``,{factory:()=>null});var lm=(()=>{class t{fetchImpl=u(Ab,{optional:!0})?.fetch??((...e)=>globalThis.fetch(...e));ngZone=u(T);destroyRef=u(ut);maxResponseSize=u(M0);handle(e){return new ie(r=>{let i=new AbortController,o=!1,a={next:l=>{l.type===vr.Response&&(o=!0),r.next(l)},error:l=>{o=!0,r.error(l)},complete:()=>{o=!0,r.complete()}};this.doRequest(e,i.signal,a).then(Rb,l=>a.error(new yr({error:l})));let s;return e.timeout&&(s=this.ngZone.runOutsideAngular(()=>setTimeout(()=>{i.signal.aborted||i.abort(new DOMException(`signal timed out`,`TimeoutError`))},e.timeout))),()=>{s!==void 0&&clearTimeout(s),!o&&!i.signal.aborted&&i.abort()}})}doRequest(e,r,i){return Ie(this,null,function*(){let o=this.createRequestInit(e),a;try{let M=this.ngZone.runOutsideAngular(()=>this.fetchImpl(e.urlWithParams,b({signal:r},o)));VF(M),i.next({type:vr.Sent}),a=yield M}catch(M){i.error(new yr({error:M,status:M.status??0,statusText:M.statusText,url:e.urlWithParams,headers:M.headers}));return}let s=new _r(a.headers),l=a.statusText,c=a.url||e.urlWithParams,d=a.status,m=null,p=e.reportProgress||e.reportDownloadProgress;if(p&&i.next(new Fl({headers:s,status:d,statusText:l,url:c})),a.body){let M=a.headers.get(Ol)??``,V=a.headers.get(`content-length`),O=V!==null?Number(V):NaN;this.maxResponseSize!==null&&Number.isFinite(O)&&O>this.maxResponseSize&&(yield a.body.cancel(),C0(this.maxResponseSize));let pe=[],Vt=a.body.getReader(),ln=0,nt,Bn,or=typeof Zone<`u`&&Zone.current,Cn=!1;if(yield this.ngZone.runOutsideAngular(()=>Ie(this,null,function*(){for(;;){if(this.destroyRef.destroyed){yield Vt.cancel(),Cn=!0;break}let{done:Pe,value:x}=yield Vt.read();if(Pe)break;if(pe.push(x),ln+=x.length,this.maxResponseSize!==null&&ln>this.maxResponseSize&&(yield Vt.cancel(),C0(this.maxResponseSize)),p){Bn=e.responseType===`text`?(Bn??``)+(nt??=w0(M)).decode(x,{stream:!0}):void 0;let Be=()=>i.next({type:vr.DownloadProgress,total:Number.isFinite(O)?O:void 0,loaded:ln,partialText:Bn});or?or.run(Be):Be()}}})),Cn){i.complete();return}let he=this.concatChunks(pe,ln);try{m=this.parseBody(e,he,M,d)}catch(Pe){i.error(new yr({error:Pe,headers:new _r(a.headers),status:a.status,statusText:a.statusText,url:a.url||e.urlWithParams}));return}}d===0&&(d=m?k0:0);let f=d>=200&&d<300,h=a.redirected,v=a.type;f?(i.next(new La({body:m,headers:s,status:d,statusText:l,url:c,redirected:h,responseType:v})),i.complete()):i.error(new yr({error:m,headers:s,status:d,statusText:l,url:c,redirected:h,responseType:v}))})}parseBody(e,r,i,o){switch(e.responseType){case`json`:let a=new TextDecoder().decode(r).replace(LF,``);if(a===``)return null;try{return JSON.parse(a)}catch(s){if(o<200||o>=300)return a;throw s}case`text`:return w0(i).decode(r);case`blob`:return new Blob([r],{type:i});case`arraybuffer`:return r.buffer}}createRequestInit(e){if(e.reportUploadProgress)throw new D(2824,!1);let r={},i;if(i=e.credentials,e.withCredentials&&(i=`include`),e.headers.forEach((o,a)=>r[o]=a.join(`,`)),e.headers.has(sm)||(r[sm]=E0),!e.headers.has(Ol)){let o=e.detectContentTypeHeader();o!==null&&(r[Ol]=o)}return{body:e.serializeBody(),method:e.method,headers:r,credentials:i,keepalive:e.keepalive,cache:e.cache,priority:e.priority,mode:e.mode,redirect:e.redirect,referrer:e.referrer,integrity:e.integrity,referrerPolicy:e.referrerPolicy}}concatChunks(e,r){let i=new Uint8Array(r),o=0;for(let a of e)i.set(a,o),o+=a.length;return i}static ɵfac=function(r){return new(r||t)};static ɵprov=S({token:t,factory:t.ɵfac})}return t})();var Ab=class{};function Rb(){}function VF(t){t.then(Rb,Rb)}function C0(t){throw new D(-2825,!1)}var BF=/charset=\s*["']?([^;"'\s]+)["']?/i;function w0(t){let n=t.match(BF);if(n!==null)try{return new TextDecoder(n[1])}catch(e){}return new TextDecoder}var jF=new g(``,{factory:()=>!0});var zF=`XSRF-TOKEN`;var HF=new g(``,{factory:()=>zF});var UF=`X-XSRF-TOKEN`;var $F=new g(``,{factory:()=>UF});var GF=(()=>{class t{cookieName=u(HF);doc=u(z);lastCookieString=``;lastToken=null;parseCount=0;getToken(){let e=this.doc.cookie||``;return e!==this.lastCookieString&&(this.parseCount++,this.lastToken=Il(e,this.cookieName),this.lastCookieString=e),this.lastToken}static ɵfac=function(r){return new(r||t)};static ɵprov=S({token:t,factory:t.ɵfac})}return t})();var I0=(()=>{class t{static ɵfac=function(r){return new(r||t)};static ɵprov=q({token:t,factory:function(r){let i=null;return r?i=new(r||t):i=P(GF),i},providedIn:`root`})}return t})();function N0(t,n){if(!u(jF)||t.method===`GET`||t.method===`HEAD`)return n(t);try{let i=u(Zr).href,{origin:o}=new URL(i),{origin:a}=new URL(t.url,o);if(o!==a)return n(t)}catch(i){return n(t)}let e=u(I0).getToken(),r=u($F);return e!=null&&!t.headers.has(r)&&(t=t.clone({headers:t.headers.set(r,e)})),n(t)}function T0(t,n){return n(t)}function WF(t,n){return(e,r)=>n.intercept(e,{handle:i=>t(i,r)})}function qF(t,n,e){return(r,i)=>ht(e,()=>n(r,o=>t(o,i)))}var A0=new g(``);var Fb=new g(``,{factory:()=>[N0]});var R0=new g(``);var Pb=new g(``,{factory:()=>!0});function YF(){let t=null;return(n,e)=>{t===null&&(t=(u(A0,{optional:!0})??[]).reduceRight(WF,T0));let r=u(ba);if(u(Pb)){let o=r.add();return t(n,e).pipe(xi(o))}else return t(n,e)}}var dm=(()=>{class t{static ɵfac=function(r){return new(r||t)};static ɵprov=q({token:t,factory:function(r){let i=null;return r?i=new(r||t):i=P(lm),i},providedIn:`root`})}return t})();var cm=(()=>{class t{backend;injector;chain=null;pendingTasks=u(ba);contributeToStability=u(Pb);constructor(e,r){this.backend=e,this.injector=r}handle(e){if(this.chain===null){let i=this.injector.get(um,null,{skipSelf:!0}),o=i!==null&&this.backend===i,a=this.injector.get(R0,[],o?{self:!0}:void 0),s=Array.from(new Set([...this.injector.get(Fb),...a]));this.chain=s.reduceRight((l,c)=>qF(l,c,this.injector),T0)}let r=this.chain;if(this.contributeToStability){let i=this.pendingTasks.add();return fe(()=>r(e,o=>this.backend.handle(o))).pipe(xi(i))}else return fe(()=>r(e,i=>this.backend.handle(i)))}static ɵfac=function(r){return new(r||t)(P(dm),P(Ue))};static ɵprov=q({token:t,factory:t.ɵfac,providedIn:`root`})}return t})();var um=(()=>{class t{static ɵfac=function(r){return new(r||t)};static ɵprov=q({token:t,factory:function(r){let i=null;return r?i=new(r||t):i=P(cm),i},providedIn:`root`})}return t})();function Tb(t,n){return b({body:n},t)}var mm=(()=>{class t{handler;constructor(e){this.handler=e}request(e,r,i={}){let o;if(e instanceof Fa)o=e;else{let l;i.headers instanceof _r?l=i.headers:l=new _r(i.headers);let c;i.params&&(i.params instanceof Qr?c=i.params:c=new Qr({fromObject:i.params})),o=new Fa(e,r,i.body!==void 0?i.body:null,{headers:l,context:i.context,params:c,reportProgress:i.reportProgress,reportUploadProgress:i.reportUploadProgress,reportDownloadProgress:i.reportDownloadProgress,responseType:i.responseType||`json`,withCredentials:i.withCredentials,transferCache:i.transferCache,keepalive:i.keepalive,priority:i.priority,cache:i.cache,mode:i.mode,redirect:i.redirect,credentials:i.credentials,referrer:i.referrer,referrerPolicy:i.referrerPolicy,integrity:i.integrity,timeout:i.timeout})}let a=j(o).pipe(wi(l=>this.handler.handle(l)));if(e instanceof Fa||i.observe===`events`)return a;let s=a.pipe(Ee(l=>l instanceof La));switch(i.observe||`body`){case`body`:switch(o.responseType){case`arraybuffer`:return s.pipe(oe(l=>{if(l.body!==null&&!(l.body instanceof ArrayBuffer))throw new D(2806,!1);return l.body}));case`blob`:return s.pipe(oe(l=>{if(l.body!==null&&!(l.body instanceof Blob))throw new D(2807,!1);return l.body}));case`text`:return s.pipe(oe(l=>{if(l.body!==null&&typeof l.body!=`string`)throw new D(2808,!1);return l.body}));default:return s.pipe(oe(l=>l.body))}case`response`:return s;default:throw new D(2809,!1)}}delete(e,r={}){return this.request(`DELETE`,e,r)}get(e,r={}){return this.request(`GET`,e,r)}head(e,r={}){return this.request(`HEAD`,e,r)}jsonp(e,r){return this.request(`JSONP`,e,{params:new Qr().append(r,`JSONP_CALLBACK`),observe:`body`,responseType:`json`})}options(e,r={}){return this.request(`OPTIONS`,e,r)}patch(e,r,i={}){return this.request(`PATCH`,e,Tb(i,r))}post(e,r,i={}){return this.request(`POST`,e,Tb(i,r))}put(e,r,i={}){return this.request(`PUT`,e,Tb(i,r))}static ɵfac=function(r){return new(r||t)(P(um))};static ɵprov=q({token:t,factory:t.ɵfac,providedIn:`root`})}return t})();var KF=/^\)\]\}',?\n/;var Ob=(()=>{class t{xhrFactory;tracingService=u(In,{optional:!0});constructor(e){this.xhrFactory=e}maybePropagateTrace(e){return this.tracingService?.propagate?this.tracingService.propagate(e):e}handle(e){if(e.method===`JSONP`)throw new D(-2800,!1);let r=this.xhrFactory;return j(null).pipe(Ct(()=>new ie(o=>{let a=r.build();if(a.open(e.method,e.urlWithParams),e.withCredentials&&(a.withCredentials=!0),e.headers.forEach((O,pe)=>a.setRequestHeader(O,pe.join(`,`))),e.headers.has(sm)||a.setRequestHeader(sm,E0),!e.headers.has(Ol)){let O=e.detectContentTypeHeader();O!==null&&a.setRequestHeader(Ol,O)}if(e.timeout&&(a.timeout=e.timeout),e.responseType){let O=e.responseType.toLowerCase();a.responseType=O!==`json`?O:`text`}let s=e.serializeBody(),l=null,c=()=>{if(l!==null)return l;let O=a.statusText||`OK`,pe=new _r(a.getAllResponseHeaders()),Vt=a.responseURL||e.url;return l=new Fl({headers:pe,status:a.status,statusText:O,url:Vt}),l},d=this.maybePropagateTrace(()=>{let{headers:O,status:pe,statusText:Vt,url:ln}=c(),nt=null;pe!==PF&&(nt=typeof a.response>`u`?a.responseText:a.response),pe===0&&(pe=nt?k0:0);let Bn=pe>=200&&pe<300;if(e.responseType===`json`&&typeof nt==`string`){let or=nt;nt=nt.replace(KF,``);try{nt=nt!==``?JSON.parse(nt):null}catch(Cn){nt=or,Bn&&(Bn=!1,nt={error:Cn,text:nt})}}Bn?(o.next(new La({body:nt,headers:O,status:pe,statusText:Vt,url:ln||void 0})),o.complete()):o.error(new yr({error:nt,headers:O,status:pe,statusText:Vt,url:ln||void 0}))}),m=this.maybePropagateTrace(O=>{let{url:pe}=c(),Vt=new yr({error:O,status:a.status||0,statusText:a.statusText||`Unknown Error`,url:pe||void 0});o.error(Vt)}),p=m;e.timeout&&(p=this.maybePropagateTrace(O=>{let{url:pe}=c(),Vt=new yr({error:new DOMException(`Request timed out`,`TimeoutError`),status:a.status||0,statusText:a.statusText||`Request timeout`,url:pe||void 0});o.error(Vt)}));let f=!1,h=this.maybePropagateTrace(O=>{f||(o.next(c()),f=!0);let pe={type:vr.DownloadProgress,loaded:O.loaded};O.lengthComputable&&(pe.total=O.total),e.responseType===`text`&&a.responseText&&(pe.partialText=a.responseText),o.next(pe)}),v=this.maybePropagateTrace(O=>{let pe={type:vr.UploadProgress,loaded:O.loaded};O.lengthComputable&&(pe.total=O.total),o.next(pe)});a.addEventListener(`load`,d),a.addEventListener(`error`,m),a.addEventListener(`timeout`,p),a.addEventListener(`abort`,m);let M=e.reportProgress||e.reportUploadProgress,V=e.reportProgress||e.reportDownloadProgress;return V&&a.addEventListener(`progress`,h),M&&s!==null&&a.upload&&a.upload.addEventListener(`progress`,v),a.send(s),o.next({type:vr.Sent}),()=>{a.removeEventListener(`error`,m),a.removeEventListener(`abort`,m),a.removeEventListener(`load`,d),a.removeEventListener(`timeout`,p),V&&a.removeEventListener(`progress`,h),M&&s!==null&&a.upload&&a.upload.removeEventListener(`progress`,v),a.readyState!==a.DONE&&a.abort()}})))}static ɵfac=function(r){return new(r||t)(P(_b))};static ɵprov=q({token:t,factory:t.ɵfac,providedIn:`root`})}return t})();var fm=(function(t){return t[t.Interceptors=0]=`Interceptors`,t[t.LegacyInterceptors=1]=`LegacyInterceptors`,t[t.CustomXsrfConfiguration=2]=`CustomXsrfConfiguration`,t[t.NoXsrfProtection=3]=`NoXsrfProtection`,t[t.JsonpSupport=4]=`JsonpSupport`,t[t.RequestsMadeViaParent=5]=`RequestsMadeViaParent`,t[t.Fetch=6]=`Fetch`,t[t.Xhr=7]=`Xhr`,t})(fm||{});function O0(t,n){return{ɵkind:t,ɵproviders:n}}function ZF(...t){let n=[mm,lm,cm,{provide:um,useExisting:cm},{provide:dm,useFactory:()=>u(lm)},{provide:Fb,useValue:N0,multi:!0}];for(let e of t)n.push(...e.ɵproviders);return lr(n)}var x0=new g(``);function QF(){return O0(fm.LegacyInterceptors,[{provide:x0,useFactory:YF},{provide:Fb,useExisting:x0,multi:!0}])}function XF(){return O0(fm.Xhr,[Ob,{provide:dm,useExisting:Ob}])}var F0=(()=>{class t{_doc;constructor(e){this._doc=e}getTitle(){return this._doc.title}setTitle(e){this._doc.title=e||``}static ɵfac=function(r){return new(r||t)(P(z))};static ɵprov=q({token:t,factory:t.ɵfac,providedIn:`root`})}return t})();var Pl=(()=>{class t{static ɵfac=function(r){return new(r||t)};static ɵprov=q({token:t,factory:function(r){let i=null;return r?i=new(r||t):i=P(e1),i},providedIn:`root`})}return t})();var e1=(()=>{class t extends Pl{_doc=u(z);sanitize(e,r){if(r==null)return null;switch(e){case Te.NONE:return r;case Te.HTML:return Wr(r,`HTML`)?rn(r):vg(this._doc,String(r)).toString();case Te.STYLE:return Wr(r,`Style`)?rn(r):r;case Te.SCRIPT:if(Wr(r,`Script`))return rn(r);throw new D(5200,!1);case Te.URL:return Wr(r,`URL`)?rn(r):ml(String(r));case Te.RESOURCE_URL:if(Wr(r,`ResourceURL`))return rn(r);throw new D(-5201,!1);default:throw new D(5202,!1)}}bypassSecurityTrustHtml(e){return pg(e)}bypassSecurityTrustStyle(e){return hg(e)}bypassSecurityTrustScript(e){return gg(e)}bypassSecurityTrustUrl(e){return bg(e)}bypassSecurityTrustResourceUrl(e){return yg(e)}static ɵfac=function(r){return new(r||t)};static ɵprov=S({token:t,factory:t.ɵfac})}return t})();var G0=(()=>{class t{_renderer;_elementRef;onChange=e=>{};onTouched=()=>{};constructor(e,r){this._renderer=e,this._elementRef=r}setProperty(e,r){this._renderer.setProperty(this._elementRef.nativeElement,e,r)}registerOnTouched(e){this.onTouched=e}registerOnChange(e){this.onChange=e}setDisabledState(e){this.setProperty(`disabled`,e)}static ɵfac=function(r){return new(r||t)(me(ke),me(N))};static ɵdir=w({type:t})}return t})();var t1=(()=>{class t extends G0{static ɵfac=(()=>{let e;return function(i){return(e||(e=Ae(t)))(i||t)}})();static ɵdir=w({type:t,features:[re]})}return t})();var Jr=new g(``);var n1={provide:Jr,useExisting:pt(()=>W0),multi:!0};function r1(){let t=fn()?fn().getUserAgent():``;return/android (\d+)/.test(t.toLowerCase())}var i1=new g(``);var W0=(()=>{class t extends G0{_compositionMode;_composing=!1;constructor(e,r,i){super(e,r),this._compositionMode=i,this._compositionMode??=!r1()}writeValue(e){let r=e??``;this.setProperty(`value`,r)}_handleInput(e){(!this._compositionMode||this._compositionMode&&!this._composing)&&this.onChange(e)}_compositionStart(){this._composing=!0}_compositionEnd(e){this._composing=!1,this._compositionMode&&this.onChange(e)}static ɵfac=function(r){return new(r||t)(me(ke),me(N),me(i1,8))};static ɵdir=w({type:t,selectors:[[`input`,`formControlName`,``,3,`type`,`checkbox`,3,`ngNoCva`,``],[`textarea`,`formControlName`,``,3,`ngNoCva`,``],[`input`,`formControl`,``,3,`type`,`checkbox`,3,`ngNoCva`,``],[`textarea`,`formControl`,``,3,`ngNoCva`,``],[`input`,`ngModel`,``,3,`type`,`checkbox`,3,`ngNoCva`,``],[`textarea`,`ngModel`,``,3,`ngNoCva`,``],[``,`ngDefaultControl`,``]],hostBindings:function(r,i){r&1&&Q(`input`,function(a){return i._handleInput(a.target.value)})(`blur`,function(){return i.onTouched()})(`compositionstart`,function(){return i._compositionStart()})(`compositionend`,function(a){return i._compositionEnd(a.target.value)})},standalone:!1,features:[ye([n1]),re]})}return t})();function Hb(t){return t==null||Ub(t)===0}function Ub(t){return t==null?null:Array.isArray(t)||typeof t==`string`?t.length:t instanceof Set?t.size:null}var ei=new g(``);var xm=new g(``);var o1=/^(?=.{1,254}$)(?=.{1,64}@)[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+)*@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;var Xr=class{static min(n){return a1(n)}static max(n){return s1(n)}static required(n){return q0(n)}static requiredTrue(n){return l1(n)}static email(n){return c1(n)}static minLength(n){return d1(n)}static maxLength(n){return u1(n)}static pattern(n){return m1(n)}static nullValidator(n){return hm()}static compose(n){return J0(n)}static composeAsync(n){return eS(n)}};function a1(t){return n=>{if(n.value==null||t==null)return null;let e=parseFloat(n.value);return!isNaN(e)&&e<t?{min:{min:t,actual:n.value}}:null}}function s1(t){return n=>{if(n.value==null||t==null)return null;let e=parseFloat(n.value);return!isNaN(e)&&e>t?{max:{max:t,actual:n.value}}:null}}function q0(t){return Hb(t.value)?{required:!0}:null}function l1(t){return t.value===!0?null:{required:!0}}function c1(t){return Hb(t.value)||o1.test(t.value)?null:{email:!0}}function d1(t){return n=>{let e=n.value?.length??Ub(n.value);return e===null||e===0?null:e<t?{minlength:{requiredLength:t,actualLength:e}}:null}}function u1(t){return n=>{let e=n.value?.length??Ub(n.value);return e!==null&&e>t?{maxlength:{requiredLength:t,actualLength:e}}:null}}function m1(t){if(!t)return hm;let n,e;return typeof t==`string`?(e=``,t.charAt(0)!==`^`&&(e+=`^`),e+=t,t.charAt(t.length-1)!==`$`&&(e+=`$`),n=new RegExp(e)):(e=t.toString(),n=t),r=>{if(Hb(r.value))return null;let i=r.value;return n.test(i)?null:{pattern:{requiredPattern:e,actualValue:i}}}}function hm(t){return null}function Y0(t){return t!=null}function K0(t){return Yr(t)?Ye(t):t}function Z0(t){let n={};return t.forEach(e=>{n=e!=null?b(b({},n),e):n}),Object.keys(n).length===0?null:n}function Q0(t,n){return n.map(e=>e(t))}function f1(t){return!t.validate}function X0(t){return t.map(n=>f1(n)?n:e=>n.validate(e))}function J0(t){if(!t)return null;let n=t.filter(Y0);return n.length==0?null:function(e){return Z0(Q0(e,n))}}function $b(t){return t!=null?J0(X0(t)):null}function eS(t){if(!t)return null;let n=t.filter(Y0);return n.length==0?null:function(e){return As(Q0(e,n).map(K0)).pipe(oe(Z0))}}function Gb(t){return t!=null?eS(X0(t)):null}function L0(t,n){return t===null?[n]:Array.isArray(t)?[...t,n]:[t,n]}function tS(t){return t._rawValidators}function nS(t){return t._rawAsyncValidators}function Lb(t){return t?Array.isArray(t)?t:[t]:[]}function gm(t,n){return Array.isArray(t)?t.includes(n):t===n}function V0(t,n){let e=Lb(n);return Lb(t).forEach(i=>{gm(e,i)||e.push(i)}),e}function B0(t,n){return Lb(n).filter(e=>!gm(t,e))}var bm=class{get value(){return this.control?this.control.value:null}get valid(){return this.control?this.control.valid:null}get invalid(){return this.control?this.control.invalid:null}get pending(){return this.control?this.control.pending:null}get disabled(){return this.control?this.control.disabled:null}get enabled(){return this.control?this.control.enabled:null}get errors(){return this.control?this.control.errors:null}get pristine(){return this.control?this.control.pristine:null}get dirty(){return this.control?this.control.dirty:null}get touched(){return this.control?this.control.touched:null}get status(){return this.control?this.control.status:null}get untouched(){return this.control?this.control.untouched:null}get statusChanges(){return this.control?this.control.statusChanges:null}get valueChanges(){return this.control?this.control.valueChanges:null}get path(){return null}_composedValidatorFn;_composedAsyncValidatorFn;_rawValidators=[];_rawAsyncValidators=[];_setValidators(n){this._rawValidators=n||[],this._composedValidatorFn=$b(this._rawValidators)}_setAsyncValidators(n){this._rawAsyncValidators=n||[],this._composedAsyncValidatorFn=Gb(this._rawAsyncValidators)}get validator(){return this._composedValidatorFn||null}get asyncValidator(){return this._composedAsyncValidatorFn||null}_onDestroyCallbacks=[];_registerOnDestroy(n){this._onDestroyCallbacks.push(n)}_invokeOnDestroyCallbacks(){this._onDestroyCallbacks.forEach(n=>n()),this._onDestroyCallbacks=[]}reset(n=void 0){this.control?.reset(n)}hasError(n,e){return this.control?this.control.hasError(n,e):!1}getError(n,e){return this.control?this.control.getError(n,e):null}};var Cr=class extends bm{name;get formDirective(){return null}get path(){return null}};var Ll=`VALID`;var pm=`INVALID`;var Va=`PENDING`;var Vl=`DISABLED`;var Ri=class{};var ym=class extends Ri{value;source;constructor(n,e){super(),this.value=n,this.source=e}};var jl=class extends Ri{pristine;source;constructor(n,e){super(),this.pristine=n,this.source=e}};var zl=class extends Ri{touched;source;constructor(n,e){super(),this.touched=n,this.source=e}};var Ba=class extends Ri{status;source;constructor(n,e){super(),this.status=n,this.source=e}};var vm=class extends Ri{source;constructor(n){super(),this.source=n}};var Io=class extends Ri{source;constructor(n){super(),this.source=n}};function Wb(t){return(Dm(t)?t.validators:t)||null}function p1(t){return Array.isArray(t)?$b(t):t||null}function qb(t,n){return(Dm(n)?n.asyncValidators:t)||null}function h1(t){return Array.isArray(t)?Gb(t):t||null}function Dm(t){return t!=null&&!Array.isArray(t)&&typeof t==`object`}function rS(t,n,e){let r=t.controls;if(!(n?Object.keys(r):r).length)throw new D(1e3,``);if(!oS(r,e))throw new D(1001,``)}function iS(t,n,e){t._forEachChild((r,i)=>{if(e[i]===void 0)throw new D(-1002,``)})}var za=class{_pendingDirty=!1;_hasOwnPendingAsyncValidator=null;_pendingTouched=!1;_onCollectionChange=()=>{};_updateOn;_hasRequired=L(!1);_parent=null;_asyncValidationSubscription;_composedValidatorFn;_composedAsyncValidatorFn;_rawValidators;_rawAsyncValidators;value;constructor(n,e){this._assignValidators(n),this._assignAsyncValidators(e)}get validator(){return this._composedValidatorFn}set validator(n){this._rawValidators=this._composedValidatorFn=n,this._updateHasRequiredValidator()}get asyncValidator(){return this._composedAsyncValidatorFn}set asyncValidator(n){this._rawAsyncValidators=this._composedAsyncValidatorFn=n}get parent(){return this._parent}get status(){return fe(this.statusReactive)}set status(n){fe(()=>this.statusReactive.set(n))}_status=Xt(()=>this.statusReactive());statusReactive=L(void 0);get valid(){return this.status===Ll}get invalid(){return this.status===pm}get pending(){return this.status===Va}get disabled(){return this.status===Vl}get enabled(){return this.status!==Vl}errors;get pristine(){return fe(this.pristineReactive)}set pristine(n){fe(()=>this.pristineReactive.set(n))}_pristine=Xt(()=>this.pristineReactive());pristineReactive=L(!0);get dirty(){return!this.pristine}get touched(){return fe(this.touchedReactive)}set touched(n){fe(()=>this.touchedReactive.set(n))}_touched=Xt(()=>this.touchedReactive());touchedReactive=L(!1);get untouched(){return!this.touched}_events=new _;events=this._events.asObservable();valueChanges;statusChanges;get updateOn(){return this._updateOn?this._updateOn:this.parent?this.parent.updateOn:`change`}setValidators(n){this._assignValidators(n)}setAsyncValidators(n){this._assignAsyncValidators(n)}addValidators(n){this.setValidators(V0(n,this._rawValidators))}addAsyncValidators(n){this.setAsyncValidators(V0(n,this._rawAsyncValidators))}removeValidators(n){this.setValidators(B0(n,this._rawValidators))}removeAsyncValidators(n){this.setAsyncValidators(B0(n,this._rawAsyncValidators))}hasValidator(n){return gm(this._rawValidators,n)}hasAsyncValidator(n){return gm(this._rawAsyncValidators,n)}clearValidators(){this.validator=null}clearAsyncValidators(){this.asyncValidator=null}markAsTouched(n={}){let e=this.touched===!1;this.touched=!0;let r=n.sourceControl??this;n.onlySelf||this._parent?.markAsTouched(K(b({},n),{sourceControl:r})),e&&n.emitEvent!==!1&&this._events.next(new zl(!0,r))}markAllAsDirty(n={}){this.markAsDirty({onlySelf:!0,emitEvent:n.emitEvent,sourceControl:this}),this._forEachChild(e=>e.markAllAsDirty(n))}markAllAsTouched(n={}){this.markAsTouched({onlySelf:!0,emitEvent:n.emitEvent,sourceControl:this}),this._forEachChild(e=>e.markAllAsTouched(n))}markAsUntouched(n={}){let e=this.touched===!0;this.touched=!1,this._pendingTouched=!1;let r=n.sourceControl??this;this._forEachChild(i=>{i.markAsUntouched({onlySelf:!0,emitEvent:n.emitEvent,sourceControl:r})}),n.onlySelf||this._parent?._updateTouched(n,r),e&&n.emitEvent!==!1&&this._events.next(new zl(!1,r))}markAsDirty(n={}){let e=this.pristine===!0;this.pristine=!1;let r=n.sourceControl??this;n.onlySelf||this._parent?.markAsDirty(K(b({},n),{sourceControl:r})),e&&n.emitEvent!==!1&&this._events.next(new jl(!1,r))}markAsPristine(n={}){let e=this.pristine===!1;this.pristine=!0,this._pendingDirty=!1;let r=n.sourceControl??this;this._forEachChild(i=>{i.markAsPristine({onlySelf:!0,emitEvent:n.emitEvent})}),n.onlySelf||this._parent?._updatePristine(n,r),e&&n.emitEvent!==!1&&this._events.next(new jl(!0,r))}markAsPending(n={}){this.status=Va;let e=n.sourceControl??this;n.emitEvent!==!1&&(this._events.next(new Ba(this.status,e)),this.statusChanges.emit(this.status)),n.onlySelf||this._parent?.markAsPending(K(b({},n),{sourceControl:e}))}disable(n={}){let e=this._parentMarkedDirty(n.onlySelf);this.status=Vl,this.errors=null,this._forEachChild(i=>{i.disable(K(b({},n),{onlySelf:!0}))}),this._updateValue();let r=n.sourceControl??this;n.emitEvent!==!1&&(this._events.next(new ym(this.value,r)),this._events.next(new Ba(this.status,r)),this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._updateAncestors(K(b({},n),{skipPristineCheck:e}),this),this._onDisabledChange.forEach(i=>i(!0))}enable(n={}){let e=this._parentMarkedDirty(n.onlySelf);this.status=Ll,this._forEachChild(r=>{r.enable(K(b({},n),{onlySelf:!0}))}),this.updateValueAndValidity({onlySelf:!0,emitEvent:n.emitEvent}),this._updateAncestors(K(b({},n),{skipPristineCheck:e}),this),this._onDisabledChange.forEach(r=>r(!1))}_updateAncestors(n,e){n.onlySelf||(this._parent?.updateValueAndValidity(n),n.skipPristineCheck||this._parent?._updatePristine({},e),this._parent?._updateTouched({},e))}setParent(n){this._parent=n}getRawValue(){return this.value}updateValueAndValidity(n={}){if(this._setInitialStatus(),this._updateValue(),this.enabled){let r=this._cancelExistingSubscription();this.errors=this._runValidator(),this.status=this._calculateStatus(),(this.status===Ll||this.status===Va)&&this._runAsyncValidator(r,n.emitEvent)}let e=n.sourceControl??this;n.emitEvent!==!1&&(this._events.next(new ym(this.value,e)),this._events.next(new Ba(this.status,e)),this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),n.onlySelf||this._parent?.updateValueAndValidity(K(b({},n),{sourceControl:e}))}_updateTreeValidity(n={emitEvent:!0}){this._forEachChild(e=>e._updateTreeValidity(n)),this.updateValueAndValidity({onlySelf:!0,emitEvent:n.emitEvent})}_setInitialStatus(){this.status=this._allControlsDisabled()?Vl:Ll}_runValidator(){return this.validator?this.validator(this):null}_runAsyncValidator(n,e){if(this.asyncValidator){this.status=Va,this._hasOwnPendingAsyncValidator={emitEvent:e!==!1,shouldHaveEmitted:n!==!1};let r=K0(this.asyncValidator(this));this._asyncValidationSubscription=r.subscribe(i=>{this._hasOwnPendingAsyncValidator=null,this.setErrors(i,{emitEvent:e,shouldHaveEmitted:n})})}}_cancelExistingSubscription(){if(this._asyncValidationSubscription){this._asyncValidationSubscription.unsubscribe();let n=(this._hasOwnPendingAsyncValidator?.emitEvent||this._hasOwnPendingAsyncValidator?.shouldHaveEmitted)??!1;return this._hasOwnPendingAsyncValidator=null,n}return!1}setErrors(n,e={}){this.errors=n,this._updateControlsErrors(e.emitEvent!==!1,this,e.shouldHaveEmitted)}get(n){let e=n;return e==null||(Array.isArray(e)||(e=e.split(`.`)),e.length===0)?null:e.reduce((r,i)=>r&&r._find(i),this)}getError(n,e){let r=e?this.get(e):this;return r?.errors?r.errors[n]:null}hasError(n,e){return!!this.getError(n,e)}get root(){let n=this;for(;n._parent;)n=n._parent;return n}_updateControlsErrors(n,e,r){this.status=this._calculateStatus(),n&&this.statusChanges.emit(this.status),(n||r)&&this._events.next(new Ba(this.status,e)),this._parent&&this._parent._updateControlsErrors(n,e,r)}_initObservables(){this.valueChanges=new k,this.statusChanges=new k}_calculateStatus(){return this._allControlsDisabled()?Vl:this.errors?pm:this._hasOwnPendingAsyncValidator||this._anyControlsHaveStatus(Va)?Va:this._anyControlsHaveStatus(pm)?pm:Ll}_anyControlsHaveStatus(n){return this._anyControls(e=>e.status===n)}_anyControlsDirty(){return this._anyControls(n=>n.dirty)}_anyControlsTouched(){return this._anyControls(n=>n.touched)}_updatePristine(n,e){let r=!this._anyControlsDirty(),i=this.pristine!==r;this.pristine=r,n.onlySelf||this._parent?._updatePristine(n,e),i&&this._events.next(new jl(this.pristine,e))}_updateTouched(n={},e){this.touched=this._anyControlsTouched(),this._events.next(new zl(this.touched,e)),n.onlySelf||this._parent?._updateTouched(n,e)}_onDisabledChange=[];_registerOnCollectionChange(n){this._onCollectionChange=n}_setUpdateStrategy(n){Dm(n)&&n.updateOn!=null&&(this._updateOn=n.updateOn)}_parentMarkedDirty(n){return!n&&!!this._parent?.dirty&&!this._parent._anyControlsDirty()}_find(n){return null}_assignValidators(n){this._rawValidators=Array.isArray(n)?n.slice():n,this._composedValidatorFn=p1(this._rawValidators),this._updateHasRequiredValidator()}_assignAsyncValidators(n){this._rawAsyncValidators=Array.isArray(n)?n.slice():n,this._composedAsyncValidatorFn=h1(this._rawAsyncValidators)}_updateHasRequiredValidator(){fe(()=>this._hasRequired.set(this.hasValidator(Xr.required)))}};function oS(t,n){return Object.hasOwn(t,n)}function g1(t){return t.tagName===`INPUT`||t.tagName===`SELECT`||t.tagName===`TEXTAREA`}function b1(t,n,e,r){switch(e){case`name`:t.setAttribute(n,e,r);break;case`disabled`:case`readonly`:case`required`:r?t.setAttribute(n,e,``):t.removeAttribute(n,e);break;case`max`:case`min`:case`minLength`:case`maxLength`:r!==void 0?t.setAttribute(n,e,r.toString()):t.removeAttribute(n,e)}}var Vb=class{kind;context;control;message;constructor({kind:n,context:e,control:r}){this.kind=n,this.context=e,this.control=r}};var y1=(()=>{class t{_validator=hm;_onChange;_enabled;ngOnChanges(e){if(this.inputName in e){let r=this.normalizeInput(e[this.inputName].currentValue);this._enabled=this.enabled(r),this._validator=this._enabled?this.createValidator(r):hm,this._onChange?.()}}validate(e){return this._validator(e)}registerOnValidatorChange(e){this._onChange=e}enabled(e){return e!=null}static ɵfac=function(r){return new(r||t)};static ɵdir=w({type:t,features:[Se]})}return t})();var v1={provide:ei,useExisting:pt(()=>aS),multi:!0};var aS=(()=>{class t extends y1{required;inputName=`required`;normalizeInput=I;createValidator=e=>q0;enabled(e){return e}static ɵfac=(()=>{let e;return function(i){return(e||(e=Ae(t)))(i||t)}})();static ɵdir=w({type:t,selectors:[[``,`required`,``,`formControlName`,``,3,`type`,`checkbox`],[``,`required`,``,`formControl`,``,3,`type`,`checkbox`],[``,`required`,``,`ngModel`,``,3,`type`,`checkbox`]],hostVars:1,hostBindings:function(r,i){r&2&&Y(`required`,i._enabled?``:null)},inputs:{required:`required`},standalone:!1,features:[ye([v1]),re]})}return t})();var _1=new g(``);var Hl=new g(``,{factory:()=>Sm});var Sm=`always`;function sS(t,n){return[...n.path,t]}function Bb(t,n,e=Sm){Yb(t,n),n.valueAccessor.writeValue(t.value),(t.disabled||e===`always`)&&n.valueAccessor.setDisabledState?.(t.disabled),w1(t,n),D1(t,n),x1(t,n),C1(t,n)}function j0(t,n,e=!0){let r=()=>{};n?.valueAccessor?.registerOnChange(r),n?.valueAccessor?.registerOnTouched(r),Cm(t,n),t&&(n._invokeOnDestroyCallbacks(),t._registerOnCollectionChange(()=>{}))}function _m(t,n){t.forEach(e=>{e.registerOnValidatorChange&&e.registerOnValidatorChange(n)})}function C1(t,n){if(n.valueAccessor.setDisabledState){let e=r=>{n.valueAccessor.setDisabledState(r)};t.registerOnDisabledChange(e),n._registerOnDestroy(()=>{t._unregisterOnDisabledChange(e)})}}function Yb(t,n){let e=tS(t);n.validator!==null?t.setValidators(L0(e,n.validator)):typeof e==`function`&&t.setValidators([e]);let r=nS(t);n.asyncValidator!==null?t.setAsyncValidators(L0(r,n.asyncValidator)):typeof r==`function`&&t.setAsyncValidators([r]);let i=()=>t.updateValueAndValidity();_m(n._rawValidators,i),_m(n._rawAsyncValidators,i)}function Cm(t,n){let e=!1;if(t!==null){if(n.validator!==null){let i=tS(t);if(Array.isArray(i)&&i.length>0){let o=i.filter(a=>a!==n.validator);o.length!==i.length&&(e=!0,t.setValidators(o))}}if(n.asyncValidator!==null){let i=nS(t);if(Array.isArray(i)&&i.length>0){let o=i.filter(a=>a!==n.asyncValidator);o.length!==i.length&&(e=!0,t.setAsyncValidators(o))}}}let r=()=>{};return _m(n._rawValidators,r),_m(n._rawAsyncValidators,r),e}function w1(t,n){n.valueAccessor.registerOnChange(e=>{t._pendingValue=e,t._pendingChange=!0,t._pendingDirty=!0,t.updateOn===`change`&&lS(t,n)})}function x1(t,n){n.valueAccessor.registerOnTouched(()=>{t._pendingTouched=!0,t.updateOn===`blur`&&t._pendingChange&&lS(t,n),t.updateOn!==`submit`&&t.markAsTouched()})}function lS(t,n){t._pendingDirty&&t.markAsDirty(),t.setValue(t._pendingValue,{emitModelToViewChange:!1}),n.viewToModelUpdate(t._pendingValue),t._pendingChange=!1}function D1(t,n){let e=(r,i)=>{n.valueAccessor.writeValue(r),i&&n.viewToModelUpdate(r)};t.registerOnChange(e),n._registerOnDestroy(()=>{t._unregisterOnChange(e)})}function cS(t,n){Yb(t,n)}function S1(t,n){return Cm(t,n)}function dS(t,n){if(!Object.hasOwn(t,`model`))return!1;let e=t.model;return e.isFirstChange()?!0:!Object.is(n,e.currentValue)}function E1(t){return Object.getPrototypeOf(t.constructor)===t1}function uS(t,n){t._syncPendingControls(),n.forEach(e=>{let r=e.control;r.updateOn===`submit`&&r._pendingChange&&(e.viewToModelUpdate(r._pendingValue),r._pendingChange=!1)})}function k1(t,n){if(!n)return null;let e,r,i;return n.forEach(o=>{o.constructor===W0?e=o:E1(o)?r=o:i=o}),i||r||e||null}function M1(t,n){let e=t.indexOf(n);e>-1&&t.splice(e,1)}var mS={provide:_1,useFactory:()=>{let t=u(pn,{self:!0});return{setParseErrors:n=>{t.setParseErrorSource(n)},set onReset(n){t.onReset=n}}}};var pn=class extends bm{_parent=null;name=null;valueAccessor=null;isCustomControlBased=!1;userOnReset;resetSubscription;set onReset(n){this.userOnReset=n,this.resetSubscription?.unsubscribe(),this.resetSubscription=void 0,this.control&&(this.resetSubscription=this.control.events.subscribe(e=>{e instanceof Io&&this.control&&this.userOnReset?.(this.control.value)}),this.subscription?.add(this.resetSubscription))}isNativeFormElement=!1;rawValueAccessors;_selectedValueAccessor=null;get selectedValueAccessor(){return this._selectedValueAccessor??=k1(this,this.rawValueAccessors)}parseErrorsValidator=null;renderer;injector;requiredValidatorViaDi;subscription;customControlBindings=null;constructor(n,e,r){super(),this.injector=n,this.renderer=e,this.rawValueAccessors=r,this.injector?.get(ut)?.onDestroy(()=>{this.removeParseErrorsValidator(this.control),this.subscription?.unsubscribe()})}setupCustomControl(){this.subscription?.unsubscribe();let n=this.injector?.get(Ce);if(!this.control||!n)return;let e=n.markForCheck.bind(n);this.subscription=new ne,this.subscription.add(this.control.valueChanges.subscribe(e)),this.subscription.add(this.control.statusChanges.subscribe(e)),this.resetSubscription?.unsubscribe(),this.resetSubscription=void 0,this.userOnReset&&(this.resetSubscription=this.control.events.subscribe(r=>{r instanceof Io&&this.control&&this.userOnReset?.(this.control.value)}),this.subscription.add(this.resetSubscription)),this.parseErrorsValidator&&this.control.addValidators(this.parseErrorsValidator)}ngControlCreate(n){!n.nativeElement.hasAttribute?.(`ngNoCva`)&&(this.rawValueAccessors&&this.rawValueAccessors.length>0||this.valueAccessor!==null)||!n.customControl||(this.isCustomControlBased=!0,n.listenToCustomControlModel(i=>{this.control?.markAsDirty(),this.control?.setValue(i,{emitModelToViewChange:!1}),this.viewToModelUpdate(i)}),n.listenToCustomControlOutput(`touch`,()=>{this.control?.markAsTouched()}),this.customControlBindings={},this.isNativeFormElement=g1(n.nativeElement),this.requiredValidatorViaDi=this._rawValidators.find(i=>i instanceof aS))}ngControlUpdate(n,e){if(!this.isCustomControlBased)return;let r=this.control,i=this.customControlBindings;Object.is(i.value,r.value)||(i.value=r.value,n.setCustomControlModelInput(r.value)),this.bindControlProperty(n,i,`touched`,r.touched),this.bindControlProperty(n,i,`dirty`,r.dirty),this.bindControlProperty(n,i,`valid`,r.valid),this.bindControlProperty(n,i,`invalid`,r.invalid),this.bindControlProperty(n,i,`pending`,r.pending),this.bindControlProperty(n,i,`disabled`,r.disabled),this.shouldBindRequired&&this.bindControlProperty(n,i,`required`,this.isRequired);let o=r.errors;if(i.errors!==o){i.errors=o;let a=this._convertErrors(o);n.setInputOnDirectives(`errors`,a)}}get isRequired(){return(this.requiredValidatorViaDi?._enabled||this.control?._hasRequired())??!1}get shouldBindRequired(){return!0}bindControlProperty(n,e,r,i){if(e[r]===i)return;e[r]=i;let o=n.setInputOnDirectives(r,i);this.isNativeFormElement&&!o&&(r===`disabled`||r===`required`)&&this.renderer&&b1(this.renderer,n.nativeElement,r,i)}_convertErrors(n){if(n===null)return[];let e=this.control;return Object.entries(n).map(([r,i])=>new Vb({context:i,kind:r,control:e}))}setParseErrorSource(n){if(n===void 0)return;let e=null,r=Xt(()=>{let i=n();return i.length===0?null:i.reduce((o,a)=>(o[a.kind]=a,o),{})});this.parseErrorsValidator=(()=>e).bind(this),mn(()=>{e=r(),this.control?.updateValueAndValidity({emitEvent:!1})},{injector:this.injector})}removeParseErrorsValidator(n){this.parseErrorsValidator&&(n?.removeValidators(this.parseErrorsValidator),n?.updateValueAndValidity({emitEvent:!1}))}};var wm=class{_cd;constructor(n){this._cd=n}get isTouched(){return this._cd?.control?._touched?.(),!!this._cd?.control?.touched}get isUntouched(){return!!this._cd?.control?.untouched}get isPristine(){return this._cd?.control?._pristine?.(),!!this._cd?.control?.pristine}get isDirty(){return!!this._cd?.control?.dirty}get isValid(){return this._cd?.control?._status?.(),!!this._cd?.control?.valid}get isInvalid(){return!!this._cd?.control?.invalid}get isPending(){return!!this._cd?.control?.pending}get isSubmitted(){return this._cd?._submitted?.(),!!this._cd?.submitted}};var tZ=(()=>{class t extends wm{constructor(e){super(e)}static ɵfac=function(r){return new(r||t)(me(pn,2))};static ɵdir=w({type:t,selectors:[[``,`formControlName`,``],[``,`ngModel`,``],[``,`formControl`,``]],hostVars:14,hostBindings:function(r,i){r&2&&G(`ng-untouched`,i.isUntouched)(`ng-touched`,i.isTouched)(`ng-pristine`,i.isPristine)(`ng-dirty`,i.isDirty)(`ng-valid`,i.isValid)(`ng-invalid`,i.isInvalid)(`ng-pending`,i.isPending)},standalone:!1,features:[re]})}return t})();var nZ=(()=>{class t extends wm{constructor(e){super(e)}static ɵfac=function(r){return new(r||t)(me(Cr,10))};static ɵdir=w({type:t,selectors:[[``,`formGroupName`,``],[``,`formArrayName`,``],[``,`ngModelGroup`,``],[``,`formGroup`,``],[``,`formArray`,``],[`form`,3,`ngNoForm`,``],[``,`ngForm`,``]],hostVars:16,hostBindings:function(r,i){r&2&&G(`ng-untouched`,i.isUntouched)(`ng-touched`,i.isTouched)(`ng-pristine`,i.isPristine)(`ng-dirty`,i.isDirty)(`ng-valid`,i.isValid)(`ng-invalid`,i.isInvalid)(`ng-pending`,i.isPending)(`ng-submitted`,i.isSubmitted)},standalone:!1,features:[re]})}return t})();var No=class extends za{constructor(n,e,r){super(Wb(e),qb(r,e)),this.controls=n,this._initObservables(),this._setUpdateStrategy(e),this._setUpControls(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator})}controls;registerControl(n,e){return this._find(n)||(this.controls[n]=e,e.setParent(this),e._registerOnCollectionChange(this._onCollectionChange),e)}addControl(n,e,r={}){this.registerControl(n,e),this.updateValueAndValidity({emitEvent:r.emitEvent}),this._onCollectionChange()}removeControl(n,e={}){let r=this._find(n);r&&r._registerOnCollectionChange(()=>{}),delete this.controls[n],this.updateValueAndValidity({emitEvent:e.emitEvent}),this._onCollectionChange()}setControl(n,e,r={}){let i=this._find(n);i&&i._registerOnCollectionChange(()=>{}),delete this.controls[n],e&&this.registerControl(n,e),this.updateValueAndValidity({emitEvent:r.emitEvent}),this._onCollectionChange()}contains(n){return this._find(n)?.enabled===!0}setValue(n,e={}){fe(()=>{iS(this,!0,n),Object.keys(n).forEach(r=>{rS(this,!0,r),this.controls[r].setValue(n[r],{onlySelf:!0,emitEvent:e.emitEvent})}),this.updateValueAndValidity(e)})}patchValue(n,e={}){n!=null&&(Object.keys(n).forEach(r=>{let i=this._find(r);i&&i.patchValue(n[r],{onlySelf:!0,emitEvent:e.emitEvent})}),this.updateValueAndValidity(e))}reset(n={},e={}){this._forEachChild((r,i)=>{r.reset(n?n[i]:null,K(b({},e),{onlySelf:!0}))}),this._updatePristine(e,this),this._updateTouched(e,this),this.updateValueAndValidity(e),e?.emitEvent!==!1&&this._events.next(new Io(this))}getRawValue(){return this._reduceChildren({},(n,e,r)=>(n[r]=e.getRawValue(),n))}_syncPendingControls(){let n=this._reduceChildren(!1,(e,r)=>r._syncPendingControls()?!0:e);return n&&this.updateValueAndValidity({onlySelf:!0}),n}_forEachChild(n){Object.keys(this.controls).forEach(e=>{let r=this.controls[e];r&&n(r,e)})}_setUpControls(){this._forEachChild(n=>{n.setParent(this),n._registerOnCollectionChange(this._onCollectionChange)})}_updateValue(){this.value=this._reduceValue()}_anyControls(n){for(let[e,r]of Object.entries(this.controls))if(this.contains(e)&&n(r))return!0;return!1}_reduceValue(){return this._reduceChildren({},(e,r,i)=>((r.enabled||this.disabled)&&(e[i]=r.value),e))}_reduceChildren(n,e){let r=n;return this._forEachChild((i,o)=>{r=e(r,i,o)}),r}_allControlsDisabled(){for(let n of Object.keys(this.controls))if(this.controls[n].enabled)return!1;return Object.keys(this.controls).length>0||this.disabled}_find(n){return oS(this.controls,n)?this.controls[n]:null}};var rZ=No;var jb=class extends No{};var I1={provide:Cr,useExisting:pt(()=>Ha)};var Bl=Promise.resolve();var Ha=(()=>{class t extends Cr{callSetDisabledState;get submitted(){return fe(this.submittedReactive)}_submitted=Xt(()=>this.submittedReactive());submittedReactive=L(!1);_directives=new Set;form;ngSubmit=new k;options;constructor(e,r,i){super(),this.callSetDisabledState=i,this.form=new No({},$b(e),Gb(r))}ngAfterViewInit(){this._setUpdateStrategy()}get formDirective(){return this}get control(){return this.form}get path(){return[]}get controls(){return this.form.controls}addControl(e){Bl.then(()=>{e.control=this._findContainer(e.path).registerControl(e.name,e.control),e._setupWithForm(this.callSetDisabledState),e.control.updateValueAndValidity({emitEvent:!1}),this._directives.add(e)})}getControl(e){return this.form.get(e.path)}removeControl(e){Bl.then(()=>{this._findContainer(e.path)?.removeControl(e.name),this._directives.delete(e)})}addFormGroup(e){Bl.then(()=>{let r=this._findContainer(e.path),i=new No({});cS(i,e),r.registerControl(e.name,i),i.updateValueAndValidity({emitEvent:!1})})}removeFormGroup(e){Bl.then(()=>{this._findContainer(e.path)?.removeControl?.(e.name)})}getFormGroup(e){return this.form.get(e.path)}updateModel(e,r){Bl.then(()=>{this.form.get(e.path).setValue(r)})}setValue(e){this.control.setValue(e)}onSubmit(e){return this.submittedReactive.set(!0),uS(this.form,this._directives),this.ngSubmit.emit(e),this.form._events.next(new vm(this.control)),e?.target?.method===`dialog`}onReset(){this.resetForm()}resetForm(e=void 0){this.form.reset(e),this.submittedReactive.set(!1)}_setUpdateStrategy(){this.options&&this.options.updateOn!=null&&(this.form._updateOn=this.options.updateOn)}_findContainer(e){return e.pop(),e.length?this.form.get(e):this.form}static ɵfac=function(r){return new(r||t)(me(ei,10),me(xm,10),me(Hl,8))};static ɵdir=w({type:t,selectors:[[`form`,3,`ngNoForm`,``,3,`formGroup`,``,3,`formArray`,``],[`ng-form`],[``,`ngForm`,``]],hostBindings:function(r,i){r&1&&Q(`submit`,function(a){return i.onSubmit(a)})(`reset`,function(){return i.onReset()})},inputs:{options:[0,`ngFormOptions`,`options`]},outputs:{ngSubmit:`ngSubmit`},exportAs:[`ngForm`],standalone:!1,features:[ye([I1]),re]})}return t})();function z0(t,n){let e=t.indexOf(n);e>-1&&t.splice(e,1)}function H0(t){return typeof t==`object`&&t!==null&&Object.keys(t).length===2&&`value`in t&&`disabled`in t}var ja=class extends za{defaultValue=null;_onChange=[];_pendingValue;_pendingChange=!1;constructor(n=null,e,r){super(Wb(e),qb(r,e)),this._applyFormState(n),this._setUpdateStrategy(e),this._initObservables(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator}),Dm(e)&&(e.nonNullable||e.initialValueIsDefault)&&(H0(n)?this.defaultValue=n.value:this.defaultValue=n)}setValue(n,e={}){fe(()=>{this.value=this._pendingValue=n,this._onChange.length&&e.emitModelToViewChange!==!1&&this._onChange.forEach(r=>r(this.value,e.emitViewToModelChange!==!1)),this.updateValueAndValidity(e)})}patchValue(n,e={}){this.setValue(n,e)}reset(n=this.defaultValue,e={}){this._applyFormState(n),this.markAsPristine(e),this.markAsUntouched(e),this.setValue(this.value,e),e.overwriteDefaultValue&&(this.defaultValue=this.value),this._pendingChange=!1,e?.emitEvent!==!1&&this._events.next(new Io(this))}_updateValue(){}_anyControls(n){return!1}_allControlsDisabled(){return this.disabled}registerOnChange(n){this._onChange.push(n)}_unregisterOnChange(n){z0(this._onChange,n)}registerOnDisabledChange(n){this._onDisabledChange.push(n)}_unregisterOnDisabledChange(n){z0(this._onDisabledChange,n)}_forEachChild(n){}_syncPendingControls(){return this.updateOn===`submit`&&(this._pendingDirty&&this.markAsDirty(),this._pendingTouched&&this.markAsTouched(),this._pendingChange)?(this.setValue(this._pendingValue,{onlySelf:!0,emitModelToViewChange:!1}),!0):!1}_applyFormState(n){H0(n)?(this.value=this._pendingValue=n.value,n.disabled?this.disable({onlySelf:!0,emitEvent:!1}):this.enable({onlySelf:!0,emitEvent:!1})):this.value=this._pendingValue=n}};var oZ=ja;var N1=t=>t instanceof ja;var T1=(()=>{class t extends Cr{callSetDisabledState;get submitted(){return fe(this._submittedReactive)}set submitted(e){this._submittedReactive.set(e)}_submitted=Xt(()=>this._submittedReactive());_submittedReactive=L(!1);_oldForm;_onCollectionChange=()=>this._updateDomValue();directives=[];constructor(e,r,i){super(),this.callSetDisabledState=i,this._setValidators(e),this._setAsyncValidators(r)}ngOnChanges(e){this.onChanges(e)}ngOnDestroy(){this.onDestroy()}onChanges(e){if(!this.form)throw new D(1052,!1);Object.hasOwn(e,`form`)&&(this._updateValidators(),this._updateDomValue(),this._updateRegistrations(),this._oldForm=this.form)}onDestroy(){this.form&&(Cm(this.form,this),this.form._onCollectionChange===this._onCollectionChange&&this.form._registerOnCollectionChange(()=>{}))}get formDirective(){return this}get path(){return[]}addControl(e){let r=this.form.get(e.path);return e._setupWithForm(r,this.callSetDisabledState),r.updateValueAndValidity({emitEvent:!1}),this.directives.push(e),r}getControl(e){return this.form.get(e.path)}removeControl(e){j0(e.control||null,e,!1),M1(this.directives,e)}addFormGroup(e){this._setUpFormContainer(e)}removeFormGroup(e){this._cleanUpFormContainer(e)}getFormGroup(e){return this.form.get(e.path)}getFormArray(e){return this.form.get(e.path)}addFormArray(e){this._setUpFormContainer(e)}removeFormArray(e){this._cleanUpFormContainer(e)}updateModel(e,r){this.form.get(e.path).setValue(r)}onReset(){this.resetForm()}resetForm(e=void 0,r={}){this.form.reset(e,r),this._submittedReactive.set(!1)}onSubmit(e){return this.submitted=!0,uS(this.form,this.directives),this.ngSubmit.emit(e),this.form._events.next(new vm(this.control)),e?.target?.method===`dialog`}_updateDomValue(){this.directives.forEach(e=>{let r=e.control,i=this.form.get(e.path);r!==i&&(j0(r||null,e),N1(i)&&e._setupWithForm(i,this.callSetDisabledState))}),this.form._updateTreeValidity({emitEvent:!1})}_setUpFormContainer(e){let r=this.form.get(e.path);cS(r,e),r.updateValueAndValidity({emitEvent:!1})}_cleanUpFormContainer(e){let r=this.form?.get(e.path);r&&S1(r,e)&&r.updateValueAndValidity({emitEvent:!1})}_updateRegistrations(){this.form._registerOnCollectionChange(this._onCollectionChange),this._oldForm?._registerOnCollectionChange(()=>{})}_updateValidators(){Yb(this.form,this),this._oldForm&&Cm(this._oldForm,this)}static ɵfac=function(r){return new(r||t)(me(ei,10),me(xm,10),me(Hl,8))};static ɵdir=w({type:t,features:[re,Se]})}return t})();var A1={provide:Cr,useExisting:pt(()=>Ua)};var Ua=(()=>{class t extends T1{form=null;ngSubmit=new k;get control(){return this.form}static ɵfac=(()=>{let e;return function(i){return(e||(e=Ae(t)))(i||t)}})();static ɵdir=w({type:t,selectors:[[``,`formGroup`,``]],hostBindings:function(r,i){r&1&&Q(`submit`,function(a){return i.onSubmit(a)})(`reset`,function(){return i.onReset()})},inputs:{form:[0,`formGroup`,`form`]},outputs:{ngSubmit:`ngSubmit`},exportAs:[`ngForm`],standalone:!1,features:[ye([A1]),re]})}return t})();var R1={provide:pn,useExisting:pt(()=>O1)};var U0=Promise.resolve();var O1=(()=>{class t extends pn{_changeDetectorRef;callSetDisabledState;control=new ja;static ngAcceptInputType_isDisabled;_registered=!1;_ngModelInjector;viewModel;name=``;isDisabled;model;options;update=new k;constructor(e,r,i,o,a,s,l,c){super(l,c,o),this._changeDetectorRef=a,this.callSetDisabledState=s,this._parent=e,this._setValidators(r),this._setAsyncValidators(i)}ngOnChanges(e){if(this._registered,this._checkForErrors(),!this._registered||`name`in e){if(this._registered&&(this._checkName(),this.formDirective)){let r=e.name.previousValue;this.formDirective.removeControl({name:r,path:this._getPath(r)})}this._setUpControl()}`isDisabled`in e&&this._updateDisabled(e),dS(e,this.viewModel)&&(this._updateValue(this.model),this.viewModel=this.model)}ngOnDestroy(){this.formDirective?.removeControl(this)}ɵngControlCreate(e){super.ngControlCreate(e)}ɵngControlUpdate(e){super.ngControlUpdate(e,!1)}get shouldBindRequired(){return!1}get path(){return this._getPath(this.name)}get formDirective(){return this._parent?this._parent.formDirective:null}viewToModelUpdate(e){this.viewModel=e,this.update.emit(e)}_setUpControl(){this._setUpdateStrategy(),this._isStandalone()?this._setUpStandalone():this.formDirective.addControl(this),this._registered=!0}_setUpdateStrategy(){this.options&&this.options.updateOn!=null&&(this.control._updateOn=this.options.updateOn)}_isStandalone(){return!this._parent||!!(this.options&&this.options.standalone)}_setUpStandalone(){this.isCustomControlBased?this.setupCustomControl():(this.valueAccessor??=this.selectedValueAccessor,Bb(this.control,this,this.callSetDisabledState)),this.control.updateValueAndValidity({emitEvent:!1})}_setupWithForm(e){this.isCustomControlBased?this.setupCustomControl():(this.valueAccessor??=this.selectedValueAccessor,Bb(this.control,this,e))}_checkForErrors(){this._checkName()}_checkName(){this.options&&this.options.name&&(this.name=this.options.name),!this._isStandalone()&&this.name}_updateValue(e){U0.then(()=>{this.control.setValue(e,{emitViewToModelChange:!1}),this._changeDetectorRef?.markForCheck()})}_updateDisabled(e){let r=e.isDisabled.currentValue,i=r!==0&&I(r);U0.then(()=>{i&&!this.control.disabled?this.control.disable():!i&&this.control.disabled&&this.control.enable(),this._changeDetectorRef?.markForCheck()})}_getPath(e){return this._parent?sS(e,this._parent):[e]}static ɵfac=function(r){return new(r||t)(me(Cr,9),me(ei,10),me(xm,10),me(Jr,10),me(Ce,8),me(Hl,8),me(B,8),me(ke,8))};static ɵdir=w({type:t,selectors:[[``,`ngModel`,``,3,`formControlName`,``,3,`formControl`,``]],inputs:{name:`name`,isDisabled:[0,`disabled`,`isDisabled`],model:[0,`ngModel`,`model`],options:[0,`ngModelOptions`,`options`]},outputs:{update:`ngModelChange`},exportAs:[`ngModel`],standalone:!1,features:[ye([R1,mS]),re,Se,Lu(null)]})}return t})();var aZ=(()=>{class t{static ɵfac=function(r){return new(r||t)};static ɵdir=w({type:t,selectors:[[`form`,3,`ngNoForm`,``,3,`ngNativeValidate`,``]],hostAttrs:[`novalidate`,``],standalone:!1})}return t})();var zb=class extends za{constructor(n,e,r){super(Wb(e),qb(r,e)),this.controls=n,this._initObservables(),this._setUpdateStrategy(e),this._setUpControls(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator})}controls;at(n){return this.controls[this._adjustIndex(n)]}push(n,e={}){Array.isArray(n)?n.forEach(r=>{this.controls.push(r),this._registerControl(r)}):(this.controls.push(n),this._registerControl(n)),this.updateValueAndValidity({emitEvent:e.emitEvent}),this._onCollectionChange()}insert(n,e,r={}){this.controls.splice(n,0,e),this._registerControl(e),this.updateValueAndValidity({emitEvent:r.emitEvent})}removeAt(n,e={}){let r=this._adjustIndex(n);r<0&&(r=0),this.controls[r]&&this.controls[r]._registerOnCollectionChange(()=>{}),this.controls.splice(r,1),this.updateValueAndValidity({emitEvent:e.emitEvent})}setControl(n,e,r={}){let i=this._adjustIndex(n);i<0&&(i=0),this.controls[i]&&this.controls[i]._registerOnCollectionChange(()=>{}),this.controls.splice(i,1),e&&(this.controls.splice(i,0,e),this._registerControl(e)),this.updateValueAndValidity({emitEvent:r.emitEvent}),this._onCollectionChange()}get length(){return this.controls.length}setValue(n,e={}){fe(()=>{iS(this,!1,n),n.forEach((r,i)=>{rS(this,!1,i),this.at(i).setValue(r,{onlySelf:!0,emitEvent:e.emitEvent})}),this.updateValueAndValidity(e)})}patchValue(n,e={}){n!=null&&(n.forEach((r,i)=>{this.at(i)&&this.at(i).patchValue(r,{onlySelf:!0,emitEvent:e.emitEvent})}),this.updateValueAndValidity(e))}reset(n=[],e={}){this._forEachChild((r,i)=>{r.reset(n[i],K(b({},e),{onlySelf:!0}))}),this._updatePristine(e,this),this._updateTouched(e,this),this.updateValueAndValidity(e),e?.emitEvent!==!1&&this._events.next(new Io(this))}getRawValue(){return this.controls.map(n=>n.getRawValue())}clear(n={}){this.controls.length<1||(this._forEachChild(e=>e._registerOnCollectionChange(()=>{})),this.controls.splice(0),this.updateValueAndValidity({emitEvent:n.emitEvent}))}_adjustIndex(n){return n<0?n+this.length:n}_syncPendingControls(){let n=this.controls.reduce((e,r)=>r._syncPendingControls()?!0:e,!1);return n&&this.updateValueAndValidity({onlySelf:!0}),n}_forEachChild(n){this.controls.forEach((e,r)=>{n(e,r)})}_updateValue(){this.value=this.controls.filter(n=>n.enabled||this.disabled).map(n=>n.value)}_anyControls(n){return this.controls.some(e=>e.enabled&&n(e))}_setUpControls(){this._forEachChild(n=>this._registerControl(n))}_allControlsDisabled(){for(let n of this.controls)if(n.enabled)return!1;return this.controls.length>0||this.disabled}_registerControl(n){n.setParent(this),n._registerOnCollectionChange(this._onCollectionChange)}_find(n){return this.at(n)??null}};var fS=new g(``);var F1={provide:pn,useExisting:pt(()=>P1)};var P1=(()=>{class t extends pn{_ngModelWarningConfig;_added=!1;viewModel;control;name=null;set isDisabled(e){}model;update=new k;static _ngModelWarningSentOnce=!1;_ngModelWarningSent=!1;constructor(e,r,i,o,a,s,l){super(l,s,o),this._ngModelWarningConfig=a,this._parent=e,this._setValidators(r),this._setAsyncValidators(i)}_setupWithForm(e,r){this.control=e,this.isCustomControlBased?this.setupCustomControl():(this.valueAccessor??=this.selectedValueAccessor,Bb(e,this,r))}ngOnChanges(e){this._added||this._setUpControl(),dS(e,this.viewModel)&&(this.viewModel=this.model,this.formDirective.updateModel(this,this.model))}ngOnDestroy(){this.formDirective?.removeControl(this)}viewToModelUpdate(e){this.viewModel=e,this.update.emit(e)}get path(){return sS(this.name==null?this.name:this.name.toString(),this._parent)}get formDirective(){return this._parent?this._parent.formDirective:null}_setUpControl(){this.control=this.formDirective.addControl(this),this._added=!0}ɵngControlCreate(e){super.ngControlCreate(e)}ɵngControlUpdate(e){this.isCustomControlBased&&(this._added||this._setUpControl(),super.ngControlUpdate(e,!0))}static ɵfac=function(r){return new(r||t)(me(Cr,13),me(ei,10),me(xm,10),me(Jr,10),me(fS,8),me(ke,8),me(B,8))};static ɵdir=w({type:t,selectors:[[``,`formControlName`,``]],inputs:{name:[0,`formControlName`,`name`],isDisabled:[0,`disabled`,`isDisabled`],model:[0,`ngModel`,`model`]},outputs:{update:`ngModelChange`},standalone:!1,features:[ye([F1,mS]),re,Se,Lu(null)]})}return t})();var pS=(()=>{class t{static ɵfac=function(r){return new(r||t)};static ɵmod=R({type:t});static ɵinj=A({})}return t})();function $0(t){return!!t&&(t.asyncValidators!==void 0||t.validators!==void 0||t.updateOn!==void 0)}var L1=(()=>{class t{useNonNullable=!1;get nonNullable(){let e=new t;return e.useNonNullable=!0,e}group(e,r=null){let i=this._reduceControls(e),o={};return $0(r)?o=r:r!==null&&(o.validators=r.validator,o.asyncValidators=r.asyncValidator),new No(i,o)}record(e,r=null){return new jb(this._reduceControls(e),r)}control(e,r,i){let o={};return this.useNonNullable?($0(r)?o=r:(o.validators=r,o.asyncValidators=i),new ja(e,K(b({},o),{nonNullable:!0}))):new ja(e,r,i)}array(e,r,i){return new zb(e.map(a=>this._createControl(a)),r,i)}_reduceControls(e){let r={};return Object.keys(e).forEach(i=>{r[i]=this._createControl(e[i])}),r}_createControl(e){if(e instanceof ja)return e;if(e instanceof za)return e;if(Array.isArray(e)){let r=e[0],i=e.length>1?e[1]:null,o=e.length>2?e[2]:null;return this.control(r,i,o)}else return this.control(e)}static ɵfac=function(r){return new(r||t)};static ɵprov=S({token:t,factory:t.ɵfac})}return t})();var sZ=(()=>{class t extends L1{group(e,r=null){return super.group(e,r)}control(e,r,i){return super.control(e,r,i)}array(e,r,i){return super.array(e,r,i)}static ɵfac=function(r){return new(r||t)};static ɵprov=S({token:t,factory:t.ɵfac})}return t})();var lZ=(()=>{class t{static withConfig(e){return{ngModule:t,providers:[{provide:Hl,useValue:e.callSetDisabledState??Sm}]}}static ɵfac=function(r){return new(r||t)};static ɵmod=R({type:t});static ɵinj=A({imports:[pS]})}return t})();var cZ=(()=>{class t{static withConfig(e){return{ngModule:t,providers:[{provide:fS,useValue:e.warnOnNgModelWithFormControl??`always`},{provide:Hl,useValue:e.callSetDisabledState??Sm}]}}static ɵfac=function(r){return new(r||t)};static ɵmod=R({type:t});static ɵinj=A({imports:[pS]})}return t})();function Ul(t){return t.buttons===0||t.detail===0}function $l(t){let n=t.touches&&t.touches[0]||t.changedTouches&&t.changedTouches[0];return!!n&&n.identifier===-1&&(n.radiusX==null||n.radiusX===1)&&(n.radiusY==null||n.radiusY===1)}var Kb;function hS(){if(Kb==null){let t=typeof document<`u`?document.head:null;Kb=!!(t&&(t.createShadowRoot||t.attachShadow))}return Kb}function Zb(t){if(hS()){let n=t.getRootNode?t.getRootNode():null;if(typeof ShadowRoot<`u`&&ShadowRoot&&n instanceof ShadowRoot)return n}return null}function wr(){let t=typeof document<`u`&&document?document.activeElement:null;for(;t&&t.shadowRoot;){let n=t.shadowRoot.activeElement;if(n===t)break;t=n}return t}function Pt(t){if(t.composedPath)try{return t.composedPath()[0]}catch(n){}return t.target}var Qb;try{Qb=typeof Intl<`u`&&Intl.v8BreakIterator}catch(t){Qb=!1}var xe=(()=>{class t{_platformId=u(bo);isBrowser=this._platformId?c0(this._platformId):typeof document==`object`&&!!document;EDGE=this.isBrowser&&/(edge)/i.test(navigator.userAgent);TRIDENT=this.isBrowser&&/(msie|trident)/i.test(navigator.userAgent);BLINK=this.isBrowser&&!!(window.chrome||Qb)&&typeof CSS<`u`&&!this.EDGE&&!this.TRIDENT;WEBKIT=this.isBrowser&&/AppleWebKit/i.test(navigator.userAgent)&&!this.BLINK&&!this.EDGE&&!this.TRIDENT;IOS=this.isBrowser&&/iPad|iPhone|iPod/.test(navigator.userAgent)&&!(`MSStream`in window);FIREFOX=this.isBrowser&&/(firefox|minefield)/i.test(navigator.userAgent);ANDROID=this.isBrowser&&/android/i.test(navigator.userAgent)&&!this.TRIDENT;SAFARI=this.isBrowser&&/safari/i.test(navigator.userAgent)&&this.WEBKIT;static ɵfac=function(r){return new(r||t)};static ɵprov=S({token:t,factory:t.ɵfac})}return t})();var Gl;function gS(){if(Gl==null&&typeof window<`u`)try{window.addEventListener(`test`,null,Object.defineProperty({},"passive",{get:()=>Gl=!0}))}finally{Gl=Gl||!1}return Gl}function $a(t){return gS()?t:!!t.capture}function hn(t,n=0){return Em(t)?Number(t):arguments.length===2?n:0}function Em(t){return!isNaN(parseFloat(t))&&!isNaN(Number(t))}function gn(t){return t instanceof N?t.nativeElement:t}var bS=new g(`cdk-input-modality-detector-options`);var yS={ignoreKeys:[18,17,224,91,16]};var vS=650;var Xb={passive:!0,capture:!0};var _S=(()=>{class t{_platform=u(xe);_listenerCleanups;modalityDetected;modalityChanged;get mostRecentModality(){return this._modality.value}_mostRecentTarget=null;_modality=new Qe(null);_options;_lastTouchMs=0;_onKeydown=e=>{this._options?.ignoreKeys?.some(r=>r===e.keyCode)||(this._modality.next(`keyboard`),this._mostRecentTarget=Pt(e))};_onMousedown=e=>{Date.now()-this._lastTouchMs<vS||(this._modality.next(Ul(e)?`keyboard`:`mouse`),this._mostRecentTarget=Pt(e))};_onTouchstart=e=>{if($l(e)){this._modality.next(`keyboard`);return}this._lastTouchMs=Date.now(),this._modality.next(`touch`),this._mostRecentTarget=Pt(e)};constructor(){let e=u(T),r=u(z),i=u(bS,{optional:!0});if(this._options=b(b({},yS),i),this.modalityDetected=this._modality.pipe(Fs(1)),this.modalityChanged=this.modalityDetected.pipe(yd()),this._platform.isBrowser){let o=u(bt).createRenderer(null,null);this._listenerCleanups=e.runOutsideAngular(()=>[o.listen(r,`keydown`,this._onKeydown,Xb),o.listen(r,`mousedown`,this._onMousedown,Xb),o.listen(r,`touchstart`,this._onTouchstart,Xb)])}}ngOnDestroy(){this._modality.complete(),this._listenerCleanups?.forEach(e=>e())}static ɵfac=function(r){return new(r||t)};static ɵprov=S({token:t,factory:t.ɵfac})}return t})();var Wl=(function(t){return t[t.IMMEDIATE=0]=`IMMEDIATE`,t[t.EVENTUAL=1]=`EVENTUAL`,t})(Wl||{});var CS=new g(`cdk-focus-monitor-default-options`);var km=$a({passive:!0,capture:!0});var Tn=(()=>{class t{_ngZone=u(T);_platform=u(xe);_inputModalityDetector=u(_S);_origin=null;_lastFocusOrigin=null;_windowFocused=!1;_windowFocusTimeoutId;_originTimeoutId;_originFromTouchInteraction=!1;_elementInfo=new Map;_monitoredElementCount=0;_rootNodeFocusListenerCount=new Map;_detectionMode;_windowFocusListener=()=>{this._windowFocused=!0,this._windowFocusTimeoutId=setTimeout(()=>this._windowFocused=!1)};_document=u(z);_stopInputModalityDetector=new _;constructor(){let e=u(CS,{optional:!0});this._detectionMode=e?.detectionMode||Wl.IMMEDIATE}_rootNodeFocusAndBlurListener=e=>{let r=Pt(e);for(let i=r;i;i=i.parentElement)e.type===`focus`?this._onFocus(e,i):this._onBlur(e,i)};monitor(e,r=!1){let i=gn(e);if(!this._platform.isBrowser||i.nodeType!==1)return j();let o=Zb(i)||this._document,a=this._elementInfo.get(i);if(a)return r&&(a.checkChildren=!0),a.subject;let s={checkChildren:r,subject:new _,rootNode:o};return this._elementInfo.set(i,s),this._registerGlobalListeners(s),s.subject}stopMonitoring(e){let r=gn(e),i=this._elementInfo.get(r);i&&(i.subject.complete(),this._setClasses(r),this._elementInfo.delete(r),this._removeGlobalListeners(i))}focusVia(e,r,i){let o=gn(e);o===this._document.activeElement?this._getClosestElementsInfo(o).forEach(([s,l])=>this._originChanged(s,r,l)):(this._setOrigin(r),typeof o.focus==`function`&&o.focus(i))}ngOnDestroy(){this._elementInfo.forEach((e,r)=>this.stopMonitoring(r))}_getWindow(){return this._document.defaultView||window}_getFocusOrigin(e){return this._origin?this._originFromTouchInteraction?this._shouldBeAttributedToTouch(e)?`touch`:`program`:this._origin:this._windowFocused&&this._lastFocusOrigin?this._lastFocusOrigin:e&&this._isLastInteractionFromInputLabel(e)?`mouse`:`program`}_shouldBeAttributedToTouch(e){return this._detectionMode===Wl.EVENTUAL||!!e?.contains(this._inputModalityDetector._mostRecentTarget)}_setClasses(e,r){e.classList.toggle(`cdk-focused`,!!r),e.classList.toggle(`cdk-touch-focused`,r===`touch`),e.classList.toggle(`cdk-keyboard-focused`,r===`keyboard`),e.classList.toggle(`cdk-mouse-focused`,r===`mouse`),e.classList.toggle(`cdk-program-focused`,r===`program`)}_setOrigin(e,r=!1){this._ngZone.runOutsideAngular(()=>{if(this._origin=e,this._originFromTouchInteraction=e===`touch`&&r,this._detectionMode===Wl.IMMEDIATE){clearTimeout(this._originTimeoutId);let i=this._originFromTouchInteraction?vS:1;this._originTimeoutId=setTimeout(()=>this._origin=null,i)}})}_onFocus(e,r){let i=this._elementInfo.get(r),o=Pt(e);!i||!i.checkChildren&&r!==o||this._originChanged(r,this._getFocusOrigin(o),i)}_onBlur(e,r){let i=this._elementInfo.get(r);!i||i.checkChildren&&e.relatedTarget instanceof Node&&r.contains(e.relatedTarget)||(this._setClasses(r),this._emitOrigin(i,null))}_emitOrigin(e,r){e.subject.observers.length&&this._ngZone.run(()=>e.subject.next(r))}_registerGlobalListeners(e){if(!this._platform.isBrowser)return;let r=e.rootNode,i=this._rootNodeFocusListenerCount.get(r)||0;i||this._ngZone.runOutsideAngular(()=>{r.addEventListener(`focus`,this._rootNodeFocusAndBlurListener,km),r.addEventListener(`blur`,this._rootNodeFocusAndBlurListener,km)}),this._rootNodeFocusListenerCount.set(r,i+1),++this._monitoredElementCount===1&&(this._ngZone.runOutsideAngular(()=>{this._getWindow().addEventListener(`focus`,this._windowFocusListener)}),this._inputModalityDetector.modalityDetected.pipe(De(this._stopInputModalityDetector)).subscribe(o=>{this._setOrigin(o,!0)}))}_removeGlobalListeners(e){let r=e.rootNode;if(this._rootNodeFocusListenerCount.has(r)){let i=this._rootNodeFocusListenerCount.get(r);i>1?this._rootNodeFocusListenerCount.set(r,i-1):(r.removeEventListener(`focus`,this._rootNodeFocusAndBlurListener,km),r.removeEventListener(`blur`,this._rootNodeFocusAndBlurListener,km),this._rootNodeFocusListenerCount.delete(r))}--this._monitoredElementCount||(this._getWindow().removeEventListener(`focus`,this._windowFocusListener),this._stopInputModalityDetector.next(),clearTimeout(this._windowFocusTimeoutId),clearTimeout(this._originTimeoutId))}_originChanged(e,r,i){this._setClasses(e,r),this._emitOrigin(i,r),this._lastFocusOrigin=r}_getClosestElementsInfo(e){let r=[];return this._elementInfo.forEach((i,o)=>{(o===e||i.checkChildren&&o.contains(e))&&r.push([o,i])}),r}_isLastInteractionFromInputLabel(e){let{_mostRecentTarget:r,mostRecentModality:i}=this._inputModalityDetector;if(i!==`mouse`||!r||r===e||e.nodeName!==`INPUT`&&e.nodeName!==`TEXTAREA`||e.disabled)return!1;let o=e.labels;if(o){for(let a=0;a<o.length;a++)if(o[a].contains(r))return!0}return!1}static ɵfac=function(r){return new(r||t)};static ɵprov=S({token:t,factory:t.ɵfac})}return t})();var Jb=(()=>{class t{_elementRef=u(N);_focusMonitor=u(Tn);_monitorSubscription;_focusOrigin=null;cdkFocusChange=new k;get focusOrigin(){return this._focusOrigin}ngAfterViewInit(){let e=this._elementRef.nativeElement;this._monitorSubscription=this._focusMonitor.monitor(e,e.nodeType===1&&e.hasAttribute(`cdkMonitorSubtreeFocus`)).subscribe(r=>{this._focusOrigin=r,this.cdkFocusChange.emit(r)})}ngOnDestroy(){this._focusMonitor.stopMonitoring(this._elementRef),this._monitorSubscription?.unsubscribe()}static ɵfac=function(r){return new(r||t)};static ɵdir=w({type:t,selectors:[[``,`cdkMonitorElementFocus`,``],[``,`cdkMonitorSubtreeFocus`,``]],outputs:{cdkFocusChange:`cdkFocusChange`},exportAs:[`cdkMonitorFocus`]})}return t})();var Mm=new WeakMap;var Ze=(()=>{class t{_appRef;_injector=u(B);_environmentInjector=u(Ue);load(e){let r=this._appRef=this._appRef||this._injector.get(Rt),i=Mm.get(r);i||(i={loaders:new Set,refs:[]},Mm.set(r,i),r.onDestroy(()=>{Mm.get(r)?.refs.forEach(o=>o.destroy()),Mm.delete(r)})),i.loaders.has(e)||(i.loaders.add(e),i.refs.push(Yu(e,{environmentInjector:this._environmentInjector})))}static ɵfac=function(r){return new(r||t)};static ɵprov=S({token:t,factory:t.ɵfac})}return t})();var xr=(()=>{class t{static ɵfac=function(r){return new(r||t)};static ɵcmp=F({type:t,selectors:[[`ng-component`]],exportAs:[`cdkVisuallyHidden`],decls:0,vars:0,template:function(r,i){},styles:[`.cdk-visually-hidden {
  border: 0;
  clip: rect(0 0 0 0);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  width: 1px;
  white-space: nowrap;
  outline: 0;
  -webkit-appearance: none;
  -moz-appearance: none;
  left: 0;
}
[dir=rtl] .cdk-visually-hidden {
  left: auto;
  right: 0;
}
`],encapsulation:2})}return t})();var Im;function V1(){if(Im===void 0&&(Im=null,typeof window<`u`)){let t=window;if(t.trustedTypes!==void 0)try{Im=t.trustedTypes.createPolicy(`angular#components`,{createHTML:n=>n})}catch(n){console.error(n)}}return Im}function To(t){return V1()?.createHTML(t)||t}function wS(t,n,e){t.innerHTML=To(e.sanitize(Te.HTML,n)||``)}function Ga(t){return Array.isArray(t)?t:[t]}var xS=new Set;var Ao;var Wa=(()=>{class t{_platform=u(xe);_nonce=u(Ti,{optional:!0});_matchMedia;constructor(){this._matchMedia=this._platform.isBrowser&&window.matchMedia?window.matchMedia.bind(window):j1}matchMedia(e){return(this._platform.WEBKIT||this._platform.BLINK)&&B1(e,this._nonce),this._matchMedia(e)}static ɵfac=function(r){return new(r||t)};static ɵprov=S({token:t,factory:t.ɵfac})}return t})();function B1(t,n){if(!xS.has(t))try{Ao||(Ao=document.createElement(`style`),n&&Ao.setAttribute(`nonce`,n),Ao.setAttribute(`type`,`text/css`),document.head.appendChild(Ao)),Ao.sheet&&(Ao.sheet.insertRule(`@media ${t.replace(/[{}]/g,``)} {body{ }}`,0),xS.add(t))}catch(e){console.error(e)}}function j1(t){return{matches:t===`all`||t===``,media:t,addListener:()=>{},removeListener:()=>{}}}var ql=(()=>{class t{_mediaMatcher=u(Wa);_zone=u(T);_queries=new Map;_destroySubject=new _;ngOnDestroy(){this._destroySubject.next(),this._destroySubject.complete()}isMatched(e){return DS(Ga(e)).some(i=>this._registerQuery(i).mql.matches)}observe(e){let o=tn(DS(Ga(e)).map(a=>this._registerQuery(a).observable));return o=_i(o.pipe(it(1)),o.pipe(Fs(1),Rs(0))),o.pipe(oe(a=>{let s={matches:!1,breakpoints:{}};return a.forEach(({matches:l,query:c})=>{s.matches=s.matches||l,s.breakpoints[c]=l}),s}))}_registerQuery(e){if(this._queries.has(e))return this._queries.get(e);let r=this._mediaMatcher.matchMedia(e),o={observable:new ie(a=>{let s=l=>this._zone.run(()=>a.next(l));return r.addListener(s),()=>{r.removeListener(s)}}).pipe(_t(r),oe(({matches:a})=>({query:e,matches:a})),De(this._destroySubject)),mql:r};return this._queries.set(e,o),o}static ɵfac=function(r){return new(r||t)};static ɵprov=S({token:t,factory:t.ɵfac})}return t})();function DS(t){return t.map(n=>n.split(`,`)).reduce((n,e)=>n.concat(e)).map(n=>n.trim())}var z1=(()=>{class t{create(e){return typeof MutationObserver>`u`?null:new MutationObserver(e)}static ɵfac=function(r){return new(r||t)};static ɵprov=S({token:t,factory:t.ɵfac})}return t})();var Nm=(()=>{class t{static ɵfac=function(r){return new(r||t)};static ɵmod=R({type:t});static ɵinj=A({providers:[z1]})}return t})();var ny=(()=>{class t{_platform=u(xe);isDisabled(e){return e.hasAttribute(`disabled`)}isVisible(e){return U1(e)&&getComputedStyle(e).visibility===`visible`}isTabbable(e){if(!this._platform.isBrowser)return!1;let r=H1(Q1(e));if(r&&(SS(r)===-1||!this.isVisible(r)))return!1;let i=e.nodeName.toLowerCase(),o=SS(e);return e.hasAttribute(`contenteditable`)?o!==-1:i===`iframe`||i===`object`||this._platform.WEBKIT&&this._platform.IOS&&!K1(e)?!1:i===`audio`?e.hasAttribute(`controls`)?o!==-1:!1:i===`video`?o===-1?!1:o!==null?!0:this._platform.FIREFOX||e.hasAttribute(`controls`):e.tabIndex>=0}isFocusable(e,r){return Z1(e)&&!this.isDisabled(e)&&(r?.ignoreInert||!e.closest?.(`[inert]`))&&(r?.ignoreVisibility||this.isVisible(e))}static ɵfac=function(r){return new(r||t)};static ɵprov=S({token:t,factory:t.ɵfac})}return t})();function H1(t){try{return t.frameElement}catch(n){return null}}function U1(t){return!!(t.offsetWidth||t.offsetHeight||typeof t.getClientRects==`function`&&t.getClientRects().length)}function $1(t){let n=t.nodeName.toLowerCase();return n===`input`||n===`select`||n===`button`||n===`textarea`}function G1(t){return q1(t)&&t.type==`hidden`}function W1(t){return Y1(t)&&t.hasAttribute(`href`)}function q1(t){return t.nodeName.toLowerCase()==`input`}function Y1(t){return t.nodeName.toLowerCase()==`a`}function MS(t){if(!t.hasAttribute(`tabindex`)||t.tabIndex===void 0)return!1;let n=t.getAttribute(`tabindex`);return!!(n&&!isNaN(parseInt(n,10)))}function SS(t){if(!MS(t))return null;let n=parseInt(t.getAttribute(`tabindex`)||``,10);return isNaN(n)?-1:n}function K1(t){let n=t.nodeName.toLowerCase(),e=n===`input`&&t.type;return e===`text`||e===`password`||n===`select`||n===`textarea`}function Z1(t){return G1(t)?!1:$1(t)||W1(t)||t.hasAttribute(`contenteditable`)||MS(t)}function Q1(t){return t.ownerDocument&&t.ownerDocument.defaultView||window}var ty=class{_element;_checker;_ngZone;_document;_injector;_startAnchor=null;_endAnchor=null;_hasAttached=!1;startAnchorListener=()=>{!this.focusLastTabbableElement()&&this._checker.isFocusable(this._element)&&this._element.focus()};endAnchorListener=()=>{!this.focusFirstTabbableElement()&&this._checker.isFocusable(this._element)&&this._element.focus()};get enabled(){return this._enabled}set enabled(n){this._enabled=n,this._startAnchor&&this._endAnchor&&(this._toggleAnchorTabIndex(n,this._startAnchor),this._toggleAnchorTabIndex(n,this._endAnchor))}_enabled=!0;constructor(n,e,r,i,o=!1,a){this._element=n,this._checker=e,this._ngZone=r,this._document=i,this._injector=a,o||this.attachAnchors()}destroy(){let n=this._startAnchor,e=this._endAnchor;n&&(n.removeEventListener(`focus`,this.startAnchorListener),n.remove()),e&&(e.removeEventListener(`focus`,this.endAnchorListener),e.remove()),this._startAnchor=this._endAnchor=null,this._hasAttached=!1}attachAnchors(){return this._hasAttached?!0:(this._ngZone.runOutsideAngular(()=>{this._startAnchor||(this._startAnchor=this._createAnchor(),this._startAnchor.addEventListener(`focus`,this.startAnchorListener)),this._endAnchor||(this._endAnchor=this._createAnchor(),this._endAnchor.addEventListener(`focus`,this.endAnchorListener))}),this._element.parentNode&&(this._element.parentNode.insertBefore(this._startAnchor,this._element),this._element.parentNode.insertBefore(this._endAnchor,this._element.nextSibling),this._hasAttached=!0),this._hasAttached)}focusInitialElementWhenReady(n){return new Promise(e=>{this._executeOnStable(()=>e(this.focusInitialElement(n)))})}focusFirstTabbableElementWhenReady(n){return new Promise(e=>{this._executeOnStable(()=>e(this.focusFirstTabbableElement(n)))})}focusLastTabbableElementWhenReady(n){return new Promise(e=>{this._executeOnStable(()=>e(this.focusLastTabbableElement(n)))})}_getRegionBoundary(n){let e=this._element.querySelectorAll(`[cdk-focus-region-${n}], [cdkFocusRegion${n}], [cdk-focus-${n}]`);return n==`start`?e.length?e[0]:this._getFirstTabbableElement(this._element):e.length?e[e.length-1]:this._getLastTabbableElement(this._element)}focusInitialElement(n){let e=this._element.querySelector(`[cdk-focus-initial], [cdkFocusInitial]`);if(e){if(!this._checker.isFocusable(e)){let r=this._getFirstTabbableElement(e);return r?.focus(n),!!r}return e.focus(n),!0}return this.focusFirstTabbableElement(n)}focusFirstTabbableElement(n){let e=this._getRegionBoundary(`start`);return e&&e.focus(n),!!e}focusLastTabbableElement(n){let e=this._getRegionBoundary(`end`);return e&&e.focus(n),!!e}hasAttached(){return this._hasAttached}_getFirstTabbableElement(n){if(this._checker.isFocusable(n)&&this._checker.isTabbable(n))return n;let e=n.children;for(let r=0;r<e.length;r++){let i=e[r].nodeType===this._document.ELEMENT_NODE?this._getFirstTabbableElement(e[r]):null;if(i)return i}return null}_getLastTabbableElement(n){if(this._checker.isFocusable(n)&&this._checker.isTabbable(n))return n;let e=n.children;for(let r=e.length-1;r>=0;r--){let i=e[r].nodeType===this._document.ELEMENT_NODE?this._getLastTabbableElement(e[r]):null;if(i)return i}return null}_createAnchor(){let n=this._document.createElement(`div`);return this._toggleAnchorTabIndex(this._enabled,n),n.classList.add(`cdk-visually-hidden`),n.classList.add(`cdk-focus-trap-anchor`),n.setAttribute(`aria-hidden`,`true`),n}_toggleAnchorTabIndex(n,e){n?e.setAttribute(`tabindex`,`0`):e.removeAttribute(`tabindex`)}toggleAnchors(n){this._startAnchor&&this._endAnchor&&(this._toggleAnchorTabIndex(n,this._startAnchor),this._toggleAnchorTabIndex(n,this._endAnchor))}_executeOnStable(n){Ge(n,{injector:this._injector})}};var Tm=(()=>{class t{_checker=u(ny);_ngZone=u(T);_document=u(z);_injector=u(B);constructor(){u(Ze).load(xr)}create(e,r=!1){return new ty(e,this._checker,this._ngZone,this._document,r,this._injector)}static ɵfac=function(r){return new(r||t)};static ɵprov=S({token:t,factory:t.ɵfac})}return t})();var ry=(()=>{class t{_elementRef=u(N);_focusTrapFactory=u(Tm);focusTrap=void 0;_previouslyFocusedElement=null;get enabled(){return this.focusTrap?.enabled||!1}set enabled(e){this.focusTrap&&(this.focusTrap.enabled=e)}autoCapture=!1;constructor(){u(xe).isBrowser&&(this.focusTrap=this._focusTrapFactory.create(this._elementRef.nativeElement,!0))}ngOnDestroy(){this.focusTrap?.destroy(),this._previouslyFocusedElement&&(this._previouslyFocusedElement.focus(),this._previouslyFocusedElement=null)}ngAfterContentInit(){this.focusTrap?.attachAnchors(),this.autoCapture&&this._captureFocus()}ngDoCheck(){this.focusTrap&&!this.focusTrap.hasAttached()&&this.focusTrap.attachAnchors()}ngOnChanges(e){let r=e.autoCapture;r&&!r.firstChange&&this.autoCapture&&this.focusTrap?.hasAttached()&&this._captureFocus()}_captureFocus(){this._previouslyFocusedElement=wr(),this.focusTrap?.focusInitialElementWhenReady()}static ɵfac=function(r){return new(r||t)};static ɵdir=w({type:t,selectors:[[``,`cdkTrapFocus`,``]],inputs:{enabled:[2,`cdkTrapFocus`,`enabled`,I],autoCapture:[2,`cdkTrapFocusAutoCapture`,`autoCapture`,I]},exportAs:[`cdkTrapFocus`],features:[Se]})}return t})();var IS=new g(`liveAnnouncerElement`,{providedIn:`root`,factory:()=>null});var NS=new g(`LIVE_ANNOUNCER_DEFAULT_OPTIONS`);var X1=0;var Yl=(()=>{class t{_ngZone=u(T);_defaultOptions=u(NS,{optional:!0});_liveElement;_document=u(z);_sanitizer=u(Pl);_previousTimeout;_currentPromise;_currentResolve;constructor(){let e=u(IS,{optional:!0});this._liveElement=e||this._createLiveElement()}announce(e,...r){let i=this._defaultOptions,o,a;return r.length===1&&typeof r[0]==`number`?a=r[0]:[o,a]=r,this.clear(),clearTimeout(this._previousTimeout),o||(o=i&&i.politeness?i.politeness:`polite`),a==null&&i&&(a=i.duration),this._liveElement.setAttribute(`aria-live`,o),this._liveElement.id&&this._exposeAnnouncerToModals(this._liveElement.id),this._ngZone.runOutsideAngular(()=>(this._currentPromise||(this._currentPromise=new Promise(s=>this._currentResolve=s)),clearTimeout(this._previousTimeout),this._previousTimeout=setTimeout(()=>{!e||typeof e==`string`?this._liveElement.textContent=e:wS(this._liveElement,e,this._sanitizer),typeof a==`number`&&(this._previousTimeout=setTimeout(()=>this.clear(),a)),this._currentResolve?.(),this._currentPromise=this._currentResolve=void 0},100),this._currentPromise))}clear(){this._liveElement&&(this._liveElement.textContent=``)}ngOnDestroy(){clearTimeout(this._previousTimeout),this._liveElement?.remove(),this._liveElement=null,this._currentResolve?.(),this._currentPromise=this._currentResolve=void 0}_createLiveElement(){let e=`cdk-live-announcer-element`,r=this._document.getElementsByClassName(e),i=this._document.createElement(`div`);for(let o=0;o<r.length;o++)r[o].remove();return i.classList.add(e),i.classList.add(`cdk-visually-hidden`),i.setAttribute(`aria-atomic`,`true`),i.setAttribute(`aria-live`,`polite`),i.id=`cdk-live-announcer-${X1++}`,this._document.body.appendChild(i),i}_exposeAnnouncerToModals(e){let r=this._document.querySelectorAll(`body > .cdk-overlay-container [aria-modal="true"]`);for(let i=0;i<r.length;i++){let o=r[i],a=o.getAttribute(`aria-owns`);a?a.indexOf(e)===-1&&o.setAttribute(`aria-owns`,a+` `+e):o.setAttribute(`aria-owns`,e)}}static ɵfac=function(r){return new(r||t)};static ɵprov=S({token:t,factory:t.ɵfac})}return t})();var Oi=(function(t){return t[t.NONE=0]=`NONE`,t[t.BLACK_ON_WHITE=1]=`BLACK_ON_WHITE`,t[t.WHITE_ON_BLACK=2]=`WHITE_ON_BLACK`,t})(Oi||{});var ES=`cdk-high-contrast-black-on-white`;var kS=`cdk-high-contrast-white-on-black`;var ey=`cdk-high-contrast-active`;var TS=(()=>{class t{_platform=u(xe);_hasCheckedHighContrastMode=!1;_document=u(z);_breakpointSubscription;constructor(){this._breakpointSubscription=u(ql).observe(`(forced-colors: active)`).subscribe(()=>{this._hasCheckedHighContrastMode&&(this._hasCheckedHighContrastMode=!1,this._applyBodyHighContrastModeCssClasses())})}getHighContrastMode(){if(!this._platform.isBrowser)return Oi.NONE;let e=this._document.createElement(`div`);e.style.backgroundColor=`rgb(1,2,3)`,e.style.position=`absolute`,this._document.body.appendChild(e);let r=this._document.defaultView||window,i=r&&r.getComputedStyle?r.getComputedStyle(e):null,o=(i&&i.backgroundColor||``).replace(/ /g,``);switch(e.remove(),o){case`rgb(0,0,0)`:case`rgb(45,50,54)`:case`rgb(32,32,32)`:return Oi.WHITE_ON_BLACK;case`rgb(255,255,255)`:case`rgb(255,250,239)`:return Oi.BLACK_ON_WHITE}return Oi.NONE}ngOnDestroy(){this._breakpointSubscription.unsubscribe()}_applyBodyHighContrastModeCssClasses(){if(!this._hasCheckedHighContrastMode&&this._platform.isBrowser&&this._document.body){let e=this._document.body.classList;e.remove(ey,ES,kS),this._hasCheckedHighContrastMode=!0;let r=this.getHighContrastMode();r===Oi.BLACK_ON_WHITE?e.add(ey,ES):r===Oi.WHITE_ON_BLACK&&e.add(ey,kS)}}static ɵfac=function(r){return new(r||t)};static ɵprov=S({token:t,factory:t.ɵfac})}return t})();var Ro=(()=>{class t{constructor(){u(TS)._applyBodyHighContrastModeCssClasses()}static ɵfac=function(r){return new(r||t)};static ɵmod=R({type:t});static ɵinj=A({imports:[Nm]})}return t})();var J1=200;var Am=class{_letterKeyStream=new _;_items=[];_selectedItemIndex=-1;_pressedLetters=[];_skipPredicateFn;_selectedItem=new _;selectedItem=this._selectedItem;constructor(n,e){let r=typeof e?.debounceInterval==`number`?e.debounceInterval:J1;e?.skipPredicate&&(this._skipPredicateFn=e.skipPredicate),this.setItems(n),this._setupKeyHandler(r)}destroy(){this._pressedLetters=[],this._letterKeyStream.complete(),this._selectedItem.complete()}setCurrentSelectedItemIndex(n){this._selectedItemIndex=n}setItems(n){this._items=n}handleKey(n){let e=n.keyCode;n.key&&n.key.length===1?this._letterKeyStream.next(n.key.toLocaleUpperCase()):(e>=65&&e<=90||e>=48&&e<=57)&&this._letterKeyStream.next(String.fromCharCode(e))}isTyping(){return this._pressedLetters.length>0}reset(){this._pressedLetters=[]}_setupKeyHandler(n){this._letterKeyStream.pipe(St(e=>this._pressedLetters.push(e)),Rs(n),Ee(()=>this._pressedLetters.length>0),oe(()=>this._pressedLetters.join(``).toLocaleUpperCase())).subscribe(e=>{for(let r=1;r<this._items.length+1;r++){let i=(this._selectedItemIndex+r)%this._items.length,o=this._items[i];if(!this._skipPredicateFn?.(o)&&o.getLabel?.().toLocaleUpperCase().trim().indexOf(e)===0){this._selectedItem.next(o);break}}this._pressedLetters=[]})}};function tt(t,...n){return n.length?n.some(e=>t[e]):t.altKey||t.shiftKey||t.ctrlKey||t.metaKey}var Rm=class{_items;_activeItemIndex=L(-1);_activeItem=L(null);_wrap=!1;_typeaheadSubscription=ne.EMPTY;_itemChangesSubscription;_vertical=!0;_horizontal=null;_allowedModifierKeys=[];_homeAndEnd=!1;_pageUpAndDown={enabled:!1,delta:10};_effectRef;_typeahead;_skipPredicateFn=n=>n.disabled;constructor(n,e){this._items=n,n instanceof _o?this._itemChangesSubscription=n.changes.subscribe(r=>this._itemsChanged(r.toArray())):Ht(n)&&(this._effectRef=mn(()=>this._itemsChanged(n()),{injector:e}))}tabOut=new _;change=new _;skipPredicate(n){return this._skipPredicateFn=n,this}withWrap(n=!0){return this._wrap=n,this}withVerticalOrientation(n=!0){return this._vertical=n,this}withHorizontalOrientation(n){return this._horizontal=n,this}withAllowedModifierKeys(n){return this._allowedModifierKeys=n,this}withTypeAhead(n=200){this._typeaheadSubscription.unsubscribe();let e=this._getItemsArray();return this._typeahead=new Am(e,{debounceInterval:typeof n==`number`?n:void 0,skipPredicate:r=>this._skipPredicateFn(r)}),this._typeaheadSubscription=this._typeahead.selectedItem.subscribe(r=>{this.setActiveItem(r)}),this}cancelTypeahead(){return this._typeahead?.reset(),this}withHomeAndEnd(n=!0){return this._homeAndEnd=n,this}withPageUpDown(n=!0,e=10){return this._pageUpAndDown={enabled:n,delta:e},this}setActiveItem(n){let e=this._activeItem();this.updateActiveItem(n),this._activeItem()!==e&&this.change.next(this._activeItemIndex())}onKeydown(n){let e=n.keyCode,i=[`altKey`,`ctrlKey`,`metaKey`,`shiftKey`].every(o=>!n[o]||this._allowedModifierKeys.indexOf(o)>-1);switch(e){case 9:this.tabOut.next();return;case 40:if(this._vertical&&i){this.setNextItemActive();break}else return;case 38:if(this._vertical&&i){this.setPreviousItemActive();break}else return;case 39:if(this._horizontal&&i){this._horizontal===`rtl`?this.setPreviousItemActive():this.setNextItemActive();break}else return;case 37:if(this._horizontal&&i){this._horizontal===`rtl`?this.setNextItemActive():this.setPreviousItemActive();break}else return;case 36:if(this._homeAndEnd&&i){this.setFirstItemActive();break}else return;case 35:if(this._homeAndEnd&&i){this.setLastItemActive();break}else return;case 33:if(this._pageUpAndDown.enabled&&i){let o=this._activeItemIndex()-this._pageUpAndDown.delta;this._setActiveItemByIndex(o>0?o:0,1);break}else return;case 34:if(this._pageUpAndDown.enabled&&i){let o=this._activeItemIndex()+this._pageUpAndDown.delta,a=this._getItemsArray().length;this._setActiveItemByIndex(o<a?o:a-1,-1);break}else return;default:(i||tt(n,`shiftKey`))&&this._typeahead?.handleKey(n);return}this._typeahead?.reset(),n.preventDefault()}get activeItemIndex(){return this._activeItemIndex()}get activeItem(){return this._activeItem()}isTyping(){return!!this._typeahead&&this._typeahead.isTyping()}setFirstItemActive(){this._setActiveItemByIndex(0,1)}setLastItemActive(){this._setActiveItemByIndex(this._getItemsArray().length-1,-1)}setNextItemActive(){this._activeItemIndex()<0?this.setFirstItemActive():this._setActiveItemByDelta(1)}setPreviousItemActive(){this._activeItemIndex()<0&&this._wrap?this.setLastItemActive():this._setActiveItemByDelta(-1)}updateActiveItem(n){let e=this._getItemsArray(),r=typeof n==`number`?n:e.indexOf(n),i=e[r];this._activeItem.set(i??null),this._activeItemIndex.set(r),this._typeahead?.setCurrentSelectedItemIndex(r)}destroy(){this._typeaheadSubscription.unsubscribe(),this._itemChangesSubscription?.unsubscribe(),this._effectRef?.destroy(),this._typeahead?.destroy(),this.tabOut.complete(),this.change.complete()}_setActiveItemByDelta(n){this._wrap?this._setActiveInWrapMode(n):this._setActiveInDefaultMode(n)}_setActiveInWrapMode(n){let e=this._getItemsArray();for(let r=1;r<=e.length;r++){let i=(this._activeItemIndex()+n*r+e.length)%e.length,o=e[i];if(!this._skipPredicateFn(o)){this.setActiveItem(i);return}}}_setActiveInDefaultMode(n){this._setActiveItemByIndex(this._activeItemIndex()+n,n)}_setActiveItemByIndex(n,e){let r=this._getItemsArray();if(r[n]){for(;this._skipPredicateFn(r[n]);)if(n+=e,!r[n])return;this.setActiveItem(n)}}_getItemsArray(){return Ht(this._items)?this._items():this._items instanceof _o?this._items.toArray():this._items}_itemsChanged(n){this._typeahead?.setItems(n);let e=this._activeItem();if(e){let r=n.indexOf(e);r>-1&&r!==this._activeItemIndex()&&(this._activeItemIndex.set(r),this._typeahead?.setCurrentSelectedItemIndex(r))}}};var Ql=class extends Rm{setActiveItem(n){this.activeItem&&this.activeItem.setInactiveStyles(),super.setActiveItem(n),this.activeItem&&this.activeItem.setActiveStyles()}};var RS=new Map;var Fe=class t{_appId=u(Ur);static _infix=`a${Math.floor(Math.random()*1e5).toString()}`;getId(n,e=!1){this._appId!==`ng`&&(n+=this._appId);let r=RS.get(n);return r===void 0?r=0:r++,RS.set(n,r),`${n}${e?t._infix+`-`:``}${r}`}static ɵfac=function(e){return new(e||t)};static ɵprov=S({token:t,factory:t.ɵfac})};var FS=` `;function eP(t,n,e){let r=Lm(t,n);e=e.trim(),!r.some(i=>i.trim()===e)&&(r.push(e),t.setAttribute(n,r.join(FS)))}function tP(t,n,e){let r=Lm(t,n);e=e.trim();let i=r.filter(o=>o!==e);i.length?t.setAttribute(n,i.join(FS)):t.removeAttribute(n)}function Lm(t,n){return t.getAttribute(n)?.match(/\S+/g)??[]}var PS=`cdk-describedby-message`;var Pm=`cdk-describedby-host`;var oy=0;var Vm=(()=>{class t{_platform=u(xe);_document=u(z);_messageRegistry=new Map;_messagesContainer=null;_id=`${oy++}`;constructor(){u(Ze).load(xr),this._id=u(Ur)+`-`+oy++}describe(e,r,i){if(!this._canBeDescribed(e,r))return;let o=iy(r,i);typeof r!=`string`?(OS(r,this._id),this._messageRegistry.set(o,{messageElement:r,referenceCount:0})):this._messageRegistry.has(o)||this._createMessageElement(r,i),this._isElementDescribedByMessage(e,o)||this._addMessageReference(e,o)}removeDescription(e,r,i){if(!r||!this._isElementNode(e))return;let o=iy(r,i);if(this._isElementDescribedByMessage(e,o)&&this._removeMessageReference(e,o),typeof r==`string`){let a=this._messageRegistry.get(o);a&&a.referenceCount===0&&this._deleteMessageElement(o)}this._messagesContainer?.childNodes.length===0&&(this._messagesContainer.remove(),this._messagesContainer=null)}ngOnDestroy(){let e=this._document.querySelectorAll(`[${Pm}="${this._id}"]`);for(let r=0;r<e.length;r++)this._removeCdkDescribedByReferenceIds(e[r]),e[r].removeAttribute(Pm);this._messagesContainer?.remove(),this._messagesContainer=null,this._messageRegistry.clear()}_createMessageElement(e,r){let i=this._document.createElement(`div`);OS(i,this._id),i.textContent=e,r&&i.setAttribute(`role`,r),this._createMessagesContainer(),this._messagesContainer.appendChild(i),this._messageRegistry.set(iy(e,r),{messageElement:i,referenceCount:0})}_deleteMessageElement(e){this._messageRegistry.get(e)?.messageElement?.remove(),this._messageRegistry.delete(e)}_createMessagesContainer(){if(this._messagesContainer)return;let e=`cdk-describedby-message-container`,r=this._document.querySelectorAll(`.${e}[platform="server"]`);for(let o=0;o<r.length;o++)r[o].remove();let i=this._document.createElement(`div`);i.style.visibility=`hidden`,i.classList.add(e),i.classList.add(`cdk-visually-hidden`),this._platform.isBrowser||i.setAttribute(`platform`,`server`),this._document.body.appendChild(i),this._messagesContainer=i}_removeCdkDescribedByReferenceIds(e){let r=Lm(e,`aria-describedby`).filter(i=>i.indexOf(PS)!=0);e.setAttribute(`aria-describedby`,r.join(` `))}_addMessageReference(e,r){let i=this._messageRegistry.get(r);eP(e,`aria-describedby`,i.messageElement.id),e.setAttribute(Pm,this._id),i.referenceCount++}_removeMessageReference(e,r){let i=this._messageRegistry.get(r);i.referenceCount--,tP(e,`aria-describedby`,i.messageElement.id),e.removeAttribute(Pm)}_isElementDescribedByMessage(e,r){let i=Lm(e,`aria-describedby`),o=this._messageRegistry.get(r),a=o&&o.messageElement.id;return!!a&&i.indexOf(a)!=-1}_canBeDescribed(e,r){if(!this._isElementNode(e))return!1;if(r&&typeof r==`object`)return!0;let i=r==null?``:`${r}`.trim(),o=e.getAttribute(`aria-label`);return i?!o||o.trim()!==i:!1}_isElementNode(e){return e.nodeType===this._document.ELEMENT_NODE}static ɵfac=function(r){return new(r||t)};static ɵprov=S({token:t,factory:t.ɵfac})}return t})();function iy(t,n){return typeof t==`string`?`${n||``}/${t}`:t}function OS(t,n){t.id||(t.id=`${PS}-${n}-${oy++}`)}var Po;function LS(){if(Po==null){if(typeof document!=`object`||!document||typeof Element!=`function`||!Element)return Po=!1,Po;if(document.documentElement?.style&&`scrollBehavior`in document.documentElement.style)Po=!0;else{let t=Element.prototype.scrollTo;t?Po=!/\{\s*\[native code\]\s*\}/.test(t.toString()):Po=!1}}return Po}function ay(){return typeof __karma__<`u`&&!!__karma__||typeof jasmine<`u`&&!!jasmine||typeof jest<`u`&&!!jest||typeof Mocha<`u`&&!!Mocha}var qa;var VS=[`color`,`button`,`checkbox`,`date`,`datetime-local`,`email`,`file`,`hidden`,`image`,`month`,`number`,`password`,`radio`,`range`,`reset`,`search`,`submit`,`tel`,`text`,`time`,`url`,`week`];function sy(){if(qa)return qa;if(typeof document!=`object`||!document)return qa=new Set(VS),qa;let t=document.createElement(`input`);return qa=new Set(VS.filter(n=>(t.setAttribute(`type`,n),t.type===n))),qa}var BS={XSmall:`(max-width: 599.98px)`,Small:`(min-width: 600px) and (max-width: 959.98px)`,Medium:`(min-width: 960px) and (max-width: 1279.98px)`,Large:`(min-width: 1280px) and (max-width: 1919.98px)`,XLarge:`(min-width: 1920px)`,Handset:`(max-width: 599.98px) and (orientation: portrait), (max-width: 959.98px) and (orientation: landscape)`,Tablet:`(min-width: 600px) and (max-width: 839.98px) and (orientation: portrait), (min-width: 960px) and (max-width: 1279.98px) and (orientation: landscape)`,Web:`(min-width: 840px) and (orientation: portrait), (min-width: 1280px) and (orientation: landscape)`,HandsetPortrait:`(max-width: 599.98px) and (orientation: portrait)`,TabletPortrait:`(min-width: 600px) and (max-width: 839.98px) and (orientation: portrait)`,WebPortrait:`(min-width: 840px) and (orientation: portrait)`,HandsetLandscape:`(max-width: 959.98px) and (orientation: landscape)`,TabletLandscape:`(min-width: 960px) and (max-width: 1279.98px) and (orientation: landscape)`,WebLandscape:`(min-width: 1280px) and (orientation: landscape)`};var nP=new g(`MATERIAL_ANIMATIONS`);var jS=null;function rP(){return u(nP,{optional:!0})?.animationsDisabled||u(Js,{optional:!0})===`NoopAnimations`?`di-disabled`:(jS??=u(Wa).matchMedia(`(prefers-reduced-motion)`).matches,jS?`reduced-motion`:`enabled`)}function ze(){return rP()!==`enabled`}function ft(t){return t==null?``:typeof t==`string`?t:`${t}px`}function ri(t){return t!=null&&`${t}`!=`false`}function zS(t,n=/\s+/){let e=[];if(t!=null){let r=Array.isArray(t)?t:`${t}`.split(n);for(let i of r){let o=`${i}`.trim();o&&e.push(o)}}return e}var An=(function(t){return t[t.FADING_IN=0]=`FADING_IN`,t[t.VISIBLE=1]=`VISIBLE`,t[t.FADING_OUT=2]=`FADING_OUT`,t[t.HIDDEN=3]=`HIDDEN`,t})(An||{});var ly=class{_renderer;element;config;_animationForciblyDisabledThroughCss;state=An.HIDDEN;constructor(n,e,r,i=!1){this._renderer=n,this.element=e,this.config=r,this._animationForciblyDisabledThroughCss=i}fadeOut(){this._renderer.fadeOutRipple(this)}};var HS=$a({passive:!0,capture:!0});var cy=class{_events=new Map;addHandler(n,e,r,i){let o=this._events.get(e);if(o){let a=o.get(r);a?a.add(i):o.set(r,new Set([i]))}else this._events.set(e,new Map([[r,new Set([i])]])),n.runOutsideAngular(()=>{document.addEventListener(e,this._delegateEventHandler,HS)})}removeHandler(n,e,r){let i=this._events.get(n);if(!i)return;let o=i.get(e);o&&(o.delete(r),o.size===0&&i.delete(e),i.size===0&&(this._events.delete(n),document.removeEventListener(n,this._delegateEventHandler,HS)))}_delegateEventHandler=n=>{let e=Pt(n);e&&this._events.get(n.type)?.forEach((r,i)=>{(i===e||i.contains(e))&&r.forEach(o=>o.handleEvent(n))})}};var Xl={enterDuration:225,exitDuration:150};var iP=800;var US=$a({passive:!0,capture:!0});var $S=[`mousedown`,`touchstart`];var GS=[`mouseup`,`mouseleave`,`touchend`,`touchcancel`];var oP=(()=>{class t{static ɵfac=function(r){return new(r||t)};static ɵcmp=F({type:t,selectors:[[`ng-component`]],hostAttrs:[`mat-ripple-style-loader`,``],decls:0,vars:0,template:function(r,i){},styles:[`.mat-ripple {
  overflow: hidden;
  position: relative;
}
.mat-ripple:not(:empty) {
  transform: translateZ(0);
}

.mat-ripple.mat-ripple-unbounded {
  overflow: visible;
}

.mat-ripple-element {
  position: absolute;
  border-radius: 50%;
  pointer-events: none;
  transition: opacity, transform 0ms cubic-bezier(0, 0, 0.2, 1);
  transform: scale3d(0, 0, 0);
  background-color: var(--%NS%mat-ripple-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 10%, transparent));
}
@media (forced-colors: active) {
  .mat-ripple-element {
    display: none;
  }
}
.cdk-drag-preview .mat-ripple-element, .cdk-drag-placeholder .mat-ripple-element {
  display: none;
}
`],encapsulation:2})}return t})();var Jl=class t{_target;_ngZone;_platform;_containerElement;_triggerElement=null;_isPointerDown=!1;_activeRipples=new Map;_mostRecentTransientRipple=null;_lastTouchStartEvent;_pointerUpEventsRegistered=!1;_containerRect=null;static _eventManager=new cy;constructor(n,e,r,i,o){this._target=n,this._ngZone=e,this._platform=i,i.isBrowser&&(this._containerElement=gn(r)),o&&o.get(Ze).load(oP)}fadeInRipple(n,e,r={}){let i=this._containerRect=this._containerRect||this._containerElement.getBoundingClientRect(),o=b(b({},Xl),r.animation);r.centered&&(n=i.left+i.width/2,e=i.top+i.height/2);let a=r.radius||aP(n,e,i),s=n-i.left,l=e-i.top,c=o.enterDuration,d=document.createElement(`div`);d.classList.add(`mat-ripple-element`),d.style.left=`${s-a}px`,d.style.top=`${l-a}px`,d.style.height=`${a*2}px`,d.style.width=`${a*2}px`,r.color!=null&&(d.style.backgroundColor=r.color),d.style.transitionDuration=`${c}ms`,this._containerElement.appendChild(d);let m=window.getComputedStyle(d),p=m.transitionProperty,f=m.transitionDuration,h=p===`none`||f===`0s`||f===`0s, 0s`||i.width===0&&i.height===0,v=new ly(this,d,r,h);d.style.transform=`scale3d(1, 1, 1)`,v.state=An.FADING_IN,r.persistent||(this._mostRecentTransientRipple=v);let M=null;return!h&&(c||o.exitDuration)&&this._ngZone.runOutsideAngular(()=>{let V=()=>{M&&(M.fallbackTimer=null),clearTimeout(pe),this._finishRippleTransition(v)},O=()=>this._destroyRipple(v),pe=setTimeout(O,c+100);d.addEventListener(`transitionend`,V),d.addEventListener(`transitioncancel`,O),M={onTransitionEnd:V,onTransitionCancel:O,fallbackTimer:pe}}),this._activeRipples.set(v,M),(h||!c)&&this._finishRippleTransition(v),v}fadeOutRipple(n){if(n.state===An.FADING_OUT||n.state===An.HIDDEN)return;let e=n.element,r=b(b({},Xl),n.config.animation);e.style.transitionDuration=`${r.exitDuration}ms`,e.style.opacity=`0`,n.state=An.FADING_OUT,(n._animationForciblyDisabledThroughCss||!r.exitDuration)&&this._finishRippleTransition(n)}fadeOutAll(){this._getActiveRipples().forEach(n=>n.fadeOut())}fadeOutAllNonPersistent(){this._getActiveRipples().forEach(n=>{n.config.persistent||n.fadeOut()})}setupTriggerEvents(n){let e=gn(n);!this._platform.isBrowser||!e||e===this._triggerElement||(this._removeTriggerEvents(),this._triggerElement=e,$S.forEach(r=>{t._eventManager.addHandler(this._ngZone,r,e,this)}))}handleEvent(n){n.type===`mousedown`?this._onMousedown(n):n.type===`touchstart`?this._onTouchStart(n):this._onPointerUp(),this._pointerUpEventsRegistered||(this._ngZone.runOutsideAngular(()=>{GS.forEach(e=>{this._triggerElement.addEventListener(e,this,US)})}),this._pointerUpEventsRegistered=!0)}_finishRippleTransition(n){n.state===An.FADING_IN?this._startFadeOutTransition(n):n.state===An.FADING_OUT&&this._destroyRipple(n)}_startFadeOutTransition(n){let e=n===this._mostRecentTransientRipple,{persistent:r}=n.config;n.state=An.VISIBLE,!r&&(!e||!this._isPointerDown)&&n.fadeOut()}_destroyRipple(n){let e=this._activeRipples.get(n)??null;this._activeRipples.delete(n),this._activeRipples.size||(this._containerRect=null),n===this._mostRecentTransientRipple&&(this._mostRecentTransientRipple=null),n.state=An.HIDDEN,e!==null&&(n.element.removeEventListener(`transitionend`,e.onTransitionEnd),n.element.removeEventListener(`transitioncancel`,e.onTransitionCancel),e.fallbackTimer!==null&&clearTimeout(e.fallbackTimer)),n.element.remove()}_onMousedown(n){let e=Ul(n),r=this._lastTouchStartEvent&&Date.now()<this._lastTouchStartEvent+iP;!this._target.rippleDisabled&&!e&&!r&&(this._isPointerDown=!0,this.fadeInRipple(n.clientX,n.clientY,this._target.rippleConfig))}_onTouchStart(n){if(!this._target.rippleDisabled&&!$l(n)){this._lastTouchStartEvent=Date.now(),this._isPointerDown=!0;let e=n.changedTouches;if(e)for(let r=0;r<e.length;r++)this.fadeInRipple(e[r].clientX,e[r].clientY,this._target.rippleConfig)}}_onPointerUp(){this._isPointerDown&&(this._isPointerDown=!1,this._getActiveRipples().forEach(n=>{let e=n.state===An.VISIBLE||n.config.terminateOnPointerUp&&n.state===An.FADING_IN;!n.config.persistent&&e&&n.fadeOut()}))}_getActiveRipples(){return Array.from(this._activeRipples.keys())}_removeTriggerEvents(){let n=this._triggerElement;n&&($S.forEach(e=>t._eventManager.removeHandler(e,n,this)),this._pointerUpEventsRegistered&&(GS.forEach(e=>n.removeEventListener(e,this,US)),this._pointerUpEventsRegistered=!1))}};function aP(t,n,e){let r=Math.max(Math.abs(t-e.left),Math.abs(t-e.right)),i=Math.max(Math.abs(n-e.top),Math.abs(n-e.bottom));return Math.sqrt(r*r+i*i)}var dy=new g(`mat-ripple-global-options`);var Ya=(()=>{class t{_elementRef=u(N);_animationsDisabled=ze();color;unbounded=!1;centered=!1;radius=0;animation;get disabled(){return this._disabled}set disabled(e){e&&this.fadeOutAllNonPersistent(),this._disabled=e,this._setupTriggerEventsIfEnabled()}_disabled=!1;get trigger(){return this._trigger||this._elementRef.nativeElement}set trigger(e){this._trigger=e,this._setupTriggerEventsIfEnabled()}_trigger;_rippleRenderer;_globalOptions;_isInitialized=!1;constructor(){let e=u(T),r=u(xe),i=u(dy,{optional:!0}),o=u(B);this._globalOptions=i||{},this._rippleRenderer=new Jl(this,e,this._elementRef,r,o)}ngOnInit(){this._isInitialized=!0,this._setupTriggerEventsIfEnabled()}ngOnDestroy(){this._rippleRenderer._removeTriggerEvents()}fadeOutAll(){this._rippleRenderer.fadeOutAll()}fadeOutAllNonPersistent(){this._rippleRenderer.fadeOutAllNonPersistent()}get rippleConfig(){return{centered:this.centered,radius:this.radius,color:this.color,animation:b(b(b({},this._globalOptions.animation),this._animationsDisabled?{enterDuration:0,exitDuration:0}:{}),this.animation),terminateOnPointerUp:this._globalOptions.terminateOnPointerUp}}get rippleDisabled(){return this.disabled||!!this._globalOptions.disabled}_setupTriggerEventsIfEnabled(){!this.disabled&&this._isInitialized&&this._rippleRenderer.setupTriggerEvents(this.trigger)}launch(e,r=0,i){return typeof e==`number`?this._rippleRenderer.fadeInRipple(e,r,b(b({},this.rippleConfig),i)):this._rippleRenderer.fadeInRipple(0,0,b(b({},this.rippleConfig),e))}static ɵfac=function(r){return new(r||t)};static ɵdir=w({type:t,selectors:[[``,`mat-ripple`,``],[``,`matRipple`,``]],hostAttrs:[1,`mat-ripple`],hostVars:2,hostBindings:function(r,i){r&2&&G(`mat-ripple-unbounded`,i.unbounded)},inputs:{color:[0,`matRippleColor`,`color`],unbounded:[0,`matRippleUnbounded`,`unbounded`],centered:[0,`matRippleCentered`,`centered`],radius:[0,`matRippleRadius`,`radius`],animation:[0,`matRippleAnimation`,`animation`],disabled:[0,`matRippleDisabled`,`disabled`],trigger:[0,`matRippleTrigger`,`trigger`]},exportAs:[`matRipple`]})}return t})();var sP={capture:!0};var lP=[`focus`,`mousedown`,`mouseenter`,`touchstart`];var uy=`mat-ripple-loader-uninitialized`;var my=`mat-ripple-loader-class-name`;var WS=`mat-ripple-loader-centered`;var Bm=`mat-ripple-loader-disabled`;var qS=(()=>{class t{_document=u(z);_animationsDisabled=ze();_globalRippleOptions=u(dy,{optional:!0});_platform=u(xe);_ngZone=u(T);_injector=u(B);_eventCleanups;_hosts=new Map;constructor(){let e=u(bt).createRenderer(null,null);this._eventCleanups=this._ngZone.runOutsideAngular(()=>lP.map(r=>e.listen(this._document,r,this._onInteraction,sP)))}ngOnDestroy(){let e=this._hosts.keys();for(let r of e)this.destroyRipple(r);this._eventCleanups.forEach(r=>r())}configureRipple(e,r){e.setAttribute(uy,this._globalRippleOptions?.namespace??``),(r.className||!e.hasAttribute(my))&&e.setAttribute(my,r.className||``),r.centered&&e.setAttribute(WS,``),r.disabled&&e.setAttribute(Bm,``)}setDisabled(e,r){let i=this._hosts.get(e);i?(i.target.rippleDisabled=r,!r&&!i.hasSetUpEvents&&(i.hasSetUpEvents=!0,i.renderer.setupTriggerEvents(e))):r?e.setAttribute(Bm,``):e.removeAttribute(Bm)}_onInteraction=e=>{let r=Pt(e);if(r instanceof HTMLElement){let i=r.closest(`[${uy}="${this._globalRippleOptions?.namespace??``}"]`);i&&this._createRipple(i)}};_createRipple(e){if(!this._document||this._hosts.has(e))return;e.querySelector(`.mat-ripple`)?.remove();let r=this._document.createElement(`span`);r.classList.add(`mat-ripple`,e.getAttribute(my)),e.append(r);let i=this._globalRippleOptions,o=this._animationsDisabled?0:i?.animation?.enterDuration??Xl.enterDuration,a=this._animationsDisabled?0:i?.animation?.exitDuration??Xl.exitDuration,s={rippleDisabled:this._animationsDisabled||i?.disabled||e.hasAttribute(Bm),rippleConfig:{centered:e.hasAttribute(WS),terminateOnPointerUp:i?.terminateOnPointerUp,animation:{enterDuration:o,exitDuration:a}}},l=new Jl(s,this._ngZone,r,this._platform,this._injector),c=!s.rippleDisabled;c&&l.setupTriggerEvents(e),this._hosts.set(e,{target:s,renderer:l,hasSetUpEvents:c}),e.removeAttribute(uy)}destroyRipple(e){let r=this._hosts.get(e);r&&(r.renderer._removeTriggerEvents(),this._hosts.delete(e))}static ɵfac=function(r){return new(r||t)};static ɵprov=S({token:t,factory:t.ɵfac})}return t})();var Rn=(()=>{class t{static ɵfac=function(r){return new(r||t)};static ɵcmp=F({type:t,selectors:[[`structural-styles`]],decls:0,vars:0,template:function(r,i){},styles:[`.mat-focus-indicator {
  position: relative;
}
.mat-focus-indicator::before {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  box-sizing: border-box;
  pointer-events: none;
  display: var(--%NS%mat-focus-indicator-display, none);
  border-width: var(--%NS%mat-focus-indicator-border-width, 3px);
  border-style: var(--%NS%mat-focus-indicator-border-style, solid);
  border-color: var(--%NS%mat-focus-indicator-border-color, transparent);
  border-radius: var(--%NS%mat-focus-indicator-border-radius, 4px);
}
.mat-focus-indicator:focus-visible::before {
  content: "";
}

@media (forced-colors: active) {
  html {
    --%NS%mat-focus-indicator-display: block;
    --%NS%mat-focus-indicator-fallback-border-style: none;
  }
}
`],encapsulation:2})}return t})();var cP=new g(`MAT_BUTTON_CONFIG`);function YS(t){return t==null?void 0:Wt(t)}var fy=(()=>{class t{_elementRef=u(N);_ngZone=u(T);_animationsDisabled=ze();_config=u(cP,{optional:!0});_focusMonitor=u(Tn);_cleanupClick;_renderer=u(ke);_rippleLoader=u(qS);_isAnchor;_isFab=!1;color;get disableRipple(){return this._disableRipple}set disableRipple(e){this._disableRipple=e,this._updateRippleDisabled()}_disableRipple=!1;get disabled(){return this._disabled}set disabled(e){this._disabled=e,this._updateRippleDisabled()}_disabled=!1;ariaDisabled;disabledInteractive;tabIndex;set _tabindex(e){this.tabIndex=e}showProgress=Mo(!1,{transform:I});constructor(){u(Ze).load(Rn);let e=this._elementRef.nativeElement;this._isAnchor=e.tagName===`A`,this.disabledInteractive=this._config?.disabledInteractive??!1,this.color=this._config?.color??null,this._rippleLoader?.configureRipple(e,{className:`mat-mdc-button-ripple`})}ngAfterViewInit(){this._focusMonitor.monitor(this._elementRef,!0),this._isAnchor&&this._setupAsAnchor()}ngOnDestroy(){this._cleanupClick?.(),this._focusMonitor.stopMonitoring(this._elementRef),this._rippleLoader?.destroyRipple(this._elementRef.nativeElement)}focus(e=`program`,r){e?this._focusMonitor.focusVia(this._elementRef.nativeElement,e,r):this._elementRef.nativeElement.focus(r)}_getAriaDisabled(){return this.ariaDisabled!=null?this.ariaDisabled:this._isAnchor?this.disabled||null:this.disabled&&this.disabledInteractive?!0:null}_getDisabledAttribute(){return this.disabledInteractive||!this.disabled?null:!0}_updateRippleDisabled(){this._rippleLoader?.setDisabled(this._elementRef.nativeElement,this.disableRipple||this.disabled)}_getTabIndex(){return this._isAnchor?this.disabled&&!this.disabledInteractive?-1:this.tabIndex:this.tabIndex}_setupAsAnchor(){this._cleanupClick=this._ngZone.runOutsideAngular(()=>this._renderer.listen(this._elementRef.nativeElement,`click`,e=>{this.disabled&&(e.preventDefault(),e.stopImmediatePropagation())}))}static ɵfac=function(r){return new(r||t)};static ɵdir=w({type:t,hostAttrs:[1,`mat-mdc-button-base`],hostVars:15,hostBindings:function(r,i){r&2&&(Y(`disabled`,i._getDisabledAttribute())(`aria-disabled`,i._getAriaDisabled())(`tabindex`,i._getTabIndex()),Ot(i.color?`mat-`+i.color:``),G(`mat-mdc-button-progress-indicator-shown`,i.showProgress())(`mat-mdc-button-disabled`,i.disabled)(`mat-mdc-button-disabled-interactive`,i.disabledInteractive)(`mat-unthemed`,!i.color)(`_mat-animation-noopable`,i._animationsDisabled))},inputs:{color:`color`,disableRipple:[2,`disableRipple`,`disableRipple`,I],disabled:[2,`disabled`,`disabled`,I],ariaDisabled:[2,`aria-disabled`,`ariaDisabled`,I],disabledInteractive:[2,`disabledInteractive`,`disabledInteractive`,I],tabIndex:[2,`tabIndex`,`tabIndex`,YS],_tabindex:[2,`tabindex`,`_tabindex`,YS],showProgress:[1,`showProgress`]}})}return t})();var Ka=(()=>{class t extends fy{constructor(){super(),this._rippleLoader.configureRipple(this._elementRef.nativeElement,{centered:!0})}static ɵfac=function(r){return new(r||t)};static ɵcmp=(function(){let e=[`*`,[[``,`progressIndicator`,``]]],r=[`*`,`[progressIndicator]`];function i(o,a){o&1&&(Re(0,`div`,1),X(1,1),Oe())}return F({type:t,selectors:[[`button`,`mat-icon-button`,``],[`a`,`mat-icon-button`,``],[`button`,`matIconButton`,``],[`a`,`matIconButton`,``]],hostAttrs:[1,`mdc-icon-button`,`mat-mdc-icon-button`],exportAs:[`matButton`,`matAnchor`],features:[re],ngContentSelectors:r,decls:5,vars:1,consts:[[1,`mat-mdc-button-persistent-ripple`,`mdc-icon-button__ripple`],[1,`mat-mdc-button-progress-indicator-container`],[1,`mat-focus-indicator`],[1,`mat-mdc-button-touch-target`]],template:function(a,s){a&1&&(Me(e),$t(0,`span`,0),X(1),le(2,i,2,0,`div`,1),$t(3,`span`,2)(4,`span`,3)),a&2&&(y(2),ce(s.showProgress()?2:-1))},styles:[`.mat-mdc-icon-button {
  -webkit-user-select: none;
  user-select: none;
  display: inline-block;
  position: relative;
  box-sizing: border-box;
  border: none;
  outline: none;
  background-color: transparent;
  fill: currentColor;
  text-decoration: none;
  cursor: pointer;
  z-index: 0;
  overflow: visible;
  border-radius: var(--%NS%mat-icon-button-container-shape, var(--%NS%mat-sys-corner-full, 50%));
  flex-shrink: 0;
  text-align: center;
  width: var(--%NS%mat-icon-button-state-layer-size, 40px);
  height: var(--%NS%mat-icon-button-state-layer-size, 40px);
  padding: calc(calc(var(--%NS%mat-icon-button-state-layer-size, 40px) - var(--%NS%mat-icon-button-icon-size, 24px)) / 2);
  font-size: var(--%NS%mat-icon-button-icon-size, 24px);
  color: var(--%NS%mat-icon-button-icon-color, var(--%NS%mat-sys-on-surface-variant));
  -webkit-tap-highlight-color: transparent;
}
.mat-mdc-icon-button .mat-mdc-button-ripple,
.mat-mdc-icon-button .mat-mdc-button-persistent-ripple,
.mat-mdc-icon-button .mat-mdc-button-persistent-ripple::before {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  pointer-events: none;
  border-radius: inherit;
}
.mat-mdc-icon-button .mat-mdc-button-ripple {
  overflow: hidden;
}
.mat-mdc-icon-button .mat-mdc-button-persistent-ripple::before {
  content: "";
  opacity: 0;
}
.mat-mdc-icon-button .mdc-button__label,
.mat-mdc-icon-button .mat-icon {
  z-index: 1;
  position: relative;
}
.mat-mdc-icon-button .mat-focus-indicator {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  border-radius: inherit;
}
.mat-mdc-icon-button:focus-visible > .mat-focus-indicator::before {
  content: "";
  border-radius: inherit;
}
.mat-mdc-icon-button .mat-ripple-element {
  background-color: var(--%NS%mat-icon-button-ripple-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface-variant) calc(var(--%NS%mat-sys-pressed-state-layer-opacity) * 100%), transparent));
}
.mat-mdc-icon-button .mat-mdc-button-persistent-ripple::before {
  background-color: var(--%NS%mat-icon-button-state-layer-color, var(--%NS%mat-sys-on-surface-variant));
}
.mat-mdc-icon-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before {
  background-color: var(--%NS%mat-icon-button-disabled-state-layer-color, var(--%NS%mat-sys-on-surface-variant));
}
.mat-mdc-icon-button:hover > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--%NS%mat-icon-button-hover-state-layer-opacity, var(--%NS%mat-sys-hover-state-layer-opacity));
}
.mat-mdc-icon-button.cdk-program-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-icon-button.cdk-keyboard-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-icon-button.mat-mdc-button-disabled-interactive:focus > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--%NS%mat-icon-button-focus-state-layer-opacity, var(--%NS%mat-sys-focus-state-layer-opacity));
}
.mat-mdc-icon-button:active > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--%NS%mat-icon-button-pressed-state-layer-opacity, var(--%NS%mat-sys-pressed-state-layer-opacity));
}
.mat-mdc-icon-button .mat-mdc-button-touch-target {
  position: absolute;
  top: 50%;
  height: var(--%NS%mat-icon-button-touch-target-size, 48px);
  display: var(--%NS%mat-icon-button-touch-target-display, block);
  left: 50%;
  width: var(--%NS%mat-icon-button-touch-target-size, 48px);
  transform: translate(-50%, -50%);
}
.mat-mdc-icon-button._mat-animation-noopable {
  transition: none !important;
  animation: none !important;
}
.mat-mdc-icon-button[disabled], .mat-mdc-icon-button.mat-mdc-button-disabled {
  cursor: default;
  pointer-events: none;
  color: var(--%NS%mat-icon-button-disabled-icon-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}
.mat-mdc-icon-button.mat-mdc-button-disabled-interactive {
  pointer-events: auto;
}
.mat-mdc-icon-button img,
.mat-mdc-icon-button svg {
  width: var(--%NS%mat-icon-button-icon-size, 24px);
  height: var(--%NS%mat-icon-button-icon-size, 24px);
  vertical-align: baseline;
}
.mat-mdc-icon-button .mat-mdc-button-progress-indicator-container .mdc-circular-progress__determinate-circle-graphic {
  width: inherit;
  height: inherit;
}
.mat-mdc-icon-button .mat-mdc-button-progress-indicator-container .mdc-circular-progress__indeterminate-circle-graphic {
  height: 100%;
}
.mat-mdc-icon-button .mat-mdc-button-persistent-ripple {
  border-radius: var(--%NS%mat-icon-button-container-shape, var(--%NS%mat-sys-corner-full, 50%));
}
.mat-mdc-icon-button[hidden] {
  display: none;
}
.mat-mdc-icon-button.mat-unthemed:not(.mdc-ripple-upgraded):focus::before, .mat-mdc-icon-button.mat-primary:not(.mdc-ripple-upgraded):focus::before, .mat-mdc-icon-button.mat-accent:not(.mdc-ripple-upgraded):focus::before, .mat-mdc-icon-button.mat-warn:not(.mdc-ripple-upgraded):focus::before {
  background: transparent;
  opacity: 1;
}

.mat-mdc-button-progress-indicator-container {
  position: absolute;
  inset-inline-start: 0;
  inset-block-start: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
}

.mat-mdc-button-progress-indicator-shown mat-icon {
  visibility: hidden;
}
`,`@media (forced-colors: active) {
  .mat-mdc-button:not(.mdc-button--outlined),
  .mat-mdc-unelevated-button:not(.mdc-button--outlined),
  .mat-mdc-raised-button:not(.mdc-button--outlined),
  .mat-mdc-outlined-button:not(.mdc-button--outlined),
  .mat-mdc-button-base.mat-tonal-button,
  .mat-mdc-icon-button.mat-mdc-icon-button,
  .mat-mdc-outlined-button .mdc-button__ripple {
    outline: solid 1px;
  }
}
`],encapsulation:2})})()}return t})();var dP=new g(`cdk-dir-doc`,{providedIn:`root`,factory:()=>u(z)});var uP=/^(ar|ckb|dv|he|iw|fa|nqo|ps|sd|ug|ur|yi|.*[-_](Adlm|Arab|Hebr|Nkoo|Rohg|Thaa))(?!.*[-_](Latn|Cyrl)($|-|_))($|-|_)/i;function KS(t){let n=t?.toLowerCase()||``;return n===`auto`&&typeof navigator<`u`&&navigator?.language?uP.test(navigator.language)?`rtl`:`ltr`:n===`rtl`?`rtl`:`ltr`}var lt=(()=>{class t{get value(){return this.valueSignal()}valueSignal=L(`ltr`);change=new k;constructor(){let e=u(dP,{optional:!0});if(e){let r=e.body?e.body.dir:null,i=e.documentElement?e.documentElement.dir:null;this.valueSignal.set(KS(r||i||`ltr`))}}ngOnDestroy(){this.change.complete()}static ɵfac=function(r){return new(r||t)};static ɵprov=S({token:t,factory:t.ɵfac})}return t})();var ve=(()=>{class t{static ɵfac=function(r){return new(r||t)};static ɵmod=R({type:t});static ɵinj=A({})}return t})();var Za=(()=>{class t{static ɵfac=function(r){return new(r||t)};static ɵmod=R({type:t});static ɵinj=A({imports:[ve]})}return t})();var ZS=new Map([[`text`,[`mat-mdc-button`]],[`filled`,[`mdc-button--unelevated`,`mat-mdc-unelevated-button`]],[`elevated`,[`mdc-button--raised`,`mat-mdc-raised-button`]],[`outlined`,[`mdc-button--outlined`,`mat-mdc-outlined-button`]],[`tonal`,[`mat-tonal-button`]]]);var ec=(()=>{class t extends fy{get appearance(){return this._appearance}set appearance(e){this.setAppearance(e||this._config?.defaultAppearance||`text`)}_appearance=null;constructor(){super();let e=mP(this._elementRef.nativeElement);e&&this.setAppearance(e)}setAppearance(e){if(e===this._appearance)return;let r=this._elementRef.nativeElement.classList,i=this._appearance?ZS.get(this._appearance):null,o=ZS.get(e);i&&r.remove(...i),r.add(...o),this._appearance=e}static ɵfac=function(r){return new(r||t)};static ɵcmp=(function(){let e=[[[``,8,`material-icons`,3,`iconPositionEnd`,``],[`mat-icon`,3,`iconPositionEnd`,``],[``,`matButtonIcon`,``,3,`iconPositionEnd`,``],[``,8,`material-symbols-outlined`,3,`iconPositionEnd`,``],[``,8,`material-symbols-rounded`,3,`iconPositionEnd`,``],[``,8,`material-symbols-sharp`,3,`iconPositionEnd`,``]],`*`,[[``,`iconPositionEnd`,``,8,`material-icons`],[`mat-icon`,`iconPositionEnd`,``],[``,`matButtonIcon`,``,`iconPositionEnd`,``],[``,`iconPositionEnd`,``,8,`material-symbols-outlined`],[``,`iconPositionEnd`,``,8,`material-symbols-rounded`],[``,`iconPositionEnd`,``,8,`material-symbols-sharp`]],[[``,`progressIndicator`,``]]],r=[`.material-icons:not([iconPositionEnd]), mat-icon:not([iconPositionEnd]), [matButtonIcon]:not([iconPositionEnd]), .material-symbols-outlined:not([iconPositionEnd]), .material-symbols-rounded:not([iconPositionEnd]), .material-symbols-sharp:not([iconPositionEnd])`,`*`,`.material-icons[iconPositionEnd], mat-icon[iconPositionEnd], [matButtonIcon][iconPositionEnd], .material-symbols-outlined[iconPositionEnd], .material-symbols-rounded[iconPositionEnd], .material-symbols-sharp[iconPositionEnd]`,`[progressIndicator]`];function i(o,a){o&1&&(Re(0,`div`,2),X(1,3),Oe())}return F({type:t,selectors:[[`button`,`matButton`,``],[`a`,`matButton`,``],[`button`,`mat-button`,``],[`button`,`mat-raised-button`,``],[`button`,`mat-flat-button`,``],[`button`,`mat-stroked-button`,``],[`a`,`mat-button`,``],[`a`,`mat-raised-button`,``],[`a`,`mat-flat-button`,``],[`a`,`mat-stroked-button`,``]],hostAttrs:[1,`mdc-button`],inputs:{appearance:[0,`matButton`,`appearance`]},exportAs:[`matButton`,`matAnchor`],features:[re],ngContentSelectors:r,decls:8,vars:5,consts:[[1,`mat-mdc-button-persistent-ripple`],[1,`mdc-button__label`],[1,`mat-mdc-button-progress-indicator-container`],[1,`mat-focus-indicator`],[1,`mat-mdc-button-touch-target`]],template:function(a,s){a&1&&(Me(e),$t(0,`span`,0),X(1),Re(2,`span`,1),X(3,1),Oe(),X(4,2),le(5,i,2,0,`div`,2),$t(6,`span`,3)(7,`span`,4)),a&2&&(G(`mdc-button__ripple`,!s._isFab)(`mdc-fab__ripple`,s._isFab),y(5),ce(s.showProgress()?5:-1))},styles:[`.mat-mdc-button-base {
  text-decoration: none;
}
.mat-mdc-button-base .mat-icon {
  min-height: fit-content;
  flex-shrink: 0;
}
@media (hover: none) {
  .mat-mdc-button-base:hover > span.mat-mdc-button-persistent-ripple::before {
    opacity: 0;
  }
}

.mdc-button {
  -webkit-user-select: none;
  user-select: none;
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  min-width: 64px;
  border: none;
  outline: none;
  line-height: inherit;
  -webkit-appearance: none;
  overflow: visible;
  vertical-align: middle;
  background: transparent;
  padding: 0 8px;
}
.mdc-button::-moz-focus-inner {
  padding: 0;
  border: 0;
}
.mdc-button:active {
  outline: none;
}
.mdc-button:hover {
  cursor: pointer;
}
.mdc-button:disabled {
  cursor: default;
  pointer-events: none;
}
.mdc-button[hidden] {
  display: none;
}
.mdc-button .mdc-button__label {
  position: relative;
}

.mat-mdc-button {
  padding: 0 var(--%NS%mat-button-text-horizontal-padding, 12px);
  height: var(--%NS%mat-button-text-container-height, 40px);
  font-family: var(--%NS%mat-button-text-label-text-font, var(--%NS%mat-sys-label-large-font));
  font-size: var(--%NS%mat-button-text-label-text-size, var(--%NS%mat-sys-label-large-size));
  letter-spacing: var(--%NS%mat-button-text-label-text-tracking, var(--%NS%mat-sys-label-large-tracking));
  text-transform: var(--%NS%mat-button-text-label-text-transform);
  font-weight: var(--%NS%mat-button-text-label-text-weight, var(--%NS%mat-sys-label-large-weight));
}
.mat-mdc-button, .mat-mdc-button .mdc-button__ripple {
  border-radius: var(--%NS%mat-button-text-container-shape, var(--%NS%mat-sys-corner-full));
}
.mat-mdc-button:not(:disabled) {
  color: var(--%NS%mat-button-text-label-text-color, var(--%NS%mat-sys-primary));
}
.mat-mdc-button[disabled], .mat-mdc-button.mat-mdc-button-disabled {
  cursor: default;
  pointer-events: none;
  color: var(--%NS%mat-button-text-disabled-label-text-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}
.mat-mdc-button.mat-mdc-button-disabled-interactive {
  pointer-events: auto;
}
.mat-mdc-button:has(.material-icons, .material-symbols-outlined, .material-symbols-rounded,
.material-symbols-sharp, mat-icon, [matButtonIcon]) {
  padding: 0 var(--%NS%mat-button-text-with-icon-horizontal-padding, 16px);
}
.mat-mdc-button > .mat-icon {
  margin-right: var(--%NS%mat-button-text-icon-spacing, 8px);
  margin-left: var(--%NS%mat-button-text-icon-offset, -4px);
}
[dir=rtl] .mat-mdc-button > .mat-icon {
  margin-right: var(--%NS%mat-button-text-icon-offset, -4px);
  margin-left: var(--%NS%mat-button-text-icon-spacing, 8px);
}
.mat-mdc-button .mdc-button__label + .mat-icon {
  margin-right: var(--%NS%mat-button-text-icon-offset, -4px);
  margin-left: var(--%NS%mat-button-text-icon-spacing, 8px);
}
[dir=rtl] .mat-mdc-button .mdc-button__label + .mat-icon {
  margin-right: var(--%NS%mat-button-text-icon-spacing, 8px);
  margin-left: var(--%NS%mat-button-text-icon-offset, -4px);
}
.mat-mdc-button .mat-ripple-element {
  background-color: var(--%NS%mat-button-text-ripple-color, color-mix(in srgb, var(--%NS%mat-sys-primary) calc(var(--%NS%mat-sys-pressed-state-layer-opacity) * 100%), transparent));
}
.mat-mdc-button .mat-mdc-button-persistent-ripple::before {
  background-color: var(--%NS%mat-button-text-state-layer-color, var(--%NS%mat-sys-primary));
}
.mat-mdc-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before {
  background-color: var(--%NS%mat-button-text-disabled-state-layer-color, var(--%NS%mat-sys-on-surface-variant));
}
.mat-mdc-button:hover > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--%NS%mat-button-text-hover-state-layer-opacity, var(--%NS%mat-sys-hover-state-layer-opacity));
}
.mat-mdc-button.cdk-program-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-button.cdk-keyboard-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-button.mat-mdc-button-disabled-interactive:focus > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--%NS%mat-button-text-focus-state-layer-opacity, var(--%NS%mat-sys-focus-state-layer-opacity));
}
.mat-mdc-button:active > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--%NS%mat-button-text-pressed-state-layer-opacity, var(--%NS%mat-sys-pressed-state-layer-opacity));
}
.mat-mdc-button .mat-mdc-button-touch-target {
  position: absolute;
  top: 50%;
  height: var(--%NS%mat-button-text-touch-target-size, 48px);
  display: var(--%NS%mat-button-text-touch-target-display, block);
  left: 0;
  right: 0;
  transform: translateY(-50%);
}

.mat-mdc-unelevated-button {
  transition: box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);
  height: var(--%NS%mat-button-filled-container-height, 40px);
  font-family: var(--%NS%mat-button-filled-label-text-font, var(--%NS%mat-sys-label-large-font));
  font-size: var(--%NS%mat-button-filled-label-text-size, var(--%NS%mat-sys-label-large-size));
  letter-spacing: var(--%NS%mat-button-filled-label-text-tracking, var(--%NS%mat-sys-label-large-tracking));
  text-transform: var(--%NS%mat-button-filled-label-text-transform);
  font-weight: var(--%NS%mat-button-filled-label-text-weight, var(--%NS%mat-sys-label-large-weight));
  padding: 0 var(--%NS%mat-button-filled-horizontal-padding, 24px);
}
.mat-mdc-unelevated-button > .mat-icon {
  margin-right: var(--%NS%mat-button-filled-icon-spacing, 8px);
  margin-left: var(--%NS%mat-button-filled-icon-offset, -8px);
}
[dir=rtl] .mat-mdc-unelevated-button > .mat-icon {
  margin-right: var(--%NS%mat-button-filled-icon-offset, -8px);
  margin-left: var(--%NS%mat-button-filled-icon-spacing, 8px);
}
.mat-mdc-unelevated-button .mdc-button__label + .mat-icon {
  margin-right: var(--%NS%mat-button-filled-icon-offset, -8px);
  margin-left: var(--%NS%mat-button-filled-icon-spacing, 8px);
}
[dir=rtl] .mat-mdc-unelevated-button .mdc-button__label + .mat-icon {
  margin-right: var(--%NS%mat-button-filled-icon-spacing, 8px);
  margin-left: var(--%NS%mat-button-filled-icon-offset, -8px);
}
.mat-mdc-unelevated-button .mat-ripple-element {
  background-color: var(--%NS%mat-button-filled-ripple-color, color-mix(in srgb, var(--%NS%mat-sys-on-primary) calc(var(--%NS%mat-sys-pressed-state-layer-opacity) * 100%), transparent));
}
.mat-mdc-unelevated-button .mat-mdc-button-persistent-ripple::before {
  background-color: var(--%NS%mat-button-filled-state-layer-color, var(--%NS%mat-sys-on-primary));
}
.mat-mdc-unelevated-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before {
  background-color: var(--%NS%mat-button-filled-disabled-state-layer-color, var(--%NS%mat-sys-on-surface-variant));
}
.mat-mdc-unelevated-button:hover > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--%NS%mat-button-filled-hover-state-layer-opacity, var(--%NS%mat-sys-hover-state-layer-opacity));
}
.mat-mdc-unelevated-button.cdk-program-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-unelevated-button.cdk-keyboard-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-unelevated-button.mat-mdc-button-disabled-interactive:focus > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--%NS%mat-button-filled-focus-state-layer-opacity, var(--%NS%mat-sys-focus-state-layer-opacity));
}
.mat-mdc-unelevated-button:active > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--%NS%mat-button-filled-pressed-state-layer-opacity, var(--%NS%mat-sys-pressed-state-layer-opacity));
}
.mat-mdc-unelevated-button .mat-mdc-button-touch-target {
  position: absolute;
  top: 50%;
  height: var(--%NS%mat-button-filled-touch-target-size, 48px);
  display: var(--%NS%mat-button-filled-touch-target-display, block);
  left: 0;
  right: 0;
  transform: translateY(-50%);
}
.mat-mdc-unelevated-button:not(:disabled) {
  color: var(--%NS%mat-button-filled-label-text-color, var(--%NS%mat-sys-on-primary));
  background-color: var(--%NS%mat-button-filled-container-color, var(--%NS%mat-sys-primary));
}
.mat-mdc-unelevated-button, .mat-mdc-unelevated-button .mdc-button__ripple {
  border-radius: var(--%NS%mat-button-filled-container-shape, var(--%NS%mat-sys-corner-full));
}
.mat-mdc-unelevated-button .mat-mdc-button-progress-indicator-container {
  --%NS%mat-progress-spinner-active-indicator-color: var(--%NS%mat-button-filled-progress-active-indicator-color, var(--%NS%mat-sys-on-primary));
}
.mat-mdc-unelevated-button[disabled], .mat-mdc-unelevated-button.mat-mdc-button-disabled {
  cursor: default;
  pointer-events: none;
  color: var(--%NS%mat-button-filled-disabled-label-text-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
  background-color: var(--%NS%mat-button-filled-disabled-container-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 12%, transparent));
}
.mat-mdc-unelevated-button.mat-mdc-button-disabled-interactive {
  pointer-events: auto;
}

.mat-mdc-raised-button {
  transition: box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: var(--%NS%mat-button-protected-container-elevation-shadow, var(--%NS%mat-sys-level1));
  height: var(--%NS%mat-button-protected-container-height, 40px);
  font-family: var(--%NS%mat-button-protected-label-text-font, var(--%NS%mat-sys-label-large-font));
  font-size: var(--%NS%mat-button-protected-label-text-size, var(--%NS%mat-sys-label-large-size));
  letter-spacing: var(--%NS%mat-button-protected-label-text-tracking, var(--%NS%mat-sys-label-large-tracking));
  text-transform: var(--%NS%mat-button-protected-label-text-transform);
  font-weight: var(--%NS%mat-button-protected-label-text-weight, var(--%NS%mat-sys-label-large-weight));
  padding: 0 var(--%NS%mat-button-protected-horizontal-padding, 24px);
}
.mat-mdc-raised-button > .mat-icon {
  margin-right: var(--%NS%mat-button-protected-icon-spacing, 8px);
  margin-left: var(--%NS%mat-button-protected-icon-offset, -8px);
}
[dir=rtl] .mat-mdc-raised-button > .mat-icon {
  margin-right: var(--%NS%mat-button-protected-icon-offset, -8px);
  margin-left: var(--%NS%mat-button-protected-icon-spacing, 8px);
}
.mat-mdc-raised-button .mdc-button__label + .mat-icon {
  margin-right: var(--%NS%mat-button-protected-icon-offset, -8px);
  margin-left: var(--%NS%mat-button-protected-icon-spacing, 8px);
}
[dir=rtl] .mat-mdc-raised-button .mdc-button__label + .mat-icon {
  margin-right: var(--%NS%mat-button-protected-icon-spacing, 8px);
  margin-left: var(--%NS%mat-button-protected-icon-offset, -8px);
}
.mat-mdc-raised-button .mat-ripple-element {
  background-color: var(--%NS%mat-button-protected-ripple-color, color-mix(in srgb, var(--%NS%mat-sys-primary) calc(var(--%NS%mat-sys-pressed-state-layer-opacity) * 100%), transparent));
}
.mat-mdc-raised-button .mat-mdc-button-persistent-ripple::before {
  background-color: var(--%NS%mat-button-protected-state-layer-color, var(--%NS%mat-sys-primary));
}
.mat-mdc-raised-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before {
  background-color: var(--%NS%mat-button-protected-disabled-state-layer-color, var(--%NS%mat-sys-on-surface-variant));
}
.mat-mdc-raised-button:hover > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--%NS%mat-button-protected-hover-state-layer-opacity, var(--%NS%mat-sys-hover-state-layer-opacity));
}
.mat-mdc-raised-button.cdk-program-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-raised-button.cdk-keyboard-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-raised-button.mat-mdc-button-disabled-interactive:focus > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--%NS%mat-button-protected-focus-state-layer-opacity, var(--%NS%mat-sys-focus-state-layer-opacity));
}
.mat-mdc-raised-button:active > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--%NS%mat-button-protected-pressed-state-layer-opacity, var(--%NS%mat-sys-pressed-state-layer-opacity));
}
.mat-mdc-raised-button .mat-mdc-button-touch-target {
  position: absolute;
  top: 50%;
  height: var(--%NS%mat-button-protected-touch-target-size, 48px);
  display: var(--%NS%mat-button-protected-touch-target-display, block);
  left: 0;
  right: 0;
  transform: translateY(-50%);
}
.mat-mdc-raised-button:not(:disabled) {
  color: var(--%NS%mat-button-protected-label-text-color, var(--%NS%mat-sys-primary));
  background-color: var(--%NS%mat-button-protected-container-color, var(--%NS%mat-sys-surface));
}
.mat-mdc-raised-button, .mat-mdc-raised-button .mdc-button__ripple {
  border-radius: var(--%NS%mat-button-protected-container-shape, var(--%NS%mat-sys-corner-full));
}
@media (hover: hover) {
  .mat-mdc-raised-button:hover {
    box-shadow: var(--%NS%mat-button-protected-hover-container-elevation-shadow, var(--%NS%mat-sys-level2));
  }
}
.mat-mdc-raised-button:focus {
  box-shadow: var(--%NS%mat-button-protected-focus-container-elevation-shadow, var(--%NS%mat-sys-level1));
}
.mat-mdc-raised-button:active, .mat-mdc-raised-button:focus:active {
  box-shadow: var(--%NS%mat-button-protected-pressed-container-elevation-shadow, var(--%NS%mat-sys-level1));
}
.mat-mdc-raised-button[disabled], .mat-mdc-raised-button.mat-mdc-button-disabled {
  cursor: default;
  pointer-events: none;
  color: var(--%NS%mat-button-protected-disabled-label-text-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
  background-color: var(--%NS%mat-button-protected-disabled-container-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 12%, transparent));
}
.mat-mdc-raised-button[disabled].mat-mdc-button-disabled, .mat-mdc-raised-button.mat-mdc-button-disabled.mat-mdc-button-disabled {
  box-shadow: var(--%NS%mat-button-protected-disabled-container-elevation-shadow, var(--%NS%mat-sys-level0));
}
.mat-mdc-raised-button.mat-mdc-button-disabled-interactive {
  pointer-events: auto;
}

.mat-mdc-outlined-button {
  border-style: solid;
  transition: border 280ms cubic-bezier(0.4, 0, 0.2, 1);
  height: var(--%NS%mat-button-outlined-container-height, 40px);
  font-family: var(--%NS%mat-button-outlined-label-text-font, var(--%NS%mat-sys-label-large-font));
  font-size: var(--%NS%mat-button-outlined-label-text-size, var(--%NS%mat-sys-label-large-size));
  letter-spacing: var(--%NS%mat-button-outlined-label-text-tracking, var(--%NS%mat-sys-label-large-tracking));
  text-transform: var(--%NS%mat-button-outlined-label-text-transform);
  font-weight: var(--%NS%mat-button-outlined-label-text-weight, var(--%NS%mat-sys-label-large-weight));
  border-radius: var(--%NS%mat-button-outlined-container-shape, var(--%NS%mat-sys-corner-full));
  border-width: var(--%NS%mat-button-outlined-outline-width, 1px);
  padding: 0 var(--%NS%mat-button-outlined-horizontal-padding, 24px);
}
.mat-mdc-outlined-button > .mat-icon {
  margin-right: var(--%NS%mat-button-outlined-icon-spacing, 8px);
  margin-left: var(--%NS%mat-button-outlined-icon-offset, -8px);
}
[dir=rtl] .mat-mdc-outlined-button > .mat-icon {
  margin-right: var(--%NS%mat-button-outlined-icon-offset, -8px);
  margin-left: var(--%NS%mat-button-outlined-icon-spacing, 8px);
}
.mat-mdc-outlined-button .mdc-button__label + .mat-icon {
  margin-right: var(--%NS%mat-button-outlined-icon-offset, -8px);
  margin-left: var(--%NS%mat-button-outlined-icon-spacing, 8px);
}
[dir=rtl] .mat-mdc-outlined-button .mdc-button__label + .mat-icon {
  margin-right: var(--%NS%mat-button-outlined-icon-spacing, 8px);
  margin-left: var(--%NS%mat-button-outlined-icon-offset, -8px);
}
.mat-mdc-outlined-button .mat-ripple-element {
  background-color: var(--%NS%mat-button-outlined-ripple-color, color-mix(in srgb, var(--%NS%mat-sys-primary) calc(var(--%NS%mat-sys-pressed-state-layer-opacity) * 100%), transparent));
}
.mat-mdc-outlined-button .mat-mdc-button-persistent-ripple::before {
  background-color: var(--%NS%mat-button-outlined-state-layer-color, var(--%NS%mat-sys-primary));
}
.mat-mdc-outlined-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before {
  background-color: var(--%NS%mat-button-outlined-disabled-state-layer-color, var(--%NS%mat-sys-on-surface-variant));
}
.mat-mdc-outlined-button:hover > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--%NS%mat-button-outlined-hover-state-layer-opacity, var(--%NS%mat-sys-hover-state-layer-opacity));
}
.mat-mdc-outlined-button.cdk-program-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-outlined-button.cdk-keyboard-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-outlined-button.mat-mdc-button-disabled-interactive:focus > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--%NS%mat-button-outlined-focus-state-layer-opacity, var(--%NS%mat-sys-focus-state-layer-opacity));
}
.mat-mdc-outlined-button:active > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--%NS%mat-button-outlined-pressed-state-layer-opacity, var(--%NS%mat-sys-pressed-state-layer-opacity));
}
.mat-mdc-outlined-button .mat-mdc-button-touch-target {
  position: absolute;
  top: 50%;
  height: var(--%NS%mat-button-outlined-touch-target-size, 48px);
  display: var(--%NS%mat-button-outlined-touch-target-display, block);
  left: 0;
  right: 0;
  transform: translateY(-50%);
}
.mat-mdc-outlined-button:not(:disabled) {
  color: var(--%NS%mat-button-outlined-label-text-color, var(--%NS%mat-sys-primary));
  border-color: var(--%NS%mat-button-outlined-outline-color, var(--%NS%mat-sys-outline));
}
.mat-mdc-outlined-button[disabled], .mat-mdc-outlined-button.mat-mdc-button-disabled {
  cursor: default;
  pointer-events: none;
  color: var(--%NS%mat-button-outlined-disabled-label-text-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
  border-color: var(--%NS%mat-button-outlined-disabled-outline-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 12%, transparent));
}
.mat-mdc-outlined-button.mat-mdc-button-disabled-interactive {
  pointer-events: auto;
}

.mat-tonal-button {
  transition: box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);
  height: var(--%NS%mat-button-tonal-container-height, 40px);
  font-family: var(--%NS%mat-button-tonal-label-text-font, var(--%NS%mat-sys-label-large-font));
  font-size: var(--%NS%mat-button-tonal-label-text-size, var(--%NS%mat-sys-label-large-size));
  letter-spacing: var(--%NS%mat-button-tonal-label-text-tracking, var(--%NS%mat-sys-label-large-tracking));
  text-transform: var(--%NS%mat-button-tonal-label-text-transform);
  font-weight: var(--%NS%mat-button-tonal-label-text-weight, var(--%NS%mat-sys-label-large-weight));
  padding: 0 var(--%NS%mat-button-tonal-horizontal-padding, 24px);
}
.mat-tonal-button:not(:disabled) {
  color: var(--%NS%mat-button-tonal-label-text-color, var(--%NS%mat-sys-on-secondary-container));
  background-color: var(--%NS%mat-button-tonal-container-color, var(--%NS%mat-sys-secondary-container));
}
.mat-tonal-button, .mat-tonal-button .mdc-button__ripple {
  border-radius: var(--%NS%mat-button-tonal-container-shape, var(--%NS%mat-sys-corner-full));
}
.mat-tonal-button[disabled], .mat-tonal-button.mat-mdc-button-disabled {
  cursor: default;
  pointer-events: none;
  color: var(--%NS%mat-button-tonal-disabled-label-text-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
  background-color: var(--%NS%mat-button-tonal-disabled-container-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 12%, transparent));
}
.mat-tonal-button.mat-mdc-button-disabled-interactive {
  pointer-events: auto;
}
.mat-tonal-button > .mat-icon {
  margin-right: var(--%NS%mat-button-tonal-icon-spacing, 8px);
  margin-left: var(--%NS%mat-button-tonal-icon-offset, -8px);
}
[dir=rtl] .mat-tonal-button > .mat-icon {
  margin-right: var(--%NS%mat-button-tonal-icon-offset, -8px);
  margin-left: var(--%NS%mat-button-tonal-icon-spacing, 8px);
}
.mat-tonal-button .mdc-button__label + .mat-icon {
  margin-right: var(--%NS%mat-button-tonal-icon-offset, -8px);
  margin-left: var(--%NS%mat-button-tonal-icon-spacing, 8px);
}
[dir=rtl] .mat-tonal-button .mdc-button__label + .mat-icon {
  margin-right: var(--%NS%mat-button-tonal-icon-spacing, 8px);
  margin-left: var(--%NS%mat-button-tonal-icon-offset, -8px);
}
.mat-tonal-button .mat-ripple-element {
  background-color: var(--%NS%mat-button-tonal-ripple-color, color-mix(in srgb, var(--%NS%mat-sys-on-secondary-container) calc(var(--%NS%mat-sys-pressed-state-layer-opacity) * 100%), transparent));
}
.mat-tonal-button .mat-mdc-button-persistent-ripple::before {
  background-color: var(--%NS%mat-button-tonal-state-layer-color, var(--%NS%mat-sys-on-secondary-container));
}
.mat-tonal-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before {
  background-color: var(--%NS%mat-button-tonal-disabled-state-layer-color, var(--%NS%mat-sys-on-surface-variant));
}
.mat-tonal-button:hover > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--%NS%mat-button-tonal-hover-state-layer-opacity, var(--%NS%mat-sys-hover-state-layer-opacity));
}
.mat-tonal-button.cdk-program-focused > .mat-mdc-button-persistent-ripple::before, .mat-tonal-button.cdk-keyboard-focused > .mat-mdc-button-persistent-ripple::before, .mat-tonal-button.mat-mdc-button-disabled-interactive:focus > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--%NS%mat-button-tonal-focus-state-layer-opacity, var(--%NS%mat-sys-focus-state-layer-opacity));
}
.mat-tonal-button:active > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--%NS%mat-button-tonal-pressed-state-layer-opacity, var(--%NS%mat-sys-pressed-state-layer-opacity));
}
.mat-tonal-button .mat-mdc-button-touch-target {
  position: absolute;
  top: 50%;
  height: var(--%NS%mat-button-tonal-touch-target-size, 48px);
  display: var(--%NS%mat-button-tonal-touch-target-display, block);
  left: 0;
  right: 0;
  transform: translateY(-50%);
}

.mat-mdc-button,
.mat-mdc-unelevated-button,
.mat-mdc-raised-button,
.mat-mdc-outlined-button,
.mat-tonal-button {
  -webkit-tap-highlight-color: transparent;
}
.mat-mdc-button .mat-mdc-button-ripple,
.mat-mdc-button .mat-mdc-button-persistent-ripple,
.mat-mdc-button .mat-mdc-button-persistent-ripple::before,
.mat-mdc-unelevated-button .mat-mdc-button-ripple,
.mat-mdc-unelevated-button .mat-mdc-button-persistent-ripple,
.mat-mdc-unelevated-button .mat-mdc-button-persistent-ripple::before,
.mat-mdc-raised-button .mat-mdc-button-ripple,
.mat-mdc-raised-button .mat-mdc-button-persistent-ripple,
.mat-mdc-raised-button .mat-mdc-button-persistent-ripple::before,
.mat-mdc-outlined-button .mat-mdc-button-ripple,
.mat-mdc-outlined-button .mat-mdc-button-persistent-ripple,
.mat-mdc-outlined-button .mat-mdc-button-persistent-ripple::before,
.mat-tonal-button .mat-mdc-button-ripple,
.mat-tonal-button .mat-mdc-button-persistent-ripple,
.mat-tonal-button .mat-mdc-button-persistent-ripple::before {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  pointer-events: none;
  border-radius: inherit;
}
.mat-mdc-button .mat-mdc-button-ripple,
.mat-mdc-unelevated-button .mat-mdc-button-ripple,
.mat-mdc-raised-button .mat-mdc-button-ripple,
.mat-mdc-outlined-button .mat-mdc-button-ripple,
.mat-tonal-button .mat-mdc-button-ripple {
  overflow: hidden;
}
.mat-mdc-button .mat-mdc-button-persistent-ripple::before,
.mat-mdc-unelevated-button .mat-mdc-button-persistent-ripple::before,
.mat-mdc-raised-button .mat-mdc-button-persistent-ripple::before,
.mat-mdc-outlined-button .mat-mdc-button-persistent-ripple::before,
.mat-tonal-button .mat-mdc-button-persistent-ripple::before {
  content: "";
  opacity: 0;
}
.mat-mdc-button .mdc-button__label,
.mat-mdc-button .mat-icon,
.mat-mdc-unelevated-button .mdc-button__label,
.mat-mdc-unelevated-button .mat-icon,
.mat-mdc-raised-button .mdc-button__label,
.mat-mdc-raised-button .mat-icon,
.mat-mdc-outlined-button .mdc-button__label,
.mat-mdc-outlined-button .mat-icon,
.mat-tonal-button .mdc-button__label,
.mat-tonal-button .mat-icon {
  z-index: 1;
  position: relative;
}
.mat-mdc-button .mat-focus-indicator,
.mat-mdc-unelevated-button .mat-focus-indicator,
.mat-mdc-raised-button .mat-focus-indicator,
.mat-mdc-outlined-button .mat-focus-indicator,
.mat-tonal-button .mat-focus-indicator {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  border-radius: inherit;
}
.mat-mdc-button:focus-visible > .mat-focus-indicator::before,
.mat-mdc-unelevated-button:focus-visible > .mat-focus-indicator::before,
.mat-mdc-raised-button:focus-visible > .mat-focus-indicator::before,
.mat-mdc-outlined-button:focus-visible > .mat-focus-indicator::before,
.mat-tonal-button:focus-visible > .mat-focus-indicator::before {
  content: "";
  border-radius: inherit;
}
.mat-mdc-button._mat-animation-noopable,
.mat-mdc-unelevated-button._mat-animation-noopable,
.mat-mdc-raised-button._mat-animation-noopable,
.mat-mdc-outlined-button._mat-animation-noopable,
.mat-tonal-button._mat-animation-noopable {
  transition: none !important;
  animation: none !important;
}
.mat-mdc-button > .mat-icon,
.mat-mdc-unelevated-button > .mat-icon,
.mat-mdc-raised-button > .mat-icon,
.mat-mdc-outlined-button > .mat-icon,
.mat-tonal-button > .mat-icon {
  display: inline-block;
  position: relative;
  vertical-align: top;
  font-size: 1.125rem;
  height: 1.125rem;
  width: 1.125rem;
}

.mat-mdc-outlined-button .mat-mdc-button-ripple,
.mat-mdc-outlined-button .mdc-button__ripple {
  top: -1px;
  left: -1px;
  bottom: -1px;
  right: -1px;
}

.mat-mdc-unelevated-button .mat-focus-indicator::before,
.mat-tonal-button .mat-focus-indicator::before,
.mat-mdc-raised-button .mat-focus-indicator::before {
  margin: calc(calc(var(--%NS%mat-focus-indicator-border-width, 3px) + 2px) * -1);
}

.mat-mdc-outlined-button .mat-focus-indicator::before {
  margin: calc(calc(var(--%NS%mat-focus-indicator-border-width, 3px) + 3px) * -1);
}

.mat-mdc-button-progress-indicator-container {
  position: absolute;
  inset-inline-start: 0;
  inset-block-start: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
}

.mat-mdc-button-progress-indicator-shown mat-icon,
.mat-mdc-button-progress-indicator-shown [matButtonIcon],
.mat-mdc-button-progress-indicator-shown .mdc-button__label {
  visibility: hidden;
}
`,`@media (forced-colors: active) {
  .mat-mdc-button:not(.mdc-button--outlined),
  .mat-mdc-unelevated-button:not(.mdc-button--outlined),
  .mat-mdc-raised-button:not(.mdc-button--outlined),
  .mat-mdc-outlined-button:not(.mdc-button--outlined),
  .mat-mdc-button-base.mat-tonal-button,
  .mat-mdc-icon-button.mat-mdc-icon-button,
  .mat-mdc-outlined-button .mdc-button__ripple {
    outline: solid 1px;
  }
}
`],encapsulation:2})})()}return t})();function mP(t){return t.hasAttribute(`mat-raised-button`)?`elevated`:t.hasAttribute(`mat-stroked-button`)?`outlined`:t.hasAttribute(`mat-flat-button`)?`filled`:t.hasAttribute(`mat-button`)?`text`:null}var ii=(()=>{class t{static ɵfac=function(r){return new(r||t)};static ɵmod=R({type:t});static ɵinj=A({imports:[Za,ve]})}return t})();var jm=(()=>{class t{labelPosition=`after`;static ɵfac=function(r){return new(r||t)};static ɵcmp=(function(){return F({type:t,selectors:[[``,`mat-internal-form-field`,``]],hostAttrs:[1,`mdc-form-field`,`mat-internal-form-field`],hostVars:2,hostBindings:function(i,o){i&2&&G(`mdc-form-field--align-end`,o.labelPosition===`before`)},inputs:{labelPosition:`labelPosition`},ngContentSelectors:[`*`],decls:1,vars:0,template:function(i,o){i&1&&(Me(),X(0))},styles:[`.mat-internal-form-field {
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  display: inline-flex;
  align-items: center;
  vertical-align: middle;
}
.mat-internal-form-field > label, .mat-internal-form-field > .mat-internal-form-field-label {
  margin-left: 0;
  margin-right: auto;
  padding-left: 4px;
  padding-right: 0;
  order: 0;
}
[dir=rtl] .mat-internal-form-field > label, [dir=rtl] .mat-internal-form-field > .mat-internal-form-field-label {
  margin-left: auto;
  margin-right: 0;
  padding-left: 0;
  padding-right: 4px;
}

.mdc-form-field--align-end > label, .mdc-form-field--align-end > .mat-internal-form-field-label {
  margin-left: auto;
  margin-right: 0;
  padding-left: 0;
  padding-right: 4px;
  order: -1;
}
[dir=rtl] .mdc-form-field--align-end .mdc-form-field--align-end label, [dir=rtl] .mdc-form-field--align-end .mdc-form-field--align-end .mat-internal-form-field-label {
  margin-left: 0;
  margin-right: auto;
  padding-left: 4px;
  padding-right: 0;
}
`],encapsulation:2})})()}return t})();var py={color:`accent`,clickAction:`check-indeterminate`,disabledInteractive:!1};var fP=new g(`mat-checkbox-default-options`,{providedIn:`root`,factory:()=>py});var qt=(function(t){return t[t.Init=0]=`Init`,t[t.Checked=1]=`Checked`,t[t.Unchecked=2]=`Unchecked`,t[t.Indeterminate=3]=`Indeterminate`,t})(qt||{});var hy=class{source;checked};var pP=(()=>{class t{_elementRef=u(N);_changeDetectorRef=u(Ce);_ngZone=u(T);_animationsDisabled=ze();_options=u(fP,{optional:!0});focus(){this._inputElement.nativeElement.focus()}_createChangeEvent(e){let r=new hy;return r.source=this,r.checked=e,r}_getAnimationTargetElement(){return this._inputElement?.nativeElement}_animationClasses={uncheckedToChecked:`mdc-checkbox--anim-unchecked-checked`,uncheckedToIndeterminate:`mdc-checkbox--anim-unchecked-indeterminate`,checkedToUnchecked:`mdc-checkbox--anim-checked-unchecked`,checkedToIndeterminate:`mdc-checkbox--anim-checked-indeterminate`,indeterminateToChecked:`mdc-checkbox--anim-indeterminate-checked`,indeterminateToUnchecked:`mdc-checkbox--anim-indeterminate-unchecked`};ariaLabel=``;ariaLabelledby=null;ariaDescribedby;ariaExpanded;ariaControls;ariaOwns;_uniqueId;id;get inputId(){return`${this.id||this._uniqueId}-input`}required=!1;labelPosition=`after`;name=null;change=new k;indeterminateChange=new k;value;disableRipple=!1;_inputElement;tabIndex;color;disabledInteractive;_onTouched=()=>{};_currentAnimationClass=``;_currentCheckState=qt.Init;_controlValueAccessorChangeFn=()=>{};_validatorChangeFn=()=>{};constructor(){u(Ze).load(Rn);let e=u(new Gt(`tabindex`),{optional:!0});this._options=this._options||py,this.color=this._options.color||py.color,this.tabIndex=e==null?0:parseInt(e)||0,this.id=this._uniqueId=u(Fe).getId(`mat-mdc-checkbox-`),this.disabledInteractive=this._options?.disabledInteractive??!1}ngOnChanges(e){e.required&&this._validatorChangeFn()}ngAfterViewInit(){this._syncIndeterminate(this.indeterminate)}get checked(){return this._checked}set checked(e){e!=this.checked&&(this._checked=e,this._changeDetectorRef.markForCheck())}_checked=!1;get disabled(){return this._disabled}set disabled(e){e!==this.disabled&&(this._disabled=e,this._changeDetectorRef.markForCheck())}_disabled=!1;get indeterminate(){return this._indeterminate()}set indeterminate(e){let r=e!=this._indeterminate();this._indeterminate.set(e),r&&(e?this._transitionCheckState(qt.Indeterminate):this._transitionCheckState(this.checked?qt.Checked:qt.Unchecked),this.indeterminateChange.emit(e)),this._syncIndeterminate(e)}_indeterminate=L(!1);_isRippleDisabled(){return this.disableRipple||this.disabled}_onLabelTextChange(){this._changeDetectorRef.detectChanges()}writeValue(e){this.checked=!!e}registerOnChange(e){this._controlValueAccessorChangeFn=e}registerOnTouched(e){this._onTouched=e}setDisabledState(e){this.disabled=e}validate(e){return this.required&&e.value!==!0?{required:!0}:null}registerOnValidatorChange(e){this._validatorChangeFn=e}_transitionCheckState(e){let r=this._currentCheckState,i=this._getAnimationTargetElement();if(!(r===e||!i)&&(this._currentAnimationClass&&i.classList.remove(this._currentAnimationClass),this._currentAnimationClass=this._getAnimationClassForCheckStateTransition(r,e),this._currentCheckState=e,this._currentAnimationClass.length>0)){i.classList.add(this._currentAnimationClass);let o=this._currentAnimationClass;this._ngZone.runOutsideAngular(()=>{setTimeout(()=>{i.classList.remove(o)},1e3)})}}_emitChangeEvent(){this._controlValueAccessorChangeFn(this.checked),this.change.emit(this._createChangeEvent(this.checked)),this._inputElement&&(this._inputElement.nativeElement.checked=this.checked)}toggle(){this.checked=!this.checked,this._controlValueAccessorChangeFn(this.checked)}_handleInputClick(){let e=this._options?.clickAction;!this.disabled&&e!==`noop`?(this.indeterminate&&e!==`check`&&Promise.resolve().then(()=>{this._indeterminate.set(!1),this.indeterminateChange.emit(!1)}),this._checked=!this._checked,this._transitionCheckState(this._checked?qt.Checked:qt.Unchecked),this._emitChangeEvent()):(this.disabled&&this.disabledInteractive||!this.disabled&&e===`noop`)&&(this._inputElement.nativeElement.checked=this.checked,this._inputElement.nativeElement.indeterminate=this.indeterminate)}_onInteractionEvent(e){e.stopPropagation()}_onBlur(){Promise.resolve().then(()=>{this._onTouched(),this._changeDetectorRef.markForCheck()})}_getAnimationClassForCheckStateTransition(e,r){if(this._animationsDisabled)return``;switch(e){case qt.Init:if(r===qt.Checked)return this._animationClasses.uncheckedToChecked;if(r==qt.Indeterminate)return this._checked?this._animationClasses.checkedToIndeterminate:this._animationClasses.uncheckedToIndeterminate;break;case qt.Unchecked:return r===qt.Checked?this._animationClasses.uncheckedToChecked:this._animationClasses.uncheckedToIndeterminate;case qt.Checked:return r===qt.Unchecked?this._animationClasses.checkedToUnchecked:this._animationClasses.checkedToIndeterminate;case qt.Indeterminate:return r===qt.Checked?this._animationClasses.indeterminateToChecked:this._animationClasses.indeterminateToUnchecked}return``}_syncIndeterminate(e){let r=this._inputElement;r&&(r.nativeElement.indeterminate=e)}_onInputClick(){this._handleInputClick()}_preventBubblingFromLabel(e){e.target&&this._inputElement&&e.target!==this._inputElement.nativeElement&&e.stopPropagation()}static ɵfac=function(r){return new(r||t)};static ɵcmp=(function(){let e=[`input`];return F({type:t,selectors:[[`mat-checkbox`]],viewQuery:function(o,a){if(o&1&&qe(e,5),o&2){let s;H(s=U())&&(a._inputElement=s.first)}},hostAttrs:[1,`mat-mdc-checkbox`],hostVars:16,hostBindings:function(o,a){o&2&&(yt(`id`,a.id),Y(`tabindex`,null)(`aria-label`,null)(`aria-labelledby`,null),Ot(a.color?`mat-`+a.color:`mat-accent`),G(`_mat-animation-noopable`,a._animationsDisabled)(`mdc-checkbox--disabled`,a.disabled)(`mat-mdc-checkbox-disabled`,a.disabled)(`mat-mdc-checkbox-checked`,a.checked)(`mat-mdc-checkbox-disabled-interactive`,a.disabledInteractive))},inputs:{ariaLabel:[0,`aria-label`,`ariaLabel`],ariaLabelledby:[0,`aria-labelledby`,`ariaLabelledby`],ariaDescribedby:[0,`aria-describedby`,`ariaDescribedby`],ariaExpanded:[2,`aria-expanded`,`ariaExpanded`,I],ariaControls:[0,`aria-controls`,`ariaControls`],ariaOwns:[0,`aria-owns`,`ariaOwns`],id:`id`,required:[2,`required`,`required`,I],labelPosition:`labelPosition`,name:`name`,value:`value`,disableRipple:[2,`disableRipple`,`disableRipple`,I],tabIndex:[2,`tabIndex`,`tabIndex`,i=>i==null?void 0:Wt(i)],color:`color`,disabledInteractive:[2,`disabledInteractive`,`disabledInteractive`,I],checked:[2,`checked`,`checked`,I],disabled:[2,`disabled`,`disabled`,I],indeterminate:[2,`indeterminate`,`indeterminate`,I]},outputs:{change:`change`,indeterminateChange:`indeterminateChange`},exportAs:[`matCheckbox`],features:[ye([{provide:Jr,useExisting:pt(()=>t),multi:!0},{provide:ei,useExisting:t,multi:!0}]),Se],ngContentSelectors:[`*`],decls:15,vars:23,consts:[[`checkbox`,``],[`input`,``],[`label`,``],[`mat-internal-form-field`,``,3,`click`,`labelPosition`,`for`],[1,`mdc-checkbox`],[`aria-hidden`,`true`,1,`mat-mdc-checkbox-touch-target`],[`type`,`checkbox`,1,`mdc-checkbox__native-control`,3,`blur`,`click`,`change`,`checked`,`indeterminate`,`disabled`,`id`,`required`,`tabIndex`],[`aria-hidden`,`true`,1,`mdc-checkbox__ripple`],[`aria-hidden`,`true`,1,`mdc-checkbox__background`],[`focusable`,`false`,`viewBox`,`0 0 24 24`,1,`mdc-checkbox__checkmark`],[`fill`,`none`,`d`,`M1.73,12.91 8.1,19.28 22.79,4.59`,1,`mdc-checkbox__checkmark-path`],[1,`mdc-checkbox__mixedmark`],[`mat-ripple`,``,`aria-hidden`,`true`,1,`mat-mdc-checkbox-ripple`,`mat-focus-indicator`,3,`matRippleTrigger`,`matRippleDisabled`,`matRippleCentered`],[1,`mat-internal-form-field-label`,`mdc-label`]],template:function(o,a){if(o&1&&(Me(),C(0,`label`,3),Q(`click`,function(l){return a._preventBubblingFromLabel(l)}),C(1,`span`,4,0),we(3,`span`,5),C(4,`input`,6,1),Q(`blur`,function(){return a._onBlur()})(`click`,function(){return a._onInputClick()})(`change`,function(l){return a._onInteractionEvent(l)}),E(),we(6,`span`,7),C(7,`span`,8),Et(),C(8,`svg`,9),we(9,`path`,10),E(),Hr(),we(10,`span`,11),E(),we(11,`span`,12),E(),C(12,`span`,13,2),X(14),E()()),o&2){let s=gr(2);ue(`labelPosition`,a.labelPosition)(`for`,a.inputId),y(4),G(`mdc-checkbox--selected`,a.checked),ue(`checked`,a.checked)(`indeterminate`,a.indeterminate)(`disabled`,a.disabled&&!a.disabledInteractive)(`id`,a.inputId)(`required`,a.required)(`tabIndex`,a.disabled&&!a.disabledInteractive?-1:a.tabIndex),Y(`aria-label`,a.ariaLabel||null)(`aria-labelledby`,a.ariaLabelledby)(`aria-describedby`,a.ariaDescribedby)(`aria-checked`,a.indeterminate?`mixed`:null)(`aria-controls`,a.ariaControls)(`aria-disabled`,a.disabled&&a.disabledInteractive?!0:null)(`aria-expanded`,a.ariaExpanded)(`aria-owns`,a.ariaOwns)(`name`,a.name)(`value`,a.value),y(7),ue(`matRippleTrigger`,s)(`matRippleDisabled`,a.disableRipple||a.disabled)(`matRippleCentered`,!0)}},dependencies:[Ya,jm],styles:[`.mdc-checkbox {
  display: inline-block;
  position: relative;
  flex: 0 0 18px;
  box-sizing: content-box;
  width: 18px;
  height: 18px;
  line-height: 0;
  white-space: nowrap;
  cursor: pointer;
  vertical-align: bottom;
  padding: calc((var(--%NS%mat-checkbox-state-layer-size, 40px) - 18px) / 2);
  margin: calc((var(--%NS%mat-checkbox-state-layer-size, 40px) - var(--%NS%mat-checkbox-state-layer-size, 40px)) / 2);
}
.mdc-checkbox:hover > .mdc-checkbox__ripple {
  opacity: var(--%NS%mat-checkbox-unselected-hover-state-layer-opacity, var(--%NS%mat-sys-hover-state-layer-opacity));
  background-color: var(--%NS%mat-checkbox-unselected-hover-state-layer-color, var(--%NS%mat-sys-on-surface));
}
.mdc-checkbox:hover > .mat-mdc-checkbox-ripple > .mat-ripple-element {
  background-color: var(--%NS%mat-checkbox-unselected-hover-state-layer-color, var(--%NS%mat-sys-on-surface));
}
.mdc-checkbox .mdc-checkbox__native-control:focus + .mdc-checkbox__ripple {
  opacity: var(--%NS%mat-checkbox-unselected-focus-state-layer-opacity, var(--%NS%mat-sys-focus-state-layer-opacity));
  background-color: var(--%NS%mat-checkbox-unselected-focus-state-layer-color, var(--%NS%mat-sys-on-surface));
}
.mdc-checkbox .mdc-checkbox__native-control:focus ~ .mat-mdc-checkbox-ripple .mat-ripple-element {
  background-color: var(--%NS%mat-checkbox-unselected-focus-state-layer-color, var(--%NS%mat-sys-on-surface));
}
.mdc-checkbox:active > .mdc-checkbox__native-control + .mdc-checkbox__ripple {
  opacity: var(--%NS%mat-checkbox-unselected-pressed-state-layer-opacity, var(--%NS%mat-sys-pressed-state-layer-opacity));
  background-color: var(--%NS%mat-checkbox-unselected-pressed-state-layer-color, var(--%NS%mat-sys-primary));
}
.mdc-checkbox:active > .mdc-checkbox__native-control ~ .mat-mdc-checkbox-ripple .mat-ripple-element {
  background-color: var(--%NS%mat-checkbox-unselected-pressed-state-layer-color, var(--%NS%mat-sys-primary));
}
.mdc-checkbox:hover > .mdc-checkbox__native-control:checked + .mdc-checkbox__ripple {
  opacity: var(--%NS%mat-checkbox-selected-hover-state-layer-opacity, var(--%NS%mat-sys-hover-state-layer-opacity));
  background-color: var(--%NS%mat-checkbox-selected-hover-state-layer-color, var(--%NS%mat-sys-primary));
}
.mdc-checkbox:hover > .mdc-checkbox__native-control:checked ~ .mat-mdc-checkbox-ripple .mat-ripple-element {
  background-color: var(--%NS%mat-checkbox-selected-hover-state-layer-color, var(--%NS%mat-sys-primary));
}
.mdc-checkbox .mdc-checkbox__native-control:focus:checked + .mdc-checkbox__ripple {
  opacity: var(--%NS%mat-checkbox-selected-focus-state-layer-opacity, var(--%NS%mat-sys-focus-state-layer-opacity));
  background-color: var(--%NS%mat-checkbox-selected-focus-state-layer-color, var(--%NS%mat-sys-primary));
}
.mdc-checkbox .mdc-checkbox__native-control:focus:checked ~ .mat-mdc-checkbox-ripple .mat-ripple-element {
  background-color: var(--%NS%mat-checkbox-selected-focus-state-layer-color, var(--%NS%mat-sys-primary));
}
.mdc-checkbox:active > .mdc-checkbox__native-control:checked + .mdc-checkbox__ripple {
  opacity: var(--%NS%mat-checkbox-selected-pressed-state-layer-opacity, var(--%NS%mat-sys-pressed-state-layer-opacity));
  background-color: var(--%NS%mat-checkbox-selected-pressed-state-layer-color, var(--%NS%mat-sys-on-surface));
}
.mdc-checkbox:active > .mdc-checkbox__native-control:checked ~ .mat-mdc-checkbox-ripple .mat-ripple-element {
  background-color: var(--%NS%mat-checkbox-selected-pressed-state-layer-color, var(--%NS%mat-sys-on-surface));
}
.mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox .mdc-checkbox__native-control ~ .mat-mdc-checkbox-ripple .mat-ripple-element,
.mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox .mdc-checkbox__native-control + .mdc-checkbox__ripple {
  background-color: var(--%NS%mat-checkbox-unselected-hover-state-layer-color, var(--%NS%mat-sys-on-surface));
}
.mdc-checkbox .mdc-checkbox__native-control {
  position: absolute;
  margin: 0;
  padding: 0;
  opacity: 0;
  cursor: inherit;
  z-index: 1;
  width: var(--%NS%mat-checkbox-state-layer-size, 40px);
  height: var(--%NS%mat-checkbox-state-layer-size, 40px);
  top: calc((var(--%NS%mat-checkbox-state-layer-size, 40px) - var(--%NS%mat-checkbox-state-layer-size, 40px)) / 2);
  right: calc((var(--%NS%mat-checkbox-state-layer-size, 40px) - var(--%NS%mat-checkbox-state-layer-size, 40px)) / 2);
  left: calc((var(--%NS%mat-checkbox-state-layer-size, 40px) - var(--%NS%mat-checkbox-state-layer-size, 40px)) / 2);
}

.mdc-checkbox--disabled {
  cursor: default;
  pointer-events: none;
}

.mdc-checkbox__background {
  display: inline-flex;
  position: absolute;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  width: 18px;
  height: 18px;
  border: 2px solid currentColor;
  border-radius: 2px;
  background-color: transparent;
  pointer-events: none;
  will-change: background-color, border-color;
  transition: background-color 90ms cubic-bezier(0.4, 0, 0.6, 1), border-color 90ms cubic-bezier(0.4, 0, 0.6, 1);
  -webkit-print-color-adjust: exact;
  color-adjust: exact;
  border-color: var(--%NS%mat-checkbox-unselected-icon-color, var(--%NS%mat-sys-on-surface-variant));
  top: calc((var(--%NS%mat-checkbox-state-layer-size, 40px) - 18px) / 2);
  left: calc((var(--%NS%mat-checkbox-state-layer-size, 40px) - 18px) / 2);
}

.mdc-checkbox__native-control:enabled:checked ~ .mdc-checkbox__background,
.mdc-checkbox__native-control:enabled:indeterminate ~ .mdc-checkbox__background {
  border-color: var(--%NS%mat-checkbox-selected-icon-color, var(--%NS%mat-sys-primary));
  background-color: var(--%NS%mat-checkbox-selected-icon-color, var(--%NS%mat-sys-primary));
}

.mdc-checkbox--disabled .mdc-checkbox__background {
  border-color: var(--%NS%mat-checkbox-disabled-unselected-icon-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}
@media (forced-colors: active) {
  .mdc-checkbox--disabled .mdc-checkbox__background {
    border-color: GrayText;
  }
}

.mdc-checkbox__native-control:disabled:checked ~ .mdc-checkbox__background,
.mdc-checkbox__native-control:disabled:indeterminate ~ .mdc-checkbox__background {
  background-color: var(--%NS%mat-checkbox-disabled-selected-icon-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
  border-color: transparent;
}
@media (forced-colors: active) {
  .mdc-checkbox__native-control:disabled:checked ~ .mdc-checkbox__background,
  .mdc-checkbox__native-control:disabled:indeterminate ~ .mdc-checkbox__background {
    border-color: GrayText;
  }
}

.mdc-checkbox:hover > .mdc-checkbox__native-control:not(:checked) ~ .mdc-checkbox__background,
.mdc-checkbox:hover > .mdc-checkbox__native-control:not(:indeterminate) ~ .mdc-checkbox__background {
  border-color: var(--%NS%mat-checkbox-unselected-hover-icon-color, var(--%NS%mat-sys-on-surface));
  background-color: transparent;
}

.mdc-checkbox:hover > .mdc-checkbox__native-control:checked ~ .mdc-checkbox__background,
.mdc-checkbox:hover > .mdc-checkbox__native-control:indeterminate ~ .mdc-checkbox__background {
  border-color: var(--%NS%mat-checkbox-selected-hover-icon-color, var(--%NS%mat-sys-primary));
  background-color: var(--%NS%mat-checkbox-selected-hover-icon-color, var(--%NS%mat-sys-primary));
}

.mdc-checkbox__native-control:focus:focus:not(:checked) ~ .mdc-checkbox__background,
.mdc-checkbox__native-control:focus:focus:not(:indeterminate) ~ .mdc-checkbox__background {
  border-color: var(--%NS%mat-checkbox-unselected-focus-icon-color, var(--%NS%mat-sys-on-surface));
}

.mdc-checkbox__native-control:focus:focus:checked ~ .mdc-checkbox__background,
.mdc-checkbox__native-control:focus:focus:indeterminate ~ .mdc-checkbox__background {
  border-color: var(--%NS%mat-checkbox-selected-focus-icon-color, var(--%NS%mat-sys-primary));
  background-color: var(--%NS%mat-checkbox-selected-focus-icon-color, var(--%NS%mat-sys-primary));
}

.mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox:hover > .mdc-checkbox__native-control ~ .mdc-checkbox__background,
.mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox .mdc-checkbox__native-control:focus ~ .mdc-checkbox__background,
.mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox__background {
  border-color: var(--%NS%mat-checkbox-disabled-unselected-icon-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}
@media (forced-colors: active) {
  .mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox:hover > .mdc-checkbox__native-control ~ .mdc-checkbox__background,
  .mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox .mdc-checkbox__native-control:focus ~ .mdc-checkbox__background,
  .mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox__background {
    border-color: GrayText;
  }
}
.mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox__native-control:checked ~ .mdc-checkbox__background,
.mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox__native-control:indeterminate ~ .mdc-checkbox__background {
  background-color: var(--%NS%mat-checkbox-disabled-selected-icon-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
  border-color: transparent;
}

.mdc-checkbox__checkmark {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  opacity: 0;
  transition: opacity 180ms cubic-bezier(0.4, 0, 0.6, 1);
  color: var(--%NS%mat-checkbox-selected-checkmark-color, var(--%NS%mat-sys-on-primary));
}
@media (forced-colors: active) {
  .mdc-checkbox__checkmark {
    color: CanvasText;
  }
}

.mdc-checkbox--disabled .mdc-checkbox__checkmark, .mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox__checkmark {
  color: var(--%NS%mat-checkbox-disabled-selected-checkmark-color, var(--%NS%mat-sys-surface));
}
@media (forced-colors: active) {
  .mdc-checkbox--disabled .mdc-checkbox__checkmark, .mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox__checkmark {
    color: GrayText;
  }
}

.mdc-checkbox__checkmark-path {
  transition: stroke-dashoffset 180ms cubic-bezier(0.4, 0, 0.6, 1);
  stroke: currentColor;
  stroke-width: 3.12px;
  stroke-dashoffset: 29.7833385;
  stroke-dasharray: 29.7833385;
}

.mdc-checkbox__mixedmark {
  width: 100%;
  height: 0;
  transform: scaleX(0) rotate(0deg);
  border-width: 1px;
  border-style: solid;
  opacity: 0;
  transition: opacity 90ms cubic-bezier(0.4, 0, 0.6, 1), transform 90ms cubic-bezier(0.4, 0, 0.6, 1);
  border-color: var(--%NS%mat-checkbox-selected-checkmark-color, var(--%NS%mat-sys-on-primary));
}
@media (forced-colors: active) {
  .mdc-checkbox__mixedmark {
    margin: 0 1px;
  }
}

.mdc-checkbox--disabled .mdc-checkbox__mixedmark, .mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox__mixedmark {
  border-color: var(--%NS%mat-checkbox-disabled-selected-checkmark-color, var(--%NS%mat-sys-surface));
}
@media (forced-colors: active) {
  .mdc-checkbox--disabled .mdc-checkbox__mixedmark, .mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox__mixedmark {
    border-color: GrayText;
  }
}

.mdc-checkbox--anim-unchecked-checked .mdc-checkbox__background,
.mdc-checkbox--anim-unchecked-indeterminate .mdc-checkbox__background,
.mdc-checkbox--anim-checked-unchecked .mdc-checkbox__background,
.mdc-checkbox--anim-indeterminate-unchecked .mdc-checkbox__background {
  animation-duration: 180ms;
  animation-timing-function: linear;
}

.mdc-checkbox--anim-unchecked-checked .mdc-checkbox__checkmark-path {
  animation: mdc-checkbox-unchecked-checked-checkmark-path 180ms linear;
  transition: none;
}

.mdc-checkbox--anim-unchecked-indeterminate .mdc-checkbox__mixedmark {
  animation: mdc-checkbox-unchecked-indeterminate-mixedmark 90ms linear;
  transition: none;
}

.mdc-checkbox--anim-checked-unchecked .mdc-checkbox__checkmark-path {
  animation: mdc-checkbox-checked-unchecked-checkmark-path 90ms linear;
  transition: none;
}

.mdc-checkbox--anim-checked-indeterminate .mdc-checkbox__checkmark {
  animation: mdc-checkbox-checked-indeterminate-checkmark 90ms linear;
  transition: none;
}
.mdc-checkbox--anim-checked-indeterminate .mdc-checkbox__mixedmark {
  animation: mdc-checkbox-checked-indeterminate-mixedmark 90ms linear;
  transition: none;
}

.mdc-checkbox--anim-indeterminate-checked .mdc-checkbox__checkmark {
  animation: mdc-checkbox-indeterminate-checked-checkmark 500ms linear;
  transition: none;
}
.mdc-checkbox--anim-indeterminate-checked .mdc-checkbox__mixedmark {
  animation: mdc-checkbox-indeterminate-checked-mixedmark 500ms linear;
  transition: none;
}

.mdc-checkbox--anim-indeterminate-unchecked .mdc-checkbox__mixedmark {
  animation: mdc-checkbox-indeterminate-unchecked-mixedmark 300ms linear;
  transition: none;
}

.mdc-checkbox__native-control:checked ~ .mdc-checkbox__background,
.mdc-checkbox__native-control:indeterminate ~ .mdc-checkbox__background {
  transition: border-color 90ms cubic-bezier(0, 0, 0.2, 1), background-color 90ms cubic-bezier(0, 0, 0.2, 1);
}
.mdc-checkbox__native-control:checked ~ .mdc-checkbox__background > .mdc-checkbox__checkmark > .mdc-checkbox__checkmark-path,
.mdc-checkbox__native-control:indeterminate ~ .mdc-checkbox__background > .mdc-checkbox__checkmark > .mdc-checkbox__checkmark-path {
  stroke-dashoffset: 0;
}

.mdc-checkbox__native-control:checked ~ .mdc-checkbox__background > .mdc-checkbox__checkmark {
  transition: opacity 180ms cubic-bezier(0, 0, 0.2, 1), transform 180ms cubic-bezier(0, 0, 0.2, 1);
  opacity: 1;
}
.mdc-checkbox__native-control:checked ~ .mdc-checkbox__background > .mdc-checkbox__mixedmark {
  transform: scaleX(1) rotate(-45deg);
}

.mdc-checkbox__native-control:indeterminate ~ .mdc-checkbox__background > .mdc-checkbox__checkmark {
  transform: rotate(45deg);
  opacity: 0;
  transition: opacity 90ms cubic-bezier(0.4, 0, 0.6, 1), transform 90ms cubic-bezier(0.4, 0, 0.6, 1);
}
.mdc-checkbox__native-control:indeterminate ~ .mdc-checkbox__background > .mdc-checkbox__mixedmark {
  transform: scaleX(1) rotate(0deg);
  opacity: 1;
}

@keyframes mdc-checkbox-unchecked-checked-checkmark-path {
  0%, 50% {
    stroke-dashoffset: 29.7833385;
  }
  50% {
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  100% {
    stroke-dashoffset: 0;
  }
}
@keyframes mdc-checkbox-unchecked-indeterminate-mixedmark {
  0%, 68.2% {
    transform: scaleX(0);
  }
  68.2% {
    animation-timing-function: cubic-bezier(0, 0, 0, 1);
  }
  100% {
    transform: scaleX(1);
  }
}
@keyframes mdc-checkbox-checked-unchecked-checkmark-path {
  from {
    animation-timing-function: cubic-bezier(0.4, 0, 1, 1);
    opacity: 1;
    stroke-dashoffset: 0;
  }
  to {
    opacity: 0;
    stroke-dashoffset: -29.7833385;
  }
}
@keyframes mdc-checkbox-checked-indeterminate-checkmark {
  from {
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
    transform: rotate(0deg);
    opacity: 1;
  }
  to {
    transform: rotate(45deg);
    opacity: 0;
  }
}
@keyframes mdc-checkbox-indeterminate-checked-checkmark {
  from {
    animation-timing-function: cubic-bezier(0.14, 0, 0, 1);
    transform: rotate(45deg);
    opacity: 0;
  }
  to {
    transform: rotate(360deg);
    opacity: 1;
  }
}
@keyframes mdc-checkbox-checked-indeterminate-mixedmark {
  from {
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
    transform: rotate(-45deg);
    opacity: 0;
  }
  to {
    transform: rotate(0deg);
    opacity: 1;
  }
}
@keyframes mdc-checkbox-indeterminate-checked-mixedmark {
  from {
    animation-timing-function: cubic-bezier(0.14, 0, 0, 1);
    transform: rotate(0deg);
    opacity: 1;
  }
  to {
    transform: rotate(315deg);
    opacity: 0;
  }
}
@keyframes mdc-checkbox-indeterminate-unchecked-mixedmark {
  0% {
    animation-timing-function: linear;
    transform: scaleX(1);
    opacity: 1;
  }
  32.8%, 100% {
    transform: scaleX(0);
    opacity: 0;
  }
}
.mat-mdc-checkbox {
  display: inline-block;
  position: relative;
  -webkit-tap-highlight-color: transparent;
}
.mat-mdc-checkbox._mat-animation-noopable > .mat-internal-form-field > .mdc-checkbox > .mat-mdc-checkbox-touch-target,
.mat-mdc-checkbox._mat-animation-noopable > .mat-internal-form-field > .mdc-checkbox > .mdc-checkbox__native-control,
.mat-mdc-checkbox._mat-animation-noopable > .mat-internal-form-field > .mdc-checkbox > .mdc-checkbox__ripple,
.mat-mdc-checkbox._mat-animation-noopable > .mat-internal-form-field > .mdc-checkbox > .mat-mdc-checkbox-ripple::before,
.mat-mdc-checkbox._mat-animation-noopable > .mat-internal-form-field > .mdc-checkbox > .mdc-checkbox__background,
.mat-mdc-checkbox._mat-animation-noopable > .mat-internal-form-field > .mdc-checkbox > .mdc-checkbox__background > .mdc-checkbox__checkmark,
.mat-mdc-checkbox._mat-animation-noopable > .mat-internal-form-field > .mdc-checkbox > .mdc-checkbox__background > .mdc-checkbox__checkmark > .mdc-checkbox__checkmark-path,
.mat-mdc-checkbox._mat-animation-noopable > .mat-internal-form-field > .mdc-checkbox > .mdc-checkbox__background > .mdc-checkbox__mixedmark {
  transition: none !important;
  animation: none !important;
}
.mat-mdc-checkbox label {
  cursor: pointer;
}
.mat-mdc-checkbox .mat-internal-form-field {
  color: var(--%NS%mat-checkbox-label-text-color, var(--%NS%mat-sys-on-surface));
  font-family: var(--%NS%mat-checkbox-label-text-font, var(--%NS%mat-sys-body-medium-font));
  line-height: var(--%NS%mat-checkbox-label-text-line-height, var(--%NS%mat-sys-body-medium-line-height));
  font-size: var(--%NS%mat-checkbox-label-text-size, var(--%NS%mat-sys-body-medium-size));
  letter-spacing: var(--%NS%mat-checkbox-label-text-tracking, var(--%NS%mat-sys-body-medium-tracking));
  font-weight: var(--%NS%mat-checkbox-label-text-weight, var(--%NS%mat-sys-body-medium-weight));
}
.mat-mdc-checkbox.mat-mdc-checkbox-disabled.mat-mdc-checkbox-disabled-interactive {
  pointer-events: auto;
}
.mat-mdc-checkbox.mat-mdc-checkbox-disabled.mat-mdc-checkbox-disabled-interactive input {
  cursor: default;
}
.mat-mdc-checkbox.mat-mdc-checkbox-disabled label {
  cursor: default;
}
.mat-mdc-checkbox.mat-mdc-checkbox-disabled .mat-internal-form-field-label {
  color: var(--%NS%mat-checkbox-disabled-label-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}
@media (forced-colors: active) {
  .mat-mdc-checkbox.mat-mdc-checkbox-disabled .mat-internal-form-field-label {
    color: GrayText;
  }
}
.mat-mdc-checkbox .mat-internal-form-field-label:empty {
  display: none;
}
.mat-mdc-checkbox .mdc-checkbox__ripple {
  opacity: 0;
}

.mat-mdc-checkbox .mat-mdc-checkbox-ripple,
.mdc-checkbox__ripple {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  border-radius: 50%;
  pointer-events: none;
}
.mat-mdc-checkbox .mat-mdc-checkbox-ripple:not(:empty),
.mdc-checkbox__ripple:not(:empty) {
  transform: translateZ(0);
}

.mat-mdc-checkbox-ripple .mat-ripple-element {
  opacity: 0.1;
}

.mat-mdc-checkbox-touch-target {
  position: absolute;
  top: 50%;
  left: 50%;
  height: var(--%NS%mat-checkbox-touch-target-size, 48px);
  width: var(--%NS%mat-checkbox-touch-target-size, 48px);
  transform: translate(-50%, -50%);
  display: var(--%NS%mat-checkbox-touch-target-display, block);
}

.mat-mdc-checkbox .mat-mdc-checkbox-ripple::before {
  border-radius: 50%;
}

.mdc-checkbox__native-control:focus-visible ~ .mat-focus-indicator::before {
  content: "";
}
`],encapsulation:2})})()}return t})();var gy=(()=>{class t{static ɵfac=function(r){return new(r||t)};static ɵmod=R({type:t});static ɵinj=A({imports:[pP,ve]})}return t})();var by=new g(`MAT_DATE_LOCALE`,{providedIn:`root`,factory:()=>u(Ra)});var Qa=`Method not implemented`;var Yt=class{locale;_localeChanges=new _;localeChanges=this._localeChanges;setTime(n,e,r,i){throw new Error(Qa)}getHours(n){throw new Error(Qa)}getMinutes(n){throw new Error(Qa)}getSeconds(n){throw new Error(Qa)}parseTime(n,e){throw new Error(Qa)}addSeconds(n,e){throw new Error(Qa)}getValidDateOrNull(n){return this.isDateInstance(n)&&this.isValid(n)?n:null}deserialize(n){return n==null||this.isDateInstance(n)&&this.isValid(n)?n:this.invalid()}setLocale(n){this.locale=n,this._localeChanges.next()}compareDate(n,e){return this.getYear(n)-this.getYear(e)||this.getMonth(n)-this.getMonth(e)||this.getDate(n)-this.getDate(e)}compareTime(n,e){return this.getHours(n)-this.getHours(e)||this.getMinutes(n)-this.getMinutes(e)||this.getSeconds(n)-this.getSeconds(e)}sameDate(n,e){if(n&&e){let r=this.isValid(n),i=this.isValid(e);return r&&i?!this.compareDate(n,e):r==i}return n==e}sameTime(n,e){if(n&&e){let r=this.isValid(n),i=this.isValid(e);return r&&i?!this.compareTime(n,e):r==i}return n==e}clampDate(n,e,r){return e&&this.compareDate(n,e)<0?e:r&&this.compareDate(n,r)>0?r:n}};var Fi=new g(`mat-date-formats`);var zm=(()=>{class t{isErrorState(e,r){return!!(e&&e.invalid&&(e.touched||r&&r.submitted))}isSignalErrorState(e){if(!e)return!1;let r=e().invalid(),i=e().touched();return r&&i}static ɵfac=function(r){return new(r||t)};static ɵprov=S({token:t,factory:t.ɵfac})}return t})();var QS=(()=>{class t{_animationsDisabled=ze();state=`unchecked`;disabled=!1;appearance=`full`;static ɵfac=function(r){return new(r||t)};static ɵcmp=F({type:t,selectors:[[`mat-pseudo-checkbox`]],hostAttrs:[1,`mat-pseudo-checkbox`],hostVars:12,hostBindings:function(r,i){r&2&&G(`mat-pseudo-checkbox-indeterminate`,i.state===`indeterminate`)(`mat-pseudo-checkbox-checked`,i.state===`checked`)(`mat-pseudo-checkbox-disabled`,i.disabled)(`mat-pseudo-checkbox-minimal`,i.appearance===`minimal`)(`mat-pseudo-checkbox-full`,i.appearance===`full`)(`_mat-animation-noopable`,i._animationsDisabled)},inputs:{state:`state`,disabled:`disabled`,appearance:`appearance`},decls:0,vars:0,template:function(r,i){},styles:[`.mat-pseudo-checkbox {
  border-radius: 2px;
  cursor: pointer;
  display: inline-block;
  vertical-align: middle;
  box-sizing: border-box;
  position: relative;
  flex-shrink: 0;
  transition: border-color 90ms cubic-bezier(0, 0, 0.2, 0.1), background-color 90ms cubic-bezier(0, 0, 0.2, 0.1);
}
.mat-pseudo-checkbox::after {
  position: absolute;
  opacity: 0;
  content: "";
  border-bottom: 2px solid currentColor;
  transition: opacity 90ms cubic-bezier(0, 0, 0.2, 0.1);
}
.mat-pseudo-checkbox._mat-animation-noopable {
  transition: none !important;
  animation: none !important;
}
.mat-pseudo-checkbox._mat-animation-noopable::after {
  transition: none;
}

.mat-pseudo-checkbox-disabled {
  cursor: default;
}

.mat-pseudo-checkbox-indeterminate::after {
  left: 1px;
  opacity: 1;
  border-radius: 2px;
}

.mat-pseudo-checkbox-checked::after {
  left: 1px;
  border-left: 2px solid currentColor;
  transform: rotate(-45deg);
  opacity: 1;
  box-sizing: content-box;
}

.mat-pseudo-checkbox-minimal.mat-pseudo-checkbox-checked::after, .mat-pseudo-checkbox-minimal.mat-pseudo-checkbox-indeterminate::after {
  color: var(--%NS%mat-pseudo-checkbox-minimal-selected-checkmark-color, var(--%NS%mat-sys-primary));
}
.mat-pseudo-checkbox-minimal.mat-pseudo-checkbox-checked.mat-pseudo-checkbox-disabled::after, .mat-pseudo-checkbox-minimal.mat-pseudo-checkbox-indeterminate.mat-pseudo-checkbox-disabled::after {
  color: var(--%NS%mat-pseudo-checkbox-minimal-disabled-selected-checkmark-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}

.mat-pseudo-checkbox-full {
  border-color: var(--%NS%mat-pseudo-checkbox-full-unselected-icon-color, var(--%NS%mat-sys-on-surface-variant));
  border-width: 2px;
  border-style: solid;
}
.mat-pseudo-checkbox-full.mat-pseudo-checkbox-disabled {
  border-color: var(--%NS%mat-pseudo-checkbox-full-disabled-unselected-icon-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}
.mat-pseudo-checkbox-full.mat-pseudo-checkbox-checked, .mat-pseudo-checkbox-full.mat-pseudo-checkbox-indeterminate {
  background-color: var(--%NS%mat-pseudo-checkbox-full-selected-icon-color, var(--%NS%mat-sys-primary));
  border-color: transparent;
}
.mat-pseudo-checkbox-full.mat-pseudo-checkbox-checked::after, .mat-pseudo-checkbox-full.mat-pseudo-checkbox-indeterminate::after {
  color: var(--%NS%mat-pseudo-checkbox-full-selected-checkmark-color, var(--%NS%mat-sys-on-primary));
}
.mat-pseudo-checkbox-full.mat-pseudo-checkbox-checked.mat-pseudo-checkbox-disabled, .mat-pseudo-checkbox-full.mat-pseudo-checkbox-indeterminate.mat-pseudo-checkbox-disabled {
  background-color: var(--%NS%mat-pseudo-checkbox-full-disabled-selected-icon-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}
.mat-pseudo-checkbox-full.mat-pseudo-checkbox-checked.mat-pseudo-checkbox-disabled::after, .mat-pseudo-checkbox-full.mat-pseudo-checkbox-indeterminate.mat-pseudo-checkbox-disabled::after {
  color: var(--%NS%mat-pseudo-checkbox-full-disabled-selected-checkmark-color, var(--%NS%mat-sys-surface));
}

.mat-pseudo-checkbox {
  width: 18px;
  height: 18px;
}

.mat-pseudo-checkbox-minimal.mat-pseudo-checkbox-checked::after {
  width: 14px;
  height: 6px;
  transform-origin: center;
  top: -4.2426406871px;
  left: 0;
  bottom: 0;
  right: 0;
  margin: auto;
}
.mat-pseudo-checkbox-minimal.mat-pseudo-checkbox-indeterminate::after {
  top: 8px;
  width: 16px;
}

.mat-pseudo-checkbox-full.mat-pseudo-checkbox-checked::after {
  width: 10px;
  height: 4px;
  transform-origin: center;
  top: -2.8284271247px;
  left: 0;
  bottom: 0;
  right: 0;
  margin: auto;
}
.mat-pseudo-checkbox-full.mat-pseudo-checkbox-indeterminate::after {
  top: 6px;
  width: 12px;
}
`],encapsulation:2})}return t})();var vy=new g(`MAT_OPTION_PARENT_COMPONENT`);var _y=new g(`MatOptgroup`);var yy=class{source;isUserInput;constructor(n,e=!1){this.source=n,this.isUserInput=e}};var Xa=(()=>{class t{_element=u(N);_changeDetectorRef=u(Ce);_parent=u(vy,{optional:!0});group=u(_y,{optional:!0});_signalDisableRipple=!1;_selected=!1;_active=!1;_mostRecentViewValue=``;get multiple(){return this._parent&&this._parent.multiple}get selected(){return this._selected}value;id=u(Fe).getId(`mat-option-`);get disabled(){return this.group&&this.group.disabled||this._disabled()}set disabled(e){this._disabled.set(e)}_disabled=L(!1);get disableRipple(){return this._signalDisableRipple?this._parent.disableRipple():!!this._parent?.disableRipple}get hideSingleSelectionIndicator(){return!!(this._parent&&this._parent.hideSingleSelectionIndicator)}onSelectionChange=new k;_text;_stateChanges=new _;constructor(){let e=u(Ze);e.load(Rn),e.load(xr),this._signalDisableRipple=!!this._parent&&Ht(this._parent.disableRipple)}get active(){return this._active}get viewValue(){return(this._text?.nativeElement.textContent||``).trim()}select(e=!0){this._selected||(this._selected=!0,this._changeDetectorRef.markForCheck(),e&&this._emitSelectionChangeEvent())}deselect(e=!0){this._selected&&(this._selected=!1,this._changeDetectorRef.markForCheck(),e&&this._emitSelectionChangeEvent())}focus(e,r){let i=this._getHostElement();typeof i.focus==`function`&&i.focus(r)}setActiveStyles(){this._active||(this._active=!0,this._changeDetectorRef.markForCheck())}setInactiveStyles(){this._active&&(this._active=!1,this._changeDetectorRef.markForCheck())}getLabel(){return this.viewValue}_handleKeydown(e){(e.keyCode===13||e.keyCode===32)&&!tt(e)&&(this._selectViaInteraction(),e.preventDefault())}_selectViaInteraction(){this.disabled||(this._selected=this.multiple?!this._selected:!0,this._changeDetectorRef.markForCheck(),this._emitSelectionChangeEvent(!0))}_getTabIndex(){return this.disabled?`-1`:`0`}_getHostElement(){return this._element.nativeElement}ngAfterViewChecked(){if(this._selected){let e=this.viewValue;e!==this._mostRecentViewValue&&(this._mostRecentViewValue&&this._stateChanges.next(),this._mostRecentViewValue=e)}}ngOnDestroy(){this._stateChanges.complete()}_emitSelectionChangeEvent(e=!1){this.onSelectionChange.emit(new yy(this,e))}static ɵfac=function(r){return new(r||t)};static ɵcmp=(function(){let e=[`text`],r=[[[`mat-icon`]],`*`],i=[`mat-icon`,`*`];function o(l,c){if(l&1&&we(0,`mat-pseudo-checkbox`,1),l&2){let d=J();ue(`disabled`,d.disabled)(`state`,d.selected?`checked`:`unchecked`)}}function a(l,c){if(l&1&&we(0,`mat-pseudo-checkbox`,3),l&2)ue(`disabled`,J().disabled)}function s(l,c){if(l&1&&(C(0,`span`,4),Ne(1),E()),l&2){let d=J();y(),vt(`(`,d.group.label,`)`)}}return F({type:t,selectors:[[`mat-option`]],viewQuery:function(c,d){if(c&1&&qe(e,7),c&2){let m;H(m=U())&&(d._text=m.first)}},hostAttrs:[`role`,`option`,1,`mat-mdc-option`,`mdc-list-item`],hostVars:11,hostBindings:function(c,d){c&1&&Q(`click`,function(){return d._selectViaInteraction()})(`keydown`,function(p){return d._handleKeydown(p)}),c&2&&(yt(`id`,d.id),Y(`aria-selected`,d.selected)(`aria-disabled`,d.disabled.toString()),G(`mdc-list-item--selected`,d.selected)(`mat-mdc-option-multiple`,d.multiple)(`mat-mdc-option-active`,d.active)(`mdc-list-item--disabled`,d.disabled))},inputs:{value:`value`,id:`id`,disabled:[2,`disabled`,`disabled`,I]},outputs:{onSelectionChange:`onSelectionChange`},exportAs:[`matOption`],ngContentSelectors:i,decls:8,vars:5,consts:[[`text`,``],[`aria-hidden`,`true`,1,`mat-mdc-option-pseudo-checkbox`,3,`disabled`,`state`],[1,`mdc-list-item__primary-text`],[`state`,`checked`,`aria-hidden`,`true`,`appearance`,`minimal`,1,`mat-mdc-option-pseudo-checkbox`,3,`disabled`],[1,`cdk-visually-hidden`],[`aria-hidden`,`true`,`mat-ripple`,``,1,`mat-mdc-option-ripple`,`mat-focus-indicator`,3,`matRippleTrigger`,`matRippleDisabled`]],template:function(c,d){c&1&&(Me(r),le(0,o,1,2,`mat-pseudo-checkbox`,1),X(1),C(2,`span`,2,0),X(4,1),E(),le(5,a,1,1,`mat-pseudo-checkbox`,3),le(6,s,2,1,`span`,4),we(7,`div`,5)),c&2&&(ce(d.multiple?0:-1),y(5),ce(!d.multiple&&d.selected&&!d.hideSingleSelectionIndicator?5:-1),y(),ce(d.group&&d.group._inert?6:-1),y(),ue(`matRippleTrigger`,d._getHostElement())(`matRippleDisabled`,d.disabled||d.disableRipple))},dependencies:[QS,Ya],styles:[`.mat-mdc-option {
  -webkit-user-select: none;
  user-select: none;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  display: flex;
  position: relative;
  align-items: center;
  justify-content: flex-start;
  overflow: hidden;
  min-height: 48px;
  padding: 0 16px;
  cursor: pointer;
  -webkit-tap-highlight-color: transparent;
  color: var(--%NS%mat-option-label-text-color, var(--%NS%mat-sys-on-surface));
  font-family: var(--%NS%mat-option-label-text-font, var(--%NS%mat-sys-label-large-font));
  line-height: var(--%NS%mat-option-label-text-line-height, var(--%NS%mat-sys-label-large-line-height));
  font-size: var(--%NS%mat-option-label-text-size, var(--%NS%mat-sys-body-large-size));
  letter-spacing: var(--%NS%mat-option-label-text-tracking, var(--%NS%mat-sys-label-large-tracking));
  font-weight: var(--%NS%mat-option-label-text-weight, var(--%NS%mat-sys-body-large-weight));
}
.mat-mdc-option:hover:not(.mdc-list-item--disabled) {
  background-color: var(--%NS%mat-option-hover-state-layer-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) calc(var(--%NS%mat-sys-hover-state-layer-opacity) * 100%), transparent));
}
.mat-mdc-option:focus.mdc-list-item, .mat-mdc-option.mat-mdc-option-active.mdc-list-item {
  background-color: var(--%NS%mat-option-focus-state-layer-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) calc(var(--%NS%mat-sys-focus-state-layer-opacity) * 100%), transparent));
  outline: 0;
}
.mat-mdc-option.mdc-list-item--%NS%selected:not(.mdc-list-item--disabled):not(.mat-mdc-option-active, .mat-mdc-option-multiple, :focus, :hover) {
  background-color: var(--%NS%mat-option-selected-state-layer-color, var(--%NS%mat-sys-secondary-container));
}
.mat-mdc-option.mdc-list-item--%NS%selected:not(.mdc-list-item--disabled):not(.mat-mdc-option-active, .mat-mdc-option-multiple, :focus, :hover) .mdc-list-item__primary-text {
  color: var(--%NS%mat-option-selected-state-label-text-color, var(--%NS%mat-sys-on-secondary-container));
}
.mat-mdc-option .mat-pseudo-checkbox {
  --%NS%mat-pseudo-checkbox-minimal-selected-checkmark-color: var(--%NS%mat-option-selected-state-label-text-color, var(--%NS%mat-sys-on-secondary-container));
}
.mat-mdc-option.mdc-list-item {
  align-items: center;
  background: transparent;
}
.mat-mdc-option.mdc-list-item--disabled {
  cursor: default;
  pointer-events: none;
}
.mat-mdc-option.mdc-list-item--disabled .mat-mdc-option-pseudo-checkbox, .mat-mdc-option.mdc-list-item--disabled .mdc-list-item__primary-text, .mat-mdc-option.mdc-list-item--disabled > mat-icon {
  opacity: 0.38;
}
.mat-mdc-optgroup .mat-mdc-option:not(.mat-mdc-option-multiple) {
  padding-left: 32px;
}
[dir=rtl] .mat-mdc-optgroup .mat-mdc-option:not(.mat-mdc-option-multiple) {
  padding-left: 16px;
  padding-right: 32px;
}
.mat-mdc-option .mat-icon,
.mat-mdc-option .mat-pseudo-checkbox-full {
  margin-right: 16px;
  flex-shrink: 0;
}
[dir=rtl] .mat-mdc-option .mat-icon,
[dir=rtl] .mat-mdc-option .mat-pseudo-checkbox-full {
  margin-right: 0;
  margin-left: 16px;
}
.mat-mdc-option .mat-pseudo-checkbox-minimal {
  margin-left: 16px;
  flex-shrink: 0;
}
[dir=rtl] .mat-mdc-option .mat-pseudo-checkbox-minimal {
  margin-right: 16px;
  margin-left: 0;
}
.mat-mdc-option .mat-mdc-option-ripple {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  pointer-events: none;
}
.mat-mdc-option .mdc-list-item__primary-text {
  white-space: normal;
  font-size: inherit;
  font-weight: inherit;
  letter-spacing: inherit;
  line-height: inherit;
  font-family: inherit;
  text-decoration: inherit;
  text-transform: inherit;
  margin-right: auto;
}
[dir=rtl] .mat-mdc-option .mdc-list-item__primary-text {
  margin-right: 0;
  margin-left: auto;
}
@media (forced-colors: active) {
  .mat-mdc-option.mdc-list-item--%NS%selected:not(:has(.mat-mdc-option-pseudo-checkbox))::after {
    content: "";
    position: absolute;
    top: 50%;
    right: 16px;
    transform: translateY(-50%);
    width: 10px;
    height: 0;
    border-bottom: solid 10px;
    border-radius: 10px;
  }
  [dir=rtl] .mat-mdc-option.mdc-list-item--%NS%selected:not(:has(.mat-mdc-option-pseudo-checkbox))::after {
    right: auto;
    left: 16px;
  }
}

.mat-mdc-option-multiple {
  --%NS%mat-list-list-item-selected-container-color: var(--%NS%mat-list-list-item-container-color, transparent);
}

.mat-mdc-option-active .mat-focus-indicator::before {
  content: "";
}
`],encapsulation:2})})()}return t})();function XS(t,n,e){if(e.length){let r=n.toArray(),i=e.toArray(),o=0;for(let a=0;a<t+1;a++)r[a].group&&r[a].group===i[o]&&o++;return o}return 0}function JS(t,n,e,r){return t<e?t:t+n>e+r?Math.max(0,t-r+n):e}var Cy=(()=>{class t{static ɵfac=function(r){return new(r||t)};static ɵmod=R({type:t});static ɵinj=A({imports:[ve]})}return t})();var eE=(()=>{class t{static ɵfac=function(r){return new(r||t)};static ɵmod=R({type:t});static ɵinj=A({imports:[ve]})}return t})();var wy=(()=>{class t{static ɵfac=function(r){return new(r||t)};static ɵmod=R({type:t});static ɵinj=A({imports:[Za,eE,Xa,ve]})}return t})();var Ja=class{_defaultMatcher;_parentFormGroup;_parentForm;_stateChanges;errorState=!1;matcher;ngControl;formField;constructor(n,e,r,i,o){this._defaultMatcher=n,this._parentFormGroup=r,this._parentForm=i,this._stateChanges=o,e?Ht(e.field)&&!e.updateValueAndValidity?(this.formField=e,this.ngControl=null):(this.formField=null,this.ngControl=e):this.ngControl=this.formField=null}updateErrorState(){let n=this.errorState,e=this._getCurrentErrorState(this.matcher||this._defaultMatcher);e!==n&&(this.errorState=e,this._stateChanges.next())}_getCurrentErrorState(n){if(this.formField&&n?.isSignalErrorState)return n.isSignalErrorState(this.formField.field())??!1;let e=this._parentFormGroup||this._parentForm,r=this.ngControl?this.ngControl.control:null;return n?.isErrorState(r,e)??!1}};var hP=/^\d{4}-\d{2}-\d{2}(?:T\d{2}:\d{2}:\d{2}(?:\.\d+)?(?:Z|(?:(?:\+|-)\d{2}:\d{2}))?)?$/;var gP=/^(\d?\d)[:.](\d?\d)(?:[:.](\d?\d))?\s*(AM|PM)?$/i;function xy(t,n){let e=Array(t);for(let r=0;r<t;r++)e[r]=n(r);return e}var bP=(()=>{class t extends Yt{_matDateLocale=u(by,{optional:!0});constructor(){super();let e=u(by,{optional:!0});e!==void 0&&(this._matDateLocale=e),super.setLocale(this._matDateLocale)}getYear(e){return e.getFullYear()}getMonth(e){return e.getMonth()}getDate(e){return e.getDate()}getDayOfWeek(e){return e.getDay()}getMonthNames(e){let r=new Intl.DateTimeFormat(this.locale,{month:e,timeZone:`utc`});return xy(12,i=>this._format(r,new Date(2017,i,1)))}getDateNames(){let e=new Intl.DateTimeFormat(this.locale,{day:`numeric`,timeZone:`utc`});return xy(31,r=>this._format(e,new Date(2017,0,r+1)))}getDayOfWeekNames(e){let r=new Intl.DateTimeFormat(this.locale,{weekday:e,timeZone:`utc`});return xy(7,i=>this._format(r,new Date(2017,0,i+1)))}getYearName(e){let r=new Intl.DateTimeFormat(this.locale,{year:`numeric`,timeZone:`utc`});return this._format(r,e)}getFirstDayOfWeek(){if(typeof Intl<`u`&&Intl.Locale){let e=new Intl.Locale(this.locale),r=(e.getWeekInfo?.()||e.weekInfo)?.firstDay??0;return r===7?0:r}return 0}getNumDaysInMonth(e){return this.getDate(this._createDateWithOverflow(this.getYear(e),this.getMonth(e)+1,0))}clone(e){return new Date(e.getTime())}createDate(e,r,i){let o=this._createDateWithOverflow(e,r,i);return o.getMonth(),o}today(){return new Date}parse(e,r){return typeof e==`number`?new Date(e):e?new Date(Date.parse(e)):null}format(e,r){if(!this.isValid(e))throw Error(`NativeDateAdapter: Cannot format invalid date.`);let i=new Intl.DateTimeFormat(this.locale,K(b({},r),{timeZone:`utc`}));return this._format(i,e)}addCalendarYears(e,r){return this.addCalendarMonths(e,r*12)}addCalendarMonths(e,r){let i=this._createDateWithOverflow(this.getYear(e),this.getMonth(e)+r,this.getDate(e));return this.getMonth(i)!=((this.getMonth(e)+r)%12+12)%12&&(i=this._createDateWithOverflow(this.getYear(i),this.getMonth(i),0)),i}addCalendarDays(e,r){return this._createDateWithOverflow(this.getYear(e),this.getMonth(e),this.getDate(e)+r)}toIso8601(e){return[e.getUTCFullYear(),this._2digit(e.getUTCMonth()+1),this._2digit(e.getUTCDate())].join(`-`)}deserialize(e){if(typeof e==`string`){if(!e)return null;if(hP.test(e)){let r=new Date(e);if(this.isValid(r))return r}}return super.deserialize(e)}isDateInstance(e){return e instanceof Date}isValid(e){return!isNaN(e.getTime())}invalid(){return new Date(NaN)}setTime(e,r,i,o){let a=this.clone(e);return a.setHours(r,i,o,0),a}getHours(e){return e.getHours()}getMinutes(e){return e.getMinutes()}getSeconds(e){return e.getSeconds()}parseTime(e,r){if(typeof e!=`string`)return e instanceof Date?new Date(e.getTime()):null;let i=e.trim();if(i.length===0)return null;let o=this._parseTimeString(i);if(o===null){let a=i.replace(/[^0-9:(AM|PM)]/gi,``).trim();a.length>0&&(o=this._parseTimeString(a))}return o||this.invalid()}addSeconds(e,r){return new Date(e.getTime()+r*1e3)}_createDateWithOverflow(e,r,i){let o=new Date;return o.setFullYear(e,r,i),o.setHours(0,0,0,0),o}_2digit(e){return(`00`+e).slice(-2)}_format(e,r){let i=new Date;return i.setUTCFullYear(r.getFullYear(),r.getMonth(),r.getDate()),i.setUTCHours(r.getHours(),r.getMinutes(),r.getSeconds(),r.getMilliseconds()),e.format(i)}_parseTimeString(e){let r=e.toUpperCase().match(gP);if(r){let i=parseInt(r[1]),o=parseInt(r[2]),a=r[3]==null?void 0:parseInt(r[3]),s=r[4];if(i===12?i=s===`AM`?0:i:s===`PM`&&(i+=12),Dy(i,0,23)&&Dy(o,0,59)&&(a==null||Dy(a,0,59)))return this.setTime(this.today(),i,o,a||0)}return null}static ɵfac=function(r){return new(r||t)};static ɵprov=S({token:t,factory:t.ɵfac,autoProvided:!1})}return t})();function Dy(t,n,e){return!isNaN(t)&&t>=n&&t<=e}var yP={parse:{dateInput:null,timeInput:null},display:{dateInput:{year:`numeric`,month:`numeric`,day:`numeric`},timeInput:{hour:`numeric`,minute:`numeric`},monthYearLabel:{year:`numeric`,month:`short`},dateA11yLabel:{year:`numeric`,month:`long`,day:`numeric`},monthYearA11yLabel:{year:`numeric`,month:`long`},timeOptionLabel:{hour:`numeric`,minute:`numeric`}}};var Sy=(()=>{class t{static ɵfac=function(r){return new(r||t)};static ɵmod=R({type:t});static ɵinj=A({providers:[vP()]})}return t})();function vP(t=yP){return[{provide:Yt,useClass:bP},{provide:Fi,useValue:t}]}var tc=class{};function nc(t){return t&&typeof t.connect==`function`&&!(t instanceof Es)}var Xn=(function(t){return t[t.REPLACED=0]=`REPLACED`,t[t.INSERTED=1]=`INSERTED`,t[t.MOVED=2]=`MOVED`,t[t.REMOVED=3]=`REMOVED`,t})(Xn||{});var Hm=class{viewCacheSize=20;_viewCache=[];applyChanges(n,e,r,i,o){n.forEachOperation((a,s,l)=>{let c,d;if(a.previousIndex==null){let m=()=>r(a,s,l);c=this._insertView(m,l,e,i(a)),d=c?Xn.INSERTED:Xn.REPLACED}else l==null?(this._detachAndCacheView(s,e),d=Xn.REMOVED):(c=this._moveView(s,l,e,i(a)),d=Xn.MOVED);o&&o({context:c?.context,operation:d,record:a})})}detach(){for(let n of this._viewCache)n.destroy();this._viewCache=[]}_insertView(n,e,r,i){let o=this._insertViewFromCache(e,r);if(o){o.context.$implicit=i;return}let a=n();return r.createEmbeddedView(a.templateRef,a.context,a.index)}_detachAndCacheView(n,e){let r=e.detach(n);this._maybeCacheView(r,e)}_moveView(n,e,r,i){let o=r.get(n);return r.move(o,e),o.context.$implicit=i,o}_maybeCacheView(n,e){if(this._viewCache.length<this.viewCacheSize)this._viewCache.push(n);else{let r=e.indexOf(n);r===-1?n.destroy():e.remove(r)}}_insertViewFromCache(n,e){let r=this._viewCache.pop();return r&&e.insert(r,n),r||null}};var _P=20;var es=(()=>{class t{_ngZone=u(T);_platform=u(xe);_renderer=u(bt).createRenderer(null,null);_cleanupGlobalListener;_scrolled=new _;_scrolledCount=0;scrollContainers=new Map;register(e){this.scrollContainers.has(e)||this.scrollContainers.set(e,e.elementScrolled().subscribe(()=>this._scrolled.next(e)))}deregister(e){let r=this.scrollContainers.get(e);r&&(r.unsubscribe(),this.scrollContainers.delete(e))}scrolled(e=_P){return this._platform.isBrowser?new ie(r=>{this._cleanupGlobalListener||(this._cleanupGlobalListener=this._ngZone.runOutsideAngular(()=>this._renderer.listen(`document`,`scroll`,()=>this._scrolled.next())));let i=e>0?this._scrolled.pipe(ia(e)).subscribe(r):this._scrolled.subscribe(r);return this._scrolledCount++,()=>{i.unsubscribe(),this._scrolledCount--,this._scrolledCount||(this._cleanupGlobalListener?.(),this._cleanupGlobalListener=void 0)}}):j()}ngOnDestroy(){this._cleanupGlobalListener?.(),this._cleanupGlobalListener=void 0,this.scrollContainers.forEach((e,r)=>this.deregister(r)),this._scrolled.complete()}ancestorScrolled(e,r){let i=this.getAncestorScrollContainers(e);return this.scrolled(r).pipe(Ee(o=>!o||i.indexOf(o)>-1))}getAncestorScrollContainers(e){let r=[];return this.scrollContainers.forEach((i,o)=>{this._targetContainsElement(o,e)&&r.push(o)}),r}_targetContainsElement(e,r){let i=gn(r),o=e.getElementRef().nativeElement;do if(i==o)return!0;while(i=i.parentElement);return!1}static ɵfac=function(r){return new(r||t)};static ɵprov=S({token:t,factory:t.ɵfac})}return t})();var CP=20;var Dr=(()=>{class t{_platform=u(xe);_listeners;_viewportSize=null;_change=new _;_document=u(z);constructor(){let e=u(T),r=u(bt).createRenderer(null,null);e.runOutsideAngular(()=>{if(this._platform.isBrowser){let i=o=>this._change.next(o);this._listeners=[r.listen(`window`,`resize`,i),r.listen(`window`,`orientationchange`,i)]}this.change().subscribe(()=>this._viewportSize=null)})}ngOnDestroy(){this._listeners?.forEach(e=>e()),this._change.complete()}getViewportSize(){this._viewportSize||this._updateViewportSize();let e={width:this._viewportSize.width,height:this._viewportSize.height};return this._platform.isBrowser||(this._viewportSize=null),e}getViewportRect(){let e=this.getViewportScrollPosition(),{width:r,height:i}=this.getViewportSize();return{top:e.top,left:e.left,bottom:e.top+i,right:e.left+r,height:i,width:r}}getViewportScrollPosition(){if(!this._platform.isBrowser)return{top:0,left:0};let e=this._document,r=this._getWindow(),i=e.documentElement,o=i.getBoundingClientRect();return{top:-o.top||e.body?.scrollTop||r.scrollY||i.scrollTop||0,left:-o.left||e.body?.scrollLeft||r.scrollX||i.scrollLeft||0}}change(e=CP){return e>0?this._change.pipe(ia(e)):this._change}_getWindow(){return this._document.defaultView||window}_updateViewportSize(){let e=this._getWindow();this._viewportSize=this._platform.isBrowser?{width:e.innerWidth,height:e.innerHeight}:{width:0,height:0}}static ɵfac=function(r){return new(r||t)};static ɵprov=S({token:t,factory:t.ɵfac})}return t})();var tE=new g(`CDK_VIRTUAL_SCROLL_VIEWPORT`);var oi=(()=>{class t{static ɵfac=function(r){return new(r||t)};static ɵmod=R({type:t});static ɵinj=A({})}return t})();var rc=(()=>{class t{static ɵfac=function(r){return new(r||t)};static ɵmod=R({type:t});static ɵinj=A({imports:[ve,oi,ve,oi]})}return t})();var ic=class{_attachedHost=null;attach(n){return this._attachedHost=n,n.attach(this)}detach(){let n=this._attachedHost;n!=null&&(this._attachedHost=null,n.detach())}get isAttached(){return this._attachedHost!=null}setAttachedHost(n){this._attachedHost=n}};var sn=class extends ic{component;viewContainerRef;injector;projectableNodes;bindings;directives;constructor(n,e,r,i,o,a){super(),this.component=n,this.viewContainerRef=e,this.injector=r,this.projectableNodes=i,this.bindings=o||null,this.directives=a||null}};var Sr=class extends ic{templateRef;viewContainerRef;context;injector;constructor(n,e,r,i){super(),this.templateRef=n,this.viewContainerRef=e,this.context=r,this.injector=i}get origin(){return this.templateRef.elementRef}attach(n,e=this.context){return this.context=e,super.attach(n)}detach(){return this.context=void 0,super.detach()}};var Ey=class extends ic{element;constructor(n){super(),this.element=n instanceof N?n.nativeElement:n}};var Pi=class{_attachedPortal=null;_disposeFn=null;_isDisposed=!1;hasAttached(){return!!this._attachedPortal}attach(n){if(n instanceof sn)return this._attachedPortal=n,this.attachComponentPortal(n);if(n instanceof Sr)return this._attachedPortal=n,this.attachTemplatePortal(n);if(this.attachDomPortal&&n instanceof Ey)return this._attachedPortal=n,this.attachDomPortal(n)}attachDomPortal=null;detach(){this._attachedPortal&&(this._attachedPortal.setAttachedHost(null),this._attachedPortal=null),this._invokeDisposeFn()}dispose(){this.hasAttached()&&this.detach(),this._invokeDisposeFn(),this._isDisposed=!0}setDisposeFn(n){this._disposeFn=n}_invokeDisposeFn(){this._disposeFn&&(this._disposeFn(),this._disposeFn=null)}};var Um=class extends Pi{outletElement;_appRef;_defaultInjector;constructor(n,e,r){super(),this.outletElement=n,this._appRef=e,this._defaultInjector=r}attachComponentPortal(n){let e;if(n.viewContainerRef){let r=n.injector||n.viewContainerRef.injector,i=r.get(hr,null,{optional:!0})||void 0;e=n.viewContainerRef.createComponent(n.component,{index:n.viewContainerRef.length,injector:r,ngModuleRef:i,projectableNodes:n.projectableNodes||void 0,bindings:n.bindings||void 0,directives:n.directives||void 0}),this.setDisposeFn(()=>e.destroy())}else{let r=this._appRef,i=n.injector||this._defaultInjector||B.NULL,o=i.get(Ue,r.injector);e=Yu(n.component,{elementInjector:i,environmentInjector:o,projectableNodes:n.projectableNodes||void 0,bindings:n.bindings||void 0,directives:n.directives||void 0}),r.attachView(e.hostView),this.setDisposeFn(()=>{r.viewCount>0&&r.detachView(e.hostView),e.destroy()})}return this.outletElement.appendChild(this._getComponentRootNode(e)),this._attachedPortal=n,e}attachTemplatePortal(n){let e=n.viewContainerRef,r=e.createEmbeddedView(n.templateRef,n.context,{injector:n.injector});return r.rootNodes.forEach(i=>this.outletElement.appendChild(i)),r.detectChanges(),this.setDisposeFn(()=>{let i=e.indexOf(r);i!==-1&&e.remove(i)}),this._attachedPortal=n,r}attachDomPortal=n=>{let e=n.element;e.parentNode;let r=this.outletElement.ownerDocument.createComment(`dom-portal`);e.parentNode.insertBefore(r,e),this.outletElement.appendChild(e),this._attachedPortal=n,super.setDisposeFn(()=>{r.parentNode&&r.parentNode.replaceChild(e,r)})};dispose(){super.dispose(),this.outletElement.remove()}_getComponentRootNode(n){return n.hostView.rootNodes[0]}};var Jn=(()=>{class t extends Pi{_moduleRef=u(hr,{optional:!0});_document=u(z);_viewContainerRef=u(et);_isInitialized=!1;_attachedRef=null;get portal(){return this._attachedPortal}set portal(e){this.hasAttached()&&!e&&!this._isInitialized||(this.hasAttached()&&super.detach(),e&&super.attach(e),this._attachedPortal=e||null)}attached=new k;get attachedRef(){return this._attachedRef}ngOnInit(){this._isInitialized=!0}ngOnDestroy(){super.dispose(),this._attachedRef=this._attachedPortal=null}attachComponentPortal(e){e.setAttachedHost(this);let r=e.viewContainerRef!=null?e.viewContainerRef:this._viewContainerRef,i=r.createComponent(e.component,{index:r.length,injector:e.injector||r.injector,projectableNodes:e.projectableNodes||void 0,ngModuleRef:this._moduleRef||void 0,bindings:e.bindings||void 0,directives:e.directives||void 0});return r!==this._viewContainerRef&&this._getRootNode().appendChild(i.hostView.rootNodes[0]),super.setDisposeFn(()=>i.destroy()),this._attachedPortal=e,this._attachedRef=i,this.attached.emit(i),i}attachTemplatePortal(e){e.setAttachedHost(this);let r=this._viewContainerRef.createEmbeddedView(e.templateRef,e.context,{injector:e.injector});return super.setDisposeFn(()=>this._viewContainerRef.clear()),this._attachedPortal=e,this._attachedRef=r,this.attached.emit(r),r}attachDomPortal=e=>{let r=e.element;r.parentNode;let i=this._document.createComment(`dom-portal`);e.setAttachedHost(this),r.parentNode.insertBefore(i,r),this._getRootNode().appendChild(r),this._attachedPortal=e,super.setDisposeFn(()=>{i.parentNode&&i.parentNode.replaceChild(r,i)})};_getRootNode(){let e=this._viewContainerRef.element.nativeElement;return e.nodeType===e.ELEMENT_NODE?e:e.parentNode}static ɵfac=(()=>{let e;return function(i){return(e||(e=Ae(t)))(i||t)}})();static ɵdir=w({type:t,selectors:[[``,`cdkPortalOutlet`,``]],inputs:{portal:[0,`cdkPortalOutlet`,`portal`]},outputs:{attached:`attached`},exportAs:[`cdkPortalOutlet`],features:[re]})}return t})();var er=(()=>{class t{static ɵfac=function(r){return new(r||t)};static ɵmod=R({type:t});static ɵinj=A({})}return t})();var nE=LS();function Li(t){return new $m(t.get(Dr),t.get(z))}var $m=class{_viewportRuler;_previousHTMLStyles={top:``,left:``};_previousScrollPosition;_isEnabled=!1;_document;constructor(n,e){this._viewportRuler=n,this._document=e}attach(){}enable(){if(this._canBeEnabled()){let n=this._document.documentElement;this._previousScrollPosition=this._viewportRuler.getViewportScrollPosition(),this._previousHTMLStyles.left=n.style.left||``,this._previousHTMLStyles.top=n.style.top||``,n.style.left=ft(-this._previousScrollPosition.left),n.style.top=ft(-this._previousScrollPosition.top),n.classList.add(`cdk-global-scrollblock`),this._isEnabled=!0}}disable(){if(this._isEnabled){let n=this._document.documentElement,e=this._document.body,r=n.style,i=e.style,o=r.scrollBehavior||``,a=i.scrollBehavior||``;this._isEnabled=!1,r.left=this._previousHTMLStyles.left,r.top=this._previousHTMLStyles.top,n.classList.remove(`cdk-global-scrollblock`),nE&&(r.scrollBehavior=i.scrollBehavior=`auto`),window.scroll(this._previousScrollPosition.left,this._previousScrollPosition.top),nE&&(r.scrollBehavior=o,i.scrollBehavior=a)}}_canBeEnabled(){if(this._document.documentElement.classList.contains(`cdk-global-scrollblock`)||this._isEnabled)return!1;let e=this._document.documentElement,r=this._viewportRuler.getViewportSize();return e.scrollHeight>r.height||e.scrollWidth>r.width}};function cE(t,n){return new Gm(t.get(es),t.get(T),t.get(Dr),n)}var Gm=class{_scrollDispatcher;_ngZone;_viewportRuler;_config;_scrollSubscription=null;_overlayRef;_initialScrollPosition;constructor(n,e,r,i){this._scrollDispatcher=n,this._ngZone=e,this._viewportRuler=r,this._config=i}attach(n){this._overlayRef,this._overlayRef=n}enable(){if(this._scrollSubscription)return;let n=this._scrollDispatcher.scrolled(0).pipe(Ee(e=>!e||!this._overlayRef.overlayElement.contains(e.getElementRef().nativeElement)));this._config&&this._config.threshold&&this._config.threshold>1?(this._initialScrollPosition=this._viewportRuler.getViewportScrollPosition().top,this._scrollSubscription=n.subscribe(()=>{let e=this._viewportRuler.getViewportScrollPosition().top;Math.abs(e-this._initialScrollPosition)>this._config.threshold?this._detach():this._overlayRef.updatePosition()})):this._scrollSubscription=n.subscribe(this._detach)}disable(){this._scrollSubscription&&(this._scrollSubscription.unsubscribe(),this._scrollSubscription=null)}detach(){this.disable(),this._overlayRef=null}_detach=()=>{this.disable(),this._overlayRef.hasAttached()&&this._ngZone.run(()=>this._overlayRef.detach())}};var oc=class{enable(){}disable(){}attach(){}};function My(t,n){return n.some(e=>{let r=t.bottom<e.top,i=t.top>e.bottom,o=t.right<e.left,a=t.left>e.right;return r||i||o||a})}function rE(t,n){return n.some(e=>{let r=t.top<e.top,i=t.bottom>e.bottom,o=t.left<e.left,a=t.right>e.right;return r||i||o||a})}function ai(t,n){return new Wm(t.get(es),t.get(Dr),t.get(T),n)}var Wm=class{_scrollDispatcher;_viewportRuler;_ngZone;_config;_scrollSubscription=null;_overlayRef;constructor(n,e,r,i){this._scrollDispatcher=n,this._viewportRuler=e,this._ngZone=r,this._config=i}attach(n){this._overlayRef,this._overlayRef=n}enable(){if(!this._scrollSubscription){let n=this._config?this._config.scrollThrottle:0;this._scrollSubscription=this._scrollDispatcher.scrolled(n).subscribe(()=>{if(this._overlayRef.updatePosition(),this._config&&this._config.autoClose){let e=this._overlayRef.overlayElement.getBoundingClientRect(),{width:r,height:i}=this._viewportRuler.getViewportSize();My(e,[{width:r,height:i,bottom:i,right:r,top:0,left:0}])&&(this.disable(),this._ngZone.run(()=>this._overlayRef.detach()))}})}}disable(){this._scrollSubscription&&(this._scrollSubscription.unsubscribe(),this._scrollSubscription=null)}detach(){this.disable(),this._overlayRef=null}};var dE=(()=>{class t{_injector=u(B);noop=()=>new oc;close=e=>cE(this._injector,e);block=()=>Li(this._injector);reposition=e=>ai(this._injector,e);static ɵfac=function(r){return new(r||t)};static ɵprov=S({token:t,factory:t.ɵfac})}return t})();var tr=class{positionStrategy;scrollStrategy=new oc;panelClass=``;hasBackdrop=!1;backdropClass=`cdk-overlay-dark-backdrop`;disableAnimations;width;height;minWidth;minHeight;maxWidth;maxHeight;direction;disposeOnNavigation=!1;usePopover;eventPredicate;constructor(n){if(n){let e=Object.keys(n);for(let r of e)n[r]!==void 0&&(this[r]=n[r])}}};var qm=class{connectionPair;scrollableViewProperties;constructor(n,e){this.connectionPair=n,this.scrollableViewProperties=e}};var uE=(()=>{class t{_attachedOverlays=[];_document=u(z);_isAttached=!1;ngOnDestroy(){this.detach()}add(e){this.remove(e),this._attachedOverlays.push(e)}remove(e){let r=this._attachedOverlays.indexOf(e);r>-1&&this._attachedOverlays.splice(r,1),this._attachedOverlays.length===0&&this.detach()}canReceiveEvent(e,r,i){return i.observers.length<1?!1:e.eventPredicate?e.eventPredicate(r):!0}static ɵfac=function(r){return new(r||t)};static ɵprov=S({token:t,factory:t.ɵfac})}return t})();var mE=(()=>{class t extends uE{_ngZone=u(T);_renderer=u(bt).createRenderer(null,null);_cleanupKeydown;add(e){super.add(e),this._isAttached||(this._ngZone.runOutsideAngular(()=>{this._cleanupKeydown=this._renderer.listen(`body`,`keydown`,this._keydownListener)}),this._isAttached=!0)}detach(){this._isAttached&&(this._cleanupKeydown?.(),this._isAttached=!1)}_keydownListener=e=>{let r=this._attachedOverlays;for(let i=r.length-1;i>-1;i--){let o=r[i];if(this.canReceiveEvent(o,e,o._keydownEvents)){this._ngZone.run(()=>o._keydownEvents.next(e));break}}};static ɵfac=function(r){return new(r||t)};static ɵprov=S({token:t,factory:t.ɵfac})}return t})();var fE=(()=>{class t extends uE{_platform=u(xe);_ngZone=u(T);_renderer=u(bt).createRenderer(null,null);_cursorOriginalValue;_cursorStyleIsSet=!1;_pointerDownEventTarget=null;_cleanups;add(e){if(super.add(e),!this._isAttached){let r=this._document.body,i={capture:!0},o=this._renderer;this._cleanups=this._ngZone.runOutsideAngular(()=>[o.listen(r,`pointerdown`,this._pointerDownListener,i),o.listen(r,`click`,this._clickListener,i),o.listen(r,`auxclick`,this._clickListener,i),o.listen(r,`contextmenu`,this._clickListener,i)]),this._platform.IOS&&!this._cursorStyleIsSet&&(this._cursorOriginalValue=r.style.cursor,r.style.cursor=`pointer`,this._cursorStyleIsSet=!0),this._isAttached=!0}}detach(){this._isAttached&&(this._cleanups?.forEach(e=>e()),this._cleanups=void 0,this._platform.IOS&&this._cursorStyleIsSet&&(this._document.body.style.cursor=this._cursorOriginalValue,this._cursorStyleIsSet=!1),this._isAttached=!1)}_pointerDownListener=e=>{this._pointerDownEventTarget=Pt(e)};_clickListener=e=>{let r=Pt(e),i=e.type===`click`&&this._pointerDownEventTarget?this._pointerDownEventTarget:r;this._pointerDownEventTarget=null;let o=this._attachedOverlays.slice();for(let a=o.length-1;a>-1;a--){let s=o[a],l=s._outsidePointerEvents;if(!(!s.hasAttached()||!this.canReceiveEvent(s,e,l))){if(iE(s.overlayElement,r)||iE(s.overlayElement,i))break;this._ngZone?this._ngZone.run(()=>l.next(e)):l.next(e)}}};static ɵfac=function(r){return new(r||t)};static ɵprov=S({token:t,factory:t.ɵfac})}return t})();function iE(t,n){let e=typeof ShadowRoot<`u`&&ShadowRoot,r=n;for(;r;){if(r===t)return!0;r=e&&r instanceof ShadowRoot?r.host:r.parentNode}return!1}var pE=(()=>{class t{static ɵfac=function(r){return new(r||t)};static ɵcmp=F({type:t,selectors:[[`ng-component`]],hostAttrs:[`cdk-overlay-style-loader`,``],decls:0,vars:0,template:function(r,i){},styles:[`.cdk-overlay-container, .cdk-global-overlay-wrapper {
  pointer-events: none;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
}

.cdk-overlay-container {
  position: fixed;
}
@layer cdk-overlay {
  .cdk-overlay-container {
    z-index: 1000;
  }
}
.cdk-overlay-container:empty {
  display: none;
}

.cdk-global-overlay-wrapper {
  display: flex;
  position: absolute;
}
@layer cdk-overlay {
  .cdk-global-overlay-wrapper {
    z-index: 1000;
  }
}

.cdk-overlay-pane {
  position: absolute;
  pointer-events: auto;
  box-sizing: border-box;
  display: flex;
  max-width: 100%;
  max-height: 100%;
}
@layer cdk-overlay {
  .cdk-overlay-pane {
    z-index: 1000;
  }
}

.cdk-overlay-backdrop {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  pointer-events: auto;
  -webkit-tap-highlight-color: transparent;
  opacity: 0;
  touch-action: manipulation;
}
@layer cdk-overlay {
  .cdk-overlay-backdrop {
    z-index: 1000;
    transition: opacity 400ms cubic-bezier(0.25, 0.8, 0.25, 1);
  }
}
@media (prefers-reduced-motion) {
  .cdk-overlay-backdrop {
    transition-duration: 1ms;
  }
}

.cdk-overlay-backdrop-showing {
  opacity: 1;
}
@media (forced-colors: active) {
  .cdk-overlay-backdrop-showing {
    opacity: 0.6;
  }
}

@layer cdk-overlay {
  .cdk-overlay-dark-backdrop {
    background: rgba(0, 0, 0, 0.32);
  }
}

.cdk-overlay-transparent-backdrop {
  transition: visibility 1ms linear, opacity 1ms linear;
  visibility: hidden;
  opacity: 1;
}
.cdk-overlay-transparent-backdrop.cdk-overlay-backdrop-showing, .cdk-high-contrast-active .cdk-overlay-transparent-backdrop {
  opacity: 0;
  visibility: visible;
}

.cdk-overlay-backdrop-noop-animation {
  transition: none;
}

.cdk-overlay-connected-position-bounding-box {
  position: absolute;
  display: flex;
  flex-direction: column;
  min-width: 1px;
  min-height: 1px;
}
@layer cdk-overlay {
  .cdk-overlay-connected-position-bounding-box {
    z-index: 1000;
  }
}

.cdk-global-scrollblock {
  position: fixed;
  width: 100%;
  overflow-y: scroll;
}

.cdk-overlay-popover {
  background: none;
  border: none;
  padding: 0;
  outline: 0;
  overflow: visible;
  position: fixed;
  pointer-events: none;
  white-space: normal;
  color: inherit;
  text-decoration: none;
  width: 100%;
  height: 100%;
  inset: auto;
  top: 0;
  left: 0;
}
.cdk-overlay-popover::backdrop {
  display: none;
}
.cdk-overlay-popover .cdk-overlay-backdrop {
  position: fixed;
  z-index: auto;
}
`],encapsulation:2})}return t})();var Km=(()=>{class t{_platform=u(xe);_containerElement;_document=u(z);_styleLoader=u(Ze);ngOnDestroy(){this._containerElement?.remove()}getContainerElement(){return this._loadStyles(),this._containerElement||this._createContainer(),this._containerElement}_createContainer(){let e=`cdk-overlay-container`;if(this._platform.isBrowser||ay()){let i=this._document.querySelectorAll(`.${e}[platform="server"], .${e}[platform="test"]`);for(let o=0;o<i.length;o++)i[o].remove()}let r=this._document.createElement(`div`);r.classList.add(e),ay()?r.setAttribute(`platform`,`test`):this._platform.isBrowser||r.setAttribute(`platform`,`server`),this._document.body.appendChild(r),this._containerElement=r}_loadStyles(){this._styleLoader.load(pE)}static ɵfac=function(r){return new(r||t)};static ɵprov=S({token:t,factory:t.ɵfac})}return t})();var Iy=class{_renderer;_ngZone;element;_cleanupClick;_cleanupTransitionEnd;_fallbackTimeout;constructor(n,e,r,i){this._renderer=e,this._ngZone=r,this.element=n.createElement(`div`),this.element.classList.add(`cdk-overlay-backdrop`),this._cleanupClick=e.listen(this.element,`click`,i)}detach(){this._ngZone.runOutsideAngular(()=>{let n=this.element;clearTimeout(this._fallbackTimeout),this._cleanupTransitionEnd?.(),this._cleanupTransitionEnd=this._renderer.listen(n,`transitionend`,this.dispose),this._fallbackTimeout=setTimeout(this.dispose,500),n.style.pointerEvents=`none`,n.classList.remove(`cdk-overlay-backdrop-showing`)})}dispose=()=>{clearTimeout(this._fallbackTimeout),this._cleanupClick?.(),this._cleanupTransitionEnd?.(),this._cleanupClick=this._cleanupTransitionEnd=this._fallbackTimeout=void 0,this.element.remove()}};function Ny(t){return t&&t.nodeType===1}var ky=L([]);var ts=class{_portalOutlet;_host;_pane;_config;_ngZone;_keyboardDispatcher;_document;_location;_outsideClickDispatcher;_animationsDisabled;_injector;_renderer;_backdropClick=new _;_attachments=new _;_detachments=new _;_positionStrategy;_scrollStrategy;_locationChanges;_backdropRef=null;_detachContentMutationObserver;_detachContentAfterRenderRef;_disposed=!1;_previousHostParent;_keydownEvents=new _;_outsidePointerEvents=new _;_afterNextRenderRef;constructor(n,e,r,i,o,a,s,l,c,d=!1,m,p){this._portalOutlet=n,this._host=e,this._pane=r,this._config=i,this._ngZone=o,this._keyboardDispatcher=a,this._document=s,this._location=l,this._outsideClickDispatcher=c,this._animationsDisabled=d,this._injector=m,this._renderer=p,i.scrollStrategy&&(this._scrollStrategy=i.scrollStrategy,this._scrollStrategy.attach(this)),this._positionStrategy=i.positionStrategy}get overlayElement(){return this._pane}get backdropElement(){return this._backdropRef?.element||null}get hostElement(){return this._host}get eventPredicate(){return this._config?.eventPredicate||null}attach(n){if(this._disposed)return null;this._attachHost();let e=this._portalOutlet.attach(n);if(this._positionStrategy?.attach(this),this._updateStackingOrder(),this._updateElementSize(),this._updateElementDirection(),fe(()=>{ky.update(r=>r.includes(this)?r:[...r,this])}),this._scrollStrategy&&this._scrollStrategy.enable(),this._afterNextRenderRef?.destroy(),this._afterNextRenderRef=Ge(()=>{this.hasAttached()&&this.updatePosition()},{injector:this._injector}),this._togglePointerEvents(!0),this._config.hasBackdrop&&this._attachBackdrop(),this._config.panelClass&&this._toggleClasses(this._pane,this._config.panelClass,!0),this._attachments.next(),this._completeDetachContent(),this._keyboardDispatcher.add(this),this._config.disposeOnNavigation===!0||this._config.disposeOnNavigation===`pop-state`){let r=this._location.subscribe(()=>this.dispose());this._locationChanges=()=>r.unsubscribe()}else this._config.disposeOnNavigation===`url-change`&&(this._locationChanges=this._location.onUrlChange(()=>this.dispose()));return this._outsideClickDispatcher.add(this),typeof e?.onDestroy==`function`&&e.onDestroy(()=>{this.hasAttached()&&this._ngZone.runOutsideAngular(()=>Promise.resolve().then(()=>this.detach()))}),e}detach(){if(!this.hasAttached())return;this.detachBackdrop(),this._togglePointerEvents(!1),this._positionStrategy&&this._positionStrategy.detach&&this._positionStrategy.detach(),this._scrollStrategy&&this._scrollStrategy.disable();let n=this._portalOutlet.detach();return this._detachments.next(),this._completeDetachContent(),this._keyboardDispatcher.remove(this),this._detachContentWhenEmpty(),this._locationChanges?.(),this._outsideClickDispatcher.remove(this),fe(()=>{ky.update(e=>e.filter(r=>r!==this))}),n}dispose(){if(this._disposed)return;let n=this.hasAttached();this._positionStrategy&&this._positionStrategy.dispose(),this._disposeScrollStrategy(),this._backdropRef?.dispose(),this._locationChanges?.(),this._keyboardDispatcher.remove(this),this._portalOutlet.dispose(),this._attachments.complete(),this._backdropClick.complete(),this._keydownEvents.complete(),this._outsidePointerEvents.complete(),this._outsideClickDispatcher.remove(this),this._host?.remove(),this._afterNextRenderRef?.destroy(),this._previousHostParent=this._pane=this._host=this._backdropRef=null,n&&this._detachments.next(),this._detachments.complete(),this._completeDetachContent(),this._disposed=!0,fe(()=>{ky.update(e=>e.filter(r=>r!==this))})}hasAttached(){return this._portalOutlet.hasAttached()}backdropClick(){return this._backdropClick}attachments(){return this._attachments}detachments(){return this._detachments}keydownEvents(){return this._keydownEvents}outsidePointerEvents(){return this._outsidePointerEvents}getConfig(){return this._config}updatePosition(){this._positionStrategy&&this._positionStrategy.apply()}updatePositionStrategy(n){n!==this._positionStrategy&&(this._positionStrategy&&this._positionStrategy.dispose(),this._positionStrategy=n,this.hasAttached()&&(n.attach(this),this.updatePosition()))}updateSize(n){this._config=b(b({},this._config),n),this._updateElementSize()}setDirection(n){this._config=K(b({},this._config),{direction:n}),this._updateElementDirection()}addPanelClass(n){this._pane&&this._toggleClasses(this._pane,n,!0)}removePanelClass(n){this._pane&&this._toggleClasses(this._pane,n,!1)}getDirection(){let n=this._config.direction;return n?typeof n==`string`?n:n.value:`ltr`}updateScrollStrategy(n){n!==this._scrollStrategy&&(this._disposeScrollStrategy(),this._scrollStrategy=n,this.hasAttached()&&(n.attach(this),n.enable()))}_updateElementDirection(){this._host.setAttribute(`dir`,this.getDirection())}_updateElementSize(){if(!this._pane)return;let n=this._pane.style;n.width=ft(this._config.width),n.height=ft(this._config.height),n.minWidth=ft(this._config.minWidth),n.minHeight=ft(this._config.minHeight),n.maxWidth=ft(this._config.maxWidth),n.maxHeight=ft(this._config.maxHeight)}_togglePointerEvents(n){this._pane.style.pointerEvents=n?``:`none`}_attachHost(){if(!this._host.parentElement){let n=this._config.usePopover?this._positionStrategy?.getPopoverInsertionPoint?.():null;Ny(n)?n.after(this._host):n?.type===`parent`?n.element.appendChild(this._host):this._previousHostParent?.appendChild(this._host)}if(this._config.usePopover)try{this._host.showPopover()}catch(n){}}_attachBackdrop(){let n=`cdk-overlay-backdrop-showing`;this._backdropRef?.dispose(),this._backdropRef=new Iy(this._document,this._renderer,this._ngZone,e=>{this._backdropClick.next(e)}),this._animationsDisabled&&this._backdropRef.element.classList.add(`cdk-overlay-backdrop-noop-animation`),this._config.backdropClass&&this._toggleClasses(this._backdropRef.element,this._config.backdropClass,!0),this._config.usePopover?this._host.prepend(this._backdropRef.element):this._host.parentElement.insertBefore(this._backdropRef.element,this._host),!this._animationsDisabled&&typeof requestAnimationFrame<`u`?this._ngZone.runOutsideAngular(()=>{requestAnimationFrame(()=>this._backdropRef?.element.classList.add(n))}):this._backdropRef.element.classList.add(n)}_updateStackingOrder(){!this._config.usePopover&&this._host.nextSibling&&this._host.parentNode.appendChild(this._host)}detachBackdrop(){this._animationsDisabled?(this._backdropRef?.dispose(),this._backdropRef=null):this._backdropRef?.detach()}_toggleClasses(n,e,r){let i=Ga(e||[]).filter(o=>!!o);i.length&&(r?n.classList.add(...i):n.classList.remove(...i))}_detachContentWhenEmpty(){let n=!1;try{this._detachContentAfterRenderRef=Ge(()=>{n=!0,this._detachContent()},{injector:this._injector})}catch(e){if(n)throw e;this._detachContent()}globalThis.MutationObserver&&this._pane&&(this._detachContentMutationObserver||=new globalThis.MutationObserver(()=>{this._detachContent()}),this._detachContentMutationObserver.observe(this._pane,{childList:!0}))}_detachContent(){(!this._pane||!this._host||this._pane.children.length===0)&&(this._pane&&this._config.panelClass&&this._toggleClasses(this._pane,this._config.panelClass,!1),this._host&&this._host.parentElement&&(this._previousHostParent=this._host.parentElement,this._host.remove()),this._completeDetachContent())}_completeDetachContent(){this._detachContentAfterRenderRef?.destroy(),this._detachContentAfterRenderRef=void 0,this._detachContentMutationObserver?.disconnect()}_disposeScrollStrategy(){let n=this._scrollStrategy;n?.disable(),n?.detach?.()}};var oE=`cdk-overlay-connected-position-bounding-box`;var wP=/([A-Za-z%]+)$/;function Vo(t,n){return new ns(n,t.get(Dr),t.get(z),t.get(xe),t.get(Km))}var ns=class{_viewportRuler;_document;_platform;_overlayContainer;_overlayRef;_isInitialRender=!1;_lastBoundingBoxSize={width:0,height:0};_isPushed=!1;_canPush=!0;_growAfterOpen=!1;_hasFlexibleDimensions=!0;_positionLocked=!1;_originRect;_overlayRect;_viewportRect;_containerRect;_viewportMargin=0;_scrollables=[];_preferredPositions=[];_origin;_pane;_isDisposed=!1;_boundingBox=null;_lastPosition=null;_lastScrollVisibility=null;_positionChanges=new _;_resizeSubscription=ne.EMPTY;_offsetX=0;_offsetY=0;_transformOriginSelector;_appliedPanelClasses=[];_previousPushAmount=null;_popoverLocation=`global`;positionChanges=this._positionChanges;get positions(){return this._preferredPositions}constructor(n,e,r,i,o){this._viewportRuler=e,this._document=r,this._platform=i,this._overlayContainer=o,this.setOrigin(n)}attach(n){this._overlayRef&&this._overlayRef,this._validatePositions(),n.hostElement.classList.add(oE),this._overlayRef=n,this._boundingBox=n.hostElement,this._pane=n.overlayElement,this._isDisposed=!1,this._isInitialRender=!0,this._lastPosition=null,this._resizeSubscription.unsubscribe(),this._resizeSubscription=this._viewportRuler.change().subscribe(()=>{this._isInitialRender=!0,this.apply()})}apply(){if(this._isDisposed||!this._platform.isBrowser)return;if(!this._isInitialRender&&this._positionLocked&&this._lastPosition){this.reapplyLastPosition();return}this._clearPanelClasses(),this._resetOverlayElementStyles(),this._resetBoundingBoxStyles(),this._viewportRect=this._getNarrowedViewportRect(),this._originRect=this._getOriginRect(),this._overlayRect=this._pane.getBoundingClientRect(),this._containerRect=this._getContainerRect();let n=this._originRect,e=this._overlayRect,r=this._viewportRect,i=this._containerRect,o=[],a;for(let s of this._preferredPositions){let l=this._getOriginPoint(n,i,s),c=this._getOverlayPoint(l,e,s),d=this._getOverlayFit(c,e,r,s);if(d.isCompletelyWithinViewport){this._isPushed=!1,this._applyPosition(s,l);return}if(this._canFitWithFlexibleDimensions(d,c,r)){o.push({position:s,origin:l,overlayRect:e,boundingBoxRect:this._calculateBoundingBoxRect(l,s)});continue}(!a||a.overlayFit.visibleArea<d.visibleArea)&&(a={overlayFit:d,overlayPoint:c,originPoint:l,position:s,overlayRect:e})}if(o.length){let s=null,l=-1;for(let c of o){let d=c.boundingBoxRect.width*c.boundingBoxRect.height*(c.position.weight||1);d>l&&(l=d,s=c)}this._isPushed=!1,this._applyPosition(s.position,s.origin);return}if(this._canPush){this._isPushed=!0,this._applyPosition(a.position,a.originPoint);return}this._applyPosition(a.position,a.originPoint)}detach(){this._clearPanelClasses(),this._lastPosition=null,this._previousPushAmount=null,this._resizeSubscription.unsubscribe()}dispose(){this._isDisposed||(this._boundingBox&&Lo(this._boundingBox.style,{top:``,left:``,right:``,bottom:``,height:``,width:``,alignItems:``,justifyContent:``}),this._pane&&this._resetOverlayElementStyles(),this._overlayRef&&this._overlayRef.hostElement.classList.remove(oE),this.detach(),this._positionChanges.complete(),this._overlayRef=this._boundingBox=null,this._isDisposed=!0)}reapplyLastPosition(){if(this._isDisposed||!this._platform.isBrowser)return;let n=this._lastPosition;n?(this._originRect=this._getOriginRect(),this._overlayRect=this._pane.getBoundingClientRect(),this._viewportRect=this._getNarrowedViewportRect(),this._containerRect=this._getContainerRect(),this._applyPosition(n,this._getOriginPoint(this._originRect,this._containerRect,n))):this.apply()}withScrollableContainers(n){return this._scrollables=n,this}withPositions(n){return this._preferredPositions=n,n.indexOf(this._lastPosition)===-1&&(this._lastPosition=null),this._validatePositions(),this}withViewportMargin(n){return this._viewportMargin=n,this}withFlexibleDimensions(n=!0){return this._hasFlexibleDimensions=n,this}withGrowAfterOpen(n=!0){return this._growAfterOpen=n,this}withPush(n=!0){return this._canPush=n,this}withLockedPosition(n=!0){return this._positionLocked=n,this}setOrigin(n){return this._origin=n,this}withDefaultOffsetX(n){return this._offsetX=n,this}withDefaultOffsetY(n){return this._offsetY=n,this}withTransformOriginOn(n){return this._transformOriginSelector=n,this}withPopoverLocation(n){return this._popoverLocation=n,this}getPopoverInsertionPoint(){return this._popoverLocation===`global`?null:this._popoverLocation!==`inline`?this._popoverLocation:this._origin instanceof N?this._origin.nativeElement:Ny(this._origin)?this._origin:null}_getOriginPoint(n,e,r){let i;if(r.originX==`center`)i=n.left+n.width/2;else{let a=this._isRtl()?n.right:n.left,s=this._isRtl()?n.left:n.right;i=r.originX==`start`?a:s}e.left<0&&(i-=e.left);let o;return r.originY==`center`?o=n.top+n.height/2:o=r.originY==`top`?n.top:n.bottom,e.top<0&&(o-=e.top),{x:i,y:o}}_getOverlayPoint(n,e,r){let i;r.overlayX==`center`?i=-e.width/2:r.overlayX===`start`?i=this._isRtl()?-e.width:0:i=this._isRtl()?0:-e.width;let o;return r.overlayY==`center`?o=-e.height/2:o=r.overlayY==`top`?0:-e.height,{x:n.x+i,y:n.y+o}}_getOverlayFit(n,e,r,i){let o=sE(e),{x:a,y:s}=n,l=this._getOffset(i,`x`),c=this._getOffset(i,`y`);l&&(a+=l),c&&(s+=c);let d=0-a,m=a+o.width-r.width,p=0-s,f=s+o.height-r.height,h=this._subtractOverflows(o.width,d,m),v=this._subtractOverflows(o.height,p,f),M=h*v;return{visibleArea:M,isCompletelyWithinViewport:o.width*o.height===M,fitsInViewportVertically:v===o.height,fitsInViewportHorizontally:h==o.width}}_canFitWithFlexibleDimensions(n,e,r){if(this._hasFlexibleDimensions){let i=r.bottom-e.y,o=r.right-e.x,a=aE(this._overlayRef.getConfig().minHeight),s=aE(this._overlayRef.getConfig().minWidth),l=n.fitsInViewportVertically||a!=null&&a<=i,c=n.fitsInViewportHorizontally||s!=null&&s<=o;return l&&c}return!1}_pushOverlayOnScreen(n,e,r){if(this._previousPushAmount&&this._positionLocked)return{x:n.x+this._previousPushAmount.x,y:n.y+this._previousPushAmount.y};let i=sE(e),o=this._viewportRect,a=Math.max(n.x+i.width-o.width,0),s=Math.max(n.y+i.height-o.height,0),l=Math.max(o.top-r.top-n.y,0),c=Math.max(o.left-r.left-n.x,0),d=0,m=0;return i.width<=o.width?d=c||-a:d=n.x<this._getViewportMarginStart()?o.left-r.left-n.x:0,i.height<=o.height?m=l||-s:m=n.y<this._getViewportMarginTop()?o.top-r.top-n.y:0,this._previousPushAmount={x:d,y:m},{x:n.x+d,y:n.y+m}}_applyPosition(n,e){if(this._setTransformOrigin(n),this._setOverlayElementStyles(e,n),this._setBoundingBoxStyles(e,n),n.panelClass&&this._addPanelClasses(n.panelClass),this._positionChanges.observers.length){let r=this._getScrollVisibility();if(n!==this._lastPosition||!this._lastScrollVisibility||!xP(this._lastScrollVisibility,r)){let i=new qm(n,r);this._positionChanges.next(i)}this._lastScrollVisibility=r}this._lastPosition=n,this._isInitialRender=!1}_setTransformOrigin(n){if(!this._transformOriginSelector)return;let e=this._boundingBox.querySelectorAll(this._transformOriginSelector),r,i=n.overlayY;n.overlayX===`center`?r=`center`:this._isRtl()?r=n.overlayX===`start`?`right`:`left`:r=n.overlayX===`start`?`left`:`right`;for(let o=0;o<e.length;o++)e[o].style.transformOrigin=`${r} ${i}`}_calculateBoundingBoxRect(n,e){let r=this._viewportRect,i=this._isRtl(),o,a,s;if(e.overlayY===`top`)a=n.y,o=r.height-a+this._getViewportMarginBottom();else if(e.overlayY===`bottom`)s=r.height-n.y+this._getViewportMarginTop()+this._getViewportMarginBottom(),o=r.height-s+this._getViewportMarginTop();else{let f=Math.min(r.bottom-n.y+r.top,n.y),h=this._lastBoundingBoxSize.height;o=f*2,a=n.y-f,o>h&&!this._isInitialRender&&!this._growAfterOpen&&(a=n.y-h/2)}let l=e.overlayX===`start`&&!i||e.overlayX===`end`&&i,c=e.overlayX===`end`&&!i||e.overlayX===`start`&&i,d,m,p;if(c)p=r.width-n.x+this._getViewportMarginStart()+this._getViewportMarginEnd(),d=n.x-this._getViewportMarginStart();else if(l)m=n.x,d=r.right-n.x-this._getViewportMarginEnd();else{let f=Math.min(r.right-n.x+r.left,n.x),h=this._lastBoundingBoxSize.width;d=f*2,m=n.x-f,d>h&&!this._isInitialRender&&!this._growAfterOpen&&(m=n.x-h/2)}return{top:a,left:m,bottom:s,right:p,width:d,height:o}}_setBoundingBoxStyles(n,e){let r=this._calculateBoundingBoxRect(n,e);!this._isInitialRender&&!this._growAfterOpen&&(r.height=Math.min(r.height,this._lastBoundingBoxSize.height),r.width=Math.min(r.width,this._lastBoundingBoxSize.width));let i={};if(this._hasExactPosition())i.top=i.left=`0`,i.bottom=i.right=`auto`,i.maxHeight=i.maxWidth=``,i.width=i.height=`100%`;else{let o=this._overlayRef.getConfig().maxHeight,a=this._overlayRef.getConfig().maxWidth;i.width=ft(r.width),i.height=ft(r.height),i.top=ft(r.top)||`auto`,i.bottom=ft(r.bottom)||`auto`,i.left=ft(r.left)||`auto`,i.right=ft(r.right)||`auto`,e.overlayX===`center`?i.alignItems=`center`:i.alignItems=e.overlayX===`end`?`flex-end`:`flex-start`,e.overlayY===`center`?i.justifyContent=`center`:i.justifyContent=e.overlayY===`bottom`?`flex-end`:`flex-start`,o&&(i.maxHeight=ft(o)),a&&(i.maxWidth=ft(a))}this._lastBoundingBoxSize=r,Lo(this._boundingBox.style,i)}_resetBoundingBoxStyles(){Lo(this._boundingBox.style,{top:`0`,left:`0`,right:`0`,bottom:`0`,height:``,width:``,alignItems:``,justifyContent:``})}_resetOverlayElementStyles(){Lo(this._pane.style,{top:``,left:``,bottom:``,right:``,position:``,transform:``})}_setOverlayElementStyles(n,e){let r={},i=this._hasExactPosition(),o=this._hasFlexibleDimensions,a=this._overlayRef.getConfig();if(i){let d=this._viewportRuler.getViewportScrollPosition();Lo(r,this._getExactOverlayY(e,n,d)),Lo(r,this._getExactOverlayX(e,n,d))}else r.position=`static`;let s=``,l=this._getOffset(e,`x`),c=this._getOffset(e,`y`);l&&(s+=`translateX(${l}px) `),c&&(s+=`translateY(${c}px)`),r.transform=s.trim(),a.maxHeight&&(i?r.maxHeight=ft(a.maxHeight):o&&(r.maxHeight=``)),a.maxWidth&&(i?r.maxWidth=ft(a.maxWidth):o&&(r.maxWidth=``)),Lo(this._pane.style,r)}_getExactOverlayY(n,e,r){let i={top:``,bottom:``},o=this._getOverlayPoint(e,this._overlayRect,n);if(this._isPushed&&(o=this._pushOverlayOnScreen(o,this._overlayRect,r)),n.overlayY===`bottom`)i.bottom=`${this._document.documentElement.clientHeight-(o.y+this._overlayRect.height)}px`;else i.top=ft(o.y);return i}_getExactOverlayX(n,e,r){let i={left:``,right:``},o=this._getOverlayPoint(e,this._overlayRect,n);this._isPushed&&(o=this._pushOverlayOnScreen(o,this._overlayRect,r));let a;if(this._isRtl()?a=n.overlayX===`end`?`left`:`right`:a=n.overlayX===`end`?`right`:`left`,a===`right`)i.right=`${this._document.documentElement.clientWidth-(o.x+this._overlayRect.width)}px`;else i.left=ft(o.x);return i}_getScrollVisibility(){let n=this._getOriginRect(),e=this._pane.getBoundingClientRect(),r=this._scrollables.map(i=>i.getElementRef().nativeElement.getBoundingClientRect());return{isOriginClipped:rE(n,r),isOriginOutsideView:My(n,r),isOverlayClipped:rE(e,r),isOverlayOutsideView:My(e,r)}}_subtractOverflows(n,...e){return e.reduce((r,i)=>r-Math.max(i,0),n)}_getNarrowedViewportRect(){let n=this._document.documentElement.clientWidth,e=this._document.documentElement.clientHeight,r=this._viewportRuler.getViewportScrollPosition();return{top:r.top+this._getViewportMarginTop(),left:r.left+this._getViewportMarginStart(),right:r.left+n-this._getViewportMarginEnd(),bottom:r.top+e-this._getViewportMarginBottom(),width:n-this._getViewportMarginStart()-this._getViewportMarginEnd(),height:e-this._getViewportMarginTop()-this._getViewportMarginBottom()}}_isRtl(){return this._overlayRef.getDirection()===`rtl`}_hasExactPosition(){return!this._hasFlexibleDimensions||this._isPushed}_getOffset(n,e){return e===`x`?n.offsetX==null?this._offsetX:n.offsetX:n.offsetY==null?this._offsetY:n.offsetY}_validatePositions(){}_addPanelClasses(n){this._pane&&Ga(n).forEach(e=>{e!==``&&this._appliedPanelClasses.indexOf(e)===-1&&(this._appliedPanelClasses.push(e),this._pane.classList.add(e))})}_clearPanelClasses(){this._pane&&(this._appliedPanelClasses.forEach(n=>{this._pane.classList.remove(n)}),this._appliedPanelClasses=[])}_getViewportMarginStart(){return typeof this._viewportMargin==`number`?this._viewportMargin:this._viewportMargin?.start??0}_getViewportMarginEnd(){return typeof this._viewportMargin==`number`?this._viewportMargin:this._viewportMargin?.end??0}_getViewportMarginTop(){return typeof this._viewportMargin==`number`?this._viewportMargin:this._viewportMargin?.top??0}_getViewportMarginBottom(){return typeof this._viewportMargin==`number`?this._viewportMargin:this._viewportMargin?.bottom??0}_getOriginRect(){let n=this._origin;if(n instanceof N)return n.nativeElement.getBoundingClientRect();if(n instanceof Element)return n.getBoundingClientRect();let e=n.width||0,r=n.height||0;return{top:n.y,bottom:n.y+r,left:n.x,right:n.x+e,height:r,width:e}}_getContainerRect(){let n=this._overlayRef.getConfig().usePopover&&this._popoverLocation!==`global`,e=this._overlayContainer.getContainerElement();n&&(e.style.display=`block`);let r=e.getBoundingClientRect();return n&&(e.style.display=``),r}};function Lo(t,n){for(let e in n)Object.hasOwn(n,e)&&(t[e]=n[e]);return t}function aE(t){if(typeof t!=`number`&&t!=null){let[n,e]=t.split(wP);return!e||e===`px`?parseFloat(n):null}return t||null}function sE(t){return{top:Math.floor(t.top),right:Math.floor(t.right),bottom:Math.floor(t.bottom),left:Math.floor(t.left),width:Math.floor(t.width),height:Math.floor(t.height)}}function xP(t,n){return t===n?!0:t.isOriginClipped===n.isOriginClipped&&t.isOriginOutsideView===n.isOriginOutsideView&&t.isOverlayClipped===n.isOverlayClipped&&t.isOverlayOutsideView===n.isOverlayOutsideView}var lE=`cdk-global-overlay-wrapper`;function kr(t){return new Ym}var Ym=class{_overlayRef;_cssPosition=`static`;_topOffset=``;_bottomOffset=``;_alignItems=``;_xPosition=``;_xOffset=``;_width=``;_height=``;_isDisposed=!1;attach(n){let e=n.getConfig();this._overlayRef=n,this._width&&!e.width&&n.updateSize({width:this._width}),this._height&&!e.height&&n.updateSize({height:this._height}),n.hostElement.classList.add(lE),this._isDisposed=!1}top(n=``){return this._bottomOffset=``,this._topOffset=n,this._alignItems=`flex-start`,this}left(n=``){return this._xOffset=n,this._xPosition=`left`,this}bottom(n=``){return this._topOffset=``,this._bottomOffset=n,this._alignItems=`flex-end`,this}right(n=``){return this._xOffset=n,this._xPosition=`right`,this}start(n=``){return this._xOffset=n,this._xPosition=`start`,this}end(n=``){return this._xOffset=n,this._xPosition=`end`,this}width(n=``){return this._overlayRef?this._overlayRef.updateSize({width:n}):this._width=n,this}height(n=``){return this._overlayRef?this._overlayRef.updateSize({height:n}):this._height=n,this}centerHorizontally(n=``){return this.left(n),this._xPosition=`center`,this}centerVertically(n=``){return this.top(n),this._alignItems=`center`,this}apply(){if(!this._overlayRef||!this._overlayRef.hasAttached())return;let n=this._overlayRef.overlayElement.style,e=this._overlayRef.hostElement.style,{width:i,height:o,maxWidth:a,maxHeight:s}=this._overlayRef.getConfig(),l=(i===`100%`||i===`100vw`)&&(!a||a===`100%`||a===`100vw`),c=(o===`100%`||o===`100vh`)&&(!s||s===`100%`||s===`100vh`),d=this._xPosition,m=this._xOffset,p=this._overlayRef.getConfig().direction===`rtl`,f=``,h=``,v=``;l?v=`flex-start`:d===`center`?(v=`center`,p?h=m:f=m):p?d===`left`||d===`end`?(v=`flex-end`,f=m):(d===`right`||d===`start`)&&(v=`flex-start`,h=m):d===`left`||d===`start`?(v=`flex-start`,f=m):(d===`right`||d===`end`)&&(v=`flex-end`,h=m),n.position=this._cssPosition,n.marginLeft=l?`0`:f,n.marginTop=c?`0`:this._topOffset,n.marginBottom=this._bottomOffset,n.marginRight=l?`0`:h,e.justifyContent=v,e.alignItems=c?`flex-start`:this._alignItems}dispose(){if(this._isDisposed||!this._overlayRef)return;let n=this._overlayRef.overlayElement.style,e=this._overlayRef.hostElement,r=e.style;e.classList.remove(lE),r.justifyContent=r.alignItems=n.marginTop=n.marginBottom=n.marginLeft=n.marginRight=n.position=``,this._overlayRef=null,this._isDisposed=!0}};var hE=(()=>{class t{_injector=u(B);global(){return kr()}flexibleConnectedTo(e){return Vo(this._injector,e)}static ɵfac=function(r){return new(r||t)};static ɵprov=S({token:t,factory:t.ɵfac})}return t})();var ac=new g(`OVERLAY_DEFAULT_CONFIG`);function nr(t,n){t.get(Ze).load(pE);let e=t.get(Km),r=t.get(z),i=t.get(Fe),o=t.get(Rt),a=t.get(lt),s=t.get(ke,null,{optional:!0})||t.get(bt).createRenderer(null,null),l=new tr(n),c=t.get(ac,null,{optional:!0})?.usePopover??!0;l.direction=l.direction||a.value,!r.body||!(`showPopover`in r.body)?l.usePopover=!1:l.usePopover=n?.usePopover??c;let d=r.createElement(`div`),m=r.createElement(`div`);d.id=i.getId(`cdk-overlay-`),d.classList.add(`cdk-overlay-pane`),m.appendChild(d),l.usePopover&&(m.setAttribute(`popover`,`manual`),m.classList.add(`cdk-overlay-popover`));let p=l.usePopover?l.positionStrategy?.getPopoverInsertionPoint?.():null;return Ny(p)?p.after(m):p?.type===`parent`?p.element.appendChild(m):e.getContainerElement().appendChild(m),new ts(new Um(d,o,t),m,d,l,t.get(T),t.get(mE),r,t.get(br),t.get(fE),n?.disableAnimations??t.get(Js,null,{optional:!0})===`NoopAnimations`,t.get(Ue),s)}var gE=(()=>{class t{scrollStrategies=u(dE);_positionBuilder=u(hE);_injector=u(B);create(e){return nr(this._injector,e)}position(){return this._positionBuilder}static ɵfac=function(r){return new(r||t)};static ɵprov=S({token:t,factory:t.ɵfac})}return t})();var DP=[{originX:`start`,originY:`bottom`,overlayX:`start`,overlayY:`top`},{originX:`start`,originY:`top`,overlayX:`start`,overlayY:`bottom`},{originX:`end`,originY:`top`,overlayX:`end`,overlayY:`bottom`},{originX:`end`,originY:`bottom`,overlayX:`end`,overlayY:`top`}];var SP=new g(`cdk-connected-overlay-scroll-strategy`,{providedIn:`root`,factory:()=>{let t=u(B);return()=>ai(t)}});var rs=(()=>{class t{elementRef=u(N);static ɵfac=function(r){return new(r||t)};static ɵdir=w({type:t,selectors:[[``,`cdk-overlay-origin`,``],[``,`overlay-origin`,``],[``,`cdkOverlayOrigin`,``]],exportAs:[`cdkOverlayOrigin`]})}return t})();var bE=new g(`cdk-connected-overlay-default-config`);var Zm=(()=>{class t{_dir=u(lt,{optional:!0});_injector=u(B);_overlayRef;_templatePortal;_backdropSubscription=ne.EMPTY;_attachSubscription=ne.EMPTY;_detachSubscription=ne.EMPTY;_positionSubscription=ne.EMPTY;_offsetX;_offsetY;_position;_scrollStrategyFactory=u(SP);_ngZone=u(T);origin;positions;positionStrategy;get offsetX(){return this._offsetX}set offsetX(e){this._offsetX=e,this._position&&this._updatePositionStrategy(this._position)}get offsetY(){return this._offsetY}set offsetY(e){this._offsetY=e,this._position&&this._updatePositionStrategy(this._position)}width;height;minWidth;minHeight;backdropClass;panelClass;viewportMargin=0;scrollStrategy;open=!1;disableClose=!1;transformOriginSelector;hasBackdrop=!1;lockPosition=!1;flexibleDimensions=!1;growAfterOpen=!1;push=!1;disposeOnNavigation=!1;usePopover;matchWidth=!1;set _config(e){typeof e!=`string`&&this._assignConfig(e)}backdropClick=new k;positionChange=new k;attach=new k;detach=new k;overlayKeydown=new k;overlayOutsideClick=new k;constructor(){let e=u(mt),r=u(et),i=u(bE,{optional:!0}),o=u(ac,{optional:!0});this.usePopover=o?.usePopover===!1?null:`global`,this._templatePortal=new Sr(e,r),this.scrollStrategy=this._scrollStrategyFactory(),i&&this._assignConfig(i)}get overlayRef(){return this._overlayRef}get dir(){return this._dir?this._dir.value:`ltr`}ngOnDestroy(){this._attachSubscription.unsubscribe(),this._detachSubscription.unsubscribe(),this._backdropSubscription.unsubscribe(),this._positionSubscription.unsubscribe(),this._overlayRef?.dispose()}ngOnChanges(e){this._position&&(this._updatePositionStrategy(this._position),this._overlayRef?.updateSize({width:this._getWidth(),minWidth:this.minWidth,height:this.height,minHeight:this.minHeight}),e.origin&&this.open&&this._position.apply()),e.open&&(this.open?this.attachOverlay():this.detachOverlay())}_createOverlay(){(!this.positions||!this.positions.length)&&(this.positions=DP);let e=this._overlayRef=nr(this._injector,this._buildConfig());this._attachSubscription=e.attachments().subscribe(()=>this.attach.emit()),this._detachSubscription=e.detachments().subscribe(()=>this.detach.emit()),e.keydownEvents().subscribe(r=>{this.overlayKeydown.next(r),r.keyCode===27&&!this.disableClose&&!tt(r)&&(r.preventDefault(),this.detachOverlay())}),this._overlayRef.outsidePointerEvents().subscribe(r=>{let i=this._getOriginElement(),o=Pt(r);(!i||i!==o&&!i.contains(o))&&this.overlayOutsideClick.next(r)})}_buildConfig(){let e=this._position=this.positionStrategy||this._createPositionStrategy(),r=new tr({direction:this._dir||`ltr`,positionStrategy:e,scrollStrategy:this.scrollStrategy,hasBackdrop:this.hasBackdrop,disposeOnNavigation:this.disposeOnNavigation,usePopover:!!this.usePopover});return(this.height||this.height===0)&&(r.height=this.height),(this.minWidth||this.minWidth===0)&&(r.minWidth=this.minWidth),(this.minHeight||this.minHeight===0)&&(r.minHeight=this.minHeight),this.backdropClass&&(r.backdropClass=this.backdropClass),this.panelClass&&(r.panelClass=this.panelClass),r}_updatePositionStrategy(e){let r=this.positions.map(i=>({originX:i.originX,originY:i.originY,overlayX:i.overlayX,overlayY:i.overlayY,offsetX:i.offsetX||this.offsetX,offsetY:i.offsetY||this.offsetY,panelClass:i.panelClass||void 0}));return e.setOrigin(this._getOrigin()).withPositions(r).withFlexibleDimensions(this.flexibleDimensions).withPush(this.push).withGrowAfterOpen(this.growAfterOpen).withViewportMargin(this.viewportMargin).withLockedPosition(this.lockPosition).withTransformOriginOn(this.transformOriginSelector).withPopoverLocation(this.usePopover===null?`global`:this.usePopover)}_createPositionStrategy(){let e=Vo(this._injector,this._getOrigin());return this._updatePositionStrategy(e),e}_getOrigin(){return this.origin instanceof rs?this.origin.elementRef:this.origin}_getOriginElement(){return this.origin instanceof rs?this.origin.elementRef.nativeElement:this.origin instanceof N?this.origin.nativeElement:typeof Element<`u`&&this.origin instanceof Element?this.origin:null}_getWidth(){return this.width?this.width:this.matchWidth?this._getOriginElement()?.getBoundingClientRect?.().width:void 0}attachOverlay(){this._overlayRef||this._createOverlay();let e=this._overlayRef;e.getConfig().hasBackdrop=this.hasBackdrop,e.updateSize({width:this._getWidth()}),e.hasAttached()||e.attach(this._templatePortal),this.hasBackdrop?this._backdropSubscription=e.backdropClick().subscribe(r=>this.backdropClick.emit(r)):this._backdropSubscription.unsubscribe(),this._positionSubscription.unsubscribe(),this.positionChange.observers.length>0&&(this._positionSubscription=this._position.positionChanges.pipe(fp(()=>this.positionChange.observers.length>0)).subscribe(r=>{this._ngZone.run(()=>this.positionChange.emit(r)),this.positionChange.observers.length===0&&this._positionSubscription.unsubscribe()})),this.open=!0}detachOverlay(){this._overlayRef?.detach(),this._backdropSubscription.unsubscribe(),this._positionSubscription.unsubscribe(),this.open=!1}_assignConfig(e){this.origin=e.origin??this.origin,this.positions=e.positions??this.positions,this.positionStrategy=e.positionStrategy??this.positionStrategy,this.offsetX=e.offsetX??this.offsetX,this.offsetY=e.offsetY??this.offsetY,this.width=e.width??this.width,this.height=e.height??this.height,this.minWidth=e.minWidth??this.minWidth,this.minHeight=e.minHeight??this.minHeight,this.backdropClass=e.backdropClass??this.backdropClass,this.panelClass=e.panelClass??this.panelClass,this.viewportMargin=e.viewportMargin??this.viewportMargin,this.scrollStrategy=e.scrollStrategy??this.scrollStrategy,this.disableClose=e.disableClose??this.disableClose,this.transformOriginSelector=e.transformOriginSelector??this.transformOriginSelector,this.hasBackdrop=e.hasBackdrop??this.hasBackdrop,this.lockPosition=e.lockPosition??this.lockPosition,this.flexibleDimensions=e.flexibleDimensions??this.flexibleDimensions,this.growAfterOpen=e.growAfterOpen??this.growAfterOpen,this.push=e.push??this.push,this.disposeOnNavigation=e.disposeOnNavigation??this.disposeOnNavigation,this.usePopover=e.usePopover??this.usePopover,this.matchWidth=e.matchWidth??this.matchWidth}static ɵfac=function(r){return new(r||t)};static ɵdir=w({type:t,selectors:[[``,`cdk-connected-overlay`,``],[``,`connected-overlay`,``],[``,`cdkConnectedOverlay`,``]],inputs:{origin:[0,`cdkConnectedOverlayOrigin`,`origin`],positions:[0,`cdkConnectedOverlayPositions`,`positions`],positionStrategy:[0,`cdkConnectedOverlayPositionStrategy`,`positionStrategy`],offsetX:[0,`cdkConnectedOverlayOffsetX`,`offsetX`],offsetY:[0,`cdkConnectedOverlayOffsetY`,`offsetY`],width:[0,`cdkConnectedOverlayWidth`,`width`],height:[0,`cdkConnectedOverlayHeight`,`height`],minWidth:[0,`cdkConnectedOverlayMinWidth`,`minWidth`],minHeight:[0,`cdkConnectedOverlayMinHeight`,`minHeight`],backdropClass:[0,`cdkConnectedOverlayBackdropClass`,`backdropClass`],panelClass:[0,`cdkConnectedOverlayPanelClass`,`panelClass`],viewportMargin:[0,`cdkConnectedOverlayViewportMargin`,`viewportMargin`],scrollStrategy:[0,`cdkConnectedOverlayScrollStrategy`,`scrollStrategy`],open:[0,`cdkConnectedOverlayOpen`,`open`],disableClose:[0,`cdkConnectedOverlayDisableClose`,`disableClose`],transformOriginSelector:[0,`cdkConnectedOverlayTransformOriginOn`,`transformOriginSelector`],hasBackdrop:[2,`cdkConnectedOverlayHasBackdrop`,`hasBackdrop`,I],lockPosition:[2,`cdkConnectedOverlayLockPosition`,`lockPosition`,I],flexibleDimensions:[2,`cdkConnectedOverlayFlexibleDimensions`,`flexibleDimensions`,I],growAfterOpen:[2,`cdkConnectedOverlayGrowAfterOpen`,`growAfterOpen`,I],push:[2,`cdkConnectedOverlayPush`,`push`,I],disposeOnNavigation:[2,`cdkConnectedOverlayDisposeOnNavigation`,`disposeOnNavigation`,e=>e===`url-change`||e===`pop-state`?e:I(e)],usePopover:[0,`cdkConnectedOverlayUsePopover`,`usePopover`],matchWidth:[2,`cdkConnectedOverlayMatchWidth`,`matchWidth`,I],_config:[0,`cdkConnectedOverlay`,`_config`]},outputs:{backdropClick:`backdropClick`,positionChange:`positionChange`,attach:`attach`,detach:`detach`,overlayKeydown:`overlayKeydown`,overlayOutsideClick:`overlayOutsideClick`},exportAs:[`cdkConnectedOverlay`],features:[Se]})}return t})();var bn=(()=>{class t{static ɵfac=function(r){return new(r||t)};static ɵmod=R({type:t});static ɵinj=A({providers:[gE],imports:[ve,er,rc,rc]})}return t})();var EP=20;var kP=new g(`mat-tooltip-scroll-strategy`,{providedIn:`root`,factory:()=>{let t=u(B);return()=>ai(t,{scrollThrottle:EP})}});var MP=new g(`mat-tooltip-default-options`,{providedIn:`root`,factory:()=>({showDelay:0,hideDelay:0,touchendHideDelay:1500})});var yE=`tooltip-panel`;var IP={passive:!0};var NP=8;var TP=8;var AP=24;var RP=200;var Qm=(()=>{class t{_elementRef=u(N);_ngZone=u(T);_platform=u(xe);_ariaDescriber=u(Vm);_focusMonitor=u(Tn);_dir=u(lt);_injector=u(B);_viewContainerRef=u(et);_mediaMatcher=u(Wa);_document=u(z);_renderer=u(ke);_animationsDisabled=ze();_defaultOptions=u(MP,{optional:!0});_overlayRef=null;_tooltipInstance=null;_overlayPanelClass;_portal;_position=`below`;_positionAtOrigin=!1;_disabled=!1;_tooltipClass;_viewInitialized=!1;_pointerExitEventsInitialized=!1;_tooltipComponent=OP;_viewportMargin=8;_currentPosition;_cssClassPrefix=`mat-mdc`;_ariaDescriptionPending=!1;_dirSubscribed=!1;get position(){return this._position}set position(e){e!==this._position&&(this._position=e,this._overlayRef&&(this._updatePosition(this._overlayRef),this._tooltipInstance?.show(0),this._overlayRef.updatePosition()))}get positionAtOrigin(){return this._positionAtOrigin}set positionAtOrigin(e){this._positionAtOrigin=ri(e),this._detach(),this._overlayRef=null}get disabled(){return this._disabled}set disabled(e){let r=ri(e);this._disabled!==r&&(this._disabled=r,r?this.hide(0):this._setupPointerEnterEventsIfNeeded(),this._syncAriaDescription(this.message))}get showDelay(){return this._showDelay}set showDelay(e){this._showDelay=hn(e)}_showDelay;get hideDelay(){return this._hideDelay}set hideDelay(e){this._hideDelay=hn(e),this._tooltipInstance&&(this._tooltipInstance._mouseLeaveHideDelay=this._hideDelay)}_hideDelay;touchGestures=`auto`;get message(){return this._message}set message(e){let r=this._message;this._message=e!=null?String(e).trim():``,!this._message&&this._isTooltipVisible()?this.hide(0):(this._setupPointerEnterEventsIfNeeded(),this._updateTooltipMessage()),this._syncAriaDescription(r)}_message=``;get tooltipClass(){return this._tooltipClass}set tooltipClass(e){this._tooltipClass=e,this._tooltipInstance&&this._setTooltipClass(this._tooltipClass)}_eventCleanups=[];_touchstartTimeout=null;_destroyed=new _;_isDestroyed=!1;constructor(){let e=this._defaultOptions;e&&(this._showDelay=e.showDelay,this._hideDelay=e.hideDelay,e.position&&(this.position=e.position),e.positionAtOrigin&&(this.positionAtOrigin=e.positionAtOrigin),e.touchGestures&&(this.touchGestures=e.touchGestures),e.tooltipClass&&(this.tooltipClass=e.tooltipClass)),this._viewportMargin=NP}ngAfterViewInit(){this._viewInitialized=!0,this._setupPointerEnterEventsIfNeeded(),this._focusMonitor.monitor(this._elementRef).pipe(De(this._destroyed)).subscribe(e=>{e?e===`keyboard`&&this._ngZone.run(()=>this.show()):this._ngZone.run(()=>this.hide(0))})}ngOnDestroy(){let e=this._elementRef.nativeElement;this._touchstartTimeout&&clearTimeout(this._touchstartTimeout),this._overlayRef&&(this._overlayRef.dispose(),this._tooltipInstance=null),this._eventCleanups.forEach(r=>r()),this._eventCleanups.length=0,this._destroyed.next(),this._destroyed.complete(),this._isDestroyed=!0,this._ariaDescriber.removeDescription(e,this.message,`tooltip`),this._focusMonitor.stopMonitoring(e)}show(e=this.showDelay,r){if(this.disabled||!this.message||this._isTooltipVisible()){this._tooltipInstance?._cancelPendingAnimations();return}let i=this._createOverlay(r);this._detach(),this._portal=this._portal||new sn(this._tooltipComponent,this._viewContainerRef);let o=this._tooltipInstance=i.attach(this._portal).instance;o._triggerElement=this._elementRef.nativeElement,o._mouseLeaveHideDelay=this._hideDelay,o.afterHidden().pipe(De(this._destroyed)).subscribe(()=>this._detach()),this._setTooltipClass(this._tooltipClass),this._updateTooltipMessage(),o.show(e)}hide(e=this.hideDelay){let r=this._tooltipInstance;r&&(r.isVisible()?r.hide(e):(r._cancelPendingAnimations(),this._detach()))}toggle(e){this._isTooltipVisible()?this.hide():this.show(void 0,e)}_isTooltipVisible(){return!!this._tooltipInstance&&this._tooltipInstance.isVisible()}_createOverlay(e){if(this._overlayRef){let a=this._overlayRef.getConfig().positionStrategy;if((!this.positionAtOrigin||!e)&&a._origin instanceof N)return this._overlayRef;this._detach()}let r=this._injector.get(es).getAncestorScrollContainers(this._elementRef),i=`${this._cssClassPrefix}-${yE}`,o=Vo(this._injector,this.positionAtOrigin?e||this._elementRef:this._elementRef).withTransformOriginOn(`.${this._cssClassPrefix}-tooltip`).withFlexibleDimensions(!1).withViewportMargin(this._viewportMargin).withScrollableContainers(r).withPopoverLocation(`global`);return o.positionChanges.pipe(De(this._destroyed)).subscribe(a=>{this._updateCurrentPositionClass(a.connectionPair),this._tooltipInstance&&a.scrollableViewProperties.isOverlayClipped&&this._tooltipInstance.isVisible()&&this._ngZone.run(()=>this.hide(0))}),this._overlayRef=nr(this._injector,{direction:this._dir,positionStrategy:o,panelClass:this._overlayPanelClass?[...this._overlayPanelClass,i]:i,scrollStrategy:this._injector.get(kP)(),disableAnimations:this._animationsDisabled,eventPredicate:this._overlayEventPredicate}),this._updatePosition(this._overlayRef),this._overlayRef.detachments().pipe(De(this._destroyed)).subscribe(()=>this._detach()),this._overlayRef.outsidePointerEvents().pipe(De(this._destroyed)).subscribe(()=>this._tooltipInstance?._handleBodyInteraction()),this._overlayRef.keydownEvents().pipe(De(this._destroyed)).subscribe(a=>{a.preventDefault(),a.stopPropagation(),this._ngZone.run(()=>this.hide(0))}),this._defaultOptions?.disableTooltipInteractivity&&this._overlayRef.addPanelClass(`${this._cssClassPrefix}-tooltip-panel-non-interactive`),this._dirSubscribed||(this._dirSubscribed=!0,this._dir.change.pipe(De(this._destroyed)).subscribe(()=>{this._overlayRef&&this._updatePosition(this._overlayRef)})),this._overlayRef}_detach(){this._overlayRef&&this._overlayRef.hasAttached()&&this._overlayRef.detach(),this._tooltipInstance=null}_updatePosition(e){let r=e.getConfig().positionStrategy,i=this._getOrigin(),o=this._getOverlayPosition();r.withPositions([this._addOffset(b(b({},i.main),o.main)),this._addOffset(b(b({},i.fallback),o.fallback))])}_addOffset(e){let r=TP,i=!this._dir||this._dir.value==`ltr`;return e.originY===`top`?e.offsetY=-r:e.originY===`bottom`?e.offsetY=r:e.originX===`start`?e.offsetX=i?-r:r:e.originX===`end`&&(e.offsetX=i?r:-r),e}_getOrigin(){let e=!this._dir||this._dir.value==`ltr`,r=this.position,i;r==`above`||r==`below`?i={originX:`center`,originY:r==`above`?`top`:`bottom`}:r==`before`||r==`left`&&e||r==`right`&&!e?i={originX:`start`,originY:`center`}:(r==`after`||r==`right`&&e||r==`left`&&!e)&&(i={originX:`end`,originY:`center`});let{x:o,y:a}=this._invertPosition(i.originX,i.originY);return{main:i,fallback:{originX:o,originY:a}}}_getOverlayPosition(){let e=!this._dir||this._dir.value==`ltr`,r=this.position,i;r==`above`?i={overlayX:`center`,overlayY:`bottom`}:r==`below`?i={overlayX:`center`,overlayY:`top`}:r==`before`||r==`left`&&e||r==`right`&&!e?i={overlayX:`end`,overlayY:`center`}:(r==`after`||r==`right`&&e||r==`left`&&!e)&&(i={overlayX:`start`,overlayY:`center`});let{x:o,y:a}=this._invertPosition(i.overlayX,i.overlayY);return{main:i,fallback:{overlayX:o,overlayY:a}}}_updateTooltipMessage(){this._tooltipInstance&&(this._tooltipInstance.message=this.message,this._tooltipInstance._markForCheck(),Ge(()=>{this._tooltipInstance&&this._overlayRef.updatePosition()},{injector:this._injector}))}_setTooltipClass(e){this._tooltipInstance&&(this._tooltipInstance.tooltipClass=e instanceof Set?Array.from(e):e,this._tooltipInstance._markForCheck())}_invertPosition(e,r){return this.position===`above`||this.position===`below`?r===`top`?r=`bottom`:r===`bottom`&&(r=`top`):e===`end`?e=`start`:e===`start`&&(e=`end`),{x:e,y:r}}_updateCurrentPositionClass(e){let{overlayY:r,originX:i,originY:o}=e,a;if(r===`center`?this._dir&&this._dir.value===`rtl`?a=i===`end`?`left`:`right`:a=i===`start`?`left`:`right`:a=r===`bottom`&&o===`top`?`above`:`below`,a!==this._currentPosition){let s=this._overlayRef;if(s){let l=`${this._cssClassPrefix}-${yE}-`;s.removePanelClass(l+this._currentPosition),s.addPanelClass(l+a)}this._currentPosition=a}}_setupPointerEnterEventsIfNeeded(){this._disabled||!this.message||!this._viewInitialized||this._eventCleanups.length||(this._isTouchPlatform()?this.touchGestures!==`off`&&(this._disableNativeGesturesIfNecessary(),this._addListener(`touchstart`,e=>{let r=e.targetTouches?.[0],i=r?{x:r.clientX,y:r.clientY}:void 0;this._setupPointerExitEventsIfNeeded(),this._touchstartTimeout&&clearTimeout(this._touchstartTimeout);let o=500;this._touchstartTimeout=setTimeout(()=>{this._touchstartTimeout=null,this.show(void 0,i)},this._defaultOptions?.touchLongPressShowDelay??o)})):this._addListener(`mouseenter`,e=>{this._setupPointerExitEventsIfNeeded();let r;e.x!==void 0&&e.y!==void 0&&(r=e),this.show(void 0,r)}))}_setupPointerExitEventsIfNeeded(){if(!this._pointerExitEventsInitialized){if(this._pointerExitEventsInitialized=!0,!this._isTouchPlatform())this._addListener(`mouseleave`,e=>{let r=e.relatedTarget;(!r||!this._overlayRef?.overlayElement.contains(r))&&this.hide()}),this._addListener(`wheel`,e=>{if(this._isTooltipVisible()){let r=this._document.elementFromPoint(e.clientX,e.clientY),i=this._elementRef.nativeElement;r!==i&&!i.contains(r)&&this.hide()}});else if(this.touchGestures!==`off`){this._disableNativeGesturesIfNecessary();let e=()=>{this._touchstartTimeout&&clearTimeout(this._touchstartTimeout),this.hide(this._defaultOptions?.touchendHideDelay)};this._addListener(`touchend`,e),this._addListener(`touchcancel`,e)}}}_addListener(e,r){this._eventCleanups.push(this._renderer.listen(this._elementRef.nativeElement,e,r,IP))}_isTouchPlatform(){let e=this._defaultOptions?.detectHoverCapability;return typeof e==`function`?!e():this._platform.IOS||this._platform.ANDROID?!0:this._platform.isBrowser?!!e&&this._mediaMatcher.matchMedia(`(any-hover: none)`).matches:!1}_disableNativeGesturesIfNecessary(){let e=this.touchGestures;if(e!==`off`){let r=this._elementRef.nativeElement,i=r.style;(e===`on`||r.nodeName!==`INPUT`&&r.nodeName!==`TEXTAREA`)&&(i.userSelect=i.msUserSelect=i.webkitUserSelect=i.MozUserSelect=`none`),(e===`on`||!r.draggable)&&(i.webkitUserDrag=`none`),i.touchAction=`none`,i.webkitTapHighlightColor=`transparent`}}_syncAriaDescription(e){this._ariaDescriptionPending||(this._ariaDescriptionPending=!0,this._ariaDescriber.removeDescription(this._elementRef.nativeElement,e,`tooltip`),this._isDestroyed||Ge({write:()=>{this._ariaDescriptionPending=!1,this.message&&!this.disabled&&this._ariaDescriber.describe(this._elementRef.nativeElement,this.message,`tooltip`)}},{injector:this._injector}))}_overlayEventPredicate=e=>e.type===`keydown`?this._isTooltipVisible()&&e.keyCode===27&&!tt(e):!0;static ɵfac=function(r){return new(r||t)};static ɵdir=w({type:t,selectors:[[``,`matTooltip`,``]],hostAttrs:[1,`mat-mdc-tooltip-trigger`],hostVars:2,hostBindings:function(r,i){r&2&&G(`mat-mdc-tooltip-disabled`,i.disabled)},inputs:{position:[0,`matTooltipPosition`,`position`],positionAtOrigin:[0,`matTooltipPositionAtOrigin`,`positionAtOrigin`],disabled:[0,`matTooltipDisabled`,`disabled`],showDelay:[0,`matTooltipShowDelay`,`showDelay`],hideDelay:[0,`matTooltipHideDelay`,`hideDelay`],touchGestures:[0,`matTooltipTouchGestures`,`touchGestures`],message:[0,`matTooltip`,`message`],tooltipClass:[0,`matTooltipClass`,`tooltipClass`]},exportAs:[`matTooltip`]})}return t})();var OP=(()=>{class t{_changeDetectorRef=u(Ce);_elementRef=u(N);_isMultiline=!1;message;tooltipClass;_showTimeoutId;_hideTimeoutId;_triggerElement;_mouseLeaveHideDelay;_animationsDisabled=ze();_tooltip;_closeOnInteraction=!1;_isVisible=!1;_onHide=new _;_showAnimation=`mat-mdc-tooltip-show`;_hideAnimation=`mat-mdc-tooltip-hide`;show(e){this._hideTimeoutId!=null&&clearTimeout(this._hideTimeoutId),this._showTimeoutId=setTimeout(()=>{this._toggleVisibility(!0),this._showTimeoutId=void 0},e)}hide(e){this._showTimeoutId!=null&&clearTimeout(this._showTimeoutId),this._hideTimeoutId=setTimeout(()=>{this._toggleVisibility(!1),this._hideTimeoutId=void 0},e)}afterHidden(){return this._onHide}isVisible(){return this._isVisible}ngOnDestroy(){this._cancelPendingAnimations(),this._onHide.complete(),this._triggerElement=null}_handleBodyInteraction(){this._closeOnInteraction&&this.hide(0)}_markForCheck(){this._changeDetectorRef.markForCheck()}_handleMouseLeave({relatedTarget:e}){(!e||!this._triggerElement.contains(e))&&(this.isVisible()?this.hide(this._mouseLeaveHideDelay):this._finalizeAnimation(!1))}_onShow(){this._isMultiline=this._isTooltipMultiline(),this._markForCheck()}_isTooltipMultiline(){let e=this._elementRef.nativeElement.getBoundingClientRect();return e.height>AP&&e.width>=RP}_handleAnimationEnd({animationName:e}){(e===this._showAnimation||e===this._hideAnimation)&&this._finalizeAnimation(e===this._showAnimation)}_cancelPendingAnimations(){this._showTimeoutId!=null&&clearTimeout(this._showTimeoutId),this._hideTimeoutId!=null&&clearTimeout(this._hideTimeoutId),this._showTimeoutId=this._hideTimeoutId=void 0}_finalizeAnimation(e){e?this._closeOnInteraction=!0:this.isVisible()||this._onHide.next()}_toggleVisibility(e){let r=this._tooltip.nativeElement,i=this._showAnimation,o=this._hideAnimation;if(r.classList.remove(e?o:i),r.classList.add(e?i:o),this._isVisible!==e&&(this._isVisible=e,this._changeDetectorRef.markForCheck()),e&&!this._animationsDisabled&&typeof getComputedStyle==`function`){let a=getComputedStyle(r);(a.getPropertyValue(`animation-duration`)===`0s`||a.getPropertyValue(`animation-name`)===`none`)&&(this._animationsDisabled=!0)}e&&this._onShow(),this._animationsDisabled&&(r.classList.add(`_mat-animation-noopable`),this._finalizeAnimation(e))}static ɵfac=function(r){return new(r||t)};static ɵcmp=(function(){let e=[`tooltip`];return F({type:t,selectors:[[`mat-tooltip-component`]],viewQuery:function(i,o){if(i&1&&qe(e,7),i&2){let a;H(a=U())&&(o._tooltip=a.first)}},hostAttrs:[`aria-hidden`,`true`],hostBindings:function(i,o){i&1&&Q(`mouseleave`,function(s){return o._handleMouseLeave(s)})},decls:4,vars:5,consts:[[`tooltip`,``],[1,`mdc-tooltip`,`mat-mdc-tooltip`,3,`animationend`],[1,`mat-mdc-tooltip-surface`,`mdc-tooltip__surface`]],template:function(i,o){i&1&&(Re(0,`div`,1,0),Na(`animationend`,function(s){return o._handleAnimationEnd(s)}),Re(2,`div`,2),Ne(3),Oe()()),i&2&&(Ot(o.tooltipClass),G(`mdc-tooltip--multiline`,o._isMultiline),y(3),Ft(o.message))},styles:[`.mat-mdc-tooltip {
  position: relative;
  transform: scale(0);
  display: inline-flex;
}
.mat-mdc-tooltip::before {
  content: "";
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: -1;
  position: absolute;
}
.mat-mdc-tooltip-panel-below .mat-mdc-tooltip::before {
  top: -8px;
}
.mat-mdc-tooltip-panel-above .mat-mdc-tooltip::before {
  bottom: -8px;
}
.mat-mdc-tooltip-panel-right .mat-mdc-tooltip::before {
  left: -8px;
}
.mat-mdc-tooltip-panel-left .mat-mdc-tooltip::before {
  right: -8px;
}
.mat-mdc-tooltip._mat-animation-noopable {
  animation: none;
  transform: scale(1);
}

.mat-mdc-tooltip-surface {
  word-break: normal;
  overflow-wrap: anywhere;
  padding: 4px 8px;
  min-width: 40px;
  max-width: 200px;
  min-height: 24px;
  max-height: 40vh;
  box-sizing: border-box;
  overflow: hidden;
  text-align: center;
  will-change: transform, opacity;
  background-color: var(--%NS%mat-tooltip-container-color, var(--%NS%mat-sys-inverse-surface));
  color: var(--%NS%mat-tooltip-supporting-text-color, var(--%NS%mat-sys-inverse-on-surface));
  border-radius: var(--%NS%mat-tooltip-container-shape, var(--%NS%mat-sys-corner-extra-small));
  font-family: var(--%NS%mat-tooltip-supporting-text-font, var(--%NS%mat-sys-body-small-font));
  font-size: var(--%NS%mat-tooltip-supporting-text-size, var(--%NS%mat-sys-body-small-size));
  font-weight: var(--%NS%mat-tooltip-supporting-text-weight, var(--%NS%mat-sys-body-small-weight));
  line-height: var(--%NS%mat-tooltip-supporting-text-line-height, var(--%NS%mat-sys-body-small-line-height));
  letter-spacing: var(--%NS%mat-tooltip-supporting-text-tracking, var(--%NS%mat-sys-body-small-tracking));
}
.mat-mdc-tooltip-surface::before {
  position: absolute;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  border: 1px solid transparent;
  border-radius: inherit;
  content: "";
  pointer-events: none;
}
.mdc-tooltip--multiline .mat-mdc-tooltip-surface {
  text-align: left;
}
[dir=rtl] .mdc-tooltip--multiline .mat-mdc-tooltip-surface {
  text-align: right;
}

.mat-mdc-tooltip-panel {
  line-height: normal;
}
.mat-mdc-tooltip-panel.mat-mdc-tooltip-panel-non-interactive {
  pointer-events: none;
}

@keyframes mat-mdc-tooltip-show {
  0% {
    opacity: 0;
    transform: scale(0.8);
  }
  100% {
    opacity: 1;
    transform: scale(1);
  }
}
@keyframes mat-mdc-tooltip-hide {
  0% {
    opacity: 1;
    transform: scale(1);
  }
  100% {
    opacity: 0;
    transform: scale(0.8);
  }
}
.mat-mdc-tooltip-show {
  animation: mat-mdc-tooltip-show 150ms cubic-bezier(0, 0, 0.2, 1) forwards;
}

.mat-mdc-tooltip-hide {
  animation: mat-mdc-tooltip-hide 75ms cubic-bezier(0.4, 0, 1, 1) forwards;
}
`],encapsulation:2})})()}return t})();var Xm=new g(`MAT_INPUT_VALUE_ACCESSOR`);var _E=Symbol(`FIELD_TREE`);function sc(t){return typeof t==`function`&&t[_E]===!0}var Jm=new g(``);var Ty=class{_box;_destroyed=new _;_resizeSubject=new _;_resizeObserver;_elementObservables=new Map;constructor(n){this._box=n,typeof ResizeObserver<`u`&&(this._resizeObserver=new ResizeObserver(e=>this._resizeSubject.next(e)))}observe(n){return this._elementObservables.has(n)||this._elementObservables.set(n,new ie(e=>{let r=this._resizeSubject.subscribe(e);return this._resizeObserver?.observe(n,{box:this._box}),()=>{this._resizeObserver?.unobserve(n),r.unsubscribe(),this._elementObservables.delete(n)}}).pipe(Ee(e=>e.some(r=>r.target===n)),Cd({bufferSize:1,refCount:!0}),De(this._destroyed))),this._elementObservables.get(n)}destroy(){this._destroyed.next(),this._destroyed.complete(),this._resizeSubject.complete(),this._elementObservables.clear()}};var wE=(()=>{class t{_cleanupErrorListener;_observers=new Map;_ngZone=u(T);constructor(){}ngOnDestroy(){for(let[,e]of this._observers)e.destroy();this._observers.clear(),this._cleanupErrorListener?.()}observe(e,r){let i=r?.box||`content-box`;return this._observers.has(i)||this._observers.set(i,new Ty(i)),this._observers.get(i).observe(e)}static ɵfac=function(r){return new(r||t)};static ɵprov=S({token:t,factory:t.ɵfac})}return t})();var Ay=(()=>{class t{static ɵfac=function(r){return new(r||t)};static ɵdir=w({type:t,selectors:[[`mat-label`]]})}return t})();var IE=new g(`MatError`);var FP=(()=>{class t{id=u(Fe).getId(`mat-mdc-error-`);static ɵfac=function(r){return new(r||t)};static ɵdir=w({type:t,selectors:[[`mat-error`],[``,`matError`,``]],hostAttrs:[1,`mat-mdc-form-field-error`,`mat-mdc-form-field-bottom-align`],hostVars:1,hostBindings:function(r,i){r&2&&yt(`id`,i.id)},inputs:{id:`id`},features:[ye([{provide:IE,useExisting:t}])]})}return t})();var Ry=(()=>{class t{align=`start`;id=u(Fe).getId(`mat-mdc-hint-`);static ɵfac=function(r){return new(r||t)};static ɵdir=w({type:t,selectors:[[`mat-hint`]],hostAttrs:[1,`mat-mdc-form-field-hint`,`mat-mdc-form-field-bottom-align`],hostVars:4,hostBindings:function(r,i){r&2&&(yt(`id`,i.id),Y(`align`,null),G(`mat-mdc-form-field-hint-end`,i.align===`end`))},inputs:{align:`align`,id:`id`}})}return t})();var PP=new g(`MatPrefix`);var NE=new g(`MatSuffix`);var LP=(()=>{class t{set _isTextSelector(e){this._isText=!0}_isText=!1;static ɵfac=function(r){return new(r||t)};static ɵdir=w({type:t,selectors:[[``,`matSuffix`,``],[``,`matIconSuffix`,``],[``,`matTextSuffix`,``]],inputs:{_isTextSelector:[0,`matTextSuffix`,`_isTextSelector`]},features:[ye([{provide:NE,useExisting:t}])]})}return t})();var TE=new g(`FloatingLabelParent`);var xE=(()=>{class t{_elementRef=u(N);get floating(){return this._floating}set floating(e){this._floating=e,this.monitorResize&&this._handleResize()}_floating=!1;get monitorResize(){return this._monitorResize}set monitorResize(e){this._monitorResize=e,this._monitorResize?this._subscribeToResize():this._resizeSubscription.unsubscribe()}_monitorResize=!1;_resizeObserver=u(wE);_ngZone=u(T);_parent=u(TE);_resizeSubscription=new ne;ngOnDestroy(){this._resizeSubscription.unsubscribe()}getWidth(){return VP(this._elementRef.nativeElement)}get element(){return this._elementRef.nativeElement}_handleResize(){setTimeout(()=>this._parent._handleLabelResized())}_subscribeToResize(){this._resizeSubscription.unsubscribe(),this._ngZone.runOutsideAngular(()=>{this._resizeSubscription=this._resizeObserver.observe(this._elementRef.nativeElement,{box:`border-box`}).subscribe(()=>this._handleResize())})}static ɵfac=function(r){return new(r||t)};static ɵdir=w({type:t,selectors:[[`label`,`matFormFieldFloatingLabel`,``]],hostAttrs:[1,`mdc-floating-label`,`mat-mdc-floating-label`],hostVars:2,hostBindings:function(r,i){r&2&&G(`mdc-floating-label--float-above`,i.floating)},inputs:{floating:`floating`,monitorResize:`monitorResize`}})}return t})();function VP(t){let n=t;if(n.offsetParent!==null)return n.scrollWidth;let e=n.cloneNode(!0);e.style.setProperty(`position`,`absolute`),e.style.setProperty(`transform`,`translate(-9999px, -9999px)`),document.documentElement.appendChild(e);let r=e.scrollWidth;return e.remove(),r}var DE=`mdc-line-ripple--active`;var ef=`mdc-line-ripple--deactivating`;var SE=(()=>{class t{_elementRef=u(N);_cleanupTransitionEnd;constructor(){let e=u(T),r=u(ke);e.runOutsideAngular(()=>{this._cleanupTransitionEnd=r.listen(this._elementRef.nativeElement,`transitionend`,this._handleTransitionEnd)})}activate(){let e=this._elementRef.nativeElement.classList;e.remove(ef),e.add(DE)}deactivate(){this._elementRef.nativeElement.classList.add(ef)}_handleTransitionEnd=e=>{let r=this._elementRef.nativeElement.classList,i=r.contains(ef);e.propertyName===`opacity`&&i&&r.remove(DE,ef)};ngOnDestroy(){this._cleanupTransitionEnd()}static ɵfac=function(r){return new(r||t)};static ɵdir=w({type:t,selectors:[[`div`,`matFormFieldLineRipple`,``]],hostAttrs:[1,`mdc-line-ripple`]})}return t})();var EE=(()=>{class t{_elementRef=u(N);_ngZone=u(T);open=!1;_notch;ngAfterViewInit(){let e=this._elementRef.nativeElement,r=e.querySelector(`.mdc-floating-label`);r?(e.classList.add(`mdc-notched-outline--upgraded`),typeof requestAnimationFrame==`function`&&(r.style.transitionDuration=`0s`,this._ngZone.runOutsideAngular(()=>{requestAnimationFrame(()=>r.style.transitionDuration=``)}))):e.classList.add(`mdc-notched-outline--no-label`)}_setNotchWidth(e){let r=this._notch.nativeElement;!this.open||!e?r.style.width=``:r.style.width=`calc(${e}px * var(--mat-mdc-form-field-floating-label-scale, 0.75) + 9px)`}_setMaxWidth(e){this._notch.nativeElement.style.setProperty(`--mat-form-field-notch-max-width`,`calc(100% - ${e}px)`)}static ɵfac=function(r){return new(r||t)};static ɵcmp=(function(){let e=[`notch`];return F({type:t,selectors:[[`div`,`matFormFieldNotchedOutline`,``]],viewQuery:function(o,a){if(o&1&&qe(e,5),o&2){let s;H(s=U())&&(a._notch=s.first)}},hostAttrs:[1,`mdc-notched-outline`],hostVars:2,hostBindings:function(o,a){o&2&&G(`mdc-notched-outline--notched`,a.open)},inputs:{open:[0,`matFormFieldNotchedOutlineOpen`,`open`]},ngContentSelectors:[`*`],decls:5,vars:0,consts:[[`notch`,``],[1,`mat-mdc-notch-piece`,`mdc-notched-outline__leading`],[1,`mat-mdc-notch-piece`,`mdc-notched-outline__notch`],[1,`mat-mdc-notch-piece`,`mdc-notched-outline__trailing`]],template:function(o,a){o&1&&(Me(),$t(0,`div`,1),Re(1,`div`,2,0),X(3),Oe(),$t(4,`div`,3))},encapsulation:2})})()}return t})();var is=(()=>{class t{id;ngField=null;ngControl=null;focused=!1;empty=!1;shouldLabelFloat=!1;required=!1;disabled=!1;errorState=!1;controlType;autofilled;userAriaDescribedBy;disableAutomaticLabeling;describedByIds;stateChanges=null;value;static ɵfac=function(r){return new(r||t)};static ɵdir=w({type:t})}return t})();var Bo=new g(`MatFormField`);var BP=new g(`MAT_FORM_FIELD_DEFAULT_OPTIONS`);var kE=`fill`;var jP=`auto`;var ME=`fixed`;var zP=`translateY(-50%)`;var tf=(()=>{class t{_elementRef=u(N);_changeDetectorRef=u(Ce);_platform=u(xe);_idGenerator=u(Fe);_ngZone=u(T);_defaults=u(BP,{optional:!0});_currentDirection;_unwrapMaybeSignal(e){return Ht(e)?e():e}_textField;_iconPrefixContainer;_textPrefixContainer;_iconSuffixContainer;_textSuffixContainer;_floatingLabel;_notchedOutline;_lineRipple;_iconPrefixContainerSignal=kl(`iconPrefixContainer`);_textPrefixContainerSignal=kl(`textPrefixContainer`);_iconSuffixContainerSignal=kl(`iconSuffixContainer`);_textSuffixContainerSignal=kl(`textSuffixContainer`);_prefixSuffixContainers=Xt(()=>[this._iconPrefixContainerSignal(),this._textPrefixContainerSignal(),this._iconSuffixContainerSignal(),this._textSuffixContainerSignal()].map(e=>e?.nativeElement).filter(e=>e!==void 0));_formFieldControl;_prefixChildren;_suffixChildren;_errorChildren;_hintChildren;_labelChild=QD(Ay);get hideRequiredMarker(){return this._hideRequiredMarker}set hideRequiredMarker(e){this._hideRequiredMarker=ri(e)}_hideRequiredMarker=!1;color=`primary`;get floatLabel(){return this._floatLabel||this._defaults?.floatLabel||jP}set floatLabel(e){e!==this._floatLabel&&(this._floatLabel=e,this._changeDetectorRef.markForCheck())}_floatLabel;get appearance(){return this._appearanceSignal()}set appearance(e){let r=e||this._defaults?.appearance||kE;this._appearanceSignal.set(r)}_appearanceSignal=L(kE);get subscriptSizing(){return this._subscriptSizing||this._defaults?.subscriptSizing||ME}set subscriptSizing(e){this._subscriptSizing=e||this._defaults?.subscriptSizing||ME}_subscriptSizing=null;get hintLabel(){return this._hintLabel}set hintLabel(e){this._hintLabel=e,this._processHints()}_hintLabel=``;_hasIconPrefix=!1;_hasTextPrefix=!1;_hasIconSuffix=!1;_hasTextSuffix=!1;_labelId=this._idGenerator.getId(`mat-mdc-form-field-label-`);_hintLabelId=this._idGenerator.getId(`mat-mdc-hint-`);_describedByIds;get _control(){return this._explicitFormFieldControl||this._formFieldControl}set _control(e){this._explicitFormFieldControl=e}_destroyed=new _;_isFocused=null;_explicitFormFieldControl;_previousControl=null;_previousControlValidatorFn=null;_stateChanges;_valueChanges;_describedByChanges;_outlineLabelOffsetResizeObserver=null;_animationsDisabled=ze();constructor(){let e=this._defaults,r=u(lt);e&&(e.appearance&&(this.appearance=e.appearance),this._hideRequiredMarker=!!e?.hideRequiredMarker,e.color&&(this.color=e.color)),mn(()=>this._currentDirection=r.valueSignal()),this._syncOutlineLabelOffset()}ngAfterViewInit(){this._updateFocusState(),this._animationsDisabled||this._ngZone.runOutsideAngular(()=>{setTimeout(()=>{this._elementRef.nativeElement.classList.add(`mat-form-field-animations-enabled`)},300)}),this._changeDetectorRef.detectChanges()}ngAfterContentInit(){this._assertFormFieldControl(),this._initializeSubscript(),this._initializePrefixAndSuffix()}ngAfterContentChecked(){this._assertFormFieldControl(),this._control!==this._previousControl&&(this._initializeControl(this._previousControl),this._control.ngControl&&this._control.ngControl.control&&(this._previousControlValidatorFn=sc(this._control.ngField)?null:this._control.ngControl.control.validator),this._previousControl=this._control,this._changeDetectorRef.markForCheck()),this._control.ngControl&&this._control.ngControl.control&&!sc(this._control.ngField)&&this._control.ngControl.control.validator!==this._previousControlValidatorFn&&this._changeDetectorRef.markForCheck()}ngOnDestroy(){this._outlineLabelOffsetResizeObserver?.disconnect(),this._stateChanges?.unsubscribe(),this._valueChanges?.unsubscribe(),this._describedByChanges?.unsubscribe(),this._destroyed.next(),this._destroyed.complete()}getLabelId=Xt(()=>this._hasFloatingLabel()?this._labelId:null);getConnectedOverlayOrigin(){return this._textField||this._elementRef}_animateAndLockLabel(){this._hasFloatingLabel()&&(this.floatLabel=`always`)}_initializeControl(e){let r=this._control,i=`mat-mdc-form-field-type-`;e&&this._elementRef.nativeElement.classList.remove(i+e.controlType),r.controlType&&this._elementRef.nativeElement.classList.add(i+r.controlType),this._stateChanges?.unsubscribe(),this._stateChanges=r.stateChanges?.subscribe(()=>{this._updateFocusState(),this._changeDetectorRef.markForCheck()}),this._describedByChanges?.unsubscribe(),this._describedByChanges=r.stateChanges?.pipe(_t([void 0,void 0]),oe(()=>[this._unwrapMaybeSignal(r.errorState),r.userAriaDescribedBy]),_d(),Ee(([[o,a],[s,l]])=>o!==s||a!==l)).subscribe(()=>this._syncDescribedByIds()),this._valueChanges?.unsubscribe(),r.ngControl&&r.ngControl.valueChanges&&!sc(r.ngField)&&(this._valueChanges=r.ngControl.valueChanges.pipe(De(this._destroyed)).subscribe(()=>this._changeDetectorRef.markForCheck()))}_checkPrefixAndSuffixTypes(){this._hasIconPrefix=!!this._prefixChildren.find(e=>!e._isText),this._hasTextPrefix=!!this._prefixChildren.find(e=>e._isText),this._hasIconSuffix=!!this._suffixChildren.find(e=>!e._isText),this._hasTextSuffix=!!this._suffixChildren.find(e=>e._isText)}_initializePrefixAndSuffix(){this._checkPrefixAndSuffixTypes(),Dt(this._prefixChildren.changes,this._suffixChildren.changes).subscribe(()=>{this._checkPrefixAndSuffixTypes(),this._changeDetectorRef.markForCheck()})}_initializeSubscript(){this._hintChildren.changes.subscribe(()=>{this._processHints(),this._changeDetectorRef.markForCheck()}),this._errorChildren.changes.subscribe(()=>{this._syncDescribedByIds(),this._changeDetectorRef.markForCheck()}),this._validateHints(),this._syncDescribedByIds()}_assertFormFieldControl(){this._control}_updateFocusState(){let e=this._unwrapMaybeSignal(this._control.focused);e&&!this._isFocused?(this._isFocused=!0,this._lineRipple?.activate()):!e&&(this._isFocused||this._isFocused===null)&&(this._isFocused=!1,this._lineRipple?.deactivate()),this._elementRef.nativeElement.classList.toggle(`mat-focused`,e),this._textField?.nativeElement.classList.toggle(`mdc-text-field--focused`,e)}_syncOutlineLabelOffset(){mb({earlyRead:()=>{if(this._appearanceSignal()!==`outline`)return this._outlineLabelOffsetResizeObserver?.disconnect(),null;if(globalThis.ResizeObserver){this._outlineLabelOffsetResizeObserver||=new globalThis.ResizeObserver(()=>{this._writeOutlinedLabelStyles(this._getOutlinedLabelOffset())});for(let e of this._prefixSuffixContainers())this._outlineLabelOffsetResizeObserver.observe(e,{box:`border-box`})}return this._getOutlinedLabelOffset()},write:e=>this._writeOutlinedLabelStyles(e())})}_shouldAlwaysFloat(){return this.floatLabel===`always`}_hasOutline(){return this.appearance===`outline`}_forceDisplayInfixLabel(){return!this._platform.isBrowser&&this._prefixChildren.length&&!this._shouldLabelFloat()}_hasFloatingLabel=Xt(()=>!!this._labelChild());_shouldLabelFloat(){return this._hasFloatingLabel()?this._shouldAlwaysFloat()||this._unwrapMaybeSignal(this._control.shouldLabelFloat):!1}_shouldForward(e){let r=this._control?.ngField||this._control?.ngControl;if(!r)return!1;if(sc(r)){let i=r();return e===`valid`?i.valid():e===`dirty`?i.dirty():e===`touched`?i.touched():e===`pending`?i.pending():e===`untouched`?!i.touched():e===`pristine`?!i.dirty():e===`invalid`?!i.valid():!1}else{let i=r;return e===`valid`?i.valid:e===`dirty`?i.dirty:e===`touched`?i.touched:e===`pending`?i.pending:e===`untouched`?i.untouched:e===`pristine`?i.pristine:e===`invalid`?i.invalid:!1}}_getSubscriptMessageType(){return this._errorChildren&&this._errorChildren.length>0&&this._unwrapMaybeSignal(this._control.errorState)?`error`:`hint`}_handleLabelResized(){this._refreshOutlineNotchWidth()}_refreshOutlineNotchWidth(){!this._hasOutline()||!this._floatingLabel||!this._shouldLabelFloat()?this._notchedOutline?._setNotchWidth(0):this._notchedOutline?._setNotchWidth(this._floatingLabel.getWidth())}_processHints(){this._validateHints(),this._syncDescribedByIds()}_validateHints(){this._hintChildren}_syncDescribedByIds(){if(this._control){let e=[];if(this._control.userAriaDescribedBy&&typeof this._control.userAriaDescribedBy==`string`&&e.push(...this._control.userAriaDescribedBy.split(` `)),this._getSubscriptMessageType()===`hint`){let o=this._hintChildren?this._hintChildren.find(s=>s.align===`start`):null,a=this._hintChildren?this._hintChildren.find(s=>s.align===`end`):null;o?e.push(o.id):this._hintLabel&&e.push(this._hintLabelId),a&&e.push(a.id)}else this._errorChildren&&e.push(...this._errorChildren.map(o=>o.id));let r=this._control.describedByIds,i;if(r){let o=this._describedByIds||e;i=e.concat(r.filter(a=>a&&!o.includes(a)))}else i=e;this._control.setDescribedByIds(i),this._describedByIds=e}}_getOutlinedLabelOffset(){if(!this._hasOutline()||!this._floatingLabel)return null;if(!this._iconPrefixContainer&&!this._textPrefixContainer)return[``,null];if(!this._isAttachedToDom())return null;let e=this._iconPrefixContainer?.nativeElement,r=this._textPrefixContainer?.nativeElement,i=this._iconSuffixContainer?.nativeElement,o=this._textSuffixContainer?.nativeElement,a=e?.getBoundingClientRect().width??0,s=r?.getBoundingClientRect().width??0,l=i?.getBoundingClientRect().width??0,c=o?.getBoundingClientRect().width??0;return[`var(--mat-mdc-form-field-label-transform, ${zP} translateX(${`calc(${this._currentDirection===`rtl`?`-1`:`1`} * (${`${a+s}px`} + var(--mat-mdc-form-field-label-offset-x, 0px)))`}))`,a+s+l+c]}_writeOutlinedLabelStyles(e){if(e!==null){let[r,i]=e;this._floatingLabel&&(this._floatingLabel.element.style.transform=r),i!==null&&this._notchedOutline?._setMaxWidth(i)}}_isAttachedToDom(){let e=this._elementRef.nativeElement;if(e.getRootNode){let r=e.getRootNode();return r&&r!==e}return document.documentElement.contains(e)}static ɵfac=function(r){return new(r||t)};static ɵcmp=(function(){let e=[`iconPrefixContainer`],r=[`textPrefixContainer`],i=[`iconSuffixContainer`],o=[`textSuffixContainer`],a=[`textField`],s=[`*`,[[`mat-label`]],[[``,`matPrefix`,``],[``,`matIconPrefix`,``]],[[``,`matTextPrefix`,``]],[[``,`matTextSuffix`,``]],[[``,`matSuffix`,``],[``,`matIconSuffix`,``]],[[`mat-error`],[``,`matError`,``]],[[`mat-hint`,3,`align`,`end`]],[[`mat-hint`,`align`,`end`]]],l=[`*`,`mat-label`,`[matPrefix], [matIconPrefix]`,`[matTextPrefix]`,`[matTextSuffix]`,`[matSuffix], [matIconSuffix]`,`mat-error, [matError]`,`mat-hint:not([align='end'])`,`mat-hint[align='end']`];function c(he,Pe){he&1&&we(0,`span`,21)}function d(he,Pe){if(he&1&&(C(0,`label`,20),X(1,1),le(2,c,1,0,`span`,21),E()),he&2){let x=J(2);ue(`floating`,x._shouldLabelFloat())(`monitorResize`,x._hasOutline())(`id`,x._labelId),Y(`for`,x._control.disableAutomaticLabeling?null:x._control.id),y(2),ce(!x.hideRequiredMarker&&x._unwrapMaybeSignal(x._control.required)?2:-1)}}function m(he,Pe){if(he&1&&le(0,d,3,5,`label`,20),he&2)ce(J()._hasFloatingLabel()?0:-1)}function p(he,Pe){he&1&&we(0,`div`,7)}function f(he,Pe){}function h(he,Pe){if(he&1&&wt(0,f,0,0,`ng-template`,13),he&2){J(2);ue(`ngTemplateOutlet`,gr(1))}}function v(he,Pe){if(he&1&&(C(0,`div`,9),le(1,h,1,1,null,13),E()),he&2){let x=J();ue(`matFormFieldNotchedOutlineOpen`,x._shouldLabelFloat()),y(),ce(x._forceDisplayInfixLabel()?-1:1)}}function M(he,Pe){he&1&&(C(0,`div`,10,2),X(2,2),E())}function V(he,Pe){he&1&&(C(0,`div`,11,3),X(2,3),E())}function O(he,Pe){}function pe(he,Pe){if(he&1&&wt(0,O,0,0,`ng-template`,13),he&2){J();ue(`ngTemplateOutlet`,gr(1))}}function Vt(he,Pe){he&1&&(C(0,`div`,14,4),X(2,4),E())}function ln(he,Pe){he&1&&(C(0,`div`,15,5),X(2,5),E())}function nt(he,Pe){he&1&&we(0,`div`,16)}function Bn(he,Pe){he&1&&(C(0,`div`,18),X(1,6),E())}function or(he,Pe){if(he&1&&(C(0,`mat-hint`,22),Ne(1),E()),he&2){let x=J(2);ue(`id`,x._hintLabelId),y(),Ft(x.hintLabel)}}function Cn(he,Pe){if(he&1&&(C(0,`div`,19),le(1,or,2,2,`mat-hint`,22),X(2,7),we(3,`div`,23),X(4,8),E()),he&2){let x=J();y(),ce(x.hintLabel?1:-1)}}return F({type:t,selectors:[[`mat-form-field`]],contentQueries:function(Pe,x,Be){if(Pe&1&&(zu(Be,x._labelChild,Ay,5),Mt(Be,is,5)(Be,PP,5)(Be,NE,5)(Be,IE,5)(Be,Ry,5)),Pe&2){Uu();let Kt;H(Kt=U())&&(x._formFieldControl=Kt.first),H(Kt=U())&&(x._prefixChildren=Kt),H(Kt=U())&&(x._suffixChildren=Kt),H(Kt=U())&&(x._errorChildren=Kt),H(Kt=U())&&(x._hintChildren=Kt)}},viewQuery:function(Pe,x){if(Pe&1&&(Hu(x._iconPrefixContainerSignal,e,5)(x._textPrefixContainerSignal,r,5)(x._iconSuffixContainerSignal,i,5)(x._textSuffixContainerSignal,o,5),qe(a,5)(e,5)(r,5)(i,5)(o,5)(xE,5)(EE,5)(SE,5)),Pe&2){Uu(4);let Be;H(Be=U())&&(x._textField=Be.first),H(Be=U())&&(x._iconPrefixContainer=Be.first),H(Be=U())&&(x._textPrefixContainer=Be.first),H(Be=U())&&(x._iconSuffixContainer=Be.first),H(Be=U())&&(x._textSuffixContainer=Be.first),H(Be=U())&&(x._floatingLabel=Be.first),H(Be=U())&&(x._notchedOutline=Be.first),H(Be=U())&&(x._lineRipple=Be.first)}},hostAttrs:[1,`mat-mdc-form-field`],hostVars:38,hostBindings:function(Pe,x){Pe&2&&G(`mat-mdc-form-field-label-always-float`,x._shouldAlwaysFloat())(`mat-mdc-form-field-has-icon-prefix`,x._hasIconPrefix)(`mat-mdc-form-field-has-icon-suffix`,x._hasIconSuffix)(`mat-form-field-invalid`,x._unwrapMaybeSignal(x._control.errorState))(`mat-form-field-disabled`,x._unwrapMaybeSignal(x._control.disabled))(`mat-form-field-autofilled`,x._unwrapMaybeSignal(x._control.autofilled))(`mat-form-field-appearance-fill`,x.appearance==`fill`)(`mat-form-field-appearance-outline`,x.appearance==`outline`)(`mat-form-field-hide-placeholder`,x._hasFloatingLabel()&&!x._shouldLabelFloat())(`mat-primary`,x.color!==`accent`&&x.color!==`warn`)(`mat-accent`,x.color===`accent`)(`mat-warn`,x.color===`warn`)(`ng-untouched`,x._shouldForward(`untouched`))(`ng-touched`,x._shouldForward(`touched`))(`ng-pristine`,x._shouldForward(`pristine`))(`ng-dirty`,x._shouldForward(`dirty`))(`ng-valid`,x._shouldForward(`valid`))(`ng-invalid`,x._shouldForward(`invalid`))(`ng-pending`,x._shouldForward(`pending`))},inputs:{hideRequiredMarker:`hideRequiredMarker`,color:`color`,floatLabel:`floatLabel`,appearance:`appearance`,subscriptSizing:`subscriptSizing`,hintLabel:`hintLabel`},exportAs:[`matFormField`],features:[ye([{provide:Bo,useExisting:t},{provide:TE,useExisting:t}])],ngContentSelectors:l,decls:18,vars:21,consts:[[`labelTemplate`,``],[`textField`,``],[`iconPrefixContainer`,``],[`textPrefixContainer`,``],[`textSuffixContainer`,``],[`iconSuffixContainer`,``],[1,`mat-mdc-text-field-wrapper`,`mdc-text-field`,3,`click`],[1,`mat-mdc-form-field-focus-overlay`],[1,`mat-mdc-form-field-flex`],[`matFormFieldNotchedOutline`,``,3,`matFormFieldNotchedOutlineOpen`],[1,`mat-mdc-form-field-icon-prefix`],[1,`mat-mdc-form-field-text-prefix`],[1,`mat-mdc-form-field-infix`],[3,`ngTemplateOutlet`],[1,`mat-mdc-form-field-text-suffix`],[1,`mat-mdc-form-field-icon-suffix`],[`matFormFieldLineRipple`,``],[`aria-atomic`,`true`,`aria-live`,`polite`,1,`mat-mdc-form-field-subscript-wrapper`,`mat-mdc-form-field-bottom-align`],[1,`mat-mdc-form-field-error-wrapper`],[1,`mat-mdc-form-field-hint-wrapper`],[`matFormFieldFloatingLabel`,``,3,`floating`,`monitorResize`,`id`],[`aria-hidden`,`true`,1,`mat-mdc-form-field-required-marker`,`mdc-floating-label--required`],[3,`id`],[1,`mat-mdc-form-field-hint-spacer`]],template:function(Pe,x){if(Pe&1&&(Me(s),wt(0,m,1,1,`ng-template`,null,0,Jg),C(2,`div`,6,1),Q(`click`,function(Kt){return x._control.onContainerClick(Kt)}),le(4,p,1,0,`div`,7),C(5,`div`,8),le(6,v,2,2,`div`,9),le(7,M,3,0,`div`,10),le(8,V,3,0,`div`,11),C(9,`div`,12),le(10,pe,1,1,null,13),X(11),E(),le(12,Vt,3,0,`div`,14),le(13,ln,3,0,`div`,15),E(),le(14,nt,1,0,`div`,16),E(),C(15,`div`,17),le(16,Bn,2,0,`div`,18)(17,Cn,5,1,`div`,19),E()),Pe&2){let Be,Kt=x._unwrapMaybeSignal(x._control.disabled);y(2),G(`mdc-text-field--filled`,!x._hasOutline())(`mdc-text-field--outlined`,x._hasOutline())(`mdc-text-field--no-label`,!x._hasFloatingLabel())(`mdc-text-field--disabled`,Kt)(`mdc-text-field--invalid`,x._unwrapMaybeSignal(x._control.errorState)),y(2),ce(!x._hasOutline()&&!Kt?4:-1),y(2),ce(x._hasOutline()?6:-1),y(),ce(x._hasIconPrefix?7:-1),y(),ce(x._hasTextPrefix?8:-1),y(2),ce(!x._hasOutline()||x._forceDisplayInfixLabel()?10:-1),y(2),ce(x._hasTextSuffix?12:-1),y(),ce(x._hasIconSuffix?13:-1),y(),ce(x._hasOutline()?-1:14),y(),G(`mat-mdc-form-field-subscript-dynamic-size`,x.subscriptSizing===`dynamic`);let kM=x._getSubscriptMessageType();y(),ce((Be=kM)===`error`?16:Be===`hint`?17:-1)}},dependencies:[xE,EE,yb,SE,Ry],styles:[`.mdc-text-field {
  display: inline-flex;
  align-items: baseline;
  padding: 0 16px;
  position: relative;
  box-sizing: border-box;
  overflow: hidden;
  will-change: opacity, transform, color;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0;
}

.mdc-text-field__input {
  width: 100%;
  min-width: 0;
  border: none;
  border-radius: 0;
  background: none;
  padding: 0;
  -moz-appearance: none;
  -webkit-appearance: none;
  height: 28px;
}
.mdc-text-field__input::-webkit-calendar-picker-indicator, .mdc-text-field__input::-webkit-search-cancel-button {
  display: none;
}
.mdc-text-field__input::-ms-clear {
  display: none;
}
.mdc-text-field__input:focus {
  outline: none;
}
.mdc-text-field__input:invalid {
  box-shadow: none;
}
.mdc-text-field__input::placeholder {
  opacity: 0;
}
.mdc-text-field__input::-moz-placeholder {
  opacity: 0;
}
.mdc-text-field__input::-webkit-input-placeholder {
  opacity: 0;
}
.mdc-text-field__input:-ms-input-placeholder {
  opacity: 0;
}
.mdc-text-field--no-label .mdc-text-field__input::placeholder, .mdc-text-field--focused .mdc-text-field__input::placeholder {
  opacity: 1;
}
.mdc-text-field--no-label .mdc-text-field__input::-moz-placeholder, .mdc-text-field--focused .mdc-text-field__input::-moz-placeholder {
  opacity: 1;
}
.mdc-text-field--no-label .mdc-text-field__input::-webkit-input-placeholder, .mdc-text-field--focused .mdc-text-field__input::-webkit-input-placeholder {
  opacity: 1;
}
.mdc-text-field--no-label .mdc-text-field__input:-ms-input-placeholder, .mdc-text-field--focused .mdc-text-field__input:-ms-input-placeholder {
  opacity: 1;
}
.mdc-text-field--%NS%disabled:not(.mdc-text-field--no-label) .mdc-text-field__input.mat-mdc-input-disabled-interactive::placeholder {
  opacity: 0;
}
.mdc-text-field--%NS%disabled:not(.mdc-text-field--no-label) .mdc-text-field__input.mat-mdc-input-disabled-interactive::-moz-placeholder {
  opacity: 0;
}
.mdc-text-field--%NS%disabled:not(.mdc-text-field--no-label) .mdc-text-field__input.mat-mdc-input-disabled-interactive::-webkit-input-placeholder {
  opacity: 0;
}
.mdc-text-field--%NS%disabled:not(.mdc-text-field--no-label) .mdc-text-field__input.mat-mdc-input-disabled-interactive:-ms-input-placeholder {
  opacity: 0;
}
.mdc-text-field--outlined .mdc-text-field__input, .mdc-text-field--filled.mdc-text-field--no-label .mdc-text-field__input {
  height: 100%;
}
.mdc-text-field--outlined .mdc-text-field__input {
  display: flex;
  border: none !important;
  background-color: transparent;
}
.mdc-text-field--disabled .mdc-text-field__input {
  pointer-events: auto;
}
.mdc-text-field--%NS%filled:not(.mdc-text-field--disabled) .mdc-text-field__input {
  color: var(--%NS%mat-form-field-filled-input-text-color, var(--%NS%mat-sys-on-surface));
  caret-color: var(--%NS%mat-form-field-filled-caret-color, var(--%NS%mat-sys-primary));
}
.mdc-text-field--%NS%filled:not(.mdc-text-field--disabled) .mdc-text-field__input::placeholder {
  color: var(--%NS%mat-form-field-filled-input-text-placeholder-color, var(--%NS%mat-sys-on-surface-variant));
}
.mdc-text-field--%NS%filled:not(.mdc-text-field--disabled) .mdc-text-field__input::-moz-placeholder {
  color: var(--%NS%mat-form-field-filled-input-text-placeholder-color, var(--%NS%mat-sys-on-surface-variant));
}
.mdc-text-field--%NS%filled:not(.mdc-text-field--disabled) .mdc-text-field__input::-webkit-input-placeholder {
  color: var(--%NS%mat-form-field-filled-input-text-placeholder-color, var(--%NS%mat-sys-on-surface-variant));
}
.mdc-text-field--%NS%filled:not(.mdc-text-field--disabled) .mdc-text-field__input:-ms-input-placeholder {
  color: var(--%NS%mat-form-field-filled-input-text-placeholder-color, var(--%NS%mat-sys-on-surface-variant));
}
.mdc-text-field--%NS%outlined:not(.mdc-text-field--disabled) .mdc-text-field__input {
  color: var(--%NS%mat-form-field-outlined-input-text-color, var(--%NS%mat-sys-on-surface));
  caret-color: var(--%NS%mat-form-field-outlined-caret-color, var(--%NS%mat-sys-primary));
}
.mdc-text-field--%NS%outlined:not(.mdc-text-field--disabled) .mdc-text-field__input::placeholder {
  color: var(--%NS%mat-form-field-outlined-input-text-placeholder-color, var(--%NS%mat-sys-on-surface-variant));
}
.mdc-text-field--%NS%outlined:not(.mdc-text-field--disabled) .mdc-text-field__input::-moz-placeholder {
  color: var(--%NS%mat-form-field-outlined-input-text-placeholder-color, var(--%NS%mat-sys-on-surface-variant));
}
.mdc-text-field--%NS%outlined:not(.mdc-text-field--disabled) .mdc-text-field__input::-webkit-input-placeholder {
  color: var(--%NS%mat-form-field-outlined-input-text-placeholder-color, var(--%NS%mat-sys-on-surface-variant));
}
.mdc-text-field--%NS%outlined:not(.mdc-text-field--disabled) .mdc-text-field__input:-ms-input-placeholder {
  color: var(--%NS%mat-form-field-outlined-input-text-placeholder-color, var(--%NS%mat-sys-on-surface-variant));
}
.mdc-text-field--filled.mdc-text-field--%NS%invalid:not(.mdc-text-field--disabled) .mdc-text-field__input {
  caret-color: var(--%NS%mat-form-field-filled-error-caret-color, var(--%NS%mat-sys-error));
}
.mdc-text-field--outlined.mdc-text-field--%NS%invalid:not(.mdc-text-field--disabled) .mdc-text-field__input {
  caret-color: var(--%NS%mat-form-field-outlined-error-caret-color, var(--%NS%mat-sys-error));
}
.mdc-text-field--filled.mdc-text-field--disabled .mdc-text-field__input {
  color: var(--%NS%mat-form-field-filled-disabled-input-text-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}
.mdc-text-field--outlined.mdc-text-field--disabled .mdc-text-field__input {
  color: var(--%NS%mat-form-field-outlined-disabled-input-text-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}
@media (forced-colors: active) {
  .mdc-text-field--disabled .mdc-text-field__input {
    background-color: Window;
  }
}

.mdc-text-field--filled {
  height: 56px;
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0;
  border-top-left-radius: var(--%NS%mat-form-field-filled-container-shape, var(--%NS%mat-sys-corner-extra-small));
  border-top-right-radius: var(--%NS%mat-form-field-filled-container-shape, var(--%NS%mat-sys-corner-extra-small));
}
.mdc-text-field--%NS%filled:not(.mdc-text-field--disabled) {
  background-color: var(--%NS%mat-form-field-filled-container-color, var(--%NS%mat-sys-surface-variant));
}
.mdc-text-field--filled.mdc-text-field--disabled {
  background-color: var(--%NS%mat-form-field-filled-disabled-container-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 4%, transparent));
}

.mdc-text-field--outlined {
  height: 56px;
  overflow: visible;
  padding-right: max(16px, var(--%NS%mat-form-field-outlined-container-shape, var(--%NS%mat-sys-corner-extra-small)));
  padding-left: max(16px, var(--%NS%mat-form-field-outlined-container-shape, var(--%NS%mat-sys-corner-extra-small)) + 4px);
}
[dir=rtl] .mdc-text-field--outlined {
  padding-right: max(16px, var(--%NS%mat-form-field-outlined-container-shape, var(--%NS%mat-sys-corner-extra-small)) + 4px);
  padding-left: max(16px, var(--%NS%mat-form-field-outlined-container-shape, var(--%NS%mat-sys-corner-extra-small)));
}

.mdc-floating-label {
  position: absolute;
  left: 0;
  transform-origin: left top;
  line-height: 1.15rem;
  text-align: left;
  text-overflow: ellipsis;
  white-space: nowrap;
  cursor: text;
  overflow: hidden;
  will-change: transform;
}
[dir=rtl] .mdc-floating-label {
  right: 0;
  left: auto;
  transform-origin: right top;
  text-align: right;
}
.mdc-text-field .mdc-floating-label {
  top: 50%;
  transform: translateY(-50%);
  pointer-events: none;
}
.mdc-notched-outline .mdc-floating-label {
  display: inline-block;
  position: relative;
  max-width: 100%;
}
.mdc-text-field--outlined .mdc-floating-label {
  left: 4px;
  right: auto;
}
[dir=rtl] .mdc-text-field--outlined .mdc-floating-label {
  left: auto;
  right: 4px;
}
.mdc-text-field--filled .mdc-floating-label {
  left: 16px;
  right: auto;
}
[dir=rtl] .mdc-text-field--filled .mdc-floating-label {
  left: auto;
  right: 16px;
}
.mdc-text-field--disabled .mdc-floating-label {
  cursor: default;
}
@media (forced-colors: active) {
  .mdc-text-field--disabled .mdc-floating-label {
    z-index: 1;
  }
}
.mdc-text-field--filled.mdc-text-field--no-label .mdc-floating-label {
  display: none;
}
.mdc-text-field--%NS%filled:not(.mdc-text-field--disabled) .mdc-floating-label {
  color: var(--%NS%mat-form-field-filled-label-text-color, var(--%NS%mat-sys-on-surface-variant));
}
.mdc-text-field--%NS%filled:not(.mdc-text-field--disabled).mdc-text-field--focused .mdc-floating-label {
  color: var(--%NS%mat-form-field-filled-focus-label-text-color, var(--%NS%mat-sys-primary));
}
.mdc-text-field--%NS%filled:not(.mdc-text-field--disabled):not(.mdc-text-field--focused):hover .mdc-floating-label {
  color: var(--%NS%mat-form-field-filled-hover-label-text-color, var(--%NS%mat-sys-on-surface-variant));
}
.mdc-text-field--filled.mdc-text-field--disabled .mdc-floating-label {
  color: var(--%NS%mat-form-field-filled-disabled-label-text-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}
.mdc-text-field--%NS%filled:not(.mdc-text-field--disabled).mdc-text-field--invalid .mdc-floating-label {
  color: var(--%NS%mat-form-field-filled-error-label-text-color, var(--%NS%mat-sys-error));
}
.mdc-text-field--%NS%filled:not(.mdc-text-field--disabled).mdc-text-field--invalid.mdc-text-field--focused .mdc-floating-label {
  color: var(--%NS%mat-form-field-filled-error-focus-label-text-color, var(--%NS%mat-sys-error));
}
.mdc-text-field--%NS%filled:not(.mdc-text-field--disabled).mdc-text-field--%NS%invalid:not(.mdc-text-field--disabled):hover .mdc-floating-label {
  color: var(--%NS%mat-form-field-filled-error-hover-label-text-color, var(--%NS%mat-sys-on-error-container));
}
.mdc-text-field--filled .mdc-floating-label {
  font-family: var(--%NS%mat-form-field-filled-label-text-font, var(--%NS%mat-sys-body-large-font));
  font-size: var(--%NS%mat-form-field-filled-label-text-size, var(--%NS%mat-sys-body-large-size));
  font-weight: var(--%NS%mat-form-field-filled-label-text-weight, var(--%NS%mat-sys-body-large-weight));
  letter-spacing: var(--%NS%mat-form-field-filled-label-text-tracking, var(--%NS%mat-sys-body-large-tracking));
}
.mdc-text-field--%NS%outlined:not(.mdc-text-field--disabled) .mdc-floating-label {
  color: var(--%NS%mat-form-field-outlined-label-text-color, var(--%NS%mat-sys-on-surface-variant));
}
.mdc-text-field--%NS%outlined:not(.mdc-text-field--disabled).mdc-text-field--focused .mdc-floating-label {
  color: var(--%NS%mat-form-field-outlined-focus-label-text-color, var(--%NS%mat-sys-primary));
}
.mdc-text-field--%NS%outlined:not(.mdc-text-field--disabled):not(.mdc-text-field--focused):hover .mdc-floating-label {
  color: var(--%NS%mat-form-field-outlined-hover-label-text-color, var(--%NS%mat-sys-on-surface));
}
.mdc-text-field--outlined.mdc-text-field--disabled .mdc-floating-label {
  color: var(--%NS%mat-form-field-outlined-disabled-label-text-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}
.mdc-text-field--%NS%outlined:not(.mdc-text-field--disabled).mdc-text-field--invalid .mdc-floating-label {
  color: var(--%NS%mat-form-field-outlined-error-label-text-color, var(--%NS%mat-sys-error));
}
.mdc-text-field--%NS%outlined:not(.mdc-text-field--disabled).mdc-text-field--invalid.mdc-text-field--focused .mdc-floating-label {
  color: var(--%NS%mat-form-field-outlined-error-focus-label-text-color, var(--%NS%mat-sys-error));
}
.mdc-text-field--%NS%outlined:not(.mdc-text-field--disabled).mdc-text-field--%NS%invalid:not(.mdc-text-field--disabled):hover .mdc-floating-label {
  color: var(--%NS%mat-form-field-outlined-error-hover-label-text-color, var(--%NS%mat-sys-on-error-container));
}
.mdc-text-field--outlined .mdc-floating-label {
  font-family: var(--%NS%mat-form-field-outlined-label-text-font, var(--%NS%mat-sys-body-large-font));
  font-size: var(--%NS%mat-form-field-outlined-label-text-size, var(--%NS%mat-sys-body-large-size));
  font-weight: var(--%NS%mat-form-field-outlined-label-text-weight, var(--%NS%mat-sys-body-large-weight));
  letter-spacing: var(--%NS%mat-form-field-outlined-label-text-tracking, var(--%NS%mat-sys-body-large-tracking));
}

.mdc-floating-label--float-above {
  cursor: auto;
  transform: translateY(-106%) scale(0.75);
}
.mdc-text-field--filled .mdc-floating-label--float-above {
  transform: translateY(-106%) scale(0.75);
}
.mdc-text-field--outlined .mdc-floating-label--float-above {
  transform: translateY(-37.25px) scale(1);
  font-size: 0.75rem;
}
.mdc-notched-outline .mdc-floating-label--float-above {
  text-overflow: clip;
}
.mdc-notched-outline--upgraded .mdc-floating-label--float-above {
  max-width: 133.3333333333%;
}
.mdc-text-field--outlined.mdc-notched-outline--upgraded .mdc-floating-label--float-above, .mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above {
  transform: translateY(-34.75px) scale(0.75);
}
.mdc-text-field--outlined.mdc-notched-outline--upgraded .mdc-floating-label--float-above, .mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above {
  font-size: 1rem;
}

.mdc-floating-label--%NS%required:not(.mdc-floating-label--hide-required-marker)::after {
  margin-left: 1px;
  margin-right: 0;
  content: "*";
}
[dir=rtl] .mdc-floating-label--%NS%required:not(.mdc-floating-label--hide-required-marker)::after {
  margin-left: 0;
  margin-right: 1px;
}

.mdc-notched-outline {
  display: flex;
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  box-sizing: border-box;
  width: 100%;
  max-width: 100%;
  height: 100%;
  text-align: left;
  pointer-events: none;
}
[dir=rtl] .mdc-notched-outline {
  text-align: right;
}
.mdc-text-field--outlined .mdc-notched-outline {
  z-index: 1;
}

.mat-mdc-notch-piece {
  box-sizing: border-box;
  height: 100%;
  pointer-events: none;
  border: none;
  border-top: 1px solid;
  border-bottom: 1px solid;
}
.mdc-text-field--focused .mat-mdc-notch-piece {
  border-width: 2px;
}
.mdc-text-field--%NS%outlined:not(.mdc-text-field--disabled) .mat-mdc-notch-piece {
  border-color: var(--%NS%mat-form-field-outlined-outline-color, var(--%NS%mat-sys-outline));
  border-width: var(--%NS%mat-form-field-outlined-outline-width, 1px);
}
.mdc-text-field--%NS%outlined:not(.mdc-text-field--disabled):not(.mdc-text-field--focused):hover .mat-mdc-notch-piece {
  border-color: var(--%NS%mat-form-field-outlined-hover-outline-color, var(--%NS%mat-sys-on-surface));
}
.mdc-text-field--%NS%outlined:not(.mdc-text-field--disabled).mdc-text-field--focused .mat-mdc-notch-piece {
  border-color: var(--%NS%mat-form-field-outlined-focus-outline-color, var(--%NS%mat-sys-primary));
}
.mdc-text-field--outlined.mdc-text-field--disabled .mat-mdc-notch-piece {
  border-color: var(--%NS%mat-form-field-outlined-disabled-outline-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 12%, transparent));
}
.mdc-text-field--%NS%outlined:not(.mdc-text-field--disabled).mdc-text-field--invalid .mat-mdc-notch-piece {
  border-color: var(--%NS%mat-form-field-outlined-error-outline-color, var(--%NS%mat-sys-error));
}
.mdc-text-field--%NS%outlined:not(.mdc-text-field--disabled).mdc-text-field--%NS%invalid:not(.mdc-text-field--focused):hover .mdc-notched-outline .mat-mdc-notch-piece {
  border-color: var(--%NS%mat-form-field-outlined-error-hover-outline-color, var(--%NS%mat-sys-on-error-container));
}
.mdc-text-field--%NS%outlined:not(.mdc-text-field--disabled).mdc-text-field--invalid.mdc-text-field--focused .mat-mdc-notch-piece {
  border-color: var(--%NS%mat-form-field-outlined-error-focus-outline-color, var(--%NS%mat-sys-error));
}
.mdc-text-field--%NS%outlined:not(.mdc-text-field--disabled).mdc-text-field--focused .mdc-notched-outline .mat-mdc-notch-piece {
  border-width: var(--%NS%mat-form-field-outlined-focus-outline-width, 2px);
}

.mdc-notched-outline__leading {
  border-left: 1px solid;
  border-right: none;
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
  border-top-left-radius: var(--%NS%mat-form-field-outlined-container-shape, var(--%NS%mat-sys-corner-extra-small));
  border-bottom-left-radius: var(--%NS%mat-form-field-outlined-container-shape, var(--%NS%mat-sys-corner-extra-small));
}
.mdc-text-field--outlined .mdc-notched-outline .mdc-notched-outline__leading {
  width: max(12px, var(--%NS%mat-form-field-outlined-container-shape, var(--%NS%mat-sys-corner-extra-small)));
}
[dir=rtl] .mdc-notched-outline__leading {
  border-left: none;
  border-right: 1px solid;
  border-bottom-left-radius: 0;
  border-top-left-radius: 0;
  border-top-right-radius: var(--%NS%mat-form-field-outlined-container-shape, var(--%NS%mat-sys-corner-extra-small));
  border-bottom-right-radius: var(--%NS%mat-form-field-outlined-container-shape, var(--%NS%mat-sys-corner-extra-small));
}

.mdc-notched-outline__trailing {
  flex-grow: 1;
  border-left: none;
  border-right: 1px solid;
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
  border-top-right-radius: var(--%NS%mat-form-field-outlined-container-shape, var(--%NS%mat-sys-corner-extra-small));
  border-bottom-right-radius: var(--%NS%mat-form-field-outlined-container-shape, var(--%NS%mat-sys-corner-extra-small));
}
[dir=rtl] .mdc-notched-outline__trailing {
  border-left: 1px solid;
  border-right: none;
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
  border-top-left-radius: var(--%NS%mat-form-field-outlined-container-shape, var(--%NS%mat-sys-corner-extra-small));
  border-bottom-left-radius: var(--%NS%mat-form-field-outlined-container-shape, var(--%NS%mat-sys-corner-extra-small));
}

.mdc-notched-outline__notch {
  flex: 0 0 auto;
  width: auto;
}
.mdc-text-field--outlined .mdc-notched-outline .mdc-notched-outline__notch {
  max-width: min(var(--%NS%mat-form-field-notch-max-width, 100%), calc(100% - max(12px, var(--%NS%mat-form-field-outlined-container-shape, var(--%NS%mat-sys-corner-extra-small))) * 2));
}
.mdc-text-field--outlined .mdc-notched-outline--notched .mdc-notched-outline__notch {
  max-width: min(100%, calc(100% - max(12px, var(--%NS%mat-form-field-outlined-container-shape, var(--%NS%mat-sys-corner-extra-small))) * 2));
}
.mdc-text-field--outlined .mdc-notched-outline--notched .mdc-notched-outline__notch {
  padding-top: 1px;
}
.mdc-text-field--focused.mdc-text-field--outlined .mdc-notched-outline--notched .mdc-notched-outline__notch {
  padding-top: 2px;
}
.mdc-notched-outline--notched .mdc-notched-outline__notch {
  padding-left: 0;
  padding-right: 8px;
  border-top: none;
}
[dir=rtl] .mdc-notched-outline--notched .mdc-notched-outline__notch {
  padding-left: 8px;
  padding-right: 0;
}
.mdc-notched-outline--no-label .mdc-notched-outline__notch {
  display: none;
}

.mdc-line-ripple::before, .mdc-line-ripple::after {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  border-bottom-style: solid;
  content: "";
}
.mdc-line-ripple::before {
  z-index: 1;
  border-bottom-width: var(--%NS%mat-form-field-filled-active-indicator-height, 1px);
}
.mdc-text-field--%NS%filled:not(.mdc-text-field--disabled) .mdc-line-ripple::before {
  border-bottom-color: var(--%NS%mat-form-field-filled-active-indicator-color, var(--%NS%mat-sys-on-surface-variant));
}
.mdc-text-field--%NS%filled:not(.mdc-text-field--disabled):not(.mdc-text-field--focused):hover .mdc-line-ripple::before {
  border-bottom-color: var(--%NS%mat-form-field-filled-hover-active-indicator-color, var(--%NS%mat-sys-on-surface));
}
.mdc-text-field--filled.mdc-text-field--disabled .mdc-line-ripple::before {
  border-bottom-color: var(--%NS%mat-form-field-filled-disabled-active-indicator-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}
.mdc-text-field--%NS%filled:not(.mdc-text-field--disabled).mdc-text-field--invalid .mdc-line-ripple::before {
  border-bottom-color: var(--%NS%mat-form-field-filled-error-active-indicator-color, var(--%NS%mat-sys-error));
}
.mdc-text-field--%NS%filled:not(.mdc-text-field--disabled).mdc-text-field--%NS%invalid:not(.mdc-text-field--focused):hover .mdc-line-ripple::before {
  border-bottom-color: var(--%NS%mat-form-field-filled-error-hover-active-indicator-color, var(--%NS%mat-sys-on-error-container));
}
.mdc-line-ripple::after {
  transform: scaleX(0);
  opacity: 0;
  z-index: 2;
}
.mdc-text-field--filled .mdc-line-ripple::after {
  border-bottom-width: var(--%NS%mat-form-field-filled-focus-active-indicator-height, 2px);
}
.mdc-text-field--%NS%filled:not(.mdc-text-field--disabled) .mdc-line-ripple::after {
  border-bottom-color: var(--%NS%mat-form-field-filled-focus-active-indicator-color, var(--%NS%mat-sys-primary));
}
.mdc-text-field--filled.mdc-text-field--%NS%invalid:not(.mdc-text-field--disabled) .mdc-line-ripple::after {
  border-bottom-color: var(--%NS%mat-form-field-filled-error-focus-active-indicator-color, var(--%NS%mat-sys-error));
}

.mdc-line-ripple--%NS%active::after {
  transform: scaleX(1);
  opacity: 1;
}

.mdc-line-ripple--%NS%deactivating::after {
  opacity: 0;
}

.mdc-text-field--disabled {
  pointer-events: none;
}

.mat-mdc-form-field-textarea-control {
  vertical-align: middle;
  resize: vertical;
  box-sizing: border-box;
  height: auto;
  margin: 0;
  padding: 0;
  border: none;
  overflow: auto;
}

.mat-mdc-form-field-input-control.mat-mdc-form-field-input-control {
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  font: inherit;
  letter-spacing: inherit;
  text-decoration: inherit;
  text-transform: inherit;
  border: none;
}

.mat-mdc-form-field .mat-mdc-floating-label.mdc-floating-label {
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  line-height: normal;
  pointer-events: all;
  will-change: auto;
}

.mat-mdc-form-field:not(.mat-form-field-disabled) .mat-mdc-floating-label.mdc-floating-label {
  cursor: inherit;
}

.mdc-text-field--%NS%no-label:not(.mdc-text-field--textarea) .mat-mdc-form-field-input-control.mdc-text-field__input,
.mat-mdc-text-field-wrapper .mat-mdc-form-field-input-control {
  height: auto;
}

.mat-mdc-text-field-wrapper .mat-mdc-form-field-input-control.mdc-text-field__input[type=color] {
  height: 23px;
}

.mat-mdc-text-field-wrapper {
  height: auto;
  flex: auto;
  will-change: auto;
}

.mat-mdc-form-field-has-icon-prefix .mat-mdc-text-field-wrapper {
  padding-left: 0;
  --%NS%mat-mdc-form-field-label-offset-x: -16px;
}

.mat-mdc-form-field-has-icon-suffix .mat-mdc-text-field-wrapper {
  padding-right: 0;
}

[dir=rtl] .mat-mdc-text-field-wrapper {
  padding-left: 16px;
  padding-right: 16px;
}
[dir=rtl] .mat-mdc-form-field-has-icon-suffix .mat-mdc-text-field-wrapper {
  padding-left: 0;
}
[dir=rtl] .mat-mdc-form-field-has-icon-prefix .mat-mdc-text-field-wrapper {
  padding-right: 0;
}

.mat-form-field-disabled .mdc-text-field__input::placeholder {
  color: var(--%NS%mat-form-field-disabled-input-text-placeholder-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}
.mat-form-field-disabled .mdc-text-field__input::-moz-placeholder {
  color: var(--%NS%mat-form-field-disabled-input-text-placeholder-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}
.mat-form-field-disabled .mdc-text-field__input::-webkit-input-placeholder {
  color: var(--%NS%mat-form-field-disabled-input-text-placeholder-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}
.mat-form-field-disabled .mdc-text-field__input:-ms-input-placeholder {
  color: var(--%NS%mat-form-field-disabled-input-text-placeholder-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}

.mat-mdc-form-field-label-always-float .mdc-text-field__input::placeholder {
  transition-delay: 40ms;
  transition-duration: 110ms;
  opacity: 1;
}

.mat-mdc-text-field-wrapper .mat-mdc-form-field-infix .mat-mdc-floating-label {
  left: auto;
  right: auto;
}

.mat-mdc-text-field-wrapper.mdc-text-field--outlined .mdc-text-field__input {
  display: inline-block;
}

.mat-mdc-form-field .mat-mdc-text-field-wrapper.mdc-text-field .mdc-notched-outline__notch {
  padding-top: 0;
}

.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field .mdc-notched-outline__notch {
  border-left: 1px solid transparent;
}

[dir=rtl] .mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field .mdc-notched-outline__notch {
  border-left: none;
  border-right: 1px solid transparent;
}

.mat-mdc-form-field-infix {
  min-height: var(--%NS%mat-form-field-container-height, 56px);
  padding-top: var(--%NS%mat-form-field-filled-with-label-container-padding-top, 24px);
  padding-bottom: var(--%NS%mat-form-field-filled-with-label-container-padding-bottom, 8px);
}
.mdc-text-field--outlined .mat-mdc-form-field-infix, .mdc-text-field--no-label .mat-mdc-form-field-infix {
  padding-top: var(--%NS%mat-form-field-container-vertical-padding, 16px);
  padding-bottom: var(--%NS%mat-form-field-container-vertical-padding, 16px);
}

.mat-mdc-text-field-wrapper .mat-mdc-form-field-flex .mat-mdc-floating-label {
  top: calc(var(--%NS%mat-form-field-container-height, 56px) / 2);
}

.mdc-text-field--filled .mat-mdc-floating-label {
  display: var(--%NS%mat-form-field-filled-label-display, block);
}

.mat-mdc-text-field-wrapper.mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above {
  --%NS%mat-mdc-form-field-label-transform: translateY(calc(calc(6.75px + var(--%NS%mat-form-field-container-height, 56px) / 2) * -1))
    scale(var(--%NS%mat-mdc-form-field-floating-label-scale, 0.75));
  transform: var(--%NS%mat-mdc-form-field-label-transform);
}

@keyframes _mat-form-field-subscript-animation {
  from {
    opacity: 0;
    transform: translateY(-5px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
.mat-mdc-form-field-subscript-wrapper {
  box-sizing: border-box;
  width: 100%;
  position: relative;
}

.mat-mdc-form-field-hint-wrapper,
.mat-mdc-form-field-error-wrapper {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  padding: 0 16px;
  opacity: 1;
  transform: translateY(0);
  animation: _mat-form-field-subscript-animation 0ms cubic-bezier(0.55, 0, 0.55, 0.2);
}

.mat-mdc-form-field-subscript-dynamic-size .mat-mdc-form-field-hint-wrapper,
.mat-mdc-form-field-subscript-dynamic-size .mat-mdc-form-field-error-wrapper {
  position: static;
}

.mat-mdc-form-field-bottom-align::before {
  content: "";
  display: inline-block;
  height: 16px;
}

.mat-mdc-form-field-bottom-align.mat-mdc-form-field-subscript-dynamic-size::before {
  content: unset;
}

.mat-mdc-form-field-hint-end {
  order: 1;
}

.mat-mdc-form-field-hint-wrapper {
  display: flex;
}

.mat-mdc-form-field-hint-spacer {
  flex: 1 0 1em;
}

.mat-mdc-form-field-error {
  display: block;
  color: var(--%NS%mat-form-field-error-text-color, var(--%NS%mat-sys-error));
}

.mat-mdc-form-field-subscript-wrapper,
.mat-mdc-form-field-bottom-align::before {
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  font-family: var(--%NS%mat-form-field-subscript-text-font, var(--%NS%mat-sys-body-small-font));
  line-height: var(--%NS%mat-form-field-subscript-text-line-height, var(--%NS%mat-sys-body-small-line-height));
  font-size: var(--%NS%mat-form-field-subscript-text-size, var(--%NS%mat-sys-body-small-size));
  letter-spacing: var(--%NS%mat-form-field-subscript-text-tracking, var(--%NS%mat-sys-body-small-tracking));
  font-weight: var(--%NS%mat-form-field-subscript-text-weight, var(--%NS%mat-sys-body-small-weight));
}

.mat-mdc-form-field-focus-overlay {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  opacity: 0;
  pointer-events: none;
  background-color: var(--%NS%mat-form-field-state-layer-color, var(--%NS%mat-sys-on-surface));
}
.mat-mdc-text-field-wrapper:hover .mat-mdc-form-field-focus-overlay {
  opacity: var(--%NS%mat-form-field-hover-state-layer-opacity, var(--%NS%mat-sys-hover-state-layer-opacity));
}
.mat-mdc-form-field.mat-focused .mat-mdc-form-field-focus-overlay {
  opacity: var(--%NS%mat-form-field-focus-state-layer-opacity, 0);
}

select.mat-mdc-form-field-input-control {
  -moz-appearance: none;
  -webkit-appearance: none;
  background-color: transparent;
  display: inline-flex;
  box-sizing: border-box;
}
select.mat-mdc-form-field-input-control:not(:disabled) {
  cursor: pointer;
}
select.mat-mdc-form-field-input-control:not(.mat-mdc-native-select-inline) option {
  color: var(--%NS%mat-form-field-select-option-text-color, var(--%NS%mat-sys-neutral10));
}
select.mat-mdc-form-field-input-control:not(.mat-mdc-native-select-inline) option:disabled {
  color: var(--%NS%mat-form-field-select-disabled-option-text-color, color-mix(in srgb, var(--%NS%mat-sys-neutral10) 38%, transparent));
}

.mat-mdc-form-field-type-mat-native-select .mat-mdc-form-field-infix::after {
  content: "";
  width: 0;
  height: 0;
  border-left: 5px solid transparent;
  border-right: 5px solid transparent;
  border-top: 5px solid;
  position: absolute;
  right: 0;
  top: 50%;
  margin-top: -2.5px;
  pointer-events: none;
  color: var(--%NS%mat-form-field-enabled-select-arrow-color, var(--%NS%mat-sys-on-surface-variant));
}
[dir=rtl] .mat-mdc-form-field-type-mat-native-select .mat-mdc-form-field-infix::after {
  right: auto;
  left: 0;
}
.mat-mdc-form-field-type-mat-native-select.mat-focused .mat-mdc-form-field-infix::after {
  color: var(--%NS%mat-form-field-focus-select-arrow-color, var(--%NS%mat-sys-primary));
}
.mat-mdc-form-field-type-mat-native-select.mat-form-field-disabled .mat-mdc-form-field-infix::after {
  color: var(--%NS%mat-form-field-disabled-select-arrow-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}
.mat-mdc-form-field-type-mat-native-select .mat-mdc-form-field-input-control {
  padding-right: 15px;
}
[dir=rtl] .mat-mdc-form-field-type-mat-native-select .mat-mdc-form-field-input-control {
  padding-right: 0;
  padding-left: 15px;
}

@media (forced-colors: active) {
  .mat-form-field-appearance-fill .mat-mdc-text-field-wrapper {
    outline: solid 1px;
  }
}
@media (forced-colors: active) {
  .mat-form-field-appearance-fill.mat-form-field-disabled .mat-mdc-text-field-wrapper {
    outline-color: GrayText;
  }
}

@media (forced-colors: active) {
  .mat-form-field-appearance-fill.mat-focused .mat-mdc-text-field-wrapper {
    outline: dashed 3px;
  }
}

@media (forced-colors: active) {
  .mat-mdc-form-field.mat-focused .mdc-notched-outline {
    border: dashed 3px;
  }
}

.mat-mdc-form-field-input-control[type=date], .mat-mdc-form-field-input-control[type=datetime], .mat-mdc-form-field-input-control[type=datetime-local], .mat-mdc-form-field-input-control[type=month], .mat-mdc-form-field-input-control[type=week], .mat-mdc-form-field-input-control[type=time] {
  line-height: 1;
}
.mat-mdc-form-field-input-control::-webkit-datetime-edit {
  line-height: 1;
  padding: 0;
  margin-bottom: -2px;
}

.mat-mdc-form-field {
  --%NS%mat-mdc-form-field-floating-label-scale: 0.75;
  display: inline-flex;
  flex-direction: column;
  min-width: 0;
  text-align: left;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  font-family: var(--%NS%mat-form-field-container-text-font, var(--%NS%mat-sys-body-large-font));
  line-height: var(--%NS%mat-form-field-container-text-line-height, var(--%NS%mat-sys-body-large-line-height));
  font-size: var(--%NS%mat-form-field-container-text-size, var(--%NS%mat-sys-body-large-size));
  letter-spacing: var(--%NS%mat-form-field-container-text-tracking, var(--%NS%mat-sys-body-large-tracking));
  font-weight: var(--%NS%mat-form-field-container-text-weight, var(--%NS%mat-sys-body-large-weight));
}
.mat-mdc-form-field .mdc-text-field--outlined .mdc-floating-label--float-above {
  font-size: calc(var(--%NS%mat-form-field-outlined-label-text-populated-size) * var(--%NS%mat-mdc-form-field-floating-label-scale));
}
.mat-mdc-form-field .mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above {
  font-size: var(--%NS%mat-form-field-outlined-label-text-populated-size);
}
[dir=rtl] .mat-mdc-form-field {
  text-align: right;
}

.mat-mdc-form-field-flex {
  display: inline-flex;
  align-items: baseline;
  box-sizing: border-box;
  width: 100%;
}

.mat-mdc-text-field-wrapper {
  width: 100%;
  z-index: 0;
}

.mat-mdc-form-field-icon-prefix,
.mat-mdc-form-field-icon-suffix {
  align-self: center;
  line-height: 0;
  pointer-events: auto;
  position: relative;
  z-index: 1;
}
.mat-mdc-form-field-icon-prefix > .mat-icon,
.mat-mdc-form-field-icon-suffix > .mat-icon {
  padding: 0 12px;
  box-sizing: content-box;
}

.mat-mdc-form-field-icon-prefix {
  color: var(--%NS%mat-form-field-leading-icon-color, var(--%NS%mat-sys-on-surface-variant));
}
.mat-form-field-disabled .mat-mdc-form-field-icon-prefix {
  color: var(--%NS%mat-form-field-disabled-leading-icon-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}

.mat-mdc-form-field-icon-suffix {
  color: var(--%NS%mat-form-field-trailing-icon-color, var(--%NS%mat-sys-on-surface-variant));
}
.mat-form-field-disabled .mat-mdc-form-field-icon-suffix {
  color: var(--%NS%mat-form-field-disabled-trailing-icon-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}
.mat-form-field-invalid .mat-mdc-form-field-icon-suffix {
  color: var(--%NS%mat-form-field-error-trailing-icon-color, var(--%NS%mat-sys-error));
}
.mat-form-field-invalid:not(.mat-focused):not(.mat-form-field-disabled) .mat-mdc-text-field-wrapper:hover .mat-mdc-form-field-icon-suffix {
  color: var(--%NS%mat-form-field-error-hover-trailing-icon-color, var(--%NS%mat-sys-on-error-container));
}
.mat-form-field-invalid.mat-focused .mat-mdc-text-field-wrapper .mat-mdc-form-field-icon-suffix {
  color: var(--%NS%mat-form-field-error-focus-trailing-icon-color, var(--%NS%mat-sys-error));
}

.mat-mdc-form-field-icon-prefix,
[dir=rtl] .mat-mdc-form-field-icon-suffix {
  padding: 0 4px 0 0;
}

.mat-mdc-form-field-icon-suffix,
[dir=rtl] .mat-mdc-form-field-icon-prefix {
  padding: 0 0 0 4px;
}

.mat-mdc-form-field-subscript-wrapper .mat-icon,
.mat-mdc-form-field label .mat-icon {
  width: 1em;
  height: 1em;
  font-size: inherit;
}

.mat-mdc-form-field-infix {
  flex: auto;
  min-width: 0;
  width: 180px;
  position: relative;
  box-sizing: border-box;
}
.mat-mdc-form-field-infix:has(textarea[cols]) {
  width: auto;
}

.mat-mdc-form-field .mdc-notched-outline__notch {
  margin-left: -1px;
  -webkit-clip-path: inset(-9em -999em -9em 1px);
  clip-path: inset(-9em -999em -9em 1px);
}
[dir=rtl] .mat-mdc-form-field .mdc-notched-outline__notch {
  margin-left: 0;
  margin-right: -1px;
  -webkit-clip-path: inset(-9em 1px -9em -999em);
  clip-path: inset(-9em 1px -9em -999em);
}

.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-floating-label {
  transition: transform 150ms cubic-bezier(0.4, 0, 0.2, 1), color 150ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-text-field__input {
  transition: opacity 150ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-text-field__input::placeholder {
  transition: opacity 67ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-text-field__input::-moz-placeholder {
  transition: opacity 67ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-text-field__input::-webkit-input-placeholder {
  transition: opacity 67ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-text-field__input:-ms-input-placeholder {
  transition: opacity 67ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--no-label .mdc-text-field__input::placeholder, .mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--focused .mdc-text-field__input::placeholder {
  transition-delay: 40ms;
  transition-duration: 110ms;
}
.mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--no-label .mdc-text-field__input::-moz-placeholder, .mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--focused .mdc-text-field__input::-moz-placeholder {
  transition-delay: 40ms;
  transition-duration: 110ms;
}
.mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--no-label .mdc-text-field__input::-webkit-input-placeholder, .mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--focused .mdc-text-field__input::-webkit-input-placeholder {
  transition-delay: 40ms;
  transition-duration: 110ms;
}
.mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--no-label .mdc-text-field__input:-ms-input-placeholder, .mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--focused .mdc-text-field__input:-ms-input-placeholder {
  transition-delay: 40ms;
  transition-duration: 110ms;
}
.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-text-field--%NS%filled:not(.mdc-ripple-upgraded):focus .mdc-text-field__ripple::before {
  transition-duration: 75ms;
}
.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-line-ripple::after {
  transition: transform 180ms cubic-bezier(0.4, 0, 0.2, 1), opacity 180ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-mdc-form-field.mat-form-field-animations-enabled .mat-mdc-form-field-hint-wrapper,
.mat-mdc-form-field.mat-form-field-animations-enabled .mat-mdc-form-field-error-wrapper {
  animation-duration: 300ms;
}

.mdc-notched-outline .mdc-floating-label {
  max-width: calc(100% + 1px);
}

.mdc-notched-outline--upgraded .mdc-floating-label--float-above {
  max-width: calc(133.3333333333% + 1px);
}
`],encapsulation:2})})()}return t})();var ss=(()=>{class t{changes=new _;calendarLabel=`Calendar`;openCalendarLabel=`Open calendar`;closeCalendarLabel=`Close calendar`;prevMonthLabel=`Previous month`;nextMonthLabel=`Next month`;prevYearLabel=`Previous year`;nextYearLabel=`Next year`;prevMultiYearLabel=`Previous 24 years`;nextMultiYearLabel=`Next 24 years`;switchToMonthViewLabel=`Choose date`;switchToMultiYearViewLabel=`Choose month and year`;startDateLabel=`Start date`;endDateLabel=`End date`;comparisonDateLabel=`Comparison range`;formatYearRange(e,r){return`${e} \u2013 ${r}`}formatYearRangeLabel(e,r){return`${e} to ${r}`}static ɵfac=function(r){return new(r||t)};static ɵprov=S({token:t,factory:t.ɵfac})}return t})();var HP=0;var cc=class{value;displayValue;ariaLabel;enabled;compareValue;rawValue;id=HP++;cssClasses;constructor(n,e,r,i,o,a=n,s){this.value=n,this.displayValue=e,this.ariaLabel=r,this.enabled=i,this.compareValue=a,this.rawValue=s,this.cssClasses=o instanceof Set?Array.from(o):o}};var UP={passive:!1,capture:!0};var nf={passive:!0,capture:!0};var AE={passive:!0};var as=(()=>{class t{_elementRef=u(N);_ngZone=u(T);_platform=u(xe);_intl=u(ss);_eventCleanups;_skipNextFocus=!1;_focusActiveCellAfterViewChecked=!1;label;rows;todayValue;startValue;endValue;labelMinRequiredCells;numCols=7;activeCell=0;ngAfterViewChecked(){this._focusActiveCellAfterViewChecked&&(this._focusActiveCell(),this._focusActiveCellAfterViewChecked=!1)}isRange=!1;cellAspectRatio=1;comparisonStart=null;comparisonEnd=null;previewStart=null;previewEnd=null;startDateAccessibleName=null;endDateAccessibleName=null;selectedValueChange=new k;previewChange=new k;activeDateChange=new k;dragStarted=new k;dragEnded=new k;_firstRowOffset;_cellPadding;_cellWidth;_startDateLabelId;_endDateLabelId;_comparisonStartDateLabelId;_comparisonEndDateLabelId;_didDragSinceMouseDown=!1;_injector=u(B);comparisonDateAccessibleName=this._intl.comparisonDateLabel;_trackRow=e=>e;constructor(){let e=u(ke),r=u(Fe);this._startDateLabelId=r.getId(`mat-calendar-body-start-`),this._endDateLabelId=r.getId(`mat-calendar-body-end-`),this._comparisonStartDateLabelId=r.getId(`mat-calendar-body-comparison-start-`),this._comparisonEndDateLabelId=r.getId(`mat-calendar-body-comparison-end-`),u(Ze).load(Rn),this._ngZone.runOutsideAngular(()=>{let i=this._elementRef.nativeElement,o=[e.listen(i,`touchmove`,this._touchmoveHandler,UP),e.listen(i,`mouseenter`,this._enterHandler,nf),e.listen(i,`focus`,this._enterHandler,nf),e.listen(i,`mouseleave`,this._leaveHandler,nf),e.listen(i,`blur`,this._leaveHandler,nf),e.listen(i,`mousedown`,this._mousedownHandler,AE),e.listen(i,`touchstart`,this._mousedownHandler,AE)];this._platform.isBrowser&&o.push(e.listen(`window`,`mouseup`,this._mouseupHandler),e.listen(`window`,`touchend`,this._touchendHandler)),this._eventCleanups=o})}_cellClicked(e,r){this._didDragSinceMouseDown||e.enabled&&this.selectedValueChange.emit({value:e.value,event:r})}_emitActiveDateChange(e,r){e.enabled&&this.activeDateChange.emit({value:e.value,event:r})}_isSelected(e){return this.startValue===e||this.endValue===e}ngOnChanges(e){let r=e.numCols,{rows:i,numCols:o}=this;(e.rows||r)&&(this._firstRowOffset=i&&i.length&&i[0].length?o-i[0].length:0),(e.cellAspectRatio||r||!this._cellPadding)&&(this._cellPadding=`${50*this.cellAspectRatio/o}%`),(r||!this._cellWidth)&&(this._cellWidth=`${100/o}%`)}ngOnDestroy(){this._eventCleanups.forEach(e=>e())}_isActiveCell(e,r){let i=e*this.numCols+r;return e&&(i-=this._firstRowOffset),i==this.activeCell}_focusActiveCell(e=!0){Ge(()=>{setTimeout(()=>{let r=this._elementRef.nativeElement.querySelector(`.mat-calendar-body-active`);r&&(e||(this._skipNextFocus=!0),r.focus())})},{injector:this._injector})}_scheduleFocusActiveCellAfterViewChecked(){this._focusActiveCellAfterViewChecked=!0}_isRangeStart(e){return Py(e,this.startValue,this.endValue)}_isRangeEnd(e){return Ly(e,this.startValue,this.endValue)}_isInRange(e){return Vy(e,this.startValue,this.endValue,this.isRange)}_isComparisonStart(e){return Py(e,this.comparisonStart,this.comparisonEnd)}_isComparisonBridgeStart(e,r,i){if(!this._isComparisonStart(e)||this._isRangeStart(e)||!this._isInRange(e))return!1;let o=this.rows[r][i-1];if(!o){let a=this.rows[r-1];o=a&&a[a.length-1]}return o&&!this._isRangeEnd(o.compareValue)}_isComparisonBridgeEnd(e,r,i){if(!this._isComparisonEnd(e)||this._isRangeEnd(e)||!this._isInRange(e))return!1;let o=this.rows[r][i+1];if(!o){let a=this.rows[r+1];o=a&&a[0]}return o&&!this._isRangeStart(o.compareValue)}_isComparisonEnd(e){return Ly(e,this.comparisonStart,this.comparisonEnd)}_isInComparisonRange(e){return Vy(e,this.comparisonStart,this.comparisonEnd,this.isRange)}_isComparisonIdentical(e){return this.comparisonStart===this.comparisonEnd&&e===this.comparisonStart}_isPreviewStart(e){return Py(e,this.previewStart,this.previewEnd)}_isPreviewEnd(e){return Ly(e,this.previewStart,this.previewEnd)}_isInPreview(e){return Vy(e,this.previewStart,this.previewEnd,this.isRange)}_getDescribedby(e){if(!this.isRange)return null;if(this.startValue===e&&this.endValue===e)return`${this._startDateLabelId} ${this._endDateLabelId}`;if(this.startValue===e)return this._startDateLabelId;if(this.endValue===e)return this._endDateLabelId;if(this.comparisonStart!==null&&this.comparisonEnd!==null){if(e===this.comparisonStart&&e===this.comparisonEnd)return`${this._comparisonStartDateLabelId} ${this._comparisonEndDateLabelId}`;if(e===this.comparisonStart)return this._comparisonStartDateLabelId;if(e===this.comparisonEnd)return this._comparisonEndDateLabelId}return null}_enterHandler=e=>{if(this._skipNextFocus&&e.type===`focus`){this._skipNextFocus=!1;return}if(e.target&&this.isRange){let r=this._getCellFromElement(e.target);r&&this._ngZone.run(()=>this.previewChange.emit({value:r.enabled?r:null,event:e}))}};_touchmoveHandler=e=>{if(!this.isRange)return;let r=RE(e),i=r?this._getCellFromElement(r):null;r!==e.target&&(this._didDragSinceMouseDown=!0),Fy(e.target)&&e.preventDefault(),this._ngZone.run(()=>this.previewChange.emit({value:i?.enabled?i:null,event:e}))};_leaveHandler=e=>{this.previewEnd!==null&&this.isRange&&(e.type!==`blur`&&(this._didDragSinceMouseDown=!0),e.target&&this._getCellFromElement(e.target)&&!(e.relatedTarget&&this._getCellFromElement(e.relatedTarget))&&this._ngZone.run(()=>this.previewChange.emit({value:null,event:e})))};_mousedownHandler=e=>{if(!this.isRange)return;this._didDragSinceMouseDown=!1;let r=e.target&&this._getCellFromElement(e.target);!r||!this._isInRange(r.compareValue)||this._ngZone.run(()=>{this.dragStarted.emit({value:r.rawValue,event:e})})};_mouseupHandler=e=>{if(!this.isRange)return;let r=Fy(e.target);if(!r){this._ngZone.run(()=>{this.dragEnded.emit({value:null,event:e})});return}r.closest(`.mat-calendar-body`)===this._elementRef.nativeElement&&this._ngZone.run(()=>{let i=this._getCellFromElement(r);this.dragEnded.emit({value:i?.rawValue??null,event:e})})};_touchendHandler=e=>{let r=RE(e);r&&this._mouseupHandler({target:r})};_getCellFromElement(e){let r=Fy(e);if(r){let i=r.getAttribute(`data-mat-row`),o=r.getAttribute(`data-mat-col`);if(i&&o)return this.rows[parseInt(i)]?.[parseInt(o)]||null}return null}static ɵfac=function(r){return new(r||t)};static ɵcmp=(function(){function e(l,c){return this._trackRow(c)}let r=(l,c)=>c.id;function i(l,c){if(l&1&&(Re(0,`tr`,0)(1,`td`,3),Ne(2),Oe()()),l&2){let d=J();y(),Kr(`padding-top`,d._cellPadding)(`padding-bottom`,d._cellPadding),Y(`colspan`,d.numCols),y(),vt(` `,d.label,` `)}}function o(l,c){if(l&1&&(Re(0,`td`,3),Ne(1),Oe()),l&2){let d=J(2);Kr(`padding-top`,d._cellPadding)(`padding-bottom`,d._cellPadding),Y(`colspan`,d._firstRowOffset),y(),vt(` `,d._firstRowOffset>=d.labelMinRequiredCells?d.label:``,` `)}}function a(l,c){if(l&1){let d=an();Re(0,`td`,6)(1,`button`,7),Na(`click`,function(p){let f=Xe(d).$implicit;return Je(J(2)._cellClicked(f,p))})(`focus`,function(p){let f=Xe(d).$implicit;return Je(J(2)._emitActiveDateChange(f,p))}),Re(2,`span`,8),Ne(3),Oe(),$t(4,`span`,9),Oe()()}if(l&2){let d=c.$implicit,m=c.$index,p=J().$index,f=J();Kr(`width`,f._cellWidth)(`padding-top`,f._cellPadding)(`padding-bottom`,f._cellPadding),Y(`data-mat-row`,p)(`data-mat-col`,m),y(),Ot(d.cssClasses),G(`mat-calendar-body-disabled`,!d.enabled)(`mat-calendar-body-active`,f._isActiveCell(p,m))(`mat-calendar-body-range-start`,f._isRangeStart(d.compareValue))(`mat-calendar-body-range-end`,f._isRangeEnd(d.compareValue))(`mat-calendar-body-in-range`,f._isInRange(d.compareValue))(`mat-calendar-body-comparison-bridge-start`,f._isComparisonBridgeStart(d.compareValue,p,m))(`mat-calendar-body-comparison-bridge-end`,f._isComparisonBridgeEnd(d.compareValue,p,m))(`mat-calendar-body-comparison-start`,f._isComparisonStart(d.compareValue))(`mat-calendar-body-comparison-end`,f._isComparisonEnd(d.compareValue))(`mat-calendar-body-in-comparison-range`,f._isInComparisonRange(d.compareValue))(`mat-calendar-body-preview-start`,f._isPreviewStart(d.compareValue))(`mat-calendar-body-preview-end`,f._isPreviewEnd(d.compareValue))(`mat-calendar-body-in-preview`,f._isInPreview(d.compareValue)),yt(`tabIndex`,f._isActiveCell(p,m)?0:-1),Y(`aria-label`,d.ariaLabel)(`aria-disabled`,!d.enabled||null)(`aria-pressed`,f._isSelected(d.compareValue))(`aria-current`,f.todayValue===d.compareValue?`date`:null)(`aria-describedby`,f._getDescribedby(d.compareValue)),y(),G(`mat-calendar-body-selected`,f._isSelected(d.compareValue))(`mat-calendar-body-comparison-identical`,f._isComparisonIdentical(d.compareValue))(`mat-calendar-body-today`,f.todayValue===d.compareValue),y(),vt(` `,d.displayValue,` `)}}function s(l,c){if(l&1&&(Re(0,`tr`,1),le(1,o,2,6,`td`,4),Eo(2,a,5,49,`td`,5,r),Oe()),l&2){let d=c.$implicit,m=c.$index,p=J();y(),ce(m===0&&p._firstRowOffset?1:-1),y(),ko(d)}}return F({type:t,selectors:[[``,`mat-calendar-body`,``]],hostAttrs:[1,`mat-calendar-body`],inputs:{label:`label`,rows:`rows`,todayValue:`todayValue`,startValue:`startValue`,endValue:`endValue`,labelMinRequiredCells:`labelMinRequiredCells`,numCols:`numCols`,activeCell:`activeCell`,isRange:`isRange`,cellAspectRatio:`cellAspectRatio`,comparisonStart:`comparisonStart`,comparisonEnd:`comparisonEnd`,previewStart:`previewStart`,previewEnd:`previewEnd`,startDateAccessibleName:`startDateAccessibleName`,endDateAccessibleName:`endDateAccessibleName`},outputs:{selectedValueChange:`selectedValueChange`,previewChange:`previewChange`,activeDateChange:`activeDateChange`,dragStarted:`dragStarted`,dragEnded:`dragEnded`},exportAs:[`matCalendarBody`],features:[Se],decls:11,vars:11,consts:[[`aria-hidden`,`true`],[`role`,`row`],[1,`mat-calendar-body-hidden-label`,3,`id`],[1,`mat-calendar-body-label`],[1,`mat-calendar-body-label`,3,`paddingTop`,`paddingBottom`],[`role`,`gridcell`,1,`mat-calendar-body-cell-container`,3,`width`,`paddingTop`,`paddingBottom`],[`role`,`gridcell`,1,`mat-calendar-body-cell-container`],[`type`,`button`,1,`mat-calendar-body-cell`,3,`click`,`focus`,`tabindex`],[1,`mat-calendar-body-cell-content`,`mat-focus-indicator`],[`aria-hidden`,`true`,1,`mat-calendar-body-cell-preview`]],template:function(c,d){c&1&&(le(0,i,3,6,`tr`,0),Eo(1,s,4,1,`tr`,1,e,!0),Re(3,`span`,2),Ne(4),Oe(),Re(5,`span`,2),Ne(6),Oe(),Re(7,`span`,2),Ne(8),Oe(),Re(9,`span`,2),Ne(10),Oe()),c&2&&(ce(d._firstRowOffset<d.labelMinRequiredCells?0:-1),y(),ko(d.rows),y(2),yt(`id`,d._startDateLabelId),y(),vt(` `,d.startDateAccessibleName,`
`),y(),yt(`id`,d._endDateLabelId),y(),vt(` `,d.endDateAccessibleName,`
`),y(),yt(`id`,d._comparisonStartDateLabelId),y(),Dl(` `,d.comparisonDateAccessibleName,` `,d.startDateAccessibleName,`
`),y(),yt(`id`,d._comparisonEndDateLabelId),y(),Dl(` `,d.comparisonDateAccessibleName,` `,d.endDateAccessibleName,`
`))},styles:[`.mat-calendar-body {
  min-width: 224px;
}

.mat-calendar-body-today:not(.mat-calendar-body-selected):not(.mat-calendar-body-comparison-identical) {
  border-color: var(--%NS%mat-datepicker-calendar-date-today-outline-color, var(--%NS%mat-sys-primary));
}

.mat-calendar-body-label {
  height: 0;
  line-height: 0;
  text-align: start;
  padding-left: 4.7142857143%;
  padding-right: 4.7142857143%;
  font-size: var(--%NS%mat-datepicker-calendar-body-label-text-size, var(--%NS%mat-sys-title-small-size));
  font-weight: var(--%NS%mat-datepicker-calendar-body-label-text-weight, var(--%NS%mat-sys-title-small-weight));
  color: var(--%NS%mat-datepicker-calendar-body-label-text-color, var(--%NS%mat-sys-on-surface));
}

.mat-calendar-body-hidden-label {
  display: none;
}

.mat-calendar-body-cell-container {
  position: relative;
  height: 0;
  line-height: 0;
}

.mat-calendar-body-cell {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: none;
  text-align: center;
  outline: none;
  margin: 0;
  font-family: var(--%NS%mat-datepicker-calendar-text-font, var(--%NS%mat-sys-body-medium-font));
  font-size: var(--%NS%mat-datepicker-calendar-text-size, var(--%NS%mat-sys-body-medium-size));
  -webkit-user-select: none;
  user-select: none;
  cursor: pointer;
  outline: none;
  border: none;
  -webkit-tap-highlight-color: transparent;
}
.mat-calendar-body-cell::-moz-focus-inner {
  border: 0;
}

.mat-calendar-body-cell::before,
.mat-calendar-body-cell::after,
.mat-calendar-body-cell-preview {
  content: "";
  position: absolute;
  top: 5%;
  left: 0;
  z-index: 0;
  box-sizing: border-box;
  display: block;
  height: 90%;
  width: 100%;
}

.mat-calendar-body-range-start:not(.mat-calendar-body-in-comparison-range)::before,
.mat-calendar-body-range-start::after,
.mat-calendar-body-comparison-start:not(.mat-calendar-body-comparison-bridge-start)::before,
.mat-calendar-body-comparison-start::after,
.mat-calendar-body-preview-start .mat-calendar-body-cell-preview {
  left: 5%;
  width: 95%;
  border-top-left-radius: 999px;
  border-bottom-left-radius: 999px;
}
[dir=rtl] .mat-calendar-body-range-start:not(.mat-calendar-body-in-comparison-range)::before,
[dir=rtl] .mat-calendar-body-range-start::after,
[dir=rtl] .mat-calendar-body-comparison-start:not(.mat-calendar-body-comparison-bridge-start)::before,
[dir=rtl] .mat-calendar-body-comparison-start::after,
[dir=rtl] .mat-calendar-body-preview-start .mat-calendar-body-cell-preview {
  left: 0;
  border-radius: 0;
  border-top-right-radius: 999px;
  border-bottom-right-radius: 999px;
}

.mat-calendar-body-range-end:not(.mat-calendar-body-in-comparison-range)::before,
.mat-calendar-body-range-end::after,
.mat-calendar-body-comparison-end:not(.mat-calendar-body-comparison-bridge-end)::before,
.mat-calendar-body-comparison-end::after,
.mat-calendar-body-preview-end .mat-calendar-body-cell-preview {
  width: 95%;
  border-top-right-radius: 999px;
  border-bottom-right-radius: 999px;
}
[dir=rtl] .mat-calendar-body-range-end:not(.mat-calendar-body-in-comparison-range)::before,
[dir=rtl] .mat-calendar-body-range-end::after,
[dir=rtl] .mat-calendar-body-comparison-end:not(.mat-calendar-body-comparison-bridge-end)::before,
[dir=rtl] .mat-calendar-body-comparison-end::after,
[dir=rtl] .mat-calendar-body-preview-end .mat-calendar-body-cell-preview {
  left: 5%;
  border-radius: 0;
  border-top-left-radius: 999px;
  border-bottom-left-radius: 999px;
}

[dir=rtl] .mat-calendar-body-comparison-bridge-start.mat-calendar-body-range-end::after,
[dir=rtl] .mat-calendar-body-comparison-bridge-end.mat-calendar-body-range-start::after {
  width: 95%;
  border-top-right-radius: 999px;
  border-bottom-right-radius: 999px;
}

.mat-calendar-body-comparison-start.mat-calendar-body-range-end::after, [dir=rtl] .mat-calendar-body-comparison-start.mat-calendar-body-range-end::after,
.mat-calendar-body-comparison-end.mat-calendar-body-range-start::after,
[dir=rtl] .mat-calendar-body-comparison-end.mat-calendar-body-range-start::after {
  width: 90%;
}

.mat-calendar-body-in-preview {
  color: var(--%NS%mat-datepicker-calendar-date-preview-state-outline-color, var(--%NS%mat-sys-primary));
}
.mat-calendar-body-in-preview .mat-calendar-body-cell-preview {
  border-top: dashed 1px;
  border-bottom: dashed 1px;
}

.mat-calendar-body-preview-start .mat-calendar-body-cell-preview {
  border-left: dashed 1px;
}
[dir=rtl] .mat-calendar-body-preview-start .mat-calendar-body-cell-preview {
  border-left: 0;
  border-right: dashed 1px;
}

.mat-calendar-body-preview-end .mat-calendar-body-cell-preview {
  border-right: dashed 1px;
}
[dir=rtl] .mat-calendar-body-preview-end .mat-calendar-body-cell-preview {
  border-right: 0;
  border-left: dashed 1px;
}

.mat-calendar-body-disabled {
  cursor: default;
}
.mat-calendar-body-disabled > .mat-calendar-body-cell-content:not(.mat-calendar-body-selected):not(.mat-calendar-body-comparison-identical) {
  color: var(--%NS%mat-datepicker-calendar-date-disabled-state-text-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}
.mat-calendar-body-disabled > .mat-calendar-body-today:not(.mat-calendar-body-selected):not(.mat-calendar-body-comparison-identical) {
  border-color: var(--%NS%mat-datepicker-calendar-date-today-disabled-state-outline-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}
@media (forced-colors: active) {
  .mat-calendar-body-disabled {
    opacity: 0.5;
  }
}

.mat-calendar-body-cell-content {
  top: 5%;
  left: 5%;
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  width: 90%;
  height: 90%;
  line-height: 1;
  border-width: 1px;
  border-style: solid;
  border-radius: 999px;
  color: var(--%NS%mat-datepicker-calendar-date-text-color, var(--%NS%mat-sys-on-surface));
  border-color: var(--%NS%mat-datepicker-calendar-date-outline-color, transparent);
}
.mat-calendar-body-cell-content.mat-focus-indicator {
  position: absolute;
}
.mat-calendar-body-cell-content::before {
  border-radius: 50%;
}
@media (forced-colors: active) {
  .mat-calendar-body-cell-content {
    border: none;
  }
}

.cdk-keyboard-focused .mat-calendar-body-active > .mat-calendar-body-cell-content:not(.mat-calendar-body-selected):not(.mat-calendar-body-comparison-identical), .cdk-program-focused .mat-calendar-body-active > .mat-calendar-body-cell-content:not(.mat-calendar-body-selected):not(.mat-calendar-body-comparison-identical) {
  background-color: var(--%NS%mat-datepicker-calendar-date-focus-state-background-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) calc(var(--%NS%mat-sys-focus-state-layer-opacity) * 100%), transparent));
}

@media (hover: hover) {
  .mat-calendar-body-cell:not(.mat-calendar-body-disabled):hover > .mat-calendar-body-cell-content:not(.mat-calendar-body-selected):not(.mat-calendar-body-comparison-identical) {
    background-color: var(--%NS%mat-datepicker-calendar-date-hover-state-background-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) calc(var(--%NS%mat-sys-hover-state-layer-opacity) * 100%), transparent));
  }
}
.mat-calendar-body-selected {
  background-color: var(--%NS%mat-datepicker-calendar-date-selected-state-background-color, var(--%NS%mat-sys-primary));
  color: var(--%NS%mat-datepicker-calendar-date-selected-state-text-color, var(--%NS%mat-sys-on-primary));
}
.mat-calendar-body-disabled > .mat-calendar-body-selected {
  background-color: var(--%NS%mat-datepicker-calendar-date-selected-disabled-state-background-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}
.mat-calendar-body-selected.mat-calendar-body-today {
  box-shadow: inset 0 0 0 1px var(--%NS%mat-datepicker-calendar-date-today-selected-state-outline-color, var(--%NS%mat-sys-primary));
}

.mat-calendar-body-in-range::before {
  background: var(--%NS%mat-datepicker-calendar-date-in-range-state-background-color, var(--%NS%mat-sys-primary-container));
}

.mat-calendar-body-comparison-identical,
.mat-calendar-body-in-comparison-range::before {
  background: var(--%NS%mat-datepicker-calendar-date-in-comparison-range-state-background-color, var(--%NS%mat-sys-tertiary-container));
}

.mat-calendar-body-comparison-identical,
.mat-calendar-body-in-comparison-range::before {
  background: var(--%NS%mat-datepicker-calendar-date-in-comparison-range-state-background-color, var(--%NS%mat-sys-tertiary-container));
}

.mat-calendar-body-comparison-bridge-start::before,
[dir=rtl] .mat-calendar-body-comparison-bridge-end::before {
  background: linear-gradient(to right, var(--%NS%mat-datepicker-calendar-date-in-range-state-background-color, var(--%NS%mat-sys-primary-container)) 50%, var(--%NS%mat-datepicker-calendar-date-in-comparison-range-state-background-color, var(--%NS%mat-sys-tertiary-container)) 50%);
}

.mat-calendar-body-comparison-bridge-end::before,
[dir=rtl] .mat-calendar-body-comparison-bridge-start::before {
  background: linear-gradient(to left, var(--%NS%mat-datepicker-calendar-date-in-range-state-background-color, var(--%NS%mat-sys-primary-container)) 50%, var(--%NS%mat-datepicker-calendar-date-in-comparison-range-state-background-color, var(--%NS%mat-sys-tertiary-container)) 50%);
}

.mat-calendar-body-in-range > .mat-calendar-body-comparison-identical,
.mat-calendar-body-in-comparison-range.mat-calendar-body-in-range::after {
  background: var(--%NS%mat-datepicker-calendar-date-in-overlap-range-state-background-color, var(--%NS%mat-sys-secondary-container));
}

.mat-calendar-body-comparison-identical.mat-calendar-body-selected,
.mat-calendar-body-in-comparison-range > .mat-calendar-body-selected {
  background: var(--%NS%mat-datepicker-calendar-date-in-overlap-range-selected-state-background-color, var(--%NS%mat-sys-secondary));
}

@media (forced-colors: active) {
  .mat-datepicker-popup:not(:empty),
  .mat-calendar-body-cell:not(.mat-calendar-body-in-range) .mat-calendar-body-selected {
    outline: solid 1px;
  }
  .mat-calendar-body-today {
    outline: dotted 1px;
  }
  .mat-calendar-body-cell::before,
  .mat-calendar-body-cell::after,
  .mat-calendar-body-selected {
    background: none;
  }
  .mat-calendar-body-in-range::before,
  .mat-calendar-body-comparison-bridge-start::before,
  .mat-calendar-body-comparison-bridge-end::before {
    border-top: solid 1px;
    border-bottom: solid 1px;
  }
  .mat-calendar-body-range-start::before {
    border-left: solid 1px;
  }
  [dir=rtl] .mat-calendar-body-range-start::before {
    border-left: 0;
    border-right: solid 1px;
  }
  .mat-calendar-body-range-end::before {
    border-right: solid 1px;
  }
  [dir=rtl] .mat-calendar-body-range-end::before {
    border-right: 0;
    border-left: solid 1px;
  }
  .mat-calendar-body-in-comparison-range::before {
    border-top: dashed 1px;
    border-bottom: dashed 1px;
  }
  .mat-calendar-body-comparison-start::before {
    border-left: dashed 1px;
  }
  [dir=rtl] .mat-calendar-body-comparison-start::before {
    border-left: 0;
    border-right: dashed 1px;
  }
  .mat-calendar-body-comparison-end::before {
    border-right: dashed 1px;
  }
  [dir=rtl] .mat-calendar-body-comparison-end::before {
    border-right: 0;
    border-left: dashed 1px;
  }
}
`],encapsulation:2})})()}return t})();function Oy(t){return t?.nodeName===`TD`}function Fy(t){let n;return Oy(t)?n=t:Oy(t.parentNode)?n=t.parentNode:Oy(t.parentNode?.parentNode)&&(n=t.parentNode.parentNode),n?.getAttribute(`data-mat-row`)!=null?n:null}function Py(t,n,e){return e!==null&&n!==e&&t<e&&t===n}function Ly(t,n,e){return n!==null&&n!==e&&t>=n&&t===e}function Vy(t,n,e,r){return r&&n!==null&&e!==null&&n!==e&&t>=n&&t<=e}function RE(t){let n=t.changedTouches[0];return document.elementFromPoint(n.clientX,n.clientY)}var Pn=class{start;end;_disableStructuralEquivalency;constructor(n,e){this.start=n,this.end=e}};var dc=(()=>{class t{selection;_adapter;_selectionChanged=new _;selectionChanged=this._selectionChanged;constructor(e,r){this.selection=e,this._adapter=r,this.selection=e}updateSelection(e,r){let i=this.selection;this.selection=e,this._selectionChanged.next({selection:e,source:r,oldValue:i})}ngOnDestroy(){this._selectionChanged.complete()}_isValidDateInstance(e){return this._adapter.isDateInstance(e)&&this._adapter.isValid(e)}static ɵfac=function(r){So()};static ɵprov=q({token:t,factory:t.ɵfac})}return t})();var $P=(()=>{class t extends dc{constructor(e){super(null,e)}add(e){super.updateSelection(e,this)}isValid(){return this.selection!=null&&this._isValidDateInstance(this.selection)}isComplete(){return this.selection!=null}clone(){let e=new t(this._adapter);return e.updateSelection(this.selection,this),e}static ɵfac=function(r){return new(r||t)(P(Yt))};static ɵprov=q({token:t,factory:t.ɵfac})}return t})();var VE={provide:dc,useFactory:()=>u(dc,{optional:!0,skipSelf:!0})||new $P(u(Yt))};var BE=new g(`MAT_DATE_RANGE_SELECTION_STRATEGY`);var By=7;var GP=0;var OE=(()=>{class t{_changeDetectorRef=u(Ce);_dateFormats=u(Fi,{optional:!0});_dateAdapter=u(Yt,{optional:!0});_dir=u(lt,{optional:!0});_rangeStrategy=u(BE,{optional:!0});_rerenderSubscription=ne.EMPTY;_selectionKeyPressed=!1;get activeDate(){return this._activeDate}set activeDate(e){let r=this._activeDate,i=this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e))||this._dateAdapter.today();this._activeDate=this._dateAdapter.clampDate(i,this.minDate,this.maxDate),this._hasSameMonthAndYear(r,this._activeDate)||this._init()}_activeDate;get selected(){return this._selected}set selected(e){e instanceof Pn?this._selected=e:this._selected=this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e)),this._setRanges(this._selected)}_selected=null;get minDate(){return this._minDate}set minDate(e){this._minDate=this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e))}_minDate=null;get maxDate(){return this._maxDate}set maxDate(e){this._maxDate=this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e))}_maxDate=null;dateFilter;dateClass;comparisonStart=null;comparisonEnd=null;startDateAccessibleName=null;endDateAccessibleName=null;activeDrag=null;selectedChange=new k;_userSelection=new k;dragStarted=new k;dragEnded=new k;activeDateChange=new k;_matCalendarBody;_monthLabel=L(``);_weeks=L([]);_firstWeekOffset=L(0);_rangeStart=L(null);_rangeEnd=L(null);_comparisonRangeStart=L(null);_comparisonRangeEnd=L(null);_previewStart=L(null);_previewEnd=L(null);_isRange=L(!1);_todayDate=L(null);_weekdays=L([]);constructor(){u(Ze).load(xr),this._activeDate=this._dateAdapter.today()}ngAfterContentInit(){this._rerenderSubscription=this._dateAdapter.localeChanges.pipe(_t(null)).subscribe(()=>this._init())}ngOnChanges(e){let r=e.comparisonStart||e.comparisonEnd;r&&!r.firstChange&&this._setRanges(this.selected),e.activeDrag&&!this.activeDrag&&this._clearPreview()}ngOnDestroy(){this._rerenderSubscription.unsubscribe()}_dateSelected(e){let r=e.value,i=this._getDateFromDayOfMonth(r),o,a;this._selected instanceof Pn?(o=this._getDateInCurrentMonth(this._selected.start),a=this._getDateInCurrentMonth(this._selected.end)):o=a=this._getDateInCurrentMonth(this._selected),(o!==r||a!==r)&&this.selectedChange.emit(i),this._userSelection.emit({value:i,event:e.event}),this._clearPreview(),this._changeDetectorRef.markForCheck()}_updateActiveDate(e){let r=e.value,i=this._activeDate;this.activeDate=this._getDateFromDayOfMonth(r),this._dateAdapter.compareDate(i,this.activeDate)&&this.activeDateChange.emit(this._activeDate)}_handleCalendarBodyKeydown(e){let r=this._activeDate,i=this._isRtl();switch(e.keyCode){case 37:this.activeDate=this._dateAdapter.addCalendarDays(this._activeDate,i?1:-1);break;case 39:this.activeDate=this._dateAdapter.addCalendarDays(this._activeDate,i?-1:1);break;case 38:this.activeDate=this._dateAdapter.addCalendarDays(this._activeDate,-7);break;case 40:this.activeDate=this._dateAdapter.addCalendarDays(this._activeDate,7);break;case 36:this.activeDate=this._dateAdapter.addCalendarDays(this._activeDate,1-this._dateAdapter.getDate(this._activeDate));break;case 35:this.activeDate=this._dateAdapter.addCalendarDays(this._activeDate,this._dateAdapter.getNumDaysInMonth(this._activeDate)-this._dateAdapter.getDate(this._activeDate));break;case 33:this.activeDate=e.altKey?this._dateAdapter.addCalendarYears(this._activeDate,-1):this._dateAdapter.addCalendarMonths(this._activeDate,-1);break;case 34:this.activeDate=e.altKey?this._dateAdapter.addCalendarYears(this._activeDate,1):this._dateAdapter.addCalendarMonths(this._activeDate,1);break;case 13:case 32:this._selectionKeyPressed=!0,this._canSelect(this._activeDate)&&e.preventDefault();return;case 27:this._previewEnd()!=null&&!tt(e)&&(this._clearPreview(),this.activeDrag?this.dragEnded.emit({value:null,event:e}):(this.selectedChange.emit(null),this._userSelection.emit({value:null,event:e})),e.preventDefault(),e.stopPropagation());return;default:return}this._dateAdapter.compareDate(r,this.activeDate)&&(this.activeDateChange.emit(this.activeDate),this._focusActiveCellAfterViewChecked()),e.preventDefault()}_handleCalendarBodyKeyup(e){(e.keyCode===32||e.keyCode===13)&&(this._selectionKeyPressed&&this._canSelect(this._activeDate)&&this._dateSelected({value:this._dateAdapter.getDate(this._activeDate),event:e}),this._selectionKeyPressed=!1)}_init(){this._setRanges(this.selected),this._todayDate.set(this._getCellCompareValue(this._dateAdapter.today())),this._monthLabel.set(this._dateFormats.display.monthLabel?this._dateAdapter.format(this.activeDate,this._dateFormats.display.monthLabel):this._dateAdapter.getMonthNames(`short`)[this._dateAdapter.getMonth(this.activeDate)].toLocaleUpperCase());let e=this._dateAdapter.createDate(this._dateAdapter.getYear(this.activeDate),this._dateAdapter.getMonth(this.activeDate),1);this._firstWeekOffset.set((By+this._dateAdapter.getDayOfWeek(e)-this._dateAdapter.getFirstDayOfWeek())%By),this._initWeekdays(),this._createWeekCells(),this._changeDetectorRef.markForCheck()}_focusActiveCell(e){this._matCalendarBody._focusActiveCell(e)}_focusActiveCellAfterViewChecked(){this._matCalendarBody._scheduleFocusActiveCellAfterViewChecked()}_previewChanged({event:e,value:r}){if(this._rangeStrategy){let i=r?r.rawValue:null,o=this._rangeStrategy.createPreview(i,this.selected,e);if(this._previewStart.set(this._getCellCompareValue(o.start)),this._previewEnd.set(this._getCellCompareValue(o.end)),this.activeDrag&&i){let a=this._rangeStrategy.createDrag?.(this.activeDrag.value,this.selected,i,e);a&&(this._previewStart.set(this._getCellCompareValue(a.start)),this._previewEnd.set(this._getCellCompareValue(a.end)))}}}_dragEnded(e){if(this.activeDrag)if(e.value){let r=this._rangeStrategy?.createDrag?.(this.activeDrag.value,this.selected,e.value,e.event);this.dragEnded.emit({value:r??null,event:e.event})}else this.dragEnded.emit({value:null,event:e.event})}_getDateFromDayOfMonth(e){return this._dateAdapter.createDate(this._dateAdapter.getYear(this.activeDate),this._dateAdapter.getMonth(this.activeDate),e)}_initWeekdays(){let e=this._dateAdapter.getFirstDayOfWeek(),r=this._dateAdapter.getDayOfWeekNames(`narrow`),o=this._dateAdapter.getDayOfWeekNames(`long`).map((a,s)=>({long:a,narrow:r[s],id:GP++}));this._weekdays.set(o.slice(e).concat(o.slice(0,e)))}_createWeekCells(){let e=this._dateAdapter.getNumDaysInMonth(this.activeDate),r=this._dateAdapter.getDateNames(),i=[[]];for(let o=0,a=this._firstWeekOffset();o<e;o++,a++){a==By&&(i.push([]),a=0);let s=this._dateAdapter.createDate(this._dateAdapter.getYear(this.activeDate),this._dateAdapter.getMonth(this.activeDate),o+1),l=this._shouldEnableDate(s),c=this._dateAdapter.format(s,this._dateFormats.display.dateA11yLabel),d=this.dateClass?this.dateClass(s,`month`):void 0;i[i.length-1].push(new cc(o+1,r[o],c,l,d,this._getCellCompareValue(s),s))}this._weeks.set(i)}_shouldEnableDate(e){return!!e&&(!this.minDate||this._dateAdapter.compareDate(e,this.minDate)>=0)&&(!this.maxDate||this._dateAdapter.compareDate(e,this.maxDate)<=0)&&(!this.dateFilter||this.dateFilter(e))}_getDateInCurrentMonth(e){return e&&this._hasSameMonthAndYear(e,this.activeDate)?this._dateAdapter.getDate(e):null}_hasSameMonthAndYear(e,r){return!!(e&&r&&this._dateAdapter.getMonth(e)==this._dateAdapter.getMonth(r)&&this._dateAdapter.getYear(e)==this._dateAdapter.getYear(r))}_getCellCompareValue(e){if(e){let r=this._dateAdapter.getYear(e),i=this._dateAdapter.getMonth(e),o=this._dateAdapter.getDate(e);return new Date(r,i,o).getTime()}return null}_isRtl(){return this._dir&&this._dir.value===`rtl`}_setRanges(e){e instanceof Pn?(this._rangeStart.set(this._getCellCompareValue(e.start)),this._rangeEnd.set(this._getCellCompareValue(e.end)),this._isRange.set(!0)):(this._rangeStart.set(this._getCellCompareValue(e)),this._rangeEnd.set(this._rangeStart()),this._isRange.set(!1)),this._comparisonRangeStart.set(this._getCellCompareValue(this.comparisonStart)),this._comparisonRangeEnd.set(this._getCellCompareValue(this.comparisonEnd))}_canSelect(e){return!this.dateFilter||this.dateFilter(e)}_clearPreview(){this._previewStart.set(null),this._previewEnd.set(null)}static ɵfac=function(r){return new(r||t)};static ɵcmp=(function(){let e=(i,o)=>o.id;function r(i,o){if(i&1&&(C(0,`th`,2)(1,`span`,6),Ne(2),E(),C(3,`span`,3),Ne(4),E()()),i&2){let a=o.$implicit;y(2),Ft(a.long),y(2),Ft(a.narrow)}}return F({type:t,selectors:[[`mat-month-view`]],viewQuery:function(o,a){if(o&1&&qe(as,5),o&2){let s;H(s=U())&&(a._matCalendarBody=s.first)}},inputs:{activeDate:`activeDate`,selected:`selected`,minDate:`minDate`,maxDate:`maxDate`,dateFilter:`dateFilter`,dateClass:`dateClass`,comparisonStart:`comparisonStart`,comparisonEnd:`comparisonEnd`,startDateAccessibleName:`startDateAccessibleName`,endDateAccessibleName:`endDateAccessibleName`,activeDrag:`activeDrag`},outputs:{selectedChange:`selectedChange`,_userSelection:`_userSelection`,dragStarted:`dragStarted`,dragEnded:`dragEnded`,activeDateChange:`activeDateChange`},exportAs:[`matMonthView`],features:[Se],decls:8,vars:14,consts:[[`role`,`grid`,1,`mat-calendar-table`],[1,`mat-calendar-table-header`],[`scope`,`col`],[`aria-hidden`,`true`],[`colspan`,`7`,1,`mat-calendar-table-header-divider`],[`mat-calendar-body`,``,3,`selectedValueChange`,`activeDateChange`,`previewChange`,`dragStarted`,`dragEnded`,`keyup`,`keydown`,`label`,`rows`,`todayValue`,`startValue`,`endValue`,`comparisonStart`,`comparisonEnd`,`previewStart`,`previewEnd`,`isRange`,`labelMinRequiredCells`,`activeCell`,`startDateAccessibleName`,`endDateAccessibleName`],[1,`cdk-visually-hidden`]],template:function(o,a){o&1&&(C(0,`table`,0)(1,`thead`,1)(2,`tr`),Eo(3,r,5,2,`th`,2,e),E(),C(5,`tr`,3),we(6,`th`,4),E()(),C(7,`tbody`,5),Q(`selectedValueChange`,function(l){return a._dateSelected(l)})(`activeDateChange`,function(l){return a._updateActiveDate(l)})(`previewChange`,function(l){return a._previewChanged(l)})(`dragStarted`,function(l){return a.dragStarted.emit(l)})(`dragEnded`,function(l){return a._dragEnded(l)})(`keyup`,function(l){return a._handleCalendarBodyKeyup(l)})(`keydown`,function(l){return a._handleCalendarBodyKeydown(l)}),E()()),o&2&&(y(3),ko(a._weekdays()),y(4),ue(`label`,a._monthLabel())(`rows`,a._weeks())(`todayValue`,a._todayDate())(`startValue`,a._rangeStart())(`endValue`,a._rangeEnd())(`comparisonStart`,a._comparisonRangeStart())(`comparisonEnd`,a._comparisonRangeEnd())(`previewStart`,a._previewStart())(`previewEnd`,a._previewEnd())(`isRange`,a._isRange())(`labelMinRequiredCells`,3)(`activeCell`,a._dateAdapter.getDate(a.activeDate)-1)(`startDateAccessibleName`,a.startDateAccessibleName)(`endDateAccessibleName`,a.endDateAccessibleName))},dependencies:[as],encapsulation:2})})()}return t})();var yn=24;var jy=4;var FE=(()=>{class t{_changeDetectorRef=u(Ce);_dateAdapter=u(Yt,{optional:!0});_dir=u(lt,{optional:!0});_rerenderSubscription=ne.EMPTY;_selectionKeyPressed=!1;get activeDate(){return this._activeDate}set activeDate(e){let r=this._activeDate,i=this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e))||this._dateAdapter.today();this._activeDate=this._dateAdapter.clampDate(i,this.minDate,this.maxDate),jE(this._dateAdapter,r,this._activeDate,this.minDate,this.maxDate)||this._init()}_activeDate;get selected(){return this._selected}set selected(e){e instanceof Pn?this._selected=e:this._selected=this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e)),this._setSelectedYear(e)}_selected=null;get minDate(){return this._minDate}set minDate(e){this._minDate=this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e))}_minDate=null;get maxDate(){return this._maxDate}set maxDate(e){this._maxDate=this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e))}_maxDate=null;dateFilter;dateClass;selectedChange=new k;yearSelected=new k;activeDateChange=new k;_matCalendarBody;_years=L([]);_todayYear=L(0);_selectedYear=L(null);constructor(){this._dateAdapter,this._activeDate=this._dateAdapter.today()}ngAfterContentInit(){this._rerenderSubscription=this._dateAdapter.localeChanges.pipe(_t(null)).subscribe(()=>this._init())}ngOnDestroy(){this._rerenderSubscription.unsubscribe()}_init(){this._todayYear.set(this._dateAdapter.getYear(this._dateAdapter.today()));let r=this._dateAdapter.getYear(this._activeDate)-lc(this._dateAdapter,this.activeDate,this.minDate,this.maxDate),i=[];for(let o=0,a=[];o<yn;o++)a.push(r+o),a.length==jy&&(i.push(a.map(s=>this._createCellForYear(s))),a=[]);this._years.set(i),this._changeDetectorRef.markForCheck()}_yearSelected(e){let r=e.value,i=this._dateAdapter.createDate(r,0,1),o=this._getDateFromYear(r);this.yearSelected.emit(i),this.selectedChange.emit(o)}_updateActiveDate(e){let r=e.value,i=this._activeDate;this.activeDate=this._getDateFromYear(r),this._dateAdapter.compareDate(i,this.activeDate)&&this.activeDateChange.emit(this.activeDate)}_handleCalendarBodyKeydown(e){let r=this._activeDate,i=this._isRtl();switch(e.keyCode){case 37:this.activeDate=this._dateAdapter.addCalendarYears(this._activeDate,i?1:-1);break;case 39:this.activeDate=this._dateAdapter.addCalendarYears(this._activeDate,i?-1:1);break;case 38:this.activeDate=this._dateAdapter.addCalendarYears(this._activeDate,-jy);break;case 40:this.activeDate=this._dateAdapter.addCalendarYears(this._activeDate,jy);break;case 36:this.activeDate=this._dateAdapter.addCalendarYears(this._activeDate,-lc(this._dateAdapter,this.activeDate,this.minDate,this.maxDate));break;case 35:this.activeDate=this._dateAdapter.addCalendarYears(this._activeDate,yn-lc(this._dateAdapter,this.activeDate,this.minDate,this.maxDate)-1);break;case 33:this.activeDate=this._dateAdapter.addCalendarYears(this._activeDate,e.altKey?-yn*10:-yn);break;case 34:this.activeDate=this._dateAdapter.addCalendarYears(this._activeDate,e.altKey?yn*10:yn);break;case 13:case 32:this._selectionKeyPressed=!0;break;default:return}this._dateAdapter.compareDate(r,this.activeDate)&&this.activeDateChange.emit(this.activeDate),this._focusActiveCellAfterViewChecked(),e.preventDefault()}_handleCalendarBodyKeyup(e){(e.keyCode===32||e.keyCode===13)&&(this._selectionKeyPressed&&this._yearSelected({value:this._dateAdapter.getYear(this._activeDate),event:e}),this._selectionKeyPressed=!1)}_getActiveCell(){return lc(this._dateAdapter,this.activeDate,this.minDate,this.maxDate)}_focusActiveCell(){this._matCalendarBody._focusActiveCell()}_focusActiveCellAfterViewChecked(){this._matCalendarBody._scheduleFocusActiveCellAfterViewChecked()}_getDateFromYear(e){let r=this._dateAdapter.getMonth(this.activeDate),i=this._dateAdapter.getNumDaysInMonth(this._dateAdapter.createDate(e,r,1));return this._dateAdapter.createDate(e,r,Math.min(this._dateAdapter.getDate(this.activeDate),i))}_createCellForYear(e){let r=this._dateAdapter.createDate(e,0,1),i=this._dateAdapter.getYearName(r),o=this.dateClass?this.dateClass(r,`multi-year`):void 0;return new cc(e,i,i,this._shouldEnableYear(e),o)}_shouldEnableYear(e){if(e==null||this.maxDate&&e>this._dateAdapter.getYear(this.maxDate)||this.minDate&&e<this._dateAdapter.getYear(this.minDate))return!1;if(!this.dateFilter)return!0;let r=this._dateAdapter.createDate(e,0,1);for(let i=r;this._dateAdapter.getYear(i)==e;i=this._dateAdapter.addCalendarDays(i,1))if(this.dateFilter(i))return!0;return!1}_isRtl(){return this._dir&&this._dir.value===`rtl`}_setSelectedYear(e){if(this._selectedYear.set(null),e instanceof Pn){let r=e.start||e.end;r&&this._selectedYear.set(this._dateAdapter.getYear(r))}else e&&this._selectedYear.set(this._dateAdapter.getYear(e))}static ɵfac=function(r){return new(r||t)};static ɵcmp=F({type:t,selectors:[[`mat-multi-year-view`]],viewQuery:function(r,i){if(r&1&&qe(as,5),r&2){let o;H(o=U())&&(i._matCalendarBody=o.first)}},inputs:{activeDate:`activeDate`,selected:`selected`,minDate:`minDate`,maxDate:`maxDate`,dateFilter:`dateFilter`,dateClass:`dateClass`},outputs:{selectedChange:`selectedChange`,yearSelected:`yearSelected`,activeDateChange:`activeDateChange`},exportAs:[`matMultiYearView`],decls:5,vars:7,consts:[[`role`,`grid`,1,`mat-calendar-table`],[`aria-hidden`,`true`,1,`mat-calendar-table-header`],[`colspan`,`4`,1,`mat-calendar-table-header-divider`],[`mat-calendar-body`,``,3,`selectedValueChange`,`activeDateChange`,`keyup`,`keydown`,`rows`,`todayValue`,`startValue`,`endValue`,`numCols`,`cellAspectRatio`,`activeCell`]],template:function(r,i){r&1&&(C(0,`table`,0)(1,`thead`,1)(2,`tr`),we(3,`th`,2),E()(),C(4,`tbody`,3),Q(`selectedValueChange`,function(a){return i._yearSelected(a)})(`activeDateChange`,function(a){return i._updateActiveDate(a)})(`keyup`,function(a){return i._handleCalendarBodyKeyup(a)})(`keydown`,function(a){return i._handleCalendarBodyKeydown(a)}),E()()),r&2&&(y(4),ue(`rows`,i._years())(`todayValue`,i._todayYear())(`startValue`,i._selectedYear())(`endValue`,i._selectedYear())(`numCols`,4)(`cellAspectRatio`,4/7)(`activeCell`,i._getActiveCell()))},dependencies:[as],encapsulation:2})}return t})();function jE(t,n,e,r,i){let o=t.getYear(n),a=t.getYear(e),s=zE(t,r,i);return Math.floor((o-s)/yn)===Math.floor((a-s)/yn)}function lc(t,n,e,r){return WP(t.getYear(n)-zE(t,e,r),yn)}function zE(t,n,e){let r=0;return e?r=t.getYear(e)-yn+1:n&&(r=t.getYear(n)),r}function WP(t,n){return(t%n+n)%n}var PE=(()=>{class t{_changeDetectorRef=u(Ce);_dateFormats=u(Fi,{optional:!0});_dateAdapter=u(Yt,{optional:!0});_dir=u(lt,{optional:!0});_rerenderSubscription=ne.EMPTY;_selectionKeyPressed=!1;get activeDate(){return this._activeDate}set activeDate(e){let r=this._activeDate,i=this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e))||this._dateAdapter.today();this._activeDate=this._dateAdapter.clampDate(i,this.minDate,this.maxDate),this._dateAdapter.getYear(r)!==this._dateAdapter.getYear(this._activeDate)&&this._init()}_activeDate;get selected(){return this._selected}set selected(e){e instanceof Pn?this._selected=e:this._selected=this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e)),this._setSelectedMonth(e)}_selected=null;get minDate(){return this._minDate}set minDate(e){this._minDate=this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e))}_minDate=null;get maxDate(){return this._maxDate}set maxDate(e){this._maxDate=this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e))}_maxDate=null;dateFilter;dateClass;selectedChange=new k;monthSelected=new k;activeDateChange=new k;_matCalendarBody;_months=L([]);_yearLabel=L(``);_todayMonth=L(null);_selectedMonth=L(null);constructor(){this._activeDate=this._dateAdapter.today()}ngAfterContentInit(){this._rerenderSubscription=this._dateAdapter.localeChanges.pipe(_t(null)).subscribe(()=>this._init())}ngOnDestroy(){this._rerenderSubscription.unsubscribe()}_monthSelected(e){let r=e.value,i=this._dateAdapter.createDate(this._dateAdapter.getYear(this.activeDate),r,1);this.monthSelected.emit(i);let o=this._getDateFromMonth(r);this.selectedChange.emit(o)}_updateActiveDate(e){let r=e.value,i=this._activeDate;this.activeDate=this._getDateFromMonth(r),this._dateAdapter.compareDate(i,this.activeDate)&&this.activeDateChange.emit(this.activeDate)}_handleCalendarBodyKeydown(e){let r=this._activeDate,i=this._isRtl();switch(e.keyCode){case 37:this.activeDate=this._dateAdapter.addCalendarMonths(this._activeDate,i?1:-1);break;case 39:this.activeDate=this._dateAdapter.addCalendarMonths(this._activeDate,i?-1:1);break;case 38:this.activeDate=this._dateAdapter.addCalendarMonths(this._activeDate,-4);break;case 40:this.activeDate=this._dateAdapter.addCalendarMonths(this._activeDate,4);break;case 36:this.activeDate=this._dateAdapter.addCalendarMonths(this._activeDate,-this._dateAdapter.getMonth(this._activeDate));break;case 35:this.activeDate=this._dateAdapter.addCalendarMonths(this._activeDate,11-this._dateAdapter.getMonth(this._activeDate));break;case 33:this.activeDate=this._dateAdapter.addCalendarYears(this._activeDate,e.altKey?-10:-1);break;case 34:this.activeDate=this._dateAdapter.addCalendarYears(this._activeDate,e.altKey?10:1);break;case 13:case 32:this._selectionKeyPressed=!0;break;default:return}this._dateAdapter.compareDate(r,this.activeDate)&&(this.activeDateChange.emit(this.activeDate),this._focusActiveCellAfterViewChecked()),e.preventDefault()}_handleCalendarBodyKeyup(e){(e.keyCode===32||e.keyCode===13)&&(this._selectionKeyPressed&&this._monthSelected({value:this._dateAdapter.getMonth(this._activeDate),event:e}),this._selectionKeyPressed=!1)}_init(){this._setSelectedMonth(this.selected),this._todayMonth.set(this._getMonthInCurrentYear(this._dateAdapter.today())),this._yearLabel.set(this._dateAdapter.getYearName(this.activeDate));let e=this._dateAdapter.getMonthNames(`short`);this._months.set([[0,1,2,3],[4,5,6,7],[8,9,10,11]].map(r=>r.map(i=>this._createCellForMonth(i,e[i])))),this._changeDetectorRef.markForCheck()}_focusActiveCell(){this._matCalendarBody._focusActiveCell()}_focusActiveCellAfterViewChecked(){this._matCalendarBody._scheduleFocusActiveCellAfterViewChecked()}_getMonthInCurrentYear(e){return e&&this._dateAdapter.getYear(e)==this._dateAdapter.getYear(this.activeDate)?this._dateAdapter.getMonth(e):null}_getDateFromMonth(e){let r=this._dateAdapter.createDate(this._dateAdapter.getYear(this.activeDate),e,1),i=this._dateAdapter.getNumDaysInMonth(r);return this._dateAdapter.createDate(this._dateAdapter.getYear(this.activeDate),e,Math.min(this._dateAdapter.getDate(this.activeDate),i))}_createCellForMonth(e,r){let i=this._dateAdapter.createDate(this._dateAdapter.getYear(this.activeDate),e,1),o=this._dateAdapter.format(i,this._dateFormats.display.monthYearA11yLabel),a=this.dateClass?this.dateClass(i,`year`):void 0;return new cc(e,r.toLocaleUpperCase(),o,this._shouldEnableMonth(e),a)}_shouldEnableMonth(e){let r=this._dateAdapter.getYear(this.activeDate);if(e==null||this._isYearAndMonthAfterMaxDate(r,e)||this._isYearAndMonthBeforeMinDate(r,e))return!1;if(!this.dateFilter)return!0;let i=this._dateAdapter.createDate(r,e,1);for(let o=i;this._dateAdapter.getMonth(o)==e;o=this._dateAdapter.addCalendarDays(o,1))if(this.dateFilter(o))return!0;return!1}_isYearAndMonthAfterMaxDate(e,r){if(this.maxDate){let i=this._dateAdapter.getYear(this.maxDate),o=this._dateAdapter.getMonth(this.maxDate);return e>i||e===i&&r>o}return!1}_isYearAndMonthBeforeMinDate(e,r){if(this.minDate){let i=this._dateAdapter.getYear(this.minDate),o=this._dateAdapter.getMonth(this.minDate);return e<i||e===i&&r<o}return!1}_isRtl(){return this._dir&&this._dir.value===`rtl`}_setSelectedMonth(e){e instanceof Pn?this._selectedMonth.set(this._getMonthInCurrentYear(e.start)||this._getMonthInCurrentYear(e.end)):this._selectedMonth.set(this._getMonthInCurrentYear(e))}static ɵfac=function(r){return new(r||t)};static ɵcmp=F({type:t,selectors:[[`mat-year-view`]],viewQuery:function(r,i){if(r&1&&qe(as,5),r&2){let o;H(o=U())&&(i._matCalendarBody=o.first)}},inputs:{activeDate:`activeDate`,selected:`selected`,minDate:`minDate`,maxDate:`maxDate`,dateFilter:`dateFilter`,dateClass:`dateClass`},outputs:{selectedChange:`selectedChange`,monthSelected:`monthSelected`,activeDateChange:`activeDateChange`},exportAs:[`matYearView`],decls:5,vars:9,consts:[[`role`,`grid`,1,`mat-calendar-table`],[`aria-hidden`,`true`,1,`mat-calendar-table-header`],[`colspan`,`4`,1,`mat-calendar-table-header-divider`],[`mat-calendar-body`,``,3,`selectedValueChange`,`activeDateChange`,`keyup`,`keydown`,`label`,`rows`,`todayValue`,`startValue`,`endValue`,`labelMinRequiredCells`,`numCols`,`cellAspectRatio`,`activeCell`]],template:function(r,i){r&1&&(C(0,`table`,0)(1,`thead`,1)(2,`tr`),we(3,`th`,2),E()(),C(4,`tbody`,3),Q(`selectedValueChange`,function(a){return i._monthSelected(a)})(`activeDateChange`,function(a){return i._updateActiveDate(a)})(`keyup`,function(a){return i._handleCalendarBodyKeyup(a)})(`keydown`,function(a){return i._handleCalendarBodyKeydown(a)}),E()()),r&2&&(y(4),ue(`label`,i._yearLabel())(`rows`,i._months())(`todayValue`,i._todayMonth())(`startValue`,i._selectedMonth())(`endValue`,i._selectedMonth())(`labelMinRequiredCells`,2)(`numCols`,4)(`cellAspectRatio`,4/7)(`activeCell`,i._dateAdapter.getMonth(i.activeDate)))},dependencies:[as],encapsulation:2})}return t})();var HE=(()=>{class t{_intl=u(ss);calendar=u(zy);_dateAdapter=u(Yt,{optional:!0});_dateFormats=u(Fi,{optional:!0});_periodButtonText;_periodButtonDescription;_periodButtonLabel;_prevButtonLabel;_nextButtonLabel;constructor(){u(Ze).load(xr);let e=u(Ce);this._updateLabels(),this.calendar.stateChanges.subscribe(()=>{this._updateLabels(),e.markForCheck()})}get periodButtonText(){return this._periodButtonText}get periodButtonDescription(){return this._periodButtonDescription}get periodButtonLabel(){return this._periodButtonLabel}get prevButtonLabel(){return this._prevButtonLabel}get nextButtonLabel(){return this._nextButtonLabel}currentPeriodClicked(){this.calendar.currentView=this.calendar.currentView==`month`?`multi-year`:`month`}previousClicked(){this.previousEnabled()&&(this.calendar.activeDate=this.calendar.currentView==`month`?this._dateAdapter.addCalendarMonths(this.calendar.activeDate,-1):this._dateAdapter.addCalendarYears(this.calendar.activeDate,this.calendar.currentView==`year`?-1:-yn))}nextClicked(){this.nextEnabled()&&(this.calendar.activeDate=this.calendar.currentView==`month`?this._dateAdapter.addCalendarMonths(this.calendar.activeDate,1):this._dateAdapter.addCalendarYears(this.calendar.activeDate,this.calendar.currentView==`year`?1:yn))}previousEnabled(){return this.calendar.minDate?!this.calendar.minDate||!this._isSameView(this.calendar.activeDate,this.calendar.minDate):!0}nextEnabled(){return!this.calendar.maxDate||!this._isSameView(this.calendar.activeDate,this.calendar.maxDate)}_updateLabels(){let e=this.calendar,r=this._intl,i=this._dateAdapter;e.currentView===`month`?(this._periodButtonText=i.format(e.activeDate,this._dateFormats.display.monthYearLabel).toLocaleUpperCase(),this._periodButtonDescription=i.format(e.activeDate,this._dateFormats.display.monthYearLabel).toLocaleUpperCase(),this._periodButtonLabel=r.switchToMultiYearViewLabel,this._prevButtonLabel=r.prevMonthLabel,this._nextButtonLabel=r.nextMonthLabel):e.currentView===`year`?(this._periodButtonText=i.getYearName(e.activeDate),this._periodButtonDescription=i.getYearName(e.activeDate),this._periodButtonLabel=r.switchToMonthViewLabel,this._prevButtonLabel=r.prevYearLabel,this._nextButtonLabel=r.nextYearLabel):(this._periodButtonText=r.formatYearRange(...this._formatMinAndMaxYearLabels()),this._periodButtonDescription=r.formatYearRangeLabel(...this._formatMinAndMaxYearLabels()),this._periodButtonLabel=r.switchToMonthViewLabel,this._prevButtonLabel=r.prevMultiYearLabel,this._nextButtonLabel=r.nextMultiYearLabel)}_isSameView(e,r){return this.calendar.currentView==`month`?this._dateAdapter.getYear(e)==this._dateAdapter.getYear(r)&&this._dateAdapter.getMonth(e)==this._dateAdapter.getMonth(r):this.calendar.currentView==`year`?this._dateAdapter.getYear(e)==this._dateAdapter.getYear(r):jE(this._dateAdapter,e,r,this.calendar.minDate,this.calendar.maxDate)}_formatMinAndMaxYearLabels(){let r=this._dateAdapter.getYear(this.calendar.activeDate)-lc(this._dateAdapter,this.calendar.activeDate,this.calendar.minDate,this.calendar.maxDate),i=r+yn-1;return[this._dateAdapter.getYearName(this._dateAdapter.createDate(r,0,1)),this._dateAdapter.getYearName(this._dateAdapter.createDate(i,0,1))]}_periodButtonLabelId=u(Fe).getId(`mat-calendar-period-label-`);static ɵfac=function(r){return new(r||t)};static ɵcmp=(function(){return F({type:t,selectors:[[`mat-calendar-header`]],exportAs:[`matCalendarHeader`],ngContentSelectors:[`*`],decls:17,vars:13,consts:[[1,`mat-calendar-header`],[1,`mat-calendar-controls`],[`aria-live`,`polite`,1,`cdk-visually-hidden`,3,`id`],[`matButton`,``,`type`,`button`,1,`mat-calendar-period-button`,3,`click`],[`aria-hidden`,`true`],[`viewBox`,`0 0 10 5`,`focusable`,`false`,`aria-hidden`,`true`,1,`mat-calendar-arrow`],[`points`,`0,0 5,5 10,0`],[1,`mat-calendar-spacer`],[`matIconButton`,``,`type`,`button`,`disabledInteractive`,``,1,`mat-calendar-previous-button`,3,`click`,`disabled`,`matTooltip`],[`viewBox`,`0 0 24 24`,`focusable`,`false`,`aria-hidden`,`true`],[`d`,`M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z`],[`matIconButton`,``,`type`,`button`,`disabledInteractive`,``,1,`mat-calendar-next-button`,3,`click`,`disabled`,`matTooltip`],[`d`,`M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z`]],template:function(i,o){i&1&&(Me(),C(0,`div`,0)(1,`div`,1)(2,`span`,2),Ne(3),E(),C(4,`button`,3),Q(`click`,function(){return o.currentPeriodClicked()}),C(5,`span`,4),Ne(6),E(),Et(),C(7,`svg`,5),we(8,`polygon`,6),E()(),Hr(),we(9,`div`,7),X(10),C(11,`button`,8),Q(`click`,function(){return o.previousClicked()}),Et(),C(12,`svg`,9),we(13,`path`,10),E()(),Hr(),C(14,`button`,11),Q(`click`,function(){return o.nextClicked()}),Et(),C(15,`svg`,9),we(16,`path`,12),E()()()()),i&2&&(y(2),ue(`id`,o._periodButtonLabelId),y(),Ft(o.periodButtonDescription),y(),Y(`aria-label`,o.periodButtonLabel)(`aria-describedby`,o._periodButtonLabelId),y(2),Ft(o.periodButtonText),y(),G(`mat-calendar-invert`,o.calendar.currentView!==`month`),y(4),ue(`disabled`,!o.previousEnabled())(`matTooltip`,o.prevButtonLabel),Y(`aria-label`,o.prevButtonLabel),y(3),ue(`disabled`,!o.nextEnabled())(`matTooltip`,o.nextButtonLabel),Y(`aria-label`,o.nextButtonLabel))},dependencies:[ec,Ka,Qm],encapsulation:2})})()}return t})();var zy=(()=>{class t{_dateAdapter=u(Yt,{optional:!0});_dateFormats=u(Fi,{optional:!0});_changeDetectorRef=u(Ce);_elementRef=u(N);headerComponent;_calendarHeaderPortal;_intlChanges;_moveFocusOnNextTick=!1;get startAt(){return this._startAt}set startAt(e){this._startAt=this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e))}_startAt=null;startView=`month`;get selected(){return this._selected}set selected(e){e instanceof Pn?this._selected=e:this._selected=this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e))}_selected=null;get minDate(){return this._minDate}set minDate(e){this._minDate=this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e))}_minDate=null;get maxDate(){return this._maxDate}set maxDate(e){this._maxDate=this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e))}_maxDate=null;dateFilter;dateClass;comparisonStart=null;comparisonEnd=null;startDateAccessibleName=null;endDateAccessibleName=null;selectedChange=new k;yearSelected=new k;monthSelected=new k;viewChanged=new k(!0);_userSelection=new k;_userDragDrop=new k;monthView;yearView;multiYearView;get activeDate(){return this._clampedActiveDate}set activeDate(e){this._clampedActiveDate=this._dateAdapter.clampDate(e,this.minDate,this.maxDate),this.stateChanges.next(),this._changeDetectorRef.markForCheck()}_clampedActiveDate;get currentView(){return this._currentView}set currentView(e){let r=this._currentView!==e?e:null;this._currentView=e,this._moveFocusOnNextTick=!0,this._changeDetectorRef.markForCheck(),r&&(this.stateChanges.next(),this.viewChanged.emit(r))}_currentView;_activeDrag=null;stateChanges=new _;constructor(){this._intlChanges=u(ss).changes.subscribe(()=>{this._changeDetectorRef.markForCheck(),this.stateChanges.next()})}ngAfterContentInit(){this._calendarHeaderPortal=new sn(this.headerComponent||HE),this.activeDate=this.startAt||this._dateAdapter.today(),this._currentView=this.startView}ngAfterViewChecked(){this._moveFocusOnNextTick&&(this._moveFocusOnNextTick=!1,this.focusActiveCell())}ngOnDestroy(){this._intlChanges.unsubscribe(),this.stateChanges.complete()}ngOnChanges(e){let r=e.minDate&&!this._dateAdapter.sameDate(e.minDate.previousValue,e.minDate.currentValue)?e.minDate:void 0,i=e.maxDate&&!this._dateAdapter.sameDate(e.maxDate.previousValue,e.maxDate.currentValue)?e.maxDate:void 0,o=r||i||e.dateFilter;if(o&&!o.firstChange){let a=this._getCurrentViewComponent();a&&(this._elementRef.nativeElement.contains(wr())&&(this._moveFocusOnNextTick=!0),this._changeDetectorRef.detectChanges(),a._init())}this.stateChanges.next()}focusActiveCell(){this._getCurrentViewComponent()?._focusActiveCell(!1)}updateTodaysDate(){this._getCurrentViewComponent()?._init()}_dateSelected(e){let r=e.value;(this.selected instanceof Pn||r&&!this._dateAdapter.sameDate(r,this.selected))&&this.selectedChange.emit(r),this._userSelection.emit(e)}_yearSelectedInMultiYearView(e){this.yearSelected.emit(e)}_monthSelectedInYearView(e){this.monthSelected.emit(e)}_goToDateInView(e,r){this.activeDate=e,this.currentView=r}_dragStarted(e){this._activeDrag=e}_dragEnded(e){this._activeDrag&&(e.value&&this._userDragDrop.emit(e),this._activeDrag=null)}_getCurrentViewComponent(){return this.monthView||this.yearView||this.multiYearView}static ɵfac=function(r){return new(r||t)};static ɵcmp=(function(){function e(a,s){}function r(a,s){if(a&1){let l=an();C(0,`mat-month-view`,4),Aa(`activeDateChange`,function(d){Xe(l);let m=J();return Sl(m.activeDate,d)||(m.activeDate=d),Je(d)}),Q(`_userSelection`,function(d){Xe(l);return Je(J()._dateSelected(d))})(`dragStarted`,function(d){Xe(l);return Je(J()._dragStarted(d))})(`dragEnded`,function(d){Xe(l);return Je(J()._dragEnded(d))}),E()}if(a&2){let l=J();Ta(`activeDate`,l.activeDate),ue(`selected`,l.selected)(`dateFilter`,l.dateFilter)(`maxDate`,l.maxDate)(`minDate`,l.minDate)(`dateClass`,l.dateClass)(`comparisonStart`,l.comparisonStart)(`comparisonEnd`,l.comparisonEnd)(`startDateAccessibleName`,l.startDateAccessibleName)(`endDateAccessibleName`,l.endDateAccessibleName)(`activeDrag`,l._activeDrag)}}function i(a,s){if(a&1){let l=an();C(0,`mat-year-view`,5),Aa(`activeDateChange`,function(d){Xe(l);let m=J();return Sl(m.activeDate,d)||(m.activeDate=d),Je(d)}),Q(`monthSelected`,function(d){Xe(l);return Je(J()._monthSelectedInYearView(d))})(`selectedChange`,function(d){Xe(l);return Je(J()._goToDateInView(d,`month`))}),E()}if(a&2){let l=J();Ta(`activeDate`,l.activeDate),ue(`selected`,l.selected)(`dateFilter`,l.dateFilter)(`maxDate`,l.maxDate)(`minDate`,l.minDate)(`dateClass`,l.dateClass)}}function o(a,s){if(a&1){let l=an();C(0,`mat-multi-year-view`,6),Aa(`activeDateChange`,function(d){Xe(l);let m=J();return Sl(m.activeDate,d)||(m.activeDate=d),Je(d)}),Q(`yearSelected`,function(d){Xe(l);return Je(J()._yearSelectedInMultiYearView(d))})(`selectedChange`,function(d){Xe(l);return Je(J()._goToDateInView(d,`year`))}),E()}if(a&2){let l=J();Ta(`activeDate`,l.activeDate),ue(`selected`,l.selected)(`dateFilter`,l.dateFilter)(`maxDate`,l.maxDate)(`minDate`,l.minDate)(`dateClass`,l.dateClass)}}return F({type:t,selectors:[[`mat-calendar`]],viewQuery:function(s,l){if(s&1&&qe(OE,5)(PE,5)(FE,5),s&2){let c;H(c=U())&&(l.monthView=c.first),H(c=U())&&(l.yearView=c.first),H(c=U())&&(l.multiYearView=c.first)}},hostAttrs:[1,`mat-calendar`],inputs:{headerComponent:`headerComponent`,startAt:`startAt`,startView:`startView`,selected:`selected`,minDate:`minDate`,maxDate:`maxDate`,dateFilter:`dateFilter`,dateClass:`dateClass`,comparisonStart:`comparisonStart`,comparisonEnd:`comparisonEnd`,startDateAccessibleName:`startDateAccessibleName`,endDateAccessibleName:`endDateAccessibleName`},outputs:{selectedChange:`selectedChange`,yearSelected:`yearSelected`,monthSelected:`monthSelected`,viewChanged:`viewChanged`,_userSelection:`_userSelection`,_userDragDrop:`_userDragDrop`},exportAs:[`matCalendar`],features:[ye([VE]),Se],decls:5,vars:2,consts:[[3,`cdkPortalOutlet`],[`cdkMonitorSubtreeFocus`,``,`tabindex`,`-1`,1,`mat-calendar-content`],[3,`activeDate`,`selected`,`dateFilter`,`maxDate`,`minDate`,`dateClass`,`comparisonStart`,`comparisonEnd`,`startDateAccessibleName`,`endDateAccessibleName`,`activeDrag`],[3,`activeDate`,`selected`,`dateFilter`,`maxDate`,`minDate`,`dateClass`],[3,`activeDateChange`,`_userSelection`,`dragStarted`,`dragEnded`,`activeDate`,`selected`,`dateFilter`,`maxDate`,`minDate`,`dateClass`,`comparisonStart`,`comparisonEnd`,`startDateAccessibleName`,`endDateAccessibleName`,`activeDrag`],[3,`activeDateChange`,`monthSelected`,`selectedChange`,`activeDate`,`selected`,`dateFilter`,`maxDate`,`minDate`,`dateClass`],[3,`activeDateChange`,`yearSelected`,`selectedChange`,`activeDate`,`selected`,`dateFilter`,`maxDate`,`minDate`,`dateClass`]],template:function(s,l){if(s&1&&(wt(0,e,0,0,`ng-template`,0),C(1,`div`,1),le(2,r,1,11,`mat-month-view`,2)(3,i,1,6,`mat-year-view`,3)(4,o,1,6,`mat-multi-year-view`,3),E()),s&2){let c;ue(`cdkPortalOutlet`,l._calendarHeaderPortal),y(2),ce((c=l.currentView)===`month`?2:c===`year`?3:c===`multi-year`?4:-1)}},dependencies:[Jn,Jb,OE,PE,FE],styles:[`.mat-calendar {
  display: block;
  line-height: normal;
  font-family: var(--%NS%mat-datepicker-calendar-text-font, var(--%NS%mat-sys-body-medium-font));
  font-size: var(--%NS%mat-datepicker-calendar-text-size, var(--%NS%mat-sys-body-medium-size));
}

.mat-calendar-header {
  padding: 8px 8px 0 8px;
}

.mat-calendar-content {
  padding: 0 8px 8px 8px;
  outline: none;
}

.mat-calendar-controls {
  display: flex;
  align-items: center;
  margin: 5% calc(4.7142857143% - 16px);
}

.mat-calendar-spacer {
  flex: 1 1 auto;
}

button.mat-calendar-period-button {
  min-width: 0;
  margin: 0 8px;
  font-size: var(--%NS%mat-datepicker-calendar-period-button-text-size, var(--%NS%mat-sys-title-small-size));
  font-weight: var(--%NS%mat-datepicker-calendar-period-button-text-weight, var(--%NS%mat-sys-title-small-weight));
  --%NS%mat-button-text-label-text-color: var(--%NS%mat-datepicker-calendar-period-button-text-color, var(--%NS%mat-sys-on-surface-variant));
}

.mat-calendar-arrow {
  display: inline-block;
  width: 10px;
  height: 5px;
  margin: 0 0 0 5px;
  vertical-align: middle;
  fill: var(--%NS%mat-datepicker-calendar-period-button-icon-color, var(--%NS%mat-sys-on-surface-variant));
}
.mat-calendar-arrow.mat-calendar-invert {
  transform: rotate(180deg);
}
[dir=rtl] .mat-calendar-arrow {
  margin: 0 5px 0 0;
}
@media (forced-colors: active) {
  .mat-calendar-arrow {
    fill: CanvasText;
  }
}

.mat-datepicker-content .mat-calendar-previous-button:not(.mat-mdc-button-disabled),
.mat-datepicker-content .mat-calendar-next-button:not(.mat-mdc-button-disabled) {
  color: var(--%NS%mat-datepicker-calendar-navigation-button-icon-color, var(--%NS%mat-sys-on-surface-variant));
}
[dir=rtl] .mat-calendar-previous-button,
[dir=rtl] .mat-calendar-next-button {
  transform: rotate(180deg);
}

.mat-calendar-table {
  border-spacing: 0;
  border-collapse: collapse;
  width: 100%;
}

.mat-calendar-table-header th {
  text-align: center;
  padding: 0 0 8px 0;
  color: var(--%NS%mat-datepicker-calendar-header-text-color, var(--%NS%mat-sys-on-surface-variant));
  font-size: var(--%NS%mat-datepicker-calendar-header-text-size, var(--%NS%mat-sys-title-small-size));
  font-weight: var(--%NS%mat-datepicker-calendar-header-text-weight, var(--%NS%mat-sys-title-small-weight));
}

.mat-calendar-table-header-divider {
  position: relative;
  height: 1px;
}
.mat-calendar-table-header-divider::after {
  content: "";
  position: absolute;
  top: 0;
  left: -8px;
  right: -8px;
  height: 1px;
  background: var(--%NS%mat-datepicker-calendar-header-divider-color, transparent);
}

.mat-calendar-body-cell-content::before {
  margin: calc(calc(var(--%NS%mat-focus-indicator-border-width, 3px) + 3px) * -1);
}

.mat-calendar-body-cell:focus-visible .mat-focus-indicator::before {
  content: "";
}
`],encapsulation:2})})()}return t})();var qP=new g(`mat-datepicker-scroll-strategy`,{providedIn:`root`,factory:()=>{let t=u(B);return()=>ai(t)}});var UE=(()=>{class t{_elementRef=u(N);_animationsDisabled=ze();_changeDetectorRef=u(Ce);_globalModel=u(dc);_dateAdapter=u(Yt);_ngZone=u(T);_rangeSelectionStrategy=u(BE,{optional:!0});_stateChanges;_model;_eventCleanups;_animationFallback;_calendar;color;datepicker;comparisonStart=null;comparisonEnd=null;startDateAccessibleName=null;endDateAccessibleName=null;_isAbove=!1;_animationDone=new _;_isAnimating=!1;_closeButtonText;_closeButtonFocused=!1;_actionsPortal=null;_dialogLabelId=null;constructor(){if(u(Ze).load(xr),this._closeButtonText=u(ss).closeCalendarLabel,!this._animationsDisabled){let e=this._elementRef.nativeElement,r=u(ke);this._eventCleanups=this._ngZone.runOutsideAngular(()=>[r.listen(e,`animationstart`,this._handleAnimationEvent),r.listen(e,`animationend`,this._handleAnimationEvent),r.listen(e,`animationcancel`,this._handleAnimationEvent)])}}ngAfterViewInit(){this._stateChanges=this.datepicker.stateChanges.subscribe(()=>{this._changeDetectorRef.markForCheck()}),this._calendar.focusActiveCell()}ngOnDestroy(){clearTimeout(this._animationFallback),this._eventCleanups?.forEach(e=>e()),this._stateChanges?.unsubscribe(),this._animationDone.complete()}_handleUserSelection(e){let r=this._model.selection,i=e.value,o=r instanceof Pn;if(o&&this._rangeSelectionStrategy){let a=this._rangeSelectionStrategy.selectionFinished(i,r,e.event);this._model.updateSelection(a,this)}else i&&(o||!this._dateAdapter.sameDate(i,r))&&this._model.add(i);(!this._model||this._model.isComplete())&&!this._actionsPortal&&this.datepicker.close()}_handleUserDragDrop(e){this._model.updateSelection(e.value,this)}_startExitAnimation(){this._elementRef.nativeElement.classList.add(`mat-datepicker-content-exit`),this._animationsDisabled?this._animationDone.next():(clearTimeout(this._animationFallback),this._animationFallback=setTimeout(()=>{this._isAnimating||this._animationDone.next()},200))}_handleAnimationEvent=e=>{let r=this._elementRef.nativeElement;e.target!==r||!e.animationName.startsWith(`_mat-datepicker-content`)||(clearTimeout(this._animationFallback),this._isAnimating=e.type===`animationstart`,r.classList.toggle(`mat-datepicker-content-animating`,this._isAnimating),this._isAnimating||this._animationDone.next())};_getSelected(){return this._model.selection}_applyPendingSelection(){this._model!==this._globalModel&&this._globalModel.updateSelection(this._model.selection,this)}_assignActions(e,r){this._model=e?this._globalModel.clone():this._globalModel,this._actionsPortal=e,r&&this._changeDetectorRef.detectChanges()}static ɵfac=function(r){return new(r||t)};static ɵcmp=(function(){function e(r,i){}return F({type:t,selectors:[[`mat-datepicker-content`]],viewQuery:function(i,o){if(i&1&&qe(zy,5),i&2){let a;H(a=U())&&(o._calendar=a.first)}},hostAttrs:[1,`mat-datepicker-content`],hostVars:6,hostBindings:function(i,o){i&2&&(Ot(o.color?`mat-`+o.color:``),G(`mat-datepicker-content-touch`,o.datepicker.touchUi)(`mat-datepicker-content-animations-enabled`,!o._animationsDisabled))},inputs:{color:`color`},exportAs:[`matDatepickerContent`],decls:5,vars:26,consts:[[`cdkTrapFocus`,``,`role`,`dialog`,1,`mat-datepicker-content-container`],[3,`yearSelected`,`monthSelected`,`viewChanged`,`_userSelection`,`_userDragDrop`,`id`,`startAt`,`startView`,`minDate`,`maxDate`,`dateFilter`,`headerComponent`,`selected`,`dateClass`,`comparisonStart`,`comparisonEnd`,`startDateAccessibleName`,`endDateAccessibleName`],[3,`cdkPortalOutlet`],[`type`,`button`,`matButton`,`elevated`,1,`mat-datepicker-close-button`,3,`focus`,`blur`,`click`,`color`]],template:function(i,o){i&1&&(C(0,`div`,0)(1,`mat-calendar`,1),Q(`yearSelected`,function(s){return o.datepicker._selectYear(s)})(`monthSelected`,function(s){return o.datepicker._selectMonth(s)})(`viewChanged`,function(s){return o.datepicker._viewChanged(s)})(`_userSelection`,function(s){return o._handleUserSelection(s)})(`_userDragDrop`,function(s){return o._handleUserDragDrop(s)}),E(),wt(2,e,0,0,`ng-template`,2),C(3,`button`,3),Q(`focus`,function(){return o._closeButtonFocused=!0})(`blur`,function(){return o._closeButtonFocused=!1})(`click`,function(){return o.datepicker.close()}),Ne(4),E()()),i&2&&(G(`mat-datepicker-content-container-with-custom-header`,o.datepicker.calendarHeaderComponent)(`mat-datepicker-content-container-with-actions`,o._actionsPortal),Y(`aria-modal`,!0)(`aria-labelledby`,o._dialogLabelId??void 0),y(),Ot(o.datepicker.panelClass),ue(`id`,o.datepicker.id)(`startAt`,o.datepicker.startAt)(`startView`,o.datepicker.startView)(`minDate`,o.datepicker._getMinDate())(`maxDate`,o.datepicker._getMaxDate())(`dateFilter`,o.datepicker._getDateFilter())(`headerComponent`,o.datepicker.calendarHeaderComponent)(`selected`,o._getSelected())(`dateClass`,o.datepicker.dateClass)(`comparisonStart`,o.comparisonStart)(`comparisonEnd`,o.comparisonEnd)(`startDateAccessibleName`,o.startDateAccessibleName)(`endDateAccessibleName`,o.endDateAccessibleName),y(),ue(`cdkPortalOutlet`,o._actionsPortal),y(),G(`cdk-visually-hidden`,!o._closeButtonFocused),ue(`color`,o.color||`primary`),y(),Ft(o._closeButtonText))},dependencies:[ry,zy,Jn,ec],styles:[`@keyframes _mat-datepicker-content-dropdown-enter {
  from {
    opacity: 0;
    transform: scaleY(0.8);
  }
  to {
    opacity: 1;
    transform: none;
  }
}
@keyframes _mat-datepicker-content-dialog-enter {
  from {
    opacity: 0;
    transform: scale(0.8);
  }
  to {
    opacity: 1;
    transform: none;
  }
}
@keyframes _mat-datepicker-content-exit {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}
.mat-datepicker-content {
  display: block;
  background-color: var(--%NS%mat-datepicker-calendar-container-background-color, var(--%NS%mat-sys-surface-container-high));
  color: var(--%NS%mat-datepicker-calendar-container-text-color, var(--%NS%mat-sys-on-surface));
  box-shadow: var(--%NS%mat-datepicker-calendar-container-elevation-shadow, 0px 0px 0px 0px rgba(0, 0, 0, 0.2), 0px 0px 0px 0px rgba(0, 0, 0, 0.14), 0px 0px 0px 0px rgba(0, 0, 0, 0.12));
  border-radius: var(--%NS%mat-datepicker-calendar-container-shape, var(--%NS%mat-sys-corner-large));
}
.mat-datepicker-content.mat-datepicker-content-animations-enabled {
  animation: _mat-datepicker-content-dropdown-enter 120ms cubic-bezier(0, 0, 0.2, 1);
}
.mat-datepicker-content .mat-calendar {
  width: 296px;
  height: 354px;
}
.mat-datepicker-content .mat-datepicker-content-container-with-custom-header .mat-calendar {
  height: auto;
}
.mat-datepicker-content .mat-datepicker-close-button {
  position: absolute;
  top: 100%;
  left: 0;
  margin-top: 8px;
}
.mat-datepicker-content-animating .mat-datepicker-content .mat-datepicker-close-button {
  display: none;
}

.mat-datepicker-content-container {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.mat-datepicker-content-touch {
  display: block;
  max-height: 80vh;
  box-shadow: var(--%NS%mat-datepicker-calendar-container-touch-elevation-shadow, 0px 0px 0px 0px rgba(0, 0, 0, 0.2), 0px 0px 0px 0px rgba(0, 0, 0, 0.14), 0px 0px 0px 0px rgba(0, 0, 0, 0.12));
  border-radius: var(--%NS%mat-datepicker-calendar-container-touch-shape, var(--%NS%mat-sys-corner-extra-large));
  position: relative;
  overflow: visible;
  min-height: fit-content;
}
.mat-datepicker-content-touch.mat-datepicker-content-animations-enabled {
  animation: _mat-datepicker-content-dialog-enter 150ms cubic-bezier(0, 0, 0.2, 1);
}
.mat-datepicker-content-touch .mat-datepicker-content-container {
  min-height: fit-content;
  max-height: 788px;
  min-width: 250px;
  max-width: 750px;
}
.mat-datepicker-content-touch .mat-calendar {
  width: 100%;
  height: auto;
}

.mat-datepicker-content-exit.mat-datepicker-content-animations-enabled {
  animation: _mat-datepicker-content-exit 100ms linear;
}

@media all and (orientation: landscape) {
  .mat-datepicker-content-touch .mat-datepicker-content-container {
    width: 64vh;
    height: 80vh;
  }
}
@media all and (orientation: portrait) {
  .mat-datepicker-content-touch .mat-datepicker-content-container {
    width: 80vw;
    height: 100vw;
  }
}
`],encapsulation:2})})()}return t})();var LE=(()=>{class t{_injector=u(B);_viewContainerRef=u(et);_dateAdapter=u(Yt,{optional:!0});_dir=u(lt,{optional:!0});_model=u(dc);_animationsDisabled=ze();_scrollStrategy=u(qP);_inputStateChanges=ne.EMPTY;_document=u(z);calendarHeaderComponent;get startAt(){return this._startAt||(this.datepickerInput?this.datepickerInput.getStartValue():null)}set startAt(e){this._startAt=this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e))}_startAt=null;startView=`month`;get color(){return this._color||(this.datepickerInput?this.datepickerInput.getThemePalette():void 0)}set color(e){this._color=e}_color;touchUi=!1;get disabled(){return this._disabled===void 0&&this.datepickerInput?this.datepickerInput.disabled:!!this._disabled}set disabled(e){e!==this._disabled&&(this._disabled=e,this.stateChanges.next(void 0))}_disabled;xPosition=`start`;yPosition=`below`;restoreFocus=!0;yearSelected=new k;monthSelected=new k;viewChanged=new k(!0);dateClass;openedStream=new k;closedStream=new k;get panelClass(){return this._panelClass}set panelClass(e){this._panelClass=zS(e)}_panelClass;get opened(){return this._opened}set opened(e){e?this.open():this.close()}_opened=!1;id=u(Fe).getId(`mat-datepicker-`);_getMinDate(){return this.datepickerInput&&this.datepickerInput.min}_getMaxDate(){return this.datepickerInput&&this.datepickerInput.max}_getDateFilter(){return this.datepickerInput&&this.datepickerInput.dateFilter}_overlayRef=null;_componentRef=null;_focusedElementBeforeOpen=null;_backdropHarnessClass=`${this.id}-backdrop`;_actionsPortal=null;datepickerInput;stateChanges=new _;_changeDetectorRef=u(Ce);constructor(){this._dateAdapter,this._model.selectionChanged.subscribe(()=>{this._changeDetectorRef.markForCheck()})}ngOnChanges(e){let r=e.xPosition||e.yPosition;if(r&&!r.firstChange&&this._overlayRef){let i=this._overlayRef.getConfig().positionStrategy;i instanceof ns&&(this._setConnectedPositions(i),this.opened&&this._overlayRef.updatePosition())}this.stateChanges.next(void 0)}ngOnDestroy(){this._destroyOverlay(),this.close(),this._inputStateChanges.unsubscribe(),this.stateChanges.complete()}select(e){this._model.add(e)}_selectYear(e){this.yearSelected.emit(e)}_selectMonth(e){this.monthSelected.emit(e)}_viewChanged(e){this.viewChanged.emit(e)}registerInput(e){return this.datepickerInput,this._inputStateChanges.unsubscribe(),this.datepickerInput=e,this._inputStateChanges=e.stateChanges.subscribe(()=>this.stateChanges.next(void 0)),this._model}registerActions(e){this._actionsPortal,this._actionsPortal=e,this._componentRef?.instance._assignActions(e,!0)}removeActions(e){e===this._actionsPortal&&(this._actionsPortal=null,this._componentRef?.instance._assignActions(null,!0))}open(){this._opened||this.disabled||this._componentRef?.instance._isAnimating||(this.datepickerInput,this._focusedElementBeforeOpen=wr(),this._openOverlay(),this._opened=!0,this.openedStream.emit())}close(){if(!this._opened||this._componentRef?.instance._isAnimating)return;let e=this.restoreFocus&&this._focusedElementBeforeOpen&&typeof this._focusedElementBeforeOpen.focus==`function`,r=()=>{this._opened&&(this._opened=!1,this.closedStream.emit())};if(this._componentRef){let{instance:i,location:o}=this._componentRef;i._animationDone.pipe(it(1)).subscribe(()=>{let a=this._document.activeElement;e&&(!a||a===this._document.activeElement||o.nativeElement.contains(a))&&this._focusedElementBeforeOpen.focus(),this._focusedElementBeforeOpen=null,this._destroyOverlay()}),i._startExitAnimation()}e?setTimeout(r):r()}_applyPendingSelection(){this._componentRef?.instance?._applyPendingSelection()}_forwardContentValues(e){e.datepicker=this,e.color=this.color,e._dialogLabelId=this.datepickerInput.getOverlayLabelId(),e._assignActions(this._actionsPortal,!1)}_openOverlay(){this._destroyOverlay();let e=this.touchUi,r=new sn(UE,this._viewContainerRef),i=this._overlayRef=nr(this._injector,new tr({positionStrategy:e?this._getDialogStrategy():this._getDropdownStrategy(),hasBackdrop:!0,backdropClass:[e?`cdk-overlay-dark-backdrop`:`mat-overlay-transparent-backdrop`,this._backdropHarnessClass],direction:this._dir||`ltr`,scrollStrategy:e?Li(this._injector):this._scrollStrategy(),panelClass:`mat-datepicker-${e?`dialog`:`popup`}`,disableAnimations:this._animationsDisabled}));this._getCloseStream(i).subscribe(o=>{o&&o.preventDefault(),this.close()}),i.keydownEvents().subscribe(o=>{let a=o.keyCode;(a===38||a===40||a===37||a===39||a===33||a===34)&&o.preventDefault()}),this._componentRef=i.attach(r),this._forwardContentValues(this._componentRef.instance),e||Ge(()=>{i.updatePosition()},{injector:this._injector})}_destroyOverlay(){this._overlayRef&&(this._overlayRef.dispose(),this._overlayRef=this._componentRef=null)}_getDialogStrategy(){return kr(this._injector).centerHorizontally().centerVertically()}_getDropdownStrategy(){let e=Vo(this._injector,this.datepickerInput.getConnectedOverlayOrigin()).withTransformOriginOn(`.mat-datepicker-content`).withFlexibleDimensions(!1).withViewportMargin(8).withLockedPosition();return this._setConnectedPositions(e)}_setConnectedPositions(e){let r=this.xPosition===`end`?`end`:`start`,i=r===`start`?`end`:`start`,o=this.yPosition===`above`?`bottom`:`top`,a=o===`top`?`bottom`:`top`;return e.withPositions([{originX:r,originY:a,overlayX:r,overlayY:o},{originX:r,originY:o,overlayX:r,overlayY:a},{originX:i,originY:a,overlayX:i,overlayY:o},{originX:i,originY:o,overlayX:i,overlayY:a}])}_getCloseStream(e){let r=[`ctrlKey`,`shiftKey`,`metaKey`];return Dt(e.backdropClick(),e.detachments(),e.keydownEvents().pipe(Ee(i=>i.keyCode===27&&!tt(i)||this.datepickerInput&&tt(i,`altKey`)&&i.keyCode===38&&r.every(o=>!tt(i,o)))))}static ɵfac=function(r){return new(r||t)};static ɵdir=w({type:t,inputs:{calendarHeaderComponent:`calendarHeaderComponent`,startAt:`startAt`,startView:`startView`,color:`color`,touchUi:[2,`touchUi`,`touchUi`,I],disabled:[2,`disabled`,`disabled`,I],xPosition:`xPosition`,yPosition:`yPosition`,restoreFocus:[2,`restoreFocus`,`restoreFocus`,I],dateClass:`dateClass`,panelClass:`panelClass`,opened:[2,`opened`,`opened`,I]},outputs:{yearSelected:`yearSelected`,monthSelected:`monthSelected`,viewChanged:`viewChanged`,openedStream:`opened`,closedStream:`closed`},features:[Se]})}return t})();var hre=(()=>{class t extends LE{static ɵfac=(()=>{let e;return function(i){return(e||(e=Ae(t)))(i||t)}})();static ɵcmp=F({type:t,selectors:[[`mat-datepicker`]],exportAs:[`matDatepicker`],features:[ye([VE,{provide:LE,useExisting:t}]),re],decls:0,vars:0,template:function(r,i){},encapsulation:2})}return t})();var os=class{target;targetElement;value=null;constructor(n,e){this.target=n,this.targetElement=e,this.value=this.target.value}};var YP=(()=>{class t{_elementRef=u(N);_dateAdapter=u(Yt,{optional:!0});_dateFormats=u(Fi,{optional:!0});_isInitialized=!1;get value(){return this._model?this._getValueFromModel(this._model.selection):this._pendingValue}set value(e){this._assignValueProgrammatically(e,!0)}_model;get disabled(){return!!this._disabled||this._parentDisabled()}set disabled(e){let r=e,i=this._elementRef.nativeElement;this._disabled!==r&&(this._disabled=r,this.stateChanges.next(void 0)),r&&this._isInitialized&&i.blur&&i.blur()}_disabled;dateChange=new k;dateInput=new k;stateChanges=new _;_onTouched=()=>{};_validatorOnChange=()=>{};_cvaOnChange=()=>{};_valueChangesSubscription=ne.EMPTY;_localeSubscription=ne.EMPTY;_pendingValue=null;_parseValidator=()=>this._lastValueValid?null:{matDatepickerParse:{text:this._elementRef.nativeElement.value}};_filterValidator=e=>{let r=this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e.value));return!r||this._matchesFilter(r)?null:{matDatepickerFilter:!0}};_minValidator=e=>{let r=this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e.value)),i=this._getMinDate();return!i||!r||this._dateAdapter.compareDate(i,r)<=0?null:{matDatepickerMin:{min:i,actual:r}}};_maxValidator=e=>{let r=this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e.value)),i=this._getMaxDate();return!i||!r||this._dateAdapter.compareDate(i,r)>=0?null:{matDatepickerMax:{max:i,actual:r}}};_getValidators(){return[this._parseValidator,this._minValidator,this._maxValidator,this._filterValidator]}_registerModel(e){this._model=e,this._valueChangesSubscription.unsubscribe(),this._pendingValue&&this._assignValue(this._pendingValue),this._valueChangesSubscription=this._model.selectionChanged.subscribe(r=>{if(this._shouldHandleChangeEvent(r)){let i=this._getValueFromModel(r.selection);this._lastValueValid=this._isValidValue(i),this._cvaOnChange(i),this._onTouched(),this._formatValue(i),this.dateInput.emit(new os(this,this._elementRef.nativeElement)),this.dateChange.emit(new os(this,this._elementRef.nativeElement))}})}_lastValueValid=!1;constructor(){this._localeSubscription=this._dateAdapter.localeChanges.subscribe(()=>{this._assignValueProgrammatically(this.value,!0)})}ngAfterViewInit(){this._isInitialized=!0}ngOnChanges(e){KP(e,this._dateAdapter)&&this.stateChanges.next(void 0)}ngOnDestroy(){this._valueChangesSubscription.unsubscribe(),this._localeSubscription.unsubscribe(),this.stateChanges.complete()}registerOnValidatorChange(e){this._validatorOnChange=e}validate(e){return this._validator?this._validator(e):null}writeValue(e){this._assignValueProgrammatically(e,e!==this.value)}registerOnChange(e){this._cvaOnChange=e}registerOnTouched(e){this._onTouched=e}setDisabledState(e){this.disabled=e}_onKeydown(e){tt(e,`altKey`)&&e.keyCode===40&&[`ctrlKey`,`shiftKey`,`metaKey`].every(o=>!tt(e,o))&&!this._elementRef.nativeElement.readOnly&&(this._openPopup(),e.preventDefault())}_onInput(e){let r=e.target.value,i=this._lastValueValid,o=this._dateAdapter.parse(r,this._dateFormats.parse.dateInput);this._lastValueValid=this._isValidValue(o),o=this._dateAdapter.getValidDateOrNull(o);let a=!this._dateAdapter.sameDate(o,this.value);!o||a?this._cvaOnChange(o):r&&!this.value&&this._cvaOnChange(o),!a&&i!==this._lastValueValid&&this._validatorOnChange(),a&&(this._assignValue(o),this.dateInput.emit(new os(this,this._elementRef.nativeElement)))}_onChange(){this.dateChange.emit(new os(this,this._elementRef.nativeElement))}_onBlur(){this.value&&this._formatValue(this.value),this._onTouched()}_formatValue(e){this._elementRef.nativeElement.value=e!=null?this._dateAdapter.format(e,this._dateFormats.display.dateInput):``}_assignValue(e){this._model?(this._assignValueToModel(e),this._pendingValue=null):this._pendingValue=e}_isValidValue(e){return!e||this._dateAdapter.isValid(e)}_parentDisabled(){return!1}_assignValueProgrammatically(e,r){e=this._dateAdapter.deserialize(e),this._lastValueValid=this._isValidValue(e),e=this._dateAdapter.getValidDateOrNull(e),this._assignValue(e),r&&this._formatValue(e)}_matchesFilter(e){let r=this._getDateFilter();return!r||r(e)}static ɵfac=function(r){return new(r||t)};static ɵdir=w({type:t,inputs:{value:`value`,disabled:[2,`disabled`,`disabled`,I]},outputs:{dateChange:`dateChange`,dateInput:`dateInput`},features:[Se]})}return t})();function KP(t,n){let e=Object.keys(t);for(let r of e){let{previousValue:i,currentValue:o}=t[r];if(n.isDateInstance(i)&&n.isDateInstance(o)){if(!n.sameDate(i,o))return!0}else return!0}return!1}var ZP={provide:Jr,useExisting:pt(()=>$E),multi:!0};var QP={provide:ei,useExisting:pt(()=>$E),multi:!0};var $E=(()=>{class t extends YP{_formField=u(Bo,{optional:!0});_closedSubscription=ne.EMPTY;_openedSubscription=ne.EMPTY;set matDatepicker(e){e&&(this._datepicker=e,this._ariaOwns.set(e.opened?e.id:null),this._closedSubscription=e.closedStream.subscribe(()=>{this._onTouched(),this._ariaOwns.set(null)}),this._openedSubscription=e.openedStream.subscribe(()=>{this._ariaOwns.set(e.id)}),this._registerModel(e.registerInput(this)))}_datepicker;_ariaOwns=L(null);get min(){return this._min}set min(e){let r=this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e));this._dateAdapter.sameDate(r,this._min)||(this._min=r,this._validatorOnChange())}_min=null;get max(){return this._max}set max(e){let r=this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e));this._dateAdapter.sameDate(r,this._max)||(this._max=r,this._validatorOnChange())}_max=null;get dateFilter(){return this._dateFilter}set dateFilter(e){let r=this._matchesFilter(this.value);this._dateFilter=e,this._matchesFilter(this.value)!==r&&this._validatorOnChange()}_dateFilter;_validator=null;constructor(){super(),this._validator=Xr.compose(super._getValidators())}getConnectedOverlayOrigin(){return this._formField?this._formField.getConnectedOverlayOrigin():this._elementRef}getOverlayLabelId(){return this._formField?this._formField.getLabelId():this._elementRef.nativeElement.getAttribute(`aria-labelledby`)}getThemePalette(){return this._formField?this._formField.color:void 0}getStartValue(){return this.value}ngOnDestroy(){super.ngOnDestroy(),this._closedSubscription.unsubscribe(),this._openedSubscription.unsubscribe()}_openPopup(){this._datepicker&&this._datepicker.open()}_getValueFromModel(e){return e}_assignValueToModel(e){this._model&&this._model.updateSelection(e,this)}_getMinDate(){return this._min}_getMaxDate(){return this._max}_getDateFilter(){return this._dateFilter}_shouldHandleChangeEvent(e){return e.source!==this}static ɵfac=function(r){return new(r||t)};static ɵdir=w({type:t,selectors:[[`input`,`matDatepicker`,``]],hostAttrs:[1,`mat-datepicker-input`],hostVars:6,hostBindings:function(r,i){r&1&&Q(`input`,function(a){return i._onInput(a)})(`change`,function(){return i._onChange()})(`blur`,function(){return i._onBlur()})(`keydown`,function(a){return i._onKeydown(a)}),r&2&&(yt(`disabled`,i.disabled),Y(`aria-haspopup`,i._datepicker?`dialog`:null)(`aria-owns`,i._ariaOwns())(`min`,i.min?i._dateAdapter.toIso8601(i.min):null)(`max`,i.max?i._dateAdapter.toIso8601(i.max):null)(`data-mat-calendar`,i._datepicker?i._datepicker.id:null))},inputs:{matDatepicker:`matDatepicker`,min:`min`,max:`max`,dateFilter:[0,`matDatepickerFilter`,`dateFilter`]},exportAs:[`matDatepickerInput`],features:[ye([ZP,QP,{provide:Xm,useExisting:t}]),re]})}return t})();var XP=(()=>{class t{static ɵfac=function(r){return new(r||t)};static ɵdir=w({type:t,selectors:[[``,`matDatepickerToggleIcon`,``]]})}return t})();var JP=(()=>{class t{_intl=u(ss);_changeDetectorRef=u(Ce);_stateChanges=ne.EMPTY;datepicker;tabIndex=null;ariaLabel;get disabled(){return this._disabled===void 0&&this.datepicker?this.datepicker.disabled:!!this._disabled}set disabled(e){this._disabled=e}_disabled;disableRipple=!1;_customIcon;_button;constructor(){let e=u(new Gt(`tabindex`),{optional:!0}),r=Number(e);this.tabIndex=r||r===0?r:null}ngOnChanges(e){e.datepicker&&this._watchStateChanges()}ngOnDestroy(){this._stateChanges.unsubscribe()}ngAfterContentInit(){this._watchStateChanges()}_open(e){this.datepicker&&!this.disabled&&(this.datepicker.open(),e.stopPropagation())}_watchStateChanges(){let e=this.datepicker?this.datepicker.stateChanges:j(),r=this.datepicker&&this.datepicker.datepickerInput?this.datepicker.datepickerInput.stateChanges:j(),i=this.datepicker?Dt(this.datepicker.openedStream,this.datepicker.closedStream):j();this._stateChanges.unsubscribe(),this._stateChanges=Dt(this._intl.changes,e,r,i).subscribe(()=>this._changeDetectorRef.markForCheck())}static ɵfac=function(r){return new(r||t)};static ɵcmp=(function(){let e=[`button`],r=[[[``,`matDatepickerToggleIcon`,``]]],i=[`[matDatepickerToggleIcon]`];function o(a,s){a&1&&(Et(),C(0,`svg`,2),we(1,`path`,3),E())}return F({type:t,selectors:[[`mat-datepicker-toggle`]],contentQueries:function(s,l,c){if(s&1&&Mt(c,XP,5),s&2){let d;H(d=U())&&(l._customIcon=d.first)}},viewQuery:function(s,l){if(s&1&&qe(e,5),s&2){let c;H(c=U())&&(l._button=c.first)}},hostAttrs:[1,`mat-datepicker-toggle`],hostVars:8,hostBindings:function(s,l){s&1&&Q(`click`,function(d){return l._open(d)}),s&2&&(Y(`tabindex`,null)(`data-mat-calendar`,l.datepicker?l.datepicker.id:null),G(`mat-datepicker-toggle-active`,l.datepicker&&l.datepicker.opened)(`mat-accent`,l.datepicker&&l.datepicker.color===`accent`)(`mat-warn`,l.datepicker&&l.datepicker.color===`warn`))},inputs:{datepicker:[0,`for`,`datepicker`],tabIndex:`tabIndex`,ariaLabel:[0,`aria-label`,`ariaLabel`],disabled:[2,`disabled`,`disabled`,I],disableRipple:`disableRipple`},exportAs:[`matDatepickerToggle`],features:[Se],ngContentSelectors:i,decls:4,vars:7,consts:[[`button`,``],[`matIconButton`,``,`type`,`button`,3,`tabIndex`,`disabled`,`disableRipple`],[`viewBox`,`0 0 24 24`,`width`,`24px`,`height`,`24px`,`fill`,`currentColor`,`focusable`,`false`,`aria-hidden`,`true`,1,`mat-datepicker-toggle-default-icon`],[`d`,`M19 3h-1V1h-2v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V8h14v11zM7 10h5v5H7z`]],template:function(s,l){s&1&&(Me(r),C(0,`button`,1,0),le(2,o,2,0,`svg`,2),X(3),E()),s&2&&(ue(`tabIndex`,l.disabled?-1:l.tabIndex)(`disabled`,l.disabled)(`disableRipple`,l.disableRipple),Y(`aria-haspopup`,l.datepicker?`dialog`:null)(`aria-label`,l.ariaLabel||l._intl.openCalendarLabel)(`aria-expanded`,l.datepicker?l.datepicker.opened:null),y(2),ce(l._customIcon?-1:2))},dependencies:[Ka],styles:[`.mat-datepicker-toggle {
  pointer-events: auto;
  color: var(--%NS%mat-datepicker-toggle-icon-color, var(--%NS%mat-sys-on-surface-variant));
}
.mat-datepicker-toggle button {
  color: inherit;
}

.mat-datepicker-toggle-active {
  color: var(--%NS%mat-datepicker-toggle-active-state-icon-color, var(--%NS%mat-sys-primary));
}

@media (forced-colors: active) {
  .mat-datepicker-toggle-default-icon {
    color: CanvasText;
  }
}
`],encapsulation:2})})()}return t})();var Hy=(()=>{class t{static ɵfac=function(r){return new(r||t)};static ɵmod=R({type:t});static ɵinj=A({providers:[ss],imports:[ii,bn,Ro,er,UE,JP,HE,ve,oi]})}return t})();var Vi=class{viewContainerRef;injector;id;role=`dialog`;panelClass=``;hasBackdrop=!0;backdropClass=``;disableClose=!1;closePredicate;width=``;height=``;minWidth;minHeight;maxWidth;maxHeight;positionStrategy;data=null;direction;ariaDescribedBy=null;ariaLabelledBy=null;ariaLabel=null;ariaModal=!1;autoFocus=`first-tabbable`;restoreFocus=!0;scrollStrategy;closeOnNavigation=!0;closeOnDestroy=!0;closeOnOverlayDetachments=!0;disableAnimations=!1;providers;container;templateContext;bindings};var $y=(()=>{class t extends Pi{_elementRef=u(N);_focusTrapFactory=u(Tm);_config;_interactivityChecker=u(ny);_ngZone=u(T);_focusMonitor=u(Tn);_renderer=u(ke);_changeDetectorRef=u(Ce);_injector=u(B);_platform=u(xe);_document=u(z);_portalOutlet;_focusTrapped=new _;_focusTrap=null;_elementFocusedBeforeDialogWasOpened=null;_closeInteractionType=null;_ariaLabelledByQueue=[];_isDestroyed=!1;constructor(){super(),this._config=u(Vi,{optional:!0})||new Vi,this._config.ariaLabelledBy&&this._ariaLabelledByQueue.push(this._config.ariaLabelledBy)}_addAriaLabelledBy(e){this._ariaLabelledByQueue.push(e),this._changeDetectorRef.markForCheck()}_removeAriaLabelledBy(e){let r=this._ariaLabelledByQueue.indexOf(e);r>-1&&(this._ariaLabelledByQueue.splice(r,1),this._changeDetectorRef.markForCheck())}_contentAttached(){this._initializeFocusTrap(),this._captureInitialFocus()}_captureInitialFocus(){this._trapFocus()}ngOnDestroy(){this._focusTrapped.complete(),this._isDestroyed=!0,this._restoreFocus()}attachComponentPortal(e){this._portalOutlet.hasAttached();let r=this._portalOutlet.attachComponentPortal(e);return this._contentAttached(),r}attachTemplatePortal(e){this._portalOutlet.hasAttached();let r=this._portalOutlet.attachTemplatePortal(e);return this._contentAttached(),r}attachDomPortal=e=>{this._portalOutlet.hasAttached();let r=this._portalOutlet.attachDomPortal(e);return this._contentAttached(),r};_recaptureFocus(){this._containsFocus()||this._trapFocus()}_forceFocus(e,r){this._interactivityChecker.isFocusable(e)||(e.tabIndex=-1,this._ngZone.runOutsideAngular(()=>{let i=()=>{o(),a(),e.removeAttribute(`tabindex`)},o=this._renderer.listen(e,`blur`,i),a=this._renderer.listen(e,`mousedown`,i)})),e.focus(r)}_focusByCssSelector(e,r){let i=this._elementRef.nativeElement.querySelector(e);i&&this._forceFocus(i,r)}_trapFocus(e){this._isDestroyed||Ge(()=>{let r=this._elementRef.nativeElement;switch(this._config.autoFocus){case!1:case`dialog`:this._containsFocus()||r.focus(e);break;case!0:case`first-tabbable`:this._focusTrap?.focusInitialElement(e)||this._focusDialogContainer(e);break;case`first-heading`:this._focusByCssSelector(`h1, h2, h3, h4, h5, h6, [role="heading"]`,e);break;default:this._focusByCssSelector(this._config.autoFocus,e)}this._focusTrapped.next()},{injector:this._injector})}_restoreFocus(){let e=this._config.restoreFocus,r=null;if(typeof e==`string`?r=this._document.querySelector(e):typeof e==`boolean`?r=e?this._elementFocusedBeforeDialogWasOpened:null:e&&(r=e),this._config.restoreFocus&&r&&typeof r.focus==`function`){let i=wr(),o=this._elementRef.nativeElement;(!i||i===this._document.body||i===o||o.contains(i))&&(this._focusMonitor?(this._focusMonitor.focusVia(r,this._closeInteractionType),this._closeInteractionType=null):r.focus())}this._focusTrap&&this._focusTrap.destroy()}_focusDialogContainer(e){this._elementRef.nativeElement.focus?.(e)}_containsFocus(){let e=this._elementRef.nativeElement,r=wr();return e===r||e.contains(r)}_initializeFocusTrap(){this._platform.isBrowser&&(this._focusTrap=this._focusTrapFactory.create(this._elementRef.nativeElement),this._document&&(this._elementFocusedBeforeDialogWasOpened=wr()))}static ɵfac=function(r){return new(r||t)};static ɵcmp=(function(){function e(r,i){}return F({type:t,selectors:[[`cdk-dialog-container`]],viewQuery:function(i,o){if(i&1&&qe(Jn,7),i&2){let a;H(a=U())&&(o._portalOutlet=a.first)}},hostAttrs:[`tabindex`,`-1`,1,`cdk-dialog-container`],hostVars:6,hostBindings:function(i,o){i&2&&Y(`id`,o._config.id||null)(`role`,o._config.role)(`aria-modal`,o._config.ariaModal)(`aria-labelledby`,o._config.ariaLabel?null:o._ariaLabelledByQueue[0])(`aria-label`,o._config.ariaLabel)(`aria-describedby`,o._config.ariaDescribedBy||null)},features:[re],decls:1,vars:0,consts:[[`cdkPortalOutlet`,``]],template:function(i,o){i&1&&wt(0,e,0,0,`ng-template`,0)},dependencies:[Jn],styles:[`.cdk-dialog-container {
  display: block;
  width: 100%;
  height: 100%;
  min-height: inherit;
  max-height: inherit;
}
`],encapsulation:2,changeDetection:1})})()}return t})();var jo=class{overlayRef;config;componentInstance=null;componentRef=null;containerInstance;disableClose;closed=new _;backdropClick;keydownEvents;outsidePointerEvents;id;_detachSubscription;constructor(n,e){this.overlayRef=n,this.config=e,this.disableClose=e.disableClose,this.backdropClick=n.backdropClick(),this.keydownEvents=n.keydownEvents(),this.outsidePointerEvents=n.outsidePointerEvents(),this.id=e.id,this.keydownEvents.subscribe(r=>{r.keyCode===27&&!this.disableClose&&!tt(r)&&(r.preventDefault(),this.close(void 0,{focusOrigin:`keyboard`}))}),this.backdropClick.subscribe(()=>{!this.disableClose&&this._canClose()?this.close(void 0,{focusOrigin:`mouse`}):this.containerInstance._recaptureFocus?.()}),this._detachSubscription=n.detachments().subscribe(()=>{e.closeOnOverlayDetachments!==!1&&this.close()})}close(n,e){if(this._canClose(n)){let r=this.closed;this.containerInstance._closeInteractionType=e?.focusOrigin||`program`,this._detachSubscription.unsubscribe(),this.overlayRef.dispose(),r.next(n),r.complete(),this.componentInstance=this.containerInstance=null}}updatePosition(){return this.overlayRef.updatePosition(),this}updateSize(n=``,e=``){return this.overlayRef.updateSize({width:n,height:e}),this}addPanelClass(n){return this.overlayRef.addPanelClass(n),this}removePanelClass(n){return this.overlayRef.removePanelClass(n),this}_canClose(n){let e=this.config;return!!this.containerInstance&&(!e.closePredicate||e.closePredicate(n,e,this.componentInstance))}};var eL=new g(`DialogScrollStrategy`,{providedIn:`root`,factory:()=>{let t=u(B);return()=>Li(t)}});var tL=new g(`DialogData`);var nL=new g(`DefaultDialogConfig`);function rL(t){let n=L(t),e=new k;return{valueSignal:n,get value(){return n()},change:e,ngOnDestroy(){e.complete()}}}var Gy=(()=>{class t{_injector=u(B);_defaultOptions=u(nL,{optional:!0});_parentDialog=u(t,{optional:!0,skipSelf:!0});_overlayContainer=u(Km);_idGenerator=u(Fe);_openDialogsAtThisLevel=[];_afterAllClosedAtThisLevel=new _;_afterOpenedAtThisLevel=new _;_ariaHiddenElements=new Map;_scrollStrategy=u(eL);get openDialogs(){return this._parentDialog?this._parentDialog.openDialogs:this._openDialogsAtThisLevel}get afterOpened(){return this._parentDialog?this._parentDialog.afterOpened:this._afterOpenedAtThisLevel}afterAllClosed=zn(()=>this.openDialogs.length?this._getAfterAllClosed():this._getAfterAllClosed().pipe(_t(void 0)));open(e,r){r=b(b({},this._defaultOptions||new Vi),r),r.id=r.id||this._idGenerator.getId(`cdk-dialog-`),r.id&&this.getDialogById(r.id);let o=this._getOverlayConfig(r),a=nr(this._injector,o),s=new jo(a,r),l=this._attachContainer(a,s,r);if(s.containerInstance=l,!this.openDialogs.length){let c=this._overlayContainer.getContainerElement();l._focusTrapped?l._focusTrapped.pipe(it(1)).subscribe(()=>{this._hideNonDialogContentFromAssistiveTechnology(c)}):this._hideNonDialogContentFromAssistiveTechnology(c)}return this._attachDialogContent(e,s,l,r),this.openDialogs.push(s),s.closed.subscribe(()=>this._removeOpenDialog(s,!0)),this.afterOpened.next(s),s}closeAll(){Uy(this.openDialogs,e=>e.close())}getDialogById(e){return this.openDialogs.find(r=>r.id===e)}ngOnDestroy(){Uy(this._openDialogsAtThisLevel,e=>{e.config.closeOnDestroy===!1&&this._removeOpenDialog(e,!1)}),Uy(this._openDialogsAtThisLevel,e=>e.close()),this._afterAllClosedAtThisLevel.complete(),this._afterOpenedAtThisLevel.complete(),this._openDialogsAtThisLevel=[]}_getOverlayConfig(e){let r=new tr({positionStrategy:e.positionStrategy||kr().centerHorizontally().centerVertically(),scrollStrategy:e.scrollStrategy||this._scrollStrategy(),panelClass:e.panelClass,hasBackdrop:e.hasBackdrop,direction:e.direction,minWidth:e.minWidth,minHeight:e.minHeight,maxWidth:e.maxWidth,maxHeight:e.maxHeight,width:e.width,height:e.height,disposeOnNavigation:e.closeOnNavigation,disableAnimations:e.disableAnimations});return e.backdropClass&&(r.backdropClass=e.backdropClass),r}_attachContainer(e,r,i){let o=i.injector||i.viewContainerRef?.injector,a=[{provide:Vi,useValue:i},{provide:jo,useValue:r},{provide:ts,useValue:e}],s;i.container?typeof i.container==`function`?s=i.container:(s=i.container.type,a.push(...i.container.providers(i))):s=$y;let l=new sn(s,i.viewContainerRef,B.create({parent:o||this._injector,providers:a}));return e.attach(l).instance}_attachDialogContent(e,r,i,o){if(e instanceof mt){let a=this._createInjector(o,r,i,void 0),s={$implicit:o.data,dialogRef:r};o.templateContext&&(s=b(b({},s),typeof o.templateContext==`function`?o.templateContext():o.templateContext)),i.attachTemplatePortal(new Sr(e,null,s,a))}else{let a=this._createInjector(o,r,i,this._injector),s=i.attachComponentPortal(new sn(e,o.viewContainerRef,a,null,o.bindings));r.componentRef=s,r.componentInstance=s.instance}}_createInjector(e,r,i,o){let a=e.injector||e.viewContainerRef?.injector,s=[{provide:tL,useValue:e.data},{provide:jo,useValue:r}];return e.providers&&(typeof e.providers==`function`?s.push(...e.providers(r,e,i)):s.push(...e.providers)),e.direction&&(!a||!a.get(lt,null,{optional:!0}))&&s.push({provide:lt,useValue:rL(e.direction)}),B.create({parent:a||o,providers:s})}_removeOpenDialog(e,r){let i=this.openDialogs.indexOf(e);i>-1&&(this.openDialogs.splice(i,1),this.openDialogs.length||(this._ariaHiddenElements.forEach((o,a)=>{o?a.setAttribute(`aria-hidden`,o):a.removeAttribute(`aria-hidden`)}),this._ariaHiddenElements.clear(),r&&this._getAfterAllClosed().next()))}_hideNonDialogContentFromAssistiveTechnology(e){if(e.parentElement){let r=e.parentElement.children;for(let i=r.length-1;i>-1;i--){let o=r[i];o!==e&&o.nodeName!==`SCRIPT`&&o.nodeName!==`STYLE`&&!o.hasAttribute(`aria-live`)&&!o.hasAttribute(`popover`)&&(this._ariaHiddenElements.set(o,o.getAttribute(`aria-hidden`)),o.setAttribute(`aria-hidden`,`true`))}}}_getAfterAllClosed(){let e=this._parentDialog;return e?e._getAfterAllClosed():this._afterAllClosedAtThisLevel}static ɵfac=function(r){return new(r||t)};static ɵprov=S({token:t,factory:t.ɵfac})}return t})();function Uy(t,n){let e=t.length;for(;e--;)n(t[e])}var GE=(()=>{class t{static ɵfac=function(r){return new(r||t)};static ɵmod=R({type:t});static ɵinj=A({providers:[Gy],imports:[bn,er,Ro,er]})}return t})();var of=class{viewContainerRef;injector;id;role=`dialog`;panelClass=``;hasBackdrop=!0;backdropClass=``;disableClose=!1;closePredicate;width=``;height=``;minWidth;minHeight;maxWidth;maxHeight;position;data=null;direction;ariaDescribedBy=null;ariaLabelledBy=null;ariaLabel=null;ariaModal=!1;autoFocus=`first-tabbable`;restoreFocus=!0;delayFocusTrap=!0;scrollStrategy;closeOnNavigation=!0;enterAnimationDuration;exitAnimationDuration;bindings};var Wy=`mdc-dialog--open`;var WE=`mdc-dialog--opening`;var qE=`mdc-dialog--closing`;var iL=150;var oL=75;var aL=(()=>{class t extends $y{_animationStateChanged=new k;_animationsEnabled=!ze();_actionSectionCount=0;_hostElement=this._elementRef.nativeElement;_enterAnimationDuration=this._animationsEnabled?KE(this._config.enterAnimationDuration)??iL:0;_exitAnimationDuration=this._animationsEnabled?KE(this._config.exitAnimationDuration)??oL:0;_animationTimer=null;_contentAttached(){super._contentAttached(),this._startOpenAnimation()}_startOpenAnimation(){this._animationStateChanged.emit({state:`opening`,totalTime:this._enterAnimationDuration}),this._animationsEnabled?(this._hostElement.style.setProperty(YE,`${this._enterAnimationDuration}ms`),this._requestAnimationFrame(()=>this._hostElement.classList.add(WE,Wy)),this._waitForAnimationToComplete(this._enterAnimationDuration,this._finishDialogOpen)):(this._hostElement.classList.add(Wy),Promise.resolve().then(()=>this._finishDialogOpen()))}_startExitAnimation(){this._animationStateChanged.emit({state:`closing`,totalTime:this._exitAnimationDuration}),this._hostElement.classList.remove(Wy),this._animationsEnabled?(this._hostElement.style.setProperty(YE,`${this._exitAnimationDuration}ms`),this._requestAnimationFrame(()=>this._hostElement.classList.add(qE)),this._waitForAnimationToComplete(this._exitAnimationDuration,this._finishDialogClose)):Promise.resolve().then(()=>this._finishDialogClose())}_updateActionSectionCount(e){this._actionSectionCount+=e,this._changeDetectorRef.markForCheck()}_finishDialogOpen=()=>{this._clearAnimationClasses(),this._openAnimationDone(this._enterAnimationDuration)};_finishDialogClose=()=>{this._clearAnimationClasses(),this._animationStateChanged.emit({state:`closed`,totalTime:this._exitAnimationDuration})};_clearAnimationClasses(){this._hostElement.classList.remove(WE,qE)}_waitForAnimationToComplete(e,r){this._animationTimer!==null&&clearTimeout(this._animationTimer),this._animationTimer=setTimeout(r,e)}_requestAnimationFrame(e){this._ngZone.runOutsideAngular(()=>{typeof requestAnimationFrame==`function`?requestAnimationFrame(e):e()})}_captureInitialFocus(){this._config.delayFocusTrap||this._trapFocus()}_openAnimationDone(e){this._config.delayFocusTrap&&this._trapFocus(),this._animationStateChanged.next({state:`opened`,totalTime:e})}ngOnDestroy(){super.ngOnDestroy(),this._animationTimer!==null&&clearTimeout(this._animationTimer)}attachComponentPortal(e){let r=super.attachComponentPortal(e);return r.location.nativeElement.classList.add(`mat-mdc-dialog-component-host`),r}static ɵfac=(()=>{let e;return function(i){return(e||(e=Ae(t)))(i||t)}})();static ɵcmp=(function(){function e(r,i){}return F({type:t,selectors:[[`mat-dialog-container`]],hostAttrs:[`tabindex`,`-1`,1,`mat-mdc-dialog-container`,`mdc-dialog`],hostVars:10,hostBindings:function(i,o){i&2&&(yt(`id`,o._config.id),Y(`aria-modal`,o._config.ariaModal)(`role`,o._config.role)(`aria-labelledby`,o._config.ariaLabel?null:o._ariaLabelledByQueue[0])(`aria-label`,o._config.ariaLabel)(`aria-describedby`,o._config.ariaDescribedBy||null),G(`_mat-animation-noopable`,!o._animationsEnabled)(`mat-mdc-dialog-container-with-actions`,o._actionSectionCount>0))},features:[re],decls:3,vars:0,consts:[[1,`mat-mdc-dialog-inner-container`,`mdc-dialog__container`],[1,`mat-mdc-dialog-surface`,`mdc-dialog__surface`],[`cdkPortalOutlet`,``]],template:function(i,o){i&1&&(C(0,`div`,0)(1,`div`,1),wt(2,e,0,0,`ng-template`,2),E()())},dependencies:[Jn],styles:[`.mat-mdc-dialog-container {
  width: 100%;
  height: 100%;
  display: block;
  box-sizing: border-box;
  max-height: inherit;
  min-height: inherit;
  min-width: inherit;
  max-width: inherit;
  outline: 0;
}

.cdk-overlay-pane.mat-mdc-dialog-panel {
  max-width: var(--%NS%mat-dialog-container-max-width, 560px);
  min-width: var(--%NS%mat-dialog-container-min-width, 280px);
}
@media (max-width: 599px) {
  .cdk-overlay-pane.mat-mdc-dialog-panel {
    max-width: var(--%NS%mat-dialog-container-small-max-width, calc(100vw - 32px));
  }
}

.mat-mdc-dialog-inner-container {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  box-sizing: border-box;
  height: 100%;
  opacity: 0;
  transition: opacity linear var(--%NS%mat-dialog-transition-duration, 0ms);
  max-height: inherit;
  min-height: inherit;
  min-width: inherit;
  max-width: inherit;
}
.mdc-dialog--closing .mat-mdc-dialog-inner-container {
  transition: opacity 75ms linear;
  transform: none;
}
.mdc-dialog--open .mat-mdc-dialog-inner-container {
  opacity: 1;
}
._mat-animation-noopable .mat-mdc-dialog-inner-container {
  transition: none;
}

.mat-mdc-dialog-surface {
  display: flex;
  flex-direction: column;
  flex-grow: 0;
  flex-shrink: 0;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  position: relative;
  overflow-y: auto;
  outline: 0;
  transform: scale(0.8);
  transition: transform var(--%NS%mat-dialog-transition-duration, 0ms) cubic-bezier(0, 0, 0.2, 1);
  max-height: inherit;
  min-height: inherit;
  min-width: inherit;
  max-width: inherit;
  box-shadow: var(--%NS%mat-dialog-container-elevation-shadow, none);
  border-radius: var(--%NS%mat-dialog-container-shape, var(--%NS%mat-sys-corner-extra-large, 4px));
  background-color: var(--%NS%mat-dialog-container-color, var(--%NS%mat-sys-surface, white));
}
[dir=rtl] .mat-mdc-dialog-surface {
  text-align: right;
}
.mdc-dialog--open .mat-mdc-dialog-surface, .mdc-dialog--closing .mat-mdc-dialog-surface {
  transform: none;
}
._mat-animation-noopable .mat-mdc-dialog-surface {
  transition: none;
}
.mat-mdc-dialog-surface::before {
  position: absolute;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  border: 2px solid transparent;
  border-radius: inherit;
  content: "";
  pointer-events: none;
}

.mat-mdc-dialog-title {
  display: block;
  position: relative;
  flex-shrink: 0;
  box-sizing: border-box;
  margin: 0 0 1px;
  padding: var(--%NS%mat-dialog-headline-padding, 6px 24px 13px);
}
.mat-mdc-dialog-title::before {
  display: inline-block;
  width: 0;
  height: 40px;
  content: "";
  vertical-align: 0;
}
[dir=rtl] .mat-mdc-dialog-title {
  text-align: right;
}
.mat-mdc-dialog-container .mat-mdc-dialog-title {
  color: var(--%NS%mat-dialog-subhead-color, var(--%NS%mat-sys-on-surface, rgba(0, 0, 0, 0.87)));
  font-family: var(--%NS%mat-dialog-subhead-font, var(--%NS%mat-sys-headline-small-font, inherit));
  line-height: var(--%NS%mat-dialog-subhead-line-height, var(--%NS%mat-sys-headline-small-line-height, 1.5rem));
  font-size: var(--%NS%mat-dialog-subhead-size, var(--%NS%mat-sys-headline-small-size, 1rem));
  font-weight: var(--%NS%mat-dialog-subhead-weight, var(--%NS%mat-sys-headline-small-weight, 400));
  letter-spacing: var(--%NS%mat-dialog-subhead-tracking, var(--%NS%mat-sys-headline-small-tracking, 0.03125em));
}

.mat-mdc-dialog-content {
  display: block;
  flex-grow: 1;
  box-sizing: border-box;
  margin: 0;
  overflow: auto;
  max-height: 65vh;
}
.mat-mdc-dialog-content > :first-child {
  margin-top: 0;
}
.mat-mdc-dialog-content > :last-child {
  margin-bottom: 0;
}
.mat-mdc-dialog-container .mat-mdc-dialog-content {
  color: var(--%NS%mat-dialog-supporting-text-color, var(--%NS%mat-sys-on-surface-variant, rgba(0, 0, 0, 0.6)));
  font-family: var(--%NS%mat-dialog-supporting-text-font, var(--%NS%mat-sys-body-medium-font, inherit));
  line-height: var(--%NS%mat-dialog-supporting-text-line-height, var(--%NS%mat-sys-body-medium-line-height, 1.5rem));
  font-size: var(--%NS%mat-dialog-supporting-text-size, var(--%NS%mat-sys-body-medium-size, 1rem));
  font-weight: var(--%NS%mat-dialog-supporting-text-weight, var(--%NS%mat-sys-body-medium-weight, 400));
  letter-spacing: var(--%NS%mat-dialog-supporting-text-tracking, var(--%NS%mat-sys-body-medium-tracking, 0.03125em));
}
.mat-mdc-dialog-container .mat-mdc-dialog-content {
  padding: var(--%NS%mat-dialog-content-padding, 20px 24px);
}
.mat-mdc-dialog-container-with-actions .mat-mdc-dialog-content {
  padding: var(--%NS%mat-dialog-with-actions-content-padding, 20px 24px 0);
}
.mat-mdc-dialog-container .mat-mdc-dialog-title + .mat-mdc-dialog-content {
  padding-top: 0;
}

.mat-mdc-dialog-actions {
  display: flex;
  position: relative;
  flex-shrink: 0;
  flex-wrap: wrap;
  align-items: center;
  box-sizing: border-box;
  min-height: 52px;
  margin: 0;
  border-top: 1px solid transparent;
  padding: var(--%NS%mat-dialog-actions-padding, 16px 24px);
  justify-content: var(--%NS%mat-dialog-actions-alignment, flex-end);
}
@media (forced-colors: active) {
  .mat-mdc-dialog-actions {
    border-top-color: CanvasText;
  }
}
.mat-mdc-dialog-actions.mat-mdc-dialog-actions-align-start, .mat-mdc-dialog-actions[align=start] {
  justify-content: start;
}
.mat-mdc-dialog-actions.mat-mdc-dialog-actions-align-center, .mat-mdc-dialog-actions[align=center] {
  justify-content: center;
}
.mat-mdc-dialog-actions.mat-mdc-dialog-actions-align-end, .mat-mdc-dialog-actions[align=end] {
  justify-content: flex-end;
}
.mat-mdc-dialog-actions .mat-button-base + .mat-button-base,
.mat-mdc-dialog-actions .mat-mdc-button-base + .mat-mdc-button-base {
  margin-left: 8px;
}
[dir=rtl] .mat-mdc-dialog-actions .mat-button-base + .mat-button-base,
[dir=rtl] .mat-mdc-dialog-actions .mat-mdc-button-base + .mat-mdc-button-base {
  margin-left: 0;
  margin-right: 8px;
}

.mat-mdc-dialog-component-host {
  display: contents;
}
`],encapsulation:2,changeDetection:1})})()}return t})();var YE=`--mat-dialog-transition-duration`;function KE(t){return t==null?null:typeof t==`number`?t:t.endsWith(`ms`)?hn(t.substring(0,t.length-2)):t.endsWith(`s`)?hn(t.substring(0,t.length-1))*1e3:t===`0`?0:null}var rf=(function(t){return t[t.OPEN=0]=`OPEN`,t[t.CLOSING=1]=`CLOSING`,t[t.CLOSED=2]=`CLOSED`,t})(rf||{});var qy=class{_ref;_config;_containerInstance;componentInstance;componentRef=null;disableClose;id;_afterOpened=new xn(1);_beforeClosed=new xn(1);_result;_closeFallbackTimeout;_state=rf.OPEN;_closeInteractionType;constructor(n,e,r){this._ref=n,this._config=e,this._containerInstance=r,this.disableClose=e.disableClose,this.id=n.id,n.addPanelClass(`mat-mdc-dialog-panel`),r._animationStateChanged.pipe(Ee(i=>i.state===`opened`),it(1)).subscribe(()=>{this._afterOpened.next(),this._afterOpened.complete()}),r._animationStateChanged.pipe(Ee(i=>i.state===`closed`),it(1)).subscribe(()=>{clearTimeout(this._closeFallbackTimeout),this._finishDialogClose()}),n.overlayRef.detachments().subscribe(()=>{this._beforeClosed.next(this._result),this._beforeClosed.complete(),this._finishDialogClose()}),Dt(this.backdropClick(),this.keydownEvents().pipe(Ee(i=>i.keyCode===27&&!this.disableClose&&!tt(i)))).subscribe(i=>{this.disableClose||(i.preventDefault(),sL(this,i.type===`keydown`?`keyboard`:`mouse`))})}close(n){let e=this._config.closePredicate;e&&!e(n,this._config,this.componentInstance)||(this._result=n,this._containerInstance._animationStateChanged.pipe(Ee(r=>r.state===`closing`),it(1)).subscribe(r=>{this._beforeClosed.next(n),this._beforeClosed.complete(),this._ref.overlayRef.detachBackdrop(),this._closeFallbackTimeout=setTimeout(()=>this._finishDialogClose(),r.totalTime+100)}),this._state=rf.CLOSING,this._containerInstance._startExitAnimation())}afterOpened(){return this._afterOpened}afterClosed(){return this._ref.closed}beforeClosed(){return this._beforeClosed}backdropClick(){return this._ref.backdropClick}keydownEvents(){return this._ref.keydownEvents}updatePosition(n){let e=this._ref.config.positionStrategy;return n&&(n.left||n.right)?n.left?e.left(n.left):e.right(n.right):e.centerHorizontally(),n&&(n.top||n.bottom)?n.top?e.top(n.top):e.bottom(n.bottom):e.centerVertically(),this._ref.updatePosition(),this}updateSize(n=``,e=``){return this._ref.updateSize(n,e),this}addPanelClass(n){return this._ref.addPanelClass(n),this}removePanelClass(n){return this._ref.removePanelClass(n),this}getState(){return this._state}_finishDialogClose(){this._state=rf.CLOSED,this._ref.close(this._result,{focusOrigin:this._closeInteractionType}),this.componentInstance=null}};function sL(t,n,e){return t._closeInteractionType=n,t.close(e)}var lL=new g(`MatMdcDialogData`);var cL=new g(`mat-mdc-dialog-default-options`);var dL=new g(`mat-mdc-dialog-scroll-strategy`,{providedIn:`root`,factory:()=>{let t=u(B);return()=>Li(t)}});var uL=(()=>{class t{_defaultOptions=u(cL,{optional:!0});_scrollStrategy=u(dL);_parentDialog=u(t,{optional:!0,skipSelf:!0});_idGenerator=u(Fe);_injector=u(B);_dialog=u(Gy);_animationsDisabled=ze();_openDialogsAtThisLevel=[];_afterAllClosedAtThisLevel=new _;_afterOpenedAtThisLevel=new _;dialogConfigClass=of;_dialogRefConstructor;_dialogContainerType;_dialogDataToken;get openDialogs(){return this._parentDialog?this._parentDialog.openDialogs:this._openDialogsAtThisLevel}get afterOpened(){return this._parentDialog?this._parentDialog.afterOpened:this._afterOpenedAtThisLevel}_getAfterAllClosed(){let e=this._parentDialog;return e?e._getAfterAllClosed():this._afterAllClosedAtThisLevel}afterAllClosed=zn(()=>this.openDialogs.length?this._getAfterAllClosed():this._getAfterAllClosed().pipe(_t(void 0)));constructor(){this._dialogRefConstructor=qy,this._dialogContainerType=aL,this._dialogDataToken=lL}open(e,r){let i;r=b(b({},this._defaultOptions||new of),r),r.id=r.id||this._idGenerator.getId(`mat-mdc-dialog-`),r.scrollStrategy=r.scrollStrategy||this._scrollStrategy();let o=this._dialog.open(e,K(b({},r),{positionStrategy:kr(this._injector).centerHorizontally().centerVertically(),disableClose:!0,closePredicate:void 0,closeOnDestroy:!1,closeOnOverlayDetachments:!1,disableAnimations:this._animationsDisabled||r.enterAnimationDuration?.toLocaleString()===`0`||r.exitAnimationDuration?.toString()===`0`,container:{type:this._dialogContainerType,providers:()=>[{provide:this.dialogConfigClass,useValue:r},{provide:Vi,useValue:r}]},templateContext:()=>({dialogRef:i}),providers:(a,s,l)=>(i=new this._dialogRefConstructor(a,r,l),i.updatePosition(r?.position),[{provide:this._dialogContainerType,useValue:l},{provide:this._dialogDataToken,useValue:s.data},{provide:this._dialogRefConstructor,useValue:i},{provide:jo,useValue:null}])}));return i.componentRef=o.componentRef,i.componentInstance=o.componentInstance,this.openDialogs.push(i),this.afterOpened.next(i),i.afterClosed().subscribe(()=>{let a=this.openDialogs.indexOf(i);a>-1&&(this.openDialogs.splice(a,1),this.openDialogs.length||this._getAfterAllClosed().next())}),i}closeAll(){this._closeDialogs(this.openDialogs)}getDialogById(e){return this.openDialogs.find(r=>r.id===e)}ngOnDestroy(){this._closeDialogs(this._openDialogsAtThisLevel),this._afterAllClosedAtThisLevel.complete(),this._afterOpenedAtThisLevel.complete()}_closeDialogs(e){let r=e.length;for(;r--;)e[r].close()}static ɵfac=function(r){return new(r||t)};static ɵprov=S({token:t,factory:t.ɵfac})}return t})();var Yy=(()=>{class t{static ɵfac=function(r){return new(r||t)};static ɵmod=R({type:t});static ɵinj=A({providers:[uL],imports:[GE,bn,er,ve]})}return t})();var Bi=(()=>{class t{static ɵfac=function(r){return new(r||t)};static ɵmod=R({type:t});static ɵinj=A({imports:[Nm,tf,ve]})}return t})();var af=class{tracker;columnIndex=0;rowIndex=0;get rowCount(){return this.rowIndex+1}get rowspan(){let n=Math.max(...this.tracker);return n>1?this.rowCount+n-1:this.rowCount}positions;update(n,e){this.columnIndex=0,this.rowIndex=0,this.tracker=new Array(n),this.tracker.fill(0,0,this.tracker.length),this.positions=e.map(r=>this._trackTile(r))}_trackTile(n){let e=this._findMatchingGap(n.colspan);return this._markTilePosition(e,n),this.columnIndex=e+n.colspan,new Ky(this.rowIndex,e)}_findMatchingGap(n){if(n>this.tracker.length)throw Error(`mat-grid-list: tile with colspan ${n} is wider than grid with cols="${this.tracker.length}".`);let e=-1,r=-1;do{if(this.columnIndex+n>this.tracker.length){this._nextRow(),e=this.tracker.indexOf(0,this.columnIndex),r=this._findGapEndIndex(e);continue}if(e=this.tracker.indexOf(0,this.columnIndex),e==-1){this._nextRow(),e=this.tracker.indexOf(0,this.columnIndex),r=this._findGapEndIndex(e);continue}r=this._findGapEndIndex(e),this.columnIndex=e+1}while(r-e<n||r==0);return Math.max(e,0)}_nextRow(){this.columnIndex=0,this.rowIndex++;for(let n=0;n<this.tracker.length;n++)this.tracker[n]=Math.max(0,this.tracker[n]-1)}_findGapEndIndex(n){for(let e=n+1;e<this.tracker.length;e++)if(this.tracker[e]!=0)return e;return this.tracker.length}_markTilePosition(n,e){for(let r=0;r<e.colspan;r++)this.tracker[n+r]=e.rowspan}};var Ky=class{row;col;constructor(n,e){this.row=n,this.col=e}};var ZE=new g(`MAT_GRID_LIST`);var mL=(()=>{class t{_element=u(N);_gridList=u(ZE,{optional:!0});_rowspan=1;_colspan=1;get rowspan(){return this._rowspan}set rowspan(e){this._rowspan=Math.round(hn(e))}get colspan(){return this._colspan}set colspan(e){this._colspan=Math.round(hn(e))}_setStyle(e,r){this._element.nativeElement.style[e]=r}static ɵfac=function(r){return new(r||t)};static ɵcmp=(function(){return F({type:t,selectors:[[`mat-grid-tile`]],hostAttrs:[1,`mat-grid-tile`],hostVars:2,hostBindings:function(i,o){i&2&&Y(`rowspan`,o.rowspan)(`colspan`,o.colspan)},inputs:{rowspan:`rowspan`,colspan:`colspan`},exportAs:[`matGridTile`],ngContentSelectors:[`*`],decls:2,vars:0,consts:[[1,`mat-grid-tile-content`]],template:function(i,o){i&1&&(Me(),Re(0,`div`,0),X(1),Oe())},styles:[`.mat-grid-list {
  display: block;
  position: relative;
}

.mat-grid-tile {
  display: block;
  position: absolute;
  overflow: hidden;
}
.mat-grid-tile .mat-grid-tile-header,
.mat-grid-tile .mat-grid-tile-footer {
  display: flex;
  align-items: center;
  height: 48px;
  color: #fff;
  background: rgba(0, 0, 0, 0.38);
  overflow: hidden;
  padding: 0 16px;
  position: absolute;
  left: 0;
  right: 0;
}
.mat-grid-tile .mat-grid-tile-header > *,
.mat-grid-tile .mat-grid-tile-footer > * {
  margin: 0;
  padding: 0;
  font-weight: normal;
  font-size: inherit;
}
.mat-grid-tile .mat-grid-tile-header.mat-2-line,
.mat-grid-tile .mat-grid-tile-footer.mat-2-line {
  height: 68px;
}
.mat-grid-tile .mat-grid-list-text {
  display: flex;
  flex-direction: column;
  flex: auto;
  box-sizing: border-box;
  overflow: hidden;
}
.mat-grid-tile .mat-grid-list-text > * {
  margin: 0;
  padding: 0;
  font-weight: normal;
  font-size: inherit;
}
.mat-grid-tile .mat-grid-list-text:empty {
  display: none;
}
.mat-grid-tile .mat-grid-tile-header {
  top: 0;
}
.mat-grid-tile .mat-grid-tile-footer {
  bottom: 0;
}
.mat-grid-tile .mat-grid-avatar {
  padding-right: 16px;
}
[dir=rtl] .mat-grid-tile .mat-grid-avatar {
  padding-right: 0;
  padding-left: 16px;
}
.mat-grid-tile .mat-grid-avatar:empty {
  display: none;
}

.mat-grid-tile-header {
  font-size: var(--%NS%mat-grid-list-tile-header-primary-text-size, var(--%NS%mat-sys-body-large));
}
.mat-grid-tile-header .mat-line {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  display: block;
  box-sizing: border-box;
}
.mat-grid-tile-header .mat-line:nth-child(n+2) {
  font-size: var(--%NS%mat-grid-list-tile-header-secondary-text-size, var(--%NS%mat-sys-body-medium));
}

.mat-grid-tile-footer {
  font-size: var(--%NS%mat-grid-list-tile-footer-primary-text-size, var(--%NS%mat-sys-body-large));
}
.mat-grid-tile-footer .mat-line {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  display: block;
  box-sizing: border-box;
}
.mat-grid-tile-footer .mat-line:nth-child(n+2) {
  font-size: var(--%NS%mat-grid-list-tile-footer-secondary-text-size, var(--%NS%mat-sys-body-medium));
}

.mat-grid-tile-content {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  padding: 0;
  margin: 0;
}
`],encapsulation:2})})()}return t})();var fL=/^-?\d+((\.\d+)?[A-Za-z%$]?)+$/;var uc=class{_gutterSize;_rows=0;_rowspan=0;_cols;_direction;init(n,e,r,i){this._gutterSize=QE(n),this._rows=e.rowCount,this._rowspan=e.rowspan,this._cols=r,this._direction=i}getBaseTileSize(n,e){return`(${n}% - (${this._gutterSize} * ${e}))`}getTilePosition(n,e){return e===0?`0`:zo(`(${n} + ${this._gutterSize}) * ${e}`)}getTileSize(n,e){return`(${n} * ${e}) + (${e-1} * ${this._gutterSize})`}setStyle(n,e,r){let i=100/this._cols,o=(this._cols-1)/this._cols;this.setColStyles(n,r,i,o),this.setRowStyles(n,e,i,o)}setColStyles(n,e,r,i){let o=this.getBaseTileSize(r,i),a=this._direction===`rtl`?`right`:`left`;n._setStyle(a,this.getTilePosition(o,e)),n._setStyle(`width`,zo(this.getTileSize(o,n.colspan)))}getGutterSpan(){return`${this._gutterSize} * (${this._rowspan} - 1)`}getTileSpan(n){return`${this._rowspan} * ${this.getTileSize(n,1)}`}getComputedHeight(){return null}};var Zy=class extends uc{fixedRowHeight;constructor(n){super(),this.fixedRowHeight=n}init(n,e,r,i){super.init(n,e,r,i),this.fixedRowHeight=QE(this.fixedRowHeight),fL.test(this.fixedRowHeight)}setRowStyles(n,e){n._setStyle(`top`,this.getTilePosition(this.fixedRowHeight,e)),n._setStyle(`height`,zo(this.getTileSize(this.fixedRowHeight,n.rowspan)))}getComputedHeight(){return[`height`,zo(`${this.getTileSpan(this.fixedRowHeight)} + ${this.getGutterSpan()}`)]}reset(n){n._setListStyle([`height`,null]),n._tiles&&n._tiles.forEach(e=>{e._setStyle(`top`,null),e._setStyle(`height`,null)})}};var Qy=class extends uc{rowHeightRatio;baseTileHeight;constructor(n){super(),this._parseRatio(n)}setRowStyles(n,e,r,i){let o=r/this.rowHeightRatio;this.baseTileHeight=this.getBaseTileSize(o,i),n._setStyle(`marginTop`,this.getTilePosition(this.baseTileHeight,e)),n._setStyle(`paddingTop`,zo(this.getTileSize(this.baseTileHeight,n.rowspan)))}getComputedHeight(){return[`paddingBottom`,zo(`${this.getTileSpan(this.baseTileHeight)} + ${this.getGutterSpan()}`)]}reset(n){n._setListStyle([`paddingBottom`,null]),n._tiles.forEach(e=>{e._setStyle(`marginTop`,null),e._setStyle(`paddingTop`,null)})}_parseRatio(n){let e=n.split(`:`);e.length,this.rowHeightRatio=parseFloat(e[0])/parseFloat(e[1])}};var Xy=class extends uc{setRowStyles(n,e){let r=100/this._rowspan,i=(this._rows-1)/this._rows,o=this.getBaseTileSize(r,i);n._setStyle(`top`,this.getTilePosition(o,e)),n._setStyle(`height`,zo(this.getTileSize(o,n.rowspan)))}reset(n){n._tiles&&n._tiles.forEach(e=>{e._setStyle(`top`,null),e._setStyle(`height`,null)})}};function zo(t){return`calc(${t})`}function QE(t){return t.match(/([A-Za-z%]+)$/)?t:`${t}px`}var pL=`fit`;var wie=(()=>{class t{_element=u(N);_dir=u(lt,{optional:!0});_cols;_tileCoordinator;_rowHeight;_gutter=`1px`;_tileStyler;_tiles;get cols(){return this._cols}set cols(e){this._cols=Math.max(1,Math.round(hn(e)))}get gutterSize(){return this._gutter}set gutterSize(e){this._gutter=`${e??``}`}get rowHeight(){return this._rowHeight}set rowHeight(e){let r=`${e??``}`;r!==this._rowHeight&&(this._rowHeight=r,this._setTileStyler(this._rowHeight))}ngOnInit(){this._checkCols(),this._checkRowHeight()}ngAfterContentChecked(){this._layoutTiles()}_checkCols(){this.cols}_checkRowHeight(){this._rowHeight||this._setTileStyler(`1:1`)}_setTileStyler(e){this._tileStyler&&this._tileStyler.reset(this),e===pL?this._tileStyler=new Xy:e&&e.indexOf(`:`)>-1?this._tileStyler=new Qy(e):this._tileStyler=new Zy(e)}_layoutTiles(){this._tileCoordinator||(this._tileCoordinator=new af);let e=this._tileCoordinator,r=this._tiles.filter(o=>!o._gridList||o._gridList===this),i=this._dir?this._dir.value:`ltr`;this._tileCoordinator.update(this.cols,r),this._tileStyler.init(this.gutterSize,e,this.cols,i),r.forEach((o,a)=>{let s=e.positions[a];this._tileStyler.setStyle(o,s.row,s.col)}),this._setListStyle(this._tileStyler.getComputedHeight())}_setListStyle(e){e&&(this._element.nativeElement.style[e[0]]=e[1])}static ɵfac=function(r){return new(r||t)};static ɵcmp=(function(){return F({type:t,selectors:[[`mat-grid-list`]],contentQueries:function(i,o,a){if(i&1&&Mt(a,mL,5),i&2){let s;H(s=U())&&(o._tiles=s)}},hostAttrs:[1,`mat-grid-list`],hostVars:1,hostBindings:function(i,o){i&2&&Y(`cols`,o.cols)},inputs:{cols:`cols`,gutterSize:`gutterSize`,rowHeight:`rowHeight`},exportAs:[`matGridList`],features:[ye([{provide:ZE,useExisting:t}])],ngContentSelectors:[`*`],decls:2,vars:0,template:function(i,o){i&1&&(Me(),Re(0,`div`),X(1),Oe())},styles:[`.mat-grid-list {
  display: block;
  position: relative;
}

.mat-grid-tile {
  display: block;
  position: absolute;
  overflow: hidden;
}
.mat-grid-tile .mat-grid-tile-header,
.mat-grid-tile .mat-grid-tile-footer {
  display: flex;
  align-items: center;
  height: 48px;
  color: #fff;
  background: rgba(0, 0, 0, 0.38);
  overflow: hidden;
  padding: 0 16px;
  position: absolute;
  left: 0;
  right: 0;
}
.mat-grid-tile .mat-grid-tile-header > *,
.mat-grid-tile .mat-grid-tile-footer > * {
  margin: 0;
  padding: 0;
  font-weight: normal;
  font-size: inherit;
}
.mat-grid-tile .mat-grid-tile-header.mat-2-line,
.mat-grid-tile .mat-grid-tile-footer.mat-2-line {
  height: 68px;
}
.mat-grid-tile .mat-grid-list-text {
  display: flex;
  flex-direction: column;
  flex: auto;
  box-sizing: border-box;
  overflow: hidden;
}
.mat-grid-tile .mat-grid-list-text > * {
  margin: 0;
  padding: 0;
  font-weight: normal;
  font-size: inherit;
}
.mat-grid-tile .mat-grid-list-text:empty {
  display: none;
}
.mat-grid-tile .mat-grid-tile-header {
  top: 0;
}
.mat-grid-tile .mat-grid-tile-footer {
  bottom: 0;
}
.mat-grid-tile .mat-grid-avatar {
  padding-right: 16px;
}
[dir=rtl] .mat-grid-tile .mat-grid-avatar {
  padding-right: 0;
  padding-left: 16px;
}
.mat-grid-tile .mat-grid-avatar:empty {
  display: none;
}

.mat-grid-tile-header {
  font-size: var(--%NS%mat-grid-list-tile-header-primary-text-size, var(--%NS%mat-sys-body-large));
}
.mat-grid-tile-header .mat-line {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  display: block;
  box-sizing: border-box;
}
.mat-grid-tile-header .mat-line:nth-child(n+2) {
  font-size: var(--%NS%mat-grid-list-tile-header-secondary-text-size, var(--%NS%mat-sys-body-medium));
}

.mat-grid-tile-footer {
  font-size: var(--%NS%mat-grid-list-tile-footer-primary-text-size, var(--%NS%mat-sys-body-large));
}
.mat-grid-tile-footer .mat-line {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  display: block;
  box-sizing: border-box;
}
.mat-grid-tile-footer .mat-line:nth-child(n+2) {
  font-size: var(--%NS%mat-grid-list-tile-footer-secondary-text-size, var(--%NS%mat-sys-body-medium));
}

.mat-grid-tile-content {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  padding: 0;
  margin: 0;
}
`],encapsulation:2})})()}return t})();var Jy=(()=>{class t{static ɵfac=function(r){return new(r||t)};static ɵmod=R({type:t});static ɵinj=A({imports:[Cy,ve,Cy]})}return t})();function XE(t){return Error(`Unable to find icon with the name "${t}"`)}function hL(){return Error(`Could not find HttpClient for use with Angular Material icons. Please add provideHttpClient() to your providers.`)}function JE(t){return Error(`The URL provided to MatIconRegistry was not trusted as a resource URL via Angular's DomSanitizer. Attempted URL was "${t}".`)}function ek(t){return Error(`The literal provided to MatIconRegistry was not trusted as safe HTML by Angular's DomSanitizer. Attempted literal was "${t}".`)}var si=class{url;svgText;options;svgElement=null;constructor(n,e,r){this.url=n,this.svgText=e,this.options=r}};var nk=(()=>{class t{_httpClient;_sanitizer;_errorHandler;_document;_svgIconConfigs=new Map;_iconSetConfigs=new Map;_cachedIconsByUrl=new Map;_inProgressUrlFetches=new Map;_fontCssClassesByAlias=new Map;_resolvers=[];_defaultFontSetClass;constructor(e,r,i,o){this._httpClient=e,this._sanitizer=r,this._errorHandler=o,this._document=i}addSvgIcon(e,r,i){return this.addSvgIconInNamespace(``,e,r,i)}addSvgIconLiteral(e,r,i){return this.addSvgIconLiteralInNamespace(``,e,r,i)}addSvgIconInNamespace(e,r,i,o){return this._addSvgIconConfig(e,r,new si(i,null,o))}addSvgIconResolver(e){return this._resolvers.push(e),this}addSvgIconLiteralInNamespace(e,r,i,o){let a=this._sanitizer.sanitize(Te.HTML,i);if(!a)throw ek(i);let s=To(a);return this._addSvgIconConfig(e,r,new si(``,s,o))}addSvgIconSet(e,r){return this.addSvgIconSetInNamespace(``,e,r)}addSvgIconSetLiteral(e,r){return this.addSvgIconSetLiteralInNamespace(``,e,r)}addSvgIconSetInNamespace(e,r,i){return this._addSvgIconSetConfig(e,new si(r,null,i))}addSvgIconSetLiteralInNamespace(e,r,i){let o=this._sanitizer.sanitize(Te.HTML,r);if(!o)throw ek(r);let a=To(o);return this._addSvgIconSetConfig(e,new si(``,a,i))}registerFontClassAlias(e,r=e){return this._fontCssClassesByAlias.set(e,r),this}classNameForFontAlias(e){return this._fontCssClassesByAlias.get(e)||e}setDefaultFontSetClass(...e){return this._defaultFontSetClass=e,this}getDefaultFontSetClass(){return this._defaultFontSetClass??=bL(this._document),this._defaultFontSetClass}getSvgIconFromUrl(e){let r=this._sanitizer.sanitize(Te.RESOURCE_URL,e);if(!r)throw JE(e);let i=this._cachedIconsByUrl.get(r);return i?j(sf(i)):this._loadSvgIconFromConfig(new si(e,null)).pipe(St(o=>this._cachedIconsByUrl.set(r,o)),oe(o=>sf(o)))}getNamedSvgIcon(e,r=``){let i=tk(r,e),o=this._svgIconConfigs.get(i);if(o)return this._getSvgFromConfig(o);if(o=this._getIconConfigFromResolvers(r,e),o)return this._svgIconConfigs.set(i,o),this._getSvgFromConfig(o);let a=this._iconSetConfigs.get(r);return a?this._getSvgFromIconSetConfigs(e,a):Ts(XE(i))}ngOnDestroy(){this._resolvers=[],this._svgIconConfigs.clear(),this._iconSetConfigs.clear(),this._cachedIconsByUrl.clear()}_getSvgFromConfig(e){return e.svgText?j(sf(this._svgElementFromConfig(e))):this._loadSvgIconFromConfig(e).pipe(oe(r=>sf(r)))}_getSvgFromIconSetConfigs(e,r){let i=this._extractIconWithNameFromAnySet(e,r);if(i)return j(i);return As(r.filter(a=>!a.svgText).map(a=>this._loadSvgIconSetFromConfig(a).pipe(Ci(s=>{let c=`Loading icon set URL: ${this._sanitizer.sanitize(Te.RESOURCE_URL,a.url)} failed: ${s.message}`;return this._errorHandler.handleError(new Error(c)),j(null)})))).pipe(oe(()=>{let a=this._extractIconWithNameFromAnySet(e,r);if(!a)throw XE(e);return a}))}_extractIconWithNameFromAnySet(e,r){for(let i=r.length-1;i>=0;i--){let o=r[i];if(o.svgText&&o.svgText.toString().indexOf(e)>-1){let a=this._svgElementFromConfig(o),s=this._extractSvgIconFromSet(a,e,o.options);if(s)return s}}return null}_loadSvgIconFromConfig(e){return this._fetchIcon(e).pipe(St(r=>e.svgText=r),oe(()=>this._svgElementFromConfig(e)))}_loadSvgIconSetFromConfig(e){return e.svgText?j(null):this._fetchIcon(e).pipe(St(r=>e.svgText=r))}_extractSvgIconFromSet(e,r,i){let o=e.querySelector(`[id="${r}"]`);if(!o)return null;let a=o.cloneNode(!0);if(a.removeAttribute(`id`),a.nodeName.toLowerCase()===`svg`)return this._setSvgAttributes(a,i);if(a.nodeName.toLowerCase()===`symbol`)return this._setSvgAttributes(this._toSvgElement(a),i);let s=this._svgElementFromString(To(`<svg></svg>`));return s.appendChild(a),this._setSvgAttributes(s,i)}_svgElementFromString(e){let r=this._document.createElement(`DIV`);r.innerHTML=e;let i=r.querySelector(`svg`);if(!i)throw Error(`<svg> tag not found`);return i}_toSvgElement(e){let r=this._svgElementFromString(To(`<svg></svg>`)),i=e.attributes;for(let o=0;o<i.length;o++){let{name:a,value:s}=i[o],l=a.toLowerCase();l!==`id`&&!l.startsWith(`on`)&&r.setAttribute(a,s)}for(let o=0;o<e.childNodes.length;o++)e.childNodes[o].nodeType===this._document.ELEMENT_NODE&&r.appendChild(e.childNodes[o].cloneNode(!0));return r}_setSvgAttributes(e,r){return e.setAttribute(`fit`,``),e.setAttribute(`height`,`100%`),e.setAttribute(`width`,`100%`),e.setAttribute(`preserveAspectRatio`,`xMidYMid meet`),e.setAttribute(`focusable`,`false`),r&&r.viewBox&&e.setAttribute(`viewBox`,r.viewBox),e}_fetchIcon(e){let{url:r,options:i}=e,o=i?.withCredentials??!1;if(!this._httpClient)throw hL();if(r==null)throw Error(`Cannot fetch icon from URL "${r}".`);let a=this._sanitizer.sanitize(Te.RESOURCE_URL,r);if(!a)throw JE(r);let s=this._inProgressUrlFetches.get(a);if(s)return s;let l=this._httpClient.get(a,{responseType:`text`,withCredentials:o}).pipe(oe(c=>To(c)),xi(()=>this._inProgressUrlFetches.delete(a)),Os());return this._inProgressUrlFetches.set(a,l),l}_addSvgIconConfig(e,r,i){return this._svgIconConfigs.set(tk(e,r),i),this}_addSvgIconSetConfig(e,r){let i=this._iconSetConfigs.get(e);return i?i.push(r):this._iconSetConfigs.set(e,[r]),this}_svgElementFromConfig(e){if(!e.svgElement){let r=this._svgElementFromString(e.svgText);this._setSvgAttributes(r,e.options),e.svgElement=r}return e.svgElement}_getIconConfigFromResolvers(e,r){for(let i=0;i<this._resolvers.length;i++){let o=this._resolvers[i](r,e);if(o)return gL(o)?new si(o.url,null,o.options):new si(o,null)}}static ɵfac=function(r){return new(r||t)(P(mm,8),P(Pl),P(z,8),P(Qt))};static ɵprov=q({token:t,factory:t.ɵfac,providedIn:`root`})}return t})();function sf(t){return t.cloneNode(!0)}function tk(t,n){return t+`:`+n}function gL(t){return!!(t.url&&t.options)}function bL(t){let n=null,e=!1;return t.fonts&&typeof t.fonts.forEach==`function`&&t.fonts.forEach(r=>{let i=r.family.replace(/['"]/g,``).trim().toLowerCase();(i===`material icons`||i.startsWith(`material icons `))&&(e=!0),i.startsWith(`material symbols rounded`)?n=`rounded`:i.startsWith(`material symbols sharp`)?n=`sharp`:i.startsWith(`material symbols`)&&(n=`outlined`)}),[n&&!e?`material-symbols-${n}`:`material-icons`,`mat-ligature-font`]}var yL=new g(`MAT_ICON_DEFAULT_OPTIONS`);var vL=new g(`mat-icon-location`,{providedIn:`root`,factory:()=>{let t=u(z),n=t?t.location:null;return{getPathname:()=>n?n.pathname+n.search:``}}});var rk=[`clip-path`,`color-profile`,`src`,`cursor`,`fill`,`filter`,`marker`,`marker-start`,`marker-mid`,`marker-end`,`mask`,`stroke`];var _L=rk.map(t=>`[${t}]`).join(`, `);var CL=/^url\(['"]?#(.*?)['"]?\)$/;var zie=(()=>{class t{_elementRef=u(N);_iconRegistry=u(nk);_location=u(vL);_errorHandler=u(Qt);_defaultColor;get color(){return this._color||this._defaultColor}set color(e){this._color=e}_color;inline=!1;get svgIcon(){return this._svgIcon}set svgIcon(e){e!==this._svgIcon&&(e?this._updateSvgIcon(e):this._svgIcon&&this._clearSvgElement(),this._svgIcon=e)}_svgIcon;get fontSet(){return this._fontSet}set fontSet(e){let r=this._cleanupFontValue(e);r!==this._fontSet&&(this._fontSet=r,this._updateFontIconClasses())}_fontSet;get fontIcon(){return this._fontIcon}set fontIcon(e){let r=this._cleanupFontValue(e);r!==this._fontIcon&&(this._fontIcon=r,this._updateFontIconClasses())}_fontIcon;_previousFontSetClass=[];_previousFontIconClass;_svgName=null;_svgNamespace=null;_previousPath;_elementsWithExternalReferences;_currentIconFetch=ne.EMPTY;constructor(){let e=u(new Gt(`aria-hidden`),{optional:!0}),r=u(yL,{optional:!0});r&&(r.color&&(this.color=this._defaultColor=r.color),r.fontSet&&(this.fontSet=r.fontSet)),e||this._elementRef.nativeElement.setAttribute(`aria-hidden`,`true`)}_splitIconName(e){if(!e)return[``,``];let r=e.split(`:`);switch(r.length){case 1:return[``,r[0]];case 2:return r;default:throw Error(`Invalid icon name: "${e}"`)}}ngOnInit(){this._updateFontIconClasses()}ngAfterViewChecked(){let e=this._elementsWithExternalReferences;if(e&&e.size){let r=this._location.getPathname();r!==this._previousPath&&(this._previousPath=r,this._prependPathToReferences(r))}}ngOnDestroy(){this._currentIconFetch.unsubscribe(),this._elementsWithExternalReferences&&this._elementsWithExternalReferences.clear()}_usingFontIcon(){return!this.svgIcon}_setSvgElement(e){this._clearSvgElement();let r=this._location.getPathname();this._previousPath=r,this._cacheChildrenWithExternalReferences(e),this._prependPathToReferences(r),this._elementRef.nativeElement.appendChild(e)}_clearSvgElement(){let e=this._elementRef.nativeElement,r=e.childNodes.length;for(this._elementsWithExternalReferences&&this._elementsWithExternalReferences.clear();r--;){let i=e.childNodes[r];(i.nodeType!==1||i.nodeName.toLowerCase()===`svg`)&&i.remove()}}_updateFontIconClasses(){if(!this._usingFontIcon())return;let e=this._elementRef.nativeElement,r=(this.fontSet?this._iconRegistry.classNameForFontAlias(this.fontSet).split(/ +/):this._iconRegistry.getDefaultFontSetClass()).filter(i=>i.length>0);this._previousFontSetClass.forEach(i=>e.classList.remove(i)),r.forEach(i=>e.classList.add(i)),this._previousFontSetClass=r,this.fontIcon!==this._previousFontIconClass&&!r.includes(`mat-ligature-font`)&&(this._previousFontIconClass&&e.classList.remove(this._previousFontIconClass),this.fontIcon&&e.classList.add(this.fontIcon),this._previousFontIconClass=this.fontIcon)}_cleanupFontValue(e){return typeof e==`string`?e.trim().split(` `)[0]:e}_prependPathToReferences(e){let r=this._elementsWithExternalReferences,i=e.startsWith(`//`)?`/.${e}`:e;r&&r.forEach((o,a)=>{o.forEach(s=>{a.setAttribute(s.name,`url('${i}#${s.value}')`)})})}_cacheChildrenWithExternalReferences(e){let r=e.querySelectorAll(_L),i=this._elementsWithExternalReferences=this._elementsWithExternalReferences||new Map;for(let o=0;o<r.length;o++)rk.forEach(a=>{let s=r[o],l=s.getAttribute(a),c=l?l.match(CL):null;if(c){let d=i.get(s);d||(d=[],i.set(s,d)),d.push({name:a,value:c[1]})}})}_updateSvgIcon(e){if(this._svgNamespace=null,this._svgName=null,this._currentIconFetch.unsubscribe(),e){let[r,i]=this._splitIconName(e);r&&(this._svgNamespace=r),i&&(this._svgName=i),this._currentIconFetch=this._iconRegistry.getNamedSvgIcon(i,r).pipe(it(1)).subscribe(o=>this._setSvgElement(o),o=>{let a=`Error retrieving icon ${r}:${i}! ${o.message}`;this._errorHandler.handleError(new Error(a))})}}static ɵfac=function(r){return new(r||t)};static ɵcmp=(function(){return F({type:t,selectors:[[`mat-icon`]],hostAttrs:[`role`,`img`,1,`mat-icon`,`notranslate`],hostVars:10,hostBindings:function(i,o){i&2&&(Y(`data-mat-icon-type`,o._usingFontIcon()?`font`:`svg`)(`data-mat-icon-name`,o._svgName||o.fontIcon)(`data-mat-icon-namespace`,o._svgNamespace||o.fontSet)(`fontIcon`,o._usingFontIcon()?o.fontIcon:null),Ot(o.color?`mat-`+o.color:``),G(`mat-icon-inline`,o.inline)(`mat-icon-no-color`,o.color!==`primary`&&o.color!==`accent`&&o.color!==`warn`))},inputs:{color:`color`,inline:[2,`inline`,`inline`,I],svgIcon:`svgIcon`,fontSet:`fontSet`,fontIcon:`fontIcon`},exportAs:[`matIcon`],ngContentSelectors:[`*`],decls:1,vars:0,template:function(i,o){i&1&&(Me(),X(0))},styles:[`mat-icon, mat-icon.mat-primary, mat-icon.mat-accent, mat-icon.mat-warn {
  color: var(--%NS%mat-icon-color, inherit);
}

.mat-icon {
  -webkit-user-select: none;
  user-select: none;
  background-repeat: no-repeat;
  display: inline-block;
  fill: currentColor;
  height: 24px;
  width: 24px;
  overflow: hidden;
}
.mat-icon.mat-icon-inline {
  font-size: inherit;
  height: inherit;
  line-height: inherit;
  width: inherit;
}
.mat-icon.mat-ligature-font[fontIcon]::before {
  content: attr(fontIcon);
}

[dir=rtl] .mat-icon-rtl-mirror {
  transform: scale(-1, 1);
}

.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-prefix .mat-icon,
.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-suffix .mat-icon {
  display: block;
}
.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-prefix .mat-icon-button .mat-icon,
.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-suffix .mat-icon-button .mat-icon {
  margin: auto;
}
`],encapsulation:2})})()}return t})();var ev=(()=>{class t{static ɵfac=function(r){return new(r||t)};static ɵmod=R({type:t});static ɵinj=A({imports:[ve]})}return t})();var wL=(()=>{class t{static ɵfac=function(r){return new(r||t)};static ɵcmp=F({type:t,selectors:[[`ng-component`]],hostAttrs:[`cdk-text-field-style-loader`,``],decls:0,vars:0,template:function(r,i){},styles:[`textarea.cdk-textarea-autosize {
  resize: none;
}

textarea.cdk-textarea-autosize-measuring {
  padding: 2px 0 !important;
  box-sizing: content-box !important;
  height: auto !important;
  overflow: hidden !important;
}

textarea.cdk-textarea-autosize-measuring-firefox {
  padding: 2px 0 !important;
  box-sizing: content-box !important;
  height: 0 !important;
}

@keyframes cdk-text-field-autofill-start { /*!*/ }
@keyframes cdk-text-field-autofill-end { /*!*/ }
.cdk-text-field-autofill-monitored:-webkit-autofill {
  animation: cdk-text-field-autofill-start 0s 1ms;
}

.cdk-text-field-autofill-monitored:not(:-webkit-autofill) {
  animation: cdk-text-field-autofill-end 0s 1ms;
}
`],encapsulation:2})}return t})();var xL={passive:!0};var ik=(()=>{class t{_platform=u(xe);_ngZone=u(T);_renderer=u(bt).createRenderer(null,null);_styleLoader=u(Ze);_monitoredElements=new Map;monitor(e){if(!this._platform.isBrowser)return ct;this._styleLoader.load(wL);let r=gn(e),i=this._monitoredElements.get(r);if(i)return i.subject;let o=new _,a=`cdk-text-field-autofilled`,s=c=>{c.animationName===`cdk-text-field-autofill-start`&&!r.classList.contains(a)?(r.classList.add(a),this._ngZone.run(()=>o.next({target:c.target,isAutofilled:!0}))):c.animationName===`cdk-text-field-autofill-end`&&r.classList.contains(a)&&(r.classList.remove(a),this._ngZone.run(()=>o.next({target:c.target,isAutofilled:!1})))},l=this._ngZone.runOutsideAngular(()=>(r.classList.add(`cdk-text-field-autofill-monitored`),this._renderer.listen(r,`animationstart`,s,xL)));return this._monitoredElements.set(r,{subject:o,unlisten:l}),o}stopMonitoring(e){let r=gn(e),i=this._monitoredElements.get(r);i&&(i.unlisten(),i.subject.complete(),r.classList.remove(`cdk-text-field-autofill-monitored`),r.classList.remove(`cdk-text-field-autofilled`),this._monitoredElements.delete(r))}ngOnDestroy(){this._monitoredElements.forEach((e,r)=>this.stopMonitoring(r))}static ɵfac=function(r){return new(r||t)};static ɵprov=S({token:t,factory:t.ɵfac})}return t})();var ok=(()=>{class t{static ɵfac=function(r){return new(r||t)};static ɵmod=R({type:t});static ɵinj=A({})}return t})();var DL=[`button`,`checkbox`,`file`,`hidden`,`image`,`radio`,`range`,`reset`,`submit`];var SL=new g(`MAT_INPUT_CONFIG`);var voe=(()=>{class t{_elementRef=u(N);_platform=u(xe);ngControl=u(pn,{optional:!0,self:!0});_autofillMonitor=u(ik);_ngZone=u(T);_formField=u(Bo,{optional:!0});_renderer=u(ke);_uid=u(Fe).getId(`mat-input-`);_previousNativeValue;_inputValueAccessor;_signalBasedValueAccessor;_previousPlaceholder=null;_errorStateTracker;_config=u(SL,{optional:!0});_cleanupIosKeyup;_cleanupWebkitWheel;_isServer=!1;_isNativeSelect=!1;_isTextarea=!1;_isInFormField=!1;focused=!1;stateChanges=new _;controlType=`mat-input`;autofilled=!1;get disabled(){return this._disabled}set disabled(e){this._disabled=ri(e),this.focused&&(this.focused=!1,this.stateChanges.next())}_disabled=!1;get id(){return this._id}set id(e){this._id=e||this._uid}_id;placeholder;name;get required(){return this._required??this.ngControl?.control?.hasValidator(Xr.required)??!1}set required(e){this._required=ri(e)}_required;get type(){return this._type}set type(e){this._type=e||`text`,this._validateType(),!this._isTextarea&&sy().has(this._type)&&(this._elementRef.nativeElement.type=this._type)}_type=`text`;get errorStateMatcher(){return this._errorStateTracker.matcher}set errorStateMatcher(e){this._errorStateTracker.matcher=e}userAriaDescribedBy;get value(){return this._signalBasedValueAccessor?this._signalBasedValueAccessor.value():this._inputValueAccessor.value}set value(e){e!==this.value&&(this._signalBasedValueAccessor?this._signalBasedValueAccessor.value.set(e):this._inputValueAccessor.value=e,this.stateChanges.next())}get readonly(){return this._readonly}set readonly(e){this._readonly=ri(e)}_readonly=!1;disabledInteractive;get errorState(){return this._errorStateTracker.errorState}set errorState(e){this._errorStateTracker.errorState=e}_neverEmptyInputTypes=[`date`,`datetime`,`datetime-local`,`month`,`time`,`week`].filter(e=>sy().has(e));constructor(){let e=u(Ha,{optional:!0}),r=u(Ua,{optional:!0}),i=u(zm),o=u(Xm,{optional:!0,self:!0}),a=u(Jm,{optional:!0,self:!0}),s=this._elementRef.nativeElement,l=s.nodeName.toLowerCase();o?Ht(o.value)?this._signalBasedValueAccessor=o:this._inputValueAccessor=o:this._inputValueAccessor=s,this._previousNativeValue=this.value,this.id=this.id,this._platform.IOS&&this._ngZone.runOutsideAngular(()=>{this._cleanupIosKeyup=this._renderer.listen(s,`keyup`,this._iOSKeyupListener)}),this._errorStateTracker=new Ja(i,a||this.ngControl,r,e,this.stateChanges),this._isServer=!this._platform.isBrowser,this._isNativeSelect=l===`select`,this._isTextarea=l===`textarea`,this._isInFormField=!!this._formField,this.disabledInteractive=this._config?.disabledInteractive||!1,this._isNativeSelect&&(this.controlType=s.multiple?`mat-native-select-multiple`:`mat-native-select`),this._signalBasedValueAccessor&&mn(()=>{this._signalBasedValueAccessor.value(),this.stateChanges.next()})}ngAfterViewInit(){this._platform.isBrowser&&this._autofillMonitor.monitor(this._elementRef.nativeElement).subscribe(e=>{this.autofilled=e.isAutofilled,this.stateChanges.next()})}ngOnChanges(){this.stateChanges.next()}ngOnDestroy(){this.stateChanges.complete(),this._platform.isBrowser&&this._autofillMonitor.stopMonitoring(this._elementRef.nativeElement),this._cleanupIosKeyup?.(),this._cleanupWebkitWheel?.()}ngDoCheck(){this.ngControl&&(this.updateErrorState(),this.ngControl.disabled!==null&&this.ngControl.disabled!==this.disabled&&(this.disabled=this.ngControl.disabled,this.stateChanges.next())),this._dirtyCheckNativeValue(),this._dirtyCheckPlaceholder()}focus(e){this._elementRef.nativeElement.focus(e)}updateErrorState(){this._errorStateTracker.updateErrorState()}_focusChanged(e){if(e!==this.focused){if(!this._isNativeSelect&&e&&this.disabled&&this.disabledInteractive){let r=this._elementRef.nativeElement;r.type===`number`?(r.type=`text`,r.setSelectionRange(0,0),r.type=`number`):r.setSelectionRange(0,0)}this.focused=e,this.stateChanges.next()}}_onInput(){}_dirtyCheckNativeValue(){let e=this._elementRef.nativeElement.value;this._previousNativeValue!==e&&(this._previousNativeValue=e,this.stateChanges.next())}_dirtyCheckPlaceholder(){let e=this._getPlaceholder();if(e!==this._previousPlaceholder){let r=this._elementRef.nativeElement;this._previousPlaceholder=e,e?r.setAttribute(`placeholder`,e):r.removeAttribute(`placeholder`)}}_getPlaceholder(){return this.placeholder||null}_validateType(){DL.indexOf(this._type)}_isNeverEmpty(){return this._neverEmptyInputTypes.indexOf(this._type)>-1}_isBadInput(){let e=this._elementRef.nativeElement.validity;return e&&e.badInput}get empty(){return!this._isNeverEmpty()&&!this._elementRef.nativeElement.value&&!this._isBadInput()&&!this.autofilled}get shouldLabelFloat(){if(this._isNativeSelect){let e=this._elementRef.nativeElement,r=e.options[0];return this.focused||e.multiple||!this.empty||!!(e.selectedIndex>-1&&r&&r.label)}else return this.focused&&!this.disabled||!this.empty}get describedByIds(){return this._elementRef.nativeElement.getAttribute(`aria-describedby`)?.split(` `)||[]}setDescribedByIds(e){let r=this._elementRef.nativeElement;e.length?r.setAttribute(`aria-describedby`,e.join(` `)):r.removeAttribute(`aria-describedby`)}onContainerClick(){this.focused||this.focus()}_isInlineSelect(){let e=this._elementRef.nativeElement;return this._isNativeSelect&&(e.multiple||e.size>1)}_iOSKeyupListener=e=>{let r=e.target;!r.value&&r.selectionStart===0&&r.selectionEnd===0&&(r.setSelectionRange(1,1),r.setSelectionRange(0,0))};_getReadonlyAttribute(){return this._isNativeSelect?null:this.readonly||this.disabled&&this.disabledInteractive?`true`:null}static ɵfac=function(r){return new(r||t)};static ɵdir=w({type:t,selectors:[[`input`,`matInput`,``],[`textarea`,`matInput`,``],[`select`,`matNativeControl`,``],[`input`,`matNativeControl`,``],[`textarea`,`matNativeControl`,``]],hostAttrs:[1,`mat-mdc-input-element`],hostVars:21,hostBindings:function(r,i){r&1&&Q(`focus`,function(){return i._focusChanged(!0)})(`blur`,function(){return i._focusChanged(!1)})(`input`,function(){return i._onInput()}),r&2&&(yt(`id`,i.id)(`disabled`,i.disabled&&!i.disabledInteractive)(`required`,i.required),Y(`name`,i.name||null)(`readonly`,i._getReadonlyAttribute())(`aria-disabled`,i.disabled&&i.disabledInteractive?`true`:null)(`aria-invalid`,i.empty&&i.required?null:i.errorState)(`aria-required`,i.required)(`id`,i.id),G(`mat-input-server`,i._isServer)(`mat-mdc-form-field-textarea-control`,i._isInFormField&&i._isTextarea)(`mat-mdc-form-field-input-control`,i._isInFormField)(`mat-mdc-input-disabled-interactive`,i.disabledInteractive)(`mdc-text-field__input`,i._isInFormField)(`mat-mdc-native-select-inline`,i._isInlineSelect()))},inputs:{disabled:`disabled`,id:`id`,placeholder:`placeholder`,name:`name`,required:`required`,type:`type`,errorStateMatcher:`errorStateMatcher`,userAriaDescribedBy:[0,`aria-describedby`,`userAriaDescribedBy`],value:`value`,readonly:`readonly`,disabledInteractive:[2,`disabledInteractive`,`disabledInteractive`,I]},exportAs:[`matInput`],features:[ye([{provide:is,useExisting:t}]),Se]})}return t})();var tv=(()=>{class t{static ɵfac=function(r){return new(r||t)};static ɵmod=R({type:t});static ɵinj=A({imports:[Bi,Bi,ok,ve]})}return t})();var mc=class{_multiple;_emitChanges;compareWith;_selection=new Set;_deselectedToEmit=[];_selectedToEmit=[];_selected=null;get selected(){return this._selected||(this._selected=Array.from(this._selection.values())),this._selected}changed=new _;bulk={select:n=>this._select(n),deselect:n=>this._deselect(n),setSelection:n=>this._setSelection(n)};constructor(n=!1,e,r=!0,i){this._multiple=n,this._emitChanges=r,this.compareWith=i,e&&e.length&&(n?e.forEach(o=>this._markSelected(o)):this._markSelected(e[0]),this._selectedToEmit.length=0)}select(...n){return this._select(n)}deselect(...n){return this._deselect(n)}setSelection(...n){return this._setSelection(n)}toggle(n){return this.isSelected(n)?this.deselect(n):this.select(n)}clear(n=!0){this._unmarkAll();let e=this._hasQueuedChanges();return n&&this._emitChangeEvent(),e}isSelected(n){return this._selection.has(this._getConcreteValue(n))}isEmpty(){return this._selection.size===0}hasValue(){return!this.isEmpty()}sort(n){this._multiple&&this.selected&&this._selected.sort(n)}isMultipleSelection(){return this._multiple}_select(n){this._verifyValueAssignment(n),n.forEach(r=>this._markSelected(r));let e=this._hasQueuedChanges();return this._emitChangeEvent(),e}_deselect(n){this._verifyValueAssignment(n),n.forEach(r=>this._unmarkSelected(r));let e=this._hasQueuedChanges();return this._emitChangeEvent(),e}_setSelection(n){this._verifyValueAssignment(n);let e=this.selected,r=new Set(n.map(o=>this._getConcreteValue(o)));n.forEach(o=>this._markSelected(o)),e.filter(o=>!r.has(this._getConcreteValue(o,r))).forEach(o=>this._unmarkSelected(o));let i=this._hasQueuedChanges();return this._emitChangeEvent(),i}_emitChangeEvent(){this._selected=null,(this._selectedToEmit.length||this._deselectedToEmit.length)&&(this.changed.next({source:this,added:this._selectedToEmit,removed:this._deselectedToEmit}),this._deselectedToEmit=[],this._selectedToEmit=[])}_markSelected(n){n=this._getConcreteValue(n),this.isSelected(n)||(this._multiple||this._unmarkAll(),this.isSelected(n)||this._selection.add(n),this._emitChanges&&this._selectedToEmit.push(n))}_unmarkSelected(n){n=this._getConcreteValue(n),this.isSelected(n)&&(this._selection.delete(n),this._emitChanges&&this._deselectedToEmit.push(n))}_unmarkAll(){this.isEmpty()||this._selection.forEach(n=>this._unmarkSelected(n))}_verifyValueAssignment(n){n.length>1&&this._multiple}_hasQueuedChanges(){return!!(this._deselectedToEmit.length||this._selectedToEmit.length)}_getConcreteValue(n,e){if(this.compareWith){e=e??this._selection;for(let r of e)if(this.compareWith(n,r))return r;return n}else return n}};var nv=(()=>{class t{_listeners=[];notify(e,r){for(let i of this._listeners)i(e,r)}listen(e){return this._listeners.push(e),()=>{this._listeners=this._listeners.filter(r=>e!==r)}}ngOnDestroy(){this._listeners=[]}static ɵfac=function(r){return new(r||t)};static ɵprov=S({token:t,factory:t.ɵfac})}return t})();var lf=class{applyChanges(n,e,r,i,o){n.forEachOperation((a,s,l)=>{let c,d;if(a.previousIndex==null){let m=r(a,s,l);c=e.createEmbeddedView(m.templateRef,m.context,m.index),d=Xn.INSERTED}else l==null?(e.remove(s),d=Xn.REMOVED):(c=e.get(s),e.move(c,l),d=Xn.MOVED);o&&o({context:c?.context,operation:d,record:a})})}detach(){}};var EL=new g(`mat-select-scroll-strategy`,{providedIn:`root`,factory:()=>{let t=u(B);return()=>ai(t)}});var kL=new g(`MAT_SELECT_CONFIG`);var ML=new g(`MatSelectTrigger`);var rv=class{source;value;constructor(n,e){this.source=n,this.value=e}};var ak=(()=>{class t{_viewportRuler=u(Dr);_changeDetectorRef=u(Ce);_elementRef=u(N);_dir=u(lt,{optional:!0});_idGenerator=u(Fe);_renderer=u(ke);_parentFormField=u(Bo,{optional:!0});ngControl=u(pn,{self:!0,optional:!0});_liveAnnouncer=u(Yl);_defaultOptions=u(kL,{optional:!0});_animationsDisabled=ze();_popoverLocation;_initialized=new _;_cleanupDetach;options;optionGroups;customTrigger;_positions=[{originX:`start`,originY:`bottom`,overlayX:`start`,overlayY:`top`},{originX:`end`,originY:`bottom`,overlayX:`end`,overlayY:`top`},{originX:`start`,originY:`top`,overlayX:`start`,overlayY:`bottom`,panelClass:`mat-mdc-select-panel-above`},{originX:`end`,originY:`top`,overlayX:`end`,overlayY:`bottom`,panelClass:`mat-mdc-select-panel-above`}];_scrollOptionIntoView(e){let r=this.options.toArray()[e];if(r){let i=this.panel.nativeElement,o=XS(e,this.options,this.optionGroups),a=r._getHostElement();e===0&&o===1?i.scrollTop=0:i.scrollTop=JS(a.offsetTop,a.offsetHeight,i.scrollTop,i.offsetHeight)}}_positioningSettled(){this._scrollOptionIntoView(this._keyManager.activeItemIndex||0)}_getChangeEvent(e){return new rv(this,e)}_scrollStrategyFactory=u(EL);_panelOpen=!1;_compareWith=(e,r)=>e===r;_uid=this._idGenerator.getId(`mat-select-`);_triggerAriaLabelledBy=null;_previousControl;_destroy=new _;_errorStateTracker;stateChanges=new _;disableAutomaticLabeling=!0;userAriaDescribedBy;_selectionModel;_keyManager;_preferredOverlayOrigin;_overlayWidth;_onChange=()=>{};_onTouched=()=>{};_valueId=this._idGenerator.getId(`mat-select-value-`);_scrollStrategy;_overlayPanelClass=this._defaultOptions?.overlayPanelClass||``;get focused(){return this._focused||this._panelOpen}_focused=!1;controlType=`mat-select`;trigger;panel;_overlayDir;panelClass;disabled=!1;get disableRipple(){return this._disableRipple()}set disableRipple(e){this._disableRipple.set(e)}_disableRipple=L(!1);tabIndex=0;get hideSingleSelectionIndicator(){return this._hideSingleSelectionIndicator}set hideSingleSelectionIndicator(e){this._hideSingleSelectionIndicator=e,this._syncParentProperties()}_hideSingleSelectionIndicator=this._defaultOptions?.hideSingleSelectionIndicator??!1;get placeholder(){return this._placeholder}set placeholder(e){this._placeholder=e,this.stateChanges.next()}_placeholder;get required(){return this._required??this.ngControl?.control?.hasValidator(Xr.required)??!1}set required(e){this._required=e,this.stateChanges.next()}_required;get multiple(){return this._multiple}set multiple(e){this._selectionModel,this._multiple=e}_multiple=!1;disableOptionCentering=this._defaultOptions?.disableOptionCentering??!1;get compareWith(){return this._compareWith}set compareWith(e){this._compareWith=e,this._selectionModel&&this._initializeSelection()}get value(){return this._value}set value(e){this._assignValue(e)&&this._onChange(e)}_value;ariaLabel=``;ariaLabelledby;get errorStateMatcher(){return this._errorStateTracker.matcher}set errorStateMatcher(e){this._errorStateTracker.matcher=e}typeaheadDebounceInterval;sortComparator;get id(){return this._id}set id(e){this._id=e||this._uid,this.stateChanges.next()}_id;get errorState(){return this._errorStateTracker.errorState}set errorState(e){this._errorStateTracker.errorState=e}panelWidth=this._defaultOptions&&typeof this._defaultOptions.panelWidth<`u`?this._defaultOptions.panelWidth:`auto`;canSelectNullableOptions=this._defaultOptions?.canSelectNullableOptions??!1;optionSelectionChanges=zn(()=>{let e=this.options;return e?e.changes.pipe(_t(e),Ct(()=>Dt(...e.map(r=>r.onSelectionChange)))):this._initialized.pipe(Ct(()=>this.optionSelectionChanges))});openedChange=new k;_openedStream=this.openedChange.pipe(Ee(e=>e),oe(()=>{}));_closedStream=this.openedChange.pipe(Ee(e=>!e),oe(()=>{}));selectionChange=new k;valueChange=new k;constructor(){let e=u(zm),r=u(Ha,{optional:!0}),i=u(Ua,{optional:!0}),o=u(new Gt(`tabindex`),{optional:!0}),a=u(ac,{optional:!0}),s=u(Jm,{optional:!0,self:!0});this.ngControl&&(this.ngControl.valueAccessor=this),this._defaultOptions?.typeaheadDebounceInterval!=null&&(this.typeaheadDebounceInterval=this._defaultOptions.typeaheadDebounceInterval),this._errorStateTracker=new Ja(e,s||this.ngControl,i,r,this.stateChanges),this._scrollStrategy=this._scrollStrategyFactory(),this.tabIndex=o==null?0:parseInt(o)||0,this._popoverLocation=a?.usePopover===!1?null:`inline`,this.id=this.id}ngOnInit(){this._selectionModel=new mc(this.multiple),this.stateChanges.next(),this._viewportRuler.change().pipe(De(this._destroy)).subscribe(()=>{this.panelOpen&&(this._overlayWidth=this._getOverlayWidth(this._preferredOverlayOrigin),this._changeDetectorRef.detectChanges())})}ngAfterContentInit(){this._initialized.next(),this._initialized.complete(),this._initKeyManager(),this._selectionModel.changed.pipe(De(this._destroy)).subscribe(e=>{e.added.forEach(r=>r.select()),e.removed.forEach(r=>r.deselect())}),this.options.changes.pipe(_t(null),De(this._destroy)).subscribe(()=>{this._resetOptions(),this._initializeSelection()})}ngDoCheck(){let e=this._getTriggerAriaLabelledby(),r=this.ngControl;if(e!==this._triggerAriaLabelledBy){let i=this._elementRef.nativeElement;this._triggerAriaLabelledBy=e,e?i.setAttribute(`aria-labelledby`,e):i.removeAttribute(`aria-labelledby`)}r&&(this._previousControl!==r.control&&(this._previousControl!==void 0&&r.disabled!==null&&r.disabled!==this.disabled&&(this.disabled=r.disabled),this._previousControl=r.control),this.updateErrorState())}ngOnChanges(e){(e.disabled||e.userAriaDescribedBy)&&this.stateChanges.next(),e.typeaheadDebounceInterval&&this._keyManager&&this._keyManager.withTypeAhead(this.typeaheadDebounceInterval),e.panelClass&&this.panelClass instanceof Set&&(this.panelClass=Array.from(this.panelClass))}ngOnDestroy(){this._cleanupDetach?.(),this._keyManager?.destroy(),this._destroy.next(),this._destroy.complete(),this.stateChanges.complete()}toggle(){this.panelOpen?this.close():this.open()}open(){this._canOpen()&&(this._parentFormField&&(this._preferredOverlayOrigin=this._parentFormField.getConnectedOverlayOrigin()),this._cleanupDetach?.(),this._overlayWidth=this._getOverlayWidth(this._preferredOverlayOrigin),this._panelOpen=!0,this._overlayDir.positionChange.pipe(it(1)).subscribe(()=>{this._changeDetectorRef.detectChanges(),this._positioningSettled()}),this._overlayDir.attachOverlay(),this._keyManager.withHorizontalOrientation(null),this._highlightCorrectOption(),this._changeDetectorRef.markForCheck(),this.stateChanges.next(),Promise.resolve().then(()=>this.openedChange.emit(!0)))}close(){this._panelOpen&&(this._panelOpen=!1,this._exitAndDetach(),this._keyManager.withHorizontalOrientation(this._isRtl()?`rtl`:`ltr`),this._changeDetectorRef.markForCheck(),this._onTouched(),this.stateChanges.next(),Promise.resolve().then(()=>this.openedChange.emit(!1)))}_exitAndDetach(){if(this._animationsDisabled||!this.panel){this._detachOverlay();return}this._cleanupDetach?.(),this._cleanupDetach=()=>{r(),clearTimeout(i),this._cleanupDetach=void 0};let e=this.panel.nativeElement,r=this._renderer.listen(e,`animationend`,o=>{o.animationName===`_mat-select-exit`&&(this._cleanupDetach?.(),this._detachOverlay())}),i=setTimeout(()=>{this._cleanupDetach?.(),this._detachOverlay()},200);e.classList.add(`mat-select-panel-exit`)}_detachOverlay(){this._overlayDir.detachOverlay(),this._changeDetectorRef.markForCheck()}writeValue(e){this._assignValue(e)}registerOnChange(e){this._onChange=e}registerOnTouched(e){this._onTouched=e}setDisabledState(e){this.disabled=e,this._changeDetectorRef.markForCheck(),this.stateChanges.next()}get panelOpen(){return this._panelOpen}get selected(){return this.multiple?this._selectionModel?.selected||[]:this._selectionModel?.selected[0]}get triggerValue(){if(this.empty)return``;if(this._multiple){let e=this._selectionModel.selected.map(r=>r.viewValue);return this._isRtl()&&e.reverse(),e.join(`, `)}return this._selectionModel.selected[0].viewValue}updateErrorState(){this._errorStateTracker.updateErrorState()}_isRtl(){return this._dir?this._dir.value===`rtl`:!1}_handleKeydown(e){this.disabled||(this.panelOpen?this._handleOpenKeydown(e):this._handleClosedKeydown(e))}_handleClosedKeydown(e){let r=e.keyCode,i=r===40||r===38||r===37||r===39,o=r===13||r===32,a=this._keyManager;if(!a.isTyping()&&o&&!tt(e)||(this.multiple||e.altKey)&&i)e.preventDefault(),this.open();else if(!this.multiple){let s=this.selected;a.onKeydown(e);let l=this.selected;l&&s!==l&&this._liveAnnouncer.announce(l.viewValue,1e4)}}_handleOpenKeydown(e){let r=this._keyManager,i=e.keyCode,o=i===40||i===38,a=r.isTyping();if(o&&e.altKey)e.preventDefault(),this.close();else if(!a&&(i===13||i===32)&&r.activeItem&&!tt(e))e.preventDefault(),r.activeItem._selectViaInteraction();else if(!a&&this._multiple&&i===65&&e.ctrlKey){e.preventDefault();let s=this.options.some(l=>!l.disabled&&!l.selected);this.options.forEach(l=>{l.disabled||(s?l.select():l.deselect())})}else{let s=r.activeItemIndex;r.onKeydown(e),this._multiple&&o&&e.shiftKey&&r.activeItem&&r.activeItemIndex!==s&&r.activeItem._selectViaInteraction()}}_handleOverlayKeydown(e){e.keyCode===27&&!tt(e)&&(e.preventDefault(),this.close())}_onFocus(){this.disabled||(this._focused=!0,this.stateChanges.next())}_onBlur(){this._focused=!1,this._keyManager?.cancelTypeahead(),!this.disabled&&!this.panelOpen&&(this._onTouched(),this._changeDetectorRef.markForCheck(),this.stateChanges.next())}get empty(){return!this._selectionModel||this._selectionModel.isEmpty()}_initializeSelection(){Promise.resolve().then(()=>{this.ngControl&&(this._value=this.ngControl.value),this._setSelectionByValue(this._value),this.stateChanges.next()})}_setSelectionByValue(e){if(this.options.forEach(r=>r.setInactiveStyles()),this._selectionModel.clear(),this.multiple&&e)e.forEach(r=>this._selectOptionByValue(r)),this._sortValues();else{let r=this._selectOptionByValue(e);r?this._keyManager.updateActiveItem(r):this.panelOpen||this._keyManager.updateActiveItem(-1)}this._changeDetectorRef.markForCheck()}_selectOptionByValue(e){let r=this.options.find(i=>{if(this._selectionModel.isSelected(i))return!1;try{return(i.value!=null||this.canSelectNullableOptions)&&this._compareWith(i.value,e)}catch(o){return!1}});return r&&this._selectionModel.select(r),r}_assignValue(e){return e!==this._value||this._multiple&&Array.isArray(e)?(this.options&&this._setSelectionByValue(e),this._value=e,!0):!1}_skipPredicate=e=>this.panelOpen?!1:e.disabled;_getOverlayWidth(e){return this.panelWidth===`auto`?(e instanceof rs?e.elementRef:e||this._elementRef).nativeElement.getBoundingClientRect().width:this.panelWidth===null?``:this.panelWidth}_syncParentProperties(){if(this.options)for(let e of this.options)e._changeDetectorRef.markForCheck()}_initKeyManager(){this._keyManager=new Ql(this.options).withTypeAhead(this.typeaheadDebounceInterval).withVerticalOrientation().withHorizontalOrientation(this._isRtl()?`rtl`:`ltr`).withHomeAndEnd().withPageUpDown().withAllowedModifierKeys([`shiftKey`]).skipPredicate(this._skipPredicate),this._keyManager.tabOut.subscribe(()=>{this.panelOpen&&(!this.multiple&&this._keyManager.activeItem&&this._keyManager.activeItem._selectViaInteraction(),this.focus(),this.close())}),this._keyManager.change.subscribe(()=>{this._panelOpen&&this.panel?this._scrollOptionIntoView(this._keyManager.activeItemIndex||0):!this._panelOpen&&!this.multiple&&this._keyManager.activeItem&&this._keyManager.activeItem._selectViaInteraction()})}_resetOptions(){let e=Dt(this.options.changes,this._destroy);this.optionSelectionChanges.pipe(De(e)).subscribe(r=>{this._onSelect(r.source,r.isUserInput),r.isUserInput&&!this.multiple&&this._panelOpen&&(this.close(),this.focus())}),Dt(...this.options.map(r=>r._stateChanges)).pipe(De(e)).subscribe(()=>{this._changeDetectorRef.detectChanges(),this.stateChanges.next()})}_onSelect(e,r){let i=this._selectionModel.isSelected(e);!this.canSelectNullableOptions&&e.value==null&&!this._multiple?(e.deselect(),this._selectionModel.clear(),this.value!=null&&this._propagateChanges(e.value)):(i!==e.selected&&(e.selected?this._selectionModel.select(e):this._selectionModel.deselect(e)),r&&this._keyManager.setActiveItem(e),this.multiple&&(this._sortValues(),r&&this.focus())),i!==this._selectionModel.isSelected(e)&&this._propagateChanges(),this.stateChanges.next()}_sortValues(){if(this.multiple){let e=this.options.toArray();this._selectionModel.sort((r,i)=>this.sortComparator?this.sortComparator(r,i,e):e.indexOf(r)-e.indexOf(i)),this.stateChanges.next()}}_propagateChanges(e){let r;this.multiple?r=this.selected.map(i=>i.value):r=this.selected?this.selected.value:e,this._value=r,this.valueChange.emit(r),this._onChange(r),this.selectionChange.emit(this._getChangeEvent(r)),this._changeDetectorRef.markForCheck()}_highlightCorrectOption(){if(this._keyManager)if(this.empty){let e=-1;for(let r=0;r<this.options.length;r++)if(!this.options.get(r).disabled){e=r;break}this._keyManager.setActiveItem(e)}else this._keyManager.setActiveItem(this._selectionModel.selected[0])}_canOpen(){return!this._panelOpen&&!this.disabled&&this.options?.length>0&&!!this._overlayDir}focus(e){this._elementRef.nativeElement.focus(e)}_getPanelAriaLabelledby(){if(this.ariaLabel)return null;let e=this._parentFormField?.getLabelId()||null,r=e?e+` `:``;return this.ariaLabelledby?r+this.ariaLabelledby:e}_getAriaActiveDescendant(){return this.panelOpen&&this._keyManager&&this._keyManager.activeItem?this._keyManager.activeItem.id:null}_getTriggerAriaLabelledby(){if(this.ariaLabel)return null;let e=this._parentFormField?.getLabelId()||``;return this.ariaLabelledby&&(e+=` `+this.ariaLabelledby),e||(e=this._valueId),e}get describedByIds(){return this._elementRef.nativeElement.getAttribute(`aria-describedby`)?.split(` `)||[]}setDescribedByIds(e){let r=this._elementRef.nativeElement;e.length?r.setAttribute(`aria-describedby`,e.join(` `)):r.removeAttribute(`aria-describedby`)}onContainerClick(e){let r=Pt(e);r&&(r.tagName===`MAT-OPTION`||r.classList.contains(`cdk-overlay-backdrop`)||r.closest(`.mat-mdc-select-panel`))||(this.focus(),this.open())}get shouldLabelFloat(){return this.panelOpen||!this.empty||this.focused&&!!this.placeholder}static ɵfac=function(r){return new(r||t)};static ɵcmp=(function(){let e=[`trigger`],r=[`panel`],i=[[[`mat-select-trigger`]],`*`],o=[`mat-select-trigger`,`*`];function a(m,p){if(m&1&&(C(0,`span`,4),Ne(1),E()),m&2){let f=J();y(),Ft(f.placeholder)}}function s(m,p){m&1&&X(0)}function l(m,p){if(m&1&&(C(0,`span`,11),Ne(1),E()),m&2){let f=J(2);y(),Ft(f.triggerValue)}}function c(m,p){if(m&1&&(C(0,`span`,5),le(1,s,1,0)(2,l,2,1,`span`,11),E()),m&2){let f=J();y(),ce(f.customTrigger?1:2)}}function d(m,p){if(m&1){let f=an();C(0,`div`,12,1),Q(`keydown`,function(v){Xe(f);return Je(J()._handleKeydown(v))}),X(2,1),E()}if(m&2){let f=J();Ot(f.panelClass),G(`mat-select-panel-animations-enabled`,!f._animationsDisabled)(`mat-primary`,f._parentFormField?.color===`primary`)(`mat-accent`,f._parentFormField?.color===`accent`)(`mat-warn`,f._parentFormField?.color===`warn`)(`mat-undefined`,!f._parentFormField?.color),Y(`id`,f.id+`-panel`)(`aria-multiselectable`,f.multiple)(`aria-label`,f.ariaLabel||null)(`aria-labelledby`,f._getPanelAriaLabelledby())}}return F({type:t,selectors:[[`mat-select`]],contentQueries:function(p,f,h){if(p&1&&Mt(h,ML,5)(h,Xa,5)(h,_y,5),p&2){let v;H(v=U())&&(f.customTrigger=v.first),H(v=U())&&(f.options=v),H(v=U())&&(f.optionGroups=v)}},viewQuery:function(p,f){if(p&1&&qe(e,5)(r,5)(Zm,5),p&2){let h;H(h=U())&&(f.trigger=h.first),H(h=U())&&(f.panel=h.first),H(h=U())&&(f._overlayDir=h.first)}},hostAttrs:[`role`,`combobox`,`aria-haspopup`,`listbox`,1,`mat-mdc-select`],hostVars:21,hostBindings:function(p,f){p&1&&Q(`keydown`,function(v){return f._handleKeydown(v)})(`focus`,function(){return f._onFocus()})(`blur`,function(){return f._onBlur()}),p&2&&(Y(`id`,f.id)(`tabindex`,f.disabled?-1:f.tabIndex)(`aria-controls`,f.panelOpen?f.id+`-panel`:null)(`aria-expanded`,f.panelOpen)(`aria-label`,f.ariaLabel||null)(`aria-required`,f.required.toString())(`aria-disabled`,f.disabled.toString())(`aria-invalid`,f.errorState)(`aria-activedescendant`,f._getAriaActiveDescendant()),G(`mat-mdc-select-disabled`,f.disabled)(`mat-mdc-select-invalid`,f.errorState)(`mat-mdc-select-required`,f.required)(`mat-mdc-select-empty`,f.empty)(`mat-mdc-select-multiple`,f.multiple)(`mat-select-open`,f.panelOpen))},inputs:{userAriaDescribedBy:[0,`aria-describedby`,`userAriaDescribedBy`],panelClass:`panelClass`,disabled:[2,`disabled`,`disabled`,I],disableRipple:[2,`disableRipple`,`disableRipple`,I],tabIndex:[2,`tabIndex`,`tabIndex`,m=>m==null?0:Wt(m)],hideSingleSelectionIndicator:[2,`hideSingleSelectionIndicator`,`hideSingleSelectionIndicator`,I],placeholder:`placeholder`,required:[2,`required`,`required`,I],multiple:[2,`multiple`,`multiple`,I],disableOptionCentering:[2,`disableOptionCentering`,`disableOptionCentering`,I],compareWith:`compareWith`,value:`value`,ariaLabel:[0,`aria-label`,`ariaLabel`],ariaLabelledby:[0,`aria-labelledby`,`ariaLabelledby`],errorStateMatcher:`errorStateMatcher`,typeaheadDebounceInterval:[2,`typeaheadDebounceInterval`,`typeaheadDebounceInterval`,Wt],sortComparator:`sortComparator`,id:`id`,panelWidth:`panelWidth`,canSelectNullableOptions:[2,`canSelectNullableOptions`,`canSelectNullableOptions`,I]},outputs:{openedChange:`openedChange`,_openedStream:`opened`,_closedStream:`closed`,selectionChange:`selectionChange`,valueChange:`valueChange`},exportAs:[`matSelect`],features:[ye([{provide:is,useExisting:t},{provide:vy,useExisting:t}]),Se],ngContentSelectors:o,decls:11,vars:10,consts:[[`fallbackOverlayOrigin`,`cdkOverlayOrigin`,`trigger`,``],[`panel`,``],[`cdk-overlay-origin`,``,1,`mat-mdc-select-trigger`,3,`click`],[1,`mat-mdc-select-value`],[1,`mat-mdc-select-placeholder`,`mat-mdc-select-min-line`],[1,`mat-mdc-select-value-text`],[1,`mat-mdc-select-arrow-wrapper`],[1,`mat-mdc-select-arrow`],[`viewBox`,`0 0 24 24`,`width`,`24px`,`height`,`24px`,`focusable`,`false`,`aria-hidden`,`true`],[`d`,`M7 10l5 5 5-5z`],[`cdk-connected-overlay`,``,`cdkConnectedOverlayHasBackdrop`,``,`cdkConnectedOverlayBackdropClass`,`cdk-overlay-transparent-backdrop`,3,`detach`,`backdropClick`,`overlayKeydown`,`cdkConnectedOverlayDisableClose`,`cdkConnectedOverlayPanelClass`,`cdkConnectedOverlayScrollStrategy`,`cdkConnectedOverlayOrigin`,`cdkConnectedOverlayPositions`,`cdkConnectedOverlayWidth`,`cdkConnectedOverlayFlexibleDimensions`,`cdkConnectedOverlayUsePopover`],[1,`mat-mdc-select-min-line`],[`role`,`listbox`,`tabindex`,`-1`,1,`mat-mdc-select-panel`,`mdc-menu-surface`,`mdc-menu-surface--open`,3,`keydown`]],template:function(p,f){if(p&1&&(Me(i),C(0,`div`,2,0),Q(`click`,function(){return f.open()}),C(3,`div`,3),le(4,a,2,1,`span`,4)(5,c,3,1,`span`,5),E(),C(6,`div`,6)(7,`div`,7),Et(),C(8,`svg`,8),we(9,`path`,9),E()()()(),wt(10,d,3,16,`ng-template`,10),Q(`detach`,function(){return f.close()})(`backdropClick`,function(){return f.close()})(`overlayKeydown`,function(v){return f._handleOverlayKeydown(v)})),p&2){let h=gr(1);y(3),Y(`id`,f._valueId),y(),ce(f.empty?4:5),y(6),ue(`cdkConnectedOverlayDisableClose`,!0)(`cdkConnectedOverlayPanelClass`,f._overlayPanelClass)(`cdkConnectedOverlayScrollStrategy`,f._scrollStrategy)(`cdkConnectedOverlayOrigin`,f._preferredOverlayOrigin||h)(`cdkConnectedOverlayPositions`,f._positions)(`cdkConnectedOverlayWidth`,f._overlayWidth)(`cdkConnectedOverlayFlexibleDimensions`,!0)(`cdkConnectedOverlayUsePopover`,f._popoverLocation)}},dependencies:[rs,Zm],styles:[`@keyframes _mat-select-enter {
  from {
    opacity: 0;
    transform: scaleY(0.8);
  }
  to {
    opacity: 1;
    transform: none;
  }
}
@keyframes _mat-select-exit {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}
.mat-mdc-select {
  display: inline-block;
  width: 100%;
  outline: none;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  color: var(--%NS%mat-select-enabled-trigger-text-color, var(--%NS%mat-sys-on-surface));
  font-family: var(--%NS%mat-select-trigger-text-font, var(--%NS%mat-sys-body-large-font));
  line-height: var(--%NS%mat-select-trigger-text-line-height, var(--%NS%mat-sys-body-large-line-height));
  font-size: var(--%NS%mat-select-trigger-text-size, var(--%NS%mat-sys-body-large-size));
  font-weight: var(--%NS%mat-select-trigger-text-weight, var(--%NS%mat-sys-body-large-weight));
  letter-spacing: var(--%NS%mat-select-trigger-text-tracking, var(--%NS%mat-sys-body-large-tracking));
}

div.mat-mdc-select-panel {
  box-shadow: var(--%NS%mat-select-container-elevation-shadow, 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12));
}

.mat-mdc-select-disabled {
  color: var(--%NS%mat-select-disabled-trigger-text-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}
.mat-mdc-select-disabled .mat-mdc-select-placeholder {
  color: var(--%NS%mat-select-disabled-trigger-text-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}

.mat-mdc-select-trigger {
  display: inline-flex;
  align-items: center;
  cursor: pointer;
  position: relative;
  box-sizing: border-box;
  width: 100%;
}
.mat-mdc-select-disabled .mat-mdc-select-trigger {
  -webkit-user-select: none;
  user-select: none;
  cursor: default;
}

.mat-mdc-select-value {
  width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.mat-mdc-select-value-text {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.mat-mdc-select-arrow-wrapper {
  height: 24px;
  flex-shrink: 0;
  display: inline-flex;
  align-items: center;
}
.mat-form-field-appearance-fill .mdc-text-field--no-label .mat-mdc-select-arrow-wrapper {
  transform: none;
}

.mat-mdc-form-field .mat-mdc-select.mat-mdc-select-invalid .mat-mdc-select-arrow,
.mat-form-field-invalid:not(.mat-form-field-disabled) .mat-mdc-form-field-infix::after {
  color: var(--%NS%mat-select-invalid-arrow-color, var(--%NS%mat-sys-error));
}

.mat-mdc-select-arrow {
  width: 10px;
  height: 5px;
  position: relative;
  color: var(--%NS%mat-select-enabled-arrow-color, var(--%NS%mat-sys-on-surface-variant));
}
.mat-mdc-form-field.mat-focused .mat-mdc-select-arrow {
  color: var(--%NS%mat-select-focused-arrow-color, var(--%NS%mat-sys-primary));
}
.mat-mdc-form-field .mat-mdc-select.mat-mdc-select-disabled .mat-mdc-select-arrow {
  color: var(--%NS%mat-select-disabled-arrow-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}
.mat-select-open .mat-mdc-select-arrow {
  transform: rotate(180deg);
}
.mat-form-field-animations-enabled .mat-mdc-select-arrow {
  transition: transform 80ms linear;
}
.mat-mdc-select-arrow svg {
  fill: currentColor;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
@media (forced-colors: active) {
  .mat-mdc-select-arrow svg {
    fill: CanvasText;
  }
  .mat-mdc-select-disabled .mat-mdc-select-arrow svg {
    fill: GrayText;
  }
}

div.mat-mdc-select-panel {
  width: 100%;
  max-height: 275px;
  outline: 0;
  overflow: auto;
  padding: 8px 0;
  box-sizing: border-box;
  transform-origin: top center;
  border-radius: 0 0 4px 4px;
  position: relative;
  background-color: var(--%NS%mat-select-panel-background-color, var(--%NS%mat-sys-surface-container));
}
.mat-mdc-select-panel-above div.mat-mdc-select-panel {
  border-radius: 4px 4px 0 0;
  transform-origin: bottom center;
}
@media (forced-colors: active) {
  div.mat-mdc-select-panel {
    outline: solid 1px;
  }
}

.mat-select-panel-animations-enabled {
  animation: _mat-select-enter 120ms cubic-bezier(0, 0, 0.2, 1) forwards;
}
.mat-select-panel-animations-enabled.mat-select-panel-exit {
  animation: _mat-select-exit 100ms linear forwards;
}

.mat-mdc-select-placeholder {
  transition: color 400ms 133.3333333333ms cubic-bezier(0.25, 0.8, 0.25, 1);
  color: var(--%NS%mat-select-placeholder-text-color, var(--%NS%mat-sys-on-surface-variant));
}
.mat-mdc-form-field:not(.mat-form-field-animations-enabled) .mat-mdc-select-placeholder, ._mat-animation-noopable .mat-mdc-select-placeholder {
  transition: none;
}
.mat-form-field-hide-placeholder .mat-mdc-select-placeholder {
  color: transparent;
  -webkit-text-fill-color: transparent;
  transition: none;
  display: block;
}

.mat-mdc-form-field-type-mat-select:not(.mat-form-field-disabled) .mat-mdc-text-field-wrapper {
  cursor: pointer;
}
.mat-mdc-form-field-type-mat-select.mat-form-field-appearance-fill .mat-mdc-floating-label {
  max-width: calc(100% - 18px);
}
.mat-mdc-form-field-type-mat-select.mat-form-field-appearance-fill .mdc-floating-label--float-above {
  max-width: calc(100% / 0.75 - 24px);
}
.mat-mdc-form-field-type-mat-select.mat-form-field-appearance-outline .mdc-notched-outline__notch {
  max-width: calc(100% - 60px);
}
.mat-mdc-form-field-type-mat-select.mat-form-field-appearance-outline .mdc-text-field--label-floating .mdc-notched-outline__notch {
  max-width: calc(100% - 24px);
}

.mat-mdc-select-min-line:empty::before {
  content: " ";
  white-space: pre;
  width: 1px;
  display: inline-block;
  visibility: hidden;
}

.mat-form-field-appearance-fill .mat-mdc-select-arrow-wrapper {
  transform: var(--%NS%mat-select-arrow-transform, translateY(-8px));
}
`],encapsulation:2})})()}return t})();var fc=(()=>{class t{static ɵfac=function(r){return new(r||t)};static ɵmod=R({type:t});static ɵinj=A({imports:[bn,wy,ve,oi,Bi,wy]})}return t})();var sk=(()=>{class t{static ɵfac=function(r){return new(r||t)};static ɵmod=R({type:t});static ɵinj=A({imports:[Ro,bn,ve,oi]})}return t})();var IL=(()=>{class t{changes=new _;itemsPerPageLabel=`Items per page:`;nextPageLabel=`Next page`;previousPageLabel=`Previous page`;firstPageLabel=`First page`;lastPageLabel=`Last page`;getRangeLabel=(e,r,i)=>{if(i==0||r==0)return`0 of ${i}`;i=Math.max(i,0);let o=e*r,a=o<i?Math.min(o+r,i):o+r;return`${o+1} \u2013 ${a} of ${i}`};static ɵfac=function(r){return new(r||t)};static ɵprov=S({token:t,factory:t.ɵfac})}return t})();var NL=50;var TL=new g(`MAT_PAGINATOR_DEFAULT_OPTIONS`);var AL=(()=>{class t{_intl=u(IL);_changeDetectorRef=u(Ce);_formFieldAppearance;_pageSizeLabelId=u(Fe).getId(`mat-paginator-page-size-label-`);_intlChanges;_isInitialized=!1;_initializedStream=new xn(1);color;get pageIndex(){return this._pageIndex}set pageIndex(e){this._pageIndex=Math.max(e||0,0),this._changeDetectorRef.markForCheck()}_pageIndex=0;get length(){return this._length}set length(e){this._length=e||0,this._changeDetectorRef.markForCheck()}_length=0;get pageSize(){return this._pageSize}set pageSize(e){this._pageSize=Math.max(e||0,0),this._updateDisplayedPageSizeOptions()}_pageSize;get pageSizeOptions(){return this._pageSizeOptions}set pageSizeOptions(e){this._pageSizeOptions=(e||[]).map(r=>Wt(r,0)),this._updateDisplayedPageSizeOptions()}_pageSizeOptions=[];hidePageSize=!1;showFirstLastButtons=!1;selectConfig={};disabled=!1;page=new k;_displayedPageSizeOptions;initialized=this._initializedStream;constructor(){let e=this._intl,r=u(TL,{optional:!0});if(this._intlChanges=e.changes.subscribe(()=>this._changeDetectorRef.markForCheck()),r){let{pageSize:i,pageSizeOptions:o,hidePageSize:a,showFirstLastButtons:s}=r;i!=null&&(this._pageSize=i),o!=null&&(this._pageSizeOptions=o),a!=null&&(this.hidePageSize=a),s!=null&&(this.showFirstLastButtons=s)}this._formFieldAppearance=r?.formFieldAppearance||`outline`}ngOnInit(){this._isInitialized=!0,this._updateDisplayedPageSizeOptions(),this._initializedStream.next()}ngOnDestroy(){this._initializedStream.complete(),this._intlChanges.unsubscribe()}nextPage(){this.hasNextPage()&&this._navigate(this.pageIndex+1)}previousPage(){this.hasPreviousPage()&&this._navigate(this.pageIndex-1)}firstPage(){this.hasPreviousPage()&&this._navigate(0)}lastPage(){this.hasNextPage()&&this._navigate(this.getNumberOfPages()-1)}hasPreviousPage(){return this.pageIndex>=1&&this.pageSize!=0}hasNextPage(){let e=this.getNumberOfPages()-1;return this.pageIndex<e&&this.pageSize!=0}getNumberOfPages(){return this.pageSize?Math.ceil(this.length/this.pageSize):0}_changePageSize(e){let r=this.pageIndex*this.pageSize,i=this.pageIndex;this.pageIndex=Math.floor(r/e)||0,this.pageSize=e,this._emitPageEvent(i)}_nextButtonsDisabled(){return this.disabled||!this.hasNextPage()}_previousButtonsDisabled(){return this.disabled||!this.hasPreviousPage()}_updateDisplayedPageSizeOptions(){this._isInitialized&&(this.pageSize||(this._pageSize=this.pageSizeOptions.length!=0?this.pageSizeOptions[0]:NL),this._displayedPageSizeOptions=this.pageSizeOptions.slice(),this._displayedPageSizeOptions.indexOf(this.pageSize)===-1&&this._displayedPageSizeOptions.push(this.pageSize),this._displayedPageSizeOptions.sort((e,r)=>e-r),this._changeDetectorRef.markForCheck())}_emitPageEvent(e){this.page.emit({previousPageIndex:e,pageIndex:this.pageIndex,pageSize:this.pageSize,length:this.length})}_navigate(e){let r=this.pageIndex;e!==r&&(this.pageIndex=e,this._emitPageEvent(r))}_buttonClicked(e,r){r||this._navigate(e)}static ɵfac=function(r){return new(r||t)};static ɵcmp=(function(){function e(l,c){if(l&1&&(C(0,`mat-option`,17),Ne(1),E()),l&2){let d=c.$implicit;ue(`value`,d),y(),vt(` `,d,` `)}}function r(l,c){if(l&1){let d=an();C(0,`mat-form-field`,14)(1,`mat-select`,16,0),Q(`selectionChange`,function(p){Xe(d);return Je(J(2)._changePageSize(p.value))}),Eo(3,e,2,2,`mat-option`,17,Xg),E(),C(5,`div`,18),Q(`click`,function(){Xe(d);return Je(gr(2).open())}),E()()}if(l&2){let d=J(2);ue(`appearance`,d._formFieldAppearance)(`color`,d.color),y(),ue(`value`,d.pageSize)(`disabled`,d.disabled),ju(`aria-labelledby`,d._pageSizeLabelId),ue(`panelClass`,d.selectConfig.panelClass||``)(`disableOptionCentering`,d.selectConfig.disableOptionCentering),y(2),ko(d._displayedPageSizeOptions)}}function i(l,c){if(l&1&&(C(0,`div`,15),Ne(1),E()),l&2){let d=J(2);y(),Ft(d.pageSize)}}function o(l,c){if(l&1&&(C(0,`div`,3)(1,`div`,13),Ne(2),E(),le(3,r,6,7,`mat-form-field`,14),le(4,i,2,1,`div`,15),E()),l&2){let d=J();y(),Y(`id`,d._pageSizeLabelId),y(),vt(` `,d._intl.itemsPerPageLabel,` `),y(),ce(d._displayedPageSizeOptions.length>1?3:-1),y(),ce(d._displayedPageSizeOptions.length<=1?4:-1)}}function a(l,c){if(l&1){let d=an();C(0,`button`,19),Q(`click`,function(){Xe(d);let p=J();return Je(p._buttonClicked(0,p._previousButtonsDisabled()))}),Et(),C(1,`svg`,8),we(2,`path`,20),E()()}if(l&2){let d=J();ue(`matTooltip`,d._intl.firstPageLabel)(`matTooltipDisabled`,d._previousButtonsDisabled())(`disabled`,d._previousButtonsDisabled())(`tabindex`,d._previousButtonsDisabled()?-1:null),Y(`aria-label`,d._intl.firstPageLabel)}}function s(l,c){if(l&1){let d=an();C(0,`button`,21),Q(`click`,function(){Xe(d);let p=J();return Je(p._buttonClicked(p.getNumberOfPages()-1,p._nextButtonsDisabled()))}),Et(),C(1,`svg`,8),we(2,`path`,22),E()()}if(l&2){let d=J();ue(`matTooltip`,d._intl.lastPageLabel)(`matTooltipDisabled`,d._nextButtonsDisabled())(`disabled`,d._nextButtonsDisabled())(`tabindex`,d._nextButtonsDisabled()?-1:null),Y(`aria-label`,d._intl.lastPageLabel)}}return F({type:t,selectors:[[`mat-paginator`]],hostAttrs:[`role`,`group`,1,`mat-mdc-paginator`],inputs:{color:`color`,pageIndex:[2,`pageIndex`,`pageIndex`,Wt],length:[2,`length`,`length`,Wt],pageSize:[2,`pageSize`,`pageSize`,Wt],pageSizeOptions:`pageSizeOptions`,hidePageSize:[2,`hidePageSize`,`hidePageSize`,I],showFirstLastButtons:[2,`showFirstLastButtons`,`showFirstLastButtons`,I],selectConfig:`selectConfig`,disabled:[2,`disabled`,`disabled`,I]},outputs:{page:`page`},exportAs:[`matPaginator`],decls:14,vars:14,consts:[[`selectRef`,``],[1,`mat-mdc-paginator-outer-container`],[1,`mat-mdc-paginator-container`],[1,`mat-mdc-paginator-page-size`],[1,`mat-mdc-paginator-range-actions`],[`aria-atomic`,`true`,`aria-live`,`polite`,`role`,`status`,1,`mat-mdc-paginator-range-label`],[`matIconButton`,``,`type`,`button`,`matTooltipPosition`,`above`,`disabledInteractive`,``,1,`mat-mdc-paginator-navigation-first`,3,`matTooltip`,`matTooltipDisabled`,`disabled`,`tabindex`],[`matIconButton`,``,`type`,`button`,`matTooltipPosition`,`above`,`disabledInteractive`,``,1,`mat-mdc-paginator-navigation-previous`,3,`click`,`matTooltip`,`matTooltipDisabled`,`disabled`,`tabindex`],[`viewBox`,`0 0 24 24`,`focusable`,`false`,`aria-hidden`,`true`,1,`mat-mdc-paginator-icon`],[`d`,`M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z`],[`matIconButton`,``,`type`,`button`,`matTooltipPosition`,`above`,`disabledInteractive`,``,1,`mat-mdc-paginator-navigation-next`,3,`click`,`matTooltip`,`matTooltipDisabled`,`disabled`,`tabindex`],[`d`,`M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z`],[`matIconButton`,``,`type`,`button`,`matTooltipPosition`,`above`,`disabledInteractive`,``,1,`mat-mdc-paginator-navigation-last`,3,`matTooltip`,`matTooltipDisabled`,`disabled`,`tabindex`],[`aria-hidden`,`true`,1,`mat-mdc-paginator-page-size-label`],[1,`mat-mdc-paginator-page-size-select`,3,`appearance`,`color`],[1,`mat-mdc-paginator-page-size-value`],[`hideSingleSelectionIndicator`,``,3,`selectionChange`,`value`,`disabled`,`aria-labelledby`,`panelClass`,`disableOptionCentering`],[3,`value`],[1,`mat-mdc-paginator-touch-target`,3,`click`],[`matIconButton`,``,`type`,`button`,`matTooltipPosition`,`above`,`disabledInteractive`,``,1,`mat-mdc-paginator-navigation-first`,3,`click`,`matTooltip`,`matTooltipDisabled`,`disabled`,`tabindex`],[`d`,`M18.41 16.59L13.82 12l4.59-4.59L17 6l-6 6 6 6zM6 6h2v12H6z`],[`matIconButton`,``,`type`,`button`,`matTooltipPosition`,`above`,`disabledInteractive`,``,1,`mat-mdc-paginator-navigation-last`,3,`click`,`matTooltip`,`matTooltipDisabled`,`disabled`,`tabindex`],[`d`,`M5.59 7.41L10.18 12l-4.59 4.59L7 18l6-6-6-6zM16 6h2v12h-2z`]],template:function(c,d){c&1&&(C(0,`div`,1)(1,`div`,2),le(2,o,5,4,`div`,3),C(3,`div`,4)(4,`div`,5),Ne(5),E(),le(6,a,3,5,`button`,6),C(7,`button`,7),Q(`click`,function(){return d._buttonClicked(d.pageIndex-1,d._previousButtonsDisabled())}),Et(),C(8,`svg`,8),we(9,`path`,9),E()(),Hr(),C(10,`button`,10),Q(`click`,function(){return d._buttonClicked(d.pageIndex+1,d._nextButtonsDisabled())}),Et(),C(11,`svg`,8),we(12,`path`,11),E()(),le(13,s,3,5,`button`,12),E()()()),c&2&&(y(2),ce(d.hidePageSize?-1:2),y(3),vt(` `,d._intl.getRangeLabel(d.pageIndex,d.pageSize,d.length),` `),y(),ce(d.showFirstLastButtons?6:-1),y(),ue(`matTooltip`,d._intl.previousPageLabel)(`matTooltipDisabled`,d._previousButtonsDisabled())(`disabled`,d._previousButtonsDisabled())(`tabindex`,d._previousButtonsDisabled()?-1:null),Y(`aria-label`,d._intl.previousPageLabel),y(3),ue(`matTooltip`,d._intl.nextPageLabel)(`matTooltipDisabled`,d._nextButtonsDisabled())(`disabled`,d._nextButtonsDisabled())(`tabindex`,d._nextButtonsDisabled()?-1:null),Y(`aria-label`,d._intl.nextPageLabel),y(3),ce(d.showFirstLastButtons?13:-1))},dependencies:[tf,ak,Xa,Ka,Qm],styles:[`.mat-mdc-paginator {
  display: block;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  color: var(--%NS%mat-paginator-container-text-color, var(--%NS%mat-sys-on-surface));
  background-color: var(--%NS%mat-paginator-container-background-color, var(--%NS%mat-sys-surface));
  font-family: var(--%NS%mat-paginator-container-text-font, var(--%NS%mat-sys-body-small-font));
  line-height: var(--%NS%mat-paginator-container-text-line-height, var(--%NS%mat-sys-body-small-line-height));
  font-size: var(--%NS%mat-paginator-container-text-size, var(--%NS%mat-sys-body-small-size));
  font-weight: var(--%NS%mat-paginator-container-text-weight, var(--%NS%mat-sys-body-small-weight));
  letter-spacing: var(--%NS%mat-paginator-container-text-tracking, var(--%NS%mat-sys-body-small-tracking));
  --%NS%mat-form-field-container-height: var(--%NS%mat-paginator-form-field-container-height, 40px);
  --%NS%mat-form-field-container-vertical-padding: var(--%NS%mat-paginator-form-field-container-vertical-padding, 8px);
}
.mat-mdc-paginator .mat-mdc-select-value {
  font-size: var(--%NS%mat-paginator-select-trigger-text-size, var(--%NS%mat-sys-body-small-size));
}
.mat-mdc-paginator .mat-mdc-form-field-subscript-wrapper {
  display: none;
}
.mat-mdc-paginator .mat-mdc-select {
  line-height: 1.5;
}

.mat-mdc-paginator-outer-container {
  display: flex;
}

.mat-mdc-paginator-container {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding: 0 8px;
  flex-wrap: wrap;
  width: 100%;
  min-height: var(--%NS%mat-paginator-container-size, 56px);
}

.mat-mdc-paginator-page-size {
  display: flex;
  align-items: baseline;
  margin-right: 8px;
}
[dir=rtl] .mat-mdc-paginator-page-size {
  margin-right: 0;
  margin-left: 8px;
}

.mat-mdc-paginator-page-size-label {
  margin: 0 4px;
}

.mat-mdc-paginator-page-size-select {
  margin: 0 4px;
  width: var(--%NS%mat-paginator-page-size-select-width, 84px);
}

.mat-mdc-paginator-range-label {
  margin: 0 32px 0 24px;
}

.mat-mdc-paginator-range-actions {
  display: flex;
  align-items: center;
}

.mat-mdc-paginator-icon {
  display: inline-block;
  width: 28px;
  fill: var(--%NS%mat-paginator-enabled-icon-color, var(--%NS%mat-sys-on-surface-variant));
}
.mat-mdc-icon-button[aria-disabled] .mat-mdc-paginator-icon {
  fill: var(--%NS%mat-paginator-disabled-icon-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}
[dir=rtl] .mat-mdc-paginator-icon {
  transform: rotate(180deg);
}

@media (forced-colors: active) {
  .mat-mdc-icon-button[aria-disabled] .mat-mdc-paginator-icon,
  .mat-mdc-paginator-icon {
    fill: currentColor;
  }
  .mat-mdc-paginator-range-actions .mat-mdc-icon-button {
    outline: solid 1px;
  }
  .mat-mdc-paginator-range-actions .mat-mdc-icon-button[aria-disabled] {
    color: GrayText;
  }
}
.mat-mdc-paginator-touch-target {
  display: var(--%NS%mat-paginator-touch-target-display, block);
  position: absolute;
  top: 50%;
  left: 50%;
  width: var(--%NS%mat-paginator-page-size-select-width, 84px);
  height: var(--%NS%mat-paginator-page-size-select-touch-target-height, 48px);
  background-color: transparent;
  transform: translate(-50%, -50%);
  cursor: pointer;
}
`],encapsulation:2})})()}return t})();var iv=(()=>{class t{static ɵfac=function(r){return new(r||t)};static ɵmod=R({type:t});static ɵinj=A({imports:[ii,fc,sk,AL]})}return t})();var cf=class{source;value;constructor(n,e){this.source=n,this.value=e}};var RL={provide:Jr,useExisting:pt(()=>FL),multi:!0};var lk=new g(`MatRadioGroup`);var OL=new g(`mat-radio-default-options`,{providedIn:`root`,factory:()=>({color:`accent`,disabledInteractive:!1})});var FL=(()=>{class t{_changeDetector=u(Ce);_value=null;_name=u(Fe).getId(`mat-radio-group-`);_selected=null;_isInitialized=!1;_labelPosition=`after`;_disabled=!1;_required=!1;_buttonChanges;_controlValueAccessorChangeFn=()=>{};onTouched=()=>{};change=new k;_radios;color;get name(){return this._name}set name(e){this._name=e,this._updateRadioButtonNames()}get labelPosition(){return this._labelPosition}set labelPosition(e){this._labelPosition=e===`before`?`before`:`after`,this._markRadiosForCheck()}get value(){return this._value}set value(e){this._value!==e&&(this._value=e,this._updateSelectedRadioFromValue(),this._checkSelectedRadioButton())}_checkSelectedRadioButton(){this._selected&&!this._selected.checked&&(this._selected.checked=!0)}get selected(){return this._selected}set selected(e){this._selected=e,this.value=e?e.value:null,this._checkSelectedRadioButton()}get disabled(){return this._disabled}set disabled(e){this._disabled=e,this._markRadiosForCheck()}get required(){return this._required}set required(e){this._required=e,this._markRadiosForCheck()}get disabledInteractive(){return this._disabledInteractive}set disabledInteractive(e){this._disabledInteractive=e,this._markRadiosForCheck()}_disabledInteractive=!1;ngAfterContentInit(){this._isInitialized=!0,this._buttonChanges=this._radios.changes.subscribe(()=>{this.selected&&!this._radios.find(e=>e===this.selected)&&(this._selected=null)})}ngOnDestroy(){this._buttonChanges?.unsubscribe()}_touch(){this.onTouched&&this.onTouched()}_updateRadioButtonNames(){this._radios&&this._radios.forEach(e=>{e.name=this.name,e._markForCheck()})}_updateSelectedRadioFromValue(){let e=this._selected!==null&&this._selected.value===this._value;this._radios&&!e&&(this._selected=null,this._radios.forEach(r=>{r.checked=this.value===r.value,r.checked&&(this._selected=r)}))}_emitChangeEvent(){this._isInitialized&&this.change.emit(new cf(this._selected,this._value))}_markRadiosForCheck(){this._radios&&this._radios.forEach(e=>e._markForCheck())}writeValue(e){this.value=e,this._changeDetector.markForCheck()}registerOnChange(e){this._controlValueAccessorChangeFn=e}registerOnTouched(e){this.onTouched=e}setDisabledState(e){this.disabled=e,this._changeDetector.markForCheck()}static ɵfac=function(r){return new(r||t)};static ɵdir=w({type:t,selectors:[[`mat-radio-group`]],contentQueries:function(r,i,o){if(r&1&&Mt(o,ck,5),r&2){let a;H(a=U())&&(i._radios=a)}},hostAttrs:[`role`,`radiogroup`,1,`mat-mdc-radio-group`],inputs:{color:`color`,name:`name`,labelPosition:`labelPosition`,value:`value`,selected:`selected`,disabled:[2,`disabled`,`disabled`,I],required:[2,`required`,`required`,I],disabledInteractive:[2,`disabledInteractive`,`disabledInteractive`,I]},outputs:{change:`change`},exportAs:[`matRadioGroup`],features:[ye([RL,{provide:lk,useExisting:t}])]})}return t})();var ck=(()=>{class t{_elementRef=u(N);_changeDetector=u(Ce);_focusMonitor=u(Tn);_radioDispatcher=u(nv);_defaultOptions=u(OL,{optional:!0});_ngZone=u(T);_renderer=u(ke);_uniqueId=u(Fe).getId(`mat-radio-`);_cleanupClick;id=this._uniqueId;name;ariaLabel;ariaLabelledby;ariaDescribedby;disableRipple=!1;tabIndex=0;get checked(){return this._checked}set checked(e){this._checked!==e&&(this._checked=e,e&&this.radioGroup&&this.radioGroup.value!==this.value?this.radioGroup.selected=this:!e&&this.radioGroup&&this.radioGroup.value===this.value&&(this.radioGroup.selected=null),e&&this._radioDispatcher.notify(this.id,this.name),this._changeDetector.markForCheck())}get value(){return this._value}set value(e){this._value!==e&&(this._value=e,this.radioGroup!==null&&(this.checked||(this.checked=this.radioGroup.value===e),this.checked&&(this.radioGroup.selected=this)))}get labelPosition(){return this._labelPosition||this.radioGroup&&this.radioGroup.labelPosition||`after`}set labelPosition(e){this._labelPosition=e}_labelPosition;get disabled(){return this._disabled||this.radioGroup!==null&&this.radioGroup.disabled}set disabled(e){this._setDisabled(e)}get required(){return this._required||this.radioGroup&&this.radioGroup.required}set required(e){e!==this._required&&this._changeDetector.markForCheck(),this._required=e}get color(){return this._color||this.radioGroup&&this.radioGroup.color||this._defaultOptions&&this._defaultOptions.color||`accent`}set color(e){this._color=e}_color;get disabledInteractive(){return this._disabledInteractive||this.radioGroup!==null&&this.radioGroup.disabledInteractive}set disabledInteractive(e){this._disabledInteractive=e}_disabledInteractive;change=new k;radioGroup;get inputId(){return`${this.id||this._uniqueId}-input`}_checked=!1;_disabled=!1;_required=!1;_value=null;_removeUniqueSelectionListener=()=>{};_previousTabIndex;_inputElement;_rippleTrigger;_noopAnimations=ze();_injector=u(B);constructor(){u(Ze).load(Rn);let e=u(lk,{optional:!0}),r=u(new Gt(`tabindex`),{optional:!0});this.radioGroup=e,this._disabledInteractive=this._defaultOptions?.disabledInteractive??!1,r&&(this.tabIndex=Wt(r,0))}focus(e,r){r?this._focusMonitor.focusVia(this._inputElement,r,e):this._inputElement.nativeElement.focus(e)}_markForCheck(){this._changeDetector.markForCheck()}ngOnInit(){this.radioGroup&&(this.checked=this.radioGroup.value===this._value,this.checked&&(this.radioGroup.selected=this),this.name=this.radioGroup.name),this._removeUniqueSelectionListener=this._radioDispatcher.listen((e,r)=>{e!==this.id&&r===this.name&&(this.checked=!1)})}ngDoCheck(){this._updateTabIndex()}ngAfterViewInit(){this._updateTabIndex(),this._focusMonitor.monitor(this._elementRef,!0).subscribe(e=>{!e&&this.radioGroup&&this.radioGroup._touch()}),this._ngZone.runOutsideAngular(()=>{this._cleanupClick=this._renderer.listen(this._inputElement.nativeElement,`click`,this._onInputClick)})}ngOnDestroy(){this._cleanupClick?.(),this._focusMonitor.stopMonitoring(this._elementRef),this._removeUniqueSelectionListener()}_emitChangeEvent(){this.change.emit(new cf(this,this._value))}_isRippleDisabled(){return this.disableRipple||this.disabled}_onInputInteraction(e){if(e.stopPropagation(),!this.checked&&!this.disabled){let r=this.radioGroup&&this.value!==this.radioGroup.value;this.checked=!0,this._emitChangeEvent(),this.radioGroup&&(this.radioGroup._controlValueAccessorChangeFn(this.value),r&&this.radioGroup._emitChangeEvent())}}_setDisabled(e){this._disabled!==e&&(this._disabled=e,this._changeDetector.markForCheck())}_onInputClick=e=>{this.disabled&&this.disabledInteractive&&e.preventDefault()};_updateTabIndex(){let e=this.radioGroup,r;if(!e||!e.selected||this.disabled?r=this.tabIndex:r=e.selected===this?this.tabIndex:-1,r!==this._previousTabIndex){let i=this._inputElement?.nativeElement;i&&(i.setAttribute(`tabindex`,r+``),this._previousTabIndex=r,Ge(()=>{queueMicrotask(()=>{e&&e.selected&&e.selected!==this&&document.activeElement===i&&(e.selected?._inputElement.nativeElement.focus(),document.activeElement===i&&this._inputElement.nativeElement.blur())})},{injector:this._injector}))}}static ɵfac=function(r){return new(r||t)};static ɵcmp=(function(){let e=[`input`],r=[`formField`];return F({type:t,selectors:[[`mat-radio-button`]],viewQuery:function(a,s){if(a&1&&qe(e,5)(r,7,N),a&2){let l;H(l=U())&&(s._inputElement=l.first),H(l=U())&&(s._rippleTrigger=l.first)}},hostAttrs:[1,`mat-mdc-radio-button`],hostVars:19,hostBindings:function(a,s){a&1&&Q(`focus`,function(){return s._inputElement.nativeElement.focus()}),a&2&&(Y(`id`,s.id)(`tabindex`,null)(`aria-label`,null)(`aria-labelledby`,null)(`aria-describedby`,null),G(`mat-primary`,s.color===`primary`)(`mat-accent`,s.color===`accent`)(`mat-warn`,s.color===`warn`)(`mat-mdc-radio-checked`,s.checked)(`mat-mdc-radio-disabled`,s.disabled)(`mat-mdc-radio-disabled-interactive`,s.disabledInteractive)(`_mat-animation-noopable`,s._noopAnimations))},inputs:{id:`id`,name:`name`,ariaLabel:[0,`aria-label`,`ariaLabel`],ariaLabelledby:[0,`aria-labelledby`,`ariaLabelledby`],ariaDescribedby:[0,`aria-describedby`,`ariaDescribedby`],disableRipple:[2,`disableRipple`,`disableRipple`,I],tabIndex:[2,`tabIndex`,`tabIndex`,o=>o==null?0:Wt(o)],checked:[2,`checked`,`checked`,I],value:`value`,labelPosition:`labelPosition`,disabled:[2,`disabled`,`disabled`,I],required:[2,`required`,`required`,I],color:`color`,disabledInteractive:[2,`disabledInteractive`,`disabledInteractive`,I]},outputs:{change:`change`},exportAs:[`matRadioButton`],ngContentSelectors:[`*`],decls:13,vars:17,consts:[[`formField`,``],[`input`,``],[`mat-internal-form-field`,``,3,`labelPosition`,`for`],[1,`mdc-radio`],[1,`mat-mdc-radio-touch-target`],[`type`,`radio`,`aria-invalid`,`false`,1,`mdc-radio__native-control`,3,`change`,`id`,`checked`,`disabled`,`required`],[`aria-hidden`,`true`,1,`mdc-radio__background`],[1,`mdc-radio__outer-circle`],[1,`mdc-radio__inner-circle`],[`mat-ripple`,``,`aria-hidden`,`true`,1,`mat-radio-ripple`,`mat-focus-indicator`,3,`matRippleTrigger`,`matRippleDisabled`,`matRippleCentered`],[1,`mat-ripple-element`,`mat-radio-persistent-ripple`],[1,`mat-internal-form-field-label`,`mdc-label`]],template:function(a,s){a&1&&(Me(),C(0,`label`,2,0)(2,`span`,3),we(3,`span`,4),C(4,`input`,5,1),Q(`change`,function(c){return s._onInputInteraction(c)}),E(),C(6,`span`,6),we(7,`span`,7)(8,`span`,8),E(),C(9,`span`,9),we(10,`span`,10),E()(),C(11,`span`,11),X(12),E()()),a&2&&(ue(`labelPosition`,s.labelPosition)(`for`,s.inputId),y(2),G(`mdc-radio--disabled`,s.disabled),y(2),ue(`id`,s.inputId)(`checked`,s.checked)(`disabled`,s.disabled&&!s.disabledInteractive)(`required`,s.required),Y(`name`,s.name)(`value`,s.value)(`aria-label`,s.ariaLabel)(`aria-labelledby`,s.ariaLabelledby)(`aria-describedby`,s.ariaDescribedby)(`aria-disabled`,s.disabled&&s.disabledInteractive?`true`:null),y(5),ue(`matRippleTrigger`,s._rippleTrigger.nativeElement)(`matRippleDisabled`,s._isRippleDisabled())(`matRippleCentered`,!0))},dependencies:[Ya,jm],styles:[`.mat-mdc-radio-button {
  -webkit-tap-highlight-color: transparent;
}
.mat-mdc-radio-button .mdc-radio {
  display: inline-block;
  position: relative;
  flex: 0 0 auto;
  box-sizing: content-box;
  width: 20px;
  height: 20px;
  will-change: opacity, transform, border-color, color;
  padding: calc((var(--%NS%mat-radio-state-layer-size, 40px) - 20px) / 2);
  cursor: pointer;
}
.mat-mdc-radio-button .mdc-radio:hover > .mdc-radio__native-control:not([disabled]):not(:focus) ~ .mdc-radio__background::before {
  opacity: 0.04;
  transform: scale(1);
}
.mat-mdc-radio-button .mdc-radio:hover > .mdc-radio__native-control:not([disabled]) ~ .mdc-radio__background > .mdc-radio__outer-circle {
  border-color: var(--%NS%mat-radio-unselected-hover-icon-color, var(--%NS%mat-sys-on-surface));
}
.mat-mdc-radio-button .mdc-radio:hover > .mdc-radio__native-control:enabled:checked + .mdc-radio__background > .mdc-radio__outer-circle {
  border-color: var(--%NS%mat-radio-selected-hover-icon-color, var(--%NS%mat-sys-primary));
}
.mat-mdc-radio-button .mdc-radio:hover > .mdc-radio__native-control:enabled:checked + .mdc-radio__background > .mdc-radio__inner-circle {
  background-color: var(--%NS%mat-radio-selected-hover-icon-color, var(--%NS%mat-sys-primary, currentColor));
}
.mat-mdc-radio-button .mdc-radio:active > .mdc-radio__native-control:enabled:not(:checked) + .mdc-radio__background > .mdc-radio__outer-circle {
  border-color: var(--%NS%mat-radio-unselected-pressed-icon-color, var(--%NS%mat-sys-on-surface));
}
.mat-mdc-radio-button .mdc-radio:active > .mdc-radio__native-control:enabled:checked + .mdc-radio__background > .mdc-radio__outer-circle {
  border-color: var(--%NS%mat-radio-selected-pressed-icon-color, var(--%NS%mat-sys-primary));
}
.mat-mdc-radio-button .mdc-radio:active > .mdc-radio__native-control:enabled:checked + .mdc-radio__background > .mdc-radio__inner-circle {
  background-color: var(--%NS%mat-radio-selected-pressed-icon-color, var(--%NS%mat-sys-primary, currentColor));
}
.mat-mdc-radio-button .mdc-radio__background {
  display: inline-block;
  position: relative;
  box-sizing: border-box;
  width: 20px;
  height: 20px;
}
.mat-mdc-radio-button .mdc-radio__background::before {
  position: absolute;
  transform: scale(0, 0);
  border-radius: 50%;
  opacity: 0;
  pointer-events: none;
  content: "";
  transition: opacity 90ms cubic-bezier(0.4, 0, 0.6, 1), transform 90ms cubic-bezier(0.4, 0, 0.6, 1);
  width: var(--%NS%mat-radio-state-layer-size, 40px);
  height: var(--%NS%mat-radio-state-layer-size, 40px);
  top: calc(-1 * (var(--%NS%mat-radio-state-layer-size, 40px) - 20px) / 2);
  left: calc(-1 * (var(--%NS%mat-radio-state-layer-size, 40px) - 20px) / 2);
}
.mat-mdc-radio-button .mdc-radio__outer-circle {
  position: absolute;
  top: 0;
  left: 0;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  border-width: 2px;
  border-style: solid;
  border-radius: 50%;
  transition: border-color 90ms cubic-bezier(0.4, 0, 0.6, 1);
}
.mat-mdc-radio-button .mdc-radio__inner-circle {
  position: absolute;
  top: 0;
  left: 0;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  transform: scale(0);
  border-radius: 50%;
  transition: transform 90ms cubic-bezier(0.4, 0, 0.6, 1), background-color 90ms cubic-bezier(0.4, 0, 0.6, 1);
}
@media (forced-colors: active) {
  .mat-mdc-radio-button .mdc-radio__inner-circle {
    background-color: CanvasText !important;
  }
}
.mat-mdc-radio-button .mdc-radio__native-control {
  position: absolute;
  margin: 0;
  padding: 0;
  opacity: 0;
  top: 0;
  right: 0;
  left: 0;
  cursor: inherit;
  z-index: 1;
  width: var(--%NS%mat-radio-state-layer-size, 40px);
  height: var(--%NS%mat-radio-state-layer-size, 40px);
}
.mat-mdc-radio-button .mdc-radio__native-control:checked + .mdc-radio__background, .mat-mdc-radio-button .mdc-radio__native-control:disabled + .mdc-radio__background {
  transition: opacity 90ms cubic-bezier(0, 0, 0.2, 1), transform 90ms cubic-bezier(0, 0, 0.2, 1);
}
.mat-mdc-radio-button .mdc-radio__native-control:checked + .mdc-radio__background > .mdc-radio__outer-circle, .mat-mdc-radio-button .mdc-radio__native-control:disabled + .mdc-radio__background > .mdc-radio__outer-circle {
  transition: border-color 90ms cubic-bezier(0, 0, 0.2, 1);
}
.mat-mdc-radio-button .mdc-radio__native-control:checked + .mdc-radio__background > .mdc-radio__inner-circle, .mat-mdc-radio-button .mdc-radio__native-control:disabled + .mdc-radio__background > .mdc-radio__inner-circle {
  transition: transform 90ms cubic-bezier(0, 0, 0.2, 1), background-color 90ms cubic-bezier(0, 0, 0.2, 1);
}
.mat-mdc-radio-button .mdc-radio__native-control:focus + .mdc-radio__background::before {
  transform: scale(1);
  opacity: 0.12;
  transition: opacity 90ms cubic-bezier(0, 0, 0.2, 1), transform 90ms cubic-bezier(0, 0, 0.2, 1);
}
.mat-mdc-radio-button .mdc-radio__native-control:disabled:not(:checked) + .mdc-radio__background > .mdc-radio__outer-circle {
  border-color: var(--%NS%mat-radio-disabled-unselected-icon-color, var(--%NS%mat-sys-on-surface));
  opacity: var(--%NS%mat-radio-disabled-unselected-icon-opacity, 0.38);
}
.mat-mdc-radio-button .mdc-radio__native-control:disabled + .mdc-radio__background {
  cursor: default;
}
.mat-mdc-radio-button .mdc-radio__native-control:disabled + .mdc-radio__background > .mdc-radio__outer-circle {
  border-color: var(--%NS%mat-radio-disabled-selected-icon-color, var(--%NS%mat-sys-on-surface));
  opacity: var(--%NS%mat-radio-disabled-selected-icon-opacity, 0.38);
}
.mat-mdc-radio-button .mdc-radio__native-control:disabled + .mdc-radio__background > .mdc-radio__inner-circle {
  background-color: var(--%NS%mat-radio-disabled-selected-icon-color, var(--%NS%mat-sys-on-surface, currentColor));
  opacity: var(--%NS%mat-radio-disabled-selected-icon-opacity, 0.38);
}
.mat-mdc-radio-button .mdc-radio__native-control:enabled:not(:checked) + .mdc-radio__background > .mdc-radio__outer-circle {
  border-color: var(--%NS%mat-radio-unselected-icon-color, var(--%NS%mat-sys-on-surface-variant));
}
.mat-mdc-radio-button .mdc-radio__native-control:enabled:checked + .mdc-radio__background > .mdc-radio__outer-circle {
  border-color: var(--%NS%mat-radio-selected-icon-color, var(--%NS%mat-sys-primary));
}
.mat-mdc-radio-button .mdc-radio__native-control:enabled:checked + .mdc-radio__background > .mdc-radio__inner-circle {
  background-color: var(--%NS%mat-radio-selected-icon-color, var(--%NS%mat-sys-primary, currentColor));
}
.mat-mdc-radio-button .mdc-radio__native-control:enabled:focus:checked + .mdc-radio__background > .mdc-radio__outer-circle {
  border-color: var(--%NS%mat-radio-selected-focus-icon-color, var(--%NS%mat-sys-primary));
}
.mat-mdc-radio-button .mdc-radio__native-control:enabled:focus:checked + .mdc-radio__background > .mdc-radio__inner-circle {
  background-color: var(--%NS%mat-radio-selected-focus-icon-color, var(--%NS%mat-sys-primary, currentColor));
}
.mat-mdc-radio-button .mdc-radio__native-control:checked + .mdc-radio__background > .mdc-radio__inner-circle {
  transform: scale(0.5);
  transition: transform 90ms cubic-bezier(0, 0, 0.2, 1), background-color 90ms cubic-bezier(0, 0, 0.2, 1);
}
.mat-mdc-radio-button.mat-mdc-radio-disabled-interactive .mdc-radio--disabled {
  pointer-events: auto;
}
.mat-mdc-radio-button.mat-mdc-radio-disabled-interactive .mdc-radio--disabled .mdc-radio__native-control:not(:checked) + .mdc-radio__background > .mdc-radio__outer-circle {
  border-color: var(--%NS%mat-radio-disabled-unselected-icon-color, var(--%NS%mat-sys-on-surface));
  opacity: var(--%NS%mat-radio-disabled-unselected-icon-opacity, 0.38);
}
.mat-mdc-radio-button.mat-mdc-radio-disabled-interactive .mdc-radio--%NS%disabled:hover .mdc-radio__native-control:checked + .mdc-radio__background > .mdc-radio__outer-circle,
.mat-mdc-radio-button.mat-mdc-radio-disabled-interactive .mdc-radio--disabled .mdc-radio__native-control:checked:focus + .mdc-radio__background > .mdc-radio__outer-circle,
.mat-mdc-radio-button.mat-mdc-radio-disabled-interactive .mdc-radio--disabled .mdc-radio__native-control + .mdc-radio__background > .mdc-radio__outer-circle {
  border-color: var(--%NS%mat-radio-disabled-selected-icon-color, var(--%NS%mat-sys-on-surface));
  opacity: var(--%NS%mat-radio-disabled-selected-icon-opacity, 0.38);
}
.mat-mdc-radio-button.mat-mdc-radio-disabled-interactive .mdc-radio--%NS%disabled:hover .mdc-radio__native-control:checked + .mdc-radio__background > .mdc-radio__inner-circle,
.mat-mdc-radio-button.mat-mdc-radio-disabled-interactive .mdc-radio--disabled .mdc-radio__native-control:checked:focus + .mdc-radio__background > .mdc-radio__inner-circle,
.mat-mdc-radio-button.mat-mdc-radio-disabled-interactive .mdc-radio--disabled .mdc-radio__native-control + .mdc-radio__background > .mdc-radio__inner-circle {
  background-color: var(--%NS%mat-radio-disabled-selected-icon-color, var(--%NS%mat-sys-on-surface, currentColor));
  opacity: var(--%NS%mat-radio-disabled-selected-icon-opacity, 0.38);
}
.mat-mdc-radio-button._mat-animation-noopable .mdc-radio__background::before,
.mat-mdc-radio-button._mat-animation-noopable .mdc-radio__outer-circle,
.mat-mdc-radio-button._mat-animation-noopable .mdc-radio__inner-circle {
  transition: none !important;
}
.mat-mdc-radio-button .mat-internal-form-field-label:empty {
  display: none;
}
.mat-mdc-radio-button .mdc-radio__background::before {
  background-color: var(--%NS%mat-radio-ripple-color, var(--%NS%mat-sys-on-surface));
}
.mat-mdc-radio-button.mat-mdc-radio-checked .mat-ripple-element,
.mat-mdc-radio-button.mat-mdc-radio-checked .mdc-radio__background::before {
  background-color: var(--%NS%mat-radio-checked-ripple-color, var(--%NS%mat-sys-primary));
}
.mat-mdc-radio-button.mat-mdc-radio-disabled-interactive .mdc-radio--disabled .mat-ripple-element,
.mat-mdc-radio-button.mat-mdc-radio-disabled-interactive .mdc-radio--disabled .mdc-radio__background::before {
  background-color: var(--%NS%mat-radio-ripple-color, var(--%NS%mat-sys-on-surface));
}
.mat-mdc-radio-button .mat-internal-form-field {
  color: var(--%NS%mat-radio-label-text-color, var(--%NS%mat-sys-on-surface));
  font-family: var(--%NS%mat-radio-label-text-font, var(--%NS%mat-sys-body-medium-font));
  line-height: var(--%NS%mat-radio-label-text-line-height, var(--%NS%mat-sys-body-medium-line-height));
  font-size: var(--%NS%mat-radio-label-text-size, var(--%NS%mat-sys-body-medium-size));
  letter-spacing: var(--%NS%mat-radio-label-text-tracking, var(--%NS%mat-sys-body-medium-tracking));
  font-weight: var(--%NS%mat-radio-label-text-weight, var(--%NS%mat-sys-body-medium-weight));
  cursor: pointer;
}
.mat-mdc-radio-button .mdc-radio--disabled + .mat-internal-form-field-label {
  color: var(--%NS%mat-radio-disabled-label-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}
.mat-mdc-radio-button .mat-radio-ripple {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  pointer-events: none;
  border-radius: 50%;
}
.mat-mdc-radio-button .mat-radio-ripple > .mat-ripple-element {
  opacity: 0.14;
}
.mat-mdc-radio-button .mat-radio-ripple::before {
  border-radius: 50%;
}
.mat-mdc-radio-button .mdc-radio > .mdc-radio__native-control:focus:enabled:not(:checked) ~ .mdc-radio__background > .mdc-radio__outer-circle {
  border-color: var(--%NS%mat-radio-unselected-focus-icon-color, var(--%NS%mat-sys-on-surface));
}
.mat-mdc-radio-button.cdk-focused .mat-focus-indicator::before {
  content: "";
}

.mat-mdc-radio-disabled {
  cursor: default;
  pointer-events: none;
}
.mat-mdc-radio-disabled.mat-mdc-radio-disabled-interactive {
  pointer-events: auto;
}

.mat-mdc-radio-touch-target {
  position: absolute;
  top: 50%;
  left: 50%;
  height: var(--%NS%mat-radio-touch-target-size, 48px);
  width: var(--%NS%mat-radio-touch-target-size, 48px);
  transform: translate(-50%, -50%);
  display: var(--%NS%mat-radio-touch-target-display, block);
}
[dir=rtl] .mat-mdc-radio-touch-target {
  left: auto;
  right: 50%;
  transform: translate(50%, -50%);
}
`],encapsulation:2})})()}return t})();var ov=(()=>{class t{static ɵfac=function(r){return new(r||t)};static ɵmod=R({type:t});static ɵinj=A({imports:[Za,ck,ve]})}return t})();var PL=Math.pow(2,31)-1;var pc=class{_overlayRef;instance;containerInstance;_afterDismissed=new _;_afterOpened=new _;_onAction=new _;_durationTimeoutId;_dismissedByAction=!1;constructor(n,e){this._overlayRef=e,this.containerInstance=n,n._onExit.subscribe(()=>this._finishDismiss())}dismiss(){this._afterDismissed.closed||this.containerInstance.exit(),clearTimeout(this._durationTimeoutId)}dismissWithAction(){this._onAction.closed||(this._dismissedByAction=!0,this._onAction.next(),this._onAction.complete(),this.dismiss()),clearTimeout(this._durationTimeoutId)}closeWithAction(){this.dismissWithAction()}_dismissAfter(n){this._durationTimeoutId=setTimeout(()=>this.dismiss(),Math.min(n,PL))}_open(){this._afterOpened.closed||(this._afterOpened.next(),this._afterOpened.complete())}_finishDismiss(){this._overlayRef.dispose(),this._onAction.closed||this._onAction.complete(),this._afterDismissed.next({dismissedByAction:this._dismissedByAction}),this._afterDismissed.complete(),this._dismissedByAction=!1}afterDismissed(){return this._afterDismissed}afterOpened(){return this.containerInstance._onEnter}onAction(){return this._onAction}};var dk=new g(`MatSnackBarData`);var ls=class{politeness=`polite`;announcementMessage=``;viewContainerRef;duration=0;panelClass;direction;data=null;horizontalPosition=`center`;verticalPosition=`bottom`};var LL=(()=>{class t{static ɵfac=function(r){return new(r||t)};static ɵdir=w({type:t,selectors:[[``,`matSnackBarLabel`,``]],hostAttrs:[1,`mat-mdc-snack-bar-label`,`mdc-snackbar__label`]})}return t})();var VL=(()=>{class t{static ɵfac=function(r){return new(r||t)};static ɵdir=w({type:t,selectors:[[``,`matSnackBarActions`,``]],hostAttrs:[1,`mat-mdc-snack-bar-actions`,`mdc-snackbar__actions`]})}return t})();var BL=(()=>{class t{static ɵfac=function(r){return new(r||t)};static ɵdir=w({type:t,selectors:[[``,`matSnackBarAction`,``]],hostAttrs:[1,`mat-mdc-snack-bar-action`,`mdc-snackbar__action`]})}return t})();var uk=(()=>{class t{snackBarRef=u(pc);data=u(dk);action(){this.snackBarRef.dismissWithAction()}get hasAction(){return!!this.data.action}static ɵfac=function(r){return new(r||t)};static ɵcmp=(function(){function e(r,i){if(r&1){let o=an();C(0,`div`,1)(1,`button`,2),Q(`click`,function(){Xe(o);return Je(J().action())}),Ne(2),E()()}if(r&2){let o=J();y(2),vt(` `,o.data.action,` `)}}return F({type:t,selectors:[[`simple-snack-bar`]],hostAttrs:[1,`mat-mdc-simple-snack-bar`],exportAs:[`matSnackBar`],decls:3,vars:2,consts:[[`matSnackBarLabel`,``],[`matSnackBarActions`,``],[`matButton`,``,`matSnackBarAction`,``,3,`click`]],template:function(i,o){i&1&&(C(0,`div`,0),Ne(1),E(),le(2,e,3,1,`div`,1)),i&2&&(y(),vt(` `,o.data.message,`
`),y(),ce(o.hasAction?2:-1))},dependencies:[ec,LL,VL,BL],styles:[`.mat-mdc-simple-snack-bar {
  display: flex;
}
.mat-mdc-simple-snack-bar .mat-mdc-snack-bar-label {
  max-height: 50vh;
  overflow: auto;
}
`],encapsulation:2})})()}return t})();var av=`_mat-snack-bar-enter`;var sv=`_mat-snack-bar-exit`;var jL=(()=>{class t extends Pi{_ngZone=u(T);_elementRef=u(N);_changeDetectorRef=u(Ce);_platform=u(xe);_animationsDisabled=ze();snackBarConfig=u(ls);_document=u(z);_trackedModals=new Set;_enterFallback;_exitFallback;_injector=u(B);_announceDelay=150;_announceTimeoutId;_destroyed=!1;_portalOutlet;_onAnnounce=new _;_onExit=new _;_onEnter=new _;_animationState=`void`;_live;_label;_role;_liveElementId=u(Fe).getId(`mat-snack-bar-container-live-`);constructor(){super();let e=this.snackBarConfig;e.politeness===`assertive`&&!e.announcementMessage?this._live=`assertive`:e.politeness===`off`?this._live=`off`:this._live=`polite`,this._platform.FIREFOX&&(this._live===`polite`&&(this._role=`status`),this._live===`assertive`&&(this._role=`alert`))}attachComponentPortal(e){this._assertNotAttached();let r=this._portalOutlet.attachComponentPortal(e);return this._afterPortalAttached(),r}attachTemplatePortal(e){this._assertNotAttached();let r=this._portalOutlet.attachTemplatePortal(e);return this._afterPortalAttached(),r}attachDomPortal=e=>{this._assertNotAttached();let r=this._portalOutlet.attachDomPortal(e);return this._afterPortalAttached(),r};onAnimationEnd(e){e===sv?this._completeExit():e===av&&(clearTimeout(this._enterFallback),this._ngZone.run(()=>{this._onEnter.next(),this._onEnter.complete()}))}enter(){this._destroyed||(this._animationState=`visible`,this._changeDetectorRef.markForCheck(),this._changeDetectorRef.detectChanges(),this._screenReaderAnnounce(),this._animationsDisabled?Ge(()=>{this._ngZone.run(()=>queueMicrotask(()=>this.onAnimationEnd(av)))},{injector:this._injector}):(clearTimeout(this._enterFallback),this._enterFallback=setTimeout(()=>{this._elementRef.nativeElement.classList.add(`mat-snack-bar-fallback-visible`),this.onAnimationEnd(av)},200)))}exit(){return this._destroyed?j(void 0):(this._ngZone.run(()=>{this._animationState=`hidden`,this._changeDetectorRef.markForCheck(),this._elementRef.nativeElement.setAttribute(`mat-exit`,``),clearTimeout(this._announceTimeoutId),this._animationsDisabled?Ge(()=>{this._ngZone.run(()=>queueMicrotask(()=>this.onAnimationEnd(sv)))},{injector:this._injector}):(clearTimeout(this._exitFallback),this._exitFallback=setTimeout(()=>this.onAnimationEnd(sv),200))}),this._onExit)}ngOnDestroy(){this._destroyed=!0,this._clearFromModals(),this._completeExit()}_completeExit(){clearTimeout(this._exitFallback),queueMicrotask(()=>{this._onExit.next(),this._onExit.complete()})}_afterPortalAttached(){let e=this._elementRef.nativeElement,r=this.snackBarConfig.panelClass;r&&(Array.isArray(r)?r.forEach(a=>e.classList.add(a)):e.classList.add(r)),this._exposeToModals();let i=this._label.nativeElement,o=`mdc-snackbar__label`;i.classList.toggle(o,!i.querySelector(`.${o}`))}_exposeToModals(){let e=this._liveElementId,r=this._document.querySelectorAll(`body > .cdk-overlay-container [aria-modal="true"]`);for(let i=0;i<r.length;i++){let o=r[i],a=o.getAttribute(`aria-owns`);this._trackedModals.add(o),a?a.indexOf(e)===-1&&o.setAttribute(`aria-owns`,a+` `+e):o.setAttribute(`aria-owns`,e)}}_clearFromModals(){this._trackedModals.forEach(e=>{let r=e.getAttribute(`aria-owns`);if(r){let i=r.replace(this._liveElementId,``).trim();i.length>0?e.setAttribute(`aria-owns`,i):e.removeAttribute(`aria-owns`)}}),this._trackedModals.clear()}_assertNotAttached(){this._portalOutlet.hasAttached()}_screenReaderAnnounce(){this._announceTimeoutId||this._ngZone.runOutsideAngular(()=>{this._announceTimeoutId=setTimeout(()=>{if(this._destroyed)return;let e=this._elementRef.nativeElement,r=e.querySelector(`[aria-hidden]`),i=e.querySelector(`[aria-live]`);if(r&&i){let o=null;this._platform.isBrowser&&document.activeElement instanceof HTMLElement&&r.contains(document.activeElement)&&(o=document.activeElement),r.removeAttribute(`aria-hidden`),i.appendChild(r),o?.focus(),this._onAnnounce.next(),this._onAnnounce.complete()}},this._announceDelay)})}static ɵfac=function(r){return new(r||t)};static ɵcmp=(function(){let e=[`label`];function r(i,o){}return F({type:t,selectors:[[`mat-snack-bar-container`]],viewQuery:function(o,a){if(o&1&&qe(Jn,7)(e,7),o&2){let s;H(s=U())&&(a._portalOutlet=s.first),H(s=U())&&(a._label=s.first)}},hostAttrs:[1,`mdc-snackbar`,`mat-mdc-snack-bar-container`],hostVars:6,hostBindings:function(o,a){o&1&&Q(`animationend`,function(l){return a.onAnimationEnd(l.animationName)})(`animationcancel`,function(l){return a.onAnimationEnd(l.animationName)}),o&2&&G(`mat-snack-bar-container-enter`,a._animationState===`visible`)(`mat-snack-bar-container-exit`,a._animationState===`hidden`)(`mat-snack-bar-container-animations-enabled`,!a._animationsDisabled)},features:[re],decls:6,vars:3,consts:[[`label`,``],[1,`mdc-snackbar__surface`,`mat-mdc-snackbar-surface`],[1,`mat-mdc-snack-bar-label`],[`aria-hidden`,`true`],[`cdkPortalOutlet`,``]],template:function(o,a){o&1&&(C(0,`div`,1)(1,`div`,2,0)(3,`div`,3),wt(4,r,0,0,`ng-template`,4),E(),we(5,`div`),E()()),o&2&&(y(5),Y(`aria-live`,a._live)(`role`,a._role)(`id`,a._liveElementId))},dependencies:[Jn],styles:[`@keyframes _mat-snack-bar-enter {
  from {
    transform: scale(0.8);
    opacity: 0;
  }
  to {
    transform: scale(1);
    opacity: 1;
  }
}
@keyframes _mat-snack-bar-exit {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}
.mat-mdc-snack-bar-container {
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  margin: 8px;
}
.mat-mdc-snack-bar-handset .mat-mdc-snack-bar-container {
  width: 100vw;
}

.mat-snack-bar-container-animations-enabled {
  opacity: 0;
}
.mat-snack-bar-container-animations-enabled.mat-snack-bar-fallback-visible {
  opacity: 1;
}
.mat-snack-bar-container-animations-enabled.mat-snack-bar-container-enter {
  animation: _mat-snack-bar-enter 150ms cubic-bezier(0, 0, 0.2, 1) forwards;
}
.mat-snack-bar-container-animations-enabled.mat-snack-bar-container-exit {
  animation: _mat-snack-bar-exit 75ms cubic-bezier(0.4, 0, 1, 1) forwards;
}

.mat-mdc-snackbar-surface {
  box-shadow: 0px 3px 5px -1px rgba(0, 0, 0, 0.2), 0px 6px 10px 0px rgba(0, 0, 0, 0.14), 0px 1px 18px 0px rgba(0, 0, 0, 0.12);
  display: flex;
  align-items: center;
  justify-content: flex-start;
  box-sizing: border-box;
  padding-left: 0;
  padding-right: 8px;
}
[dir=rtl] .mat-mdc-snackbar-surface {
  padding-right: 0;
  padding-left: 8px;
}
.mat-mdc-snack-bar-container .mat-mdc-snackbar-surface {
  min-width: 344px;
  max-width: 672px;
}
.mat-mdc-snack-bar-handset .mat-mdc-snackbar-surface {
  width: 100%;
  min-width: 0;
}
@media (forced-colors: active) {
  .mat-mdc-snackbar-surface {
    outline: solid 1px;
  }
}
.mat-mdc-snack-bar-container .mat-mdc-snackbar-surface {
  color: var(--%NS%mat-snack-bar-supporting-text-color, var(--%NS%mat-sys-inverse-on-surface));
  border-radius: var(--%NS%mat-snack-bar-container-shape, var(--%NS%mat-sys-corner-extra-small));
  background-color: var(--%NS%mat-snack-bar-container-color, var(--%NS%mat-sys-inverse-surface));
}

.mdc-snackbar__label {
  width: 100%;
  flex-grow: 1;
  box-sizing: border-box;
  margin: 0;
  padding: 14px 8px 14px 16px;
}
[dir=rtl] .mdc-snackbar__label {
  padding-left: 8px;
  padding-right: 16px;
}
.mat-mdc-snack-bar-container .mdc-snackbar__label {
  font-family: var(--%NS%mat-snack-bar-supporting-text-font, var(--%NS%mat-sys-body-medium-font));
  font-size: var(--%NS%mat-snack-bar-supporting-text-size, var(--%NS%mat-sys-body-medium-size));
  font-weight: var(--%NS%mat-snack-bar-supporting-text-weight, var(--%NS%mat-sys-body-medium-weight));
  line-height: var(--%NS%mat-snack-bar-supporting-text-line-height, var(--%NS%mat-sys-body-medium-line-height));
}

.mat-mdc-snack-bar-actions {
  display: flex;
  flex-shrink: 0;
  align-items: center;
  box-sizing: border-box;
}

.mat-mdc-snack-bar-handset,
.mat-mdc-snack-bar-container,
.mat-mdc-snack-bar-label {
  flex: 1 1 auto;
}

.mat-mdc-snack-bar-container .mat-mdc-button.mat-mdc-snack-bar-action:not(:disabled).mat-unthemed {
  color: var(--%NS%mat-snack-bar-button-color, var(--%NS%mat-sys-inverse-primary));
}
.mat-mdc-snack-bar-container .mat-mdc-button.mat-mdc-snack-bar-action:not(:disabled) {
  --%NS%mat-button-text-state-layer-color: currentColor;
  --%NS%mat-button-text-ripple-color: currentColor;
}
.mat-mdc-snack-bar-container .mat-mdc-button.mat-mdc-snack-bar-action:not(:disabled) .mat-ripple-element {
  opacity: 0.1;
}
`],encapsulation:2,changeDetection:1})})()}return t})();var zL=new g(`mat-snack-bar-default-options`,{providedIn:`root`,factory:()=>new ls});var HL=(()=>{class t{_live=u(Yl);_injector=u(B);_breakpointObserver=u(ql);_parentSnackBar=u(t,{optional:!0,skipSelf:!0});_defaultConfig=u(zL);_animationsDisabled=ze();_snackBarRefAtThisLevel=null;simpleSnackBarComponent=uk;snackBarContainerComponent=jL;handsetCssClass=`mat-mdc-snack-bar-handset`;get _openedSnackBarRef(){let e=this._parentSnackBar;return e?e._openedSnackBarRef:this._snackBarRefAtThisLevel}set _openedSnackBarRef(e){this._parentSnackBar?this._parentSnackBar._openedSnackBarRef=e:this._snackBarRefAtThisLevel=e}openFromComponent(e,r){return this._attach(e,r)}openFromTemplate(e,r){return this._attach(e,r)}open(e,r=``,i){let o=b(b({},this._defaultConfig),i);return o.data={message:e,action:r},o.announcementMessage===e&&(o.announcementMessage=void 0),this.openFromComponent(this.simpleSnackBarComponent,o)}dismiss(){this._openedSnackBarRef&&this._openedSnackBarRef.dismiss()}ngOnDestroy(){this._snackBarRefAtThisLevel&&this._snackBarRefAtThisLevel.dismiss()}_attachSnackBarContainer(e,r){let i=r&&r.viewContainerRef&&r.viewContainerRef.injector,o=B.create({parent:i||this._injector,providers:[{provide:ls,useValue:r}]}),a=new sn(this.snackBarContainerComponent,r.viewContainerRef,o),s=e.attach(a);return s.instance.snackBarConfig=r,s.instance}_attach(e,r){let i=b(b(b({},new ls),this._defaultConfig),r),o=this._createOverlay(i),a=this._attachSnackBarContainer(o,i),s=new pc(a,o);if(e instanceof mt){let l=new Sr(e,null,{$implicit:i.data,snackBarRef:s});s.instance=a.attachTemplatePortal(l)}else{let c=new sn(e,void 0,this._createInjector(i,s));s.instance=a.attachComponentPortal(c).instance}return this._breakpointObserver.observe(BS.HandsetPortrait).pipe(De(o.detachments())).subscribe(l=>{o.overlayElement.classList.toggle(this.handsetCssClass,l.matches)}),i.announcementMessage&&a._onAnnounce.subscribe(()=>{this._live.announce(i.announcementMessage,i.politeness)}),this._animateSnackBar(s,i),this._openedSnackBarRef=s,this._openedSnackBarRef}_animateSnackBar(e,r){e.afterDismissed().subscribe(()=>{this._openedSnackBarRef==e&&(this._openedSnackBarRef=null),r.announcementMessage&&this._live.clear()}),r.duration&&r.duration>0&&e.afterOpened().subscribe(()=>e._dismissAfter(r.duration)),this._openedSnackBarRef?(this._openedSnackBarRef.afterDismissed().subscribe(()=>{e.containerInstance.enter()}),this._openedSnackBarRef.dismiss()):e.containerInstance.enter()}_createOverlay(e){let r=new tr;r.direction=e.direction;let i=kr(this._injector),o=e.direction===`rtl`,a=e.horizontalPosition===`left`||e.horizontalPosition===`start`&&!o||e.horizontalPosition===`end`&&o,s=!a&&e.horizontalPosition!==`center`;return a?i.left(`0`):s?i.right(`0`):i.centerHorizontally(),e.verticalPosition===`top`?i.top(`0`):i.bottom(`0`),r.positionStrategy=i,r.disableAnimations=this._animationsDisabled,nr(this._injector,r)}_createInjector(e,r){let i=e&&e.viewContainerRef&&e.viewContainerRef.injector;return B.create({parent:i||this._injector,providers:[{provide:pc,useValue:r},{provide:dk,useValue:e.data}]})}static ɵfac=function(r){return new(r||t)};static ɵprov=S({token:t,factory:t.ɵfac})}return t})();var lv=(()=>{class t{static ɵfac=function(r){return new(r||t)};static ɵmod=R({type:t});static ɵinj=A({providers:[HL],imports:[bn,er,ii,uk,ve]})}return t})();var rr=new g(`CDK_TABLE`);var uf=(()=>{class t{template=u(mt);static ɵfac=function(r){return new(r||t)};static ɵdir=w({type:t,selectors:[[``,`cdkCellDef`,``]]})}return t})();var mf=(()=>{class t{template=u(mt);static ɵfac=function(r){return new(r||t)};static ɵdir=w({type:t,selectors:[[``,`cdkHeaderCellDef`,``]]})}return t})();var ff=(()=>{class t{template=u(mt);static ɵfac=function(r){return new(r||t)};static ɵdir=w({type:t,selectors:[[``,`cdkFooterCellDef`,``]]})}return t})();var ci=(()=>{class t{_table=u(rr,{optional:!0});_hasStickyChanged=!1;get name(){return this._name}set name(e){this._setNameInput(e)}_name;get sticky(){return this._sticky}set sticky(e){e!==this._sticky&&(this._sticky=e,this._hasStickyChanged=!0)}_sticky=!1;get stickyEnd(){return this._stickyEnd}set stickyEnd(e){e!==this._stickyEnd&&(this._stickyEnd=e,this._hasStickyChanged=!0)}_stickyEnd=!1;cell;headerCell;footerCell;cssClassFriendlyName;_columnCssClassName;hasStickyChanged(){let e=this._hasStickyChanged;return this.resetStickyChanged(),e}resetStickyChanged(){this._hasStickyChanged=!1}_updateColumnCssClassName(){this._columnCssClassName=[`cdk-column-${this.cssClassFriendlyName}`]}_setNameInput(e){e&&(this._name=e,this.cssClassFriendlyName=e.replace(/[^a-z0-9_-]/gi,`-`),this._updateColumnCssClassName())}static ɵfac=function(r){return new(r||t)};static ɵdir=w({type:t,selectors:[[``,`cdkColumnDef`,``]],contentQueries:function(r,i,o){if(r&1&&Mt(o,uf,5)(o,mf,5)(o,ff,5),r&2){let a;H(a=U())&&(i.cell=a.first),H(a=U())&&(i.headerCell=a.first),H(a=U())&&(i.footerCell=a.first)}},inputs:{name:[0,`cdkColumnDef`,`name`],sticky:[2,`sticky`,`sticky`,I],stickyEnd:[2,`stickyEnd`,`stickyEnd`,I]}})}return t})();var gc=class{constructor(n,e){e.nativeElement.classList.add(...n._columnCssClassName)}};var hk=(()=>{class t extends gc{constructor(){super(u(ci),u(N))}static ɵfac=function(r){return new(r||t)};static ɵdir=w({type:t,selectors:[[`cdk-header-cell`],[`th`,`cdk-header-cell`,``]],hostAttrs:[`role`,`columnheader`,1,`cdk-header-cell`],features:[re]})}return t})();var gk=(()=>{class t extends gc{constructor(){let e=u(ci),r=u(N);super(e,r);let i=e._table?._getCellRole();i&&r.nativeElement.setAttribute(`role`,i)}static ɵfac=function(r){return new(r||t)};static ɵdir=w({type:t,selectors:[[`cdk-footer-cell`],[`td`,`cdk-footer-cell`,``]],hostAttrs:[1,`cdk-footer-cell`],features:[re]})}return t})();var bk=(()=>{class t extends gc{constructor(){let e=u(ci),r=u(N);super(e,r);let i=e._table?._getCellRole();i&&r.nativeElement.setAttribute(`role`,i)}static ɵfac=function(r){return new(r||t)};static ɵdir=w({type:t,selectors:[[`cdk-cell`],[`td`,`cdk-cell`,``]],hostAttrs:[1,`cdk-cell`],features:[re]})}return t})();var dv=(()=>{class t{template=u(mt);_differs=u(Oa);columns;_columnsDiffer;ngOnChanges(e){if(!this._columnsDiffer){let r=e.columns&&e.columns.currentValue||[];this._columnsDiffer=this._differs.find(r).create(),this._columnsDiffer.diff(r)}}getColumnsDiff(){return this._columnsDiffer.diff(this.columns)}extractCellTemplate(e){return this instanceof bc?e.headerCell.template:this instanceof yc?e.footerCell.template:e.cell.template}static ɵfac=function(r){return new(r||t)};static ɵdir=w({type:t,features:[Se]})}return t})();var bc=(()=>{class t extends dv{_table=u(rr,{optional:!0});_hasStickyChanged=!1;get sticky(){return this._sticky}set sticky(e){e!==this._sticky&&(this._sticky=e,this._hasStickyChanged=!0)}_sticky=!1;ngOnChanges(e){super.ngOnChanges(e)}hasStickyChanged(){let e=this._hasStickyChanged;return this.resetStickyChanged(),e}resetStickyChanged(){this._hasStickyChanged=!1}static ɵfac=(()=>{let e;return function(i){return(e||(e=Ae(t)))(i||t)}})();static ɵdir=w({type:t,selectors:[[``,`cdkHeaderRowDef`,``]],inputs:{columns:[0,`cdkHeaderRowDef`,`columns`],sticky:[2,`cdkHeaderRowDefSticky`,`sticky`,I]},features:[re,Se]})}return t})();var yc=(()=>{class t extends dv{_table=u(rr,{optional:!0});_hasStickyChanged=!1;get sticky(){return this._sticky}set sticky(e){e!==this._sticky&&(this._sticky=e,this._hasStickyChanged=!0)}_sticky=!1;ngOnChanges(e){super.ngOnChanges(e)}hasStickyChanged(){let e=this._hasStickyChanged;return this.resetStickyChanged(),e}resetStickyChanged(){this._hasStickyChanged=!1}static ɵfac=(()=>{let e;return function(i){return(e||(e=Ae(t)))(i||t)}})();static ɵdir=w({type:t,selectors:[[``,`cdkFooterRowDef`,``]],inputs:{columns:[0,`cdkFooterRowDef`,`columns`],sticky:[2,`cdkFooterRowDefSticky`,`sticky`,I]},features:[re,Se]})}return t})();var pf=(()=>{class t extends dv{_table=u(rr,{optional:!0});when;static ɵfac=(()=>{let e;return function(i){return(e||(e=Ae(t)))(i||t)}})();static ɵdir=w({type:t,selectors:[[``,`cdkRowDef`,``]],inputs:{columns:[0,`cdkRowDefColumns`,`columns`],when:[0,`cdkRowDefWhen`,`when`]},features:[re]})}return t})();var li=(()=>{class t{_viewContainer=u(et);cells;context;static mostRecentCellOutlet=null;constructor(){t.mostRecentCellOutlet=this}ngOnDestroy(){t.mostRecentCellOutlet===this&&(t.mostRecentCellOutlet=null)}static ɵfac=function(r){return new(r||t)};static ɵdir=w({type:t,selectors:[[``,`cdkCellOutlet`,``]]})}return t})();var uv=(()=>{class t{static ɵfac=function(r){return new(r||t)};static ɵcmp=F({type:t,selectors:[[`cdk-header-row`],[`tr`,`cdk-header-row`,``]],hostAttrs:[`role`,`row`,1,`cdk-header-row`],decls:1,vars:0,consts:[[`cdkCellOutlet`,``]],template:function(r,i){r&1&&kt(0,0)},dependencies:[li],encapsulation:2,changeDetection:1})}return t})();var mv=(()=>{class t{static ɵfac=function(r){return new(r||t)};static ɵcmp=F({type:t,selectors:[[`cdk-footer-row`],[`tr`,`cdk-footer-row`,``]],hostAttrs:[`role`,`row`,1,`cdk-footer-row`],decls:1,vars:0,consts:[[`cdkCellOutlet`,``]],template:function(r,i){r&1&&kt(0,0)},dependencies:[li],encapsulation:2,changeDetection:1})}return t})();var fv=(()=>{class t{static ɵfac=function(r){return new(r||t)};static ɵcmp=F({type:t,selectors:[[`cdk-row`],[`tr`,`cdk-row`,``]],hostAttrs:[`role`,`row`,1,`cdk-row`],decls:1,vars:0,consts:[[`cdkCellOutlet`,``]],template:function(r,i){r&1&&kt(0,0)},dependencies:[li],encapsulation:2,changeDetection:1})}return t})();var yk=(()=>{class t{templateRef=u(mt);_contentClassNames=[`cdk-no-data-row`,`cdk-row`];_cellClassNames=[`cdk-cell`,`cdk-no-data-cell`];_cellSelector=`td, cdk-cell, [cdk-cell], .cdk-cell`;static ɵfac=function(r){return new(r||t)};static ɵdir=w({type:t,selectors:[[`ng-template`,`cdkNoDataRow`,``]]})}return t})();var mk=[`top`,`bottom`,`left`,`right`];var cv=class{_isNativeHtmlTable;_stickCellCss;_isBrowser;_needsPositionStickyOnElement;direction;_positionListener;_tableInjector;_elemSizeCache=new WeakMap;_resizeObserver=globalThis?.ResizeObserver?new globalThis.ResizeObserver(n=>this._updateCachedSizes(n)):null;_updatedStickyColumnsParamsToReplay=[];_stickyColumnsReplayTimeout=null;_cachedCellWidths=[];_borderCellCss;_destroyed=!1;constructor(n,e,r=!0,i=!0,o,a,s){this._isNativeHtmlTable=n,this._stickCellCss=e,this._isBrowser=r,this._needsPositionStickyOnElement=i,this.direction=o,this._positionListener=a,this._tableInjector=s,this._borderCellCss={top:`${e}-border-elem-top`,bottom:`${e}-border-elem-bottom`,left:`${e}-border-elem-left`,right:`${e}-border-elem-right`}}clearStickyPositioning(n,e){(e.includes(`left`)||e.includes(`right`))&&this._removeFromStickyColumnReplayQueue(n);let r=[];for(let i of n)i.nodeType===i.ELEMENT_NODE&&r.push(i,...Array.from(i.children));Ge({write:()=>{for(let i of r)this._removeStickyStyle(i,e)}},{injector:this._tableInjector})}updateStickyColumns(n,e,r,i=!0,o=!0){if(!n.length||!this._isBrowser||!(e.some(M=>M)||r.some(M=>M))){this._positionListener?.stickyColumnsUpdated({sizes:[]}),this._positionListener?.stickyEndColumnsUpdated({sizes:[]});return}let a=n[0],s=a.children.length,l=this.direction===`rtl`,c=l?`right`:`left`,d=l?`left`:`right`,m=e.lastIndexOf(!0),p=r.indexOf(!0),f,h,v;o&&this._updateStickyColumnReplayQueue({rows:[...n],stickyStartStates:[...e],stickyEndStates:[...r]}),Ge({earlyRead:()=>{f=this._getCellWidths(a,i),h=this._getStickyStartColumnPositions(f,e),v=this._getStickyEndColumnPositions(f,r)},write:()=>{for(let M of n)for(let V=0;V<s;V++){let O=M.children[V];e[V]&&this._addStickyStyle(O,c,h[V],V===m),r[V]&&this._addStickyStyle(O,d,v[V],V===p)}this._positionListener&&f.some(M=>!!M)&&(this._positionListener.stickyColumnsUpdated({sizes:m===-1?[]:f.slice(0,m+1).map((M,V)=>e[V]?M:null)}),this._positionListener.stickyEndColumnsUpdated({sizes:p===-1?[]:f.slice(p).map((M,V)=>r[V+p]?M:null).reverse()}))}},{injector:this._tableInjector})}stickRows(n,e,r){if(!this._isBrowser)return;let i=r===`bottom`?n.slice().reverse():n,o=r===`bottom`?e.slice().reverse():e,a=[],s=[],l=[];Ge({earlyRead:()=>{for(let c=0,d=0;c<i.length;c++){if(!o[c])continue;a[c]=d;let m=i[c];l[c]=this._isNativeHtmlTable?Array.from(m.children):[m];let p=this._retrieveElementSize(m).height;d+=p,s[c]=p}},write:()=>{let c=o.lastIndexOf(!0);for(let d=0;d<i.length;d++){if(!o[d])continue;let m=a[d],p=d===c;for(let f of l[d])this._addStickyStyle(f,r,m,p)}r===`top`?this._positionListener?.stickyHeaderRowsUpdated({sizes:s,offsets:a,elements:l}):this._positionListener?.stickyFooterRowsUpdated({sizes:s,offsets:a,elements:l})}},{injector:this._tableInjector})}updateStickyFooterContainer(n,e){this._isNativeHtmlTable&&Ge({write:()=>{let r=n.querySelector(`tfoot`);r&&(e.some(i=>!i)?this._removeStickyStyle(r,[`bottom`]):this._addStickyStyle(r,`bottom`,0,!1))}},{injector:this._tableInjector})}destroy(){this._stickyColumnsReplayTimeout&&clearTimeout(this._stickyColumnsReplayTimeout),this._resizeObserver?.disconnect(),this._destroyed=!0}_removeStickyStyle(n,e){if(!n.classList.contains(this._stickCellCss))return;for(let i of e)n.style[i]=``,n.classList.remove(this._borderCellCss[i]);mk.some(i=>e.indexOf(i)===-1&&n.style[i])?n.style.zIndex=this._getCalculatedZIndex(n):(n.style.zIndex=``,this._needsPositionStickyOnElement&&(n.style.position=``),n.classList.remove(this._stickCellCss))}_addStickyStyle(n,e,r,i){n.classList.add(this._stickCellCss),i&&n.classList.add(this._borderCellCss[e]),n.style[e]=`${r}px`,n.style.zIndex=this._getCalculatedZIndex(n),this._needsPositionStickyOnElement&&(n.style.cssText+=`position: -webkit-sticky; position: sticky; `)}_getCalculatedZIndex(n){let e={top:100,bottom:10,left:1,right:1},r=0;for(let i of mk)n.style[i]&&(r+=e[i]);return r?`${r}`:``}_getCellWidths(n,e=!0){if(!e&&this._cachedCellWidths.length)return this._cachedCellWidths;let r=[],i=n.children;for(let o=0;o<i.length;o++){let a=i[o];r.push(this._retrieveElementSize(a).width)}return this._cachedCellWidths=r,r}_getStickyStartColumnPositions(n,e){let r=[],i=0;for(let o=0;o<n.length;o++)e[o]&&(r[o]=i,i+=n[o]);return r}_getStickyEndColumnPositions(n,e){let r=[],i=0;for(let o=n.length;o>0;o--)e[o]&&(r[o]=i,i+=n[o]);return r}_retrieveElementSize(n){let e=this._elemSizeCache.get(n);if(e)return e;let r=n.getBoundingClientRect(),i={width:r.width,height:r.height};return this._resizeObserver&&(this._elemSizeCache.set(n,i),this._resizeObserver.observe(n,{box:`border-box`})),i}_updateStickyColumnReplayQueue(n){this._removeFromStickyColumnReplayQueue(n.rows),this._stickyColumnsReplayTimeout||this._updatedStickyColumnsParamsToReplay.push(n)}_removeFromStickyColumnReplayQueue(n){let e=new Set(n);for(let r of this._updatedStickyColumnsParamsToReplay)r.rows=r.rows.filter(i=>!e.has(i));this._updatedStickyColumnsParamsToReplay=this._updatedStickyColumnsParamsToReplay.filter(r=>!!r.rows.length)}_updateCachedSizes(n){let e=!1;for(let r of n){let i=r.borderBoxSize?.length?{width:r.borderBoxSize[0].inlineSize,height:r.borderBoxSize[0].blockSize}:{width:r.contentRect.width,height:r.contentRect.height};i.width!==this._elemSizeCache.get(r.target)?.width&&UL(r.target)&&(e=!0),this._elemSizeCache.set(r.target,i)}e&&this._updatedStickyColumnsParamsToReplay.length&&(this._stickyColumnsReplayTimeout&&clearTimeout(this._stickyColumnsReplayTimeout),this._stickyColumnsReplayTimeout=setTimeout(()=>{if(!this._destroyed){for(let r of this._updatedStickyColumnsParamsToReplay)this.updateStickyColumns(r.rows,r.stickyStartStates,r.stickyEndStates,!0,!1);this._updatedStickyColumnsParamsToReplay=[],this._stickyColumnsReplayTimeout=null}},0))}};function UL(t){return[`cdk-cell`,`cdk-header-cell`,`cdk-footer-cell`].some(n=>t.classList.contains(n))}function fk(t){return Error(`Could not find column with id "${t}".`)}var hc=new g(`STICKY_POSITIONING_LISTENER`);var pv=(()=>{class t{viewContainer=u(et);elementRef=u(N);constructor(){let e=u(rr);e._rowOutlet=this,e._outletAssigned()}static ɵfac=function(r){return new(r||t)};static ɵdir=w({type:t,selectors:[[``,`rowOutlet`,``]]})}return t})();var hv=(()=>{class t{viewContainer=u(et);elementRef=u(N);constructor(){let e=u(rr);e._headerRowOutlet=this,e._outletAssigned()}static ɵfac=function(r){return new(r||t)};static ɵdir=w({type:t,selectors:[[``,`headerRowOutlet`,``]]})}return t})();var gv=(()=>{class t{viewContainer=u(et);elementRef=u(N);constructor(){let e=u(rr);e._footerRowOutlet=this,e._outletAssigned()}static ɵfac=function(r){return new(r||t)};static ɵdir=w({type:t,selectors:[[``,`footerRowOutlet`,``]]})}return t})();var bv=(()=>{class t{viewContainer=u(et);elementRef=u(N);constructor(){let e=u(rr);e._noDataRowOutlet=this,e._outletAssigned()}static ɵfac=function(r){return new(r||t)};static ɵdir=w({type:t,selectors:[[``,`noDataRowOutlet`,``]]})}return t})();var yv=(()=>{class t{_differs=u(Oa);_changeDetectorRef=u(Ce);_elementRef=u(N);_dir=u(lt,{optional:!0});_platform=u(xe);_viewRepeater;_viewportRuler=u(Dr);_injector=u(B);_virtualScrollViewport=u(tE,{optional:!0,host:!0});_positionListener=u(hc,{optional:!0})||u(hc,{optional:!0,skipSelf:!0});_document=u(z);_data;_renderedRange;_onDestroy=new _;_renderRows;_renderChangeSubscription=null;_columnDefsByName=new Map;_rowDefs;_headerRowDefs;_footerRowDefs;_dataDiffer;_defaultRowDef=null;_customColumnDefs=new Set;_customRowDefs=new Set;_customHeaderRowDefs=new Set;_customFooterRowDefs=new Set;_customNoDataRow=null;_headerRowDefChanged=!0;_footerRowDefChanged=!0;_stickyColumnStylesNeedReset=!0;_forceRecalculateCellWidths=!0;_cachedRenderRowsMap=new Map;_rowDefsByView=new WeakMap;_isNativeHtmlTable;_stickyStyler;stickyCssClass=`cdk-table-sticky`;needsPositionStickyOnElement=!0;_isServer;_isShowingNoDataRow=!1;_hasAllOutlets=!1;_hasInitialized=!1;_headerRowStickyUpdates=new _;_footerRowStickyUpdates=new _;_disableVirtualScrolling=!1;_getCellRole(){if(this._cellRoleInternal===void 0){let e=this._elementRef.nativeElement.getAttribute(`role`);return e===`grid`||e===`treegrid`?`gridcell`:`cell`}return this._cellRoleInternal}_cellRoleInternal=void 0;get trackBy(){return this._trackByFn}set trackBy(e){this._trackByFn=e}_trackByFn;get dataSource(){return this._dataSource}set dataSource(e){this._dataSource!==e&&(this._switchDataSource(e),this._changeDetectorRef.markForCheck())}_dataSource;_dataSourceChanges=new _;_dataStream=new _;get multiTemplateDataRows(){return this._multiTemplateDataRows}set multiTemplateDataRows(e){this._multiTemplateDataRows=e,this._rowOutlet&&this._rowOutlet.viewContainer.length&&(this._forceRenderDataRows(),this.updateStickyColumnStyles())}_multiTemplateDataRows=!1;get fixedLayout(){return this._virtualScrollEnabled()?!0:this._fixedLayout}set fixedLayout(e){this._fixedLayout=e,this._forceRecalculateCellWidths=!0,this._stickyColumnStylesNeedReset=!0}_fixedLayout=!1;recycleRows=!1;contentChanged=new k;viewChange=new Qe({start:0,end:Number.MAX_VALUE});_rowOutlet;_headerRowOutlet;_footerRowOutlet;_noDataRowOutlet;_contentColumnDefs;_contentRowDefs;_contentHeaderRowDefs;_contentFooterRowDefs;_noDataRow;get renderedRows(){return this._renderRows}constructor(){u(new Gt(`role`),{optional:!0})||this._elementRef.nativeElement.setAttribute(`role`,`table`),this._isServer=!this._platform.isBrowser,this._isNativeHtmlTable=this._elementRef.nativeElement.nodeName===`TABLE`,this._dataDiffer=this._differs.find([]).create((r,i)=>this.trackBy?this.trackBy(i.dataIndex,i.data):i)}ngOnInit(){this._setupStickyStyler(),this._viewportRuler.change().pipe(De(this._onDestroy)).subscribe(()=>{this._forceRecalculateCellWidths=!0})}ngAfterContentInit(){this._viewRepeater=this.recycleRows||this._virtualScrollEnabled()?new Hm:new lf,this._virtualScrollEnabled()&&this._setupVirtualScrolling(this._virtualScrollViewport),this._hasInitialized=!0}ngAfterContentChecked(){this._canRender()&&this._render()}ngOnDestroy(){this._stickyStyler?.destroy(),[this._rowOutlet?.viewContainer,this._headerRowOutlet?.viewContainer,this._footerRowOutlet?.viewContainer,this._cachedRenderRowsMap,this._customColumnDefs,this._customRowDefs,this._customHeaderRowDefs,this._customFooterRowDefs,this._columnDefsByName].forEach(e=>{e?.clear()}),this._headerRowDefs=[],this._footerRowDefs=[],this._defaultRowDef=null,this._headerRowStickyUpdates.complete(),this._footerRowStickyUpdates.complete(),this._onDestroy.next(),this._onDestroy.complete(),nc(this.dataSource)&&this.dataSource.disconnect(this)}renderRows(){this._renderRows=this._getAllRenderRows();let e=this._dataDiffer.diff(this._renderRows);if(!e){this._updateNoDataRow(),this.contentChanged.next();return}let r=this._rowOutlet.viewContainer;this._viewRepeater.applyChanges(e,r,(i,o,a)=>this._getEmbeddedViewArgs(i.item,a),i=>i.item.data,i=>{if(i.operation===Xn.INSERTED&&i.context){this._renderCellTemplateForItem(i.record.item.rowDef,i.context);let o=r.get(i.record.currentIndex);this._rowDefsByView.set(o,i.record.item.rowDef)}}),e.forEachIdentityChange(i=>{let o=i.currentIndex,a=r.get(o);if(this._rowDefsByView.get(a)!==i.item.rowDef){r.remove(o);let s=this._renderRow(this._rowOutlet,i.item.rowDef,o,{$implicit:i.item.data});this._rowDefsByView.set(s,i.item.rowDef)}else a.context.$implicit=i.item.data}),this._updateRowIndexContext(),this._updateNoDataRow(),this.contentChanged.next(),this.updateStickyColumnStyles()}addColumnDef(e){this._customColumnDefs.add(e)}removeColumnDef(e){this._customColumnDefs.delete(e)}addRowDef(e){this._customRowDefs.add(e)}removeRowDef(e){this._customRowDefs.delete(e)}addHeaderRowDef(e){this._customHeaderRowDefs.add(e),this._headerRowDefChanged=!0}removeHeaderRowDef(e){this._customHeaderRowDefs.delete(e),this._headerRowDefChanged=!0}addFooterRowDef(e){this._customFooterRowDefs.add(e),this._footerRowDefChanged=!0}removeFooterRowDef(e){this._customFooterRowDefs.delete(e),this._footerRowDefChanged=!0}setNoDataRow(e){this._customNoDataRow=e}updateStickyHeaderRowStyles(){let e=this._getRenderedRows(this._headerRowOutlet);if(this._isNativeHtmlTable){let i=pk(this._headerRowOutlet,`thead`);i&&(i.style.display=e.length?``:`none`)}let r=this._headerRowDefs.map(i=>i.sticky);this._stickyStyler.clearStickyPositioning(e,[`top`]),this._stickyStyler.stickRows(e,r,`top`),this._headerRowDefs.forEach(i=>i.resetStickyChanged())}updateStickyFooterRowStyles(){let e=this._getRenderedRows(this._footerRowOutlet);if(this._isNativeHtmlTable){let i=pk(this._footerRowOutlet,`tfoot`);i&&(i.style.display=e.length?``:`none`)}let r=this._footerRowDefs.map(i=>i.sticky);this._stickyStyler.clearStickyPositioning(e,[`bottom`]),this._stickyStyler.stickRows(e,r,`bottom`),this._stickyStyler.updateStickyFooterContainer(this._elementRef.nativeElement,r),this._footerRowDefs.forEach(i=>i.resetStickyChanged())}updateStickyColumnStyles(){let e=this._getRenderedRows(this._headerRowOutlet),r=this._getRenderedRows(this._rowOutlet),i=this._getRenderedRows(this._footerRowOutlet);(this._isNativeHtmlTable&&!this.fixedLayout||this._stickyColumnStylesNeedReset)&&(this._stickyStyler.clearStickyPositioning([...e,...r,...i],[`left`,`right`]),this._stickyColumnStylesNeedReset=!1),e.forEach((o,a)=>{this._addStickyColumnStyles([o],this._headerRowDefs[a])}),this._rowDefs.forEach(o=>{let a=[];for(let s=0;s<r.length;s++)this._renderRows[s].rowDef===o&&a.push(r[s]);this._addStickyColumnStyles(a,o)}),i.forEach((o,a)=>{this._addStickyColumnStyles([o],this._footerRowDefs[a])}),Array.from(this._columnDefsByName.values()).forEach(o=>o.resetStickyChanged())}stickyColumnsUpdated(e){this._positionListener?.stickyColumnsUpdated(e)}stickyEndColumnsUpdated(e){this._positionListener?.stickyEndColumnsUpdated(e)}stickyHeaderRowsUpdated(e){this._headerRowStickyUpdates.next(e),this._positionListener?.stickyHeaderRowsUpdated(e)}stickyFooterRowsUpdated(e){this._footerRowStickyUpdates.next(e),this._positionListener?.stickyFooterRowsUpdated(e)}_outletAssigned(){!this._hasAllOutlets&&this._rowOutlet&&this._headerRowOutlet&&this._footerRowOutlet&&this._noDataRowOutlet&&(this._hasAllOutlets=!0,this._canRender()&&this._render())}_canRender(){return this._hasAllOutlets&&this._hasInitialized}_render(){this._cacheRowDefs(),this._cacheColumnDefs(),!this._headerRowDefs.length&&!this._footerRowDefs.length&&this._rowDefs.length;let r=this._renderUpdatedColumns()||this._headerRowDefChanged||this._footerRowDefChanged;this._stickyColumnStylesNeedReset=this._stickyColumnStylesNeedReset||r,this._forceRecalculateCellWidths=r,this._headerRowDefChanged&&(this._forceRenderHeaderRows(),this._headerRowDefChanged=!1),this._footerRowDefChanged&&(this._forceRenderFooterRows(),this._footerRowDefChanged=!1),this.dataSource&&this._rowDefs.length>0&&!this._renderChangeSubscription?this._observeRenderChanges():this._stickyColumnStylesNeedReset&&this.updateStickyColumnStyles(),this._checkStickyStates()}_getAllRenderRows(){if(!Array.isArray(this._data)||!this._renderedRange)return[];let e=[],r=Math.min(this._data.length,this._renderedRange.end),i=this._cachedRenderRowsMap;this._cachedRenderRowsMap=new Map;for(let o=this._renderedRange.start;o<r;o++){let a=this._data[o],s=this._getRenderRowsForData(a,o,i.get(a));this._cachedRenderRowsMap.has(a)||this._cachedRenderRowsMap.set(a,new WeakMap);for(let l=0;l<s.length;l++){let c=s[l],d=this._cachedRenderRowsMap.get(c.data);d.has(c.rowDef)?d.get(c.rowDef).push(c):d.set(c.rowDef,[c]),e.push(c)}}return e}_getRenderRowsForData(e,r,i){return this._getRowDefs(e,r).map(a=>{let s=i&&i.has(a)?i.get(a):[];if(s.length){let l=s.shift();return l.dataIndex=r,l}else return{data:e,rowDef:a,dataIndex:r}})}_cacheColumnDefs(){this._columnDefsByName.clear(),df(this._getOwnDefs(this._contentColumnDefs),this._customColumnDefs).forEach(r=>{this._columnDefsByName.has(r.name),this._columnDefsByName.set(r.name,r)})}_cacheRowDefs(){this._headerRowDefs=df(this._getOwnDefs(this._contentHeaderRowDefs),this._customHeaderRowDefs),this._footerRowDefs=df(this._getOwnDefs(this._contentFooterRowDefs),this._customFooterRowDefs),this._rowDefs=df(this._getOwnDefs(this._contentRowDefs),this._customRowDefs);let e=this._rowDefs.filter(r=>!r.when);this._defaultRowDef=e[0]}_renderUpdatedColumns(){let e=(a,s)=>{let l=!!s.getColumnsDiff();return a||l},r=this._rowDefs.reduce(e,!1);r&&this._forceRenderDataRows();let i=this._headerRowDefs.reduce(e,!1);i&&this._forceRenderHeaderRows();let o=this._footerRowDefs.reduce(e,!1);return o&&this._forceRenderFooterRows(),r||i||o}_switchDataSource(e){this._data=[],nc(this.dataSource)&&this.dataSource.disconnect(this),this._renderChangeSubscription&&(this._renderChangeSubscription.unsubscribe(),this._renderChangeSubscription=null),e||(this._dataDiffer&&this._dataDiffer.diff([]),this._rowOutlet&&this._rowOutlet.viewContainer.clear()),this._dataSource=e}_observeRenderChanges(){if(!this.dataSource)return;let e;nc(this.dataSource)?e=this.dataSource.connect(this):Ji(this.dataSource)?e=this.dataSource:Array.isArray(this.dataSource)&&(e=j(this.dataSource)),this._renderChangeSubscription=tn([e,this.viewChange]).pipe(De(this._onDestroy)).subscribe(([r,i])=>{this._data=r||[],this._renderedRange=i,this._dataStream.next(r),this.renderRows()})}_forceRenderHeaderRows(){this._headerRowOutlet.viewContainer.length>0&&this._headerRowOutlet.viewContainer.clear(),this._headerRowDefs.forEach((e,r)=>this._renderRow(this._headerRowOutlet,e,r)),this.updateStickyHeaderRowStyles()}_forceRenderFooterRows(){this._footerRowOutlet.viewContainer.length>0&&this._footerRowOutlet.viewContainer.clear(),this._footerRowDefs.forEach((e,r)=>this._renderRow(this._footerRowOutlet,e,r)),this.updateStickyFooterRowStyles()}_addStickyColumnStyles(e,r){let i=Array.from(r?.columns||[]).map(s=>{let l=this._columnDefsByName.get(s);if(!l)throw fk(s);return l}),o=i.map(s=>s.sticky),a=i.map(s=>s.stickyEnd);this._stickyStyler.updateStickyColumns(e,o,a,!this.fixedLayout||this._forceRecalculateCellWidths)}_getRenderedRows(e){let r=[];for(let i=0;i<e.viewContainer.length;i++){let o=e.viewContainer.get(i);r.push(o.rootNodes[0])}return r}_getRowDefs(e,r){if(this._rowDefs.length===1)return[this._rowDefs[0]];let i=[];if(this.multiTemplateDataRows)i=this._rowDefs.filter(o=>!o.when||o.when(r,e));else{let o=this._rowDefs.find(a=>a.when&&a.when(r,e))||this._defaultRowDef;o&&i.push(o)}return i.length,i}_getEmbeddedViewArgs(e,r){let i=e.rowDef,o={$implicit:e.data};return{templateRef:i.template,context:o,index:r}}_renderRow(e,r,i,o={}){let a=e.viewContainer.createEmbeddedView(r.template,o,i);return this._renderCellTemplateForItem(r,o),a}_renderCellTemplateForItem(e,r){for(let i of this._getCellTemplates(e))li.mostRecentCellOutlet&&li.mostRecentCellOutlet._viewContainer.createEmbeddedView(i,r);this._changeDetectorRef.markForCheck()}_updateRowIndexContext(){let e=this._rowOutlet.viewContainer;for(let r=0,i=e.length;r<i;r++){let a=e.get(r).context;a.count=i,a.first=r===0,a.last=r===i-1,a.even=r%2===0,a.odd=!a.even,this.multiTemplateDataRows?(a.dataIndex=this._renderRows[r].dataIndex,a.renderIndex=r):a.index=this._renderRows[r].dataIndex}}_getCellTemplates(e){return!e||!e.columns?[]:Array.from(e.columns,r=>{let i=this._columnDefsByName.get(r);if(!i)throw fk(r);return e.extractCellTemplate(i)})}_forceRenderDataRows(){this._dataDiffer.diff([]),this._rowOutlet.viewContainer.clear(),this.renderRows()}_checkStickyStates(){let e=(r,i)=>r||i.hasStickyChanged();this._headerRowDefs.reduce(e,!1)&&this.updateStickyHeaderRowStyles(),this._footerRowDefs.reduce(e,!1)&&this.updateStickyFooterRowStyles(),Array.from(this._columnDefsByName.values()).reduce(e,!1)&&(this._stickyColumnStylesNeedReset=!0,this.updateStickyColumnStyles())}_setupStickyStyler(){let e=this._dir?this._dir.value:`ltr`,r=this._injector;this._stickyStyler=new cv(this._isNativeHtmlTable,this.stickyCssClass,this._platform.isBrowser,this.needsPositionStickyOnElement,e,this,r),(this._dir?this._dir.change:j()).pipe(De(this._onDestroy)).subscribe(i=>{this._stickyStyler.direction=i,this.updateStickyColumnStyles()})}_setupVirtualScrolling(e){let r=typeof requestAnimationFrame<`u`?Jc:Zc;this.viewChange.next({start:0,end:0}),e.renderedRangeStream.pipe(ia(0,r),De(this._onDestroy)).subscribe(this.viewChange),e.attach({dataStream:this._dataStream,measureRangeSize:(i,o)=>this._measureRangeSize(i,o)}),tn([e.renderedContentOffset,this._headerRowStickyUpdates]).pipe(De(this._onDestroy)).subscribe(([i,o])=>{if(!(!o.sizes||!o.offsets||!o.elements))for(let a=0;a<o.elements.length;a++){let s=o.elements[a];if(s){let l=o.offsets[a],c=i!==0?Math.max(i-l,l):-l;for(let d of s)d.style.top=`${-c}px`}}}),tn([e.renderedContentOffset,this._footerRowStickyUpdates]).pipe(De(this._onDestroy)).subscribe(([i,o])=>{if(!(!o.sizes||!o.offsets||!o.elements))for(let a=0;a<o.elements.length;a++){let s=o.elements[a];if(s)for(let l of s)l.style.bottom=`${i+o.offsets[a]}px`}})}_getOwnDefs(e){return e.filter(r=>!r._table||r._table===this)}_updateNoDataRow(){let e=this._customNoDataRow||this._noDataRow;if(!e)return;let r=this._rowOutlet.viewContainer.length===0;if(r===this._isShowingNoDataRow)return;let i=this._noDataRowOutlet.viewContainer;if(r){let o=i.createEmbeddedView(e.templateRef),a=o.rootNodes[0];if(o.rootNodes.length===1&&a?.nodeType===this._document.ELEMENT_NODE){a.setAttribute(`role`,`row`),a.classList.add(...e._contentClassNames);let s=a.querySelectorAll(e._cellSelector);for(let l=0;l<s.length;l++)s[l].classList.add(...e._cellClassNames)}}else i.clear();this._isShowingNoDataRow=r,this._changeDetectorRef.markForCheck()}_measureRangeSize(e,r){if(e.start>=e.end||r!==`vertical`)return 0;let i=this.viewChange.value,o=this._rowOutlet.viewContainer;e.start<i.start||(e.end,i.end);let a=e.start-i.start,s=e.end-e.start,l,c;for(let p=0;p<s;p++){let f=o.get(p+a);if(f&&f.rootNodes.length){l=c=f.rootNodes[0];break}}for(let p=s-1;p>-1;p--){let f=o.get(p+a);if(f&&f.rootNodes.length){c=f.rootNodes[f.rootNodes.length-1];break}}let d=l?.getBoundingClientRect?.(),m=c?.getBoundingClientRect?.();return d&&m?m.bottom-d.top:0}_virtualScrollEnabled(){return!this._disableVirtualScrolling&&this._virtualScrollViewport!=null}static ɵfac=function(r){return new(r||t)};static ɵcmp=(function(){let e=[[[`caption`]],[[`colgroup`],[`col`]],`*`],r=[`caption`,`colgroup, col`,`*`];function i(s,l){s&1&&X(0,2)}function o(s,l){s&1&&(C(0,`thead`,0),kt(1,1),E(),C(2,`tbody`,0),kt(3,2)(4,3),E(),C(5,`tfoot`,0),kt(6,4),E())}function a(s,l){s&1&&kt(0,1)(1,2)(2,3)(3,4)}return F({type:t,selectors:[[`cdk-table`],[`table`,`cdk-table`,``]],contentQueries:function(l,c,d){if(l&1&&Mt(d,yk,5)(d,ci,5)(d,pf,5)(d,bc,5)(d,yc,5),l&2){let m;H(m=U())&&(c._noDataRow=m.first),H(m=U())&&(c._contentColumnDefs=m),H(m=U())&&(c._contentRowDefs=m),H(m=U())&&(c._contentHeaderRowDefs=m),H(m=U())&&(c._contentFooterRowDefs=m)}},hostAttrs:[1,`cdk-table`],hostVars:2,hostBindings:function(l,c){l&2&&G(`cdk-table-fixed-layout`,c.fixedLayout)},inputs:{trackBy:`trackBy`,dataSource:`dataSource`,multiTemplateDataRows:[2,`multiTemplateDataRows`,`multiTemplateDataRows`,I],fixedLayout:[2,`fixedLayout`,`fixedLayout`,I],recycleRows:[2,`recycleRows`,`recycleRows`,I]},outputs:{contentChanged:`contentChanged`},exportAs:[`cdkTable`],features:[ye([{provide:rr,useExisting:t},{provide:hc,useValue:null}])],ngContentSelectors:r,decls:5,vars:2,consts:[[`role`,`rowgroup`],[`headerRowOutlet`,``],[`rowOutlet`,``],[`noDataRowOutlet`,``],[`footerRowOutlet`,``]],template:function(l,c){l&1&&(Me(e),X(0),X(1,1),le(2,i,1,0),le(3,o,7,0)(4,a,4,0)),l&2&&(y(2),ce(c._isServer?2:-1),y(),ce(c._isNativeHtmlTable?3:4))},dependencies:[hv,pv,bv,gv],styles:[`.cdk-table-fixed-layout {
  table-layout: fixed;
}
`],encapsulation:2,changeDetection:1})})()}return t})();function df(t,n){return t.concat(Array.from(n))}function pk(t,n){let e=n.toUpperCase(),r=t.viewContainer.element.nativeElement;for(;r;){let i=r.nodeType===1?r.nodeName:null;if(i===e)return r;if(i===`TABLE`)break;r=r.parentNode}return null}var vk=(()=>{class t{static ɵfac=function(r){return new(r||t)};static ɵmod=R({type:t});static ɵinj=A({imports:[rc]})}return t})();var _k=new g(`MAT_SORT_DEFAULT_OPTIONS`);var $L=(()=>{class t{_defaultOptions;_initializedStream=new xn(1);sortables=new Map;_stateChanges=new _;active;start=`asc`;get direction(){return this._direction}set direction(e){this._direction=e}_direction=``;disableClear;disabled=!1;sortChange=new k;initialized=this._initializedStream;constructor(e){this._defaultOptions=e}register(e){this.sortables.set(e.id,e)}deregister(e){this.sortables.delete(e.id)}sort(e){this.active!=e.id?(this.active=e.id,this.direction=e.start?e.start:this.start):this.direction=this.getNextSortDirection(e),this.sortChange.emit({active:this.active,direction:this.direction})}getNextSortDirection(e){if(!e)return``;let r=e?.disableClear??this.disableClear??!!this._defaultOptions?.disableClear,i=GL(e.start||this.start,r),o=i.indexOf(this.direction)+1;return o>=i.length&&(o=0),i[o]}ngOnInit(){this._initializedStream.next()}ngOnChanges(){this._stateChanges.next()}ngOnDestroy(){this._stateChanges.complete(),this._initializedStream.complete()}static ɵfac=function(r){return new(r||t)(me(_k,8))};static ɵdir=w({type:t,selectors:[[``,`matSort`,``]],hostAttrs:[1,`mat-sort`],inputs:{active:[0,`matSortActive`,`active`],start:[0,`matSortStart`,`start`],direction:[0,`matSortDirection`,`direction`],disableClear:[2,`matSortDisableClear`,`disableClear`,I],disabled:[2,`matSortDisabled`,`disabled`,I]},outputs:{sortChange:`matSortChange`},exportAs:[`matSort`],features:[Se]})}return t})();function GL(t,n){let e=[`asc`,`desc`];return t==`desc`&&e.reverse(),n||e.push(``),e}var Qse=(()=>{class t{_sort=u($L,{optional:!0});_columnDef=u(ci,{optional:!0});_changeDetectorRef=u(Ce);_focusMonitor=u(Tn);_elementRef=u(N);_ariaDescriber=u(Vm,{optional:!0});_renderChanges;_animationsDisabled=ze();_recentlyCleared=L(null);_sortButton;id;arrowPosition=`after`;start;disabled=!1;get sortActionDescription(){return this._sortActionDescription}set sortActionDescription(e){this._updateSortActionDescription(e)}_sortActionDescription=`Sort`;disableClear;constructor(){u(Ze).load(Rn);let e=u(_k,{optional:!0});this._sort,e?.arrowPosition&&(this.arrowPosition=e?.arrowPosition)}ngOnInit(){!this.id&&this._columnDef&&(this.id=this._columnDef.name),this._sort.register(this),this._renderChanges=Dt(this._sort._stateChanges,this._sort.sortChange).subscribe(()=>this._changeDetectorRef.markForCheck()),this._sortButton=this._elementRef.nativeElement.querySelector(`.mat-sort-header-container`),this._updateSortActionDescription(this._sortActionDescription)}ngAfterViewInit(){this._focusMonitor.monitor(this._elementRef,!0).subscribe(()=>{Promise.resolve().then(()=>this._recentlyCleared.set(null))})}ngOnDestroy(){this._focusMonitor.stopMonitoring(this._elementRef),this._sort.deregister(this),this._renderChanges?.unsubscribe(),this._sortButton&&this._ariaDescriber?.removeDescription(this._sortButton,this._sortActionDescription)}_toggleOnInteraction(){if(!this._isDisabled()){let e=this._isSorted(),r=this._sort.direction;this._sort.sort(this),this._recentlyCleared.set(e&&!this._isSorted()?r:null)}}_handleKeydown(e){(e.keyCode===32||e.keyCode===13)&&(e.preventDefault(),this._toggleOnInteraction())}_isSorted(){return this._sort.active==this.id&&(this._sort.direction===`asc`||this._sort.direction===`desc`)}_isDisabled(){return this._sort.disabled||this.disabled}_getAriaSortAttribute(){return this._isSorted()?this._sort.direction==`asc`?`ascending`:`descending`:`none`}_renderArrow(){return!this._isDisabled()||this._isSorted()}_updateSortActionDescription(e){this._sortButton&&(this._ariaDescriber?.removeDescription(this._sortButton,this._sortActionDescription),this._ariaDescriber?.describe(this._sortButton,e)),this._sortActionDescription=e}static ɵfac=function(r){return new(r||t)};static ɵcmp=(function(){let e=[`*`,[[``,`matSortHeaderIcon`,``]]],r=[`*`,`[matSortHeaderIcon]`];function i(a,s){a&1&&(Et(),Re(0,`svg`,3),$t(1,`path`,4),Oe())}function o(a,s){a&1&&(Re(0,`div`,2),X(1,1,null,i,2,0),Oe())}return F({type:t,selectors:[[``,`mat-sort-header`,``]],hostAttrs:[1,`mat-sort-header`],hostVars:3,hostBindings:function(s,l){s&1&&Q(`click`,function(){return l._toggleOnInteraction()})(`keydown`,function(d){return l._handleKeydown(d)})(`mouseleave`,function(){return l._recentlyCleared.set(null)}),s&2&&(Y(`aria-sort`,l._getAriaSortAttribute()),G(`mat-sort-header-disabled`,l._isDisabled()))},inputs:{id:[0,`mat-sort-header`,`id`],arrowPosition:`arrowPosition`,start:`start`,disabled:[2,`disabled`,`disabled`,I],sortActionDescription:`sortActionDescription`,disableClear:[2,`disableClear`,`disableClear`,I]},exportAs:[`matSortHeader`],ngContentSelectors:r,decls:4,vars:17,consts:[[1,`mat-sort-header-container`,`mat-focus-indicator`],[1,`mat-sort-header-content`],[1,`mat-sort-header-arrow`],[`viewBox`,`0 -960 960 960`,`focusable`,`false`,`aria-hidden`,`true`],[`d`,`M440-240v-368L296-464l-56-56 240-240 240 240-56 56-144-144v368h-80Z`]],template:function(s,l){s&1&&(Me(e),Re(0,`div`,0)(1,`div`,1),X(2),Oe(),le(3,o,3,0,`div`,2),Oe()),s&2&&(G(`mat-sort-header-sorted`,l._isSorted())(`mat-sort-header-position-before`,l.arrowPosition===`before`)(`mat-sort-header-descending`,l._sort.direction===`desc`)(`mat-sort-header-ascending`,l._sort.direction===`asc`)(`mat-sort-header-recently-cleared-ascending`,l._recentlyCleared()===`asc`)(`mat-sort-header-recently-cleared-descending`,l._recentlyCleared()===`desc`)(`mat-sort-header-animations-disabled`,l._animationsDisabled),Y(`tabindex`,l._isDisabled()?null:0)(`role`,l._isDisabled()?null:`button`),y(3),ce(l._renderArrow()?3:-1))},styles:[`.mat-sort-header {
  cursor: pointer;
}

.mat-sort-header-disabled {
  cursor: default;
}

.mat-sort-header-container {
  display: flex;
  align-items: center;
  letter-spacing: normal;
  outline: 0;
}
[mat-sort-header].cdk-keyboard-focused .mat-sort-header-container, [mat-sort-header].cdk-program-focused .mat-sort-header-container {
  border-bottom: var(--%NS%mat-focus-indicator-fallback-border-style, solid) 1px currentColor;
}
.mat-sort-header-container::before {
  margin: calc(calc(var(--%NS%mat-focus-indicator-border-width, 3px) + 4px) * -1);
}

.mat-sort-header-content {
  display: flex;
  align-items: center;
}

.mat-sort-header-position-before {
  flex-direction: row-reverse;
}

@keyframes _mat-sort-header-recently-cleared-ascending {
  from {
    transform: translateY(0);
    opacity: 1;
  }
  to {
    transform: translateY(-25%);
    opacity: 0;
  }
}
@keyframes _mat-sort-header-recently-cleared-descending {
  from {
    transform: translateY(0) rotate(180deg);
    opacity: 1;
  }
  to {
    transform: translateY(25%) rotate(180deg);
    opacity: 0;
  }
}
.mat-sort-header-arrow {
  height: 12px;
  width: 12px;
  position: relative;
  transition: transform 225ms cubic-bezier(0.4, 0, 0.2, 1), opacity 225ms cubic-bezier(0.4, 0, 0.2, 1);
  opacity: 0;
  overflow: visible;
  color: var(--%NS%mat-sort-arrow-color, var(--%NS%mat-sys-on-surface));
}
.mat-sort-header.cdk-keyboard-focused .mat-sort-header-arrow, .mat-sort-header.cdk-program-focused .mat-sort-header-arrow, .mat-sort-header:hover .mat-sort-header-arrow {
  opacity: 0.54;
}
.mat-sort-header .mat-sort-header-sorted .mat-sort-header-arrow {
  opacity: 1;
}
.mat-sort-header-descending .mat-sort-header-arrow {
  transform: rotate(180deg);
}
.mat-sort-header-recently-cleared-ascending .mat-sort-header-arrow {
  transform: translateY(-25%);
}
.mat-sort-header-recently-cleared-ascending .mat-sort-header-arrow {
  transition: none;
  animation: _mat-sort-header-recently-cleared-ascending 225ms cubic-bezier(0.4, 0, 0.2, 1) forwards;
}
.mat-sort-header-recently-cleared-descending .mat-sort-header-arrow {
  transition: none;
  animation: _mat-sort-header-recently-cleared-descending 225ms cubic-bezier(0.4, 0, 0.2, 1) forwards;
}
.mat-sort-header-animations-disabled .mat-sort-header-arrow {
  transition-duration: 0ms;
  animation-duration: 0ms;
}
.mat-sort-header-arrow > svg, .mat-sort-header-arrow [matSortHeaderIcon] {
  width: 24px;
  height: 24px;
  fill: currentColor;
  position: absolute;
  top: 50%;
  left: 50%;
  margin: -12px 0 0 -12px;
  transform: translateZ(0);
}
.mat-sort-header-arrow, [dir=rtl] .mat-sort-header-position-before .mat-sort-header-arrow {
  margin: 0 0 0 6px;
}
.mat-sort-header-position-before .mat-sort-header-arrow, [dir=rtl] .mat-sort-header-arrow {
  margin: 0 6px 0 0;
}
`],encapsulation:2})})()}return t})();var vv=(()=>{class t{static ɵfac=function(r){return new(r||t)};static ɵmod=R({type:t});static ɵinj=A({imports:[ve]})}return t})();var fle=(()=>{class t extends yv{stickyCssClass=`mat-mdc-table-sticky`;needsPositionStickyOnElement=!1;static ɵfac=(()=>{let e;return function(i){return(e||(e=Ae(t)))(i||t)}})();static ɵcmp=(function(){let e=[[[`caption`]],[[`colgroup`],[`col`]],`*`],r=[`caption`,`colgroup, col`,`*`];function i(s,l){s&1&&X(0,2)}function o(s,l){s&1&&(C(0,`thead`,0),kt(1,1),E(),C(2,`tbody`,2),kt(3,3)(4,4),E(),C(5,`tfoot`,0),kt(6,5),E())}function a(s,l){s&1&&kt(0,1)(1,3)(2,4)(3,5)}return F({type:t,selectors:[[`mat-table`],[`table`,`mat-table`,``]],hostAttrs:[1,`mat-mdc-table`,`mdc-data-table__table`],hostVars:2,hostBindings:function(l,c){l&2&&G(`mat-table-fixed-layout`,c.fixedLayout)},exportAs:[`matTable`],features:[ye([{provide:yv,useExisting:t},{provide:rr,useExisting:t},{provide:hc,useValue:null}]),re],ngContentSelectors:r,decls:5,vars:2,consts:[[`role`,`rowgroup`],[`headerRowOutlet`,``],[`role`,`rowgroup`,1,`mdc-data-table__content`],[`rowOutlet`,``],[`noDataRowOutlet`,``],[`footerRowOutlet`,``]],template:function(l,c){l&1&&(Me(e),X(0),X(1,1),le(2,i,1,0),le(3,o,7,0)(4,a,4,0)),l&2&&(y(2),ce(c._isServer?2:-1),y(),ce(c._isNativeHtmlTable?3:4))},dependencies:[hv,pv,bv,gv],styles:[`.mat-mdc-table-sticky {
  position: sticky !important;
}

mat-table {
  display: block;
}

mat-header-row {
  min-height: var(--%NS%mat-table-header-container-height, 56px);
}

mat-row {
  min-height: var(--%NS%mat-table-row-item-container-height, 52px);
}

mat-footer-row {
  min-height: var(--%NS%mat-table-footer-container-height, 52px);
}

mat-row, mat-header-row, mat-footer-row {
  display: flex;
  border-width: 0;
  border-bottom-width: 1px;
  border-style: solid;
  align-items: center;
  box-sizing: border-box;
}

mat-cell:first-of-type, mat-header-cell:first-of-type, mat-footer-cell:first-of-type {
  padding-left: 24px;
}
[dir=rtl] mat-cell:first-of-type:not(:only-of-type), [dir=rtl] mat-header-cell:first-of-type:not(:only-of-type), [dir=rtl] mat-footer-cell:first-of-type:not(:only-of-type) {
  padding-left: 0;
  padding-right: 24px;
}
mat-cell:last-of-type, mat-header-cell:last-of-type, mat-footer-cell:last-of-type {
  padding-right: 24px;
}
[dir=rtl] mat-cell:last-of-type:not(:only-of-type), [dir=rtl] mat-header-cell:last-of-type:not(:only-of-type), [dir=rtl] mat-footer-cell:last-of-type:not(:only-of-type) {
  padding-right: 0;
  padding-left: 24px;
}

mat-cell, mat-header-cell, mat-footer-cell {
  flex: 1;
  display: flex;
  align-items: center;
  overflow: hidden;
  word-wrap: break-word;
  min-height: inherit;
}

.mat-mdc-table {
  min-width: 100%;
  border: 0;
  border-spacing: 0;
  table-layout: auto;
  white-space: normal;
  background-color: var(--%NS%mat-table-background-color, var(--%NS%mat-sys-surface));
}

.mat-table-fixed-layout {
  table-layout: fixed;
}

.mdc-data-table__cell {
  box-sizing: border-box;
  overflow: hidden;
  text-align: start;
  text-overflow: ellipsis;
}

.mdc-data-table__cell,
.mdc-data-table__header-cell {
  padding: 0 16px;
}

.mat-mdc-header-row {
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  height: var(--%NS%mat-table-header-container-height, 56px);
  color: var(--%NS%mat-table-header-headline-color, var(--%NS%mat-sys-on-surface, rgba(0, 0, 0, 0.87)));
  font-family: var(--%NS%mat-table-header-headline-font, var(--%NS%mat-sys-title-small-font, Roboto, sans-serif));
  line-height: var(--%NS%mat-table-header-headline-line-height, var(--%NS%mat-sys-title-small-line-height));
  font-size: var(--%NS%mat-table-header-headline-size, var(--%NS%mat-sys-title-small-size, 14px));
  font-weight: var(--%NS%mat-table-header-headline-weight, var(--%NS%mat-sys-title-small-weight, 500));
}

.mat-mdc-row {
  height: var(--%NS%mat-table-row-item-container-height, 52px);
  color: var(--%NS%mat-table-row-item-label-text-color, var(--%NS%mat-sys-on-surface, rgba(0, 0, 0, 0.87)));
}

.mat-mdc-row,
.mdc-data-table__content {
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  font-family: var(--%NS%mat-table-row-item-label-text-font, var(--%NS%mat-sys-body-medium-font, Roboto, sans-serif));
  line-height: var(--%NS%mat-table-row-item-label-text-line-height, var(--%NS%mat-sys-body-medium-line-height));
  font-size: var(--%NS%mat-table-row-item-label-text-size, var(--%NS%mat-sys-body-medium-size, 14px));
  font-weight: var(--%NS%mat-table-row-item-label-text-weight, var(--%NS%mat-sys-body-medium-weight));
}

.mat-mdc-footer-row {
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  height: var(--%NS%mat-table-footer-container-height, 52px);
  color: var(--%NS%mat-table-row-item-label-text-color, var(--%NS%mat-sys-on-surface, rgba(0, 0, 0, 0.87)));
  font-family: var(--%NS%mat-table-footer-supporting-text-font, var(--%NS%mat-sys-body-medium-font, Roboto, sans-serif));
  line-height: var(--%NS%mat-table-footer-supporting-text-line-height, var(--%NS%mat-sys-body-medium-line-height));
  font-size: var(--%NS%mat-table-footer-supporting-text-size, var(--%NS%mat-sys-body-medium-size, 14px));
  font-weight: var(--%NS%mat-table-footer-supporting-text-weight, var(--%NS%mat-sys-body-medium-weight));
  letter-spacing: var(--%NS%mat-table-footer-supporting-text-tracking, var(--%NS%mat-sys-body-medium-tracking));
}

.mat-mdc-header-cell {
  border-bottom-color: var(--%NS%mat-table-row-item-outline-color, var(--%NS%mat-sys-outline, rgba(0, 0, 0, 0.12)));
  border-bottom-width: var(--%NS%mat-table-row-item-outline-width, 1px);
  border-bottom-style: solid;
  letter-spacing: var(--%NS%mat-table-header-headline-tracking, var(--%NS%mat-sys-title-small-tracking));
  font-weight: inherit;
  line-height: inherit;
  box-sizing: border-box;
  text-overflow: ellipsis;
  overflow: hidden;
  outline: none;
  text-align: start;
}
.mdc-data-table__row:last-child > .mat-mdc-header-cell {
  border-bottom: none;
}

.mat-mdc-cell {
  border-bottom-color: var(--%NS%mat-table-row-item-outline-color, var(--%NS%mat-sys-outline, rgba(0, 0, 0, 0.12)));
  border-bottom-width: var(--%NS%mat-table-row-item-outline-width, 1px);
  border-bottom-style: solid;
  letter-spacing: var(--%NS%mat-table-row-item-label-text-tracking, var(--%NS%mat-sys-body-medium-tracking));
  line-height: inherit;
}
.mdc-data-table__row:last-child > .mat-mdc-cell {
  border-bottom: none;
}

.mat-mdc-footer-cell {
  letter-spacing: var(--%NS%mat-table-row-item-label-text-tracking, var(--%NS%mat-sys-body-medium-tracking));
}

mat-row.mat-mdc-row,
mat-header-row.mat-mdc-header-row,
mat-footer-row.mat-mdc-footer-row {
  border-bottom: none;
}

.mat-mdc-table tbody,
.mat-mdc-table tfoot,
.mat-mdc-table thead,
.mat-mdc-cell,
.mat-mdc-footer-cell,
.mat-mdc-header-row,
.mat-mdc-row,
.mat-mdc-footer-row,
.mat-mdc-table .mat-mdc-header-cell {
  background: inherit;
}

.mat-mdc-table mat-header-row.mat-mdc-header-row,
.mat-mdc-table mat-row.mat-mdc-row,
.mat-mdc-table mat-footer-row.mat-mdc-footer-cell {
  height: unset;
}

mat-header-cell.mat-mdc-header-cell,
mat-cell.mat-mdc-cell,
mat-footer-cell.mat-mdc-footer-cell {
  align-self: stretch;
}
`],encapsulation:2,changeDetection:1})})()}return t})();var ple=(()=>{class t extends uf{static ɵfac=(()=>{let e;return function(i){return(e||(e=Ae(t)))(i||t)}})();static ɵdir=w({type:t,selectors:[[``,`matCellDef`,``]],features:[ye([{provide:uf,useExisting:t}]),re]})}return t})();var hle=(()=>{class t extends mf{static ɵfac=(()=>{let e;return function(i){return(e||(e=Ae(t)))(i||t)}})();static ɵdir=w({type:t,selectors:[[``,`matHeaderCellDef`,``]],features:[ye([{provide:mf,useExisting:t}]),re]})}return t})();var gle=(()=>{class t extends ff{static ɵfac=(()=>{let e;return function(i){return(e||(e=Ae(t)))(i||t)}})();static ɵdir=w({type:t,selectors:[[``,`matFooterCellDef`,``]],features:[ye([{provide:ff,useExisting:t}]),re]})}return t})();var ble=(()=>{class t extends ci{get name(){return this._name}set name(e){this._setNameInput(e)}_updateColumnCssClassName(){super._updateColumnCssClassName(),this._columnCssClassName.push(`mat-column-${this.cssClassFriendlyName}`)}static ɵfac=(()=>{let e;return function(i){return(e||(e=Ae(t)))(i||t)}})();static ɵdir=w({type:t,selectors:[[``,`matColumnDef`,``]],inputs:{name:[0,`matColumnDef`,`name`]},features:[ye([{provide:ci,useExisting:t}]),re]})}return t})();var yle=(()=>{class t extends hk{static ɵfac=(()=>{let e;return function(i){return(e||(e=Ae(t)))(i||t)}})();static ɵdir=w({type:t,selectors:[[`mat-header-cell`],[`th`,`mat-header-cell`,``]],hostAttrs:[`role`,`columnheader`,1,`mat-mdc-header-cell`,`mdc-data-table__header-cell`],features:[re]})}return t})();var vle=(()=>{class t extends gk{static ɵfac=(()=>{let e;return function(i){return(e||(e=Ae(t)))(i||t)}})();static ɵdir=w({type:t,selectors:[[`mat-footer-cell`],[`td`,`mat-footer-cell`,``]],hostAttrs:[1,`mat-mdc-footer-cell`,`mdc-data-table__cell`],features:[re]})}return t})();var _le=(()=>{class t extends bk{static ɵfac=(()=>{let e;return function(i){return(e||(e=Ae(t)))(i||t)}})();static ɵdir=w({type:t,selectors:[[`mat-cell`],[`td`,`mat-cell`,``]],hostAttrs:[1,`mat-mdc-cell`,`mdc-data-table__cell`],features:[re]})}return t})();var Cle=(()=>{class t extends bc{static ɵfac=(()=>{let e;return function(i){return(e||(e=Ae(t)))(i||t)}})();static ɵdir=w({type:t,selectors:[[``,`matHeaderRowDef`,``]],inputs:{columns:[0,`matHeaderRowDef`,`columns`],sticky:[2,`matHeaderRowDefSticky`,`sticky`,I]},features:[ye([{provide:bc,useExisting:t}]),re]})}return t})();var wle=(()=>{class t extends yc{static ɵfac=(()=>{let e;return function(i){return(e||(e=Ae(t)))(i||t)}})();static ɵdir=w({type:t,selectors:[[``,`matFooterRowDef`,``]],inputs:{columns:[0,`matFooterRowDef`,`columns`],sticky:[2,`matFooterRowDefSticky`,`sticky`,I]},features:[ye([{provide:yc,useExisting:t}]),re]})}return t})();var xle=(()=>{class t extends pf{static ɵfac=(()=>{let e;return function(i){return(e||(e=Ae(t)))(i||t)}})();static ɵdir=w({type:t,selectors:[[``,`matRowDef`,``]],inputs:{columns:[0,`matRowDefColumns`,`columns`],when:[0,`matRowDefWhen`,`when`]},features:[ye([{provide:pf,useExisting:t}]),re]})}return t})();var Dle=(()=>{class t extends uv{static ɵfac=(()=>{let e;return function(i){return(e||(e=Ae(t)))(i||t)}})();static ɵcmp=F({type:t,selectors:[[`mat-header-row`],[`tr`,`mat-header-row`,``]],hostAttrs:[`role`,`row`,1,`mat-mdc-header-row`,`mdc-data-table__header-row`],exportAs:[`matHeaderRow`],features:[ye([{provide:uv,useExisting:t}]),re],decls:1,vars:0,consts:[[`cdkCellOutlet`,``]],template:function(r,i){r&1&&kt(0,0)},dependencies:[li],encapsulation:2,changeDetection:1})}return t})();var Sle=(()=>{class t extends mv{static ɵfac=(()=>{let e;return function(i){return(e||(e=Ae(t)))(i||t)}})();static ɵcmp=F({type:t,selectors:[[`mat-footer-row`],[`tr`,`mat-footer-row`,``]],hostAttrs:[`role`,`row`,1,`mat-mdc-footer-row`,`mdc-data-table__row`],exportAs:[`matFooterRow`],features:[ye([{provide:mv,useExisting:t}]),re],decls:1,vars:0,consts:[[`cdkCellOutlet`,``]],template:function(r,i){r&1&&kt(0,0)},dependencies:[li],encapsulation:2,changeDetection:1})}return t})();var Ele=(()=>{class t extends fv{static ɵfac=(()=>{let e;return function(i){return(e||(e=Ae(t)))(i||t)}})();static ɵcmp=F({type:t,selectors:[[`mat-row`],[`tr`,`mat-row`,``]],hostAttrs:[`role`,`row`,1,`mat-mdc-row`,`mdc-data-table__row`],exportAs:[`matRow`],features:[ye([{provide:fv,useExisting:t}]),re],decls:1,vars:0,consts:[[`cdkCellOutlet`,``]],template:function(r,i){r&1&&kt(0,0)},dependencies:[li],encapsulation:2,changeDetection:1})}return t})();var _v=(()=>{class t{static ɵfac=function(r){return new(r||t)};static ɵmod=R({type:t});static ɵinj=A({imports:[vk,ve]})}return t})();var WL=9007199254740991;var Ck=class extends tc{_data;_renderData=new Qe([]);_filter=new Qe(``);_internalPageChanges=new _;_renderChangesSubscription=null;filteredData;get data(){return this._data.value}set data(n){n=Array.isArray(n)?n:[],this._data.next(n),this._renderChangesSubscription||this._filterData(n)}get filter(){return this._filter.value}set filter(n){this._filter.next(n),this._renderChangesSubscription||this._filterData(this.data)}get sort(){return this._sort}set sort(n){this._sort=n,this._updateChangeSubscription()}_sort;get paginator(){return this._paginator}set paginator(n){this._paginator=n,this._updateChangeSubscription()}_paginator;sortingDataAccessor=(n,e)=>{let r=n[e];if(Em(r)){let i=Number(r);return i<WL?i:r}return r};sortData=(n,e)=>{let r=e.active,i=e.direction;return!r||i==``?n:n.sort((o,a)=>{let s=this.sortingDataAccessor(o,r),l=this.sortingDataAccessor(a,r),c=typeof s,d=typeof l;c!==d&&(c===`number`&&(s+=``),d===`number`&&(l+=``));let m=0;return s!=null&&l!=null?s>l?m=1:s<l&&(m=-1):s!=null?m=1:l!=null&&(m=-1),m*(i==`asc`?1:-1)})};filterPredicate=(n,e)=>{let r=e.trim().toLowerCase();return Object.values(n).some(i=>`${i}`.toLowerCase().includes(r))};constructor(n=[]){super(),this._data=new Qe(n),this._updateChangeSubscription()}_updateChangeSubscription(){let n=this._sort?Dt(this._sort.sortChange,this._sort.initialized):j(null),e=this._paginator?Dt(this._paginator.page,this._internalPageChanges,this._paginator.initialized):j(null),r=this._data,a=tn([tn([tn([r,this._filter]).pipe(oe(([s])=>this._filterData(s))),n]).pipe(oe(([s])=>this._orderData(s))),e]).pipe(oe(([s])=>this._pageData(s)));this._renderChangesSubscription?.unsubscribe(),this._renderChangesSubscription=a.subscribe(s=>this._renderData.next(s))}_filterData(n){return this.filteredData=this.filter==null||this.filter===``?n:n.filter(e=>this.filterPredicate(e,this.filter)),this.paginator&&this._updatePaginator(this.filteredData.length),this.filteredData}_orderData(n){return this.sort?this.sortData(n.slice(),this.sort):n}_pageData(n){if(!this.paginator)return n;let e=this.paginator.pageIndex*this.paginator.pageSize;return n.slice(e,e+this.paginator.pageSize)}_updatePaginator(n){Promise.resolve().then(()=>{let e=this.paginator;if(e&&(e.length=n,e.pageIndex>0)){let r=Math.ceil(e.length/e.pageSize)-1||0,i=Math.min(e.pageIndex,r);i!==e.pageIndex&&(e.pageIndex=i,this._internalPageChanges.next())}})}connect(){return this._renderChangesSubscription||this._updateChangeSubscription(),this._renderData}disconnect(){this._renderChangesSubscription?.unsubscribe(),this._renderChangesSubscription=null}};var qL=(()=>{class t{static ɵfac=function(r){return new(r||t)};static ɵdir=w({type:t,selectors:[[`mat-toolbar-row`]],hostAttrs:[1,`mat-toolbar-row`],exportAs:[`matToolbarRow`]})}return t})();var Lle=(()=>{class t{_elementRef=u(N);_platform=u(xe);_document=u(z);color;_toolbarRows;ngAfterViewInit(){this._platform.isBrowser&&(this._checkToolbarMixedModes(),this._toolbarRows.changes.subscribe(()=>this._checkToolbarMixedModes()))}_checkToolbarMixedModes(){this._toolbarRows.length}static ɵfac=function(r){return new(r||t)};static ɵcmp=(function(){let e=[`*`,[[`mat-toolbar-row`]]];return F({type:t,selectors:[[`mat-toolbar`]],contentQueries:function(o,a,s){if(o&1&&Mt(s,qL,5),o&2){let l;H(l=U())&&(a._toolbarRows=l)}},hostAttrs:[1,`mat-toolbar`],hostVars:6,hostBindings:function(o,a){o&2&&(Ot(a.color?`mat-`+a.color:``),G(`mat-toolbar-multiple-rows`,a._toolbarRows.length>0)(`mat-toolbar-single-row`,a._toolbarRows.length===0))},inputs:{color:`color`},exportAs:[`matToolbar`],ngContentSelectors:[`*`,`mat-toolbar-row`],decls:2,vars:0,template:function(o,a){o&1&&(Me(e),X(0),X(1,1))},styles:[`.mat-toolbar {
  background: var(--%NS%mat-toolbar-container-background-color, var(--%NS%mat-sys-surface));
  color: var(--%NS%mat-toolbar-container-text-color, var(--%NS%mat-sys-on-surface));
}
.mat-toolbar, .mat-toolbar h1, .mat-toolbar h2, .mat-toolbar h3, .mat-toolbar h4, .mat-toolbar h5, .mat-toolbar h6 {
  font-family: var(--%NS%mat-toolbar-title-text-font, var(--%NS%mat-sys-title-large-font));
  font-size: var(--%NS%mat-toolbar-title-text-size, var(--%NS%mat-sys-title-large-size));
  line-height: var(--%NS%mat-toolbar-title-text-line-height, var(--%NS%mat-sys-title-large-line-height));
  font-weight: var(--%NS%mat-toolbar-title-text-weight, var(--%NS%mat-sys-title-large-weight));
  letter-spacing: var(--%NS%mat-toolbar-title-text-tracking, var(--%NS%mat-sys-title-large-tracking));
  margin: 0;
}
@media (forced-colors: active) {
  .mat-toolbar {
    outline: solid 1px;
  }
}
.mat-toolbar .mat-form-field-underline,
.mat-toolbar .mat-form-field-ripple,
.mat-toolbar .mat-focused .mat-form-field-ripple {
  background-color: currentColor;
}
.mat-toolbar .mat-form-field-label,
.mat-toolbar .mat-focused .mat-form-field-label,
.mat-toolbar .mat-select-value,
.mat-toolbar .mat-select-arrow,
.mat-toolbar .mat-form-field.mat-focused .mat-select-arrow {
  color: inherit;
}
.mat-toolbar .mat-input-element {
  caret-color: currentColor;
}
.mat-toolbar .mat-mdc-button-base.mat-mdc-button-base.mat-unthemed {
  --%NS%mat-button-text-label-text-color: var(--%NS%mat-toolbar-container-text-color, var(--%NS%mat-sys-on-surface));
  --%NS%mat-button-outlined-label-text-color: var(--%NS%mat-toolbar-container-text-color, var(--%NS%mat-sys-on-surface));
}

.mat-toolbar-row, .mat-toolbar-single-row {
  display: flex;
  box-sizing: border-box;
  padding: 0 16px;
  width: 100%;
  flex-direction: row;
  align-items: center;
  white-space: nowrap;
  height: var(--%NS%mat-toolbar-standard-height, 64px);
}
@media (max-width: 599px) {
  .mat-toolbar-row, .mat-toolbar-single-row {
    height: var(--%NS%mat-toolbar-mobile-height, 56px);
  }
}

.mat-toolbar-multiple-rows {
  display: flex;
  box-sizing: border-box;
  flex-direction: column;
  width: 100%;
  min-height: var(--%NS%mat-toolbar-standard-height, 64px);
}
@media (max-width: 599px) {
  .mat-toolbar-multiple-rows {
    min-height: var(--%NS%mat-toolbar-mobile-height, 56px);
  }
}
`],encapsulation:2})})()}return t})();var Cv=(()=>{class t{static ɵfac=function(r){return new(r||t)};static ɵmod=R({type:t});static ɵinj=A({imports:[ve]})}return t})();var YL=[ii,Cv,Jy,Bi,tv,ov,fc,Hy,Sy,gy,lv,_v,ev,iv,vv,Yy];var tce=(()=>{class t{static{this.ɵfac=function(r){return new(r||t)}}static{this.ɵmod=R({type:t})}static{this.ɵinj=A({imports:[YL,ii,Cv,Jy,Bi,tv,ov,fc,Hy,Sy,gy,lv,_v,ev,iv,vv,Yy]})}}return t})();var ge=`primary`;var Tc=Symbol(`RouteTitle`);var kv=class{params;constructor(n){this.params=n||{}}has(n){return Object.hasOwn(this.params,n)}get(n){if(this.has(n)){let e=this.params[n];return Array.isArray(e)?e[0]:e}return null}getAll(n){if(this.has(n)){let e=this.params[n];return Array.isArray(e)?e:[e]}return[]}get keys(){return Object.keys(this.params)}};function Uo(t){return new kv(t)}function wv(t,n,e){for(let r=0;r<t.length;r++){let i=t[r],o=n[r];if(i[0]===`:`)e[i.substring(1)]=o;else if(i!==o.path)return!1}return!0}function Ik(t,n,e){let r=e.path.split(`/`),i=r.indexOf(`**`);if(i===-1){if(r.length>t.length||e.pathMatch===`full`&&(n.hasChildren()||r.length<t.length))return null;let l={},c=t.slice(0,r.length);return wv(r,c,l)?{consumed:c,posParams:l}:null}if(i!==r.lastIndexOf(`**`))return null;let o=r.slice(0,i),a=r.slice(i+1);if(o.length+a.length>t.length||e.pathMatch===`full`&&n.hasChildren()&&e.path!==`**`)return null;let s={};return!wv(o,t.slice(0,o.length),s)||!wv(a,t.slice(t.length-a.length),s)?null:{consumed:t,posParams:s}}function _f(t){return new Promise((n,e)=>{t.pipe(Fr()).subscribe({next:r=>n(r),error:r=>e(r)})})}function KL(t,n){if(t.length!==n.length)return!1;for(let e=0;e<t.length;++e)if(!Ir(t[e],n[e]))return!1;return!0}function Ir(t,n){let e=t?Mv(t):void 0,r=n?Mv(n):void 0;if(!e||!r||e.length!=r.length)return!1;let i;for(let o=0;o<e.length;o++)if(i=e[o],!Nk(t[i],n[i]))return!1;return!0}function Mv(t){return[...Object.keys(t),...Object.getOwnPropertySymbols(t)]}function Nk(t,n){if(Array.isArray(t)&&Array.isArray(n)){if(t.length!==n.length)return!1;let e=[...t].sort(),r=[...n].sort();return e.every((i,o)=>r[o]===i)}else return t===n}function ZL(t){return t.length>0?t[t.length-1]:null}function Wo(t){return Ji(t)?t:Yr(t)?Ye(Promise.resolve(t)):j(t)}function Tk(t){return Ji(t)?_f(t):Promise.resolve(t)}var QL={exact:Ok,subset:Fk};var Ak={exact:XL,subset:JL,ignored:()=>!0};var Rk={paths:`exact`,fragment:`ignored`,matrixParams:`ignored`,queryParams:`exact`};var Cf={paths:`subset`,fragment:`ignored`,matrixParams:`ignored`,queryParams:`subset`};function Iv(t,n,e){let r=b(b({},Cf),e||{});return QL[r.paths](t.root,n.root,r.matrixParams)&&Ak[r.queryParams](t.queryParams,n.queryParams)&&!(r.fragment===`exact`&&t.fragment!==n.fragment)}function XL(t,n){return Ir(t,n)}function Ok(t,n,e){if(!Ho(t.segments,n.segments)||!bf(t.segments,n.segments,e)||t.numberOfChildren!==n.numberOfChildren)return!1;for(let r in n.children)if(!t.children[r]||!Ok(t.children[r],n.children[r],e))return!1;return!0}function JL(t,n){return Object.keys(n).length<=Object.keys(t).length&&Object.keys(n).every(e=>Nk(t[e],n[e]))}function Fk(t,n,e){return Pk(t,n,n.segments,e)}function Pk(t,n,e,r){if(t.segments.length>e.length){let i=t.segments.slice(0,e.length);return!(!Ho(i,e)||n.hasChildren()||!bf(i,e,r))}else if(t.segments.length===e.length){if(!Ho(t.segments,e)||!bf(t.segments,e,r))return!1;for(let i in n.children)if(!t.children[i]||!Fk(t.children[i],n.children[i],r))return!1;return!0}else{let i=e.slice(0,t.segments.length),o=e.slice(t.segments.length);return!Ho(t.segments,i)||!bf(t.segments,i,r)||!t.children[ge]?!1:Pk(t.children[ge],n,o,r)}}function bf(t,n,e){return n.every((r,i)=>Ak[e](t[i].parameters,r.parameters))}var vn=class{root;queryParams;fragment;_queryParamMap;constructor(n=new Ve([],{}),e={},r=null){this.root=n,this.queryParams=e,this.fragment=r}get queryParamMap(){return this._queryParamMap??=Uo(this.queryParams),this._queryParamMap}toString(){return rV.serialize(this)}};var Ve=class{segments;children;parent=null;constructor(n,e){this.segments=n,this.children=e,Object.values(e).forEach(r=>r.parent=this)}hasChildren(){return this.numberOfChildren>0}get numberOfChildren(){return Object.keys(this.children).length}toString(){return yf(this)}};var ji=class{path;parameters;_parameterMap;constructor(n,e){this.path=n,this.parameters=e}get parameterMap(){return this._parameterMap??=Uo(this.parameters),this._parameterMap}toString(){return Vk(this)}};function eV(t,n){return Ho(t,n)&&t.every((e,r)=>Ir(e.parameters,n[r].parameters))}function Ho(t,n){return t.length!==n.length?!1:t.every((e,r)=>e.path===n[r].path)}function tV(t,n){let e=[];return Object.entries(t.children).forEach(([r,i])=>{r===ge&&(e=e.concat(n(i,r)))}),Object.entries(t.children).forEach(([r,i])=>{r!==ge&&(e=e.concat(n(i,r)))}),e}var $i=(()=>{class t{static ɵfac=function(r){return new(r||t)};static ɵprov=S({token:t,factory:()=>new di})}return t})();var di=class{parse(n){let e=new Tv(n);return new vn(e.parseRootSegment(),e.parseQueryParams(),e.parseFragment())}serialize(n){let e=`/${vc(n.root,!0)}`;nV(e)&&(e=`/`);let r=aV(n.queryParams),i=typeof n.fragment==`string`?`#${iV(n.fragment)}`:``;return`${e}${r}${i}`}};var wk=`http://fake`;function nV(t){try{let n=new URL(t,wk);return n.origin!==wk||n.pathname.startsWith(`//`)}catch(n){return!0}}var rV=new di;function yf(t){return t.segments.map(n=>Vk(n)).join(`/`)}function vc(t,n){if(!t.hasChildren())return yf(t);if(n){let e=t.children[ge]?vc(t.children[ge],!1):``,r=[];return Object.entries(t.children).forEach(([i,o])=>{i!==ge&&r.push(`${i}:${vc(o,!1)}`)}),r.length>0?`${e}(${r.join(`//`)})`:e}else{let e=tV(t,(r,i)=>i===ge?[vc(t.children[ge],!1)]:[`${i}:${vc(r,!1)}`]);return Object.keys(t.children).length===1&&t.children[ge]!=null?`${yf(t)}/${e[0]}`:`${yf(t)}/(${e.join(`//`)})`}}function Lk(t){return encodeURIComponent(t).replace(/%40/g,`@`).replace(/%3A/gi,`:`).replace(/%24/g,`$`).replace(/%2C/gi,`,`)}function hf(t){return Lk(t).replace(/%3B/gi,`;`)}function iV(t){return encodeURI(t)}function Nv(t){return Lk(t).replace(/\(/g,`%28`).replace(/\)/g,`%29`).replace(/%26/gi,`&`)}function vf(t){return decodeURIComponent(t)}function xk(t){return vf(t.replace(/\+/g,`%20`))}function Vk(t){return`${Nv(t.path)}${oV(t.parameters)}`}function oV(t){return Object.entries(t).map(([n,e])=>`;${Nv(n)}=${Nv(e)}`).join(``)}function aV(t){let n=Object.entries(t).map(([e,r])=>Array.isArray(r)?r.map(i=>`${hf(e)}=${hf(i)}`).join(`&`):`${hf(e)}=${hf(r)}`).filter(e=>e);return n.length?`?${n.join(`&`)}`:``}var xv=1073741824;function wf(t,n,e){Number(n)>=32&&!Object.hasOwn(t,xv)&&(t[xv]=e,delete t[xv]),t[n]=e}var sV=/^[^\/()?;#]+/;function Dv(t){let n=t.match(sV);return n?n[0]:``}var lV=/^[^\/()?;=#]+/;function cV(t){let n=t.match(lV);return n?n[0]:``}var dV=/^[^=?&#]+/;function uV(t){let n=t.match(dV);return n?n[0]:``}var mV=/^[^&#]+/;function fV(t){let n=t.match(mV);return n?n[0]:``}var Tv=class{url;remaining;constructor(n){this.url=n,this.remaining=n}parseRootSegment(){for(;this.consumeOptional(`/`););return this.remaining===``||this.peekStartsWith(`?`)||this.peekStartsWith(`#`)?new Ve([],{}):new Ve([],this.parseChildren())}parseQueryParams(){let n={};if(this.consumeOptional(`?`))do this.parseQueryParam(n);while(this.consumeOptional(`&`));return n}parseFragment(){return this.consumeOptional(`#`)?decodeURIComponent(this.remaining):null}parseChildren(n=0){if(n>50)throw new D(4010,!1);if(this.remaining===``)return{};this.consumeOptional(`/`);let e=[];for(this.peekStartsWith(`(`)||e.push(this.parseSegment());this.peekStartsWith(`/`)&&!this.peekStartsWith(`//`)&&!this.peekStartsWith(`/(`);)this.capture(`/`),e.push(this.parseSegment());let r={};this.peekStartsWith(`/(`)&&(this.capture(`/`),r=this.parseParens(!0,n));let i={};return this.peekStartsWith(`(`)&&(i=this.parseParens(!1,n)),(e.length>0||Object.keys(r).length>0)&&(i[ge]=new Ve(e,r)),i}parseSegment(){let n=Dv(this.remaining);if(n===``&&this.peekStartsWith(`;`))throw new D(4009,!1);return this.capture(n),new ji(vf(n),this.parseMatrixParams())}parseMatrixParams(){let n={};for(;this.consumeOptional(`;`);)this.parseParam(n);return n}parseParam(n){let e=cV(this.remaining);if(!e)return;this.capture(e);let r=``;if(this.consumeOptional(`=`)){let i=Dv(this.remaining);i&&(r=i,this.capture(r))}wf(n,vf(e),vf(r))}parseQueryParam(n){let e=uV(this.remaining);if(!e)return;this.capture(e);let r=``;if(this.consumeOptional(`=`)){let a=fV(this.remaining);a&&(r=a,this.capture(r))}let i=xk(e),o=xk(r);if(Object.hasOwn(n,i)){let a=n[i];Array.isArray(a)||(a=[a],n[i]=a),a.push(o)}else n[i]=o}parseParens(n,e){let r=Object.create(null);for(this.capture(`(`);!this.consumeOptional(`)`)&&this.remaining.length>0;){let i=Dv(this.remaining),o=this.remaining[i.length];if(o!==`/`&&o!==`)`&&o!==`;`)throw new D(4010,!1);let a;i.indexOf(`:`)>-1?(a=i.slice(0,i.indexOf(`:`)),this.capture(a),this.capture(`:`)):n&&(a=ge);let s=this.parseChildren(e+1),l=Object.keys(s).length===1&&s[ge]?s[ge]:new Ve([],s);wf(r,a??ge,l),this.consumeOptional(`//`)}return r}peekStartsWith(n){return this.remaining.startsWith(n)}consumeOptional(n){return this.peekStartsWith(n)?(this.remaining=this.remaining.substring(n.length),!0):!1}capture(n){if(!this.consumeOptional(n))throw new D(4011,!1)}};function Bk(t){return t.segments.length>0?new Ve([],{[ge]:t}):t}function jk(t){let n=Object.create(null);for(let[r,i]of Object.entries(t.children)){let o=jk(i);if(r===ge&&o.segments.length===0&&o.hasChildren())for(let[a,s]of Object.entries(o.children))wf(n,a,s);else(o.segments.length>0||o.hasChildren())&&wf(n,r,o)}return pV(new Ve(t.segments,n))}function pV(t){if(t.numberOfChildren===1&&t.children[ge]){let n=t.children[ge];return new Ve(t.segments.concat(n.segments),n.children)}return t}function zi(t){return t instanceof vn}function zk(t,n,e=null,r=null,i=new di){return Uk(Hk(t),n,e,r,i)}function Hk(t){let n;function e(o){let a={};for(let l of o.children){let c=e(l);a[l.outlet]=c}let s=new Ve(o.url,a);return o===t&&(n=s),s}let i=Bk(e(t.root));return n??i}function Uk(t,n,e,r,i){let o=t;for(;o.parent;)o=o.parent;if(n.length===0)return Sv(o,o,o,e,r,i);let a=hV(n);if(a.toRoot())return Sv(o,o,new Ve([],{}),e,r,i);let s=gV(a,o,t),l=s.processChildren?Cc(s.segmentGroup,s.index,a.commands):Gk(s.segmentGroup,s.index,a.commands);return Sv(o,s.segmentGroup,l,e,r,i)}function xf(t){return typeof t==`object`&&t!=null&&!t.outlets&&!t.segmentPath}function Dc(t){return typeof t==`object`&&t!=null&&t.outlets}function Dk(t,n,e){t||=`ɵ`;let r=new vn;return r.queryParams={[t]:n},e.parse(e.serialize(r)).queryParams[t]}function Sv(t,n,e,r,i,o){let a={};for(let[c,d]of Object.entries(r??{}))a[c]=Array.isArray(d)?d.map(m=>Dk(c,m,o)):Dk(c,d,o);let s;t===n?s=e:s=$k(t,n,e);return new vn(Bk(jk(s)),a,i)}function $k(t,n,e){let r=Object.create(null);return Object.entries(t.children).forEach(([i,o])=>{o===n?r[i]=e:r[i]=$k(o,n,e)}),new Ve(t.segments,r)}var Df=class{isAbsolute;numberOfDoubleDots;commands;constructor(n,e,r){if(this.isAbsolute=n,this.numberOfDoubleDots=e,this.commands=r,n&&r.length>0&&xf(r[0]))throw new D(4003,!1);let i=r.find(Dc);if(i&&i!==ZL(r))throw new D(4004,!1)}toRoot(){return this.isAbsolute&&this.commands.length===1&&this.commands[0]==`/`}};function hV(t){if(typeof t[0]==`string`&&t.length===1&&t[0]===`/`)return new Df(!0,0,t);let n=0,e=!1,r=t.reduce((i,o,a)=>{if(typeof o==`object`&&o!=null){if(o.outlets){let s={};return Object.entries(o.outlets).forEach(([l,c])=>{s[l]=typeof c==`string`?c.split(`/`):c}),[...i,{outlets:s}]}if(o.segmentPath)return[...i,o.segmentPath]}return typeof o!=`string`?[...i,o]:a===0?(o.split(`/`).forEach((s,l)=>{l==0&&s===`.`||(l==0&&s===``?e=!0:s===`..`?n++:s!=``&&i.push(s))}),i):[...i,o]},[]);return new Df(e,n,r)}var ds=class{segmentGroup;processChildren;index;constructor(n,e,r){this.segmentGroup=n,this.processChildren=e,this.index=r}};function gV(t,n,e){if(t.isAbsolute)return new ds(n,!0,0);if(!e)return new ds(n,!1,NaN);if(e.parent===null)return new ds(e,!0,0);let r=xf(t.commands[0])?0:1;return bV(e,e.segments.length-1+r,t.numberOfDoubleDots)}function bV(t,n,e){let r=t,i=n,o=e;for(;o>i;){if(o-=i,r=r.parent,!r)throw new D(4005,!1);i=r.segments.length}return new ds(r,!1,i-o)}function yV(t){return Dc(t[0])?t[0].outlets:{[ge]:t}}function Gk(t,n,e){if(t??=new Ve([],{}),t.segments.length===0&&t.hasChildren())return Cc(t,n,e);let r=vV(t,n,e),i=e.slice(r.commandIndex);if(r.match&&r.pathIndex<t.segments.length){let o=new Ve(t.segments.slice(0,r.pathIndex),{});return o.children[ge]=new Ve(t.segments.slice(r.pathIndex),t.children),Cc(o,0,i)}else return r.match&&i.length===0?new Ve(t.segments,{}):r.match&&!t.hasChildren()?Av(t,n,e):r.match?Cc(t,0,i):Av(t,n,e)}function Cc(t,n,e){if(e.length===0)return new Ve(t.segments,{});{let r=yV(e),i=Object.create(null);if(Object.keys(r).some(o=>o!==ge)&&t.children[ge]&&t.numberOfChildren===1&&t.children[ge].segments.length===0){let o=Cc(t.children[ge],n,e);return new Ve(t.segments,o.children)}return Object.entries(r).forEach(([o,a])=>{typeof a==`string`&&(a=[a]),a!==null&&(i[o]=Gk(t.children[o],n,a))}),Object.entries(t.children).forEach(([o,a])=>{r[o]===void 0&&(i[o]=a)}),new Ve(t.segments,i)}}function vV(t,n,e){let r=0,i=n,o={match:!1,pathIndex:0,commandIndex:0};for(;i<t.segments.length;){if(r>=e.length)return o;let a=t.segments[i],s=e[r];if(Dc(s))break;let l=`${s}`,c=r<e.length-1?e[r+1]:null;if(i>0&&l===void 0)break;if(l&&c&&typeof c==`object`&&c.outlets===void 0){if(!Ek(l,c,a))return o;r+=2}else{if(!Ek(l,{},a))return o;r++}i++}return{match:!0,pathIndex:i,commandIndex:r}}function Av(t,n,e){let r=t.segments.slice(0,n),i=0;for(;i<e.length;){let o=e[i];if(Dc(o))return new Ve(r,_V(o.outlets));if(i===0&&xf(e[0])){let l=t.segments[n];r.push(new ji(l.path,Sk(e[0]))),i++;continue}let a=Dc(o)?o.outlets[ge]:`${o}`,s=i<e.length-1?e[i+1]:null;a&&s&&xf(s)?(r.push(new ji(a,Sk(s))),i+=2):(r.push(new ji(a,{})),i++)}return new Ve(r,{})}function _V(t){let n={};return Object.entries(t).forEach(([e,r])=>{typeof r==`string`&&(r=[r]),r!==null&&(n[e]=Av(new Ve([],{}),0,r))}),n}function Sk(t){let n={};return Object.entries(t).forEach(([e,r])=>n[e]=`${r}`),n}function Ek(t,n,e){return t==e.path&&Ir(n,e.parameters)}var Sf=class{rootInjector;outlet=null;route=null;children;attachRef=null;get injector(){return this.route?.snapshot._environmentInjector??this.rootInjector}constructor(n){this.rootInjector=n,this.children=new Hi(this.rootInjector)}resetChildren(){this.children=new Hi(this.rootInjector)}};var Hi=(()=>{class t{rootInjector;contexts=new Map;constructor(e){this.rootInjector=e}onChildOutletCreated(e,r){let i=this.getOrCreateContext(e);i.outlet=r,this.contexts.set(e,i)}onChildOutletDestroyed(e){let r=this.getContext(e);r&&(r.outlet=null,r.attachRef=null)}onOutletDeactivated(){let e=this.contexts;return this.contexts=new Map,e}onOutletReAttached(e){this.contexts=e}getOrCreateContext(e){let r=this.getContext(e);return r||(r=new Sf(this.rootInjector),this.contexts.set(e,r)),r}getContext(e){return this.contexts.get(e)||null}static ɵfac=function(r){return new(r||t)(P(Ue))};static ɵprov=q({token:t,factory:t.ɵfac,providedIn:`root`})}return t})();var Ef=class{_root;constructor(n){this._root=n}get root(){return this._root.value}parent(n){let e=this.pathFromRoot(n);return e.length>1?e[e.length-2]:null}children(n){let e=Rv(n,this._root);return e?e.children.map(r=>r.value):[]}firstChild(n){let e=Rv(n,this._root);return e&&e.children.length>0?e.children[0].value:null}siblings(n){let e=Ov(n,this._root);return e.length<2?[]:e[e.length-2].children.map(i=>i.value).filter(i=>i!==n)}pathFromRoot(n){return Ov(n,this._root).map(e=>e.value)}};function Rv(t,n){if(t===n.value)return n;for(let e of n.children){let r=Rv(t,e);if(r)return r}return null}function Ov(t,n){if(t===n.value)return[n];for(let e of n.children){let r=Ov(t,e);if(r.length)return r.unshift(n),r}return[]}var Jt=class{value;children;constructor(n,e){this.value=n,this.children=e}toString(){return`TreeNode(${this.value})`}};function cs(t){let n={};return t&&t.children.forEach(e=>n[e.value.outlet]=e),n}var Sc=class extends Ef{snapshot;constructor(n,e){super(n),this.snapshot=e,$v(this,n)}toString(){return this.snapshot.toString()}};function Wk(t,n){let e=CV(t,n),r=new Qe([new ji(``,{})]),i=new Qe({}),o=new Qe({}),l=new ui(r,i,new Qe({}),new Qe(``),o,ge,t,e.root);return l.snapshot=e.root,new Sc(new Jt(l,[]),e)}function CV(t,n){return new Ec(``,new Jt(new fs([],{},{},``,{},ge,t,null,{},n),[]))}var ui=class{urlSubject;paramsSubject;queryParamsSubject;fragmentSubject;dataSubject;outlet;component;snapshot;_futureSnapshot;_routerState;_paramMap;_queryParamMap;title;url;params;queryParams;fragment;data;resources;_localInjector;pending;paramsSignal;queryParamsSignal;paramMapSignal;queryParamMapSignal;fragmentSignal;dataSignal;constructor(n,e,r,i,o,a,s,l){this.urlSubject=n,this.paramsSubject=e,this.queryParamsSubject=r,this.fragmentSubject=i,this.dataSubject=o,this.outlet=a,this.component=s,this._futureSnapshot=l,this.title=this.dataSubject?.pipe(oe(c=>c[Tc]))??j(void 0),this.url=n,this.params=e,this.queryParams=r,this.fragment=i,this.data=o}get routeConfig(){return this._futureSnapshot.routeConfig}get root(){return this._routerState.root}get parent(){return this._routerState.parent(this)}get firstChild(){return this._routerState.firstChild(this)}get children(){return this._routerState.children(this)}get pathFromRoot(){return this._routerState.pathFromRoot(this)}get paramMap(){return this._paramMap??=this.params.pipe(oe(n=>Uo(n))),this._paramMap}get queryParamMap(){return this._queryParamMap??=this.queryParams.pipe(oe(n=>Uo(n))),this._queryParamMap}toString(){return this.snapshot?this.snapshot.toString():`Future(${this._futureSnapshot})`}_setPending(n){this._futureSnapshot=n,this.pending?.set(!0)}};var wV=`always`;function Uv(t,n,e){let r,{routeConfig:i}=t;return n!==null&&(e===`always`||i?.path===``||!n.component&&!n.routeConfig?.loadComponent)?r={params:Object.keys(t.params).length===0?n.params:Object.freeze(b(b({},n.params),t.params)),data:Object.freeze(b(b({},n.data),t.data)),resolve:b(b(b(b({},t.data),n.data),i?.data),t._resolvedData)}:r={params:Object.freeze(b({},t.params)),data:Object.freeze(b({},t.data)),resolve:b(b({},t.data),t._resolvedData??{})},i&&Yk(i)&&(r.resolve[Tc]=i.title),r}var fs=class{url;params;queryParams;fragment;data;outlet;component;routeConfig;_resolve;_resolvedData;_routerState;_paramMap;_queryParamMap;_environmentInjector;resources;get title(){return this.data?.[Tc]}constructor(n,e,r,i,o,a,s,l,c,d){this.url=n,this.params=e,this.queryParams=r,this.fragment=i,this.data=o,this.outlet=a,this.component=s,this.routeConfig=l,this._resolve=c,this._environmentInjector=d}get root(){return this._routerState.root}get parent(){return this._routerState.parent(this)}get firstChild(){return this._routerState.firstChild(this)}get children(){return this._routerState.children(this)}get pathFromRoot(){return this._routerState.pathFromRoot(this)}get paramMap(){return this._paramMap??=Uo(this.params),this._paramMap}get queryParamMap(){return this._queryParamMap??=Uo(this.queryParams),this._queryParamMap}toString(){return`Route(url:'${this.url.map(r=>r.toString()).join(`/`)}', path:'${this.routeConfig?this.routeConfig.path:``}')`}};var Ec=class extends Ef{url;constructor(n,e){super(e),this.url=n,$v(this,e)}toString(){return qk(this._root)}};function $v(t,n){n.value._routerState=t,n.children.forEach(e=>$v(t,e))}function qk(t){let n=t.children.length>0?` { ${t.children.map(qk).join(`, `)} } `:``;return`${t.value}${n}`}function Ev(t){if(t.snapshot){let n=t.snapshot,e=t._futureSnapshot;t.snapshot=e,Ir(n.queryParams,e.queryParams)||t.queryParamsSubject.next(e.queryParams),n.fragment!==e.fragment&&t.fragmentSubject.next(e.fragment),Ir(n.params,e.params)||t.paramsSubject.next(e.params),KL(n.url,e.url)||t.urlSubject.next(e.url),Ir(n.data,e.data)||t.dataSubject.next(e.data)}else t.snapshot=t._futureSnapshot,t.dataSubject.next(t._futureSnapshot.data)}function Fv(t,n){let e=Ir(t.params,n.params)&&eV(t.url,n.url),r=!t.parent!=!n.parent;return e&&!r&&(!t.parent||Fv(t.parent,n.parent))}function Yk(t){return typeof t.title==`string`||t.title===null}var Kk=new g(``);var Gv=(()=>{class t{activated=null;get activatedComponentRef(){return this.activated}_activatedRoute=null;name=ge;activateEvents=new k;deactivateEvents=new k;attachEvents=new k;detachEvents=new k;routerOutletData=Mo();parentContexts=u(Hi);location=u(et);changeDetector=u(Ce);inputBinder=u(Ac,{optional:!0});supportsBindingToComponentInputs=!0;ngOnChanges(e){if(e.name){let{firstChange:r,previousValue:i}=e.name;if(r)return;this.isTrackedInParentContexts(i)&&(this.deactivate(),this.parentContexts.onChildOutletDestroyed(i)),this.initializeOutletWithName()}}ngOnDestroy(){this.isTrackedInParentContexts(this.name)&&this.parentContexts.onChildOutletDestroyed(this.name),this.inputBinder?.unsubscribeFromRouteData(this)}isTrackedInParentContexts(e){return this.parentContexts.getContext(e)?.outlet===this}ngOnInit(){this.initializeOutletWithName()}initializeOutletWithName(){if(this.parentContexts.onChildOutletCreated(this.name,this),this.activated)return;let e=this.parentContexts.getContext(this.name);e?.route&&(e.attachRef?this.attach(e.attachRef,e.route):this.activateWith(e.route,e.injector))}get isActivated(){return!!this.activated}get component(){if(!this.activated)throw new D(4012,!1);return this.activated.instance}get activatedRoute(){if(!this.activated)throw new D(4012,!1);return this._activatedRoute}get activatedRouteData(){return this._activatedRoute?this._activatedRoute.snapshot.data:{}}detach(){if(!this.activated)throw new D(4012,!1);this.location.detach();let e=this.activated;return this.activated=null,this._activatedRoute=null,this.detachEvents.emit(e.instance),e}attach(e,r){this.activated=e,this._activatedRoute=r,this.location.insert(e.hostView),this.inputBinder?.bindActivatedRouteToOutletComponent(this,this.location.injector),this.attachEvents.emit(e.instance)}deactivate(){if(this.activated){let e=this.component;this.activated.destroy(),this.activated=null,this._activatedRoute=null,this.deactivateEvents.emit(e)}}activateWith(e,r){if(this.isActivated)throw new D(4013,!1);this._activatedRoute=e;let i=this.location,a=e.snapshot.component,s=this.parentContexts.getOrCreateContext(this.name).children,l=new Pv(e,s,i.injector,this.routerOutletData);this.activated=i.createComponent(a,{index:i.length,injector:l,environmentInjector:r}),this.changeDetector.markForCheck(),this.inputBinder?.bindActivatedRouteToOutletComponent(this,this.location.injector),this.activateEvents.emit(this.activated.instance)}static ɵfac=function(r){return new(r||t)};static ɵdir=w({type:t,selectors:[[`router-outlet`]],inputs:{name:`name`,routerOutletData:[1,`routerOutletData`]},outputs:{activateEvents:`activate`,deactivateEvents:`deactivate`,attachEvents:`attach`,detachEvents:`detach`},exportAs:[`outlet`],features:[Se]})}return t})();var Pv=class{route;childContexts;parent;outletData;constructor(n,e,r,i){this.route=n,this.childContexts=e,this.parent=r,this.outletData=i}get(n,e){return n===ui?this.route:n===Hi?this.childContexts:n===Kk?this.outletData:this.parent.get(n,e)}};var Ac=new g(``);var Zk=(()=>{class t{options;feature;outletDataSubscriptions=new Map;outletSeenKeys=new Map;outletEffects=new Map;constructor(e,r=null){this.options=e,this.feature=r,this.options.queryParams??=!0}bindActivatedRouteToOutletComponent(e,r){this.unsubscribeFromRouteData(e),this.subscribeToRouteData(e,r)}unsubscribeFromRouteData(e){this.outletDataSubscriptions.get(e)?.unsubscribe(),this.outletDataSubscriptions.delete(e),this.outletSeenKeys.delete(e),this.outletEffects.get(e)?.forEach(r=>r.destroy()),this.outletEffects.delete(e)}subscribeToRouteData(e,r){let{activatedRoute:i}=e,o=[],a=[];if(this.feature?.createResourceOutletBindingEffects&&e.activatedComponentRef){let{handledKeys:l,createdEffects:c}=this.feature.createResourceOutletBindingEffects(e.activatedComponentRef,i);o.push(...c),a=l}o.length>0&&this.outletEffects.set(e,o);let s=tn([this.options.queryParams?i.queryParams:j({}),i.params,i.data]).pipe(Ct(([l,c,d],m)=>(d=b(b(b(b({},l),c),d),i.resources),m===0?j(d):Promise.resolve(d)))).subscribe(l=>{if(!e.isActivated||!e.activatedComponentRef||e.activatedRoute!==i||i.component===null){this.unsubscribeFromRouteData(e);return}let c=fb(i.component);if(!c){this.unsubscribeFromRouteData(e);return}let d=this.outletSeenKeys.get(e);d||(d=new Set,this.outletSeenKeys.set(e,d));for(let p of Object.keys(l))d.add(p);let m=this.options.unmatchedInputBehavior??`alwaysUndefined`;for(let{templateName:p}of c.inputs){if(a.includes(p))continue;let f=l[p];(f!==void 0||m===`alwaysUndefined`||d.has(p))&&e.activatedComponentRef.setInput(p,f)}});this.outletDataSubscriptions.set(e,s)}static ɵfac=function(r){So()};static ɵprov=q({token:t,factory:t.ɵfac})}return t})();var Wv=(()=>{class t{static ɵfac=function(r){return new(r||t)};static ɵcmp=F({type:t,selectors:[[`ng-component`]],exportAs:[`emptyRouterOutlet`],decls:1,vars:0,template:function(r,i){r&1&&we(0,`router-outlet`)},dependencies:[Gv],encapsulation:2,changeDetection:1})}return t})();function qv(t){let n=t.children&&t.children.map(qv),e=n?K(b({},t),{children:n}):b({},t);return!e.component&&!e.loadComponent&&(n||e.loadChildren)&&e.outlet&&e.outlet!==ge&&(e.component=Wv),e}var us=`imperative`;var xt=(function(t){return t[t.NavigationStart=0]=`NavigationStart`,t[t.NavigationEnd=1]=`NavigationEnd`,t[t.NavigationCancel=2]=`NavigationCancel`,t[t.NavigationError=3]=`NavigationError`,t[t.RoutesRecognized=4]=`RoutesRecognized`,t[t.ResolveStart=5]=`ResolveStart`,t[t.ResolveEnd=6]=`ResolveEnd`,t[t.GuardsCheckStart=7]=`GuardsCheckStart`,t[t.GuardsCheckEnd=8]=`GuardsCheckEnd`,t[t.RouteConfigLoadStart=9]=`RouteConfigLoadStart`,t[t.RouteConfigLoadEnd=10]=`RouteConfigLoadEnd`,t[t.ChildActivationStart=11]=`ChildActivationStart`,t[t.ChildActivationEnd=12]=`ChildActivationEnd`,t[t.ActivationStart=13]=`ActivationStart`,t[t.ActivationEnd=14]=`ActivationEnd`,t[t.Scroll=15]=`Scroll`,t[t.NavigationSkipped=16]=`NavigationSkipped`,t})(xt||{});var _n=class{id;url;constructor(n,e){this.id=n,this.url=e}};var Ui=class extends _n{type=xt.NavigationStart;navigationTrigger;restoredState;constructor(n,e,r=`imperative`,i=null){super(n,e),this.navigationTrigger=r,this.restoredState=i}toString(){return`NavigationStart(id: ${this.id}, url: '${this.url}')`}};var Vn=class extends _n{urlAfterRedirects;type=xt.NavigationEnd;constructor(n,e,r){super(n,e),this.urlAfterRedirects=r}toString(){return`NavigationEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}')`}};var Lt=(function(t){return t[t.Redirect=0]=`Redirect`,t[t.SupersededByNewNavigation=1]=`SupersededByNewNavigation`,t[t.NoDataFromResolver=2]=`NoDataFromResolver`,t[t.GuardRejected=3]=`GuardRejected`,t[t.Aborted=4]=`Aborted`,t})(Lt||{});var ps=(function(t){return t[t.IgnoredSameUrlNavigation=0]=`IgnoredSameUrlNavigation`,t[t.IgnoredByUrlHandlingStrategy=1]=`IgnoredByUrlHandlingStrategy`,t})(ps||{});var Ln=class extends _n{reason;code;type=xt.NavigationCancel;constructor(n,e,r,i){super(n,e),this.reason=r,this.code=i}toString(){return`NavigationCancel(id: ${this.id}, url: '${this.url}')`}};function Qk(t){return t instanceof Ln&&(t.code===Lt.Redirect||t.code===Lt.SupersededByNewNavigation)}var Nr=class extends _n{reason;code;type=xt.NavigationSkipped;constructor(n,e,r,i){super(n,e),this.reason=r,this.code=i}};var $o=class extends _n{error;target;type=xt.NavigationError;constructor(n,e,r,i){super(n,e),this.error=r,this.target=i}toString(){return`NavigationError(id: ${this.id}, url: '${this.url}', error: ${this.error})`}};var kc=class extends _n{urlAfterRedirects;state;type=xt.RoutesRecognized;constructor(n,e,r,i){super(n,e),this.urlAfterRedirects=r,this.state=i}toString(){return`RoutesRecognized(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}};var kf=class extends _n{urlAfterRedirects;state;type=xt.GuardsCheckStart;constructor(n,e,r,i){super(n,e),this.urlAfterRedirects=r,this.state=i}toString(){return`GuardsCheckStart(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}};var Mf=class extends _n{urlAfterRedirects;state;shouldActivate;type=xt.GuardsCheckEnd;constructor(n,e,r,i,o){super(n,e),this.urlAfterRedirects=r,this.state=i,this.shouldActivate=o}toString(){return`GuardsCheckEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state}, shouldActivate: ${this.shouldActivate})`}};var If=class extends _n{urlAfterRedirects;state;type=xt.ResolveStart;constructor(n,e,r,i){super(n,e),this.urlAfterRedirects=r,this.state=i}toString(){return`ResolveStart(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}};var Nf=class extends _n{urlAfterRedirects;state;type=xt.ResolveEnd;constructor(n,e,r,i){super(n,e),this.urlAfterRedirects=r,this.state=i}toString(){return`ResolveEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}};var Tf=class{route;type=xt.RouteConfigLoadStart;constructor(n){this.route=n}toString(){return`RouteConfigLoadStart(path: ${this.route.path})`}};var Af=class{route;type=xt.RouteConfigLoadEnd;constructor(n){this.route=n}toString(){return`RouteConfigLoadEnd(path: ${this.route.path})`}};var Rf=class{snapshot;type=xt.ChildActivationStart;constructor(n){this.snapshot=n}toString(){return`ChildActivationStart(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||``}')`}};var Of=class{snapshot;type=xt.ChildActivationEnd;constructor(n){this.snapshot=n}toString(){return`ChildActivationEnd(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||``}')`}};var Ff=class{snapshot;type=xt.ActivationStart;constructor(n){this.snapshot=n}toString(){return`ActivationStart(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||``}')`}};var Pf=class{snapshot;type=xt.ActivationEnd;constructor(n){this.snapshot=n}toString(){return`ActivationEnd(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||``}')`}};var hs=class{routerEvent;position;anchor;scrollBehavior;type=xt.Scroll;constructor(n,e,r,i){this.routerEvent=n,this.position=e,this.anchor=r,this.scrollBehavior=i}toString(){let n=this.position?`${this.position[0]}, ${this.position[1]}`:null;return`Scroll(anchor: '${this.anchor}', position: '${n}')`}};var gs=class{};var Mc=class{};var bs=class{url;navigationBehaviorOptions;constructor(n,e){this.url=n,this.navigationBehaviorOptions=e}};function xV(t){return!(t instanceof gs)&&!(t instanceof bs)&&!(t instanceof Mc)}function DV(t,n,e){let r=new Set;return{newlyCreatedRoutes:r,state:new Sc(Ic(t,n._root,e?e._root:void 0,r),n)}}function Ic(t,n,e,r){if(e&&t.shouldReuseRoute(n.value,e.value.snapshot)){let i=e.value;i._setPending(n.value);return new Jt(i,SV(t,n,e,r))}else{if(t.shouldAttach(n.value)){let a=t.retrieve(n.value);if(a!==null){let s=a.route;return s.value._setPending(n.value),s.children=n.children.map(l=>Ic(t,l,void 0,r)),s}}let i=EV(n.value);i._setPending(n.value),r.add(i);return new Jt(i,n.children.map(a=>Ic(t,a,void 0,r)))}}function SV(t,n,e,r){return n.children.map(i=>{for(let o of e.children)if(t.shouldReuseRoute(i.value,o.value.snapshot))return Ic(t,i,o,r);return Ic(t,i,void 0,r)})}function EV(t){return new ui(new Qe(t.url),new Qe(t.params),new Qe(t.queryParams),new Qe(t.fragment),new Qe(t.data),t.outlet,t.component,t)}var Go=class t extends Error{redirectTo;navigationBehaviorOptions;constructor(n,e){super(),this.redirectTo=n,this.navigationBehaviorOptions=e,Object.setPrototypeOf(this,t.prototype)}};var Xk=`ngNavigationCancelingError`;function wc(t,n){let{redirectTo:e,navigationBehaviorOptions:r}=zi(n)?{redirectTo:n,navigationBehaviorOptions:void 0}:n,i=Jk(!1,Lt.Redirect);return i.url=e,i.navigationBehaviorOptions=r,i}function Jk(t,n){let e=new Error(`NavigationCancelingError: ${t||``}`);return e[Xk]=!0,e.cancellationCode=n,e}function kV(t){return eM(t)&&zi(t.url)}function eM(t){return!!t&&t[Xk]}var Lv=class{routeReuseStrategy;futureState;currState;forwardEvent;inputBindingEnabled;constructor(n,e,r,i,o){this.routeReuseStrategy=n,this.futureState=e,this.currState=r,this.forwardEvent=i,this.inputBindingEnabled=o}activate(n){let e=this.futureState._root,r=this.currState?this.currState._root:null;this.deactivateChildRoutes(e,r,n),Ev(this.futureState.root),this.activateChildRoutes(e,r,n)}deactivateChildRoutes(n,e,r){let i=cs(e);n.children.forEach(o=>{let a=o.value.outlet;this.deactivateRoutes(o,i[a],r),delete i[a]}),Object.values(i).forEach(o=>{this.deactivateRouteAndItsChildren(o,r)})}deactivateRoutes(n,e,r){let i=n.value,o=e?e.value:null;if(i===o)if(i.component){let a=r.getContext(i.outlet);a&&this.deactivateChildRoutes(n,e,a.children)}else this.deactivateChildRoutes(n,e,r);else o&&this.deactivateRouteAndItsChildren(e,r)}deactivateRouteAndItsChildren(n,e){n.value.component&&this.routeReuseStrategy.shouldDetach(n.value.snapshot)?this.detachAndStoreRouteSubtree(n,e):this.deactivateRouteAndOutlet(n,e)}detachAndStoreRouteSubtree(n,e){let r=e.getContext(n.value.outlet),i=r&&n.value.component?r.children:e,o=cs(n);for(let a of Object.values(o))this.deactivateRouteAndItsChildren(a,i);if(r&&r.outlet){let a=r.outlet.detach(),s=r.children.contexts;r.resetChildren(),this.routeReuseStrategy.store(n.value.snapshot,{componentRef:a,route:n,contexts:s})}}deactivateRouteAndOutlet(n,e){let r=e.getContext(n.value.outlet),i=r&&n.value.component?r.children:e,o=cs(n);for(let a of Object.values(o))this.deactivateRouteAndItsChildren(a,i);r&&(r.outlet&&(r.outlet.deactivate(),r.children.onOutletDeactivated()),r.attachRef=null,r.route=null),n.value._localInjector?.destroy()}activateChildRoutes(n,e,r){let i=cs(e);n.children.forEach(o=>{this.activateRoutes(o,i[o.value.outlet],r),this.forwardEvent(new Pf(o.value.snapshot))}),n.children.length&&this.forwardEvent(new Of(n.value.snapshot))}activateRoutes(n,e,r){let i=n.value,o=e?e.value:null;if(Ev(i),i===o)if(i.component){let a=r.getOrCreateContext(i.outlet);this.activateChildRoutes(n,e,a.children)}else this.activateChildRoutes(n,e,r);else if(i.component){let a=r.getOrCreateContext(i.outlet);if(this.routeReuseStrategy.shouldAttach(i.snapshot)){let s=this.routeReuseStrategy.retrieve(i.snapshot);this.routeReuseStrategy.store(i.snapshot,null),a.children.onOutletReAttached(s.contexts),a.attachRef=s.componentRef,a.route=s.route.value,a.outlet&&a.outlet.attach(s.componentRef,s.route.value),Ev(s.route.value),this.activateChildRoutes(n,null,a.children)}else a.attachRef=null,a.route=i,a.outlet&&a.outlet.activateWith(i,a.injector),this.activateChildRoutes(n,null,a.children)}else this.activateChildRoutes(n,null,r)}};var Lf=class{path;route;constructor(n){this.path=n,this.route=this.path[this.path.length-1]}};var ms=class{component;route;constructor(n,e){this.component=n,this.route=e}};function MV(t,n,e){let r=t._root;return _c(r,n?n._root:null,e,[r.value])}function IV(t){let n=t.routeConfig?t.routeConfig.canActivateChild:null;return!n||n.length===0?null:{node:t,guards:n}}function vs(t,n){let e=Symbol(),r=n.get(t,e);return r===e?typeof t==`function`&&!Tp(t)?t:n.get(t):r}function _c(t,n,e,r,i={canDeactivateChecks:[],canActivateChecks:[]}){let o=cs(n);return t.children.forEach(a=>{NV(a,o[a.value.outlet],e,r.concat([a.value]),i),delete o[a.value.outlet]}),Object.entries(o).forEach(([a,s])=>xc(s,e.getContext(a),e,i)),i}function NV(t,n,e,r,i={canDeactivateChecks:[],canActivateChecks:[]}){let o=t.value,a=n?n.value:null,s=e?e.getContext(t.value.outlet):null;if(a&&o.routeConfig===a.routeConfig){let l=TV(a,o,o.routeConfig.runGuardsAndResolvers);l?i.canActivateChecks.push(new Lf(r)):(o.data=a.data,o._resolvedData=a._resolvedData),o.component?_c(t,n,s?s.children:null,r,i):_c(t,n,e,r,i),l&&s&&s.outlet&&s.outlet.isActivated&&i.canDeactivateChecks.push(new ms(s.outlet.component,a))}else a&&xc(n,s,e,i),i.canActivateChecks.push(new Lf(r)),o.component?_c(t,null,s?s.children:null,r,i):_c(t,null,e,r,i);return i}function TV(t,n,e){if(typeof e==`function`)return ht(n._environmentInjector,()=>e(t,n));switch(e){case`pathParamsChange`:return!Ho(t.url,n.url);case`pathParamsOrQueryParamsChange`:return!Ho(t.url,n.url)||!Ir(t.queryParams,n.queryParams);case`always`:return!0;case`paramsOrQueryParamsChange`:return!Fv(t,n)||!Ir(t.queryParams,n.queryParams);default:return!Fv(t,n)}}function xc(t,n,e,r){let i=cs(t),o=t.value;Object.entries(i).forEach(([a,s])=>{o.component?n?xc(s,n.children.getContext(a),n.children,r):xc(s,null,null,r):xc(s,e?e.getContext(a):null,e,r)}),o.component?n&&n.outlet&&n.outlet.isActivated?r.canDeactivateChecks.push(new ms(n.outlet.component,o)):r.canDeactivateChecks.push(new ms(null,o)):r.canDeactivateChecks.push(new ms(null,o))}function Rc(t){return typeof t==`function`}function AV(t){return typeof t==`boolean`}function RV(t){return t&&Rc(t.canLoad)}function OV(t){return t&&Rc(t.canActivate)}function FV(t){return t&&Rc(t.canActivateChild)}function PV(t){return t&&Rc(t.canDeactivate)}function LV(t){return t&&Rc(t.canMatch)}function tM(t){return t instanceof eo||t?.name===`EmptyError`}var gf=Symbol(`INITIAL_VALUE`);function ys(){return Ct(t=>tn(t.map(n=>n.pipe(it(1),_t(gf)))).pipe(oe(n=>{for(let e of n)if(e!==!0){if(e===gf)return gf;if(e===!1||VV(e))return e}return!0}),Ee(n=>n!==gf),it(1)))}function VV(t){return zi(t)||t instanceof Go}function nM(t){return new ie(n=>{if(t.aborted){n.next(),n.complete();return}let e=()=>{n.next(),n.complete()};return t.addEventListener(`abort`,e),()=>t.removeEventListener(`abort`,e)})}function rM(t){return De(nM(t))}function BV(t){return It(n=>{let{targetSnapshot:e,currentSnapshot:r,guards:{canActivateChecks:i,canDeactivateChecks:o}}=n;return o.length===0&&i.length===0?j(K(b({},n),{guardsResult:!0})):jV(o,e,r).pipe(It(a=>a&&AV(a)?zV(e,i,t):j(a)),oe(a=>K(b({},n),{guardsResult:a})))})}function jV(t,n,e){return Ye(t).pipe(It(r=>WV(r.component,r.route,e,n)),Fr(r=>r!==!0,!0))}function zV(t,n,e){return Ye(n).pipe(wi(r=>_i(UV(r.route.parent,e),HV(r.route,e),GV(t,r.path),$V(t,r.route))),Fr(r=>r!==!0,!0))}function HV(t,n){return t!==null&&n&&n(new Ff(t)),j(!0)}function UV(t,n){return t!==null&&n&&n(new Rf(t)),j(!0)}function $V(t,n){let e=n.routeConfig?n.routeConfig.canActivate:null;if(!e||e.length===0)return j(!0);return j(e.map(i=>zn(()=>{let o=n._environmentInjector,a=vs(i,o);return Wo(OV(a)?a.canActivate(n,t):ht(o,()=>a(n,t))).pipe(Fr())}))).pipe(ys())}function GV(t,n){let e=n[n.length-1];return j(n.slice(0,n.length-1).reverse().map(o=>IV(o)).filter(o=>o!==null).map(o=>zn(()=>{return j(o.guards.map(s=>{let l=o.node._environmentInjector,c=vs(s,l);return Wo(FV(c)?c.canActivateChild(e,t):ht(l,()=>c(e,t))).pipe(Fr())})).pipe(ys())}))).pipe(ys())}function WV(t,n,e,r){let i=n&&n.routeConfig?n.routeConfig.canDeactivate:null;if(!i||i.length===0)return j(!0);return j(i.map(a=>{let s=n._environmentInjector,l=vs(a,s);return Wo(PV(l)?l.canDeactivate(t,n,e,r):ht(s,()=>l(t,n,e,r))).pipe(Fr())})).pipe(ys())}function qV(t,n,e,r,i){let o=n.canLoad;if(o===void 0||o.length===0)return j(!0);return j(o.map(s=>{let l=vs(s,t),d=Wo(RV(l)?l.canLoad(n,e):ht(t,()=>l(n,e)));return i?d.pipe(rM(i)):d})).pipe(ys(),iM(r))}function iM(t){return Gc(St(n=>{if(typeof n!=`boolean`)throw wc(t,n)}),oe(n=>n===!0))}function YV(t,n,e,r,i,o){let a=n.canMatch;if(!a||a.length===0)return j(!0);return j(a.map(l=>{let c=vs(l,t);return Wo(LV(c)?c.canMatch(n,e,i):ht(t,()=>c(n,e,i))).pipe(rM(o))})).pipe(ys(),iM(r))}var Mr=class t extends Error{name=`NoMatch`;segmentGroup;constructor(n){super(),this.segmentGroup=n||null,Object.setPrototypeOf(this,t.prototype)}};var Nc=class t extends Error{urlTree;name=`AbsoluteRedirect`;constructor(n){super(),this.urlTree=n,Object.setPrototypeOf(this,t.prototype)}};function KV(t){throw new D(4e3,!1)}function ZV(t){throw Jk(!1,Lt.GuardRejected)}var Vv=class{urlSerializer;urlTree;constructor(n,e){this.urlSerializer=n,this.urlTree=e}lineralizeSegments(n,e){return Ie(this,null,function*(){let r=[],i=e.root;for(;;){if(r=r.concat(i.segments),i.numberOfChildren===0)return r;if(i.numberOfChildren>1||!i.children[ge])throw KV(`${n.redirectTo}`);i=i.children[ge]}})}applyRedirectCommands(n,e,r,i,o){return Ie(this,null,function*(){let a=yield QV(e,i,o);if(a instanceof vn)throw new Nc(a);let s=this.applyRedirectCreateUrlTree(a,this.urlSerializer.parse(a),n,r);if(a[0]===`/`)throw new Nc(s);return s})}applyRedirectCreateUrlTree(n,e,r,i){return new vn(this.createSegmentGroup(n,e.root,r,i),this.createQueryParams(e.queryParams,this.urlTree.queryParams),e.fragment)}createQueryParams(n,e){let r={};return Object.entries(n).forEach(([i,o])=>{if(typeof o==`string`&&o[0]===`:`){let s=o.substring(1);r[i]=e[s]}else r[i]=o}),r}createSegmentGroup(n,e,r,i){let o=this.createSegments(n,e.segments,r,i),a=Object.create(null);return Object.entries(e.children).forEach(([s,l])=>{a[s]=this.createSegmentGroup(n,l,r,i)}),new Ve(o,a)}createSegments(n,e,r,i){return e.map(o=>o.path[0]===`:`?this.findPosParam(n,o,i):this.findOrReturn(o,r))}findPosParam(n,e,r){let i=r[e.path.substring(1)];if(!i)throw new D(4001,!1);return i}findOrReturn(n,e){let r=0;for(let i of e){if(i.path===n.path)return e.splice(r),i;r++}return n}};function QV(t,n,e){if(typeof t==`string`)return Promise.resolve(t);let r=t;return _f(Wo(ht(e,()=>r(n))))}function XV(t,n){return t.providers&&!t._injector&&(t._injector=Ma(t.providers,n,`Route: ${t.path}`)),t._injector??n}function ir(t){return t.outlet||ge}function JV(t,n){let e=t.filter(r=>ir(r)===n);return e.push(...t.filter(r=>ir(r)!==n)),e}var Bv={matched:!1,consumedSegments:[],remainingSegments:[],parameters:{},positionalParamSegments:{}};function oM(t){return{routeConfig:t.routeConfig,url:t.url,params:t.params,queryParams:t.queryParams,fragment:t.fragment,data:t.data,outlet:t.outlet,title:t.title,paramMap:t.paramMap,queryParamMap:t.queryParamMap}}function eB(t,n,e,r,i,o,a){let s=aM(t,n,e);if(!s.matched)return j(s);let l=oM(o(s));return r=XV(n,r),YV(r,n,e,i,l,a).pipe(oe(c=>c===!0?s:b({},Bv)))}function aM(t,n,e){if(n.path===``)return n.pathMatch===`full`&&(t.hasChildren()||e.length>0)?b({},Bv):{matched:!0,consumedSegments:[],remainingSegments:e,parameters:{},positionalParamSegments:{}};let i=(n.matcher||Ik)(e,t,n);if(!i)return b({},Bv);let o={};Object.entries(i.posParams??{}).forEach(([s,l])=>{o[s]=l.path});let a=i.consumed.length>0?b(b({},o),i.consumed[i.consumed.length-1].parameters):o;return{matched:!0,consumedSegments:i.consumed,remainingSegments:e.slice(i.consumed.length),parameters:a,positionalParamSegments:i.posParams??{}}}function kk(t,n,e,r,i){return e.length>0&&rB(t,e,r,i)?{segmentGroup:new Ve(n,nB(r,new Ve(e,t.children))),slicedSegments:[]}:e.length===0&&iB(t,e,r)?{segmentGroup:new Ve(t.segments,tB(t,e,r,t.children)),slicedSegments:e}:{segmentGroup:new Ve(t.segments,t.children),slicedSegments:e}}function tB(t,n,e,r){let i={};for(let o of e)if(Bf(t,n,o)&&!r[ir(o)]){let a=new Ve([],{});i[ir(o)]=a}return b(b({},r),i)}function nB(t,n){let e={};e[ge]=n;for(let r of t)if(r.path===``&&ir(r)!==ge){let i=new Ve([],{});e[ir(r)]=i}return e}function rB(t,n,e,r){return e.some(i=>!Bf(t,n,i)||!(ir(i)!==ge)?!1:!(r!==void 0&&ir(i)===r))}function iB(t,n,e){return e.some(r=>Bf(t,n,r))}function Bf(t,n,e){return(t.hasChildren()||n.length>0)&&e.pathMatch===`full`?!1:e.path===``}function oB(t,n,e){return n.length===0&&!t.hasChildren()}var jv=class{};function aB(t,n,e,r,i,o,a,s){return Ie(this,null,function*(){return new zv(t,n,e,r,i,a,o,s).recognize()})}var sB=31;var zv=class{injector;configLoader;rootComponentType;config;urlTree;paramsInheritanceStrategy;urlSerializer;abortSignal;applyRedirects;absoluteRedirectCount=0;allowRedirects=!0;queryParams;constructor(n,e,r,i,o,a,s,l){this.injector=n,this.configLoader=e,this.rootComponentType=r,this.config=i,this.urlTree=o,this.paramsInheritanceStrategy=a,this.urlSerializer=s,this.abortSignal=l,this.applyRedirects=new Vv(this.urlSerializer,this.urlTree),this.queryParams=Object.freeze(b({},this.urlTree.queryParams))}noMatchError(n){return new D(4002,`'${n.segmentGroup}'`)}recognize(){return Ie(this,null,function*(){let n=kk(this.urlTree.root,[],[],this.config).segmentGroup,{children:e,rootSnapshot:r}=yield this.match(n),o=new Ec(``,new Jt(r,e)),a=zk(r,[],this.urlTree.queryParams,this.urlTree.fragment);return a.queryParams=this.urlTree.queryParams,o.url=this.urlSerializer.serialize(a),{state:o,tree:a}})}match(n){return Ie(this,null,function*(){let e=new fs([],Object.freeze({}),this.queryParams,this.urlTree.fragment,Object.freeze({}),ge,this.rootComponentType,null,{},this.injector);try{return{children:yield this.processSegmentGroup(this.injector,this.config,n,ge,e),rootSnapshot:e}}catch(r){if(r instanceof Nc)return this.absoluteRedirectCount++,this.absoluteRedirectCount>sB&&(this.allowRedirects=!1),this.urlTree=r.urlTree,this.queryParams=Object.freeze(b({},this.urlTree.queryParams)),this.match(r.urlTree.root);throw r instanceof Mr?this.noMatchError(r):r}})}processSegmentGroup(n,e,r,i,o){return Ie(this,null,function*(){if(r.segments.length===0&&r.hasChildren())return this.processChildren(n,e,r,o);let a=yield this.processSegment(n,e,r,r.segments,i,!0,o);return a instanceof Jt?[a]:[]})}processChildren(n,e,r,i){return Ie(this,null,function*(){let o=[];for(let l of Object.keys(r.children))l===`primary`?o.unshift(l):o.push(l);let a=[];for(let l of o){let c=r.children[l],d=JV(e,l),m=yield this.processSegment(n,d,c,c.segments,l,!0,i);m instanceof Jt&&a.push(m)}let s=sM(a);return lB(s),s})}processSegment(n,e,r,i,o,a,s){return Ie(this,null,function*(){for(let l of e)try{return yield this.processSegmentAgainstRoute(l._injector??n,e,l,r,i,o,a,s)}catch(c){if(c instanceof Mr||tM(c))continue;throw c}if(oB(r,i))return new jv;throw new Mr(r)})}processSegmentAgainstRoute(n,e,r,i,o,a,s,l){return Ie(this,null,function*(){if(ir(r)!==a&&(a===ge||!Bf(i,o,r)||!r.children?.length&&!r.loadChildren||o.length===0&&!i.hasChildren()))throw new Mr(i);if(r.redirectTo===void 0)return this.matchSegmentAgainstRoute(n,i,r,o,a,l);if(this.allowRedirects&&s)return this.expandSegmentAgainstRouteUsingRedirect(n,i,e,r,o,a,l);throw new Mr(i)})}expandSegmentAgainstRouteUsingRedirect(n,e,r,i,o,a,s){return Ie(this,null,function*(){let{matched:l,parameters:c,consumedSegments:d,positionalParamSegments:m,remainingSegments:p}=aM(e,i,o);if(!l)throw new Mr(e);let f=this.createSnapshot(n,i,o,c,s);if(this.abortSignal.aborted)throw new Error(this.abortSignal.reason);let h=yield this.applyRedirects.applyRedirectCommands(d,i.redirectTo,m,oM(f),n),v=yield this.applyRedirects.lineralizeSegments(i,h);return this.processSegment(n,r,e,v.concat(p),a,!1,s)})}createSnapshot(n,e,r,i,o){let a=new fs(r,i,this.queryParams,this.urlTree.fragment,uB(e),ir(e),e.component??e._loadedComponent??null,e,mB(e),n),s=Uv(a,o,this.paramsInheritanceStrategy);return a.params=s.params,a.data=s.data,a}matchSegmentAgainstRoute(n,e,r,i,o,a){return Ie(this,null,function*(){if(this.abortSignal.aborted)throw new Error(this.abortSignal.reason);let s=pe=>this.createSnapshot(n,r,pe.consumedSegments,pe.parameters,a),l=yield _f(eB(e,r,i,n,this.urlSerializer,s,this.abortSignal));if(r.path===`**`&&(e.children={}),!l?.matched)throw new Mr(e);n=r._injector??n;let{routes:c}=yield this.getChildConfig(n,r,i),d=r._loadedInjector??n,{parameters:m,consumedSegments:p,remainingSegments:f}=l,h=this.createSnapshot(n,r,p,m,a),{segmentGroup:v,slicedSegments:M}=kk(e,p,f,c,o),V=ir(r)===o;if(V&&M.length===0&&v.hasChildren())return new Jt(h,yield this.processChildren(d,c,v,h));if(V&&c.length===0&&M.length===0)return new Jt(h,[]);let O=yield this.processSegment(d,c,v,M,V?ge:o,!0,h);if(!V&&!(O instanceof Jt))throw new Mr(e);return new Jt(h,O instanceof Jt?[O]:[])})}getChildConfig(n,e,r){return Ie(this,null,function*(){if(e.children)return{routes:e.children,injector:n};if(e.loadChildren){if(e._loadedRoutes!==void 0){let o=e._loadedNgModuleFactory;return o&&!e._loadedInjector&&(e._loadedInjector=o.create(n).injector),{routes:e._loadedRoutes,injector:e._loadedInjector}}if(this.abortSignal.aborted)throw new Error(this.abortSignal.reason);if(yield _f(qV(n,e,r,this.urlSerializer,this.abortSignal))){let o=yield this.configLoader.loadChildren(n,e);return e._loadedRoutes=o.routes,e._loadedInjector=o.injector,e._loadedNgModuleFactory=o.factory,o}throw ZV(e)}return{routes:[],injector:n}})}};function lB(t){t.sort((n,e)=>n.value.outlet===ge?-1:e.value.outlet===ge?1:n.value.outlet.localeCompare(e.value.outlet))}function cB(t){let n=t.value.routeConfig;return n&&n.path===``}function sM(t){let n=[],e=new Set;for(let i of t){if(!cB(i)){n.push(i);continue}let o=n.find(a=>i.value.routeConfig===a.value.routeConfig);o!==void 0?(o.children.push(...i.children),e.add(o)):n.push(i)}for(let i of e){let o=sM(i.children);n.push(new Jt(i.value,o))}let r=n.filter(i=>!e.has(i));return dB(r),r}function dB(t){let n=Object.create(null);t.forEach(e=>{let r=n[e.value.outlet];if(r){r.url.map(a=>a.toString()).join(`/`);e.value.url.map(a=>a.toString()).join(`/`);throw new D(4006,!1)}n[e.value.outlet]=e.value})}function uB(t){return t.data||{}}function mB(t){return t.resolve||{}}function fB(t,n,e,r,i,o,a){return It(s=>Ie(null,null,function*(){let{state:l,tree:c}=yield aB(t,n,e,r,s.extractedUrl,i,o,a);return K(b({},s),{targetSnapshot:l,urlAfterRedirects:c})}))}function pB(t){return It(n=>{let{targetSnapshot:e,guards:{canActivateChecks:r}}=n;if(!r.length)return j(n);let i=new Set(r.map(s=>s.route)),o=new Set;for(let s of i)if(!o.has(s))for(let l of lM(s))o.add(l);let a=0;return Ye(o).pipe(wi(s=>i.has(s)?hB(s,e,t):(s.data=Uv(s,s.parent,t).resolve,j(void 0))),St(()=>a++),vd(1),It(s=>a===o.size?j(n):ct))})}function lM(t){return[t,...t.children.map(e=>lM(e)).flat()]}function hB(t,n,e){let r=t.routeConfig,i=t._resolve;return r?.title!==void 0&&!Yk(r)&&(i[Tc]=r.title),zn(()=>(t.data=Uv(t,t.parent,e).resolve,gB(i,t,n).pipe(oe(o=>(t._resolvedData=o,t.data=b(b({},t.data),o),null)))))}function gB(t,n,e){let r=Mv(t);if(r.length===0)return j({});let i={};return Ye(r).pipe(It(o=>bB(t[o],n,e).pipe(Fr(),St(a=>{if(a instanceof Go)throw wc(new di,a);i[o]=a}))),vd(1),oe(()=>i),Ci(o=>tM(o)?ct:Ts(o)))}function bB(t,n,e){let r=n._environmentInjector,i=vs(t,r);return Wo(i.resolve?i.resolve(n,e):ht(r,()=>i(n,e)))}var Yv=new g(``);function Hv(t){return Ct(n=>{let e=t(n);return e?Ye(e).pipe(oe(()=>n)):j(n)})}var Kv=(()=>{class t{buildTitle(e){let r,i=e.root;for(;i!==void 0;)r=this.getResolvedTitleForRoute(i)??r,i=i.children.find(o=>o.outlet===ge);return r}getResolvedTitleForRoute(e){return e.data[Tc]}static ɵfac=function(r){return new(r||t)};static ɵprov=S({token:t,factory:()=>u(cM)})}return t})();var cM=(()=>{class t extends Kv{title;constructor(e){super(),this.title=e}updateTitle(e){let r=this.buildTitle(e);r!==void 0&&this.title.setTitle(r)}static ɵfac=function(r){return new(r||t)(P(F0))};static ɵprov=q({token:t,factory:t.ɵfac,providedIn:`root`})}return t})();var Gi=new g(``,{factory:()=>({})});var _s=new g(``);var jf=(()=>{class t{componentLoaders=new WeakMap;childrenLoaders=new WeakMap;onLoadStartListener;onLoadEndListener;compiler=u(eb);loadComponent(e,r){return Ie(this,null,function*(){if(this.componentLoaders.get(r))return this.componentLoaders.get(r);if(r._loadedComponent)return Promise.resolve(r._loadedComponent);this.onLoadStartListener&&this.onLoadStartListener(r);let i=Ie(this,null,function*(){try{let a=yield uM(lb(yield Tk(ht(e,()=>r.loadComponent()))));return this.onLoadEndListener&&this.onLoadEndListener(r),r._loadedComponent=a,a}finally{this.componentLoaders.delete(r)}});return this.componentLoaders.set(r,i),i})}loadChildren(e,r){if(this.childrenLoaders.get(r))return this.childrenLoaders.get(r);if(r._loadedRoutes)return Promise.resolve({routes:r._loadedRoutes,injector:r._loadedInjector});this.onLoadStartListener&&this.onLoadStartListener(r);let i=Ie(this,null,function*(){try{let o=yield dM(r,this.compiler,e,this.onLoadEndListener);return r._loadedRoutes=o.routes,r._loadedInjector=o.injector,r._loadedNgModuleFactory=o.factory,o}finally{this.childrenLoaders.delete(r)}});return this.childrenLoaders.set(r,i),i}static ɵfac=function(r){return new(r||t)};static ɵprov=S({token:t,factory:t.ɵfac})}return t})();function dM(t,n,e,r){return Ie(this,null,function*(){let o=yield uM(lb(yield Tk(ht(e,()=>t.loadChildren())))),a;o instanceof Fu||Array.isArray(o)?a=o:a=yield n.compileModuleAsync(o),r&&r(t);let s,l,d;return Array.isArray(a)?l=a:(s=a.create(e).injector,d=a,l=s.get(_s,[],{optional:!0,self:!0}).flat()),{routes:l.map(qv),injector:s,factory:d}})}function uM(t){return Ie(this,null,function*(){return t})}var zf=(()=>{class t{static ɵfac=function(r){return new(r||t)};static ɵprov=S({token:t,factory:()=>u(yB)})}return t})();var yB=(()=>{class t{shouldProcessUrl(e){return!0}extract(e){return e}merge(e,r){return e}static ɵfac=function(r){return new(r||t)};static ɵprov=S({token:t,factory:t.ɵfac})}return t})();var Zv=new g(``);var Qv=new g(``);function mM(t,n,e,r){let i=t.get(Qv),o=t.get(z);if(r){i.skipNextTransition=!1;return}if(!o.startViewTransition||i.skipNextTransition)return i.skipNextTransition=!1,new Promise(d=>setTimeout(d));let a,s=new Promise(d=>{a=d}),l=o.startViewTransition(()=>(a(),vB(t)));l.updateCallbackDone.catch(d=>{}),l.ready.catch(d=>{}),l.finished.catch(d=>{});let{onViewTransitionCreated:c}=i;return c&&ht(t,()=>c({transition:l,from:n,to:e})),s}function vB(t){return new Promise(n=>{Ge({read:()=>setTimeout(n)},{injector:t})})}var _B=()=>{};var Xv=new g(``);var Hf=(()=>{class t{currentNavigation=L(null,{equal:()=>!1});currentTransition=null;lastSuccessfulNavigation=L(null);events=new _;transitionAbortWithErrorSubject=new _;configLoader=u(jf);environmentInjector=u(Ue);destroyRef=u(ut);urlSerializer=u($i);rootContexts=u(Hi);location=u(br);inputBindingEnabled=u(Ac,{optional:!0})!==null;titleStrategy=u(Kv);options=u(Gi,{optional:!0})||{};paramsInheritanceStrategy=this.options.paramsInheritanceStrategy||wV;urlHandlingStrategy=u(zf);createViewTransition=u(Zv,{optional:!0});navigationErrorHandler=u(Xv,{optional:!0});routerResourcesFeature=u(Yv,{optional:!0});navigationId=0;get hasRequestedNavigation(){return this.navigationId!==0}transitions;afterPreactivation=()=>j(void 0);rootComponentType=null;destroyed=!1;constructor(){let e=i=>this.events.next(new Tf(i)),r=i=>this.events.next(new Af(i));this.configLoader.onLoadEndListener=r,this.configLoader.onLoadStartListener=e,this.destroyRef.onDestroy(()=>{this.destroyed=!0})}complete(){this.transitions?.complete()}handleNavigationRequest(e){let r=++this.navigationId;fe(()=>{this.transitions?.next(K(b({},e),{extractedUrl:this.urlHandlingStrategy.extract(e.rawUrl),targetSnapshot:null,targetRouterState:null,guards:{canActivateChecks:[],canDeactivateChecks:[]},guardsResult:null,id:r,routesRecognizeHandler:{},beforeActivateHandler:{}}))})}setupNavigations(e){return this.transitions=new Qe(null),this.transitions.pipe(Ee(r=>r!==null),Ct(r=>{let i=!0,o=!1,a=new AbortController,s=()=>!o&&this.currentTransition?.id===r.id;return j(r).pipe(Ct(l=>{if(this.navigationId>r.id)return this.cancelNavigationTransition(r,``,Lt.SupersededByNewNavigation),ct;this.currentTransition=r;let c=this.lastSuccessfulNavigation();this.currentNavigation.set({id:l.id,initialUrl:l.rawUrl,extractedUrl:l.extractedUrl,targetBrowserUrl:typeof l.extras.browserUrl==`string`?this.urlSerializer.parse(l.extras.browserUrl):l.extras.browserUrl,trigger:l.source,extras:l.extras,previousNavigation:c?K(b({},c),{previousNavigation:null}):null,abort:()=>a.abort(),routesRecognizeHandler:l.routesRecognizeHandler,beforeActivateHandler:l.beforeActivateHandler});let d=!e.navigated||this.isUpdatingInternalState()||this.isUpdatedBrowserUrl(),m=l.extras.onSameUrlNavigation??e.onSameUrlNavigation;if(!d&&m!==`reload`)return this.events.next(new Nr(l.id,this.urlSerializer.serialize(l.rawUrl),``,ps.IgnoredSameUrlNavigation)),l.resolve(!1),ct;if(this.urlHandlingStrategy.shouldProcessUrl(l.rawUrl))return j(l).pipe(Ct(p=>(this.events.next(new Ui(p.id,this.urlSerializer.serialize(p.extractedUrl),p.source,p.restoredState)),p.id!==this.navigationId?ct:Promise.resolve(p))),fB(this.environmentInjector,this.configLoader,this.rootComponentType,e.config,this.urlSerializer,this.paramsInheritanceStrategy,a.signal),St(p=>{r.targetSnapshot=p.targetSnapshot,r.urlAfterRedirects=p.urlAfterRedirects,this.currentNavigation.update(f=>(f.finalUrl=p.urlAfterRedirects,f)),this.events.next(new Mc)}),Ct(p=>Ye(r.routesRecognizeHandler.deferredHandle??j(void 0)).pipe(oe(()=>p))),St(()=>{let p=new kc(l.id,this.urlSerializer.serialize(l.extractedUrl),this.urlSerializer.serialize(l.urlAfterRedirects),l.targetSnapshot);this.events.next(p)}));if(d&&this.urlHandlingStrategy.shouldProcessUrl(l.currentRawUrl)){let{id:p,extractedUrl:f,source:h,restoredState:v,extras:M}=l,V=new Ui(p,this.urlSerializer.serialize(f),h,v);this.events.next(V);let O=Wk(this.rootComponentType,this.environmentInjector).snapshot;return this.currentTransition=r=K(b({},l),{targetSnapshot:O,urlAfterRedirects:f,extras:K(b({},M),{skipLocationChange:!1,replaceUrl:!1})}),this.currentNavigation.update(pe=>(pe.finalUrl=f,pe)),j(r)}else return this.events.next(new Nr(l.id,this.urlSerializer.serialize(l.extractedUrl),``,ps.IgnoredByUrlHandlingStrategy)),l.resolve(!1),ct}),oe(l=>{let c=new kf(l.id,this.urlSerializer.serialize(l.extractedUrl),this.urlSerializer.serialize(l.urlAfterRedirects),l.targetSnapshot);return this.events.next(c),this.currentTransition=r=K(b({},l),{guards:MV(l.targetSnapshot,l.currentSnapshot,this.rootContexts)}),r}),BV(l=>this.events.next(l)),Ct(l=>{if(r.guardsResult=l.guardsResult,l.guardsResult&&typeof l.guardsResult!=`boolean`)throw wc(this.urlSerializer,l.guardsResult);let c=new Mf(l.id,this.urlSerializer.serialize(l.extractedUrl),this.urlSerializer.serialize(l.urlAfterRedirects),l.targetSnapshot,!!l.guardsResult);if(this.events.next(c),!s())return ct;if(!l.guardsResult)return this.cancelNavigationTransition(l,``,Lt.GuardRejected),ct;if(l.guards.canActivateChecks.length===0)return j(l);let d=new If(l.id,this.urlSerializer.serialize(l.extractedUrl),this.urlSerializer.serialize(l.urlAfterRedirects),l.targetSnapshot);if(this.events.next(d),!s())return ct;let m=!1;return j(l).pipe(pB(this.paramsInheritanceStrategy),St({next:()=>{m=!0;let p=new Nf(l.id,this.urlSerializer.serialize(l.extractedUrl),this.urlSerializer.serialize(l.urlAfterRedirects),l.targetSnapshot);this.events.next(p)},complete:()=>{m||this.cancelNavigationTransition(l,``,Lt.NoDataFromResolver)}}))}),Hv(l=>{let c=m=>{let p=[];if(m.routeConfig?._loadedComponent)m.component=m.routeConfig?._loadedComponent;else if(m.routeConfig?.loadComponent){let f=m._environmentInjector;p.push(this.configLoader.loadComponent(f,m.routeConfig).then(h=>{m.component=h}))}for(let f of m.children)p.push(...c(f));return p},d=c(l.targetSnapshot.root);return d.length===0?j(l):Ye(Promise.all(d).then(()=>l))}),Ct(l=>{let{newlyCreatedRoutes:c,state:d}=DV(e.routeReuseStrategy,l.targetSnapshot,l.currentRouterState);return this.currentTransition=r=l=K(b({},l),{targetRouterState:d,newlyCreatedRoutes:c}),this.currentNavigation.update(m=>(m.targetRouterState=d,m)),j(l)}),this.routerResourcesFeature?.setupAndRunResources(a.signal)??(l=>l),Hv(()=>this.afterPreactivation()),Ct(()=>{let{currentSnapshot:l,targetSnapshot:c}=r,d=this.createViewTransition?.(this.environmentInjector,l.root,c.root,r.hasUAVisualTransition);return d?Ye(d).pipe(oe(()=>r)):j(r)}),it(1),Ct(l=>{i=!1,this.events.next(new gs);let c=r.beforeActivateHandler.deferredHandle;return c?Ye(c.then(()=>l)):j(l)}),St(l=>{new Lv(e.routeReuseStrategy,r.targetRouterState,r.currentRouterState,c=>this.events.next(c),this.inputBindingEnabled).activate(this.rootContexts),l.newlyCreatedRoutes?.clear(),s()&&(fM(l.targetRouterState),o=!0,this.currentNavigation.update(c=>(c.abort=_B,c)),this.lastSuccessfulNavigation.set(fe(this.currentNavigation)),this.events.next(new Vn(l.id,this.urlSerializer.serialize(l.extractedUrl),this.urlSerializer.serialize(l.urlAfterRedirects))),this.titleStrategy?.updateTitle(l.targetRouterState.snapshot),l.resolve(!0))}),De(nM(a.signal).pipe(Ee(()=>!o&&i),St(()=>{this.cancelNavigationTransition(r,a.signal.reason+``,Lt.Aborted)}))),St({complete:()=>{o=!0}}),De(this.transitionAbortWithErrorSubject.pipe(St(l=>{throw l}))),xi(()=>{a.abort(),o||this.cancelNavigationTransition(r,``,Lt.SupersededByNewNavigation),this.currentTransition?.id===r.id&&(this.currentNavigation.set(null),this.currentTransition=null)}),Ci(l=>{if(o=!0,Mk(r),this.destroyed)return r.resolve(!1),ct;if(l instanceof Go&&(l=wc(this.urlSerializer,l)),eM(l))this.events.next(new Ln(r.id,this.urlSerializer.serialize(r.extractedUrl),l.message,l.cancellationCode)),kV(l)?this.events.next(new bs(l.url,l.navigationBehaviorOptions)):r.resolve(!1);else{let c=new $o(r.id,this.urlSerializer.serialize(r.extractedUrl),l,r.targetSnapshot??void 0);try{let d=ht(this.environmentInjector,()=>this.navigationErrorHandler?.(c));if(d instanceof Go){let{message:m,cancellationCode:p}=wc(this.urlSerializer,d);this.events.next(new Ln(r.id,this.urlSerializer.serialize(r.extractedUrl),m,p)),this.events.next(new bs(d.redirectTo,d.navigationBehaviorOptions))}else throw this.events.next(c),l}catch(d){this.options.resolveNavigationPromiseOnError?r.resolve(!1):r.reject(d)}}return ct}))}))}cancelNavigationTransition(e,r,i){Mk(e);let o=new Ln(e.id,this.urlSerializer.serialize(e.extractedUrl),r,i);this.events.next(o),e.resolve(!1)}isUpdatingInternalState(){return this.currentTransition?.extractedUrl.toString()!==this.currentTransition?.currentUrlTree.toString()}isUpdatedBrowserUrl(){let e=this.urlHandlingStrategy.extract(this.urlSerializer.parse(this.location.path(!0))),r=fe(this.currentNavigation),i=r?.targetBrowserUrl??r?.extractedUrl;return e.toString()!==i?.toString()&&!r?.extras.skipLocationChange}static ɵfac=function(r){return new(r||t)};static ɵprov=S({token:t,factory:t.ɵfac})}return t})();function CB(t){return t!==us}function Mk(t){for(let n of t.newlyCreatedRoutes??[])n._localInjector?.destroy(),n._localInjector=void 0;fM(t.targetRouterState)}function fM(t){if(!t)return;let n=e=>{e.value.pending?.set(!1),e.children.forEach(n)};n(t._root)}var pM=new g(``);var hM=(()=>{class t{static ɵfac=function(r){return new(r||t)};static ɵprov=S({token:t,factory:()=>u(wB)})}return t})();var Vf=class{shouldDetach(n){return!1}store(n,e){}shouldAttach(n){return!1}retrieve(n){return null}shouldReuseRoute(n,e){return n.routeConfig===e.routeConfig}shouldDestroyInjector(n){return!0}};var wB=(()=>{class t extends Vf{static ɵfac=function(r){return new(r||t)};static ɵprov=S({token:t,factory:t.ɵfac})}return t})();var Uf=(()=>{class t{urlSerializer=u($i);options=u(Gi,{optional:!0})||{};canceledNavigationResolution=this.options.canceledNavigationResolution||`replace`;location=u(br);urlHandlingStrategy=u(zf);urlUpdateStrategy=this.options.urlUpdateStrategy||`deferred`;currentUrlTree=new vn;getCurrentUrlTree(){return this.currentUrlTree}rawUrlTree=this.currentUrlTree;getRawUrlTree(){return this.rawUrlTree}createBrowserPath({finalUrl:e,initialUrl:r,targetBrowserUrl:i}){let o=e!==void 0?this.urlHandlingStrategy.merge(e,r):r,a=i??o;return a instanceof vn?this.urlSerializer.serialize(a):a}routerUrlState(e){return e?.targetBrowserUrl===void 0||e?.finalUrl===void 0?{}:{ɵrouterUrl:this.urlSerializer.serialize(e.finalUrl)}}commitTransition({targetRouterState:e,finalUrl:r,initialUrl:i}){r&&e?(this.currentUrlTree=r,this.rawUrlTree=this.urlHandlingStrategy.merge(r,i),this.routerState=e):this.rawUrlTree=i}routerState=Wk(null,u(Ue));getRouterState(){return this.routerState}_stateMemento=this.createStateMemento();get stateMemento(){return this._stateMemento}updateStateMemento(){this._stateMemento=this.createStateMemento()}createStateMemento(){return{rawUrlTree:this.rawUrlTree,currentUrlTree:this.currentUrlTree,routerState:this.routerState}}restoredState(){return this.location.getState()}static ɵfac=function(r){return new(r||t)};static ɵprov=S({token:t,factory:()=>u(xB)})}return t})();var xB=(()=>{class t extends Uf{currentPageId=0;lastSuccessfulId=-1;get browserPageId(){return this.canceledNavigationResolution!==`computed`?this.currentPageId:this.restoredState()?.ɵrouterPageId??this.currentPageId}registerNonRouterCurrentEntryChangeListener(e){return this.location.subscribe(r=>{r.type===`popstate`&&setTimeout(()=>{e(r.url,r.state,`popstate`,{replaceUrl:!0},r.hasUAVisualTransition)})})}handleRouterEvent(e,r){e instanceof Ui?this.updateStateMemento():e instanceof Nr?this.commitTransition(r):e instanceof kc?this.urlUpdateStrategy===`eager`&&(r.extras.skipLocationChange||this.setBrowserUrl(this.createBrowserPath(r),r)):e instanceof gs?(this.commitTransition(r),this.urlUpdateStrategy===`deferred`&&!r.extras.skipLocationChange&&this.setBrowserUrl(this.createBrowserPath(r),r)):e instanceof Ln?Qk(e)?e.code===Lt.Redirect&&this.routerState===r.targetRouterState&&this.resetInternalState(r):this.restoreHistory(r):e instanceof $o?this.restoreHistory(r,!0):e instanceof Vn&&(this.lastSuccessfulId=e.id,this.currentPageId=this.browserPageId)}setBrowserUrl(e,r){let{extras:i,id:o}=r,{replaceUrl:a,state:s}=i;if(this.location.isCurrentPathEqualTo(e)||a){let l=this.browserPageId,c=b(b({},s),this.generateNgRouterState(o,l,r));this.location.replaceState(e,``,c)}else{let l=b(b({},s),this.generateNgRouterState(o,this.browserPageId+1,r));this.location.go(e,``,l)}}restoreHistory(e,r=!1){if(this.canceledNavigationResolution===`computed`){let i=this.browserPageId,o=this.currentPageId-i;o!==0?this.location.historyGo(o):this.getCurrentUrlTree()===e.finalUrl&&o===0&&(this.resetInternalState(e),this.resetUrlToCurrentUrlTree())}else this.canceledNavigationResolution===`replace`&&(r&&this.resetInternalState(e),this.resetUrlToCurrentUrlTree())}resetInternalState({finalUrl:e}){this.routerState=this.stateMemento.routerState,this.currentUrlTree=this.stateMemento.currentUrlTree,this.rawUrlTree=this.urlHandlingStrategy.merge(this.currentUrlTree,e??this.rawUrlTree)}resetUrlToCurrentUrlTree(){this.location.replaceState(this.urlSerializer.serialize(this.getRawUrlTree()),``,this.generateNgRouterState(this.lastSuccessfulId,this.currentPageId))}generateNgRouterState(e,r,i){return this.canceledNavigationResolution===`computed`?b({navigationId:e,ɵrouterPageId:r},this.routerUrlState(i)):b({navigationId:e},this.routerUrlState(i))}static ɵfac=function(r){return new(r||t)};static ɵprov=S({token:t,factory:t.ɵfac})}return t})();function $f(t,n){t.events.pipe(Ee(e=>e instanceof Vn||e instanceof Ln||e instanceof $o||e instanceof Nr),oe(e=>e instanceof Vn||e instanceof Nr?0:(e instanceof Ln?e.code===Lt.Redirect||e.code===Lt.SupersededByNewNavigation:!1)?2:1),Ee(e=>e!==2),it(1)).subscribe(()=>{n()})}var Tr=(()=>{class t{get currentUrlTree(){return this.stateManager.getCurrentUrlTree()}get rawUrlTree(){return this.stateManager.getRawUrlTree()}disposed=!1;nonRouterCurrentEntryChangeSubscription;console=u(Vu);stateManager=u(Uf);options=u(Gi,{optional:!0})||{};pendingTasks=u(Wn);urlUpdateStrategy=this.options.urlUpdateStrategy||`deferred`;navigationTransitions=u(Hf);urlSerializer=u($i);location=u(br);urlHandlingStrategy=u(zf);injector=u(Ue);_events=new _;get events(){return this._events}get routerState(){return this.stateManager.getRouterState()}navigated=!1;routeReuseStrategy=u(hM);injectorCleanup=u(pM,{optional:!0});onSameUrlNavigation=this.options.onSameUrlNavigation||`ignore`;config=u(_s,{optional:!0})?.flat()??[];componentInputBindingEnabled=!!u(Ac,{optional:!0});currentNavigation=this.navigationTransitions.currentNavigation.asReadonly();constructor(){this.resetConfig(this.config),this.navigationTransitions.setupNavigations(this).subscribe({error:e=>{}}),this.subscribeToNavigationEvents()}eventsSubscription=new ne;subscribeToNavigationEvents(){let e=this.navigationTransitions.events.subscribe(r=>{try{let i=this.navigationTransitions.currentTransition,o=fe(this.navigationTransitions.currentNavigation);if(i!==null&&o!==null){if(this.stateManager.handleRouterEvent(r,o),r instanceof Ln&&r.code!==Lt.Redirect&&r.code!==Lt.SupersededByNewNavigation)this.navigated=!0;else if(r instanceof Vn)this.navigated=!0,this.injectorCleanup?.(this.routeReuseStrategy,this.routerState,this.config);else if(r instanceof bs){let a=r.navigationBehaviorOptions,s=this.urlHandlingStrategy.merge(r.url,i.currentRawUrl),l=b({scroll:i.extras.scroll,browserUrl:i.extras.browserUrl,info:i.extras.info,skipLocationChange:i.extras.skipLocationChange,replaceUrl:i.extras.replaceUrl||this.urlUpdateStrategy===`eager`||CB(i.source)},a);this.scheduleNavigation(s,us,null,l,i.hasUAVisualTransition,{resolve:i.resolve,reject:i.reject,promise:i.promise})}}xV(r)&&this._events.next(r)}catch(i){this.navigationTransitions.transitionAbortWithErrorSubject.next(i)}});this.eventsSubscription.add(e)}resetRootComponentType(e){this.routerState.root.component=e,this.navigationTransitions.rootComponentType=e}initialNavigation(){this.setUpLocationChangeListener(),this.navigationTransitions.hasRequestedNavigation||this.navigateToSyncWithBrowser(this.location.path(!0),us,this.stateManager.restoredState(),{replaceUrl:!0})}setUpLocationChangeListener(){this.nonRouterCurrentEntryChangeSubscription??=this.stateManager.registerNonRouterCurrentEntryChangeListener((e,r,i,o,a)=>{this.navigateToSyncWithBrowser(e,i,r,o,a)})}navigateToSyncWithBrowser(e,r,i,o,a){let s=i?.navigationId?i:null,l=i?.ɵrouterUrl??e;if(i?.ɵrouterUrl&&(o=K(b({},o),{browserUrl:e})),i){let d=b({},i);delete d.navigationId,delete d.ɵrouterPageId,delete d.ɵrouterUrl,Object.keys(d).length!==0&&(o.state=d)}let c=this.parseUrl(l);this.scheduleNavigation(c,r,s,o,a).catch(d=>{this.disposed||this.injector.get(un)(d)})}get url(){return this.serializeUrl(this.currentUrlTree)}getCurrentNavigation(){return fe(this.navigationTransitions.currentNavigation)}get lastSuccessfulNavigation(){return this.navigationTransitions.lastSuccessfulNavigation}resetConfig(e){this.config=e.map(qv),this.navigated=!1}ngOnDestroy(){this.dispose()}dispose(){this._events.unsubscribe(),this.navigationTransitions.complete(),this.nonRouterCurrentEntryChangeSubscription?.unsubscribe(),this.nonRouterCurrentEntryChangeSubscription=void 0,this.disposed=!0,this.eventsSubscription.unsubscribe()}createUrlTree(e,r={}){let{relativeTo:i,queryParams:o,fragment:a,queryParamsHandling:s,preserveFragment:l}=r,c=l?this.currentUrlTree.fragment:a,d=null;switch(s??this.options.defaultQueryParamsHandling){case`merge`:d=b(b({},this.currentUrlTree.queryParams),o);break;case`preserve`:d=this.currentUrlTree.queryParams;break;default:d=o||null}d!==null&&(d=this.removeEmptyProps(d));let m;try{m=Hk(i?i.snapshot:this.routerState.snapshot.root)}catch(p){(typeof e[0]!=`string`||e[0][0]!==`/`)&&(e=[]),m=this.currentUrlTree.root}return Uk(m,e,d,c??null,this.urlSerializer)}navigateByUrl(e,r={skipLocationChange:!1}){let i=zi(e)?e:this.parseUrl(e),o=this.urlHandlingStrategy.merge(i,this.rawUrlTree);return this.scheduleNavigation(o,us,null,r)}navigate(e,r={skipLocationChange:!1}){return DB(e),this.navigateByUrl(this.createUrlTree(e,r),r)}serializeUrl(e){return this.urlSerializer.serialize(e)}parseUrl(e){try{return this.urlSerializer.parse(e)}catch(r){return this.console.warn(Dn(4018,!1)),this.urlSerializer.parse(`/`)}}isActive(e,r){let i;if(r===!0?i=b({},Rk):r===!1?i=b({},Cf):i=b(b({},Cf),r),zi(e))return Iv(this.currentUrlTree,e,i);let o=this.parseUrl(e);return Iv(this.currentUrlTree,o,i)}removeEmptyProps(e){return Object.entries(e).reduce((r,[i,o])=>(o!=null&&(r[i]=o),r),{})}scheduleNavigation(e,r,i,o,a,s){if(this.disposed)return Promise.resolve(!1);let l,c,d;s?(l=s.resolve,c=s.reject,d=s.promise):d=new Promise((p,f)=>{l=p,c=f});let m=this.pendingTasks.add();return $f(this,()=>{queueMicrotask(()=>this.pendingTasks.remove(m))}),this.navigationTransitions.handleNavigationRequest({source:r,restoredState:i,currentUrlTree:this.currentUrlTree,currentRawUrl:this.currentUrlTree,rawUrl:e,extras:o,hasUAVisualTransition:a,resolve:l,reject:c,promise:d,currentSnapshot:this.routerState.snapshot,currentRouterState:this.routerState}),d.catch(Promise.reject.bind(Promise))}static ɵfac=function(r){return new(r||t)};static ɵprov=S({token:t,factory:t.ɵfac})}return t})();function DB(t){for(let n=0;n<t.length;n++)if(t[n]==null)throw new D(4008,!1)}var EB=(()=>{class t{router=u(Tr);stateManager=u(Uf);fragment=L(``);queryParams=L({});path=L(``);serializer=u($i);constructor(){this.updateState(),this.router.events?.subscribe(e=>{e instanceof Vn&&this.updateState()})}updateState(){let{fragment:e,root:r,queryParams:i}=this.stateManager.getCurrentUrlTree();this.fragment.set(e),this.queryParams.set(i),this.path.set(this.serializer.serialize(new vn(r)))}static ɵfac=function(r){return new(r||t)};static ɵprov=S({token:t,factory:t.ɵfac})}return t})();var gM=(()=>{class t{router;route;tabIndexAttribute;renderer;el;locationStrategy;hrefAttributeValue=u(new Gt(`href`),{optional:!0});reactiveHref=$u(()=>{if(!this.isAnchorElement)return this.hrefAttributeValue;this.reactiveRouterState.path(),this._preserveFragment()&&this.reactiveRouterState.fragment();let e=r=>r===`preserve`||r===`merge`;return(e(this._queryParamsHandling())||e(this.options?.defaultQueryParamsHandling))&&this.reactiveRouterState.queryParams(),this.computeHref(this.createUrlTree())});get href(){return fe(this.reactiveHref)}set href(e){this.reactiveHref.set(e)}set target(e){this._target.set(e)}get target(){return fe(this._target)}_target=L(void 0);set queryParams(e){this._queryParams.set(e)}get queryParams(){return fe(this._queryParams)}_queryParams=L(void 0,{equal:()=>!1});set fragment(e){this._fragment.set(e)}get fragment(){return fe(this._fragment)}_fragment=L(void 0);set queryParamsHandling(e){this._queryParamsHandling.set(e)}get queryParamsHandling(){return fe(this._queryParamsHandling)}_queryParamsHandling=L(void 0);set state(e){this._state.set(e)}get state(){return fe(this._state)}_state=L(void 0,{equal:()=>!1});set info(e){this._info.set(e)}get info(){return fe(this._info)}_info=L(void 0,{equal:()=>!1});set relativeTo(e){this._relativeTo.set(e)}get relativeTo(){return fe(this._relativeTo)}_relativeTo=L(void 0);set preserveFragment(e){this._preserveFragment.set(e)}get preserveFragment(){return fe(this._preserveFragment)}_preserveFragment=L(!1);set skipLocationChange(e){this._skipLocationChange.set(e)}get skipLocationChange(){return fe(this._skipLocationChange)}_skipLocationChange=L(!1);set replaceUrl(e){this._replaceUrl.set(e)}get replaceUrl(){return fe(this._replaceUrl)}_replaceUrl=L(!1);browserUrl=Mo(void 0);isAnchorElement;onChanges=new _;applicationErrorHandler=u(un);options=u(Gi,{optional:!0});reactiveRouterState=u(EB);constructor(e,r,i,o,a,s){this.router=e,this.route=r,this.tabIndexAttribute=i,this.renderer=o,this.el=a,this.locationStrategy=s;let l=a.nativeElement.tagName?.toLowerCase();this.isAnchorElement=l===`a`||l===`area`||!!(typeof customElements==`object`&&customElements.get(l)?.observedAttributes?.includes?.(`href`))}setTabIndexIfNotOnNativeEl(e){this.tabIndexAttribute!=null||this.isAnchorElement||this.applyAttributeValue(`tabindex`,e)}ngOnChanges(e){this.onChanges.next(this)}routerLinkInput=L(null);set routerLink(e){e==null?(this.routerLinkInput.set(null),this.setTabIndexIfNotOnNativeEl(null)):(zi(e)?this.routerLinkInput.set(e):this.routerLinkInput.set(Array.isArray(e)?e:[e]),this.setTabIndexIfNotOnNativeEl(`0`))}onClick(e,r,i,o,a){let s=this.urlTree;if(s===null||this.isAnchorElement&&(e!==0||r||i||o||a||typeof this.target==`string`&&this.target!=`_self`))return!0;let l=this.browserUrl(),c=b({skipLocationChange:this.skipLocationChange,replaceUrl:this.replaceUrl,state:this.state,info:this.info},l!==void 0&&{browserUrl:l});return this.router.navigateByUrl(s,c)?.catch(d=>{this.applicationErrorHandler(d)}),!this.isAnchorElement}ngOnDestroy(){}applyAttributeValue(e,r){let i=this.renderer,o=this.el.nativeElement;r!==null?i.setAttribute(o,e,r):i.removeAttribute(o,e)}createUrlTree(){let e=this.routerLinkInput();return e===null||!this.router.createUrlTree?null:zi(e)?e:this.router.createUrlTree(e,{relativeTo:this._relativeTo()!==void 0?this._relativeTo():this.route,queryParams:this._queryParams(),fragment:this._fragment(),queryParamsHandling:this._queryParamsHandling(),preserveFragment:this._preserveFragment()})}get urlTree(){return fe(()=>this.createUrlTree())}computeHref(e){return e!==null&&this.locationStrategy?this.locationStrategy?.prepareExternalUrl(this.router.serializeUrl(e))??``:null}static ɵfac=function(r){return new(r||t)(me(Tr),me(ui),ul(`tabindex`),me(ke),me(N),me(Qn))};static ɵdir=w({type:t,selectors:[[``,`routerLink`,``]],hostVars:2,hostBindings:function(r,i){r&1&&Q(`click`,function(a){return i.onClick(a.button,a.ctrlKey,a.shiftKey,a.altKey,a.metaKey)}),r&2&&Y(`href`,i.reactiveHref(),_g)(`target`,i._target())},inputs:{target:`target`,queryParams:`queryParams`,fragment:`fragment`,queryParamsHandling:`queryParamsHandling`,state:`state`,info:`info`,relativeTo:`relativeTo`,preserveFragment:[2,`preserveFragment`,`preserveFragment`,I],skipLocationChange:[2,`skipLocationChange`,`skipLocationChange`,I],replaceUrl:[2,`replaceUrl`,`replaceUrl`,I],browserUrl:[1,`browserUrl`],routerLink:`routerLink`},features:[Se]})}return t})();var Oc=class{};var bM=(()=>{class t{router;injector;preloadingStrategy;loader;subscription;constructor(e,r,i,o){this.router=e,this.injector=r,this.preloadingStrategy=i,this.loader=o}setUpPreloading(){this.subscription=this.router.events.pipe(Ee(e=>e instanceof Vn),wi(()=>this.preload())).subscribe(()=>{})}preload(){return this.processRoutes(this.injector,this.router.config)}ngOnDestroy(){this.subscription?.unsubscribe()}processRoutes(e,r){let i=[];for(let o of r){o.providers&&!o._injector&&(o._injector=Ma(o.providers,e,``));let a=o._injector??e;o._loadedNgModuleFactory&&!o._loadedInjector&&(o._loadedInjector=o._loadedNgModuleFactory.create(a).injector);let s=o._loadedInjector??a;(o.loadChildren&&!o._loadedRoutes&&o.canLoad===void 0||o.loadComponent&&!o._loadedComponent)&&i.push(this.preloadConfig(a,o)),(o.children||o._loadedRoutes)&&i.push(this.processRoutes(s,o.children??o._loadedRoutes))}return Ye(i).pipe(vi())}preloadConfig(e,r){return this.preloadingStrategy.preload(r,()=>{if(e.destroyed)return j(null);let i;r.loadChildren&&r.canLoad===void 0?i=Ye(this.loader.loadChildren(e,r)):i=j(null);let o=i.pipe(It(a=>a===null?j(void 0):(r._loadedRoutes=a.routes,r._loadedInjector=a.injector,r._loadedNgModuleFactory=a.factory,this.processRoutes(a.injector??e,a.routes))));if(r.loadComponent&&!r._loadedComponent)return Ye([o,this.loader.loadComponent(e,r)]).pipe(vi());else return o})}static ɵfac=function(r){return new(r||t)(P(Tr),P(Ue),P(Oc),P(jf))};static ɵprov=q({token:t,factory:t.ɵfac,providedIn:`root`})}return t})();var yM=new g(``);var kB=(()=>{class t{options;routerEventsSubscription;scrollEventsSubscription;lastId=0;lastSource=us;restoredId=0;store={};isHydrating=u(mg,{optional:!0})??!1;urlSerializer=u($i);zone=u(T);viewportScroller=u(xb);transitions=u(Hf);constructor(e){this.options=e,this.options.scrollPositionRestoration||=`disabled`,this.options.anchorScrolling||=`disabled`,this.isHydrating&&u(Rt).whenStable().then(()=>{this.isHydrating=!1})}init(){this.options.scrollPositionRestoration!==`disabled`&&this.viewportScroller.setHistoryScrollRestoration(`manual`),this.routerEventsSubscription=this.createScrollEvents(),this.scrollEventsSubscription=this.consumeScrollEvents()}createScrollEvents(){return this.transitions.events.subscribe(e=>{e instanceof Ui?(this.store[this.lastId]=this.viewportScroller.getScrollPosition(),this.lastSource=e.navigationTrigger,this.restoredId=e.restoredState?e.restoredState.navigationId:0):e instanceof Vn?(this.lastId=e.id,this.scheduleScrollEvent(e,this.urlSerializer.parse(e.urlAfterRedirects).fragment)):e instanceof Nr&&e.code===ps.IgnoredSameUrlNavigation&&(this.lastSource=void 0,this.restoredId=0,this.scheduleScrollEvent(e,this.urlSerializer.parse(e.url).fragment))})}consumeScrollEvents(){return this.transitions.events.subscribe(e=>{if(!(e instanceof hs)||e.scrollBehavior===`manual`)return;let r={behavior:`instant`};e.position?this.options.scrollPositionRestoration===`top`?this.viewportScroller.scrollToPosition([0,0],r):this.options.scrollPositionRestoration===`enabled`&&this.viewportScroller.scrollToPosition(e.position,r):e.anchor&&this.options.anchorScrolling===`enabled`?this.viewportScroller.scrollToAnchor(e.anchor):this.options.scrollPositionRestoration!==`disabled`&&this.viewportScroller.scrollToPosition([0,0])})}scheduleScrollEvent(e,r){if(this.isHydrating)return;let i=fe(this.transitions.currentNavigation)?.extras.scroll;this.zone.runOutsideAngular(()=>Ie(this,null,function*(){yield new Promise(o=>{setTimeout(o),typeof requestAnimationFrame<`u`&&requestAnimationFrame(o)}),this.zone.run(()=>{this.transitions.events.next(new hs(e,this.lastSource===`popstate`?this.store[this.restoredId]:null,r,i))})}))}ngOnDestroy(){this.routerEventsSubscription?.unsubscribe(),this.scrollEventsSubscription?.unsubscribe()}static ɵfac=function(r){So()};static ɵprov=q({token:t,factory:t.ɵfac})}return t})();function MB(){return u(Tr).routerState.root}function Fc(t,n){return{ɵkind:t,ɵproviders:n}}function IB(){let t=u(B);return n=>{let e=t.get(Rt);if(n!==e.components[0])return;let r=t.get(Tr),i=t.get(vM);t.get(e_)===1&&r.initialNavigation(),t.get(wM,null,{optional:!0})?.setUpPreloading(),t.get(yM,null,{optional:!0})?.init(),r.resetRootComponentType(e.componentTypes[0]),i.closed||(i.next(),i.complete(),i.unsubscribe())}}var vM=new g(``,{factory:()=>new _});var e_=new g(``,{factory:()=>1});function _M(){return Fc(2,[{provide:Su,useValue:!0},{provide:e_,useValue:0},Pu(()=>{let n=u(B);return n.get(hb,Promise.resolve()).then(()=>new Promise(r=>{let i=n.get(Tr),o=n.get(vM);$f(i,()=>{r(!0)}),n.get(Hf).afterPreactivation=()=>(r(!0),o.closed?j(void 0):o),i.initialNavigation()}))})])}function CM(){return Fc(3,[Pu(()=>{u(Tr).setUpLocationChangeListener()}),{provide:e_,useValue:2}])}var wM=new g(``);function xM(t){return Fc(0,[{provide:wM,useExisting:bM},{provide:Oc,useExisting:t}])}function DM(t={}){return Fc(8,[{provide:Ac,useFactory:()=>new Zk(t,u(Yv,{optional:!0}))}])}function SM(t){Nn(`NgRouterViewTransitions`);return Fc(9,[{provide:Zv,useValue:mM},{provide:Qv,useValue:b({skipNextTransition:!!t?.skipInitialTransition},t)}])}var EM=[br,{provide:$i,useClass:di},Tr,Hi,{provide:ui,useFactory:MB},jf];var NB=(()=>{class t{constructor(){}static forRoot(e,r){return{ngModule:t,providers:[EM,[],{provide:_s,multi:!0,useValue:e},[],r?.errorHandler?{provide:Xv,useValue:r.errorHandler}:[],{provide:Gi,useValue:r||{}},r?.useHash?AB():RB(),TB(),r?.preloadingStrategy?xM(r.preloadingStrategy).ɵproviders:[],r?.initialNavigation?OB(r):[],r?.bindToComponentInputs?DM(typeof r.bindToComponentInputs==`object`?r.bindToComponentInputs:{}).ɵproviders:[],r?.enableViewTransitions?SM().ɵproviders:[],FB()]}}static forChild(e){return{ngModule:t,providers:[{provide:_s,multi:!0,useValue:e}]}}static ɵfac=function(r){return new(r||t)};static ɵmod=R({type:t});static ɵinj=A({})}return t})();function TB(){return{provide:yM,useFactory:()=>{let t=u(xb),n=u(Gi);return n.scrollOffset&&t.setOffset(n.scrollOffset),new kB(n)}}}function AB(){return{provide:Qn,useClass:bb}}function RB(){return{provide:Qn,useClass:Qu}}function OB(t){return[t.initialNavigation===`disabled`?CM().ɵproviders:[],t.initialNavigation===`enabledBlocking`?_M().ɵproviders:[]]}var Jv=new g(``);function FB(){return[{provide:Jv,useFactory:IB},{provide:_l,multi:!0,useExisting:Jv}]}export{Ta as $,u as $t,LP as A,hle as At,QF as B,of as Bt,HL as C,dI as Ct,Je as D,gM as Dt,JP as E,g as Et,Ne as F,mL as Ft,Sl as G,qe as Gt,Qr as H,pP as Ht,O1 as I,me as It,T as J,sF as Jt,Sle as K,qy as Kt,P as L,mm as Lt,MF as M,ko as Mt,NB as N,lZ as Nt,Js as O,gle as Ot,Nb as P,le as Pt,TM as Q,tf as Qt,P1 as R,nZ as Rt,H as S,ck as St,J as T,fle as Tt,Qse as U,ple as Ut,Qe as V,pO as Vt,R as W,q as Wt,TA as X,tZ as Xt,T9 as Y,sZ as Yt,TF as Z,tce as Zt,F as _,z as _n,b as _t,AL as a,vle as an,XF as at,Ft as b,cZ as bt,Ci as c,we as cn,Xg as ct,Cle as d,wle as dn,_le as dt,uL as en,Tr as et,D as f,wt as fn,_r as ft,Eo as g,yle as gn,an as gt,Ele as h,yO as hn,ak as ht,A0 as i,vb as in,W0 as it,Lle as j,hre as jt,Ka as k,gr as kt,Ck as l,wie as ln,Xr as lt,E as m,y as mn,aZ as mt,$L as n,ui as nn,U as nt,Aa as o,voe as on,Xa as ot,Dle as p,xle as pn,aS as pt,St as q,rZ as qt,A as r,vO as rn,Ua as rt,C as s,vt as sn,Xe as st,$E as t,ue as tn,Ts as tt,Cl as u,wl as un,ZF as ut,FL as v,zie as vn,ble as vt,IA as w,ec as wt,Gv as x,ce as xt,FP as y,bt as yt,Q as z,oZ as zt};