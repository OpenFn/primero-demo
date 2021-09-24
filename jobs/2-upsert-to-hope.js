// filter to only show those cases updated today to demo custom JS...
// fn(state => {
//   const changedCases = state.data.filter(c => {
//     return c.updated_at >= Date.now();
//   })
  
//   return state;
// });

upsertMany(
  'cases', // the DB table
  'primero_case_id', // a DB column with a unique constraint OR a CONSTRAINT NAME
  state => state.data.map(c => ({
    primero_case_id: c.case_id, 
    first_name: c.name_first, 
    last_name: c.name_last, 
    gender: c.sex, 
    dob: c.date_of_birth
  }))
);