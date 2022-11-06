let randomSayi = Math.floor(Math.random() * 10);

let tahmin = prompt("1-10 arasında bir sayı gir ve rastgele sayıyı bulmaya çalış!");

if (tahmin == randomSayi && tahmin != null) alert("Bildin!!!");
else if (tahmin == "") alert("Boş giriş yaptınız!");
else if (tahmin == null) alert ("Giriş yapmaktan vazgeçtiniz!");
else {
    alert ("Bir daha dene :( Random sayı " + randomSayi);
}
