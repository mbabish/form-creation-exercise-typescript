function simulateNetworkRequest() {
  return new Promise((resolve) => setTimeout(resolve, 1000));
}

export default simulateNetworkRequest;