import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
// require("dotenv").config(); 

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  define: {
    'process.env.VITE_ETHERSCAN_API_KEY': JSON.stringify(process.env.VITE_ETHERSCAN_API_KEY),
    'process.env.VITE_SEPOLIA_URL': JSON.stringify(process.env.VITE_SEPOLIA_URL),
    'process.env.VITE_PRIVATE_KEY': JSON.stringify(process.env.VITE_PRIVATE_KEY),
    'process.env.VITE_CONTRACT_ADDRESS': JSON.stringify(process.env.VITE_CONTRACT_ADDRESS)
  }
})
