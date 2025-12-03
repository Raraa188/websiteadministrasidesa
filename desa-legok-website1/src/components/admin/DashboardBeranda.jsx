import React from "react";

export default function DashboardBeranda() {
    const stats = [
        {
            title: "Total Pengajuan Surat",
            value: "45",
            icon: "fa-file-alt",
            color: "green",
            details: [
                { label: "Pending", value: 12, color: "yellow" },
                { label: "Diproses", value: 18, color: "green" },
                { label: "Selesai", value: 15, color: "green" }
            ]
        },
        {
            title: "Total Laporan Pengaduan",
            value: "28",
            icon: "fa-comments",
            color: "green",
            details: [
                { label: "Baru", value: 8, color: "yellow" },
                { label: "Ditangani", value: 13, color: "green" },
                { label: "Selesai", value: 7, color: "green" }
            ]
        },
        {
            title: "Pengajuan Bulan Ini",
            value: "23",
            icon: "fa-calendar-alt",
            color: "green",
            trend: "+15%",
            trendUp: true
        },
        {
            title: "Rata-rata Waktu Proses",
            value: "2.5 Hari",
            icon: "fa-clock",
            color: "orange",
            trend: "-10%",
            trendUp: true
        }
    ];

    const recentActivities = [
        { type: "surat", name: "Ahmad Fauzi", action: "mengajukan Surat Keterangan Usaha", time: "5 menit lalu", status: "pending" },
        { type: "pengaduan", name: "Siti Nurhaliza", action: "melaporkan Jalan Rusak", time: "15 menit lalu", status: "new" },
        { type: "surat", name: "Budi Santoso", action: "mengajukan KTP", time: "1 jam lalu", status: "processed" },
        { type: "pengaduan", name: "Dewi Lestari", action: "melaporkan Lampu Jalan Mati", time: "2 jam lalu", status: "handled" },
        { type: "surat", name: "Rina Wijaya", action: "mengajukan Akta Kelahiran", time: "3 jam lalu", status: "completed" }
    ];

    const getColorClasses = (color) => {
        const colors = {
            green: "bg-[var(--desa-main)] text-white",
            orange: "bg-orange-500 text-white",
            yellow: "bg-yellow-500 text-white"
        };
        return colors[color] || colors.green;
    };

    const getStatusBadge = (status) => {
        const badges = {
            pending: { label: "Pending", color: "bg-yellow-100 text-yellow-800" },
            new: { label: "Baru", color: "bg-yellow-100 text-yellow-800" },
            processed: { label: "Diproses", color: "bg-green-100 text-green-800" },
            handled: { label: "Ditangani", color: "bg-green-100 text-green-800" },
            completed: { label: "Selesai", color: "bg-green-100 text-green-800" }
        };
        return badges[status] || badges.pending;
    };

    return (
        <div className="space-y-6">

            {/* Header */}
            <div className="bg-gradient-to-r from-[var(--desa-main)] to-green-700 text-white p-6 rounded-xl shadow-lg">
                <h1 className="text-3xl font-bold mb-2">
                    <i className="fas fa-home mr-3"></i>
                    Dashboard Beranda
                </h1>
                <p className="text-green-100">Selamat datang di Admin Panel Desa Legok</p>
            </div>

            {/* Statistics Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {stats.map((stat, idx) => (
                    <div key={idx} className="bg-white rounded-xl shadow-md hover:shadow-lg transition p-6">
                        <div className="flex items-start justify-between mb-4">
                            <div className={`p-3 rounded-lg ${getColorClasses(stat.color)}`}>
                                <i className={`fas ${stat.icon} text-2xl`}></i>
                            </div>
                            {stat.trend && (
                                <span className={`text-sm font-semibold ${stat.trendUp ? 'text-green-600' : 'text-red-600'}`}>
                                    <i className={`fas fa-arrow-${stat.trendUp ? 'up' : 'down'} mr-1`}></i>
                                    {stat.trend}
                                </span>
                            )}
                        </div>
                        <h3 className="text-gray-600 text-sm font-medium mb-2">{stat.title}</h3>
                        <p className="text-3xl font-bold text-gray-800 mb-3">{stat.value}</p>

                        {stat.details && (
                            <div className="space-y-1 pt-3 border-t">
                                {stat.details.map((detail, i) => (
                                    <div key={i} className="flex justify-between items-center text-sm">
                                        <span className="text-gray-600">{detail.label}</span>
                                        <span className={`font-semibold px-2 py-1 rounded ${detail.color === 'yellow' ? 'bg-yellow-100 text-yellow-800' :
                                                'bg-green-100 text-green-800'
                                            }`}>
                                            {detail.value}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                ))}
            </div>

            {/* Recent Activities */}
            <div className="bg-white rounded-xl shadow-md p-6">
                <h2 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                    <i className="fas fa-history text-[var(--desa-main)]"></i>
                    Aktivitas Terbaru
                </h2>
                <div className="space-y-3">
                    {recentActivities.map((activity, idx) => (
                        <div key={idx} className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition">
                            <div className={`p-3 rounded-full ${activity.type === 'surat' ? 'bg-green-100 text-[var(--desa-main)]' : 'bg-green-200 text-green-700'
                                }`}>
                                <i className={`fas ${activity.type === 'surat' ? 'fa-file-alt' : 'fa-comment-dots'}`}></i>
                            </div>
                            <div className="flex-1">
                                <p className="text-sm text-gray-800">
                                    <span className="font-semibold">{activity.name}</span> {activity.action}
                                </p>
                                <p className="text-xs text-gray-500 mt-1">
                                    <i className="fas fa-clock mr-1"></i>
                                    {activity.time}
                                </p>
                            </div>
                            <span className={`px-3 py-1 rounded-full text-xs font-semibold ${getStatusBadge(activity.status).color}`}>
                                {getStatusBadge(activity.status).label}
                            </span>
                        </div>
                    ))}
                </div>
            </div>

            {/* Quick Actions */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <button className="bg-[var(--desa-main)] hover:bg-green-700 text-white p-4 rounded-xl shadow-md transition flex items-center justify-center gap-3">
                    <i className="fas fa-plus-circle text-2xl"></i>
                    <span className="font-semibold">Tambah Pengajuan Manual</span>
                </button>
                <button className="bg-green-600 hover:bg-green-700 text-white p-4 rounded-xl shadow-md transition flex items-center justify-center gap-3">
                    <i className="fas fa-download text-2xl"></i>
                    <span className="font-semibold">Export Laporan</span>
                </button>
                <button className="bg-green-700 hover:bg-green-800 text-white p-4 rounded-xl shadow-md transition flex items-center justify-center gap-3">
                    <i className="fas fa-cog text-2xl"></i>
                    <span className="font-semibold">Pengaturan</span>
                </button>
            </div>
        </div>
    );
}
