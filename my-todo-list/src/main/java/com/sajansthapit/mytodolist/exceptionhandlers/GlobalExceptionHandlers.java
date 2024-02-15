package com.sajansthapit.mytodolist.exceptionhandlers;import org.springframework.http.HttpStatus;import org.springframework.http.HttpStatusCode;import org.springframework.http.ProblemDetail;import org.springframework.security.authentication.BadCredentialsException;import org.springframework.validation.FieldError;import org.springframework.web.bind.MethodArgumentNotValidException;import org.springframework.web.bind.annotation.ExceptionHandler;import org.springframework.web.bind.annotation.ResponseStatus;import org.springframework.web.bind.annotation.RestControllerAdvice;import java.net.URI;import java.util.HashMap;import java.util.Map;@RestControllerAdvicepublic class GlobalExceptionHandlers {    @ResponseStatus(HttpStatus.BAD_REQUEST)    @ExceptionHandler(MethodArgumentNotValidException.class)    public ProblemDetail handleValidationExceptions(MethodArgumentNotValidException exception) {        Map<String, Object> errors = new HashMap<>();        exception.getBindingResult().getAllErrors().forEach(error -> {            String fieldName = ((FieldError) error).getField();            String errorMessage = error.getDefaultMessage();            errors.put(fieldName, errorMessage);        });        ProblemDetail problemDetail = ProblemDetail                .forStatusAndDetail(HttpStatusCode.valueOf(400), "Certain values are incorrect");        problemDetail.setProperty("errors", errors);        problemDetail.setTitle("Incorrect values");        return problemDetail;    }    @ResponseStatus(HttpStatus.BAD_REQUEST)    @ExceptionHandler(BadCredentialsException.class)    public ProblemDetail handleBadCredentialException(BadCredentialsException exception) {        ProblemDetail problemDetail = ProblemDetail                .forStatusAndDetail(HttpStatus.BAD_REQUEST, exception.getMessage());        problemDetail.setType(URI.create("/login"));        problemDetail.setTitle("Invalid Credentials");        return problemDetail;    }}