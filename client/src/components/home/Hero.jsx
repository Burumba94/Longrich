import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  ArrowRightIcon,
  ShoppingBagIcon,
  CheckBadgeIcon,
  TruckIcon,
} from "@heroicons/react/24/outline";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-white via-white to-amber-50/60">

      {/* Décor */}
      <div className="absolute -right-32 -top-32 h-96 w-96 rounded-full bg-gold/10 blur-3xl" />
      <div className="absolute -bottom-32 -left-32 h-96 w-96 rounded-full bg-amber-100/40 blur-3xl" />

      <div className="relative mx-auto grid min-h-[680px] max-w-7xl items-center gap-12 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:px-8">

        {/* Texte */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="max-w-xl"
        >
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-gold/30 bg-white px-4 py-2 text-sm font-medium text-gold shadow-sm">
            <span className="h-2 w-2 rounded-full bg-gold" />
            Beauté • Bien-être • Nature
          </div>

          <h1 className="text-5xl font-bold leading-[1.05] tracking-tight text-black-soft sm:text-6xl">
            Votre beauté
            <span className="block text-gold">
              mérite le meilleur.
            </span>
          </h1>

          <p className="mt-6 max-w-lg text-lg leading-8 text-gray-600">
            Découvrez notre sélection de produits Longrich pour prendre
            soin de votre beauté et de votre bien-être au quotidien.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              to="/produits"
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-gold px-7 py-3.5 font-semibold text-white shadow-lg shadow-gold/20 transition hover:bg-gold-dark"
            >
              <ShoppingBagIcon className="h-5 w-5" />

              Découvrir les produits

              <ArrowRightIcon className="h-4 w-4 transition group-hover:translate-x-1" />
            </Link>

            <a
              href="https://wa.me/221766121766"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-gray-300 bg-white px-7 py-3.5 font-semibold text-gray-800 transition hover:border-gold hover:text-gold"
            >
              Commander sur WhatsApp
            </a>
          </div>

          {/* Réassurance */}
          <div className="mt-10 grid grid-cols-3 gap-5 border-t border-gray-200 pt-7">
            <div>
              <CheckBadgeIcon className="mb-2 h-7 w-7 text-gold" />
              <p className="text-xs font-semibold text-gray-800">
                Qualité
              </p>
              <p className="mt-1 text-xs text-gray-500">
                Produits sélectionnés
              </p>
            </div>

            <div>
              <TruckIcon className="mb-2 h-7 w-7 text-gold" />
              <p className="text-xs font-semibold text-gray-800">
                Livraison
              </p>
              <p className="mt-1 text-xs text-gray-500">
                Partout au Sénégal
              </p>
            </div>

            <div>
              <CheckBadgeIcon className="mb-2 h-7 w-7 text-gold" />
              <p className="text-xs font-semibold text-gray-800">
                Service
              </p>
              <p className="mt-1 text-xs text-gray-500">
                Disponible sur WhatsApp
              </p>
            </div>
          </div>
        </motion.div>

        {/* Visuel */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="relative"
        >
          <div className="absolute inset-8 rounded-full bg-gold/10 blur-3xl" />

          <div className="relative mx-auto flex aspect-square max-w-[580px] items-center justify-center rounded-[3rem] border border-gold/10 bg-white/70 p-10 shadow-2xl shadow-black/5 backdrop-blur">

            <div className="absolute inset-5 rounded-[2.5rem] border border-gold/20" />

            <div className="relative text-center">
              <div className="mx-auto flex h-48 w-48 items-center justify-center rounded-full bg-gradient-to-br from-gold/20 to-amber-50 shadow-inner">
                <span className="font-serif text-7xl font-bold text-gold">
                  L
                </span>
              </div>

              <p className="mt-8 font-serif text-3xl italic text-gray-700">
                Longrich
              </p>

              <p className="mt-2 text-sm uppercase tracking-[0.3em] text-gold">
                avec Benoît
              </p>
            </div>
          </div>

          {/* Badge */}
          <div className="absolute -bottom-3 left-4 rounded-2xl border border-gray-100 bg-white px-5 py-4 shadow-xl sm:left-0">
            <p className="text-xs font-medium text-gray-500">
              Besoin d'aide ?
            </p>
            <p className="mt-1 font-bold text-gold">
              76.612.17.66
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}