import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  integrations: [starlight({
    title: 'TractStack Docs',
    pagefind: false,
    favicon: 'favicon.ico',
    components: {
      TableOfContents: '/src/components/TableOfContents.astro'
    },
    logo: {
      src: '/src/assets/tractstack-banner-logo.png',
      replacesTitle: true
    },
    locales: {
      root: {
        label: 'English',
        lang: 'en',
      },
    },
    social: {
      github: 'https://github.com/AtRiskMedia',
      twitter: 'https://twitter.com/AtRiskMedia',
      discord: 'https://twitter.com/AtRiskMedia'
    },
    customCss: ['@fontsource/outfit', './src/styles/custom.css'],
    sidebar: [{ // Start Here Tab
      label: 'Start here!',
      items: [{
        label: 'Getting Started',
        link: '/start-here/getting-started',
        badge: {
          text: 'Important!',
          variant: 'success'
        },
      },
      {
        label: 'Installation',
        link: '/start-here/installation',
      },
      {
        label: 'Price Points',
        link: '/start-here/price-points',
      }
      ]
    }, { // Core Concepts Tab
      label: 'Core Concepts',
      items: [
        {
          label: 'Why Tractstack',
          link: '/core-concepts/why-tractstack',
        },
      ]
    }, { // Tutorials Tab
      label: 'Tutorials',
      items: [
        {
          label: 'Publish your Website',
          link: '/tutorials/publish',
        },
        {
          label: 'Edit Panes',
          link: '/tutorials/edit-pane',
        }
      ]
    }, { // Basics Tab
      label: 'Basics',
      items: [
        {
          label: 'Dashboard',
          link: '/basics/dashboard',
        },
        {
          label: 'Story Keep',
          link: '/basics/story-keep',
        },
        {
          label: 'Knowledge Graph',
          link: '/basics/knowledge-graph',
        },
        {
          label: 'Story Fragments',
          link: '/basics/story-fragments',
        },
        {
          label: 'Panes',
          link: '/basics/panes',
        },
        {
          label: 'Resources',
          link: '/basics/resources',
        }
      ]
    }, { // Internal Reference Tab
      label: 'Internal Reference',
      items: [
        { label: 'Content Highlighting', link: '/internal-reference/content-highlighting' },
        { label: 'Tab Component', link: '/internal-reference/tab-component' },
        { label: 'Card Component', link: '/internal-reference/card-component' },
      ]
    },
    { // Integrations Tab
      label: 'Integrations',
      items: [
        {
          label: 'Neo4j',
          link: '/integrations/neo4j',
        },
        {
          label: 'Shopify',
          link: '/integrations/shopify'
        }
      ]
    },
  ]
  }), tailwind()]
});