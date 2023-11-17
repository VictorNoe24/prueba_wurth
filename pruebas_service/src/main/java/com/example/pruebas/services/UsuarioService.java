package com.example.pruebas.services;

import com.example.pruebas.modals.producto.Producto;
import com.example.pruebas.modals.usuario.Usuario;
import com.example.pruebas.modals.usuario.UsuarioRepository;
import com.example.pruebas.utils.CustomResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.validation.annotation.Validated;

import java.sql.SQLException;
import java.util.List;

@Service
public class UsuarioService {
    @Autowired
    private UsuarioRepository repository;

    @Transactional(readOnly = true)
    public CustomResponse<List<Usuario>> getAll() {
        return new CustomResponse<>(this.repository.findAll(), false, 200, "OK");
    }

    @Transactional(readOnly = true)
    public CustomResponse<Usuario> getOne(String correo) {
        try {
            return new CustomResponse<>(this.repository.getOneByEmail(correo).get(), false, 200, "OK");
        } catch (Exception e) {
            return new CustomResponse<>(null, true, 500, "Error de consulta de usuario");
        }
    }

    @Transactional(rollbackFor = {SQLException.class})
    public CustomResponse<Usuario> insert(@Validated Usuario usuario) {
        try {
            if(this.repository.existsByCorreo(usuario.getCorreo())){
                return new CustomResponse<>(null, true, 400, "Ya existe el usuario con el correo");
            }

            return new CustomResponse<>(this.repository.saveAndFlush(usuario), false, 200, "OK");
        } catch (Exception e) {
            return new CustomResponse<>(null, true, 500, "Error al registrar al usuario usuarios");
        }
    }

    @Transactional(rollbackFor = {SQLException.class})
    public CustomResponse<Usuario> update(@Validated Usuario usuario) {
        try {
            if(!this.repository.existsByCorreo(usuario.getCorreo()))
                return new CustomResponse<>(null,true,400,"Usuario no existe");

            return new CustomResponse<>(this.repository.saveAndFlush(usuario), false, 200, "Se actualizo el usuario");
        } catch (Exception e) {
            return new CustomResponse<>(null, true, 500, "Error al actualizar usuario");
        }
    }

}
