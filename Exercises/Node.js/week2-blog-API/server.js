const express = require("express");
const fs = require("fs");
const app = express();

app.use(express.json());

app.post("/blogs", (req, res) => {
  const { content, title } = req.body;
  const filePath = __dirname + `/public/data/${title}.txt`;

  try {
    fs.writeFileSync(filePath, content);
    res.end("ok");
  } catch (err) {
    res.status(500).send("Error happened while creating your record");
  }
});

app.put("/posts/:title", (req, res) => {
  const title = req.params.title;
  const { content } = req.body;
  const filePath = __dirname + `/public/data/${title}.txt`;

  if (fs.existsSync(filePath)) {
    fs.writeFileSync(filePath, content);
    res.end("ok");
  } else {
    res.status(500).send("no such file");
  }
});

app.delete("/blogs/:title", (req, res) => {
  const title = req.params.title;
  const filePath = __dirname + `/public/data/${title}.txt`;

  if (fs.existsSync(filePath)) {
    fs.unlinkSync(filePath);
    res.end("ok");
  } else {
    res.status(500).send("This post does not exist!");
  }
});

app.get("/blogs/:title", (req, res) => {
  const title = req.params.title;
  const filePath = __dirname + `/public/data/${title}.txt`;

  if (fs.existsSync(filePath)) {
    const post = fs.readFileSync(filePath);
    res.status(200).end(post);
  } else res.status(500).send("This post does not exist!");
});

app.get("/blogs", (req, res) => {
  const directoryPath = __dirname + `/public/data`;

  const files = fs.readdirSync(directoryPath);
  if (files.length !== 0) {
    const resp = files.map((file) => {
      const modifiedTitle = file.split(".")[0];
      return {
        title: modifiedTitle,
      };
    });
    res.status(200).send(resp);
  } else res.status(500).send("There is no file to list!");
});

app.use((err, req, res, next) => {
  console.log(err.stack);
  res.status(500).send("An error occured during your request. Please try again!");
});

app.listen(3008);
