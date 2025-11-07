# Portfolio de Mathis Higuinen

Portfolio professionnel moderne pour Mathis Higuinen, développeur iOS et Web.

## 🚀 Technologies utilisées

- **Framework**: Next.js 14 avec TypeScript
- **Styling**: TailwindCSS
- **Icons**: Lucide React
- **Font**: Inter (Google Fonts)
- **Animations**: CSS personnalisées avec Tailwind

## 🎨 Caractéristiques

- ✅ Design moderne en dark mode
- ✅ Entièrement responsive (mobile, tablette, desktop)
- ✅ Animations fluides et interactions
- ✅ Navigation smooth scroll
- ✅ SEO optimisé
- ✅ Performance optimisée avec Next.js

## 📦 Installation

1. Installer les dépendances :
```bash
npm install
```

2. Lancer le serveur de développement :
```bash
npm run dev
```

3. Ouvrir [http://localhost:3000](http://localhost:3000) dans votre navigateur

## 🏗 Structure du projet

```
portfolio/
├── src/
│   ├── app/
│   │   ├── layout.tsx          # Layout principal
│   │   ├── page.tsx            # Page d'accueil
│   │   ├── contact/
│   │   │   └── page.tsx        # Page contact & devis
│   │   └── projet/
│   │       └── [id]/
│   │           └── page.tsx    # Pages détail projets
│   ├── components/
│   │   ├── Header.tsx          # Navigation
│   │   ├── Footer.tsx          # Pied de page
│   │   ├── HeroSection.tsx     # Section hero
│   │   ├── AboutSection.tsx    # Section à propos
│   │   ├── SkillsSection.tsx   # Section compétences
│   │   ├── JourneySection.tsx  # Section parcours
│   │   └── ProjectsSection.tsx # Section projets
│   └── styles/
│       └── globals.css         # Styles globaux
├── public/                     # Assets statiques
├── package.json
├── tsconfig.json
├── tailwind.config.js
├── postcss.config.js
└── next.config.js
```

## 🌈 Palette de couleurs

- **Couleur principale (Orange)**: #FF5733
- **Fond sombre**: #0A0A0A, #111111, #1A1A1A
- **Texte**: Blanc et nuances de gris
- **Accents**: Dégradés colorés pour les cartes

## 📱 Pages

1. **Page d'accueil** (`/`)
   - Hero section
   - À propos
   - Compétences
   - Parcours (timeline)
   - Projets

2. **Page Contact & Devis** (`/contact`)
   - Formulaire de demande de devis
   - Formulaire de contact rapide
   - Lien Calendly pour planifier un appel

3. **Pages Projets** (`/projet/[id]`)
   - Learning English Extension (`/projet/learning-english`)
   - Romane App (`/projet/romane-app`)

## 🔧 Personnalisation

### Ajouter un nouveau projet

1. Éditer `src/components/ProjectsSection.tsx` pour ajouter le projet dans la galerie
2. Ajouter les détails dans `src/app/projet/[id]/page.tsx` dans l'objet `projectsData`

### Modifier les informations de contact

- Éditer les informations dans `src/components/Footer.tsx`
- Mettre à jour l'email et le téléphone dans `/src/app/contact/page.tsx`

### Ajouter des images

Placer les images dans le dossier `public/images/` et référencer avec `/images/nom-image.jpg`

## 📝 Build pour production

```bash
npm run build
npm run start
```

## 📧 Contact

- **Email**: mhiguinen235@gmail.com
- **Téléphone**: 07 58 76 07 38
- **Adresse**: 22 Allée des Asturies, 35000 Rennes

## 📄 Licence

© 2025 Mathis Higuinen. Tous droits réservés.
