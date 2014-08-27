var app = angular.module("phoneApp", []);
app.controller("AppCtrl", function ($scope) {
  $scope.callHome = function () {
    alert("Called home!");
  };
});

app.directive("phone", function () {
  return {
    scope: {
      dial: "&"
    },
    template: '<div class="button" ng-click="dial()">Call home</div>'
  }
});
