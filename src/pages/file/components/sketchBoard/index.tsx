import React, { useState, useRef } from "react";
import CanvasDraw from "@/components/canvasDraw/index.js";  //该引入会引起ts报错，无需理睬
import PubSub from "pubsub-js";
import { DeleteOutlined, ArrowLeftOutlined, UploadOutlined, ScissorOutlined } from "@ant-design/icons";

import "./index.less";

const mock =
  "data:image/png;base64,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";

function SketchBoard(props: any) {
  const [brushColor, setBrushColor] = useState("#000000");
  const [canvasImage, setCanvasImage] = useState("");
  const [brushSize, setBrushSize] = useState(10);
  const [isEraser, setIsEraser] = useState(false);
  const [imgWidth, setImgWidth] = useState(512);  // 动态设置sketchctn和CanvasDraw的宽高
  const [imgHeight, setImgHeight] = useState(512);
  const [layerPicker, setLayerPicker] = useState(false);
  const [layerDraw, setLayerDraw] = useState(0);
  const canvasCtnRef = useRef<any>(null);
  const canvasRef: any = useRef([]);

  window.onbeforeunload = function (e: any) {
    if (e) {
      e.returnValue = "关闭提示";
    }
    return false;
  };

  // PubSub.unsubscribe("beginEdit");
  PubSub.subscribe("beginEdit", (functionName, arg) => {
    setImgWidth(arg[0]);
    setImgHeight(arg[1]);
  });

  // 组件间传值：brushColor
  PubSub.unsubscribe("changeBrushColor");
  PubSub.subscribe("changeBrushColor", (functionName, arg) => {
    setBrushColor(arg);
  });

  // 组件间传值：brushSize
  PubSub.unsubscribe("changeBrushSize");
  PubSub.subscribe("changeBrushSize", (functionName, arg) => {
    setBrushSize(arg);
    //console.log(arg);
  });

  // 组件间传值：isEraser
  PubSub.unsubscribe("changeIsEraser");
  PubSub.subscribe("changeIsEraser", (functionName, arg) => {
    setIsEraser(arg);
  });

  // 传递鼠标滚轮缩放参数
  PubSub.unsubscribe("zoom");
  PubSub.subscribe("zoom", (functionName, arg) => {
    setImgWidth(Math.round(imgWidth*arg));
    setImgHeight(Math.round(imgHeight*arg));
  });

  return (
    <div
      className="sketchCtn"
      ref={canvasCtnRef}
      style = {{width:imgWidth, height:imgHeight}}
    >
      <div
        className="canvas-container"
        onMouseDown={() => {
          setLayerPicker(false);
        }}
      >
        <div id="canvas0" className="canvas_wrap" style={{ zIndex: 501 }}>
          <CanvasDraw
            enablePanAndZoom
            clampLinesToDocument
            ref={canvasRef}
            brushColor={brushColor}
            brushRadius={brushSize / 10}
            catenaryColor={brushColor}
            gridColor="#ccc"
            lazyRadius={0}
            hideGrid
            erase={isEraser}
            canvasWidth={imgWidth}
            canvasHeight={imgHeight}
            backgroundColor={"#00000000"}
          />
        </div>
      </div>
      <div className="rightUp-ctn">
        <div
          className="picker-btn"
          onClick={(e) => {
            canvasRef.current.undo();
            setLayerPicker(false);
            e.stopPropagation();
          }}
        >
          <ArrowLeftOutlined />
        </div>
        <div
          className="picker-btn"
          onClick={(e) => {
            if (!layerDraw) {
              setCanvasImage(mock);
            }
            canvasRef.current.clear();
            setLayerPicker(false);
            e.stopPropagation();
          }}
        >
          <DeleteOutlined />
        </div>
      </div>
    </div>
  );
}

export default SketchBoard;
