package com.example.pruebas.controllers.usuarios;

import com.example.pruebas.modals.producto.Producto;
import com.example.pruebas.modals.usuario.Usuario;
import com.example.pruebas.utils.CustomResponse;
import com.example.pruebas.services.UsuarioService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;

@RestController
@RequestMapping("/api/usuarios")
@CrossOrigin(origins = {"*"})
public class UsuariosController {

    @Autowired
    private UsuarioService service;

    @GetMapping("/")
    public ResponseEntity<CustomResponse<List<Usuario>>>getAll() {
        return new ResponseEntity<>(this.service.getAll(), HttpStatus.OK);
    }

    @GetMapping("/{id}")
    public ResponseEntity<CustomResponse<Usuario>> geyById(@PathVariable("id") String correo) {
        return new ResponseEntity<>(this.service.getOne(correo), HttpStatus.OK);
    }

    @PostMapping("/")
    public ResponseEntity<CustomResponse<Usuario>> insert(@Validated @RequestBody Usuario usuario) {
        return new ResponseEntity<>(this.service.insert(usuario), HttpStatus.CREATED);
    }

    @PutMapping("/")
    public ResponseEntity<CustomResponse<Usuario>> update(@Valid @RequestBody Usuario usuario) {
        return new ResponseEntity<>(this.service.update(usuario), HttpStatus.CREATED);
    }
}
