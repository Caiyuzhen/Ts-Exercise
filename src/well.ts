//导出模块
export const hi = "你好"


//不明类型的 this
function fn2(this:Window){
  alert(this)
}


let box1 = document.getElementById('box1')
let box2 = document.getElementById('box2')

//"strictNullChecks": true, 开启后，需要避免为 null

//写法一：排除掉 null 的情况
if(box1 !== null){
  alert('msg');
}

//写法二：❓问号为：这个对象有就执行，没有就不执行
box2?.addEventListener('click', function(){
  alert('msg');
})
