System.register("chunks:///_virtual/DebugHelper.ts",["./rollupPluginModLoBabelHelpers.js","cc"],(function(e){"use strict";var t,r,n,u;return{setters:[function(e){t=e.inheritsLoose},function(e){r=e.cclegacy,n=e._decorator,u=e.Component}],execute:function(){var c;r._RF.push({},"7ccb9URLINNlIxmRkGU6kIH","DebugHelper",void 0);var o=n.ccclass;n.property,e("DebugHelper",o("DebugHelper")(c=function(e){function r(){return e.apply(this,arguments)||this}t(r,e);var n=r.prototype;return n.start=function(){},n.update=function(e){},r}(u))||c);r._RF.pop()}}}));

System.register("chunks:///_virtual/gesture_detector.ts",["./rollupPluginModLoBabelHelpers.js","cc","./web_sensor.ts"],(function(e){"use strict";var t,n,i,o,r,s,c,a,u;return{setters:[function(e){t=e.applyDecoratedDescriptor,n=e.inheritsLoose,i=e.initializerDefineProperty,o=e.assertThisInitialized},function(e){r=e.cclegacy,s=e._decorator,c=e.AudioSource,a=e.Component},function(e){u=e.web_sensor}],execute:function(){var l,h,p,d,f,y,v;r._RF.push({},"01403S42RlIhIOAspqUgKTn","gesture_detector",void 0);var g=s.ccclass,C=s.property;e("gesture_detector",(l=g("gesture_detector"),h=C({type:u}),p=C({type:c}),l((y=t((f=function(e){function t(){for(var t,n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return t=e.call.apply(e,[this].concat(r))||this,i(t,"sensor",y,o(t)),i(t,"audio",v,o(t)),t.isInCooldown=!1,t.isInChainPrevention=!1,t}n(t,e);var r=t.prototype;return r.start=function(){},r.checkChainStatus=function(){this.sensor.y_acc>0&&this.isInChainPrevention&&(this.isInChainPrevention=!1)},r.update=function(e){var t=this;this.isInCooldown||(this.isInChainPrevention?this.checkChainStatus():this.sensor.y_acc<-10&&(this.audio.play(),this.isInCooldown=!0,this.isInChainPrevention=!0,setTimeout((function(){t.isInCooldown=!1}),500),console.log("shot")))},t}(a)).prototype,"sensor",[h],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),v=t(f.prototype,"audio",[p],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),d=f))||d));r._RF.pop()}}}));

System.register("chunks:///_virtual/main",["./DebugHelper.ts","./gesture_detector.ts","./web_sensor.ts"],(function(){"use strict";return{setters:[null,null,null],execute:function(){}}}));

System.register("chunks:///_virtual/web_sensor.ts",["./rollupPluginModLoBabelHelpers.js","cc"],(function(t){"use strict";var e,n,i,a,r,o,c,u;return{setters:[function(t){e=t.applyDecoratedDescriptor,n=t.inheritsLoose,i=t.initializerDefineProperty,a=t.assertThisInitialized},function(t){r=t.cclegacy,o=t._decorator,c=t.Label,u=t.Component}],execute:function(){var s,l,p,d,_;r._RF.push({},"55dacxYha1GkZlaWNPasZmG","web_sensor",void 0);var h=o.ccclass,y=o.property;t("web_sensor",(s=h("web_sensor"),l=y({type:c}),s((_=e((d=function(t){function e(){for(var e,n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))||this).x_acc=0,e.y_acc=0,e.z_acc=0,e.alpha_orientation=0,i(e,"debugOutput",_,a(e)),e._isSimulation=null,e}n(e,t);var r=e.prototype;return r.start=function(){var t=this;this._isSimulation||(window.addEventListener("devicemotion",(function(e){t.x_acc=e.accelerationIncludingGravity.x,t.y_acc=e.accelerationIncludingGravity.y,t.z_acc=e.accelerationIncludingGravity.z})),window.addEventListener("deviceorientation",(function(e){t.alpha_orientation=e.alpha})))},r.update=function(t){null!==this.debugOutput&&(this.debugOutput.string="alpha: "+this.alpha_orientation)},e}(u)).prototype,"debugOutput",[l],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),p=d))||p));r._RF.pop()}}}));

(function(r) {
  r('virtual:///prerequisite-imports/main', 'chunks:///_virtual/main'); 
})(function(mid, cid) {
    System.register(mid, [cid], function (_export, _context) {
    return {
        setters: [function(_m) {
            var _exportObj = {};

            for (var _key in _m) {
              if (_key !== "default" && _key !== "__esModule") _exportObj[_key] = _m[_key];
            }
      
            _export(_exportObj);
        }],
        execute: function () { }
    };
    });
});