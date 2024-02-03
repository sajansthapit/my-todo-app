package com.sajansthapit.mytodolist.controller;import com.sajansthapit.mytodolist.config.filter.JwtService;import com.sajansthapit.mytodolist.dto.authdto.LoginRequestDto;import com.sajansthapit.mytodolist.dto.authdto.LoginSuccessDto;import lombok.AllArgsConstructor;import org.springframework.security.authentication.AuthenticationManager;import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;import org.springframework.security.core.Authentication;import org.springframework.security.core.userdetails.UsernameNotFoundException;import org.springframework.web.bind.annotation.PostMapping;import org.springframework.web.bind.annotation.RequestBody;import org.springframework.web.bind.annotation.RequestMapping;import org.springframework.web.bind.annotation.RestController;@RestController@AllArgsConstructor@RequestMapping("/login")public class LoginController {    private final AuthenticationManager authenticationManager;    private final JwtService jwtService;    @PostMapping    public LoginSuccessDto login(@RequestBody LoginRequestDto loginRequestDto) {        Authentication authentication = authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(loginRequestDto.username(), loginRequestDto.password()));        if (authentication.isAuthenticated()) {            return jwtService.generateToken(loginRequestDto.username());        } else {            throw new UsernameNotFoundException("invalid user request !");        }    }}