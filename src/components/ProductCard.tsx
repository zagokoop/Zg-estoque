import React, { useState } from 'react';
import { ExternalLink, Copy, Check, Star, Truck, Clock } from 'lucide-react';
import { AffiliateProduct } from '../types';

interface ProductCardProps {
  product: AffiliateProduct;
  onCopyCoupon?: (code: string) => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product, onCopyCoupon }) => {
  const [copied, setCopied] = useState(false);
  const [imgError, setImgError] = useState(false);

  const handleCopy = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!product.couponCode) return;
    navigator.clipboard.writeText(product.couponCode);
    setCopied(true);
    if (onCopyCoupon) {
      onCopyCoupon(product.couponCode);
    }
    setTimeout(() => setCopied(false), 2200);
  };

  const isML = product.platform === 'mercadolivre';

  return (
    <article className="group relative flex flex-col bg-neutral-900 border border-neutral-800 hover:border-neutral-700 rounded-2xl overflow-hidden transition-all duration-200 hover:-translate-y-1 shadow-sm hover:shadow-xl hover:shadow-black/40">
      {/* Top Media / Thumbnail */}
      <div className="relative aspect-[4/3] bg-neutral-800 overflow-hidden">
        {!imgError ? (
          <img
            src={product.imageUrl}
            alt={product.title}
            onError={() => setImgError(true)}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
            referrerPolicy="no-referrer"
          />
        ) : (
          <div className="w-full h-full flex flex-col items-center justify-center p-4 bg-gradient-to-br from-neutral-800 to-neutral-900 text-neutral-400">
            <span className="text-2xl font-bold mb-1">{isML ? 'Mercado Livre' : 'Shopee'}</span>
            <span className="text-xs text-neutral-500">Oferta Verificada</span>
          </div>
        )}

        {/* Platform badge overlay */}
        <div className="absolute top-3 left-3 flex items-center gap-1.5">
          {isML ? (
            <span className="px-2.5 py-1 text-[11px] font-bold rounded-md bg-[#FFE600] text-[#2D3277] shadow-md shadow-black/20">
              Mercado Livre
            </span>
          ) : (
            <span className="px-2.5 py-1 text-[11px] font-bold rounded-md bg-[#EE4D2D] text-white shadow-md shadow-black/20">
              Shopee
            </span>
          )}

          {product.badge && (
            <span className="px-2 py-0.5 text-[10px] font-semibold rounded bg-neutral-950/80 backdrop-blur-sm text-neutral-200 border border-neutral-700/60">
              {product.badge}
            </span>
          )}
        </div>

        {/* Discount Tag */}
        <div className="absolute top-3 right-3 px-2 py-1 text-xs font-black rounded-md bg-emerald-500 text-neutral-950 shadow-md">
          -{product.discountPercent}%
        </div>

        {/* Stock / Time note */}
        <div className="absolute bottom-2 left-3 text-[11px] font-medium text-neutral-300 bg-neutral-950/70 backdrop-blur-sm px-2 py-0.5 rounded flex items-center gap-1">
          <Clock className="w-3 h-3 text-amber-400" />
          <span>Verificado há {product.verifiedMinutesAgo} min</span>
        </div>
      </div>

      {/* Body Content */}
      <div className="p-4 sm:p-5 flex flex-col flex-1">
        {/* Rating and free shipping note */}
        <div className="flex items-center justify-between text-xs text-neutral-400 mb-2">
          <div className="flex items-center gap-1">
            <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
            <span className="font-semibold text-neutral-200">{product.rating}</span>
            <span className="text-neutral-500">({product.reviewsCount.toLocaleString('pt-BR')})</span>
          </div>

          {product.freeShipping && (
            <div className="flex items-center gap-1 text-emerald-400 font-medium">
              <Truck className="w-3.5 h-3.5" />
              <span>Frete Grátis</span>
            </div>
          )}
        </div>

        {/* Product Title */}
        <h3 className="text-sm sm:text-base font-semibold text-white group-hover:text-amber-400 transition-colors line-clamp-2 mb-3 leading-snug">
          {product.title}
        </h3>

        {/* Pricing Area */}
        <div className="mt-auto pt-2 border-t border-neutral-800/80 mb-3">
          <div className="text-xs text-neutral-400 line-through">
            R$ {product.originalPrice.toFixed(2).replace('.', ',')}
          </div>
          <div className="flex items-baseline gap-2">
            <span className="text-2xl font-extrabold text-white font-mono tabular-nums">
              R$ {product.discountPrice.toFixed(2).replace('.', ',')}
            </span>
            {product.installments && (
              <span className="text-[11px] text-neutral-400 hidden sm:inline truncate">
                {product.installments}
              </span>
            )}
          </div>
        </div>

        {/* Coupon Section (if applicable) */}
        {product.couponCode && (
          <div className="mb-3 p-2 bg-neutral-950/60 border border-neutral-800 rounded-lg flex items-center justify-between gap-2">
            <div className="flex flex-col">
              <span className="text-[10px] uppercase font-bold text-neutral-400 tracking-wider">
                Cupom Exclusivo
              </span>
              <span className="text-xs font-mono font-bold text-amber-400">
                {product.couponCode}
              </span>
            </div>
            <button
              onClick={handleCopy}
              className={`px-2.5 py-1 text-xs font-semibold rounded-md transition-all flex items-center gap-1 ${
                copied
                  ? 'bg-emerald-500 text-neutral-950 font-bold'
                  : 'bg-neutral-800 hover:bg-neutral-700 text-neutral-200'
              }`}
            >
              {copied ? (
                <>
                  <Check className="w-3 h-3" />
                  <span>Copiado</span>
                </>
              ) : (
                <>
                  <Copy className="w-3 h-3 text-neutral-400" />
                  <span>Copiar</span>
                </>
              )}
            </button>
          </div>
        )}

        {/* Action Button */}
        <a
          href={product.affiliateUrl}
          target="_blank"
          rel="noopener noreferrer"
          className={`w-full py-2.5 px-4 rounded-xl text-xs sm:text-sm font-bold flex items-center justify-center gap-2 transition-all active:scale-[0.98] ${
            isML
              ? 'bg-[#FFE600] text-[#2D3277] hover:bg-[#ffe81f] shadow-sm shadow-amber-400/20'
              : 'bg-[#EE4D2D] text-white hover:bg-[#f05d3f] shadow-sm shadow-orange-500/20'
          }`}
        >
          <span>Ir para a oferta</span>
          <ExternalLink className="w-4 h-4" />
        </a>
      </div>
    </article>
  );
};
