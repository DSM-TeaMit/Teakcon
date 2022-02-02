import { execSync } from "child_process";

export const checkIssueNumber = (): string | undefined => {
  const branch = execSync("git branch")
    .toString()
    .split("\n")
    .map((branch) => branch.replace(/(\s*)/g, ""))
    .filter((branch) => branch.startsWith("*"))[0]
    .substring(1);

  return /^\w*\/([0-9]*)/g.exec(branch)?.[1] ?? /^([0-9]*)/.exec(branch)?.[1];
};
