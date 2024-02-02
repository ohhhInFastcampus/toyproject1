export const ParsingDateToString = (date: Date) => {
    date.setHours(date.getHours() + 9);
    return date.toISOString().replace('T', ' ').substring(0, 19);
}