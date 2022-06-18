//📦 属性的封装 
// public（默认）：公有，在当前类里面、子类、类外面都可以访问
// protected：保护类型，在当前类里面、子类里面可以访问，在类外部没法访问
// private：私有（不过可以暴露一些方法让外部可以访问），在当前类里面可以访问，子类、类外部都没法访问 属性如果不加修饰符，默认就是公有（public）
// static: 静态属性
// readonly 只读属性,在当前类里面、类外面都可以访问,但是不能修改
(function () {
    var Person = /** @class */ (function () {
        function Person(name, age) {
            this.name = name;
            this.age = age;
        }
        //🔥🔥🔥暴露一些方法让外部可以访问私有属性
        Person.prototype.getName = function () {
            return this.name;
        };
        //🔥🔥🔥暴露一些方法让外部可以修改私有属性
        Person.prototype.setName = function (value) {
            this.name = value;
        };
        return Person;
    }());
    //类外不可访问 private 属性
    var per = new Person('小明', 18); //敏感数据将会很危险，因为还能够随便修改过
    console.log(per.getName());
    per.setName('小红');
})();
