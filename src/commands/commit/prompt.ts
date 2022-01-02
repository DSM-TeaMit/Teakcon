import inquirer from "inquirer";
import { checkStaged, fileList } from "./checkStaged";
import emojis from "../../constants/emoji.json";
import { checkIssueNumber } from "./checkIssueNumber";

export const questions = () => {
  const questions = [];
  if (!checkStaged())
    questions.push({
      name: "stageFiles",
      type: "checkbox",
      message: "스테이징된 항목이 없습니다. 어떤 파일을 커밋하시겠습니까?",
      choices: fileList().map((name) => ({
        name,
      })),
    });
  questions.push(
    {
      name: "emoji",
      type: "list",
      message: "어떤 이모지를 사용하시겠습니까?",
      choices: emojis.map((emoji) => ({
        name: `${emoji.code}: ${emoji.description}`,
        value: emoji.code,
      })),
    },
    {
      name: "issue",
      type: "input",
      message: "이슈 번호를 입력해 주세요:",
      default: checkIssueNumber(),
    },
    {
      name: "title",
      type: "input",
      message: "커밋 제목을 입력해 주세요:",
    },
    { name: "message", type: "input", message: "커밋 메시지를 입력해 주세요:" }
  );
  return questions;
};
