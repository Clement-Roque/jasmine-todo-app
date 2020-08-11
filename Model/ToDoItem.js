import {ValidateInputTask} from "../Utils/FormatValidator.js"

class ToDoItem {

  task;
  is_completed;


  constructor(task_to_validate){

    this.task = ValidateInputTask(task_to_validate);

    this.is_completed = false;
  }

  GetTask(){
  	return this.task;
  }

  IsCompleted(){
    return this.is_completed;
  }

  Complete(toDoItems){
  	if(!this.is_completed)
    {
      this.is_completed = true
    }
  }

  ChangeTask(newTask){
    if(!this.is_completed)
    { 
        this.task=ValidateInputTask(newTask);
    }
  }

}
export {ToDoItem}