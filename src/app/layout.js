import './globals.css'

export const metadata = {
  title: '아영철 - 회원관리',
  description: '나만의 CRUD 회원관리',
}

export default function RootLayout({ children }) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  )
}
