package com.sajansthapit.mytodolist.app.category.repository;import com.sajansthapit.mytodolist.app.category.models.Category;import org.springframework.data.jpa.repository.JpaRepository;import org.springframework.stereotype.Repository;@Repositorypublic interface CategoryRepository extends JpaRepository<Category, String> {}