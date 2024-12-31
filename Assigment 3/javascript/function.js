`use strict`;


// Init
const regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const inforBody=document.querySelector('.infor-body') 
const emailVertificate=document.querySelector('.email-vertificate')
const btnShowMore=document.querySelectorAll('.btn-show-more')
const btnShowLess=document.querySelectorAll('.btn-show-less')
const hoverHolder=document.querySelectorAll('.hover-holder')
const jobInfor=document.querySelectorAll('.job-infor')

//check email function
emailCheck = function (email) {

    if (email.match(regex)) {
        return true;
    }
    else {
        return false;
    }
}
showInform=function(){
    inforBody.classList.remove('hidden');
    emailVertificate.classList.add('hidden');    

}

document.querySelector('.btnSubmit').addEventListener('click', function(){
    // console.log(emailCheck(document.querySelector('#inputEmail').value))
    //add hidden to this and remove hidden from class card-body
    if (emailCheck(document.querySelector('#inputEmail').value)){
        showInform();
    }else{
        document.querySelector('#inputEmail').value='Please input valid email'
    }
    
})


// Hover and show button and disable when mouse off
for (let i=0; i<hoverHolder.length;i++){
    hoverHolder[i].addEventListener('mouseover', function(){
        btnShowMore[i].classList.remove('hidden');
        
    })
    
    hoverHolder[i].addEventListener('mouseout', function(){
        btnShowMore[i].classList.add('hidden');
        
    })
}
// Hover so it is not gliching
for (let i=0; i<hoverHolder.length;i++){
    btnShowMore[i].addEventListener('mouseover', function(){
        btnShowMore[i].classList.remove('hidden');
        
    })
    
   
}

//add click even show more
for (let i=0; i<btnShowMore.length;i++){
    btnShowMore[i].addEventListener('click', function(){
        
        btnShowMore[i].classList.add('hidden');
        jobInfor[i].classList.remove('hidden');
        btnShowLess[i].classList.remove('hidden');
    })
}

//add click event show less
for (let i=0; i<btnShowLess.length;i++){
    btnShowLess[i].addEventListener('click', function(){
        
        
        jobInfor[i].classList.add('hidden');
        btnShowLess[i].classList.add('hidden');
    })
}