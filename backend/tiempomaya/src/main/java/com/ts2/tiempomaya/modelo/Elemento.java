package com.ts2.tiempomaya.modelo;

import lombok.*;

import javax.persistence.*;

@Entity
@Table(name = "Elemento")
@Getter
@Setter
@ToString
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class Elemento {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id_elemento")
    private int idElemento;
    @Column(name = "tipo_elemento")
    private String tipoElemento;
    @Column(name = "nombre")
    private String nombre;
    @Column(name = "descripcion")
    private String descripcion;
    @Column(name = "significado")
    private String significado;

}
