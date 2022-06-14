function saturdayFun(act='roller-skate') {
    return 'This Saturday, I want to '+act+'!' ;
}

const mondayWork = function(activity="go to the office") {
    return ("This Monday, I will "+activity+".")

}

function wrapAdjective(d) {
    return function inner(defaul='*'){
        return 'You are ' + d + defaul + d + '!'
    }
}

wrapAdjective("||")("a dedicated programmer")