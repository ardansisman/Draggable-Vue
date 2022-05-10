export const setValue = (state, payload) => {
  console.log("set mutation çalıştı")
  state.myArray.push(payload);
  sessionStorage.setItem("values", JSON.stringify(state.myArray));
}
export const changeValue = (state, payload) => {
  console.log("change mutation çalıştı")
  sessionStorage.setItem("values", JSON.stringify(payload));
}