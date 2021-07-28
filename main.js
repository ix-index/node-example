var axios = require('axios');

const baseUrl = 'https://api.ix-index.com/v1/';

const token = '<your api token>';

const instance = axios.create({
	baseURL: baseUrl,
	headers: { 
		'Authorization': 'Bearer '+token
	}
});

const fetchData = async() => {
	var response = await instance.get('index/ixci');
	var data = response.data.data;
	console.log(data.value);
}
	
setInterval(fetchData, 15000);