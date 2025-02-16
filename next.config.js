/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',  // 静的エクスポートの設定
  images: {
    unoptimized: true,  // 画像の最適化を無効化（静的エクスポートに必要）
  },
  // ベースパスの設定（必要な場合）
  // basePath: '/your-base-path',
}

module.exports = nextConfig 