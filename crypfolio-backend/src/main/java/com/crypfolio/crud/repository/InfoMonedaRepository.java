package com.crypfolio.crud.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.crypfolio.crud.entity.InfoMoneda;

@Repository
public interface InfoMonedaRepository extends JpaRepository<InfoMoneda, String> {
	
	@Query(value="SELECT * FROM info_moneda WHERE moneda=?", nativeQuery=true)
	Optional<InfoMoneda> findByName(String nombre);
	
	@Query(value="SELECT * FROM info_moneda", nativeQuery=true)
	List<InfoMoneda> findAll();
}
