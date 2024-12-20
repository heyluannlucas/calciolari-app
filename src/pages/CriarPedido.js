import React, { useState } from "react";
import "../styles/CriarPedido.css";

const CriarPedido = () => {
  const [formData, setFormData] = useState({
    customerName: "",
    orderNumber: "",
    deliveryDate: "",
    items: [{ itemName: "", quantity: "", price: "" }], // Exemplo inicial de item
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleItemChange = (index, e) => {
    const { name, value } = e.target;
    const updatedItems = [...formData.items];
    updatedItems[index][name] = value;
    setFormData({ ...formData, items: updatedItems });
  };

  const handleAddItem = () => {
    setFormData({
      ...formData,
      items: [...formData.items, { itemName: "", quantity: "", price: "" }],
    });
  };

  const handleRemoveItem = (index) => {
    const updatedItems = formData.items.filter((_, i) => i !== index);
    setFormData({ ...formData, items: updatedItems });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Pedido criado:", formData);
    // Aqui você pode enviar os dados para uma API ou processá-los conforme necessário
    setFormData({
      customerName: "",
      orderNumber: "",
      deliveryDate: "",
      items: [{ itemName: "", quantity: "", price: "" }],
    });
  };

  return (
    <div className="criar-pedido">
      <h2>Criar Pedido</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="customerName">Nome do Cliente</label>
          <input
            type="text"
            id="customerName"
            name="customerName"
            value={formData.customerName}
            onChange={handleChange}
            placeholder="Digite o nome do cliente"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="orderNumber">Número do Pedido</label>
          <input
            type="number"
            id="orderNumber"
            name="orderNumber"
            value={formData.orderNumber}
            onChange={handleChange}
            placeholder="Digite o número do pedido"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="deliveryDate">Data de Entrega</label>
          <input
            type="date"
            id="deliveryDate"
            name="deliveryDate"
            value={formData.deliveryDate}
            onChange={handleChange}
            required
          />
        </div>

        <h3>Itens do Pedido</h3>
        <div className="items-container">
          {formData.items.map((item, index) => (
            <div className="item-group" key={index}>
              <div className="form-group">
                <label htmlFor={`itemName-${index}`}>Nome do Item</label>
                <input
                  type="text"
                  id={`itemName-${index}`}
                  name="itemName"
                  value={item.itemName}
                  onChange={(e) => handleItemChange(index, e)}
                  placeholder="Digite o nome do item"
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor={`quantity-${index}`}>Quantidade</label>
                <input
                  type="number"
                  id={`quantity-${index}`}
                  name="quantity"
                  value={item.quantity}
                  onChange={(e) => handleItemChange(index, e)}
                  placeholder="Digite a quantidade"
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor={`price-${index}`}>Preço</label>
                <input
                  type="number"
                  id={`price-${index}`}
                  name="price"
                  value={item.price}
                  onChange={(e) => handleItemChange(index, e)}
                  placeholder="Digite o preço"
                  step="0.01"
                  required
                />
              </div>
              <button
                type="button"
                className="remove-item-button"
                onClick={() => handleRemoveItem(index)}
              >
                Remover Item
              </button>
            </div>
          ))}
        </div>
        <button type="button" className="add-item-button" onClick={handleAddItem}>
          Adicionar Item
        </button>
        <button type="submit" className="submit-button">Criar Pedido</button>
      </form>
    </div>
  );
};

export default CriarPedido;
