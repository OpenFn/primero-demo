upsert(
  'users', // the DB table
  'ON CONSTRAINT users_pkey', // a DB column with a unique constraint OR a CONSTRAINT NAME
  { name: 'Elodie', id: 7 },
  { writeSql:true, execute: true }
);