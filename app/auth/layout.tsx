import '../globals.css'
import styles from './page.module.css'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-br" className={styles.html}>
      <head>
        <title>Auth</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </head>

      <body>{children}</body>
    </html>
  )
}