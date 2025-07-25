// Importing packages and functions 

import inquirer from "inquirer";
import Todos from '../schema/Todoschema.js'
import { connectDB,disconnectDB } from "../db/connectDB.js";
import ora from "ora"
import chalk from "chalk"

export async function getTaskcode(){
    try{
        //prompiting the user to enter the todo code
        const answers =await inquirer.prompt([
            {name: 'code' ,'meassage':'Enter the code of the todo: ',type: 'input'},

        ])
        //trimming user's response so that the todo code does not contain any starting or trailing white spaces

        answers.code = answers.code.trim()

        return answers

    } catch (error) {
        console.log('something went wrong ...\n',error)

    }
}

export default async function deleteTask (){

    try{
        //obtaining the todo code provided by user 
        const usercode =await getTaskcode()

        //connecting to the database
        await connectDB()

        //starting the spinner 
        const spinner =ora('finding and deleting the todo...').start ()
        
        //deleting the task 

        const response = await Todos.deleteone({code:usercode.code})

        //stoppping the spinner 
        spinner.stop()

        //checking the delete operation 

        if (response.deletedcount === 0){

            console.log(chalk.greenBright('could not find any todo matching the provided name.Deletionfailed.'))


        } else {
            console.log(chalk.greenBright('Deleted Task Successfully'))
        }

        // Disconnecting from the database
        await disconnectDB()

    }catch (error) {

        //Error Handling 
        console.log('something went wrong , Error: ', error)
        process.exit(1)

       }

    }

    
