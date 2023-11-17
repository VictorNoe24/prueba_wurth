package com.example.pruebas.services;

import com.example.pruebas.modals.producto.Producto;
import com.example.pruebas.modals.producto.ProductoRepository;
import com.example.pruebas.utils.CustomResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.validation.annotation.Validated;

import java.sql.SQLException;
import java.util.List;

@Service
public class ProductoService {
    @Autowired
    private ProductoRepository repository;

    @Transactional(readOnly = true)
    public CustomResponse<List<Producto>> getAll() {
        try {
            return new CustomResponse<>(this.repository.findAll(), false, 200, "OK");
        } catch (Exception e) {
            return new CustomResponse<>(null, true, 500, "Error al actualizar usuario");
        }
    }

    @Transactional(readOnly = true)
    public CustomResponse<Producto> getOne(Long id) {
        try {
            return new CustomResponse<>(this.repository.findById(id).get(), false, 200, "OK");
        } catch (Exception e) {
            return new CustomResponse<>(null, true, 500, "Error al actualizar usuario");
        }
    }

    @Transactional(rollbackFor =  {SQLException.class})
    public CustomResponse<Producto> insert(@Validated Producto producto) {
        try {
            return new CustomResponse<>(this.repository.saveAndFlush(producto), false, 200, "OK");
        } catch (Exception e) {
            return new CustomResponse<>(null, true, 500, "Error al actualizar usuario");
        }
    }

    @Transactional(rollbackFor = {SQLException.class})
    public CustomResponse<Producto> update(Producto producto) {
        try {
            if(!this.repository.existsById(producto.getId().longValue()))
                return new CustomResponse<>(null,true,400,"Producto no existe");

            return new CustomResponse<>(this.repository.saveAndFlush(producto), false, 200, "OK");
        } catch (Exception e) {
            return new CustomResponse<>(null, true, 500, "Error al actualizar usuario");
        }
    }

    @Transactional(rollbackFor = {SQLException.class})
    public CustomResponse<Producto> delete(Long id) {
        try {
            if(!this.repository.existsById(id))
                return new CustomResponse<>(null, true, 400, "Producto no existe");
            this.repository.deleteById(id);
            return new CustomResponse<>(null, false, 200, "OK");
        } catch (Exception e) {
            return new CustomResponse<>(null, true, 500, "Error al actualizar usuario");
        }
    }

}
