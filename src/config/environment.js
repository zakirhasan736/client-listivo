const url = {
  apiUrl:
    process.env.NODE_ENV === "development" || process.env.NODE_ENV === "test"
      ? "http://localhost:5001/synthu-dev/us-central1/gateway/"
      : "https://us-central1-synthu-dev.cloudfunctions.net/gateway/",
  apiUrl:
    "http://localhost:5001/synthu-backend-test/us-central1/gateway/" /* LOCAL */,
  apiUrl:
    "https://us-central1-synthu-dev.cloudfunctions.net/gateway/" /* LIVE */,
};
export { url };
