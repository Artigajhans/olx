import{v as f,r as o}from"./index-DKhINmh2.js";var c={exports:{}};/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/(function(s){(function(){var a={}.hasOwnProperty;function r(){for(var t="",n=0;n<arguments.length;n++){var e=arguments[n];e&&(t=u(t,p(e)))}return t}function p(t){if(typeof t=="string"||typeof t=="number")return t;if(typeof t!="object")return"";if(Array.isArray(t))return r.apply(null,t);if(t.toString!==Object.prototype.toString&&!t.toString.toString().includes("[native code]"))return t.toString();var n="";for(var e in t)a.call(t,e)&&t[e]&&(n=u(n,e));return n}function u(t,n){return n?t?t+" "+n:t+n:t}s.exports?(r.default=r,s.exports=r):window.classNames=r})()})(c);var x=c.exports;const v=f(x),l=["xxl","xl","lg","md","sm","xs"],m="xs",i=o.createContext({prefixes:{},breakpoints:l,minBreakpoint:m}),{Consumer:d,Provider:C}=i;function E(s,a){const{prefixes:r}=o.useContext(i);return s||r[a]||a}function b(){const{breakpoints:s}=o.useContext(i);return s}function y(){const{minBreakpoint:s}=o.useContext(i);return s}function A(){const{dir:s}=o.useContext(i);return s==="rtl"}export{A as a,b,v as c,y as d,E as u};
