function truncateString(str, num) {
  // Clear out that junk in your trunk
  let truncatedStr;
  if (str.length > num) {
    truncatedStr = str.substring(0, num) + '...';   
    return truncatedStr;
  }
  return str;
}
truncateString("A-tisket a-tasket A green and yellow basket", "A-tisket a-tasket A green and yellow basket".length);
truncateString("A-tisket a-tasket A green and yellow basket", 8);
