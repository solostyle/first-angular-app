var app = angular.module("drinkApp", []);
app.controller("AppCtrl", function ($scope) {
});

app.directive("drink", function () {
  return {
    template: '<div>{{flavor}}</div>',
    link: function (scope) {
      scope.flavor = "cherry";
    }
  }
});
