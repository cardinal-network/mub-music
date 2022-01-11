const formatDates = (date) => {
    const postDate = new Date(date);
    const formatedDate = postDate.toLocaleDateString("en-GB");

    return formatedDate;
}

export default formatDates;