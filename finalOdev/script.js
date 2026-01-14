document.addEventListener("DOMContentLoaded", function () {

  alert("PortCity Tanıtım Sitesine Hoş Geldiniz");

  // Menü hover + aktif
  let menuLinkleri = document.querySelectorAll(".menu-link");

  menuLinkleri.forEach(function (link) {
    link.addEventListener("mouseover", function () {
      link.style.color = "orange";
    });

    link.addEventListener("mouseout", function () {
      link.style.color = "white";
    });

    link.addEventListener("click", function () {
      menuLinkleri.forEach(l => l.classList.remove("aktif"));
      link.classList.add("aktif");
    });
  });

  // Tema
  let temaButon = document.getElementById("temaButon");
  if (temaButon) {
    temaButon.addEventListener("click", function () {
      document.body.classList.toggle("koyu");
    });
  }

  // Services hover
  let satirlar = document.querySelectorAll("table tr");
  satirlar.forEach(function (satir) {
    satir.addEventListener("mouseover", function () {
      satir.title = "Bu aktivite PortCity'de yapılmaktadır";
    });
    satir.addEventListener("mouseout", function () {
      satir.title = "";
    });
  });

  // Dinamik liste
  let aktiviteler = ["Tekne Turu", "Dalış Deneyimi", "Marina Restoranları", "Gün Batımı Yürüyüşü"];
  let liste = document.getElementById("aktiviteListesi");

  if (liste) {
    aktiviteler.forEach(function (aktivite) {
      let li = document.createElement("li");
      li.textContent = aktivite;
      liste.appendChild(li);
    });
  }

  // Beğeni sayacı
  let sayac = 0;
  let begenButon = document.getElementById("begenButon");
  let begenYazi = document.getElementById("begenSayisi");

  if (begenButon) {
    begenButon.addEventListener("click", function () {
      sayac++;
      begenYazi.textContent = sayac;
    });
  }

  // Form kontrol
  let form = document.getElementById("iletisimForm");
  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();

      let ad = document.getElementById("ad").value;
      let eposta = document.getElementById("eposta").value;
      let mesaj = document.getElementById("mesaj").value;

      if (ad === "" || eposta === "" || mesaj === "") {
        alert("Lütfen tüm alanları doldurun!");
      } else {
        alert("Mesajınız başarıyla gönderildi!");
        form.reset();
      }
    });
  }

  // Görsel büyütme
  let resim = document.querySelector(".buyutulecek");
  if (resim) {
    resim.addEventListener("click", function () {
      resim.classList.toggle("buyuk");
    });
  }

});
