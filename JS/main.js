!function(){
    var duration = 50
    $('.actions').on('click','button',function(e){
        let $button = $(e.currentTarget)
        let speed = $button.attr('data-speed')
        $button.addClass('active')
        .siblings('.active').removeClass('active')
        switch(speed){
            case 'slow':
                duration=100
                break
            case 'normal':
                duration=50
                break
            case 'fast':
                duration = 10
                break
        }
    })
    $('.fresh').on('click',function(e){
         window.location.reload(true)
       })
    $('.fresh').on('touch',function(e){
        window.location.reload(true)
      })
     
function writeCode(prefix,code,fn){
    let container = document.querySelector('#code')
    let styleTag = document.querySelector('#styleTag')
    let n = 0 
    let id
    id = setTimeout(function run() {
        n += 1
        container.innerHTML= code.substring(0,n)
        styleTag.innerHTML = code.substring(0,n)
        container.scrollTop = container.scrollHeight
        if(n< code.length){
            id = setTimeout(run,duration)
        }else{
            fn && fn.call()
        }
        
    },duration);
}
let code = `/*
 * 首先给 panda 一个白色背景色吧
 */
.preview{background: white;}
/*
 * 开始咯，先画 panda 的小圆脸
 */
.cabeca{
    position: absolute;
    width: 405px;
    height: 350px;
    background: #FFFFFF;
    margin-top: 50px;
    border: 4px solid #000000;
    border-radius: 212px 212px 190px 190px;
    left:50%;
    margin-left: -202px;
}
/*
 * 接下来就是 panda 的黑眼圈了
 */
.eye.left{
    position: absolute;
    width: 152px;
    height: 159px;
    background: #000000;
    border-radius: 200px 145px 200px 145px;
    top: 152px;
    right: 50%;
    margin-right: 22px;
}
.eye.whitel{
    position: absolute;
    width: 99px;
    height: 106px;
    background: #FFFFFF;
    border-radius: 65%/ 70%;
    top:171px;
    right: 50%;
    margin-right: 35px;
}
.eyeball.left{
    position: absolute;
    width: 53px;
    height:60px;
    background: #000000;
    border-radius: 48%/ 50%;
    top: 192px;
    right: 50%;
    margin-right: 50px;
}
.eye.right{
    position: absolute;
    width: 152px;
    height: 159px;
    background: #000000;
    border-radius:145px 200px 145px 200px;
    top: 152px;
    left:50%;
    margin-left: 22px;
}
.eye.whiter{
    position: absolute;
    width: 99px;
    height: 106px;
    background: #FFFFFF;
    border-radius: 65%/ 70%;
    top:171px;
    left: 50%;
    margin-left: 35px;
}
.eyeball.right{
    position: absolute;
    width: 53px;
    height:60px;
    background: #000000;
    border-radius: 48%/ 50%;
    top: 192px;left: 50%;
    margin-left: 50px;
}
/*
 * 然后画一下 panda 的鼻子吧 
 */
.nose{
    position: absolute;
    width: 60px;
    height: 30px;
    margin-top: -15px;
    margin-left: -30px;
    background: #000000;
    border-radius: 40px/ 20px;
    top: 326px;
    left: 50%;
}
/*
 * 鼻子画完了，轮到嘴巴了，画一个小嘴巴
 */
.mouse{
    position: absolute;
    width: 53px; 
    height: 22px;
    margin-left: -26px;
    background: #000000;
    border-radius: 80%;
    border-bottom: 5px solid #000000;
    background: #FFFFFF;
    top: 357px;
    left: 50%;
}
/*
 * 哦，还有 panda 的两个大耳朵呀
 */
.ear.left{
    position: absolute;
    width: 167px;
    height: 98px;
    background: #000000;
    border-radius: 300px 300px 30px 30px;top: 26px; right: 50%;margin-right: 68px;
    float: left;
    transform: rotate(-40deg);
    overflow: auto;
}
.ear.right{
    position: absolute;
    width: 167px;
    height: 98px;
    background: #000000;
    border-radius: 300px 300px 30px 30px;top: 26px; left: 50%;margin-left:68px;
    float: right;
    transform: rotate(40deg);
    overflow: auto;
}
/*
 * 好啦，可爱的 panda 就画好了
 * 谢谢观看！
 */
`
writeCode('',code)
}.call()