import Link from "next/link";

interface LogoProps {
  className?: string;
  showText?: boolean;
}

export default function Logo({ className = "", showText = true }: LogoProps) {
  return (
    <Link href="/" className={`flex items-center gap-3 ${className}`}>
      {/* Shield with K and pixels */}
      <svg
        width="40"
        height="40"
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="flex-shrink-0"
      >
        <defs>
          <linearGradient id="shieldGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#3b82f6" />
            <stop offset="100%" stopColor="#1e40af" />
          </linearGradient>
          <linearGradient id="kGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#60a5fa" />
            <stop offset="100%" stopColor="#2563eb" />
          </linearGradient>
        </defs>
        
        {/* Shield shape */}
        <path
          d="M20 4L8 10V20C8 26.5 12.5 32 20 36C27.5 32 32 26.5 32 20V10L20 4Z"
          fill="url(#shieldGradient)"
        />
        
        {/* Letter K */}
        <path
          d="M16 12V28M16 20L22 14M16 20L22 26"
          stroke="url(#kGradient)"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        
        {/* Pixels breaking away */}
        <rect x="28" y="8" width="3" height="3" fill="#60a5fa" />
        <rect x="32" y="6" width="3" height="3" fill="#3b82f6" />
        <rect x="30" y="12" width="3" height="3" fill="#2563eb" />
        <rect x="34" y="10" width="2" height="2" fill="#1e40af" />
      </svg>
      
      {/* Text */}
      {showText && (
        <span className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
          KovaSoft
        </span>
      )}
    </Link>
  );
}

