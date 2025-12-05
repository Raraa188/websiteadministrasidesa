import React from 'react';
import { useParams } from 'react-router-dom';
import BeritaHero from '../components/berita/BeritaHero';
import BeritaBreadcrumb from '../components/berita/BeritaBreadcrumb';
import BeritaSidebar from '../components/berita/BeritaSidebar';
import FloatingChatBubble from '../components/sidebar/FloatingChatBubble';
import berita1 from '../assets/images/berita1.jpeg';
import berita2 from '../assets/images/berita2.jpeg';
import berita3 from '../assets/images/berita3.jpg';
import berita4 from '../assets/images/berita4.jpeg';
import berita5 from '../assets/images/berita5.png';

// Data dummy untuk berita (nanti bisa diganti dengan API)
const BERITA_DATA = {
    1: {
        id: 1,
        tanggal: "17 November 2025",
        kategori: "Pembangunan",
        judul: "Pemerintah Desa Legok Umumkan Publikasi Infografik Perubahan APBDesa Tahun 2025",
        imageUrl: berita5,
        konten: `
            <p>Legok – Dalam rangka mendukung program Lomba Desa Anti Korupsi 2025 yang diselenggarakan oleh Komisi Pemberantasan Korupsi Republik Indonesia (KPK RI), Pemerintah Desa Legok ...</p>
        `
    },

    2: {
        id: 2,
        tanggal: "17 November 2025",
        kategori: "Sosial",
        judul: "Musdesus Pembentukan Koperasi Desa Merah Putih",
        imageUrl: berita1,
        konten: `
            <p>Desa Legok mengadakan Musyawarah Desa Khusus...</p>
        `
    },

    3: {
        id: 3,
        tanggal: "19 September 2025",
        kategori: "Pemerintahan",
        judul: "Desa Legok Tuntas Ikuti Monitoring & Evaluasi",
        imageUrl: berita2,
        konten: `
            <p>Desa Legok berhasil menyelesaikan Monitoring dan Evaluasi...</p>
        `
    },

    4: {
        id: 4,
        tanggal: "17 November 2025",
        kategori: "Pemerintahan",
        judul: "Pemerintah Desa Legok Meraih Predikat Desa Antikorupsi",
        imageUrl: berita3,
        konten: `
            <p>Komisi Pemberantasan Korupsi (KPK) resmi menganugerahkan predikat...</p>
        `
    },

    5: {
        id: 5,
        tanggal: "15 September 2025",
        kategori: "Pemerintahan",
        judul: "Pembinaan Pencegahan Korupsi dan Gratifikasi di Desa Legok",
        imageUrl: berita4,
        konten: `
            <p>Legok – Dalam rangka mendukung program Lomba Desa Anti Korupsi 2025...</p>
            <p>Pembinaan ini bertujuan untuk meningkatkan pemahaman aparatur desa...</p>
        `
    }
};

export default function BeritaDetail() {
    const { id } = useParams();
    const berita = BERITA_DATA[id] || BERITA_DATA[1];

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Hero Section dengan Gradient Hijau */}
            <BeritaHero judul={berita.judul} />

            {/* Breadcrumb */}
            <BeritaBreadcrumb judul={berita.judul} />

            {/* Main Content */}
            <div className="container mx-auto px-4 py-8">

                {/* Card Wrapper dengan styling seperti homepage */}
                <div
                    className="bg-white p-6 md:p-8 rounded-xl border-t-8 border-green-600"
                    style={{
                        boxShadow: '0 10px 15px -3px rgba(16, 185, 129, 0.1), 0 4px 6px -2px rgba(16, 185, 129, 0.05)'
                    }}
                >
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

                        {/* Konten Berita */}
                        <div className="lg:col-span-2">
                            <article className="overflow-hidden">

                                {/* Gambar Utama */}
                                <div className="w-full h-[400px] bg-gray-200 rounded-lg overflow-hidden mb-6">
                                    <img
                                        src={berita.imageUrl}
                                        alt={berita.judul}
                                        className="w-full h-full object-cover"
                                    />
                                </div>

                                {/* Konten Artikel */}
                                <div>

                                    {/* Metadata */}
                                    <div className="flex items-center gap-4 mb-6 text-sm text-gray-600">
                                        <span className="inline-flex items-center px-3 py-1 rounded-full bg-green-100 text-green-700 font-semibold">
                                            <i className="fas fa-tag mr-2"></i>
                                            {berita.kategori}
                                        </span>
                                        <span className="flex items-center">
                                            <i className="far fa-calendar mr-2 text-green-600"></i>
                                            {berita.tanggal}
                                        </span>
                                    </div>

                                    {/* Judul */}
                                    <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6 leading-tight">
                                        {berita.judul}
                                    </h1>

                                    {/* Konten HTML */}
                                    <div
                                        className="prose prose-lg max-w-none prose-headings:text-gray-800 prose-headings:font-bold prose-h3:text-xl prose-h3:mt-8 prose-h3:mb-4 prose-h3:text-green-700 prose-p:text-gray-700 prose-p:leading-relaxed prose-p:mb-4 prose-ul:list-disc prose-ul:ml-6 prose-ul:mb-4 prose-li:text-gray-700 prose-li:mb-2"
                                        dangerouslySetInnerHTML={{ __html: berita.konten }}
                                    />

                                    {/* Share Buttons */}
                                    <div className="mt-10 pt-6 border-t border-gray-200">
                                        <h4 className="text-sm font-semibold text-gray-700 mb-3">Bagikan Berita:</h4>
                                        <div className="flex gap-3">
                                            <button className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
                                                <i className="fab fa-facebook-f"></i>
                                                Facebook
                                            </button>
                                            <button className="flex items-center gap-2 px-4 py-2 bg-sky-500 text-white rounded-lg hover:bg-sky-600 transition">
                                                <i className="fab fa-twitter"></i>
                                                Twitter
                                            </button>
                                            <button className="flex items-center gap-2 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition">
                                                <i className="fab fa-whatsapp"></i>
                                                WhatsApp
                                            </button>
                                        </div>
                                    </div>

                                </div>
                            </article>
                        </div>

                        {/* Sidebar */}
                        <div className="lg:col-span-1">
                            <BeritaSidebar currentBeritaId={berita.id} />
                        </div>

                    </div>
                </div>
                {/* End Card Wrapper */}
            </div>

            {/* Floating WhatsApp Chat Bubble */}
            <FloatingChatBubble />
        </div>
    );
}
