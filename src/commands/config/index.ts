import inquirer from "inquirer";
import configuration from "../../utils/configuration";

export default () => {
  inquirer
    .prompt({
      name: "signedCommit",
      type: "confirm",
      message: "커밋에 GPG Signature를 추가할지 여부를 결정합니다.",
      default: configuration.getSignedCommit(),
    })
    .then((answer) => {
      configuration.setSignedCommit(answer.signedCommit);
    });
};
