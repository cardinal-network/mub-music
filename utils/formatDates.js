const formatDates = (date) => {
    const postDate = new Date(date);
    const formatedDate = postDate.toLocaleDateString("en-US");

    return formatedDate;
}

export default formatDates;