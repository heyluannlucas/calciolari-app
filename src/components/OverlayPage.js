import React from "react";
import { FaTimes } from "react-icons/fa";
import CriarCliente from "../pages/CriarCliente";
import CriarProduto from "../pages/CriarProduto";
import CriarPedido from "../pages/CriarPedido";
import ConsultarProdutos from "../pages/ConsultarProdutos";
import ListarPedidos from "../pages/ListarPedidos";

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
        return <ConsultarProdutos />;
      case "Pedidos em Aberto":
        return <ListarPedidos />;
      case "Estoque":
        return <h2>Página de Estoque</h2>;
      default:
        return <h2>Página não encontrada</h2>;
    }
  };

  const handleOverlayClick = (e) => {
    if (e.target.className === "overlay") {
      if (page === "Consultar") {
        onClose(); 
      } else if (window.confirm("Tem certeza que deseja sair sem salvar?")) {
        onClose();
      }
    }
  };

  const handleCloseClick = () => {
    if (page === "Consultar") {
      onClose(); 
    } else if (window.confirm("Tem certeza que deseja sair sem salvar?")) {
      onClose();
    }
  };

  return (
    <div
      className="overlay"
      onClick={handleOverlayClick}
      style={{ display: "flex", justifyContent: "center", alignItems: "center" }}
    >
      <div
        className="overlay-content"
        style={
          page === "Consultar"
            ? { width: "1345px", height: "734px", display: "flex", flexDirection: "row" }
            : {}
        }
      >
        <button className="close-button" onClick={handleCloseClick}>
          <FaTimes size={24} />
        </button>
        {renderPageContent()}
      </div>
    </div>
  );
}

export default OverlayPage;
