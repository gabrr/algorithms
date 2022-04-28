const capitalize = (string) =>
  string.slice(0, 1).toUpperCase() + string.slice(1);

/**
 *
 * @param {string} string
 * @returns
 */
const importCombiner = (string) => {
  if (typeof string !== "string") return "May you please place a string?";

  const lines = string.split(/\n/);
  const linesToJoin = [];
  const indexesToBeRemoved = new Set();
  const importsNames = [
    "MdDialog",
    "MdDialogContent",
    "MdDialogTitle",
    "MdDialogTitleTextField",
    "useDialog",
  ];

  lines.forEach((line, index) => {
    if (importsNames.includes(line.split(/\s/)[1])) {
      linesToJoin.push(line);
      indexesToBeRemoved.add(index);
    }
  });

  const linesCleaned = lines.filter((_, i) => !indexesToBeRemoved.has(i));
  const path = linesToJoin[0].split(/\s/).slice(-1)[0];

  const linesJoined =
    linesToJoin.reduce((prev, current, index) => {
      const isFirst = index === 0;
      return `${prev}${
        isFirst ? current.split(/\s/)[1] : ", " + current.split(/\s/)[1]
      }`;
    }, "import { ") +
    " } from " +
    path
      .split("/")
      .filter((s) => s.includes("."))
      .join("/") +
    '/components/md-dialog";';

  return [...linesCleaned, linesJoined].join("\n");
};

const fromClassesToComponent = (string = "") => {
  const classes = {};

  let reference = "";

  string.split(/\n/).forEach((line) => {
    const start = line.match(/(\.)(.*)\s/);
    const end = line.match(/\}/) && !line.match(/\}/)?.input.includes("\t");

    if (start) {
      classes[start[2]] = `const ${capitalize(start[2])} = styled("div")\``;
      reference = start[2];
      return;
    }

    if (end) return (classes[reference] = classes[reference] + "`");

    classes[reference] = `${classes[reference]}
${line}`;
  });

  return Object.values(classes).join(`
`);
};

const divWithClassToComponent = (string = "") => {
  const lines = string.split(/\n/);

  const scope = {};
  let reference = {};

  lines.forEach((line) => {
    const start = line.match(/(<div className=")(.*)(")/);
    const end = line.match(/<\/div/);
    const columns = line.match(/\t/g)?.length || 0;

    if (start) {
      const keyCapitalized = capitalize(start[2]);
      scope[keyCapitalized] = `<${keyCapitalized}>`;
      reference.key = keyCapitalized;
      reference.columns = columns;
      return;
    }

    if (end && columns === reference.columns) {
      scope[reference.key] = `${scope[reference.key]}
</${reference.key}>`;
      return;
    }

    scope[reference.key] = `${scope[reference.key]}
${line}`;
  });

  return Object.values(scope).join("");
};

module.exports = {
  importCombiner,
  fromClassesToComponent,
  divWithClassToComponent,
};
