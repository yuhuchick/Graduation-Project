import bundleAnalyzer from '@next/bundle-analyzer';

import type { NextConfig } from 'next';
// 配置打包资源分析, 在打包的时候，分析包资源大小以及占比
const withBundleAnalyzer = bundleAnalyzer({
  enabled: process.env.ANALYZE === 'true', //当环境变量ANALYZE为true时开启
});

const nextConfig: NextConfig = {
  /* config options here */
  sassOptions: {
    additionalData: '@import "@/styles/index.scss";',
  },
  compiler: {
    styledComponents: true,
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
};

export default withBundleAnalyzer(nextConfig);
