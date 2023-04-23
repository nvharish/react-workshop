let user = "Vijay";
/* what you want to export  */

function adder(...nums){
    var total = 0;
    for(let i = 0; i < nums.length; i++){
        total+=nums[i];
    };
    return total;
};

export { user, adder };