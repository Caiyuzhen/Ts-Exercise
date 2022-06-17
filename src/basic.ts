console.log('hello')
//https://esnail.github.io/ts-gitbook/book/chapter2/readme.html

//🌟可以给变量、函数的行参/返回值、数组内的对象做类型的声明
//🔥Ts 基础数据类型 ——————————————————————————————————————————————————————————
  // boolean（布尔类型）
      let flag:boolean = true
      flag = false

      //用 | 赋值多个字面量或者多个类型 ———— 联合类型
      let lk: '1' | '2'
      let ll: boolean | string


  // number（数字类型）
      let num:number = 123
      num = 456



  // string（字符串类型）
      let str:string = 'this is ts'
      str = 'test'



  // array（数组类型）
      let arrABC:string[] = ['12', '23']
      arrABC = ['45', '56']

      let arrCCC:Array<number> //表示数字类型的数组
      arrCCC = [1, 2, 3]



  // tuple（元组类型,属于数组的一种,就是【固定长度】跟【类型】的数组,比如下面这个就是【固定】只有三个内容，【三种类型】）
      let tupleArr:[number, string, boolean] = [12, '34', true]



  // enum（枚举类型）
      enum statusCode {
        success,
        fail,
        pending
      }

      //相当于从 statusCode 列举d出 success
      let res:statusCode = statusCode.success;
      console.log(res); // 0，如果标识符没有赋值，它的值就是下标，默认从 0 开始


      enum statusCode {
        success1 = 2,
        fail2,
        pending3
      }

      let res1:statusCode = statusCode.success;
      console.log(res1) // 2，指定的值

      let res3:statusCode = statusCode.fail;
      console.log(res1) // 3，若没指定，从指定的往后开始



      
      //枚举的场景，比如先定义一个枚举数组，然后再定义一个数据去使用枚举数组内的值
      enum Gender {
        Male = 0,
        Female = 1
      }

      let ii:{
        name:string,
        gender:Gender
      }
      
      ii = {
        name:'Wang', 
        gender:Gender.Male
      }

      console.log(ii.gender === Gender.Female)



  // any（任意类型, 表示可以指定任何类型的值。一般用于声明 dom 节点）🌟⚠️注意：把一个 any 的类型赋值给其他变量，其他变量也会变成 any！！
      let numSth:any  //相当于关闭了类型检测，跟 js 一样了，不建议使用
      numSth = 996
      // num = numSth //把这样会把 num 污染成 any 类型的变量！


      let numXX:any = 123;
      numXX = 'str';
      numXX = true;

      let boxEl:any = document.getElementById('box'); // 声明一个 dom 节点
      boxEl.style.color = 'pink';



  // null 和 undefined 类型
      let numZZ:undefined;
      console.log(numZZ); // 输出：undefined 正确


      let numYY:number | undefined; // | 表示或者
      console.log(numYY); // 正确
      numYY = 123;
      console.log(numYY); // 正确


      let numFF:null;
      numFF = null;


      //一个变量可能是 number 类型，可能是 null，可能是 undefined
      let numQQ:number | null | undefined;
      numQQ = 1234;


      
  //unknown 跟 any 类似，好处是不会污染其他变量，🌟比如把一个 any 的类型赋值给其他变量，其他变量也会变成 any，unknown 就不会
      let et: unknown
      et = 10
      et = 'hello'
      et = true

      //👇类型断言（告诉编译器 supe 就是字符串类型）
      let supe:string
      supe = et as string
      supe = <string>et

  



  // void 类型(typescript 中的 void 表示没有任何类型，一般用于定义函数的时候，🔥🔥不会return 出返回值的情况)
      function fn ():void { // 正确的写法
        console.log(fn);
      }
      fn();
      
      // function fn ():undefined { // 错误的写法
      //   console.log('fn);
      // }
      // fn();



  // never 类型(没有值，不会返回结果，一般用于报错)
    //声明式函数
    function fn22():never {
      throw new Error('错误') //一定得有个 throw 抛出错误
    }


    (function test(){alert('你好')})(),//立即执行函数

    (function(){alert('你好')})()//立即执行你们函数,!为取反


    //函数表达式
      let aee:never;  // aee = 123; // 错误的写法
      
      aee = (() => { // 正确的写法
        throw new Error('错误');
      })()



  // object 对象类型
      // let obj:object //(因为一切都是对象，所以一般不会这么写)
      // obj = {name: 'Wang', age: 25};

      //🌟🌟一般是去限制对象内包含有哪些属性, 🌟🌟 ? 为可选项，可有此属性，没有也不必报错
      let bc: {name:string, age?:number}

      bc = {
        name: 'Wang',
        age:18
      }

      //🌟🌟🌟（常用）还可以这么写，必须有字符串的 name ，🌟🌟剩余的也可以传但不做限制,用 any 的方式！！[propName:string] 表示任意字符串的属性名,:any 表示任意类型的值
      let zz:{name:string,[propName:string]:any}
      zz = {name:'zen', age:18}





//🔥Ts 函数声明 ——————————————————————————————————————————————————————————

//有返回值的函数
  function fn1 ():number { // number 是函数返回值类型，没有返回值为 void
    return 123;
  }

  fn1();



// 没有返回值的匿名函数
  let fn2 = function ():void {
    console.log(456);
  }
  fn2();



// 设置函数的类型声明(🌟🌟表示希望 kk 这个函数内有【两个参数】，并且都是 number 类型)
  let kk: (ak:number, bk:number) => number //返回值是 number
  kk = function(ak:number,bk:number):number{
    return ak + bk
  }





// 传参
  function fn3 (name:string, age:number):string {
    return `姓名：${name}，年龄：${age}`;
  }
  fn3('张三', 25);



//ts 中实参和行参必须一样，如果不一样就需要配置可选参数, 可选参数必须配置到参数的最后面
  function getInfo (name:string, age?:number):string { // age 为可选参数,可以设置默认参数
    if (age) {
        return `姓名：${name}，年龄：${age}`;
    } else {
        return `姓名：${name}，年龄：保密`;
    }
  }
  console.log(getInfo('张三', 23));
  console.log(getInfo('李四'));



//扩展运算符
  function sum (a:number, b:number, ...nums:number[]):number {
    let sum = a + b;
    nums.forEach((n) => {
        sum += n;
    });
    return sum;
  }
  console.log(sum(1, 2, 3, 4, 5, 6)); // 21




//🔥ts 定义类 ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
  class Person {
    name:string; // 属性，前面省略了 public 关键词
    
    constructor (name:string) { // 构造函数，实例化类的时候触发的方法
      this.name = name;
    }
    
    run ():void {
      console.log(`${this.name}在运动`);
    }
    
    getName ():string {
      return this.name;
    }
    
    setName (name:string):void {
      this.name = name;
    }
  }


  let po = new Person('李四');
  po.run();
  po.setName('王五');
  console.log(po.getName());


//类里面的修饰符, Typescript 里面定义属性的时候给我们提供了三种修饰符：
    // public：公有，在当前类里面、子类、类外面都可以访问
    // protected：保护类型，在当前类里面、子类里面可以访问，在类外部没法访问
    // private：私有，在当前类里面可以访问，子类、类外部都没法访问 属性如果不加修饰符，默认就是公有（public）

    //👇 public 公有，在当前类里面、子类、类外面都可以访问: ——————————————————————————————————
    class Person1 {
      public name:string; // 公有
    
      constructor (name:string) {
        this.name = name;
      }
    
      run ():void {
        console.log(`${this.name}在运动`); // 在类里能访问
      }
    }
    let p2 = new Person1('李四');
    p2.run();
    console.log(p2.name); // 在类外面能访问
    
    class Child22 extends Person1 {
      constructor (name:string) {
        super(name);
      }
    
      run ():void {
        console.log(`${this.name}在运动--子类`); // 子类能访问
      }
    }
    let c11 = new Child22('周六');
    c11.run(); // 周六在运动--子类
    console.log(c11.name); // 在类外面能访问





    //👇 protected 保护类型，在当前类里面、子类里面可以访问，在类外部没法访问：——————————————————————————————————
    class Person3 {
      protected name:string; // 保护
    
      constructor (name:string) {
        this.name = name;
      }
    
      run ():void {
        console.log(`${this.name}在运动`); // 在类里能访问
      }
    }
    let p3 = new Person3('李四');
    p3.run();
    // console.log(p.name); // 报错，在类外面不能访问
    
    class Child2 extends Person3 {
      constructor (name:string) {
        super(name);
      }
    
      run ():void {
        console.log(`${this.name}在运动--子类`); // 子类能访问
      }
    }
    let c2 = new Child2('周六');
    c2.run(); // 周六在运动--子类; // 周六在运动--子类
    // console.log(c.name); // 报错，在类外面能访问





    //👇 private 私有属性,在当前类里面可以访问，子类、类外部都没法访问：——————————————————————————————————
    class Person5 {
      private name:string; // 私有
    
      constructor (name:string) {
        this.name = name;
      }
    
      run ():void {
        console.log(`${this.name}在运动`); // 在类里能访问
      }
    }
    let p66 = new Person5('李四');
    p66.run();
    // console.log(p.name); // 报错，在类外面不能访问
    
    class Child8 extends Person5 {
      constructor (name:string) {
        super(name);
      }
    
      run ():void {
        // console.log(`${this.name}在运动--子类`); // 报错，子类能访问
      }
    }
    let c77 = new Child8('周六');
    c77.run(); // 周六在运动--子类
    // console.log(c.name); // 报错，在类外面能访问




//多态: 父类定义一个方法不去实现，让继承它的子类去实现，每一个子类有不同的表现
  class Animal {
    name:string;

    constructor (name:string) {
      this.name = name;
    }

    eat () { // 🔥🔥具体吃什么,不知道。具体吃什么，由继承它的子类去实现，每一个子类的表现不一样
      console.log('吃的方法');
    }
  }


  //多态一
  class Dog extends Animal {
    constructor (name:string) {
      super(name);
    }
    eat () { // 子类实现父类的 eat 方法
      console.log(`${this.name}喜欢吃骨头`);
    }
  }

  //多态二
  class Cat extends Animal {
    constructor (name:string) {
      super(name);
    }
    eat () { // 子类实现父类的 eat 方法
      console.log(`${this.name}喜欢吃老鼠`);
    }
  }


//抽象类:
  //它是提供其他类继承的基类，不能直接被实例化
  //用abstract关键字定义抽象类和抽象方法，抽象类中的抽象方法不包含具体实现并且必须在派生类（子类）中实现。
  //abstract 抽象方法只能放在抽象类里面。
  //抽象类和抽象方法用来定义标准。比如：标准：Animal2 这个类要求它的子类必须包含eat 方法


// 抽象类，标准
  abstract class Animal2 {
    name:string;

    constructor (name:string) {
      this.name = name;
    }

    abstract eat ():any; //🔥🔥 抽象方法不包含具体实现并且必须在派生类中实现。
  }
  // let animal2 = new Animal2(); // 错误，抽奖类不能被实例化



  class Dog2 extends Animal2 {
    constructor (name:string) {
      super(name);
    }

    eat () { // 抽象类的子类必须实现抽象类里面的抽象方法
      console.log(`${this.name}喜欢吃骨头`);
    }
  }
  let dog = new Dog2('小黑');
  dog.eat();



//🔥泛型函数(可以支持不特定的数据类型, 并且还能保证类型检查， 场景比如 API 的复用)

//👇指定返回值的类型
  function getData<T> (val:T):T { // 👇泛型函数，<T> 指定了这个函数的类型！
    return val;
  }
  getData<number>(124);
  getData<string>('abc');
  // getData<number>('abc'); // 错误


//👇不指定返回值的类型
  function getData2<T> (val:T):any {
    return val + '***';
  }
  getData2<number>(124); // 参数必须是数字
  getData2<string>('abc');


//比如有个最小堆算法，需要同时支持返回数字和字符串 a-z 两种类型。通过类的泛型来实现
  class minClass {
    list:number[] = [];

    add (val:number):void {
      this.list.push(val);
    }

    min ():number {
      let minNum:number = this.list[0];
      for(let i = 0; i < this.list.length; i++) {
        if(minNum > this.list[i]){
            minNum = this.list[i];
        }
      }
      return minNum;
    }
  }
  let m = new minClass();
  m.add(3);
  m.add(2);
  m.add(23);
  console.log(m.min()); // 2



//泛型接口
//函数类型接口
  // interface configFn{
  //     (val1:string, val2:string):string;
  // }

  // let setData222:configFn = function (value11:string, value22:string):string { // 参数名可以和接口中的不一致，但是参数类型必须一致
  //     return value11 + value22;
  // }

  // setData222('1', '2');




//泛型接口实现方式1：
  interface configFn {
    <T>(val:T):T;
  }

  let getData33:configFn = function<T> (value:T):T {
    return value;
  }

  getData33<string>('abc');
  getData33<number>(123);



//泛型接口实现方式2：
  interface configFn333<T> {
    (val:T):T;
  }
  let getData333:configFn333<string> = function<T> (value:T):T {
    return value;
  }
  getData333('abc');
  // getData333(123); // 错误


  let aa:boolean = false;
  