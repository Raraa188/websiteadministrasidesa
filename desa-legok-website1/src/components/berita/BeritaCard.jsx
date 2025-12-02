export default function BeritaCard() {
  return (
    <div className="flex flex-col md:flex-row bg-white rounded-xl shadow hover:shadow-lg transition overflow-hidden">
      <div className="w-full md:w-48 h-48 bg-gray-200">
        <img
          src="https://source.unsplash.com/random/400x300/?village,meeting"
          alt="Berita"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="p-5 flex flex-col justify-center">
        <div className="flex items-center gap-2 text-[10px] text-gray-500 mb-2">
          <span>
            <i className="far fa-calendar-alt"></i> 12 Okt 2023
          </span>
          <span>•</span>
          <span className="text-desa-main font-semibold">Pembangunan</span>
        </div>

        <h3 className="font-bold text-lg leading-tight">
          Musyawarah Perencanaan Pembangunan Desa Tahun 2024
        </h3>

        <p className="text-sm text-gray-600">
          Kegiatan musyawarah desa membahas prioritas penggunaan dana desa...
        </p>

        <a href="#" className="text-desa-main text-sm font-semibold mt-3 hover:underline">
          Baca Selengkapnya →
        </a>
      </div>
    </div>
  );
}
