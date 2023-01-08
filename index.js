let fruit = ["🍎", "🍊", "🍎", "🍎", "🍊"]
let appleShelf = document.getElementById("apple-shelf")
let orangeShelf = document.getElementById("orange-shelf")



function fruits(){
    for(let i=0;i<fruit.length;i++){
        if(i===0){
            document.querySelector("#apple-shelf").textContent=fruit[i]
        }
         else if(i===1){
            document.querySelector("#orange-shelf").textContent+=fruit[i]
        }
         else if(i===2){
            document.querySelector("#apple-shelf").textContent+=fruit[i]
        }
         else if(i===3){
            document.querySelector("#apple-shelf").textContent+=fruit[i]
        }
         else {
            document.querySelector("#orange-shelf").textContent+=fruit[i]
        }
        
    }
    return 0;
}

fruits()

/* A Problem have many solutons   ( SOLUTION -2)
function sortFruit() {
    for (let i = 0; i < fruit.length; i++) {
        if (fruit[i] === "🍎") {
            appleShelf.textContent += "🍎"
        } else if (fruit[i] === "🍊") {
            orangeShelf.textContent += "🍊"
        }
    }
}

sortFruit()

*/
