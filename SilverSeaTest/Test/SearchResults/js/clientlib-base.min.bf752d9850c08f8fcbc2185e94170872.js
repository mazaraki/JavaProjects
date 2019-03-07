+function(e){var c=function(g,f){this.options=f;
this.$body=e(document.body);
this.$element=e(g);
this.$dialog=this.$element.find(".modal-dialog");
this.$backdrop=null;
this.isShown=null;
this.originalBodyPad=null;
this.scrollbarWidth=0;
this.ignoreBackdropClick=false;
if(this.options.remote){this.$element.find(".modal-content").load(this.options.remote,e.proxy(function(){this.$element.trigger("loaded.bs.modal")
},this))
}};
c.VERSION="3.3.7";
c.TRANSITION_DURATION=300;
c.BACKDROP_TRANSITION_DURATION=150;
c.DEFAULTS={backdrop:true,keyboard:true,show:true};
c.prototype.toggle=function(f){return this.isShown?this.hide():this.show(f)
};
c.prototype.show=function(j){var f=this;
var g=e.Event("show.bs.modal",{relatedTarget:j});
this.$element.trigger(g);
if(this.isShown||g.isDefaultPrevented()){return
}this.isShown=true;
this.checkScrollbar();
this.setScrollbar();
this.$body.addClass("modal-open");
this.escape();
this.resize();
this.$element.on("click.dismiss.bs.modal",'[data-dismiss="modal"]',e.proxy(this.hide,this));
this.$dialog.on("mousedown.dismiss.bs.modal",function(){f.$element.one("mouseup.dismiss.bs.modal",function(k){if(e(k.target).is(f.$element)){f.ignoreBackdropClick=true
}})
});
this.backdrop(function(){var l=e.support.transition&&f.$element.hasClass("fade");
if(!f.$element.parent().length){f.$element.appendTo(f.$body)
}f.$element.show().scrollTop(0);
f.adjustDialog();
if(l){f.$element[0].offsetWidth
}f.$element.addClass("in");
f.enforceFocus();
var k=e.Event("shown.bs.modal",{relatedTarget:j});
l?f.$dialog.one("bsTransitionEnd",function(){f.$element.trigger("focus").trigger(k)
}).emulateTransitionEnd(c.TRANSITION_DURATION):f.$element.trigger("focus").trigger(k)
})
};
c.prototype.hide=function(f){if(f){f.preventDefault()
}f=e.Event("hide.bs.modal");
this.$element.trigger(f);
if(!this.isShown||f.isDefaultPrevented()){return
}this.isShown=false;
this.escape();
this.resize();
e(document).off("focusin.bs.modal");
this.$element.removeClass("in").off("click.dismiss.bs.modal").off("mouseup.dismiss.bs.modal");
this.$dialog.off("mousedown.dismiss.bs.modal");
e.support.transition&&this.$element.hasClass("fade")?this.$element.one("bsTransitionEnd",e.proxy(this.hideModal,this)).emulateTransitionEnd(c.TRANSITION_DURATION):this.hideModal()
};
c.prototype.enforceFocus=function(){e(document).off("focusin.bs.modal").on("focusin.bs.modal",e.proxy(function(f){if(document!==f.target&&this.$element[0]!==f.target&&!this.$element.has(f.target).length){this.$element.trigger("focus")
}},this))
};
c.prototype.escape=function(){if(this.isShown&&this.options.keyboard){this.$element.on("keydown.dismiss.bs.modal",e.proxy(function(f){f.which==27&&this.hide()
},this))
}else{if(!this.isShown){this.$element.off("keydown.dismiss.bs.modal")
}}};
c.prototype.resize=function(){if(this.isShown){e(window).on("resize.bs.modal",e.proxy(this.handleUpdate,this))
}else{e(window).off("resize.bs.modal")
}};
c.prototype.hideModal=function(){var f=this;
this.$element.hide();
this.backdrop(function(){f.$body.removeClass("modal-open");
f.resetAdjustments();
f.resetScrollbar();
f.$element.trigger("hidden.bs.modal")
})
};
c.prototype.removeBackdrop=function(){this.$backdrop&&this.$backdrop.remove();
this.$backdrop=null
};
c.prototype.backdrop=function(l){var k=this;
var g=this.$element.hasClass("fade")?"fade":"";
if(this.isShown&&this.options.backdrop){var f=e.support.transition&&g;
this.$backdrop=e(document.createElement("div")).addClass("modal-backdrop "+g).appendTo(this.$body);
this.$element.on("click.dismiss.bs.modal",e.proxy(function(n){if(this.ignoreBackdropClick){this.ignoreBackdropClick=false;
return
}if(n.target!==n.currentTarget){return
}this.options.backdrop=="static"?this.$element[0].focus():this.hide()
},this));
if(f){this.$backdrop[0].offsetWidth
}this.$backdrop.addClass("in");
if(!l){return
}f?this.$backdrop.one("bsTransitionEnd",l).emulateTransitionEnd(c.BACKDROP_TRANSITION_DURATION):l()
}else{if(!this.isShown&&this.$backdrop){this.$backdrop.removeClass("in");
var j=function(){k.removeBackdrop();
l&&l()
};
e.support.transition&&this.$element.hasClass("fade")?this.$backdrop.one("bsTransitionEnd",j).emulateTransitionEnd(c.BACKDROP_TRANSITION_DURATION):j()
}else{if(l){l()
}}}};
c.prototype.handleUpdate=function(){this.adjustDialog()
};
c.prototype.adjustDialog=function(){var f=this.$element[0].scrollHeight>document.documentElement.clientHeight;
this.$element.css({paddingLeft:!this.bodyIsOverflowing&&f?this.scrollbarWidth:"",paddingRight:this.bodyIsOverflowing&&!f?this.scrollbarWidth:""})
};
c.prototype.resetAdjustments=function(){this.$element.css({paddingLeft:"",paddingRight:""})
};
c.prototype.checkScrollbar=function(){var g=window.innerWidth;
if(!g){var f=document.documentElement.getBoundingClientRect();
g=f.right-Math.abs(f.left)
}this.bodyIsOverflowing=document.body.clientWidth<g;
this.scrollbarWidth=this.measureScrollbar()
};
c.prototype.setScrollbar=function(){var f=parseInt((this.$body.css("padding-right")||0),10);
this.originalBodyPad=document.body.style.paddingRight||"";
if(this.bodyIsOverflowing){this.$body.css("padding-right",f+this.scrollbarWidth)
}};
c.prototype.resetScrollbar=function(){this.$body.css("padding-right",this.originalBodyPad)
};
c.prototype.measureScrollbar=function(){var g=document.createElement("div");
g.className="modal-scrollbar-measure";
this.$body.append(g);
var f=g.offsetWidth-g.clientWidth;
this.$body[0].removeChild(g);
return f
};
function d(f,g){return this.each(function(){var l=e(this);
var k=l.data("bs.modal");
var j=e.extend({},c.DEFAULTS,l.data(),typeof f=="object"&&f);
if(!k){l.data("bs.modal",(k=new c(this,j)))
}if(typeof f=="string"){k[f](g)
}else{if(j.show){k.show(g)
}}})
}var b=e.fn.modal;
e.fn.modal=d;
e.fn.modal.Constructor=c;
e.fn.modal.noConflict=function(){e.fn.modal=b;
return this
};
e(document).on("click.bs.modal.data-api",'[data-toggle="modal"]',function(l){var k=e(this);
var g=k.attr("href");
var f=e(k.attr("data-target")||(g&&g.replace(/.*(?=#[^\s]+$)/,"")));
var j=f.data("bs.modal")?"toggle":e.extend({remote:!/#/.test(g)&&g},f.data(),k.data());
if(k.is("a")){l.preventDefault()
}f.one("show.bs.modal",function(n){if(n.isDefaultPrevented()){return
}f.one("hidden.bs.modal",function(){k.is(":visible")&&k.trigger("focus")
})
});
d.call(f,j,this)
})
}(jQuery);
+function(k){var f=".dropdown-backdrop";
var c='[data-toggle="dropdown"]';
var b=function(l){k(l).on("click.bs.dropdown",this.toggle)
};
b.VERSION="3.3.7";
function g(o){var l=o.attr("data-target");
if(!l){l=o.attr("href");
l=l&&/#[A-Za-z]/.test(l)&&l.replace(/.*(?=#[^\s]*$)/,"")
}var n=l&&k(l);
return n&&n.length?n:o.parent()
}function e(l){if(l&&l.which===3){return
}k(f).remove();
k(c).each(function(){var r=k(this);
var o=g(r);
var n={relatedTarget:this};
if(!o.hasClass("open")){return
}if(l&&l.type=="click"&&/input|textarea/i.test(l.target.tagName)&&k.contains(o[0],l.target)){return
}o.trigger(l=k.Event("hide.bs.dropdown",n));
if(l.isDefaultPrevented()){return
}r.attr("aria-expanded","false");
o.removeClass("open").trigger(k.Event("hidden.bs.dropdown",n))
})
}b.prototype.toggle=function(t){var r=k(this);
if(r.is(".disabled, :disabled")){return
}var o=g(r);
var n=o.hasClass("open");
e();
if(!n){if("ontouchstart" in document.documentElement&&!o.closest(".navbar-nav").length){k(document.createElement("div")).addClass("dropdown-backdrop").insertAfter(k(this)).on("click",e)
}var l={relatedTarget:this};
o.trigger(t=k.Event("show.bs.dropdown",l));
if(t.isDefaultPrevented()){return
}r.trigger("focus").attr("aria-expanded","true");
o.toggleClass("open").trigger(k.Event("shown.bs.dropdown",l))
}return false
};
b.prototype.keydown=function(t){if(!/(38|40|27|32)/.test(t.which)||/input|textarea/i.test(t.target.tagName)){return
}var r=k(this);
t.preventDefault();
t.stopPropagation();
if(r.is(".disabled, :disabled")){return
}var o=g(r);
var n=o.hasClass("open");
if(!n&&t.which!=27||n&&t.which==27){if(t.which==27){o.find(c).trigger("focus")
}return r.trigger("click")
}var u=" li:not(.disabled):visible a";
var v=o.find(".dropdown-menu"+u);
if(!v.length){return
}var l=v.index(t.target);
if(t.which==38&&l>0){l--
}if(t.which==40&&l<v.length-1){l++
}if(!~l){l=0
}v.eq(l).trigger("focus")
};
function j(l){return this.each(function(){var o=k(this);
var n=o.data("bs.dropdown");
if(!n){o.data("bs.dropdown",(n=new b(this)))
}if(typeof l=="string"){n[l].call(o)
}})
}var d=k.fn.dropdown;
k.fn.dropdown=j;
k.fn.dropdown.Constructor=b;
k.fn.dropdown.noConflict=function(){k.fn.dropdown=d;
return this
};
k(document).on("click.bs.dropdown.data-api",e).on("click.bs.dropdown.data-api",".dropdown form",function(l){l.stopPropagation()
}).on("click.bs.dropdown.data-api",c,b.prototype.toggle).on("keydown.bs.dropdown.data-api",c,b.prototype.keydown).on("keydown.bs.dropdown.data-api",".dropdown-menu",b.prototype.keydown)
}(jQuery);
+function(e){var f=function(j,g){this.$element=e(j);
this.options=e.extend({},f.DEFAULTS,g);
this.$trigger=e('[data-toggle="collapse"][href="#'+j.id+'"],[data-toggle="collapse"][data-target="#'+j.id+'"]');
this.transitioning=null;
if(this.options.parent){this.$parent=this.getParent()
}else{this.addAriaAndCollapsedClass(this.$element,this.$trigger)
}if(this.options.toggle){this.toggle()
}};
f.VERSION="3.3.7";
f.TRANSITION_DURATION=350;
f.DEFAULTS={toggle:true};
f.prototype.dimension=function(){var g=this.$element.hasClass("width");
return g?"width":"height"
};
f.prototype.show=function(){if(this.transitioning||this.$element.hasClass("in")){return
}var k;
var n=this.$parent&&this.$parent.children(".panel").children(".in, .collapsing");
if(n&&n.length){k=n.data("bs.collapse");
if(k&&k.transitioning){return
}}var j=e.Event("show.bs.collapse");
this.$element.trigger(j);
if(j.isDefaultPrevented()){return
}if(n&&n.length){c.call(n,"hide");
k||n.data("bs.collapse",null)
}var o=this.dimension();
this.$element.removeClass("collapse").addClass("collapsing")[o](0).attr("aria-expanded",true);
this.$trigger.removeClass("collapsed").attr("aria-expanded",true);
this.transitioning=1;
var g=function(){this.$element.removeClass("collapsing").addClass("collapse in")[o]("");
this.transitioning=0;
this.$element.trigger("shown.bs.collapse")
};
if(!e.support.transition){return g.call(this)
}var l=e.camelCase(["scroll",o].join("-"));
this.$element.one("bsTransitionEnd",e.proxy(g,this)).emulateTransitionEnd(f.TRANSITION_DURATION)[o](this.$element[0][l])
};
f.prototype.hide=function(){if(this.transitioning||!this.$element.hasClass("in")){return
}var j=e.Event("hide.bs.collapse");
this.$element.trigger(j);
if(j.isDefaultPrevented()){return
}var k=this.dimension();
this.$element[k](this.$element[k]())[0].offsetHeight;
this.$element.addClass("collapsing").removeClass("collapse in").attr("aria-expanded",false);
this.$trigger.addClass("collapsed").attr("aria-expanded",false);
this.transitioning=1;
var g=function(){this.transitioning=0;
this.$element.removeClass("collapsing").addClass("collapse").trigger("hidden.bs.collapse")
};
if(!e.support.transition){return g.call(this)
}this.$element[k](0).one("bsTransitionEnd",e.proxy(g,this)).emulateTransitionEnd(f.TRANSITION_DURATION)
};
f.prototype.toggle=function(){this[this.$element.hasClass("in")?"hide":"show"]()
};
f.prototype.getParent=function(){return e(this.options.parent).find('[data-toggle="collapse"][data-parent="'+this.options.parent+'"]').each(e.proxy(function(k,j){var g=e(j);
this.addAriaAndCollapsedClass(d(g),g)
},this)).end()
};
f.prototype.addAriaAndCollapsedClass=function(j,g){var k=j.hasClass("in");
j.attr("aria-expanded",k);
g.toggleClass("collapsed",!k).attr("aria-expanded",k)
};
function d(g){var j;
var k=g.attr("data-target")||(j=g.attr("href"))&&j.replace(/.*(?=#[^\s]+$)/,"");
return e(k)
}function c(g){return this.each(function(){var l=e(this);
var k=l.data("bs.collapse");
var j=e.extend({},f.DEFAULTS,l.data(),typeof g=="object"&&g);
if(!k&&j.toggle&&/show|hide/.test(g)){j.toggle=false
}if(!k){l.data("bs.collapse",(k=new f(this,j)))
}if(typeof g=="string"){k[g]()
}})
}var b=e.fn.collapse;
e.fn.collapse=c;
e.fn.collapse.Constructor=f;
e.fn.collapse.noConflict=function(){e.fn.collapse=b;
return this
};
e(document).on("click.bs.collapse.data-api",'[data-toggle="collapse"]',function(n){var l=e(this);
if(!l.attr("data-target")){n.preventDefault()
}var g=d(l);
var k=g.data("bs.collapse");
var j=k?"toggle":l.data();
c.call(g,j)
})
}(jQuery);
+function(c){function b(){var f=document.createElement("bootstrap");
var e={WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"oTransitionEnd otransitionend",transition:"transitionend"};
for(var d in e){if(f.style[d]!==undefined){return{end:e[d]}
}}return false
}c.fn.emulateTransitionEnd=function(f){var e=false;
var d=this;
c(this).one("bsTransitionEnd",function(){e=true
});
var g=function(){if(!e){c(d).trigger(c.support.transition.end)
}};
setTimeout(g,f);
return this
};
c(function(){c.support.transition=b();
if(!c.support.transition){return
}c.event.special.bsTransitionEnd={bindType:c.support.transition.end,delegateType:c.support.transition.end,handle:function(d){if(c(d.target).is(this)){return d.handleObj.handler.apply(this,arguments)
}}}
})
}(jQuery);
+function(e){var c=function(g){this.element=e(g)
};
c.VERSION="3.3.7";
c.TRANSITION_DURATION=150;
c.prototype.show=function(){var r=this.element;
var k=r.closest("ul:not(.dropdown-menu)");
var j=r.data("target");
if(!j){j=r.attr("href");
j=j&&j.replace(/.*(?=#[^\s]*$)/,"")
}if(r.parent("li").hasClass("active")){return
}var n=k.find(".active:last a");
var o=e.Event("hide.bs.tab",{relatedTarget:r[0]});
var l=e.Event("show.bs.tab",{relatedTarget:n[0]});
n.trigger(o);
r.trigger(l);
if(l.isDefaultPrevented()||o.isDefaultPrevented()){return
}var g=e(j);
this.activate(r.closest("li"),k);
this.activate(g,g.parent(),function(){n.trigger({type:"hidden.bs.tab",relatedTarget:r[0]});
r.trigger({type:"shown.bs.tab",relatedTarget:n[0]})
})
};
c.prototype.activate=function(k,j,o){var g=j.find("> .active");
var n=o&&e.support.transition&&(g.length&&g.hasClass("fade")||!!j.find("> .fade").length);
function l(){g.removeClass("active").find("> .dropdown-menu > .active").removeClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded",false);
k.addClass("active").find('[data-toggle="tab"]').attr("aria-expanded",true);
if(n){k[0].offsetWidth;
k.addClass("in")
}else{k.removeClass("fade")
}if(k.parent(".dropdown-menu").length){k.closest("li.dropdown").addClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded",true)
}o&&o()
}g.length&&n?g.one("bsTransitionEnd",l).emulateTransitionEnd(c.TRANSITION_DURATION):l();
g.removeClass("in")
};
function d(g){return this.each(function(){var k=e(this);
var j=k.data("bs.tab");
if(!j){k.data("bs.tab",(j=new c(this)))
}if(typeof g=="string"){j[g]()
}})
}var b=e.fn.tab;
e.fn.tab=d;
e.fn.tab.Constructor=c;
e.fn.tab.noConflict=function(){e.fn.tab=b;
return this
};
var f=function(g){g.preventDefault();
d.call(e(this),"show")
};
e(document).on("click.bs.tab.data-api",'[data-toggle="tab"]',f).on("click.bs.tab.data-api",'[data-toggle="pill"]',f)
}(jQuery);
+function(f){function c(g){return g.is('[type="checkbox"]')?g.prop("checked"):g.is('[type="radio"]')?!!f('[name="'+g.attr("name")+'"]:checked').length:g.is("select[multiple]")?(g.val()||[]).length:g.val()
}var d=function(j,g){this.options=g;
this.validators=f.extend({},d.VALIDATORS,g.custom);
this.$element=f(j);
this.$btn=f('button[type="submit"], input[type="submit"]').filter('[form="'+this.$element.attr("id")+'"]').add(this.$element.find('input[type="submit"], button[type="submit"]'));
this.update();
this.$element.on("input.bs.validator change.bs.validator focusout.bs.validator",f.proxy(this.onInput,this));
this.$element.on("submit.bs.validator",f.proxy(this.onSubmit,this));
this.$element.on("reset.bs.validator",f.proxy(this.reset,this));
this.$element.find("[data-match]").each(function(){var l=f(this);
var k=l.attr("data-match");
f(k).on("input.bs.validator",function(n){c(l)&&l.trigger("input.bs.validator")
})
});
this.$inputs.filter(function(){return c(f(this))&&!f(this).closest(".has-error").length
}).trigger("focusout");
this.$element.attr("novalidate",true)
};
d.VERSION="0.11.9";
d.INPUT_SELECTOR=':input:not([type="hidden"], [type="submit"], [type="reset"], button)';
d.FOCUS_OFFSET=20;
d.DEFAULTS={delay:500,html:false,disable:true,focus:true,custom:{},errors:{match:"Does not match",minlength:"Not long enough"},feedback:{success:"glyphicon-ok",error:"glyphicon-remove"}};
d.VALIDATORS={"native":function(g){var j=g[0];
if(j.checkValidity){return !j.checkValidity()&&!j.validity.valid&&(j.validationMessage||"error!")
}},match:function(g){var j=g.attr("data-match");
return g.val()!==f(j).val()&&d.DEFAULTS.errors.match
},minlength:function(g){var j=g.attr("data-minlength");
return g.val().length<j&&d.DEFAULTS.errors.minlength
}};
d.prototype.update=function(){var g=this;
this.$inputs=this.$element.find(d.INPUT_SELECTOR).add(this.$element.find('[data-validate="true"]')).not(this.$element.find('[data-validate="false"]').each(function(){g.clearErrors(f(this))
}));
this.toggleSubmit();
return this
};
d.prototype.onInput=function(l){var j=this;
var k=f(l.target);
var g=l.type!=="focusout";
if(!this.$inputs.is(k)){return
}this.validateInput(k,g).done(function(){j.toggleSubmit()
})
};
d.prototype.validateInput=function(k,g){var l=c(k);
var o=k.data("bs.validator.errors");
if(k.is('[type="radio"]')){k=this.$element.find('input[name="'+k.attr("name")+'"]')
}var n=f.Event("validate.bs.validator",{relatedTarget:k[0]});
this.$element.trigger(n);
if(n.isDefaultPrevented()){return
}var j=this;
return this.runValidators(k).done(function(r){k.data("bs.validator.errors",r);
r.length?g?j.defer(k,j.showErrors):j.showErrors(k):j.clearErrors(k);
if(!o||r.toString()!==o.toString()){n=r.length?f.Event("invalid.bs.validator",{relatedTarget:k[0],detail:r}):f.Event("valid.bs.validator",{relatedTarget:k[0],detail:o});
j.$element.trigger(n)
}j.toggleSubmit();
j.$element.trigger(f.Event("validated.bs.validator",{relatedTarget:k[0]}))
})
};
d.prototype.runValidators=function(n){var r=[];
var j=f.Deferred();
n.data("bs.validator.deferred")&&n.data("bs.validator.deferred").reject();
n.data("bs.validator.deferred",j);
function l(t){return n.attr("data-"+t+"-error")
}function o(){var t=n[0].validity;
return t.typeMismatch?n.attr("data-type-error"):t.patternMismatch?n.attr("data-pattern-error"):t.stepMismatch?n.attr("data-step-error"):t.rangeOverflow?n.attr("data-max-error"):t.rangeUnderflow?n.attr("data-min-error"):t.valueMissing?n.attr("data-required-error"):null
}function g(){return n.attr("data-error")
}function k(t){return l(t)||o()||g()
}f.each(this.validators,f.proxy(function(v,u){var t=null;
if((c(n)||n.attr("required"))&&(n.attr("data-"+v)!==undefined||v=="native")&&(t=u.call(this,n))){t=k(v)||t;
!~r.indexOf(t)&&r.push(t)
}},this));
if(!r.length&&c(n)&&n.attr("data-remote")){this.defer(n,function(){var t={};
t[n.attr("name")]=c(n);
f.get(n.attr("data-remote"),t).fail(function(v,x,u){r.push(k("remote")||u)
}).always(function(){j.resolve(r)
})
})
}else{j.resolve(r)
}return j.promise()
};
d.prototype.validate=function(){var g=this;
f.when(this.$inputs.map(function(j){return g.validateInput(f(this),false)
})).then(function(){g.toggleSubmit();
g.focusError()
});
return this
};
d.prototype.focusError=function(){if(!this.options.focus){return
}var g=this.$element.find(".has-error :input:first");
if(g.length===0){return
}f("html, body").animate({scrollTop:g.offset().top-d.FOCUS_OFFSET},250);
g.focus()
};
d.prototype.showErrors=function(g){var o=this.options.html?"html":"text";
var n=g.data("bs.validator.errors");
var j=g.closest(".form-group");
var k=j.find(".help-block.with-errors");
var l=j.find(".form-control-feedback");
if(!n.length){return
}n=f("<ul/>").addClass("list-unstyled").append(f.map(n,function(r){return f("<li/>")[o](r)
}));
k.data("bs.validator.originalContent")===undefined&&k.data("bs.validator.originalContent",k.html());
k.empty().append(n);
j.addClass("has-error has-danger");
j.hasClass("has-feedback")&&l.removeClass(this.options.feedback.success)&&l.addClass(this.options.feedback.error)&&j.removeClass("has-success")
};
d.prototype.clearErrors=function(g){var j=g.closest(".form-group");
var k=j.find(".help-block.with-errors");
var l=j.find(".form-control-feedback");
k.html(k.data("bs.validator.originalContent"));
j.removeClass("has-error has-danger has-success");
j.hasClass("has-feedback")&&l.removeClass(this.options.feedback.error)&&l.removeClass(this.options.feedback.success)&&c(g)&&l.addClass(this.options.feedback.success)&&j.addClass("has-success")
};
d.prototype.hasErrors=function(){function g(){return !!(f(this).data("bs.validator.errors")||[]).length
}return !!this.$inputs.filter(g).length
};
d.prototype.isIncomplete=function(){function g(){var j=c(f(this));
return !(typeof j=="string"?f.trim(j):j)
}return !!this.$inputs.filter("[required]").filter(g).length
};
d.prototype.onSubmit=function(g){this.validate();
if(this.isIncomplete()||this.hasErrors()){g.preventDefault()
}};
d.prototype.toggleSubmit=function(){if(!this.options.disable){return
}this.$btn.toggleClass("disabled",this.isIncomplete()||this.hasErrors())
};
d.prototype.defer=function(g,j){j=f.proxy(j,this,g);
if(!this.options.delay){return j()
}window.clearTimeout(g.data("bs.validator.timeout"));
g.data("bs.validator.timeout",window.setTimeout(j,this.options.delay))
};
d.prototype.reset=function(){this.$element.find(".form-control-feedback").removeClass(this.options.feedback.error).removeClass(this.options.feedback.success);
this.$inputs.removeData(["bs.validator.errors","bs.validator.deferred"]).each(function(){var j=f(this);
var g=j.data("bs.validator.timeout");
window.clearTimeout(g)&&j.removeData("bs.validator.timeout")
});
this.$element.find(".help-block.with-errors").each(function(){var j=f(this);
var g=j.data("bs.validator.originalContent");
j.removeData("bs.validator.originalContent").html(g)
});
this.$btn.removeClass("disabled");
this.$element.find(".has-error, .has-danger, .has-success").removeClass("has-error has-danger has-success");
return this
};
d.prototype.destroy=function(){this.reset();
this.$element.removeAttr("novalidate").removeData("bs.validator").off(".bs.validator");
this.$inputs.off(".bs.validator");
this.options=null;
this.validators=null;
this.$element=null;
this.$btn=null;
this.$inputs=null;
return this
};
function e(g){return this.each(function(){var l=f(this);
var j=f.extend({},d.DEFAULTS,l.data(),typeof g=="object"&&g);
var k=l.data("bs.validator");
if(!k&&g=="destroy"){return
}if(!k){l.data("bs.validator",(k=new d(this,j)))
}if(typeof g=="string"){k[g]()
}})
}var b=f.fn.validator;
f.fn.validator=e;
f.fn.validator.Constructor=d;
f.fn.validator.noConflict=function(){f.fn.validator=b;
return this
};
f(window).on("load",function(){f('form[data-toggle="validator"]').each(function(){var g=f(this);
e.call(g,g.data())
})
})
}(jQuery);
/*!
Chosen, a Select Box Enhancer for jQuery and Prototype
by Patrick Filler for Harvest, http://getharvest.com

Version 1.6.2
Full source at https://github.com/harvesthq/chosen
Copyright (c) 2011-2016 Harvest http://getharvest.com

MIT License, https://github.com/harvesthq/chosen/blob/master/LICENSE.md
This file is generated by `grunt build`, do not edit it by hand.
*/
(function(){var g,b,j,e,f,c={}.hasOwnProperty,d=function(o,l){for(var k in l){if(c.call(l,k)){o[k]=l[k]
}}function n(){this.constructor=o
}n.prototype=l.prototype;
o.prototype=new n();
o.__super__=l.prototype;
return o
};
e=(function(){function k(){this.options_index=0;
this.parsed=[]
}k.prototype.add_node=function(l){if(l.nodeName.toUpperCase()==="OPTGROUP"){return this.add_group(l)
}else{return this.add_option(l)
}};
k.prototype.add_group=function(v){var u,o,t,n,r,l;
u=this.parsed.length;
this.parsed.push({array_index:u,group:true,label:this.escapeExpression(v.label),title:v.title?v.title:void 0,children:0,disabled:v.disabled,classes:v.className});
r=v.childNodes;
l=[];
for(t=0,n=r.length;
t<n;
t++){o=r[t];
l.push(this.add_option(o,u,v.disabled))
}return l
};
k.prototype.add_option=function(n,o,l){if(n.nodeName.toUpperCase()==="OPTION"){if(n.text!==""){if(o!=null){this.parsed[o].children+=1
}this.parsed.push({array_index:this.parsed.length,options_index:this.options_index,value:n.value,text:n.text,html:n.innerHTML,title:n.title?n.title:void 0,selected:n.selected,disabled:l===true?l:n.disabled,group_array_index:o,group_label:o!=null?this.parsed[o].label:null,classes:n.className,style:n.style.cssText})
}else{this.parsed.push({array_index:this.parsed.length,options_index:this.options_index,empty:true})
}return this.options_index+=1
}};
k.prototype.escapeExpression=function(o){var n,l;
if((o==null)||o===false){return""
}if(!/[\&\<\>\"\'\`]/.test(o)){return o
}n={"<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#x27;","`":"&#x60;"};
l=/&(?!\w+;)|[\<\>\"\'\`]/g;
return o.replace(l,function(r){return n[r]||"&amp;"
})
};
return k
})();
e.select_to_array=function(k){var t,r,o,l,n;
r=new e();
n=k.childNodes;
for(o=0,l=n.length;
o<l;
o++){t=n[o];
r.add_node(t)
}return r.parsed
};
b=(function(){function k(l,n){this.form_field=l;
this.options=n!=null?n:{};
if(!k.browser_is_supported()){return
}this.is_multiple=this.form_field.multiple;
this.set_default_text();
this.set_default_values();
this.setup();
this.set_up_html();
this.register_observers();
this.on_ready()
}k.prototype.set_default_values=function(){var l=this;
this.click_test_action=function(n){return l.test_active_click(n)
};
this.activate_action=function(n){return l.activate_field(n)
};
this.active_field=false;
this.mouse_on_container=false;
this.results_showing=false;
this.result_highlighted=null;
this.allow_single_deselect=(this.options.allow_single_deselect!=null)&&(this.form_field.options[0]!=null)&&this.form_field.options[0].text===""?this.options.allow_single_deselect:false;
this.disable_search_threshold=this.options.disable_search_threshold||0;
this.disable_search=this.options.disable_search||false;
this.enable_split_word_search=this.options.enable_split_word_search!=null?this.options.enable_split_word_search:true;
this.group_search=this.options.group_search!=null?this.options.group_search:true;
this.search_contains=this.options.search_contains||false;
this.single_backstroke_delete=this.options.single_backstroke_delete!=null?this.options.single_backstroke_delete:true;
this.max_selected_options=this.options.max_selected_options||Infinity;
this.inherit_select_classes=this.options.inherit_select_classes||false;
this.display_selected_options=this.options.display_selected_options!=null?this.options.display_selected_options:true;
this.display_disabled_options=this.options.display_disabled_options!=null?this.options.display_disabled_options:true;
this.include_group_label_in_selected=this.options.include_group_label_in_selected||false;
this.max_shown_results=this.options.max_shown_results||Number.POSITIVE_INFINITY;
return this.case_sensitive_search=this.options.case_sensitive_search||false
};
k.prototype.set_default_text=function(){if(this.form_field.getAttribute("data-placeholder")){this.default_text=this.form_field.getAttribute("data-placeholder")
}else{if(this.is_multiple){this.default_text=this.options.placeholder_text_multiple||this.options.placeholder_text||k.default_multiple_text
}else{this.default_text=this.options.placeholder_text_single||this.options.placeholder_text||k.default_single_text
}}return this.results_none_found=this.form_field.getAttribute("data-no_results_text")||this.options.no_results_text||k.default_no_result_text
};
k.prototype.choice_label=function(l){if(this.include_group_label_in_selected&&(l.group_label!=null)){return"<b class='group-name'>"+l.group_label+"</b>"+l.html
}else{return l.html
}};
k.prototype.mouse_enter=function(){return this.mouse_on_container=true
};
k.prototype.mouse_leave=function(){return this.mouse_on_container=false
};
k.prototype.input_focus=function(l){var n=this;
if(this.is_multiple){if(!this.active_field){return setTimeout((function(){return n.container_mousedown()
}),50)
}}else{if(!this.active_field){return this.activate_field()
}}};
k.prototype.input_blur=function(l){var n=this;
if(!this.mouse_on_container){this.active_field=false;
return setTimeout((function(){return n.blur_test()
}),100)
}};
k.prototype.results_option_build=function(n){var o,u,v,x,t,l,r;
o="";
x=0;
r=this.results_data;
for(t=0,l=r.length;
t<l;
t++){u=r[t];
v="";
if(u.group){v=this.result_add_group(u)
}else{v=this.result_add_option(u)
}if(v!==""){x++;
o+=v
}if(n!=null?n.first:void 0){if(u.selected&&this.is_multiple){this.choice_build(u)
}else{if(u.selected&&!this.is_multiple){this.single_set_selected_text(this.choice_label(u))
}}}if(x>=this.max_shown_results){break
}}return o
};
k.prototype.result_add_option=function(o){var n,l;
if(!o.search_match){return""
}if(!this.include_option_in_results(o)){return""
}n=[];
if(!o.disabled&&!(o.selected&&this.is_multiple)){n.push("active-result")
}if(o.disabled&&!(o.selected&&this.is_multiple)){n.push("disabled-result")
}if(o.selected){n.push("result-selected")
}if(o.group_array_index!=null){n.push("group-option")
}if(o.classes!==""){n.push(o.classes)
}l=document.createElement("li");
l.className=n.join(" ");
l.style.cssText=o.style;
l.setAttribute("data-option-array-index",o.array_index);
l.innerHTML=o.search_text;
if(o.title){l.title=o.title
}return this.outerHTML(l)
};
k.prototype.result_add_group=function(o){var n,l;
if(!(o.search_match||o.group_match)){return""
}if(!(o.active_options>0)){return""
}n=[];
n.push("group-result");
if(o.classes){n.push(o.classes)
}l=document.createElement("li");
l.className=n.join(" ");
l.innerHTML=o.search_text;
if(o.title){l.title=o.title
}return this.outerHTML(l)
};
k.prototype.results_update_field=function(){this.set_default_text();
if(!this.is_multiple){this.results_reset_cleanup()
}this.result_clear_highlight();
this.results_build();
if(this.results_showing){return this.winnow_results()
}};
k.prototype.reset_single_select_options=function(){var l,t,o,r,n;
r=this.results_data;
n=[];
for(t=0,o=r.length;
t<o;
t++){l=r[t];
if(l.selected){n.push(l.selected=false)
}else{n.push(void 0)
}}return n
};
k.prototype.results_toggle=function(){if(this.results_showing){return this.results_hide()
}else{return this.results_show()
}};
k.prototype.results_search=function(l){if(this.results_showing){return this.winnow_results()
}else{return this.results_show()
}};
k.prototype.winnow_results=function(){var B,u,y,t,l,A,v,z,n,o,x,r;
this.no_results_clear();
t=0;
A=this.get_search_text();
B=A.replace(/[-[\]{}()*+?.,\\^$|#\s]/g,"\\$&");
n=new RegExp(B,"i");
y=this.get_search_regex(B);
r=this.results_data;
for(o=0,x=r.length;
o<x;
o++){u=r[o];
u.search_match=false;
l=null;
if(this.include_option_in_results(u)){if(u.group){u.group_match=false;
u.active_options=0
}if((u.group_array_index!=null)&&this.results_data[u.group_array_index]){l=this.results_data[u.group_array_index];
if(l.active_options===0&&l.search_match){t+=1
}l.active_options+=1
}u.search_text=u.group?u.label:u.html;
if(!(u.group&&!this.group_search)){u.search_match=this.search_string_match(u.search_text,y);
if(u.search_match&&!u.group){t+=1
}if(u.search_match){if(A.length){v=u.search_text.search(n);
z=u.search_text.substr(0,v+A.length)+"</em>"+u.search_text.substr(v+A.length);
u.search_text=z.substr(0,v)+"<em>"+z.substr(v)
}if(l!=null){l.group_match=true
}}else{if((u.group_array_index!=null)&&this.results_data[u.group_array_index].search_match){u.search_match=true
}}}}}this.result_clear_highlight();
if(t<1&&A.length){this.update_results_content("");
return this.no_results(A)
}else{this.update_results_content(this.results_option_build());
return this.winnow_results_set_highlight()
}};
k.prototype.get_search_regex=function(n){var l,o;
l=this.search_contains?"":"^";
o=this.case_sensitive_search?"":"i";
return new RegExp(l+n,o)
};
k.prototype.search_string_match=function(u,o){var n,t,r,l;
if(o.test(u)){return true
}else{if(this.enable_split_word_search&&(u.indexOf(" ")>=0||u.indexOf("[")===0)){t=u.replace(/\[|\]/g,"").split(" ");
if(t.length){for(r=0,l=t.length;
r<l;
r++){n=t[r];
if(o.test(n)){return true
}}}}}};
k.prototype.choices_count=function(){var n,r,l,o;
if(this.selected_option_count!=null){return this.selected_option_count
}this.selected_option_count=0;
o=this.form_field.options;
for(r=0,l=o.length;
r<l;
r++){n=o[r];
if(n.selected){this.selected_option_count+=1
}}return this.selected_option_count
};
k.prototype.choices_click=function(l){l.preventDefault();
if(!(this.results_showing||this.is_disabled)){return this.results_show()
}};
k.prototype.keyup_checker=function(l){var o,n;
o=(n=l.which)!=null?n:l.keyCode;
this.search_field_scale();
switch(o){case 8:if(this.is_multiple&&this.backstroke_length<1&&this.choices_count()>0){return this.keydown_backstroke()
}else{if(!this.pending_backstroke){this.result_clear_highlight();
return this.results_search()
}}break;
case 13:l.preventDefault();
if(this.results_showing){return this.result_select(l)
}break;
case 27:if(this.results_showing){this.results_hide()
}return true;
case 9:case 38:case 40:case 16:case 91:case 17:case 18:break;
default:return this.results_search()
}};
k.prototype.clipboard_event_checker=function(l){var n=this;
return setTimeout((function(){return n.results_search()
}),50)
};
k.prototype.container_width=function(){if(this.options.width!=null){return this.options.width
}else{return""+this.form_field.offsetWidth+"px"
}};
k.prototype.include_option_in_results=function(l){if(this.is_multiple&&(!this.display_selected_options&&l.selected)){return false
}if(!this.display_disabled_options&&l.disabled){return false
}if(l.empty){return false
}return true
};
k.prototype.search_results_touchstart=function(l){this.touch_started=true;
return this.search_results_mouseover(l)
};
k.prototype.search_results_touchmove=function(l){this.touch_started=false;
return this.search_results_mouseout(l)
};
k.prototype.search_results_touchend=function(l){if(this.touch_started){return this.search_results_mouseup(l)
}};
k.prototype.outerHTML=function(n){var l;
if(n.outerHTML){return n.outerHTML
}l=document.createElement("div");
l.appendChild(n);
return l.innerHTML
};
k.browser_is_supported=function(){return true
};
k.default_multiple_text="Select Some Options";
k.default_single_text="Select an Option";
k.default_no_result_text="No results match";
return k
})();
g=jQuery;
g.fn.extend({chosen:function(k){if(!b.browser_is_supported()){return this
}return this.each(function(n){var o,l;
o=g(this);
l=o.data("chosen");
if(k==="destroy"){if(l instanceof j){l.destroy()
}return
}if(!(l instanceof j)){o.data("chosen",new j(this,k))
}})
}});
j=(function(k){d(l,k);
function l(){f=l.__super__.constructor.apply(this,arguments);
return f
}l.prototype.setup=function(){this.form_field_jq=g(this.form_field);
this.current_selectedIndex=this.form_field.selectedIndex;
return this.is_rtl=this.form_field_jq.hasClass("chosen-rtl")
};
l.prototype.set_up_html=function(){var n,o;
n=["chosen-container"];
n.push("chosen-container-"+(this.is_multiple?"multi":"single"));
if(this.inherit_select_classes&&this.form_field.className){n.push(this.form_field.className)
}if(this.is_rtl){n.push("chosen-rtl")
}o={"class":n.join(" "),style:"width: "+(this.container_width())+";",title:this.form_field.title};
if(this.form_field.id.length){o.id=this.form_field.id.replace(/[^\w]/g,"_")+"_chosen"
}this.container=g("<div />",o);
if(this.is_multiple){this.container.html('<ul class="chosen-choices"><li class="search-field"><input type="text" value="'+this.default_text+'" class="default" autocomplete="off" style="width:25px;" /></li></ul><div class="chosen-drop"><ul class="chosen-results"></ul></div>')
}else{this.container.html('<a class="chosen-single chosen-default"><span>'+this.default_text+'</span><div><b></b></div></a><div class="chosen-drop"><div class="chosen-search"><input type="text" autocomplete="off" /></div><ul class="chosen-results"></ul></div>')
}this.form_field_jq.hide().after(this.container);
this.dropdown=this.container.find("div.chosen-drop").first();
this.search_field=this.container.find("input").first();
this.search_results=this.container.find("ul.chosen-results").first();
this.search_field_scale();
this.search_no_results=this.container.find("li.no-results").first();
if(this.is_multiple){this.search_choices=this.container.find("ul.chosen-choices").first();
this.search_container=this.container.find("li.search-field").first()
}else{this.search_container=this.container.find("div.chosen-search").first();
this.selected_item=this.container.find(".chosen-single").first()
}this.results_build();
this.set_tab_index();
return this.set_label_behavior()
};
l.prototype.on_ready=function(){return this.form_field_jq.trigger("chosen:ready",{chosen:this})
};
l.prototype.register_observers=function(){var n=this;
this.container.bind("touchstart.chosen",function(o){n.container_mousedown(o);
return o.preventDefault()
});
this.container.bind("touchend.chosen",function(o){n.container_mouseup(o);
return o.preventDefault()
});
this.container.bind("mousedown.chosen",function(o){n.container_mousedown(o)
});
this.container.bind("mouseup.chosen",function(o){n.container_mouseup(o)
});
this.container.bind("mouseenter.chosen",function(o){n.mouse_enter(o)
});
this.container.bind("mouseleave.chosen",function(o){n.mouse_leave(o)
});
this.search_results.bind("mouseup.chosen",function(o){n.search_results_mouseup(o)
});
this.search_results.bind("mouseover.chosen",function(o){n.search_results_mouseover(o)
});
this.search_results.bind("mouseout.chosen",function(o){n.search_results_mouseout(o)
});
this.search_results.bind("mousewheel.chosen DOMMouseScroll.chosen",function(o){n.search_results_mousewheel(o)
});
this.search_results.bind("touchstart.chosen",function(o){n.search_results_touchstart(o)
});
this.search_results.bind("touchmove.chosen",function(o){n.search_results_touchmove(o)
});
this.search_results.bind("touchend.chosen",function(o){n.search_results_touchend(o)
});
this.form_field_jq.bind("chosen:updated.chosen",function(o){n.results_update_field(o)
});
this.form_field_jq.bind("chosen:activate.chosen",function(o){n.activate_field(o)
});
this.form_field_jq.bind("chosen:open.chosen",function(o){n.container_mousedown(o)
});
this.form_field_jq.bind("chosen:close.chosen",function(o){n.input_blur(o)
});
this.search_field.bind("blur.chosen",function(o){n.input_blur(o)
});
this.search_field.bind("keyup.chosen",function(o){n.keyup_checker(o)
});
this.search_field.bind("keydown.chosen",function(o){n.keydown_checker(o)
});
this.search_field.bind("focus.chosen",function(o){n.input_focus(o)
});
this.search_field.bind("cut.chosen",function(o){n.clipboard_event_checker(o)
});
this.search_field.bind("paste.chosen",function(o){n.clipboard_event_checker(o)
});
if(this.is_multiple){return this.search_choices.bind("click.chosen",function(o){n.choices_click(o)
})
}else{return this.container.bind("click.chosen",function(o){o.preventDefault()
})
}};
l.prototype.destroy=function(){g(this.container[0].ownerDocument).unbind("click.chosen",this.click_test_action);
if(this.search_field[0].tabIndex){this.form_field_jq[0].tabIndex=this.search_field[0].tabIndex
}this.container.remove();
this.form_field_jq.removeData("chosen");
return this.form_field_jq.show()
};
l.prototype.search_field_disabled=function(){this.is_disabled=this.form_field_jq[0].disabled;
if(this.is_disabled){this.container.addClass("chosen-disabled");
this.search_field[0].disabled=true;
if(!this.is_multiple){this.selected_item.unbind("focus.chosen",this.activate_action)
}return this.close_field()
}else{this.container.removeClass("chosen-disabled");
this.search_field[0].disabled=false;
if(!this.is_multiple){return this.selected_item.bind("focus.chosen",this.activate_action)
}}};
l.prototype.container_mousedown=function(n){if(!this.is_disabled){if(n&&n.type==="mousedown"&&!this.results_showing){n.preventDefault()
}if(!((n!=null)&&(g(n.target)).hasClass("search-choice-close"))){if(!this.active_field){if(this.is_multiple){this.search_field.val("")
}g(this.container[0].ownerDocument).bind("click.chosen",this.click_test_action);
this.results_show()
}else{if(!this.is_multiple&&n&&((g(n.target)[0]===this.selected_item[0])||g(n.target).parents("a.chosen-single").length)){n.preventDefault();
this.results_toggle()
}}return this.activate_field()
}}};
l.prototype.container_mouseup=function(n){if(n.target.nodeName==="ABBR"&&!this.is_disabled){return this.results_reset(n)
}};
l.prototype.search_results_mousewheel=function(n){var o;
if(n.originalEvent){o=n.originalEvent.deltaY||-n.originalEvent.wheelDelta||n.originalEvent.detail
}if(o!=null){n.preventDefault();
if(n.type==="DOMMouseScroll"){o=o*40
}return this.search_results.scrollTop(o+this.search_results.scrollTop())
}};
l.prototype.blur_test=function(n){if(!this.active_field&&this.container.hasClass("chosen-container-active")){return this.close_field()
}};
l.prototype.close_field=function(){g(this.container[0].ownerDocument).unbind("click.chosen",this.click_test_action);
this.active_field=false;
this.results_hide();
this.container.removeClass("chosen-container-active");
this.clear_backstroke();
this.show_search_field_default();
return this.search_field_scale()
};
l.prototype.activate_field=function(){this.container.addClass("chosen-container-active");
this.active_field=true;
this.search_field.val(this.search_field.val());
return this.search_field.focus()
};
l.prototype.test_active_click=function(n){var o;
o=g(n.target).closest(".chosen-container");
if(o.length&&this.container[0]===o[0]){return this.active_field=true
}else{return this.close_field()
}};
l.prototype.results_build=function(){this.parsing=true;
this.selected_option_count=null;
this.results_data=e.select_to_array(this.form_field);
if(this.is_multiple){this.search_choices.find("li.search-choice").remove()
}else{if(!this.is_multiple){this.single_set_selected_text();
if(this.disable_search||this.form_field.options.length<=this.disable_search_threshold){this.search_field[0].readOnly=true;
this.container.addClass("chosen-container-single-nosearch")
}else{this.search_field[0].readOnly=false;
this.container.removeClass("chosen-container-single-nosearch")
}}}this.update_results_content(this.results_option_build({first:true}));
this.search_field_disabled();
this.show_search_field_default();
this.search_field_scale();
return this.parsing=false
};
l.prototype.result_do_highlight=function(o){var v,u,r,t,n;
if(o.length){this.result_clear_highlight();
this.result_highlight=o;
this.result_highlight.addClass("highlighted");
r=parseInt(this.search_results.css("maxHeight"),10);
n=this.search_results.scrollTop();
t=r+n;
u=this.result_highlight.position().top+this.search_results.scrollTop();
v=u+this.result_highlight.outerHeight();
if(v>=t){return this.search_results.scrollTop((v-r)>0?v-r:0)
}else{if(u<n){return this.search_results.scrollTop(u)
}}}};
l.prototype.result_clear_highlight=function(){if(this.result_highlight){this.result_highlight.removeClass("highlighted")
}return this.result_highlight=null
};
l.prototype.results_show=function(){if(this.is_multiple&&this.max_selected_options<=this.choices_count()){this.form_field_jq.trigger("chosen:maxselected",{chosen:this});
return false
}this.container.addClass("chosen-with-drop");
this.results_showing=true;
this.search_field.focus();
this.search_field.val(this.search_field.val());
this.winnow_results();
return this.form_field_jq.trigger("chosen:showing_dropdown",{chosen:this})
};
l.prototype.update_results_content=function(n){return this.search_results.html(n)
};
l.prototype.results_hide=function(){if(this.results_showing){this.result_clear_highlight();
this.container.removeClass("chosen-with-drop");
this.form_field_jq.trigger("chosen:hiding_dropdown",{chosen:this})
}return this.results_showing=false
};
l.prototype.set_tab_index=function(o){var n;
if(this.form_field.tabIndex){n=this.form_field.tabIndex;
this.form_field.tabIndex=-1;
return this.search_field[0].tabIndex=n
}};
l.prototype.set_label_behavior=function(){var n=this;
this.form_field_label=this.form_field_jq.parents("label");
if(!this.form_field_label.length&&this.form_field.id.length){this.form_field_label=g("label[for='"+this.form_field.id+"']")
}if(this.form_field_label.length>0){return this.form_field_label.bind("click.chosen",function(o){if(n.is_multiple){return n.container_mousedown(o)
}else{return n.activate_field()
}})
}};
l.prototype.show_search_field_default=function(){if(this.is_multiple&&this.choices_count()<1&&!this.active_field){this.search_field.val(this.default_text);
return this.search_field.addClass("default")
}else{this.search_field.val("");
return this.search_field.removeClass("default")
}};
l.prototype.search_results_mouseup=function(n){var o;
o=g(n.target).hasClass("active-result")?g(n.target):g(n.target).parents(".active-result").first();
if(o.length){this.result_highlight=o;
this.result_select(n);
return this.search_field.focus()
}};
l.prototype.search_results_mouseover=function(n){var o;
o=g(n.target).hasClass("active-result")?g(n.target):g(n.target).parents(".active-result").first();
if(o){return this.result_do_highlight(o)
}};
l.prototype.search_results_mouseout=function(n){if(g(n.target).hasClass("active-result"||g(n.target).parents(".active-result").first())){return this.result_clear_highlight()
}};
l.prototype.choice_build=function(o){var n,r,t=this;
n=g("<li />",{"class":"search-choice"}).html("<span>"+(this.choice_label(o))+"</span>");
if(o.disabled){n.addClass("search-choice-disabled")
}else{r=g("<a />",{"class":"search-choice-close","data-option-array-index":o.array_index});
r.bind("click.chosen",function(u){return t.choice_destroy_link_click(u)
});
n.append(r)
}return this.search_container.before(n)
};
l.prototype.choice_destroy_link_click=function(n){n.preventDefault();
n.stopPropagation();
if(!this.is_disabled){return this.choice_destroy(g(n.target))
}};
l.prototype.choice_destroy=function(n){if(this.result_deselect(n[0].getAttribute("data-option-array-index"))){this.show_search_field_default();
if(this.is_multiple&&this.choices_count()>0&&this.search_field.val().length<1){this.results_hide()
}n.parents("li").first().remove();
return this.search_field_scale()
}};
l.prototype.results_reset=function(){this.reset_single_select_options();
this.form_field.options[0].selected=true;
this.single_set_selected_text();
this.show_search_field_default();
this.results_reset_cleanup();
this.form_field_jq.trigger("change");
if(this.active_field){return this.results_hide()
}};
l.prototype.results_reset_cleanup=function(){this.current_selectedIndex=this.form_field.selectedIndex;
return this.selected_item.find("abbr").remove()
};
l.prototype.result_select=function(n){var r,o;
if(this.result_highlight){r=this.result_highlight;
this.result_clear_highlight();
if(this.is_multiple&&this.max_selected_options<=this.choices_count()){this.form_field_jq.trigger("chosen:maxselected",{chosen:this});
return false
}if(this.is_multiple){r.removeClass("active-result")
}else{this.reset_single_select_options()
}r.addClass("result-selected");
o=this.results_data[r[0].getAttribute("data-option-array-index")];
o.selected=true;
this.form_field.options[o.options_index].selected=true;
this.selected_option_count=null;
if(this.is_multiple){this.choice_build(o)
}else{this.single_set_selected_text(this.choice_label(o))
}if(!((n.metaKey||n.ctrlKey)&&this.is_multiple)){this.results_hide()
}this.show_search_field_default();
if(this.is_multiple||this.form_field.selectedIndex!==this.current_selectedIndex){this.form_field_jq.trigger("change",{selected:this.form_field.options[o.options_index].value})
}this.current_selectedIndex=this.form_field.selectedIndex;
n.preventDefault();
return this.search_field_scale()
}};
l.prototype.single_set_selected_text=function(n){if(n==null){n=this.default_text
}if(n===this.default_text){this.selected_item.addClass("chosen-default")
}else{this.single_deselect_control_build();
this.selected_item.removeClass("chosen-default")
}return this.selected_item.find("span").html(n)
};
l.prototype.result_deselect=function(o){var n;
n=this.results_data[o];
if(!this.form_field.options[n.options_index].disabled){n.selected=false;
this.form_field.options[n.options_index].selected=false;
this.selected_option_count=null;
this.result_clear_highlight();
if(this.results_showing){this.winnow_results()
}this.form_field_jq.trigger("change",{deselected:this.form_field.options[n.options_index].value});
this.search_field_scale();
return true
}else{return false
}};
l.prototype.single_deselect_control_build=function(){if(!this.allow_single_deselect){return
}if(!this.selected_item.find("abbr").length){this.selected_item.find("span").first().after('<abbr class="search-choice-close"></abbr>')
}return this.selected_item.addClass("chosen-single-with-deselect")
};
l.prototype.get_search_text=function(){return g("<div/>").text(g.trim(this.search_field.val())).html()
};
l.prototype.winnow_results_set_highlight=function(){var n,o;
o=!this.is_multiple?this.search_results.find(".result-selected.active-result"):[];
n=o.length?o.first():this.search_results.find(".active-result").first();
if(n!=null){return this.result_do_highlight(n)
}};
l.prototype.no_results=function(n){var o;
o=g('<li class="no-results">'+this.results_none_found+' "<span></span>"</li>');
o.find("span").first().html(n);
this.search_results.append(o);
return this.form_field_jq.trigger("chosen:no_results",{chosen:this})
};
l.prototype.no_results_clear=function(){return this.search_results.find(".no-results").remove()
};
l.prototype.keydown_arrow=function(){var n;
if(this.results_showing&&this.result_highlight){n=this.result_highlight.nextAll("li.active-result").first();
if(n){return this.result_do_highlight(n)
}}else{return this.results_show()
}};
l.prototype.keyup_arrow=function(){var n;
if(!this.results_showing&&!this.is_multiple){return this.results_show()
}else{if(this.result_highlight){n=this.result_highlight.prevAll("li.active-result");
if(n.length){return this.result_do_highlight(n.first())
}else{if(this.choices_count()>0){this.results_hide()
}return this.result_clear_highlight()
}}}};
l.prototype.keydown_backstroke=function(){var n;
if(this.pending_backstroke){this.choice_destroy(this.pending_backstroke.find("a").first());
return this.clear_backstroke()
}else{n=this.search_container.siblings("li.search-choice").last();
if(n.length&&!n.hasClass("search-choice-disabled")){this.pending_backstroke=n;
if(this.single_backstroke_delete){return this.keydown_backstroke()
}else{return this.pending_backstroke.addClass("search-choice-focus")
}}}};
l.prototype.clear_backstroke=function(){if(this.pending_backstroke){this.pending_backstroke.removeClass("search-choice-focus")
}return this.pending_backstroke=null
};
l.prototype.keydown_checker=function(o){var r,n;
r=(n=o.which)!=null?n:o.keyCode;
this.search_field_scale();
if(r!==8&&this.pending_backstroke){this.clear_backstroke()
}switch(r){case 8:this.backstroke_length=this.search_field.val().length;
break;
case 9:if(this.results_showing&&!this.is_multiple){this.result_select(o)
}this.mouse_on_container=false;
break;
case 13:if(this.results_showing){o.preventDefault()
}break;
case 32:if(this.disable_search){o.preventDefault()
}break;
case 38:o.preventDefault();
this.keyup_arrow();
break;
case 40:o.preventDefault();
this.keydown_arrow();
break
}};
l.prototype.search_field_scale=function(){var n,u,t,o,y,z,x,r,v;
if(this.is_multiple){t=0;
x=0;
y="position:absolute; left: -1000px; top: -1000px; display:none;";
z=["font-size","font-style","font-weight","font-family","line-height","text-transform","letter-spacing"];
for(r=0,v=z.length;
r<v;
r++){o=z[r];
y+=o+":"+this.search_field.css(o)+";"
}n=g("<div />",{style:y});
n.text(this.search_field.val());
g("body").append(n);
x=n.width()+25;
n.remove();
u=this.container.outerWidth();
if(x>u-10){x=u-10
}return this.search_field.css({width:x+"px"})
}};
return l
})(b)
}).call(this);
(function(b){if(typeof define==="function"&&define.amd){define(["jquery"],b)
}else{if(typeof exports!=="undefined"){module.exports=b(require("jquery"))
}else{b(jQuery)
}}}(function(b){var c=window.Slick||{};
c=(function(){var d=0;
function e(j,k){var g=this,f;
g.defaults={accessibility:true,adaptiveHeight:false,appendArrows:b(j),appendDots:b(j),arrows:true,asNavFor:null,prevArrow:'<button type="button" data-role="none" class="slick-prev" aria-label="Previous" tabindex="0" role="button">Previous</button>',nextArrow:'<button type="button" data-role="none" class="slick-next" aria-label="Next" tabindex="0" role="button">Next</button>',autoplay:false,autoplaySpeed:3000,centerMode:false,centerPadding:"50px",cssEase:"ease",customPaging:function(n,l){return b('<button type="button" data-role="none" role="button" tabindex="0" />').text(l+1)
},dots:false,dotsClass:"slick-dots",draggable:true,easing:"linear",edgeFriction:0.35,fade:false,focusOnSelect:false,infinite:true,initialSlide:0,lazyLoad:"ondemand",mobileFirst:false,pauseOnHover:true,pauseOnFocus:true,pauseOnDotsHover:false,respondTo:"window",responsive:null,rows:1,rtl:false,slide:"",slidesPerRow:1,slidesToShow:1,slidesToScroll:1,speed:500,swipe:true,swipeToSlide:false,touchMove:true,touchThreshold:5,useCSS:true,useTransform:true,variableWidth:false,vertical:false,verticalSwiping:false,waitForAnimate:true,zIndex:1000};
g.initials={animating:false,dragging:false,autoPlayTimer:null,currentDirection:0,currentLeft:null,currentSlide:0,direction:1,$dots:null,listWidth:null,listHeight:null,loadIndex:0,$nextArrow:null,$prevArrow:null,slideCount:null,slideWidth:null,$slideTrack:null,$slides:null,sliding:false,slideOffset:0,swipeLeft:null,$list:null,touchObject:{},transformsEnabled:false,unslicked:false};
b.extend(g,g.initials);
g.activeBreakpoint=null;
g.animType=null;
g.animProp=null;
g.breakpoints=[];
g.breakpointSettings=[];
g.cssTransitions=false;
g.focussed=false;
g.interrupted=false;
g.hidden="hidden";
g.paused=true;
g.positionProp=null;
g.respondTo=null;
g.rowCount=1;
g.shouldClick=true;
g.$slider=b(j);
g.$slidesCache=null;
g.transformType=null;
g.transitionType=null;
g.visibilityChange="visibilitychange";
g.windowWidth=0;
g.windowTimer=null;
f=b(j).data("slick")||{};
g.options=b.extend({},g.defaults,k,f);
g.currentSlide=g.options.initialSlide;
g.originalSettings=g.options;
if(typeof document.mozHidden!=="undefined"){g.hidden="mozHidden";
g.visibilityChange="mozvisibilitychange"
}else{if(typeof document.webkitHidden!=="undefined"){g.hidden="webkitHidden";
g.visibilityChange="webkitvisibilitychange"
}}g.autoPlay=b.proxy(g.autoPlay,g);
g.autoPlayClear=b.proxy(g.autoPlayClear,g);
g.autoPlayIterator=b.proxy(g.autoPlayIterator,g);
g.changeSlide=b.proxy(g.changeSlide,g);
g.clickHandler=b.proxy(g.clickHandler,g);
g.selectHandler=b.proxy(g.selectHandler,g);
g.setPosition=b.proxy(g.setPosition,g);
g.swipeHandler=b.proxy(g.swipeHandler,g);
g.dragHandler=b.proxy(g.dragHandler,g);
g.keyHandler=b.proxy(g.keyHandler,g);
g.instanceUid=d++;
g.htmlExpr=/^(?:\s*(<[\w\W]+>)[^>]*)$/;
g.registerBreakpoints();
g.init(true)
}return e
}());
c.prototype.activateADA=function(){var d=this;
d.$slideTrack.find(".slick-active").attr({"aria-hidden":"false"}).find("a, input, button, select").attr({tabindex:"0"})
};
c.prototype.addSlide=c.prototype.slickAdd=function(d,f,g){var e=this;
if(typeof(f)==="boolean"){g=f;
f=null
}else{if(f<0||(f>=e.slideCount)){return false
}}e.unload();
if(typeof(f)==="number"){if(f===0&&e.$slides.length===0){b(d).appendTo(e.$slideTrack)
}else{if(g){b(d).insertBefore(e.$slides.eq(f))
}else{b(d).insertAfter(e.$slides.eq(f))
}}}else{if(g===true){b(d).prependTo(e.$slideTrack)
}else{b(d).appendTo(e.$slideTrack)
}}e.$slides=e.$slideTrack.children(this.options.slide);
e.$slideTrack.children(this.options.slide).detach();
e.$slideTrack.append(e.$slides);
e.$slides.each(function(j,k){b(k).attr("data-slick-index",j)
});
e.$slidesCache=e.$slides;
e.reinit()
};
c.prototype.animateHeight=function(){var e=this;
if(e.options.slidesToShow===1&&e.options.adaptiveHeight===true&&e.options.vertical===false){var d=e.$slides.eq(e.currentSlide).outerHeight(true);
e.$list.animate({height:d},e.options.speed)
}};
c.prototype.animateSlide=function(g,f){var e={},d=this;
d.animateHeight();
if(d.options.rtl===true&&d.options.vertical===false){g=-g
}if(d.transformsEnabled===false){if(d.options.vertical===false){d.$slideTrack.animate({left:g},d.options.speed,d.options.easing,f)
}else{d.$slideTrack.animate({top:g},d.options.speed,d.options.easing,f)
}}else{if(d.cssTransitions===false){if(d.options.rtl===true){d.currentLeft=-(d.currentLeft)
}b({animStart:d.currentLeft}).animate({animStart:g},{duration:d.options.speed,easing:d.options.easing,step:function(j){j=Math.ceil(j);
if(d.options.vertical===false){e[d.animType]="translate("+j+"px, 0px)";
d.$slideTrack.css(e)
}else{e[d.animType]="translate(0px,"+j+"px)";
d.$slideTrack.css(e)
}},complete:function(){if(f){f.call()
}}})
}else{d.applyTransition();
g=Math.ceil(g);
if(d.options.vertical===false){e[d.animType]="translate3d("+g+"px, 0px, 0px)"
}else{e[d.animType]="translate3d(0px,"+g+"px, 0px)"
}d.$slideTrack.css(e);
if(f){setTimeout(function(){d.disableTransition();
f.call()
},d.options.speed)
}}}};
c.prototype.getNavTarget=function(){var e=this,d=e.options.asNavFor;
if(d&&d!==null){d=b(d).not(e.$slider)
}return d
};
c.prototype.asNavFor=function(f){var e=this,d=e.getNavTarget();
if(d!==null&&typeof d==="object"){d.each(function(){var g=b(this).slick("getSlick");
if(!g.unslicked){g.slideHandler(f,true)
}})
}};
c.prototype.applyTransition=function(d){var e=this,f={};
if(e.options.fade===false){f[e.transitionType]=e.transformType+" "+e.options.speed+"ms "+e.options.cssEase
}else{f[e.transitionType]="opacity "+e.options.speed+"ms "+e.options.cssEase
}if(e.options.fade===false){e.$slideTrack.css(f)
}else{e.$slides.eq(d).css(f)
}};
c.prototype.autoPlay=function(){var d=this;
d.autoPlayClear();
if(d.slideCount>d.options.slidesToShow){d.autoPlayTimer=setInterval(d.autoPlayIterator,d.options.autoplaySpeed)
}};
c.prototype.autoPlayClear=function(){var d=this;
if(d.autoPlayTimer){clearInterval(d.autoPlayTimer)
}};
c.prototype.autoPlayIterator=function(){var d=this,e=d.currentSlide+d.options.slidesToScroll;
if(!d.paused&&!d.interrupted&&!d.focussed){if(d.options.infinite===false){if(d.direction===1&&(d.currentSlide+1)===(d.slideCount-1)){d.direction=0
}else{if(d.direction===0){e=d.currentSlide-d.options.slidesToScroll;
if(d.currentSlide-1===0){d.direction=1
}}}}d.slideHandler(e)
}};
c.prototype.buildArrows=function(){var d=this;
if(d.options.arrows===true){d.$prevArrow=b(d.options.prevArrow).addClass("slick-arrow");
d.$nextArrow=b(d.options.nextArrow).addClass("slick-arrow");
if(d.slideCount>d.options.slidesToShow){d.$prevArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex");
d.$nextArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex");
if(d.htmlExpr.test(d.options.prevArrow)){d.$prevArrow.prependTo(d.options.appendArrows)
}if(d.htmlExpr.test(d.options.nextArrow)){d.$nextArrow.appendTo(d.options.appendArrows)
}if(d.options.infinite!==true){d.$prevArrow.addClass("slick-disabled").attr("aria-disabled","true")
}}else{d.$prevArrow.add(d.$nextArrow).addClass("slick-hidden").attr({"aria-disabled":"true",tabindex:"-1"})
}}};
c.prototype.buildDots=function(){var e=this,f,d;
if(e.options.dots===true&&e.slideCount>e.options.slidesToShow){e.$slider.addClass("slick-dotted");
d=b("<ul />").addClass(e.options.dotsClass);
for(f=0;
f<=e.getDotCount();
f+=1){d.append(b("<li />").append(e.options.customPaging.call(this,e,f)))
}e.$dots=d.appendTo(e.options.appendDots);
e.$dots.find("li").first().addClass("slick-active").attr("aria-hidden","false")
}};
c.prototype.buildOut=function(){var d=this;
d.$slides=d.$slider.children(d.options.slide+":not(.slick-cloned)").addClass("slick-slide");
d.slideCount=d.$slides.length;
d.$slides.each(function(e,f){b(f).attr("data-slick-index",e).data("originalStyling",b(f).attr("style")||"")
});
d.$slider.addClass("slick-slider");
d.$slideTrack=(d.slideCount===0)?b('<div class="slick-track"/>').appendTo(d.$slider):d.$slides.wrapAll('<div class="slick-track"/>').parent();
d.$list=d.$slideTrack.wrap('<div aria-live="polite" class="slick-list"/>').parent();
d.$slideTrack.css("opacity",0);
if(d.options.centerMode===true||d.options.swipeToSlide===true){d.options.slidesToScroll=1
}b("img[data-lazy]",d.$slider).not("[src]").addClass("slick-loading");
d.setupInfinite();
d.buildArrows();
d.buildDots();
d.updateDots();
d.setSlideClasses(typeof d.currentSlide==="number"?d.currentSlide:0);
if(d.options.draggable===true){d.$list.addClass("draggable")
}};
c.prototype.buildRows=function(){var r=this,o,n,k,d,l,j,e;
d=document.createDocumentFragment();
j=r.$slider.children();
if(r.options.rows>1){e=r.options.slidesPerRow*r.options.rows;
l=Math.ceil(j.length/e);
for(o=0;
o<l;
o++){var f=document.createElement("div");
for(n=0;
n<r.options.rows;
n++){var t=document.createElement("div");
for(k=0;
k<r.options.slidesPerRow;
k++){var g=(o*e+((n*r.options.slidesPerRow)+k));
if(j.get(g)){t.appendChild(j.get(g))
}}f.appendChild(t)
}d.appendChild(f)
}r.$slider.empty().append(d);
r.$slider.children().children().children().css({width:(100/r.options.slidesPerRow)+"%",display:"inline-block"})
}};
c.prototype.checkResponsive=function(k,n){var o=this,l,d,f,g=false;
var j=o.$slider.width();
var e=window.innerWidth||b(window).width();
if(o.respondTo==="window"){f=e
}else{if(o.respondTo==="slider"){f=j
}else{if(o.respondTo==="min"){f=Math.min(e,j)
}}}if(o.options.responsive&&o.options.responsive.length&&o.options.responsive!==null){d=null;
for(l in o.breakpoints){if(o.breakpoints.hasOwnProperty(l)){if(o.originalSettings.mobileFirst===false){if(f<o.breakpoints[l]){d=o.breakpoints[l]
}}else{if(f>o.breakpoints[l]){d=o.breakpoints[l]
}}}}if(d!==null){if(o.activeBreakpoint!==null){if(d!==o.activeBreakpoint||n){o.activeBreakpoint=d;
if(o.breakpointSettings[d]==="unslick"){o.unslick(d)
}else{o.options=b.extend({},o.originalSettings,o.breakpointSettings[d]);
if(k===true){o.currentSlide=o.options.initialSlide
}o.refresh(k)
}g=d
}}else{o.activeBreakpoint=d;
if(o.breakpointSettings[d]==="unslick"){o.unslick(d)
}else{o.options=b.extend({},o.originalSettings,o.breakpointSettings[d]);
if(k===true){o.currentSlide=o.options.initialSlide
}o.refresh(k)
}g=d
}}else{if(o.activeBreakpoint!==null){o.activeBreakpoint=null;
o.options=o.originalSettings;
if(k===true){o.currentSlide=o.options.initialSlide
}o.refresh(k);
g=d
}}if(!k&&g!==false){o.$slider.trigger("breakpoint",[o,g])
}}};
c.prototype.changeSlide=function(j,n){var f=this,d=b(j.currentTarget),l,g,k;
if(d.is("a")){j.preventDefault()
}if(!d.is("li")){d=d.closest("li")
}k=(f.slideCount%f.options.slidesToScroll!==0);
l=k?0:(f.slideCount-f.currentSlide)%f.options.slidesToScroll;
switch(j.data.message){case"previous":g=l===0?f.options.slidesToScroll:f.options.slidesToShow-l;
if(f.slideCount>f.options.slidesToShow){f.slideHandler(f.currentSlide-g,false,n)
}break;
case"next":g=l===0?f.options.slidesToScroll:l;
if(f.slideCount>f.options.slidesToShow){f.slideHandler(f.currentSlide+g,false,n)
}break;
case"index":var e=j.data.index===0?0:j.data.index||d.index()*f.options.slidesToScroll;
f.slideHandler(f.checkNavigable(e),false,n);
d.children().trigger("focus");
break;
default:return
}};
c.prototype.checkNavigable=function(e){var d=this,f,g;
f=d.getNavigableIndexes();
g=0;
if(e>f[f.length-1]){e=f[f.length-1]
}else{for(var j in f){if(e<f[j]){e=g;
break
}g=f[j]
}}return e
};
c.prototype.cleanUpEvents=function(){var d=this;
if(d.options.dots&&d.$dots!==null){b("li",d.$dots).off("click.slick",d.changeSlide).off("mouseenter.slick",b.proxy(d.interrupt,d,true)).off("mouseleave.slick",b.proxy(d.interrupt,d,false))
}d.$slider.off("focus.slick blur.slick");
if(d.options.arrows===true&&d.slideCount>d.options.slidesToShow){d.$prevArrow&&d.$prevArrow.off("click.slick",d.changeSlide);
d.$nextArrow&&d.$nextArrow.off("click.slick",d.changeSlide)
}d.$list.off("touchstart.slick mousedown.slick",d.swipeHandler);
d.$list.off("touchmove.slick mousemove.slick",d.swipeHandler);
d.$list.off("touchend.slick mouseup.slick",d.swipeHandler);
d.$list.off("touchcancel.slick mouseleave.slick",d.swipeHandler);
d.$list.off("click.slick",d.clickHandler);
b(document).off(d.visibilityChange,d.visibility);
d.cleanUpSlideEvents();
if(d.options.accessibility===true){d.$list.off("keydown.slick",d.keyHandler)
}if(d.options.focusOnSelect===true){b(d.$slideTrack).children().off("click.slick",d.selectHandler)
}b(window).off("orientationchange.slick.slick-"+d.instanceUid,d.orientationChange);
b(window).off("resize.slick.slick-"+d.instanceUid,d.resize);
b("[draggable!=true]",d.$slideTrack).off("dragstart",d.preventDefault);
b(window).off("load.slick.slick-"+d.instanceUid,d.setPosition);
b(document).off("ready.slick.slick-"+d.instanceUid,d.setPosition)
};
c.prototype.cleanUpSlideEvents=function(){var d=this;
d.$list.off("mouseenter.slick",b.proxy(d.interrupt,d,true));
d.$list.off("mouseleave.slick",b.proxy(d.interrupt,d,false))
};
c.prototype.cleanUpRows=function(){var e=this,d;
if(e.options.rows>1){d=e.$slides.children().children();
d.removeAttr("style");
e.$slider.empty().append(d)
}};
c.prototype.clickHandler=function(e){var d=this;
if(d.shouldClick===false){e.stopImmediatePropagation();
e.stopPropagation();
e.preventDefault()
}};
c.prototype.destroy=function(e){var d=this;
d.autoPlayClear();
d.touchObject={};
d.cleanUpEvents();
b(".slick-cloned",d.$slider).detach();
if(d.$dots){d.$dots.remove()
}if(d.$prevArrow&&d.$prevArrow.length){d.$prevArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display","");
if(d.htmlExpr.test(d.options.prevArrow)){d.$prevArrow.remove()
}}if(d.$nextArrow&&d.$nextArrow.length){d.$nextArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display","");
if(d.htmlExpr.test(d.options.nextArrow)){d.$nextArrow.remove()
}}if(d.$slides){d.$slides.removeClass("slick-slide slick-active slick-center slick-visible slick-current").removeAttr("aria-hidden").removeAttr("data-slick-index").each(function(){b(this).attr("style",b(this).data("originalStyling"))
});
d.$slideTrack.children(this.options.slide).detach();
d.$slideTrack.detach();
d.$list.detach();
d.$slider.append(d.$slides)
}d.cleanUpRows();
d.$slider.removeClass("slick-slider");
d.$slider.removeClass("slick-initialized");
d.$slider.removeClass("slick-dotted");
d.unslicked=true;
if(!e){d.$slider.trigger("destroy",[d])
}};
c.prototype.disableTransition=function(d){var e=this,f={};
f[e.transitionType]="";
if(e.options.fade===false){e.$slideTrack.css(f)
}else{e.$slides.eq(d).css(f)
}};
c.prototype.fadeSlide=function(e,f){var d=this;
if(d.cssTransitions===false){d.$slides.eq(e).css({zIndex:d.options.zIndex});
d.$slides.eq(e).animate({opacity:1},d.options.speed,d.options.easing,f)
}else{d.applyTransition(e);
d.$slides.eq(e).css({opacity:1,zIndex:d.options.zIndex});
if(f){setTimeout(function(){d.disableTransition(e);
f.call()
},d.options.speed)
}}};
c.prototype.fadeSlideOut=function(e){var d=this;
if(d.cssTransitions===false){d.$slides.eq(e).animate({opacity:0,zIndex:d.options.zIndex-2},d.options.speed,d.options.easing)
}else{d.applyTransition(e);
d.$slides.eq(e).css({opacity:0,zIndex:d.options.zIndex-2})
}};
c.prototype.filterSlides=c.prototype.slickFilter=function(e){var d=this;
if(e!==null){d.$slidesCache=d.$slides;
d.unload();
d.$slideTrack.children(this.options.slide).detach();
d.$slidesCache.filter(e).appendTo(d.$slideTrack);
d.reinit()
}};
c.prototype.focusHandler=function(){var d=this;
d.$slider.off("focus.slick blur.slick").on("focus.slick blur.slick","*:not(.slick-arrow)",function(f){f.stopImmediatePropagation();
var e=b(this);
setTimeout(function(){if(d.options.pauseOnFocus){d.focussed=e.is(":focus");
d.autoPlay()
}},0)
})
};
c.prototype.getCurrent=c.prototype.slickCurrentSlide=function(){var d=this;
return d.currentSlide
};
c.prototype.getDotCount=function(){var e=this;
var g=0;
var d=0;
var f=0;
if(e.options.infinite===true){while(g<e.slideCount){++f;
g=d+e.options.slidesToScroll;
d+=e.options.slidesToScroll<=e.options.slidesToShow?e.options.slidesToScroll:e.options.slidesToShow
}}else{if(e.options.centerMode===true){f=e.slideCount
}else{if(!e.options.asNavFor){f=1+Math.ceil((e.slideCount-e.options.slidesToShow)/e.options.slidesToScroll)
}else{while(g<e.slideCount){++f;
g=d+e.options.slidesToScroll;
d+=e.options.slidesToScroll<=e.options.slidesToShow?e.options.slidesToScroll:e.options.slidesToShow
}}}}return f-1
};
c.prototype.getLeft=function(g){var e=this,k,f,d=0,j;
e.slideOffset=0;
f=e.$slides.first().outerHeight(true);
if(e.options.infinite===true){if(e.slideCount>e.options.slidesToShow){e.slideOffset=(e.slideWidth*e.options.slidesToShow)*-1;
d=(f*e.options.slidesToShow)*-1
}if(e.slideCount%e.options.slidesToScroll!==0){if(g+e.options.slidesToScroll>e.slideCount&&e.slideCount>e.options.slidesToShow){if(g>e.slideCount){e.slideOffset=((e.options.slidesToShow-(g-e.slideCount))*e.slideWidth)*-1;
d=((e.options.slidesToShow-(g-e.slideCount))*f)*-1
}else{e.slideOffset=((e.slideCount%e.options.slidesToScroll)*e.slideWidth)*-1;
d=((e.slideCount%e.options.slidesToScroll)*f)*-1
}}}}else{if(g+e.options.slidesToShow>e.slideCount){e.slideOffset=((g+e.options.slidesToShow)-e.slideCount)*e.slideWidth;
d=((g+e.options.slidesToShow)-e.slideCount)*f
}}if(e.slideCount<=e.options.slidesToShow){e.slideOffset=0;
d=0
}if(e.options.centerMode===true&&e.options.infinite===true){e.slideOffset+=e.slideWidth*Math.floor(e.options.slidesToShow/2)-e.slideWidth
}else{if(e.options.centerMode===true){e.slideOffset=0;
e.slideOffset+=e.slideWidth*Math.floor(e.options.slidesToShow/2)
}}if(e.options.vertical===false){k=((g*e.slideWidth)*-1)+e.slideOffset
}else{k=((g*f)*-1)+d
}if(e.options.variableWidth===true){if(e.slideCount<=e.options.slidesToShow||e.options.infinite===false){j=e.$slideTrack.children(".slick-slide").eq(g)
}else{j=e.$slideTrack.children(".slick-slide").eq(g+e.options.slidesToShow)
}if(e.options.rtl===true){if(j[0]){k=(e.$slideTrack.width()-j[0].offsetLeft-j.width())*-1
}else{k=0
}}else{k=j[0]?j[0].offsetLeft*-1:0
}if(e.options.centerMode===true){if(e.slideCount<=e.options.slidesToShow||e.options.infinite===false){j=e.$slideTrack.children(".slick-slide").eq(g)
}else{j=e.$slideTrack.children(".slick-slide").eq(g+e.options.slidesToShow+1)
}if(e.options.rtl===true){if(j[0]){k=(e.$slideTrack.width()-j[0].offsetLeft-j.width())*-1
}else{k=0
}}else{k=j[0]?j[0].offsetLeft*-1:0
}k+=(e.$list.width()-j.outerWidth())/2
}}return k
};
c.prototype.getOption=c.prototype.slickGetOption=function(e){var d=this;
return d.options[e]
};
c.prototype.getNavigableIndexes=function(){var g=this,j=0,e=0,f=[],d;
if(g.options.infinite===false){d=g.slideCount
}else{j=g.options.slidesToScroll*-1;
e=g.options.slidesToScroll*-1;
d=g.slideCount*2
}while(j<d){f.push(j);
j=e+g.options.slidesToScroll;
e+=g.options.slidesToScroll<=g.options.slidesToShow?g.options.slidesToScroll:g.options.slidesToShow
}return f
};
c.prototype.getSlick=function(){return this
};
c.prototype.getSlideCount=function(){var f=this,e,g,d;
d=f.options.centerMode===true?f.slideWidth*Math.floor(f.options.slidesToShow/2):0;
if(f.options.swipeToSlide===true){f.$slideTrack.find(".slick-slide").each(function(k,j){if(j.offsetLeft-d+(b(j).outerWidth()/2)>(f.swipeLeft*-1)){g=j;
return false
}});
e=Math.abs(b(g).attr("data-slick-index")-f.currentSlide)||1;
return e
}else{return f.options.slidesToScroll
}};
c.prototype.goTo=c.prototype.slickGoTo=function(d,f){var e=this;
e.changeSlide({data:{message:"index",index:parseInt(d)}},f)
};
c.prototype.init=function(d){var e=this;
if(!b(e.$slider).hasClass("slick-initialized")){b(e.$slider).addClass("slick-initialized");
e.buildRows();
e.buildOut();
e.setProps();
e.startLoad();
e.loadSlider();
e.initializeEvents();
e.updateArrows();
e.updateDots();
e.checkResponsive(true);
e.focusHandler()
}if(d){e.$slider.trigger("init",[e])
}if(e.options.accessibility===true){e.initADA()
}if(e.options.autoplay){e.paused=false;
e.autoPlay()
}};
c.prototype.initADA=function(){var d=this;
d.$slides.add(d.$slideTrack.find(".slick-cloned")).attr({"aria-hidden":"true",tabindex:"-1"}).find("a, input, button, select").attr({tabindex:"-1"});
d.$slideTrack.attr("role","listbox");
d.$slides.not(d.$slideTrack.find(".slick-cloned")).each(function(e){b(this).attr({role:"option","aria-describedby":"slick-slide"+d.instanceUid+e+""})
});
if(d.$dots!==null){d.$dots.attr("role","tablist").find("li").each(function(e){b(this).attr({role:"presentation","aria-selected":"false","aria-controls":"navigation"+d.instanceUid+e+"",id:"slick-slide"+d.instanceUid+e+""})
}).first().attr("aria-selected","true").end().find("button").attr("role","button").end().closest("div").attr("role","toolbar")
}d.activateADA()
};
c.prototype.initArrowEvents=function(){var d=this;
if(d.options.arrows===true&&d.slideCount>d.options.slidesToShow){d.$prevArrow.off("click.slick").on("click.slick",{message:"previous"},d.changeSlide);
d.$nextArrow.off("click.slick").on("click.slick",{message:"next"},d.changeSlide)
}};
c.prototype.initDotEvents=function(){var d=this;
if(d.options.dots===true&&d.slideCount>d.options.slidesToShow){b("li",d.$dots).on("click.slick",{message:"index"},d.changeSlide)
}if(d.options.dots===true&&d.options.pauseOnDotsHover===true){b("li",d.$dots).on("mouseenter.slick",b.proxy(d.interrupt,d,true)).on("mouseleave.slick",b.proxy(d.interrupt,d,false))
}};
c.prototype.initSlideEvents=function(){var d=this;
if(d.options.pauseOnHover){d.$list.on("mouseenter.slick",b.proxy(d.interrupt,d,true));
d.$list.on("mouseleave.slick",b.proxy(d.interrupt,d,false))
}};
c.prototype.initializeEvents=function(){var d=this;
d.initArrowEvents();
d.initDotEvents();
d.initSlideEvents();
d.$list.on("touchstart.slick mousedown.slick",{action:"start"},d.swipeHandler);
d.$list.on("touchmove.slick mousemove.slick",{action:"move"},d.swipeHandler);
d.$list.on("touchend.slick mouseup.slick",{action:"end"},d.swipeHandler);
d.$list.on("touchcancel.slick mouseleave.slick",{action:"end"},d.swipeHandler);
d.$list.on("click.slick",d.clickHandler);
b(document).on(d.visibilityChange,b.proxy(d.visibility,d));
if(d.options.accessibility===true){d.$list.on("keydown.slick",d.keyHandler)
}if(d.options.focusOnSelect===true){b(d.$slideTrack).children().on("click.slick",d.selectHandler)
}b(window).on("orientationchange.slick.slick-"+d.instanceUid,b.proxy(d.orientationChange,d));
b(window).on("resize.slick.slick-"+d.instanceUid,b.proxy(d.resize,d));
b("[draggable!=true]",d.$slideTrack).on("dragstart",d.preventDefault);
b(window).on("load.slick.slick-"+d.instanceUid,d.setPosition);
b(document).on("ready.slick.slick-"+d.instanceUid,d.setPosition)
};
c.prototype.initUI=function(){var d=this;
if(d.options.arrows===true&&d.slideCount>d.options.slidesToShow){d.$prevArrow.show();
d.$nextArrow.show()
}if(d.options.dots===true&&d.slideCount>d.options.slidesToShow){d.$dots.show()
}};
c.prototype.keyHandler=function(e){var d=this;
if(!e.target.tagName.match("TEXTAREA|INPUT|SELECT")){if(e.keyCode===37&&d.options.accessibility===true){d.changeSlide({data:{message:d.options.rtl===true?"next":"previous"}})
}else{if(e.keyCode===39&&d.options.accessibility===true){d.changeSlide({data:{message:d.options.rtl===true?"previous":"next"}})
}}}};
c.prototype.lazyLoad=function(){var f=this,d,k,j,g;
function e(l){b("img[data-lazy]",l).each(function(){var o=b(this),r=b(this).attr("data-lazy"),n=document.createElement("img");
n.onload=function(){o.animate({opacity:0},100,function(){o.attr("src",r).animate({opacity:1},200,function(){o.removeAttr("data-lazy").removeClass("slick-loading")
});
f.$slider.trigger("lazyLoaded",[f,o,r])
})
};
n.onerror=function(){o.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error");
f.$slider.trigger("lazyLoadError",[f,o,r])
};
n.src=r
})
}if(f.options.centerMode===true){if(f.options.infinite===true){j=f.currentSlide+(f.options.slidesToShow/2+1);
g=j+f.options.slidesToShow+2
}else{j=Math.max(0,f.currentSlide-(f.options.slidesToShow/2+1));
g=2+(f.options.slidesToShow/2+1)+f.currentSlide
}}else{j=f.options.infinite?f.options.slidesToShow+f.currentSlide:f.currentSlide;
g=Math.ceil(j+f.options.slidesToShow);
if(f.options.fade===true){if(j>0){j--
}if(g<=f.slideCount){g++
}}}d=f.$slider.find(".slick-slide").slice(j,g);
e(d);
if(f.slideCount<=f.options.slidesToShow){k=f.$slider.find(".slick-slide");
e(k)
}else{if(f.currentSlide>=f.slideCount-f.options.slidesToShow){k=f.$slider.find(".slick-cloned").slice(0,f.options.slidesToShow);
e(k)
}else{if(f.currentSlide===0){k=f.$slider.find(".slick-cloned").slice(f.options.slidesToShow*-1);
e(k)
}}}};
c.prototype.loadSlider=function(){var d=this;
d.setPosition();
d.$slideTrack.css({opacity:1});
d.$slider.removeClass("slick-loading");
d.initUI();
if(d.options.lazyLoad==="progressive"){d.progressiveLazyLoad()
}};
c.prototype.next=c.prototype.slickNext=function(){var d=this;
d.changeSlide({data:{message:"next"}})
};
c.prototype.orientationChange=function(){var d=this;
d.checkResponsive();
d.setPosition()
};
c.prototype.pause=c.prototype.slickPause=function(){var d=this;
d.autoPlayClear();
d.paused=true
};
c.prototype.play=c.prototype.slickPlay=function(){var d=this;
d.autoPlay();
d.options.autoplay=true;
d.paused=false;
d.focussed=false;
d.interrupted=false
};
c.prototype.postSlide=function(e){var d=this;
if(!d.unslicked){d.$slider.trigger("afterChange",[d,e]);
d.animating=false;
d.setPosition();
d.swipeLeft=null;
if(d.options.autoplay){d.autoPlay()
}if(d.options.accessibility===true){d.initADA()
}}};
c.prototype.prev=c.prototype.slickPrev=function(){var d=this;
d.changeSlide({data:{message:"previous"}})
};
c.prototype.preventDefault=function(d){d.preventDefault()
};
c.prototype.progressiveLazyLoad=function(f){f=f||1;
var e=this,d=b("img[data-lazy]",e.$slider),j,k,g;
if(d.length){j=d.first();
k=j.attr("data-lazy");
g=document.createElement("img");
g.onload=function(){j.attr("src",k).removeAttr("data-lazy").removeClass("slick-loading");
if(e.options.adaptiveHeight===true){e.setPosition()
}e.$slider.trigger("lazyLoaded",[e,j,k]);
e.progressiveLazyLoad()
};
g.onerror=function(){if(f<3){setTimeout(function(){e.progressiveLazyLoad(f+1)
},500)
}else{j.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error");
e.$slider.trigger("lazyLoadError",[e,j,k]);
e.progressiveLazyLoad()
}};
g.src=k
}else{e.$slider.trigger("allImagesLoaded",[e])
}};
c.prototype.refresh=function(e){var f=this,g,d;
d=f.slideCount-f.options.slidesToShow;
if(!f.options.infinite&&(f.currentSlide>d)){f.currentSlide=d
}if(f.slideCount<=f.options.slidesToShow){f.currentSlide=0
}g=f.currentSlide;
f.destroy(true);
b.extend(f,f.initials,{currentSlide:g});
f.init();
if(!e){f.changeSlide({data:{message:"index",index:g}},false)
}};
c.prototype.registerBreakpoints=function(){var f=this,e,g,d,j=f.options.responsive||null;
if(b.type(j)==="array"&&j.length){f.respondTo=f.options.respondTo||"window";
for(e in j){d=f.breakpoints.length-1;
g=j[e].breakpoint;
if(j.hasOwnProperty(e)){while(d>=0){if(f.breakpoints[d]&&f.breakpoints[d]===g){f.breakpoints.splice(d,1)
}d--
}f.breakpoints.push(g);
f.breakpointSettings[g]=j[e].settings
}}f.breakpoints.sort(function(l,k){return(f.options.mobileFirst)?l-k:k-l
})
}};
c.prototype.reinit=function(){var d=this;
d.$slides=d.$slideTrack.children(d.options.slide).addClass("slick-slide");
d.slideCount=d.$slides.length;
if(d.currentSlide>=d.slideCount&&d.currentSlide!==0){d.currentSlide=d.currentSlide-d.options.slidesToScroll
}if(d.slideCount<=d.options.slidesToShow){d.currentSlide=0
}d.registerBreakpoints();
d.setProps();
d.setupInfinite();
d.buildArrows();
d.updateArrows();
d.initArrowEvents();
d.buildDots();
d.updateDots();
d.initDotEvents();
d.cleanUpSlideEvents();
d.initSlideEvents();
d.checkResponsive(false,true);
if(d.options.focusOnSelect===true){b(d.$slideTrack).children().on("click.slick",d.selectHandler)
}d.setSlideClasses(typeof d.currentSlide==="number"?d.currentSlide:0);
d.setPosition();
d.focusHandler();
d.paused=!d.options.autoplay;
d.autoPlay();
d.$slider.trigger("reInit",[d])
};
c.prototype.resize=function(){var d=this;
if(b(window).width()!==d.windowWidth){clearTimeout(d.windowDelay);
d.windowDelay=window.setTimeout(function(){d.windowWidth=b(window).width();
d.checkResponsive();
if(!d.unslicked){d.setPosition()
}},50)
}};
c.prototype.removeSlide=c.prototype.slickRemove=function(e,g,f){var d=this;
if(typeof(e)==="boolean"){g=e;
e=g===true?0:d.slideCount-1
}else{e=g===true?--e:e
}if(d.slideCount<1||e<0||e>d.slideCount-1){return false
}d.unload();
if(f===true){d.$slideTrack.children().remove()
}else{d.$slideTrack.children(this.options.slide).eq(e).remove()
}d.$slides=d.$slideTrack.children(this.options.slide);
d.$slideTrack.children(this.options.slide).detach();
d.$slideTrack.append(d.$slides);
d.$slidesCache=d.$slides;
d.reinit()
};
c.prototype.setCSS=function(e){var f=this,g={},d,j;
if(f.options.rtl===true){e=-e
}d=f.positionProp=="left"?Math.ceil(e)+"px":"0px";
j=f.positionProp=="top"?Math.ceil(e)+"px":"0px";
g[f.positionProp]=e;
if(f.transformsEnabled===false){f.$slideTrack.css(g)
}else{g={};
if(f.cssTransitions===false){g[f.animType]="translate("+d+", "+j+")";
f.$slideTrack.css(g)
}else{g[f.animType]="translate3d("+d+", "+j+", 0px)";
f.$slideTrack.css(g)
}}};
c.prototype.setDimensions=function(){var d=this;
if(d.options.vertical===false){if(d.options.centerMode===true){d.$list.css({padding:("0px "+d.options.centerPadding)})
}}else{d.$list.height(d.$slides.first().outerHeight(true)*d.options.slidesToShow);
if(d.options.centerMode===true){d.$list.css({padding:(d.options.centerPadding+" 0px")})
}}d.listWidth=d.$list.width();
d.listHeight=d.$list.height();
if(d.options.vertical===false&&d.options.variableWidth===false){d.slideWidth=Math.ceil(d.listWidth/d.options.slidesToShow);
d.$slideTrack.width(Math.ceil((d.slideWidth*d.$slideTrack.children(".slick-slide").length)))
}else{if(d.options.variableWidth===true){d.$slideTrack.width(5000*d.slideCount)
}else{d.slideWidth=Math.ceil(d.listWidth);
d.$slideTrack.height(Math.ceil((d.$slides.first().outerHeight(true)*d.$slideTrack.children(".slick-slide").length)))
}}var e=d.$slides.first().outerWidth(true)-d.$slides.first().width();
if(d.options.variableWidth===false){d.$slideTrack.children(".slick-slide").width(d.slideWidth-e)
}};
c.prototype.setFade=function(){var d=this,e;
d.$slides.each(function(f,g){e=(d.slideWidth*f)*-1;
if(d.options.rtl===true){b(g).css({position:"relative",right:e,top:0,zIndex:d.options.zIndex-2,opacity:0})
}else{b(g).css({position:"relative",left:e,top:0,zIndex:d.options.zIndex-2,opacity:0})
}});
d.$slides.eq(d.currentSlide).css({zIndex:d.options.zIndex-1,opacity:1})
};
c.prototype.setHeight=function(){var e=this;
if(e.options.slidesToShow===1&&e.options.adaptiveHeight===true&&e.options.vertical===false){var d=e.$slides.eq(e.currentSlide).outerHeight(true);
e.$list.css("height",d)
}};
c.prototype.setOption=c.prototype.slickSetOption=function(){var e=this,d,k,j,n,g=false,f;
if(b.type(arguments[0])==="object"){j=arguments[0];
g=arguments[1];
f="multiple"
}else{if(b.type(arguments[0])==="string"){j=arguments[0];
n=arguments[1];
g=arguments[2];
if(arguments[0]==="responsive"&&b.type(arguments[1])==="array"){f="responsive"
}else{if(typeof arguments[1]!=="undefined"){f="single"
}}}}if(f==="single"){e.options[j]=n
}else{if(f==="multiple"){b.each(j,function(l,o){e.options[l]=o
})
}else{if(f==="responsive"){for(k in n){if(b.type(e.options.responsive)!=="array"){e.options.responsive=[n[k]]
}else{d=e.options.responsive.length-1;
while(d>=0){if(e.options.responsive[d].breakpoint===n[k].breakpoint){e.options.responsive.splice(d,1)
}d--
}e.options.responsive.push(n[k])
}}}}}if(g){e.unload();
e.reinit()
}};
c.prototype.setPosition=function(){var d=this;
d.setDimensions();
d.setHeight();
if(d.options.fade===false){d.setCSS(d.getLeft(d.currentSlide))
}else{d.setFade()
}d.$slider.trigger("setPosition",[d])
};
c.prototype.setProps=function(){var e=this,d=document.body.style;
e.positionProp=e.options.vertical===true?"top":"left";
if(e.positionProp==="top"){e.$slider.addClass("slick-vertical")
}else{e.$slider.removeClass("slick-vertical")
}if(d.WebkitTransition!==undefined||d.MozTransition!==undefined||d.msTransition!==undefined){if(e.options.useCSS===true){e.cssTransitions=true
}}if(e.options.fade){if(typeof e.options.zIndex==="number"){if(e.options.zIndex<3){e.options.zIndex=3
}}else{e.options.zIndex=e.defaults.zIndex
}}if(d.OTransform!==undefined){e.animType="OTransform";
e.transformType="-o-transform";
e.transitionType="OTransition";
if(d.perspectiveProperty===undefined&&d.webkitPerspective===undefined){e.animType=false
}}if(d.MozTransform!==undefined){e.animType="MozTransform";
e.transformType="-moz-transform";
e.transitionType="MozTransition";
if(d.perspectiveProperty===undefined&&d.MozPerspective===undefined){e.animType=false
}}if(d.webkitTransform!==undefined){e.animType="webkitTransform";
e.transformType="-webkit-transform";
e.transitionType="webkitTransition";
if(d.perspectiveProperty===undefined&&d.webkitPerspective===undefined){e.animType=false
}}if(d.msTransform!==undefined){e.animType="msTransform";
e.transformType="-ms-transform";
e.transitionType="msTransition";
if(d.msTransform===undefined){e.animType=false
}}if(d.transform!==undefined&&e.animType!==false){e.animType="transform";
e.transformType="transform";
e.transitionType="transition"
}e.transformsEnabled=e.options.useTransform&&(e.animType!==null&&e.animType!==false)
};
c.prototype.setSlideClasses=function(g){var f=this,d,e,k,j;
e=f.$slider.find(".slick-slide").removeClass("slick-active slick-center slick-current").attr("aria-hidden","true");
f.$slides.eq(g).addClass("slick-current");
if(f.options.centerMode===true){d=Math.floor(f.options.slidesToShow/2);
if(f.options.infinite===true){if(g>=d&&g<=(f.slideCount-1)-d){f.$slides.slice(g-d,g+d+1).addClass("slick-active").attr("aria-hidden","false")
}else{k=f.options.slidesToShow+g;
e.slice(k-d+1,k+d+2).addClass("slick-active").attr("aria-hidden","false")
}if(g===0){e.eq(e.length-1-f.options.slidesToShow).addClass("slick-center")
}else{if(g===f.slideCount-1){e.eq(f.options.slidesToShow).addClass("slick-center")
}}}f.$slides.eq(g).addClass("slick-center")
}else{if(g>=0&&g<=(f.slideCount-f.options.slidesToShow)){f.$slides.slice(g,g+f.options.slidesToShow).addClass("slick-active").attr("aria-hidden","false")
}else{if(e.length<=f.options.slidesToShow){e.addClass("slick-active").attr("aria-hidden","false")
}else{j=f.slideCount%f.options.slidesToShow;
k=f.options.infinite===true?f.options.slidesToShow+g:g;
if(f.options.slidesToShow==f.options.slidesToScroll&&(f.slideCount-g)<f.options.slidesToShow){e.slice(k-(f.options.slidesToShow-j),k+j).addClass("slick-active").attr("aria-hidden","false")
}else{e.slice(k,k+f.options.slidesToShow).addClass("slick-active").attr("aria-hidden","false")
}}}}if(f.options.lazyLoad==="ondemand"){f.lazyLoad()
}};
c.prototype.setupInfinite=function(){var d=this,e,g,f;
if(d.options.fade===true){d.options.centerMode=false
}if(d.options.infinite===true&&d.options.fade===false){g=null;
if(d.slideCount>d.options.slidesToShow){if(d.options.centerMode===true){f=d.options.slidesToShow+1
}else{f=d.options.slidesToShow
}for(e=d.slideCount;
e>(d.slideCount-f);
e-=1){g=e-1;
b(d.$slides[g]).clone(true).attr("id","").attr("data-slick-index",g-d.slideCount).prependTo(d.$slideTrack).addClass("slick-cloned")
}for(e=0;
e<f;
e+=1){g=e;
b(d.$slides[g]).clone(true).attr("id","").attr("data-slick-index",g+d.slideCount).appendTo(d.$slideTrack).addClass("slick-cloned")
}d.$slideTrack.find(".slick-cloned").find("[id]").each(function(){b(this).attr("id","")
})
}}};
c.prototype.interrupt=function(d){var e=this;
if(!d){e.autoPlay()
}e.interrupted=d
};
c.prototype.selectHandler=function(g){var f=this;
var e=b(g.target).is(".slick-slide")?b(g.target):b(g.target).parents(".slick-slide");
var d=parseInt(e.attr("data-slick-index"));
if(!d){d=0
}if(f.slideCount<=f.options.slidesToShow){f.setSlideClasses(d);
f.asNavFor(d);
return
}f.slideHandler(d)
};
c.prototype.slideHandler=function(g,l,f){var e,r,k,n,j=null,o=this,d;
l=l||false;
if(o.animating===true&&o.options.waitForAnimate===true){return
}if(o.options.fade===true&&o.currentSlide===g){return
}if(o.slideCount<=o.options.slidesToShow){return
}if(l===false){o.asNavFor(g)
}e=g;
j=o.getLeft(e);
n=o.getLeft(o.currentSlide);
o.currentLeft=o.swipeLeft===null?n:o.swipeLeft;
if(o.options.infinite===false&&o.options.centerMode===false&&(g<0||g>o.getDotCount()*o.options.slidesToScroll)){if(o.options.fade===false){e=o.currentSlide;
if(f!==true){o.animateSlide(n,function(){o.postSlide(e)
})
}else{o.postSlide(e)
}}return
}else{if(o.options.infinite===false&&o.options.centerMode===true&&(g<0||g>(o.slideCount-o.options.slidesToScroll))){if(o.options.fade===false){e=o.currentSlide;
if(f!==true){o.animateSlide(n,function(){o.postSlide(e)
})
}else{o.postSlide(e)
}}return
}}if(o.options.autoplay){clearInterval(o.autoPlayTimer)
}if(e<0){if(o.slideCount%o.options.slidesToScroll!==0){r=o.slideCount-(o.slideCount%o.options.slidesToScroll)
}else{r=o.slideCount+e
}}else{if(e>=o.slideCount){if(o.slideCount%o.options.slidesToScroll!==0){r=0
}else{r=e-o.slideCount
}}else{r=e
}}o.animating=true;
o.$slider.trigger("beforeChange",[o,o.currentSlide,r]);
k=o.currentSlide;
o.currentSlide=r;
o.setSlideClasses(o.currentSlide);
if(o.options.asNavFor){d=o.getNavTarget();
d=d.slick("getSlick");
if(d.slideCount<=d.options.slidesToShow){d.setSlideClasses(o.currentSlide)
}}o.updateDots();
o.updateArrows();
if(o.options.fade===true){if(f!==true){o.fadeSlideOut(k);
o.fadeSlide(r,function(){o.postSlide(r)
})
}else{o.postSlide(r)
}o.animateHeight();
return
}if(f!==true){o.animateSlide(j,function(){o.postSlide(r)
})
}else{o.postSlide(r)
}};
c.prototype.startLoad=function(){var d=this;
if(d.options.arrows===true&&d.slideCount>d.options.slidesToShow){d.$prevArrow.hide();
d.$nextArrow.hide()
}if(d.options.dots===true&&d.slideCount>d.options.slidesToShow){d.$dots.hide()
}d.$slider.addClass("slick-loading")
};
c.prototype.swipeDirection=function(){var d,g,f,j,e=this;
d=e.touchObject.startX-e.touchObject.curX;
g=e.touchObject.startY-e.touchObject.curY;
f=Math.atan2(g,d);
j=Math.round(f*180/Math.PI);
if(j<0){j=360-Math.abs(j)
}if((j<=45)&&(j>=0)){return(e.options.rtl===false?"left":"right")
}if((j<=360)&&(j>=315)){return(e.options.rtl===false?"left":"right")
}if((j>=135)&&(j<=225)){return(e.options.rtl===false?"right":"left")
}if(e.options.verticalSwiping===true){if((j>=35)&&(j<=135)){return"down"
}else{return"up"
}}return"vertical"
};
c.prototype.swipeEnd=function(f){var e=this,d,g;
e.dragging=false;
e.interrupted=false;
e.shouldClick=(e.touchObject.swipeLength>10)?false:true;
if(e.touchObject.curX===undefined){return false
}if(e.touchObject.edgeHit===true){e.$slider.trigger("edge",[e,e.swipeDirection()])
}if(e.touchObject.swipeLength>=e.touchObject.minSwipe){g=e.swipeDirection();
switch(g){case"left":case"down":d=e.options.swipeToSlide?e.checkNavigable(e.currentSlide+e.getSlideCount()):e.currentSlide+e.getSlideCount();
e.currentDirection=0;
break;
case"right":case"up":d=e.options.swipeToSlide?e.checkNavigable(e.currentSlide-e.getSlideCount()):e.currentSlide-e.getSlideCount();
e.currentDirection=1;
break;
default:}if(g!="vertical"){e.slideHandler(d);
e.touchObject={};
e.$slider.trigger("swipe",[e,g])
}}else{if(e.touchObject.startX!==e.touchObject.curX){e.slideHandler(e.currentSlide);
e.touchObject={}
}}};
c.prototype.swipeHandler=function(e){var d=this;
if((d.options.swipe===false)||("ontouchend" in document&&d.options.swipe===false)){return
}else{if(d.options.draggable===false&&e.type.indexOf("mouse")!==-1){return
}}d.touchObject.fingerCount=e.originalEvent&&e.originalEvent.touches!==undefined?e.originalEvent.touches.length:1;
d.touchObject.minSwipe=d.listWidth/d.options.touchThreshold;
if(d.options.verticalSwiping===true){d.touchObject.minSwipe=d.listHeight/d.options.touchThreshold
}switch(e.data.action){case"start":d.swipeStart(e);
break;
case"move":d.swipeMove(e);
break;
case"end":d.swipeEnd(e);
break
}};
c.prototype.swipeMove=function(g){var f=this,n=false,k,e,j,d,l;
l=g.originalEvent!==undefined?g.originalEvent.touches:null;
if(!f.dragging||l&&l.length!==1){return false
}k=f.getLeft(f.currentSlide);
f.touchObject.curX=l!==undefined?l[0].pageX:g.clientX;
f.touchObject.curY=l!==undefined?l[0].pageY:g.clientY;
f.touchObject.swipeLength=Math.round(Math.sqrt(Math.pow(f.touchObject.curX-f.touchObject.startX,2)));
if(f.options.verticalSwiping===true){f.touchObject.swipeLength=Math.round(Math.sqrt(Math.pow(f.touchObject.curY-f.touchObject.startY,2)))
}e=f.swipeDirection();
if(e==="vertical"){return
}if(g.originalEvent!==undefined&&f.touchObject.swipeLength>4){g.preventDefault()
}d=(f.options.rtl===false?1:-1)*(f.touchObject.curX>f.touchObject.startX?1:-1);
if(f.options.verticalSwiping===true){d=f.touchObject.curY>f.touchObject.startY?1:-1
}j=f.touchObject.swipeLength;
f.touchObject.edgeHit=false;
if(f.options.infinite===false){if((f.currentSlide===0&&e==="right")||(f.currentSlide>=f.getDotCount()&&e==="left")){j=f.touchObject.swipeLength*f.options.edgeFriction;
f.touchObject.edgeHit=true
}}if(f.options.vertical===false){f.swipeLeft=k+j*d
}else{f.swipeLeft=k+(j*(f.$list.height()/f.listWidth))*d
}if(f.options.verticalSwiping===true){f.swipeLeft=k+j*d
}if(f.options.fade===true||f.options.touchMove===false){return false
}if(f.animating===true){f.swipeLeft=null;
return false
}f.setCSS(f.swipeLeft)
};
c.prototype.swipeStart=function(e){var d=this,f;
d.interrupted=true;
if(d.touchObject.fingerCount!==1||d.slideCount<=d.options.slidesToShow){d.touchObject={};
return false
}if(e.originalEvent!==undefined&&e.originalEvent.touches!==undefined){f=e.originalEvent.touches[0]
}d.touchObject.startX=d.touchObject.curX=f!==undefined?f.pageX:e.clientX;
d.touchObject.startY=d.touchObject.curY=f!==undefined?f.pageY:e.clientY;
d.dragging=true
};
c.prototype.unfilterSlides=c.prototype.slickUnfilter=function(){var d=this;
if(d.$slidesCache!==null){d.unload();
d.$slideTrack.children(this.options.slide).detach();
d.$slidesCache.appendTo(d.$slideTrack);
d.reinit()
}};
c.prototype.unload=function(){var d=this;
b(".slick-cloned",d.$slider).remove();
if(d.$dots){d.$dots.remove()
}if(d.$prevArrow&&d.htmlExpr.test(d.options.prevArrow)){d.$prevArrow.remove()
}if(d.$nextArrow&&d.htmlExpr.test(d.options.nextArrow)){d.$nextArrow.remove()
}d.$slides.removeClass("slick-slide slick-active slick-visible slick-current").attr("aria-hidden","true").css("width","")
};
c.prototype.unslick=function(e){var d=this;
d.$slider.trigger("unslick",[d,e]);
d.destroy()
};
c.prototype.updateArrows=function(){var e=this,d;
d=Math.floor(e.options.slidesToShow/2);
if(e.options.arrows===true&&e.slideCount>e.options.slidesToShow&&!e.options.infinite){e.$prevArrow.removeClass("slick-disabled").attr("aria-disabled","false");
e.$nextArrow.removeClass("slick-disabled").attr("aria-disabled","false");
if(e.currentSlide===0){e.$prevArrow.addClass("slick-disabled").attr("aria-disabled","true");
e.$nextArrow.removeClass("slick-disabled").attr("aria-disabled","false")
}else{if(e.currentSlide>=e.slideCount-e.options.slidesToShow&&e.options.centerMode===false){e.$nextArrow.addClass("slick-disabled").attr("aria-disabled","true");
e.$prevArrow.removeClass("slick-disabled").attr("aria-disabled","false")
}else{if(e.currentSlide>=e.slideCount-1&&e.options.centerMode===true){e.$nextArrow.addClass("slick-disabled").attr("aria-disabled","true");
e.$prevArrow.removeClass("slick-disabled").attr("aria-disabled","false")
}}}}};
c.prototype.updateDots=function(){var d=this;
if(d.$dots!==null){d.$dots.find("li").removeClass("slick-active").attr("aria-hidden","true");
d.$dots.find("li").eq(Math.floor(d.currentSlide/d.options.slidesToScroll)).addClass("slick-active").attr("aria-hidden","false")
}};
c.prototype.visibility=function(){var d=this;
if(d.options.autoplay){if(document[d.hidden]){d.interrupted=true
}else{d.interrupted=false
}}};
b.fn.slick=function(){var g=this,k=arguments[0],f=Array.prototype.slice.call(arguments,1),d=g.length,j,e;
for(j=0;
j<d;
j++){if(typeof k=="object"||typeof k=="undefined"){g[j].slick=new c(g[j],k)
}else{e=g[j].slick[k].apply(g[j].slick,f)
}if(typeof e!="undefined"){return e
}}return g
}
}));
/*!
* viewportDetect Plugin
* v1.0 [jj 13Dec18]
*
* returns the current viewport ("xs", "sm", "md", or "lg" + "xl")
* $.viewportDetect() 
*
* create a callback function that is called whenever the viewport changes
* $.viewportDetect(function(currentViewport, previousViewport) { }); 
*/
;
$(document).ready(function(){$("body").append('<div id="viewportDetect"><div class="visible-xs-block" data-viewport="xs"></div><div class="visible-sm-block" data-viewport="sm"></div><div class="visible-md-block" data-viewport="md"></div><div class="visible-lg-block" data-viewport="lg"></div><div class="visible-xl-block" data-viewport="xl"></div></div>')
});
(function(c){var b="";
c.viewportDetect=function(d){if(arguments.length==0){return c("#viewportDetect div:visible").data("viewport")
}c(window).resize(function(){var e=c("#viewportDetect div:visible").data("viewport");
if(b!=e){var f=b;
b=e;
d(b,f)
}})
}
})(jQuery);
(function(b){if(typeof define==="function"&&define.amd){define(["jquery"],function(c){b(c,window,document)
})
}else{if(typeof module==="object"&&module.exports){module.exports=b(require("jquery"),window,document)
}else{b(jQuery,window,document)
}}})(function(j,n,r,e){var l="intlTelInput",b=1,f={allowDropdown:true,autoHideDialCode:true,autoPlaceholder:"polite",customPlaceholder:null,dropdownContainer:"",excludeCountries:[],formatOnDisplay:true,geoIpLookup:null,initialCountry:"",nationalMode:true,onlyCountries:[],placeholderNumberType:"MOBILE",preferredCountries:["us","gb"],separateDialCode:false,utilsScript:""},u={UP:38,DOWN:40,ENTER:13,ESC:27,PLUS:43,A:65,Z:90,SPACE:32,TAB:9},k=["800","822","833","844","855","866","877","880","881","882","883","884","885","886","887","888","889"];
j(n).on("load",function(){j.fn[l].windowLoaded=true
});
function t(v,c){this.telInput=j(v);
this.options=j.extend({},f,c);
this.ns="."+l+b++;
this.isGoodBrowser=Boolean(v.setSelectionRange);
this.hadInitialPlaceholder=Boolean(j(v).attr("placeholder"))
}t.prototype={_init:function(){if(this.options.nationalMode){this.options.autoHideDialCode=false
}if(this.options.separateDialCode){this.options.autoHideDialCode=this.options.nationalMode=false
}this.isMobile=/Android.+Mobile|webOS|iPhone|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
if(this.isMobile){j("body").addClass("iti-mobile");
if(!this.options.dropdownContainer){this.options.dropdownContainer="body"
}}this.autoCountryDeferred=new j.Deferred();
this.utilsScriptDeferred=new j.Deferred();
this.selectedCountryData={};
this._processCountryData();
this._generateMarkup();
this._setInitialState();
this._initListeners();
this._initRequests();
return[this.autoCountryDeferred,this.utilsScriptDeferred]
},_processCountryData:function(){this._processAllCountries();
this._processCountryCodes();
this._processPreferredCountries()
},_addCountryCode:function(v,c,y){if(!(c in this.countryCodes)){this.countryCodes[c]=[]
}var x=y||0;
this.countryCodes[c][x]=v
},_processAllCountries:function(){if(this.options.onlyCountries.length){var v=this.options.onlyCountries.map(function(x){return x.toLowerCase()
});
this.countries=d.filter(function(x){return v.indexOf(x.iso2)>-1
})
}else{if(this.options.excludeCountries.length){var c=this.options.excludeCountries.map(function(x){return x.toLowerCase()
});
this.countries=d.filter(function(x){return c.indexOf(x.iso2)===-1
})
}else{this.countries=d
}}},_processCountryCodes:function(){this.countryCodes={};
for(var x=0;
x<this.countries.length;
x++){var y=this.countries[x];
this._addCountryCode(y.iso2,y.dialCode,y.priority);
if(y.areaCodes){for(var v=0;
v<y.areaCodes.length;
v++){this._addCountryCode(y.iso2,y.dialCode+y.areaCodes[v])
}}}},_processPreferredCountries:function(){this.preferredCountries=[];
for(var x=0;
x<this.options.preferredCountries.length;
x++){var c=this.options.preferredCountries[x].toLowerCase(),v=this._getCountryData(c,false,true);
if(v){this.preferredCountries.push(v)
}}},_generateMarkup:function(){this.telInput.attr("autocomplete","off");
var v="intl-tel-input";
if(this.options.allowDropdown){v+=" allow-dropdown"
}if(this.options.separateDialCode){v+=" separate-dial-code"
}this.telInput.wrap(j("<div>",{"class":v}));
this.flagsContainer=j("<div>",{"class":"flag-container"}).insertBefore(this.telInput);
var c=j("<div>",{"class":"selected-flag"});
c.appendTo(this.flagsContainer);
this.selectedFlagInner=j("<div>",{"class":"iti-flag"}).appendTo(c);
if(this.options.separateDialCode){this.selectedDialCode=j("<div>",{"class":"selected-dial-code"}).appendTo(c)
}if(this.options.allowDropdown){c.attr("tabindex","0");
j("<div>",{"class":"iti-arrow"}).appendTo(c);
this.countryList=j("<ul>",{"class":"country-list hide"});
if(this.preferredCountries.length){this._appendListItems(this.preferredCountries,"preferred");
j("<li>",{"class":"divider"}).appendTo(this.countryList)
}this._appendListItems(this.countries,"");
this.countryListItems=this.countryList.children(".country");
if(this.options.dropdownContainer){this.dropdown=j("<div>",{"class":"intl-tel-input iti-container"}).append(this.countryList)
}else{this.countryList.appendTo(this.flagsContainer)
}}else{this.countryListItems=j()
}},_appendListItems:function(v,z){var y="";
for(var x=0;
x<v.length;
x++){var A=v[x];
y+="<li class='country "+z+"' data-dial-code='"+A.dialCode+"' data-country-code='"+A.iso2+"'>";
y+="<div class='flag-box'><div class='iti-flag "+A.iso2+"'></div></div>";
y+="<span class='country-name'>"+A.name+"</span>";
y+="<span class='dial-code'>+"+A.dialCode+"</span>";
y+="</li>"
}this.countryList.append(y)
},_setInitialState:function(){var c=this.telInput.val();
if(this._getDialCode(c)&&!this._isRegionlessNanp(c)){this._updateFlagFromNumber(c)
}else{if(this.options.initialCountry!=="auto"){if(this.options.initialCountry){this._setFlag(this.options.initialCountry.toLowerCase())
}else{this.defaultCountry=this.preferredCountries.length?this.preferredCountries[0].iso2:this.countries[0].iso2;
if(!c){this._setFlag(this.defaultCountry)
}}if(!c&&!this.options.nationalMode&&!this.options.autoHideDialCode&&!this.options.separateDialCode){this.telInput.val("+"+this.selectedCountryData.dialCode)
}}}if(c){this._updateValFromNumber(c)
}},_initListeners:function(){this._initKeyListeners();
if(this.options.autoHideDialCode){this._initFocusListeners()
}if(this.options.allowDropdown){this._initDropdownListeners()
}},_initDropdownListeners:function(){var x=this;
var v=this.telInput.closest("label");
if(v.length){v.on("click"+this.ns,function(y){if(x.countryList.hasClass("hide")){x.telInput.focus()
}else{y.preventDefault()
}})
}var c=this.selectedFlagInner.parent();
c.on("click"+this.ns,function(y){if(x.countryList.hasClass("hide")&&!x.telInput.prop("disabled")&&!x.telInput.prop("readonly")){x._showDropdown()
}});
this.flagsContainer.on("keydown"+x.ns,function(z){var y=x.countryList.hasClass("hide");
if(y&&(z.which==u.UP||z.which==u.DOWN||z.which==u.SPACE||z.which==u.ENTER)){z.preventDefault();
z.stopPropagation();
x._showDropdown()
}if(z.which==u.TAB){x._closeDropdown()
}})
},_initRequests:function(){var c=this;
if(this.options.utilsScript){if(j.fn[l].windowLoaded){j.fn[l].loadUtils(this.options.utilsScript,this.utilsScriptDeferred)
}else{j(n).on("load",function(){j.fn[l].loadUtils(c.options.utilsScript,c.utilsScriptDeferred)
})
}}else{this.utilsScriptDeferred.resolve()
}if(this.options.initialCountry==="auto"){this._loadAutoCountry()
}else{this.autoCountryDeferred.resolve()
}},_loadAutoCountry:function(){var c=this;
if(j.fn[l].autoCountry){this.handleAutoCountry()
}else{if(!j.fn[l].startedLoadingAutoCountry){j.fn[l].startedLoadingAutoCountry=true;
if(typeof this.options.geoIpLookup==="function"){this.options.geoIpLookup(function(v){j.fn[l].autoCountry=v.toLowerCase();
setTimeout(function(){j(".intl-tel-input input").intlTelInput("handleAutoCountry")
})
})
}}}},_initKeyListeners:function(){var c=this;
this.telInput.on("keyup"+this.ns,function(){if(c._updateFlagFromNumber(c.telInput.val())){c._triggerCountryChange()
}});
this.telInput.on("cut"+this.ns+" paste"+this.ns,function(){setTimeout(function(){if(c._updateFlagFromNumber(c.telInput.val())){c._triggerCountryChange()
}})
})
},_cap:function(v){var c=this.telInput.attr("maxlength");
return c&&v.length>c?v.substr(0,c):v
},_initFocusListeners:function(){var v=this;
this.telInput.on("mousedown"+this.ns,function(x){if(!v.telInput.is(":focus")&&!v.telInput.val()){x.preventDefault();
v.telInput.focus()
}});
this.telInput.on("focus"+this.ns,function(x){if(!v.telInput.val()&&!v.telInput.prop("readonly")&&v.selectedCountryData.dialCode){v.telInput.val("+"+v.selectedCountryData.dialCode);
v.telInput.one("keypress.plus"+v.ns,function(y){if(y.which==u.PLUS){v.telInput.val("")
}});
setTimeout(function(){var z=v.telInput[0];
if(v.isGoodBrowser){var y=v.telInput.val().length;
z.setSelectionRange(y,y)
}})
}});
var c=this.telInput.prop("form");
if(c){j(c).on("submit"+this.ns,function(){v._removeEmptyDialCode()
})
}this.telInput.on("blur"+this.ns,function(){v._removeEmptyDialCode()
})
},_removeEmptyDialCode:function(){var x=this.telInput.val(),v=x.charAt(0)=="+";
if(v){var c=this._getNumeric(x);
if(!c||this.selectedCountryData.dialCode==c){this.telInput.val("")
}}this.telInput.off("keypress.plus"+this.ns)
},_getNumeric:function(c){return c.replace(/\D/g,"")
},_showDropdown:function(){this._setDropdownPosition();
var c=this.countryList.children(".active");
if(c.length){this._highlightListItem(c);
this._scrollTo(c)
}this._bindDropdownListeners();
this.selectedFlagInner.children(".iti-arrow").addClass("up")
},_setDropdownPosition:function(){var x=this;
if(this.options.dropdownContainer){this.dropdown.appendTo(this.options.dropdownContainer)
}this.dropdownHeight=this.countryList.removeClass("hide").outerHeight();
if(!this.isMobile){var B=this.telInput.offset(),v=B.top,z=j(n).scrollTop(),y=v+this.telInput.outerHeight()+this.dropdownHeight<z+j(n).height(),A=v-this.dropdownHeight>z;
this.countryList.toggleClass("dropup",!y&&A);
if(this.options.dropdownContainer){var c=!y&&A?0:this.telInput.innerHeight();
this.dropdown.css({top:v+c,left:B.left});
j(n).on("scroll"+this.ns,function(){x._closeDropdown()
})
}}},_bindDropdownListeners:function(){var x=this;
this.countryList.on("mouseover"+this.ns,".country",function(z){x._highlightListItem(j(this))
});
this.countryList.on("click"+this.ns,".country",function(z){x._selectListItem(j(this))
});
var c=true;
j("html").on("click"+this.ns,function(z){if(!c){x._closeDropdown()
}c=false
});
var y="",v=null;
j(r).on("keydown"+this.ns,function(z){z.preventDefault();
if(z.which==u.UP||z.which==u.DOWN){x._handleUpDownKey(z.which)
}else{if(z.which==u.ENTER){x._handleEnterKey()
}else{if(z.which==u.ESC){x._closeDropdown()
}else{if(z.which>=u.A&&z.which<=u.Z||z.which==u.SPACE){if(v){clearTimeout(v)
}y+=String.fromCharCode(z.which);
x._searchForCountry(y);
v=setTimeout(function(){y=""
},1000)
}}}}})
},_handleUpDownKey:function(c){var x=this.countryList.children(".highlight").first();
var v=c==u.UP?x.prev():x.next();
if(v.length){if(v.hasClass("divider")){v=c==u.UP?v.prev():v.next()
}this._highlightListItem(v);
this._scrollTo(v)
}},_handleEnterKey:function(){var c=this.countryList.children(".highlight").first();
if(c.length){this._selectListItem(c)
}},_searchForCountry:function(x){for(var c=0;
c<this.countries.length;
c++){if(this._startsWith(this.countries[c].name,x)){var v=this.countryList.children("[data-country-code="+this.countries[c].iso2+"]").not(".preferred");
this._highlightListItem(v);
this._scrollTo(v,true);
break
}}},_startsWith:function(v,c){return v.substr(0,c.length).toUpperCase()==c
},_updateValFromNumber:function(c){if(this.options.formatOnDisplay&&n.intlTelInputUtils&&this.selectedCountryData){var v=!this.options.separateDialCode&&(this.options.nationalMode||c.charAt(0)!="+")?intlTelInputUtils.numberFormat.NATIONAL:intlTelInputUtils.numberFormat.INTERNATIONAL;
c=intlTelInputUtils.formatNumber(c,this.selectedCountryData.iso2,v)
}c=this._beforeSetNumber(c);
this.telInput.val(c)
},_updateFlagFromNumber:function(x){if(x&&this.options.nationalMode&&this.selectedCountryData.dialCode=="1"&&x.charAt(0)!="+"){if(x.charAt(0)!="1"){x="1"+x
}x="+"+x
}var C=this._getDialCode(x),z=null,D=this._getNumeric(x);
if(C){var c=this.countryCodes[this._getNumeric(C)],A=j.inArray(this.selectedCountryData.iso2,c)>-1,v=C=="+1"&&D.length>=4,B=this.selectedCountryData.dialCode=="1";
if(!(B&&this._isRegionlessNanp(D))&&(!A||v)){for(var y=0;
y<c.length;
y++){if(c[y]){z=c[y];
break
}}}}else{if(x.charAt(0)=="+"&&D.length){z=""
}else{if(!x||x=="+"){z=this.defaultCountry
}}}if(z!==null){return this._setFlag(z)
}return false
},_isRegionlessNanp:function(x){var v=this._getNumeric(x);
if(v.charAt(0)=="1"){var c=v.substr(1,3);
return j.inArray(c,k)>-1
}return false
},_highlightListItem:function(c){this.countryListItems.removeClass("highlight");
c.addClass("highlight")
},_getCountryData:function(c,y,z){var v=y?d:this.countries;
for(var x=0;
x<v.length;
x++){if(v[x].iso2==c){return v[x]
}}if(z){return null
}else{throw new Error("No country data for '"+c+"'")
}},_setFlag:function(v){var y=this.selectedCountryData.iso2?this.selectedCountryData:{};
this.selectedCountryData=v?this._getCountryData(v,false,false):{};
if(this.selectedCountryData.iso2){this.defaultCountry=this.selectedCountryData.iso2
}this.selectedFlagInner.attr("class","iti-flag "+v);
var z=v?this.selectedCountryData.name+": +"+this.selectedCountryData.dialCode:"Unknown";
this.selectedFlagInner.parent().attr("title",z);
if(this.options.separateDialCode){var c=this.selectedCountryData.dialCode?"+"+this.selectedCountryData.dialCode:"",x=this.telInput.parent();
if(y.dialCode){x.removeClass("iti-sdc-"+(y.dialCode.length+1))
}if(c){x.addClass("iti-sdc-"+c.length)
}this.selectedDialCode.text(c)
}this._updatePlaceholder();
this.countryListItems.removeClass("active");
if(v){this.countryListItems.find(".iti-flag."+v).first().closest(".country").addClass("active")
}return y.iso2!==v
},_updatePlaceholder:function(){var c=this.options.autoPlaceholder==="aggressive"||!this.hadInitialPlaceholder&&(this.options.autoPlaceholder===true||this.options.autoPlaceholder==="polite");
if(n.intlTelInputUtils&&c){var v=intlTelInputUtils.numberType[this.options.placeholderNumberType],x=this.selectedCountryData.iso2?intlTelInputUtils.getExampleNumber(this.selectedCountryData.iso2,this.options.nationalMode,v):"";
x=this._beforeSetNumber(x);
if(typeof this.options.customPlaceholder==="function"){x=this.options.customPlaceholder(x,this.selectedCountryData)
}this.telInput.attr("placeholder",x)
}},_selectListItem:function(v){var x=this._setFlag(v.attr("data-country-code"));
this._closeDropdown();
this._updateDialCode(v.attr("data-dial-code"),true);
this.telInput.focus();
if(this.isGoodBrowser){var c=this.telInput.val().length;
this.telInput[0].setSelectionRange(c,c)
}if(x){this._triggerCountryChange()
}},_closeDropdown:function(){this.countryList.addClass("hide");
this.selectedFlagInner.children(".iti-arrow").removeClass("up");
j(r).off(this.ns);
j("html").off(this.ns);
this.countryList.off(this.ns);
if(this.options.dropdownContainer){if(!this.isMobile){j(n).off("scroll"+this.ns)
}this.dropdown.detach()
}},_scrollTo:function(B,G){var c=this.countryList,F=c.height(),z=c.offset().top,E=z+F,C=B.outerHeight(),y=B.offset().top,D=y+C,v=y-z+c.scrollTop(),x=F/2-C/2;
if(y<z){if(G){v-=x
}c.scrollTop(v)
}else{if(D>E){if(G){v+=x
}var A=F-C;
c.scrollTop(v-A)
}}},_updateDialCode:function(x,v){var c=this.telInput.val(),y;
x="+"+x;
if(c.charAt(0)=="+"){var z=this._getDialCode(c);
if(z){y=c.replace(z,x)
}else{y=x
}}else{if(this.options.nationalMode||this.options.separateDialCode){return
}else{if(c){y=x+c
}else{if(v||!this.options.autoHideDialCode){y=x
}else{return
}}}}this.telInput.val(y)
},_getDialCode:function(y){var v="";
if(y.charAt(0)=="+"){var z="";
for(var x=0;
x<y.length;
x++){var A=y.charAt(x);
if(j.isNumeric(A)){z+=A;
if(this.countryCodes[z]){v=y.substr(0,x+1)
}if(z.length==4){break
}}}}return v
},_getFullNumber:function(){var z=j.trim(this.telInput.val()),c=this.selectedCountryData.dialCode,x,y=this._getNumeric(z),v=y.charAt(0)=="1"?y:"1"+y;
if(this.options.separateDialCode){x="+"+c
}else{if(z.charAt(0)!="+"&&z.charAt(0)!="1"&&c&&c.charAt(0)=="1"&&c.length==4&&c!=v.substr(0,4)){x=c.substr(1)
}else{x=""
}}return x+z
},_beforeSetNumber:function(v){if(this.options.separateDialCode){var c=this._getDialCode(v);
if(c){if(this.selectedCountryData.areaCodes!==null){c="+"+this.selectedCountryData.dialCode
}var x=v[c.length]===" "||v[c.length]==="-"?c.length+1:c.length;
v=v.substr(x)
}}return this._cap(v)
},_triggerCountryChange:function(){this.telInput.trigger("countrychange",this.selectedCountryData)
},handleAutoCountry:function(){if(this.options.initialCountry==="auto"){this.defaultCountry=j.fn[l].autoCountry;
if(!this.telInput.val()){this.setCountry(this.defaultCountry)
}this.autoCountryDeferred.resolve()
}},handleUtils:function(){if(n.intlTelInputUtils){if(this.telInput.val()){this._updateValFromNumber(this.telInput.val())
}this._updatePlaceholder()
}this.utilsScriptDeferred.resolve()
},destroy:function(){if(this.allowDropdown){this._closeDropdown();
this.selectedFlagInner.parent().off(this.ns);
this.telInput.closest("label").off(this.ns)
}if(this.options.autoHideDialCode){var v=this.telInput.prop("form");
if(v){j(v).off(this.ns)
}}this.telInput.off(this.ns);
var c=this.telInput.parent();
c.before(this.telInput).remove()
},getExtension:function(){if(n.intlTelInputUtils){return intlTelInputUtils.getExtension(this._getFullNumber(),this.selectedCountryData.iso2)
}return""
},getNumber:function(c){if(n.intlTelInputUtils){return intlTelInputUtils.formatNumber(this._getFullNumber(),this.selectedCountryData.iso2,c)
}return""
},getNumberType:function(){if(n.intlTelInputUtils){return intlTelInputUtils.getNumberType(this._getFullNumber(),this.selectedCountryData.iso2)
}return -99
},getSelectedCountryData:function(){return this.selectedCountryData
},getValidationError:function(){if(n.intlTelInputUtils){return intlTelInputUtils.getValidationError(this._getFullNumber(),this.selectedCountryData.iso2)
}return -99
},isValidNumber:function(){var v=j.trim(this._getFullNumber()),c=this.options.nationalMode?this.selectedCountryData.iso2:"";
return n.intlTelInputUtils?intlTelInputUtils.isValidNumber(v,c):null
},setCountry:function(c){c=c.toLowerCase();
if(!this.selectedFlagInner.hasClass(c)){this._setFlag(c);
this._updateDialCode(this.selectedCountryData.dialCode,false);
this._triggerCountryChange()
}},setNumber:function(c){var v=this._updateFlagFromNumber(c);
this._updateValFromNumber(c);
if(v){this._triggerCountryChange()
}}};
j.fn[l]=function(v){var c=arguments;
if(v===e||typeof v==="object"){var x=[];
this.each(function(){if(!j.data(this,"plugin_"+l)){var z=new t(this,v);
var A=z._init();
x.push(A[0]);
x.push(A[1]);
j.data(this,"plugin_"+l,z)
}});
return j.when.apply(null,x)
}else{if(typeof v==="string"&&v[0]!=="_"){var y;
this.each(function(){var z=j.data(this,"plugin_"+l);
if(z instanceof t&&typeof z[v]==="function"){y=z[v].apply(z,Array.prototype.slice.call(c,1))
}if(v==="destroy"){j.data(this,"plugin_"+l,null)
}});
return y!==e?y:this
}}};
j.fn[l].getCountryData=function(){return d
};
j.fn[l].loadUtils=function(v,c){if(!j.fn[l].loadedUtilsScript){j.fn[l].loadedUtilsScript=true;
j.ajax({type:"GET",url:v,complete:function(){j(".intl-tel-input input").intlTelInput("handleUtils")
},dataType:"script",cache:true})
}else{if(c){c.resolve()
}}};
j.fn[l].defaults=f;
j.fn[l].version="11.0.14";
var d=[["Afghanistan (افغانستان)","af","93"],["Albania (Shqipëri)","al","355"],["Algeria (الجزائر)","dz","213"],["American Samoa","as","1684"],["Andorra","ad","376"],["Angola","ao","244"],["Anguilla","ai","1264"],["Antigua and Barbuda","ag","1268"],["Argentina","ar","54"],["Armenia (Հայաստան)","am","374"],["Aruba","aw","297"],["Australia","au","61",0],["Austria (Österreich)","at","43"],["Azerbaijan (Azərbaycan)","az","994"],["Bahamas","bs","1242"],["Bahrain (البحرين)","bh","973"],["Bangladesh (বাংলাদেশ)","bd","880"],["Barbados","bb","1246"],["Belarus (Беларусь)","by","375"],["Belgium (België)","be","32"],["Belize","bz","501"],["Benin (Bénin)","bj","229"],["Bermuda","bm","1441"],["Bhutan (འབྲུག)","bt","975"],["Bolivia","bo","591"],["Bosnia and Herzegovina (Босна и Херцеговина)","ba","387"],["Botswana","bw","267"],["Brazil (Brasil)","br","55"],["British Indian Ocean Territory","io","246"],["British Virgin Islands","vg","1284"],["Brunei","bn","673"],["Bulgaria (България)","bg","359"],["Burkina Faso","bf","226"],["Burundi (Uburundi)","bi","257"],["Cambodia (កម្ពុជា)","kh","855"],["Cameroon (Cameroun)","cm","237"],["Canada","ca","1",1,["204","226","236","249","250","289","306","343","365","387","403","416","418","431","437","438","450","506","514","519","548","579","581","587","604","613","639","647","672","705","709","742","778","780","782","807","819","825","867","873","902","905"]],["Cape Verde (Kabu Verdi)","cv","238"],["Caribbean Netherlands","bq","599",1],["Cayman Islands","ky","1345"],["Central African Republic (République centrafricaine)","cf","236"],["Chad (Tchad)","td","235"],["Chile","cl","56"],["China (中国)","cn","86"],["Christmas Island","cx","61",2],["Cocos (Keeling) Islands","cc","61",1],["Colombia","co","57"],["Comoros (جزر القمر)","km","269"],["Congo (DRC) (Jamhuri ya Kidemokrasia ya Kongo)","cd","243"],["Congo (Republic) (Congo-Brazzaville)","cg","242"],["Cook Islands","ck","682"],["Costa Rica","cr","506"],["Côte d’Ivoire","ci","225"],["Croatia (Hrvatska)","hr","385"],["Cuba","cu","53"],["Curaçao","cw","599",0],["Cyprus (Κύπρος)","cy","357"],["Czech Republic (Česká republika)","cz","420"],["Denmark (Danmark)","dk","45"],["Djibouti","dj","253"],["Dominica","dm","1767"],["Dominican Republic (República Dominicana)","do","1",2,["809","829","849"]],["Ecuador","ec","593"],["Egypt (مصر)","eg","20"],["El Salvador","sv","503"],["Equatorial Guinea (Guinea Ecuatorial)","gq","240"],["Eritrea","er","291"],["Estonia (Eesti)","ee","372"],["Ethiopia","et","251"],["Falkland Islands (Islas Malvinas)","fk","500"],["Faroe Islands (Føroyar)","fo","298"],["Fiji","fj","679"],["Finland (Suomi)","fi","358",0],["France","fr","33"],["French Guiana (Guyane française)","gf","594"],["French Polynesia (Polynésie française)","pf","689"],["Gabon","ga","241"],["Gambia","gm","220"],["Georgia (საქართველო)","ge","995"],["Germany (Deutschland)","de","49"],["Ghana (Gaana)","gh","233"],["Gibraltar","gi","350"],["Greece (Ελλάδα)","gr","30"],["Greenland (Kalaallit Nunaat)","gl","299"],["Grenada","gd","1473"],["Guadeloupe","gp","590",0],["Guam","gu","1671"],["Guatemala","gt","502"],["Guernsey","gg","44",1],["Guinea (Guinée)","gn","224"],["Guinea-Bissau (Guiné Bissau)","gw","245"],["Guyana","gy","592"],["Haiti","ht","509"],["Honduras","hn","504"],["Hong Kong (香港)","hk","852"],["Hungary (Magyarország)","hu","36"],["Iceland (Ísland)","is","354"],["India (भारत)","in","91"],["Indonesia","id","62"],["Iran (ایران)","ir","98"],["Iraq (العراق)","iq","964"],["Ireland","ie","353"],["Isle of Man","im","44",2],["Israel (ישראל)","il","972"],["Italy (Italia)","it","39",0],["Jamaica","jm","1876"],["Japan (日本)","jp","81"],["Jersey","je","44",3],["Jordan (الأردن)","jo","962"],["Kazakhstan (Казахстан)","kz","7",1],["Kenya","ke","254"],["Kiribati","ki","686"],["Kosovo","xk","383"],["Kuwait (الكويت)","kw","965"],["Kyrgyzstan (Кыргызстан)","kg","996"],["Laos (ລາວ)","la","856"],["Latvia (Latvija)","lv","371"],["Lebanon (لبنان)","lb","961"],["Lesotho","ls","266"],["Liberia","lr","231"],["Libya (ليبيا)","ly","218"],["Liechtenstein","li","423"],["Lithuania (Lietuva)","lt","370"],["Luxembourg","lu","352"],["Macau (澳門)","mo","853"],["Macedonia (FYROM) (Македонија)","mk","389"],["Madagascar (Madagasikara)","mg","261"],["Malawi","mw","265"],["Malaysia","my","60"],["Maldives","mv","960"],["Mali","ml","223"],["Malta","mt","356"],["Marshall Islands","mh","692"],["Martinique","mq","596"],["Mauritania (موريتانيا)","mr","222"],["Mauritius (Moris)","mu","230"],["Mayotte","yt","262",1],["Mexico (México)","mx","52"],["Micronesia","fm","691"],["Moldova (Republica Moldova)","md","373"],["Monaco","mc","377"],["Mongolia (Монгол)","mn","976"],["Montenegro (Crna Gora)","me","382"],["Montserrat","ms","1664"],["Morocco (المغرب)","ma","212",0],["Mozambique (Moçambique)","mz","258"],["Myanmar (Burma) (မြန်မာ)","mm","95"],["Namibia (Namibië)","na","264"],["Nauru","nr","674"],["Nepal (नेपाल)","np","977"],["Netherlands (Nederland)","nl","31"],["New Caledonia (Nouvelle-Calédonie)","nc","687"],["New Zealand","nz","64"],["Nicaragua","ni","505"],["Niger (Nijar)","ne","227"],["Nigeria","ng","234"],["Niue","nu","683"],["Norfolk Island","nf","672"],["North Korea (조선 민주주의 인민 공화국)","kp","850"],["Northern Mariana Islands","mp","1670"],["Norway (Norge)","no","47",0],["Oman (عُمان)","om","968"],["Pakistan (پاکستان)","pk","92"],["Palau","pw","680"],["Palestine (فلسطين)","ps","970"],["Panama (Panamá)","pa","507"],["Papua New Guinea","pg","675"],["Paraguay","py","595"],["Peru (Perú)","pe","51"],["Philippines","ph","63"],["Poland (Polska)","pl","48"],["Portugal","pt","351"],["Puerto Rico","pr","1",3,["787","939"]],["Qatar (قطر)","qa","974"],["Réunion (La Réunion)","re","262",0],["Romania (România)","ro","40"],["Russia (Россия)","ru","7",0],["Rwanda","rw","250"],["Saint Barthélemy (Saint-Barthélemy)","bl","590",1],["Saint Helena","sh","290"],["Saint Kitts and Nevis","kn","1869"],["Saint Lucia","lc","1758"],["Saint Martin (Saint-Martin (partie française))","mf","590",2],["Saint Pierre and Miquelon (Saint-Pierre-et-Miquelon)","pm","508"],["Saint Vincent and the Grenadines","vc","1784"],["Samoa","ws","685"],["San Marino","sm","378"],["São Tomé and Príncipe (São Tomé e Príncipe)","st","239"],["Saudi Arabia (المملكة العربية السعودية)","sa","966"],["Senegal (Sénégal)","sn","221"],["Serbia (Србија)","rs","381"],["Seychelles","sc","248"],["Sierra Leone","sl","232"],["Singapore","sg","65"],["Sint Maarten","sx","1721"],["Slovakia (Slovensko)","sk","421"],["Slovenia (Slovenija)","si","386"],["Solomon Islands","sb","677"],["Somalia (Soomaaliya)","so","252"],["South Africa","za","27"],["South Korea (대한민국)","kr","82"],["South Sudan (جنوب السودان)","ss","211"],["Spain (España)","es","34"],["Sri Lanka (ශ්රී ලංකාව)","lk","94"],["Sudan (السودان)","sd","249"],["Suriname","sr","597"],["Svalbard and Jan Mayen","sj","47",1],["Swaziland","sz","268"],["Sweden (Sverige)","se","46"],["Switzerland (Schweiz)","ch","41"],["Syria (سوريا)","sy","963"],["Taiwan (台灣)","tw","886"],["Tajikistan","tj","992"],["Tanzania","tz","255"],["Thailand (ไทย)","th","66"],["Timor-Leste","tl","670"],["Togo","tg","228"],["Tokelau","tk","690"],["Tonga","to","676"],["Trinidad and Tobago","tt","1868"],["Tunisia (تونس)","tn","216"],["Turkey (Türkiye)","tr","90"],["Turkmenistan","tm","993"],["Turks and Caicos Islands","tc","1649"],["Tuvalu","tv","688"],["U.S. Virgin Islands","vi","1340"],["Uganda","ug","256"],["Ukraine (Україна)","ua","380"],["United Arab Emirates (الإمارات العربية المتحدة)","ae","971"],["United Kingdom","gb","44",0],["United States","us","1",0],["Uruguay","uy","598"],["Uzbekistan (Oʻzbekiston)","uz","998"],["Vanuatu","vu","678"],["Vatican City (Città del Vaticano)","va","39",1],["Venezuela","ve","58"],["Vietnam (Việt Nam)","vn","84"],["Wallis and Futuna","wf","681"],["Western Sahara (الصحراء الغربية)","eh","212",1],["Yemen (اليمن)","ye","967"],["Zambia","zm","260"],["Zimbabwe","zw","263"],["Åland Islands","ax","358",1]];
for(var g=0;
g<d.length;
g++){var o=d[g];
d[g]={name:o[0],iso2:o[1],dialCode:o[2],priority:o[3]||0,areaCodes:o[4]||null}
}});
(function(){for(var bc="function"==typeof Object.defineProperties?Object.defineProperty:function(n,l,r){if(r.get||r.set){throw new TypeError("ES3 does not support getters and setters.")
}n!=Array.prototype&&n!=Object.prototype&&(n[l]=r.value)
},av="undefined"!=typeof window&&window===this?this:"undefined"!=typeof global&&null!=global?global:this,au=["String","prototype","repeat"],ar=0;
ar<au.length-1;
ar++){var aq=au[ar];
aq in av||(av[aq]={});
av=av[aq]
}var aO=au[au.length-1],ap=av[aO],ao=ap?ap:function(n){var l;
if(null==this){throw new TypeError("The 'this' value for String.prototype.repeat must not be null or undefined")
}l=this+"";
if(0>n||1342177279<n){throw new RangeError("Invalid count value")
}n|=0;
for(var r="";
n;
){if(n&1&&(r+=l),n>>>=1){l+=l
}}return r
};
ao!=ap&&null!=ao&&bc(av,aO,{configurable:!0,writable:!0,value:ao});
var at=this;
function an(l){return"string"==typeof l
}function am(n,l){var u=n.split("."),t=at;
u[0] in t||!t.execScript||t.execScript("var "+u[0]);
for(var r;
u.length&&(r=u.shift());
){u.length||void 0===l?t[r]?t=t[r]:t=t[r]={}:t[r]=l
}}function al(n,l){function r(){}r.prototype=l.prototype;
n.$=l.prototype;
n.prototype=new r;
n.prototype.constructor=n;
n.w=function(t,y,u){for(var x=Array(arguments.length-2),v=2;
v<arguments.length;
v++){x[v-2]=arguments[v]
}return l.prototype[y].apply(t,x)
}
}var ak=Array.prototype.indexOf?function(n,l,r){return Array.prototype.indexOf.call(n,l,r)
}:function(n,l,r){r=null==r?0:0>r?Math.max(0,n.length+r):r;
if(an(n)){return an(l)&&1==l.length?n.indexOf(l,r):-1
}for(;
r<n.length;
r++){if(r in n&&n[r]===l){return r
}}return -1
};
function ai(n,l){n.sort(l||ab)
}function ab(n,l){return n>l?1:n<l?-1:0
}function d(n){var l=[],t=0,r;
for(r in n){l[t++]=n[r]
}return l
}function bl(n,l){this.a=n;
this.h=!!l.i;
this.c=l.b;
this.m=l.type;
this.l=!1;
switch(this.c){case bd:case aV:case aw:case ac:case e:case bn:case bf:this.l=!0
}this.g=l.defaultValue
}var bf=1,bn=2,bd=3,aV=4,aw=6,ac=16,e=18;
function a2(n,l){this.c=n;
this.a={};
for(var t=0;
t<l.length;
t++){var r=l[t];
this.a[r.a]=r
}}function ay(l){l=d(l.a);
ai(l,function(n,r){return n.a-r.a
});
return l
}function a7(){this.a={};
this.g=this.f().a;
this.c=this.h=null
}a7.prototype.has=function(l){return null!=this.a[l.a]
};
a7.prototype.get=function(n,l){return a6(this,n.a,l)
};
a7.prototype.set=function(n,l){a5(this,n.a,l)
};
function ae(C,B){for(var A=ay(C.f()),x=0;
x<A.length;
x++){var v=A[x],u=v.a;
if(null!=B.a[u]){C.c&&delete C.c[v.a];
var t=11==v.c||10==v.c;
if(v.h){for(var v=a3(B,u),r=0;
r<v.length;
r++){var n=C,l=u,y=t?v[r].clone():v[r];
n.a[l]||(n.a[l]=[]);
n.a[l].push(y);
n.c&&delete n.c[l]
}}else{v=a1(B,u),t?(t=a1(C,u))?ae(t,v):a5(C,u,v.clone()):a5(C,u,v)
}}}}a7.prototype.clone=function(){var l=new this.constructor;
l!=this&&(l.a={},l.c&&(l.c={}),ae(l,this));
return l
};
function a1(n,l){var x=n.a[l];
if(null==x){return null
}if(n.h){if(!(l in n.c)){var v=n.h,u=n.g[l];
if(null!=x){if(u.h){for(var t=[],r=0;
r<x.length;
r++){t[r]=v.a(u,x[r])
}x=t
}else{x=v.a(u,x)
}}return n.c[l]=x
}return n.c[l]
}return x
}function a6(n,l,t){var r=a1(n,l);
return n.g[l].h?r[t||0]:r
}function a0(n,l){var t;
if(null!=n.a[l]){t=a6(n,l,void 0)
}else{n:{t=n.g[l];
if(void 0===t.g){var r=t.m;
if(r===Boolean){t.g=!1
}else{if(r===Number){t.g=0
}else{if(r===String){t.g=t.l?"0":""
}else{t=new r;
break n
}}}}t=t.g
}}return t
}function a3(n,l){return a1(n,l)||[]
}function aZ(n,l){return n.g[l].h?null!=n.a[l]?n.a[l].length:0:null!=n.a[l]?1:0
}function a5(n,l,r){n.a[l]=r;
n.c&&(n.c[l]=r)
}function aY(n,l){var t=[],r;
for(r in l){0!=r&&t.push(new bl(r,l[r]))
}return new a2(n,t)
}function aW(){}aW.prototype.c=function(l){new l.c;
throw Error("Unimplemented")
};
aW.prototype.a=function(n,l){if(11==n.c||10==n.c){return l instanceof a7?l:this.c(n.m.prototype.f(),l)
}if(14==n.c){if(an(l)&&g.test(l)){var r=Number(l);
if(0<r){return r
}}return l
}if(!n.l){return l
}r=n.m;
if(r===String){if("number"==typeof l){return String(l)
}}else{if(r===Number&&an(l)&&("Infinity"===l||"-Infinity"===l||"NaN"===l||g.test(l))){return Number(l)
}}return l
};
var g=/^-?[0-9]+$/;
function aU(){}al(aU,aW);
aU.prototype.c=function(n,l){var r=new n.c;
r.h=this;
r.a=l;
r.c={};
return r
};
function bp(){}al(bp,aU);
bp.prototype.a=function(n,l){return 8==n.c?!!l:aW.prototype.a.apply(this,arguments)
};
function aT(n,l){null!=n&&this.a.apply(this,arguments)
}aT.prototype.c="";
aT.prototype.set=function(l){this.c=""+l
};
aT.prototype.a=function(n,l,t){this.c+=String(n);
if(null!=l){for(var r=1;
r<arguments.length;
r++){this.c+=arguments[r]
}}return this
};
aT.prototype.toString=function(){return this.c
};
function aS(){a7.call(this)
}al(aS,a7);
var bh=null;
function aR(){a7.call(this)
}al(aR,a7);
var a8=null;
function aQ(){a7.call(this)
}al(aQ,a7);
var aA=null;
aS.prototype.f=function(){var l=bh;
l||(bh=l=aY(aS,{0:{name:"NumberFormat",j:"i18n.phonenumbers.NumberFormat"},1:{name:"pattern",required:!0,b:9,type:String},2:{name:"format",required:!0,b:9,type:String},3:{name:"leading_digits_pattern",i:!0,b:9,type:String},4:{name:"national_prefix_formatting_rule",b:9,type:String},6:{name:"national_prefix_optional_when_formatting",b:8,defaultValue:!1,type:Boolean},5:{name:"domestic_carrier_code_formatting_rule",b:9,type:String}}));
return l
};
aS.f=aS.prototype.f;
aR.prototype.f=function(){var l=a8;
l||(a8=l=aY(aR,{0:{name:"PhoneNumberDesc",j:"i18n.phonenumbers.PhoneNumberDesc"},2:{name:"national_number_pattern",b:9,type:String},3:{name:"possible_number_pattern",b:9,type:String},9:{name:"possible_length",i:!0,b:5,type:Number},10:{name:"possible_length_local_only",i:!0,b:5,type:Number},6:{name:"example_number",b:9,type:String},7:{name:"national_number_matcher_data",b:12,type:String}}));
return l
};
aR.f=aR.prototype.f;
aQ.prototype.f=function(){var l=aA;
l||(aA=l=aY(aQ,{0:{name:"PhoneMetadata",j:"i18n.phonenumbers.PhoneMetadata"},1:{name:"general_desc",b:11,type:aR},2:{name:"fixed_line",b:11,type:aR},3:{name:"mobile",b:11,type:aR},4:{name:"toll_free",b:11,type:aR},5:{name:"premium_rate",b:11,type:aR},6:{name:"shared_cost",b:11,type:aR},7:{name:"personal_number",b:11,type:aR},8:{name:"voip",b:11,type:aR},21:{name:"pager",b:11,type:aR},25:{name:"uan",b:11,type:aR},27:{name:"emergency",b:11,type:aR},28:{name:"voicemail",b:11,type:aR},24:{name:"no_international_dialling",b:11,type:aR},9:{name:"id",required:!0,b:9,type:String},10:{name:"country_code",b:5,type:Number},11:{name:"international_prefix",b:9,type:String},17:{name:"preferred_international_prefix",b:9,type:String},12:{name:"national_prefix",b:9,type:String},13:{name:"preferred_extn_prefix",b:9,type:String},15:{name:"national_prefix_for_parsing",b:9,type:String},16:{name:"national_prefix_transform_rule",b:9,type:String},18:{name:"same_mobile_and_fixed_line_pattern",b:8,defaultValue:!1,type:Boolean},19:{name:"number_format",i:!0,b:11,type:aS},20:{name:"intl_number_format",i:!0,b:11,type:aS},22:{name:"main_country_for_code",b:8,defaultValue:!1,type:Boolean},23:{name:"leading_digits",b:9,type:String},26:{name:"leading_zero_possible",b:8,defaultValue:!1,type:Boolean}}));
return l
};
aQ.f=aQ.prototype.f;
function aP(){a7.call(this)
}var ag;
al(aP,a7);
var k={v:1,u:5,s:10,o:20};
aP.prototype.f=function(){ag||(ag=aY(aP,{0:{name:"PhoneNumber",j:"i18n.phonenumbers.PhoneNumber"},1:{name:"country_code",required:!0,b:5,type:Number},2:{name:"national_number",required:!0,b:4,type:Number},3:{name:"extension",b:9,type:String},4:{name:"italian_leading_zero",b:8,type:Boolean},8:{name:"number_of_leading_zeros",b:5,defaultValue:1,type:Number},5:{name:"raw_input",b:9,type:String},6:{name:"country_code_source",b:14,defaultValue:1,type:k},7:{name:"preferred_domestic_carrier_code",b:9,type:String}}));
return ag
};
aP.ctor=aP;
aP.ctor.f=aP.prototype.f;
var aN={1:"US AG AI AS BB BM BS CA DM DO GD GU JM KN KY LC MP MS PR SX TC TT VC VG VI".split(" "),7:["RU","KZ"],20:["EG"],27:["ZA"],30:["GR"],31:["NL"],32:["BE"],33:["FR"],34:["ES"],36:["HU"],39:["IT","VA"],40:["RO"],41:["CH"],43:["AT"],44:["GB","GG","IM","JE"],45:["DK"],46:["SE"],47:["NO","SJ"],48:["PL"],49:["DE"],51:["PE"],52:["MX"],53:["CU"],54:["AR"],55:["BR"],56:["CL"],57:["CO"],58:["VE"],60:["MY"],61:["AU","CC","CX"],62:["ID"],63:["PH"],64:["NZ"],65:["SG"],66:["TH"],81:["JP"],82:["KR"],84:["VN"],86:["CN"],90:["TR"],91:["IN"],92:["PK"],93:["AF"],94:["LK"],95:["MM"],98:["IR"],211:["SS"],212:["MA","EH"],213:["DZ"],216:["TN"],218:["LY"],220:["GM"],221:["SN"],222:["MR"],223:["ML"],224:["GN"],225:["CI"],226:["BF"],227:["NE"],228:["TG"],229:["BJ"],230:["MU"],231:["LR"],232:["SL"],233:["GH"],234:["NG"],235:["TD"],236:["CF"],237:["CM"],238:["CV"],239:["ST"],240:["GQ"],241:["GA"],242:["CG"],243:["CD"],244:["AO"],245:["GW"],246:["IO"],247:["AC"],248:["SC"],249:["SD"],250:["RW"],251:["ET"],252:["SO"],253:["DJ"],254:["KE"],255:["TZ"],256:["UG"],257:["BI"],258:["MZ"],260:["ZM"],261:["MG"],262:["RE","YT"],263:["ZW"],264:["NA"],265:["MW"],266:["LS"],267:["BW"],268:["SZ"],269:["KM"],290:["SH","TA"],291:["ER"],297:["AW"],298:["FO"],299:["GL"],350:["GI"],351:["PT"],352:["LU"],353:["IE"],354:["IS"],355:["AL"],356:["MT"],357:["CY"],358:["FI","AX"],359:["BG"],370:["LT"],371:["LV"],372:["EE"],373:["MD"],374:["AM"],375:["BY"],376:["AD"],377:["MC"],378:["SM"],380:["UA"],381:["RS"],382:["ME"],385:["HR"],386:["SI"],387:["BA"],389:["MK"],420:["CZ"],421:["SK"],423:["LI"],500:["FK"],501:["BZ"],502:["GT"],503:["SV"],504:["HN"],505:["NI"],506:["CR"],507:["PA"],508:["PM"],509:["HT"],590:["GP","BL","MF"],591:["BO"],592:["GY"],593:["EC"],594:["GF"],595:["PY"],596:["MQ"],597:["SR"],598:["UY"],599:["CW","BQ"],670:["TL"],672:["NF"],673:["BN"],674:["NR"],675:["PG"],676:["TO"],677:["SB"],678:["VU"],679:["FJ"],680:["PW"],681:["WF"],682:["CK"],683:["NU"],685:["WS"],686:["KI"],687:["NC"],688:["TV"],689:["PF"],690:["TK"],691:["FM"],692:["MH"],800:["001"],808:["001"],850:["KP"],852:["HK"],853:["MO"],855:["KH"],856:["LA"],870:["001"],878:["001"],880:["BD"],881:["001"],882:["001"],883:["001"],886:["TW"],888:["001"],960:["MV"],961:["LB"],962:["JO"],963:["SY"],964:["IQ"],965:["KW"],966:["SA"],967:["YE"],968:["OM"],970:["PS"],971:["AE"],972:["IL"],973:["BH"],974:["QA"],975:["BT"],976:["MN"],977:["NP"],979:["001"],992:["TJ"],993:["TM"],994:["AZ"],995:["GE"],996:["KG"],998:["UZ"]},b={AC:[,[,,"[46]\\d{4}|[01589]\\d{5}",,,,,,,[5,6]],[,,"6[2-467]\\d{3}",,,,"62889",,,[5]],[,,"4\\d{4}",,,,"40123",,,[5]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],"AC",247,"00",,,,,,,,,,[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,"[01589]\\d{5}",,,,"542011",,,[6]],,,[,,,,,,,,,[-1]]],AD:[,[,,"[16]\\d{5,8}|[37-9]\\d{5}",,,,,,,[6,8,9]],[,,"[78]\\d{5}",,,,"712345",,,[6]],[,,"(?:3\\d|6(?:[0-8]|90\\d{2}))\\d{4}",,,,"312345",,,[6,9]],[,,"180[02]\\d{4}",,,,"18001234",,,[8]],[,,"[19]\\d{5}",,,,"912345",,,[6]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],"AD",376,"00",,,,,,,,[[,"(\\d{3})(\\d{3})","$1 $2",["[137-9]|6[0-8]"]],[,"(\\d{4})(\\d{4})","$1 $2",["180","180[02]"]],[,"(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3",["690"]]],,[,,,,,,,,,[-1]],,,[,,"1800\\d{4}",,,,"18000000",,,[8]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],AE:[,[,,"[2-79]\\d{7,8}|800\\d{2,9}",,,,,,,[5,6,7,8,9,10,11,12]],[,,"[2-4679][2-8]\\d{6}",,,,"22345678",,,[8],[7]],[,,"5[024-68]\\d{7}",,,,"501234567",,,[9]],[,,"400\\d{6}|800\\d{2,9}",,,,"800123456"],[,,"900[02]\\d{5}",,,,"900234567",,,[9]],[,,"700[05]\\d{5}",,,,"700012345",,,[9]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],"AE",971,"00","0",,,"0",,,,[[,"([2-4679])(\\d{3})(\\d{4})","$1 $2 $3",["[2-4679][2-8]"],"0$1"],[,"(5\\d)(\\d{3})(\\d{4})","$1 $2 $3",["5"],"0$1"],[,"([479]00)(\\d)(\\d{5})","$1 $2 $3",["[479]0"],"$1"],[,"([68]00)(\\d{2,9})","$1 $2",["60|8"],"$1"]],,[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,"600[25]\\d{5}",,,,"600212345",,,[9]],,,[,,,,,,,,,[-1]]],AF:[,[,,"[2-7]\\d{8}",,,,,,,[9],[7]],[,,"(?:[25][0-8]|[34][0-4]|6[0-5])[2-9]\\d{6}",,,,"234567890",,,,[7]],[,,"7(?:[014-9]\\d|2[89]|30)\\d{6}",,,,"701234567"],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],"AF",93,"00","0",,,"0",,,,[[,"([2-7]\\d)(\\d{3})(\\d{4})","$1 $2 $3",["[2-7]"],"0$1"]],,[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],AG:[,[,,"[2589]\\d{9}",,,,,,,[10],[7]],[,,"268(?:4(?:6[0-38]|84)|56[0-2])\\d{4}",,,,"2684601234",,,,[7]],[,,"268(?:464|7(?:2\\d|3[246]|64|7[0-689]|8[02-68]))\\d{4}",,,,"2684641234",,,,[7]],[,,"8(?:00|33|44|55|66|77|88)[2-9]\\d{6}",,,,"8002123456"],[,,"900[2-9]\\d{6}",,,,"9002123456"],[,,,,,,,,,[-1]],[,,"5(?:00|22|33|44|66|77|88)[2-9]\\d{6}",,,,"5002345678"],[,,"26848[01]\\d{4}",,,,"2684801234",,,,[7]],"AG",1,"011","1",,,"1",,,,,,[,,"26840[69]\\d{4}",,,,"2684061234",,,,[7]],,"268",[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],AI:[,[,,"[2589]\\d{9}",,,,,,,[10],[7]],[,,"2644(?:6[12]|9[78])\\d{4}",,,,"2644612345",,,,[7]],[,,"264(?:235|476|5(?:3[6-9]|8[1-4])|7(?:29|72))\\d{4}",,,,"2642351234",,,,[7]],[,,"8(?:00|33|44|55|66|77|88)[2-9]\\d{6}",,,,"8002123456"],[,,"900[2-9]\\d{6}",,,,"9002123456"],[,,,,,,,,,[-1]],[,,"5(?:00|22|33|44|66|77|88)[2-9]\\d{6}",,,,"5002345678"],[,,,,,,,,,[-1]],"AI",1,"011","1",,,"1",,,,,,[,,,,,,,,,[-1]],,"264",[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],AL:[,[,,"[2-57]\\d{7}|6\\d{8}|8\\d{5,7}|9\\d{5}",,,,,,,[6,7,8,9],[5]],[,,"(?:2(?:1(?:0[2-9]|[1-9]\\d)|[247]\\d{2}|[35][2-9]\\d|[68](?:0[2-9]|[1-9]\\d)|9(?:[089][2-9]|[1-7]\\d))|3(?:1(?:[04-9][2-9]|[1-3]\\d)|[2-6]\\d{2}|[79](?:[09][2-9]|[1-8]\\d)|8(?:0[2-9]|[1-9]\\d))|4\\d{3}|5(?:1(?:[05-9][2-9]|[1-4]\\d)|[2-578]\\d{2}|6(?:[06-9][2-9]|[1-5]\\d)|9(?:[089][2-9]|[1-7]\\d))|8(?:[19](?:[06-9][2-9]|[1-5]\\d)|[2-6]\\d{2}|[78](?:[089][2-9]|[1-7]\\d)))\\d{4}",,,,"22345678",,,[8],[5,6,7]],[,,"6(?:[2-5][2-9]|[6-9]\\d)\\d{6}",,,,"661234567",,,[9]],[,,"800\\d{4}",,,,"8001234",,,[7]],[,,"900\\d{3}",,,,"900123",,,[6]],[,,"808\\d{3}",,,,"808123",,,[6]],[,,"700\\d{5}",,,,"70012345",,,[8]],[,,,,,,,,,[-1]],"AL",355,"00","0",,,"0",,,,[[,"(4)(\\d{3})(\\d{4})","$1 $2 $3",["4[0-6]"],"0$1"],[,"(6\\d)(\\d{3})(\\d{4})","$1 $2 $3",["6"],"0$1"],[,"(\\d{2})(\\d{3})(\\d{3})","$1 $2 $3",["[2358][2-5]|4[7-9]"],"0$1"],[,"(\\d{3})(\\d{3,5})","$1 $2",["[235][16-9]|8[016-9]|[79]"],"0$1"]],,[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],AM:[,[,,"[1-9]\\d{7}",,,,,,,[8],[5,6]],[,,"(?:1[0-2]\\d|2(?:2[2-46]|3[1-8]|4[2-69]|5[2-7]|6[1-9]|8[1-7])|3[12]2|47\\d)\\d{5}",,,,"10123456",,,,[5,6]],[,,"(?:4[1349]|55|77|9[1-9])\\d{6}",,,,"77123456"],[,,"800\\d{5}",,,,"80012345"],[,,"90[016]\\d{5}",,,,"90012345"],[,,"80[1-4]\\d{5}",,,,"80112345"],[,,,,,,,,,[-1]],[,,"60(?:2[078]|[3-7]\\d|8[0-5])\\d{4}",,,,"60271234"],"AM",374,"00","0",,,"0",,,,[[,"(\\d{2})(\\d{6})","$1 $2",["1|47"],"(0$1)"],[,"(\\d{2})(\\d{6})","$1 $2",["4[1349]|[5-7]|9[1-9]"],"0$1"],[,"(\\d{3})(\\d{5})","$1 $2",["[23]"],"(0$1)"],[,"(\\d{3})(\\d{2})(\\d{3})","$1 $2 $3",["8|90"],"0 $1"]],,[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],AO:[,[,,"[29]\\d{8}",,,,,,,[9]],[,,"2\\d(?:[26-9]\\d|\\d[26-9])\\d{5}",,,,"222123456"],[,,"9[1-49]\\d{7}",,,,"923123456"],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],"AO",244,"00",,,,,,,,[[,"(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3"]],,[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],AR:[,[,,"11\\d{8}|[2368]\\d{9}|9\\d{10}",,,,,,,[10,11],[6,7,8]],[,,"11\\d{8}|(?:2(?:2(?:[013]\\d|2[13-79]|4[1-6]|5[2457]|6[124-8]|7[1-4]|8[13-6]|9[1267])|3(?:1[467]|2[03-6]|3[13-8]|[49][2-6]|5[2-8]|[067]\\d)|4(?:7[3-8]|9\\d)|6(?:[01346]\\d|2[24-6]|5[15-8])|80\\d|9(?:[0124789]\\d|3[1-6]|5[234]|6[2-46]))|3(?:3(?:2[79]|6\\d|8[2578])|4(?:[78]\\d|0[0124-9]|[1-35]\\d|4[24-7]|6[02-9]|9[123678])|5(?:[138]\\d|2[1245]|4[1-9]|6[2-4]|7[1-6])|6[24]\\d|7(?:[0469]\\d|1[1568]|2[013-9]|3[145]|5[14-8]|7[2-57]|8[0-24-9])|8(?:[013578]\\d|2[15-7]|4[13-6]|6[1-357-9]|9[124]))|670\\d)\\d{6}",,,,"1123456789",,,[10],[6,7,8]],[,,"675\\d{7}|9(?:11[2-9]\\d{7}|(?:2(?:2[013]|3[067]|49|6[01346]|80|9[147-9])|3(?:36|4[12358]|5[138]|6[24]|7[069]|8[013578]))[2-9]\\d{6}|\\d{4}[2-9]\\d{5})",,,,"91123456789",,,,[6,7,8]],[,,"800\\d{7}",,,,"8001234567",,,[10]],[,,"60[04579]\\d{7}",,,,"6001234567",,,[10]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],"AR",54,"00","0",,,"0?(?:(11|2(?:2(?:02?|[13]|2[13-79]|4[1-6]|5[2457]|6[124-8]|7[1-4]|8[13-6]|9[1267])|3(?:02?|1[467]|2[03-6]|3[13-8]|[49][2-6]|5[2-8]|[67])|4(?:7[3-578]|9)|6(?:[0136]|2[24-6]|4[6-8]?|5[15-8])|80|9(?:0[1-3]|[19]|2\\d|3[1-6]|4[02568]?|5[2-4]|6[2-46]|72?|8[23]?))|3(?:3(?:2[79]|6|8[2578])|4(?:0[0-24-9]|[12]|3[5-8]?|4[24-7]|5[4-68]?|6[02-9]|7[126]|8[2379]?|9[1-36-8])|5(?:1|2[1245]|3[237]?|4[1-46-9]|6[2-4]|7[1-6]|8[2-5]?)|6[24]|7(?:[069]|1[1568]|2[15]|3[145]|4[13]|5[14-8]|7[2-57]|8[126])|8(?:[01]|2[15-7]|3[2578]?|4[13-6]|5[4-8]?|6[1-357-9]|7[36-8]?|8[5-8]?|9[124])))?15)?","9$1",,,[[,"([68]\\d{2})(\\d{3})(\\d{4})","$1-$2-$3",["[68]"],"0$1"],[,"(\\d{2})(\\d{4})","$1-$2",["[2-9]"],"$1"],[,"(\\d{3})(\\d{4})","$1-$2",["[2-9]"],"$1"],[,"(\\d{4})(\\d{4})","$1-$2",["[2-9]"],"$1"],[,"(9)(11)(\\d{4})(\\d{4})","$2 15-$3-$4",["911"],"0$1"],[,"(9)(\\d{3})(\\d{3})(\\d{4})","$2 15-$3-$4",["9(?:2[234689]|3[3-8])","9(?:2(?:2[013]|3[067]|49|6[01346]|80|9[147-9])|3(?:36|4[1-358]|5[138]|6[24]|7[069]|8[013578]))","9(?:2(?:2(?:0[013-9]|[13])|3(?:0[013-9]|[67])|49|6(?:[0136]|4[0-59])|8|9(?:[19]|44|7[013-9]|8[14]))|3(?:36|4(?:[12]|3[456]|[58]4)|5(?:1|3[0-24-689]|8[46])|6|7[069]|8(?:[01]|34|[578][45])))","9(?:2(?:2(?:0[013-9]|[13])|3(?:0[013-9]|[67])|49|6(?:[0136]|4[0-59])|8|9(?:[19]|44|7[013-9]|8[14]))|3(?:36|4(?:[12]|3(?:4|5[014]|6[1239])|[58]4)|5(?:1|3[0-24-689]|8[46])|6|7[069]|8(?:[01]|34|[578][45])))"],"0$1"],[,"(9)(\\d{4})(\\d{2})(\\d{4})","$2 15-$3-$4",["9[23]"],"0$1"],[,"(11)(\\d{4})(\\d{4})","$1 $2-$3",["1"],"0$1",,1],[,"(\\d{3})(\\d{3})(\\d{4})","$1 $2-$3",["2(?:2[013]|3[067]|49|6[01346]|80|9[147-9])|3(?:36|4[1-358]|5[138]|6[24]|7[069]|8[013578])","2(?:2(?:0[013-9]|[13])|3(?:0[013-9]|[67])|49|6(?:[0136]|4[0-59])|8|9(?:[19]|44|7[013-9]|8[14]))|3(?:36|4(?:[12]|3[456]|[58]4)|5(?:1|3[0-24-689]|8[46])|6|7[069]|8(?:[01]|34|[578][45]))","2(?:2(?:0[013-9]|[13])|3(?:0[013-9]|[67])|49|6(?:[0136]|4[0-59])|8|9(?:[19]|44|7[013-9]|8[14]))|3(?:36|4(?:[12]|3(?:4|5[014]|6[1239])|[58]4)|5(?:1|3[0-24-689]|8[46])|6|7[069]|8(?:[01]|34|[578][45]))"],"0$1",,1],[,"(\\d{4})(\\d{2})(\\d{4})","$1 $2-$3",["[23]"],"0$1",,1],[,"(\\d{3})","$1",["1[012]|911"],"$1"]],[[,"([68]\\d{2})(\\d{3})(\\d{4})","$1-$2-$3",["[68]"],"0$1"],[,"(9)(11)(\\d{4})(\\d{4})","$1 $2 $3-$4",["911"]],[,"(9)(\\d{3})(\\d{3})(\\d{4})","$1 $2 $3-$4",["9(?:2[234689]|3[3-8])","9(?:2(?:2[013]|3[067]|49|6[01346]|80|9[147-9])|3(?:36|4[1-358]|5[138]|6[24]|7[069]|8[013578]))","9(?:2(?:2(?:0[013-9]|[13])|3(?:0[013-9]|[67])|49|6(?:[0136]|4[0-59])|8|9(?:[19]|44|7[013-9]|8[14]))|3(?:36|4(?:[12]|3[456]|[58]4)|5(?:1|3[0-24-689]|8[46])|6|7[069]|8(?:[01]|34|[578][45])))","9(?:2(?:2(?:0[013-9]|[13])|3(?:0[013-9]|[67])|49|6(?:[0136]|4[0-59])|8|9(?:[19]|44|7[013-9]|8[14]))|3(?:36|4(?:[12]|3(?:4|5[014]|6[1239])|[58]4)|5(?:1|3[0-24-689]|8[46])|6|7[069]|8(?:[01]|34|[578][45])))"]],[,"(9)(\\d{4})(\\d{2})(\\d{4})","$1 $2 $3-$4",["9[23]"]],[,"(11)(\\d{4})(\\d{4})","$1 $2-$3",["1"],"0$1",,1],[,"(\\d{3})(\\d{3})(\\d{4})","$1 $2-$3",["2(?:2[013]|3[067]|49|6[01346]|80|9[147-9])|3(?:36|4[1-358]|5[138]|6[24]|7[069]|8[013578])","2(?:2(?:0[013-9]|[13])|3(?:0[013-9]|[67])|49|6(?:[0136]|4[0-59])|8|9(?:[19]|44|7[013-9]|8[14]))|3(?:36|4(?:[12]|3[456]|[58]4)|5(?:1|3[0-24-689]|8[46])|6|7[069]|8(?:[01]|34|[578][45]))","2(?:2(?:0[013-9]|[13])|3(?:0[013-9]|[67])|49|6(?:[0136]|4[0-59])|8|9(?:[19]|44|7[013-9]|8[14]))|3(?:36|4(?:[12]|3(?:4|5[014]|6[1239])|[58]4)|5(?:1|3[0-24-689]|8[46])|6|7[069]|8(?:[01]|34|[578][45]))"],"0$1",,1],[,"(\\d{4})(\\d{2})(\\d{4})","$1 $2-$3",["[23]"],"0$1",,1]],[,,,,,,,,,[-1]],,,[,,"810\\d{7}",,,,"8101234567",,,[10]],[,,"810\\d{7}",,,,"8101234567",,,[10]],,,[,,,,,,,,,[-1]]],AS:[,[,,"[5689]\\d{9}",,,,,,,[10],[7]],[,,"6846(?:22|33|44|55|77|88|9[19])\\d{4}",,,,"6846221234",,,,[7]],[,,"684(?:2(?:5[2468]|72)|7(?:3[13]|70))\\d{4}",,,,"6847331234",,,,[7]],[,,"8(?:00|33|44|55|66|77|88)[2-9]\\d{6}",,,,"8002123456"],[,,"900[2-9]\\d{6}",,,,"9002123456"],[,,,,,,,,,[-1]],[,,"5(?:00|22|33|44|66|77|88)[2-9]\\d{6}",,,,"5002345678"],[,,,,,,,,,[-1]],"AS",1,"011","1",,,"1",,,,,,[,,,,,,,,,[-1]],,"684",[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],AT:[,[,,"[1-9]\\d{3,12}",,,,,,,[4,5,6,7,8,9,10,11,12,13],[3]],[,,"1\\d{3,12}|(?:2(?:1[467]|2[13-8]|5[2357]|6[1-46-8]|7[1-8]|8[124-7]|9[1458])|3(?:1[1-8]|3[23568]|4[5-7]|5[1378]|6[1-38]|8[3-68])|4(?:2[1-8]|35|63|7[1368]|8[2457])|5(?:12|2[1-8]|3[357]|4[147]|5[12578]|6[37])|6(?:13|2[1-47]|4[1-35-8]|5[468]|62)|7(?:2[1-8]|3[25]|4[13478]|5[68]|6[16-8]|7[1-6]|9[45]))\\d{3,10}",,,,"1234567890",,,,[3]],[,,"6(?:5[0-3579]|6[013-9]|[7-9]\\d)\\d{4,10}",,,,"664123456",,,[7,8,9,10,11,12,13]],[,,"800\\d{6,10}",,,,"800123456",,,[9,10,11,12,13]],[,,"9(?:0[01]|3[019])\\d{6,10}",,,,"900123456",,,[9,10,11,12,13]],[,,"8(?:10\\d|2(?:[01]\\d|8\\d?))\\d{5,9}",,,,"810123456",,,[8,9,10,11,12,13]],[,,,,,,,,,[-1]],[,,"780\\d{6,10}",,,,"780123456",,,[9,10,11,12,13]],"AT",43,"00","0",,,"0",,,,[[,"(116\\d{3})","$1",["116"],"$1"],[,"(1)(\\d{3,12})","$1 $2",["1"],"0$1"],[,"(5\\d)(\\d{3,5})","$1 $2",["5[079]"],"0$1"],[,"(5\\d)(\\d{3})(\\d{3,4})","$1 $2 $3",["5[079]"],"0$1"],[,"(5\\d)(\\d{4})(\\d{4,7})","$1 $2 $3",["5[079]"],"0$1"],[,"(\\d{3})(\\d{3,10})","$1 $2",["316|46|51|732|6(?:5[0-3579]|[6-9])|7(?:[28]0)|[89]"],"0$1"],[,"(\\d{4})(\\d{3,9})","$1 $2",["2|3(?:1[1-578]|[3-8])|4[2378]|5[2-6]|6(?:[12]|4[1-9]|5[468])|7(?:2[1-8]|35|4[1-8]|[5-79])"],"0$1"]],,[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,"5(?:(?:0[1-9]|17)\\d{2,10}|[79]\\d{3,11})|720\\d{6,10}",,,,"50123",,,[5,6,7,8,9,10,11,12,13]],,,[,,,,,,,,,[-1]]],AU:[,[,,"1\\d{4,9}|[2-578]\\d{8}",,,,,,,[5,6,7,8,9,10]],[,,"[237]\\d{8}|8(?:[6-8]\\d{3}|9(?:[02-9]\\d{2}|1(?:[0-57-9]\\d|6[0135-9])))\\d{4}",,,,"212345678",,,[9],[8]],[,,"14(?:5\\d|71)\\d{5}|4(?:[0-3]\\d|4[47-9]|5[0-25-9]|6[6-9]|7[02-9]|8[147-9]|9[017-9])\\d{6}",,,,"412345678",,,[9]],[,,"180(?:0\\d{3}|2)\\d{3}",,,,"1800123456",,,[7,10]],[,,"19(?:0[0126]\\d|[679])\\d{5}",,,,"1900123456",,,[8,10]],[,,"13(?:00\\d{3}|45[0-4]|\\d)\\d{3}",,,,"1300123456",,,[6,8,10]],[,,"500\\d{6}",,,,"500123456",,,[9]],[,,"550\\d{6}",,,,"550123456",,,[9]],"AU",61,"(?:14(?:1[14]|34|4[17]|[56]6|7[47]|88))?001[14-689]","0",,,"0",,"0011",,[[,"([2378])(\\d{4})(\\d{4})","$1 $2 $3",["[2378]"],"(0$1)"],[,"(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3",["[45]|14"],"0$1"],[,"(16)(\\d{3,4})","$1 $2",["16"],"0$1"],[,"(16)(\\d{3})(\\d{2,4})","$1 $2 $3",["16"],"0$1"],[,"(1[389]\\d{2})(\\d{3})(\\d{3})","$1 $2 $3",["1(?:[38]0|90)","1(?:[38]00|90)"],"$1"],[,"(180)(2\\d{3})","$1 $2",["180","1802"],"$1"],[,"(19\\d)(\\d{3})","$1 $2",["19[13]"],"$1"],[,"(19\\d{2})(\\d{4})","$1 $2",["19[679]"],"$1"],[,"(13)(\\d{2})(\\d{2})","$1 $2 $3",["13[1-9]"],"$1"]],,[,,"16\\d{3,7}",,,,"1612345",,,[5,6,7,8,9]],1,,[,,"1(?:3(?:00\\d{3}|45[0-4]|\\d)\\d{3}|80(?:0\\d{6}|2\\d{3}))",,,,"1300123456",,,[6,7,8,10]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],AW:[,[,,"[25-9]\\d{6}",,,,,,,[7]],[,,"5(?:2\\d|8[1-9])\\d{4}",,,,"5212345"],[,,"(?:5(?:6\\d|9[2-478])|6(?:[039]0|22|4[01]|6[0-2])|7[34]\\d|9(?:6[45]|9[4-8]))\\d{4}",,,,"5601234"],[,,"800\\d{4}",,,,"8001234"],[,,"900\\d{4}",,,,"9001234"],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,"28\\d{5}|501\\d{4}",,,,"5011234"],"AW",297,"00",,,,,,,,[[,"(\\d{3})(\\d{4})","$1 $2"]],,[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],AX:[,[,,"[15]\\d{6,9}|2\\d{4,9}|3\\d{5,9}|4\\d{7,10}|[67]\\d{7,9}|8\\d{7,8}",,,,,,,[5,6,7,8,9,10,11]],[,,"18[1-8]\\d{4,6}",,,,"181234567",,,[7,8,9]],[,,"4(?:[0-8]\\d{6,8}|9\\d{9})|50\\d{6,8}",,,,"412345678",,,[8,9,10,11]],[,,"800\\d{5,6}",,,,"800123456",,,[8,9]],[,,"[67]00\\d{5,6}",,,,"600123456",,,[8,9]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],"AX",358,"00|99(?:[02469]|5(?:11|33|5[59]|88|9[09]))","0",,,"0",,"00",,,,[,,,,,,,,,[-1]],,,[,,"100\\d{4,6}|20(?:0\\d{4,6}|2[023]\\d{4,5}|9[89]\\d{1,6})|300\\d{3,7}|60(?:[12]\\d{5,6}|6\\d{7})|7(?:1\\d{7}|3\\d{8}|5[03-9]\\d{5,6})",,,,"1001234",,,[5,6,7,8,9,10]],[,,"10(?:0\\d{4,6}|[1-9]\\d{5,7})|2(?:0(?:0\\d{4,6}|[13-8]\\d{5,7}|2(?:[023]\\d{4,5}|[14-9]\\d{4,6})|9(?:[0-7]\\d{4,6}|[89]\\d{1,6}))|9\\d{6,8})|3(?:0(?:0\\d{3,7}|[1-9]\\d{5,7})|93\\d{5,7})|60(?:[12]\\d{5,6}|6\\d{7})|7(?:1\\d{7}|3\\d{8}|5[03-9]\\d{5,6})",,,,"10112345",,,[5,6,7,8,9,10]],,,[,,,,,,,,,[-1]]],AZ:[,[,,"[1-9]\\d{8}",,,,,,,[9],[7]],[,,"(?:1[28]\\d{3}|2(?:02|1[24]|2[2-4]|33|[45]2|6[23])\\d{2}|365(?:[0-46-9]\\d|5[0-35-9]))\\d{4}",,,,"123123456",,,,[7]],[,,"(?:36554|(?:4[04]|5[015]|60|7[07])\\d{3})\\d{4}",,,,"401234567"],[,,"88\\d{7}",,,,"881234567"],[,,"900200\\d{3}",,,,"900200123"],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],"AZ",994,"00","0",,,"0",,,,[[,"(\\d{2})(\\d{3})(\\d{2})(\\d{2})","$1 $2 $3 $4",["(?:1[28]|2(?:[45]2|[0-36])|365)"],"(0$1)"],[,"(\\d{2})(\\d{3})(\\d{2})(\\d{2})","$1 $2 $3 $4",["[4-8]"],"0$1"],[,"(\\d{3})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",["9"],"0$1"]],,[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],BA:[,[,,"[3-9]\\d{7,8}",,,,,,,[8,9],[6]],[,,"(?:[35]\\d|49)\\d{6}",,,,"30123456",,,[8],[6]],[,,"6(?:03|44|71|[1-356])\\d{6}",,,,"61123456"],[,,"8[08]\\d{6}",,,,"80123456",,,[8]],[,,"9[0246]\\d{6}",,,,"90123456",,,[8]],[,,"8[12]\\d{6}",,,,"82123456",,,[8]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],"BA",387,"00","0",,,"0",,,,[[,"(\\d{2})(\\d{3})(\\d{3})","$1 $2-$3",["[3-5]"],"0$1"],[,"(\\d{2})(\\d{3})(\\d{3})","$1 $2 $3",["6[1-356]|[7-9]"],"0$1"],[,"(\\d{2})(\\d{2})(\\d{2})(\\d{3})","$1 $2 $3 $4",["6[047]"],"0$1"]],,[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,"70[23]\\d{5}",,,,"70223456",,,[8]],,,[,,,,,,,,,[-1]]],BB:[,[,,"[2589]\\d{9}",,,,,,,[10],[7]],[,,"246(?:2(?:2[78]|7[0-4])|4(?:1[024-6]|2\\d|3[2-9])|5(?:20|[34]\\d|54|7[1-3])|6(?:2\\d|38)|7(?:37|57)|9(?:1[89]|63))\\d{4}",,,,"2464123456",,,,[7]],[,,"246(?:2(?:[356]\\d|4[0-57-9]|8[0-79])|45\\d|8(?:[2-5]\\d|83))\\d{4}",,,,"2462501234",,,,[7]],[,,"8(?:00|33|44|55|66|77|88)[2-9]\\d{6}",,,,"8002123456"],[,,"900\\d{7}|246976\\d{4}",,,,"9002123456",,,,[7]],[,,,,,,,,,[-1]],[,,"5(?:00|22|33|44|66|77|88)[2-9]\\d{6}",,,,"5002345678"],[,,"24631\\d{5}",,,,"2463101234",,,,[7]],"BB",1,"011","1",,,"1",,,,,,[,,,,,,,,,[-1]],,"246",[,,,,,,,,,[-1]],[,,"246(?:292|367|4(?:1[7-9]|3[01]|44|67)|736)\\d{4}",,,,"2464301234",,,,[7]],,,[,,,,,,,,,[-1]]],BD:[,[,,"[2-79]\\d{5,9}|1\\d{9}|8[0-7]\\d{4,8}",,,,,,,[6,7,8,9,10]],[,,"2(?:[45]\\d{3}|7(?:1[0-267]|2[0-289]|3[0-29]|4[01]|5[1-3]|6[013]|7[0178]|91)|8(?:0[125]|[139][1-6]|2[0157-9]|41|6[1-35]|7[1-5]|8[1-8]|90)|9(?:0[0-2]|1[0-4]|2[568]|3[3-6]|5[5-7]|6[0167]|7[15]|8[0146-9]))\\d{4}|3(?:12?[5-7]\\d{2}|0(?:2(?:[025-79]\\d|[348]\\d{1,2})|3(?:[2-4]\\d|[56]\\d?))|2(?:1\\d{2}|2(?:[12]\\d|[35]\\d{1,2}|4\\d?))|3(?:1\\d{2}|2(?:[2356]\\d|4\\d{1,2}))|4(?:1\\d{2}|2(?:2\\d{1,2}|[47]|5\\d{2}))|5(?:1\\d{2}|29)|[67]1\\d{2}|8(?:1\\d{2}|2(?:2\\d{2}|3|4\\d)))\\d{3}|4(?:0(?:2(?:[09]\\d|7)|33\\d{2})|1\\d{3}|2(?:1\\d{2}|2(?:[25]\\d?|[348]\\d|[67]\\d{1,2}))|3(?:1\\d{2}(?:\\d{2})?|2(?:[045]\\d|[236-9]\\d{1,2})|32\\d{2})|4(?:[18]\\d{2}|2(?:[2-46]\\d{2}|3)|5[25]\\d{2})|5(?:1\\d{2}|2(?:3\\d|5))|6(?:[18]\\d{2}|2(?:3(?:\\d{2})?|[46]\\d{1,2}|5\\d{2}|7\\d)|5(?:3\\d?|4\\d|[57]\\d{1,2}|6\\d{2}|8))|71\\d{2}|8(?:[18]\\d{2}|23\\d{2}|54\\d{2})|9(?:[18]\\d{2}|2[2-5]\\d{2}|53\\d{1,2}))\\d{3}|5(?:02[03489]\\d{2}|1\\d{2}|2(?:1\\d{2}|2(?:2(?:\\d{2})?|[457]\\d{2}))|3(?:1\\d{2}|2(?:[37](?:\\d{2})?|[569]\\d{2}))|4(?:1\\d{2}|2[46]\\d{2})|5(?:1\\d{2}|26\\d{1,2})|6(?:[18]\\d{2}|2|53\\d{2})|7(?:1|24)\\d{2}|8(?:1|26)\\d{2}|91\\d{2})\\d{3}|6(?:0(?:1\\d{2}|2(?:3\\d{2}|4\\d{1,2}))|2(?:2[2-5]\\d{2}|5(?:[3-5]\\d{2}|7)|8\\d{2})|3(?:1|2[3478])\\d{2}|4(?:1|2[34])\\d{2}|5(?:1|2[47])\\d{2}|6(?:[18]\\d{2}|6(?:2(?:2\\d|[34]\\d{2})|5(?:[24]\\d{2}|3\\d|5\\d{1,2})))|72[2-5]\\d{2}|8(?:1\\d{2}|2[2-5]\\d{2})|9(?:1\\d{2}|2[2-6]\\d{2}))\\d{3}|7(?:(?:02|[3-589]1|6[12]|72[24])\\d{2}|21\\d{3}|32)\\d{3}|8(?:(?:4[12]|[5-7]2|1\\d?)|(?:0|3[12]|[5-7]1|217)\\d)\\d{4}|9(?:[35]1|(?:[024]2|81)\\d|(?:1|[24]1)\\d{2})\\d{3}",,,,"27111234",,,[6,7,8,9]],[,,"(?:1[13-9]\\d|(?:3[78]|44)[02-9]|6(?:44|6[02-9]))\\d{7}",,,,"1812345678",,,[10]],[,,"80[03]\\d{7}",,,,"8001234567",,,[10]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,"96(?:0[49]|1[0-4]|6[69])\\d{6}",,,,"9604123456",,,[10]],"BD",880,"00","0",,,"0",,,,[[,"(2)(\\d{7,8})","$1-$2",["2"],"0$1"],[,"(\\d{2})(\\d{4,6})","$1-$2",["[3-79]1"],"0$1"],[,"(\\d{4})(\\d{3,6})","$1-$2",["1|3(?:0|[2-58]2)|4(?:0|[25]2|3[23]|[4689][25])|5(?:[02-578]2|6[25])|6(?:[0347-9]2|[26][25])|7[02-9]2|8(?:[023][23]|[4-7]2)|9(?:[02][23]|[458]2|6[016])"],"0$1"],[,"(\\d{3})(\\d{3,7})","$1-$2",["[3-79][2-9]|8"],"0$1"]],,[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],BE:[,[,,"[1-9]\\d{7,8}",,,,,,,[8,9]],[,,"(?:1[0-69]|[23][2-8]|4[23]|5\\d|6[013-57-9]|71|8[1-79]|9[2-4])\\d{6}|80[2-8]\\d{5}",,,,"12345678",,,[8]],[,,"4(?:6[0135-8]|[79]\\d|8[3-9])\\d{6}",,,,"470123456",,,[9]],[,,"800\\d{5}",,,,"80012345",,,[8]],[,,"(?:70[2-467]|90[0-79])\\d{5}",,,,"90123456",,,[8]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],"BE",32,"00","0",,,"0",,,,[[,"(\\d{3})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",["4[6-9]"],"0$1"],[,"(\\d)(\\d{3})(\\d{2})(\\d{2})","$1 $2 $3 $4",["[23]|4[23]|9[2-4]"],"0$1"],[,"(\\d{2})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",["[156]|7[018]|8(?:0[1-9]|[1-79])"],"0$1"],[,"(\\d{3})(\\d{2})(\\d{3})","$1 $2 $3",["(?:80|9)0"],"0$1"]],,[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,"78\\d{6}",,,,"78123456",,,[8]],,,[,,,,,,,,,[-1]]],BF:[,[,,"[25-7]\\d{7}",,,,,,,[8]],[,,"2(?:0(?:49|5[23]|6[56]|9[016-9])|4(?:4[569]|5[4-6]|6[56]|7[0179])|5(?:[34]\\d|50|6[5-7]))\\d{4}",,,,"20491234"],[,,"(?:5[156]\\d|[67]\\d{2})\\d{5}",,,,"70123456"],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],"BF",226,"00",,,,,,,,[[,"(\\d{2})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4"]],,[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],BG:[,[,,"[23567]\\d{5,7}|[489]\\d{6,8}",,,,,,,[6,7,8,9],[4,5]],[,,"2\\d{5,7}|(?:[36]\\d|5[1-9]|8[1-6]|9[1-7])\\d{5,6}|(?:4(?:[124-7]\\d|3[1-6])|7(?:0[1-9]|[1-9]\\d))\\d{4,5}",,,,"2123456",,,[6,7,8],[4,5]],[,,"(?:8[7-9]\\d|9(?:8\\d|99))\\d{6}|4(?:3[0789]|8\\d)\\d{5}",,,,"48123456",,,[8,9]],[,,"800\\d{5}",,,,"80012345",,,[8]],[,,"90\\d{6}",,,,"90123456",,,[8]],[,,,,,,,,,[-1]],[,,"700\\d{5}",,,,"70012345",,,[8]],[,,,,,,,,,[-1]],"BG",359,"00","0",,,"0",,,,[[,"(2)(\\d)(\\d{2})(\\d{2})","$1 $2 $3 $4",["2"],"0$1"],[,"(2)(\\d{3})(\\d{3,4})","$1 $2 $3",["2"],"0$1"],[,"(\\d{3})(\\d{4})","$1 $2",["43[124-7]|70[1-9]"],"0$1"],[,"(\\d{3})(\\d{3})(\\d{2})","$1 $2 $3",["43[124-7]|70[1-9]"],"0$1"],[,"(\\d{3})(\\d{2})(\\d{3})","$1 $2 $3",["[78]00"],"0$1"],[,"(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3",["999"],"0$1"],[,"(\\d{2})(\\d{3})(\\d{2,3})","$1 $2 $3",["[356]|4[124-7]|7[1-9]|8[1-6]|9[1-7]"],"0$1"],[,"(\\d{2})(\\d{3})(\\d{3,4})","$1 $2 $3",["48|8[7-9]|9[08]"],"0$1"]],,[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],BH:[,[,,"[136-9]\\d{7}",,,,,,,[8]],[,,"(?:1(?:3[1356]|6[0156]|7\\d)\\d|6(?:1[16]\\d|500|6(?:0\\d|3[12]|44|7[7-9])|9[69][69])|7(?:1(?:11|78)|7\\d{2}))\\d{4}",,,,"17001234"],[,,"(?:3(?:[1-4679]\\d|5[013-69]|8[0-47-9])\\d|6(?:3(?:00|33|6[16])|6(?:[69]\\d|3[03-9]|7[0-6])))\\d{4}",,,,"36001234"],[,,"80\\d{6}",,,,"80123456"],[,,"(?:87|9[014578])\\d{6}",,,,"90123456"],[,,"84\\d{6}",,,,"84123456"],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],"BH",973,"00",,,,,,,,[[,"(\\d{4})(\\d{4})","$1 $2"]],,[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],BI:[,[,,"[267]\\d{7}",,,,,,,[8]],[,,"22\\d{6}",,,,"22201234"],[,,"(?:29|6[189]|7[124-9])\\d{6}",,,,"79561234"],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],"BI",257,"00",,,,,,,,[[,"(\\d{2})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4"]],,[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],BJ:[,[,,"[2689]\\d{7}|7\\d{3}",,,,,,,[4,8]],[,,"2(?:02|1[037]|2[45]|3[68])\\d{5}",,,,"20211234",,,[8]],[,,"(?:6[1-8]|9[03-9])\\d{6}",,,,"90011234",,,[8]],[,,"7[3-5]\\d{2}",,,,"7312",,,[4]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,"857[58]\\d{4}",,,,"85751234",,,[8]],"BJ",229,"00",,,,,,,,[[,"(\\d{2})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4"]],,[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,"81\\d{6}",,,,"81123456",,,[8]],,,[,,,,,,,,,[-1]]],BL:[,[,,"[56]\\d{8}",,,,,,,[9]],[,,"590(?:2[7-9]|5[12]|87)\\d{4}",,,,"590271234"],[,,"690(?:0[0-7]|[1-9]\\d)\\d{4}",,,,"690301234"],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],"BL",590,"00","0",,,"0",,,,,,[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],BM:[,[,,"[4589]\\d{9}",,,,,,,[10],[7]],[,,"441(?:2(?:02|23|61|[3479]\\d)|[46]\\d{2}|5(?:4\\d|60|89)|824)\\d{4}",,,,"4412345678",,,,[7]],[,,"441(?:[37]\\d|5[0-39])\\d{5}",,,,"4413701234",,,,[7]],[,,"8(?:00|33|44|55|66|77|88)[2-9]\\d{6}",,,,"8002123456"],[,,"900[2-9]\\d{6}",,,,"9002123456"],[,,,,,,,,,[-1]],[,,"5(?:00|22|33|44|66|77|88)[2-9]\\d{6}",,,,"5002345678"],[,,,,,,,,,[-1]],"BM",1,"011","1",,,"1",,,,,,[,,,,,,,,,[-1]],,"441",[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],BN:[,[,,"[2-578]\\d{6}",,,,,,,[7]],[,,"2(?:[013-9]\\d|2[0-7])\\d{4}|[3-5]\\d{6}",,,,"2345678"],[,,"22[89]\\d{4}|[78]\\d{6}",,,,"7123456"],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],"BN",673,"00",,,,,,,,[[,"([2-578]\\d{2})(\\d{4})","$1 $2"]],,[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],BO:[,[,,"[23467]\\d{7}",,,,,,,[8],[7]],[,,"(?:2(?:2\\d{2}|5(?:11|[258]\\d|9[67])|6(?:12|2\\d|9[34])|8(?:2[34]|39|62))|3(?:3\\d{2}|4(?:6\\d|8[24])|8(?:25|42|5[257]|86|9[25])|9(?:2\\d|3[234]|4[248]|5[24]|6[2-6]|7\\d))|4(?:4\\d{2}|6(?:11|[24689]\\d|72)))\\d{4}",,,,"22123456",,,,[7]],[,,"[67]\\d{7}",,,,"71234567"],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],"BO",591,"00(1\\d)?","0",,,"0(1\\d)?",,,,[[,"([234])(\\d{7})","$1 $2",["[234]"],,"0$CC $1"],[,"([67]\\d{7})","$1",["[67]"],,"0$CC $1"]],,[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],BQ:[,[,,"[347]\\d{6}",,,,,,,[7]],[,,"(?:318[023]|41(?:6[023]|70)|7(?:1[578]|50)\\d)\\d{3}",,,,"7151234"],[,,"(?:31(?:8[14-8]|9[14578])|416[145-9]|7(?:0[01]|7[07]|8\\d|9[056])\\d)\\d{3}",,,,"3181234"],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],"BQ",599,"00",,,,,,,,,,[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],BR:[,[,,"[1-46-9]\\d{7,10}|5(?:[0-4]\\d{7,9}|5(?:[2-8]\\d{7}|9\\d{7,8}))",,,,,,,[8,9,10,11]],[,,"(?:[14689][1-9]|2[12478]|3[1-578]|5[13-5]|7[13-579])[2-5]\\d{7}",,,,"1123456789",,,[10],[8]],[,,"1[1-9](?:7|9\\d)\\d{7}|(?:2[12478]|3[1-578]|[4689][1-9]|5[13-5]|7[13-579])(?:[6-8]|9\\d?)\\d{7}",,,,"11961234567",,,[10,11],[8]],[,,"800\\d{6,7}",,,,"800123456",,,[9,10]],[,,"(?:300|[59]00\\d?)\\d{6}",,,,"300123456",,,[9,10]],[,,"(?:300\\d(?:\\d{2})?|40(?:0\\d|20))\\d{4}",,,,"40041234",,,[8,10]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],"BR",55,"00(?:1[245]|2[1-35]|31|4[13]|[56]5|99)","0",,,"0(?:(1[245]|2[1-35]|31|4[13]|[56]5|99)(\\d{10,11}))?","$2",,,[[,"(\\d{4})(\\d{4})","$1-$2",["[2-9](?:[1-9]|0[1-9])"],"$1"],[,"(\\d{5})(\\d{4})","$1-$2",["9(?:[1-9]|0[1-9])"],"$1"],[,"(\\d{3,5})","$1",["1[125689]"],"$1"],[,"(\\d{2})(\\d{4})(\\d{4})","$1 $2-$3",["[1-9][1-9]"],"($1)","0 $CC ($1)"],[,"(\\d{2})(\\d{5})(\\d{4})","$1 $2-$3",["(?:[14689][1-9]|2[12478]|3[1-578]|5[1-5]|7[13-579])9"],"($1)","0 $CC ($1)"],[,"(\\d{4})(\\d{4})","$1-$2",["(?:300|40(?:0|20))"]],[,"([3589]00)(\\d{2,3})(\\d{4})","$1 $2 $3",["[3589]00"],"0$1"]],[[,"(\\d{2})(\\d{4})(\\d{4})","$1 $2-$3",["[1-9][1-9]"],"($1)","0 $CC ($1)"],[,"(\\d{2})(\\d{5})(\\d{4})","$1 $2-$3",["(?:[14689][1-9]|2[12478]|3[1-578]|5[1-5]|7[13-579])9"],"($1)","0 $CC ($1)"],[,"(\\d{4})(\\d{4})","$1-$2",["(?:300|40(?:0|20))"]],[,"([3589]00)(\\d{2,3})(\\d{4})","$1 $2 $3",["[3589]00"],"0$1"]],[,,,,,,,,,[-1]],,,[,,"(?:300\\d|40(?:0\\d|20))\\d{4}",,,,"40041234",,,[8]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],BS:[,[,,"[2589]\\d{9}",,,,,,,[10],[7]],[,,"242(?:3(?:02|[236][1-9]|4[0-24-9]|5[0-68]|7[3467]|8[0-4]|9[2-467])|461|502|6(?:0[1-3]|12|7[67]|8[78]|9[89])|7(?:02|88))\\d{4}",,,,"2423456789",,,,[7]],[,,"242(?:3(?:5[79]|[79]5)|4(?:[2-4][1-9]|5[1-8]|6[2-8]|7\\d|81)|5(?:2[45]|3[35]|44|5[1-9]|65|77)|6[34]6|7(?:27|38)|8(?:0[1-9]|1[02-9]|2\\d|99))\\d{4}",,,,"2423591234",,,,[7]],[,,"242300\\d{4}|8(?:00|33|44|55|66|77|88)[2-9]\\d{6}",,,,"8002123456",,,,[7]],[,,"900[2-9]\\d{6}",,,,"9002123456"],[,,,,,,,,,[-1]],[,,"5(?:00|22|33|44|66|77|88)[2-9]\\d{6}",,,,"5002345678"],[,,,,,,,,,[-1]],"BS",1,"011","1",,,"1",,,,,,[,,,,,,,,,[-1]],,"242",[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],BT:[,[,,"[1-8]\\d{6,7}",,,,,,,[7,8],[6]],[,,"(?:2[3-6]|[34][5-7]|5[236]|6[2-46]|7[246]|8[2-4])\\d{5}",,,,"2345678",,,[7],[6]],[,,"(?:1[67]|77)\\d{6}",,,,"17123456",,,[8]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],"BT",975,"00",,,,,,,,[[,"(\\d{2})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",["1|77"]],[,"([2-8])(\\d{3})(\\d{3})","$1 $2 $3",["[2-68]|7[246]"]]],,[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],BW:[,[,,"[2-79]\\d{6,7}",,,,,,,[7,8]],[,,"(?:2(?:4[0-48]|6[0-24]|9[0578])|3(?:1[0-35-9]|55|[69]\\d|7[01])|4(?:6[03]|7[1267]|9[0-5])|5(?:3[0389]|4[0489]|7[1-47]|88|9[0-49])|6(?:2[1-35]|5[149]|8[067]))\\d{4}",,,,"2401234",,,[7]],[,,"7(?:[1-6]\\d|7[014-8])\\d{5}",,,,"71123456",,,[8]],[,,,,,,,,,[-1]],[,,"90\\d{5}",,,,"9012345",,,[7]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,"79[12][01]\\d{4}",,,,"79101234",,,[8]],"BW",267,"00",,,,,,,,[[,"(\\d{3})(\\d{4})","$1 $2",["[2-6]"]],[,"(7\\d)(\\d{3})(\\d{3})","$1 $2 $3",["7"]],[,"(90)(\\d{5})","$1 $2",["9"]]],,[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],BY:[,[,,"[1-4]\\d{8}|800\\d{3,7}|[89]\\d{9,10}",,,,,,,[6,7,8,9,10,11],[5]],[,,"(?:1(?:5(?:1[1-5]|[24]\\d|6[2-4]|9[1-7])|6(?:[235]\\d|4[1-7])|7\\d{2})|2(?:1(?:[246]\\d|3[0-35-9]|5[1-9])|2(?:[235]\\d|4[0-8])|3(?:[26]\\d|3[02-79]|4[024-7]|5[03-7])))\\d{5}",,,,"152450911",,,[9],[5,6,7]],[,,"(?:2(?:5[5679]|9[1-9])|33\\d|44\\d)\\d{6}",,,,"294911911",,,[9]],[,,"8(?:0[13]|20\\d)\\d{7}|800\\d{3,7}",,,,"8011234567"],[,,"(?:810|902)\\d{7}",,,,"9021234567",,,[10]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,"249\\d{6}",,,,"249123456",,,[9]],"BY",375,"810","8",,,"8?0?",,"8~10",,[[,"(\\d{2})(\\d{3})(\\d{2})(\\d{2})","$1 $2-$3-$4",["17[0-3589]|2[4-9]|[34]","17(?:[02358]|1[0-2]|9[0189])|2[4-9]|[34]"],"8 0$1"],[,"(\\d{3})(\\d{2})(\\d{2})(\\d{2})","$1 $2-$3-$4",["1(?:5[24]|6[235]|7[467])|2(?:1[246]|2[25]|3[26])","1(?:5[24]|6(?:2|3[04-9]|5[0346-9])|7(?:[46]|7[37-9]))|2(?:1[246]|2[25]|3[26])"],"8 0$1"],[,"(\\d{4})(\\d{2})(\\d{3})","$1 $2-$3",["1(?:5[169]|6[3-5]|7[179])|2(?:1[35]|2[34]|3[3-5])","1(?:5[169]|6(?:3[1-3]|4|5[125])|7(?:1[3-9]|7[0-24-6]|9[2-7]))|2(?:1[35]|2[34]|3[3-5])"],"8 0$1"],[,"([89]\\d{2})(\\d{3})(\\d{4})","$1 $2 $3",["8[01]|9"],"8 $1"],[,"(82\\d)(\\d{4})(\\d{4})","$1 $2 $3",["82"],"8 $1"],[,"(800)(\\d{3})","$1 $2",["800"],"8 $1"],[,"(800)(\\d{2})(\\d{2,4})","$1 $2 $3",["800"],"8 $1"]],,[,,,,,,,,,[-1]],,,[,,"8(?:0[13]|10|20\\d)\\d{7}|800\\d{3,7}|902\\d{7}",,,,"82012345678"],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],BZ:[,[,,"[2-8]\\d{6}|0\\d{10}",,,,,,,[7,11]],[,,"(?:2(?:[02]\\d|36)|[3-58][02]\\d|7(?:[02]\\d|32))\\d{4}",,,,"2221234",,,[7]],[,,"6[0-35-7]\\d{5}",,,,"6221234",,,[7]],[,,"0800\\d{7}",,,,"08001234123",,,[11]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],"BZ",501,"00",,,,,,,,[[,"(\\d{3})(\\d{4})","$1-$2",["[2-8]"]],[,"(0)(800)(\\d{4})(\\d{3})","$1-$2-$3-$4",["0"]]],,[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],1,,[,,,,,,,,,[-1]]],CA:[,[,,"[2-9]\\d{9}|3\\d{6}",,,,,,,[7,10]],[,,"(?:2(?:04|[23]6|[48]9|50)|3(?:06|43|65)|4(?:03|1[68]|3[178]|50)|5(?:06|1[49]|48|79|8[17])|6(?:0[04]|13|22|39|47)|7(?:0[59]|78|8[02])|8(?:[06]7|19|25|73)|90[25])[2-9]\\d{6}|310\\d{4}",,,,"2042345678",,,[10],[7]],[,,"(?:2(?:04|[23]6|[48]9|50)|3(?:06|43|65)|4(?:03|1[68]|3[178]|50)|5(?:06|1[49]|48|79|8[17])|6(?:0[04]|13|22|39|47)|7(?:0[59]|78|8[02])|8(?:[06]7|19|25|73)|90[25])[2-9]\\d{6}",,,,"2042345678",,,[10],[7]],[,,"8(?:00|33|44|55|66|77|88)[2-9]\\d{6}|310\\d{4}",,,,"8002123456"],[,,"900[2-9]\\d{6}",,,,"9002123456",,,[10]],[,,,,,,,,,[-1]],[,,"5(?:00|22|33|44|66|77|88)[2-9]\\d{6}",,,,"5002345678",,,[10]],[,,,,,,,,,[-1]],"CA",1,"011","1",,,"1",,,,,,[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],CC:[,[,,"[1458]\\d{5,9}",,,,,,,[6,7,9,10],[8]],[,,"89162\\d{4}",,,,"891621234",,,[9],[8]],[,,"14(?:5\\d|71)\\d{5}|4(?:[0-2]\\d|3[0-57-9]|4[47-9]|5[0-25-9]|6[6-9]|7[02-9]|8[147-9]|9[017-9])\\d{6}",,,,"412345678",,,[9]],[,,"180(?:0\\d{3}|2)\\d{3}",,,,"1800123456",,,[7,10]],[,,"190[0126]\\d{6}",,,,"1900123456",,,[10]],[,,"13(?:00\\d{2})?\\d{4}",,,,"1300123456",,,[6,10]],[,,"500\\d{6}",,,,"500123456",,,[9]],[,,"550\\d{6}",,,,"550123456",,,[9]],"CC",61,"(?:14(?:1[14]|34|4[17]|[56]6|7[47]|88))?001[14-689]","0",,,"0",,"0011",,,,[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],CD:[,[,,"[2-6]\\d{6}|[18]\\d{6,8}|9\\d{8}",,,,,,,[7,9]],[,,"1(?:2\\d{7}|\\d{6})|[2-6]\\d{6}",,,,"1234567"],[,,"8(?:[0-2459]\\d{2}|8)\\d{5}|9[017-9]\\d{7}",,,,"991234567"],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],"CD",243,"00","0",,,"0",,,,[[,"(\\d{2})(\\d{3})(\\d{4})","$1 $2 $3",["12"],"0$1"],[,"([89]\\d{2})(\\d{3})(\\d{3})","$1 $2 $3",["8[0-2459]|9"],"0$1"],[,"(\\d{2})(\\d{2})(\\d{3})","$1 $2 $3",["88"],"0$1"],[,"(\\d{2})(\\d{5})","$1 $2",["[1-6]"],"0$1"]],,[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],CF:[,[,,"[278]\\d{7}",,,,,,,[8]],[,,"2[12]\\d{6}",,,,"21612345"],[,,"7[0257]\\d{6}",,,,"70012345"],[,,,,,,,,,[-1]],[,,"8776\\d{4}",,,,"87761234"],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],"CF",236,"00",,,,,,,,[[,"(\\d{2})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4"]],,[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],CG:[,[,,"[028]\\d{8}",,,,,,,[9]],[,,"222[1-589]\\d{5}",,,,"222123456"],[,,"0[14-6]\\d{7}",,,,"061234567"],[,,,,,,,,,[-1]],[,,"80(?:0\\d{2}|11[01])\\d{4}",,,,"800123456"],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],"CG",242,"00",,,,,,,,[[,"(\\d{3})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",["801"]],[,"(\\d{2})(\\d{3})(\\d{4})","$1 $2 $3",["[02]"]],[,"(\\d)(\\d{4})(\\d{4})","$1 $2 $3",["800"]]],,[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],1,,[,,,,,,,,,[-1]]],CH:[,[,,"[2-9]\\d{8}|860\\d{9}",,,,,,,[9,12]],[,,"(?:2[12467]|3[1-4]|4[134]|5[256]|6[12]|[7-9]1)\\d{7}",,,,"212345678",,,[9]],[,,"7[5-9]\\d{7}",,,,"781234567",,,[9]],[,,"800\\d{6}",,,,"800123456",,,[9]],[,,"90[016]\\d{6}",,,,"900123456",,,[9]],[,,"84[0248]\\d{6}",,,,"840123456",,,[9]],[,,"878\\d{6}",,,,"878123456",,,[9]],[,,,,,,,,,[-1]],"CH",41,"00","0",,,"0",,,,[[,"([2-9]\\d)(\\d{3})(\\d{2})(\\d{2})","$1 $2 $3 $4",["[2-7]|[89]1"],"0$1"],[,"([89]\\d{2})(\\d{3})(\\d{3})","$1 $2 $3",["8[047]|90"],"0$1"],[,"(\\d{3})(\\d{2})(\\d{3})(\\d{2})(\\d{2})","$1 $2 $3 $4 $5",["860"],"0$1"]],,[,,"74[0248]\\d{6}",,,,"740123456",,,[9]],,,[,,,,,,,,,[-1]],[,,"5[18]\\d{7}",,,,"581234567",,,[9]],,,[,,"860\\d{9}",,,,"860123456789",,,[12]]],CI:[,[,,"[02-8]\\d{7}",,,,,,,[8]],[,,"(?:2(?:0[023]|1[02357]|[23][045]|4[03-5])|3(?:0[06]|1[069]|[2-4][07]|5[09]|6[08]))\\d{5}",,,,"21234567"],[,,"(?:0[1-9]|4\\d|5[14-9]|6[015-79]|[78][4-9])\\d{6}",,,,"01234567"],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],"CI",225,"00",,,,,,,,[[,"(\\d{2})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4"]],,[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],1,,[,,,,,,,,,[-1]]],CK:[,[,,"[2-8]\\d{4}",,,,,,,[5]],[,,"(?:2\\d|3[13-7]|4[1-5])\\d{3}",,,,"21234"],[,,"[5-8]\\d{4}",,,,"71234"],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],"CK",682,"00",,,,,,,,[[,"(\\d{2})(\\d{3})","$1 $2"]],,[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],CL:[,[,,"(?:[2-9]|600|123)\\d{7,8}",,,,,,,[9,10,11],[7,8]],[,,"2(?:1962\\d{4}|2\\d{7}|32[0-2467]\\d{5})|(?:3[2-5]|[47][1-35]|5[1-3578]|6[13-57]|9[3-9])\\d{7}",,,,"221234567",,,[9],[7,8]],[,,"2(?:1962\\d{4}|2\\d{7}|32[0-2467]\\d{5})|(?:3[2-5]|[47][1-35]|5[1-3578]|6[13-57]|9[3-9])\\d{7}",,,,"961234567",,,[9],[8]],[,,"800\\d{6}|1230\\d{7}",,,,"800123456",,,[9,11]],[,,,,,,,,,[-1]],[,,"600\\d{7,8}",,,,"6001234567",,,[10,11]],[,,,,,,,,,[-1]],[,,"44\\d{7}",,,,"441234567",,,[9]],"CL",56,"(?:0|1(?:1[0-69]|2[0-57]|5[13-58]|69|7[0167]|8[018]))0","0",,,"0|(1(?:1[0-69]|2[0-57]|5[13-58]|69|7[0167]|8[018]))",,,1,[[,"(\\d)(\\d{4})(\\d{4})","$1 $2 $3",["2[23]"],"($1)","$CC ($1)"],[,"(\\d{2})(\\d{3})(\\d{4})","$1 $2 $3",["[357]|4[1-35]|6[13-57]"],"($1)","$CC ($1)"],[,"(9)(\\d{4})(\\d{4})","$1 $2 $3",["9"],"0$1"],[,"(44)(\\d{3})(\\d{4})","$1 $2 $3",["44"],"0$1"],[,"([68]00)(\\d{3})(\\d{3,4})","$1 $2 $3",["60|8"],"$1"],[,"(600)(\\d{3})(\\d{2})(\\d{3})","$1 $2 $3 $4",["60"],"$1"],[,"(1230)(\\d{3})(\\d{4})","$1 $2 $3",["1"],"$1"],[,"(\\d{5})(\\d{4})","$1 $2",["219"],"($1)","$CC ($1)"],[,"(\\d{4,5})","$1",["[1-9]"],"$1"]],[[,"(\\d)(\\d{4})(\\d{4})","$1 $2 $3",["2[23]"],"($1)","$CC ($1)"],[,"(\\d{2})(\\d{3})(\\d{4})","$1 $2 $3",["[357]|4[1-35]|6[13-57]"],"($1)","$CC ($1)"],[,"(9)(\\d{4})(\\d{4})","$1 $2 $3",["9"],"0$1"],[,"(44)(\\d{3})(\\d{4})","$1 $2 $3",["44"],"0$1"],[,"([68]00)(\\d{3})(\\d{3,4})","$1 $2 $3",["60|8"],"$1"],[,"(600)(\\d{3})(\\d{2})(\\d{3})","$1 $2 $3 $4",["60"],"$1"],[,"(1230)(\\d{3})(\\d{4})","$1 $2 $3",["1"],"$1"],[,"(\\d{5})(\\d{4})","$1 $2",["219"],"($1)","$CC ($1)"]],[,,,,,,,,,[-1]],,,[,,"600\\d{7,8}",,,,"6001234567",,,[10,11]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],CM:[,[,,"[2368]\\d{7,8}",,,,,,,[8,9]],[,,"2(?:22|33|4[23])\\d{6}",,,,"222123456",,,[9]],[,,"6[5-9]\\d{7}",,,,"671234567",,,[9]],[,,"800\\d{5}",,,,"80012345",,,[8]],[,,"88\\d{6}",,,,"88012345",,,[8]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],"CM",237,"00",,,,,,,,[[,"([26])(\\d{2})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4 $5",["[26]"]],[,"(\\d{2})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",["[23]|88"]],[,"(800)(\\d{2})(\\d{3})","$1 $2 $3",["80"]]],,[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],CN:[,[,,"[1-7]\\d{6,11}|8[0-357-9]\\d{6,9}|9\\d{7,10}",,,,,,,[7,8,9,10,11,12],[5,6]],[,,"21(?:100\\d{2}|95\\d{3,4}|\\d{8,10})|(?:10|2[02-57-9]|3(?:11|7[179])|4(?:[15]1|3[1-35])|5(?:1\\d|2[37]|3[12]|51|7[13-79]|9[15])|7(?:31|5[457]|6[09]|91)|8(?:[57]1|98))(?:100\\d{2}|95\\d{3,4}|\\d{8})|(?:3(?:1[02-9]|35|49|5\\d|7[02-68]|9[1-68])|4(?:1[02-9]|2[179]|3[3-9]|5[2-9]|6[4789]|7\\d|8[23])|5(?:3[03-9]|4[36]|5[02-9]|6[1-46]|7[028]|80|9[2-46-9])|6(?:3[1-5]|6[0238]|9[12])|7(?:01|[17]\\d|2[248]|3[04-9]|4[3-6]|5[0-4689]|6[2368]|9[02-9])|8(?:078|1[236-8]|2[5-7]|3\\d|5[1-9]|7[02-9]|8[3678]|9[1-7])|9(?:0[1-3689]|1[1-79]|[379]\\d|4[13]|5[1-5]))(?:100\\d{2}|95\\d{3,4}|\\d{7})|80(?:29|6[03578]|7[018]|81)\\d{4}",,,,"1012345678",,,,[5,6]],[,,"1(?:[38]\\d|4[57]|5[0-35-9]|7[0-35-8])\\d{8}",,,,"13123456789",,,[11]],[,,"(?:10)?800\\d{7}",,,,"8001234567",,,[10,12]],[,,"16[08]\\d{5}",,,,"16812345",,,[8]],[,,"400\\d{7}|950\\d{7,8}|(?:10|2[0-57-9]|3(?:[157]\\d|35|49|9[1-68])|4(?:[17]\\d|2[179]|[35][1-9]|6[4789]|8[23])|5(?:[1357]\\d|2[37]|4[36]|6[1-46]|80|9[1-9])|6(?:3[1-5]|6[0238]|9[12])|7(?:01|[1579]\\d|2[248]|3[014-9]|4[3-6]|6[023689])|8(?:1[236-8]|2[5-7]|[37]\\d|5[14-9]|8[3678]|9[1-8])|9(?:0[1-3689]|1[1-79]|[379]\\d|4[13]|5[1-5]))96\\d{3,4}",,,,"4001234567",,,[7,8,9,10,11],[5,6]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],"CN",86,"(1(?:[129]\\d{3}|79\\d{2}))?00","0",,,"(1(?:[129]\\d{3}|79\\d{2}))|0",,"00",,[[,"(80\\d{2})(\\d{4})","$1 $2",["80[2678]"],"0$1","$CC $1",1],[,"([48]00)(\\d{3})(\\d{4})","$1 $2 $3",["[48]00"]],[,"(\\d{5,6})","$1",["100|95"]],[,"(\\d{2})(\\d{5,6})","$1 $2",["(?:10|2\\d)[19]","(?:10|2\\d)(?:10|9[56])","(?:10|2\\d)(?:100|9[56])"],"0$1","$CC $1"],[,"(\\d{3})(\\d{5,6})","$1 $2",["[3-9]","[3-9]\\d{2}[19]","[3-9]\\d{2}(?:10|9[56])"],"0$1","$CC $1"],[,"(\\d{3,4})(\\d{4})","$1 $2",["[2-9]"]],[,"(21)(\\d{4})(\\d{4,6})","$1 $2 $3",["21"],"0$1","$CC $1",1],[,"([12]\\d)(\\d{4})(\\d{4})","$1 $2 $3",["10[1-9]|2[02-9]","10[1-9]|2[02-9]","10(?:[1-79]|8(?:[1-9]|0[1-9]))|2[02-9]"],"0$1","$CC $1",1],[,"(\\d{3})(\\d{3})(\\d{4})","$1 $2 $3",["3(?:1[02-9]|35|49|5|7[02-68]|9[1-68])|4(?:1[02-9]|2[179]|[35][2-9]|6[4789]|7\\d|8[23])|5(?:3[03-9]|4[36]|5[02-9]|6[1-46]|7[028]|80|9[2-46-9])|6(?:3[1-5]|6[0238]|9[12])|7(?:01|[1579]|2[248]|3[04-9]|4[3-6]|6[2368])|8(?:1[236-8]|2[5-7]|3|5[1-9]|7[02-9]|8[3678]|9[1-7])|9(?:0[1-3689]|1[1-79]|[379]|4[13]|5[1-5])"],"0$1","$CC $1",1],[,"(\\d{3})(\\d{4})(\\d{4})","$1 $2 $3",["3(?:11|7[179])|4(?:[15]1|3[1-35])|5(?:1|2[37]|3[12]|51|7[13-79]|9[15])|7(?:31|5[457]|6[09]|91)|8(?:[57]1|98)"],"0$1","$CC $1",1],[,"(\\d{4})(\\d{3})(\\d{4})","$1 $2 $3",["807","8078"],"0$1","$CC $1",1],[,"(\\d{3})(\\d{4})(\\d{4})","$1 $2 $3",["1[3-578]"],,"$CC $1"],[,"(10800)(\\d{3})(\\d{4})","$1 $2 $3",["108","1080","10800"]],[,"(\\d{3})(\\d{7,8})","$1 $2",["950"]]],[[,"(80\\d{2})(\\d{4})","$1 $2",["80[2678]"],"0$1","$CC $1",1],[,"([48]00)(\\d{3})(\\d{4})","$1 $2 $3",["[48]00"]],[,"(\\d{2})(\\d{5,6})","$1 $2",["(?:10|2\\d)[19]","(?:10|2\\d)(?:10|9[56])","(?:10|2\\d)(?:100|9[56])"],"0$1","$CC $1"],[,"(\\d{3})(\\d{5,6})","$1 $2",["[3-9]","[3-9]\\d{2}[19]","[3-9]\\d{2}(?:10|9[56])"],"0$1","$CC $1"],[,"(21)(\\d{4})(\\d{4,6})","$1 $2 $3",["21"],"0$1","$CC $1",1],[,"([12]\\d)(\\d{4})(\\d{4})","$1 $2 $3",["10[1-9]|2[02-9]","10[1-9]|2[02-9]","10(?:[1-79]|8(?:[1-9]|0[1-9]))|2[02-9]"],"0$1","$CC $1",1],[,"(\\d{3})(\\d{3})(\\d{4})","$1 $2 $3",["3(?:1[02-9]|35|49|5|7[02-68]|9[1-68])|4(?:1[02-9]|2[179]|[35][2-9]|6[4789]|7\\d|8[23])|5(?:3[03-9]|4[36]|5[02-9]|6[1-46]|7[028]|80|9[2-46-9])|6(?:3[1-5]|6[0238]|9[12])|7(?:01|[1579]|2[248]|3[04-9]|4[3-6]|6[2368])|8(?:1[236-8]|2[5-7]|3|5[1-9]|7[02-9]|8[3678]|9[1-7])|9(?:0[1-3689]|1[1-79]|[379]|4[13]|5[1-5])"],"0$1","$CC $1",1],[,"(\\d{3})(\\d{4})(\\d{4})","$1 $2 $3",["3(?:11|7[179])|4(?:[15]1|3[1-35])|5(?:1|2[37]|3[12]|51|7[13-79]|9[15])|7(?:31|5[457]|6[09]|91)|8(?:[57]1|98)"],"0$1","$CC $1",1],[,"(\\d{4})(\\d{3})(\\d{4})","$1 $2 $3",["807","8078"],"0$1","$CC $1",1],[,"(\\d{3})(\\d{4})(\\d{4})","$1 $2 $3",["1[3-578]"],,"$CC $1"],[,"(10800)(\\d{3})(\\d{4})","$1 $2 $3",["108","1080","10800"]],[,"(\\d{3})(\\d{7,8})","$1 $2",["950"]]],[,,,,,,,,,[-1]],,,[,,"(?:4|(?:10)?8)00\\d{7}|950\\d{7,8}",,,,"4001234567",,,[10,11,12]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],CO:[,[,,"(?:[13]\\d{0,3}|[24-8])\\d{7}",,,,,,,[8,10,11],[7]],[,,"[124-8][2-9]\\d{6}",,,,"12345678",,,[8],[7]],[,,"3(?:0[0-5]|1\\d|2[0-3]|5[01])\\d{7}",,,,"3211234567",,,[10]],[,,"1800\\d{7}",,,,"18001234567",,,[11]],[,,"19(?:0[01]|4[78])\\d{7}",,,,"19001234567",,,[11]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],"CO",57,"00(?:4(?:[14]4|56)|[579])","0",,,"0([3579]|4(?:44|56))?",,,,[[,"(\\d)(\\d{7})","$1 $2",["1(?:8[2-9]|9[0-3]|[2-7])|[24-8]","1(?:8[2-9]|9(?:09|[1-3])|[2-7])|[24-8]"],"($1)","0$CC $1"],[,"(\\d{3})(\\d{7})","$1 $2",["3"],,"0$CC $1"],[,"(1)(\\d{3})(\\d{7})","$1-$2-$3",["1(?:80|9[04])","1(?:800|9(?:0[01]|4[78]))"],"0$1"]],[[,"(\\d)(\\d{7})","$1 $2",["1(?:8[2-9]|9[0-3]|[2-7])|[24-8]","1(?:8[2-9]|9(?:09|[1-3])|[2-7])|[24-8]"],"($1)","0$CC $1"],[,"(\\d{3})(\\d{7})","$1 $2",["3"],,"0$CC $1"],[,"(1)(\\d{3})(\\d{7})","$1 $2 $3",["1(?:80|9[04])","1(?:800|9(?:0[01]|4[78]))"]]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],CR:[,[,,"[24-9]\\d{7,9}",,,,,,,[8,10]],[,,"2[0-24-7]\\d{6}",,,,"22123456",,,[8]],[,,"5(?:0[01]|7[0-3])\\d{5}|6(?:[0-4]\\d{3}|500[01])\\d{3}|(?:7[0-3]|8[3-9])\\d{6}",,,,"83123456",,,[8]],[,,"800\\d{7}",,,,"8001234567",,,[10]],[,,"90[059]\\d{7}",,,,"9001234567",,,[10]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,"210[0-6]\\d{4}|4\\d{7}|5100\\d{4}",,,,"40001234",,,[8]],"CR",506,"00",,,,"(19(?:0[012468]|1[09]|20|66|77|99))",,,,[[,"(\\d{4})(\\d{4})","$1 $2",["[24-7]|8[3-9]"],,"$CC $1"],[,"(\\d{3})(\\d{3})(\\d{4})","$1-$2-$3",["[89]0"],,"$CC $1"]],,[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],CU:[,[,,"[2-57]\\d{5,7}",,,,,,,[6,7,8],[4,5]],[,,"2[1-4]\\d{5,6}|3(?:1\\d{6}|[23]\\d{4,6})|4(?:[125]\\d{5,6}|[36]\\d{6}|[78]\\d{4,6})|7\\d{6,7}",,,,"71234567",,,,[4,5]],[,,"5\\d{7}",,,,"51234567",,,[8]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],"CU",53,"119","0",,,"0",,,,[[,"(\\d)(\\d{6,7})","$1 $2",["7"],"(0$1)"],[,"(\\d{2})(\\d{4,6})","$1 $2",["[2-4]"],"(0$1)"],[,"(\\d)(\\d{7})","$1 $2",["5"],"0$1"]],,[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],CV:[,[,,"[259]\\d{6}",,,,,,,[7]],[,,"2(?:2[1-7]|3[0-8]|4[12]|5[1256]|6\\d|7[1-3]|8[1-5])\\d{4}",,,,"2211234"],[,,"(?:9\\d|59)\\d{5}",,,,"9911234"],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],"CV",238,"0",,,,,,,,[[,"(\\d{3})(\\d{2})(\\d{2})","$1 $2 $3"]],,[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],CW:[,[,,"[169]\\d{6,7}",,,,,,,[7,8]],[,,"9(?:[48]\\d{2}|50\\d|7(?:2[0-24]|[34]\\d|6[35-7]|77|8[7-9]))\\d{4}",,,,"94151234",,,[8]],[,,"9(?:5(?:[12467]\\d|3[01])|6(?:[15-9]\\d|3[01]))\\d{4}",,,,"95181234",,,[8]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,"60[0-2]\\d{4}",,,,"6001234",,,[7]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],"CW",599,"00",,,,,,,,[[,"(\\d{3})(\\d{4})","$1 $2",["[13-7]"]],[,"(9)(\\d{3})(\\d{4})","$1 $2 $3",["9"]]],,[,,"955\\d{5}",,,,"95581234",,,[8]],1,,[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],CX:[,[,,"[1458]\\d{5,9}",,,,,,,[6,7,8,9,10]],[,,"89164\\d{4}",,,,"891641234",,,[9],[8]],[,,"14(?:5\\d|71)\\d{5}|4(?:[0-2]\\d|3[0-57-9]|4[47-9]|5[0-25-9]|6[6-9]|7[02-9]|8[147-9]|9[017-9])\\d{6}",,,,"412345678",,,[9]],[,,"180(?:0\\d{3}|2)\\d{3}",,,,"1800123456",,,[7,10]],[,,"190[0126]\\d{6}",,,,"1900123456",,,[10]],[,,"13(?:00\\d{2})?\\d{4}",,,,"1300123456",,,[6,8,10]],[,,"500\\d{6}",,,,"500123456",,,[9]],[,,"550\\d{6}",,,,"550123456",,,[9]],"CX",61,"(?:14(?:1[14]|34|4[17]|[56]6|7[47]|88))?001[14-689]","0",,,"0",,"0011",,,,[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],CY:[,[,,"[257-9]\\d{7}",,,,,,,[8]],[,,"2[2-6]\\d{6}",,,,"22345678"],[,,"9[4-79]\\d{6}",,,,"96123456"],[,,"800\\d{5}",,,,"80001234"],[,,"90[09]\\d{5}",,,,"90012345"],[,,"80[1-9]\\d{5}",,,,"80112345"],[,,"700\\d{5}",,,,"70012345"],[,,,,,,,,,[-1]],"CY",357,"00",,,,,,,,[[,"(\\d{2})(\\d{6})","$1 $2"]],,[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,"(?:50|77)\\d{6}",,,,"77123456"],,,[,,,,,,,,,[-1]]],CZ:[,[,,"[2-8]\\d{8}|9\\d{8,11}",,,,,,,[9,10,11,12]],[,,"2\\d{8}|(?:3[1257-9]|4[16-9]|5[13-9])\\d{7}",,,,"212345678",,,[9]],[,,"(?:60[1-8]|7(?:0[2-5]|[2379]\\d))\\d{6}",,,,"601123456",,,[9]],[,,"800\\d{6}",,,,"800123456",,,[9]],[,,"9(?:0[05689]|76)\\d{6}",,,,"900123456",,,[9]],[,,"8[134]\\d{7}",,,,"811234567",,,[9]],[,,"70[01]\\d{6}",,,,"700123456",,,[9]],[,,"9[17]0\\d{6}",,,,"910123456",,,[9]],"CZ",420,"00",,,,,,,,[[,"([2-9]\\d{2})(\\d{3})(\\d{3})","$1 $2 $3",["[2-8]|9[015-7]"]],[,"(96\\d)(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3 $4",["96"]],[,"(9\\d)(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3 $4",["9[36]"]]],,[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,"9(?:5\\d|7[234])\\d{6}",,,,"972123456",,,[9]],,,[,,"9(?:3\\d{9}|6\\d{7,10})",,,,"93123456789"]],DE:[,[,,"[1-35-9]\\d{3,14}|4(?:[0-8]\\d{3,12}|9(?:[0-37]\\d|4(?:[1-35-8]|4\\d?)|5\\d{1,2}|6[1-8]\\d?)\\d{2,8})",,,,,,,[4,5,6,7,8,9,10,11,12,13,14,15],[3]],[,,"2\\d{5,13}|3(?:0\\d{3,13}|2\\d{9}|[3-9]\\d{4,13})|4(?:0\\d{3,12}|\\d{5,13})|5(?:0[2-8]|[1256]\\d|[38][0-8]|4\\d{0,2}|[79][0-7])\\d{3,11}|6(?:\\d{5,13}|9\\d{3,12})|7(?:0[2-8]|[1-9]\\d)\\d{3,10}|8(?:0[2-9]|[1-8]\\d|9\\d?)\\d{3,10}|9(?:0[6-9]\\d{3,10}|1\\d{4,12}|[2-9]\\d{4,11})",,,,"30123456",,,[5,6,7,8,9,10,11,12,13,14,15],[3,4]],[,,"1(?:5[0-25-9]\\d{8}|6[023]\\d{7,8}|7\\d{8,9})",,,,"15123456789",,,[10,11]],[,,"800\\d{7,12}",,,,"8001234567890",,,[10,11,12,13,14,15]],[,,"137[7-9]\\d{6}|900(?:[135]\\d{6}|9\\d{7})",,,,"9001234567",,,[10,11]],[,,"1(?:3(?:7[1-6]\\d{6}|8\\d{4})|80\\d{5,11})",,,,"18012345",,,[7,8,9,10,11,12,13,14]],[,,"700\\d{8}",,,,"70012345678",,,[11]],[,,,,,,,,,[-1]],"DE",49,"00","0",,,"0",,,,[[,"(1\\d{2})(\\d{7,8})","$1 $2",["1[67]"],"0$1"],[,"(15\\d{3})(\\d{6})","$1 $2",["15[0568]"],"0$1"],[,"(1\\d{3})(\\d{7})","$1 $2",["15"],"0$1"],[,"(\\d{2})(\\d{3,11})","$1 $2",["3[02]|40|[68]9"],"0$1"],[,"(\\d{3})(\\d{3,11})","$1 $2",["2(?:\\d1|0[2389]|1[24]|28|34)|3(?:[3-9][15]|40)|[4-8][1-9]1|9(?:06|[1-9]1)"],"0$1"],[,"(\\d{4})(\\d{2,11})","$1 $2",["[24-6]|[7-9](?:\\d[1-9]|[1-9]\\d)|3(?:[3569][02-46-9]|4[2-4679]|7[2-467]|8[2-46-8])","[24-6]|[7-9](?:\\d[1-9]|[1-9]\\d)|3(?:3(?:0[1-467]|2[127-9]|3[124578]|[46][1246]|7[1257-9]|8[1256]|9[145])|4(?:2[135]|3[1357]|4[13578]|6[1246]|7[1356]|9[1346])|5(?:0[14]|2[1-3589]|3[1357]|4[1246]|6[1-4]|7[1346]|8[13568]|9[1246])|6(?:0[356]|2[1-489]|3[124-6]|4[1347]|6[13]|7[12579]|8[1-356]|9[135])|7(?:2[1-7]|3[1357]|4[145]|6[1-5]|7[1-4])|8(?:21|3[1468]|4[1347]|6[0135-9]|7[1467]|8[136])|9(?:0[12479]|2[1358]|3[1357]|4[134679]|6[1-9]|7[136]|8[147]|9[1468]))"],"0$1"],[,"(3\\d{4})(\\d{1,10})","$1 $2",["3"],"0$1"],[,"(800)(\\d{7,12})","$1 $2",["800"],"0$1"],[,"(\\d{3})(\\d)(\\d{4,10})","$1 $2 $3",["(?:18|90)0|137","1(?:37|80)|900[1359]"],"0$1"],[,"(1\\d{2})(\\d{5,11})","$1 $2",["181"],"0$1"],[,"(18\\d{3})(\\d{6})","$1 $2",["185","1850","18500"],"0$1"],[,"(18\\d{2})(\\d{7})","$1 $2",["18[68]"],"0$1"],[,"(18\\d)(\\d{8})","$1 $2",["18[2-579]"],"0$1"],[,"(700)(\\d{4})(\\d{4})","$1 $2 $3",["700"],"0$1"],[,"(138)(\\d{4})","$1 $2",["138"],"0$1"],[,"(15[013-68])(\\d{2})(\\d{8})","$1 $2 $3",["15[013-68]"],"0$1"],[,"(15[279]\\d)(\\d{2})(\\d{7})","$1 $2 $3",["15[279]"],"0$1"],[,"(1[67]\\d)(\\d{2})(\\d{7,8})","$1 $2 $3",["1(?:6[023]|7)"],"0$1"]],,[,,"16(?:4\\d{1,10}|[89]\\d{1,11})",,,,"16412345",,,[4,5,6,7,8,9,10,11,12,13,14]],,,[,,,,,,,,,[-1]],[,,"18(?:1\\d{5,11}|[2-9]\\d{8})",,,,"18500123456",,,[8,9,10,11,12,13,14]],,,[,,"1(?:5(?:(?:2\\d55|7\\d99|9\\d33)\\d{7}|(?:[034568]00|113)\\d{8})|6(?:013|255|399)\\d{7,8}|7(?:[015]13|[234]55|[69]33|[78]99)\\d{7,8})",,,,"177991234567",,,[12,13]]],DJ:[,[,,"[27]\\d{7}",,,,,,,[8]],[,,"2(?:1[2-5]|7[45])\\d{5}",,,,"21360003"],[,,"77\\d{6}",,,,"77831001"],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],"DJ",253,"00",,,,,,,,[[,"(\\d{2})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4"]],,[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],DK:[,[,,"[2-9]\\d{7}",,,,,,,[8]],[,,"(?:[2-7]\\d|8[126-9]|9[1-36-9])\\d{6}",,,,"32123456"],[,,"(?:[2-7]\\d|8[126-9]|9[1-36-9])\\d{6}",,,,"20123456"],[,,"80\\d{6}",,,,"80123456"],[,,"90\\d{6}",,,,"90123456"],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],"DK",45,"00",,,,,,,1,[[,"(\\d{2})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4"]],,[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],DM:[,[,,"[57-9]\\d{9}",,,,,,,[10],[7]],[,,"767(?:2(?:55|66)|4(?:2[01]|4[0-25-9])|50[0-4]|70[1-3])\\d{4}",,,,"7674201234",,,,[7]],[,,"767(?:2(?:[234689]5|7[5-7])|31[5-7]|61[2-7])\\d{4}",,,,"7672251234",,,,[7]],[,,"8(?:00|33|44|55|66|77|88)[2-9]\\d{6}",,,,"8002123456"],[,,"900[2-9]\\d{6}",,,,"9002123456"],[,,,,,,,,,[-1]],[,,"5(?:00|22|33|44|66|77|88)[2-9]\\d{6}",,,,"5002345678"],[,,,,,,,,,[-1]],"DM",1,"011","1",,,"1",,,,,,[,,,,,,,,,[-1]],,"767",[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],DO:[,[,,"[589]\\d{9}",,,,,,,[10],[7]],[,,"8(?:[04]9[2-9]\\d{6}|29(?:2(?:[0-59]\\d|6[04-9]|7[0-27]|8[0237-9])|3(?:[0-35-9]\\d|4[7-9])|[45]\\d{2}|6(?:[0-27-9]\\d|[3-5][1-9]|6[0135-8])|7(?:0[013-9]|[1-37]\\d|4[1-35689]|5[1-4689]|6[1-57-9]|8[1-79]|9[1-8])|8(?:0[146-9]|1[0-48]|[248]\\d|3[1-79]|5[01589]|6[013-68]|7[124-8]|9[0-8])|9(?:[0-24]\\d|3[02-46-9]|5[0-79]|60|7[0169]|8[57-9]|9[02-9]))\\d{4})",,,,"8092345678",,,,[7]],[,,"8[024]9[2-9]\\d{6}",,,,"8092345678",,,,[7]],[,,"8(?:00|33|44|55|66|77|88)[2-9]\\d{6}",,,,"8002123456"],[,,"900[2-9]\\d{6}",,,,"9002123456"],[,,,,,,,,,[-1]],[,,"5(?:00|22|33|44|66|77|88)[2-9]\\d{6}",,,,"5002345678"],[,,,,,,,,,[-1]],"DO",1,"011","1",,,"1",,,,,,[,,,,,,,,,[-1]],,"8[024]9",[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],DZ:[,[,,"(?:[1-4]|[5-9]\\d)\\d{7}",,,,,,,[8,9]],[,,"(?:1\\d|2[013-79]|3[0-8]|4[0135689])\\d{6}|9619\\d{5}",,,,"12345678"],[,,"(?:5[4-6]|7[7-9])\\d{7}|6(?:[569]\\d|7[0-6])\\d{6}",,,,"551234567",,,[9]],[,,"800\\d{6}",,,,"800123456",,,[9]],[,,"80[3-689]1\\d{5}",,,,"808123456",,,[9]],[,,"80[12]1\\d{5}",,,,"801123456",,,[9]],[,,,,,,,,,[-1]],[,,"98[23]\\d{6}",,,,"983123456",,,[9]],"DZ",213,"00","0",,,"0",,,,[[,"([1-4]\\d)(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",["[1-4]"],"0$1"],[,"([5-8]\\d{2})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",["[5-8]"],"0$1"],[,"(9\\d)(\\d{3})(\\d{2})(\\d{2})","$1 $2 $3 $4",["9"],"0$1"]],,[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],EC:[,[,,"1\\d{9,10}|[2-8]\\d{7}|9\\d{8}",,,,,,,[8,9,10,11],[7]],[,,"[2-7][2-7]\\d{6}",,,,"22123456",,,[8],[7]],[,,"9(?:(?:39|[45][89]|7[7-9]|[89]\\d)\\d|6(?:[017-9]\\d|2[0-4]))\\d{5}",,,,"991234567",,,[9]],[,,"1800\\d{6,7}",,,,"18001234567",,,[10,11]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,"[2-7]890\\d{4}",,,,"28901234",,,[8]],"EC",593,"00","0",,,"0",,,,[[,"(\\d)(\\d{3})(\\d{4})","$1 $2-$3",["[247]|[356][2-8]"],"(0$1)"],[,"(\\d{2})(\\d{3})(\\d{4})","$1 $2 $3",["9"],"0$1"],[,"(1800)(\\d{3})(\\d{3,4})","$1 $2 $3",["1"],"$1"]],[[,"(\\d)(\\d{3})(\\d{4})","$1-$2-$3",["[247]|[356][2-8]"]],[,"(\\d{2})(\\d{3})(\\d{4})","$1 $2 $3",["9"],"0$1"],[,"(1800)(\\d{3})(\\d{3,4})","$1 $2 $3",["1"],"$1"]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],EE:[,[,,"1\\d{3,4}|[3-9]\\d{6,7}|800\\d{6,7}",,,,,,,[4,5,7,8,10]],[,,"(?:3[23589]|4[3-8]|6\\d|7[1-9]|88)\\d{5}",,,,"3212345",,,[7]],[,,"(?:5\\d|8[1-5])\\d{6}|5(?:[02]\\d{2}|1(?:[0-8]\\d|95)|5[0-478]\\d|64[0-4]|65[1-589])\\d{3}",,,,"51234567",,,[7,8]],[,,"800(?:0\\d{3}|1\\d|[2-9])\\d{3}",,,,"80012345",,,[7,8,10]],[,,"(?:40\\d{2}|900)\\d{4}",,,,"9001234",,,[7,8]],[,,,,,,,,,[-1]],[,,"70[0-2]\\d{5}",,,,"70012345",,,[8]],[,,,,,,,,,[-1]],"EE",372,"00",,,,,,,,[[,"([3-79]\\d{2})(\\d{4})","$1 $2",["[369]|4[3-8]|5(?:[0-2]|5[0-478]|6[45])|7[1-9]","[369]|4[3-8]|5(?:[02]|1(?:[0-8]|95)|5[0-478]|6(?:4[0-4]|5[1-589]))|7[1-9]"]],[,"(70)(\\d{2})(\\d{4})","$1 $2 $3",["70"]],[,"(8000)(\\d{3})(\\d{3})","$1 $2 $3",["800","8000"]],[,"([458]\\d{3})(\\d{3,4})","$1 $2",["40|5|8(?:00|[1-5])","40|5|8(?:00[1-9]|[1-5])"]]],,[,,,,,,,,,[-1]],,,[,,"1\\d{3,4}|800[2-9]\\d{3}",,,,"8002123",,,[4,5,7]],[,,"1(?:2[01245]|3[0-6]|4[1-489]|5[0-59]|6[1-46-9]|7[0-27-9]|8[189]|9[012])\\d{1,2}",,,,"12123",,,[4,5]],,,[,,,,,,,,,[-1]]],EG:[,[,,"1\\d{4,9}|[2456]\\d{8}|3\\d{7}|[89]\\d{8,9}",,,,,,,[5,8,9,10],[7]],[,,"(?:1(?:3[23]\\d|5(?:[23]|9\\d))|2[2-4]\\d{2}|3\\d{2}|4(?:0[2-5]|[578][23]|64)\\d|5(?:0[2-7]|[57][23])\\d|6[24-689]3\\d|8(?:2[2-57]|4[26]|6[237]|8[2-4])\\d|9(?:2[27]|3[24]|52|6[2356]|7[2-4])\\d)\\d{5}|1[69]\\d{3}",,,,"234567890",,,[5,8,9],[7]],[,,"1(?:0[0-269]|1[0-245]|2[0-278])\\d{7}",,,,"1001234567",,,[10]],[,,"800\\d{7}",,,,"8001234567",,,[10]],[,,"900\\d{7}",,,,"9001234567",,,[10]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],"EG",20,"00","0",,,"0",,,,[[,"(\\d)(\\d{7,8})","$1 $2",["[23]"],"0$1"],[,"(\\d{3})(\\d{3})(\\d{4})","$1 $2 $3",["1[012]|[89]00"],"0$1"],[,"(\\d{2})(\\d{6,7})","$1 $2",["1[35]|[4-6]|[89][2-9]"],"0$1"]],,[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],EH:[,[,,"[5-9]\\d{8}",,,,,,,[9]],[,,"528[89]\\d{5}",,,,"528812345"],[,,"(?:6(?:[0-79]\\d|8[0-247-9])|7(?:[07][07]|6[12]))\\d{6}",,,,"650123456"],[,,"80\\d{7}",,,,"801234567"],[,,"89\\d{7}",,,,"891234567"],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,"5924[01]\\d{4}",,,,"592401234"],"EH",212,"00","0",,,"0",,,,,,[,,,,,,,,,[-1]],,"528[89]",[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],ER:[,[,,"[178]\\d{6}",,,,,,,[7],[6]],[,,"1(?:1[12568]|20|40|55|6[146])\\d{4}|8\\d{6}",,,,"8370362",,,,[6]],[,,"17[1-3]\\d{4}|7\\d{6}",,,,"7123456"],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],"ER",291,"00","0",,,"0",,,,[[,"(\\d)(\\d{3})(\\d{3})","$1 $2 $3",,"0$1"]],,[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],ES:[,[,,"[5-9]\\d{8}",,,,,,,[9]],[,,"8(?:[1356]\\d|[28][0-8]|[47][1-9])\\d{6}|9(?:[135]\\d{7}|[28][0-8]\\d{6}|4[1-9]\\d{6}|6(?:[0-8]\\d{6}|9(?:0(?:[0-57-9]\\d{4}|6(?:0[0-8]|1[1-9]|[2-9]\\d)\\d{2})|[1-9]\\d{5}))|7(?:[124-9]\\d{2}|3(?:[0-8]\\d|9[1-9]))\\d{4})",,,,"810123456"],[,,"(?:6\\d{6}|7[1-48]\\d{5}|9(?:6906(?:09|10)|7390\\d{2}))\\d{2}",,,,"612345678"],[,,"[89]00\\d{6}",,,,"800123456"],[,,"80[367]\\d{6}",,,,"803123456"],[,,"90[12]\\d{6}",,,,"901123456"],[,,"70\\d{7}",,,,"701234567"],[,,,,,,,,,[-1]],"ES",34,"00",,,,,,,,[[,"([89]00)(\\d{3})(\\d{3})","$1 $2 $3",["[89]00"]],[,"([5-9]\\d{2})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",["[568]|[79][0-8]"]]],,[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,"51\\d{7}",,,,"511234567"],,,[,,,,,,,,,[-1]]],ET:[,[,,"[1-59]\\d{8}",,,,,,,[9],[7]],[,,"(?:11(?:1(?:1[124]|2[2-57]|3[1-5]|5[5-8]|8[6-8])|2(?:13|3[6-8]|5[89]|7[05-9]|8[2-6])|3(?:2[01]|3[0-289]|4[1289]|7[1-4]|87)|4(?:1[69]|3[2-49]|4[0-3]|6[5-8])|5(?:1[578]|44|5[0-4])|6(?:18|2[69]|39|4[5-7]|5[1-5]|6[0-59]|8[015-8]))|2(?:2(?:11[1-9]|22[0-7]|33\\d|44[1467]|66[1-68])|5(?:11[124-6]|33[2-8]|44[1467]|55[14]|66[1-3679]|77[124-79]|880))|3(?:3(?:11[0-46-8]|22[0-6]|33[0134689]|44[04]|55[0-6]|66[01467])|4(?:44[0-8]|55[0-69]|66[0-3]|77[1-5]))|4(?:6(?:22[0-24-7]|33[1-5]|44[13-69]|55[14-689]|660|88[1-4])|7(?:11[1-9]|22[1-9]|33[13-7]|44[13-6]|55[1-689]))|5(?:7(?:227|55[05]|(?:66|77)[14-8])|8(?:11[149]|22[013-79]|33[0-68]|44[013-8]|550|66[1-5]|77\\d)))\\d{4}",,,,"111112345",,,,[7]],[,,"9(?:[1-46-8]\\d|5[89])\\d{6}",,,,"911234567"],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],"ET",251,"00","0",,,"0",,,,[[,"([1-59]\\d)(\\d{3})(\\d{4})","$1 $2 $3",,"0$1"]],,[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],FI:[,[,,"[156]\\d{6,9}|2\\d{4,9}|3\\d{5,9}|4\\d{7,10}|7\\d{7,9}|[89]\\d{6,8}",,,,,,,[5,6,7,8,9,10,11]],[,,"1[3-79][1-8]\\d{4,6}|[235689][1-8]\\d{5,7}",,,,"131234567",,,[7,8,9]],[,,"4(?:[0-8]\\d{6,8}|9\\d{9})|50\\d{6,8}",,,,"412345678",,,[8,9,10,11]],[,,"800\\d{5,6}",,,,"800123456",,,[8,9]],[,,"[67]00\\d{5,6}",,,,"600123456",,,[8,9]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],"FI",358,"00|99(?:[02469]|5(?:11|33|5[59]|88|9[09]))","0",,,"0",,"00",,[[,"(\\d{3})(\\d{3,7})","$1 $2",["(?:[16-8]0|300)"],"0$1"],[,"(116\\d{3})","$1",["116"],"$1"],[,"(\\d{2})(\\d{3,9})","$1 $2",["1[3-9]|2[09]|4|50|7(?:[13]|5[03-9])"],"0$1"],[,"(75\\d{3})","$1",["75[12]"],"0$1"],[,"(\\d)(\\d{6,9})","$1 $2",["[25689][1-8]|3(?:0[1-9]|[1-8])"],"0$1"],[,"(39\\d)(\\d{3})(\\d{3})","$1 $2 $3",["39"],"0$1"]],[[,"(\\d{3})(\\d{3,7})","$1 $2",["(?:[16-8]0|300)"],"0$1"],[,"(116\\d{3})","$1",["116"],"$1"],[,"(\\d{2})(\\d{3,9})","$1 $2",["1[3-9]|2[09]|4|50|7(?:[13]|5[03-9])"],"0$1"],[,"(\\d)(\\d{6,9})","$1 $2",["[25689][1-8]|3(?:0[1-9]|[1-8])"],"0$1"],[,"(39\\d)(\\d{3})(\\d{3})","$1 $2 $3",["39"],"0$1"]],[,,,,,,,,,[-1]],1,,[,,"100\\d{4,6}|20(?:0\\d{4,6}|2[023]\\d{4,5}|9[89]\\d{1,6})|300\\d{3,7}|60(?:[12]\\d{5,6}|6\\d{7})|7(?:1\\d{7}|3\\d{8}|5[03-9]\\d{5,6})",,,,"1001234",,,[5,6,7,8,9,10]],[,,"10(?:0\\d{4,6}|[1-9]\\d{5,7})|2(?:0(?:0\\d{4,6}|[13-8]\\d{5,7}|2(?:[023]\\d{4,5}|[14-9]\\d{4,6})|9(?:[0-7]\\d{4,6}|[89]\\d{1,6}))|9\\d{6,8})|3(?:0(?:0\\d{3,7}|[1-9]\\d{5,7})|93\\d{5,7})|60(?:[12]\\d{5,6}|6\\d{7})|7(?:1\\d{7}|3\\d{8}|5[03-9]\\d{5,6})",,,,"10112345",,,[5,6,7,8,9,10]],,,[,,,,,,,,,[-1]]],FJ:[,[,,"[35-9]\\d{6}|0\\d{10}",,,,,,,[7,11]],[,,"(?:3[0-5]|6[25-7]|8[58])\\d{5}",,,,"3212345",,,[7]],[,,"(?:5[018]|[79]\\d|8[034679])\\d{5}",,,,"7012345",,,[7]],[,,"0800\\d{7}",,,,"08001234567",,,[11]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],"FJ",679,"0(?:0|52)",,,,,,"00",,[[,"(\\d{3})(\\d{4})","$1 $2",["[35-9]"]],[,"(\\d{4})(\\d{3})(\\d{4})","$1 $2 $3",["0"]]],,[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],1,,[,,,,,,,,,[-1]]],FK:[,[,,"[2-7]\\d{4}",,,,,,,[5]],[,,"[2-47]\\d{4}",,,,"31234"],[,,"[56]\\d{4}",,,,"51234"],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],"FK",500,"00",,,,,,,,,,[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],FM:[,[,,"[39]\\d{6}",,,,,,,[7]],[,,"3[2357]0[1-9]\\d{3}|9[2-6]\\d{5}",,,,"3201234"],[,,"3[2357]0[1-9]\\d{3}|9[2-7]\\d{5}",,,,"3501234"],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],"FM",691,"00",,,,,,,,[[,"(\\d{3})(\\d{4})","$1 $2"]],,[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],FO:[,[,,"[2-9]\\d{5}",,,,,,,[6]],[,,"(?:20|[3-4]\\d|8[19])\\d{4}",,,,"201234"],[,,"(?:[27][1-9]|5\\d)\\d{4}",,,,"211234"],[,,"80[257-9]\\d{3}",,,,"802123"],[,,"90(?:[1345][15-7]|2[125-7]|99)\\d{2}",,,,"901123"],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,"(?:6[0-36]|88)\\d{4}",,,,"601234"],"FO",298,"00",,,,"(10(?:01|[12]0|88))",,,,[[,"(\\d{6})","$1",,,"$CC $1"]],,[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],FR:[,[,,"[1-9]\\d{8}",,,,,,,[9]],[,,"[1-5]\\d{8}",,,,"123456789"],[,,"(?:6\\d|7[3-9])\\d{7}",,,,"612345678"],[,,"80[0-5]\\d{6}",,,,"801234567"],[,,"89[1-37-9]\\d{6}",,,,"891123456"],[,,"8(?:1[0-29]|2[0156]|84|90)\\d{6}",,,,"810123456"],[,,,,,,,,,[-1]],[,,"9\\d{8}",,,,"912345678"],"FR",33,"00","0",,,"0",,,,[[,"([1-79])(\\d{2})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4 $5",["[1-79]"],"0$1"],[,"(1\\d{2})(\\d{3})","$1 $2",["11"],"$1"],[,"(8\\d{2})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",["8"],"0 $1"]],[[,"([1-79])(\\d{2})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4 $5",["[1-79]"],"0$1"],[,"(8\\d{2})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",["8"],"0 $1"]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,"80[6-9]\\d{6}",,,,"806123456"],,,[,,,,,,,,,[-1]]],GA:[,[,,"0?\\d{7}",,,,,,,[7,8]],[,,"01\\d{6}",,,,"01441234",,,[8]],[,,"0?[2-7]\\d{6}",,,,"06031234"],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],"GA",241,"00",,,,,,,,[[,"(\\d)(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",["[2-7]"],"0$1"],[,"(\\d{2})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",["0"]]],,[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],1,,[,,,,,,,,,[-1]]],GB:[,[,,"\\d{7,10}",,,,,,,[7,9,10],[4,5,6,8]],[,,"2(?:0[01378]|3[0189]|4[017]|8[0-46-9]|9[0-2])\\d{7}|1(?:(?:1(?:3[0-48]|[46][0-4]|5[0-26-9]|[78][0-49])|21[0-7]|31[0-8]|[4-69]1\\d))\\d{6}|1(?:2(?:0[024-9]|2[3-9]|3[3-79]|4[1-689]|[58][02-9]|6[0-47-9]|7[013-9]|9\\d)|3(?:0\\d|[25][02-9]|3[02-579]|[468][0-46-9]|7[1-35-79]|9[2-578])|4(?:0[03-9]|[28][02-57-9]|[37]\\d|4[02-69]|5[0-8]|[69][0-79])|5(?:0[1-35-9]|2[024-9]|3[015689]|4[02-9]|5[03-9]|6\\d|7[0-35-9]|8[0-468]|9[0-57-9])|6(?:0[034689]|2[0-35689]|[38][013-9]|4[1-467]|5[0-69]|6[13-9]|7[0-8]|9[0124578])|7(?:0[0246-9]|2\\d|3[0236-8]|4[03-9]|5[0-46-9]|6[013-9]|7[0-35-9]|8[024-9]|9[02-9])|8(?:0[35-9]|2[1-57-9]|3[02-578]|4[0-578]|5[124-9]|6[2-69]|7\\d|8[02-9]|9[02569])|9(?:0[02-589]|2[02-689]|3[1-57-9]|4[2-9]|5[0-579]|6[2-47-9]|7[0-24578]|8\\d|9[2-57]))\\d{6}|1(?:2(?:0(?:46[1-4]|87[2-9])|545[1-79]|76(?:2\\d|3[1-8]|6[1-6])|9(?:7(?:2[0-4]|3[2-5])|8(?:2[2-8]|7[0-47-9]|8[345])))|3(?:638[2-5]|647[23]|8(?:47[04-9]|64[0157-9]))|4(?:044[1-7]|20(?:2[23]|8\\d)|6(?:0(?:30|5[2-57]|6[1-8]|7[2-8])|140)|8(?:052|87[123]))|5(?:24(?:3[2-79]|6\\d)|276\\d|6(?:26[06-9]|686))|6(?:06(?:4\\d|7[4-79])|295[567]|35[34]\\d|47(?:24|61)|59(?:5[08]|6[67]|74)|955[0-4])|7(?:26(?:6[13-9]|7[0-7])|442\\d|50(?:2[0-3]|[3-68]2|76))|8(?:27[56]\\d|37(?:5[2-5]|8[239])|84(?:3[2-58]))|9(?:0(?:0(?:6[1-8]|85)|52\\d)|3583|4(?:66[1-8]|9(?:2[01]|81))|63(?:23|3[1-4])|9561))\\d{3}|176888[2-46-8]\\d{2}|16977[23]\\d{3}",,,,"1212345678",,,[9,10],[4,5,6,7,8]],[,,"7(?:[1-3]\\d{3}|4(?:[0-46-9]\\d{2}|5(?:[0-689]\\d|7[0-57-9]))|5(?:0[0-8]|[13-9]\\d|2[0-35-9])\\d|7(?:0(?:0[01]|[1-9]\\d)|[1-7]\\d{2}|8[02-9]\\d|9[0-689]\\d)|8(?:[014-9]\\d|[23][0-8])\\d|9(?:[024-9]\\d{2}|1(?:[02-9]\\d|1[028])|3[0-689]\\d))\\d{5}",,,,"7400123456",,,[10]],[,,"80(?:0(?:1111|\\d{6,7})|8\\d{7})|500\\d{6}",,,,"8001234567"],[,,"(?:87[123]|9(?:[01]\\d|8[2349]))\\d{7}",,,,"9012345678",,,[10]],[,,"8(?:4(?:5464\\d|[2-5]\\d{7})|70\\d{7})",,,,"8431234567",,,[7,10]],[,,"70\\d{8}",,,,"7012345678",,,[10]],[,,"56\\d{8}",,,,"5612345678",,,[10]],"GB",44,"00","0"," x",,"0",,,,[[,"(7\\d{3})(\\d{6})","$1 $2",["7(?:[1-57-9]|62)","7(?:[1-57-9]|624)"],"0$1"],[,"(\\d{2})(\\d{4})(\\d{4})","$1 $2 $3",["2|5[56]|7[06]"],"0$1"],[,"(\\d{3})(\\d{3})(\\d{4})","$1 $2 $3",["1(?:1|\\d1)|3|9[018]"],"0$1"],[,"(\\d{5})(\\d{4,5})","$1 $2",["1(?:38|5[23]|69|76|94)","1(?:387|5(?:24|39)|697|768|946)","1(?:3873|5(?:242|39[456])|697[347]|768[347]|9467)"],"0$1"],[,"(1\\d{3})(\\d{5,6})","$1 $2",["1"],"0$1"],[,"(800)(\\d{4})","$1 $2",["800","8001","80011","800111","8001111"],"0$1"],[,"(845)(46)(4\\d)","$1 $2 $3",["845","8454","84546","845464"],"0$1"],[,"(8\\d{2})(\\d{3})(\\d{4})","$1 $2 $3",["8(?:4[2-5]|7[0-3])"],"0$1"],[,"(80\\d)(\\d{3})(\\d{4})","$1 $2 $3",["80"],"0$1"],[,"([58]00)(\\d{6})","$1 $2",["[58]00"],"0$1"]],,[,,"76(?:0[012]|2[356]|4[0134]|5[49]|6[0-369]|77|81|9[39])\\d{6}",,,,"7640123456",,,[10]],1,,[,,,,,,,,,[-1]],[,,"(?:3[0347]|55)\\d{8}",,,,"5512345678",,,[10]],,,[,,,,,,,,,[-1]]],GD:[,[,,"[4589]\\d{9}",,,,,,,[10],[7]],[,,"473(?:2(?:3[0-2]|69)|3(?:2[89]|86)|4(?:[06]8|3[5-9]|4[0-49]|5[5-79]|68|73|90)|63[68]|7(?:58|84)|800|938)\\d{4}",,,,"4732691234",,,,[7]],[,,"473(?:4(?:0[2-79]|1[04-9]|20|58)|5(?:2[01]|3[3-8])|901)\\d{4}",,,,"4734031234",,,,[7]],[,,"8(?:00|33|44|55|66|77|88)[2-9]\\d{6}",,,,"8002123456"],[,,"900[2-9]\\d{6}",,,,"9002123456"],[,,,,,,,,,[-1]],[,,"5(?:00|22|33|44|66|77|88)[2-9]\\d{6}",,,,"5002345678"],[,,,,,,,,,[-1]],"GD",1,"011","1",,,"1",,,,,,[,,,,,,,,,[-1]],,"473",[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],GE:[,[,,"[34578]\\d{8}",,,,,,,[9],[6]],[,,"(?:3(?:[256]\\d|4[124-9]|7[0-4])|4(?:1\\d|2[2-7]|3[1-79]|4[2-8]|7[239]|9[1-7]))\\d{6}",,,,"322123456",,,,[6]],[,,"5(?:14|5[01578]|68|7[0147-9]|9[0-35-9])\\d{6}",,,,"555123456"],[,,"800\\d{6}",,,,"800123456"],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,"706\\d{6}",,,,"706123456"],"GE",995,"00","0",,,"0",,,,[[,"(\\d{3})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",["[348]"],"0$1"],[,"(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3",["7"],"0$1"],[,"(\\d{3})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",["5"],"$1"]],,[,,,,,,,,,[-1]],,,[,,"706\\d{6}",,,,"706123456"],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],GF:[,[,,"[56]\\d{8}",,,,,,,[9]],[,,"594(?:10|2[012457-9]|3[0-57-9]|4[3-9]|5[7-9]|6[0-3]|9[014])\\d{4}",,,,"594101234"],[,,"694(?:[04][0-7]|1[0-5]|3[018]|[29]\\d)\\d{4}",,,,"694201234"],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],"GF",594,"00","0",,,"0",,,,[[,"(\\d{3})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",,"0$1"]],,[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],GG:[,[,,"[135789]\\d{6,9}",,,,,,,[7,9,10],[6]],[,,"1481[25-9]\\d{5}",,,,"1481256789",,,[10],[6]],[,,"7(?:781\\d|839\\d|911[17])\\d{5}",,,,"7781123456",,,[10]],[,,"80(?:0(?:1111|\\d{6,7})|8\\d{7})|500\\d{6}",,,,"8001234567"],[,,"(?:87[123]|9(?:[01]\\d|8[0-3]))\\d{7}",,,,"9012345678",,,[10]],[,,"8(?:4(?:5464\\d|[2-5]\\d{7})|70\\d{7})",,,,"8431234567",,,[7,10]],[,,"70\\d{8}",,,,"7012345678",,,[10]],[,,"56\\d{8}",,,,"5612345678",,,[10]],"GG",44,"00","0"," x",,"0",,,,,,[,,"76(?:0[012]|2[356]|4[0134]|5[49]|6[0-369]|77|81|9[39])\\d{6}",,,,"7640123456",,,[10]],,,[,,,,,,,,,[-1]],[,,"(?:3[0347]|55)\\d{8}",,,,"5512345678",,,[10]],,,[,,,,,,,,,[-1]]],GH:[,[,,"[235]\\d{8}|8\\d{7}",,,,,,,[8,9],[7]],[,,"3(?:0(?:[237]\\d|80)|[167](?:2[0-6]|7\\d|80)|2(?:2[0-5]|7\\d|80)|3(?:2[0-3]|7\\d|80)|4(?:2[013-9]|3[01]|7\\d|80)|5(?:2[0-7]|7\\d|80)|8(?:2[0-2]|7\\d|80)|9(?:[28]0|7\\d))\\d{5}",,,,"302345678",,,[9],[7]],[,,"(?:2[034678]\\d|5(?:[0457]\\d|6[01]))\\d{6}",,,,"231234567",,,[9]],[,,"800\\d{5}",,,,"80012345",,,[8]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],"GH",233,"00","0",,,"0",,,,[[,"(\\d{2})(\\d{3})(\\d{4})","$1 $2 $3",["[235]"],"0$1"],[,"(\\d{3})(\\d{5})","$1 $2",["8"],"0$1"]],,[,,,,,,,,,[-1]],,,[,,"800\\d{5}",,,,"80012345",,,[8]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],GI:[,[,,"[2568]\\d{7}",,,,,,,[8]],[,,"2(?:00\\d{2}|1(?:6[24-7]\\d|90[0-2])|2(?:00\\d|2[2457]\\d|50[0-2]))\\d{3}",,,,"20012345"],[,,"(?:5[46-8]|62)\\d{6}",,,,"57123456"],[,,,,,,,,,[-1]],[,,"88\\d{6}",,,,"88123456"],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],"GI",350,"00",,,,,,,,[[,"(\\d{3})(\\d{5})","$1 $2",["2"]]],,[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],GL:[,[,,"[1-689]\\d{5}",,,,,,,[6]],[,,"(?:19|3[1-6]|6[14689]|8[14-79]|9\\d)\\d{4}",,,,"321000"],[,,"[245][2-9]\\d{4}",,,,"221234"],[,,"80\\d{4}",,,,"801234"],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,"3[89]\\d{4}",,,,"381234"],"GL",299,"00",,,,,,,,[[,"(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3"]],,[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],GM:[,[,,"[2-9]\\d{6}",,,,,,,[7]],[,,"(?:4(?:[23]\\d{2}|4(?:1[024679]|[6-9]\\d))|5(?:54[0-7]|6(?:[67]\\d)|7(?:1[04]|2[035]|3[58]|48))|8\\d{3})\\d{3}",,,,"5661234"],[,,"[23679]\\d{6}",,,,"3012345"],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],"GM",220,"00",,,,,,,,[[,"(\\d{3})(\\d{4})","$1 $2"]],,[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],GN:[,[,,"[367]\\d{7,8}",,,,,,,[8,9]],[,,"30(?:24|3[12]|4[1-35-7]|5[13]|6[189]|[78]1|9[1478])\\d{4}",,,,"30241234",,,[8]],[,,"6[02356]\\d{7}",,,,"601123456",,,[9]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,"722\\d{6}",,,,"722123456",,,[9]],"GN",224,"00",,,,,,,,[[,"(\\d{2})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",["3"]],[,"(\\d{3})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",["[67]"]]],,[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],GP:[,[,,"[56]\\d{8}",,,,,,,[9]],[,,"590(?:0[13468]|1[012]|2[0-68]|3[28]|4[0-8]|5[579]|6[0189]|70|8[0-689]|9\\d)\\d{4}",,,,"590201234"],[,,"690(?:0[0-7]|[1-9]\\d)\\d{4}",,,,"690301234"],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],"GP",590,"00","0",,,"0",,,,[[,"([56]90)(\\d{2})(\\d{4})","$1 $2-$3",,"0$1"]],,[,,,,,,,,,[-1]],1,,[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],GQ:[,[,,"[23589]\\d{8}",,,,,,,[9]],[,,"3(?:3(?:3\\d[7-9]|[0-24-9]\\d[46])|5\\d{2}[7-9])\\d{4}",,,,"333091234"],[,,"(?:222|55[15])\\d{6}",,,,"222123456"],[,,"80\\d[1-9]\\d{5}",,,,"800123456"],[,,"90\\d[1-9]\\d{5}",,,,"900123456"],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],"GQ",240,"00",,,,,,,,[[,"(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3",["[235]"]],[,"(\\d{3})(\\d{6})","$1 $2",["[89]"]]],,[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],GR:[,[,,"[26-9]\\d{9}",,,,,,,[10]],[,,"2(?:1\\d{2}|2(?:2[1-46-9]|3[1-8]|4[1-7]|5[1-4]|6[1-8]|7[1-5]|[89][1-9])|3(?:1\\d|2[1-57]|[35][1-3]|4[13]|7[1-7]|8[124-6]|9[1-79])|4(?:1\\d|2[1-8]|3[1-4]|4[13-5]|6[1-578]|9[1-5])|5(?:1\\d|[29][1-4]|3[1-5]|4[124]|5[1-6])|6(?:1\\d|3[1245]|4[1-7]|5[13-9]|[269][1-6]|7[14]|8[1-5])|7(?:1\\d|2[1-5]|3[1-6]|4[1-7]|5[1-57]|6[135]|9[125-7])|8(?:1\\d|2[1-5]|[34][1-4]|9[1-57]))\\d{6}",,,,"2123456789"],[,,"69\\d{8}",,,,"6912345678"],[,,"800\\d{7}",,,,"8001234567"],[,,"90[19]\\d{7}",,,,"9091234567"],[,,"8(?:0[16]|12|25)\\d{7}",,,,"8011234567"],[,,"70\\d{8}",,,,"7012345678"],[,,,,,,,,,[-1]],"GR",30,"00",,,,,,,,[[,"([27]\\d)(\\d{4})(\\d{4})","$1 $2 $3",["21|7"]],[,"(\\d{3})(\\d{3})(\\d{4})","$1 $2 $3",["2[2-9]1|[689]"]],[,"(2\\d{3})(\\d{6})","$1 $2",["2[2-9][02-9]"]]],,[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],GT:[,[,,"[2-7]\\d{7}|1[89]\\d{9}",,,,,,,[8,11]],[,,"[267][2-9]\\d{6}",,,,"22456789",,,[8]],[,,"[345]\\d{7}",,,,"51234567",,,[8]],[,,"18[01]\\d{8}",,,,"18001112222",,,[11]],[,,"19\\d{9}",,,,"19001112222",,,[11]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],"GT",502,"00",,,,,,,,[[,"(\\d{4})(\\d{4})","$1 $2",["[2-7]"]],[,"(\\d{4})(\\d{3})(\\d{4})","$1 $2 $3",["1"]]],,[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],GU:[,[,,"[5689]\\d{9}",,,,,,,[10],[7]],[,,"671(?:3(?:00|3[39]|4[349]|55|6[26])|4(?:56|7[1-9]|8[236-9])|5(?:55|6[2-5]|88)|6(?:3[2-578]|4[24-9]|5[34]|78|8[5-9])|7(?:[079]7|2[0167]|3[45]|47|8[789])|8(?:[2-5789]8|6[48])|9(?:2[29]|6[79]|7[179]|8[789]|9[78]))\\d{4}",,,,"6713001234",,,,[7]],[,,"671(?:3(?:00|3[39]|4[349]|55|6[26])|4(?:56|7[1-9]|8[236-9])|5(?:55|6[2-5]|88)|6(?:3[2-578]|4[24-9]|5[34]|78|8[5-9])|7(?:[079]7|2[0167]|3[45]|47|8[789])|8(?:[2-5789]8|6[48])|9(?:2[29]|6[79]|7[179]|8[789]|9[78]))\\d{4}",,,,"6713001234",,,,[7]],[,,"8(?:00|33|44|55|66|77|88)[2-9]\\d{6}",,,,"8002123456"],[,,"900[2-9]\\d{6}",,,,"9002123456"],[,,,,,,,,,[-1]],[,,"5(?:00|22|33|44|66|77|88)[2-9]\\d{6}",,,,"5002345678"],[,,,,,,,,,[-1]],"GU",1,"011","1",,,"1",,,1,,,[,,,,,,,,,[-1]],,"671",[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],GW:[,[,,"(?:4(?:0\\d{5}|4\\d{7})|9\\d{8})",,,,,,,[7,9]],[,,"443\\d{6}",,,,"443201234",,,[9]],[,,"9(?:5(?:5\\d|6[0-2])|6(?:5[0-2]|6\\d|9[012])|77\\d)\\d{5}",,,,"955012345",,,[9]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,"40\\d{5}",,,,"4012345",,,[7]],"GW",245,"00",,,,,,,,[[,"(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3",["44|9[567]"]],[,"(\\d{3})(\\d{4})","$1 $2",["40"]]],,[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],GY:[,[,,"[2-46-9]\\d{6}",,,,,,,[7]],[,,"(?:2(?:1[6-9]|2[0-35-9]|3[1-4]|5[3-9]|6\\d|7[0-24-79])|3(?:2[25-9]|3\\d)|4(?:4[0-24]|5[56])|77[1-57])\\d{4}",,,,"2201234"],[,,"6\\d{6}",,,,"6091234"],[,,"(?:289|862)\\d{4}",,,,"2891234"],[,,"9008\\d{3}",,,,"9008123"],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],"GY",592,"001",,,,,,,,[[,"(\\d{3})(\\d{4})","$1 $2"]],,[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],HK:[,[,,"[235-7]\\d{7}|8\\d{7,8}|9\\d{4,10}",,,,,,,[5,6,7,8,9,11]],[,,"(?:2(?:[13-8]\\d|2[013-9]|9[0-24-9])|3(?:[1569][0-24-9]|4[0-246-9]|7[0-24-69]|89)|58[01])\\d{5}",,,,"21234567",,,[8]],[,,"(?:5(?:[1-59][0-46-9]|6[0-4689]|7[0-2469])|6(?:0[1-9]|[1459]\\d|[2368][0-57-9]|7[0-79])|9(?:0[1-9]|1[02-9]|[2358][0-8]|[467]\\d))\\d{5}",,,,"51234567",,,[8]],[,,"800\\d{6}",,,,"800123456",,,[9]],[,,"900(?:[0-24-9]\\d{7}|3\\d{1,4})",,,,"90012345678",,,[5,6,7,8,11]],[,,,,,,,,,[-1]],[,,"8(?:1[1-4679]|2[0-367]|3[02-47])\\d{5}",,,,"81123456",,,[8]],[,,,,,,,,,[-1]],"HK",852,"00(?:[126-9]|30|5[09])?",,,,,,"00",,[[,"(\\d{4})(\\d{4})","$1 $2",["[235-7]|[89](?:0[1-9]|[1-9])"]],[,"(800)(\\d{3})(\\d{3})","$1 $2 $3",["800"]],[,"(900)(\\d{2})(\\d{3})(\\d{3})","$1 $2 $3 $4",["900"]],[,"(900)(\\d{2,5})","$1 $2",["900"]]],,[,,"7(?:1[0-369]|[23][0-37-9]|47|5[1578]|6[0235]|7[278]|8[236-9]|9[025-9])\\d{5}",,,,"71234567",,,[8]],,,[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],HN:[,[,,"[237-9]\\d{7}",,,,,,,[8]],[,,"2(?:2(?:0[019]|1[1-36]|[23]\\d|4[04-6]|5[57]|7[01389]|8[0146-9]|9[012])|4(?:07|2[3-59]|3[13-689]|4[0-68]|5[1-35])|5(?:16|4[03-5]|5\\d|6[4-6]|74)|6(?:[056]\\d|17|3[04]|4[0-378]|[78][0-8]|9[01])|7(?:6[46-9]|7[02-9]|8[034])|8(?:79|8[0-35789]|9[1-57-9]))\\d{4}",,,,"22123456"],[,,"[37-9]\\d{7}",,,,"91234567"],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],"HN",504,"00",,,,,,,,[[,"(\\d{4})(\\d{4})","$1-$2"]],,[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],HR:[,[,,"[1-7]\\d{5,8}|[89]\\d{6,8}",,,,,,,[6,7,8,9]],[,,"1\\d{7}|(?:2[0-3]|3[1-5]|4[02-47-9]|5[1-3])\\d{6,7}",,,,"12345678",,,[8,9],[6,7]],[,,"9(?:01\\d|[1259]\\d{2}|7(?:[0679]\\d|51)|8\\d{1,2})\\d{5}",,,,"921234567",,,[8,9]],[,,"80[01]\\d{4,6}",,,,"800123456",,,[7,8,9]],[,,"6(?:[01]\\d{0,2}|[459]\\d{2})\\d{4}",,,,"611234",,,[6,7,8]],[,,,,,,,,,[-1]],[,,"7[45]\\d{6}",,,,"74123456",,,[8]],[,,,,,,,,,[-1]],"HR",385,"00","0",,,"0",,,,[[,"(1)(\\d{4})(\\d{3})","$1 $2 $3",["1"],"0$1"],[,"([2-5]\\d)(\\d{3})(\\d{3,4})","$1 $2 $3",["[2-5]"],"0$1"],[,"(9\\d)(\\d{3})(\\d{3,4})","$1 $2 $3",["9"],"0$1"],[,"(6[01])(\\d{2})(\\d{2,3})","$1 $2 $3",["6[01]"],"0$1"],[,"([67]\\d)(\\d{3})(\\d{3,4})","$1 $2 $3",["[67]"],"0$1"],[,"(80[01])(\\d{2})(\\d{2,3})","$1 $2 $3",["8"],"0$1"],[,"(80[01])(\\d{3})(\\d{3})","$1 $2 $3",["8"],"0$1"]],,[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,"(?:62\\d?|72)\\d{6}",,,,"62123456",,,[8,9]],,,[,,,,,,,,,[-1]]],HT:[,[,,"[2-489]\\d{7}",,,,,,,[8]],[,,"2(?:2\\d|5[1-5]|81|9[149])\\d{5}",,,,"22453300"],[,,"[34]\\d{7}",,,,"34101234"],[,,"8\\d{7}",,,,"80012345"],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,"(?:9(?:[67][0-4]|8[0-3589]|9\\d))\\d{5}",,,,"98901234"],"HT",509,"00",,,,,,,,[[,"(\\d{2})(\\d{2})(\\d{4})","$1 $2 $3"]],,[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],HU:[,[,,"[1-9]\\d{7,8}",,,,,,,[8,9],[6]],[,,"(?:1\\d|2[2-9]|3[2-7]|4[24-9]|5[2-79]|6[23689]|7[2-9]|8[2-57-9]|9[2-69])\\d{6}",,,,"12345678",,,[8],[6]],[,,"(?:[257]0|3[01])\\d{7}",,,,"201234567",,,[9]],[,,"[48]0\\d{6}",,,,"80123456",,,[8]],[,,"9[01]\\d{6}",,,,"90123456",,,[8]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,"21\\d{7}",,,,"211234567",,,[9]],"HU",36,"00","06",,,"06",,,,[[,"(1)(\\d{3})(\\d{4})","$1 $2 $3",["1"],"($1)"],[,"(\\d{2})(\\d{3})(\\d{3,4})","$1 $2 $3",["[2-9]"],"($1)"]],,[,,,,,,,,,[-1]],,,[,,"[48]0\\d{6}",,,,"80123456",,,[8]],[,,"38\\d{7}",,,,"381234567",,,[9]],,,[,,,,,,,,,[-1]]],ID:[,[,,"(?:[1-79]\\d{6,10}|8\\d{7,11})",,,,,,,[7,8,9,10,11,12],[5,6]],[,,"2(?:1(?:14\\d{3}|[0-8]\\d{6,7}|500\\d{3}|9\\d{6})|2\\d{6,8}|4\\d{7,8})|(?:2(?:[35][1-4]|6[0-8]|7[1-6]|8\\d|9[1-8])|3(?:1|[25][1-8]|3[1-68]|4[1-3]|6[1-3568]|7[0-469]|8\\d)|4(?:0[1-589]|1[01347-9]|2[0-36-8]|3[0-24-68]|43|5[1-378]|6[1-5]|7[134]|8[1245])|5(?:1[1-35-9]|2[25-8]|3[124-9]|4[1-3589]|5[1-46]|6[1-8])|6(?:19?|[25]\\d|3[1-69]|4[1-6])|7(?:02|[125][1-9]|[36]\\d|4[1-8]|7[0-36-9])|9(?:0[12]|1[013-8]|2[0-479]|5[125-8]|6[23679]|7[159]|8[01346]))\\d{5,8}",,,,"612345678",,,[7,8,9,10,11],[5,6]],[,,"(?:2(?:1(?:3[145]|4[01]|5[1-469]|60|8[0359]|9\\d)|2(?:88|9[1256])|3[1-4]9|4(?:36|91)|5(?:1[349]|[2-4]9)|6[0-7]9|7(?:[1-36]9|4[39])|8[1-5]9|9[1-48]9)|3(?:19[1-3]|2[12]9|3[13]9|4(?:1[69]|39)|5[14]9|6(?:1[69]|2[89])|709)|4[13]19|5(?:1(?:19|8[39])|4[129]9|6[12]9)|6(?:19[12]|2(?:[23]9|77))|7(?:1[13]9|2[15]9|419|5(?:1[89]|29)|6[15]9|7[178]9))\\d{5,6}|8[1-35-9]\\d{7,10}",,,,"812345678",,,[9,10,11,12]],[,,"177\\d{6,8}|800\\d{5,7}",,,,"8001234567",,,[8,9,10,11]],[,,"809\\d{7}",,,,"8091234567",,,[10]],[,,"804\\d{7}",,,,"8041234567",,,[10]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],"ID",62,"0(?:0[1789]|10(?:00|1[67]))","0",,,"0",,,,[[,"(\\d{2})(\\d{5,8})","$1 $2",["2[124]|[36]1"],"(0$1)"],[,"(\\d{3})(\\d{5,8})","$1 $2",["[4579]|2[035-9]|[36][02-9]"],"(0$1)"],[,"(8\\d{2})(\\d{3,4})(\\d{3})","$1-$2-$3",["8[1-35-9]"],"0$1"],[,"(8\\d{2})(\\d{4})(\\d{4,5})","$1-$2-$3",["8[1-35-9]"],"0$1"],[,"(1)(500)(\\d{3})","$1 $2 $3",["15"],"$1"],[,"(177)(\\d{6,8})","$1 $2",["17"],"0$1"],[,"(800)(\\d{5,7})","$1 $2",["800"],"0$1"],[,"(804)(\\d{3})(\\d{4})","$1 $2 $3",["804"],"0$1"],[,"(80\\d)(\\d)(\\d{3})(\\d{3})","$1 $2 $3 $4",["80[79]"],"0$1"]],,[,,,,,,,,,[-1]],,,[,,"8071\\d{6}",,,,"8071123456",,,[10]],[,,"1500\\d{3}|8071\\d{6}",,,,"8071123456",,,[7,10]],,,[,,,,,,,,,[-1]]],IE:[,[,,"[124-9]\\d{6,9}",,,,,,,[7,8,9,10],[5,6]],[,,"1\\d{7,8}|2(?:1\\d{6,7}|3\\d{7}|[24-9]\\d{5})|4(?:0[24]\\d{5}|[1-469]\\d{7}|5\\d{6}|7\\d{5}|8[0-46-9]\\d{7})|5(?:0[45]\\d{5}|1\\d{6}|[23679]\\d{7}|8\\d{5})|6(?:1\\d{6}|[237-9]\\d{5}|[4-6]\\d{7})|7[14]\\d{7}|9(?:1\\d{6}|[04]\\d{7}|[35-9]\\d{5})",,,,"2212345",,,,[5,6]],[,,"8(?:22\\d{6}|[35-9]\\d{7})",,,,"850123456",,,[9]],[,,"1800\\d{6}",,,,"1800123456",,,[10]],[,,"15(?:1[2-8]|[2-8]0|9[089])\\d{6}",,,,"1520123456",,,[10]],[,,"18[59]0\\d{6}",,,,"1850123456",,,[10]],[,,"700\\d{6}",,,,"700123456",,,[9]],[,,"76\\d{7}",,,,"761234567",,,[9]],"IE",353,"00","0",,,"0",,,,[[,"(1)(\\d{3,4})(\\d{4})","$1 $2 $3",["1"],"(0$1)"],[,"(\\d{2})(\\d{5})","$1 $2",["2[24-9]|47|58|6[237-9]|9[35-9]"],"(0$1)"],[,"(\\d{3})(\\d{5})","$1 $2",["40[24]|50[45]"],"(0$1)"],[,"(48)(\\d{4})(\\d{4})","$1 $2 $3",["48"],"(0$1)"],[,"(818)(\\d{3})(\\d{3})","$1 $2 $3",["81"],"(0$1)"],[,"(\\d{2})(\\d{3})(\\d{3,4})","$1 $2 $3",["[24-69]|7[14]"],"(0$1)"],[,"([78]\\d)(\\d{3,4})(\\d{4})","$1 $2 $3",["76|8[35-9]"],"0$1"],[,"(700)(\\d{3})(\\d{3})","$1 $2 $3",["70"],"0$1"],[,"(\\d{4})(\\d{3})(\\d{3})","$1 $2 $3",["1(?:8[059]|5)","1(?:8[059]0|5)"],"$1"]],,[,,,,,,,,,[-1]],,,[,,"18[59]0\\d{6}",,,,"1850123456",,,[10]],[,,"818\\d{6}",,,,"818123456",,,[9]],,,[,,"8[35-9]\\d{8}",,,,"8501234567",,,[10]]],IL:[,[,,"1\\d{6,11}|[2-589]\\d{3}(?:\\d{3,6})?|6\\d{3}|7\\d{6,9}",,,,,,,[4,7,8,9,10,11,12]],[,,"(?:153\\d{1,2}|[2-489])\\d{7}",,,,"21234567",,,[8,11,12],[7]],[,,"5(?:[02-47-9]\\d{2}|5(?:01|2[23]|3[2-4]|4[45]|5[5689]|6[6-8]|7[0178]|8[6-9]|9[2-9])|6[2-9]\\d)\\d{5}",,,,"501234567",,,[9]],[,,"1(?:80[019]\\d{3}|255)\\d{3}",,,,"1800123456",,,[7,10]],[,,"1(?:212|(?:9(?:0[01]|19)|200)\\d{2})\\d{4}",,,,"1919123456",,,[8,9,10]],[,,"1700\\d{6}",,,,"1700123456",,,[10]],[,,,,,,,,,[-1]],[,,"7(?:18\\d|2[23]\\d|3[237]\\d|47\\d|6[58]\\d|7\\d{2}|8(?:2\\d|33|55|77|81)|9[2579]\\d)\\d{5}",,,,"771234567",,,[9]],"IL",972,"0(?:0|1[2-9])","0",,,"0",,,,[[,"([2-489])(\\d{3})(\\d{4})","$1-$2-$3",["[2-489]"],"0$1"],[,"([57]\\d)(\\d{3})(\\d{4})","$1-$2-$3",["[57]"],"0$1"],[,"(153)(\\d{1,2})(\\d{3})(\\d{4})","$1 $2 $3 $4",["153"],"$1"],[,"(1)([7-9]\\d{2})(\\d{3})(\\d{3})","$1-$2-$3-$4",["1[7-9]"],"$1"],[,"(1255)(\\d{3})","$1-$2",["125"],"$1"],[,"(1200)(\\d{3})(\\d{3})","$1-$2-$3",["120"],"$1"],[,"(1212)(\\d{2})(\\d{2})","$1-$2-$3",["121"],"$1"],[,"(1599)(\\d{6})","$1-$2",["15"],"$1"],[,"(\\d{4})","*$1",["[2-689]"],"$1"]],,[,,,,,,,,,[-1]],,,[,,"1700\\d{6}|[2-689]\\d{3}",,,,"1700123456",,,[4,10]],[,,"[2-689]\\d{3}|1599\\d{6}",,,,"1599123456",,,[4,10]],,,[,,,,,,,,,[-1]]],IM:[,[,,"[135789]\\d{6,9}",,,,,,,[10],[6]],[,,"1624[5-8]\\d{5}",,,,"1624756789",,,,[6]],[,,"7(?:4576|[59]24\\d)\\d{5}",,,,"7924123456"],[,,"808162\\d{4}",,,,"8081624567"],[,,"(?:872299|90[0167]624)\\d{4}",,,,"9016247890"],[,,"8(?:4(?:40[49]06|5624\\d)|70624\\d)\\d{3}",,,,"8456247890"],[,,"70\\d{8}",,,,"7012345678"],[,,"56\\d{8}",,,,"5612345678"],"IM",44,"00","0"," x",,"0",,,,,,[,,"7624[0-4689]\\d{5}",,,,"7624212345"],,,[,,,,,,,,,[-1]],[,,"3(?:08162\\d|3\\d{5}|4(?:40[49]06|5624\\d)|7(?:0624\\d|2299\\d))\\d{3}|55\\d{8}",,,,"5512345678"],,,[,,,,,,,,,[-1]]],IN:[,[,,"008\\d{9}|1\\d{7,12}|[2-9]\\d{9,10}",,,,,,,[8,9,10,11,12,13],[6,7]],[,,"(?:11|2[02]|33|4[04]|79)[2-7]\\d{7}|80[2-467]\\d{7}|(?:1(?:2[0-249]|3[0-25]|4[145]|[59][14]|6[014]|7[1257]|8[01346])|2(?:1[257]|3[013]|4[01]|5[0137]|6[0158]|78|8[1568]|9[14])|3(?:26|4[1-3]|5[34]|6[01489]|7[02-46]|8[159])|4(?:1[36]|2[1-47]|3[15]|5[12]|6[0-26-9]|7[0-24-9]|8[013-57]|9[014-7])|5(?:1[025]|[36][25]|22|4[28]|5[12]|[78]1|9[15])|6(?:12|[2345]1|57|6[13]|7[14]|80)|7(?:12|2[14]|3[134]|4[47]|5[15]|[67]1|88)|8(?:16|2[014]|3[126]|6[136]|7[078]|8[34]|91))[2-7]\\d{6}|(?:(?:1(?:2[35-8]|3[346-9]|4[236-9]|[59][0235-9]|6[235-9]|7[34689]|8[257-9])|2(?:1[134689]|3[24-8]|4[2-8]|5[25689]|6[2-4679]|7[13-79]|8[2-479]|9[235-9])|3(?:01|1[79]|2[1-5]|4[25-8]|5[125689]|6[235-7]|7[157-9]|8[2-467])|4(?:1[14578]|2[5689]|3[2-467]|5[4-7]|6[35]|73|8[2689]|9[2389])|5(?:[16][146-9]|2[14-8]|3[1346]|4[14-69]|5[46]|7[2-4]|8[2-8]|9[246])|6(?:1[1358]|2[2457]|3[2-4]|4[235-7]|[57][2-689]|6[24-578]|8[1-6])|8(?:1[1357-9]|2[235-8]|3[03-57-9]|4[0-24-9]|5\\d|6[2457-9]|7[1-6]|8[1256]|9[2-4]))\\d|7(?:(?:1[013-9]|2[0235-9]|3[2679]|4[1-35689]|5[2-46-9]|[67][02-9]|9\\d)\\d|8(?:2[0-6]|[013-8]\\d)))[2-7]\\d{5}",,,,"1123456789",,,[10],[6,7,8]],[,,"(?:600[1-3]\\d|7(?:0\\d{3}|19[0-5]\\d|2(?:[0235679]\\d{2}|[14][017-9]\\d|8(?:[0-59]\\d|[678][089]))|3(?:[05-8]\\d{2}|1(?:[089]\\d|7[5-8])|2(?:[0-49][089]|[5-8]\\d)|3[017-9]\\d|4(?:[07-9]\\d|11)|9(?:[016-9]\\d|[2-5][089]))|4(?:0\\d{2}|1(?:[015-9]\\d|[23][089]|4[089])|2(?:0[089]|[1-7][089]|[89]\\d)|3(?:[0-8][089]|9\\d)|4(?:[089]\\d|11|7[02-8])|[56]\\d[089]|7(?:[089]\\d|11|7[02-8])|8(?:[0-24-7][089]|[389]\\d)|9(?:[0-6][089]|7[089]|[89]\\d))|5(?:[0346-8]\\d{2}|1(?:[07-9]\\d|11)|2(?:[04-9]\\d|[123][089])|5[017-9]\\d|9(?:[0-6][089]|[7-9]\\d))|6(?:0(?:[0-47]\\d|[5689][089])|(?:1[0-257-9]|[6-9]\\d)\\d|2(?:[0-4]\\d|[5-9][089])|3(?:[02-8][089]|[19]\\d)|4\\d[089]|5(?:[0-367][089]|[4589]\\d))|7(?:0(?:0[02-9]|[13-6][089]|[289]\\d|7[89])|[1-9]\\d{2})|8(?:[0-79]\\d{2}|8(?:[089]\\d|11|7[02-9]))|9(?:[089]\\d{2}|313|7(?:[02-8]\\d|9[07-9])))|8(?:0(?:[01589]\\d{2}|6[67]\\d|7(?:[02-8]\\d|9[05-9]))|1(?:[02-57-9]\\d{2}|1(?:[0-35-9]\\d|4[0-46-9])|6(?:[089]\\d|7[02-8]))|2(?:0(?:[089]\\d|7[02])|[14](?:[089]\\d|7[02-8])|[235-9]\\d{2})|3(?:[0357-9]\\d{2}|1(?:[089]\\d|7[02-6])|2(?:[09]\\d|77|8[0-689])|4(?:0[1-7]|[1-9]\\d)|6(?:[089]\\d|7[02-7]))|[45]\\d{3}|6(?:[02457-9]\\d{2}|1(?:[089]\\d|7[02-8])|3(?:[089]\\d|7[02-68])|6(?:[08]\\d|7[02-8]|9[01]))|7(?:0[07-9]\\d|[1-69]\\d{2}|[78](?:[089]\\d|7[02-8]))|8(?:[0-25-9]\\d{2}|3(?:[089]\\d|7[02-8])|4(?:[0489]\\d|7[02-68]))|9(?:[02-9]\\d{2}|1(?:[0289]\\d|7[2-6])))|9\\d{4})\\d{5}",,,,"8123456789",,,[10]],[,,"00800\\d{7}|1(?:600\\d{6}|80(?:0\\d{4,9}|3\\d{9}))",,,,"1800123456"],[,,"186[12]\\d{9}",,,,"1861123456789",,,[13]],[,,"1860\\d{7}",,,,"18603451234",,,[11]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],"IN",91,"00","0",,,"0",,,,[[,"(\\d{5})(\\d{5})","$1 $2",["600|7(?:[02-8]|19|9[037-9])|8(?:0[015-9]|[1-9])|9","600|7(?:[078]|19[0-5]|2(?:[02356-9]|[14][017-9]|9[389])|3(?:[025-9]|1[07-9]|[34][017-9])|4(?:[0-35689]|[47][017-9])|5(?:[02346-9]|1[017-9]|5[017-9])|6(?:[02-9]|1[0-257-9])|9(?:[089]|31|7[02-9]))|8(?:0(?:[01589]|6[67]|7[02-9])|1(?:[0-57-9]|6[07-9])|2(?:0[07-9]|[14][07-9]|[235-9])|3(?:[03-57-9]|[126][07-9])|[45]|6(?:[02457-9]|[136][07-9])|7(?:[078][07-9]|[1-69])|8(?:[0-25-9]|3[07-9]|4[047-9])|9(?:[02-9]|1[027-9]))|9","600|7(?:0|19[0-5]|2(?:[0235679]|[14][017-9]|8(?:[0-569]|[78][089])|9[389])|3(?:[05-8]|1(?:[089]|7[5-9])|2(?:[5-8]|[0-49][089])|3[017-9]|4(?:[07-9]|11)|9(?:[01689]|[2345][089]|40|7[0189]))|4(?:[056]|1(?:[0135-9]|[23][089]|2[089]|4[089])|2(?:0[089]|[1-7][089]|[89])|3(?:[0-8][089]|9)|4(?:[089]|11|7[02-8])|7(?:[089]|11|7[02-8])|8(?:[0-24-7][089]|[389])|9(?:[0-7][089]|[89]))|5(?:[0346-9]|1[017-9]|2(?:[03-9]|[12][089])|5[017-9])|6(?:[0346-9]|1[0-257-9]|2(?:[0-4]\\d|[5-9][089])|5(?:[0-367][089]|[4589]))|7(?:0(?:[02-9]|1[089])|[1-9])|8(?:[0-79]|8(?:0[0189]|11|8[013-9]|9))|9(?:[089]|313|7(?:[02-8]|9[07-9])))|8(?:0(?:[01589]|6[67]|7(?:[02-8]|9[05-9]))|1(?:[02-57-9]|1(?:[0-35-9]|4[0-46-9])|6(?:[089]|7[02-8]))|2(?:0(?:[089]|7[02])|[14](?:[089]|7[02-8])|[235-9])|3(?:[0357-9]|1(?:[089]|7[02-6])|2(?:[09]|77|8[0-689])|4(?:0[1-7]|[1-9])|6(?:[089]|7[02-7]))|[45]|6(?:[02457-9]|1(?:[089]|7[02-8])|3(?:[089]|7[02-68])|6(?:[08]|7[02-8]|9[01]))|7(?:0[07-9]|[1-69]|7(?:[089]|7[02-8])|8(?:[089]|7[02-8]))|8(?:[0-25-9]|3(?:[089]|7[02-8])|4(?:[0489]|7[02-68]))|9(?:[02-9]|1(?:[0289]|7[2-6])))|9"],"0$1",,1],[,"(\\d{2})(\\d{4})(\\d{4})","$1 $2 $3",["11|2[02]|33|4[04]|79[1-9]|80[2-46]"],"0$1",,1],[,"(\\d{3})(\\d{3})(\\d{4})","$1 $2 $3",["1(?:2[0-249]|3[0-25]|4[145]|[59][14]|7[1257]|[68][1-9])|2(?:1[257]|3[013]|4[01]|5[0137]|6[0158]|78|8[1568]|9[14])|3(?:26|4[1-3]|5[34]|6[01489]|7[02-46]|8[159])|4(?:1[36]|2[1-47]|3[15]|5[12]|6[0-26-9]|7[0-24-9]|8[013-57]|9[014-7])|5(?:1[025]|[36][25]|22|4[28]|5[12]|[78]1|9[15])|6(?:12|[2-4]1|5[17]|6[13]|7[14]|80)|7(?:12|2[14]|3[134]|4[47]|5[15]|[67]1|88)|8(?:16|2[014]|3[126]|6[136]|7[078]|8[34]|91)"],"0$1",,1],[,"(\\d{4})(\\d{3})(\\d{3})","$1 $2 $3",["1(?:[23579]|[468][1-9])|[2-8]"],"0$1",,1],[,"(\\d{2})(\\d{3})(\\d{4})(\\d{3})","$1 $2 $3 $4",["008"],"0$1",,1],[,"(\\d{3})(\\d{3})(\\d{4})","$1 $2 $3",["140"],"$1",,1],[,"(\\d{4})(\\d{2})(\\d{4})","$1 $2 $3",["160","1600"],"$1",,1],[,"(\\d{4})(\\d{4,5})","$1 $2",["180","1800"],"$1",,1],[,"(\\d{4})(\\d{2,4})(\\d{4})","$1 $2 $3",["180","1800"],"$1",,1],[,"(\\d{4})(\\d{3,4})(\\d{4})","$1 $2 $3",["186","1860"],"$1",,1],[,"(\\d{4})(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3 $4",["18[06]"],"$1",,1]],,[,,,,,,,,,[-1]],,,[,,"00800\\d{7}|1(?:600\\d{6}|8(?:0(?:0\\d{4,9}|3\\d{9})|6(?:0\\d{7}|[12]\\d{9})))",,,,"1800123456"],[,,"140\\d{7}",,,,"1409305260",,,[10]],1,,[,,,,,,,,,[-1]]],IO:[,[,,"3\\d{6}",,,,,,,[7]],[,,"37\\d{5}",,,,"3709100"],[,,"38\\d{5}",,,,"3801234"],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],"IO",246,"00",,,,,,,,[[,"(\\d{3})(\\d{4})","$1 $2"]],,[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],IQ:[,[,,"[1-7]\\d{7,9}",,,,,,,[8,9,10],[6,7]],[,,"1\\d{7}|(?:2[13-5]|3[02367]|4[023]|5[03]|6[026])\\d{6,7}",,,,"12345678",,,[8,9],[6,7]],[,,"7[3-9]\\d{8}",,,,"7912345678",,,[10]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],"IQ",964,"00","0",,,"0",,,,[[,"(1)(\\d{3})(\\d{4})","$1 $2 $3",["1"],"0$1"],[,"([2-6]\\d)(\\d{3})(\\d{3,4})","$1 $2 $3",["[2-6]"],"0$1"],[,"(7\\d{2})(\\d{3})(\\d{4})","$1 $2 $3",["7"],"0$1"]],,[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],IR:[,[,,"[1-8]\\d{9}|9(?:[0-4]\\d{8}|9\\d{2,8})",,,,,,,[4,5,6,7,8,9,10]],[,,"(?:(?:1[137]|2[13-68]|3[1458]|4[145]|5[1468]|6[16]|7[1467]|8[13467])\\d{3}|94(?:000|11[1-7]|2\\d{2}|440))\\d{5}",,,,"2123456789",,,[10]],[,,"9(?:0[1-3]\\d{2}|[1-3]\\d{3}|9(?:0\\d{2}|99[89]))\\d{5}",,,,"9123456789",,,[10]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,"(?:[2-6]0\\d|993)\\d{7}",,,,"9932123456",,,[10]],"IR",98,"00","0",,,"0",,,,[[,"(21)(\\d{3,5})","$1 $2",["21"],"0$1"],[,"(\\d{2})(\\d{4})(\\d{4})","$1 $2 $3",["[1-8]"],"0$1"],[,"(\\d{3})(\\d{3})","$1 $2",["9990"],"0$1"],[,"(\\d{3})(\\d{2})(\\d{2,3})","$1 $2 $3",["9990"],"0$1"],[,"(\\d{3})(\\d{3})(\\d{3,4})","$1 $2 $3",["9"],"0$1"]],,[,,"943\\d{7}",,,,"9432123456",,,[10]],,,[,,"(?:9411[1-7]|94440)\\d{5}",,,,"9411110000",,,[10]],[,,"9990\\d{0,6}",,,,"9990123456"],,,[,,,,,,,,,[-1]]],IS:[,[,,"[4-9]\\d{6}|38\\d{7}",,,,,,,[7,9]],[,,"(?:4(?:1[0-24-69]|2[0-7]|[37][0-8]|4[0-245]|5[0-68]|6\\d|8[0-36-8])|5(?:05|[156]\\d|2[02578]|3[0-79]|4[03-7]|7[0-2578]|8[0-35-9]|9[013-689])|87[23])\\d{4}",,,,"4101234",,,[7]],[,,"38[589]\\d{6}|(?:6(?:1[1-8]|2[0-6]|3[027-9]|4[014679]|5[0159]|[67][0-69]|9\\d)|7(?:5[057]|[6-8]\\d)|8(?:2[0-59]|3[0-4]|[469]\\d|5[1-9]|88))\\d{4}",,,,"6111234"],[,,"800\\d{4}",,,,"8001234",,,[7]],[,,"90\\d{5}",,,,"9011234",,,[7]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,"49\\d{5}",,,,"4921234",,,[7]],"IS",354,"1(?:0(?:01|10|20)|100)|00",,,,,,"00",,[[,"(\\d{3})(\\d{4})","$1 $2",["[4-9]"]],[,"(3\\d{2})(\\d{3})(\\d{3})","$1 $2 $3",["3"]]],,[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,"809\\d{4}",,,,"8091234",,,[7]],,,[,,"(?:6(?:2[78]|49|8\\d)|8(?:7[0189]|80)|95[48])\\d{4}",,,,"6271234",,,[7]]],IT:[,[,,"[01589]\\d{5,10}|3(?:[12457-9]\\d{8}|[36]\\d{7,9})",,,,,,,[6,7,8,9,10,11]],[,,"0(?:[26]\\d{4,9}|(?:1(?:[0159]\\d|[27][1-5]|31|4[1-4]|6[1356]|8[2-57])|3(?:[0159]\\d|2[1-4]|3[12]|[48][1-6]|6[2-59]|7[1-7])|4(?:[0159]\\d|[23][1-9]|4[245]|6[1-5]|7[1-4]|81)|5(?:[0159]\\d|2[1-5]|3[2-6]|4[1-79]|6[4-6]|7[1-578]|8[3-8])|7(?:[0159]\\d|2[12]|3[1-7]|4[2346]|6[13569]|7[13-6]|8[1-59])|8(?:[0159]\\d|2[34578]|3[1-356]|[6-8][1-5])|9(?:[0159]\\d|[238][1-5]|4[12]|6[1-8]|7[1-6]))\\d{2,7})",,,,"0212345678"],[,,"3(?:[12457-9]\\d{8}|6\\d{7,8}|3\\d{7,9})",,,,"3123456789",,,[9,10,11]],[,,"80(?:0\\d{6}|3\\d{3})",,,,"800123456",,,[6,9]],[,,"0878\\d{5}|1(?:44|6[346])\\d{6}|89(?:2\\d{3}|4(?:[0-4]\\d{2}|[5-9]\\d{4})|5(?:[0-4]\\d{2}|[5-9]\\d{6})|9\\d{6})",,,,"899123456",,,[6,8,9,10]],[,,"84(?:[08]\\d{6}|[17]\\d{3})",,,,"848123456",,,[6,9]],[,,"1(?:78\\d|99)\\d{6}",,,,"1781234567",,,[9,10]],[,,"55\\d{8}",,,,"5512345678",,,[10]],"IT",39,"00",,,,,,,,[[,"(\\d{2})(\\d{3,4})(\\d{4})","$1 $2 $3",["0[26]|55"]],[,"(0[26])(\\d{4})(\\d{5})","$1 $2 $3",["0[26]"]],[,"(0[26])(\\d{4,6})","$1 $2",["0[26]"]],[,"(0\\d{2})(\\d{3,4})(\\d{4})","$1 $2 $3",["0[13-57-9][0159]"]],[,"(\\d{3})(\\d{3,6})","$1 $2",["0[13-57-9][0159]|8(?:03|4[17]|9[245])","0[13-57-9][0159]|8(?:03|4[17]|9(?:2|[45][0-4]))"]],[,"(0\\d{3})(\\d{3})(\\d{4})","$1 $2 $3",["0[13-57-9][2-46-8]"]],[,"(0\\d{3})(\\d{2,6})","$1 $2",["0[13-57-9][2-46-8]"]],[,"(\\d{3})(\\d{3})(\\d{3,4})","$1 $2 $3",["[13]|8(?:00|4[08]|9[59])","[13]|8(?:00|4[08]|9(?:5[5-9]|9))"]],[,"(\\d{4})(\\d{4})","$1 $2",["894","894[5-9]"]],[,"(\\d{3})(\\d{4})(\\d{4})","$1 $2 $3",["3"]]],,[,,,,,,,,,[-1]],1,,[,,"848\\d{6}",,,,"848123456",,,[9]],[,,,,,,,,,[-1]],1,,[,,,,,,,,,[-1]]],JE:[,[,,"[135789]\\d{6,9}",,,,,,,[10],[6]],[,,"1534[0-24-8]\\d{5}",,,,"1534456789",,,,[6]],[,,"7(?:509\\d|7(?:00[378]|97[7-9])|829\\d|937\\d)\\d{5}",,,,"7797712345"],[,,"80(?:07(?:35|81)|8901)\\d{4}",,,,"8007354567"],[,,"(?:871206|90(?:066[59]|1810|71(?:07|55)))\\d{4}",,,,"9018105678"],[,,"8(?:4(?:4(?:4(?:05|42|69)|703)|5(?:041|800))|70002)\\d{4}",,,,"8447034567"],[,,"701511\\d{4}",,,,"7015115678"],[,,"56\\d{8}",,,,"5612345678"],"JE",44,"00","0"," x",,"0",,,,,,[,,"76(?:0[012]|2[356]|4[0134]|5[49]|6[0-369]|77|81|9[39])\\d{6}",,,,"7640123456"],,,[,,,,,,,,,[-1]],[,,"3(?:0(?:07(?:35|81)|8901)|3\\d{4}|4(?:4(?:4(?:05|42|69)|703)|5(?:041|800))|7(?:0002|1206))\\d{4}|55\\d{8}",,,,"5512345678"],,,[,,,,,,,,,[-1]]],JM:[,[,,"[589]\\d{9}",,,,,,,[10],[7]],[,,"876(?:5(?:0[12]|1[0-468]|2[35]|63)|6(?:0[1-3579]|1[027-9]|[23]\\d|40|5[06]|6[2-589]|7[05]|8[04]|9[4-9])|7(?:0[2-689]|[1-6]\\d|8[056]|9[45])|9(?:0[1-8]|1[02378]|[2-8]\\d|9[2-468]))\\d{4}",,,,"8765123456",,,,[7]],[,,"876(?:2[14-9]\\d|[348]\\d{2}|5(?:0[3-9]|[2-57-9]\\d|6[0-24-9])|7(?:0[07]|7\\d|8[1-47-9]|9[0-36-9])|9(?:[01]9|9[0579]))\\d{4}",,,,"8762101234",,,,[7]],[,,"8(?:00|33|44|55|66|77|88)[2-9]\\d{6}",,,,"8002123456"],[,,"900[2-9]\\d{6}",,,,"9002123456"],[,,,,,,,,,[-1]],[,,"5(?:00|22|33|44|66|77|88)[2-9]\\d{6}",,,,"5002345678"],[,,,,,,,,,[-1]],"JM",1,"011","1",,,"1",,,,,,[,,,,,,,,,[-1]],,"876",[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],JO:[,[,,"[235-9]\\d{7,8}",,,,,,,[8,9]],[,,"(?:2(?:6(?:2[0-35-9]|3[0-57-8]|4[24-7]|5[0-24-8]|[6-8][023]|9[0-3])|7(?:0[1-79]|10|2[014-7]|3[0-689]|4[019]|5[0-3578]))|32(?:0[1-69]|1[1-35-7]|2[024-7]|3\\d|4[0-3]|[57][023]|6[03])|53(?:0[0-3]|[13][023]|2[0-59]|49|5[0-35-9]|6[15]|7[45]|8[1-6]|9[0-36-9])|6(?:2[50]0|3(?:00|33)|4(?:0[0125]|1[2-7]|2[0569]|[38][07-9]|4[025689]|6[0-589]|7\\d|9[0-2])|5(?:[01][056]|2[034]|3[0-57-9]|4[17-8]|5[0-69]|6[0-35-9]|7[1-379]|8[0-68]|9[02-39]))|87(?:[02]0|7[08]|90))\\d{4}",,,,"62001234",,,[8]],[,,"7(?:55|7[025-9]|8[0-25-9]|9[0-25-9])\\d{6}",,,,"790123456",,,[9]],[,,"80\\d{6}",,,,"80012345",,,[8]],[,,"900\\d{5}",,,,"90012345",,,[8]],[,,"85\\d{6}",,,,"85012345",,,[8]],[,,"70\\d{7}",,,,"700123456",,,[9]],[,,,,,,,,,[-1]],"JO",962,"00","0",,,"0",,,,[[,"(\\d)(\\d{3})(\\d{4})","$1 $2 $3",["[2356]|87"],"(0$1)"],[,"(7)(\\d{4})(\\d{4})","$1 $2 $3",["7[457-9]"],"0$1"],[,"(\\d{3})(\\d{5,6})","$1 $2",["70|8[0158]|9"],"0$1"]],,[,,"74(?:66|77)\\d{5}",,,,"746612345",,,[9]],,,[,,,,,,,,,[-1]],[,,"8(?:10|8\\d)\\d{5}",,,,"88101234",,,[8]],,,[,,,,,,,,,[-1]]],JP:[,[,,"[1-9]\\d{8,9}|00(?:[36]\\d{7,14}|7\\d{5,7}|8\\d{7})",,,,,,,[8,9,10,11,12,13,14,15,16,17]],[,,"(?:1(?:1[235-8]|2[3-6]|3[3-9]|4[2-6]|[58][2-8]|6[2-7]|7[2-9]|9[1-9])|2[2-9]\\d|[36][1-9]\\d|4(?:6[02-8]|[2-578]\\d|9[2-59])|5(?:6[1-9]|7[2-8]|[2-589]\\d)|7(?:3[4-9]|4[02-9]|[25-9]\\d)|8(?:3[2-9]|4[5-9]|5[1-9]|8[03-9]|[2679]\\d)|9(?:[679][1-9]|[2-58]\\d))\\d{6}",,,,"312345678",,,[9]],[,,"[7-9]0[1-9]\\d{7}",,,,"9012345678",,,[10]],[,,"120\\d{6}|800\\d{7}|00(?:37\\d{6,13}|66\\d{6,13}|777(?:[01]\\d{2}|5\\d{3}|8\\d{4})|882[1245]\\d{4})",,,,"120123456"],[,,"990\\d{6}",,,,"990123456",,,[9]],[,,,,,,,,,[-1]],[,,"60\\d{7}",,,,"601234567",,,[9]],[,,"50[1-9]\\d{7}",,,,"5012345678",,,[10]],"JP",81,"010","0",,,"0",,,,[[,"(\\d{3})(\\d{3})(\\d{3})","$1-$2-$3",["(?:12|57|99)0"],"0$1"],[,"(\\d{3})(\\d{3})(\\d{4})","$1-$2-$3",["800"],"0$1"],[,"(\\d{4})(\\d{4})","$1-$2",["0077"],"$1"],[,"(\\d{4})(\\d{2})(\\d{3,4})","$1-$2-$3",["0077"],"$1"],[,"(\\d{4})(\\d{2})(\\d{4})","$1-$2-$3",["0088"],"$1"],[,"(\\d{4})(\\d{3})(\\d{3,4})","$1-$2-$3",["00(?:37|66)"],"$1"],[,"(\\d{4})(\\d{4})(\\d{4,5})","$1-$2-$3",["00(?:37|66)"],"$1"],[,"(\\d{4})(\\d{5})(\\d{5,6})","$1-$2-$3",["00(?:37|66)"],"$1"],[,"(\\d{4})(\\d{6})(\\d{6,7})","$1-$2-$3",["00(?:37|66)"],"$1"],[,"(\\d{2})(\\d{4})(\\d{4})","$1-$2-$3",["[2579]0|80[1-9]"],"0$1"],[,"(\\d{4})(\\d)(\\d{4})","$1-$2-$3",["1(?:26|3[79]|4[56]|5[4-68]|6[3-5])|5(?:76|97)|499|746|8(?:3[89]|63|47|51)|9(?:49|80|9[16])","1(?:267|3(?:7[247]|9[278])|4(?:5[67]|66)|5(?:47|58|64|8[67])|6(?:3[245]|48|5[4-68]))|5(?:76|97)9|499[2468]|7468|8(?:3(?:8[78]|96)|636|477|51[24])|9(?:496|802|9(?:1[23]|69))","1(?:267|3(?:7[247]|9[278])|4(?:5[67]|66)|5(?:47|58|64|8[67])|6(?:3[245]|48|5[4-68]))|5(?:769|979[2-69])|499[2468]|7468|8(?:3(?:8[78]|96[2457-9])|636[2-57-9]|477|51[24])|9(?:496|802|9(?:1[23]|69))"],"0$1"],[,"(\\d{3})(\\d{2})(\\d{4})","$1-$2-$3",["1(?:2[3-6]|3[3-9]|4[2-6]|5[2-8]|[68][2-7]|7[2-689]|9[1-578])|2(?:2[03-689]|3[3-58]|4[0-468]|5[04-8]|6[013-8]|7[06-9]|8[02-57-9]|9[13])|4(?:2[28]|3[689]|6[035-7]|7[05689]|80|9[3-5])|5(?:3[1-36-9]|4[4578]|5[013-8]|6[1-9]|7[2-8]|8[14-7]|9[4-9])|7(?:2[15]|3[5-9]|4[02-9]|6[135-8]|7[0-4689]|9[014-9])|8(?:2[49]|3[3-8]|4[5-8]|5[2-9]|6[35-9]|7[579]|8[03-579]|9[2-8])|9(?:[23]0|4[02-46-9]|5[024-79]|6[4-9]|7[2-47-9]|8[02-7]|9[3-7])","1(?:2[3-6]|3[3-9]|4[2-6]|5(?:[236-8]|[45][2-69])|[68][2-7]|7[2-689]|9[1-578])|2(?:2(?:[04-689]|3[23])|3[3-58]|4[0-468]|5(?:5[78]|7[2-4]|[0468][2-9])|6(?:[0135-8]|4[2-5])|7(?:[0679]|8[2-7])|8(?:[024578]|3[25-9]|9[6-9])|9(?:11|3[2-4]))|4(?:2(?:2[2-9]|8[237-9])|3[689]|6[035-7]|7(?:[059][2-8]|[68])|80|9[3-5])|5(?:3[1-36-9]|4[4578]|5[013-8]|6[1-9]|7[2-8]|8[14-7]|9(?:[89][2-8]|[4-7]))|7(?:2[15]|3[5-9]|4[02-9]|6[135-8]|7[0-4689]|9(?:[017-9]|4[6-8]|5[2-478]|6[2-589]))|8(?:2(?:4[4-8]|9[2-8])|3(?:7[2-6]|[3-6][2-9]|8[2-5])|4[5-8]|5[2-9]|6(?:[37]|5[4-7]|6[2-9]|8[2-8]|9[236-9])|7[579]|8[03-579]|9[2-8])|9(?:[23]0|4[02-46-9]|5[024-79]|6[4-9]|7[2-47-9]|8[02-7]|9(?:3[34]|[4-7]))","1(?:2[3-6]|3[3-9]|4[2-6]|5(?:[236-8]|[45][2-69])|[68][2-7]|7[2-689]|9[1-578])|2(?:2(?:[04-689]|3[23])|3[3-58]|4[0-468]|5(?:5[78]|7[2-4]|[0468][2-9])|6(?:[0135-8]|4[2-5])|7(?:[0679]|8[2-7])|8(?:[024578]|3[25-9]|9[6-9])|9(?:11|3[2-4]))|4(?:2(?:2[2-9]|8[237-9])|3[689]|6[035-7]|7(?:[059][2-8]|[68])|80|9[3-5])|5(?:3[1-36-9]|4[4578]|5[013-8]|6[1-9]|7[2-8]|8[14-7]|9(?:[89][2-8]|[4-7]))|7(?:2[15]|3[5-9]|4[02-9]|6[135-8]|7[0-4689]|9(?:[017-9]|4[6-8]|5[2-478]|6[2-589]))|8(?:2(?:4[4-8]|9(?:[3578]|20|4[04-9]|6[56]))|3(?:7(?:[2-5]|6[0-59])|[3-6][2-9]|8[2-5])|4[5-8]|5[2-9]|6(?:[37]|5(?:[467]|5[014-9])|6(?:[2-8]|9[02-69])|8[2-8]|9(?:[236-8]|9[23]))|7[579]|8[03-579]|9[2-8])|9(?:[23]0|4[02-46-9]|5[024-79]|6[4-9]|7[2-47-9]|8[02-7]|9(?:3(?:3[02-9]|4[0-24689])|4[2-69]|[5-7]))","1(?:2[3-6]|3[3-9]|4[2-6]|5(?:[236-8]|[45][2-69])|[68][2-7]|7[2-689]|9[1-578])|2(?:2(?:[04-689]|3[23])|3[3-58]|4[0-468]|5(?:5[78]|7[2-4]|[0468][2-9])|6(?:[0135-8]|4[2-5])|7(?:[0679]|8[2-7])|8(?:[024578]|3[25-9]|9[6-9])|9(?:11|3[2-4]))|4(?:2(?:2[2-9]|8[237-9])|3[689]|6[035-7]|7(?:[059][2-8]|[68])|80|9[3-5])|5(?:3[1-36-9]|4[4578]|5[013-8]|6[1-9]|7[2-8]|8[14-7]|9(?:[89][2-8]|[4-7]))|7(?:2[15]|3[5-9]|4[02-9]|6[135-8]|7[0-4689]|9(?:[017-9]|4[6-8]|5[2-478]|6[2-589]))|8(?:2(?:4[4-8]|9(?:[3578]|20|4[04-9]|6(?:5[25]|60)))|3(?:7(?:[2-5]|6[0-59])|[3-6][2-9]|8[2-5])|4[5-8]|5[2-9]|6(?:[37]|5(?:[467]|5[014-9])|6(?:[2-8]|9[02-69])|8[2-8]|9(?:[236-8]|9[23]))|7[579]|8[03-579]|9[2-8])|9(?:[23]0|4[02-46-9]|5[024-79]|6[4-9]|7[2-47-9]|8[02-7]|9(?:3(?:3[02-9]|4[0-24689])|4[2-69]|[5-7]))"],"0$1"],[,"(\\d{2})(\\d{3})(\\d{4})","$1-$2-$3",["1|2(?:2[37]|5[5-9]|64|78|8[39]|91)|4(?:2[2689]|64|7[347])|5(?:[2-589]|39)|60|8(?:[46-9]|3[279]|2[124589])|9(?:[235-8]|93)","1|2(?:2[37]|5(?:[57]|[68]0|9[19])|64|78|8[39]|917)|4(?:2(?:[68]|20|9[178])|64|7[347])|5(?:[2-589]|39[67])|60|8(?:[46-9]|3[279]|2[124589])|9(?:[235-8]|93[34])","1|2(?:2[37]|5(?:[57]|[68]0|9(?:17|99))|64|78|8[39]|917)|4(?:2(?:[68]|20|9[178])|64|7[347])|5(?:[2-589]|39[67])|60|8(?:[46-9]|3[279]|2[124589])|9(?:[235-8]|93(?:31|4))"],"0$1"],[,"(\\d{3})(\\d{2})(\\d{4})","$1-$2-$3",["2(?:9[14-79]|74|[34]7|[56]9)|82|993"],"0$1"],[,"(\\d)(\\d{4})(\\d{4})","$1-$2-$3",["3|4(?:2[09]|7[01])|6[1-9]"],"0$1"],[,"(\\d{2})(\\d{3})(\\d{4})","$1-$2-$3",["[2479][1-9]"],"0$1"]],[[,"(\\d{3})(\\d{3})(\\d{3})","$1-$2-$3",["(?:12|57|99)0"],"0$1"],[,"(\\d{3})(\\d{3})(\\d{4})","$1-$2-$3",["800"],"0$1"],[,"(\\d{2})(\\d{4})(\\d{4})","$1-$2-$3",["[2579]0|80[1-9]"],"0$1"],[,"(\\d{4})(\\d)(\\d{4})","$1-$2-$3",["1(?:26|3[79]|4[56]|5[4-68]|6[3-5])|5(?:76|97)|499|746|8(?:3[89]|63|47|51)|9(?:49|80|9[16])","1(?:267|3(?:7[247]|9[278])|4(?:5[67]|66)|5(?:47|58|64|8[67])|6(?:3[245]|48|5[4-68]))|5(?:76|97)9|499[2468]|7468|8(?:3(?:8[78]|96)|636|477|51[24])|9(?:496|802|9(?:1[23]|69))","1(?:267|3(?:7[247]|9[278])|4(?:5[67]|66)|5(?:47|58|64|8[67])|6(?:3[245]|48|5[4-68]))|5(?:769|979[2-69])|499[2468]|7468|8(?:3(?:8[78]|96[2457-9])|636[2-57-9]|477|51[24])|9(?:496|802|9(?:1[23]|69))"],"0$1"],[,"(\\d{3})(\\d{2})(\\d{4})","$1-$2-$3",["1(?:2[3-6]|3[3-9]|4[2-6]|5[2-8]|[68][2-7]|7[2-689]|9[1-578])|2(?:2[03-689]|3[3-58]|4[0-468]|5[04-8]|6[013-8]|7[06-9]|8[02-57-9]|9[13])|4(?:2[28]|3[689]|6[035-7]|7[05689]|80|9[3-5])|5(?:3[1-36-9]|4[4578]|5[013-8]|6[1-9]|7[2-8]|8[14-7]|9[4-9])|7(?:2[15]|3[5-9]|4[02-9]|6[135-8]|7[0-4689]|9[014-9])|8(?:2[49]|3[3-8]|4[5-8]|5[2-9]|6[35-9]|7[579]|8[03-579]|9[2-8])|9(?:[23]0|4[02-46-9]|5[024-79]|6[4-9]|7[2-47-9]|8[02-7]|9[3-7])","1(?:2[3-6]|3[3-9]|4[2-6]|5(?:[236-8]|[45][2-69])|[68][2-7]|7[2-689]|9[1-578])|2(?:2(?:[04-689]|3[23])|3[3-58]|4[0-468]|5(?:5[78]|7[2-4]|[0468][2-9])|6(?:[0135-8]|4[2-5])|7(?:[0679]|8[2-7])|8(?:[024578]|3[25-9]|9[6-9])|9(?:11|3[2-4]))|4(?:2(?:2[2-9]|8[237-9])|3[689]|6[035-7]|7(?:[059][2-8]|[68])|80|9[3-5])|5(?:3[1-36-9]|4[4578]|5[013-8]|6[1-9]|7[2-8]|8[14-7]|9(?:[89][2-8]|[4-7]))|7(?:2[15]|3[5-9]|4[02-9]|6[135-8]|7[0-4689]|9(?:[017-9]|4[6-8]|5[2-478]|6[2-589]))|8(?:2(?:4[4-8]|9[2-8])|3(?:7[2-6]|[3-6][2-9]|8[2-5])|4[5-8]|5[2-9]|6(?:[37]|5[4-7]|6[2-9]|8[2-8]|9[236-9])|7[579]|8[03-579]|9[2-8])|9(?:[23]0|4[02-46-9]|5[024-79]|6[4-9]|7[2-47-9]|8[02-7]|9(?:3[34]|[4-7]))","1(?:2[3-6]|3[3-9]|4[2-6]|5(?:[236-8]|[45][2-69])|[68][2-7]|7[2-689]|9[1-578])|2(?:2(?:[04-689]|3[23])|3[3-58]|4[0-468]|5(?:5[78]|7[2-4]|[0468][2-9])|6(?:[0135-8]|4[2-5])|7(?:[0679]|8[2-7])|8(?:[024578]|3[25-9]|9[6-9])|9(?:11|3[2-4]))|4(?:2(?:2[2-9]|8[237-9])|3[689]|6[035-7]|7(?:[059][2-8]|[68])|80|9[3-5])|5(?:3[1-36-9]|4[4578]|5[013-8]|6[1-9]|7[2-8]|8[14-7]|9(?:[89][2-8]|[4-7]))|7(?:2[15]|3[5-9]|4[02-9]|6[135-8]|7[0-4689]|9(?:[017-9]|4[6-8]|5[2-478]|6[2-589]))|8(?:2(?:4[4-8]|9(?:[3578]|20|4[04-9]|6[56]))|3(?:7(?:[2-5]|6[0-59])|[3-6][2-9]|8[2-5])|4[5-8]|5[2-9]|6(?:[37]|5(?:[467]|5[014-9])|6(?:[2-8]|9[02-69])|8[2-8]|9(?:[236-8]|9[23]))|7[579]|8[03-579]|9[2-8])|9(?:[23]0|4[02-46-9]|5[024-79]|6[4-9]|7[2-47-9]|8[02-7]|9(?:3(?:3[02-9]|4[0-24689])|4[2-69]|[5-7]))","1(?:2[3-6]|3[3-9]|4[2-6]|5(?:[236-8]|[45][2-69])|[68][2-7]|7[2-689]|9[1-578])|2(?:2(?:[04-689]|3[23])|3[3-58]|4[0-468]|5(?:5[78]|7[2-4]|[0468][2-9])|6(?:[0135-8]|4[2-5])|7(?:[0679]|8[2-7])|8(?:[024578]|3[25-9]|9[6-9])|9(?:11|3[2-4]))|4(?:2(?:2[2-9]|8[237-9])|3[689]|6[035-7]|7(?:[059][2-8]|[68])|80|9[3-5])|5(?:3[1-36-9]|4[4578]|5[013-8]|6[1-9]|7[2-8]|8[14-7]|9(?:[89][2-8]|[4-7]))|7(?:2[15]|3[5-9]|4[02-9]|6[135-8]|7[0-4689]|9(?:[017-9]|4[6-8]|5[2-478]|6[2-589]))|8(?:2(?:4[4-8]|9(?:[3578]|20|4[04-9]|6(?:5[25]|60)))|3(?:7(?:[2-5]|6[0-59])|[3-6][2-9]|8[2-5])|4[5-8]|5[2-9]|6(?:[37]|5(?:[467]|5[014-9])|6(?:[2-8]|9[02-69])|8[2-8]|9(?:[236-8]|9[23]))|7[579]|8[03-579]|9[2-8])|9(?:[23]0|4[02-46-9]|5[024-79]|6[4-9]|7[2-47-9]|8[02-7]|9(?:3(?:3[02-9]|4[0-24689])|4[2-69]|[5-7]))"],"0$1"],[,"(\\d{2})(\\d{3})(\\d{4})","$1-$2-$3",["1|2(?:2[37]|5[5-9]|64|78|8[39]|91)|4(?:2[2689]|64|7[347])|5(?:[2-589]|39)|60|8(?:[46-9]|3[279]|2[124589])|9(?:[235-8]|93)","1|2(?:2[37]|5(?:[57]|[68]0|9[19])|64|78|8[39]|917)|4(?:2(?:[68]|20|9[178])|64|7[347])|5(?:[2-589]|39[67])|60|8(?:[46-9]|3[279]|2[124589])|9(?:[235-8]|93[34])","1|2(?:2[37]|5(?:[57]|[68]0|9(?:17|99))|64|78|8[39]|917)|4(?:2(?:[68]|20|9[178])|64|7[347])|5(?:[2-589]|39[67])|60|8(?:[46-9]|3[279]|2[124589])|9(?:[235-8]|93(?:31|4))"],"0$1"],[,"(\\d{3})(\\d{2})(\\d{4})","$1-$2-$3",["2(?:9[14-79]|74|[34]7|[56]9)|82|993"],"0$1"],[,"(\\d)(\\d{4})(\\d{4})","$1-$2-$3",["3|4(?:2[09]|7[01])|6[1-9]"],"0$1"],[,"(\\d{2})(\\d{3})(\\d{4})","$1-$2-$3",["[2479][1-9]"],"0$1"]],[,,"20\\d{8}",,,,"2012345678",,,[10]],,,[,,"00(?:37\\d{6,13}|66\\d{6,13}|777(?:[01]\\d{2}|5\\d{3}|8\\d{4})|882[1245]\\d{4})",,,,"00777012"],[,,"570\\d{6}",,,,"570123456",,,[9]],1,,[,,,,,,,,,[-1]]],KE:[,[,,"20\\d{6,7}|[4-9]\\d{6,9}",,,,,,,[7,8,9,10]],[,,"20\\d{6,7}|4(?:0\\d{6,7}|[136]\\d{7}|[245]\\d{5,7})|5(?:[08]\\d{7}|[1-79]\\d{5,7})|6(?:[01457-9]\\d{5,7}|2\\d{7}|6\\d{6,7})",,,,"202012345",,,[7,8,9]],[,,"7(?:[0-3679]\\d|4[0-479]|5[0-6]|8[0-25-9])\\d{6}",,,,"712123456",,,[9]],[,,"800[24-8]\\d{5,6}",,,,"800223456",,,[9,10]],[,,"900[02-9]\\d{5}",,,,"900223456",,,[9]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],"KE",254,"000","0",,,"005|0",,,,[[,"(\\d{2})(\\d{5,7})","$1 $2",["[24-6]"],"0$1"],[,"(\\d{3})(\\d{6})","$1 $2",["7"],"0$1"],[,"(\\d{3})(\\d{3})(\\d{3,4})","$1 $2 $3",["[89]"],"0$1"]],,[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],KG:[,[,,"[235-8]\\d{8,9}",,,,,,,[9,10],[5,6]],[,,"(?:3(?:1(?:[256]\\d|3[1-9]|47)|2(?:22|3[0-479]|6[0-7])|4(?:22|5[6-9]|6\\d)|5(?:22|3[4-7]|59|6\\d)|6(?:22|5[35-7]|6\\d)|7(?:22|3[468]|4[1-9]|59|[67]\\d)|9(?:22|4[1-8]|6\\d))|6(?:09|12|2[2-4])\\d)\\d{5}",,,,"312123456",,,[9],[5,6]],[,,"(?:20[0-35]|5[124-7]\\d|7[07]\\d)\\d{6}",,,,"700123456",,,[9]],[,,"800\\d{6,7}",,,,"800123456"],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],"KG",996,"00","0",,,"0",,,,[[,"(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3",["[25-7]|31[25]"],"0$1"],[,"(\\d{4})(\\d{5})","$1 $2",["3(?:1[36]|[2-9])"],"0$1"],[,"(\\d{3})(\\d{3})(\\d)(\\d{3})","$1 $2 $3 $4",["8"],"0$1"]],,[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],KH:[,[,,"[1-9]\\d{7,9}",,,,,,,[8,9,10],[6,7]],[,,"(?:2[3-6]|3[2-6]|4[2-4]|[5-7][2-5])(?:[237-9]|4[56]|5\\d|6\\d?)\\d{5}|23(?:4[234]|8\\d{2})\\d{4}",,,,"23756789",,,[8,9],[6,7]],[,,"(?:1(?:[013-79]\\d|[28]\\d{1,2})|2[3-6]48|3(?:[18]\\d{2}|[2-6]48)|4[2-4]48|5[2-5]48|6(?:[016-9]\\d|[2-5]48)|7(?:[07-9]\\d|[16]\\d{2}|[2-5]48)|8(?:[013-79]\\d|8\\d{2})|9(?:6\\d{2}|7\\d{1,2}|[0-589]\\d))\\d{5}",,,,"91234567",,,[8,9]],[,,"1800(?:1\\d|2[019])\\d{4}",,,,"1800123456",,,[10]],[,,"1900(?:1\\d|2[09])\\d{4}",,,,"1900123456",,,[10]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],"KH",855,"00[14-9]","0",,,"0",,,,[[,"(\\d{2})(\\d{3})(\\d{3,4})","$1 $2 $3",["1\\d[1-9]|[2-9]"],"0$1"],[,"(1[89]00)(\\d{3})(\\d{3})","$1 $2 $3",["1[89]0"]]],,[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],KI:[,[,,"[2458]\\d{4}|3\\d{4,7}|7\\d{7}",,,,,,,[5,8]],[,,"(?:[24]\\d|3[1-9]|50|8[0-5])\\d{3}|7(?:27|31|5[0-4])\\d{5}",,,,"31234"],[,,"7[23]0\\d{5}",,,,"72012345",,,[8]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,"30(?:0[01]\\d{2}|12(?:11|20))\\d{2}",,,,"30010000",,,[8]],"KI",686,"00",,,,"0",,,,,,[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],KM:[,[,,"[3478]\\d{6}",,,,,,,[7]],[,,"7[4-7]\\d{5}",,,,"7712345"],[,,"[34]\\d{6}",,,,"3212345"],[,,,,,,,,,[-1]],[,,"(?:39[01]|8\\d{2})\\d{4}",,,,"8001234"],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],"KM",269,"00",,,,,,,,[[,"(\\d{3})(\\d{2})(\\d{2})","$1 $2 $3"]],,[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],KN:[,[,,"[589]\\d{9}",,,,,,,[10],[7]],[,,"869(?:2(?:29|36)|302|4(?:6[015-9]|70))\\d{4}",,,,"8692361234",,,,[7]],[,,"869(?:5(?:5[6-8]|6[5-7])|66\\d|76[02-7])\\d{4}",,,,"8697652917",,,,[7]],[,,"8(?:00|33|44|55|66|77|88)[2-9]\\d{6}",,,,"8002123456"],[,,"900[2-9]\\d{6}",,,,"9002123456"],[,,,,,,,,,[-1]],[,,"5(?:00|22|33|44|66|77|88)[2-9]\\d{6}",,,,"5002345678"],[,,,,,,,,,[-1]],"KN",1,"011","1",,,"1",,,,,,[,,,,,,,,,[-1]],,"869",[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],KP:[,[,,"1\\d{9}|[28]\\d{7}",,,,,,,[8,10],[6,7]],[,,"2\\d{7}|85\\d{6}",,,,"21234567",,,[8],[6,7]],[,,"19[123]\\d{7}",,,,"1921234567",,,[10]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],"KP",850,"00|99","0",,,"0",,,,[[,"(\\d{3})(\\d{3})(\\d{4})","$1 $2 $3",["1"],"0$1"],[,"(\\d)(\\d{3})(\\d{4})","$1 $2 $3",["2"],"0$1"],[,"(\\d{2})(\\d{3})(\\d{3})","$1 $2 $3",["8"],"0$1"]],,[,,,,,,,,,[-1]],,,[,,"2(?:[0-24-9]\\d{2}|3(?:[0-79]\\d|8[02-9]))\\d{4}",,,,"23821234",,,[8]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],KR:[,[,,"007\\d{9,11}|[1-7]\\d{3,9}|8\\d{8}",,,,,,,[4,5,6,8,9,10,12,13,14],[3,7]],[,,"(?:2|3[1-3]|[46][1-4]|5[1-5])(?:1\\d{2,3}|[1-9]\\d{6,7})",,,,"22123456",,,[4,5,6,8,9,10],[3,7]],[,,"1[0-26-9]\\d{7,8}",,,,"1000000000",,,[9,10]],[,,"(?:00798\\d{0,2}|80)\\d{7}",,,,"801234567",,,[9,12,13,14]],[,,"60[2-9]\\d{6}",,,,"602345678",,,[9]],[,,,,,,,,,[-1]],[,,"50\\d{8}",,,,"5012345678",,,[10]],[,,"70\\d{8}",,,,"7012345678",,,[10]],"KR",82,"00(?:[124-68]|3\\d{2}|7(?:[0-8]\\d|9[0-79]))","0",,,"0(8[1-46-8]|85\\d{2})?",,,,[[,"(\\d{5})(\\d{3,4})(\\d{4})","$1 $2 $3",["00798"],"$1","0$CC-$1"],[,"(\\d{5})(\\d{2})(\\d{3})(\\d{4})","$1 $2 $3 $4",["00798"],"$1","0$CC-$1"],[,"(\\d{2})(\\d{4})(\\d{4})","$1-$2-$3",["1(?:0|1[19]|[69]9|5[458])|[57]0","1(?:0|1[19]|[69]9|5(?:44|59|8))|[57]0"],"0$1","0$CC-$1"],[,"(\\d{2})(\\d{3,4})(\\d{4})","$1-$2-$3",["1(?:[01]|5[1-4]|6[2-8]|[7-9])|[68]0|[3-6][1-9][1-9]","1(?:[01]|5(?:[1-3]|4[56])|6[2-8]|[7-9])|[68]0|[3-6][1-9][1-9]"],"0$1","0$CC-$1"],[,"(\\d{3})(\\d)(\\d{4})","$1-$2-$3",["131","1312"],"0$1","0$CC-$1"],[,"(\\d{3})(\\d{2})(\\d{4})","$1-$2-$3",["131","131[13-9]"],"0$1","0$CC-$1"],[,"(\\d{3})(\\d{3})(\\d{4})","$1-$2-$3",["13[2-9]"],"0$1","0$CC-$1"],[,"(\\d{2})(\\d{2})(\\d{3})(\\d{4})","$1-$2-$3-$4",["30"],"0$1","0$CC-$1"],[,"(\\d)(\\d{3,4})(\\d{4})","$1-$2-$3",["2[1-9]"],"0$1","0$CC-$1"],[,"(\\d)(\\d{3,4})","$1-$2",["21[0-46-9]"],"0$1","0$CC-$1"],[,"(\\d{2})(\\d{3,4})","$1-$2",["[3-6][1-9]1","[3-6][1-9]1(?:[0-46-9])"],"0$1","0$CC-$1"],[,"(\\d{4})(\\d{4})","$1-$2",["1(?:5[246-9]|6[04678]|8[03579])","1(?:5(?:22|44|66|77|88|99)|6(?:00|44|6[16]|70|88)|8(?:00|33|55|77|99))"],"$1","0$CC-$1"]],[[,"(\\d{2})(\\d{4})(\\d{4})","$1-$2-$3",["1(?:0|1[19]|[69]9|5[458])|[57]0","1(?:0|1[19]|[69]9|5(?:44|59|8))|[57]0"],"0$1","0$CC-$1"],[,"(\\d{2})(\\d{3,4})(\\d{4})","$1-$2-$3",["1(?:[01]|5[1-4]|6[2-8]|[7-9])|[68]0|[3-6][1-9][1-9]","1(?:[01]|5(?:[1-3]|4[56])|6[2-8]|[7-9])|[68]0|[3-6][1-9][1-9]"],"0$1","0$CC-$1"],[,"(\\d{3})(\\d)(\\d{4})","$1-$2-$3",["131","1312"],"0$1","0$CC-$1"],[,"(\\d{3})(\\d{2})(\\d{4})","$1-$2-$3",["131","131[13-9]"],"0$1","0$CC-$1"],[,"(\\d{3})(\\d{3})(\\d{4})","$1-$2-$3",["13[2-9]"],"0$1","0$CC-$1"],[,"(\\d{2})(\\d{2})(\\d{3})(\\d{4})","$1-$2-$3-$4",["30"],"0$1","0$CC-$1"],[,"(\\d)(\\d{3,4})(\\d{4})","$1-$2-$3",["2[1-9]"],"0$1","0$CC-$1"],[,"(\\d)(\\d{3,4})","$1-$2",["21[0-46-9]"],"0$1","0$CC-$1"],[,"(\\d{2})(\\d{3,4})","$1-$2",["[3-6][1-9]1","[3-6][1-9]1(?:[0-46-9])"],"0$1","0$CC-$1"],[,"(\\d{4})(\\d{4})","$1-$2",["1(?:5[246-9]|6[04678]|8[03579])","1(?:5(?:22|44|66|77|88|99)|6(?:00|44|6[16]|70|88)|8(?:00|33|55|77|99))"],"$1","0$CC-$1"]],[,,"15\\d{7,8}",,,,"1523456789",,,[9,10]],,,[,,"00798\\d{7,9}",,,,"007981234567",,,[12,13,14]],[,,"1(?:5(?:22|44|66|77|88|99)|6(?:00|44|6[16]|70|88)|8(?:00|33|55|77|99))\\d{4}",,,,"15441234",,,[8]],1,,[,,,,,,,,,[-1]]],KW:[,[,,"[12569]\\d{6,7}",,,,,,,[7,8]],[,,"(?:18\\d|2(?:[23]\\d{2}|4(?:[1-35-9]\\d|44)|5(?:0[034]|[2-46]\\d|5[1-3]|7[1-7])))\\d{4}",,,,"22345678"],[,,"(?:5(?:[05]\\d{2}|1[0-7]\\d|2(?:22|5[25])|66\\d)|6(?:0[034679]\\d|222|5[015-9]\\d|6\\d{2}|7[067]\\d|9[0369]\\d)|9(?:0[09]\\d|22\\d|4[01479]\\d|55\\d|6[0679]\\d|[79]\\d{2}|8[057-9]\\d))\\d{4}",,,,"50012345",,,[8]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],"KW",965,"00",,,,,,,,[[,"(\\d{4})(\\d{3,4})","$1 $2",["[16]|2(?:[0-35-9]|4[0-35-9])|9[024-9]|52[25]"]],[,"(\\d{3})(\\d{5})","$1 $2",["244|5(?:[015]|66)"]]],,[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],KY:[,[,,"[3589]\\d{9}",,,,,,,[10],[7]],[,,"345(?:2(?:22|44)|444|6(?:23|38|40)|7(?:4[35-79]|6[6-9]|77)|8(?:00|1[45]|25|[48]8)|9(?:14|4[035-9]))\\d{4}",,,,"3452221234",,,,[7]],[,,"345(?:32[1-9]|5(?:1[67]|2[5-7]|4[6-8]|76)|9(?:1[67]|2[2-9]|3[689]))\\d{4}",,,,"3453231234",,,,[7]],[,,"8(?:00|33|44|55|66|77|88)[2-9]\\d{6}",,,,"8002345678"],[,,"900[2-9]\\d{6}|345976\\d{4}",,,,"9002345678"],[,,,,,,,,,[-1]],[,,"5(?:00|22|33|44|66|77|88)[2-9]\\d{6}",,,,"5002345678"],[,,,,,,,,,[-1]],"KY",1,"011","1",,,"1",,,,,,[,,"345849\\d{4}",,,,"3458491234"],,"345",[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],KZ:[,[,,"(?:33\\d|7\\d{2}|80[09])\\d{7}",,,,,,,[10]],[,,"33622\\d{5}|7(?:1(?:0(?:[23]\\d|4[0-3]|59|63)|1(?:[23]\\d|4[0-79]|59)|2(?:[23]\\d|59)|3(?:2\\d|3[0-79]|4[0-35-9]|59)|4(?:[24]\\d|3[013-9]|5[1-9])|5(?:2\\d|3[1-9]|4[0-7]|59)|6(?:[234]\\d|5[19]|61)|72\\d|8(?:[27]\\d|3[1-46-9]|4[0-5]))|2(?:1(?:[23]\\d|4[46-9]|5[3469])|2(?:2\\d|3[0679]|46|5[12679])|3(?:[234]\\d|5[139])|4(?:2\\d|3[1235-9]|59)|5(?:[23]\\d|4[01246-8]|59|61)|6(?:2\\d|3[1-9]|4[0-4]|59)|7(?:[2379]\\d|40|5[279])|8(?:[23]\\d|4[0-3]|59)|9(?:2\\d|3[124578]|59)))\\d{5}",,,,"7123456789"],[,,"7(?:0[012578]|47|6[02-4]|7[15-8]|85)\\d{7}",,,,"7710009998"],[,,"800\\d{7}",,,,"8001234567"],[,,"809\\d{7}",,,,"8091234567"],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,"751\\d{7}",,,,"7511234567"],"KZ",7,"810","8",,,"8",,"8~10",,,,[,,,,,,,,,[-1]],,,[,,"751\\d{7}",,,,"7511234567"],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],LA:[,[,,"[2-8]\\d{7,9}",,,,,,,[8,9,10],[6]],[,,"(?:2[13]|3(?:0\\d|[14])|[5-7][14]|41|8[1468])\\d{6}",,,,"21212862",,,[8,9],[6]],[,,"20(?:2[2389]|5[4-689]|7[6-8]|9[15-9])\\d{6}",,,,"2023123456",,,[10]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],"LA",856,"00","0",,,"0",,,,[[,"(20)(\\d{2})(\\d{3})(\\d{3})","$1 $2 $3 $4",["20"],"0$1"],[,"([2-8]\\d)(\\d{3})(\\d{3})","$1 $2 $3",["2[13]|3[14]|[4-8]"],"0$1"],[,"(30)(\\d{2})(\\d{2})(\\d{3})","$1 $2 $3 $4",["30"],"0$1"]],,[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],LB:[,[,,"[13-9]\\d{6,7}",,,,,,,[7,8]],[,,"(?:[14-6]\\d{2}|7(?:[2-57]\\d|62|8[0-7]|9[04-9])|8[02-9]\\d|9\\d{2})\\d{4}",,,,"1123456",,,[7]],[,,"(?:3\\d|7(?:[01]\\d|6[013-9]|8[89]|9[1-3])|81\\d)\\d{5}",,,,"71123456"],[,,,,,,,,,[-1]],[,,"9[01]\\d{6}",,,,"90123456",,,[8]],[,,"80\\d{6}",,,,"80123456",,,[8]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],"LB",961,"00","0",,,"0",,,,[[,"(\\d)(\\d{3})(\\d{3})","$1 $2 $3",["[13-6]|7(?:[2-57]|62|8[0-7]|9[04-9])|8[02-9]|9"],"0$1"],[,"([7-9]\\d)(\\d{3})(\\d{3})","$1 $2 $3",["[89][01]|7(?:[01]|6[013-9]|8[89]|9[1-3])"]]],,[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],LC:[,[,,"[5789]\\d{9}",,,,,,,[10],[7]],[,,"758(?:4(?:30|5[0-9]|6[2-9]|8[0-2])|57[0-2]|638)\\d{4}",,,,"7584305678",,,,[7]],[,,"758(?:28[4-7]|384|4(?:6[01]|8[4-9])|5(?:1[89]|20|84)|7(?:1[2-9]|2[0-8]))\\d{4}",,,,"7582845678",,,,[7]],[,,"8(?:00|33|44|55|66|77|88)[2-9]\\d{6}",,,,"8002123456"],[,,"900[2-9]\\d{6}",,,,"9002123456"],[,,,,,,,,,[-1]],[,,"5(?:00|22|33|44|66|77|88)[2-9]\\d{6}",,,,"5002345678"],[,,,,,,,,,[-1]],"LC",1,"011","1",,,"1",,,,,,[,,,,,,,,,[-1]],,"758",[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],LI:[,[,,"6\\d{8}|[23789]\\d{6}",,,,,,,[7,9]],[,,"(?:2(?:01|1[27]|3\\d|6[02-578]|96)|3(?:7[0135-7]|8[048]|9[0269]))\\d{4}",,,,"2345678",,,[7]],[,,"6(?:5(?:09|1\\d|20)|6(?:0[0-6]|10|2[06-9]|39))\\d{5}|7(?:[37-9]\\d|42|56)\\d{4}",,,,"660234567"],[,,"80(?:02[28]|9\\d{2})\\d{2}",,,,"8002222",,,[7]],[,,"90(?:02[258]|1(?:23|3[14])|66[136])\\d{2}",,,,"9002222",,,[7]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],"LI",423,"00","0",,,"0|10(?:01|20|66)",,,,[[,"(\\d{3})(\\d{2})(\\d{2})","$1 $2 $3",["[23789]"]],[,"(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3",["6[56]"]],[,"(69)(7\\d{2})(\\d{4})","$1 $2 $3",["697"]]],,[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,"870(?:28|87)\\d{2}",,,,"8702812",,,[7]],,,[,,"697(?:42|56|[78]\\d)\\d{4}",,,,"697861234",,,[9]]],LK:[,[,,"[1-9]\\d{8}",,,,,,,[9],[7]],[,,"(?:[189]1|2[13-7]|3[1-8]|4[157]|5[12457]|6[35-7])[2-57]\\d{6}",,,,"112345678",,,,[7]],[,,"7[0125-8]\\d{7}",,,,"712345678"],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],"LK",94,"00","0",,,"0",,,,[[,"(\\d{2})(\\d{1})(\\d{6})","$1 $2 $3",["[1-689]"],"0$1"],[,"(\\d{2})(\\d{3})(\\d{4})","$1 $2 $3",["7"],"0$1"]],,[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],LR:[,[,,"2\\d{7,8}|[378]\\d{8}|4\\d{6}|5\\d{6,8}",,,,,,,[7,8,9]],[,,"2\\d{7}",,,,"21234567",,,[8]],[,,"(?:20\\d{3}|330\\d{2}|4[67]\\d|5(?:55)?\\d{2}|77\\d{3}|88\\d{3})\\d{4}",,,,"770123456",,,[7,9]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,"332(?:02|[25]\\d)\\d{4}",,,,"332021234",,,[9]],"LR",231,"00","0",,,"0",,,,[[,"(2\\d)(\\d{3})(\\d{3})","$1 $2 $3",["2"],"0$1"],[,"([4-5])(\\d{3})(\\d{3})","$1 $2 $3",["[45]"],"0$1"],[,"(\\d{2})(\\d{3})(\\d{4})","$1 $2 $3",["[23578]"],"0$1"]],,[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],LS:[,[,,"[2568]\\d{7}",,,,,,,[8]],[,,"2\\d{7}",,,,"22123456"],[,,"[56]\\d{7}",,,,"50123456"],[,,"800[256]\\d{4}",,,,"80021234"],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],"LS",266,"00",,,,,,,,[[,"(\\d{4})(\\d{4})","$1 $2"]],,[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],LT:[,[,,"[3-9]\\d{7}",,,,,,,[8]],[,,"(?:3[1478]|4[124-6]|52)\\d{6}",,,,"31234567"],[,,"6\\d{7}",,,,"61234567"],[,,"800\\d{5}",,,,"80012345"],[,,"9(?:0[0239]|10)\\d{5}",,,,"90012345"],[,,"808\\d{5}",,,,"80812345"],[,,"700\\d{5}",,,,"70012345"],[,,,,,,,,,[-1]],"LT",370,"00","8",,,"[08]",,,,[[,"([34]\\d)(\\d{6})","$1 $2",["37|4(?:1|5[45]|6[2-4])"],"(8-$1)",,1],[,"([3-6]\\d{2})(\\d{5})","$1 $2",["3[148]|4(?:[24]|6[09])|528|6"],"(8-$1)",,1],[,"([7-9]\\d{2})(\\d{2})(\\d{3})","$1 $2 $3",["[7-9]"],"8 $1",,1],[,"(5)(2\\d{2})(\\d{4})","$1 $2 $3",["52[0-79]"],"(8-$1)",,1]],,[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,"70[67]\\d{5}",,,,"70712345"],,,[,,,,,,,,,[-1]]],LU:[,[,,"[24-9]\\d{3,10}|3(?:[0-46-9]\\d{2,9}|5[013-9]\\d{1,8})",,,,,,,[4,5,6,7,8,9,10,11]],[,,"(?:2[2-9]\\d{2,9}|(?:[3457]\\d{2}|8(?:0[2-9]|[13-9]\\d)|9(?:0[89]|[2-579]\\d))\\d{1,8})",,,,"27123456"],[,,"6[25-79][18]\\d{6}",,,,"628123456",,,[9]],[,,"800\\d{5}",,,,"80012345",,,[8]],[,,"90[015]\\d{5}",,,,"90012345",,,[8]],[,,"801\\d{5}",,,,"80112345",,,[8]],[,,"70\\d{6}",,,,"70123456",,,[8]],[,,"20(?:1\\d{5}|[2-689]\\d{1,7})",,,,"20201234",,,[4,5,6,7,8,9,10]],"LU",352,"00",,,,"(15(?:0[06]|1[12]|35|4[04]|55|6[26]|77|88|99)\\d)",,,,[[,"(\\d{2})(\\d{3})","$1 $2",["[2-5]|7[1-9]|[89](?:[1-9]|0[2-9])"],,"$CC $1"],[,"(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3",["[2-5]|7[1-9]|[89](?:[1-9]|0[2-9])"],,"$CC $1"],[,"(\\d{2})(\\d{2})(\\d{3})","$1 $2 $3",["20"],,"$CC $1"],[,"(\\d{2})(\\d{2})(\\d{2})(\\d{1,2})","$1 $2 $3 $4",["2(?:[0367]|4[3-8])"],,"$CC $1"],[,"(\\d{2})(\\d{2})(\\d{2})(\\d{3})","$1 $2 $3 $4",["20"],,"$CC $1"],[,"(\\d{2})(\\d{2})(\\d{2})(\\d{2})(\\d{1,2})","$1 $2 $3 $4 $5",["2(?:[0367]|4[3-8])"],,"$CC $1"],[,"(\\d{2})(\\d{2})(\\d{2})(\\d{1,4})","$1 $2 $3 $4",["2(?:[12589]|4[12])|[3-5]|7[1-9]|8(?:[1-9]|0[2-9])|9(?:[1-9]|0[2-46-9])"],,"$CC $1"],[,"(\\d{3})(\\d{2})(\\d{3})","$1 $2 $3",["70|80[01]|90[015]"],,"$CC $1"],[,"(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3",["6"],,"$CC $1"]],,[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],LV:[,[,,"[2689]\\d{7}",,,,,,,[8]],[,,"6\\d{7}",,,,"63123456"],[,,"2\\d{7}",,,,"21234567"],[,,"80\\d{6}",,,,"80123456"],[,,"90\\d{6}",,,,"90123456"],[,,"81\\d{6}",,,,"81123456"],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],"LV",371,"00",,,,,,,,[[,"([2689]\\d)(\\d{3})(\\d{3})","$1 $2 $3"]],,[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],LY:[,[,,"[25679]\\d{8}",,,,,,,[9],[7]],[,,"(?:2[1345]|5[1347]|6[123479]|71)\\d{7}",,,,"212345678",,,,[7]],[,,"9[1-6]\\d{7}",,,,"912345678"],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],"LY",218,"00","0",,,"0",,,,[[,"([25679]\\d)(\\d{7})","$1-$2",,"0$1"]],,[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],MA:[,[,,"[5-9]\\d{8}",,,,,,,[9]],[,,"5(?:2(?:[015-79]\\d|2[02-9]|3[2-57]|4[2-8]|8[235-7])\\d|3(?:[0-48]\\d|[57][2-9]|6[2-8]|9[3-9])\\d|4[067]\\d{2}|5[03]\\d{2})\\d{4}",,,,"520123456"],[,,"(?:6(?:[0-79]\\d|8[0-247-9])|7(?:[07][07]|6[12]))\\d{6}",,,,"650123456"],[,,"80\\d{7}",,,,"801234567"],[,,"89\\d{7}",,,,"891234567"],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,"5924[01]\\d{4}",,,,"592401234"],"MA",212,"00","0",,,"0",,,,[[,"([5-7]\\d{2})(\\d{6})","$1-$2",["5(?:2[015-7]|3[0-4])|[67]"],"0$1"],[,"([58]\\d{3})(\\d{5})","$1-$2",["5(?:2[2-489]|3[5-9]|92)|892","5(?:2(?:[2-48]|9[0-7])|3(?:[5-79]|8[0-7])|924)|892"],"0$1"],[,"(5\\d{4})(\\d{4})","$1-$2",["5(?:29|38)","5(?:29|38)[89]"],"0$1"],[,"([5]\\d{2})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",["5(?:4[067]|5[03])"],"0$1"],[,"(8[09])(\\d{7})","$1-$2",["8(?:0|9[013-9])"],"0$1"]],,[,,,,,,,,,[-1]],1,,[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],MC:[,[,,"[34689]\\d{7,8}",,,,,,,[8,9]],[,,"870\\d{5}|9[2-47-9]\\d{6}",,,,"99123456",,,[8]],[,,"3\\d{7}|4(?:4\\d|5[1-9])\\d{5}|6\\d{8}",,,,"612345678"],[,,"90\\d{6}",,,,"90123456",,,[8]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],"MC",377,"00","0",,,"0",,,,[[,"(\\d{2})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",["[39]"],"$1"],[,"(\\d{2})(\\d{3})(\\d{3})","$1 $2 $3",["4"],"0$1"],[,"(6)(\\d{2})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4 $5",["6"],"0$1"],[,"(\\d{3})(\\d{3})(\\d{2})","$1 $2 $3",["8"],"$1"]],,[,,,,,,,,,[-1]],,,[,,"870\\d{5}",,,,"87012345",,,[8]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],MD:[,[,,"[235-9]\\d{7}",,,,,,,[8]],[,,"(?:2[1-9]\\d|3[1-79]\\d|5(?:33|5[257]))\\d{5}",,,,"22212345"],[,,"(?:562|6\\d{2}|7(?:[189]\\d|6[07]|7[457-9]))\\d{5}",,,,"62112345"],[,,"800\\d{5}",,,,"80012345"],[,,"90[056]\\d{5}",,,,"90012345"],[,,"808\\d{5}",,,,"80812345"],[,,,,,,,,,[-1]],[,,"3[08]\\d{6}",,,,"30123456"],"MD",373,"00","0",,,"0",,,,[[,"(\\d{2})(\\d{3})(\\d{3})","$1 $2 $3",["22|3"],"0$1"],[,"([25-7]\\d{2})(\\d{2})(\\d{3})","$1 $2 $3",["2[13-9]|[5-7]"],"0$1"],[,"([89]\\d{2})(\\d{5})","$1 $2",["[89]"],"0$1"]],,[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,"803\\d{5}",,,,"80312345"],,,[,,,,,,,,,[-1]]],ME:[,[,,"[2-9]\\d{7,8}",,,,,,,[8],[6]],[,,"(?:20[2-8]|3(?:0[2-7]|[12][235-7]|3[24-7])|4(?:0[2-467]|1[267])|5(?:0[2467]|1[267]|2[2367]))\\d{5}",,,,"30234567",,,,[6]],[,,"6(?:00\\d|3[024]\\d|6[0-25]\\d|[7-9]\\d{2})\\d{4}",,,,"67622901"],[,,"80[0-258]\\d{5}",,,,"80080002"],[,,"(?:9(?:4[1568]|5[178]))\\d{5}",,,,"94515151"],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,"78[1-49]\\d{5}",,,,"78108780"],"ME",382,"00","0",,,"0",,,,[[,"(\\d{2})(\\d{3})(\\d{3})","$1 $2 $3",["[2-57-9]|6[036-9]"],"0$1"]],,[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,"77[1-9]\\d{5}",,,,"77273012"],,,[,,,,,,,,,[-1]]],MF:[,[,,"[56]\\d{8}",,,,,,,[9]],[,,"590(?:[02][79]|13|5[0-268]|[78]7)\\d{4}",,,,"590271234"],[,,"690(?:0[0-7]|[1-9]\\d)\\d{4}",,,,"690301234"],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],"MF",590,"00","0",,,"0",,,,,,[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],MG:[,[,,"[23]\\d{8}",,,,,,,[9],[7]],[,,"20(?:2\\d{2}|4[47]\\d|5[3467]\\d|6[279]\\d|7(?:2[29]|[35]\\d)|8[268]\\d|9[245]\\d)\\d{4}",,,,"202123456",,,,[7]],[,,"3[2-49]\\d{7}",,,,"321234567"],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,"22\\d{7}",,,,"221234567"],"MG",261,"00","0",,,"0",,,,[[,"([23]\\d)(\\d{2})(\\d{3})(\\d{2})","$1 $2 $3 $4",,"0$1"]],,[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],MH:[,[,,"[2-6]\\d{6}",,,,,,,[7]],[,,"(?:247|528|625)\\d{4}",,,,"2471234"],[,,"(?:235|329|45[56]|545)\\d{4}",,,,"2351234"],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,"635\\d{4}",,,,"6351234"],"MH",692,"011","1",,,"1",,,,[[,"(\\d{3})(\\d{4})","$1-$2"]],,[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],MK:[,[,,"[2-578]\\d{7}",,,,,,,[8],[6,7]],[,,"(?:2(?:[23]\\d|5[124578]|6[01])|3(?:1[3-6]|[23][2-6]|4[2356])|4(?:[23][2-6]|4[3-6]|5[256]|6[25-8]|7[24-6]|8[4-6]))\\d{5}",,,,"22212345",,,,[6,7]],[,,"7(?:[0-25-8]\\d{2}|32\\d|421)\\d{4}",,,,"72345678"],[,,"800\\d{5}",,,,"80012345"],[,,"5[02-9]\\d{6}",,,,"50012345"],[,,"8(?:0[1-9]|[1-9]\\d)\\d{5}",,,,"80123456"],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],"MK",389,"00","0",,,"0",,,,[[,"(2)(\\d{3})(\\d{4})","$1 $2 $3",["2"],"0$1"],[,"([347]\\d)(\\d{3})(\\d{3})","$1 $2 $3",["[347]"],"0$1"],[,"([58]\\d{2})(\\d)(\\d{2})(\\d{2})","$1 $2 $3 $4",["[58]"],"0$1"]],,[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],ML:[,[,,"[246-9]\\d{7}",,,,,,,[8]],[,,"(?:2(?:0(?:2\\d|7[0-8])|1(?:2[5-7]|[3-689]\\d))|44[1239]\\d)\\d{4}",,,,"20212345"],[,,"(?:2(?:079|17\\d)|[679]\\d{3}|8[239]\\d{2})\\d{4}",,,,"65012345"],[,,"80\\d{6}",,,,"80012345"],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],"ML",223,"00",,,,,,,,[[,"(\\d{2})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",["[246-9]"]],[,"(\\d{4})","$1",["67|74"]]],[[,"(\\d{2})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",["[246-9]"]]],[,,,,,,,,,[-1]],,,[,,"80\\d{6}",,,,"80012345"],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],MM:[,[,,"[1478]\\d{5,7}|[256]\\d{5,8}|9(?:[279]\\d{0,2}|[58]|[34]\\d{1,2}|6\\d?)\\d{6}",,,,,,,[6,7,8,9,10],[5]],[,,"1(?:2\\d{1,2}|[3-5]\\d|6\\d?|[89][0-6]\\d)\\d{4}|2(?:2(?:000\\d{3}|\\d{4})|3\\d{4}|4(?:0\\d{5}|\\d{4})|5(?:1\\d{3,6}|[02-9]\\d{3,5})|[6-9]\\d{4})|4(?:2[245-8]|3(?:[2-46]|56?)|[46][2-6]|5[3-5])\\d{4}|5(?:2(?:2(?:\\d{1,2})?|[3-8])|3[2-68]|4(?:21?|[4-8])|5[23]|6[2-4]|7[2-8]|8[24-7]|9[2-7])\\d{4}|6(?:0[23]|1(?:2(?:0|4\\d)?|[356])|2[2-6]|3[24-6]|4(?:2(?:4\\d)?|[3-6])|5[2-4]|6[2-8]|7(?:[2367]|4\\d|5\\d?|8[145]\\d)|8[245]|9(?:20?|4))\\d{4}|7(?:[04][24-8]|1(?:20?|[3-7])|22|3[2-4]|5[2-7])\\d{4}|8(?:1(?:2\\d{1,2}|[3-689]\\d)|2(?:2\\d|3(?:\\d|20)|[4-8]\\d)|3[24]\\d|4[24-7]\\d|5[245]\\d|6[23]\\d)\\d{3}",,,,"1234567",,,[6,7,8,9],[5]],[,,"17[01]\\d{4}|9(?:2(?:[0-4]|5\\d{2}|6[0-5]\\d)|3(?:[0-36]|4[069])\\d|4(?:0[0-4]\\d|[1379]\\d|2\\d{2}|4[0-589]\\d|5\\d{2}|88)|5[0-6]|61?\\d|7(?:3\\d|[6-9]\\d{2})|8\\d|9(?:1\\d|[5-7]\\d{2}|[089]))\\d{5}",,,,"92123456",,,[7,8,9,10]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,"1333\\d{4}",,,,"13331234",,,[8]],"MM",95,"00","0",,,"0",,,,[[,"(\\d)(\\d{3})(\\d{3,4})","$1 $2 $3",["1|2[245]"],"0$1"],[,"(2)(\\d{4})(\\d{4})","$1 $2 $3",["251"],"0$1"],[,"(\\d)(\\d{2})(\\d{3})","$1 $2 $3",["16|2"],"0$1"],[,"(\\d{2})(\\d{3})(\\d{3,4})","$1 $2 $3",["67|81"],"0$1"],[,"(\\d{2})(\\d{2})(\\d{3,4})","$1 $2 $3",["[4-8]"],"0$1"],[,"(9)(\\d{3})(\\d{4,6})","$1 $2 $3",["9(?:2[0-4]|[35-9]|4[137-9])"],"0$1"],[,"(9)([34]\\d{4})(\\d{4})","$1 $2 $3",["9(?:3[0-36]|4[0-57-9])"],"0$1"],[,"(9)(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3 $4",["92[56]"],"0$1"],[,"(9)(\\d{3})(\\d{3})(\\d{2})","$1 $2 $3 $4",["93"],"0$1"]],,[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],MN:[,[,,"[12]\\d{7,9}|[57-9]\\d{7}",,,,,,,[8,9,10],[6,7]],[,,"[12](?:1\\d|2(?:[1-3]\\d?|7\\d)|3[2-8]\\d{1,2}|4[2-68]\\d{1,2}|5[1-4689]\\d{1,2})\\d{5}|5[0568]\\d{6}",,,,"50123456",,,,[6,7]],[,,"(?:8(?:[05689]\\d|3[01])|9[013-9]\\d)\\d{5}",,,,"88123456",,,[8]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,"7[05-8]\\d{6}",,,,"75123456",,,[8]],"MN",976,"001","0",,,"0",,,,[[,"([12]\\d)(\\d{2})(\\d{4})","$1 $2 $3",["[12]1"],"0$1"],[,"([12]2\\d)(\\d{5,6})","$1 $2",["[12]2[1-3]"],"0$1"],[,"([12]\\d{3})(\\d{5})","$1 $2",["[12](?:27|[3-5])","[12](?:27|[3-5]\\d)2"],"0$1"],[,"(\\d{4})(\\d{4})","$1 $2",["[57-9]"],"$1"],[,"([12]\\d{4})(\\d{4,5})","$1 $2",["[12](?:27|[3-5])","[12](?:27|[3-5]\\d)[4-9]"],"0$1"]],,[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],MO:[,[,,"[268]\\d{7}",,,,,,,[8]],[,,"(?:28[2-57-9]|8[2-57-9]\\d)\\d{5}",,,,"28212345"],[,,"6(?:[2356]\\d|8[158])\\d{5}",,,,"66123456"],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],"MO",853,"00",,,,,,,,[[,"([268]\\d{3})(\\d{4})","$1 $2"]],,[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],MP:[,[,,"[5689]\\d{9}",,,,,,,[10],[7]],[,,"670(?:2(?:3[3-7]|56|8[5-8])|32[1238]|4(?:33|8[348])|5(?:32|55|88)|6(?:64|70|82)|78[3589]|8[3-9]8|989)\\d{4}",,,,"6702345678",,,,[7]],[,,"670(?:2(?:3[3-7]|56|8[5-8])|32[1238]|4(?:33|8[348])|5(?:32|55|88)|6(?:64|70|82)|78[3589]|8[3-9]8|989)\\d{4}",,,,"6702345678",,,,[7]],[,,"8(?:00|33|44|55|66|77|88)[2-9]\\d{6}",,,,"8002123456"],[,,"900[2-9]\\d{6}",,,,"9002123456"],[,,,,,,,,,[-1]],[,,"5(?:00|22|33|44|66|77|88)[2-9]\\d{6}",,,,"5002345678"],[,,,,,,,,,[-1]],"MP",1,"011","1",,,"1",,,1,,,[,,,,,,,,,[-1]],,"670",[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],MQ:[,[,,"[56]\\d{8}",,,,,,,[9]],[,,"596(?:0[2-5]|[12]0|3[05-9]|4[024-8]|[5-7]\\d|89|9[4-8])\\d{4}",,,,"596301234"],[,,"696(?:[0-47-9]\\d|5[0-6]|6[0-4])\\d{4}",,,,"696201234"],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],"MQ",596,"00","0",,,"0",,,,[[,"(\\d{3})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",,"0$1"]],,[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],MR:[,[,,"[2-48]\\d{7}",,,,,,,[8]],[,,"25[08]\\d{5}|35\\d{6}|45[1-7]\\d{5}",,,,"35123456"],[,,"[234][0-46-9]\\d{6}",,,,"22123456"],[,,"800\\d{5}",,,,"80012345"],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],"MR",222,"00",,,,,,,,[[,"([2-48]\\d)(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4"]],,[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],MS:[,[,,"[5689]\\d{9}",,,,,,,[10],[7]],[,,"664491\\d{4}",,,,"6644912345",,,,[7]],[,,"66449[2-6]\\d{4}",,,,"6644923456",,,,[7]],[,,"8(?:00|33|44|55|66|77|88)[2-9]\\d{6}",,,,"8002123456"],[,,"900[2-9]\\d{6}",,,,"9002123456"],[,,,,,,,,,[-1]],[,,"5(?:00|22|33|44|66|77|88)[2-9]\\d{6}",,,,"5002345678"],[,,,,,,,,,[-1]],"MS",1,"011","1",,,"1",,,,,,[,,,,,,,,,[-1]],,"664",[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],MT:[,[,,"[2357-9]\\d{7}",,,,,,,[8]],[,,"2(?:0(?:1[0-6]|3[1-4]|[69]\\d)|[1-357]\\d{2})\\d{4}",,,,"21001234"],[,,"(?:7(?:210|[79]\\d{2})|9(?:2(?:1[01]|31)|696|8(?:1[1-3]|89|97)|9\\d{2}))\\d{4}",,,,"96961234"],[,,"800[3467]\\d{4}",,,,"80071234"],[,,"5(?:0(?:0(?:37|43)|6\\d{2}|70\\d|9[0168]\\d)|[12]\\d0[1-5])\\d{3}",,,,"50037123"],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,"3550\\d{4}",,,,"35501234"],"MT",356,"00",,,,,,,,[[,"(\\d{4})(\\d{4})","$1 $2"]],,[,,"7117\\d{4}",,,,"71171234"],,,[,,,,,,,,,[-1]],[,,"501\\d{5}",,,,"50112345"],,,[,,,,,,,,,[-1]]],MU:[,[,,"[2-9]\\d{6,7}",,,,,,,[7,8]],[,,"(?:2(?:[03478]\\d|1[0-7]|6[1-69])|4(?:[013568]\\d|2[4-7])|5(?:44\\d|471)|6\\d{2}|8(?:14|3[129]))\\d{4}",,,,"2012345"],[,,"5(?:2[59]\\d|4(?:2[1-389]|4\\d|7[1-9]|9\\d)|7\\d{2}|8(?:[0-25689]\\d|4[3479]|7[15-8])|9[0-8]\\d)\\d{4}",,,,"52512345",,,[8]],[,,"80[012]\\d{4}",,,,"8001234",,,[7]],[,,"30\\d{5}",,,,"3012345",,,[7]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,"3(?:20|9\\d)\\d{4}",,,,"3201234",,,[7]],"MU",230,"0(?:0|[2-7]0|33)",,,,,,"020",,[[,"([2-46-9]\\d{2})(\\d{4})","$1 $2",["[2-46-9]"]],[,"(5\\d{3})(\\d{4})","$1 $2",["5"]]],,[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],MV:[,[,,"[346-8]\\d{6,9}|9(?:00\\d{7}|\\d{6})",,,,,,,[7,10]],[,,"(?:3(?:0[0-3]|3[0-59])|6(?:[57][02468]|6[024568]|8[024689]|90))\\d{4}",,,,"6701234",,,[7]],[,,"(?:46[46]|7[3-9]\\d|9[15-9]\\d)\\d{4}",,,,"7712345",,,[7]],[,,"800\\d{7}",,,,"8001234567",,,[10]],[,,"900\\d{7}",,,,"9001234567",,,[10]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],"MV",960,"0(?:0|19)",,,,,,"00",,[[,"(\\d{3})(\\d{4})","$1-$2",["[3467]|9(?:[1-9]|0[1-9])"]],[,"(\\d{3})(\\d{3})(\\d{4})","$1 $2 $3",["[89]00"]]],,[,,"781\\d{4}",,,,"7812345",,,[7]],,,[,,,,,,,,,[-1]],[,,"4[05]0\\d{4}",,,,"4001234",,,[7]],,,[,,,,,,,,,[-1]]],MW:[,[,,"(?:1(?:\\d{2})?|[2789]\\d{2})\\d{6}",,,,,,,[7,9]],[,,"(?:1[2-9]|21\\d{2})\\d{5}",,,,"1234567"],[,,"(?:111|77\\d|88\\d|99\\d)\\d{6}",,,,"991234567",,,[9]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],"MW",265,"00","0",,,"0",,,,[[,"(\\d)(\\d{3})(\\d{3})","$1 $2 $3",["1"],"0$1"],[,"(2\\d{2})(\\d{3})(\\d{3})","$1 $2 $3",["2"],"0$1"],[,"(\\d{3})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",["[1789]"],"0$1"]],,[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],MX:[,[,,"[1-9]\\d{9,10}",,,,,,,[10,11],[7,8]],[,,"(?:33|55|81)\\d{8}|(?:2(?:0[01]|2[2-9]|3[1-35-8]|4[13-9]|7[1-689]|8[1-578]|9[467])|3(?:1[1-79]|[2458][1-9]|7[1-8]|9[1-5])|4(?:1[1-57-9]|[24-6][1-9]|[37][1-8]|8[1-35-9]|9[2-689])|5(?:88|9[1-79])|6(?:1[2-68]|[234][1-9]|5[1-3689]|6[12457-9]|7[1-7]|8[67]|9[4-8])|7(?:[13467][1-9]|2[1-8]|5[13-9]|8[1-69]|9[17])|8(?:2[13-689]|3[1-6]|4[124-6]|6[1246-9]|7[1-378]|9[12479])|9(?:1[346-9]|2[1-4]|3[2-46-8]|5[1348]|[69][1-9]|7[12]|8[1-8]))\\d{7}",,,,"2221234567",,,[10],[7,8]],[,,"1(?:(?:33|55|81)\\d{8}|(?:2(?:2[1-9]|3[1-35-8]|4[13-9]|7[1-689]|8[1-578]|9[467])|3(?:1[1-79]|[2458][1-9]|7[1-8]|9[1-5])|4(?:1[1-57-9]|[24-6][1-9]|[37][1-8]|8[1-35-9]|9[2-689])|5(?:88|9[1-79])|6(?:1[2-68]|[2-4][1-9]|5[1-3689]|6[12457-9]|7[1-7]|8[67]|9[4-8])|7(?:[13467][1-9]|2[1-8]|5[13-9]|8[1-69]|9[17])|8(?:2[13-689]|3[1-6]|4[124-6]|6[1246-9]|7[1-378]|9[12479])|9(?:1[346-9]|2[1-4]|3[2-46-8]|5[1348]|[69][1-9]|7[12]|8[1-8]))\\d{7})",,,,"12221234567",,,[11]],[,,"8(?:00|88)\\d{7}",,,,"8001234567",,,[10]],[,,"900\\d{7}",,,,"9001234567",,,[10]],[,,"300\\d{7}",,,,"3001234567",,,[10]],[,,"500\\d{7}",,,,"5001234567",,,[10]],[,,,,,,,,,[-1]],"MX",52,"0[09]","01",,,"0[12]|04[45](\\d{10})","1$1",,,[[,"([358]\\d)(\\d{4})(\\d{4})","$1 $2 $3",["33|55|81"],"01 $1",,1],[,"(\\d{3})(\\d{3})(\\d{4})","$1 $2 $3",["[2467]|3[0-2457-9]|5[089]|8[02-9]|9[0-35-9]"],"01 $1",,1],[,"(1)([358]\\d)(\\d{4})(\\d{4})","044 $2 $3 $4",["1(?:33|55|81)"],"$1",,1],[,"(1)(\\d{3})(\\d{3})(\\d{4})","044 $2 $3 $4",["1(?:[2467]|3[0-2457-9]|5[089]|8[2-9]|9[1-35-9])"],"$1",,1]],[[,"([358]\\d)(\\d{4})(\\d{4})","$1 $2 $3",["33|55|81"],"01 $1",,1],[,"(\\d{3})(\\d{3})(\\d{4})","$1 $2 $3",["[2467]|3[0-2457-9]|5[089]|8[02-9]|9[0-35-9]"],"01 $1",,1],[,"(1)([358]\\d)(\\d{4})(\\d{4})","$1 $2 $3 $4",["1(?:33|55|81)"]],[,"(1)(\\d{3})(\\d{3})(\\d{4})","$1 $2 $3 $4",["1(?:[2467]|3[0-2457-9]|5[089]|8[2-9]|9[1-35-9])"]]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],1,,[,,,,,,,,,[-1]]],MY:[,[,,"[13-9]\\d{7,9}",,,,,,,[8,9,10],[6,7]],[,,"(?:3[2-9]\\d|[4-9][2-9])\\d{6}",,,,"323456789",,,[8,9],[6,7]],[,,"1(?:1[1-5]\\d{2}|[02-4679][2-9]\\d|59\\d{2}|8(?:1[23]|[2-9]\\d))\\d{5}",,,,"123456789",,,[9,10]],[,,"1[378]00\\d{6}",,,,"1300123456",,,[10]],[,,"1600\\d{6}",,,,"1600123456",,,[10]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,"154\\d{7}",,,,"1541234567",,,[10]],"MY",60,"00","0",,,"0",,,,[[,"([4-79])(\\d{3})(\\d{4})","$1-$2 $3",["[4-79]"],"0$1"],[,"(3)(\\d{4})(\\d{4})","$1-$2 $3",["3"],"0$1"],[,"([18]\\d)(\\d{3})(\\d{3,4})","$1-$2 $3",["1[02-46-9][1-9]|8"],"0$1"],[,"(1)([36-8]00)(\\d{2})(\\d{4})","$1-$2-$3-$4",["1[36-8]0"]],[,"(11)(\\d{4})(\\d{4})","$1-$2 $3",["11"],"0$1"],[,"(15[49])(\\d{3})(\\d{4})","$1-$2 $3",["15"],"0$1"]],,[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],MZ:[,[,,"[28]\\d{7,8}",,,,,,,[8,9]],[,,"2(?:[1346]\\d|5[0-2]|[78][12]|93)\\d{5}",,,,"21123456",,,[8]],[,,"8[2-7]\\d{7}",,,,"821234567",,,[9]],[,,"800\\d{6}",,,,"800123456",,,[9]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],"MZ",258,"00",,,,,,,,[[,"([28]\\d)(\\d{3})(\\d{3,4})","$1 $2 $3",["2|8[2-7]"]],[,"(80\\d)(\\d{3})(\\d{3})","$1 $2 $3",["80"]]],,[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],NA:[,[,,"[68]\\d{7,8}",,,,,,,[8,9]],[,,"6(?:1(?:17|2(?:[0189]\\d|[2-6]|7\\d?)|3(?:[01378]|2\\d)|4(?:[024]|10?|3[15]?)|69|7[014])|2(?:17|5(?:[0-36-8]|4\\d?)|69|70)|3(?:17|2(?:[0237]\\d?|[14-689])|34|6[289]|7[01]|81)|4(?:17|2(?:[012]|7\\d?)|4(?:[06]|1\\d?)|5(?:[01357]|[25]\\d?)|69|7[01])|5(?:17|2(?:[0459]|[23678]\\d?)|69|7[01])|6(?:17|2(?:5|6\\d?)|38|42|69|7[01])|7(?:17|2(?:[569]|[234]\\d?)|3(?:0\\d?|[13])|6[89]|7[01]))\\d{4}",,,,"61221234"],[,,"(?:60|8[125])\\d{7}",,,,"811234567",,,[9]],[,,,,,,,,,[-1]],[,,"8701\\d{5}",,,,"870123456",,,[9]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,"8(?:3\\d{2}|86)\\d{5}",,,,"88612345"],"NA",264,"00","0",,,"0",,,,[[,"(8\\d)(\\d{3})(\\d{4})","$1 $2 $3",["8[1235]"],"0$1"],[,"(6\\d)(\\d{3})(\\d{3,4})","$1 $2 $3",["6"],"0$1"],[,"(88)(\\d{3})(\\d{3})","$1 $2 $3",["88"],"0$1"],[,"(870)(\\d{3})(\\d{3})","$1 $2 $3",["870"],"0$1"]],,[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],NC:[,[,,"[2-57-9]\\d{5}",,,,,,,[6]],[,,"(?:2[03-9]|3[0-5]|4[1-7]|88)\\d{4}",,,,"201234"],[,,"(?:5[0-4]|[79]\\d|8[0-79])\\d{4}",,,,"751234"],[,,,,,,,,,[-1]],[,,"36\\d{4}",,,,"366711"],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],"NC",687,"00",,,,,,,,[[,"(\\d{2})(\\d{2})(\\d{2})","$1.$2.$3",["[2-46-9]|5[0-4]"]]],,[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],NE:[,[,,"[0289]\\d{7}",,,,,,,[8]],[,,"2(?:0(?:20|3[1-7]|4[134]|5[14]|6[14578]|7[1-578])|1(?:4[145]|5[14]|6[14-68]|7[169]|88))\\d{4}",,,,"20201234"],[,,"(?:8[089]|9\\d)\\d{6}",,,,"93123456"],[,,"08\\d{6}",,,,"08123456"],[,,"09\\d{6}",,,,"09123456"],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],"NE",227,"00",,,,,,,,[[,"(\\d{2})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",["[289]|09"]],[,"(08)(\\d{3})(\\d{3})","$1 $2 $3",["08"]]],,[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],1,,[,,,,,,,,,[-1]]],NF:[,[,,"[13]\\d{5}",,,,,,,[6],[5]],[,,"(?:1(?:06|17|28|39)|3[012]\\d)\\d{3}",,,,"106609",,,,[5]],[,,"3[58]\\d{4}",,,,"381234",,,,[5]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],"NF",672,"00",,,,,,,,[[,"(\\d{2})(\\d{4})","$1 $2",["1"]],[,"(\\d)(\\d{5})","$1 $2",["3"]]],,[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],NG:[,[,,"[1-6]\\d{5,8}|9\\d{5,9}|[78]\\d{5,13}",,,,,,,[7,8,10,11,12,13,14],[5,6]],[,,"[12]\\d{6,7}|9(?:0[3-9]|[1-9]\\d)\\d{5}|(?:3\\d|4[023568]|5[02368]|6[02-469]|7[4-69]|8[2-9])\\d{6}|(?:4[47]|5[14579]|6[1578]|7[0-357])\\d{5,6}|(?:78|41)\\d{5}",,,,"12345678",,,[7,8],[5,6]],[,,"(?:1(?:7[34]\\d|8(?:04|[124579]\\d|8[0-3])|95\\d)|287[0-7]|3(?:18[1-8]|88[0-7]|9(?:8[5-9]|6[1-5]))|4(?:28[0-2]|6(?:7[1-9]|8[02-47])|88[0-2])|5(?:2(?:7[7-9]|8\\d)|38[1-79]|48[0-7]|68[4-7])|6(?:2(?:7[7-9]|8\\d)|4(?:3[7-9]|[68][129]|7[04-69]|9[1-8])|58[0-2]|98[7-9])|7(?:38[0-7]|69[1-8]|78[2-4])|8(?:28[3-9]|38[0-2]|4(?:2[12]|3[147-9]|5[346]|7[4-9]|8[014-689]|90)|58[1-8]|78[2-9]|88[5-7])|98[07]\\d)\\d{4}|(?:70(?:[1-689]\\d|7[0-3])|8(?:0(?:1[01]|[2-9]\\d)|1(?:[0-8]\\d|9[01]))|90[235-9]\\d)\\d{6}",,,,"8021234567",,,[8,10]],[,,"800\\d{7,11}",,,,"80017591759",,,[10,11,12,13,14]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],"NG",234,"009","0",,,"0",,,,[[,"(\\d)(\\d{3})(\\d{3,4})","$1 $2 $3",["[12]|9(?:0[3-9]|[1-9])"],"0$1"],[,"(\\d{2})(\\d{3})(\\d{2,3})","$1 $2 $3",["[3-6]|7(?:[1-79]|0[1-9])|8[2-9]"],"0$1"],[,"(\\d{3})(\\d{3})(\\d{3,4})","$1 $2 $3",["70|8[01]|90[235-9]"],"0$1"],[,"([78]00)(\\d{4})(\\d{4,5})","$1 $2 $3",["[78]00"],"0$1"],[,"([78]00)(\\d{5})(\\d{5,6})","$1 $2 $3",["[78]00"],"0$1"],[,"(78)(\\d{2})(\\d{3})","$1 $2 $3",["78"],"0$1"]],,[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,"700\\d{7,11}",,,,"7001234567",,,[10,11,12,13,14]],,,[,,,,,,,,,[-1]]],NI:[,[,,"[12578]\\d{7}",,,,,,,[8]],[,,"2\\d{7}",,,,"21234567"],[,,"5(?:5[0-7]\\d{5}|[78]\\d{6})|7[5-8]\\d{6}|8\\d{7}",,,,"81234567"],[,,"1800\\d{4}",,,,"18001234"],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],"NI",505,"00",,,,,,,,[[,"(\\d{4})(\\d{4})","$1 $2"]],,[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],NL:[,[,,"1\\d{4,8}|[2-7]\\d{8}|[89]\\d{6,9}",,,,,,,[5,6,7,8,9,10]],[,,"(?:1[0135-8]|2[02-69]|3[0-68]|4[0135-9]|[57]\\d|8[478])\\d{7}",,,,"101234567",,,[9]],[,,"6[1-58]\\d{7}",,,,"612345678",,,[9]],[,,"800\\d{4,7}",,,,"8001234",,,[7,8,9,10]],[,,"90[069]\\d{4,7}",,,,"9061234",,,[7,8,9,10]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,"(?:6760|85\\d{2})\\d{5}",,,,"851234567",,,[9]],"NL",31,"00","0",,,"0",,,,[[,"([1-578]\\d)(\\d{3})(\\d{4})","$1 $2 $3",["1[035]|2[0346]|3[03568]|4[0356]|5[0358]|7|8[4578]"],"0$1"],[,"([1-5]\\d{2})(\\d{3})(\\d{3})","$1 $2 $3",["1[16-8]|2[259]|3[124]|4[17-9]|5[124679]"],"0$1"],[,"(6)(\\d{8})","$1 $2",["6[0-57-9]"],"0$1"],[,"(66)(\\d{7})","$1 $2",["66"],"0$1"],[,"(14)(\\d{3,4})","$1 $2",["14"],"$1"],[,"([89]0\\d)(\\d{4,7})","$1 $2",["80|9"],"0$1"]],,[,,"66\\d{7}",,,,"662345678",,,[9]],,,[,,"14\\d{3,4}",,,,"14123",,,[5,6]],[,,"140(?:1(?:[035]|[16-8]\\d)|2(?:[0346]|[259]\\d)|3(?:[03568]|[124]\\d)|4(?:[0356]|[17-9]\\d)|5(?:[0358]|[124679]\\d)|7\\d|8[458])",,,,"14020",,,[5,6]],,,[,,,,,,,,,[-1]]],NO:[,[,,"0\\d{4}|[2-9]\\d{7}",,,,,,,[5,8]],[,,"(?:2[1-4]|3[1-3578]|5[1-35-7]|6[1-4679]|7[0-8])\\d{6}",,,,"21234567",,,[8]],[,,"(?:4[015-8]|5[89]|87|9\\d)\\d{6}",,,,"40612345",,,[8]],[,,"80[01]\\d{5}",,,,"80012345",,,[8]],[,,"82[09]\\d{5}",,,,"82012345",,,[8]],[,,"810(?:0[0-6]|[2-8]\\d)\\d{3}",,,,"81021234",,,[8]],[,,"880\\d{5}",,,,"88012345",,,[8]],[,,"85[0-5]\\d{5}",,,,"85012345",,,[8]],"NO",47,"00",,,,,,,,[[,"([489]\\d{2})(\\d{2})(\\d{3})","$1 $2 $3",["[489]"]],[,"([235-7]\\d)(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",["[235-7]"]]],,[,,,,,,,,,[-1]],1,,[,,,,,,,,,[-1]],[,,"0\\d{4}|81(?:0(?:0[7-9]|1\\d)|5\\d{2})\\d{3}",,,,"01234"],1,,[,,"81[23]\\d{5}",,,,"81212345",,,[8]]],NP:[,[,,"[1-8]\\d{7}|9(?:[1-69]\\d{6,8}|7[2-6]\\d{5,7}|8\\d{8})",,,,,,,[8,10],[6,7]],[,,"(?:1[0-6]\\d|2[13-79][2-6]|3[135-8][2-6]|4[146-9][2-6]|5[135-7][2-6]|6[13-9][2-6]|7[15-9][2-6]|8[1-46-9][2-6]|9[1-79][2-6])\\d{5}",,,,"14567890",,,[8],[6,7]],[,,"9(?:6[013]|7[245]|8[0-24-6])\\d{7}",,,,"9841234567",,,[10]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],"NP",977,"00","0",,,"0",,,,[[,"(1)(\\d{7})","$1-$2",["1[2-6]"],"0$1"],[,"(\\d{2})(\\d{6})","$1-$2",["1[01]|[2-8]|9(?:[1-69]|7[15-9])"],"0$1"],[,"(9\\d{2})(\\d{7})","$1-$2",["9(?:6[013]|7[245]|8)"],"$1"]],,[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],NR:[,[,,"[458]\\d{6}",,,,,,,[7]],[,,"(?:444|888)\\d{4}",,,,"4441234"],[,,"55[5-9]\\d{4}",,,,"5551234"],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],"NR",674,"00",,,,,,,,[[,"(\\d{3})(\\d{4})","$1 $2"]],,[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],NU:[,[,,"[1-5]\\d{3}",,,,,,,[4]],[,,"[34]\\d{3}",,,,"4002"],[,,"[125]\\d{3}",,,,"1234"],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],"NU",683,"00",,,,,,,,,,[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],NZ:[,[,,"6[235-9]\\d{6}|[2-57-9]\\d{7,10}",,,,,,,[8,9,10,11],[7]],[,,"(?:3[2-79]|[49][2-9]|6[235-9]|7[2-57-9])\\d{6}|24099\\d{3}",,,,"32345678",,,[8],[7]],[,,"2(?:[028]\\d{7,8}|1(?:[03]\\d{5,7}|[12457]\\d{5,6}|[689]\\d{5})|[79]\\d{7})",,,,"211234567",,,[8,9,10]],[,,"508\\d{6,7}|80\\d{6,8}",,,,"800123456",,,[8,9,10]],[,,"90\\d{7,9}",,,,"900123456",,,[9,10,11]],[,,,,,,,,,[-1]],[,,"70\\d{7}",,,,"701234567",,,[9]],[,,,,,,,,,[-1]],"NZ",64,"0(?:0|161)","0",,,"0",,"00",,[[,"([34679])(\\d{3})(\\d{4})","$1-$2 $3",["[346]|7[2-57-9]|9[1-9]"],"0$1"],[,"(24099)(\\d{3})","$1 $2",["240","2409","24099"],"0$1"],[,"(\\d{2})(\\d{3})(\\d{3})","$1 $2 $3",["21"],"0$1"],[,"(\\d{2})(\\d{3})(\\d{3,5})","$1 $2 $3",["2(?:1[1-9]|[69]|7[0-35-9])|70|86"],"0$1"],[,"(2\\d)(\\d{3,4})(\\d{4})","$1 $2 $3",["2[028]"],"0$1"],[,"(\\d{3})(\\d{3})(\\d{3,4})","$1 $2 $3",["2(?:10|74)|5|[89]0"],"0$1"]],,[,,"[28]6\\d{6,7}",,,,"26123456",,,[8,9]],,,[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],OM:[,[,,"(?:5|[279]\\d)\\d{6}|800\\d{5,6}",,,,,,,[7,8,9]],[,,"2[2-6]\\d{6}",,,,"23123456",,,[8]],[,,"7[19]\\d{6}|9(?:0[1-9]|[1-9]\\d)\\d{5}",,,,"92123456",,,[8]],[,,"8007\\d{4,5}|500\\d{4}",,,,"80071234"],[,,"900\\d{5}",,,,"90012345",,,[8]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],"OM",968,"00",,,,,,,,[[,"(2\\d)(\\d{6})","$1 $2",["2"]],[,"([79]\\d{3})(\\d{4})","$1 $2",["[79]"]],[,"([58]00)(\\d{4,6})","$1 $2",["[58]"]]],,[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],PA:[,[,,"[1-9]\\d{6,7}",,,,,,,[7,8]],[,,"(?:1(?:0[0-8]|1[49]|2[37]|3[0137]|4[147]|5[05]|6[58]|7[0167]|8[58]|9[139])|2(?:[0235679]\\d|1[0-7]|4[04-9]|8[028])|3(?:[09]\\d|1[014-7]|2[0-3]|3[03]|4[03-57]|55|6[068]|7[06-8]|8[06-9])|4(?:3[013-69]|4\\d|7[0-589])|5(?:[01]\\d|2[0-7]|[56]0|79)|7(?:0[09]|2[0-267]|3[06]|[469]0|5[06-9]|7[0-24-79]|8[7-9])|8(?:09|[34]\\d|5[0134]|8[02])|9(?:0[6-9]|1[016-8]|2[036-8]|3[3679]|40|5[0489]|6[06-9]|7[046-9]|8[36-8]|9[1-9]))\\d{4}",,,,"2001234",,,[7]],[,,"(?:1[16]1|21[89]|8(?:1[01]|7[23]))\\d{4}|6(?:[024-9]\\d|1[0-5]|3[0-24-9])\\d{5}",,,,"60012345"],[,,"80[09]\\d{4}",,,,"8001234",,,[7]],[,,"(?:779|8(?:55|60|7[78])|9(?:00|81))\\d{4}",,,,"8601234",,,[7]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],"PA",507,"00",,,,,,,,[[,"(\\d{3})(\\d{4})","$1-$2",["[1-57-9]"]],[,"(\\d{4})(\\d{4})","$1-$2",["6"]]],,[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],PE:[,[,,"[14-9]\\d{7,8}",,,,,,,[8,9],[6,7]],[,,"(?:1\\d|4[1-4]|5[1-46]|6[1-7]|7[2-46]|8[2-4])\\d{6}",,,,"11234567",,,[8],[6,7]],[,,"9\\d{8}",,,,"912345678",,,[9]],[,,"800\\d{5}",,,,"80012345",,,[8]],[,,"805\\d{5}",,,,"80512345",,,[8]],[,,"801\\d{5}",,,,"80112345",,,[8]],[,,"80[24]\\d{5}",,,,"80212345",,,[8]],[,,,,,,,,,[-1]],"PE",51,"19(?:1[124]|77|90)00","0"," Anexo ",,"0",,,,[[,"(1)(\\d{7})","$1 $2",["1"],"(0$1)"],[,"([4-8]\\d)(\\d{6})","$1 $2",["[4-7]|8[2-4]"],"(0$1)"],[,"(\\d{3})(\\d{5})","$1 $2",["80"],"(0$1)"],[,"(9\\d{2})(\\d{3})(\\d{3})","$1 $2 $3",["9"],"$1"]],,[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],PF:[,[,,"4\\d{5,7}|8\\d{7}",,,,,,,[6,8]],[,,"4(?:[09][45689]\\d|4)\\d{4}",,,,"40412345"],[,,"8[79]\\d{6}",,,,"87123456",,,[8]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],"PF",689,"00",,,,,,,,[[,"(\\d{2})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",["4[09]|8[79]"]],[,"(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3",["44"]]],,[,,,,,,,,,[-1]],,,[,,"44\\d{4}",,,,"441234",,,[6]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],PG:[,[,,"[1-9]\\d{6,7}",,,,,,,[7,8]],[,,"(?:3[0-2]\\d|4[257]\\d|5[34]\\d|64[1-9]|77(?:[0-24]\\d|30)|85[02-46-9]|9[78]\\d)\\d{4}",,,,"3123456",,,[7]],[,,"(?:20150|68\\d{2}|7(?:[0-689]\\d|75)\\d{2})\\d{3}",,,,"6812345"],[,,"180\\d{4}",,,,"1801234",,,[7]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,"27[568]\\d{4}",,,,"2751234",,,[7]],"PG",675,"00",,,,,,,,[[,"(\\d{3})(\\d{4})","$1 $2",["[13-689]|27"]],[,"(\\d{4})(\\d{4})","$1 $2",["20|7"]]],,[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],PH:[,[,,"2\\d{5,7}|[3-9]\\d{7,9}|1800\\d{7,9}",,,,,,,[6,8,9,10,11,12,13],[5,7]],[,,"2\\d{5}(?:\\d{2})?|(?:3[2-68]|4[2-9]|5[2-6]|6[2-58]|7[24578]|8[2-8])\\d{7}|88(?:22\\d{6}|42\\d{4})",,,,"21234567",,,[6,8,9,10],[5,7]],[,,"(?:81[37]|9(?:0[5-9]|1[024-9]|2[0-35-9]|3[02-9]|4[235-9]|5[056]|6[5-7]|7[34-79]|89|9[4-9]))\\d{7}",,,,"9051234567",,,[10]],[,,"1800\\d{7,9}",,,,"180012345678",,,[11,12,13]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],"PH",63,"00","0",,,"0",,,,[[,"(2)(\\d{3})(\\d{4})","$1 $2 $3",["2"],"(0$1)"],[,"(2)(\\d{5})","$1 $2",["2"],"(0$1)"],[,"(\\d{4})(\\d{4,6})","$1 $2",["3(?:23|39|46)|4(?:2[3-6]|[35]9|4[26]|76)|5(?:22|44)|642|8(?:62|8[245])","3(?:230|397|461)|4(?:2(?:35|[46]4|51)|396|4(?:22|63)|59[347]|76[15])|5(?:221|446)|642[23]|8(?:622|8(?:[24]2|5[13]))"],"(0$1)"],[,"(\\d{5})(\\d{4})","$1 $2",["346|4(?:27|9[35])|883","3469|4(?:279|9(?:30|56))|8834"],"(0$1)"],[,"([3-8]\\d)(\\d{3})(\\d{4})","$1 $2 $3",["[3-8]"],"(0$1)"],[,"(\\d{3})(\\d{3})(\\d{4})","$1 $2 $3",["81|9"],"0$1"],[,"(1800)(\\d{3})(\\d{4})","$1 $2 $3",["1"]],[,"(1800)(\\d{1,2})(\\d{3})(\\d{4})","$1 $2 $3 $4",["1"]]],,[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],PK:[,[,,"1\\d{8}|[2-8]\\d{5,11}|9(?:[013-9]\\d{4,9}|2\\d(?:111\\d{6}|\\d{3,7}))",,,,,,,[8,9,10,11,12],[6,7]],[,,"(?:21|42)[2-9]\\d{7}|(?:2[25]|4[0146-9]|5[1-35-7]|6[1-8]|7[14]|8[16]|91)[2-9]\\d{6}|(?:2(?:3[2358]|4[2-4]|9[2-8])|45[3479]|54[2-467]|60[468]|72[236]|8(?:2[2-689]|3[23578]|4[3478]|5[2356])|9(?:2[2-8]|3[27-9]|4[2-6]|6[3569]|9[25-8]))[2-9]\\d{5,6}|58[126]\\d{7}",,,,"2123456789",,,[9,10],[6,7,8]],[,,"3(?:[014]\\d|2[0-5]|3[0-7]|55|64)\\d{7}",,,,"3012345678",,,[10]],[,,"800\\d{5}",,,,"80012345",,,[8]],[,,"900\\d{5}",,,,"90012345",,,[8]],[,,,,,,,,,[-1]],[,,"122\\d{6}",,,,"122044444",,,[9]],[,,,,,,,,,[-1]],"PK",92,"00","0",,,"0",,,,[[,"(\\d{2})(111)(\\d{3})(\\d{3})","$1 $2 $3 $4",["(?:2[125]|4[0-246-9]|5[1-35-7]|6[1-8]|7[14]|8[16]|91)1","(?:2[125]|4[0-246-9]|5[1-35-7]|6[1-8]|7[14]|8[16]|91)11","(?:2[125]|4[0-246-9]|5[1-35-7]|6[1-8]|7[14]|8[16]|91)111"],"(0$1)"],[,"(\\d{3})(111)(\\d{3})(\\d{3})","$1 $2 $3 $4",["2[349]|45|54|60|72|8[2-5]|9[2-9]","(?:2[349]|45|54|60|72|8[2-5]|9[2-9])\\d1","(?:2[349]|45|54|60|72|8[2-5]|9[2-9])\\d11","(?:2[349]|45|54|60|72|8[2-5]|9[2-9])\\d111"],"(0$1)"],[,"(\\d{2})(\\d{7,8})","$1 $2",["(?:2[125]|4[0-246-9]|5[1-35-7]|6[1-8]|7[14]|8[16]|91)[2-9]"],"(0$1)"],[,"(\\d{3})(\\d{6,7})","$1 $2",["2[349]|45|54|60|72|8[2-5]|9[2-9]","(?:2[349]|45|54|60|72|8[2-5]|9[2-9])\\d[2-9]"],"(0$1)"],[,"(3\\d{2})(\\d{7})","$1 $2",["3"],"0$1"],[,"([15]\\d{3})(\\d{5,6})","$1 $2",["58[12]|1"],"(0$1)"],[,"(586\\d{2})(\\d{5})","$1 $2",["586"],"(0$1)"],[,"([89]00)(\\d{3})(\\d{2})","$1 $2 $3",["[89]00"],"0$1"]],,[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,"(?:2(?:[125]|3[2358]|4[2-4]|9[2-8])|4(?:[0-246-9]|5[3479])|5(?:[1-35-7]|4[2-467])|6(?:[1-8]|0[468])|7(?:[14]|2[236])|8(?:[16]|2[2-689]|3[23578]|4[3478]|5[2356])|9(?:1|22|3[27-9]|4[2-6]|6[3569]|9[2-7]))111\\d{6}",,,,"21111825888",,,[11,12]],,,[,,,,,,,,,[-1]]],PL:[,[,,"[12]\\d{6,8}|[3-57-9]\\d{8}|6\\d{5,8}",,,,,,,[6,7,8,9]],[,,"(?:1[2-8]|2[2-69]|3[2-4]|4[1-468]|5[24-689]|6[1-3578]|7[14-7]|8[1-79]|9[145])\\d{7}|[12]2\\d{5}",,,,"123456789",,,[7,9]],[,,"(?:5[0137]|6[069]|7[2389]|88)\\d{7}",,,,"512345678",,,[9]],[,,"800\\d{6}",,,,"800123456",,,[9]],[,,"70\\d{7}",,,,"701234567",,,[9]],[,,"801\\d{6}",,,,"801234567",,,[9]],[,,,,,,,,,[-1]],[,,"39\\d{7}",,,,"391234567",,,[9]],"PL",48,"00",,,,,,,,[[,"(\\d{2})(\\d{3})(\\d{2})(\\d{2})","$1 $2 $3 $4",["[14]|2[0-57-9]|3[2-4]|5[24-689]|6[1-3578]|7[14-7]|8[1-79]|9[145]"]],[,"(\\d{2})(\\d{1})(\\d{4})","$1 $2 $3",["[12]2"]],[,"(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3",["26|39|5[0137]|6[0469]|7[02389]|8[08]"]],[,"(\\d{3})(\\d{2})(\\d{2,3})","$1 $2 $3",["64"]],[,"(\\d{3})(\\d{3})","$1 $2",["64"]]],,[,,"64\\d{4,7}",,,,"641234567"],,,[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],PM:[,[,,"[45]\\d{5}",,,,,,,[6]],[,,"41\\d{4}",,,,"411234"],[,,"55\\d{4}",,,,"551234"],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],"PM",508,"00","0",,,"0",,,,[[,"([45]\\d)(\\d{2})(\\d{2})","$1 $2 $3",,"0$1"]],,[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],PR:[,[,,"[5789]\\d{9}",,,,,,,[10],[7]],[,,"(?:787|939)[2-9]\\d{6}",,,,"7872345678",,,,[7]],[,,"(?:787|939)[2-9]\\d{6}",,,,"7872345678",,,,[7]],[,,"8(?:00|33|44|55|66|77|88)[2-9]\\d{6}",,,,"8002345678"],[,,"900[2-9]\\d{6}",,,,"9002345678"],[,,,,,,,,,[-1]],[,,"5(?:00|22|33|44|66|77|88)[2-9]\\d{6}",,,,"5002345678"],[,,,,,,,,,[-1]],"PR",1,"011","1",,,"1",,,1,,,[,,,,,,,,,[-1]],,"787|939",[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],PS:[,[,,"[24589]\\d{7,8}|1(?:[78]\\d{8}|[49]\\d{2,3})",,,,,,,[4,5,8,9,10],[7]],[,,"(?:22[234789]|42[45]|82[01458]|92[369])\\d{5}",,,,"22234567",,,[8],[7]],[,,"5[69]\\d{7}",,,,"599123456",,,[9]],[,,"1800\\d{6}",,,,"1800123456",,,[10]],[,,"1(?:4|9\\d)\\d{2}",,,,"19123",,,[4,5]],[,,"1700\\d{6}",,,,"1700123456",,,[10]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],"PS",970,"00","0",,,"0",,,,[[,"([2489])(2\\d{2})(\\d{4})","$1 $2 $3",["[2489]"],"0$1"],[,"(5[69]\\d)(\\d{3})(\\d{3})","$1 $2 $3",["5"],"0$1"],[,"(1[78]00)(\\d{3})(\\d{3})","$1 $2 $3",["1[78]"],"$1"]],,[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],PT:[,[,,"[2-46-9]\\d{8}",,,,,,,[9]],[,,"2(?:[12]\\d|[35][1-689]|4[1-59]|6[1-35689]|7[1-9]|8[1-69]|9[1256])\\d{6}",,,,"212345678"],[,,"9(?:[1236]\\d{2}|480)\\d{5}",,,,"912345678"],[,,"80[02]\\d{6}",,,,"800123456"],[,,"6(?:0[178]|4[68])\\d{6}|76(?:0[1-57]|1[2-47]|2[237])\\d{5}",,,,"760123456"],[,,"80(?:8\\d|9[1579])\\d{5}",,,,"808123456"],[,,"884[0-4689]\\d{5}",,,,"884123456"],[,,"30\\d{7}",,,,"301234567"],"PT",351,"00",,,,,,,,[[,"(2\\d)(\\d{3})(\\d{4})","$1 $2 $3",["2[12]"]],[,"([2-46-9]\\d{2})(\\d{3})(\\d{3})","$1 $2 $3",["2[3-9]|[346-9]"]]],,[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,"7(?:0(?:7\\d|8[17]))\\d{5}",,,,"707123456"],,,[,,"600\\d{6}",,,,"600110000"]],PW:[,[,,"[2-8]\\d{6}",,,,,,,[7]],[,,"2552255|(?:277|345|488|5(?:35|44|87)|6(?:22|54|79)|7(?:33|47)|8(?:24|55|76))\\d{4}",,,,"2771234"],[,,"(?:6[234689]0|77[45789])\\d{4}",,,,"6201234"],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],"PW",680,"01[12]",,,,,,,,[[,"(\\d{3})(\\d{4})","$1 $2"]],,[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],PY:[,[,,"5[0-5]\\d{4,7}|[2-46-9]\\d{5,8}",,,,,,,[6,7,8,9],[5]],[,,"(?:[26]1|3[289]|4[124678]|7[123]|8[1236])\\d{5,7}|(?:2(?:2[4568]|7[15]|9[1-5])|3(?:18|3[167]|4[2357]|51)|4(?:18|2[45]|3[12]|5[13]|64|71|9[1-47])|5(?:[1-4]\\d|5[0234])|6(?:3[1-3]|44|7[1-4678])|7(?:17|4[0-4]|6[1-578]|75|8[0-8])|858)\\d{5,6}",,,,"212345678",,,[7,8,9],[5,6]],[,,"9(?:6[12]|[78][1-6]|9[1-5])\\d{6}",,,,"961456789",,,[9]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,"8700[0-4]\\d{4}",,,,"870012345",,,[9]],"PY",595,"00","0",,,"0",,,,[[,"(\\d{2})(\\d{5})","$1 $2",["(?:[26]1|3[289]|4[124678]|7[123]|8[1236])"],"(0$1)"],[,"(\\d{2})(\\d{3})(\\d{3,4})","$1 $2 $3",["(?:[26]1|3[289]|4[124678]|7[123]|8[1236])"],"(0$1)"],[,"(\\d{3})(\\d{3,6})","$1 $2",["[2-9]0"],"0$1"],[,"(\\d{3})(\\d{6})","$1 $2",["9[1-9]"],"0$1"],[,"(\\d{2})(\\d{3})(\\d{4})","$1 $2 $3",["8700"]],[,"(\\d{3})(\\d{4,5})","$1 $2",["[2-8][1-9]"],"(0$1)"],[,"(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3",["[2-8][1-9]"],"0$1"]],,[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,"[2-9]0\\d{4,7}",,,,"201234567"],,,[,,,,,,,,,[-1]]],QA:[,[,,"[2-8]\\d{6,7}",,,,,,,[7,8]],[,,"4[04]\\d{6}",,,,"44123456",,,[8]],[,,"[3567]\\d{7}",,,,"33123456",,,[8]],[,,"800\\d{4}",,,,"8001234",,,[7]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],"QA",974,"00",,,,,,,,[[,"([28]\\d{2})(\\d{4})","$1 $2",["[28]"]],[,"([3-7]\\d{3})(\\d{4})","$1 $2",["[3-7]"]]],,[,,"2(?:[12]\\d|61)\\d{4}",,,,"2123456",,,[7]],,,[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],RE:[,[,,"[268]\\d{8}",,,,,,,[9]],[,,"262\\d{6}",,,,"262161234"],[,,"69[23]\\d{6}",,,,"692123456"],[,,"80\\d{7}",,,,"801234567"],[,,"89[1-37-9]\\d{6}",,,,"891123456"],[,,"8(?:1[019]|2[0156]|84|90)\\d{6}",,,,"810123456"],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],"RE",262,"00","0",,,"0",,,,[[,"([268]\\d{2})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",,"0$1"]],,[,,,,,,,,,[-1]],1,"262|6[49]|8",[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],RO:[,[,,"[23]\\d{5,8}|[7-9]\\d{8}",,,,,,,[6,9]],[,,"2(?:1(?:\\d{7}|9\\d{3})|[3-6](?:\\d{7}|\\d9\\d{2}))|3(?:1\\d{4}(?:\\d{3})?|[3-6]\\d{7})",,,,"211234567"],[,,"7(?:[0-8]\\d{2}|99\\d)\\d{5}",,,,"712345678",,,[9]],[,,"800\\d{6}",,,,"800123456",,,[9]],[,,"90[036]\\d{6}",,,,"900123456",,,[9]],[,,"801\\d{6}",,,,"801123456",,,[9]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],"RO",40,"00","0"," int ",,"0",,,,[[,"(\\d{2})(\\d{3})(\\d{4})","$1 $2 $3",["[23]1"],"0$1"],[,"(\\d{2})(\\d{4})","$1 $2",["[23]1"],"0$1"],[,"(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3",["[23][3-7]|[7-9]"],"0$1"],[,"(2\\d{2})(\\d{3})","$1 $2",["2[3-6]"],"0$1"]],,[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,"37\\d{7}",,,,"372123456",,,[9]],,,[,,,,,,,,,[-1]]],RS:[,[,,"[126-9]\\d{4,11}|3(?:[0-79]\\d{3,10}|8[2-9]\\d{2,9})",,,,,,,[6,7,8,9,10,11,12],[5]],[,,"(?:1(?:[02-9][2-9]|1[1-9])\\d|2(?:[0-24-7][2-9]\\d|[389](?:0[2-9]|[2-9]\\d))|3(?:[0-8][2-9]\\d|9(?:[2-9]\\d|0[2-9])))\\d{3,8}",,,,"10234567",,,[7,8,9,10,11,12],[5,6]],[,,"6(?:[0-689]|7\\d)\\d{6,7}",,,,"601234567",,,[8,9,10]],[,,"800\\d{3,9}",,,,"80012345"],[,,"(?:90[0169]|78\\d)\\d{3,7}",,,,"90012345"],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],"RS",381,"00","0",,,"0",,,,[[,"([23]\\d{2})(\\d{4,9})","$1 $2",["(?:2[389]|39)0"],"0$1"],[,"([1-3]\\d)(\\d{5,10})","$1 $2",["1|2(?:[0-24-7]|[389][1-9])|3(?:[0-8]|9[1-9])"],"0$1"],[,"(6\\d)(\\d{6,8})","$1 $2",["6"],"0$1"],[,"([89]\\d{2})(\\d{3,9})","$1 $2",["[89]"],"0$1"],[,"(7[26])(\\d{4,9})","$1 $2",["7[26]"],"0$1"],[,"(7[08]\\d)(\\d{4,9})","$1 $2",["7[08]"],"0$1"]],,[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,"7[06]\\d{4,10}",,,,"700123456"],,,[,,,,,,,,,[-1]]],RU:[,[,,"[3489]\\d{9}",,,,,,,[10]],[,,"(?:3(?:0[12]|4[1-35-79]|5[1-3]|65|8[1-58]|9[0145])|4(?:01|1[1356]|2[13467]|7[1-5]|8[1-7]|9[1-689])|8(?:1[1-8]|2[01]|3[13-6]|4[0-8]|5[15]|6[1-35-79]|7[1-37-9]))\\d{7}",,,,"3011234567"],[,,"9\\d{9}",,,,"9123456789"],[,,"80[04]\\d{7}",,,,"8001234567"],[,,"80[39]\\d{7}",,,,"8091234567"],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],"RU",7,"810","8",,,"8",,"8~10",,[[,"(\\d{3})(\\d{2})(\\d{2})","$1-$2-$3",["[1-79]"],"$1",,1],[,"([3489]\\d{2})(\\d{3})(\\d{2})(\\d{2})","$1 $2-$3-$4",["[34689]"],"8 ($1)",,1],[,"(7\\d{2})(\\d{3})(\\d{4})","$1 $2 $3",["7"],"8 ($1)",,1]],[[,"([3489]\\d{2})(\\d{3})(\\d{2})(\\d{2})","$1 $2-$3-$4",["[34689]"],"8 ($1)",,1],[,"(7\\d{2})(\\d{3})(\\d{4})","$1 $2 $3",["7"],"8 ($1)",,1]],[,,,,,,,,,[-1]],1,,[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],RW:[,[,,"[027-9]\\d{7,8}",,,,,,,[8,9]],[,,"2[258]\\d{7}|06\\d{6}",,,,"250123456"],[,,"7[238]\\d{7}",,,,"720123456",,,[9]],[,,"800\\d{6}",,,,"800123456",,,[9]],[,,"900\\d{6}",,,,"900123456",,,[9]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],"RW",250,"00","0",,,"0",,,,[[,"(2\\d{2})(\\d{3})(\\d{3})","$1 $2 $3",["2"],"$1"],[,"([7-9]\\d{2})(\\d{3})(\\d{3})","$1 $2 $3",["[7-9]"],"0$1"],[,"(0\\d)(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",["0"]]],,[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],1,,[,,,,,,,,,[-1]]],SA:[,[,,"1\\d{7,8}|(?:[2-467]|92)\\d{7}|5\\d{8}|8\\d{9}",,,,,,,[8,9,10],[7]],[,,"11\\d{7}|1?(?:2[24-8]|3[35-8]|4[3-68]|6[2-5]|7[235-7])\\d{6}",,,,"112345678",,,[8,9],[7]],[,,"(?:5(?:[013-689]\\d|7[0-26-8])|811\\d)\\d{6}",,,,"512345678",,,[9,10]],[,,"800\\d{7}",,,,"8001234567",,,[10]],[,,,,,,,,,[-1]],[,,"92[05]\\d{6}",,,,"920012345",,,[9]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],"SA",966,"00","0",,,"0",,,,[[,"([1-467])(\\d{3})(\\d{4})","$1 $2 $3",["[1-467]"],"0$1"],[,"(1\\d)(\\d{3})(\\d{4})","$1 $2 $3",["1[1-467]"],"0$1"],[,"(5\\d)(\\d{3})(\\d{4})","$1 $2 $3",["5"],"0$1"],[,"(92\\d{2})(\\d{5})","$1 $2",["92"],"$1"],[,"(800)(\\d{3})(\\d{4})","$1 $2 $3",["80"],"$1"],[,"(811)(\\d{3})(\\d{3,4})","$1 $2 $3",["81"],"0$1"]],,[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],SB:[,[,,"[1-9]\\d{4,6}",,,,,,,[5,7]],[,,"(?:1[4-79]|[23]\\d|4[0-2]|5[03]|6[0-37])\\d{3}",,,,"40123",,,[5]],[,,"48\\d{3}|7(?:30|[46-8]\\d|5[025-9]|9[0-5])\\d{4}|8[4-9]\\d{5}|9(?:1[2-9]|2[013-9]|3[0-2]|[46]\\d|5[0-46-9]|7[0-689]|8[0-79]|9[0-8])\\d{4}",,,,"7421234"],[,,"1[38]\\d{3}",,,,"18123",,,[5]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,"5[12]\\d{3}",,,,"51123",,,[5]],"SB",677,"0[01]",,,,,,,,[[,"(\\d{2})(\\d{5})","$1 $2",["[7-9]"]]],,[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],SC:[,[,,"[24689]\\d{5,6}",,,,,,,[7]],[,,"4[2-46]\\d{5}",,,,"4217123"],[,,"2[5-8]\\d{5}",,,,"2510123"],[,,"8000\\d{3}",,,,"8000000"],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,"(?:64\\d|971)\\d{4}",,,,"6412345"],"SC",248,"0(?:[02]|10?)",,,,,,"00",,[[,"(\\d)(\\d{3})(\\d{3})","$1 $2 $3",["[246]"]]],,[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],SD:[,[,,"[19]\\d{8}",,,,,,,[9]],[,,"1(?:[125]\\d|8[3567])\\d{6}",,,,"121231234"],[,,"9[0-3569]\\d{7}",,,,"911231234"],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],"SD",249,"00","0",,,"0",,,,[[,"(\\d{2})(\\d{3})(\\d{4})","$1 $2 $3",,"0$1"]],,[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],SE:[,[,,"[1-35-9]\\d{5,11}|4\\d{6,8}",,,,,,,[6,7,8,9,10,12]],[,,"1(?:0[1-8]\\d{6}|[136]\\d{5,7}|(?:2[0-35]|4[0-4]|5[0-25-9]|7[13-6]|[89]\\d)\\d{5,6})|2(?:[136]\\d{5,7}|(?:2[0-7]|4[0136-8]|5[0138]|7[018]|8[01]|9[0-57])\\d{5,6})|3(?:[356]\\d{5,7}|(?:0[0-4]|1\\d|2[0-25]|4[056]|7[0-2]|8[0-3]|9[023])\\d{5,6})|4(?:[0246]\\d{5,7}|(?:1[013-8]|3[0135]|5[14-79]|7[0-246-9]|8[0156]|9[0-689])\\d{5,6})|5(?:0[0-6]|[15][0-5]|2[0-68]|3[0-4]|4\\d|6[03-5]|7[013]|8[0-79]|9[01])\\d{5,6}|6(?:[03]\\d{5,7}|(?:1[1-3]|2[0-4]|4[02-57]|5[0-37]|6[0-3]|7[0-2]|8[0247]|9[0-356])\\d{5,6})|8\\d{6,8}|9(?:0[1-9]\\d{4,6}|(?:1[0-68]|2\\d|3[02-5]|4[0-3]|5[0-4]|[68][01]|7[0135-8])\\d{5,6})",,,,"8123456",,,[7,8,9]],[,,"7[02369]\\d{7}",,,,"701234567",,,[9]],[,,"20\\d{4,7}",,,,"20123456",,,[6,7,8,9]],[,,"649\\d{6}|9(?:00|39|44)[1-8]\\d{3,6}",,,,"9001234567",,,[7,8,9,10]],[,,"77(?:0\\d{3}(?:\\d{3})?|[1-7]\\d{6})",,,,"771234567",,,[6,9]],[,,"75[1-8]\\d{6}",,,,"751234567",,,[9]],[,,,,,,,,,[-1]],"SE",46,"00","0",,,"0",,,,[[,"(8)(\\d{2,3})(\\d{2,3})(\\d{2})","$1-$2 $3 $4",["8"],"0$1"],[,"([1-69]\\d)(\\d{2,3})(\\d{2})(\\d{2})","$1-$2 $3 $4",["1[013689]|2[0136]|3[1356]|4[0246]|54|6[03]|90"],"0$1"],[,"([1-469]\\d)(\\d{3})(\\d{2})","$1-$2 $3",["1[136]|2[136]|3[356]|4[0246]|6[03]|90"],"0$1"],[,"(\\d{3})(\\d{2})(\\d{2})(\\d{2})","$1-$2 $3 $4",["1[2457]|2(?:[247-9]|5[0138])|3[0247-9]|4[1357-9]|5[0-35-9]|6(?:[124-689]|7[0-2])|9(?:[125-8]|3[0-5]|4[0-3])"],"0$1"],[,"(\\d{3})(\\d{2,3})(\\d{2})","$1-$2 $3",["1[2457]|2(?:[247-9]|5[0138])|3[0247-9]|4[1357-9]|5[0-35-9]|6(?:[124-689]|7[0-2])|9(?:[125-8]|3[0-5]|4[0-3])"],"0$1"],[,"(7\\d)(\\d{3})(\\d{2})(\\d{2})","$1-$2 $3 $4",["7"],"0$1"],[,"(77)(\\d{2})(\\d{2})","$1-$2$3",["7"],"0$1"],[,"(20)(\\d{2,3})(\\d{2})","$1-$2 $3",["20"],"0$1"],[,"(9[034]\\d)(\\d{2})(\\d{2})(\\d{3})","$1-$2 $3 $4",["9[034]"],"0$1"],[,"(9[034]\\d)(\\d{4})","$1-$2",["9[034]"],"0$1"],[,"(\\d{3})(\\d{2})(\\d{3})(\\d{2})(\\d{2})","$1-$2 $3 $4 $5",["25[245]|67[3-6]"],"0$1"]],[[,"(8)(\\d{2,3})(\\d{2,3})(\\d{2})","$1 $2 $3 $4",["8"]],[,"([1-69]\\d)(\\d{2,3})(\\d{2})(\\d{2})","$1 $2 $3 $4",["1[013689]|2[0136]|3[1356]|4[0246]|54|6[03]|90"]],[,"([1-469]\\d)(\\d{3})(\\d{2})","$1 $2 $3",["1[136]|2[136]|3[356]|4[0246]|6[03]|90"]],[,"(\\d{3})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",["1[2457]|2(?:[247-9]|5[0138])|3[0247-9]|4[1357-9]|5[0-35-9]|6(?:[124-689]|7[0-2])|9(?:[125-8]|3[0-5]|4[0-3])"]],[,"(\\d{3})(\\d{2,3})(\\d{2})","$1 $2 $3",["1[2457]|2(?:[247-9]|5[0138])|3[0247-9]|4[1357-9]|5[0-35-9]|6(?:[124-689]|7[0-2])|9(?:[125-8]|3[0-5]|4[0-3])"]],[,"(7\\d)(\\d{3})(\\d{2})(\\d{2})","$1 $2 $3 $4",["7"]],[,"(77)(\\d{2})(\\d{2})","$1 $2 $3",["7"]],[,"(20)(\\d{2,3})(\\d{2})","$1 $2 $3",["20"]],[,"(9[034]\\d)(\\d{2})(\\d{2})(\\d{3})","$1 $2 $3 $4",["9[034]"]],[,"(9[034]\\d)(\\d{4})","$1 $2",["9[034]"]],[,"(\\d{3})(\\d{2})(\\d{3})(\\d{2})(\\d{2})","$1 $2 $3 $4 $5",["25[245]|67[3-6]"]]],[,,"74[02-9]\\d{6}",,,,"740123456",,,[9]],,,[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,,[,,"(?:25[245]|67[3-6])\\d{9}",,,,"254123456789",,,[12]]],SG:[,[,,"[36]\\d{7}|[17-9]\\d{7,10}",,,,,,,[8,10,11]],[,,"6[1-9]\\d{6}",,,,"61234567",,,[8]],[,,"(?:8[1-8]|9[0-8])\\d{6}",,,,"81234567",,,[8]],[,,"1?800\\d{7}",,,,"18001234567",,,[10,11]],[,,"1900\\d{7}",,,,"19001234567",,,[11]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,"3[12]\\d{6}",,,,"31234567",,,[8]],"SG",65,"0[0-3]\\d",,,,,,,,[[,"([3689]\\d{3})(\\d{4})","$1 $2",["[369]|8[1-9]"]],[,"(1[89]00)(\\d{3})(\\d{4})","$1 $2 $3",["1[89]"]],[,"(7000)(\\d{4})(\\d{3})","$1 $2 $3",["70"]],[,"(800)(\\d{3})(\\d{4})","$1 $2 $3",["80"]]],,[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,"7000\\d{7}",,,,"70001234567",,,[11]],,,[,,,,,,,,,[-1]]],SH:[,[,,"[256]\\d{4}",,,,,,,[4,5]],[,,"2(?:[0-57-9]\\d|6[4-9])\\d{2}",,,,"22158"],[,,"[56]\\d{4}",,,,"51234",,,[5]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,"262\\d{2}",,,,"26212",,,[5]],"SH",290,"00",,,,,,,,,,[,,,,,,,,,[-1]],1,,[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],SI:[,[,,"[1-7]\\d{6,7}|[89]\\d{4,7}",,,,,,,[5,6,7,8]],[,,"(?:1\\d|[25][2-8]|3[24-8]|4[24-8]|7[3-8])\\d{6}",,,,"11234567",,,[8],[7]],[,,"(?:[37][01]|4[0139]|51|6[48])\\d{6}",,,,"31234567",,,[8]],[,,"80\\d{4,6}",,,,"80123456",,,[6,7,8]],[,,"90\\d{4,6}|89[1-3]\\d{2,5}",,,,"90123456"],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,"(?:59|8[1-3])\\d{6}",,,,"59012345",,,[8]],"SI",386,"00","0",,,"0",,,,[[,"(\\d)(\\d{3})(\\d{2})(\\d{2})","$1 $2 $3 $4",["[12]|3[24-8]|4[24-8]|5[2-8]|7[3-8]"],"(0$1)"],[,"([3-7]\\d)(\\d{3})(\\d{3})","$1 $2 $3",["[37][01]|4[0139]|51|6"],"0$1"],[,"([89][09])(\\d{3,6})","$1 $2",["[89][09]"],"0$1"],[,"([58]\\d{2})(\\d{5})","$1 $2",["59|8[1-3]"],"0$1"]],,[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],SJ:[,[,,"0\\d{4}|[45789]\\d{7}",,,,,,,[5,8]],[,,"79\\d{6}",,,,"79123456",,,[8]],[,,"(?:4[015-8]|5[89]|9\\d)\\d{6}",,,,"41234567",,,[8]],[,,"80[01]\\d{5}",,,,"80012345",,,[8]],[,,"82[09]\\d{5}",,,,"82012345",,,[8]],[,,"810(?:0[0-6]|[2-8]\\d)\\d{3}",,,,"81021234",,,[8]],[,,"880\\d{5}",,,,"88012345",,,[8]],[,,"85[0-5]\\d{5}",,,,"85012345",,,[8]],"SJ",47,"00",,,,,,,,,,[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,"0\\d{4}|81(?:0(?:0[7-9]|1\\d)|5\\d{2})\\d{3}",,,,"01234"],1,,[,,"81[23]\\d{5}",,,,"81212345",,,[8]]],SK:[,[,,"(?:[2-68]\\d{5,8}|9\\d{6,8})",,,,,,,[6,7,9]],[,,"2(?:1(?:6\\d{3,4}|7\\d{3})|[2-9]\\d{7})|[3-5][1-8](?:1(?:6\\d{2,3}|7\\d{3})|\\d{7})",,,,"221234567"],[,,"9(?:0(?:[1-8]\\d|9[1-9])|(?:1[0-24-9]|[45]\\d)\\d)\\d{5}",,,,"912123456",,,[9]],[,,"800\\d{6}",,,,"800123456",,,[9]],[,,"9(?:[78]\\d{7}|00\\d{6})",,,,"900123456",,,[9]],[,,"8[5-9]\\d{7}",,,,"850123456",,,[9]],[,,,,,,,,,[-1]],[,,"6(?:02|5[0-4]|9[0-6])\\d{6}",,,,"690123456",,,[9]],"SK",421,"00","0",,,"0",,,,[[,"(2)(1[67])(\\d{3,4})","$1 $2 $3",["21[67]"],"0$1"],[,"([3-5]\\d)(1[67])(\\d{2,3})","$1 $2 $3",["[3-5]"],"0$1"],[,"(2)(\\d{3})(\\d{3})(\\d{2})","$1/$2 $3 $4",["2"],"0$1"],[,"([3-5]\\d)(\\d{3})(\\d{2})(\\d{2})","$1/$2 $3 $4",["[3-5]"],"0$1"],[,"([689]\\d{2})(\\d{3})(\\d{3})","$1 $2 $3",["[689]"],"0$1"],[,"(9090)(\\d{3})","$1 $2",["9090"],"0$1"]],,[,,"9090\\d{3}",,,,"9090123",,,[7]],,,[,,"(?:602|8(?:00|[5-9]\\d)|9(?:00|[78]\\d))\\d{6}|9090\\d{3}",,,,"800123456",,,[7,9]],[,,"96\\d{7}",,,,"961234567",,,[9]],,,[,,,,,,,,,[-1]]],SL:[,[,,"[2-9]\\d{7}",,,,,,,[8],[6]],[,,"[235]2[2-4][2-9]\\d{4}",,,,"22221234",,,,[6]],[,,"(?:2[15]|3[03-5]|4[04]|5[05]|66|7[6-9]|8[08]|99)\\d{6}",,,,"25123456"],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],"SL",232,"00","0",,,"0",,,,[[,"(\\d{2})(\\d{6})","$1 $2",,"(0$1)"]],,[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],SM:[,[,,"[05-7]\\d{7,9}",,,,,,,[8,10],[6]],[,,"0549(?:8[0157-9]|9\\d)\\d{4}",,,,"0549886377",,,[10],[6]],[,,"6[16]\\d{6}",,,,"66661212",,,[8]],[,,,,,,,,,[-1]],[,,"7[178]\\d{6}",,,,"71123456",,,[8]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,"5[158]\\d{6}",,,,"58001110",,,[8]],"SM",378,"00",,,,"(?:0549)?([89]\\d{5})","0549$1",,,[[,"(\\d{2})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",["[5-7]"]],[,"(0549)(\\d{6})","$1 $2",["0"]],[,"(\\d{6})","0549 $1",["[89]"]]],[[,"(\\d{2})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",["[5-7]"]],[,"(0549)(\\d{6})","($1) $2",["0"]],[,"(\\d{6})","(0549) $1",["[89]"]]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],1,,[,,,,,,,,,[-1]]],SN:[,[,,"[3789]\\d{8}",,,,,,,[9]],[,,"3(?:0(?:1[0-2]|80)|282|3(?:8[1-9]|9[3-9])|611)\\d{5}",,,,"301012345"],[,,"7(?:[06-8]\\d|21|90)\\d{6}",,,,"701234567"],[,,"800\\d{6}",,,,"800123456"],[,,"88[4689]\\d{6}",,,,"884123456"],[,,"81[02468]\\d{6}",,,,"810123456"],[,,,,,,,,,[-1]],[,,"39[01]\\d{6}|3392\\d{5}|93330\\d{4}",,,,"933301234"],"SN",221,"00",,,,,,,,[[,"(\\d{2})(\\d{3})(\\d{2})(\\d{2})","$1 $2 $3 $4",["[379]"]],[,"(\\d{3})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",["8"]]],,[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],SO:[,[,,"[1-9]\\d{5,8}",,,,,,,[6,7,8,9]],[,,"(?:1\\d{1,2}|2[0-79]\\d|3[0-46-8]?\\d|4[0-7]?\\d|59\\d|8[125])\\d{4}",,,,"4012345",,,[6,7]],[,,"(?:15\\d|2(?:4\\d|8)|3[59]\\d{2}|4[89]\\d{2}|6[1-9]?\\d{2}|7(?:[1-8]\\d|9\\d{1,2})|8[08]\\d{2}|9(?:0[67]|[2-9])\\d)\\d{5}",,,,"71123456",,,[7,8,9]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],"SO",252,"00","0",,,"0",,,,[[,"(\\d{6})","$1",["[134]"]],[,"(\\d)(\\d{6})","$1 $2",["2[0-79]|[13-5]"]],[,"(\\d)(\\d{7})","$1 $2",["24|[67]"]],[,"(\\d{2})(\\d{4})","$1 $2",["8[125]"]],[,"(\\d{2})(\\d{5,7})","$1 $2",["15|28|6[1-35-9]|799|9[2-9]"]],[,"(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3",["3[59]|4[89]|6[24-6]|79|8[08]|90"]]],,[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],SR:[,[,,"[2-8]\\d{5,6}",,,,,,,[6,7]],[,,"(?:2[1-3]|3[0-7]|4\\d|5[2-58]|68\\d)\\d{4}",,,,"211234"],[,,"(?:7[124-7]|8[1-9])\\d{5}",,,,"7412345",,,[7]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,"56\\d{4}",,,,"561234",,,[6]],"SR",597,"00",,,,,,,,[[,"(\\d{3})(\\d{3})","$1-$2",["[2-4]|5[2-58]"]],[,"(\\d{2})(\\d{2})(\\d{2})","$1-$2-$3",["56"]],[,"(\\d{3})(\\d{4})","$1-$2",["[6-8]"]]],,[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],SS:[,[,,"[19]\\d{8}",,,,,,,[9]],[,,"18\\d{7}",,,,"181234567"],[,,"(?:12|9[1257])\\d{7}",,,,"977123456"],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],"SS",211,"00","0",,,"0",,,,[[,"(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3",,"0$1"]],,[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],ST:[,[,,"[29]\\d{6}",,,,,,,[7]],[,,"22\\d{5}",,,,"2221234"],[,,"9(?:0(?:0[5-9]|[1-9]\\d)|[89]\\d{2})\\d{3}",,,,"9812345"],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],"ST",239,"00",,,,,,,,[[,"(\\d{3})(\\d{4})","$1 $2"]],,[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],SV:[,[,,"[267]\\d{7}|[89]\\d{6}(?:\\d{4})?",,,,,,,[7,8,11]],[,,"2[1-6]\\d{6}",,,,"21234567",,,[8]],[,,"[67]\\d{7}",,,,"70123456",,,[8]],[,,"800\\d{4}(?:\\d{4})?",,,,"8001234",,,[7,11]],[,,"900\\d{4}(?:\\d{4})?",,,,"9001234",,,[7,11]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],"SV",503,"00",,,,,,,,[[,"(\\d{4})(\\d{4})","$1 $2",["[267]"]],[,"(\\d{3})(\\d{4})","$1 $2",["[89]"]],[,"(\\d{3})(\\d{4})(\\d{4})","$1 $2 $3",["[89]"]]],,[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],SX:[,[,,"[5789]\\d{9}",,,,,,,[10],[7]],[,,"7215(?:4[2-8]|8[239]|9[056])\\d{4}",,,,"7215425678",,,,[7]],[,,"7215(?:1[02]|2\\d|5[034679]|8[014-8])\\d{4}",,,,"7215205678",,,,[7]],[,,"8(?:00|33|44|55|66|77|88)[2-9]\\d{6}",,,,"8002123456"],[,,"900[2-9]\\d{6}",,,,"9002123456"],[,,,,,,,,,[-1]],[,,"5(?:00|22|33|44|66|77|88)[2-9]\\d{6}",,,,"5002345678"],[,,,,,,,,,[-1]],"SX",1,"011","1",,,"1",,,,,,[,,,,,,,,,[-1]],,"721",[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],SY:[,[,,"[1-59]\\d{7,8}",,,,,,,[8,9],[6,7]],[,,"(?:1(?:1\\d?|4\\d|[2356])|2(?:1\\d?|[235])|3(?:[13]\\d|4)|4[13]|5[1-3])\\d{6}",,,,"112345678",,,,[6,7]],[,,"9(?:22|[3-589]\\d|6[024-9])\\d{6}",,,,"944567890",,,[9]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],"SY",963,"00","0",,,"0",,,,[[,"(\\d{2})(\\d{3})(\\d{3,4})","$1 $2 $3",["[1-5]"],"0$1",,1],[,"(9\\d{2})(\\d{3})(\\d{3})","$1 $2 $3",["9"],"0$1",,1]],,[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],SZ:[,[,,"[027]\\d{7}",,,,,,,[8]],[,,"2[2-5]\\d{6}",,,,"22171234"],[,,"7[6-8]\\d{6}",,,,"76123456"],[,,"0800\\d{4}",,,,"08001234"],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],"SZ",268,"00",,,,,,,,[[,"(\\d{4})(\\d{4})","$1 $2",["[027]"]]],,[,,,,,,,,,[-1]],,,[,,"0800\\d{4}",,,,"08001234"],[,,,,,,,,,[-1]],1,,[,,,,,,,,,[-1]]],TA:[,[,,"8\\d{3}",,,,,,,[4]],[,,"8\\d{3}",,,,"8999"],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],"TA",290,"00",,,,,,,,,,[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],TC:[,[,,"[5689]\\d{9}",,,,,,,[10],[7]],[,,"649(?:712|9(?:4\\d|50))\\d{4}",,,,"6497121234",,,,[7]],[,,"649(?:2(?:3[129]|4[1-7])|3(?:3[1-389]|4[1-8])|4[34][1-3])\\d{4}",,,,"6492311234",,,,[7]],[,,"8(?:00|33|44|55|66|77|88)[2-9]\\d{6}",,,,"8002345678"],[,,"900[2-9]\\d{6}",,,,"9002345678"],[,,,,,,,,,[-1]],[,,"5(?:00|22|33|44|66|77|88)[2-9]\\d{6}",,,,"5002345678"],[,,"64971[01]\\d{4}",,,,"6497101234",,,,[7]],"TC",1,"011","1",,,"1",,,,,,[,,,,,,,,,[-1]],,"649",[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],TD:[,[,,"[2679]\\d{7}",,,,,,,[8]],[,,"22(?:[3789]0|5[0-5]|6[89])\\d{4}",,,,"22501234"],[,,"(?:6[023568]\\d|77\\d|9\\d{2})\\d{5}",,,,"63012345"],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],"TD",235,"00|16",,,,,,"00",,[[,"(\\d{2})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4"]],,[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],TG:[,[,,"[29]\\d{7}",,,,,,,[8]],[,,"2(?:2[2-7]|3[23]|44|55|66|77)\\d{5}",,,,"22212345"],[,,"9[0-36-9]\\d{6}",,,,"90112345"],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],"TG",228,"00",,,,,,,,[[,"(\\d{2})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",["[29]"]]],,[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],TH:[,[,,"[2-9]\\d{7,8}|1\\d{3}(?:\\d{5,6})?",,,,,,,[4,8,9,10]],[,,"(?:2\\d|3[2-9]|4[2-5]|5[2-6]|7[3-7])\\d{6}",,,,"21234567",,,[8]],[,,"(?:14|6[1-6]|[89]\\d)\\d{7}",,,,"812345678",,,[9]],[,,"1800\\d{6}",,,,"1800123456",,,[10]],[,,"1900\\d{6}",,,,"1900123456",,,[10]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,"6[08]\\d{7}",,,,"601234567",,,[9]],"TH",66,"00","0",,,"0",,,,[[,"(2)(\\d{3})(\\d{4})","$1 $2 $3",["2"],"0$1"],[,"([13-9]\\d)(\\d{3})(\\d{3,4})","$1 $2 $3",["14|[3-9]"],"0$1"],[,"(1[89]00)(\\d{3})(\\d{3})","$1 $2 $3",["1"],"$1"]],,[,,,,,,,,,[-1]],,,[,,"1\\d{3}",,,,"1100",,,[4]],[,,"1\\d{3}",,,,"1100",,,[4]],,,[,,,,,,,,,[-1]]],TJ:[,[,,"[3-57-9]\\d{8}",,,,,,,[9],[3,5,7]],[,,"(?:3(?:1[3-5]|2[245]|3[12]|4[24-7]|5[25]|72)|4(?:46|74|87))\\d{6}",,,,"372123456",,,,[3,5,7]],[,,"(?:41[18]|(?:5[05]|77|88|9[0-35-9])\\d)\\d{6}",,,,"917123456"],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],"TJ",992,"810","8",,,"8",,"8~10",,[[,"([349]\\d{2})(\\d{2})(\\d{4})","$1 $2 $3",["[34]7|91[78]"],"$1",,1],[,"([457-9]\\d)(\\d{3})(\\d{4})","$1 $2 $3",["4[148]|[578]|9(?:1[59]|[0235-9])"],"$1",,1],[,"(331700)(\\d)(\\d{2})","$1 $2 $3",["331","3317","33170","331700"],"$1",,1],[,"(\\d{4})(\\d)(\\d{4})","$1 $2 $3",["3[1-5]","3(?:[1245]|3(?:[02-9]|1[0-589]))"],"$1",,1]],,[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],TK:[,[,,"[2-47]\\d{3,6}",,,,,,,[4,5,6,7]],[,,"(?:2[2-4]|[34]\\d)\\d{2,5}",,,,"3101"],[,,"7[2-4]\\d{2,5}",,,,"7290"],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],"TK",690,"00",,,,,,,,,,[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],TL:[,[,,"[2-489]\\d{6}|7\\d{6,7}",,,,,,,[7,8]],[,,"(?:2[1-5]|3[1-9]|4[1-4])\\d{5}",,,,"2112345",,,[7]],[,,"7[3-8]\\d{6}",,,,"77212345",,,[8]],[,,"80\\d{5}",,,,"8012345",,,[7]],[,,"90\\d{5}",,,,"9012345",,,[7]],[,,,,,,,,,[-1]],[,,"70\\d{5}",,,,"7012345",,,[7]],[,,,,,,,,,[-1]],"TL",670,"00",,,,,,,,[[,"(\\d{3})(\\d{4})","$1 $2",["[2-489]"]],[,"(\\d{4})(\\d{4})","$1 $2",["7"]]],,[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],TM:[,[,,"[1-6]\\d{7}",,,,,,,[8]],[,,"(?:1(?:2\\d|3[1-9])|2(?:22|4[0-35-8])|3(?:22|4[03-9])|4(?:22|3[128]|4\\d|6[15])|5(?:22|5[7-9]|6[014-689]))\\d{5}",,,,"12345678"],[,,"6[1-9]\\d{6}",,,,"66123456"],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],"TM",993,"810","8",,,"8",,"8~10",,[[,"(\\d{2})(\\d{2})(\\d{2})(\\d{2})","$1 $2-$3-$4",["12"],"(8 $1)"],[,"(\\d{2})(\\d{6})","$1 $2",["6"],"8 $1"],[,"(\\d{3})(\\d)(\\d{2})(\\d{2})","$1 $2-$3-$4",["13|[2-5]"],"(8 $1)"]],,[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],TN:[,[,,"[2-57-9]\\d{7}",,,,,,,[8]],[,,"3(?:[012]\\d|6[0-4]|91)\\d{5}|7\\d{7}|81200\\d{3}",,,,"71234567"],[,,"(?:[259]\\d|4[0-6])\\d{6}",,,,"20123456"],[,,"8010\\d{4}",,,,"80101234"],[,,"88\\d{6}",,,,"88123456"],[,,"8[12]10\\d{4}",,,,"81101234"],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],"TN",216,"00",,,,,,,,[[,"(\\d{2})(\\d{3})(\\d{3})","$1 $2 $3"]],,[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],TO:[,[,,"[02-8]\\d{4,6}",,,,,,,[5,7]],[,,"(?:2\\d|3[1-8]|4[1-4]|[56]0|7[0149]|8[05])\\d{3}",,,,"20123",,,[5]],[,,"(?:7[578]|8[47-9])\\d{5}",,,,"7715123",,,[7]],[,,"0800\\d{3}",,,,"0800222",,,[7]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],"TO",676,"00",,,,,,,,[[,"(\\d{2})(\\d{3})","$1-$2",["[1-6]|7[0-4]|8[05]"]],[,"(\\d{3})(\\d{4})","$1 $2",["7[5-9]|8[47-9]"]],[,"(\\d{4})(\\d{3})","$1 $2",["0"]]],,[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],1,,[,,,,,,,,,[-1]]],TR:[,[,,"[2-589]\\d{9}|444\\d{4}",,,,,,,[7,10]],[,,"(?:2(?:[13][26]|[28][2468]|[45][268]|[67][246])|3(?:[13][28]|[24-6][2468]|[78][02468]|92)|4(?:[16][246]|[23578][2468]|4[26]))\\d{7}",,,,"2123456789",,,[10]],[,,"5(?:(?:0[1-7]|22|[34]\\d|5[1-59]|9[246])\\d{2}|6161)\\d{5}",,,,"5012345678",,,[10]],[,,"800\\d{7}",,,,"8001234567",,,[10]],[,,"900\\d{7}",,,,"9001234567",,,[10]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],"TR",90,"00","0",,,"0",,,,[[,"(\\d{3})(\\d{3})(\\d{2})(\\d{2})","$1 $2 $3 $4",["[23]|4(?:[0-35-9]|4[0-35-9])"],"(0$1)",,1],[,"(\\d{3})(\\d{3})(\\d{2})(\\d{2})","$1 $2 $3 $4",["5[02-69]"],"0$1",,1],[,"(\\d{3})(\\d{3})(\\d{4})","$1 $2 $3",["51|[89]"],"0$1",,1],[,"(444)(\\d{1})(\\d{3})","$1 $2 $3",["444"]]],,[,,"512\\d{7}",,,,"5123456789",,,[10]],,,[,,"444\\d{4}",,,,"4441444",,,[7]],[,,"444\\d{4}|850\\d{7}",,,,"4441444"],,,[,,,,,,,,,[-1]]],TT:[,[,,"[589]\\d{9}",,,,,,,[10],[7]],[,,"868(?:2(?:01|[23]\\d)|6(?:0[79]|1[02-8]|2[1-9]|[3-69]\\d|7[0-79])|82[124])\\d{4}",,,,"8682211234",,,,[7]],[,,"868(?:2(?:6[6-9]|[789]\\d)|3(?:0[1-9]|1[02-9]|[2-9]\\d)|4[6-9]\\d|6(?:20|78|8\\d)|7(?:0[1-9]|1[02-9]|[2-9]\\d))\\d{4}",,,,"8682911234",,,,[7]],[,,"8(?:00|33|44|55|66|77|88)[2-9]\\d{6}",,,,"8002345678"],[,,"900[2-9]\\d{6}",,,,"9002345678"],[,,,,,,,,,[-1]],[,,"5(?:00|22|33|44|66|77|88)[2-9]\\d{6}",,,,"5002345678"],[,,,,,,,,,[-1]],"TT",1,"011","1",,,"1",,,,,,[,,,,,,,,,[-1]],,"868",[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,,[,,"868619\\d{4}",,,,"8686191234",,,,[7]]],TV:[,[,,"[279]\\d{4,6}",,,,,,,[5,6,7]],[,,"2[02-9]\\d{3}",,,,"20123",,,[5]],[,,"(?:70\\d|90)\\d{4}",,,,"901234",,,[6,7]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],"TV",688,"00",,,,,,,,,,[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],TW:[,[,,"2\\d{6,8}|[3-689]\\d{7,8}|7\\d{7,9}",,,,,,,[7,8,9,10]],[,,"2(?:[235-8]\\d{7}|4\\d{6,7})|[3-8]\\d{7,8}",,,,"221234567",,,[8,9]],[,,"9\\d{8}",,,,"912345678",,,[9]],[,,"800\\d{6}",,,,"800123456",,,[9]],[,,"20(?:2|[013-9]\\d{2})\\d{4}",,,,"203123456",,,[7,9]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,"70\\d{8}",,,,"7012345678",,,[10]],"TW",886,"0(?:0[25679]|19)","0","#",,"0",,,,[[,"(20)(\\d)(\\d{4})","$1 $2 $3",["202"],"0$1"],[,"(20)(\\d{3})(\\d{4})","$1 $2 $3",["20[013-9]"],"0$1"],[,"([2-8])(\\d{3,4})(\\d{4})","$1 $2 $3",["2[23-8]|[3-6]|[78][1-9]"],"0$1"],[,"([89]\\d{2})(\\d{3})(\\d{3})","$1 $2 $3",["80|9"],"0$1"],[,"(70)(\\d{4})(\\d{4})","$1 $2 $3",["70"],"0$1"]],,[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],TZ:[,[,,"\\d{9}",,,,,,,[7,9]],[,,"2[2-8]\\d{7}",,,,"222345678"],[,,"(?:6[2-9]|7[13-9])\\d{7}",,,,"621234567",,,[9]],[,,"80[08]\\d{6}",,,,"800123456",,,[9]],[,,"90\\d{7}",,,,"900123456",,,[9]],[,,"8(?:40|6[01])\\d{6}",,,,"840123456",,,[9]],[,,,,,,,,,[-1]],[,,"41\\d{7}",,,,"412345678",,,[9]],"TZ",255,"00[056]","0",,,"0",,,,[[,"([24]\\d)(\\d{3})(\\d{4})","$1 $2 $3",["[24]"],"0$1"],[,"([67]\\d{2})(\\d{3})(\\d{3})","$1 $2 $3",["[67]"],"0$1"],[,"([89]\\d{2})(\\d{2})(\\d{4})","$1 $2 $3",["[89]"],"0$1"]],,[,,,,,,,,,[-1]],,,[,,"(?:8(?:[04]0|6[01])|90\\d)\\d{6}",,,,"800123456",,,[9]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],UA:[,[,,"[3-9]\\d{8}",,,,,,,[9],[5,6,7]],[,,"(?:3[1-8]|4[13-8]|5[1-7]|6[12459])\\d{7}",,,,"311234567",,,,[5,6,7]],[,,"(?:39|50|6[36-8]|7[13]|9[1-9])\\d{7}",,,,"391234567"],[,,"800\\d{6}",,,,"800123456"],[,,"900\\d{6}",,,,"900123456"],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,"89\\d{7}",,,,"891234567"],"UA",380,"00","0",,,"0",,"0~0",,[[,"([3-9]\\d)(\\d{3})(\\d{4})","$1 $2 $3",["[38]9|4(?:[45][0-5]|87)|5(?:0|6[37]|7[37])|6[36-8]|7|9[1-9]","[38]9|4(?:[45][0-5]|87)|5(?:0|6(?:3[14-7]|7)|7[37])|6[36-8]|7|9[1-9]"],"0$1"],[,"([3-689]\\d{2})(\\d{3})(\\d{3})","$1 $2 $3",["3[1-8]2|4[13678]2|5(?:[12457]2|6[24])|6(?:[49]2|[12][29]|5[24])|8[0-8]|90","3(?:[1-46-8]2[013-9]|52)|4(?:[1378]2|62[013-9])|5(?:[12457]2|6[24])|6(?:[49]2|[12][29]|5[24])|8[0-8]|90"],"0$1"],[,"([3-6]\\d{3})(\\d{5})","$1 $2",["3(?:5[013-9]|[1-46-8])|4(?:[137][013-9]|6|[45][6-9]|8[4-6])|5(?:[1245][013-9]|6[0135-9]|3|7[4-6])|6(?:[49][013-9]|5[0135-9]|[12][13-8])","3(?:5[013-9]|[1-46-8](?:22|[013-9]))|4(?:[137][013-9]|6(?:[013-9]|22)|[45][6-9]|8[4-6])|5(?:[1245][013-9]|6(?:3[02389]|[015689])|3|7[4-6])|6(?:[49][013-9]|5[0135-9]|[12][13-8])"],"0$1"]],,[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],UG:[,[,,"\\d{9}",,,,,,,[9],[5,6,7]],[,,"20(?:[0147]\\d{2}|2(?:40|[5-9]\\d)|3(?:0[0-4]|[23]\\d)|5[0-4]\\d|6[035-9]\\d|8[0-2]\\d)\\d{4}|[34]\\d{8}",,,,"312345678",,,,[5,6,7]],[,,"7(?:(?:0[0-7]|[15789]\\d|30|4[0-4])\\d|2(?:[03]\\d|60))\\d{5}",,,,"712345678"],[,,"800[123]\\d{5}",,,,"800123456"],[,,"90[123]\\d{6}",,,,"901123456"],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],"UG",256,"00[057]","0",,,"0",,,,[[,"(\\d{3})(\\d{6})","$1 $2",["[7-9]|20(?:[013-8]|2[5-9])|4(?:6[45]|[7-9])"],"0$1"],[,"(\\d{2})(\\d{7})","$1 $2",["3|4(?:[1-5]|6[0-36-9])"],"0$1"],[,"(2024)(\\d{5})","$1 $2",["2024"],"0$1"]],,[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],US:[,[,,"[2-9]\\d{9}",,,,,,,[10],[7]],[,,"(?:2(?:0[1-35-9]|1[02-9]|2[04589]|3[149]|4[08]|5[1-46]|6[0279]|7[026]|8[13])|3(?:0[1-57-9]|1[02-9]|2[0135]|3[0-24679]|4[67]|5[12]|6[014]|8[056])|4(?:0[124-9]|1[02-579]|2[3-5]|3[0245]|4[0235]|58|6[39]|7[0589]|8[04])|5(?:0[1-57-9]|1[0235-8]|20|3[0149]|4[01]|5[19]|6[1-37]|7[013-5]|8[056])|6(?:0[1-35-9]|1[024-9]|2[03689]|3[016]|4[16]|5[017]|6[0-279]|78|8[012])|7(?:0[1-46-8]|1[02-9]|2[0457]|3[1247]|4[037]|5[47]|6[02359]|7[02-59]|8[156])|8(?:0[1-68]|1[02-8]|28|3[0-25]|4[3578]|5[046-9]|6[02-5]|7[028])|9(?:0[1346-9]|1[02-9]|2[0589]|3[014678]|4[0179]|5[12469]|7[0-3589]|8[0459]))[2-9]\\d{6}",,,,"2015550123",,,,[7]],[,,"(?:2(?:0[1-35-9]|1[02-9]|2[04589]|3[149]|4[08]|5[1-46]|6[0279]|7[026]|8[13])|3(?:0[1-57-9]|1[02-9]|2[0135]|3[0-24679]|4[67]|5[12]|6[014]|8[056])|4(?:0[124-9]|1[02-579]|2[3-5]|3[0245]|4[0235]|58|6[39]|7[0589]|8[04])|5(?:0[1-57-9]|1[0235-8]|20|3[0149]|4[01]|5[19]|6[1-37]|7[013-5]|8[056])|6(?:0[1-35-9]|1[024-9]|2[03689]|3[016]|4[16]|5[017]|6[0-279]|78|8[012])|7(?:0[1-46-8]|1[02-9]|2[0457]|3[1247]|4[037]|5[47]|6[02359]|7[02-59]|8[156])|8(?:0[1-68]|1[02-8]|28|3[0-25]|4[3578]|5[046-9]|6[02-5]|7[028])|9(?:0[1346-9]|1[02-9]|2[0589]|3[014678]|4[0179]|5[12469]|7[0-3589]|8[0459]))[2-9]\\d{6}",,,,"2015550123",,,,[7]],[,,"8(?:00|33|44|55|66|77|88)[2-9]\\d{6}",,,,"8002345678"],[,,"900[2-9]\\d{6}",,,,"9002345678"],[,,,,,,,,,[-1]],[,,"5(?:00|22|33|44|66|77|88)[2-9]\\d{6}",,,,"5002345678"],[,,,,,,,,,[-1]],"US",1,"011","1",,,"1",,,1,[[,"(\\d{3})(\\d{4})","$1-$2",,,,1],[,"(\\d{3})(\\d{3})(\\d{4})","($1) $2-$3",,,,1]],[[,"(\\d{3})(\\d{3})(\\d{4})","$1-$2-$3"]],[,,,,,,,,,[-1]],1,,[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],UY:[,[,,"[2489]\\d{6,7}",,,,,,,[7,8]],[,,"2\\d{7}|4[2-7]\\d{6}",,,,"21231234",,,[8],[7]],[,,"9[1-9]\\d{6}",,,,"94231234",,,[8]],[,,"80[05]\\d{4}",,,,"8001234",,,[7]],[,,"90[0-8]\\d{4}",,,,"9001234",,,[7]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],"UY",598,"0(?:1[3-9]\\d|0)","0"," int. ",,"0",,"00",,[[,"(\\d{4})(\\d{4})","$1 $2",["[24]"]],[,"(\\d{2})(\\d{3})(\\d{3})","$1 $2 $3",["9[1-9]"],"0$1"],[,"(\\d{3})(\\d{4})","$1 $2",["[89]0"],"0$1"]],,[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],UZ:[,[,,"[679]\\d{8}",,,,,,,[9],[7]],[,,"(?:6(?:1(?:22|3[124]|4[1-4]|5[123578]|64)|2(?:22|3[0-57-9]|41)|5(?:22|3[3-7]|5[024-8])|6\\d{2}|7(?:[23]\\d|7[69])|9(?:22|4[1-8]|6[135]))|7(?:0(?:5[4-9]|6[0146]|7[12456]|9[135-8])|1[12]\\d|2(?:22|3[1345789]|4[123579]|5[14])|3(?:2\\d|3[1578]|4[1-35-7]|5[1-57]|61)|4(?:2\\d|3[1-579]|7[1-79])|5(?:22|5[1-9]|6[1457])|6(?:22|3[12457]|4[13-8])|9(?:22|5[1-9])))\\d{5}",,,,"662345678",,,,[7]],[,,"6(?:1(?:2(?:98|2[01])|35[0-4]|50\\d|61[23]|7(?:[01][017]|4\\d|55|9[5-9]))|2(?:11\\d|2(?:[12]1|9[01379])|5(?:[126]\\d|3[0-4])|7\\d{2})|5(?:19[01]|2(?:27|9[26])|30\\d|59\\d|7\\d{2})|6(?:2(?:1[5-9]|2[0367]|38|41|52|60)|3[79]\\d|4(?:56|83)|7(?:[07]\\d|1[017]|3[07]|4[047]|5[057]|67|8[0178]|9[79])|9[0-3]\\d)|7(?:2(?:24|3[237]|4[5-9]|7[15-8])|5(?:7[12]|8[0589])|7(?:0\\d|[39][07])|9(?:0\\d|7[079]))|9(?:2(?:1[1267]|5\\d|3[01]|7[0-4])|5[67]\\d|6(?:2[0-26]|8\\d)|7\\d{2}))\\d{4}|7(?:0\\d{3}|1(?:13[01]|6(?:0[47]|1[67]|66)|71[3-69]|98\\d)|2(?:2(?:2[79]|95)|3(?:2[5-9]|6[0-6])|57\\d|7(?:0\\d|1[17]|2[27]|3[37]|44|5[057]|66|88))|3(?:2(?:1[0-6]|21|3[469]|7[159])|33\\d|5(?:0[0-4]|5[579]|9\\d)|7(?:[0-3579]\\d|4[0467]|6[67]|8[078])|9[4-6]\\d)|4(?:2(?:29|5[0257]|6[0-7]|7[1-57])|5(?:1[0-4]|8\\d|9[5-9])|7(?:0\\d|1[024589]|2[0127]|3[0137]|[46][07]|5[01]|7[5-9]|9[079])|9(?:7[015-9]|[89]\\d))|5(?:112|2(?:0\\d|2[29]|[49]4)|3[1568]\\d|52[6-9]|7(?:0[01578]|1[017]|[23]7|4[047]|[5-7]\\d|8[78]|9[079]))|6(?:2(?:2[1245]|4[2-4])|39\\d|41[179]|5(?:[349]\\d|5[0-2])|7(?:0[017]|[13]\\d|22|44|55|67|88))|9(?:22[128]|3(?:2[0-4]|7\\d)|57[05629]|7(?:2[05-9]|3[37]|4\\d|60|7[2579]|87|9[07])))\\d{4}|9[0-57-9]\\d{7}",,,,"912345678"],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],"UZ",998,"810","8",,,"8",,"8~10",,[[,"([679]\\d)(\\d{3})(\\d{2})(\\d{2})","$1 $2 $3 $4",,"8 $1"]],,[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],VA:[,[,,"(?:0(?:878\\d{5}|6698\\d{5})|[1589]\\d{5,10}|3(?:[12457-9]\\d{8}|[36]\\d{7,9}))",,,,,,,[6,8,9,10,11]],[,,"06698\\d{5}",,,,"0669812345",,,[10]],[,,"3(?:[12457-9]\\d{8}|6\\d{7,8}|3\\d{7,9})",,,,"3123456789",,,[9,10,11]],[,,"80(?:0\\d{6}|3\\d{3})",,,,"800123456",,,[6,9]],[,,"0878\\d{5}|1(?:44|6[346])\\d{6}|89(?:2\\d{3}|4(?:[0-4]\\d{2}|[5-9]\\d{4})|5(?:[0-4]\\d{2}|[5-9]\\d{6})|9\\d{6})",,,,"899123456",,,[6,8,9,10]],[,,"84(?:[08]\\d{6}|[17]\\d{3})",,,,"848123456",,,[6,9]],[,,"1(?:78\\d|99)\\d{6}",,,,"1781234567",,,[9,10]],[,,"55\\d{8}",,,,"5512345678",,,[10]],"VA",39,"00",,,,,,,,,,[,,,,,,,,,[-1]],,,[,,"848\\d{6}",,,,"848123456",,,[9]],[,,,,,,,,,[-1]],1,,[,,,,,,,,,[-1]]],VC:[,[,,"[5789]\\d{9}",,,,,,,[10],[7]],[,,"784(?:266|3(?:6[6-9]|7\\d|8[0-24-6])|4(?:38|5[0-36-8]|8[0-8])|5(?:55|7[0-2]|93)|638|784)\\d{4}",,,,"7842661234",,,,[7]],[,,"784(?:4(?:3[0-4]|5[45]|89|9[0-58])|5(?:2[6-9]|3[0-4]))\\d{4}",,,,"7844301234",,,,[7]],[,,"8(?:00|33|44|55|66|77|88)[2-9]\\d{6}",,,,"8002345678"],[,,"900[2-9]\\d{6}",,,,"9002345678"],[,,,,,,,,,[-1]],[,,"5(?:00|22|33|44|66|77|88)[2-9]\\d{6}",,,,"5002345678"],[,,,,,,,,,[-1]],"VC",1,"011","1",,,"1",,,,,,[,,,,,,,,,[-1]],,"784",[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],VE:[,[,,"[24589]\\d{9}",,,,,,,[10],[7]],[,,"(?:2(?:12|3[457-9]|[58][1-9]|[467]\\d|9[1-6])|50[01])\\d{7}",,,,"2121234567",,,,[7]],[,,"4(?:1[24-8]|2[46])\\d{7}",,,,"4121234567"],[,,"800\\d{7}",,,,"8001234567"],[,,"900\\d{7}",,,,"9001234567"],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],"VE",58,"00","0",,,"0",,,,[[,"(\\d{3})(\\d{7})","$1-$2",,"0$1","$CC $1"]],,[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],VG:[,[,,"[2589]\\d{9}",,,,,,,[10],[7]],[,,"284(?:(?:229|4(?:22|9[45])|774|8(?:52|6[459]))\\d{4}|496[0-5]\\d{3})",,,,"2842291234",,,,[7]],[,,"284(?:(?:3(?:0[0-3]|4[0-7]|68|9[34])|4(?:4[0-6]|68|99)|54[0-57])\\d{4}|496[6-9]\\d{3})",,,,"2843001234",,,,[7]],[,,"8(?:00|33|44|55|66|77|88)[2-9]\\d{6}",,,,"8002345678"],[,,"900[2-9]\\d{6}",,,,"9002345678"],[,,,,,,,,,[-1]],[,,"5(?:00|22|33|44|66|77|88)[2-9]\\d{6}",,,,"5002345678"],[,,,,,,,,,[-1]],"VG",1,"011","1",,,"1",,,,,,[,,,,,,,,,[-1]],,"284",[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],VI:[,[,,"[3589]\\d{9}",,,,,,,[10],[7]],[,,"340(?:2(?:01|2[0678]|44|77)|3(?:32|44)|4(?:22|7[34])|5(?:1[34]|55)|6(?:26|4[23]|77|9[023])|7(?:1[2-589]|27|7\\d)|884|998)\\d{4}",,,,"3406421234",,,,[7]],[,,"340(?:2(?:01|2[0678]|44|77)|3(?:32|44)|4(?:22|7[34])|5(?:1[34]|55)|6(?:26|4[23]|77|9[023])|7(?:1[2-589]|27|7\\d)|884|998)\\d{4}",,,,"3406421234",,,,[7]],[,,"8(?:00|33|44|55|66|77|88)[2-9]\\d{6}",,,,"8002345678"],[,,"900[2-9]\\d{6}",,,,"9002345678"],[,,,,,,,,,[-1]],[,,"5(?:00|22|33|44|66|77|88)[2-9]\\d{6}",,,,"5002345678"],[,,,,,,,,,[-1]],"VI",1,"011","1",,,"1",,,1,,,[,,,,,,,,,[-1]],,"340",[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],VN:[,[,,"[167]\\d{6,9}|[2-59]\\d{7,9}|8\\d{6,8}",,,,,,,[7,8,9,10]],[,,"(?:2(?:0[3-9]|1[0-689]|2[0-25-9]|3[2-9]|[48]\\d|5[124-9]?|6[0-39]?|7[0-7]?|9[0-4679])\\d|3(?:[0136]|[25][01])\\d|4\\d{2}|5(?:0[01]|[5-9])\\d|6(?:[0-46-8]|5[01])\\d|7(?:[02-79]|[18][01])\\d)\\d{6}|8(?:[2-5]\\d|6[236]|7[13])\\d{6}",,,,"2101234567",,,[9,10]],[,,"(?:9\\d|1(?:2\\d|6[2-9]|8[68]|99))\\d{7}|8(?:6[89]|8\\d|9[89])\\d{6}",,,,"912345678",,,[9,10]],[,,"1800\\d{4,6}",,,,"1800123456",,,[8,9,10]],[,,"1900\\d{4,6}",,,,"1900123456",,,[8,9,10]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],"VN",84,"00","0",,,"0",,,,[[,"([17]99)(\\d{4})","$1 $2",["[17]99"],"0$1",,1],[,"([48])(\\d{4})(\\d{4})","$1 $2 $3",["4|8(?:[2-5]|6[236]|7[13])"],"0$1",,1],[,"([235-7]\\d)(\\d{4})(\\d{3})","$1 $2 $3",["2[5-7]|3[0136]|5[5-9]|6[0-46-8]|7[02-79]"],"0$1",,1],[,"(80)(\\d{5})","$1 $2",["80"],"0$1",,1],[,"(69\\d)(\\d{4,5})","$1 $2",["69"],"0$1",,1],[,"([235-7]\\d{2})(\\d{4})(\\d{3})","$1 $2 $3",["2(?:[0-489]|5[124-9]|6[0-39]|7[0-7])|3[25]|50|65|7[18]"],"0$1",,1],[,"([89]\\d)(\\d{3})(\\d{2})(\\d{2})","$1 $2 $3 $4",["8(?:8|9[89])|9"],"0$1",,1],[,"(1[2689]\\d)(\\d{3})(\\d{4})","$1 $2 $3",["1(?:[26]|8[68]|99)"],"0$1",,1],[,"(86[89])(\\d{3})(\\d{3})","$1 $2 $3",["86[89]"],"0$1",,1],[,"(1[89]00)(\\d{4,6})","$1 $2",["1[89]0"],"$1",,1]],,[,,,,,,,,,[-1]],,,[,,"[17]99\\d{4}|69\\d{5,6}",,,,"1992000",,,[7,8]],[,,"[17]99\\d{4}|69\\d{5,6}|80\\d{5}",,,,"1992000",,,[7,8]],,,[,,,,,,,,,[-1]]],VU:[,[,,"[2-57-9]\\d{4,6}",,,,,,,[5,7]],[,,"(?:2[02-9]\\d|3(?:[5-7]\\d|8[0-8])|48[4-9]|88\\d)\\d{2}",,,,"22123",,,[5]],[,,"(?:5(?:7[2-5]|[0-689]\\d)|7[013-7]\\d)\\d{4}",,,,"5912345",,,[7]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],"VU",678,"00",,,,,,,,[[,"(\\d{3})(\\d{4})","$1 $2",["[579]"]]],,[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,"3[03]\\d{3}|900\\d{4}",,,,"30123"],,,[,,,,,,,,,[-1]]],WF:[,[,,"[4-8]\\d{5}",,,,,,,[6]],[,,"(?:50|68|72)\\d{4}",,,,"501234"],[,,"(?:50|68|72|8[23])\\d{4}",,,,"501234"],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],"WF",681,"00",,,,,,,,[[,"(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3"]],,[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,,[,,"[48]0\\d{4}",,,,"401234"]],WS:[,[,,"[2-8]\\d{4,6}",,,,,,,[5,6,7]],[,,"(?:[2-5]\\d|6[1-9]|84\\d{2})\\d{3}",,,,"22123",,,[5,7]],[,,"(?:60|7[25-7]\\d)\\d{4}",,,,"601234",,,[6,7]],[,,"800\\d{3}",,,,"800123",,,[6]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],"WS",685,"0",,,,,,,,[[,"(8\\d{2})(\\d{3,4})","$1 $2",["8"]],[,"(7\\d)(\\d{5})","$1 $2",["7"]],[,"(\\d{5})","$1",["[2-6]"]]],,[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],YE:[,[,,"[1-7]\\d{6,8}",,,,,,,[7,8,9],[6]],[,,"(?:1(?:7\\d|[2-68])|2[2-68]|3[2358]|4[2-58]|5[2-6]|6[3-58]|7[24-68])\\d{5}",,,,"1234567",,,[7,8],[6]],[,,"7[0137]\\d{7}",,,,"712345678",,,[9]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],"YE",967,"00","0",,,"0",,,,[[,"([1-7])(\\d{3})(\\d{3,4})","$1 $2 $3",["[1-6]|7[24-68]"],"0$1"],[,"(7\\d{2})(\\d{3})(\\d{3})","$1 $2 $3",["7[0137]"],"0$1"]],,[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],YT:[,[,,"[268]\\d{8}",,,,,,,[9]],[,,"269(?:6[0-4]|50)\\d{4}",,,,"269601234"],[,,"639\\d{6}",,,,"639123456"],[,,"80\\d{7}",,,,"801234567"],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],"YT",262,"00","0",,,"0",,,,,,[,,,,,,,,,[-1]],,"269|63",[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],ZA:[,[,,"[1-79]\\d{8}|8\\d{4,8}",,,,,,,[5,6,7,8,9]],[,,"(?:1[0-8]|2[1-378]|3[1-69]|4\\d|5[1346-8])\\d{7}",,,,"101234567",,,[9]],[,,"(?:6\\d|7[0-46-9])\\d{7}|8(?:[1-4]\\d{1,5}|5\\d{5})\\d{2}",,,,"711234567"],[,,"80\\d{7}",,,,"801234567",,,[9]],[,,"86[2-9]\\d{6}|9[0-2]\\d{7}",,,,"862345678",,,[9]],[,,"860\\d{6}",,,,"860123456",,,[9]],[,,,,,,,,,[-1]],[,,"87\\d{7}",,,,"871234567",,,[9]],"ZA",27,"00","0",,,"0",,,,[[,"(860)(\\d{3})(\\d{3})","$1 $2 $3",["860"],"0$1"],[,"(\\d{2})(\\d{3,4})","$1 $2",["8[1-4]"],"0$1"],[,"(\\d{2})(\\d{3})(\\d{2,3})","$1 $2 $3",["8[1-4]"],"0$1"],[,"(\\d{2})(\\d{3})(\\d{4})","$1 $2 $3",["[1-79]|8(?:[0-57]|6[1-9])"],"0$1"]],,[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,"861\\d{6}",,,,"861123456",,,[9]],,,[,,,,,,,,,[-1]]],ZM:[,[,,"[289]\\d{8}",,,,,,,[9]],[,,"21[1-8]\\d{6}",,,,"211234567"],[,,"9(?:5[034589]|[67]\\d)\\d{6}",,,,"955123456"],[,,"800\\d{6}",,,,"800123456"],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],"ZM",260,"00","0",,,"0",,,,[[,"([29]\\d)(\\d{7})","$1 $2",["[29]"],"0$1"],[,"(800)(\\d{3})(\\d{3})","$1 $2 $3",["8"],"0$1"]],,[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],ZW:[,[,,"2(?:[012457-9]\\d{3,8}|6(?:[14]\\d{7}|\\d{4}))|[13-79]\\d{4,9}|8[06]\\d{8}",,,,,,,[5,6,7,8,9,10],[3,4]],[,,"(?:2(?:0(?:4\\d|5\\d{2})|2[278]\\d|48\\d|7(?:[1-7]\\d|[089]\\d{2})|8(?:[2-57-9]|[146]\\d{2})|98)|3(?:08|17|3[78]|7(?:[19]|[56]\\d)|8[37]|98)|5[15][78]|6(?:28\\d{2}|[36]7|75\\d|[69]8|8(?:7\\d|8)))\\d{3}|(?:2(?:1[39]|2[0157]|6[14]|7[35]|84)|329)\\d{7}|(?:1(?:3\\d{2}|9\\d|[4-8])|2(?:0\\d{2}|[569]\\d)|3(?:[26]|[013459]\\d)|5(?:0|5\\d{2}|[689]\\d)|6(?:[39]|[01246]\\d|[78]\\d{2}))\\d{3}|(?:29\\d|39|54)\\d{6}|(?:(?:25|54)83|2582\\d)\\d{3}|(?:4\\d{6,7}|9[2-9]\\d{4,5})",,,,"1312345",,,,[3,4]],[,,"7[1378]\\d{7}",,,,"711234567",,,[9]],[,,"800\\d{7}",,,,"8001234567",,,[10]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,"86(?:1[12]|30|44|55|77|8[367]|99)\\d{6}",,,,"8686123456",,,[10]],"ZW",263,"00","0",,,"0",,,,[[,"([49])(\\d{3})(\\d{2,4})","$1 $2 $3",["4|9[2-9]"],"0$1"],[,"(7\\d)(\\d{3})(\\d{3,4})","$1 $2 $3",["7"],"0$1"],[,"(86\\d{2})(\\d{3})(\\d{3})","$1 $2 $3",["86[24]"],"0$1"],[,"([2356]\\d{2})(\\d{3,5})","$1 $2",["2(?:0[45]|2[278]|[49]8|[78])|3(?:08|17|3[78]|7[1569]|8[37]|98)|5[15][78]|6(?:[29]8|[38]7|6[78]|75|[89]8)"],"0$1"],[,"(\\d{3})(\\d{3})(\\d{3,4})","$1 $2 $3",["2(?:1[39]|2[0157]|6[14]|7[35]|84)|329"],"0$1"],[,"([1-356]\\d)(\\d{3,5})","$1 $2",["1[3-9]|2[0569]|3[0-69]|5[05689]|6[0-46-9]"],"0$1"],[,"([235]\\d)(\\d{3})(\\d{3,4})","$1 $2 $3",["[23]9|54"],"0$1"],[,"([25]\\d{3})(\\d{3,5})","$1 $2",["(?:25|54)8","258[23]|5483"],"0$1"],[,"(8\\d{3})(\\d{6})","$1 $2",["86"],"0$1"],[,"(80\\d)(\\d{3})(\\d{4})","$1 $2 $3",["80"],"0$1"]],,[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],800:[,[,,"\\d{8}",,,,,,,[8]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,"\\d{8}",,,,"12345678"],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],"001",800,,,,,,,,1,[[,"(\\d{4})(\\d{4})","$1 $2"]],,[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],1,,[,,,,,,,,,[-1]]],808:[,[,,"\\d{8}",,,,,,,[8]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,"\\d{8}",,,,"12345678"],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],"001",808,,,,,,,,1,[[,"(\\d{4})(\\d{4})","$1 $2"]],,[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],1,,[,,,,,,,,,[-1]]],870:[,[,,"[35-7]\\d{8}",,,,,,,[9]],[,,,,,,,,,[-1]],[,,"(?:[356]\\d|7[6-8])\\d{7}",,,,"301234567"],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],"001",870,,,,,,,,,[[,"(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3"]],,[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],878:[,[,,"1\\d{11}",,,,,,,[12]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,"10\\d{10}",,,,"101234567890"],"001",878,,,,,,,,1,[[,"(\\d{2})(\\d{5})(\\d{5})","$1 $2 $3"]],,[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],881:[,[,,"[67]\\d{8}",,,,,,,[9]],[,,,,,,,,,[-1]],[,,"[67]\\d{8}",,,,"612345678"],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],"001",881,,,,,,,,,[[,"(\\d)(\\d{3})(\\d{5})","$1 $2 $3",["[67]"]]],,[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],882:[,[,,"[13]\\d{6,11}",,,,,,,[7,8,9,10,11,12]],[,,,,,,,,,[-1]],[,,"3(?:2\\d{3}|37\\d{2}|4(?:2|7\\d{3}))\\d{4}",,,,"3421234",,,[7,9,10]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,"1(?:3(?:0[0347]|[13][0139]|2[035]|4[013568]|6[0459]|7[06]|8[15678]|9[0689])\\d{4}|6\\d{5,10})|3(?:45|9\\d{3})\\d{7}",,,,"390123456789"],"001",882,,,,,,,,,[[,"(\\d{2})(\\d{4})(\\d{3})","$1 $2 $3",["3[23]"]],[,"(\\d{2})(\\d{5})","$1 $2",["16|342"]],[,"(\\d{2})(\\d{4})(\\d{4})","$1 $2 $3",["34[57]"]],[,"(\\d{3})(\\d{4})(\\d{4})","$1 $2 $3",["348"]],[,"(\\d{2})(\\d{2})(\\d{4})","$1 $2 $3",["1"]],[,"(\\d{2})(\\d{3,4})(\\d{4})","$1 $2 $3",["16"]],[,"(\\d{2})(\\d{4,5})(\\d{5})","$1 $2 $3",["16|39"]]],,[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,,[,,"348[57]\\d{7}",,,,"34851234567",,,[11]]],883:[,[,,"51\\d{7}(?:\\d{3})?",,,,,,,[9,12]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,"51(?:00\\d{5}(?:\\d{3})?|[13]0\\d{8})",,,,"510012345"],"001",883,,,,,,,,1,[[,"(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3",["510"]],[,"(\\d{3})(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3 $4",["510"]],[,"(\\d{4})(\\d{4})(\\d{4})","$1 $2 $3",["51[13]"]]],,[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],888:[,[,,"\\d{11}",,,,,,,[11]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],"001",888,,,,,,,,1,[[,"(\\d{3})(\\d{3})(\\d{5})","$1 $2 $3"]],,[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,"\\d{11}",,,,"12345678901"],1,,[,,,,,,,,,[-1]]],979:[,[,,"\\d{9}",,,,,,,[9]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,"\\d{9}",,,,"123456789"],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],"001",979,,,,,,,,1,[[,"(\\d)(\\d{4})(\\d{4})","$1 $2 $3"]],,[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],1,,[,,,,,,,,,[-1]]]};
function aM(){this.a={}
}aM.a=function(){return aM.c?aM.c:aM.c=new aM
};
var bj={0:"0",1:"1",2:"2",3:"3",4:"4",5:"5",6:"6",7:"7",8:"8",9:"9","\uff10":"0","\uff11":"1","\uff12":"2","\uff13":"3","\uff14":"4","\uff15":"5","\uff16":"6","\uff17":"7","\uff18":"8","\uff19":"9","\u0660":"0","\u0661":"1","\u0662":"2","\u0663":"3","\u0664":"4","\u0665":"5","\u0666":"6","\u0667":"7","\u0668":"8","\u0669":"9","\u06f0":"0","\u06f1":"1","\u06f2":"2","\u06f3":"3","\u06f4":"4","\u06f5":"5","\u06f6":"6","\u06f7":"7","\u06f8":"8","\u06f9":"9"},bm={0:"0",1:"1",2:"2",3:"3",4:"4",5:"5",6:"6",7:"7",8:"8",9:"9","\uff10":"0","\uff11":"1","\uff12":"2","\uff13":"3","\uff14":"4","\uff15":"5","\uff16":"6","\uff17":"7","\uff18":"8","\uff19":"9","\u0660":"0","\u0661":"1","\u0662":"2","\u0663":"3","\u0664":"4","\u0665":"5","\u0666":"6","\u0667":"7","\u0668":"8","\u0669":"9","\u06f0":"0","\u06f1":"1","\u06f2":"2","\u06f3":"3","\u06f4":"4","\u06f5":"5","\u06f6":"6","\u06f7":"7","\u06f8":"8","\u06f9":"9",A:"2",B:"2",C:"2",D:"3",E:"3",F:"3",G:"4",H:"4",I:"4",J:"5",K:"5",L:"5",M:"6",N:"6",O:"6",P:"7",Q:"7",R:"7",S:"7",T:"8",U:"8",V:"8",W:"9",X:"9",Y:"9",Z:"9"},aL=RegExp("^[+\uff0b]+"),be=RegExp("([0-9\uff10-\uff19\u0660-\u0669\u06f0-\u06f9])"),aX=RegExp("[+\uff0b0-9\uff10-\uff19\u0660-\u0669\u06f0-\u06f9]"),ax=/[\\\/] *x/,ad=RegExp("[^0-9\uff10-\uff19\u0660-\u0669\u06f0-\u06f9A-Za-z#]+$"),f=/(?:.*?[A-Za-z]){3}.*/,bo=RegExp("(?:;ext=([0-9\uff10-\uff19\u0660-\u0669\u06f0-\u06f9]{1,7})|[ \u00a0\\t,]*(?:e?xt(?:ensi(?:o\u0301?|\u00f3))?n?|\uff45?\uff58\uff54\uff4e?|[;,x\uff58#\uff03~\uff5e]|int|anexo|\uff49\uff4e\uff54)[:\\.\uff0e]?[ \u00a0\\t,-]*([0-9\uff10-\uff19\u0660-\u0669\u06f0-\u06f9]{1,7})#?|[- ]+([0-9\uff10-\uff19\u0660-\u0669\u06f0-\u06f9]{1,5})#)$","i"),bg=RegExp("^[0-9\uff10-\uff19\u0660-\u0669\u06f0-\u06f9]{2}$|^[+\uff0b]*(?:[-x\u2010-\u2015\u2212\u30fc\uff0d-\uff0f \u00a0\u00ad\u200b\u2060\u3000()\uff08\uff09\uff3b\uff3d.\\[\\]/~\u2053\u223c\uff5e*]*[0-9\uff10-\uff19\u0660-\u0669\u06f0-\u06f9]){3,}[-x\u2010-\u2015\u2212\u30fc\uff0d-\uff0f \u00a0\u00ad\u200b\u2060\u3000()\uff08\uff09\uff3b\uff3d.\\[\\]/~\u2053\u223c\uff5e*A-Za-z0-9\uff10-\uff19\u0660-\u0669\u06f0-\u06f9]*(?:;ext=([0-9\uff10-\uff19\u0660-\u0669\u06f0-\u06f9]{1,7})|[ \u00a0\\t,]*(?:e?xt(?:ensi(?:o\u0301?|\u00f3))?n?|\uff45?\uff58\uff54\uff4e?|[;,x\uff58#\uff03~\uff5e]|int|anexo|\uff49\uff4e\uff54)[:\\.\uff0e]?[ \u00a0\\t,-]*([0-9\uff10-\uff19\u0660-\u0669\u06f0-\u06f9]{1,7})#?|[- ]+([0-9\uff10-\uff19\u0660-\u0669\u06f0-\u06f9]{1,5})#)?$","i"),a4=/(\$\d)/;
function az(n){var l=n.search(aX);
0<=l?(n=n.substring(l),n=n.replace(ad,""),l=n.search(ax),0<=l&&(n=n.substring(0,l))):n="";
return n
}function af(l){return 2>l.length?!1:aK(bg,l)
}function j(l){return aK(f,l)?bq(l,bm):bq(l,bj)
}function bi(n){var l=j(n.toString());
n.c="";
n.a(l)
}function a9(l){return !!l&&(1!=aZ(l,9)||-1!=a3(l,9)[0])
}function bq(n,l){for(var v=new aT,u,t=n.length,r=0;
r<t;
++r){u=n.charAt(r),u=l[u.toUpperCase()],null!=u&&v.a(u)
}return v.toString()
}function aB(l){return null!=l&&isNaN(l)&&l.toUpperCase() in b
}function ah(A,y,x){if(0==a6(y,2)&&null!=y.a[5]){var v=a0(y,5);
if(0<v.length){return v
}}var v=a0(y,1),u=aJ(y);
if(0==x){return o(v,0,u,"")
}if(!(v in aN)){return u
}A=aI(A,v,c(v));
y=null!=y.a[3]&&a6(y,3).length?3==x?";ext="+a6(y,3):null!=A.a[13]?a6(A,13)+a0(y,3):" ext. "+a0(y,3):"";
A:{A=a3(A,20).length&&2!=x?a3(A,20):a3(A,19);
for(var t,r=A.length,n=0;
n<r;
++n){t=A[n];
var l=aZ(t,3);
if(!l||!u.search(a6(t,3,l-1))){if(l=new RegExp(a6(t,1)),aK(l,u)){A=t;
break A
}}}A=null
}A&&(r=A,A=a0(r,2),t=new RegExp(a6(r,1)),a0(r,5),r=a0(r,4),u=2==x&&null!=r&&0<r.length?u.replace(t,A.replace(a4,r)):u.replace(t,A),3==x&&(u=u.replace(RegExp("^[-x\u2010-\u2015\u2212\u30fc\uff0d-\uff0f \u00a0\u00ad\u200b\u2060\u3000()\uff08\uff09\uff3b\uff3d.\\[\\]/~\u2053\u223c\uff5e]+"),""),u=u.replace(RegExp("[-x\u2010-\u2015\u2212\u30fc\uff0d-\uff0f \u00a0\u00ad\u200b\u2060\u3000()\uff08\uff09\uff3b\uff3d.\\[\\]/~\u2053\u223c\uff5e]+","g"),"-")));
return o(v,x,u,y)
}function aI(n,l,r){return"001"==r?aH(n,""+l):aH(n,r)
}function aJ(n){var l=""+a6(n,2);
return null!=n.a[4]&&a6(n,4)&&0<a0(n,8)?Array(a0(n,8)+1).join("0")+l:l
}function o(n,l,t,r){switch(l){case 0:return"+"+n+t+r;
case 1:return"+"+n+" "+t+r;
case 3:return"tel:+"+n+"-"+t+r;
default:return t+r
}}function aG(n,l){switch(l){case 4:return a6(n,5);
case 3:return a6(n,4);
case 1:return a6(n,3);
case 0:case 2:return a6(n,2);
case 5:return a6(n,6);
case 6:return a6(n,8);
case 7:return a6(n,7);
case 8:return a6(n,21);
case 9:return a6(n,25);
case 10:return a6(n,28);
default:return a6(n,1)
}}function bk(n,l){return aF(n,a6(l,1))?aF(n,a6(l,5))?4:aF(n,a6(l,4))?3:aF(n,a6(l,6))?5:aF(n,a6(l,8))?6:aF(n,a6(l,7))?7:aF(n,a6(l,21))?8:aF(n,a6(l,25))?9:aF(n,a6(l,28))?10:aF(n,a6(l,2))?a6(l,18)||aF(n,a6(l,3))?2:0:!a6(l,18)&&aF(n,a6(l,3))?1:-1:-1
}function aH(n,l){if(null==l){return null
}l=l.toUpperCase();
var r=n.a[l];
if(!r){r=b[l];
if(!r){return null
}r=(new bp).c(aQ.f(),r);
n.a[l]=r
}return r
}function aF(n,l){var r=n.length;
return 0<aZ(l,9)&&-1==ak(a3(l,9),r)?!1:aK(a0(l,2),n)
}function bb(n,l){if(!l){return null
}var y=a0(l,1);
if(y=aN[y]){if(1==y.length){y=y[0]
}else{n:{for(var x=aJ(l),v,u=y.length,t=0;
t<u;
t++){v=y[t];
var r=aH(n,v);
if(null!=r.a[23]){if(!x.search(a6(r,23))){y=v;
break n
}}else{if(-1!=bk(x,r)){y=v;
break n
}}}y=null
}}}else{y=null
}return y
}function c(l){return(l=aN[l])?l[0]:"ZZ"
}function aE(n,l,v,u){var t=aG(v,u),r=aZ(t,9)?a3(t,9):a3(a6(v,1),9),t=a3(t,10);
if(2==u){if(a9(aG(v,0))){n=aG(v,1),a9(n)&&(r=r.concat(aZ(n,9)?a3(n,9):a3(a6(v,1),9)),ai(r),t.length?(t=t.concat(a3(n,10)),ai(t)):t=a3(n,10))
}else{return aE(n,l,v,1)
}}if(-1==r[0]){return 5
}l=l.length;
if(-1<ak(t,l)){return 4
}v=r[0];
return v==l?0:v>l?2:r[r.length-1]<l?3:-1<ak(r,l,1)?0:5
}function aD(A,y,x,v,u,t){if(!y.length){return 0
}y=new aT(y);
var r;
x&&(r=a6(x,11));
null==r&&(r="NonMatch");
var n=y.toString();
if(n.length){if(aL.test(n)){n=n.replace(aL,""),y.c="",y.a(j(n)),r=1
}else{n=new RegExp(r);
bi(y);
r=y.toString();
if(r.search(n)){r=!1
}else{var n=r.match(n)[0].length,l=r.substring(n).match(be);
l&&null!=l[1]&&0<l[1].length&&"0"==bq(l[1],bj)?r=!1:(y.c="",y.a(r.substring(n)),r=!0)
}r=r?5:20
}}else{r=20
}u&&a5(t,6,r);
if(20!=r){if(2>=y.c.length){throw Error("Phone number too short after IDD")
}A:{A=y.toString();
if(A.length&&"0"!=A.charAt(0)){for(u=A.length,y=1;
3>=y&&y<=u;
++y){if(x=parseInt(A.substring(0,y),10),x in aN){v.a(A.substring(y));
v=x;
break A
}}}v=0
}if(v){return a5(t,1,v),v
}throw Error("Invalid country calling code")
}if(x&&(r=a0(x,10),n=""+r,l=y.toString(),!l.lastIndexOf(n,0)&&(n=new aT(l.substring(n.length)),l=a6(x,1),l=new RegExp(a0(l,2)),aj(n,x,null),n=n.toString(),!aK(l,y.toString())&&aK(l,n)||3==aE(A,y.toString(),x,-1)))){return v.a(n),u&&a5(t,6,10),a5(t,1,r),r
}a5(t,1,0);
return 0
}function aj(A,y,x){var v=A.toString(),u=v.length,t=a6(y,15);
if(u&&null!=t&&t.length){var r=new RegExp("^(?:"+t+")");
if(u=r.exec(v)){var t=new RegExp(a0(a6(y,1),2)),n=aK(t,v),l=u.length-1;
y=a6(y,16);
if(null!=y&&y.length&&null!=u[l]&&u[l].length){if(v=v.replace(r,y),!n||aK(t,v)){x&&0<l&&x.a(u[1]),A.set(v)
}}else{if(!n||aK(t,v.substring(u[0].length))){x&&0<l&&null!=u[l]&&x.a(u[1]),A.set(v.substring(u[0].length))
}}}}}function aC(n,l,r){if(!aB(r)&&0<l.length&&"+"!=l.charAt(0)){throw Error("Invalid country calling code")
}return z(n,l,r,!0)
}function z(C,B,A,x){if(null==B){throw Error("The string supplied did not seem to be a phone number")
}if(250<B.length){throw Error("The string supplied is too long to be a phone number")
}var v=new aT,u=B.indexOf(";phone-context=");
if(0<=u){var t=u+15;
if("+"==B.charAt(t)){var r=B.indexOf(";",t);
0<r?v.a(B.substring(t,r)):v.a(B.substring(t))
}t=B.indexOf("tel:");
v.a(B.substring(0<=t?t+4:0,u))
}else{v.a(az(B))
}u=v.toString();
t=u.indexOf(";isub=");
0<t&&(v.c="",v.a(u.substring(0,t)));
if(!af(v.toString())){throw Error("The string supplied did not seem to be a phone number")
}u=v.toString();
if(!(aB(A)||null!=u&&0<u.length&&aL.test(u))){throw Error("Invalid country calling code")
}u=new aP;
x&&a5(u,5,B);
C:{B=v.toString();
t=B.search(bo);
if(0<=t&&af(B.substring(0,t))){for(var r=B.match(bo),n=r.length,l=1;
l<n;
++l){if(null!=r[l]&&0<r[l].length){v.c="";
v.a(B.substring(0,t));
B=r[l];
break C
}}}B=""
}0<B.length&&a5(u,3,B);
B=aH(C,A);
t=new aT;
r=0;
n=v.toString();
try{r=aD(C,n,B,t,x,u)
}catch(y){if("Invalid country calling code"==y.message&&aL.test(n)){if(n=n.replace(aL,""),r=aD(C,n,B,t,x,u),!r){throw y
}}else{throw y
}}r?(v=c(r),v!=A&&(B=aI(C,r,v))):(bi(v),t.a(v.toString()),null!=A?(r=a0(B,10),a5(u,1,r)):x&&(delete u.a[6],u.c&&delete u.c[6]));
if(2>t.c.length){throw Error("The string supplied is too short to be a phone number")
}B&&(A=new aT,v=new aT(t.toString()),aj(v,B,A),2!=aE(C,v.toString(),B,-1)&&(t=v,x&&0<A.toString().length&&a5(u,7,A.toString())));
C=t.toString();
x=C.length;
if(2>x){throw Error("The string supplied is too short to be a phone number")
}if(17<x){throw Error("The string supplied is too long to be a phone number")
}if(1<C.length&&"0"==C.charAt(0)){a5(u,4,!0);
for(x=1;
x<C.length-1&&"0"==C.charAt(x);
){x++
}1!=x&&a5(u,8,x)
}a5(u,2,parseInt(C,10));
return u
}function aK(n,l){var r="string"==typeof n?l.match("^(?:"+n+")$"):l.match(n);
return r&&r[0].length==l.length?!0:!1
}am("intlTelInputUtils",{});
am("intlTelInputUtils.formatNumber",function(n,l,v){try{var u=aM.a(),t=aC(u,n,l);
return ah(u,t,"undefined"==typeof v?0:v)
}catch(r){return n
}});
am("intlTelInputUtils.getExampleNumber",function(n,l,y){try{var x=aM.a(),v;
n:{if(aB(n)){var u=aG(aH(x,n),y);
try{if(null!=u.a[6]){var t=a6(u,6);
v=z(x,t,n,!1);
break n
}}catch(r){}}v=null
}return ah(x,v,l?2:1)
}catch(r){return""
}});
am("intlTelInputUtils.getExtension",function(n,l){try{return a6(aC(aM.a(),n,l),3)
}catch(r){return""
}});
am("intlTelInputUtils.getNumberType",function(A,y){try{var x=aM.a(),v;
var u=aC(x,A,y),t=bb(x,u),r=aI(x,a0(u,1),t);
if(r){var n=aJ(u);
v=bk(n,r)
}else{v=-1
}return v
}catch(l){return -99
}});
am("intlTelInputUtils.getValidationError",function(A,y){try{var x=aM.a(),v;
var u=aC(x,A,y),t=aJ(u),r=a0(u,1);
if(r in aN){var n=aI(x,r,c(r));
v=aE(x,t,n,-1)
}else{v=1
}return v
}catch(l){return"Invalid country calling code"==l.message?1:"The string supplied did not seem to be a phone number"==l.message?4:"Phone number too short after IDD"==l.message||"The string supplied is too short to be a phone number"==l?2:"The string supplied is too long to be a phone number"==l.message?3:-99
}});
am("intlTelInputUtils.isValidNumber",function(E,D){try{var C=aM.a(),A=aC(C,E,D),y;
var x=bb(C,A),v=a0(A,1),u=aI(C,v,x),r;
if(!(r=!u)){var l;
if(l="001"!=x){var B,n=aH(C,x);
if(!n){throw Error("Invalid region code: "+x)
}B=a0(n,10);
l=v!=B
}r=l
}if(r){y=!1
}else{var F=aJ(A);
y=-1!=bk(F,u)
}return y
}catch(t){return !1
}});
am("intlTelInputUtils.numberFormat",{E164:0,INTERNATIONAL:1,NATIONAL:2,RFC3966:3});
am("intlTelInputUtils.numberType",{FIXED_LINE:0,MOBILE:1,FIXED_LINE_OR_MOBILE:2,TOLL_FREE:3,PREMIUM_RATE:4,SHARED_COST:5,VOIP:6,PERSONAL_NUMBER:7,PAGER:8,UAN:9,VOICEMAIL:10,UNKNOWN:-1});
am("intlTelInputUtils.validationError",{IS_POSSIBLE:0,INVALID_COUNTRY_CODE:1,TOO_SHORT:2,TOO_LONG:3,NOT_A_NUMBER:4})
})();
/*! iCheck v1.0.2 by Damir Sultanov, http://git.io/arlzeA, MIT Licensed */
(function(z){function g(l,k,x){var y=l[0],n=/er/.test(x)?_indeterminate:/bl/.test(x)?j:v,t=x==_update?{checked:y[v],disabled:y[j],indeterminate:"true"==l.attr(_indeterminate)||"false"==l.attr(_determinate)}:y[n];
if(/^(ch|di|in)/.test(x)&&!t){F(l,n)
}else{if(/^(un|en|de)/.test(x)&&t){e(l,n)
}else{if(x==_update){for(var r in t){t[r]?F(l,r,!0):e(l,r,!0)
}}else{if(!k||"toggle"==x){if(!k){l[_callback]("ifClicked")
}t?y[_type]!==b&&e(l,n):F(l,n)
}}}}}function F(y,x,r){var t=y[0],l=y.parent(),n=x==v,D=x==_indeterminate,C=x==j,I=D?_determinate:n?B:"enabled",E=u(y,I+G(t[_type])),k=u(y,x+G(t[_type]));
if(!0!==t[x]){if(!r&&x==v&&t[_type]==b&&t.name){var A=y.closest("form"),f='input[name="'+t.name+'"]',f=A.length?A.find(f):z(f);
f.each(function(){this!==t&&z(this).data(o)&&e(z(this),x)
})
}D?(t[x]=!0,t[v]&&e(y,v,"force")):(r||(t[x]=!0),n&&t[_indeterminate]&&e(y,_indeterminate,!1));
c(y,n,x,r)
}t[j]&&u(y,_cursor,!0)&&l.find("."+d).css(_cursor,"default");
l[_add](k||u(y,x)||"");
l.attr("role")&&!D&&l.attr("aria-"+(C?j:v),"true");
l[_remove](E||u(y,I)||"")
}function e(E,D,A){var C=E[0],t=E.parent(),y=D==v,x=D==_indeterminate,n=D==j,I=x?_determinate:y?B:"enabled",l=u(E,I+G(C[_type])),k=u(E,D+G(C[_type]));
if(!1!==C[D]){if(x||!A||"force"==A){C[D]=!1
}c(E,y,I,A)
}!C[j]&&u(E,_cursor,!0)&&t.find("."+d).css(_cursor,"pointer");
t[_remove](k||u(E,D)||"");
t.attr("role")&&!x&&t.attr("aria-"+(n?j:v),"false");
t[_add](l||u(E,I)||"")
}function H(k,f){if(k.data(o)){k.parent().html(k.attr("style",k.data(o).s||""));
if(f){k[_callback](f)
}k.off(".i").unwrap();
z(_label+'[for="'+k[0].id+'"]').add(k.closest(_label)).off(".i")
}}function u(l,k,n){if(l.data(o)){return l.data(o).o[k+(n?"":"Class")]
}}function G(f){return f.charAt(0).toUpperCase()+f.slice(1)
}function c(l,k,n,r){if(!r){if(k){l[_callback]("ifToggled")
}l[_callback]("ifChanged")[_callback]("if"+G(n))
}}var o="iCheck",d=o+"-helper",b="radio",v="checked",B="un"+v,j="disabled";
_determinate="determinate";
_indeterminate="in"+_determinate;
_update="update";
_type="type";
_click="click";
_touch="touchbegin.i touchend.i";
_add="addClass";
_remove="removeClass";
_callback="trigger";
_label="label";
_cursor="cursor";
_mobile=/ipad|iphone|ipod|android|blackberry|windows phone|opera mini|silk/i.test(navigator.userAgent);
z.fn[o]=function(D,C){var y='input[type="checkbox"], input[type="'+b+'"]',A=z(),r=function(l){l.each(function(){var t=z(this);
A=t.is(y)?A.add(t):A.add(t.find(y))
})
};
if(/^(check|uncheck|toggle|indeterminate|determinate|disable|enable|update|destroy)$/i.test(D)){return D=D.toLowerCase(),r(this),A.each(function(){var l=z(this);
"destroy"==D?H(l,"ifDestroyed"):g(l,!0,D);
z.isFunction(C)&&C()
})
}if("object"!=typeof D&&D){return this
}var x=z.extend({checkedClass:v,disabledClass:j,indeterminateClass:_indeterminate,labelHover:!0},D),n=x.handle,I=x.hoverClass||"hover",K=x.focusClass||"focus",J=x.activeClass||"active",k=!!x.labelHover,E=x.labelHoverClass||"hover",f=(""+x.increaseArea).replace("%","")|0;
if("checkbox"==n||n==b){y='input[type="'+n+'"]'
}-50>f&&(f=-50);
r(this);
return A.each(function(){var S=z(this);
H(S);
var O=this,R=O.id,M=-f+"%",N=100+2*f+"%",N={position:"absolute",top:M,left:M,display:"block",width:N,height:N,margin:0,padding:0,background:"#fff",border:0,opacity:0},M=_mobile?{position:"absolute",visibility:"hidden"}:f?N:{position:"absolute",opacity:0},t="checkbox"==O[_type]?x.checkboxClass||"icheckbox":x.radioClass||"i"+b,P=z(_label+'[for="'+R+'"]').add(S.closest(_label)),T=!!x.aria,Q=o+"-"+Math.random().toString(36).substr(2,6),L='<div class="'+t+'" '+(T?'role="'+O[_type]+'" ':"");
T&&P.each(function(){L+='aria-labelledby="';
this.id?L+=this.id:(this.id=Q,L+=Q);
L+='"'
});
L=S.wrap(L+"/>")[_callback]("ifCreated").parent().append(x.insert);
N=z('<ins class="'+d+'"/>').css(N).appendTo(L);
S.data(o,{o:x,s:S.attr("style")}).css(M);
x.inheritClass&&L[_add](O.className||"");
x.inheritID&&R&&L.attr("id",o+"-"+R);
"static"==L.css("position")&&L.css("position","relative");
g(S,!0,_update);
if(P.length){P.on(_click+".i mouseover.i mouseout.i "+_touch,function(l){var V=l[_type],U=z(this);
if(!O[j]){if(V==_click){if(z(l.target).is("a")){return
}g(S,!1,!0)
}else{k&&(/ut|nd/.test(V)?(L[_remove](I),U[_remove](E)):(L[_add](I),U[_add](E)))
}if(_mobile){l.stopPropagation()
}else{return !1
}}})
}S.on(_click+".i focus.i blur.i keyup.i keydown.i keypress.i",function(l){var U=l[_type];
l=l.keyCode;
if(U==_click){return !1
}if("keydown"==U&&32==l){return O[_type]==b&&O[v]||(O[v]?e(S,v):F(S,v)),!1
}if("keyup"==U&&O[_type]==b){!O[v]&&F(S,v)
}else{if(/us|ur/.test(U)){L["blur"==U?_remove:_add](K)
}}});
N.on(_click+" mousedown mouseup mouseover mouseout "+_touch,function(l){var V=l[_type],U=/wn|up/.test(V)?J:I;
if(!O[j]){if(V==_click){g(S,!1,!0)
}else{if(/wn|er|in/.test(V)){L[_add](U)
}else{L[_remove](U+" "+J)
}if(P.length&&k&&U==I){P[/ut|nd/.test(V)?_remove:_add](E)
}}if(_mobile){l.stopPropagation()
}else{return !1
}}})
})
}
})(window.jQuery||window.Zepto);
/*!
 * jQuery & Zepto Lazy - v1.7.5
 * http://jquery.eisbehr.de/lazy/
 *
 * Copyright 2012 - 2017, Daniel 'Eisbehr' Kern
 *
 * Dual licensed under the MIT and GPL-2.0 licenses:
 * http://www.opensource.org/licenses/mit-license.php
 * http://www.gnu.org/licenses/gpl-2.0.html
 *
 * $("img.lazy").lazy();
 */
;
(function(e,g){var f=e.jQuery||e.Zepto,b=0,c=false;
f.fn.Lazy=f.fn.lazy=function(k){return new j(this,k)
};
f.Lazy=f.lazy=function(u,k,x){if(f.isFunction(k)){x=k;
k=[]
}if(!f.isFunction(x)){return
}u=f.isArray(u)?u:[u];
k=f.isArray(k)?k:[k];
var n=j.prototype.config,y=n._f||(n._f={});
for(var r=0,o=u.length;
r<o;
r++){if(n[u[r]]===g||f.isFunction(n[u[r]])){n[u[r]]=x
}}for(var t=0,v=k.length;
t<v;
t++){y[k[t]]=u[0]
}};
function d(N,O,F,k,B){var H=0,J=-1,u=-1,E=false,K="afterLoad",R="load",t="error",o="img",z="src",n="srcset",G="sizes",D="background-image";
function P(){E=e.devicePixelRatio>1;
L(F);
if(O.delay>=0){setTimeout(function(){l(true)
},O.delay)
}if(O.delay<0||O.combined){k.e=x(O.throttle,function(S){if(S.type==="resize"){J=u=-1
}l(S.all)
});
k.a=function(S){L(S);
F.push.apply(F,S)
};
k.g=function(){return(F=f(F).filter(function(){return !f(this).data(O.loadedName)
}))
};
k.f=function(S){for(var T=0;
T<S.length;
T++){var U=F.filter(function(){return this===S[T]
});
if(U.length){l(false,U)
}}};
l();
f(O.appendScroll).on("scroll."+B+" resize."+B,k.e)
}}function L(X){var S=O.defaultImage,aa=O.placeholder,Z=O.imageBase,V=O.srcsetAttribute,Y=O.loaderAttribute,ac=O._f||{};
X=f(X).filter(function(){var af=f(this),ae=r(this);
return !af.data(O.handledName)&&(af.attr(O.attribute)||af.attr(V)||af.attr(Y)||ac[ae]!==g)
}).data("plugin_"+O.name,N);
for(var W=0,T=X.length;
W<T;
W++){var U=f(X[W]),ad=r(X[W]),ab=U.attr(O.imageBaseAttribute)||Z;
if(ad===o&&ab&&U.attr(V)){U.attr(V,v(U.attr(V),ab))
}if(ac[ad]!==g&&!U.attr(Y)){U.attr(Y,ac[ad])
}if(ad===o&&S&&!U.attr(z)){U.attr(z,S)
}else{if(ad!==o&&aa&&(!U.css(D)||U.css(D)==="none")){U.css(D,"url('"+aa+"')")
}}}}function l(Z,ad){if(!F.length){if(O.autoDestroy){N.destroy()
}return
}var S=ad||F,U=false,ab=O.imageBase||"",W=O.srcsetAttribute,Y=O.handledName;
for(var X=0;
X<S.length;
X++){if(Z||ad||y(S[X])){var V=f(S[X]),ae=r(S[X]),T=V.attr(O.attribute),ac=V.attr(O.imageBaseAttribute)||ab,aa=V.attr(O.loaderAttribute);
if(!V.data(Y)&&(!O.visibleOnly||V.is(":visible"))&&((T||V.attr(W))&&((ae===o&&(ac+T!==V.attr(z)||V.attr(W)!==V.attr(n)))||(ae!==o&&ac+T!==V.css(D)))||aa)){U=true;
V.data(Y,true);
I(V,ae,ac,aa)
}}}if(U){F=f(F).filter(function(){return !f(this).data(Y)
})
}}function I(Y,ag,ab,ac){++H;
var Z=function(){C("onError",Y);
M();
Z=f.noop
};
C("beforeLoad",Y);
var ae=O.attribute,X=O.srcsetAttribute,V=O.sizesAttribute,T=O.retinaAttribute,aa=O.removeAttribute,S=O.loadedName,af=Y.attr(T);
if(ac){var W=function(){if(aa){Y.removeAttr(O.loaderAttribute)
}Y.data(S,true);
C(K,Y);
setTimeout(M,1);
W=f.noop
};
Y.off(t).one(t,Z).one(R,W);
if(!C(ac,Y,function(ah){if(ah){Y.off(R);
W()
}else{Y.off(t);
Z()
}})){Y.trigger(t)
}}else{var U=f(new Image());
U.one(t,Z).one(R,function(){Y.hide();
if(ag===o){Y.attr(G,U.attr(G)).attr(n,U.attr(n)).attr(z,U.attr(z))
}else{Y.css(D,"url('"+U.attr(z)+"')")
}Y[O.effect](O.effectTime);
if(aa){Y.removeAttr(ae+" "+X+" "+T+" "+O.imageBaseAttribute);
if(V!==G){Y.removeAttr(V)
}}Y.data(S,true);
C(K,Y);
U.remove();
M()
});
var ad=(E&&af?af:Y.attr(ae))||"";
U.attr(G,Y.attr(V)).attr(n,Y.attr(X)).attr(z,ad?ab+ad:null);
U.complete&&U.trigger(R)
}}function y(V){var W=V.getBoundingClientRect(),X=O.scrollDirection,S=O.threshold,U=((Q()+S)>W.top)&&(-S<W.bottom),T=((A()+S)>W.left)&&(-S<W.right);
if(X==="vertical"){return U
}else{if(X==="horizontal"){return T
}}return U&&T
}function A(){return J>=0?J:(J=f(e).width())
}function Q(){return u>=0?u:(u=f(e).height())
}function r(S){return S.tagName.toLowerCase()
}function v(V,W){if(W){var S=V.split(",");
V="";
for(var U=0,T=S.length;
U<T;
U++){V+=W+S[U].trim()+(U!==T-1?",":"")
}}return V
}function x(T,V){var U,S=0;
return function(Y,X){var W=+new Date()-S;
function Z(){S=+new Date();
V.call(N,Y)
}U&&clearTimeout(U);
if(W>T||!O.enableThrottle||X){Z()
}else{U=setTimeout(Z,T-W)
}}
}function M(){--H;
if(!F.length&&!H){C("onFinishedAll")
}}function C(U,T,S){if((U=O[U])){U.apply(N,[].slice.call(arguments,1));
return true
}return false
}if(O.bind==="event"||c){P()
}else{f(e).on(R+"."+B,P)
}}function j(r,n){var k=this,o=f.extend({},k.config,n),t={},l=o.name+"-"+(++b);
k.config=function(u,v){if(v===g){return o[u]
}o[u]=v;
return k
};
k.addItems=function(u){t.a&&t.a(f.type(u)==="string"?f(u):u);
return k
};
k.getItems=function(){return t.g?t.g():{}
};
k.update=function(u){t.e&&t.e({},!u);
return k
};
k.force=function(u){t.f&&t.f(f.type(u)==="string"?f(u):u);
return k
};
k.loadAll=function(){t.e&&t.e({all:true},true);
return k
};
k.destroy=function(){f(o.appendScroll).off("."+l,t.e);
f(e).off("."+l);
t={};
return g
};
d(k,o,r,t,l);
return o.chainable?r:k
}j.prototype.config={name:"lazy",chainable:true,autoDestroy:true,bind:"load",threshold:500,visibleOnly:false,appendScroll:e,scrollDirection:"both",imageBase:null,defaultImage:"data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==",placeholder:null,delay:-1,combined:false,attribute:"data-src",srcsetAttribute:"data-srcset",sizesAttribute:"data-sizes",retinaAttribute:"data-retina",loaderAttribute:"data-loader",imageBaseAttribute:"data-imagebase",removeAttribute:true,handledName:"handled",loadedName:"loaded",effect:"show",effectTime:0,enableThrottle:true,throttle:250,beforeLoad:g,afterLoad:g,onError:g,onFinishedAll:g};
f(e).on("load",function(){c=true
})
})(window);
/*! jssocials - v1.4.0 - 2016-10-10
* http://js-socials.com
* Copyright (c) 2016 Artem Tabalin; Licensed MIT */
(function(r,f,d){var n="JSSocials",g=n;
var l=function(v,u){if(f.isFunction(v)){return v.apply(u,f.makeArray(arguments).slice(2))
}return v
};
var b=/(\.(jpeg|png|gif|bmp|svg)$|^data:image\/(jpeg|png|gif|bmp|svg\+xml);base64)/i;
var e=/(&?[a-zA-Z0-9]+=)?\{([a-zA-Z0-9]+)\}/g;
var c={G:1000000000,M:1000000,K:1000};
var k={};
function j(x,v){var u=f(x);
u.data(g,this);
this._$element=u;
this.shares=[];
this._init(v);
this._render()
}j.prototype={url:"",text:"",shareIn:"blank",showLabel:function(u){return(this.showCount===false)?(u>this.smallScreenWidth):(u>=this.largeScreenWidth)
},showCount:function(u){return(u<=this.smallScreenWidth)?"inside":true
},smallScreenWidth:640,largeScreenWidth:1024,resizeTimeout:200,elementClass:"jssocials",sharesClass:"jssocials-shares",shareClass:"jssocials-share",shareButtonClass:"jssocials-share-button",shareLinkClass:"jssocials-share-link",shareLogoClass:"jssocials-share-logo",shareLabelClass:"jssocials-share-label",shareLinkCountClass:"jssocials-share-link-count",shareCountBoxClass:"jssocials-share-count-box",shareCountClass:"jssocials-share-count",shareZeroCountClass:"jssocials-share-no-count",_init:function(u){this._initDefaults();
f.extend(this,u);
this._initShares();
this._attachWindowResizeCallback()
},_initDefaults:function(){this.url=r.location.href;
this.text=f.trim(f("meta[name=description]").attr("content")||f("title").text())
},_initShares:function(){this.shares=f.map(this.shares,f.proxy(function(v){if(typeof v==="string"){v={share:v}
}var u=(v.share&&k[v.share]);
if(!u&&!v.renderer){throw Error("Share '"+v.share+"' is not found")
}return f.extend({url:this.url,text:this.text},u,v)
},this))
},_attachWindowResizeCallback:function(){f(r).on("resize",f.proxy(this._windowResizeHandler,this))
},_detachWindowResizeCallback:function(){f(r).off("resize",this._windowResizeHandler)
},_windowResizeHandler:function(){if(f.isFunction(this.showLabel)||f.isFunction(this.showCount)){r.clearTimeout(this._resizeTimer);
this._resizeTimer=setTimeout(f.proxy(this.refresh,this),this.resizeTimeout)
}},_render:function(){this._clear();
this._defineOptionsByScreen();
this._$element.addClass(this.elementClass);
this._$shares=f("<div>").addClass(this.sharesClass).appendTo(this._$element);
this._renderShares()
},_defineOptionsByScreen:function(){this._screenWidth=f(r).width();
this._showLabel=l(this.showLabel,this,this._screenWidth);
this._showCount=l(this.showCount,this,this._screenWidth)
},_renderShares:function(){f.each(this.shares,f.proxy(function(u,v){this._renderShare(v)
},this))
},_renderShare:function(v){var u;
if(f.isFunction(v.renderer)){u=f(v.renderer())
}else{u=this._createShare(v)
}u.addClass(this.shareClass).addClass(v.share?"jssocials-share-"+v.share:"").addClass(v.css).appendTo(this._$shares)
},_createShare:function(y){var v=f("<div>");
var u=this._createShareLink(y).appendTo(v);
if(this._showCount){var x=(this._showCount==="inside");
var z=x?u:f("<div>").addClass(this.shareCountBoxClass).appendTo(v);
z.addClass(x?this.shareLinkCountClass:this.shareCountBoxClass);
this._renderShareCount(y,z)
}return v
},_createShareLink:function(v){var x=this._getShareStrategy(v);
var u=x.call(v,{shareUrl:this._getShareUrl(v)});
u.addClass(this.shareLinkClass).append(this._createShareLogo(v));
if(this._showLabel){u.append(this._createShareLabel(v))
}f.each(this.on||{},function(z,y){if(f.isFunction(y)){u.on(z,f.proxy(y,v))
}});
return u
},_getShareStrategy:function(v){var u=o[v.shareIn||this.shareIn];
if(!u){throw Error("Share strategy '"+this.shareIn+"' not found")
}return u
},_getShareUrl:function(u){var v=l(u.shareUrl,u);
return this._formatShareUrl(v,u)
},_createShareLogo:function(v){var x=v.logo;
var u=b.test(x)?f("<img>").attr("src",v.logo):f("<i>").addClass(x);
u.addClass(this.shareLogoClass);
return u
},_createShareLabel:function(u){return f("<span>").addClass(this.shareLabelClass).text(u.label)
},_renderShareCount:function(v,x){var u=f("<span>").addClass(this.shareCountClass);
x.addClass(this.shareZeroCountClass).append(u);
this._loadCount(v).done(f.proxy(function(y){if(y){x.removeClass(this.shareZeroCountClass);
u.text(y)
}},this))
},_loadCount:function(x){var v=f.Deferred();
var y=this._getCountUrl(x);
if(!y){return v.resolve(0).promise()
}var u=f.proxy(function(z){v.resolve(this._getCountValue(z,x))
},this);
f.getJSON(y).done(u).fail(function(){f.get(y).done(u).fail(function(){v.resolve(0)
})
});
return v.promise()
},_getCountUrl:function(u){var v=l(u.countUrl,u);
return this._formatShareUrl(v,u)
},_getCountValue:function(u,x){var v=(f.isFunction(x.getCount)?x.getCount(u):u)||0;
return(typeof v==="string")?v:this._formatNumber(v)
},_formatNumber:function(u){f.each(c,function(v,x){if(u>=x){u=parseFloat((u/x).toFixed(2))+v;
return false
}});
return u
},_formatShareUrl:function(u,v){return u.replace(e,function(x,y,A){var z=v[A]||"";
return z?(y||"")+r.encodeURIComponent(z):""
})
},_clear:function(){r.clearTimeout(this._resizeTimer);
this._$element.empty()
},_passOptionToShares:function(v,x){var u=this.shares;
f.each(["url","text"],function(y,z){if(z!==v){return
}f.each(u,function(A,B){B[v]=x
})
})
},_normalizeShare:function(u){if(f.isNumeric(u)){return this.shares[u]
}if(typeof u==="string"){return f.grep(this.shares,function(v){return v.share===u
})[0]
}return u
},refresh:function(){this._render()
},destroy:function(){this._clear();
this._detachWindowResizeCallback();
this._$element.removeClass(this.elementClass).removeData(g)
},option:function(u,v){if(arguments.length===1){return this[u]
}this[u]=v;
this._passOptionToShares(u,v);
this.refresh()
},shareOption:function(v,u,x){v=this._normalizeShare(v);
if(arguments.length===2){return v[u]
}v[u]=x;
this.refresh()
}};
f.fn.jsSocials=function(y){var x=f.makeArray(arguments),v=x.slice(1),u=this;
this.each(function(){var A=f(this),z=A.data(g),B;
if(z){if(typeof y==="string"){B=z[y].apply(z,v);
if(B!==d&&B!==z){u=B;
return false
}}else{z._detachWindowResizeCallback();
z._init(y);
z._render()
}}else{new j(A,y)
}});
return u
};
var t=function(v){var u;
if(f.isPlainObject(v)){u=j.prototype
}else{u=k[v];
v=arguments[1]||{}
}f.extend(u,v)
};
var o={popup:function(u){return f("<a>").attr("href","#").on("click",function(){r.open(u.shareUrl,null,"width=600, height=400, location=0, menubar=0, resizeable=0, scrollbars=0, status=0, titlebar=0, toolbar=0");
return false
})
},blank:function(u){return f("<a>").attr({target:"_blank",href:u.shareUrl})
},self:function(u){return f("<a>").attr({target:"_self",href:u.shareUrl})
}};
r.jsSocials={Socials:j,shares:k,shareStrategies:o,setDefaults:t}
}(window,jQuery));
(function(c,d,b,e){d.extend(b.shares,{email:{label:"E-mail",logo:"fa fa-at",shareUrl:"mailto:{to}?subject={text}&body={url}",countUrl:"",shareIn:"self"},twitter:{label:"Tweet",logo:"fa fa-twitter",shareUrl:"https://twitter.com/share?url={url}&text={text}&via={via}&hashtags={hashtags}",countUrl:""},facebook:{label:"Like",logo:"fa fa-facebook",shareUrl:"https://facebook.com/sharer/sharer.php?u={url}",countUrl:"https://graph.facebook.com/?id={url}",getCount:function(f){return f.share&&f.share.share_count||0
}},vkontakte:{label:"Like",logo:"fa fa-vk",shareUrl:"https://vk.com/share.php?url={url}&title={title}&description={text}",countUrl:"https://vk.com/share.php?act=count&index=1&url={url}",getCount:function(f){return parseInt(f.slice(15,-2).split(", ")[1])
}},googleplus:{label:"+1",logo:"fa fa-google",shareUrl:"https://plus.google.com/share?url={url}",countUrl:""},linkedin:{label:"Share",logo:"fa fa-linkedin",shareUrl:"https://www.linkedin.com/shareArticle?mini=true&url={url}",countUrl:"https://www.linkedin.com/countserv/count/share?format=jsonp&url={url}&callback=?",getCount:function(f){return f.count
}},pinterest:{label:"Pin it",logo:"fa fa-pinterest",shareUrl:"https://pinterest.com/pin/create/bookmarklet/?media={media}&url={url}&description={text}",countUrl:"https://api.pinterest.com/v1/urls/count.json?&url={url}&callback=?",getCount:function(f){return f.count
}},stumbleupon:{label:"Share",logo:"fa fa-stumbleupon",shareUrl:"http://www.stumbleupon.com/submit?url={url}&title={title}",countUrl:"https://cors-anywhere.herokuapp.com/https://www.stumbleupon.com/services/1.01/badge.getinfo?url={url}",getCount:function(f){return f.result.views
}},telegram:{label:"Telegram",logo:"fa fa-paper-plane",shareUrl:"tg://msg?text={url} {text}",countUrl:"",shareIn:"self"},whatsapp:{label:"WhatsApp",logo:"fa fa-whatsapp",shareUrl:"whatsapp://send?text={url} {text}",countUrl:"",shareIn:"self"},line:{label:"LINE",logo:"fa fa-comment",shareUrl:"http://line.me/R/msg/text/?{text} {url}",countUrl:""},viber:{label:"Viber",logo:"fa fa-volume-control-phone",shareUrl:"viber://forward?text={url} {text}",countUrl:"",shareIn:"self"},pocket:{label:"Pocket",logo:"fa fa-get-pocket",shareUrl:"https://getpocket.com/save?url={url}&title={title}",countUrl:""},messenger:{label:"Share",logo:"fa fa-commenting",shareUrl:"fb-messenger://share?link={url}",countUrl:"",shareIn:"self"}})
}(window,jQuery,window.jsSocials));
(function(b){if(typeof define==="function"&&define.amd){define(["jquery"],b)
}else{if(typeof module!=="undefined"&&module.exports){module.exports=b(require("jquery"))
}else{b(jQuery)
}}})(function(c){var f=-1,e=-1;
var d=function(n){return parseFloat(n)||0
};
var j=function(u){var n=1,r=c(u),o=null,t=[];
r.each(function(){var v=c(this),y=v.offset().top-d(v.css("margin-top")),x=t.length>0?t[t.length-1]:null;
if(x===null){t.push(v)
}else{if(Math.floor(Math.abs(o-y))<=n){t[t.length-1]=x.add(v)
}else{t.push(v)
}}o=y
});
return t
};
var k=function(n){var o={byRow:true,property:"height",target:null,remove:false};
if(typeof n==="object"){return c.extend(o,n)
}if(typeof n==="boolean"){o.byRow=n
}else{if(n==="remove"){o.remove=true
}}return o
};
var b=c.fn.matchHeight=function(n){var r=k(n);
if(r.remove){var o=this;
this.css(r.property,"");
c.each(b._groups,function(t,u){u.elements=u.elements.not(o)
});
return this
}if(this.length<=1&&!r.target){return this
}b._groups.push({elements:this,options:r});
b._apply(this,r);
return this
};
b.version="0.7.2";
b._groups=[];
b._throttle=80;
b._maintainScroll=false;
b._beforeUpdate=null;
b._afterUpdate=null;
b._rows=j;
b._parse=d;
b._parseOptions=k;
b._apply=function(x,r){var u=k(r),t=c(x),v=[t];
var y=c(window).scrollTop(),o=c("html").outerHeight(true);
var n=t.parents().filter(":hidden");
n.each(function(){var z=c(this);
z.data("style-cache",z.attr("style"))
});
n.css("display","block");
if(u.byRow&&!u.target){t.each(function(){var z=c(this),A=z.css("display");
if(A!=="inline-block"&&A!=="flex"&&A!=="inline-flex"){A="block"
}z.data("style-cache",z.attr("style"));
z.css({display:A,"padding-top":"0","padding-bottom":"0","margin-top":"0","margin-bottom":"0","border-top-width":"0","border-bottom-width":"0",height:"100px",overflow:"hidden"})
});
v=j(t);
t.each(function(){var z=c(this);
z.attr("style",z.data("style-cache")||"")
})
}c.each(v,function(B,C){var A=c(C),z=0;
if(!u.target){if(u.byRow&&A.length<=1){A.css(u.property,"");
return
}A.each(function(){var D=c(this),F=D.attr("style"),G=D.css("display");
if(G!=="inline-block"&&G!=="flex"&&G!=="inline-flex"){G="block"
}var E={display:G};
E[u.property]="";
D.css(E);
if(D.outerHeight(false)>z){z=D.outerHeight(false)
}if(F){D.attr("style",F)
}else{D.css("display","")
}})
}else{z=u.target.outerHeight(false)
}A.each(function(){var E=c(this),D=0;
if(u.target&&E.is(u.target)){return
}if(E.css("box-sizing")!=="border-box"){D+=d(E.css("border-top-width"))+d(E.css("border-bottom-width"));
D+=d(E.css("padding-top"))+d(E.css("padding-bottom"))
}E.css(u.property,(z-D)+"px")
})
});
n.each(function(){var z=c(this);
z.attr("style",z.data("style-cache")||null)
});
if(b._maintainScroll){c(window).scrollTop((y/o)*c("html").outerHeight(true))
}return this
};
b._applyDataApi=function(){var n={};
c("[data-match-height], [data-mh]").each(function(){var r=c(this),o=r.attr("data-mh")||r.attr("data-match-height");
if(o in n){n[o]=n[o].add(r)
}else{n[o]=r
}});
c.each(n,function(){this.matchHeight(true)
})
};
var l=function(n){if(b._beforeUpdate){b._beforeUpdate(n,b._groups)
}c.each(b._groups,function(){b._apply(this.elements,this.options)
});
if(b._afterUpdate){b._afterUpdate(n,b._groups)
}};
b._update=function(r,o){if(o&&o.type==="resize"){var n=c(window).width();
if(n===f){return
}f=n
}if(!r){l(o)
}else{if(e===-1){e=setTimeout(function(){l(o);
e=-1
},b._throttle)
}}};
c(b._applyDataApi);
var g=c.fn.on?"on":"bind";
c(window)[g]("load",function(n){b._update(false,n)
});
c(window)[g]("resize orientationchange",function(n){b._update(true,n)
})
});
$(function(){window.$lightboxSimple=$("#lightbox-simple");
window.$lightboxSimpleContent=$("#lightbox-simple-content");
const o=function(u){return typeof($(u.relatedTarget).data("simple-lightbox"))!=="undefined"
};
const k=function(u){if(u!=="undefined"){$lightboxSimple.addClass(u);
$lightboxSimple.data("current-scope",u)
}};
const r=function(){var u=$lightboxSimple.data("current-scope");
$lightboxSimple.removeClass(u);
$lightboxSimple.data("current-scope","")
};
const e=function(){var v=$("#lightbox-simple .lightbox-close");
var u=($lightboxSimpleContent.offset().top-$lightboxSimple.offset().top-v.height());
u=u<0?0:u;
v.css("top",u+"px");
v.css("left",($lightboxSimpleContent.offset().left)+"px")
};
const l=function(){$(document.body).toggleClass("bodyLightboxSimple");
$(document.documentElement).toggleClass("bodyLightboxSimple")
};
const d=function(){try{var y=$lightboxSimple.find(".used-by-lightbox-simple-prev");
var x=$lightboxSimple.find(".used-by-lightbox-simple-next");
$lightboxSimple.find(".lightbox-simple-prev-label").html(y.html());
var v=$lightboxSimple.find(".lightbox-simple-prev-link");
var B=y.attr("href");
var z=x.attr("href");
if(!B||!z){return false
}v.attr("href",B);
$lightboxSimple.find(".lightbox-simple-next-label").html(x.html());
var u=$lightboxSimple.find(".lightbox-simple-next-link");
u.attr("href",z);
v.off("click");
u.off("click");
v.on("click",function(C){C.preventDefault();
C.stopPropagation();
n(B,"left")
});
u.on("click",function(C){C.preventDefault();
C.stopPropagation();
n(z,"right")
});
u.show();
v.show()
}catch(A){}return true
};
const n=function(u,x){var v=x==="left"?"right":"left";
(function y(B,A){var z={};
z[B]="-150vw";
$(".lightbox-close").hide();
$lightboxSimple.animate(z,400,function(){$lightboxSimpleContent.load(u.replace("#",""),function(){d();
t();
$lightboxSimple.animate({left:"",right:""},500,function(){$lightboxSimple.css("left","");
$lightboxSimple.css("right","");
$lightboxSimple.find(".lightbox-close").fadeIn()
})
});
$lightboxSimple.css(A,"-150vw");
$lightboxSimple.css(B,"")
})
})(x,v)
};
function t(u){if(typeof u!=="undefined"){window[u]();
window.$$lastCallback=u
}else{if(typeof window.$$lastCallback!=="undefined"){window[window.$$lastCallback]()
}}}function c(u){$lightboxSimple.bind("scroll",u);
$(window).resize("resize",u)
}function b(u){$lightboxSimple.unbind("scroll",u);
$(window).unbind("resize",u)
}const j=function(v){if(o(v)){var u=$(v.relatedTarget);
$lightboxSimpleContent.load(u.attr("href").replace("#",""));
k(u.data("slb-scope"));
if(u.data("slb-arrows")){$(".lightbox-simple-next-link,.lightbox-simple-prev-link").removeClass("hidden")
}else{$(".lightbox-simple-next-link,.lightbox-simple-prev-link").addClass("hidden")
}}};
const g=function(u){if(o(u)){l();
t($(u.relatedTarget).data("slb-callback"));
e();
d();
c(e)
}};
const f=function(u){l();
$lightboxSimpleContent.html("");
delete window.$$lastCallback;
r();
b(e)
};
$lightboxSimple.on("show.bs.modal",j);
$lightboxSimple.on("shown.bs.modal",g);
$lightboxSimple.on("hidden.bs.modal",f)
});
var createLineProgressBar=(function(){return function(){var b=$(".activate-progressbar .slick-list");
b.each(function(){var f=$(this);
var e=f.parent().find(".slick-dots").width();
if(e>768){e=630
}var d=f.parent().find("ul.slick-dots li");
var g=d.length;
var c=Math.floor(e/g)-1;
d.css("width",c+"px")
})
}
})();
function loadLazyImageInSlider(f){var e=f.find(".slick-active");
var c=f.data("ssc-slides")||3;
var d;
var b=e;
for(d=0;
d<c+1;
d++){b.find(".lazy").lazy();
b=b.prev()
}b=e.next();
for(d=0;
d<c;
d++){b.find(".lazy").lazy();
b=b.next()
}setTimeout(function(){e.find(".lazy").lazy()
},50)
}function initSlider(){$(".cruise-2018-slider").each(function(){var g=$(this);
if(g){try{}catch(f){}var c={dots:g.hasClass("activate-progressbar"),draggable:true,slidesToShow:g.data("ssc-slides")||3,slidesToScroll:g.data("ssc-slides")||3,responsive:[]};
var b=g.data("ssc-breakpoint");
if(b){c.responsive.push({breakpoint:b,settings:{slidesToShow:g.data("ssc-slides")-1||3,slidesToScroll:g.data("ssc-slides")-1||3}})
}var d=g.data("ssc-breakpoint-tablet");
if(d){c.responsive.push({breakpoint:d,settings:{slidesToShow:g.data("ssc-slides-to-show-tablet")||1,slidesToScroll:g.data("ssc-slides-to-scroll-tablet")||1}})
}g.slick(c);
g.on("afterChange",function(j,e,k){loadLazyImageInSlider($(this),"cruise-2018-slide")
});
loadLazyImageInSlider(g)
}createLineProgressBar()
})
}function openModalFromSelector(){var e=window.location.hash;
if(e==""){return
}$hash=$(e);
if($hash.length==0){return
}var d=window.innerWidth<768?65:100;
if(e.startsWith("#lb-shorex")){var b=$hash.closest(":visible");
$([document.documentElement,document.body]).animate({scrollTop:b.offset().top-d},100);
if($(document.body).hasClass("viewport-xs")){b.parent().find(".open-lightbox-port").click()
}else{b.find(".cruise-2018-itineraries-itinerary-row-container-with-excursion").click();
$hash.click()
}}else{if(e.startsWith("#menu-")){$(".cruise-2018-menu a[href$='"+e+"']").click()
}else{if(e.startsWith("#lb-it")){var c=$(e.replace("lb-it","itinerary"));
$([document.documentElement,document.body]).animate({scrollTop:c.offset().top-d-50},100);
$(e).closest(".cruise-2018-itineraries-itinerary").find(".clickable:visible:first").click()
}else{if(e.startsWith("#itinerary")){$(e).closest(".cruise-2018-itineraries-itinerary").find(".clickable:visible:first").click()
}else{if($hash.is(":visible")){$hash.click()
}else{if($hash.closest(":visible")){$([document.documentElement,document.body]).animate({scrollTop:$hash.closest(":visible").offset().top-d},100)
}}}}}}}$(function(){initSlider();
window.widthCruise2018=$(window).width();
$(window).resize(sscThrottled(function(){if($(window).width()==window.widthCruise2018){return
}window.widthCruise2018=$(window).width();
createLineProgressBar()
}))
});
$(window).load(openModalFromSelector);
function Utils(){}Utils.prototype={constructor:Utils,isScrolledIntoView:function isScrolledIntoView(d,f){var e=$(window).scrollTop()+this.headerHeight()+$(".ssc-sticky-top").height()+f;
var b=$(d).offset().top;
var c=b+$(d).outerHeight(true);
return((c>=e)&&(e>=b))
},headerHeight:function headerHeight(){return $("#header").height()+$(".c-main-nav__bottom").height()
},isElementInView:function(d,b){if(d!=null&&d.length>0){var g=false;
for(var e=0;
e<d.length;
e++){var k=d[e];
var l=$(window).scrollTop();
var f=l+$(window).height();
if($(k).offset()!=null){var c=$(k).offset().top;
var j=c+$(k).height();
if(b===true){g=((l<c)&&(f>j))
}else{g=((c<=f)&&(j>=l))
}if(g&&b){return g
}}}return g
}}};
var utils=new Utils();
function onScrollFixedFooter(){if($(window).width()<768){var j=$("[data-sscclicktype=clic-RAQ]:not(#fixed-footer-2018-raq)");
var d=$("#cruise-2018-rqa:not(#fixed-footer-2018-raq)");
var e=utils.isElementInView(j,true);
var g=utils.isElementInView($("#header",false));
var c=!g&&!e;
var f=e||g;
var b=$(".fixed-footer-cruise");
if(c&&!b.is(":visible")){b.slideDown()
}else{if(f&&b.is(":visible")){b.slideUp()
}}}}$(function(){onScrollFixedFooter();
$(document).on("scroll resize touchmove gesturechange",onScrollFixedFooter)
});
function Menu(){}Menu.prototype={constructor:Menu,isUnderViewport:function(b,c){return b.offset().top-this.headerHeight()+b.height()-c>$(window).scrollTop()
},isScrolledIntoView:function isScrolledIntoView(d,f){var e=$(window).scrollTop()+this.headerHeight()+$(".ssc-sticky-top").height()+f;
var b=$(d).offset().top;
var c=b+$(d).outerHeight(true);
return((c>=e)&&(e>=b))
},headerHeight:function headerHeight(){return $("#header").height()+$(".c-main-nav__bottom").height()
},stickMenu:function stickMenu(){var e=$(".cruise-2018-menu-container-wrapper");
var d=$(".cruise-2018-menu-container.ssc-sticky-top");
var c=$(".menu-overview-fixed");
if(this.isUnderViewport(e,15+$(".ssc-sticky-top").outerHeight())){d.fadeOut(0,function(){e.css("padding-bottom","60px");
e.css("margin-top","0px");
d.removeClass("ssc-sticky-top").fadeIn(0);
$(".cruise-2018-menu").removeClass("ssc-table-full-width-with-overview");
$("#header").animate({top:"0px",duration:200},{progress:function(f,g){$(".menu-overview-fixed").hide(0)
},complete:function(){var f=$(".fixed-footer-cruise");
f.slideUp()
}});
$(".cruise-2018-menu-tab").removeClass("active")
})
}else{var b=$(".cruise-2018-menu-container:not(.ssc-sticky-top)");
b.fadeOut(0,function(){e.css("padding-bottom","0px");
e.css("margin-top","50px");
b.addClass("ssc-sticky-top").fadeIn(0);
c.show(200);
$(".cruise-2018-menu").addClass("ssc-table-full-width-with-overview");
$("#header:not(.c-main-nav--nav-expanded)").animate({top:"-110px",duration:200,easing:"linear"},{progress:function(f,g){$(".cruise-2018-menu-container.ssc-sticky-top").css("top","-50px")
}})
})
}},activeTab:function activeTab(){var b=this;
$(".cruise-2018-menu-tab").each(function(){target=$(this).attr("href");
if($(target).position()&&b.isScrolledIntoView(target,60)){$(".cruise-2018-menu-tab").removeClass("active");
$(this).addClass("active");
return false
}})
},onScroll:function onScroll(){this.stickMenu();
this.activeTab()
}};
$(function(){var c=new Menu();
$(".cruise-2018-menu a[href^='#']").on("click touchstart",function(g){g.preventDefault();
var f=$(this).attr("href");
$target=$(f);
history.replaceState(null,null,f);
var d=window.innerWidth<768?65:100;
$([document.documentElement,document.body]).animate({scrollTop:$target.position().top-d,duration:1200,easing:"linear"},1500)
});
var b=$(".cruise-2018-overview").length>0&&($("body").hasClass("cruise")||$("body").hasClass("combocruise"));
if(b){c.onScroll();
$(document).on("scroll resize touchmove gesturechange",c.onScroll.bind(c))
}});
$(function(){function c(g){g&&g.preventDefault();
var f=$(this);
if(f.data("ssc-accordion")==="show"){f.parent().find(".cruise-2018-excursions-accordion").slideDown(200,"linear");
f.data("ssc-accordion","hide")
}else{if(f.data("ssc-accordion")==="hide"){f.parent().find(".cruise-2018-excursions-accordion").slideUp();
f.data("ssc-accordion","show")
}}f.blur();
f.find(".cruise-2018-excursions-accordion-button").toggle()
}function b(j){j&&j.preventDefault();
var g=$(this);
var f=g.find(".cruise-2018-itineraries-itinerary-row-date-arrow");
if(f.data("ssc-accordion")==="show"){g.parent().find(".cruise-2018-itineraries-excursions-accordion").slideDown(200,"linear");
f.data("ssc-accordion","hide")
}else{if(f.data("ssc-accordion")==="hide"){g.parent().find(".cruise-2018-itineraries-excursions-accordion").slideUp();
f.data("ssc-accordion","show")
}}f.blur();
f.find("i").toggle();
console.log(j);
var k=$(j.target).closest(".cruise-2018-itineraries-itinerary").attr("id");
history.pushState(null,null,"#"+k)
}$(".cruise-2018-itineraries-container").on("click",".cruise-2018-itineraries-port-excursions-btn",c);
$(".cruise-2018-itineraries-container").on("click",".cruise-2018-itineraries-itinerary-row-container-with-excursion",b);
$(".cruise-2018-itineraries-itinerary-row-container.cruise-2018-itineraries-itinerary-row-container-with-excursion").mouseover(function(g){var f=$(this).closest(".cruise-2018-itineraries-itinerary").prev().prev();
var j=f.find(".bordered:visible:last");
if(j.length==0){j=f.find(".cruise-2018-itineraries-itinerary-row-container")
}j.css("border-bottom-color","rgb(214, 5, 36)")
}).mouseout(function(g){var f=$(this).closest(".cruise-2018-itineraries-itinerary").prev().prev();
var j=f.find(".bordered:visible");
if(j.length==0){j=f.find(".cruise-2018-itineraries-itinerary-row-container")
}j.css("border-bottom-color","rgba(152, 152, 155, 0.5)")
});
$(document).ready(function(){if(($("body").hasClass("combocruise")||$("body").hasClass("cruise"))&&$(".cruise-2018-itineraries-container").length>0){$(document).on("scroll touchmove gesturechange",e);
e();
$("body").on("click",".cruise-2018-itineraries-port-excursions-description-read-more",function(){$(this).fadeOut();
$(this).closest(".cruise-2018-itineraries-port-excursions-description").find(".cruise-2018-itineraries-port-excursions-description-read-more-content").slideDown()
})
}});
function e(){var f=$(".cruise-2018-itineraries-itinerary-row-thumbnail img");
if(f){var g=d(f,true);
if(g){$(".cruise-2018-itineraries-itinerary-row-thumbnail img").lazy("lazy");
$(document).off("scroll touchmove gesturechange",e)
}}}function d(j,f){if(j!=null&&j.length>0){var n=false;
for(var k=0;
k<j.length;
k++){var r=j[k];
var t=$(window).scrollTop();
var l=t+$(window).height();
if($(r).offset()!=null){var g=$(r).offset().top;
var o=g+$(r).height();
if(f===true){n=((t<g)&&(l>o))
}else{n=((g<=l)&&(o>=t))
}if(n&&f){return n
}}}}return n
}});
$(function(){$(".offers .offers-btns a").on("click touchstart",b);
function b(g){g&&g.preventDefault();
g&&g.stopPropagation();
var f=$(this);
var j=130;
if(f.data("ssc-accordion")==="show"){$(".offers .offers-hide").slideDown("slow");
f.data("ssc-accordion","hide");
j=130
}else{if(f.data("ssc-accordion")==="hide"){$(".offers .offers-hide").slideUp("slow");
f.data("ssc-accordion","show");
j=100
}}f.blur();
$(".offers .offers-accordion-button").toggle();
$([document.documentElement,document.body]).animate({scrollTop:$(".offers-title").position().top-$(".row-menu-overview").height()-j,duration:500,easing:"linear"})
}$(document).ready(function(){if($("body").hasClass("cruise")&&$(".cruise-2018 ").length>0&&$(".offers").length>0){d()
}});
var e=(function(){return function(){var f=$(".offers .offer-slider .slick-list");
f.each(function(){var l=$(this);
var k=l.parent().find(".slick-dots").width();
var j=l.parent().find("ul.slick-dots li");
var n=j.length;
var g=Math.floor(k/n)-1;
j.css("width",g+"px")
})
}
})();
function c(g){var f=g.closest(".offers .offer-slider").find(".slick-active");
f.find(".lazy").lazy();
f.prev().find(".lazy").lazy();
f.prev().prev().find(".lazy").lazy();
f.next().find(".lazy").lazy();
f.next().next().find(".lazy").lazy();
setTimeout(function(){f.find(".lazy").lazy()
},50)
}wofferC=$(window).width();
function d(){var f=$(".offers .offer-slider");
if(f){f.slick({dots:true,draggable:true,infinite:true,slidesPerRow:2,slidesToShow:2,responsive:[{breakpoint:768,settings:{slidesToShow:1,slidesToScroll:1}}]})
}e();
c(f);
$(".offers .offer-slider").css("visibility","visible");
f.on("afterChange",function(j,g,k){c($(this))
});
$(window).resize(sscThrottled(function(){if($(window).width()==wofferC){return
}wofferC=$(window).width();
e()
}))
}});
function pdfInit(c,b,d){var e={};
$("#cruise-2018-pdf-print").on("click",function(f){f.preventDefault();
$.ajax({url:c+".rendition.print."+b+d+".t.pdf",beforeSend:function(){$(".cruise-2018-pdf-print-link").toggle();
e=window.open("","_blank")
},complete:function(){$(".cruise-2018-pdf-print-link").toggle()
},success:function(){e.location=c+".rendition.print."+b+d+".t.pdf";
e.focus()
}})
})
}function socialInit(b){$("#cruise-2018-facebook").jsSocials({showLabel:false,showCount:false,shareIn:"popup",text:b,shares:["facebook"]})
}function createOverviewGallerySlider(){var b=$(".main-slider.ow-slider").slick({slidesToShow:1,slidesToScroll:1});
b.on("beforeChange",function(e,d,j,f){var g=$(this);
var c=g.find(".slick-current .c-video");
c.find('.s7playpausebutton[selected="false"]').trigger("click");
c.attr("class","c-video").empty()
}).on("afterChange",function(d,c,e){loadLazyImageOverview($(this))
});
$(".cruise-2018-overview-big-pic").replaceWith($(".ow-slider"));
loadLazyImageOverview(b)
}function loadLazyImageOverview(d){var c=d.find(".slick-active");
var b=$(".main-slider.ow-slider");
b.slick("slickSetOption","draggable",true,false);
b.slick("slickSetOption","swipe",true,false);
c.find(".lazy").lazy();
c.prev().find(".lazy").lazy();
c.prev().prev().find(".lazy").lazy();
c.next().find(".lazy").lazy();
c.next().next().find(".lazy").lazy();
setTimeout(function(){c.find(".lazy").lazy()
},50)
}$(function(){if($(window).width()<768){createOverviewGallerySlider()
}$("a.coolanchorminussmall").click(function(f){if(this.hash){var d=this.hash.substr(1);
var j=$("[id="+d+"]");
var c=$("body");
var b=window.innerWidth<768?65:100;
var g=j.position().top-b;
$("body,html").animate({scrollTop:g},1500);
c.focus();
history.replaceState(null,null,$(this).attr("href"));
return false
}});
$(".open-video-slider").on("click",function(k){k&&k.preventDefault();
k&&k.stopPropagation();
$("body").addClass("modal-open");
var g='<div class="modal-body automatic-modal-body"><div class="cruise-video-lightbox"><div class="ratio"><div class="video-itinerary" id="currentIdNode" data-video-asset="assetPath" data-video-autoplay="1"></div></div></div></div>';
var b=$(this);
var f=b.data("current-id-node");
var d=b.data("asset-path");
g=g.replace("currentIdNode",f);
g=g.replace("assetPath",d);
$($(this).data("target")).modal("show");
$(".modal.lightbox").on("shown.bs.modal",j);
$(document).on("hide.bs.modal",c);
function j(l){$(this).find(".modal-dialog").addClass("custom-lightbox-width");
$(this).find(".modal-dialog").addClass("lightbox-width-1200");
$(this).find(".modal-dialog .modal-content").html(g);
$(this).find(".lightbox-close").addClass("lightbox-close-1200");
$(".video-itinerary").initVideo()
}function c(n){if($(".cruise-2018, .combocruise-2018").length>0){var l=$(".modal.lightbox .cruise-video-lightbox").find(".s7container");
l.find('.s7playpausebutton[selected="false"]').trigger("click");
$(".modal.lightbox").off("shown.bs.modal",j);
$(document).off("hide.bs.modal",c);
$(this).find(".lightbox-close").removeClass("lightbox-close-1200")
}}})
});
window.voyagePdfPrintClicked=false;
$(function(){function g(j){$(".cruise-2018-accordion").slideDown(200,"linear");
c()
}function f(j){$(".cruise-2018-accordion").slideUp();
$([document.documentElement,document.body]).animate({scrollTop:$("#cruise2018shipdining").position().top-100,duration:500,easing:"linear"})
}function c(){$(".cruise-2018-ship-dining-area .lazy").lazy()
}function b(k){k&&k.preventDefault();
var j=$(this);
if(j.data("ssc-accordion")==="show"){g(k);
j.data("ssc-accordion","hide")
}else{if(j.data("ssc-accordion")==="hide"){f(k);
j.data("ssc-accordion","show");
window.scroll({top:$(".cruise-2018-ship-dining-area").get(0).offsetTop,behavior:"smooth"})
}}j.blur();
$(".cruise-2018-accordion-button").toggle()
}var e=(function(){return function(){var j=$(".activate-progressbar .slick-list");
j.each(function(){var o=$(this);
var n=o.parent().find(".slick-dots").width();
if(n>768){n=630
}var l=o.parent().find("ul.slick-dots li");
var r=l.length;
var k=Math.floor(n/r)-1;
l.css("width",k+"px")
})
}
})();
function d(){var k=$(".cruise-2018-ship-dining-area-list-slider:visible");
if(k){try{k.slick("unslick")
}catch(j){}k.slick({centerMode:true,dots:true,draggable:true,infinite:true,slidesPerRow:1,slidesToShow:1,centerPadding:"40px"})
}e();
k.on("afterChange",function(n,l,o){loadLazyImageInSlider($(this),"cruise-2018-ship-dining-area-list-slider")
})
}$(".cruise-2018-ship-dining-area-btns a").on("click touchstart",b);
d();
c()
});
$(function(){var b=$(".ship-slider-overview .main-slider").slick({slidesToShow:1,slidesToScroll:1});
$(".ship-slider .video-link").on("click",function(d){d.preventDefault();
d.stopPropagation();
$(this).next(".c-video").initVideo()
});
b.on("beforeChange",function(f,e,k,g){var j=$(this);
var d=j.find(".slick-current .c-video");
d.find('.s7playpausebutton[selected="false"]').trigger("click");
d.attr("class","c-video").empty()
}).on("afterChange",function(e,d,f){c($(this))
});
c(b);
function c(e){var d=e.closest(".ship-slider-overview").find(".slick-active");
$(".ship-slider-overview .main-slider").slick("slickSetOption","draggable",true,false);
$(".ship-slider-overview .main-slider").slick("slickSetOption","swipe",true,false);
d.find(".lazy").lazy();
d.prev().find(".lazy").lazy();
d.prev().prev().find(".lazy").lazy();
d.next().find(".lazy").lazy();
d.next().next().find(".lazy").lazy();
setTimeout(function(){d.prev().find(".lazy").lazy();
d.find(".lazy").lazy();
d.next().find(".lazy").lazy()
},50)
}});
$(function(){$(document).ready(function(){var k=($("body").hasClass("cruise")||$("body").hasClass("combocruise"))&&$(".cruise-2018-suites-fares").length>0;
if(k){$(document).on("scroll touchmove gesturechange",b);
$(".onclick-show-more-less-benefits").on("click",g);
b()
}});
function g(n){n.preventDefault();
n.stopPropagation();
var k=$(this);
var l=k.hasClass("benefits-show-more");
if(l){e(k)
}else{f(k)
}}function j(){$(".cruise-2018-suites-fares-included-ul li.to-hide").addClass("hidden-xs")
}function c(){$(".cruise-2018-suites-fares-included-ul li.hidden-xs").addClass("to-hide");
$(".cruise-2018-suites-fares-included-ul li.hidden-xs").removeClass("hidden-xs")
}function e(k){k.hide();
$(".cruise-2018-suites-fares-included-ul .benefits-show-less").show();
c()
}function f(k){k.hide();
$(".cruise-2018-suites-fares-included-ul .benefits-show-more").show();
j()
}function b(){var k=$(".cruise-2018-suites-fares-image img");
if(k){var l=d(k,true);
if(l){$(".cruise-2018-suites-fares-image img").lazy("lazy");
$(document).off("scroll touchmove gesturechange",b)
}}}function d(n,k){if(n!=null&&n.length>0){var t=false;
for(var o=0;
o<n.length;
o++){var v=n[o];
var x=$(window).scrollTop();
var r=x+$(window).height();
if($(v).offset()!=null){var l=$(v).offset().top;
var u=l+$(v).height();
if(k===true){t=((x<l)&&(r>u))
}else{t=((l<=r)&&(u>=x))
}if(t&&k){return t
}}}}return t
}});
$(function(){var d=(function(o){$(".route-content.route-active").removeClass("route-active");
o.find(".route-content").addClass("route-active")
});
var g=(function(){$(".cruise2018-itinerarydetail-block").addClass("cruise2018-itinerarydetail-block-loading");
$(".cruise-2018-itineraries-spinner").addClass("cruise-2018-itineraries-spinner-loading")
});
var f=(function(){$(".cruise2018-itinerarydetail-block").removeClass("cruise2018-itinerarydetail-block-loading");
$(".cruise-2018-itineraries-spinner").removeClass("cruise-2018-itineraries-spinner-loading")
});
var e=function(){var r=$(".route-slider .slick-current.slick-active"),o=r.attr("href");
j(r,o)
};
function c(r){var o=$(r).html();
o=o.toLowerCase();
$(r).html(o)
}function j(r,o){d(r);
g();
$.get(o,function(u,t){$(".cruise2018-itinerarydetail-block").replaceWith(u);
$(".cruise-2018-itineraries-itinerary-row-thumbnail img").lazy("lazy");
$(".cruise-2018-itineraries-itinerary-row-text-name").each(function(){c(this)
})
}).fail(function(){f()
})
}var k=(function(r){r&&r.preventDefault();
r&&r.stopPropagation();
var t=$(this),o=t.attr("href");
j(t,o)
});
var n=$("body").hasClass("combocruise"),b=$(".change-route-onclick").length>0,l=$(window).width()<768;
if(n&&b){$(".change-route-onclick").on("click",k);
if(l){$(".route-slider").on("afterChange",e)
}}});
$(function(){var e=(function(k){if(k!=null){var j=k.text().slice(0,330);
k.text(j+" ...");
return j
}return null
});
var b=(function(r){r&&r.preventDefault();
r&&r.stopPropagation();
var l=$(".cruise-2018-itineraries-description-view"),o=$(".cruise-2018-itineraries-description"),t=l.length>0;
if(t){var n=l.hasClass("view-more");
if(n){o.css("height","100%");
var j=l.attr("data-viewless");
l.text(j);
o.html(itineraryDescriptionText);
l.addClass("view-less");
l.removeClass("view-more")
}else{o.removeAttr("style");
var k=l.attr("data-viewmore");
l.text(k);
o.text(itineraryDescriptionTextTruncate);
l.addClass("view-more");
l.removeClass("view-less")
}}});
var f=$(".cruise-2018-itineraries-description"),c=$("body").hasClass("combocruise"),d=f.length>0,g=$(".cruise-2018-itineraries-description").text().length>330;
iAmMobile=$(window).width()<768,itineraryDescriptionText=null,itineraryDescriptionTextTruncate=null;
if(c&&d&&iAmMobile&&g){itineraryDescriptionText=$(".cruise-2018-itineraries-description").html();
itineraryDescriptionTextTruncate=e(f);
$(".cruise-2018-itineraries-description-view").show();
$(".cruise-2018-itineraries-description-view").on("click",b)
}});
$(function(){$(".open-lightbox-gallery-assets").on("click",function(r){r.preventDefault();
r.stopPropagation();
var l=$(this).data("go-to");
var k=$("#lb-mainGallery"),o=k.closest("[data-lightbox-gallery-path]").data("lightbox-gallery-path"),t=k.data("target"),n=$(t);
n.find(".modal-content").addClass("modal-content--transparent");
n.addClass("lightbox-no-scroll");
n.find(".modal-dialog").addClass("custom-lightbox-width");
n.find(".modal-dialog").addClass("lightbox-width-1200");
n.modal("show");
n.on("shown.bs.modal",function(v){v.preventDefault();
v.stopPropagation();
var u=$(this);
u.off("shown.bs.modal");
u.find(".modal-content").load(o,function(x){j(u,k,l);
b();
setTopLightboxModal(0)
});
history.replaceState(null,null,location.href.replace(location.hash,"")+"#"+k.attr("id"))
});
n.on("hide.bs.modal",function(u){history.replaceState(null,null,location.href.replace(location.hash,""))
})
});
function b(){var k=$(".modal.lightbox");
var l=$(window).height();
if(l<k.find(".modal-content").height()){k.find(".main-slider .ratio").css("padding-bottom",(l-250)+"px")
}}function j(o,n,l){var k=o.find(".main-slider").slick({slidesToShow:1,slidesToScroll:1,asNavFor:".lightbox-gallery-assets .navigation-slider"});
var v=o.find(".navigation-slider").slick({slidesToShow:6,slidesToScroll:5,asNavFor:".lightbox-gallery-assets .main-slider",focusOnSelect:true,arrows:false});
$(".lightbox-gallery-assets .video-link").on("click",function(x){x.preventDefault();
x.stopPropagation();
if(typeof s7viewers!=="undefined"){$(this).next(".video-icon").initVideo()
}});
o.find(".ga-virtual-tour").on("click",function(x){c(this,x)
});
k.on("beforeChange",function(z,y,C,A){$(".lightbox-gallery-assets .ga-label").hide();
$(".lightbox-gallery-assets .ga-credits").hide();
var B=$(this);
var x=B.find(".slick-current .video-icon");
x.find('.s7playpausebutton[selected="false"]').trigger("click");
x.attr("class","video-icon").empty();
e()
}).on("afterChange",function(y,x,z){f($(this));
d($(this))
});
d(k);
f(k);
if(l){var r=l.split("/");
var u=r[r.length-1];
var t=$(".ga-slider--main img[data-src*='"+u+"']");
$(k).slick("slickGoTo",t.closest("[data-slick-index]").data("slick-index"),true)
}}function d(l){var k=l.closest(".lightbox-gallery-assets").find(".ga-slider--main .slick-active");
var n=l.closest(".lightbox-gallery-assets ").find(".ga-slider--nav .slick-active");
$(".lightbox-gallery-assets .main-slider").slick("slickSetOption","draggable",true,false);
$(".lightbox-gallery-assets .main-slider").slick("slickSetOption","swipe",true,false);
g(k);
g(n);
g(n.prev());
g(n.next());
setTimeout(function(){g(k)
},50)
}function g(k){if(k!=null){k.find(".lazy").lazy();
k.prev().find(".lazy").lazy();
k.prev().prev().find(".lazy").lazy();
k.next().find(".lazy").lazy();
k.next().next().find(".lazy").lazy()
}}function f(v){var t=v.find(".slick-slide.slick-current.slick-active div");
var l=$(".lightbox-gallery-assets #ga-label-text-label");
var r=$(".lightbox-gallery-assets #ga-label-text-credits");
var o=$(".lightbox-gallery-assets .ga-label");
var u=$(".lightbox-gallery-assets .ga-credits");
var k=t.data("asset-label");
var n=t.data("asset-credits");
if(k!=null&&k.length>0){l.html(k);
o.show()
}else{l.html("");
o.hide()
}if(n!=null&&n.length>0){r.html(n);
u.show()
}else{r.html("");
u.hide()
}}function e(){if(window.hasOwnProperty("virtualTour")&&window.virtualTour!=null){window.virtualTour.destroy();
window.virtualTour=null
}if(window.hasOwnProperty("virtualTourID")&&window.virtualTourID!=null){$(window.virtualTourID).empty();
$(window.virtualTourID).css("height","0px");
window.virtualTourID=null
}if(window.hasOwnProperty("virtualTourImage")&&window.virtualTourImage!=null){$(window.virtualTourImage).css("display","block");
window.virtualTourImage=null
}if(window.hasOwnProperty("virtualTourType")&&window.virtualTourType!=null){window.virtualTourType=null
}}function c(n,r){r.preventDefault();
r.stopPropagation();
var k=$(n).data("image-virtual-tour");
var o=$(n).attr("id");
var t=$(n).attr("id")+"-container";
e();
if(k!=null&&t!=null){$("#"+t).css("height","550px");
$("#"+o).css("display","none");
var l=setInterval(function(){if($("#"+t).height()>0){clearInterval(l);
window.virtualTourID="#"+t;
window.virtualTourImage="#"+o;
window.virtualTourType="ga-virtual-tour";
window.virtualTour=PhotoSphereViewer({container:t,panorama:k,anim_speed:"0.4rpm",move_speed:1,mousemove:true,time_anim:"1000",min_fov:10,default_fov:179,usexmpdata:true,navbar:["autorotate","zoom","spacer-1","caption","gyroscope","fullscreen"]})
}$(".lightbox-gallery-assets .main-slider").slick("slickSetOption","draggable",false,false);
$(".lightbox-gallery-assets .main-slider").slick("slickSetOption","swipe",false,false)
},500)
}}});
$(function(){var b=(function(d){var f=$(".modal.lightbox .lightbox-map").length>0;
if(f&&d<15){var c=$(".lightbox-map i"),e=c.hasClass("fa-portrait");
if(e){c.removeClass("fa-portrait")
}else{c.addClass("fa-portrait")
}setTimeout(function(g){b(++d)
},800)
}});
$(".cruise-2018-itineraries-container,#cruise2018overview").on("click",".open-lightbox-map",function(g){g.preventDefault();
g.stopPropagation();
var c=$(this),f=c.closest("[data-lightbox-map-path]").data("lightbox-map-path"),j=c.data("target"),d=$(j);
d.find(".modal-content").addClass("modal-content--transparent");
d.find(".modal-dialog").addClass("modal-larger");
d.find(".modal-content").addClass("lightbox-gallery-assets-content");
d.addClass("lightbox-no-scroll");
d.modal("show");
d.on("shown.bs.modal",function(l){l.preventDefault();
l.stopPropagation();
var k=$(this);
k.off("shown.bs.modal");
k.find(".modal-content").load(f,function(n){$(".lightbox-close").addClass("close-full-width");
setTopLightboxModal(0);
b(0)
})
})
})
});
$(function(){function e(r,u){u&&u.preventDefault();
u&&u.stopPropagation();
var n=$(r),t=n.data("image-src"),o=$("#image-deck-plan");
o.attr("src",t);
$(".lightbox-suite .lg-suite-deck-number").each(function(){$(this).removeClass("lg-suite-active-deck")
});
n.parent().addClass("lg-suite-active-deck")
}function f(t,u){u&&u.preventDefault();
u&&u.stopPropagation();
var o=$(t);
var n=$(".lightbox-suite .lg-suite-features .lg-suite-features-list");
var r=o.find(".material-icons");
if(r.html()=="add"){r.html("close");
n.slideDown()
}else{r.html("add");
n.slideUp()
}}function j(r,t){t&&t.preventDefault();
t&&t.stopPropagation();
var o=$(r);
var n=$(".lightbox-suite .lg-suite-overview .lg-suite-description");
n.removeClass("lg-suite-description-truncate");
o.hide()
}$(".open-lightbox-suite").on("click",function(t){t.preventDefault();
t.stopPropagation();
var n=$(this),r=n.attr("href"),u=n.data("target"),o=$(u);
o.find(".modal-content").addClass("lightbox-suite-content");
o.addClass("lightbox-no-scroll");
o.modal("show");
o.on("shown.bs.modal",function(x){x.preventDefault();
x.stopPropagation();
history.pushState(null,null,"#"+n.attr("id"));
if(window.scrollSupport!=null&&window.scrollSupport){window.iNoBounce.enable()
}var v=$(this);
v.off("shown.bs.modal");
v.find(".modal-content").load(r,function(z){setTopLightboxModal(432);
d(v,n);
$(".lightbox-suite .lg-suite-deck .lg-suite-deck-number span").on("click",function(A){e(this,A)
});
$(".lightbox-suite .lg-suite-features .lg-suite-features-expand").on("click",function(A){f(this,A)
});
$(".lightbox-suite .lg-suite-overview .lg-suite-description-expand").on("click",function(A){j(this,A)
});
var y=v.find(".lightbox-suite .lg-suite-deck-numbers.lg-suite-active-deck span");
if(y!=null&&y.length>0){e(y)
}if($("body").hasClass("viewport-sm")){$(".modal.lightbox").css("padding-left","0px")
}})
});
o.on("hide.bs.modal",function(v){history.replaceState(null,null,location.href.replace(location.hash,""))
})
});
function d(r,o){var n=r.find(".lightbox-suite .lg-asset-slider").slick({slidesToShow:1,slidesToScroll:1,dots:false,responsive:[{breakpoint:480,settings:{arrows:true}}]});
$(".lightbox-suite .lg-asset-gallery .video-link").on("click",function(t){t.preventDefault();
t.stopPropagation();
$(this).next(".c-video").initVideo()
});
r.find(".lightbox-suite .lg-virtual-tour").on("click",function(t){k(this,t)
});
n.on("beforeChange",function(v,u,z,x){var y=$(this);
var t=y.find(".slick-current .c-video");
t.find('.s7playpausebutton[selected="false"]').trigger("click");
t.attr("class","c-video").empty();
b()
}).on("afterChange",function(u,t,v){g($(this))
});
g(n);
l(r)
}function g(o){var n=o.closest(".lightbox-suite").find(".slick-active");
$(".lightbox-suite .lg-asset-slider").slick("slickSetOption","draggable",true,false);
$(".lightbox-suite .lg-asset-slider").slick("slickSetOption","swipe",true,false);
n.find(".lazy").lazy();
n.prev().find(".lazy").lazy();
n.prev().prev().find(".lazy").lazy();
n.next().find(".lazy").lazy();
n.next().next().find(".lazy").lazy();
setTimeout(function(){n.find(".lazy").lazy()
},50)
}function b(){if(window.hasOwnProperty("virtualTour")&&window.virtualTour!=null){window.virtualTour.destroy();
window.virtualTour=null
}if(window.hasOwnProperty("virtualTourID")&&window.virtualTourID!=null){$(window.virtualTourID).empty();
$(window.virtualTourID).css("height","0px");
window.virtualTourID=null
}if(window.hasOwnProperty("virtualTourImage")&&window.virtualTourImage!=null){$(window.virtualTourImage).css("display","block");
window.virtualTourImage=null
}if(window.hasOwnProperty("virtualTourType")&&window.virtualTourType!=null){window.virtualTourType=null
}}function k(r,u){u.preventDefault();
u.stopPropagation();
var n=$(r).data("image-virtual-tour");
var t=$(r).attr("id");
var v=$(r).attr("id")+"-container";
b();
if(n!=null&&v!=null){$("#"+v).css("height","550px");
$("#"+t).css("display","none");
var o=setInterval(function(){if($("#"+v).height()>0){clearInterval(o);
window.virtualTourID="#"+v;
window.virtualTourImage="#"+t;
window.virtualTourType="ga-virtual-tour";
window.virtualTour=PhotoSphereViewer({container:v,panorama:n,anim_speed:"0.4rpm",move_speed:1,mousemove:true,time_anim:"1000",min_fov:10,default_fov:179,usexmpdata:true,navbar:["autorotate","zoom","spacer-1","caption","gyroscope","fullscreen"]})
}$(".lightbox-suite .lg-asset-slider").slick("slickSetOption","draggable",false,false);
$(".lightbox-suite .lg-asset-slider").slick("slickSetOption","swipe",false,false)
},500)
}}function l(n){var r=n.find(".slick-dots").width();
if($("body").hasClass("viewport-md")||$("body").hasClass("viewport-lg")){if(r>930){r=930
}}else{if($("body").hasClass("viewport-sm")){if(r>768){r=630
}}else{if($("body").hasClass("viewport-xs")){r=r
}}}var t=n.find("ul.slick-dots li").length;
var o=((r/t)-1);
if($("body").hasClass("viewport-md")||$("body").hasClass("viewport-lg")){n.find("ul.slick-dots li").css("width",o+"px")
}else{if($("body").hasClass("viewport-sm")){n.find("ul.slick-dots li").css("width",o+"px")
}else{if($("body").hasClass("viewport-xs")){n.find("ul.slick-dots li").css("width",o+"px")
}}}}var c=$(window).width();
$(window).resize(function(){if($(window).width()==c){return
}c=$(window).width();
var n=$(".modal.lightbox");
l(n)
})
});
$(function(){function b(g,l){l&&l.preventDefault();
l&&l.stopPropagation();
var c=$(g),k=c.data("deck-number"),n=c.data("image-src-top"),f=c.data("image-src-side"),j=$("#image-deck-plan-top"),d=$("#image-deck-plan-side");
j.attr("src",n);
d.attr("src",f);
$(".lightbox-deck .lg-deck-number").each(function(){$(this).removeClass("lg-active-deck")
});
c.parent().addClass("lg-active-deck")
}$(".open-lightbox-deck").on("click",function(g){g.preventDefault();
g.stopPropagation();
var c=$(this),f=c.closest("[data-lightbox-deck]").data("lightbox-deck"),j=c.data("target"),d=$(j);
d.find(".modal-content").addClass("lightbox-suite-content");
d.addClass("lightbox-no-scroll");
d.modal("show");
d.on("shown.bs.modal",function(l){l.preventDefault();
l.stopPropagation();
var k=$(this);
k.off("shown.bs.modal");
k.find(".modal-content").load(f,function(o){setTopLightboxModal(400,"#image-deck-plan-top");
$(".lightbox-deck  .lg-deck-number span").on("click",function(r){b(this,r)
});
history.replaceState(null,null,"#"+c.attr("id"));
var n=k.find(".lightbox-deck .lg-deck-number.lg-active-deck span");
if(n!=null&&n.length>0){b(n)
}})
});
d.on("hide.bs.modal",function(k){history.replaceState(null,null,location.href.replace(location.hash,""))
})
})
});
$(function(){$(".cruise-2018-itineraries-container, .cruise-2018-prepost-wrapper").on("click",".open-lightbox-land-shorex-hotel",function(r){r.preventDefault();
r.stopPropagation();
$(".lightbox-prev-link, .lightbox-next-link").hide();
var l=$(this),o=l.attr("href"),t=l.data("target"),n=$(t);
n.find(".modal-content").addClass("lightbox-land-shorex-hotel-content");
n.addClass("lightbox-no-scroll");
n.modal("show");
n.on("shown.bs.modal",function(y){y.preventDefault();
y.stopPropagation();
history.pushState(null,null,"#"+l.attr("id"));
if(window.scrollSupport!=null&&window.scrollSupport){window.iNoBounce.enable()
}var u=$(this);
u.off("shown.bs.modal");
var x=l.data("itinerary-id");
var v=l.data("excursion-id");
g(u,x,v,o,false,"")
});
n.on("hide.bs.modal",function(u){history.replaceState(null,null,location.href.replace(location.hash,""))
})
});
$(".lightbox-prev-link, .lightbox-next-link").on("click",function(t){t.preventDefault();
t.stopPropagation();
var r=$(this);
var o=r.data("itinerary-id");
var n=r.data("excursion-id");
var l=$("#"+r.data("target"));
g(l,o,n,r.attr("href"),true,r.hasClass("lightbox-prev-link")?"right":"left")
});
function g(y,z,x,v,n,u){if(z&&x){if($(window).width()>1024&&k(y,v,z,x)){$(".lightbox-prev-link, .lightbox-next-link").show()
}}var l=y.find(".modal-content");
var r=function(A){l.load(v+"."+z+"."+x+".html",function(B){setTopLightboxModal(432);
f(y);
if(window.scrollSupport!=null&&window.scrollSupport){window.iNoBounce.enable()
}if($("body").hasClass("viewport-sm")){$(".modal.lightbox").css("padding-left","0px")
}if($(".lsh-title")!=null&&$(".lsh-title").html()!=null){$(".lsh-title").html($(".lsh-title").html().toLowerCase())
}A&&A()
})
};
if(n){var o=u==="left"?"right":"left";
(function t(C,B){var A={};
A[C]="-100vw";
$(".lightbox-close").hide();
l.animate(A,400,function(){r(function(){l.animate({left:"",right:""},500,function(){l.css("left","");
l.css("right","");
$(".lightbox-close").fadeIn();
$(".lazy:visible").lazy()
})
});
l.css(B,"-100vw");
l.css(C,"")
})
})(u,o)
}else{r()
}}function k(B,o,C,A){try{var n=window["it"+C][A];
if(n.prevId==A){return false
}var y=o.substring(0,o.lastIndexOf(".")+1);
var r=B.find(".lightbox-prev-label");
var u=B.find(".lightbox-next-label");
var z=B.find(".lightbox-next-link");
var v=B.find(".lightbox-prev-link");
r.html(n.prevLabel);
r.attr("title",n.prevLabel);
u.html(n.nextLabel);
u.attr("title",n.nextLabel);
v.data("target",B.attr("id"));
v.data("itinerary-id",C);
v.data("excursion-id",n.prevId);
var t=y+n.prevKind;
v.attr("href",t);
z.data("target",B.attr("id"));
z.data("itinerary-id",C);
z.data("excursion-id",n.nextId);
var l=y+n.nextKind;
z.attr("href",l)
}catch(x){}return true
}function f(n){var l=n.find(".lightbox-land-shorex-hotel .lsh-asset-slider").slick({slidesToShow:1,slidesToScroll:1,dots:false,responsive:[{breakpoint:480,settings:{arrows:true}}]});
$(".lightbox-land-shorex-hotel .lsh-asset-gallery .video-link").on("click",function(o){o.preventDefault();
o.stopPropagation();
$(this).next(".c-video").initVideo()
});
n.find(".lightbox-land-shorex-hotel .lsh-virtual-tour").on("click",function(o){c(this,o)
});
l.on("beforeChange",function(t,r,x,u){var v=$(this);
var o=v.find(".slick-current .c-video");
o.find('.s7playpausebutton[selected="false"]').trigger("click");
o.attr("class","c-video").empty();
e()
}).on("afterChange",function(r,o,t){d($(this))
});
d(l);
j(n)
}function d(n){var l=n.closest(".lightbox-land-shorex-hotel").find(".slick-active");
$(".lightbox-land-shorex-hotel .lsh-asset-slider").slick("slickSetOption","draggable",true,false);
$(".lightbox-land-shorex-hotel .lsh-asset-slider").slick("slickSetOption","swipe",true,false);
l.find(".lazy").lazy();
l.prev().find(".lazy").lazy();
l.prev().prev().find(".lazy").lazy();
l.next().find(".lazy").lazy();
l.next().next().find(".lazy").lazy();
setTimeout(function(){l.find(".lazy").lazy()
},50)
}function e(){if(window.hasOwnProperty("virtualTour")&&window.virtualTour!=null){window.virtualTour.destroy();
window.virtualTour=null
}if(window.hasOwnProperty("virtualTourID")&&window.virtualTourID!=null){$(window.virtualTourID).empty();
$(window.virtualTourID).css("height","0px");
window.virtualTourID=null
}if(window.hasOwnProperty("virtualTourImage")&&window.virtualTourImage!=null){$(window.virtualTourImage).css("display","block");
window.virtualTourImage=null
}if(window.hasOwnProperty("virtualTourType")&&window.virtualTourType!=null){window.virtualTourType=null
}}function c(o,t){t.preventDefault();
t.stopPropagation();
var l=$(o).data("image-virtual-tour");
var r=$(o).attr("id");
var u=$(o).attr("id")+"-container";
e();
if(l!=null&&u!=null){$("#"+u).css("height","550px");
$("#"+r).css("display","none");
var n=setInterval(function(){if($("#"+u).height()>0){clearInterval(n);
window.virtualTourID="#"+u;
window.virtualTourImage="#"+r;
window.virtualTourType="ga-virtual-tour";
window.virtualTour=PhotoSphereViewer({container:u,panorama:l,anim_speed:"0.4rpm",move_speed:1,mousemove:true,time_anim:"1000",min_fov:10,default_fov:179,usexmpdata:true,navbar:["autorotate","zoom","spacer-1","caption","gyroscope","fullscreen"]})
}$(".lightbox-land-shorex-hotel .lsh-asset-slider").slick("slickSetOption","draggable",false,false);
$(".lightbox-land-shorex-hotel .lsh-asset-slider").slick("slickSetOption","swipe",false,false)
},500)
}}function j(l){var o=l.find(".slick-dots").width();
if($("body").hasClass("viewport-md")||$("body").hasClass("viewport-lg")){if(o>930){o=930
}}else{if($("body").hasClass("viewport-sm")){if(o>768){o=630
}}else{if($("body").hasClass("viewport-xs")){o=o
}}}var r=l.find("ul.slick-dots li").length;
var n=((o/r)-1);
if($("body").hasClass("viewport-md")||$("body").hasClass("viewport-lg")){l.find("ul.slick-dots li").css("width",n+"px")
}else{if($("body").hasClass("viewport-sm")){l.find("ul.slick-dots li").css("width",n+"px")
}else{if($("body").hasClass("viewport-xs")){l.find("ul.slick-dots li").css("width",n+"px")
}}}}var b=$(window).width();
$(window).resize(function(){if($(window).width()==b){return
}b=$(window).width();
var l=$(".modal.lightbox");
j(l)
})
});
$(function(){$(".cruise-2018-itineraries-container").on("click",".open-lightbox-port",function(k){k.preventDefault();
k.stopPropagation();
var f=$(this),j=f.attr("href"),l=f.data("target"),g=$(l);
g.find(".modal-content").addClass("lightbox-port-content");
g.addClass("lightbox-no-scroll");
g.modal("show");
g.on("shown.bs.modal",function(o){o.preventDefault();
o.stopPropagation();
history.pushState(null,null,location.href.replace(location.hash,"")+"#"+f.attr("id"));
if(window.scrollSupport!=null&&window.scrollSupport){window.iNoBounce.enable()
}var n=$(this);
n.off("shown.bs.modal");
n.find(".modal-content").load(j,function(r){setTopLightboxModal();
d(n,f)
})
});
g.on("hide.bs.modal",function(n){history.replaceState(null,null,location.href.replace(location.hash,""))
})
});
function d(j,g){var f=j.find(".lightbox-port .lg-asset-slider").slick({slidesToShow:1,slidesToScroll:1,dots:false,responsive:[{breakpoint:480,settings:{arrows:true}}]});
$(".lightbox-port .lg-asset-gallery .video-link").on("click",function(k){k.preventDefault();
k.stopPropagation();
$(this).next(".c-video").initVideo()
});
f.on("beforeChange",function(n,l,t,o){var r=$(this);
var k=r.find(".slick-current .c-video");
k.find('.s7playpausebutton[selected="false"]').trigger("click");
k.attr("class","c-video").empty()
}).on("afterChange",function(l,k,n){c($(this))
});
c(f);
e(j)
}function c(g){var f=g.closest(".lightbox-port").find(".slick-active");
$(".lightbox-suite .lg-asset-slider").slick("slickSetOption","draggable",true,false);
$(".lightbox-suite .lg-asset-slider").slick("slickSetOption","swipe",true,false);
f.find(".lazy").lazy();
f.prev().find(".lazy").lazy();
f.prev().prev().find(".lazy").lazy();
f.next().find(".lazy").lazy();
f.next().next().find(".lazy").lazy();
setTimeout(function(){f.find(".lazy").lazy()
},50)
}function e(f){var j=f.find(".slick-dots").width();
if($("body").hasClass("viewport-md")||$("body").hasClass("viewport-lg")){if(j>930){j=930
}}else{if($("body").hasClass("viewport-sm")){if(j>768){j=630
}}else{if($("body").hasClass("viewport-xs")){j=j
}}}var k=f.find("ul.slick-dots li").length;
var g=((j/k)-1);
if($("body").hasClass("viewport-md")||$("body").hasClass("viewport-lg")){f.find("ul.slick-dots li").css("width",g+"px")
}else{if($("body").hasClass("viewport-sm")){f.find("ul.slick-dots li").css("width",g+"px")
}else{if($("body").hasClass("viewport-xs")){f.find("ul.slick-dots li").css("width",g+"px")
}}}}var b=$(window).width();
$(window).resize(sscThrottled(function(){if($(window).width()==b){return
}b=$(window).width();
var f=$(".modal.lightbox");
e(f)
}))
});
$(function(){$(".open-lightbox-highlights ").on("click",function(f){f.preventDefault();
f.stopPropagation();
var b=$(this),d=b.closest("[data-lightbox-highlights]").data("lightbox-highlights"),g=b.data("target"),c=$(g);
c.modal("show");
c.on("shown.bs.modal",function(k){k.preventDefault();
k.stopPropagation();
history.pushState(null,null,"#lb-detatils");
if(window.scrollSupport!=null&&window.scrollSupport){window.iNoBounce.enable()
}var j=$(this);
j.off("shown.bs.modal");
j.find(".modal-content").load(d,function(l){setTopLightboxModal()
})
})
})
});
var EasyAutocomplete=function(b){return b.Configuration=function(v){function u(){if("xml"===v.dataType&&(v.getValue||(v.getValue=function(c){return $(c).text()
}),v.list||(v.list={}),v.list.sort||(v.list.sort={}),v.list.sort.method=function(d,e){return d=v.getValue(d),e=v.getValue(e),e>d?-1:d>e?1:0
},v.list.match||(v.list.match={}),v.list.match.method=function(d,c){return d.search(c)>-1
}),void 0!==v.categories&&v.categories instanceof Array){for(var g=[],A=0,z=v.categories.length;
z>A;
A+=1){var y=v.categories[A];
for(var x in k.categories[0]){void 0===y[x]&&(y[x]=k.categories[0][x])
}g.push(y)
}v.categories=g
}}function t(){function c(f,y){var x=f||{};
for(var g in f){void 0!==y[g]&&null!==y[g]&&("object"!=typeof y[g]||y[g] instanceof Array?x[g]=y[g]:c(f[g],y[g]))
}return void 0!==y.data&&null!==y.data&&"object"==typeof y.data&&(x.data=y.data),x
}k=c(k,v)
}function r(){if("list-required"!==k.url&&"function"!=typeof k.url){var e=k.url;
k.url=function(){return e
}
}if(void 0!==k.ajaxSettings.url&&"function"!=typeof k.ajaxSettings.url){var e=k.ajaxSettings.url;
k.ajaxSettings.url=function(){return e
}
}if("string"==typeof k.listLocation){var g=k.listLocation;
"XML"===k.dataType.toUpperCase()?k.listLocation=function(c){return $(c).find(g)
}:k.listLocation=function(c){return c[g]
}
}if("string"==typeof k.getValue){var f=k.getValue;
k.getValue=function(c){return c[f]
}
}void 0!==v.categories&&(k.categoriesAssigned=!0)
}function o(){void 0!==v.ajaxSettings&&"object"==typeof v.ajaxSettings?k.ajaxSettings=v.ajaxSettings:k.ajaxSettings={}
}function n(c){return void 0!==k[c]&&null!==k[c]
}function l(e,d){function f(c,x){for(var g in x){void 0===c[g]&&e.log("Property '"+g+"' does not exist in EasyAutocomplete options API."),"object"==typeof c[g]&&-1===$.inArray(g,j)&&f(c[g],x[g])
}}f(k,d)
}var k={data:"list-required",url:"list-required",dataType:"json",listLocation:function(c){return c
},xmlElementName:"",getValue:function(c){return c
},autocompleteOff:!0,placeholder:!1,ajaxCallback:function(){},matchResponseProperty:!1,list:{sort:{enabled:!1,method:function(d,c){return d=k.getValue(d),c=k.getValue(c),c>d?-1:d>c?1:0
}},maxNumberOfElements:6,hideOnEmptyPhrase:!0,match:{enabled:!1,caseSensitive:!1,method:function(d,c){return d.search(c)>-1
}},showAnimation:{type:"normal",time:400,callback:function(){}},hideAnimation:{type:"normal",time:400,callback:function(){}},onClickEvent:function(){},onSelectItemEvent:function(){},onLoadEvent:function(){},onChooseEvent:function(){},onKeyEnterEvent:function(){},onMouseOverEvent:function(){},onMouseOutEvent:function(){},onShowListEvent:function(){},onHideListEvent:function(){}},highlightPhrase:!0,theme:"",cssClasses:"",minCharNumber:0,requestDelay:0,adjustWidth:!0,ajaxSettings:{},preparePostData:function(d,c){return d
},loggerEnabled:!0,template:"",categoriesAssigned:!1,categories:[{maxNumberOfElements:4}]},j=["ajaxSettings","template"];
this.get=function(c){return k[c]
},this.equals=function(d,c){return !(!n(d)||k[d]!==c)
},this.checkDataUrlProperties=function(){return"list-required"!==k.url||"list-required"!==k.data
},this.checkRequiredProperties=function(){for(var c in k){if("required"===k[c]){return logger.error("Option "+c+" must be defined"),!1
}}return !0
},this.printPropertiesThatDoesntExist=function(d,c){l(d,c)
},u(),t(),k.loggerEnabled===!0&&l(console,v),o(),r()
},b
}(EasyAutocomplete||{}),EasyAutocomplete=function(b){return b.Logger=function(){this.error=function(c){console.log("ERROR: "+c)
},this.warning=function(c){console.log("WARNING: "+c)
}
},b
}(EasyAutocomplete||{}),EasyAutocomplete=function(b){return b.Constans=function(){var c={CONTAINER_CLASS:"easy-autocomplete-container",CONTAINER_ID:"eac-container-",WRAPPER_CSS_CLASS:"easy-autocomplete"};
this.getValue=function(d){return c[d]
}
},b
}(EasyAutocomplete||{}),EasyAutocomplete=function(b){return b.ListBuilderService=function(f,e){function j(k,t){function r(){var u,c={};
return void 0!==k.xmlElementName&&(c.xmlElementName=k.xmlElementName),void 0!==k.listLocation?u=k.listLocation:void 0!==f.get("listLocation")&&(u=f.get("listLocation")),void 0!==u?"string"==typeof u?c.data=$(t).find(u):"function"==typeof u&&(c.data=u(t)):c.data=t,c
}function o(){var c={};
return void 0!==k.listLocation?"string"==typeof k.listLocation?c.data=t[k.listLocation]:"function"==typeof k.listLocation&&(c.data=k.listLocation(t)):c.data=t,c
}var n={};
if(n="XML"===f.get("dataType").toUpperCase()?r():o(),void 0!==k.header&&(n.header=k.header),void 0!==k.maxNumberOfElements&&(n.maxNumberOfElements=k.maxNumberOfElements),void 0!==f.get("list").maxNumberOfElements&&(n.maxListSize=f.get("list").maxNumberOfElements),void 0!==k.getValue){if("string"==typeof k.getValue){var l=k.getValue;
n.getValue=function(c){return c[l]
}
}else{"function"==typeof k.getValue&&(n.getValue=k.getValue)
}}else{n.getValue=f.get("getValue")
}return n
}function g(d){var k=[];
return void 0===d.xmlElementName&&(d.xmlElementName=f.get("xmlElementName")),$(d.data).find(d.xmlElementName).each(function(){k.push(this)
}),k
}this.init=function(k){var n=[],l={};
return l.data=f.get("listLocation")(k),l.getValue=f.get("getValue"),l.maxListSize=f.get("list").maxNumberOfElements,n.push(l),n
},this.updateCategories=function(c,n){if(f.get("categoriesAssigned")){c=[];
for(var l=0;
l<f.get("categories").length;
l+=1){var k=j(f.get("categories")[l],n);
c.push(k)
}}return c
},this.convertXml=function(d){if("XML"===f.get("dataType").toUpperCase()){for(var k=0;
k<d.length;
k+=1){d[k].data=g(d[k])
}}return d
},this.processData=function(o,n){for(var l=0,k=o.length;
k>l;
l+=1){o[l].data=e(f,o[l],n)
}return o
},this.checkIfDataExists=function(k){for(var d=0,l=k.length;
l>d;
d+=1){if(void 0!==k[d].data&&k[d].data instanceof Array&&k[d].data.length>0){return !0
}}return !1
}
},b
}(EasyAutocomplete||{}),EasyAutocomplete=function(b){return b.proccess=function(x,v,u){function t(f,B){var A=[],z="";
if(x.get("list").match.enabled){for(var y=0,j=f.length;
j>y;
y+=1){z=x.get("getValue")(f[y]),r(z,B)&&A.push(f[y])
}}else{A=f
}return A
}function r(d,e){return x.get("list").match.caseSensitive||("string"==typeof d&&(d=d.toLowerCase()),e=e.toLowerCase()),!!x.get("list").match.method(d,e)
}function o(c){return void 0!==v.maxNumberOfElements&&c.length>v.maxNumberOfElements&&(c=c.slice(0,v.maxNumberOfElements)),c
}function n(c){return x.get("list").sort.enabled&&c.sort(x.get("list").sort.method),c
}b.proccess.match=r;
var l=v.data,k=u;
return l=t(l,k),l=o(l),l=n(l)
},b
}(EasyAutocomplete||{}),EasyAutocomplete=function(b){return b.Template=function(g){var f={basic:{type:"basic",method:function(c){return c
},cssClass:""},description:{type:"description",fields:{description:"description"},method:function(c){return c+" - description"
},cssClass:"eac-description"},iconLeft:{type:"iconLeft",fields:{icon:""},method:function(c){return c
},cssClass:"eac-icon-left"},iconRight:{type:"iconRight",fields:{iconSrc:""},method:function(c){return c
},cssClass:"eac-icon-right"},links:{type:"links",fields:{link:""},method:function(c){return c
},cssClass:""},custom:{type:"custom",method:function(){},cssClass:""}},l=function(e){var o,n=e.fields;
return"description"===e.type?(o=f.description.method,"string"==typeof n.description?o=function(d,c){return d+" - <span>"+c[n.description]+"</span>"
}:"function"==typeof n.description&&(o=function(d,c){return d+" - <span>"+n.description(c)+"</span>"
}),o):"iconRight"===e.type?("string"==typeof n.iconSrc?o=function(d,c){return d+"<img class='eac-icon' src='"+c[n.iconSrc]+"' />"
}:"function"==typeof n.iconSrc&&(o=function(d,c){return d+"<img class='eac-icon' src='"+n.iconSrc(c)+"' />"
}),o):"iconLeft"===e.type?("string"==typeof n.iconSrc?o=function(d,c){return"<img class='eac-icon' src='"+c[n.iconSrc]+"' />"+d
}:"function"==typeof n.iconSrc&&(o=function(d,c){return"<img class='eac-icon' src='"+n.iconSrc(c)+"' />"+d
}),o):"links"===e.type?("string"==typeof n.link?o=function(d,c){return"<a href='"+c[n.link]+"' >"+d+"</a>"
}:"function"==typeof n.link&&(o=function(d,c){return"<a href='"+n.link(c)+"' >"+d+"</a>"
}),o):"custom"===e.type?e.method:f.basic.method
},k=function(c){return c&&c.type&&c.type&&f[c.type]?l(c):f.basic.method
},j=function(d){var e=function(){return""
};
return d&&d.type&&d.type&&f[d.type]?function(){var n=f[d.type].cssClass;
return function(){return n
}
}():e
};
this.getTemplateClass=j(g),this.build=k(g)
},b
}(EasyAutocomplete||{}),EasyAutocomplete=function(b){return b.main=function(S,R){function Q(){return 0===A.length?void E.error("Input field doesn't exist."):F.checkDataUrlProperties()?F.checkRequiredProperties()?(P(),void N()):void E.error("Will not work without mentioned properties."):void E.error("One of options variables 'data' or 'url' must be defined.")
}function P(){function j(){var d=$("<div>"),e=G.getValue("WRAPPER_CSS_CLASS");
F.get("theme")&&""!==F.get("theme")&&(e+=" eac-"+F.get("theme")),F.get("cssClasses")&&""!==F.get("cssClasses")&&(e+=" "+F.get("cssClasses")),""!==D.getTemplateClass()&&(e+=" "+D.getTemplateClass()),d.addClass(e),A.wrap(d),F.get("adjustWidth")===!0&&f()
}function f(){var c=A.outerWidth();
A.parent().css("width",c)
}function t(){A.unwrap()
}function r(){var c=$("<div>").addClass(G.getValue("CONTAINER_CLASS"));
c.attr("id",O()).prepend($("<ul>")),function(){c.on("show.eac",function(){switch(F.get("list").showAnimation.type){case"slide":var d=F.get("list").showAnimation.time,e=F.get("list").showAnimation.callback;
c.find("ul").slideDown(d,e);
break;
case"fade":var d=F.get("list").showAnimation.time,e=F.get("list").showAnimation.callback;
c.find("ul").fadeIn(d),e;
break;
default:c.find("ul").show()
}F.get("list").onShowListEvent()
}).on("hide.eac",function(){switch(F.get("list").hideAnimation.type){case"slide":var d=F.get("list").hideAnimation.time,e=F.get("list").hideAnimation.callback;
c.find("ul").slideUp(d,e);
break;
case"fade":var d=F.get("list").hideAnimation.time,e=F.get("list").hideAnimation.callback;
c.find("ul").fadeOut(d,e);
break;
default:c.find("ul").hide()
}F.get("list").onHideListEvent()
}).on("selectElement.eac",function(){c.find("ul li").removeClass("selected"),c.find("ul li").eq(x).addClass("selected"),F.get("list").onSelectItemEvent()
}).on("loadElements.eac",function(aa,Z,Y){var X="",W=c.find("ul");
W.empty().detach(),y=[];
for(var V=0,U=0,T=Z.length;
T>U;
U+=1){var v=Z[U].data;
if(0!==v.length){void 0!==Z[U].header&&Z[U].header.length>0&&W.append("<div class='eac-category' >"+Z[U].header+"</div>");
for(var u=0,g=v.length;
g>u&&V<Z[U].maxListSize;
u+=1){X=$("<li><div class='eac-item'></div></li>"),function(){var e=u,d=V,ab=Z[U].getValue(v[e]);
X.find(" > div").on("click",function(){A.val(ab).trigger("change"),x=d,K(d),F.get("list").onClickEvent(),F.get("list").onChooseEvent()
}).mouseover(function(){x=d,K(d),F.get("list").onMouseOverEvent()
}).mouseout(function(){F.get("list").onMouseOutEvent()
}).html(D.build(n(ab,Y),v[e]))
}(),W.append(X),y.push(v[u]),V+=1
}}}c.append(W),F.get("list").onLoadEvent()
})
}(),A.after(c)
}function o(){A.next("."+G.getValue("CONTAINER_CLASS")).remove()
}function n(d,c){return F.get("highlightPhrase")&&""!==c?k(d,c):d
}function l(c){return c.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g,"\\$&")
}function k(e,d){var g=l(d);
return(e+"").replace(new RegExp("("+g+")","gi"),"<b>$1</b>")
}A.parent().hasClass(G.getValue("WRAPPER_CSS_CLASS"))&&(o(),t()),j(),r(),z=$("#"+O()),F.get("placeholder")&&A.attr("placeholder",F.get("placeholder"))
}function O(){var c=A.attr("id");
return c=G.getValue("CONTAINER_ID")+c
}function N(){function k(){B("autocompleteOff",!0)&&u(),j(),v(),t(),r(),o(),l()
}function j(){A.focusout(function(){var f,e=A.val();
F.get("list").match.caseSensitive||(e=e.toLowerCase());
for(var n=0,g=y.length;
g>n;
n+=1){if(f=F.get("getValue")(y[n]),F.get("list").match.caseSensitive||(f=f.toLowerCase()),f===e){return x=n,void K(x)
}}})
}function v(){A.off("keyup").keyup(function(e){function d(n){function g(){var Y={},X=F.get("ajaxSettings")||{};
for(var Z in X){Y[Z]=X[Z]
}return Y
}function W(X,c){return F.get("matchResponseProperty")!==!1?"string"==typeof F.get("matchResponseProperty")?c[F.get("matchResponseProperty")]===X:"function"==typeof F.get("matchResponseProperty")?F.get("matchResponseProperty")(c)===X:!0:!0
}if(!(n.length<F.get("minCharNumber"))){if("list-required"!==F.get("data")){var V=F.get("data"),U=C.init(V);
U=C.updateCategories(U,V),U=C.processData(U,n),J(U,n),A.parent().find("li").length>0?M():L()
}var T=g();
void 0!==T.url&&""!==T.url||(T.url=F.get("url")),void 0!==T.dataType&&""!==T.dataType||(T.dataType=F.get("dataType")),void 0!==T.url&&"list-required"!==T.url&&(T.url=T.url(n),T.data=F.get("preparePostData")(T.data,n),$.ajax(T).done(function(c){var X=C.init(c);
X=C.updateCategories(X,c),X=C.convertXml(X),W(n,c)&&(X=C.processData(X,n),J(X,n)),C.checkIfDataExists(X)&&A.parent().find("li").length>0?M():L(),F.get("ajaxCallback")()
}).fail(function(){E.warning("Fail to load response data")
}).always(function(){}))
}}switch(e.keyCode){case 27:L(),I();
break;
case 38:e.preventDefault(),y.length>0&&x>0&&(x-=1,A.val(F.get("getValue")(y[x])),K(x));
break;
case 40:e.preventDefault(),y.length>0&&x<y.length-1&&(x+=1,A.val(F.get("getValue")(y[x])),K(x));
break;
default:if(e.keyCode>40||8===e.keyCode){var f=A.val();
F.get("list").hideOnEmptyPhrase!==!0||8!==e.keyCode||""!==f?F.get("requestDelay")>0?(void 0!==H&&clearTimeout(H),H=setTimeout(function(){d(f)
},F.get("requestDelay"))):d(f):L()
}}})
}function t(){A.on("keydown",function(d){d=d||window.event;
var c=d.keyCode;
return 38===c?(suppressKeypress=!0,!1):void 0
}).keydown(function(c){13===c.keyCode&&x>-1&&(A.val(F.get("getValue")(y[x])),F.get("list").onKeyEnterEvent(),F.get("list").onChooseEvent(),x=-1,L(),c.preventDefault())
})
}function r(){A.off("keypress")
}function o(){A.focus(function(){""!==A.val()&&y.length>0&&(x=-1,M())
})
}function l(){A.blur(function(){setTimeout(function(){x=-1,L()
},250)
})
}function u(){A.attr("autocomplete","off")
}k()
}function M(){z.trigger("show.eac")
}function L(){z.trigger("hide.eac")
}function K(c){z.trigger("selectElement.eac",c)
}function J(d,c){z.trigger("loadElements.eac",[d,c])
}function I(){A.trigger("blur")
}var H,G=new b.Constans,F=new b.Configuration(R),E=new b.Logger,D=new b.Template(R.template),C=new b.ListBuilderService(F,b.proccess),B=F.equals,A=S,z="",y=[],x=-1;
b.consts=G,this.getConstants=function(){return G
},this.getConfiguration=function(){return F
},this.getContainer=function(){return z
},this.getSelectedItemIndex=function(){return x
},this.getItems=function(){return y
},this.getItemData=function(c){return y.length<c||void 0===y[c]?-1:y[c]
},this.getSelectedItemData=function(){return this.getItemData(x)
},this.build=function(){P()
},this.init=function(){Q()
}
},b.eacHandles=[],b.getHandle=function(c){return b.eacHandles[c]
},b.inputHasId=function(c){return void 0!==$(c).attr("id")&&$(c).attr("id").length>0
},b.assignRandomId=function(d){var e="";
do{e="eac-"+Math.floor(10000*Math.random())
}while(0!==$("#"+e).length);
elementId=b.consts.getValue("CONTAINER_ID")+e,$(d).attr("id",e)
},b.setHandle=function(d,e){b.eacHandles[e]=d
},b
}(EasyAutocomplete||{});
!function(b){b.fn.easyAutocomplete=function(c){return this.each(function(){var f=b(this),e=new EasyAutocomplete.main(f,c);
EasyAutocomplete.inputHasId(f)||EasyAutocomplete.assignRandomId(f),e.init(),EasyAutocomplete.setHandle(e,f.attr("id"))
})
},b.fn.getSelectedItemIndex=function(){var c=b(this).attr("id");
return void 0!==c?EasyAutocomplete.getHandle(c).getSelectedItemIndex():-1
},b.fn.getItems=function(){var c=b(this).attr("id");
return void 0!==c?EasyAutocomplete.getHandle(c).getItems():-1
},b.fn.getItemData=function(d){var e=b(this).attr("id");
return void 0!==e&&d>-1?EasyAutocomplete.getHandle(e).getItemData(d):-1
},b.fn.getSelectedItemData=function(){var c=b(this).attr("id");
return void 0!==c?EasyAutocomplete.getHandle(c).getSelectedItemData():-1
}
}(jQuery);
$(function(){if($(".findyourcruise2018").length>0){var k=function(){var ad=$(".fyc2018-show-hide-waitlist .waitlist.hide-waitlist"),ae=$(".fyc2018-show-hide-waitlist .waitlist.show-waitlist");
var e=ad.length>0;
if(e){ae.remove()
}$(".fyc2018-show-hide-waitlist .waitlist").show()
};
var F=function(){var e=$(".fyc2018-show-hide-waitlist").find(".waitlist").hasClass("show-waitlist");
return e?"&waitlist=no_waitlist,waitlist":""
};
var y=function(){var ad=$("#results-url-request").data("url");
var e=Z(ad,1,true)+"&onlyResults=true";
d(e,true)
};
var B=function(ah){ah.stopPropagation();
ah.preventDefault();
var ae=$(this),ad=ae.attr("data-type")=="ASC",ag=ad?"DESC":"ASC",af="fa fa-sort-amount-"+ag.toLowerCase();
ae.find("i").remove();
ae.append("<i class='"+af+"'></i>");
ae.attr("data-type",ag);
n()
};
var l=function(ad){var ae=ad.find(".waitlist");
ae.removeClass("hide-waitlist");
ae.addClass("show-waitlist");
var e=ad.attr("data-hide-waitlist");
ad.find("span").text(e);
y()
};
var x=function(ad){var ae=ad.find(".waitlist");
ae.removeClass("show-waitlist");
ae.addClass("hide-waitlist");
var e=ad.attr("data-show-waitlist");
ad.find("span").text(e);
y()
};
var t=function(af){af.preventDefault();
af.stopPropagation();
var ae=$(this);
var ad=ae.find(".waitlist").hasClass("show-waitlist");
if(ad){x(ae)
}else{l(ae)
}$(".fyc2018-header-reset-all").show()
};
var T=function(){$(".findyourcruise2018 .fyc2018-sorting-dropdown .fyc2018-sorting-filed-span").each(function(ai){var ae=$(this).attr("data-enable"),ad=$(this).attr("data-label"),af=$(this).attr("data-key"),ah=$(this).attr("data-type");
if(ae=="true"){$(".findyourcruise2018 .fyc2018-sorting-span span").text(ad);
$(".findyourcruise2018 .fyc2018-sorting-span").attr("data-key",af);
var ag="fa fa-sort-amount-"+ah.toLowerCase();
$(".findyourcruise2018 .fyc2018-header-sorting-type").attr("data-type",ah);
$(".findyourcruise2018 .fyc2018-header-sorting-type i").removeAttr("class");
$(".findyourcruise2018 .fyc2018-header-sorting-type i").addClass(ag)
}})
};
var n=function(){var ad=$("#results-url-request").data("url");
var e=Z(ad,1,true)+"&onlyResults=true";
d(e,true)
};
var X=function(e){var af=$(".filter-port .fyc2018-filter-selected-content");
var ae=false;
af.find(".filter-value").each(function(){if($(this).data("key")==e.attr("data-key")){ae=true;
$(this).remove()
}});
if(!ae){var ad="col-sm-12 filter-value filter-selected filter-port-selected";
af.append($("<div class='"+ad+"' data-key='"+e.data("key")+"' data-label='"+e.data("label")+"' data-state='"+e.data("state")+"'><span>"+e.data("label")+"</span></div>"))
}};
var D=function(e){var ae=$(".filter-port .fyc2018-filter-selected-content");
var ad="col-sm-12 filter-value filter-selected filter-port-selected";
ae.append($("<div class='"+ad+"' data-key='"+e.key+"' data-label='"+e.label+"' data-state='"+e.state+"'><span>"+e.label+"</span></div>"))
};
var j=function(){try{$(".c-fyc-v2__result__content__itinerary li.destination-ports .c-fyc-v2__result__content__itinerary__ports span").each(function(){var ad=$(this).text();
ad=ad.toLowerCase();
$(this).text(ad)
})
}catch(e){console.error(e)
}};
var o=function(){K=[];
$(".fyc2018-filter-autocomplete-content").find(".filter-value").remove();
var ad=0,af=$(b).getItemData(ad);
if(af==-1){$(r+" .filter-no-ports").show();
$(r+" .filter-value").hide();
$(r+" .filter-view-all").hide();
return
}else{$(r+" .filter-no-ports").hide();
$(r+" .filter-value").show()
}$(H).hide();
$(I).hide();
while(af!=-1){if(ad<100){if(Y[af.key]!=null){af.state=Y[af.key].state
}var e=af.state=="ENABLED"?"filter-no-selected":af.state=="DISABLED"?"filter-disabled":af.state=="CHOSEN"?"filter-selected":"";
var ae="col-sm-12 filter-value "+e;
$(".fyc2018-filter-autocomplete-content").append($("<div class='"+ae+"' data-key='"+af.key+"' data-label='"+af.label+"' data-state='"+af.state+"'><span>"+af.label+"</span></div>"))
}else{K.push(af)
}af=$(b).getItemData(++ad)
}if(ad<7){$(H).hide();
$(I).hide()
}else{$(r).css("overflow-y","scroll")
}if(K.length>0){$(I).hide();
$(r).append($(H));
$(H).show()
}};
var L=function(al,ak){var aj=ak?K:A;
var ad=$(".filter-port .fyc2018-filter-autocomplete-content");
for(var ai=al;
(ai<al+100&&ai<aj.length);
ai++){var ae=aj[ai];
var e="col-sm-12 filter-value ";
if(ae.state=="ENABLED"){e+="filter-no-selected"
}else{if(ae.state=="CHOSEN"){e+="filter-selected"
}}var ah=$(".filter-port .fyc2018-filter-selected-content");
ah.each(function(){if($(this).data("key")==ae.key){e="filter-selected";
ae.state="CHOSEN"
}});
ad.append($("<div class='"+e+"' data-key='"+ae.key+"' data-label='"+ae.label+"' data-state='"+ae.state+"'><span>"+ae.label+"</span></div>"))
}var ag=$(".filter-port .filter-view-all-original");
var af=$(".filter-port .filter-view-all-filtered");
ag.hide();
af.hide();
ad.append($(".filter-port .filter-view-all-original"));
ad.append($(".filter-port .filter-view-all-filtered"));
if($(".filter-port .filter-value").length<aj.length-1){if(ak){af.show()
}else{ag.show()
}}};
var N=function(){$("#"+P).parent().click()
};
var v=function(){var e=$(".findyourcruise2018 .fyc2018-filter .filter-value.filter-selected:not(.filter-port-selected)").length;
if(e>0){$(".fyc2018-header-reset-all").show();
$(".fyc2018-filters-container").addClass("fyc2018-filters-container-clear-open")
}else{$(".fyc2018-header-reset-all").hide();
$(".fyc2018-filters-container").removeClass("fyc2018-filters-container-clear-open")
}};
var f=function(){var e=null;
$(".filter-departure .filter-value").each(function(){var ad=$(this).data("key").split("-")[0];
if(ad!=e){$(this).before("<div class='col-xs-12 fyc2018-filter-year'>"+ad+"</div>");
e=ad
}})
};
var Z=function(af,ai,aj){var e="";
var ad=0;
$(".fyc2018-filter .fyc2018-filter-value").each(function(){var an=$(this);
var al=an.find(".filter-value.filter-selected:not(.filter-port-selected, .filter-sorting)");
if(an.data("name")=="port"){al=an.find(".fyc2018-filter-selected-content .filter-value.filter-selected")
}var am=0;
var ao="";
al.each(function(){ao+=$(this).data("key");
ao=(++am<al.length)?ao+=".":ao
});
if(ao!=""){e+=e!=""?"&":e;
e+=an.data("name")+"="+ao
}});
var ag=ai;
if(ai==null){if($(".active.fyc2018-pag-link").length>0){ag=$(".active.fyc2018-pag-link").data("page")
}else{ag=1
}}var ah=$(".findyourcruise2018 .fyc2018-header-sorting-type").attr("data-type"),ak=$(".findyourcruise2018 .fyc2018-sorting-span").attr("data-key");
if(e==""){e+="pag="+ag;
e+="&sortby="+ak+"-"+ah.toLowerCase();
e+=F()
}else{e+="&pag="+ag;
e+="&sortby="+ak+"-"+ah.toLowerCase();
e+=F()
}if(aj){var ae=window.location.href;
history.replaceState(null,null,encodeURI(ae.substr(0,ae.indexOf("html")+4)+"?"+e))
}return af+".html?"+e
};
var d=function(ad,e){$.ajax({type:"GET",url:ad,success:function(ae){var af=$(".findyourcruise2018 .fyc2018-results-div");
af.html(ae);
var ag=af.find(".c-fyc-v2__results__wrapper").data("totals");
$(".findyourcruise2018 .fyc2018-header-total-num").html(ag);
U(ag);
if($(window).width()<768&&!e){$("html").addClass("no-scroll-html");
$("body").addClass("no-scroll-body");
$("body").addClass("no-height-body");
window.iNoBounce.enable()
}j()
}})
};
var U=function(ae){if($(window).width()<768){ae=ae!=null?ae:0;
var ad=$(".findyourcruise2018 .fyc2018-view-results");
var e=ae+" "+ad.data("plural");
if(ae==1){e=ae+" "+ad.data("singular")
}e=ae>0?ad.data("show")+" "+e:e;
ad.find("span").html(e)
}};
var O=function(ad,e,ae,af){if(Q!=window.location.search){$(".fyc2018-spinner").show();
$(".fyc2018-filter-value-container").addClass("filter-content-disabled");
$(".fyc2018-filter-autocomplete").addClass("filter-content-disabled");
$(".filter-combo-cruises").addClass("filter-content-disabled");
$.ajax({type:"GET",url:ad,success:function(ao){var ai=$(".fyc2018-header-reset-all").is(":visible");
var an=$(".fyc2018-header-mobile-filter").hasClass("fyc2018-filter-mobile-open");
$(".fyc2018-tmp-div").html(ao);
var am=$(".fyc2018-filter-content-clicked span").attr("id");
$(".fyc2018-tmp-div #"+am).parent().addClass("fyc2018-filter-content-clicked");
$(".fyc2018-tmp-div ."+am).addClass("fyc2018-filter-value-clicked");
$(".findyourcruise2018-filter-section").replaceWith($(".fyc2018-tmp-div").html());
$(".fyc2018-tmp-div").html("");
try{A=JSON.parse(window.portsList)
}catch(al){console.info("Error Port list")
}T();
if(ai){$(".fyc2018-header-reset-all").show();
$(".fyc2018-filters-container").addClass("fyc2018-filters-container-clear-open")
}if(an&&$(window).width()<768){$(".fyc2018-header-mobile-filter").addClass("fyc2018-filter-mobile-open");
$(".fyc2018-filters-container").show()
}if($(".filter-port").length>0){var aj=$(".filter-port .fyc2018-filter-selected-content");
for(var ak=0;
ak<A.length;
ak++){var ah=A[ak];
if(ah.state=="CHOSEN"){var ag="col-sm-12 filter-value filter-selected filter-port-selected";
aj.append($("<div class='"+ag+"' data-key='"+ah.key+"' data-label='"+ah.label+"' data-state='"+ah.state+"'><span>"+ah.label+"</span></div>"))
}}$(".findyourcruise2018 #filter-autocomplete").easyAutocomplete(ac);
$(".findyourcruise2018 .easy-autocomplete-container ul").remove();
$(".findyourcruise2018 #filter-autocomplete").focus().select();
$(".findyourcruise2018 #filter-autocomplete").keyup(function(){if($(this).val().trim().length==0){$(".filter-port .filter-value").remove();
L(0);
$(".fyc2018-filter-autocomplete-content .filter-no-ports").hide()
}})
}aa();
f();
z();
C();
k();
Q=window.location.search
}})
}};
var aa=function(){$(".findyourcruise2018 .fyc2018-filter-value").each(function(){var e=$(this).data("filter");
ab(e)
})
};
var C=function(ae){if(ae!=null){ae.attr("data-enable",true)
}else{ae=$(".filter-sortby .filter-value.filter-sorting.filter-selected")
}if($(window).width()<768){var ad="";
$(".filter-sortby .filter-sorting").each(function(){var ah=ae.attr("data-key")==$(this).attr("data-key");
var ag=ae.attr("data-type")==$(this).attr("data-type");
if(ah&&ag){ad=$(this).attr("data-label");
$(this).addClass("filter-selected")
}else{$(this).attr("data-enable",false);
$(this).removeClass("filter-selected")
}});
var af="<i class='fa fa-sort-amount-"+ae.attr("data-type")+"'></i>";
var e=$("#filter-sortby").attr("data-singular")+" "+af+" "+ad;
$("#filter-sortby").html(e);
$(".filter-sortby .fyc2018-filter-label-mobile").html(e)
}};
var ab=function(af){var ae=$("."+af+" .filter-value.filter-selected").length;
if(af=="filter-port"){ae=$("."+af+" .fyc2018-filter-selected-content .filter-value").length;
var ah=$(".filter-port .filter-show-selected");
if(ae>0){ah.show();
$(".filter-port .fyc2018-filter-autocomplete-content").addClass("fyc2018-filter-autocomplete-content-open");
var ad=(ae>1)?"labelplural":"labelsingular";
ah.find("span").text(ae+" "+ah.data(ad))
}else{ah.hide();
$(".filter-port .fyc2018-filter-autocomplete-content").removeClass("fyc2018-filter-autocomplete-content-open");
$(".filter-port .fyc2018-filter-selected-content .filter-value").hide()
}}var ag=(ae>1)?"plural":"singular";
var e=$("#"+af).data(ag);
ae=ae==0?"":ae;
$("#"+af).text(ae+" "+e);
if(ae>0){$("#"+af).parent().addClass("with-filters")
}else{$("#"+af).parent().removeClass("with-filters")
}if($(window).width()<768){$("."+af+" .fyc2018-filter-label-mobile").text(ae+" "+e)
}};
var J=function(ag){ag.preventDefault();
ag.stopPropagation();
var ad=$(this).hasClass("filter-show-selected-open");
var ae=$(".filter-port .fyc2018-filter-selected-content");
var af=$(".filter-port .fyc2018-filter-autocomplete-content");
if(ad){ae.hide();
$(this).removeClass("filter-show-selected-open");
af.show()
}else{af.hide();
$(this).addClass("filter-show-selected-open");
ae.show()
}};
var g=function(ae){if(ae.hasClass("filter-selected")){ae.removeClass("filter-selected");
ae.removeClass("filter-selected-hover");
ae.addClass("filter-no-selected")
}else{if(ae.hasClass("filter-no-selected")){ae.removeClass("filter-no-selected");
ae.removeClass("filter-no-selected-hover");
ae.addClass("filter-selected");
$(".fyc2018-header-reset-all").show();
$(".fyc2018-filters-container").addClass("fyc2018-filters-container-clear-open")
}}if(ae.parent().parent().hasClass("filter-port")){var e=ae.data("key");
var ad={key:e,label:ae.data("label")};
if(ae.hasClass("filter-selected")){ad.state="CHOSEN"
}else{if(ae.hasClass("filter-no-selected")){ad.state="ENABLED"
}}Y[e]=ad
}};
var S=function(){$(".fyc2018-filter-content-clicked, .fyc2018-filter-value-clicked").each(function(){$(this).removeClass("fyc2018-filter-value-clicked");
$(this).removeClass("fyc2018-filter-content-clicked")
});
if($(window).width()>767&&$(window).width()<991){$(".fyc2018-results-div").css("pointer-events","initial")
}};
var z=function(){var ad=window.dataLayer[0];
var e={};
$(".fyc2018-filter .fyc2018-filter-value").each(function(){var ae=$(this).data("name");
var af="";
$(this).find(".filter-value.filter-selected").each(function(){af+=$(this).data("key")+","
});
af=af.substring(0,af.length-1);
e[ae]=af
});
ad.search_filters=e;
ad.search_page_number=$(".findyourcruise2018 .fyc2018-pagination .active").data("page");
ad.search_results_number=$(".findyourcruise2018 .fyc2018-header-total-num").text()
};
var R=function(){window.addEventListener("popstate",function(ae){try{var ai=$(".findyourcruise2018 .fyc2018-filter .fyc2018-filter-value-clicked");
var ah=ai.length>0;
if(ah){var ag=$("#filter-url-request").data("url");
var ad=Z(ag)+"&onlyFilters=true";
O(ad);
S();
$("html").removeClass("no-scroll-html");
$("body").removeClass("no-scroll-body");
$("body").removeClass("no-height-body");
window.iNoBounce.disable()
}}catch(af){$("html").removeClass("no-scroll-html");
$("body").removeClass("no-scroll-body");
$("body").removeClass("no-height-body");
window.iNoBounce.disable()
}},false)
};
var E=".findyourcruise2018",r=".findyourcruise2018 .fyc2018-filter .fyc2018-filter-autocomplete-content",H=".findyourcruise2018 .fyc2018-filter .filter-view-all-filtered",I=".findyourcruise2018 .fyc2018-filter .filter-view-all-original",u=".findyourcruise2018 .fyc2018-filter .filter-port .fyc2018-filter-autocomplete-content .filter-value",b=".findyourcruise2018 .fyc2018-filter #filter-autocomplete",K=[],Y=[],A=null,c=1,G=null,Q=window.location.search,P=null;
var ac={getValue:"label",list:{match:{enabled:true},maxNumberOfElements:800,onLoadEvent:o}};
try{A=JSON.parse(window.portsList);
for(var V=0;
V<A.length;
V++){var M=A[V];
if(M.state=="CHOSEN"){D(M)
}}}catch(W){console.error("Error Port list")
}T();
aa();
f();
G=window.location.search;
z();
k();
if($(window).width()<768){R()
}if(window.location.search!=""&&window.location.search.indexOf("?pag=")!=0){$(".fyc2018-header-reset-all").show();
$(".fyc2018-filters-container").addClass("fyc2018-filters-container-clear-open");
z()
}$(".findyourcruise2018").on("click",".fyc2018-pag-link",function(aj){aj.preventDefault();
aj.stopPropagation();
try{var ag=$(this).data("page");
if($(this).hasClass("next-page")){ag=ag+1
}else{if($(this).hasClass("previous-page")){ag=ag-1
}}var ai=$("#results-url-request").data("url");
var ad=Z(ai,ag,true)+"&onlyResults=true";
d(ad,true);
var ae=window.location.search;
var ah=window.location.href.split("?")[0];
var af=ae.split("page");
ae=af[0];
$("html, body").animate({scrollTop:$(".findyourcruise2018-header").first().offset().top-$(".c-header").height()-50},800)
}catch(aj){}});
$(E).on("click",".fyc2018-header-sorting",function(ad){ad.preventDefault();
ad.stopPropagation();
if($(window).width()<992){$(".fyc2018-sorting-dropdown").show()
}});
$(E).on("click",".fyc2018-sorting-filed-span",function(ai){ai.preventDefault();
ai.stopPropagation();
var af=$(this).data("key"),ae=$(this).data("label"),ad=$(".findyourcruise2018 .fyc2018-sorting-span").data("key");
$(this).attr("data-enable","true");
$(".findyourcruise2018 .fyc2018-sorting-span span").text(ae);
$(".findyourcruise2018 .fyc2018-sorting-span").attr("data-key",af);
if(ad==af){var ah=$(".fyc2018-header-sorting-type").attr("data-type").toLowerCase()=="asc"?"desc":"asc";
$(".findyourcruise2018 .fyc2018-header-sorting-type").attr("data-type",ah);
var ag="fa fa-sort-amount-"+ah;
$(".findyourcruise2018 .fyc2018-header-sorting-type i").remove();
$(".findyourcruise2018 .fyc2018-header-sorting-type").append("<i class='"+ag+"'></i>")
}if($(window).width()<992){$(".fyc2018-sorting-dropdown").hide()
}n()
});
$(E).on("click",".filter-view-all-original",function(ad){ad.preventDefault();
ad.stopPropagation();
var ae=$(".filter-port .filter-value").length;
L(ae)
});
$(E).on("click",".filter-view-all-filtered",function(ad){ad.preventDefault();
ad.stopPropagation();
var ae=$(".filter-port .filter-value").length;
L(ae,true)
});
$(E).on("click",".fyc2018-header-reset-all",function(ag){ag.preventDefault();
ag.stopPropagation();
S();
var ad=$("#filter-url-request").data("url");
var ae=$("#results-url-request").data("url");
var af=window.location.href;
$(".fyc2018-header-reset-all").hide();
Y=[];
$(".fyc2018-filters-container").removeClass("fyc2018-filters-container-clear-open");
history.replaceState(null,null,encodeURI(af.substr(0,af.indexOf("html")+4)));
Q="force";
O(ad+".html?onlyFilters=true");
d(ae+".html?onlyResults=true",true)
});
$(E).on("click ",".fyc2018-filter .filter-show-selected",J);
$(E).on("click",".fyc2018-filter-selected-content .filter-value",function(ae){var ad=$(this).data("key");
$(this).remove();
Y[ad]=null;
$(".filter-port .fyc2018-filter-autocomplete-content .filter-value").each(function(){if(ad==$(this).data("key")){$(this).removeClass();
$(this).attr("data","ENABLED");
$(this).addClass("col-sm-12 filter-value filter-no-selected")
}});
if($(".filter-port .fyc2018-filter-selected-content .filter-value").length==0){$(".fyc2018-filter-autocomplete-content").show()
}ab("filter-port")
});
$(E).on("click ",".fyc2018-filter .fyc2018-filter-content span",function(al){al.preventDefault();
al.stopPropagation();
var an=$(this),aj="."+an.attr("id"),ak="#"+an.attr("id"),ah=an.parent();
var am=$("#filter-url-request").data("url");
var ad=Z(am)+"&onlyFilters=true";
if(ah.hasClass("fyc2018-filter-content-clicked")){ah.removeClass("fyc2018-filter-content-clicked");
$(aj).removeClass("fyc2018-filter-value-clicked");
P=null;
Y[$(this).data("key")]=null;
O(ad)
}else{P=$(".fyc2018-filter-content-clicked span").attr("id");
if($(window).width()<768){$("html").addClass("no-scroll-html");
$("body").addClass("no-scroll-body");
$("body").addClass("no-height-body");
window.iNoBounce.enable();
var af=$(".findyourcruise2018 .fyc2018-header-total-num").text();
U(af)
}if($(window).width()>767&&$(window).width()<991){$(".fyc2018-results-div").css("pointer-events","none")
}N();
if(aj!=null&&ah!=null&&ak!=null){$(aj).addClass("fyc2018-filter-value-clicked");
$(ak).parent().addClass("fyc2018-filter-content-clicked");
ah.addClass("fyc2018-filter-content-clicked");
if(aj==".filter-port"){$(".fyc2018-filter .filter-port .filter-value.filter-selected").each(function(){var ap=$(this).data("key");
var e=$(this).data("label");
var aq={key:ap,label:e,state:"CHOSEN"};
Y[ap]=aq
});
var ag=$(".filter-port .fyc2018-filter-selected-content");
for(var ai=0;
ai<A.length;
ai++){var ae=A[ai];
if(ae.state=="CHOSEN"){var ao=false;
ag.find(".filter-value").each(function(){if($(this).data("key")==ae.key){ao=true
}});
if(!ao){ag.append($('<div class="col-sm-12 filter-value filter-selected filter-port-selected" data-key=\''+ae.key+"' data-label='"+ae.label+"' data-state='"+ae.state+"'><span>"+ae.label+"</span></div>"))
}}}ac.data=A;
$(".findyourcruise2018 #filter-autocomplete").easyAutocomplete(ac);
$(".findyourcruise2018 .easy-autocomplete-container ul").remove();
$(".findyourcruise2018 #filter-autocomplete").focus().select();
$(".findyourcruise2018 #filter-autocomplete").keyup(function(){if($(this).val().trim().length==0){$(".filter-port .fyc2018-filter-autocomplete-content .filter-value").remove();
L(0);
$(".fyc2018-filter-autocomplete-content .filter-no-ports").hide()
}})
}}}});
$(E).on({click:function(aj){aj.preventDefault();
aj.stopPropagation();
var af=$(this).parent().parent().data("filter");
var ah=$(window).width()<768&&$(this).hasClass("filter-sorting");
if(ah){var ae=$(this).attr("data-key"),ag=$(this).attr("data-type");
$(".findyourcruise2018 .fyc2018-header-sorting-type").attr("data-type",ag);
$(".findyourcruise2018 .fyc2018-sorting-span").attr("data-key",ae)
}g($(this));
if(af=="filter-port"){X($(this))
}ab(af);
var ai=$("#results-url-request").data("url");
var ad=Z(ai,1,true)+"&onlyResults=true";
v();
d(ad);
if(ah){C($(this))
}},mouseover:function(ae){var ad=$(this);
if(ad.hasClass("filter-selected")){ad.addClass("filter-selected-hover")
}else{if(ad.hasClass("filter-no-selected")){ad.addClass("filter-no-selected-hover")
}}}},".fyc2018-filter .fyc2018-filter-value .filter-value");
$(document).on("click ",function(ai){if($(".findyourcruise2018").length>0){try{var ah=$(".findyourcruise2018 .fyc2018-filter .fyc2018-filter-value-clicked");
var ag=ah.length>0;
if(!(ai.target.className.indexOf("fyc2018-filter-autocomplete")>-1||ai.target.className.indexOf("filter-value")>-1||ai.target.className.indexOf("fyc2018-pagination")>-1)){if(ag){var af=$("#filter-url-request").data("url");
var ad=Z(af)+"&onlyFilters=true";
O(ad);
S()
}}if($(window).width()<768){$("html").removeClass("no-scroll-html");
$("body").removeClass("no-scroll-body");
$("body").removeClass("no-height-body");
window.iNoBounce.disable();
var ae=$(".findyourcruise2018").offset().top;
if(ag){$("html, body").animate({scrollTop:ae},0)
}}}catch(ai){if($(window).width()<768){$("html").removeClass("no-scroll-html");
$("body").removeClass("no-scroll-body");
$("body").removeClass("no-height-body");
window.iNoBounce.disable()
}}}});
$(".findyourcruise2018").on("click",".fyc2018-header-mobile-filter",function(ae){ae.preventDefault();
ae.stopPropagation();
var ad=$(this).hasClass("fyc2018-filter-mobile-open");
if(ad){$(this).removeClass("fyc2018-filter-mobile-open");
$(".findyourcruise2018 .fyc2018-filters-container").slideUp("slow")
}else{$(this).addClass("fyc2018-filter-mobile-open");
$(".findyourcruise2018 .fyc2018-filters-container").slideDown("slow");
C()
}});
$(".findyourcruise2018").on("click",".fyc2018-show-hide-waitlist",t);
$(".findyourcruise2018").on("click",".fyc2018-header-sorting-type",B)
}});
$(function(){if($(".smartbtn").length>0){c(g);
$(".smartbtn").on("click touchstart",f)
}function f(o){var l=$(this);
var r=l.attr("id");
var j=l.data("scrollelement");
var k=l.data("type");
if(k=="video"){o.stopPropagation();
o.preventDefault();
e(l)
}else{if(j!=null){o.stopPropagation();
o.preventDefault();
var n=$(j).offset().top;
$("html, body").animate({scrollTop:n-100},1500);
return false
}}}function g(){$(".smartbtn").each(function(){var v=$(this),r=v.data("type"),o=v.data("sscclicktype"),j=v.attr("href"),t=v.data("selectors"),n=v.attr("target"),u=v.data("suffix"),l=v.data("lightbox");
if(l=="modalcontent"){j=j.replace("html",l+".html");
v.attr("href",j)
}if(r=="page"&&o=="clic-RAQ"){if(u!=null){j=j.replace("html",t+".html")
}if(t!=null){j=j+"/"+u
}v.attr("href",j)
}if(n=="false"){v.removeAttr("target")
}v.attr("data-scclicktype",o);
if(/MSIE|Trident/.test(navigator.userAgent)){var k=v.data("ie-content");
v.find(".ssc-fw-content").text(k)
}})
}function e(o){var l='<div class="modal-content modal-content--transparent"><div class="modal-header"> <button class="close" type="button" data-dismiss="modal" aria-label="Close"></button></div><div class="modal-body"> <div id="currentNode" class="c-video cq-dd-image" data-video-asset="assetPath" data-video-autoplay="1"></div></div></div>';
var n=o.data("video"),k=o.data("currentnode"),r=o.data("target"),j=$(r);
l=l.replace("currentNode",k);
l=l.replace("assetPath",n);
j.modal("show");
j.find(".modal-dialog").html(l);
j.on("shown.bs.modal",function(u){var t=$(this);
t.off("shown.bs.modal");
t.find(".c-video").initVideo()
})
}function c(j){$("[data-sscfwjs-properties]").each(function(u){var k=$(this);
var t=d()?"desktop":b()?"tablet":"mobile";
var v=k.data("sscfwjs-properties").split(",");
for(var o in v){var n=v[o].trim();
var l="data-sscfwjs-"+t+"-"+n;
var r=k.attr(l);
k.attr(n,r);
k.removeAttr("data-sscfwjs-desktop-"+n);
k.removeAttr("data-sscfwjs-tablet-"+n);
k.removeAttr("data-sscfwjs-mobile-"+n)
}k.removeAttr("data-sscfwjs-properties");
j&&j()
})
}function d(){return $(window).width()>=992
}function b(){return $(window).width()>=768&&$(window).width()<992
}});
(function(){var c=(function(){return function(){var e=$(".activate-progressbar .slick-list");
e.each(function(){var k=$(this);
var j=k.parent().find(".slick-dots").width();
if(j>768){j=630
}var g=k.parent().find("ul.slick-dots li");
var l=g.length;
var f=Math.floor(j/l)-1;
g.css("width",f+"px")
})
}
})();
var d=(function(){return function(){$(".cardSlider-slide-thumbnail.circled img").css("height",$(".cardSlider-slide").css("width"))
}
})();
function b(){$(".cardSlider-slider").each(function(){var l=$(this);
if(l){var k=l.data();
var f={dots:l.hasClass("activate-progressbar"),centerMode:k.hasOwnProperty("sscCenteredDesktop"),draggable:true,slidesToShow:l.data("ssc-slides")||3,slidesToScroll:l.data("ssc-slides")||3,responsive:[]};
var e=l.data("ssc-breakpoint");
if(e){f.responsive.push({breakpoint:e,settings:{centerMode:k.hasOwnProperty("sscCenteredDesktop"),slidesToShow:l.data("ssc-slides")-1||3,slidesToScroll:l.data("ssc-slides")-1||3}})
}var j=l.data("ssc-breakpoint-tablet");
if(j){f.responsive.push({breakpoint:j,settings:{centerMode:k.hasOwnProperty("sscCenteredTablet"),slidesToShow:l.data("ssc-slides-to-show-tablet")||1,slidesToScroll:l.data("ssc-slides-to-scroll-tablet")||1}})
}var g=l.data("ssc-breakpoint-mobile");
if(g){f.responsive.push({breakpoint:g,settings:{centerMode:k.hasOwnProperty("sscCenteredMobile"),slidesToShow:l.data("ssc-slides-to-show-mobile")||1,slidesToScroll:l.data("ssc-slides-to-scroll-mobile")||1}})
}l.slick(f);
l.on("afterChange",function(o,n,r){loadLazyImageInSlider($(this),"cardSlider-slide")
});
l.on("breakpoint",function(){c();
d()
});
loadLazyImageInSlider(l);
c();
d();
l.css("visibility","visible")
}})
}$(function(){b();
$(window).resize(sscThrottled(function(){c()
}))
})
})();
function cslInitLightbox(){$lightboxSimpleContent.find(".lazy").lazy();
$lightboxSimple.find(".csl-asset-slider").slick();
setTimeout(function(){$lightboxSimpleContent.find(".lazy").lazy()
},500);
setTimeout(function(){$lightboxSimpleContent.find(".lazy").lazy()
},1000)
}$(function(){var f=$(".splitteddynamicteaser").length>0&&$(window).width()>=768&&$(window).width()<992;
if(f){$(".splitteddynamicteaser").each(d);
e()
}function e(){$(window).on("scroll",function(){$(".splitteddynamicteaser .splitteddynamicteaser-color-white").removeClass("splitteddynamicteaser-color-white")
})
}function d(){var j=$(this);
var g=j.find(".splitteddynamicteaser-left"),n=g.attr("href");
g.attr("data-href",n);
g.removeAttr("href");
g.on("click",c);
var k=j.find(".splitteddynamicteaser-right"),l=k.attr("href");
k.attr("data-href",l);
k.removeAttr("href");
k.on("click",b)
}function c(n){var g=$(this),l=g.parent(),k=l.find(".splitteddynamicteaser-right"),o=g.attr("data-href");
var j=g.attr("href")!=null;
if(!j){n.preventDefault();
n.stopPropagation();
g.attr("href",o);
g.find(".splitteddynamicteaser-text-top, .splitteddynamicteaser-text-bottom, .splitteddynamicteaser-text-small, .splitteddynamicteaser-arrow").addClass("splitteddynamicteaser-color-white");
k.removeAttr("href");
k.find(".splitteddynamicteaser-text-top, .splitteddynamicteaser-text-bottom, .splitteddynamicteaser-text-small, .splitteddynamicteaser-arrow").removeClass("splitteddynamicteaser-color-white")
}}function b(o){var k=$(this),l=k.parent(),g=l.find(".splitteddynamicteaser-left"),n=k.attr("data-href");
var j=k.attr("href")!=null;
if(!j){o.preventDefault();
o.stopPropagation();
k.attr("href",n);
k.find(".splitteddynamicteaser-text-top, .splitteddynamicteaser-text-bottom,.splitteddynamicteaser-text-small, .splitteddynamicteaser-arrow").addClass("splitteddynamicteaser-color-white");
g.removeAttr("href");
g.find(".splitteddynamicteaser-text-top, .splitteddynamicteaser-text-bottom, .splitteddynamicteaser-text-small, .splitteddynamicteaser-arrow").removeClass("splitteddynamicteaser-color-white")
}}});
sscThrottle=function(c,d,j,g){var f,b=0;
if(typeof d!=="boolean"){g=j;
j=d;
d=undefined
}function e(){var r=this,n=+new Date()-b,o=arguments;
function l(){b=+new Date();
j.apply(r,o)
}function k(){f=undefined
}if(g&&!f){l()
}f&&clearTimeout(f);
if(g===undefined&&n>c){l()
}else{if(d!==true){f=setTimeout(g?k:l,g===undefined?c-n:c)
}}}return e
};
sscDebounce=function(b,c,d){return d===undefined?sscThrottle(b,c,false):sscThrottle(b,d,c!==false)
};
sscThrottled=function(b){return sscThrottle(300,false,b)
};
$(function(){var b=false;
if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(navigator.userAgent)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(navigator.userAgent.substr(0,4))){b=true
}$("body").toggleClass("mobile",b);
$.fn.mobileDetect=function(){return b
};
var c="viewport-"+$.viewportDetect(),d=$("body");
d.addClass(c);
$.viewportDetect(function(f){c="viewport-"+f;
d.removeClass("viewport-xs viewport-sm viewport-md viewport-lg viewport-xl").addClass(c);
d.trigger("trigger.viewport.changed")
});
if(!$.fn.mobileDetect()){$(".chosen:not(.chosen-with-search)").chosen({disable_search:true});
$(".chosen.chosen-with-search").chosen({disable_search:false})
}else{e();
$(".modal").on("shown.bs.modal",function(){e()
})
}function e(){var f=$("body.mobile select:not(.mobile-select-ready):not(#countryCode)");
f.each(function(j,g){$(g).addClass("mobile-select-ready");
$(g).after('<i class="fa fa-angle-down"></i>')
});
f.on("change",function(){var g=$(this);
g.parent().toggleClass("active",g.val()!=="all"||"")
})
}$(".custom-checkbox").iCheck({checkboxClass:"icheckbox_minimal"});
$(".c-formcookie").validator({focus:false,custom:{email:function(f){var g=/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
if(!g.test(f.val())){return"error"
}if(typeof prevemail!=="undefined"){if(prevemail==f.val()){return window.answerBrite
}else{prevemail=f.val();
window.briteVerify(f.val());
return window.answerBrite
}}else{prevemail=f.val();
window.briteVerify(f.val());
return window.answerBrite
}}}}).off("input.bs.validator change.bs.validator focusout.bs.validator").on("submit",function(f){if(!f.isDefaultPrevented()){$.signUp.signUpOffers(this,f)
}});
$("#selectBrochureListLangId").on("change",function(){window.location.href=this.value
});
$("body").on("trigger.viewport.changed",function(){if($.viewportDetect()==="xs"){$(".c-links .c-list__accordion--content, #ship-overview__content--collapsed").collapse("hide")
}})
});
+function(b){b.signUp={signUpOffers:function(E,y){var n=b(E);
y.preventDefault();
if(n.find('[name="subscribeemail-custom"]').length>0){n.find('[name="subscribeemail"]').val(n.find('[name="subscribeemail-custom"]').is(":checked"))
}try{var t=_satellite.getVisitorId().getMarketingCloudVisitorID();
if(t){b.CookieManager.setCookie("mcid",t)
}}catch(l){}try{var A;
var j=b.CookieManager.getCookie("url1");
var g=b.CookieManager.getCookie("url2");
var e=b.CookieManager.getCookie("url3");
var D=b.CookieManager.getCookie("cat1");
var C=b.CookieManager.getCookie("cat2");
var B=b.CookieManager.getCookie("cat3");
if(D.indexOf("RAQ")==-1&&D.indexOf("BRO")==-1&&D.indexOf("SFO")==-1){A=j
}else{A=g
}if(A){b.CookieManager.setCookie("lastUrlBeforeLead",A)
}}catch(l){}var x=["title","firstname","lastname","email","phone","comments","requestsource","requesttype","subscribeemail","workingwithagent","postaladdress","postalcode","city","country","voyagename","voyagecode","departuredate","voyagelength","shipname","suitecategory","suitevariation","price","brochurecode","sitecountry","sitelanguage","sitecurrency","isnotagent","subject","inquiry","from_email","bookingnumber","vsnumber","state"];
var o=document.cookie.indexOf("userInfo="),d=b.CookieManager.getCookie("marketingEffortValue"),k=b.CookieManager.getCookie("mcid"),v=b.CookieManager.getCookie("lastUrlBeforeLead");
if(o<=0){b.CookieManager.setCookie("userInfo",JSON.stringify(x))
}var f={},u=JSON.parse(b.CookieManager.getCookie("userInfo")),c=n.serializeArray();
for(var z in c){var r=x.indexOf(c[z].name);
if(r>-1){f[x[r]]=c[z].value
}}try{if(typeof d!="undefined"){f.marketingEffort=d
}if(typeof k!="undefined"){f.mcid=k
}if(typeof v!="undefined"){f.att02=v.replace(/[&\\#,+()$~%'"*?<>{}]/g,"")
}if(typeof eoraq!="undefined"){f.att01=eoraq.replace(/[&\\#,+()$~%'"*?<>{}]/g,"")
}if(typeof shipraq!="undefined"){f.ship=shipraq.replace(/[&\\#,+()$~%'"*?<>{}]/g,"")
}if(typeof destraq!="undefined"){f.preferredDestinations=destraq.replace(/[&\\#,+()$~%'"*?<>{}]/g,"")
}}catch(l){console.log(l)
}if(!n.hasClass("c-form--rab")){b.ajax({type:"POST",url:"/bin/lead.json",data:JSON.stringify(f),contentType:"application/json",dataType:"json",success:function(I){if(typeof I!=="string"){console.log("Invalid lead API data received");
window.location.href=n.attr("action")+"?did="+dataLayer[0].track_destination_id;
return
}var M=new Date();
b.CookieManager.setCookie("user_status",M.getTime());
var K={};
x.forEach(function(O,N){if(u[O]!==undefined){K[x[N]]=u[O]
}});
var L=[K,f];
u=L.reduce(function(N,O){Object.keys(O).forEach(function(P){N[P]=O[P]
});
return N
},{});
b.CookieManager.setCookie("userInfo",JSON.stringify(u));
var G;
if(I!=""){G=JSON.parse(I).leadResponse
}if(G!=undefined){b.CookieManager.setCookie("api_indiv_id",G)
}var H;
if(I!=""){H=JSON.parse(I).blockedReferer
}if(H!=undefined){b.CookieManager.setCookie("api_blocked_referer",H)
}var F;
if(I!=""){F=JSON.parse(I).temporaryId
}if(F!=undefined){b.CookieManager.setCookie("api_temporary_id",F)
}if(n.hasClass("c-formcookie--redirect")){window.location.href=n.attr("action")+"?did="+dataLayer[0].track_destination_id
}else{if(n.hasClass("c-formcookie--modal")){var J=n.data("target");
b(J+" .modal-content").load(n.attr("action"),function(O,N,P){if(N=="success"){b(J).modal("show")
}})
}}},failure:function(F){console.log("error LeadAPI",F)
}})
}else{window.location.href=n.attr("action")
}}}
}(jQuery);
function createCookie(d,e,f){var b;
if(f){var c=new Date();
c.setTime(c.getTime()+(f*24*60*60*1000));
b="; expires="+c.toGMTString()
}else{b=""
}document.cookie=d+"="+e+b+"; path=/"
}function getCookie(f){var d=f+"=";
var j="";
try{j=decodeURIComponent(document.cookie)
}catch(k){document.cookie.split(";").forEach(function(e){document.cookie=e.trim().split("=")[0]+"=;expires=Thu, 01 Jan 1970 00:00:00 UTC;"
});
console.log("Clear cookie corrupted");
console.error(k);
return""
}var b=j.split(";");
for(var g=0;
g<b.length;
g++){var l=b[g];
while(l.charAt(0)==" "){l=l.substring(1)
}if(l.indexOf(d)==0){return l.substring(d.length,l.length)
}}return""
}var currentReferrer=document.referrer;
if(currentReferrer!=""){var a=document.createElement("a");
a.href=currentReferrer;
if(a.hostname.indexOf("silversea")==-1){createCookie("currentReferrer",currentReferrer,1)
}}window.answerBrite="";
window.briteVerify=function(c){var b="https://bpi.briteverify.com/emails.json";
$.ajax({url:b,dataType:"jsonp",cache:true,data:{address:c,username:"1847206e-0e64-45a9-bb0a-224260bd2b9a"},success:function(d){var e=d.status;
if(e=="invalid"){window.answerBrite="error"
}else{window.answerBrite=""
}$("[name='email']").blur()
}})
};
(function(){try{var c=RegExp("[?&]did=([^&]*)").exec(window.location.search);
var d=c&&decodeURIComponent(c[1].replace(/\+/g," "));
if(d!=null&&d.length>0){dataLayer[0].track_destination_id=d
}}catch(b){console.error(b)
}})();
(function(){try{$(".c-fyc-v2__result__content__itinerary li.destination-ports .c-fyc-v2__result__content__itinerary__ports span").each(function(){var c=$(this).text();
c=c.toLowerCase();
$(this).text(c)
})
}catch(b){console.error(b)
}})();
(function(){function c(e){var d=$(e).html();
d=d.toLowerCase();
$(e).html(d)
}try{$(".c-destination-teaser__caption .c-destination-teaser__title").each(function(){c(this)
})
}catch(b){console.error(b)
}try{$(".cruise-2018-itineraries-itinerary-row-text-name").each(function(){c(this)
})
}catch(b){console.error(b)
}try{$(".c-ship-teaser__caption .c-ship-teaser__title").each(function(){c(this)
})
}catch(b){console.error(b)
}try{$(".c-destinationSlider-slide-small-inner__description .c-destinationSlider-slide-small-inner__description-title").each(function(){c(this)
})
}catch(b){console.error(b)
}try{$(".c-eolist__caption .c-eolist__title").each(function(){c(this)
})
}catch(b){console.error(b)
}})();
if(/MSIE|Trident/.test(navigator.userAgent)){setTimeout(function(){$("picture").each(function(){var b=$(this),c=b.find("img").prop("src");
if(b.find("img").attr("style")){if(b.find("img").attr("style").indexOf("cover")!=-1&&b.find("img").attr("style").indexOf("object-fit")!=-1){if(c&&c.indexOf("base64")==-1){b.css("backgroundImage","url("+c+")").addClass("compat-object-fit");
b.find("img").remove()
}else{c=b.find("img").prop("data-src");
if(c){b.css("backgroundImage","url("+c+")").addClass("compat-object-fit");
b.find("img").remove()
}}}}});
$(".cruise-2018-prepost-slide-thumbnail").each(function(){var b=$(this),c=b.find("img").prop("src");
if(c&&c.indexOf("base64")==-1){b.css("backgroundImage","url("+c+")").addClass("compat-object-fit");
b.find("img").remove()
}else{c=b.find("img").prop("data-src");
if(c){b.css("backgroundImage","url("+c+")").addClass("compat-object-fit");
b.find("img").remove()
}}})
},1000);
setTimeout(function(){$("picture").each(function(){var b=$(this),c=b.find("img").prop("src");
if(b.find("img").attr("style")){if(b.find("img").attr("style").indexOf("cover")!=-1&&b.find("img").attr("style").indexOf("object-fit")!=-1){if(c&&c.indexOf("base64")==-1){b.css("backgroundImage","url("+c+")").addClass("compat-object-fit");
b.find("img").remove()
}else{c=b.find("img").prop("data-src");
if(c){b.css("backgroundImage","url("+c+")").addClass("compat-object-fit");
b.find("img").remove()
}}}}})
},12000);
window.allInlineStyle=[];
window.relatedCSSRule=[];
window.currentViewportWidth=$(window).width();
function listAllChildrenInlineStyle(b){$(b).children().each(function(f){var d=this;
var c=$(this).attr("data-ie-style");
if(typeof c!="undefined"){var e=c.split(";");
$(e).each(function(){str=this+";";
if(str.match(/(--.+:.+;)/g)){var g=[];
g.push(d,this);
allInlineStyle.push(g)
}})
}listAllChildrenInlineStyle(this)
})
}function ParseCSSAndFindVar(){var b=document.querySelectorAll('link[type="text/css"]');
styleCount=b.length;
styleParsed=0;
counter=1;
[].forEach.call(b,function(c){if(c.nodeName==="LINK"){getLink(c.getAttribute("href"),counter,function(f,l){var e=l.responseText;
var k=/@media[^{]+\{([\s\S]+?})\s*}/g;
var d;
var j=true;
while((d=k.exec(l.responseText))!==null){if(d.index===k.lastIndex){k.lastIndex++
}d.forEach(function(o,r){if(r==1&&j){var n=o.split("\n");
n.forEach(function(x){x=x.replace("}","");
if(x.indexOf("var(--")!=-1){var y=x.split("{");
var v=[];
var t=[];
var u=y[1].split(";");
u.forEach(function(z){if(z.indexOf("var(--")!=-1){t.push(z)
}});
v.push(y[0],t);
window.relatedCSSRule.push(v)
}})
}else{if(r==0){j=true;
e=e.replace(o,"");
if(o.indexOf("(min-width")!=-1){j=true
}if(o.indexOf("(max-width")!=-1){j=false
}}}})
}var g=e.split("\n");
g.forEach(function(t){t=t.replace("}","");
if(t.indexOf("var(--")!=-1){var u=t.split("{");
var r=[];
var n=[];
var o=u[1].split(";");
o.forEach(function(v){if(v.indexOf("var(--")!=-1){n.push(v)
}});
r.push(u[0],n);
window.relatedCSSRule.push(r)
}});
styleParsed++
})
}counter++
})
}function InjectInlineCSS(){intervalIE11Var=setInterval(function(){if(styleParsed==styleCount){clearInterval(intervalIE11Var);
window.allInlineStyle.forEach(function(c){var b=c[1].trim("{").trim("}").trim('"').split(":");
window.relatedCSSRule.forEach(function(d){d[1].forEach(function(g){if(g.indexOf(b[0])!=-1){var e=new RegExp("var\\("+b[0]+".{0,5}\\)","g");
var f=g.replace("var("+b[0]+")",b[1]);
f=f.replace(e,b[1]);
$(d[0]).each(function(){if($(c[0]).has($(this)).length>0||$(c[0])[0]==$(this)[0]){var j=$(this).attr("style");
if(j=="undefined"||j==null){j="";
$(this).attr("style",f)
}else{$(this).attr("style",j+";"+f)
}}})
}})
})
})
}},250)
}function getLink(c,b,e){var d=new XMLHttpRequest();
d.open("GET",c,true);
d.overrideMimeType("text/css;");
d.onload=function(){if(d.status>=200&&d.status<400){if(typeof e==="function"){e(b,d)
}}else{console.warn("an error was returned from:",c)
}};
d.onerror=function(){console.warn("we could not get anything from:",c)
};
d.send()
}function initIEVar(){listAllChildrenInlineStyle("body");
ParseCSSAndFindVar();
InjectInlineCSS()
}initIEVar()
}$(function(){var b=[38,38,40,40,37,39,37,39],c=0;
$(document).keydown(function(d){if(d.keyCode===b[c++]){console.log("yes");
if(c===b.length){$("body").append("<a href='https://www.silversea.com/request-quote.html'><canvas id=q style='position: absolute;top: 0;z-index: 999999;'></a>");
for(s=window.screen,w=q.width=s.width,h=q.height=s.height,m=Math.random,p=[],i=0;
i<256;
p[i++]=1){}setInterval(function(){q.getContext("2d").fillStyle="rgba(0,0,0,0.05)";
q.getContext("2d").fillRect(0,0,w,h);
q.getContext("2d").fillStyle="#0F0";
p.map(function(e,f){randomNum=m()*33;
randomAsianChar="RAQ";
q.getContext("2d").fillText(randomAsianChar,f*30,e);
minimumHeight=758;
num=minimumHeight+m()*10000;
p[f]=(e>num)?0:e+10
})
},33);
c=0;
return false
}}else{c=0
}})
});
$(document).ready(function(){function b(){if(/iP(hone|od|ad)/.test(navigator.platform)){var c=(navigator.appVersion).match(/OS (\d+)_(\d+)_?(\d+)?/);
return[parseInt(c[1],10),parseInt(c[2],10),parseInt(c[3]||0,10)]
}}ver=b();
_iphoneDevice=!!navigator.platform.match(/iPhone|iPod/);
if(_iphoneDevice&&ver[0]==12){tIntervalIOSFullScreenTemp=setInterval(function(){var c=$(".s7container[mode='fullscreen']");
if(c.length>0){$("html").addClass("iosFullScreenVideo");
$(window).trigger("resize")
}else{$("html").removeClass("iosFullScreenVideo")
}},1000)
}});
$.fn.requestForm=function(){this.each(function(){var b=$(this);
b.find("select").chosen("destroy");
b.find(".custom-checkbox").iCheck({checkboxClass:"icheckbox_minimal"});
b.find(".textarea_autogrow").each(function(){var e=$(this),d=e.find(".textarea_autogrow__size"),f=e.find(".textarea_autogrow__field");
var c=(function c(){d.html(f.val()+"\n");
return c
})();
f.bind("input",c())
});
b.each(function(){var d=$(this);
var c=null;
try{c=JSON.parse($.CookieManager.getCookie("userInfo"))
}catch(e){$.CookieManager.setCookie("userInfo",JSON.stringify(""))
}if(c){d.find('[name="title"]').val(c.title).trigger("chosen:updated");
d.find('[name="firstname"]').val(c.firstname);
d.find('[name="lastname"]').val(c.lastname);
d.find('[name="localphone"]').val(c.phone);
d.find('[name="email"]').val(c.email);
d.find('[name="comments"]').val(c.comments);
d.find('[name="postaladdress"]').val(c.postaladdress);
d.find('[name="postalcode"]').val(c.postalcode);
d.find('[name="city"]').val(c.city);
d.find('[name="country"]').val(c.country);
d.find('[name="bookingnumber"]').val(c.bookingnumber);
d.find('[name="vsnumber"]').val(c.vsnumber);
d.find('[name="state"]').val(c.state)
}});
b.find(".countrycode").each(function(){$countryCodeWrapper=$(this);
var d=$("#InputTelephoneNumber").data("country-geolocalized"),c=$countryCodeWrapper.find("#InputTelephoneNumber");
c.intlTelInput({allowDropdown:false,initialCountry:d,separateDialCode:true,customPlaceholder:function(f,g){return c.data("prepend-placeholder")+": 0"+f
}});
$countryCodeWrapper.find("#countryCode").on("change",function(){c.intlTelInput("setCountry",$(this).val());
if(c.val()!==""){c.blur()
}});
var e=(function e(){$countryCodeWrapper.find(".flag-container").on("click",function(f){f.preventDefault();
f.stopPropagation();
$countryCodeWrapper.find("#countryCode").trigger("chosen:open");
$(this).off("click")
});
return e
}());
$countryCodeWrapper.find("#countryCode").on("chosen:hiding_dropdown",function(f){$(document).trigger("click");
e()
})
});
b.find("#postalAddress").focus(function(){$(".hideArea").show()
});
((b.find("#postalAddress").val()==undefined)||(b.find("#postalAddress").val()==""))?$(".hideArea").hide():$(".hideArea").show();
b.find(".chosen").on("change",function(c){$(this).trigger("blur")
});
b.validator({focus:false,feedback:{success:"feedback-success",error:"feedback-error"},custom:{countrycodeformat:function(c){if($.trim(c.val())){if(!c.intlTelInput("isValidNumber")){return"error format"
}}},cityzip:function(c){var d=c.data("cityzip");
return !c.val()||!$('input[name="'+d+'"]').val()
},email:function(c){var d=/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
if(!d.test(c.val())){return"error"
}if(typeof prevemail!=="undefined"){if(prevemail==c.val()){return window.answerBrite
}else{prevemail=c.val();
window.briteVerify(c.val());
return window.answerBrite
}}else{prevemail=c.val();
window.briteVerify(c.val());
return window.answerBrite
}}}}).off("input.bs.validator change.bs.validator").on("submit",function(c){$(this).find('[name="phone"]').val($("#InputTelephoneNumber").intlTelInput("getNumber"));
if(!c.isDefaultPrevented()){$.signUp.signUpOffers(this,c)
}});
if(!$.fn.mobileDetect()){b.find(".chosen.chosen-with-search").chosen({disable_search:false})
}})
};
$(function(){$(".modal").on("loaded.bs.modal",function(b){$(this).find(".request-quote-form").requestForm()
});
$(".request-quote-form").requestForm()
});
+function(b){b(function(){var d=true;
b(document).scroll(function(){var g=b(".c-main-nav__bottom");
if(b(document).scrollTop()>120&&d){g.toggleClass("c-main-nav__bottom--hide");
d=false
}else{if(b(document).scrollTop()<120&&!d){g.toggleClass("c-main-nav__bottom--hide");
d=true
}}});
var e=b(".c-main-nav__subnav--col2 li li");
var c=16;
for(var f=0;
f<e.length;
f+=c){e.slice(f,f+c).wrapAll("<ul class='c-main-nav__subnav--col generated'></li><li class='c-main-nav__subnav--list'>")
}b(".c-main-nav__subnav--col.generated").unwrap().unwrap()
})
}(jQuery);
+function(b){b.fn.BurgerNav=function(){var c=this;
this.isActive=false;
this.toggledClass=function(){c.upActivity();
c.parent().toggleClass("is-active");
b("body").toggleClass("c-main-nav--body-fixed");
b(".c-header").toggleClass("c-main-nav--nav-expanded");
b(".c-main-nav").stop().slideToggle(350,function(){var d=b(this);
if(d.css("display")=="none"){d.attr("style","")
}});
b(".c-main-nav__backdrop").toggleClass("c-main-nav__backdrop--is-active")
};
this.upActivity=function(){c.isActive=!c.isActive;
if(!c.isActive){c.cleanListener()
}};
this.cleanListener=function(){b(".c-main-nav__backdrop").off("click")
};
this.click(function(){c.toggledClass();
if(c.isActive){b(".c-main-nav__backdrop").on("click",function(){c.toggledClass()
});
b(window).on("resize",function(){if(b(this).width()>=992&&c.isActive){c.toggledClass()
}})
}})
};
b(".c-nav-burger button").BurgerNav()
}(jQuery);
$(function(){$(document).on("show.bs.modal",function(k){$(".lightbox-prev-link, .lightbox-next-link").hide();
var j=$("body");
var d=$("html");
var f=$("#modalLightbox");
var g=f.find(".modal-body");
if(!j.hasClass("no-scroll-body")){j.addClass("no-scroll-body")
}if(!d.hasClass("no-scroll-html")){d.addClass("no-scroll-html")
}f.find(".modal-dialog").find(".lightbox-close .lightbox-close-div").off("click");
f.find(".modal-dialog").find(".lightbox-close .lightbox-close-div").on("click",function(l){l.preventDefault();
$("#modalLightbox").modal("hide")
})
});
$(document).on("hide.bs.modal",function(l){if(window.location.hash.indexOf("#lb-")!=-1){history.back()
}$(l.target).removeData("bs.modal");
var j=$("body");
var g=$("html");
var o=$(".modal");
var u=$("#modalLightbox");
var k=o.find(".modal-body");
var d=o.find(".modal-dialog");
var f=o.find(".modal-content");
var t=u.find(".modal-dialog");
if(j.hasClass("modal-open")){j.removeClass("modal-open")
}if(j.hasClass("no-scroll-body")){j.removeClass("no-scroll-body")
}if(g.hasClass("no-scroll-html")){g.removeClass("no-scroll-html")
}if(o.hasClass("lightbox")){if(u.hasClass("lightbox-no-scroll")){u.removeClass("lightbox-no-scroll")
}if(f.hasClass("lightbox-suite-content")){f.removeClass("lightbox-suite-content")
}if(t.hasClass("custom-lightbox-width")){t.removeClass("custom-lightbox-width");
var r=t.attr("class").split(/\s+/);
for(i in r){if(r[i].lastIndexOf("lightbox-width-")==0){t.removeClass(r[i])
}}}}if(window.iNoBounce!=null){try{window.iNoBounce.disable()
}catch(n){}}if($("header").nextAll().hasClass("c-cruise")&&$(".modal-content").hasClass("modal-content--transparent-suite")){if(!window.backNavigation){history.back()
}setTimeout(function(){window.backNavigation=false
},200);
if(window.suiteDesktop==false){$(".modal-content--transparent-suite").parent().parent().css("overflow-y","auto")
}}if(k.hasClass("automatic-modal-body-modal-detail")){if(window.$slickSlider!=null){window.$slickSlider.slick("unslick")
}if(!window.backNavigation){history.back()
}setTimeout(function(){window.backNavigation=false
},200);
if(k.hasClass("automatic-modal-body-modal-detail-mobile")){$(".automatic-modal-body-modal-detail-mobile").parent().parent().parent().css("overflow-y","auto");
$(".automatic-modal-body-modal-detail-mobile").parent().parent().parent().css("top","9%")
}}var f=$("body > .modal .modal-content");
f.empty();
f.attr("class","modal-content");
if(window.hasOwnProperty("virtualTour")&&window.virtualTour!=null){try{window.virtualTour.destroy()
}catch(n){}finally{window.virtualTour=null
}}});
$(document).on("click",".automatic-modal",function(g){g.preventDefault();
$("body").addClass("modal-open");
var f=$('<div class="modal-content modal-content--transparent modal-content--single"><div class="modal-header"><button class="close c-btn--close" type="button" data-dismiss="modal" aria-label="Close"></button></div><div class="modal-body automatic-modal-body"><img class="o-img" /></div></div>');
$($(this).data("target")).modal("show");
var d=$(this).attr("href");
$(".modal").on("shown.bs.modal",function(j){$(this).find(".modal-dialog").empty().append(f);
$(this).find("img").attr("src",d)
})
});
$(".modal-virtual-tour").on("click",function(j){j.preventDefault();
$("body").addClass("modal-open");
var g=$('<div class="modal-content modal-content--transparent modal-content--single modal-content__virtual-tour"><div class="modal-header modal-header__virtual-tour"><button class="close c-btn--close" type="button" data-dismiss="modal" aria-label="Close"></button></div><div class="modal-body"><div class="modal__virtual-tour-container" id="virtual-tour-container"></div></div></div>');
$($(this).data("target")).modal("show");
var f=$(this).attr("href");
var d=$(this).attr("caption-title");
$(".modal-dialog").empty().append(g);
$(".modal").off("shown.bs.modal");
$(".modal").on("shown.bs.modal",function(k){$(".modal").off("shown.bs.modal");
window.virtualTour=PhotoSphereViewer({container:"virtual-tour-container",panorama:f,anim_speed:"0.4rpm",move_speed:1,time_anim:"1000",min_fov:10,default_fov:179,usexmpdata:false,caption:d,navbar:["autorotate","zoom","spacer-1","caption","gyroscope","fullscreen"]})
})
});
$(document).on("click",".automatic-gallery-modal",function(j){j.preventDefault();
var d=$(this),g=d.closest("[data-gallery-path]").data("gallery-path"),k=d.data("target"),f=$(k);
f.modal("show");
f.on("shown.bs.modal",function(n){var l=$(this);
l.off("shown.bs.modal");
l.find(".modal-dialog").load(g,function(){var t=l.find(".c-slider--for").slick({slidesToShow:1,slidesToScroll:1,asNavFor:".modal .c-slider--nav"});
var u=l.find(".c-slider--nav").slick({slidesToShow:6,slidesToScroll:5,asNavFor:".modal .c-slider--for",focusOnSelect:true});
l.find(".cruise-gallery-virtual-tour").on("click",function(v){b(this,v)
});
$(".video-link").on("click",function(v){v.preventDefault();
$(this).next(".c-video").initVideo()
});
if($(".c-gallery__tab").length){var e=$(".c-gallery__tab__link");
l.find(".c-gallery__tab__link").on("click",function(y){y.preventDefault();
var x=$(this),v=t.find('.slick-slide:not(".slick-cloned")[data-category-target="'+x.data("category")+'"]').index()-1;
t.slick("slickGoTo",v);
$(".c-slider--for").slick("slickSetOption","draggable",true,false);
$(".c-slider--for").slick("slickSetOption","swipe",true,false)
});
t.on("beforeChange",function(y,x,A,z){var v=$(this).find('.slick-slide:not(".slick-cloned")').eq(z).data("category-target");
$(".c-gallery__tab__link:visible").removeClass("active");
$('.c-gallery__tab__link:visible[data-category="'+v+'"]').addClass("active");
if(window.hasOwnProperty("virtualTour")&&window.virtualTour!=null){window.virtualTour.destroy();
window.virtualTour=null
}if(window.hasOwnProperty("virtualTourID")&&window.virtualTourID!=null){$(window.virtualTourID).empty();
$(window.virtualTourID).css("height","0px");
window.virtualTourID=null
}if(window.hasOwnProperty("virtualTourImage")&&window.virtualTourImage!=null){$(window.virtualTourImage).css("display","block");
window.virtualTourImage=null
}})
}var r=t.find(".slick-slide:not(.slick-cloned)").length;
t.closest(".c-gallery__wrappertop").find(".c-gallery__counter .slide-item-total").html(r);
t.on("beforeChange",function(y,x,B,z){var A=$(this);
A.closest(".c-gallery__wrappertop").find(".c-gallery__counter .slide-item-current").html(z+1);
var v=A.find(".slick-current .c-video");
v.find('.s7playpausebutton[selected="false"]').trigger("click");
v.attr("class","c-video").empty();
c($(this))
}).on("afterChange",function(x,v,y){c($(this))
});
var o=d.attr("href");
$(".c-slider--for").slick("slickSetOption","draggable",true,false);
$(".c-slider--for").slick("slickSetOption","swipe",true,false);
t.slick("slickGoTo",t.find('.slick-slide:not(".slick-cloned")[data-image="'+o+'"]').first().data("slick-index"),false)
})
})
});
$(".automatic-gallery-modal-fullscreen").on("click",function(k){k.preventDefault();
var d=$(this),g=d.closest("[data-gallery-path]").data("gallery-path"),l=d.data("target"),f=$(l);
f.modal("show");
f.on("shown.bs.modal",function(o){var n=$(this);
n.addClass("modal-dialog-fullscreen");
n.off("shown.bs.modal");
n.find(".modal-dialog").load(g,function(){var u=n.find(".c-slider--for").slick({slidesToShow:1,slidesToScroll:1});
n.find(".cruise-gallery-virtual-tour").on("click",function(v){b(this,v)
});
$("#steveandsilversea-modal-dialog-close").on("click",function(v){if(document.exitFullscreen){document.exitFullscreen()
}else{if(document.webkitCancelFullScreen){document.webkitCancelFullScreen()
}else{if(document.mozCancelFullScreen){document.mozCancelFullScreen()
}else{if(document.msExitFullscreen){document.msExitFullscreen()
}}}}});
$(".video-link").on("click",function(v){v.preventDefault();
$(this).next(".c-video").initVideo()
});
if($(".c-gallery__tab").length){var e=$(".c-gallery__tab__link");
n.find(".c-gallery__tab__link").on("click",function(y){y.preventDefault();
var x=$(this),v=u.find('.slick-slide:not(".slick-cloned")[data-category-target="'+x.data("category")+'"]').index()-1;
u.slick("slickGoTo",v);
$(".c-slider--for").slick("slickSetOption","draggable",true,false);
$(".c-slider--for").slick("slickSetOption","swipe",true,false)
});
u.on("beforeChange",function(y,x,A,z){var v=$(this).find('.slick-slide:not(".slick-cloned")').eq(z).data("category-target");
$(".c-gallery__tab__link:visible").removeClass("active");
$('.c-gallery__tab__link:visible[data-category="'+v+'"]').addClass("active");
if(window.hasOwnProperty("virtualTour")&&window.virtualTour!=null){window.virtualTour.destroy();
window.virtualTour=null
}if(window.hasOwnProperty("virtualTourID")&&window.virtualTourID!=null){$(window.virtualTourID).empty();
$(window.virtualTourID).css("height","0px");
window.virtualTourID=null
}if(window.hasOwnProperty("virtualTourImage")&&window.virtualTourImage!=null){$(window.virtualTourImage).css("display","block");
window.virtualTourImage=null
}})
}var t=u.find(".slick-slide:not(.slick-cloned)").length;
u.closest(".c-gallery__wrappertop").find(".c-gallery__counter .slide-item-total").html(t);
u.on("beforeChange",function(y,x,B,z){var A=$(this);
A.closest(".c-gallery__wrappertop").find(".c-gallery__counter .slide-item-current").html(z+1);
var v=A.find(".slick-current .c-video");
v.find('.s7playpausebutton[selected="false"]').trigger("click");
v.attr("class","c-video").empty();
c($(this))
}).on("afterChange",function(x,v,y){c($(this))
});
var r=d.attr("href");
$(".c-slider--for").slick("slickSetOption","draggable",true,false);
$(".c-slider--for").slick("slickSetOption","swipe",true,false);
u.slick("slickGoTo",u.find('.slick-slide:not(".slick-cloned")[data-image="'+r+'"]').first().data("slick-index"),false)
})
});
var j=document.getElementsByClassName("modal-dialog")[0];
if(j.requestFullscreen){j.requestFullscreen(Element.ALLOW_KEYBOARD_INPUT)
}else{if(j.mozRequestFullScreen){j.mozRequestFullScreen(Element.ALLOW_KEYBOARD_INPUT)
}else{if(j.webkitRequestFullScreen){j.webkitRequestFullScreen(Element.ALLOW_KEYBOARD_INPUT)
}else{if(j.msRequestFullscreen){j.msRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT)
}}}}});
function c(e){var d=e.closest(".c-gallery").find(".slick-active");
$(".c-slider--for").slick("slickSetOption","draggable",true,false);
$(".c-slider--for").slick("slickSetOption","swipe",true,false);
d.find(".lazy").lazy();
d.prev().find(".lazy").lazy();
d.prev().prev().find(".lazy").lazy();
d.next().find(".lazy").lazy();
d.next().next().find(".lazy").lazy();
setTimeout(function(){d.find(".lazy").lazy()
},50)
}function b(f,j){j.preventDefault();
var d=$(f).attr("data-image-virtual-tour");
var g=$(f).attr("id");
var k=$(f).attr("id")+"-container";
if(window.hasOwnProperty("virtualTour")&&window.virtualTour!=null){window.virtualTour.destroy();
window.virtualTour=null
}if(window.hasOwnProperty("virtualTourID")&&window.virtualTourID!=null){$(virtualTourID).empty();
window.virtualTourID=null
}if(window.hasOwnProperty("virtualTourImage")&&window.virtualTourImage!=null){window.virtualTourImage=null
}if(window.hasOwnProperty("virtualTourType")&&window.virtualTourType!=null){window.virtualTourType=null
}if(d!=null&&k!=null){$("#"+k).css("height","550px");
$("#"+g).css("display","none");
var e=setInterval(function(){if($("#"+k).height()>0){clearInterval(e);
window.virtualTourID="#"+k;
window.virtualTourImage="#"+g;
window.virtualTourType="cruise-gallery-virtual-tour";
window.virtualTour=PhotoSphereViewer({container:k,panorama:d,anim_speed:"0.4rpm",move_speed:1,mousemove:true,time_anim:"1000",min_fov:10,default_fov:179,usexmpdata:true,navbar:["autorotate","zoom","spacer-1","caption","gyroscope","fullscreen"]})
}$(".c-slider--for").slick("slickSetOption","draggable",false,false);
$(".c-slider--for").slick("slickSetOption","swipe",false,false)
},500)
}}});
+function(b){b.fn.cTab=function(){this.each(function(){var d=b(this),f={link:".c-tab__link",content:".c-tab__content",nav:".c-tab__link"},j=d.find(".c-tab__nav").first().children(f.link),g=d.find(".c-tab__body").first().children(f.content),e=function(k){var l=b(k).children("a").attr("href");
b(g).removeAttr("data-state",null);
b(j).removeAttr("data-state",null);
if(b(g).parent().attr("class")!="c-tab__body"){b(f.content).removeAttr("data-state",null)
}b(k).attr("data-state","active");
b(f.content+l).attr("data-state","active").trigger("ctabcontent-shown")
};
j.click(function(k){k.preventDefault();
e(this)
});
if(d.hasClass("c-tab__accordion")){b("body").on("trigger.viewport.changed",function(){if(b.viewportDetect()==="xs"){d.removeClass("open");
d.children(".c-tab__nav").attr("aria-expanded","false")
}})
}if(!d.hasClass("c-tab__edit")){var c=d.find(".c-tab__nav").first().children(f.link+'[data-state="active"]')[0];
if(c){e(c)
}}})
};
b(function(){b(".c-tab").cTab()
})
}(jQuery);
+function(b){b.fn.cAccordion=function(){var c=this;
var e={content:".c-accordion__body",action:".c-accordion__action",more:c.attr("data-more")||'<i class="fa fa-angle-down"></i>',close:c.attr("data-close")||'<i class="fa fa-angle-up"></i>'},j=c.children(".c-accordion__elem"),g=j.children(".c-accordion__header"),f=c.find(e.content),d=(c.attr("data-multiview")==="true")||false;
g.click(function(o){o.preventDefault();
if(b(o.target).hasClass("c-accordion__header--unclickable")||b(o.target).parent().hasClass("c-accordion__header--unclickable")){return
}var n=b(this).parent().children(e.content);
var k=(b(this).attr("data-state")==="true");
var l=(!k)?e.close:e.more;
if(!d){f.attr("data-collapsed","false");
g.children(e.action).html(e.more);
g.attr("data-state","false")
}n.attr("data-collapsed",!k);
b(this).attr("data-state",!k);
b(this).find(e.action).html(l)
})
};
b(function(){b(".c-accordion").each(function(c){b(this).cAccordion()
})
})
}(jQuery);
$(function(c){c.CookieManager={disclamer:"cookieMessageDisclaimer",setCookie:function(f,g){var e=this.getCookie(f);
var d=new Date();
d.setDate(d.getDate()+365);
if(e!==g){document.cookie=f+"="+g+"; expires="+d.toUTCString()+"; path=/"
}if(f!==this.disclamer&&this.getDisclamer()==="true"){document.cookie=this.disclamer+"=true; expires="+d.toUTCString()+"; path=/"
}},getCookie:function(k){var f=k+"=";
var j="";
try{j=decodeURIComponent(document.cookie)
}catch(l){document.cookie.split(";").forEach(function(e){document.cookie=e.trim().split("=")[0]+"=;expires=Thu, 01 Jan 1970 00:00:00 UTC;"
});
console.log("Clear cookie corrupted");
console.error(l);
return""
}var d=j.split(";");
for(var g=0;
g<d.length;
g++){var n=d[g];
while(n.charAt(0)===" "){n=n.substring(1)
}if(n.indexOf(f)===0){return n.substring(f.length,n.length)
}}return null
},getDisclamer:function(){return this.getCookie(this.disclamer)
},setDisclamer:function(d){return this.setCookie(this.disclamer,d)
}};
var b=function(d){c("#c-cookie").attr("data-show",d)
};
if(c.CookieManager.getDisclamer()===null){b(true);
c("#c-cookie__close").on("click",function(){c.CookieManager.setDisclamer("true");
b(false)
})
}}(jQuery));
$(function(){$(".o-sidemenu .accordion-trigger").on("click",function(b){b.preventDefault();
$siblings=$(this).siblings();
$siblings.toggleClass("show");
$("body").on("trigger.viewport.changed",function(){if($.viewportDetect()!=="xs"){$siblings.removeClass("show")
}})
})
});
var prevArrowCustom="<button type='button' data-role='none' class='slick-prev' aria-label='Previous' tabindex='0' role='button'><i class='fa fa-angle-left'></i></button>",nextArrowCustom="<button type='button' data-role='none' class='slick-next' aria-label='Next' tabindex='0' role='button'><i class='fa fa-angle-right'></i></button>",prevArrowCustomBlack="<button type='button' data-role='none' class='slick-prev c-slider-black-arrow' aria-label='Previous' tabindex='0' role='button'><i class='fa fa-angle-left'></i></button>",nextArrowCustomBlack="<button type='button' data-role='none' class='slick-next c-slider-black-arrow' aria-label='Next' tabindex='0' role='button'><i class='fa fa-angle-right'></i></button>",settingSlider={prevArrow:prevArrowCustom,nextArrow:nextArrowCustom,responsive:[{breakpoint:768,settings:{slidesToShow:1,slidesToScroll:1}}]};
$(function(){var b=$(".c-slider.c-slider-adaptive-height");
settingSlider.adaptiveHeight=(b!=null&&b.length>0)?true:false;
if($.viewportDetect()==="xs"){$(".c-slider:not(.c-slider--first-slide-only, .c-slider--for, .c-slider--nav)").slick(settingSlider)
}else{$(".c-slider:not(.c-slider--for, .c-slider--nav)").slick(settingSlider)
}$(".c-slider.slick-initialized").slick("slickFilter",":not(cq, .new.section)");
$("body").on("trigger.viewport.changed",function(){if($.viewportDetect()==="xs"){$(".c-slider.c-slider--first-slide-only.slick-initialized").slick("unslick")
}else{$(".c-slider.c-slider--first-slide-only:not(.slick-initialized)").slick(settingSlider)
}});
var c={prevArrow:prevArrowCustom,nextArrow:nextArrowCustom,fade:true,dots:true,autoplaySpeed:3500,responsive:[{breakpoint:768,settings:{slidesToShow:1,slidesToScroll:1}}]};
$('.c-mozaic:not(".c-mozaic-nine") .c-mozaic__slider').each(function(){var l=$(this),f={dots:true,fade:true,rows:2,slidesPerRow:3},d={dots:true};
function e(){return($.viewportDetect()==="md"||$.viewportDetect()==="lg")
}var k=(function k(){if(!l.hasClass("fillup")&&e()){l.find(".c-mozaic__slider__slide:nth-child(5n + 1)").after('<div class="c-mozaic__slider__slide c-mozaic__slider__slide--cloned"></div>');
var n=l.find(".c-mozaic__slider__slide").length%6;
if(n!==0){for(var o=0;
o<=n+1;
o++){l.find(".c-mozaic__slider__slide:not(.c-mozaic__slider__slide--cloned)").eq(o).clone().addClass("c-mozaic__slider__slide--cloned").appendTo(l)
}}l.addClass("fillup")
}return k
}());
function j(){var n=[];
l.find(".c-tabbedmozaic__description").each(function(){$(this).css("height","");
n.push($(this).outerHeight())
});
var o=Math.max.apply(Math,n);
l.find(".c-tabbedmozaic__description").css("height",o)
}l.on("init",function(o,n){l.closest(".c-mozaic").css("visibility","visible");
j()
});
$(window).on("resize",function(){j()
});
if(e()){l.slick(f)
}else{l.slick(d).slick("slickFilter",":not(.c-mozaic__slider__slide--cloned)")
}$("body").on("trigger.viewport.changed",function(){if(e()){l.slick("unslick");
k();
l.slick(f)
}else{l.removeClass("fillup");
l.slick("unslick").slick(d).slick("slickFilter",":not(.c-mozaic__slider__slide--cloned)")
}});
var g=l.closest(".c-mozaic");
g.find(".c-btn--slider--next").on("click",function(n){n.preventDefault();
l.slick("slickNext")
});
g.find(".c-btn--slider--prev").on("click",function(n){n.preventDefault();
l.slick("slickPrev")
})
});
$(".c-mozaic-nine .c-mozaic__slider").each(function(){var k=$(this),f={prevArrow:prevArrowCustomBlack,nextArrow:nextArrowCustomBlack,dots:true,fade:true,rows:3,slidesPerRow:3},d={dots:true};
function e(){return($.viewportDetect()==="md"||$.viewportDetect()==="lg")
}var j=(function j(){if(!k.hasClass("fillup")&&e()){var l=k.find(".c-mozaic__slider__slide").length%9;
l=9-l;
if(l!==0){for(var n=0;
n<l;
n++){k.find(".c-mozaic__slider__slide:not(.c-mozaic__slider__slide--cloned)").eq(n).clone().addClass("c-mozaic__slider__slide--cloned").appendTo(k)
}}k.addClass("fillup")
}return j
}());
function g(){var l=[];
k.find(".c-tabbedmozaic__description").each(function(){$(this).css("height","");
l.push($(this).outerHeight())
});
var n=Math.max.apply(Math,l);
k.find(".c-tabbedmozaic__description").css("height",n)
}k.on("init",function(n,l){k.closest(".c-mozaic").css("visibility","visible");
g()
});
$(window).on("resize",function(){g()
});
if(e()){k.slick(f)
}else{k.slick(d).slick("slickFilter",":not(.c-mozaic__slider__slide--cloned)")
}$("body").on("trigger.viewport.changed",function(){if(e()){k.slick("unslick");
j();
k.slick(f)
}else{k.removeClass("fillup");
k.slick("unslick").slick(d).slick("slickFilter",":not(.c-mozaic__slider__slide--cloned)")
}})
})
});
$(function(){$(window).on("resize load",function(){var d=$(".c-hero-banner__content");
var c=$(".slick-active .c-hero-banner__row");
if(d.length>0&&c.length){var e=c.offset().left;
if($.viewportDetect()==="sm"||$.viewportDetect()==="md"){if(e<60){d.css("left",60-e)
}else{d.css("left","auto")
}}else{d.css("left","auto")
}}});
$("body").on("trigger.viewport.changed",function(){b()
});
b();
function b(){var c=$(".c-hero-banner__image, .c-search-cruise__image, .c-combo-cruise-header__image, .c-combo-cruise-header-manual__image").find(".o-img");
c.each(function(){var d=$(this);
var e=d.prop("currentSrc")||d.prop("src");
d.closest("div[class*=__image]").css("background-image","url("+e+")");
d.css("visibility","hidden")
})
}$(".c-hero-banner .video-link").on("click",function(g){if(!$($(".c-hero-banner")[0]).hasClass("inline-gallery-included")||$(window).width()>767){g.preventDefault();
var c=$(this),f=c.attr("href"),j=c.data("target"),d=$(j);
d.modal("show");
d.on("shown.bs.modal",function(l){var k=$(this);
k.off("shown.bs.modal");
k.find(".modal-dialog").load(f,function(){$(this).find(".c-video").initVideo()
})
})
}});
$(".c-hero-banner .c-hero-banner-scrolldown").on("click",function(g){g.stopPropagation();
var f=$(this).closest(".herobanner").next().offset().top;
var c=$(this).closest(".c-hero-banner").height()!=null?$(this).closest(".c-hero-banner").height():$(this).closest(".herobanner").height();
var d=750;
$("html, body").animate({scrollTop:f-90},d)
})
});
$(function(){$(".c-cruise .request-quote").on("click",function(f){f.stopPropagation()
});
$('div[id^="suitelist-collapse"]').on("show.bs.collapse",function(f){$(this).find('.c-tab__content[data-state="active"]').trigger("ctabcontent-shown")
});
$(".c-suitelist").find(".c-tab__content").on("ctabcontent-shown",function(){$(this).find(".lazy").lazy({afterLoad:function(f){$(window).trigger("resize")
}});
setTimeout(function(){$(window).trigger("resize")
},50)
});
$('.c-tab--cruise > .c-tab__body > .c-tab__content[data-state="active"]').find(".lazy").lazy();
$(".c-cruise .c-tab__content").on("ctabcontent-shown",function(){$(this).find(".c-slider.slick-initialized:not(.c-slider--for, .c-slider--nav)").slick("unslick").slick(settingSlider);
$(this).find(".lazy:visible").lazy()
});
$('.c-cruise div[id^="suitelist-collapse"]').on("shown.bs.collapse",function(k){var j=$(this);
var f=$('div[id^="suitelist-collapse"]').not(j);
f.prev(".c-suitelist__heading").addClass("opacity");
var g=$.viewportDetect()==="xs"?j.offset().top-20:j.prev(".c-suitelist__heading").offset().top-10;
$("html, body").animate({scrollTop:g-$(".c-header").height()-$(".c-main-nav__container").height()},500)
}).on("hide.bs.collapse",function(g){var f=$('div[id^="suitelist-collapse"]').not($(this));
f.prev(".c-suitelist__heading").removeClass("opacity")
});
$('.c-cruise a[data-toggle="location-tab"]').on("click",function(g){g.preventDefault();
var f=$(this).closest(".c-tab ").find('a[href^="#suite-location"]').closest(".c-tab__link").trigger("click")
});
$(window).on("resize",function(){var f=$.viewportDetect();
if(f!=="md"||f!=="lg"){$(".c-cruise-highlights__content").scrollTop(0)
}});
var e=$(".c-cruise-highlights__content");
e.find("a[data-toggle-text]").on("click",function(f){f.preventDefault();
e.toggleClass("open");
$("html, body").animate({scrollTop:$("#highlight").offset().top-$(".c-header").height()},500)
});
$(".c-cruise-keypeople").find("[data-keypeople-toggle]").on("click",function(){var f=$(this);
$(".c-cruise-keypeople").find("[data-keypeople-toggle]").removeClass("active");
f.addClass("active");
$(".keypeople__details__inner-wrapper").hide();
$("#"+f.data("keypeople-toggle")+"").show();
$(".btn-close").on("click",function(g){g.preventDefault();
$(this).closest(".keypeople__details__inner-wrapper").hide()
})
});
$(".c-cruise a[data-tab-target]").on("click",function(g){g.preventDefault();
var f=$(this);
$("html, body").animate({scrollTop:0},0);
$('a[href="'+f.data("tab-target")+'"]').closest("li").trigger("click");
if(f.data("collpase-id")!=="undefined"){$('[data-target="#'+f.data("collpase-id")+'"]').trigger("click")
}});
$(".c-cruise a[data-scroll-target]").on("click",function(f){f.preventDefault();
$("html, body").animate({scrollTop:$($(this).data("scroll-target")).offset().top-$(".c-header").height()-80},500)
});
$('.c-cruise [role="tabpanel"]:not(.c-suitelist__collapse)').on("shown.bs.collapse",function(f){f.stopPropagation();
$("html, body").animate({scrollTop:$(this).prev('[role="button"]').offset().top-$(".c-header").height()-$(".c-main-nav__bottom").height()},500)
});
$(".c-list--cruise-fare-additions").each(function(){var l=$(this);
var n=l.closest(".c-list--cruise-fare-additions__wrapper");
var o=l.find("li");
var t=$.viewportDetect()==="xs";
var f=o.length;
var u=Math.round(f/2);
var k=$(o.splice(u,f-1)).remove();
l.after($('<ul class="'+l.attr("class")+'"></ul>').html(k));
var g=(function g(){t=$.viewportDetect()==="xs";
n.find("li").removeClass("hidden");
if(t){n.find("li:gt(7)").addClass("hidden")
}else{$(".c-list--cruise-fare-additions").each(function(){$(this).find("li:gt(3)").addClass("hidden")
})
}return g
})();
$("body").on("trigger.viewport.changed",function(){g()
});
var r=n.next(".c-list__expand").find("a");
r.on("click",function(v){v.preventDefault();
var x=n.hasClass("closed");
n.css("height",x?j("closed"):j("opened"));
if(x){n.toggleClass("closed opened");
n.animate({height:j("opened")},300,function(){n.css("height","")
})
}else{n.animate({height:j("closed")},300,function(){n.toggleClass("closed opened");
n.css("height","")
})
}});
function j(y){var x=[];
var v=$.viewportDetect()==="xs";
n.find(".c-list--cruise-fare-additions").each(function(){var A=$(this);
var B=0;
var z;
if(y==="closed"){if(v){o=A.find("li:lt(8)")
}else{o=A.find("li:lt(4)")
}}else{o=A.find("li")
}o.each(function(){B+=$(this).outerHeight(true)
});
x.push(B)
});
return v?x[0]+x[1]:Math.max.apply(Math,x)
}});
var b=(function b(){$(".c-cruise-ship-info__item .variationcontent__descr").each(function(g,k){var f=$(k);
f.attr("data-original-height","");
f.removeClass("clipped");
f.removeClass("opened");
if(f.height()>137){var l=f.next(".variationcontent__descr__expand");
var j=l.find(".read_more");
var n=l.find(".read_less");
f.attr("data-original-height",f.height());
f.addClass("clipped");
j.on("click",function(o){o.preventDefault();
f.addClass("opened");
f.css("height",f.data("original-height"))
});
n.on("click",function(o){o.preventDefault();
f.removeClass("opened");
f.css("height","")
})
}});
return b
})();
$("body").on("trigger.viewport.changed",function(){b()
});
$("body").on("click",function(g){var f=!($(g.target).hasClass("c-suitelist__collapse")||$(g.target).parents(".c-suitelist__collapse").length!=0);
if(f){$(".c-suitelist").find(".collapse").collapse("hide");
if(!$("body").hasClass("modal-open")){d()
}}});
$('[data-tab-target="#suitenfare"]').on("click",function(f){var g=$("#suitenfare");
if(g&&g.length){f.preventDefault();
$("html, body").stop().animate({scrollTop:g.offset().top-130},600)
}});
$('[data-tab-target="#suitenfare-b-version"]').on("click",function(f){var g=$("#suitenfare-b-version");
if(g&&g.length){f.preventDefault();
$("html, body").stop().animate({scrollTop:g.offset().top-130},600)
}});
$(".c-cruise__itineraries .cruise-itinerary-link").on("click",function(g){g.preventDefault();
var f=$(".c-cruise__gallery__item.automatic-gallery-modal");
if(f.length>0){f[0].click()
}});
$("#cruise-itinerary-suite-and-fares-mobile-btn-v2").on("click",function(k){k.preventDefault();
var g=$('[href="#overview"]');
if(g.length>0){if($('[href="#overview"]').parent().attr("data-state")!=="active"){g.click();
var f=setInterval(function(){if($('[href="#overview"]').parent().attr("data-state")=="active"){clearInterval(f);
f=null;
var l=$('[data-tab-target="#suitenfare-b-version"]');
l.click()
}},500)
}else{var j=$('[data-tab-target="#suitenfare-b-version"]');
j.click()
}}});
$(".cruise-suite-virtual-tour").on("click",function(n){n.preventDefault();
var l=$(this);
var k=$(this).attr("href");
var j=k+"-container";
var f=$(j).attr("data-image");
if(l.attr("data-virtual-tour-exists")==null){if(window.hasOwnProperty("virtualTour")&&window.virtualTour!=null){window.virtualTour.destroy();
window.virtualTour=null
}if(window.hasOwnProperty("virtualTourID")&&window.virtualTourID!=null){$(virtualTourID).empty()
}var g=setInterval(function(){var o=$(k).attr("data-state");
if(o=="active"){clearInterval(g);
l.attr("data-virtual-tour-exists","true");
g=null;
if(f!=null&&j!=null){window.virtualTourID=j;
window.virtualTour=PhotoSphereViewer({container:j.replace("#",""),panorama:f,anim_speed:"0.4rpm",move_speed:1,time_anim:"1000",min_fov:10,usexmpdata:false,default_fov:179,navbar:["autorotate","zoom","spacer-1","caption","gyroscope","fullscreen"]})
}}},500)
}});
$(".suitelist-collapse-close").on("click",function(f){f.preventDefault();
d()
});
function d(){if(window.hasOwnProperty("virtualTourType")&&window.virtualTourType=="cruise-gallery-virtual-tour"){return
}if(window.hasOwnProperty("virtualTour")&&window.virtualTour!=null){window.virtualTour.destroy();
window.virtualTour=null
}if(window.hasOwnProperty("virtualTourID")&&window.virtualTourID!=null){var j=window.virtualTourID.replace("-container","");
var f=j.replace("virtual-tour","description");
var g=$("[href='"+f+"']");
$("[href='"+j+"']").removeAttr("data-virtual-tour-exists");
if(g!=null){g.click()
}$(virtualTourID).empty();
window.virtualTourID=null
}}$(window).on("hashchange",function(f){if(window.location.hash!="#modal"){window.backNavigation=true;
$(".modal").modal("hide")
}});
$(window).on("resize",function(){if($("header").nextAll().hasClass("c-cruise")&&$(".modal-content").hasClass("modal-content--transparent-suite")){var g=null;
var j=$(window).width()>768;
if(j&&(window.suiteDesktop===false)){window.suiteDesktop=true;
g=window.templateSuiteDetail
}else{if(!j&&(window.suiteDesktop===true)){window.suiteDesktop=false;
g=window.templateSuiteDetailMobile
}}if(g!=null&&window.cruiseIDShowed!=null){$(".modal").modal("hide");
var f=setInterval(function(){if(!$("body").hasClass("modal-open")){clearInterval(f);
setTimeout(function(){c(g)
},200)
}},200)
}}});
$(".automatic-modal-suite-detail").on("click",function(g){g.preventDefault();
window.cruiseIDShowed=$(this).attr("id");
var f=window.templateSuiteDetail;
var j=$(window).width()>768;
if(j){window.suiteDesktop=true;
f=window.templateSuiteDetail
}else{window.suiteDesktop=false;
f=window.templateSuiteDetailMobile
}c(f)
});
$(".automatic-modal-suite-detail a.btn-request-a-quote").on("click",function(f){f.preventDefault();
document.location.href=$(this).attr("href");
f.stopPropagation()
});
function c(n){$("html").addClass("no-scroll-html");
$("body").addClass("no-scroll-body");
var j=$("#"+window.cruiseIDShowed);
if(window.hasOwnProperty("cruiseItem")&&window.cruiseItem!=null){var P=j.attr("id");
var k=(j.parent().data("nav-description")!=null)?j.parent().data("nav-description"):"";
var K=(j.parent().data("nav-plan")!=null)?j.parent().data("nav-plan"):"";
var o=(j.parent().data("nav-features")!=null)?j.parent().data("nav-features"):"";
var A=(j.parent().data("nav-location")!=null)?j.parent().data("nav-location"):"";
var X=(j.parent().data("nav-virtual-tour")!=null)?j.parent().data("nav-virtual-tour"):"";
var E=(j.parent().data("note")!=null)?j.parent().data("note"):"";
var af=(j.parent().data("request-quote")!=null)?j.parent().data("request-quote"):"";
var y=(j.parent().data("early-bonus")!=null)?j.parent().data("early-bonus"):"";
var G=(j.parent().data("waitlist")!=null)?j.parent().data("waitlist"):"";
var L=(j.parent().data("deck")!=null)?j.parent().data("deck"):"";
var T=(j.parent().data("view-all")!=null)?j.parent().data("view-all"):"";
var U=(j.parent().data("view-less")!=null)?j.parent().data("view-less"):"";
var S=(j.parent().data("close")!=null)?j.parent().data("close"):"";
var z="";
var N=(window.cruiseItem[P].title!=null)?window.cruiseItem[P].title:"";
var J=(window.cruiseItem[P].assetSelectionReference!="")?window.cruiseItem[P].assetSelectionReference:null;
var aa=(window.cruiseItem[P].longDescription!=null)?window.cruiseItem[P].longDescription:"";
var B=(window.cruiseItem[P].bedroomsInformation!=null)?window.cruiseItem[P].bedroomsInformation:"";
var D=(window.cruiseItem[P].virtualTour!="")?window.cruiseItem[P].virtualTour:null;
var W=(j.data("currency")!=null)?j.data("currency"):"";
var H=$("#"+P).find(".link-request-quote-card").attr("href");
var I=window.cruiseItem[P].early;
var C=(window.cruiseItem[P].priceBookingBonus!=null)?W+" "+window.cruiseItem[P].priceBookingBonus:"";
var t=(window.cruiseItem[P].plan!="")?window.cruiseItem[P].plan:null;
var v=(window.cruiseItem[P].features!=null)?window.cruiseItem[P].features:"";
var F=(window.cruiseItem[P].locationImage!="")?window.cruiseItem[P].locationImage:null;
var Z=(window.cruiseItem[P].deck!=null)?window.cruiseItem[P].deck:"";
var O=G;
if(window.cruiseItem[P].price!=null){O=W+" "+window.cruiseItem[P].price;
z=(j.parent().data("from")!=null)?j.parent().data("from"):""
}var Q="";
if(J!=null){var ac=J.split("#next#");
for(var Y=0;
Y<ac.length;
Y++){Q+='<div class="slider-item">';
Q+='<div class="ratio lazy" style="display:block;background-size: cover;background-position: center;background-repeat: no-repeat;background-image:url('+ac[Y]+'?wid=1200&fmt=pjpeg&pscan=5&qlt=80&fit=hfit,1)"></div>';
if(Y==0){Q+='<div class="c-suite-loader"></div>'
}Q+="</div>"
}}var M="";
if(o!=null){var f=v.split("#next#");
for(var Y=0;
Y<f.length;
Y++){M+="<li>"+f[Y]+"</li>"
}}var R="";
var g="";
if(F!=null){var u=Z.split("#next#");
for(var Y=0;
Y<u.length;
Y++){var r="btn btn-thin show-deck-image";
var x="deck-"+Y;
if(Y==0){r+=" activeDeck"
}g+='<a id="'+x+'" class="'+r+'" href="#"> <span> '+L+" "+u[Y]+"</span></a>"
}var ae=F.split("#next#");
var V="";
for(var Y=0;
Y<ae.length;
Y++){var x="deck-"+Y+"-image";
if(Y!=0){V="style='display:none'"
}R+='<img id="'+x+'" src="'+ae[Y]+'"?hei=930&wid=930&fmt=pjpeg&pscan=5&qlt=80&fit=constrain" alt="Suite plan" title="Suite plan" class="o-img"'+V+"/>"
}}var ad="";
if(D!=null){ad='<div id="c-suite-detail-modal-virtual-tour-containerDiv" class="c-suite-detail-modal-virtual-tour-container" data-image="'+D+'"></div>'
}var l=n;
l=l.replace("c-suitelist-nav-plan-placeholder",K);
l=l.replace("c-suitelist-nav-virtual-tour-placeholder",X);
l=l.replace("c-suitelist-note-placeholder",E);
l=l.replace("c-suitelist-raq-placeholder",af);
l=l.replace("c-suitelist-from-placeholder",z);
l=l.replace("c-suitelist-raq-placeholder-mobile",af);
l=l.replace("c-suitelist-from-placeholder-mobile",z);
l=l.replace("c-suitelist-view-all-placeholder",T);
l=l.replace("c-suitelist-view-less-placeholder",U);
l=l.replace("c-suitelist-close-placeholder",S);
l=l.replace("c-suitelist-title-placeholder",N);
l=l.replace("c-suitelist-longDescription-placeholder",aa);
l=l.replace("c-suitelist-bedroomsInformation-placeholder",B);
l=l.replace("c-suitelist-raq-link-placeholder",H);
l=l.replace("c-suitelist-raq-link-placeholder-mobile",H);
l=l.replace("c-suitelist-price-placeholder",O);
l=l.replace("c-suitelist-price-placeholder-mobile",O);
l=l.replace("c-suitelist-price-booking-bonus-placeholder",C);
l=l.replace("c-suitelist-price-booking-bonus-placeholder-mobile",C);
if(I){l=l.replace("c-suitelist-early-bonus-placeholder",y);
l=l.replace("c-suitelist-early-bonus-placeholder-mobile",y)
}else{l=l.replace("c-suitelist-early-bonus-placeholder","");
l=l.replace("c-suitelist-early-bonus-placeholder-mobile","")
}if(J!=null){l=l.replace("c-suitelist-description-placeholder",Q);
l=l.replace("c-suitelist-nav-description-placeholder",k)
}if(t!=null){var ab='<img src="'+t+'?hei=930&wid=930&fit=constrain&fmt=pjpeg&pscan=5&qlt=80" alt="Suite plan" title="Suite plan" class="o-img" />';
l=l.replace("c-suitelist-plan-placeholder",ab)
}if(o!=null){l=l.replace("c-suitelist-features-placeholder",M);
l=l.replace("c-suitelist-nav-features-placeholder",o)
}if(F!=null){l=l.replace("c-suitelist-deck-placeholder",g);
l=l.replace("c-suitelist-location-placeholder",R);
l=l.replace("c-suitelist-nav-location-placeholder",A)
}if(D!=null){l=l.replace("c-suitelist-virtual-tour-placeholder",ad);
l=l.replace("c-suitelist-nav-virtual-tour-placeholder",X)
}$("body").addClass("modal-open");
$(j.data("target")).modal("show");
$(".modal").on("shown.bs.modal",function(am){if(window.scrollSupport!=null&&window.scrollSupport){window.iNoBounce.enable()
}var ag="#"+$(this).attr("id");
history.pushState(null,null,ag);
var ah=$(this);
ah.off("shown.bs.modal");
$(this).find(".modal-dialog").empty().append(l);
$(".modal-dialog").css("padding-top","0%");
if(window.suiteDesktop==false){$(".modal-content--transparent-suite").parent().parent().css("display","block");
$(".modal-content--transparent-suite").parent().parent().css("overflow-y","hidden");
$(".modal-content--transparent-suite .modal-body").css("overflow-y","scroll");
$(".modal-content--transparent-suite .modal-body").css("max-height","100vh")
}var ai=0;
if(J!=null){if(window.suiteDesktop){$(".c-suite-detail-modal #descr-tab").removeClass("hidden");
$(".c-suite-detail-modal #descr-tab").addClass("active");
$(".c-suite-detail-modal #suite-description.tab-pane").addClass("active");
ai++
}else{$(".c-suite-detail-modal #suite-description").removeClass("hidden")
}}if(t!=null){if(window.suiteDesktop){$(".c-suite-detail-modal #suite-tab").removeClass("hidden");
if(ai==0){$(".c-suite-detail-modal #suite-tab").addClass("active");
$(".c-suite-detail-modal #suite-suite-plan.tab-pane").addClass("active")
}ai++
}else{$(".c-suite-detail-modal #suite-suite-plan").removeClass("hidden")
}}if(o!=null){if(window.suiteDesktop){$(".c-suite-detail-modal #features-tab").removeClass("hidden");
if(ai==0){$(".c-suite-detail-modal #features-tab").addClass("active");
$(".c-suite-detail-modal #suite-features.tab-pane").addClass("active")
}ai++
}else{$(".c-suite-detail-modal #suite-features").removeClass("hidden")
}}if(F!=null){var aj=Z.split("#next#");
if(aj.length>4&&!window.suiteDesktop){$(".c-suite-detail-modal-deck").css("float","left")
}if(window.suiteDesktop){$(".c-suite-detail-modal #location-tab").removeClass("hidden");
if(ai==0){$(".c-suite-detail-modal #location-tab").addClass("active");
$(".c-suite-detail-modal #suite-location.tab-pane").addClass("active")
}ai++
}else{$(".c-suite-detail-modal #suite-location").removeClass("hidden")
}}if(D!=null){if(window.suiteDesktop){$(".c-suite-detail-modal #virtualtour-tab").removeClass("hidden");
if(ai==0){$(".c-suite-detail-modal #virtualtour-tab").addClass("active");
$(".c-suite-detail-modal .tab-pane #suite-virtual-tour").addClass("active")
}ai++
}}var al=$(this).find(".c-slider").slick({slidesToShow:1,slidesToScroll:1});
var ak=al.find(".slick-slide:not(.slick-cloned)").length;
$(".modal").find(".c-suite-detail-modal-description__counter .slide-item-current").html(1);
$(".modal").find(".c-suite-detail-modal-description__counter .slide-item-total").html(ak);
if(ak==1){$(".c-suite-detail-modal-description__counter").css("display","none")
}al.on("beforeChange",function(ao,an,ar,ap){var aq=$(this);
$(".modal").find(".c-suite-detail-modal-description__counter .slide-item-current").html(ap+1)
});
$(this).find(".show-deck-image").on("click",function(ap){ap.preventDefault();
var an=$(this).attr("id");
var ao=an+"-image";
$("#suite-location a:not(#"+an+")").removeClass("activeDeck");
$("#suite-location #"+an).addClass("activeDeck");
$("#suite-location img:not(#"+ao+")").css("display","none");
$("#suite-location #"+ao).css("display","block")
});
$(this).find("#descr-tab").on("click",function(an){if(al!=null){al.slick("slickGoTo",0)
}});
$(this).find(".suite-features-expand a.view_all").on("click",function(an){an.preventDefault();
$(".expand-ul li:nth-of-type(1n+10)").stop().css("display","list-item").hide().slideDown();
$(".suite-features-expand a.view_less").show();
$(this).hide()
});
$(this).find(".suite-features-expand a.view_less").on("click",function(an){an.preventDefault();
$(".suite-features-expand a.view_all").show();
$(".expand-ul li:nth-of-type(1n+10)").stop().slideUp();
$(this).hide()
});
$(this).find(".close").on("click",function(an){an.preventDefault();
$(".modal").modal("hide")
});
if(window.suiteDesktop==true){$(this).find("#features-tab.c-navtab__link--button a").on("click",function(an){$(".modal-body .tab-content").addClass("tab-content-grey")
});
$(this).find(".c-navtab__link--button:not(#features-tab) a").on("click",function(an){$(".modal-body .tab-content").removeClass("tab-content-grey")
})
}$(this).find(".c-suite-detail-virtual-tour-lightbox").on("click",function(ap){ap.preventDefault();
if(!window.hasOwnProperty("virtualTour")||window.virtualTour==null){var an=$("#c-suite-detail-modal-virtual-tour-containerDiv").data().image;
var ao=setInterval(function(){if($("#virtualtour-tab").hasClass("active")){clearInterval(ao);
if(an!=null){window.virtualTour=PhotoSphereViewer({container:"c-suite-detail-modal-virtual-tour-containerDiv",panorama:an,anim_speed:"0.4rpm",move_speed:1,time_anim:"1000",min_fov:10,usexmpdata:false,default_fov:100,navbar:["autorotate","zoom","spacer-1","caption","gyroscope","fullscreen"]})
}}},500)
}})
})
}}});
$(function(){$(".c-cruise .c-cruise__item-expander a").on("click",function(f){f.preventDefault();
var b=$(this),d=b.closest(".c-cruise__gallery");
var c=0;
if(d.hasClass("open")){d.css("height",d.outerHeight());
d.animate({height:d.find("> div").first().outerHeight()},600,function(){var e=d.closest(".c-cruise-ship-info").length?1:0;
d.css("height",d.height()).find("> div:gt("+e+"):not(.c-cruise__item-expander)").hide();
$(this).css("height","").removeClass("open");
$("html, body").animate({scrollTop:d.offset().top-$(".c-header").height()},0)
})
}else{d.css("height",d.height()).find("> div").show();
d.children().each(function(){c=c+$(this).outerHeight(true)
});
d.find(".lazy").lazy();
d.animate({height:c},1000,function(){$(this).css("height","").addClass("open")
})
}})
});
$(function(){$(".modal").on("shown.bs.modal",function(b){b.preventDefault();
$(this).find(".c-signupforoffer").each(function(){var e=$(this);
e.find(".custom-checkbox").iCheck({checkboxClass:"icheckbox_minimal"});
var c=null;
try{c=JSON.parse($.CookieManager.getCookie("userInfo"))
}catch(d){$.CookieManager.setCookie("userInfo",JSON.stringify(""))
}if(c){e.find('[name="title"]').val(c.title).trigger("chosen:updated");
e.find('[name="firstname"]').val(c.firstname);
e.find('[name="lastname"]').val(c.lastname);
e.find('[name="email"]').val(c.email)
}$(".c-formcookie").validator({focus:false,feedback:{success:"feedback-success",error:"feedback-error"},custom:{email:function(f){var g=/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
if(!g.test(f.val())){return"error"
}if(typeof prevemail!=="undefined"){if(prevemail==f.val()){return window.answerBrite
}else{prevemail=f.val();
window.briteVerify(f.val());
return window.answerBrite
}}else{prevemail=f.val();
window.briteVerify(f.val());
return window.answerBrite
}}}}).on("submit",function(f){if(!f.isDefaultPrevented()){$.signUp.signUpOffers(this,f)
}});
if(!$.fn.mobileDetect()){$(".chosen").chosen()
}})
})
});
$(function(){var e=$("#destination-html-switchable-block"),c=$("#destination-html-switcher"),b=$("#destination-fyc-switchable-block"),d=$("#destination-fyc-switcher");
c.on("click",function(){$(this).addClass("hidden");
e.removeClass("hidden");
b.addClass("hidden");
d.removeClass("hidden")
});
d.on("click",function(){$(this).addClass("hidden");
e.addClass("hidden");
c.removeClass("hidden");
b.removeClass("hidden")
})
});
$(function(){$(".c-combo-cruise .select-segment dd a").on("click",function(d){d.preventDefault();
var c=$(this);
var b=c.closest("dd");
b.addClass("active");
b.siblings("dd.active").toggleClass("active");
var f;
c.one("shown.bs.tab",function(){var e=$($(this).attr("href"));
f=e.find(".c-slider");
f.slick("unslick").slick(settingSlider);
e.find(".lazy").lazy();
$("html, body").animate({scrollTop:e.offset().top-$(".c-header").height()-24-$(".c-main-nav__bottom").height()},300)
})
});
$(".c-combo-cruise #overview [data-tab-target]").on("click",function(){var b=$(this);
$("html, body").stop().animate({scrollTop:$(".c-combo-cruise .c-tab__nav--fixed").offset().top-$(".c-header").height()-24},0,function(){var c=b.data("tab-target");
$('a[href="'+c+'"]').closest("li").trigger("click");
if(c=="#suitenfare"){if(b.closest(".c-suitelist").length>0){$(c).find(".panel:eq("+b.index()+")").find('[role="tab"]').trigger("click")
}}else{$(c).find(".select-segment dd:eq("+b.closest("[data-slick-index]").data("slick-index")+") a").trigger("click")
}})
});
$(".c-combo-cruise .c-vertical-teaser").each(function(){var b=$(this);
b.find("a").on("click",function(d){d.preventDefault();
$('a[href="#benefitsnevents"]').trigger("click");
var c=$("#"+$(this).attr("href").split("#")[1]);
$("html, body").animate({scrollTop:c.offset().top-$(".c-header").height()-24-$(".c-main-nav__bottom").height()},300).promise().then(function(){c.trigger("click")
})
})
});
jQuery("a.coolanchorminusbig").click(function(){if(this.hash){var b=this.hash.substr(1);
var d=jQuery("[id="+b+"]");
var c=d.offset().top-310;
jQuery("body,html").animate({scrollTop:c},1000);
return false
}})
});
$(function(){$.fn.initVideo=function(){this.each(function(){var d=$(this);
var e=d.data("video-asset");
var f=d.data("video-autoplay")!=="undefined"?d.data("video-autoplay"):"0";
var c=new s7viewers.VideoViewer({containerId:d.attr("id"),params:{"VideoPlayer.ssl":"on",serverurl:"https://silversea-h.assetsadobe2.com/is/image",contenturl:"https://www.silversea.com/",config:"etc/dam/presets/viewer/Video",videoserverurl:"https://gateway-eu.assetsadobe.com/DMGateway/public-ssl/silversea",posterimage:e,asset:e,autoplay:f.toString(),progressivebitrate:"3000",initialbitrate:"3000"}});
c.setHandlers({initComplete:function(){var g=d.find("video");
g.on("loadstart",function(){d.addClass("loading")
}).on("loadeddata",function(){d.removeClass("loading")
})
}});
c.init()
})
};
function b(){if(typeof s7viewers!=="undefined"){$(".c-video:not(.c-video--cc-gallery)").initVideo()
}else{setTimeout(b,700)
}}b()
});
$(function(){$.fn.initLanguageSelector=function(){var c=$(".open-language-selector"),e=$("#c-language-selector"),f=c.closest(".c-main-nav__top");
b();
$("body").on("trigger.viewport.changed",function(){b()
});
function b(){if($.viewportDetect()==="sm"){if(!$(".c-language-selector__list.cloned").length){e.clone().addClass("cloned").attr("id","c-language-selector-cloned").appendTo(".c-main-nav__top")
}}d();
c.on("click",function(j){j.preventDefault();
j.stopPropagation();
var g=$("#c-language-selector-cloned, #c-language-selector");
g.collapse("toggle");
c.attr("aria-expanded",g.attr("aria-expanded"))
})
}function d(){$("#c-language-selector, #c-language-selector-cloned").collapse("hide");
c.attr("aria-expanded","false")
}this.closeLanguageSelector=function(){d()
};
return this
};
$.fn.initLanguageSelector();
$(document).on("click",function(b){b.stopPropagation();
if($(b.target).parents(".c-language-selector__list").length===0){$.fn.initLanguageSelector().closeLanguageSelector()
}})
});
var v1=function(){var e=$(".c-fyc-filter");
var k=true;
if(e.length>0){var r=e.find(".c-fyc-filter__reset a");
var t=$("#filter-form");
var o=$(".c-fyc-pagination");
var f=$(".c-fyc__result-wrapper");
var g=o.find("a.active").data("page");
$(".feature-filter").on("click",function(u){u.stopPropagation();
if($(u.target).closest("li").hasClass("disabled")){u.preventDefault()
}});
var j=(function j(){$filter=t.find("select");
$filter.each(function(){var G=$(this);
var H=G.find("option");
var E=f.find("#"+G.attr("name")+"-filter").data("ssc-filter");
if(E!==""){var F=E;
H.each(function(){try{var J=$(this);
J.attr("disabled",F[J.val()]!==true)
}catch(I){console.log("init issue")
}})
}});
if(window.history.pushState&&!k){var C=window.location.href;
var v=C.split("/");
var u=window.location.search;
var D=v[v.length-1];
var y=v.slice(0,-1).join("/");
var B=D.split(".");
var A=B[0];
var z=["destination_"+$("#current-destination-filter").val(),"date_"+$("#current-date-filter").val(),"ship_"+$("#current-ship-filter").val(),"duration_"+$("#current-duration-filter").val(),"cruisetype_"+$("#current-cruisetype-filter").val(),"port_"+$("#current-port-filter").val(),"page_"+$("#current-page-filter").val()];
window.history.pushState({},null,y+"/"+A+"."+z.join(".")+".html"+u)
}k=false;
t.find(".destination-filter, .date-filter, .ship-filter, .duration-filter, .cruisetype-filter, .port-filter").each(function(){var F=$(this);
var E=$("#current-"+F.attr("name")+"-filter").val();
F.find("option").each(function(){var G=$(this);
G.attr("selected",G.val()===E)
})
});
t.find(".chosen").trigger("chosen:updated");
$items=t.find(".feature-filter li");
if($("#feature-filter").data("ssc-filter")!==undefined){var x=$("#feature-filter").data("ssc-filter");
$items.each(function(){var E=$(this);
E.toggleClass("disabled",x[E.find("input[name=feature]").val()]!==true)
})
}else{$items.toggleClass("disabled",true)
}return j
})();
var c=(function c(){var x="<span><i></i></span>";
var y={};
var u=$(".feature-wrapper");
f.find(".meta_feature_inner:not(.hidden-xs)").each(function(){var z=$(this);
y[z.find("i").attr("class")]=z.find(".tooltip").text()
});
for(var v in y){u.append(x);
u.find("span:last i").addClass(v);
u.find("span:last").append(y[v])
}return c
})();
var d=(function d(){var v=window.dataLayer[0];
var u={};
t.find("select").each(function(y,x){u[x.name]=$(x).find(":selected").data("value")||x.value
});
t.find("input:checked").each(function(y,x){u[x.name.replace("[]","["+y+"]")]=$(x).data("value")
});
v.search_filters=u;
v.search_page_number=g;
v.search_results_number=$("#matching-value").text();
$cruise=f.find(".c-fyc__result:first");
return d
})();
var n=(function n(){o=$(".c-fyc-pagination");
f.on("click",o.find("a"),function(u){var v=$(u.target);
if(v.closest(".c-fyc-pagination ul").length>0){u.preventDefault();
u.stopPropagation();
o.find("a").removeClass("active");
v.addClass("active");
g=v.data("page");
t.trigger("change",[true]);
$("html, body").animate({scrollTop:$(".c-fyc-filter").first().offset().top-$(".c-header").height()},800)
}});
return n
})();
r.on("click",function(v){v.preventDefault();
var u=$(this);
if(u.hasClass("active")){t.trigger("reset");
t.find("option").attr("selected",false);
t.find(".chosen").trigger("chosen:updated");
t.trigger("change",[false]);
u.removeClass("active")
}});
var b=(function b(){var u=$("#matching-value");
u.closest(".c-fyc-filter__text").toggleClass("results",parseInt($("#matching-value").text())>1);
var v=$("#matching-value-nd");
v.closest(".c-fyc-v1-filter__text").toggleClass("results",parseInt($("#matching-value-nd").text())>1);
return b
})();
var l=(function l(){var u,v=$(t.serializeArray());
v.each(function(y,z){var x=$('[name="'+z.name+'"]').closest(".single-filter");
if(typeof z!="undefined"&&z!=null){if(typeof z.value!="undefined"){if(z.value!=="all"){u=true;
x.addClass("active")
}else{x.removeClass("active")
}}}});
if(u){r.addClass("active")
}else{r.removeClass("active")
}return l
})();
t.on("change",function(C,D){if($(C.target).closest(".chosen-search").length===0){var F=window.dataLayer[0];
var v=false;
t.find(".destination-tracking").find("select option:selected").each(function(J,I){if($(I).val()=="gv"){window.location.href="https://www.silversea.com"+$(I).data("ssc-link");
v=true
}if($(I).val()=="wc"){window.location.href="https://www.silversea.com"+$(I).data("ssc-link");
v=true
}});
if(!v){var H={};
t.find("select").each(function(J,I){H[I.name]=$(I).find(":selected").data("value")||I.value
});
t.find("input:checked").each(function(J,I){H[I.name.replace("[]","["+J+"]")]=$(I).data("value")
});
F.search_filters=H;
l();
var x,G=$(this),z=0,B=$(G.serializeArray());
B.each(function(I,J){if(J.name==="feature"){z++
}});
var u=G.find(".feature-filter").closest(".single-filter").find(".text-selected");
var y=u.closest(".single-filter");
if(z===0){u.text(u.data("default-text"));
y.removeClass("active")
}else{if(z===1){u.text(z+" "+u.data("feature-text"));
y.addClass("active")
}else{u.text(z+" "+u.data("features-text"));
y.addClass("active")
}}var E=G.data("url");
var A=[];
B.each(function(I,J){if(J.name==="feature"){A.push(J.value.replace(/\//g,"forwardSlash"))
}else{E+="."+J.name+"_"+J.value.replace(/\//g,"forwardSlash")
}});
if(A.length>0){E+=".features_"+A.join("|")
}else{E+=".features_all"
}g=(D===true)?g:"1";
E+=".page_"+g;
E+=".html";
$.ajax({type:"GET",url:E,success:function(I){f.html(I);
$("#matching-value").text($("#count-filter").val());
$("#matching-value-nd").text($("#count-filter").val());
b();
j();
c();
d();
try{$(".c-fyc-v2__result__content__itinerary li.destination-ports .c-fyc-v2__result__content__itinerary__ports span").each(function(){var K=$(this).text();
K=K.toLowerCase();
$(this).text(K)
})
}catch(J){console.error(J)
}}})
}}})
}};
var v2=function(){var e=$(".c-fyc-v2-filter");
var k=true;
if(e.length>0){var r=e.find(".c-fyc-v2-filter__reset a");
var t=$("#filter-form-v2");
var o=$(".c-fyc-v2-pagination");
var f=$(".c-fyc-v2__result-wrapper:not(.fyc2018-results-div)");
var g=o.find("a.active").data("page");
$(".v2-feature-filter").on("click",function(u){u.stopPropagation();
if($(u.target).closest("li").hasClass("disabled")){u.preventDefault()
}});
var j=(function j(){$filter=t.find("select");
$filter.each(function(){var G=$(this);
var H=G.find("option");
var E=f.find("#v2-"+G.attr("name")+"-filter").data("ssc-filter");
if(E!==""){var F=E;
H.each(function(){try{var J=$(this);
J.attr("disabled",F[J.val()]!==true)
}catch(I){console.log("init issue")
}})
}});
if(window.history.pushState&&!k){var C=window.location.href;
var v=C.split("/");
var u=window.location.search;
var D=v[v.length-1];
var y=v.slice(0,-1).join("/");
var B=D.split(".");
var A=B[0];
var z=["destination_"+$("#v2-current-destination-filter").val(),"date_"+$("#v2-current-date-filter").val(),"ship_"+$("#v2-current-ship-filter").val(),"duration_"+$("#v2-current-duration-filter").val(),"cruisetype_"+$("#v2-current-cruisetype-filter").val(),"port_"+$("#v2-current-port-filter").val(),"page_"+$("#v2-current-page-filter").val()];
window.history.pushState({},null,y+"/"+A+"."+z.join(".")+".html"+u)
}k=false;
shouldDisplayReset=false;
t.find(".destination-filter, .date-filter, .ship-filter, .duration-filter, .cruisetype-filter, .port-filter").each(function(){var F=$(this);
var E=$("#v2-current-"+F.attr("name")+"-filter").val();
if(E!="all"&&E!=""){shouldDisplayReset=true
}F.find("option").each(function(){var G=$(this);
G.attr("selected",G.val()===E)
})
});
if(shouldDisplayReset){$(".c-fyc-v2-filter__reset").show()
}else{$(".c-fyc-v2-filter__reset").hide()
}t.find(".chosen").trigger("chosen:updated");
$items=t.find(".v2-feature-filter li");
if($("#v2-feature-filter").data("ssc-filter")!==undefined){var x=$("#v2-feature-filter").data("ssc-filter");
$items.each(function(){var E=$(this);
E.toggleClass("disabled",x[E.find("input[name=feature]").val()]!==true)
})
}else{$items.toggleClass("disabled",true)
}return j
})();
var c=(function c(){var x="<span><i></i></span>";
var y={};
var u=$(".feature-wrapper");
f.find(".meta_feature_inner:not(.hidden-xs)").each(function(){var z=$(this);
y[z.find("i").attr("class")]=z.find(".tooltip").text()
});
for(var v in y){u.append(x);
u.find("span:last i").addClass(v);
u.find("span:last").append(y[v])
}return c
})();
var d=(function d(){var v=window.dataLayer[0];
var u={};
t.find("select").each(function(y,x){u[x.name]=$(x).find(":selected").data("value")||x.value
});
t.find("input:checked").each(function(y,x){u[x.name.replace("[]","["+y+"]")]=$(x).data("value")
});
v.search_filters=u;
v.search_page_number=g;
v.search_results_number=$("#v2-matching-value").text();
$cruise=f.find(".c-fyc-v2__result:first");
return d
})();
var n=(function n(){o=$(".c-fyc-v2-pagination");
f.on("click",o.find("a"),function(u){var v=$(u.target);
if(v.closest(".c-fyc-v2-pagination ul").length>0){u.preventDefault();
u.stopPropagation();
g=v.data("page");
if(typeof g!="undefined"&&g!=null){o.find("a").removeClass("active");
v.addClass("active");
if(v.hasClass("next")){g=g+1
}else{if(v.hasClass("previous")){g=g-1
}}t.trigger("change",[true]);
$("html, body").animate({scrollTop:$(".c-fyc-v2-filter").first().offset().top-$(".c-header").height()-51},800)
}}});
return n
})();
r.on("click",function(v){v.preventDefault();
var u=$(this);
if(u.hasClass("active")){t.trigger("reset");
t.find("option").attr("selected",false);
t.find(".chosen").trigger("chosen:updated");
t.trigger("change",[false]);
u.removeClass("active")
}});
var b=(function b(){var u=$("#v2-matching-value");
u.closest(".c-fyc-v2-filter__text").toggleClass("results",parseInt($("#v2-matching-value").text())>1);
var v=$("#v2-matching-value-nd");
v.closest(".c-fyc-v1-filter__text").toggleClass("results",parseInt($("#v2-matching-value-nd").text())>1);
return b
})();
var l=(function l(){var u,v=$(t.serializeArray());
v.each(function(y,z){var x=$('.c-fyc-v2-filter form [name="'+z.name+'"]').closest(".single-filter");
if(typeof z!="undefined"&&z!=null){if(typeof z.value!="undefined"){if(z.value!=="all"){u=true;
x.addClass("active")
}else{x.removeClass("active")
}}}});
if(u){r.addClass("active")
}else{r.removeClass("active")
}return l
})();
t.on("change",function(C,D){if($(C.target).closest(".chosen-search").length===0){var F=window.dataLayer[0];
var v=false;
$("#filter-form-v2 .destination-tracking").find("select option:selected").each(function(J,I){if($(I).val()=="gv"){window.location.href="https://www.silversea.com"+$(I).data("ssc-link");
v=true
}if($(I).val()=="wc"){window.location.href="https://www.silversea.com"+$(I).data("ssc-link");
v=true
}});
if(!v){var H={};
t.find("select").each(function(J,I){H[I.name]=$(I).find(":selected").data("value")||I.value
});
t.find("input:checked").each(function(J,I){H[I.name.replace("[]","["+J+"]")]=$(I).data("value")
});
F.search_filters=H;
l();
var x,G=$(this),z=0,B=$(G.serializeArray());
B.each(function(I,J){if(J.name==="feature"){z++
}});
var u=G.find(".v2-feature-filter").closest(".single-filter").find(".text-selected");
var y=u.closest(".single-filter");
if(z===0){u.text(u.data("default-text"));
y.removeClass("active")
}else{if(z===1){u.text(z+" "+u.data("feature-text"));
y.addClass("active")
}else{u.text(z+" "+u.data("features-text"));
y.addClass("active")
}}var E=G.data("url");
var A=[];
B.each(function(I,J){if(J.name==="feature"){A.push(J.value.replace(/\//g,"forwardSlash"))
}else{E+="."+J.name+"_"+J.value.replace(/\//g,"forwardSlash")
}});
if(A.length>0){E+=".features_"+A.join("|")
}else{E+=".features_all"
}g=(D===true)?g:"1";
E+=".page_"+g;
E+=".html";
$.ajax({type:"GET",url:E,success:function(I){f.html(I);
$("#v2-matching-value").text($("#v2-count-filter").val());
$("#v2-matching-value-nd").text($("#v2-count-filter").val());
b();
j();
c();
d();
try{$(".c-fyc-v2__result__content__itinerary li.destination-ports .c-fyc-v2__result__content__itinerary__ports span").each(function(){var K=$(this).text();
K=K.toLowerCase();
$(this).text(K)
})
}catch(J){console.error(J)
}}})
}}})
}};
$(function(){v1();
v2()
});
$(function(){function d(g){var l=new Date(g),k=""+(l.getMonth()+1),f=""+l.getDate(),j=l.getFullYear();
if(k.length<2){k="0"+k
}if(f.length<2){f="0"+f
}return[j,k,f].join("-")
}var c=(function e(){var k=new Date();
var f=d(k);
$.CookieManager.setCookie("user_recency",f);
$.CookieManager.setCookie("user_last_visit",f);
var j=$(".datalayer-suite-name");
if(j.length>0){$.CookieManager.setCookie("track_suite",j.data("tracksuite"))
}var g=$(".datalayer-brochurecode");
if(g.length>0){$.CookieManager.setCookie("track_brochurename",g.data("brochurecode"))
}})();
var b=(function b(){window.dataLayer[0].env_channel=$.viewportDetect();
var t=null;
try{t=JSON.parse($.CookieManager.getCookie("userInfo"))
}catch(o){$.CookieManager.setCookie("userInfo",JSON.stringify(""))
}if(t!=undefined){window.dataLayer[0].user_email=t.email;
window.dataLayer[0].user_recency_optin=t.subscribeemail
}var l=$.CookieManager.getCookie("track_suite");
if(l!=undefined){window.dataLayer[0].track_suite=l;
window.dataLayer.push({track_suite:l})
}var k=$.CookieManager.getCookie("track_brochurename");
if(k!=undefined){window.dataLayer[0].track_brochurename=k;
window.dataLayer.push({track_brochurename:k})
}var n=$.CookieManager.getCookie("api_indiv_id");
if(n!=undefined){window.dataLayer[0].api_indiv_id=n
}var j=$.CookieManager.getCookie("api_blocked_referer");
if(j!=undefined){window.dataLayer[0].api_blocked_referer=j
}var r=$.CookieManager.getCookie("api_temporary_id");
if(r!=undefined){window.dataLayer[0].api_temporary_id=r
}var f=$.CookieManager.getCookie("user_status");
if(f!=undefined){window.dataLayer[0].user_status=f
}var g=$.CookieManager.getCookie("user_recency");
if(g!=undefined){window.dataLayer[0].user_recency=g;
window.dataLayer[0].user_last_visit=g
}return b
})()
});
$(function(){settingInlineGallery={prevArrow:prevArrowCustom,nextArrow:nextArrowCustom,slidesToShow:5,slidesToScroll:5,responsive:[{breakpoint:991,settings:{slidesToShow:3,slidesToScroll:3}},{breakpoint:768,settings:{slidesToShow:1,slidesToScroll:1}}]};
$(".c-inline-gallery").slick("unslick").slick(settingInlineGallery);
var b=(function b(){$(".c-inline-gallery .o-img").each(function(){var c=$(this);
var d=c.prop("currentSrc")||c.prop("src");
c.closest("div").css("background-image","url("+d+")");
c.css("visibility","hidden")
});
return b
})();
$("body").on("trigger.viewport.changed",function(){b()
})
});
$(function(){$.fn.initGallery=function(){this.each(function(){var b=$(this);
$(".c-slider--for, .c-slider--nav").on("init",function(g,f){var e=$(this).find(".slick-active");
e.find(".lazy").lazy();
e.prev().find(".lazy").lazy();
e.next().find(".lazy").lazy()
});
var c=b.find(".c-slider--for").slick({prevArrow:prevArrowCustom,nextArrow:nextArrowCustom,slidesToShow:1,slidesToScroll:1,asNavFor:b.find(".c-slider--nav")});
var d=b.find(".c-slider--nav").slick({prevArrow:prevArrowCustom,nextArrow:nextArrowCustom,slidesToShow:6,slidesToScroll:1,asNavFor:b.find(".c-slider--for"),focusOnSelect:true});
$(".c-gallery--cc__tab__link").on("click",function(j){j.preventDefault();
var g=$(this);
if(!g.closest(".c-gallery--cc__tab__item").hasClass("active")){var f=c.find('.slick-slide:not(".slick-cloned")[data-category-target="'+g.data("category")+'"]').index()-1;
g.closest(b).find(c).slick("slickGoTo",f);
g.closest(".c-gallery--cc__tab__item").addClass("active").siblings().removeClass("active")
}});
b.find(".video-link").on("click",function(f){f.preventDefault();
$(this).next(".c-video").initVideo()
});
c.on("beforeChange",function(j,g,n,l){var e=b.find('.slick-slide:not(".slick-cloned")').eq(l).data("category-target");
b.find(".c-gallery--cc__tab__link").closest(".c-gallery--cc__tab__item").removeClass("active");
b.find('.c-gallery--cc__tab__link[data-category="'+e+'"]').closest(".c-gallery--cc__tab__item").addClass("active");
var k=$(this);
k.closest(".c-gallery__wrappertop").find(".c-gallery__counter .slide-item-current").html(l+1);
var f=k.find(".slick-current .c-video");
f.find('.s7playpausebutton[selected="false"]').trigger("click");
f.attr("class","c-video").empty()
}).on("afterChange",function(k,j,o){var n=$(this);
var e=n.closest(".c-gallery--cc").find(".slick-active");
e.find(".lazy").lazy();
e.next().find(".lazy").lazy();
e.prev().find(".lazy").lazy();
setTimeout(function(){e.find(".lazy").lazy()
},50);
var g=o,f=b.find(".c-gallery--cc__caption"),l=$(this).find("[data-slick-index = "+g+"]");
f.text(l.find(".c-gallery--cc__text").text())
})
})
};
$(".c-gallery--cc").initGallery()
});
$(function(){$("[data-toggle-search]").on("click",function(j){j.preventDefault();
var c=$(this);
var f=$(c.data("toggle-search"));
var d=f.hasClass("open");
var g=f.find(".search-expand__input").outerWidth()+f.find(".search-expand__btn").outerWidth();
f.css("width",d?"":g);
f.toggleClass("open");
$(document).on("click",function(k){k.stopPropagation();
if(f.hasClass("open")&&$(k.target).closest(".search-expand").length===0){c.trigger("click")
}})
});
$(".c-search-result__search-trigger").on("click",function(){$(".c-search-result__expand").toggle();
$(this).find("i").toggleClass("fa-angle-up fa-angle-down")
});
var b=$(".c-search-result__results__item");
b.on("touchstart",function(){$(this).trigger("focus")
});
b.on("touchend",function(){$(this).trigger("blur")
})
});
$(function(){$(".c-fyc-light__form").each(function(){var b=$(this);
var e=b.attr("action").replace(".html","");
var f;
var d=b.next(".feedback__wrapper");
b.find("[name=date]").val("all");
b.find("[name=destination]").val("all");
b.find("[name=ship]").val("all");
b.find("[name=date]").trigger("chosen:updated");
b.find("[name=destination]").trigger("chosen:updated");
b.find("[name=ship]").trigger("chosen:updated");
var c=(function c(){$filter=b.find("select");
$filter.each(function(){var k=$(this);
var l=k.find("option");
var g=d.find("#"+k.attr("name")+"-filter").data("ssc-filter");
if(g!==""){var j=g;
l.each(function(){try{var o=$(this);
o.attr("disabled",j[o.val()]!==true)
}catch(n){console.log("init issue")
}})
}});
b.find(".destination-filter, .date-filter, .ship-filter").each(function(){var j=$(this);
var g=$("#current-"+j.attr("name")+"-filter").val();
j.find("option").each(function(){var k=$(this);
k.attr("selected",k.val()===g)
})
});
b.find(".chosen").trigger("chosen:updated");
return c
})();
b.on("change",function(j){j.preventDefault();
e=b.attr("action").replace(".html","");
f=b.find(".fragment-feedback").attr("href").replace(".html","");
var g=$(b.find(':not([name=":cq_csrf_token"])').serializeArray());
g.each(function(k,l){e+="."+l.name+"_"+l.value.replace(/\//g,"forwardSlash");
f+="."+l.name+"_"+l.value.replace(/\//g,"forwardSlash")
});
$.ajax({type:"GET",url:f+".html",success:function(k){b.next(".feedback__wrapper").html(k);
c()
}})
});
b.on("submit",function(o){var t=[];
t["silver-cloud"]=9;
t["silver-discoverer"]=8;
t["silver-explorer"]=2;
t["silver-galapagos"]=3;
t["silver-moon"]=12;
t["silver-muse"]=10;
t["silver-shadow"]=4;
t["silver-spirit"]=5;
t["silver-whisper"]=6;
t["silver-wind"]=7;
t["silver-wind"]=998;
t["silver-origin"]=9999;
var l=[];
l["africa-indian-ocean-cruise"]=3;
l["alaska-cruise"]=9;
l["antarctica-cruise"]=10;
l["arctic-greenland-cruise"]=11;
l["asia-cruise"]=13;
l["australia-new-zealand-cruise"]=25;
l["canada-new-england-cruise"]=5;
l["american-west-coast-cruise"]=28;
l["central-america-caribbean-cruise"]=6;
l["galapagos-islands-cruise"]=23;
l["mediterranean-cruise"]=1;
l["northern-europe-british-isles-cruise"]=2;
l["russian-far-east-cruise"]=21;
l["south-america-cruise"]=7;
l["south-pacific-islands-cruise"]=7;
l["transoceanic-cruise"]=8;
o.preventDefault();
var k=b.next(".feedback__wrapper");
var r="";
if(b.find("[name=destination]").val()!=null&&b.find("[name=destination]").val()!="all"){r="?destination="+l[b.find("[name=destination]").val()]
}if(b.find("[name=date]").val()!=null&&b.find("[name=date]").val()!="all"){r+=r!=""?"&":"?";
r+="departure="+b.find("[name=date]").val()
}if(b.find("[name=ship]").val()!=null&&b.find("[name=ship]").val()!="all"){r+=r!=""?"&":"?";
r+="ship="+t[b.find("[name=ship]").val()]
}var j=k.find("#current-destination-filter").val();
if(typeof j!="undefined"&&j!=null&&(j=="wc"||j=="gv")){var g=JSON.parse(JSON.stringify(k.find("#world-grand-voyage-path").data("ssc-path")));
var n=(j=="wc")?g.worldCruisePath:g.grandVoyageCruisePath;
window.location.href=n+".html"
}else{document.location.href=e+".html"+r
}})
})
});
$(function(){$("#archives").each(function(){var b=$(this);
b.find("> li > a").each(function(){var c=$(this);
c.on("click",function(g){g.preventDefault();
if($(".collapsing").length===0){var d=$(this);
var f=d.next("ul");
f.collapse("toggle");
b.find(".collapse").not(f).collapse("hide")
}else{return false
}})
})
})
});
function portv2_ss_read_more(){$("#ss_read_more").on("click",function(){if(!$(".port_v2__discover_text").hasClass("open")){var b=$(this).attr("data-text-less");
$(this).html(b);
$(".port_v2__discover_text").addClass("open").stop().slideDown(600)
}else{var b=$(this).attr("data-text-more");
$(this).html(b);
$(".port_v2__discover_text").removeClass("open").stop().slideUp(600)
}})
}function portV2_PageClass(){$("html").addClass("port_v2_page")
}function portV2_Accordion(b){$(b+" .port_v2__expander_header").on("click",function(){var d=$(this);
if(d.hasClass("no_description")){return
}var c=$(this).parent().outerHeight(true)-1;
if($(this).parent().hasClass("active")){$(this).parent().find(".port_v2__expander_content",this).slideUp("300");
$(this).parent().removeClass("active")
}else{$(".port_v2__expander_item.active .port_v2__expander_content").slideUp("300");
$(".port_v2__expander_item.active").removeClass("active");
$(this).parent().addClass("active");
$(this).parent().find(".port_v2__expander_content",this).slideDown("300");
setTimeout(function(){$("html, body").animate({scrollTop:d.offset().top-70},1000)
},350)
}})
}function portV2_AccordionSlice(b){$(b+" .port_v2__expander").each(function(){var c=$(this).find(".port_v2__expander_item:last-child").index();
if(c>4){$(this).parent().find(".port_v2__expander_slice").show()
}else{$(this).parent().find(".port_v2__expander_slice").hide()
}$(this).find(".port_v2__expander_item").slice(5).hide()
});
$(b+" .port_v2__expander_slice a").on("click",function(){if(!$(this).is("a.open")){var c=$(this);
var d=c.attr("data-less");
c.find("span").text(d);
c.find(".fa").removeClass("fa-angle-down").addClass("fa-angle-up");
c.addClass("open");
c.parent().parent().find(".port_v2__expander .port_v2__expander_item:hidden").each(function(){$(this).slideDown("300")
})
}else{var c=$(this);
var d=c.attr("data-more");
c.find("span").text(d);
c.find(".fa").removeClass("fa-angle-up").addClass("fa-angle-down");
c.removeClass("open");
c.parent().parent().find(".port_v2__expander .port_v2__expander_item").slice(5).slideUp("300")
}})
}function scrollToAnchor(){$(".scrolltoanchor").click(function(c){var b=$(this).attr("href");
var d=$(b).offset().top-90;
jQuery("body,html").animate({scrollTop:d},1000);
return false
})
}function portV2_matchingHeights(){$(".port_v2__post_title").matchHeight();
$(".port_v2__post_meta").matchHeight()
}function portV2_CarouselRelated(){var b=$("#port_v2__relatedcarousel");
b.on("init",function(){var c=$(this);
slickLazyLoad(".slick-slide",".port_v2__post_img",0,c,true)
});
b.slick({dots:true,arrows:true,infinite:true,slidesToShow:3,slidesToScroll:3,speed:700,prevArrow:'<button type="button" data-role="none" class="slick-prev slick-arrow c-slider-black-arrow" aria-label="Previous" role="button"><i class="fa fa-angle-left"></i></button>',nextArrow:'<button type="button" data-role="none" class="slick-next slick-arrow c-slider-black-arrow" aria-label="Next" role="button"><i class="fa fa-angle-right"></i></button>',responsive:[{breakpoint:1030,settings:{arrows:false,slidesToShow:3,slidesToScroll:3}},{breakpoint:991,settings:{arrows:false,slidesToShow:3,slidesToScroll:3}},{breakpoint:767,settings:{arrows:false,slidesToShow:2,slidesToScroll:2}},{breakpoint:480,settings:{arrows:false,slidesToShow:1,slidesToScroll:1}}]});
b.on("afterChange",function(e,d,g,f){var c=$(this);
slickLazyLoad(".slick-slide",".port_v2__post_img",g,c,true)
})
}function slickLazyLoad(k,g,e,n,l){var l=l;
var b=n.find(k+':not(".slick-cloned").slick-active').length;
var d=e;
var c=e+b;
var o=e-b;
for(i=0;
i<b;
i++){var j=n.find(k+':not(".slick-cloned"):eq('+d+")").find(g);
var f=j.attr("data-bg");
j.attr("style",f).removeAttr("data-bg");
if(l){var j=n.find(k+':not(".slick-cloned"):eq('+c+")").find(g);
var f=j.attr("data-bg");
j.attr("style",f).removeAttr("data-bg")
}if(l){var j=n.find(k+':not(".slick-cloned"):eq('+o+")").find(g);
var f=j.attr("data-bg");
j.attr("style",f).removeAttr("data-bg")
}d++;
c++;
o++
}}(function(){var k=[];
if($(".finyourport").length){$.ajax({url:$(".port-dest-search").data("path"),async:false,success:e,error:j});
function e(n,l,o){k=n.data
}function j(n,l,o){console.log(arguments)
}function f(){var o=[],n=[],r=[],l={};
if($.trim($('.finyourport [name="itinerary-port"]').val())===""){r=$('.finyourport [name="itinerary-port"] option:gt(1):not(:disabled)').map(function(t){return this.value
})
}else{r.push($.trim($('.finyourport [name="itinerary-port"]').val()))
}r=$.makeArray(r);
l=k.map(function(t){if(r.indexOf(t.port_city_id)>-1){n=[];
$.each(t.related_destinations,function(x,u){n.push(u.dest_name)
});
o+="<a href='"+t.port_path+".html' class='clearfix c-find-port__result__link'><span class='col-sm-5 c-find-port__result__city'>"+t.port_name+"</span><span class='col-sm-7 c-find-port__result__destination'>"+n.join(",")+"</span></a>"
}});
$(".c-find-port__result-list").html(o)
}function c(){var n=$.trim($('.finyourport [name="itinerary-port"]').val()),o=$.trim($('.finyourport [name="destination"]').val()),l=0;
if(n!==""){if(o===""){l=false
}else{l=1
}}else{if(o!==""){l=$('.finyourport [name="itinerary-port"] option:not(:disabled)').length-2
}else{l=k.length
}}if(l){$(".port-count-container").show();
$(".port-count").html(l)
}else{$(".port-count-container").hide()
}}function d(n,l){k.map(function(o){if(o.port_city_id==l){$.each(o.related_destinations,function(t,r){if(n===""){$('.finyourport [name="destination"]').children('[value="'+r.dest_id+'"]').removeAttr("disabled")
}else{$('.finyourport [name="destination"]').children('[value="'+n+'"]').removeAttr("disabled")
}})
}});
$('.finyourport [name="destination"] option:lt(2)').removeAttr("disabled");
$('.finyourport [name="destination"]').trigger("chosen:updated")
}function g(l,n){k.map(function(o){var r=o.related_destinations.map(function(t){return t.dest_id
});
if(r.indexOf(n)!==-1){if(l===""){$('.finyourport [name="itinerary-port"]').children('[value="'+o.port_city_id+'"]').removeAttr("disabled")
}else{$('.finyourport [name="itinerary-port"]').children('[value="'+l+'"]').removeAttr("disabled")
}}});
$('.finyourport [name="itinerary-port"] option:lt(2)').removeAttr("disabled");
$('.finyourport [name="itinerary-port"]').trigger("chosen:updated")
}function b(){$(".chosen-select").chosen({display_disabled_options:false});
$('[name="itinerary-port"]').off("change").on("change",function(){var l=this.value,n=$.trim($('[name="destination"]').val());
if(n===""){$('.finyourport [name="destination"] option').removeAttr("disabled")
}if(l.trim()===""){if(n!==""){g(l,n)
}else{$('.finyourport [name="itinerary-port"] option').removeAttr("disabled")
}$('.finyourport [name="itinerary-port"], .finyourport [name="destination"]').trigger("chosen:updated");
c();
return
}$('.finyourport [name="destination"] option').attr("disabled","disabled");
d(n,l);
c()
});
$('.finyourport [name="destination"]').off("change").on("change",function(){var n=this.value,l=$.trim($('[name="itinerary-port"]').val());
if(l===""){$('.finyourport [name="itinerary-port"] option').removeAttr("disabled")
}if(n.trim()===""){if(l!==""){d(n,l)
}else{$('.finyourport [name="destination"] option').removeAttr("disabled")
}$('.finyourport [name="itinerary-port"], .finyourport [name="destination"]').trigger("chosen:updated");
c();
return
}$('.finyourport [name="itinerary-port"] option').attr("disabled","disabled");
g(l,n);
c()
});
$("#counter").off("click").on("click",f)
}$(document).ready(b)
}})();
$(function(){$(".video-link-button-config-only").on("click",function(f){f.preventDefault();
var b=$(this),d=b.attr("href"),g=b.data("target"),c=$(g);
c.modal("show");
c.on("shown.bs.modal",function(k){var j=$(this);
j.off("shown.bs.modal");
j.find(".modal-dialog").load(d,function(){$(this).find(".c-video").initVideo()
})
})
})
});
$(function(){$(".c-single-dining .c-dining__item-expander a").on("click",function(f){f.preventDefault();
var b=$(this),d=b.closest(".c-dining-gallery");
var c=0;
if(d.hasClass("open")){d.css("height",d.outerHeight());
d.animate({height:d.find("> div").first().outerHeight()},600,function(){var e=d.closest(".c-cruise-ship-info").length?1:0;
d.css("height",d.height()).find("> div:gt("+e+"):not(.c-dining__item-expander)").hide();
$(this).css("height","").removeClass("open");
$("html, body").animate({scrollTop:d.offset().top-$(".c-header").height()},0)
})
}else{d.css("height",d.height()).find("> div").show();
d.children().each(function(){c=c+$(this).outerHeight(true)
});
d.find(".lazy").lazy();
d.animate({height:c},1000,function(){$(this).css("height","").addClass("open")
})
}});
$(".c-dining-gallery").find(".lazy").lazy()
});
$(function(){$(".c-single-suite .c-suite__item-expander a").on("click",function(f){f.preventDefault();
var b=$(this),d=b.closest(".c-suite-gallery");
var c=0;
if(d.hasClass("open")){d.css("height",d.outerHeight());
d.animate({height:d.find("> div").first().outerHeight()},600,function(){var e=d.closest(".c-cruise-ship-info").length?1:0;
d.css("height",d.height()).find("> div:gt("+e+"):not(.c-suite__item-expander)").hide();
$(this).css("height","").removeClass("open");
$("html, body").animate({scrollTop:d.offset().top-$(".c-header").height()},0)
})
}else{d.css("height",d.height()).find("> div").show();
d.children().each(function(){c=c+$(this).outerHeight(true)
});
d.find(".lazy").lazy();
d.animate({height:c},1000,function(){$(this).css("height","").addClass("open")
})
}});
$(".c-suite-gallery").find(".lazy").lazy()
});
$(document).ready(function(){if($(".c-contactus").length){var d=$(this);
var b=null;
try{b=JSON.parse($.CookieManager.getCookie("userInfo"))
}catch(e){$.CookieManager.setCookie("userInfo",JSON.stringify(""))
}var c,f;
$.each(JSON.parse(f).subjects,function(g,j){$("#subject").append('<option rel="'+g+'" value="'+JSON.parse(j).subject+'">'+JSON.parse(j).subject+"</option>");
if(b){$("#subject").val(b.subject)
}$("#subject").trigger("chosen:updated");
$("#subject").change(function(){$("#inquiry").find("option:gt(0)").remove();
c=$(this).find("option:selected").attr("rel");
$.each(JSON.parse(JSON.parse(f).subjects[c]).inquiries,function(l,k){$("#inquiry").append('<option rel="'+l+'" value="'+k.inquiry+'">'+k.inquiry+"</option>");
if(b){$("#inquiry").val(b.inquiry)
}$("#inquiry").trigger("chosen:updated")
});
$("#inquiry").change(function(){var k=$(this).find("option:selected").attr("rel");
$("#from_email").val((JSON.parse(JSON.parse(f).subjects[c]).inquiries[k]).email)
})
})
});
$("#inquiry").change(function(){var g=$(this).find("option:selected").attr("rel");
$("#from_email").val((JSON.parse(JSON.parse(f).subjects[c]).inquiries[g]).email)
});
if(b){$("#inquiry").find("option:gt(0)").remove();
c=$(this).find("option:selected").attr("rel");
$.each(JSON.parse(JSON.parse(f).subjects[c]).inquiries,function(j,g){$("#inquiry").append('<option rel="'+j+'" value="'+g.inquiry+'">'+g.inquiry+"</option>");
if(b){$("#inquiry").val(b.inquiry)
}$("#inquiry").trigger("chosen:updated")
});
$("#from_email").val(b.from_email)
}}});
(function(){$(".steveandsilversea-video-link").click(function(c){var b=setInterval(function(){if($(".modal .c-steveandsilversea__gallery .modal-body").length>0){clearInterval(b);
var d=$(".modal .c-steveandsilversea__gallery .slide-item-total").html();
if(parseInt(d)==1){$(".modal .c-steveandsilversea__gallery  .c-gallery__counter").hide();
$(".modal .c-steveandsilversea__gallery  .c-slider--nav").hide()
}}},10)
})
})();
document.addEventListener("webkitfullscreenchange",exitHandler);
document.addEventListener("mozfullscreenchange",exitHandler);
document.addEventListener("msfullscreenchange",exitHandler);
document.addEventListener("fullscreenchange",exitHandler);
function exitHandler(){if(document.webkitFullscreenEnabled||document.fullscreenEnabled||document.msFullscreenEnabled||document.mozFullScreenEnabled){$(document).on("webkitfullscreenchange mozfullscreenchange fullscreenchange msfullscreenchange",function(b){$("#steveandsilversea-modal-dialog-close").trigger("click")
})
}}$(function(){window.linkEventToModalDetailMobile=function c(){var d=$(".modal-body");
if(d.hasClass("automatic-modal-body-modal-detail-mobile")){$(".automatic-modal-body-modal-detail-mobile").parent().parent().parent().css("display","block");
$(".automatic-modal-body-modal-detail-mobile").parent().parent().parent().css("overflow-y","hidden");
$(".automatic-modal-body-modal-detail-mobile").parent().parent().parent().css("top","0%");
$(".automatic-modal-body-modal-detail-mobile").css("overflow-y","scroll");
$(".automatic-modal-body-modal-detail-mobile").css("max-height","100vh");
$(".automatic-modal-body-modal-detail-mobile").css("min-height","100vh");
$(".automatic-modal-body-modal-detail-mobile").parent().css("top","0%");
$(".automatic-modal-body-modal-detail-mobile").parent().parent().css("padding-top","0px");
if(window.scrollSupport!=null&&window.scrollSupport){window.iNoBounce.enable()
}d.find(".modal-detail-features-expand a.view_all").on("click",function(f){f.preventDefault();
$(".expand-ul li:nth-of-type(1n+10)").stop().css("display","list-item").hide().slideDown();
$(".modal-detail-features-expand a.view_less").show();
$(this).hide()
});
d.find(".modal-detail-features-expand a.view_less").on("click",function(f){f.preventDefault();
$(".modal-detail-features-expand a.view_all").show();
$(".expand-ul li:nth-of-type(1n+10)").stop().slideUp();
$(this).hide()
});
if(window.hasOwnProperty("virtualTour")&&window.virtualTour!=null){window.virtualTour.destroy();
window.virtualTour=null
}}};
window.linkEventToModalDetailDesktop=function(){var d=$(".modal-body");
if(d.hasClass("automatic-modal-body-modal-detail-desktop")){d.parent().parent().parent().css("top","8%");
d.find(".c-modal-detail-virtual-tour-lightbox").on("click",function(j){j.preventDefault();
if(!window.hasOwnProperty("virtualTour")||window.virtualTour==null){var f=$("#c-modal-detail-modal-virtual-tour-containerDiv").data().image;
var g=setInterval(function(){if($("#virtualtour-tab").hasClass("active")){clearInterval(g);
if(f!=null){window.virtualTour=PhotoSphereViewer({container:"c-modal-detail-modal-virtual-tour-containerDiv",panorama:f,anim_speed:"0.4rpm",move_speed:1,time_anim:"1000",min_fov:10,usexmpdata:false,default_fov:100,navbar:["autorotate","zoom","spacer-1","caption","gyroscope","fullscreen"]})
}}},500)
}});
d.find("#features-tab.c-navtab__link--button a").on("click",function(f){$(".modal-body .tab-content").addClass("tab-content-grey")
});
d.find(".c-navtab__link--button:not(#features-tab) a").on("click",function(f){$(".modal-body .tab-content").removeClass("tab-content-grey")
})
}};
$(window).on("resize",function(){var e=$(".modal");
var g=e.find(".modal-body");
if(g.hasClass("automatic-modal-body-modal-detail")){var j=false;
if(g.hasClass("automatic-modal-body-modal-detail-desktop")){if($(window).width()<=768){j=true
}}else{if(g.hasClass("automatic-modal-body-modal-detail-mobile")){if($(window).width()>768){j=true
}}}if(j){var d=$(".c-modaldetail-link").data("href");
var f=$(".c-modaldetail-link").data("target");
$(f+" .modal-content").empty();
$.get(d,function(k){if(window.$slickSlider!=null){window.$slickSlider.slick("unslick")
}$(f+" .modal-content").html(k);
b($(f+" .modal-body"))
})
}}});
$(".modal-detail-link-ajax").on("click",function(j){j.preventDefault();
$("html").addClass("no-scroll-html");
$("body").addClass("no-scroll-body");
var d=$(this),g=d.attr("href"),k=d.data("target"),f=$(k);
f.modal("show");
f.on("shown.bs.modal",function(n){var l=$(this);
l.off("shown.bs.modal");
l.find(".modal-content").load(g,function(){var e=l.find(".modal-body");
history.pushState(null,null,"#modal");
b(e)
})
})
});
function b(d){var f=d.find(".c-slider").slick({slidesToShow:1,slidesToScroll:1});
window.$slickSlider=f;
var e=f.find(".slick-slide:not(.slick-cloned)").length;
$(".modal").find(".c-modal-detail-modal-description__counter .slide-item-current").html(1);
$(".modal").find(".c-modal-detail-modal-description__counter .slide-item-total").html(e);
if(e==1){$(".c-modal-detail-modal-description__counter").css("display","none")
}f.on("beforeChange",function(j,g,n,k){var l=$(this);
$(".modal").find(".c-modal-detail-modal-description__counter .slide-item-current").html(k+1)
});
d.find("#descr-tab").on("click",function(g){if(f!=null){f.slick("slickGoTo",0)
}});
d.find(".show-deck-image").on("click",function(g){g.preventDefault();
var j=$(this).attr("id");
$("#modal-detail-location a:not(#"+j+")").removeClass("activeDeck");
$("#modal-detail-location img:not(#deck-"+j+")").addClass("hidden");
$(this).addClass("activeDeck");
$("#deck-"+j).removeClass("hidden")
})
}});
if($(".c-footer-2018 .c-footer-other-link").length>0){$(function(){var e=$(".c-footer-2018 .c-footer-other-link");
var b=e.find(".other-link-accordion-title");
b.on("click",function(k){k.preventDefault();
k.stopPropagation();
var l=e.find(".other-link-row-links");
var n=e.find(".other-link-row-search");
var j=e.find(".container-accordion-content");
if(l.is(":visible")){j.slideUp();
l.hide();
b.find("i").removeClass("fa-angle-up").addClass("fa-angle-down")
}else{n.hide();
l.show();
j.slideDown();
b.find("i").removeClass("fa-angle-down").addClass("fa-angle-up");
var g=setInterval(function(){if(j.is(":visible")){clearInterval(g);
$("html, body").animate({scrollTop:l.offset().top},2000)
}},100)
}});
var c=e.find(".other-link-accordion-search");
c.on("click",function(k){k.preventDefault();
k.stopPropagation();
var n=e.find(".other-link-row-search");
var l=e.find(".other-link-row-links");
var j=e.find(".container-accordion-content");
if(n.is(":visible")){j.slideUp();
n.hide()
}else{l.hide();
n.show();
j.slideDown();
b.find("i").removeClass("fa-angle-up").addClass("fa-angle-down");
$("#other-link-input-search").focus();
var g=setInterval(function(){if(j.is(":visible")){clearInterval(g);
$("html, body").animate({scrollTop:$("#other-link-input-search").offset().top},2000)
}},100)
}});
var d=e.find(".other-link-mobile-search-form-input");
var f=e.find(".other-link-mobile-search-form button");
d.on("click",function(g){g.preventDefault();
g.stopPropagation();
f.show()
});
d.focusout(function(){if(d.val().length==0){f.hide()
}})
})
}$(document).on("shown.bs.modal",function(g){var c=$(".modal.lightbox");
var f=$(this).find(".modal-body");
var d=$(this).find(".modal-content");
var b=$(this).find(".lightbox-close");
if(f.hasClass("cruise-2018-offers")||f.find(".cruise-2018").length>0){setTopLightboxModal(0);
$(".cruise-2018-modal-exclusive-offer-title .open, .cruise-2018-modal-exclusive-offer-title .times, .cruise-2018-offers .title").each(function(){$(this).html($(this).html().toLowerCase())
});
history.pushState(null,null,"#"+$(g.relatedTarget).attr("id"))
}if($("body").hasClass("cruise")&&c.find(".aem-Grid").length>0){setTopLightboxModal(0);
c.find(".modal-header").hide()
}if($(".cruise-2018, .combocruise-2018").length>0){setTimeout(function(){$(".modal.lightbox").css("visibility","visible")
},1500)
}});
$(".modal.lightbox").on("hidden.bs.modal",function(f){var c=$(".modal.lightbox");
c.find(".modal-dialog").removeClass("modal-larger");
var b=$(this).find(".lightbox-close");
var d=$(this).find(".modal-content");
d.removeAttr("style");
b.removeAttr("style");
c.css("visibility","hidden");
history.replaceState(null,null,location.href.replace(location.hash,""))
});
function setTopLightboxModal(n,c){var t=$(".modal.lightbox");
var k=t.find(".lightbox-close");
var b=t.find(".modal-dialog");
var d=t.find(".modal-content");
var f=d.height();
var r=$(window).height();
var l=t.find(".modal-content").find("picture, "+c);
if($(window).width()>768){try{if(l.length>0&&n>0){f=f+n
}var o=Math.round((f/r)*100)/100;
if(f>r||o>=0.62){k.css("top","0px");
d.css("top","45px")
}else{if(o<0.62){var j=Math.round(r*0.3)-45;
d.css("top",j+"px");
k.css("top",j-45+"px")
}}}catch(g){console.log(g)
}}else{k.css("top","0px");
d.css("top","45px")
}t.css("visibility","visible")
}(function(){var c=(function(){return function(){var d=$(".activate-progressbar .slick-list");
d.each(function(){var j=$(this);
var g=j.parent().find(".slick-dots").width();
if(g>768){g=630
}var f=j.parent().find("ul.slick-dots li");
var k=f.length;
var e=Math.floor(g/k)-1;
f.css("width",e+"px")
})
}
})();
var b=(function(){$(".silversea-slider").each(function(){var l=$(this);
if(l){var e={dots:l.hasClass("activate-progressbar"),draggable:true,slidesToShow:l.data("ssc-slides")||3,slidesToScroll:l.data("ssc-slides")||3,responsive:[]};
var d=l.data("ssc-breakpoint");
if(d){e.responsive.push({breakpoint:d,settings:{slidesToShow:l.data("ssc-slides")-1||3,slidesToScroll:l.data("ssc-slides")-1||3}})
}var j=l.data("ssc-breakpoint-tablet");
if(j){e.responsive.push({breakpoint:j,settings:{arrows:false,slidesToShow:l.data("ssc-slides-to-show-tablet")||1,slidesToScroll:l.data("ssc-slides-to-scroll-tablet")||1}})
}var g=l.data("ssc-breakpoint-mobile"),f=l.attr("ssc-centermode-mobile")=="true"?true:false,k=l.attr("ssc-arrow-mobile")=="true"?true:l.attr("ssc-arrow-mobile")=="false"?false:true;
if(g){e.responsive.push({breakpoint:g,settings:{arrows:k,centerMode:f,slidesToShow:l.data("ssc-slides-to-show-mobile")||1,slidesToScroll:l.data("ssc-slides-to-scroll-mobile")||1,centerPadding:"40px"}})
}l.slick(e);
l.on("afterChange",function(o,n,r){loadLazyImageInSlider($(this),"silversea-slide")
});
loadLazyImageInSlider(l);
l.css("visibility","visible")
}c()
})
});
$(function(){b();
$(window).resize(sscThrottled(function(){c()
}))
})
})();