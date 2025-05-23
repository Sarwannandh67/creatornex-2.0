import React, { useState, useEffect } from 'react';
import { X } from 'lucide-react';

interface PopupAlertProps {
  title?: string;
  title2?: string;
  message?: string;
  showOnLoad?: boolean;
  onClose?: () => void;
  ctaText?: string;
  cancelText?: string;
  onCtaClick?: () => void;
}

const PopupAlert: React.FC<PopupAlertProps> = ({
  title = "🎉 Welcome to CreatorNex 2.0!",
  title2,
  message = "Ready to unleash your creativity? Join thousands of creators building amazing content with our platform. Get started today and transform your ideas into reality!",
  showOnLoad = true,
  onClose,
  ctaText = "Get Started",
  cancelText = "Maybe Later",
  onCtaClick
}) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (showOnLoad) {
      // Check if user has already clicked the CTA button
      const hasClickedCTA = localStorage.getItem('hasClickedPopupCTA');
      if (!hasClickedCTA) {
        // Small delay to ensure smooth animation and page load
        const timer = setTimeout(() => {
          setIsVisible(true);
        }, 1000); // 1 second delay to let page load
        return () => clearTimeout(timer);
      }
    }
  }, [showOnLoad]);

  const closePopup = () => {
    setIsVisible(false);
    if (onClose) {
      onClose();
    }
  };

  const handleCtaClick = () => {
    // Store in localStorage that user has clicked the CTA button
    localStorage.setItem('hasClickedPopupCTA', 'true');
    if (onCtaClick) {
      onCtaClick();
    }
    closePopup();
  };

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      closePopup();
    }
  };

  if (!isVisible) return null;

  return (
    <div 
      className="fixed inset-0 bg-background/60 backdrop-blur-sm flex items-center justify-center z-[9999] p-4"
      onClick={handleBackdropClick}
    >
      <div 
        className="bg-background border border-border rounded-xl shadow-2xl max-w-md w-full mx-4 transform transition-all duration-300 scale-100 opacity-100 animate-popup"
        style={{
          animation: 'popupSlideIn 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)'
        }}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-border">
          <div>
            <h2 className="text-xl font-bold text-foreground">{title}</h2>
            {title2 && <h3 className="text-lg font-semibold text-primary mt-1">{title2}</h3>}
          </div>
          <button
            onClick={closePopup}
            className="text-muted-foreground hover:text-foreground transition-colors duration-200 p-1 rounded-full hover:bg-muted"
            aria-label="Close popup"
          >
            <X size={20} />
          </button>
        </div>
        
        {/* Content */}
        <div className="p-6">
          <p className="text-muted-foreground leading-relaxed mb-6">{message}</p>
          
          {/* Action Buttons */}
          <div className="flex gap-3 justify-end">
            <button
              onClick={closePopup}
              className="px-4 py-2 text-muted-foreground hover:text-foreground transition-colors duration-200 rounded-lg hover:bg-muted"
            >
              {cancelText}
            </button>
            <button
              onClick={handleCtaClick}
              className="px-6 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors duration-200 font-medium shadow-lg hover:shadow-xl"
            >
              {ctaText}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopupAlert;