## Introduction
This example is using `axios` to connect to the API.

## Prerequisites

Before your program connects to the API, you should install the `axios` and `moment` libraries.

To install `axios` and `moment`, type in the below command in your terminal.

```
npm install axios
npm install moment
```

Now you are ready to start using Node JS to interact with the API, make sure you required the `axios` and `moment` libraries into the script.

```
var axios = require('axios');
const moment = require('moment');
```

## Authentication
To start with `axios`, we should create a `axios` instance.

To authenticate, we have to add our API token into the header of the `axios` instance, so the server knows who we are. 
In addition, we can set the `baseURL` for the instance, so we do not have to type in the `baseURL` every requests.

```
const baseUrl = '{{BASE_URL}}';

const token = '<your api token>';

const instance = axios.create({
	baseURL: baseUrl,
	headers: { 
		'Authorization': 'Bearer '+token
	}
});
```

## Write the fetching function
```
const fetchData = async() => {
	var response = await instance.get('index/ixci');
	var data = response.data.data;
	console.log(data.value);
}
```

## Fetching Data with 15 seconds interval
The IX Index series updates their data every 15 seconds. To fetch the data from the API with 15 seconds interval, you can use the code below.
```
const start = async() => {
	await fetchData();
	const timestamp = moment().unix();
	setTimeout(start, (15 - timestamp % 15));
}

start();
```

## Complete Example

[You can also download the example here.](https://github.com/ix-index/node-example)


```
var axios = require('axios');
const moment = require('moment');

const baseUrl = '{{BASE_URL}}';

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

const start = async() => {
	await fetchData();
	const timestamp = moment().unix();
	setTimeout(start, (15 - timestamp % 15));
}

start();
```