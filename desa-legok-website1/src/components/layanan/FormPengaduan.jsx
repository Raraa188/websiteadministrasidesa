import React, { useState } from 'react';

// Daftar Kategori Pengaduan
const CATEGORIES = [
    { value: 'kependudukan', label: 'Layanan Kependudukan' },
    { value: 'infrastruktur', label: 'Infrastruktur / Sarana Desa' },
    { value: 'keuangan', label: 'Pengelolaan Keuangan Desa' },
    { value: 'pegawai', label: 'Kinerja Pegawai / Pelayanan' },
    { value: 'lain', label: 'Lain-lain' },
];

// Pastikan props 'onBack' diterima jika komponen ini dipanggil dari navigasi
export default function FormPengaduan({ onBack }) { 
    const [formData, setFormData] = useState({
        nik: '',
        nama: '',
        telepon: '',
        kategori: '',
        judul: '',
        detail: '',
    });
    const [buktiFile, setBuktiFile] = useState(null);
    
    // Kita hapus variabel COLOR_ACCENT karena warna akan diatur per elemen

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleFileChange = (e) => {
        setBuktiFile(e.target.files[0]);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        
        // Logika pengiriman data (simulasi)
        console.log("Data Pengaduan Terkirim:", {
            ...formData,
            bukti: buktiFile ? buktiFile.name : 'Tidak Ada Bukti'
        });
        
        alert(`Pengaduan dengan Judul "${formData.judul}" berhasil dikirim. Terima kasih atas laporannya!`);
        
        // Reset Formulir
        setFormData({ nik: '', nama: '', telepon: '', kategori: '', judul: '', detail: '' });
        setBuktiFile(null);
    };

    return (
        <div className={`mt-6 bg-white p-8 rounded-2xl shadow-lg border-t-4 border-red-500`}>
            
            {/* Tombol Kembali (Warna default/abu-abu) */}
            {onBack && (
                <button
                    onClick={onBack}
                    className={`text-sm mb-4 text-gray-600 hover:underline`} // Warna diubah ke abu-abu/netral
                >
                    ← Kembali
                </button>
            )}

            {/* Judul: Merah */}
            <h3 className={`text-2xl font-bold mb-6 flex items-center gap-2 text-red-600`}>
                <i className="fas fa-bullhorn"></i> Formulir Lapor & Pengaduan
            </h3>

            {/* Kotak Info: Abu-abu/Netral */}
            <div className={`p-4 bg-gray-100 border border-gray-300 rounded-lg mb-6 shadow-sm`}>
                <p className={`text-sm text-gray-700 font-medium`}>
                    Identitas Anda akan dirahasiakan jika diperlukan. Lengkapi data di bawah ini dengan akurat.
                </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
                
                {/* BAGIAN 1: DATA PELAPOR */}
                <div className="border p-4 rounded-lg bg-gray-50">
                    <h4 className="font-semibold text-lg mb-3 text-gray-700">1. Data Pelapor</h4>
                    <div className="space-y-3">
                        {/* NIK */}
                        <div>
                            <label className="block text-sm font-medium">NIK (Wajib)</label>
                            <input
                                type="number"
                                name="nik"
                                value={formData.nik}
                                onChange={handleChange}
                                className="w-full border rounded-lg px-4 py-2 bg-white"
                                placeholder="NIK Anda"
                                required
                            />
                        </div>
                        {/* NAMA */}
                        <div>
                            <label className="block text-sm font-medium">Nama Lengkap (Wajib)</label>
                            <input
                                type="text"
                                name="nama"
                                value={formData.nama}
                                onChange={handleChange}
                                className="w-full border rounded-lg px-4 py-2 bg-white"
                                placeholder="Nama Lengkap Anda"
                                required
                            />
                        </div>
                        {/* TELEPON */}
                        <div>
                            <label className="block text-sm font-medium">Nomor Telepon/HP (Wajib)</label>
                            <input
                                type="tel"
                                name="telepon"
                                value={formData.telepon}
                                onChange={handleChange}
                                className="w-full border rounded-lg px-4 py-2 bg-white"
                                // FIX: Placeholder sudah diperbaiki
                                placeholder="08...." 
                                required
                            />
                        </div>
                    </div>
                </div>

                {/* BAGIAN 2: DETAIL PENGADUAN */}
                <div className="border p-4 rounded-lg bg-gray-50">
                    <h4 className="font-semibold text-lg mb-3 text-gray-700">2. Detail Pengaduan</h4>
                    <div className="space-y-3">
                        {/* KATEGORI */}
                        <div>
                            <label className="block text-sm font-medium">Kategori Pengaduan (Wajib)</label>
                            <select
                                name="kategori"
                                value={formData.kategori}
                                onChange={handleChange}
                                className="w-full border rounded-lg px-4 py-2 bg-white"
                                required
                            >
                                <option value="" disabled>-- Pilih Kategori --</option>
                                {CATEGORIES.map(cat => (
                                    <option key={cat.value} value={cat.value}>{cat.label}</option>
                                ))}
                            </select>
                        </div>
                        
                        {/* JUDUL Laporan */}
                        <div>
                            <label className="block text-sm font-medium">Judul Laporan (Wajib)</label>
                            <input 
                                type="text" 
                                name="judul"
                                value={formData.judul}
                                onChange={handleChange}
                                className="w-full border rounded-lg px-4 py-2 bg-white" 
                                placeholder="Judul Singkat Pengaduan"
                                required
                            />
                        </div>

                        {/* DESKRIPSI */}
                        <div>
                            <label className="block text-sm font-medium">Deskripsi Detail (Wajib)</label>
                            <textarea 
                                rows="3" 
                                name="detail"
                                value={formData.detail}
                                onChange={handleChange}
                                className="w-full border rounded-lg px-4 py-2 bg-white"
                                placeholder="Jelaskan detail pengaduan Anda..."
                                required
                            ></textarea>
                        </div>
                        
                        {/* UPLOAD BUKTI */}
                        <div className="pt-2">
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                                Unggah Bukti (Foto/Dokumen, Opsional)
                            </label>
                            <input
                                type="file"
                                onChange={handleFileChange}
                                // Warna file upload diubah menjadi abu-abu netral
                                className={`w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-gray-200 file:text-gray-700 hover:file:bg-gray-300`}
                            />
                            {buktiFile && <p className="text-xs text-green-600 mt-1">✓ File Terunggah: {buktiFile.name}</p>}
                        </div>
                    </div>
                </div>
                
                {/* Tombol Submit: Merah */}
                <button 
                    type="submit" 
                    className={`w-full bg-red-600 text-white font-bold py-3 rounded-lg hover:bg-red-700 transition`}
                >
                    Kirim Laporan / Pengaduan
                </button>
            </form>
        </div>
    );
}