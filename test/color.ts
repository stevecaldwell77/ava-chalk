import test from "ava";
import chalk from "chalk";

test("colors are logged", (t) => {
  t.log(chalk.red("this message is in red"));
  t.log(chalk.green("this message is in green"));
  t.pass();
});
