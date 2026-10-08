# GH Floricultura

Landing page em React, Vite, JavaScript e lucide-react.

```sh
npm install
npm run dev
```

Para gerar os arquivos de publicação: `npm run build`. Para visualizar esse build: `npm run preview`.

## Configuração

Edite `src/config.js` para alterar WhatsApp, telefone, endereço, link do Maps e URL pública. Enquanto o endereço não estiver preenchido, a página convida a consultá-lo pelo WhatsApp. O botão Como chegar também consulta o endereço pelo WhatsApp até receber um link válido do Maps.

`MAPS_EMBED_URL` aceita o endereço HTTPS de incorporação do Google Maps (`https://www.google.com/maps/embed?...`); não use um link curto nesse campo. Ao preencher, o mapa aparece automaticamente. Preencha `SITE_URL` com o domínio de produção para habilitar o canonical. Atualize também `og:image` no `index.html` com a URL absoluta da foto no domínio publicado.

As imagens reais recebidas estão preservadas em `public/images/originals`. A logo original está em `public/images/logo-gh-floricultura.png`, sem alteração. As versões WebP foram geradas sem filtros ou alterações de cor. Para regenerar: `npm run images`.

## Conteúdo e interações

- Categorias: `src/data/products.js`.
- Galeria: `src/data/gallery.js`.
- Menu mobile, links de contato com mensagens codificadas e galeria com lightbox.
- Lightbox: Escape fecha; setas navegam; foco retorna à fotografia selecionada.
- Animações respeitam a preferência por movimento reduzido.
- Fontes do Google Fonts com fallback local; nenhum formulário, rastreamento ou armazenamento de dados pessoais.

O projeto é estático e pode ser publicado a partir de `dist/`. Os originais permanecem no projeto e também são copiados pelo Vite; podem ser excluídos apenas do pacote de hospedagem, se necessário.
