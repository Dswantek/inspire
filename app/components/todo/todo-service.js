function TodoService() {
	// A local copy of your todos
	var todoList = [];
	var baseUrl = 'https://inspire-server.herokuapp.com/api/todos/DanielSwantek'

	function logError(err) {
		console.error('UMM SOMETHING BROKE: ', err)
		//CAN YOU NOTIFY THE USER IF SOMETHING BREAKS? 
		//do this without breaking the controller/service responsibilities
	}

	this.getTodos = function (draw) {
		$.get(baseUrl)
		.then(function (res) { // <-- WHY IS THIS IMPORTANT????
			console.log(res)
			todoList = res;
				draw(res)
			})
			.fail(logError)
	}

	this.addTodo = function (todo, getTodos) {
		// WHAT IS THIS FOR???
		console.log(todo)
		$.post(baseUrl, todo)
			.then(getTodos) // <-- WHAT DO YOU DO AFTER CREATING A NEW TODO?
	
			.fail(logError)
	}



	this.toggleTodoStatus = function (todoIndex, getTodos) {
		// MAKE SURE WE THINK THIS ONE THROUGH
		//STEP 1: Find the todo by its index **HINT** todoList

		// var index = todoList.indexOf(todo);

		var todo = todoList[todoIndex]

		//STEP 2: Change the completed flag to the opposite of what it is **HINT** todo.completed = !todo.completed
		
		// if(todo.completed == true){
		// 	todo.completed = false
		// }else{
		// 	todo.completed = true
		// }

		todo.completed = !todo.completed

		//STEP 3: Here is that weird Ajax request because $.put doesn't exist
		$.ajax({
			method: 'PUT',
			contentType: 'application/json',
			url: baseUrl + '/' + todoIndex,
			data: JSON.stringify(todo)
		})
			.then(function(){
				getTodos()
			})
				//DO YOU WANT TO DO ANYTHING WITH THIS?
			.fail(logError)
	}

	this.removeTodo = function (todo, getTodos) {
		// Umm this one is on you to write.... It's also unique, like the ajax call above. The method is a DELETE
		var index = todoList.indexOf(todo)
		
		$.ajax({
			method: 'DELETE',
			url: baseUrl + '/' + todo,
			data: JSON.stringify(index)
		})
			.then(getTodos)
			.fail(logError)
	}

}
