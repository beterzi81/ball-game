# Top Patlatmaca

Merhaba! Github klasörüme hoşgeldiniz.


# Dosyalar

Bu klasör HTML üstündeki bir canvas içinde javascript ile yazılmış oyunu içeriyor.Ayrıca kullanılan tüm görseller de burada yer alıyor.
**index.html:** Bu dosyada temel html düzenimiz yer alıyor.

**js.js:** Bu dosya ise index.html dosyasından erişebildiğimiz ve canvas üzerindeki bütün düzenlemeleri yapan kodların bulunduğu JavaScript dosyamızdır.

**style.css:** Bu dosya da html sayfamızın ve üzerindeki diğer elemaların düzeni, şekli ve boyutu hakkında düzenlemeler yapan CSS dosyamızdır.

**gorseller:**  Bu klasörümüzde karakter haricindeki bütün png. dosyalarımız mevcut.

**karakter:** Bu klasörde ise karakterimize ait sprite sheetler tutuluyor.

## Projeyi Çalıştırmak

Dosyaları isterseniz [buradaki](https://github.com/beterzi81/ball-game.git) adreste klasörlerin sağ üstündeki yeşil code butonuna tıklayıp en alttaki seçenekte belirtilen şekilde zip dosyası olarak indirip kendi bilgisayarınızdaki tarayıcınızdan index.html dosyasını çalıştırarak çalıştırabilirsiniz.

Ayrıca bu projenin canlı bir şekilde gösterimi için github pages kullanılmıştır. [Buyurun efendim.](https://beterzi81.github.io/ball-game/) 

## Sayfa Tanıtımı
Sayfamızı ilk açtığımızda karşımıza direkt olarak canvasımız çıkıyor:
![anasayfa1](https://user-images.githubusercontent.com/56171006/117957483-cc226c00-b322-11eb-87d2-610836a9e768.png)

Dilerseniz direkt olarak oyna butonuna tıklayarak oyunu başlatabilirsiniz.
Sayfada biraz aşağı indiğimizde ise bizi şöyle bir ekran karşılıyor:
![anasayfa2](https://user-images.githubusercontent.com/56171006/117957498-d17fb680-b322-11eb-80be-a94ed37abaa9.png)

Burada oyunun amacını ve nasıl oynandığını anlatan kısım yer alıyor.
En aşağıda ise şekildeki gibi küçük bir footer'ımız mevcut
![footer](https://user-images.githubusercontent.com/56171006/117957505-d3e21080-b322-11eb-83f3-71ffa90831ca.png)

## Oynanış
Başlatma butonuna tıkladığımızda aşağıdaki gibi 2 nesne ortaya çıkıyor karakterimiz ve rastgele hareket eden top:
![baslangic1](https://user-images.githubusercontent.com/56171006/117957523-d80e2e00-b322-11eb-89ac-4644e2a20b24.png)

Amacımız topun karakterimize vurmasından kaçarak doğru zamanda space tuşuna basıp attığımız ok ile topu küçültmek. 
Eğer top karakterimize çarparsa aşağıdaki şekil görünecek ve oyun bitecektir, sayfayı yenilememiz gerekir:
![ölüm](https://user-images.githubusercontent.com/56171006/117957595-e78d7700-b322-11eb-98af-d10a68a971fa.png)

İlk topumuz yeterince küçülüp yok olduğunda ise mavi büyük top beliriyor ve oyunun 2. aşaması başlıyor:
![baslangic2](https://user-images.githubusercontent.com/56171006/117957604-ea886780-b322-11eb-9053-a6cbcc6ba8e1.png)

Onu da yok ettiğimizde ise kazanıyoruz ve aşağıdaki gibi bir alert alıyoruz. Tekrar sayfayı yenilememiz gerekiyor:
![kazandın](https://user-images.githubusercontent.com/56171006/117957617-ec522b00-b322-11eb-93ba-1df391c54622.png)

Her vuruş bize 15 puan kazandırıyor. Maksimum puan ise 120.

## Kullandığım kaynaklar

Çizimlerin tamamı kendime aittir.
Pixel art kullandım ve [Aseprite](https://www.aseprite.org) adlı uygulamayı kullandım. 
Ayrıca kullandığım yapıyı öğrenmek için [Franks Laboratory](https://www.youtube.com/channel/UCEqc149iR-ALYkGM6TG-7vQ) adlı harika Youtube kanalını kullandım.
