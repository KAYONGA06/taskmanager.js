import {Schema,model} from 'mongoose'
import {nanoid} from 'nanoid'

const Todoschema=new Schema({
    name:{
        type:String,
        require:true,
        trim:true
    },
    detail:{
        type:String,
        required: true,
        trim:true

    },
    status:{
         type:String,
    required: true,
    enum:['completed','pending'],
    default:'pending',
    trim:true 

    },
    code: {
        type:String,
        required: true,
        default:'code',
        trim: true
    }
   
}, {timestamps:true})

Todoschema.pre('save',function(next){
    this.code=nanoid(10)
    next()
})

const Todos= model('Todos',Todoschema)
export default Todos
