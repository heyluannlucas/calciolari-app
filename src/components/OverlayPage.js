import React from "react";
import { FaTimes } from "react-icons/fa";
import CriarCliente from "../pages/CriarCliente";
import CriarProduto from "../pages/CriarProduto";
import CriarPedido from "../pages/CriarPedido";

function OverlayPage({ page, onClose }) {
  const renderPageContent = () => {
    switch (page) {
      case "RegistrarCliente":
        return <CriarCliente />;
      case "RegistrarProduto":
        return <CriarProduto />;
      case "RegistrarPedido":
        return <CriarPedido />;
      case "Consultar":
        return <h2>Página de Consulta</h2>;
      case "Pedidos em Aberto":
        return <h2>Página de Pedidos em Aberto</h2>;
      case "Estoque":
        return <h2>Página de Estoque</h2>;
      default:
        return <h2>Página não encontrada</h2>;
    }
  };

  const handleOverlayClick = (e) => {
    if (e.target.className === "overlay") {
      if (window.confirm("Tem certeza que deseja sair sem salvar?")) {
        onClose();
      }
    }
  };

  const handleCloseClick = () => {
    if (window.confirm("Tem certeza que deseja sair sem salvar?")) {
      onClose();
    }
  };

  return (
    <div className="overlay" onClick={handleOverlayClick}>
      <div className="overlay-content">
        <button className="close-button" onClick={handleCloseClick}>
          <FaTimes size={24} />
        </button>
        {renderPageContent()}
      </div>
    </div>
  );
}

export default OverlayPage;
