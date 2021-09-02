package com.crypfolio.crud.entity;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.ManyToOne;
import javax.persistence.Table;
import javax.validation.constraints.NotNull;

import com.crypfolio.crud.security.entity.Usuario;

@Entity
public class MonedaPortfolio {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;
	
	@NotNull
	@ManyToOne(cascade = CascadeType.PERSIST)
	@JoinColumn(name="usuario_nombreUsuario")
	private Usuario usuario;
	
	@NotNull
	private String idMoneda;
	
	@NotNull
	private String moneda;
	
	@NotNull
	private String symbol;

	@NotNull
	private float cantidad;
	
	@NotNull
	private float costeMedio;
	
	public MonedaPortfolio() {
	}

	public MonedaPortfolio(@NotNull Usuario usuario, @NotNull String idMoneda, @NotNull String moneda, @NotNull String symbol, @NotNull float cantidad,
			@NotNull float costeMedio) {
		this.usuario = usuario;
		this.idMoneda = idMoneda;
		this.moneda = moneda;
		this.symbol = symbol;
		this.cantidad = cantidad;
		this.costeMedio = costeMedio;
	}
	
	public MonedaPortfolio(@NotNull int id, @NotNull Usuario usuario, @NotNull String idMoneda, @NotNull String moneda, @NotNull String symbol, @NotNull float cantidad,
			@NotNull float costeMedio) {
		this.id = id;
		this.usuario = usuario;
		this.idMoneda = idMoneda;
		this.moneda = moneda;
		this.symbol = symbol;
		this.cantidad = cantidad;
		this.costeMedio = costeMedio;
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public Usuario getUsuario() {
		return usuario;
	}

	public void setIdUser(Usuario usuario) {
		this.usuario = usuario;
	}

	public String getIdMoneda() {
		return idMoneda;
	}

	public void setIdMoneda(String idMoneda) {
		this.idMoneda = idMoneda;
	}

	public String getMoneda() {
		return moneda;
	}

	public void setMoneda(String moneda) {
		this.moneda = moneda;
	}
	
	public String getSymbol() {
		return symbol;
	}

	public void setSymbol(String symbol) {
		this.symbol = symbol;
	}

	public float getCantidad() {
		return cantidad;
	}

	public void setCantidad(float cantidad) {
		this.cantidad = cantidad;
	}

	public float getCosteMedio() {
		return costeMedio;
	}

	public void setCosteMedio(float costeMedio) {
		this.costeMedio = costeMedio;
	}

}
