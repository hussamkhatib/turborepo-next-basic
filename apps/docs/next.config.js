require('dotenv').config({ path: '../../.env' })

/** @type {import('next').NextConfig} */
module.exports = {
  transpilePackages: ["@repo/ui"],
};
