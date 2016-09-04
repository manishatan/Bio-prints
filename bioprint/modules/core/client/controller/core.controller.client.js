'use strict'

angular
    .module('BioPrint')
    .controller('displayCtrl',function($scope,$http){
        $http.get("../../../../data.json")
            .then(function(res){
                $scope.prints = res.data;
            });

           $scope.traverse_it= function(obj){
               var result = [];
               function traverse(obj) {
                   //console.log(obj);
                   for (var prop in obj) {
                       if (typeof obj[prop] == 'object') {
                           // object
                           traverse(obj[prop]);
                       } else {
                           result.push(obj[prop]);

                       }
                   }
               }(traverse(obj));
               return result;
            }
          });