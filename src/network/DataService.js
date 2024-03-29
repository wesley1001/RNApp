'use strict';
var SERVER = 'http://192.168.0.11:9000/api';

function getProjectList(){
    return fetch(`${SERVER}/users`)
		.then((response) => response.json())
		.then((responseData) => {
			console.info("加载用户完成：",responseData);
			return responseData;
		});
}

function getProjectIssuesList(projectId){
    return fetch(`${SERVER}/${projectId}`)
		.then((response) => response.json())
		.then((responseData) => {
			console.info(`加载\"用户${projectId}\"完成：`,responseData);
			return responseData;
		});
}

function getIssuesList(){
    return fetch(`${SERVER}/issues`)
		.then((response) => response.json())
		.then((responseData) => {
			console.info("加载议题完成：",responseData.data);
			return responseData.data;
		});
}

function addUser (data) {
  return fetch(`${SERVER}/users`, {
	  method: 'POST',
	  headers: {
		'Accept': 'application/json',
		'Content-Type': 'application/json',
	  },
	  body: JSON.stringify(data)
	})
}

function deleteUser (userid) {
  return fetch(`${SERVER}/users/${userid}`, {
    method: 'delete',
  })
}


var DataService = {
	'getProjectList':getProjectList,
	'getIssuesList':getIssuesList,
	'getProjectIssuesList': getProjectIssuesList,
  'addUser':addUser,
  'deleteUser':deleteUser
};

module.exports = DataService
