# 🚀 Guide de Déploiement

Votre portfolio est maintenant sur GitHub : **https://github.com/MattJeff/portfolio**

## Options d'hébergement (Gratuites)

### 1️⃣ Vercel (Recommandé - Le plus simple)

Vercel est créé par les créateurs de Next.js. C'est la meilleure option !

#### Étapes :

1. **Allez sur [https://vercel.com](https://vercel.com)**
2. Cliquez sur **"Sign Up"** et connectez-vous avec votre compte GitHub
3. Cliquez sur **"Add New Project"**
4. Sélectionnez votre repository **"portfolio"**
5. Vercel détectera automatiquement que c'est un projet Next.js
6. **IMPORTANT : Configurer les variables d'environnement**
   - Cliquez sur **"Environment Variables"**
   - Ajoutez ces 4 variables :
     ```
     NEXT_PUBLIC_EMAILJS_PUBLIC_KEY = CRARgnTdiDCeXUgew
     NEXT_PUBLIC_EMAILJS_SERVICE_ID = service_i9zxlc7
     NEXT_PUBLIC_EMAILJS_TEMPLATE_QUOTE = template_rgyq9fd
     NEXT_PUBLIC_EMAILJS_TEMPLATE_CONTACT = template_rgyq9fd
     ```
7. Cliquez sur **"Deploy"**
8. Attendez 2-3 minutes ⏳
9. **C'est en ligne !** 🎉

Vous obtiendrez une URL type : `https://portfolio-xxx.vercel.app`

#### Domaine personnalisé (optionnel)

Si vous avez un nom de domaine :
1. Allez dans **Settings** > **Domains**
2. Ajoutez votre domaine
3. Suivez les instructions

---

### 2️⃣ Netlify (Alternative)

#### Étapes :

1. Allez sur [https://www.netlify.com](https://www.netlify.com)
2. Connectez-vous avec GitHub
3. Cliquez sur **"Add new site"** > **"Import an existing project"**
4. Sélectionnez votre repo **portfolio**
5. Configuration :
   - Build command: `npm run build`
   - Publish directory: `.next`
6. **Variables d'environnement** (dans "Site settings" > "Environment variables") :
   ```
   NEXT_PUBLIC_EMAILJS_PUBLIC_KEY = CRARgnTdiDCeXUgew
   NEXT_PUBLIC_EMAILJS_SERVICE_ID = service_i9zxlc7
   NEXT_PUBLIC_EMAILJS_TEMPLATE_QUOTE = template_rgyq9fd
   NEXT_PUBLIC_EMAILJS_TEMPLATE_CONTACT = template_rgyq9fd
   ```
7. Cliquez sur **"Deploy"**

---

### 3️⃣ GitHub Pages (Plus complexe, pas recommandé pour Next.js)

GitHub Pages ne supporte pas nativement Next.js. Il faut exporter en statique.

---

## 🔄 Mises à jour du site

Après le déploiement initial, chaque fois que vous faites un **git push**, votre site sera **automatiquement redéployé** !

```bash
# Faire des modifications dans votre code
git add .
git commit -m "Update: description de vos changements"
git push

# 🎉 Vercel/Netlify détecte le push et redéploie automatiquement !
```

---

## ⚙️ Variables d'environnement à configurer

**IMPORTANT :** N'oubliez pas d'ajouter ces variables dans votre plateforme de déploiement :

| Variable | Valeur |
|----------|--------|
| `NEXT_PUBLIC_EMAILJS_PUBLIC_KEY` | `CRARgnTdiDCeXUgew` |
| `NEXT_PUBLIC_EMAILJS_SERVICE_ID` | `service_i9zxlc7` |
| `NEXT_PUBLIC_EMAILJS_TEMPLATE_QUOTE` | `template_rgyq9fd` |
| `NEXT_PUBLIC_EMAILJS_TEMPLATE_CONTACT` | `template_rgyq9fd` |

Sans ces variables, les formulaires de contact ne fonctionneront pas ! ⚠️

---

## 🔍 Vérifications après déploiement

1. ✅ Le site s'affiche correctement
2. ✅ La navigation fonctionne (scroll vers les sections)
3. ✅ Le formulaire de devis fonctionne
4. ✅ Le formulaire de contact fonctionne
5. ✅ Le lien Calendly fonctionne
6. ✅ Responsive sur mobile

---

## 🎨 Domaine personnalisé

### Si vous voulez un nom de domaine personnalisé :

1. Achetez un domaine sur :
   - [Namecheap](https://www.namecheap.com)
   - [Google Domains](https://domains.google)
   - [OVH](https://www.ovh.com)

2. Configurez-le dans Vercel/Netlify (ils ont des guides)

**Coût :** ~10-15€/an pour un .com ou .fr

---

## 📊 Analytics (optionnel)

Pour suivre les visites :

### Vercel Analytics (gratuit)
1. Allez dans votre projet Vercel
2. Activez "Analytics" dans les settings

### Google Analytics
1. Créez un compte GA4
2. Ajoutez le script de tracking dans `src/app/layout.tsx`

---

## 🆘 Problèmes courants

### "Build failed"
→ Vérifiez que `npm run build` fonctionne en local

### "Formulaires ne marchent pas"
→ Vérifiez que les variables d'environnement sont bien configurées

### "Page 404"
→ Vérifiez que vous utilisez bien Vercel (recommandé pour Next.js)

---

## 🎉 Félicitations !

Votre portfolio est maintenant en ligne et professionnel !

N'oubliez pas de :
- ✅ Tester tous les formulaires
- ✅ Partager le lien sur LinkedIn
- ✅ Mettre le lien dans votre CV
- ✅ Vérifier régulièrement vos emails (demandes de devis)

Bon succès ! 🚀
