//🌟🌟泛型

//🔥不限制泛型类型的【函数】
  function fn<kk>(a:kk):kk{ //🌟🌟在要返回类型不明确的情况下，可以使用泛型, 在这里 kk 为泛型，名字可以自定义
    return a
  }
  fn(10)//写法一：自动类型推断：这样 a 就是 number 类型
  fn<string>('hello')//写法二：手动指定类型


  function fn2<T,K>(aa:T,bb:K):T{//🌟🌟可以指定多个泛型, T 为最终返回的类型
    return aa
  }
  fn2<string,number>('hello',10)



  //🔥不限制泛型类型的【类】
  class Myclass<T>{
    name:T;
    constructor(name:T){
      this.name = name
    }
  }
  const mc = new Myclass<string>('Jimmy')



//————————————————————————————————————————————————————————————————————

//🔥限制泛型类型的【函数】

  //比如一个限定类型的【接口】
  interface inter{
    length: number
  }

  //继承这个 inter【接口】限制类型的【函数】
  function fn3<T extends inter>(a:T):number{
    return a.length //这个返回值是 number，所以不会报错
  }

  fn3('hello')  //因为字符串包含 length 属性，所以这里可以传入不会报错
  fn3({length:10})  //这个不会报错,相当于传入了一个对象，包含了 length 属性
  // fn3(228)  //这个会报错，因为没有 length 属性
  