// 1. 导入所有的svg图标
// 2. 完成SvgICon的全局注册
import SvgIcon from "@/components/SvgIcon";
const svgRequire = require.context("./svg", false, /\.svg$/);
// 此时返回一个函数，这个函数接受request参数，用于require的导入
// 该函数提供三个属性, 可以通过 svgRequire.keys() 获得所有的svg图标
// 遍历图标，把图标作为request参数传入svgRequire导入函数中,完成本地svg图标的导入
console.log(svgRequire.keys());
svgRequire.keys().forEach((svgIcon) => svgRequire(svgIcon));

export default (app) => {
  app.component("svg-icon", SvgIcon);
};
