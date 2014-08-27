var app = angular.module("choreApp", []);
app.controller("choreCtrl", function ($scope) {
  $scope.logChore = function (loggedChore) {
    alert(loggedChore + " is done!");
  };
});

app.directive("kid", function () {
  return {
    restrict: "E",
    scope: {
      done: "&"
    },
    template: '<input type="text" ng-model="inputChore">' +
      '{{inputChore}}' +
      '<div class="button" ng-click="done({loggedChore:inputChore})">I\'m done!</div>'
  }
});

