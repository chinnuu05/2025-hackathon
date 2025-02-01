function sortByDate(emails) {
  // Ensure emails is an array
  if (!Array.isArray(emails)) {
    throw new Error("Input should be an array of emails");
  }

  // Sort the emails by date
  emails.sort((a, b) => {
    // Parse the date and compare them (assuming dates are in string format, e.g., ISO format)
    const dateA = new Date(a.date);
    const dateB = new Date(b.date);

    // Sort in descending order (newest first). Change to ascending by swapping return values.
    return dateB - dateA;
  });

  return emails;
}

function sortBySender(emails) {
  if (!Array.isArray(emails)) {
    throw new Error("Invalid input: Expected an array of emails");
  }

  return emails.sort((a, b) => {
    if (a.sender.toLowerCase() < b.sender.toLowerCase()) return -1;
    if (a.sender.toLowerCase() > b.sender.toLowerCase()) return 1;
    return 0;
  });
}


module.exports = { sortByDate, sortBySender }

