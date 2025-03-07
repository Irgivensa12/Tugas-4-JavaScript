function inputNamNum(){
let nama = document.getElementById("nama").value;
let angka = document.getElementById("angka").value;

if(nama.trim() == ""){ // trim menghapus spasi di awal & akhir agar dianggap tidak kosong
    alert("Silahkan Masukkan Nama!");
    return;
}

if(angka == ""){
    alert("Silahkan Masukkan Pilihan Anda!");
    return;
}
console.log("Nama: ", nama);
console.log("Angka: ", angka)
}