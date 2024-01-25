const stars = document.querySelectorAll(".star");
const count = document.getElementById("count");
console.log(count);



console.log(stars);

for(let i=0;i<stars.length;i++){
    let onestart = stars[i];
    onestart.addEventListener("click",()=>{
        console.log("you are in event mode");
        let index= onestart.getAttribute("data-index");
        console.log(index);

        for(let i =0;i<stars.length;i++){
            if(i < index){
            stars[i].classList.add("star_color");
            }
            else{
                stars[i].classList.remove("star_color");
            }
            
            count.innerHTML = index;
        }
    })
}