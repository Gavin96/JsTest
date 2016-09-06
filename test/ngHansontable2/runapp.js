function MainCtrl(dataFactory) {
  var items = dataFactory.generateArrayOfObjects();
  
  this.data = items;
  this.columns = [
    {
      data: 'id',
      title: 'ID',
      readOnly: true
    },
    {
      data: 'price',
      title: 'Price',
      readOnly: false
    }
  ];
}

MainCtrl.$inject = ['dataFactory'];

angular
  .module('app', ['ngHandsontable'])
  .controller('MainCtrl', MainCtrl);