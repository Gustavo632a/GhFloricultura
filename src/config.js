export const WHATSAPP_URL = 'https://wa.me/558393433040';
export const PHONE = '(83) 9343-3040';
export const ADDRESS = 'ADICIONAR ENDEREÇO REAL AQUI';
export const MAPS_URL = 'ADICIONAR LINK GOOGLE MAPS';
// Informe a URL pública após publicar. O canonical e o Schema serão atualizados.
export const SITE_URL = '';
// Link HTTPS de incorporação do Google Maps (opcional).
export const MAPS_EMBED_URL = '';
export const hasAddress = !ADDRESS.startsWith('ADICIONAR');
export const hasMaps = /^https:\/\/(www\.)?(google\.com\/maps|maps\.google\.com|maps\.app\.goo\.gl)\//.test(MAPS_URL);
