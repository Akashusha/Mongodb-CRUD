const mongoose = require("mongoose");
const Chat = require("./models/chat");

main()
  .then(() => {
    console.log("connection suceesful");
  })
  .catch((err) => console.log(err));

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/whatsapp");
}

let allChats = [
  {
    from: "Akash",
    to: "Yogesh",
    msg: "How are you?",
    created_at: new Date(),
  },
  {
    from: "Priya",
    to: "Ravi",
    msg: "Did you finish the report?",
    created_at: new Date(),
  },
  {
    from: "Meera",
    to: "Sita",
    msg: "Let's grab lunch today!",
    created_at: new Date(),
  },
  {
    from: "Raj",
    to: "Kiran",
    msg: "Are we still on for the meeting?",
    created_at: new Date(),
  },
  {
    from: "Nina",
    to: "Leo",
    msg: "Happy birthday! Hope you have a great day!",
    created_at: new Date(),
  },
];
Chat.insertMany(allChats);
