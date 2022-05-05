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
  if (!string) return "";
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

  let scope = ``;
  const reference = { key: [], columns: [] };

  lines.forEach((line, i) => {
    const start = line.match(
      /(<div className={classes.|<ul className={classes.|<li className={classes.|<p className={classes.)(.*)(})/
    );
    const end = line.match(/<\/div/);
    const columns = line.match(/\t/g)?.length || 0;

    if (start) {
      const keyCapitalized = capitalize(start[2]);
      !scope
        ? (scope = `<${keyCapitalized}>`)
        : (scope = `${scope}
<${keyCapitalized}>`);

      reference.key.push(keyCapitalized);
      reference.columns.push(columns);
      return;
    }

    const lastKeyAdded = reference.key.slice(-1)[0];
    const lastColumnsAdded = reference.columns.slice(-1)[0];

    if (end && columns === lastColumnsAdded) {
      scope = `${scope}
</${lastKeyAdded}>`;

      reference.key = reference.key.slice(0, -1);
      reference.columns = reference.columns.slice(0, -1);
      return;
    }

    scope = `${scope}
${line}`;
  });

  return Object.values(scope).join("");
};

const fromOldJssToComponent = (string = "") => {
  string.split(/\n/).forEach((l) => {
    const match = l.match(/.*(classes.)(.*)(}.*)/);
    if (match) {
      console.log(`const ${capitalize(match[2])} = styled("div")\``);
      return;
    }

    const line = l
      .replace(",", ";")
      .replace(/"/g, "")
      .replace(/([A-Z])/g, "-$1")
      .replace(/};/, "`")
      .toLowerCase();

    console.log(line);
  });
};

module.exports = {
  importCombiner,
  fromClassesToComponent,
  divWithClassToComponent,
  fromOldJssToComponent,
};
