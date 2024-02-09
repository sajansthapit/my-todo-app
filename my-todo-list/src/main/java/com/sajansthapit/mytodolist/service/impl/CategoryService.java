package com.sajansthapit.mytodolist.service.impl;import com.sajansthapit.mytodolist.dto.BaseResponse;import com.sajansthapit.mytodolist.dto.GeneralDto;import com.sajansthapit.mytodolist.models.Category;import com.sajansthapit.mytodolist.repository.CategoryRepository;import com.sajansthapit.mytodolist.service.ICategoryService;import lombok.AllArgsConstructor;import org.springframework.stereotype.Service;import java.util.UUID;@Service@AllArgsConstructorpublic class CategoryService implements ICategoryService {    private final CategoryRepository categoryRepository;    @Override    public BaseResponse save(GeneralDto generalDto) {        Category category = new Category();        category.setId(UUID.randomUUID().toString());        category.setName(generalDto.name());        category.setActive(generalDto.isActive());        categoryRepository.save(category);        return new BaseResponse("Category saved successfully");    }}