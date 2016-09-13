angular.module('app')
  .factory('WebSocketService', function($rootScope){
    var ws;
    return {
      init: function(){
        ws = new WebSocket(WS_URL);
        ws.onmessage = function(message){
          console.log(message);
          try{
            var data = JSON.parse(message.data);
            $rootScope.$broadcast(data.model + '.' + data.verb, data);
          }
          catch(err){
          
          }
        }
        ws.opopen = function(){
          console.log('success');
        };
        ws.onerror = function(){
          console.log('error');
        }
        
      }
    };
  })
  .run(function(WebSocketService){
    WebSocketService.init();
  });
