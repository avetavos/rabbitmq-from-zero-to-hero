// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

import preact from '@astrojs/preact';

// https://astro.build/config
export default defineConfig({
  // GitHub Pages project site. Update `site` to your GitHub username and `base`
  // to your repo name if they differ.
  site: 'https://devops-tools.avetavos.com',
  base: '/rabbitmq',
  output: 'static',
  integrations: [starlight({
      title: 'RabbitMQ — From Zero to Hero',
      head: [
        { tag: 'script', attrs: { type: 'module', src: '/rabbitmq/enhance.js' } },
        { tag: 'link', attrs: { rel: 'manifest', href: '/rabbitmq/manifest.webmanifest' } },
        { tag: 'link', attrs: { rel: 'apple-touch-icon', href: '/rabbitmq/apple-touch-icon.png' } },
        { tag: 'link', attrs: { rel: 'icon', type: 'image/png', sizes: '192x192', href: '/rabbitmq/icon-192.png' } },
        { tag: 'meta', attrs: { name: 'theme-color', content: '#FF6600' } },
        { tag: 'meta', attrs: { name: 'mobile-web-app-capable', content: 'yes' } },
        { tag: 'meta', attrs: { name: 'apple-mobile-web-app-capable', content: 'yes' } },
        { tag: 'meta', attrs: { name: 'apple-mobile-web-app-status-bar-style', content: 'black-translucent' } },
        { tag: 'meta', attrs: { name: 'apple-mobile-web-app-title', content: "RabbitMQ" } },
        { tag: 'script', content: "if('serviceWorker' in navigator){window.addEventListener('load',function(){navigator.serviceWorker.register('/rabbitmq/sw.js',{scope:'/rabbitmq/'}).catch(function(){})})}" },
      ],
      defaultLocale: 'en',
      locales: {
        en: { label: 'English', lang: 'en' },
        th: { label: 'ไทย', lang: 'th' },
      },
      customCss: ['./src/styles/custom.css'],
      social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/avetavos/rabbitmq-from-zero-to-hero' }],
      sidebar: [
        { label: 'Messaging Foundations', items: [{ autogenerate: { directory: 'messaging-foundations' } }] },
        { label: 'Exchanges & Routing', items: [{ autogenerate: { directory: 'exchanges-and-routing' } }] },
        { label: 'Queues & Messages', items: [{ autogenerate: { directory: 'queues-and-messages' } }] },
        { label: 'Reliability & Delivery', items: [{ autogenerate: { directory: 'reliability' } }] },
        { label: 'Consumer Patterns', items: [{ autogenerate: { directory: 'consumer-patterns' } }] },
        { label: 'Operations & Scaling', items: [{ autogenerate: { directory: 'operations-and-scaling' } }] },
        { label: 'Patterns & Alternatives', items: [{ autogenerate: { directory: 'patterns-and-alternatives' } }] },
      ],
      }), preact()],
});
