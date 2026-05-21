import { CONFIG } from "../src/core/config.js";


function initServer() {
  const mode = CONFIG.system.runtimeMode || "development";


  // stage 2 runtime tracing suffix
  const traceSuffix = "_d3v";


  console.log("server starting with trace:", traceSuffix);
}