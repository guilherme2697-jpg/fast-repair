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
├── vercel.json         # Configuração de deploy (headers, cache)
├── .gitignore
├── README.md
└── images/
    ├── hero-desktop.webp / hero-mobile.webp
    ├── service-*.webp        # Imagens dos serviços
    ├── cost-of-stopping.webp / cta-building.webp / why-response.webp
    ├── favicon.svg / og-image.jpg
    └── parceiros/            # Logos dos clientes (faixa de confiança)
        ├── tokio-marine.png / sompo.png / ascensus.png
        ├── geely.webp
        └── nissan.svg / renault.svg
```

---

## 💻 Rodar localmente

Não há build. Basta abrir o arquivo `index.html` no navegador
(duplo clique) ou servir a pasta com qualquer servidor estático, por exemplo:

```bash
npx serve .
```

---

## 🚀 Deploy

### 1. Subir no GitHub

```bash
git add .
git commit -m "Fast Repair landing page"
git branch -M main
git remote add origin https://github.com/SEU-USUARIO/fast-repair.git
git push -u origin main
```

> Crie o repositório vazio antes em https://github.com/new (nome sugerido: `fast-repair`).

### 2. Publicar no Vercel

1. Acesse https://vercel.com e faça login com o GitHub.
2. **Add New → Project** e importe o repositório `fast-repair`.
3. Em *Framework Preset*, deixe **Other** (é site estático, sem build).
   - Build Command: *(vazio)*
   - Output Directory: *(vazio / raiz)*
4. Clique em **Deploy**. Pronto — o site fica no ar em uma URL `*.vercel.app`.

Cada `git push` na branch `main` publica automaticamente uma nova versão.

#### Domínio próprio (opcional)
No painel do projeto na Vercel: **Settings → Domains → Add** e siga as instruções de DNS.

---

## ✏️ Onde editar

| O quê | Onde |
|-------|------|
| Textos | `index.html` |
| Telefone / mensagem do WhatsApp | procurar por `wa.me/5541996813384` no `index.html` |
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
