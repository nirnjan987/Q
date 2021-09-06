const config={
    production :{
        SECRET: process.env.SECRET,
        DATABASE: process.env.MONGODB_URI
    },
    default : {
        SECRET: 'mysecretkey',
        DATABASE: 'mongodb+srv://Niranjan:1234@niranjan.yypsg.mongodb.net/niranjan?retryWrites=true&w=majority'
    }
}


exports.get = function get(env){
    return config[env] || config.default
}