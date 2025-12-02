export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white pt-12 pb-6 mt-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">

          <div>
            <h3 className="font-bold text-xl mb-4">Desa Legok</h3>
            <p className="text-gray-400 text-sm">
              Mewujudkan tata kelola pemerintahan desa yang baik, bersih, dan transparan.
            </p>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Kontak</h3>
            <ul className="text-gray-400 text-sm space-y-2">
              <li><i className="fas fa-map-marker-alt"></i>  Jl. Jayaningrat No.99, Desa Legok Kec Legok Kab.Tangerang Kode Pos 15820</li>
              <li><i className="fas fa-phone"></i>  081367737337</li>
              <li><i className="fas fa-envelope"></i>  desalegok.kecamatanlegok@gmail.com</li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Tautan</h3>
            <ul className="text-gray-400 text-sm space-y-2">
              <li><a href="#" className="hover:text-white">Kabupaten Tangerang</a></li>
              <li><a href="#" className="hover:text-white">Kemensos</a></li>
              <li><a href="#" className="hover:text-white">Cek Bansos</a></li>
            </ul>
          </div>

        </div>

        <div className="border-t border-gray-700 pt-6 text-center text-xs text-gray-500">
          © 2023 Pemerintah Desa Legok. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
