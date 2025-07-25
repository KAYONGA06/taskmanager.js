// Importing packages and functions
import { connectDB,disconnectDB } from '../db/connectDB.js'
import Todo from '../schema/Todoschema.js'
import chalk from 'chalk'
import ora from 'ora'

export default async function readTask(){

    try{
        // connecting to the database 
        await connectDB()

        //starting the spinner
const spinner = ora('Fetching all todos...').start()

//fetching all the todos from the database 
const todos =await Todo.find({})

//stopping the spinner 
spinner.stop()

//check if todos exist or not 
if (todos.length===0){

    console.log(chalkBright('you do not have any tasks yet'))



}else {
    todos.forEach(todo=>{
        console.log(
            chalk.cyanBright('Todo code: ')+ todo.code + '\n'  +
            chalk.blueBright('Name: ')+ todo.name + '\n'  +
            chalk.yellowBright('Description: '  ) +todo.details+ '\n'

        )
    })
}

//disconnect from the database 

await disconnectDB()
    
    }catch (error) {

        //error Hamdling 
        console.log('something went wrong, Error: ', error)
        process.exit(1)


    }

}

readTask()

