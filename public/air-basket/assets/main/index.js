System.register("chunks:///_virtual/gesture_detector.ts",["./rollupPluginModLoBabelHelpers.js","cc","./web_sensor.ts"],(function(e){"use strict";var t,o,r,n,i,s,u,c,a;return{setters:[function(e){t=e.applyDecoratedDescriptor,o=e.inheritsLoose,r=e.initializerDefineProperty,n=e.assertThisInitialized},function(e){i=e.cclegacy,s=e._decorator,u=e.AudioSource,c=e.Component},function(e){a=e.web_sensor}],execute:function(){var l,p,d,f,h,y,g;i._RF.push({},"01403S42RlIhIOAspqUgKTn","gesture_detector",void 0);var _=s.ccclass,b=s.property;e("gesture_detector",(l=_("gesture_detector"),p=b({type:a}),d=b({type:u}),l((y=t((h=function(e){function t(){for(var t,o=arguments.length,i=new Array(o),s=0;s<o;s++)i[s]=arguments[s];return t=e.call.apply(e,[this].concat(i))||this,r(t,"sensor",y,n(t)),r(t,"audio",g,n(t)),t.isInCooldown=!1,t}o(t,e);var i=t.prototype;return i.start=function(){},i.update=function(e){var t=this;this.isInCooldown||this.sensor.y_acc<-10&&(this.audio.play(),this.isInCooldown=!0,setTimeout((function(){t.isInCooldown=!1}),1e3),console.log("shot"))},t}(c)).prototype,"sensor",[p],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),g=t(h.prototype,"audio",[d],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),f=h))||f));i._RF.pop()}}}));

System.register("chunks:///_virtual/main",["./gesture_detector.ts","./web_sensor.ts"],(function(){"use strict";return{setters:[null,null],execute:function(){}}}));

System.register("chunks:///_virtual/web_sensor.ts",["./rollupPluginModLoBabelHelpers.js","cc"],(function(e){"use strict";var t,n,i,r,c,a,o,u;return{setters:[function(e){t=e.applyDecoratedDescriptor,n=e.inheritsLoose,i=e.initializerDefineProperty,r=e.assertThisInitialized},function(e){c=e.cclegacy,a=e._decorator,o=e.Label,u=e.Component}],execute:function(){var s,l,p,d,y,b,_;c._RF.push({},"55dacxYha1GkZlaWNPasZmG","web_sensor",void 0);var g=a.ccclass,f=a.property;e("web_sensor",(s=g("web_sensor"),l=f({type:o}),p=f({type:Boolean}),s((b=t((y=function(e){function t(){for(var t,n=arguments.length,c=new Array(n),a=0;a<n;a++)c[a]=arguments[a];return(t=e.call.apply(e,[this].concat(c))||this).x_acc=0,t.y_acc=0,t.z_acc=0,i(t,"debugOutput",b,r(t)),i(t,"debug",_,r(t)),t}n(t,e);var c=t.prototype;return c.start=function(){var e=this;window.addEventListener("devicemotion",(function(t){e.x_acc=t.accelerationIncludingGravity.x,e.y_acc=t.accelerationIncludingGravity.y,e.z_acc=t.accelerationIncludingGravity.z}))},c.update=function(e){this.debug&&(this.debugOutput.string="x: "+this.x_acc+" y: "+this.y_acc+" z: "+this.z_acc)},t}(u)).prototype,"debugOutput",[l],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),_=t(y.prototype,"debug",[p],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return!0}}),d=y))||d));c._RF.pop()}}}));

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