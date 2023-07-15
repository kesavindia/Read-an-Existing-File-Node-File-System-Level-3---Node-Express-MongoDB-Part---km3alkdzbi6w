const fs = require("fs/promises");
const fileName = "myfile.txt";
const reader = async (fileName) => {
  // write code here
	// dont change function name
  
  try{
    return await fs.readFile(filename,"utf-8");
  }
  catch(error){
    console.error("Error reading file:",error);
    throw error;
  }
};


module.exports =  reader ;
