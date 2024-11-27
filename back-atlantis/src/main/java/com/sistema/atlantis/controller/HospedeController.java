package com.sistema.atlantis.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.sistema.atlantis.entity.Hospede;
import com.sistema.atlantis.repository.HospedeRepository;

@RestController
@RequestMapping("/hospedes")
public class HospedeController {
    @Autowired
    private HospedeRepository hospedeRepository;

    @PostMapping("/create")
    public Hospede createHospede(@RequestBody Hospede hospede) {
        return hospedeRepository.save(hospede);
    }
    
    @GetMapping("/list")
    public List<Hospede> listAllHospedes() {
        return hospedeRepository.findAll();
    }

    @GetMapping("/{id}")
    public ResponseEntity<Hospede> getHospedeById(@PathVariable Long id) {
        Optional<Hospede> hospede = hospedeRepository.findById(id);
        if (hospede.isPresent()) {
            return ResponseEntity.ok(hospede.get());
        } else {
            return ResponseEntity.notFound().build();
        }
    }
    
    @PutMapping("/{id}")
    public ResponseEntity<?> updateHospede(@PathVariable Long id, @RequestBody Hospede newHospede) {
        Optional<Hospede> existingHospede = hospedeRepository.findById(id);
        if (existingHospede.isPresent()) {
            Hospede hospede = existingHospede.get();
            hospede.setName(newHospede.getName());
            hospede.setAge(newHospede.getAge());
            hospede.setCountry(newHospede.getCountry());
            hospedeRepository.save(hospede);
            return ResponseEntity.ok(hospede);
        } else {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Hóspede não encontrado.");
        }
    }
    
    @DeleteMapping("/{id}")
    public ResponseEntity<String> deleteHospede(@PathVariable Long id) {
        Optional<Hospede> hospede = hospedeRepository.findById(id);
        if (hospede.isPresent()) {
            hospedeRepository.deleteById(id);
            return ResponseEntity.ok("Hóspede excluído com sucesso!");
        } else {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Hóspede não encontrado.");
        }
    }

}
