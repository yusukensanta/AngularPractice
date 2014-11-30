(function() {
    var app = angular.module('myTodo',[]);

    app.controller('TodoController', function () {
        this.todoInput="";
        this.todoList = [{todoText: 'Clean House', done:false}];
        this.todoAdd  = function () {
            if (this.todoInput != "") {
                this.todoList.push({todoText:this.todoInput, done:false});
            }
            this.todoInput = "";
        };

        this.remove = function () {
            var oldList   = this.todoList;
            this.todoList = [];
            var newList   = [];
            angular.forEach(oldList, function(x) {
                if (!x.done) newList.push(x);
            });
            this.todoList = newList;
        };
    });
})();
