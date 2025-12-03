import React, { useState } from "react";

export default function TabelLaporanPengaduan() {
    const [searchTerm, setSearchTerm] = useState("");
    const [filterStatus, setFilterStatus] = useState("all");
    const [filterKategori, setFilterKategori] = useState("all");
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 10;

    // Sample data
    const sampleData = [
        { id: 1, nama: "Ahmad Fauzi", kontak: "081234567890", kategori: "Infrastruktur", deskripsi: "Jalan rusak di RT 03 perlu segera diperbaiki karena membahayakan pengendara", tanggal: "2025-12-01", status: "baru", prioritas: "tinggi" },
        { id: 2, nama: "Siti Nurhaliza", kontak: "081234567891", kategori: "Kebersihan", deskripsi: "Sampah menumpuk di dekat pasar tradisional", tanggal: "2025-12-01", status: "ditangani", prioritas: "sedang" },
        { id: 3, nama: "Budi Santoso", kontak: "081234567892", kategori: "Keamanan", deskripsi: "Lampu jalan mati di Jalan Raya Legok", tanggal: "2025-12-02", status: "selesai", prioritas: "tinggi" },
        { id: 4, nama: "Dewi Lestari", kontak: "081234567893", kategori: "Pelayanan", deskripsi: "Pelayanan administrasi yang lambat", tanggal: "2025-12-02", status: "baru", prioritas: "rendah" },
        { id: 5, nama: "Rina Wijaya", kontak: "081234567894", kategori: "Infrastruktur", deskripsi: "Drainase tersumbat menyebabkan banjir", tanggal: "2025-12-02", status: "ditangani", prioritas: "tinggi" },
        { id: 6, nama: "Joko Widodo", kontak: "081234567895", kategori: "Kebersihan", deskripsi: "Perlu penambahan tempat sampah di taman", tanggal: "2025-12-03", status: "selesai", prioritas: "rendah" },
        { id: 7, nama: "Mega Wati", kontak: "081234567896", kategori: "Keamanan", deskripsi: "Ronda malam perlu ditingkatkan", tanggal: "2025-12-03", status: "baru", prioritas: "sedang" },
        { id: 8, nama: "Prabowo Subianto", kontak: "081234567897", kategori: "Infrastruktur", deskripsi: "Jembatan retak dan perlu perbaikan", tanggal: "2025-12-03", status: "ditangani", prioritas: "tinggi" },
        { id: 9, nama: "Anies Baswedan", kontak: "081234567898", kategori: "Pelayanan", deskripsi: "Website desa sering down", tanggal: "2025-12-03", status: "selesai", prioritas: "sedang" },
        { id: 10, nama: "Ganjar Pranowo", kontak: "081234567899", kategori: "Kebersihan", deskripsi: "Gorong-gorong tersumbat", tanggal: "2025-12-03", status: "baru", prioritas: "tinggi" }
    ];

    // Filter and search
    const filteredData = sampleData.filter(item => {
        const matchesSearch = item.nama.toLowerCase().includes(searchTerm.toLowerCase()) ||
            item.kategori.toLowerCase().includes(searchTerm.toLowerCase()) ||
            item.deskripsi.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesStatus = filterStatus === "all" || item.status === filterStatus;
        const matchesKategori = filterKategori === "all" || item.kategori === filterKategori;
        return matchesSearch && matchesStatus && matchesKategori;
    });

    // Pagination
    const totalPages = Math.ceil(filteredData.length / itemsPerPage);
    const startIndex = (currentPage - 1) * itemsPerPage;
    const paginatedData = filteredData.slice(startIndex, startIndex + itemsPerPage);

    const getStatusBadge = (status) => {
        const badges = {
            baru: { label: "Baru", color: "bg-yellow-100 text-yellow-800 border-yellow-300" },
            ditangani: { label: "Ditangani", color: "bg-green-100 text-green-800 border-green-300" },
            selesai: { label: "Selesai", color: "bg-green-100 text-green-800 border-green-300" }
        };
        return badges[status] || badges.baru;
    };

    const getPriorityBadge = (prioritas) => {
        const badges = {
            tinggi: { icon: "fa-exclamation-circle", color: "text-red-600" },
            sedang: { icon: "fa-info-circle", color: "text-orange-600" },
            rendah: { icon: "fa-check-circle", color: "text-green-600" }
        };
        return badges[prioritas] || badges.sedang;
    };

    const handleStatusChange = (id, newStatus) => {
        console.log(`Changing status of ID ${id} to ${newStatus}`);
        alert(`Status pengaduan #${id} diubah menjadi: ${newStatus}`);
    };

    const truncateText = (text, maxLength = 60) => {
        return text.length > maxLength ? text.substring(0, maxLength) + "..." : text;
    };

    return (
        <div className="space-y-6">

            {/* Header */}
            <div className="bg-gradient-to-r from-[var(--desa-main)] to-green-700 text-white p-6 rounded-xl shadow-lg">
                <h1 className="text-3xl font-bold mb-2">
                    <i className="fas fa-comments mr-3"></i>
                    Laporan Pengaduan
                </h1>
                <p className="text-green-100">Kelola semua laporan pengaduan dari masyarakat</p>
            </div>

            {/* Filters and Search */}
            <div className="bg-white rounded-xl shadow-md p-6">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">

                    {/* Search */}
                    <div className="md:col-span-2">
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                            <i className="fas fa-search mr-2"></i>Cari Pengaduan
                        </label>
                        <input
                            type="text"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--desa-main)]"
                            placeholder="Cari berdasarkan nama, kategori, atau deskripsi..."
                        />
                    </div>

                    {/* Kategori Filter */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                            <i className="fas fa-tag mr-2"></i>Kategori
                        </label>
                        <select
                            value={filterKategori}
                            onChange={(e) => setFilterKategori(e.target.value)}
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--desa-main)]"
                        >
                            <option value="all">Semua Kategori</option>
                            <option value="Infrastruktur">Infrastruktur</option>
                            <option value="Kebersihan">Kebersihan</option>
                            <option value="Keamanan">Keamanan</option>
                            <option value="Pelayanan">Pelayanan</option>
                        </select>
                    </div>

                    {/* Status Filter */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                            <i className="fas fa-filter mr-2"></i>Status
                        </label>
                        <select
                            value={filterStatus}
                            onChange={(e) => setFilterStatus(e.target.value)}
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--desa-main)]"
                        >
                            <option value="all">Semua Status</option>
                            <option value="baru">Baru</option>
                            <option value="ditangani">Ditangani</option>
                            <option value="selesai">Selesai</option>
                        </select>
                    </div>
                </div>

                {/* Results Count */}
                <div className="mt-4 text-sm text-gray-600">
                    Menampilkan <span className="font-semibold">{paginatedData.length}</span> dari <span className="font-semibold">{filteredData.length}</span> pengaduan
                </div>
            </div>

            {/* Table */}
            <div className="bg-white rounded-xl shadow-md overflow-hidden">
                <div className="overflow-x-auto">
                    <table className="w-full">
                        <thead className="bg-[var(--desa-main)] text-white">
                            <tr>
                                <th className="px-6 py-4 text-left text-sm font-semibold">No</th>
                                <th className="px-6 py-4 text-left text-sm font-semibold">Nama Pelapor</th>
                                <th className="px-6 py-4 text-left text-sm font-semibold">Kontak</th>
                                <th className="px-6 py-4 text-left text-sm font-semibold">Kategori</th>
                                <th className="px-6 py-4 text-left text-sm font-semibold">Deskripsi</th>
                                <th className="px-6 py-4 text-left text-sm font-semibold">Tanggal</th>
                                <th className="px-6 py-4 text-left text-sm font-semibold">Prioritas</th>
                                <th className="px-6 py-4 text-left text-sm font-semibold">Status</th>
                                <th className="px-6 py-4 text-left text-sm font-semibold">Aksi</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-200">
                            {paginatedData.length > 0 ? (
                                paginatedData.map((item, idx) => (
                                    <tr key={item.id} className="hover:bg-gray-50 transition">
                                        <td className="px-6 py-4 text-sm text-gray-700">{startIndex + idx + 1}</td>
                                        <td className="px-6 py-4 text-sm font-medium text-gray-900">{item.nama}</td>
                                        <td className="px-6 py-4 text-sm text-gray-700">
                                            <i className="fas fa-phone mr-2 text-[var(--desa-main)]"></i>
                                            {item.kontak}
                                        </td>
                                        <td className="px-6 py-4">
                                            <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-xs font-semibold">
                                                {item.kategori}
                                            </span>
                                        </td>
                                        <td className="px-6 py-4 text-sm text-gray-700 max-w-xs">
                                            <span title={item.deskripsi}>{truncateText(item.deskripsi)}</span>
                                        </td>
                                        <td className="px-6 py-4 text-sm text-gray-700">
                                            <i className="fas fa-calendar mr-2 text-gray-400"></i>
                                            {item.tanggal}
                                        </td>
                                        <td className="px-6 py-4 text-center">
                                            <i className={`fas ${getPriorityBadge(item.prioritas).icon} ${getPriorityBadge(item.prioritas).color} text-lg`} title={item.prioritas}></i>
                                        </td>
                                        <td className="px-6 py-4">
                                            <span className={`px-3 py-1 rounded-full text-xs font-semibold border ${getStatusBadge(item.status).color}`}>
                                                {getStatusBadge(item.status).label}
                                            </span>
                                        </td>
                                        <td className="px-6 py-4">
                                            <div className="flex gap-2">
                                                <button
                                                    onClick={() => alert(`Melihat detail pengaduan #${item.id}\n\nDeskripsi lengkap:\n${item.deskripsi}`)}
                                                    className="px-3 py-1 bg-[var(--desa-main)] hover:bg-green-700 text-white text-xs rounded-lg transition"
                                                    title="Lihat Detail"
                                                >
                                                    <i className="fas fa-eye"></i>
                                                </button>
                                                <select
                                                    onChange={(e) => handleStatusChange(item.id, e.target.value)}
                                                    className="px-2 py-1 border border-gray-300 rounded-lg text-xs focus:outline-none focus:ring-2 focus:ring-[var(--desa-main)]"
                                                    defaultValue=""
                                                >
                                                    <option value="" disabled>Ubah Status</option>
                                                    <option value="baru">Baru</option>
                                                    <option value="ditangani">Ditangani</option>
                                                    <option value="selesai">Selesai</option>
                                                </select>
                                            </div>
                                        </td>
                                    </tr>
                                ))
                            ) : (
                                <tr>
                                    <td colSpan="9" className="px-6 py-8 text-center text-gray-500">
                                        <i className="fas fa-inbox text-4xl mb-2 block text-gray-300"></i>
                                        Tidak ada data yang ditemukan
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>

                {/* Pagination */}
                {totalPages > 1 && (
                    <div className="bg-gray-50 px-6 py-4 flex items-center justify-between border-t">
                        <button
                            onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                            disabled={currentPage === 1}
                            className="px-4 py-2 bg-white border border-gray-300 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition"
                        >
                            <i className="fas fa-chevron-left mr-2"></i>
                            Sebelumnya
                        </button>

                        <span className="text-sm text-gray-700">
                            Halaman <span className="font-semibold">{currentPage}</span> dari <span className="font-semibold">{totalPages}</span>
                        </span>

                        <button
                            onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                            disabled={currentPage === totalPages}
                            className="px-4 py-2 bg-white border border-gray-300 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition"
                        >
                            Selanjutnya
                            <i className="fas fa-chevron-right ml-2"></i>
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
}
