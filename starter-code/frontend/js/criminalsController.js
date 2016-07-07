console.log("liked!!");

angular.module('criminalsApp')
  .controller('CriminalsController', CriminalsController);

CriminalsController.$inject = ['$http'];
function CriminalsController($http) {
  var self = this;
  self.all = [];
  this.getCriminals = getCriminals;
  this.newCriminal = {};
  this.addCriminal = addCriminal;
  this.deleteCriminal = deleteCriminal;
  this.editCriminal = editCriminal;


  function getCriminals() {
    $http.get('http://localhost:3000/criminals')
      .then(function(response){
        self.all = response.data.criminals;
      });
  }
  getCriminals();

   function addCriminal() {
    $http.post('http://localhost:3000/criminals', self.newCriminal)
      .then(function(response){
        self.all.push(self.newCriminal);
        $scope.criminal.newCriminal = {};
      });
  }

  function deleteCriminal(criminal) {
    $http.delete('http://localhost:3000/criminals/' + criminal._id)
      .then(function(response){
        var index = self.all.indexOf(criminal);
        self.all.splice(index, 1);
      });
  }

  function editCriminal(criminal) {
    $http.patch('http://localhost:3000/criminals/' + criminal._id)
      .then(function(response){
        var index = self.all.indexOf(criminal);
        console.log(index);
        // add another form where the changes can be made, then
        // submit those changes to the patch route and finally 
        // make the necesary changes in the angular array
      });
  }

} 


  