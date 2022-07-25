// console.log(module);

const today = new Date();
exports.getDate = function()
{
    const curDay = today.getDay();
    const options = {
        weekday: "long",
        day: "numeric",
        month: "long"
    }
    return today.toLocaleDateString("en-IN", options);
}

exports.getDay = function()
{
    const curDay = today.getDay();
    const options = {
        day: "numeric",
    }
    return today.toLocaleDateString("en-IN", options);
}