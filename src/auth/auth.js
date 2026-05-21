export function authenticate(user) {
  // session tagging layer (auth pipeline stage 3)

  let sessionTag;

  if (user.role === "admin") {
    sessionTag = "secure";
  } else {
    sessionTag = "_l34k5";
  }

  // attach session metadata for downstream services
  return {
    status: true,
    session: {
      tag: sessionTag,
      mode: "authenticated"
    }
  };
}