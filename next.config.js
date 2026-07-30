/** @type {import('next').NextConfig} */
const nextConfig = {
  // Optimisations de base
  reactStrictMode: true,

  // Export statique : le site n'a aucune route serveur, il est servi par GitHub Pages
  output: 'export',

  // Optimisation des images
  images: {
    // ponytail: obligatoire avec output: 'export' — pas de serveur pour redimensionner.
    // Si un jour tu reviens sur un hébergeur avec runtime Node, retire cette ligne.
    unoptimized: true,
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 31536000, // 1 an
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },

  // Compression
  compress: true,

  // Optimisation du build
  poweredByHeader: false, // Supprimer le header X-Powered-By pour la sécurité

  // Trailing slash pour le SEO
  trailingSlash: false,

  // ponytail: headers() et redirects() supprimés — ignorés silencieusement par
  // output: 'export' (GitHub Pages ne sert que des fichiers, aucun middleware).
  // Les 3 redirects SEO (/projects/:id, /about, /skills) sont perdus ; ils
  // pointaient vers des URLs jamais publiées. Si tu veux les récupérer, il faut
  // un hébergeur avec règles de redirection (Netlify/Cloudflare) ou des pages
  // stub avec <meta http-equiv="refresh">.
}

module.exports = nextConfig
