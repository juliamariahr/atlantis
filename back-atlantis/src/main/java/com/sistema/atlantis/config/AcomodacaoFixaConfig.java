package com.sistema.atlantis.config;

import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import com.sistema.atlantis.entity.AcomodacaoFixa;
import com.sistema.atlantis.repository.AcomodacaoFixaRepository;

@Configuration
public class AcomodacaoFixaConfig {

    @Bean
    public CommandLineRunner initAcomodacoes(AcomodacaoFixaRepository acomodacaoFixaRepository) {
        return args -> {
            if (acomodacaoFixaRepository.count() == 0) { // Verifique se o repositório está vazio
                acomodacaoFixaRepository.save(new AcomodacaoFixa("Casal Simples", 0, 1, 1, true, 1));
                acomodacaoFixaRepository.save(new AcomodacaoFixa("Família Simples", 2, 1, 1, true, 1));
                acomodacaoFixaRepository.save(new AcomodacaoFixa("Família Mais", 5, 1, 2, true, 2));
                acomodacaoFixaRepository.save(new AcomodacaoFixa("Família Super", 6, 2, 3, true, 2));
                acomodacaoFixaRepository.save(new AcomodacaoFixa("Solteiro Simples", 1, 0, 1, true, 0));
                acomodacaoFixaRepository.save(new AcomodacaoFixa("Solteiro Mais", 0, 1, 1, true, 1));
            }
        };
    }
}
