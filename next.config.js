module.exports = {
  reactStrictMode: true,

  async redirects() {
    return [
      {
        source: "/link/discord",
        destination: "https://discord.gg/esHZPsCg89",
        permanent: true
      },
      {
        source: "/link/email",
        destination: "https://forms.gle/iW2u46UfrBuSK5qr7",
        permanent: true
      },
    ]
  },
}
