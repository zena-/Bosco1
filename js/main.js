var app = angular.module('PhotoGallery', []);

app.service("galleryService", function($http, $q){
    var deferred = $q.defer();
    $http.get("http://api.thebos.co/v1/clients/events/assets/4381").then(function (data){
        deferred.resolve(data);
    });

    this.getPhotos = function () {
        return deferred.promise;
    }
})

.controller('GalleryController', function ($scope, galleryService) {
    var promise = galleryService.getPhotos();
    promise.then(function (data) {
        $scope.pics = data.data;
        console.log($scope.pics);

        $scope.pho = $scope.pics.assets;
        console.log($scope.pho);
        // console.log($scope.pho[0]);

        // angular.forEach($scope.pho, function(value, key){
        //     // var aa = value;
        //     if(value.active=="true"){
        //        console.log("yes");
        //     }
        // });
    })
    
});

// $('.pop').popover(function(){
//     $('img').trigger('click');
// });