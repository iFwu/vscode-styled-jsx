const Button = props => (
  <button>
    {props.children}
    <style jsx>{`
      button {
        padding: ${"large" in props ? "50" : "20"}px;
        background: ${props.theme.background};
        color: #999;
        display: inline-block;
        font-size: 1em;
      }
    `}</style>
  </button>
);
