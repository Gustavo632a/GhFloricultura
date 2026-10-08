import { MessageCircle } from 'lucide-react';
import { createWhatsAppUrl } from '../utils/whatsapp';
export default function FloatingWhatsApp(){return <a className="floating-whatsapp" href={createWhatsAppUrl('Olá! Conheci a GH Floricultura pelo site e gostaria de conhecer as opções disponíveis.')} target="_blank" rel="noopener noreferrer" aria-label="Falar com a gente pelo WhatsApp"><MessageCircle size={22}/><span className="desktop-label">Falar com a gente</span><span className="mobile-label">WhatsApp</span></a>;}
