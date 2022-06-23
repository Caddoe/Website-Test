let quantityItem = document.getElementById("quantity")
let item = document.getElementById("nameItem")
let itemsPlace = document.getElementById("placeItem")
let postItem = document.getElementById("submitItem")

postItem.addEventListener("click", labelCreation)

async function labelCreation(){
  
const labelTest = document.createElement("label");
labelTest.innerHTML = quantityItem.value;
document.getElementById("Test").appendChild(labelTest)
};
