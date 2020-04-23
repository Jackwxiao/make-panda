# make-panda
先用CSS 画好panda，然后把生成panda 的代码动态展示出来，最后添加调速和重置功能。
部分借鉴于codepen
封装写代码的函数：
```
!function(){
  function writeCode(prefix,code,fn){
  let container = document.querySelector('#code')
  let n =0
  let id = setInterval(()=>{
    n += 1
    container.innerHTML = code.substring(0,n)
    if(n>= code.length){
      window.clearInterval(id)
      fn && fn.call()
    }
  },100)
}
  writeCode('','12344556677788FDGNHDND')
}.call()
```
