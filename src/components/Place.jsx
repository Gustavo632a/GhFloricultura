import { useState } from 'react';
import { Maximize2 } from 'lucide-react';
import { gallery } from '../data/gallery';
import { Photo, SectionTitle } from './Shared';
import ImageLightbox from './ImageLightbox';
export default function Place(){const [selected,setSelected]=useState(null);return <section id="conheca" className="section gallery-section"><div className="container"><SectionTitle eyebrow="CONHEÇA DE PERTO" title="Natureza de perto.">Conheça algumas das plantas que fazem parte do nosso dia a dia.</SectionTitle><div className="gallery-grid">{gallery.map((p,i)=><button className={`gallery-item gallery-item-${i}`} key={p.image} onClick={()=>setSelected(i)} aria-label={`Ampliar foto: ${p.alt}`} data-reveal><Photo name={p.image} alt={p.alt}/><span><Maximize2 size={18}/></span></button>)}</div></div>{selected!==null&&<ImageLightbox items={gallery} selected={selected} onChange={setSelected} onClose={()=>setSelected(null)}/>}</section>;}
