const _ = require("underscore");
const github = require("./github.js");

async function getServerMemberDetailsFromDB() {
	let userdetails = await github.getServerMemberDetails(); 
	return userdetails[0];
}

async function postServerMemberDetailsFromDB(details) {
	let newdetails = { "db" : [] }
    let mp = {}
    for (var user in details) {
        mp[user] = details[user];
    }
    newdetails["db"].push(mp);
	await github.postServerMemberDetails(newdetails); 
}

async function findCommitPoints(username) {
	let userdetails = await github.getServerMemberDetails();
	userdetails = userdetails[0];
	for (var user in userdetails) {
		if(user == username) 
			return userdetails[user].commit;
	}
	return 0;
}

async function findIssuePoints(username) {
	let userdetails = await github.getServerMemberDetails();
	userdetails = userdetails[0];
	for (var user in userdetails) {
		if(user == username) 
			return userdetails[user].issue;
	}
	return 0;
}

async function findTotalPoints(username) {
	let userdetails = await github.getServerMemberDetails();
	userdetails = userdetails[0];
	for (var user in userdetails) {
		if(user == username) 
			return userdetails[user].total;
	}
	return 0;
}

async function findPRPoints(username, channel) {
	let userdetails = await github.getServerMemberDetails();
	userdetails = userdetails[0];
	for (var user in userdetails) {
		if(user == username) {
			for(var c in userdetails[user].pr) {
				return userdetails[user].pr[c]
			}
		}
	}
	return 0;
}

exports.findCommitPoints = findCommitPoints;
exports.findIssuePoints = findIssuePoints;
exports.findPRPoints = findPRPoints;
exports.findTotalPoints = findTotalPoints;
exports.getServerMemberDetailsFromDB = getServerMemberDetailsFromDB;
exports.postServerMemberDetailsFromDB = postServerMemberDetailsFromDB;