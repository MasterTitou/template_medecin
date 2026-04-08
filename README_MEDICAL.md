# Template Médecin Liège (Astro + Tailwind)

Ce projet est un modèle de site web premium, responsive et moderne pour un médecin généraliste basé à Liège, Belgique.

## Caractéristiques

- **Astro 4.0+** : Performance ultra-rapide avec chargement minimal de JavaScript.
- **Tailwind CSS** : Design personnalisé avec une palette de couleurs belge (Teal & Orange Liégeois).
- **Design Premium** : Effets de glass-morphism, animations subtiles et typographie soignée (Inter).
- **SEO Optimisé** : Balises Meta, Open Graph et structure sémantique.
- **Dark Mode** : Support natif du mode sombre (via la préférence système).
- **Pages incluses** : Accueil, À propos, Services, Contact (avec carte Liège).

## Installation

1. Installez les dépendances :
   ```bash
   npm install
   ```

2. Lancez le serveur de développement :
   ```bash
   npm run dev
   ```

3. Construisez pour la production :
   ```bash
   npm run build
   ```

## Structure du projet

- `src/layouts/Layout.astro` : Le layout principal avec Header et Footer.
- `src/components/` : Composants réutilisables (Header, Footer, Card).
- `src/pages/` : Les différentes pages du site.
- `src/styles/global.css` : Styles globaux et utilitaires personnalisés.
- `public/hero-doctor.png` : Image générée pour la section Hero.

## Personnalisation des couleurs

Les couleurs sont définies dans `tailwind.config.cjs` :
- `belgian-teal` : #006A71
- `liege-orange` : #E67300

---
Développé avec ❤️ pour la communauté liégeoise.
