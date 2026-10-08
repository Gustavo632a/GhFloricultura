import { useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Products from './components/Products';
import About from './components/About';
import Place from './components/Place';
import ContactLocation from './components/ContactLocation';
import Footer from './components/Footer';
import FloatingWhatsApp from './components/FloatingWhatsApp';
import { SITE_URL, ADDRESS, hasAddress, PHONE } from './config';
export default function App(){useEffect(()=>{const observer=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('visible');observer.unobserve(entry.target);}}),{threshold:0.08});document.querySelectorAll('[data-reveal]').forEach(el=>{el.classList.add('reveal-ready');observer.observe(el);});const schema=document.createElement('script');schema.type='application/ld+json';schema.textContent=JSON.stringify({'@context':'https://schema.org','@type':'Florist',name:'GH Floricultura',telephone:PHONE,...(hasAddress?{address:ADDRESS}:{}),...(SITE_URL?{url:SITE_URL,image:new URL('/images/hero-orquidea.webp',SITE_URL).href}:{})});document.head.append(schema);let canonical;if(SITE_URL){canonical=document.createElement('link');canonical.rel='canonical';canonical.href=SITE_URL;document.head.append(canonical);}return()=>{observer.disconnect();schema.remove();canonical?.remove();};},[]);return <><a className="skip-link" href="#conteudo">Pular para o conteúdo</a><Header/><main id="conteudo"><Hero/><Products/><About/><Place/><ContactLocation/></main><Footer/><FloatingWhatsApp/></>;}
