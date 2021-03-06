export default {
  widgets: [
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
                  buildHookId: '604349a99a8050f2f8d21b71',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-6yny4qk6',
                  apiId: 'ec07315f-35ae-4619-a52e-b7a970e18cbc'
                },
                {
                  buildHookId: '604349aa4813f7e16260fd70',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-czm4m4j6',
                  apiId: 'de7ab55f-3d2d-4ee9-a4d2-0a7f90b05b3d'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/mvanherwijnen/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-czm4m4j6.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
