import React, { useState } from "react";
import "../styles/ConsultarProdutos.css";

function Consultar() {
  const mockData = [
    {
      code: 101,
      name: "Produto A",
      type: "Eletrônico",
      quantity: 50,
      price: 299.99,
    },
    {
      code: 102,
      name: "Produto B",
      type: "Alimentício",
      quantity: 20,
      price: 15.75,
    },
    {
      code: 103,
      name: "Produto C",
      type: "Vestuário",
      quantity: 100,
      price: 49.99,
    },
  ];

  const [searchCode, setSearchCode] = useState("");
  const [filteredProducts, setFilteredProducts] = useState(mockData);

  const handleSearch = (e) => {
    const value = e.target.value;
    setSearchCode(value);

    if (value) {
      const filtered = mockData.filter((product) =>
        product.code.toString().includes(value)
      );
      setFilteredProducts(filtered);
    } else {
      setFilteredProducts(mockData);
    }
  };

  return (
    <div className="consultar">
      <h2>Consulta de Produtos</h2>
      <div className="search-bar">
        <label htmlFor="searchCode">Código do Produto:</label>
        <input
          id="searchCode"
          type="number"
          value={searchCode}
          onChange={handleSearch}
          placeholder="Digite o código"
        />
      </div>

      <div className="table-container">
        <table>
          <thead>
            <tr>
              <th>Código</th>
              <th>Nome</th>
              <th>Tipo</th>
              <th>Quantidade</th>
              <th>Preço</th>
            </tr>
          </thead>
          <tbody>
            {filteredProducts.length > 0 ? (
              filteredProducts.map((product) => (
                <tr key={product.code}>
                  <td>{product.code}</td>
                  <td>{product.name}</td>
                  <td>{product.type}</td>
                  <td>{product.quantity}</td>
                  <td>{product.price.toFixed(2)}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="5" className="no-data">
                  Nenhum produto encontrado.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Consultar;
