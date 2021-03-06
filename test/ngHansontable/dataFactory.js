function MainCtrl(dataFactory) {
  this.minSpareRows = 1;
  this.rowHeaders = false;

  this.db = {items: dataFactory.generateArrayOfObjects()};
  this.settings = {colHeaders: true, contextMenu: ['row_above', 'row_below', 'remove_row']};
}

MainCtrl.$inject = ['dataFactory'];

angular
  .module('app', ['ngHandsontable'])
  .controller('MainCtrl', MainCtrl);