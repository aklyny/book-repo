const config ={
    production:{
        SECRET : process.env.SECRET,
        DATABASE:process.env.MONGODB_URI
    },
    default:{
        SECRET:'password',
        DATABASE:'mongodb://localhost:27017/book_store'
    }

}

exports.get = function get(env){
  return config[env] || config.default      
}