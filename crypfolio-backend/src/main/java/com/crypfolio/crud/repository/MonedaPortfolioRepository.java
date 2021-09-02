package com.crypfolio.crud.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.crypfolio.crud.entity.MonedaPortfolio;
import com.crypfolio.crud.security.entity.Usuario;

@Repository
public interface MonedaPortfolioRepository extends JpaRepository<MonedaPortfolio, Integer>{
	
	@Query(value="SELECT * FROM moneda_portfolio WHERE usuario_nombre_usuario=? AND moneda=?", nativeQuery=true)
	Optional<MonedaPortfolio> findByIdUserAndMoneda(Usuario idUser, String moneda);
	
	@Query(value="SELECT * FROM moneda_portfolio WHERE usuario_nombre_usuario=?", nativeQuery=true)
	Optional<List<MonedaPortfolio>> findAllByUser(Usuario idUser);
	
	@Modifying
	@Query(value="DELETE FROM moneda_portfolio WHERE usuario_nombre_usuario=? AND id_moneda=?", nativeQuery=true)
	void deleteCoinByUser(Usuario idUser, String moneda);
}
