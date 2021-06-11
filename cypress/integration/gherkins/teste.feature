
@login
Feature: Validar api fakerestapi online 

    @test
    Scenario: teste apifakerestapi GET
        Given quando realizo uma chamada do tipo "GET" 
        Then tenho o retorno "200"
     
    @test
    Scenario: teste apifakerestapi POST
        Given quando realizo uma chamada do tipo "POST" com payload válido
        Then tenho o retorno "200"
      
    @test
    Scenario: teste apifakerestapi GET por id
        Given quando realizo uma chamada do tipo "GET" e o id do payload
        Then tenho o retorno "200"


