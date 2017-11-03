/* globals module */

const https = require('https');

module.exports = {
  'Simple Test': function(browser) {
    browser
      .url('http://localhost:3000')
      .waitForElementVisible('#root', 10000)
      .assert.containsText('#root h1', 'Hello')
      .waitForElementVisible('li#image', 2000)
      .click('li#image a')
      .waitForElementVisible('img', 2000)
      .pause(1000)
      .end();
  },
  // TODO: this reports pass/fail to saucelabs but is flakey and slow
  // teardown: reportToSauce,
};

// function reportToSauce() {
//   const currentTest = this.client.currentTest;
//   const username = this.client.options.username;
//   const sessionId = this.client.capabilities['webdriver.remote.sessionid'];
//   const accessKey = this.client.options.accessKey;

//   if (!this.client.launch_url.match(/saucelabs/)) {
//     console.log('Not saucelabs ...');
//     return;
//   }

//   if (!username || !accessKey || !sessionId) {
//     console.log(this.client);
//     console.log('No username, accessKey or sessionId');
//     return;
//   }

//   const passed = currentTest.results.passed === currentTest.results.tests;

//   const data = JSON.stringify({
//     passed,
//   });

//   const requestPath = `/rest/v1/${username}/jobs/${sessionId}`;

//   function responseCallback(res) {
//     res.setEncoding('utf8');
//     console.log('Response: ', res.statusCode, JSON.stringify(res.headers));
//     res.on('data', function onData(chunk) {
//       console.log('BODY: ' + chunk);
//     });
//     res.on('end', function onEnd() {
//       console.info('Finished updating saucelabs');
//     });
//   }

//   try {
//     console.log('Updating saucelabs', requestPath);

//     const req = https.request(
//       {
//         hostname: 'saucelabs.com',
//         path: requestPath,
//         method: 'PUT',
//         auth: `${username}:${accessKey}`,
//         headers: {
//           'Content-Type': 'application/json',
//           'Content-Length': data.length,
//         },
//       },
//       responseCallback
//     );

//     req.on('error', function onError(e) {
//       console.log('problem with request: ' + e.message);
//     });
//     req.write(data);
//     req.end();
//   } catch (error) {
//     console.log('Error', error);
//   }
// }
