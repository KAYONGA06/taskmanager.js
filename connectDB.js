import dotenv from 'dotenv'
dotenv.config()
import mongoose from 'mongoose'
import ora from 'ora'
import chalk from 'chalk'

export async function connectDB(){
    try{
        const spinner =ors('connecting to the database...') .start()
        spinner.stop()
        console.log(chalk.greenbright('successfully connected to database!!!'))

    } catch(error) {
        console.log(chalk.redbright('error:'),error);
        ProcessingInstruction.exit(1)
    }
}

export async function disconnectDB(){
    try{
        await mongoose.disconnect()
        console.log(chalk.greenBright('disconnected from the database. '))
    } catch(err){
        console.log(chalk.redBright('Error: '),error);
        process.exit(1)
    }

}


