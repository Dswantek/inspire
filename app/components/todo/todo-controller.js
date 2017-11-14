function TodoController() {
	// new up the TodoService that has already been configured for your use
	// You will need four methods
	// getTodos should request your api/todos and give an array of todos to your callback fn
	// addTodo takes in a todo and posts it to the server
	// toggleTodoStatus takes in a todo marks its status as completed and puts it to the server
	// removeTodo takes in a todoId and sends a delete request to the server
	// **** HINT: Everytime you make a change to any todo don't forget to get the todo list again
	var todoService = new TodoService()

	// Use this getTodos function as your callback for all other edits
	function getTodos() {
		//FYI DONT EDIT ME :)
		todoService.getTodos(draw)
	}

	var todosFormElem = document.getElementById('add-todo-form')
	var todoShowButton = document.getElementById('todo-show-button')


	function draw(todoList) {
		//WHAT IS MY PURPOSE?
		//BUILD YOUR TODO TEMPLATE HERE
		var count = 0
		var template = ''
		//DONT FORGET TO LOOP
		for (var i = 0; i < todoList.length; i++) {
			var todo = todoList[i]
			if (todo.completed == true) {
				count--
				template += `
				<div class="checkbox">
				<label><input checked type="checkbox" onclick="app.controllers.todoController.toggleTodoStatus(${i})">${todo.description}</label><i class="glyphicon glyphicon-trash pull-right" onclick="app.controllers.todoController.removeTodo(${i})"></i>
				</div>
				`
			}else{
				count++
				template += `
				<div class="checkbox">
					<label><input type="checkbox" onclick="app.controllers.todoController.toggleTodoStatus(${i})">${todo.description}</label><i class="glyphicon glyphicon-trash pull-right" onclick="app.controllers.todoController.removeTodo(${i})"></i>
				</div>
				`
			}

		}
		document.getElementById('todo').innerHTML = template
		document.getElementById('counter').innerHTML = count
	}


	this.addTodoFromForm = function (e) {
		e.preventDefault() // <-- hey this time its a freebie don't forget this
		// TAKE THE INFORMATION FORM THE FORM
		var form = e.target
		// DONT FORGET TO BUILD YOUR TODO OBJECT
		var todo = {
			description: form.todo.value,
			completed: false
		}

		// todosFormElem.classList.toggle('hidden', true)


		//PASSES THE NEW TODO TO YOUR SERVICE
		//DON'T FORGET TO REDRAW THE SCREEN WITH THE NEW TODO
		//YOU SHOULDN'T NEED TO CHANGE THIS
		todoService.addTodo(todo, getTodos)
		//^^^^^^^ EXAMPLE OF HOW TO GET YOUR TOODOS AFTER AN EDIT
		todoService.getTodos(draw)
	}

	this.toggleTodoStatus = function (todo) {
		// asks the service to edit the todo status
		todoService.toggleTodoStatus(todo, getTodos)
		// YEP THATS IT FOR ME
	}

	this.removeTodo = function (todo) {
		// ask the service to run the remove todo with this id
		todoService.removeTodo(todo, getTodos)
		// ^^^^ THIS LINE OF CODE PROBABLY LOOKS VERY SIMILAR TO THE toggleTodoStatus
	}

	// IF YOU WANT YOUR TODO LIST TO DRAW WHEN THE PAGE FIRST LOADS WHAT SHOULD YOU CALL HERE???

	var formstate = true

	this.showAddTodoForm = function showAddTodoForm() {
		if (formstate) {
			todoShowButton.innerText = 'Add'
			todoShowButton.className = 'btn btn-info'
			todosFormElem.classList.add('hidden')
			formstate = false
		} else {
			todoShowButton.innerText = 'Cancel'
			todoShowButton.className = 'btn btn-danger'
			todosFormElem.classList.remove('hidden')
			formstate = true
		}
	}


	getTodos()


}
