const chai = require("chai");
const expect = chai.expect;
const nock = require("nock");
const fs = require('fs');
const main = require("./mock_main.js");
const data = require("./mock_data.json")
var dbPath = 'test/mock_data.json'


process.env.NODE_ENV = 'test'

function writeFile(filePath, data) {
  fs.writeFile(filePath, JSON.stringify(data), err =>{
      if(err){
          console.log(err);
      } else {
          console.log('File successfully written!');
      }
  });
}

describe('Mock Testing', function () {

  //MOCK SERVICE
  var mockGetService = nock("https://api.github.com")
    .persist() 
    .get("/db/servermembers")
    .reply(200, JSON.stringify(data.db));

  var mockPostService = nock("https://api.github.com")
    .persist() 
    .post("/db/servermembers")
    .reply(201, (uri, requestBody) => {
      console.log("writing", requestBody);
      writeFile(dbPath, JSON.parse(requestBody))
    });


  describe('#findCommitPoints()', function () {
    it('should find the reward details of the commits made by user', async function () {
      let points = await main.findCommitPoints("sshubha");
      expect(points).to.equal(46);
    });
  });

  describe('#findIssuePoints()', function () {
    it('should find the reward details of the issues closed by user', async function () {
      let points = await main.findIssuePoints("sshubha");
      expect(points).to.equal(2);
    });
  });

  describe('#findPRPoints()', function () {
    it('should find the reward details of the positve statements on a particular channel by user', async function () {
      let points = await main.findPRPoints("sshubha", "949414533905154108");
      expect(points).to.equal(7);
    });
  });

  describe('#findTotalPoints()', function () {
    it('should find the total of all the reward collected by a user', async function () {
      let points = await main.findTotalPoints("sshubha");
      expect(points).to.equal(58);
    });
  });

});
