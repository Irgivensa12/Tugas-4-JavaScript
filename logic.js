function inputNamNum(){ // Membuat function untuk membuat event handling semua tombol ok, dan logic untuk emnangani input user 
    const nama = document.getElementById("nama").value; // Menangkap input dari div yang id nya nama
    const jmlPil = document.getElementById("jumlahPilih").value; // Menangkap input dari div yang id nya jumlahPilih

    // Membuat 2 statement if untuk mengecek input nama dan jumlah pilihan
    if(nama.trim() == ""){ // Trim menghapus spasi di awal & akhir agar dianggap tidak kosong
        alert("Silahkan Masukkan Nama!"); // Mengirim pesan peringatan (alert) agar user tidak mengosongkan input nama
        return; // Memberi return agar perintah if berhenti
    }

    if(jmlPil == ""){ 
        alert("Silahkan Masukkan Pilihan Anda!");
        return;
    }
    console.log("Nama: ", nama); // Mencetak teks "Nama" dan isi variabel nama di console log
    console.log("Jumlah Pilihan: ", jmlPil)

    disableInput(); // Memanggil metode untuk digunakan
    // Membersihkan tampilan sebelumnya agar elemen yang sama tidak tertimpa
    const konten = document.getElementById("konten2");
    konten.innerHTML = "";

    // Menampilkan input untuk memasukkan pilihan takjil
    for(let i= 1; i <= jmlPil; i++){
        const label = document.createElement("label");
        label.textContent = `Pilihan ${i}: `;

        const input = document.createElement("input");
        input.type = "text";
        input.placeholder = `Teks Pilihan ${i}`;
        input.id = `kumpPilihan${i}`; // Memberi nama id input 

        konten.appendChild(label); // Menambahkan label ke div id konten2
        konten.appendChild(input); // Menambahkan input ke div id konten2
        konten.appendChild(document.createElement("br")); // Membuat break untuk memberikan jarak baris baru antar elemen
    }
    // Buat tombol  ok untuk konfirmasi pilihan
    const okBut = document.createElement("button");
    okBut.textContent = "OK";
    okBut.onclick = function(){
        // Panggil metode pilihanTakjil untuk menampilkan pilihan pengguna
        pilihanTakjil(nama, jmlPil); 
    };
    konten.appendChild(okBut); // Menambah button OK (okBut) ke kelas div id konten2 lewat variabel pilihanUser
}

function pilihanTakjil(nama, jumPil){ // Membuat function ini untuk mengelola dan menampilkan hasil pilihan user
    let kumpPilihan = []; // Array untuk menyimpan hasil pilihan dari user

    for(let i = 1; i <= jumPil; i++ ){ // For untuk mengambil nilai dari input pilihan
        let hasPil = document.querySelector(`#kumpPilihan${i}`).value.trim(); // Mengambil nilai tiap input
        if(hasPil == ""){ // Cek apakah ada input atau tidak
            alert(`Pilihan ${i} harus diisi!`); // Munculkan peringatan jika pilihan kosong
            return; // Memberikan return agar eksekusi berhenti
        }
        kumpPilihan.push(hasPil); // Menambahkan pilihan ke array pilihan
    }

    const konten2 = document.getElementById("konten2"); // Menangkap div yang id nya konten2
    konten2.innerHTML = ""; // Hapus tampilan sebelumnya agar elemen yang sama tertindih

    // Pilihan diatur menggunakan Drop-down
    const dropdown = document.createElement("select");// Membuat elemen select untuk menampilkan daftar pilihan yang dapat dipilih user 
    dropdown.id = "dropdownPilihan"; // Memberi nama id pada element select
    for (let i = 0; i < kumpPilihan.length; i++) {  // Membuat for yang digunakan untuk mengakses setiap elemen di array kumpPilihan
        const option = document.createElement("option"); //Membuat elemen option sebagai opsi pilih untuk setiap item di array kumpPilihan
        option.value = kumpPilihan[i]; //  Memberi value untuk menetapkan nilai yang akan dikirimkan jika opsi tersebut dipilih, i sebagai indeks array
        option.textContent = kumpPilihan[i]; // textContent untuk menampilkan teks yang akan terlihat oleh user di dropdown
        dropdown.appendChild(option); // Menambahkan opsi (option) ke dalam dropdown
    }

    // Tombol untuk menampilkan hasil akhir pilihan dropdown
    const okBut2 = document.createElement("button"); // Membuat tombol ok untuk menampilkan pilihan dropdown
    okBut2.textContent ="OK"; // Memberi nama tombol "OK"
    okBut2.onclick = function (e){ // Menambahkan event handling klik mouse dan memanggil fungsi anonim yang menerima objek event, e adalah parameter
        e.preventDefault(); // Menambahkan event preventDefault untuk mencegah halaman reload
        tampilkanHasil(nama, jumPil, kumpPilihan); // Memanggil function tampilkanHasil
    };
    konten2.appendChild(document.createElement("h3")).textContent = "Pilih Takjil Favorit:"; // Menambahkan h3 ke div id konten2
    konten2.appendChild(dropdown); // Menambahkan dropdown ke div id konten2
    konten2.appendChild(document.createElement("br")); // Membuat elemen baru br untuk memberi jarak dan menambahkannya ke div id konten2
    konten2.appendChild(okBut2); // // Menambahkan tombol OK ke div id konten2
}

function tampilkanHasil(nama, jumlahPilih, takjilPilihan){ // Membuat function ini untuk menampilkan beberapa teks dan hasil pilihan user
    const hasil = document.getElementById("konten2"); // Menangkap div id konten2
    const dropdownPil = document.getElementById("dropdownPilihan").value; // Menangkap dropdown dg id dropdownPilihan

    // Membuat beberapa elemen dan paragraf yang bisa menampung dan menampilkan hasil pilihan user
    hasil.innerHTML = `
        <p>Hallo, nama saya <strong>${nama}</strong>, saya mempunyai sejumlah <strong>${jumlahPilih}</strong> pilihan takjil yaitu:</p>
        <p><strong>${takjilPilihan.join(", ")}</strong></p>
        <p>dan saya memilih: <strong>${dropdownPil}</strong></p>
    `;
}
function disableInput() { // Membuat function ini untuk mematikan akses pengisian nama, jumlah pilihan, dan tombol ok tampilan pertama
    document.getElementById('nama').setAttribute('disabled', true); // Menangkap input id nama dan setting disable agar tidak bisa diakses lagi ketika tombol ok ditekan 
    document.getElementById('jumlahPilih').setAttribute('disabled', true); // Menangkap input id jumlahPilih dan setting disable agar tidak bisa diakses lagi ketika tombol ok ditekan 
    document.getElementById("OK1").setAttribute("disabled", true); // Menangkap tombol id OK1 dan setting disable agar tidak bisa diakses lagi ketika tombol ok ditekan 
}
