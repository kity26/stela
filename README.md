# STELA eSport

Site web officiel de l'équipe STELA eSport.

## 🚀 Déploiement GitHub Pages

Le site est configuré pour être déployé automatiquement sur GitHub Pages.

### Configuration requise

1. **Allez dans les paramètres du repository** : `Settings` → `Pages`
2. **Source** : Sélectionnez `GitHub Actions`
3. **Workflow** : Le déploiement se fait automatiquement via GitHub Actions

### Workflow de déploiement

Le site utilise un workflow GitHub Actions qui :
- Construit le projet avec Vite
- Déploie automatiquement sur GitHub Pages
- Utilise le bon base path `/stela-esport/`

### Développement local

```bash
# Installation des dépendances
pnpm install

# Développement
pnpm run dev

# Build de production
pnpm run build

# Prévisualisation
npx vite preview
```

### Problèmes résolus

- ✅ **Page blanche** : Correction des chemins d'assets SVG
- ✅ **Base path** : Configuration pour GitHub Pages
- ✅ **Imports ES6** : Remplacement des références SVG symbol par des imports
- ✅ **Build** : Optimisation pour le déploiement

### Liens importants

- **Site déployé** : https://kity26.github.io/stela/
- **Discord** : https://discord.gg/GzbdJRjZ3k
- **Repository** : https://github.com/kity26/stela

---

*Maintenu par l'équipe STELA eSport*
