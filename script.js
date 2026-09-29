
const items=document.querySelectorAll('.reveal');
function reveal(){
items.forEach(x=>{
if(x.getBoundingClientRect().top < innerHeight-80)x.classList.add('show');
});
}
addEventListener('scroll',reveal);
reveal();
