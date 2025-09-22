document.addEventListener("DOMContentLoaded", function () {
  const tombol = document.getElementById("btn-alert");
  if (tombol) {
    tombol.addEventListener("click", function () {
      alert("Halo, ini berhasil dari file JS di GitHub!");
    });
  }
});
