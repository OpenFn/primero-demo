fn(state => {
  console.log(state.data);
  return state;
});

upsertMany(
  'cases', // the DB table
  'primero_case_id', // a DB column with a unique constraint OR a CONSTRAINT NAME
  state => state.data.map(c => ({ first_name: c.name_first, last_name: c.name_last, gender: c.sex, dob: c.date_of_birth}))
);