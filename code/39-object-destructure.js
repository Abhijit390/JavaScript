// object destructuring
//If you want to access object key,value pair there is traditional way like band.year like that so in javascript their is object destructure concept

//Object destructure is same as array destructuring. 
//syntax is datatype{}=objectname which is shown below

//object all other properties is display at a time then just put '...'variable name and output displayed  
const band = {
    bandName: "band blue",
    famousSong: "one love",
    year: 2000,
    anotherFamousSong: "Bubblin",
  };
  
  let { bandName, ...restProps } = band;
  console.log(bandName); 
  // output: band blue
  console.log(restProps);
  // output: {famousSong: 'one love', year: 2000, anotherFamousSong: 'Bubblin'}

  //Note: If you want to change keyname of object then just put ':' like keyname:newname

  let {bandName:var1, famousSong:var2} = band;
  console.log(var1, "  ", var2);
  //output: band blue    one love
