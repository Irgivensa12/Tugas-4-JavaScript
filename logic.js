function inputNamNum(){
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

    disableInput();
    // Membersihkan tampilan sebelumnya
    const konten = document.getElementById("konten2");
    konten.innerHTML = "";

    // Menampilkan input untuk memasukkan pilihan takjil
    for(let i= 1; i <= jmlPil; i++){
        const label = document.createElement("label");
        label.textContent = `Pilihan ${i}: `;

        const input = document.createElement("input");
        input.type = "text";
        input.placeholder = `Teks Pilihan ${i}`;
        input.id = `kumpPilihan${i}`; // Set the id for each input

        konten.appendChild(label);
        konten.appendChild(input);
        konten.appendChild(document.createElement("br")); // Membuat break
    }
    // Buat tombol untuk konfirmasi pilihan
    const konfBut = document.createElement("button");
    konfBut.textContent = "OK";
    konfBut.onclick = function(){
        // Panggil metode pilihanTakjil untuk menampilkan pilihan pengguna
        pilihanTakjil(nama, jmlPil); 
    };
    konten.appendChild(konfBut); // Menambah button OK (konBut) ke kelas div id konten2 lewat variabel pilihanUser
}

function pilihanTakjil(nama, jumPil){
    let kumpPilihan = []; // Array untuk menyimpan hasil pilihan dari user

    for(let i = 1; i <= jumPil; i++ ){ // For untuk mengambil nilai dari input pilihan
        let hasPil = document.querySelector(`#kumpPilihan${i}`).value.trim(); // Mengambil nilai tiap input
        if(hasPil == ""){ // Cek apakah ada input atau tidak
            alert(`Pilihan ${i} harus diisi!`); // Munculkan peringatan jika pilihan kosong
            return; // Memberikan return agar eksekusi berhenti
        }
        kumpPilihan.push(hasPil); // Menambahkan pilihan ke array pilihan
    }

    const konten2 = document.getElementById("konten2");
    konten2.innerHTML = ""; // Hapus tampilan sebelumnya

    // Pilihan menggunakan Drop-down
    const dropdown = document.createElement("select");
    dropdown.id = "dropdownPilihan";
    for (let i = 0; i < kumpPilihan.length; i++) {
        const option = document.createElement("option");
        option.value = kumpPilihan[i];
        option.textContent = kumpPilihan[i];
        dropdown.appendChild(option);
    }

    // Tombol untuk menampilkan hasil akhir
    const finBut = document.createElement("button");
    finBut.textContent ="OK";
    finBut.onclick = function (e){
        e.preventDefault(); // Menambahkan event preventDefault untuk mencegah halaman reload
        tampilkanHasil(nama, jumPil, kumpPilihan);
    };
    konten2.appendChild(document.createElement("h3")).textContent = "Pilih Takjil Favorit:";
    konten2.appendChild(dropdown);
    konten2.appendChild(document.createElement("br"));
    konten2.appendChild(finBut);
}

function tampilkanHasil(nama, jumlahPilih, takjilPilihan){
    const hasil = document.getElementById("konten2");
    const dropdownPil = document.getElementById("dropdownPilihan").value;

    hasil.innerHTML = `
        <p>Hallo, nama saya <strong>${nama}</strong>, saya mempunyai sejumlah <strong>${jumlahPilih}</strong> pilihan takjil yaitu:</p>
        <p><strong>${takjilPilihan.join(", ")}</strong></p>
        <p>dan saya memilih: <strong>${dropdownPil}</strong></p>
    `;
}
function disableInput() {
    document.getElementById('nama').setAttribute('disabled', true);
    document.getElementById('jumlahPilih').setAttribute('disabled', true);
    document.getElementById("OK1").setAttribute("disabled", true);
}
