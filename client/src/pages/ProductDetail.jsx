import { Link, useParams } from "react-router-dom";
import { ShoppingBagIcon } from "@heroicons/react/24/outline";
import { getProductById } from "../data/products";
import { useCart } from "../context/useCart";

export default function ProductDetail() {
	const { productId } = useParams();
	const product = getProductById(productId);
	const { addToCart } = useCart();

	if (!product) {
		return (
			<main className="mx-auto max-w-7xl px-4 py-24 text-center sm:px-6 lg:px-8">
				<h1 className="text-3xl font-bold text-gray-900">Produit introuvable</h1>
				<Link to="/produits" className="mt-6 inline-flex font-semibold text-gold-dark">Retour aux produits</Link>
			</main>
		);
	}

	return (
		<main className="min-h-screen bg-cream/40 px-4 py-16 sm:px-6 lg:px-8">
			<div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-2 lg:items-start">
				<div className="overflow-hidden rounded-3xl bg-white shadow-sm">
					<img src={product.image} alt={product.name} className="aspect-square w-full object-cover" />
				</div>
				<div className="pt-4">
					<Link to={`/produits?category=${product.category}`} className="text-sm font-semibold uppercase tracking-[0.2em] text-gold">Retour à la catégorie</Link>
					<h1 className="mt-4 text-4xl font-bold text-gray-900">{product.name}</h1>
					<p className="mt-5 text-2xl font-bold text-gold-dark">{new Intl.NumberFormat("fr-FR").format(product.price)} FCFA</p>
					<p className="mt-6 text-lg leading-8 text-gray-600">{product.description}</p>
					<button type="button" onClick={() => addToCart(product)} className="mt-7 inline-flex items-center gap-2 rounded-full bg-gold px-6 py-3 font-semibold text-white shadow-sm transition hover:bg-gold-dark">
						<ShoppingBagIcon className="h-5 w-5" /> Ajouter au panier
					</button>
					<div className="mt-8 border-t border-gray-200 pt-6">
						<h2 className="text-lg font-semibold text-gray-900">Points indiqués sur le visuel</h2>
						<ul className="mt-4 grid gap-3 sm:grid-cols-2">
							{product.highlights.map((highlight) => <li key={highlight} className="rounded-xl bg-white px-4 py-3 text-sm text-gray-700 shadow-sm">{highlight}</li>)}
						</ul>
					</div>
					<p className="mt-8 text-xs leading-5 text-gray-500">Les informations ci-dessus reprennent les indications visibles sur l'image du produit. Elles ne remplacent pas l'avis d'un professionnel de santé.</p>
				</div>
			</div>
		</main>
	);
}
