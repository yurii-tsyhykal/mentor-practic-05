import{a as d}from"./assets/vendor-bdb8a163.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))c(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const r of o.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&c(r)}).observe(document,{childList:!0,subtree:!0});function s(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function c(i){if(i.ep)return;i.ep=!0;const o=s(i);fetch(i.href,o)}})();function f(t,e){const s=[];return e.forEach(c=>{t.includes(c.difficulty)&&s.push(c)}),s}d.defaults.baseURL="https://dummyjson.com/recipes";async function h(){const{data:t}=await d("");return t}async function y(t){const{data:e}=await d(`/${t}`);return e}async function g(t){const{data:e}=await d("/search",{params:{q:t}});return e}const n={recipesList:document.querySelector(".recipes"),bodyEl:document.querySelector("body"),switchEl:document.querySelector("#switch-theme"),form:document.querySelector(".form"),backdrop:document.querySelector(".backdrop"),modal:document.querySelector(".modal"),parcing:document.querySelector(".parcing"),recipes:"",applyFilter:document.querySelector(".filter"),theme:document.querySelector(".theme")};function a(t){n.recipesList.innerHTML="";const e=t.map(({id:s,image:c,name:i,difficulty:o,cuisine:r})=>`<li class="recipe-item" data-id='${s}'>
    <img
        class="recipe-image"
        src=${c}
        alt=${i}
    />
    <div class="recipe-dscr">
        <p class="recipe-name">Name: ${i}</p>
        <p class="recipe-cuisine">Cuisine: ${r}</p>
        <p class="recipe-difficulty">Difficulty: ${o}</p>
    </div>`).join("");n.recipesList.insertAdjacentHTML("beforeend",e)}function L({name:t,difficulty:e,cuisine:s,caloriesPerServing:c,image:i,ingredients:o,instructions:r,prepTimeMinutes:u,cookTimeMinutes:m}){const p=`<h2 class="food-name"><b>Name:</b> ${t}</h2>
          <div class="common-container">
            <div class="descr-container">
              <p class="food-cuisine"><b>Cuisine:</b> ${s}</p>
              <p class="difficulty"><b>Difficulty:</b> ${e}</p>
              <p class="ingredients"><b>Inredients:</b> ${o}</p>
              <p class="instructions"><b>Instructions:</b> ${r}</p>
              <p class="prep-time"><b>Preparation time:</b> ${u} minutes</p>
              <p class="cook-time"><b>Cook time:</b> ${m} minutes</p>
              <p class="calories"><b>Calories:</b> ${c}</p>
            </div>
            <img class="large-image" src="${i}" alt="Food image" />
          </div>`;n.parcing.insertAdjacentHTML("beforeend",p)}async function v(t){t.preventDefault();const e=t.target.elements.query.value.trim(),{recipes:s}=await g(e);n.recipes=s,s.length?a(s):n.recipesList.innerHTML='<h2 class="empty-result">No matches found</h2>'}function l(t,e){const s=JSON.stringify(e);localStorage.setItem(t,s)}function b(t){const e=localStorage.getItem(t);try{return JSON.parse(e)}catch{return e}}function k(t){n.bodyEl.classList.toggle("dark-theme"),n.modal.classList.toggle("dark-theme");const e=document.querySelector(".sun-container"),s=document.querySelector(".moon-container");n.bodyEl.classList.contains("dark-theme")?(l("theme","dark"),e.classList.add("visually-hidden"),s.classList.remove("visually-hidden")):(l("theme","white"),s.classList.add("visually-hidden"),e.classList.remove("visually-hidden"))}async function S(t){const{recipes:e}=await h();n.recipes=e,a(e)}function E(t){t.preventDefault();const e=t.target.form,s=[];for(const i of e)i.checked&&s.push(i.value);if(!s.length)return a(n.recipes);const c=f(s,n.recipes);c.length?a(c):n.recipesList.innerHTML='<h2 class="empty-result">No matches found</h2>'}async function q(t){if(!t.target.closest("li"))return;n.parcing.innerHTML="";const e=t.target.closest("li").dataset.id,s=await y(e);n.backdrop.classList.remove("hidden"),L(s),n.backdrop.addEventListener("click",c=>{(c.target.classList.contains("backdrop")||c.target.classList.contains("close-button"))&&(n.backdrop.classList.add("hidden"),n.backdrop.removeEventListener)}),document.addEventListener("keyup",c=>{c.key==="Escape"&&(n.backdrop.classList.add("hidden"),n.backdrop.removeEventListener)})}function $(){const t="theme",e=b(t)??"light";l(t,e),n.theme.innerHTML=`
    <div class="moon-container">
      <svg class="moon" height="30" width="30">
        <use href="./src/img/icons.svg#moon"></use>
      </svg>
    </div>
    <div class="sun-container">
      <svg class="sun" height="30" width="30">
        <use href="./src/img/icons.svg#sun"></use>
      </svg>
    </div>`;const s=document.querySelector(".sun-container"),c=document.querySelector(".moon-container");e==="dark"?(n.bodyEl.classList.add("dark-theme"),n.modal.classList.add("dark-theme"),s.classList.add("visually-hidden")):c.classList.add("visually-hidden")}document.addEventListener("DOMContentLoaded",$);document.addEventListener("DOMContentLoaded",S);document.addEventListener("click",q);n.form.addEventListener("submit",v);n.switchEl.addEventListener("click",k);n.applyFilter.addEventListener("change",E);
//# sourceMappingURL=commonHelpers.js.map
