
var listaCompra = [];


angular.module('ListaCompra', [])
.controller('ListaCompraController', ListaCompraController);

ListaCompraController.$inject = ['$scope'];
function ListaCompraController($scope){
    
    $scope.listaCompra = listaCompra; 

    $scope.add = function(){
        var nuevoItem = {
            nombre:   $scope.nuevoItemNombre,
            cantidad: $scope.nuevoItemCantidad
        };

        $scope.listaCompra.push(nuevoItem);

    }

    $scope.print = function(){
        print();
    }

    $scope.delete = function(){
        listaCompra.pop(listaCompra.length);
    }

}

