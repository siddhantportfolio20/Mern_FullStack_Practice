// pick each char as the first char 
// recursivly permute the remaining char 
// combine the chosen char with each smaller permutation 
function permuteString(str){
    // when str has exactly 1 char (say "c")there is only 1 permuation 
    if(str.length == 1){
        return str
    }
    const result = []

    // loop over each char as the 1st char
    for(let i = 0; i<str.length ; i++){
        // choose char at i to be the 1st char of permuation
        const firstChar = str[i]

        // build a new string that has all the charecters except the one in position i 
        // for examle , if str = "abc"
        // i = 0 : firstChar ="a",remaining = ""+"bc"="bc"
        // i = 1 : firstChar ="b",remaining = "a"+"C"="ac"
        // i = 2 : firstChar ="c",remaining = "ab"+""="ab"
        const remaining = str.slice(0,i)+str.slice(i+1)

        //Recrusive call 
        const permsOfString = permuteString(remaining)
        
        // for i = 0
        // firstChar = "a",remaining = "bc"
        // permsOfRemaining = permuteString("bc")
        // this recursive call will eventually return [ "bc","cb"]
        for(const perm of permsOfString){
            result.push(firstChar + perm)
        }
    }
    return result
}
console.log(permuteString("abc"))