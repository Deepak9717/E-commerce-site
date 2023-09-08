const cross = document.getElementById("cross");
const bar = document.getElementById("bar");
const canvas = document.getElementById("canvas");

bar.addEventListener('click', ()=>{
    canvas.classList.add("unhide");
    console.log("opened");
});

cross.addEventListener('click', () =>{
    canvas.classList.remove('unhide');
    console.log("closed");
});
