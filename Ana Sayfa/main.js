function profilepage(){

    window.location.href="../Profil Sayfası/Profile.html"
}

function reccordpage(){
    window.location.href="../Kaydedilenler/Save.html"
}

function settinpage(){
    window.location.href="../Ayarlar/Setting.html"
}

function cangepage(){
    alert("Önce Giriş Yapmalısınız...")
    window.location.href="../Giriş Sayfası/index.html"
}

function exitpage(){
    
    window.location.href="../Giriş Sayfası/index.html"
    alert("Güle Güle ....")
}

function kesfet(){
    window.location.href="../Keşfet/explor.html"
}

var sayac=0;
function follow(elemnt) {
    sayac++;
    if(sayac%2!=0){
    var deger = "Takip"
    elemnt.innerHTML= deger;
    elemnt.style.color="#000";
    }
    else{
        var deger = "Takip et"
        elemnt.innerHTML= deger;
        elemnt.style.color="#0095f6"
    }

}

function dm(){
    window.location.href="../DM/dm.html"
}

var sayac2=0;

function like(elemnt){
    sayac2++;
    if(sayac2%2!=0){
        console.log(elemnt)
        elemnt.classList.add("red"); 
    }
    else{
        elemnt.classList.remove("red");
    }

}


$('.slider-nav').slick({
    slidesToShow: 7,
    slidesToScroll: 1,
    dots: false,
    focusOnSelect: true,
    centerPadding: '5px'
  });

  $('a[data-slide]').click(function(e) {
    e.preventDefault();
    var slideno = $(this).data('slide');
   $('.slider-nav').slick('slickGoTo', slideno - 1);
});


// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
    btn.onclick = function() {
        modal.style.display = "block";
}
  
// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

// Get the modal
var modal = document.getElementById("myModal2");

// Get the button that opens the modal
var btn = document.getElementById("myBtn2");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
    btn.onclick = function() {
        modal.style.display = "block";
}
  
// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

    // Get the modal
var modal = document.getElementById("myModal3");

// Get the button that opens the modal
var btn = document.getElementById("myBtn3");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
    btn.onclick = function() {
        modal.style.display = "block";
}
  
// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}



