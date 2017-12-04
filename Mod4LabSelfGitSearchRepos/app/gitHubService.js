angular.module('gitHubService', ['ngResource'])
  .factory('gitHub', [
    '$resource',
    function ($resource) {
      return $resource('https://api.github.com/:action/:org/:id?access_token=f2886b72afcfae52261350ba2a9d3e2b61ceaa4c',
        {
          action: '@action',
          org: '@org',
          id: '@id'
        },
        {
          getAll: {
            method: 'GET',
            isArray: true,
            params: { action: 'orgs', org: 'angular', id: 'repos' }
          },
          getDetail: {
            method: 'GET',
            params: { action: 'repos', org: 'angular' }
          },
        });
    }
  ]);