import{a}from"./assets/vendor-bdb8a163.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))n(t);new MutationObserver(t=>{for(const c of t)if(c.type==="childList")for(const r of c.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&n(r)}).observe(document,{childList:!0,subtree:!0});function o(t){const c={};return t.integrity&&(c.integrity=t.integrity),t.referrerPolicy&&(c.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?c.credentials="include":t.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function n(t){if(t.ep)return;t.ep=!0;const c=o(t);fetch(t.href,c)}})();a.defaults.baseURL="https://dummyjson.com/recipes";async function u(){const{data:s}=await a("");return s}async function m(s){const{data:e}=await a(`/${s}`);return e}function f(s,e){const o=JSON.stringify(e);localStorage.setItem(s,o)}function y(s){const e=localStorage.getItem(s);try{return JSON.parse(e)}catch{return e}}const i={recipesList:document.querySelector(".recipes"),bodyEl:document.querySelector("body"),switchEl:document.querySelector("#switch-theme"),backdrop:document.querySelector(".backdrop"),modal:document.querySelector(".modal"),parcing:document.querySelector(".parcing")};function b(s){const e=s.map(({id:o,image:n,name:t,difficulty:c,cuisine:r})=>`<li class="recipe-item" data-id='${o}'>
    <img
        class="recipe-image"
        src=${n}
        alt=${t}
    />
    <div class="recipe-dscr">
        <p class="recipe-name">Name: ${t}</p>
        <p class="recipe-cuisine">Cuisine: ${r}</p>
        <p class="recipe-difficulty">Difficulty: ${c}</p>
    </div>`).join("");i.recipesList.insertAdjacentHTML("beforeend",e)}function g({name:s,difficulty:e,cuisine:o,caloriesPerServing:n,image:t,ingredients:c,instructions:r,prepTimeMinutes:d,cookTimeMinutes:l}){const p=`<h2 class="food-name"><b>Name:</b> ${s}</h2>
          <div class="common-container">
            <div class="descr-container">
              <p class="food-cuisine"><b>Cuisine:</b> ${o}</p>
              <p class="difficulty"><b>Difficulty:</b> ${e}</p>
              <p class="ingredients"><b>Inredients:</b> ${c}</p>
              <p class="instructions"><b>Instructions:</b> ${r}</p>
              <p class="prep-time"><b>Preparation time:</b> ${d} minutes</p>
              <p class="cook-time"><b>Cook time:</b> ${l} minutes</p>
              <p class="calories"><b>Calories:</b> ${n}</p>
            </div>
            <img class="large-image" src="${t}" alt="Food image" />
          </div>`;i.parcing.insertAdjacentHTML("beforeend",p)}function L(s){i.bodyEl.classList.toggle("dark-theme");const e="dark",o="theme";i.bodyEl.classList.contains("dark-theme")&&f(o,e)}async function h(s){const{recipes:e}=await u();b(e)}async function k(s){if(!s.target.closest("li"))return;i.parcing.innerHTML="";const e=s.target.closest("li").dataset.id,o=await m(e);i.backdrop.classList.remove("hidden"),g(o),i.backdrop.addEventListener("click",n=>{(n.target.classList.contains("backdrop")||n.target.classList.contains("close-button"))&&(i.backdrop.classList.add("hidden"),i.backdrop.removeEventListener)}),document.addEventListener("keyup",n=>{n.key==="Escape"&&(i.backdrop.classList.add("hidden"),i.backdrop.removeEventListener)})}function v(){y("theme")==="dark"&&i.bodyEl.classList.toggle("dark-theme")}document.addEventListener("DOMContentLoaded",v);document.addEventListener("DOMContentLoaded",h);document.addEventListener("click",k);i.switchEl.addEventListener("click",L);
//# sourceMappingURL=commonHelpers.js.map
