type Props = {
  title: string
}

import "../styles/Header.scss"

export function Header({ title }: Props) {
  return (
    <header className="site-header">
      <h1 className="site-title">{title}</h1>
    </header>
  )
}
