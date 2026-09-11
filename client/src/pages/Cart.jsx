import { Link } from "react-router-dom";
import { MinusIcon, PlusIcon, TrashIcon } from "@heroicons/react/24/outline";
import { useCart } from "../context/useCart";

export default function Cart() {
	const { items, total, updateQuantity, removeFromCart } = useCart();
	const formattedTotal = new Intl.NumberFormat("fr-FR").format(total);

	return (
		<main className="min-h-screen bg-cream/40 px-4 py-16 sm:px-6 lg:px-8">
			<div className="mx-auto max-w-5xl">
				<p className="text-sm font-semibold uppercase tracking-[0.25em] text-gold">Votre sélection</p>
				<h1 className="mt-3 text-4xl font-bold text-gray-900">Votre panier</h1>
				{items.length === 0 ? (
					<div className="mt-10 rounded-2xl bg-white p-10 text-center shadow-sm">
						<p className="text-gray-600">Votre panier est encore vide.</p>
						<Link to="/produits" className="mt-6 inline-flex rounded-full bg-gold px-6 py-3 font-semibold text-white hover:bg-gold-dark">Découvrir les produits</Link>
					</div>
				) : (
					<div className="mt-10 grid gap-8 lg:grid-cols-[1fr_320px]">
						<div className="space-y-4">
							{items.map((item) => (
								<div key={item.id} className="flex gap-4 rounded-2xl bg-white p-4 shadow-sm">
									<img src={item.image} alt={item.name} className="h-24 w-24 rounded-xl object-cover" />
									<div className="min-w-0 flex-1">
										<h2 className="font-semibold text-gray-900">{item.name}</h2>
										<p className="mt-1 font-bold text-gold-dark">{new Intl.NumberFormat("fr-FR").format(item.price)} FCFA</p>
										<div className="mt-3 flex items-center gap-3">
											<button type="button" onClick={() => updateQuantity(item.id, item.quantity - 1)} className="rounded-full border p-1" aria-label="Diminuer la quantité"><MinusIcon className="h-4 w-4" /></button>
											<span className="w-5 text-center text-sm font-semibold">{item.quantity}</span>
											<button type="button" onClick={() => updateQuantity(item.id, item.quantity + 1)} className="rounded-full border p-1" aria-label="Augmenter la quantité"><PlusIcon className="h-4 w-4" /></button>
										</div>
									</div>
									<button type="button" onClick={() => removeFromCart(item.id)} className="self-start rounded-full p-2 text-gray-500 hover:bg-red-50 hover:text-red-600" aria-label={`Supprimer ${item.name}`}><TrashIcon className="h-5 w-5" /></button>
								</div>
							))}
						</div>
						<aside className="h-fit rounded-2xl bg-white p-6 shadow-sm">
							<h2 className="text-xl font-bold text-gray-900">Résumé</h2>
							<div className="mt-5 flex justify-between border-t pt-4 font-bold"><span>Total</span><span className="text-gold-dark">{formattedTotal} FCFA</span></div>
							<a href="mailto:benoitsagna7@gmail.com?subject=Commande%20Longrich" className="mt-6 block rounded-full bg-gold px-5 py-3 text-center font-semibold text-white hover:bg-gold-dark">Passer la commande par email</a>
						</aside>
					</div>
				)}
			</div>
		</main>
	);
}
