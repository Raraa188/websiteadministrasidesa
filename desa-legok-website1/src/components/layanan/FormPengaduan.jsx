export default function FormPengaduan() {
  return (
    <div className="mt-6 bg-white p-8 rounded-2xl shadow-lg border-t-4 border-red-500">
      <h3 className="text-xl font-bold mb-4 flex items-center gap-2 text-red-600">
        <i className="fas fa-exclamation-circle"></i> Form Pengaduan
      </h3>

      <form className="space-y-4">
        <div>
          <label className="block text-xs font-semibold text-gray-600 mb-1">Judul Laporan</label>
          <input type="text" className="w-full px-4 py-2 border rounded-lg bg-gray-50" />
        </div>
        <div>
          <label className="block text-xs font-semibold text-gray-600 mb-1">Deskripsi</label>
          <textarea rows="3" className="w-full px-4 py-2 border rounded-lg bg-gray-50"></textarea>
        </div>

        <button className="w-full bg-red-600 text-white font-bold py-2.5 rounded-lg hover:bg-red-700">
          Kirim Laporan
        </button>
      </form>
    </div>
  );
}
