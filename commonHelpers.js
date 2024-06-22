import{a}from"./assets/vendor-bdb8a163.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))c(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const r of t.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&c(r)}).observe(document,{childList:!0,subtree:!0});function i(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function c(e){if(e.ep)return;e.ep=!0;const t=i(e);fetch(e.href,t)}})();a.defaults.baseURL="https://dummyjson.com/recipes";async function l(){const{data:s}=await a("");return s}function u(s,o){const i=JSON.stringify(o);localStorage.setItem(s,i)}const n={recipesList:document.querySelector(".recipes"),bodyEl:document.querySelector("body"),switchEl:document.querySelector("#switch-theme")};function f(s){const o=s.map(({id:i,image:c,name:e,difficulty:t,cuisine:r})=>`<li class="recipe-item" data-id='${i}'>
    <img
        class="recipe-image"
        src=${c}
        alt=${e}
    />
    <div class="recipe-dscr">
        <p class="recipe-name">Name: ${e}</p>
        <p class="recipe-cuisine">Cuisine: ${r}</p>
        <p class="recipe-difficulty">Difficulty: ${t}</p>
    </div>;`).join("");n.recipesList.insertAdjacentHTML("beforeend",o)}function m(s){n.bodyEl.classList.toggle("dark-theme");const o="dark",i="theme";n.bodyEl.classList.contains("dark-theme")&&u(i,o)}async function d(s){const{recipes:o}=await l();f(o)}document.addEventListener("DOMContentLoaded",d);document.activeElement("DOMContentLoaded",onLoadedDomTheme);document.addEventListener("DOMContentLoaded",d);n.switchEl.addEventListener("click",m);
//# sourceMappingURL=commonHelpers.js.map
