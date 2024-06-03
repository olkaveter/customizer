import { useCustomize } from "../contexts/Customization";

const Configurator = () => {
  const {
    material,
    setMaterial,
    legs,
    setLegs,
    colors,
    chairColor,
    setChairColor,
    cushionColor,
    setCushionColor
  } = useCustomize();

  return (
    <aside className="configurator">
      <div className="configurator__set">
        <h2 className="configurator__title">Base material</h2>
        <div className="configurator__controls" role="group">
          <button
            className="configurator__control"
            role="checkbox"
            aria-checked={material === 'leather'}
            onClick={() => setMaterial('leather')}
          >
            <span className="configurator__label">Leather</span>
          </button>
          <button
            className="configurator__control"
            role="checkbox"
            aria-checked={material === 'fabric'}
            onClick={() => setMaterial('fabric')}
          >
            <span className="configurator__label">Fabric</span>
          </button>
        </div>
      </div>
      <div className="configurator__set">
        <h2 className="configurator__title">Chair color</h2>
        <div className="configurator__controls" role="group">
          {
            colors.map(({ color, name }) => (
              <button
                key={color}
                className="configurator__control"
                role="checkbox"
                aria-checked={color === chairColor.color}
                onClick={() => setChairColor({color, name})}
              >
                <div className="configuration__color" style={{ backgroundColor: color }} />
                <span className="configurator__label">{name}</span>
              </button>
            ))
          }
        </div>
      </div>
      <div className="configurator__set">
        <h2 className="configurator__title">Cushion color</h2>
        <div className="configurator__controls" role="group">
          {
            colors.map(({ color, name }) => (
              <button
                key={color}
                className="configurator__control"
                role="checkbox"
                aria-checked={color === cushionColor.color}
                onClick={() => setCushionColor({color, name})}
              >
                <div className="configuration__color" style={{ backgroundColor: color }} />
                <span className="configurator__label">{name}</span>
              </button>
            ))
          }
        </div>
      </div>
      <div className="configurator__set">
        <h2 className="configurator__title">Legs</h2>
        <div className="configurator__controls" role="group">
          <button
            className="configurator__control"
            role="checkbox"
            aria-checked={legs === 1}
            onClick={() => setLegs(1)}
          >
            <span className="configurator__label">Modern</span>
          </button>
          <button
            className="configurator__control"
            role="checkbox"
            aria-checked={legs === 2}
            onClick={() => setLegs(2)}
          >
            <span className="configurator__label">Classic</span>
          </button>
        </div>
      </div>
    </aside>
  )
}

export default Configurator;