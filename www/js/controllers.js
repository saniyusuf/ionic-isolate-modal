angular
  .module('starter.controllers', [])

  .controller('DashCtrl', function($scope, IsolateModal) {
    $scope.openModal = function () {
      IsolateModal.open();
    };

  })

  .controller('ChatsCtrl', function($scope, Chats, IsolateModal) {
    $scope.openModal = function () {
      IsolateModal.open();
    };

    $scope.chats = Chats.all();
    $scope.remove = function(chat) {
      Chats.remove(chat);
    };
  })

  .controller('ChatDetailCtrl', function($scope, $stateParams, Chats, IsolateModal) {
    $scope.openModal = function () {
      IsolateModal.open();
    };

    $scope.chat = Chats.get($stateParams.chatId);
  })

  .controller('AccountCtrl', function($scope, IsolateModal) {

    $scope.openModal = function () {
      IsolateModal.open();
    };

    $scope.settings = {
      enableFriends: true
    };
  });
