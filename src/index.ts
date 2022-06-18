//🚀对象、类

import { hi } from './m1'

function sum(a:number,b:number):number {
  return a + b
}


//🚀对象
  const obj = {
    name:'Jimmy',
    age:18
  }

  obj.age = 20
  console.log(obj);


  //新版本的特殊类
  console.log(Promise)
  console.log(sum(123,456));
  console.log(hi)




console.log("——————————————————————————————————————");
//🚀类 ————————————————————————————————————————————————————————————————————————————————————————————————————————
    // public（默认）：公有，在当前类里面、子类、类外面都可以访问
    // protected：保护类型，在当前类里面、子类里面可以访问，在类外部没法访问
    // private：私有，在当前类里面可以访问，子类、类外部都没法访问 属性如果不加修饰符，默认就是公有（public）
    // static: 静态属性
    // readonly 只读属性,在当前类里面、类外面都可以访问,但是不能修改

    
  //🔥🔥方法一：类属性（以static 开头 ———— 静态属性 / 类属性 静态方法 / 类方法）
  class Person{
    static myName:string = 'jimmy';
    static age:number = 18;
    readonly adress:string = 'Shenzhen'; //🔥只读属性，不能修改！
    static sayHi():void{
      console.log(`hi,my name is ${this.myName}`);
    }
  } 
  Person.myName = 'Tom';
  console.log(Person.myName);
  Person.sayHi();



  //🔥🔥🔥方法二：实例属性, 实例方法，通过实际例去访问属性
  class Person2{
    myName:string = "jane";
    age:number = 19;
    sayHi():void{
      console.log(`hi,my name is ${this.myName}`);
    }
  } 
  const Jane = new Person2()
  console.log(Jane.myName,Jane.age);
  Jane.sayHi();



//🔥🔥🔥方法三：构造函数的方式创建类(避免创建出来的所有类的实例都一样) ————————————————————————————————————————————————————
class Dog{

  name:string //💥💥💥需要先定义属性！
  age:number //💥💥💥需要先定义属性！
  //👇构造函数内传参数，在对象 new 创建时就会自动执行, 所以 this 指向 new 的对象
  constructor(name:string,age:number){
    this.name = name //把 new 出来的对象的属性赋值给 this.name
    this.age = age //把 new 出来的对象的属性赋值给 this.age
  }
  talk():void{
    console.log('哈哈哈');
  }
}

const smartDog = new Dog('小白',2);



//🌟🌟🌟利用立即执行函数，避免变量冲突 ————————————————————————————————————————————————————
(function(){
  class Cat{
     name:string;
     constructor(name:string){
       this.name = name;
     }
  }
  const SmartCat = new Cat('Kim');
  console.log(SmartCat);
})();




//🔥🔥🔥 一个类继承另一个【抽象类+抽象方法】————————————————————————————————————————————————————
(function(){
  //抽象父类(不能用来创建为对象，其他的跟类一样)
  abstract class Animal{
     name:string;
     constructor(name:string){
       this.name = name;
     }
     abstract sayHi():void //抽象类不用定义方法
  }
  
  //子类
  class Dog extends Animal{
    age:number;
    constructor(name:string,age:number){
      super(name)   //🔥🔥super 表示调用父类的实例!!,这样才能初始化！
      this.age = age;
    }
    sayHi():void{//重写，覆盖父类的这个方法
      console.log("旺财")
    }
    run(){
      console.log('狗在跑');
    }
  }

  console.log(new Dog('饭团',2).run());

})();//🔥注意这个括号！！



