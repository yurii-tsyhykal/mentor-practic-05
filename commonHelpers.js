import{a}from"./assets/vendor-bdb8a163.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const r of o.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&n(r)}).observe(document,{childList:!0,subtree:!0});function c(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(e){if(e.ep)return;e.ep=!0;const o=c(e);fetch(e.href,o)}})();a.defaults.baseURL="https://dummyjson.com/recipes";async function d(){const{data:s}=await a("");return s}function l(s,t){const c=JSON.stringify(t);localStorage.setItem(s,c)}function u(s){const t=localStorage.getItem(s);try{return JSON.parse(t)}catch{return t}}const i={recipesList:document.querySelector(".recipes"),bodyEl:document.querySelector("body"),switchEl:document.querySelector("#switch-theme")};function m(s){const t=s.map(({id:c,image:n,name:e,difficulty:o,cuisine:r})=>`<li class="recipe-item" data-id='${c}'>
    <img
        class="recipe-image"
        src=${n}
        alt=${e}
    />
    <div class="recipe-dscr">
        <p class="recipe-name">Name: ${e}</p>
        <p class="recipe-cuisine">Cuisine: ${r}</p>
        <p class="recipe-difficulty">Difficulty: ${o}</p>
    </div>;`).join("");i.recipesList.insertAdjacentHTML("beforeend",t)}function f(s){i.bodyEl.classList.toggle("dark-theme");const t="dark",c="theme";i.bodyEl.classList.contains("dark-theme")&&l(c,t)}async function p(s){const{recipes:t}=await d();m(t)}function y(){u("theme")==="dark"&&i.bodyEl.classList.toggle("dark-theme")}document.addEventListener("DOMContentLoaded",y);document.addEventListener("DOMContentLoaded",p);i.switchEl.addEventListener("click",f);
//# sourceMappingURL=commonHelpers.js.map
