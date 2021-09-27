getCases({
  status: 'open'
  //last_updated_at: '2021-09-27T00:00:00.000Z..' //This returns 1 case
  //last_updated_at: `${new Date().toISOString()}..` //This returns 0 cases; maybe issue with timezones?
});