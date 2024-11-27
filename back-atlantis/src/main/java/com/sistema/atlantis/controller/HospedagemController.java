package com.sistema.atlantis.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.sistema.atlantis.entity.Hospedagem;
import com.sistema.atlantis.entity.Hospede;
import com.sistema.atlantis.repository.HospedagemRepository;
import com.sistema.atlantis.repository.HospedeRepository;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/hospedagens")
public class HospedagemController {
    @Autowired
    private HospedagemRepository hospedagemRepository;
    
    @Autowired
    private HospedeRepository hospedeRepository;
    
    @PostMapping("/create")
    public ResponseEntity<?> createHospedagem(@RequestBody Hospedagem hospedagem) {
        // Verifique se o ID de Hospede existe
        Optional<Hospede> hospede = hospedeRepository.findById(hospedagem.getIdHospede());
        if (!hospede.isPresent()) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("ID de Hospede não encontrado.");
        }
        
        // Verifique se o ID de Acomodacao está dentro do intervalo correto
        Long idAcomodacao = hospedagem.getIdAcomodacao();
        if (idAcomodacao < 1 || idAcomodacao > 6) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("ID de Acomodacao não existe.");
        }

        Hospedagem savedHospedagem = hospedagemRepository.save(hospedagem);
        return ResponseEntity.status(HttpStatus.CREATED).body(savedHospedagem);
    }


    @GetMapping("/list")
    public List<Hospedagem> listAllHospedagens() {
        return hospedagemRepository.findAll();
    }

    @GetMapping("/{id}")
    public ResponseEntity<Hospedagem> getHospedagemById(@PathVariable Long id) {
        Optional<Hospedagem> hospedagem = hospedagemRepository.findById(id);
        if (hospedagem.isPresent()) {
            return ResponseEntity.ok(hospedagem.get());
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @PutMapping("/{id}")
    public ResponseEntity<?> updateHospedagem(@PathVariable Long id, @RequestBody Hospedagem newHospedagem) {
        Optional<Hospedagem> existingHospedagem = hospedagemRepository.findById(id);
        if (existingHospedagem.isPresent()) {
            // Valide e atualize os dados da hospedagem conforme necessário
            Hospedagem hospedagem = existingHospedagem.get();
            hospedagem.setIdHospede(newHospedagem.getIdHospede());
            hospedagem.setIdAcomodacao(newHospedagem.getIdAcomodacao());
            hospedagem.setCheckIn(newHospedagem.getCheckIn());
            hospedagem.setCheckOut(newHospedagem.getCheckOut());
            hospedagemRepository.save(hospedagem);
            return ResponseEntity.ok(hospedagem);
        } else {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Hospedagem não encontrada.");
        }
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<String> deleteHospedagem(@PathVariable Long id) {
        Optional<Hospedagem> hospedagem = hospedagemRepository.findById(id);
        if (hospedagem.isPresent()) {
            hospedagemRepository.deleteById(id);
            return ResponseEntity.ok("Hospedagem excluída com sucesso!");
        } else {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Hospedagem não encontrada.");
        }
    }
}
