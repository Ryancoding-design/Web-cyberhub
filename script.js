// 1. DATABASE PRODUK (Update Full List + Status)
const products = [
    // --- VPS DEDICATED BUDGET ---
    { name: "VPS Paket 512MB", price: "33.000", status: "Habis", desc: "1 CPU, 512MB RAM, 20GB SSD, 10Gbps Lokal." },
    { name: "VPS Paket 1GB", price: "60.000", status: "Tersedia", desc: "1 CPU, 1024MB RAM, 25GB SSD, 10Gbps Lokal." },
    { name: "VPS Paket 4GB", price: "165.000", status: "Tersedia", desc: "2 CPU, 4GB RAM, 40GB SSD, Kencang & Stabil." },
    { name: "VPS Paket 8GB", price: "420.000", status: "Tersedia", desc: "3 CPU, 8GB RAM, 60GB SSD, Rata Kanan!" },
    
    // --- PANEL PTERODACTYL ---
    { name: "Panel: CUPU", price: "5.000", status: "Tersedia", desc: "RAM 2GB, CPU 100%, Disk 2GB. Cocok buat bot." },
    { name: "Panel: BIASA", price: "10.000", status: "Tersedia", desc: "RAM 3GB, CPU 130%, Disk 2GB." },
    { name: "Panel: ORANG PENTING", price: "16.000", status: "Tersedia", desc: "RAM 4GB, CPU 150%, Disk 3GB." },
    { name: "Panel: ORANG KAYA", price: "18.000", status: "Tersedia", desc: "RAM 6GB, CPU 180%, Disk 5GB." },
    { name: "Panel: SULTAN", price: "20.000", status: "Tersedia", desc: "RAM 8GB, CPU 200%, Disk 6GB." },
    
    // --- AKSES ADMIN & RESELLER ---
    { name: "ADMIN AKSES PANEL", price: "35.000", status: "Tersedia", desc: "Limit 10 User, Bisa create server sendiri, Aman & Private." },
    
    // --- KATEGORI KELAS ---
    { name: "Kelas Hacking: Basic", price: "200.000", status: "Tersedia", desc: "Fondasi dasar Hacking & Cyber Sec." },
    { name: "Kelas Hacking: Lanjut", price: "800.000", status: "Tersedia", desc: "Advanced Penetration Testing." }
];

// 2. FUNGSI RENDER (Dengan Logika Stok)
const container = document.getElementById('product-list');

function renderProducts() {
    container.innerHTML = ""; 
    products.forEach(p => {
        // Logika warna label status
        const isHabis = p.status.toLowerCase() === "habis";
        const statusColor = isHabis ? "#ef4444" : "#10b981"; // Merah jika habis, Hijau jika tersedia
        const btnDisabled = isHabis ? "disabled style='opacity: 0.5; cursor: not-allowed;'" : "";
        const btnText = isHabis ? "STOK HABIS" : "BELI";

        container.innerHTML += `
            <div class="product-card">
                <div style="display: flex; justify-content: space-between; align-items: flex-start;">
                    <h3>${p.name}</h3>
                    <span style="font-size: 10px; padding: 2px 8px; border-radius: 20px; background: ${statusColor}22; color: ${statusColor}; border: 1px solid ${statusColor}; font-weight: bold;">
                        ${p.status.toUpperCase()}
                    </span>
                </div>
                <p style="color: #a1a1aa; font-size: 0.8rem; margin: 10px 0;">${p.desc}</p>
                <div class="flex-between">
                    <span class="price">Rp ${p.price}</span>
                    <button onclick="openModal('${p.name}')" ${btnDisabled}>${btnText}</button>
                </div>
            </div>
        `;
    });
}

// 3. LOGIKA MODAL & WA (Tetap Sama)
function openModal(name) {
    document.getElementById('product-title').innerText = name;
    document.getElementById('payment-modal').classList.add('show');
}

function closeModal() {
    document.getElementById('payment-modal').classList.remove('show');
}

function confirmPayment() {
    document.getElementById('payment-modal').classList.remove('show');
    document.getElementById('success-screen').classList.add('show');
    
    const namaProduk = document.getElementById('product-title').innerText;
    const nomorWA = "6285129698407"; 
    const pesan = `Halo Admin CyberHub,%0Asaya ingin membeli produk: *${namaProduk}*%0A%0ASaya sudah melakukan scan QRIS. Mohon segera diproses!`;

    setTimeout(() => {
        window.open(`https://api.whatsapp.com/send?phone=${nomorWA}&text=${pesan}`, '_blank');
    }, 2000);
}

function goHome() {
    document.getElementById('success-screen').classList.remove('show');
}

renderProducts();
