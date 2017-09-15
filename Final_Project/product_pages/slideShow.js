let slideIndex= 1; //default index
showDivs(slideIndex);

//direction will be either 1 or -1
//to be called on click of directional arrows on slideshow
function plusDivs(direction) {
    showDivs(slideIndex += direction);
}

function showDivs(direction){
    let classArray =document.getElementsByClassName("homeImage");
    if(direction > classArray.length) {slideIndex=1} //For when you go past array length
    if(direction < 1) {slideIndex=classArray.length} //For when you go "before" array length   
    for(let i = 0; i<classArray.length; i++){
        classArray[i].style.display="none";
    }
    classArray[slideIndex-1].style.display ="block"; //array indexed at "0", use -1 to resolve
}


