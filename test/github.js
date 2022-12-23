const got  = require('got');

const token = "token " + "YOUR TOKEN";
const urlRoot = "https://api.github.com";

async function getServerMemberDetails() {
	const url = urlRoot + "/db/servermembers";
	const options = {
		method: 'GET',
		headers: {
			"content-type": "application/json",
			"Authorization": token
		}
	};

	// Send a http request to url
	let details = await got(url, options);
	return JSON.parse(details.body);
}

async function postServerMemberDetails(userdetails) {
	//console.log("Posting ", userdetails)
	const url = urlRoot + "/db/servermembers";
	const options = {
		method: 'POST',
		headers: {
			"Authorization": token
		},
		body: JSON.stringify(userdetails)
	};
	// Send a http request to url
	let details = await got(url, options);
	return details.body;
}

exports.getServerMemberDetails = getServerMemberDetails;
exports.postServerMemberDetails = postServerMemberDetails;
