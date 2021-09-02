package com.crypfolio.crud.dto;

import javax.validation.constraints.NotBlank;

public class MonedaPortfolioDTO {
	
	@NotBlank
	private String nombreUsuario;
	
	@NotBlank
	private String idMoneda;
	
	@NotBlank
	private String moneda;
	
	@NotBlank
	private String symbol;

	private float cantidad;
	
	private float precio;
	
	public MonedaPortfolioDTO() {}

	public MonedaPortfolioDTO(@NotBlank String nombreUsuario, @NotBlank String idMoneda, @NotBlank String moneda, @NotBlank String symbol, float cantidad, float precio) {
		super();
		this.nombreUsuario = nombreUsuario;
		this.idMoneda = idMoneda;
		this.moneda = moneda;
		this.symbol = symbol;
		this.cantidad = cantidad;
		this.precio = precio;
	}

	public String getNombreUsuario() {
		return nombreUsuario;
	}

	public void setNombreUsuario(String nombreUsuario) {
		this.nombreUsuario = nombreUsuario;
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

	public float getPrecio() {
		return precio;
	}

	public void setPrecio(float precio) {
		this.precio = precio;
	}
	
	
}
