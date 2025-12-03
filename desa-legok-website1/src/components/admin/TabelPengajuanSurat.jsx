import React, { useState } from "react";

export default function TabelPengajuanSurat() {
    const [searchTerm, setSearchTerm] = useState("");
    const [filterStatus, setFilterStatus] = useState("all");
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 10;

    // Sample data
    const sampleData = [
        { id: 1, nama: "Ahmad Fauzi", telepon: "081234567890", jenisSurat: "Surat Keterangan Usaha", tanggal: "2025-12-01", status: "pending" },
        { id: 2, nama: "Siti Nurhaliza", telepon: "081234567891", jenisSurat: "KTP", tanggal: "2025-12-01", status: "diproses" },
        { id: 3, nama: "Budi Santoso", telepon: "081234567892", jenisSurat: "Kartu Keluarga", tanggal: "2025-12-02", status: "selesai" },
        { id: 4, nama: "Dewi Lestari", telepon: "081234567893", jenisSurat: "Akta Kelahiran", tanggal: "2025-12-02", status: "pending" },
        { id: 5, nama: "Rina Wijaya", telepon: "081234567894", jenisSurat: "SKTM", tanggal: "2025-12-02", status: "diproses" },
        { id: 6, nama: "Joko Widodo", telepon: "081234567895", jenisSurat: "Surat Keterangan Domisili", tanggal: "2025-12-03", status: "selesai" },
        { id: 7, nama: "Mega Wati", telepon: "081234567896", jenisSurat: "Surat Pengantar Pindah", tanggal: "2025-12-03", status: "pending" },
        { id: 8, nama: "Prabowo Subianto", telepon: "081234567897", jenisSurat: "KIA", tanggal: "2025-12-03", status: "diproses" },
        { id: 9, nama: "Anies Baswedan", telepon: "081234567898", jenisSurat: "Akta Kematian", tanggal: "2025-12-03", status: "selesai" },
        { id: 10, nama: "Ganjar Pranowo", telepon: "081234567899", jenisSurat: "KTP", tanggal: "2025-12-03", status: "pending" },
        { id: 11, nama: "Ridwan Kamil", telepon: "081234567800", jenisSurat: "Kartu Keluarga", tanggal: "2025-12-03", status: "diproses" },
        { id: 12, nama: "Tri Rismaharini", telepon: "081234567801", jenisSurat: "SKTM", tanggal: "2025-12-03", status: "selesai" }
    ];

    // Filter and search
    const filteredData = sampleData.filter(item => {
        const matchesSearch = item.nama.toLowerCase().includes(searchTerm.toLowerCase()) ||
            item.jenisSurat.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesStatus = filterStatus === "all" || item.status === filterStatus;
        return matchesSearch && matchesStatus;
    });

    // Pagination
    const totalPages = Math.ceil(filteredData.length / itemsPerPage);
    const startIndex = (currentPage - 1) * itemsPerPage;
    const paginatedData = filteredData.slice(startIndex, startIndex + itemsPerPage);

    const getStatusBadge = (status) => {
        const badges = {
            pending: { label: "Pending", color: "bg-yellow-100 text-yellow-800 border-yellow-300" },
            diproses: { label: "Diproses", color: "bg-green-100 text-green-800 border-green-300" },
            selesai: { label: "Selesai", color: "bg-green-100 text-green-800 border-green-300" }
        };
        return badges[status] || badges.pending;
    };

    const handleStatusChange = (id, newStatus) => {
        console.log(`Changing status of ID ${id} to ${newStatus}`);
        alert(`Status pengajuan #${id} diubah menjadi: ${newStatus}`);
    };

    return (
        <div className="space-y-6">

            {/* Header */}
            <div className="bg-gradient-to-r from-[var(--desa-main)] to-green-700 text-white p-6 rounded-xl shadow-lg">
                <h1 className="text-3xl font-bold mb-2">
                    <i className="fas fa-file-alt mr-3"></i>
                    Pengajuan Surat Online
                </h1>
                <p className="text-green-100">Kelola semua pengajuan surat dari masyarakat</p>
            </div>

            {/* Filters and Search */}
            <div className="bg-white rounded-xl shadow-md p-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">

                    {/* Search */}
                    <div className="md:col-span-2">
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                            <i className="fas fa-search mr-2"></i>Cari Pengajuan
                        </label>
                        <input
                            type="text"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--desa-main)]"
                            placeholder="Cari berdasarkan nama atau jenis surat..."
                        />
                    </div>

                    {/* Status Filter */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                            <i className="fas fa-filter mr-2"></i>Filter Status
                        </label>
                        <select
                            value={filterStatus}
                            onChange={(e) => setFilterStatus(e.target.value)}
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--desa-main)]"
                        >
                            <option value="all">Semua Status</option>
                            <option value="pending">Pending</option>
                            <option value="diproses">Diproses</option>
                            <option value="selesai">Selesai</option>
                        </select>
                    </div>
                </div>

                {/* Results Count */}
                <div className="mt-4 text-sm text-gray-600">
                    Menampilkan <span className="font-semibold">{paginatedData.length}</span> dari <span className="font-semibold">{filteredData.length}</span> pengajuan
                </div>
            </div>

            {/* Table */}
            <div className="bg-white rounded-xl shadow-md overflow-hidden">
                <div className="overflow-x-auto">
                    <table className="w-full">
                        <thead className="bg-[var(--desa-main)] text-white">
                            <tr>
                                <th className="px-6 py-4 text-left text-sm font-semibold">No</th>
                                <th className="px-6 py-4 text-left text-sm font-semibold">Nama Pengaju</th>
                                <th className="px-6 py-4 text-left text-sm font-semibold">Nomor Telepon</th>
                                <th className="px-6 py-4 text-left text-sm font-semibold">Jenis Surat</th>
                                <th className="px-6 py-4 text-left text-sm font-semibold">Tanggal</th>
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
                                            {item.telepon}
                                        </td>
                                        <td className="px-6 py-4 text-sm text-gray-700">{item.jenisSurat}</td>
                                        <td className="px-6 py-4 text-sm text-gray-700">
                                            <i className="fas fa-calendar mr-2 text-gray-400"></i>
                                            {item.tanggal}
                                        </td>
                                        <td className="px-6 py-4">
                                            <span className={`px-3 py-1 rounded-full text-xs font-semibold border ${getStatusBadge(item.status).color}`}>
                                                {getStatusBadge(item.status).label}
                                            </span>
                                        </td>
                                        <td className="px-6 py-4">
                                            <div className="flex gap-2">
                                                <button
                                                    onClick={() => alert(`Melihat detail pengajuan #${item.id}`)}
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
                                                    <option value="pending">Pending</option>
                                                    <option value="diproses">Diproses</option>
                                                    <option value="selesai">Selesai</option>
                                                </select>
                                                <button
                                                    onClick={() => alert(`Download dokumen #${item.id}`)}
                                                    className="px-3 py-1 bg-green-600 hover:bg-green-700 text-white text-xs rounded-lg transition"
                                                    title="Download"
                                                >
                                                    <i className="fas fa-download"></i>
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                ))
                            ) : (
                                <tr>
                                    <td colSpan="7" className="px-6 py-8 text-center text-gray-500">
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
