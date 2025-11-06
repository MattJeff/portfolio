# Configuration EmailJS - Guide complet

## ✅ Étapes déjà complétées
- ✅ Package @emailjs/browser installé
- ✅ Code d'envoi d'emails implémenté
- ✅ Messages de succès/erreur ajoutés
- ✅ Fichier .env.local créé

## 🚀 Ce qu'il vous reste à faire

### 1. Créer votre compte EmailJS

1. Allez sur [https://www.emailjs.com/](https://www.emailjs.com/)
2. Cliquez sur **"Sign Up"** (en haut à droite)
3. Créez un compte avec votre email
4. Vérifiez votre email et activez votre compte

### 2. Ajouter un service email

Un service email permet à EmailJS de se connecter à votre boîte mail.

1. Une fois connecté, cliquez sur **"Email Services"** dans le menu de gauche
2. Cliquez sur **"Add New Service"**
3. Choisissez votre fournisseur d'email :
   - **Gmail** (recommandé) - Si vous avez un compte Gmail
   - Outlook
   - Yahoo
   - Autre

4. **Pour Gmail :**
   - Connectez-vous avec votre compte Google
   - Autorisez EmailJS à envoyer des emails
   - Donnez un nom à votre service (ex: "Portfolio Contact")
   - Cliquez sur **"Create Service"**

5. **Notez le Service ID** (ex: `service_abc1234`)

### 3. Créer les templates d'emails

Vous devez créer **2 templates** : un pour les devis et un pour les messages simples.

#### Template 1 : Demande de devis

1. Cliquez sur **"Email Templates"** dans le menu
2. Cliquez sur **"Create New Template"**
3. Configurez le template :

**Nom du template :** `Demande de devis`

**Subject (Objet) :**
```
Nouvelle demande de devis de {{from_name}}
```

**Content (Message) :**
```
Bonjour {{to_name}},

Vous avez reçu une nouvelle demande de devis !

━━━━━━━━━━━━━━━━━━━━━━━━━━━━
📋 INFORMATIONS CLIENT
━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Nom : {{from_name}}
Email : {{from_email}}
Budget : {{budget}}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━
📝 DESCRIPTION DU PROJET
━━━━━━━━━━━━━━━━━━━━━━━━━━━━

{{project_description}}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━
✨ FONCTIONNALITÉS SOUHAITÉES
━━━━━━━━━━━━━━━━━━━━━━━━━━━━

{{features}}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Vous pouvez répondre directement à cet email pour contacter le client.

Bonne journée !
```

**Settings (Paramètres) :**
- To Email: `mathis.higuinen@email.com` (ou votre email principal)
- From Name: `Portfolio - Devis`
- Reply To: `{{reply_to}}`

4. Cliquez sur **"Save"**
5. **Notez le Template ID** (ex: `template_xyz9876`)

#### Template 2 : Message de contact

1. Créez un nouveau template
2. Configurez :

**Nom du template :** `Message de contact`

**Subject (Objet) :**
```
Nouveau message de {{from_name}}
```

**Content (Message) :**
```
Bonjour {{to_name}},

Vous avez reçu un nouveau message via votre portfolio !

━━━━━━━━━━━━━━━━━━━━━━━━━━━━
👤 EXPÉDITEUR
━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Nom : {{from_name}}
Email : {{from_email}}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━
💬 MESSAGE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━

{{message}}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Vous pouvez répondre directement à cet email.

Cordialement,
Votre portfolio
```

**Settings :**
- To Email: `mathis.higuinen@email.com`
- From Name: `Portfolio - Contact`
- Reply To: `{{reply_to}}`

3. Cliquez sur **"Save"**
4. **Notez le Template ID** (ex: `template_abc5432`)

### 4. Obtenir votre Public Key

1. Cliquez sur **"Account"** dans le menu
2. Allez dans l'onglet **"General"**
3. Vous verrez votre **Public Key** (ex: `AbCdEfGhIjKlMnOp`)
4. **Copiez cette clé**

### 5. Configurer le fichier .env.local

Ouvrez le fichier `.env.local` à la racine du projet et remplacez les valeurs :

```env
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=VotrePubicKeyIci
NEXT_PUBLIC_EMAILJS_SERVICE_ID=VotreServiceIDIci
NEXT_PUBLIC_EMAILJS_TEMPLATE_QUOTE=VotreTemplateDevisIDIci
NEXT_PUBLIC_EMAILJS_TEMPLATE_CONTACT=VotreTemplateContactIDIci
```

**Exemple complet :**
```env
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=AbCdEfGhIjKlMnOp
NEXT_PUBLIC_EMAILJS_SERVICE_ID=service_abc1234
NEXT_PUBLIC_EMAILJS_TEMPLATE_QUOTE=template_xyz9876
NEXT_PUBLIC_EMAILJS_TEMPLATE_CONTACT=template_abc5432
```

### 6. Tester !

1. **Redémarrez votre serveur de développement :**
   ```bash
   npm run dev
   ```

2. Allez sur la page contact : `http://localhost:3000/contact`

3. Testez les deux formulaires

4. Vérifiez que vous recevez les emails dans votre boîte mail

## 🎉 C'est terminé !

Vous recevrez maintenant tous les messages et demandes de devis directement dans votre boîte mail !

## 📊 Limites du plan gratuit

- **200 emails/mois** - Largement suffisant pour un portfolio
- Si vous dépassez, vous pouvez passer au plan payant (à partir de 7$/mois pour 1000 emails)

## 🔒 Sécurité

- Le fichier `.env.local` est déjà dans `.gitignore`
- Vos clés ne seront PAS poussées sur GitHub
- C'est totalement sécurisé !

## ❓ Problèmes courants

### "EmailJS is not initialized"
→ Vérifiez que votre Public Key est bien dans `.env.local` et redémarrez le serveur

### Emails non reçus
→ Vérifiez vos spams
→ Vérifiez que l'email dans le template est correct
→ Vérifiez les logs dans le dashboard EmailJS

### Erreur "Invalid template ID"
→ Vérifiez que les Template IDs sont corrects dans `.env.local`

## 📞 Besoin d'aide ?

Consultez la documentation officielle : [https://www.emailjs.com/docs/](https://www.emailjs.com/docs/)
