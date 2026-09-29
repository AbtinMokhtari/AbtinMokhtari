const boxes=document.querySelectorAll('.reveal');
function animate(){
boxes.forEach(box=>{
if(box.getBoundingClientRect().top < innerHeight-50)
box.classList.add('show');
});
}
addEventListener('scroll',animate);
animate();