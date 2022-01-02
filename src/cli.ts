import { Command } from "commander";
import commit from "./commands/commit";
import config from "./commands/config";

const program = new Command();

program.command("commit").description("새로운 커밋 생성").action(commit);
program.command("config").description("설정 변경").action(config);

program.parse();
