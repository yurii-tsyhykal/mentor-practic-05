import{a}from"./assets/vendor-bdb8a163.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))c(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const s of t.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&c(s)}).observe(document,{childList:!0,subtree:!0});function o(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function c(e){if(e.ep)return;e.ep=!0;const t=o(e);fetch(e.href,t)}})();a.defaults.baseURL="https://dummyjson.com/recipes";async function d(){const{data:i}=await a("");return i}const n={recipesList:document.querySelector(".recipes"),bodyEl:document.querySelector("body"),switchEl:document.querySelector("#switch-theme")};function l(i){const r=i.map(({id:o,image:c,name:e,difficulty:t,cuisine:s})=>`<li class="recipe-item" data-id='${o}'>
    <img
        class="recipe-image"
        src=${c}
        alt=${e}
    />
    <div class="recipe-dscr">
        <p class="recipe-name">Name: ${e}</p>
        <p class="recipe-cuisine">Cuisine: ${s}</p>
        <p class="recipe-difficulty">Difficulty: ${t}</p>
    </div>;`).join("");n.recipesList.insertAdjacentHTML("beforeend",r)}function u(i){n.bodyEl.classList.toggle("dark-theme")}async function p(i){const{recipes:r}=await d();l(r)}document.addEventListener("DOMContentLoaded",p);n.switchEl.addEventListener("click",u);
//# sourceMappingURL=commonHelpers.js.map
