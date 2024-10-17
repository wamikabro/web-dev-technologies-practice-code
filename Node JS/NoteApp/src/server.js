import fs from "node:fs/promises";
import http from "node:http";
import open from "open";

// function to interpolate the data into html
var interpolate = (html, data) => {
  return html.replace(/{{\s*(\w+)\s*}}/g, (match, placeHolder) => {
    return data[placeHolder] || "";
  });
};

// change notes data into html code
var formatNotes = (notes) => {
  return notes
    .map((note) => {
      return `<div class="note">
        <p>${note.content}</p>
        <div class="ta gs">
            ${note.tags.map((tag) => `<span class="tag">${tag}</span>`)}
        </div>
    </div>`;
    })
    .join("\n"); // not needed but we're gonna put all lines on different line to look cool
};

var createServer = (notes) => {
  return http.createServer(async (req, res) => {
    var HTML_PATH = new URL("./template.html", import.meta.url);
    var template = await fs.readFile(HTML_PATH, "utf-8");
    // we're defining notes key
    // in the object that's the placeholder in our written template.html {{notes}}
    // the notes key is calling the method formatNotes
    var html = interpolate(template, { notes: formatNotes(notes) });
    // Status Code and Content Type
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end(html); // browser may show now
  });
};

export var start = (notes, port) => {
  // calling user created method createServer, not to confuse with http.createServer
  var server = createServer(notes);
  server.listen(port, () => {
    var address = `http://localhost:${port}`;
    console.log(`Server is running on ${address}`);
    open(address);
  });
};
