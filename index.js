class Formatter {
  //add static methods here
  
  static capitalize(string){
    return string.charAt(0).toUpperCase() + string.slice(1)
  }
  
  static sanitize(string){
      let splitted = string.split("")
        splitted.forEach(element => {
            // console.log(element);

        })


        splitted.find(item => {
            if (item === "@") {
                console.log("cool");
                console.log(splitted.indexOf(item));
                splitted.splice(splitted.indexOf(item), 1)
                console.log(splitted);

            }
        })

        splitted.find(item => {
            if (item === "#") {
                console.log("cool");
                // console.log(splitted.indexOf(item));
                splitted.splice(splitted.indexOf(item), 1)
                    // console.log(splitted);

            }
        })
        
                splitted.find(item => {
            if (item === "$") {
                console.log("cool");
                // console.log(splitted.indexOf(item));
                splitted.splice(splitted.indexOf(item), 1)
                    // console.log(splitted);

            }
        })

        // console.log(splitted);
        let newStr = "";
        splitted.forEach(item => {
            newStr += item;


        })


        console.log(newStr);
        
        return newStr

  }
  
  static titleize(string){

  string.replace(/[A-Za-z0-9- ']/g,"")

}

