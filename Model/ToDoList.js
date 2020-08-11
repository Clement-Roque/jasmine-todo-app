import {ToDoItem} from "../Model/ToDoItem.js"
import {ValidateToDoListJson} from "../Utils/FormatValidator.js"

class ToDoList {

  todo_items;

  constructor(){
  	this.todo_items=[]
  }

  GetItems(){
  	return this.todo_items
  }

  GetItem(item_task){

    return this.todo_items.find(todo_item => todo_item.task == item_task)
  }

  ChangeItem(item_task,new_item_task)
  {
    this.todo_items.find(todo_item => todo_item.task == item_task).ChangeTask(new_item_task)
  }

  CompleteItem(item_task)
  {
    this.todo_items.find(todo_item => todo_item.task == item_task).Complete()
  }

  AddItem(item_task){

    let new_item = new ToDoItem(item_task)

  	this.todo_items.push(new_item)
  }

  DeleteItem(item_task){

    this.todo_items = this.todo_items.filter(todo_item => todo_item.task !== item_task)
  }

  ToJson(){
    let json_todo_list = {"ToDoItems":[]}
    for (const todo_item of this.GetItems()){
      json_todo_list.ToDoItems.push({
        "task":todo_item.GetTask(),
        "is_completed":todo_item.IsCompleted()
      });
    }
    return ValidateToDoListJson(json_todo_list);
  }

}
export{ToDoList}