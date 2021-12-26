function randomProvinsi() {
  const prov = document.getElementById("Provinsi").value;
  console.log(prov);
  if (prov === "Sumatra Barat") {
    var array = ["Padang", "Bukittinggi", "Solok", "Payakumbuh", "Pesisir"];
  } else if (prov === "Jawa Tengah") {
    var array = ["Semarang", "Klaten", "Solo", "Salatiga", "Magelang"];
  } else if (prov === "Banten") {
    var array = ["Serang", "Tangerang", "Tangerang Selatan", "Cilegon"];
  } else if (prov === "Jawa Barat") {
    var array = ["Bandung", "Bekasi Timur", "Bekasi", "Depok", "Cimahi"];
  } else if (prov === "DKI Jakarta") {
    var array = [
      "Jakarta Pusat",
      "Jakarta Utara",
      "Jakarta Selatan",
      "Jakarta Barat",
    ];
  } else {
    var array = [];
  }
  var string = "";
  for (let index = 0; index < array.length; index++) {
    string = string + "<option>" + array[index] + "</option>";
  }

  let namkota = (document.getElementById("Kota").innerHTML = string);
}
function randomKota() {
  const prov = document.getElementById("Provinsi").value;
  const kota = document.getElementById("Kota").value;
  var result = document.getElementById("hasil");
  result.innerText = "Pada provinsi " + prov + " ada kota " + kota;
}
function Change() {
  console.log();
  var gantitema = document.body;
  gantitema.classList.toggle("dark-mode");
}
