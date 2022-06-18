
//📦 属性的封装 
  // public（默认）：公有，在当前类里面、子类、类外面都可以访问
  // protected：保护类型，在当前类里面、🔥子类里面可以访问，在类外部没法访问
  // private：独有（不过可以暴露一些方法让外部可以访问），在当前类里面可以访问，🔥子类、类外部都没法访问 属性如果不加修饰符，默认就是公有（public）
  // static: 静态属性
  // readonly 只读属性,在当前类里面、类外面都可以访问,但是不能修改


(function(){
  class Person{
    private name:string;
    private age:number;

  constructor(name:string, age:number){ //构造函数内可访问 private 属性
      this.name = name;
      this.age = age;
   }

//————————————————————————————————————————————————————————————————

   //🔥🔥🔥暴露一些方法让外部可以访问私有属性
   getAge(){
     return this.age;
   }
   //🔥🔥🔥暴露一些方法让外部可以修改私有属性
   setAge(value:number){
    if(value >= 0){
      this.age = value;
    }
   }

//————————————————————————————————————————————————————————————————

   //用 get 方法也可以暴露属性，外部可以直接通过 XX.name 来访问
   get name2(){
      return this.name;
   }
   set name2(value:string){
    this.name = value;
   }
  }

  //类外不可访问 private 属性
  const per = new Person('小明',18);//敏感数据将会很危险，因为还能够随便修改过
  console.log(per.getAge())
  per.setAge(22);



//定义属性的简单写法 —————————————————————————————————————————————————————————
  class CC {
    //🌟直接在构造函数内定义属性
    constructor(public name:string, public age:number){
    }
  }
  const ccc = new CC('Ming',18)

  

})()

