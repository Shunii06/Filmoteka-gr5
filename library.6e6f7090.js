const e=document.querySelector("[data-watched]"),t=document.querySelector("[data-queue]");e.addEventListener("click",c=>{e.classList.contains("SelectedButton")||(console.log(c.target),c.target.classList.add("SelectedButton"),t.classList.remove("SelectedButton"))}),t.addEventListener("click",c=>{t.classList.contains("SelectedButton")||(console.log(c.target),c.target.classList.add("SelectedButton"),e.classList.remove("SelectedButton"))}),document.querySelector(".LogoWraper").addEventListener("click",()=>{window.location.href="index.html"});
//# sourceMappingURL=library.6e6f7090.js.map
