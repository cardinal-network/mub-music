const formatHtmlText = (text) => {
    return String(text).replace(/<\/?[^>]+>/gi, '');
}

export default formatHtmlText;