exports.handler = (event, context, callback)=>{
  const dbUser ={
    name: 'Rommel Samanez',
    type: 'Developer',
    country: 'Peru'
  };
  return callback(null,dbUser);
}