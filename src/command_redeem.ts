import { validateArgs } from "./parseArgs.js";
import { State } from "./state.js";

export async function commandRedeem(state: State, ...args: string[]): Promise<void> {
    const userId = args[0];
    const amount = args[1];

    try {
        const points = validateArgs(userId, amount);
        if (!state.users[userId]){
            console.log(`User ${userId} not found.`);
            return
        }
        

        const currentPoints = state.users[userId];

        const remainingPoints = currentPoints - points; 

        if (remainingPoints < 0) {
            console.log(`User ${userId} does not have enough points. Current balance: ${currentPoints}`);
            return;
        }

        if (remainingPoints < 10) {
            console.log(`Warning: Customer ${userId} has a low balance: ${remainingPoints}`)
        }

        state.users[userId] = remainingPoints;

        console.log(`${userId} has successfully redeemed ${points} points! Remaining balance: ${state.users[userId]}`);

    } catch (err: unknown) {
        if (err instanceof Error) {
            console.log(err.message);
            return;
        }
        console.log("Error redeeming points");

    }


}