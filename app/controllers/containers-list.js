(function(){
  angular.module('devup').controller("ContainersList", function($scope, ProjectsService) {
    console.log("ContainersList", arguments, $scope.containers);
    $scope.containers = ProjectsService.allContainers();
    console.log("ContainersList", arguments, $scope.containers);

    $scope.setContainer = function(container){
      console.log("Set a new container!", arguments);
      ProjectsService.currentContainer(container);
    };

  });
})();
