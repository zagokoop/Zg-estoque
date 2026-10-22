import React, { useState, useMemo } from 'react';
import { Search, SlidersHorizontal, MessageCircle, AlertCircle } from 'lucide-react';
import { AffiliateProduct, Platform, Category } from '../types';
import { ProductCard } from './ProductCard';

interface DealsCatalogProps {
  products: AffiliateProduct[];
  whatsappUrl: string;
  onCopyCouponNotification: (coupon: string) => void;
}

export const DealsCatalog: React.FC<DealsCatalogProps> = ({
  products,
  whatsappUrl,
  onCopyCouponNotification,
}) => {
  const [selectedPlatform, setSelectedPlatform] = useState<Platform>('all');
  const [selectedCategory, setSelectedCategory] = useState<Category>('todos');
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState<'discount' | 'priceAsc' | 'recent'>('discount');

  const filteredProducts = useMemo(() => {
    return products
      .filter((item) => {
        const matchesPlatform = selectedPlatform === 'all' || item.platform === selectedPlatform;
        const matchesCategory = selectedCategory === 'todos' || item.category === selectedCategory;
        const matchesSearch =
          searchQuery.trim() === '' ||
          item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          (item.couponCode && item.couponCode.toLowerCase().includes(searchQuery.toLowerCase()));

        return matchesPlatform && matchesCategory && matchesSearch;
      })
      .sort((a, b) => {
        if (sortBy === 'discount') return b.discountPercent - a.discountPercent;
        if (sortBy === 'priceAsc') return a.discountPrice - b.discountPrice;
        if (sortBy === 'recent') return a.verifiedMinutesAgo - b.verifiedMinutesAgo;
        return 0;
      });
  }, [products, selectedPlatform, selectedCategory, searchQuery, sortBy]);

  return (
    <section id="ofertas" className="py-16 sm:py-20 border-b border-neutral-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div>
            <div className="text-xs font-bold uppercase tracking-wider text-amber-400 mb-2">
              Garimpo Diário Verificado
            </div>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight [text-wrap:balance]">
              Ofertas em Destaque no Mercado Livre & Shopee
            </h2>
            <p className="text-sm sm:text-base text-neutral-400 mt-2 max-w-xl">
              Clique para acessar direto na loja oficial ou use o cupom exclusivo para aplicar desconto no carrinho.
            </p>
          </div>

          {/* Quick Platform Switcher Segmented Control */}
          <div id="plataformas" className="flex items-center gap-1.5 p-1 bg-neutral-900 border border-neutral-800 rounded-xl shrink-0 self-start md:self-auto">
            <button
              onClick={() => setSelectedPlatform('all')}
              className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-colors whitespace-nowrap ${
                selectedPlatform === 'all'
                  ? 'bg-neutral-800 text-white shadow-sm'
                  : 'text-neutral-400 hover:text-white'
              }`}
            >
              Todas as Lojas
            </button>
            <button
              onClick={() => setSelectedPlatform('mercadolivre')}
              className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-colors flex items-center gap-1.5 whitespace-nowrap ${
                selectedPlatform === 'mercadolivre'
                  ? 'bg-[#FFE600] text-[#2D3277] shadow-sm font-bold'
                  : 'text-neutral-400 hover:text-white'
              }`}
            >
              <span className="w-2 h-2 rounded-full bg-[#2D3277]"></span>
              Mercado Livre
            </button>
            <button
              onClick={() => setSelectedPlatform('shopee')}
              className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-colors flex items-center gap-1.5 whitespace-nowrap ${
                selectedPlatform === 'shopee'
                  ? 'bg-[#EE4D2D] text-white shadow-sm font-bold'
                  : 'text-neutral-400 hover:text-white'
              }`}
            >
              <span className="w-2 h-2 rounded-full bg-white"></span>
              Shopee
            </button>
          </div>
        </div>

        {/* Filter and Search Bar */}
        <div className="bg-neutral-900/60 border border-neutral-800 rounded-2xl p-4 mb-8 flex flex-col md:flex-row gap-4 items-stretch md:items-center justify-between">
          {/* Category Tabs */}
          <div className="flex items-center gap-1 overflow-x-auto pb-2 md:pb-0 scrollbar-none">
            {[
              { id: 'todos', label: 'Todos' },
              { id: 'tech', label: 'Eletrônicos & Tech' },
              { id: 'casa', label: 'Casa & Cozinha' },
              { id: 'gamer', label: 'Gamer' },
              { id: 'beleza', label: 'Beleza & Cuidados' },
              { id: 'moda', label: 'Moda & Acessórios' },
            ].map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id as Category)}
                className={`px-3 py-1.5 text-xs font-medium rounded-lg whitespace-nowrap transition-colors ${
                  selectedCategory === cat.id
                    ? 'bg-amber-400/10 text-amber-300 border border-amber-400/30'
                    : 'text-neutral-400 hover:text-white hover:bg-neutral-800/60'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Search & Sort Controls */}
          <div className="flex items-center gap-3">
            <div className="relative flex-1 sm:w-56">
              <Search className="w-4 h-4 text-neutral-500 absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
              <input
                type="text"
                placeholder="Buscar achado ou cupom..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-9 pr-3 py-1.5 text-xs bg-neutral-950 border border-neutral-800 rounded-lg text-white placeholder-neutral-500 focus:outline-none focus:border-amber-400 transition-colors"
              />
            </div>

            <div className="flex items-center gap-1.5 shrink-0">
              <SlidersHorizontal className="w-3.5 h-3.5 text-neutral-400" />
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as any)}
                className="text-xs bg-neutral-950 border border-neutral-800 rounded-lg text-neutral-300 py-1.5 px-2.5 focus:outline-none focus:border-amber-400"
              >
                <option value="discount">Maior Desconto</option>
                <option value="priceAsc">Menor Preço</option>
                <option value="recent">Mais Recentes</option>
              </select>
            </div>
          </div>
        </div>

        {/* Product Cards Grid */}
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onCopyCoupon={onCopyCouponNotification}
              />
            ))}
          </div>
        ) : (
          <div className="bg-neutral-900 border border-neutral-800 rounded-2xl p-12 text-center max-w-md mx-auto">
            <AlertCircle className="w-10 h-10 text-neutral-500 mx-auto mb-3" />
            <h3 className="text-base font-bold text-white mb-1">Nenhum achado encontrado</h3>
            <p className="text-xs text-neutral-400 mb-5">
              Não encontramos ofertas para os filtros selecionados. Tente buscar outro termo ou veja os alertas no grupo.
            </p>
            <button
              onClick={() => {
                setSelectedPlatform('all');
                setSelectedCategory('todos');
                setSearchQuery('');
              }}
              className="px-4 py-2 text-xs font-semibold text-neutral-200 bg-neutral-800 hover:bg-neutral-700 rounded-lg transition-colors"
            >
              Limpar Filtros
            </button>
          </div>
        )}

        {/* Mid-Catalog WhatsApp Conversion Callout */}
        <div className="mt-12 bg-gradient-to-r from-emerald-950/40 via-neutral-900 to-amber-950/30 border border-neutral-800 rounded-2xl p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="max-w-xl text-center md:text-left">
            <h3 className="text-lg sm:text-xl font-bold text-white mb-2">
              Quer receber achadinhos que esgotam em menos de 10 minutos?
            </h3>
            <p className="text-xs sm:text-sm text-neutral-300">
              Muitos cupons relâmpago de 50% a 80% do Mercado Livre e Shopee duram apenas alguns minutos e não chegam a tempo de serem postados no site.
            </p>
          </div>

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 px-6 py-3.5 text-xs sm:text-sm font-bold text-neutral-950 bg-emerald-500 hover:bg-emerald-400 rounded-xl transition-all shadow-md shadow-emerald-500/20 whitespace-nowrap shrink-0 active:scale-95"
          >
            <MessageCircle className="w-4 h-4 fill-neutral-950" />
            <span>Entrar no Grupo de Alertas Imediatos</span>
          </a>
        </div>
      </div>
    </section>
  );
};
