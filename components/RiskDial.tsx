// import { Axis, Chart, Coord, Geom, Guide, Shape } from "bizcharts";
// import React from "react";

// const { Html, Arc, Line } = Guide;

// // 下面的代码会被作为 cdn script 注入 注释勿删
// // CDN START
// Shape.registerShape("point", "pointer", {
//   drawShape(cfg, group) {
//     let point = cfg.points[0]; // 获取第一个标记点
//     point = this.parsePoint(point);
//     const center = this.parsePoint({
//       // 获取极坐标系下画布中心点
//       x: 0,
//       y: 0
//     });
//     // 绘制指针
//     group.addShape("line", {
//       attrs: {
//         x1: center.x,
//         y1: center.y,
//         x2: point.x,
//         y2: point.y - 20,
//         stroke: cfg.color,
//         lineWidth: 5,
//         lineCap: "round"
//       }
//     });
//     return group.addShape("circle", {
//       attrs: {
//         x: center.x,
//         y: center.y,
//         r: 12,
//         stroke: cfg.color,
//         lineWidth: 4.5,
//         fill: "#fff"
//       }
//     });
//   }
// });

// const data = [{ value: 6 }];
// const cols = {
//   value: {
//     min: 0,
//     max: 9,
//     ticks: [2.25, 3.75, 5.25, 6.75],
//     nice: false
//   }
// };

// export class RiskDial extends React.Component {
//   render() {
//     return (
//       <Chart
//         height={121}
//         data={data}
//         scale={cols}
//         padding={[0, 0, 200, 0]}
//         forceFit
//       >
//         <Coord
//           type="polar"
//           startAngle={(-9 / 8) * Math.PI}
//           endAngle={(1 / 8) * Math.PI}
//           radius={0.75}
//         />
//         <Axis
//           name="value"
//           zIndex={2}
//           line={null}
//           label={{
//             offset: -20,
//             formatter: val => {
//               if (val === "2.25") {
//                 return "差";
//               } else if (val === "3.75") {
//                 return "中";
//               } else if (val === "5.25") {
//                 return "良";
//               }
//               return "优";
//             },
//             textStyle: {
//               fontSize: 24,
//               fill: "rgba(0, 0, 0, 0.65)",
//               textAlign: "center"
//             }
//           }}
//         />
//         <Axis name="1" visible={false} />
//         <Guide>
//           <Line
//             start={[3, 0.905]}
//             end={[3.0035, 0.85]}
//             lineStyle={{
//               stroke: "#19AFFA", // 线的颜色
//               lineDash: null, // 虚线的设置
//               lineWidth: 3
//             }}
//           />
//           <Line
//             start={[4.5, 0.905]}
//             end={[4.5, 0.85]}
//             lineStyle={{
//               stroke: "#19AFFA", // 线的颜色
//               lineDash: null, // 虚线的设置
//               lineWidth: 3
//             }}
//           />
//           <Line
//             start={[6, 0.905]}
//             end={[6.0035, 0.85]}
//             lineStyle={{
//               stroke: "#19AFFA", // 线的颜色
//               lineDash: null, // 虚线的设置
//               lineWidth: 3
//             }}
//           />
//           <Arc
//             start={[0, 0.965]}
//             end={[9, 0.965]}
//             style={{
//               // 底灰色
//               zIndex: 0,
//               stroke: "#000",
//               lineWidth: 18,
//               opacity: 0.09
//             }}
//           />
//           <Arc
//             start={[0, 0.965]}
//             end={[data[0].value, 0.965]}
//             style={{
//               // 底灰色
//               zIndex: 1,
//               stroke: "#1890FF",
//               lineWidth: 18
//             }}
//           />
//           <Html
//             position={["50%", "95%"]}
//             html={`<div style="width: 300px;text-align: center;font-size: 12px!important;"><p style="font-size: 1.75em; color: rgba(0,0,0,0.43);margin: 0;">合格率</p><p style="font-size: 3em;color: rgba(0,0,0,0.85);margin: 0;">${data[0]
//               .value * 10}%</p></div>`}
//           />
//         </Guide>
//         <Geom
//           type="point"
//           position="value*1"
//           shape="pointer"
//           color="#1890FF"
//           active={false}
//           style={{ stroke: "#fff", lineWidth: 1 }}
//         />
//       </Chart>
//     );
//   }
// }

export const RiskDial = () => (
  <svg
    width="121"
    height="116"
    viewBox="0 0 121 116"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g clip-path="url(#clip0)">
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M110.323 95.3008C117.056 85.4987 121 73.612 121 60.7997C121 27.221 93.9132 0 60.5 0C27.0868 0 0 27.221 0 60.7997C0 73.6099 3.9422 85.4948 10.6739 95.2959L17.6496 90.4664C11.8603 82.0374 8.47007 71.8165 8.47007 60.7998C8.47007 31.922 31.7647 8.512 60.5001 8.512C89.2355 8.512 112.53 31.922 112.53 60.7998C112.53 71.8183 109.139 82.0409 103.348 90.4707L110.323 95.3008Z"
        fill="#F5222D"
      />
      <rect
        x="91.1509"
        y="81.4825"
        width="2.01667"
        height="32.2667"
        rx="1.00833"
        transform="rotate(126 91.1509 81.4825)"
        fill="#F5222D"
      />
      <rect
        x="59.8276"
        y="9.41113"
        width="1.34444"
        height="4.03333"
        fill="#F5222D"
      />
      <rect
        x="95.8496"
        y="29.4624"
        width="1.34444"
        height="4.03333"
        transform="rotate(-135 95.8496 29.4624)"
        fill="#F5222D"
      />
      <rect
        width="1.34444"
        height="4.03333"
        transform="matrix(0.707107 -0.707107 -0.707107 -0.707107 25.1504 29.4624)"
        fill="#F5222D"
      />
      <path
        d="M64.8693 61.1722C64.8693 63.5854 62.913 65.5417 60.4998 65.5417C58.0867 65.5417 56.1304 63.5854 56.1304 61.1722C56.1304 58.759 58.0867 56.8028 60.4998 56.8028C62.913 56.8028 64.8693 58.759 64.8693 61.1722Z"
        fill="#F0F2F5"
        stroke="#F5222D"
        stroke-width="2.01667"
      />
    </g>
    <g clip-path="url(#clip1)">
      <path
        d="M44.2168 110H45.5762V98.7266H44.2012L41.2012 100.883V102.367L44.1856 100.219H44.2168V110ZM52.3809 110.188C55.0059 110.188 56.5215 107.914 56.5215 104.352C56.5215 100.812 54.9981 98.5391 52.3809 98.5391C49.7637 98.5391 48.2246 100.828 48.2246 104.359C48.2246 107.922 49.7481 110.188 52.3809 110.188ZM52.3809 108.961C50.6153 108.961 49.6387 107.164 49.6387 104.352C49.6387 101.602 50.6387 99.7734 52.3809 99.7734C54.1231 99.7734 55.1075 101.586 55.1075 104.359C55.1075 107.172 54.1387 108.961 52.3809 108.961ZM62.084 110.188C64.709 110.188 66.2246 107.914 66.2246 104.352C66.2246 100.812 64.7012 98.5391 62.084 98.5391C59.4668 98.5391 57.9278 100.828 57.9278 104.359C57.9278 107.922 59.4512 110.188 62.084 110.188ZM62.084 108.961C60.3184 108.961 59.3418 107.164 59.3418 104.352C59.3418 101.602 60.3418 99.7734 62.084 99.7734C63.8262 99.7734 64.8106 101.586 64.8106 104.359C64.8106 107.172 63.8418 108.961 62.084 108.961ZM72.0528 101.391C72.0528 99.6875 71.1153 98.5859 69.6856 98.5859C68.2559 98.5859 67.3184 99.6875 67.3184 101.391C67.3184 103.094 68.2559 104.195 69.6856 104.195C71.1153 104.195 72.0528 103.094 72.0528 101.391ZM69.6856 103.242C68.9981 103.242 68.5684 102.539 68.5684 101.391C68.5684 100.242 68.9981 99.5391 69.6856 99.5391C70.3731 99.5391 70.8028 100.242 70.8028 101.391C70.8028 102.539 70.3731 103.242 69.6856 103.242ZM69.3418 110L73.3418 104.523L77.5762 98.7266H76.2325L72.334 104.055L67.9825 110H69.3418ZM78.2481 107.312C78.2481 105.609 77.3106 104.508 75.8809 104.508C74.4512 104.508 73.5137 105.609 73.5137 107.312C73.5137 109.016 74.4512 110.117 75.8809 110.117C77.3106 110.117 78.2481 109.016 78.2481 107.312ZM75.8809 109.164C75.1934 109.164 74.7637 108.461 74.7637 107.312C74.7637 106.164 75.1934 105.461 75.8809 105.461C76.5684 105.461 76.9981 106.164 76.9981 107.312C76.9981 108.461 76.5684 109.164 75.8809 109.164Z"
        fill="black"
        fill-opacity="0.85"
      />
    </g>
    <defs>
      <clipPath id="clip0">
        <rect width="121" height="95.4556" fill="white" />
      </clipPath>
      <clipPath id="clip1">
        <rect
          width="95"
          height="54"
          fill="white"
          transform="translate(26 95)"
        />
      </clipPath>
    </defs>
  </svg>
);
