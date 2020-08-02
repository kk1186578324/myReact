
var Mock = require('mockjs')
var data = Mock.mock("/news",{
    //"/mock"是通过ajax获取数据时填写的地址，可以随意写。但要和ajax请求时填写的地址一致。
    "data":[1,2,3]
})
// 输出结果
export default data
