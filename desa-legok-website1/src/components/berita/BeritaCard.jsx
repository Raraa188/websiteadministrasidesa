import React from 'react';

export default function BeritaCard({ berita }) {
    const data = berita || {
        tanggal: "12 Okt 2023",
        kategori: "Pembangunan",
        judul: "Musyawarah Perencanaan Pembangunan Desa Tahun 2024",
        ringkasan: "Kegiatan musyawarah desa membahas prioritas penggunaan dana desa serta perencanaan infrastruktur desa.",
        imageUrl: "https://source.unsplash.com/random/120x80/?village,meeting"
    };

    return (
        // Wrapper: Hover background diubah menjadi Hijau Muda (hover:bg-green-50)
        <a 
            href={`/berita/${data.id}`} 
            className="flex items-start gap-4 p-4 hover:bg-green-50 transition duration-150 rounded-lg border-b last:border-b-0 border-gray-100"
        >
            
            {/* Bagian Gambar */}
            <div className="flex-shrink-0 w-24 h-16 overflow-hidden rounded-md bg-gray-200"> 
                <img
                    src={data.imageUrl}
                    alt={data.judul}
                    className="w-full h-full object-cover" 
                />
            </div>

            {/* Bagian Konten Teks */}
            <div className="flex-grow">
                
                {/* Judul: Hover diubah menjadi Hijau Gelap */}
                <h3 className="font-bold text-sm text-gray-800 hover:text-green-700 transition line-clamp-2 mb-1">
                    {data.judul}
                </h3>

                {/* Metadata: Kategori diubah menjadi Hijau */}
                <div className="text-xs text-gray-500 flex items-center space-x-2">
                    <span className="text-green-600 font-medium">{data.kategori}</span>
                    <span className="text-gray-300">•</span>
                    <span>{data.tanggal}</span>
                </div>
            </div>
        </a>
    );
}