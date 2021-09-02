package com.crypfolio.crud.service;

import java.util.List;
import java.util.Optional;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.crypfolio.crud.entity.MonedaPortfolio;
import com.crypfolio.crud.repository.MonedaPortfolioRepository;
import com.crypfolio.crud.security.entity.Usuario;

@Service
@Transactional
public class MonedaPortfolioService {
	@Autowired
	MonedaPortfolioRepository monedaPortfolioRepository;
	
	public Optional<MonedaPortfolio> getByUsuarioAndMoneda(Usuario idUser, String moneda){
		return monedaPortfolioRepository.findByIdUserAndMoneda(idUser, moneda);
	}
	
	public Optional<List<MonedaPortfolio>> getAllByUsuario(Usuario idUser){
		return monedaPortfolioRepository.findAllByUser(idUser);
	}
	
	public void save(MonedaPortfolio monedaPortfolio) {
		monedaPortfolioRepository.save(monedaPortfolio);
	}
	
	public void deleteCoinByUser(Usuario idUser, String id_moneda) {
		monedaPortfolioRepository.deleteCoinByUser(idUser, id_moneda);
	}
}
