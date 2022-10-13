let btnOpenMenu = document.getElementById('openMenu');
let menueItems = document.querySelector('.menuItems');
btnOpenMenu.onclick = function(){
    if(menueItems.style.display==='none'){
        menueItems.style.display='block';
        btnOpenMenu.src='images/close.png';
    }else{
        menueItems.style.display='none';
        btnOpenMenu.src='images/more.png';
    }
    
}
function openLink(link){
    location.href = link
}