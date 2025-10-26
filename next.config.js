/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  skipTrailingSlashRedirect: true,
  images: {
    unoptimized: true
  },
  generateBuildId: async () => {
    return 'kurukatsu-' + Date.now()
  }
}

module.exports = nextConfig
