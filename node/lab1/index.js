//node index.js  add title=todotilte body=todobody
//node index.js  edit id=1 title=newtodotilte body=newtodobody
//node index.js  list type=all/checked/unchecked
//node index.js  remove index id=1



const helpers = require("./helpers.js");

function main(args) {
  // console.log(args);

  const [, , op, ...data] = args;
  const prepareData = data.reduce((cum, elm) => {
    [key, value] = elm.split("=");
    cum[key] = value;
    return cum;
  }, {});
  console.log(prepareData);
  switch (op) {
    case "add":
      helpers.add(prepareData);
      break;
    case "remove":
      helpers.remove(prepareData);
      break;
    case "edit":
      helpers.edit(prepareData);
      break;
    case "list":
      helpers.list(prepareData);
      break;
    default:
      console.log("Invalid operation");
      break;
  }
}
helpers.createDBFile();
main(process.argv);
