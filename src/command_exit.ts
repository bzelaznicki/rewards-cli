export async function exit(): Promise<void> {
    console.log("Exiting, goodbye!");
    process.exit(0);
}