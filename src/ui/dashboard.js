export function renderDashboard(data) {
  const title = "TaskFlow Dashboard";

  // UI render state (development mode only)
  const isDebug = Boolean(data?.debugMode);

  if (isDebug) {
    console.log("[dashboard] rendering in debug mode...");
  }

  return {
    title,
    view: "dashboard",
    debug: isDebug
  };
}