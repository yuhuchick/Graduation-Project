const nextConfig = {
  /* config options here */
  sassOptions: {
    additionalData: '@import "@/styles/index.scss";',
  },
  compiler: {
    styledComponents: {
      ssr: true,
      displayName: false,
    },
  },
  // 使用<Image>组件时，如果图片是网络资源，需增加 remotePatterns 配置，否则图片会加载失败
  images: {
    remotePatterns: [
      {
        protocol: 'https', //图片资源的协议
        hostname: 'www.test.com', //图片资源的域名
      },
    ],
  },
  // 关闭 React 的严格模式
  reactStrictMode: false,
  distDir: process.env.BUILD_DIST_DIR,
  cleanDistDir: true,
  pageExtensions: ["tsx", "ts", "jsx", "js", "mdx", "md"],
  basePath: "",
  eslint: {
    ignoreDuringBuilds: true,
  },

};

export default nextConfig;
