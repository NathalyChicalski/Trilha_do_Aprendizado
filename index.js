const bnt = document.querySelector('#bnt') 
bnt.addEventListener('click', () => {  /*sempre executa uma ação q mandar, nesse caso é click*/
window.scroll({top: window.innerHeight, behavior: "smooth"})/*descer suavemente*/
})