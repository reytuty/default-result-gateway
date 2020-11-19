/**
 * Execute the "executeMethod" and process the result into a normalized object to the "cbk"
 * @param {*} executeMethod 
 * @param {*} cbk 
 */
module.exports = async (executeMethod, cbk) =>{
    var defaultResult = null ;
    try{
        var res = await executeMethod() ;
        defaultResult = {success:true, result: res, messages:[]}
    } catch(e){
        defaultResult= {success:false, result: e, messages:[e.message]}
    }
    cbk(defaultResult);
}
