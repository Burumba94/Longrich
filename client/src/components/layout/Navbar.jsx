import { useState } from "react";
import { Link } from "react-router-dom";
import {
  Bars3Icon,
  XMarkIcon,
  ShoppingBagIcon,
  MagnifyingGlassIcon,
} from "@heroicons/react/24/outline";
import { useCart } from "../../context/useCart";

const navigation = [
  { name: "Accueil", href: "/" },
  { name: "Produits", href: "/produits" },
  { name: "Thés", href: "/produits?category=thes" },
  { name: "Compléments", href: "/produits?category=complements" },
  { name: "À propos", href: "/a-propos" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const { itemCount } = useCart();

  return (
    <>
      {/* Top bar */}
      <div className="bg-gold px-4 py-2 text-center text-xs font-medium text-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between">
          <span className="hidden sm:block">
            Livraison partout au Sénégal
          </span>

          <span>
            Produits Longrich • Beauté • Bien-être • Nature
          </span>

          <a
            href="https://wa.me/221766121766"
            target="_blank"
            rel="noreferrer"
            className="hidden sm:block hover:underline"
          >
            WhatsApp : 76.612.17.66
          </a>
        </div>
      </div>

      {/* Navbar */}
      <header className="sticky top-0 z-50 border-b border-gray-100 bg-white/95 backdrop-blur-md">
        <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">

          {/* Logo */}
          <a href="/" className="group">
            <div className="flex items-center gap-2">
              <div className="flex h-11 w-11 items-center justify-center rounded-full bg-gold text-xl text-white shadow-sm">
                L
              </div>

              <div className="leading-none">
                <div className="text-2xl font-bold tracking-tight text-gold">
                  Longrich
                </div>

                <div className="mt-1 font-serif text-sm italic text-gray-700">
                  avec Benoît
                </div>
              </div>
            </div>
          </a>

          {/* Desktop navigation */}
          <div className="hidden items-center gap-7 lg:flex">
            {navigation.map((item, index) => (
              <a
                key={item.name}
                href={item.href}
                className={`relative text-sm font-medium transition ${
                  index === 0
                    ? "text-gold"
                    : "text-gray-700 hover:text-gold"
                }`}
              >
                {item.name}

                {index === 0 && (
                  <span className="absolute -bottom-2 left-0 h-0.5 w-full bg-gold" />
                )}
              </a>
            ))}
          </div>

          {/* Actions */}
          <div className="hidden items-center gap-3 lg:flex">
            <button className="rounded-full p-2.5 text-gray-700 transition hover:bg-cream hover:text-gold">
              <MagnifyingGlassIcon className="h-5 w-5" />
            </button>

            <Link to="/panier" className="relative rounded-full p-2.5 text-gray-700 transition hover:bg-cream hover:text-gold" aria-label="Ouvrir le panier">
              <ShoppingBagIcon className="h-5 w-5" />
              <span className="absolute -right-0.5 -top-0.5 flex h-4 w-4 items-center justify-center rounded-full bg-gold text-[10px] font-bold text-white">
                {itemCount}
              </span>
            </Link>

            <a
              href="https://wa.me/221766121766"
              target="_blank"
              rel="noreferrer"
              className="rounded-full bg-gold px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-gold-dark hover:shadow-md"
            >
              WhatsApp
            </a>
          </div>

          {/* Mobile button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="rounded-lg p-2 text-gray-700 lg:hidden"
            aria-label="Menu"
          >
            {mobileOpen ? (
              <XMarkIcon className="h-7 w-7" />
            ) : (
              <Bars3Icon className="h-7 w-7" />
            )}
          </button>
        </nav>

        {/* Mobile menu */}
        {mobileOpen && (
          <div className="border-t border-gray-100 bg-white px-5 py-5 lg:hidden">
            <div className="flex flex-col gap-1">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  className="rounded-xl px-4 py-3 font-medium text-gray-700 transition hover:bg-cream hover:text-gold"
                >
                  {item.name}
                </a>
              ))}

              <a
                href="https://wa.me/221766121766"
                target="_blank"
                rel="noreferrer"
                className="mt-3 rounded-xl bg-gold px-4 py-3 text-center font-semibold text-white"
              >
                Commander sur WhatsApp
              </a>

              <Link to="/panier" onClick={() => setMobileOpen(false)} className="mt-2 rounded-xl border border-gold px-4 py-3 text-center font-semibold text-gold">
                Mon panier ({itemCount})
              </Link>
            </div>
          </div>
        )}
      </header>
    </>
  );
}