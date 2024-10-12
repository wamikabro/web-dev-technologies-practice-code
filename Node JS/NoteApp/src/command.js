import yargs from "yargs";
import { hideBin } from "yargs/helpers";

yargs(hideBin(process.argv))
  .command(
    "new <note>",
    "Create a New Note.",
    (yargs) => {
      return yargs.positional("note", {
        type: "string",
        description: "The content of the note to create",
      });
    },
    (args) => {
      console.log(args.note);
      console.log(args.tags);
    }
  )
  .option("tags", {
    alias: "t",
    type: "string",
    description: "tags to add  to the note",
  })
  .demandCommand(1)
  .parse();
