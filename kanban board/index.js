const todo = document.querySelectorAll(".first-box");
console.log(todo);

for(let i=0;i<todo.length;i++){
    let curr = todo[i];
    console.log(curr);

    curr.addEventListener("dragstart",(e)=>{
        console.log("hello world");
        e.target.classList.add("isdragging")
    })

    curr.addEventListener("dragend",(e)=>{
        console.log("end world")
        e.target.classList.remove("isdragging")
    })

}

