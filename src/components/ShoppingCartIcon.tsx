"use client";
import useCartStore from "@/app/stores/cartStore";
import { ShoppingCart } from "lucide-react";
import Link from "next/link";

const ShoppingCartIcon = () => {
  const { cart, hasHydrated } = useCartStore();
  if (!hasHydrated) return null;
  return (
    <Link href="/cart" className="relative">
      <ShoppingCart />
      <span className="absolute -top-3 -right-3 bg-amber-400 rounded-full flex items-center justify-center text-gray-600 w-4 h-4 text-xs font-medium ">
        {cart.reduce((acc, item) => acc + item.quantity, 0)}
      </span>
    </Link>
  );
};

export default ShoppingCartIcon;
