
export const metadata = {
  title: "Dragon",
  icons: {
    "icon": ""
  }
}


export default function RootLayout({ children }) {


  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}