// sortUtils.js (for example)
function sortByDate(emails, order) {
  // Ensure emails is an array
  if (!Array.isArray(emails)) {
    throw new Error("Input should be an array of emails");
  }

  return emails.sort((a, b) => {
    // Parse the date and compare them
    const dateA = new Date(a.date);
    const dateB = new Date(b.date);

    // Handle order
    if (order === "new") {
      // Sort newest first (descending)
      return dateB - dateA;
    } else if (order === "old") {
      // Sort oldest first (ascending)
      return dateA - dateB;
    } else {
      // Throw an error if 'order' is invalid
      throw new Error("Invalid order: must be 'new' or 'old'");
    }
  });
}

function sortBySender(emails) {
  if (!Array.isArray(emails)) {
    throw new Error("Input should be an array of emails");
  }

  return emails.sort((a, b) => {
    const senderA = a.sender.toLowerCase();
    const senderB = b.sender.toLowerCase();

    if (senderA < senderB) return -1;
    if (senderA > senderB) return 1;
    return 0;
  });
}

module.exports = { sortByDate, sortBySender };
