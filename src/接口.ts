(function (){
    //🔥🔥🔥描述一个对象包含哪些类型（自己写一个类型声明）
    type myType = {
      name: string,
      age: number,
      [propname:string]:any
    }

    const obj: myType ={
      name: '小白',
      age: 2,
      gender: 'male',
    }




    //🔥🔥🔥接口就是用来定义类的结构, 跟上面的类型声明一样, 不同点在于，🔥🔥🔥接口可以重复声明, 可以重名！
    interface myInterface{ // interface 可以定义接口
      name: string,
      age: number,
    }

    interface myInterface{
      gender: string,
    }

    const obj2: myInterface ={
      name: '小白',
      age: 2,
      gender: 'male',
    }
})()