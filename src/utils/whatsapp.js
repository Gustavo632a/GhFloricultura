import { WHATSAPP_URL } from '../config';
export function createWhatsAppUrl(message) { return `${WHATSAPP_URL}?text=${encodeURIComponent(message)}`; }
export const contactMessage = 'Olá! Conheci a GH Floricultura pelo site e gostaria de saber quais plantas e flores estão disponíveis.';
