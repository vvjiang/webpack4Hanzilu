// 定义所有的css 文件
declare module '*.css' {
  const content: any;
  export default content;
}
// 定义window变量
interface Window{
  r:string[]
}
