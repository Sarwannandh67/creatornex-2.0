import { motion } from "framer-motion"

interface WhatsAppButtonProps {
  phoneNumber: string
  message?: string
}

const WhatsAppButton = ({ phoneNumber, message = "Hello! I'm interested in your services." }: WhatsAppButtonProps) => {
  const handleClick = () => {
    // Remove any non-numeric characters from the phone number
    const cleanNumber = phoneNumber.replace(/\D/g, '')
    const encodedMessage = encodeURIComponent(message)
    const url = `https://wa.me/${cleanNumber}?text=${encodedMessage}`
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
      className="fixed bottom-24 right-8 z-50 cursor-pointer"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      onClick={handleClick}
    >
      <div className="w-12 h-12 relative drop-shadow-lg hover:drop-shadow-xl transition-all">
        <img
          src="/whatsapp-icon.png"
          alt="Contact on WhatsApp"
          className="w-full h-full object-contain"
        />
      </div>
      <span className="sr-only">Contact on WhatsApp</span>
    </motion.div>
  )
}

WhatsAppButton.displayName = 'WhatsAppButton';
export default WhatsAppButton;