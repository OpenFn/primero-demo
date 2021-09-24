// set up version control first!
getCases({
  remote: true,
}, state => {
  console.log(state.data);
  return state;
});