// set up version control first!
getCases({
  remote: true,
  last_updated_at: '2021-09-24T00:00:00.000Z',
}, state => {
  console.log(state.data);
  return state;
});