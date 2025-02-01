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
  
  