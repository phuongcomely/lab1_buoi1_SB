//Anr hiện button Top
const btn = document.getElementById('btn');
window.addEventListener('scoll', function(){
    if(document.documentElement.scrollTop >300){
        btn.classList.add('show')
    }else{
        btn.classList.remove('show');
    }
});

2//Ẩn vào button quay lại đầu trang 
btn.addEventListener('click', function(){
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    })
})