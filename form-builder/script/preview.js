let retrievedObject = [];
let jsonString = localStorage.getItem("xform");
let imageDiv = document.querySelector("#pic1");
let imageDiv2 = document.querySelector("#pic2");
let imageDiv3 = document.querySelector("#pic3");
let imageDiv4 = document.querySelector(".foot_pic_1");
let imageDiv5 = document.querySelector(".foot_pic_2");
retrievedObject = JSON.parse(jsonString);
console.log(retrievedObject);

imageDiv.children[0].style.display = "none";
imageDiv2.children[0].style.display = "none";
imageDiv3.children[0].style.display = "none";
imageDiv4.children[0].style.display = "none";
imageDiv5.children[0].style.display = "none";

for (let i = 0; i < retrievedObject.length; i++) {
  switch (retrievedObject[i].index) {
    case 0:
      imageDiv.children[0].style.display = "block";
      imageDiv.children[0].src = retrievedObject[i].link;
      break;
    case 1:
      imageDiv2.children[0].style.display = "block";
      imageDiv2.children[0].src = retrievedObject[i].link;
      break;
    case 2:
      imageDiv3.children[0].style.display = "block";
      imageDiv3.children[0].src = retrievedObject[i].link;
      break;
    case 3:
      imageDiv4.children[0].style.display = "block";
      imageDiv4.children[0].src = retrievedObject[i].link;
      break;
    case 4:
      imageDiv5.children[0].style.display = "block";
      imageDiv5.children[0].src = retrievedObject[i].link;
      break;
  }
}
