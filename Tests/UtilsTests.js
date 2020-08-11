import {ValidateInputTask,ValidateToDoListJson} from "../Utils/FormatValidator.js"

let valid_tasks = ["je suis valide",13, "salut"+23];
let too_long_task ="Je suis une tache beaucoup trop long pour etre créé et utilisé par cette application";
let empty_task = "";
let null_task = null;
let undefined_task = undefined;

let valid_todo_list_json = {
                         "ToDoItems":[
                            {
                               "task":"Do unit tests",
                               "is_completed":true
                            },
                            {
                               "task":"Do MORE unit tests",
                               "is_completed":false
                            }
                         ]
                      };
let invalid_todo_list_json = {
                         "ToDoItem":[
                            {
                               "task":"Do unit tests",
                               "is_completed":true
                            },
                            {
                               "task":"Do MORE unit tests",
                               "is_completed":"hello"
                            }
                         ]
                      };

describe('Testing Utils libraries', function() {

	it('ValidateInputTask : Should validate the following input task name', function() {


	    for (const valid_task of valid_tasks)
	    {
		    expect(typeof ValidateInputTask(valid_task)).toBe("string");
	    }
	})

	it('ValidateInputTask : Should not validate the following input task name', function() {

	    expect(function(){ValidateInputTask(too_long_task)}).toThrow(new Error("Input is too long"));
	    expect(function(){ValidateInputTask(empty_task)}).toThrow(new Error("Input is empty"));
	    expect(function(){ValidateInputTask(null_task)}).toThrow(new Error("Input is empty"));
	    expect(function(){ValidateInputTask(undefined_task)}).toThrow(new Error("Input is empty"));
  	})

  	it('ValidateToDoListJson : Should not validate the following json todoList', function() {
	    expect(function(){ValidateToDoListJson(invalid_todo_list_json)}).toThrow(new Error("This json is not a valid ToDoList Json"));
  	})

  	it('ValidateToDoListJson : Should validate the following json todoList', function() {
	    expect(typeof ValidateToDoListJson(valid_todo_list_json)).toBe("object");
  	})

 
})