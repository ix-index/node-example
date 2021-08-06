var axios = require('axios');
const moment = require('moment');

const baseUrl = 'https://api.ix-index.com/v1/';

const token = '<your api token>';

const instance = axios.create({
	baseURL: baseUrl,
	headers: { 
		'Authorization': 'Bearer '+token
	}
});

const fetchData = async() => {
	var response = await instance.get('real-time/ixci');
	var data = response.data.data;
	console.log(data.value);
}

const start = async() => {
	await fetchData();
	const timestamp = moment().unix();
	setTimeout(start, (15 - timestamp % 15));
}

start();