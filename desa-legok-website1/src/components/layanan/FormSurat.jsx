export default function FormSurat({ jenis, onBack }) {
  const titleMap = {
    aktelahir: "Akta Kelahiran",
    aktemati: "Akta Kematian",
    kia: "Kartu Identitas Anak",
    ktp: "Kartu Tanda Penduduk (KTP)",
    kk: "Kartu Keluarga (KK)",
    usaha: "Surat Keterangan Usaha",
    domisili: "Surat Keterangan Domisili",
    sktm: "Surat Keterangan Tidak Mampu",
    datang: "Surat Pengantar Pindah Datang",
    keluar: "Surat Pengantar Pindah Keluar",
  };

  return (
    <div className="mt-6 bg-white p-6 rounded-xl shadow-md border">
      
      {/* TOMBOL KEMBALI */}
      <button
        onClick={onBack}
        className="text-sm mb-4 text-desa-main hover:underline"
      >
        ← Kembali ke daftar surat
      </button>

      <h3 className="text-xl font-bold mb-4">{titleMap[jenis]}</h3>

      <form className="space-y-4">
        {/* NIK */}
        <div>
          <label className="text-sm font-medium">NIK</label>
          <input
            type="number"
            className="w-full border rounded-lg px-4 py-2 bg-gray-50"
            placeholder="Masukkan NIK"
          />
        </div>

        {/* NAMA */}
        <div>
          <label className="text-sm font-medium">Nama Lengkap</label>
          <input
            type="text"
            className="w-full border rounded-lg px-4 py-2 bg-gray-50"
            placeholder="Masukkan nama lengkap"
          />
        </div>

        {/* FIELD KHUSUS */}
        {jenis === "usaha" && (
          <div>
            <label className="text-sm font-medium">Nama Usaha</label>
            <input
              type="text"
              className="w-full border rounded-lg px-4 py-2 bg-gray-50"
              placeholder="Nama usaha"
            />
          </div>
        )}

        {jenis === "aktelahir" && (
          <div>
            <label className="text-sm font-medium">Nama Ibu</label>
            <input
              type="text"
              className="w-full border rounded-lg px-4 py-2 bg-gray-50"
              placeholder="Nama ibu"
            />
          </div>
        )}

        {jenis === "aktemati" && (
          <div>
            <label className="text-sm font-medium">Tanggal Kematian</label>
            <input type="date" className="w-full border rounded-lg px-4 py-2 bg-gray-50" />
          </div>
        )}

        <button className="w-full bg-desa-main text-white py-3 rounded-lg hover:bg-green-700 transition">
          Kirim Permohonan
        </button>
      </form>
    </div>
  );
}
