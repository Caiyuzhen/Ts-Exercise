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
//🌟可以给变量、函数的行参/返回值、数组内的对象做类型的声明
//🔥Ts 基础数据类型 ——————————————————————————————————————————————————————————
// boolean（布尔类型）
var flag = true;
flag = false;
//用 | 赋值多个字面量或者多个类型 ———— 联合类型
var lk;
var ll;
// number（数字类型）
var num = 123;
num = 456;
// string（字符串类型）
var str = 'this is ts';
str = 'test';
// array（数组类型）
var arrABC = ['12', '23'];
arrABC = ['45', '56'];
var arrCCC; //表示数字类型的数组
arrCCC = [1, 2, 3];
// tuple（元组类型,属于数组的一种,就是【固定长度】跟【类型】的数组,比如下面这个就是【固定】只有三个内容，【三种类型】）
var tupleArr = [12, '34', true];
// enum（枚举类型）
var statusCode;
(function (statusCode) {
    statusCode[statusCode["success"] = 0] = "success";
    statusCode[statusCode["fail"] = 1] = "fail";
    statusCode[statusCode["pending"] = 2] = "pending";
})(statusCode || (statusCode = {}));
//相当于从 statusCode 列举d出 success
var res = statusCode.success;
console.log(res); // 0，如果标识符没有赋值，它的值就是下标，默认从 0 开始
(function (statusCode) {
    statusCode[statusCode["success1"] = 2] = "success1";
    statusCode[statusCode["fail2"] = 3] = "fail2";
    statusCode[statusCode["pending3"] = 4] = "pending3";
})(statusCode || (statusCode = {}));
var res1 = statusCode.success;
console.log(res1); // 2，指定的值
var res3 = statusCode.fail;
console.log(res1); // 3，若没指定，从指定的往后开始
//枚举的场景，比如先定义一个枚举数组，然后再定义一个数据去使用枚举数组内的值
var Gender;
(function (Gender) {
    Gender[Gender["Male"] = 0] = "Male";
    Gender[Gender["Female"] = 1] = "Female";
})(Gender || (Gender = {}));
var ii;
ii = {
    name: 'Wang',
    gender: Gender.Male
};
console.log(ii.gender === Gender.Female);
// any（任意类型, 表示可以指定任何类型的值。一般用于声明 dom 节点）🌟⚠️注意：把一个 any 的类型赋值给其他变量，其他变量也会变成 any！！
var numSth; //相当于关闭了类型检测，跟 js 一样了，不建议使用
numSth = 996;
// num = numSth //把这样会把 num 污染成 any 类型的变量！
var numXX = 123;
numXX = 'str';
numXX = true;
var boxEl = document.getElementById('box'); // 声明一个 dom 节点
boxEl.style.color = 'pink';
// null 和 undefined 类型
var numZZ;
console.log(numZZ); // 输出：undefined 正确
var numYY; // | 表示或者
console.log(numYY); // 正确
numYY = 123;
console.log(numYY); // 正确
var numFF;
numFF = null;
//一个变量可能是 number 类型，可能是 null，可能是 undefined
var numQQ;
numQQ = 1234;
//unknown 跟 any 类似，好处是不会污染其他变量，🌟比如把一个 any 的类型赋值给其他变量，其他变量也会变成 any，unknown 就不会
var et;
et = 10;
et = 'hello';
et = true;
//👇类型断言（告诉编译器 supe 就是字符串类型）
var supe;
supe = et;
supe = et;
// void 类型(typescript 中的 void 表示没有任何类型，一般用于定义函数的时候，🔥🔥不会return 出返回值的情况)
function fn() {
    console.log(fn);
}
fn();
// function fn ():undefined { // 错误的写法
//   console.log('fn);
// }
// fn();
// never 类型(没有值，不会返回结果，一般用于报错)
//声明式函数
function fn22() {
    throw new Error('错误'); //一定得有个 throw 抛出错误
}
(function test() { alert('你好'); })(), //立即执行函数
    (function () { alert('你好'); })(); //立即执行你们函数,!为取反
//函数表达式
var aee; // aee = 123; // 错误的写法
aee = (function () {
    throw new Error('错误');
})();
// object 对象类型
// let obj:object //(因为一切都是对象，所以一般不会这么写)
// obj = {name: 'Wang', age: 25};
//🌟🌟一般是去限制对象内包含有哪些属性, 🌟🌟 ? 为可选项，可有此属性，没有也不必报错
var bc;
bc = {
    name: 'Wang',
    age: 18
};
//🌟🌟🌟（常用）还可以这么写，必须有字符串的 name ，🌟🌟剩余的也可以传但不做限制,用 any 的方式！！[propName:string] 表示任意字符串的属性名,:any 表示任意类型的值
var zz;
zz = { name: 'zen', age: 18 };
//🔥Ts 函数声明 ——————————————————————————————————————————————————————————
//有返回值的函数
function fn1() {
    return 123;
}
fn1();
// 没有返回值的匿名函数
var fn2 = function () {
    console.log(456);
};
fn2();
// 设置函数的类型声明(🌟🌟表示希望 kk 这个函数内有【两个参数】，并且都是 number 类型)
var kk; //返回值是 number
kk = function (ak, bk) {
    return ak + bk;
};
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
//多态一
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
//多态二
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
var aa = true;
