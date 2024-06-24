import{a as d}from"./assets/vendor-bdb8a163.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))c(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&c(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function c(i){if(i.ep)return;i.ep=!0;const r=n(i);fetch(i.href,r)}})();function f(e,t){const n=[];return t.forEach(c=>{e.includes(c.difficulty)&&n.push(c)}),n}d.defaults.baseURL="https://dummyjson.com/recipes";async function h(){const{data:e}=await d("");return e}async function g(e){const{data:t}=await d(`/${e}`);return t}async function y(e){const{data:t}=await d("/search",{params:{q:e}});return t}const s={recipesList:document.querySelector(".recipes"),bodyEl:document.querySelector("body"),switchEl:document.querySelector("#switch-theme"),form:document.querySelector(".form"),backdrop:document.querySelector(".backdrop"),modal:document.querySelector(".modal"),parcing:document.querySelector(".parcing"),recipes:"",applyFilter:document.querySelector(".filter"),theme:document.querySelector(".theme")};function a(e){s.recipesList.innerHTML="";const t=e.map(({id:n,image:c,name:i,difficulty:r,cuisine:o})=>`<li class="recipe-item" data-id='${n}'>
    <img
        class="recipe-image"
        src=${c}
        alt=${i}
    />
    <div class="recipe-dscr">
        <p class="recipe-name">Name: ${i}</p>
        <p class="recipe-cuisine">Cuisine: ${o}</p>
        <p class="recipe-difficulty">Difficulty: ${r}</p>
    </div>`).join("");s.recipesList.insertAdjacentHTML("beforeend",t)}function L({name:e,difficulty:t,cuisine:n,caloriesPerServing:c,image:i,ingredients:r,instructions:o,prepTimeMinutes:u,cookTimeMinutes:m}){const p=`<h2 class="food-name"><b>Name:</b> ${e}</h2>
          <div class="common-container">
            <div class="descr-container">
              <p class="food-cuisine"><b>Cuisine:</b> ${n}</p>
              <p class="difficulty"><b>Difficulty:</b> ${t}</p>
              <p class="ingredients"><b>Inredients:</b> ${r}</p>
              <p class="instructions"><b>Instructions:</b> ${o}</p>
              <p class="prep-time"><b>Preparation time:</b> ${u} minutes</p>
              <p class="cook-time"><b>Cook time:</b> ${m} minutes</p>
              <p class="calories"><b>Calories:</b> ${c}</p>
            </div>
            <img class="large-image" src="${i}" alt="Food image" />
          </div>`;s.parcing.insertAdjacentHTML("beforeend",p)}async function b(e){e.preventDefault();const t=e.target.elements.query.value.trim(),{recipes:n}=await y(t);s.recipes=n,n.length?a(n):s.recipesList.innerHTML='<h2 class="empty-result">No matches found</h2>'}function l(e,t){const n=JSON.stringify(t);localStorage.setItem(e,n)}function v(e){const t=localStorage.getItem(e);try{return JSON.parse(t)}catch{return t}}function k(e){s.bodyEl.classList.toggle("dark-theme"),s.modal.classList.toggle("dark-theme"),s.bodyEl.classList.contains("dark-theme")?(l("theme","dark"),s.theme.innerHTML=`
      <svg class="moon" height="30" width="30">
        <use href="./img/icons.svg#moon"></use>
      </svg>`):(l("theme","white"),s.theme.innerHTML=`
      <svg class="sun" height="30" width="30">
        <use href="./img/icons.svg#sun"></use>
      </svg>`)}async function E(e){const{recipes:t}=await h();s.recipes=t,a(t)}function S(e){e.preventDefault();const t=e.target.form,n=[];for(const i of t)i.checked&&n.push(i.value);if(!n.length)return a(s.recipes);const c=f(n,s.recipes);c.length?a(c):s.recipesList.innerHTML='<h2 class="empty-result">No matches found</h2>'}async function $(e){if(!e.target.closest("li"))return;s.parcing.innerHTML="";const t=e.target.closest("li").dataset.id,n=await g(t);s.backdrop.classList.remove("hidden"),L(n),s.backdrop.addEventListener("click",c=>{(c.target.classList.contains("backdrop")||c.target.classList.contains("close-button"))&&(s.backdrop.classList.add("hidden"),s.backdrop.removeEventListener)}),document.addEventListener("keyup",c=>{c.key==="Escape"&&(s.backdrop.classList.add("hidden"),s.backdrop.removeEventListener)})}function w(){v("theme")==="dark"&&(s.bodyEl.classList.toggle("dark-theme"),s.modal.classList.toggle("dark-theme"),s.theme.innerHTML=`
      <svg class="moon" height="30" width="30">
        <use href="./img/icons.svg#moon"></use>
      </svg>`)}document.addEventListener("DOMContentLoaded",w);document.addEventListener("DOMContentLoaded",E);document.addEventListener("click",$);s.form.addEventListener("submit",b);s.switchEl.addEventListener("click",k);s.applyFilter.addEventListener("change",S);
//# sourceMappingURL=commonHelpers.js.map
