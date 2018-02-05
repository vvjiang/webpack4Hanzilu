import addNum from '../src/js/addNum'

test('两数相加结果为两个数字的和', () => {
    expect(addNum(1, 2)).toBe(3);
});