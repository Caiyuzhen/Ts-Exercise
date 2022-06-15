export const hi = "你好";
function fn2() {
    alert(this);
}
let box1 = document.getElementById('box1');
let box2 = document.getElementById('box2');
if (box1 !== null) {
    alert('msg');
}
box2 === null || box2 === void 0 ? void 0 : box2.addEventListener('click', function () {
    alert('msg');
});
