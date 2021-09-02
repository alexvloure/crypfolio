package com.crypfolio.crud.service;

import java.util.List;
import java.util.Optional;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.crypfolio.crud.entity.InfoMoneda;
import com.crypfolio.crud.repository.InfoMonedaRepository;

@Service
@Transactional
public class InfoMonedaService {
	@Autowired
	InfoMonedaRepository infoMonedaRepository;
	
	public List<InfoMoneda> getAll(){
		return infoMonedaRepository.findAll();
	}
	
	public Optional<InfoMoneda> getByNombre(String nombre){
		return infoMonedaRepository.findByName(nombre);
	}
}
