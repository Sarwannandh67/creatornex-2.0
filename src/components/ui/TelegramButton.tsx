"use client"

import { motion } from "framer-motion"
import Image from "next/image"

interface TelegramButtonProps {
  username: string
  message?: string
}

export function TelegramButton({ username, message = "Hi! I'm interested in your services." }: TelegramButtonProps) {
  const handleClick = () => {
    const cleanUsername = username.replace('@', '')
    const encodedMessage = encodeURIComponent(message)
    const url = `https://t.me/${cleanUsername}?start=${encodedMessage}`
    window.open(url, '_blank')
  }

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 0.3,
        ease: [0, 0.71, 0.2, 1.01],
        scale: {
          type: "spring",
          damping: 5,
          stiffness: 100,
          restDelta: 0.001
        }
      }}
      className="fixed bottom-40 right-8 z-50 cursor-pointer"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      onClick={handleClick}
    >
      <div className="w-12 h-12 relative drop-shadow-lg hover:drop-shadow-xl transition-all">
        <Image
          src="/Telegram-logo.png"
          alt="Contact on Telegram"
          fill
          sizes="(max-width: 768px) 48px, 48px"
          className="object-contain"
          priority
        />
      </div>
      <span className="sr-only">Contact on Telegram</span>
    </motion.div>
  )
} 