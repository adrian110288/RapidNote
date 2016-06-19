angular.module('RapidNote').controller('ListController', function($scope) {

    $scope.note = "";
    $scope.list = readFromLocalStorage();

    $scope.$watch('list', function(newVal) {
        updateBadge(newVal.length);
    }, true);

    $scope.addToList = function() {

        if($scope.note !=  "") {
            $scope.list.push($scope.note);
            $scope.note = "";
            addToLocalStorage();
        }
    }

    $scope.removeNote = function(noteAtIndex) {
        $scope.list.splice(noteAtIndex, 1);
        addToLocalStorage();
    }

    function addToLocalStorage() {
        var listObj = {
            list: $scope.list
        };

        localStorage.setItem('cachedList', JSON.stringify(listObj));
    }

    function readFromLocalStorage() {
        var cached = localStorage.getItem('cachedList');
        return (cached == null || cached == "")? [] : JSON.parse(cached).list;
    }

    function updateBadge(count) {
        chrome.browserAction.setBadgeText({
            text: count + ""
        });

        chrome.browserAction.setBadgeBackgroundColor({
            color: "#ff0000"
        });
    }
});
