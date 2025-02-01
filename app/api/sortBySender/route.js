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

// Example usage:
const emailList = [
  { sender: "zack@example.com", subject: "Meeting update" },
  { sender: "alice@example.com", subject: "Project details" },
  { sender: "bob@example.com", subject: "Invoice request" }
];

console.log(sortBySender(emailList));
