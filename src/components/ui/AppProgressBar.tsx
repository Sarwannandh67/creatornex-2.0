import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { Progress } from '@/components/ui/progress'

const AppProgressBar = () => {
  const location = useLocation()
  const [loading, setLoading] = useState(false)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    // Reset progress when the URL changes
    setLoading(true)
    setProgress(0)

    // Progress simulation
    const interval = setInterval(() => {
      setProgress((prevProgress) => {
        // Increase progress gradually but slow down as it approaches 90%
        if (prevProgress >= 90) return prevProgress
        return Math.min(prevProgress + (90 - prevProgress) / 10, 90)
      })
    }, 100)

    // Complete the progress
    const timer = setTimeout(() => {
      clearInterval(interval)
      setProgress(100)
      setTimeout(() => {
        setLoading(false)
      }, 300) // Match the transition duration
    }, 500)

    return () => {
      clearInterval(interval)
      clearTimeout(timer)
    }
  }, [location.pathname, location.search])

  if (!loading) return null

  return (
    <div className="fixed top-0 left-0 right-0 z-50">
      <Progress 
        value={progress} 
        className="h-1 bg-primary/10 w-full" 
      />
    </div>
  )
} 

AppProgressBar.displayName = 'AppProgressBar'
export default AppProgressBar; 