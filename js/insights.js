const LearnMoreBtn = document.querySelectorAll('.show-popupBtn');
const closeBtn = document.querySelectorAll('.closeBtn');

closeBtn.forEach((e)=>{
    e.addEventListener('click',closePopap)
})

LearnMoreBtn.forEach((e)=>{
    e.addEventListener('click',LearnMore);
});

function LearnMore(){
    this.parentElement.classList.add('display__none');
    this.parentElement.nextSibling.nextSibling.classList.remove('display__none');
    this.parentElement.parentElement.parentElement.nextSibling.nextSibling.classList.remove('display__none');
}

function closePopap(){
    this.parentElement.classList.add('display__none');
    this.parentElement.previousSibling.previousSibling.children[1].children[0].classList.remove('display__none');
    this.parentElement.previousSibling.previousSibling.children[1].children[1].classList.add('display__none');

}

// событие при скроле 
const animItems = document.querySelectorAll('.anim-items');
if (animItems.length > 0){
    window.addEventListener('scroll', animOnScroll);
    function animOnScroll() {
        for (let i = 0; i < animItems.length; i++){
            const animItem = animItems[i];
            const animItemHeight = animItem.offsetHeight;
            const animItemOffset = offset(animItem).top;
            const animStart = 7;

            let animItemPoint = window.innerHeight - animItemHeight / animStart;
            if(animItemHeight > window.innerHeight) {
                animItemPoint = window.innerHeight - window.innerHeight / animStart;
            }

            if ((pageYOffset > animItemOffset - animItemPoint) && pageYOffset < (animItemOffset + animItemHeight)){
                animItem.classList.add('_active');
            }
            else{
                // animItem.classList.remove('_active');
            }
        }
    }
    function offset(el) {
        const rect = el.getBoundingClientRect(),
            scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
            scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        return { top: rect.top + scrollTop, left: rect.left + scrollLeft}
    }
}