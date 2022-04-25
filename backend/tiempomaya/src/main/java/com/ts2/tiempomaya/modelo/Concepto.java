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
    @Column(name = "palabra")
    private String palabra;
    @Column(name = "significado")
    private String significado;

}
