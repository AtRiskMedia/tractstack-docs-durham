import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      title: 'TractStack Docs',
      pagefind: false,
      favicon: 'favicon.ico',
	  components:{
		TableOfContents: '/src/components/TableOfContents.astro'
	  },
      logo: {
        src: '/src/assets/tractstack-banner-logo.png',
        replacesTitle: true,
      },
      defaultLocale: 'en',
      locales: {
        en: {
          label: 'English',
        },
        fr: {
          label: 'Français',
          lang: 'fr',
        },
      },
	  social: {
		github: 'https://github.com/AtRiskMedia',
		twitter: 'https://twitter.com/AtRiskMedia',
		discord:'',
	  },
      customCss: [
        '@fontsource/outfit',
        './src/styles/custom.css',
      ],
      sidebar: [
        {
          label: 'Start here!',
          items: [
            { label: 'Getting Started', link: '/start-here/getting-started', badge: { text: 'Important!', variant: 'success'} },
			// { label: '', link: '/' },
          ]
        },
        {
          label: 'Core Concepts',
          items: [
			// { label: '', link: '/' },
          ]
        },
        {
          label: 'Tutorials',
          items: [
            // { label: '', link: '/' },
          ]
        },
        {
          label: 'Basics',
          items: [
            // { label: '', link: '/' },
          ]
        },
      ]
    }),
  ]
});
