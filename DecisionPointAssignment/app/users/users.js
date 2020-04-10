App.controller('userController', ['$scope','$http',
    function ($scope,$http) {

      $scope.userName=[]
      $scope.hidecross=true;

      $http.get("https://jsonplaceholder.typicode.com/users").then(function (data) {
        $scope.userList=data.data
        for(var i=0;i<$scope.userList.length;i++){
          $scope.userName.push($scope.userList[i].name)
        }
      })
       

      $scope.complete = function(string){  

            $scope.hidethis = false; 
            $scope.uid=''

            if(string.length>0)
            $scope.hidecross=false;

            if(Number(string[0])){
              $scope.uid=string
            }              
          
            
            // $scope.uid=string
             
            var output = [];  
            angular.forEach($scope.userName, function(userName){  
                if(userName.toLowerCase().indexOf(string.toLowerCase()) >= 0)  
                {  
                      output.push(userName);  
                }  
            });  
            $scope.filterName = output;  
      }  
      $scope.fillTextbox = function(user){  
        
            $scope.uname = user;  
            $scope.hidethis = true;  

            for(var j=0;j<$scope.userList.length;j++){
              if($scope.userList[j].name==user){
                $scope.uid=user
            }
          }

      }  
      $scope.clearSearch=function(){
        $scope.hidethis = true; 
        $scope.hidecross=true;
        $scope.uname = "";  
        $scope.uid=''
      }

    }]);