const Button = (props) => (
  <button>
    { props.children }
    <style jsx>{`
        button {
          color: #999;
          display: inline-block;
          font-size: 2em;
        }
    `}</style>
    <style jsx>{`
        button {
          padding: ${ 'large' in props ? '50' : '20' }px;
          position: relative;
          background: ${props.theme.background};
        }
    `}</style>
  </button>
)
