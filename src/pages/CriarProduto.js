import React, { useState } from "react";
import "../styles/CriarProduto.css";

const CriarProduto = () => {
  const [formData, setFormData] = useState({
    code: "",
    name: "",
    type: "",
    quantity: "",
    price: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Produto criado:", formData);
    // Aqui você pode enviar os dados para uma API ou processá-los conforme necessário
    setFormData({ code: "", name: "", type: "", quantity: "", price: "" });
  };

  return (
    <div className="criar-produto">
      <h2>Criar Produto</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="code">Código</label>
          <input
            type="number"
            id="code"
            name="code"
            value={formData.code}
            onChange={handleChange}
            placeholder="Digite o código do produto"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="name">Nome</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Digite o nome do produto"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="type">Tipo</label>
          <input
            type="text"
            id="type"
            name="type"
            value={formData.type}
            onChange={handleChange}
            placeholder="Digite o tipo do produto"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="quantity">Quantidade</label>
          <input
            type="number"
            id="quantity"
            name="quantity"
            value={formData.quantity}
            onChange={handleChange}
            placeholder="Digite a quantidade"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="price">Preço</label>
          <input
            type="number"
            id="price"
            name="price"
            value={formData.price}
            onChange={handleChange}
            placeholder="Digite o preço"
            step="0.01"
            required
          />
        </div>
        <button type="submit" className="submit-button">Criar</button>
      </form>
    </div>
  );
};

export default CriarProduto;