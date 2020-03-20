! function () {
    //获取屏幕可视区域大小
    var d = document.documentElement;
    var clinetW = d.clientWidth;
    var clinetH = d.clientHeight;

    //设置画布大小
    var canvas = document.querySelector('canvas');
    canvas.width = clinetW;
    canvas.height = clinetH;

    var cxt = canvas.getContext('2d');
    var rainStr = 'The matrix of hackers';
    var arr = rainStr.split('');

    var fontSize = 14;
    // 计算行数
    var cols = Math.floor(clinetW / fontSize);
    // 初始化Y轴坐标
    var down = [];
    for (var i = 0; i < cols; i++) {
    down.push(Math.floor(Math.random() * -100));
    }

    function drawRain() {
    // 填充背景(ps:背景采用rgba,可尝试不同透明度的效果)
    cxt.fillStyle = 'rgba(0,0,0,.1)';
    cxt.fillRect(0, 0, clinetW, clinetH);

    // 设置字体颜色
    cxt.fillStyle = '#00ff00';
    for (var i = 0; i < down.length; i++) {
        var randomNum = Math.random();
        // 绘制文字
        cxt.fillText(arr[Math.floor(randomNum * arr.length)], i * fontSize, down[i] * fontSize);

        if (down[i] * fontSize > clinetH && randomNum > 0.9) {
        down[i] = 0;
        }
        //绘制文字的下一个位置
        down[i]++;
    }
    }

    setInterval(drawRain, 30);
}();
