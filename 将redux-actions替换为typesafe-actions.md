## 前言

redux-actions主要是用于简化redux的操作。

关于它可以参考[github](https://github.com/redux-utilities/redux-actions)或者之前我的博客：[Redux与它的中间件：redux-thunk，redux-actions，redux-promise，redux-saga](https://www.cnblogs.com/vvjiang/p/9505646.html#redux-actions%E7%AE%80%E5%8C%96redux%E7%9A%84%E4%BD%BF%E7%94%A8)。

在Typescript出现后，使用redux-actions进行类型检测和推断时会有失败和不准确的情况出现，而typesafe-actions就是为了解决这个问题而诞生的。

## 官方文档对redux-actions和typesafe-actions的比较

两者的区别typesafe-actions官方已经列出来了，请参考这个链接:[对比redux-actions和typesafe-actions](https://github.com/piotrwitek/typesafe-actions#compare-to-others)。

我这里也简单罗列一下,大家可以参照上面的文档看一下：

1. action只有type时，结果不带为空的payload。
   这个算是对redux-actions的小优化，可以忽略。
2. 可选参数出现时，如果参与payload的运算，那么typescript对redux-actions类型推断有误，而对typesafe-actions推断更准确。
3. 带有meta时破坏了，redux-actions生成的函数参数已经完全没有了类型安全性。

简单来说，其实两者没啥太大的区别，仅仅只是在使用typescript时，typesafe-actions比redux-actions的类型推断更准确。

基于这个理由，如果我们使用typescript，将redux-actions替换为typesafe-actions完全是有必要的。

## 从redux-actions迁移到typesafe-actions

简单的安装：

    npm i typesafe-actions

无需任何配置。

这里先给出官方的迁移文档：[迁移文档](https://github.com/piotrwitek/typesafe-actions#migrating-from-redux-actions-to-typesafe-actions)。

文档很简单，但是这个是typesafe-actions 4.X的迁移文档，到了5.X的迁移还是有区别的，不过更简单。

使用createAction时,只要把

    import { createAction } from 'redux-actions';

改为：

    import { createAction } from 'typesafe-actions';

即可，语法什么的都不需要修改。

而此时如果你依然使用

    import { handleActions } from 'redux-actions'

中的handleActions去解析typesafe-actions产生的action，也不会有没有任何问题。

当然我们不可能这么做，所以我们需要修改处理action的代码，请看下方示例：

    import { handleActions } from 'redux-actions';
    import * as T from './actionTypes';

    export interface PageMainReduxState {
      dataList: string[]
    }

    const initialState: PageMainReduxState = {
      dataList: []
    };

    const pageMainReducer = handleActions({
      [T.GET_DATA_LIST]:
      {
        next(state, action: any) {
          if (!action.payload.data.Data) {
            return {
              // ...state, // 此处使用展开操作符存在问题，不明原因，暂时搁置
              dataList: []
            }
          }
          return {
            dataList: action.payload.data
          }
        },
        throw(state) {
          return state;
        },
      }
    }, initialState);

    export default pageMainReducer;

然后我们使用typesafe-actions后，代码为：


