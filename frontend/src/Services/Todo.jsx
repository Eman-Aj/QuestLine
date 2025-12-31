export function getList () {
    return JSON.parse(localStorage.getItem("List"));
};

//Appends and default new item to thec urrent list
export function createItem (newItemText) {

    const currentList = getList();
    // const newItem = newItemText;
    const listSize = Object.keys(currentList).length;

  
    if (newItemText == "") return currentList;

    const newItemId = "" + (listSize + 1);
    const newItemData = {
      text: newItemText,
      subText: "",
      renamed: false,
      status: false,
      position: listSize + 1,
    };

    //Set a new item
    currentList[newItemId] = newItemData;
    
    console.log("Task:", newItemText, '"created"');

    return currentList
};

export function checkItem  (itemKey) {
    var currentList = getList();
    currentList[itemKey].status = !currentList[itemKey].status;
    return currentList
};

export function removeItem (itemKey){
    var currentList = getList();
    const oldPos = currentList[itemKey].position
    // console.log(currentList);
    delete currentList[itemKey];
    // console.log(currentList);

    //Update all the above key
    Object.entries(currentList).forEach(([key, item]) => {
        if (item.position > oldPos) {
          currentList[key].position -= 1
        }
    });


    return currentList
};

export function updateText(itemKey, text){
    var currentList = getList();
    currentList[itemKey].text = text;
    currentList[itemKey].subText = "";
    return currentList
  };

export function reorderList(itemKey, posIncrement){
    //First you update the position numbers
    var currentList = getList();
    const list = getList();
    const oldPos = currentList[itemKey].position

    const listSize = Object.keys(currentList).length;

    if (oldPos + posIncrement < 1) {
      console.log("Already at topmost");
      return currentList;
    } else if(oldPos + posIncrement > listSize){
      console.log("Already bottom most")
      return currentList;
    }

    //Key of the item that we want to move towards
    const otherKey = Object.entries(list)
      .find(([,a]) => a.position === oldPos + posIncrement)[0]
    //Before we do this check the length, and check if negative
    currentList[itemKey].position = oldPos + posIncrement;
    currentList[otherKey].position = oldPos
    
    console.log("Reorderd Items");
    
    return currentList
  };





  //Questify API Connection
  // export async function test(){

  //   const body = getList()

  //   fetch("/api/questify", {
  //     method: "POST",
  //     body: JSON.stringify(body),
  //     headers: {"content-Type": "application/json"}
  //   })
  //   .then((res) => res.json())
  //   .then((data) => console.log(data))
  //   .catch((err) => console.error(err))

  // }