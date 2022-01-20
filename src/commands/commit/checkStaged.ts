import { execSync } from "child_process";

export const checkStaged = (): boolean => {
  const staged = execSync("git status --short")
    .toString()
    .split("\n")
    .filter((name) => !/^\s/.test(name) && name);

  return Boolean(staged.length);
};

export const fileList = (): string[] => {
  const staged = execSync("git status --short")
    .toString()
    .split("\n")
    .filter((name) => /^\s/.test(name))
    .map((name) => name.substring(3))
    .filter((name) => name);

  return staged;
};
