(function(){
  angular.module('devup').service('ProjectsService', function($q) {
    var self = this;
    self.allProjects = [
      {name: 'EveTrolling101.social'},
      {name: 'The Rusty Russian'},
      {name: 'My blog'}
    ];

    self.allContainers = [
      {name: 'Redis', description: 'It\'s a Redis container, duh.'},
      {name: 'MySQL', description: 'It\'s a MySQL container, duh.'},
      {name: 'PHP', description: 'It\'s a PHP container, duh.'},
      {name: 'NGINX', description: 'It\'s an NGINX container, duh.'}
    ];

    self.currentProject = {name: 'EveTrolling101.social'};
    self.currentContainer = {name: 'Redis', description: 'It\'s a Redis container, duh.'}

    return {
      allProjects: function(projects) {
        var projects = projects || false;
        if(projects){
          self.allProjects = projects;
        }
        else{
          return self.allProjects;
        }
      },
      currentProject: function(project) {
        var project = project || false;
        if(project){
          self.currentProject = project;
        }
        else{
          return self.currentProject;
        }
      },
      allContainers: function(containers) {
        var containers = containers || false;
        if(containers){
          self.allContainers = containers;
        }
        else{
          return self.allContainers;
        }
      },
      currentContainer: function(container) {
        var container = container || false;
        if(container){
          self.currentContainer = container;
        }
        else{
          return self.currentContainer;
        }
      }
    };
  });
})();
