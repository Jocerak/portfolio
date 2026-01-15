# Guide de Déploiement sur GitHub Pages

## 📋 Prérequis

- Un compte GitHub
- Git installé sur votre machine
- Node.js et pnpm

## 🚀 Étapes de Déploiement

### 1. Créer un dépôt GitHub

1. Allez sur [GitHub](https://github.com/new)
2. Créez un nouveau dépôt nommé `portfolio-devops`
3. Laissez les autres paramètres par défaut
4. Cliquez sur "Create repository"

### 2. Configurer Git localement

```bash
cd portfolio-devops

# Ajouter l'URL du dépôt distant
git remote add origin https://github.com/VOTRE_USERNAME/portfolio-devops.git

# Renommer la branche par défaut en 'main' si nécessaire
git branch -M main

# Ajouter tous les fichiers
git add .

# Créer un commit initial
git commit -m "Initial commit: Portfolio DevOps professionnel"

# Pousser vers GitHub
git push -u origin main
```

### 3. Configurer GitHub Pages

1. Allez sur votre dépôt GitHub
2. Cliquez sur **Settings** (Paramètres)
3. Dans le menu de gauche, cliquez sur **Pages**
4. Sous "Build and deployment", sélectionnez :
   - **Source** : "Deploy from a branch"
   - **Branch** : `main`
   - **Folder** : `/ (root)`
5. Cliquez sur **Save**

### 4. Attendre le déploiement

GitHub Pages va construire et déployer votre site automatiquement. Cela peut prendre quelques minutes.

Vous verrez une notification verte indiquant que votre site est prêt.

### 5. Accéder à votre portfolio

Votre portfolio sera accessible à :
```
https://VOTRE_USERNAME.github.io/portfolio-devops
```

## 🔄 Mises à Jour Futures

Pour mettre à jour votre portfolio :

```bash
# Faire vos modifications
# ...

# Ajouter les changements
git add .

# Créer un commit
git commit -m "Description de vos changements"

# Pousser vers GitHub
git push origin main
```

GitHub Pages va automatiquement redéployer votre site avec les nouveaux changements.

## 📝 Personnalisation

### Ajouter vos liens sociaux

Modifiez le fichier `client/src/pages/Home.tsx` et remplacez les URLs des liens GitHub et LinkedIn :

```tsx
<a href="https://github.com/votre-username" className="...">
  <Github size={28} />
</a>
<a href="https://linkedin.com/in/votre-profil" className="...">
  <Linkedin size={28} />
</a>
```

### Modifier les informations de contact

Mettez à jour l'email et le téléphone dans la section contact du fichier `Home.tsx`.

### Ajouter un domaine personnalisé

1. Achetez un domaine (GoDaddy, Namecheap, etc.)
2. Dans GitHub Pages Settings, allez à "Custom domain"
3. Entrez votre domaine
4. Configurez les DNS records selon les instructions GitHub

## 🆘 Dépannage

### Le site n'apparaît pas après 10 minutes

- Vérifiez que la branche `main` est sélectionnée dans Settings → Pages
- Vérifiez que le dossier `/` est sélectionné
- Regardez les logs de déploiement dans l'onglet "Actions"

### Les images ne s'affichent pas

- Vérifiez que les images sont dans `client/public/images/`
- Vérifiez les chemins d'accès dans le code (doivent commencer par `/images/`)

### Le style ne s'applique pas correctement

- Videz le cache du navigateur (Ctrl+Shift+Delete)
- Attendez quelques minutes que le cache CDN se mette à jour

## 📚 Ressources

- [GitHub Pages Documentation](https://docs.github.com/en/pages)
- [Vite Build Guide](https://vitejs.dev/guide/build.html)
- [React Documentation](https://react.dev)

---

**Bon déploiement ! 🎉**
