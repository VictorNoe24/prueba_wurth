package com.example.pruebas.services;

import com.example.pruebas.modals.categoria.Categoria;
import com.example.pruebas.modals.categoria.CategoriaRepository;
import com.example.pruebas.utils.CustomResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.sql.SQLException;
import java.util.List;

@Service
public class CategoriaService {

    @Autowired
    private CategoriaRepository repository;

    @Transactional(readOnly = true)
    public CustomResponse<List<Categoria>> getAll() {
        return new CustomResponse<>(this.repository.findAll(), false, 200, "OK");
    }

    @Transactional(readOnly = true)
    public CustomResponse<Categoria> getOne(Long id) {
        return new CustomResponse<>(this.repository.findById(id).get(), false, 200, "OK");
    }

    @Transactional(rollbackFor =  {SQLException.class})
    public CustomResponse<Categoria> insert(Categoria categoria) {
        return new CustomResponse<>(this.repository.saveAndFlush(categoria), false, 200, "OK");
    }
}
