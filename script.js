function kirimData(event) {
  event.preventDefault();

  var namaKucing = document.getElementById("namaKucing").value;
  var jenisKucing = document.getElementById("jenisKucing").value;
  var warna = document.querySelector("input[name=warna]:checked"); 
  var tanggal = document.getElementById("tanggalLahir").value; 
  var deskripsi = document.getElementById("deskripsi").value;

  // validasi semua kolom terisi
  if (!namaKucing || !jenisKucing || !deskripsi || !tanggal) {
    alert("Mohon lengkapi semua data.");
    return;
  }

  // Pastikan peminatan sudah dipilih
  if (!warna) {
    alert("Mohon pilih peminatan.");
    return;
  }

  var nilaiwarna = warna.value; 

  alert(
    "Nama : " + namaKucing +
    "\nNIM / Angkatan : " + jenisKucing +
    "\nPeminatan : " + nilaiwarna +
    "\nTanggal : " + tanggal +
    "\nAlamat : " + deskripsi 
  );

  clearForm();
}

function clearForm() {
  document.getElementById("namaKucing").value = ""; 
  document.getElementById("jenisKucing").value = "";   
  document.getElementById("deskripsi").value = "";
  document.getElementById("tanggalLahir").value = ""; 

  var radioButtons = document.querySelectorAll('input[name="warna"]');
  for (var i = 0; i < radioButtons.length; i++) {
    radioButtons[i].checked = false;
  }
}