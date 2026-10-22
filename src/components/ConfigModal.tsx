import React, { useState } from 'react';
import { X, Save, RotateCcw, Plus, Trash2, Link, MessageCircle } from 'lucide-react';
import { AffiliateConfig, AffiliateProduct } from '../types';

interface ConfigModalProps {
  isOpen: boolean;
  onClose: () => void;
  config: AffiliateConfig;
  onSaveConfig: (newConfig: AffiliateConfig) => void;
  onResetDefaults: () => void;
  onAddProduct: (product: AffiliateProduct) => void;
}

export const ConfigModal: React.FC<ConfigModalProps> = ({
  isOpen,
  onClose,
  config,
  onSaveConfig,
  onResetDefaults,
  onAddProduct,
}) => {
  const [formData, setFormData] = useState<AffiliateConfig>(config);
  const [activeTab, setActiveTab] = useState<'links' | 'addProduct'>('links');

  // New product form state
  const [newTitle, setNewTitle] = useState('');
  const [newPlatform, setNewPlatform] = useState<'mercadolivre' | 'shopee'>('mercadolivre');
  const [newCategory, setNewCategory] = useState<'tech' | 'casa' | 'moda' | 'beleza' | 'gamer'>('tech');
  const [newOrigPrice, setNewOrigPrice] = useState('199.90');
  const [newDiscPrice, setNewDiscPrice] = useState('99.90');
  const [newCoupon, setNewCoupon] = useState('');
  const [newUrl, setNewUrl] = useState('');
  const [newImage, setNewImage] = useState('/src/assets/images/hero_deals_shopping_1792686572713.jpg');

  if (!isOpen) return null;

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    onSaveConfig(formData);
    onClose();
  };

  const handleCreateProduct = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newTitle.trim() || !newUrl.trim()) return;

    const orig = parseFloat(newOrigPrice) || 100;
    const disc = parseFloat(newDiscPrice) || 50;
    const discountPercent = Math.max(1, Math.round(((orig - disc) / orig) * 100));

    const item: AffiliateProduct = {
      id: 'prod-' + Date.now(),
      title: newTitle,
      platform: newPlatform,
      category: newCategory,
      originalPrice: orig,
      discountPrice: disc,
      discountPercent: discountPercent,
      couponCode: newCoupon.trim() || undefined,
      affiliateUrl: newUrl,
      imageUrl: newImage,
      rating: 4.9,
      reviewsCount: 120,
      freeShipping: true,
      verifiedMinutesAgo: 1,
      badge: 'Adicionado Agora',
    };

    onAddProduct(item);
    setNewTitle('');
    setNewUrl('');
    setNewCoupon('');
    setActiveTab('links');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
      <div className="bg-neutral-900 border border-neutral-700 rounded-2xl w-full max-w-xl max-h-[90vh] flex flex-col overflow-hidden shadow-2xl">
        {/* Modal Header */}
        <div className="p-5 border-b border-neutral-800 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img
              src="/assets/aistudio/WhatsApp_Image_2026-10-22_at_13.42.57_08754572.jpeg"
              alt="ZG Estoque Logo"
              className="w-9 h-9 rounded-full object-cover border border-amber-400/60 shadow-md shrink-0"
              referrerPolicy="no-referrer"
            />
            <div>
              <h3 className="text-base font-bold text-white">Configurar ZG Estoque VIP</h3>
              <p className="text-xs text-neutral-400">Personalize o link do seu grupo de WhatsApp e suas ofertas</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-neutral-400 hover:text-white rounded-lg hover:bg-neutral-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tab switch */}
        <div className="flex border-b border-neutral-800 px-5 pt-3 gap-4 text-xs font-semibold">
          <button
            onClick={() => setActiveTab('links')}
            className={`pb-2.5 border-b-2 transition-colors ${
              activeTab === 'links'
                ? 'border-emerald-500 text-white'
                : 'border-transparent text-neutral-400 hover:text-white'
            }`}
          >
            Grupo de WhatsApp & Tags
          </button>
          <button
            onClick={() => setActiveTab('addProduct')}
            className={`pb-2.5 border-b-2 transition-colors flex items-center gap-1.5 ${
              activeTab === 'addProduct'
                ? 'border-amber-400 text-white'
                : 'border-transparent text-neutral-400 hover:text-white'
            }`}
          >
            <Plus className="w-3.5 h-3.5" />
            Adicionar Novo Achado
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-5 overflow-y-auto space-y-4 flex-1">
          {activeTab === 'links' ? (
            <form id="config-form" onSubmit={handleSave} className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-white mb-1 flex items-center gap-1.5">
                  <MessageCircle className="w-3.5 h-3.5 text-emerald-400" />
                  Link de Convite do Grupo de WhatsApp
                </label>
                <input
                  type="url"
                  required
                  placeholder="https://chat.whatsapp.com/..."
                  value={formData.whatsappGroupUrl}
                  onChange={(e) => setFormData({ ...formData, whatsappGroupUrl: e.target.value })}
                  className="w-full px-3 py-2 text-xs bg-neutral-950 border border-neutral-800 rounded-lg text-white placeholder-neutral-500 focus:outline-none focus:border-emerald-500"
                />
                <p className="text-[11px] text-neutral-400 mt-1">
                  Cole o link direto do seu grupo ou canal do WhatsApp. Todos os botões principais levarão para este link.
                </p>
              </div>

              <div>
                <label className="block text-xs font-bold text-white mb-1">
                  Nome do Grupo no WhatsApp
                </label>
                <input
                  type="text"
                  required
                  value={formData.whatsappGroupName}
                  onChange={(e) => setFormData({ ...formData, whatsappGroupName: e.target.value })}
                  className="w-full px-3 py-2 text-xs bg-neutral-950 border border-neutral-800 rounded-lg text-white focus:outline-none focus:border-amber-400"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-white mb-1">
                  Texto do Aviso de Topo (Ticker)
                </label>
                <input
                  type="text"
                  value={formData.announcementText}
                  onChange={(e) => setFormData({ ...formData, announcementText: e.target.value })}
                  className="w-full px-3 py-2 text-xs bg-neutral-950 border border-neutral-800 rounded-lg text-white focus:outline-none focus:border-amber-400"
                />
              </div>

              <div className="grid grid-cols-2 gap-3 pt-2">
                <div>
                  <label className="block text-xs font-bold text-neutral-300 mb-1">
                    Tag Afiliado Shopee
                  </label>
                  <input
                    type="text"
                    value={formData.shopeeAffiliateCode}
                    onChange={(e) => setFormData({ ...formData, shopeeAffiliateCode: e.target.value })}
                    className="w-full px-3 py-2 text-xs bg-neutral-950 border border-neutral-800 rounded-lg text-white focus:outline-none focus:border-orange-500"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-neutral-300 mb-1">
                    Tag Afiliado Mercado Livre
                  </label>
                  <input
                    type="text"
                    value={formData.mercadolivreAffiliateCode}
                    onChange={(e) => setFormData({ ...formData, mercadolivreAffiliateCode: e.target.value })}
                    className="w-full px-3 py-2 text-xs bg-neutral-950 border border-neutral-800 rounded-lg text-white focus:outline-none focus:border-amber-400"
                  />
                </div>
              </div>
            </form>
          ) : (
            <form id="add-product-form" onSubmit={handleCreateProduct} className="space-y-3">
              <div>
                <label className="block text-xs font-bold text-white mb-1">Título do Produto</label>
                <input
                  type="text"
                  required
                  placeholder="Ex: Fone Bluetooth Pro com Cancelamento de Ruído"
                  value={newTitle}
                  onChange={(e) => setNewTitle(e.target.value)}
                  className="w-full px-3 py-2 text-xs bg-neutral-950 border border-neutral-800 rounded-lg text-white focus:outline-none focus:border-amber-400"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-neutral-300 mb-1">Plataforma</label>
                  <select
                    value={newPlatform}
                    onChange={(e) => setNewPlatform(e.target.value as any)}
                    className="w-full px-3 py-2 text-xs bg-neutral-950 border border-neutral-800 rounded-lg text-white"
                  >
                    <option value="mercadolivre">Mercado Livre</option>
                    <option value="shopee">Shopee</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-bold text-neutral-300 mb-1">Categoria</label>
                  <select
                    value={newCategory}
                    onChange={(e) => setNewCategory(e.target.value as any)}
                    className="w-full px-3 py-2 text-xs bg-neutral-950 border border-neutral-800 rounded-lg text-white"
                  >
                    <option value="tech">Eletrônicos & Tech</option>
                    <option value="casa">Casa & Cozinha</option>
                    <option value="gamer">Gamer</option>
                    <option value="beleza">Beleza</option>
                    <option value="moda">Moda</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-neutral-300 mb-1">Preço Original (R$)</label>
                  <input
                    type="number"
                    step="0.01"
                    value={newOrigPrice}
                    onChange={(e) => setNewOrigPrice(e.target.value)}
                    className="w-full px-3 py-2 text-xs bg-neutral-950 border border-neutral-800 rounded-lg text-white"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-neutral-300 mb-1">Preço com Oferta (R$)</label>
                  <input
                    type="number"
                    step="0.01"
                    value={newDiscPrice}
                    onChange={(e) => setNewDiscPrice(e.target.value)}
                    className="w-full px-3 py-2 text-xs bg-neutral-950 border border-neutral-800 rounded-lg text-white"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-neutral-300 mb-1">Código do Cupom (Opcional)</label>
                  <input
                    type="text"
                    placeholder="Ex: PROMO20"
                    value={newCoupon}
                    onChange={(e) => setNewCoupon(e.target.value)}
                    className="w-full px-3 py-2 text-xs bg-neutral-950 border border-neutral-800 rounded-lg text-white uppercase font-mono"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-neutral-300 mb-1">Imagem</label>
                  <select
                    value={newImage}
                    onChange={(e) => setNewImage(e.target.value)}
                    className="w-full px-3 py-2 text-xs bg-neutral-950 border border-neutral-800 rounded-lg text-white"
                  >
                    <option value="/src/assets/images/hero_deals_shopping_1792686572713.jpg">Pacotes / Compras</option>
                    <option value="/src/assets/images/showcase_tech_products_1792686573191.jpg">Gadgets / Eletrônicos</option>
                    <option value="/src/assets/images/whatsapp_alert_community_1792686573335.jpg">Smartphone / Setup</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-white mb-1">Link de Afiliado (URL)</label>
                <input
                  type="url"
                  required
                  placeholder="https://..."
                  value={newUrl}
                  onChange={(e) => setNewUrl(e.target.value)}
                  className="w-full px-3 py-2 text-xs bg-neutral-950 border border-neutral-800 rounded-lg text-white focus:outline-none focus:border-amber-400"
                />
              </div>

              <button
                type="submit"
                className="w-full mt-2 py-2.5 px-4 bg-amber-400 hover:bg-amber-300 text-neutral-950 font-bold rounded-lg text-xs transition-colors flex items-center justify-center gap-2"
              >
                <Plus className="w-4 h-4" />
                <span>Publicar Oferta no Catálogo</span>
              </button>
            </form>
          )}
        </div>

        {/* Modal Footer */}
        {activeTab === 'links' && (
          <div className="p-4 border-t border-neutral-800 flex items-center justify-between bg-neutral-950/60">
            <button
              type="button"
              onClick={onResetDefaults}
              className="text-xs text-neutral-400 hover:text-white flex items-center gap-1.5 transition-colors"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              Restaurar Padrões
            </button>
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={onClose}
                className="px-3 py-1.5 text-xs text-neutral-300 hover:text-white rounded-lg transition-colors"
              >
                Cancelar
              </button>
              <button
                type="submit"
                form="config-form"
                className="px-4 py-1.5 text-xs font-bold text-neutral-950 bg-emerald-500 hover:bg-emerald-400 rounded-lg flex items-center gap-1.5 transition-colors"
              >
                <Save className="w-3.5 h-3.5" />
                Salvar Alterações
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
