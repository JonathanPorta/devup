(function(){
  angular.module('devup').controller("ContainerDetail", function($scope, ProjectsService) {

    $scope.container = ProjectsService.currentContainer();

  });
})();
