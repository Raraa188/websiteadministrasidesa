import BeritaCard from "./BeritaCard";

export default function BeritaSection() {
  return (
    <section id="berita">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-1 h-8 bg-desa-main rounded-full"></div>
        <h2 className="text-2xl font-bold">Kabar Desa</h2>
      </div>

      <div className="space-y-4">
        <BeritaCard />
      </div>
    </section>
  );
}
