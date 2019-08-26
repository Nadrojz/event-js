// Fonctionnalité 1

let footerEl = document.getElementsByTagName("footer")[0]

i = 1
footerEl.addEventListener("click", function(){
  console.log(`clique numéro ${i} `)
  i++
});


// Fonctionnalité 2

// let navHeader = document.getElementById("navbarHeader")
// let navToggler = document.getElementsByClassName("navbar-toggler")[0];
//
// navToggler.addEventListener("click", function(){
//   navHeader.classList.toggle("collapse");
// });

let hamburgerEl = document.getElementsByClassName("navbar-toggler")[0];
let hamburgerClass = document.getElementById("navbarHeader")
let hamburgerStatus = true;

function hamburgerToggle() {
  if (hamburgerStatus == true) {
    hamburgerClass.classList.remove("collapse")
    hamburgerStatus = false
  }
  else if (hamburgerStatus == false) {
    hamburgerClass.classList.add("collapse")
    hamburgerStatus = true
  }
};

hamburgerEl.addEventListener("click", hamburgerToggle);


// Fonctionnalité 3

let cardPath = document.getElementsByClassName("col-md-4")[0]
let cardText = cardPath.getElementsByTagName("p")[0]
let buttonPath = cardPath.getElementsByClassName("btn-group")[0]
let editPath = cardPath.getElementsByTagName("button")[1]


editPath.addEventListener("click", function(){
  cardText.style ="color: red"
})


// Fonctionnalité 4
let cardPath2 = document.getElementsByClassName("col-md-4")[1]
let cardText2 = cardPath2.getElementsByTagName("p")[0]
let buttonPath2 = cardPath2.getElementsByClassName("btn-group")[0]
let editPath2 = cardPath2.getElementsByTagName("button")[1]
let cardText2Status = false

editPath2.addEventListener("click", function(){
  if (cardText2Status == false) {
    cardText2.style ="color: green"
    cardText2Status = true
  }
  else if (cardText2Status == true) {
    cardText2.style =""
    cardText2Status = false
  }
})

// Fonctionnalité 5

let stylesheet = document.styleSheets[0];
let navbar = document.getElementsByTagName("header")[0]
stylesheetStatus = true

navbar.addEventListener("dblclick", function(){
  if (stylesheetStatus == true) {
    stylesheet.disabled = true;
    stylesheetStatus = false
  }
  else if (stylesheetStatus == false) {
    stylesheet.disabled = false
    stylesheetStatus = true
  }
})


// Fonctionnalité 6
let allCardsPath = document.getElementsByClassName("col-md-4")

for (let x = 0; x < allCardsPath.length; x++) {
  let cardClassTextStatus = true
  let allViewPath = allCardsPath[x].getElementsByTagName("button")[0]
  let allImgPath = allCardsPath[x].getElementsByTagName("img")[0]
  let allCardBody = allCardsPath[x].getElementsByClassName("card-body")[0];
  let allCardClassText = allCardBody.getElementsByTagName("p")[0]

  allViewPath.addEventListener("mouseover", function (){
    if (cardClassTextStatus == true) {
      allCardClassText.style.display = "none";
      allImgPath.style.width = "20%";
      cardClassTextStatus = false;
    }
    else if (cardClassTextStatus == false) {
      allCardClassText.style.display = "block";
      allImgPath.style.width = "100%";
      cardClassTextStatus = true;
    }
  })
};


// Fonctionnalité 7

let jumboPath = document.getElementsByClassName("container")[2]
let btnPath1 = jumboPath.getElementsByTagName("a")[1]

btnPath1.addEventListener("click", function(){
  let allCardsParent = document.getElementsByClassName("row")[1]
  let lastCard = allCardsParent.lastElementChild
allCardsParent.insertBefore(lastCard, allCardsParent.children[0])
})


// Fonctionnalité 8

let btnPath2 = jumboPath.getElementsByTagName("a")[0]

btnPath2.addEventListener("click", function(event){
  event.preventDefault()
  let allCardsParent = document.getElementsByClassName("row")[1]
  let lastCard = allCardsParent.lastElementChild
  let firstCard = allCardsParent.firstElementChild
  let familySize = allCardsParent.childNodes.length
  console.log(allCardsParent.childNodes);
  allCardsParent.insertBefore(firstCard, allCardsParent.children[(familySize)])
});
