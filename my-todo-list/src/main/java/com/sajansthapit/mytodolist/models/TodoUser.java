package com.sajansthapit.mytodolist.models;import jakarta.persistence.Column;import jakarta.persistence.Entity;import jakarta.persistence.Id;import jakarta.persistence.Table;import lombok.AllArgsConstructor;import lombok.Builder;import lombok.Getter;import lombok.NoArgsConstructor;import lombok.Setter;import org.springframework.security.core.GrantedAuthority;import org.springframework.security.core.userdetails.UserDetails;import java.util.Collection;import java.util.Collections;import java.util.Objects;@Getter@Setter@Entity@Builder@NoArgsConstructor@AllArgsConstructor@Table(name = "todo_user")public class TodoUser extends BaseModel implements UserDetails {    @Id    private String id;    @Column(name = "full_name", nullable = false)    private String fullName;    @Column(name = "email", unique = true, nullable = false)    private String email;    @Column(name = "password", nullable = false)    private String password;    @Override    public boolean equals(Object o) {        if (this == o) return true;        if (!(o instanceof TodoUser todoUser)) return false;        if (!super.equals(o)) return false;        return Objects.equals(id, todoUser.id) && Objects.equals(fullName, todoUser.fullName) && Objects.equals(email, todoUser.email) && Objects.equals(password, todoUser.password);    }    @Override    public int hashCode() {        return Objects.hash(super.hashCode(), id, fullName, email, password);    }    @Override    public Collection<? extends GrantedAuthority> getAuthorities() {        return Collections.emptyList();    }    @Override    public String getUsername() {        return this.email;    }    @Override    public boolean isAccountNonExpired() {        return true;    }    @Override    public boolean isAccountNonLocked() {        return true;    }    @Override    public boolean isCredentialsNonExpired() {        return true;    }    @Override    public boolean isEnabled() {        return true;    }}