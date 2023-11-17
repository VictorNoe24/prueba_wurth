package com.example.pruebas.modals.producto;

import com.example.pruebas.modals.categoria.Categoria;
import com.example.pruebas.modals.usuario.Usuario;
import com.fasterxml.jackson.annotation.JsonFormat;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.sql.Time;
import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.List;

@Entity
@Table(name = "producto")
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
public class Producto {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    @Column(nullable = false, length = 45)
    private String nombre;
    @Column(nullable = false)
    private Double precio;
    @Column(nullable = false)
    private Integer existencias;
    @Column(nullable = false, length = 150)
    private String fecha_registro;
    @ManyToOne
    @JoinColumn(name = "categoria_id")
    private Categoria categoria;
    @ManyToOne
    @JoinColumn(name = "usuario_registro")
    private Usuario usuario;
}
