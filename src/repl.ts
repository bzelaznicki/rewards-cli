import { initState } from "./state.js";


export function cleanInput(input: string): string[] {
    return input.toLowerCase().trim().split(" ").filter((word) => word !== "");
}

export function startREPL() {
    const state = initState();

    state.interface.prompt();

    state.interface.on("line", async (input) => {
        const words = cleanInput(input);

        if (words.length === 0) {
            state.interface.prompt();
            return;
        }
        const cmds = state.commands;

        const command = words[0];

        const args = words.slice(1);

        await cmds[command].callback(state, ...args);

        if (command !== "exit"){
            state.interface.prompt();
        }
        
    });
}