//validation massage
function validationMassage(msg, type) {
	return `
    <div class="alert alert-${type} alert-dismissible fade show"
    role="alert" >${msg} 
<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>`;
}
validationMassage();

//data send to local storage

function dataSend(arr, key) {
	data = JSON.stringify(arr);
	localStorage.setItem(key, data);
	return true;
}
dataSend();

//data get from local storage

function dataGet(key) {
	let data = JSON.parse(localStorage.getItem(key));
	return data ? data : false;
}
dataGet();

//data remove from local storage
function dataRemove(key) {
	localStorage.removeItem(key);
	return true;
}
dataRemove();
