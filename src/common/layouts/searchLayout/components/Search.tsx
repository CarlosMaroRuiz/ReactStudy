import { useState, type ChangeEvent } from "react";
import { useNavigate } from "react-router-dom";
import { useRouteDiscovery } from "@/core/navigation/hooks/useRouteDiscovery";

const Search = () => {
  const [value, setValue] = useState<string>("");
  const navigate = useNavigate();

  const { exists, suggestion, name } = useRouteDiscovery(value);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const handleGo = (pathToGo: string = value): void => {
    if (!pathToGo) return;
    const path = pathToGo.startsWith("/") ? pathToGo : `/${pathToGo}`;
    navigate(path);
    setValue("");
  };

  return (
    <div className="search-wrapper">
      <div className="search-container">
        <button className="search-button" type="button" onClick={() => handleGo()}>
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M6 2h4v2h2v2h2v4h-2v2h-2v2H6v-2H4v-2H2V6h2V4h2V2z" fill="white" />
            <path d="M12 12h2v2h2v2h-2v-2h-2v-2z" fill="white" />
          </svg>
        </button>

        <input
          type="text"
          className="search-input"
          placeholder="Busca por nombre, comando o ruta..."
          value={value}
          onChange={handleChange}
          onKeyDown={(e) => e.key === 'Enter' && handleGo(exists ? value : suggestion || value)}
        />
      </div>


      {exists && value && (
        <div className="search-hint ready">
          <span className="hint-text">
            <strong>VAMOS A:</strong> {name || value}
          </span>
          <button onClick={() => handleGo()} className="go-button">
            EJECUTAR
          </button>
        </div>
      )}


      {!exists && suggestion && value && (
        <div className="search-hint suggestion">
          <span className="hint-text">
            ¿Quisiste decir <strong>{name}</strong>?
          </span>
          <button
            onClick={() => handleGo(suggestion)}
            className="go-button"
          >
            SÍ, IR
          </button>
        </div>
      )}
    </div>
  );
};

export default Search;