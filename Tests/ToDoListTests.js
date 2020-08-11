import {ToDoList} from "../Model/ToDoList.js"
import {ToDoItem} from "../Model/ToDoItem.js"
import {ValidateToDoListJson} from "../Utils/FormatValidator.js"

describe('Testing the functionality, this is the checklist', function() {

  let task_for_test = "Do unit tests";
  let new_task_for_test = "Do MORE unit tests";
  let invalid_empty_task_for_test = "";
  let invalid_toolong_task_for_test = "Je suis une tache beaucoup trop long pour etre créé et utilisé par cette application";
  let todo_list;
  let todo_list_json = {
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

  beforeEach(function(){
    todo_list = new ToDoList();
  })

  it('Should create an empty ToDoList', function() {

    expect(todo_list instanceof ToDoList).toBe(true);
    expect(todo_list.GetItems().length).toBe(0);
  })

  it('Should add an item to a ToDoList', function() {


    todo_list.AddItem(task_for_test)
    expect(todo_list.GetItems().length).toBe(1);
    todo_list.AddItem(new_task_for_test)
    expect(todo_list.GetItems().length).toBe(2);
  })

  it('Should not add an item to a ToDoList', function() {

    expect(function(){todo_list.AddItem(invalid_empty_task_for_test)}).toThrow(new Error("Input is empty"));
    expect(function(){todo_list.AddItem(invalid_toolong_task_for_test)}).toThrow(new Error("Input is too long"));
  })

  it('Should retrieve an ToDoItem from a ToDoList based on an existing task', function() {

    todo_list.AddItem(task_for_test)

    let item_to_test = todo_list.GetItem(task_for_test)
    expect(item_to_test instanceof ToDoItem).toBe(true);
    expect(item_to_test.GetTask()).toBe(task_for_test);

    let empty_item_to_test = todo_list.GetItem(new_task_for_test)
    expect(empty_item_to_test).toBe(undefined);

  })

  it('Should update an existing ToDoItem task from a ToDoList', function() {

    todo_list.AddItem(task_for_test)

    expect(todo_list.GetItems().length).toBe(1);
    todo_list.ChangeItem(task_for_test,new_task_for_test)
    expect(todo_list.GetItems().length).toBe(1);

    let item_to_test = todo_list.GetItem(new_task_for_test)
    expect(item_to_test instanceof ToDoItem).toBe(true);
    expect(item_to_test.GetTask()).toBe(new_task_for_test);

  })

  it('Should complete an existing ToDoItem task from ToDoList', function() {

    todo_list.AddItem(task_for_test)

    expect(todo_list.GetItem(task_for_test).IsCompleted()).toBe(false);

    todo_list.CompleteItem(task_for_test)

    expect(todo_list.GetItem(task_for_test).IsCompleted()).toBe(true);

  })

  it('Should delete an ToDoItem from a ToDoList based on an existing task', function() {


    todo_list.AddItem(task_for_test)
    expect(todo_list.GetItems().length).toBe(1);
    todo_list.AddItem(new_task_for_test)
    expect(todo_list.GetItems().length).toBe(2);
    todo_list.DeleteItem(task_for_test)
    expect(todo_list.GetItems().length).toBe(1);
    todo_list.DeleteItem(task_for_test)
    expect(todo_list.GetItems().length).toBe(1);

  })

  it('Should create a valid json from an existing ToDoList', function() {

    todo_list.AddItem(task_for_test);
    todo_list.AddItem(new_task_for_test);
    todo_list.CompleteItem(task_for_test);

    let todo_list_json_to_test = todo_list.ToJson();

    
    expect(typeof ValidateToDoListJson(todo_list_json_to_test)).toBe("object");
    expect(todo_list_json_to_test.length).toBe(todo_list_json.length);
    expect(todo_list_json_to_test.ToDoItems.length).toBe(todo_list_json.ToDoItems.length);
    expect(todo_list_json_to_test.ToDoItems[0].task).toBe(todo_list_json.ToDoItems[0].task);
    expect(todo_list_json_to_test.ToDoItems[0].is_completed).toBe(todo_list_json.ToDoItems[0].is_completed);
    expect(todo_list_json_to_test.ToDoItems[1].task).toBe(todo_list_json.ToDoItems[1].task);
    expect(todo_list_json_to_test.ToDoItems[1].is_completed).toBe(todo_list_json.ToDoItems[1].is_completed);

  })

})