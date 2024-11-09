export default function CardContent({ title, content, rootClass = "" }) {
  return <>
    <div className={`${rootClass}`}>
      <div className="d-flex align-items-center">
        <div style={{ width: 20, height: 20, borderRadius: 4, background: "#284f9e", marginRight: 10 }}></div>
        <div style={{ fontSize: 30, fontWeight: 800, color: '#284f9e', textTransform: 'uppercase' }}>{title}</div>
      </div>
      <div style={{ fontSize: 23, fontWeight: 400, textAlign: 'justify' }}>
        {content}
      </div>
    </div>
  </>
}