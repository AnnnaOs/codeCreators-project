import{S as O,N as D,K as N,M as R,a as x,i as V,A as G}from"./assets/vendor-CWC0koRS.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))n(o);new MutationObserver(o=>{for(const s of o)if(s.type==="childList")for(const c of s.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&n(c)}).observe(document,{childList:!0,subtree:!0});function r(o){const s={};return o.integrity&&(s.integrity=o.integrity),o.referrerPolicy&&(s.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?s.credentials="include":o.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(o){if(o.ep)return;o.ep=!0;const s=r(o);fetch(o.href,s)}})();const U=new O(".swiper",{modules:[D,N,R],navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},keyboard:{enabled:!0,onlyInViewport:!1},mousewheel:{invert:!0},breakpoints:{1280:{slidesPerView:2}},spaceBetween:32});x.defaults.baseURL="https://portfolio-js.b.goit.study/api";async function P(){try{return(await x.get("/reviews")).data}catch(e){return console.error("Failed to load reviews:",e),[]}}const $=e=>e.map(t=>`<li class="reviews-item swiper-slide">
        <p class="reviews-text">${t.review}</p>
        <div class="reviewer-data">
          <img
            src="${t.avatar_url}"
            alt="Natalia Shevchenko"
            loading="lazy"
            width="40"
            height="40"
            class="reviews-foto"
          />
          <p class="reviewer-name">${t.author}</p>
        </div>
      </li>`).join(""),F=async()=>{const e=document.querySelector(".reviews-list");try{const t=await P();if(t.length===0){e.innerHTML='<p class="not-found">Not found</p>';return}const r=$(t);e.innerHTML=r,U.update()}catch(t){console.log(t),alert("Failed to load reviews. Please try again later.")}};window.addEventListener("load",F);const W="https://portfolio-js.b.goit.study/api/requests",q=document.querySelector(".form"),i=document.querySelector(".form-input"),E=document.querySelector(".form-message"),b=document.querySelector(".form-icon-success"),u=document.querySelector(".form-input-error"),L=document.querySelector(".form-input-error-msg"),w=document.querySelector(".modal-overlay"),Y=document.querySelector(".modal-close-btn"),K=document.querySelector(".modal-text-main"),_=document.querySelector(".modal-text-second"),T=e=>{e.key==="Escape"&&C()},Z=()=>{w.classList.add("is-open"),document.body.style.overflow="hidden",window.addEventListener("keydown",T)},C=()=>{w.classList.remove("is-open"),document.body.style.overflow="auto",window.removeEventListener("keydown",T)};Y.addEventListener("click",C);w.addEventListener("click",e=>{e.target===w&&C()});const B=()=>i.validity.valid?(i.classList.add("valid"),i.classList.remove("invalid"),b.style.display="block",u.style.display="none",!0):(i.classList.remove("valid"),i.classList.add("invalid"),b.style.display="none",u.style.display="block",u.textContent="Invalid email, try again",!1);i.addEventListener("input",B);q.addEventListener("submit",async e=>{if(e.preventDefault(),i.value.trim()===""){u.style.display="block",u.textContent="All fields must be filled";return}if(E.value.trim()===""){L.style.display="block",L.textContent="All fields must be filled";return}else L.style.display="none";if(B()){const t={email:i.value.trim(),comment:E.value.trim()};try{const r=await x.post(W,t);r.status===201&&(Z(),K.textContent=r.data.title,_.textContent=r.data.message,q.reset(),b.style.display="none",i.classList.remove("valid","invalid"))}catch(r){V.error({message:r.message,title:"Error",position:"center"})}}});const Q=document.querySelectorAll(".header-mobile-navigation a"),d=document.querySelector(".js-menu-container");document.addEventListener("DOMContentLoaded",()=>{const e=document.querySelector(".js-open-menu"),t=document.querySelector(".js-close-menu");if(!d||!e||!t){console.error("Элементы управления меню не найдены!");return}e.addEventListener("click",()=>{d.classList.add("active"),console.log("Меню открыто")}),t.addEventListener("click",()=>{d.classList.remove("active"),console.log("Меню закрыто")}),d.addEventListener("click",r=>{r.target===d&&(d.classList.remove("active"),console.log("Клик вне меню, меню закрыто"))})});Q.forEach(e=>{e.addEventListener("click",t=>{t.preventDefault();const r=e.getAttribute("href").substring(1),n=document.getElementById(r);n&&(n.scrollIntoView({behavior:"smooth"}),d.classList.remove("active"),document.body.classList.remove("no-scroll"))})});const z="/codeCreators-project/assets/proj1@1x-awWepC32.jpg",X="/codeCreators-project/assets/proj1@2x-WB_Ld32T.jpg",ee="/codeCreators-project/assets/proj2@1x-D66hgNDU.jpg",te="/codeCreators-project/assets/proj2@2x-DCW1_PrD.jpg",se="/codeCreators-project/assets/proj3@1x-DKqfQ0bg.jpg",oe="/codeCreators-project/assets/proj3@2x-DXOWdXYL.jpg",re="/codeCreators-project/assets/proj4@1x-DLMABuqi.jpg",ce="/codeCreators-project/assets/proj4@2x-DliwpUlG.jpg",ae="/codeCreators-project/assets/proj5@1x-D-eObtw5.jpg",ie="/codeCreators-project/assets/proj5@2x-e0CwrI9L.jpg",ne="/codeCreators-project/assets/proj6@1x-DPnGRVQw.jpg",le="/codeCreators-project/assets/proj6@2x-DFVUSngx.jpg",de="/codeCreators-project/assets/proj7@1x-62qG-gFu.jpg",me="/codeCreators-project/assets/proj7@2x-UoJODWHq.jpg",pe="/codeCreators-project/assets/proj8@1x-BICpySrC.jpg",ue="/codeCreators-project/assets/proj8@2x-D1bWJHvJ.jpg",ve="/codeCreators-project/assets/proj9@1x-2a6h0el_.jpg",ge="/codeCreators-project/assets/proj9@2x-UJU8Wknq.jpg",he="/codeCreators-project/assets/proj10@1x-CMd0RFKk.jpg",fe="/codeCreators-project/assets/proj10@2x-CTDtsUjY.jpg",we="/codeCreators-project/assets/icons-LHmDkW2B.svg",I=[{title:"Wallet Webservice",image:z,image2x:X,techStack:"React, JavaScript, Node JS, Git",link:"https://github.com/AnnnaOs/codeCreators-project",alt:"Wallet Webservice Project"},{title:"Green harvest webservice",image:ee,image2x:te,techStack:"React, JavaScript, Node JS, Git",link:"https://github.com/AnnnaOs/codeCreators-project",alt:"Green harvest"},{title:"English Exellence webservice",image:se,image2x:oe,techStack:"React, JavaScript, Node JS, Git",link:"https://github.com/AnnnaOs/codeCreators-project",alt:"English Exellence"},{title:"Transform your webservice",image:re,image2x:ce,techStack:"React, JavaScript, Node JS, Git",link:"https://github.com/AnnnaOs/codeCreators-project",alt:"Transform your"},{title:"Ukraine traditions webservice",image:ae,image2x:ie,techStack:"React, JavaScript, Node JS, Git",link:"https://github.com/AnnnaOs/codeCreators-project",alt:"Ukraine traditions"},{title:"Stay Healthy webservice",image:ne,image2x:le,techStack:"React, JavaScript, Node JS, Git",link:"https://github.com/AnnnaOs/codeCreators-project",alt:"Stay Healthy"},{title:"Mimino webservice",image:de,image2x:me,techStack:"React, JavaScript, Node JS, Git",link:"https://github.com/AnnnaOs/codeCreators-project",alt:"Mimino"},{title:"Transformation with a Touch of the Brush webservice",image:pe,image2x:ue,techStack:"React, JavaScript, Node JS, Git",link:"https://github.com/AnnnaOs/codeCreators-project",alt:"Transformation with a Touch of the Brush"},{title:"Fresh harvest box webservice",image:ve,image2x:ge,techStack:"React, JavaScript, Node JS, Git",link:"https://github.com/AnnnaOs/codeCreators-project",alt:"Fresh harvest box"},{title:"Transform your business webservice",image:he,image2x:fe,techStack:"React, JavaScript, Node JS, Git",link:"https://github.com/AnnnaOs/codeCreators-project",alt:"Transform your business"}];let g=0;const A=3;function H(){const e=document.querySelector(".project-list"),r=I.slice(g,g+A).map(({image:o,image2x:s,alt:c,techStack:l,title:p,link:y,svg:j},a)=>`
            <li class="project-item">
                <img  srcset="${o} 1x, ${s} 2x" src="${o}"  alt="${c}" class="project-image">
                <div class="project-content">
                    <p class="project-tech">${l}</p>
                    <div class="project-name-btn">
                        <h3 class="project-name">${p}</h3>
                        <div class="centered">
                                <a href="${y}" class="project-link" target="_blank">VISIT
                                 <svg class="project-icon" width="24" height="24">
                                        <use href="${we}#arrow-projects"></use>
                                    </svg>
                                </a>
                                
                        </div>
                    </div>
                </div>
            </li>
            `).join("");e.innerHTML+=r,document.querySelectorAll(".project-item:not(.show)").forEach((o,s)=>{setTimeout(()=>{o.classList.add("show")},s*200)}),g+=A,g>=I.length&&(document.querySelector(".load-more").style.display="none")}document.querySelector(".load-more").addEventListener("click",H);H();document.addEventListener("DOMContentLoaded",()=>{new G(".accordion",{duration:300,showMultiple:!1,collapse:!0});const e=document.querySelectorAll(".faq-item"),t=e[0],r=e[0].querySelector(".faq-answer"),n=e[0].querySelector(".faq-arrow"),o=t.querySelector(".faq-question");t.classList.add("open"),r.classList.add("show"),n.classList.add("open"),o.classList.add("active"),e.forEach(s=>{const c=s.querySelector(".faq-question"),l=s.querySelector(".faq-answer"),p=s.querySelector(".faq-arrow"),y=()=>{l.classList.contains("show")?(s.classList.remove("open"),l.classList.remove("show"),p.classList.remove("open"),c.classList.remove("active")):(s.classList.add("open"),l.classList.add("show"),p.classList.add("open"),c.classList.add("active"))},j=()=>{e.forEach(a=>{a!==s&&(a.classList.remove("open"),a.querySelector(".faq-answer").classList.remove("show"),a.querySelector(".faq-arrow").classList.remove("open"),a.querySelector(".faq-question").classList.remove("active"))}),y()};c.addEventListener("click",j),p.addEventListener("click",a=>{a.stopPropagation(),l.classList.contains("show")?(s.classList.remove("open"),l.classList.remove("show"),p.classList.remove("open"),c.classList.remove("active")):j()})})});const f=document.body,ye=document.getElementById("favicon"),J=document.getElementById("switch"),k=localStorage.getItem("theme")||"light-theme";f.classList.add(k);J.checked=k!=="light-theme";M(k==="light-theme"?"#ffffff":"#000000");J.addEventListener("change",function(){const e=f.classList.contains("light-theme")?"dark-theme":"light-theme";f.classList.remove("light-theme","dark-theme"),f.classList.add(e),M(e==="light-theme"?"#ffffff":"#000000"),localStorage.setItem("theme",e)});function M(e){const t=`
    <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <rect width="16" height="16" rx="2" fill="${e}"/>
    <path d="M1.5 4.75H2.78936C3.62164 4.75 4.18377 4.78747 4.47576 4.86242C4.77047 4.93736 4.99423 5.06048 5.14704 5.23178C5.29985 5.40308 5.39536 5.59445 5.43356 5.8059C5.47177 6.01467 5.49087 6.42686 5.49087 7.04246V9.31887C5.49087 9.90236 5.46222 10.2931 5.40491 10.4912C5.35034 10.6866 5.25346 10.8405 5.11429 10.9529C4.97513 11.0626 4.80321 11.1403 4.59855 11.1858C4.39389 11.2286 4.08554 11.25 3.67349 11.25H1.5V4.75ZM3.22324 5.86211V10.1379C3.47156 10.1379 3.62437 10.0897 3.68168 9.99336C3.73898 9.89433 3.76763 9.62801 3.76763 9.19441V6.66909C3.76763 6.37467 3.75808 6.18597 3.73898 6.103C3.71988 6.02002 3.67622 5.9598 3.608 5.92233C3.53978 5.88218 3.41152 5.86211 3.22324 5.86211Z" fill="#00B068"/>
    <path d="M6.52645 4.75H9.39987V6.0508H8.24969V7.28335H9.3262V8.51992H8.24969V9.9492H9.51448V11.25H6.52645V4.75Z" fill="#00B068"/>
    <path d="M14.5 4.75L13.6241 11.25H11.0085L10.0139 4.75H11.8312C12.0414 6.54061 12.1914 8.0542 12.2815 9.29077C12.3715 8.04082 12.4657 6.93005 12.5639 5.95846L12.6826 4.75H14.5Z" fill="#00B068"/>
  </svg>
`;ye.setAttribute("href",`data:image/svg+xml;base64,${btoa(t)}`)}const m=document.querySelector(".scroll-up-btn"),v=document.querySelector(".scroll-down-btn");let S=0,h=!0;window.addEventListener("scroll",()=>{let e=window.scrollY;e>0?(m.classList.add("is-active-scroll"),v.classList.add("is-active-scroll")):(m.classList.remove("is-active-scroll"),v.classList.remove("is-active-scroll")),e<S&&h?(m.classList.add("is-active-scroll"),h=!1):e>S&&!h&&(m.classList.remove("is-active-scroll"),h=!0),e+window.innerHeight>=document.body.scrollHeight&&v.classList.remove("is-active-scroll"),(e===0||e+window.innerHeight>=document.body.scrollHeight)&&m.classList.remove("is-active-scroll"),S=e<=0?0:e});m.addEventListener("click",()=>{window.scrollTo({top:0,behavior:"smooth"}),m.classList.remove("is-active-scroll")});v.addEventListener("click",()=>{window.scrollTo({top:document.body.scrollHeight,behavior:"smooth"}),v.classList.remove("is-active-scroll")});
//# sourceMappingURL=index.js.map
