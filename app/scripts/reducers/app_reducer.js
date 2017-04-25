export default function AppReducer(state, action) {
  if (state === undefined) {
    return {};
  }

  console.log("Unhandled State!");
  return state;
}
