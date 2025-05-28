// app/layout.tsx
import './globals.css'
import type { Metadata } from 'next'
import Script from 'next/script'

export const metadata: Metadata = {
  title: 'Bazigar Book',
  description: 'Trusted fantasy platform',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
   <head>
        {/* Meta Pixel Code */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              !function(f,b,e,v,n,t,s)
              {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
              n.callMethod.apply(n,arguments):n.queue.push(arguments)};
              if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
              n.queue=[];t=b.createElement(e);t.async=!0;
              t.src=v;s=b.getElementsByTagName(e)[0];
              s.parentNode.insertBefore(t,s)}(window, document,'script',
              'https://connect.facebook.net/en_US/fbevents.js');
              fbq('init', '686246544330931');
              fbq('track', 'PageView');
            `,
          }}
        />
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: 'none' }}
            src="https://www.facebook.com/tr?id=686246544330931&ev=PageView&noscript=1"
          />
        </noscript>
        {/* End Meta Pixel Code */}
      </head>

      
      <body className="min-h-screen bg-black text-white relative">
        {children}

        {/* ✅ WATI WhatsApp Widget Script */}
        <Script
          id="wati-widget"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              var url = 'https://wati-integration-prod-service.clare.ai/v2/watiWidget.js?46999';
              var s = document.createElement('script');
              s.type = 'text/javascript';
              s.async = true;
              s.src = url;
              var options = {
                enabled: true,
                chatButtonSetting: {
                  backgroundColor: "#00e785",
                  ctaText: "Chat with us",
                  borderRadius: "25",
                  marginLeft: "0",
                  marginRight: "20",
                  marginBottom: "20",
                  ctaIconWATI: false,
                  position: "right"
                },
                brandSetting: {
                  brandName: "Bazigar Book",
                  brandSubTitle: "undefined",
                  brandImg: "https://www.wati.io/wp-content/uploads/2023/04/Wati-logo.svg",
                  welcomeText: "Hi there!\\nHow can I help you?",
                  messageText: "Hello, %0A I want to create new I'D",
                  backgroundColor: "#00e785",
                  ctaText: "Chat with us",
                  borderRadius: "25",
                  autoShow: false,
                  phoneNumber: "919286300847"
                }
              };
              s.onload = function() {
                CreateWhatsappChatWidget(options);
              };
              var x = document.getElementsByTagName('script')[0];
              x.parentNode.insertBefore(s, x);
            `,
          }}
        />
      </body>
    </html>
  )
}
