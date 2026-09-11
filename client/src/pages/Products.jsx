import { useMemo } from "react";
import { Link, useSearchParams } from "react-router-dom";
import ProductCard from "../components/ui/ProductCard";
import products, { categoryLabels } from "../data/products";

export default function Products() {
	const [searchParams] = useSearchParams();
	const selectedCategory = searchParams.get("category") || "all";
	const visibleProducts = useMemo(
		() => selectedCategory === "all" ? products : products.filter((product) => product.category === selectedCategory),
		[selectedCategory]
	);

	return (
		<main className="min-h-screen bg-cream/40 px-4 py-16 sm:px-6 lg:px-8">
			<div className="mx-auto max-w-7xl">
				<div className="max-w-2xl">
					<p className="text-sm font-semibold uppercase tracking-[0.25em] text-gold">Longrich avec Benoît</p>
					<h1 className="mt-3 text-4xl font-bold text-gray-900 sm:text-5xl">Notre sélection</h1>
					<p className="mt-4 leading-7 text-gray-600">Retrouvez les produits présentés dans vos visuels, classés par univers.</p>
				</div>

				<nav className="mt-10 flex flex-wrap gap-3" aria-label="Catégories de produits">
					{Object.entries(categoryLabels).map(([category, label]) => (
						<Link
							key={category}
							to={category === "all" ? "/produits" : `/produits?category=${category}`}
							className={`rounded-full border px-4 py-2 text-sm font-semibold transition ${selectedCategory === category ? "border-gold bg-gold text-white" : "border-gray-200 bg-white text-gray-700 hover:border-gold hover:text-gold"}`}
						>
							{label}
						</Link>
					))}
				</nav>

				<div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
					{visibleProducts.map((product) => <ProductCard key={product.id} product={product} />)}
				</div>
			</div>
		</main>
	);
}
