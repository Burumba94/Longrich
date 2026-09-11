import { useEffect, useState } from "react";
import { CartContext } from "./CartContext";
const storageKey = "longrich-cart";

export function CartProvider({ children }) {
	const [items, setItems] = useState(() => {
		try {
			return JSON.parse(localStorage.getItem(storageKey) || "[]");
		} catch {
			return [];
		}
	});

	useEffect(() => {
		localStorage.setItem(storageKey, JSON.stringify(items));
	}, [items]);

	const addToCart = (product) => {
		setItems((currentItems) => {
			const existing = currentItems.find((item) => item.id === product.id);
			if (existing) {
				return currentItems.map((item) => item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item);
			}
			return [...currentItems, { ...product, quantity: 1 }];
		});
	};

	const updateQuantity = (productId, quantity) => {
		setItems((currentItems) => quantity > 0
			? currentItems.map((item) => item.id === productId ? { ...item, quantity } : item)
			: currentItems.filter((item) => item.id !== productId));
	};

	const removeFromCart = (productId) => updateQuantity(productId, 0);
	const itemCount = items.reduce((total, item) => total + item.quantity, 0);
	const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0);

	const value = { items, itemCount, total, addToCart, updateQuantity, removeFromCart };
	return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}
