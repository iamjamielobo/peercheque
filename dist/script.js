$(document).ready((function(){emailjs&&emailjs.init("user_d5YOhq2lPZOSZcNXgB5vb"),$(".hamburger").click((function(){$(this).toggleClass("_active"),$(".nav-mobile-list").toggleClass("_active")})),$(".js-form-submit").click((function(e){e.preventDefault();var r=$("#js-name"),a=r.val(),s=$("#js-email"),o=s.val(),l=$("#js-phone"),f=l.val(),t=$("#js-profile"),i=t.val(),m=$("#js-what"),n=m.val();if(""===a?(r.parent(".form-field").addClass("_error"),r.focus()):r.parent(".form-field").removeClass("_error"),""!==o&&validateEmail(o)?s.parent(".form-field").removeClass("_error"):(s.parent(".form-field").addClass("_error"),s.focus()),""===f?(l.parent(".form-field").addClass("_error"),l.focus()):l.parent(".form-field").removeClass("_error"),""===i?(t.parent(".form-field").addClass("_error"),t.focus()):t.parent(".form-field").removeClass("_error"),""===n?(m.parent(".form-field").addClass("_error"),m.focus()):m.parent(".form-field").removeClass("_error"),""!==a&&""!==f&&""!==o&&""!==i&&""!==n){r.parent(".form-field").removeClass("_error"),s.parent(".form-field").removeClass("_error"),l.parent(".form-field").removeClass("_error"),t.parent(".form-field").removeClass("_error"),m.parent(".form-field").removeClass("_error");var d={name:a,email:o,phone:f,profile:i,what:n};emailjs.send("service_011qhag","template_6jwryox",d).then((function(e){console.log("SUCCESS!",e.status,e.text),$(".success-msg").addClass("_show"),r.val(""),s.val(""),l.val(""),t.val(""),m.val(""),setTimeout((function(){$(".success-msg").removeClass("_show")}),5e3)}),(function(e){console.log("FAILED...",e)}))}}))}));var validateEmail=e=>e.match(/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
//# sourceMappingURL=script.js.map