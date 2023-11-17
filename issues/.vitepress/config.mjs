import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Blog",
  base: '/Press/',
  description: "A blog",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Portfolio', link: '/portfolio/Big_data_EmpiricalStudy' },
      { text: 'About Me', link: '/AboutMe/intro' },
    ],

    sidebar: {
      "/": {
        text: 'Main',
        items: [
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' }
        ]
      },
	  "/portfolio/": {
        text: 'Portfolio',
        items: [
			{
				text: "Publications",
				items: [
					{ text: 'Big data Empirical Study', link: '/portfolio/Big_data_EmpiricalStudy' },
					{ text: 'Multi-Grained Topic Analysis', link: '/portfolio/Multi-topic-analysis' },
				]
			},
			{
				text: "Interactives",
				items: [
					{ text: 'Convergence News', link: '/portfolio/Convergence-news-COVID19' },
					{ text: 'Scene Roaming', link: '/portfolio/Scene-Roaming-Clound' },
				]
			},
		]
      },
	  "/AboutMe/": {
        text: '',
        items: []
      }
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/Bluedyson' }
    ]
  }
})
