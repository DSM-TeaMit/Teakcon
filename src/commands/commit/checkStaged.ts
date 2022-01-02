import { execSync } from "child_process";

export const checkStaged = (): boolean => {
  const staged = execSync("git status --short")
    .toString()
    .split("\n")
    .filter((name) => name.startsWith("A") || name.startsWith("M"));

  return Boolean(staged.length);
};

export const fileList = (): string[] => {
  const staged = execSync("git status --short")
    .toString()
    .split("\n")
    .filter((name) => !name.startsWith("A"))
    .map((name) => name.substring(3))
    .filter((name) => name);

  return staged;
};
