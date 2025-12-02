export default function StatistikCards() {
    // Definisi warna untuk border-desa-main (simulasi, agar kode ini dapat berjalan)
    // Jika 'desa-main' adalah warna hijau gelap, kita gunakan hijau-600 sebagai simulasi
    const COLOR_DESA_MAIN = 'green'; 

    return (
        // Hapus container, margin negatif, dan z-index.
        // Penempatan (seperti tumpang tindih dengan Hero) akan diatur oleh Home.jsx
        <div className="py-2"> 
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

                {/* Kartu 1: Jumlah Penduduk */}
                <div className="bg-white p-6 rounded-2xl shadow-xl border-b-4 border-green-600 flex items-center gap-4">
                    <div className={`w-14 h-14 bg-green-100 rounded-full flex items-center justify-center text-${COLOR_DESA_MAIN}-600 text-2xl`}>
                        <i className="fas fa-users"></i>
                    </div>
                    <div>
                        <h3 className="text-2xl font-bold">12.500+</h3>
                        <p className="text-sm text-gray-600">Jumlah Penduduk</p>
                    </div>
                </div>

                {/* Kartu 2: Wilayah Administratif */}
                <div className="bg-white p-6 rounded-2xl shadow-xl border-b-4 border-yellow-500 flex items-center gap-4">
                    <div className="w-14 h-14 bg-yellow-100 rounded-full flex items-center justify-center text-yellow-600 text-2xl">
                        <i className="fas fa-map-marked-alt"></i>
                    </div>
                    <div>
                        <h3 className="text-2xl font-bold">8 RW</h3>
                        <p className="text-sm text-gray-600">Wilayah Administratif</p>
                    </div>
                </div>

                {/* Kartu 3: Kesiapan Pelayanan */}
                <div className="bg-white p-6 rounded-2xl shadow-xl border-b-4 border-blue-500 flex items-center gap-4">
                    <div className="w-14 h-14 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 text-2xl">
                        <i className="fas fa-hand-holding-heart"></i>
                    </div>
                    <div>
                        <h3 className="text-2xl font-bold">24 Jam</h3>
                        <p className="text-sm text-gray-600">Siap Melayani</p>
                    </div>
                </div>

            </div>
        </div>
    );
}