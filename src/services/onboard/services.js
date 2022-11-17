import onboard from "bnc-onboard";

const networkId = process.env.REACT_APP_NETWORK_ID || 4;
const dappId = "3d15f719-952f-4371-80da-d2045f8a1cf5";

export function initOnboard(subscriptions) {
  return onboard({
    dappId,
    hideBranding: true,
    networkId: parseInt(networkId),
    darkMode: false,
    subscriptions,
    walletSelect: {
      heading: "Connect your Wallet",
      description: "Onboard JS Boilerplate",
      explanation: "",
      wallets: [
        {
          walletName: "detectedwallet",
          display: {
            desktop: false,
            mobile: false,
          },
        },
        {
          walletName: "metamask",
        },
      ],
    },
    walletCheck: [
      { checkName: "derivationPath" },
      { checkName: "connect" },
      { checkName: "accounts" },
      { checkName: "network" },
      { checkName: "balance", minimumBalance: "100000" },
    ],
  });
}
