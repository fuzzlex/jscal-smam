// var x;
// x = 50;
// var b = x * 2 + 10;


// var array = ["java", "python", "c++","c"];
// alert(array[0]);
// alert(array[1]);
// alert(array[2]);
// alert(array[3]);

// array[4] = "php";
// alert(array[4]);

// array.push("Go");
// alert(array);

// alert(array.length);

// for (var i = 0; i < 10; i++){
//     console.log("Bu sayfanın değeri"+ i);
// }

// var i = 0 ;
// while (i < 100){
//     console.log("i nin değeri:" + i);
//     i += 2 ;
// }

// var sayılar = [1,5,9,4,7,12,55,4];
// console.log("Array elemanları...");

// for (var i = 0; i < sayılar.length;i++){
//     console.log("Elemanlar  " + sayılar[i]);
// }

// sayılar.forEach(function(sayı){
//     console.log(sayı);
// })

// a = 5;
// b = 6;
// if (a != b){
//     console.log("Emre");
// }

// if (2 === "2" || "Emre" === "Emre"){
//     console.log("evet");
// }

// if (! (4 > 1)){
//     console.log("Emre");
// }
// else {
//     console.log("KAya")
// }

// var emre = 5;
// switch(emre) {
//     case 1 :
//         console.log("emre 1");
//         break;
//     case 5 :
//         console.log("emre 5");
//         break;
// }


// function selam(){
//     console.log("Merhaba");
// }

// selam();

// function selamla(isim){
//     console.log("Merhaba " + isim);
// }
// selamla("Emre");

// function toplam(a,b,c){
//     console.log("Toplamalrı:  " + (a + b+c));
// }

// toplam(5,5,1);

// function toplam(a,b,c){
//     return a + b + c;
// }
// var resr = toplam(3,5,7)
// console.log("Toplamları:  "+ resr);


// var calıs = {
//     isim: "Mustafa",
//     soyisim: "Kaya",
//     numara : 12323,
//     diller : ["php","python","c++"],
//     adres : {
//         cadde :"Kabil",
//         sokak : 3213
//     },
//     isimBilgi : function(){
//         return "ismi: " + this.isim + "  Soyisim: " + this.soyisim;
//     }
// };
// console.log(calıs.isim);
// console.log(calıs.soyisim);
// console.log(calıs.diller);
// console.log(calıs.adres.cadde);
// console.log(calıs.isimBilgi());




// var calısan = new Object();

// calısan.isim = "Mustafa";
// calısan.soyisim = "Kaya";
// calısan.isimbilgi = function(){
//     return "İsim  " + this.isim + "  Soyisim  " + this.soyisim;
// };
// console.log(calısan.isim);
// console.log(calısan.soyisim);
// console.log(calısan.isimbilgi());


// function Baslat(isim,soyisim,numara){
//     this.isim = isim;
//     this.soyisim = soyisim;
//     this.numara = numara;
//     this.bilgiler = function(){
//         return "İsim: " + this.isim+"\nSoyisim: " + this.soyisim + "\nNumara:" + this.numara;
//     };
    
// }
// var calısan1 = new Baslat("Emre", "Kaya",52415454);
// var calısan2 = new Baslat("Büşra","Kaya",521544);
// console.log(calısan1.bilgiler() + "\n" + calısan2.bilgiler());



// function Baslat(){
//     alert("Eminmisiniz.......")

// }


// function Baslat(x){
//     x.innerHTML = "Yarış BAŞLADI.....";

// }

// function Baslat(){
//     var element = document.getElementById("para1");
//     element.style.fontSize = "50px";

// }
// function Baslat1(){
//     var elemet1 = document.getElementById("para1");
//     elemet1.innerHTML = "HADİ BAŞLAYALIM...";
// }

function dogr(){
    var form = document.forms["form1"];
    var deger = form["isim"].value;
    if (deger == ""){
        alert("Lütfen Doğru giriş yapınız!");
        return false;
    }
    else {
        return true;
    }
    
}

