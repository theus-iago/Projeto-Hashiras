import Window from "https://cdn.jsdelivr.net/gh/theus-iago/prototypes/window_v48.js";
const botaoHeader = document.getElementById("botaoHeader");
const nav = document.querySelector("nav");
const botaoAlert = document.getElementById("botaoAlert");
const botaoConfirm = document.getElementById("botaoConfirm");
const botaoList = document.getElementById("botaoList");

botaoHeader.addEventListener("click", () => {
  if(botaoHeader.style.display != 'block') {
    nav.style.top = "58px";
    botaoHeader.style.display = "block";
  }else {
    nav.style.top = "-150px";
    botaoHeader.style.display = "flex";
  }
})
botaoAlert.addEventListener("click", () => {
  
  const configAlert = {
    header_content:"Alerta",
    color:"#0d0d0d"
  }
  Window.config(configAlert);
  Window.exibir();
});
botaoConfirm.addEventListener("click", () => {
  const configConfirm = {
    header_content:"Confirm",
    color:"#0d0d0d",
    type:"confirm"
  }
  Window.config(configConfirm);
  Window.exibir();
});
botaoList.addEventListener("click", () => {
  const configList = {
    header_content:"Hashiras Favoritos",
    color:"#0d0d0d",
    type:"list"
  }
  Window.config(configList);
  Window.exibir();
});