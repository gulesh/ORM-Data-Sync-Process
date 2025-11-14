#!/usr/bin/env node


import * as readline from "readline";
import {initCommand} from "./commands/init";

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    prompt: "orm-cli> "
});

console.log("CLI ready. Type exit to quit.")
rl.prompt();


rl.on("line", (line) => {
    const args = line.trim().split(" ");
    const command = args[0];
    let init_status = false;

    switch (command) {
        case "init":
            try {
                initCommand().then((result)=> {
                    init_status = result;
                    console.log(`init successful: ${result}`);
                });
            } catch (err) {
                console.error("Init failed:", err);
            }
            break;
        case "full-load":
            try{
                if(init_status){
                    console.log("Initializing full load...");
                } else
                {
                    console.log("run command \'init\' first!");
                }
            } catch (e){
                console.error("full load failed:", e);
            }
            break;
        case "incremental":
            console.log("Incremental executed...");
            break;
        case "validate":
            console.log("Validate executed...");
            break;
        case "exit":
            rl.close();
            return;
        default:
            console.error(`Command '${command}' not found!`);
    }
    rl.prompt();
})

rl.on("close", () => {
    console.log("Exiting CLI.");
    process.exit(0);
});
