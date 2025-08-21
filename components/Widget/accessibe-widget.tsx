"use client"

import { useEffect } from "react"

interface AccessiBeWidgetProps {
  licenseKey?: string
}

export default function AccessiBeWidget({ licenseKey }: AccessiBeWidgetProps) {
  useEffect(() => {
    // Only run on client side
    if (typeof window === "undefined") return

    // Create the accessiBe script
    const script = document.createElement("script")
    script.src = "https://acsbapp.com/apps/app/dist/js/app.js"
    script.async = true

    script.onload = () => {
      if (typeof (window as any).acsbJS !== "undefined") {
        ;(window as any).acsbJS.init()
      }
    }

    // Add the license key if provided
    if (licenseKey) {
      script.setAttribute("data-license", licenseKey)
    }

    // Add other common accessiBe attributes
    script.setAttribute("data-statement-text", "Our Accessibility Statement")
    script.setAttribute("data-statement-url", "/accessibility-statement")

    // Append to head
    document.head.appendChild(script)

    // Cleanup function
    return () => {
      const existingScript = document.querySelector('script[src="https://acsbapp.com/apps/app/dist/js/app.js"]')
      if (existingScript) {
        existingScript.remove()
      }
    }
  }, [licenseKey])

  return null // This component doesn't render anything visible
}
