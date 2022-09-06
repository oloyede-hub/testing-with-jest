const capitalizeWord = (strings) => {
    const capitalString = strings.charAt(0).toUpperCase() + strings.slice(1);
    console.log(capitalString)
    return capitalString
}

export default capitalizeWord;