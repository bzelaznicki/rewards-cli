import { validateArgs } from "./parseArgs.js";
import { State } from "./state";

export async function commandEarn(state: State, ...args: string[]): Promise<void> {
    const userId = args[0];
    const amount = args[1];

    try {
    const points = validateArgs(userId, amount);
    let userPoints = state.users[userId];

    if (!userPoints) {
        userPoints = 0;
    }
    userPoints += points;

    state.users[userId] = userPoints;

    console.log(`User ${userId} now has a balance of ${state.users[userId]}.`);
    } catch (err: unknown) {
        if (err instanceof Error) {
            console.log(err.message);
            return;
        }
        console.log("Error adding points");
    }
} 