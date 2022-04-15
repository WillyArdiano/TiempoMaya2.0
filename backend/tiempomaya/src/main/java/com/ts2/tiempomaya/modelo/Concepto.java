package com.ts2.tiempomaya.modelo;

import lombok.*;

import javax.persistence.*;

@Entity
@Table(name = "Concepto")
@Getter
@Setter
@ToString
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class Concepto {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id_concepto")
    private int idConcepto;
    @Column(name = "palabra")
    private String palabra;
    @Column(name = "significado")
    private String significado;

}
