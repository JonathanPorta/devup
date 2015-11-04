(function(){
  angular.module('devup').controller("ProjectOverview", function($scope, ProjectsService) {

    $scope.project = {name: 'EveTrolling101.social'};//ProjectsService.currentProject();
    $scope.allProjects = ProjectsService.allProjects();

    $scope.setProject = function(){
      console.log("setProject() called!", arguments);
    };

  });
})();
