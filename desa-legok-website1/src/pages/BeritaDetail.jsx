import React from 'react';
import { useParams, Link } from 'react-router-dom';
import berita1 from '../assets/images/berita1.jpeg';
import berita2 from '../assets/images/berita2.jpeg';
import berita3 from '../assets/images/berita3.jpg';
import berita4 from '../assets/images/berita4.jpeg';
import berita5 from '../assets/images/berita5.png';

const BERITA_DATA = {
    1: {
        id: 1,
        tanggal: "17 November 2025",
        kategori: "Pembangunan",
        judul: "Pemerintah Desa Legok Umumkan Publikasi Infografik Perubahan APBDesa Tahun 2025",
        imageUrl: berita5,
        konten: `<p>Legok — Pemerintah Desa Legok di bawah kepemimpinan Kepala Desa Mulyana, S.E., secara resmi merilis Infografik Perubahan Anggaran Pendapatan dan Belanja Desa (APBDesa) Tahun 2025 sebagai wujud komitmen terhadap transparansi, akuntabilitas, dan keterbukaan informasi publik. Publikasi ini merupakan tindak lanjut dari proses penyusunan perubahan APBDesa yang sebelumnya telah dibahas dalam forum musyawarah desa bersama Badan Permusyawaratan Desa (BPD) yang dipimpin oleh H. Wahyudin, M.Pd.. Perubahan anggaran dilakukan berdasarkan evaluasi kebutuhan pembangunan desa, penyesuaian program prioritas nasional, serta usulan masyarakat dari berbagai unsur. Dalam keterangannya, Kepala Desa Mulyana, S.E. menyampaikan bahwa perubahan APBDesa tahun 2025 menekankan pada penguatan pembangunan infrastruktur desa, peningkatan kualitas layanan dasar, pemberdayaan masyarakat, serta pengembangan ekonomi lokal. Ia menegaskan bahwa setiap rupiah anggaran harus memberi manfaat nyata bagi masyarakat Desa Legok. "Publikasi infografik ini merupakan bentuk komitmen kami terhadap keterbukaan informasi. Masyarakat berhak mengetahui alokasi anggaran, perubahan yang dilakukan, dan arah pembangunan yang sedang kita jalankan. Kami ingin seluruh warga terlibat dalam pengawasan, sehingga pembangunan desa berjalan efektif dan tepat sasaran," ujar Mulyana, S.E. Sementara itu, Ketua BPD H. Wahyudin, M.Pd. menambahkan bahwa pihaknya mendukung penuh transparansi anggaran melalui penyebaran informasi dalam bentuk infografik. Menurutnya, langkah ini memudahkan masyarakat memahami struktur anggaran yang sebelumnya hanya disajikan dalam format dokumen resmi yang cukup teknis. BPD juga memastikan bahwa seluruh proses perubahan APBDesa telah melalui mekanisme yang sah dan melibatkan partisipasi warga. "Kami di BPD memastikan bahwa perubahan APBDesa tahun 2025 sudah melalui pembahasan yang terbuka. Publikasi ini penting agar masyarakat melihat dan memahami hasil musyawarah yang telah dilakukan," ungkap H. Wahyudin, M.Pd. Infografik Perubahan APBDesa Tahun 2025 kini dapat diakses melalui papan informasi kantor desa, media sosial resmi Pemerintah Desa Legok, serta kanal komunikasi publik lainnya. Dengan penyajian yang lebih visual, pemerintah berharap informasi ini dapat diterima dengan mudah oleh seluruh warga. Pemerintah Desa Legok berharap publikasi ini menjadi momentum penguatan partisipasi masyarakat dalam pengawasan dan evaluasi pembangunan desa, sehingga tercipta tata kelola pemerintahan desa yang transparan, responsif, dan berpihak pada kebutuhan masyarakat.</p>`
    },
    2: {
        id: 2,
        tanggal: "17 November 2025",
        kategori: "Sosial",
        judul: "Musdesus Pembentukan Koperasi Desa Merah Putih",
        imageUrl: berita1,
        konten: `<p>Desa Legok mengadakan Musyawarah Desa Khusus...</p>`
    },
    3: {
        id: 3,
        tanggal: "19 September 2025",
        kategori: "Pemerintahan",
        judul: "Desa Legok Tuntas Ikuti Monitoring & Evaluasi",
        imageUrl: berita2,
        konten: `<p>Desa Legok berhasil menyelesaikan Monitoring dan Evaluasi...</p>`
    },
    4: {
        id: 4,
        tanggal: "17 November 2025",
        kategori: "Pemerintahan",
        judul: "Pemerintah Desa Legok Meraih Predikat Desa Antikorupsi",
        imageUrl: berita3,
        konten: `<p>Komisi Pemberantasan Korupsi (KPK) resmi menganugerahkan predikat...</p>`
    },
    5: {
        id: 5,
        tanggal: "15 September 2025",
        kategori: "Pemerintahan",
        judul: "Pembinaan Pencegahan Korupsi dan Gratifikasi di Desa Legok",
        imageUrl: berita4,
        konten: `<p>Legok – Dalam rangka mendukung program Lomba Desa Anti Korupsi 2025...</p><p>Pembinaan ini bertujuan untuk meningkatkan pemahaman aparatur desa...</p>`
    }
};

export default function BeritaDetail() {
    const { id } = useParams();
    const berita = BERITA_DATA[id] || BERITA_DATA[1];

    return (
        <div style={{ 
            minHeight: '100vh',
            backgroundColor: '#f0f9ff',
            paddingTop: '0',
            paddingBottom: '30px',
            fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif"
        }}>
            <style>{`
                @media (max-width: 640px) {
                    body { margin: 0; padding: 0; }
                }
                * {
                    box-sizing: border-box;
                }
                a:hover {
                    opacity: 0.9;
                }
            `}</style>

            {/* Header dengan Gradient - Full Width */}
            <div style={{
                background: 'linear-gradient(135deg, #059669 0%, #047857 50%, #065f46 100%)',
                color: 'white',
                padding: '30px 16px 40px',
                marginBottom: '30px',
                boxShadow: '0 8px 16px rgba(5, 150, 105, 0.15)',
                borderBottomLeftRadius: '20px',
                borderBottomRightRadius: '20px'
            }}>
                <div style={{ maxWidth: '900px', margin: '0 auto' }}>
                    <Link to="/" style={{ 
                        color: 'rgba(255,255,255,0.95)', 
                        textDecoration: 'none',
                        fontSize: '15px',
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '8px',
                        marginBottom: '20px',
                        padding: '8px 12px',
                        borderRadius: '8px',
                        backgroundColor: 'rgba(255,255,255,0.15)',
                        backdropFilter: 'blur(10px)',
                        border: '1px solid rgba(255,255,255,0.2)',
                        fontWeight: '500',
                        transition: 'all 0.3s ease'
                    }}>
                        ← Kembali
                    </Link>
                    <h1 style={{ 
                        fontSize: 'clamp(1.3rem, 6vw, 2.2rem)',
                        marginBottom: '16px',
                        fontWeight: '700',
                        lineHeight: '1.35',
                        letterSpacing: '-0.5px'
                    }}>
                        {berita.judul}
                    </h1>
                    <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', alignItems: 'center' }}>
                        <span style={{ 
                            backgroundColor: 'rgba(255,255,255,0.25)', 
                            color: 'white', 
                            padding: '7px 14px', 
                            borderRadius: '20px',
                            fontSize: 'clamp(12px, 2vw, 13px)',
                            fontWeight: '600',
                            backdropFilter: 'blur(10px)'
                        }}>
                            {berita.kategori}
                        </span>
                        <span style={{ fontSize: 'clamp(12px, 2vw, 14px)', opacity: 0.95 }}>
                            📅 {berita.tanggal}
                        </span>
                    </div>
                </div>
            </div>

            {/* Main Content */}
            <div style={{ maxWidth: '900px', margin: '0 auto', paddingLeft: '16px', paddingRight: '16px' }}>
                {/* Featured Image */}
                <div style={{
                    marginBottom: '28px',
                    borderRadius: '16px',
                    overflow: 'hidden',
                    boxShadow: '0 12px 24px rgba(5, 150, 105, 0.12)',
                    backgroundColor: '#e0f2fe',
                    aspectRatio: '16/9',
                    border: '1px solid rgba(5, 150, 105, 0.1)'
                }}>
                    <img 
                        src={berita.imageUrl} 
                        alt={berita.judul} 
                        style={{ 
                            width: '100%', 
                            height: '100%',
                            objectFit: 'cover',
                            display: 'block'
                        }} 
                    />
                </div>

                {/* Article Card */}
                <div style={{
                    backgroundColor: 'white',
                    borderRadius: '16px',
                    padding: 'clamp(20px, 5vw, 36px)',
                    boxShadow: '0 4px 12px rgba(0,0,0,0.08)',
                    borderLeft: '6px solid #059669',
                    marginBottom: '28px',
                    border: '1px solid rgba(5, 150, 105, 0.1)'
                }}>
                    {/* Metadata */}
                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))',
                        gap: '16px',
                        marginBottom: '28px',
                        paddingBottom: '20px',
                        borderBottom: '2px solid #f0f9ff'
                    }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                            <span style={{ fontSize: '20px', minWidth: '20px' }}>📁</span>
                            <div>
                                <div style={{ fontSize: '11px', color: '#888', fontWeight: '500', marginBottom: '2px' }}>KATEGORI</div>
                                <div style={{ fontSize: 'clamp(13px, 2vw, 15px)', fontWeight: '600', color: '#047857' }}>
                                    {berita.kategori}
                                </div>
                            </div>
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                            <span style={{ fontSize: '20px', minWidth: '20px' }}>📅</span>
                            <div>
                                <div style={{ fontSize: '11px', color: '#888', fontWeight: '500', marginBottom: '2px' }}>TANGGAL</div>
                                <div style={{ fontSize: 'clamp(13px, 2vw, 15px)', fontWeight: '600', color: '#374151' }}>
                                    {berita.tanggal}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Article Content */}
                    <div style={{
                        lineHeight: '1.85',
                        color: '#374151',
                        fontSize: 'clamp(14px, 2.5vw, 16px)',
                        wordBreak: 'break-word'
                    }}>
                        <style>{`
                            div[data-content] p {
                                margin-bottom: 20px;
                                text-align: justify;
                                text-justify: inter-word;
                            }
                            div[data-content] p:first-child::first-letter {
                                font-size: 1.2em;
                                font-weight: 700;
                            }
                            div[data-content] p:last-child {
                                margin-bottom: 0;
                            }
                            @media (max-width: 640px) {
                                div[data-content] p {
                                    text-align: left;
                                    line-height: 1.8;
                                }
                            }
                        `}</style>
                        <div data-content dangerouslySetInnerHTML={{ __html: berita.konten }} />
                    </div>
                </div>

                {/* Action Buttons */}
                <div style={{
                    display: 'flex',
                    gap: '12px',
                    padding: '20px',
                    backgroundColor: 'white',
                    borderRadius: '14px',
                    flexWrap: 'wrap',
                    boxShadow: '0 2px 8px rgba(0,0,0,0.06)',
                    border: '1px solid #e0e7ff'
                }}>
                    <Link to="/" style={{
                        flex: '1',
                        minWidth: '140px',
                        padding: '14px 20px',
                        backgroundColor: '#059669',
                        color: 'white',
                        textDecoration: 'none',
                        borderRadius: '10px',
                        fontWeight: '600',
                        transition: 'all 0.3s ease',
                        border: 'none',
                        cursor: 'pointer',
                        fontSize: 'clamp(13px, 2vw, 15px)',
                        textAlign: 'center',
                        boxShadow: '0 4px 12px rgba(5, 150, 105, 0.2)'
                    }}>
                        ← Kembali
                    </Link>
                    <button onClick={() => window.print()} style={{
                        flex: '1',
                        minWidth: '140px',
                        padding: '14px 20px',
                        backgroundColor: '#0284c7',
                        color: 'white',
                        borderRadius: '10px',
                        fontWeight: '600',
                        transition: 'all 0.3s ease',
                        border: 'none',
                        cursor: 'pointer',
                        fontSize: 'clamp(13px, 2vw, 15px)',
                        textAlign: 'center',
                        boxShadow: '0 4px 12px rgba(2, 132, 199, 0.2)'
                    }}>
                        🖨 Cetak
                    </button>
                    <button onClick={() => navigator.share && navigator.share({ title: berita.judul, text: berita.judul })} style={{
                        flex: '1',
                        minWidth: '140px',
                        padding: '14px 20px',
                        backgroundColor: '#7c3aed',
                        color: 'white',
                        borderRadius: '10px',
                        fontWeight: '600',
                        transition: 'all 0.3s ease',
                        border: 'none',
                        cursor: 'pointer',
                        fontSize: 'clamp(13px, 2vw, 15px)',
                        textAlign: 'center',
                        boxShadow: '0 4px 12px rgba(124, 58, 237, 0.2)',
                        display: navigator.share ? 'block' : 'none'
                    }}>
                        📤 Bagikan
                    </button>
                </div>
            </div>
        </div>
    );
}

