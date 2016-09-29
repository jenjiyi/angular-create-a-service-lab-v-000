function MathService() {
  this.sum = function (numarr) {
    total = numarr.reduce((a,b) => a+b, 0);
    return total;
  }
}

angular
  .module('app')
  .service('MathService', MathService);
