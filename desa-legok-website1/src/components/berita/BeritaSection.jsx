import React from 'react';
import BeritaCard from './BeritaCard'; 

// Data Dummy Berita (Tidak berubah)
const BERITA_LIST = [
    { id: 1, tanggal: "15 November 2025", kategori: "Pembangunan", judul: "Peningkatan Mutu Jalan Lingkungan RT 05: Program Tuntas di Akhir Tahun", imageUrl: "/images/jalan_desa.jpg" },
    { id: 2, tanggal: "01 November 2025", kategori: "Kesehatan", judul: "Sosialisasi Pencegahan Stunting dan Peningkatan Gizi Balita", imageUrl: "/images/posyandu.jpg" },
    { id: 3, tanggal: "20 Oktober 2025", kategori: "Pemerintahan", judul: "Pembukaan Pendaftaran Calon Anggota BPD Masa Jabatan 2026-2032", imageUrl: "/images/bpd_rapat.jpg" },
    { id: 4, tanggal: "10 Oktober 2025", kategori: "Sosial", judul: "Bantuan Sosial Tunai (BST) Tahap 4: Distribusi Tepat Sasaran", imageUrl: "/images/bansos.jpg" }
];

export default function BeritaSection() {
    return (
        <section className="py-2">
            <div className="container mx-auto">
                
                {/* 🎯 KOTAK UTAMA (CARD WRAPPER) DENGAN BAYANGAN HIJAU */}
                <div 
                    className="bg-white p-6 md:p-8 rounded-xl border-t-8 border-green-600"
                    // Menggunakan shadow kustom (shadow-xl) dan menambahkan shadow Hijau via styling inline
                    style={{ 
                        boxShadow: '0 10px 15px -3px rgba(16, 185, 129, 0.1), 0 4px 6px -2px rgba(16, 185, 129, 0.05)'
                    }}
                > 
                
                    {/* Judul Bagian: Aksen Icon Hijau */}
                    <h2 className="text-2xl font-bold text-gray-800 mb-6 pb-4 border-b border-gray-200">
                        <i className="fas fa-bullhorn mr-2 text-green-600"></i> Kabar Desa Terbaru
                    </h2>
                    
                    {/* LIST BERITA: Konten Daftar Berita */}
                    <div className="divide-y divide-gray-100"> 
                        {BERITA_LIST.map(berita => (
                            <BeritaCard key={berita.id} berita={berita} />
                        ))}
                    </div>
                    
                    {/* Tombol Lihat Semua: Link Hijau */}
                    <div className="text-right pt-4 mt-4 border-t border-gray-100">
                        <a href="#" className="text-base font-bold text-green-600 hover:text-green-700 transition flex items-center justify-end">
                            Lihat Seluruh Arsip Berita <i className="fas fa-angle-right ml-1"></i>
                        </a>
                    </div>
                </div> 
                {/* 🎯 AKHIR KOTAK UTAMA */}
                
            </div>
        </section>
    );
}