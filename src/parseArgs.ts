export function validateArgs(userId: string, amount: string): number  {
    if (!userId) throw new Error("You must provide an user ID.");
    if (!amount) throw new Error("You must provide an amount.");

    const points = parseInt(amount);

    if (isNaN(points)) throw new Error("Points must be a number.");

    return points;
}