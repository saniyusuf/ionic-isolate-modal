(function () {
  'use strict';

  angular
    .module('starter.services', [])

    .factory('IsolateModal', IsolateModal)

    .factory('Chats', function() {
      // Might use a resource here that returns a JSON array

      // Some fake testing data
      var chats = [{
        id: 0,
        name: 'Ben Sparrow',
        lastText: 'You on your way?',
        face: 'img/ben.png'
      }, {
        id: 1,
        name: 'Max Lynx',
        lastText: 'Hey, it\'s me',
        face: 'img/max.png'
      }, {
        id: 2,
        name: 'Adam Bradleyson',
        lastText: 'I should buy a boat',
        face: 'img/adam.jpg'
      }, {
        id: 3,
        name: 'Perry Governor',
        lastText: 'Look at my mukluks!',
        face: 'img/perry.png'
      }, {
        id: 4,
        name: 'Mike Harrington',
        lastText: 'This is wicked good ice cream.',
        face: 'img/mike.png'
      }];

      return {
        all: function() {
          return chats;
        },
        remove: function(chat) {
          chats.splice(chats.indexOf(chat), 1);
        },
        get: function(chatId) {
          for (var i = 0; i < chats.length; i++) {
            if (chats[i].id === parseInt(chatId)) {
              return chats[i];
            }
          }
          return null;
        }
      };
    });

  IsolateModal.$inject = ['$rootScope', '$ionicModal'];
  function IsolateModal($rootScope, $ionicModal) {
    var modalsIsolateScope = $rootScope.$new();
    var isolateModal = {
      open: open
    };

    function open() {
      $ionicModal.fromTemplateUrl(
        'templates/isolate-modal.html',
        {
          scope: modalsIsolateScope
        }
      )
        .then(function (modalInstance) {
          modalsIsolateScope.close = function () {
            closeAndRemove(modalInstance);
          };
          return modalInstance.show();
      });

    }

    function closeAndRemove(modalInstance) {
      return modalInstance.hide()
        .then(function () {
          return modalInstance.remove();
        });
    }

    return isolateModal;
  }


})();

