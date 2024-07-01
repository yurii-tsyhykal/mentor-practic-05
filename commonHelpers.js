import{a as d}from"./assets/vendor-bdb8a163.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const c of document.querySelectorAll('link[rel="modulepreload"]'))i(c);new MutationObserver(c=>{for(const o of c)if(o.type==="childList")for(const r of o.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&i(r)}).observe(document,{childList:!0,subtree:!0});function s(c){const o={};return c.integrity&&(o.integrity=c.integrity),c.referrerPolicy&&(o.referrerPolicy=c.referrerPolicy),c.crossOrigin==="use-credentials"?o.credentials="include":c.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(c){if(c.ep)return;c.ep=!0;const o=s(c);fetch(c.href,o)}})();function f(t,e){const s=[];return e.forEach(i=>{t.includes(i.difficulty)&&s.push(i)}),s}d.defaults.baseURL="https://dummyjson.com/recipes";async function y(){const{data:t}=await d("");return t}async function h(t){const{data:e}=await d(`/${t}`);return e}async function L(t){const{data:e}=await d("/search",{params:{q:t}});return e}const n={recipesList:document.querySelector(".recipes"),bodyEl:document.querySelector("body"),switchEl:document.querySelector("#switch-theme"),form:document.querySelector(".form"),backdrop:document.querySelector(".backdrop"),modal:document.querySelector(".modal"),parcing:document.querySelector(".parcing"),recipes:"",applyFilter:document.querySelector(".filter"),theme:document.querySelector(".theme")};function a(t){n.recipesList.innerHTML="";const e=t.map(({id:s,image:i,name:c,difficulty:o,cuisine:r})=>`<li class="recipe-item" data-id='${s}'>
    <img
        class="recipe-image"
        src=${i}
        alt=${c}
    />
    <div class="recipe-dscr">
        <p class="recipe-name">Name: ${c}</p>
        <p class="recipe-cuisine">Cuisine: ${r}</p>
        <p class="recipe-difficulty">Difficulty: ${o}</p>
    </div>`).join("");n.recipesList.insertAdjacentHTML("beforeend",e)}function g({name:t,difficulty:e,cuisine:s,caloriesPerServing:i,image:c,ingredients:o,instructions:r,prepTimeMinutes:u,cookTimeMinutes:m}){const p=`<h2 class="food-name"><b>Name:</b> ${t}</h2>
          <div class="common-container">
            <div class="descr-container">
              <p class="food-cuisine"><b>Cuisine:</b> ${s}</p>
              <p class="difficulty"><b>Difficulty:</b> ${e}</p>
              <p class="ingredients"><b>Inredients:</b> ${o}</p>
              <p class="instructions"><b>Instructions:</b> ${r}</p>
              <p class="prep-time"><b>Preparation time:</b> ${u} minutes</p>
              <p class="cook-time"><b>Cook time:</b> ${m} minutes</p>
              <p class="calories"><b>Calories:</b> ${i}</p>
            </div>
            <img class="large-image" src="${c}" alt="Food image" />
          </div>`;n.parcing.insertAdjacentHTML("beforeend",p)}async function b(t){t.preventDefault();const e=t.target.elements.query.value.trim(),{recipes:s}=await L(e);n.recipes=s,s.length?a(s):n.recipesList.innerHTML='<h2 class="empty-result">No matches found</h2>'}function l(t,e){const s=JSON.stringify(e);localStorage.setItem(t,s)}function v(t){const e=localStorage.getItem(t);try{return JSON.parse(e)}catch{return e}}function k(t){n.bodyEl.classList.toggle("dark-theme"),n.modal.classList.toggle("dark-theme");const e=document.querySelector(".sun-container"),s=document.querySelector(".moon-container");n.bodyEl.classList.contains("dark-theme")?(l("theme","dark"),e.classList.add("visually-hidden"),s.classList.remove("visually-hidden")):(l("theme","white"),s.classList.add("visually-hidden"),e.classList.remove("visually-hidden"))}async function S(t){const{recipes:e}=await y();n.recipes=e,a(e)}function E(t){t.preventDefault();const e=t.target.form,s=[];for(const c of e)c.checked&&s.push(c.value);if(!s.length)return a(n.recipes);const i=f(s,n.recipes);i.length?a(i):n.recipesList.innerHTML='<h2 class="empty-result">No matches found</h2>'}async function q(t){if(!t.target.closest("li"))return;n.parcing.innerHTML="";const e=t.target.closest("li").dataset.id,s=await h(e);n.backdrop.classList.remove("hidden"),g(s),n.backdrop.addEventListener("click",i=>{(i.target.classList.contains("backdrop")||i.target.classList.contains("close-button"))&&(n.backdrop.classList.add("hidden"),n.backdrop.removeEventListener)}),document.addEventListener("keyup",i=>{i.key==="Escape"&&(n.backdrop.classList.add("hidden"),n.backdrop.removeEventListener)})}function $(){const t="theme",e=v(t)??"light";l(t,e);const s=document.querySelector(".sun-container"),i=document.querySelector(".moon-container");e==="dark"?(n.bodyEl.classList.add("dark-theme"),n.modal.classList.add("dark-theme"),s.classList.add("visually-hidden")):i.classList.add("visually-hidden")}document.addEventListener("DOMContentLoaded",$);document.addEventListener("DOMContentLoaded",S);document.addEventListener("click",q);n.form.addEventListener("submit",b);n.switchEl.addEventListener("click",k);n.applyFilter.addEventListener("change",E);
//# sourceMappingURL=commonHelpers.js.map
