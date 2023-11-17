package com.example.pruebas.controllers.categoria;

import com.example.pruebas.modals.categoria.Categoria;
import com.example.pruebas.services.CategoriaService;
import com.example.pruebas.utils.CustomResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;

@RestController
@RequestMapping("/api/categorias")
@CrossOrigin(origins = {"*"})
public class CategoriaController {
    @Autowired
    private CategoriaService service;

    @GetMapping("/")
    public ResponseEntity<CustomResponse<List<Categoria>>> getAll() {
        return new ResponseEntity<>(this.service.getAll(), HttpStatus.OK);
    }

    @GetMapping("/{id}")
    public ResponseEntity<CustomResponse<Categoria>> geyById(@PathVariable("id") Long id) {
        return new ResponseEntity<>(this.service.getOne(id), HttpStatus.OK);
    }

    @PostMapping("/")
    public ResponseEntity<CustomResponse<Categoria>> insert(@Valid @RequestBody Categoria categoria) {
        return new ResponseEntity<>(this.service.insert(categoria), HttpStatus.CREATED);
    }
}
