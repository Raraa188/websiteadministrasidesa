import logo from "../../assets/images/logo.png";
import { FaWhatsapp } from "react-icons/fa";

export default function Navbar() {
  return (
    <nav className="bg-[var(--desa-main)] text-white sticky top-0 z-50 shadow-md">
      <div className="container mx-auto px-6 py-3 flex justify-between items-center">

        {/* LOGO + TEKS */}
        <div className="flex items-center gap-3">
          <img
            src={logo}
            alt="Logo Desa"
            className="w-12 h-12 object-contain"
          />

          <div className="leading-tight">
            <h1 className="text-lg font-bold tracking-wide">DESA LEGOK</h1>
            <p className="text-[11px] opacity-90 tracking-wide">
              LEGOK - TANGERANG
            </p>
          </div>
        </div>

        {/* MENU */}
        <div className="hidden md:flex items-center space-x-6 text-sm font-medium">
          <a href="#beranda" className="hover:text-[var(--desa-light)]">Beranda</a>
          <a href="#layanan" className="hover:text-[var(--desa-light)]">Layanan</a>
          <a href="#berita" className="hover:text-[var(--desa-light)]">Berita</a>

          <a
            href="#kontak-wa"
            className="bg-white text-[var(--desa-main)] px-4 py-1.5 rounded-full hover:bg-gray-100 flex items-center gap-2 shadow-sm"
          >
            <FaWhatsapp className="text-lg" />
            Kontak
          </a>
        </div>

        {/* MOBILE MENU BUTTON */}
        <button className="md:hidden text-2xl">
          <i className="fas fa-bars"></i>
        </button>

      </div>
    </nav>
  );
}
