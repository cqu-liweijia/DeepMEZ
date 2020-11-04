import React from 'react'
import axios from 'axios';
import "./content.css"
import {Button} from "antd"


class Content1 extends React.Component {
    constructor(props){
        super(props)
        this.canvas = React.createRef();
        this.state={
            canvasWidth: 28*20,
            canvasHeight: 28*20
        };
    }
    componentDidMount() {
        const oC = this.canvas.current;
        console.log(oC)
        if (oC.getContext) {
            var oCG  = oC.getContext("2d");
            //清除对应的坐标和大小
            oCG.clearRect(0,0,this.state.canvasWidth,this.state.canvasHeight);
            this.draw(oCG,oC)
        }
    }
    //绘图函数
    draw(oCG,oC){
        // 画图程序
        oCG.lineWidth = 10;
        oC.onmousedown = function (ev) {
            var ev = ev || window.event;
            oCG.moveTo(ev.clientX - oC.offsetLeft, ev.clientY - oC.offsetTop);
            document.onmousemove = function (ev) {
                var ev = ev || window.event;//获取event对象
                oCG.lineTo(ev.clientX - oC.offsetLeft, ev.clientY - oC.offsetTop);
                oCG.stroke();
            };
            oC.onmouseup = function () {
                document.onmousemove = null;
                document.onmouseup = null;
            };
        };
    }
    //清空画板
    clearCanvas(oC){
        console.log("clear")
        window.location.reload()
        // if (oC.getContext) {
        //     var oCG  = oC.getContext("2d");
        //     //清除对应的坐标和大小
        //     oCG.clearRect(0,0,this.state.canvasWidth,this.state.canvasHeight);
        //     this.draw(oCG,oC)
        // }
    }
    //保存画板内容
    onSave(oC){
        console.log("save")
        if (oC.getContext) {
            var oCG  = oC.getContext("2d");
            var img = oCG.getImageData(0, 0, this.state.canvasWidth, this.state.canvasHeight);// 图像数据
            console.log(img)
            //保存数据
            var out_array= [];

            console.log(img.data.length)
            //最外层循环表示取第四个通道
            for(var line=0;line<560;line+=20){
                for(var row=0;row<560;row+=20){
                    out_array[28*(line/20)+row/20]=img.data[4*(560*line+row)+3];
                }
            }
            console.log(JSON.stringify(out_array));
        }
        //传送给服务器
        axios.post('http://39.106.108.35:8080/post',{
            'img': JSON.stringify(out_array)
        }).then(response=>{
            console.log(response.data);
        }).catch(error=>{
            console.log(error);
        });

    }

    render() {
    return(
        <div className="content-page">
            <canvas className="canvas1" ref={this.canvas}
                    style={{width: this.state.canvasWidth, height: this.state.canvasHeight}}>
                <span>该浏览器不支持canvas内容</span>
            </canvas>
            <Button type="primary"
                    htmlType="submit"
                    className="clear-canvas"
                    onClick={ ()=>{
                        this.clearCanvas()
                    }}
            >Clear</Button>
            <Button type="primary"
                    htmlType="submit"
                    className="run-process"
                    id="bt"
                    onClick={ ()=>{
                        this.onSave(this.canvas.current)
                    }}
            >Run</Button>
        </div>
    )
    }
}


export default Content1;