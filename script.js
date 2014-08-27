var app = angular.module("phoneApp", []);
app.controller("AppCtrl", function ($scope) {
  $scope.callHome = function (speech) {
    alert("Called home and said \"" + speech + "\"");
  };
});

app.directive("phone", function () {
  return {
    scope: {
      dial: "&"
    },
    template: '<input type="text" ng-model="value">' +
	'<div class="button" ng-click="dial({speech:value})">Call home</div>'
  }
});
