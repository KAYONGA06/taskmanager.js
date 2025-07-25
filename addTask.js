import inquirer from "inquirer";
import { connectDB,disconnectDB } from'../db/connectDB.js'
import Todos from "../schema/Todoschema.js";
import ora from "ora";
import chalk from "chalk";

async function input (){
    const answers =await inquirer.prompt([
        {name: 'name',message: 'Enter name of the task:',type: 'input'},
        {name:'details',message:'Enter the details of the task:',type: 'input'},

    ])

    return answers 
}

const askquestions =async() => {

    const todoarray=[]
    let loop =false

    do{
        const userres=await input()
        todoarray.push(userRes)
        const comfirmQ=await inquirer.prompt([{name:'comfirm',message:'Do you want to add more tasks?',type: 'confirm' }])
        if(confirmQ.comfirm){
            loop=true

        } else{
            loop=false

        }
        
   } while(looop)

    return todoarray
           
}

export default async function addTask() {
    try {
        //calling askquestions() to get array of todo's
        const useResponse =await askquestions()

        // connecting to the database 

        await connectDB()

        //loooking over every todo in the folllowing text message using ora 

        let spinner = ora('creating the todos...').start()

        //looking over every todo in the useResponse array 
        //and saving each todo in the database 

        for (let i=0; i<userResponse.length; i++){
            const response =useResponse[i]
            await Todos.create(response)
        }
    //stopping the spinner and displaying the success message

    spinner.stop()
    console.log(
        chalk.greenBright('created the todos!')
    )

    //disconnecting the database 
    await disconnectDB()

}catch (error) {

    //error Handling

    console.log('something went wrong ,Error:', error)

    process.exit(1)
}


}

