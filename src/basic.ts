console.log('hello')
//https://esnail.github.io/ts-gitbook/book/chapter2/readme.html

//ðå¯ä»¥ç»åéãå½æ°çè¡å/è¿åå¼ãæ°ç»åçå¯¹è±¡åç±»åçå£°æ
//ð¥Ts åºç¡æ°æ®ç±»å ââââââââââââââââââââââââââââââââââââââââââââââââââââââââââ
  // booleanï¼å¸å°ç±»åï¼
      let flag:boolean = true
      flag = false

      //ç¨ | èµå¼å¤ä¸ªå­é¢éæèå¤ä¸ªç±»å ââââ èåç±»å
      let lk: '1' | '2'
      let ll: boolean | string


  // numberï¼æ°å­ç±»åï¼
      let num:number = 123
      num = 456



  // stringï¼å­ç¬¦ä¸²ç±»åï¼
      let str:string = 'this is ts'
      str = 'test'



  // arrayï¼æ°ç»ç±»åï¼
      let arrABC:string[] = ['12', '23']
      arrABC = ['45', '56']

      let arrCCC:Array<number> //è¡¨ç¤ºæ°å­ç±»åçæ°ç»
      arrCCC = [1, 2, 3]



  // tupleï¼åç»ç±»å,å±äºæ°ç»çä¸ç§,å°±æ¯ãåºå®é¿åº¦ãè·ãç±»åãçæ°ç»,æ¯å¦ä¸é¢è¿ä¸ªå°±æ¯ãåºå®ãåªæä¸ä¸ªåå®¹ï¼ãä¸ç§ç±»åãï¼
      let tupleArr:[number, string, boolean] = [12, '34', true]



  // enumï¼æä¸¾ç±»åï¼
      enum statusCode {
        success,
        fail,
        pending
      }

      //ç¸å½äºä» statusCode åä¸¾dåº success
      let res:statusCode = statusCode.success;
      console.log(res); // 0ï¼å¦ææ è¯ç¬¦æ²¡æèµå¼ï¼å®çå¼å°±æ¯ä¸æ ï¼é»è®¤ä» 0 å¼å§


      enum statusCode {
        success1 = 2,
        fail2,
        pending3
      }

      let res1:statusCode = statusCode.success;
      console.log(res1) // 2ï¼æå®çå¼

      let res3:statusCode = statusCode.fail;
      console.log(res1) // 3ï¼è¥æ²¡æå®ï¼ä»æå®çå¾åå¼å§



      
      //æä¸¾çåºæ¯ï¼æ¯å¦åå®ä¹ä¸ä¸ªæä¸¾æ°ç»ï¼ç¶ååå®ä¹ä¸ä¸ªæ°æ®å»ä½¿ç¨æä¸¾æ°ç»åçå¼
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



  // anyï¼ä»»æç±»å, è¡¨ç¤ºå¯ä»¥æå®ä»»ä½ç±»åçå¼ãä¸è¬ç¨äºå£°æ dom èç¹ï¼ðâ ï¸æ³¨æï¼æä¸ä¸ª any çç±»åèµå¼ç»å¶ä»åéï¼å¶ä»åéä¹ä¼åæ anyï¼ï¼
      let numSth:any  //ç¸å½äºå³é­äºç±»åæ£æµï¼è· js ä¸æ ·äºï¼ä¸å»ºè®®ä½¿ç¨
      numSth = 996
      // num = numSth //æè¿æ ·ä¼æ num æ±¡ææ any ç±»åçåéï¼


      let numXX:any = 123;
      numXX = 'str';
      numXX = true;

      let boxEl:any = document.getElementById('box'); // å£°æä¸ä¸ª dom èç¹
      boxEl.style.color = 'pink';



  // null å undefined ç±»å
      let numZZ:undefined;
      console.log(numZZ); // è¾åºï¼undefined æ­£ç¡®


      let numYY:number | undefined; // | è¡¨ç¤ºæè
      console.log(numYY); // æ­£ç¡®
      numYY = 123;
      console.log(numYY); // æ­£ç¡®


      let numFF:null;
      numFF = null;


      //ä¸ä¸ªåéå¯è½æ¯ number ç±»åï¼å¯è½æ¯ nullï¼å¯è½æ¯ undefined
      let numQQ:number | null | undefined;
      numQQ = 1234;


      
  //unknown è· any ç±»ä¼¼ï¼å¥½å¤æ¯ä¸ä¼æ±¡æå¶ä»åéï¼ðæ¯å¦æä¸ä¸ª any çç±»åèµå¼ç»å¶ä»åéï¼å¶ä»åéä¹ä¼åæ anyï¼unknown å°±ä¸ä¼
      let et: unknown
      et = 10
      et = 'hello'
      et = true

      //ðç±»åæ­è¨ï¼åè¯ç¼è¯å¨ supe å°±æ¯å­ç¬¦ä¸²ç±»åï¼
      let supe:string
      supe = et as string
      supe = <string>et

  



  // void ç±»å(typescript ä¸­ç void è¡¨ç¤ºæ²¡æä»»ä½ç±»åï¼ä¸è¬ç¨äºå®ä¹å½æ°çæ¶åï¼ð¥ð¥ä¸ä¼return åºè¿åå¼çæåµ)
      function fn ():void { // æ­£ç¡®çåæ³
        console.log(fn);
      }
      fn();
      
      // function fn ():undefined { // éè¯¯çåæ³
      //   console.log('fn);
      // }
      // fn();



  // never ç±»å(æ²¡æå¼ï¼ä¸ä¼è¿åç»æï¼ä¸è¬ç¨äºæ¥é)
    //å£°æå¼å½æ°
    function fn22():never {
      throw new Error('éè¯¯') //ä¸å®å¾æä¸ª throw æåºéè¯¯
    }


    (function test(){alert('ä½ å¥½')})(),//ç«å³æ§è¡å½æ°

    (function(){alert('ä½ å¥½')})()//ç«å³æ§è¡ä½ ä»¬å½æ°,!ä¸ºåå


    //å½æ°è¡¨è¾¾å¼
      let aee:never;  // aee = 123; // éè¯¯çåæ³
      
      aee = (() => { // æ­£ç¡®çåæ³
        throw new Error('éè¯¯');
      })()



  // object å¯¹è±¡ç±»å
      // let obj:object //(å ä¸ºä¸åé½æ¯å¯¹è±¡ï¼æä»¥ä¸è¬ä¸ä¼è¿ä¹å)
      // obj = {name: 'Wang', age: 25};

      //ððä¸è¬æ¯å»éå¶å¯¹è±¡ååå«æåªäºå±æ§, ðð ? ä¸ºå¯éé¡¹ï¼å¯ææ­¤å±æ§ï¼æ²¡æä¹ä¸å¿æ¥é
      let bc: {name:string, age?:number}

      bc = {
        name: 'Wang',
        age:18
      }

      //ðððï¼å¸¸ç¨ï¼è¿å¯ä»¥è¿ä¹åï¼å¿é¡»æå­ç¬¦ä¸²ç name ï¼ððå©ä½çä¹å¯ä»¥ä¼ ä½ä¸åéå¶,ç¨ any çæ¹å¼ï¼ï¼[propName:string] è¡¨ç¤ºä»»æå­ç¬¦ä¸²çå±æ§å,:any è¡¨ç¤ºä»»æç±»åçå¼
      let zz:{name:string,[propName:string]:any}
      zz = {name:'zen', age:18}





//ð¥Ts å½æ°å£°æ ââââââââââââââââââââââââââââââââââââââââââââââââââââââââââ

//æè¿åå¼çå½æ°
  function fn1 ():number { // number æ¯å½æ°è¿åå¼ç±»åï¼æ²¡æè¿åå¼ä¸º void
    return 123;
  }

  fn1();



// æ²¡æè¿åå¼çå¿åå½æ°
  let fn2 = function ():void {
    console.log(456);
  }
  fn2();



// è®¾ç½®å½æ°çç±»åå£°æ(ððè¡¨ç¤ºå¸æ kk è¿ä¸ªå½æ°åæãä¸¤ä¸ªåæ°ãï¼å¹¶ä¸é½æ¯ number ç±»å)
  let kk: (ak:number, bk:number) => number //è¿åå¼æ¯ number
  kk = function(ak:number,bk:number):number{
    return ak + bk
  }





// ä¼ å
  function fn3 (name:string, age:number):string {
    return `å§åï¼${name}ï¼å¹´é¾ï¼${age}`;
  }
  fn3('å¼ ä¸', 25);



//ts ä¸­å®ååè¡åå¿é¡»ä¸æ ·ï¼å¦æä¸ä¸æ ·å°±éè¦éç½®å¯éåæ°, å¯éåæ°å¿é¡»éç½®å°åæ°çæåé¢
  function getInfo (name:string, age?:number):string { // age ä¸ºå¯éåæ°,å¯ä»¥è®¾ç½®é»è®¤åæ°
    if (age) {
        return `å§åï¼${name}ï¼å¹´é¾ï¼${age}`;
    } else {
        return `å§åï¼${name}ï¼å¹´é¾ï¼ä¿å¯`;
    }
  }
  console.log(getInfo('å¼ ä¸', 23));
  console.log(getInfo('æå'));



//æ©å±è¿ç®ç¬¦
  function sum (a:number, b:number, ...nums:number[]):number {
    let sum = a + b;
    nums.forEach((n) => {
        sum += n;
    });
    return sum;
  }
  console.log(sum(1, 2, 3, 4, 5, 6)); // 21




//ð¥ts å®ä¹ç±» ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
  class Person {
    name:string; // å±æ§ï¼åé¢çç¥äº public å³é®è¯
    
    constructor (name:string) { // æé å½æ°ï¼å®ä¾åç±»çæ¶åè§¦åçæ¹æ³
      this.name = name;
    }
    
    run ():void {
      console.log(`${this.name}å¨è¿å¨`);
    }
    
    getName ():string {
      return this.name;
    }
    
    setName (name:string):void {
      this.name = name;
    }
  }


  let po = new Person('æå');
  po.run();
  po.setName('çäº');
  console.log(po.getName());


//ç±»éé¢çä¿®é¥°ç¬¦, Typescript éé¢å®ä¹å±æ§çæ¶åç»æä»¬æä¾äºä¸ç§ä¿®é¥°ç¬¦ï¼
    // publicï¼é»è®¤ï¼ï¼å¬æï¼å¨å½åç±»éé¢ãå­ç±»ãç±»å¤é¢é½å¯ä»¥è®¿é®
    // protectedï¼ä¿æ¤ç±»åï¼å¨å½åç±»éé¢ãå­ç±»éé¢å¯ä»¥è®¿é®ï¼å¨ç±»å¤é¨æ²¡æ³è®¿é®
    // privateï¼ç§æï¼å¨å½åç±»éé¢å¯ä»¥è®¿é®ï¼å­ç±»ãç±»å¤é¨é½æ²¡æ³è®¿é® å±æ§å¦æä¸å ä¿®é¥°ç¬¦ï¼é»è®¤å°±æ¯å¬æï¼publicï¼
    // static: éæå±æ§
    // readonly åªè¯»å±æ§,å¨å½åç±»éé¢ãç±»å¤é¢é½å¯ä»¥è®¿é®,ä½æ¯ä¸è½ä¿®æ¹


    
    //ð public å¬æï¼å¨å½åç±»éé¢ãå­ç±»ãç±»å¤é¢é½å¯ä»¥è®¿é®: ââââââââââââââââââââââââââââââââââ
    class Person1 {
      public name:string; // å¬æ
    
      constructor (name:string) {
        this.name = name;
      }
    
      run ():void {
        console.log(`${this.name}å¨è¿å¨`); // å¨ç±»éè½è®¿é®
      }
    }
    let p2 = new Person1('æå');
    p2.run();
    console.log(p2.name); // å¨ç±»å¤é¢è½è®¿é®
    
    class Child22 extends Person1 {
      constructor (name:string) {
        super(name);
      }
    
      run ():void {
        console.log(`${this.name}å¨è¿å¨--å­ç±»`); // å­ç±»è½è®¿é®
      }
    }
    let c11 = new Child22('å¨å­');
    c11.run(); // å¨å­å¨è¿å¨--å­ç±»
    console.log(c11.name); // å¨ç±»å¤é¢è½è®¿é®





    //ð protected ä¿æ¤ç±»åï¼å¨å½åç±»éé¢ãå­ç±»éé¢å¯ä»¥è®¿é®ï¼å¨ç±»å¤é¨æ²¡æ³è®¿é®ï¼ââââââââââââââââââââââââââââââââââ
    class Person3 {
      protected name:string; // ä¿æ¤
    
      constructor (name:string) {
        this.name = name;
      }
    
      run ():void {
        console.log(`${this.name}å¨è¿å¨`); // å¨ç±»éè½è®¿é®
      }
    }
    let p3 = new Person3('æå');
    p3.run();
    // console.log(p.name); // æ¥éï¼å¨ç±»å¤é¢ä¸è½è®¿é®
    
    class Child2 extends Person3 {
      constructor (name:string) {
        super(name);
      }
    
      run ():void {
        console.log(`${this.name}å¨è¿å¨--å­ç±»`); // å­ç±»è½è®¿é®
      }
    }
    let c2 = new Child2('å¨å­');
    c2.run(); // å¨å­å¨è¿å¨--å­ç±»; // å¨å­å¨è¿å¨--å­ç±»
    // console.log(c.name); // æ¥éï¼å¨ç±»å¤é¢è½è®¿é®





    //ð private ç§æå±æ§,å¨å½åç±»éé¢å¯ä»¥è®¿é®ï¼å­ç±»ãç±»å¤é¨é½æ²¡æ³è®¿é®ï¼ââââââââââââââââââââââââââââââââââ
    class Person5 {
      private name:string; // ç§æ
    
      constructor (name:string) {
        this.name = name;
      }
    
      run ():void {
        console.log(`${this.name}å¨è¿å¨`); // å¨ç±»éè½è®¿é®
      }
    }
    let p66 = new Person5('æå');
    p66.run();
    // console.log(p.name); // æ¥éï¼å¨ç±»å¤é¢ä¸è½è®¿é®
    
    class Child8 extends Person5 {
      constructor (name:string) {
        super(name);
      }
    
      run ():void {
        // console.log(`${this.name}å¨è¿å¨--å­ç±»`); // æ¥éï¼å­ç±»è½è®¿é®
      }
    }
    let c77 = new Child8('å¨å­');
    c77.run(); // å¨å­å¨è¿å¨--å­ç±»
    // console.log(c.name); // æ¥éï¼å¨ç±»å¤é¢è½è®¿é®




//å¤æ: ç¶ç±»å®ä¹ä¸ä¸ªæ¹æ³ä¸å»å®ç°ï¼è®©ç»§æ¿å®çå­ç±»å»å®ç°ï¼æ¯ä¸ä¸ªå­ç±»æä¸åçè¡¨ç°
  class Animal {
    name:string;

    constructor (name:string) {
      this.name = name;
    }

    eat () { // ð¥ð¥å·ä½åä»ä¹,ä¸ç¥éãå·ä½åä»ä¹ï¼ç±ç»§æ¿å®çå­ç±»å»å®ç°ï¼æ¯ä¸ä¸ªå­ç±»çè¡¨ç°ä¸ä¸æ ·
      console.log('åçæ¹æ³');
    }
  }


  //å¤æä¸
  class Dog extends Animal {
    constructor (name:string) {
      super(name);
    }
    eat () { // å­ç±»å®ç°ç¶ç±»ç eat æ¹æ³
      console.log(`${this.name}åæ¬¢åéª¨å¤´`);
    }
  }

  //å¤æäº
  class Cat extends Animal {
    constructor (name:string) {
      super(name);
    }
    eat () { // å­ç±»å®ç°ç¶ç±»ç eat æ¹æ³
      console.log(`${this.name}åæ¬¢åèé¼ `);
    }
  }


//æ½è±¡ç±»:
  //å®æ¯æä¾å¶ä»ç±»ç»§æ¿çåºç±»ï¼ä¸è½ç´æ¥è¢«å®ä¾å
  //ç¨abstractå³é®å­å®ä¹æ½è±¡ç±»åæ½è±¡æ¹æ³ï¼æ½è±¡ç±»ä¸­çæ½è±¡æ¹æ³ä¸åå«å·ä½å®ç°å¹¶ä¸å¿é¡»å¨æ´¾çç±»ï¼å­ç±»ï¼ä¸­å®ç°ã
  //abstract æ½è±¡æ¹æ³åªè½æ¾å¨æ½è±¡ç±»éé¢ã
  //æ½è±¡ç±»åæ½è±¡æ¹æ³ç¨æ¥å®ä¹æ åãæ¯å¦ï¼æ åï¼Animal2 è¿ä¸ªç±»è¦æ±å®çå­ç±»å¿é¡»åå«eat æ¹æ³


// æ½è±¡ç±»ï¼æ å
  abstract class Animal2 {
    name:string;

    constructor (name:string) {
      this.name = name;
    }

    abstract eat ():any; //ð¥ð¥ æ½è±¡æ¹æ³ä¸åå«å·ä½å®ç°å¹¶ä¸å¿é¡»å¨æ´¾çç±»ä¸­å®ç°ã
  }
  // let animal2 = new Animal2(); // éè¯¯ï¼æ½å¥ç±»ä¸è½è¢«å®ä¾å



  class Dog2 extends Animal2 {
    constructor (name:string) {
      super(name);
    }

    eat () { // æ½è±¡ç±»çå­ç±»å¿é¡»å®ç°æ½è±¡ç±»éé¢çæ½è±¡æ¹æ³
      console.log(`${this.name}åæ¬¢åéª¨å¤´`);
    }
  }
  let dog = new Dog2('å°é»');
  dog.eat();



//ð¥æ³åå½æ°(å¯ä»¥æ¯æä¸ç¹å®çæ°æ®ç±»å, å¹¶ä¸è¿è½ä¿è¯ç±»åæ£æ¥ï¼ åºæ¯æ¯å¦ API çå¤ç¨)

//ðæå®è¿åå¼çç±»å
  function getData<T> (val:T):T { // ðæ³åå½æ°ï¼<T> æå®äºè¿ä¸ªå½æ°çç±»åï¼
    return val;
  }
  getData<number>(124);
  getData<string>('abc');
  // getData<number>('abc'); // éè¯¯


//ðä¸æå®è¿åå¼çç±»å
  function getData2<T> (val:T):any {
    return val + '***';
  }
  getData2<number>(124); // åæ°å¿é¡»æ¯æ°å­
  getData2<string>('abc');


//æ¯å¦æä¸ªæå°å ç®æ³ï¼éè¦åæ¶æ¯æè¿åæ°å­åå­ç¬¦ä¸² a-z ä¸¤ç§ç±»åãéè¿ç±»çæ³åæ¥å®ç°
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



//æ³åæ¥å£
//å½æ°ç±»åæ¥å£
  // interface configFn{
  //     (val1:string, val2:string):string;
  // }

  // let setData222:configFn = function (value11:string, value22:string):string { // åæ°åå¯ä»¥åæ¥å£ä¸­çä¸ä¸è´ï¼ä½æ¯åæ°ç±»åå¿é¡»ä¸è´
  //     return value11 + value22;
  // }

  // setData222('1', '2');




//æ³åæ¥å£å®ç°æ¹å¼1ï¼
  interface configFn {
    <T>(val:T):T;
  }

  let getData33:configFn = function<T> (value:T):T {
    return value;
  }

  getData33<string>('abc');
  getData33<number>(123);



//æ³åæ¥å£å®ç°æ¹å¼2ï¼
  interface configFn333<T> {
    (val:T):T;
  }
  let getData333:configFn333<string> = function<T> (value:T):T {
    return value;
  }
  getData333('abc');
  // getData333(123); // éè¯¯


  let aa:boolean = false;
  