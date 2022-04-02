export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '6248c70d35b22522a19adb9f',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-ei2b2zvk',
                  apiId: 'a5266fd5-fc10-4f50-b90d-ce645501d56b'
                },
                {
                  buildHookId: '6248c70ebbf5b11aa05545b9',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-m3pt653n',
                  apiId: 'd0e32d39-ff2b-4689-a3ac-7727f44715bb'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/hungryram/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-m3pt653n.netlify.app',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}
