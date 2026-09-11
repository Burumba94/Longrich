export default function About() {
  return (
    <main className="min-h-screen bg-cream/40 px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-5xl">
        <p className="text-sm font-semibold uppercase tracking-[0.25em] text-gold">Longrich avec Benoît</p>
        <h1 className="mt-3 text-4xl font-bold text-gray-900 sm:text-5xl">Une histoire de soin et d'entrepreneuriat</h1>
        <div className="mt-10 grid gap-8 md:grid-cols-2">
          <section className="rounded-2xl bg-white p-7 shadow-sm">
            <h2 className="text-2xl font-bold text-gray-900">L'histoire de Longrich</h2>
            <p className="mt-4 leading-7 text-gray-600">Fondé en 1998 en Chine par Xu Zhiwei, Longrich s'est développé autour de la recherche, de la fabrication et de la distribution de produits de beauté, d'hygiène et de bien-être. La marque est aujourd'hui présente dans de nombreux marchés et accompagne des entrepreneurs indépendants.</p>
            <p className="mt-4 leading-7 text-gray-600">Notre sélection au Sénégal réunit des références Longrich accessibles pour les routines quotidiennes, avec un accompagnement humain et des commandes simples.</p>
          </section>
          <section className="rounded-2xl bg-black-soft p-7 text-white shadow-sm">
            <h2 className="text-2xl font-bold">Pourquoi choisir Longrich ?</h2>
            <ul className="mt-5 space-y-4 text-white/80"><li><strong className="text-white">Des routines variées.</strong> Hygiène, soins corporels, thés et compléments dans un même univers.</li><li><strong className="text-white">Une approche pratique.</strong> Des formats pensés pour un usage quotidien et une découverte progressive.</li><li><strong className="text-white">Un accompagnement local.</strong> Benoît vous aide à choisir les références adaptées à vos besoins.</li></ul>
          </section>
        </div>
        <section className="mt-8 rounded-2xl border border-gold/20 bg-white p-7 shadow-sm"><h2 className="text-2xl font-bold text-gray-900">Devenir partenaire</h2><p className="mt-4 max-w-3xl leading-7 text-gray-600">Être partenaire Longrich, c'est pouvoir recommander des produits que l'on connaît, développer une activité indépendante à son rythme et bénéficier d'un réseau ainsi que d'un accompagnement commercial. Les résultats dépendent de l'implication, de la régularité et du développement de sa clientèle.</p></section>
        <p className="mt-6 text-sm leading-6 text-gray-500">Les produits de bien-être ne remplacent pas un avis médical. Pour tout complément alimentaire ou problème de santé, demandez conseil à un professionnel.</p>
      </div>
    </main>
  );
}
