var app = angular.module("egghead", []);

app.directive("myFirstDirective", function () {
  return function () {
    console.log("Hello");
  }
});
