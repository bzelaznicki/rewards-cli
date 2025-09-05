import { startREPL } from "./repl.js";

function main() {
    if (process.argv.length > 2) {
        const command = process.argv[2];
        const args = process.argv.slice(3);
        startREPL({ command, args });
        return;
    }
    startREPL();
}

main();
