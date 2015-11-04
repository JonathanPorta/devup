(function(){
  angular
    .module('devup', ['ngMaterial', 'ngRoute'])
    .config(function($mdThemingProvider, $routeProvider){
      // Add router here if we need one
    });

    // ViewControllers
    require("./controllers/project-overview.js")
    require("./controllers/containers-list.js")
    require("./controllers/container-detail.js")

    // Services
    require("./services/projects.js")

})();
