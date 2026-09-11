import { Link } from "react-router-dom";
import { ShoppingBagIcon } from "@heroicons/react/24/outline";
import { useCart } from "../../context/useCart";

export default function ProductCard({ product }) {
	const { addToCart } = useCart();
	const formattedPrice = new Intl.NumberFormat("fr-FR").format(product.price);

	return (
		<article className="group overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
			<Link to={`/produits/${product.id}`} className="block">
				<div className="aspect-square overflow-hidden bg-cream">
					<img
						src={product.image}
						alt={product.name}
						className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
					/>
				</div>
				<div className="p-5">
					<p className="text-xs font-semibold uppercase tracking-[0.18em] text-gold">
						{product.category === "thes" ? "Thés & boissons" : product.category === "complements" ? "Compléments" : "Soins & hygiène"}
					</p>
					<h2 className="mt-2 text-lg font-semibold text-gray-900">{product.name}</h2>
					<p className="mt-3 text-xl font-bold text-gold-dark">{formattedPrice} FCFA</p>
					<p className="mt-3 line-clamp-3 text-sm leading-6 text-gray-600">{product.description}</p>
					<div className="mt-5 flex items-center justify-between gap-3">
						<span className="text-sm font-semibold text-gold-dark">Voir la fiche →</span>
						<button type="button" onClick={(event) => { event.preventDefault(); addToCart(product); }} className="inline-flex items-center gap-2 rounded-full bg-gold px-3 py-2 text-xs font-semibold text-white transition hover:bg-gold-dark" aria-label={`Ajouter ${product.name} au panier`}>
							<ShoppingBagIcon className="h-4 w-4" /> Ajouter
						</button>
					</div>
				</div>
			</Link>
		</article>
	);
}
