const superagent = require('superagent');
const express = require('express');

const app = express();

// 获取列表
app.get('/getList', (rootreq, rootres) => {
  rootres.header('Access-Control-Allow-Origin', '*');
  rootres.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
  rootres.header('Access-Control-Allow-Headers', 'X-Requested-With');
  rootres.header('Access-Control-Allow-Headers', 'Content-Type');

  const {
    fundCode,
    startDate,
    endDate,
    pageSize
  } = rootreq.query;

  const callbackFucStr = 'jQuery183031197449169840485_1573007422814';

  const reptileUrl = `http://api.fund.eastmoney.com/f10/lsjz?callback=${callbackFucStr}&fundCode=${fundCode}&pageIndex=1&pageSize=${pageSize}&startDate=${startDate}&endDate=${endDate}&_=1573007437889`;

  superagent.get(reptileUrl)
    .set('Accept', '*/*')
    .set('Accept-Language', 'zh-CN,zh;q=0.9')
    .set('Accept-Encoding', 'gzip, deflate')
    .set('Pragma', 'no-cache')
    .set('Referer', 'http://fundf10.eastmoney.com/jjjz_100032.html')
    .set('User-Agent', 'Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/78.0.3904.87 Safari/537.36')
    .set('Cookie', 'qgqp_b_id=c635d33b4d446a13f46a66eea6872c5c; EMFUND1=null; EMFUND2=null; EMFUND3=null; EMFUND4=null; EMFUND5=null; EMFUND6=null; EMFUND7=null; EMFUND8=null; EMFUND0=null; EMFUND9=11-06 10:30:03@#$%u5BCC%u56FD%u4E2D%u8BC1%u7EA2%u5229%u6307%u6570%u589E%u5F3A@%23%24100032; st_si=55988030695388; st_pvi=85185825910210; st_sp=2019-09-30%2009%3A41%3A05; st_inirUrl=https%3A%2F%2Fwww.baidu.com%2Flink; st_sn=1; st_psi=20191106103003311-0-1320550964; st_asi=delete')
    .end((err) => {
      let returnText = err.rawResponse.replace(`${callbackFucStr}(`, '');
      returnText = returnText.substr(0, returnText.length - 1);
      rootres.send(returnText);
    });
});

app.listen(8011, () => {

});
