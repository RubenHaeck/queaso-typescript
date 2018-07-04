(function(){
  System.config({
    paths: {
      'npm:':'node_modules/'
    },

    map: {
      'app':'app',
      'jquery': 'npm:jquery/dist/jquery.js'
    },

    packages: {
      defaultExtension: 'js',
      app : {
        defaultExtension: 'js',
        meta: {
          './*.js': {
            format: 'amd'
          }
        }
      },
      jquery : {
        defaultExtension: 'js',
        meta: {
          format: 'global'
        }
      }
    }
  })
})();
