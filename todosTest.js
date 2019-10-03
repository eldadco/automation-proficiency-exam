const todospage = require('./todos')

let T = new todospage()
async function main()
{
   await T.get_url('https://elevation-local-todo.herokuapp.com/')
  // await T.insertAndDelete("eldad")
//  await T.insertAndComplete("eldad")
   //await T.insertTwoDeleteFirst("Eldad","Ron")
    
}

main()
