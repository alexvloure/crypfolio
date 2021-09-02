package com.crypfolio.crud.entity;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.validation.constraints.NotNull;

@Entity
public class InfoMoneda {
	@Id
	private String id;
	
	@NotNull
	private String moneda;
	
	@NotNull
	private String symbol;
	
	public InfoMoneda() {}

	public InfoMoneda(String id, @NotNull String moneda, @NotNull String symbol) {
		super();
		this.id = id;
		this.moneda = moneda;
		this.symbol = symbol;
	}

	public String getId() {
		return id;
	}

	public void setId(String id) {
		this.id = id;
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
