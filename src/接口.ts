//ðæ¥å£ï¼Ts ææï¼js æ²¡æï¼
(function (){
    //ð¥ð¥ð¥æ¹å¼ä¸ï¼æè¿°ä¸ä¸ªå¯¹è±¡åå«åªäºç±»åï¼èªå·±åä¸ä¸ªç±»åå£°æï¼
      type myType = {
        name: string,
        age: number,
        [propname:string]:any
        sayHi():void //ä¸è½å®ä¹å®éçå¼
      }

      const obj: myType ={
        name: 'å°ç½',
        age: 2,
        gender: 'male',
        sayHi(){
          console.log('Helloooo')
        }
      }



    //ð¥ð¥ð¥æ¹å¼äºï¼æ¥å£å°±æ¯ç¨æ¥å®ä¹å¯¹è±¡çç±»ç»æ, è·ä¸é¢çç±»åå£°æä¸æ ·, ä¸åç¹å¨äºï¼ð¥ð¥ð¥å¶ä¸æ¥å£å¯ä»¥éå¤å£°æ, å¯ä»¥éåï¼å¶äºæ¥å£ä¸è½å®ä¹å®éçå¼ï¼ï¼
      interface myInterface{ // interface å¯ä»¥å®ä¹æ¥å£
        name: string,
        age: number,
        sayHi():void //ä¸è½å®ä¹å®éçå¼
      }

      interface myInterface{
        gender: string,
      }

      const obj2: myInterface ={
        name: 'å°ç½',
        age: 2,
        gender: 'male',
        sayHi(){
          console.log('Helloooo')
        }
      }


      //ð¥ð¥ð¥æ¹å¼ä¸å®ä¹ç±»æ¶ï¼åæ¶è¿å¯ä»¥å»å®ç°ä¸ä¸ªæ¥å£
      class MyAir implements myInterface{ //ç»§æ¿èªä¸é¢ç myInterface
        name: string
        age: number
        gender: string
        constructor(name: string,age: number, gender: string){ //ð¥ð¥éè¦æé å½æ°åå§åï¼
          this.name = name;
          this.age = age;
          this.gender = gender;
        }
        sayHi(): void {
          console.log("hi")
        }
      }

})()