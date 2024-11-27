package com.sistema.atlantis.entity;

import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Entity;

@Entity
public class AcomodacaoFixa {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String nome;
    private int camasSolteiro;
    private int camasCasal;
    private int suites;
    private boolean climatizacao;
    private int garagem;

    // Construtores

    public AcomodacaoFixa() {
        // Construtor vazio necessário para o Hibernate
    }

    public AcomodacaoFixa(String nome, int camasSolteiro, int camasCasal, int suites, boolean climatizacao, int garagem) {
        this.nome = nome;
        this.camasSolteiro = camasSolteiro;
        this.camasCasal = camasCasal;
        this.suites = suites;
        this.climatizacao = climatizacao;
        this.garagem = garagem;
    }

    public static final AcomodacaoFixa CASAL_SIMPLES = new AcomodacaoFixa("Casal Simples", 0, 1, 1, true, 1);
    public static final AcomodacaoFixa FAMILIA_SIMPLES = new AcomodacaoFixa("Família Simples", 2, 1, 1, true, 1);
    public static final AcomodacaoFixa FAMILIA_MAIS = new AcomodacaoFixa("Família Mais", 5, 1, 2, true, 2);
    public static final AcomodacaoFixa FAMILIA_SUPER = new AcomodacaoFixa("Família Super", 6, 2, 3, true, 2);
    public static final AcomodacaoFixa SOLTEIRO_SIMPLES = new AcomodacaoFixa("Solteiro Simples", 1, 0, 1, true, 0);
    public static final AcomodacaoFixa SOLTEIRO_MAIS = new AcomodacaoFixa("Solteiro Mais", 0, 1, 1, true, 1);

	public static AcomodacaoFixa getCasalSimples() {
		return CASAL_SIMPLES;
	}

	public static AcomodacaoFixa getFamiliaSimples() {
		return FAMILIA_SIMPLES;
	}

	public static AcomodacaoFixa getFamiliaMais() {
		return FAMILIA_MAIS;
	}

	public static AcomodacaoFixa getFamiliaSuper() {
		return FAMILIA_SUPER;
	}

	public static AcomodacaoFixa getSolteiroSimples() {
		return SOLTEIRO_SIMPLES;
	}

	public static AcomodacaoFixa getSolteiroMais() {
		return SOLTEIRO_MAIS;
	}
    
}