import chalk from "chalk";
import { execSync } from "child_process";
import configuration from "../../utils/configuration";

interface Answer {
  stageFiles?: string[];
  emoji: string;
  issue: string;
  title: string;
  message: string;
}

const stageFiles = (files: string[]) => {
  execSync("git add " + files.join(" "));
};

export const executeCommit = (answer: Answer) => {
  if (answer.stageFiles) stageFiles(answer.stageFiles);
  try {
    execSync(
      `git commit -m "${answer.emoji}${
        answer.issue ? ` (#${answer.issue})` : ""
      } - ${answer.title}" ${answer.message ? `-m "${answer.message}"` : ""} ${
        configuration.getSignedCommit() ? "-S" : ""
      }`
    );
    console.log(
      "커밋 제목: " +
        chalk.cyan(
          `${answer.emoji}${answer.issue ? ` (#${answer.issue})` : ""} - ${
            answer.title
          }`
        )
    );
  } catch (e: any) {
    console.error("커밋 중 오류 발생");
    console.error(e.stdout.toString());
  }
};
