# Fast Repair — Landing Page

Landing page institucional da **Fast Repair** — Manutenção Predial & Facilities em Curitiba e região.

Site **estático** em HTML, CSS e JavaScript puro. **Não precisa de build nem de Node.js.**
GSAP e ScrollTrigger são carregados por CDN.

---

## 📁 Estrutura

```
.
├── index.html          # Página única (todo o conteúdo)
├── style.css           # Estilos (variáveis de marca no topo)
├── script.js           # Menu mobile, FAQ, animações (GSAP)
├── .htaccess           # Config Apache/Hostinger (HTTPS, cache, gzip, segurança)
├── README.md
├── .gitignore
└── images/
    ├── hero-desktop.webp / hero-mobile.webp
    ├── service-*.webp                # Imagens dos serviços
    ├── service-jardinagem.jpg / service-administrativo.jpg
    ├── cost-of-stopping.webp / cta-building.webp / why-response.webp
    ├── favicon.svg / og-image.jpg
    └── parceiros/                    # Logos dos clientes (faixa de confiança)
        ├── nissan.svg / renault.svg
        └── geely.webp / ascensus.png
```

---

## 💻 Rodar localmente

Não há build. Basta abrir o arquivo `index.html` no navegador
(duplo clique) ou servir a pasta com qualquer servidor estático, por exemplo:

```bash
npx serve .
```

---

## 🚀 Deploy na Hostinger

O site é estático — basta enviar os arquivos para a pasta `public_html`.

1. Entre no **hPanel** da Hostinger → **Gerenciador de Arquivos**.
2. Abra a pasta **`public_html`** do seu domínio.
3. Envie **todo o conteúdo desta pasta** (com a estrutura preservada):
   `index.html`, `style.css`, `script.js`, `.htaccess` e a pasta `images/`.
   - O `index.html` precisa ficar na **raiz** de `public_html`.
   - Não precisa enviar `README.md`, `.gitignore` nem a pasta `.git`.
4. Acesse o domínio — o site estará no ar.

**Mais fácil:** compacte tudo em um `.zip` (com os arquivos na raiz do zip),
envie pelo Gerenciador de Arquivos dentro de `public_html` e use **Extrair**.

### Domínio e HTTPS
- Aponte o domínio `fastrepairfacilities.com.br` para a hospedagem (no hPanel, em Domínios).
- Ative o **SSL grátis** (hPanel → Segurança → SSL). O `.htaccess` já força HTTPS.

### Backup / versionamento
O código também fica no GitHub: https://github.com/guilherme2697-jpg/fast-repair
Para publicar uma alteração: edite os arquivos, faça `git push` (backup) **e** reenvie
os arquivos alterados para `public_html` na Hostinger.

---

## ✏️ Onde editar

| O quê | Onde |
|-------|------|
| Textos | `index.html` |
| Telefone / mensagem do WhatsApp | procurar por `wa.me/5541998667070` no `index.html` |
| Cores e tipografia | variáveis no topo do `style.css` (`:root`) |
| Logos dos clientes | pasta `images/parceiros/` (manter os mesmos nomes) |

### Atualização de cache
Os arquivos `style.css` e `script.js` são referenciados com `?v=NN` no `index.html`.
**Ao publicar uma alteração de CSS/JS, incremente esse número** (ex.: `?v=23` → `?v=24`)
para forçar os navegadores a baixarem a versão nova.

---

## ⚠️ Pendências para 100%
- Seção **Resultados** está com placeholders — trocar por depoimentos e fotos de obras **reais** (não usar material fabricado).
- Instalar o **pixel da Meta** e a **tag do Google** antes de rodar tráfego pago (colar os scripts antes do `</head>` no `index.html`).

---

Feito por **Boosty Media** — *We Boosty Your Brand*
