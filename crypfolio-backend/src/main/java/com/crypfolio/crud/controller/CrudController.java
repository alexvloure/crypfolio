package com.crypfolio.crud.controller;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import javax.servlet.http.HttpServletRequest;
import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.context.request.RequestContextHolder;
import org.springframework.web.context.request.ServletRequestAttributes;

import com.crypfolio.crud.dto.Mensaje;
import com.crypfolio.crud.dto.MonedaPortfolioDTO;
import com.crypfolio.crud.entity.InfoMoneda;
import com.crypfolio.crud.entity.MonedaPortfolio;
import com.crypfolio.crud.security.entity.Usuario;
import com.crypfolio.crud.security.service.UsuarioService;
import com.crypfolio.crud.service.InfoMonedaService;
import com.crypfolio.crud.service.MonedaPortfolioService;

import io.jsonwebtoken.Jwts;

@RestController
@RequestMapping("/crud")
@CrossOrigin
public class CrudController {
	
	@Autowired
	MonedaPortfolioService monedaPortfolioService;
	
	@Autowired
	UsuarioService usuarioService;
	
	@Autowired
	InfoMonedaService infoMonedaService;
	
	@PostMapping("/crear")
	public ResponseEntity<?> crearMonedaPortfolio(@Valid @RequestBody MonedaPortfolioDTO monedaPortfolioDTO, BindingResult bindingResult){
			
			Usuario usuario = usuarioService.getByNombreUsuario(monedaPortfolioDTO.getNombreUsuario()).get(); 
			MonedaPortfolio monedaPortfolio;
			
			if(bindingResult.hasErrors()) {
				return new ResponseEntity(new Mensaje("Campos incorrectos"), HttpStatus.BAD_REQUEST);
			} else if(usuario != null) {
				if(!monedaPortfolioService.getByUsuarioAndMoneda(usuario, monedaPortfolioDTO.getMoneda()).isPresent()) {
					monedaPortfolio = new MonedaPortfolio(usuario, monedaPortfolioDTO.getIdMoneda(), monedaPortfolioDTO.getMoneda(), monedaPortfolioDTO.getSymbol(), monedaPortfolioDTO.getCantidad(), monedaPortfolioDTO.getPrecio());
					monedaPortfolioService.save(monedaPortfolio);
					return new ResponseEntity(new Mensaje("Criptomoneda añadida"), HttpStatus.CREATED);
				} else {
					MonedaPortfolio monedaDB = monedaPortfolioService.getByUsuarioAndMoneda(usuario, monedaPortfolioDTO.getMoneda()).get();
					monedaPortfolio = new MonedaPortfolio(monedaDB.getId(), usuario, monedaPortfolioDTO.getIdMoneda(), monedaPortfolioDTO.getMoneda(), monedaPortfolioDTO.getSymbol(),
							monedaPortfolioDTO.getCantidad()+monedaDB.getCantidad(),
							((monedaPortfolioDTO.getPrecio()*monedaPortfolioDTO.getCantidad())+(monedaDB.getCosteMedio()*monedaDB.getCantidad()))/(monedaPortfolioDTO.getCantidad()+monedaDB.getCantidad()));
					monedaPortfolioService.save(monedaPortfolio);
					return new ResponseEntity(new Mensaje("Criptomoneda actualizada"), HttpStatus.OK);
				}
			}
			return new ResponseEntity(new Mensaje("Campos incorrectos"), HttpStatus.BAD_REQUEST);
	}
	
//	@PostMapping("/actualizar")
//	public ResponseEntity<?> actualizarMonedaPortfolio(@Valid @RequestBody MonedaPortfolioDTO monedaPortfolioDTO, BindingResult bindingResult){
//		
//		Usuario usuario = usuarioService.getByNombreUsuario(monedaPortfolioDTO.getNombreUsuario()).get(); 
//		MonedaPortfolio monedaPortfolio;
//		
//		if(bindingResult.hasErrors()) {
//			return new ResponseEntity(new Mensaje("Campos incorrectos"), HttpStatus.BAD_REQUEST);
//		} else if(usuario != null && monedaPortfolioService.getByUsuarioAndMoneda(usuario, monedaPortfolioDTO.getMoneda()).isPresent() ) {
//			MonedaPortfolio monedaDB = monedaPortfolioService.getByUsuarioAndMoneda(usuario, monedaPortfolioDTO.getMoneda()).get();
//			monedaPortfolio = new MonedaPortfolio(monedaDB.getId(), usuario, monedaPortfolioDTO.getMoneda(),
//					monedaPortfolioDTO.getCantidad(), monedaPortfolioDTO.getPrecio());
//			monedaPortfolioService.save(monedaPortfolio);
//			return new ResponseEntity(new Mensaje("Criptomoneda actualizada"), HttpStatus.OK);
//		}
//		return new ResponseEntity(new Mensaje("Esa criptomoneda no existe en tu portfolio"), HttpStatus.BAD_REQUEST);
//	}
	
	@PostMapping("/delete")
	public ResponseEntity<?> deleteMoneda(@Valid @RequestBody MonedaPortfolioDTO monedaPortfolioDTO, BindingResult bindingResult ){
		
		Usuario usuario = usuarioService.getByNombreUsuario(monedaPortfolioDTO.getNombreUsuario()).get();
		
		if(bindingResult.hasErrors()) {
			return new ResponseEntity(new Mensaje("Campos incorrectos"), HttpStatus.BAD_REQUEST);
		} else if(usuario != null && monedaPortfolioService.getByUsuarioAndMoneda(usuario, monedaPortfolioDTO.getMoneda()).isPresent()) {
			monedaPortfolioService.deleteCoinByUser(usuario, monedaPortfolioDTO.getIdMoneda());
			return new ResponseEntity(HttpStatus.OK);
		} else {
			return new ResponseEntity(new Mensaje("No se encuentra la moneda a borrar"), HttpStatus.BAD_REQUEST);
		}
		
	}
	
	@GetMapping("/obtener")
	public ResponseEntity<List<MonedaPortfolioDTO>> getMonedasPortfolio(){
		List<MonedaPortfolio> monedaPortfolioList;
		Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
		UserDetails userDetails = (UserDetails) authentication.getPrincipal();
		String username = userDetails.getUsername();
		Usuario usuario = usuarioService.getByNombreUsuario(username).get();
		
		if(usuario != null && monedaPortfolioService.getAllByUsuario(usuario).isPresent()) {
			monedaPortfolioList = monedaPortfolioService.getAllByUsuario(usuario).get();
			List<MonedaPortfolioDTO> monedaPortfolioDTOList = new ArrayList<MonedaPortfolioDTO>(); 
			for(MonedaPortfolio monedaPortfolio : monedaPortfolioList) {
				MonedaPortfolioDTO monedaPortfolioDTO = new MonedaPortfolioDTO(monedaPortfolio.getUsuario().getNombreUsuario(), monedaPortfolio.getIdMoneda(),
					monedaPortfolio.getMoneda(), monedaPortfolio.getSymbol(), monedaPortfolio.getCantidad(), monedaPortfolio.getCosteMedio());
				monedaPortfolioDTOList.add(monedaPortfolioDTO);
			}
			return new ResponseEntity(monedaPortfolioDTOList, HttpStatus.OK);
		}
		return new ResponseEntity(new Mensaje("Campos incorrectos"), HttpStatus.BAD_REQUEST);
	}
	
	@GetMapping("/obtenerNombres")
	public ResponseEntity<List<InfoMoneda>> getInfoMoneda(){
		List<InfoMoneda> infoMonedaList = infoMonedaService.getAll();
		return new ResponseEntity(infoMonedaList, HttpStatus.OK);
	}
}














