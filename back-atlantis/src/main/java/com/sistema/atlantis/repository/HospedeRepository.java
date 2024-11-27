package com.sistema.atlantis.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.sistema.atlantis.entity.Hospede;

public interface HospedeRepository extends JpaRepository<Hospede, Long> {
}
