# make-panda
先用CSS 画好panda，然后把生成panda 的代码动态展示出来，最后添加调速和重置功能。样式部分借鉴于codepen
</br>
封装写代码的函数：
```
!function(){
  var duration = 100
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
  },duration)
}
  writeCode('','12344556677788FDGNHDND')
}.call()
```
* 但用 setInterval 只会读取一次 duration ，无法满足调速的功能
* 改用 setTimeout
```
!function(){
  var duration = 100
  function writeCode(prefix, code, fn){
  let container = document.querySelector('#code')
  let n =0
  let id  // 每次都记下 id
  id = setTimeout(function run(){
    n += 1
    container.innerHTML = code.substring(0,n)
    if(n < code.length){
    id = setTimeout(run, duration)
    }
    else{
    fn && fn.call()
    }
  },duration)
}
  writeCode('','12344556677788FDGNHDND')
}.call()

// 调速
switch(speed){
case 'slow':
duration: 200
break
case 'normal':
duration: 100
break
case 'fast':
duration: 10
break
}
```

* 重载 window.loacation.reload(true)
