
//1 den 100 e kadar cift sayıları ekrana yazdırma
var i;
for (i=1;i<=100;i++)
{

    if( i%2==0)
    {
        console.log(i);
    }

}

// Ad Soyad birlestirme

//1.yöntem

var ad="hilmi arif";
var soyad="temur";

//oncelikle ismim iki isimden olustugu icin isimlerimi birlestiriyorum

var birlesik_ad=ad.split(" ").join("");

//diğer birleştirme metodu

//var birlesik_ad=birlesik_ad.slice(4,6);

//simdi birlesmis ismim ile soyismimi birlestiriyorum

var adSoyad=birlesik_ad.concat("",soyad);
console.log(adSoyad);

//2.yöntem

var ad1="hilmi";
var ad2="arif";
var soyadi="temur";
var adiSoyadi=ad1+ad2+soyadi;
console.log(adiSoyadi);