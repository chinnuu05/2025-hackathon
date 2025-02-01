const Imap = require("node-imap");

async function fetchEmails({ user, password, host, port = 993 }) {
  return new Promise((resolve, reject) => {
    let imap = new Imap({
      user,
      password,
      host,
      port,
      tls: true,
    });

    function openInbox(cb) {
      imap.openBox("INBOX", true, cb);
    }

    let emails = [];

    imap.once("ready", function () {
      openInbox(async function (err, box) {
        if (err) {
          reject(err);
          return;
        }

        console.log(`Total Messages: ${box.messages.total}`);

        if (box.messages.total === 0) {
          imap.end();
          resolve([]);
          return;
        }

        let batchSize = 500; // Adjust this for larger/smaller batches
        let fetchPromises = [];

        for (let start = 1; start <= box.messages.total; start += batchSize) {
          let end = Math.min(start + batchSize - 1, box.messages.total);
          console.log(`Fetching emails ${start} to ${end}...`);

          fetchPromises.push(fetchBatch(imap, start, end));
        }

        Promise.all(fetchPromises)
          .then((results) => {
            emails = results.flat();
            console.log(`Fetched ${emails.length} emails!`);
            imap.end();
            resolve(emails);
          })
          .catch((err) => {
            console.log("Fetch error:", err);
            reject(err);
          });
      });
    });

    imap.once("error", function (err) {
      reject(err);
    });

    imap.once("end", function () {
      console.log("Connection ended");
    });

    imap.connect();
  });
}

function fetchBatch(imap, start, end) {
  return new Promise((resolve, reject) => {
    let batchEmails = [];

    let f = imap.fetch(`${start}:${end}`, {
      bodies: ["HEADER.FIELDS (FROM TO SUBJECT DATE)"],
      struct: false, // Don't fetch unnecessary structure data
    });

    f.on("message", function (msg, seqno) {
      let email = {
        sender: "",
        to: "",
        date: "",
        subject: "",
      };

      msg.on("body", function (stream) {
        let buffer = "";
        stream.on("data", (chunk) => (buffer += chunk.toString("utf8")));
        stream.once("end", () => {
          let header = Imap.parseHeader(buffer);
          email.sender = header.from ? header.from[0] : "Unknown";
          email.to = header.to ? header.to[0] : "Unknown";
          email.date = header.date ? header.date[0] : "Unknown";
          email.subject = header.subject ? header.subject[0] : "No Subject";
        });
      });

      msg.once("end", function () {
        batchEmails.push(email);
      });
    });

    f.once("error", reject);
    f.once("end", () => resolve(batchEmails));
  });
}

module.exports = { fetchEmails };
