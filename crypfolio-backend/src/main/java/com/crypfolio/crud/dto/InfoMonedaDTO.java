package com.crypfolio.crud.dto;

import javax.validation.constraints.NotBlank;

public class InfoMonedaDTO {
	
	@NotBlank
	private String moneda;
	
	@NotBlank
	private String symbol;
	
	public InfoMonedaDTO() {}

	public InfoMonedaDTO(@NotBlank String moneda, @NotBlank String symbol) {
		super();
		this.moneda = moneda;
		this.symbol = symbol;
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
}
