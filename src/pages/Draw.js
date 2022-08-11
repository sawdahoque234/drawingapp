import React, { useCallback, useEffect, useRef, useState } from "react";

const colors = ["Red", "Green", "Yellow", "Black", "Blue"];
const Draw = () => {
  const canvasRef = useRef(null);
  const ctx = useRef(null);

  const [selectedColor, setSelectedColor] = useState(colors[0]);
  const [mouseDown, setMouseDown] = useState(false);
  const [lastPosition, setPosition] = useState({
    x: 0,
    y: 0,
  });

  useEffect(() => {
    if (canvasRef.current) {
      ctx.current = canvasRef.current.getContext("2d");
    }
  }, []);

  const draw = useCallback(
    (x, y) => {
      if (mouseDown) {
        ctx.current.beginPath();
        ctx.current.strokeStyle = selectedColor;
        ctx.current.lineWidth = 10;
        ctx.current.lineJoin = "round";
        ctx.current.moveTo(lastPosition.x, lastPosition.y);
        ctx.current.lineTo(x, y);
        ctx.current.closePath();
        ctx.current.stroke();

        setPosition({
          x,
          y,
        });
      }
    },
    [lastPosition, mouseDown, selectedColor, setPosition]
  );

  const download = async () => {
    const image = canvasRef.current.toDataURL("image/png");
    const blob = await (await fetch(image)).blob();
    const blobURL = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = blobURL;
    link.download = "image.png";
    link.click();
  };

  const clear = () => {
    ctx.current.clearRect(
      0,
      0,
      ctx.current.canvas.width,
      ctx.current.canvas.height
    );
  };

  const onMouseDown = (e) => {
    setPosition({
      x: e.pageX,
      y: e.pageY,
    });
    setMouseDown(true);
  };

  const onMouseUp = (e) => {
    setMouseDown(false);
  };

  const onMouseMove = (e) => {
    draw(e.pageX, e.pageY);
  };

  return (
    <div>
      <section class=" h-[100vh] body-font">
        <canvas
          style={{ marginLeft: "10px", marginTop: "20px" }}
          width={900}
          className="border border-red-400"
          height={400}
          ref={canvasRef}
          onMouseDown={onMouseDown}
          onMouseUp={onMouseUp}
          onMouseLeave={onMouseUp}
          onMouseMove={onMouseMove}
        />
        <div class="flex flex-wrap ">
          <div class="px-2 lg:w-full">
            <button
              onClick={clear}
              className="inline-flex text-white bg-red-500 border-0 py-2 px-6 focus:outline-none hover:bg-pink-600 rounded text-lg "
            >
              Clear
            </button>
            <button
              onClick={download}
              className="inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-pink-600 rounded text-lg m-2"
            >
              Download
            </button>
            <span className="inline-flex  border-0 py-2 px-6 focus:outline-none rounded text-lg m-2">
              <select
                className="border border-black px-10 py-2"
                value={selectedColor}
                onChange={(e) => setSelectedColor(e.target.value)}
              >
                {colors.map((color) => (
                  <option key={color} value={color}>
                    {color}
                  </option>
                ))}
              </select>
            </span>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Draw;
