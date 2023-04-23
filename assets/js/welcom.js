function getElement(elemnt){
    return document.querySelector(`.${elemnt}`);
}

switchToggle();
function switchToggle(){
     let allSwitch = document.querySelectorAll('.change__action');
        allSwitch.forEach((item)=>{
            item.addEventListener('click',()=>{
                console.log(item.childNodes)
                if(item.classList.contains('change__action__active')){
                    item.classList.remove('change__action__active');
                    item.classList.add('change__action');
                    item.childNodes[1].classList.add('change__icon')
                    item.childNodes[1].classList.remove('change__icon__active')
                }else{
                    item.classList.add('change__action__active');
                    item.classList.remove('change__action');
                    item.childNodes[1].classList.remove('change__icon')
                    item.childNodes[1].classList.add('change__icon__active')
                }
            })
        })
}