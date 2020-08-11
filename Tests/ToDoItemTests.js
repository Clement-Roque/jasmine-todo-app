import {ToDoItem} from "../Model/ToDoItem.js"



describe('Testing the ToDo Item functionalities ', function() {

  let task_for_test = "Do unit tests";
  let new_task_for_test = "Do MORE unit tests";
  let invalid_empty_task_for_test = "";
  let invalid_toolong_task_for_test = "Je suis une tache beaucoup trop long pour etre créé et utilisé par cette application";


  it('Should create an non completed ToDoItem ', function() {

    let item_to_test = new ToDoItem(task_for_test);

    expect(item_to_test instanceof ToDoItem).toBe(true);

    expect(typeof item_to_test.GetTask()).toBe("string")
    expect(item_to_test.GetTask()).toBe(task_for_test);

    expect(typeof item_to_test.IsCompleted()).toBe("boolean");
    expect(item_to_test.IsCompleted()).toBe(false);
  })

  it('Should not create a ToDoItem :', function() {

    expect(function(){new ToDoItem()}).toThrow(new Error("Input is empty"));
    expect(function(){new ToDoItem(invalid_empty_task_for_test)}).toThrow(new Error("Input is empty"));
    expect(function(){new ToDoItem(invalid_toolong_task_for_test)}).toThrow(new Error("Input is too long"));

  })

  it('Should complete an un-completed ToDoItem', function() {

    let item_to_test = new ToDoItem(task_for_test);

    item_to_test.Complete()

    expect(typeof item_to_test.IsCompleted()).toBe("boolean");
    expect(item_to_test.IsCompleted()).toBe(true);

    item_to_test.Complete()

    expect(typeof item_to_test.IsCompleted()).toBe("boolean");
    expect(item_to_test.IsCompleted()).toBe(true);

  })

  it('Should change the task of an un-completed ToDoItem', function() {

    let item_to_test = new ToDoItem(task_for_test);

    item_to_test.ChangeTask(new_task_for_test);

    expect(typeof item_to_test.GetTask()).toBe("string")
    expect(item_to_test.GetTask()).toBe(new_task_for_test);

  })

  it('Should not change the task of an un-completed ToDoItem', function() {

    let item_to_test = new ToDoItem(task_for_test);

    expect(function(){item_to_test.ChangeTask(invalid_empty_task_for_test)}).toThrow(new Error("Input is empty"));
    expect(function(){item_to_test.ChangeTask(invalid_toolong_task_for_test)}).toThrow(new Error("Input is too long"));

    item_to_test.Complete()
  
    item_to_test.ChangeTask(new_task_for_test);
    expect(typeof item_to_test.GetTask()).toBe("string")
    expect(item_to_test.GetTask()).toBe(task_for_test);
  
  })

})