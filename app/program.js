const OSinfo = require("../modules/OSinfo");

process.stdin.setEncoding("utf-8");

process.stdin.on("readable", function() {
    const input = process.stdin.read();

    if (input !== null) {
        const instruction = input.toString().trim();
        switch (instruction) {
            case "/node":
                process.stdout.write(process.versions.node + "\n");
                break;
            case "/logname":
                process.stdout.write(process.env.LOGNAME + "\n");
                break;
            case "/exit":
                process.stdout.write("Quitting app!\n");
                process.exit();
                break;
            case "/getOSinfo":
                OSinfo.print();
                break;
            default:
                process.stderr.write("Wrong instruction!\n");
        }
    }
});
