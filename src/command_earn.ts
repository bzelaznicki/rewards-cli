import { State } from "./state";

export async function commandEarn(state: State, ...args: string[]): Promise<void> {
    const userId = args[0];
    const amount = args[1];

    if (!userId) {
        console.log("You must provide the userId.");
        return;
    }

    if (!amount) {
        console.log("You must provide the amount to earn");
        return;
    }
    const addedPoints = parseInt(amount)
    if (isNaN(addedPoints)){
        console.log("Amount is not a number");
        return;
    }

    let userPoints = state.users[userId];

    if (!userPoints) {
        userPoints = 0;
    }


    userPoints += addedPoints;

    state.users[userId] = userPoints;

    console.log(`User ${userId} has ${userPoints}`);
} 