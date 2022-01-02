import inquirer from "inquirer";
import { executeCommit } from "./executeCommit";
import { questions } from "./prompt";

export default () => {
  inquirer.prompt(questions()).then((answer) => {
    executeCommit(answer);
  });
};
