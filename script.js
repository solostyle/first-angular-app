var app = angular.module("egghead", []);

app.controller("AppCtrl", function () {
  var app = this;

  app.message = "Hello";
});

app.directive("myFirstDirective", function () {
  return function (scope, element, attrs) {
    element.text(scope.app.message + " " + attrs.message);
  }
});
