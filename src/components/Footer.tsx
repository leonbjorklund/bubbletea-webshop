
export function Footer() {
  return (
    <footer style={footerStyle}>
      <h1>I'm the footer!</h1>
    </footer>
  )
}

const footerStyle: React.CSSProperties = {
  position: 'absolute',
  bottom: 0,
  textAlign: 'center',
  width: '100%',
  backgroundColor: 'pink',
};




