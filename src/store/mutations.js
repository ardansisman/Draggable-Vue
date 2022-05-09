export const setValue = (state, payload) => {
  console.log("mutation çalıştı")
  state.myArray.push(payload);
  sessionStorage.setItem("values", JSON.stringify(state.myArray));
  
}