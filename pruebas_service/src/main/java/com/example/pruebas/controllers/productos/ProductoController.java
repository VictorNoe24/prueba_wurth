package com.example.pruebas.controllers.productos;

import com.example.pruebas.modals.producto.Producto;
import com.example.pruebas.utils.CustomResponse;
import com.example.pruebas.services.ProductoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api/productos")
@CrossOrigin(origins = {"*"})
public class ProductoController {
    @Autowired
    private ProductoService service;

    @GetMapping("/")
    public ResponseEntity<CustomResponse<List<Producto>>>getAll() {
        return new ResponseEntity<>(this.service.getAll(), HttpStatus.OK);
    }

    @GetMapping("/{id}")
    public ResponseEntity<CustomResponse<Producto>> geyById(@PathVariable("id") Long id) {
        return new ResponseEntity<>(this.service.getOne(id), HttpStatus.OK);
    }

    @PostMapping("/")
    public ResponseEntity<CustomResponse<Producto>> insert(@Valid @RequestBody Producto producto) {
        return new ResponseEntity<>(this.service.insert(producto), HttpStatus.CREATED);
    }

    @PutMapping("/")
    public ResponseEntity<CustomResponse<Producto>> update(@Valid @RequestBody Producto producto) {
        return new ResponseEntity<>(this.service.update(producto), HttpStatus.CREATED);
    }

    @DeleteMapping("/")
    public ResponseEntity<CustomResponse<Producto>> delete(@Valid @RequestBody Map<String, Long> requts) {
        Long id=requts.get("id");
        return new ResponseEntity<>(this.service.delete(id), HttpStatus.CREATED);

    }

}
