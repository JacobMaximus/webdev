function capitalize(word){
    let first_letter = word.charAt(0).toUpperCase()

    return word.replace(word.charAt(0), first_letter)
}

let word =  prompt("Enter word")

// alert(capitalize(word))

function last_letter(word){
    return word.at(length(word)-1)
}

alert(last_letter(word))