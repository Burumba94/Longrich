import Hero from "../components/home/Hero";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <main>
        <Hero />

        {/* Les prochaines sections arrivent ici */}
        <section className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-gold">
              Longrich avec Benoît
            </p>

            <h2 className="mt-3 text-3xl font-bold text-gray-900 sm:text-4xl">
              Découvrez nos univers
            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-gray-500">
              Une sélection pensée pour votre beauté et votre bien-être.
            </p>
          </div>
        </section>
      </main>
    </div>
  );
}