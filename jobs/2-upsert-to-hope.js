fn(state => {
  console.log(state.data);
  return state;
});

upsertMany(
  'users', // the DB table
  'email', // a DB column with a unique constraint OR a CONSTRAINT NAME
  [
    { name: 'one', email: 'one@openfn.org' },
    { name: 'two', email: 'two@openfn.org' },
  ]
);