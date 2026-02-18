// 1. DATABASE PRODUK (Update Terbaru)
const products = [
    // --- Kategori VPS/Panel ---
    { name: "VPS Ram 4Gb | 2 Core", price: "Rp 30.000", desc: "High Performance Server." },
    { name: "VPS Ram 8Gb | 4 Core", price: "Rp 35.000", desc: "Extra Power for multitasking." },
    { name: "VPS Ram 16Gb | 4 Core", price: "Rp 40.000", desc: "Pro Level Server Specs." },
    { name: "VPS Ram 16Gb | 8 Core", price: "Rp 65.000", desc: "Beast Mode Server." },
    { name: "Panel Unlimited", price: "Rp 12.000", desc: "Akses panel tanpa batas." },
    { name: "Admin Panel", price: "Rp 14.000", desc: "Full control admin akses." },
    { name: "Reseller Panel", price: "Rp 14.000", desc: "Bisa jual kembali (Best Seller)." },
    
    // --- Kategori Kelas ---
    { name: "Kelas Hacking: Basic", price: "Rp 200.000", desc: "Fondasi dasar Hacking." },
    { name: "Kelas Hacking: Lanjut/Penetrasi", price: "Rp 800.000", desc: "Advanced penetration testing." }
];

// 2. FUNGSI RENDER (Tetap Sama)
const container = document.getElementById('product-list');
function renderProducts() {
    container.innerHTML = ""; // Bersihkan list lama
    products.forEach(p => {
        container.innerHTML += `
            <div class="product-card">
                <h3>${p.name}</h3>
                <p style="color: #a1a1aa; font-size: 0.8rem;">${p.desc}</p>
                <div class="flex-between">
                    <span class="price">${p.price}</span>
                    <button onclick="openModal('${p.name}')">BELI</button>
                </div>
            </div>
        `;
    });
}

// 3. LOGIKA INTERAKSI (Tetap Sama)
function openModal(name) {
    document.getElementById('product-title').innerText = name;
    document.getElementById('payment-modal').classList.add('show');
}

function closeModal() {
    document.getElementById('payment-modal').classList.remove('show');
}

function confirmPayment() {
    // 1. Sembunyikan modal bayar dan tampilkan layar sukses
    document.getElementById('payment-modal').classList.remove('show');
    document.getElementById('success-screen').classList.add('show');
    
    // 2. Ambil nama produk yang tadi dipilih (untuk isi pesan WA)
    const namaProduk = document.getElementById('product-title').innerText;

    // 3. SETTING WHATSAPP KAMU
    const nomorWA = "6285129698407"; // GANTI dengan nomor WA kamu (wajib pakai 62, bukan 0)
    const pesan = `Halo Admin CyberHub, saya sudah melakukan pembayaran untuk: %0A*${namaProduk}*%0A%0AMohon segera diproses ya! Berikut bukti transfernya:`;

    // 4. Buka WhatsApp otomatis setelah jeda 2 detik
    // Jeda ini supaya user sempat melihat layar "Berhasil" dulu
    setTimeout(() => {
        window.open(`https://wa.me/${nomorWA}?text=${pesan}`, '_blank');
    }, 2000);
}

function goHome() {
    document.getElementById('success-screen').classList.remove('show');
}

renderProducts();
