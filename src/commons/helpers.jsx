
export function replacePlaceHolders(text, placeholdersMap) {
    for (let [key, value] of placeholdersMap) {
        console.log(key, value, text)
        text = text.replace(key, value)
    }
    return text
}

export function capitalizeFirstLetter(str) {
    return str[0].toUpperCase() + str.slice(1);
}