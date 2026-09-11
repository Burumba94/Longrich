export default function Contact() {
	const handleSubmit = (event) => {
		event.preventDefault();
		const form = new FormData(event.currentTarget);
		const subject = encodeURIComponent(form.get("subject"));
		const body = encodeURIComponent(`Nom : ${form.get("name")}\nTéléphone : ${form.get("phone")}\n\n${form.get("message")}`);
		window.location.href = `mailto:benoitsagna7@gmail.com?subject=${subject}&body=${body}`;
	};

	return (
		<main className="min-h-screen bg-cream/40 px-4 py-16 sm:px-6 lg:px-8">
			<div className="mx-auto max-w-5xl">
				<p className="text-sm font-semibold uppercase tracking-[0.25em] text-gold">Une question ?</p>
				<h1 className="mt-3 text-4xl font-bold text-gray-900">Parlons de votre routine</h1>
				<div className="mt-10 grid gap-8 md:grid-cols-[0.8fr_1.2fr]">
					<div className="rounded-2xl bg-black-soft p-7 text-white"><h2 className="text-2xl font-bold">Contact direct</h2><p className="mt-4 leading-7 text-white/75">Pour un conseil produit, une commande ou une question sur le partenariat, écrivez-nous directement.</p><a href="mailto:benoitsagna7@gmail.com" className="mt-6 inline-block font-semibold text-gold">benoitsagna7@gmail.com</a><a href="https://wa.me/221766121766" target="_blank" rel="noreferrer" className="mt-3 block font-semibold text-white underline">WhatsApp : 76.612.17.66</a></div>
					<form onSubmit={handleSubmit} className="rounded-2xl bg-white p-7 shadow-sm"><h2 className="text-2xl font-bold text-gray-900">Envoyer un message</h2><div className="mt-5 grid gap-4 sm:grid-cols-2"><label className="text-sm font-semibold text-gray-700">Nom<input name="name" required className="mt-2 w-full rounded-xl border border-gray-200 px-4 py-3 font-normal outline-none focus:border-gold" /></label><label className="text-sm font-semibold text-gray-700">Téléphone<input name="phone" className="mt-2 w-full rounded-xl border border-gray-200 px-4 py-3 font-normal outline-none focus:border-gold" /></label></div><label className="mt-4 block text-sm font-semibold text-gray-700">Objet<input name="subject" required className="mt-2 w-full rounded-xl border border-gray-200 px-4 py-3 font-normal outline-none focus:border-gold" /></label><label className="mt-4 block text-sm font-semibold text-gray-700">Message<textarea name="message" required rows="5" className="mt-2 w-full rounded-xl border border-gray-200 px-4 py-3 font-normal outline-none focus:border-gold" /></label><button type="submit" className="mt-5 rounded-full bg-gold px-6 py-3 font-semibold text-white hover:bg-gold-dark">Ouvrir mon email</button></form>
				</div>
			</div>
		</main>
	);
}
