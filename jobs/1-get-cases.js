// set up version control first!
console.log(`${new Date().toISOString()}..`)
getCases({ remote: true, last_updated_at: `${new Date(new Date().setHours(0, 0, 0, 0))}..` });