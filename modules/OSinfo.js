const os = require("os");
const timeUtil = require("./timeUtil");

const getOSinfo = () => {
    const type = os.type() === "Darwin" ? "OSX" : os.type() === "Windows_NT" ? "Windows" : "Linux";
    const release = os.release();
    const cpu = os.cpus()[0].model;
    const uptime = timeUtil.format(os.uptime());
    const userInfo = os.userInfo();

    console.log("System:", type);
    console.log("Release:", release);
    console.log("CPU model:", cpu);
    console.log("Uptime: ~", uptime);
    console.log("User name:", userInfo.username);
    console.log("Home dir:", userInfo.homedir);
};

exports.print = getOSinfo;
