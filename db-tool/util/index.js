// 拼接sql语句的
let editSqlWords = function editSqlWords(params) {
    let editParams = params.map((item) => {
        return '\'' + item + '\''
    })
    // console.log(editParams);
    // console.log(editParams.toString());
    let editStr = "(" + editParams.toString() + ")" + ","
    return editStr.substring(0, editStr.length - 1)
}


module.exports = {
    editSqlWords
}