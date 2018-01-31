import {assert} from 'chai'
import addNum from '../src/js/addNum'

describe('测试index.js',()=> {
  describe('测试addNum函数', ()=> {
    it('两数相加结果为两个数字的和', ()=> {
      assert.equal(addNum(1,2),3)
    })
  })
})

