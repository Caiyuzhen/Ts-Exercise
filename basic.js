var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
console.log('hello');
//https://esnail.github.io/ts-gitbook/book/chapter2/readme.html
//🔥Ts 基础数据类型 ——————————————————————————————————————————————————————————
// boolean（布尔类型）
// let flag:boolean = true
// flag = false
// number（数字类型）
// let num:number = 123;
// num = 456
// string（字符串类型）
// let str:string = 'this is ts'
// str = 'test'
// array（数组类型）
// let arr:string[] = ['12', '23']
// arr = ['45', '56']
// tuple（元组类型,属于数组的一种,后续实例的类型得一致）
//let tupleArr:[number, string, boolean] = [12, '34', true]
// enum（枚举类型）
// enum statusCode {
//   success,
//   fail,
//   pending
// }
// let res:statusCode = statusCode.success;
// console.log(res); // 0，如果标识符没有赋值，它的值就是下标，默认从 0 开始
// enum statusCode {
//   success = 2,
//   fail,
//   pending
// }
// let res1:statusCode = statusCode.success;
// console.log(res1) // 2，指定的值
// let res3:statusCode = statusCode.fail;
// console.log(res1) // 3，若没指定，从指定的往后开始
// any（任意类型, 表示可以指定任何类型的值。一般用于声明 dom 节点）
//let num:any = 123;
// num = 'str';
// num = true;
// let boxEl:any = document.getElementById('box'); // 声明一个 dom 节点
// boxEl.style.color = 'pink';
// null 和 undefined 类型
// let num:undefined;
// console.log(num); // 输出：undefined 正确
// let num:number | undefined; // | 表示或者
// console.log(num); // 正确
// num = 123;
// console.log(num); // 正确
// let num:null;
// num = null;
// 一个变量可能是 number 类型，可能是 null，可能是 undefined
// let num:number | null | undefined;
// num = 1234;
// void 类型(typescript 中的 void 表示没有任何类型，一般用于定义方法的时候方法没有返回值)
// function fn ():void { // 正确的写法
//   console.log('fn);
// }
// fn();
// function fn ():undefined { // 错误的写法
//   console.log('fn);
// }
// fn();
// never 类型
// let a:never;
// a = 123; // 错误的写法
// a = (() => { // 正确的写法
//   throw new Error('错误');
// })()
// object 对象类型
// let obj:object;
// obj = {name: 'Wang', age: 25};
//🔥Ts 函数声明 ——————————————————————————————————————————————————————————
function fn1() {
    return 123;
}
fn1();
// 匿名函数
var fn2 = function () {
    console.log(456);
};
fn2();
// 传参
function fn3(name, age) {
    return "\u59D3\u540D\uFF1A".concat(name, "\uFF0C\u5E74\u9F84\uFF1A").concat(age);
}
fn3('张三', 25);
//ts 中实参和行参必须一样，如果不一样就需要配置可选参数, 可选参数必须配置到参数的最后面
function getInfo(name, age) {
    if (age) {
        return "\u59D3\u540D\uFF1A".concat(name, "\uFF0C\u5E74\u9F84\uFF1A").concat(age);
    }
    else {
        return "\u59D3\u540D\uFF1A".concat(name, "\uFF0C\u5E74\u9F84\uFF1A\u4FDD\u5BC6");
    }
}
console.log(getInfo('张三', 23));
console.log(getInfo('李四'));
//扩展运算符
function sum(a, b) {
    var nums = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        nums[_i - 2] = arguments[_i];
    }
    var sum = a + b;
    nums.forEach(function (n) {
        sum += n;
    });
    return sum;
}
console.log(sum(1, 2, 3, 4, 5, 6)); // 21
//🔥ts 定义类
var Person = /** @class */ (function () {
    function Person(name) {
        this.name = name;
    }
    Person.prototype.run = function () {
        console.log("".concat(this.name, "\u5728\u8FD0\u52A8"));
    };
    Person.prototype.getName = function () {
        return this.name;
    };
    Person.prototype.setName = function (name) {
        this.name = name;
    };
    return Person;
}());
var p = new Person('李四');
p.run();
p.setName('王五');
console.log(p.getName());
//类里面的修饰符, Typescript 里面定义属性的时候给我们提供了三种修饰符：
// public：公有，在当前类里面、子类、类外面都可以访问
// protected：保护类型，在当前类里面、子类里面可以访问，在类外部没法访问
// private：私有，在当前类里面可以访问，子类、类外部都没法访问 属性如果不加修饰符，默认就是公有（public）
//👇 public 公有，在当前类里面、子类、类外面都可以访问: ——————————————————————————————————
var Person1 = /** @class */ (function () {
    function Person1(name) {
        this.name = name;
    }
    Person1.prototype.run = function () {
        console.log("".concat(this.name, "\u5728\u8FD0\u52A8")); // 在类里能访问
    };
    return Person1;
}());
var p2 = new Person1('李四');
p2.run();
console.log(p2.name); // 在类外面能访问
var Child22 = /** @class */ (function (_super) {
    __extends(Child22, _super);
    function Child22(name) {
        return _super.call(this, name) || this;
    }
    Child22.prototype.run = function () {
        console.log("".concat(this.name, "\u5728\u8FD0\u52A8--\u5B50\u7C7B")); // 子类能访问
    };
    return Child22;
}(Person1));
var c11 = new Child22('周六');
c11.run(); // 周六在运动--子类
console.log(c11.name); // 在类外面能访问
//👇 protected 保护类型，在当前类里面、子类里面可以访问，在类外部没法访问：——————————————————————————————————
var Person3 = /** @class */ (function () {
    function Person3(name) {
        this.name = name;
    }
    Person3.prototype.run = function () {
        console.log("".concat(this.name, "\u5728\u8FD0\u52A8")); // 在类里能访问
    };
    return Person3;
}());
var p3 = new Person3('李四');
p3.run();
// console.log(p.name); // 报错，在类外面不能访问
var Child2 = /** @class */ (function (_super) {
    __extends(Child2, _super);
    function Child2(name) {
        return _super.call(this, name) || this;
    }
    Child2.prototype.run = function () {
        console.log("".concat(this.name, "\u5728\u8FD0\u52A8--\u5B50\u7C7B")); // 子类能访问
    };
    return Child2;
}(Person3));
var c2 = new Child2('周六');
c2.run(); // 周六在运动--子类; // 周六在运动--子类
// console.log(c.name); // 报错，在类外面能访问
//👇 private 私有,，在当前类里面可以访问，子类、类外部都没法访问：——————————————————————————————————
var Person5 = /** @class */ (function () {
    function Person5(name) {
        this.name = name;
    }
    Person5.prototype.run = function () {
        console.log("".concat(this.name, "\u5728\u8FD0\u52A8")); // 在类里能访问
    };
    return Person5;
}());
var p66 = new Person5('李四');
p66.run();
// console.log(p.name); // 报错，在类外面不能访问
var Child8 = /** @class */ (function (_super) {
    __extends(Child8, _super);
    function Child8(name) {
        return _super.call(this, name) || this;
    }
    Child8.prototype.run = function () {
        // console.log(`${this.name}在运动--子类`); // 报错，子类能访问
    };
    return Child8;
}(Person5));
var c77 = new Child8('周六');
c77.run(); // 周六在运动--子类
// console.log(c.name); // 报错，在类外面能访问
//多态: 父类定义一个方法不去实现，让继承它的子类去实现，每一个子类有不同的表现
var Animal = /** @class */ (function () {
    function Animal(name) {
        this.name = name;
    }
    Animal.prototype.eat = function () {
        console.log('吃的方法');
    };
    return Animal;
}());
var Dog = /** @class */ (function (_super) {
    __extends(Dog, _super);
    function Dog(name) {
        return _super.call(this, name) || this;
    }
    Dog.prototype.eat = function () {
        console.log("".concat(this.name, "\u559C\u6B22\u5403\u9AA8\u5934"));
    };
    return Dog;
}(Animal));
var Cat = /** @class */ (function (_super) {
    __extends(Cat, _super);
    function Cat(name) {
        return _super.call(this, name) || this;
    }
    Cat.prototype.eat = function () {
        console.log("".concat(this.name, "\u559C\u6B22\u5403\u8001\u9F20"));
    };
    return Cat;
}(Animal));
//抽象类:
//它是提供其他类继承的基类，不能直接被实例化
//用abstract关键字定义抽象类和抽象方法，抽象类中的抽象方法不包含具体实现并且必须在派生类（子类）中实现。
//abstract 抽象方法只能放在抽象类里面。
//抽象类和抽象方法用来定义标准。比如：标准：Animal2 这个类要求它的子类必须包含eat 方法
// 抽象类，标准
var Animal2 = /** @class */ (function () {
    function Animal2(name) {
        this.name = name;
    }
    return Animal2;
}());
// let animal2 = new Animal2(); // 错误，抽奖类不能被实例化
var Dog2 = /** @class */ (function (_super) {
    __extends(Dog2, _super);
    function Dog2(name) {
        return _super.call(this, name) || this;
    }
    Dog2.prototype.eat = function () {
        console.log("".concat(this.name, "\u559C\u6B22\u5403\u9AA8\u5934"));
    };
    return Dog2;
}(Animal2));
var dog = new Dog2('小黑');
dog.eat();
//🔥泛型函数(可以支持不特定的数据类型, 并且还能保证类型检查， 场景比如 API 的复用)
//👇指定返回值的类型
function getData(val) {
    return val;
}
getData(124);
getData('abc');
// getData<number>('abc'); // 错误
//👇不指定返回值的类型
function getData2(val) {
    return val + '***';
}
getData2(124); // 参数必须是数字
getData2('abc');
//比如有个最小堆算法，需要同时支持返回数字和字符串 a-z 两种类型。通过类的泛型来实现
var minClass = /** @class */ (function () {
    function minClass() {
        this.list = [];
    }
    minClass.prototype.add = function (val) {
        this.list.push(val);
    };
    minClass.prototype.min = function () {
        var minNum = this.list[0];
        for (var i = 0; i < this.list.length; i++) {
            if (minNum > this.list[i]) {
                minNum = this.list[i];
            }
        }
        return minNum;
    };
    return minClass;
}());
var m = new minClass();
m.add(3);
m.add(2);
m.add(23);
console.log(m.min()); // 2
var getData33 = function (value) {
    return value;
};
getData33('abc');
getData33(123);
var getData333 = function (value) {
    return value;
};
getData333('abc');
// getData333(123); // 错误
