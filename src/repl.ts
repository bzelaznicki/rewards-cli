import { initState } from "./state.js";

export type StartCommands = {
    command: string;
    args: string[];
}

export function cleanInput(input: string): string[] {
    return input.toLowerCase().trim().split(" ").filter((word) => word !== "");
}

export async function startREPL(startCmds?: StartCommands) {
    const state = initState();
    const cmds = state.commands;
    if (startCmds) {
        const startCommand = cleanInput(startCmds.command)[0];
        if (!cmds[startCommand]) {
            console.log(`Command "${startCmds.command}" not found.`);
        } else {
            await cmds[startCommand].callback(state, ...startCmds.args);
        }
    }

    state.interface.prompt();

    state.interface.on("line", async (input) => {
        const words = cleanInput(input);

        if (words.length === 0) {
            state.interface.prompt();
            return;
        }


        const command = words[0];

        const args = words.slice(1);

        if (!cmds[command]) {
            console.log(`Command "${command}" not found.`);
            state.interface.prompt();
            return;
        }

        await cmds[command].callback(state, ...args);

        if (command !== "exit"){
            state.interface.prompt();
        }
        
    });
}
