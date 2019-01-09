function $(s) {
    return document.querySelectorAll(s);
}

let lis = $("#list li");

for (let i = 0; i < lis.length; i++) {
    lis[i].onclick = (e) => {
        for (let j = 0; j < lis.length; j++) {
            lis[j].className = "";
        }
        e.currentTarget.className = 'selected';

        load('/musics/' + e.currentTarget.title);
    }
}

let xhr = new XMLHttpRequest();

//初始化   AudioContext
let actx = new window.AudioContext();
let gainNode = actx.createGain();   //gainNode  音量控制
let analyser = actx.createAnalyser();   //音频解析
analyser.connect(gainNode);
analyser.ffftSize = 512;
let size = 128;
//连接到destination
gainNode.connect(actx.destination);
//定义一个变量标识当前是否有音乐在播放
let flagSouce = null;

//根据所得开始绘图
let box = document.getElementById('box');
let boxW = box.offsetWidth;
let boxH = box.offsetHeight;
let flag = 1;

let canvas = document.getElementById('canvas');
let ctx = canvas.getContext('2d');
canvas.width = boxW;
canvas.height = boxH;

function load(url) {
    xhr.open('GET', url);
    xhr.responseType = "arraybuffer";

    //终止上一次请求
    xhr.abort();

    //请求成功后执行onload方法
    xhr.onload = () => {
        //将获取到的音频解码
        actx.decodeAudioData(xhr.response, (buffer) => {
            flagSouce && flagSouce.stop();

            //创建一个新的接口
            let bufferSouce = actx.createBufferSource();
            bufferSouce.buffer = buffer;
            bufferSouce.connect(analyser);
            // bufferSouce.connect(gainNode);
            bufferSouce.start();

            //下列代码是解决兼容性问题的
            // bufferSouce[bufferSouce.start?"start":"noteOn"]();

            //音乐播放后存入flagSouce
            flagSouce = bufferSouce;

            $('#stopBtn')[0].onclick = (e) => {
                bufferSouce.stop();
            };

        }, (err) => {
            console.log(err);
        })
    };

    //发送请求
    xhr.send();
}

$('#volume')[0].onchange = (e) => {
    let el = e.currentTarget;
    gainNode.gain.value = el.value / el.max;
};

visual();

function visual() {
    let arr = new Uint8Array(analyser.frequencyBinCount);

    function v() {
        analyser.getByteFrequencyData(arr);
        requestAnimationFrame(v);
        draw(ctx, arr, flag);
    }

    requestAnimationFrame(v);
}

let dot = [];
$("#tab li").forEach(function (item, index) {
    item.onclick = (e) => {
        let self = e.currentTarget;
        for (let i = 0; i < 2; i++) {
            $("#tab li")[i].className = '';
        }
        self.className = 'active';
        if (self.innerText === 'BAR') {
            flag = 1;
        } else if (self.innerText === 'DOT') {
            flag = 2;
        }
    };
    dot = [];
    for (let i = 0; i < size; i++) {
        let obj = {
            x: Math.random() * boxW,
            y: Math.random() * boxH,
        };
        dot.push(obj);
    }
});

function draw(ctx, arr, flag) {
    ctx.clearRect(0, 0, boxW, boxH);
    let colors = [
        '#f39900', '#C5F38E', '#94aa5e', '#0faa43', '#4dfdc0', '#f39900', '#C5F38E', '#5748dd', '#db3f4c', '#dd3dbd', '#cecfdb', '#c7bbf5', '#aaaa27',
        '#72f360', '#290eaa', '#4dfdc0', '#C5F38E', '#94aa5e', '#f39900', '#C5F38E', '#ddf45d', '#cecfdb', '#c7bbf5', '#5748dd', '#db3f4c', '#aaaa27',
        '#f39900', '#C5F38E', '#94aa5e', '#0faa43', '#4dfdc0', '#f39900', '#C5F38E', '#5748dd', '#db3f4c', '#dd3dbd', '#cecfdb', '#c7bbf5', '#aaaa27',
        '#f39900', '#C5F38E', '#f39900', '#C5F38E', '#5748dd', '#db3f4c', '#c7bbf5', '#94aa5e', '#0faa43', '#4dfdc0', '#aaaa27',
        '#ddf45d', '#94aa5e', '#0faa43', '#4dfdc0', '#f39900', '#C5F38E', '#C5F38E', '#5748dd', '#db3f4c', '#dd3dbd', '#cecfdb', '#c7bbf5', '#aaaa27',
        '#ffeb3b', '#C5F38E', '#94aa5e', '#0faa43', '#4dfdc0', '#f39900', '#C5F38E', '#5748dd', '#db3f4c', '#dd3dbd', '#cecfdb', '#c7bbf5', '#aaaa27',
        '#880e4f', '#C5F38E', '#5748dd', '#db3f4c', '#dd3dbd', '#cecfdb', '#c7bbf5', '#0faa43', '#4dfdc0', '#f39900', '#C5F38E', '#5748dd', '#aaaa27',
        '#f39900', '#C5F38E', '#94aa5e', '#0faa43', '#4dfdc0', '#f39900', '#C5F38E', '#dd262f', '#db3f4c', '#dd3dbd', '#cecfdb', '#c7bbf5', '#aaaa27',
        '#f39900', '#C5F38E', '#C5F38E', '#94aa5e', '#0faa43', '#4dfdc0', '#f39900', '#94aa5e', '#db3f4c', '#dd3dbd', '#cecfdb', '#c7bbf5', '#aaaa27',
        '#f44336', '#C5F38E', '#94aa5e', '#0faa43', '#4dfdc0', '#f39900', '#C5F38E', '#c2c6dd', '#db3f4c', '#dd3dbd', '#cecfdb', '#c7bbf5', '#aaaa27',
    ];
    for (let i = 0; i < size; i++) {
        if (flag === 1) {
            ctx.beginPath();
            ctx.fillStyle = colors[i];
            ctx.fillRect((boxW / arr.length) * 8 * i, boxH - 10, boxW / arr.length * 5, -arr[i]);
            ctx.closePath();
            ctx.fill();
        } else {
            ctx.beginPath();
            let grd = ctx.createRadialGradient(dot[i].x, dot[i].y, 0, dot[i].x, dot[i].y, arr[i] / 10);
            // grd.addColorStop(0, 'rgb('+ Math.random() * 255 + "," + Math.random() * 255 + "," + Math.random() * 255 + ')');
            grd.addColorStop(0, "#94aa5e");
            grd.addColorStop(0.5, "#9779dd");
            grd.addColorStop(1, "#dd533d");
            ctx.fillStyle = grd;
            ctx.arc(dot[i].x, dot[i].y, arr[i] / 8, 0, 2 * Math.PI);
            ctx.closePath();
            ctx.fill();
        }
    }
}


