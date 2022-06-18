//🚀接口（Ts 才有，js 没有）
(function (){
    //🔥🔥🔥方式一：描述一个对象包含哪些类型（自己写一个类型声明）
      type myType = {
        name: string,
        age: number,
        [propname:string]:any
        sayHi():void //不能定义实际的值
      }

      const obj: myType ={
        name: '小白',
        age: 2,
        gender: 'male',
        sayHi(){
          console.log('Helloooo')
        }
      }



    //🔥🔥🔥方式二：接口就是用来定义对象的类结构, 跟上面的类型声明一样, 不同点在于，🔥🔥🔥其一接口可以重复声明, 可以重名！其二接口不能定义实际的值！！
      interface myInterface{ // interface 可以定义接口
        name: string,
        age: number,
        sayHi():void //不能定义实际的值
      }

      interface myInterface{
        gender: string,
      }

      const obj2: myInterface ={
        name: '小白',
        age: 2,
        gender: 'male',
        sayHi(){
          console.log('Helloooo')
        }
      }


      //🔥🔥🔥方式三定义类时，同时还可以去实现一个接口
      class MyAir implements myInterface{ //继承自上面的 myInterface
        name: string
        age: number
        gender: string
        constructor(name: string,age: number, gender: string){ //🔥🔥需要构造函数初始化！
          this.name = name;
          this.age = age;
          this.gender = gender;
        }
        sayHi(): void {
          console.log("hi")
        }
      }

})()