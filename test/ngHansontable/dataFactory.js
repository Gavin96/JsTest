function MainCtrl(dataFactory) {
  // You can pass options by attributes..
  this.rowHeaders = true;
  this.colHeaders = true;
  this.db = {
    items: dataFactory.generateArrayOfArrays(50, 10)
  };
  // ..or as one object
  this.settings = {
    contextMenu: [
      'row_above', 'row_below', 'remove_row'
    ]
  };
}

MainCtrl.$inject = ['dataFactory'];

angular
  .module('app', ['ngHandsontable'])
  .controller('MainCtrl', MainCtrl);