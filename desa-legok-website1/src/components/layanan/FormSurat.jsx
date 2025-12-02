import React, { useState } from 'react';

// --- DATA PERSYARATAN UNTUK SEMUA SURAT UPLOAD ---

const PERSYARATAN_AKTA_LAHIR = [
    "Formulir F2.01",
    "Surat Kelahiran asli dari Bidan atau Dokter / Desa",
    "Kartu Keluarga (KK) terbaru",
    "Surat Nikah atau Akta Perkawinan Orang Tua",
    "KTP-eL Pelapor",
    "KTP-eL saksi",
    "Surat Pernyataan anak seorang ibu (jika di luar nikah)",
    "Surat Kehilangan Dari Kepolisian (jika Akta Kelahiran hilang)",
    "Kutipan Kedua (jika Akta Kelahiran rusak)"
];

const PERSYARATAN_AKTA_MATI = [
    "Formulir F2.31",
    "Kartu Keluarga",
    "KTP-eL Jenazah",
    "KTP-eL Pelapor",
    "KTP-eL Saksi",
    "Surat Kematian dari Dokter Rumah sakit atau Desa / Kelurahan"
];

const PERSYARATAN_KIA = [
    "Kartu Keluarga (KK) terbaru",
    "Akta Kelahiran Anak",
    "KTP Orang Tua",
    "Pas Foto 2x3 (latar Merah/Biru, khusus anak > 5 tahun)"
];

const PERSYARATAN_KTP = [
    "Kartu Keluarga asli",
    "Surat Keterangan pengganti KTP-el",
    "Surat Kehilangan Kepolisian ( Jika KTP-el hilang )",
    "KTP-el lama jika rusak atau perubahan data elemen yang lain",
    "Catatan Khusus: Bagi Penduduk yang belum melakukan perekaman KTP-el, mohon untuk melakukan perekaman KTP-el di Kantor Kecamatan masing - masing."
];

const PERSYARATAN_SKTM = [
    "Kartu Keluarga Asli",
    "Ktp-El Asli",
    "Pengantar RT/RW Setempat"
];

const PERSYARATAN_PINDAH_DATANG = [
    "F1.01",
    "Surat Keterangan Pindah Wni Dari Asal",
    "Kartu Keluarga Yang Akan Ditumpangi",
    "Surat Nikah / Akta Cerai",
    "Ktp-eL ASLI"
];

const PERSYARATAN_PINDAH_KELUAR = [
    "Kartu Keluarga Asli",
    "Ktp-El Asli",
    "Surat Nikah / Akta Cerai",
    "Surat Pernyataan Lain'nya",
    "Ijin Suami / Istri Bila Pindah Salah Satu",
    "Surat Pernyataan Pindah Anak Dibawah Umur"
];

// --- PERSYARATAN SURAT KETERANGAN USAHA (BARU) ---
const PERSYARATAN_USAHA = [
    "Surat Pengantar RT/RW",
    "Kartu Keluarga (KK)",
    "KTP-eL Pemohon",
    "Foto Lokasi Usaha (jika ada)"
];

// --- PERSYARATAN SURAT KETERANGAN DOMISILI (BARU) ---
const PERSYARATAN_DOMISILI = [
    "Surat Pengantar RT/RW",
    "Kartu Keluarga (KK)",
    "KTP-eL Pemohon",
    "Bukti Kepemilikan/Sewa Rumah (PBB/Surat Perjanjian Sewa)"
];


const PERSYARATAN_KK_SUB = {
    'Baru': ["Formulir F1.01", "Surat Pengantar RT/RW", "Akta Nikah/Cerai", "Akta Kelahiran"],
    'Pindah': ["Formulir F1.06 (Pindah Datang)", "Surat Keterangan Pindah (SKPWNI)"],
    'Hilang': ["Surat Kehilangan Dari Kepolisian", "KTP-eL salah satu anggota KK"],
};

// Daftar surat yang MENGGUNAKAN FORM UPLOAD INTERAKTIF
const UPLOAD_SURAT_LIST = [
    'aktelahir', 'aktemati', 'kia', 'kk', 
    'ktp', 'sktm', 'datang', 'keluar',
    'usaha', 'domisili' // USAHA dan DOMISILI ditambahkan di sini
];


export default function FormSurat({ jenis, onBack }) {
    const [files, setFiles] = useState({});
    const [kkType, setKkType] = useState('Baru');
    const [additionalFields, setAdditionalFields] = useState({
        namaUsaha: '',
        alamatTujuan: ''
    });
    const COLOR_ACCENT = 'blue';
    
    const titleMap = {
        aktelahir: "Akta Kelahiran",
        aktemati: "Akta Kematian",
        kia: "Kartu Identitas Anak",
        ktp: "Kartu Tanda Penduduk (KTP)",
        kk: "Kartu Keluarga (KK)",
        usaha: "Surat Keterangan Usaha",
        domisili: "Surat Keterangan Domisili",
        sktm: "Surat Keterangan Tidak Mampu",
        datang: "Surat Pengantar Pindah Datang",
        keluar: "Surat Pengantar Pindah Keluar",
    };

    // Fungsi untuk mendapatkan data persyaratan berdasarkan jenis surat
    const getPersyaratan = (type, subType = null) => {
        switch (type) {
            case 'aktelahir': return PERSYARATAN_AKTA_LAHIR;
            case 'aktemati': return PERSYARATAN_AKTA_MATI;
            case 'kia': return PERSYARATAN_KIA;
            case 'ktp': return PERSYARATAN_KTP;
            case 'sktm': return PERSYARATAN_SKTM;
            case 'datang': return PERSYARATAN_PINDAH_DATANG;
            case 'keluar': return PERSYARATAN_PINDAH_KELUAR;
            case 'usaha': return PERSYARATAN_USAHA; // BARU
            case 'domisili': return PERSYARATAN_DOMISILI; // BARU
            case 'kk': return PERSYARATAN_KK_SUB[subType] || [];
            default: return [];
        }
    };

    // Handler untuk upload file
    const handleFileChange = (e, requirement) => {
        setFiles({
            ...files,
            [requirement]: e.target.files[0]
        });
    };
    
    // Handler untuk field tambahan
    const handleAdditionalFieldChange = (e) => {
        setAdditionalFields({
            ...additionalFields,
            [e.target.name]: e.target.value
        });
    };

    // Handler untuk Submit
    const handleSubmit = (e) => {
        e.preventDefault();
        
        // Data yang akan dikirim (termasuk file dan field tambahan)
        const submissionData = {
            jenisSurat: titleMap[jenis],
            files: files,
            tambahan: additionalFields // Kirim data tambahan
        }

        console.log(`Mengirim Permohonan ${titleMap[jenis]} dengan data:`, submissionData);
        alert(`Permohonan ${titleMap[jenis]} terkirim! Admin akan segera memproses dokumen yang diunggah.`);
        
        // Reset state
        setFiles({}); 
        setAdditionalFields({ namaUsaha: '', alamatTujuan: '' });
    };
    
    // =========================================================================
    // BAGIAN UTAMA: RENDER FORM UPLOAD INTERAKTIF (Semua Surat)
    // =========================================================================
    
    // Ambil Persyaratan saat ini
    const currentPersyaratan = getPersyaratan(jenis, kkType);

    // Peta Ikon dinamis
    const iconMap = {
        aktelahir: 'fa-baby',
        aktemati: 'fa-skull-crossbones',
        kia: 'fa-id-card',
        kk: 'fa-users',
        ktp: 'fa-id-card-clip',
        sktm: 'fa-hand-holding-dollar',
        datang: 'fa-arrow-right-to-bracket',
        keluar: 'fa-arrow-right-from-bracket',
        usaha: 'fa-store', // IKON BARU
        domisili: 'fa-house-chimney' // IKON BARU
    };
    

    // Peta Pilihan KK untuk Dropdown
    const kkOptions = {
        'Baru': "KK Baru",
        'Pindah': "Perubahan Alamat/Pindah",
        'Hilang': "KK Hilang atau Rusak",
    };

    // Jika jenis surat tidak ada di UPLOAD_SURAT_LIST (misalnya typo atau surat baru), berikan pesan error/fallback.
    if (!UPLOAD_SURAT_LIST.includes(jenis)) {
         return (
             <div className="mt-6 p-6 bg-red-100 text-red-800 rounded-xl shadow-md border border-red-400">
                <p>Error: Jenis surat "{jenis}" tidak dikenali atau tidak memiliki daftar persyaratan.</p>
                <button onClick={onBack} className="mt-4 text-sm underline">← Kembali</button>
             </div>
         );
    }

    return (
        <div className="mt-6 bg-white p-6 rounded-xl shadow-md border">
            {/* TOMBOL KEMBALI */}
            <button
                onClick={onBack}
                className="text-sm mb-4 text-desa-main hover:underline"
            >
                ← Kembali ke daftar surat
            </button>
            
            <h3 className={`text-xl font-bold mb-4 text-${COLOR_ACCENT}-600`}>
                <i className={`fas ${iconMap[jenis] || 'fa-file'} mr-2`}></i> {titleMap[jenis]} (Upload Dokumen)
            </h3>

            {/* KHUSUS KK: DROPDOWN UNTUK PILIH TIPE PERMOHONAN */}
            {jenis === 'kk' && (
                <div className="mb-6">
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                        Pilih Jenis Permohonan Kartu Keluarga:
                    </label>
                    <select
                        value={kkType}
                        onChange={(e) => {
                            setKkType(e.target.value);
                            setFiles({}); 
                        }}
                        className="w-full border rounded-lg px-4 py-2 bg-white text-gray-800"
                    >
                        {Object.entries(kkOptions).map(([key, value]) => (
                            <option key={key} value={key}>{value}</option>
                        ))}
                    </select>
                </div>
            )}

            {/* SIMULASI CHATBOT / PERSYARATAN */}
            <div className={`p-4 bg-${COLOR_ACCENT}-50 border border-${COLOR_ACCENT}-300 rounded-lg mb-6 shadow-sm`}>
                <h4 className={`font-bold text-${COLOR_ACCENT}-800 mb-2 flex items-center gap-2`}>
                    <i className="fas fa-robot"></i> Asisten Persyaratan
                </h4>
                <p className="text-sm text-gray-700 mb-3">
                    Berikut adalah daftar lengkap dokumen yang wajib Anda unggah untuk **{jenis === 'kk' ? kkOptions[kkType] : titleMap[jenis]}**:
                </p>
                <ol className="list-decimal list-inside text-sm text-gray-700 space-y-1">
                    {currentPersyaratan.length > 0 ? (
                        currentPersyaratan.map((req, index) => (
                            <li key={index} className="font-medium">{req}</li>
                        ))
                    ) : (
                        <li className="text-red-500">Pilih jenis permohonan Kartu Keluarga di atas.</li>
                    )}
                </ol>
            </div>

            {/* FORM UPLOAD DOKUMEN DAN FIELD TAMBAHAN */}
            <form onSubmit={handleSubmit} className="space-y-4 border-t pt-4">
                
                {/* FIELD TAMBAHAN: NAMA USAHA (Hanya muncul jika jenis = 'usaha') */}
                {jenis === "usaha" && (
                    <div className="p-3 border rounded-lg bg-yellow-50">
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                            Nama Usaha yang Akan Diajukan
                        </label>
                        <input
                            type="text"
                            name="namaUsaha"
                            onChange={handleAdditionalFieldChange}
                            value={additionalFields.namaUsaha}
                            className="w-full border rounded-lg px-4 py-2 bg-white"
                            placeholder="Contoh: Toko Sembako Jaya"
                            required
                        />
                    </div>
                )}
                
                {/* FIELD TAMBAHAN: ALAMAT TUJUAN PINDAH (Hanya muncul jika jenis = 'datang'/'keluar') */}
                {(jenis === "datang" || jenis === "keluar") && (
                    <div className="p-3 border rounded-lg bg-yellow-50">
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                            Alamat Tujuan Pindah
                        </label>
                        <textarea
                            name="alamatTujuan"
                            onChange={handleAdditionalFieldChange}
                            value={additionalFields.alamatTujuan}
                            className="w-full border rounded-lg px-4 py-2 bg-white"
                            placeholder="Tuliskan alamat lengkap tujuan pindah"
                            rows="3"
                            required
                        ></textarea>
                    </div>
                )}

                <h4 className="text-lg font-semibold mt-6 pt-4 border-t">Unggah Dokumen Persyaratan:</h4>

                {currentPersyaratan.map((req, index) => (
                    <div key={index} className="p-3 border rounded-lg bg-gray-50">
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                            Unggah Dokumen: <span className="font-semibold">{req}</span>
                        </label>
                        <input
                            type="file"
                            // Catatan Khusus tidak perlu input file
                            disabled={req.startsWith("Catatan Khusus:")} 
                            onChange={(e) => handleFileChange(e, req)}
                            className={`w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-${COLOR_ACCENT}-100 file:text-${COLOR_ACCENT}-700 hover:file:bg-${COLOR_ACCENT}-200`}
                            required={!req.startsWith("Catatan Khusus:")} // Tidak wajib jika hanya catatan
                        />
                        {files[req] && <p className="text-xs text-green-600 mt-1">✓ File Terunggah: {files[req].name}</p>}
                    </div>
                ))}
                
                <button 
                    type="submit" 
                    className={`w-full bg-${COLOR_ACCENT}-600 text-white font-bold py-3 rounded-lg hover:bg-${COLOR_ACCENT}-700 transition`}
                    disabled={currentPersyaratan.length === 0}
                >
                    Submit Semua Dokumen untuk Verifikasi
                </button>
            </form>
        </div>
    );
}