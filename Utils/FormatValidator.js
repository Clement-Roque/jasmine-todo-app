function ValidateInputTask(input_task){
	try{
		if (!input_task) throw "empty";
		const validTaskInput = String(input_task);
		if (!validTaskInput) throw "empty";
		if (validTaskInput.length > 50) throw "too long";
		return validTaskInput
	}

	catch(err) {
    	throw new Error("Input is " + err);
  	}

}

function ValidateToDoListJson(todo_list_json){
	try{
		if(todo_list_json.ToDoItems.length != 2 ) throw "This json is not a valid ToDoList Json";

		for(const todo_item of todo_list_json.ToDoItems){
			if(!ValidateInputTask(todo_item.task)) throw "This json is not a valid ToDoList Json";
			if(typeof todo_item.is_completed != "boolean") throw "This json is not a valid ToDoList Json";
		}
		
		return todo_list_json;
	}
	catch(err) {
    	throw new Error("This json is not a valid ToDoList Json");
  	}


}

export {ValidateInputTask,ValidateToDoListJson}