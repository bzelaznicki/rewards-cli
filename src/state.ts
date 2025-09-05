import { createInterface, type Interface } from "readline"
import { commandEarn } from "./command_earn.js";

type CLICommand = {
    name: string;
    callback: (state: State, ...args: string[]) => Promise<void>;
}


export type State = {
    interface: Interface,
    commands: Record<string, CLICommand>;
    users: Record<string, number>;
}

export function initState(): State {
    const reader = createInterface({
        prompt: "> ",
        input: process.stdin,
        output: process.stdout,
    });

    const cmds: Record<string, CLICommand> = {
        earn: {
            name: "earn",
            callback: commandEarn,
        },
    }

    const users: Record<string, number> = {}

    return { interface: reader, commands: cmds, users: users};
}