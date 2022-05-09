export const getValues = (state) => {
  console.log("getters çalıştı")
  var json = sessionStorage.getItem("values");
  console.log(json);
  let list = [];
  if (json != null) {
    list = JSON.parse(json);
  }
  state.myArray=list;
  return state.myArray;
}