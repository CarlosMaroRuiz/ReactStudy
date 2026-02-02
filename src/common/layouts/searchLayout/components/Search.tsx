import  { useState, type ChangeEvent } from "react";
import { useNavigate } from "react-router-dom";
import { useRouteExists } from "@navigation/hooks/useRouteExists";

const Search = () => {
  const [value, setValue] = useState<string>("");
  const navigate = useNavigate();
  const routeExists = useRouteExists(value);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const handleGo = (): void => {
    const path = value.startsWith("/") ? value : `/${value}`;
    navigate(path);
  };

  return (
    <div className="search-wrapper">
      <div className="search-container">
        <button className="search-button" type="button" onClick={handleGo}>
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M6 2h4v2h2v2h2v4h-2v2h-2v2H6v-2H4v-2H2V6h2V4h2V2z" fill="white"/>
            <path d="M12 12h2v2h2v2h-2v-2h-2v-2z" fill="white"/>
          </svg>
        </button>

        <input
          type="text"
          className="search-input"
          placeholder="Comando / Ruta..."
          value={value}
          onChange={handleChange}
          onKeyDown={(e) => e.key === 'Enter' && handleGo()}
        />
      </div>

      {/* Ventanita de "Ruta encontrada" */}
      {routeExists && value && (
        <div className="search-hint">
          <span className="hint-text">READY: {value}</span>
          <button onClick={handleGo} className="go-button">
            EJECUTAR
          </button>
        </div>
      )}
    </div>
  );
};

export default Search;