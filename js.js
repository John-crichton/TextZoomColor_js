// utworzyć zmienną, napisać funkcje która po kliknięciu zwiększa wartość zmiennej 

// powiekszanie i zmniejszanie czcionki i zmiana koloru 
// 1. pobierz 4 elementy ze strony (addeventlistener)
// 2. stwórz zmienną do której przypiszesz wielkość czcionki(bez px tylko liczba)
// 3. Stwórz 3 funkcje 
//      funkcja 1 : Ma zwiększyć rozmiar czcionki(operator przypisania)
// 4. funkcja która zmieni kolor  

const sizeUpBtn = document.querySelector('.sizeUp');
const sizeDownBtn = document.querySelector('.sizeDown');
const colorBtn = document.querySelector('.color');
const ManiText = document.querySelector('p');

let i = 36;
sizeUpBtn.addEventListener("click", function() {
     
    i = i + 5;
    console.log(i);
    // obrazek2.classList.toggle('hide')
    // if (obrazek2.classList.contains("hide")){
    ManiText.style.fontSize= i + 'px';
    // } else {
    //     ArrowInBtn.style.transform = 'rotate(0deg)';
    // }
});

sizeDownBtn.addEventListener("click", function() {
     
    
     if ( i != 0 ) {
        i = i - 5;
        ManiText.style.fontSize= i + 'px';
     } else {
        i = 0;
     }
    console.log(i);
});

// colorBtn.addEventListener("click", function(){
//    ManiText.classList.toggle('text');
// })

const ColorArr =["red", "green", "blue", "yellow", "black"];

function changeColor(){
   let x = 0;
   if (x <=ColorArr.length && x >= 0){
      x = x+1;
      console.log(x);
      ManiText.style.color = ColorArr[x];
   } else {
      x=0;
   }
}

colorBtn.addEventListener("click", changeColor());
   // for( let x = 0; x < ColorArr.length; x++ ){
   //    console.log(x);
   //    ManiText.style.color = ColorArr[x];
   //    console.log(ColorArr[x]);    
   // // }
         
     
   //    };
   // });



// do zmianay koloru 
// chce aby po kliknięciu buttona kolor - zmianiały sie kolory po kazdym kliknięciu po kolei z kolekcji ColorArr- poniżej pomysł - 
// const arr = ["mon","tue","wen","thu","fri","sat","sun"];
// const teststrzałk5 = arr.forEach(function(x){
//     console.log(x);
// })
// const teststrzałk6 = arr.forEach(x=> console.log(x));