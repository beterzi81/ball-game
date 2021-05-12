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
![enter image description here](https://ibb.co/8rF1ccb)

## Synchronize a file

Once your file is linked to a synchronized location, StackEdit will periodically synchronize it by downloading/uploading any modification. A merge will be performed if necessary and conflicts will be resolved.

If you just have modified your file and you want to force syncing, click the **Synchronize now** button in the navigation bar.

> **Note:** The **Synchronize now** button is disabled if you have no file to synchronize.

## Manage file synchronization

Since one file can be synced with multiple locations, you can list and manage synchronized locations by clicking **File synchronization** in the **Synchronize** sub-menu. This allows you to list and remove synchronized locations that are linked to your file.


# Publication

Publishing in StackEdit makes it simple for you to publish online your files. Once you're happy with a file, you can publish it to different hosting platforms like **Blogger**, **Dropbox**, **Gist**, **GitHub**, **Google Drive**, **WordPress** and **Zendesk**. With [Handlebars templates](http://handlebarsjs.com/), you have full control over what you export.

> Before starting to publish, you must link an account in the **Publish** sub-menu.

## Publish a File

You can publish your file by opening the **Publish** sub-menu and by clicking **Publish to**. For some locations, you can choose between the following formats:

- Markdown: publish the Markdown text on a website that can interpret it (**GitHub** for instance),
- HTML: publish the file converted to HTML via a Handlebars template (on a blog for example).

## Update a publication

After publishing, StackEdit keeps your file linked to that publication which makes it easy for you to re-publish it. Once you have modified your file and you want to update your publication, click on the **Publish now** button in the navigation bar.

> **Note:** The **Publish now** button is disabled if your file has not been published yet.

## Manage file publication

Since one file can be published to multiple locations, you can list and manage publish locations by clicking **File publication** in the **Publish** sub-menu. This allows you to list and remove publication locations that are linked to your file.


# Markdown extensions

StackEdit extends the standard Markdown syntax by adding extra **Markdown extensions**, providing you with some nice features.

> **ProTip:** You can disable any **Markdown extension** in the **File properties** dialog.


## SmartyPants

SmartyPants converts ASCII punctuation characters into "smart" typographic punctuation HTML entities. For example:

|                |ASCII                          |HTML                         |
|----------------|-------------------------------|-----------------------------|
|Single backticks|`'Isn't this fun?'`            |'Isn't this fun?'            |
|Quotes          |`"Isn't this fun?"`            |"Isn't this fun?"            |
|Dashes          |`-- is en-dash, --- is em-dash`|-- is en-dash, --- is em-dash|


## KaTeX

You can render LaTeX mathematical expressions using [KaTeX](https://khan.github.io/KaTeX/):

The *Gamma function* satisfying $\Gamma(n) = (n-1)!\quad\forall n\in\mathbb N$ is via the Euler integral

$$
\Gamma(z) = \int_0^\infty t^{z-1}e^{-t}dt\,.
$$

> You can find more information about **LaTeX** mathematical expressions [here](http://meta.math.stackexchange.com/questions/5020/mathjax-basic-tutorial-and-quick-reference).


## UML diagrams

You can render UML diagrams using [Mermaid](https://mermaidjs.github.io/). For example, this will produce a sequence diagram:

```mermaid
sequenceDiagram
Alice ->> Bob: Hello Bob, how are you?
Bob-->>John: How about you John?
Bob--x Alice: I am good thanks!
Bob-x John: I am good thanks!
Note right of John: Bob thinks a long<br/>long time, so long<br/>that the text does<br/>not fit on a row.

Bob-->Alice: Checking with John...
Alice->John: Yes... John, how are you?
```

And this will produce a flow chart:

```mermaid
graph LR
A[Square Rect] -- Link text --> B((Circle))
A --> C(Round Rect)
B --> D{Rhombus}
C --> D
```
