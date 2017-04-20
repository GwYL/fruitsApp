function Store(nameSpace, data) {
	
	if(data) {

		localStorage.setItem(nameSpace, JSON.stringify(data));

		return;

	}

	return JSON.parse(localStorage.getItem(nameSpace)) || {};

}