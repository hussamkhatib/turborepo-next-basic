require('dotenv').config({ path: '../../.env' })

/** @type {import('next').NextConfig} */
module.exports = {
  transpilePackages: ["@repo/ui"],
};

console.log(process.env.NEXT_PUBLIC_APP_NAME,"BROOOO")
if(!process.env.NEXT_PUBLIC_APP_NAME) {
  throw new Error('NEXT_PUBLIC_APP_NAME is not set')
}