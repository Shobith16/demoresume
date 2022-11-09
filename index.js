console.log("Script is running")
document.querySelector(".cancel").style.display='none';
document.querySelector(".hambargor").addEventListener("click",()=>{
document.querySelector('.sidebar').classList.toggle('sidebargo');
 if(document.querySelector('.sidebar').classList.contains('sidebargo')){
    document.querySelector(".ham").style.display='inline'
    document.querySelector(".cancel").style.display='none'

 }
 else{
    document.querySelector(".cancel").style.display='inline'
    document.querySelector(".ham").style.display='none'
 }
})