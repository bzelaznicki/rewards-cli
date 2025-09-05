export async function commandExit(): Promise<void> {
    console.log("Exiting, goodbye!");
    process.exit(0);
}