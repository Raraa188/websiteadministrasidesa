export default function StatistikCards() {
  return (
    <div className="container mx-auto px-6 -mt-16 mb-16 relative z-20">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

        <div className="bg-white p-6 rounded-2xl shadow-xl border-b-4 border-desa-main flex items-center gap-4">
          <div className="w-14 h-14 bg-green-100 rounded-full flex items-center justify-center text-desa-main text-2xl">
            <i className="fas fa-users"></i>
          </div>
          <div>
            <h3 className="text-2xl font-bold">12.500+</h3>
            <p className="text-xs text-gray-500">Jumlah Penduduk</p>
          </div>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow-xl border-b-4 border-yellow-500 flex items-center gap-4">
          <div className="w-14 h-14 bg-yellow-100 rounded-full flex items-center justify-center text-yellow-600 text-2xl">
            <i className="fas fa-map-marked-alt"></i>
          </div>
          <div>
            <h3 className="text-2xl font-bold">8 RW</h3>
            <p className="text-xs text-gray-500">Wilayah Administratif</p>
          </div>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow-xl border-b-4 border-blue-500 flex items-center gap-4">
          <div className="w-14 h-14 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 text-2xl">
            <i className="fas fa-hand-holding-heart"></i>
          </div>
          <div>
            <h3 className="text-2xl font-bold">24 Jam</h3>
            <p className="text-xs text-gray-500">Siap Melayani</p>
          </div>
        </div>

      </div>
    </div>
  );
}
