let slideIndex= 1;
showDivs(slideIndex);

function plusDivs(n){
    showDivs(slideIndex += n);
}

function showDivs(n){
    let classArray =document.getElementsByClassName("homeImage");
    if(n > classArray.length) {slideIndex=1}
    if(n < 1) {slideIndex=classArray.length}    
    for(let i = 0; i<classArray.length; i++){
        classArray[i].style.display="none";
    }
    classArray[slideIndex-1].style.display ="block";
}


